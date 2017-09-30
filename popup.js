// Copyright (c) 2017 Yasin Kuyu. All rights reserved.

/*
@elementId 
*/
function localize(elementId) {
    document.getElementById(elementId).innerText = chrome.i18n.getMessage(elementId);
}

function init() {
    localize('chooseSound');
    localize('appName');
    localize('high');
    localize('low'); 
    localize('save');  
}
  
function getSavedBackgroundColor(url, callback) {
  chrome.storage.sync.get(url, (items) => {
    callback(chrome.runtime.lastError ? null : items[url]);
  });
}
 
function saveBackgroundColor(url, color) {
  var items = {};
  items[url] = color;
  chrome.storage.sync.set(items);
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});

chrome.runtime.getBackgroundPage(function(backgroundPageWindow) {
  // Do stuff here that requires access to the background page.
  // E.g. to access the function 'myFunction()'
  console.log("Calling myFunction() " + backgroundPageWindow.check());
});
