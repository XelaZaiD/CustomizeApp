define({
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