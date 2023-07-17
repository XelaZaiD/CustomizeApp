define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for loginButton **/
    AS_Button_d071b6ade3194551958d887767b0fab9: function AS_Button_d071b6ade3194551958d887767b0fab9(eventobject) {
        var self = this;

        function SHOW_ALERT__g967b6bfec0c474eb7061c8ad003e51b_True() {}
        function INVOKE_IDENTITY_SERVICE__gde9f1e1be6a42e3abd3c26e0ff9f794_Success(response) {
            kony.application.dismissLoadingScreen();
            var ntf = new kony.mvc.Navigation("frmListDetails");
            ntf.navigate();
        }
        function INVOKE_IDENTITY_SERVICE__gde9f1e1be6a42e3abd3c26e0ff9f794_Failure(error) {
            kony.application.dismissLoadingScreen();

            function SHOW_ALERT__g967b6bfec0c474eb7061c8ad003e51b_Callback() {
                SHOW_ALERT__g967b6bfec0c474eb7061c8ad003e51b_True();
            }
            kony.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": null,
                "yesLabel": null,
                "noLabel": null,
                "alertIcon": null,
                "message": "Authentication Failed!",
                "alertHandler": SHOW_ALERT__g967b6bfec0c474eb7061c8ad003e51b_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }
        kony.application.showLoadingScreen(null, null, constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {});
        if (login_inputparam == undefined) {
            var login_inputparam = {};
        }
        login_inputparam["serviceID"] = "MicrosoftActiveDirectory$login";
        login_inputparam["operation"] = "login";
        login_inputparam["userid"] = self.view.usernameTextbox.text;
        login_inputparam["password"] = self.view.passwordTextbox.text;
        MicrosoftActiveDirectory$login = mfidentityserviceinvoker("MicrosoftActiveDirectory", login_inputparam, INVOKE_IDENTITY_SERVICE__gde9f1e1be6a42e3abd3c26e0ff9f794_Success, INVOKE_IDENTITY_SERVICE__gde9f1e1be6a42e3abd3c26e0ff9f794_Failure);
    }
});