/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "sap/btp/helloworldui5/model/models",
        "sap/m/Text",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/resource/ResourceModel"
    ],
    function (UIComponent, Device, models, JSONModel, ResourceModel) {
        "use strict";
        
        return UIComponent.extend("sap.btp.helloworldui5.Component", {
            metadata: {
                "interfaces": ["sap.ui.core.IAsyncContentCreation"],
                manifest: "json"
            },

            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);
                
                // set data model
                const oData = {
                    recipient : {
                    name : "World"
                    }
                };
                const oModel = new JSONModel(oData);
                this.setModel(oModel);

                // enable routing
                this.getRouter().initialize();
                // set i18n model
                const i18nModel = new ResourceModel({
                    bundleName: "ui5.walkthrough.i18n.i18n"
                });
                this.setModel(i18nModel, "i18n");
                
                this.setModel(models.createDeviceModel(), "device");
            },

            getContentDensityClass() {
                return Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact";
            }
        });
    },
);