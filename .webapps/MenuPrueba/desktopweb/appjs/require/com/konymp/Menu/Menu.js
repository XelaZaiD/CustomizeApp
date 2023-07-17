define(function() {
    return function(controller) {
        var Menu = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "900dp",
            "id": "Menu",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "preShow": function(eventobject) {
                controller.AS_FlexContainer_c7fff14b9a1d48f28dc67d6a85ce3510(eventobject);
            },
            "skin": "CopyCopyFLXFFFFFF4",
            "top": "0dp",
            "width": "488px",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "MenuPrueba"
        }, controller.args[0], "Menu"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "Menu"), extendConfig({}, controller.args[2], "Menu"));
        Menu.setDefaultUnit(kony.flex.DP);
        var flxHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyCopyCopyslFbox0ba3ff774fc6e48",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "MenuPrueba"
        }, controller.args[0], "flxHeader"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(kony.flex.DP);
        var imgClose = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "16dp",
            "id": "imgClose",
            "isVisible": true,
            "onTouchStart": controller.AS_Image_bbecc0a391d34a69a75f96d9a032b88f,
            "right": "22dp",
            "skin": "slImage",
            "src": "group_24_1_5.png",
            "width": "16dp",
            "zIndex": 1
        }, controller.args[0], "imgClose"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgClose"), extendConfig({}, controller.args[2], "imgClose"));
        flxHeader.add(imgClose);
        var segMenuItems = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "data": [
                [{
                        "imgTempHeaderArraow": "rectangle_7_copy_1_4.png",
                        "lblLineSeperator": ".",
                        "lblTempHeaderText": "FirstLevelItem"
                    },
                    [{
                        "lblMenuItem": "SecondLevelItem",
                        "lblSeperator": "."
                    }]
                ],
                [{
                        "imgTempHeaderArraow": "rectangle_7_copy_1_4.png",
                        "lblLineSeperator": ".",
                        "lblTempHeaderText": "FirstLevelItem"
                    },
                    [{
                        "lblMenuItem": "SecondLevelItem",
                        "lblSeperator": "."
                    }]
                ],
                [{
                        "imgTempHeaderArraow": "rectangle_7_copy_1_4.png",
                        "lblLineSeperator": ".",
                        "lblTempHeaderText": "FirstLevelItem"
                    },
                    [{
                        "lblMenuItem": "SecondLevelItem",
                        "lblSeperator": "."
                    }]
                ],
                [{
                        "imgTempHeaderArraow": "rectangle_7_copy_1_4.png",
                        "lblLineSeperator": ".",
                        "lblTempHeaderText": "FirstLevelItem"
                    },
                    [{
                        "lblMenuItem": "SecondLevelItem",
                        "lblSeperator": "."
                    }]
                ]
            ],
            "groupCells": false,
            "height": "736dp",
            "id": "segMenuItems",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "onRowClick": controller.AS_Segment_b7978e8cec3946628a6ebca9e1f1efc3,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "CopyflxMenuRowWrapper",
            "sectionHeaderSkin": "CopyCopySKNMENUSEGHEADER4",
            "sectionHeaderTemplate": "Copyflxmenuheaderwrapper",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "aaaaaa00",
            "separatorRequired": false,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "CopyflxMenuRowWrapper": "CopyflxMenuRowWrapper",
                "Copyflxmenuheaderwrapper": "Copyflxmenuheaderwrapper",
                "imgTempHeaderArraow": "imgTempHeaderArraow",
                "lblLineSeperator": "lblLineSeperator",
                "lblMenuItem": "lblMenuItem",
                "lblSeperator": "lblSeperator",
                "lblTempHeaderText": "lblTempHeaderText"
            },
            "width": "100%",
            "zIndex": 1,
            "appName": "MenuPrueba"
        }, controller.args[0], "segMenuItems"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segMenuItems"), extendConfig({}, controller.args[2], "segMenuItems"));
        var lblLineSeperator = new kony.ui.Label(extendConfig({
            "height": "1dp",
            "id": "lblLineSeperator",
            "isVisible": true,
            "left": "0dp",
            "right": "0dp",
            "skin": "CopyCopyLBL0a9b6f352958a4f",
            "text": ".",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblLineSeperator"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLineSeperator"), extendConfig({}, controller.args[2], "lblLineSeperator"));
        var SquaredBtn = new kony.ui.Button(extendConfig({
            "centerX": "50%",
            "focusSkin": "CopyCopySquaredBorderedButtonActive4",
            "height": "60dp",
            "id": "SquaredBtn",
            "isVisible": true,
            "left": "32dp",
            "skin": "CopyCopySquaredBorderedButtonNormal4",
            "text": "LOG OUT",
            "top": "22dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "SquaredBtn"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "SquaredBtn"), extendConfig({}, controller.args[2], "SquaredBtn"));
        var imgUpArrow = new kony.ui.Image2(extendConfig({
            "height": "0dp",
            "id": "imgUpArrow",
            "isVisible": false,
            "left": "48dp",
            "skin": "slImage",
            "src": "rectangle_7_copy_1_4.png",
            "top": "0dp",
            "width": "0dp",
            "zIndex": 1
        }, controller.args[0], "imgUpArrow"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgUpArrow"), extendConfig({}, controller.args[2], "imgUpArrow"));
        var imgDownArrow = new kony.ui.Image2(extendConfig({
            "height": "0dp",
            "id": "imgDownArrow",
            "isVisible": false,
            "left": "48dp",
            "skin": "slImage",
            "src": "arrow_down.png",
            "top": "0dp",
            "width": "0dp",
            "zIndex": 1
        }, controller.args[0], "imgDownArrow"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgDownArrow"), extendConfig({}, controller.args[2], "imgDownArrow"));
        Menu.add(flxHeader, segMenuItems, lblLineSeperator, SquaredBtn, imgUpArrow, imgDownArrow);
        return Menu;
    }
})