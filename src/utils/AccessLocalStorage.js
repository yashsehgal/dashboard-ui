// saveDataTo - method to save in local-storage
// @params: [location of the array, data to be stored]
function saveDataTo(localStorageID, dataToStore) {
  if (!dataToStore) return false;

  // creating a check - To check the already written
  // data(todo-items) in the local storage
  let _data;
  if (localStorage.getItem(localStorageID) === null) {
    _data = [];
  } else {
    _data = JSON.parse(localStorage.getItem(localStorageID));
  }
  _data.push(dataToStore);
  localStorage.setItem(localStorageID, JSON.stringify(_data));
  return true;
}

function getDataFromLocalStorage(localStorageID) {
  if (localStorage.getItem(localStorageID) === null) {
    return "not-found";
  } else {
    return JSON.parse(localStorage.getItem(localStorageID));
  }
}

export { saveDataTo, getDataFromLocalStorage };
