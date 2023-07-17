define(function() {
  
	return {
		/**
		 * @function
		 *
		 */
		getTableData: function() {
          alert(`👽 getTableData`);
		  this.upImage = this.view.imgUpArrow.src;
  		  this.downImage = this.view.imgDownArrow.src;
		  let __tableData__ = [[{
			"imgTempHeaderArraow": this.upImage,
			"lblLineSeperator": ".",
			"lblTempHeaderText": "First Level Item"
		}, [{
				"lblMenuItem": "Second Level Item",
				"lblSeperator": "."
			}
		]], [{
			"imgTempHeaderArraow": this.upImage,
			"lblLineSeperator": ".",
			"lblTempHeaderText": "First Level Item"
		}, [{
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
			}
		]], [{
			"imgTempHeaderArraow": this.upImage,
			"lblLineSeperator": ".",
			"lblTempHeaderText": "First Level Item"
		}, [{
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
			}
		]], [{
			"imgTempHeaderArraow": this.upImage,
			"lblLineSeperator": ".",
			"lblTempHeaderText": "First Level Item"
		}, [{
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
			}
		]]];
		  return __tableData__;
		},
      	/**
      	 * @function
      	 *
      	 */
      	onComponentPostShow:function(){
		  this.__tableData__ = this.getTableData();
          alert(`👽 onComponentPostShow __tableData__: ${JSON.stringify(this.__tableData__)}`);
          var tempData = JSON.parse(JSON.stringify(this.__tableData__));
          for(var i=0;i<this.view.segMenuItems.data.length;i++){
            	tempData[i][1] = [];
          }
          alert(`👽 onComponentPostShow - tempData: ${JSON.stringify(tempData)}`);
          this.view.segMenuItems.removeAll();
          this.view.segMenuItems.setData(tempData);
          this.view.forceLayout();

        },
      	clickedOnSectionHeader:function(sectionIndex){
          alert(`👽 clickedOnSectionHeader: ${JSON.stringify(sectionIndex)}`);
          var tempData = JSON.parse(JSON.stringify(this.view.segMenuItems.data));
          if(this.view.segMenuItems.data[sectionIndex][1].length===0){
          	tempData[sectionIndex][0].imgTempHeaderArraow = this.downImage;
          	tempData[sectionIndex][1] = this.__tableData__[sectionIndex][1];  
          }else{
            tempData[sectionIndex][0].imgTempHeaderArraow = this.upImage;
          	tempData[sectionIndex][1] = [];  
          }
          this.view.segMenuItems.removeAll();
          this.view.segMenuItems.setData(tempData);
          this.view.forceLayout();
        }
	};
});