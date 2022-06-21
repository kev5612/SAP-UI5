sap.ui.jsview("simpleform.form", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf simpleform.form
	*/ 
	getControllerName : function() {
		return "simpleform.form";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf simpleform.form
	*/ 
	createContent : function(oController) {
		
		var olabel = new sap.m.Label("label1",{text:"Mainform"});
		var input = new sap.m.Input("input1",{placeholder:"Simple input"});
		var oButton = new sap.m.Button("button1",{text:"Press me"});
		var oRating = new sap.m.RatingIndicator("Rating1",{value:3.5});
		var oTextarea = new sap.m.TextArea("Textarea1",{placeholder:"Awesome text area"});
		var oDatePicker = new sap.m.DatePicker("Picker",{});
		var oFile = new sap.ui.unified.FileUploader("file",{});
		var oBar = new sap.m.Bar({contentRight:[ new sap.m.Button({text:"Right side"})]});
		var ohbox1 = new sap.m.HBox("vbox1",{
			items:[
				input,
				oButton,
				oRating,
				oTextarea,
				oDatePicker,
				oFile
			]
		});
		var vBox1  = new sap.m.VBox("vbox",
				{
				items:[
					new sap.m.Button({text:"Button1"}),
					new sap.m.Button({text:"Button2"})
		]})

 		var oPage =  new sap.m.Page({
			title: "Main form",
			content: [
				olabel,
				ohbox1,
				oBar,
				vBox1
				
				
				
			
			]
		});
 		return oPage;
	}

});