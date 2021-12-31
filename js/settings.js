let setting = document.getElementById("set");
const settingKey = "setting";
const languagesKey = "languages";
const urlKey = "url";
const tokenKey = "token";
const regionKey = "region";

// load languages
chrome.storage.sync.get(settingKey, (value) => {
  if (value !== undefined && value[settingKey] !== undefined) {
    document.getElementById(languagesKey).value = value[settingKey][languagesKey] ?? "";
    document.getElementById(urlKey).value = value[settingKey][urlKey] ?? "";
    document.getElementById(tokenKey).value = value[settingKey][tokenKey] ?? "";
    document.getElementById(regionKey).value = value[settingKey][regionKey] ?? "";
  } else {
    // default value is en
    chrome.storage.sync.set(createSettingObject("en", ""), () => {
      document.getElementById(languagesKey).value = "en";
    });
  }
});

// When the Save button is clicked
setting.addEventListener("click", async () => {
  var languages = document.getElementById(languagesKey).value;
  var url = document.getElementById(urlKey).value;
  var token = document.getElementById(tokenKey).value;
  var region = document.getElementById(regionKey).value;
  chrome.storage.sync.set(createSettingObject(languages, url, token, region));
  alert('Settings saved');
});

function createSettingObject(languages, url, token, region) {
  var setting = {};
  var obj = {};
  obj[languagesKey] = languages;
  obj[urlKey] = url;
  obj[tokenKey] = token;
  obj[regionKey] = region;
  setting[settingKey] = obj;
  return setting;
}
