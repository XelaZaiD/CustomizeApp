define("userfrmLoginController", {
    //Type your controller code here 
});
define("frmLoginControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for loginButton **/
    AS_Button_d071b6ade3194551958d887767b0fab9: function AS_Button_d071b6ade3194551958d887767b0fab9(eventobject) {
        var self = this;
        kony.application.showLoadingScreen(null, "Iniciando ...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
        kony.timer.schedule("TIMEOUT_ACTION_a65d28dab99643eb8fa549f988b37ed2", function() {}, 5, false);
        kony.application.dismissLoadingScreen();
        var ntf = new kony.mvc.Navigation("frmListDetails");
        ntf.navigate();
    }
});
define("frmLoginController", ["userfrmLoginController", "frmLoginControllerActions"], function() {
    var controller = require("userfrmLoginController");
    var controllerActions = ["frmLoginControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
