sap.ui.define([ "sap/ui/core/mvc/Controller",
                "sap/m/MessageBox",
                "sap/m/MessageToast",
                "sap/m/MenuItem",
	            "sap/ui/core/UIComponent"
             ],
    
    function (Controller, MessageBox, MenuItem, MessageToast, UIComponent) {
        "use strict";
        return Controller.extend("sap.btp.helloworldui5.controller.View1", {
            onPress: function () {
                MessageBox.alert("You have been alerted!");
            },onMenuAction: function(oEvent) {
				var oItem = oEvent.getParameter("item"),
					sItemPath = "";

				while (oItem instanceof MenuItem) {
					sItemPath = oItem.getText() + " > " + sItemPath;
					oItem = oItem.getParent();
				}

				sItemPath = sItemPath.substr(0, sItemPath.lastIndexOf(" > "));

				MessageToast.show("Action triggered on item: " + sItemPath);
			},
            onCollapseExpandPress() {
                const oSideNavigation = this.byId("sideNavigation"),
                    bExpanded = oSideNavigation.getExpanded();
    
                oSideNavigation.setExpanded(!bExpanded);
            },
            handleHomeIconPress() {
                MessageBox.show("Home icon pressed");
            },getRouter : function () {
                return UIComponent.getRouterFor(this);
            },
            onNavBack() {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("overview");
            },
            onNav() {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("form");
            }
        });
    });
