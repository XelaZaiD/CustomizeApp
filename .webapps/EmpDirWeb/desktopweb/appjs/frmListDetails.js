define("frmListDetails", function() {
    return function(controller) {
        function addWidgetsfrmListDetails() {
            this.setDefaultUnit(kony.flex.DP);
            var masterContainer = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "masterContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "whiteContainerSkin0ffc107abfdd44c",
                "top": "0dp",
                "width": "100%",
                "appName": "EmpDirWeb"
            }, {
                "paddingInPixel": false
            }, {});
            masterContainer.setDefaultUnit(kony.flex.DP);
            var headerContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "headerContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0f1285b7c95524b",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "EmpDirWeb"
            }, {
                "paddingInPixel": false
            }, {});
            headerContainer.setDefaultUnit(kony.flex.DP);
            var headerDivider = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "1dp",
                "id": "headerDivider",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sepLineSkin0hba627e175be4e",
                "width": "100%",
                "zIndex": 1,
                "appName": "EmpDirWeb"
            }, {
                "paddingInPixel": false
            }, {});
            headerDivider.setDefaultUnit(kony.flex.DP);
            headerDivider.add();
            var headerTitle = new kony.ui.Label({
                "bottom": "18dp",
                "centerX": "50%",
                "id": "headerTitle",
                "isVisible": true,
                "left": "139dp",
                "skin": "CopydefLabel0f85b3c01ab6240",
                "text": "Employee List",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var headerLogoutImage = new kony.ui.Image2({
                "centerY": "50%",
                "height": "22dp",
                "id": "headerLogoutImage",
                "isVisible": true,
                "right": 16,
                "skin": "slImage0gb816969cc064b",
                "src": "logouticon.png",
                "top": "16dp",
                "width": "22dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var headerLogoutButton = new kony.ui.Button({
                "focusSkin": "CopydefBtnNormal0hf82e56bdb8743",
                "height": "100%",
                "id": "headerLogoutButton",
                "isVisible": true,
                "onClick": controller.AS_Button_dbe59a095e2946829851315355c48f6f,
                "right": 0,
                "skin": "headerButtonSkin0ed30805f52da4e",
                "text": "Button",
                "top": "0dp",
                "width": "56dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var headerBackChevron = new kony.ui.Image2({
                "centerY": "50%",
                "height": "18dp",
                "id": "headerBackChevron",
                "isVisible": false,
                "left": 14,
                "right": 16,
                "skin": "slImage0gb816969cc064b",
                "src": "backicon.png",
                "top": "16dp",
                "width": "18dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var headerBackButton = new kony.ui.Button({
                "focusSkin": "headerButtonSkin0ed30805f52da4e",
                "height": "100%",
                "id": "headerBackButton",
                "isVisible": false,
                "left": 0,
                "right": 0,
                "skin": "headerButtonSkin0ed30805f52da4e",
                "text": "Button",
                "top": "0dp",
                "width": "56dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            headerContainer.add(headerDivider, headerTitle, headerLogoutImage, headerLogoutButton, headerBackChevron, headerBackButton);
            var listContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "id": "listContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox0b1a5ece8806245",
                "top": "60dp",
                "width": "45%",
                "appName": "EmpDirWeb"
            }, {
                "paddingInPixel": false
            }, {});
            listContainer.setDefaultUnit(kony.flex.DP);
            kony.mvc.registry.add('FBox0ef65618e166341', 'FBox0ef65618e166341', 'FBox0ef65618e166341Controller');
            var employeeSegment = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "employeeFieldGroup": "Product Management",
                    "employeeFieldName": "Alex Sion",
                    "employeeFieldTitle": "President",
                    "employeeId": "Label",
                    "employeeSegImage": "image1.png",
                    "employeeSegSep": "Label"
                }, {
                    "employeeFieldGroup": "Product Management",
                    "employeeFieldName": "Ben Cortez",
                    "employeeFieldTitle": "Senior Director",
                    "employeeId": "Label",
                    "employeeSegImage": "image2.png",
                    "employeeSegSep": "Label"
                }, {
                    "employeeFieldGroup": "Product Management",
                    "employeeFieldName": "Dan Marous",
                    "employeeFieldTitle": "Senior Product Manager",
                    "employeeId": "Label",
                    "employeeSegImage": "image3.png",
                    "employeeSegSep": "Label"
                }, {
                    "employeeFieldGroup": "Product Management",
                    "employeeFieldName": "Dawn Edwards",
                    "employeeFieldTitle": "Product Manager",
                    "employeeId": "Label",
                    "employeeSegImage": "image4.png",
                    "employeeSegSep": "Label"
                }, {
                    "employeeFieldGroup": "Product Management",
                    "employeeFieldName": "Elizabeth James",
                    "employeeFieldTitle": "Associate Product Manager",
                    "employeeId": "Label",
                    "employeeSegImage": "image5.png",
                    "employeeSegSep": "Label"
                }, {
                    "employeeFieldGroup": "Sales",
                    "employeeFieldName": "Ha Joon Lee",
                    "employeeFieldTitle": "President",
                    "employeeId": "Label",
                    "employeeSegImage": "image6.png",
                    "employeeSegSep": "Label"
                }, {
                    "employeeFieldGroup": "Sales",
                    "employeeFieldName": "Jared Ridge",
                    "employeeFieldTitle": "Senior Director",
                    "employeeId": "Label",
                    "employeeSegImage": "image7.png",
                    "employeeSegSep": "Label"
                }, {
                    "employeeFieldGroup": "Sales",
                    "employeeFieldName": "Jeremaih Crosman",
                    "employeeFieldTitle": "Business Development Manager",
                    "employeeId": "Label",
                    "employeeSegImage": "image8.png",
                    "employeeSegSep": "Label"
                }, {
                    "employeeFieldGroup": "Product Management",
                    "employeeFieldName": "Jim Lathmore",
                    "employeeFieldTitle": "Chief Executive Officer",
                    "employeeId": "Label",
                    "employeeSegImage": "image9.png",
                    "employeeSegSep": "Label"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "employeeSegment",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "onRowClick": controller.AS_Segment_j2523065f21a4666bdf642d3c92c0b25,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "Copyseg0f4fd1b37c27642",
                "rowSkin": "seg0a39b82eb568144",
                "rowTemplate": "FBox0ef65618e166341",
                "sectionHeaderSkin": "sliPhoneSegmentHeader0ddaa5d93e0714d",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "employeeFieldGroup": "employeeFieldGroup",
                    "employeeFieldName": "employeeFieldName",
                    "employeeFieldTitle": "employeeFieldTitle",
                    "employeeId": "employeeId",
                    "employeeSegImage": "employeeSegImage",
                    "employeeSegSep": "employeeSegSep"
                },
                "width": "100%",
                "zIndex": 1,
                "appName": "EmpDirWeb"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            listContainer.add(employeeSegment);
            var detailContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bottom": 0,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "horizontalScrollIndicator": true,
                "id": "detailContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "45%",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopydetailContainerSkin0a13df98e16e140",
                "top": "60dp",
                "verticalScrollIndicator": true,
                "width": "55%"
            }, {
                "paddingInPixel": false
            }, {});
            detailContainer.setDefaultUnit(kony.flex.DP);
            var detailsHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "detailsHeader",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0f1285b7c95524b",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "EmpDirWeb"
            }, {
                "paddingInPixel": false
            }, {});
            detailsHeader.setDefaultUnit(kony.flex.DP);
            var detailsHeaderDivision = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "1dp",
                "id": "detailsHeaderDivision",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sepLineSkin0hba627e175be4e",
                "width": "100%",
                "zIndex": 1,
                "appName": "EmpDirWeb"
            }, {
                "paddingInPixel": false
            }, {});
            detailsHeaderDivision.setDefaultUnit(kony.flex.DP);
            detailsHeaderDivision.add();
            var detailsHeaderTitle = new kony.ui.Label({
                "bottom": "18dp",
                "centerX": "50%",
                "id": "detailsHeaderTitle",
                "isVisible": true,
                "left": "139dp",
                "skin": "CopydefLabel0f85b3c01ab6240",
                "text": "Employee List",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var detailsLogout = new kony.ui.Image2({
                "centerY": "50%",
                "height": "22dp",
                "id": "detailsLogout",
                "isVisible": true,
                "right": 16,
                "skin": "slImage0gb816969cc064b",
                "src": "logouticon.png",
                "top": "16dp",
                "width": "22dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var detailsLogoutButton = new kony.ui.Button({
                "focusSkin": "CopydefBtnNormal0hf82e56bdb8743",
                "height": "100%",
                "id": "detailsLogoutButton",
                "isVisible": true,
                "onClick": controller.AS_Button_f5e767ae9229403aa3213511562e3145,
                "right": 0,
                "skin": "headerButtonSkin0ed30805f52da4e",
                "text": "Button",
                "top": "0dp",
                "width": "56dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var detailsPrevImage = new kony.ui.Image2({
                "centerY": "50%",
                "height": "18dp",
                "id": "detailsPrevImage",
                "isVisible": true,
                "left": 14,
                "right": 16,
                "skin": "slImage0gb816969cc064b",
                "src": "backicon.png",
                "top": "16dp",
                "width": "18dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var detailsPrevButton = new kony.ui.Button({
                "focusSkin": "headerButtonSkin0ed30805f52da4e",
                "height": "100%",
                "id": "detailsPrevButton",
                "isVisible": true,
                "left": 0,
                "onClick": controller.AS_Button_f7a51d85a1444410939b9ad1cd3ecc57,
                "right": 0,
                "skin": "headerButtonSkin0ed30805f52da4e",
                "text": "Button",
                "top": "0dp",
                "width": "56dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": false,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            detailsHeader.add(detailsHeaderDivision, detailsHeaderTitle, detailsLogout, detailsLogoutButton, detailsPrevImage, detailsPrevButton);
            var employeeDetailImage = new kony.ui.Image2({
                "centerX": "51.90%",
                "height": "123dp",
                "id": "employeeDetailImage",
                "isVisible": true,
                "left": "7dp",
                "skin": "slImage0gb816969cc064b",
                "src": "image1.png",
                "top": "26dp",
                "width": "127dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var employeeNameLabel = new kony.ui.Label({
                "centerX": "50%",
                "id": "employeeNameLabel",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0aa777a08868945",
                "text": "Kenneth George",
                "textStyle": {},
                "top": "166dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var employeeTitleLabel = new kony.ui.Label({
                "centerX": "50.00%",
                "id": "employeeTitleLabel",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0i0fcd4db0e2d44",
                "text": "Sales Engineer",
                "textStyle": {},
                "top": "199dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var employeeDetailsContent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "employeeDetailsContent",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "20dp",
                "isModalContainer": false,
                "right": 20,
                "skin": "slFbox0b1a5ece8806245",
                "top": "284dp",
                "appName": "EmpDirWeb"
            }, {
                "paddingInPixel": false
            }, {});
            employeeDetailsContent.setDefaultUnit(kony.flex.DP);
            var detailsRowContainer1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "detailsRowContainer1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox0b1a5ece8806245",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "EmpDirWeb"
            }, {
                "paddingInPixel": false
            }, {});
            detailsRowContainer1.setDefaultUnit(kony.flex.DP);
            var employeeDetailsSegDivide1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "1dp",
                "id": "employeeDetailsSegDivide1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "right": 0,
                "skin": "sepLineSkin0hba627e175be4e",
                "zIndex": 1,
                "appName": "EmpDirWeb"
            }, {
                "paddingInPixel": false
            }, {});
            employeeDetailsSegDivide1.setDefaultUnit(kony.flex.DP);
            employeeDetailsSegDivide1.add();
            var employeeDetailsLabel1 = new kony.ui.Label({
                "id": "employeeDetailsLabel1",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0h6d6fa430c5346",
                "text": "EMAIL",
                "textStyle": {},
                "top": 12,
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var employeeDetailsValue1 = new kony.ui.Label({
                "bottom": 12,
                "id": "employeeDetailsValue1",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0f96982f765a247",
                "text": "johnson.george@acme.com",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            detailsRowContainer1.add(employeeDetailsSegDivide1, employeeDetailsLabel1, employeeDetailsValue1);
            var detailsRowContainer2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "detailsRowContainer2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox0b1a5ece8806245",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "EmpDirWeb"
            }, {
                "paddingInPixel": false
            }, {});
            detailsRowContainer2.setDefaultUnit(kony.flex.DP);
            var employeeDetailsSegDivide2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "1dp",
                "id": "employeeDetailsSegDivide2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "right": 0,
                "skin": "sepLineSkin0hba627e175be4e",
                "zIndex": 1,
                "appName": "EmpDirWeb"
            }, {
                "paddingInPixel": false
            }, {});
            employeeDetailsSegDivide2.setDefaultUnit(kony.flex.DP);
            employeeDetailsSegDivide2.add();
            var employeeDetailsLabel2 = new kony.ui.Label({
                "id": "employeeDetailsLabel2",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0h6d6fa430c5346",
                "text": "WORK PHONE",
                "textStyle": {},
                "top": "12dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var employeeDetailsValue2 = new kony.ui.Label({
                "bottom": "12dp",
                "id": "employeeDetailsValue2",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0f96982f765a247",
                "text": "+1 321 449 5598",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            detailsRowContainer2.add(employeeDetailsSegDivide2, employeeDetailsLabel2, employeeDetailsValue2);
            var detailsRowContainer3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "detailsRowContainer3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox0b1a5ece8806245",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "EmpDirWeb"
            }, {
                "paddingInPixel": false
            }, {});
            detailsRowContainer3.setDefaultUnit(kony.flex.DP);
            var employeeDetailsSegDivide3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "1dp",
                "id": "employeeDetailsSegDivide3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "right": 0,
                "skin": "sepLineSkin0hba627e175be4e",
                "zIndex": 1,
                "appName": "EmpDirWeb"
            }, {
                "paddingInPixel": false
            }, {});
            employeeDetailsSegDivide3.setDefaultUnit(kony.flex.DP);
            employeeDetailsSegDivide3.add();
            var employeeDetailsLabel3 = new kony.ui.Label({
                "id": "employeeDetailsLabel3",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0h6d6fa430c5346",
                "text": "DEPARTMENT",
                "textStyle": {},
                "top": "12dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var employeeDetailsValue3 = new kony.ui.Label({
                "bottom": "12dp",
                "id": "employeeDetailsValue3",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0f96982f765a247",
                "text": "Platform Management",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            detailsRowContainer3.add(employeeDetailsSegDivide3, employeeDetailsLabel3, employeeDetailsValue3);
            var detailsRowContainer4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "detailsRowContainer4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox0b1a5ece8806245",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1,
                "appName": "EmpDirWeb"
            }, {
                "paddingInPixel": false
            }, {});
            detailsRowContainer4.setDefaultUnit(kony.flex.DP);
            var employeeDetailsSegDivide4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "1dp",
                "id": "employeeDetailsSegDivide4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "right": 0,
                "skin": "sepLineSkin0hba627e175be4e",
                "zIndex": 1,
                "appName": "EmpDirWeb"
            }, {
                "paddingInPixel": false
            }, {});
            employeeDetailsSegDivide4.setDefaultUnit(kony.flex.DP);
            employeeDetailsSegDivide4.add();
            var employeeDetailsLabel4 = new kony.ui.Label({
                "id": "employeeDetailsLabel4",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0h6d6fa430c5346",
                "text": "REPORTING TO",
                "textStyle": {},
                "top": "12dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var employeeDetailsValue4 = new kony.ui.Label({
                "bottom": "12dp",
                "id": "employeeDetailsValue4",
                "isVisible": true,
                "left": "0dp",
                "skin": "CopydefLabel0f96982f765a247",
                "text": "Ed Gross",
                "textStyle": {},
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            detailsRowContainer4.add(employeeDetailsSegDivide4, employeeDetailsLabel4, employeeDetailsValue4);
            employeeDetailsContent.add(detailsRowContainer1, detailsRowContainer2, detailsRowContainer3, detailsRowContainer4);
            detailContainer.add(detailsHeader, employeeDetailImage, employeeNameLabel, employeeTitleLabel, employeeDetailsContent);
            var sepLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "id": "sepLine",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "45%",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sepLineSkin0hba627e175be4e",
                "top": "60dp",
                "width": "2dp",
                "zIndex": 1,
                "appName": "EmpDirWeb"
            }, {
                "paddingInPixel": false
            }, {});
            sepLine.setDefaultUnit(kony.flex.DP);
            sepLine.add();
            masterContainer.add(headerContainer, listContainer, detailContainer, sepLine);
            this.breakpointResetData = {};
            this.breakpointData = {
                maxBreakpointWidth: 1366,
                "480": {
                    "listContainer": {
                        "width": {
                            "type": "string",
                            "value": "100%"
                        },
                        "segmentProps": []
                    },
                    "detailContainer": {
                        "height": {
                            "type": "string",
                            "value": "100%"
                        },
                        "isVisible": false,
                        "left": {
                            "type": "string",
                            "value": "0%"
                        },
                        "top": {
                            "type": "string",
                            "value": "0%"
                        },
                        "width": {
                            "type": "string",
                            "value": "100%"
                        },
                        "segmentProps": []
                    },
                    "detailsHeader": {
                        "isVisible": true,
                        "segmentProps": []
                    },
                    "employeeDetailImage": {
                        "top": {
                            "type": "string",
                            "value": "86dp"
                        },
                        "segmentProps": []
                    },
                    "employeeNameLabel": {
                        "top": {
                            "type": "string",
                            "value": "214dp"
                        },
                        "segmentProps": []
                    },
                    "employeeTitleLabel": {
                        "top": {
                            "type": "string",
                            "value": "259dp"
                        },
                        "segmentProps": []
                    },
                    "employeeDetailsContent": {
                        "top": {
                            "type": "string",
                            "value": "340dp"
                        },
                        "segmentProps": []
                    },
                    "sepLine": {
                        "isVisible": false,
                        "segmentProps": []
                    }
                }
            }
            this.compInstData = {}
            this.add(masterContainer);
        };
        return [{
            "addWidgets": addWidgetsfrmListDetails,
            "enabledForIdleTimeout": false,
            "id": "frmListDetails",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm",
            "onBreakpointHandler": onBreakpointHandler,
            "breakpoints": [480, 771, 1366],
            "appName": "EmpDirWeb",
            "info": {
                "kuid": "fff1be78fdf94c1c80400d1621dfacff"
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