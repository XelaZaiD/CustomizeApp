define("com/konymp/Menu/userMenuController", function() {
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
