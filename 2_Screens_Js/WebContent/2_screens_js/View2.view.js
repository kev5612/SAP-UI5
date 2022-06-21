sap.ui.jsview("2_screens_js.View2", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf 2_screens_js.View2
	*/ 
	getControllerName : function() {
		return "2_screens_js.View2";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf 2_screens_js.View2
	*/ 
	createContent : function(oController) {
		
		//Label to display username
		var oUsername = new sap.m.Label("idUser",{
			text: "Hi stupid",
		}
				);
 		var oPage = new sap.m.Page({
			title: "View 2",
			showNavButton:true,
			navButtonPress:function(oEvt){app.back();},
			content: [
				oUsername
			]
		});
 		return oPage;
	}

});