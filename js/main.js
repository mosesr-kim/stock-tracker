var $search = document.querySelector('.searchForm');
var $main = document.querySelector('main');

$search.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();
  console.log($search.elements.search.value);
  if ($search.elements.search.value.toUpperCase() === 'GME') {
    console.log(gmeSearch);
    $search.reset();
    createStockEntry(gmeSearch);
  } else if ($search.elements.search.value.toUpperCase() === 'AMC') {
    console.log(amcSearch);
    $search.reset();
    return amcSearch;
  } else if ($search.elements.search.value.toUpperCase() === 'BB') {
    console.log(bbSearch);
    $search.reset();
    return bbSearch;
  } else if ($search.elements.search.value.toUpperCase() === 'NOK') {
    console.log(nokSearch);
    $search.reset();
    return nokSearch;
  } else if ($search.elements.search.value.toUpperCase() === 'TSLA') {
    console.log(tslaSearch);
    $search.reset();
    return tslaSearch;
  } else if ($search.elements.search.value.toUpperCase() === 'GOOGL') {
    console.log(googlSearch);
    $search.reset();
    return googlSearch;
  } else {
    $search.reset();
    return 'Please enter a valid stock ticker symbol';
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
//     h1 h1 h1
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
  headerRow.className = 'row';
  stockContainer.appendChild(headerRow);

  var stockName = document.createElement('h1');
  stockName.className = 'stockName';
  stockName.textContent = data.price.longName + ':';
  headerRow.appendChild(stockName);

  var stockSymbol = document.createElement('h1');
  stockSymbol.className = 'stockSymbol';
  stockSymbol.textContent = data.price.symbol;
  headerRow.appendChild(stockSymbol);

  var stockPrice = document.createElement('h1');
  stockPrice.className = 'stockPrice';
  stockPrice.textContent = '$' + data.price.regularMarketPrice.fmt;
  headerRow.appendChild(stockPrice);

  var subHeaderRow = document.createElement('div');
  subHeaderRow.className = 'row';
  stockContainer.appendChild(subHeaderRow);

  var todayPercentage = document.createElement('h2');
  todayPercentage.className = 'stockToday';
  todayPercentage.textContent = 'Today: ' + data.price.regularMarketChangePercent.fmt;
  subHeaderRow.appendChild(todayPercentage);

  var todayLow = document.createElement('h2');
  todayLow.className = 'stockLow';
  todayLow.textContent = 'Low: $' + data.price.regularMarketDayLow.fmt;
  subHeaderRow.appendChild(todayLow);

  var todayHigh = document.createElement('h2');
  todayHigh.className = 'stockHigh';
  todayHigh.textContent = 'High: $' + data.price.regularMarketDayHigh.fmt;
  subHeaderRow.appendChild(todayHigh);

  var companySummary = document.createElement('p');
  companySummary.className = 'companySummary';
  companySummary.textContent = data.assetProfile.longBusinessSummary;
  stockContainer.appendChild(companySummary);

  var buttonRow = document.createElement('div');
  buttonRow.className = 'buttonRow';
  stockContainer.appendChild(buttonRow);

  var readMoreButton = document.createElement('button');
  readMoreButton.className = 'readMore';
  readMoreButton.textContent = 'Read More';
  buttonRow.appendChild(readMoreButton);

  var addStock = document.createElement('i');
  addStock.className = 'fas fa-plus-circle';
  buttonRow.appendChild(addStock);
}
