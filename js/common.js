var buttonTop = document.getElementById("buttonTop"), supportOpacity = buttonTop ? typeof buttonTop.style.opacity !== "undefined" : null, timeoutButtonTop;
if (buttonTop) {
    window.onscroll = function() {
        if (getScrollOffsets().y > 100) {
            if (supportOpacity) {
                clearTimeout(timeoutButtonTop);
                if (buttonTop.style.display === "none")
                    buttonTop.style.display = "block";
                if (parseFloat(buttonTop.style.opacity) !== 1)
                    timeoutButtonTop = Widget.fadeIn("buttonTop", 100, function(t) {
                        timeoutButtonTop = t
                    }, function(t) {
                        timeoutButtonTop = null
                    })
            } else
                buttonTop.style.display = "block"
        } else {
            if (supportOpacity) {
                clearTimeout(timeoutButtonTop);
                fadeOutButtonTop()
            } else
                buttonTop.style.display = "none"
        }
    }
    ;
    if (supportOpacity)
        fadeOutButtonTop();
    else
        buttonTop.style.display = "none"
}
for (var i = 0; i < document.images.length; i++)
    if (document.images[i].naturalWidth > document.images[i].width)
        Widget.addImageViewer(document.images[i]);
function fadeOutButtonTop() {
    timeoutButtonTop = Widget.fadeOut("buttonTop", 250, function(t) {
        timeoutButtonTop = t
    }, function(t) {
        timeoutButtonTop = null;
        t.style.display = "none"
    })
}
function getScrollOffsets() {
    if (window.pageXOffset !== null)
        return {
            x: window.pageXOffset,
            y: window.pageYOffset
        };
    if (document.compatMode === "CSS1Compat")
        return {
            x: window.document.documentElement.scrollLeft,
            y: window.document.documentElement.scrollTop
        };
    return {
        x: window.document.body.scrollLeft,
        y: window.document.body.scrollTop
    }
}
