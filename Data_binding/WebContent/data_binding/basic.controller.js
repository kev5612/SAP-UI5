sap.ui.controller("data_binding.basic", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf data_binding.basic
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf data_binding.basic
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf data_binding.basic
*/
//	onAfterRendering: function() {
//
//	},
	
	goToSecondPage: function(){
		app.to("idbasic2");
		
	},

	
	
/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf data_binding.basic
*/
//	onExit: function() {
//
//	}

});