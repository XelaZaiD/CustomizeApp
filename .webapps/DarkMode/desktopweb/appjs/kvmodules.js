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
        kony.mvc.registry.add("com.konymp.Menu", "Menu", "MenuController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "Menu",
            "name": "com.konymp.Menu"
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
        kony.mvc.registry.add("Copyflxmenuheaderwrapper", "Copyflxmenuheaderwrapper", "CopyflxmenuheaderwrapperController");
        kony.mvc.registry.add("CopyflxMenuRowWrapper", "CopyflxMenuRowWrapper", "CopyflxMenuRowWrapperController");
        kony.mvc.registry.add("CopyflxListWithImg", "CopyflxListWithImg", "CopyflxListWithImgController");
        kony.mvc.registry.add("flxSampleRowTemplate", "flxSampleRowTemplate", "flxSampleRowTemplateController");
        kony.mvc.registry.add("flxSectionHeaderTemplate", "flxSectionHeaderTemplate", "flxSectionHeaderTemplateController");
        kony.mvc.registry.add("flxListWithImg", "flxListWithImg", "flxListWithImgController");
        kony.mvc.registry.add("Form1", "Form1", "Form1Controller");
        kony.mvc.registry.add("Form2", "Form2", "Form2Controller");
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
define("com/konymp/Menu/userMenuController", [],function() {
    return {
        /**
         * @function
         *
         */
        getTableData: function() {
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
            var tempData = JSON.parse(JSON.stringify(this.__tableData__));
            for (var i = 0; i < this.view.segMenuItems.data.length; i++) {
                tempData[i][1] = [];
            }
            this.view.segMenuItems.removeAll();
            this.view.segMenuItems.setData(tempData);
            this.view.forceLayout();
        },
        clickedOnSectionHeader: function(sectionIndex) {
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
        },
        expandCollapse: function(obj) {
            if (!obj) return;
            //alert(`widgets: ${JSON.stringify(obj)}`);
            let img = obj.img,
                row = obj.row;
            let rowVisible = this.view[row].isVisible,
                imgSRC = this.view[img].src;
            //alert(`img: ${imgSRC} row: ${rowVisible}`);
            //Hacemos visible o invisible el FlexRow
            if (!rowVisible) {
                this.view[row].isVisible = true;
            } else {
                this.view[row].isVisible = false;
            }
            //Cambiamos la imagen de Expandir o Colapsar
            if (imgSRC === 'rectangle_7_copy_1_4.png') {
                this.view[img].src = 'arrow_down.png';
            } else {
                this.view[img].src = 'rectangle_7_copy_1_4.png';
            }
            // Convierte el objeto en un objeto plano
            /*let widgets = {};
            for (let prop in obj) {
              if (obj.hasOwnProperty(prop)) {
                widgets[prop] = obj[prop];
              }
            }*/
        },
        addOrRemoveFavorite: function(obj) {
            //alert(`obj: ${JSON.stringify(obj)}`);
            // addOrRemove: true para add / addOrRemove: false para remove
            let addOrRemove = obj.status,
                widgetOption = obj.widget;
            let flxOptionVisible = this.view[widgetOption].isVisible;
            //alert(`flxOptionVisible: ${flxOptionVisible} widgetOption: ${widgetOption} addOrRemove: ${addOrRemove}`);
            if (addOrRemove) {
                //add
                if (widgetOption === 'flxOption1') {
                    this.view[widgetOption].isVisible = false; //Quitamos del Menu
                    this.view.flxOptionFavoritie1.isVisible = true; //Agregamos en Favoritos
                } else if (widgetOption === 'flxOption2') {
                    this.view[widgetOption].isVisible = false; //Quitamos del Menu
                    this.view.flxOptionFavoritie2.isVisible = true; //Agregamos en Favoritos
                } else if (widgetOption === 'flxOption3') {
                    this.view[widgetOption].isVisible = false; //Quitamos del Menu
                    this.view.flxOptionFavoritie3.isVisible = true; //Agregamos en Favoritos
                }
                this.view.flxFavorities.setVisibility(true);
            }
            if (!addOrRemove) {
                //remove
                if (widgetOption === 'flxOptionFavoritie1') {
                    this.view[widgetOption].isVisible = false; //Quitamos de Favoritos
                    this.view.flxOption1.isVisible = true; //Agregamos en Menu
                } else if (widgetOption === 'flxOptionFavoritie2') {
                    this.view[widgetOption].isVisible = false; //Quitamos de Favoritos
                    this.view.flxOption2.isVisible = true; //Agregamos en Menu
                } else if (widgetOption === 'flxOptionFavoritie3') {
                    this.view[widgetOption].isVisible = false; //Quitamos de Favoritos
                    this.view.flxOption3.isVisible = true; //Agregamos en Menu
                }
                if (!this.view.flxOptionFavoritie1.isVisible && !this.view.flxOptionFavoritie2.isVisible && !this.view.flxOptionFavoritie3.isVisible) {
                    this.view.flxFavorities.setVisibility(false);
                }
            }
        },
    };
});
define("com/konymp/Menu/MenuControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchStart defined for imgClose **/
    AS_Image_i65830292295446b9ffa710bfc0907fa: function AS_Image_i65830292295446b9ffa710bfc0907fa(eventobject, x, y) {
        var self = this;
        this.view.isVisible = false;
    },
    /** onRowClick defined for segMenuItems **/
    AS_Segment_he708adc37c14b4fa8d73fca211e604c: function AS_Segment_he708adc37c14b4fa8d73fca211e604c(eventobject, sectionNumber, rowNumber) {
        var self = this;
        //alert(JSON.stringify(this.__tableData__));
    },
    /** onTouchStart defined for lblRowFavoritieOption11 **/
    AS_Label_f08ff79e1d8d4d26a95546238ec9db28: function AS_Label_f08ff79e1d8d4d26a95546238ec9db28(eventobject, x, y) {
        var self = this;
        alert(`Action`);
    },
    /** onTouchStart defined for lblRowFavoritieOption12 **/
    AS_Label_a5264a14b30449f5b87bf00da77d30d1: function AS_Label_a5264a14b30449f5b87bf00da77d30d1(eventobject, x, y) {
        var self = this;
        alert(`Action`);
    },
    /** onTouchStart defined for lblRowFavoritieOption21 **/
    AS_Label_ee4f4a7bf8644535a6f6047fda60de77: function AS_Label_ee4f4a7bf8644535a6f6047fda60de77(eventobject, x, y) {
        var self = this;
        alert(`Action`);
    },
    /** onTouchStart defined for lblRowFavoritieOption22 **/
    AS_Label_c20403a7f10c48bea849a6077656cf6a: function AS_Label_c20403a7f10c48bea849a6077656cf6a(eventobject, x, y) {
        var self = this;
        alert(`Action`);
    },
    /** onTouchStart defined for lblRowFavoritieOption31 **/
    AS_Label_c517787ff9cf47b48d9bfc84f0ce2cde: function AS_Label_c517787ff9cf47b48d9bfc84f0ce2cde(eventobject, x, y) {
        var self = this;
        alert(`Action`);
    },
    /** onTouchStart defined for lblRowFavoritieOption32 **/
    AS_Label_d9ef454ca98c432cb885d00f77e0d95a: function AS_Label_d9ef454ca98c432cb885d00f77e0d95a(eventobject, x, y) {
        var self = this;
        alert(`Action`);
    },
    /** onTouchStart defined for btnFavoriteOption3 **/
    AS_Button_g4a2fb64776f484bb993d79066585623: function AS_Button_g4a2fb64776f484bb993d79066585623(eventobject, x, y) {
        var self = this;
        this.expandCollapse(false);
        let obj = {
            status: true,
            widget: 'flxOption3'
        };
        this.addOrRemoveFavorite(obj);
    },
    /** onTouchStart defined for btnFavoriteOption2 **/
    AS_Button_id9d9e5b59404d0da836908c133ff592: function AS_Button_id9d9e5b59404d0da836908c133ff592(eventobject, x, y) {
        var self = this;
        this.expandCollapse(false);
        let obj = {
            status: true,
            widget: 'flxOption2'
        };
        this.addOrRemoveFavorite(obj);
    },
    /** onTouchStart defined for btnFavoriteOption1 **/
    AS_Button_e15ff166cc3c48ab93dfa9821af9895b: function AS_Button_e15ff166cc3c48ab93dfa9821af9895b(eventobject, x, y) {
        var self = this;
        this.expandCollapse(false);
        let obj = {
            status: true,
            widget: 'flxOption1'
        };
        this.addOrRemoveFavorite(obj);
    },
    /** onTouchStart defined for btnNoFavoriteOption3 **/
    AS_Button_j6627065881748139d3ca5954f4ac9e4: function AS_Button_j6627065881748139d3ca5954f4ac9e4(eventobject, x, y) {
        var self = this;
        this.expandCollapse(false);
        let obj = {
            status: false,
            widget: 'flxOptionFavoritie3'
        };
        this.addOrRemoveFavorite(obj);
    },
    /** onTouchStart defined for btnNoFavoriteOption2 **/
    AS_Button_jf8d101dd9c44c8084fde53495645782: function AS_Button_jf8d101dd9c44c8084fde53495645782(eventobject, x, y) {
        var self = this;
        this.expandCollapse(false);
        let obj = {
            status: false,
            widget: 'flxOptionFavoritie2'
        };
        this.addOrRemoveFavorite(obj);
    },
    /** onTouchStart defined for btnNoFavoriteOption1 **/
    AS_Button_c31fe7bff09a471b89278d069e687abc: function AS_Button_c31fe7bff09a471b89278d069e687abc(eventobject, x, y) {
        var self = this;
        this.expandCollapse(false);
        let obj = {
            status: false,
            widget: 'flxOptionFavoritie1'
        };
        this.addOrRemoveFavorite(obj);
    },
    /** onClick defined for flxOption1 **/
    AS_FlexContainer_jc36b2459a024161a3d1e2b36c7a3f4c: function AS_FlexContainer_jc36b2459a024161a3d1e2b36c7a3f4c(eventobject) {
        var self = this;
        let widgets = {
            img: 'imgArrow1',
            row: 'flxRowOption1'
        };
        this.expandCollapse(widgets);
    },
    /** onClick defined for flxOption2 **/
    AS_FlexContainer_b852b3398b4449dbb622d717d73bd270: function AS_FlexContainer_b852b3398b4449dbb622d717d73bd270(eventobject) {
        var self = this;
        let widgets = {
            img: 'imgArrow2',
            row: 'flxRowOption2'
        };
        this.expandCollapse(widgets);
    },
    /** onClick defined for flxOption3 **/
    AS_FlexContainer_f911ee5a1881452ca6f0b5c9be2fbe9c: function AS_FlexContainer_f911ee5a1881452ca6f0b5c9be2fbe9c(eventobject) {
        var self = this;
        let widgets = {
            img: 'imgArrow3',
            row: 'flxRowOption3'
        };
        this.expandCollapse(widgets);
    },
    /** onClick defined for flxOptionFavoritie3 **/
    AS_FlexContainer_db2c816814174768af0a012b225e6187: function AS_FlexContainer_db2c816814174768af0a012b225e6187(eventobject) {
        var self = this;
        let widgets = {
            img: 'imgArrowFavoritie3',
            row: 'flxRowOptionFavoritie3'
        };
        this.expandCollapse(widgets);
    },
    /** onClick defined for flxOptionFavoritie2 **/
    AS_FlexContainer_b55c6208a5ae4bd88c09c28b04d126aa: function AS_FlexContainer_b55c6208a5ae4bd88c09c28b04d126aa(eventobject) {
        var self = this;
        let widgets = {
            img: 'imgArrowFavoritie2',
            row: 'flxRowOptionFavoritie2'
        };
        this.expandCollapse(widgets);
    },
    /** onClick defined for flxOptionFavoritie1 **/
    AS_FlexContainer_fb8688003b1a48b38de5c320deeca2e9: function AS_FlexContainer_fb8688003b1a48b38de5c320deeca2e9(eventobject) {
        var self = this;
        let widgets = {
            img: 'imgArrowFavoritie1',
            row: 'flxRowOptionFavoritie1'
        };
        this.expandCollapse(widgets);
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
            "height": "100%",
            "id": "Menu",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyCopyFLXFFFFFF4",
            "top": "0dp",
            "width": "488dp",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [640, 1024, 1366],
            "appName": "DarkMode"
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
            "appName": "DarkMode"
        }, controller.args[0], "flxHeader"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHeader"), extendConfig({}, controller.args[2], "flxHeader"));
        flxHeader.setDefaultUnit(kony.flex.DP);
        var imgClose = new kony.ui.Image2(extendConfig({
            "centerY": "50%",
            "height": "16dp",
            "id": "imgClose",
            "isVisible": true,
            "onTouchStart": controller.AS_Image_i65830292295446b9ffa710bfc0907fa,
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
        var flxScrollOption = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bounces": true,
            "clipBounds": false,
            "enableScrolling": true,
            "height": "80%",
            "horizontalScrollIndicator": true,
            "id": "flxScrollOption",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "maxHeight": "80%",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "0",
            "verticalScrollIndicator": true,
            "width": "100%"
        }, controller.args[0], "flxScrollOption"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxScrollOption"), extendConfig({}, controller.args[2], "flxScrollOption"));
        flxScrollOption.setDefaultUnit(kony.flex.DP);
        var flxFavorities = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxFavorities",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxFavorities"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxFavorities"), extendConfig({}, controller.args[2], "flxFavorities"));
        flxFavorities.setDefaultUnit(kony.flex.DP);
        var flxHeaderFavorities = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "flxHeaderFavorities",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxHeaderFavorities"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHeaderFavorities"), extendConfig({}, controller.args[2], "flxHeaderFavorities"));
        flxHeaderFavorities.setDefaultUnit(kony.flex.DP);
        var lblFavoritie = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblFavoritie",
            "isVisible": true,
            "left": "10dp",
            "skin": "defLabelHeaderMenuOption",
            "text": "🤩 Favoritos",
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblFavoritie"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFavoritie"), extendConfig({}, controller.args[2], "lblFavoritie"));
        var imgArrowFavoritie = new kony.ui.Image2(extendConfig({
            "centerX": "73%",
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrowFavoritie",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "rectangle_7_copy_1_4.png",
            "top": "0",
            "width": "20dp"
        }, controller.args[0], "imgArrowFavoritie"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrowFavoritie"), extendConfig({}, controller.args[2], "imgArrowFavoritie"));
        flxHeaderFavorities.add(lblFavoritie, imgArrowFavoritie);
        var flxOptionsFavoritiesContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxOptionsFavoritiesContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxOptionsFavoritiesContainer"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxOptionsFavoritiesContainer"), extendConfig({}, controller.args[2], "flxOptionsFavoritiesContainer"));
        flxOptionsFavoritiesContainer.setDefaultUnit(kony.flex.DP);
        var flxOptionFavoritie1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxOptionFavoritie1",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_fb8688003b1a48b38de5c320deeca2e9,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxOptionFavoritie1"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxOptionFavoritie1"), extendConfig({}, controller.args[2], "flxOptionFavoritie1"));
        flxOptionFavoritie1.setDefaultUnit(kony.flex.DP);
        var flxSeparatorFavoritie1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "1dp",
            "id": "flxSeparatorFavoritie1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknSeparator",
            "top": "0dp",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxSeparatorFavoritie1"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSeparatorFavoritie1"), extendConfig({}, controller.args[2], "flxSeparatorFavoritie1"));
        flxSeparatorFavoritie1.setDefaultUnit(kony.flex.DP);
        flxSeparatorFavoritie1.add();
        var flxHeaderOptionFavoritie1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "flxHeaderOptionFavoritie1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxHeaderOptionFavoritie1"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHeaderOptionFavoritie1"), extendConfig({}, controller.args[2], "flxHeaderOptionFavoritie1"));
        flxHeaderOptionFavoritie1.setDefaultUnit(kony.flex.DP);
        var btnNoFavoriteOption1 = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "height": "35dp",
            "id": "btnNoFavoriteOption1",
            "isVisible": true,
            "left": "5dp",
            "onTouchStart": controller.AS_Button_c31fe7bff09a471b89278d069e687abc,
            "skin": "defBtnFavorite",
            "text": "⛔",
            "top": "0",
            "width": "35dp"
        }, controller.args[0], "btnNoFavoriteOption1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNoFavoriteOption1"), extendConfig({}, controller.args[2], "btnNoFavoriteOption1"));
        var lblHeaderFavoritieOption1 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblHeaderFavoritieOption1",
            "isVisible": true,
            "left": "15dp",
            "skin": "defLabelHeaderMenuOption",
            "text": "Header Option 1",
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblHeaderFavoritieOption1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeaderFavoritieOption1"), extendConfig({}, controller.args[2], "lblHeaderFavoritieOption1"));
        var imgArrowFavoritie1 = new kony.ui.Image2(extendConfig({
            "centerX": "59%",
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrowFavoritie1",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "rectangle_7_copy_1_4.png",
            "top": "0",
            "width": "20dp"
        }, controller.args[0], "imgArrowFavoritie1"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrowFavoritie1"), extendConfig({}, controller.args[2], "imgArrowFavoritie1"));
        flxHeaderOptionFavoritie1.add(btnNoFavoriteOption1, lblHeaderFavoritieOption1, imgArrowFavoritie1);
        var flxRowOptionFavoritie1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "5dp",
            "clipBounds": false,
            "id": "flxRowOptionFavoritie1",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxRowOptionFavoritie1"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxRowOptionFavoritie1"), extendConfig({}, controller.args[2], "flxRowOptionFavoritie1"));
        flxRowOptionFavoritie1.setDefaultUnit(kony.flex.DP);
        var btnRowNoFavoriteOption1 = new kony.ui.Button(extendConfig({
            "focusSkin": "defBtnFocusFavorite",
            "height": "35dp",
            "id": "btnRowNoFavoriteOption1",
            "isVisible": false,
            "left": "5dp",
            "skin": "defBtnFavorite",
            "text": "⭐",
            "top": "0dp",
            "width": "35dp"
        }, controller.args[0], "btnRowNoFavoriteOption1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 10],
            "paddingInPixel": false
        }, controller.args[1], "btnRowNoFavoriteOption1"), extendConfig({}, controller.args[2], "btnRowNoFavoriteOption1"));
        var lblRowFavoritieOption11 = new kony.ui.Label(extendConfig({
            "id": "lblRowFavoritieOption11",
            "isVisible": true,
            "left": "55dp",
            "onTouchStart": controller.AS_Label_f08ff79e1d8d4d26a95546238ec9db28,
            "skin": "defLabelHeaderMenuOption",
            "text": "Row Option 1",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblRowFavoritieOption11"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRowFavoritieOption11"), extendConfig({}, controller.args[2], "lblRowFavoritieOption11"));
        var lblRowFavoritieOption12 = new kony.ui.Label(extendConfig({
            "id": "lblRowFavoritieOption12",
            "isVisible": true,
            "left": "55dp",
            "onTouchStart": controller.AS_Label_a5264a14b30449f5b87bf00da77d30d1,
            "skin": "defLabelHeaderMenuOption",
            "text": "Row Option 2",
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblRowFavoritieOption12"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRowFavoritieOption12"), extendConfig({}, controller.args[2], "lblRowFavoritieOption12"));
        flxRowOptionFavoritie1.add(btnRowNoFavoriteOption1, lblRowFavoritieOption11, lblRowFavoritieOption12);
        flxOptionFavoritie1.add(flxSeparatorFavoritie1, flxHeaderOptionFavoritie1, flxRowOptionFavoritie1);
        var flxOptionFavoritie2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxOptionFavoritie2",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_b55c6208a5ae4bd88c09c28b04d126aa,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxOptionFavoritie2"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxOptionFavoritie2"), extendConfig({}, controller.args[2], "flxOptionFavoritie2"));
        flxOptionFavoritie2.setDefaultUnit(kony.flex.DP);
        var flxSeparatorFavoritie2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "1dp",
            "id": "flxSeparatorFavoritie2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknSeparator",
            "top": "0dp",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxSeparatorFavoritie2"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSeparatorFavoritie2"), extendConfig({}, controller.args[2], "flxSeparatorFavoritie2"));
        flxSeparatorFavoritie2.setDefaultUnit(kony.flex.DP);
        flxSeparatorFavoritie2.add();
        var flxHeaderOptionFavoritie2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "flxHeaderOptionFavoritie2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxHeaderOptionFavoritie2"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHeaderOptionFavoritie2"), extendConfig({}, controller.args[2], "flxHeaderOptionFavoritie2"));
        flxHeaderOptionFavoritie2.setDefaultUnit(kony.flex.DP);
        var btnNoFavoriteOption2 = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "height": "35dp",
            "id": "btnNoFavoriteOption2",
            "isVisible": true,
            "left": "5dp",
            "onTouchStart": controller.AS_Button_jf8d101dd9c44c8084fde53495645782,
            "skin": "defBtnFavorite",
            "text": "⛔",
            "top": "0",
            "width": "35dp"
        }, controller.args[0], "btnNoFavoriteOption2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNoFavoriteOption2"), extendConfig({}, controller.args[2], "btnNoFavoriteOption2"));
        var lblHeaderFavoritieOption2 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblHeaderFavoritieOption2",
            "isVisible": true,
            "left": "15dp",
            "skin": "defLabelHeaderMenuOption",
            "text": "Header Option 2",
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblHeaderFavoritieOption2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeaderFavoritieOption2"), extendConfig({}, controller.args[2], "lblHeaderFavoritieOption2"));
        var imgArrowFavoritie2 = new kony.ui.Image2(extendConfig({
            "centerX": "59%",
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrowFavoritie2",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "rectangle_7_copy_1_4.png",
            "top": "0",
            "width": "20dp"
        }, controller.args[0], "imgArrowFavoritie2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrowFavoritie2"), extendConfig({}, controller.args[2], "imgArrowFavoritie2"));
        flxHeaderOptionFavoritie2.add(btnNoFavoriteOption2, lblHeaderFavoritieOption2, imgArrowFavoritie2);
        var flxRowOptionFavoritie2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "5dp",
            "clipBounds": false,
            "id": "flxRowOptionFavoritie2",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxRowOptionFavoritie2"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxRowOptionFavoritie2"), extendConfig({}, controller.args[2], "flxRowOptionFavoritie2"));
        flxRowOptionFavoritie2.setDefaultUnit(kony.flex.DP);
        var btnRowNoFavoriteOption2 = new kony.ui.Button(extendConfig({
            "focusSkin": "defBtnFocusFavorite",
            "height": "35dp",
            "id": "btnRowNoFavoriteOption2",
            "isVisible": false,
            "left": "5dp",
            "skin": "defBtnFavorite",
            "text": "⭐",
            "top": "0dp",
            "width": "35dp"
        }, controller.args[0], "btnRowNoFavoriteOption2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 10],
            "paddingInPixel": false
        }, controller.args[1], "btnRowNoFavoriteOption2"), extendConfig({}, controller.args[2], "btnRowNoFavoriteOption2"));
        var lblRowFavoritieOption21 = new kony.ui.Label(extendConfig({
            "id": "lblRowFavoritieOption21",
            "isVisible": true,
            "left": "55dp",
            "onTouchStart": controller.AS_Label_ee4f4a7bf8644535a6f6047fda60de77,
            "skin": "defLabelHeaderMenuOption",
            "text": "Row Option 1",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblRowFavoritieOption21"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRowFavoritieOption21"), extendConfig({}, controller.args[2], "lblRowFavoritieOption21"));
        var lblRowFavoritieOption22 = new kony.ui.Label(extendConfig({
            "id": "lblRowFavoritieOption22",
            "isVisible": true,
            "left": "55dp",
            "onTouchStart": controller.AS_Label_c20403a7f10c48bea849a6077656cf6a,
            "skin": "defLabelHeaderMenuOption",
            "text": "Row Option 2",
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblRowFavoritieOption22"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRowFavoritieOption22"), extendConfig({}, controller.args[2], "lblRowFavoritieOption22"));
        flxRowOptionFavoritie2.add(btnRowNoFavoriteOption2, lblRowFavoritieOption21, lblRowFavoritieOption22);
        flxOptionFavoritie2.add(flxSeparatorFavoritie2, flxHeaderOptionFavoritie2, flxRowOptionFavoritie2);
        var flxOptionFavoritie3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxOptionFavoritie3",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_db2c816814174768af0a012b225e6187,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxOptionFavoritie3"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxOptionFavoritie3"), extendConfig({}, controller.args[2], "flxOptionFavoritie3"));
        flxOptionFavoritie3.setDefaultUnit(kony.flex.DP);
        var flxSeparatorFavoritie3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "1dp",
            "id": "flxSeparatorFavoritie3",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknSeparator",
            "top": "0dp",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxSeparatorFavoritie3"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSeparatorFavoritie3"), extendConfig({}, controller.args[2], "flxSeparatorFavoritie3"));
        flxSeparatorFavoritie3.setDefaultUnit(kony.flex.DP);
        flxSeparatorFavoritie3.add();
        var flxHeaderOptionFavoritie3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "flxHeaderOptionFavoritie3",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxHeaderOptionFavoritie3"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHeaderOptionFavoritie3"), extendConfig({}, controller.args[2], "flxHeaderOptionFavoritie3"));
        flxHeaderOptionFavoritie3.setDefaultUnit(kony.flex.DP);
        var btnNoFavoriteOption3 = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "height": "35dp",
            "id": "btnNoFavoriteOption3",
            "isVisible": true,
            "left": "5dp",
            "onTouchStart": controller.AS_Button_j6627065881748139d3ca5954f4ac9e4,
            "skin": "defBtnFavorite",
            "text": "⛔",
            "top": "0",
            "width": "35dp"
        }, controller.args[0], "btnNoFavoriteOption3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnNoFavoriteOption3"), extendConfig({}, controller.args[2], "btnNoFavoriteOption3"));
        var lblHeaderFavoritieOption3 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblHeaderFavoritieOption3",
            "isVisible": true,
            "left": "15dp",
            "skin": "defLabelHeaderMenuOption",
            "text": "Header Option 3",
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblHeaderFavoritieOption3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeaderFavoritieOption3"), extendConfig({}, controller.args[2], "lblHeaderFavoritieOption3"));
        var imgArrowFavoritie3 = new kony.ui.Image2(extendConfig({
            "centerX": "59%",
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrowFavoritie3",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "rectangle_7_copy_1_4.png",
            "top": "0",
            "width": "20dp"
        }, controller.args[0], "imgArrowFavoritie3"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrowFavoritie3"), extendConfig({}, controller.args[2], "imgArrowFavoritie3"));
        flxHeaderOptionFavoritie3.add(btnNoFavoriteOption3, lblHeaderFavoritieOption3, imgArrowFavoritie3);
        var flxRowOptionFavoritie3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "5dp",
            "clipBounds": false,
            "id": "flxRowOptionFavoritie3",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxRowOptionFavoritie3"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxRowOptionFavoritie3"), extendConfig({}, controller.args[2], "flxRowOptionFavoritie3"));
        flxRowOptionFavoritie3.setDefaultUnit(kony.flex.DP);
        var btnRowNoFavoriteOption3 = new kony.ui.Button(extendConfig({
            "focusSkin": "defBtnFocusFavorite",
            "height": "35dp",
            "id": "btnRowNoFavoriteOption3",
            "isVisible": false,
            "left": "5dp",
            "skin": "defBtnFavorite",
            "text": "⭐",
            "top": "0dp",
            "width": "35dp"
        }, controller.args[0], "btnRowNoFavoriteOption3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 10],
            "paddingInPixel": false
        }, controller.args[1], "btnRowNoFavoriteOption3"), extendConfig({}, controller.args[2], "btnRowNoFavoriteOption3"));
        var lblRowFavoritieOption31 = new kony.ui.Label(extendConfig({
            "id": "lblRowFavoritieOption31",
            "isVisible": true,
            "left": "55dp",
            "onTouchStart": controller.AS_Label_c517787ff9cf47b48d9bfc84f0ce2cde,
            "skin": "defLabelHeaderMenuOption",
            "text": "Row Option 1",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblRowFavoritieOption31"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRowFavoritieOption31"), extendConfig({}, controller.args[2], "lblRowFavoritieOption31"));
        var lblRowFavoritieOption32 = new kony.ui.Label(extendConfig({
            "id": "lblRowFavoritieOption32",
            "isVisible": true,
            "left": "55dp",
            "onTouchStart": controller.AS_Label_d9ef454ca98c432cb885d00f77e0d95a,
            "skin": "defLabelHeaderMenuOption",
            "text": "Row Option 2",
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblRowFavoritieOption32"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRowFavoritieOption32"), extendConfig({}, controller.args[2], "lblRowFavoritieOption32"));
        flxRowOptionFavoritie3.add(btnRowNoFavoriteOption3, lblRowFavoritieOption31, lblRowFavoritieOption32);
        flxOptionFavoritie3.add(flxSeparatorFavoritie3, flxHeaderOptionFavoritie3, flxRowOptionFavoritie3);
        flxOptionsFavoritiesContainer.add(flxOptionFavoritie1, flxOptionFavoritie2, flxOptionFavoritie3);
        var flxSeparatorFavoritie = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "1dp",
            "id": "flxSeparatorFavoritie",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknSeparator",
            "top": "0dp",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxSeparatorFavoritie"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSeparatorFavoritie"), extendConfig({}, controller.args[2], "flxSeparatorFavoritie"));
        flxSeparatorFavoritie.setDefaultUnit(kony.flex.DP);
        flxSeparatorFavoritie.add();
        flxFavorities.add(flxHeaderFavorities, flxOptionsFavoritiesContainer, flxSeparatorFavoritie);
        var flxOptionsContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxOptionsContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 15,
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxOptionsContainer"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxOptionsContainer"), extendConfig({}, controller.args[2], "flxOptionsContainer"));
        flxOptionsContainer.setDefaultUnit(kony.flex.DP);
        var lblTitleMenu = new kony.ui.Label(extendConfig({
            "id": "lblTitleMenu",
            "isVisible": true,
            "left": "5dp",
            "skin": "CopydefLabel0i62d30c68ae047",
            "text": "Menu",
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblTitleMenu"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblTitleMenu"), extendConfig({}, controller.args[2], "lblTitleMenu"));
        var flxOption1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxOption1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_jc36b2459a024161a3d1e2b36c7a3f4c,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxOption1"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxOption1"), extendConfig({}, controller.args[2], "flxOption1"));
        flxOption1.setDefaultUnit(kony.flex.DP);
        var flxSeparator1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "1dp",
            "id": "flxSeparator1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknSeparator",
            "top": "0dp",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxSeparator1"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSeparator1"), extendConfig({}, controller.args[2], "flxSeparator1"));
        flxSeparator1.setDefaultUnit(kony.flex.DP);
        flxSeparator1.add();
        var flxHeaderOption1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "flxHeaderOption1",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxHeaderOption1"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHeaderOption1"), extendConfig({}, controller.args[2], "flxHeaderOption1"));
        flxHeaderOption1.setDefaultUnit(kony.flex.DP);
        var btnFavoriteOption1 = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "height": "35dp",
            "id": "btnFavoriteOption1",
            "isVisible": true,
            "left": "5dp",
            "onTouchStart": controller.AS_Button_e15ff166cc3c48ab93dfa9821af9895b,
            "skin": "defBtnFavorite",
            "text": "⭐",
            "top": "0",
            "width": "35dp",
            "zIndex": 1000
        }, controller.args[0], "btnFavoriteOption1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnFavoriteOption1"), extendConfig({}, controller.args[2], "btnFavoriteOption1"));
        var lblHeaderOption1 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblHeaderOption1",
            "isVisible": true,
            "left": "15dp",
            "skin": "defLabelHeaderMenuOption",
            "text": "Header Option 1",
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblHeaderOption1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeaderOption1"), extendConfig({}, controller.args[2], "lblHeaderOption1"));
        var imgArrow1 = new kony.ui.Image2(extendConfig({
            "centerX": "59%",
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow1",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "rectangle_7_copy_1_4.png",
            "top": "0",
            "width": "20dp"
        }, controller.args[0], "imgArrow1"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow1"), extendConfig({}, controller.args[2], "imgArrow1"));
        flxHeaderOption1.add(btnFavoriteOption1, lblHeaderOption1, imgArrow1);
        var flxRowOption1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "5dp",
            "clipBounds": false,
            "id": "flxRowOption1",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxRowOption1"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxRowOption1"), extendConfig({}, controller.args[2], "flxRowOption1"));
        flxRowOption1.setDefaultUnit(kony.flex.DP);
        var btnRowFavoriteOption1 = new kony.ui.Button(extendConfig({
            "focusSkin": "defBtnFocusFavorite",
            "height": "35dp",
            "id": "btnRowFavoriteOption1",
            "isVisible": false,
            "left": "5dp",
            "skin": "defBtnFavorite",
            "text": "⭐",
            "top": "0dp",
            "width": "35dp"
        }, controller.args[0], "btnRowFavoriteOption1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 10],
            "paddingInPixel": false
        }, controller.args[1], "btnRowFavoriteOption1"), extendConfig({}, controller.args[2], "btnRowFavoriteOption1"));
        var lblRowOption1 = new kony.ui.Label(extendConfig({
            "id": "lblRowOption1",
            "isVisible": true,
            "left": "55dp",
            "onTouchStart": controller.AS_Label_f08ff79e1d8d4d26a95546238ec9db28,
            "skin": "defLabelHeaderMenuOption",
            "text": "Row Option 1",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblRowOption1"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRowOption1"), extendConfig({}, controller.args[2], "lblRowOption1"));
        var lblRowOption2 = new kony.ui.Label(extendConfig({
            "id": "lblRowOption2",
            "isVisible": true,
            "left": "55dp",
            "onTouchStart": controller.AS_Label_a5264a14b30449f5b87bf00da77d30d1,
            "skin": "defLabelHeaderMenuOption",
            "text": "Row Option 2",
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblRowOption2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRowOption2"), extendConfig({}, controller.args[2], "lblRowOption2"));
        flxRowOption1.add(btnRowFavoriteOption1, lblRowOption1, lblRowOption2);
        flxOption1.add(flxSeparator1, flxHeaderOption1, flxRowOption1);
        var flxOption2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxOption2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_b852b3398b4449dbb622d717d73bd270,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxOption2"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxOption2"), extendConfig({}, controller.args[2], "flxOption2"));
        flxOption2.setDefaultUnit(kony.flex.DP);
        var flxSeparator2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "1dp",
            "id": "flxSeparator2",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknSeparator",
            "top": "0dp",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxSeparator2"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSeparator2"), extendConfig({}, controller.args[2], "flxSeparator2"));
        flxSeparator2.setDefaultUnit(kony.flex.DP);
        flxSeparator2.add();
        var flxHeaderOption2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "flxHeaderOption2",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxHeaderOption2"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHeaderOption2"), extendConfig({}, controller.args[2], "flxHeaderOption2"));
        flxHeaderOption2.setDefaultUnit(kony.flex.DP);
        var btnFavoriteOption2 = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "height": "35dp",
            "id": "btnFavoriteOption2",
            "isVisible": true,
            "left": "5dp",
            "onTouchStart": controller.AS_Button_id9d9e5b59404d0da836908c133ff592,
            "skin": "defBtnFavorite",
            "text": "⭐",
            "top": "0",
            "width": "35dp"
        }, controller.args[0], "btnFavoriteOption2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnFavoriteOption2"), extendConfig({}, controller.args[2], "btnFavoriteOption2"));
        var lblHeaderOption2 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblHeaderOption2",
            "isVisible": true,
            "left": "15dp",
            "skin": "defLabelHeaderMenuOption",
            "text": "Header Option 2",
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblHeaderOption2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeaderOption2"), extendConfig({}, controller.args[2], "lblHeaderOption2"));
        var imgArrow2 = new kony.ui.Image2(extendConfig({
            "centerX": "59%",
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow2",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "rectangle_7_copy_1_4.png",
            "top": "0",
            "width": "20dp"
        }, controller.args[0], "imgArrow2"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow2"), extendConfig({}, controller.args[2], "imgArrow2"));
        flxHeaderOption2.add(btnFavoriteOption2, lblHeaderOption2, imgArrow2);
        var flxRowOption2 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "5dp",
            "clipBounds": false,
            "id": "flxRowOption2",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxRowOption2"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxRowOption2"), extendConfig({}, controller.args[2], "flxRowOption2"));
        flxRowOption2.setDefaultUnit(kony.flex.DP);
        var btnRowFavoriteOption2 = new kony.ui.Button(extendConfig({
            "focusSkin": "defBtnFocusFavorite",
            "height": "35dp",
            "id": "btnRowFavoriteOption2",
            "isVisible": false,
            "left": "5dp",
            "skin": "defBtnFavorite",
            "text": "⭐",
            "top": "0dp",
            "width": "35dp"
        }, controller.args[0], "btnRowFavoriteOption2"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 10],
            "paddingInPixel": false
        }, controller.args[1], "btnRowFavoriteOption2"), extendConfig({}, controller.args[2], "btnRowFavoriteOption2"));
        var lblRowOption21 = new kony.ui.Label(extendConfig({
            "id": "lblRowOption21",
            "isVisible": true,
            "left": "55dp",
            "onTouchStart": controller.AS_Label_ee4f4a7bf8644535a6f6047fda60de77,
            "skin": "defLabelHeaderMenuOption",
            "text": "Row Option 1",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblRowOption21"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRowOption21"), extendConfig({}, controller.args[2], "lblRowOption21"));
        var lblRowOption22 = new kony.ui.Label(extendConfig({
            "id": "lblRowOption22",
            "isVisible": true,
            "left": "55dp",
            "onTouchStart": controller.AS_Label_c20403a7f10c48bea849a6077656cf6a,
            "skin": "defLabelHeaderMenuOption",
            "text": "Row Option 2",
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblRowOption22"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRowOption22"), extendConfig({}, controller.args[2], "lblRowOption22"));
        flxRowOption2.add(btnRowFavoriteOption2, lblRowOption21, lblRowOption22);
        flxOption2.add(flxSeparator2, flxHeaderOption2, flxRowOption2);
        var flxOption3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": false,
            "id": "flxOption3",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "onClick": controller.AS_FlexContainer_f911ee5a1881452ca6f0b5c9be2fbe9c,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxOption3"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxOption3"), extendConfig({}, controller.args[2], "flxOption3"));
        flxOption3.setDefaultUnit(kony.flex.DP);
        var flxSeparator3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "1dp",
            "id": "flxSeparator3",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknSeparator",
            "top": "0dp",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxSeparator3"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxSeparator3"), extendConfig({}, controller.args[2], "flxSeparator3"));
        flxSeparator3.setDefaultUnit(kony.flex.DP);
        flxSeparator3.add();
        var flxHeaderOption3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": false,
            "height": "50dp",
            "id": "flxHeaderOption3",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxHeaderOption3"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxHeaderOption3"), extendConfig({}, controller.args[2], "flxHeaderOption3"));
        flxHeaderOption3.setDefaultUnit(kony.flex.DP);
        var btnFavoriteOption3 = new kony.ui.Button(extendConfig({
            "centerY": "50%",
            "height": "35dp",
            "id": "btnFavoriteOption3",
            "isVisible": true,
            "left": "5dp",
            "onTouchStart": controller.AS_Button_g4a2fb64776f484bb993d79066585623,
            "skin": "defBtnFavorite",
            "text": "⭐",
            "top": "0",
            "width": "35dp"
        }, controller.args[0], "btnFavoriteOption3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnFavoriteOption3"), extendConfig({}, controller.args[2], "btnFavoriteOption3"));
        var lblHeaderOption3 = new kony.ui.Label(extendConfig({
            "height": "100%",
            "id": "lblHeaderOption3",
            "isVisible": true,
            "left": "15dp",
            "skin": "defLabelHeaderMenuOption",
            "text": "Header Option 3",
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblHeaderOption3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblHeaderOption3"), extendConfig({}, controller.args[2], "lblHeaderOption3"));
        var imgArrow3 = new kony.ui.Image2(extendConfig({
            "centerX": "59%",
            "centerY": "50%",
            "height": "20dp",
            "id": "imgArrow3",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "rectangle_7_copy_1_4.png",
            "top": "0",
            "width": "20dp"
        }, controller.args[0], "imgArrow3"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgArrow3"), extendConfig({}, controller.args[2], "imgArrow3"));
        flxHeaderOption3.add(btnFavoriteOption3, lblHeaderOption3, imgArrow3);
        var flxRowOption3 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "5dp",
            "clipBounds": false,
            "id": "flxRowOption3",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "appName": "DarkMode"
        }, controller.args[0], "flxRowOption3"), extendConfig({
            "paddingInPixel": false
        }, controller.args[1], "flxRowOption3"), extendConfig({}, controller.args[2], "flxRowOption3"));
        flxRowOption3.setDefaultUnit(kony.flex.DP);
        var btnRowFavoriteOption3 = new kony.ui.Button(extendConfig({
            "focusSkin": "defBtnFocusFavorite",
            "height": "35dp",
            "id": "btnRowFavoriteOption3",
            "isVisible": false,
            "left": "5dp",
            "skin": "defBtnFavorite",
            "text": "⭐",
            "top": "0dp",
            "width": "35dp"
        }, controller.args[0], "btnRowFavoriteOption3"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 10],
            "paddingInPixel": false
        }, controller.args[1], "btnRowFavoriteOption3"), extendConfig({}, controller.args[2], "btnRowFavoriteOption3"));
        var lblRowOption31 = new kony.ui.Label(extendConfig({
            "id": "lblRowOption31",
            "isVisible": true,
            "left": "55dp",
            "onTouchStart": controller.AS_Label_c517787ff9cf47b48d9bfc84f0ce2cde,
            "skin": "defLabelHeaderMenuOption",
            "text": "Row Option 1",
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblRowOption31"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRowOption31"), extendConfig({}, controller.args[2], "lblRowOption31"));
        var lblRowOption32 = new kony.ui.Label(extendConfig({
            "id": "lblRowOption32",
            "isVisible": true,
            "left": "55dp",
            "onTouchStart": controller.AS_Label_d9ef454ca98c432cb885d00f77e0d95a,
            "skin": "defLabelHeaderMenuOption",
            "text": "Row Option 2",
            "top": "10dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblRowOption32"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblRowOption32"), extendConfig({}, controller.args[2], "lblRowOption32"));
        flxRowOption3.add(btnRowFavoriteOption3, lblRowOption31, lblRowOption32);
        flxOption3.add(flxSeparator3, flxHeaderOption3, flxRowOption3);
        flxOptionsContainer.add(lblTitleMenu, flxOption1, flxOption2, flxOption3);
        flxScrollOption.add(flxFavorities, flxOptionsContainer);
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
            "top": "35dp",
            "width": "90%",
            "zIndex": 1
        }, controller.args[0], "SquaredBtn"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "SquaredBtn"), extendConfig({}, controller.args[2], "SquaredBtn"));
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
            "isVisible": false,
            "left": "0dp",
            "needPageIndicator": true,
            "onRowClick": controller.AS_Segment_he708adc37c14b4fa8d73fca211e604c,
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
            "appName": "DarkMode"
        }, controller.args[0], "segMenuItems"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segMenuItems"), extendConfig({}, controller.args[2], "segMenuItems"));
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
        Menu.add(flxHeader, flxScrollOption, lblLineSeperator, SquaredBtn, segMenuItems, imgUpArrow, imgDownArrow);
        Menu.compInstData = {}
        return Menu;
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
            "onClick": controller.AS_FlexContainer_g79d135aa98d4868879f3f4d64d06357,
            "skin": "CopyCopyCopyslFbox0g0c023c26eb148",
            "top": "0dp",
            "width": "100%",
            "appName": "DarkMode"
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
            "onTouchEnd": controller.AS_Image_da4f294c111a4635a555a5ce80f05b41,
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
            "appName": "DarkMode"
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
define("userCopyflxmenuheaderwrapperController", {
    //Type your controller code here 
});
define("CopyflxmenuheaderwrapperControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for Copyflxmenuheaderwrapper **/
    AS_FlexContainer_g79d135aa98d4868879f3f4d64d06357: function AS_FlexContainer_g79d135aa98d4868879f3f4d64d06357(eventobject, context) {
        var self = this;
        this.executeOnParent("clickedOnSectionHeader", eventobject.rowContext.sectionIndex);
    },
    /** onTouchEnd defined for imgTempHeaderArraow **/
    AS_Image_da4f294c111a4635a555a5ce80f05b41: function AS_Image_da4f294c111a4635a555a5ce80f05b41(eventobject, x, y, context) {
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

require(['applicationController','com/konymp/ListWithImage/ListWithImageController','com/konymp/ListWithImage/ListWithImage','com/konymp/ListWithImageCopy/ListWithImageCopyController','com/konymp/ListWithImageCopy/ListWithImageCopy','com/konymp/Login/LoginController','com/konymp/Login/Login','com/konymp/Menu/MenuController','com/konymp/Menu/Menu','comm/konymp/ToastAlert/ToastAlertController','comm/konymp/ToastAlert/ToastAlert','comm/konymp/ToastError/ToastErrorController','comm/konymp/ToastError/ToastError','comm/konymp/ToastSuccess/ToastSuccessController','comm/konymp/ToastSuccess/ToastSuccess','Copyflxmenuheaderwrapper','CopyflxMenuRowWrapper','CopyflxListWithImg','flxSampleRowTemplate','flxSectionHeaderTemplate','flxListWithImg','CopyflxmenuheaderwrapperController','CopyflxMenuRowWrapperController','CopyflxListWithImgController','flxSampleRowTemplateController','flxSectionHeaderTemplateController','flxListWithImgController','navigation/NavigationModel','navigation/NavigationController'], function(){});
define("sparequirefileslist", function(){});

