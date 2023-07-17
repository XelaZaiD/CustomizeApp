define("FBox0ef65618e166341", function() {
    return function(controller) {
        FBox0ef65618e166341 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "120dp",
            "id": "FBox0ef65618e166341",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "width": "100%",
            "appName": "EmpDirWeb"
        }, {
            "paddingInPixel": false
        }, {});
        FBox0ef65618e166341.setDefaultUnit(kony.flex.DP);
        var employeeSegSep = new kony.ui.Label({
            "bottom": 0,
            "height": "1dp",
            "id": "employeeSegSep",
            "isVisible": true,
            "left": "20dp",
            "right": "20dp",
            "skin": "CopydefLabel0a9b9d0b4a87841",
            "text": "Label",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var employeeSegImage = new kony.ui.Image2({
            "centerY": "50%",
            "height": "96dp",
            "id": "employeeSegImage",
            "isVisible": true,
            "left": "14dp",
            "skin": "slImage0gb816969cc064b",
            "src": "imagedrag.png",
            "width": "96dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var employeeFieldName = new kony.ui.Label({
            "id": "employeeFieldName",
            "isVisible": true,
            "left": "143dp",
            "right": "20dp",
            "skin": "CopydefLabel0e117a4d247624b",
            "text": "Label",
            "top": "20dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var employeeFieldTitle = new kony.ui.Label({
            "centerY": "50%",
            "height": "24dp",
            "id": "employeeFieldTitle",
            "isVisible": true,
            "left": "143dp",
            "right": 20,
            "skin": "CopydefLabel0a895e86236594f",
            "text": "Label",
            "top": "20dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var employeeFieldGroup = new kony.ui.Label({
            "bottom": "20dp",
            "height": "20dp",
            "id": "employeeFieldGroup",
            "isVisible": true,
            "left": "143dp",
            "right": 20,
            "skin": "CopydefLabel0jab90b0fff5748",
            "text": "Label",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var employeeId = new kony.ui.Label({
            "id": "employeeId",
            "isVisible": false,
            "left": "359dp",
            "skin": "defLabel0d32d73ceb7b749",
            "text": "Label",
            "top": "31dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        FBox0ef65618e166341.add(employeeSegSep, employeeSegImage, employeeFieldName, employeeFieldTitle, employeeFieldGroup, employeeId);
        return FBox0ef65618e166341;
    }
})