function loadScript(url) {
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    head.appendChild(script);
}

loadScript("../scripts/gallery_view.js");
loadScript("../scripts/gallery_controller.js");