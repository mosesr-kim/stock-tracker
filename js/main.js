const $search = document.querySelector('.searchForm');
const $main = document.querySelector('main');
const $searchContainer = document.querySelector('.searchContainer');
const $watchlistEntries = document.querySelector('.watchlistEntries');
const $desktopHeader = document.querySelector('.desktopHeader');
const $watchlistContainer = document.querySelector('.watchlistContainer');
const $noStocks = document.querySelector('.noStocks');
const $editHeader = document.querySelector('.editHeader');
const $searchResultHeader = document.querySelector('.searchResultHeader');
const $modalContainer = document.querySelector('.modalContainer');
const $cancelButton = document.querySelector('.cancelButton');
const $confirmButton = document.querySelector('.confirmButton');
const $trendingContainer = document.querySelector('.trendingContainer');
const $trendingStockEntries = document.querySelector('.trendingStockEntries');
const $views = document.querySelectorAll('.view');
const $loading = document.querySelector('.loading');
const $noResult = document.querySelector('.noResult');
const $error = document.querySelector('.error');

$search.addEventListener('submit', handleSearch);
$main.addEventListener('click', handleAddStock);
$desktopHeader.addEventListener('click', handleViewSwap);
$watchlistEntries.addEventListener('click', watchlistToSearch);
$main.addEventListener('click', modal);
$cancelButton.addEventListener('click', cancel);
$confirmButton.addEventListener('click', handleDeleteStock);
$trendingStockEntries.addEventListener('click', handleAddTrending);

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
  const xhr = new XMLHttpRequest();
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
    const stockSearchDOM = createStockEntry(data.searchResult);
    $searchContainer.appendChild(stockSearchDOM);
    const deleteButton = document.querySelector('.fa-minus-circle');
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
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load', function () {
    data.searchResult = this.response;
    data.watchlist[data.searchResult.price.symbol] = data.searchResult;
    const stockSearchDOM = createWatchlistEntry(data.searchResult);
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
  const xhr = new XMLHttpRequest();
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
  const searchContainerResult = document.createElement('div');
  searchContainerResult.className = 'searchContainerResult';

  const headerRow = document.createElement('div');
  headerRow.className = 'row headerRow justify-center';
  searchContainerResult.appendChild(headerRow);

  const stockName = document.createElement('h1');
  stockName.className = 'stockName';
  stockName.textContent = data.price.shortName;
  headerRow.appendChild(stockName);

  const stockSymbol = document.createElement('h1');
  stockSymbol.className = 'stockSymbol';
  stockSymbol.textContent = data.price.symbol;
  headerRow.appendChild(stockSymbol);

  const stockPrice = document.createElement('h1');
  headerRow.appendChild(stockPrice);

  const stockPriceSpan = document.createElement('span');
  stockPriceSpan.className = 'searchStockPrice positive';
  stockPriceSpan.textContent = '$' + data.price.regularMarketPrice.fmt;
  stockPrice.appendChild(stockPriceSpan);

  const subHeaderRow = document.createElement('div');
  subHeaderRow.className = 'row subHeaderRow justify-center';
  searchContainerResult.appendChild(subHeaderRow);

  const todayPercentage = document.createElement('h2');
  todayPercentage.className = 'todayPercentage';
  todayPercentage.textContent = 'Today: ';
  subHeaderRow.appendChild(todayPercentage);

  const todayPercentageSpan = document.createElement('span');
  if (checkPercentage(data.price.regularMarketChangePercent.raw) === true) {
    todayPercentageSpan.className = 'stockToday positive';
  } else {
    todayPercentageSpan.className = 'stockToday negative';
  }
  todayPercentageSpan.textContent = data.price.regularMarketChangePercent.fmt;
  todayPercentage.appendChild(todayPercentageSpan);

  const todayLow = document.createElement('h2');
  todayLow.className = 'todayLow';
  todayLow.textContent = 'Low: ';
  subHeaderRow.appendChild(todayLow);

  const todayLowSpan = document.createElement('span');
  todayLowSpan.className = 'negative';
  todayLowSpan.textContent = '$' + data.price.regularMarketDayLow.fmt;
  todayLow.appendChild(todayLowSpan);

  const todayHigh = document.createElement('h2');
  todayHigh.className = 'todayHigh';
  todayHigh.textContent = 'High: ';
  subHeaderRow.appendChild(todayHigh);

  const todayHighSpan = document.createElement('span');
  todayHighSpan.className = 'positive';
  todayHighSpan.textContent = '$' + data.price.regularMarketDayHigh.fmt;
  todayHigh.appendChild(todayHighSpan);

  if (data.assetProfile) {
    if (data.assetProfile.longBusinessSummary) {
      searchContainerResult.appendChild(createSummary(data.assetProfile.longBusinessSummary));
    }
    if (data.assetProfile.description) {
      searchContainerResult.appendChild(createSummary(data.assetProfile.description));
    }
  }

  const buttonRow = document.createElement('div');
  buttonRow.className = 'buttonRow space-between';
  searchContainerResult.appendChild(buttonRow);

  const readMoreButton = document.createElement('a');
  readMoreButton.className = 'readMore';
  readMoreButton.setAttribute('href', '#');
  readMoreButton.textContent = 'Read More';
  buttonRow.appendChild(readMoreButton);

  readMoreButton.addEventListener('click', readMore);

  const addStock = document.createElement('i');
  addStock.className = 'fas fa-plus-circle';
  buttonRow.appendChild(addStock);

  const deleteStock = document.createElement('i');
  deleteStock.className = 'fas fa-minus-circle';
  buttonRow.appendChild(deleteStock);

  return searchContainerResult;
}

