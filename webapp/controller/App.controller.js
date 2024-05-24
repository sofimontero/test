sap.ui.define(
    [
      "sap/ui/core/mvc/Controller",
      "sap/m/MessageToast",
      "sap/ui/model/json/JSONModel",
      "sap/ui/model/resource/ResourceModel"
    ],
    function(BaseController, MessageToast, JSONModel, ResourceModel) {
      "use strict";
  
      return BaseController.extend("sap.btp.helloworldui5.controller.App", {
        onInit() {
          // set data model on view
          const oData = {
             recipient : {
                name : "World"
             }
          };
          const oModel = new JSONModel(oData);
          this.getView().setModel(oModel);
 
          // set i18n model on view
          const i18nModel = new ResourceModel({
             bundleName: "sap.btp.helloworldui5.i18n.i18n"
          });
          this.getView().setModel(i18nModel, "i18n");

          this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
       },
 
       onShowHello() {
          // read msg from i18n model
          const oBundle = this.getView().getModel("i18n").getResourceBundle();
          const sRecipient = this.getView().getModel().getProperty("/recipient/name");
          const sMsg = oBundle.getText("helloMsg", [sRecipient]);
 
          // show message
          MessageToast.show(sMsg);
       }
      });
    }
  );
  