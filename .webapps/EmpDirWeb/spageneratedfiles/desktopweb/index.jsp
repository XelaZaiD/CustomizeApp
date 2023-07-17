

<%@ page contentType="text/html; charset=UTF-8" import="java.net.URLEncoder,java.util.*,com.kony.web.WEBConstants,com.kony.web.util.WAPConfigUtility,com.kony.web.KonyAppConfig" %>
    <%
    response.setDateHeader("Expires", (new Date(0)).getTime());
    response.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, post-check=0, pre-check=0, max-age=0");
    response.setHeader("Pragma", "no-cache");
    %>


<%
    KonyAppConfig appConfig = (KonyAppConfig) application.getAttribute(WEBConstants.KONY_APP_CONFIG);
    String propertiesJSON = "";
    String headersJSON = "";
    String paramsJSON = "";
    if(appConfig!=null ){
    propertiesJSON = (String) application.getAttribute(appConfig.getAppID() + WEBConstants.THINCLIENT_PROPERTIES + "_JSON");

    headersJSON = (String) request.getAttribute("headersJSON");
    paramsJSON = (String) request.getAttribute("paramsJSON");
    }
  %>




<!DOCTYPE html>
<html >
    <head>
        
        <% String userAgent = request.getHeader("user-agent");
        if(userAgent != null && userAgent.toLowerCase().contains("trident")){%>
            <meta http-equiv="X-UA-Compatble" content="IE=edge">
        <%}%>
        
        
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>


<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>





 
   
       <script src="https://cdn.jsdelivr.net/npm/darkmode-js@1.5.7/lib/darkmode-js.min.js"></script>
   

 
   
 
   

<script type="text/javascript"> 
if (document.getElementById && document.createElement) {
    document.write("<style>html {display: none;}</style><script>if( self == top ){document.documentElement.style.display = 'block';} else {top.location = self.location;}</sc"+"ript>");
}
else {
    if (top != self) {
        top.location = self.location;
    }
}
</script>

<script type="text/javascript">
    IndexJL = 0;
</script>


 
   
 
   


    <style type="text/css" media="screen">
    .splash {
        position: absolute;
        top: 0px;
        right: 0px;
        left: 0px;
        bottom: 0px;
        
        background-color: #ffffff;
        
        animation: fadein 1.5s ease-in;
        -moz-animation: fadein 1.5s ease-in;
    }

    @-webkit-keyframes fadein
    {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    keyframes fadein
    {
        from { opacity: 0; }
        to { opacity: 1; }
    }
</style>















    </head>
    <body style = "width: 100%; margin: 0px; padding: 0px;"  aria-busy="true" aria-live="polite" aria-relevant="additions" aria-atomic="false">
        
    <input type="hidden" name="_reqHeaders" value='<%=headersJSON != null ? headersJSON : "" %>'>

    <input type="hidden" name="_reqParams" value='<%=paramsJSON != null ? paramsJSON : ""%>'>

    <input type="hidden" name="_konyAppProperties" value='<%=propertiesJSON != null ? propertiesJSON : ""%>'>



    <% Object sessionObj = request.getSession(false); %>
    <%
        if(sessionObj == null || session.getAttribute("desktopweb") == null) {
    %>
        <div id="isnewsession" style="display:none">true</div>
    <%
        session = request.getSession();
        session.setAttribute("desktopweb","desktopweb");
        }else{
    %>
        <div id="isnewsession" style="display:none">false</div>
    <%
        }
    %>


        <DIV id="splashDiv">
    <div id="splashScreen" class="splash" style="">
        
    </div>
    <script type="text/javascript">
        function loadcss() {
            var link = document.createElement('link');
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('type', 'text/css');
            link.setAttribute('href', 'desktopweb/konydesktop.css');
            var head = document.getElementsByTagName('head')[0];
            head.appendChild(link);
        }

    
            loadcss();
            function initappcache() {
                $KG["platformver"] = "desktopweb/";
                $KG["rcid"] = "spadesktopweb";
                $KG["version"] = "1.0.0";
                $KG["staticContentPath"] =  "";

                kony.appinit.initappcache();
            }
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            appStartTime = new Date().getTime();
            script.src = "desktopweb/jslib/konyinit.js";
            //onreadystatechange for IE, IE9 supports both onload and onreadystatechange.
            if(!script.addEventListener){
                    script.onreadystatechange = function(){
                            (this.readyState == 'complete' || this.readyState == 'loaded') && initappcache();
                    };
            }
            else {
                script.onload = initappcache;
            }
            head.appendChild(script);
    


    </script>
 <style>
    #JavaScriptDisabledErrorMsg { display:none; }
 </style>
 <noscript>
    <style type='text/css'>
        form {display: none !important}
        * html ul li {height:1em; vertical-align:bottom;}
        html {display : block}
        #JavaScriptDisabledErrorMsg {display:block;}
        #splashScreen_main{display:none;}
    </style>
 </noscript>
 <div id="JavaScriptDisabledErrorMsg"> To use this site, first enable your browser's JavaScript support and then refresh this page. </div>
 </DIV>

    </body>
</html>