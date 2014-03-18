var pageMod = require("sdk/page-mod");
var data = require("sdk/self").data;

pageMod.PageMod({
	include: [ 
		"http://vehiculo.mercadolibre.com.ar/*", 
        "https://vehiculo.mercadolibre.com.ar/*",
        "http://auto.mercadolibre.com.ar/*", 
        "https://auto.mercadolibre.com.ar/*",
        "http://moto.mercadolibre.com.ar/*", 
        "https://moto.mercadolibre.com.ar/*",

        "http://inmueble.mercadolibre.com.ar/*", 
        "https://inmueble.mercadolibre.com.ar/*",
        "http://casa.mercadolibre.com.ar/*", 
        "https://casa.mercadolibre.com.ar/*",
        "http://departamento.mercadolibre.com.ar/*", 
        "https://departamento.mercadolibre.com.ar/*",
        "http://terreno.mercadolibre.com.ar/*", 
        "https://terreno.mercadolibre.com.ar/*" //[/(auto)(.)(mercadolibre)(.)*/, /(moto)(.)(mercadolibre)(.)*/],
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