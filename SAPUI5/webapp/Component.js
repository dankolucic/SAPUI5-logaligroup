sap.ui.define([
    "sap/ui/core/UIComponent",
    "logaligroup/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog"

],

    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     */

    function (UIComponent, Models, ResourceModel, HelloDialog) {

        return UIComponent.extend("logaligroup.SAPUI5.Component", {

            //con metadata (una configuración) podemos pasar la responsabilidad al Content de instanciar la vista XML principal
            //que hasta este momento estaba en el index.js
            metadata: {
                //propiedad rootview (mas detalles de configuraciones del metadata las veremos después en fichero manifest.json)
    
                // "rootView": {
                //     "viewName": "logaligroup.SAPUI5.view.App",
                //     "type": "XML",
                //     "async": true,
                //     "id": "app"
                // }

                //la propiedad "rootView" anterior, que tiene la referencia a la vista, se sacará porque es una config que tiene
                //que ir en el fichero manifest.json (por el orden de la app). Para hacer la referencia a dicho fichero, se indica
                // la nstrucción manifest:"json".
                manifest: "json"
            },

            //el init siempre se llama una vez cuando se instancia la aplicación (alprincipio)
            init: function () {
                //call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                //Esta parte se trasladó desde App.controller.js a acá Component.js.
                //Esto es para centralizar el set model, dado que al component todos los demas objetos de la app van a tener acceso)
                    //set data model on the component 
                    this.setModel(Models.createRecipient(), "dataModel");

                    //set i18n model on the component 
                    let i18nModel = new ResourceModel({ bundleName: "logaligroup.SAPUI5.i18n.i18n" })
                    this.setModel(i18nModel, "i18n");

                    this._helloDialog = new HelloDialog(this.getRootControl())
            },

            exit: function(){
                this._helloDialog.destroy();
                delete this._helloDialog;
            },

            openHelloDialog: function(){
                this._helloDialog.open();

            }



        })

    }
)