sap.ui.jsview("barcharttest.barChar", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf barcharttest.barChar
	*/ 
	getControllerName : function() {
		return "barcharttest.barChar";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf barcharttest.barChar
	*/ 
	createContent : function(oController) {
		//Create chart
		
		var oBarChart =  new sap.suite.ui.microchart.InteractiveBarChart({
			displayedBars: 100,
			selectionEnabled: false,
			bars:[
				new sap.suite.ui.microchart.InteractiveBarChartBar({
					label:"Dog",
					value: 10
				}),
				new sap.suite.ui.microchart.InteractiveBarChartBar({
					label:"Cat",
					value: 6
				}),
				new sap.suite.ui.microchart.InteractiveBarChartBar({
					label:"Lion",
					value: 1
				}),
				new sap.suite.ui.microchart.InteractiveBarChartBar({
					label:"Monkey",
					value: 2
				}),
				new sap.suite.ui.microchart.InteractiveBarChartBar({
					label:"Lizard",
					value: 9
				}),
			]
			
		});
		
		//Put chart in flex box (Not necessary)
		oFlexBox = new sap.m.FlexBox({
			items:[
				oBarChart
			]
		});
		
 		var oPage = new sap.m.Page({
			title: "Bar Chart",
			content: [
				oFlexBox
			
			]
		});
 		return oPage;
	}

});