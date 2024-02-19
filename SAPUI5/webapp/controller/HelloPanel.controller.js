sap.ui.define([
    // En este arreglo del método define, se hace la definición asíncrona de módulos (ADM: asincronal module definition)
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",

],

    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
     */

    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("logaligroup.SAPUI5.controller.HelloPanel", {

            onInit: function () {
            },

            handleButton: function () {

                //read text from i18n model
                let oBundle = this.getView().getModel("i18n").getResourceBundle();
                //read property from data model
                let sRecipient = this.getView().getModel("dataModel").getProperty("/recipient/name");
                let sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);

            },

            onOpenDialog: function (){

                this.getOwnerComponent().openHelloDialog();
            }

            //     //Necesitamos obtener la instancia de la vista del controllador (vista HelloPanel),
            //     //para pasársela como parámetro a la función que carga el fragmento en el controlador
            //     // (el controllador debe saber la relación entre la vista HelloPanel y el fragmento)
            //     const oView = this.getView();

            //     //no sería de utilidad instanciar el diálogo varias veces cuando se pulsa el buttón, para eso creamos un bucle if/else
            //     if(!this.byId("helloDialog")){
            //         Fragment.load({
            //             //se carga el fragmento en la vista HelloDialog
            //             id: oView.getId(),
            //             name: "logaligroup.SAPUI5.view.HelloDialog",
            //             controller: this
            //         }).then(function(oDialog){
            //             oView.addDependent(oDialog);
            //             oDialog.open();
            //         })
            //     } else {
            //         this.byId("helloDialog").open()
            //     }
            // },

            // onCloseDialog: function(){
            //     this.byId("helloDialog").close();
            // }

        });

    }
);