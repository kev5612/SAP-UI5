sap.ui.jsview("data_binding.basic", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf data_binding.basic
	*/ 
	getControllerName : function() {
		return "data_binding.basic";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf data_binding.basic
	*/ 
	createContent : function(oController) {
		//Set empty label
		var oLabel = new sap.m.Label({text:"{/name}"});
		var oLabel2 = new sap.m.Label({text:"{/last}"});
		var oData = {
				"name":"Kevin",
				"last":"Elias"
		};
		var oButton = new sap.m.Button({
			text:"Switch to basic List",
			press:[oController.goToSecondPage, oController]
				});
		var oModel = new sap.ui.model.json.JSONModel();
		//Set the JSON data in our model
		oModel.setData(oData);
		//Set the data model to be used in the labels
		oLabel.setModel(oModel);
		oLabel2.setModel(oModel);
 		return new sap.m.Page({
			title: "Basic Data binding",
			content: [
				oLabel,
				oLabel2,
				oButton
	
			]
		});
	}

});