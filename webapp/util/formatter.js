jQuery.sap.declare("inc.demo.Toyota.util.formatter");

inc.demo.Toyota.util.formatter = {

fnCarSelected:  function (sValue) {
		this.removeStyleClass("selectedEvent");
		if (sValue) {
			this.addStyleClass("selectedEvent");
		}
		return true;
	},

fnServiceStatusButtons: function(value){
	if(value==="ready"){
		return true;
	}
	else
	{
		return false;
	}
},
fnServiceStatusSwitch: function(value){
	if(value==="ready"){
		return false;
	}
	else
	{
		return true;
	}
}
};