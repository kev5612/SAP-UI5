sap.ui.jsview("data_binding.variable_list", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf data_binding.variable_list
	*/ 
	getControllerName : function() {
		return "data_binding.variable_list";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf data_binding.variable_list
	*/ 
	createContent : function(oController) {
		//Define JSON list
		var oDinosaurs  = {
			dinosaurs:[
				{
					name:"T-Rex",
					size:"Huge bro"
				},
				{
					name:"Aligator",
					size:"small"
				},
				{
					name:"chicken",
					size:"lol what"
				},
				{
					name:"Mamut",
					size:"decent"
				}
			]
		};
		//Set data model to be used
		var oModel = new sap.ui.model.json.JSONModel({});
		//Now define list
		var oDinosaurList = new sap.m.List({
			headerText:"Dinosaurs",
			items:[
				
			]
		});
		//Define template to be used by creating 1 item
		var oItem = new sap.m.StandardListItem({
			title:"{name}",
			description:"{size}"
			
		});
		//Now All items will be bound to the same model
		oDinosaurList.bindItems({
			path:"/dinosaurs",
			template: oItem
		});
		//Set Data model to the list
		oModel.setData(oDinosaurs);
		oDinosaurList.setModel(oModel);
		
		
 		return new sap.m.Page({
			title: "Variable size List",
			showNavButton:true,
			navButtonPress:function(oEvt){app.back();},
			content: [
				oDinosaurList
			]
		});
	}

});