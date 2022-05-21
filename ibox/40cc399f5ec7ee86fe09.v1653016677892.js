/*! For license information please see LICENSES */
(window.webpackJsonp = window.webpackJsonp || []).push([[4], {
    308: function(t, e, i) {
        t.exports = function() {
            "use strict";
            function t(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }
                    ))),
                    i.push.apply(i, n)
                }
                return i
            }
            function e(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var n = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? t(Object(n), !0).forEach((function(t) {
                        a(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }
            function i(t) {
                return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                ,
                i(t)
            }
            function n(t, e) {
                if (!(t instanceof e))
                    throw new TypeError("Cannot call a class as a function")
            }
            function o(t, e) {
                for (var i = 0; i < e.length; i++) {
                    var n = e[i];
                    n.enumerable = n.enumerable || !1,
                    n.configurable = !0,
                    "value"in n && (n.writable = !0),
                    Object.defineProperty(t, n.key, n)
                }
            }
            function s(t, e, i) {
                return e && o(t.prototype, e),
                i && o(t, i),
                Object.defineProperty(t, "prototype", {
                    writable: !1
                }),
                t
            }
            function a(t, e, i) {
                return e in t ? Object.defineProperty(t, e, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = i,
                t
            }
            var r = {
                backdrop: !0,
                button: !0,
                navbar: !0,
                title: !0,
                toolbar: !0,
                className: "",
                container: "body",
                filter: null,
                fullscreen: !0,
                inheritedAttributes: ["crossOrigin", "decoding", "isMap", "loading", "referrerPolicy", "sizes", "srcset", "useMap"],
                initialViewIndex: 0,
                inline: !1,
                interval: 5e3,
                keyboard: !0,
                focus: !0,
                loading: !0,
                loop: !0,
                minWidth: 200,
                minHeight: 100,
                movable: !0,
                rotatable: !0,
                scalable: !0,
                zoomable: !0,
                zoomOnTouch: !0,
                zoomOnWheel: !0,
                slideOnTouch: !0,
                toggleOnDblclick: !0,
                tooltip: !0,
                transition: !0,
                zIndex: 2015,
                zIndexInline: 0,
                zoomRatio: .1,
                minZoomRatio: .01,
                maxZoomRatio: 100,
                url: "src",
                ready: null,
                show: null,
                shown: null,
                hide: null,
                hidden: null,
                view: null,
                viewed: null,
                move: null,
                moved: null,
                rotate: null,
                rotated: null,
                scale: null,
                scaled: null,
                zoom: null,
                zoomed: null,
                play: null,
                stop: null
            }
              , h = '<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>'
              , l = "undefined" != typeof window && void 0 !== window.document
              , c = l ? window : {}
              , u = !(!l || !c.document.documentElement) && "ontouchstart"in c.document.documentElement
              , d = !!l && "PointerEvent"in c
              , m = "viewer"
              , f = "move"
              , g = "switch"
              , v = "zoom"
              , p = "".concat(m, "-active")
              , b = "".concat(m, "-close")
              , w = "".concat(m, "-fade")
              , y = "".concat(m, "-fixed")
              , x = "".concat(m, "-fullscreen")
              , k = "".concat(m, "-fullscreen-exit")
              , z = "".concat(m, "-hide")
              , E = "".concat(m, "-hide-md-down")
              , D = "".concat(m, "-hide-sm-down")
              , T = "".concat(m, "-hide-xs-down")
              , I = "".concat(m, "-in")
              , A = "".concat(m, "-invisible")
              , S = "".concat(m, "-loading")
              , O = "".concat(m, "-move")
              , C = "".concat(m, "-open")
              , L = "".concat(m, "-show")
              , R = "".concat(m, "-transition")
              , F = "click"
              , N = "dblclick"
              , Y = "dragstart"
              , X = "focusin"
              , M = "keydown"
              , P = "load"
              , q = "error"
              , W = u ? "touchend touchcancel" : "mouseup"
              , j = u ? "touchmove" : "mousemove"
              , H = u ? "touchstart" : "mousedown"
              , B = d ? "pointerdown" : H
              , V = d ? "pointermove" : j
              , U = d ? "pointerup pointercancel" : W
              , K = "resize"
              , Z = "transitionend"
              , $ = "wheel"
              , J = "ready"
              , _ = "show"
              , G = "shown"
              , Q = "hide"
              , tt = "hidden"
              , et = "view"
              , it = "viewed"
              , nt = "move"
              , ot = "moved"
              , st = "rotate"
              , at = "rotated"
              , rt = "scale"
              , ht = "scaled"
              , lt = "zoom"
              , ct = "zoomed"
              , ut = "play"
              , dt = "stop"
              , mt = "".concat(m, "Action")
              , ft = /\s\s*/
              , gt = ["zoom-in", "zoom-out", "one-to-one", "reset", "prev", "play", "next", "rotate-left", "rotate-right", "flip-horizontal", "flip-vertical"];
            function vt(t) {
                return "string" == typeof t
            }
            var pt = Number.isNaN || c.isNaN;
            function bt(t) {
                return "number" == typeof t && !pt(t)
            }
            function wt(t) {
                return void 0 === t
            }
            function yt(t) {
                return "object" === i(t) && null !== t
            }
            var xt = Object.prototype.hasOwnProperty;
            function kt(t) {
                if (!yt(t))
                    return !1;
                try {
                    var e = t.constructor
                      , i = e.prototype;
                    return e && i && xt.call(i, "isPrototypeOf")
                } catch (n) {
                    return !1
                }
            }
            function zt(t) {
                return "function" == typeof t
            }
            function Et(t, e) {
                if (t && zt(e))
                    if (Array.isArray(t) || bt(t.length)) {
                        var i, n = t.length;
                        for (i = 0; i < n && !1 !== e.call(t, t[i], i, t); i += 1)
                            ;
                    } else
                        yt(t) && Object.keys(t).forEach((function(i) {
                            e.call(t, t[i], i, t)
                        }
                        ));
                return t
            }
            var Dt = Object.assign || function(t) {
                for (var e = arguments.length, i = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
                    i[n - 1] = arguments[n];
                return yt(t) && i.length > 0 && i.forEach((function(e) {
                    yt(e) && Object.keys(e).forEach((function(i) {
                        t[i] = e[i]
                    }
                    ))
                }
                )),
                t
            }
              , Tt = /^(?:width|height|left|top|marginLeft|marginTop)$/;
            function It(t, e) {
                var i = t.style;
                Et(e, (function(t, e) {
                    Tt.test(e) && bt(t) && (t += "px"),
                    i[e] = t
                }
                ))
            }
            function At(t) {
                return vt(t) ? t.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : t
            }
            function St(t, e) {
                return !(!t || !e) && (t.classList ? t.classList.contains(e) : t.className.indexOf(e) > -1)
            }
            function Ot(t, e) {
                if (t && e)
                    if (bt(t.length))
                        Et(t, (function(t) {
                            Ot(t, e)
                        }
                        ));
                    else if (t.classList)
                        t.classList.add(e);
                    else {
                        var i = t.className.trim();
                        i ? i.indexOf(e) < 0 && (t.className = "".concat(i, " ").concat(e)) : t.className = e
                    }
            }
            function Ct(t, e) {
                t && e && (bt(t.length) ? Et(t, (function(t) {
                    Ct(t, e)
                }
                )) : t.classList ? t.classList.remove(e) : t.className.indexOf(e) >= 0 && (t.className = t.className.replace(e, "")))
            }
            function Lt(t, e, i) {
                e && (bt(t.length) ? Et(t, (function(t) {
                    Lt(t, e, i)
                }
                )) : i ? Ot(t, e) : Ct(t, e))
            }
            var Rt = /([a-z\d])([A-Z])/g;
            function Ft(t) {
                return t.replace(Rt, "$1-$2").toLowerCase()
            }
            function Nt(t, e) {
                return yt(t[e]) ? t[e] : t.dataset ? t.dataset[e] : t.getAttribute("data-".concat(Ft(e)))
            }
            function Yt(t, e, i) {
                yt(i) ? t[e] = i : t.dataset ? t.dataset[e] = i : t.setAttribute("data-".concat(Ft(e)), i)
            }
            var Xt = function() {
                var t = !1;
                if (l) {
                    var e = !1
                      , i = function() {}
                      , n = Object.defineProperty({}, "once", {
                        get: function() {
                            return t = !0,
                            e
                        },
                        set: function(t) {
                            e = t
                        }
                    });
                    c.addEventListener("test", i, n),
                    c.removeEventListener("test", i, n)
                }
                return t
            }();
            function Mt(t, e, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                  , o = i;
                e.trim().split(ft).forEach((function(e) {
                    if (!Xt) {
                        var s = t.listeners;
                        s && s[e] && s[e][i] && (o = s[e][i],
                        delete s[e][i],
                        0 === Object.keys(s[e]).length && delete s[e],
                        0 === Object.keys(s).length && delete t.listeners)
                    }
                    t.removeEventListener(e, o, n)
                }
                ))
            }
            function Pt(t, e, i) {
                var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}
                  , o = i;
                e.trim().split(ft).forEach((function(e) {
                    if (n.once && !Xt) {
                        var s = t.listeners
                          , a = void 0 === s ? {} : s;
                        o = function() {
                            delete a[e][i],
                            t.removeEventListener(e, o, n);
                            for (var s = arguments.length, r = new Array(s), h = 0; h < s; h++)
                                r[h] = arguments[h];
                            i.apply(t, r)
                        }
                        ,
                        a[e] || (a[e] = {}),
                        a[e][i] && t.removeEventListener(e, a[e][i], n),
                        a[e][i] = o,
                        t.listeners = a
                    }
                    t.addEventListener(e, o, n)
                }
                ))
            }
            function qt(t, i, n, o) {
                var s;
                return zt(Event) && zt(CustomEvent) ? s = new CustomEvent(i,e({
                    bubbles: !0,
                    cancelable: !0,
                    detail: n
                }, o)) : (s = document.createEvent("CustomEvent")).initCustomEvent(i, !0, !0, n),
                t.dispatchEvent(s)
            }
            function Wt(t) {
                var e = t.getBoundingClientRect();
                return {
                    left: e.left + (window.pageXOffset - document.documentElement.clientLeft),
                    top: e.top + (window.pageYOffset - document.documentElement.clientTop)
                }
            }
            function jt(t) {
                var e = t.rotate
                  , i = t.scaleX
                  , n = t.scaleY
                  , o = t.translateX
                  , s = t.translateY
                  , a = [];
                bt(o) && 0 !== o && a.push("translateX(".concat(o, "px)")),
                bt(s) && 0 !== s && a.push("translateY(".concat(s, "px)")),
                bt(e) && 0 !== e && a.push("rotate(".concat(e, "deg)")),
                bt(i) && 1 !== i && a.push("scaleX(".concat(i, ")")),
                bt(n) && 1 !== n && a.push("scaleY(".concat(n, ")"));
                var r = a.length ? a.join(" ") : "none";
                return {
                    WebkitTransform: r,
                    msTransform: r,
                    transform: r
                }
            }
            function Ht(t) {
                return vt(t) ? decodeURIComponent(t.replace(/^.*\//, "").replace(/[?&#].*$/, "")) : ""
            }
            var Bt = c.navigator && /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(c.navigator.userAgent);
            function Vt(t, e, i) {
                var n = document.createElement("img");
                if (t.naturalWidth && !Bt)
                    return i(t.naturalWidth, t.naturalHeight),
                    n;
                var o = document.body || document.documentElement;
                return n.onload = function() {
                    i(n.width, n.height),
                    Bt || o.removeChild(n)
                }
                ,
                Et(e.inheritedAttributes, (function(e) {
                    var i = t.getAttribute(e);
                    null !== i && n.setAttribute(e, i)
                }
                )),
                n.src = t.src,
                Bt || (n.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",
                o.appendChild(n)),
                n
            }
            function Ut(t) {
                switch (t) {
                case 2:
                    return T;
                case 3:
                    return D;
                case 4:
                    return E;
                default:
                    return ""
                }
            }
            function Kt(t) {
                var i = e({}, t)
                  , n = [];
                return Et(t, (function(t, e) {
                    delete i[e],
                    Et(i, (function(e) {
                        var i = Math.abs(t.startX - e.startX)
                          , o = Math.abs(t.startY - e.startY)
                          , s = Math.abs(t.endX - e.endX)
                          , a = Math.abs(t.endY - e.endY)
                          , r = Math.sqrt(i * i + o * o)
                          , h = (Math.sqrt(s * s + a * a) - r) / r;
                        n.push(h)
                    }
                    ))
                }
                )),
                n.sort((function(t, e) {
                    return Math.abs(t) < Math.abs(e)
                }
                )),
                n[0]
            }
            function Zt(t, i) {
                var n = t.pageX
                  , o = t.pageY
                  , s = {
                    endX: n,
                    endY: o
                };
                return i ? s : e({
                    timeStamp: Date.now(),
                    startX: n,
                    startY: o
                }, s)
            }
            function $t(t) {
                var e = 0
                  , i = 0
                  , n = 0;
                return Et(t, (function(t) {
                    var o = t.startX
                      , s = t.startY;
                    e += o,
                    i += s,
                    n += 1
                }
                )),
                {
                    pageX: e /= n,
                    pageY: i /= n
                }
            }
            var Jt, _t = {
                render: function() {
                    this.initContainer(),
                    this.initViewer(),
                    this.initList(),
                    this.renderViewer()
                },
                initBody: function() {
                    var t = this.element.ownerDocument
                      , e = t.body || t.documentElement;
                    this.body = e,
                    this.scrollbarWidth = window.innerWidth - t.documentElement.clientWidth,
                    this.initialBodyPaddingRight = e.style.paddingRight,
                    this.initialBodyComputedPaddingRight = window.getComputedStyle(e).paddingRight
                },
                initContainer: function() {
                    this.containerData = {
                        width: window.innerWidth,
                        height: window.innerHeight
                    }
                },
                initViewer: function() {
                    var t, e = this.options, i = this.parent;
                    e.inline && (t = {
                        width: Math.max(i.offsetWidth, e.minWidth),
                        height: Math.max(i.offsetHeight, e.minHeight)
                    },
                    this.parentData = t),
                    !this.fulled && t || (t = this.containerData),
                    this.viewerData = Dt({}, t)
                },
                renderViewer: function() {
                    this.options.inline && !this.fulled && It(this.viewer, this.viewerData)
                },
                initList: function() {
                    var t = this
                      , e = this.element
                      , i = this.options
                      , n = this.list
                      , o = [];
                    n.innerHTML = "",
                    Et(this.images, (function(e, s) {
                        var a = e.src
                          , r = e.alt || Ht(a)
                          , h = t.getImageURL(e);
                        if (a || h) {
                            var l = document.createElement("li")
                              , c = document.createElement("img");
                            Et(i.inheritedAttributes, (function(t) {
                                var i = e.getAttribute(t);
                                null !== i && c.setAttribute(t, i)
                            }
                            )),
                            c.src = a || h,
                            c.alt = r,
                            c.setAttribute("data-original-url", h || a),
                            l.setAttribute("data-index", s),
                            l.setAttribute("data-viewer-action", "view"),
                            l.setAttribute("role", "button"),
                            i.keyboard && l.setAttribute("tabindex", 0),
                            l.appendChild(c),
                            n.appendChild(l),
                            o.push(l)
                        }
                    }
                    )),
                    this.items = o,
                    Et(o, (function(e) {
                        var n, o, s = e.firstElementChild;
                        Yt(s, "filled", !0),
                        i.loading && Ot(e, S),
                        Pt(s, P, n = function(n) {
                            Mt(s, q, o),
                            i.loading && Ct(e, S),
                            t.loadImage(n)
                        }
                        , {
                            once: !0
                        }),
                        Pt(s, q, o = function() {
                            Mt(s, P, n),
                            i.loading && Ct(e, S)
                        }
                        , {
                            once: !0
                        })
                    }
                    )),
                    i.transition && Pt(e, it, (function() {
                        Ot(n, R)
                    }
                    ), {
                        once: !0
                    })
                },
                renderList: function() {
                    var t = this.index
                      , e = this.items[t];
                    if (e) {
                        var i = e.nextElementSibling
                          , n = parseInt(window.getComputedStyle(i || e).marginLeft, 10)
                          , o = e.offsetWidth
                          , s = o + n;
                        It(this.list, Dt({
                            width: s * this.length - n
                        }, jt({
                            translateX: (this.viewerData.width - o) / 2 - s * t
                        })))
                    }
                },
                resetList: function() {
                    var t = this.list;
                    t.innerHTML = "",
                    Ct(t, R),
                    It(t, jt({
                        translateX: 0
                    }))
                },
                initImage: function(t) {
                    var e, i = this, n = this.options, o = this.image, s = this.viewerData, a = this.footer.offsetHeight, r = s.width, h = Math.max(s.height - a, a), l = this.imageData || {};
                    this.imageInitializing = {
                        abort: function() {
                            e.onload = null
                        }
                    },
                    e = Vt(o, n, (function(e, o) {
                        var s = e / o
                          , a = r
                          , c = h;
                        i.imageInitializing = !1,
                        h * s > r ? c = r / s : a = h * s,
                        a = Math.min(.9 * a, e),
                        c = Math.min(.9 * c, o);
                        var u = (r - a) / 2
                          , d = (h - c) / 2
                          , m = {
                            left: u,
                            top: d,
                            x: u,
                            y: d,
                            width: a,
                            height: c,
                            oldRatio: 1,
                            ratio: a / e,
                            aspectRatio: s,
                            naturalWidth: e,
                            naturalHeight: o
                        }
                          , f = Dt({}, m);
                        n.rotatable && (m.rotate = l.rotate || 0,
                        f.rotate = 0),
                        n.scalable && (m.scaleX = l.scaleX || 1,
                        m.scaleY = l.scaleY || 1,
                        f.scaleX = 1,
                        f.scaleY = 1),
                        i.imageData = m,
                        i.initialImageData = f,
                        t && t()
                    }
                    ))
                },
                renderImage: function(t) {
                    var e = this
                      , i = this.image
                      , n = this.imageData;
                    if (It(i, Dt({
                        width: n.width,
                        height: n.height,
                        marginLeft: n.x,
                        marginTop: n.y
                    }, jt(n))),
                    t)
                        if ((this.viewing || this.moving || this.rotating || this.scaling || this.zooming) && this.options.transition && St(i, R)) {
                            var o = function() {
                                e.imageRendering = !1,
                                t()
                            };
                            this.imageRendering = {
                                abort: function() {
                                    Mt(i, Z, o)
                                }
                            },
                            Pt(i, Z, o, {
                                once: !0
                            })
                        } else
                            t()
                },
                resetImage: function() {
                    if (this.viewing || this.viewed) {
                        var t = this.image;
                        this.viewing && this.viewing.abort(),
                        t.parentNode.removeChild(t),
                        this.image = null
                    }
                }
            }, Gt = {
                bind: function() {
                    var t = this.options
                      , e = this.viewer
                      , i = this.canvas
                      , n = this.element.ownerDocument;
                    Pt(e, F, this.onClick = this.click.bind(this)),
                    Pt(e, Y, this.onDragStart = this.dragstart.bind(this)),
                    Pt(i, B, this.onPointerDown = this.pointerdown.bind(this)),
                    Pt(n, V, this.onPointerMove = this.pointermove.bind(this)),
                    Pt(n, U, this.onPointerUp = this.pointerup.bind(this)),
                    Pt(n, M, this.onKeyDown = this.keydown.bind(this)),
                    Pt(window, K, this.onResize = this.resize.bind(this)),
                    t.zoomable && t.zoomOnWheel && Pt(e, $, this.onWheel = this.wheel.bind(this), {
                        passive: !1,
                        capture: !0
                    }),
                    t.toggleOnDblclick && Pt(i, N, this.onDblclick = this.dblclick.bind(this))
                },
                unbind: function() {
                    var t = this.options
                      , e = this.viewer
                      , i = this.canvas
                      , n = this.element.ownerDocument;
                    Mt(e, F, this.onClick),
                    Mt(e, Y, this.onDragStart),
                    Mt(i, B, this.onPointerDown),
                    Mt(n, V, this.onPointerMove),
                    Mt(n, U, this.onPointerUp),
                    Mt(n, M, this.onKeyDown),
                    Mt(window, K, this.onResize),
                    t.zoomable && t.zoomOnWheel && Mt(e, $, this.onWheel, {
                        passive: !1,
                        capture: !0
                    }),
                    t.toggleOnDblclick && Mt(i, N, this.onDblclick)
                }
            }, Qt = {
                click: function(t) {
                    var e = this.options
                      , i = this.imageData
                      , n = t.target
                      , o = Nt(n, mt);
                    switch (o || "img" !== n.localName || "li" !== n.parentElement.localName || (o = Nt(n = n.parentElement, mt)),
                    u && t.isTrusted && n === this.canvas && clearTimeout(this.clickCanvasTimeout),
                    o) {
                    case "mix":
                        this.played ? this.stop() : e.inline ? this.fulled ? this.exit() : this.full() : this.hide();
                        break;
                    case "hide":
                        this.hide();
                        break;
                    case "view":
                        this.view(Nt(n, "index"));
                        break;
                    case "zoom-in":
                        this.zoom(.1, !0);
                        break;
                    case "zoom-out":
                        this.zoom(-.1, !0);
                        break;
                    case "one-to-one":
                        this.toggle();
                        break;
                    case "reset":
                        this.reset();
                        break;
                    case "prev":
                        this.prev(e.loop);
                        break;
                    case "play":
                        this.play(e.fullscreen);
                        break;
                    case "next":
                        this.next(e.loop);
                        break;
                    case "rotate-left":
                        this.rotate(-90);
                        break;
                    case "rotate-right":
                        this.rotate(90);
                        break;
                    case "flip-horizontal":
                        this.scaleX(-i.scaleX || -1);
                        break;
                    case "flip-vertical":
                        this.scaleY(-i.scaleY || -1);
                        break;
                    default:
                        this.played && this.stop()
                    }
                },
                dblclick: function(t) {
                    t.preventDefault(),
                    this.viewed && t.target === this.image && (u && t.isTrusted && clearTimeout(this.doubleClickImageTimeout),
                    this.toggle(t.isTrusted ? t : t.detail && t.detail.originalEvent))
                },
                load: function() {
                    var t = this;
                    this.timeout && (clearTimeout(this.timeout),
                    this.timeout = !1);
                    var e = this.element
                      , i = this.options
                      , n = this.image
                      , o = this.index
                      , s = this.viewerData;
                    Ct(n, A),
                    i.loading && Ct(this.canvas, S),
                    n.style.cssText = "height:0;" + "margin-left:".concat(s.width / 2, "px;") + "margin-top:".concat(s.height / 2, "px;") + "max-width:none!important;position:relative;width:0;",
                    this.initImage((function() {
                        Lt(n, O, i.movable),
                        Lt(n, R, i.transition),
                        t.renderImage((function() {
                            t.viewed = !0,
                            t.viewing = !1,
                            zt(i.viewed) && Pt(e, it, i.viewed, {
                                once: !0
                            }),
                            qt(e, it, {
                                originalImage: t.images[o],
                                index: o,
                                image: n
                            }, {
                                cancelable: !1
                            })
                        }
                        ))
                    }
                    ))
                },
                loadImage: function(t) {
                    var e = t.target
                      , i = e.parentNode
                      , n = i.offsetWidth || 30
                      , o = i.offsetHeight || 50
                      , s = !!Nt(e, "filled");
                    Vt(e, this.options, (function(t, i) {
                        var a = t / i
                          , r = n
                          , h = o;
                        o * a > n ? s ? r = o * a : h = n / a : s ? h = n / a : r = o * a,
                        It(e, Dt({
                            width: r,
                            height: h
                        }, jt({
                            translateX: (n - r) / 2,
                            translateY: (o - h) / 2
                        })))
                    }
                    ))
                },
                keydown: function(t) {
                    var e = this.options;
                    if (e.keyboard) {
                        var i = t.keyCode || t.which || t.charCode;
                        if (13 === i && this.viewer.contains(t.target) && this.click(t),
                        this.fulled)
                            switch (i) {
                            case 27:
                                this.played ? this.stop() : e.inline ? this.fulled && this.exit() : this.hide();
                                break;
                            case 32:
                                this.played && this.stop();
                                break;
                            case 37:
                                this.prev(e.loop);
                                break;
                            case 38:
                                t.preventDefault(),
                                this.zoom(e.zoomRatio, !0);
                                break;
                            case 39:
                                this.next(e.loop);
                                break;
                            case 40:
                                t.preventDefault(),
                                this.zoom(-e.zoomRatio, !0);
                                break;
                            case 48:
                            case 49:
                                t.ctrlKey && (t.preventDefault(),
                                this.toggle())
                            }
                    }
                },
                dragstart: function(t) {
                    "img" === t.target.localName && t.preventDefault()
                },
                pointerdown: function(t) {
                    var e = this.options
                      , i = this.pointers
                      , n = t.buttons
                      , o = t.button;
                    if (!(!this.viewed || this.showing || this.viewing || this.hiding || ("mousedown" === t.type || "pointerdown" === t.type && "mouse" === t.pointerType) && (bt(n) && 1 !== n || bt(o) && 0 !== o || t.ctrlKey))) {
                        t.preventDefault(),
                        t.changedTouches ? Et(t.changedTouches, (function(t) {
                            i[t.identifier] = Zt(t)
                        }
                        )) : i[t.pointerId || 0] = Zt(t);
                        var s = !!e.movable && f;
                        e.zoomOnTouch && e.zoomable && Object.keys(i).length > 1 ? s = v : e.slideOnTouch && ("touch" === t.pointerType || "touchstart" === t.type) && this.isSwitchable() && (s = g),
                        !e.transition || s !== f && s !== v || Ct(this.image, R),
                        this.action = s
                    }
                },
                pointermove: function(t) {
                    var e = this.pointers
                      , i = this.action;
                    this.viewed && i && (t.preventDefault(),
                    t.changedTouches ? Et(t.changedTouches, (function(t) {
                        Dt(e[t.identifier] || {}, Zt(t, !0))
                    }
                    )) : Dt(e[t.pointerId || 0] || {}, Zt(t, !0)),
                    this.change(t))
                },
                pointerup: function(t) {
                    var e, i = this, n = this.options, o = this.action, s = this.pointers;
                    t.changedTouches ? Et(t.changedTouches, (function(t) {
                        e = s[t.identifier],
                        delete s[t.identifier]
                    }
                    )) : (e = s[t.pointerId || 0],
                    delete s[t.pointerId || 0]),
                    o && (t.preventDefault(),
                    !n.transition || o !== f && o !== v || Ot(this.image, R),
                    this.action = !1,
                    u && o !== v && e && Date.now() - e.timeStamp < 500 && (clearTimeout(this.clickCanvasTimeout),
                    clearTimeout(this.doubleClickImageTimeout),
                    n.toggleOnDblclick && this.viewed && t.target === this.image ? this.imageClicked ? (this.imageClicked = !1,
                    this.doubleClickImageTimeout = setTimeout((function() {
                        qt(i.image, N, {
                            originalEvent: t
                        })
                    }
                    ), 50)) : (this.imageClicked = !0,
                    this.doubleClickImageTimeout = setTimeout((function() {
                        i.imageClicked = !1
                    }
                    ), 500)) : (this.imageClicked = !1,
                    n.backdrop && "static" !== n.backdrop && t.target === this.canvas && (this.clickCanvasTimeout = setTimeout((function() {
                        qt(i.canvas, F, {
                            originalEvent: t
                        })
                    }
                    ), 50)))))
                },
                resize: function() {
                    var t = this;
                    if (this.isShown && !this.hiding && (this.fulled && (this.close(),
                    this.initBody(),
                    this.open()),
                    this.initContainer(),
                    this.initViewer(),
                    this.renderViewer(),
                    this.renderList(),
                    this.viewed && this.initImage((function() {
                        t.renderImage()
                    }
                    )),
                    this.played)) {
                        if (this.options.fullscreen && this.fulled && !(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement))
                            return void this.stop();
                        Et(this.player.getElementsByTagName("img"), (function(e) {
                            Pt(e, P, t.loadImage.bind(t), {
                                once: !0
                            }),
                            qt(e, P)
                        }
                        ))
                    }
                },
                wheel: function(t) {
                    var e = this;
                    if (this.viewed && (t.preventDefault(),
                    !this.wheeling)) {
                        this.wheeling = !0,
                        setTimeout((function() {
                            e.wheeling = !1
                        }
                        ), 50);
                        var i = Number(this.options.zoomRatio) || .1
                          , n = 1;
                        t.deltaY ? n = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? n = -t.wheelDelta / 120 : t.detail && (n = t.detail > 0 ? 1 : -1),
                        this.zoom(-n * i, !0, t)
                    }
                }
            }, te = {
                show: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                      , e = this.element
                      , i = this.options;
                    if (i.inline || this.showing || this.isShown || this.showing)
                        return this;
                    if (!this.ready)
                        return this.build(),
                        this.ready && this.show(t),
                        this;
                    if (zt(i.show) && Pt(e, _, i.show, {
                        once: !0
                    }),
                    !1 === qt(e, _) || !this.ready)
                        return this;
                    this.hiding && this.transitioning.abort(),
                    this.showing = !0,
                    this.open();
                    var n = this.viewer;
                    if (Ct(n, z),
                    n.setAttribute("role", "dialog"),
                    n.setAttribute("aria-labelledby", this.title.id),
                    n.setAttribute("aria-modal", !0),
                    n.removeAttribute("aria-hidden"),
                    i.transition && !t) {
                        var o = this.shown.bind(this);
                        this.transitioning = {
                            abort: function() {
                                Mt(n, Z, o),
                                Ct(n, I)
                            }
                        },
                        Ot(n, R),
                        n.initialOffsetWidth = n.offsetWidth,
                        Pt(n, Z, o, {
                            once: !0
                        }),
                        Ot(n, I)
                    } else
                        Ot(n, I),
                        this.shown();
                    return this
                },
                hide: function() {
                    var t = this
                      , e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                      , i = this.element
                      , n = this.options;
                    if (n.inline || this.hiding || !this.isShown && !this.showing)
                        return this;
                    if (zt(n.hide) && Pt(i, Q, n.hide, {
                        once: !0
                    }),
                    !1 === qt(i, Q))
                        return this;
                    this.showing && this.transitioning.abort(),
                    this.hiding = !0,
                    this.played ? this.stop() : this.viewing && this.viewing.abort();
                    var o = this.viewer
                      , s = this.image
                      , a = function() {
                        Ct(o, I),
                        t.hidden()
                    };
                    if (n.transition && !e) {
                        var r = function e(i) {
                            i && i.target === o && (Mt(o, Z, e),
                            t.hidden())
                        }
                          , h = function() {
                            St(o, R) ? (Pt(o, Z, r),
                            Ct(o, I)) : a()
                        };
                        this.transitioning = {
                            abort: function() {
                                t.viewed && St(s, R) ? Mt(s, Z, h) : St(o, R) && Mt(o, Z, r)
                            }
                        },
                        this.viewed && St(s, R) ? (Pt(s, Z, h, {
                            once: !0
                        }),
                        this.zoomTo(0, !1, null, !0)) : h()
                    } else
                        a();
                    return this
                },
                view: function() {
                    var t = this
                      , e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.options.initialViewIndex;
                    if (e = Number(e) || 0,
                    this.hiding || this.played || e < 0 || e >= this.length || this.viewed && e === this.index)
                        return this;
                    if (!this.isShown)
                        return this.index = e,
                        this.show();
                    this.viewing && this.viewing.abort();
                    var i = this.element
                      , n = this.options
                      , o = this.title
                      , s = this.canvas
                      , a = this.items[e]
                      , r = a.querySelector("img")
                      , h = Nt(r, "originalUrl")
                      , l = r.getAttribute("alt")
                      , c = document.createElement("img");
                    if (Et(n.inheritedAttributes, (function(t) {
                        var e = r.getAttribute(t);
                        null !== e && c.setAttribute(t, e)
                    }
                    )),
                    c.src = h,
                    c.alt = l,
                    zt(n.view) && Pt(i, et, n.view, {
                        once: !0
                    }),
                    !1 === qt(i, et, {
                        originalImage: this.images[e],
                        index: e,
                        image: c
                    }) || !this.isShown || this.hiding || this.played)
                        return this;
                    var u = this.items[this.index];
                    u && (Ct(u, p),
                    u.removeAttribute("aria-selected")),
                    Ot(a, p),
                    a.setAttribute("aria-selected", !0),
                    n.focus && a.focus(),
                    this.image = c,
                    this.viewed = !1,
                    this.index = e,
                    this.imageData = {},
                    Ot(c, A),
                    n.loading && Ot(s, S),
                    s.innerHTML = "",
                    s.appendChild(c),
                    this.renderList(),
                    o.innerHTML = "";
                    var d, m, f = function() {
                        var e = t.imageData
                          , i = Array.isArray(n.title) ? n.title[1] : n.title;
                        o.innerHTML = At(zt(i) ? i.call(t, c, e) : "".concat(l, " (").concat(e.naturalWidth, " × ").concat(e.naturalHeight, ")"))
                    };
                    return Pt(i, it, f, {
                        once: !0
                    }),
                    this.viewing = {
                        abort: function() {
                            Mt(i, it, f),
                            c.complete ? t.imageRendering ? t.imageRendering.abort() : t.imageInitializing && t.imageInitializing.abort() : (c.src = "",
                            Mt(c, P, d),
                            t.timeout && clearTimeout(t.timeout))
                        }
                    },
                    c.complete ? this.load() : (Pt(c, P, d = function() {
                        Mt(c, q, m),
                        t.load()
                    }
                    , {
                        once: !0
                    }),
                    Pt(c, q, m = function() {
                        Mt(c, P, d),
                        t.timeout && (clearTimeout(t.timeout),
                        t.timeout = !1),
                        Ct(c, A),
                        n.loading && Ct(t.canvas, S)
                    }
                    , {
                        once: !0
                    }),
                    this.timeout && clearTimeout(this.timeout),
                    this.timeout = setTimeout((function() {
                        Ct(c, A),
                        t.timeout = !1
                    }
                    ), 1e3)),
                    this
                },
                prev: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                      , e = this.index - 1;
                    return e < 0 && (e = t ? this.length - 1 : 0),
                    this.view(e),
                    this
                },
                next: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                      , e = this.length - 1
                      , i = this.index + 1;
                    return i > e && (i = t ? 0 : e),
                    this.view(i),
                    this
                },
                move: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t
                      , i = this.imageData;
                    return this.moveTo(wt(t) ? t : i.x + Number(t), wt(e) ? e : i.y + Number(e)),
                    this
                },
                moveTo: function(t) {
                    var e = this
                      , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                      , o = this.element
                      , s = this.options
                      , a = this.imageData;
                    if (t = Number(t),
                    i = Number(i),
                    this.viewed && !this.played && s.movable) {
                        var r = a.x
                          , h = a.y
                          , l = !1;
                        if (bt(t) ? l = !0 : t = r,
                        bt(i) ? l = !0 : i = h,
                        l) {
                            if (zt(s.move) && Pt(o, nt, s.move, {
                                once: !0
                            }),
                            !1 === qt(o, nt, {
                                x: t,
                                y: i,
                                oldX: r,
                                oldY: h,
                                originalEvent: n
                            }))
                                return this;
                            a.x = t,
                            a.y = i,
                            a.left = t,
                            a.top = i,
                            this.moving = !0,
                            this.renderImage((function() {
                                e.moving = !1,
                                zt(s.moved) && Pt(o, ot, s.moved, {
                                    once: !0
                                }),
                                qt(o, ot, {
                                    x: t,
                                    y: i,
                                    oldX: r,
                                    oldY: h,
                                    originalEvent: n
                                }, {
                                    cancelable: !1
                                })
                            }
                            ))
                        }
                    }
                    return this
                },
                rotate: function(t) {
                    return this.rotateTo((this.imageData.rotate || 0) + Number(t)),
                    this
                },
                rotateTo: function(t) {
                    var e = this
                      , i = this.element
                      , n = this.options
                      , o = this.imageData;
                    if (bt(t = Number(t)) && this.viewed && !this.played && n.rotatable) {
                        var s = o.rotate;
                        if (zt(n.rotate) && Pt(i, st, n.rotate, {
                            once: !0
                        }),
                        !1 === qt(i, st, {
                            degree: t,
                            oldDegree: s
                        }))
                            return this;
                        o.rotate = t,
                        this.rotating = !0,
                        this.renderImage((function() {
                            e.rotating = !1,
                            zt(n.rotated) && Pt(i, at, n.rotated, {
                                once: !0
                            }),
                            qt(i, at, {
                                degree: t,
                                oldDegree: s
                            }, {
                                cancelable: !1
                            })
                        }
                        ))
                    }
                    return this
                },
                scaleX: function(t) {
                    return this.scale(t, this.imageData.scaleY),
                    this
                },
                scaleY: function(t) {
                    return this.scale(this.imageData.scaleX, t),
                    this
                },
                scale: function(t) {
                    var e = this
                      , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t
                      , n = this.element
                      , o = this.options
                      , s = this.imageData;
                    if (t = Number(t),
                    i = Number(i),
                    this.viewed && !this.played && o.scalable) {
                        var a = s.scaleX
                          , r = s.scaleY
                          , h = !1;
                        if (bt(t) ? h = !0 : t = a,
                        bt(i) ? h = !0 : i = r,
                        h) {
                            if (zt(o.scale) && Pt(n, rt, o.scale, {
                                once: !0
                            }),
                            !1 === qt(n, rt, {
                                scaleX: t,
                                scaleY: i,
                                oldScaleX: a,
                                oldScaleY: r
                            }))
                                return this;
                            s.scaleX = t,
                            s.scaleY = i,
                            this.scaling = !0,
                            this.renderImage((function() {
                                e.scaling = !1,
                                zt(o.scaled) && Pt(n, ht, o.scaled, {
                                    once: !0
                                }),
                                qt(n, ht, {
                                    scaleX: t,
                                    scaleY: i,
                                    oldScaleX: a,
                                    oldScaleY: r
                                }, {
                                    cancelable: !1
                                })
                            }
                            ))
                        }
                    }
                    return this
                },
                zoom: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                      , n = this.imageData;
                    return t = (t = Number(t)) < 0 ? 1 / (1 - t) : 1 + t,
                    this.zoomTo(n.width * t / n.naturalWidth, e, i),
                    this
                },
                zoomTo: function(t) {
                    var e = this
                      , i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                      , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null
                      , o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3]
                      , s = this.element
                      , a = this.options
                      , r = this.pointers
                      , h = this.imageData
                      , l = h.x
                      , c = h.y
                      , u = h.width
                      , d = h.height
                      , m = h.naturalWidth
                      , f = h.naturalHeight;
                    if (bt(t = Math.max(0, t)) && this.viewed && !this.played && (o || a.zoomable)) {
                        if (!o) {
                            var g = Math.max(.01, a.minZoomRatio)
                              , v = Math.min(100, a.maxZoomRatio);
                            t = Math.min(Math.max(t, g), v)
                        }
                        if (n)
                            switch (n.type) {
                            case "wheel":
                                a.zoomRatio >= .055 && t > .95 && t < 1.05 && (t = 1);
                                break;
                            case "pointermove":
                            case "touchmove":
                            case "mousemove":
                                t > .99 && t < 1.01 && (t = 1)
                            }
                        var p = m * t
                          , b = f * t
                          , w = p - u
                          , y = b - d
                          , x = h.ratio;
                        if (zt(a.zoom) && Pt(s, lt, a.zoom, {
                            once: !0
                        }),
                        !1 === qt(s, lt, {
                            ratio: t,
                            oldRatio: x,
                            originalEvent: n
                        }))
                            return this;
                        if (this.zooming = !0,
                        n) {
                            var k = Wt(this.viewer)
                              , z = r && Object.keys(r).length > 0 ? $t(r) : {
                                pageX: n.pageX,
                                pageY: n.pageY
                            };
                            h.x -= w * ((z.pageX - k.left - l) / u),
                            h.y -= y * ((z.pageY - k.top - c) / d)
                        } else
                            h.x -= w / 2,
                            h.y -= y / 2;
                        h.left = h.x,
                        h.top = h.y,
                        h.width = p,
                        h.height = b,
                        h.oldRatio = x,
                        h.ratio = t,
                        this.renderImage((function() {
                            e.zooming = !1,
                            zt(a.zoomed) && Pt(s, ct, a.zoomed, {
                                once: !0
                            }),
                            qt(s, ct, {
                                ratio: t,
                                oldRatio: x,
                                originalEvent: n
                            }, {
                                cancelable: !1
                            })
                        }
                        )),
                        i && this.tooltip()
                    }
                    return this
                },
                play: function() {
                    var t = this
                      , e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (!this.isShown || this.played)
                        return this;
                    var i = this.element
                      , n = this.options;
                    if (zt(n.play) && Pt(i, ut, n.play, {
                        once: !0
                    }),
                    !1 === qt(i, ut))
                        return this;
                    var o = this.player
                      , s = this.loadImage.bind(this)
                      , a = []
                      , r = 0
                      , h = 0;
                    if (this.played = !0,
                    this.onLoadWhenPlay = s,
                    e && this.requestFullscreen(e),
                    Ot(o, L),
                    Et(this.items, (function(t, e) {
                        var i = t.querySelector("img")
                          , l = document.createElement("img");
                        l.src = Nt(i, "originalUrl"),
                        l.alt = i.getAttribute("alt"),
                        l.referrerPolicy = i.referrerPolicy,
                        r += 1,
                        Ot(l, w),
                        Lt(l, R, n.transition),
                        St(t, p) && (Ot(l, I),
                        h = e),
                        a.push(l),
                        Pt(l, P, s, {
                            once: !0
                        }),
                        o.appendChild(l)
                    }
                    )),
                    bt(n.interval) && n.interval > 0) {
                        var l = function e() {
                            t.playing = setTimeout((function() {
                                Ct(a[h], I),
                                Ot(a[h = (h += 1) < r ? h : 0], I),
                                e()
                            }
                            ), n.interval)
                        };
                        r > 1 && l()
                    }
                    return this
                },
                stop: function() {
                    var t = this;
                    if (!this.played)
                        return this;
                    var e = this.element
                      , i = this.options;
                    if (zt(i.stop) && Pt(e, dt, i.stop, {
                        once: !0
                    }),
                    !1 === qt(e, dt))
                        return this;
                    var n = this.player;
                    return this.played = !1,
                    clearTimeout(this.playing),
                    Et(n.getElementsByTagName("img"), (function(e) {
                        Mt(e, P, t.onLoadWhenPlay)
                    }
                    )),
                    Ct(n, L),
                    n.innerHTML = "",
                    this.exitFullscreen(),
                    this
                },
                full: function() {
                    var t = this
                      , e = this.options
                      , i = this.viewer
                      , n = this.image
                      , o = this.list;
                    return !this.isShown || this.played || this.fulled || !e.inline || (this.fulled = !0,
                    this.open(),
                    Ot(this.button, k),
                    e.transition && (Ct(o, R),
                    this.viewed && Ct(n, R)),
                    Ot(i, y),
                    i.setAttribute("role", "dialog"),
                    i.setAttribute("aria-labelledby", this.title.id),
                    i.setAttribute("aria-modal", !0),
                    i.removeAttribute("style"),
                    It(i, {
                        zIndex: e.zIndex
                    }),
                    e.focus && this.enforceFocus(),
                    this.initContainer(),
                    this.viewerData = Dt({}, this.containerData),
                    this.renderList(),
                    this.viewed && this.initImage((function() {
                        t.renderImage((function() {
                            e.transition && setTimeout((function() {
                                Ot(n, R),
                                Ot(o, R)
                            }
                            ), 0)
                        }
                        ))
                    }
                    ))),
                    this
                },
                exit: function() {
                    var t = this
                      , e = this.options
                      , i = this.viewer
                      , n = this.image
                      , o = this.list;
                    return this.isShown && !this.played && this.fulled && e.inline ? (this.fulled = !1,
                    this.close(),
                    Ct(this.button, k),
                    e.transition && (Ct(o, R),
                    this.viewed && Ct(n, R)),
                    e.focus && this.clearEnforceFocus(),
                    i.removeAttribute("role"),
                    i.removeAttribute("aria-labelledby"),
                    i.removeAttribute("aria-modal"),
                    Ct(i, y),
                    It(i, {
                        zIndex: e.zIndexInline
                    }),
                    this.viewerData = Dt({}, this.parentData),
                    this.renderViewer(),
                    this.renderList(),
                    this.viewed && this.initImage((function() {
                        t.renderImage((function() {
                            e.transition && setTimeout((function() {
                                Ot(n, R),
                                Ot(o, R)
                            }
                            ), 0)
                        }
                        ))
                    }
                    )),
                    this) : this
                },
                tooltip: function() {
                    var t = this
                      , e = this.options
                      , i = this.tooltipBox
                      , n = this.imageData;
                    return this.viewed && !this.played && e.tooltip ? (i.textContent = "".concat(Math.round(100 * n.ratio), "%"),
                    this.tooltipping ? clearTimeout(this.tooltipping) : e.transition ? (this.fading && qt(i, Z),
                    Ot(i, L),
                    Ot(i, w),
                    Ot(i, R),
                    i.removeAttribute("aria-hidden"),
                    i.initialOffsetWidth = i.offsetWidth,
                    Ot(i, I)) : (Ot(i, L),
                    i.removeAttribute("aria-hidden")),
                    this.tooltipping = setTimeout((function() {
                        e.transition ? (Pt(i, Z, (function() {
                            Ct(i, L),
                            Ct(i, w),
                            Ct(i, R),
                            i.setAttribute("aria-hidden", !0),
                            t.fading = !1
                        }
                        ), {
                            once: !0
                        }),
                        Ct(i, I),
                        t.fading = !0) : (Ct(i, L),
                        i.setAttribute("aria-hidden", !0)),
                        t.tooltipping = !1
                    }
                    ), 1e3),
                    this) : this
                },
                toggle: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    return 1 === this.imageData.ratio ? this.zoomTo(this.imageData.oldRatio, !0, t) : this.zoomTo(1, !0, t),
                    this
                },
                reset: function() {
                    return this.viewed && !this.played && (this.imageData = Dt({}, this.initialImageData),
                    this.renderImage()),
                    this
                },
                update: function() {
                    var t = this
                      , e = this.element
                      , i = this.options
                      , n = this.isImg;
                    if (n && !e.parentNode)
                        return this.destroy();
                    var o = [];
                    if (Et(n ? [e] : e.querySelectorAll("img"), (function(e) {
                        zt(i.filter) ? i.filter.call(t, e) && o.push(e) : t.getImageURL(e) && o.push(e)
                    }
                    )),
                    !o.length)
                        return this;
                    if (this.images = o,
                    this.length = o.length,
                    this.ready) {
                        var s = [];
                        if (Et(this.items, (function(t, e) {
                            var i = t.querySelector("img")
                              , n = o[e];
                            n && i && n.src === i.src && n.alt === i.alt || s.push(e)
                        }
                        )),
                        It(this.list, {
                            width: "auto"
                        }),
                        this.initList(),
                        this.isShown)
                            if (this.length) {
                                if (this.viewed) {
                                    var a = s.indexOf(this.index);
                                    if (a >= 0)
                                        this.viewed = !1,
                                        this.view(Math.max(Math.min(this.index - a, this.length - 1), 0));
                                    else {
                                        var r = this.items[this.index];
                                        Ot(r, p),
                                        r.setAttribute("aria-selected", !0)
                                    }
                                }
                            } else
                                this.image = null,
                                this.viewed = !1,
                                this.index = 0,
                                this.imageData = {},
                                this.canvas.innerHTML = "",
                                this.title.innerHTML = ""
                    } else
                        this.build();
                    return this
                },
                destroy: function() {
                    var t = this.element
                      , e = this.options;
                    return t[m] ? (this.destroyed = !0,
                    this.ready ? (this.played && this.stop(),
                    e.inline ? (this.fulled && this.exit(),
                    this.unbind()) : this.isShown ? (this.viewing && (this.imageRendering ? this.imageRendering.abort() : this.imageInitializing && this.imageInitializing.abort()),
                    this.hiding && this.transitioning.abort(),
                    this.hidden()) : this.showing && (this.transitioning.abort(),
                    this.hidden()),
                    this.ready = !1,
                    this.viewer.parentNode.removeChild(this.viewer)) : e.inline && (this.delaying ? this.delaying.abort() : this.initializing && this.initializing.abort()),
                    e.inline || Mt(t, F, this.onStart),
                    t[m] = void 0,
                    this) : this
                }
            }, ee = {
                getImageURL: function(t) {
                    var e = this.options.url;
                    return e = vt(e) ? t.getAttribute(e) : zt(e) ? e.call(this, t) : ""
                },
                enforceFocus: function() {
                    var t = this;
                    this.clearEnforceFocus(),
                    Pt(document, X, this.onFocusin = function(e) {
                        var i = t.viewer
                          , n = e.target;
                        if (n !== document && n !== i && !i.contains(n)) {
                            for (; n; ) {
                                if (null !== n.getAttribute("tabindex") || "true" === n.getAttribute("aria-modal"))
                                    return;
                                n = n.parentElement
                            }
                            i.focus()
                        }
                    }
                    )
                },
                clearEnforceFocus: function() {
                    this.onFocusin && (Mt(document, X, this.onFocusin),
                    this.onFocusin = null)
                },
                open: function() {
                    var t = this.body;
                    Ot(t, C),
                    t.style.paddingRight = "".concat(this.scrollbarWidth + (parseFloat(this.initialBodyComputedPaddingRight) || 0), "px")
                },
                close: function() {
                    var t = this.body;
                    Ct(t, C),
                    t.style.paddingRight = this.initialBodyPaddingRight
                },
                shown: function() {
                    var t = this.element
                      , e = this.options
                      , i = this.viewer;
                    this.fulled = !0,
                    this.isShown = !0,
                    this.render(),
                    this.bind(),
                    this.showing = !1,
                    e.focus && (i.focus(),
                    this.enforceFocus()),
                    zt(e.shown) && Pt(t, G, e.shown, {
                        once: !0
                    }),
                    !1 !== qt(t, G) && this.ready && this.isShown && !this.hiding && this.view(this.index)
                },
                hidden: function() {
                    var t = this.element
                      , e = this.options
                      , i = this.viewer;
                    e.fucus && this.clearEnforceFocus(),
                    this.fulled = !1,
                    this.viewed = !1,
                    this.isShown = !1,
                    this.close(),
                    this.unbind(),
                    Ot(i, z),
                    i.removeAttribute("role"),
                    i.removeAttribute("aria-labelledby"),
                    i.removeAttribute("aria-modal"),
                    i.setAttribute("aria-hidden", !0),
                    this.resetList(),
                    this.resetImage(),
                    this.hiding = !1,
                    this.destroyed || (zt(e.hidden) && Pt(t, tt, e.hidden, {
                        once: !0
                    }),
                    qt(t, tt, null, {
                        cancelable: !1
                    }))
                },
                requestFullscreen: function(t) {
                    var e = this.element.ownerDocument;
                    if (this.fulled && !(e.fullscreenElement || e.webkitFullscreenElement || e.mozFullScreenElement || e.msFullscreenElement)) {
                        var i = e.documentElement;
                        i.requestFullscreen ? kt(t) ? i.requestFullscreen(t) : i.requestFullscreen() : i.webkitRequestFullscreen ? i.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : i.mozRequestFullScreen ? i.mozRequestFullScreen() : i.msRequestFullscreen && i.msRequestFullscreen()
                    }
                },
                exitFullscreen: function() {
                    var t = this.element.ownerDocument;
                    this.fulled && (t.fullscreenElement || t.webkitFullscreenElement || t.mozFullScreenElement || t.msFullscreenElement) && (t.exitFullscreen ? t.exitFullscreen() : t.webkitExitFullscreen ? t.webkitExitFullscreen() : t.mozCancelFullScreen ? t.mozCancelFullScreen() : t.msExitFullscreen && t.msExitFullscreen())
                },
                change: function(t) {
                    var e = this.options
                      , i = this.pointers
                      , n = i[Object.keys(i)[0]];
                    if (n) {
                        var o = n.endX - n.startX
                          , s = n.endY - n.startY;
                        switch (this.action) {
                        case f:
                            this.move(o, s, t);
                            break;
                        case v:
                            this.zoom(Kt(i), !1, t);
                            break;
                        case g:
                            this.action = "switched";
                            var a = Math.abs(o);
                            a > 1 && a > Math.abs(s) && (this.pointers = {},
                            o > 1 ? this.prev(e.loop) : o < -1 && this.next(e.loop))
                        }
                        Et(i, (function(t) {
                            t.startX = t.endX,
                            t.startY = t.endY
                        }
                        ))
                    }
                },
                isSwitchable: function() {
                    var t = this.imageData
                      , e = this.viewerData;
                    return this.length > 1 && t.x >= 0 && t.y >= 0 && t.width <= e.width && t.height <= e.height
                }
            }, ie = c.Viewer, ne = (Jt = -1,
            function() {
                return Jt += 1
            }
            ), oe = function() {
                function t(e) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (n(this, t),
                    !e || 1 !== e.nodeType)
                        throw new Error("The first argument is required and must be an element.");
                    this.element = e,
                    this.options = Dt({}, r, kt(i) && i),
                    this.action = !1,
                    this.fading = !1,
                    this.fulled = !1,
                    this.hiding = !1,
                    this.imageClicked = !1,
                    this.imageData = {},
                    this.index = this.options.initialViewIndex,
                    this.isImg = !1,
                    this.isShown = !1,
                    this.length = 0,
                    this.moving = !1,
                    this.played = !1,
                    this.playing = !1,
                    this.pointers = {},
                    this.ready = !1,
                    this.rotating = !1,
                    this.scaling = !1,
                    this.showing = !1,
                    this.timeout = !1,
                    this.tooltipping = !1,
                    this.viewed = !1,
                    this.viewing = !1,
                    this.wheeling = !1,
                    this.zooming = !1,
                    this.id = ne(),
                    this.init()
                }
                return s(t, [{
                    key: "init",
                    value: function() {
                        var t = this
                          , e = this.element
                          , i = this.options;
                        if (!e[m]) {
                            e[m] = this,
                            i.focus && !i.keyboard && (i.focus = !1);
                            var n = "img" === e.localName
                              , o = [];
                            if (Et(n ? [e] : e.querySelectorAll("img"), (function(e) {
                                zt(i.filter) ? i.filter.call(t, e) && o.push(e) : t.getImageURL(e) && o.push(e)
                            }
                            )),
                            this.isImg = n,
                            this.length = o.length,
                            this.images = o,
                            this.initBody(),
                            wt(document.createElement(m).style.transition) && (i.transition = !1),
                            i.inline) {
                                var s = 0
                                  , a = function() {
                                    var e;
                                    (s += 1) === t.length && (t.initializing = !1,
                                    t.delaying = {
                                        abort: function() {
                                            clearTimeout(e)
                                        }
                                    },
                                    e = setTimeout((function() {
                                        t.delaying = !1,
                                        t.build()
                                    }
                                    ), 0))
                                };
                                this.initializing = {
                                    abort: function() {
                                        Et(o, (function(t) {
                                            t.complete || (Mt(t, P, a),
                                            Mt(t, q, a))
                                        }
                                        ))
                                    }
                                },
                                Et(o, (function(t) {
                                    var e, i;
                                    t.complete ? a() : (Pt(t, P, e = function() {
                                        Mt(t, q, i),
                                        a()
                                    }
                                    , {
                                        once: !0
                                    }),
                                    Pt(t, q, i = function() {
                                        Mt(t, P, e),
                                        a()
                                    }
                                    , {
                                        once: !0
                                    }))
                                }
                                ))
                            } else
                                Pt(e, F, this.onStart = function(e) {
                                    var n = e.target;
                                    "img" !== n.localName || zt(i.filter) && !i.filter.call(t, n) || t.view(t.images.indexOf(n))
                                }
                                )
                        }
                    }
                }, {
                    key: "build",
                    value: function() {
                        if (!this.ready) {
                            var t = this.element
                              , e = this.options
                              , i = t.parentNode
                              , n = document.createElement("div");
                            n.innerHTML = h;
                            var o = n.querySelector(".".concat(m, "-container"))
                              , s = o.querySelector(".".concat(m, "-title"))
                              , a = o.querySelector(".".concat(m, "-toolbar"))
                              , r = o.querySelector(".".concat(m, "-navbar"))
                              , l = o.querySelector(".".concat(m, "-button"))
                              , c = o.querySelector(".".concat(m, "-canvas"));
                            if (this.parent = i,
                            this.viewer = o,
                            this.title = s,
                            this.toolbar = a,
                            this.navbar = r,
                            this.button = l,
                            this.canvas = c,
                            this.footer = o.querySelector(".".concat(m, "-footer")),
                            this.tooltipBox = o.querySelector(".".concat(m, "-tooltip")),
                            this.player = o.querySelector(".".concat(m, "-player")),
                            this.list = o.querySelector(".".concat(m, "-list")),
                            o.id = "".concat(m).concat(this.id),
                            s.id = "".concat(m, "Title").concat(this.id),
                            Ot(s, e.title ? Ut(Array.isArray(e.title) ? e.title[0] : e.title) : z),
                            Ot(r, e.navbar ? Ut(e.navbar) : z),
                            Lt(l, z, !e.button),
                            e.keyboard && l.setAttribute("tabindex", 0),
                            e.backdrop && (Ot(o, "".concat(m, "-backdrop")),
                            e.inline || "static" === e.backdrop || Yt(c, mt, "hide")),
                            vt(e.className) && e.className && e.className.split(ft).forEach((function(t) {
                                Ot(o, t)
                            }
                            )),
                            e.toolbar) {
                                var u = document.createElement("ul")
                                  , d = kt(e.toolbar)
                                  , f = gt.slice(0, 3)
                                  , g = gt.slice(7, 9)
                                  , v = gt.slice(9);
                                d || Ot(a, Ut(e.toolbar)),
                                Et(d ? e.toolbar : gt, (function(t, i) {
                                    var n = d && kt(t)
                                      , o = d ? Ft(i) : t
                                      , s = n && !wt(t.show) ? t.show : t;
                                    if (s && (e.zoomable || -1 === f.indexOf(o)) && (e.rotatable || -1 === g.indexOf(o)) && (e.scalable || -1 === v.indexOf(o))) {
                                        var a = n && !wt(t.size) ? t.size : t
                                          , r = n && !wt(t.click) ? t.click : t
                                          , h = document.createElement("li");
                                        e.keyboard && h.setAttribute("tabindex", 0),
                                        h.setAttribute("role", "button"),
                                        Ot(h, "".concat(m, "-").concat(o)),
                                        zt(r) || Yt(h, mt, o),
                                        bt(s) && Ot(h, Ut(s)),
                                        -1 !== ["small", "large"].indexOf(a) ? Ot(h, "".concat(m, "-").concat(a)) : "play" === o && Ot(h, "".concat(m, "-large")),
                                        zt(r) && Pt(h, F, r),
                                        u.appendChild(h)
                                    }
                                }
                                )),
                                a.appendChild(u)
                            } else
                                Ot(a, z);
                            if (!e.rotatable) {
                                var p = a.querySelectorAll('li[class*="rotate"]');
                                Ot(p, A),
                                Et(p, (function(t) {
                                    a.appendChild(t)
                                }
                                ))
                            }
                            if (e.inline)
                                Ot(l, x),
                                It(o, {
                                    zIndex: e.zIndexInline
                                }),
                                "static" === window.getComputedStyle(i).position && It(i, {
                                    position: "relative"
                                }),
                                i.insertBefore(o, t.nextSibling);
                            else {
                                Ot(l, b),
                                Ot(o, y),
                                Ot(o, w),
                                Ot(o, z),
                                It(o, {
                                    zIndex: e.zIndex
                                });
                                var k = e.container;
                                vt(k) && (k = t.ownerDocument.querySelector(k)),
                                k || (k = this.body),
                                k.appendChild(o)
                            }
                            e.inline && (this.render(),
                            this.bind(),
                            this.isShown = !0),
                            this.ready = !0,
                            zt(e.ready) && Pt(t, J, e.ready, {
                                once: !0
                            }),
                            !1 !== qt(t, J) ? this.ready && e.inline && this.view(this.index) : this.ready = !1
                        }
                    }
                }], [{
                    key: "noConflict",
                    value: function() {
                        return window.Viewer = ie,
                        t
                    }
                }, {
                    key: "setDefaults",
                    value: function(t) {
                        Dt(r, kt(t) && t)
                    }
                }]),
                t
            }();
            return Dt(oe.prototype, _t, Gt, Qt, te, ee),
            oe
        }()
    }
}]);
