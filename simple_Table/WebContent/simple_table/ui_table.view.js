sap.ui.jsview("simple_table.ui_table", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf simple_table.ui_table
	*/ 
	getControllerName : function() {
		return "simple_table.ui_table";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf simple_table.ui_table
	*/ 
	createContent : function(oController) {
		//Create columns to be used 
		var oCol1  = new sap.ui.table.Column({
			label: new sap.m.Label({text:"ID"}),
			template: new sap.m.Text({text:"{id}"})
		});
		var oCol2 = new sap.ui.table.Column({
			label: new sap.m.Label({text:"Dinosaur"}),
			template: new sap.m.Text({text:"{name}"}),
		});
		var oCol3 = new sap.ui.table.Column({
			label: new sap.m.Label({text:"Size"}),
			template: new sap.m.Text({text:"{size}"}),
		});
		
		//Now create table and assign columns
		var oDinosaurTable = new sap.ui.table.Table("uitable",{
			title:"Dinosaurs Table",
			columns:[
				oCol1,
				oCol2,
				oCol3
			],
			enableCellFilter:true
		});
		//Bind rows to the defined columns
		oDinosaurTable.bindRows("/dinosaurs");
		
 		return new sap.m.Page({
			title: "Simple UI Table",
			showNavButton:true,
			navButtonPress:function(oEvt){app.back();},
			content: [
				oDinosaurTable
			]
		});
	}

});