define("Form1", function() {
    return function(controller) {
        function addWidgetsForm1() {
            this.setDefaultUnit(kony.flex.DP);
            var FlexScrollContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": false,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "FlexScrollContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrollContainer",
                "top": "0",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {
                "paddingInPixel": false
            }, {});
            FlexScrollContainer.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0",
                "clipBounds": false,
                "height": "70dp",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknHeaderFooter",
                "top": "0",
                "width": "100%",
                "appName": "DarkMode"
            }, {
                "paddingInPixel": false
            }, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var btnCustomize = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnCustomize",
                "isVisible": true,
                "left": "15dp",
                "skin": "sknRadiusButton",
                "text": "🎨",
                "top": "0",
                "width": "50dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var ListBoxColor = new kony.ui.ListBox({
                "centerY": "50%",
                "focusSkin": "defListBoxFocus",
                "height": "40dp",
                "id": "ListBoxColor",
                "isVisible": false,
                "left": "75dp",
                "masterData": [
                    ["0", "Elige tu color"],
                    ["1", "Rojo"],
                    ["2", "Morado"]
                ],
                "selectedKey": "0",
                "skin": "sknListBoxNormal",
                "top": "0dp",
                "width": "300dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "multiSelect": false
            });
            var lblPrueba1 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblPrueba1",
                "isVisible": true,
                "skin": "sknLabelBlanco",
                "text": "Lorem ipsum",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgTemenos = new kony.ui.Image2({
                "centerY": "50%",
                "height": "50dp",
                "id": "imgTemenos",
                "isVisible": true,
                "onTouchStart": controller.AS_Image_da0cc6219d804d94910a0ceb533199f7,
                "right": "15dp",
                "skin": "slImage",
                "src": "temenos_300.png",
                "top": "0dp",
                "width": "50dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxHeader.add(btnCustomize, ListBoxColor, lblPrueba1, imgTemenos);
            var ToastAlert = new comm.konymp.ToastAlert({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "40dp",
                "id": "ToastAlert",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "top": "10dp",
                "width": "100%",
                "appName": "DarkMode",
                "overrides": {
                    "ToastAlert": {
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared",
                        "left": "0dp",
                        "top": "10dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var ToastError = new comm.konymp.ToastError({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "39dp",
                "id": "ToastError",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyFlxToastErroFFD",
                "top": "10dp",
                "width": "100%",
                "appName": "DarkMode",
                "overrides": {
                    "ToastError": {
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared",
                        "left": "0dp",
                        "top": "10dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var ToastSuccess = new comm.konymp.ToastSuccess({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "39dp",
                "id": "ToastSuccess",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "FlxToastSuccessDCFFE2",
                "top": "10dp",
                "width": "100%",
                "appName": "DarkMode",
                "overrides": {
                    "ToastSuccess": {
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared",
                        "left": "0dp",
                        "top": "10dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var Login = new com.konymp.Login({
                "centerX": "50%",
                "height": "500dp",
                "id": "Login",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyFLXFFFFFF1",
                "top": "10dp",
                "width": "500dp",
                "zIndex": 2,
                "appName": "DarkMode",
                "overrides": {
                    "Login": {
                        "centerX": "50%",
                        "centerY": "viz.val_cleared",
                        "left": "0dp",
                        "top": "10dp",
                        "width": "500dp",
                        "zIndex": 2
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var ListWithImageCopy = new com.konymp.ListWithImageCopy({
                "height": "40%",
                "id": "ListWithImageCopy",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyflxWhiteBg0e2c7657203174a",
                "top": "10dp",
                "width": "100%",
                "appName": "DarkMode",
                "overrides": {
                    "ListWithImageCopy": {
                        "top": "10dp"
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": false,
                "height": "80dp",
                "id": "flxFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknHeaderFooter",
                "width": "100%",
                "appName": "DarkMode"
            }, {
                "paddingInPixel": false
            }, {});
            flxFooter.setDefaultUnit(kony.flex.DP);
            var lblPrueba2 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "40%",
                "id": "lblPrueba2",
                "isVisible": true,
                "skin": "sknLabelBlanco",
                "text": "Lorem ipsum",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblDescription = new kony.ui.Label({
                "bottom": "0",
                "centerX": "50%",
                "id": "lblDescription",
                "isVisible": true,
                "skin": "sknLblDescription",
                "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnDarkMode = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnDarkMode",
                "isVisible": true,
                "right": 17,
                "skin": "sknRadiusButton",
                "text": "🌚",
                "top": "0",
                "width": "50dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFooter.add(lblPrueba2, lblDescription, btnDarkMode);
            FlexScrollContainer.add(flxHeader, ToastAlert, ToastError, ToastSuccess, Login, ListWithImageCopy, flxFooter);
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1366,
            }
            this.compInstData = {
                "ToastAlert": {
                    "centerX": "",
                    "centerY": "",
                    "left": "0dp",
                    "top": "10dp"
                },
                "ToastError": {
                    "centerX": "",
                    "centerY": "",
                    "left": "0dp",
                    "top": "10dp"
                },
                "ToastSuccess": {
                    "centerX": "",
                    "centerY": "",
                    "left": "0dp",
                    "top": "10dp"
                },
                "Login": {
                    "centerX": "50%",
                    "centerY": "",
                    "left": "0dp",
                    "top": "10dp",
                    "width": "500dp",
                    "zIndex": 2
                },
                "ListWithImageCopy": {
                    "top": "10dp"
                }
            }
            this.add(FlexScrollContainer);
        };
        return [{
            "addWidgets": addWidgetsForm1,
            "enabledForIdleTimeout": false,
            "id": "Form1",
            "init": controller.AS_Form_bba0f5fb5ee5459faed9dae7cb822ee1,
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_fe04a739e51042c78f5b4a6c01f07ee0,
            "preShow": function(eventobject) {
                controller.AS_Form_a9580dd7c935407eafa2046261b01a30(eventobject);
                kony.visualizer.syncComponentInstanceDataCache(eventobject);
            },
            "skin": "slForm",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "DarkMode",
            "info": {
                "kuid": "baf75236b76c4c1b84758f6c487dad7c"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "paddingInPixel": false
        }, {
            "retainScrollPosition": false
        }]
    }
});