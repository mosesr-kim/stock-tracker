var $search = document.querySelector('.searchForm');
var $main = document.querySelector('main');
var $searchContainer = document.querySelector('.searchContainer');
var $watchlistEntries = document.querySelector('.watchlistEntries');
var $watchlistButton = document.querySelector('.watchlist');
var $trendingButton = document.querySelector('.trending');
var $watchlistContainer = document.querySelector('.watchlistContainer');
var $noStocks = document.querySelector('.noStocks');
var $editHeader = document.querySelector('.editHeader');
var $searchResultHeader = document.querySelector('.searchResultHeader');
var $modalContainer = document.querySelector('.modalContainer');
var $cancelButton = document.querySelector('.cancelButton');
var $confirmButton = document.querySelector('.confirmButton');
var $trendingContainer = document.querySelector('.trendingContainer');
var $trendingStockEntries = document.querySelector('.trendingStockEntries');
var $views = document.querySelectorAll('.view');
var $logo = document.querySelector('.logo');
var $loading = document.querySelector('.loading');
var $noResult = document.querySelector('.noResult');
var $error = document.querySelector('.error');

$search.addEventListener('submit', handleSearch);
$main.addEventListener('click', handleAddStock);
$watchlistButton.addEventListener('click', handleWatchlist);
$watchlistEntries.addEventListener('click', watchlistToSearch);
$main.addEventListener('click', modal);
$cancelButton.addEventListener('click', cancel);
$confirmButton.addEventListener('click', handleDeleteStock);
$trendingButton.addEventListener('click', handleTrending);
$trendingStockEntries.addEventListener('click', handleAddTrending);
$logo.addEventListener('click', goHome);

function handleSearch(event) {
  event.preventDefault();
  removeSearchEntry();
  viewSwap('search');
  $searchResultHeader.className = 'hidden';
  $loading.className = 'row loading';
  $editHeader.className = 'hidden';
  $noResult.className = 'hidden';
  data.editing = false;
  data.search = $search.elements.search.value;
  searchRequest(data.search);
}

function searchRequest(search) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function () {
    if (this.status !== 200) {
      $error.className = 'row error';
      $error.textContent += this.status;
      return;
    }
    if (!this.response.price) {
      $noResult.className = 'row noResult';
      $searchResultHeader.className = 'row searchResultHeader';
      $loading.className = 'hidden';
      return;
    }
    data.searchResult = this.response;
    var stockSearchDOM = createStockEntry(data.searchResult);
    $searchContainer.appendChild(stockSearchDOM);
    var deleteButton = document.querySelector('.fa-minus-circle');
    deleteButton.className = 'hidden';
    $searchResultHeader.className = 'row searchResultHeader';
    $loading.className = 'hidden';
    $noResult.className = 'hidden';
    $error.className = 'hidden';
    $search.reset();
    return data.searchResult;
  });
  xhr.open('GET', 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=' + search + '&region=US');
  xhr.responseType = 'json';
  xhr.setRequestHeader('x-rapidapi-key', '869820100bmsh7cc30b317c45153p1f792fjsn21c1cc0536d7');
  xhr.setRequestHeader('x-rapidapi-host', 'apidojo-yahoo-finance-v1.p.rapidapi.com');
  xhr.send();
}

function trendingSearchRequest(search) {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function () {
    data.searchResult = this.response;
    data.watchlist[data.searchResult.price.symbol] = data.searchResult;
    var stockSearchDOM = createWatchlistEntry(data.searchResult);
    $watchlistEntries.appendChild(stockSearchDOM);
    $noStocks.className = 'hidden';
    return data.searchResult;
  });
  xhr.open('GET', 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=' + search + '&region=US');
  xhr.responseType = 'json';
  xhr.setRequestHeader('x-rapidapi-key', '869820100bmsh7cc30b317c45153p1f792fjsn21c1cc0536d7');
  xhr.setRequestHeader('x-rapidapi-host', 'apidojo-yahoo-finance-v1.p.rapidapi.com');
  xhr.send();
}

