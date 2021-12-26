var contentMenuItem = {
    id:  "multiTranslator",
    title: "MultiTranslator",
    contexts: ["selection"]
};

chrome.contextMenus.create(contentMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickedData) {
    if (clickedData.menuItemId == "multiTranslator" && clickedData.selectionText) {
        chrome.notifications.create('NOTIFICATION_ID', {
            type: 'basic',
            iconUrl: '../images/get_started16.png',
            title: 'translate',
            message: clickedData.selectionText,
            priority: 2
        });
        // chrome.tabs.create({
        //     url: chrome.runtime.getURL('../html/dialog.html?selected=' + clickedData.selectionText),
        //     active: false
        // }, function(tab) {
            
        //     // After the tab has been created, open a window to inject the tab
        //     chrome.windows.create({
        //         tabId: tab.id,
        //         type: 'popup',
        //         focused: true
        //     });
        // });
    }
});