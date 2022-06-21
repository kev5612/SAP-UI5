sap.ui.jsview("binding_functions.list", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf binding_functions.list
	*/ 
	getControllerName : function() {
		return "binding_functions.list";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf binding_functions.list
	*/ 
	createContent : function(oController) {
		//Define new list item
		oList = new sap.m.List("List1",{
			headerText: "Transaction codes",
		});
		//Bind items
		oList.bindAggregation(
				//What am i binding?
				"items",
				//What is the path of the item i'm binding
				"/transactions",
				function(sId, oContext){
					//Define Constant values
					const sNormal  ="Standard Transaction";
					const sCustom = "Custom transaction";
					const cIndicator = 'Z';
					//Variable to define description
					var sDesc;
					//If the first letter of the transaction is Z set as custom
					if(oContext.getProperty("name")[0] == cIndicator){
						sDesc = sCustom;
					}
					//If the first letter is not Z set as Standard transaction
					else{
						sDesc = sNormal;
					}
					//Return list item
					return new sap.m.StandardListItem({
						title: oContext.getProperty("name"),
						description: sDesc,
					});
				}
				);
		//Define buttons to add
		var oB1 = new sap.m.Button("b1",{text:"Set first data model", press:[oController.setM1, oController, oList]});
		var oB2 = new sap.m.Button("b2",{text:"Set Second data model", press:[oController.setM1]});
		
		oB1.addStyleClass("customButton1");
		oB1.addStyleClass("customTextColor");
		oB2.addStyleClass("customButton2");
		oB2.addStyleClass("customButton2Background");
		oB2.addStyleClass("customTextColor2");
		
 		return new sap.m.Page({
			title: "List with binding functon",
			content: [
				oB1,
				oB2,
				oList
			
			]
		});
	}

});