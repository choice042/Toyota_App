jQuery.sap.declare("inc.demo.Toyota.util.formatter");

inc.demo.Toyota.util.formatter = {

fnCarSelected:  function (sValue) {
		this.removeStyleClass("selectedEvent");
		if (sValue) {
			this.addStyleClass("selectedEvent");
		}
		return true;
	}
};