function trendingRequest() {
  var xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function () {
    data.trending = this.response;
    addTrendingStock(data.trending);
  });
  xhr.open('GET', 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers?region=US');
  xhr.responseType = 'json';
  xhr.setRequestHeader('x-rapidapi-key', '869820100bmsh7cc30b317c45153p1f792fjsn21c1cc0536d7');
  xhr.setRequestHeader('x-rapidapi-host', 'apidojo-yahoo-finance-v1.p.rapidapi.com');
  xhr.send();
}

function createStockEntry(data) {
  var searchContainerResult = document.createElement('div');
  searchContainerResult.className = 'row searchContainerResult';

  var headerRow = document.createElement('div');
  headerRow.className = 'row headerRow justify-center';
  searchContainerResult.appendChild(headerRow);

  var stockName = document.createElement('h1');
  stockName.className = 'stockName';
  stockName.textContent = data.price.shortName;
  headerRow.appendChild(stockName);

  var stockSymbol = document.createElement('h1');
  stockSymbol.className = 'stockSymbol';
  stockSymbol.textContent = data.price.symbol;
  headerRow.appendChild(stockSymbol);

  var stockPrice = document.createElement('h1');
  headerRow.appendChild(stockPrice);

  var stockPriceSpan = document.createElement('span');
  stockPriceSpan.className = 'searchStockPrice positive';
  stockPriceSpan.textContent = '$' + data.price.regularMarketPrice.fmt;
  stockPrice.appendChild(stockPriceSpan);

  var subHeaderRow = document.createElement('div');
  subHeaderRow.className = 'row subHeaderRow justify-center';
  searchContainerResult.appendChild(subHeaderRow);

  var todayPercentage = document.createElement('h2');
  todayPercentage.className = 'todayPercentage';
  todayPercentage.textContent = 'Today: ';
  subHeaderRow.appendChild(todayPercentage);

  var todayPercentageSpan = document.createElement('span');
  if (checkPercentage(data.price.regularMarketChangePercent.raw) === true) {
    todayPercentageSpan.className = 'stockToday positive';
  } else {
    todayPercentageSpan.className = 'stockToday negative';
  }
  todayPercentageSpan.textContent = data.price.regularMarketChangePercent.fmt;
  todayPercentage.appendChild(todayPercentageSpan);

  var todayLow = document.createElement('h2');
  todayLow.className = 'todayLow';
  todayLow.textContent = 'Low: ';
  subHeaderRow.appendChild(todayLow);

  var todayLowSpan = document.createElement('span');
  todayLowSpan.className = 'negative';
  todayLowSpan.textContent = '$' + data.price.regularMarketDayLow.fmt;
  todayLow.appendChild(todayLowSpan);

  var todayHigh = document.createElement('h2');
  todayHigh.className = 'todayHigh';
  todayHigh.textContent = 'High: ';
  subHeaderRow.appendChild(todayHigh);

  var todayHighSpan = document.createElement('span');
  todayHighSpan.className = 'positive';
  todayHighSpan.textContent = '$' + data.price.regularMarketDayHigh.fmt;
  todayHigh.appendChild(todayHighSpan);

  if (data.assetProfile) {
    if (data.assetProfile.longBusinessSummary) {
      var companySummary = document.createElement('p');
      companySummary.className = 'companySummary';
      companySummary.textContent = firstHalf(data.assetProfile.longBusinessSummary);
      searchContainerResult.appendChild(companySummary);

      var dots = document.createElement('span');
      dots.className = 'dots';
      dots.textContent = '...';
      companySummary.appendChild(dots);

      var more = document.createElement('span');
      more.className = 'more hidden';
      more.textContent = secondHalf(data.assetProfile.longBusinessSummary);
      companySummary.appendChild(more);
    }
    if (data.assetProfile.description) {
      companySummary = document.createElement('p');
      companySummary.className = 'companySummary';
      companySummary.textContent = firstHalf(data.assetProfile.description);
      searchContainerResult.appendChild(companySummary);

      dots = document.createElement('span');
      dots.className = 'dots';
      dots.textContent = '...';
      companySummary.appendChild(dots);

      more = document.createElement('span');
      more.className = 'more hidden';
      more.textContent = secondHalf(data.assetProfile.description);
      companySummary.appendChild(more);
    }
  }

  var buttonRow = document.createElement('div');
  buttonRow.className = 'buttonRow space-between';
  searchContainerResult.appendChild(buttonRow);

  var readMoreButton = document.createElement('a');
  readMoreButton.className = 'readMore';
  readMoreButton.setAttribute('href', '#');
  readMoreButton.textContent = 'Read More';
  buttonRow.appendChild(readMoreButton);

  readMoreButton.addEventListener('click', readMore);

  var addStock = document.createElement('i');
  addStock.className = 'fas fa-plus-circle';
  buttonRow.appendChild(addStock);

  var deleteStock = document.createElement('i');
  deleteStock.className = 'fas fa-minus-circle';
  buttonRow.appendChild(deleteStock);

  return searchContainerResult;
}

