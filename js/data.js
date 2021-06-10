/* exported data */
var data = {
  search: null,
  searchResult: null,
  trending: null,
  watchlist: [],
  view: null
};

window.addEventListener('beforeunload', function (event) {
  var inputsJSON = JSON.stringify(data);
  window.localStorage.setItem('watchlist-storage', inputsJSON);
});

var previousInputsJSON = localStorage.getItem('watchlist-storage');

if (previousInputsJSON !== null) {
  data = (JSON.parse(previousInputsJSON));
}
