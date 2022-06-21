sap.ui.controller("simple_table.simpleTable", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf simple_table.simpleTable
* 
* 
*/
	
	

	onInit: function() {
		//Define data to be used
		var oDinosaurs  = {
				dinosaurs:[
					{
						id: 1,
						name:"T-Rex",
						size:"Huge bro"
					},
					{
						id:2,
						name:"Aligator",
						size:"small"
					},
					{
						id:3,
						name:"chicken",
						size:"lol what"
					},
					{
						id:4,
						name:"Mamut",
						size:"decent"
					}
				]
			};
		//Set the model to be used globally
		var oJsonModel = new sap.ui.model.json.JSONModel(oDinosaurs);
		sap.ui.getCore().setModel(oJsonModel);

	},

	
	//Define function to update table
	updateTable: function() {
		//Updated data table
		var oDinosaur2  = {
				dinosaurs:[
					{
						id: 1,
						name:"Triceraptops",
						size:"kindabig"
					},
					{
						id:2,
						name:"Doggo",
						size:"huge"
					},
					{
						id:3,
						name:"pupper",
						size:"tiny"
					},
					{
						id:4,
						name:"Mamut",
						size:"decent"
					}
				]
			};
		//Create model and update objects
		var oJsonModel = new sap.ui.model.json.JSONModel(oDinosaur2);
		sap.ui.getCore().setModel(oJsonModel);
		sap.ui.getCore().byId("table").bindItems({
			path: "/dinosaurs",
			template:sap.ui.getCore().byId("template")
		});
	},
	changeTable: function() {
		app.to("ui_table");
	},
	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf simple_table.simpleTable
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf simple_table.simpleTable
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf simple_table.simpleTable
*/
//	onExit: function() {
//
//	}

});