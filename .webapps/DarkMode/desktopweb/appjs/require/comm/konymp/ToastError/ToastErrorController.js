define("comm/konymp/ToastError/userToastErrorController", function() {
    return {};
});
define("comm/konymp/ToastError/ToastErrorControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchStart defined for ImgClose **/
    AS_Image_j8824cd3a2de4be380da8099de30e1bf: function AS_Image_j8824cd3a2de4be380da8099de30e1bf(eventobject, x, y) {
        var self = this;
        this.view.isVisible = false;
        this.view.forceLayout();
    }
});
define("comm/konymp/ToastError/ToastErrorController", ["comm/konymp/ToastError/userToastErrorController", "comm/konymp/ToastError/ToastErrorControllerActions"], function() {
    var controller = require("comm/konymp/ToastError/userToastErrorController");
    var actions = require("comm/konymp/ToastError/ToastErrorControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
