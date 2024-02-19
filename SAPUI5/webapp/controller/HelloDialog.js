sap.ui.define([
    "sap/ui/core/Fragment",
    "sap/ui/base/ManagedObject",

], 

    /**
     * @param {typeof sap.ui.base.ManagedObject} ManagedObject
     * @param {typeof sap.ui.core.Fragment} Fragment
     */

function(Fragment, ManagedObject){
    "use strict"

    return ManagedObject.extend("logaligroup.SAPUI5.controller.HelloDialog",{

        constructor: function(oView){
            this._oView = oView
        },

        exit: function(){
            delete this._oView;
        },

        open: function(){

                const oView = this._oView;

                //no sería de utilidad instanciar el diálogo varias veces cuando se pulsa el buttón, para eso creamos un bucle if/else
                // creqte dialog lazily
                if(!oView.byId("helloDialog")){

                    let oFragmentController = {

                        onCloseDialog: function(){
                            oView.byId("helloDialog").close();
                        }

                    }
                    
                    // load asyncronous XML fragment
                    Fragment.load({
                        //se carga el fragmento en la vista HelloDialog
                        id: oView.getId(),
                        name: "logaligroup.SAPUI5.view.HelloDialog",
                        controller: oFragmentController
                    }).then(function(oDialog){
                        oView.addDependent(oDialog);
                        oDialog.open();
                    })
                } else {
                    oView.byId("helloDialog").open()
                }
        },

        
    })


})