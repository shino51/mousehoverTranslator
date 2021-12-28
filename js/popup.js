let setting = document.getElementById("set");
const settingKey = "setting";
const languagesKey = "languages";
const tokenKey = "token"

// load languages
chrome.storage.sync.get(settingKey, (value) => {
  if (value !== undefined && value[settingKey] !== undefined) {
    document.getElementById(languagesKey).value = value[settingKey][languagesKey];
    document.getElementById(tokenKey).value = value[settingKey][tokenKey];
  } else {
    // default value is en
    chrome.storage.sync.set(createSettingObject("en", ""), () => {
      document.getElementById(languagesKey).value = "en";
    });
  }
});

// When the button is clicked
setting.addEventListener("click", async () => {
  var languages = document.getElementById("languages").value;
  var token = document.getElementById("token").value;
  chrome.storage.sync.set(createSettingObject(languages, token));
});

function createSettingObject(languages, token) {
  var setting = {};
  var obj = {};
  obj[languagesKey] = languages;
  obj[tokenKey] = token;
  setting[settingKey] = obj;
  return setting;
}