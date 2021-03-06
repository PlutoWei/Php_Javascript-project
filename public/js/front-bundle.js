function alertChangesNotSaved() {
    if (updatedEditTableContent) {
        alert(ChangesNotSavedText);
        var a = window.event,
            b = navigator.userAgent;
        if (-1 != b.indexOf("Chrome")) return areYouSureText;
        if (-1 != b.indexOf("Apple")) return "";
        if (-1 == b.indexOf("MSIE") && !a) return !1;
        a.returnValue = ""
    }
}

function inspect(a, b, c) {
    var d, e, f;
    if (null == c && (c = 0), null == b && (b = 1), 1 > b) return '<font color="red">Error: Levels number must be > 0</font>';
    if (null == a) return '<font color="red">Error: Object <b>NULL</b></font>';
    d = "<ul>";
    for (property in a) try {
        e = typeof a[property], d += "<li>(" + e + ") " + property + (null == a[property] ? ": <b>null</b>" : "") + "</li>", "object" == e && null != a[property] && c + 1 < b && (d += inspect(a[property], b, c + 1))
    } catch (a) {
        f = "string" == typeof a ? a : a.message ? a.message : a.description ? a.description : "Unknown", d += '<li><font color="red">(Error) ' + property + ": " + f + "</font></li>"
    }
    return d + "</ul>"
}

function OpenWin(a, b, c, d, e, f, g) {
    "" == d && (d = "justawindow"), "" == b && (b = 600), "" == c && (c = 700), "" != e && "yes" != e || (e = "yes"), "" == f ? f = "no" : "yes" == f && (f = 1);
    var h = "";
    return g && "dialog" != g ? xx = yy = 0 : ("dialog" == g && (h = ",dependent=yes,dialog=yes,minimizable=no,modal=yes,alwaysRaised=yes"), ww = screen.width, hh = screen.height, xx = b > ww ? 0 : Math.round((ww - b) / 2) - 5, yy = c > hh ? 0 : Math.round((hh - c) / 2) - 15, 0 > yy && (yy = 0), 0 > xx && (xx = 0)), options = "location=no, toolbar=no, status=no, left=" + xx + ", top=" + yy + ", menubar=no, height=" + c + ", width=" + b + ", scrollbars =" + e + ", resizable=" + f + h, file = a, window.open(file, d, options)
}

function numberFormat(a) {
    var b, c, d = "";
    if (a = "" + a, -1 != a.indexOf(".") ? (b = a.substring(0, a.indexOf(".")), c = a.substring(a.indexOf(".") + 1, a.indexOf(".") + 3)) : (b = a, c = 0), 4 > b.length) return 0 != c && 1 == c.length && (a += "0"), a;
    for (a = b.length - 1; 0 <= a; a--) d = 0 == (b.length - 1 - a) % 3 && a < b.length - 1 ? b.substring(a, a + 1) + "," + d : b.substring(a, a + 1) + d;
    return 0 != c && (d += "." + c, 1 == c.length && (d += "0")), d
}

function searchFldValidation(a, b) {
    var c = document.getElementById(a);
    return b || (b = 2), !c || c.value.length < b ? 0 : 1
}

function fldValidation(a) {
    if (!a) return !0;
    var b = 0,
        c = ""; - 1 < document.location.href.indexOf("&sendtofriend=1") && (document.getElementById("Send_To_Email") ? (b = 1, c = "Send_To_Email") : document.getElementById("fldVal1") && (b = 1, c = "fldVal1")), (a.ownerpass || a.pass) && (void 0 !== $("#ownerpass").attr("style") ? ownerpassDisplay = $("#ownerpass").attr("style") : ownerpassDisplay = $("#pass").attr("style"), void 0 !== $("#ownerpass").val() ? ownerpassVal = $("#ownerpass").val() : ownerpassVal = $("#pass").val(), "" == ownerpassVal && "" != ownerpassDisplay && void 0 != ownerpassDisplay && (delete a.ownerpass, delete a.pass));
    for (var d in a)
        if (d) {
            var e = document.getElementById(d);
            if (!e && document.getElementById(d + "_1")) {
                for (var f = 1, g = 0, e = document.getElementById(d + "_" + f); e && 0 == g;) e.checked && (g = 1), f++, e = document.getElementById(d + "_" + f);
                if (0 == g) return alert(a[d]), !1
            } else if (e) {
                if (!e.value.replace(/[ \t]/g, "")) {
                    alert(a[d]);
                    try {
                        e.focus()
                    } catch (a) {}
                    return !1
                }
                if (("email" == e.name || b && (e.name == c || "senderemail" == e.name)) && (1 > e.value.indexOf(".") || 1 > e.value.indexOf("@"))) {
                    alert(a[d]);
                    try {
                        e.focus()
                    } catch (a) {}
                    return !1
                }
            }
        } return !0
}

function getFileName(a) {
    var b, c, d;
    for (c = b = a.length; 0 < c; c--)
        if ("/" == (d = a.substring(c, c + 1)) || "\\" == d) return a.substring(c + 1, b)
}

function updateLinkedSelects(a, b, c, d) {
    var e = 0,
        f = document.getElementById(a);
    if (f) {
        for (a = f.options.length; 0 < a; a--) f.options[a] = null;
        for (a = 0; a < b.length; a++) b[a] && (d && d[b[a]] ? f.options[++e] = new Option(d[b[a]], b[a]) : f.options[++e] = new Option(b[a], b[a]));
        c || (c = 0), f.options && f.options[c] && (f.options[c].selected = !0)
    }
}

function addImageFlashEffect(a, b) {
    var c = document.getElementById(a);
    if (c) {
        var d = document.createElement("div"),
            e = parseInt(c.offsetWidth),
            f = parseInt(c.offsetHeight);
        d.id = a + "flashObjLocator", d.style.position = "absolute", d.style.top = c.style.top, d.style.left = c.style.left, d.style.zIndex = "100", d.style.width = e + "px", d.style.height = f + "px", c.parentNode.insertBefore(d, c), swfobject.embedSWF(b, a + "flashObjLocator", e, f, "9.0.0.0", "/gfx/expressInstall.swf", {}, {
            quality: "high",
            wmode: "transparent"
        }, {
            style: "position:absolute;zIndex:100;top:" + parseInt(c.style.top) + "left:" + parseInt(c.style.left) + ";"
        })
    }
}

function addToDocOnload(a) {
    a && (docOnLoadBuf += "\n" + a + "\n")
}

function docOnloadRunBuf() {
    docOnLoadBuf && eval(docOnLoadBuf)
}

function setImageUrl(a) {
    document.getElementById(imageTagId).value = a
}

function in_array(a, b, c) {
    var d = "";
    if (c) {
        for (d in b)
            if (b[d] === a) return !0
    } else
        for (d in b)
            if (b[d] == a) return !0;
    return !1
}

function validateInput(a) {
    var b = a.keyCode ? a.keyCode : a.charCode,
        c = a.which,
        d = [8, 9, 37, 39, 46, 190],
        e = [0, 8, 46];
    48 <= b && 57 >= b || in_array(b, d) && (void 0 == c || in_array(c, e)) || (a.preventDefault ? a.preventDefault() : event.returnValue = !1)
}

function fileValidate(a, b) {
    if (0 < b.length) {
        var c = ".(" + b.join("|") + ")";
        return re = RegExp(c, "i"), re.test(a)
    }
    return !1
}

function fileErrMsg(a) {
    a = a.join(" or ."), alert("Format incorrect - allowed extentions: ." + a)
}

function addParentCat() {
    var a = document.getElementById("bcatid");
    if (oldIndex = a.selectedIndex, a && void 0 !== a) {
        currentIndex && (a.options[currentIndex].innerHTML = originalText), currentIndex = a.selectedIndex, originalText = a.options[a.selectedIndex].innerHTML;
        for (var b = a.selectedIndex; 0 < b; b--)
            if (a.options[b].disabled) {
                a.options[a.selectedIndex].innerHTML = a.options[b].innerHTML + a.options[a.selectedIndex].innerHTML;
                break
            } a.blur()
    }
}

function onSelectClick() {
    var a = document.getElementById("bcatid");
    currentIndex && a.selectedIndex != oldIndex && (a.options[currentIndex].innerHTML = originalText)
}

function validateGoogleAnalyticsLoginDetails() {
    return null == document.getElementById("glogin") && null == document.getElementById("gpassword") || "" == document.getElementById("glogin").value && "" == document.getElementById("gpassword").value || "-1" != document.getElementById("gtableId").value || (alert(gamess), !1)
}

function selectState() {
    var a = $("#country").val();
    $.ajax({
        url: "index.php?sid=46&lang=en&item=1&act=users&ajax=state",
        data: {
            country: a
        },
        success: function(a) {
            $("#state").html(a), null == $("#state").val() ? $("#state").attr("disabled", "disabled") : $("#state").attr("disabled", "")
        }
    })
}

function checkSelected() {
    "1" == document.getElementById("numOfImages").value ? document.getElementById("effects").disabled = !0 : document.getElementById("effects").disabled = !1
}

function EnvokeMobile(a, b, c) {
    $.post("wpservice/controller.php", {
        service: a,
        siteid: b,
        sitelanguage: c
    }, function(a) {
        alert(a)
    })
}

function bodyAutoScroll() {
    $("body").css("overflow-y", "auto")
}

function MobileLogin(a, b, c, d) {
    $.post("wpservice/controller.php", {
        service: "mobile_login",
        siteid: c,
        sitelanguage: d,
        typeLogin: a
    }, function(a) {
        a.search("Error"), -1 == a.search("Error") ? ($.colorbox({
            width: "100%",
            top: "10px",
            height: "750px",
            iframe: !0,
            showClose: !0,
            overlayClose: !1,
            href: b + "/Perspectiva.html?" + a,
            onClosed: bodyAutoScroll
        }), 750 < window.innerHeight && $("body").css("overflow-y", "hidden")) : alert(a)
    })
}

function showVarsTag(a) {
    var b = document.getElementById("varsTag" + a);
    if (a = document.getElementById("varsSpan" + a), b && a)
        if ("none" == a.style.display) {
            for (a.style.left = b.offsetLeft + "px", a.style.top = b.offsetTop + 24 + "px", i = 1; so = document.getElementById("varsSpan" + i);) so.style.display = "none", i++;
            a.style.display = ""
        } else a.style.display = "none"
}

function switchMode(a, b) {
    "text" == b ? eAL.toggle_off(a) : eAL.toggle_on(a)
}

function getDependecies() {
    jQuery.getScript("https://s7.addthis.com/js/250/addthis_widget.js#pubid=xa-4f951f716a48b403")
}

function buildSocialEntry(a, b, c) {
    var d = [];
    if ("" != b) {
        switch (a) {
            case "facebook":
                d.push('<a addthis:userid="' + b + '" class="addthis_button_facebook_follow" title="' + c + '">'), d.push("</a>");
                break;
            case "googleplus":
                d.push('<a class="addthis_button_google_plusone_share" addthis:userid="' + b + '" title="' + c + '">'), d.push("</a>");
                break;
            case "linkedin":
                d.push('<a class="addthis_button_linkedin_follow" addthis:userid="' + b + '" title="' + c + '">'), d.push("</a>");
                break;
            case "linkedincompany":
                d.push('<a class="addthis_button_linkedin_follow" addthis:usertype="company" addthis:userid="' + b + '" title="' + c + '">'), d.push("</a>");
                break;
            case "twitter":
                d.push('<a class="addthis_button_twitter_follow" addthis:userid="' + b + '" title="' + c + '">'), d.push("</a>")
        }
        $("#mySocialList").append(d.join("\n"))
    }
}