function firstHalf(summary) {
  var newString = '';
  for (var i = 0; i < (summary.length / 2); i++) {
    newString += summary[i];
  }
  return newString;
}

function secondHalf(summary) {
  var newString = '';
  for (var i = Math.floor(summary.length / 2); i < summary.length; i++) {
    newString += summary[i];
  }
  return newString;
}

function checkPercentage(percentage) {
  return percentage > 0;
}

function handleAddStock(event) {
  if (event.target.className.includes('fa-plus-circle')) {
    for (var key in data.watchlist) {
      if (key === data.searchResult.price.symbol) {
        viewSwap('watchlist');
        return;
      }
    }
    data.watchlist[data.searchResult.price.symbol] = data.searchResult;
    var watchlistDOM = createWatchlistEntry(data.searchResult);
    $watchlistEntries.appendChild(watchlistDOM);
    $noStocks.className = 'hidden';
    viewSwap('watchlist');
  }
}

function modal(event) {
  if (event.target.className.includes('fa-minus-circle')) {
    $modalContainer.className = 'modalContainer';
  }
}

function cancel(event) {
  $modalContainer.className = 'hidden';
}

function handleDeleteStock(event) {
  var stockSymbol = $searchContainer.querySelector('.stockSymbol').textContent;
  for (var key in data.watchlist) {
    if (stockSymbol === key) {
      delete data.watchlist[key];
      var watchlistEntries = document.querySelectorAll('.watchlistEntryContainer');
      for (var z = 0; z < watchlistEntries.length; z++) {
        if (stockSymbol === watchlistEntries[z].querySelector('.watchlistStockSymbol').textContent) {
          watchlistEntries[z].remove();
        }
      }
    }
  }
  if (Object.keys(data.watchlist).length === 0) {
    $noStocks.className = 'noStocks';
  }
  viewSwap('watchlist');
  $trendingContainer.className = 'view trendingContainer';
  $modalContainer.className = 'hidden';
}

function removeSearchEntry(data) {
  if (document.querySelector('.searchContainerResult')) {
    document.querySelector('.searchContainerResult').remove();
  }
}

function createWatchlistEntry(data) {
  var watchlistEntryContainer = document.createElement('div');
  watchlistEntryContainer.className = 'watchlistEntryContainer justify-center';

  var namePriceRow = document.createElement('div');
  namePriceRow.className = 'row namePriceRow align-center';
  watchlistEntryContainer.appendChild(namePriceRow);

  var stockSymbol = document.createElement('h2');
  stockSymbol.className = 'watchlistStockSymbol';
  stockSymbol.textContent = data.price.symbol;
  namePriceRow.appendChild(stockSymbol);

  var stockPrice = document.createElement('span');
  stockPrice.className = 'stockPrice positive';
  stockPrice.textContent = '$' + data.price.regularMarketPrice.fmt;
  namePriceRow.appendChild(stockPrice);

  var todayRow = document.createElement('div');
  todayRow.className = 'row todayRow align-center';
  watchlistEntryContainer.appendChild(todayRow);

  var todayLabel = document.createElement('h3');
  todayLabel.className = 'todayLabel';
  todayLabel.textContent = 'Today: ';
  todayRow.appendChild(todayLabel);

  var todayPercentage = document.createElement('span');
  if (checkPercentage(data.price.regularMarketChangePercent.raw) === true) {
    todayPercentage.className = 'stockPercentage positive';
  } else {
    todayPercentage.className = 'stockPercentage negative';
  }
  todayPercentage.textContent = data.price.regularMarketChangePercent.fmt;
  todayRow.appendChild(todayPercentage);

  var lowRow = document.createElement('div');
  lowRow.className = 'row lowRow align-center';
  watchlistEntryContainer.appendChild(lowRow);

  var lowLabel = document.createElement('h3');
  lowLabel.className = 'lowLabel';
  lowLabel.textContent = 'Low: ';
  lowRow.appendChild(lowLabel);

  var lowPrice = document.createElement('span');
  lowPrice.className = 'lowPrice negative';
  lowPrice.textContent = '$' + data.price.regularMarketDayLow.fmt;
  lowRow.appendChild(lowPrice);

  var highRow = document.createElement('div');
  highRow.className = 'row highRow align-center';
  watchlistEntryContainer.appendChild(highRow);

  var highLabel = document.createElement('h3');
  highLabel.className = 'highLabel';
  highLabel.textContent = 'High: ';
  highRow.appendChild(highLabel);

  var highPrice = document.createElement('span');
  highPrice.className = 'highPrice positive';
  highPrice.textContent = '$' + data.price.regularMarketDayHigh.fmt;
  highRow.appendChild(highPrice);

  return watchlistEntryContainer;
}

