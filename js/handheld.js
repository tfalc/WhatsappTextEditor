function handheldCheck(e) {
    if (typeof window.orientation !== "undefined" || navigator.userAgent.indexOf("IEMobile") !== -1) {
        var n = document.createElement("link");
        n.rel = "stylesheet";
        n.type = "text/css";
        n.href = e;
        document.getElementsByTagName("head")[0].appendChild(n)
    }
}