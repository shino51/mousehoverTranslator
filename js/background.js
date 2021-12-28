const settingKey = "setting";
const languagesKey = "languages";
const tokenKey = "token"

function translate(info, tab) {
    var selectedText = info.selectionText;
    var data = [{ "Text": selectedText }];
    chrome.storage.sync.get(settingKey, (value) => {
        // get values from setting on popup.js
        var languages = value[settingKey][languagesKey];
        var token = value[settingKey][tokenKey];
        var x = new XMLHttpRequest();
        x.open('POST', 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&to=' + languages, true);
        x.setRequestHeader('Ocp-Apim-Subscription-Key', token);
        x.setRequestHeader('Ocp-Apim-Subscription-Region', 'germanywestcentral');
        x.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        x.onload = function () {
            var responseJson = $.parseJSON(x.responseText);
            var translations = responseJson[0]['translations'];
            var text = "Translated from: '" + info.selectionText + "'";
            for (var index in translations) {
                var translation = translations[index];
                text += "\n";
                text += translation['to'] + ": " + translation['text'];
            }
            alert(text);
        };
        x.send(JSON.stringify(data));
    });
}

chrome.contextMenus.create({
    title: "Translate: %s",
    contexts: ["selection"],
    onclick: translate
});  