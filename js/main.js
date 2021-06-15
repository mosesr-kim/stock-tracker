/* global requests, trendingTickers */
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
  data.editing = false;
  $searchResultHeader.className = 'row searchResultHeader';
  $editHeader.className = 'hidden';
  data.search = $search.elements.search.value;
  // searchRequest(data.search);
  for (var key in requests) {
    if (data.search.toUpperCase() === key) {
      data.searchResult = requests[key];
      var stockSearchDOM = createStockEntry(requests[key]);
      $searchContainer.appendChild(stockSearchDOM);
      var deleteButton = document.querySelector('.fa-minus-circle');
      deleteButton.className = 'hidden';
    }
    $search.reset();
  }
  // (Code below is commented out to avoid rate limiting restrictions)
  // Gets the stock ticker symbol from the form and runs the searchRequest function which requests data from the api.
  // data.search = $search.elements.search.value;
  // searchRequest(data.search);
}

// (Code below is commented out to avoid rate limiting restrictions)
// The function to request Stock/V2/Get-Profile of a certain stock ticker symbol.
// function searchRequest(search) {
//   var xhr = new XMLHttpRequest();
//   xhr.addEventListener('load', function () {
//     console.log(this.status);
//     console.log(this.response);
//     data.searchResult = this.response;
//     var stockSearchDOM = createStockEntry(data.searchResult);
//     $searchContainer.appendChild(stockSearchDOM);
//     var deleteButton = document.querySelector('.fa-minus-circle');
//     deleteButton.className = 'hidden';
//     $search.reset();
//     return data.searchResult;
//   });
//   xhr.open('GET', 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=' + search + '&region=US');
//   xhr.responseType = 'json';
//   xhr.setRequestHeader('x-rapidapi-key', '869820100bmsh7cc30b317c45153p1f792fjsn21c1cc0536d7');
//   xhr.setRequestHeader('x-rapidapi-host', 'apidojo-yahoo-finance-v1.p.rapidapi.com');
//   xhr.send();
// }

// function trendingSearchRequest(search) {
//   var xhr = new XMLHttpRequest();
//   xhr.addEventListener('load', function () {
//     console.log(this.status);
//     console.log(this.response);
//     data.searchResult = this.response;
//     var stockSearchDOM = createWatchlistEntry(data.searchResult);
//     $watchlistEntries.appendChild(stockSearchDOM);
//     return data.searchResult;
//   });
//   xhr.open('GET', 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-profile?symbol=' + search + '&region=US');
//   xhr.responseType = 'json';
//   xhr.setRequestHeader('x-rapidapi-key', '869820100bmsh7cc30b317c45153p1f792fjsn21c1cc0536d7');
//   xhr.setRequestHeader('x-rapidapi-host', 'apidojo-yahoo-finance-v1.p.rapidapi.com');
//   xhr.send();
// }

// (Code below is commented out to avoid rate limiting restrictions)
// The function to request market/get-trending-tickers
// function trendingRequest() {
//   var xhr = new XMLHttpRequest();
//   xhr.addEventListener('load', function () {
//     console.log(this.status);
//     console.log(this.response);
//     data.trending = this.response;
//     addTrendingStock(data.trending);
//   });
//   xhr.open('GET', 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers?region=US');
//   xhr.responseType = 'json';
//   xhr.setRequestHeader('x-rapidapi-key', '869820100bmsh7cc30b317c45153p1f792fjsn21c1cc0536d7');
//   xhr.setRequestHeader('x-rapidapi-host', 'apidojo-yahoo-finance-v1.p.rapidapi.com');
//   xhr.send();
// }

function createStockEntry(data) {
  var searchContainerResult = document.createElement('div');
  searchContainerResult.className = 'row searchContainerResult';

  var headerRow = document.createElement('div');
  headerRow.className = 'row headerRow justify-center';
  searchContainerResult.appendChild(headerRow);

  var stockName = document.createElement('h1');
  stockName.className = 'stockName';
  stockName.textContent = data.price.longName;
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
    for (var i = 0; i < data.watchlist.length; i++) {
      if (data.watchlist[i].price.symbol === data.searchResult.price.symbol) {
        viewSwap('watchlist');
        return;
      }
    }
    data.watchlist.push(data.searchResult);
    var watchlistDOM = createWatchlistEntry(data.searchResult);
    $watchlistEntries.appendChild(watchlistDOM);
    $noStocks.setAttribute('class', 'hidden');
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
  for (var i = 0; i < data.watchlist.length; i++) {
    if (stockSymbol === data.watchlist[i].price.symbol) {
      data.watchlist.splice([i], 1);
      var watchlistEntries = document.querySelectorAll('.watchlistEntryContainer');
      for (var z = 0; z < watchlistEntries.length; z++) {
        if (stockSymbol === watchlistEntries[z].querySelector('.watchlistStockSymbol').textContent) {
          watchlistEntries[z].remove();
        }
      }
    }
  }
  if (data.watchlist.length === 0) {
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
  if (data.watchlist.length === 0) {
    $noStocks.className = 'noStocks';
  }
  for (var i = 0; i < data.watchlist.length; i++) {
    var watchlistDOM = createWatchlistEntry(data.watchlist[i]);
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
  addTrendingStock(trendingTickers);
  // trendingRequest();
  viewSwap(data.view);
});

function watchlistToSearch(event) {
  if (event.target.closest('.watchlistEntryContainer')) {
    removeSearchEntry();
    viewSwap('search');
    data.editing = true;
    $editHeader.className = 'row editHeader';
    $searchResultHeader.className = 'hidden';
    var stockSymbol = event.target.closest('.watchlistEntryContainer').querySelector('.watchlistStockSymbol').textContent;
    for (var i = 0; i < data.watchlist.length; i++) {
      if (stockSymbol === data.watchlist[i].price.symbol) {
        data.searchResult = data.watchlist[i];
        var editWatchlist = createStockEntry(data.watchlist[i]);
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
  for (var i = 0; i < 5; i++) {
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
  trendingStockName.textContent = data.longName;
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

  var xButton = document.createElement('i');
  xButton.className = 'fas fa-times hidden';
  columnIcon.appendChild(xButton);

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
    check.className = 'fas fa-check hidden';
    var stockSymbol = event.target.closest('.trendingEntryContainer').querySelector('.columnSymbol').textContent;
    // trendingSearchRequest(stockSymbol);
    // viewSwap('watchlist');
    for (var i = 0; i < trendingTickers.finance.result[0].quotes.length; i++) {
      if (trendingTickers.finance.result[0].quotes[i].symbol === stockSymbol) {
        var trendingToWatchlist = createWatchlistEntry(trendingTickers.finance.result[0].quotes[i]);
        $watchlistEntries.appendChild(trendingToWatchlist);
        viewSwap('watchlist');
      }
    }
  }
}

function goHome(event) {
  viewSwap('home');
}
