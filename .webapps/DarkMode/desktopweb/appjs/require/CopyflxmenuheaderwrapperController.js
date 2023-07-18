define("userCopyflxmenuheaderwrapperController", {
    //Type your controller code here 
});
define("CopyflxmenuheaderwrapperControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for Copyflxmenuheaderwrapper **/
    AS_FlexContainer_g79d135aa98d4868879f3f4d64d06357: function AS_FlexContainer_g79d135aa98d4868879f3f4d64d06357(eventobject, context) {
        var self = this;
        this.executeOnParent("clickedOnSectionHeader", eventobject.rowContext.sectionIndex);
    },
    /** onTouchEnd defined for imgTempHeaderArraow **/
    AS_Image_da4f294c111a4635a555a5ce80f05b41: function AS_Image_da4f294c111a4635a555a5ce80f05b41(eventobject, x, y, context) {
        var self = this;
        //this.executeOnParent("clickedOnSectionHeader",eventobject.rowContext.sectionIndex);
    }
});
define("CopyflxmenuheaderwrapperController", ["userCopyflxmenuheaderwrapperController", "CopyflxmenuheaderwrapperControllerActions"], function() {
    var controller = require("userCopyflxmenuheaderwrapperController");
    var controllerActions = ["CopyflxmenuheaderwrapperControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