function viewSwap(viewName) {
  $trendingStockEntries.innerHTML = '';
  addTrendingStock(data.trending);
  data.view = viewName;
  if (viewName === 'home') {
    $watchlistContainer.className = 'view watchlistContainer';
    $trendingContainer.className = 'view trendingContainer';
    $searchContainer.className = 'view hidden';
    return;
  }
  var containerName = viewName + 'Container';
  for (var i = 0; i < $views.length; i++) {
    if (viewName === $views[i].getAttribute('data-view')) {
      $views[i].className = 'view ' + containerName;
    } else {
      $views[i].className = 'view hidden';
    }
  }
  if (viewName === 'search') {
    $watchlistContainer.className = 'view watchlistContainer';
    $trendingContainer.className = 'view trendingContainer';
  }
}

function handleWatchlist(event) {
  viewSwap('watchlist');
}

function handleTrending(event) {
  viewSwap('trending');
}

function readMore(event) {
  var $dots = document.querySelector('.dots');
  var $more = document.querySelector('.more');
  var $readMore = document.querySelector('.readMore');
  if ($dots.className === 'dots hidden') {
    $dots.className = 'dots';
    $readMore.textContent = 'Read More';
    $more.className = 'more hidden';
  } else {
    $dots.className = 'dots hidden';
    $readMore.textContent = 'Read Less';
    $more.className = 'more';
  }
}

window.addEventListener('DOMContentLoaded', function (event) {
  if (data.watchlist === null) {
    $noStocks.className = 'noStocks';
  }
  for (var key in data.watchlist) {
    var watchlistDOM = createWatchlistEntry(data.watchlist[key]);
    $watchlistEntries.appendChild(watchlistDOM);
    $noStocks.className = 'hidden';
  }

  if (data.searchResult) {
    $searchContainer.appendChild(createStockEntry(data.searchResult));
  }

  if (data.editing === true) {
    $editHeader.className = 'row editHeader';
    $searchResultHeader.className = 'hidden';
    var addButton = document.querySelector('.fa-plus-circle');
    addButton.className = 'hidden';
  }
  if (data.editing === false) {
    $editHeader.className = 'hidden';
    $searchResultHeader.className = 'row searchResultHeader';
    if (document.querySelector('.fa-minus-circle')) {
      var deleteButton = document.querySelector('.fa-minus-circle');
      deleteButton.className = 'hidden';
    }
  }
  if (data.trending === null) {
    trendingRequest();
  } else {
    addTrendingStock(data.trending);
  }
  if (data.view === null) {
    viewSwap('home');
  } else {
    viewSwap(data.view);
  }
});

function watchlistToSearch(event) {
  if (event.target.closest('.watchlistEntryContainer')) {
    removeSearchEntry();
    viewSwap('search');
    data.editing = true;
    $editHeader.className = 'row editHeader';
    $searchResultHeader.className = 'hidden';
    var stockSymbol = event.target.closest('.watchlistEntryContainer').querySelector('.watchlistStockSymbol').textContent;
    for (var key in data.watchlist) {
      if (stockSymbol === key) {
        data.searchResult = data.watchlist[key];
        var editWatchlist = createStockEntry(data.watchlist[key]);
        $searchContainer.appendChild(editWatchlist);
        var addButton = document.querySelector('.fa-plus-circle');
        addButton.className = 'hidden';
      }
    }
  }
}

