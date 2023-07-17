define("frmLogin", function() {
    return function(controller) {
        function addWidgetsfrmLogin() {
            this.setDefaultUnit(kony.flex.DP);
            var masterContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "masterContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "whiteContainerSkin0ec6b7298696248",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "EmpDirWeb"
            }, {
                "paddingInPixel": false
            }, {});
            masterContainer.setDefaultUnit(kony.flex.DP);
            var paddingContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "paddingContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "40dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "right": 40,
                "skin": "slFbox0d637e0536e5447",
                "top": "0dp",
                "width": "380dp",
                "appName": "EmpDirWeb"
            }, {
                "paddingInPixel": false
            }, {});
            paddingContainer.setDefaultUnit(kony.flex.DP);
            var companyLogoImage = new kony.ui.Image2({
                "centerX": "50.00%",
                "height": "123dp",
                "id": "companyLogoImage",
                "isVisible": true,
                "left": "100dp",
                "skin": "slImage0a47cda185d6d4d",
                "src": "logo.png",
                "top": "197dp",
                "width": "123dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var loginTitleContainer = new kony.ui.FlexContainer({
                "centerX": "50%",
                "clipBounds": true,
                "height": "43dp",
                "id": "loginTitleContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "right": 0,
                "skin": "slFbox0d637e0536e5447",
                "top": "13dp",
                "zIndex": 1,
                "appName": "EmpDirWeb"
            }, {
                "paddingInPixel": false
            }, {});
            loginTitleContainer.setDefaultUnit(kony.flex.DP);
            var loginTitleEmployee = new kony.ui.Label({
                "id": "loginTitleEmployee",
                "isVisible": true,
                "left": 0,
                "right": "49.50%",
                "skin": "CopydefLabel0a0bbe7f462be42",
                "text": "Employee",
                "textStyle": {},
                "top": "0dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var loginTitleDirectory = new kony.ui.Label({
                "id": "loginTitleDirectory",
                "isVisible": true,
                "left": "51.50%",
                "right": "0%",
                "skin": "CopydefLabel0j084b89bfd3446",
                "text": "Directory",
                "textStyle": {},
                "top": "0dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            loginTitleContainer.add(loginTitleEmployee, loginTitleDirectory);
            var usernameFieldContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "53dp",
                "id": "usernameFieldContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "right": 0,
                "skin": "slFbox0d637e0536e5447",
                "top": "10.560000000000002%",
                "zIndex": 1,
                "appName": "EmpDirWeb"
            }, {
                "paddingInPixel": false
            }, {});
            usernameFieldContainer.setDefaultUnit(kony.flex.DP);
            var usernameLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "1dp",
                "id": "usernameLine",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "right": 20,
                "skin": "sepLineSkin0a34a34d9be474f",
                "width": "100%",
                "zIndex": 1,
                "appName": "EmpDirWeb"
            }, {
                "paddingInPixel": false
            }, {});
            usernameLine.setDefaultUnit(kony.flex.DP);
            usernameLine.add();
            var usernameTextbox = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "loginFieldSkinFocus0j61c4060ce7d4f",
                "height": "100%",
                "id": "usernameTextbox",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0dp",
                "placeholder": "Username",
                "secureTextEntry": false,
                "skin": "loginFieldSkin0ea3f8c58621e49",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "CopydefTextBoxPlaceholder0ba9a1ade33fa48"
            });
            usernameFieldContainer.add(usernameLine, usernameTextbox);
            var passwordFIeldContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "53dp",
                "id": "passwordFIeldContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "right": 0,
                "skin": "slFbox0d637e0536e5447",
                "top": "3.8999999999999986%",
                "zIndex": 1,
                "appName": "EmpDirWeb"
            }, {
                "paddingInPixel": false
            }, {});
            passwordFIeldContainer.setDefaultUnit(kony.flex.DP);
            var passwordLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "1dp",
                "id": "passwordLine",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "right": 20,
                "skin": "sepLineSkin0a34a34d9be474f",
                "width": "100%",
                "zIndex": 1,
                "appName": "EmpDirWeb"
            }, {
                "paddingInPixel": false
            }, {});
            passwordLine.setDefaultUnit(kony.flex.DP);
            passwordLine.add();
            var passwordTextbox = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "CopydefTextBoxNormal0e0037a5ab7684c",
                "height": "100%",
                "id": "passwordTextbox",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0dp",
                "placeholder": "Password",
                "secureTextEntry": true,
                "skin": "loginFieldSkin0ea3f8c58621e49",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoCorrect": false,
                "placeholderSkin": "CopydefTextBoxPlaceholder0ba9a1ade33fa48"
            });
            passwordFIeldContainer.add(passwordLine, passwordTextbox);
            var loginButton = new kony.ui.Button({
                "focusSkin": "blueButtonSkinFocus0i657d7bec22147",
                "height": "50dp",
                "id": "loginButton",
                "isVisible": true,
                "left": "0dp",
                "onClick": controller.AS_Button_d071b6ade3194551958d887767b0fab9,
                "right": 0,
                "skin": "blueButtonSkin0d4000cd2ae1b47",
                "text": "Login",
                "top": "37dp",
                "width": "100%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            paddingContainer.add(companyLogoImage, loginTitleContainer, usernameFieldContainer, passwordFIeldContainer, loginButton);
            masterContainer.add(paddingContainer);
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1366,
                "480": {
                    "companyLogoImage": {
                        "top": {
                            "type": "string",
                            "value": "37dp"
                        },
                        "segmentProps": []
                    }
                },
                "1366": {
                    "usernameTextbox": {
                        "placeholderSkin": "CopydefTextBoxPlaceholder0eb6d9522d9604e",
                        "segmentProps": []
                    },
                    "passwordTextbox": {
                        "placeholderSkin": "CopydefTextBoxPlaceholder0eb6d9522d9604e",
                        "segmentProps": []
                    }
                }
            }
            this.compInstData = {}
            this.add(masterContainer);
        };
        return [{
            "addWidgets": addWidgetsfrmLogin,
            "enabledForIdleTimeout": false,
            "id": "frmLogin",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [480, 771, 1366],
            "appName": "EmpDirWeb",
            "info": {
                "kuid": "c91bfe328ad94f3983841ab1046725df"
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