sap.ui.jsview("splitapp.masterPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf splitapp.masterPage
	*/ 
	getControllerName : function() {
		return "splitapp.masterPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf splitapp.masterPage
	*/ 
	createContent : function(oController) {
		//Create index list
		oIndex = new sap.m.List("Index");
		//Create list item template
		oItemTemplate = new sap.m.StandardListItem({
			title:"{trans>name}",
			type:sap.m.ListType.Navigation,
			press:[oController.showDetails, oController]
		});
		//Bind items to list
		oIndex.bindAggregation("items",{
			path:"/transactions",
			model:"trans",
			template:oItemTemplate
		});
 		oPage =  new sap.m.Page({
			title: "Master page",
			content: [
				new sap.m.Button({text:"Display all", 
								  press:["table",oController.removeFilter, oController]}),
				oIndex,
			]
		});
 		return oPage;
	}

});