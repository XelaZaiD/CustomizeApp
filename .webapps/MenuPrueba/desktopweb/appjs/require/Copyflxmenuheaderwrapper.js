define("Copyflxmenuheaderwrapper", function() {
    return function(controller) {
        var Copyflxmenuheaderwrapper = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "Copyflxmenuheaderwrapper",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_ff24c6713392431bac0f980a2c1dad54,
            "skin": "CopyCopyCopyslFbox0g0c023c26eb148",
            "top": "0dp",
            "width": "100%",
            "appName": "MenuPrueba"
        }, {
            "paddingInPixel": false
        }, {});
        Copyflxmenuheaderwrapper.setDefaultUnit(kony.flex.DP);
        var lblTempHeaderText = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblTempHeaderText",
            "isVisible": true,
            "left": "107dp",
            "skin": "CopyCopyCopydefLabel0g9fa00d1b79d48",
            "text": "Label",
            "width": "300dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgTempHeaderArraow = new kony.ui.Image2({
            "centerY": "50%",
            "height": "16dp",
            "id": "imgTempHeaderArraow",
            "isVisible": true,
            "onTouchEnd": controller.AS_Image_eba22e1a03264e35ae9d8c357f3baf6c,
            "right": 17,
            "skin": "slImage",
            "src": "rectangle_7_copy_1_4.png",
            "width": "16dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblLineSeperator = new kony.ui.Label({
            "bottom": "0dp",
            "height": "1dp",
            "id": "lblLineSeperator",
            "isVisible": true,
            "right": "13dp",
            "skin": "CopyCopyLBL0c3c421a2dc3f44",
            "text": ".",
            "width": "389dp",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        Copyflxmenuheaderwrapper.add(lblTempHeaderText, imgTempHeaderArraow, lblLineSeperator);
        return Copyflxmenuheaderwrapper;
    }
})