define("com/konymp/Menu/userMenuController", function() {
    return {
        /**
         * @function
         *
         */
        getTableData: function() {
            alert(`👽 getTableData`);
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
            alert(`👽 onComponentPostShow __tableData__: ${JSON.stringify(this.__tableData__)}`);
            var tempData = JSON.parse(JSON.stringify(this.__tableData__));
            for (var i = 0; i < this.view.segMenuItems.data.length; i++) {
                tempData[i][1] = [];
            }
            alert(`👽 onComponentPostShow - tempData: ${JSON.stringify(tempData)}`);
            this.view.segMenuItems.removeAll();
            this.view.segMenuItems.setData(tempData);
            this.view.forceLayout();
        },
        clickedOnSectionHeader: function(sectionIndex) {
            alert(`👽 clickedOnSectionHeader: ${JSON.stringify(sectionIndex)}`);
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
        }
    };
});
define("com/konymp/Menu/MenuControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchStart defined for imgClose **/
    AS_Image_bbecc0a391d34a69a75f96d9a032b88f: function AS_Image_bbecc0a391d34a69a75f96d9a032b88f(eventobject, x, y) {
        var self = this;
        this.view.isVisible = false;
    },
    /** onRowClick defined for segMenuItems **/
    AS_Segment_b7978e8cec3946628a6ebca9e1f1efc3: function AS_Segment_b7978e8cec3946628a6ebca9e1f1efc3(eventobject, sectionNumber, rowNumber) {
        var self = this;
        //alert(JSON.stringify(this.__tableData__));
    },
    /** preShow defined for Menu **/
    AS_FlexContainer_c7fff14b9a1d48f28dc67d6a85ce3510: function AS_FlexContainer_c7fff14b9a1d48f28dc67d6a85ce3510(eventobject) {
        var self = this;
        //this.view.onComponentPostShow();
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