function firstHalf(summary) {
  let newString = '';
  for (let i = 0; i < (summary.length / 2); i++) {
    newString += summary[i];
  }
  return newString;
}

function secondHalf(summary) {
  let newString = '';
  for (let i = Math.floor(summary.length / 2); i < summary.length; i++) {
    newString += summary[i];
  }
  return newString;
}

function checkPercentage(percentage) {
  return percentage > 0;
}

function handleAddStock(event) {
  if (event.target.className.includes('fa-plus-circle')) {
    for (const key in data.watchlist) {
      if (key === data.searchResult.price.symbol) {
        viewSwap('watchlist');
        return;
      }
    }
    data.watchlist[data.searchResult.price.symbol] = data.searchResult;
    const watchlistDOM = createWatchlistEntry(data.searchResult);
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
  const stockSymbol = $searchContainer.querySelector('.stockSymbol').textContent;
  for (const key in data.watchlist) {
    if (stockSymbol === key) {
      delete data.watchlist[key];
      const watchlistEntries = document.querySelectorAll('.watchlistEntryContainer');
      for (let z = 0; z < watchlistEntries.length; z++) {
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
  const watchlistEntryContainer = document.createElement('div');
  watchlistEntryContainer.className = 'watchlistEntryContainer justify-center';

  const namePriceRow = document.createElement('div');
  namePriceRow.className = 'row namePriceRow align-center';
  watchlistEntryContainer.appendChild(namePriceRow);

  const stockSymbol = document.createElement('h2');
  stockSymbol.className = 'watchlistStockSymbol';
  stockSymbol.textContent = data.price.symbol;
  namePriceRow.appendChild(stockSymbol);

  const stockPrice = document.createElement('span');
  stockPrice.className = 'stockPrice positive';
  stockPrice.textContent = '$' + data.price.regularMarketPrice.fmt;
  namePriceRow.appendChild(stockPrice);

  const todayRow = document.createElement('div');
  todayRow.className = 'row todayRow align-center';
  watchlistEntryContainer.appendChild(todayRow);

  const todayLabel = document.createElement('h3');
  todayLabel.className = 'todayLabel';
  todayLabel.textContent = 'Today: ';
  todayRow.appendChild(todayLabel);

  const todayPercentage = document.createElement('span');
  if (checkPercentage(data.price.regularMarketChangePercent.raw) === true) {
    todayPercentage.className = 'stockPercentage positive';
  } else {
    todayPercentage.className = 'stockPercentage negative';
  }
  todayPercentage.textContent = data.price.regularMarketChangePercent.fmt;
  todayRow.appendChild(todayPercentage);

  const lowRow = document.createElement('div');
  lowRow.className = 'row lowRow align-center';
  watchlistEntryContainer.appendChild(lowRow);

  const lowLabel = document.createElement('h3');
  lowLabel.className = 'lowLabel';
  lowLabel.textContent = 'Low: ';
  lowRow.appendChild(lowLabel);

  const lowPrice = document.createElement('span');
  lowPrice.className = 'lowPrice negative';
  lowPrice.textContent = '$' + data.price.regularMarketDayLow.fmt;
  lowRow.appendChild(lowPrice);

  const highRow = document.createElement('div');
  highRow.className = 'row highRow align-center';
  watchlistEntryContainer.appendChild(highRow);

  const highLabel = document.createElement('h3');
  highLabel.className = 'highLabel';
  highLabel.textContent = 'High: ';
  highRow.appendChild(highLabel);

  const highPrice = document.createElement('span');
  highPrice.className = 'highPrice positive';
  highPrice.textContent = '$' + data.price.regularMarketDayHigh.fmt;
  highRow.appendChild(highPrice);

  return watchlistEntryContainer;
}

function viewSwap(viewName) {
  data.view = viewName;
  $trendingStockEntries.innerHTML = '';
  const containerName = `${viewName}Container`;
  if (data.trending !== null) {
    addTrendingStock(data.trending);
  }
  for (let i = 0; i < $views.length; i++) {
    if ($views[i].className.includes(viewName)) {
      $views[i].className = `view ${containerName}`;
    } else {
      const viewContainer = $views[i].getAttribute('data-view');
      $views[i].className = `view ${viewContainer} hidden`;
    }
  }
  if (viewName === 'home') {
    $watchlistContainer.className = 'view watchlistContainer';
    $trendingContainer.className = 'view trendingContainer';
    $searchContainer.className = 'view searchContainer hidden';
  }
  if (viewName === 'search') {
    $watchlistContainer.className = 'view watchlistContainer hidden';
    $trendingContainer.className = 'view trendingContainer hidden';
  }
}

function handleViewSwap(event) {
  if (event.target.getAttribute('data-view')) {
    viewSwap(event.target.getAttribute('data-view'));
  }
}

function readMore(event) {
  const $dots = document.querySelector('.dots');
  const $more = document.querySelector('.more');
  const $readMore = document.querySelector('.readMore');
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
  for (const key in data.watchlist) {
    const watchlistDOM = createWatchlistEntry(data.watchlist[key]);
    $watchlistEntries.appendChild(watchlistDOM);
    $noStocks.className = 'hidden';
  }

  if (data.searchResult) {
    $searchContainer.appendChild(createStockEntry(data.searchResult));
  }

  if (data.editing === true) {
    $editHeader.className = 'row editHeader';
    $searchResultHeader.className = 'hidden';
    const addButton = document.querySelector('.fa-plus-circle');
    addButton.className = 'hidden';
  }
  if (data.editing === false) {
    $editHeader.className = 'hidden';
    $searchResultHeader.className = 'row searchResultHeader';
    if (document.querySelector('.fa-minus-circle')) {
      const deleteButton = document.querySelector('.fa-minus-circle');
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
    const stockSymbol = event.target.closest('.watchlistEntryContainer').querySelector('.watchlistStockSymbol').textContent;
    for (const key in data.watchlist) {
      if (stockSymbol === key) {
        data.searchResult = data.watchlist[key];
        const editWatchlist = createStockEntry(data.watchlist[key]);
        $searchContainer.appendChild(editWatchlist);
        const addButton = document.querySelector('.fa-plus-circle');
        addButton.className = 'hidden';
      }
    }
  }
}

function getPercentage(data) {
  const stringed = data.toString();
  let newString = '';
  for (let i = 0; i < stringed.length; i++) {
    newString += stringed[i];
  }
  return newString + '%';
}

function createTrendingDOM(data) {
  const trendingEntryContainer = document.createElement('div');
  trendingEntryContainer.className = 'row trendingEntryContainer space-between';

  const columnName = document.createElement('div');
  columnName.className = 'column-20 columnName';
  trendingEntryContainer.appendChild(columnName);

  const trendingStockName = document.createElement('p');
  trendingStockName.className = 'trendingStockName';
  trendingStockName.textContent = data.shortName;
  columnName.appendChild(trendingStockName);

  const columnSymbol = document.createElement('div');
  columnSymbol.className = 'column-20 columnSymbol';
  trendingEntryContainer.appendChild(columnSymbol);

  const trendingStockSymbol = document.createElement('p');
  trendingStockSymbol.className = 'trendingStockSymbol';
  trendingStockSymbol.textContent = data.symbol;
  columnSymbol.appendChild(trendingStockSymbol);

  const columnPrice = document.createElement('div');
  columnPrice.className = 'column-20 columnPrice';
  trendingEntryContainer.appendChild(columnPrice);

  const trendingStockPrice = document.createElement('p');
  trendingStockPrice.className = 'trendingStockPrice positive';
  trendingStockPrice.textContent = '$' + data.regularMarketPrice;
  columnPrice.appendChild(trendingStockPrice);

  const columnPercentage = document.createElement('div');
  columnPercentage.className = 'column-20 columnPercentage';
  trendingEntryContainer.appendChild(columnPercentage);

  const trendingStockPercentage = document.createElement('p');
  if (checkPercentage(data.regularMarketChangePercent) === true) {
    trendingStockPercentage.className = 'trendingStockPercentage positive';
  } else {
    trendingStockPercentage.className = 'trendingStockPercentage negative';
  }
  trendingStockPercentage.textContent = getPercentage(data.regularMarketChangePercent);
  columnPercentage.appendChild(trendingStockPercentage);

  const columnIcon = document.createElement('div');
  columnIcon.className = 'column-20 columnIcon justify-center align-center';
  trendingEntryContainer.appendChild(columnIcon);

  const checkButton = document.createElement('i');
  checkButton.className = 'fas fa-plus';
  columnIcon.appendChild(checkButton);

  for (const key in this.data.watchlist) {
    if (key === data.symbol) {
      checkButton.className = 'fas fa-minus';
    }
  }

  return trendingEntryContainer;
}

function addTrendingStock(data) {
  for (let i = 0; i < data.finance.result[0].quotes.length; i++) {
    const trendingDOM = createTrendingDOM(data.finance.result[0].quotes[i]);
    $trendingStockEntries.appendChild(trendingDOM);
  }
}

function handleAddTrending(event) {
  if (event.target.className.includes('fa-plus')) {
    const check = event.target.closest('i');
    check.className = 'fas fa-minus';
    const stockSymbol = event.target.closest('.trendingEntryContainer').querySelector('.columnSymbol').textContent;
    trendingSearchRequest(stockSymbol);
    return;
  }
  if (event.target.className.includes('fa-minus')) {
    const check = event.target.closest('i');
    check.className = 'fas fa-plus';
    const stockSymbol = event.target.closest('.trendingEntryContainer').querySelector('.columnSymbol').textContent;
    for (const key in data.watchlist) {
      if (stockSymbol === key) {
        delete data.watchlist[key];
        const watchlistEntries = document.querySelectorAll('.watchlistEntryContainer');
        for (let z = 0; z < watchlistEntries.length; z++) {
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

function createSummary(data) {
  const companySummary = document.createElement('p');
  companySummary.className = 'companySummary';
  companySummary.textContent = firstHalf(data);

  const dots = document.createElement('span');
  dots.className = 'dots';
  dots.textContent = '...';
  companySummary.appendChild(dots);

  const more = document.createElement('span');
  more.className = 'more hidden';
  more.textContent = secondHalf(data);
  companySummary.appendChild(more);

  return companySummary;
}
