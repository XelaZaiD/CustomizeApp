define(function() {
    return function(controller) {
        var ToastSuccess = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "21%",
            "clipBounds": true,
            "isMaster": true,
            "height": "39dp",
            "id": "ToastSuccess",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "FlxToastSuccessDCFFE2",
            "top": "0dp",
            "width": "100%",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "DarkMode"
        }, controller.args[0], "ToastSuccess"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ToastSuccess"), extendConfig({}, controller.args[2], "ToastSuccess"));
        ToastSuccess.setDefaultUnit(kony.flex.DP);
        var imageIcon = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "18dp",
            "id": "imageIcon",
            "isVisible": true,
            "left": "26dp",
            "skin": "slImage",
            "src": "checked__1_.png",
            "top": "0%",
            "width": "18dp",
            "zIndex": 1
        }, controller.args[0], "imageIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imageIcon"), extendConfig({}, controller.args[2], "imageIcon"));
        var Message = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "Message",
            "isVisible": true,
            "left": "54dp",
            "skin": "sknlblMessage",
            "text": "Success message toast indicator.",
            "textStyle": {},
            "top": 0,
            "width": "381dp",
            "zIndex": 1
        }, controller.args[0], "Message"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Message"), extendConfig({}, controller.args[2], "Message"));
        var ImgClose = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "12dp",
            "id": "ImgClose",
            "isVisible": true,
            "onTouchStart": controller.AS_Image_d59be4d0988a44288b3edb988bf23a5f,
            "right": "1.40%",
            "skin": "slImage",
            "src": "cross_1_3.png",
            "width": "12dp",
            "zIndex": 1
        }, controller.args[0], "ImgClose"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "ImgClose"), extendConfig({}, controller.args[2], "ImgClose"));
        ToastSuccess.add(imageIcon, Message, ImgClose);
        ToastSuccess.compInstData = {}
        return ToastSuccess;
    }
})