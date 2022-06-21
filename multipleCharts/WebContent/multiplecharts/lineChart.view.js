sap.ui.jsview("multiplecharts.lineChart", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf multiplecharts.lineChart
	*/ 
	getControllerName : function() {
		return "multiplecharts.lineChart";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf multiplecharts.lineChart
	*/ 
	createContent : function(oController) {
		//Create Line chart
		oLineChart = new  sap.suite.ui.microchart.InteractiveLineChart({displayedPoints:6});
		//Create template item
		oTemplate = new sap.suite.ui.microchart.InteractiveLineChartPoint({
			label:"{sales>name}",
			value:"{sales>qty}",
			color:"{sales>color}"
		});
		//Bind Segments
		oLineChart.bindAggregation("points",{
			path:"sales>/sales",
			model:"sales",
			template:oTemplate
		});

 		return new sap.m.Page({
			title: "Line Chart",
			content: [
				oLineChart
			]
		});
	}

});