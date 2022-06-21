sap.ui.controller("multiplecharts.multipleCharts", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf multiplecharts.multipleCharts
*/
	onInit: function() {
		//Initialize data to use on charts
		oData = {
				sales:[
					{
						name:"PS5",
						qty:20,
						color:"Critical"
					},
					{
						name:"XBOX Series X",
						qty:10,
						color:"Good"
					},
					{
						name:"Nintendo Switch",
						qty:15,
						color:"Error"
					},
					{
						name:"SEGA DreamCast",
						qty:5,
						color:"Neutral"
					}]};
		
		//Set model
		sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(oData), "sales");
	},
	
	
	//Press events to switch between views
	toBarChart: function(oEvt){
		app.to("barChart");
		app.hideMaster();
	},
	toLineChart: function(oEvt){
		app.to("lineChart");
		app.hideMaster();
	},
	toDonutChart: function(oEvt){
		app.to("donutChart");
		app.hideMaster();
	},


/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf multiplecharts.multipleCharts
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf multiplecharts.multipleCharts
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf multiplecharts.multipleCharts
*/
//	onExit: function() {
//
//	}

});