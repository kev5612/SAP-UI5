sap.ui.controller("events.listItemPress", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf events.listItemPress
*/
	onInit: function() {
		//Add details page
		//Add page 2
		var page = sap.ui.view({id:"customerPage", viewName:"events.customerDetails", type:sap.ui.core.mvc.ViewType.JS});
		app.addPage(page);
		
		//Define JSON List object
		customerInfo = {
				customers:[
					{
						name: "John",
						lastName: "Smith",
						city: "Chicago",
						street: "Street number 25",
						cp: "45010",
					},
					{
						name: "Mike",
						lastName: "Alexis",
						city: "Los Angeles",
						street: "Street number 32",
						cp: "45013",
					},
					{
						name: "Max",
						lastName: "Payne",
						city: "New York",
						street: "Street number 45",
						cp: "45014",
					},
				]}; 
		//Now assign model to core
		sap.ui.getCore().setModel(new sap.ui.model.json.JSONModel(customerInfo),"clients");
		//Define list item model
		oListItem = new sap.m.StandardListItem({
			title: "{clients>name}",
			description: "{clients>lastName}",
			type: sap.m.ListType.Navigation //Allows click
		});
		//Bind items to list
		sap.ui.getCore().byId("list1").bindItems({
			path:"/customers",
			model: "clients",
			template:oListItem,
		});
	},
	
	displayInfo: function(oEvt){
		//Option one direct access
		var sPath = oEvt.getParameters().listItem.oBindingContexts.clients.sPath;
		//Option two by methods
		var sPath2 = oEvt.getParameter("listItem").getBindingContextPath("clients");
		//Define text values of labels for Form
		sap.ui.getCore().byId("oName").bindProperty("text",{parts:[{path:( "clients>"+sPath2+"/name") }]});
		sap.ui.getCore().byId("oStreet").bindProperty("text",{parts:[{path:"clients>"+sPath2+"/street"}]});
		sap.ui.getCore().byId("oCity").bindProperty("text",{parts:[{path:"clients>"+sPath2+"/city"}]});
		//sap.ui.getCore().byId("oCP").bindProperty("text",{parts:[{path:"clients>"+sPath2+"/cp"}]});
		
		//Set CP by binding data to sap Core and calling it from view
		debugger;
		var sCP = oEvt.getParameter("listItem").getBindingContext("clients").getProperty("cp");
		//Bind this field to a new Model
		var oCpModel = new sap.ui.model.json.JSONModel({
		cp:sCP	
		});
		sap.ui.getCore().setModel(oCpModel, "cp");
		
		//Go to next Page showing details
		app.to("customerPage");
	}

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf events.listItemPress
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf events.listItemPress
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf events.listItemPress
*/
//	onExit: function() {
//
//	}

});