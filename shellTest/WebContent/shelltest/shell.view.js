sap.ui.jsview("shelltest.shell", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf shelltest.shell
	*/ 
	getControllerName : function() {
		return "shelltest.shell";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf shelltest.shell
	*/ 
	
	createContent : function(oController) {
		
		var oSide = new sap.tnt.SideNavigation("huh",{
			item:new sap.tnt.NavigationList({
				items:[
					new sap.tnt.NavigationListItem({text:"list item 1"})
				],
				itemSelect:function(){this.setExpanded(!this.getExpanded()); }
			})
		});
		
		 		return new sap.m.Page({
			title: "Shell test",
			content: [
				oSide
				
			]
		});
	}

});