jQuery.sap.declare("inc.demo.Toyota.util.formatter");

inc.demo.Toyota.util.formatter = {

fnCarSelected:  function (oIsSelected) {
		this.removeStyleClass("selectedCarCss");
		if (oIsSelected) {
			this.addStyleClass("selectedCarCss");
		}
		return true;
	}
};