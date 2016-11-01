function createCallback(event) {
    return function callback(info, tab) {
        chrome.tabs.sendMessage(tab.id, event);
    }
}

var parent = chrome.contextMenus.create({
    "title": "Change video speed updated",
    "contexts": ["video"]
});
chrome.contextMenus.create({
    "title": "100%",
    "parentId": parent,
    "contexts": ["video"],
    "onclick": createCallback("changeSpeed100")
});
chrome.contextMenus.create({
    "title": "150%",
    "parentId": parent,
    "contexts": ["video"],
    "onclick": createCallback("changeSpeed150")
});
chrome.contextMenus.create({
    "title": "200%",
    "parentId": parent,
    "contexts": ["video"],
    "onclick": createCallback("changeSpeed200")
});
chrome.contextMenus.create({
    "title": "Custom",
    "parentId": parent,
    "contexts": ["video"],
    "onclick": createCallback("changeSpeedCustom")
});
