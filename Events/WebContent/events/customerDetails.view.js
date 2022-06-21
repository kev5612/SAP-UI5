sap.ui.jsview("events.customerDetails", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf events.customerDetails
	*/ 
	getControllerName : function() {
		return "events.customerDetails";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf events.customerDetails
	*/ 
	createContent : function(oController) {
		//Define labels
		var oName = new sap.m.Label("oName",{text:"Template name"});
		var oLast = new sap.m.Label("oStreet",{text: "Template Last name"});
		var oCity = new sap.m.Label("oCity",{text: "template city"});
		var oCP = new sap.m.Label("oCP",{text: "{cp>/cp}"});
		//Define form with all customer details
		var oForm = new sap.ui.layout.form.SimpleForm({
			content:[
				new sap.m.VBox({items:[
					oName,
					oLast,
					oCity,
					oCP,
				]}),
			]
		}).addStyleClass("customForm");
		//Go back option
 		var oPage =  new sap.m.Page({
 			showNavButton:true,
 			navButtonPress: function(){app.back();},
			title: "Customer details",
			content: [
				oForm
			]
		});
 		return oPage;
	}

});