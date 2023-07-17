define('applicationController',{
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.konymp.Menu", "Menu", "MenuController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "Menu",
            "name": "com.konymp.Menu"
        });
        kony.mvc.registry.add("Copyflxmenuheaderwrapper", "Copyflxmenuheaderwrapper", "CopyflxmenuheaderwrapperController");
        kony.mvc.registry.add("CopyflxMenuRowWrapper", "CopyflxMenuRowWrapper", "CopyflxMenuRowWrapperController");
        kony.mvc.registry.add("flxSampleRowTemplate", "flxSampleRowTemplate", "flxSampleRowTemplateController");
        kony.mvc.registry.add("flxSectionHeaderTemplate", "flxSectionHeaderTemplate", "flxSectionHeaderTemplateController");
        kony.mvc.registry.add("Form1", "Form1", "Form1Controller");
        setAppBehaviors();
        if (typeof startBackgroundWorker != "undefined") {
            startBackgroundWorker();
        }
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("Form1").navigate();
    }
});
define("com/konymp/Menu/userMenuController", [],function() {
    return {
        /**
         * @function
         *
         */
        getTableData: function() {
            alert(`👽 getTableData`);
            this.upImage = this.view.imgUpArrow.src;
            this.downImage = this.view.imgDownArrow.src;
            let __tableData__ = [
                [{
                        "imgTempHeaderArraow": this.upImage,
                        "lblLineSeperator": ".",
                        "lblTempHeaderText": "First Level Item"
                    },
                    [{
                        "lblMenuItem": "Second Level Item",
                        "lblSeperator": "."
                    }]
                ],
                [{
                        "imgTempHeaderArraow": this.upImage,
                        "lblLineSeperator": ".",
                        "lblTempHeaderText": "First Level Item"
                    },
                    [{
                        "lblMenuItem": "Second Level Item",
                        "lblSeperator": "."
                    }, {
                        "lblMenuItem": "Second Level Item",
                        "lblSeperator": "."
                    }, {
                        "lblMenuItem": "Second Level Item",
                        "lblSeperator": "."
                    }, {
                        "lblMenuItem": "Second Level Item",
                        "lblSeperator": "."
                    }, {
                        "lblMenuItem": "Second Level Item",
                        "lblSeperator": "."
                    }]
                ],
                [{
                        "imgTempHeaderArraow": this.upImage,
                        "lblLineSeperator": ".",
                        "lblTempHeaderText": "First Level Item"
                    },
                    [{
                        "lblMenuItem": "Second Level Item",
                        "lblSeperator": "."
                    }, {
                        "lblMenuItem": "Second Level Item",
                        "lblSeperator": "."
                    }, {
                        "lblMenuItem": "Second Level Item",
                        "lblSeperator": "."
                    }, {
                        "lblMenuItem": "Second Level Item",
                        "lblSeperator": "."
                    }]
                ],
                [{
                        "imgTempHeaderArraow": this.upImage,
                        "lblLineSeperator": ".",
                        "lblTempHeaderText": "First Level Item"
                    },
                    [{
                        "lblMenuItem": "Second Level Item",
                        "lblSeperator": "."
                    }, {
                        "lblMenuItem": "Second Level Item",
                        "lblSeperator": "."
                    }, {
                        "lblMenuItem": "Second Level Item",
                        "lblSeperator": "."
                    }, {
                        "lblMenuItem": "Second Level Item",
                        "lblSeperator": "."
                    }, {
                        "lblMenuItem": "Second Level Item",
                        "lblSeperator": "."
                    }]
                ]
            ];
            return __tableData__;
        },
        /**
         * @function
         *
         */
        onComponentPostShow: function() {
            this.__tableData__ = this.getTableData();
            alert(`👽 onComponentPostShow __tableData__: ${JSON.stringify(this.__tableData__)}`);
            var tempData = JSON.parse(JSON.stringify(this.__tableData__));
            for (var i = 0; i < this.view.segMenuItems.data.length; i++) {
                tempData[i][1] = [];
            }
            alert(`👽 onComponentPostShow - tempData: ${JSON.stringify(tempData)}`);
            this.view.segMenuItems.removeAll();
            this.view.segMenuItems.setData(tempData);
            this.view.forceLayout();
        },
        clickedOnSectionHeader: function(sectionIndex) {
            alert(`👽 clickedOnSectionHeader: ${JSON.stringify(sectionIndex)}`);
            var tempData = JSON.parse(JSON.stringify(this.view.segMenuItems.data));
            if (this.view.segMenuItems.data[sectionIndex][1].length === 0) {
                tempData[sectionIndex][0].imgTempHeaderArraow = this.downImage;
                tempData[sectionIndex][1] = this.__tableData__[sectionIndex][1];
            } else {
                tempData[sectionIndex][0].imgTempHeaderArraow = this.upImage;
                tempData[sectionIndex][1] = [];
            }
            this.view.segMenuItems.removeAll();
            this.view.segMenuItems.setData(tempData);
            this.view.forceLayout();
        }
    };
});
define("com/konymp/Menu/MenuControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchStart defined for imgClose **/
    AS_Image_bbecc0a391d34a69a75f96d9a032b88f: function AS_Image_bbecc0a391d34a69a75f96d9a032b88f(eventobject, x, y) {
        var self = this;
        this.view.isVisible = false;
    },
    /** onRowClick defined for segMenuItems **/
    AS_Segment_b7978e8cec3946628a6ebca9e1f1efc3: function AS_Segment_b7978e8cec3946628a6ebca9e1f1efc3(eventobject, sectionNumber, rowNumber) {
        var self = this;
        //alert(JSON.stringify(this.__tableData__));
    },
    /** preShow defined for Menu **/
    AS_FlexContainer_c7fff14b9a1d48f28dc67d6a85ce3510: function AS_FlexContainer_c7fff14b9a1d48f28dc67d6a85ce3510(eventobject) {
        var self = this;
        //this.view.onComponentPostShow();
    }
});
define("com/konymp/Menu/MenuController", ["com/konymp/Menu/userMenuController", "com/konymp/Menu/MenuControllerActions"], function() {
    var controller = require("com/konymp/Menu/userMenuController");
    var actions = require("com/konymp/Menu/MenuControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/konymp/Menu/Menu',[],function() {
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
});
define("Copyflxmenuheaderwrapper", [],function() {
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
});
define("CopyflxMenuRowWrapper", [],function() {
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
});
define("flxSampleRowTemplate", [],function() {
    return function(controller) {
        var flxSampleRowTemplate = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "75dp",
            "id": "flxSampleRowTemplate",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknSampleRowTemplate",
            "width": "100%",
            "appName": "MenuPrueba"
        }, {
            "paddingInPixel": false
        }, {});
        flxSampleRowTemplate.setDefaultUnit(kony.flex.DP);
        var lblHeading = new kony.ui.Label({
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "sknLblRowHeading",
            "text": "Heading",
            "textStyle": {},
            "top": "8.00%",
            "width": "45%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDescription = new kony.ui.Label({
            "bottom": "10%",
            "id": "lblDescription",
            "isVisible": true,
            "left": "4%",
            "maxNumberOfLines": 3,
            "maxWidth": "70%",
            "skin": "sknLblDescription",
            "text": "Sub-Heading",
            "textStyle": {},
            "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
            "top": "42%",
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTime = new kony.ui.Label({
            "id": "lblTime",
            "isVisible": true,
            "right": "9%",
            "skin": "sknLblTimeStamp",
            "text": "Timestamp",
            "textStyle": {},
            "top": "10%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblStrip = new kony.ui.Label({
            "height": "100%",
            "id": "lblStrip",
            "isVisible": true,
            "left": "0dp",
            "maxWidth": "1%",
            "skin": "sknLblStrip",
            "textStyle": {},
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSampleRowTemplate.add(lblHeading, lblDescription, lblTime, lblStrip);
        return flxSampleRowTemplate;
    }
});
define("flxSectionHeaderTemplate", [],function() {
    return function(controller) {
        var flxSectionHeaderTemplate = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxSectionHeaderTemplate",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknSampleSectionHeaderTemplate",
            "width": "100%",
            "appName": "MenuPrueba"
        }, {
            "paddingInPixel": false
        }, {});
        flxSectionHeaderTemplate.setDefaultUnit(kony.flex.DP);
        var lblHeading = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblHeading",
            "isVisible": true,
            "left": "4%",
            "maxWidth": "50%",
            "skin": "sknSectionHeaderLabelSkin",
            "text": "Heading",
            "textStyle": {},
            "width": "75%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSectionHeaderTemplate.add(lblHeading);
        return flxSectionHeaderTemplate;
    }
});
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

define("userCopyflxMenuRowWrapperController", {
    //Type your controller code here 
});
define("CopyflxMenuRowWrapperControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("CopyflxMenuRowWrapperController", ["userCopyflxMenuRowWrapperController", "CopyflxMenuRowWrapperControllerActions"], function() {
    var controller = require("userCopyflxMenuRowWrapperController");
    var controllerActions = ["CopyflxMenuRowWrapperControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});

define("userflxSampleRowTemplateController", {
    //Type your controller code here 
});
define("flxSampleRowTemplateControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSampleRowTemplateController", ["userflxSampleRowTemplateController", "flxSampleRowTemplateControllerActions"], function() {
    var controller = require("userflxSampleRowTemplateController");
    var controllerActions = ["flxSampleRowTemplateControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});

define("userflxSectionHeaderTemplateController", {
    //Type your controller code here 
});
define("flxSectionHeaderTemplateControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSectionHeaderTemplateController", ["userflxSectionHeaderTemplateController", "flxSectionHeaderTemplateControllerActions"], function() {
    var controller = require("userflxSectionHeaderTemplateController");
    var controllerActions = ["flxSectionHeaderTemplateControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});

define("navigation/NavigationModel", { 
    "Application": {},
    "Forms" : {},
    "UIModules" : {}
});
define("navigation/NavigationController", {
    //Add your navigation controller code here.
});

require(['applicationController','com/konymp/Menu/MenuController','com/konymp/Menu/Menu','Copyflxmenuheaderwrapper','CopyflxMenuRowWrapper','flxSampleRowTemplate','flxSectionHeaderTemplate','CopyflxmenuheaderwrapperController','CopyflxMenuRowWrapperController','flxSampleRowTemplateController','flxSectionHeaderTemplateController','navigation/NavigationModel','navigation/NavigationController'], function(){});
define("sparequirefileslist", function(){});

