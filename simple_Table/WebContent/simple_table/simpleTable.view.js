sap.ui.jsview("simple_table.simpleTable", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf simple_table.simpleTable
	*/ 
	getControllerName : function() {
		return "simple_table.simpleTable";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf simple_table.simpleTable
	*/ 
	createContent : function(oController) {
		
		//Create columns to be used 
		var oCol1  = new sap.m.Column({
			header: new sap.m.Label({text:"ID"})
		});
		var oCol2 = ({
			header: new sap.m.Label({text:"Dinosaur"})
		});
		var oCol3 = ({
			header: new sap.m.Label({text:"Size"})
		});
		//Now create table and assign columns
		var oDinosaurTable = new sap.m.Table("table",{
			title:"Dinosaurs Table",
			columns:[
				oCol1,
				oCol2,
				oCol3
			]
		});
		//Template with Data binding should be created
		var oTemplate = new sap.m.ColumnListItem("template",{
			cells:[
				new sap.m.Text({text:"{id}"}),
				new sap.m.Text({text:"{name}"}),
				new sap.m.Text({text:"{size}"}),
			]
		});
		//Now items will be bound
		oDinosaurTable.bindItems({
			path: "/dinosaurs",
			template:oTemplate
		});
		
		
		//Table should display
 		var oPage1 =  new sap.m.Page({
			title: "Simple Table example",
			content: [
				new sap.m.Button("refresh",{text:"Change JSON", press:[oController.updateTable]}),
				oDinosaurTable,
				new sap.m.Button('change',{text:"Change to Sap.UI Table", press:[oController.changeTable]})
			]
		});
 		return oPage1;
	}
});