sap.ui.jsview("fragmenttest.openFragment", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf fragmenttest.openFragment
	*/ 
	getControllerName : function() {
		return "fragmenttest.openFragment";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf fragmenttest.openFragment
	*/ 
	createContent : function(oController) {
		//Define button event to open list
		var oButton = new sap.m.Button({
			text:"Open Fragment",
			press:[oController.openFragment, oController],
		});
 		var oPage =  new sap.m.Page({
			title: "Fragment test",
			content: [
				oButton
			]
		});
 		return oPage;
	}

});