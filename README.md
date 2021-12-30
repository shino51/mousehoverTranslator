# multiTranslator
Chrome extension to let users translate on selected text to multiple languages

#### Video Demo:  https://www.youtube.com/watch?v=251qa7jkMzA
<br />

# Description:
This is a final project of [edX Computer Science course](https://cs50.harvard.edu/x/2021/project/) in 2021
<br />

## poput.html/js/css
popup.html/js/css are used for the app configuration
jquery and bootstrap js/css are used as libraries.
The configured settings is stored chrome strage and retrieved in background.js transate function.

## background.js
This is a main javaScript file for the translation. It uses the user configured data from popup.html/js and translate selected text.

## manifest.json
manifest.json is required for chrome extension. Although the latest manifest version is 3, manifest version 2 is used in this project. Therefore it will be required to upgrade in the near future.

# Setting
1. Register [Microsoft](https://www.microsoft.com/) and subscribe [Microsoft Translator](microsoft.com/en-us/translator/)
    - there is Free API available for small amount of use. You can try it out!

2. Go to **Keys and Endpoint**. Select **Text Translation** and **KEY 1** then paste them to the extension setting on the right corner. Click **Set** to save your setting
![Ms Azure portal sample1](assets/setting.png)

3. Add language codes separated by comma, without space or anything
    - e.g. en,ja
    -   supported languages are listed [here](https://docs.microsoft.com/en-us/azure/cognitive-services/translator/language-support) (use language code on this page)

# How to use
1. Go to any page 
2. Select text which you want to translate to
![right click to see multiTranslator menu](assets/newsRightClick.png)
3. Click Translate: ... (your selected text)
4. The translations are shown
![translation result](assets/finaloutput.png) 