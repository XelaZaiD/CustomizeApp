define(function() {
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
})