sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
 ], (Controller, MessageToast, MessageBox) => {
    "use strict";
 
    return Controller.extend("sap.btp.helloworldui5.controller.HelloPanel", {
       onShowHello() {
          // read msg from i18n model
          const oBundle = this.getView().getModel("i18n").getResourceBundle();
          const sRecipient = this.getView().getModel().getProperty("/recipient/name");
          const sMsg = oBundle.getText("helloMsg", [sRecipient]);
          // show message
          MessageToast.show(sMsg);
       },
       async onOpenDialog() {
         // create dialog lazily
         this.oDialog ??= await this.loadFragment({
             name: "sap.btp.helloworldui5.view.HelloDialog"
         });
     
         this.oDialog.open();
       },
      onCloseDialog() {
			// note: We don't need to chain to the pDialog promise, since this event handler
			// is only called from within the loaded dialog itself.
			this.byId("helloDialog").close();
		},
      onNav() {
         const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("view");
		}

      
    });
 });