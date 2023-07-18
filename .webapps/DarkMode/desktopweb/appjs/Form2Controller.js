define("userForm2Controller", {
    //Type your controller code here 
});
define("Form2ControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnBack **/
    AS_Button_aa8dc40aa4254fd985617b4dc5e4c18e: function AS_Button_aa8dc40aa4254fd985617b4dc5e4c18e(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("Form1");
        ntf.navigate();
    },
    /** onClick defined for btnOpenMenu **/
    AS_Button_c3d087279e1846e6bd85ec41f420aaea: function AS_Button_c3d087279e1846e6bd85ec41f420aaea(eventobject) {
        var self = this;
        this.view.Menu.setVisibility(true);
    }
});
define("Form2Controller", ["userForm2Controller", "Form2ControllerActions"], function() {
    var controller = require("userForm2Controller");
    var controllerActions = ["Form2ControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
