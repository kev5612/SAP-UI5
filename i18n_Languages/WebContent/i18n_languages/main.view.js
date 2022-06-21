sap.ui.jsview("i18n_languages.main", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf i18n_languages.main
	*/ 
	getControllerName : function() {
		return "i18n_languages.main";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf i18n_languages.main
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
 			//Texts shown on screen will be binded to language file
			title: "{i18n>title}",
			content: [
				new sap.m.List({
					items:[
						new sap.m.StandardListItem({title:"{i18n>item1}"}),
						new sap.m.StandardListItem({title:"{i18n>item2}"}),
						new sap.m.StandardListItem({title:"{i18n>item3}"}),
					]
				})
				
			
			]
		});
	}

});