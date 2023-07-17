define("CopyflxMenuRowWrapper", function() {
    return function(controller) {
        var CopyflxMenuRowWrapper = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "CopyflxMenuRowWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyCopyCopyslFbox0b9b6a6aa3b2848",
            "top": "0dp",
            "width": "100%",
            "appName": "MenuPrueba"
        }, {
            "paddingInPixel": false
        }, {
            "hoverSkin": "CopyCopyCopyslFbox0fc5acdf617a14d"
        });
        CopyflxMenuRowWrapper.setDefaultUnit(kony.flex.DP);
        var lblMenuItem = new kony.ui.Label({
            "centerY": "50%",
            "height": "54dp",
            "id": "lblMenuItem",
            "isVisible": true,
            "left": "127dp",
            "skin": "CopyCopyCopydefLabel0ie6cfc9382994c",
            "text": "Label",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "hoverSkin": "CopyCopyCopydefLabel0i1d0b699f54d4e"
        });
        var lblSeperator = new kony.ui.Label({
            "bottom": "0dp",
            "height": "1px",
            "id": "lblSeperator",
            "isVisible": true,
            "right": "54dp",
            "skin": "CopyCopyLBL0c3c421a2dc3f44",
            "text": ".",
            "width": "354dp",
            "zIndex": 3
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        CopyflxMenuRowWrapper.add(lblMenuItem, lblSeperator);
        return CopyflxMenuRowWrapper;
    }
})