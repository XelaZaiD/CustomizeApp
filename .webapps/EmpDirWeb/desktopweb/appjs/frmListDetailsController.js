define("userfrmListDetailsController", {
    //Type your controller code here 
});
define("frmListDetailsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for headerLogoutButton **/
    AS_Button_dbe59a095e2946829851315355c48f6f: function AS_Button_dbe59a095e2946829851315355c48f6f(eventobject) {
        var self = this;

        function SHOW_ALERT__c53c1cc3fea84d58af23032b475c6051_True() {}

        function INVOKE_IDENTITY_SERVICE__f2b61d522cf74f5fa8d36e22d2ddc7c7_Success(response) {
            var ntf = new kony.mvc.Navigation("frmLogin");
            ntf.navigate();
        }

        function INVOKE_IDENTITY_SERVICE__f2b61d522cf74f5fa8d36e22d2ddc7c7_Failure(error) {
            function SHOW_ALERT__c53c1cc3fea84d58af23032b475c6051_Callback() {
                SHOW_ALERT__c53c1cc3fea84d58af23032b475c6051_True();
            }
            kony.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": null,
                "yesLabel": null,
                "noLabel": null,
                "alertIcon": null,
                "message": "Logout Failed!",
                "alertHandler": SHOW_ALERT__c53c1cc3fea84d58af23032b475c6051_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }
        if (logout_inputparam == undefined) {
            var logout_inputparam = {};
        }
        logout_inputparam["serviceID"] = "MicrosoftActiveDirectory$logout";
        logout_inputparam["operation"] = "logout";
        MicrosoftActiveDirectory$logout = mfidentityserviceinvoker("MicrosoftActiveDirectory", logout_inputparam, INVOKE_IDENTITY_SERVICE__f2b61d522cf74f5fa8d36e22d2ddc7c7_Success, INVOKE_IDENTITY_SERVICE__f2b61d522cf74f5fa8d36e22d2ddc7c7_Failure);
    },
    /** onClick defined for detailsLogoutButton **/
    AS_Button_f5e767ae9229403aa3213511562e3145: function AS_Button_f5e767ae9229403aa3213511562e3145(eventobject) {
        var self = this;

        function SHOW_ALERT__jee0ced202bd450aa9da2fa93db26f72_True() {}

        function INVOKE_IDENTITY_SERVICE__icdb8afee61046698b97f14474e1e30f_Success(response) {
            var ntf = new kony.mvc.Navigation("frmLogin");
            ntf.navigate();
        }

        function INVOKE_IDENTITY_SERVICE__icdb8afee61046698b97f14474e1e30f_Failure(error) {
            function SHOW_ALERT__jee0ced202bd450aa9da2fa93db26f72_Callback() {
                SHOW_ALERT__jee0ced202bd450aa9da2fa93db26f72_True();
            }
            kony.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": null,
                "yesLabel": null,
                "noLabel": null,
                "alertIcon": null,
                "message": "Logout Failed!",
                "alertHandler": SHOW_ALERT__jee0ced202bd450aa9da2fa93db26f72_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            });
        }
        if (logout_inputparam == undefined) {
            var logout_inputparam = {};
        }
        logout_inputparam["serviceID"] = "MicrosoftActiveDirectory$logout";
        logout_inputparam["operation"] = "logout";
        MicrosoftActiveDirectory$logout = mfidentityserviceinvoker("MicrosoftActiveDirectory", logout_inputparam, INVOKE_IDENTITY_SERVICE__icdb8afee61046698b97f14474e1e30f_Success, INVOKE_IDENTITY_SERVICE__icdb8afee61046698b97f14474e1e30f_Failure);
    },
    /** onClick defined for detailsPrevButton **/
    AS_Button_f7a51d85a1444410939b9ad1cd3ecc57: function AS_Button_f7a51d85a1444410939b9ad1cd3ecc57(eventobject) {
        var self = this;
        self.view.detailContainer.isVisible = false;
    },
    /** onRowClick defined for employeeSegment **/
    AS_Segment_j2523065f21a4666bdf642d3c92c0b25: function AS_Segment_j2523065f21a4666bdf642d3c92c0b25(eventobject, sectionNumber, rowNumber) {
        var self = this;

        function INVOKE_OBJECT_SERVICE__g9fd87bf1d834fe2a11ba752644b6f87_Callback(employees) {
            self.view.employeeDetailImage.src = employees["records"][0]["Image_URL"];
            self.view.employeeNameLabel.text = employees["records"][0]["Name"];
            self.view.employeeTitleLabel.text = employees["records"][0]["Designation"];
            self.view.employeeDetailsValue1.text = employees["records"][0]["Email"];
            self.view.employeeDetailsValue2.text = employees["records"][0]["Primary_Phone"];
            self.view.employeeDetailsValue3.text = employees["records"][0]["Department"];
            self.view.employeeDetailsValue4.text = employees["records"][0]["Manager_Name"];
            self.view.detailContainer.isVisible = true;
            self.view.forceLayout();
        }
        selectedEmployeeId = this.view.employeeSegment.selectedRowItems[0].employeeId.text;
        if (employees_inputparam == undefined) {
            var employees_inputparam = {};
        }
        employees_inputparam["serviceID"] = "EmployeeServices$employees$get";
        employees_inputparam["options"] = {
            "access": "online",
            "CRUD_TYPE": "get"
        };
        var odataParams = [];
        odataParams.push("$filter=" + "Emp_id eq " + selectedEmployeeId);
        employees_inputparam["options"]["odataurl"] = odataParams.join("&");
        var employees_httpheaders = {};
        employees_inputparam["httpheaders"] = employees_httpheaders;
        var employees_httpconfigs = {};
        employees_inputparam["httpconfig"] = employees_httpconfigs;
        EmployeeServices$employees$get = mfobjectsecureinvokerasync(employees_inputparam, "EmployeeServices", "employees", INVOKE_OBJECT_SERVICE__g9fd87bf1d834fe2a11ba752644b6f87_Callback);
    }
});
define("frmListDetailsController", ["userfrmListDetailsController", "frmListDetailsControllerActions"], function() {
    var controller = require("userfrmListDetailsController");
    var controllerActions = ["frmListDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
