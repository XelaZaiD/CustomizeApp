define("comm/konymp/ToastAlert/userToastAlertController", function() {
    return {};
});
define("comm/konymp/ToastAlert/ToastAlertControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchStart defined for ImgClose **/
    AS_Image_a5a32d27d8b24d1aacad0422513b0ff5: function AS_Image_a5a32d27d8b24d1aacad0422513b0ff5(eventobject, x, y) {
        var self = this;
        this.view.isVisible = false;
        this.view.forceLayout();
    }
});
define("comm/konymp/ToastAlert/ToastAlertController", ["comm/konymp/ToastAlert/userToastAlertController", "comm/konymp/ToastAlert/ToastAlertControllerActions"], function() {
    var controller = require("comm/konymp/ToastAlert/userToastAlertController");
    var actions = require("comm/konymp/ToastAlert/ToastAlertControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
