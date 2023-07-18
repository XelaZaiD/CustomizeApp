define("Form2", function() {
    return function(controller) {
        function addWidgetsForm2() {
            this.setDefaultUnit(kony.flex.DP);
            var Menu = new com.konymp.Menu({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "height": "900dp",
                "id": "Menu",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyCopyFLXFFFFFF4",
                "top": "0dp",
                "width": "488px",
                "appName": "DarkMode",
                "overrides": {
                    "Menu": {
                        "isVisible": false
                    }
                }
            }, {
                "paddingInPixel": false,
                "overrides": {}
            }, {
                "overrides": {}
            });
            var btnBack = new kony.ui.Button({
                "bottom": "0",
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnBack",
                "isVisible": true,
                "onClick": controller.AS_Button_aa8dc40aa4254fd985617b4dc5e4c18e,
                "right": "0",
                "skin": "defBtnNormal",
                "text": "Regresa",
                "width": "300dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnOpenMenu = new kony.ui.Button({
                "bottom": 0,
                "focusSkin": "defBtnFocus",
                "height": "50dp",
                "id": "btnOpenMenu",
                "isVisible": true,
                "onClick": controller.AS_Button_c3d087279e1846e6bd85ec41f420aaea,
                "right": -0,
                "skin": "defBtnNormal",
                "text": "Menu",
                "top": "0",
                "width": "300dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1366,
            }
            this.compInstData = {}
            this.add(Menu, btnBack, btnOpenMenu);
        };
        return [{
            "addWidgets": addWidgetsForm2,
            "enabledForIdleTimeout": false,
            "id": "Form2",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "DarkMode",
            "info": {
                "kuid": "bf8967e16a0b4f2098047aed8d8134b4"
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