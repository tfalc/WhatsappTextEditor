var Widget = {
    addImageViewer: function(e) {
        if (e.parentElement.tagName.match(/^button$/i))
            return;
        var t = navigator.appVersion.match("MSIE \\d{1,}") ? parseFloat(navigator.appVersion.substr(navigator.appVersion.indexOf("MSIE") + 5)) : -1;
        if (t === -1 || t > 6) {
            var n = "imageViewer"
              , i = n + "Image"
              , o = n + "Outer"
              , a = n + "Caption"
              , d = n + "ButtonClose"
              , r = "div#" + n + "{" + (t > -1 && t < 9 ? "background-color:black;" : "background-color:black;background-color:rgba(0,0,0,0.9);") + "display:none;height:100%;left:0;overflow:auto;padding:6pt;position:fixed;top:0;width:100%;z-index:1;}\n" + "div#" + a + "{display:block;color:white;margin:auto;padding-top:8pt;text-align:center;}\n" + "div#" + o + "{overflow-x:auto;}" + "img#" + i + "{display:block;margin:auto;max-width:inherit !important}\n" + "span#" + d + "{border:solid 2pt gray;border-radius:4pt;color:gray;cursor:default;font-size:18pt;font-weight:400;height:20pt;line-height:16pt;position:fixed;right:4pt;text-align:center;top:4pt;vertical-align:middle;width:20pt;}";
            if (!document.getElementById(n)) {
                var l = document.createElement("style");
                l.type = "text/css";
                if (l.styleSheet)
                    l.styleSheet.cssText = r;
                else
                    l.appendChild(document.createTextNode(r));
                (document.head || document.getElementsByTagName("head")[0]).appendChild(l);
                var f = document.createElement("div");
                f.setAttribute("id", n);
                f.innerHTML = '<span id="' + d + '" onclick="javascript: document.getElementById(\'' + n + "').style.display = 'none';\">×</span>" + '<div id="' + o + '"><img id="' + i + '"></div><div id="' + a + '"></div>';
                document.body.appendChild(f)
            }
            e.onclick = function() {
                document.getElementById(n).style.display = "block";
                document.getElementById(o).style.backgroundColor = e.className.indexOf("transparent") !== -1 ? "white" : "";
                document.getElementById(i).src = e.src;
                document.getElementById(a).innerHTML = e.alt
            }
        } else
            e.onclick = function() {
                window.open(e.src, "_blank")
            }
            ;
        e.style.cursor = "pointer";
        e.style.MozTransition = "0.3s";
        e.style.WebkitTransition = "0.3s";
        e.onmouseover = function() {
            e.style.opacity = ".75"
        }
        ;
        e.onmouseout = function() {
            e.style.opacity = "1"
        }
    },
    copyToClipboard: function(e) {
        if (typeof e === "string")
            e = document.getElementById(e);
        var t = e.selectionStart
          , n = e.selectionEnd;
        if (t === n || typeof t === "undefined" || typeof n === "undefined")
            e.select();
        try {
            document.execCommand("copy")
        } catch (e) {
            alert("Automatic copy failed! Please copy manually!")
        }
    },
    fadeIn: function(o, a, d, r) {
        if (typeof o === "string")
            o = document.getElementById(o);
        if (!o || typeof o.style.opacity === "undefined")
            return;
        if (!a)
            a = 500;
        var l = (new Date).getTime();
        return f();
        function f() {
            var e = (new Date).getTime() - l
              , t = e / a;
            if (t < 1) {
                var n = Math.sqrt(t);
                o.style.opacity = String(n);
                var i = setTimeout(f, Math.min(25, a - e));
                if (typeof d === "function")
                    d(i);
                return i
            } else {
                o.style.opacity = "1";
                if (typeof r === "function")
                    r(o)
            }
        }
    },
    fadeOut: function(o, a, d, r) {
        if (typeof o === "string")
            o = document.getElementById(o);
        if (!o || typeof o.style.opacity === "undefined")
            return;
        if (!a)
            a = 500;
        var l = (new Date).getTime();
        return f();
        function f() {
            var e = (new Date).getTime() - l
              , t = e / a;
            if (t < 1) {
                var n = 1 - Math.sqrt(t);
                o.style.opacity = String(n);
                var i = setTimeout(f, Math.min(25, a - e));
                if (typeof d === "function")
                    d(i);
                return i
            } else {
                o.style.opacity = "0";
                if (typeof r === "function")
                    r(o)
            }
        }
    },
    focusSelect: function(e) {
        if (typeof e === "string")
            e = document.getElementById(e);
        e.focus();
        e.select()
    },
    hideShow: function(e, t, n) {
        if (typeof e === "string")
            e = document.getElementById(e);
        e.style.display = e.style.display ? "" : "none";
        if (typeof t === "function" && e.style.display)
            t();
        else if (typeof n === "function" && !e.style.display)
            n()
    },
    swapInnerHTML: function(e, t) {
        if (typeof e === "string")
            e = document.getElementById(e);
        if (typeof t === "string")
            t = document.getElementById(t);
        if (!e || !t || typeof e.innerHTML === "undefined" || typeof t.innerHTML === "undefined")
            return;
        var n = e.innerHTML;
        e.innerHTML = t.innerHTML;
        t.innerHTML = n
    },
    Radio: {
        disable: function(e) {
            if (typeof radio === "string")
                e = document.getElementsByName(e);
            for (var t = 0; t < e.length; t++)
                e[t].disabled = true
        },
        enable: function(e) {
            if (typeof radio === "string")
                e = document.getElementsByName(e);
            for (var t = 0; t < e.length; t++)
                e[t].disabled = false
        },
        getOption: function(e) {
            if (typeof e === "undefined")
                return;
            var t = e.value;
            if (typeof t === "undefined")
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n].checked)
                        t = e[n].value;
            return t
        },
        setOption: function(e, t) {
            if (typeof e === "undefined" || typeof t === "undefined")
                return;
            if (typeof e.value !== "undefined")
                e.value = t;
            else
                for (var n = 0, i = e.length; n < i; n++)
                    e[n].checked = e[n].value === t
        }
    }
};
