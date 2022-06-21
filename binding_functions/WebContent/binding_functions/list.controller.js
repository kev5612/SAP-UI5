sap.ui.controller("binding_functions.list", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf binding_functions.list
*/
	onInit: function() {

	},
	
	setM1: function(oEvt, idList){
		//Declare JSOn object with data
		oTransactions1 = {
				transactions:[
					{
						name:"SE38",
						description:"Abap editor"
					},
					{
						name:"SE16",
						description:"Data browser"
					},
					{
						name:"ZYFINTS_22",
						description:"Who knows"
					},
					{
						name:"ZYFINTS_57",
						description:"Recon report"
					},
				]
		};
		//Add model to Core
		var oModel = new sap.ui.model.json.JSONModel(oTransactions1);
		sap.ui.getCore().setModel(oModel);
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf binding_functions.list
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf binding_functions.list
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf binding_functions.list
*/
//	onExit: function() {
//
//	}

});