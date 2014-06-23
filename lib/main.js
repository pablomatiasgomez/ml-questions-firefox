var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;

pageMod.PageMod({
	include: [ 
		"*"
    ],
	contentScriptFile: [
		data.url("js/jquery-1.11.0.js"),
        data.url("js/functions.js")
    ],
    contentStyleFile: data.url("css/styles.css"),
    contentScriptOptions: {
    	dataUrl: data.url('')
  	}
 });