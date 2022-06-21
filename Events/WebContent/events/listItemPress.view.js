sap.ui.jsview("events.listItemPress", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf events.listItemPress
	*/ 
	getControllerName : function() {
		return "events.listItemPress";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf events.listItemPress
	*/ 
	createContent : function(oController) {

		//Define oList item, data will be brought from controller
		oList = new sap.m.List("list1",{
			//Define event to call on press
			itemPress:[oController.displayInfo, oController],
		});
		
 		oPage =  new sap.m.Page({
			title: "List item Press Event",
			//Display back button
			showNavButton:true,
			navButtonPress: function(){app.back();},
			content: [
				oList
			]
		});
 		return oPage;
	}

});