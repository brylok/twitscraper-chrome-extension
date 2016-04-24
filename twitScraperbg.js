
 chrome.runtime.onInstalled.addListener(function() {
  // Create one test item for each context type.
  var id = chrome.contextMenus.create({
    "title": "TwitScraper",
    "id": "twitScraper",
    "documentUrlPatterns": ["https://twitter.com/hashtag/*", "http://twitter.com/hashtag/*"]
  });
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, "twitScraper");
    });
});
