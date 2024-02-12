//index.js ya no es necesario, porque en index.html directamente podemos referenciar al Component.js con ComponentSuport
//Se utilizó el componentContainer en index.js para explicar la lógica de instancias del componente, pero no es necesario tenerlo
//(podemos ahorrarnos este paso)

//index.js es instanciado por la instrucción oninit en index.html
//instrucción: data-sap-ui-oninit="module:logaligroup/SAPUI5/index"

// sap.ui.define([
//     // "sap/ui/core/mvc/XMLView",
//     "sap/ui/core/ComponentContainer"
// ], 

// /**
//  * @param {typeof sap.ui.core.ComponentContainer} ComponentContainer
//  * 
//  */
//     function( ComponentContainer){
//         "use strict"

//         //instancia Component.js que, a través del metadata y de su propiedad rootview tiene definida la vista principal .XML
//         //también están instanciados los modelos (que quedan disponibles para toda la aplicación, también para la vista .XML App.view.xml donde se llaman los modelos),
//         //y lo deja en la etiqueta body con id content del index.html
//         // (Antes instanciabamos manualmente la vista XML para pasarlo al index.html, ahora se realiza a través de Content.js)
//         new ComponentContainer({
//             name: "logaligroup.SAPUI5",
//             settings: {
//                 id: "SAPUI5"
//             },
//             async: true
//         }).placeAt("content");
        
//         // XMLView.create({
//         //     //index.js instancia la vista .xml estructurada en App.view.xml
//         //     viewName:"logaligroup.SAPUI5.view.App"
//         // //el objeto de la vista .xml instanciada es pasado a la etiqueta body con id "content" del index.html
//         // }).then(function (oView){
//         //     oView.placeAt("content")
//         // });

//     }
// )

