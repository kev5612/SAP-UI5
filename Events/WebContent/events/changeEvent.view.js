sap.ui.jsview("events.changeEvent", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf events.changeEvent
	*/ 
	getControllerName : function() {
		return "events.changeEvent";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf events.changeEvent
	*/ 
	createContent : function(oController) {
 		oPage = new sap.m.Page({
			title: "Change event",
			content: [
				//Add input and button, create on change function event in controller
				new sap.m.Input("input1",{
					liveChange:[oController.displayText, oController],
				}),
				new sap.m.Button("button1",{
					text: "Go to List item press Event",
					press:[oController.listItemPage, oController],
				})
			
			]
		});
 		return oPage;
	}

});