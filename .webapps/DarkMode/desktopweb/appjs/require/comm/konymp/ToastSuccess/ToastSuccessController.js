define("comm/konymp/ToastSuccess/userToastSuccessController", function() {
    return {};
});
define("comm/konymp/ToastSuccess/ToastSuccessControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchStart defined for ImgClose **/
    AS_Image_d59be4d0988a44288b3edb988bf23a5f: function AS_Image_d59be4d0988a44288b3edb988bf23a5f(eventobject, x, y) {
        var self = this;
        this.view.isVisible = false;
        this.view.forceLayout();
    }
});
define("comm/konymp/ToastSuccess/ToastSuccessController", ["comm/konymp/ToastSuccess/userToastSuccessController", "comm/konymp/ToastSuccess/ToastSuccessControllerActions"], function() {
    var controller = require("comm/konymp/ToastSuccess/userToastSuccessController");
    var actions = require("comm/konymp/ToastSuccess/ToastSuccessControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
