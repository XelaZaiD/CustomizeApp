define("flxListWithImg", function() {
    return function(controller) {
        var flxListWithImg = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "67dp",
            "id": "flxListWithImg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "appName": "DarkMode"
        }, {
            "paddingInPixel": false
        }, {
            "hoverSkin": "tmpHoverskin"
        });
        flxListWithImg.setDefaultUnit(kony.flex.DP);
        var Image0a40818b994e949 = new kony.ui.Image2({
            "height": "40dp",
            "id": "Image0a40818b994e949",
            "isVisible": true,
            "left": "5%",
            "skin": "slImage",
            "src": "imagedrag.png",
            "top": "14dp",
            "width": "40dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblName = new kony.ui.Label({
            "id": "lblName",
            "isVisible": true,
            "left": "15%",
            "skin": "CopydefLabel0c3e8410402dc46",
            "text": "Label",
            "top": "20dp",
            "width": "20%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDesignation = new kony.ui.Label({
            "id": "lblDesignation",
            "isVisible": true,
            "left": "15%",
            "skin": "lblDeshWithImage",
            "text": "Label",
            "top": "37dp",
            "width": "20%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDepartmnt = new kony.ui.Label({
            "id": "lblDepartmnt",
            "isVisible": true,
            "left": "40%",
            "skin": "lblLstImg",
            "text": "Label",
            "top": "26dp",
            "width": "20%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblEmail = new kony.ui.Label({
            "id": "lblEmail",
            "isVisible": true,
            "left": "60%",
            "skin": "lblLstImg",
            "text": "Label",
            "top": "26dp",
            "width": "20%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblPhone = new kony.ui.Label({
            "id": "lblPhone",
            "isVisible": true,
            "right": "5%",
            "skin": "lblLstImg",
            "text": "Label",
            "top": "26dp",
            "width": "18%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxListWithImg.add(Image0a40818b994e949, lblName, lblDesignation, lblDepartmnt, lblEmail, lblPhone);
        return flxListWithImg;
    }
})