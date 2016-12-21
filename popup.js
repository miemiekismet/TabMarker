document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById("red_btn");
  button.addEventListener("click", function() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        var tab = tabs[0];
        chrome.tabs.sendMessage(tab.id, 'red');
        return true;
    });
  });

  button = document.getElementById("blue_btn");
  button.addEventListener("click", function() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        var tab = tabs[0];
        chrome.tabs.sendMessage(tab.id, 'blue');
        return true;
    });
  });

  button = document.getElementById("yellow_btn");
  button.addEventListener("click", function() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        var tab = tabs[0];
        chrome.tabs.sendMessage(tab.id, 'yellow');
        return true;
    });
  });

  button = document.getElementById("green_btn");
  button.addEventListener("click", function() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        var tab = tabs[0];
        chrome.tabs.sendMessage(tab.id, 'green');
        return true;
    });
  });

  button = document.getElementById("orange_btn");
  button.addEventListener("click", function() {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function(tabs) {
        var tab = tabs[0];
        chrome.tabs.sendMessage(tab.id, 'orange');
        return true;
    });
  });
});
