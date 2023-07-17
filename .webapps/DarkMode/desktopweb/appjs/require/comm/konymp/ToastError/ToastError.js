define(function() {
    return function(controller) {
        var ToastError = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "20%",
            "clipBounds": true,
            "isMaster": true,
            "height": "39dp",
            "id": "ToastError",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyFlxToastErroFFD",
            "top": "0dp",
            "width": "100%",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "DarkMode"
        }, controller.args[0], "ToastError"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ToastError"), extendConfig({}, controller.args[2], "ToastError"));
        ToastError.setDefaultUnit(kony.flex.DP);
        var imageIcon = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "18dp",
            "id": "imageIcon",
            "isVisible": true,
            "left": "26dp",
            "skin": "slImage",
            "src": "cancel_1.png",
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
            "text": "Error message toast indicator.",
            "textStyle": {},
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
            "onTouchStart": controller.AS_Image_j8824cd3a2de4be380da8099de30e1bf,
            "right": "1.40%",
            "skin": "slImage",
            "src": "cross_1_2_1.png",
            "width": "12dp",
            "zIndex": 1
        }, controller.args[0], "ImgClose"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "ImgClose"), extendConfig({}, controller.args[2], "ImgClose"));
        ToastError.add(imageIcon, Message, ImgClose);
        ToastError.compInstData = {}
        return ToastError;
    }
})