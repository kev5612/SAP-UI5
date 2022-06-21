sap.ui.controller("2_screens_js.View1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf 2_screens_js.View1
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf 2_screens_js.View1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf 2_screens_js.View1
*/
//	onAfterRendering: function() {
//
//	},
	
	//Custom function to change to second page
	goToSecondPage: function(){
		//Get Object in second view
		var oLabel = new sap.ui.getCore().byId("idUser");
		if( sap.ui.getCore().byId("username").getValue() !== undefined ){
			oLabel.setText(sap.ui.getCore().byId("username").getValue());
		}
		app.to("idView22");
		
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf 2_screens_js.View1
*/
//	onExit: function() {
//
//	}

});