sap.ui.jsview("2_screens_js.View1", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf 2_screens_js.View1
	*/ 
	getControllerName : function() {
		return "2_screens_js.View1";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf 2_screens_js.View1
	*/ 
	createContent : function(oController) {
		
		//Define text inputs
		var oUsername =  new sap.m.Input("username",{
			placeholder: "Enter your username"
		});
		//Define button
		var oLoginButton = new sap.m.Button("login",{
			text: "Login",
			press:[oController.goToSecondPage, oController]
		});
		
		//Create Page
 		var oPage = new sap.m.Page({
			title: "View 1",
			content: [
				oUsername,
				oLoginButton
			]
		});
 		return oPage;
	}

});