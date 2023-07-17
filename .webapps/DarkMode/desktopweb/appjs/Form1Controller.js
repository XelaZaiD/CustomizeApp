define("userForm1Controller", {
    init: function() {
        kony.print(`👽 init`);
        this.initActions();
    },
    initActions: function() {
        kony.print(`👽 initActions`);
        let scope = this;
        /* this.view.btnPrueba.onClick = function() {
           let skinPropertiesObj = {
             "background_color": "0062ff00",
             "bg_type": "one",
             "border_color": "ffffff00",
             "border_radius": 20,
             "border_style": "custom",
             "border_type": 0,
             "border_width": 1,
             "font_color": "ffffff00",
             "font_name": "iphoneSystem",
             "font_size": 250,
             "font_style": "normal",
             "font_weight": "400",
             "forked": false,
             "wType": "Button"
           };
           kony.theme.setSkinsProperties({'sknbtnNormal':skinPropertiesObj});
           alert(`⚙⚙ En constante aprendizaje ⚙⚙`);
         };*/
        this.view.btnDarkMode.onClick = function() {
            scope.cuztomiceApplication('darkmode');
        };
        this.view.btnCustomize.onClick = function() {
            scope.setListBoxColor();
        };
        this.view.ListBoxColor.onSelection = function() {
            scope.cuztomiceApplication('customize');
        };
    },
    preShow: function() {
        kony.print(`👽 preShow`);
    },
    setListBoxColor: function() {
        let isVisibleList = this.view.ListBoxColor.isVisible;
        if (!isVisibleList) {
            this.view.ListBoxColor.isVisible = true;
        } else {
            this.view.ListBoxColor.isVisible = false;
        }
    },
    cuztomiceApplication: function(event) {
        kony.print(`👽 cuztomiceApplication`);
        let theme;
        let listColorValue = this.view.ListBoxColor.selectedKey;
        let value = this.view.ListBoxColor.masterData[listColorValue][1];
        kony.print(`👽 LisBox: ${listColorValue}. Valor: ${value}`);
        //Utilizaremos la API kony.theme Namespace
        //Paso 1: Validamos la lista de Temas disponibles.
        let themes = kony.theme.getAllThemes();
        kony.print(`👽 Posees ${themes.length} temas. Sus nombres son: ${JSON.stringify(themes)}.`);
        //Paso 2: Valido cual es el Tema actual utilizado en la app.
        var crntTheme = kony.theme.getCurrentTheme();
        kony.print(`👽 El tema actual es ${crntTheme}. Y el tipo es: ${typeof(crntTheme)}.`);
        //Paso Medio: evaluamos el tema a asignar
        event === 'customize' && listColorValue !== 0 ? theme = value : event === 'darkmode' && crntTheme !== 'DarkMode' ? theme = 'DarkMode' : theme = 'default';
        //Paso 3: Aplicamos el cambio de tema - se cambia por uno existente.
        function onsuccesscallback() {
            kony.print(`Genial, has cambiado tu tema a: ${crntTheme}`);
        }

        function onerrorcallback() {
            alert(`Ups, algo salio mal 🤔`);
        }
        kony.theme.setCurrentTheme(theme, onsuccesscallback, onerrorcallback);
        //Reset ListBox
        this.view.ListBoxColor.isVisible = false;
        this.view.ListBoxColor.selectedKey = '0';
        //Posible paso - Creamos un Theme (No esta funcionando)
        /*function onsuccesscallback() {
          alert("successfully set the theme to app");
        }
        function onerrorcallback() {
          alert("Theme is not set to the app");
        }
        kony.theme.createTheme("", "Mytheme", onsuccesscallback, onerrorcallback);*/
        this.currentTheme();
    },
    currentTheme: function() {
        var crntTheme = kony.theme.getCurrentTheme();
        if (crntTheme !== 'DarkMode') {
            this.view.btnDarkMode.text = '🌝';
        } else {
            this.view.btnDarkMode.text = '🌚';
        }
    },
    postShow: function() {
        kony.print(`👽 postShow`);
    },
});
define("Form1ControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** preShow defined for Form1 **/
    AS_Form_a9580dd7c935407eafa2046261b01a30: function AS_Form_a9580dd7c935407eafa2046261b01a30(eventobject) {
        var self = this;
        this.preShow();
    },
    /** init defined for Form1 **/
    AS_Form_bba0f5fb5ee5459faed9dae7cb822ee1: function AS_Form_bba0f5fb5ee5459faed9dae7cb822ee1(eventobject) {
        var self = this;
        this.init();
    },
    /** postShow defined for Form1 **/
    AS_Form_fe04a739e51042c78f5b4a6c01f07ee0: function AS_Form_fe04a739e51042c78f5b4a6c01f07ee0(eventobject) {
        var self = this;
        this.postShow();
    }
});
define("Form1Controller", ["userForm1Controller", "Form1ControllerActions"], function() {
    var controller = require("userForm1Controller");
    var controllerActions = ["Form1ControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