function getPercentage(data) {
  var stringed = data.toString();
  var newString = '';
  for (var i = 0; i < stringed.length; i++) {
    newString += stringed[i];
  }
  return newString + '%';
}

function createTrendingDOM(data) {
  var trendingEntryContainer = document.createElement('div');
  trendingEntryContainer.className = 'row trendingEntryContainer space-between';

  var columnName = document.createElement('div');
  columnName.className = 'column-20 columnName';
  trendingEntryContainer.appendChild(columnName);

  var trendingStockName = document.createElement('p');
  trendingStockName.className = 'trendingStockName';
  trendingStockName.textContent = data.shortName;
  columnName.appendChild(trendingStockName);

  var columnSymbol = document.createElement('div');
  columnSymbol.className = 'column-20 columnSymbol';
  trendingEntryContainer.appendChild(columnSymbol);

  var trendingStockSymbol = document.createElement('p');
  trendingStockSymbol.className = 'trendingStockSymbol';
  trendingStockSymbol.textContent = data.symbol;
  columnSymbol.appendChild(trendingStockSymbol);

  var columnPrice = document.createElement('div');
  columnPrice.className = 'column-20 columnPrice';
  trendingEntryContainer.appendChild(columnPrice);

  var trendingStockPrice = document.createElement('p');
  trendingStockPrice.className = 'trendingStockPrice positive';
  trendingStockPrice.textContent = '$' + data.regularMarketPrice;
  columnPrice.appendChild(trendingStockPrice);

  var columnPercentage = document.createElement('div');
  columnPercentage.className = 'column-20 columnPercentage';
  trendingEntryContainer.appendChild(columnPercentage);

  var trendingStockPercentage = document.createElement('p');
  if (checkPercentage(data.regularMarketChangePercent) === true) {
    trendingStockPercentage.className = 'trendingStockPercentage positive';
  } else {
    trendingStockPercentage.className = 'trendingStockPercentage negative';
  }
  trendingStockPercentage.textContent = getPercentage(data.regularMarketChangePercent);
  columnPercentage.appendChild(trendingStockPercentage);

  var columnIcon = document.createElement('div');
  columnIcon.className = 'column-20 columnIcon justify-center align-center';
  trendingEntryContainer.appendChild(columnIcon);

  var checkButton = document.createElement('i');
  checkButton.className = 'fas fa-check';
  columnIcon.appendChild(checkButton);

  for (var key in this.data.watchlist) {
    if (key === data.symbol) {
      checkButton.className = 'fas fa-times';
    }
  }

  return trendingEntryContainer;
}

function addTrendingStock(data) {
  for (var i = 0; i < data.finance.result[0].quotes.length; i++) {
    var trendingDOM = createTrendingDOM(data.finance.result[0].quotes[i]);
    $trendingStockEntries.appendChild(trendingDOM);
  }
}

function handleAddTrending(event) {
  if (event.target.className.includes('fa-check')) {
    var check = event.target.closest('i');
    check.className = 'fas fa-times';
    var stockSymbol = event.target.closest('.trendingEntryContainer').querySelector('.columnSymbol').textContent;
    trendingSearchRequest(stockSymbol);
    return;
  }
  if (event.target.className.includes('fa-times')) {
    check = event.target.closest('i');
    check.className = 'fas fa-check';
    stockSymbol = event.target.closest('.trendingEntryContainer').querySelector('.columnSymbol').textContent;
    for (var key in data.watchlist) {
      if (stockSymbol === key) {
        delete data.watchlist[key];
        var watchlistEntries = document.querySelectorAll('.watchlistEntryContainer');
        for (var z = 0; z < watchlistEntries.length; z++) {
          if (stockSymbol === watchlistEntries[z].querySelector('.watchlistStockSymbol').textContent) {
            watchlistEntries[z].remove();
          }
        }
      }
    }
    if (data.watchlist === 0) {
      $noStocks.className = 'noStocks';
    }
  }
}

function goHome(event) {
  viewSwap('home');
}
