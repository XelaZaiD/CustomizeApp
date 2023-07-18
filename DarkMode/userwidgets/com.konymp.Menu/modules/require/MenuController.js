define(function() {
  
	return {
		/**
		 * @function
		 *
		 */
		getTableData: function() {
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
          var tempData = JSON.parse(JSON.stringify(this.__tableData__));
          for(var i=0;i<this.view.segMenuItems.data.length;i++){
            	tempData[i][1] = [];
          }
          this.view.segMenuItems.removeAll();
          this.view.segMenuItems.setData(tempData);
          this.view.forceLayout();

        },
      	clickedOnSectionHeader:function(sectionIndex){
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
        },
      
      expandCollapse: function(obj){
        if(!obj) return;
        //alert(`widgets: ${JSON.stringify(obj)}`);
        let img = obj.img, row = obj.row;
        let rowVisible = this.view[row].isVisible, imgSRC = this.view[img].src;
        //alert(`img: ${imgSRC} row: ${rowVisible}`);
        
        //Hacemos visible o invisible el FlexRow
        if(!rowVisible){
          this.view[row].isVisible = true;
        }else{
          this.view[row].isVisible = false;
        }
        //Cambiamos la imagen de Expandir o Colapsar
        if(imgSRC === 'rectangle_7_copy_1_4.png'){
          this.view[img].src = 'arrow_down.png';
        }else{
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
      addOrRemoveFavorite: function(obj){
        //alert(`obj: ${JSON.stringify(obj)}`);
        
        // addOrRemove: true para add / addOrRemove: false para remove
        let addOrRemove = obj.status, widgetOption = obj.widget;
        let flxOptionVisible = this.view[widgetOption].isVisible;
        //alert(`flxOptionVisible: ${flxOptionVisible} widgetOption: ${widgetOption} addOrRemove: ${addOrRemove}`);
        
        if(addOrRemove){
          //add
          if(widgetOption === 'flxOption1'){
            this.view[widgetOption].isVisible = false;//Quitamos del Menu
            this.view.flxOptionFavoritie1.isVisible = true;//Agregamos en Favoritos
          }else if(widgetOption === 'flxOption2'){
            this.view[widgetOption].isVisible = false;//Quitamos del Menu
            this.view.flxOptionFavoritie2.isVisible = true;//Agregamos en Favoritos
          }else if(widgetOption === 'flxOption3'){
            this.view[widgetOption].isVisible = false;//Quitamos del Menu
            this.view.flxOptionFavoritie3.isVisible = true;//Agregamos en Favoritos
          }
          this.view.flxFavorities.setVisibility(true);
            
        }
        
        if(!addOrRemove){
          //remove
          if(widgetOption === 'flxOptionFavoritie1'){
            this.view[widgetOption].isVisible = false;//Quitamos de Favoritos
            this.view.flxOption1.isVisible = true;//Agregamos en Menu
          }else if(widgetOption === 'flxOptionFavoritie2'){
            this.view[widgetOption].isVisible = false;//Quitamos de Favoritos
            this.view.flxOption2.isVisible = true;//Agregamos en Menu
          }else if(widgetOption === 'flxOptionFavoritie3'){
            this.view[widgetOption].isVisible = false;//Quitamos de Favoritos
            this.view.flxOption3.isVisible = true;//Agregamos en Menu
          }
          
          if(!this.view.flxOptionFavoritie1.isVisible && !this.view.flxOptionFavoritie2.isVisible && !this.view.flxOptionFavoritie3.isVisible){
            this.view.flxFavorities.setVisibility(false);
          }
        }
      },
    };
});