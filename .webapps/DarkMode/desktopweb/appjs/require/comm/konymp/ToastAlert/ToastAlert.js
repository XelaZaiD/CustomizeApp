define(function() {
    return function(controller) {
        var ToastAlert = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "20%",
            "clipBounds": true,
            "isMaster": true,
            "height": "40dp",
            "id": "ToastAlert",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox",
            "top": "0dp",
            "width": "100%",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "DarkMode"
        }, controller.args[0], "ToastAlert"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ToastAlert"), extendConfig({}, controller.args[2], "ToastAlert"));
        ToastAlert.setDefaultUnit(kony.flex.DP);
        var imageIcon = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "18dp",
            "id": "imageIcon",
            "isVisible": true,
            "left": "26dp",
            "skin": "CopyslImage0f955769f683241",
            "src": "exclamation_sign_1.png",
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
            "text": "Alert message toast indicator.",
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
            "onTouchStart": controller.AS_Image_a5a32d27d8b24d1aacad0422513b0ff5,
            "right": "1.40%",
            "skin": "CopyslImage0ccc1f1e6f79042",
            "src": "cross_1_1_1.png",
            "width": "12dp",
            "zIndex": 1
        }, controller.args[0], "ImgClose"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "ImgClose"), extendConfig({}, controller.args[2], "ImgClose"));
        ToastAlert.add(imageIcon, Message, ImgClose);
        ToastAlert.compInstData = {}
        return ToastAlert;
    }
})