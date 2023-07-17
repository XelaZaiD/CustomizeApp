define('applicationController',{
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.konymp.ListWithImage", "ListWithImage", "ListWithImageController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "ListWithImage",
            "name": "com.konymp.ListWithImage"
        });
        kony.mvc.registry.add("com.konymp.ListWithImageCopy", "ListWithImageCopy", "ListWithImageCopyController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "ListWithImageCopy",
            "name": "com.konymp.ListWithImageCopy"
        });
        kony.mvc.registry.add("com.konymp.Login", "Login", "LoginController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "Login",
            "name": "com.konymp.Login"
        });
        kony.mvc.registry.add("comm.konymp.ToastAlert", "ToastAlert", "ToastAlertController");
        kony.application.registerMaster({
            "namespace": "comm.konymp",
            "classname": "ToastAlert",
            "name": "comm.konymp.ToastAlert"
        });
        kony.mvc.registry.add("comm.konymp.ToastError", "ToastError", "ToastErrorController");
        kony.application.registerMaster({
            "namespace": "comm.konymp",
            "classname": "ToastError",
            "name": "comm.konymp.ToastError"
        });
        kony.mvc.registry.add("comm.konymp.ToastSuccess", "ToastSuccess", "ToastSuccessController");
        kony.application.registerMaster({
            "namespace": "comm.konymp",
            "classname": "ToastSuccess",
            "name": "comm.konymp.ToastSuccess"
        });
        kony.mvc.registry.add("CopyflxListWithImg", "CopyflxListWithImg", "CopyflxListWithImgController");
        kony.mvc.registry.add("flxSampleRowTemplate", "flxSampleRowTemplate", "flxSampleRowTemplateController");
        kony.mvc.registry.add("flxSectionHeaderTemplate", "flxSectionHeaderTemplate", "flxSectionHeaderTemplateController");
        kony.mvc.registry.add("flxListWithImg", "flxListWithImg", "flxListWithImgController");
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
define("com/konymp/ListWithImage/userListWithImageController", [],function() {
    return {};
});
define("com/konymp/ListWithImage/ListWithImageControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/konymp/ListWithImage/ListWithImageController", ["com/konymp/ListWithImage/userListWithImageController", "com/konymp/ListWithImage/ListWithImageControllerActions"], function() {
    var controller = require("com/konymp/ListWithImage/userListWithImageController");
    var actions = require("com/konymp/ListWithImage/ListWithImageControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/konymp/ListWithImage/ListWithImage',[],function() {
    return function(controller) {
        var ListWithImage = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "isMaster": true,
            "height": "40%",
            "horizontalScrollIndicator": true,
            "id": "ListWithImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "CopyflxWhiteBg0e2c7657203174a",
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%"
        }, controller.args[0], "ListWithImage"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ListWithImage"), extendConfig({}, controller.args[2], "ListWithImage"));
        ListWithImage.setDefaultUnit(kony.flex.DP);
        var Segment0ad70db6f382f46 = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "Image0a40818b994e949": "list1.png",
                "lblDepartmnt": "Apps UI/UX",
                "lblDesignation": "UX Designer",
                "lblEmail": "john.smith@kony.com",
                "lblName": "John Smith",
                "lblPhone": "+1 9988776655"
            }, {
                "Image0a40818b994e949": "list6.png",
                "lblDepartmnt": "Product Management",
                "lblDesignation": "Software Development Engineer",
                "lblEmail": "clay.johns@kony.com",
                "lblName": "Clay Johns",
                "lblPhone": "+1 8877665544"
            }, {
                "Image0a40818b994e949": "list3.png",
                "lblDepartmnt": "Human Resorces",
                "lblDesignation": "Technical Lead",
                "lblEmail": "abbey.abelson@kony.com",
                "lblName": "Abbey Abelson",
                "lblPhone": "+1 9998887776"
            }, {
                "Image0a40818b994e949": "list4.png",
                "lblDepartmnt": "Platform UI",
                "lblDesignation": "Senior Manager",
                "lblEmail": "john.deo@kony.com",
                "lblName": "John Doe",
                "lblPhone": "+1 9999988888"
            }, {
                "Image0a40818b994e949": "list5.png",
                "lblDepartmnt": "Client Support",
                "lblDesignation": "Software Development Engineer",
                "lblEmail": "william.harris@kony.com",
                "lblName": "William Harris",
                "lblPhone": "+1 9876543210"
            }],
            "groupCells": false,
            "id": "Segment0ad70db6f382f46",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxListWithImg",
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "ededed00",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "Image0a40818b994e949": "Image0a40818b994e949",
                "flxListWithImg": "flxListWithImg",
                "lblDepartmnt": "lblDepartmnt",
                "lblDesignation": "lblDesignation",
                "lblEmail": "lblEmail",
                "lblName": "lblName",
                "lblPhone": "lblPhone"
            },
            "width": "100%",
            "zIndex": 1,
            "appName": "DarkMode"
        }, controller.args[0], "Segment0ad70db6f382f46"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Segment0ad70db6f382f46"), extendConfig({}, controller.args[2], "Segment0ad70db6f382f46"));
        ListWithImage.add(Segment0ad70db6f382f46);
        return ListWithImage;
    }
});
define("com/konymp/ListWithImageCopy/userListWithImageCopyController", [],function() {
    return {};
});
define("com/konymp/ListWithImageCopy/ListWithImageCopyControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("com/konymp/ListWithImageCopy/ListWithImageCopyController", ["com/konymp/ListWithImageCopy/userListWithImageCopyController", "com/konymp/ListWithImageCopy/ListWithImageCopyControllerActions"], function() {
    var controller = require("com/konymp/ListWithImageCopy/userListWithImageCopyController");
    var actions = require("com/konymp/ListWithImageCopy/ListWithImageCopyControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/konymp/ListWithImageCopy/ListWithImageCopy',[],function() {
    return function(controller) {
        var ListWithImageCopy = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "isMaster": true,
            "height": "40%",
            "horizontalScrollIndicator": true,
            "id": "ListWithImageCopy",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "CopyflxWhiteBg0e2c7657203174a",
            "top": "0dp",
            "verticalScrollIndicator": true,
            "width": "100%"
        }, controller.args[0], "ListWithImageCopy"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ListWithImageCopy"), extendConfig({}, controller.args[2], "ListWithImageCopy"));
        ListWithImageCopy.setDefaultUnit(kony.flex.DP);
        var Segment0ad70db6f382f46 = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "Image0a40818b994e949": "list1_1.png",
                "lblDepartmnt": "Apps UI/UX",
                "lblDesignation": "UX Designer",
                "lblEmail": "john.smith@kony.com",
                "lblName": "John Smith",
                "lblPhone": "+1 9988776655"
            }, {
                "Image0a40818b994e949": "list6_1.png",
                "lblDepartmnt": "Product Management",
                "lblDesignation": "Software Development Engineer",
                "lblEmail": "clay.johns@kony.com",
                "lblName": "Clay Johns",
                "lblPhone": "+1 8877665544"
            }, {
                "Image0a40818b994e949": "list3_1.png",
                "lblDepartmnt": "Human Resorces",
                "lblDesignation": "Technical Lead",
                "lblEmail": "abbey.abelson@kony.com",
                "lblName": "Abbey Abelson",
                "lblPhone": "+1 9998887776"
            }, {
                "Image0a40818b994e949": "list4_1.png",
                "lblDepartmnt": "Platform UI",
                "lblDesignation": "Senior Manager",
                "lblEmail": "john.deo@kony.com",
                "lblName": "John Doe",
                "lblPhone": "+1 9999988888"
            }, {
                "Image0a40818b994e949": "list5_1.png",
                "lblDepartmnt": "Client Support",
                "lblDesignation": "Software Development Engineer",
                "lblEmail": "william.harris@kony.com",
                "lblName": "William Harris",
                "lblPhone": "+1 9876543210"
            }],
            "groupCells": false,
            "id": "Segment0ad70db6f382f46",
            "isVisible": true,
            "left": "0dp",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "Copyseg0fdb1b2af9c6945",
            "rowTemplate": "CopyflxListWithImg",
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "ededed00",
            "separatorRequired": true,
            "separatorThickness": 1,
            "showScrollbars": false,
            "top": "0dp",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "CopyCopyflxListWithImg": "CopyCopyflxListWithImg",
                "CopyflxListWithImg": "CopyflxListWithImg",
                "Image0a40818b994e949": "Image0a40818b994e949",
                "lblDepartmnt": "lblDepartmnt",
                "lblDesignation": "lblDesignation",
                "lblEmail": "lblEmail",
                "lblName": "lblName",
                "lblPhone": "lblPhone"
            },
            "width": "100%",
            "zIndex": 1,
            "appName": "DarkMode"
        }, controller.args[0], "Segment0ad70db6f382f46"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Segment0ad70db6f382f46"), extendConfig({}, controller.args[2], "Segment0ad70db6f382f46"));
        ListWithImageCopy.add(Segment0ad70db6f382f46);
        ListWithImageCopy.compInstData = {}
        return ListWithImageCopy;
    }
});
define("com/konymp/Login/userLoginController", [],function() {
    constants.DEFAULT_MINIMUM_CHAR_LENGTH = 8;
    constants.USERNAME_VALIDATION_MESSAGE = "Username too small!";
    constants.PASSWORD_VALIDATION_MESSAGE = "Password too small!";
    constants.USERNAME_PASSWORD_VALIDATION_MESSAGE = "Username and Password are too small";
    constants.EMPTY_USERNAME_VALIDATION_MESSAGE = "Username cannot be empty";
    constants.EMPTY_PASSWORD_VALIDATION_MESSAGE = "Password cannot be empty";
    constants.EMPTY_USERNAME_PASSWORD_VALIDATION_MESSAGE = "Username and Password cannot be empty";
    return {
        /**
         * @constructor constructor
         * @param basicConfig
         * @param layoutConfig
         * @param pspConfig
         */
        constructor: function(basicConfig, layoutConfig, pspConfig) {
            this._usernameMinimumChar = constants.DEFAULT_MINIMUM_CHAR_LENGTH;
            this._passwordMinimumChar = constants.DEFAULT_MINIMUM_CHAR_LENGTH;
            this._usernameValidationMsg = constants.USERNAME_VALIDATION_MESSAGE;
            this._passwordValidationMsg = constants.PASSWORD_VALIDATION_MESSAGE;
        },
        /**
         * @function validateUsername
         * @description Validates username entered by the user
         * @private
         * @returns {boolean} true/false
         */
        validateUsername: function() {
            try {
                if (parseInt(this._usernameMinimumChar) > this.getUsername().length) {
                    this.view.txtUserName.text = this.getUsername();
                    this.view.lblError.text = constants.USERNAME_VALIDATION_MESSAGE;
                    this.view.flxError.isVisible = true;
                    this.view.flxError.forceLayout();
                    return false;
                }
                return true;
            } catch (exception) {
                kony.print(JSON.stringify(exception));
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        },
        /**
         * @function validatePassword
         * @description Validates password entered by the user
         * @private
         * @returns {boolean} true/false
         */
        validatePassword: function() {
            try {
                if (parseInt(this._passwordMinimumChar) > this.getPassword().length) {
                    this.view.txtPassword.text = this.getPassword();
                    this.view.lblError.text = constants.PASSWORD_VALIDATION_MESSAGE;
                    this.view.flxError.isVisible = true;
                    this.view.flxError.forceLayout();
                    return false;
                }
                return true;
            } catch (exception) {
                kony.print(JSON.stringify(exception));
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        },
        /**  
         * @function validateUsernameAndPassword
         * @description validates empty username and password
         * @private
         * @return {boolean} true/false
         */
        validateUsernameAndPassword: function() {
            var isUsernameEmpty = !this.getUsername().length;
            var isPasswordEmpty = !this.getPassword().length;
            var errorText = null;
            if (isUsernameEmpty && isPasswordEmpty) {
                errorText = constants.EMPTY_USERNAME_PASSWORD_VALIDATION_MESSAGE;
            } else if (isUsernameEmpty) {
                errorText = constants.EMPTY_USERNAME_VALIDATION_MESSAGE;
            } else if (isPasswordEmpty) {
                errorText = constants.EMPTY_PASSWORD_VALIDATION_MESSAGE;
            }
            if (!errorText) {
                var isUsernameSmall = parseInt(this._usernameMinimumChar) > this.getUsername().length;
                var isPasswordSmall = parseInt(this._passwordMinimumChar) > this.getPassword().length;
                if (isUsernameSmall && isPasswordSmall) {
                    errorText = constants.USERNAME_PASSWORD_VALIDATION_MESSAGE;
                } else if (isUsernameSmall) {
                    errorText = constants.USERNAME_VALIDATION_MESSAGE;
                } else if (isPasswordSmall) {
                    errorText = constants.PASSWORD_VALIDATION_MESSAGE;
                }
            }
            if (errorText) {
                this.view.lblError.text = errorText;
                this.view.flxError.isVisible = true;
                this.view.flxError.forceLayout();
            } else {
                this.view.flxError.isVisible = false;
            }
        },
        /**
         * @function getUsername
         * @description Returns username entered by the user
         * @public
         * @return {string} username
         */
        getUsername: function() {
            var uname = (this.view.txtUserName.text).trim();
            return uname;
        },
        /**
         * @function getPassword
         * @description Returns password entered by the user
         * @public
         * @return {string} password
         */
        getPassword: function() {
            var pwd = (this.view.txtPassword.text).trim();
            return pwd;
        }
    };
});
define("com/konymp/Login/LoginControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for ButtonLogin **/
    AS_Button_ac9321d606c34a20ba8333678799c4e9: function AS_Button_ac9321d606c34a20ba8333678799c4e9(eventobject) {
        var self = this;
        return self.validateUsernameAndPassword.call(this);
    },
    /** onClick defined for flxCheck **/
    AS_FlexContainer_e82bc99948d74ceb95a4d3ea7188c1b0: function AS_FlexContainer_e82bc99948d74ceb95a4d3ea7188c1b0(eventobject) {
        var self = this;
        this.view.imgCHeckBox.isVisible = !this.view.imgCHeckBox.isVisible;
    },
    /** onTouchStart defined for userwidgetmodel **/
    AS_Image_ca0bc9a2f82e444cae6e331cc324fb92: function AS_Image_ca0bc9a2f82e444cae6e331cc324fb92(eventobject, x, y) {
        var self = this;
        self.view.flxError.isVisible = false;
    },
    /** onDone defined for txtPassword **/
    AS_TextField_a535b606072f4b9ca69f7fa22799a672: function AS_TextField_a535b606072f4b9ca69f7fa22799a672(eventobject, changedtext) {
        var self = this;
        return self.validatePassword.call(this);
    },
    /** onDone defined for txtUserName **/
    AS_TextField_ia0c199ca0a941f485f9040ce6d6ebb3: function AS_TextField_ia0c199ca0a941f485f9040ce6d6ebb3(eventobject, changedtext) {
        var self = this;
        return self.validateUsername.call(this);
    }
});
define("com/konymp/Login/LoginController", ["com/konymp/Login/userLoginController", "com/konymp/Login/LoginControllerActions"], function() {
    var controller = require("com/konymp/Login/userLoginController");
    var actions = require("com/konymp/Login/LoginControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('com/konymp/Login/Login',[],function() {
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
});
define("comm/konymp/ToastAlert/userToastAlertController", [],function() {
    return {};
});
define("comm/konymp/ToastAlert/ToastAlertControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchStart defined for ImgClose **/
    AS_Image_a5a32d27d8b24d1aacad0422513b0ff5: function AS_Image_a5a32d27d8b24d1aacad0422513b0ff5(eventobject, x, y) {
        var self = this;
        this.view.isVisible = false;
        this.view.forceLayout();
    }
});
define("comm/konymp/ToastAlert/ToastAlertController", ["comm/konymp/ToastAlert/userToastAlertController", "comm/konymp/ToastAlert/ToastAlertControllerActions"], function() {
    var controller = require("comm/konymp/ToastAlert/userToastAlertController");
    var actions = require("comm/konymp/ToastAlert/ToastAlertControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('comm/konymp/ToastAlert/ToastAlert',[],function() {
    return function(controller) {
        var ToastAlert = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "20%",
            "clipBounds": true,
            "isMaster": true,
            "height": "40dp",
            "id": "ToastAlert",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyCopyslFbox",
            "top": "0dp",
            "width": "100%",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "DarkMode"
        }, controller.args[0], "ToastAlert"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ToastAlert"), extendConfig({}, controller.args[2], "ToastAlert"));
        ToastAlert.setDefaultUnit(kony.flex.DP);
        var imageIcon = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "18dp",
            "id": "imageIcon",
            "isVisible": true,
            "left": "26dp",
            "skin": "CopyslImage0f955769f683241",
            "src": "exclamation_sign_1.png",
            "top": "0%",
            "width": "18dp",
            "zIndex": 1
        }, controller.args[0], "imageIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imageIcon"), extendConfig({}, controller.args[2], "imageIcon"));
        var Message = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "Message",
            "isVisible": true,
            "left": "54dp",
            "skin": "sknlblMessage",
            "text": "Alert message toast indicator.",
            "textStyle": {},
            "width": "381dp",
            "zIndex": 1
        }, controller.args[0], "Message"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Message"), extendConfig({}, controller.args[2], "Message"));
        var ImgClose = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "12dp",
            "id": "ImgClose",
            "isVisible": true,
            "onTouchStart": controller.AS_Image_a5a32d27d8b24d1aacad0422513b0ff5,
            "right": "1.40%",
            "skin": "CopyslImage0ccc1f1e6f79042",
            "src": "cross_1_1_1.png",
            "width": "12dp",
            "zIndex": 1
        }, controller.args[0], "ImgClose"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "ImgClose"), extendConfig({}, controller.args[2], "ImgClose"));
        ToastAlert.add(imageIcon, Message, ImgClose);
        ToastAlert.compInstData = {}
        return ToastAlert;
    }
});
define("comm/konymp/ToastError/userToastErrorController", [],function() {
    return {};
});
define("comm/konymp/ToastError/ToastErrorControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchStart defined for ImgClose **/
    AS_Image_j8824cd3a2de4be380da8099de30e1bf: function AS_Image_j8824cd3a2de4be380da8099de30e1bf(eventobject, x, y) {
        var self = this;
        this.view.isVisible = false;
        this.view.forceLayout();
    }
});
define("comm/konymp/ToastError/ToastErrorController", ["comm/konymp/ToastError/userToastErrorController", "comm/konymp/ToastError/ToastErrorControllerActions"], function() {
    var controller = require("comm/konymp/ToastError/userToastErrorController");
    var actions = require("comm/konymp/ToastError/ToastErrorControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('comm/konymp/ToastError/ToastError',[],function() {
    return function(controller) {
        var ToastError = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "20%",
            "clipBounds": true,
            "isMaster": true,
            "height": "39dp",
            "id": "ToastError",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyFlxToastErroFFD",
            "top": "0dp",
            "width": "100%",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "DarkMode"
        }, controller.args[0], "ToastError"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ToastError"), extendConfig({}, controller.args[2], "ToastError"));
        ToastError.setDefaultUnit(kony.flex.DP);
        var imageIcon = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "18dp",
            "id": "imageIcon",
            "isVisible": true,
            "left": "26dp",
            "skin": "slImage",
            "src": "cancel_1.png",
            "top": "0%",
            "width": "18dp",
            "zIndex": 1
        }, controller.args[0], "imageIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imageIcon"), extendConfig({}, controller.args[2], "imageIcon"));
        var Message = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "Message",
            "isVisible": true,
            "left": "54dp",
            "skin": "sknlblMessage",
            "text": "Error message toast indicator.",
            "textStyle": {},
            "width": "381dp",
            "zIndex": 1
        }, controller.args[0], "Message"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Message"), extendConfig({}, controller.args[2], "Message"));
        var ImgClose = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "12dp",
            "id": "ImgClose",
            "isVisible": true,
            "onTouchStart": controller.AS_Image_j8824cd3a2de4be380da8099de30e1bf,
            "right": "1.40%",
            "skin": "slImage",
            "src": "cross_1_2_1.png",
            "width": "12dp",
            "zIndex": 1
        }, controller.args[0], "ImgClose"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "ImgClose"), extendConfig({}, controller.args[2], "ImgClose"));
        ToastError.add(imageIcon, Message, ImgClose);
        ToastError.compInstData = {}
        return ToastError;
    }
});
define("comm/konymp/ToastSuccess/userToastSuccessController", [],function() {
    return {};
});
define("comm/konymp/ToastSuccess/ToastSuccessControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchStart defined for ImgClose **/
    AS_Image_d59be4d0988a44288b3edb988bf23a5f: function AS_Image_d59be4d0988a44288b3edb988bf23a5f(eventobject, x, y) {
        var self = this;
        this.view.isVisible = false;
        this.view.forceLayout();
    }
});
define("comm/konymp/ToastSuccess/ToastSuccessController", ["comm/konymp/ToastSuccess/userToastSuccessController", "comm/konymp/ToastSuccess/ToastSuccessControllerActions"], function() {
    var controller = require("comm/konymp/ToastSuccess/userToastSuccessController");
    var actions = require("comm/konymp/ToastSuccess/ToastSuccessControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});

define('comm/konymp/ToastSuccess/ToastSuccess',[],function() {
    return function(controller) {
        var ToastSuccess = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "21%",
            "clipBounds": true,
            "isMaster": true,
            "height": "39dp",
            "id": "ToastSuccess",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "FlxToastSuccessDCFFE2",
            "top": "0dp",
            "width": "100%",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "DarkMode"
        }, controller.args[0], "ToastSuccess"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "ToastSuccess"), extendConfig({}, controller.args[2], "ToastSuccess"));
        ToastSuccess.setDefaultUnit(kony.flex.DP);
        var imageIcon = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "18dp",
            "id": "imageIcon",
            "isVisible": true,
            "left": "26dp",
            "skin": "slImage",
            "src": "checked__1_.png",
            "top": "0%",
            "width": "18dp",
            "zIndex": 1
        }, controller.args[0], "imageIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imageIcon"), extendConfig({}, controller.args[2], "imageIcon"));
        var Message = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "height": "30dp",
            "id": "Message",
            "isVisible": true,
            "left": "54dp",
            "skin": "sknlblMessage",
            "text": "Success message toast indicator.",
            "textStyle": {},
            "top": 0,
            "width": "381dp",
            "zIndex": 1
        }, controller.args[0], "Message"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "Message"), extendConfig({}, controller.args[2], "Message"));
        var ImgClose = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "12dp",
            "id": "ImgClose",
            "isVisible": true,
            "onTouchStart": controller.AS_Image_d59be4d0988a44288b3edb988bf23a5f,
            "right": "1.40%",
            "skin": "slImage",
            "src": "cross_1_3.png",
            "width": "12dp",
            "zIndex": 1
        }, controller.args[0], "ImgClose"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "ImgClose"), extendConfig({}, controller.args[2], "ImgClose"));
        ToastSuccess.add(imageIcon, Message, ImgClose);
        ToastSuccess.compInstData = {}
        return ToastSuccess;
    }
});
define("CopyflxListWithImg", [],function() {
    return function(controller) {
        var CopyflxListWithImg = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "67dp",
            "id": "CopyflxListWithImg",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%",
            "breakpoints": [640, 1024, 1366],
            "appName": "DarkMode"
        }, {
            "paddingInPixel": false
        }, {
            "hoverSkin": "CopytmpHoverskin"
        });
        CopyflxListWithImg.setDefaultUnit(kony.flex.DP);
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
            "skin": "CopyCopydefLabel1",
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
            "skin": "CopylblDeshWithImage",
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
            "skin": "CopylblLstImg",
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
            "skin": "CopylblLstImg",
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
            "skin": "CopylblLstImg",
            "text": "Label",
            "top": "26dp",
            "width": "18%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        CopyflxListWithImg.add(Image0a40818b994e949, lblName, lblDesignation, lblDepartmnt, lblEmail, lblPhone);
        return CopyflxListWithImg;
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
            "appName": "DarkMode"
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
            "appName": "DarkMode"
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
define("flxListWithImg", [],function() {
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
});
define("userCopyflxListWithImgController", {
    //Type your controller code here 
});
define("CopyflxListWithImgControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("CopyflxListWithImgController", ["userCopyflxListWithImgController", "CopyflxListWithImgControllerActions"], function() {
    var controller = require("userCopyflxListWithImgController");
    var controllerActions = ["CopyflxListWithImgControllerActions"];
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

define("userflxListWithImgController", {
    //Type your controller code here 
});
define("flxListWithImgControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxListWithImgController", ["userflxListWithImgController", "flxListWithImgControllerActions"], function() {
    var controller = require("userflxListWithImgController");
    var controllerActions = ["flxListWithImgControllerActions"];
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

require(['applicationController','com/konymp/ListWithImage/ListWithImageController','com/konymp/ListWithImage/ListWithImage','com/konymp/ListWithImageCopy/ListWithImageCopyController','com/konymp/ListWithImageCopy/ListWithImageCopy','com/konymp/Login/LoginController','com/konymp/Login/Login','comm/konymp/ToastAlert/ToastAlertController','comm/konymp/ToastAlert/ToastAlert','comm/konymp/ToastError/ToastErrorController','comm/konymp/ToastError/ToastError','comm/konymp/ToastSuccess/ToastSuccessController','comm/konymp/ToastSuccess/ToastSuccess','CopyflxListWithImg','flxSampleRowTemplate','flxSectionHeaderTemplate','flxListWithImg','CopyflxListWithImgController','flxSampleRowTemplateController','flxSectionHeaderTemplateController','flxListWithImgController','navigation/NavigationModel','navigation/NavigationController'], function(){});
define("sparequirefileslist", function(){});

