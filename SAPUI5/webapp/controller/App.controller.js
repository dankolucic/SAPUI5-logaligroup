sap.ui.define([
    // En este arreglo del método define, se hace la definición asíncrona de módulos (ADM: asincronal module definition)
    "sap/ui/core/mvc/Controller",
],

    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("logaligroup.SAPUI5.controller.App", {
            //el modelo (el objeto oData) se establece en la vista, para que la vista reconozca el modelo y lo pueda llamar (Ej: value="{/recipient/name}").
            //Para esto primero hay que crear el modelo (se hace en Models.js (oModel))
            onInit: function () {
                // //set data model on the view
                // this.getView().setModel(Models.createRecipient(),"dataModel");
                // //set i18n model on the view
                // let i18nModel = new ResourceModel({bundleName: "logaligroup.SAPUI5.i18n.i18n"})
                // this.getView().setModel(i18nModel, "i18n");
            },

            onOpenDialogHeader: function (){
                this.getOwnerComponent().openHelloDialog();

            }

        });

    }
);
