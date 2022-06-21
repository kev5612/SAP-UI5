sap.ui.controller("i18n_languages.main", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf i18n_languages.main
*/

	
	onInit: function() {
		//Set the language
		var oSloc = sap.ui.getCore().getConfiguration().getLanguage();
		var sPath="";
		const sBasePath = "i18n/i18n_";
		if (oSloc === "en-US"){
			sPath = sBasePath + "en_US.properties";
		}
		else if (oSloc === "es-MX"){
			sPath = sBasePath + "es_MX.properties";
		}
		else{
			sPath = sPath = sBasePath + "fr_FR.properties"
		}
		var oModelI18n = new sap.ui.model.resource.ResourceModel({
			//Depending on existing language settings set the path
			bundleUrl:sPath
		});
		//Set model to core
		this.getView().setModel(oModelI18n,"i18n");

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf i18n_languages.main
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf i18n_languages.main
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf i18n_languages.main
*/
//	onExit: function() {
//
//	}

});