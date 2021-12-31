const settingKey = "setting";
const languagesKey = "languages";
const urlKey = "url";
const tokenKey = "token";
const regionKey = "region";

function translate(info, tab) {
    var selectedText = info.selectionText;
    var data = [{ "Text": selectedText }];
    chrome.storage.sync.get(settingKey, (value) => {
        var languages = value[settingKey][languagesKey];
        var token = value[settingKey][tokenKey];
        var region = value[settingKey][regionKey];
        var url = value[settingKey][urlKey] + 'translate?api-version=3.0&to=' + languages;
        var x = new XMLHttpRequest();
        x.open('POST', url, true);
        x.setRequestHeader('Ocp-Apim-Subscription-Key', token);
        x.setRequestHeader('Ocp-Apim-Subscription-Region', region);
        x.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        x.onload = function () {
            if(x.status !== 200) {
              alert('Error occurred while calling the Microsoft Translator: ' + url + ' ' + x.status + ' ' + x.statusText);
            }
            var responseJson = $.parseJSON(x.responseText);
            var translations = responseJson[0]['translations'];
            var result = "Translated from: '" + info.selectionText + "'";
            for (var index in translations) {
                var translation = translations[index];
                result += "\n";
                result += translation['to'] + ": " + translation['text'];
            }
            alert(result);
        };
        x.send(JSON.stringify(data));
    });
}

chrome.contextMenus.create({
    title: "Translate: %s",
    contexts: ["selection"],
    onclick: translate
});
