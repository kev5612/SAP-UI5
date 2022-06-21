sap.ui.jsview("multiplecharts.multipleCharts", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf multiplecharts.multipleCharts
	*/ 
	getControllerName : function() {
		return "multiplecharts.multipleCharts";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf multiplecharts.multipleCharts
	*/ 
	createContent : function(oController) {
		//Create list menu
		oList = new sap.m.List({
			items:[
				new sap.m.StandardListItem({
					title:"Bar Chart",
					type:sap.m.ListType.Navigation,
					press:[oController.toBarChart, oController]
				}),
				new sap.m.StandardListItem({
					title:"Donut Chart",
					type:sap.m.ListType.Navigation,
					press:[oController.toDonutChart, oController]
				}),
				new sap.m.StandardListItem({
					title:"Line Chart",
					type:sap.m.ListType.Navigation,
					press:[oController.toLineChart, oController]
				}),
			]
		});
 		var oPage = new sap.m.Page({
			title: "Chart Reports",
			content: [
				//Master to navigate
				oList
			]
		});
 		return oPage;
	}

});