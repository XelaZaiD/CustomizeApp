define({
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