sap.ui.jsfragment("fragmenttest.list", {
	
	
	//Create content within the fragment
	createContent : function(oController){
		
		//Create item template
		var oItemTemplate = new sap.m.StandardListItem({
			title:"{trans>name}",
		});
		//Create selection list
		var oSelList = new sap.m.SelectDialog("list",{
			title:"Transaction list",
		    liveChange:[oController.filterList, oController]
		});
		//Bind list
		oSelList.bindAggregation("items", "trans>/transactions", oItemTemplate);
		//Return list item
		return oSelList;
		
	}

})