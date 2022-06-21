sap.ui.controller("tiles.simple_tiles", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf tiles.simple_tiles
*/
//	onInit: function() {
//
//	},
	
	//Function to bind tiles on button press
	bindTiles: function(){
		//Define JSON data
		tiles = {
				tiles:[
					{
						transaction:"SE16",
						description:"Data browser",	
						icon:"sap-icon://travel-expense",
					},
					{
						transaction:"SE38",
						description:"ABAP Editor",	
						icon:"sap-icon://travel-expense",
					},
					{
						transaction:"SE80",
						description:"Object viewer",	
						icon:"sap-icon://travel-expense",
					},
				]
		};
		//Now create JSON Model and set model to whole app
		var oModel =  new sap.ui.model.json.JSONModel(tiles);
		sap.ui.getCore().setModel(oModel);
		//Create tile with template values
		var oTileTemplate = new sap.m.StandardTile({
			title:"{transaction}",
			info:"{description}",
			icon:"{icon}"
		});
		//Now bind items to Tile container
		sap.ui.getCore().byId("idTileC").bindAggregation("tiles","/tiles",oTileTemplate);
	},
	//Function to go back to regular data
	goBack: function() {
		sap.ui.getCore().byId("idTileC").destroyTiles();
		sap.ui.getCore().byId("idTileC").addTile(sap.ui.getCore().byId("t1"));
		sap.ui.getCore().byId("idTileC").addTile(sap.ui.getCore().byId("t2"));
		sap.ui.getCore().byId("idTileC").addTile(sap.ui.getCore().byId("t3"));
		sap.ui.getCore().byId("idTileC").addTile(sap.ui.getCore().byId("t4"));
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf tiles.simple_tiles
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf tiles.simple_tiles
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf tiles.simple_tiles
*/
//	onExit: function() {
//
//	}

});