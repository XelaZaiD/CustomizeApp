define("userCopyflxmenuheaderwrapperController", {
    //Type your controller code here 
});
define("CopyflxmenuheaderwrapperControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for Copyflxmenuheaderwrapper **/
    AS_FlexContainer_ff24c6713392431bac0f980a2c1dad54: function AS_FlexContainer_ff24c6713392431bac0f980a2c1dad54(eventobject, context) {
        var self = this;
        this.executeOnParent("clickedOnSectionHeader", eventobject.rowContext.sectionIndex);
    },
    /** onTouchEnd defined for imgTempHeaderArraow **/
    AS_Image_eba22e1a03264e35ae9d8c357f3baf6c: function AS_Image_eba22e1a03264e35ae9d8c357f3baf6c(eventobject, x, y, context) {
        var self = this;
        //this.executeOnParent("clickedOnSectionHeader",eventobject.rowContext.sectionIndex);
    }
});
define("CopyflxmenuheaderwrapperController", ["userCopyflxmenuheaderwrapperController", "CopyflxmenuheaderwrapperControllerActions"], function() {
    var controller = require("userCopyflxmenuheaderwrapperController");
    var controllerActions = ["CopyflxmenuheaderwrapperControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
