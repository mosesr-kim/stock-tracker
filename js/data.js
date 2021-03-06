/* exported data */
let data = {
  search: null,
  searchResult: null,
  trending: null,
  watchlist: {},
  view: null,
  editing: null
};

window.addEventListener('beforeunload', function (event) {
  const inputsJSON = JSON.stringify(data);
  window.localStorage.setItem('watchlist-storage', inputsJSON);
});

const previousInputsJSON = localStorage.getItem('watchlist-storage');

if (previousInputsJSON !== null) {
  data = (JSON.parse(previousInputsJSON));
}