function getInternetExplorerVersion() {
    var a = -1;
    if ("Microsoft Internet Explorer" == navigator.appName) {
        var b = navigator.userAgent;
        null != new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})").exec(b) && (a = parseFloat(RegExp.$1))
    }
    return a
}
document.all && !document.getElementById && (document.getElementById = function(a) {
    return document.all(a)
}, document.getElementsByTagName = function(a) {
    return document.all.tags(a)
}), document.layers && (document.getElementById = function(a) {
    return document.layers[a]
});
var imageTagId, currentIndex, oldIndex, originalText, fldReqs, fldReqsSec, fldReqsSecKey, docOnLoadBuf = "";
window.addEventListener ? window.addEventListener("load", docOnloadRunBuf, !1) : window.attachEvent("onload", docOnloadRunBuf), window.focus(), $(document).ready(function() {
        $(".diy-folder").click(function(a) {
            a.preventDefault()
        })
    }),
    function(a, b, c, d) {
        var e = a(b);
        a.fn.lazyload = function(f) {
            function g() {
                var b = 0;
                i.each(function() {
                    var c = a(this);
                    if (!j.skip_invisible || c.is(":visible"))
                        if (a.abovethetop(this, j) || a.leftofbegin(this, j));
                        else if (a.belowthefold(this, j) || a.rightoffold(this, j)) {
                        if (++b > j.failure_limit) return !1
                    } else c.trigger("appear"), b = 0
                })
            }
            var h, i = this,
                j = {
                    threshold: 3e3,
                    failure_limit: 0,
                    event: "scroll",
                    effect: "show",
                    container: b,
                    data_attribute: "original",
                    skip_invisible: !1,
                    appear: null,
                    load: null,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                };
            return f && (d !== f.failurelimit && (f.failure_limit = f.failurelimit, delete f.failurelimit), d !== f.effectspeed && (f.effect_speed = f.effectspeed, delete f.effectspeed), a.extend(j, f)), h = j.container === d || j.container === b ? e : a(j.container), 0 === j.event.indexOf("scroll") && h.bind(j.event, function() {
                return g()
            }), this.each(function() {
                var b = this,
                    c = a(b);
                b.loaded = !1, c.attr("src") !== d && !1 !== c.attr("src") || c.is("img") && c.attr("src", j.placeholder), c.one("appear", function() {
                    if (!this.loaded) {
                        if (j.appear) {
                            var d = i.length;
                            j.appear.call(b, d, j)
                        }
                        a("<img />").bind("load", function() {
                            var d = c.attr("data-" + j.data_attribute);
                            c.hide(), c.is("img") ? c.attr("src", d) : c.css("background-image", "url('" + d + "')"), c[j.effect](j.effect_speed), b.loaded = !0;
                            var e = a.grep(i, function(a) {
                                return !a.loaded
                            });
                            if (i = a(e), j.load) {
                                var f = i.length;
                                j.load.call(b, f, j)
                            }
                        }).attr("src", c.attr("data-" + j.data_attribute))
                    }
                }), 0 !== j.event.indexOf("scroll") && c.bind(j.event, function() {
                    b.loaded || c.trigger("appear")
                })
            }), e.bind("resize", function() {
                g()
            }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && e.bind("pageshow", function(b) {
                b.originalEvent && b.originalEvent.persisted && i.each(function() {
                    a(this).trigger("appear")
                })
            }), a(c).ready(function() {
                g()
            }), this
        }, a.belowthefold = function(c, f) {
            return (f.container === d || f.container === b ? (b.innerHeight ? b.innerHeight : e.height()) + e.scrollTop() : a(f.container).offset().top + a(f.container).height()) <= a(c).offset().top - f.threshold
        }, a.rightoffold = function(c, f) {
            return (f.container === d || f.container === b ? e.width() + e.scrollLeft() : a(f.container).offset().left + a(f.container).width()) <= a(c).offset().left - f.threshold
        }, a.abovethetop = function(c, f) {
            return (f.container === d || f.container === b ? e.scrollTop() : a(f.container).offset().top) >= a(c).offset().top + f.threshold + a(c).height()
        }, a.leftofbegin = function(c, f) {
            return (f.container === d || f.container === b ? e.scrollLeft() : a(f.container).offset().left) >= a(c).offset().left + f.threshold + a(c).width()
        }, a.inviewport = function(b, c) {
            return !(a.rightoffold(b, c) || a.leftofbegin(b, c) || a.belowthefold(b, c) || a.abovethetop(b, c))
        }, a.extend(a.expr[":"], {
            "below-the-fold": function(b) {
                return a.belowthefold(b, {
                    threshold: 0
                })
            },
            "above-the-top": function(b) {
                return !a.belowthefold(b, {
                    threshold: 0
                })
            },
            "right-of-screen": function(b) {
                return a.rightoffold(b, {
                    threshold: 0
                })
            },
            "left-of-screen": function(b) {
                return !a.rightoffold(b, {
                    threshold: 0
                })
            },
            "in-viewport": function(b) {
                return a.inviewport(b, {
                    threshold: 0
                })
            },
            "above-the-fold": function(b) {
                return !a.belowthefold(b, {
                    threshold: 0
                })
            },
            "right-of-fold": function(b) {
                return a.rightoffold(b, {
                    threshold: 0
                })
            },
            "left-of-fold": function(b) {
                return !a.rightoffold(b, {
                    threshold: 0
                })
            }
        })
    }(jQuery, window, document), $(function() {
        $("img.lazy").lazyload()
    });
var efu = efu || {};
efu.w = efu.w || {}, "undefined" != typeof diy && (diy.efu = efu), efu.config = {
    log: {
        console: 0,
        server: 5
    }
}, efu.addLog = function(a, b) {
    if (b = b || efu.config.log, a.log = function() {}, a.debug = function() {}, a.info = function() {}, a.warn = function() {}, a.err = function() {}, window.console && window.console.log && b.console) {
        var c = function(a) {
            return a >= b.console
        };
        a.log = function() {
            if (!c(1)) return !1;
            try {
                console.log.apply(console, arguments)
            } catch (b) {
                var a = [].slice.call(arguments);
                console.log(a)
            }
            return !0
        }, a.debug = function() {
            if (!c(2)) return !1;
            try {
                console.debug.apply(console, arguments)
            } catch (b) {
                var a = [].slice.call(arguments);
                a.unshift("DEBUG: "), console.log(a)
            }
            return !0
        }, a.info = function() {
            if (!c(3)) return !1;
            try {
                console.info.apply(console, arguments)
            } catch (b) {
                var a = [].slice.call(arguments);
                a.unshift("INFO: "), console.log(a)
            }
            return !0
        }, a.warn = function() {
            if (!c(4)) return !1;
            try {
                console.warn.apply(console, arguments)
            } catch (b) {
                var a = [].slice.call(arguments);
                a.unshift("WARNING: "), console.log(a)
            }
            return !0
        }, a.err = function() {
            if (!c(5)) return !1;
            try {
                1 === arguments.length ? console.error.apply(console, ["", arguments[0]]) : console.error.apply(console, Array.prototype.slice.call(arguments, 0))
            } catch (b) {
                var a = [].slice.call(arguments);
                a.unshift("ERROR: "), console.log(a)
            }
            return !0
        }
    }
}, efu.addLog(efu), efu.error = {
    events: function(a, b) {},
    simple: function(a, b) {
        efu.error("EFU: ERROR: simple/unknown: [" + a + "]: ", b)
    }
}, efu.events = {
    dc: function(a, b, c) {
        if (efu.log("EFU: EVENTS: dc: ", arguments), !b || !b.CONTAINER) return !1;
        var d = "dc_event";
        void 0 !== c && void 0 !== b.WID && (d = d + "." + c + "." + b.WID, efu.log("EFU: EVENTS: dc: final event name for off/on: ", d), efu.mediator().off(d));
        var e = $("#" + b.CONTAINER).css("width");
        return efu.mediator().on(d, a, [b]), e && 0 !== parseInt(e) && efu.mediator().trigger("dc_event"), !0
    },
    resize: function(a, b, c) {
        efu.log("EFU: EVENTS: resize: ", arguments);
        var d = "resize";
        void 0 !== c && void 0 !== b.WID && (d = d + "." + c + "." + b.WID, efu.log("EFU: EVENTS: resize: final event name for off/on: ", d), efu.mediator().off(d)), efu.mediator().on(d, a, [b])
    },
    rotate: function(a, b, c) {
        efu.log("EFU: EVENTS: rotate: ", arguments);
        var d = "rotate";
        void 0 !== c && void 0 !== b.WID && (d = d + "." + c + "." + b.WID, efu.log("EFU: EVENTS: rotate: final event name for off/on: ", d), efu.mediator().off(d)), efu.mediator().on(d, a, [b])
    }
}, efu.loader = function() {
    var a = function() {
        var a = {
                loader: null,
                text: null
            },
            b = function(a) {
                diy.log("EFU: LOADER: change: ", this, this.$.loader.css("display"), a), this.$.loader && ("none" === this.$.loader.css("display") && efu.loader.show(), this.$.text.html(a))
            },
            c = function(a) {
                efu.log("EFU: LOADER: show: ", this, this.$.loader.css("display"), a), this.$.loader && (this.$.text.html(a), this.$.loader.show())
            },
            d = function() {
                efu.log("EFU: LOADER: hide: ", this, this.$.loader.css("display")), this.$.loader && (this.$.loader.hide(), this.$.text.html(""))
            };
        return function() {
            var b = [];
            b.push('<div id="loader" class="ui-widget-overlay" style="position:fixed; width:100%; height:100%; padding:0; z-index:9999; background:#fff; opacity:0.6;">'), b.push('\t<div class=".ui-widget-overlay" style="width:100%; height:100%; display:table;">'), b.push('\t\t<div style="display: table-cell; vertical-align: middle; text-align:center; margin:auto;">'), b.push('\t\t\t<img src="/gfx/ajax-loader.gif" alt="" /><span id="loader-text"></span>'), b.push("\t\t</div>"), b.push("\t\t</div>"), b.push("</div>"), a.loader = $(b.join("\n")).prependTo("body"), a.text = a.loader.find("#loader-text")
        }(), {
            $: a,
            change: b,
            hide: d,
            show: c
        }
    }();
    return efu.loader = function() {
        return a
    }, efu.loader()
}, efu.mediator = function() {
    var a = $({});
    return efu.mediator = function() {
        return {
            off: function() {
                a.off.apply(a, arguments)
            },
            rm: function() {
                a.off.apply(a, arguments)
            },
            on: function(b, c, d) {
                a.on.apply(a, [b, function() {
                    c.apply(window, d)
                }])
            },
            one: function(b, c, d) {
                a.one.apply(a, [b, function() {
                    c.apply(window, d)
                }])
            },
            trigger: function() {
                a.trigger.apply(a, arguments)
            }
        }
    }, efu.mediator()
}, efu.fbInit = function() {
    efu.fbInited || (efu.fbInited = !0, FB.init({
        appId: $("meta[name='fb:app_id']").attr("content"),
        xfbml: 0,
        version: "v2.3"
    }))
}, efu.t = function(a) {
    return efu.i18n.translate(a)
}, efu.i18n = {
    list: {},
    add: function(a, b) {
        return this.isAdded || (this.list[a] = b), this
    },
    addList: function(a, b) {
        var c, d;
        for (c in b) d = b[c], this.update(a + "_" + c, d);
        return this
    },
    isAdded: function(a) {
        return void 0 === this.list[a]
    },
    log: function() {
        return efu.log("i18n: ", this.list), this
    },
    translate: function(a) {
        return this.isAdded ? this.list[a] : ""
    },
    update: function(a, b) {
        return this.list[a] = b, this
    }
}, efu.i18n.addList("general", {
    loading: "Loading...",
    test: "Just a test"
}).addList("validate", {
    urlNoHttp: "Please specify the correct domain for your documents",
    multicheckbox: "Please check at least one checkbox"
}).log(), efu.utils = {
    isWidthChanged: function(a) {
        if (!a) return !1;
        var b = $("#" + a);
        if (0 === b.length) return !1;
        var c = b.parent().width();
        return 0 !== c && (c !== b.data("efuWidth") && (b.data("efuWidth", c), c))
    }
}, efu.widgets = {
    inlineJs: function(a, b) {
        efu.info("EFU: INLINE-JS: ", a, b);
        var c = efu.w[a];
        efu.log("EFU: INLINE-JS: handler: ", $.isFunction(c), c), $.isFunction(c) && c(b)
    }
}, efu.w.iCaptchasIds = {}, efu.w.widgets = [], efu.w.resetRecaptcha = function(a) {
    var b = efu.w.iCaptchasIds[a];
    grecaptcha.reset(b)
};
var onloadCallback = function() {
    iCaptchasIds = {}, efu.w.widgets.forEach(function(a) {
        if (!a.PREVIEW) {
            var b = grecaptcha.render("send_" + a.CAPTCHA_ID, {
                callback: function(b) {
                    form = $("form.captcha_form_" + a.CAPTCHA_ID), form.submit()
                }
            });
            iCaptchasIds[a.CAPTCHA_ID] = b
        }
    }), efu.w.iCaptchasIds = iCaptchasIds
};
efu.w.setValidator = function(a, b, c, d) {
        a.validate({
            ignore: ".ignore",
            rules: d,
            submitHandler: b,
            errorElement: "div",
            errorPlacement: function(a, b) {
                "checkbox" == b.attr("type") ? a.appendTo(b.closest("li")) : a.insertAfter(b)
            },
            invalidHandler: function() {
                efu.w.resetRecaptcha(c)
            }
        })
    },
    function(a, b, c) {
        var d = c(a),
            e = c(b),
            f = c.fancybox = function() {
                f.open.apply(this, arguments)
            },
            g = !1,
            h = null,
            i = void 0 !== b.createTouch;
        currentWidth = c(a).width(), currentWidth > 767 ? (setWidth = 450, setHeight = 300) : (setWidth = 350, setHeight = 300), c.extend(f, {
            version: "2.0.5",
            defaults: {
                padding: 15,
                margin: 20,
                width: setWidth,
                height: setHeight,
                minWidth: 100,
                minHeight: 100,
                maxWidth: 9999,
                maxHeight: 9999,
                autoSize: !1,
                autoResize: !i,
                autoCenter: !i,
                fitToView: !0,
                aspectRatio: !1,
                topRatio: .5,
                fixed: !(c.browser.msie && c.browser.version <= 6 || i),
                scrolling: "auto",
                wrapCSS: "fancybox-default",
                arrows: !0,
                closeBtn: !0,
                closeClick: !1,
                nextClick: !1,
                mouseWheel: !0,
                autoPlay: !1,
                playSpeed: 3e3,
                preload: 3,
                modal: !1,
                loop: !0,
                ajax: {
                    dataType: "html",
                    headers: {
                        "X-fancyBox": !0
                    }
                },
                keys: {
                    next: [13, 32, 34, 39, 40],
                    prev: [8, 33, 37, 38],
                    close: [27]
                },
                index: 0,
                type: null,
                href: null,
                content: null,
                title: null,
                tpl: {
                    wrap: '<div class="fancybox-wrap"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div>',
                    image: '<img class="fancybox-image" src="{href}" alt="" />',
                    iframe: '<iframe class="fancybox-iframe" name="fancybox-frame{rnd}" frameborder="0" hspace="0"' + (c.browser.msie ? ' allowtransparency="true"' : "") + "></iframe>",
                    swf: '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="wmode" value="transparent" /><param name="allowfullscreen" value="true" /><param name="allowscriptaccess" value="always" /><param name="movie" value="{href}" /><embed src="{href}" type="application/x-shockwave-flash" allowfullscreen="true" allowscriptaccess="always" width="100%" height="100%" wmode="transparent"></embed></object>',
                    error: '<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',
                    closeBtn: '<div title="Close" class="fancybox-item fancybox-close"></div>',
                    next: '<a title="Next" class="fancybox-nav fancybox-next"><span></span></a>',
                    prev: '<a title="Previous" class="fancybox-nav fancybox-prev"><span></span></a>'
                },
                openEffect: "fade",
                openSpeed: 250,
                openEasing: "swing",
                openOpacity: !0,
                openMethod: "zoomIn",
                closeEffect: "fade",
                closeSpeed: 250,
                closeEasing: "swing",
                closeOpacity: !0,
                closeMethod: "zoomOut",
                nextEffect: "elastic",
                nextSpeed: 300,
                nextEasing: "swing",
                nextMethod: "changeIn",
                prevEffect: "elastic",
                prevSpeed: 300,
                prevEasing: "swing",
                prevMethod: "changeOut",
                helpers: {
                    overlay: {
                        speedIn: 0,
                        speedOut: 300,
                        opacity: .8,
                        css: {
                            cursor: "pointer"
                        },
                        closeClick: !0
                    },
                    title: {
                        type: "outside"
                    }
                },
                onCancel: c.noop,
                beforeLoad: c.noop,
                afterLoad: c.noop,
                beforeShow: c.noop,
                afterShow: c.noop,
                beforeClose: c.noop,
                afterClose: c.noop
            },
            group: {},
            opts: {},
            coming: null,
            current: null,
            isOpen: !1,
            isOpened: !1,
            wrap: null,
            outer: null,
            inner: null,
            player: {
                timer: null,
                isActive: !1
            },
            ajaxLoad: null,
            imgPreload: null,
            transitions: {},
            helpers: {},
            open: function(a, b) {
                f.close(!0), a && !c.isArray(a) && (a = a instanceof c ? c(a).get() : [a]), f.isActive = !0, f.opts = c.extend(!0, {}, f.defaults, b), c.isPlainObject(b) && void 0 !== b.keys && (f.opts.keys = !!b.keys && c.extend({}, f.defaults.keys, b.keys)), f.group = a, f._start(f.opts.index || 0)
            },
            cancel: function() {
                f.coming && !1 === f.trigger("onCancel") || (f.coming = null, f.hideLoading(), f.ajaxLoad && f.ajaxLoad.abort(), f.ajaxLoad = null, f.imgPreload && (f.imgPreload.onload = f.imgPreload.onabort = f.imgPreload.onerror = null))
            },
            close: function(a) {
                f.cancel(), f.current && !1 !== f.trigger("beforeClose") && (f.unbindEvents(), !f.isOpen || a && !0 === a[0] ? (c(".fancybox-wrap").stop().trigger("onReset").remove(), f._afterZoomOut()) : (f.isOpen = f.isOpened = !1, c(".fancybox-item, .fancybox-nav").remove(), f.wrap.stop(!0).removeClass("fancybox-opened"), f.inner.css("overflow", "hidden"), f.transitions[f.current.closeMethod]()))
            },
            play: function(a) {
                var b = function() {
                        clearTimeout(f.player.timer)
                    },
                    d = function() {
                        b(), f.current && f.player.isActive && (f.player.timer = setTimeout(f.next, f.current.playSpeed))
                    },
                    e = function() {
                        b(), c("body").unbind(".player"), f.player.isActive = !1, f.trigger("onPlayEnd")
                    },
                    g = function() {
                        f.current && (f.current.loop || f.current.index < f.group.length - 1) && (f.player.isActive = !0, c("body").bind({
                            "afterShow.player onUpdate.player": d,
                            "onCancel.player beforeClose.player": e,
                            "beforeLoad.player": b
                        }), d(), f.trigger("onPlayStart"))
                    };
                f.player.isActive || a && !1 === a[0] ? e() : g()
            },
            next: function() {
                f.current && f.jumpto(f.current.index + 1)
            },
            prev: function() {
                f.current && f.jumpto(f.current.index - 1)
            },
            jumpto: function(a) {
                f.current && (a = parseInt(a, 10), f.group.length > 1 && f.current.loop && (a >= f.group.length ? a = 0 : a < 0 && (a = f.group.length - 1)), void 0 !== f.group[a] && (f.cancel(), f._start(a)))
            },
            reposition: function(a) {
                f.isOpen && f.wrap.css(f._getPosition(a))
            },
            update: function(a) {
                f.isOpen && (g || (h = setTimeout(function() {
                    var b = f.current;
                    g && (g = !1, b && ((b.autoResize || a && "orientationchange" === a.type) && (b.autoSize && (f.inner.height("auto"), b.height = f.inner.height()), f._setDimension(), b.canGrow && f.inner.height("auto")), b.autoCenter && f.reposition(), f.trigger("onUpdate")))
                }, 100)), g = !0)
            },
            toggle: function() {
                f.isOpen && (f.current.fitToView = !f.current.fitToView, f.update())
            },
            hideLoading: function() {
                c("#fancybox-loading").remove()
            },
            showLoading: function() {
                f.hideLoading(), c('<div id="fancybox-loading"><div></div></div>').click(f.cancel).appendTo("body")
            },
            getViewport: function() {
                return {
                    x: d.scrollLeft(),
                    y: d.scrollTop(),
                    w: d.width(),
                    h: d.height()
                }
            },
            unbindEvents: function() {
                f.wrap && f.wrap.unbind(".fb"), e.unbind(".fb"), d.unbind(".fb")
            },
            bindEvents: function() {
                var a = f.current,
                    b = a.keys;
                a && (d.bind("resize.fb, orientationchange.fb", f.update), b && e.bind("keydown.fb", function(a) {
                    var d;
                    a.ctrlKey || a.altKey || a.shiftKey || a.metaKey || !(c.inArray(a.target.tagName.toLowerCase(), ["input", "textarea", "select", "button"]) < 0) || (d = a.keyCode, c.inArray(d, b.close) > -1 ? (f.close(), a.preventDefault()) : c.inArray(d, b.next) > -1 ? (f.next(), a.preventDefault()) : c.inArray(d, b.prev) > -1 && (f.prev(), a.preventDefault()))
                }), c.fn.mousewheel && a.mouseWheel && f.group.length > 1 && f.wrap.bind("mousewheel.fb", function(a, b) {
                    var d = c(a.target).get(0);
                    (0 === d.clientHeight || d.scrollHeight === d.clientHeight && d.scrollWidth === d.clientWidth) && (a.preventDefault(), f[b > 0 ? "prev" : "next"]())
                }))
            },
            trigger: function(a) {
                var b, d = f[c.inArray(a, ["onCancel", "beforeLoad", "afterLoad"]) > -1 ? "coming" : "current"];
                if (d) {
                    if (c.isFunction(d[a]) && (b = d[a].apply(d, Array.prototype.slice.call(arguments, 1))), !1 === b) return !1;
                    d.helpers && c.each(d.helpers, function(b, e) {
                        e && void 0 !== f.helpers[b] && c.isFunction(f.helpers[b][a]) && f.helpers[b][a](e, d)
                    }), c.event.trigger(a + ".fb")
                }
            },
            isImage: function(a) {
                return a && a.match(/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i)
            },
            isSWF: function(a) {
                return a && a.match(/\.(swf)(.*)?$/i)
            },
            _start: function(a) {
                var b, d, e, g, h = {},
                    i = f.group[a] || null;
                if (i && (i.nodeType || i instanceof c) && (b = !0, c.metadata && (h = c(i).metadata())), h = c.extend(!0, {}, f.opts, {
                        index: a,
                        element: i
                    }, c.isPlainObject(i) ? i : h), c.each(["href", "title", "content", "type"], function(a, d) {
                        h[d] = f.opts[d] || b && c(i).attr(d) || h[d] || null
                    }), "number" == typeof h.margin && (h.margin = [h.margin, h.margin, h.margin, h.margin]), h.modal && c.extend(!0, h, {
                        closeBtn: !1,
                        closeClick: !1,
                        nextClick: !1,
                        arrows: !1,
                        mouseWheel: !1,
                        keys: null,
                        helpers: {
                            overlay: {
                                css: {
                                    cursor: "auto"
                                },
                                closeClick: !1
                            }
                        }
                    }), f.coming = h, !1 === f.trigger("beforeLoad")) return void(f.coming = null);
                e = h.type, d = h.href || i, e || (b && !(g = c(i).data("fancybox-type")) && i.className && (g = i.className.match(/fancybox\.(\w+)/), e = g ? g[1] : null), e || "string" !== c.type(d) || (f.isImage(d) ? e = "image" : f.isSWF(d) ? e = "swf" : d.match(/^#/) && (e = "inline")), e || (e = b ? "inline" : "html"), h.type = e), "inline" === e || "html" === e ? (h.content || (h.content = "inline" === e ? c("string" === c.type(d) ? d.replace(/.*(?=#[^\s]+$)/, "") : d) : i), h.content && h.content.length || (e = null)) : d || (e = null), h.group = f.group, h.isDom = b, h.href = d, "image" === e ? f._loadImage() : "ajax" === e ? f._loadAjax() : e ? f._afterLoad() : f._error("type")
            },
            _error: function(a) {
                f.hideLoading(), c.extend(f.coming, {
                    type: "html",
                    autoSize: !0,
                    minHeight: 0,
                    hasError: a,
                    content: f.coming.tpl.error
                }), f._afterLoad()
            },
            _loadImage: function() {
                f.imgPreload = new Image, f.imgPreload.onload = function() {
                    this.onload = this.onerror = null, f.coming.width = this.width, f.coming.height = this.height, f._afterLoad()
                }, f.imgPreload.onerror = function() {
                    this.onload = this.onerror = null, f._error("image")
                }, f.imgPreload.src = f.coming.href, f.imgPreload.width || f.showLoading()
            },
            _loadAjax: function() {
                f.showLoading(), f.ajaxLoad = c.ajax(c.extend({}, f.coming.ajax, {
                    url: f.coming.href,
                    error: function(a, b) {
                        "abort" !== b ? f._error("ajax", a) : f.hideLoading()
                    },
                    success: function(a, b) {
                        "success" === b && (f.coming.content = a, f._afterLoad())
                    }
                }))
            },
            _preloadImages: function() {
                var a, b, d = f.group,
                    e = f.current,
                    g = d.length;
                if (e.preload && !(d.length < 2))
                    for (var h = 1; h <= Math.min(e.preload, g - 1); h++) a = d[(e.index + h) % g], (b = c(a).attr("href") || a) && ((new Image).src = b)
            },
            _afterLoad: function() {
                if (f.hideLoading(), !f.coming || !1 === f.trigger("afterLoad", f.current)) return void(f.coming = !1);
                f.isOpened ? (c(".fancybox-item").remove(), f.wrap.stop(!0).removeClass("fancybox-opened"), f.inner.css("overflow", "hidden"), f.transitions[f.current.prevMethod]()) : (c(".fancybox-wrap").stop().trigger("onReset").remove(), f.trigger("afterClose")), f.unbindEvents(), f.isOpen = !1, f.current = f.coming, f.wrap = c(f.current.tpl.wrap).addClass("fancybox-" + (i ? "mobile" : "desktop") + " fancybox-tmp " + f.current.wrapCSS).appendTo("body"), f.outer = c(".fancybox-outer", f.wrap).css("padding", f.current.padding + "px"), f.inner = c(".fancybox-inner", f.wrap), f._setContent()
            },
            _setContent: function() {
                var a, b, d = f.current,
                    e = d.type;
                switch (e) {
                    case "inline":
                    case "ajax":
                    case "html":
                        a = d.content, a instanceof c && (a = a.show().detach(), a.parent().hasClass("fancybox-inner") && a.parents(".fancybox-wrap").trigger("onReset").remove(), c(f.wrap).bind("onReset", function() {
                            a.appendTo("body").hide()
                        })), d.autoSize && (b = c('<div class="fancybox-tmp ' + f.current.wrapCSS + '"></div>').appendTo("body").append(a), d.width = b.width(), d.height = b.height(), b.width(f.current.width), b.height() > d.height && (b.width(d.width + 1), d.width = b.width(), d.height = b.height()), a = b.contents().detach(), b.remove());
                        break;
                    case "image":
                        a = d.tpl.image.replace("{href}", d.href), d.aspectRatio = !0;
                        break;
                    case "swf":
                        a = d.tpl.swf.replace(/\{width\}/g, d.width).replace(/\{height\}/g, d.height).replace(/\{href\}/g, d.href)
                }
                if ("iframe" === e) {
                    if (a = c(d.tpl.iframe.replace("{rnd}", (new Date).getTime())).attr("scrolling", d.scrolling), d.scrolling = "auto", d.autoSize) return a.width(d.width), f.showLoading(), void a.data("ready", !1).appendTo(f.inner).bind({
                        onCancel: function() {
                            c(this).unbind(), f._afterZoomOut()
                        },
                        load: function() {
                            var a, b = c(this);
                            try {
                                this.contentWindow.document.location && (a = b.contents().find("body").height() + 12, b.height(a))
                            } catch (a) {
                                d.autoSize = !1
                            }!1 === b.data("ready") ? (f.hideLoading(), a && (f.current.height = a), f._beforeShow(), b.data("ready", !0)) : a && f.update()
                        }
                    }).attr("src", d.href);
                    a.attr("src", d.href)
                } else "image" !== e && "swf" !== e || (d.autoSize = !1, d.scrolling = "visible");
                f.inner.append(a), f._beforeShow()
            },
            _beforeShow: function() {
                f.coming = null, f.trigger("beforeShow"), f._setDimension(), f.wrap.hide().removeClass("fancybox-tmp"), f.bindEvents(), f._preloadImages(), f.transitions[f.isOpened ? f.current.nextMethod : f.current.openMethod]()
            },
            _setDimension: function() {
                var a, b, d, e = f.wrap,
                    g = f.outer,
                    h = f.inner,
                    i = f.current,
                    j = f.getViewport(),
                    k = i.margin,
                    l = 2 * i.padding,
                    m = i.width,
                    n = i.height,
                    o = i.maxWidth,
                    p = i.maxHeight,
                    q = i.minWidth,
                    r = i.minHeight;
                if (j.w -= k[1] + k[3], j.h -= k[0] + k[2], m.toString().indexOf("%") > -1 && (m = (j.w - l) * parseFloat(m) / 100), n.toString().indexOf("%") > -1 && (n = (j.h - l) * parseFloat(n) / 100), a = m / n, m += l, n += l, i.fitToView && (o = Math.min(j.w, o), p = Math.min(j.h, p)), i.aspectRatio ? (m > o && (m = o, n = (m - l) / a + l), n > p && (n = p, m = (n - l) * a + l), m < q && (m = q, n = (m - l) / a + l), n < r && (n = r, m = (n - l) * a + l)) : (m = Math.max(q, Math.min(m, o)), n = Math.max(r, Math.min(n, p))), m = Math.round(m), n = Math.round(n), c(e.add(g).add(h)).width("auto").height("auto"), h.width(m - l).height(n - l), e.width(m), b = e.height(), m > o || b > p)
                    for (;
                        (m > o || b > p) && m > q && b > r;) n -= 10, i.aspectRatio ? (m = Math.round((n - l) * a + l)) < q && (m = q, n = (m - l) / a + l) : m -= 10, h.width(m - l).height(n - l), e.width(m), b = e.height();
                i.dim = {
                    width: m,
                    height: b
                }, i.canGrow = i.autoSize && n > r && n < p, i.canShrink = !1, i.canExpand = !1, m - l < i.width || n - l < i.height ? i.canExpand = !0 : (m > j.w || b > j.h) && m > q && n > r && (i.canShrink = !0), d = b - l, f.innerSpace = d - h.height(), f.outerSpace = d - g.height()
            },
            _getPosition: function(a) {
                var b = f.current,
                    c = f.getViewport(),
                    d = b.margin,
                    e = f.wrap.width() + d[1] + d[3],
                    g = f.wrap.height() + d[0] + d[2],
                    h = {
                        position: "absolute",
                        top: d[0] + c.y,
                        left: d[3] + c.x
                    };
                return b.fixed && (!a || !1 === a[0]) && g <= c.h && e <= c.w && (h = {
                    position: "fixed",
                    top: d[0],
                    left: d[3]
                }), h.top = Math.ceil(Math.max(h.top, h.top + (c.h - g) * b.topRatio)) + "px", h.left = Math.ceil(Math.max(h.left, h.left + .5 * (c.w - e))) + "px", h
            },
            _afterZoomIn: function() {
                var a = f.current,
                    b = a.scrolling;
                f.isOpen = f.isOpened = !0, f.wrap.addClass("fancybox-opened").css("overflow", "visible"), f.update(), f.inner.css("overflow", "yes" === b ? "scroll" : "no" === b ? "hidden" : b), (a.closeClick || a.nextClick) && f.inner.css("cursor", "pointer").bind("click.fb", a.nextClick ? f.next : f.close), a.closeBtn && c(a.tpl.closeBtn).appendTo(f.outer).bind("click.fb", f.close), a.arrows && f.group.length > 1 && ((a.loop || a.index > 0) && c(a.tpl.prev).appendTo(f.inner).bind("click.fb", f.prev), (a.loop || a.index < f.group.length - 1) && c(a.tpl.next).appendTo(f.inner).bind("click.fb", f.next)), f.trigger("afterShow"), f.opts.autoPlay && !f.player.isActive && (f.opts.autoPlay = !1, f.play())
            },
            _afterZoomOut: function() {
                f.trigger("afterClose"), f.wrap.trigger("onReset").remove(), c.extend(f, {
                    group: {},
                    opts: {},
                    current: null,
                    isActive: !1,
                    isOpened: !1,
                    isOpen: !1,
                    wrap: null,
                    outer: null,
                    inner: null
                })
            }
        }), f.transitions = {
            getOrigPosition: function() {
                var a, b = f.current,
                    d = b.element,
                    e = b.padding,
                    g = c(b.orig),
                    h = {},
                    i = 50,
                    j = 50;
                return !g.length && b.isDom && c(d).is(":visible") && (g = c(d).find("img:first"), g.length || (g = c(d))), g.length ? (h = g.offset(), g.is("img") && (i = g.outerWidth(), j = g.outerHeight())) : (a = f.getViewport(), h.top = a.y + .5 * (a.h - j), h.left = a.x + .5 * (a.w - i)), h = {
                    top: Math.ceil(h.top - e) + "px",
                    left: Math.ceil(h.left - e) + "px",
                    width: Math.ceil(i + 2 * e) + "px",
                    height: Math.ceil(j + 2 * e) + "px"
                }
            },
            step: function(a, b) {
                var c, d, e;
                "width" !== b.prop && "height" !== b.prop || (d = e = Math.ceil(a - 2 * f.current.padding), "height" === b.prop && (c = (a - b.start) / (b.end - b.start), b.start > b.end && (c = 1 - c), d -= f.innerSpace * c, e -= f.outerSpace * c), f.inner[b.prop](d), f.outer[b.prop](e))
            },
            zoomIn: function() {
                var a, b, d = f.wrap,
                    e = f.current,
                    g = e.dim;
                "elastic" === e.openEffect ? (b = c.extend({}, g, f._getPosition(!0)), delete b.position, a = this.getOrigPosition(), e.openOpacity && (a.opacity = 0, b.opacity = 1), f.outer.add(f.inner).width("auto").height("auto"), d.css(a).show(), d.animate(b, {
                    duration: e.openSpeed,
                    easing: e.openEasing,
                    step: this.step,
                    complete: f._afterZoomIn
                })) : (d.css(c.extend({}, g, f._getPosition())), "fade" === e.openEffect ? d.fadeIn(e.openSpeed, f._afterZoomIn) : (d.show(), f._afterZoomIn()))
            },
            zoomOut: function() {
                var a, b = f.wrap,
                    c = f.current;
                "elastic" === c.closeEffect ? ("fixed" === b.css("position") && b.css(f._getPosition(!0)), a = this.getOrigPosition(), c.closeOpacity && (a.opacity = 0), b.animate(a, {
                    duration: c.closeSpeed,
                    easing: c.closeEasing,
                    step: this.step,
                    complete: f._afterZoomOut
                })) : b.fadeOut("fade" === c.closeEffect ? c.closeSpeed : 0, f._afterZoomOut)
            },
            changeIn: function() {
                var a, b = f.wrap,
                    c = f.current;
                "elastic" === c.nextEffect ? (a = f._getPosition(!0), a.opacity = 0, a.top = parseInt(a.top, 10) - 200 + "px", b.css(a).show().animate({
                    opacity: 1,
                    top: "+=200px"
                }, {
                    duration: c.nextSpeed,
                    easing: c.nextEasing,
                    complete: f._afterZoomIn
                })) : (b.css(f._getPosition()), "fade" === c.nextEffect ? b.hide().fadeIn(c.nextSpeed, f._afterZoomIn) : (b.show(), f._afterZoomIn()))
            },
            changeOut: function() {
                var a = f.wrap,
                    b = f.current,
                    d = function() {
                        c(this).trigger("onReset").remove()
                    };
                a.removeClass("fancybox-opened"), "elastic" === b.prevEffect ? a.animate({
                    opacity: 0,
                    top: "+=200px"
                }, {
                    duration: b.prevSpeed,
                    easing: b.prevEasing,
                    complete: d
                }) : a.fadeOut("fade" === b.prevEffect ? b.prevSpeed : 0, d)
            }
        }, f.helpers.overlay = {
            overlay: null,
            update: function() {
                var a, f, g;
                this.overlay.width(0).height(0), c.browser.msie ? (f = Math.max(b.documentElement.scrollWidth, b.body.scrollWidth), g = Math.max(b.documentElement.offsetWidth, b.body.offsetWidth), a = f < g ? d.width() : f) : a = e.width(), this.overlay.width(a).height(e.height())
            },
            beforeShow: function(a) {
                this.overlay || (a = c.extend(!0, {
                    speedIn: "fast",
                    closeClick: !0,
                    opacity: 1,
                    css: {
                        background: "black"
                    }
                }, a), this.overlay = c('<div id="fancybox-overlay"></div>').css(a.css).appendTo("body"), this.update(), a.closeClick && this.overlay.bind("click.fb", f.close), d.bind("resize.fb", c.proxy(this.update, this)), this.overlay.fadeTo(a.speedIn, a.opacity))
            },
            onUpdate: function() {
                this.update()
            },
            afterClose: function(a) {
                this.overlay && this.overlay.fadeOut(a.speedOut || 0, function() {
                    c(this).remove()
                }), this.overlay = null
            }
        }, f.helpers.title = {
            beforeShow: function(a) {
                var b, d = f.current.title;
                d && (b = c('<div class="fancybox-title fancybox-title-' + a.type + '-wrap">' + c("<div/>").text(d).html() + "</div>").appendTo("body"), "float" === a.type && (b.width(b.width()), b.wrapInner('<span class="child"></span>'), f.current.margin[2] += Math.abs(parseInt(b.css("margin-bottom"), 10))), b.appendTo("over" === a.type ? f.inner : "outside" === a.type ? f.wrap : f.outer))
            }
        }, c.fn.fancybox = function(a) {
            var b, d = c(this),
                g = this.selector || "",
                h = function(e) {
                    var h = this,
                        i = "rel",
                        j = h[i],
                        k = b;
                    e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault(), j || (i = "data-fancybox-group", j = c(h).attr("data-fancybox-group")), j && "" !== j && "nofollow" !== j && (h = g.length ? c(g) : d, h = h.filter("[" + i + '="' + j + '"]'), k = h.index(this)), a.index = k, f.open(h, a))
                };
            return a = a || {}, b = a.index || 0, g ? e.undelegate(g, "click.fb-start").delegate(g, "click.fb-start", h) : d.unbind("click.fb-start").bind("click.fb-start", h), this
        }
    }(window, document, jQuery);
var base64 = {};
base64.PADCHAR = "=", base64.ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", base64.makeDOMException = function() {
        try {
            return new DOMException(DOMException.INVALID_CHARACTER_ERR)
        } catch (b) {
            var a = new Error("DOM Exception 5");
            return a.code = a.number = 5, a.name = a.description = "INVALID_CHARACTER_ERR", a.toString = function() {
                return "Error: " + a.name + ": " + a.message
            }, a
        }
    }, base64.getbyte64 = function(a, b) {
        var c = base64.ALPHA.indexOf(a.charAt(b));
        if (-1 === c) throw base64.makeDOMException();
        return c
    }, base64.decode = function(a) {
        a = "" + a;
        var b, c, d, e = base64.getbyte64,
            f = a.length;
        if (0 === f) return a;
        if (f % 4 != 0) throw base64.makeDOMException();
        b = 0, a.charAt(f - 1) === base64.PADCHAR && (b = 1, a.charAt(f - 2) === base64.PADCHAR && (b = 2), f -= 4);
        var g = [];
        for (c = 0; c < f; c += 4) d = e(a, c) << 18 | e(a, c + 1) << 12 | e(a, c + 2) << 6 | e(a, c + 3), g.push(String.fromCharCode(d >> 16, d >> 8 & 255, 255 & d));
        switch (b) {
            case 1:
                d = e(a, c) << 18 | e(a, c + 1) << 12 | e(a, c + 2) << 6, g.push(String.fromCharCode(d >> 16, d >> 8 & 255));
                break;
            case 2:
                d = e(a, c) << 18 | e(a, c + 1) << 12, g.push(String.fromCharCode(d >> 16))
        }
        return g.join("")
    }, base64.getbyte = function(a, b) {
        var c = a.charCodeAt(b);
        if (c > 255) throw base64.makeDOMException();
        return c
    }, base64.encode = function(a) {
        if (1 !== arguments.length) throw new SyntaxError("Not enough arguments");
        var b, c, d = base64.PADCHAR,
            e = base64.ALPHA,
            f = base64.getbyte,
            g = [];
        a = "" + a;
        var h = a.length - a.length % 3;
        if (0 === a.length) return a;
        for (b = 0; b < h; b += 3) c = f(a, b) << 16 | f(a, b + 1) << 8 | f(a, b + 2), g.push(e.charAt(c >> 18)), g.push(e.charAt(c >> 12 & 63)), g.push(e.charAt(c >> 6 & 63)), g.push(e.charAt(63 & c));
        switch (a.length - h) {
            case 1:
                c = f(a, b) << 16, g.push(e.charAt(c >> 18) + e.charAt(c >> 12 & 63) + d + d);
                break;
            case 2:
                c = f(a, b) << 16 | f(a, b + 1) << 8, g.push(e.charAt(c >> 18) + e.charAt(c >> 12 & 63) + e.charAt(c >> 6 & 63) + d)
        }
        return g.join("")
    },
    function(a) {
        a.extend(a.fn, {
            validate: function(b) {
                if (!this.length) return void(b && b.debug && window.console && console.warn("nothing selected, can't validate, returning nothing"));
                var c = a.data(this[0], "validator");
                return c || (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.validateDelegate(":submit", "click", function(b) {
                    c.settings.submitHandler && (c.submitButton = b.target), a(b.target).hasClass("cancel") && (c.cancelSubmit = !0)
                }), this.submit(function(b) {
                    function d() {
                        var d;
                        return !c.settings.submitHandler || (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(c.submitButton.value).appendTo(c.currentForm)), c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), !1)
                    }
                    return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
                })), c)
            },
            valid: function() {
                if (a(this[0]).is("form")) return this.validate().form();
                var b = !0,
                    c = a(this[0].form).validate();
                return this.each(function() {
                    b &= c.element(this)
                }), b
            },
            removeAttrs: function(b) {
                var c = {},
                    d = this;
                return a.each(b.split(/\s/), function(a, b) {
                    c[b] = d.attr(b), d.removeAttr(b)
                }), c
            },
            rules: function(b, c) {
                var d = this[0];
                if (b) {
                    var e = a.data(d.form, "validator").settings,
                        f = e.rules,
                        g = a.validator.staticRules(d);
                    switch (b) {
                        case "add":
                            a.extend(g, a.validator.normalizeRule(c)), f[d.name] = g, c.messages && (e.messages[d.name] = a.extend(e.messages[d.name], c.messages));
                            break;
                        case "remove":
                            if (!c) return delete f[d.name], g;
                            var h = {};
                            return a.each(c.split(/\s/), function(a, b) {
                                h[b] = g[b], delete g[b]
                            }), h
                    }
                }
                var i = a.validator.normalizeRules(a.extend({}, a.validator.metadataRules(d), a.validator.classRules(d), a.validator.attributeRules(d), a.validator.staticRules(d)), d);
                if (i.required) {
                    var j = i.required;
                    delete i.required, i = a.extend({
                        required: j
                    }, i)
                }
                return i
            }
        }), a.extend(a.expr[":"], {
            blank: function(b) {
                return !a.trim("" + b.value)
            },
            filled: function(b) {
                return !!a.trim("" + b.value)
            },
            unchecked: function(a) {
                return !a.checked
            }
        }), a.validator = function(b, c) {
            this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
        }, a.validator.format = function(b, c) {
            return 1 === arguments.length ? function() {
                var c = a.makeArray(arguments);
                return c.unshift(b), a.validator.format.apply(this, c)
            } : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function(a, c) {
                b = b.replace(new RegExp("\\{" + a + "\\}", "g"), c)
            }), b)
        }, a.extend(a.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusInvalid: !0,
                errorContainer: a([]),
                errorLabelContainer: a([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(a, b) {
                    this.lastActive = a, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(a)).hide())
                },
                onfocusout: function(a, b) {
                    this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
                },
                onkeyup: function(a, b) {
                    9 === b.which && "" === this.elementValue(a) || (a.name in this.submitted || a === this.lastActive) && this.element(a)
                },
                onclick: function(a, b) {
                    a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
                },
                highlight: function(b, c, d) {
                    "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
                },
                unhighlight: function(b, c, d) {
                    "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
                }
            },
            setDefaults: function(b) {
                a.extend(a.validator.defaults, b)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: a.validator.format("Please enter no more than {0} characters."),
                minlength: a.validator.format("Please enter at least {0} characters."),
                rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
                range: a.validator.format("Please enter a value between {0} and {1}."),
                max: a.validator.format("Please enter a value less than or equal to {0}."),
                min: a.validator.format("Please enter a value greater than or equal to {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function b(b) {
                        var c = a.data(this[0].form, "validator"),
                            d = "on" + b.type.replace(/^validate/, "");
                        c.settings[d] && c.settings[d].call(c, this[0], b)
                    }
                    this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var c = this.groups = {};
                    a.each(this.settings.groups, function(b, d) {
                        a.each(d.split(/\s/), function(a, d) {
                            c[d] = b
                        })
                    });
                    var d = this.settings.rules;
                    a.each(d, function(b, c) {
                        d[b] = a.validator.normalizeRule(c)
                    }), a(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", b).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
                },
                form: function() {
                    return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                    return this.valid()
                },
                element: function(b) {
                    b = this.validationTargetFor(this.clean(b)), this.lastElement = b, this.prepareElement(b), this.currentElements = a(b);
                    var c = !1 !== this.check(b);
                    return c ? delete this.invalid[b.name] : this.invalid[b.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), c
                },
                showErrors: function(b) {
                    if (b) {
                        a.extend(this.errorMap, b), this.errorList = [];
                        for (var c in b) this.errorList.push({
                            message: b[c],
                            element: this.findByName(c)[0]
                        });
                        this.successList = a.grep(this.successList, function(a) {
                            return !(a.name in b)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(a) {
                    var b = 0;
                    for (var c in a) b++;
                    return b
                },
                hideErrors: function() {
                    this.addWrapper(this.toHide).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (a) {}
                },
                findLastActive: function() {
                    var b = this.lastActive;
                    return b && 1 === a.grep(this.errorList, function(a) {
                        return a.element.name === b.name
                    }).length && b
                },
                elements: function() {
                    var b = this,
                        c = {};
                    return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                        return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in c || !b.objectLength(a(this).rules())) && (c[this.name] = !0, !0)
                    })
                },
                clean: function(b) {
                    return a(b)[0]
                },
                errors: function() {
                    var b = this.settings.errorClass.replace(" ", ".");
                    return a(this.settings.errorElement + "." + b, this.errorContext)
                },
                reset: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(a) {
                    this.reset(), this.toHide = this.errorsFor(a)
                },
                elementValue: function(b) {
                    var c = a(b).attr("type"),
                        d = a(b).val();
                    return "radio" === c || "checkbox" === c ? a('input[name="' + a(b).attr("name") + '"]:checked').val() : "string" == typeof d ? d.replace(/\r/g, "") : d
                },
                check: function(b) {
                    b = this.validationTargetFor(this.clean(b));
                    var c, d = a(b).rules(),
                        e = !1,
                        f = this.elementValue(b);
                    for (var g in d) {
                        var h = {
                            method: g,
                            parameters: d[g]
                        };
                        try {
                            if ("dependency-mismatch" === (c = a.validator.methods[g].call(this, f, b, h.parameters))) {
                                e = !0;
                                continue
                            }
                            if (e = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                            if (!c) return this.formatAndAdd(b, h), !1
                        } catch (a) {
                            throw this.settings.debug && window.console && console.log("exception occured when checking element " + b.id + ", check the '" + h.method + "' method", a), a
                        }
                    }
                    if (!e) return this.objectLength(d) && this.successList.push(b), !0
                },
                customMetaMessage: function(b, c) {
                    if (a.metadata) {
                        var d = this.settings.meta ? a(b).metadata()[this.settings.meta] : a(b).metadata();
                        return d && d.messages && d.messages[c]
                    }
                },
                customDataMessage: function(b, c) {
                    return a(b).data("msg-" + c.toLowerCase()) || b.attributes && a(b).attr("data-msg-" + c.toLowerCase())
                },
                customMessage: function(a, b) {
                    var c = this.settings.messages[a];
                    return c && (c.constructor === String ? c : c[b])
                },
                findDefined: function() {
                    for (var a = 0; a < arguments.length; a++)
                        if (void 0 !== arguments[a]) return arguments[a]
                },
                defaultMessage: function(b, c) {
                    return this.findDefined(this.customMessage(b.name, c), this.customDataMessage(b, c), this.customMetaMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
                },
                formatAndAdd: function(b, c) {
                    var d = this.defaultMessage(b, c.method),
                        e = /\$?\{(\d+)\}/g;
                    "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), this.errorList.push({
                        message: d,
                        element: b
                    }), this.errorMap[b.name] = d, this.submitted[b.name] = d
                },
                addWrapper: function(a) {
                    return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
                },
                defaultShowErrors: function() {
                    var a, b;
                    for (a = 0; this.errorList[a]; a++) {
                        var c = this.errorList[a];
                        this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message)
                    }
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                    if (this.settings.unhighlight)
                        for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return a(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(b, c) {
                    var d = this.errorsFor(b);
                    d.length ? (d.removeClass(this.settings.validClass).addClass(this.settings.errorClass), d.attr("generated") && d.html(c)) : (d = a("<" + this.settings.errorElement + "/>").attr({
                        for: this.idOrName(b),
                        generated: !0
                    }).addClass(this.settings.errorClass).html(c || ""), this.settings.wrapper && (d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b))), !c && this.settings.success && (d.text(""), "string" == typeof this.settings.success ? d.addClass(this.settings.success) : this.settings.success(d, b)), this.toShow = this.toShow.add(d)
                },
                errorsFor: function(b) {
                    var c = this.idOrName(b);
                    return this.errors().filter(function() {
                        return a(this).attr("for") === c
                    })
                },
                idOrName: function(a) {
                    return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
                },
                validationTargetFor: function(a) {
                    return this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]), a
                },
                checkable: function(a) {
                    return /radio|checkbox/i.test(a.type)
                },
                findByName: function(b) {
                    return a(this.currentForm).find('[name="' + b + '"]')
                },
                getLength: function(b, c) {
                    switch (c.nodeName.toLowerCase()) {
                        case "select":
                            return a("option:selected", c).length;
                        case "input":
                            if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                    }
                    return b.length
                },
                depend: function(a, b) {
                    return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
                },
                dependTypes: {
                    boolean: function(a, b) {
                        return a
                    },
                    string: function(b, c) {
                        return !!a(b, c.form).length
                    },
                    function: function(a, b) {
                        return a(b)
                    }
                },
                optional: function(b) {
                    var c = this.elementValue(b);
                    return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
                },
                startRequest: function(a) {
                    this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
                },
                stopRequest: function(b, c) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(b) {
                    return a.data(b, "previousValue") || a.data(b, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(b, "remote")
                    })
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(b, c) {
                b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
            },
            classRules: function(b) {
                var c = {},
                    d = a(b).attr("class");
                return d && a.each(d.split(" "), function() {
                    this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
                }), c
            },
            attributeRules: function(b) {
                var c = {},
                    d = a(b);
                for (var e in a.validator.methods) {
                    var f;
                    "required" === e ? (f = d.get(0).getAttribute(e), "" === f && (f = !0), f = !!f) : f = d.attr(e), f ? c[e] = f : d[0].getAttribute("type") === e && (c[e] = !0)
                }
                return c.maxlength && /-1|2147483647|524288/.test(c.maxlength) && delete c.maxlength, c
            },
            metadataRules: function(b) {
                if (!a.metadata) return {};
                var c = a.data(b.form, "validator").settings.meta;
                return c ? a(b).metadata()[c] : a(b).metadata()
            },
            staticRules: function(b) {
                var c = {},
                    d = a.data(b.form, "validator");
                return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
            },
            normalizeRules: function(b, c) {
                return a.each(b, function(d, e) {
                    if (!1 === e) return void delete b[d];
                    if (e.param || e.depends) {
                        var f = !0;
                        switch (typeof e.depends) {
                            case "string":
                                f = !!a(e.depends, c.form).length;
                                break;
                            case "function":
                                f = e.depends.call(c, c)
                        }
                        f ? b[d] = void 0 === e.param || e.param : delete b[d]
                    }
                }), a.each(b, function(d, e) {
                    b[d] = a.isFunction(e) ? e(c) : e
                }), a.each(["minlength", "maxlength", "min", "max"], function() {
                    b[this] && (b[this] = Number(b[this]))
                }), a.each(["rangelength", "range"], function() {
                    b[this] && (b[this] = [Number(b[this][0]), Number(b[this][1])])
                }), a.validator.autoCreateRanges && (b.min && b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), b.minlength && b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b.messages && delete b.messages, b
            },
            normalizeRule: function(b) {
                if ("string" == typeof b) {
                    var c = {};
                    a.each(b.split(/\s/), function() {
                        c[this] = !0
                    }), b = c
                }
                return b
            },
            addMethod: function(b, c, d) {
                a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
            },
            methods: {
                required: function(b, c, d) {
                    if (!this.depend(d, c)) return "dependency-mismatch";
                    if ("select" === c.nodeName.toLowerCase()) {
                        var e = a(c).val();
                        return e && e.length > 0
                    }
                    return this.checkable(c) ? this.getLength(b, c) > 0 : a.trim(b).length > 0
                },
                remote: function(b, c, d) {
                    if (this.optional(c)) return "dependency-mismatch";
                    var e = this.previousValue(c);
                    if (this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), e.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = e.message, d = "string" == typeof d && {
                            url: d
                        } || d, this.pending[c.name]) return "pending";
                    if (e.old === b) return e.valid;
                    e.old = b;
                    var f = this;
                    this.startRequest(c);
                    var g = {};
                    return g[c.name] = b, a.ajax(a.extend(!0, {
                        url: d,
                        mode: "abort",
                        port: "validate" + c.name,
                        dataType: "json",
                        data: g,
                        success: function(d) {
                            f.settings.messages[c.name].remote = e.originalMessage;
                            var g = !0 === d || "true" === d;
                            if (g) {
                                var h = f.formSubmitted;
                                f.prepareElement(c), f.formSubmitted = h, f.successList.push(c), delete f.invalid[c.name], f.showErrors()
                            } else {
                                var i = {},
                                    j = d || f.defaultMessage(c, "remote");
                                i[c.name] = e.message = a.isFunction(j) ? j(b) : j, f.invalid[c.name] = !0, f.showErrors(i)
                            }
                            e.valid = g, f.stopRequest(c, g)
                        }
                    }, d)), "pending"
                },
                minlength: function(b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                    return this.optional(c) || e >= d
                },
                maxlength: function(b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                    return this.optional(c) || e <= d
                },
                rangelength: function(b, c, d) {
                    var e = a.isArray(b) ? b.length : this.getLength(a.trim(b), c);
                    return this.optional(c) || e >= d[0] && e <= d[1]
                },
                min: function(a, b, c) {
                    return this.optional(b) || a >= c
                },
                max: function(a, b, c) {
                    return this.optional(b) || a <= c
                },
                range: function(a, b, c) {
                    return this.optional(b) || a >= c[0] && a <= c[1]
                },
                email: function(a, b) {
                    return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)
                },
                url: function(a, b) {
                    return this.optional(b) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
                },
                date: function(a, b) {
                    return this.optional(b) || !/Invalid|NaN/.test(new Date(a))
                },
                dateISO: function(a, b) {
                    return this.optional(b) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(a)
                },
                number: function(a, b) {
                    return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
                },
                digits: function(a, b) {
                    return this.optional(b) || /^\d+$/.test(a)
                },
                creditcard: function(a, b) {
                    if (this.optional(b)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(a)) return !1;
                    var c = 0,
                        d = 0,
                        e = !1;
                    a = a.replace(/\D/g, "");
                    for (var f = a.length - 1; f >= 0; f--) {
                        var g = a.charAt(f);
                        d = parseInt(g, 10), e && (d *= 2) > 9 && (d -= 9), c += d, e = !e
                    }
                    return c % 10 == 0
                },
                equalTo: function(b, c, d) {
                    var e = a(d);
                    return this.settings.onfocusout && e.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                        a(c).valid()
                    }), b === e.val()
                }
            }
        }), a.format = a.validator.format
    }(jQuery),
    function(a) {
        var b = {};
        if (a.ajaxPrefilter) a.ajaxPrefilter(function(a, c, d) {
            var e = a.port;
            "abort" === a.mode && (b[e] && b[e].abort(), b[e] = d)
        });
        else {
            var c = a.ajax;
            a.ajax = function(d) {
                var e = ("mode" in d ? d : a.ajaxSettings).mode,
                    f = ("port" in d ? d : a.ajaxSettings).port;
                return "abort" === e ? (b[f] && b[f].abort(), b[f] = c.apply(this, arguments)) : c.apply(this, arguments)
            }
        }
    }(jQuery),
    function(a) {
        jQuery.event.special.focusin || jQuery.event.special.focusout || !document.addEventListener || a.each({
            focus: "focusin",
            blur: "focusout"
        }, function(b, c) {
            function d(b) {
                return b = a.event.fix(b), b.type = c, a.event.handle.call(this, b)
            }
            a.event.special[c] = {
                setup: function() {
                    this.addEventListener(b, d, !0)
                },
                teardown: function() {
                    this.removeEventListener(b, d, !0)
                },
                handler: function(b) {
                    var d = arguments;
                    return d[0] = a.event.fix(b), d[0].type = c, a.event.handle.apply(this, d)
                }
            }
        }), a.extend(a.fn, {
            validateDelegate: function(b, c, d) {
                return this.bind(c, function(c) {
                    var e = a(c.target);
                    if (e.is(b)) return d.apply(e, arguments)
                })
            }
        })
    }(jQuery),
    function(a) {
        "use strict";

        function b(b) {
            var c = b.data;
            b.isDefaultPrevented() || (b.preventDefault(), a(this).ajaxSubmit(c))
        }

        function c(b) {
            var c = b.target,
                d = a(c);
            if (!d.is("[type=submit],[type=image]")) {
                var e = d.closest("[type=submit]");
                if (0 === e.length) return;
                c = e[0]
            }
            var f = this;
            if (f.clk = c, "image" == c.type)
                if (void 0 !== b.offsetX) f.clk_x = b.offsetX, f.clk_y = b.offsetY;
                else if ("function" == typeof a.fn.offset) {
                var g = d.offset();
                f.clk_x = b.pageX - g.left, f.clk_y = b.pageY - g.top
            } else f.clk_x = b.pageX - c.offsetLeft, f.clk_y = b.pageY - c.offsetTop;
            setTimeout(function() {
                f.clk = f.clk_x = f.clk_y = null
            }, 100)
        }

        function d() {
            if (a.fn.ajaxSubmit.debug) {
                var b = "[jquery.form] " + Array.prototype.join.call(arguments, "");
                window.console && window.console.log ? window.console.log(b) : window.opera && window.opera.postError && window.opera.postError(b)
            }
        }
        var e = {};
        e.fileapi = void 0 !== a("<input type='file'/>").get(0).files, e.formdata = void 0 !== window.FormData;
        var f = !!a.fn.prop;
        a.fn.attr2 = function() {
            if (!f) return this.attr.apply(this, arguments);
            var a = this.prop.apply(this, arguments);
            return a && a.jquery || "string" == typeof a ? a : this.attr.apply(this, arguments)
        }, a.fn.ajaxSubmit = function(b) {
            function c(c) {
                var d, e, f = a.param(c, b.traditional).split("&"),
                    g = f.length,
                    h = [];
                for (d = 0; g > d; d++) f[d] = f[d].replace(/\+/g, " "), e = f[d].split("="), h.push([decodeURIComponent(e[0]), decodeURIComponent(e[1])]);
                return h
            }

            function g(d) {
                for (var e = new FormData, f = 0; d.length > f; f++) e.append(d[f].name, d[f].value);
                if (b.extraData) {
                    var g = c(b.extraData);
                    for (f = 0; g.length > f; f++) g[f] && e.append(g[f][0], g[f][1])
                }
                b.data = null;
                var h = a.extend(!0, {}, a.ajaxSettings, b, {
                    contentType: !1,
                    processData: !1,
                    cache: !1,
                    type: i || "POST"
                });
                b.uploadProgress && (h.xhr = function() {
                    var c = a.ajaxSettings.xhr();
                    return c.upload && c.upload.addEventListener("progress", function(a) {
                        var c = 0,
                            d = a.loaded || a.position,
                            e = a.total;
                        a.lengthComputable && (c = Math.ceil(d / e * 100)), b.uploadProgress(a, d, e, c)
                    }, !1), c
                }), h.data = null;
                var j = h.beforeSend;
                return h.beforeSend = function(a, b) {
                    b.data = e, j && j.call(this, a, b)
                }, a.ajax(h)
            }

            function h(c) {
                function e(a) {
                    var b = null;
                    try {
                        a.contentWindow && (b = a.contentWindow.document)
                    } catch (a) {
                        d("cannot get iframe.contentWindow document: " + a)
                    }
                    if (b) return b;
                    try {
                        b = a.contentDocument ? a.contentDocument : a.document
                    } catch (c) {
                        d("cannot get iframe.contentDocument: " + c), b = a.document
                    }
                    return b
                }

                function g() {
                    function b() {
                        try {
                            var a = e(r).readyState;
                            d("state = " + a), a && "uninitialized" == a.toLowerCase() && setTimeout(b, 50)
                        } catch (a) {
                            d("Server abort: ", a, " (", a.name, ")"), h(A), w && clearTimeout(w), w = void 0
                        }
                    }
                    var c = l.attr2("target"),
                        f = l.attr2("action");
                    x.setAttribute("target", o), i || x.setAttribute("method", "POST"), f != m.url && x.setAttribute("action", m.url), m.skipEncodingOverride || i && !/post/i.test(i) || l.attr({
                        encoding: "multipart/form-data",
                        enctype: "multipart/form-data"
                    }), m.timeout && (w = setTimeout(function() {
                        v = !0, h(z)
                    }, m.timeout));
                    var g = [];
                    try {
                        if (m.extraData)
                            for (var j in m.extraData) m.extraData.hasOwnProperty(j) && (a.isPlainObject(m.extraData[j]) && m.extraData[j].hasOwnProperty("name") && m.extraData[j].hasOwnProperty("value") ? g.push(a('<input type="hidden" name="' + m.extraData[j].name + '">').val(m.extraData[j].value).appendTo(x)[0]) : g.push(a('<input type="hidden" name="' + j + '">').val(m.extraData[j]).appendTo(x)[0]));
                        m.iframeTarget || (q.appendTo("body"), r.attachEvent ? r.attachEvent("onload", h) : r.addEventListener("load", h, !1)), setTimeout(b, 15);
                        try {
                            x.submit()
                        } catch (a) {
                            var k = document.createElement("form").submit;
                            k.apply(x)
                        }
                    } finally {
                        x.setAttribute("action", f), c ? x.setAttribute("target", c) : l.removeAttr("target"), a(g).remove()
                    }
                }

                function h(b) {
                    if (!s.aborted && !F) {
                        if (E = e(r), E || (d("cannot access response document"), b = A), b === z && s) return s.abort("timeout"), void y.reject(s, "timeout");
                        if (b == A && s) return s.abort("server abort"), void y.reject(s, "error", "server abort");
                        if (E && E.location.href != m.iframeSrc || v) {
                            r.detachEvent ? r.detachEvent("onload", h) : r.removeEventListener("load", h, !1);
                            var c, f = "success";
                            try {
                                if (v) throw "timeout";
                                var g = "xml" == m.dataType || E.XMLDocument || a.isXMLDoc(E);
                                if (d("isXml=" + g), !g && window.opera && (null === E.body || !E.body.innerHTML) && --G) return d("requeing onLoad callback, DOM not available"), void setTimeout(h, 250);
                                var i = E.body ? E.body : E.documentElement;
                                s.responseText = i ? i.innerHTML : null, s.responseXML = E.XMLDocument ? E.XMLDocument : E, g && (m.dataType = "xml"), s.getResponseHeader = function(a) {
                                    return {
                                        "content-type": m.dataType
                                    } [a]
                                }, i && (s.status = Number(i.getAttribute("status")) || s.status, s.statusText = i.getAttribute("statusText") || s.statusText);
                                var j = (m.dataType || "").toLowerCase(),
                                    k = /(json|script|text)/.test(j);
                                if (k || m.textarea) {
                                    var l = E.getElementsByTagName("textarea")[0];
                                    if (l) s.responseText = l.value, s.status = Number(l.getAttribute("status")) || s.status, s.statusText = l.getAttribute("statusText") || s.statusText;
                                    else if (k) {
                                        var o = E.getElementsByTagName("pre")[0],
                                            p = E.getElementsByTagName("body")[0];
                                        o ? s.responseText = o.textContent ? o.textContent : o.innerText : p && (s.responseText = p.textContent ? p.textContent : p.innerText)
                                    }
                                } else "xml" == j && !s.responseXML && s.responseText && (s.responseXML = H(s.responseText));
                                try {
                                    D = J(s, j, m)
                                } catch (a) {
                                    f = "parsererror", s.error = c = a || f
                                }
                            } catch (a) {
                                d("error caught: ", a), f = "error", s.error = c = a || f
                            }
                            s.aborted && (d("upload aborted"), f = null), s.status && (f = s.status >= 200 && 300 > s.status || 304 === s.status ? "success" : "error"), "success" === f ? (m.success && m.success.call(m.context, D, "success", s), y.resolve(s.responseText, "success", s), n && a.event.trigger("ajaxSuccess", [s, m])) : f && (void 0 === c && (c = s.statusText), m.error && m.error.call(m.context, s, f, c), y.reject(s, "error", c), n && a.event.trigger("ajaxError", [s, m, c])), n && a.event.trigger("ajaxComplete", [s, m]), n && !--a.active && a.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, s, f), F = !0, m.timeout && clearTimeout(w), setTimeout(function() {
                                m.iframeTarget || q.remove(), s.responseXML = null
                            }, 100)
                        }
                    }
                }
                var j, k, m, n, o, q, r, s, t, u, v, w, x = l[0],
                    y = a.Deferred();
                if (c)
                    for (k = 0; p.length > k; k++) j = a(p[k]), f ? j.prop("disabled", !1) : j.removeAttr("disabled");
                if (m = a.extend(!0, {}, a.ajaxSettings, b), m.context = m.context || m, o = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (q = a(m.iframeTarget), u = q.attr2("name"), u ? o = u : q.attr2("name", o)) : (q = a('<iframe name="' + o + '" src="' + m.iframeSrc + '" />'), q.css({
                        position: "absolute",
                        top: "-1000px",
                        left: "-1000px"
                    })), r = q[0], s = {
                        aborted: 0,
                        responseText: null,
                        responseXML: null,
                        status: 0,
                        statusText: "n/a",
                        getAllResponseHeaders: function() {},
                        getResponseHeader: function() {},
                        setRequestHeader: function() {},
                        abort: function(b) {
                            var c = "timeout" === b ? "timeout" : "aborted";
                            d("aborting upload... " + c), this.aborted = 1;
                            try {
                                r.contentWindow.document.execCommand && r.contentWindow.document.execCommand("Stop")
                            } catch (a) {}
                            q.attr("src", m.iframeSrc), s.error = c, m.error && m.error.call(m.context, s, c, b), n && a.event.trigger("ajaxError", [s, m, c]), m.complete && m.complete.call(m.context, s, c)
                        }
                    }, n = m.global, n && 0 == a.active++ && a.event.trigger("ajaxStart"), n && a.event.trigger("ajaxSend", [s, m]), m.beforeSend && !1 === m.beforeSend.call(m.context, s, m)) return m.global && a.active--, y.reject(), y;
                if (s.aborted) return y.reject(), y;
                (t = x.clk) && (u = t.name) && !t.disabled && (m.extraData = m.extraData || {}, m.extraData[u] = t.value, "image" == t.type && (m.extraData[u + ".x"] = x.clk_x, m.extraData[u + ".y"] = x.clk_y));
                var z = 1,
                    A = 2,
                    B = a("meta[name=csrf-token]").attr("content"),
                    C = a("meta[name=csrf-param]").attr("content");
                C && B && (m.extraData = m.extraData || {}, m.extraData[C] = B), m.forceSync ? g() : setTimeout(g, 10);
                var D, E, F, G = 50,
                    H = a.parseXML || function(a, b) {
                        return window.ActiveXObject ? (b = new ActiveXObject("Microsoft.XMLDOM"), b.async = "false", b.loadXML(a)) : b = (new DOMParser).parseFromString(a, "text/xml"), b && b.documentElement && "parsererror" != b.documentElement.nodeName ? b : null
                    },
                    I = a.parseJSON || function(a) {
                        return window.eval("(" + a + ")")
                    },
                    J = function(b, c, d) {
                        var e = b.getResponseHeader("content-type") || "",
                            f = "xml" === c || !c && e.indexOf("xml") >= 0,
                            g = f ? b.responseXML : b.responseText;
                        return f && "parsererror" === g.documentElement.nodeName && a.error && a.error("parsererror"), d && d.dataFilter && (g = d.dataFilter(g, c)), "string" == typeof g && ("json" === c || !c && e.indexOf("json") >= 0 ? g = I(g) : ("script" === c || !c && e.indexOf("javascript") >= 0) && a.globalEval(g)), g
                    };
                return y
            }
            if (!this.length) return d("ajaxSubmit: skipping submit process - no element selected"), this;
            var i, j, k, l = this;
            "function" == typeof b && (b = {
                success: b
            }), i = b.type || this.attr2("method"), j = b.url || this.attr2("action"), k = "string" == typeof j ? a.trim(j) : "", k = k || window.location.href || "", k && (k = (k.match(/^([^#]+)/) || [])[1]), b = a.extend(!0, {
                url: k,
                success: a.ajaxSettings.success,
                type: i || "GET",
                iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
            }, b);
            var m = {};
            if (this.trigger("form-pre-serialize", [this, b, m]), m.veto) return d("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
            if (b.beforeSerialize && !1 === b.beforeSerialize(this, b)) return d("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
            var n = b.traditional;
            void 0 === n && (n = a.ajaxSettings.traditional);
            var o, p = [],
                q = this.formToArray(b.semantic, p);
            if (b.data && (b.extraData = b.data, o = a.param(b.data, n)), b.beforeSubmit && !1 === b.beforeSubmit(q, this, b)) return d("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
            if (this.trigger("form-submit-validate", [q, this, b, m]), m.veto) return d("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
            var r = a.param(q, n);
            o && (r = r ? r + "&" + o : o), "GET" == b.type.toUpperCase() ? (b.url += (b.url.indexOf("?") >= 0 ? "&" : "?") + r, b.data = null) : b.data = r;
            var s = [];
            if (b.resetForm && s.push(function() {
                    l.resetForm()
                }), b.clearForm && s.push(function() {
                    l.clearForm(b.includeHidden)
                }), !b.dataType && b.target) {
                var t = b.success || function() {};
                s.push(function(c) {
                    var d = b.replaceTarget ? "replaceWith" : "html";
                    a(b.target)[d](c).each(t, arguments)
                })
            } else b.success && s.push(b.success);
            if (b.success = function(a, c, d) {
                    for (var e = b.context || this, f = 0, g = s.length; g > f; f++) s[f].apply(e, [a, c, d || l, l])
                }, b.error) {
                var u = b.error;
                b.error = function(a, c, d) {
                    var e = b.context || this;
                    u.apply(e, [a, c, d, l])
                }
            }
            if (b.complete) {
                var v = b.complete;
                b.complete = function(a, c) {
                    var d = b.context || this;
                    v.apply(d, [a, c, l])
                }
            }
            var w = a('input[type=file]:enabled[value!=""]', this),
                x = w.length > 0,
                y = "multipart/form-data",
                z = l.attr("enctype") == y || l.attr("encoding") == y,
                A = e.fileapi && e.formdata;
            d("fileAPI :" + A);
            var B, C = (x || z) && !A;
            !1 !== b.iframe && (b.iframe || C) ? b.closeKeepAlive ? a.get(b.closeKeepAlive, function() {
                B = h(q)
            }) : B = h(q) : B = (x || z) && A ? g(q) : a.ajax(b), l.removeData("jqxhr").data("jqxhr", B);
            for (var D = 0; p.length > D; D++) p[D] = null;
            return this.trigger("form-submit-notify", [this, b]), this
        }, a.fn.ajaxForm = function(e) {
            if (e = e || {}, e.delegation = e.delegation && a.isFunction(a.fn.on), !e.delegation && 0 === this.length) {
                var f = {
                    s: this.selector,
                    c: this.context
                };
                return !a.isReady && f.s ? (d("DOM not ready, queuing ajaxForm"), a(function() {
                    a(f.s, f.c).ajaxForm(e)
                }), this) : (d("terminating; zero elements found by selector" + (a.isReady ? "" : " (DOM not ready)")), this)
            }
            return e.delegation ? (a(document).off("submit.form-plugin", this.selector, b).off("click.form-plugin", this.selector, c).on("submit.form-plugin", this.selector, e, b).on("click.form-plugin", this.selector, e, c), this) : this.ajaxFormUnbind().bind("submit.form-plugin", e, b).bind("click.form-plugin", e, c)
        }, a.fn.ajaxFormUnbind = function() {
            return this.unbind("submit.form-plugin click.form-plugin")
        }, a.fn.formToArray = function(b, c) {
            var d = [];
            if (0 === this.length) return d;
            var f = this[0],
                g = b ? f.getElementsByTagName("*") : f.elements;
            if (!g) return d;
            var h, i, j, k, l, m, n;
            for (h = 0, m = g.length; m > h; h++)
                if (l = g[h], (j = l.name) && !l.disabled)
                    if (b && f.clk && "image" == l.type) f.clk == l && (d.push({
                        name: j,
                        value: a(l).val(),
                        type: l.type
                    }), d.push({
                        name: j + ".x",
                        value: f.clk_x
                    }, {
                        name: j + ".y",
                        value: f.clk_y
                    }));
                    else if ((k = a.fieldValue(l, !0)) && k.constructor == Array)
                for (c && c.push(l), i = 0, n = k.length; n > i; i++) d.push({
                    name: j,
                    value: k[i]
                });
            else if (e.fileapi && "file" == l.type) {
                c && c.push(l);
                var o = l.files;
                if (o.length)
                    for (i = 0; o.length > i; i++) d.push({
                        name: j,
                        value: o[i],
                        type: l.type
                    });
                else d.push({
                    name: j,
                    value: "",
                    type: l.type
                })
            } else null !== k && void 0 !== k && (c && c.push(l), d.push({
                name: j,
                value: k,
                type: l.type,
                required: l.required
            }));
            if (!b && f.clk) {
                var p = a(f.clk),
                    q = p[0];
                (j = q.name) && !q.disabled && "image" == q.type && (d.push({
                    name: j,
                    value: p.val()
                }), d.push({
                    name: j + ".x",
                    value: f.clk_x
                }, {
                    name: j + ".y",
                    value: f.clk_y
                }))
            }
            return d
        }, a.fn.formSerialize = function(b) {
            return a.param(this.formToArray(b))
        }, a.fn.fieldSerialize = function(b) {
            var c = [];
            return this.each(function() {
                var d = this.name;
                if (d) {
                    var e = a.fieldValue(this, b);
                    if (e && e.constructor == Array)
                        for (var f = 0, g = e.length; g > f; f++) c.push({
                            name: d,
                            value: e[f]
                        });
                    else null !== e && void 0 !== e && c.push({
                        name: this.name,
                        value: e
                    })
                }
            }), a.param(c)
        }, a.fn.fieldValue = function(b) {
            for (var c = [], d = 0, e = this.length; e > d; d++) {
                var f = this[d],
                    g = a.fieldValue(f, b);
                null === g || void 0 === g || g.constructor == Array && !g.length || (g.constructor == Array ? a.merge(c, g) : c.push(g))
            }
            return c
        }, a.fieldValue = function(b, c) {
            var d = b.name,
                e = b.type,
                f = b.tagName.toLowerCase();
            if (void 0 === c && (c = !0), c && (!d || b.disabled || "reset" == e || "button" == e || ("checkbox" == e || "radio" == e) && !b.checked || ("submit" == e || "image" == e) && b.form && b.form.clk != b || "select" == f && -1 == b.selectedIndex)) return null;
            if ("select" == f) {
                var g = b.selectedIndex;
                if (0 > g) return null;
                for (var h = [], i = b.options, j = "select-one" == e, k = j ? g + 1 : i.length, l = j ? g : 0; k > l; l++) {
                    var m = i[l];
                    if (m.selected) {
                        var n = m.value;
                        if (n || (n = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), j) return n;
                        h.push(n)
                    }
                }
                return h
            }
            return a(b).val()
        }, a.fn.clearForm = function(b) {
            return this.each(function() {
                a("input,select,textarea", this).clearFields(b)
            })
        }, a.fn.clearFields = a.fn.clearInputs = function(b) {
            var c = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
            return this.each(function() {
                var d = this.type,
                    e = this.tagName.toLowerCase();
                c.test(d) || "textarea" == e ? this.value = "" : "checkbox" == d || "radio" == d ? this.checked = !1 : "select" == e ? this.selectedIndex = -1 : "file" == d ? /MSIE/.test(navigator.userAgent) ? a(this).replaceWith(a(this).clone(!0)) : a(this).val("") : b && (!0 === b && /hidden/.test(d) || "string" == typeof b && a(this).is(b)) && (this.value = "")
            })
        }, a.fn.resetForm = function() {
            return this.each(function() {
                ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
            })
        }, a.fn.enable = function(a) {
            return void 0 === a && (a = !0), this.each(function() {
                this.disabled = !a
            })
        }, a.fn.selected = function(b) {
            return void 0 === b && (b = !0), this.each(function() {
                var c = this.type;
                if ("checkbox" == c || "radio" == c) this.checked = b;
                else if ("option" == this.tagName.toLowerCase()) {
                    var d = a(this).parent("select");
                    b && d[0] && "select-one" == d[0].type && d.find("option").selected(!1), this.selected = b
                }
            })
        }, a.fn.ajaxSubmit.debug = !1
    }(jQuery),
    function(a) {
        var b = {},
            c = {
                mode: "horizontal",
                slideSelector: "",
                infiniteLoop: !0,
                hideControlOnEnd: !1,
                speed: 500,
                easing: null,
                slideMargin: 0,
                startSlide: 0,
                randomStart: !1,
                captions: !1,
                ticker: !1,
                tickerHover: !1,
                adaptiveHeight: !1,
                adaptiveHeightSpeed: 500,
                video: !1,
                useCSS: !0,
                preloadImages: "visible",
                responsive: !0,
                touchEnabled: !0,
                swipeThreshold: 50,
                oneToOneTouch: !0,
                preventDefaultSwipeX: !0,
                preventDefaultSwipeY: !1,
                pager: !0,
                pagerType: "full",
                pagerShortSeparator: " / ",
                pagerSelector: null,
                buildPager: null,
                pagerCustom: null,
                controls: !0,
                nextText: "Next",
                prevText: "Prev",
                nextSelector: null,
                prevSelector: null,
                autoControls: !1,
                startText: "Start",
                stopText: "Stop",
                autoControlsCombine: !1,
                autoControlsSelector: null,
                auto: !1,
                pause: 4e3,
                autoStart: !0,
                autoDirection: "next",
                autoHover: !1,
                autoDelay: 0,
                minSlides: 1,
                maxSlides: 1,
                moveSlides: 0,
                slideWidth: 0,
                onSliderLoad: function() {},
                onSlideBefore: function() {},
                onSlideAfter: function() {},
                onSlideNext: function() {},
                onSlidePrev: function() {}
            };
        a.fn.bxSlider = function(d) {
            if (0 == this.length) return this;
            if (this.length > 1) return this.each(function() {
                a(this).bxSlider(d)
            }), this;
            var e = {},
                f = this;
            b.el = this;
            var g = a(window).width(),
                h = a(window).height(),
                j = function() {
                    e.settings = a.extend({}, c, d), e.settings.slideWidth = parseInt(e.settings.slideWidth), e.children = f.children(e.settings.slideSelector), e.children.length < e.settings.minSlides && (e.settings.minSlides = e.children.length), e.children.length < e.settings.maxSlides && (e.settings.maxSlides = e.children.length), e.settings.randomStart && (e.settings.startSlide = Math.floor(Math.random() * e.children.length)), e.active = {
                        index: e.settings.startSlide
                    }, e.carousel = e.settings.minSlides > 1 || e.settings.maxSlides > 1, e.carousel && (e.settings.preloadImages = "all"), e.minThreshold = e.settings.minSlides * e.settings.slideWidth + (e.settings.minSlides - 1) * e.settings.slideMargin, e.maxThreshold = e.settings.maxSlides * e.settings.slideWidth + (e.settings.maxSlides - 1) * e.settings.slideMargin, e.working = !1, e.controls = {}, e.interval = null, e.animProp = "vertical" == e.settings.mode ? "top" : "left", e.usingCSS = e.settings.useCSS && "fade" != e.settings.mode && function() {
                        var a = document.createElement("div"),
                            b = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var c in b)
                            if (void 0 !== a.style[b[c]]) return e.cssPrefix = b[c].replace("Perspective", "").toLowerCase(), e.animProp = "-" + e.cssPrefix + "-transform", !0;
                        return !1
                    }(), "vertical" == e.settings.mode && (e.settings.maxSlides = e.settings.minSlides), f.data("origStyle", f.attr("style")), f.children(e.settings.slideSelector).each(function() {
                        a(this).data("origStyle", a(this).attr("style"))
                    }), k()
                },
                k = function() {
                    f.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), e.viewport = f.parent(), e.loader = a('<div class="bx-loading" />'), e.viewport.prepend(e.loader), f.css({
                        width: "horizontal" == e.settings.mode ? 100 * e.children.length + 215 + "%" : "auto",
                        position: "relative"
                    }), e.usingCSS && e.settings.easing ? f.css("-" + e.cssPrefix + "-transition-timing-function", e.settings.easing) : e.settings.easing || (e.settings.easing = "swing"), q(), e.viewport.css({
                        width: "100%",
                        overflow: "hidden",
                        position: "relative"
                    }), e.viewport.parent().css({
                        maxWidth: o()
                    }), e.settings.pager || e.viewport.parent().css({
                        margin: "0 auto 0px"
                    }), e.children.css({
                        float: "horizontal" == e.settings.mode ? "left" : "none",
                        listStyle: "none",
                        position: "relative"
                    }), e.children.css("width", p()), "horizontal" == e.settings.mode && e.settings.slideMargin > 0 && e.children.css("marginRight", e.settings.slideMargin), "vertical" == e.settings.mode && e.settings.slideMargin > 0 && e.children.css("marginBottom", e.settings.slideMargin), "fade" == e.settings.mode && (e.children.css({
                        position: "absolute",
                        zIndex: 0,
                        display: "none"
                    }), e.children.eq(e.settings.startSlide).css({
                        zIndex: 50,
                        display: "block"
                    })), e.controls.el = a('<div class="bx-controls" />'), e.settings.captions && z(), e.active.last = e.settings.startSlide == r() - 1, e.settings.video && f.fitVids();
                    var b = e.children.eq(e.settings.startSlide);
                    "all" == e.settings.preloadImages && (b = e.children), e.settings.ticker ? e.settings.pager = !1 : (e.settings.pager && w(), e.settings.controls && x(), e.settings.auto && e.settings.autoControls && y(), (e.settings.controls || e.settings.autoControls || e.settings.pager) && e.viewport.after(e.controls.el)), l(b, m)
                },
                l = function(b, c) {
                    var d = b.find("img, iframe").length;
                    if (0 == d) return void c();
                    var e = 0;
                    b.find("img, iframe").each(function() {
                        a(this).one("load", function() {
                            ++e == d && c()
                        }).each(function() {
                            this.complete && a(this).load()
                        })
                    })
                },
                m = function() {
                    if (e.settings.infiniteLoop && "fade" != e.settings.mode && !e.settings.ticker) {
                        var b = "vertical" == e.settings.mode ? e.settings.minSlides : e.settings.maxSlides,
                            c = e.children.slice(0, b).clone().addClass("bx-clone"),
                            d = e.children.slice(-b).clone().addClass("bx-clone");
                        f.append(c).prepend(d)
                    }
                    e.loader.remove(), t(), "vertical" == e.settings.mode && (e.settings.adaptiveHeight = !0), e.viewport.height(n()), f.redrawSlider(), e.settings.onSliderLoad(e.active.index), e.initialized = !0, e.settings.responsive && a(window).bind("resize", Q), e.settings.auto && e.settings.autoStart && J(), e.settings.ticker && K(), e.settings.pager && F(e.settings.startSlide), e.settings.controls && I(), e.settings.touchEnabled && !e.settings.ticker && M()
                },
                n = function() {
                    var b = 0,
                        c = a();
                    if ("vertical" == e.settings.mode || e.settings.adaptiveHeight)
                        if (e.carousel) {
                            var d = 1 == e.settings.moveSlides ? e.active.index : e.active.index * s();
                            for (c = e.children.eq(d), i = 1; i <= e.settings.maxSlides - 1; i++) c = d + i >= e.children.length ? c.add(e.children.eq(i - 1)) : c.add(e.children.eq(d + i))
                        } else c = e.children.eq(e.active.index);
                    else c = e.children;
                    return "vertical" == e.settings.mode ? (c.each(function() {
                        b += a(this).outerHeight()
                    }), e.settings.slideMargin > 0 && (b += e.settings.slideMargin * (e.settings.minSlides - 1))) : b = Math.max.apply(Math, c.map(function() {
                        return a(this).outerHeight(!1)
                    }).get()), b
                },
                o = function() {
                    var a = "100%";
                    return e.settings.slideWidth > 0 && (a = "horizontal" == e.settings.mode ? e.settings.maxSlides * e.settings.slideWidth + (e.settings.maxSlides - 1) * e.settings.slideMargin : e.settings.slideWidth), a
                },
                p = function() {
                    var a = e.settings.slideWidth,
                        b = e.viewport.width();
                    return 0 == e.settings.slideWidth || e.settings.slideWidth > b && !e.carousel || "vertical" == e.settings.mode ? a = b : e.settings.maxSlides > 1 && "horizontal" == e.settings.mode && (b > e.maxThreshold || b < e.minThreshold && (a = (b - e.settings.slideMargin * (e.settings.minSlides - 1)) / e.settings.minSlides)), a
                },
                q = function() {
                    var a = 1;
                    if ("horizontal" == e.settings.mode && e.settings.slideWidth > 0)
                        if (e.viewport.width() < e.minThreshold) a = e.settings.minSlides;
                        else if (e.viewport.width() > e.maxThreshold) a = e.settings.maxSlides;
                    else {
                        var b = e.children.first().width();
                        a = Math.floor(e.viewport.width() / b)
                    } else "vertical" == e.settings.mode && (a = e.settings.minSlides);
                    return a
                },
                r = function() {
                    var a = 0;
                    if (e.settings.moveSlides > 0)
                        if (e.settings.infiniteLoop) a = e.children.length / s();
                        else
                            for (var b = 0, c = 0; b < e.children.length;) ++a, b = c + q(), c += e.settings.moveSlides <= q() ? e.settings.moveSlides : q();
                    else a = Math.ceil(e.children.length / q());
                    return a
                },
                s = function() {
                    return e.settings.moveSlides > 0 && e.settings.moveSlides <= q() ? e.settings.moveSlides : q()
                },
                t = function() {
                    if (e.children.length > e.settings.maxSlides && e.active.last && !e.settings.infiniteLoop) {
                        if ("horizontal" == e.settings.mode) {
                            var a = e.children.last(),
                                b = a.position();
                            u(-(b.left - (e.viewport.width() - a.width())), "reset", 0)
                        } else if ("vertical" == e.settings.mode) {
                            var c = e.children.length - e.settings.minSlides,
                                b = e.children.eq(c).position();
                            u(-b.top, "reset", 0)
                        }
                    } else {
                        var b = e.children.eq(e.active.index * s()).position();
                        e.active.index == r() - 1 && (e.active.last = !0), void 0 != b && ("horizontal" == e.settings.mode ? u(-b.left, "reset", 0) : "vertical" == e.settings.mode && u(-b.top, "reset", 0))
                    }
                },
                u = function(a, b, c, d) {
                    if (e.usingCSS) {
                        var g = "vertical" == e.settings.mode ? "translate3d(0, " + a + "px, 0)" : "translate3d(" + a + "px, 0, 0)";
                        f.css("-" + e.cssPrefix + "-transition-duration", c / 1e3 + "s"), "slide" == b ? (f.css(e.animProp, g), f.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            f.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), G()
                        })) : "reset" == b ? f.css(e.animProp, g) : "ticker" == b && (f.css("-" + e.cssPrefix + "-transition-timing-function", "linear"), f.css(e.animProp, g), f.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            f.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), u(d.resetValue, "reset", 0), L()
                        }))
                    } else {
                        var h = {};
                        h[e.animProp] = a, "slide" == b ? f.animate(h, c, e.settings.easing, function() {
                            G()
                        }) : "reset" == b ? f.css(e.animProp, a) : "ticker" == b && f.animate(h, speed, "linear", function() {
                            u(d.resetValue, "reset", 0), L()
                        })
                    }
                },
                v = function() {
                    for (var b = "", c = r(), d = 0; c > d; d++) {
                        var f = "";
                        e.settings.buildPager && a.isFunction(e.settings.buildPager) ? (f = e.settings.buildPager(d), e.pagerEl.addClass("bx-custom-pager")) : (f = d + 1, e.pagerEl.addClass("bx-default-pager")), b += '<div class="bx-pager-item"><a href="" data-slide-index="' + d + '" class="bx-pager-link">' + f + "</a></div>"
                    }
                    e.pagerEl.html(b)
                },
                w = function() {
                    e.settings.pagerCustom ? e.pagerEl = a(e.settings.pagerCustom) : (e.pagerEl = a('<div class="bx-pager" />'), e.settings.pagerSelector ? a(e.settings.pagerSelector).html(e.pagerEl) : e.controls.el.addClass("bx-has-pager").append(e.pagerEl), v()), e.pagerEl.delegate("a", "click", E)
                },
                x = function() {
                    e.controls.next = a('<a class="bx-next" href="">' + e.settings.nextText + "</a>"), e.controls.prev = a('<a class="bx-prev" href="">' + e.settings.prevText + "</a>"), e.controls.next.bind("click", A), e.controls.prev.bind("click", B), e.settings.nextSelector && a(e.settings.nextSelector).append(e.controls.next), e.settings.prevSelector && a(e.settings.prevSelector).append(e.controls.prev), e.settings.nextSelector || e.settings.prevSelector || (e.controls.directionEl = a('<div class="bx-controls-direction" />'), e.controls.directionEl.append(e.controls.prev).append(e.controls.next), e.controls.el.addClass("bx-has-controls-direction").append(e.controls.directionEl))
                },
                y = function() {
                    e.controls.start = a('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + e.settings.startText + "</a></div>"), e.controls.stop = a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + e.settings.stopText + "</a></div>"), e.controls.autoEl = a('<div class="bx-controls-auto" />'), e.controls.autoEl.delegate(".bx-start", "click", C), e.controls.autoEl.delegate(".bx-stop", "click", D), e.settings.autoControlsCombine ? e.controls.autoEl.append(e.controls.start) : e.controls.autoEl.append(e.controls.start).append(e.controls.stop), e.settings.autoControlsSelector ? a(e.settings.autoControlsSelector).html(e.controls.autoEl) : e.controls.el.addClass("bx-has-controls-auto").append(e.controls.autoEl), H(e.settings.autoStart ? "stop" : "start")
                },
                z = function() {
                    e.children.each(function() {
                        var b = a(this).find("img:first").attr("title");
                        void 0 != b && ("" + b).length && a(this).append('<div class="bx-caption"><span>' + b + "</span></div>")
                    })
                },
                A = function(a) {
                    e.settings.auto && f.stopAuto(), f.goToNextSlide(), a.preventDefault()
                },
                B = function(a) {
                    e.settings.auto && f.stopAuto(), f.goToPrevSlide(), a.preventDefault()
                },
                C = function(a) {
                    f.startAuto(), a.preventDefault()
                },
                D = function(a) {
                    f.stopAuto(), a.preventDefault()
                },
                E = function(b) {
                    e.settings.auto && f.stopAuto();
                    var c = a(b.currentTarget),
                        d = parseInt(c.attr("data-slide-index"));
                    d != e.active.index && f.goToSlide(d), b.preventDefault()
                },
                F = function(b) {
                    var c = e.children.length;
                    return "short" == e.settings.pagerType ? (e.settings.maxSlides > 1 && (c = Math.ceil(e.children.length / e.settings.maxSlides)), void e.pagerEl.html(b + 1 + e.settings.pagerShortSeparator + c)) : (e.pagerEl.find("a").removeClass("active"), void e.pagerEl.each(function(c, d) {
                        a(d).find("a").eq(b).addClass("active")
                    }))
                },
                G = function() {
                    if (e.settings.infiniteLoop) {
                        var a = "";
                        0 == e.active.index ? a = e.children.eq(0).position() : e.active.index == r() - 1 && e.carousel ? a = e.children.eq((r() - 1) * s()).position() : e.active.index == e.children.length - 1 && (a = e.children.eq(e.children.length - 1).position()), "horizontal" == e.settings.mode ? u(-a.left, "reset", 0) : "vertical" == e.settings.mode && u(-a.top, "reset", 0)
                    }
                    e.working = !1, e.settings.onSlideAfter(e.children.eq(e.active.index), e.oldIndex, e.active.index)
                },
                H = function(a) {
                    e.settings.autoControlsCombine ? e.controls.autoEl.html(e.controls[a]) : (e.controls.autoEl.find("a").removeClass("active"), e.controls.autoEl.find("a:not(.bx-" + a + ")").addClass("active"))
                },
                I = function() {
                    1 == r() ? (e.controls.prev.addClass("disabled"), e.controls.next.addClass("disabled")) : !e.settings.infiniteLoop && e.settings.hideControlOnEnd && (0 == e.active.index ? (e.controls.prev.addClass("disabled"), e.controls.next.removeClass("disabled")) : e.active.index == r() - 1 ? (e.controls.next.addClass("disabled"), e.controls.prev.removeClass("disabled")) : (e.controls.prev.removeClass("disabled"), e.controls.next.removeClass("disabled")))
                },
                J = function() {
                    e.settings.autoDelay > 0 ? setTimeout(f.startAuto, e.settings.autoDelay) : f.startAuto(), e.settings.autoHover && f.hover(function() {
                        e.interval && (f.stopAuto(!0), e.autoPaused = !0)
                    }, function() {
                        e.autoPaused && (f.startAuto(!0), e.autoPaused = null)
                    })
                },
                K = function() {
                    var b = 0;
                    if ("next" == e.settings.autoDirection) f.append(e.children.clone().addClass("bx-clone"));
                    else {
                        f.prepend(e.children.clone().addClass("bx-clone"));
                        var c = e.children.first().position();
                        b = "horizontal" == e.settings.mode ? -c.left : -c.top
                    }
                    u(b, "reset", 0), e.settings.pager = !1, e.settings.controls = !1, e.settings.autoControls = !1, e.settings.tickerHover && !e.usingCSS && e.viewport.hover(function() {
                        f.stop()
                    }, function() {
                        var b = 0;
                        e.children.each(function() {
                            b += "horizontal" == e.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0)
                        });
                        var c = e.settings.speed / b,
                            d = "horizontal" == e.settings.mode ? "left" : "top",
                            g = c * (b - Math.abs(parseInt(f.css(d))));
                        L(g)
                    }), L()
                },
                L = function(a) {
                    speed = a || e.settings.speed;
                    var b = {
                            left: 0,
                            top: 0
                        },
                        c = {
                            left: 0,
                            top: 0
                        };
                    "next" == e.settings.autoDirection ? b = f.find(".bx-clone").first().position() : c = e.children.first().position();
                    var d = "horizontal" == e.settings.mode ? -b.left : -b.top,
                        g = "horizontal" == e.settings.mode ? -c.left : -c.top,
                        h = {
                            resetValue: g
                        };
                    u(d, "ticker", speed, h)
                },
                M = function() {
                    e.touch = {
                        start: {
                            x: 0,
                            y: 0
                        },
                        end: {
                            x: 0,
                            y: 0
                        }
                    }, e.viewport.bind("touchstart", N)
                },
                N = function(a) {
                    if (e.working) a.preventDefault();
                    else {
                        e.touch.originalPos = f.position();
                        var b = a.originalEvent;
                        e.touch.start.x = b.changedTouches[0].pageX, e.touch.start.y = b.changedTouches[0].pageY, e.viewport.bind("touchmove", O), e.viewport.bind("touchend", P)
                    }
                },
                O = function(a) {
                    var b = a.originalEvent,
                        c = Math.abs(b.changedTouches[0].pageX - e.touch.start.x),
                        d = Math.abs(b.changedTouches[0].pageY - e.touch.start.y);
                    if (3 * c > d && e.settings.preventDefaultSwipeX ? a.preventDefault() : 3 * d > c && e.settings.preventDefaultSwipeY && a.preventDefault(), "fade" != e.settings.mode && e.settings.oneToOneTouch) {
                        var f = 0;
                        if ("horizontal" == e.settings.mode) {
                            var g = b.changedTouches[0].pageX - e.touch.start.x;
                            f = e.touch.originalPos.left + g
                        } else {
                            var g = b.changedTouches[0].pageY - e.touch.start.y;
                            f = e.touch.originalPos.top + g
                        }
                        u(f, "reset", 0)
                    }
                },
                P = function(a) {
                    e.viewport.unbind("touchmove", O);
                    var b = a.originalEvent,
                        c = 0;
                    if (e.touch.end.x = b.changedTouches[0].pageX, e.touch.end.y = b.changedTouches[0].pageY, "fade" == e.settings.mode) {
                        var d = Math.abs(e.touch.start.x - e.touch.end.x);
                        d >= e.settings.swipeThreshold && (e.touch.start.x > e.touch.end.x ? f.goToNextSlide() : f.goToPrevSlide(), f.stopAuto())
                    } else {
                        var d = 0;
                        "horizontal" == e.settings.mode ? (d = e.touch.end.x - e.touch.start.x, c = e.touch.originalPos.left) : (d = e.touch.end.y - e.touch.start.y, c = e.touch.originalPos.top), !e.settings.infiniteLoop && (0 == e.active.index && d > 0 || e.active.last && 0 > d) ? u(c, "reset", 200) : Math.abs(d) >= e.settings.swipeThreshold ? (0 > d ? f.goToNextSlide() : f.goToPrevSlide(), f.stopAuto()) : u(c, "reset", 200)
                    }
                    e.viewport.unbind("touchend", P)
                },
                Q = function() {
                    var b = a(window).width(),
                        c = a(window).height();
                    (g != b || h != c) && (g = b, h = c, f.redrawSlider())
                };
            return f.goToSlide = function(b, c) {
                if (!e.working && e.active.index != b)
                    if (e.working = !0, e.oldIndex = e.active.index, e.active.index = 0 > b ? r() - 1 : b >= r() ? 0 : b, e.settings.onSlideBefore(e.children.eq(e.active.index), e.oldIndex, e.active.index), "next" == c ? e.settings.onSlideNext(e.children.eq(e.active.index), e.oldIndex, e.active.index) : "prev" == c && e.settings.onSlidePrev(e.children.eq(e.active.index), e.oldIndex, e.active.index), e.active.last = e.active.index >= r() - 1, e.settings.pager && F(e.active.index), e.settings.controls && I(), "fade" == e.settings.mode) e.settings.adaptiveHeight && e.viewport.height() != n() && e.viewport.animate({
                        height: n()
                    }, e.settings.adaptiveHeightSpeed), e.children.filter(":visible").fadeOut(e.settings.speed).css({
                        zIndex: 0
                    }), e.children.eq(e.active.index).css("zIndex", 51).fadeIn(e.settings.speed, function() {
                        a(this).css("zIndex", 50), G()
                    });
                    else {
                        e.settings.adaptiveHeight && e.viewport.height() != n() && e.viewport.animate({
                            height: n()
                        }, e.settings.adaptiveHeightSpeed);
                        var d = 0,
                            g = {
                                left: 0,
                                top: 0
                            };
                        if (!e.settings.infiniteLoop && e.carousel && e.active.last)
                            if ("horizontal" == e.settings.mode) {
                                var h = e.children.eq(e.children.length - 1);
                                g = h.position(), d = e.viewport.width() - h.outerWidth()
                            } else {
                                var i = e.children.length - e.settings.minSlides;
                                g = e.children.eq(i).position()
                            }
                        else if (e.carousel && e.active.last && "prev" == c) {
                            var j = 1 == e.settings.moveSlides ? e.settings.maxSlides - s() : (r() - 1) * s() - (e.children.length - e.settings.maxSlides),
                                h = f.children(".bx-clone").eq(j);
                            g = h.position()
                        } else if ("next" == c && 0 == e.active.index) g = f.find("> .bx-clone").eq(e.settings.maxSlides).position(), e.active.last = !1;
                        else if (b >= 0) {
                            var k = b * s();
                            g = e.children.eq(k).position()
                        }
                        if (void 0 !== g) {
                            var l = "horizontal" == e.settings.mode ? -(g.left - d) : -g.top;
                            u(l, "slide", e.settings.speed)
                        }
                    }
            }, f.goToNextSlide = function() {
                if (e.settings.infiniteLoop || !e.active.last) {
                    var a = parseInt(e.active.index) + 1;
                    f.goToSlide(a, "next")
                }
            }, f.goToPrevSlide = function() {
                if (e.settings.infiniteLoop || 0 != e.active.index) {
                    var a = parseInt(e.active.index) - 1;
                    f.goToSlide(a, "prev")
                }
            }, f.startAuto = function(a) {
                e.interval || (e.interval = setInterval(function() {
                    "next" == e.settings.autoDirection ? f.goToNextSlide() : f.goToPrevSlide()
                }, e.settings.pause), e.settings.autoControls && 1 != a && H("stop"))
            }, f.stopAuto = function(a) {
                e.interval && (clearInterval(e.interval), e.interval = null, e.settings.autoControls && 1 != a && H("start"))
            }, f.getCurrentSlide = function() {
                return e.active.index
            }, f.getSlideCount = function() {
                return e.children.length
            }, f.redrawSlider = function() {
                e.children.add(f.find(".bx-clone")).outerWidth(p()), e.viewport.css("height", n()), e.settings.ticker || t(), e.active.last && (e.active.index = r() - 1), e.active.index >= r() && (e.active.last = !0), e.settings.pager && !e.settings.pagerCustom && (v(), F(e.active.index))
            }, f.destroySlider = function() {
                e.initialized && (e.initialized = !1, a(".bx-clone", this).remove(), e.children.each(function() {
                    void 0 != a(this).data("origStyle") ? a(this).attr("style", a(this).data("origStyle")) : a(this).removeAttr("style")
                }), void 0 != a(this).data("origStyle") ? this.attr("style", a(this).data("origStyle")) : a(this).removeAttr("style"), a(this).unwrap().unwrap(), e.controls.el && e.controls.el.remove(), e.controls.next && e.controls.next.remove(), e.controls.prev && e.controls.prev.remove(), e.pagerEl && e.pagerEl.remove(), a(".bx-caption", this).remove(), e.controls.autoEl && e.controls.autoEl.remove(), clearInterval(e.interval), e.settings.responsive && a(window).unbind("resize", Q))
            }, f.reloadSlider = function(a) {
                void 0 != a && (d = a), f.destroySlider(), j()
            }, j(), this
        }
    }(jQuery);
