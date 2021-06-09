var $search = document.querySelector('.searchForm');
var $main = document.querySelector('main');

$search.addEventListener('submit', handleSearch);
$main.addEventListener('click', handleAddStock);

function handleSearch(event) {
  event.preventDefault();
  data.search = $search.elements.search.value;
  console.log($search.elements.search.value);
  if ($search.elements.search.value.toUpperCase() === 'GME') {
    data.searchResult = gmeSearch;
    console.log(gmeSearch);
    createStockEntry(gmeSearch);
    $search.reset();
  } else if ($search.elements.search.value.toUpperCase() === 'AMC') {
    data.searchResult = amcSearch;
    console.log(amcSearch);
    createStockEntry(amcSearch);
    $search.reset();
  } else if ($search.elements.search.value.toUpperCase() === 'BB') {
    data.searchResult = bbSearch;
    console.log(bbSearch);
    createStockEntry(bbSearch);
    $search.reset();
  } else if ($search.elements.search.value.toUpperCase() === 'NOK') {
    data.searchResult = nokSearch;
    console.log(nokSearch);
    createStockEntry(nokSearch);
    $search.reset();
  } else if ($search.elements.search.value.toUpperCase() === 'TSLA') {
    data.searchResult = tslaSearch;
    console.log(tslaSearch);
    createStockEntry(tslaSearch);
    $search.reset();
  } else if ($search.elements.search.value.toUpperCase() === 'GOOGL') {
    data.searchResult = googlSearch;
    console.log(googlSearch);
    createStockEntry(googlSearch);
    $search.reset();
  } else {
    $search.reset();

  }
  // $search.reset();
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
//   });
//   xhr.open('GET', 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-trending-tickers?region=US');
//   xhr.responseType = 'json';
//   xhr.setRequestHeader('x-rapidapi-key', '869820100bmsh7cc30b317c45153p1f792fjsn21c1cc0536d7');
//   xhr.setRequestHeader('x-rapidapi-host', 'apidojo-yahoo-finance-v1.p.rapidapi.com');
//   xhr.send();
// }

// container
//   row
//     h1 h1 <span class="stock price">h1</span>
//   row
//     h2 h2 h2
//   p
//   row
//     button icon

function createStockEntry(data) {
  var stockContainer = document.createElement('div');
  stockContainer.className = 'container';
  $main.appendChild(stockContainer);

  var headerRow = document.createElement('div');
  headerRow.className = 'row headerRow';
  stockContainer.appendChild(headerRow);

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
  stockPriceSpan.className = 'stockPrice positive';
  stockPriceSpan.textContent = '$' + data.price.regularMarketPrice.fmt;
  stockPrice.appendChild(stockPriceSpan);

  var subHeaderRow = document.createElement('div');
  subHeaderRow.className = 'row subHeaderRow';
  stockContainer.appendChild(subHeaderRow);

  var todayPercentage = document.createElement('h2');
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
  companySummary.textContent = summarize(data.assetProfile.longBusinessSummary) + '...';
  stockContainer.appendChild(companySummary);

  var buttonRow = document.createElement('div');
  buttonRow.className = 'buttonRow';
  stockContainer.appendChild(buttonRow);

  var readMoreButton = document.createElement('a');
  readMoreButton.className = 'readMore';
  readMoreButton.setAttribute('href', '#');
  readMoreButton.textContent = 'Read More';
  buttonRow.appendChild(readMoreButton);

  var addStock = document.createElement('i');
  addStock.className = 'fas fa-plus-circle';
  buttonRow.appendChild(addStock);
}

function summarize(summary) {
  var newString = '';
  for (var i = 0; i < (summary.length / 2); i++) {
    newString += summary[i];
  }
  return newString;
}

function checkPercentage(percentage) {
  return percentage > 0;
}

function handleAddStock(event) {
  if (event.target.className.includes('fa-plus-circle')) {
    console.log(event.target.className);
  }
}
