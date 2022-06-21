sap.ui.jsview("multiplecharts.donutChart", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf multiplecharts.donutChart
	*/ 
	getControllerName : function() {
		return "multiplecharts.donutChart";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf multiplecharts.donutChart
	*/ 
	createContent : function(oController) {
		//Create Donut chart
		oDonutChart = new  sap.suite.ui.microchart.InteractiveDonutChart({displayedSegments:6});
		//Create template item
		oTemplate = new sap.suite.ui.microchart.InteractiveDonutChartSegment({
			label:"{sales>name}",
			value:"{sales>qty}",
			color:"{sales>color}"
		});
		//Bind Segments
		oDonutChart.bindAggregation("segments",{
			path:"sales>/sales",
			model:"sales",
			template:oTemplate
		});

 		return new sap.m.Page({
			title: "Donut Chart",
			content: [
				oDonutChart
			
			]
		});
	}

});