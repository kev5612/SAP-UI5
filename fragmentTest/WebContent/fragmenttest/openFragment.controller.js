sap.ui.controller("fragmenttest.openFragment", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf fragmenttest.openFragment
*/
	onInit: function() {
		//Set model for the entire app
		oTransactions = {
				transactions:[
					{
						name:"SE16"
					},
					{
						name:"SM37"
					},
					{
						name:"SE38"
					},
					{
						name:"SM80"
					},
				]
		};
		sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(oTransactions),"trans");
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf fragmenttest.openFragment
*/
//	onBeforeRendering: function() {
//
//	},

	//Define fragment event
	openFragment: function(oEvt){
		
		//Check if there's no defined fragment
		if (this.fragment === undefined){
			//Set fragment from separate file
			this.fragment = new sap.ui.jsfragment("fragmenttest.list", this);
			this.fragment.open();
		}
		else{
			this.fragment.open();
		}
	},
	//Filter event
	filterList: function(oEvt){
		//Get the value being written
		sVal = oEvt.getParameter("value");
		//Define filter
		oFilter = new sap.ui.model.Filter({
			path:"name",
			operator: sap.ui.model.FilterOperator.Contains,
			value1: sVal
		});
		//Add filter to binding object, note that get binding should include the agregation being binded
		var oBinding = oEvt.getSource().getBinding("items");
		if (oBinding === undefined){
			oBinding = sap.ui.getCore().byId("list").getBinding("items");
		}
		oBinding.filter(oFilter);
		
	},
	
	
/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf fragmenttest.openFragment
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf fragmenttest.openFragment
*/
//	onExit: function() {
//
//	}

});