sap.ui.jsview("multiplecharts.barChart", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf multiplecharts.barChart
	*/ 
	getControllerName : function() {
		return "multiplecharts.barChart";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf multiplecharts.barChart
	*/ 
	createContent : function(oController) {
		//Create Bar chart
		oBarChart = new  sap.suite.ui.microchart.InteractiveBarChart({displayedBars:6});
		//Create template item
		oTemplate = new sap.suite.ui.microchart.InteractiveBarChartBar({
			label:"{sales>name}",
			value:"{sales>qty}",
			color:"{sales>color}"
		});
		oBarChart.bindAggregation("bars",{
			path:"sales>/sales",
			model:"sales",
			template:oTemplate
		});
		//Bind Columns to Barchart
 		return new sap.m.Page({
			title: "Bar Chart",
			content: [
				oBarChart
			
			]
		});
	}

});