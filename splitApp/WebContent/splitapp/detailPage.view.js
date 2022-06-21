sap.ui.jsview("splitapp.detailPage", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf splitapp.detailPage
	*/ 
	getControllerName : function() {
		return "splitapp.detailPage";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf splitapp.detailPage
	*/ 
	createContent : function(oController) {

		//Define Column names
		oCol1 = new sap.m.Column({
			header: new sap.m.Text({text:"ID"})
		});
		oCol2 = new sap.m.Column({
			header: new sap.m.Text({text:"Name"})
		});
		oCol3 = new sap.m.Column({
			header: new sap.m.Text({text:"Description"})
		});
		//Define oTable object
		oTable = new sap.m.Table("table",{
			columns:[
				oCol1,
				oCol2,
				oCol3
			]
		});
		//Define template item
		oTemplate = new sap.m.ColumnListItem({
			cells:[
				new sap.m.Text({text:"{trans>id}"}),
				new sap.m.Text({text:"{trans>name}"}),
				new sap.m.Text({text:({
					parts: [{
						path:"trans>Description",
						type: new sap.ui.model.type.String(),
					},
					{
						path: "trans>id"
					}
					],
					formatter: function(sDecr, sId){
						return sDecr + " : " + sId
					}
				})})
			]
		});
		//Bind items to table
		oTable.bindItems({
			path:"/transactions",
			model:"trans",
			template:oTemplate
		});
		
 		oPage = new sap.m.Page({
			title: "Details Page",
			content: [
				oTable
			]
		});
 		return oPage;
	}

});