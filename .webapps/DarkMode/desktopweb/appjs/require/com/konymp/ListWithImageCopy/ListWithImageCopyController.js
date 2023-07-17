define("com/konymp/ListWithImageCopy/userListWithImageCopyController", function() {
    return {};
});
define("com/konymp/ListWithImageCopy/ListWithImageCopyControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/konymp/ListWithImageCopy/ListWithImageCopyController", ["com/konymp/ListWithImageCopy/userListWithImageCopyController", "com/konymp/ListWithImageCopy/ListWithImageCopyControllerActions"], function() {
    var controller = require("com/konymp/ListWithImageCopy/userListWithImageCopyController");
    var actions = require("com/konymp/ListWithImageCopy/ListWithImageCopyControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
