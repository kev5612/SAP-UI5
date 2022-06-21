sap.ui.controller("splitapp.masterPage", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf splitapp.masterPage
*/
	onInit: function() {
		//Create Data to be binded to List
		oTransactions = {
				transactions: [
					{
						id: "1",
						name: "SE38",
						Description: "ABAP editor"
					},
					{
						id: "2",
						name: "SE16",
						Description: "Data browser"
					},
					{
						id: "3",
						name: "SM37",
						Description: "Job monitor"
					},
					{
						id: "4",
						name: "SE80",
						Description: "Object navigator"
					},
				]
		};
		//Bind model to Core
		sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(oTransactions),"trans");
	},
	
	//Event to show additional details
	showDetails: function(oEvt){
	
		//Set object path to a model for use in detail view
		oPath = {
				path: oEvt.getSource().getBindingContextPath()
		}
		sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(oPath),"itemPath");
		//Get Binded item and filter oTable
		sId = oEvt.getSource().getBindingContext("trans").getProperty("id");
		oFilter = new sap.ui.model.Filter({
			path:"id",
			operator: sap.ui.model.FilterOperator.EQ,
			value1:sId
		});
		//Get binding from table and apply filter to it
		oBinding  = sap.ui.getCore().byId("table").getBinding("items");
		oBinding.filter(oFilter);
		//Now hide the index
		app.hideMaster();
	},
	//Remove all filters
	removeFilter: function(oEvt, sId ){
		oIndex = sap.ui.getCore().byId(sId);
		//Get binding and remove filter
		oBinding = oIndex.getBinding("items");
		oBinding.filter("");
		//Now hide the index
		app.hideMaster();
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf splitapp.masterPage
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf splitapp.masterPage
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf splitapp.masterPage
*/
//	onExit: function() {
//
//	}

});