var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;

pageMod.PageMod({
	include: [/(auto)(.)(mercadolibre)(.)*/, /(moto)(.)(mercadolibre)(.)*/],
	contentScriptFile: [
		data.url("jquery-1.11.0.js"),
        data.url("functions.js")
    ]
 });