var Froogaloop = function() {
    function a(b) {
        return new a.fn.init(b)
    }

    function b(a, b, c) {
        if (!c.contentWindow.postMessage) return !1;
        a = JSON.stringify({
            method: a,
            value: b
        }), c.contentWindow.postMessage(a, g)
    }

    function c(a) {
        var b, c;
        try {
            b = JSON.parse(a.data), c = b.event || b.method
        } catch (a) {}
        if ("ready" != c || f || (f = !0), !/^https?:\/\/player.vimeo.com/.test(a.origin)) return !1;
        "*" === g && (g = a.origin), a = b.value;
        var d = b.data,
            h = "" === h ? null : b.player_id;
        return b = h ? e[h][c] : e[c], c = [], !!b && (void 0 !== a && c.push(a), d && c.push(d), h && c.push(h), 0 < c.length ? b.apply(null, c) : b.call())
    }

    function d(a, b, c) {
        c ? (e[c] || (e[c] = {}), e[c][a] = b) : e[a] = b
    }
    var e = {},
        f = !1,
        g = "*";
    return a.fn = a.prototype = {
        element: null,
        init: function(a) {
            return "string" == typeof a && (a = document.getElementById(a)), this.element = a, this
        },
        api: function(a, c) {
            if (!this.element || !a) return !1;
            var e = this.element,
                f = "" !== e.id ? e.id : null,
                g = c && c.constructor && c.call && c.apply ? null : c,
                h = c && c.constructor && c.call && c.apply ? c : null;
            return h && d(a, h, f), b(a, g, e), this
        },
        addEvent: function(a, c) {
            if (!this.element) return !1;
            var e = this.element,
                g = "" !== e.id ? e.id : null;
            return d(a, c, g), "ready" != a ? b("addEventListener", a, e) : "ready" == a && f && c.call(null, g), this
        },
        removeEvent: function(a) {
            if (!this.element) return !1;
            var c = this.element,
                d = "" !== c.id ? c.id : null;
            a: {
                if (d && e[d]) {
                    if (!e[d][a]) {
                        d = !1;
                        break a
                    }
                    e[d][a] = null
                } else {
                    if (!e[a]) {
                        d = !1;
                        break a
                    }
                    e[a] = null
                }
                d = !0
            }
            "ready" != a && d && b("removeEventListener", a, c)
        }
    }, a.fn.init.prototype = a.fn, window.addEventListener ? window.addEventListener("message", c, !1) : window.attachEvent("onmessage", c), window.Froogaloop = window.$f = a
}();
! function(a) {
    "use strict";
    a.fn.fitVids = function(b) {
        var c = {
                customSelector: null
            },
            d = document.createElement("div"),
            e = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
        return d.className = "fit-vids-style", d.innerHTML = "&shy;<style>               .fluid-width-video-wrapper {                 width: 100%;                              position: relative;                       padding: 0;                            }                                                                                   .fluid-width-video-wrapper iframe,        .fluid-width-video-wrapper object,        .fluid-width-video-wrapper embed {           position: absolute;                       top: 0;                                   left: 0;                                  width: 100%;                              height: 100%;                          }                                       </style>", e.parentNode.insertBefore(d, e), b && a.extend(c, b), this.each(function() {
            var b = ["iframe[src*='player.vimeo.com']", "iframe[src*='www.youtube.com']", "iframe[src*='www.kickstarter.com']", "object", "embed"];
            c.customSelector && b.push(c.customSelector), a(this).find(b.join(",")).each(function() {
                var b = a(this);
                if (!("embed" === this.tagName.toLowerCase() && b.parent("object").length || b.parent(".fluid-width-video-wrapper").length)) {
                    var c = "object" === this.tagName.toLowerCase() || b.attr("height") && !isNaN(parseInt(b.attr("height"), 10)) ? parseInt(b.attr("height"), 10) : b.height(),
                        d = isNaN(parseInt(b.attr("width"), 10)) ? b.width() : parseInt(b.attr("width"), 10),
                        e = c / d;
                    if (!b.attr("id")) {
                        var f = "fitvid" + Math.floor(999999 * Math.random());
                        b.attr("id", f)
                    }
                    b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * e + "%"), b.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(jQuery);
var SlideManager = function() {
    var a = efu.log,
        b = efu.log,
        c = efu.err,
        d = function(a, d, e) {
            var f, g, h, i, j = !1,
                k = !1,
                l = !1,
                m = null,
                n = null,
                o = function() {
                    return f = e.attr("id").split("-")[1], n = e.find("iframe"), 0 === n.length ? (j = !0, b("SM: IMAGE slide created: ", f, h, j, k, l, i), !1) : (g = n[0], h = n.attr("id"), i = "1" === n.attr("data-video-auto"), k = n.hasClass("youtube"), l = n.hasClass("vimeo"), b("SM: VIDEO slide created: ", f, h, j, k, l, i), !0)
                },
                p = function() {
                    b("SM: YT: ", f, h, d, a.current), void 0 === YT || void 0 === YT.Player || 0 == YT.loaded ? (window.onYouTubePlayerAPIReady = function() {
                        q()
                    }, $.getScript("//www.youtube.com/player_api")) : q()
                },
                q = function() {
                    m = new YT.Player(h, {
                        events: {
                            onError: function() {
                                c("SM: YT: onError", arguments, this)
                            },
                            onReady: function(c) {
                                b("SM: YT: ready", c, this), a.current === d && i && !a.isEditor && c.target.playVideo()
                            },
                            onStateChange: function(c) {
                                b("SM: YT: onStateChange", a.auto, c, this, YT), !0 === a.auto && (c.data === YT.PlayerState.PLAYING ? (b("SM: YT: start play --\x3e stopAuto"), a.slider.stopAuto()) : c.data === YT.PlayerState.PAUSED ? (b("SM: YT: stop play --\x3e startAuto"), a.slider.startAuto()) : c.data === YT.PlayerState.ENDED && (b("SM: YT: end play --\x3e goToNextSlide"), setTimeout(function() {
                                    a.slider.goToNextSlide()
                                }, 1e3)))
                            }
                        }
                    })
                },
                r = function() {
                    b("SM: VM: ", f, h, d, a.current), m = $f(g), m.addEvent("ready", function() {
                        b("SM: VM: ready: ", m, arguments, this), a.current === d && i && !a.isEditor && m.api("play"), !0 === a.auto && (m.addEvent("play", function() {
                            !0 === a.auto && (b("SM: VM: start play --\x3e stopAuto"), a.slider.stopAuto())
                        }), m.addEvent("pause", function() {
                            !0 === a.auto && (b("SM: VM: stop play --\x3e startAuto"), a.slider.startAuto())
                        }), m.addEvent("finish", function() {
                            !0 === a.auto && (b("SM: VM: end play --\x3e goToNextSlide"), a.slider.goToNextSlide())
                        }))
                    })
                };
            return this.activatePlayer = function() {
                j || (k && p(), l && r())
            }, this.isYoutube = function() {
                return k
            }, this.pause = function() {
                j || null === m || (k && $.isFunction(m.pauseVideo) && m.pauseVideo(), l && $.isFunction(m.api) && m.api("pause"))
            }, this.play = function() {
                j || a.isEditor || !i || null === m || setTimeout(function() {
                    k && $.isFunction(m.playVideo) && m.playVideo(), l && $.isFunction(m.api) && m.api("play")
                }, 1e3)
            }, o(), this
        };
    return {
        auto: !1,
        current: 0,
        hash: {},
        isEditor: !1,
        isSliderLoaded: !1,
        isSliderReady: !1,
        isYoutube: !1,
        list: [],
        slider: null,
        $slides: null,
        init: function(c, d, e) {
            b("Slide Manager (SM): ", c, d), this.isEditor = e, this.$slides = c, this.auto = d;
            var f = this;
            c.each(function(b) {
                a("SM: init slide #", b), f.add(b, $(this))
            })
        },
        add: function(a, b) {
            var c = new d(this, a, b);
            this.list.push(c), this.hash[c.id] = c, this.isYoutube = this.isYoutube || c.isYoutube()
        },
        get: function(a) {
            return this.hash[a]
        },
        onSliderLoad: function(b) {
            a("SM: onSliderLoad: ", b, this.slider), this.current = b;
            var c = this;
            this.isYoutube && void 0 === YT ? window.onYouTubeIframeAPIReady = function() {
                a("SM: onYouTubeIframeAPIReady: ", YT), c.playersActivate()
            } : this.playersActivate()
        },
        onSliderReady: function(b, c) {
            null === this.slider && (this.slider = b), a("SM: next-prev: ", c.find("a.bx-prev, a.bx-next"));
            var d = this;
            c.on("click", "a.bx-prev, a.bx-next, a.bx-pager-link", function() {
                a("SM: next-prev: stopAuto: ", this), d.auto = !1, d.slider.stopAuto()
            })
        },
        onSlideBefore: function(b, c, d) {
            a("SM: onSlideBefore: ", b, c, d);
            var e = this.list[c];
            void 0 !== e && e.pause()
        },
        onSlideAfter: function(b, c, d) {
            a("SM: onSlideAfter: ", b, c, d), this.list[d].play()
        },
        playersActivate: function() {
            $.each(this.list, function(b, c) {
                a("SM: activate player #", b), c.activatePlayer(this.current)
            })
        }
    }
};
if (!window.YT) var YT = {
    loading: 0,
    loaded: 0
};
if (!window.YTConfig) var YTConfig = {
    host: "http://www.youtube.com"
};
YT.loading || (YT.loading = 1, function() {
        var a = [];
        YT.ready = function(b) {
            YT.loaded ? b() : a.push(b)
        }, window.onYTReady = function() {
            YT.loaded = 1;
            for (var b = 0; b < a.length; b++) try {
                a[b]()
            } catch (a) {}
        }, YT.setConfig = function(a) {
            for (var b in a) a.hasOwnProperty(b) && (YTConfig[b] = a[b])
        };
        var b = document.createElement("script");
        b.type = "text/javascript", b.id = "www-widgetapi-script", b.src = "https://s.ytimg.com/yts/jsbin/www-widgetapi-vflj3RSGk/www-widgetapi.js", b.async = !0;
        var c = document.getElementsByTagName("script")[0];
        c.parentNode.insertBefore(b, c)
    }()),
    function(a, b, c) {
        b.fn.touchwipe = function(a) {
            var c = {
                min_move_x: 20,
                min_move_y: 20,
                wipeLeft: function() {},
                wipeRight: function() {},
                wipeUp: function() {},
                wipeDown: function() {},
                preventDefaultEvents: !0
            };
            return a && b.extend(c, a), this.each(function() {
                function a() {
                    this.removeEventListener("touchmove", b), e = null, g = !1
                }

                function b(b) {
                    if (c.preventDefaultEvents && b.preventDefault(), g) {
                        var d = b.touches[0].pageX,
                            h = b.touches[0].pageY,
                            i = e - d,
                            j = f - h;
                        Math.abs(i) >= c.min_move_x ? (a(), i > 0 ? c.wipeLeft() : c.wipeRight()) : Math.abs(j) >= c.min_move_y && (a(), j > 0 ? c.wipeDown() : c.wipeUp())
                    }
                }

                function d(a) {
                    1 == a.touches.length && (e = a.touches[0].pageX, f = a.touches[0].pageY, g = !0, this.addEventListener("touchmove", b, !1))
                }
                var e, f, g = !1;
                "ontouchstart" in document.documentElement && this.addEventListener("touchstart", d, !1)
            }), this
        }, b.elastislide = function(a, c) {
            this.$el = b(c), this._init(a)
        }, b.elastislide.defaults = {
            speed: 450,
            easing: "",
            imageW: 190,
            margin: 3,
            border: 2,
            minItems: 1,
            current: 0,
            onClick: function() {
                return !1
            }
        }, b.elastislide.prototype = {
            _init: function(a) {
                this.options = b.extend(!0, {}, b.elastislide.defaults, a), this.$slider = this.$el.find("ul"), this.$items = this.$slider.children("li"), this.itemsCount = this.$items.length, this.$esCarousel = this.$slider.parent(), this._validateOptions(), this._configure(), this._addControls(), this._initEvents(), this.$slider.show(), this._slideToCurrent(!1)
            },
            _validateOptions: function() {
                this.options.speed < 0 && (this.options.speed = 450), this.options.margin < 0 && (this.options.margin = 4), this.options.border < 0 && (this.options.border = 1), (this.options.minItems < 1 || this.options.minItems > this.itemsCount) && (this.options.minItems = 1), this.options.current > this.itemsCount - 1 && (this.options.current = 0)
            },
            _configure: function() {
                this.current = this.options.current, this.visibleWidth = this.$esCarousel.width(), this.visibleWidth < this.options.minItems * (this.options.imageW + 2 * this.options.border) + (this.options.minItems - 1) * this.options.margin ? (this._setDim((this.visibleWidth - (this.options.minItems - 1) * this.options.margin) / this.options.minItems), this._setCurrentValues(), this.fitCount = this.options.minItems) : (this._setDim(), this._setCurrentValues()), this.$slider.css({
                    width: this.sliderW
                })
            },
            _setDim: function(a) {
                this.$items.css({
                    marginRight: this.options.margin,
                    width: a || this.options.imageW + 2 * this.options.border
                }).children("a").css({
                    borderWidth: this.options.border
                })
            },
            _setCurrentValues: function() {
                this.itemW = this.$items.outerWidth(!0), this.sliderW = this.itemW * this.itemsCount, this.visibleWidth = this.$esCarousel.width(), this.fitCount = Math.floor(this.visibleWidth / this.itemW)
            },
            _addControls: function() {
                this.$navNext = b('<span class="es-nav-next">Next</span>'), this.$navPrev = b('<span class="es-nav-prev">Previous</span>'), b('<div class="es-nav"/>').append(this.$navPrev).append(this.$navNext).appendTo(this.$el)
            },
            _toggleControls: function(a, b) {
                a && b ? 1 === b ? "right" === a ? this.$navNext.show() : this.$navPrev.show() : "right" === a ? this.$navNext.hide() : this.$navPrev.hide() : (this.current === this.itemsCount - 1 || this.fitCount >= this.itemsCount) && this.$navNext.hide()
            },
            _initEvents: function() {
                var c = this;
                b(a).on("resize.elastislide", function(a) {
                    c._reload(), clearTimeout(c.resetTimeout), c.resetTimeout = setTimeout(function() {
                        c._slideToCurrent()
                    }, 200)
                }), this.$navNext.on("click.elastislide", function(a) {
                    c._slide("right")
                }), this.$navPrev.on("click.elastislide", function(a) {
                    c._slide("left")
                }), this.$slider.on("click.elastislide", "li", function(a) {
                    return c.options.onClick(b(this)), !1
                }), c.$slider.touchwipe({
                    wipeLeft: function() {
                        c._slide("right")
                    },
                    wipeRight: function() {
                        c._slide("left")
                    }
                })
            },
            reload: function(a) {
                this._reload(), a && a.call()
            },
            _reload: function() {
                var a = this;
                a._setCurrentValues(), a.visibleWidth < a.options.minItems * (a.options.imageW + 2 * a.options.border) + (a.options.minItems - 1) * a.options.margin ? (a._setDim((a.visibleWidth - (a.options.minItems - 1) * a.options.margin) / a.options.minItems), a._setCurrentValues(), a.fitCount = a.options.minItems) : (a._setDim(), a._setCurrentValues()), a.$slider.css({
                    width: a.sliderW + 10
                })
            },
            _slide: function(a, d, e, f) {
                var g = parseFloat(this.$slider.css("margin-left"));
                if (d === c) {
                    var d, h = this.fitCount * this.itemW;
                    if (h < 0) return !1;
                    if ("right" === a && this.sliderW - (Math.abs(g) + h) < this.visibleWidth) h = this.sliderW - (Math.abs(g) + this.visibleWidth) - this.options.margin, this._toggleControls("right", -1), this._toggleControls("left", 1);
                    else if ("left" === a && Math.abs(g) - h < 0) h = Math.abs(g), this._toggleControls("left", -1), this._toggleControls("right", 1);
                    else {
                        var i;
                        i = "right" === a ? Math.abs(g) + this.options.margin + Math.abs(h) : Math.abs(g) - this.options.margin - Math.abs(h), i > 0 ? this._toggleControls("left", 1) : this._toggleControls("left", -1), i < this.sliderW - this.visibleWidth ? this._toggleControls("right", 1) : this._toggleControls("right", -1)
                    }
                    d = "right" === a ? "-=" + h : "+=" + h
                } else {
                    var i = Math.abs(d);
                    Math.max(this.sliderW, this.visibleWidth) - i < this.visibleWidth && (d = -(Math.max(this.sliderW, this.visibleWidth) - this.visibleWidth), 0 !== d && (d += this.options.margin), this._toggleControls("right", -1), i = Math.abs(d)), i > 0 ? this._toggleControls("left", 1) : this._toggleControls("left", -1), Math.max(this.sliderW, this.visibleWidth) - this.visibleWidth > i + this.options.margin ? this._toggleControls("right", 1) : this._toggleControls("right", -1)
                }
                b.fn.applyStyle = e === c ? b.fn.animate : b.fn.css;
                var j = {
                    marginLeft: d
                };
                this.$slider.stop().applyStyle(j, b.extend(!0, [], {
                    duration: this.options.speed,
                    easing: this.options.easing,
                    complete: function() {
                        f && f.call()
                    }
                }))
            },
            _slideToCurrent: function(a) {
                var b = this.current * this.itemW;
                this._slide("", -b, a)
            },
            add: function(a, b) {
                this.$items = this.$items.add(a), this.itemsCount = this.$items.length, this._setDim(), this._setCurrentValues(), this.$slider.css({
                    width: this.sliderW
                }), this._slideToCurrent(), b && b.call(a)
            },
            setCurrent: function(a, b) {
                this.current = a;
                var c = Math.abs(parseFloat(this.$slider.css("margin-left"))),
                    d = c + this.visibleWidth,
                    e = Math.abs(this.current * this.itemW);
                (e + this.itemW > d || e < c) && this._slideToCurrent(), b && b.call()
            },
            destroy: function(a) {
                this._destroy(a)
            },
            _destroy: function(c) {
                this.$el.off(".elastislide").removeData("elastislide"), b(a).off(".elastislide"), c && c.call()
            }
        };
        var d = function(a) {
            this.console && console.error(a)
        };
        b.fn.elastislide = function(a) {
            if ("string" == typeof a) {
                var c = Array.prototype.slice.call(arguments, 1);
                this.each(function() {
                    var e = b.data(this, "elastislide");
                    return e ? b.isFunction(e[a]) && "_" !== a.charAt(0) ? void e[a].apply(e, c) : void d("no such method '" + a + "' for elastislide instance") : void d("cannot call methods on elastislide prior to initialization; attempted to call method '" + a + "'")
                })
            } else this.each(function() {
                b.data(this, "elastislide") || b.data(this, "elastislide", new b.elastislide(a, this))
            });
            return this
        }
    }(window, jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
        def: "easeOutQuad",
        swing: function(a, b, c, d, e) {
            return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
        },
        easeInQuad: function(a, b, c, d, e) {
            return d * (b /= e) * b + c
        },
        easeOutQuad: function(a, b, c, d, e) {
            return -d * (b /= e) * (b - 2) + c
        },
        easeInOutQuad: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
        },
        easeInCubic: function(a, b, c, d, e) {
            return d * (b /= e) * b * b + c
        },
        easeOutCubic: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b + 1) + c
        },
        easeInOutCubic: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
        },
        easeInQuart: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b + c
        },
        easeOutQuart: function(a, b, c, d, e) {
            return -d * ((b = b / e - 1) * b * b * b - 1) + c
        },
        easeInOutQuart: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
        },
        easeInQuint: function(a, b, c, d, e) {
            return d * (b /= e) * b * b * b * b + c
        },
        easeOutQuint: function(a, b, c, d, e) {
            return d * ((b = b / e - 1) * b * b * b * b + 1) + c
        },
        easeInOutQuint: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
        },
        easeInSine: function(a, b, c, d, e) {
            return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
        },
        easeOutSine: function(a, b, c, d, e) {
            return d * Math.sin(b / e * (Math.PI / 2)) + c
        },
        easeInOutSine: function(a, b, c, d, e) {
            return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
        },
        easeInExpo: function(a, b, c, d, e) {
            return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
        },
        easeOutExpo: function(a, b, c, d, e) {
            return b == e ? c + d : d * (1 - Math.pow(2, -10 * b / e)) + c
        },
        easeInOutExpo: function(a, b, c, d, e) {
            return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (2 - Math.pow(2, -10 * --b)) + c
        },
        easeInCirc: function(a, b, c, d, e) {
            return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
        },
        easeOutCirc: function(a, b, c, d, e) {
            return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
        },
        easeInOutCirc: function(a, b, c, d, e) {
            return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
        },
        easeInElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return -h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g) + c
        },
        easeOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (1 == (b /= e)) return c + d;
            if (g || (g = .3 * e), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * (2 * Math.PI) / g) + d + c
        },
        easeInOutElastic: function(a, b, c, d, e) {
            var f = 1.70158,
                g = 0,
                h = d;
            if (0 == b) return c;
            if (2 == (b /= e / 2)) return c + d;
            if (g || (g = e * (.3 * 1.5)), h < Math.abs(d)) {
                h = d;
                var f = g / 4
            } else var f = g / (2 * Math.PI) * Math.asin(d / h);
            return b < 1 ? h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g) * -.5 + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g) * .5 + d + c
        },
        easeInBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
        },
        easeOutBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
        },
        easeInOutBack: function(a, b, c, d, e, f) {
            return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * (b * b * ((1 + (f *= 1.525)) * b - f)) + c : d / 2 * ((b -= 2) * b * ((1 + (f *= 1.525)) * b + f) + 2) + c
        },
        easeInBounce: function(a, b, c, d, e) {
            return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
        },
        easeOutBounce: function(a, b, c, d, e) {
            return (b /= e) < 1 / 2.75 ? d * (7.5625 * b * b) + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
        },
        easeInOutBounce: function(a, b, c, d, e) {
            return b < e / 2 ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
        }
    }),
    function(a) {
        function b(b, c, d, e) {
            var f = {
                data: e || (c ? c.data : {}),
                _wrap: c ? c._wrap : null,
                tmpl: null,
                parent: c || null,
                nodes: [],
                calls: j,
                nest: k,
                wrap: l,
                html: m,
                update: n
            };
            return b && a.extend(f, b, {
                nodes: [],
                parent: c
            }), d && (f.tmpl = d, f._ctnt = f._ctnt || f.tmpl(a, f), f.key = ++v, (x.length ? t : s)[v] = f), f
        }

        function c(b, e, f) {
            var g, h = f ? a.map(f, function(a) {
                return "string" == typeof a ? b.key ? a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + q + '="' + b.key + '" $2') : a : c(a, b, a._ctnt)
            }) : b;
            return e ? h : (h = h.join(""), h.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function(b, c, e, f) {
                g = a(e).get(), i(g), c && (g = d(c).concat(g)), f && (g = g.concat(d(f)))
            }), g || d(h))
        }

        function d(b) {
            var c = document.createElement("div");
            return c.innerHTML = b, a.makeArray(c.childNodes)
        }

        function e(b) {
            return new Function("jQuery", "$item", "var $=jQuery,call,_=[],$data=$item.data;with($data){_.push('" + a.trim(b).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, function(b, c, d, e, f, h, i) {
                var j, k, l, m = a.tmpl.tag[d];
                if (!m) throw "Template command not found: " + d;
                return j = m._default || [], h && !/\w$/.test(f) && (f += h, h = ""), f ? (f = g(f), i = i ? "," + g(i) + ")" : h ? ")" : "", k = h ? f.indexOf(".") > -1 ? f + h : "(" + f + ").call($item" + i : f, l = h ? k : "(typeof(" + f + ")==='function'?(" + f + ").call($item):(" + f + "))") : l = k = j.$1 || "null", e = g(e), "');" + m[c ? "close" : "open"].split("$notnull_1").join(f ? "typeof(" + f + ")!=='undefined' && (" + f + ")!=null" : "true").split("$1a").join(l).split("$1").join(k).split("$2").join(e ? e.replace(/\s*([^\(]+)\s*(\((.*?)\))?/g, function(a, b, c, d) {
                    return d = d ? "," + d + ")" : c ? ")" : "", d ? "(" + b + ").call($item" + d : a
                }) : j.$2 || "") + "_.push('"
            }) + "');}return _;")
        }

        function f(b, d) {
            b._wrap = c(b, !0, a.isArray(d) ? d : [r.test(d) ? d : a(d).html()]).join("")
        }

        function g(a) {
            return a ? a.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null
        }

        function h(a) {
            var b = document.createElement("div");
            return b.appendChild(a.cloneNode(!0)), b.innerHTML
        }

        function i(c) {
            function d(c) {
                function d(a) {
                    a += j, g = k[a] = k[a] || b(g, s[g.parent.key + j] || g.parent, null, !0)
                }
                var e, f, g, h, i = c;
                if (h = c.getAttribute(q)) {
                    for (; i.parentNode && 1 === (i = i.parentNode).nodeType && !(e = i.getAttribute(q)););
                    e !== h && (i = i.parentNode ? 11 === i.nodeType ? 0 : i.getAttribute(q) || 0 : 0, (g = s[h]) || (g = t[h], g = b(g, s[i] || t[i], null, !0), g.key = ++v, s[v] = g), w && d(h)), c.removeAttribute(q)
                } else w && (g = a.data(c, "tmplItem")) && (d(g.key), s[g.key] = g, i = a.data(c.parentNode, "tmplItem"), i = i ? i.key : 0);
                if (g) {
                    for (f = g; f && f.key != i;) f.nodes.push(c), f = f.parent;
                    delete g._ctnt, delete g._wrap, a.data(c, "tmplItem", g)
                }
            }
            var e, f, g, h, i, j = "_" + w,
                k = {};
            for (g = 0, h = c.length; g < h; g++)
                if (1 === (e = c[g]).nodeType) {
                    for (f = e.getElementsByTagName("*"), i = f.length - 1; i >= 0; i--) d(f[i]);
                    d(e)
                }
        }

        function j(a, b, c, d) {
            if (!a) return x.pop();
            x.push({
                _: a,
                tmpl: b,
                item: this,
                data: c,
                options: d
            })
        }

        function k(b, c, d) {
            return a.tmpl(a.template(b), c, d, this)
        }

        function l(b, c) {
            var d = b.options || {};
            return d.wrapped = c, a.tmpl(a.template(b.tmpl), b.data, d, b.item)
        }

        function m(b, c) {
            var d = this._wrap;
            return a.map(a(a.isArray(d) ? d.join("") : d).filter(b || "*"), function(a) {
                return c ? a.innerText || a.textContent : a.outerHTML || h(a)
            })
        }

        function n() {
            var b = this.nodes;
            a.tmpl(null, null, null, this).insertBefore(b[0]), a(b).remove()
        }
        var o, p = a.fn.domManip,
            q = "_tmplitem",
            r = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
            s = {},
            t = {},
            u = {
                key: 0,
                data: {}
            },
            v = 0,
            w = 0,
            x = [];
        a.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(b, c) {
            a.fn[b] = function(d) {
                var e, f, g, h, i = [],
                    j = a(d),
                    k = 1 === this.length && this[0].parentNode;
                if (o = s || {}, k && 11 === k.nodeType && 1 === k.childNodes.length && 1 === j.length) j[c](this[0]), i = this;
                else {
                    for (f = 0, g = j.length; f < g; f++) w = f, e = (f > 0 ? this.clone(!0) : this).get(), a.fn[c].apply(a(j[f]), e), i = i.concat(e);
                    w = 0, i = this.pushStack(i, b, j.selector)
                }
                return h = o, o = null, a.tmpl.complete(h), i
            }
        }), a.fn.extend({
            tmpl: function(b, c, d) {
                return a.tmpl(this[0], b, c, d)
            },
            tmplItem: function() {
                return a.tmplItem(this[0])
            },
            template: function(b) {
                return a.template(b, this[0])
            },
            domManip: function(b, c, d) {
                if (b[0] && b[0].nodeType) {
                    for (var e, f = a.makeArray(arguments), g = b.length, h = 0; h < g && !(e = a.data(b[h++], "tmplItem")););
                    g > 1 && (f[0] = [a.makeArray(b)]), e && w && (f[2] = function(b) {
                        a.tmpl.afterManip(this, b, d)
                    }), p.apply(this, f)
                } else p.apply(this, arguments);
                return w = 0, !o && a.tmpl.complete(s), this
            }
        }), a.extend({
            tmpl: function(d, e, g, h) {
                var i, j = !h;
                if (j) h = u, d = a.template[d] || a.template(null, d), t = {};
                else if (!d) return d = h.tmpl, s[h.key] = h, h.nodes = [], h.wrapped && f(h, h.wrapped), a(c(h, null, h.tmpl(a, h)));
                return d ? ("function" == typeof e && (e = e.call(h || {})), g && g.wrapped && f(g, g.wrapped), i = a.isArray(e) ? a.map(e, function(a) {
                    return a ? b(g, h, d, a) : null
                }) : [b(g, h, d, e)], j ? a(c(h, null, i)) : i) : []
            },
            tmplItem: function(b) {
                var c;
                for (b instanceof a && (b = b[0]); b && 1 === b.nodeType && !(c = a.data(b, "tmplItem")) && (b = b.parentNode););
                return c || u
            },
            template: function(b, c) {
                return c ? ("string" == typeof c ? c = e(c) : c instanceof a && (c = c[0] || {}), c.nodeType && (c = a.data(c, "tmpl") || a.data(c, "tmpl", e(c.innerHTML))), "string" == typeof b ? a.template[b] = c : c) : b ? "string" != typeof b ? a.template(null, b) : a.template[b] || a.template(null, r.test(b) ? b : a(b)) : null
            },
            encode: function(a) {
                return ("" + a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")
            }
        }), a.extend(a.tmpl, {
            tag: {
                tmpl: {
                    _default: {
                        $2: "null"
                    },
                    open: "if($notnull_1){_=_.concat($item.nest($1,$2));}"
                },
                wrap: {
                    _default: {
                        $2: "null"
                    },
                    open: "$item.calls(_,$1,$2);_=[];",
                    close: "call=$item.calls();_=call._.concat($item.wrap(call,_));"
                },
                each: {
                    _default: {
                        $2: "$index, $value"
                    },
                    open: "if($notnull_1){$.each($1a,function($2){with(this){",
                    close: "}});}"
                },
                if: {
                    open: "if(($notnull_1) && $1a){",
                    close: "}"
                },
                else: {
                    _default: {
                        $1: "true"
                    },
                    open: "}else if(($notnull_1) && $1a){"
                },
                html: {
                    open: "if($notnull_1){_.push($1a);}"
                },
                "=": {
                    _default: {
                        $1: "$data"
                    },
                    open: "if($notnull_1){_.push($.encode($1a));}"
                },
                "!": {
                    open: ""
                }
            },
            complete: function() {
                s = {}
            },
            afterManip: function(b, c, d) {
                var e = 11 === c.nodeType ? a.makeArray(c.childNodes) : 1 === c.nodeType ? [c] : [];
                d.call(b, c), i(e), w++
            }
        })
    }(jQuery),
    function($) {
        var methods = {
            galleryBin: {},
            init: function(a) {
                var b = {
                    galleryid: 0,
                    ratio: 1.5,
                    margin: 5,
                    numberOfRowsToShow: 2,
                    numberOfColumns: 3,
                    rowClassName: "gallery_row",
                    thumbnailDisplay: "fit"
                };
                return this.each(function() {
                    var c = $(this),
                        d = c.data("galleryPaging");
                    d || (a.galleryid = c.attr("id"), c.data("galleryPaging", $.extend(b, a)), d = c.data("galleryPaging")), methods.galleryBin[d.galleryid] = c;
                    var e = c.find("." + d.rowClassName);
                    e.hide(), e.slice(0, d.numberOfRowsToShow).show(), setTimeout(function() {
                        c.galleryPaging("setDefaultHeight"), c.galleryPaging("setThumbnailDisplay")
                    }, 1);
                    var f = $(methods.getNavBar(c, d));
                    f.find("li").each(function() {
                        $(this).click(function() {
                            e.hide(), f.find("li").removeClass("selected"), $(this).addClass("selected");
                            var a = $(this).index();
                            methods.paginate(a, methods.galleryBin[d.galleryid])
                        })
                    }), c.closest(".widget-wrapper").append(f)
                })
            },
            getNavBar: function(a, b) {
                var c = a.find("." + b.rowClassName).length,
                    d = Math.ceil(c / b.numberOfRowsToShow),
                    e = "";
                return d > 1 && (e = methods.buildNavBarHtml(d)), e
            },
            buildNavBarHtml: function(a) {
                for (var b = '<div class="gallery_navbar_wrapper"><ul class="image_gallery_navbar">', c = 1; c <= a; c++) b += 1 == c ? '<li class="selected"></li>' : "<li></li>";
                return b += "</ul></div>"
            },
            paginate: function(a, b) {
                var c = b.data("galleryPaging");
                b.find("." + c.rowClassName).slice(a * c.numberOfRowsToShow, (a + 1) * c.numberOfRowsToShow).show(), methods.setThumbnailDisplay(b)
            },
            setThumbnailDisplay: function(gallery) {
                if (void 0 == gallery) var gallery = $(this);
                var data = gallery.data("galleryPaging"),
                    galleryWidth = gallery.width(),
                    galleryHeight = gallery.height(),
                    numberOfRows = data.numberOfRowsToShow,
                    numberOfColumns = data.numberOfColumns,
                    thumbnailWidth = eval(galleryWidth / numberOfColumns),
                    thumbnailHeight = eval(galleryHeight / numberOfRows),
                    thumbanilRatio = data.ratio;
                gallery.find("img").each(function() {
                    var a = new Image,
                        b = $(this);
                    $(a).load(function() {
                        var a = this.width,
                            c = this.height,
                            d = a / c;
                        if ("fit" == data.thumbnailDisplay) d > thumbanilRatio ? (b.css("height", "auto"), b.css("width", "100%")) : (b.css("width", "auto"), b.css("height", gallery.height() / numberOfRows - (numberOfRows - 1) * data.margin));
                        else if ("fill" == data.thumbnailDisplay)
                            if (d < thumbanilRatio) b.css("height", gallery.height() / numberOfRows - (numberOfRows - 1) * data.margin), b.css("height", "auto"), b.css("width", "100%");
                            else {
                                gallery.height(), data.margin;
                                b.css("width", "auto"), b.css("height", gallery.height() / numberOfRows - (numberOfRows - 1) * data.margin)
                            }
                    }), a.src = $(this).attr("src"), a.width = $(this).attr("data-width"), a.height = $(this).attr("data-height")
                })
            },
            setDefaultHeight: function() {
                var a = $(this),
                    b = (a.attr("style"), a.data("galleryPaging"));
                a.height(a.width() / b.ratio / (b.numberOfColumns / b.numberOfRowsToShow))
            }
        };
        $.fn.galleryPaging = function(a) {
            return methods[a] ? methods[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof a && a ? void $.error("Method " + a + " does not exist on jQuery.galleryPaging") : methods.init.apply(this, arguments)
        }
    }(jQuery),
    function($) {
        var methods = {
            galleryBin: {},
            init: function(a) {
                var b = {
                    galleryid: 0,
                    ratio: 1.5,
                    margin: 5,
                    numberOfRowsToShow: 2,
                    numberOfColumns: 3,
                    rowClassName: "gallery_row",
                    thumbnailDisplay: "fit"
                };
                return this.each(function() {
                    var c = $(this),
                        d = c.data("galleryPaging");
                    d || (a.galleryid = c.attr("id"), c.data("galleryPaging", $.extend(b, a)), d = c.data("galleryPaging")), methods.galleryBin[d.galleryid] = c;
                    var e = c.find("." + d.rowClassName);
                    e.hide(), e.slice(0, d.numberOfRowsToShow).show(), setTimeout(function() {
                        c.galleryPaging("setDefaultHeight"), c.galleryPaging("setThumbnailDisplay")
                    }, 1);
                    var f = $(methods.getNavBar(c, d));
                    f.find("li").each(function() {
                        $(this).click(function() {
                            e.hide(), f.find("li").removeClass("selected"), $(this).addClass("selected");
                            var a = $(this).index();
                            methods.paginate(a, methods.galleryBin[d.galleryid])
                        })
                    }), c.closest(".widget-wrapper").append(f)
                })
            },
            getNavBar: function(a, b) {
                var c = a.find("." + b.rowClassName).length,
                    d = Math.ceil(c / b.numberOfRowsToShow),
                    e = "";
                return d > 1 && (e = methods.buildNavBarHtml(d)), e
            },
            buildNavBarHtml: function(a) {
                for (var b = '<div class="gallery_navbar_wrapper"><ul class="image_gallery_navbar">', c = 1; c <= a; c++) b += 1 == c ? '<li class="selected"></li>' : "<li></li>";
                return b += "</ul></div>"
            },
            paginate: function(a, b) {
                var c = b.data("galleryPaging");
                b.find("." + c.rowClassName).slice(a * c.numberOfRowsToShow, (a + 1) * c.numberOfRowsToShow).show(), methods.setThumbnailDisplay(b)
            },
            setThumbnailDisplay: function(gallery) {
                if (void 0 == gallery) var gallery = $(this);
                var data = gallery.data("galleryPaging"),
                    galleryWidth = gallery.width(),
                    galleryHeight = gallery.height(),
                    numberOfRows = data.numberOfRowsToShow,
                    numberOfColumns = data.numberOfColumns,
                    thumbnailWidth = eval(galleryWidth / numberOfColumns),
                    thumbnailHeight = eval(galleryHeight / numberOfRows),
                    thumbanilRatio = data.ratio;
                gallery.find("img").each(function() {
                    var a = new Image,
                        b = $(this);
                    $(a).load(function() {
                        var a = this.width,
                            c = this.height,
                            d = a / c;
                        if ("fit" == data.thumbnailDisplay) d > thumbanilRatio ? (b.css("height", "auto"), b.css("width", "100%")) : (b.css("width", "auto"), b.css("height", gallery.height() / numberOfRows - (numberOfRows - 1) * data.margin));
                        else if ("fill" == data.thumbnailDisplay)
                            if (d < thumbanilRatio) b.css("height", gallery.height() / numberOfRows - (numberOfRows - 1) * data.margin), b.css("height", "auto"), b.css("width", "100%");
                            else {
                                gallery.height(), data.margin;
                                b.css("width", "auto"), b.css("height", gallery.height() / numberOfRows - (numberOfRows - 1) * data.margin)
                            }
                    }), a.src = $(this).attr("src"), a.width = $(this).attr("data-width"), a.height = $(this).attr("data-height")
                })
            },
            setDefaultHeight: function() {
                var a = $(this),
                    b = (a.attr("style"), a.data("galleryPaging"));
                a.height(a.width() / b.ratio / (b.numberOfColumns / b.numberOfRowsToShow))
            }
        };
        $.fn.galleryPaging = function(a) {
            return methods[a] ? methods[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof a && a ? void $.error("Method " + a + " does not exist on jQuery.galleryPaging") : methods.init.apply(this, arguments)
        }
    }(jQuery);
var WC = {
        clocks: {
            collection: {},
            bgImages: ["Noon", "Dusk", "Dawn", "Evening", "Night"],
            interval: 998,
            isFirst: !0,
            list: [],
            staticUrl: null,
            init: function(a) {
                var b = this;
                !0 === this.isFirst && (this.isFirst = !1, this.staticUrl = a.STATIC_URL, this.preLoadBgImages(), window.setInterval(function() {
                    b.tick()
                }, this.interval));
                var c = new WC.Clock(a);
                this.collection[c.id] = c, this.list.push(c)
            },
            preLoadBgImages: function() {
                var a, b = new Image;
                for (a in this.bgImages) b.src = this.staticUrl + this.bgImages[a] + ".png"
            },
            onLocationChange: function(a) {
                collection[a].changeLocation()
            },
            tick: function() {
                var a = 0;
                for (a = 0; a < this.list.length; a++) this.list[a].tick()
            }
        },
        Clock: function(a) {
            function b() {
                c.id = a.BOX_ID, c.isShowBig = a.SHOW_BGIMAGE, c.lang = {
                    am: a.LANG_AM,
                    pm: a.LANG_PM
                }, c.locations = a.LOCATIONS, c.now = null, c.timezone = a.LOCAL_TIMEZONE_OFFSET, c.hours24 = 0, c.clockString = "", c.period = "", c.timeOfDay = null, c.staticUrl = a.STATIC_URL, c.ampm = a.AMPM, c.$wrapper = $("#WC_cont" + c.id), c.$location = c.$wrapper.find(".WC_locations"), c.$clock = c.$wrapper.find(".WC_clock"), c.$period = c.$wrapper.find(".WC_period"), c.tick(), c.$location.on("change", function() {
                    var a = c.locations[$(this).val()].offset;
                    c.ampm = c.locations[$(this).val()].ampm, c.updateTimezone(a)
                }), $(".big-clock").fitText()
            }
            var c = this;
            return this.calculateTimeOfDay = function() {
                this.hours24 >= 6 && this.hours24 < 8 ? this.timeOfDay = "Dawn" : this.hours24 >= 8 && this.hours24 < 12 ? this.timeOfDay = "Morning" : this.hours24 >= 12 && this.hours24 < 18 ? this.timeOfDay = "Noon" : this.hours24 >= 18 && this.hours24 <= 20 ? this.timeOfDay = "Dusk" : this.hours24 >= 20 && this.hours24 < 22 ? this.timeOfDay = "Evening" : (this.hours24 >= 22 || this.hours24 >= 0 && this.hours24 < 6) && (this.timeOfDay = "Night")
            }, this.formatClock = function() {
                var a = this.now.getSeconds(),
                    b = this.now.getMinutes(),
                    c = this.hours24;
                return "Y" == this.ampm && (c >= 12 && (c -= 12), 0 == c && (c = 12)), c < 10 && (c = "0" + c), b < 10 && (b = "0" + b), a < 10 && (a = "0" + a), c + ":" + b + ":" + a
            }, this.tick = function() {
                if (this.now = new Date, null != this.timezone) {
                    var a = 60 * this.timezone * 60 * 1e3,
                        b = 60 * this.now.getTimezoneOffset() * 1e3;
                    this.now.setTime(this.now.getTime() + b + a)
                }
                this.hours24 = this.now.getHours(), "Y" === this.ampm && (this.period = this.hours24 >= 12 ? this.lang.pm : this.lang.am), "N" == this.ampm && (this.period = ""), this.clockString = this.formatClock(), this.calculateTimeOfDay(), this.checkBg()
            }, this.updateTimezone = function(a) {
                this.timezone != a && (this.timezone = a, this.tick())
            }, this.checkBg = function() {
                this.$clock.html(this.clockString), this.$period.html(this.period);
                var a = this.getBgFromUrl();
                if (this.isShowBig && this.timeOfDay && a != this.timeOfDay) {
                    var b = this.staticUrl + this.timeOfDay + ".png";
                    this.$wrapper.css("background-image", "url(" + b + ")")
                }
                "Noon" != this.timeOfDay && this.isShowBig && this.$wrapper.css("color", "#ffffff")
            }, this.getBgFromUrl = function() {
                var a = this.$wrapper.css("background-image");
                return a = a.split("/").pop(), a = a.split("."), a[0]
            }, b(), this
        }
    },
    efu = efu || {};
efu.w = efu.w || {}, efu.w.worldclock = function(a) {
    efu.log("EFU: worldclock source options: ", a), WC.clocks.init(a)
};
var efu = efu || {};
efu.w = efu.w || {}, efu.w.cu = function(a) {
    efu.w.widgets.push(a);
    var b = $("form#" + a.CONTACT_FORM_ID),
        c = function(b, c) {
            c.preventDefault(), $("body").prepend('\n            <div id="loader" class="ui-widget-overlay" style="position:fixed; width:100%; height:100%; padding:0; z-index:9999; background:#fff; opacity:0.6;">\n                            <div class=".ui-widget-overlay" style="width:100%; height:100%; display:table;">\n                                            <div style="display: table-cell; vertical-align: middle; text-align:center; margin:auto;">\n                                                            <img src="' + a.LOADER_STATIC_URL + '" alt="" /><span id="loader-text"></span>\n                                            </div>\n                            </div>\n        \t</div>\n'), $(this).find(".error").remove();
            var d = $(b).attr("action");
            $.post(d, $(b).serialize(), function(c) {
                $("#loader").remove(), "error" == c.status ? $.each(c.messages, function(b, c) {
                    var d = "";
                    if ("mail" == b) return void $.fancybox({
                        content: "<p>" + c + "</p>",
                        afterClose: function() {
                            location.reload()
                        }
                    });
                    if ("csrf" == b) {
                        for (var e in c) d = c[e];
                        return void $.fancybox({
                            content: "<p>" + d + "</p>",
                            afterClose: function() {
                                location.reload()
                            }
                        })
                    }
                    $.each(c, function(a, b) {
                        d += b
                    }), $("#" + b + "-element-" + a.WID).addClass("has-error").append("<div class='error' style='color:red;'>" + d + "</div>")
                }) : "ok" == c.status && (b.reset(), "undefined" != typeof ga && "undefined" != typeof gaSettings && (gaSettings.siteOwnerTrackingCode && ga(gaSettings.siteOwnerTrackerName + ".send", "pageview", {
                    page: "/" + a.SUBMIT_TRACK_PAGE + "-thank-you.html"
                }), gaSettings.resellerTrackingCode && ga(gaSettings.resellerTrackerName + ".send", "pageview", {
                    page: "/" + a.SUBMIT_TRACK_PAGE + "-thank-you.html"
                })), "undefined" != typeof google_conversion_id && "undefined" != typeof google_conversion_language && "undefined" != typeof google_conversion_format && "undefined" != typeof google_conversion_color && "undefined" != typeof google_conversion_label && "undefined" != typeof google_remarketing_only && void 0 !== window.google_trackConversion && google_trackConversion({
                    google_conversion_id: google_conversion_id,
                    google_conversion_language: google_conversion_language,
                    google_conversion_format: google_conversion_format,
                    google_conversion_color: google_conversion_color,
                    google_conversion_label: google_conversion_label,
                    google_remarketing_only: google_remarketing_only
                }), $.fancybox({
                    content: "<p>" + a.THANKYOU_MSG + "</p>" + a.CONTACTUS_APPENDHTML
                }))
            })
        };
    efu.w.setValidator(b, c, a.CAPTCHA_ID, {})
};
var efu = efu || {};
efu.w = efu.w || {}, efu.w.cumobile = function(a) {
    function b() {
        d.slideToggle("slow")
    }
    efu.log(a);
    var c = $("form#" + a.CONTACT_FORM_ID),
        d = c.closest("div#" + a.CONTACT_FORM_ID);
    d.next("div.widget-button").click(function() {
        b()
    }), c.submit(function(b) {
        b.preventDefault(), $("body").prepend('\n            <div id="loader" class="ui-widget-overlay" style="position:fixed; width:100%; height:100%; padding:0; z-index:9999; background:#fff; opacity:0.6;">\n                            <div class=".ui-widget-overlay" style="width:100%; height:100%; display:table;">\n                                            <div style="display: table-cell; vertical-align: middle; text-align:center; margin:auto;">\n                                                            <img src="' + a.LOADER_STATIC_URL + '"/gfx/ajax-loader.gif" alt="" /><span id="loader-text"></span>\n                                            </div>\n                            </div>\n            </div>\n'), $(this).find(".error").remove();
        var d = this,
            e = $(this).attr("action");
        $.post(e, $(this).serialize(), function(b) {
            $("#loader").remove(), "error" == b.status ? $.each(b.messages, function(b, c) {
                var d = "";
                "mail" == b && $.fancybox("<p>" + c + "</p>"), $.each(c, function(a, b) {
                    d += b
                }), $("#" + b + "-element-" + a.WID).append("<div class='error' style='color:red;'>" + d + "</div>")
            }) : "ok" == b.status && (d.reset(), "undefined" != typeof ga && "undefined" != typeof gaSettings && (gaSettings.siteOwnerTrackingCode && ga(gaSettings.siteOwnerTrackerName + ".send", "pageview", {
                page: "/" + a.SUBMIT_TRACK_PAGE + "-thank-you.html"
            }), gaSettings.resellerTrackingCode && ga(gaSettings.resellerTrackerName + ".send", "pageview", {
                page: "/" + a.SUBMIT_TRACK_PAGE + "-thank-you.html"
            })), $.fancybox("<p>" + a.THANKYOU_MSG + "</p>" + a.CONTACTUS_APPENDHTML)), c.find(".diy-captcha-image-div").find("a").click()
        })
    })
};
var efu = efu || {};
efu.w = efu.w || {}, efu.w.checkout = function(a) {
    var b = efu.cartLib,
        c = efu.cart.config,
        d = $("#f-customer-details"),
        e = $("#f-delivery-options"),
        f = $("#f-payment-options"),
        g = $("#delivery-options-submit"),
        h = $(".js-billing-tooltip"),
        i = 1,
        j = $.parseJSON($("#states").val()),
        k = $.parseJSON($("#billing_states").val()),
        l = $("#shipping_country").val(),
        m = {},
        n = "",
        o = {};
    if (e.hide(), f.hide(), $("#billing_state_element_share").addClass("hidden"), 0 !== $("#shipping_country").val() && j && void 0 !== j[l] ? ($("#shipping_state_element_share").addClass("f-twentyfive"), $("#shipping_country_element_share").addClass("f-twentyfive")) : $("#shipping_state_element_share").addClass("hidden"), 0 === $("#billing_country").val() || void 0 === k[$("#billing_country").val()] ? $("#billing_state_element_share").addClass("hidden") : ($("#billing_state_element_share").removeClass("hidden"), $("#billing_state_element_share").addClass("f-twentyfive"), $("#billing_country_element_share").addClass("f-twentyfive")), $("#checkbox_billing_address").is(":checked")) {
        for (var p = 0; p < $(".f-billing-elements").length; p++) $(".f-billing-elements")[p].disabled = !0;
        $(".f-billing-elements").parent().parent().hide()
    }
    $("#checkbox_billing_address").change(function() {
        if ($("#checkbox_billing_address").is(":checked")) {
            for (var a = 0; a < $(".f-billing-elements").length; a++) $(".f-billing-elements")[a].disabled = !0;
            $(".f-billing-elements").parent().parent().hide(), h.addClass("hidden")
        } else {
            $(".f-billing-elements").parent().parent().show();
            for (var a = 0; a < $(".f-billing-elements").length; a++) $(".f-billing-elements")[a].disabled = !1;
            h.removeClass("hidden")
        }
    }), $("#shipping_country").on("change", function(a) {
        $("#shipping_state").empty(), l = $("#shipping_country").val(), j[l] ? ($("#shipping_state_element_share").removeClass("hidden").addClass("f-twentyfive"), $("#shipping_country_element_share").addClass("f-twentyfive"), $("#shipping_state").append($("<option>", {
            value: "0",
            text: "Select State"
        })), $.each(j[l].states, function(a, b) {
            $("#shipping_state").append($("<option>", {
                value: j[l].ids[a],
                text: b
            }))
        })) : ($("#shipping_state_element_share").addClass("hidden").removeClass("f-twentyfive"), $("#shipping_country_element_share").removeClass("f-twentyfive"))
    }), $("#billing_country").on("change", function(a) {
        $("#billing_state").empty(), l = $("#billing_country").val(), k[l] ? ($("#billing_state_element_share").removeClass("hidden").addClass("f-twentyfive"), $("#billing_country_element_share").addClass("f-twentyfive"), $("#billing_state").append($("<option>", {
            value: "0",
            text: "Select State"
        })), $.each(k[l].states, function(a, b) {
            $("#billing_state").append($("<option>", {
                value: k[l].ids[a],
                text: b
            }))
        })) : ($("#billing_state_element_share").addClass("hidden").removeClass("f-twentyfive"), $("#billing_country_element_share").removeClass("f-twentyfive"))
    }), pastSteps = function(a) {
        $(".f-checkout-steps li").removeClass("current-step , past-step"), $(".f-step" + a).addClass("current-step");
        for (var b = 1; b < a; b++) $(".f-step" + b).addClass("past-step")
    }, $("#customer_details-submit").click(function(f) {
        f.preventDefault(), $(".js-delivery-options").empty(), $(".js-tax-shipping-not-available").addClass("hidden"), $("#form_customer_details").find(".error").remove();
        var h = ($("#form_customer_details"), $("#form_customer_details").attr("action"));
        $.post(h, $("#form_customer_details").serialize(), function(f) {
            if ("error" == f.status) $.each(f.messages, function(a, b) {
                a = a.replace(/ /g, "");
                var c = "";
                "email" == a ? "" == $("#" + a).val() ? c += b[0] : c += b[1] : "phone" == a && ("" == $("#" + a).val() ? c += b[0] : c += b[1]), "invalid_tax_rule" == a ? $(".js-tax-shipping-not-available").removeClass("hidden") : $.each(b, function(a, b) {
                    c += b
                }), $("#" + a + "_element_share").addClass("has-error").append("<div class='error' style='color:red;'>" + c + "</div>")
            });
            else if ("ok" == f.status) {
                $(".js-payment-failed").addClass("hidden"), n = f.orderid, $.each($("#form_customer_details").serializeArray(), function(a, b) {
                    m[b.name] = b.value, b.value || $("#" + a + "_element_share").append("<div class='error' style='color:red;'></div>")
                }), d.hide(), e.show(), i++, pastSteps(i), $(".js-loader-spin-shipping").removeClass("hidden");
                var h = [{
                    type: "single",
                    service: "Site_Catalog_Order_ShippingMethod",
                    target: {
                        site: c.siteid,
                        order: n
                    },
                    method: "get",
                    onSuccess: [{
                        action: "append",
                        var: {
                            context: "response",
                            key: "Site_Catalog_Order_ShippingMethod"
                        },
                        value: "response"
                    }]
                }];
                b.ajax({
                    commands: h,
                    success: function() {
                        efu.info("shipping methods: ", arguments, n, a), $(".js-shipping-method").addClass("hidden"), $(".js-delivery-options").empty(), response = arguments[0].responses.Site_Catalog_Order_ShippingMethod[0];
                        var c = !1,
                            d = 0;
                        response.totalItems > 0 && (shipping_methods = response.items, $.each(response.items, function(e, f) {
                            var g = "",
                                h = b.getLanguageDetails(f.languageDetails);
                            if (h.deliveryTime) var g = "<br>" + a.translations.delivery_time + ": " + b.getLanguageDetails(f.languageDetails).deliveryTime;
                            if ("offline" == f.type) {
                                c = !0, d++;
                                var i = "";
                                i = f.logoImage.url ? '<img src="' + f.logoImage.url + '" alt="' + h.title + '" class="f-shipping-logo">' : '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 512 512" enable-background="new 0 0 512 512" xml:space="preserve"><path id="shipping-box-12-icon" d="M374.14,319.814l4.615-2.687v23.617l-4.615,2.687V319.814z M366.286,348.006l4.614-2.688v-23.616 l-4.694,2.733L366.286,348.006z M400.688,327.978l4.695-2.734v-23.616l-4.695,2.734V327.978z M462,186.415v158.29l-131.156,76.36 l-164.816-95.978V166.797l131.396-75.862L462,186.415z M272.922,132.884l128.279,75.725l26.13-14.471l-129.938-75.383 L272.922,132.884z M318.026,268.397l-128.208-74.213V311.25l128.208,74.517V268.397z M355.94,233.675l-126.639-75.606 l-26.826,15.487l127.994,74.226L355.94,233.675z M437.98,215.764l-23.087,12.786v42.9l-0.155,0.086v0.182l-45.19,24.946v-0.152 l-0.155,0.086v-42.85l-27.289,15.113V386.68l95.877-55.818V215.764z M385.188,337l4.619-2.689v-23.616l-4.619,2.689V337z M412.13,321.315l3.885-2.262l0.729-0.43v-23.612l-4.614,2.687V321.315z M392.913,332.502l4.615-2.687v-23.616l-4.615,2.687V332.502 z M66.361,194.379h75.126v24H74.361L66.361,194.379z M50,233.712h91.487v24H58L50,233.712z M98.311,297.046l-8-24h51.177v24H98.311z "/></svg>';
                                var j = b.getLanguageDetails(f.languageDetails);
                                $("div.js-delivery-options").append('\t\t\t\t\t    \t\t\t\t\t<div class="f-single-shipping-method clearfix">\t\t\t\t\t    \t\t\t\t\t<table class="responsive-table">\t\t\t\t\t    \t\t\t\t\t\t<tr>\t\t\t\t\t    \t\t\t\t\t\t<td width="33"><input type="radio" name="deliveryoptions" value="' + f.id + '"  class="js-delivery-options" data-pickup = "' + f.pickup + '" data-name = "' + j.title + '" data-key=""></td>\t\t\t\t\t    \t\t\t\t\t<td width="130">' + i + '</td>\t\t\t\t\t    \t\t\t\t\t\t<td class="js-shipping-method-name"><strong>' + j.title + "</strong>\t\t\t\t\t    \t\t\t\t\t\t<br>" + j.description + g + '</td>\t\t\t\t    \t\t\t\t\t\t<td class="align-right no-wrap">' + b.formatCurrency(f.finalPrice.toFixed(2)) + " </td>\t\t\t\t    \t\t\t\t\t\t</tr></table></div>")
                            } else {
                                var k = "";
                                c = !0, d++;
                                var l = b.getLanguageDetails(f.languageDetails);
                                if (k = '<div class="f-single-shipping-method clearfix">\t\t    \t\t\t\t\t\t\t\t<table class="responsive-table">\t\t    \t\t\t\t\t\t\t\t\t<tr>\t\t    \t\t\t\t\t\t\t\t\t\t<td width="33"></td>\t\t    \t\t\t\t\t\t\t\t\t\t<td width="130">\t\t    \t\t\t\t\t\t\t\t\t\t\t<img src="' + f._settings.icon + '" alt="' + l.title + '">\t    \t\t\t\t\t\t\t\t\t\t\t</td>\t    \t\t\t\t\t\t\t\t\t\t\t<td class="js-shipping-method-name">\t    \t\t\t\t\t\t\t\t\t\t\t\t<strong >' + l.title + "</strong>\t    \t\t\t\t\t\t\t\t\t\t\t\t<br>" + l.description + g + "</td>\t    \t\t\t\t\t\t\t\t\t\t\t</tr>\t    \t\t\t\t\t\t\t\t\t\t\t</table>", k += '<table class="f-multi-lines">', error = f._options.error || "", error) {
                                    k += '<tr><td><div class="error" style="font-weight:700">';
                                    for (error_code in error) break;
                                    switch (error_code = error_code.replace("core.validator.catalog.shipping_method.gateway_error.", ""), error_code) {
                                        case "5":
                                            k += a.translations.shipping_gateway_error_5;
                                            break;
                                        case "6":
                                            k += a.translations.shipping_gateway_error_6;
                                            break;
                                        case "7":
                                            k += a.translations.shipping_gateway_error_7;
                                            break;
                                        case "8":
                                            k += a.translations.shipping_gateway_error_8;
                                            break;
                                        default:
                                            k += a.translations.shipping_gateway_error
                                    }
                                    k += " ( " + a.translations.error_code + ": " + error_code + " )", k += "</div></td></tr></table></div>"
                                } else if (f._options.length > 0) {
                                    var m = "Mercado Envios" == h.title ? "js-mercado-envio" : "";
                                    $.each(f._options, function(a, c) {
                                        k += '<tr class="">\t\t\t\t    \t\t\t\t\t\t\t\t\t<td width="1%">\t\t\t\t    \t\t\t\t\t\t\t\t\t\t<input type="radio" name="deliveryoptions" value="' + f.id + '"  class="js-delivery-options ' + m + ' " data-pickup = "0" data-name = "' + c.name + ", " + l.title + '" data-key="' + c.key + '" id="deliveryoptions_' + c.key + '">\t\t\t\t    \t\t\t\t\t\t\t\t\t</td>\t\t\t\t    \t\t\t\t\t\t\t\t\t<td>\t\t\t\t    \t\t\t\t\t\t\t\t\t\t<label for="deliveryoptions_' + c.key + '">' + c.name + '</label>\t\t\t    \t\t\t\t\t\t\t\t\t\t</td>\t\t\t    \t\t\t\t\t\t\t\t\t\t<td class="align-right no-wrap">' + b.formatCurrency(c.price.toFixed(2)) + "</td>\t\t\t    \t\t\t\t\t\t\t\t\t\t</tr>"
                                    }), "0" != a.enable_taxes && (k += '</table>\t\t\t\t    \t\t\t\t\t\t\t<div class="align-right" style="font:85% italic;">( ' + a.translations.taxes_included + " )</div>"), "Mercado Envios" == h.title && (k += '<div class="mercado-notification">' + a.translations.mercado_envio_notif + "</div>"), k += "</div>"
                                }
                                $("div.js-delivery-options").append(k)
                            }
                        })), c ? (g.removeClass("hidden"), $(".js-delivery-options-title").removeClass("hidden"), $(".js-shipping-not-available").addClass("hidden"), "1" == d && $(".js-delivery-options").prop("checked", !0)) : ($(".js-shipping-not-available").removeClass("hidden"), $(".js-delivery-options-title").addClass("hidden"), g.addClass("hidden")), $(".js-loader-spin-shipping").addClass("hidden")
                    },
                    error: function() {
                        efu.err("Shipping Methods Error: ", arguments, n, a), $(".js-loader-spin-shipping").addClass("hidden")
                    }
                })
            }
        })
    }), $("#delivery-options-submit").click(function(d) {
        d.preventDefault(), $(".js-shipping-not-available").addClass("hidden");
        var g = $(".js-delivery-options:checked"),
            h = g.val(),
            j = g.attr("data-key"),
            k = g.closest(".f-single-shipping-method").find(".js-shipping-method-name strong").html();
        if ($(".js-payment-me-error").addClass("hidden"), $(".js-mercado-envio:checked").val() ? ($(".js-shipping-row").addClass("hidden"), $(".js-me-notif2").removeClass("hidden")) : ($(".js-shipping-row").removeClass("hidden"), $(".js-me-notif2").addClass("hidden")), j ? $(".js-shipping-tax-label").text(a.translations.shipping + " (" + a.translations.taxes_included + ")") : "0" != a.enable_taxes && ("1" == a.taxes_on_shipping ? $(".js-shipping-tax-label").text(a.translations.shipping + " (" + a.translations.taxes_excluded + ")") : $(".js-shipping-tax-label").text(a.translations.shipping + " (" + a.translations.taxes_included + ")")), h) {
            var l = [{
                type: "single",
                service: "Site_Catalog_Order",
                id: n,
                target: c.siteid,
                params: {
                    shippingMethodName: k,
                    shippingMethodId: h,
                    shippingMethodOptionKey: j
                },
                method: "put",
                onSuccess: [{
                    action: "append",
                    var: {
                        context: "response",
                        key: "Site_Catalog_Order"
                    },
                    value: "response"
                }]
            }, {
                type: "single",
                service: "Site_Catalog_Order_Calculate",
                target: {
                    site: c.siteid,
                    order: n
                },
                method: "get",
                onSuccess: [{
                    action: "append",
                    var: {
                        context: "response",
                        key: "Site_Catalog_Order_Calculate"
                    },
                    value: "response"
                }]
            }, {
                type: "single",
                service: "Site_PaymentMethod",
                target: c.siteid,
                method: "get",
                params: {
                    active: !0
                },
                onSuccess: [{
                    action: "append",
                    var: {
                        context: "response",
                        key: "Site_PaymentMethod"
                    },
                    value: "response"
                }]
            }];
            b.ajax({
                commands: l,
                success: function() {
                    var c = arguments[0].responses.Site_Catalog_Order_Calculate[0] || "",
                        d = c.productTaxes;
                    if ($(".js-payment").empty(), c) {
                        if ($(".js-subtotal span").text(b.formatCurrency(parseFloat(c.subTotal).toFixed(2))), $(".js-c-total span").text(b.formatCurrency(parseFloat(c.totalPrice).toFixed(2))), c.productTaxes.totalAmount > 0) {
                            $(".js-total-tax").removeClass("hidden"), $(".js-total-tax-val").text(b.formatCurrency(parseFloat(c.productTaxes.totalAmount).toFixed(2)));
                            for (var e = '<div class="f-sub-tax-label js-sub-tax-label">', f = '<div class="f-sub-tax-values js-sub-tax-values">', g = 0; g < d.breakdown.length; g++)
                                if (parseFloat(d.breakdown[g].rate) > 0 && parseFloat(d.breakdown[g].totalAmount) > 0) {
                                    var h = b.formatCurrency(parseFloat(d.breakdown[g].totalAmount).toFixed(2));
                                    e += a.translations.tax + " (" + d.breakdown[g].rate + "%)</br>", f += "<span>" + h + "</span>"
                                } e += "</div>", f += "</div>", $(".js-sub-tax-label").remove(), $(".js-sub-tax-values").remove(), $(".js-tax-label").append(e), $(".js-tax-value").append(f)
                        }
                        if ("0" == c.shipping.netAmount ? $(".js-shipping-price").addClass("hidden") : ($(".js-shipping-price").removeClass("hidden"), $(".js-shipping-price span").text(b.formatCurrency(parseFloat(c.shipping.netAmount).toFixed(2)))), $(".js-shipping-taxes-row").replaceWith('<tr class="f-c-total-tax f-text-right js-shipping-taxes-row"></tr>'), c.shipping.taxAmount > 0) {
                            $(".js-shipping-taxes-row").replaceWith('<tr class="f-c-total-tax f-text-right js-shipping-taxes-row"></tr>');
                            var i = '<tr class="f-c-total-tax f-text-right js-shipping-taxes-row">\t\t    \t\t\t\t\t\t\t<td colspan="4">' + a.translations.shipping_taxes + " (" + c.shipping.taxRate + "%)</td>\t\t    \t\t\t\t\t\t\t<td ><span>" + b.formatCurrency(parseFloat(c.shipping.taxAmount).toFixed(2)) + "</span></td>\t\t    \t\t\t\t\t\t\t</tr>";
                            $(".js-shipping-taxes-row").replaceWith(i)
                        }
                    }
                    if ($(".js-mercado-envio:checked").val() && c.totalPrice < 10) return void $(".js-payment-me-error").removeClass("hidden");
                    if ($(".js-mercado-envio:checked").val() && c.totalPrice < 10) return void $(".js-payment-me-error").removeClass("hidden");
                    var j = arguments[0].responses.Site_PaymentMethod[0] || "";
                    if (j) {
                        $(".js-shipping-method").addClass("hidden");
                        $(".js-shipping-method-name strong").html();
                        j.totalItems > 0 && (shipping_methods = j.items, $.each(j.items, function(a, c) {
                            if ($(".js-mercado-envio:checked").val() && "Mercado" !== c.pgKey) return !0;
                            o[c.id] = c.pgKey;
                            var d = b.getLanguageDetails(c.languageDetails),
                                e = "";
                            e = c.logoImage.url ? '<img src="' + c.logoImage.url + '" alt="' + d.title + '" class="f-payment-logo">' : '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24"><path d="M4.062 16.626c-.165-.5.038-.92.656-1.145l3.25-1.15-.135 1.03a9.84 9.84 0 0 0-.09 1.58c-.25.08-1.094.34-1.944.55-.88.22-1.54-.25-1.74-.85zm1.745 1.916c-.46.167-.612.48-.49.854.148.45.646.798 1.295.635a34.59 34.59 0 0 0 1.7-.48 7.6 7.6 0 0 1-.478-1.66l-2.027.66zM6 8h2.643l.128-1H6v1zm16-6v9a2 2 0 0 1-2 2h-1.99l.016.02c-.03.43-.105.906-.222 1.457-.45 2.144-1.637 5.122-.83 8.418-2.312.356-3.65.523-5.992 1.105-.273-4.062-2.266-4.943-1.804-8.47.542-4.137.844-6.46 1.196-9.255.11-.88.73-1.307 1.337-1.307.64 0 1.25.464 1.26 1.366.02 3.303.11 6.593.33 7.393.15.54 1.09.638 1.09-.512L14.37 11h5.13a.5.5 0 0 0 .5-.5V6h-5.568c-.157-1.46-1.27-2.53-2.72-2.53h-.002c-1.44 0-2.578 1.037-2.806 2.53H4v4.5a.5.5 0 0 0 .5.5h3.757l-.26 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2zm-2 .5a.5.5 0 0 0-.5-.5h-15a.5.5 0 0 0-.5.5V3h16v-.5zM6 10h2.386l.13-1H6v1zm12-3h-3v1h3V7z"></path></svg>', $html_payment = '<div class="f-single-payment-method clearfix"><table class="responsive-table">\t\t\t    \t\t\t\t\t\t\t\t\t<tr>\t\t\t    \t\t\t\t\t\t\t\t\t\t<td width="33"><input type="radio" name="paymentmethods" value="' + c.id + '"  class="js-payment-options"></td>\t\t\t    \t\t\t\t\t\t\t\t\t\t<td width="130">\t\t\t    \t\t\t\t\t\t\t\t\t\t\t' + e + "\t\t    \t\t\t\t\t\t\t\t\t\t\t</td>\t\t    \t\t\t\t\t\t\t\t\t\t\t<td>\t\t    \t\t\t\t\t\t\t\t\t\t\t\t<strong>" + d.name + "</strong>\t\t    \t\t\t\t\t\t\t\t\t\t\t\t<br>" + d.description + "</td>\t\t    \t\t\t\t\t\t\t\t\t\t\t</tr>\t\t    \t\t\t\t\t\t\t\t\t\t\t</table></div>", $(".js-payment").append($html_payment)
                        }), "1" == j.totalItems && $(".js-payment-options").prop("checked", !0))
                    }
                },
                error: function() {}
            }), i++, pastSteps(i), $("#go-back").show(), e.hide(), f.show();
            var m = "";
            "1" === $(".js-delivery-options:checked").attr("data-pickup") ? ($(".js-delivery-label").text(a.translations.pickup), $("#delivery_fullname_val").text(a.store_settings.name), $("#delivery_address_1_val").text(a.store_settings.address), a.store_settings.address2 ? ($(".js-delivery_address_2_val").removeClass("hidden"), $("#delivery_address_2_val").text(a.store_settings.address2)) : $(".js-delivery_address_2_val").addClass("hidden"), $("#delivery_city_val").text(a.store_settings.city), a.store_settings.state && (m = a.store_settings.state + ", "), $("#delivery_country_val").text(m + a.store_settings.country)) : ($(".js-delivery-label").text(a.translations.delivery_address), $("#delivery_fullname_val").text($("#first_name").val() + " " + $("#last_name").val()), $("#delivery_address_1_val").text($("#shipping_address").val()), $("#shipping_address_line_2").val() ? ($(".js-delivery_address_2_val").removeClass("hidden"), $("#delivery_address_2_val").text($("#shipping_address_line_2").val())) : $(".js-delivery_address_2_val").addClass("hidden"), $("#delivery_city_val").text($("#shipping_city").val()), $("#shipping_state option:selected").val() && (m = $("#shipping_state option:selected").text() + ", "), $("#delivery_country_val").text(m + $("#shipping_country option:selected").text())), $("#billing_fullname_val").text($("#first_name").val() + " " + $("#last_name").val()), $("#checkbox_billing_address").is(":checked") ? ($("#billing_address_1_val").text($("#shipping_address").val()), $("#shipping_address_line_2").val() ? ($(".js-billing_address_2_val").removeClass("hidden"), $("#billing_address_2_val").text($("#shipping_address_line_2").val())) : $(".js-billing_address_2_val").addClass("hidden"), $("#billing_city_val").text($("#shipping_city").val()), $("#shipping_state option:selected").val() ? (m = $("#shipping_state option:selected").text() + ", ", $("#billing_country_val").text(m + $("#shipping_country option:selected").text())) : $("#billing_country_val").text($("#shipping_country option:selected").text())) : ($("#billing_address_1_val").text($("#billing_address").val()), $("#billing_secondary_address").val() ? ($(".js-billing_address_2_val").removeClass("hidden"), $("#billing_address_2_val").text($("#billing_secondary_address").val())) : $(".js-billing_address_2_val").addClass("hidden"), $("#billing_city_val").text($("#billing_city").val()), $("#billing_state option:selected").val() && (m = $("#billing_state option:selected").text() + ", "), $("#billing_country_val").text(m + $("#billing_country option:selected").text())), $(".js-shipping_method").text($(".js-delivery-options:checked").attr("data-name")), $(".js-shipping-method").addClass("hidden")
        } else $(".js-shipping-method").removeClass("hidden")
    }), $("#payment-options-submit").click(function(d) {
        if (d.preventDefault(), i++, pastSteps(i), $("#go-back").show(), !$(".js-tc-checkbox").length || $(".js-tc-checkbox").is(":checked")) {
            $(".js-tc-error").addClass("hidden");
            var e = $(".js-payment input:checked").val();
            if (e) {
                $(".js-payment-selection-error").addClass("hidden"), $(".js-loader-spin-payment").removeClass("hidden");
                var f = [{
                    type: "single",
                    service: "Site_Catalog_Cart_Validate",
                    target: {
                        site: c.siteid,
                        cart: a.cartid
                    },
                    method: "get",
                    onSuccess: [{
                        action: "append",
                        var: {
                            context: "response",
                            key: "Site_Catalog_Cart_Validate"
                        },
                        value: "response"
                    }],
                    deps: [{
                        type: "single",
                        service: "Site_Catalog_Order_Payment",
                        target: {
                            site: c.siteid,
                            order: n
                        },
                        method: "post",
                        params: {
                            returnUrl: location.origin + c.route_lang_prefix + "/order/success",
                            pendingUrl: location.origin + c.route_lang_prefix + "/order/pending",
                            cancelUrl: location.origin + c.route_lang_prefix + "/checkout?payment_failed=1",
                            methodId: e,
                            cartId: a.cartid
                        },
                        onSuccess: [{
                            action: "append",
                            var: {
                                context: "response",
                                key: "Site_Catalog_Order_Payment"
                            },
                            value: "response"
                        }]
                    }]
                }];
                b.ajax({
                    commands: f,
                    success: function() {
                        efu.info("payment success: ", arguments, n, e, c);
                        var a = arguments[0].responses.Site_Catalog_Order_Payment[0] || "";
                        if (a)
                            if (void 0 !== a.redirectType && null !== a.redirectType) switch (a.redirectType) {
                                case "POST":
                                    var d = '<form id= "redsys-form" method="POST" action="' + a.redirect + '" class= "hidden">';
                                    $.each(a.data, function(a, b) {
                                        d += '<input type="text" name="' + a + '" value="' + b + '">'
                                    }), d += "</form>", $("#f-payment-options").append(d), $("#f-payment-options #redsys-form").submit();
                                    break;
                                case "GET":
                                    "Mercado" != o[e] || b.isIe() ? window.location.replace(a.redirect) : $.fancybox('<iframe id="MP" src="' + a.redirect + '" name="MP-Checkout" width="100%" height="100%" frameborder="0" onLoad="checkCroosDomainIframe(this.contentWindow.location);"></iframe>', {
                                        helpers: {
                                            media: !0
                                        },
                                        width: 740,
                                        height: 600,
                                        autoSize: !1,
                                        scrolling: !1,
                                        easingOut: "",
                                        closeBtn: !1,
                                        helpers: {
                                            overlay: {
                                                closeClick: !1
                                            }
                                        }
                                    }), $(".js-loader-spin-payment").addClass("hidden");
                                    break;
                                default:
                                    return
                            } else window.location.replace(c.route_lang_prefix + "/order/pending");
                            else $(".js-loader-spin-payment").addClass("hidden")
                    },
                    error: function() {
                        "Bad Request" == arguments[2] ? ($(".js-payment-gateway-error").removeClass("hidden"), $(".js-loader-spin-payment").addClass("hidden")) : $(".js-loader-spin-payment").removeClass("hidden")
                    }
                })
            } else $(".js-payment-selection-error").removeClass("hidden")
        } else $(".js-tc-error").removeClass("hidden")
    }), $("#go-back").click(function(a) {
        switch (a.preventDefault(), i) {
            case 1:
                window.location.href = c.route_lang_prefix + "/cart";
                break;
            case 2:
                i--, d.show(), e.hide();
                break;
            case 3:
                i--, f.hide(), e.show();
                break;
            default:
                $("#go-back").hide()
        }
        pastSteps(i)
    }), checkCroosDomainIframe = function(a) {
        try {
            void 0 === a.host || b.isIe() || ($.fancybox.close(), window.location.replace(a.href))
        } catch (a) {}
    }
};
var efu = efu || {};
efu.w = efu.w || {}, efu.w.formManager = function(a) {
    efu.w.widgets.push(a), elm = {}, efu.log("FM: efu.w.formmanager: ", a);
    var b = function() {
            c();
            var b = $("#" + a.CONTACT_FORM_ID);
            efu.w.setValidator(b, d, a.CAPTCHA_ID, {}), $.extend($.validator.messages, {
                required: a.REQUIRED_MESSAGE,
                email: a.EMAIL_MESSAGE,
                number: a.NUMBER_MESSAGE,
                digits: a.NUMBER_MESSAGE
            }), $("#form_content_button_" + a.WID).click(function() {
                var b = a.NAME || a.CLOSE,
                    c = a.NAME || a.SHOW_HIDE_FORM_BUTTON;
                $("#form_content_" + a.WID).slideToggle("slow", function() {
                    var d = $("#form_content_" + a.WID).is(":visible") ? b : c;
                    $("#form_content_button_" + a.WID).text(d)
                })
            }).click(), a.FILE_VALUE && ($("#" + a.CONTACT_FORM_ID + " .fm-file").children().wrapAll("<div class='fm-file-container' />"), $("#" + a.CONTACT_FORM_ID + " .fm-file span").append(a.FILE_VALUE).addClass("buttons"), $("#" + a.CONTACT_FORM_ID + " .fm-file-container").append('<input type="text" name="uploaded" id="uploaded">')), $("#" + a.CONTACT_FORM_ID).on("click", ".fm-file span", function() {
                $(this).parent().parent().find("label").click()
            }), $("#" + a.CONTACT_FORM_ID).on("focus", "#uploaded", function() {
                $(this).parent().parent().find("label").click()
            }), $("#" + a.CONTACT_FORM_ID).on("change", ".fm-el-file", function() {
                var a = $(this).val().replace(/^C:\\fakepath\\/i, "");
                $("#uploaded").val(a)
            })
        },
        c = function() {
            var b = function(a, b) {
                    var c = /^((https?|ftp):\/\/)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f])|[!$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f])|[!$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f])|[!$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f])|[!$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f])|[!$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a);
                    return this.optional(b) || c
                },
                c = function(a, b) {
                    var c = b.id.split("_block")[0],
                        d = !1;
                    return $('input[type="checkbox"][id^="' + c + '"]').each(function(a, b) {
                        $(b).is(":checked") && (d = !0)
                    }), d
                };
            $.validator.addMethod("urlNoHttp", b, efu.t("validate_urlNoHttp")), $.validator.addMethod("multicheckbox", c, a.CHECKBOX_REQUIRED_MESSAGE), $.validator.addMethod("number", function(a, b) {
                return this.optional(b) || /^[0-9\-\+\(\)\.]+$/i.test(a)
            })
        },
        d = function(b, c) {
            efu.log("FM: submitHandler: ", arguments), c.preventDefault(), efu.loader().show(), $(b).find(".error").remove();
            var d = $(b).attr("action");
            efu.log("FM: right before form submit : ", d, $(this).serialize());
            var e = new FormData($(b)[0]);
            if ($('input[type="file"]').length > 0 && $('input[type="file"]')[0].files.length > 0) {
                var f = $('input[type="file"]')[0].files[0].size;
                if (f && f > 1048576 * a.FILE_SIZE_LIMIT) return $('input[type="file"]').closest("li").addClass("has-error").append("<div class='error' style='color:red;'>" + a.FILE_SIZE_LIMIT_ERROR + "</div>"), void efu.loader().hide()
            }
            $.ajax({
                url: d,
                type: "POST",
                data: e,
                cache: !1,
                contentType: !1,
                processData: !1,
                success: function(arguments) {
                    "undefined" != typeof dataLayer && dataLayer.push({
                        event: "gtm.formSubmit"
                    }), efu.log("FM: RESPONSE: OK: ", arguments), "ok" == arguments.status ? (b.reset(), "undefined" != typeof ga && "undefined" != typeof gaSettings && (efu.log("FM: RESPONSE: OK: google analitycs: ", a.SUBMIT_TRACK_PAGE), gaSettings.siteOwnerTrackingCode && ga(gaSettings.siteOwnerTrackerName + ".send", "pageview", {
                        page: "/" + a.SUBMIT_TRACK_PAGE + "-thank-you.html"
                    }), gaSettings.resellerTrackingCode && ga(gaSettings.resellerTrackerName + ".send", "pageview", {
                        page: "/" + a.SUBMIT_TRACK_PAGE + "-thank-you.html"
                    })), "undefined" != typeof google_conversion_id && "undefined" != typeof google_conversion_language && "undefined" != typeof google_conversion_format && "undefined" != typeof google_conversion_color && "undefined" != typeof google_conversion_label && "undefined" != typeof google_remarketing_only && void 0 !== window.google_trackConversion && google_trackConversion({
                        google_conversion_id: google_conversion_id,
                        google_conversion_language: google_conversion_language,
                        google_conversion_format: google_conversion_format,
                        google_conversion_color: google_conversion_color,
                        google_conversion_label: google_conversion_label,
                        google_remarketing_only: google_remarketing_only
                    }), $.fancybox({
                        content: "<p>" + a.THANKYOU_MSG + "</p>" + a.FM_APPENDHTML,
                        afterClose: function() {
                            location.reload()
                        }
                    })) : "error" == arguments.status && (efu.info("FM: RESPONSE: ERROR: ", arguments.messages), jQuery.each(arguments.messages, function(b, c) {
                        var d = "";
                        if ("mail" == b) return void $.fancybox({
                            content: "<p>" + c + "</p>",
                            afterClose: function() {
                                location.reload()
                            }
                        });
                        if ("csrf" == b) {
                            for (var e in c) d = c[e];
                            return void $.fancybox({
                                content: "<p>" + d + "</p>",
                                afterClose: function() {
                                    location.reload()
                                }
                            })
                        }
                        jQuery.each(c, function(a, b) {
                            d += b + "<br>"
                        }), $("#" + b + "-element-" + a.WID).closest("li,div").addClass("has-error").append("<div class='error' style='color:red;'>" + d + "</div>")
                    }))
                }
            }).done(function() {
                efu.w.resetRecaptcha(a.CAPTCHA_ID), efu.loader().hide()
            })
        };
    return $(".js-state select").attr("disabled", !0).addClass("disabled"), $(".js-country select").on("change", function(b) {
        var c = $(this).parent().parent().attr("id"),
            d = c.replace("country", "state"),
            e = $("#" + d).find("select");
        states = $.parseJSON($('input[name="states"]').val()), e.empty(), e.append($("<option>", {
            value: "0",
            text: a.LANG_PLEASE_SELECT
        })), c = $(this).selected().val(), states[c] ? (e.attr("disabled", !1).removeClass("disabled"), $.each(states[c].states, function(a, b) {
            e.append($("<option>", {
                value: states[c].ids[a],
                text: b
            }))
        })) : e.attr("disabled", !0).addClass("disabled")
    }), b(), this
};
var efu = efu || {};
efu.w = efu.w || {}, efu.w.gallery = function(a) {
    if (0 == efu.utils.isWidthChanged("gallery_diy_widget_" + a.galleryid)) return !1;
    $("#gallery_diy_widget_" + a.galleryid + ".widget-body").galleryPaging(a)
};
var efu = efu || {};
efu.w = efu.w || {}, efu.w.guestbook = function(a) {
    elm = {}, efu.w.widgets.push(a);
    var b = function() {
            var a = function(a, b) {
                var c = /^((https?|ftp):\/\/)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f])|[!$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f])|[!$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f])|[!$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f])|[!$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f])|[!$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a);
                return this.optional(b) || c
            };
            $.validator.addMethod("urlNoHttp", a, efu.t("validate_urlNoHttp"))
        },
        c = function(b, c) {
            c.preventDefault(), efu.loader().show(), $(b).find(".error").remove();
            var d = $(b).attr("action");
            efu.log("FM: right before form submit: ", d, $(this).serialize()), $.ajax({
                type: "POST",
                url: d,
                data: $(b).serialize(),
                error: function(b) {
                    efu.loader().hide();
                    var c = a.langvars.generalerror;
                    $.fancybox.close(), $.fancybox({
                        content: "<p>" + c + "</p>",
                        afterClose: function() {
                            location.reload()
                        }
                    }), efu.w.resetRecaptcha(a.CAPTCHA_ID)
                },
                success: function(c) {
                    efu.loader().hide(), "error" == c.status ? (jQuery.each(c.messages, function(b, c) {
                        var d = "";
                        jQuery.each(c, function(b, c) {
                            d += "badCaptcha" == b ? a.langvars.badcaptcha : c
                        }), "captcha_guestbook" == b && (b += "-input"), $("#guestbookFormMaskPopup  #" + b).after("<div class='error' style='display: block;'>" + d + "</div>")
                    }), efu.w.resetRecaptcha(a.CAPTCHA_ID)) : "ok" == c.status && (b.reset(), "undefined" != typeof ga && (efu.log("FM: RESPONSE: OK: google analitycs: ", a.SUBMIT_TRACK_PAGE), gaSettings.siteOwnerTrackingCode && ga(gaSettings.siteOwnerTrackerName + ".send", "pageview", {
                        page: "/" + a.SUBMIT_TRACK_PAGE + "-thank-you.html"
                    }), gaSettings.resellerTrackingCode && ga(gaSettings.resellerTrackerName + ".send", "pageview", {
                        page: "/" + a.SUBMIT_TRACK_PAGE + "-thank-you.html"
                    })), $.fancybox.close(), $.fancybox({
                        content: "<p>" + $("#guestbookthankyou").text() + "</p>",
                        afterClose: function() {
                            location.reload()
                        }
                    })), $(".diy-captcha-image-div a").click()
                },
                beforeSend: function(a) {
                    a.setRequestHeader("X-Requested-With", "no ajax request")
                }
            })
        },
        d = function() {
            var b = $("div." + a.containerId),
                c = Math.ceil(b.length / a.itemsPerPage);
            if (!(c <= 1)) {
                var d = $(e(c));
                d.find("li").each(function(c, e) {
                    $(e).click(function() {
                        b.hide(), d.find("li.selected").removeClass("selected"), $(e).addClass("selected"), b.slice(c * a.itemsPerPage, (c + 1) * a.itemsPerPage).show()
                    })
                })[0].click(), $("#" + a.navigationId).append(d)
            }
        },
        e = function(a) {
            for (var b = '<div class="paging_navbar_wrapper"><ul class="paging_navbar">', c = 1; c <= a; c++) b += "<li></li>";
            return b += "</ul></div>"
        };
    return function() {
        var e = $("#guestbookForm");
        b();
        var f = {
            link: "urlNoHttp",
            message: {
                link: a.langvars.domain
            }
        };
        efu.w.setValidator(e, c, a.CAPTCHA_ID, f), d(), $("#diyGuestbookSignBtn").click(function() {
            $("#guestbookthankyou").hide(), $.fancybox($(this).data("href"), a.fancybox)
        })
    }(), this
};
var efu = efu || {};
efu.w = efu.w || {}, efu.w.gmaps = [], efu.w.gmap = function(containerId, options) {
    efu.w.gmaps.push(containerId);
    var address = options.addressAr;
    google.maps.visualRefresh = !0;
    var myOptions = {
            zoom: options.zoom || 4,
            center: new google.maps.LatLng(37.15675477339883, -116.21389415624986),
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            useStaticMapImpl: !1
        },
        width = parseInt($("#" + containerId).css("width"), 10);
    if (0 != width) {
        var height = parseInt(.75 * width, 10);
        $("#" + containerId).css("width", width), $("#" + containerId).css("height", height), width = Math.max(200, Math.min(480, width));
        var rw = $("#" + containerId).attr("data-rw");
        if (!rw || rw != width) {
            var map = new google.maps.Map(document.getElementById(containerId), myOptions);
            if (address.length > 0) {
                var bounds = new google.maps.LatLngBounds;
                for (i = 0; i < address.length; i++)
                    if (addresses = eval(address), addresses[i].lat && addresses[i].lng) {
                        mylatlng = new google.maps.LatLng(addresses[i].lat, addresses[i].lng), map.setCenter(mylatlng);
                        var marker = new google.maps.Marker({
                            map: map,
                            position: mylatlng,
                            draggable: !1
                        });
                        bounds.extend(marker.getPosition())
                    } else geocoder = new google.maps.Geocoder, geocoder.geocode({
                        address: addresses[i].address
                    }, function(a, b) {
                        mylatlng = a[0].geometry.location, map.setCenter(mylatlng);
                        var c = new google.maps.Marker({
                            map: map,
                            position: mylatlng,
                            draggable: !1
                        });
                        bounds.extend(c.getPosition())
                    });
                options.isCenterDefined ? (centerlatlng = new google.maps.LatLng(options.center[0], options.center[1]), map.setCenter(centerlatlng)) : (map.setCenter(bounds.getCenter()), address.length > 1 && map.fitBounds(bounds)), map.setZoom(options.zoom)
            }
            $("#" + containerId).attr("data-rw", width)
        }
    }
}, window.onresize = function(a) {
    efu.w.gmaps.forEach(function(a) {
        if (0 != b) {
            $("#" + a).css("width", "100%");
            var b = $("#" + a).width(),
                c = .75 * b;
            $("#" + a).css("height", c)
        }
    })
};
var efu = efu || {};
efu.w = efu.w || {}, efu.w.imageslider = function(a) {
    a.CONTAINER = "image-slider-" + a.WID, efu.events.dc(efu.w.imagesliderRun, a, "imageslider"), efu.events.rotate(efu.w.imagesliderRun, a, "imageslider")
}, efu.w.imagesliderRun = function(a) {
    var b = $("#" + a.CONTAINER).css("width");
    if (b && 0 !== parseInt(b)) {
        var c = "undefined" != typeof diy;
        efu.log("EFU: bxslider: in editor: ", c);
        var d, e = $("#image-slider-" + a.WID),
            f = $("#image-slider-" + a.WID + " > ul"),
            g = f.find("li"),
            h = 1 === parseInt(a.AUTO, 10) && !c,
            i = SlideManager();
        i.init(g, h, c);
        var j = {
            video: !0,
            useCSS: !1,
            adaptiveHeight: 1 === parseInt(a.ADAPTIVEHEIGHT, 10),
            auto: h,
            controls: 1 === parseInt(a.ARROWS, 10),
            mode: a.EFFECT,
            pager: 1 === parseInt(a.BULLETS, 10),
            pause: 1e3 * parseInt(a.PAUSE, 10),
            speed: 1e3 * parseInt(a.SPEED, 10),
            onSliderLoad: function(a) {
                i.onSliderLoad(a)
            },
            onSlideBefore: function(a, b, c) {
                i.onSlideBefore(a, b, c)
            },
            onSlideAfter: function(a, b, c) {
                i.onSlideAfter(a, b, c)
            }
        };
        return 0 === g.length && (j.controls = !1), efu.log("EFU: bxOptions: ", g.length, j, f, g), d = f.bxSlider(j), i.onSliderReady(d, e), $(window).bind("orientationchange", function() {
            efu.mediator().trigger("rotate")
        }), !0
    }
};
var efu = efu || {};
efu.w = efu.w || {}, efu.w.line = function(a) {
    window.btoa || (window.btoa = base64.encode), window.atob || (window.atob = base64.decode);
    var b = getInternetExplorerVersion(),
        c = function() {
            var a = window.getComputedStyle(document.documentElement, ""),
                b = (Array.prototype.slice.call(a).join("").match(/-(moz|webkit|ms)-/) || "" === a.OLink && ["", "o"])[1];
            return {
                dom: "WebKit|Moz|MS|O".match(new RegExp("(" + b + ")", "i"))[1],
                lowercase: b,
                css: "-" + b + "-",
                js: b[0].toUpperCase() + b.substr(1)
            }
        }().css,
        d = JSON.parse(window.atob(a.LINE_SETTINGS)),
        e = "#line_" + a.WID;
    return "9.0" == b && $(e).css("background-color", d.solidBackgroundImageColor), $(e).css("background-image", c + d.backgroundImage), this
};
var efu = efu || {};
efu.w = efu.w || {}, efu.w.se = function(a) {
    function b(b) {
        g.hide();
        var d = "";
        "undefined" != typeof _static_export && (d = ".shtml");
        var e = 0;
        if (resultsHtml = [], resultsHtml[e] = '<h2 class="titles results-title">' + a.LANG_SEARCHRESULTS + "</h2>", "string" == typeof b) resultsHtml[e] += b;
        else {
            var h = 1;
            for (var i in b) {
                if (resultsHtml[e] += '<div class="result-item">', b[i].alias.length > 0) {
                    var j = b[i].alias + d;
                    resultsHtml[e] += '<a class="page-name" href="' + j + '">' + b[i].pagetitle + "</a><small><em> (" + b[i].pagetype + ")</em></small>"
                } else {
                    var j = b[i].url + d;
                    if ("undefined" != typeof _static_export && b[i].url && void 0 !== b[i].url) {
                        var k = c("act", b[i].url);
                        k && void 0 !== k && (j = "/a" + k + "/index.shtml")
                    }
                    resultsHtml[e] += '<a class="page-name" href="' + j + '" target="' + b[i].act + '">' + b[i].pagetitle + "</a><small><em> (" + b[i].pagetype + ")</em></small>"
                }
                for (var l = b[i].data, m = $.parseJSON(b[i].keywords), n = 0; n < m.length; n++) {
                    var o = new RegExp("(" + m[n] + ")", "ig");
                    l = l.replace(o, "<mark>$1</mark>")
                }
                resultsHtml[e] += "<p>" + l + "</p>", resultsHtml[e] += "</div>", h % 10 == 0 && 0 != h && h != b.length && (e++, resultsHtml[e] = ""), h++
            }
        }
        f.html("<div id='resultsBox'></div>");
        var p = $("#resultsBox");
        if (p.html(resultsHtml[0]), showing = "", "string" != typeof b) {
            var q = b.length > 10 ? 10 : b.length,
                r = a.LANG_SHOWING + " 1-" + q + " " + a.LANG_OF + " " + b.length + " " + a.LANG_ITEMS;
            showing = "<span id='showing_pagination'>" + r + "</span>", $(showing).appendTo(f)
        }
        if (e > 0) {
            var n = 1;
            for (numbers = ""; n <= e + 1;) numbers += "<span class='paging_number' id='resultsGroup" + n + "'> " + n + " </span>", n++;
            prev = "<label id='prev_results' style='display:none;'><span> Â« " + a.LANG_PREV + "</span></label>", next = "<label id='next_results'><span>" + a.LANG_NEXT + " Â» </span></label>", pagination$ = $("<div id='pagination'></div>").appendTo(f), prevRes$ = $(prev).appendTo(pagination$), pagingNum$ = $(numbers).appendTo(pagination$), nextRes$ = $(next).appendTo(pagination$), nextRes$.click(function() {
                for (var c = 0; p.text().indexOf($(resultsHtml[c]).text()) && resultsHtml[c];) c++;
                p.html(resultsHtml[c + 1]);
                var d = 10 * (c + 2) > b.length ? b.length : 10 * (c + 2);
                r = a.LANG_SHOWING + " " + (1 + 10 * (c + 1)) + "-" + d + " " + a.LANG_OF + " " + b.length + " " + a.LANG_ITEMS, $("#showing_pagination").text(r), resultsHtml[c + 2] ? nextRes$.show() : nextRes$.hide(), prevRes$.show(), pagingNum$.css("color", "black"), $("#resultsGroup" + c).css("color", "purple")
            }), prevRes$.click(function() {
                for (var c = 0; - 1 == p.text().indexOf($(resultsHtml[c]).text()) && resultsHtml[c];) c++;
                p.html(resultsHtml[c - 1]);
                var d = 10 * c > b.length ? b.length : 10 * c;
                r = a.LANG_SHOWING + " " + (1 + 10 * (c - 1)) + "-" + d + " " + a.LANG_OF + " " + b.length + " " + a.LANG_ITEMS, $("#showing_pagination").text(r), resultsHtml[c - 2] ? prevRes$.show() : prevRes$.hide(), nextRes$.show(), pagingNum$.css("color", "black"), $("#resultsGroup" + c).css("color", "purple")
            }), pagingNum$.click(function() {
                var c = $(this).attr("id");
                c = c.replace("resultsGroup", ""), c = parseInt(c, 10), p.html(resultsHtml[c - 1]);
                var d = 10 * c > b.length ? b.length : 10 * c;
                r = a.LANG_SHOWING + " " + (1 + 10 * (c - 1)) + "-" + d + " " + a.LANG_OF + " " + b.length + " " + a.LANG_ITEMS, $("#showing_pagination").text(r), pagingNum$.css("color", "black"), $("#resultsGroup" + c).css("color", "purple"), p.html(resultsHtml[c - 1]), resultsHtml[c] ? nextRes$.show() : nextRes$.hide(), resultsHtml[c - 2] ? prevRes$.show() : prevRes$.hide()
            })
        }
    }

    function c(a, b) {
        for (var c = b.substr(b.indexOf("?") + 1), d = c.split("&"), e = 0; e < d.length; e++) {
            var f = d[e].split("=");
            if (f[0] == a) return f[1]
        }
    }
    var d = "#wp_content_data";
    void 0 !== a.MODULE_SEARCH_CONTAINER_ID && (d = "#" + a.MODULE_SEARCH_CONTAINER_ID);
    var e = $("#search"),
        f = $(d),
        g = $("#searching_box");
    e.find('input[name="str"]').focus(function() {
        a.MODULE_SEARCH_TITLE + "..." === $(this).val() && $(this).val("")
    }).blur(function() {
        "" === $(this).val() && $(this).val(a.MODULE_SEARCH_TITLE + "...")
    }), $(document).ready(function() {
        $(window).keydown(function(a) {
            if (13 == a.keyCode && e.find('input[type="text"]').is(":focus")) return a.preventDefault(), e.find('input[type="submit"]').click(), !1
        })
    }), e.submit(function(c) {
        c.preventDefault();
        var d = $(this);
        if ("" !== e.find('input[name="str"]').val() && e.find('input[name="str"]').val() != a.MODULE_SEARCH_TITLE + "...") {
            var f = $.ajax({
                url: d.attr("action"),
                data: d.serialize(),
                dataType: "json",
                beforeSend: function(a) {
                    a.setRequestHeader("X-Requested-With", "GET REQUEST")
                }
            });
            f.done(function(a) {
                b("ok" == a.status ? a.results : a.messages)
            }), f.fail(function(a, b) {
                alert("Request failed: " + b)
            })
        }
    })
};