define("userflxListWithImgController", {
    //Type your controller code here 
});
define("flxListWithImgControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxListWithImgController", ["userflxListWithImgController", "flxListWithImgControllerActions"], function() {
    var controller = require("userflxListWithImgController");
    var controllerActions = ["flxListWithImgControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
