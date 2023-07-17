define(function() {
    return function(controller) {
        var Login = new kony.ui.FlexContainer(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "isMaster": true,
            "height": "500dp",
            "id": "Login",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopyFLXFFFFFF1",
            "width": "500dp",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "DarkMode"
        }, controller.args[0], "Login"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "Login"), extendConfig({}, controller.args[2], "Login"));
        Login.setDefaultUnit(kony.flex.DP);
        var lblTopShadow = new kony.ui.Label(extendConfig({
            "height": "1dp",
            "id": "lblTopShadow",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyLBLTOPSHADOW",
            "textStyle": {},
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblTopShadow"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTopShadow"), extendConfig({}, controller.args[2], "lblTopShadow"));
        var lblLeftShadow = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblLeftShadow",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyCopyCopydefLabel4",
            "textStyle": {},
            "top": "0dp",
            "width": "1dp",
            "zIndex": 1
        }, controller.args[0], "lblLeftShadow"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblLeftShadow"), extendConfig({}, controller.args[2], "lblLeftShadow"));
        var lblBottomShadow = new kony.ui.Label(extendConfig({
            "bottom": "0dp",
            "height": "1dp",
            "id": "lblBottomShadow",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopyCopyCopydefLabel2",
            "textStyle": {},
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "lblBottomShadow"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblBottomShadow"), extendConfig({}, controller.args[2], "lblBottomShadow"));
        var lblRightShadow = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblRightShadow",
            "isVisible": true,
            "right": "0dp",
            "skin": "CopyCopyCopydefLabel4",
            "textStyle": {},
            "top": "0dp",
            "width": "1dp",
            "zIndex": 1
        }, controller.args[0], "lblRightShadow"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRightShadow"), extendConfig({}, controller.args[2], "lblRightShadow"));
        var flxLoginWrapper = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "1dp",
            "clipBounds": true,
            "id": "flxLoginWrapper",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "1dp",
            "isModalContainer": false,
            "right": "1dp",
            "skin": "CopyCopyslFbox0b27090e10e6f4c",
            "top": "1dp",
            "zIndex": 1,
            "appName": "DarkMode"
        }, controller.args[0], "flxLoginWrapper"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxLoginWrapper"), extendConfig({}, controller.args[2], "flxLoginWrapper"));
        flxLoginWrapper.setDefaultUnit(kony.flex.DP);
        var flxError = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "7%",
            "id": "flxError",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0f1ec1bba91f14a",
            "top": "0dp",
            "width": "100%",
            "zIndex": 1,
            "appName": "DarkMode"
        }, controller.args[0], "flxError"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxError"), extendConfig({}, controller.args[2], "flxError"));
        flxError.setDefaultUnit(kony.flex.DP);
        var imgClose = new kony.ui.Image2(extendConfig({
            "centerX": "10%",
            "centerY": "50%",
            "height": "90%",
            "id": "imgClose",
            "isVisible": true,
            "left": "0dp",
            "onTouchStart": controller.AS_Image_ca0bc9a2f82e444cae6e331cc324fb92,
            "skin": "slImage",
            "src": "closeicon_4.png",
            "top": "0dp",
            "width": "10%",
            "zIndex": 1
        }, controller.args[0], "imgClose"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgClose"), extendConfig({}, controller.args[2], "imgClose"));
        var lblError = new kony.ui.Label(extendConfig({
            "centerX": "55%",
            "centerY": "50%",
            "height": "100%",
            "id": "lblError",
            "isVisible": true,
            "left": "0dp",
            "skin": "CopydefLabel0h1461925391e41",
            "text": "Incorrect Username/Password",
            "top": "0dp",
            "width": "80%",
            "zIndex": 1
        }, controller.args[0], "lblError"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblError"), extendConfig({}, controller.args[2], "lblError"));
        flxError.add(imgClose, lblError);
        var lblUserName = new kony.ui.Label(extendConfig({
            "id": "lblUserName",
            "isVisible": true,
            "left": "77dp",
            "skin": "CopyLBL0e133e7b084af41",
            "text": "Username",
            "textStyle": {},
            "top": "100dp",
            "width": "100dp",
            "zIndex": 1
        }, controller.args[0], "lblUserName"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblUserName"), extendConfig({}, controller.args[2], "lblUserName"));
        var txtUserName = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopydefTextBoxFocus",
            "height": "40dp",
            "id": "txtUserName",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "77dp",
            "onDone": controller.AS_TextField_ia0c199ca0a941f485f9040ce6d6ebb3,
            "placeholder": "Username",
            "secureTextEntry": false,
            "skin": "CopyTXT",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "7dp",
            "width": "346dp",
            "zIndex": 1
        }, controller.args[0], "txtUserName"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtUserName"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopyTXT1"
        }, controller.args[2], "txtUserName"));
        var lblPassword = new kony.ui.Label(extendConfig({
            "id": "lblPassword",
            "isVisible": true,
            "left": "77dp",
            "skin": "CopyLBL0e133e7b084af41",
            "text": "Password",
            "textStyle": {},
            "top": "15dp",
            "width": "100dp",
            "zIndex": 1
        }, controller.args[0], "lblPassword"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblPassword"), extendConfig({}, controller.args[2], "lblPassword"));
        var txtPassword = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "CopyCopydefTextBoxFocus",
            "height": "40dp",
            "id": "txtPassword",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "77dp",
            "onDone": controller.AS_TextField_a535b606072f4b9ca69f7fa22799a672,
            "placeholder": "Password",
            "secureTextEntry": true,
            "skin": "CopyTXT",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "7dp",
            "width": "346dp",
            "zIndex": 1
        }, controller.args[0], "txtPassword"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "txtPassword"), extendConfig({
            "autoCorrect": false,
            "placeholderSkin": "CopyTXT1"
        }, controller.args[2], "txtPassword"));
        var lblRememberMe = new kony.ui.Label(extendConfig({
            "id": "lblRememberMe",
            "isVisible": true,
            "left": "77dp",
            "skin": "CopyCopyCopydefLabel3",
            "text": "Remember Me",
            "textStyle": {},
            "top": "15dp",
            "width": "99dp",
            "zIndex": 1
        }, controller.args[0], "lblRememberMe"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRememberMe"), extendConfig({}, controller.args[2], "lblRememberMe"));
        var flxCheck = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "20dp",
            "id": "flxCheck",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "182dp",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_e82bc99948d74ceb95a4d3ea7188c1b0,
            "skin": "CopyCopyslFbox0h4d4da20a38d49",
            "top": "-19dp",
            "width": "20dp",
            "zIndex": 1,
            "appName": "DarkMode"
        }, controller.args[0], "flxCheck"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxCheck"), extendConfig({}, controller.args[2], "flxCheck"));
        flxCheck.setDefaultUnit(kony.flex.DP);
        var imgCHeckBox = new kony.ui.Image2(extendConfig({
            "centerX": "48%",
            "centerY": "50%",
            "height": "12dp",
            "id": "imgCHeckBox",
            "isVisible": true,
            "skin": "slImage",
            "src": "tick_1.png",
            "width": "12dp",
            "zIndex": 1
        }, controller.args[0], "imgCHeckBox"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCHeckBox"), extendConfig({}, controller.args[2], "imgCHeckBox"));
        flxCheck.add(imgCHeckBox);
        var btnCantLogin = new kony.ui.Button(extendConfig({
            "bottom": "5dp",
            "focusSkin": "CopyButtonLinkFocusSkin",
            "height": "25dp",
            "id": "btnCantLogin",
            "isVisible": true,
            "right": "77dp",
            "skin": "CopyButtonLinkNormalSkin",
            "text": "Can't Login?",
            "top": "-22dp",
            "width": "85dp",
            "zIndex": 1
        }, controller.args[0], "btnCantLogin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCantLogin"), extendConfig({
            "hoverSkin": "CopyButtonLinkFocusSkin"
        }, controller.args[2], "btnCantLogin"));
        var ButtonLogin = new kony.ui.Button(extendConfig({
            "focusSkin": "CopyButtonSkinActive",
            "height": "40dp",
            "id": "ButtonLogin",
            "isVisible": true,
            "left": "77dp",
            "onClick": controller.AS_Button_ac9321d606c34a20ba8333678799c4e9,
            "skin": "CopyButtonSkinNormal",
            "text": "Login",
            "top": "15dp",
            "width": "346dp",
            "zIndex": 1
        }, controller.args[0], "ButtonLogin"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "ButtonLogin"), extendConfig({
            "hoverSkin": "CopyButtonSkinActive"
        }, controller.args[2], "ButtonLogin"));
        var btnOpenNewAcnt = new kony.ui.Button(extendConfig({
            "focusSkin": "CopyButtonLinkFocusSkin",
            "height": "25dp",
            "id": "btnOpenNewAcnt",
            "isVisible": true,
            "left": "77dp",
            "skin": "CopyButtonLinkNormalSkin",
            "text": "Open New Account",
            "top": "15dp",
            "width": "128dp",
            "zIndex": 1
        }, controller.args[0], "btnOpenNewAcnt"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnOpenNewAcnt"), extendConfig({
            "hoverSkin": "CopyButtonLinkFocusSkin"
        }, controller.args[2], "btnOpenNewAcnt"));
        var btnEnrol = new kony.ui.Button(extendConfig({
            "bottom": "5dp",
            "focusSkin": "CopyButtonLinkFocusSkin",
            "height": "25dp",
            "id": "btnEnrol",
            "isVisible": true,
            "right": "77dp",
            "skin": "CopyButtonLinkNormalSkin",
            "text": "Enroll",
            "top": "-25dp",
            "width": "40dp",
            "zIndex": 1
        }, controller.args[0], "btnEnrol"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnEnrol"), extendConfig({
            "hoverSkin": "CopyButtonLinkFocusSkin"
        }, controller.args[2], "btnEnrol"));
        flxLoginWrapper.add(flxError, lblUserName, txtUserName, lblPassword, txtPassword, lblRememberMe, flxCheck, btnCantLogin, ButtonLogin, btnOpenNewAcnt, btnEnrol);
        Login.add(lblTopShadow, lblLeftShadow, lblBottomShadow, lblRightShadow, flxLoginWrapper);
        Login.compInstData = {}
        return Login;
    }
})