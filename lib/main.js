var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;

pageMod.PageMod({
	include: [ 
        "*.mercadolibre.com.ar",
        "*.mercadolivre.com.br",
        "*.mercadolibre.com.co",
        "*.mercadolibre.co.cr",
        "*.mercadolibre.cl",
        "*.mercadolibre.com.do",
        "*.mercadolibre.com.ec",
        "*.mercadolibre.com.mx",
        "*.mercadolibre.com.pa",
        "*.mercadolibre.com.pe",
        "*.mercadolivre.pt",
        "*.mercadolibre.com.uy",
        "*.mercadolibre.com.ve"
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