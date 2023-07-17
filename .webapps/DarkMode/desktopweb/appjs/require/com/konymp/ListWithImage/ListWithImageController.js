define("com/konymp/ListWithImage/userListWithImageController", function() {
    return {};
});
define("com/konymp/ListWithImage/ListWithImageControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/konymp/ListWithImage/ListWithImageController", ["com/konymp/ListWithImage/userListWithImageController", "com/konymp/ListWithImage/ListWithImageControllerActions"], function() {
    var controller = require("com/konymp/ListWithImage/userListWithImageController");
    var actions = require("com/konymp/ListWithImage/ListWithImageControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
