chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.cookies.getAll({ domain: "bullhornstaffing.com" }, function(cookies) {
        for(var i=0; i < cookies.length; i++) {
            chrome.cookies.remove({ url: "http://bullhornstaffing.com" + cookies[i].path, name: cookies[i].name });
        }
    });
    chrome.cookies.getAll({ domain: "devuniversal.bullhornstaffing.com" }, function(cookies) {
        for(var i=0; i < cookies.length; i++) {
            chrome.cookies.remove({ url: "http://devuniversal.bullhornstaffing.com" + cookies[i].path, name: cookies[i].name });
        }
    });
    chrome.cookies.getAll({ domain: "www.bullhornstaffing.com" }, function(cookies) {
        for(var i=0; i < cookies.length; i++) {
            chrome.cookies.remove({ url: "http://www.bullhornstaffing.com" + cookies[i].path, name: cookies[i].name });
        }
    });
    chrome.tabs.update(null, { url: 'https://devuniversal.bullhornstaffing.com/universal-login/login' });
});
