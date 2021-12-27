function translate(info, tab) {
  console.log("Selected: " + info.selectionText);
  
  var x = new XMLHttpRequest();
  x.open('GET', 'http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=xml');
  x.onload = function() {
	alert(x.responseText);
  };
  x.send();
  
  /*chrome.tabs.create({  
    url: "http://translate.google.com/#auto/de/" + encodeURIComponent(info.selectionText)
  });*/
}

chrome.contextMenus.create({
  title: "Translate: %s", 
  contexts:["selection"], 
  onclick: translate
});
