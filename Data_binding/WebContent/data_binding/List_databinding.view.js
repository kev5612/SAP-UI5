sap.ui.jsview("data_binding.List_databinding", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf data_binding.List_databinding
	*/ 
	getControllerName : function() {
		return "data_binding.List_databinding";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf data_binding.List_databinding
	*/ 
	createContent : function(oController) {
		
		//Create JSON List and assign it to a model
		var oDinosaurData = {
				dinosaur:"T-Rex",
				period:"Jurassic"
		};
		var oJsonModel = new sap.ui.model.json.JSONModel(oDinosaurData);
		//Now create standard list  item with databinding 
		//Items will be created first
		var oItem = new sap.m.StandardListItem({
			title:"{/dinosaur}",
			description:"{/period}"
		});
		oItem.setModel(oJsonModel);
		//Now create list object and attach items
		var oList = new sap.m.List({
			headerText:"Dinosaur list",
			items:[
				oItem
			]
		});
		var oButton = new sap.m.Button({
			text:"Variable List",
			press:[oController.goToSecondPage, oController]
				});
		
 		return new sap.m.Page({
 			
			title: "Simple List data Binding",
			showNavButton:true,
			navButtonPress:function(oEvt){app.back();},
			content: [
				oList,
				oButton
			]
		});
	}

});