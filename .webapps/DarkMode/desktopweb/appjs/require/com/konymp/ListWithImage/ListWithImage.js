define(function() {
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
})