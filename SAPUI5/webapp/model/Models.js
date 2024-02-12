sap.ui.define([
    // En este arreglo del método define, se hace la definición asíncrona de módulos (ADM: asincronal module definition)
    "sap/ui/model/json/JSONModel"
], 

/**
 * @param {typeof sap.ui.model.json.JSONModel} JSONModel
 */
    function( JSONModel ){
        "use strict"

        return {

            createRecipient: function(){

                const oData = {
                    recipient: {
                        name: "World"
                    }
                };

                const oModel = new JSONModel(oData);

                return oModel;
            }
        }

    }
)