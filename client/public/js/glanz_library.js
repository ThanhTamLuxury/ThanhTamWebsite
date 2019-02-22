/* Modernizr 2.0.6 (Custom Build) | MIT & BSD */ ;
window.Modernizr = function (a, b, c) {
    function D(a, b) {
      var c = a.charAt(0).toUpperCase() + a.substr(1),
        d = (a + " " + o.join(c + " ") + c).split(" ");
      return C(d, b)
    }

    function C(a, b) {
      for (var d in a)
        if (k[a[d]] !== c) return b == "pfx" ? a[d] : !0;
      return !1
    }

    function B(a, b) {
      return !!~("" + a).indexOf(b)
    }

    function A(a, b) {
      return typeof a === b
    }

    function z(a, b) {
      return y(n.join(a + ";") + (b || ""))
    }

    function y(a) {
      k.cssText = a
    }
    var d = "2.0.6",
      e = {},
      f = !0,
      g = b.documentElement,
      h = b.head || b.getElementsByTagName("head")[0],
      i = "modernizr",
      j = b.createElement(i),
      k = j.style,
      l, m = Object.prototype.toString,
      n = " -webkit- -moz- -o- -ms- -khtml- ".split(" "),
      o = "Webkit Moz O ms Khtml".split(" "),
      p = {},
      q = {},
      r = {},
      s = [],
      t = function (a, c, d, e) {
        var f, h, j, k = b.createElement("div");
        if (parseInt(d, 10))
          while (d--) j = b.createElement("div"), j.id = e ? e[d] : i + (d + 1), k.appendChild(j);
        f = ["&shy;", "<style>", a, "</style>"].join(""), k.id = i, k.innerHTML += f, g.appendChild(k), h = c(k, a), k.parentNode.removeChild(k);
        return !!h
      },
      u = function (b) {
        if (a.matchMedia) return matchMedia(b).matches;
        var c;
        t("@media " + b + " { #" + i + " { position: absolute; } }", function (b) {
          c = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle).position == "absolute"
        });
        return c
      },
      v, w = {}.hasOwnProperty,
      x;
    !A(w, c) && !A(w.call, c) ? x = function (a, b) {
      return w.call(a, b)
    } : x = function (a, b) {
      return b in a && A(a.constructor.prototype[b], c)
    }, p.rgba = function () {
      y("background-color:rgba(150,255,150,.5)");
      return B(k.backgroundColor, "rgba")
    }, p.boxshadow = function () {
      return D("boxShadow")
    }, p.csstransitions = function () {
      return D("transitionProperty")
    };
    for (var E in p) x(p, E) && (v = E.toLowerCase(), e[v] = p[E](), s.push((e[v] ? "" : "no-") + v));
    e.addTest = function (a, b) {
      if (typeof a == "object")
        for (var d in a) x(a, d) && e.addTest(d, a[d]);
      else {
        a = a.toLowerCase();
        if (e[a] !== c) return;
        b = typeof b == "boolean" ? b : !!b(), g.className += " " + (b ? "" : "no-") + a, e[a] = b
      }
      return e
    }, y(""), j = l = null, a.attachEvent && function () {
      var a = b.createElement("div");
      a.innerHTML = "<elem></elem>";
      return a.childNodes.length !== 1
    }() && function (a, b) {
      function s(a) {
        var b = -1;
        while (++b < g) a.createElement(f[b])
      }
      a.iepp = a.iepp || {};
      var d = a.iepp,
        e = d.html5elements || "abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        f = e.split("|"),
        g = f.length,
        h = new RegExp("(^|\\s)(" + e + ")", "gi"),
        i = new RegExp("<(/*)(" + e + ")", "gi"),
        j = /^\s*[\{\}]\s*$/,
        k = new RegExp("(^|[^\\n]*?\\s)(" + e + ")([^\\n]*)({[\\n\\w\\W]*?})", "gi"),
        l = b.createDocumentFragment(),
        m = b.documentElement,
        n = m.firstChild,
        o = b.createElement("body"),
        p = b.createElement("style"),
        q = /print|all/,
        r;
      d.getCSS = function (a, b) {
        if (a + "" === c) return "";
        var e = -1,
          f = a.length,
          g, h = [];
        while (++e < f) {
          g = a[e];
          if (g.disabled) continue;
          b = g.media || b, q.test(b) && h.push(d.getCSS(g.imports, b), g.cssText), b = "all"
        }
        return h.join("")
      }, d.parseCSS = function (a) {
        var b = [],
          c;
        while ((c = k.exec(a)) != null) b.push(((j.exec(c[1]) ? "\n" : c[1]) + c[2] + c[3]).replace(h, "$1.iepp_$2") + c[4]);
        return b.join("\n")
      }, d.writeHTML = function () {
        var a = -1;
        r = r || b.body;
        while (++a < g) {
          var c = b.getElementsByTagName(f[a]),
            d = c.length,
            e = -1;
          while (++e < d) c[e].className.indexOf("iepp_") < 0 && (c[e].className += " iepp_" + f[a])
        }
        l.appendChild(r), m.appendChild(o), o.className = r.className, o.id = r.id, o.innerHTML = r.innerHTML.replace(i, "<$1font")
      }, d._beforePrint = function () {
        p.styleSheet.cssText = d.parseCSS(d.getCSS(b.styleSheets, "all")), d.writeHTML()
      }, d.restoreHTML = function () {
        o.innerHTML = "", m.removeChild(o), m.appendChild(r)
      }, d._afterPrint = function () {
        d.restoreHTML(), p.styleSheet.cssText = ""
      }, s(b), s(l);
      d.disablePP || (n.insertBefore(p, n.firstChild), p.media = "print", p.className = "iepp-printshim", a.attachEvent("onbeforeprint", d._beforePrint), a.attachEvent("onafterprint", d._afterPrint))
    }(a, b), e._version = d, e._prefixes = n, e._domPrefixes = o, e.mq = u, e.testProp = function (a) {
      return C([a])
    }, e.testAllProps = D, e.testStyles = t, g.className = g.className.replace(/\bno-js\b/, "") + (f ? " js " + s.join(" ") : "");
    return e
  }(this, this.document),
  function (a, b) {
    function u() {
      r(!0)
    }
    a.respond = {}, respond.update = function () {}, respond.mediaQueriesSupported = b;
    if (!b) {
      var c = a.document,
        d = c.documentElement,
        e = [],
        f = [],
        g = [],
        h = {},
        i = 30,
        j = c.getElementsByTagName("head")[0] || d,
        k = j.getElementsByTagName("link"),
        l = [],
        m = function () {
          var b = k,
            c = b.length,
            d = 0,
            e, f, g, i;
          for (; d < c; d++) e = b[d], f = e.href, g = e.media, i = e.rel && e.rel.toLowerCase() === "stylesheet", !!f && i && !h[f] && (!/^([a-zA-Z]+?:(\/\/)?(www\.)?)/.test(f) || f.replace(RegExp.$1, "").split("http://glanz.starkethemes.com/")[0] === a.location.host ? l.push({
            href: f,
            media: g
          }) : h[f] = !0);
          n()
        },
        n = function () {
          if (l.length) {
            var a = l.shift();
            s(a.href, function (b) {
              o(b, a.href, a.media), h[a.href] = !0, n()
            })
          }
        },
        o = function (a, b, c) {
          var d = a.match(/@media[^\{]+\{([^\{\}]+\{[^\}\{]+\})+/gi),
            g = d && d.length || 0,
            b = b.substring(0, b.lastIndexOf("http://glanz.starkethemes.com/")),
            h = function (a) {
              return a.replace(/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g, "$1" + b + "$2$3")
            },
            i = !g && c,
            j = 0,
            k, l, m, n, o;
          b.length && (b += "/"), i && (g = 1);
          for (; j < g; j++) {
            k = 0, i ? (l = c, f.push(h(a))) : (l = d[j].match(/@media ([^\{]+)\{([\S\s]+?)$/) && RegExp.$1, f.push(RegExp.$2 && h(RegExp.$2))), n = l.split(","), o = n.length;
            for (; k < o; k++) m = n[k], e.push({
              media: m.match(/(only\s+)?([a-zA-Z]+)(\sand)?/) && RegExp.$2,
              rules: f.length - 1,
              minw: m.match(/\(min\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/) && parseFloat(RegExp.$1),
              maxw: m.match(/\(max\-width:[\s]*([\s]*[0-9]+)px[\s]*\)/) && parseFloat(RegExp.$1)
            })
          }
          r()
        },
        p, q, r = function (a) {
          var b = "clientWidth",
            h = d[b],
            l = c.compatMode === "CSS1Compat" && h || c.body[b] || h,
            m = {},
            n = c.createDocumentFragment(),
            o = k[k.length - 1],
            s = (new Date).getTime();
          if (a && p && s - p < i) clearTimeout(q), q = setTimeout(r, i);
          else {
            p = s;
            for (var t in e) {
              var u = e[t];
              if (!u.minw && !u.maxw || (!u.minw || u.minw && l >= u.minw) && (!u.maxw || u.maxw && l <= u.maxw)) m[u.media] || (m[u.media] = []), m[u.media].push(f[u.rules])
            }
            for (var t in g) g[t] && g[t].parentNode === j && j.removeChild(g[t]);
            for (var t in m) {
              var v = c.createElement("style"),
                w = m[t].join("\n");
              v.type = "text/css", v.media = t, v.styleSheet ? v.styleSheet.cssText = w : v.appendChild(c.createTextNode(w)), n.appendChild(v), g.push(v)
            }
            j.insertBefore(n, o.nextSibling)
          }
        },
        s = function (a, b) {
          var c = t();
          if (!!c) {
            c.open("GET", a, !0), c.onreadystatechange = function () {
              c.readyState == 4 && (c.status == 200 || c.status == 304) && b(c.responseText)
            };
            if (c.readyState == 4) return;
            c.send()
          }
        },
        t = function () {
          var a = !1,
            b = [function () {
              return new ActiveXObject("Microsoft.XMLHTTP")
            }, function () {
              return new XMLHttpRequest
            }],
            c = b.length;
          while (c--) {
            try {
              a = b[c]()
            } catch (d) {
              continue
            }
            break
          }
          return function () {
            return a
          }
        }();
      m(), respond.update = m, a.addEventListener ? a.addEventListener("resize", u, !1) : a.attachEvent && a.attachEvent("onresize", u)
    }
  }(this, Modernizr.mq("only all")),
  function (a, b, c) {
    function k(a) {
      return !a || a == "loaded" || a == "complete"
    }

    function j() {
      var a = 1,
        b = -1;
      while (p.length - ++b)
        if (p[b].s && !(a = p[b].r)) break;
      a && g()
    }

    function i(a) {
      var c = b.createElement("script"),
        d;
      c.src = a.s, c.onreadystatechange = c.onload = function () {
        !d && k(c.readyState) && (d = 1, j(), c.onload = c.onreadystatechange = null)
      }, m(function () {
        d || (d = 1, j())
      }, H.errorTimeout), a.e ? c.onload() : n.parentNode.insertBefore(c, n)
    }

    function h(a) {
      var c = b.createElement("link"),
        d;
      c.href = a.s, c.rel = "stylesheet", c.type = "text/css";
      if (!a.e && (w || r)) {
        var e = function (a) {
          m(function () {
            if (!d) try {
              a.sheet.cssRules.length ? (d = 1, j()) : e(a)
            } catch (b) {
              b.code == 1e3 || b.message == "security" || b.message == "denied" ? (d = 1, m(function () {
                j()
              }, 0)) : e(a)
            }
          }, 0)
        };
        e(c)
      } else c.onload = function () {
        d || (d = 1, m(function () {
          j()
        }, 0))
      }, a.e && c.onload();
      m(function () {
        d || (d = 1, j())
      }, H.errorTimeout), !a.e && n.parentNode.insertBefore(c, n)
    }

    function g() {
      var a = p.shift();
      q = 1, a ? a.t ? m(function () {
        a.t == "c" ? h(a) : i(a)
      }, 0) : (a(), j()) : q = 0
    }

    function f(a, c, d, e, f, h) {
      function i() {
        !o && k(l.readyState) && (r.r = o = 1, !q && j(), l.onload = l.onreadystatechange = null, m(function () {
          u.removeChild(l)
        }, 0))
      }
      var l = b.createElement(a),
        o = 0,
        r = {
          t: d,
          s: c,
          e: h
        };
      l.src = l.data = c, !s && (l.style.display = "none"), l.width = l.height = "0", a != "object" && (l.type = d), l.onload = l.onreadystatechange = i, a == "img" ? l.onerror = i : a == "script" && (l.onerror = function () {
        r.e = r.r = 1, g()
      }), p.splice(e, 0, r), u.insertBefore(l, s ? null : n), m(function () {
        o || (u.removeChild(l), r.r = r.e = o = 1, j())
      }, H.errorTimeout)
    }

    function e(a, b, c) {
      var d = b == "c" ? z : y;
      q = 0, b = b || "j", C(a) ? f(d, a, b, this.i++, l, c) : (p.splice(this.i++, 0, a), p.length == 1 && g());
      return this
    }

    function d() {
      var a = H;
      a.loader = {
        load: e,
        i: 0
      };
      return a
    }
    var l = b.documentElement,
      m = a.setTimeout,
      n = b.getElementsByTagName("script")[0],
      o = {}.toString,
      p = [],
      q = 0,
      r = "MozAppearance" in l.style,
      s = r && !!b.createRange().compareNode,
      t = r && !s,
      u = s ? l : n.parentNode,
      v = a.opera && o.call(a.opera) == "[object Opera]",
      w = "webkitAppearance" in l.style,
      x = w && "async" in b.createElement("script"),
      y = r ? "object" : v || x ? "img" : "script",
      z = w ? "img" : y,
      A = Array.isArray || function (a) {
        return o.call(a) == "[object Array]"
      },
      B = function (a) {
        return Object(a) === a
      },
      C = function (a) {
        return typeof a == "string"
      },
      D = function (a) {
        return o.call(a) == "[object Function]"
      },
      E = [],
      F = {},
      G, H;
    H = function (a) {
      function f(a) {
        var b = a.split("!"),
          c = E.length,
          d = b.pop(),
          e = b.length,
          f = {
            url: d,
            origUrl: d,
            prefixes: b
          },
          g, h;
        for (h = 0; h < e; h++) g = F[b[h]], g && (f = g(f));
        for (h = 0; h < c; h++) f = E[h](f);
        return f
      }

      function e(a, b, e, g, h) {
        var i = f(a),
          j = i.autoCallback;
        if (!i.bypass) {
          b && (b = D(b) ? b : b[a] || b[g] || b[a.split("/").pop().split("?")[0]]);
          if (i.instead) return i.instead(a, b, e, g, h);
          e.load(i.url, i.forceCSS || !i.forceJS && /css$/.test(i.url) ? "c" : c, i.noexec), (D(b) || D(j)) && e.load(function () {
            d(), b && b(i.origUrl, h, g), j && j(i.origUrl, h, g)
          })
        }
      }

      function b(a, b) {
        function c(a) {
          if (C(a)) e(a, h, b, 0, d);
          else if (B(a))
            for (i in a) a.hasOwnProperty(i) && e(a[i], h, b, i, d)
        }
        var d = !!a.test,
          f = d ? a.yep : a.nope,
          g = a.load || a.both,
          h = a.callback,
          i;
        c(f), c(g), a.complete && b.load(a.complete)
      }
      var g, h, i = this.yepnope.loader;
      if (C(a)) e(a, 0, i, 0);
      else if (A(a))
        for (g = 0; g < a.length; g++) h = a[g], C(h) ? e(h, 0, i, 0) : A(h) ? H(h) : B(h) && b(h, i);
      else B(a) && b(a, i)
    }, H.addPrefix = function (a, b) {
      F[a] = b
    }, H.addFilter = function (a) {
      E.push(a)
    }, H.errorTimeout = 1e4, b.readyState == null && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", G = function () {
      b.removeEventListener("DOMContentLoaded", G, 0), b.readyState = "complete"
    }, 0)), a.yepnope = d()
  }(this, this.document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
  };



//One Page Nav
! function (t, i, n, s) {
  var e = function (s, e) {
    this.elem = s, this.$elem = t(s), this.options = e, this.metadata = this.$elem.data("plugin-options"), this.$win = t(i), this.sections = {}, this.didScroll = !1, this.$doc = t(n), this.docHeight = this.$doc.height()
  };
  e.prototype = {
    defaults: {
      navItems: "a",
      currentClass: "current",
      changeHash: !1,
      easing: "swing",
      filter: "",
      scrollSpeed: 750,
      scrollThreshold: .5,
      begin: !1,
      end: !1,
      scrollChange: !1
    },
    init: function () {
      return this.config = t.extend({}, this.defaults, this.options, this.metadata), this.$nav = this.$elem.find(this.config.navItems), "" !== this.config.filter && (this.$nav = this.$nav.filter(this.config.filter)), this.$nav.on("click.onePageNav", t.proxy(this.handleClick, this)), this.getPositions(), this.bindInterval(), this.$win.on("resize.onePageNav", t.proxy(this.getPositions, this)), this
    },
    adjustNav: function (t, i) {
      t.$elem.find("." + t.config.currentClass).removeClass(t.config.currentClass), i.addClass(t.config.currentClass)
    },
    bindInterval: function () {
      var t, i = this;
      i.$win.on("scroll.onePageNav", function () {
        i.didScroll = !0
      }), i.t = setInterval(function () {
        t = i.$doc.height(), i.didScroll && (i.didScroll = !1, i.scrollChange()), t !== i.docHeight && (i.docHeight = t, i.getPositions())
      }, 250)
    },
    getHash: function (t) {
      return t.attr("href").split("#")[1]
    },
    getPositions: function () {
      var i, n, s, e = this;
      e.$nav.each(function () {
        i = e.getHash(t(this)), s = t("#" + i), s.length && (n = s.offset().top, e.sections[i] = Math.round(n))
      })
    },
    getSection: function (t) {
      var i = null,
        n = Math.round(this.$win.height() * this.config.scrollThreshold);
      for (var s in this.sections) this.sections[s] - n < t && (i = s);
      return i
    },
    handleClick: function (n) {
      var s = this,
        e = t(n.currentTarget),
        o = e.parent(),
        a = "#" + s.getHash(e);
      o.hasClass(s.config.currentClass) || (s.config.begin && s.config.begin(), s.adjustNav(s, o), s.unbindInterval(), s.scrollTo(a, function () {
        s.config.changeHash && (i.location.hash = a), s.bindInterval(), s.config.end && s.config.end()
      })), n.preventDefault()
    },
    scrollChange: function () {
      var t, i = this.$win.scrollTop(),
        n = this.getSection(i);
      null !== n && (t = this.$elem.find('a[href$="#' + n + '"]').parent(), t.hasClass(this.config.currentClass) || (this.adjustNav(this, t), this.config.scrollChange && this.config.scrollChange(t)))
    },
    scrollTo: function (i, n) {
      var s = t(i).offset().top;
      t("html, body").animate({
        scrollTop: s - this.config.scrollOffset
      }, this.config.scrollSpeed, this.config.easing, n)
    },
    unbindInterval: function () {
      clearInterval(this.t), this.$win.unbind("scroll.onePageNav")
    }
  }, e.defaults = e.prototype.defaults, t.fn.onePageNav = function (t) {
    return this.each(function () {
      new e(this, t).init()
    })
  }
}(jQuery, window, document);


//WL Carousel JS
"function" != typeof Object.create && (Object.create = function (t) {
    function e() {}
    return e.prototype = t, new e
  }),
  function (t, e, o) {
    var i = {
      init: function (e, o) {
        var i = this;
        i.$elem = t(o), i.options = t.extend({}, t.fn.owlCarousel.options, i.$elem.data(), e), i.userOptions = e, i.loadContent()
      },
      loadContent: function () {
        function e(t) {
          var e, o = "";
          if ("function" == typeof i.options.jsonSuccess) i.options.jsonSuccess.apply(this, [t]);
          else {
            for (e in t.owl) t.owl.hasOwnProperty(e) && (o += t.owl[e].item);
            i.$elem.html(o)
          }
          i.logIn()
        }
        var o, i = this;
        "function" == typeof i.options.beforeInit && i.options.beforeInit.apply(this, [i.$elem]), "string" == typeof i.options.jsonPath ? (o = i.options.jsonPath, t.getJSON(o, e)) : i.logIn()
      },
      logIn: function () {
        var t = this;
        t.$elem.data({
          "owl-originalStyles": t.$elem.attr("style"),
          "owl-originalClasses": t.$elem.attr("class")
        }), t.$elem.css({
          opacity: 0
        }), t.orignalItems = t.options.items, t.checkBrowser(), t.wrapperWidth = 0, t.checkVisible = null, t.setVars()
      },
      setVars: function () {
        var t = this;
        return 0 === t.$elem.children().length ? !1 : (t.baseClass(), t.eventTypes(), t.$userItems = t.$elem.children(), t.itemsAmount = t.$userItems.length, t.wrapItems(), t.$owlItems = t.$elem.find(".owl-item"), t.$owlWrapper = t.$elem.find(".owl-wrapper"), t.playDirection = "next", t.prevItem = 0, t.prevArr = [0], t.currentItem = 0, t.customEvents(), void t.onStartup())
      },
      onStartup: function () {
        var t = this;
        t.updateItems(), t.calculateAll(), t.buildControls(), t.updateControls(), t.response(), t.moveEvents(), t.stopOnHover(), t.owlStatus(), t.options.transitionStyle !== !1 && t.transitionTypes(t.options.transitionStyle), t.options.autoPlay === !0 && (t.options.autoPlay = 5e3), t.play(), t.$elem.find(".owl-wrapper").css("display", "block"), t.$elem.is(":visible") ? t.$elem.css("opacity", 1) : t.watchVisibility(), t.onstartup = !1, t.eachMoveUpdate(), "function" == typeof t.options.afterInit && t.options.afterInit.apply(this, [t.$elem])
      },
      eachMoveUpdate: function () {
        var t = this;
        t.options.lazyLoad === !0 && t.lazyLoad(), t.options.autoHeight === !0 && t.autoHeight(), t.onVisibleItems(), "function" == typeof t.options.afterAction && t.options.afterAction.apply(this, [t.$elem])
      },
      updateVars: function () {
        var t = this;
        "function" == typeof t.options.beforeUpdate && t.options.beforeUpdate.apply(this, [t.$elem]), t.watchVisibility(), t.updateItems(), t.calculateAll(), t.updatePosition(), t.updateControls(), t.eachMoveUpdate(), "function" == typeof t.options.afterUpdate && t.options.afterUpdate.apply(this, [t.$elem])
      },
      reload: function () {
        var t = this;
        e.setTimeout(function () {
          t.updateVars()
        }, 0)
      },
      watchVisibility: function () {
        var t = this;
        return t.$elem.is(":visible") !== !1 ? !1 : (t.$elem.css({
          opacity: 0
        }), e.clearInterval(t.autoPlayInterval), e.clearInterval(t.checkVisible), void(t.checkVisible = e.setInterval(function () {
          t.$elem.is(":visible") && (t.reload(), t.$elem.animate({
            opacity: 1
          }, 200), e.clearInterval(t.checkVisible))
        }, 500)))
      },
      wrapItems: function () {
        var t = this;
        t.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), t.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), t.wrapperOuter = t.$elem.find(".owl-wrapper-outer"), t.$elem.css("display", "block")
      },
      baseClass: function () {
        var t = this,
          e = t.$elem.hasClass(t.options.baseClass),
          o = t.$elem.hasClass(t.options.theme);
        e || t.$elem.addClass(t.options.baseClass), o || t.$elem.addClass(t.options.theme)
      },
      updateItems: function () {
        var e, o, i = this;
        if (i.options.responsive === !1) return !1;
        if (i.options.singleItem === !0) return i.options.items = i.orignalItems = 1, i.options.itemsCustom = !1, i.options.itemsDesktop = !1, i.options.itemsDesktopSmall = !1, i.options.itemsTablet = !1, i.options.itemsTabletSmall = !1, i.options.itemsMobile = !1, !1;
        if (e = t(i.options.responsiveBaseWidth).width(), e > (i.options.itemsDesktop[0] || i.orignalItems) && (i.options.items = i.orignalItems), i.options.itemsCustom !== !1)
          for (i.options.itemsCustom.sort(function (t, e) {
              return t[0] - e[0]
            }), o = 0; o < i.options.itemsCustom.length; o += 1) i.options.itemsCustom[o][0] <= e && (i.options.items = i.options.itemsCustom[o][1]);
        else e <= i.options.itemsDesktop[0] && i.options.itemsDesktop !== !1 && (i.options.items = i.options.itemsDesktop[1]), e <= i.options.itemsDesktopSmall[0] && i.options.itemsDesktopSmall !== !1 && (i.options.items = i.options.itemsDesktopSmall[1]), e <= i.options.itemsTablet[0] && i.options.itemsTablet !== !1 && (i.options.items = i.options.itemsTablet[1]), e <= i.options.itemsTabletSmall[0] && i.options.itemsTabletSmall !== !1 && (i.options.items = i.options.itemsTabletSmall[1]), e <= i.options.itemsMobile[0] && i.options.itemsMobile !== !1 && (i.options.items = i.options.itemsMobile[1]);
        i.options.items > i.itemsAmount && i.options.itemsScaleUp === !0 && (i.options.items = i.itemsAmount)
      },
      response: function () {
        var o, i, n = this;
        return n.options.responsive !== !0 ? !1 : (i = t(e).width(), n.resizer = function () {
          t(e).width() !== i && (n.options.autoPlay !== !1 && e.clearInterval(n.autoPlayInterval), e.clearTimeout(o), o = e.setTimeout(function () {
            i = t(e).width(), n.updateVars()
          }, n.options.responsiveRefreshRate))
        }, void t(e).resize(n.resizer))
      },
      updatePosition: function () {
        var t = this;
        t.jumpTo(t.currentItem), t.options.autoPlay !== !1 && t.checkAp()
      },
      appendItemsSizes: function () {
        var e = this,
          o = 0,
          i = e.itemsAmount - e.options.items;
        e.$owlItems.each(function (n) {
          var s = t(this);
          s.css({
            width: e.itemWidth
          }).data("owl-item", Number(n)), (n % e.options.items === 0 || n === i) && (n > i || (o += 1)), s.data("owl-roundPages", o)
        })
      },
      appendWrapperSizes: function () {
        var t = this,
          e = t.$owlItems.length * t.itemWidth;
        t.$owlWrapper.css({
          width: 2 * e,
          left: 0
        }), t.appendItemsSizes()
      },
      calculateAll: function () {
        var t = this;
        t.calculateWidth(), t.appendWrapperSizes(), t.loops(), t.max()
      },
      calculateWidth: function () {
        var t = this;
        t.itemWidth = Math.round(t.$elem.width() / t.options.items)
      },
      max: function () {
        var t = this,
          e = -1 * (t.itemsAmount * t.itemWidth - t.options.items * t.itemWidth);
        return t.options.items > t.itemsAmount ? (t.maximumItem = 0, e = 0, t.maximumPixels = 0) : (t.maximumItem = t.itemsAmount - t.options.items, t.maximumPixels = e), e
      },
      min: function () {
        return 0
      },
      loops: function () {
        var e, o, i, n = this,
          s = 0,
          a = 0;
        for (n.positionsInArray = [0], n.pagesInArray = [], e = 0; e < n.itemsAmount; e += 1) a += n.itemWidth, n.positionsInArray.push(-a), n.options.scrollPerPage === !0 && (o = t(n.$owlItems[e]), i = o.data("owl-roundPages"), i !== s && (n.pagesInArray[s] = n.positionsInArray[e], s = i))
      },
      buildControls: function () {
        var e = this;
        (e.options.navigation === !0 || e.options.pagination === !0) && (e.owlControls = t('<div class="owl-controls"/>').toggleClass("clickable", !e.browser.isTouch).appendTo(e.$elem)), e.options.pagination === !0 && e.buildPagination(), e.options.navigation === !0 && e.buildButtons()
      },
      buildButtons: function () {
        var e = this,
          o = t('<div class="owl-buttons"/>');
        e.owlControls.append(o), e.buttonPrev = t("<div/>", {
          "class": "owl-prev",
          html: e.options.navigationText[0] || ""
        }), e.buttonNext = t("<div/>", {
          "class": "owl-next",
          html: e.options.navigationText[1] || ""
        }), o.append(e.buttonPrev).append(e.buttonNext), o.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function (t) {
          t.preventDefault()
        }), o.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function (o) {
          o.preventDefault(), t(this).hasClass("owl-next") ? e.next() : e.prev()
        })
      },
      buildPagination: function () {
        var e = this;
        e.paginationWrapper = t('<div class="owl-pagination"/>'), e.owlControls.append(e.paginationWrapper), e.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (o) {
          o.preventDefault(), Number(t(this).data("owl-page")) !== e.currentItem && e.goTo(Number(t(this).data("owl-page")), !0)
        })
      },
      updatePagination: function () {
        var e, o, i, n, s, a, r = this;
        if (r.options.pagination === !1) return !1;
        for (r.paginationWrapper.html(""), e = 0, o = r.itemsAmount - r.itemsAmount % r.options.items, n = 0; n < r.itemsAmount; n += 1) n % r.options.items === 0 && (e += 1, o === n && (i = r.itemsAmount - r.options.items), s = t("<div/>", {
          "class": "owl-page"
        }), a = t("<span></span>", {
          text: r.options.paginationNumbers === !0 ? e : "",
          "class": r.options.paginationNumbers === !0 ? "owl-numbers" : ""
        }), s.append(a), s.data("owl-page", o === n ? i : n), s.data("owl-roundPages", e), r.paginationWrapper.append(s));
        r.checkPagination()
      },
      checkPagination: function () {
        var e = this;
        return e.options.pagination === !1 ? !1 : void e.paginationWrapper.find(".owl-page").each(function () {
          t(this).data("owl-roundPages") === t(e.$owlItems[e.currentItem]).data("owl-roundPages") && (e.paginationWrapper.find(".owl-page").removeClass("active"), t(this).addClass("active"))
        })
      },
      checkNavigation: function () {
        var t = this;
        return t.options.navigation === !1 ? !1 : void(t.options.rewindNav === !1 && (0 === t.currentItem && 0 === t.maximumItem ? (t.buttonPrev.addClass("disabled"), t.buttonNext.addClass("disabled")) : 0 === t.currentItem && 0 !== t.maximumItem ? (t.buttonPrev.addClass("disabled"), t.buttonNext.removeClass("disabled")) : t.currentItem === t.maximumItem ? (t.buttonPrev.removeClass("disabled"), t.buttonNext.addClass("disabled")) : 0 !== t.currentItem && t.currentItem !== t.maximumItem && (t.buttonPrev.removeClass("disabled"), t.buttonNext.removeClass("disabled"))))
      },
      updateControls: function () {
        var t = this;
        t.updatePagination(), t.checkNavigation(), t.owlControls && (t.options.items >= t.itemsAmount ? t.owlControls.hide() : t.owlControls.show())
      },
      destroyControls: function () {
        var t = this;
        t.owlControls && t.owlControls.remove()
      },
      next: function (t) {
        var e = this;
        if (e.isTransition) return !1;
        if (e.currentItem += e.options.scrollPerPage === !0 ? e.options.items : 1, e.currentItem > e.maximumItem + (e.options.scrollPerPage === !0 ? e.options.items - 1 : 0)) {
          if (e.options.rewindNav !== !0) return e.currentItem = e.maximumItem, !1;
          e.currentItem = 0, t = "rewind"
        }
        e.goTo(e.currentItem, t)
      },
      prev: function (t) {
        var e = this;
        if (e.isTransition) return !1;
        if (e.options.scrollPerPage === !0 && e.currentItem > 0 && e.currentItem < e.options.items ? e.currentItem = 0 : e.currentItem -= e.options.scrollPerPage === !0 ? e.options.items : 1, e.currentItem < 0) {
          if (e.options.rewindNav !== !0) return e.currentItem = 0, !1;
          e.currentItem = e.maximumItem, t = "rewind"
        }
        e.goTo(e.currentItem, t)
      },
      goTo: function (t, o, i) {
        var n, s = this;
        return s.isTransition ? !1 : ("function" == typeof s.options.beforeMove && s.options.beforeMove.apply(this, [s.$elem]), t >= s.maximumItem ? t = s.maximumItem : 0 >= t && (t = 0), s.currentItem = s.owl.currentItem = t, s.options.transitionStyle !== !1 && "drag" !== i && 1 === s.options.items && s.browser.support3d === !0 ? (s.swapSpeed(0), s.browser.support3d === !0 ? s.transition3d(s.positionsInArray[t]) : s.css2slide(s.positionsInArray[t], 1), s.afterGo(), s.singleItemTransition(), !1) : (n = s.positionsInArray[t], s.browser.support3d === !0 ? (s.isCss3Finish = !1, o === !0 ? (s.swapSpeed("paginationSpeed"), e.setTimeout(function () {
          s.isCss3Finish = !0
        }, s.options.paginationSpeed)) : "rewind" === o ? (s.swapSpeed(s.options.rewindSpeed), e.setTimeout(function () {
          s.isCss3Finish = !0
        }, s.options.rewindSpeed)) : (s.swapSpeed("slideSpeed"), e.setTimeout(function () {
          s.isCss3Finish = !0
        }, s.options.slideSpeed)), s.transition3d(n)) : o === !0 ? s.css2slide(n, s.options.paginationSpeed) : "rewind" === o ? s.css2slide(n, s.options.rewindSpeed) : s.css2slide(n, s.options.slideSpeed), void s.afterGo()))
      },
      jumpTo: function (t) {
        var e = this;
        "function" == typeof e.options.beforeMove && e.options.beforeMove.apply(this, [e.$elem]), t >= e.maximumItem || -1 === t ? t = e.maximumItem : 0 >= t && (t = 0), e.swapSpeed(0), e.browser.support3d === !0 ? e.transition3d(e.positionsInArray[t]) : e.css2slide(e.positionsInArray[t], 1), e.currentItem = e.owl.currentItem = t, e.afterGo()
      },
      afterGo: function () {
        var t = this;
        t.prevArr.push(t.currentItem), t.prevItem = t.owl.prevItem = t.prevArr[t.prevArr.length - 2], t.prevArr.shift(0), t.prevItem !== t.currentItem && (t.checkPagination(), t.checkNavigation(), t.eachMoveUpdate(), t.options.autoPlay !== !1 && t.checkAp()), "function" == typeof t.options.afterMove && t.prevItem !== t.currentItem && t.options.afterMove.apply(this, [t.$elem])
      },
      stop: function () {
        var t = this;
        t.apStatus = "stop", e.clearInterval(t.autoPlayInterval)
      },
      checkAp: function () {
        var t = this;
        "stop" !== t.apStatus && t.play()
      },
      play: function () {
        var t = this;
        return t.apStatus = "play", t.options.autoPlay === !1 ? !1 : (e.clearInterval(t.autoPlayInterval), void(t.autoPlayInterval = e.setInterval(function () {
          t.next(!0)
        }, t.options.autoPlay)))
      },
      swapSpeed: function (t) {
        var e = this;
        "slideSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.slideSpeed)) : "paginationSpeed" === t ? e.$owlWrapper.css(e.addCssSpeed(e.options.paginationSpeed)) : "string" != typeof t && e.$owlWrapper.css(e.addCssSpeed(t))
      },
      addCssSpeed: function (t) {
        return {
          "-webkit-transition": "all " + t + "ms ease",
          "-moz-transition": "all " + t + "ms ease",
          "-o-transition": "all " + t + "ms ease",
          transition: "all " + t + "ms ease"
        }
      },
      removeTransition: function () {
        return {
          "-webkit-transition": "",
          "-moz-transition": "",
          "-o-transition": "",
          transition: ""
        }
      },
      doTranslate: function (t) {
        return {
          "-webkit-transform": "translate3d(" + t + "px, 0px, 0px)",
          "-moz-transform": "translate3d(" + t + "px, 0px, 0px)",
          "-o-transform": "translate3d(" + t + "px, 0px, 0px)",
          "-ms-transform": "translate3d(" + t + "px, 0px, 0px)",
          transform: "translate3d(" + t + "px, 0px,0px)"
        }
      },
      transition3d: function (t) {
        var e = this;
        e.$owlWrapper.css(e.doTranslate(t))
      },
      css2move: function (t) {
        var e = this;
        e.$owlWrapper.css({
          left: t
        })
      },
      css2slide: function (t, e) {
        var o = this;
        o.isCssFinish = !1, o.$owlWrapper.stop(!0, !0).animate({
          left: t
        }, {
          duration: e || o.options.slideSpeed,
          complete: function () {
            o.isCssFinish = !0
          }
        })
      },
      checkBrowser: function () {
        var t, i, n, s, a = this,
          r = "translate3d(0px, 0px, 0px)",
          l = o.createElement("div");
        l.style.cssText = "  -moz-transform:" + r + "; -ms-transform:" + r + "; -o-transform:" + r + "; -webkit-transform:" + r + "; transform:" + r, t = /translate3d\(0px, 0px, 0px\)/g, i = l.style.cssText.match(t), n = null !== i && i.length >= 1, s = "ontouchstart" in e || e.navigator.msMaxTouchPoints, a.browser = {
          support3d: n,
          isTouch: s
        }
      },
      moveEvents: function () {
        var t = this;
        (t.options.mouseDrag !== !1 || t.options.touchDrag !== !1) && (t.gestures(), t.disabledEvents())
      },
      eventTypes: function () {
        var t = this,
          e = ["s", "e", "x"];
        t.ev_types = {}, t.options.mouseDrag === !0 && t.options.touchDrag === !0 ? e = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : t.options.mouseDrag === !1 && t.options.touchDrag === !0 ? e = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : t.options.mouseDrag === !0 && t.options.touchDrag === !1 && (e = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), t.ev_types.start = e[0], t.ev_types.move = e[1], t.ev_types.end = e[2]
      },
      disabledEvents: function () {
        var e = this;
        e.$elem.on("dragstart.owl", function (t) {
          t.preventDefault()
        }), e.$elem.on("mousedown.disableTextSelect", function (e) {
          return t(e.target).is("input, textarea, select, option")
        })
      },
      gestures: function () {
        function i(t) {
          if (void 0 !== t.touches) return {
            x: t.touches[0].pageX,
            y: t.touches[0].pageY
          };
          if (void 0 === t.touches) {
            if (void 0 !== t.pageX) return {
              x: t.pageX,
              y: t.pageY
            };
            if (void 0 === t.pageX) return {
              x: t.clientX,
              y: t.clientY
            }
          }
        }

        function n(e) {
          "on" === e ? (t(o).on(l.ev_types.move, a), t(o).on(l.ev_types.end, r)) : "off" === e && (t(o).off(l.ev_types.move), t(o).off(l.ev_types.end))
        }

        function s(o) {
          var s, a = o.originalEvent || o || e.event;
          if (3 === a.which) return !1;
          if (!(l.itemsAmount <= l.options.items)) {
            if (l.isCssFinish === !1 && !l.options.dragBeforeAnimFinish) return !1;
            if (l.isCss3Finish === !1 && !l.options.dragBeforeAnimFinish) return !1;
            l.options.autoPlay !== !1 && e.clearInterval(l.autoPlayInterval), l.browser.isTouch === !0 || l.$owlWrapper.hasClass("grabbing") || l.$owlWrapper.addClass("grabbing"), l.newPosX = 0, l.newRelativeX = 0, t(this).css(l.removeTransition()), s = t(this).position(), p.relativePos = s.left, p.offsetX = i(a).x - s.left, p.offsetY = i(a).y - s.top, n("on"), p.sliding = !1, p.targetElement = a.target || a.srcElement
          }
        }

        function a(n) {
          var s, a, r = n.originalEvent || n || e.event;
          l.newPosX = i(r).x - p.offsetX, l.newPosY = i(r).y - p.offsetY, l.newRelativeX = l.newPosX - p.relativePos, "function" == typeof l.options.startDragging && p.dragging !== !0 && 0 !== l.newRelativeX && (p.dragging = !0, l.options.startDragging.apply(l, [l.$elem])), (l.newRelativeX > 8 || l.newRelativeX < -8) && l.browser.isTouch === !0 && (void 0 !== r.preventDefault ? r.preventDefault() : r.returnValue = !1, p.sliding = !0), (l.newPosY > 10 || l.newPosY < -10) && p.sliding === !1 && t(o).off("touchmove.owl"), s = function () {
            return l.newRelativeX / 5
          }, a = function () {
            return l.maximumPixels + l.newRelativeX / 5
          }, l.newPosX = Math.max(Math.min(l.newPosX, s()), a()), l.browser.support3d === !0 ? l.transition3d(l.newPosX) : l.css2move(l.newPosX)
        }

        function r(o) {
          var i, s, a, r = o.originalEvent || o || e.event;
          r.target = r.target || r.srcElement, p.dragging = !1, l.browser.isTouch !== !0 && l.$owlWrapper.removeClass("grabbing"), l.dragDirection = l.owl.dragDirection = l.newRelativeX < 0 ? "left" : "right", 0 !== l.newRelativeX && (i = l.getNewPosition(), l.goTo(i, !1, "drag"), p.targetElement === r.target && l.browser.isTouch !== !0 && (t(r.target).on("click.disable", function (e) {
            e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t(e.target).off("click.disable")
          }), s = t._data(r.target, "events").click, a = s.pop(), s.splice(0, 0, a))), n("off")
        }
        var l = this,
          p = {
            offsetX: 0,
            offsetY: 0,
            baseElWidth: 0,
            relativePos: 0,
            position: null,
            minSwipe: null,
            maxSwipe: null,
            sliding: null,
            dargging: null,
            targetElement: null
          };
        l.isCssFinish = !0, l.$elem.on(l.ev_types.start, ".owl-wrapper", s)
      },
      getNewPosition: function () {
        var t = this,
          e = t.closestItem();
        return e > t.maximumItem ? (t.currentItem = t.maximumItem, e = t.maximumItem) : t.newPosX >= 0 && (e = 0, t.currentItem = 0), e
      },
      closestItem: function () {
        var e = this,
          o = e.options.scrollPerPage === !0 ? e.pagesInArray : e.positionsInArray,
          i = e.newPosX,
          n = null;
        return t.each(o, function (s, a) {
          i - e.itemWidth / 20 > o[s + 1] && i - e.itemWidth / 20 < a && "left" === e.moveDirection() ? (n = a, e.currentItem = e.options.scrollPerPage === !0 ? t.inArray(n, e.positionsInArray) : s) : i + e.itemWidth / 20 < a && i + e.itemWidth / 20 > (o[s + 1] || o[s] - e.itemWidth) && "right" === e.moveDirection() && (e.options.scrollPerPage === !0 ? (n = o[s + 1] || o[o.length - 1], e.currentItem = t.inArray(n, e.positionsInArray)) : (n = o[s + 1], e.currentItem = s + 1))
        }), e.currentItem
      },
      moveDirection: function () {
        var t, e = this;
        return e.newRelativeX < 0 ? (t = "right", e.playDirection = "next") : (t = "left", e.playDirection = "prev"), t
      },
      customEvents: function () {
        var t = this;
        t.$elem.on("owl.next", function () {
          t.next()
        }), t.$elem.on("owl.prev", function () {
          t.prev()
        }), t.$elem.on("owl.play", function (e, o) {
          t.options.autoPlay = o, t.play(), t.hoverStatus = "play"
        }), t.$elem.on("owl.stop", function () {
          t.stop(), t.hoverStatus = "stop"
        }), t.$elem.on("owl.goTo", function (e, o) {
          t.goTo(o)
        }), t.$elem.on("owl.jumpTo", function (e, o) {
          t.jumpTo(o)
        })
      },
      stopOnHover: function () {
        var t = this;
        t.options.stopOnHover === !0 && t.browser.isTouch !== !0 && t.options.autoPlay !== !1 && (t.$elem.on("mouseover", function () {
          t.stop()
        }), t.$elem.on("mouseout", function () {
          "stop" !== t.hoverStatus && t.play()
        }))
      },
      lazyLoad: function () {
        var e, o, i, n, s, a = this;
        if (a.options.lazyLoad === !1) return !1;
        for (e = 0; e < a.itemsAmount; e += 1) o = t(a.$owlItems[e]), "loaded" !== o.data("owl-loaded") && (i = o.data("owl-item"), n = o.find(".lazyOwl"), "string" == typeof n.data("src") ? (void 0 === o.data("owl-loaded") && (n.hide(), o.addClass("loading").data("owl-loaded", "checked")), s = a.options.lazyFollow === !0 ? i >= a.currentItem : !0, s && i < a.currentItem + a.options.items && n.length && n.each(function () {
          a.lazyPreload(o, t(this))
        })) : o.data("owl-loaded", "loaded"))
      },
      lazyPreload: function (t, o) {
        function i() {
          t.data("owl-loaded", "loaded").removeClass("loading"), o.removeAttr("data-src"), "fade" === a.options.lazyEffect ? o.fadeIn(400) : o.show(), "function" == typeof a.options.afterLazyLoad && a.options.afterLazyLoad.apply(this, [a.$elem])
        }

        function n() {
          r += 1, a.completeImg(o.get(0)) || s === !0 ? i() : 100 >= r ? e.setTimeout(n, 100) : i()
        }
        var s, a = this,
          r = 0;
        "DIV" === o.prop("tagName") ? (o.css("background-image", "url(" + o.data("src") + ")"), s = !0) : o[0].src = o.data("src"), n()
      },
      autoHeight: function () {
        function o() {
          var o = t(s.$owlItems[s.currentItem]).height();
          s.wrapperOuter.css("height", o + "px"), s.wrapperOuter.hasClass("autoHeight") || e.setTimeout(function () {
            s.wrapperOuter.addClass("autoHeight")
          }, 0)
        }

        function i() {
          n += 1, s.completeImg(a.get(0)) ? o() : 100 >= n ? e.setTimeout(i, 100) : s.wrapperOuter.css("height", "")
        }
        var n, s = this,
          a = t(s.$owlItems[s.currentItem]).find("img");
        void 0 !== a.get(0) ? (n = 0, i()) : o()
      },
      completeImg: function (t) {
        var e;
        return t.complete ? (e = typeof t.naturalWidth, "undefined" !== e && 0 === t.naturalWidth ? !1 : !0) : !1
      },
      onVisibleItems: function () {
        var e, o = this;
        for (o.options.addClassActive === !0 && o.$owlItems.removeClass("active"), o.visibleItems = [], e = o.currentItem; e < o.currentItem + o.options.items; e += 1) o.visibleItems.push(e), o.options.addClassActive === !0 && t(o.$owlItems[e]).addClass("active");
        o.owl.visibleItems = o.visibleItems
      },
      transitionTypes: function (t) {
        var e = this;
        e.outClass = "owl-" + t + "-out", e.inClass = "owl-" + t + "-in"
      },
      singleItemTransition: function () {
        function t(t) {
          return {
            position: "relative",
            left: t + "px"
          }
        }
        var e = this,
          o = e.outClass,
          i = e.inClass,
          n = e.$owlItems.eq(e.currentItem),
          s = e.$owlItems.eq(e.prevItem),
          a = Math.abs(e.positionsInArray[e.currentItem]) + e.positionsInArray[e.prevItem],
          r = Math.abs(e.positionsInArray[e.currentItem]) + e.itemWidth / 2,
          l = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
        e.isTransition = !0, e.$owlWrapper.addClass("owl-origin").css({
          "-webkit-transform-origin": r + "px",
          "-moz-perspective-origin": r + "px",
          "perspective-origin": r + "px"
        }), s.css(t(a, 10)).addClass(o).on(l, function () {
          e.endPrev = !0, s.off(l), e.clearTransStyle(s, o)
        }), n.addClass(i).on(l, function () {
          e.endCurrent = !0, n.off(l), e.clearTransStyle(n, i)
        })
      },
      clearTransStyle: function (t, e) {
        var o = this;
        t.css({
          position: "",
          left: ""
        }).removeClass(e), o.endPrev && o.endCurrent && (o.$owlWrapper.removeClass("owl-origin"), o.endPrev = !1, o.endCurrent = !1, o.isTransition = !1)
      },
      owlStatus: function () {
        var t = this;
        t.owl = {
          userOptions: t.userOptions,
          baseElement: t.$elem,
          userItems: t.$userItems,
          owlItems: t.$owlItems,
          currentItem: t.currentItem,
          prevItem: t.prevItem,
          visibleItems: t.visibleItems,
          isTouch: t.browser.isTouch,
          browser: t.browser,
          dragDirection: t.dragDirection
        }
      },
      clearEvents: function () {
        var i = this;
        i.$elem.off(".owl owl mousedown.disableTextSelect"), t(o).off(".owl owl"), t(e).off("resize", i.resizer)
      },
      unWrap: function () {
        var t = this;
        0 !== t.$elem.children().length && (t.$owlWrapper.unwrap(), t.$userItems.unwrap().unwrap(), t.owlControls && t.owlControls.remove()), t.clearEvents(), t.$elem.attr({
          style: t.$elem.data("owl-originalStyles") || "",
          "class": t.$elem.data("owl-originalClasses")
        })
      },
      destroy: function () {
        var t = this;
        t.stop(), e.clearInterval(t.checkVisible), t.unWrap(), t.$elem.removeData()
      },
      reinit: function (e) {
        var o = this,
          i = t.extend({}, o.userOptions, e);
        o.unWrap(), o.init(i, o.$elem)
      },
      addItem: function (t, e) {
        var o, i = this;
        return t ? 0 === i.$elem.children().length ? (i.$elem.append(t), i.setVars(), !1) : (i.unWrap(), o = void 0 === e || -1 === e ? -1 : e, o >= i.$userItems.length || -1 === o ? i.$userItems.eq(-1).after(t) : i.$userItems.eq(o).before(t), void i.setVars()) : !1
      },
      removeItem: function (t) {
        var e, o = this;
        return 0 === o.$elem.children().length ? !1 : (e = void 0 === t || -1 === t ? -1 : t, o.unWrap(), o.$userItems.eq(e).remove(), void o.setVars())
      }
    };
    t.fn.owlCarousel = function (e) {
      return this.each(function () {
        if (t(this).data("owl-init") === !0) return !1;
        t(this).data("owl-init", !0);
        var o = Object.create(i);
        o.init(e, this), t.data(this, "owlCarousel", o)
      })
    }, t.fn.owlCarousel.options = {
      items: 5,
      itemsCustom: !1,
      itemsDesktop: [1199, 4],
      itemsDesktopSmall: [979, 3],
      itemsTablet: [768, 2],
      itemsTabletSmall: !1,
      itemsMobile: [479, 1],
      singleItem: !1,
      itemsScaleUp: !1,
      slideSpeed: 200,
      paginationSpeed: 800,
      rewindSpeed: 1e3,
      autoPlay: !1,
      stopOnHover: !1,
      navigation: !1,
      navigationText: ["prev", "next"],
      rewindNav: !0,
      scrollPerPage: !1,
      pagination: !0,
      paginationNumbers: !1,
      responsive: !0,
      responsiveRefreshRate: 200,
      responsiveBaseWidth: e,
      baseClass: "owl-carousel",
      theme: "owl-theme",
      lazyLoad: !1,
      lazyFollow: !0,
      lazyEffect: "fade",
      autoHeight: !1,
      jsonPath: !1,
      jsonSuccess: !1,
      dragBeforeAnimFinish: !0,
      mouseDrag: !0,
      touchDrag: !0,
      addClassActive: !1,
      transitionStyle: !1,
      beforeUpdate: !1,
      afterUpdate: !1,
      beforeInit: !1,
      afterInit: !1,
      beforeMove: !1,
      afterMove: !1,
      afterAction: !1,
      startDragging: !1,
      afterLazyLoad: !1
    }
  }(jQuery, window, document);

/*! Stellar.js v0.6.2 | Copyright 2014, Mark Dalgleish | http://markdalgleish.com/projects/stellar.js | http://markdalgleish.mit-license.org */
! function (a, b, c, d) {
  function e(b, c) {
    this.element = b, this.options = a.extend({}, g, c), this._defaults = g, this._name = f, this.init()
  }
  var f = "stellar",
    g = {
      scrollProperty: "scroll",
      positionProperty: "position",
      horizontalScrolling: !0,
      verticalScrolling: !0,
      horizontalOffset: 0,
      verticalOffset: 0,
      responsive: !1,
      parallaxBackgrounds: !0,
      parallaxElements: !0,
      hideDistantElements: !0,
      hideElement: function (a) {
        a.hide()
      },
      showElement: function (a) {
        a.show()
      }
    },
    h = {
      scroll: {
        getLeft: function (a) {
          return a.scrollLeft()
        },
        setLeft: function (a, b) {
          a.scrollLeft(b)
        },
        getTop: function (a) {
          return a.scrollTop()
        },
        setTop: function (a, b) {
          a.scrollTop(b)
        }
      },
      position: {
        getLeft: function (a) {
          return -1 * parseInt(a.css("left"), 10)
        },
        getTop: function (a) {
          return -1 * parseInt(a.css("top"), 10)
        }
      },
      margin: {
        getLeft: function (a) {
          return -1 * parseInt(a.css("margin-left"), 10)
        },
        getTop: function (a) {
          return -1 * parseInt(a.css("margin-top"), 10)
        }
      },
      transform: {
        getLeft: function (a) {
          var b = getComputedStyle(a[0])[k];
          return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[4], 10) : 0
        },
        getTop: function (a) {
          var b = getComputedStyle(a[0])[k];
          return "none" !== b ? -1 * parseInt(b.match(/(-?[0-9]+)/g)[5], 10) : 0
        }
      }
    },
    i = {
      position: {
        setLeft: function (a, b) {
          a.css("left", b)
        },
        setTop: function (a, b) {
          a.css("top", b)
        }
      },
      transform: {
        setPosition: function (a, b, c, d, e) {
          a[0].style[k] = "translate3d(" + (b - c) + "px, " + (d - e) + "px, 0)"
        }
      }
    },
    j = function () {
      var b, c = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/,
        d = a("script")[0].style,
        e = "";
      for (b in d)
        if (c.test(b)) {
          e = b.match(c)[0];
          break
        } return "WebkitOpacity" in d && (e = "Webkit"), "KhtmlOpacity" in d && (e = "Khtml"),
        function (a) {
          return e + (e.length > 0 ? a.charAt(0).toUpperCase() + a.slice(1) : a)
        }
    }(),
    k = j("transform"),
    l = a("<div />", {
      style: "background:#fff"
    }).css("background-position-x") !== d,
    m = l ? function (a, b, c) {
      a.css({
        "background-position-x": b,
        "background-position-y": c
      })
    } : function (a, b, c) {
      a.css("background-position", b + " " + c)
    },
    n = l ? function (a) {
      return [a.css("background-position-x"), a.css("background-position-y")]
    } : function (a) {
      return a.css("background-position").split(" ")
    },
    o = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || function (a) {
      setTimeout(a, 1e3 / 60)
    };
  e.prototype = {
    init: function () {
      this.options.name = f + "_" + Math.floor(1e9 * Math.random()), this._defineElements(), this._defineGetters(), this._defineSetters(), this._handleWindowLoadAndResize(), this._detectViewport(), this.refresh({
        firstLoad: !0
      }), "scroll" === this.options.scrollProperty ? this._handleScrollEvent() : this._startAnimationLoop()
    },
    _defineElements: function () {
      this.element === c.body && (this.element = b), this.$scrollElement = a(this.element), this.$element = this.element === b ? a("body") : this.$scrollElement, this.$viewportElement = this.options.viewportElement !== d ? a(this.options.viewportElement) : this.$scrollElement[0] === b || "scroll" === this.options.scrollProperty ? this.$scrollElement : this.$scrollElement.parent()
    },
    _defineGetters: function () {
      var a = this,
        b = h[a.options.scrollProperty];
      this._getScrollLeft = function () {
        return b.getLeft(a.$scrollElement)
      }, this._getScrollTop = function () {
        return b.getTop(a.$scrollElement)
      }
    },
    _defineSetters: function () {
      var b = this,
        c = h[b.options.scrollProperty],
        d = i[b.options.positionProperty],
        e = c.setLeft,
        f = c.setTop;
      this._setScrollLeft = "function" == typeof e ? function (a) {
        e(b.$scrollElement, a)
      } : a.noop, this._setScrollTop = "function" == typeof f ? function (a) {
        f(b.$scrollElement, a)
      } : a.noop, this._setPosition = d.setPosition || function (a, c, e, f, g) {
        b.options.horizontalScrolling && d.setLeft(a, c, e), b.options.verticalScrolling && d.setTop(a, f, g)
      }
    },
    _handleWindowLoadAndResize: function () {
      var c = this,
        d = a(b);
      c.options.responsive && d.bind("load." + this.name, function () {
        c.refresh()
      }), d.bind("resize." + this.name, function () {
        c._detectViewport(), c.options.responsive && c.refresh()
      })
    },
    refresh: function (c) {
      var d = this,
        e = d._getScrollLeft(),
        f = d._getScrollTop();
      c && c.firstLoad || this._reset(), this._setScrollLeft(0), this._setScrollTop(0), this._setOffsets(), this._findParticles(), this._findBackgrounds(), c && c.firstLoad && /WebKit/.test(navigator.userAgent) && a(b).load(function () {
        var a = d._getScrollLeft(),
          b = d._getScrollTop();
        d._setScrollLeft(a + 1), d._setScrollTop(b + 1), d._setScrollLeft(a), d._setScrollTop(b)
      }), this._setScrollLeft(e), this._setScrollTop(f)
    },
    _detectViewport: function () {
      var a = this.$viewportElement.offset(),
        b = null !== a && a !== d;
      this.viewportWidth = this.$viewportElement.width(), this.viewportHeight = this.$viewportElement.height(), this.viewportOffsetTop = b ? a.top : 0, this.viewportOffsetLeft = b ? a.left : 0
    },
    _findParticles: function () {
      {
        var b = this;
        this._getScrollLeft(), this._getScrollTop()
      }
      if (this.particles !== d)
        for (var c = this.particles.length - 1; c >= 0; c--) this.particles[c].$element.data("stellar-elementIsActive", d);
      this.particles = [], this.options.parallaxElements && this.$element.find("[data-stellar-ratio]").each(function () {
        var c, e, f, g, h, i, j, k, l, m = a(this),
          n = 0,
          o = 0,
          p = 0,
          q = 0;
        if (m.data("stellar-elementIsActive")) {
          if (m.data("stellar-elementIsActive") !== this) return
        } else m.data("stellar-elementIsActive", this);
        b.options.showElement(m), m.data("stellar-startingLeft") ? (m.css("left", m.data("stellar-startingLeft")), m.css("top", m.data("stellar-startingTop"))) : (m.data("stellar-startingLeft", m.css("left")), m.data("stellar-startingTop", m.css("top"))), f = m.position().left, g = m.position().top, h = "auto" === m.css("margin-left") ? 0 : parseInt(m.css("margin-left"), 10), i = "auto" === m.css("margin-top") ? 0 : parseInt(m.css("margin-top"), 10), k = m.offset().left - h, l = m.offset().top - i, m.parents().each(function () {
          var b = a(this);
          return b.data("stellar-offset-parent") === !0 ? (n = p, o = q, j = b, !1) : (p += b.position().left, void(q += b.position().top))
        }), c = m.data("stellar-horizontal-offset") !== d ? m.data("stellar-horizontal-offset") : j !== d && j.data("stellar-horizontal-offset") !== d ? j.data("stellar-horizontal-offset") : b.horizontalOffset, e = m.data("stellar-vertical-offset") !== d ? m.data("stellar-vertical-offset") : j !== d && j.data("stellar-vertical-offset") !== d ? j.data("stellar-vertical-offset") : b.verticalOffset, b.particles.push({
          $element: m,
          $offsetParent: j,
          isFixed: "fixed" === m.css("position"),
          horizontalOffset: c,
          verticalOffset: e,
          startingPositionLeft: f,
          startingPositionTop: g,
          startingOffsetLeft: k,
          startingOffsetTop: l,
          parentOffsetLeft: n,
          parentOffsetTop: o,
          stellarRatio: m.data("stellar-ratio") !== d ? m.data("stellar-ratio") : 1,
          width: m.outerWidth(!0),
          height: m.outerHeight(!0),
          isHidden: !1
        })
      })
    },
    _findBackgrounds: function () {
      var b, c = this,
        e = this._getScrollLeft(),
        f = this._getScrollTop();
      this.backgrounds = [], this.options.parallaxBackgrounds && (b = this.$element.find("[data-stellar-background-ratio]"), this.$element.data("stellar-background-ratio") && (b = b.add(this.$element)), b.each(function () {
        var b, g, h, i, j, k, l, o = a(this),
          p = n(o),
          q = 0,
          r = 0,
          s = 0,
          t = 0;
        if (o.data("stellar-backgroundIsActive")) {
          if (o.data("stellar-backgroundIsActive") !== this) return
        } else o.data("stellar-backgroundIsActive", this);
        o.data("stellar-backgroundStartingLeft") ? m(o, o.data("stellar-backgroundStartingLeft"), o.data("stellar-backgroundStartingTop")) : (o.data("stellar-backgroundStartingLeft", p[0]), o.data("stellar-backgroundStartingTop", p[1])), h = "auto" === o.css("margin-left") ? 0 : parseInt(o.css("margin-left"), 10), i = "auto" === o.css("margin-top") ? 0 : parseInt(o.css("margin-top"), 10), j = o.offset().left - h - e, k = o.offset().top - i - f, o.parents().each(function () {
          var b = a(this);
          return b.data("stellar-offset-parent") === !0 ? (q = s, r = t, l = b, !1) : (s += b.position().left, void(t += b.position().top))
        }), b = o.data("stellar-horizontal-offset") !== d ? o.data("stellar-horizontal-offset") : l !== d && l.data("stellar-horizontal-offset") !== d ? l.data("stellar-horizontal-offset") : c.horizontalOffset, g = o.data("stellar-vertical-offset") !== d ? o.data("stellar-vertical-offset") : l !== d && l.data("stellar-vertical-offset") !== d ? l.data("stellar-vertical-offset") : c.verticalOffset, c.backgrounds.push({
          $element: o,
          $offsetParent: l,
          isFixed: "fixed" === o.css("background-attachment"),
          horizontalOffset: b,
          verticalOffset: g,
          startingValueLeft: p[0],
          startingValueTop: p[1],
          startingBackgroundPositionLeft: isNaN(parseInt(p[0], 10)) ? 0 : parseInt(p[0], 10),
          startingBackgroundPositionTop: isNaN(parseInt(p[1], 10)) ? 0 : parseInt(p[1], 10),
          startingPositionLeft: o.position().left,
          startingPositionTop: o.position().top,
          startingOffsetLeft: j,
          startingOffsetTop: k,
          parentOffsetLeft: q,
          parentOffsetTop: r,
          stellarRatio: o.data("stellar-background-ratio") === d ? 1 : o.data("stellar-background-ratio")
        })
      }))
    },
    _reset: function () {
      var a, b, c, d, e;
      for (e = this.particles.length - 1; e >= 0; e--) a = this.particles[e], b = a.$element.data("stellar-startingLeft"), c = a.$element.data("stellar-startingTop"), this._setPosition(a.$element, b, b, c, c), this.options.showElement(a.$element), a.$element.data("stellar-startingLeft", null).data("stellar-elementIsActive", null).data("stellar-backgroundIsActive", null);
      for (e = this.backgrounds.length - 1; e >= 0; e--) d = this.backgrounds[e], d.$element.data("stellar-backgroundStartingLeft", null).data("stellar-backgroundStartingTop", null), m(d.$element, d.startingValueLeft, d.startingValueTop)
    },
    destroy: function () {
      this._reset(), this.$scrollElement.unbind("resize." + this.name).unbind("scroll." + this.name), this._animationLoop = a.noop, a(b).unbind("load." + this.name).unbind("resize." + this.name)
    },
    _setOffsets: function () {
      var c = this,
        d = a(b);
      d.unbind("resize.horizontal-" + this.name).unbind("resize.vertical-" + this.name), "function" == typeof this.options.horizontalOffset ? (this.horizontalOffset = this.options.horizontalOffset(), d.bind("resize.horizontal-" + this.name, function () {
        c.horizontalOffset = c.options.horizontalOffset()
      })) : this.horizontalOffset = this.options.horizontalOffset, "function" == typeof this.options.verticalOffset ? (this.verticalOffset = this.options.verticalOffset(), d.bind("resize.vertical-" + this.name, function () {
        c.verticalOffset = c.options.verticalOffset()
      })) : this.verticalOffset = this.options.verticalOffset
    },
    _repositionElements: function () {
      var a, b, c, d, e, f, g, h, i, j, k = this._getScrollLeft(),
        l = this._getScrollTop(),
        n = !0,
        o = !0;
      if (this.currentScrollLeft !== k || this.currentScrollTop !== l || this.currentWidth !== this.viewportWidth || this.currentHeight !== this.viewportHeight) {
        for (this.currentScrollLeft = k, this.currentScrollTop = l, this.currentWidth = this.viewportWidth, this.currentHeight = this.viewportHeight, j = this.particles.length - 1; j >= 0; j--) a = this.particles[j], b = a.isFixed ? 1 : 0, this.options.horizontalScrolling ? (f = (k + a.horizontalOffset + this.viewportOffsetLeft + a.startingPositionLeft - a.startingOffsetLeft + a.parentOffsetLeft) * -(a.stellarRatio + b - 1) + a.startingPositionLeft, h = f - a.startingPositionLeft + a.startingOffsetLeft) : (f = a.startingPositionLeft, h = a.startingOffsetLeft), this.options.verticalScrolling ? (g = (l + a.verticalOffset + this.viewportOffsetTop + a.startingPositionTop - a.startingOffsetTop + a.parentOffsetTop) * -(a.stellarRatio + b - 1) + a.startingPositionTop, i = g - a.startingPositionTop + a.startingOffsetTop) : (g = a.startingPositionTop, i = a.startingOffsetTop), this.options.hideDistantElements && (o = !this.options.horizontalScrolling || h + a.width > (a.isFixed ? 0 : k) && h < (a.isFixed ? 0 : k) + this.viewportWidth + this.viewportOffsetLeft, n = !this.options.verticalScrolling || i + a.height > (a.isFixed ? 0 : l) && i < (a.isFixed ? 0 : l) + this.viewportHeight + this.viewportOffsetTop), o && n ? (a.isHidden && (this.options.showElement(a.$element), a.isHidden = !1), this._setPosition(a.$element, f, a.startingPositionLeft, g, a.startingPositionTop)) : a.isHidden || (this.options.hideElement(a.$element), a.isHidden = !0);
        for (j = this.backgrounds.length - 1; j >= 0; j--) c = this.backgrounds[j], b = c.isFixed ? 0 : 1, d = this.options.horizontalScrolling ? (k + c.horizontalOffset - this.viewportOffsetLeft - c.startingOffsetLeft + c.parentOffsetLeft - c.startingBackgroundPositionLeft) * (b - c.stellarRatio) + "px" : c.startingValueLeft, e = this.options.verticalScrolling ? (l + c.verticalOffset - this.viewportOffsetTop - c.startingOffsetTop + c.parentOffsetTop - c.startingBackgroundPositionTop) * (b - c.stellarRatio) + "px" : c.startingValueTop, m(c.$element, d, e)
      }
    },
    _handleScrollEvent: function () {
      var a = this,
        b = !1,
        c = function () {
          a._repositionElements(), b = !1
        },
        d = function () {
          b || (o(c), b = !0)
        };
      this.$scrollElement.bind("scroll." + this.name, d), d()
    },
    _startAnimationLoop: function () {
      var a = this;
      this._animationLoop = function () {
        o(a._animationLoop), a._repositionElements()
      }, this._animationLoop()
    }
  }, a.fn[f] = function (b) {
    var c = arguments;
    return b === d || "object" == typeof b ? this.each(function () {
      a.data(this, "plugin_" + f) || a.data(this, "plugin_" + f, new e(this, b))
    }) : "string" == typeof b && "_" !== b[0] && "init" !== b ? this.each(function () {
      var d = a.data(this, "plugin_" + f);
      d instanceof e && "function" == typeof d[b] && d[b].apply(d, Array.prototype.slice.call(c, 1)), "destroy" === b && a.data(this, "plugin_" + f, null)
    }) : void 0
  }, a[f] = function () {
    var c = a(b);
    return c.stellar.apply(c, Array.prototype.slice.call(arguments, 0))
  }, a[f].scrollProperty = h, a[f].positionProperty = i, b.Stellar = e
}(jQuery, this, document);

/**
 * StyleFix 1.0.3 & PrefixFree 1.0.7
 * @author Lea Verou
 * MIT license
 */
(function () {
  function t(e, t) {
    return [].slice.call((t || document).querySelectorAll(e))
  }
  if (!window.addEventListener) return;
  var e = window.StyleFix = {
    link: function (t) {
      try {
        if (t.rel !== "stylesheet" || t.hasAttribute("data-noprefix")) return
      } catch (n) {
        return
      }
      var r = t.href || t.getAttribute("data-href"),
        i = r.replace(/[^\/]+$/, ""),
        s = (/^[a-z]{3,10}:/.exec(i) || [""])[0],
        o = (/^[a-z]{3,10}:\/\/[^\/]+/.exec(i) || [""])[0],
        u = /^([^?]*)\??/.exec(r)[1],
        a = t.parentNode,
        f = new XMLHttpRequest,
        l;
      f.onreadystatechange = function () {
        f.readyState === 4 && l()
      };
      l = function () {
        var n = f.responseText;
        if (n && t.parentNode && (!f.status || f.status < 400 || f.status > 600)) {
          n = e.fix(n, !0, t);
          if (i) {
            n = n.replace(/url\(\s*?((?:"|')?)(.+?)\1\s*?\)/gi, function (e, t, n) {
              return /^([a-z]{3,10}:|#)/i.test(n) ? e : /^\/\//.test(n) ? 'url("' + s + n + '")' : /^\//.test(n) ? 'url("' + o + n + '")' : /^\?/.test(n) ? 'url("' + u + n + '")' : 'url("' + i + n + '")'
            });
            var r = i.replace(/([\\\^\$*+[\]?{}.=!:(|)])/g, "\\$1");
            n = n.replace(RegExp("\\b(behavior:\\s*?url\\('?\"?)" + r, "gi"), "$1")
          }
          var l = document.createElement("style");
          l.textContent = n;
          l.media = t.media;
          l.disabled = t.disabled;
          l.setAttribute("data-href", t.getAttribute("href"));
          a.insertBefore(l, t);
          a.removeChild(t);
          l.media = t.media
        }
      };
      try {
        f.open("GET.html", r);
        f.send(null)
      } catch (n) {
        if (typeof XDomainRequest != "undefined") {
          f = new XDomainRequest;
          f.onerror = f.onprogress = function () {};
          f.onload = l;
          f.open("GET.html", r);
          f.send(null)
        }
      }
      t.setAttribute("data-inprogress", "")
    },
    styleElement: function (t) {
      if (t.hasAttribute("data-noprefix")) return;
      var n = t.disabled;
      t.textContent = e.fix(t.textContent, !0, t);
      t.disabled = n
    },
    styleAttribute: function (t) {
      var n = t.getAttribute("style");
      n = e.fix(n, !1, t);
      t.setAttribute("style", n)
    },
    process: function () {
      t('link[rel="stylesheet"]:not([data-inprogress])').forEach(StyleFix.link);
      t("style").forEach(StyleFix.styleElement);
      t("[style]").forEach(StyleFix.styleAttribute)
    },
    register: function (t, n) {
      (e.fixers = e.fixers || []).splice(n === undefined ? e.fixers.length : n, 0, t)
    },
    fix: function (t, n, r) {
      for (var i = 0; i < e.fixers.length; i++) t = e.fixers[i](t, n, r) || t;
      return t
    },
    camelCase: function (e) {
      return e.replace(/-([a-z])/g, function (e, t) {
        return t.toUpperCase()
      }).replace("-", "")
    },
    deCamelCase: function (e) {
      return e.replace(/[A-Z]/g, function (e) {
        return "-" + e.toLowerCase()
      })
    }
  };
  (function () {
    setTimeout(function () {
      t('link[rel="stylesheet"]').forEach(StyleFix.link)
    }, 10);
    document.addEventListener("DOMContentLoaded", StyleFix.process, !1)
  })()
})();
(function (e) {
  function t(e, t, r, i, s) {
    e = n[e];
    if (e.length) {
      var o = RegExp(t + "(" + e.join("|") + ")" + r, "gi");
      s = s.replace(o, i)
    }
    return s
  }
  if (!window.StyleFix || !window.getComputedStyle) return;
  var n = window.PrefixFree = {
    prefixCSS: function (e, r, i) {
      var s = n.prefix;
      n.functions.indexOf("linear-gradient") > -1 && (e = e.replace(/(\s|:|,)(repeating-)?linear-gradient\(\s*(-?\d*\.?\d*)deg/ig, function (e, t, n, r) {
        return t + (n || "") + "linear-gradient(" + (90 - r) + "deg"
      }));
      e = t("functions", "(\\s|:|,)", "\\s*\\(", "$1" + s + "$2(", e);
      e = t("keywords", "(\\s|:)", "(\\s|;|\\}|$)", "$1" + s + "$2$3", e);
      e = t("properties", "(^|\\{|\\s|;)", "\\s*:", "$1" + s + "$2:", e);
      if (n.properties.length) {
        var o = RegExp("\\b(" + n.properties.join("|") + ")(?!:)", "gi");
        e = t("valueProperties", "\\b", ":(.+?);", function (e) {
          return e.replace(o, s + "$1")
        }, e)
      }
      if (r) {
        e = t("selectors", "", "\\b", n.prefixSelector, e);
        e = t("atrules", "@", "\\b", "@" + s + "$1", e)
      }
      e = e.replace(RegExp("-" + s, "g"), "-");
      e = e.replace(/-\*-(?=[a-z]+)/gi, n.prefix);
      return e
    },
    property: function (e) {
      return (n.properties.indexOf(e) >= 0 ? n.prefix : "") + e
    },
    value: function (e, r) {
      e = t("functions", "(^|\\s|,)", "\\s*\\(", "$1" + n.prefix + "$2(", e);
      e = t("keywords", "(^|\\s)", "(\\s|$)", "$1" + n.prefix + "$2$3", e);
      n.valueProperties.indexOf(r) >= 0 && (e = t("properties", "(^|\\s|,)", "($|\\s|,)", "$1" + n.prefix + "$2$3", e));
      return e
    },
    prefixSelector: function (e) {
      return e.replace(/^:{1,2}/, function (e) {
        return e + n.prefix
      })
    },
    prefixProperty: function (e, t) {
      var r = n.prefix + e;
      return t ? StyleFix.camelCase(r) : r
    }
  };
  (function () {
    var e = {},
      t = [],
      r = {},
      i = getComputedStyle(document.documentElement, null),
      s = document.createElement("div").style,
      o = function (n) {
        if (n.charAt(0) === "-") {
          t.push(n);
          var r = n.split("-"),
            i = r[1];
          e[i] = ++e[i] || 1;
          while (r.length > 3) {
            r.pop();
            var s = r.join("-");
            u(s) && t.indexOf(s) === -1 && t.push(s)
          }
        }
      },
      u = function (e) {
        return StyleFix.camelCase(e) in s
      };
    if (i.length > 0)
      for (var a = 0; a < i.length; a++) o(i[a]);
    else
      for (var f in i) o(StyleFix.deCamelCase(f));
    var l = {
      uses: 0
    };
    for (var c in e) {
      var h = e[c];
      l.uses < h && (l = {
        prefix: c,
        uses: h
      })
    }
    n.prefix = "-" + l.prefix + "-";
    n.Prefix = StyleFix.camelCase(n.prefix);
    n.properties = [];
    for (var a = 0; a < t.length; a++) {
      var f = t[a];
      if (f.indexOf(n.prefix) === 0) {
        var p = f.slice(n.prefix.length);
        u(p) || n.properties.push(p)
      }
    }
    n.Prefix == "Ms" && !("transform" in s) && !("MsTransform" in s) && "msTransform" in s && n.properties.push("transform", "transform-origin");
    n.properties.sort()
  })();
  (function () {
    function i(e, t) {
      r[t] = "";
      r[t] = e;
      return !!r[t]
    }
    var e = {
      "linear-gradient": {
        property: "backgroundImage",
        params: "red, teal"
      },
      calc: {
        property: "width",
        params: "1px + 5%"
      },
      element: {
        property: "backgroundImage",
        params: "#foo"
      },
      "cross-fade": {
        property: "backgroundImage",
        params: "url(a.png), url(b.png), 50%"
      }
    };
    e["repeating-linear-gradient"] = e["repeating-radial-gradient"] = e["radial-gradient"] = e["linear-gradient"];
    var t = {
      initial: "color",
      "zoom-in": "cursor",
      "zoom-out": "cursor",
      box: "display",
      flexbox: "display",
      "inline-flexbox": "display",
      flex: "display",
      "inline-flex": "display",
      grid: "display",
      "inline-grid": "display",
      "min-content": "width"
    };
    n.functions = [];
    n.keywords = [];
    var r = document.createElement("div").style;
    for (var s in e) {
      var o = e[s],
        u = o.property,
        a = s + "(" + o.params + ")";
      !i(a, u) && i(n.prefix + a, u) && n.functions.push(s)
    }
    for (var f in t) {
      var u = t[f];
      !i(f, u) && i(n.prefix + f, u) && n.keywords.push(f)
    }
  })();
  (function () {
    function s(e) {
      i.textContent = e + "{}";
      return !!i.sheet.cssRules.length
    }
    var t = {
        ":read-only": null,
        ":read-write": null,
        ":any-link": null,
        "::selection": null
      },
      r = {
        keyframes: "name",
        viewport: null,
        document: 'regexp(".")'
      };
    n.selectors = [];
    n.atrules = [];
    var i = e.appendChild(document.createElement("style"));
    for (var o in t) {
      var u = o + (t[o] ? "(" + t[o] + ")" : "");
      !s(u) && s(n.prefixSelector(u)) && n.selectors.push(o)
    }
    for (var a in r) {
      var u = a + " " + (r[a] || "");
      !s("@" + u) && s("@" + n.prefix + u) && n.atrules.push(a)
    }
    e.removeChild(i)
  })();
  n.valueProperties = ["transition", "transition-property"];
  e.className += " " + n.prefix;
  StyleFix.register(n.prefixCSS)
})(document.documentElement);

/*! Magnific Popup - v1.0.0 - 2015-01-03
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2015 Dmitry Semenov; */
! function (a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (a) {
  var b, c, d, e, f, g, h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c)
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
    },
    z = function (c) {
      return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
    },
    A = function () {
      a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length;)
        if (b.pop() + "Transition" in a) return !0;
      return !1
    };
  t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      b.isIE7 = -1 !== c.indexOf("MSIE 7."), b.isIE8 = -1 !== c.indexOf("MSIE 8."), b.isLowIE = b.isIE7 || b.isIE8, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        b.items = c.items.toArray(), b.index = 0;
        var g, h = c.items;
        for (e = 0; e < h.length; e++)
          if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
            b.index = e;
            break
          }
      } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
      if (b.isOpen) return void b.updateItemHTML();
      b.types = [], f = "", b.ev = c.mainEl && c.mainEl.length ? c.mainEl.eq(0) : d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
        b.close()
      }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
        b._checkIfClose(a.target) && b.close()
      }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
      }
      y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
        c.close_replaceWith = z(d.type)
      }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.wrap.css(b.fixedContentPos ? {
        overflow: b.st.overflowY,
        overflowX: "hidden",
        overflowY: b.st.overflowY
      } : {
        top: v.scrollTop(),
        position: "absolute"
      }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
        height: d.height(),
        position: "absolute"
      }), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
        27 === a.keyCode && b.close()
      }), v.on("resize" + p, function () {
        b.updateSize()
      }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
      var k = b.wH = v.height(),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o)
      }
      b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
      var r = b.st.mainClass;
      return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
        b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
      }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
    },
    close: function () {
      b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
        b._close()
      }, b.st.removalDelay)) : b._close())
    },
    _close: function () {
      y(h);
      var c = r + " " + q + " ";
      if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
        var e = {
          marginRight: ""
        };
        b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
      }
      d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), b.wH = d
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f), b.currTemplate[d] = f ? a(f) : !0
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
      b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
    },
    appendContent: function (a, c) {
      b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
    },
    parseEl: function (c) {
      var d, e = b.items[c];
      if (e.tagName ? e = {
          el: a(e)
        } : (d = e.type, e = {
          data: e,
          src: e.src
        }), e.el) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break
          } e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
      }
      return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
    },
    addGroup: function (a, c) {
      var d = function (d) {
        d.mfpEl = this, b._openClick(d, a, c)
      };
      c || (c = {});
      var e = "click.magnificPopup";
      c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
    },
    _openClick: function (c, d, e) {
      var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (f || 2 !== c.which && !c.ctrlKey && !c.metaKey) {
        var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
        var e = {
          status: a,
          text: d
        };
        y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
          a.stopImmediatePropagation()
        }), b.container.addClass("mfp-s-" + a), c = a
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0
        } else if (e && a.contains(document, c)) return !0;
        return !1
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a)
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
    },
    _hasScrollBar: function (a) {
      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (a, c) {
        if (void 0 === c || c === !1) return !0;
        if (e = a.split("_"), e.length > 1) {
          var d = b.find(p + "-" + e[0]);
          if (d.length > 0) {
            var f = e[1];
            "replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
          }
        } else b.find(p + "-" + a).html(c)
      })
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
      }
      return b.scrollbarSize
    }
  }, a.magnificPopup = {
    instance: null,
    proto: t.prototype,
    modules: [],
    open: function (b, c) {
      return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
    },
    close: function () {
      return a.magnificPopup.instance && a.magnificPopup.instance.close()
    },
    registerModule: function (b, c) {
      c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
    },
    defaults: {
      disableOn: 0,
      key: null,
      midClick: !1,
      mainClass: "",
      preloader: !0,
      focus: "",
      closeOnContentClick: !1,
      closeOnBgClick: !0,
      closeBtnInside: !0,
      showCloseBtn: !0,
      enableEscapeKey: !0,
      modal: !1,
      alignTop: !1,
      removalDelay: 0,
      prependTo: null,
      fixedContentPos: "auto",
      fixedBgPos: "auto",
      overflowY: "auto",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
      tClose: "Close (Esc)",
      tLoading: "Loading..."
    }
  }, a.fn.magnificPopup = function (c) {
    A();
    var d = a(this);
    if ("string" == typeof c)
      if ("open" === c) {
        var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
          g = parseInt(arguments[1], 10) || 0;
        f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
          mfpEl: e
        }, d, f)
      } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
    else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
    return d
  };
  var C, D, E, F = "inline",
    G = function () {
      E && (D.after(E.addClass(C)).detach(), E = null)
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found"
    },
    proto: {
      initInline: function () {
        b.types.push(F), w(h + "." + F, function () {
          G()
        })
      },
      getInline: function (c, d) {
        if (G(), c.src) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
          } else b.updateStatus("error", e.tNotFound), f = a("<div>");
          return c.inlineElement = f, f
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
      }
    }
  });
  var H, I = "ajax",
    J = function () {
      H && a(document.body).removeClass(H)
    },
    K = function () {
      J(), b.req && b.req.abort()
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.'
    },
    proto: {
      initAjax: function () {
        b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend({
          url: c.src,
          success: function (d, e, f) {
            var g = {
              data: d,
              xhr: f
            };
            y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
              b.wrap.addClass(q)
            }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
          },
          error: function () {
            J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
          }
        }, b.st.ajax.settings);
        return b.req = a.ajax(d), ""
      }
    }
  });
  var L, M = function (c) {
    if (c.data && void 0 !== c.data.title) return c.data.title;
    var d = b.st.image.titleSrc;
    if (d) {
      if (a.isFunction(d)) return d.call(b, c);
      if (c.el) return c.el.attr(d) || ""
    }
    return ""
  };
  a.magnificPopup.registerModule("image", {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.'
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"), w(m + d, function () {
          "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
        }), w(h + d, function () {
          c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
        }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
        }
      },
      _onImageHasSize: function (a) {
        a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L), L = setInterval(function () {
              return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
            }, f)
          };
        e(1)
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
          },
          g = function () {
            c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
        }
        return b._parseMarkup(d, {
          title: M(c),
          img_replaceWith: c.img
        }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
      }
    }
  });
  var N, O = function () {
    return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
  };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img")
      }
    },
    proto: {
      initZoom: function () {
        var a, c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e, f, g = c.duration,
            j = function (a) {
              var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden"
                },
                f = "transition";
              return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
            },
            k = function () {
              b.content.css("visibility", "visible")
            };
          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
              f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
                f.css(b._getOffset(!0)), e = setTimeout(function () {
                  k(), setTimeout(function () {
                    f.remove(), a = f = null, y("ZoomAnimationEnded")
                  }, 16)
                }, g)
              }, 16)
            }
          }), w(i + d, function () {
            if (b._allowZoom()) {
              if (clearTimeout(e), b.st.removalDelay = g, !a) {
                if (a = b._getItemToZoom(), !a) return;
                f = j(a)
              }
              f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
                f.css(b._getOffset())
              }, 16)
            }
          }), w(h + d, function () {
            b._allowZoom() && (k(), f && f.remove(), a = null)
          })
        }
      },
      _allowZoom: function () {
        return "image" === b.currItem.type
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
        };
        return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
      }
    }
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1"
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1"
        },
        gmaps: {
          index: "//maps.google.",
          src: "%id%&output=embed"
        }
      }
    },
    proto: {
      initIframe: function () {
        b.types.push(P), w("BeforeChange", function (a, b, c) {
          b !== c && (b === P ? R() : c === P && R(!0))
        }), w(h + "." + P, function () {
          R()
        })
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
        });
        var g = {};
        return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
      }
    }
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%"
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = ".mfp-gallery",
          g = Boolean(a.fn.mfpFastClick);
        return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function () {
          c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
            return b.items.length > 1 ? (b.next(), !1) : void 0
          }), d.on("keydown" + e, function (a) {
            37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
          })
        }), w("UpdateStatus" + e, function (a, c) {
          c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
        }), w(l + e, function (a, d, e, f) {
          var g = b.items.length;
          e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
        }), w("BuildControls" + e, function () {
          if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
            var d = c.arrowMarkup,
              e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
              f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s),
              h = g ? "mfpFastClick" : "click";
            e[h](function () {
              b.prev()
            }), f[h](function () {
              b.next()
            }), b.isIE7 && (x("b", e[0], !1, !0), x("a", e[0], !1, !0), x("b", f[0], !1, !0), x("a", f[0], !1, !0)), b.container.append(e.add(f))
          }
        }), w(n + e, function () {
          b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
            b.preloadNearbyImages(), b._preloadTimeout = null
          }, 16)
        }), void w(h + e, function () {
          d.off(e), b.wrap.off("click" + e), b.arrowLeft && g && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight = b.arrowLeft = null
        })) : !1
      },
      next: function () {
        b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
      },
      prev: function () {
        b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
      },
      goTo: function (a) {
        b.direction = a >= b.index, b.index = a, b.updateItemHTML()
      },
      preloadNearbyImages: function () {
        var a, c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
      },
      _preloadItem: function (c) {
        if (c = S(c), !b.items[c].preloaded) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
            d.hasSize = !0
          }).on("error.mfploader", function () {
            d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
          }).attr("src", d.src)), d.preloaded = !0
        }
      }
    }
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
      options: {
        replaceSrc: function (a) {
          return a.src.replace(/\.\w+$/, function (a) {
            return "@2x" + a
          })
        },
        ratio: 1
      },
      proto: {
        initRetina: function () {
          if (window.devicePixelRatio > 1) {
            var a = b.st.retina,
              c = a.ratio;
            c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
              b.img.css({
                "max-width": b.img[0].naturalWidth / c,
                width: "100%"
              })
            }), w("ElementParse." + U, function (b, d) {
              d.src = a.replaceSrc(d, c)
            }))
          }
        }
      }
    }),
    function () {
      var b = 1e3,
        c = "ontouchstart" in window,
        d = function () {
          v.off("touchmove" + f + " touchend" + f)
        },
        e = "mfpFastClick",
        f = "." + e;
      a.fn.mfpFastClick = function (e) {
        return a(this).each(function () {
          var g, h = a(this);
          if (c) {
            var i, j, k, l, m, n;
            h.on("touchstart" + f, function (a) {
              l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, v.on("touchmove" + f, function (a) {
                m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0], (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) && (l = !0, d())
              }).on("touchend" + f, function (a) {
                d(), l || n > 1 || (g = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function () {
                  g = !1
                }, b), e())
              })
            })
          }
          h.on("click" + f, function () {
            g || e()
          })
        })
      }, a.fn.destroyMfpFastClick = function () {
        a(this).off("touchstart" + f + " click" + f), c && v.off("touchmove" + f + " touchend" + f)
      }
    }(), A()
});




/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */

! function (a) {
  function b() {}

  function c(a) {
    function c(b) {
      b.prototype.option || (b.prototype.option = function (b) {
        a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
      })
    }

    function e(b, c) {
      a.fn[b] = function (e) {
        if ("string" == typeof e) {
          for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
            var j = this[h],
              k = a.data(j, b);
            if (k)
              if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                var l = k[e].apply(k, g);
                if (void 0 !== l) return l
              } else f("no such method '" + e + "' for " + b + " instance");
            else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'")
          }
          return this
        }
        return this.each(function () {
          var d = a.data(this, b);
          d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d))
        })
      }
    }
    if (a) {
      var f = "undefined" == typeof console ? b : function (a) {
        console.error(a)
      };
      return a.bridget = function (a, b) {
        c(b), e(a, b)
      }, a.bridget
    }
  }
  var d = Array.prototype.slice;
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], c) : c("object" == typeof exports ? require("jquery") : a.jQuery)
}(window),
function (a) {
  function b(b) {
    var c = a.event;
    return c.target = c.target || c.srcElement || b, c
  }
  var c = document.documentElement,
    d = function () {};
  c.addEventListener ? d = function (a, b, c) {
    a.addEventListener(b, c, !1)
  } : c.attachEvent && (d = function (a, c, d) {
    a[c + d] = d.handleEvent ? function () {
      var c = b(a);
      d.handleEvent.call(d, c)
    } : function () {
      var c = b(a);
      d.call(a, c)
    }, a.attachEvent("on" + c, a[c + d])
  });
  var e = function () {};
  c.removeEventListener ? e = function (a, b, c) {
    a.removeEventListener(b, c, !1)
  } : c.detachEvent && (e = function (a, b, c) {
    a.detachEvent("on" + b, a[b + c]);
    try {
      delete a[b + c]
    } catch (d) {
      a[b + c] = void 0
    }
  });
  var f = {
    bind: d,
    unbind: e
  };
  "function" == typeof define && define.amd ? define("eventie/eventie", f) : "object" == typeof exports ? module.exports = f : a.eventie = f
}(window),
function () {
  "use strict";

  function a() {}

  function b(a, b) {
    for (var c = a.length; c--;)
      if (a[c].listener === b) return c;
    return -1
  }

  function c(a) {
    return function () {
      return this[a].apply(this, arguments)
    }
  }
  var d = a.prototype,
    e = this,
    f = e.EventEmitter;
  d.getListeners = function (a) {
    var b, c, d = this._getEvents();
    if (a instanceof RegExp) {
      b = {};
      for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c])
    } else b = d[a] || (d[a] = []);
    return b
  }, d.flattenListeners = function (a) {
    var b, c = [];
    for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
    return c
  }, d.getListenersAsObject = function (a) {
    var b, c = this.getListeners(a);
    return c instanceof Array && (b = {}, b[a] = c), b || c
  }, d.addListener = function (a, c) {
    var d, e = this.getListenersAsObject(a),
      f = "object" == typeof c;
    for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : {
      listener: c,
      once: !1
    });
    return this
  }, d.on = c("addListener"), d.addOnceListener = function (a, b) {
    return this.addListener(a, {
      listener: b,
      once: !0
    })
  }, d.once = c("addOnceListener"), d.defineEvent = function (a) {
    return this.getListeners(a), this
  }, d.defineEvents = function (a) {
    for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
    return this
  }, d.removeListener = function (a, c) {
    var d, e, f = this.getListenersAsObject(a);
    for (e in f) f.hasOwnProperty(e) && (d = b(f[e], c), -1 !== d && f[e].splice(d, 1));
    return this
  }, d.off = c("removeListener"), d.addListeners = function (a, b) {
    return this.manipulateListeners(!1, a, b)
  }, d.removeListeners = function (a, b) {
    return this.manipulateListeners(!0, a, b)
  }, d.manipulateListeners = function (a, b, c) {
    var d, e, f = a ? this.removeListener : this.addListener,
      g = a ? this.removeListeners : this.addListeners;
    if ("object" != typeof b || b instanceof RegExp)
      for (d = c.length; d--;) f.call(this, b, c[d]);
    else
      for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ("function" == typeof e ? f.call(this, d, e) : g.call(this, d, e));
    return this
  }, d.removeEvent = function (a) {
    var b, c = typeof a,
      d = this._getEvents();
    if ("string" === c) delete d[a];
    else if (a instanceof RegExp)
      for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
    else delete this._events;
    return this
  }, d.removeAllListeners = c("removeEvent"), d.emitEvent = function (a, b) {
    var c, d, e, f, g = this.getListenersAsObject(a);
    for (e in g)
      if (g.hasOwnProperty(e))
        for (d = g[e].length; d--;) c = g[e][d], c.once === !0 && this.removeListener(a, c.listener), f = c.listener.apply(this, b || []), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
    return this
  }, d.trigger = c("emitEvent"), d.emit = function (a) {
    var b = Array.prototype.slice.call(arguments, 1);
    return this.emitEvent(a, b)
  }, d.setOnceReturnValue = function (a) {
    return this._onceReturnValue = a, this
  }, d._getOnceReturnValue = function () {
    return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
  }, d._getEvents = function () {
    return this._events || (this._events = {})
  }, a.noConflict = function () {
    return e.EventEmitter = f, a
  }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
    return a
  }) : "object" == typeof module && module.exports ? module.exports = a : e.EventEmitter = a
}.call(this),
  function (a) {
    function b(a) {
      if (a) {
        if ("string" == typeof d[a]) return a;
        a = a.charAt(0).toUpperCase() + a.slice(1);
        for (var b, e = 0, f = c.length; f > e; e++)
          if (b = c[e] + a, "string" == typeof d[b]) return b
      }
    }
    var c = "Webkit Moz ms Ms O".split(" "),
      d = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function () {
      return b
    }) : "object" == typeof exports ? module.exports = b : a.getStyleProperty = b
  }(window),
  function (a, b) {
    function c(a) {
      var b = parseFloat(a),
        c = -1 === a.indexOf("%") && !isNaN(b);
      return c && b
    }

    function d() {}

    function e() {
      for (var a = {
          width: 0,
          height: 0,
          innerWidth: 0,
          innerHeight: 0,
          outerWidth: 0,
          outerHeight: 0
        }, b = 0, c = h.length; c > b; b++) {
        var d = h[b];
        a[d] = 0
      }
      return a
    }

    function f(b) {
      function d() {
        if (!m) {
          m = !0;
          var d = a.getComputedStyle;
          if (j = function () {
              var a = d ? function (a) {
                return d(a, null)
              } : function (a) {
                return a.currentStyle
              };
              return function (b) {
                var c = a(b);
                return c || g("Style returned " + c + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), c
              }
            }(), k = b("boxSizing")) {
            var e = document.createElement("div");
            e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style[k] = "border-box";
            var f = document.body || document.documentElement;
            f.appendChild(e);
            var h = j(e);
            l = 200 === c(h.width), f.removeChild(e)
          }
        }
      }

      function f(a) {
        if (d(), "string" == typeof a && (a = document.querySelector(a)), a && "object" == typeof a && a.nodeType) {
          var b = j(a);
          if ("none" === b.display) return e();
          var f = {};
          f.width = a.offsetWidth, f.height = a.offsetHeight;
          for (var g = f.isBorderBox = !(!k || !b[k] || "border-box" !== b[k]), m = 0, n = h.length; n > m; m++) {
            var o = h[m],
              p = b[o];
            p = i(a, p);
            var q = parseFloat(p);
            f[o] = isNaN(q) ? 0 : q
          }
          var r = f.paddingLeft + f.paddingRight,
            s = f.paddingTop + f.paddingBottom,
            t = f.marginLeft + f.marginRight,
            u = f.marginTop + f.marginBottom,
            v = f.borderLeftWidth + f.borderRightWidth,
            w = f.borderTopWidth + f.borderBottomWidth,
            x = g && l,
            y = c(b.width);
          y !== !1 && (f.width = y + (x ? 0 : r + v));
          var z = c(b.height);
          return z !== !1 && (f.height = z + (x ? 0 : s + w)), f.innerWidth = f.width - (r + v), f.innerHeight = f.height - (s + w), f.outerWidth = f.width + t, f.outerHeight = f.height + u, f
        }
      }

      function i(b, c) {
        if (a.getComputedStyle || -1 === c.indexOf("%")) return c;
        var d = b.style,
          e = d.left,
          f = b.runtimeStyle,
          g = f && f.left;
        return g && (f.left = b.currentStyle.left), d.left = c, c = d.pixelLeft, d.left = e, g && (f.left = g), c
      }
      var j, k, l, m = !1;
      return f
    }
    var g = "undefined" == typeof console ? d : function (a) {
        console.error(a)
      },
      h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], f) : "object" == typeof exports ? module.exports = f(require("desandro-get-style-property")) : a.getSize = f(a.getStyleProperty)
  }(window),
  function (a) {
    function b(a) {
      "function" == typeof a && (b.isReady ? a() : g.push(a))
    }

    function c(a) {
      var c = "readystatechange" === a.type && "complete" !== f.readyState;
      b.isReady || c || d()
    }

    function d() {
      b.isReady = !0;
      for (var a = 0, c = g.length; c > a; a++) {
        var d = g[a];
        d()
      }
    }

    function e(e) {
      return "complete" === f.readyState ? d() : (e.bind(f, "DOMContentLoaded", c), e.bind(f, "readystatechange", c), e.bind(a, "load", c)), b
    }
    var f = a.document,
      g = [];
    b.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], e) : "object" == typeof exports ? module.exports = e(require("eventie")) : a.docReady = e(a.eventie)
  }(window),
  function (a) {
    "use strict";

    function b(a, b) {
      return a[g](b)
    }

    function c(a) {
      if (!a.parentNode) {
        var b = document.createDocumentFragment();
        b.appendChild(a)
      }
    }

    function d(a, b) {
      c(a);
      for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++)
        if (d[e] === a) return !0;
      return !1
    }

    function e(a, d) {
      return c(a), b(a, d)
    }
    var f, g = function () {
      if (a.matches) return "matches";
      if (a.matchesSelector) return "matchesSelector";
      for (var b = ["webkit", "moz", "ms", "o"], c = 0, d = b.length; d > c; c++) {
        var e = b[c],
          f = e + "MatchesSelector";
        if (a[f]) return f
      }
    }();
    if (g) {
      var h = document.createElement("div"),
        i = b(h, "div");
      f = i ? b : e
    } else f = d;
    "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function () {
      return f
    }) : "object" == typeof exports ? module.exports = f : window.matchesSelector = f
  }(Element.prototype),
  function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["doc-ready/doc-ready", "matches-selector/matches-selector"], function (c, d) {
      return b(a, c, d)
    }) : "object" == typeof exports ? module.exports = b(a, require("doc-ready"), require("desandro-matches-selector")) : a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector)
  }(window, function (a, b, c) {
    var d = {};
    d.extend = function (a, b) {
      for (var c in b) a[c] = b[c];
      return a
    }, d.modulo = function (a, b) {
      return (a % b + b) % b
    };
    var e = Object.prototype.toString;
    d.isArray = function (a) {
      return "[object Array]" == e.call(a)
    }, d.makeArray = function (a) {
      var b = [];
      if (d.isArray(a)) b = a;
      else if (a && "number" == typeof a.length)
        for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
      else b.push(a);
      return b
    }, d.indexOf = Array.prototype.indexOf ? function (a, b) {
      return a.indexOf(b)
    } : function (a, b) {
      for (var c = 0, d = a.length; d > c; c++)
        if (a[c] === b) return c;
      return -1
    }, d.removeFrom = function (a, b) {
      var c = d.indexOf(a, b); - 1 != c && a.splice(c, 1)
    }, d.isElement = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function (a) {
      return a instanceof HTMLElement
    } : function (a) {
      return a && "object" == typeof a && 1 == a.nodeType && "string" == typeof a.nodeName
    }, d.setText = function () {
      function a(a, c) {
        b = b || (void 0 !== document.documentElement.textContent ? "textContent" : "innerText"), a[b] = c
      }
      var b;
      return a
    }(), d.getParent = function (a, b) {
      for (; a != document.body;)
        if (a = a.parentNode, c(a, b)) return a
    }, d.getQueryElement = function (a) {
      return "string" == typeof a ? document.querySelector(a) : a
    }, d.handleEvent = function (a) {
      var b = "on" + a.type;
      this[b] && this[b](a)
    }, d.filterFindElements = function (a, b) {
      a = d.makeArray(a);
      for (var e = [], f = 0, g = a.length; g > f; f++) {
        var h = a[f];
        if (d.isElement(h))
          if (b) {
            c(h, b) && e.push(h);
            for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j])
          } else e.push(h)
      }
      return e
    }, d.debounceMethod = function (a, b, c) {
      var d = a.prototype[b],
        e = b + "Timeout";
      a.prototype[b] = function () {
        var a = this[e];
        a && clearTimeout(a);
        var b = arguments,
          f = this;
        this[e] = setTimeout(function () {
          d.apply(f, b), delete f[e]
        }, c || 100)
      }
    }, d.toDashed = function (a) {
      return a.replace(/(.)([A-Z])/g, function (a, b, c) {
        return b + "-" + c
      }).toLowerCase()
    };
    var f = a.console;
    return d.htmlInit = function (c, e) {
      b(function () {
        for (var b = d.toDashed(e), g = document.querySelectorAll(".js-" + b), h = "data-" + b + "-options", i = 0, j = g.length; j > i; i++) {
          var k, l = g[i],
            m = l.getAttribute(h);
          try {
            k = m && JSON.parse(m)
          } catch (n) {
            f && f.error("Error parsing " + h + " on " + l.nodeName.toLowerCase() + (l.id ? "#" + l.id : "") + ": " + n);
            continue
          }
          var o = new c(l, k),
            p = a.jQuery;
          p && p.data(l, e, o)
        }
      })
    }, d
  }),
  function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property", "fizzy-ui-utils/utils"], function (c, d, e, f) {
      return b(a, c, d, e, f)
    }) : "object" == typeof exports ? module.exports = b(a, require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property"), require("fizzy-ui-utils")) : (a.Outlayer = {}, a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils))
  }(window, function (a, b, c, d, e) {
    "use strict";

    function f(a) {
      for (var b in a) return !1;
      return b = null, !0
    }

    function g(a, b) {
      a && (this.element = a, this.layout = b, this.position = {
        x: 0,
        y: 0
      }, this._create())
    }

    function h(a) {
      return a.replace(/([A-Z])/g, function (a) {
        return "-" + a.toLowerCase()
      })
    }
    var i = a.getComputedStyle,
      j = i ? function (a) {
        return i(a, null)
      } : function (a) {
        return a.currentStyle
      },
      k = d("transition"),
      l = d("transform"),
      m = k && l,
      n = !!d("perspective"),
      o = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "otransitionend",
        transition: "transitionend"
      } [k],
      p = ["transform", "transition", "transitionDuration", "transitionProperty"],
      q = function () {
        for (var a = {}, b = 0, c = p.length; c > b; b++) {
          var e = p[b],
            f = d(e);
          f && f !== e && (a[e] = f)
        }
        return a
      }();
    e.extend(g.prototype, b.prototype), g.prototype._create = function () {
      this._transn = {
        ingProperties: {},
        clean: {},
        onEnd: {}
      }, this.css({
        position: "absolute"
      })
    }, g.prototype.handleEvent = function (a) {
      var b = "on" + a.type;
      this[b] && this[b](a)
    }, g.prototype.getSize = function () {
      this.size = c(this.element)
    }, g.prototype.css = function (a) {
      var b = this.element.style;
      for (var c in a) {
        var d = q[c] || c;
        b[d] = a[c]
      }
    }, g.prototype.getPosition = function () {
      var a = j(this.element),
        b = this.layout.options,
        c = b.isOriginLeft,
        d = b.isOriginTop,
        e = a[c ? "left" : "right"],
        f = a[d ? "top" : "bottom"],
        g = this.layout.size,
        h = -1 != e.indexOf("%") ? parseFloat(e) / 100 * g.width : parseInt(e, 10),
        i = -1 != f.indexOf("%") ? parseFloat(f) / 100 * g.height : parseInt(f, 10);
      h = isNaN(h) ? 0 : h, i = isNaN(i) ? 0 : i, h -= c ? g.paddingLeft : g.paddingRight, i -= d ? g.paddingTop : g.paddingBottom, this.position.x = h, this.position.y = i
    }, g.prototype.layoutPosition = function () {
      var a = this.layout.size,
        b = this.layout.options,
        c = {},
        d = b.isOriginLeft ? "paddingLeft" : "paddingRight",
        e = b.isOriginLeft ? "left" : "right",
        f = b.isOriginLeft ? "right" : "left",
        g = this.position.x + a[d];
      c[e] = this.getXValue(g), c[f] = "";
      var h = b.isOriginTop ? "paddingTop" : "paddingBottom",
        i = b.isOriginTop ? "top" : "bottom",
        j = b.isOriginTop ? "bottom" : "top",
        k = this.position.y + a[h];
      c[i] = this.getYValue(k), c[j] = "", this.css(c), this.emitEvent("layout", [this])
    }, g.prototype.getXValue = function (a) {
      var b = this.layout.options;
      return b.percentPosition && !b.isHorizontal ? a / this.layout.size.width * 100 + "%" : a + "px"
    }, g.prototype.getYValue = function (a) {
      var b = this.layout.options;
      return b.percentPosition && b.isHorizontal ? a / this.layout.size.height * 100 + "%" : a + "px"
    }, g.prototype._transitionTo = function (a, b) {
      this.getPosition();
      var c = this.position.x,
        d = this.position.y,
        e = parseInt(a, 10),
        f = parseInt(b, 10),
        g = e === this.position.x && f === this.position.y;
      if (this.setPosition(a, b), g && !this.isTransitioning) return void this.layoutPosition();
      var h = a - c,
        i = b - d,
        j = {};
      j.transform = this.getTranslate(h, i), this.transition({
        to: j,
        onTransitionEnd: {
          transform: this.layoutPosition
        },
        isCleaning: !0
      })
    }, g.prototype.getTranslate = function (a, b) {
      var c = this.layout.options;
      return a = c.isOriginLeft ? a : -a, b = c.isOriginTop ? b : -b, n ? "translate3d(" + a + "px, " + b + "px, 0)" : "translate(" + a + "px, " + b + "px)"
    }, g.prototype.goTo = function (a, b) {
      this.setPosition(a, b), this.layoutPosition()
    }, g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo, g.prototype.setPosition = function (a, b) {
      this.position.x = parseInt(a, 10), this.position.y = parseInt(b, 10)
    }, g.prototype._nonTransition = function (a) {
      this.css(a.to), a.isCleaning && this._removeStyles(a.to);
      for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this)
    }, g.prototype._transition = function (a) {
      if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
      var b = this._transn;
      for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
      for (c in a.to) b.ingProperties[c] = !0, a.isCleaning && (b.clean[c] = !0);
      if (a.from) {
        this.css(a.from);
        var d = this.element.offsetHeight;
        d = null
      }
      this.enableTransition(a.to), this.css(a.to), this.isTransitioning = !0
    };
    var r = "opacity," + h(q.transform || "transform");
    g.prototype.enableTransition = function () {
      this.isTransitioning || (this.css({
        transitionProperty: r,
        transitionDuration: this.layout.options.transitionDuration
      }), this.element.addEventListener(o, this, !1))
    }, g.prototype.transition = g.prototype[k ? "_transition" : "_nonTransition"], g.prototype.onwebkitTransitionEnd = function (a) {
      this.ontransitionend(a)
    }, g.prototype.onotransitionend = function (a) {
      this.ontransitionend(a)
    };
    var s = {
      "-webkit-transform": "transform",
      "-moz-transform": "transform",
      "-o-transform": "transform"
    };
    g.prototype.ontransitionend = function (a) {
      if (a.target === this.element) {
        var b = this._transn,
          c = s[a.propertyName] || a.propertyName;
        if (delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && (this.element.style[a.propertyName] = "", delete b.clean[c]), c in b.onEnd) {
          var d = b.onEnd[c];
          d.call(this), delete b.onEnd[c]
        }
        this.emitEvent("transitionEnd", [this])
      }
    }, g.prototype.disableTransition = function () {
      this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
    }, g.prototype._removeStyles = function (a) {
      var b = {};
      for (var c in a) b[c] = "";
      this.css(b)
    };
    var t = {
      transitionProperty: "",
      transitionDuration: ""
    };
    return g.prototype.removeTransitionStyles = function () {
      this.css(t)
    }, g.prototype.removeElem = function () {
      this.element.parentNode.removeChild(this.element), this.css({
        display: ""
      }), this.emitEvent("remove", [this])
    }, g.prototype.remove = function () {
      if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
      var a = this;
      this.once("transitionEnd", function () {
        a.removeElem()
      }), this.hide()
    }, g.prototype.reveal = function () {
      delete this.isHidden, this.css({
        display: ""
      });
      var a = this.layout.options,
        b = {},
        c = this.getHideRevealTransitionEndProperty("visibleStyle");
      b[c] = this.onRevealTransitionEnd, this.transition({
        from: a.hiddenStyle,
        to: a.visibleStyle,
        isCleaning: !0,
        onTransitionEnd: b
      })
    }, g.prototype.onRevealTransitionEnd = function () {
      this.isHidden || this.emitEvent("reveal")
    }, g.prototype.getHideRevealTransitionEndProperty = function (a) {
      var b = this.layout.options[a];
      if (b.opacity) return "opacity";
      for (var c in b) return c
    }, g.prototype.hide = function () {
      this.isHidden = !0, this.css({
        display: ""
      });
      var a = this.layout.options,
        b = {},
        c = this.getHideRevealTransitionEndProperty("hiddenStyle");
      b[c] = this.onHideTransitionEnd, this.transition({
        from: a.visibleStyle,
        to: a.hiddenStyle,
        isCleaning: !0,
        onTransitionEnd: b
      })
    }, g.prototype.onHideTransitionEnd = function () {
      this.isHidden && (this.css({
        display: "none"
      }), this.emitEvent("hide"))
    }, g.prototype.destroy = function () {
      this.css({
        position: "",
        left: "",
        right: "",
        top: "",
        bottom: "",
        transition: "",
        transform: ""
      })
    }, g
  }),
  function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "eventEmitter/EventEmitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (c, d, e, f, g) {
      return b(a, c, d, e, f, g)
    }) : "object" == typeof exports ? module.exports = b(a, require("eventie"), require("wolfy87-eventemitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item)
  }(window, function (a, b, c, d, e, f) {
    "use strict";

    function g(a, b) {
      var c = e.getQueryElement(a);
      if (!c) return void(h && h.error("Bad element for " + this.constructor.namespace + ": " + (c || a)));
      this.element = c, i && (this.$element = i(this.element)), this.options = e.extend({}, this.constructor.defaults), this.option(b);
      var d = ++k;
      this.element.outlayerGUID = d, l[d] = this, this._create(), this.options.isInitLayout && this.layout()
    }
    var h = a.console,
      i = a.jQuery,
      j = function () {},
      k = 0,
      l = {};
    return g.namespace = "outlayer", g.Item = f, g.defaults = {
      containerStyle: {
        position: "relative"
      },
      isInitLayout: !0,
      isOriginLeft: !0,
      isOriginTop: !0,
      isResizeBound: !0,
      isResizingContainer: !0,
      transitionDuration: "0.4s",
      hiddenStyle: {
        opacity: 0,
        transform: "scale(0.001)"
      },
      visibleStyle: {
        opacity: 1,
        transform: "scale(1)"
      }
    }, e.extend(g.prototype, c.prototype), g.prototype.option = function (a) {
      e.extend(this.options, a)
    }, g.prototype._create = function () {
      this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
    }, g.prototype.reloadItems = function () {
      this.items = this._itemize(this.element.children)
    }, g.prototype._itemize = function (a) {
      for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
        var g = b[e],
          h = new c(g, this);
        d.push(h)
      }
      return d
    }, g.prototype._filterFindItemElements = function (a) {
      return e.filterFindElements(a, this.options.itemSelector)
    }, g.prototype.getItemElements = function () {
      for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
      return a
    }, g.prototype.layout = function () {
      this._resetLayout(), this._manageStamps();
      var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
      this.layoutItems(this.items, a), this._isLayoutInited = !0
    }, g.prototype._init = g.prototype.layout, g.prototype._resetLayout = function () {
      this.getSize()
    }, g.prototype.getSize = function () {
      this.size = d(this.element)
    }, g.prototype._getMeasurement = function (a, b) {
      var c, f = this.options[a];
      f ? ("string" == typeof f ? c = this.element.querySelector(f) : e.isElement(f) && (c = f), this[a] = c ? d(c)[b] : f) : this[a] = 0
    }, g.prototype.layoutItems = function (a, b) {
      a = this._getItemsForLayout(a), this._layoutItems(a, b), this._postLayout()
    }, g.prototype._getItemsForLayout = function (a) {
      for (var b = [], c = 0, d = a.length; d > c; c++) {
        var e = a[c];
        e.isIgnored || b.push(e)
      }
      return b
    }, g.prototype._layoutItems = function (a, b) {
      if (this._emitCompleteOnItems("layout", a), a && a.length) {
        for (var c = [], d = 0, e = a.length; e > d; d++) {
          var f = a[d],
            g = this._getItemLayoutPosition(f);
          g.item = f, g.isInstant = b || f.isLayoutInstant, c.push(g)
        }
        this._processLayoutQueue(c)
      }
    }, g.prototype._getItemLayoutPosition = function () {
      return {
        x: 0,
        y: 0
      }
    }, g.prototype._processLayoutQueue = function (a) {
      for (var b = 0, c = a.length; c > b; b++) {
        var d = a[b];
        this._positionItem(d.item, d.x, d.y, d.isInstant)
      }
    }, g.prototype._positionItem = function (a, b, c, d) {
      d ? a.goTo(b, c) : a.moveTo(b, c)
    }, g.prototype._postLayout = function () {
      this.resizeContainer()
    }, g.prototype.resizeContainer = function () {
      if (this.options.isResizingContainer) {
        var a = this._getContainerSize();
        a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1))
      }
    }, g.prototype._getContainerSize = j, g.prototype._setContainerMeasure = function (a, b) {
      if (void 0 !== a) {
        var c = this.size;
        c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth), a = Math.max(a, 0), this.element.style[b ? "width" : "height"] = a + "px"
      }
    }, g.prototype._emitCompleteOnItems = function (a, b) {
      function c() {
        e.dispatchEvent(a + "Complete", null, [b])
      }

      function d() {
        g++, g === f && c()
      }
      var e = this,
        f = b.length;
      if (!b || !f) return void c();
      for (var g = 0, h = 0, i = b.length; i > h; h++) {
        var j = b[h];
        j.once(a, d)
      }
    }, g.prototype.dispatchEvent = function (a, b, c) {
      var d = b ? [b].concat(c) : c;
      if (this.emitEvent(a, d), i)
        if (this.$element = this.$element || i(this.element), b) {
          var e = i.Event(b);
          e.type = a, this.$element.trigger(e, c)
        } else this.$element.trigger(a, c)
    }, g.prototype.ignore = function (a) {
      var b = this.getItem(a);
      b && (b.isIgnored = !0)
    }, g.prototype.unignore = function (a) {
      var b = this.getItem(a);
      b && delete b.isIgnored
    }, g.prototype.stamp = function (a) {
      if (a = this._find(a)) {
        this.stamps = this.stamps.concat(a);
        for (var b = 0, c = a.length; c > b; b++) {
          var d = a[b];
          this.ignore(d)
        }
      }
    }, g.prototype.unstamp = function (a) {
      if (a = this._find(a))
        for (var b = 0, c = a.length; c > b; b++) {
          var d = a[b];
          e.removeFrom(this.stamps, d), this.unignore(d)
        }
    }, g.prototype._find = function (a) {
      return a ? ("string" == typeof a && (a = this.element.querySelectorAll(a)), a = e.makeArray(a)) : void 0
    }, g.prototype._manageStamps = function () {
      if (this.stamps && this.stamps.length) {
        this._getBoundingRect();
        for (var a = 0, b = this.stamps.length; b > a; a++) {
          var c = this.stamps[a];
          this._manageStamp(c)
        }
      }
    }, g.prototype._getBoundingRect = function () {
      var a = this.element.getBoundingClientRect(),
        b = this.size;
      this._boundingRect = {
        left: a.left + b.paddingLeft + b.borderLeftWidth,
        top: a.top + b.paddingTop + b.borderTopWidth,
        right: a.right - (b.paddingRight + b.borderRightWidth),
        bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth)
      }
    }, g.prototype._manageStamp = j, g.prototype._getElementOffset = function (a) {
      var b = a.getBoundingClientRect(),
        c = this._boundingRect,
        e = d(a),
        f = {
          left: b.left - c.left - e.marginLeft,
          top: b.top - c.top - e.marginTop,
          right: c.right - b.right - e.marginRight,
          bottom: c.bottom - b.bottom - e.marginBottom
        };
      return f
    }, g.prototype.handleEvent = function (a) {
      var b = "on" + a.type;
      this[b] && this[b](a)
    }, g.prototype.bindResize = function () {
      this.isResizeBound || (b.bind(a, "resize", this), this.isResizeBound = !0)
    }, g.prototype.unbindResize = function () {
      this.isResizeBound && b.unbind(a, "resize", this), this.isResizeBound = !1
    }, g.prototype.onresize = function () {
      function a() {
        b.resize(), delete b.resizeTimeout
      }
      this.resizeTimeout && clearTimeout(this.resizeTimeout);
      var b = this;
      this.resizeTimeout = setTimeout(a, 100)
    }, g.prototype.resize = function () {
      this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, g.prototype.needsResizeLayout = function () {
      var a = d(this.element),
        b = this.size && a;
      return b && a.innerWidth !== this.size.innerWidth
    }, g.prototype.addItems = function (a) {
      var b = this._itemize(a);
      return b.length && (this.items = this.items.concat(b)), b
    }, g.prototype.appended = function (a) {
      var b = this.addItems(a);
      b.length && (this.layoutItems(b, !0), this.reveal(b))
    }, g.prototype.prepended = function (a) {
      var b = this._itemize(a);
      if (b.length) {
        var c = this.items.slice(0);
        this.items = b.concat(c), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c)
      }
    }, g.prototype.reveal = function (a) {
      this._emitCompleteOnItems("reveal", a);
      for (var b = a && a.length, c = 0; b && b > c; c++) {
        var d = a[c];
        d.reveal()
      }
    }, g.prototype.hide = function (a) {
      this._emitCompleteOnItems("hide", a);
      for (var b = a && a.length, c = 0; b && b > c; c++) {
        var d = a[c];
        d.hide()
      }
    }, g.prototype.revealItemElements = function (a) {
      var b = this.getItems(a);
      this.reveal(b)
    }, g.prototype.hideItemElements = function (a) {
      var b = this.getItems(a);
      this.hide(b)
    }, g.prototype.getItem = function (a) {
      for (var b = 0, c = this.items.length; c > b; b++) {
        var d = this.items[b];
        if (d.element === a) return d
      }
    }, g.prototype.getItems = function (a) {
      a = e.makeArray(a);
      for (var b = [], c = 0, d = a.length; d > c; c++) {
        var f = a[c],
          g = this.getItem(f);
        g && b.push(g)
      }
      return b
    }, g.prototype.remove = function (a) {
      var b = this.getItems(a);
      if (this._emitCompleteOnItems("remove", b), b && b.length)
        for (var c = 0, d = b.length; d > c; c++) {
          var f = b[c];
          f.remove(), e.removeFrom(this.items, f)
        }
    }, g.prototype.destroy = function () {
      var a = this.element.style;
      a.height = "", a.position = "", a.width = "";
      for (var b = 0, c = this.items.length; c > b; b++) {
        var d = this.items[b];
        d.destroy()
      }
      this.unbindResize();
      var e = this.element.outlayerGUID;
      delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace)
    }, g.data = function (a) {
      a = e.getQueryElement(a);
      var b = a && a.outlayerGUID;
      return b && l[b]
    }, g.create = function (a, b) {
      function c() {
        g.apply(this, arguments)
      }
      return Object.create ? c.prototype = Object.create(g.prototype) : e.extend(c.prototype, g.prototype), c.prototype.constructor = c, c.defaults = e.extend({}, g.defaults), e.extend(c.defaults, b), c.prototype.settings = {}, c.namespace = a, c.data = g.data, c.Item = function () {
        f.apply(this, arguments)
      }, c.Item.prototype = new f, e.htmlInit(c, a), i && i.bridget && i.bridget(a, c), c
    }, g.Item = f, g
  }),
  function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/item", ["outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.Item = b(a.Outlayer))
  }(window, function (a) {
    "use strict";

    function b() {
      a.Item.apply(this, arguments)
    }
    b.prototype = new a.Item, b.prototype._create = function () {
      this.id = this.layout.itemGUID++, a.Item.prototype._create.call(this), this.sortData = {}
    }, b.prototype.updateSortData = function () {
      if (!this.isIgnored) {
        this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
        var a = this.layout.options.getSortData,
          b = this.layout._sorters;
        for (var c in a) {
          var d = b[c];
          this.sortData[c] = d(this.element, this)
        }
      }
    };
    var c = b.prototype.destroy;
    return b.prototype.destroy = function () {
      c.apply(this, arguments), this.css({
        display: ""
      })
    }, b
  }),
  function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], b) : "object" == typeof exports ? module.exports = b(require("get-size"), require("outlayer")) : (a.Isotope = a.Isotope || {}, a.Isotope.LayoutMode = b(a.getSize, a.Outlayer))
  }(window, function (a, b) {
    "use strict";

    function c(a) {
      this.isotope = a, a && (this.options = a.options[this.namespace], this.element = a.element, this.items = a.filteredItems, this.size = a.size)
    }
    return function () {
      function a(a) {
        return function () {
          return b.prototype[a].apply(this.isotope, arguments)
        }
      }
      for (var d = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout"], e = 0, f = d.length; f > e; e++) {
        var g = d[e];
        c.prototype[g] = a(g)
      }
    }(), c.prototype.needsVerticalResizeLayout = function () {
      var b = a(this.isotope.element),
        c = this.isotope.size && b;
      return c && b.innerHeight != this.isotope.size.innerHeight
    }, c.prototype._getMeasurement = function () {
      this.isotope._getMeasurement.apply(this, arguments)
    }, c.prototype.getColumnWidth = function () {
      this.getSegmentSize("column", "Width")
    }, c.prototype.getRowHeight = function () {
      this.getSegmentSize("row", "Height")
    }, c.prototype.getSegmentSize = function (a, b) {
      var c = a + b,
        d = "outer" + b;
      if (this._getMeasurement(c, d), !this[c]) {
        var e = this.getFirstItemSize();
        this[c] = e && e[d] || this.isotope.size["inner" + b]
      }
    }, c.prototype.getFirstItemSize = function () {
      var b = this.isotope.filteredItems[0];
      return b && b.element && a(b.element)
    }, c.prototype.layout = function () {
      this.isotope.layout.apply(this.isotope, arguments)
    }, c.prototype.getSize = function () {
      this.isotope.getSize(), this.size = this.isotope.size
    }, c.modes = {}, c.create = function (a, b) {
      function d() {
        c.apply(this, arguments)
      }
      return d.prototype = new c, b && (d.options = b), d.prototype.namespace = a, c.modes[a] = d, d
    }, c
  }),
  function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size", "fizzy-ui-utils/utils"], b) : "object" == typeof exports ? module.exports = b(require("outlayer"), require("get-size"), require("fizzy-ui-utils")) : a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils)
  }(window, function (a, b, c) {
    var d = a.create("masonry");
    return d.prototype._resetLayout = function () {
      this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns();
      var a = this.cols;
      for (this.colYs = []; a--;) this.colYs.push(0);
      this.maxY = 0
    }, d.prototype.measureColumns = function () {
      if (this.getContainerWidth(), !this.columnWidth) {
        var a = this.items[0],
          c = a && a.element;
        this.columnWidth = c && b(c).outerWidth || this.containerWidth
      }
      var d = this.columnWidth += this.gutter,
        e = this.containerWidth + this.gutter,
        f = e / d,
        g = d - e % d,
        h = g && 1 > g ? "round" : "floor";
      f = Math[h](f), this.cols = Math.max(f, 1)
    }, d.prototype.getContainerWidth = function () {
      var a = this.options.isFitWidth ? this.element.parentNode : this.element,
        c = b(a);
      this.containerWidth = c && c.innerWidth
    }, d.prototype._getItemLayoutPosition = function (a) {
      a.getSize();
      var b = a.size.outerWidth % this.columnWidth,
        d = b && 1 > b ? "round" : "ceil",
        e = Math[d](a.size.outerWidth / this.columnWidth);
      e = Math.min(e, this.cols);
      for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = {
          x: this.columnWidth * h,
          y: g
        }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
      return i
    }, d.prototype._getColGroup = function (a) {
      if (2 > a) return this.colYs;
      for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
        var e = this.colYs.slice(d, d + a);
        b[d] = Math.max.apply(Math, e)
      }
      return b
    }, d.prototype._manageStamp = function (a) {
      var c = b(a),
        d = this._getElementOffset(a),
        e = this.options.isOriginLeft ? d.left : d.right,
        f = e + c.outerWidth,
        g = Math.floor(e / this.columnWidth);
      g = Math.max(0, g);
      var h = Math.floor(f / this.columnWidth);
      h -= f % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h);
      for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j])
    }, d.prototype._getContainerSize = function () {
      this.maxY = Math.max.apply(Math, this.colYs);
      var a = {
        height: this.maxY
      };
      return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a
    }, d.prototype._getContainerFitWidth = function () {
      for (var a = 0, b = this.cols; --b && 0 === this.colYs[b];) a++;
      return (this.cols - a) * this.columnWidth - this.gutter
    }, d.prototype.needsResizeLayout = function () {
      var a = this.containerWidth;
      return this.getContainerWidth(), a !== this.containerWidth
    }, d
  }),
  function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/masonry", ["../layout-mode", "masonry/masonry"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode"), require("masonry-layout")) : b(a.Isotope.LayoutMode, a.Masonry)
  }(window, function (a, b) {
    "use strict";

    function c(a, b) {
      for (var c in b) a[c] = b[c];
      return a
    }
    var d = a.create("masonry"),
      e = d.prototype._getElementOffset,
      f = d.prototype.layout,
      g = d.prototype._getMeasurement;
    c(d.prototype, b.prototype), d.prototype._getElementOffset = e, d.prototype.layout = f, d.prototype._getMeasurement = g;
    var h = d.prototype.measureColumns;
    d.prototype.measureColumns = function () {
      this.items = this.isotope.filteredItems, h.call(this)
    };
    var i = d.prototype._manageStamp;
    return d.prototype._manageStamp = function () {
      this.options.isOriginLeft = this.isotope.options.isOriginLeft, this.options.isOriginTop = this.isotope.options.isOriginTop, i.apply(this, arguments)
    }, d
  }),
  function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
  }(window, function (a) {
    "use strict";
    var b = a.create("fitRows");
    return b.prototype._resetLayout = function () {
      this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, b.prototype._getItemLayoutPosition = function (a) {
      a.getSize();
      var b = a.size.outerWidth + this.gutter,
        c = this.isotope.size.innerWidth + this.gutter;
      0 !== this.x && b + this.x > c && (this.x = 0, this.y = this.maxY);
      var d = {
        x: this.x,
        y: this.y
      };
      return this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight), this.x += b, d
    }, b.prototype._getContainerSize = function () {
      return {
        height: this.maxY
      }
    }, b
  }),
  function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], b) : "object" == typeof exports ? module.exports = b(require("../layout-mode")) : b(a.Isotope.LayoutMode)
  }(window, function (a) {
    "use strict";
    var b = a.create("vertical", {
      horizontalAlignment: 0
    });
    return b.prototype._resetLayout = function () {
      this.y = 0
    }, b.prototype._getItemLayoutPosition = function (a) {
      a.getSize();
      var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
        c = this.y;
      return this.y += a.size.outerHeight, {
        x: b,
        y: c
      }
    }, b.prototype._getContainerSize = function () {
      return {
        height: this.y
      }
    }, b
  }),
  function (a, b) {
    "use strict";
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope/js/item", "isotope/js/layout-mode", "isotope/js/layout-modes/masonry", "isotope/js/layout-modes/fit-rows", "isotope/js/layout-modes/vertical"], function (c, d, e, f, g, h) {
      return b(a, c, d, e, f, g, h)
    }) : "object" == typeof exports ? module.exports = b(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("./item"), require("./layout-mode"), require("./layout-modes/masonry"), require("./layout-modes/fit-rows"), require("./layout-modes/vertical")) : a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
  }(window, function (a, b, c, d, e, f, g) {
    function h(a, b) {
      return function (c, d) {
        for (var e = 0, f = a.length; f > e; e++) {
          var g = a[e],
            h = c.sortData[g],
            i = d.sortData[g];
          if (h > i || i > h) {
            var j = void 0 !== b[g] ? b[g] : b,
              k = j ? 1 : -1;
            return (h > i ? 1 : -1) * k
          }
        }
        return 0
      }
    }
    var i = a.jQuery,
      j = String.prototype.trim ? function (a) {
        return a.trim()
      } : function (a) {
        return a.replace(/^\s+|\s+$/g, "")
      },
      k = document.documentElement,
      l = k.textContent ? function (a) {
        return a.textContent
      } : function (a) {
        return a.innerText
      },
      m = b.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0
      });
    m.Item = f, m.LayoutMode = g, m.prototype._create = function () {
      this.itemGUID = 0, this._sorters = {}, this._getSorters(), b.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
      for (var a in g.modes) this._initLayoutMode(a)
    }, m.prototype.reloadItems = function () {
      this.itemGUID = 0, b.prototype.reloadItems.call(this)
    }, m.prototype._itemize = function () {
      for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
        var e = a[c];
        e.id = this.itemGUID++
      }
      return this._updateItemsSortData(a), a
    }, m.prototype._initLayoutMode = function (a) {
      var b = g.modes[a],
        c = this.options[a] || {};
      this.options[a] = b.options ? e.extend(b.options, c) : c, this.modes[a] = new b(this)
    }, m.prototype.layout = function () {
      return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout()
    }, m.prototype._layout = function () {
      var a = this._getIsInstant();
      this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), this._isLayoutInited = !0
    }, m.prototype.arrange = function (a) {
      function b() {
        d.reveal(c.needReveal), d.hide(c.needHide)
      }
      this.option(a), this._getIsInstant();
      var c = this._filter(this.items);
      this.filteredItems = c.matches;
      var d = this;
      this._bindArrangeComplete(), this._isInstant ? this._noTransition(b) : b(), this._sort(), this._layout()
    }, m.prototype._init = m.prototype.arrange, m.prototype._getIsInstant = function () {
      var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
      return this._isInstant = a, a
    }, m.prototype._bindArrangeComplete = function () {
      function a() {
        b && c && d && e.dispatchEvent("arrangeComplete", null, [e.filteredItems])
      }
      var b, c, d, e = this;
      this.once("layoutComplete", function () {
        b = !0, a()
      }), this.once("hideComplete", function () {
        c = !0, a()
      }), this.once("revealComplete", function () {
        d = !0, a()
      })
    }, m.prototype._filter = function (a) {
      var b = this.options.filter;
      b = b || "*";
      for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
        var i = a[g];
        if (!i.isIgnored) {
          var j = f(i);
          j && c.push(i), j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i)
        }
      }
      return {
        matches: c,
        needReveal: d,
        needHide: e
      }
    }, m.prototype._getFilterTest = function (a) {
      return i && this.options.isJQueryFiltering ? function (b) {
        return i(b.element).is(a)
      } : "function" == typeof a ? function (b) {
        return a(b.element)
      } : function (b) {
        return d(b.element, a)
      }
    }, m.prototype.updateSortData = function (a) {
      var b;
      a ? (a = e.makeArray(a), b = this.getItems(a)) : b = this.items, this._getSorters(), this._updateItemsSortData(b)
    }, m.prototype._getSorters = function () {
      var a = this.options.getSortData;
      for (var b in a) {
        var c = a[b];
        this._sorters[b] = n(c)
      }
    }, m.prototype._updateItemsSortData = function (a) {
      for (var b = a && a.length, c = 0; b && b > c; c++) {
        var d = a[c];
        d.updateSortData()
      }
    };
    var n = function () {
      function a(a) {
        if ("string" != typeof a) return a;
        var c = j(a).split(" "),
          d = c[0],
          e = d.match(/^\[(.+)\]$/),
          f = e && e[1],
          g = b(f, d),
          h = m.sortDataParsers[c[1]];
        return a = h ? function (a) {
          return a && h(g(a))
        } : function (a) {
          return a && g(a)
        }
      }

      function b(a, b) {
        var c;
        return c = a ? function (b) {
          return b.getAttribute(a)
        } : function (a) {
          var c = a.querySelector(b);
          return c && l(c)
        }
      }
      return a
    }();
    m.sortDataParsers = {
      parseInt: function (a) {
        return parseInt(a, 10)
      },
      parseFloat: function (a) {
        return parseFloat(a)
      }
    }, m.prototype._sort = function () {
      var a = this.options.sortBy;
      if (a) {
        var b = [].concat.apply(a, this.sortHistory),
          c = h(b, this.options.sortAscending);
        this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a)
      }
    }, m.prototype._mode = function () {
      var a = this.options.layoutMode,
        b = this.modes[a];
      if (!b) throw new Error("No layout mode: " + a);
      return b.options = this.options[a], b
    }, m.prototype._resetLayout = function () {
      b.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, m.prototype._getItemLayoutPosition = function (a) {
      return this._mode()._getItemLayoutPosition(a)
    }, m.prototype._manageStamp = function (a) {
      this._mode()._manageStamp(a)
    }, m.prototype._getContainerSize = function () {
      return this._mode()._getContainerSize()
    }, m.prototype.needsResizeLayout = function () {
      return this._mode().needsResizeLayout()
    }, m.prototype.appended = function (a) {
      var b = this.addItems(a);
      if (b.length) {
        var c = this._filterRevealAdded(b);
        this.filteredItems = this.filteredItems.concat(c)
      }
    }, m.prototype.prepended = function (a) {
      var b = this._itemize(a);
      if (b.length) {
        this._resetLayout(), this._manageStamps();
        var c = this._filterRevealAdded(b);
        this.layoutItems(this.filteredItems), this.filteredItems = c.concat(this.filteredItems), this.items = b.concat(this.items)
      }
    }, m.prototype._filterRevealAdded = function (a) {
      var b = this._filter(a);
      return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches
    }, m.prototype.insert = function (a) {
      var b = this.addItems(a);
      if (b.length) {
        var c, d, e = b.length;
        for (c = 0; e > c; c++) d = b[c], this.element.appendChild(d.element);
        var f = this._filter(b).matches;
        for (c = 0; e > c; c++) b[c].isLayoutInstant = !0;
        for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
        this.reveal(f)
      }
    };
    var o = m.prototype.remove;
    return m.prototype.remove = function (a) {
      a = e.makeArray(a);
      var b = this.getItems(a);
      o.call(this, a);
      var c = b && b.length;
      if (c)
        for (var d = 0; c > d; d++) {
          var f = b[d];
          e.removeFrom(this.filteredItems, f)
        }
    }, m.prototype.shuffle = function () {
      for (var a = 0, b = this.items.length; b > a; a++) {
        var c = this.items[a];
        c.sortData.random = Math.random()
      }
      this.options.sortBy = "random", this._sort(), this._layout()
    }, m.prototype._noTransition = function (a) {
      var b = this.options.transitionDuration;
      this.options.transitionDuration = 0;
      var c = a.call(this);
      return this.options.transitionDuration = b, c
    }, m.prototype.getFilteredItemElements = function () {
      for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++) a.push(this.filteredItems[b].element);
      return a
    }, m
  });

/*! skrollr 0.6.29 (2014-11-17) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
(function (e, t, r) {
  "use strict";

  function n(r) {
    if (o = t.documentElement, a = t.body, Y(), lt = this, r = r || {}, mt = r.constants || {}, r.easing)
      for (var n in r.easing) X[n] = r.easing[n];
    Tt = r.edgeStrategy || "set", ft = {
      beforerender: r.beforerender,
      render: r.render,
      keyframe: r.keyframe
    }, ut = r.forceHeight !== !1, ut && (zt = r.scale || 1), pt = r.mobileDeceleration || x, gt = r.smoothScrolling !== !1, vt = r.smoothScrollingDuration || A, ht = {
      targetTop: lt.getScrollTop()
    }, Kt = (r.mobileCheck || function () {
      return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || e.opera)
    })(), Kt ? (ct = t.getElementById(r.skrollrBody || E), ct && it(), j(), Dt(o, [y, S], [T])) : Dt(o, [y, b], [T]), lt.refresh(), kt(e, "resize orientationchange", function () {
      var e = o.clientWidth,
        t = o.clientHeight;
      (t !== Bt || e !== $t) && (Bt = t, $t = e, _t = !0)
    });
    var i = R();
    return function l() {
      J(), St = i(l)
    }(), lt
  }
  var o, a, i = {
      get: function () {
        return lt
      },
      init: function (e) {
        return lt || new n(e)
      },
      VERSION: "0.6.29"
    },
    l = Object.prototype.hasOwnProperty,
    s = e.Math,
    c = e.getComputedStyle,
    f = "touchstart",
    u = "touchmove",
    m = "touchcancel",
    p = "touchend",
    d = "skrollable",
    g = d + "-before",
    v = d + "-between",
    h = d + "-after",
    y = "skrollr",
    T = "no-" + y,
    b = y + "-desktop",
    S = y + "-mobile",
    k = "linear",
    w = 1e3,
    x = .004,
    E = "skrollr-body",
    A = 200,
    F = "start",
    C = "end",
    H = "center",
    D = "bottom",
    I = "___skrollable_id",
    P = /^(?:input|textarea|button|select)$/i,
    N = /^\s+|\s+$/g,
    O = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
    V = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
    z = /^(@?[a-z\-]+)\[(\w+)\]$/,
    q = /-([a-z0-9_])/g,
    L = function (e, t) {
      return t.toUpperCase()
    },
    M = /[\-+]?[\d]*\.?[\d]+/g,
    $ = /\{\?\}/g,
    B = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
    _ = /[a-z\-]+-gradient/g,
    G = "",
    K = "",
    Y = function () {
      var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
      if (c) {
        var t = c(a, null);
        for (var n in t)
          if (G = n.match(e) || +n == n && t[n].match(e)) break;
        if (!G) return G = K = "", r;
        G = G[0], "-" === G.slice(0, 1) ? (K = G, G = {
          "-webkit-": "webkit",
          "-moz-": "Moz",
          "-ms-": "ms",
          "-o-": "O"
        } [G]) : K = "-" + G.toLowerCase() + "-"
      }
    },
    R = function () {
      var t = e.requestAnimationFrame || e[G.toLowerCase() + "RequestAnimationFrame"],
        r = Nt();
      return (Kt || !t) && (t = function (t) {
        var n = Nt() - r,
          o = s.max(0, 1e3 / 60 - n);
        return e.setTimeout(function () {
          r = Nt(), t()
        }, o)
      }), t
    },
    U = function () {
      var t = e.cancelAnimationFrame || e[G.toLowerCase() + "CancelAnimationFrame"];
      return (Kt || !t) && (t = function (t) {
        return e.clearTimeout(t)
      }), t
    },
    X = {
      begin: function () {
        return 0
      },
      end: function () {
        return 1
      },
      linear: function (e) {
        return e
      },
      quadratic: function (e) {
        return e * e
      },
      cubic: function (e) {
        return e * e * e
      },
      swing: function (e) {
        return -s.cos(e * s.PI) / 2 + .5
      },
      sqrt: function (e) {
        return s.sqrt(e)
      },
      outCubic: function (e) {
        return s.pow(e - 1, 3) + 1
      },
      bounce: function (e) {
        var t;
        if (.5083 >= e) t = 3;
        else if (.8489 >= e) t = 9;
        else if (.96208 >= e) t = 27;
        else {
          if (!(.99981 >= e)) return 1;
          t = 91
        }
        return 1 - s.abs(3 * s.cos(1.028 * e * t) / t)
      }
    };
  n.prototype.refresh = function (e) {
    var n, o, a = !1;
    for (e === r ? (a = !0, st = [], Gt = 0, e = t.getElementsByTagName("*")) : e.length === r && (e = [e]), n = 0, o = e.length; o > n; n++) {
      var i = e[n],
        l = i,
        s = [],
        c = gt,
        f = Tt,
        u = !1;
      if (a && I in i && delete i[I], i.attributes) {
        for (var m = 0, p = i.attributes.length; p > m; m++) {
          var g = i.attributes[m];
          if ("data-anchor-target" !== g.name)
            if ("data-smooth-scrolling" !== g.name)
              if ("data-edge-strategy" !== g.name)
                if ("data-emit-events" !== g.name) {
                  var v = g.name.match(O);
                  if (null !== v) {
                    var h = {
                      props: g.value,
                      element: i,
                      eventType: g.name.replace(q, L)
                    };
                    s.push(h);
                    var y = v[1];
                    y && (h.constant = y.substr(1));
                    var T = v[2];
                    /p$/.test(T) ? (h.isPercentage = !0, h.offset = (0 | T.slice(0, -1)) / 100) : h.offset = 0 | T;
                    var b = v[3],
                      S = v[4] || b;
                    b && b !== F && b !== C ? (h.mode = "relative", h.anchors = [b, S]) : (h.mode = "absolute", b === C ? h.isEnd = !0 : h.isPercentage || (h.offset = h.offset * zt))
                  }
                } else u = !0;
          else f = g.value;
          else c = "off" !== g.value;
          else if (l = t.querySelector(g.value), null === l) throw 'Unable to find anchor target "' + g.value + '"'
        }
        if (s.length) {
          var k, w, x;
          !a && I in i ? (x = i[I], k = st[x].styleAttr, w = st[x].classAttr) : (x = i[I] = Gt++, k = i.style.cssText, w = Ht(i)), st[x] = {
            element: i,
            styleAttr: k,
            classAttr: w,
            anchorTarget: l,
            keyFrames: s,
            smoothScrolling: c,
            edgeStrategy: f,
            emitEvents: u,
            lastFrameIndex: -1
          }, Dt(i, [d], [])
        }
      }
    }
    for (At(), n = 0, o = e.length; o > n; n++) {
      var E = st[e[n][I]];
      E !== r && (Q(E), tt(E))
    }
    return lt
  }, n.prototype.relativeToAbsolute = function (e, t, r) {
    var n = o.clientHeight,
      a = e.getBoundingClientRect(),
      i = a.top,
      l = a.bottom - a.top;
    return t === D ? i -= n : t === H && (i -= n / 2), r === D ? i += l : r === H && (i += l / 2), i += lt.getScrollTop(), 0 | i + .5
  }, n.prototype.animateTo = function (e, t) {
    t = t || {};
    var n = Nt(),
      o = lt.getScrollTop();
    return dt = {
      startTop: o,
      topDiff: e - o,
      targetTop: e,
      duration: t.duration || w,
      startTime: n,
      endTime: n + (t.duration || w),
      easing: X[t.easing || k],
      done: t.done
    }, dt.topDiff || (dt.done && dt.done.call(lt, !1), dt = r), lt
  }, n.prototype.stopAnimateTo = function () {
    dt && dt.done && dt.done.call(lt, !0), dt = r
  }, n.prototype.isAnimatingTo = function () {
    return !!dt
  }, n.prototype.isMobile = function () {
    return Kt
  }, n.prototype.setScrollTop = function (t, r) {
    return yt = r === !0, Kt ? Yt = s.min(s.max(t, 0), Vt) : e.scrollTo(0, t), lt
  }, n.prototype.getScrollTop = function () {
    return Kt ? Yt : e.pageYOffset || o.scrollTop || a.scrollTop || 0
  }, n.prototype.getMaxScrollTop = function () {
    return Vt
  }, n.prototype.on = function (e, t) {
    return ft[e] = t, lt
  }, n.prototype.off = function (e) {
    return delete ft[e], lt
  }, n.prototype.destroy = function () {
    var e = U();
    e(St), xt(), Dt(o, [T], [y, b, S]);
    for (var t = 0, n = st.length; n > t; t++) at(st[t].element);
    o.style.overflow = a.style.overflow = "", o.style.height = a.style.height = "", ct && i.setStyle(ct, "transform", "none"), lt = r, ct = r, ft = r, ut = r, Vt = 0, zt = 1, mt = r, pt = r, qt = "down", Lt = -1, $t = 0, Bt = 0, _t = !1, dt = r, gt = r, vt = r, ht = r, yt = r, Gt = 0, Tt = r, Kt = !1, Yt = 0, bt = r
  };
  var j = function () {
      var n, i, l, c, d, g, v, h, y, T, b, S;
      kt(o, [f, u, m, p].join(" "), function (e) {
        var o = e.changedTouches[0];
        for (c = e.target; 3 === c.nodeType;) c = c.parentNode;
        switch (d = o.clientY, g = o.clientX, T = e.timeStamp, P.test(c.tagName) || e.preventDefault(), e.type) {
          case f:
            n && n.blur(), lt.stopAnimateTo(), n = c, i = v = d, l = g, y = T;
            break;
          case u:
            P.test(c.tagName) && t.activeElement !== c && e.preventDefault(), h = d - v, S = T - b, lt.setScrollTop(Yt - h, !0), v = d, b = T;
            break;
          default:
          case m:
          case p:
            var a = i - d,
              k = l - g,
              w = k * k + a * a;
            if (49 > w) {
              if (!P.test(n.tagName)) {
                n.focus();
                var x = t.createEvent("MouseEvents");
                x.initMouseEvent("click", !0, !0, e.view, 1, o.screenX, o.screenY, o.clientX, o.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), n.dispatchEvent(x)
              }
              return
            }
            n = r;
            var E = h / S;
            E = s.max(s.min(E, 3), -3);
            var A = s.abs(E / pt),
              F = E * A + .5 * pt * A * A,
              C = lt.getScrollTop() - F,
              H = 0;
            C > Vt ? (H = (Vt - C) / F, C = Vt) : 0 > C && (H = -C / F, C = 0), A *= 1 - H, lt.animateTo(0 | C + .5, {
              easing: "outCubic",
              duration: A
            })
        }
      }), e.scrollTo(0, 0), o.style.overflow = a.style.overflow = "hidden"
    },
    W = function () {
      var e, t, r, n, a, i, l, c, f, u, m, p = o.clientHeight,
        d = Ft();
      for (c = 0, f = st.length; f > c; c++)
        for (e = st[c], t = e.element, r = e.anchorTarget, n = e.keyFrames, a = 0, i = n.length; i > a; a++) l = n[a], u = l.offset, m = d[l.constant] || 0, l.frame = u, l.isPercentage && (u *= p, l.frame = u), "relative" === l.mode && (at(t), l.frame = lt.relativeToAbsolute(r, l.anchors[0], l.anchors[1]) - u, at(t, !0)), l.frame += m, ut && !l.isEnd && l.frame > Vt && (Vt = l.frame);
      for (Vt = s.max(Vt, Ct()), c = 0, f = st.length; f > c; c++) {
        for (e = st[c], n = e.keyFrames, a = 0, i = n.length; i > a; a++) l = n[a], m = d[l.constant] || 0, l.isEnd && (l.frame = Vt - l.offset + m);
        e.keyFrames.sort(Ot)
      }
    },
    Z = function (e, t) {
      for (var r = 0, n = st.length; n > r; r++) {
        var o, a, s = st[r],
          c = s.element,
          f = s.smoothScrolling ? e : t,
          u = s.keyFrames,
          m = u.length,
          p = u[0],
          y = u[u.length - 1],
          T = p.frame > f,
          b = f > y.frame,
          S = T ? p : y,
          k = s.emitEvents,
          w = s.lastFrameIndex;
        if (T || b) {
          if (T && -1 === s.edge || b && 1 === s.edge) continue;
          switch (T ? (Dt(c, [g], [h, v]), k && w > -1 && (Et(c, p.eventType, qt), s.lastFrameIndex = -1)) : (Dt(c, [h], [g, v]), k && m > w && (Et(c, y.eventType, qt), s.lastFrameIndex = m)), s.edge = T ? -1 : 1, s.edgeStrategy) {
            case "reset":
              at(c);
              continue;
            case "ease":
              f = S.frame;
              break;
            default:
            case "set":
              var x = S.props;
              for (o in x) l.call(x, o) && (a = ot(x[o].value), 0 === o.indexOf("@") ? c.setAttribute(o.substr(1), a) : i.setStyle(c, o, a));
              continue
          }
        } else 0 !== s.edge && (Dt(c, [d, v], [g, h]), s.edge = 0);
        for (var E = 0; m - 1 > E; E++)
          if (f >= u[E].frame && u[E + 1].frame >= f) {
            var A = u[E],
              F = u[E + 1];
            for (o in A.props)
              if (l.call(A.props, o)) {
                var C = (f - A.frame) / (F.frame - A.frame);
                C = A.props[o].easing(C), a = nt(A.props[o].value, F.props[o].value, C), a = ot(a), 0 === o.indexOf("@") ? c.setAttribute(o.substr(1), a) : i.setStyle(c, o, a)
              } k && w !== E && ("down" === qt ? Et(c, A.eventType, qt) : Et(c, F.eventType, qt), s.lastFrameIndex = E);
            break
          }
      }
    },
    J = function () {
      _t && (_t = !1, At());
      var e, t, n = lt.getScrollTop(),
        o = Nt();
      if (dt) o >= dt.endTime ? (n = dt.targetTop, e = dt.done, dt = r) : (t = dt.easing((o - dt.startTime) / dt.duration), n = 0 | dt.startTop + t * dt.topDiff), lt.setScrollTop(n, !0);
      else if (!yt) {
        var a = ht.targetTop - n;
        a && (ht = {
          startTop: Lt,
          topDiff: n - Lt,
          targetTop: n,
          startTime: Mt,
          endTime: Mt + vt
        }), ht.endTime >= o && (t = X.sqrt((o - ht.startTime) / vt), n = 0 | ht.startTop + t * ht.topDiff)
      }
      if (Kt && ct && i.setStyle(ct, "transform", "translate(0, " + -Yt + "px) " + bt), yt || Lt !== n) {
        qt = n > Lt ? "down" : Lt > n ? "up" : qt, yt = !1;
        var l = {
            curTop: n,
            lastTop: Lt,
            maxTop: Vt,
            direction: qt
          },
          s = ft.beforerender && ft.beforerender.call(lt, l);
        s !== !1 && (Z(n, lt.getScrollTop()), Lt = n, ft.render && ft.render.call(lt, l)), e && e.call(lt, !1)
      }
      Mt = o
    },
    Q = function (e) {
      for (var t = 0, r = e.keyFrames.length; r > t; t++) {
        for (var n, o, a, i, l = e.keyFrames[t], s = {}; null !== (i = V.exec(l.props));) a = i[1], o = i[2], n = a.match(z), null !== n ? (a = n[1], n = n[2]) : n = k, o = o.indexOf("!") ? et(o) : [o.slice(1)], s[a] = {
          value: o,
          easing: X[n]
        };
        l.props = s
      }
    },
    et = function (e) {
      var t = [];
      return B.lastIndex = 0, e = e.replace(B, function (e) {
        return e.replace(M, function (e) {
          return 100 * (e / 255) + "%"
        })
      }), K && (_.lastIndex = 0, e = e.replace(_, function (e) {
        return K + e
      })), e = e.replace(M, function (e) {
        return t.push(+e), "{?}"
      }), t.unshift(e), t
    },
    tt = function (e) {
      var t, r, n = {};
      for (t = 0, r = e.keyFrames.length; r > t; t++) rt(e.keyFrames[t], n);
      for (n = {}, t = e.keyFrames.length - 1; t >= 0; t--) rt(e.keyFrames[t], n)
    },
    rt = function (e, t) {
      var r;
      for (r in t) l.call(e.props, r) || (e.props[r] = t[r]);
      for (r in e.props) t[r] = e.props[r]
    },
    nt = function (e, t, r) {
      var n, o = e.length;
      if (o !== t.length) throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
      var a = [e[0]];
      for (n = 1; o > n; n++) a[n] = e[n] + (t[n] - e[n]) * r;
      return a
    },
    ot = function (e) {
      var t = 1;
      return $.lastIndex = 0, e[0].replace($, function () {
        return e[t++]
      })
    },
    at = function (e, t) {
      e = [].concat(e);
      for (var r, n, o = 0, a = e.length; a > o; o++) n = e[o], r = st[n[I]], r && (t ? (n.style.cssText = r.dirtyStyleAttr, Dt(n, r.dirtyClassAttr)) : (r.dirtyStyleAttr = n.style.cssText, r.dirtyClassAttr = Ht(n), n.style.cssText = r.styleAttr, Dt(n, r.classAttr)))
    },
    it = function () {
      bt = "translateZ(0)", i.setStyle(ct, "transform", bt);
      var e = c(ct),
        t = e.getPropertyValue("transform"),
        r = e.getPropertyValue(K + "transform"),
        n = t && "none" !== t || r && "none" !== r;
      n || (bt = "")
    };
  i.setStyle = function (e, t, r) {
    var n = e.style;
    if (t = t.replace(q, L).replace("-", ""), "zIndex" === t) n[t] = isNaN(r) ? r : "" + (0 | r);
    else if ("float" === t) n.styleFloat = n.cssFloat = r;
    else try {
      G && (n[G + t.slice(0, 1).toUpperCase() + t.slice(1)] = r), n[t] = r
    } catch (o) {}
  };
  var lt, st, ct, ft, ut, mt, pt, dt, gt, vt, ht, yt, Tt, bt, St, kt = i.addEvent = function (t, r, n) {
      var o = function (t) {
        return t = t || e.event, t.target || (t.target = t.srcElement), t.preventDefault || (t.preventDefault = function () {
          t.returnValue = !1, t.defaultPrevented = !0
        }), n.call(this, t)
      };
      r = r.split(" ");
      for (var a, i = 0, l = r.length; l > i; i++) a = r[i], t.addEventListener ? t.addEventListener(a, n, !1) : t.attachEvent("on" + a, o), Rt.push({
        element: t,
        name: a,
        listener: n
      })
    },
    wt = i.removeEvent = function (e, t, r) {
      t = t.split(" ");
      for (var n = 0, o = t.length; o > n; n++) e.removeEventListener ? e.removeEventListener(t[n], r, !1) : e.detachEvent("on" + t[n], r)
    },
    xt = function () {
      for (var e, t = 0, r = Rt.length; r > t; t++) e = Rt[t], wt(e.element, e.name, e.listener);
      Rt = []
    },
    Et = function (e, t, r) {
      ft.keyframe && ft.keyframe.call(lt, e, t, r)
    },
    At = function () {
      var e = lt.getScrollTop();
      Vt = 0, ut && !Kt && (a.style.height = ""), W(), ut && !Kt && (a.style.height = Vt + o.clientHeight + "px"), Kt ? lt.setScrollTop(s.min(lt.getScrollTop(), Vt)) : lt.setScrollTop(e, !0), yt = !0
    },
    Ft = function () {
      var e, t, r = o.clientHeight,
        n = {};
      for (e in mt) t = mt[e], "function" == typeof t ? t = t.call(lt) : /p$/.test(t) && (t = t.slice(0, -1) / 100 * r), n[e] = t;
      return n
    },
    Ct = function () {
      var e, t = 0;
      return ct && (t = s.max(ct.offsetHeight, ct.scrollHeight)), e = s.max(t, a.scrollHeight, a.offsetHeight, o.scrollHeight, o.offsetHeight, o.clientHeight), e - o.clientHeight
    },
    Ht = function (t) {
      var r = "className";
      return e.SVGElement && t instanceof e.SVGElement && (t = t[r], r = "baseVal"), t[r]
    },
    Dt = function (t, n, o) {
      var a = "className";
      if (e.SVGElement && t instanceof e.SVGElement && (t = t[a], a = "baseVal"), o === r) return t[a] = n, r;
      for (var i = t[a], l = 0, s = o.length; s > l; l++) i = Pt(i).replace(Pt(o[l]), " ");
      i = It(i);
      for (var c = 0, f = n.length; f > c; c++) - 1 === Pt(i).indexOf(Pt(n[c])) && (i += " " + n[c]);
      t[a] = It(i)
    },
    It = function (e) {
      return e.replace(N, "")
    },
    Pt = function (e) {
      return " " + e + " "
    },
    Nt = Date.now || function () {
      return +new Date
    },
    Ot = function (e, t) {
      return e.frame - t.frame
    },
    Vt = 0,
    zt = 1,
    qt = "down",
    Lt = -1,
    Mt = Nt(),
    $t = 0,
    Bt = 0,
    _t = !1,
    Gt = 0,
    Kt = !1,
    Yt = 0,
    Rt = [];
  "function" == typeof define && define.amd ? define([], function () {
    return i
  }) : "undefined" != typeof module && module.exports ? module.exports = i : e.skrollr = i
})(window, document);

/*
 * jQuery.appear
 * https://github.com/bas2k/jquery.appear/
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Copyright (c) 2012 Alexander Brovikov
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 */
(function (e) {
  e.fn.appear = function (t, n) {
    var r = e.extend({
      data: undefined,
      one: true,
      accX: 0,
      accY: 0
    }, n);
    return this.each(function () {
      var n = e(this);
      n.appeared = false;
      if (!t) {
        n.trigger("appear", r.data);
        return
      }
      var i = e(window);
      var s = function () {
        if (!n.is(":visible")) {
          n.appeared = false;
          return
        }
        var e = i.scrollLeft();
        var t = i.scrollTop();
        var s = n.offset();
        var o = s.left;
        var u = s.top;
        var a = r.accX;
        var f = r.accY;
        var l = n.height();
        var c = i.height();
        var h = n.width();
        var p = i.width();
        if (u + l + f >= t && u <= t + c + f && o + h + a >= e && o <= e + p + a) {
          if (!n.appeared) n.trigger("appear", r.data)
        } else {
          n.appeared = false
        }
      };
      var o = function () {
        n.appeared = true;
        if (r.one) {
          i.unbind("scroll", s);
          var o = e.inArray(s, e.fn.appear.checks);
          if (o >= 0) e.fn.appear.checks.splice(o, 1)
        }
        t.apply(this, arguments)
      };
      if (r.one) n.one("appear", r.data, o);
      else n.bind("appear", r.data, o);
      i.scroll(s);
      e.fn.appear.checks.push(s);
      s()
    })
  };
  e.extend(e.fn.appear, {
    checks: [],
    timeout: null,
    checkAll: function () {
      var t = e.fn.appear.checks.length;
      if (t > 0)
        while (t--) e.fn.appear.checks[t]()
    },
    run: function () {
      if (e.fn.appear.timeout) clearTimeout(e.fn.appear.timeout);
      e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
    }
  });
  e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function (t, n) {
    var r = e.fn[n];
    if (r) {
      e.fn[n] = function () {
        var t = r.apply(this, arguments);
        e.fn.appear.run();
        return t
      }
    }
  })
})(jQuery);
(function (e) {
  e.fn.countTo = function (t) {
    t = e.extend({}, e.fn.countTo.defaults, t || {});
    var n = Math.ceil(t.speed / t.refreshInterval),
      r = (t.to - t.from) / n;
    return e(this).each(function () {
      function a() {
        o += r;
        s++;
        e(i).html(o.toFixed(t.decimals));
        if (typeof t.onUpdate == "function") {
          t.onUpdate.call(i, o)
        }
        if (s >= n) {
          clearInterval(u);
          o = t.to;
          if (typeof t.onComplete == "function") {
            t.onComplete.call(i, o)
          }
        }
      }
      var i = this,
        s = 0,
        o = t.from,
        u = setInterval(a, t.refreshInterval)
    })
  };
  e.fn.countTo.defaults = {
    from: 0,
    to: 100,
    speed: 1e3,
    refreshInterval: 100,
    decimals: 0,
    onUpdate: null,
    onComplete: null
  }
})(jQuery)

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (a) {
  "use strict";
  var b = a.fn.jquery.split(" ")[0].split(".");
  if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}(jQuery), + function (a) {
  "use strict";

  function b() {
    var a = document.createElement("bootstrap"),
      b = {
        WebkitTransition: "webkitTransitionEnd",
        MozTransition: "transitionend",
        OTransition: "oTransitionEnd otransitionend",
        transition: "transitionend"
      };
    for (var c in b)
      if (void 0 !== a.style[c]) return {
        end: b[c]
      };
    return !1
  }
  a.fn.emulateTransitionEnd = function (b) {
    var c = !1,
      d = this;
    a(this).one("bsTransitionEnd", function () {
      c = !0
    });
    var e = function () {
      c || a(d).trigger(a.support.transition.end)
    };
    return setTimeout(e, b), this
  }, a(function () {
    a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
      bindType: a.support.transition.end,
      delegateType: a.support.transition.end,
      handle: function (b) {
        return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
      }
    })
  })
}(jQuery), + function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var c = a(this),
        e = c.data("bs.alert");
      e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
    })
  }
  var c = '[data-dismiss="alert"]',
    d = function (b) {
      a(b).on("click", c, this.close)
    };
  d.VERSION = "3.3.5", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
    function c() {
      g.detach().trigger("closed.bs.alert").remove()
    }
    var e = a(this),
      f = e.attr("data-target");
    f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
    var g = a(f);
    b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
  };
  var e = a.fn.alert;
  a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
    return a.fn.alert = e, this
  }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), + function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
        e = d.data("bs.button"),
        f = "object" == typeof b && b;
      e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
    })
  }
  var c = function (b, d) {
    this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
  };
  c.VERSION = "3.3.5", c.DEFAULTS = {
    loadingText: "loading..."
  }, c.prototype.setState = function (b) {
    var c = "disabled",
      d = this.$element,
      e = d.is("input") ? "val" : "html",
      f = d.data();
    b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
      d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
    }, this), 0)
  }, c.prototype.toggle = function () {
    var a = !0,
      b = this.$element.closest('[data-toggle="buttons"]');
    if (b.length) {
      var c = this.$element.find("input");
      "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
  };
  var d = a.fn.button;
  a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
    return a.fn.button = d, this
  }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
    var d = a(c.target);
    d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
  }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
    a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
  })
}(jQuery), + function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
        e = d.data("bs.carousel"),
        f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b),
        g = "string" == typeof b ? b : f.slide;
      e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
    })
  }
  var c = function (b, c) {
    this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
  };
  c.VERSION = "3.3.5", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
  }, c.prototype.keydown = function (a) {
    if (!/input|textarea/i.test(a.target.tagName)) {
      switch (a.which) {
        case 37:
          this.prev();
          break;
        case 39:
          this.next();
          break;
        default:
          return
      }
      a.preventDefault()
    }
  }, c.prototype.cycle = function (b) {
    return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
  }, c.prototype.getItemIndex = function (a) {
    return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
  }, c.prototype.getItemForDirection = function (a, b) {
    var c = this.getItemIndex(b),
      d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
    if (d && !this.options.wrap) return b;
    var e = "prev" == a ? -1 : 1,
      f = (c + e) % this.$items.length;
    return this.$items.eq(f)
  }, c.prototype.to = function (a) {
    var b = this,
      c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
      b.to(a)
    }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
  }, c.prototype.pause = function (b) {
    return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
  }, c.prototype.next = function () {
    return this.sliding ? void 0 : this.slide("next")
  }, c.prototype.prev = function () {
    return this.sliding ? void 0 : this.slide("prev")
  }, c.prototype.slide = function (b, d) {
    var e = this.$element.find(".item.active"),
      f = d || this.getItemForDirection(b, e),
      g = this.interval,
      h = "next" == b ? "left" : "right",
      i = this;
    if (f.hasClass("active")) return this.sliding = !1;
    var j = f[0],
      k = a.Event("slide.bs.carousel", {
        relatedTarget: j,
        direction: h
      });
    if (this.$element.trigger(k), !k.isDefaultPrevented()) {
      if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
        this.$indicators.find(".active").removeClass("active");
        var l = a(this.$indicators.children()[this.getItemIndex(f)]);
        l && l.addClass("active")
      }
      var m = a.Event("slid.bs.carousel", {
        relatedTarget: j,
        direction: h
      });
      return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
        f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
          i.$element.trigger(m)
        }, 0)
      }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
    }
  };
  var d = a.fn.carousel;
  a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
    return a.fn.carousel = d, this
  };
  var e = function (c) {
    var d, e = a(this),
      f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
    if (f.hasClass("carousel")) {
      var g = a.extend({}, f.data(), e.data()),
        h = e.attr("data-slide-to");
      h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
    }
  };
  a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
    a('[data-ride="carousel"]').each(function () {
      var c = a(this);
      b.call(c, c.data())
    })
  })
}(jQuery), + function (a) {
  "use strict";

  function b(b) {
    var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
    return a(d)
  }

  function c(b) {
    return this.each(function () {
      var c = a(this),
        e = c.data("bs.collapse"),
        f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
      !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
    })
  }
  var d = function (b, c) {
    this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
  };
  d.VERSION = "3.3.5", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
    toggle: !0
  }, d.prototype.dimension = function () {
    var a = this.$element.hasClass("width");
    return a ? "width" : "height"
  }, d.prototype.show = function () {
    if (!this.transitioning && !this.$element.hasClass("in")) {
      var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
      if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
        var f = a.Event("show.bs.collapse");
        if (this.$element.trigger(f), !f.isDefaultPrevented()) {
          e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
          var g = this.dimension();
          this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
          var h = function () {
            this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
          };
          if (!a.support.transition) return h.call(this);
          var i = a.camelCase(["scroll", g].join("-"));
          this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
        }
      }
    }
  }, d.prototype.hide = function () {
    if (!this.transitioning && this.$element.hasClass("in")) {
      var b = a.Event("hide.bs.collapse");
      if (this.$element.trigger(b), !b.isDefaultPrevented()) {
        var c = this.dimension();
        this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
        var e = function () {
          this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
        };
        return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
      }
    }
  }, d.prototype.toggle = function () {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
  }, d.prototype.getParent = function () {
    return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
      var e = a(d);
      this.addAriaAndCollapsedClass(b(e), e)
    }, this)).end()
  }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
    var c = a.hasClass("in");
    a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
  };
  var e = a.fn.collapse;
  a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
    return a.fn.collapse = e, this
  }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
    var e = a(this);
    e.attr("data-target") || d.preventDefault();
    var f = b(e),
      g = f.data("bs.collapse"),
      h = g ? "toggle" : e.data();
    c.call(f, h)
  })
}(jQuery), + function (a) {
  "use strict";

  function b(b) {
    var c = b.attr("data-target");
    c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
    var d = c && a(c);
    return d && d.length ? d : b.parent()
  }

  function c(c) {
    c && 3 === c.which || (a(e).remove(), a(f).each(function () {
      var d = a(this),
        e = b(d),
        f = {
          relatedTarget: this
        };
      e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger("hidden.bs.dropdown", f))))
    }))
  }

  function d(b) {
    return this.each(function () {
      var c = a(this),
        d = c.data("bs.dropdown");
      d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
    })
  }
  var e = ".dropdown-backdrop",
    f = '[data-toggle="dropdown"]',
    g = function (b) {
      a(b).on("click.bs.dropdown", this.toggle)
    };
  g.VERSION = "3.3.5", g.prototype.toggle = function (d) {
    var e = a(this);
    if (!e.is(".disabled, :disabled")) {
      var f = b(e),
        g = f.hasClass("open");
      if (c(), !g) {
        "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
        var h = {
          relatedTarget: this
        };
        if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
        e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger("shown.bs.dropdown", h)
      }
      return !1
    }
  }, g.prototype.keydown = function (c) {
    if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
      var d = a(this);
      if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
        var e = b(d),
          g = e.hasClass("open");
        if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
        var h = " li:not(.disabled):visible a",
          i = e.find(".dropdown-menu" + h);
        if (i.length) {
          var j = i.index(c.target);
          38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
        }
      }
    }
  };
  var h = a.fn.dropdown;
  a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
    return a.fn.dropdown = h, this
  }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
    a.stopPropagation()
  }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function (a) {
  "use strict";

  function b(b, d) {
    return this.each(function () {
      var e = a(this),
        f = e.data("bs.modal"),
        g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
      f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
    })
  }
  var c = function (b, c) {
    this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
      this.$element.trigger("loaded.bs.modal")
    }, this))
  };
  c.VERSION = "3.3.5", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
  }, c.prototype.toggle = function (a) {
    return this.isShown ? this.hide() : this.show(a)
  }, c.prototype.show = function (b) {
    var d = this,
      e = a.Event("show.bs.modal", {
        relatedTarget: b
      });
    this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
      d.$element.one("mouseup.dismiss.bs.modal", function (b) {
        a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
      })
    }), this.backdrop(function () {
      var e = a.support.transition && d.$element.hasClass("fade");
      d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
      var f = a.Event("shown.bs.modal", {
        relatedTarget: b
      });
      e ? d.$dialog.one("bsTransitionEnd", function () {
        d.$element.trigger("focus").trigger(f)
      }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
    }))
  }, c.prototype.hide = function (b) {
    b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
  }, c.prototype.enforceFocus = function () {
    a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
      this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
    }, this))
  }, c.prototype.escape = function () {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
      27 == a.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
  }, c.prototype.resize = function () {
    this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
  }, c.prototype.hideModal = function () {
    var a = this;
    this.$element.hide(), this.backdrop(function () {
      a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
    })
  }, c.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
  }, c.prototype.backdrop = function (b) {
    var d = this,
      e = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
      var f = a.support.transition && e;
      if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
          return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
        }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
      f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass("in");
      var g = function () {
        d.removeBackdrop(), b && b()
      };
      a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
    } else b && b()
  }, c.prototype.handleUpdate = function () {
    this.adjustDialog()
  }, c.prototype.adjustDialog = function () {
    var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
      paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
    })
  }, c.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: "",
      paddingRight: ""
    })
  }, c.prototype.checkScrollbar = function () {
    var a = window.innerWidth;
    if (!a) {
      var b = document.documentElement.getBoundingClientRect();
      a = b.right - Math.abs(b.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
  }, c.prototype.setScrollbar = function () {
    var a = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
  }, c.prototype.resetScrollbar = function () {
    this.$body.css("padding-right", this.originalBodyPad)
  }, c.prototype.measureScrollbar = function () {
    var a = document.createElement("div");
    a.className = "modal-scrollbar-measure", this.$body.append(a);
    var b = a.offsetWidth - a.clientWidth;
    return this.$body[0].removeChild(a), b
  };
  var d = a.fn.modal;
  a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
    return a.fn.modal = d, this
  }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
    var d = a(this),
      e = d.attr("href"),
      f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
      g = f.data("bs.modal") ? "toggle" : a.extend({
        remote: !/#/.test(e) && e
      }, f.data(), d.data());
    d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
      a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
        d.is(":visible") && d.trigger("focus")
      })
    }), b.call(f, g, this)
  })
}(jQuery), + function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
        e = d.data("bs.tooltip"),
        f = "object" == typeof b && b;
      (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
    })
  }
  var c = function (a, b) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
  };
  c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
      selector: "body",
      padding: 0
    }
  }, c.prototype.init = function (b, c, d) {
    if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
        click: !1,
        hover: !1,
        focus: !1
      }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
      var g = e[f];
      if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
      else if ("manual" != g) {
        var h = "hover" == g ? "mouseenter" : "focusin",
          i = "hover" == g ? "mouseleave" : "focusout";
        this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
      }
    }
    this.options.selector ? this._options = a.extend({}, this.options, {
      trigger: "manual",
      selector: ""
    }) : this.fixTitle()
  }, c.prototype.getDefaults = function () {
    return c.DEFAULTS
  }, c.prototype.getOptions = function (b) {
    return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
      show: b.delay,
      hide: b.delay
    }), b
  }, c.prototype.getDelegateOptions = function () {
    var b = {},
      c = this.getDefaults();
    return this._options && a.each(this._options, function (a, d) {
      c[a] != d && (b[a] = d)
    }), b
  }, c.prototype.enter = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
      "in" == c.hoverState && c.show()
    }, c.options.delay.show)) : c.show())
  }, c.prototype.isInStateTrue = function () {
    for (var a in this.inState)
      if (this.inState[a]) return !0;
    return !1
  }, c.prototype.leave = function (b) {
    var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
    return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
      "out" == c.hoverState && c.hide()
    }, c.options.delay.hide)) : c.hide())
  }, c.prototype.show = function () {
    var b = a.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
      this.$element.trigger(b);
      var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
      if (b.isDefaultPrevented() || !d) return;
      var e = this,
        f = this.tip(),
        g = this.getUID(this.type);
      this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
      var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
        i = /\s?auto?\s?/i,
        j = i.test(h);
      j && (h = h.replace(i, "") || "top"), f.detach().css({
        top: 0,
        left: 0,
        display: "block"
      }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
      var k = this.getPosition(),
        l = f[0].offsetWidth,
        m = f[0].offsetHeight;
      if (j) {
        var n = h,
          o = this.getPosition(this.$viewport);
        h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
      }
      var p = this.getCalculatedOffset(h, k, l, m);
      this.applyPlacement(p, h);
      var q = function () {
        var a = e.hoverState;
        e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
      };
      a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
    }
  }, c.prototype.applyPlacement = function (b, c) {
    var d = this.tip(),
      e = d[0].offsetWidth,
      f = d[0].offsetHeight,
      g = parseInt(d.css("margin-top"), 10),
      h = parseInt(d.css("margin-left"), 10);
    isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
      using: function (a) {
        d.css({
          top: Math.round(a.top),
          left: Math.round(a.left)
        })
      }
    }, b), 0), d.addClass("in");
    var i = d[0].offsetWidth,
      j = d[0].offsetHeight;
    "top" == c && j != f && (b.top = b.top + f - j);
    var k = this.getViewportAdjustedDelta(c, b, i, j);
    k.left ? b.left += k.left : b.top += k.top;
    var l = /top|bottom/.test(c),
      m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
      n = l ? "offsetWidth" : "offsetHeight";
    d.offset(b), this.replaceArrow(m, d[0][n], l)
  }, c.prototype.replaceArrow = function (a, b, c) {
    this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
  }, c.prototype.setContent = function () {
    var a = this.tip(),
      b = this.getTitle();
    a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
  }, c.prototype.hide = function (b) {
    function d() {
      "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
    }
    var e = this,
      f = a(this.$tip),
      g = a.Event("hide.bs." + this.type);
    return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
  }, c.prototype.fixTitle = function () {
    var a = this.$element;
    (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
  }, c.prototype.hasContent = function () {
    return this.getTitle()
  }, c.prototype.getPosition = function (b) {
    b = b || this.$element;
    var c = b[0],
      d = "BODY" == c.tagName,
      e = c.getBoundingClientRect();
    null == e.width && (e = a.extend({}, e, {
      width: e.right - e.left,
      height: e.bottom - e.top
    }));
    var f = d ? {
        top: 0,
        left: 0
      } : b.offset(),
      g = {
        scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
      },
      h = d ? {
        width: a(window).width(),
        height: a(window).height()
      } : null;
    return a.extend({}, e, g, h, f)
  }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
    return "bottom" == a ? {
      top: b.top + b.height,
      left: b.left + b.width / 2 - c / 2
    } : "top" == a ? {
      top: b.top - d,
      left: b.left + b.width / 2 - c / 2
    } : "left" == a ? {
      top: b.top + b.height / 2 - d / 2,
      left: b.left - c
    } : {
      top: b.top + b.height / 2 - d / 2,
      left: b.left + b.width
    }
  }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
    var e = {
      top: 0,
      left: 0
    };
    if (!this.$viewport) return e;
    var f = this.options.viewport && this.options.viewport.padding || 0,
      g = this.getPosition(this.$viewport);
    if (/right|left/.test(a)) {
      var h = b.top - f - g.scroll,
        i = b.top + f - g.scroll + d;
      h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
    } else {
      var j = b.left - f,
        k = b.left + f + c;
      j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
    }
    return e
  }, c.prototype.getTitle = function () {
    var a, b = this.$element,
      c = this.options;
    return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
  }, c.prototype.getUID = function (a) {
    do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
    return a
  }, c.prototype.tip = function () {
    if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
  }, c.prototype.enable = function () {
    this.enabled = !0
  }, c.prototype.disable = function () {
    this.enabled = !1
  }, c.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }, c.prototype.toggle = function (b) {
    var c = this;
    b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
  }, c.prototype.destroy = function () {
    var a = this;
    clearTimeout(this.timeout), this.hide(function () {
      a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
    })
  };
  var d = a.fn.tooltip;
  a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
    return a.fn.tooltip = d, this
  }
}(jQuery), + function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
        e = d.data("bs.popover"),
        f = "object" == typeof b && b;
      (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
    })
  }
  var c = function (a, b) {
    this.init("popover", a, b)
  };
  if (!a.fn.tooltip) throw new Error("Popover%20requires%20tooltip.html");
  c.VERSION = "3.3.5", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
    return c.DEFAULTS
  }, c.prototype.setContent = function () {
    var a = this.tip(),
      b = this.getTitle(),
      c = this.getContent();
    a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
  }, c.prototype.hasContent = function () {
    return this.getTitle() || this.getContent()
  }, c.prototype.getContent = function () {
    var a = this.$element,
      b = this.options;
    return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
  }, c.prototype.arrow = function () {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
  };
  var d = a.fn.popover;
  a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
    return a.fn.popover = d, this
  }
}(jQuery), + function (a) {
  "use strict";

  function b(c, d) {
    this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
  }

  function c(c) {
    return this.each(function () {
      var d = a(this),
        e = d.data("bs.scrollspy"),
        f = "object" == typeof c && c;
      e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
    })
  }
  b.VERSION = "3.3.5", b.DEFAULTS = {
    offset: 10
  }, b.prototype.getScrollHeight = function () {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
  }, b.prototype.refresh = function () {
    var b = this,
      c = "offset",
      d = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
      var b = a(this),
        e = b.data("target") || b.attr("href"),
        f = /^#./.test(e) && a(e);
      return f && f.length && f.is(":visible") && [
        [f[c]().top + d, e]
      ] || null
    }).sort(function (a, b) {
      return a[0] - b[0]
    }).each(function () {
      b.offsets.push(this[0]), b.targets.push(this[1])
    })
  }, b.prototype.process = function () {
    var a, b = this.$scrollElement.scrollTop() + this.options.offset,
      c = this.getScrollHeight(),
      d = this.options.offset + c - this.$scrollElement.height(),
      e = this.offsets,
      f = this.targets,
      g = this.activeTarget;
    if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
    if (g && b < e[0]) return this.activeTarget = null, this.clear();
    for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
  }, b.prototype.activate = function (b) {
    this.activeTarget = b, this.clear();
    var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
      d = a(c).parents("li").addClass("active");
    d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")),
      d.trigger("activate.bs.scrollspy")
  }, b.prototype.clear = function () {
    a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
  };
  var d = a.fn.scrollspy;
  a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
    return a.fn.scrollspy = d, this
  }, a(window).on("load.bs.scrollspy.data-api", function () {
    a('[data-spy="scroll"]').each(function () {
      var b = a(this);
      c.call(b, b.data())
    })
  })
}(jQuery), + function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
        e = d.data("bs.tab");
      e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
    })
  }
  var c = function (b) {
    this.element = a(b)
  };
  c.VERSION = "3.3.5", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
    var b = this.element,
      c = b.closest("ul:not(.dropdown-menu)"),
      d = b.data("target");
    if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
      var e = c.find(".active:last a"),
        f = a.Event("hide.bs.tab", {
          relatedTarget: b[0]
        }),
        g = a.Event("show.bs.tab", {
          relatedTarget: e[0]
        });
      if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
        var h = a(d);
        this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
          e.trigger({
            type: "hidden.bs.tab",
            relatedTarget: b[0]
          }), b.trigger({
            type: "shown.bs.tab",
            relatedTarget: e[0]
          })
        })
      }
    }
  }, c.prototype.activate = function (b, d, e) {
    function f() {
      g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
    }
    var g = d.find("> .active"),
      h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
    g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
  };
  var d = a.fn.tab;
  a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
    return a.fn.tab = d, this
  };
  var e = function (c) {
    c.preventDefault(), b.call(a(this), "show")
  };
  a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function (a) {
  "use strict";

  function b(b) {
    return this.each(function () {
      var d = a(this),
        e = d.data("bs.affix"),
        f = "object" == typeof b && b;
      e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
    })
  }
  var c = function (b, d) {
    this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
  };
  c.VERSION = "3.3.5", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
    offset: 0,
    target: window
  }, c.prototype.getState = function (a, b, c, d) {
    var e = this.$target.scrollTop(),
      f = this.$element.offset(),
      g = this.$target.height();
    if (null != c && "top" == this.affixed) return c > e ? "top" : !1;
    if ("bottom" == this.affixed) return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
    var h = null == this.affixed,
      i = h ? e : f.top,
      j = h ? g : b;
    return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
  }, c.prototype.getPinnedOffset = function () {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(c.RESET).addClass("affix");
    var a = this.$target.scrollTop(),
      b = this.$element.offset();
    return this.pinnedOffset = b.top - a
  }, c.prototype.checkPositionWithEventLoop = function () {
    setTimeout(a.proxy(this.checkPosition, this), 1)
  }, c.prototype.checkPosition = function () {
    if (this.$element.is(":visible")) {
      var b = this.$element.height(),
        d = this.options.offset,
        e = d.top,
        f = d.bottom,
        g = Math.max(a(document).height(), a(document.body).height());
      "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
      var h = this.getState(g, b, e, f);
      if (this.affixed != h) {
        null != this.unpin && this.$element.css("top", "");
        var i = "affix" + (h ? "-" + h : ""),
          j = a.Event(i + ".bs.affix");
        if (this.$element.trigger(j), j.isDefaultPrevented()) return;
        this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
      }
      "bottom" == h && this.$element.offset({
        top: g - b - f
      })
    }
  };
  var d = a.fn.affix;
  a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
    return a.fn.affix = d, this
  }, a(window).on("load", function () {
    a('[data-spy="affix"]').each(function () {
      var c = a(this),
        d = c.data();
      d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
    })
  })
}(jQuery);

/*!
 * imagesLoaded PACKAGED v4.1.0
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

! function (t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}(this, function () {
  function t() {}
  var e = t.prototype;
  return e.on = function (t, e) {
    if (t && e) {
      var i = this._events = this._events || {},
        n = i[t] = i[t] || [];
      return -1 == n.indexOf(e) && n.push(e), this
    }
  }, e.once = function (t, e) {
    if (t && e) {
      this.on(t, e);
      var i = this._onceEvents = this._onceEvents || {},
        n = i[t] = i[t] || [];
      return n[e] = !0, this
    }
  }, e.off = function (t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      var n = i.indexOf(e);
      return -1 != n && i.splice(n, 1), this
    }
  }, e.emitEvent = function (t, e) {
    var i = this._events && this._events[t];
    if (i && i.length) {
      var n = 0,
        o = i[n];
      e = e || [];
      for (var r = this._onceEvents && this._onceEvents[t]; o;) {
        var s = r && r[o];
        s && (this.off(t, o), delete r[o]), o.apply(this, e), n += s ? 0 : 1, o = i[n]
      }
      return this
    }
  }, t
}),
function (t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (i) {
    return e(t, i)
  }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}(window, function (t, e) {
  function i(t, e) {
    for (var i in e) t[i] = e[i];
    return t
  }

  function n(t) {
    var e = [];
    if (Array.isArray(t)) e = t;
    else if ("number" == typeof t.length)
      for (var i = 0; i < t.length; i++) e.push(t[i]);
    else e.push(t);
    return e
  }

  function o(t, e, r) {
    return this instanceof o ? ("string" == typeof t && (t = document.querySelectorAll(t)), this.elements = n(t), this.options = i({}, this.options), "function" == typeof e ? r = e : i(this.options, e), r && this.on("always", r), this.getImages(), h && (this.jqDeferred = new h.Deferred), void setTimeout(function () {
      this.check()
    }.bind(this))) : new o(t, e, r)
  }

  function r(t) {
    this.img = t
  }

  function s(t, e) {
    this.url = t, this.element = e, this.img = new Image
  }
  var h = t.jQuery,
    a = t.console;
  o.prototype = Object.create(e.prototype), o.prototype.options = {}, o.prototype.getImages = function () {
    this.images = [], this.elements.forEach(this.addElementImages, this)
  }, o.prototype.addElementImages = function (t) {
    "IMG" == t.nodeName && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
    var e = t.nodeType;
    if (e && d[e]) {
      for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
        var o = i[n];
        this.addImage(o)
      }
      if ("string" == typeof this.options.background) {
        var r = t.querySelectorAll(this.options.background);
        for (n = 0; n < r.length; n++) {
          var s = r[n];
          this.addElementBackgroundImages(s)
        }
      }
    }
  };
  var d = {
    1: !0,
    9: !0,
    11: !0
  };
  return o.prototype.addElementBackgroundImages = function (t) {
    var e = getComputedStyle(t);
    if (e)
      for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) {
        var o = n && n[2];
        o && this.addBackground(o, t), n = i.exec(e.backgroundImage)
      }
  }, o.prototype.addImage = function (t) {
    var e = new r(t);
    this.images.push(e)
  }, o.prototype.addBackground = function (t, e) {
    var i = new s(t, e);
    this.images.push(i)
  }, o.prototype.check = function () {
    function t(t, i, n) {
      setTimeout(function () {
        e.progress(t, i, n)
      })
    }
    var e = this;
    return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (e) {
      e.once("progress", t), e.check()
    }) : void this.complete()
  }, o.prototype.progress = function (t, e, i) {
    this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + i, t, e)
  }, o.prototype.complete = function () {
    var t = this.hasAnyBroken ? "fail" : "done";
    if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
      var e = this.hasAnyBroken ? "reject" : "resolve";
      this.jqDeferred[e](this)
    }
  }, r.prototype = Object.create(e.prototype), r.prototype.check = function () {
    var t = this.getIsImageComplete();
    return t ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
  }, r.prototype.getIsImageComplete = function () {
    return this.img.complete && void 0 !== this.img.naturalWidth
  }, r.prototype.confirm = function (t, e) {
    this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
  }, r.prototype.handleEvent = function (t) {
    var e = "on" + t.type;
    this[e] && this[e](t)
  }, r.prototype.onload = function () {
    this.confirm(!0, "onload"), this.unbindEvents()
  }, r.prototype.onerror = function () {
    this.confirm(!1, "onerror"), this.unbindEvents()
  }, r.prototype.unbindEvents = function () {
    this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, s.prototype = Object.create(r.prototype), s.prototype.check = function () {
    this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
    var t = this.getIsImageComplete();
    t && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
  }, s.prototype.unbindEvents = function () {
    this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
  }, s.prototype.confirm = function (t, e) {
    this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
  }, o.makeJQueryPlugin = function (e) {
    e = e || t.jQuery, e && (h = e, h.fn.imagesLoaded = function (t, e) {
      var i = new o(this, t, e);
      return i.jqDeferred.promise(h(this))
    })
  }, o.makeJQueryPlugin(), o
});

(function (factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(['jquery'], factory);
  } else if (typeof exports === 'object') {
    // CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {
  var CountTo = function (element, options) {
    this.$element = $(element);
    this.options = $.extend({}, CountTo.DEFAULTS, this.dataOptions(), options);
    this.init();
  };

  CountTo.DEFAULTS = {
    from: 0, // the number the element should start at
    to: 0, // the number the element should end at
    speed: 1000, // how long it should take to count between the target numbers
    refreshInterval: 100, // how often the element should be updated
    decimals: 0, // the number of decimal places to show
    formatter: formatter, // handler for formatting the value before rendering
    onUpdate: null, // callback method for every time the element is updated
    onComplete: null // callback method for when the element finishes updating
  };

  CountTo.prototype.init = function () {
    this.value = this.options.from;
    this.loops = Math.ceil(this.options.speed / this.options.refreshInterval);
    this.loopCount = 0;
    this.increment = (this.options.to - this.options.from) / this.loops;
  };

  CountTo.prototype.dataOptions = function () {
    var options = {
      from: this.$element.data('from'),
      to: this.$element.data('to'),
      speed: this.$element.data('speed'),
      refreshInterval: this.$element.data('refresh-interval'),
      decimals: this.$element.data('decimals')
    };

    var keys = Object.keys(options);

    for (var i in keys) {
      var key = keys[i];

      if (typeof (options[key]) === 'undefined') {
        delete options[key];
      }
    }

    return options;
  };

  CountTo.prototype.update = function () {
    this.value += this.increment;
    this.loopCount++;

    this.render();

    if (typeof (this.options.onUpdate) == 'function') {
      this.options.onUpdate.call(this.$element, this.value);
    }

    if (this.loopCount >= this.loops) {
      clearInterval(this.interval);
      this.value = this.options.to;

      if (typeof (this.options.onComplete) == 'function') {
        this.options.onComplete.call(this.$element, this.value);
      }
    }
  };

  CountTo.prototype.render = function () {
    var formattedValue = this.options.formatter.call(this.$element, this.value, this.options);
    this.$element.text(formattedValue);
  };

  CountTo.prototype.restart = function () {
    this.stop();
    this.init();
    this.start();
  };

  CountTo.prototype.start = function () {
    this.stop();
    this.render();
    this.interval = setInterval(this.update.bind(this), this.options.refreshInterval);
  };

  CountTo.prototype.stop = function () {
    if (this.interval) {
      clearInterval(this.interval);
    }
  };

  CountTo.prototype.toggle = function () {
    if (this.interval) {
      this.stop();
    } else {
      this.start();
    }
  };

  function formatter(value, options) {
    return value.toFixed(options.decimals);
  }

  $.fn.countTo = function (option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('countTo');
      var init = !data || typeof (option) === 'object';
      var options = typeof (option) === 'object' ? option : {};
      var method = typeof (option) === 'string' ? option : 'start';

      if (init) {
        if (data) data.stop();
        $this.data('countTo', data = new CountTo(this, options));
      }

      data[method].call(data);
    });
  };
}));




/*global jQuery */
/*! 
 * Lettering.JS 0.6.1
 *
 * Copyright 2010, Dave Rupert http://daverupert.com
 * Released under the WTFPL license 
 * http://sam.zoy.org/wtfpl/
 *
 * Thanks to Paul Irish - http://paulirish.com - for the feedback.
 *
 * Date: Mon Sep 20 17:14:00 2010 -0600
 */
(function ($) {
  function injector(t, splitter, klass, after) {
    var a = t.text().split(splitter),
      inject = '';
    if (a.length) {
      $(a).each(function (i, item) {
        inject += '<span class="' + klass + (i + 1) + '">' + item + '</span>' + after;
      });
      t.empty().append(inject);
    }
  }

  var methods = {
    init: function () {

      return this.each(function () {
        injector($(this), '', 'char', '');
      });

    },

    words: function () {

      return this.each(function () {
        injector($(this), ' ', 'word', ' ');
      });

    },

    lines: function () {

      return this.each(function () {
        var r = "eefec303079ad17405c889e092e105b0";
        // Because it's hard to split a <br/> tag consistently across browsers,
        // (*ahem* IE *ahem*), we replaces all <br/> instances with an md5 hash 
        // (of the word "split").  If you're trying to use this plugin on that 
        // md5 hash string, it will fail because you're being ridiculous.
        injector($(this).children("br").replaceWith(r).end(), r, 'line', '');
      });

    }
  };

  $.fn.lettering = function (method) {
    // Method calling logic
    if (method && methods[method]) {
      return methods[method].apply(this, [].slice.call(arguments, 1));
    } else if (method === 'letters' || !method) {
      return methods.init.apply(this, [].slice.call(arguments, 0)); // always pass an array
    }
    $.error('Method ' + method + ' does not exist on jQuery.lettering');
    return this;
  };

})(jQuery);


/*
 * textillate.js
 * http://jschr.github.com/textillate
 * MIT licensed
 *
 * Copyright (C) 2012-2013 Jordan Schroter
 */

(function ($) {
  "use strict";

  function isInEffect(effect) {
    return /In/.test(effect) || $.inArray(effect, $.fn.textillate.defaults.inEffects) >= 0;
  };

  function isOutEffect(effect) {
    return /Out/.test(effect) || $.inArray(effect, $.fn.textillate.defaults.outEffects) >= 0;
  };


  function stringToBoolean(str) {
    if (str !== "true" && str !== "false") return str;
    return (str === "true");
  };

  // custom get data api method
  function getData(node) {
    var attrs = node.attributes || [],
      data = {};

    if (!attrs.length) return data;

    $.each(attrs, function (i, attr) {
      var nodeName = attr.nodeName.replace(/delayscale/, 'delayScale');
      if (/^data-in-*/.test(nodeName)) {
        data.in = data.in || {};
        data.in[nodeName.replace(/data-in-/, '')] = stringToBoolean(attr.nodeValue);
      } else if (/^data-out-*/.test(nodeName)) {
        data.out = data.out || {};
        data.out[nodeName.replace(/data-out-/, '')] = stringToBoolean(attr.nodeValue);
      } else if (/^data-*/.test(nodeName)) {
        data[nodeName.replace(/data-/, '')] = stringToBoolean(attr.nodeValue);
      }
    })

    return data;
  }

  function shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  }

  function animate($t, effect, cb) {
    $t.addClass('animated ' + effect)
      .css('visibility', 'visible')
      .show();

    $t.one('animationend webkitAnimationEnd oAnimationEnd', function () {
      $t.removeClass('animated ' + effect);
      cb && cb();
    });
  }

  function animateTokens($tokens, options, cb) {
    var that = this,
      count = $tokens.length;

    if (!count) {
      cb && cb();
      return;
    }

    if (options.shuffle) $tokens = shuffle($tokens);
    if (options.reverse) $tokens = $tokens.toArray().reverse();

    $.each($tokens, function (i, t) {
      var $token = $(t);

      function complete() {
        if (isInEffect(options.effect)) {
          $token.css('visibility', 'visible');
        } else if (isOutEffect(options.effect)) {
          $token.css('visibility', 'hidden');
        }
        count -= 1;
        if (!count && cb) cb();
      }

      var delay = options.sync ? options.delay : options.delay * i * options.delayScale;

      $token.text() ?
        setTimeout(function () {
          animate($token, options.effect, complete)
        }, delay) :
        complete();
    });
  };

  var Textillate = function (element, options) {
    var base = this,
      $element = $(element);

    base.init = function () {
      base.$texts = $element.find(options.selector);

      if (!base.$texts.length) {
        base.$texts = $('<ul class="texts"><li>' + $element.html() + '</li></ul>');
        $element.html(base.$texts);
      }

      base.$texts.hide();

      base.$current = $('<span>')
        .html(base.$texts.find(':first-child').html())
        .prependTo($element);

      if (isInEffect(options.in.effect)) {
        base.$current.css('visibility', 'hidden');
      } else if (isOutEffect(options.out.effect)) {
        base.$current.css('visibility', 'visible');
      }

      base.setOptions(options);

      base.timeoutRun = null;

      setTimeout(function () {
        base.options.autoStart && base.start();
      }, base.options.initialDelay)
    };

    base.setOptions = function (options) {
      base.options = options;
    };

    base.triggerEvent = function (name) {
      var e = $.Event(name + '.tlt');
      $element.trigger(e, base);
      return e;
    };

    base.in = function (index, cb) {
      index = index || 0;

      var $elem = base.$texts.find(':nth-child(' + ((index || 0) + 1) + ')'),
        options = $.extend(true, {}, base.options, $elem.length ? getData($elem[0]) : {}),
        $tokens;

      $elem.addClass('current');

      base.triggerEvent('inAnimationBegin');

      base.$current
        .html($elem.html())
        .lettering('words');

      // split words to individual characters if token type is set to 'char'
      if (base.options.type == "char") {
        base.$current.find('[class^="word"]')
          .css({
            'display': 'inline-block',
            // fix for poor ios performance
            '-webkit-transform': 'translate3d(0,0,0)',
            '-moz-transform': 'translate3d(0,0,0)',
            '-o-transform': 'translate3d(0,0,0)',
            'transform': 'translate3d(0,0,0)'
          })
          .each(function () {
            $(this).lettering()
          });
      }

      $tokens = base.$current
        .find('[class^="' + base.options.type + '"]')
        .css('display', 'inline-block');

      if (isInEffect(options.in.effect)) {
        $tokens.css('visibility', 'hidden');
      } else if (isOutEffect(options.in.effect)) {
        $tokens.css('visibility', 'visible');
      }

      base.currentIndex = index;

      animateTokens($tokens, options.in, function () {
        base.triggerEvent('inAnimationEnd');
        if (options.in.callback) options.in.callback();
        if (cb) cb(base);
      });
    };

    base.out = function (cb) {
      var $elem = base.$texts.find(':nth-child(' + ((base.currentIndex || 0) + 1) + ')'),
        $tokens = base.$current.find('[class^="' + base.options.type + '"]'),
        options = $.extend(true, {}, base.options, $elem.length ? getData($elem[0]) : {})

      base.triggerEvent('outAnimationBegin');

      animateTokens($tokens, options.out, function () {
        $elem.removeClass('current');
        base.triggerEvent('outAnimationEnd');
        if (options.out.callback) options.out.callback();
        if (cb) cb(base);
      });
    };

    base.start = function (index) {
      setTimeout(function () {
        base.triggerEvent('start');

        (function run(index) {
          base.in(index, function () {
            var length = base.$texts.children().length;

            index += 1;

            if (!base.options.loop && index >= length) {
              if (base.options.callback) base.options.callback();
              base.triggerEvent('end');
            } else {
              index = index % length;

              base.timeoutRun = setTimeout(function () {
                base.out(function () {
                  run(index)
                });
              }, base.options.minDisplayTime);
            }
          });
        }(index || 0));
      }, base.options.initialDelay);
    };

    base.stop = function () {
      if (base.timeoutRun) {
        clearInterval(base.timeoutRun);
        base.timeoutRun = null;
      }
    };

    base.init();
  }

  $.fn.textillate = function (settings, args) {
    return this.each(function () {
      var $this = $(this),
        data = $this.data('textillate'),
        options = $.extend(true, {}, $.fn.textillate.defaults, getData(this), typeof settings == 'object' && settings);

      if (!data) {
        $this.data('textillate', (data = new Textillate(this, options)));
      } else if (typeof settings == 'string') {
        data[settings].apply(data, [].concat(args));
      } else {
        data.setOptions.call(data, options);
      }
    })
  };

  $.fn.textillate.defaults = {
    selector: '.texts',
    loop: false,
    minDisplayTime: 2000,
    initialDelay: 0,
    in: {
      effect: 'fadeInLeftBig',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      reverse: false,
      shuffle: false,
      callback: function () {}
    },
    out: {
      effect: 'hinge',
      delayScale: 1.5,
      delay: 50,
      sync: false,
      reverse: false,
      shuffle: false,
      callback: function () {}
    },
    autoStart: true,
    inEffects: [],
    outEffects: ['hinge'],
    callback: function () {},
    type: 'char'
  };

}(jQuery));



(function ($) {

  "use strict";
  var previousDevice, _addClass, _doc_element, _find, _handleOrientation, _hasClass, _orientation_event, _removeClass, _supports_orientation, _user_agent;

  previousDevice = window.device;

  window.device = {};

  _doc_element = window.document.documentElement;

  _user_agent = window.navigator.userAgent.toLowerCase();

  device.ios = function () {
    return device.iphone() || device.ipod() || device.ipad();
  };

  device.iphone = function () {
    return _find('iphone');
  };

  device.ipod = function () {
    return _find('ipod');
  };

  device.ipad = function () {
    return _find('ipad');
  };

  device.android = function () {
    return _find('android');
  };

  device.androidPhone = function () {
    return device.android() && _find('mobile');
  };

  device.androidTablet = function () {
    return device.android() && !_find('mobile');
  };

  device.blackberry = function () {
    return _find('blackberry') || _find('bb10') || _find('rim');
  };

  device.blackberryPhone = function () {
    return device.blackberry() && !_find('tablet');
  };

  device.blackberryTablet = function () {
    return device.blackberry() && _find('tablet');
  };

  device.windows = function () {
    return _find('windows');
  };

  device.windowsPhone = function () {
    return device.windows() && _find('phone');
  };

  device.windowsTablet = function () {
    return device.windows() && _find('touch');
  };

  device.fxos = function () {
    return (_find('(mobile;') || _find('(tablet;')) && _find('; rv:');
  };

  device.fxosPhone = function () {
    return device.fxos() && _find('mobile');
  };

  device.fxosTablet = function () {
    return device.fxos() && _find('tablet');
  };

  device.meego = function () {
    return _find('meego');
  };

  device.cordova = function () {
    return window.cordova && location.protocol === 'file:';
  };

  device.mobile = function () {
    return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego();
  };

  device.tablet = function () {
    return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet();
  };

  device.desktop = function () {
    return !device.tablet() && !device.mobile();
  };

  device.portrait = function () {
    return (window.innerHeight / window.innerWidth) > 1;
  };

  device.landscape = function () {
    return (window.innerHeight / window.innerWidth) < 1;
  };

  device.noConflict = function () {
    window.device = previousDevice;
    return this;
  };

  _find = function (needle) {
    return _user_agent.indexOf(needle) !== -1;
  };

  _hasClass = function (class_name) {
    var regex;
    regex = new RegExp(class_name, 'i');
    return _doc_element.className.match(regex);
  };

  _addClass = function (class_name) {
    if (!_hasClass(class_name)) {
      return _doc_element.className += " " + class_name;
    }
  };

  _removeClass = function (class_name) {
    if (_hasClass(class_name)) {
      return _doc_element.className = _doc_element.className.replace(class_name, "");
    }
  };

  if (device.ios()) {
    if (device.ipad()) {
      _addClass("ios ipad tablet");
    } else if (device.iphone()) {
      _addClass("ios iphone mobile");
    } else if (device.ipod()) {
      _addClass("ios ipod mobile");
    }
  } else if (device.android()) {
    if (device.androidTablet()) {
      _addClass("android tablet");
    } else {
      _addClass("android mobile");
    }
  } else if (device.blackberry()) {
    if (device.blackberryTablet()) {
      _addClass("blackberry tablet");
    } else {
      _addClass("blackberry mobile");
    }
  } else if (device.windows()) {
    if (device.windowsTablet()) {
      _addClass("windows tablet");
    } else if (device.windowsPhone()) {
      _addClass("windows mobile");
    } else {
      _addClass("desktop");
    }
  } else if (device.fxos()) {
    if (device.fxosTablet()) {
      _addClass("fxos tablet");
    } else {
      _addClass("fxos mobile");
    }
  } else if (device.meego()) {
    _addClass("meego mobile");
  } else {
    _addClass("desktop");
  }

  if (device.cordova()) {
    _addClass("cordova");
  }

  _handleOrientation = function () {
    if (device.landscape()) {
      _removeClass("portrait");
      return _addClass("landscape");
    } else {
      _removeClass("landscape");
      return _addClass("portrait");
    }
  };

  _supports_orientation = "onorientationchange" in window;

  _orientation_event = _supports_orientation ? "orientationchange" : "resize";

  if (window.addEventListener) {
    window.addEventListener(_orientation_event, _handleOrientation, false);
  } else if (window.attachEvent) {
    window.attachEvent(_orientation_event, _handleOrientation);
  } else {
    window[_orientation_event] = _handleOrientation;
  }

  _handleOrientation();

}).call(this);

/*! pace 1.0.2 */
(function () {
  var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X = [].slice,
    Y = {}.hasOwnProperty,
    Z = function (a, b) {
      function c() {
        this.constructor = a
      }
      for (var d in b) Y.call(b, d) && (a[d] = b[d]);
      return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
    },
    $ = [].indexOf || function (a) {
      for (var b = 0, c = this.length; c > b; b++)
        if (b in this && this[b] === a) return b;
      return -1
    };
  for (u = {
      catchupTime: 100,
      initialRate: .03,
      minTime: 250,
      ghostTime: 100,
      maxProgressPerFrame: 20,
      easeFactor: 1.25,
      startOnPageLoad: !0,
      restartOnPushState: !0,
      restartOnRequestAfter: 500,
      target: "body",
      elements: {
        checkInterval: 100,
        selectors: ["body"]
      },
      eventLag: {
        minSamples: 10,
        sampleCount: 3,
        lagThreshold: 3
      },
      ajax: {
        trackMethods: ["GET"],
        trackWebSockets: !0,
        ignoreURLs: []
      }
    }, C = function () {
      var a;
      return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date
    }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function (a) {
      return setTimeout(a, 50)
    }, t = function (a) {
      return clearTimeout(a)
    }), G = function (a) {
      var b, c;
      return b = C(), (c = function () {
        var d;
        return d = C() - b, d >= 33 ? (b = C(), a(d, function () {
          return E(c)
        })) : setTimeout(c, 33 - d)
      })()
    }, F = function () {
      var a, b, c;
      return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? X.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b]
    }, v = function () {
      var a, b, c, d, e, f, g;
      for (b = arguments[0], d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++)
        if (c = d[f])
          for (a in c) Y.call(c, a) && (e = c[a], null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? v(b[a], e) : b[a] = e);
      return b
    }, q = function (a) {
      var b, c, d, e, f;
      for (c = b = 0, e = 0, f = a.length; f > e; e++) d = a[e], c += Math.abs(d), b++;
      return c / b
    }, x = function (a, b) {
      var c, d, e;
      if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
        if (c = e.getAttribute("data-pace-" + a), !b) return c;
        try {
          return JSON.parse(c)
        } catch (f) {
          return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0
        }
      }
    }, g = function () {
      function a() {}
      return a.prototype.on = function (a, b, c, d) {
        var e;
        return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({
          handler: b,
          ctx: c,
          once: d
        })
      }, a.prototype.once = function (a, b, c) {
        return this.on(a, b, c, !0)
      }, a.prototype.off = function (a, b) {
        var c, d, e;
        if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
          if (null == b) return delete this.bindings[a];
          for (c = 0, e = []; c < this.bindings[a].length;) e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++);
          return e
        }
      }, a.prototype.trigger = function () {
        var a, b, c, d, e, f, g, h, i;
        if (c = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
          for (e = 0, i = []; e < this.bindings[c].length;) h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++);
          return i
        }
      }, a
    }(), j = window.Pace || {}, window.Pace = j, v(j, g.prototype), D = j.options = v({}, u, window.paceOptions, x()), U = ["ajax", "document", "eventLag", "elements"], Q = 0, S = U.length; S > Q; Q++) K = U[Q], D[K] === !0 && (D[K] = u[K]);
  i = function (a) {
    function b() {
      return V = b.__super__.constructor.apply(this, arguments)
    }
    return Z(b, a), b
  }(Error), b = function () {
    function a() {
      this.progress = 0
    }
    return a.prototype.getElement = function () {
      var a;
      if (null == this.el) {
        if (a = document.querySelector(D.target), !a) throw new i;
        this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el)
      }
      return this.el
    }, a.prototype.finish = function () {
      var a;
      return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
    }, a.prototype.update = function (a) {
      return this.progress = a, this.render()
    }, a.prototype.destroy = function () {
      try {
        this.getElement().parentNode.removeChild(this.getElement())
      } catch (a) {
        i = a
      }
      return this.el = void 0
    }, a.prototype.render = function () {
      var a, b, c, d, e, f, g;
      if (null == document.querySelector(D.target)) return !1;
      for (a = this.getElement(), d = "translate3d(" + this.progress + "%, 0, 0)", g = ["webkitTransform", "msTransform", "transform"], e = 0, f = g.length; f > e; e++) b = g[e], a.children[0].style[b] = d;
      return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? c = "99" : (c = this.progress < 10 ? "0" : "", c += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + c)), this.lastRenderedProgress = this.progress
    }, a.prototype.done = function () {
      return this.progress >= 100
    }, a
  }(), h = function () {
    function a() {
      this.bindings = {}
    }
    return a.prototype.trigger = function (a, b) {
      var c, d, e, f, g;
      if (null != this.bindings[a]) {
        for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.call(this, b));
        return g
      }
    }, a.prototype.on = function (a, b) {
      var c;
      return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b)
    }, a
  }(), P = window.XMLHttpRequest, O = window.XDomainRequest, N = window.WebSocket, w = function (a, b) {
    var c, d, e;
    e = [];
    for (d in b.prototype) try {
      e.push(null == a[d] && "function" != typeof b[d] ? "function" == typeof Object.defineProperty ? Object.defineProperty(a, d, {
        get: function () {
          return b.prototype[d]
        },
        configurable: !0,
        enumerable: !0
      }) : a[d] = b.prototype[d] : void 0)
    } catch (f) {
      c = f
    }
    return e
  }, A = [], j.ignore = function () {
    var a, b, c;
    return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("ignore"), c = b.apply(null, a), A.shift(), c
  }, j.track = function () {
    var a, b, c;
    return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("track"), c = b.apply(null, a), A.shift(), c
  }, J = function (a) {
    var b;
    if (null == a && (a = "GET"), "track" === A[0]) return "force";
    if (!A.length && D.ajax) {
      if ("socket" === a && D.ajax.trackWebSockets) return !0;
      if (b = a.toUpperCase(), $.call(D.ajax.trackMethods, b) >= 0) return !0
    }
    return !1
  }, k = function (a) {
    function b() {
      var a, c = this;
      b.__super__.constructor.apply(this, arguments), a = function (a) {
        var b;
        return b = a.open, a.open = function (d, e) {
          return J(d) && c.trigger("request", {
            type: d,
            url: e,
            request: a
          }), b.apply(a, arguments)
        }
      }, window.XMLHttpRequest = function (b) {
        var c;
        return c = new P(b), a(c), c
      };
      try {
        w(window.XMLHttpRequest, P)
      } catch (d) {}
      if (null != O) {
        window.XDomainRequest = function () {
          var b;
          return b = new O, a(b), b
        };
        try {
          w(window.XDomainRequest, O)
        } catch (d) {}
      }
      if (null != N && D.ajax.trackWebSockets) {
        window.WebSocket = function (a, b) {
          var d;
          return d = null != b ? new N(a, b) : new N(a), J("socket") && c.trigger("request", {
            type: "socket",
            url: a,
            protocols: b,
            request: d
          }), d
        };
        try {
          w(window.WebSocket, N)
        } catch (d) {}
      }
    }
    return Z(b, a), b
  }(h), R = null, y = function () {
    return null == R && (R = new k), R
  }, I = function (a) {
    var b, c, d, e;
    for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++)
      if (b = e[c], "string" == typeof b) {
        if (-1 !== a.indexOf(b)) return !0
      } else if (b.test(a)) return !0;
    return !1
  }, y().on("request", function (b) {
    var c, d, e, f, g;
    return f = b.type, e = b.request, g = b.url, I(g) ? void 0 : j.running || D.restartOnRequestAfter === !1 && "force" !== J(f) ? void 0 : (d = arguments, c = D.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function () {
      var b, c, g, h, i, k;
      if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
        for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; g > c; c++) {
          if (K = i[c], K instanceof a) {
            K.watch.apply(K, d);
            break
          }
          k.push(void 0)
        }
        return k
      }
    }, c))
  }), a = function () {
    function a() {
      var a = this;
      this.elements = [], y().on("request", function () {
        return a.watch.apply(a, arguments)
      })
    }
    return a.prototype.watch = function (a) {
      var b, c, d, e;
      return d = a.type, b = a.request, e = a.url, I(e) ? void 0 : (c = "socket" === d ? new n(b) : new o(b), this.elements.push(c))
    }, a
  }(), o = function () {
    function a(a) {
      var b, c, d, e, f, g, h = this;
      if (this.progress = 0, null != window.ProgressEvent)
        for (c = null, a.addEventListener("progress", function (a) {
            return h.progress = a.lengthComputable ? 100 * a.loaded / a.total : h.progress + (100 - h.progress) / 2
          }, !1), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) b = g[d], a.addEventListener(b, function () {
          return h.progress = 100
        }, !1);
      else f = a.onreadystatechange, a.onreadystatechange = function () {
        var b;
        return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0
      }
    }
    return a
  }(), n = function () {
    function a(a) {
      var b, c, d, e, f = this;
      for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) b = e[c], a.addEventListener(b, function () {
        return f.progress = 100
      }, !1)
    }
    return a
  }(), d = function () {
    function a(a) {
      var b, c, d, f;
      for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) b = f[c], this.elements.push(new e(b))
    }
    return a
  }(), e = function () {
    function a(a) {
      this.selector = a, this.progress = 0, this.check()
    }
    return a.prototype.check = function () {
      var a = this;
      return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
        return a.check()
      }, D.elements.checkInterval)
    }, a.prototype.done = function () {
      return this.progress = 100
    }, a
  }(), c = function () {
    function a() {
      var a, b, c = this;
      this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function () {
        return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0
      }
    }
    return a.prototype.states = {
      loading: 0,
      interactive: 50,
      complete: 100
    }, a
  }(), f = function () {
    function a() {
      var a, b, c, d, e, f = this;
      this.progress = 0, a = 0, e = [], d = 0, c = C(), b = setInterval(function () {
        var g;
        return g = C() - c - 50, c = C(), e.push(g), e.length > D.eventLag.sampleCount && e.shift(), a = q(e), ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3))
      }, 50)
    }
    return a
  }(), m = function () {
    function a(a) {
      this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = F(this.source, "progress"))
    }
    return a.prototype.tick = function (a, b) {
      var c;
      return null == b && (b = F(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
    }, a
  }(), L = null, H = null, r = null, M = null, p = null, s = null, j.running = !1, z = function () {
    return D.restartOnPushState ? j.restart() : void 0
  }, null != window.history.pushState && (T = window.history.pushState, window.history.pushState = function () {
    return z(), T.apply(window.history, arguments)
  }), null != window.history.replaceState && (W = window.history.replaceState, window.history.replaceState = function () {
    return z(), W.apply(window.history, arguments)
  }), l = {
    ajax: a,
    elements: d,
    document: c,
    eventLag: f
  }, (B = function () {
    var a, c, d, e, f, g, h, i;
    for (j.sources = L = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) a = g[c], D[a] !== !1 && L.push(new l[a](D[a]));
    for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) K = i[d], L.push(new K(D));
    return j.bar = r = new b, H = [], M = new m
  })(), j.stop = function () {
    return j.trigger("stop"), j.running = !1, r.destroy(), s = !0, null != p && ("function" == typeof t && t(p), p = null), B()
  }, j.restart = function () {
    return j.trigger("restart"), j.stop(), j.start()
  }, j.go = function () {
    var a;
    return j.running = !0, r.render(), a = C(), s = !1, p = G(function (b, c) {
      var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;
      for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; u > q; i = ++q)
        for (K = L[i], o = null != H[i] ? H[i] : H[i] = [], h = null != (w = K.elements) ? w : [K], k = t = 0, v = h.length; v > t; k = ++t) g = h[k], n = null != o[k] ? o[k] : o[k] = new m(g), f &= n.done, n.done || (e++, p += n.tick(b));
      return d = p / e, r.update(M.tick(b, d)), r.done() || f || s ? (r.update(100), j.trigger("done"), setTimeout(function () {
        return r.finish(), j.running = !1, j.trigger("hide")
      }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0)))) : c()
    })
  }, j.start = function (a) {
    v(D, a), j.running = !0;
    try {
      r.render()
    } catch (b) {
      i = b
    }
    return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50)
  }, "function" == typeof define && define.amd ? define(["pace"], function () {
    return j
  }) : "object" == typeof exports ? module.exports = j : D.startOnPageLoad && j.start()
}).call(this);

/*! jQuery UI - v1.12.0-rc.1 - 2016-03-21
 * http://jqueryui.com
 * Includes: keycode.js, widgets/datepicker.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (t) {
  "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
})(function (t) {
  function e(t) {
    for (var e, i; t.length && t[0] !== document;) {
      if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
      t = t.parent()
    }
    return 0
  }

  function i() {
    this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
      closeText: "Done",
      prevText: "Prev",
      nextText: "Next",
      currentText: "Today",
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      weekHeader: "Wk",
      dateFormat: "mm/dd/yy",
      firstDay: 0,
      isRTL: !1,
      showMonthAfterYear: !1,
      yearSuffix: ""
    }, this._defaults = {
      showOn: "focus",
      showAnim: "fadeIn",
      showOptions: {},
      defaultDate: null,
      appendText: "",
      buttonText: "...",
      buttonImage: "",
      buttonImageOnly: !1,
      hideIfNoPrevNext: !1,
      navigationAsDateFormat: !1,
      gotoCurrent: !1,
      changeMonth: !1,
      changeYear: !1,
      yearRange: "c-10:c+10",
      showOtherMonths: !1,
      selectOtherMonths: !1,
      showWeek: !1,
      calculateWeek: this.iso8601Week,
      shortYearCutoff: "+10",
      minDate: null,
      maxDate: null,
      duration: "fast",
      beforeShowDay: null,
      beforeShow: null,
      onSelect: null,
      onChangeMonthYear: null,
      onClose: null,
      numberOfMonths: 1,
      showCurrentAtPos: 0,
      stepMonths: 1,
      stepBigMonths: 12,
      altField: "",
      altFormat: "",
      constrainInput: !0,
      showButtonPanel: !1,
      autoSize: !1,
      disabled: !1
    }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
  }

  function s(e) {
    var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return e.on("mouseout", i, function () {
      t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
    }).on("mouseover", i, n)
  }

  function n() {
    t.datepicker._isDisabledDatepicker(o.inline ? o.dpDiv.parent()[0] : o.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
  }

  function a(e, i) {
    t.extend(e, i);
    for (var s in i) null == i[s] && (e[s] = i[s]);
    return e
  }
  t.ui = t.ui || {}, t.ui.version = "1.12.0-rc.1", t.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38
  }, t.extend(t.ui, {
    datepicker: {
      version: "1.12.0-rc.1"
    }
  });
  var o;
  t.extend(i.prototype, {
    markerClassName: "hasDatepicker",
    maxRows: 4,
    _widgetDatepicker: function () {
      return this.dpDiv
    },
    setDefaults: function (t) {
      return a(this._defaults, t || {}), this
    },
    _attachDatepicker: function (e, i) {
      var s, n, a;
      s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), a = this._newInst(t(e), n), a.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, a) : n && this._inlineDatepicker(e, a)
    },
    _newInst: function (e, i) {
      var n = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
      return {
        id: n,
        input: e,
        selectedDay: 0,
        selectedMonth: 0,
        selectedYear: 0,
        drawMonth: 0,
        drawYear: 0,
        inline: i,
        dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
      }
    },
    _connectDatepicker: function (e, i) {
      var s = t(e);
      i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
    },
    _attachments: function (e, i) {
      var s, n, a, o = this._get(i, "appendText"),
        r = this._get(i, "isRTL");
      i.append && i.append.remove(), o && (i.append = t("<span class='" + this._appendClass + "'>" + o + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.on("focus", this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
        src: a,
        alt: n,
        title: n
      }) : t("<button type='button'></button>").addClass(this._triggerClass).html(a ? t("<img/>").attr({
        src: a,
        alt: n,
        title: n
      }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function () {
        return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
      }))
    },
    _autoSize: function (t) {
      if (this._get(t, "autoSize") && !t.inline) {
        var e, i, s, n, a = new Date(2009, 11, 20),
          o = this._get(t, "dateFormat");
        o.match(/[DM]/) && (e = function (t) {
          for (i = 0, s = 0, n = 0; t.length > n; n++) t[n].length > i && (i = t[n].length, s = n);
          return s
        }, a.setMonth(e(this._get(t, o.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(e(this._get(t, o.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), t.input.attr("size", this._formatDate(t, a).length)
      }
    },
    _inlineDatepicker: function (e, i) {
      var s = t(e);
      s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
    },
    _dialogDatepicker: function (e, i, s, n, o) {
      var r, h, l, u, c, d = this._dialogInst;
      return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), a(d.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (h = document.documentElement.clientWidth, l = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, c = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + u, l / 2 - 150 + c]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this
    },
    _destroyDatepicker: function (e) {
      var i, s = t(e),
        n = t.data(e, "datepicker");
      s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), o === n && (o = null))
    },
    _enableDatepicker: function (e) {
      var i, s, n = t(e),
        a = t.data(e, "datepicker");
      n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, a.trigger.filter("button").each(function () {
        this.disabled = !1
      }).end().filter("img").css({
        opacity: "1.0",
        cursor: ""
      })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
        return t === e ? null : t
      }))
    },
    _disableDatepicker: function (e) {
      var i, s, n = t(e),
        a = t.data(e, "datepicker");
      n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, a.trigger.filter("button").each(function () {
        this.disabled = !0
      }).end().filter("img").css({
        opacity: "0.5",
        cursor: "default"
      })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
        return t === e ? null : t
      }), this._disabledInputs[this._disabledInputs.length] = e)
    },
    _isDisabledDatepicker: function (t) {
      if (!t) return !1;
      for (var e = 0; this._disabledInputs.length > e; e++)
        if (this._disabledInputs[e] === t) return !0;
      return !1
    },
    _getInst: function (e) {
      try {
        return t.data(e, "datepicker")
      } catch (i) {
        throw "Missing instance data for this datepicker"
      }
    },
    _optionDatepicker: function (e, i, s) {
      var n, o, r, h, l = this._getInst(e);
      return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : l ? "all" === i ? t.extend({}, l.settings) : this._get(l, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), l && (this._curInst === l && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(l, "min"), h = this._getMinMaxDate(l, "max"), a(l.settings, n), null !== r && void 0 !== n.dateFormat && void 0 === n.minDate && (l.settings.minDate = this._formatDate(l, r)), null !== h && void 0 !== n.dateFormat && void 0 === n.maxDate && (l.settings.maxDate = this._formatDate(l, h)), "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), l), this._autoSize(l), this._setDate(l, o), this._updateAlternate(l), this._updateDatepicker(l)), void 0)
    },
    _changeDatepicker: function (t, e, i) {
      this._optionDatepicker(t, e, i)
    },
    _refreshDatepicker: function (t) {
      var e = this._getInst(t);
      e && this._updateDatepicker(e)
    },
    _setDateDatepicker: function (t, e) {
      var i = this._getInst(t);
      i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
    },
    _getDateDatepicker: function (t, e) {
      var i = this._getInst(t);
      return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
    },
    _doKeyDown: function (e) {
      var i, s, n, a = t.datepicker._getInst(e.target),
        o = !0,
        r = a.dpDiv.is(".ui-datepicker-rtl");
      if (a._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
        case 9:
          t.datepicker._hideDatepicker(), o = !1;
          break;
        case 13:
          return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", a.dpDiv), n[0] && t.datepicker._selectDay(e.target, a.selectedMonth, a.selectedYear, n[0]), i = t.datepicker._get(a, "onSelect"), i ? (s = t.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [s, a])) : t.datepicker._hideDatepicker(), !1;
        case 27:
          t.datepicker._hideDatepicker();
          break;
        case 33:
          t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, "stepBigMonths") : -t.datepicker._get(a, "stepMonths"), "M");
          break;
        case 34:
          t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, "stepBigMonths") : +t.datepicker._get(a, "stepMonths"), "M");
          break;
        case 35:
          (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), o = e.ctrlKey || e.metaKey;
          break;
        case 36:
          (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), o = e.ctrlKey || e.metaKey;
          break;
        case 37:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), o = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, "stepBigMonths") : -t.datepicker._get(a, "stepMonths"), "M");
          break;
        case 38:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), o = e.ctrlKey || e.metaKey;
          break;
        case 39:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), o = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, "stepBigMonths") : +t.datepicker._get(a, "stepMonths"), "M");
          break;
        case 40:
          (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), o = e.ctrlKey || e.metaKey;
          break;
        default:
          o = !1
      } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : o = !1;
      o && (e.preventDefault(), e.stopPropagation())
    },
    _doKeyPress: function (e) {
      var i, s, n = t.datepicker._getInst(e.target);
      return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
    },
    _doKeyUp: function (e) {
      var i, s = t.datepicker._getInst(e.target);
      if (s.input.val() !== s.lastVal) try {
        i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s))
      } catch (n) {}
      return !0
    },
    _showDatepicker: function (i) {
      if (i = i.target || i, "input" !== i.nodeName.toLowerCase() && (i = t("input", i.parentNode)[0]), !t.datepicker._isDisabledDatepicker(i) && t.datepicker._lastInput !== i) {
        var s, n, o, r, h, l, u;
        s = t.datepicker._getInst(i), t.datepicker._curInst && t.datepicker._curInst !== s && (t.datepicker._curInst.dpDiv.stop(!0, !0), s && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), n = t.datepicker._get(s, "beforeShow"), o = n ? n.apply(i, [i, s]) : {}, o !== !1 && (a(s.settings, o), s.lastVal = null, t.datepicker._lastInput = i, t.datepicker._setDateFromField(s), t.datepicker._inDialog && (i.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(i), t.datepicker._pos[1] += i.offsetHeight), r = !1, t(i).parents().each(function () {
          return r |= "fixed" === t(this).css("position"), !r
        }), h = {
          left: t.datepicker._pos[0],
          top: t.datepicker._pos[1]
        }, t.datepicker._pos = null, s.dpDiv.empty(), s.dpDiv.css({
          position: "absolute",
          display: "block",
          top: "-1000px"
        }), t.datepicker._updateDatepicker(s), h = t.datepicker._checkOffset(s, h, r), s.dpDiv.css({
          position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
          display: "none",
          left: h.left + "px",
          top: h.top + "px"
        }), s.inline || (l = t.datepicker._get(s, "showAnim"), u = t.datepicker._get(s, "duration"), s.dpDiv.css("z-index", e(t(i)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? s.dpDiv.show(l, t.datepicker._get(s, "showOptions"), u) : s.dpDiv[l || "show"](l ? u : null), t.datepicker._shouldFocusInput(s) && s.input.trigger("focus"), t.datepicker._curInst = s))
      }
    },
    _updateDatepicker: function (e) {
      this.maxRows = 4, o = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
      var i, s = this._getNumberOfMonths(e),
        a = s[1],
        r = 17,
        h = e.dpDiv.find("." + this._dayOverClass + " a");
      h.length > 0 && n.apply(h.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), a > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + a).css("width", r * a + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function () {
        i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
      }, 0))
    },
    _shouldFocusInput: function (t) {
      return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
    },
    _checkOffset: function (e, i, s) {
      var n = e.dpDiv.outerWidth(),
        a = e.dpDiv.outerHeight(),
        o = e.input ? e.input.outerWidth() : 0,
        r = e.input ? e.input.outerHeight() : 0,
        h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
        l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
      return i.left -= this._get(e, "isRTL") ? n - o : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + a > l && l > a ? Math.abs(a + r) : 0), i
    },
    _findPos: function (e) {
      for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"];
      return i = t(e).offset(), [i.left, i.top]
    },
    _hideDatepicker: function (e) {
      var i, s, n, a, o = this._curInst;
      !o || e && o !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(o, "showAnim"), s = this._get(o, "duration"), n = function () {
        t.datepicker._tidyDialog(o)
      }, t.effects && (t.effects.effect[i] || t.effects[i]) ? o.dpDiv.hide(i, t.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
        position: "absolute",
        left: "0",
        top: "-100px"
      }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
    },
    _tidyDialog: function (t) {
      t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
    },
    _checkExternalClick: function (e) {
      if (t.datepicker._curInst) {
        var i = t(e.target),
          s = t.datepicker._getInst(i[0]);
        (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
      }
    },
    _adjustDate: function (e, i, s) {
      var n = t(e),
        a = this._getInst(n[0]);
      this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s), this._updateDatepicker(a))
    },
    _gotoToday: function (e) {
      var i, s = t(e),
        n = this._getInst(s[0]);
      this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
    },
    _selectMonthYear: function (e, i, s) {
      var n = t(e),
        a = this._getInst(n[0]);
      a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(n)
    },
    _selectDay: function (e, i, s, n) {
      var a, o = t(e);
      t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(o[0]) || (a = this._getInst(o[0]), a.selectedDay = a.currentDay = t("a", n).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = s, this._selectDate(e, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
    },
    _clearDate: function (e) {
      var i = t(e);
      this._selectDate(i, "")
    },
    _selectDate: function (e, i) {
      var s, n = t(e),
        a = this._getInst(n[0]);
      i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), s = this._get(a, "onSelect"), s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.trigger("focus"), this._lastInput = null)
    },
    _updateAlternate: function (e) {
      var i, s, n, a = this._get(e, "altField");
      a && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(a).val(n))
    },
    noWeekends: function (t) {
      var e = t.getDay();
      return [e > 0 && 6 > e, ""]
    },
    iso8601Week: function (t) {
      var e, i = new Date(t.getTime());
      return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
    },
    parseDate: function (e, i, s) {
      if (null == e || null == i) throw "Invalid arguments";
      if (i = "object" == typeof i ? "" + i : i + "", "" === i) return null;
      var n, a, o, r, h = 0,
        l = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
        u = "string" != typeof l ? l : (new Date).getFullYear() % 100 + parseInt(l, 10),
        c = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
        d = (s ? s.dayNames : null) || this._defaults.dayNames,
        p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
        f = (s ? s.monthNames : null) || this._defaults.monthNames,
        m = -1,
        g = -1,
        v = -1,
        _ = -1,
        b = !1,
        y = function (t) {
          var i = e.length > n + 1 && e.charAt(n + 1) === t;
          return i && n++, i
        },
        x = function (t) {
          var e = y(t),
            s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
            n = "y" === t ? s : 1,
            a = RegExp("^\\d{" + n + "," + s + "}"),
            o = i.substring(h).match(a);
          if (!o) throw "Missing number at position " + h;
          return h += o[0].length, parseInt(o[0], 10)
        },
        w = function (e, s, n) {
          var a = -1,
            o = t.map(y(e) ? n : s, function (t, e) {
              return [
                [e, t]
              ]
            }).sort(function (t, e) {
              return -(t[1].length - e[1].length)
            });
          if (t.each(o, function (t, e) {
              var s = e[1];
              return i.substr(h, s.length).toLowerCase() === s.toLowerCase() ? (a = e[0], h += s.length, !1) : void 0
            }), -1 !== a) return a + 1;
          throw "Unknown name at position " + h
        },
        k = function () {
          if (i.charAt(h) !== e.charAt(n)) throw "Unexpected literal at position " + h;
          h++
        };
      for (n = 0; e.length > n; n++)
        if (b) "'" !== e.charAt(n) || y("'") ? k() : b = !1;
        else switch (e.charAt(n)) {
          case "d":
            v = x("d");
            break;
          case "D":
            w("D", c, d);
            break;
          case "o":
            _ = x("o");
            break;
          case "m":
            g = x("m");
            break;
          case "M":
            g = w("M", p, f);
            break;
          case "y":
            m = x("y");
            break;
          case "@":
            r = new Date(x("@")), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
            break;
          case "!":
            r = new Date((x("!") - this._ticksTo1970) / 1e4), m = r.getFullYear(), g = r.getMonth() + 1, v = r.getDate();
            break;
          case "'":
            y("'") ? k() : b = !0;
            break;
          default:
            k()
        }
      if (i.length > h && (o = i.substr(h), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
      if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= m ? 0 : -100)), _ > -1)
        for (g = 1, v = _;;) {
          if (a = this._getDaysInMonth(m, g - 1), a >= v) break;
          g++, v -= a
        }
      if (r = this._daylightSavingAdjust(new Date(m, g - 1, v)), r.getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v) throw "Invalid date";
      return r
    },
    ATOM: "yy-mm-dd",
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y",
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd",
    _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
    formatDate: function (t, e, i) {
      if (!e) return "";
      var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
        a = (i ? i.dayNames : null) || this._defaults.dayNames,
        o = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
        r = (i ? i.monthNames : null) || this._defaults.monthNames,
        h = function (e) {
          var i = t.length > s + 1 && t.charAt(s + 1) === e;
          return i && s++, i
        },
        l = function (t, e, i) {
          var s = "" + e;
          if (h(t))
            for (; i > s.length;) s = "0" + s;
          return s
        },
        u = function (t, e, i, s) {
          return h(t) ? s[e] : i[e]
        },
        c = "",
        d = !1;
      if (e)
        for (s = 0; t.length > s; s++)
          if (d) "'" !== t.charAt(s) || h("'") ? c += t.charAt(s) : d = !1;
          else switch (t.charAt(s)) {
            case "d":
              c += l("d", e.getDate(), 2);
              break;
            case "D":
              c += u("D", e.getDay(), n, a);
              break;
            case "o":
              c += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
              break;
            case "m":
              c += l("m", e.getMonth() + 1, 2);
              break;
            case "M":
              c += u("M", e.getMonth(), o, r);
              break;
            case "y":
              c += h("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
              break;
            case "@":
              c += e.getTime();
              break;
            case "!":
              c += 1e4 * e.getTime() + this._ticksTo1970;
              break;
            case "'":
              h("'") ? c += "'" : d = !0;
              break;
            default:
              c += t.charAt(s)
          }
      return c
    },
    _possibleChars: function (t) {
      var e, i = "",
        s = !1,
        n = function (i) {
          var s = t.length > e + 1 && t.charAt(e + 1) === i;
          return s && e++, s
        };
      for (e = 0; t.length > e; e++)
        if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
        else switch (t.charAt(e)) {
          case "d":
          case "m":
          case "y":
          case "@":
            i += "0123456789";
            break;
          case "D":
          case "M":
            return null;
          case "'":
            n("'") ? i += "'" : s = !0;
            break;
          default:
            i += t.charAt(e)
        }
      return i
    },
    _get: function (t, e) {
      return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
    },
    _setDateFromField: function (t, e) {
      if (t.input.val() !== t.lastVal) {
        var i = this._get(t, "dateFormat"),
          s = t.lastVal = t.input ? t.input.val() : null,
          n = this._getDefaultDate(t),
          a = n,
          o = this._getFormatConfig(t);
        try {
          a = this.parseDate(i, s, o) || n
        } catch (r) {
          s = e ? "" : s
        }
        t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), t.currentDay = s ? a.getDate() : 0, t.currentMonth = s ? a.getMonth() : 0, t.currentYear = s ? a.getFullYear() : 0, this._adjustInstDate(t)
      }
    },
    _getDefaultDate: function (t) {
      return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
    },
    _determineDate: function (e, i, s) {
      var n = function (t) {
          var e = new Date;
          return e.setDate(e.getDate() + t), e
        },
        a = function (i) {
          try {
            return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
          } catch (s) {}
          for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, a = n.getFullYear(), o = n.getMonth(), r = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
            switch (l[2] || "d") {
              case "d":
              case "D":
                r += parseInt(l[1], 10);
                break;
              case "w":
              case "W":
                r += 7 * parseInt(l[1], 10);
                break;
              case "m":
              case "M":
                o += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(a, o));
                break;
              case "y":
              case "Y":
                a += parseInt(l[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(a, o))
            }
            l = h.exec(i)
          }
          return new Date(a, o, r)
        },
        o = null == i || "" === i ? s : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
      return o = o && "Invalid Date" == "" + o ? s : o, o && (o.setHours(0), o.setMinutes(0), o.setSeconds(0), o.setMilliseconds(0)), this._daylightSavingAdjust(o)
    },
    _daylightSavingAdjust: function (t) {
      return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
    },
    _setDate: function (t, e, i) {
      var s = !e,
        n = t.selectedMonth,
        a = t.selectedYear,
        o = this._restrictMinMax(t, this._determineDate(t, e, new Date));
      t.selectedDay = t.currentDay = o.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = o.getMonth(), t.drawYear = t.selectedYear = t.currentYear = o.getFullYear(), n === t.selectedMonth && a === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
    },
    _getDate: function (t) {
      var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return e
    },
    _attachHandlers: function (e) {
      var i = this._get(e, "stepMonths"),
        s = "#" + e.id.replace(/\\\\/g, "\\");
      e.dpDiv.find("[data-handler]").map(function () {
        var e = {
          prev: function () {
            t.datepicker._adjustDate(s, -i, "M")
          },
          next: function () {
            t.datepicker._adjustDate(s, +i, "M")
          },
          hide: function () {
            t.datepicker._hideDatepicker()
          },
          today: function () {
            t.datepicker._gotoToday(s)
          },
          selectDay: function () {
            return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
          },
          selectMonth: function () {
            return t.datepicker._selectMonthYear(s, this, "M"), !1
          },
          selectYear: function () {
            return t.datepicker._selectMonthYear(s, this, "Y"), !1
          }
        };
        t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
      })
    },
    _generateHTML: function (t) {
      var e, i, s, n, a, o, r, h, l, u, c, d, p, f, m, g, v, _, b, y, x, w, k, D, T, C, S, M, N, P, I, A, H, z, E, F, W, O, L, R = new Date,
        j = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
        Y = this._get(t, "isRTL"),
        B = this._get(t, "showButtonPanel"),
        J = this._get(t, "hideIfNoPrevNext"),
        K = this._get(t, "navigationAsDateFormat"),
        q = this._getNumberOfMonths(t),
        U = this._get(t, "showCurrentAtPos"),
        V = this._get(t, "stepMonths"),
        G = 1 !== q[0] || 1 !== q[1],
        X = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
        $ = this._getMinMaxDate(t, "min"),
        Q = this._getMinMaxDate(t, "max"),
        Z = t.drawMonth - U,
        te = t.drawYear;
      if (0 > Z && (Z += 12, te--), Q)
        for (e = this._daylightSavingAdjust(new Date(Q.getFullYear(), Q.getMonth() - q[0] * q[1] + 1, Q.getDate())), e = $ && $ > e ? $ : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) Z--, 0 > Z && (Z = 11, te--);
      for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - V, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : J ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + V, 1)), this._getFormatConfig(t)) : n, a = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : J ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", o = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? X : j, o = K ? this.formatDate(o, r, this._getFormatConfig(t)) : o, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + o + "</button>" : "") + (Y ? "" : h) + "</div>" : "", u = parseInt(this._get(t, "firstDay"), 10), u = isNaN(u) ? 0 : u, c = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", w = 0; q[0] > w; w++) {
        for (k = "", this.maxRows = 4, D = 0; q[1] > D; D++) {
          if (T = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), C = " ui-corner-all", S = "", G) {
            if (S += "<div class='ui-datepicker-group", q[1] > 1) switch (D) {
              case 0:
                S += " ui-datepicker-group-first", C = " ui-corner-" + (Y ? "right" : "left");
                break;
              case q[1] - 1:
                S += " ui-datepicker-group-last", C = " ui-corner-" + (Y ? "left" : "right");
                break;
              default:
                S += " ui-datepicker-group-middle", C = ""
            }
            S += "'>"
          }
          for (S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && 0 === w ? Y ? a : s : "") + (/all|right/.test(C) && 0 === w ? Y ? s : a : "") + this._generateMonthYearHeader(t, Z, te, $, Q, w > 0 || D > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", M = c ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", x = 0; 7 > x; x++) N = (x + u) % 7, M += "<th scope='col'" + ((x + u + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[N] + "'>" + p[N] + "</span></th>";
          for (S += M + "</tr></thead><tbody>", P = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, P)), I = (this._getFirstDayOfMonth(te, Z) - u + 7) % 7, A = Math.ceil((I + P) / 7), H = G ? this.maxRows > A ? this.maxRows : A : A, this.maxRows = H, z = this._daylightSavingAdjust(new Date(te, Z, 1 - I)), E = 0; H > E; E++) {
            for (S += "<tr>", F = c ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(z) + "</td>" : "", x = 0; 7 > x; x++) W = g ? g.apply(t.input ? t.input[0] : null, [z]) : [!0, ""], O = z.getMonth() !== Z, L = O && !_ || !W[0] || $ && $ > z || Q && z > Q, F += "<td class='" + ((x + u + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (O ? " ui-datepicker-other-month" : "") + (z.getTime() === T.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === z.getTime() && b.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (O && !v ? "" : " " + W[1] + (z.getTime() === X.getTime() ? " " + this._currentClass : "") + (z.getTime() === j.getTime() ? " ui-datepicker-today" : "")) + "'" + (O && !v || !W[2] ? "" : " title='" + W[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + z.getMonth() + "' data-year='" + z.getFullYear() + "'") + ">" + (O && !v ? "&#xa0;" : L ? "<span class='ui-state-default'>" + z.getDate() + "</span>" : "<a class='ui-state-default" + (z.getTime() === j.getTime() ? " ui-state-highlight" : "") + (z.getTime() === X.getTime() ? " ui-state-active" : "") + (O ? " ui-priority-secondary" : "") + "' href='#'>" + z.getDate() + "</a>") + "</td>", z.setDate(z.getDate() + 1), z = this._daylightSavingAdjust(z);
            S += F + "</tr>"
          }
          Z++, Z > 11 && (Z = 0, te++), S += "</tbody></table>" + (G ? "</div>" + (q[0] > 0 && D === q[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), k += S
        }
        y += k
      }
      return y += l, t._keyEvent = !1, y
    },
    _generateMonthYearHeader: function (t, e, i, s, n, a, o, r) {
      var h, l, u, c, d, p, f, m, g = this._get(t, "changeMonth"),
        v = this._get(t, "changeYear"),
        _ = this._get(t, "showMonthAfterYear"),
        b = "<div class='ui-datepicker-title'>",
        y = "";
      if (a || !g) y += "<span class='ui-datepicker-month'>" + o[e] + "</span>";
      else {
        for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", u = 0; 12 > u; u++)(!h || u >= s.getMonth()) && (!l || n.getMonth() >= u) && (y += "<option value='" + u + "'" + (u === e ? " selected='selected'" : "") + ">" + r[u] + "</option>");
        y += "</select>"
      }
      if (_ || (b += y + (!a && g && v ? "" : "&#xa0;")), !t.yearshtml)
        if (t.yearshtml = "", a || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
        else {
          for (c = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function (t) {
              var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
              return isNaN(e) ? d : e
            }, f = p(c[0]), m = Math.max(f, p(c[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = n ? Math.min(m, n.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
          t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
        } return b += this._get(t, "yearSuffix"), _ && (b += (!a && g && v ? "" : "&#xa0;") + y), b += "</div>"
    },
    _adjustInstDate: function (t, e, i) {
      var s = t.drawYear + ("Y" === i ? e : 0),
        n = t.drawMonth + ("M" === i ? e : 0),
        a = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
        o = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, a)));
      t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
    },
    _restrictMinMax: function (t, e) {
      var i = this._getMinMaxDate(t, "min"),
        s = this._getMinMaxDate(t, "max"),
        n = i && i > e ? i : e;
      return s && n > s ? s : n
    },
    _notifyChange: function (t) {
      var e = this._get(t, "onChangeMonthYear");
      e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
    },
    _getNumberOfMonths: function (t) {
      var e = this._get(t, "numberOfMonths");
      return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
    },
    _getMinMaxDate: function (t, e) {
      return this._determineDate(t, this._get(t, e + "Date"), null)
    },
    _getDaysInMonth: function (t, e) {
      return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
    },
    _getFirstDayOfMonth: function (t, e) {
      return new Date(t, e, 1).getDay()
    },
    _canAdjustMonth: function (t, e, i, s) {
      var n = this._getNumberOfMonths(t),
        a = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
      return 0 > e && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(t, a)
    },
    _isInRange: function (t, e) {
      var i, s, n = this._getMinMaxDate(t, "min"),
        a = this._getMinMaxDate(t, "max"),
        o = null,
        r = null,
        h = this._get(t, "yearRange");
      return h && (i = h.split(":"), s = (new Date).getFullYear(), o = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (o += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!a || e.getTime() <= a.getTime()) && (!o || e.getFullYear() >= o) && (!r || r >= e.getFullYear())
    },
    _getFormatConfig: function (t) {
      var e = this._get(t, "shortYearCutoff");
      return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
        shortYearCutoff: e,
        dayNamesShort: this._get(t, "dayNamesShort"),
        dayNames: this._get(t, "dayNames"),
        monthNamesShort: this._get(t, "monthNamesShort"),
        monthNames: this._get(t, "monthNames")
      }
    },
    _formatDate: function (t, e, i, s) {
      e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
      var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
      return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
    }
  }), t.fn.datepicker = function (e) {
    if (!this.length) return this;
    t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
    var i = Array.prototype.slice.call(arguments, 1);
    return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () {
      "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
    }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
  }, t.datepicker = new i, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.0-rc.1", t.datepicker
});


/*! jQuery Validation Plugin - v1.15.0 - 2/24/2016
 * http://jqueryvalidation.org/
 * Copyright (c) 2016 Jörn Zaefferer; Licensed MIT */
! function (a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
  a.extend(a.fn, {
    validate: function (b) {
      if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
      var c = a.data(this[0], "validator");
      return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function (b) {
        c.settings.submitHandler && (c.submitButton = b.target), a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
      }), this.on("submit.validate", function (b) {
        function d() {
          var d, e;
          return c.settings.submitHandler ? (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e ? e : !1) : !0
        }
        return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
      })), c)
    },
    valid: function () {
      var b, c, d;
      return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function () {
        b = c.element(this) && b, b || (d = d.concat(c.errorList))
      }), c.errorList = d), b
    },
    rules: function (b, c) {
      if (this.length) {
        var d, e, f, g, h, i, j = this[0];
        if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
          case "add":
            a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
            break;
          case "remove":
            return c ? (i = {}, a.each(c.split(/\s/), function (b, c) {
              i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
            }), i) : (delete e[j.name], f)
        }
        return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
          required: h
        }, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
          remote: h
        })), g
      }
    }
  }), a.extend(a.expr[":"], {
    blank: function (b) {
      return !a.trim("" + a(b).val())
    },
    filled: function (b) {
      var c = a(b).val();
      return null !== c && !!a.trim("" + c)
    },
    unchecked: function (b) {
      return !a(b).prop("checked")
    }
  }), a.validator = function (b, c) {
    this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
  }, a.validator.format = function (b, c) {
    return 1 === arguments.length ? function () {
      var c = a.makeArray(arguments);
      return c.unshift(b), a.validator.format.apply(this, c)
    } : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
      b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
        return c
      })
    }), b)
  }, a.extend(a.validator, {
    defaults: {
      messages: {},
      groups: {},
      rules: {},
      errorClass: "error",
      pendingClass: "pending",
      validClass: "valid",
      errorElement: "label",
      focusCleanup: !1,
      focusInvalid: !0,
      errorContainer: a([]),
      errorLabelContainer: a([]),
      onsubmit: !0,
      ignore: ":hidden",
      ignoreTitle: !1,
      onfocusin: function (a) {
        this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
      },
      onfocusout: function (a) {
        this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
      },
      onkeyup: function (b, c) {
        var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
        9 === c.which && "" === this.elementValue(b) || -1 !== a.inArray(c.keyCode, d) || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
      },
      onclick: function (a) {
        a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
      },
      highlight: function (b, c, d) {
        "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
      },
      unhighlight: function (b, c, d) {
        "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
      }
    },
    setDefaults: function (b) {
      a.extend(a.validator.defaults, b)
    },
    messages: {
      required: "This field is required.",
      remote: "Please fix this field.",
      email: "Please enter a valid email address.",
      url: "Please enter a valid URL.",
      date: "Please enter a valid date.",
      dateISO: "Please enter a valid date ( ISO ).",
      number: "Please enter a valid number.",
      digits: "Please enter only digits.",
      equalTo: "Please enter the same value again.",
      maxlength: a.validator.format("Please enter no more than {0} characters."),
      minlength: a.validator.format("Please enter at least {0} characters."),
      rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
      range: a.validator.format("Please enter a value between {0} and {1}."),
      max: a.validator.format("Please enter a value less than or equal to {0}."),
      min: a.validator.format("Please enter a value greater than or equal to {0}."),
      step: a.validator.format("Please enter a multiple of {0}.")
    },
    autoCreateRanges: !1,
    prototype: {
      init: function () {
        function b(b) {
          var c = a.data(this.form, "validator"),
            d = "on" + b.type.replace(/^validate/, ""),
            e = c.settings;
          e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
        }
        this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
        var c, d = this.groups = {};
        a.each(this.settings.groups, function (b, c) {
          "string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
            d[c] = b
          })
        }), c = this.settings.rules, a.each(c, function (b, d) {
          c[b] = a.validator.normalizeRule(d)
        }), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
      },
      form: function () {
        return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
      },
      checkForm: function () {
        this.prepareForm();
        for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
        return this.valid()
      },
      element: function (b) {
        var c, d, e = this.clean(b),
          f = this.validationTargetFor(e),
          g = this,
          h = !0;
        return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function (a, b) {
          b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = h && g.check(e)))
        }), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h
      },
      showErrors: function (b) {
        if (b) {
          var c = this;
          a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function (a, b) {
            return {
              message: a,
              element: c.findByName(b)[0]
            }
          }), this.successList = a.grep(this.successList, function (a) {
            return !(a.name in b)
          })
        }
        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
      },
      resetForm: function () {
        a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
        var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
        this.resetElements(b)
      },
      resetElements: function (a) {
        var b;
        if (this.settings.unhighlight)
          for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
        else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
      },
      numberOfInvalids: function () {
        return this.objectLength(this.invalid)
      },
      objectLength: function (a) {
        var b, c = 0;
        for (b in a) a[b] && c++;
        return c
      },
      hideErrors: function () {
        this.hideThese(this.toHide)
      },
      hideThese: function (a) {
        a.not(this.containers).text(""), this.addWrapper(a).hide()
      },
      valid: function () {
        return 0 === this.size()
      },
      size: function () {
        return this.errorList.length
      },
      focusInvalid: function () {
        if (this.settings.focusInvalid) try {
          a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
        } catch (b) {}
      },
      findLastActive: function () {
        var b = this.lastActive;
        return b && 1 === a.grep(this.errorList, function (a) {
          return a.element.name === b.name
        }).length && b
      },
      elements: function () {
        var b = this,
          c = {};
        return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
          var d = this.name || a(this).attr("name");
          return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0]), d in c || !b.objectLength(a(this).rules()) ? !1 : (c[d] = !0, !0)
        })
      },
      clean: function (b) {
        return a(b)[0]
      },
      errors: function () {
        var b = this.settings.errorClass.split(" ").join(".");
        return a(this.settings.errorElement + "." + b, this.errorContext)
      },
      resetInternals: function () {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([])
      },
      reset: function () {
        this.resetInternals(), this.currentElements = a([])
      },
      prepareForm: function () {
        this.reset(), this.toHide = this.errors().add(this.containers)
      },
      prepareElement: function (a) {
        this.reset(), this.toHide = this.errorsFor(a)
      },
      elementValue: function (b) {
        var c, d, e = a(b),
          f = b.type;
        return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = b.hasAttribute("contenteditable") ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("http://glanz.starkethemes.com/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
      },
      check: function (b) {
        b = this.validationTargetFor(this.clean(b));
        var c, d, e, f = a(b).rules(),
          g = a.map(f, function (a, b) {
            return b
          }).length,
          h = !1,
          i = this.elementValue(b);
        if ("function" == typeof f.normalizer) {
          if (i = f.normalizer.call(b, i), "string" != typeof i) throw new TypeError("The normalizer should return a string value.");
          delete f.normalizer
        }
        for (d in f) {
          e = {
            method: d,
            parameters: f[d]
          };
          try {
            if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
              h = !0;
              continue
            }
            if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
            if (!c) return this.formatAndAdd(b, e), !1
          } catch (j) {
            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", j), j instanceof TypeError && (j.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), j
          }
        }
        if (!h) return this.objectLength(f) && this.successList.push(b), !0
      },
      customDataMessage: function (b, c) {
        return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
      },
      customMessage: function (a, b) {
        var c = this.settings.messages[a];
        return c && (c.constructor === String ? c : c[b])
      },
      findDefined: function () {
        for (var a = 0; a < arguments.length; a++)
          if (void 0 !== arguments[a]) return arguments[a]
      },
      defaultMessage: function (b, c) {
        var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
          e = /\$?\{(\d+)\}/g;
        return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d
      },
      formatAndAdd: function (a, b) {
        var c = this.defaultMessage(a, b);
        this.errorList.push({
          message: c,
          element: a,
          method: b.method
        }), this.errorMap[a.name] = c, this.submitted[a.name] = c
      },
      addWrapper: function (a) {
        return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
      },
      defaultShowErrors: function () {
        var a, b, c;
        for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
          for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
        if (this.settings.unhighlight)
          for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
      },
      validElements: function () {
        return this.currentElements.not(this.invalidElements())
      },
      invalidElements: function () {
        return a(this.errorList).map(function () {
          return this.element
        })
      },
      showLabel: function (b, c) {
        var d, e, f, g, h = this.errorsFor(b),
          i = this.idOrName(b),
          j = a(b).attr("aria-describedby");
        h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function (b, c) {
          c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
        })))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h)
      },
      errorsFor: function (b) {
        var c = this.escapeCssMeta(this.idOrName(b)),
          d = a(b).attr("aria-describedby"),
          e = "label[for='" + c + "'], label[for='" + c + "'] *";
        return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e)
      },
      escapeCssMeta: function (a) {
        return a.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
      },
      idOrName: function (a) {
        return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
      },
      validationTargetFor: function (b) {
        return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
      },
      checkable: function (a) {
        return /radio|checkbox/i.test(a.type)
      },
      findByName: function (b) {
        return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
      },
      getLength: function (b, c) {
        switch (c.nodeName.toLowerCase()) {
          case "select":
            return a("option:selected", c).length;
          case "input":
            if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
        }
        return b.length
      },
      depend: function (a, b) {
        return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
      },
      dependTypes: {
        "boolean": function (a) {
          return a
        },
        string: function (b, c) {
          return !!a(b, c.form).length
        },
        "function": function (a, b) {
          return a(b)
        }
      },
      optional: function (b) {
        var c = this.elementValue(b);
        return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
      },
      startRequest: function (b) {
        this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0)
      },
      stopRequest: function (b, c) {
        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
      },
      previousValue: function (b, c) {
        return a.data(b, "previousValue") || a.data(b, "previousValue", {
          old: null,
          valid: !0,
          message: this.defaultMessage(b, {
            method: c
          })
        })
      },
      destroy: function () {
        this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
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
    addClassRules: function (b, c) {
      b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
    },
    classRules: function (b) {
      var c = {},
        d = a(b).attr("class");
      return d && a.each(d.split(" "), function () {
        this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
      }), c
    },
    normalizeAttributeRule: function (a, b, c, d) {
      /min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
    },
    attributeRules: function (b) {
      var c, d, e = {},
        f = a(b),
        g = b.getAttribute("type");
      for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
      return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
    },
    dataRules: function (b) {
      var c, d, e = {},
        f = a(b),
        g = b.getAttribute("type");
      for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d);
      return e
    },
    staticRules: function (b) {
      var c = {},
        d = a.data(b.form, "validator");
      return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
    },
    normalizeRules: function (b, c) {
      return a.each(b, function (d, e) {
        if (e === !1) return void delete b[d];
        if (e.param || e.depends) {
          var f = !0;
          switch (typeof e.depends) {
            case "string":
              f = !!a(e.depends, c.form).length;
              break;
            case "function":
              f = e.depends.call(c, c)
          }
          f ? b[d] = void 0 !== e.param ? e.param : !0 : (a.data(c.form, "validator").resetElements(a(c)), delete b[d])
        }
      }), a.each(b, function (d, e) {
        b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e
      }), a.each(["minlength", "maxlength"], function () {
        b[this] && (b[this] = Number(b[this]))
      }), a.each(["rangelength", "range"], function () {
        var c;
        b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
      }), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
    },
    normalizeRule: function (b) {
      if ("string" == typeof b) {
        var c = {};
        a.each(b.split(/\s/), function () {
          c[this] = !0
        }), b = c
      }
      return b
    },
    addMethod: function (b, c, d) {
      a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
    },
    methods: {
      required: function (b, c, d) {
        if (!this.depend(d, c)) return "dependency-mismatch";
        if ("select" === c.nodeName.toLowerCase()) {
          var e = a(c).val();
          return e && e.length > 0
        }
        return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
      },
      email: function (a, b) {
        return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
      },
      url: function (a, b) {
        return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(a)
      },
      date: function (a, b) {
        return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
      },
      dateISO: function (a, b) {
        return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
      },
      number: function (a, b) {
        return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
      },
      digits: function (a, b) {
        return this.optional(b) || /^\d+$/.test(a)
      },
      minlength: function (b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || e >= d
      },
      maxlength: function (b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || d >= e
      },
      rangelength: function (b, c, d) {
        var e = a.isArray(b) ? b.length : this.getLength(b, c);
        return this.optional(c) || e >= d[0] && e <= d[1]
      },
      min: function (a, b, c) {
        return this.optional(b) || a >= c
      },
      max: function (a, b, c) {
        return this.optional(b) || c >= a
      },
      range: function (a, b, c) {
        return this.optional(b) || a >= c[0] && a <= c[1]
      },
      step: function (b, c, d) {
        var e = a(c).attr("type"),
          f = "Step attribute on input type " + e + " is not supported.",
          g = ["text", "number", "range"],
          h = new RegExp("\\b" + e + "\\b"),
          i = e && !h.test(g.join());
        if (i) throw new Error(f);
        return this.optional(c) || b % d === 0
      },
      equalTo: function (b, c, d) {
        var e = a(d);
        return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
          a(c).valid()
        }), b === e.val()
      },
      remote: function (b, c, d, e) {
        if (this.optional(c)) return "dependency-mismatch";
        e = "string" == typeof e && e || "remote";
        var f, g, h, i = this.previousValue(c, e);
        return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {
          url: d
        } || d, h = a.param(a.extend({
          data: b
        }, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
          mode: "abort",
          port: "validate" + c.name,
          dataType: "json",
          data: g,
          context: f.currentForm,
          success: function (a) {
            var d, g, h, j = a === !0 || "true" === a;
            f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
              method: e,
              parameters: b
            }), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j)
          }
        }, d)), "pending")
      }
    }
  });
  var b, c = {};
  a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
    var e = a.port;
    "abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
  }) : (b = a.ajax, a.ajax = function (d) {
    var e = ("mode" in d ? d : a.ajaxSettings).mode,
      f = ("port" in d ? d : a.ajaxSettings).port;
    return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
  })
});


/** Abstract base class for collection plugins v1.0.1.
	Written by Keith Wood (kbwood{at}iinet.com.au) December 2013.
	Licensed under the MIT (http://keith-wood.name/licence.html) license. */
(function () {
  var j = false;
  window.JQClass = function () {};
  JQClass.classes = {};
  JQClass.extend = function extender(f) {
    var g = this.prototype;
    j = true;
    var h = new this();
    j = false;
    for (var i in f) {
      h[i] = typeof f[i] == 'function' && typeof g[i] == 'function' ? (function (d, e) {
        return function () {
          var b = this._super;
          this._super = function (a) {
            return g[d].apply(this, a || [])
          };
          var c = e.apply(this, arguments);
          this._super = b;
          return c
        }
      })(i, f[i]) : f[i]
    }

    function JQClass() {
      if (!j && this._init) {
        this._init.apply(this, arguments)
      }
    }
    JQClass.prototype = h;
    JQClass.prototype.constructor = JQClass;
    JQClass.extend = extender;
    return JQClass
  }
})();
(function ($) {
  JQClass.classes.JQPlugin = JQClass.extend({
    name: 'plugin',
    defaultOptions: {},
    regionalOptions: {},
    _getters: [],
    _getMarker: function () {
      return 'is-' + this.name
    },
    _init: function () {
      $.extend(this.defaultOptions, (this.regionalOptions && this.regionalOptions['']) || {});
      var c = camelCase(this.name);
      $[c] = this;
      $.fn[c] = function (a) {
        var b = Array.prototype.slice.call(arguments, 1);
        if ($[c]._isNotChained(a, b)) {
          return $[c][a].apply($[c], [this[0]].concat(b))
        }
        return this.each(function () {
          if (typeof a === 'string') {
            if (a[0] === '_' || !$[c][a]) {
              throw 'Unknown method: ' + a;
            }
            $[c][a].apply($[c], [this].concat(b))
          } else {
            $[c]._attach(this, a)
          }
        })
      }
    },
    setDefaults: function (a) {
      $.extend(this.defaultOptions, a || {})
    },
    _isNotChained: function (a, b) {
      if (a === 'option' && (b.length === 0 || (b.length === 1 && typeof b[0] === 'string'))) {
        return true
      }
      return $.inArray(a, this._getters) > -1
    },
    _attach: function (a, b) {
      a = $(a);
      if (a.hasClass(this._getMarker())) {
        return
      }
      a.addClass(this._getMarker());
      b = $.extend({}, this.defaultOptions, this._getMetadata(a), b || {});
      var c = $.extend({
        name: this.name,
        elem: a,
        options: b
      }, this._instSettings(a, b));
      a.data(this.name, c);
      this._postAttach(a, c);
      this.option(a, b)
    },
    _instSettings: function (a, b) {
      return {}
    },
    _postAttach: function (a, b) {},
    _getMetadata: function (d) {
      try {
        var f = d.data(this.name.toLowerCase()) || '';
        f = f.replace(/'/g, '"');
        f = f.replace(/([a-zA-Z0-9]+):/g, function (a, b, i) {
          var c = f.substring(0, i).match(/"/g);
          return (!c || c.length % 2 === 0 ? '"' + b + '":' : b + ':')
        });
        f = $.parseJSON('{' + f + '}');
        for (var g in f) {
          var h = f[g];
          if (typeof h === 'string' && h.match(/^new Date\((.*)\)$/)) {
            f[g] = eval(h)
          }
        }
        return f
      } catch (e) {
        return {}
      }
    },
    _getInst: function (a) {
      return $(a).data(this.name) || {}
    },
    option: function (a, b, c) {
      a = $(a);
      var d = a.data(this.name);
      if (!b || (typeof b === 'string' && c == null)) {
        var e = (d || {}).options;
        return (e && b ? e[b] : e)
      }
      if (!a.hasClass(this._getMarker())) {
        return
      }
      var e = b || {};
      if (typeof b === 'string') {
        e = {};
        e[b] = c
      }
      this._optionsChanged(a, d, e);
      $.extend(d.options, e)
    },
    _optionsChanged: function (a, b, c) {},
    destroy: function (a) {
      a = $(a);
      if (!a.hasClass(this._getMarker())) {
        return
      }
      this._preDestroy(a, this._getInst(a));
      a.removeData(this.name).removeClass(this._getMarker())
    },
    _preDestroy: function (a, b) {}
  });

  function camelCase(c) {
    return c.replace(/-([a-z])/g, function (a, b) {
      return b.toUpperCase()
    })
  }
  $.JQPlugin = {
    createPlugin: function (a, b) {
      if (typeof a === 'object') {
        b = a;
        a = 'JQPlugin'
      }
      a = camelCase(a);
      var c = camelCase(b.name);
      JQClass.classes[c] = JQClass.classes[a].extend(b);
      new JQClass.classes[c]()
    }
  }
})(jQuery);


// Generated by CoffeeScript 1.9.3
(function () {
  var e;
  e = function () {
      function e(e, t) {
        var n, r;
        this.options = {
          target: "instafeed",
          get: "popular",
          resolution: "thumbnail",
          sortBy: "none",
          links: !0,
          mock: !1,
          useHttp: !1
        };
        if (typeof e == "object")
          for (n in e) r = e[n], this.options[n] = r;
        this.context = t != null ? t : this, this.unique = this._genKey()
      }
      return e.prototype.hasNext = function () {
        return typeof this.context.nextUrl == "string" && this.context.nextUrl.length > 0
      }, e.prototype.next = function () {
        return this.hasNext() ? this.run(this.context.nextUrl) : !1
      }, e.prototype.run = function (t) {
        var n, r, i;
        if (typeof this.options.clientId != "string" && typeof this.options.accessToken != "string") throw new Error("Missing clientId or accessToken.");
        if (typeof this.options.accessToken != "string" && typeof this.options.clientId != "string") throw new Error("Missing clientId or accessToken.");
        return this.options.before != null && typeof this.options.before == "function" && this.options.before.call(this), typeof document != "undefined" && document !== null && (i = document.createElement("script"), i.id = "instafeed-fetcher", i.src = t || this._buildUrl(), n = document.getElementsByTagName("head"), n[0].appendChild(i), r = "instafeedCache" + this.unique, window[r] = new e(this.options, this), window[r].unique = this.unique), !0
      }, e.prototype.parse = function (e) {
        var t, n, r, i, s, o, u, a, f, l, c, h, p, d, v, m, g, y, b, w, E, S, x, T, N, C, k, L, A, O, M, _, D;
        if (typeof e != "object") {
          if (this.options.error != null && typeof this.options.error == "function") return this.options.error.call(this, "Invalid JSON data"), !1;
          throw new Error("Invalid JSON response")
        }
        if (e.meta.code !== 200) {
          if (this.options.error != null && typeof this.options.error == "function") return this.options.error.call(this, e.meta.error_message), !1;
          throw new Error("Error from Instagram: " + e.meta.error_message)
        }
        if (e.data.length === 0) {
          if (this.options.error != null && typeof this.options.error == "function") return this.options.error.call(this, "No images were returned from Instagram"), !1;
          throw new Error("No images were returned from Instagram")
        }
        this.options.success != null && typeof this.options.success == "function" && this.options.success.call(this, e), this.context.nextUrl = "", e.pagination != null && (this.context.nextUrl = e.pagination.next_url);
        if (this.options.sortBy !== "none") {
          this.options.sortBy === "random" ? M = ["", "random"] : M = this.options.sortBy.split("-"), O = M[0] === "least" ? !0 : !1;
          switch (M[1]) {
            case "random":
              e.data.sort(function () {
                return .5 - Math.random()
              });
              break;
            case "recent":
              e.data = this._sortBy(e.data, "created_time", O);
              break;
            case "liked":
              e.data = this._sortBy(e.data, "likes.count", O);
              break;
            case "commented":
              e.data = this._sortBy(e.data, "comments.count", O);
              break;
            default:
              throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.")
          }
        }
        if (typeof document != "undefined" && document !== null && this.options.mock === !1) {
          m = e.data, A = parseInt(this.options.limit, 10), this.options.limit != null && m.length > A && (m = m.slice(0, A)), u = document.createDocumentFragment(), this.options.filter != null && typeof this.options.filter == "function" && (m = this._filter(m, this.options.filter));
          if (this.options.template != null && typeof this.options.template == "string") {
            f = "", d = "", w = "", D = document.createElement("div");
            for (c = 0, N = m.length; c < N; c++) {
              h = m[c], p = h.images[this.options.resolution];
              if (typeof p != "object") throw o = "No image found for resolution: " + this.options.resolution + ".", new Error(o);
              E = p.width, y = p.height, b = "square", E > y && (b = "landscape"), E < y && (b = "portrait"), v = p.url, l = window.location.protocol.indexOf("http") >= 0, l && !this.options.useHttp && (v = v.replace(/https?:\/\//, "//")), d = this._makeTemplate(this.options.template, {
                model: h,
                id: h.id,
                link: h.link,
                type: h.type,
                image: v,
                width: E,
                height: y,
                orientation: b,
                caption: this._getObjectProperty(h, "caption.text"),
                likes: h.likes.count,
                comments: h.comments.count,
                location: this._getObjectProperty(h, "location.name")
              }), f += d
            }
            D.innerHTML = f, i = [], r = 0, n = D.childNodes.length;
            while (r < n) i.push(D.childNodes[r]), r += 1;
            for (x = 0, C = i.length; x < C; x++) L = i[x], u.appendChild(L)
          } else
            for (T = 0, k = m.length; T < k; T++) {
              h = m[T], g = document.createElement("img"), p = h.images[this.options.resolution];
              if (typeof p != "object") throw o = "No image found for resolution: " + this.options.resolution + ".", new Error(o);
              v = p.url, l = window.location.protocol.indexOf("http") >= 0, l && !this.options.useHttp && (v = v.replace(/https?:\/\//, "//")), g.src = v, this.options.links === !0 ? (t = document.createElement("a"), t.href = h.link, t.appendChild(g), u.appendChild(t)) : u.appendChild(g)
            }
          _ = this.options.target, typeof _ == "string" && (_ = document.getElementById(_));
          if (_ == null) throw o = 'No element with id="' + this.options.target + '" on page.', new Error(o);
          _.appendChild(u), a = document.getElementsByTagName("head")[0], a.removeChild(document.getElementById("instafeed-fetcher")), S = "instafeedCache" + this.unique, window[S] = void 0;
          try {
            delete window[S]
          } catch (P) {
            s = P
          }
        }
        return this.options.after != null && typeof this.options.after == "function" && this.options.after.call(this), !0
      }, e.prototype._buildUrl = function () {
        var e, t, n;
        e = "https://api.instagram.com/v1";
        switch (this.options.get) {
          case "popular":
            t = "media/popular";
            break;
          case "tagged":
            if (!this.options.tagName) throw new Error("No tag name specified. Use the 'tagName' option.");
            t = "tags/" + this.options.tagName + "/media/recent";
            break;
          case "location":
            if (!this.options.locationId) throw new Error("No location specified. Use the 'locationId' option.");
            t = "locations/" + this.options.locationId + "/media/recent";
            break;
          case "user":
            if (!this.options.userId) throw new Error("No user specified. Use the 'userId' option.");
            t = "users/" + this.options.userId + "/media/recent";
            break;
          default:
            throw new Error("Invalid option for get: '" + this.options.get + "'.")
        }
        return n = e + "/" + t, this.options.accessToken != null ? n += "?access_token=" + this.options.accessToken : n += "?client_id=" + this.options.clientId, this.options.limit != null && (n += "&count=" + this.options.limit), n += "&callback=instafeedCache" + this.unique + ".parse", n
      }, e.prototype._genKey = function () {
        var e;
        return e = function () {
          return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
        }, "" + e() + e() + e() + e()
      }, e.prototype._makeTemplate = function (e, t) {
        var n, r, i, s, o;
        r = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, n = e;
        while (r.test(n)) s = n.match(r)[1], o = (i = this._getObjectProperty(t, s)) != null ? i : "", n = n.replace(r, function () {
          return "" + o
        });
        return n
      }, e.prototype._getObjectProperty = function (e, t) {
        var n, r;
        t = t.replace(/\[(\w+)\]/g, ".$1"), r = t.split(".");
        while (r.length) {
          n = r.shift();
          if (!(e != null && n in e)) return null;
          e = e[n]
        }
        return e
      }, e.prototype._sortBy = function (e, t, n) {
        var r;
        return r = function (e, r) {
          var i, s;
          return i = this._getObjectProperty(e, t), s = this._getObjectProperty(r, t), n ? i > s ? 1 : -1 : i < s ? 1 : -1
        }, e.sort(r.bind(this)), e
      }, e.prototype._filter = function (e, t) {
        var n, r, i, s, o;
        n = [], r = function (e) {
          if (t(e)) return n.push(e)
        };
        for (i = 0, o = e.length; i < o; i++) s = e[i], r(s);
        return n
      }, e
    }(),
    function (e, t) {
      return typeof define == "function" && define.amd ? define([], t) : typeof module == "object" && module.exports ? module.exports = t() : e.Instafeed = t()
    }(this, function () {
      return e
    })
}).call(this);

/* http://keith-wood.name/countdown.html
   Countdown for jQuery v2.0.2.
   Written by Keith Wood (kbwood{at}iinet.com.au) January 2008.
   Available under the MIT (http://keith-wood.name/licence.html) license. 
   Please attribute the author if you use it. */
(function ($) {
  "use strict";
  var w = 'countdown';
  var Y = 0;
  var O = 1;
  var W = 2;
  var D = 3;
  var H = 4;
  var M = 5;
  var S = 6;
  $.JQPlugin.createPlugin({
    name: w,
    defaultOptions: {
      until: null,
      since: null,
      timezone: null,
      serverSync: null,
      format: 'dHMS',
      layout: '',
      compact: false,
      padZeroes: false,
      significant: 0,
      description: '',
      expiryUrl: '',
      expiryText: '',
      alwaysExpire: false,
      onExpiry: null,
      onTick: null,
      tickInterval: 1
    },
    regionalOptions: {
      '': {
        labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'],
        labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'],
        compactLabels: ['y', 'm', 'w', 'd'],
        whichLabels: null,
        digits: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
        timeSeparator: ':',
        isRTL: false
      }
    },
    _getters: ['getTimes'],
    _rtlClass: w + '-rtl',
    _sectionClass: w + '-section',
    _amountClass: w + '-amount',
    _periodClass: w + '-period',
    _rowClass: w + '-row',
    _holdingClass: w + '-holding',
    _showClass: w + '-show',
    _descrClass: w + '-descr',
    _timerElems: [],
    _init: function () {
      var c = this;
      this._super();
      this._serverSyncs = [];
      var d = (typeof Date.now == 'function' ? Date.now : function () {
        return new Date().getTime()
      });
      var e = (window.performance && typeof window.performance.now == 'function');

      function timerCallBack(a) {
        var b = (a < 1e12 ? (e ? (performance.now() + performance.timing.navigationStart) : d()) : a || d());
        if (b - g >= 1000) {
          c._updateElems();
          g = b
        }
        f(timerCallBack)
      }
      var f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null;
      var g = 0;
      if (!f || $.noRequestAnimationFrame) {
        $.noRequestAnimationFrame = null;
        setInterval(function () {
          c._updateElems()
        }, 980)
      } else {
        g = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || d();
        f(timerCallBack)
      }
    },
    UTCDate: function (a, b, c, e, f, g, h, i) {
      if (typeof b == 'object' && b.constructor == Date) {
        i = b.getMilliseconds();
        h = b.getSeconds();
        g = b.getMinutes();
        f = b.getHours();
        e = b.getDate();
        c = b.getMonth();
        b = b.getFullYear()
      }
      var d = new Date();
      d.setUTCFullYear(b);
      d.setUTCDate(1);
      d.setUTCMonth(c || 0);
      d.setUTCDate(e || 1);
      d.setUTCHours(f || 0);
      d.setUTCMinutes((g || 0) - (Math.abs(a) < 30 ? a * 60 : a));
      d.setUTCSeconds(h || 0);
      d.setUTCMilliseconds(i || 0);
      return d
    },
    periodsToSeconds: function (a) {
      return a[0] * 31557600 + a[1] * 2629800 + a[2] * 604800 + a[3] * 86400 + a[4] * 3600 + a[5] * 60 + a[6]
    },
    resync: function () {
      var d = this;
      $('.' + this._getMarker()).each(function () {
        var a = $.data(this, d.name);
        if (a.options.serverSync) {
          var b = null;
          for (var i = 0; i < d._serverSyncs.length; i++) {
            if (d._serverSyncs[i][0] == a.options.serverSync) {
              b = d._serverSyncs[i];
              break
            }
          }
          if (b[2] == null) {
            var c = ($.isFunction(a.options.serverSync) ? a.options.serverSync.apply(this, []) : null);
            b[2] = (c ? new Date().getTime() - c.getTime() : 0) - b[1]
          }
          if (a._since) {
            a._since.setMilliseconds(a._since.getMilliseconds() + b[2])
          }
          a._until.setMilliseconds(a._until.getMilliseconds() + b[2])
        }
      });
      for (var i = 0; i < d._serverSyncs.length; i++) {
        if (d._serverSyncs[i][2] != null) {
          d._serverSyncs[i][1] += d._serverSyncs[i][2];
          delete d._serverSyncs[i][2]
        }
      }
    },
    _instSettings: function (a, b) {
      return {
        _periods: [0, 0, 0, 0, 0, 0, 0]
      }
    },
    _addElem: function (a) {
      if (!this._hasElem(a)) {
        this._timerElems.push(a)
      }
    },
    _hasElem: function (a) {
      return ($.inArray(a, this._timerElems) > -1)
    },
    _removeElem: function (b) {
      this._timerElems = $.map(this._timerElems, function (a) {
        return (a == b ? null : a)
      })
    },
    _updateElems: function () {
      for (var i = this._timerElems.length - 1; i >= 0; i--) {
        this._updateCountdown(this._timerElems[i])
      }
    },
    _optionsChanged: function (a, b, c) {
      if (c.layout) {
        c.layout = c.layout.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
      }
      this._resetExtraLabels(b.options, c);
      var d = (b.options.timezone != c.timezone);
      $.extend(b.options, c);
      this._adjustSettings(a, b, c.until != null || c.since != null || d);
      var e = new Date();
      if ((b._since && b._since < e) || (b._until && b._until > e)) {
        this._addElem(a[0])
      }
      this._updateCountdown(a, b)
    },
    _updateCountdown: function (a, b) {
      a = a.jquery ? a : $(a);
      b = b || this._getInst(a);
      if (!b) {
        return
      }
      a.html(this._generateHTML(b)).toggleClass(this._rtlClass, b.options.isRTL);
      if ($.isFunction(b.options.onTick)) {
        var c = b._hold != 'lap' ? b._periods : this._calculatePeriods(b, b._show, b.options.significant, new Date());
        if (b.options.tickInterval == 1 || this.periodsToSeconds(c) % b.options.tickInterval == 0) {
          b.options.onTick.apply(a[0], [c])
        }
      }
      var d = b._hold != 'pause' && (b._since ? b._now.getTime() < b._since.getTime() : b._now.getTime() >= b._until.getTime());
      if (d && !b._expiring) {
        b._expiring = true;
        if (this._hasElem(a[0]) || b.options.alwaysExpire) {
          this._removeElem(a[0]);
          if ($.isFunction(b.options.onExpiry)) {
            b.options.onExpiry.apply(a[0], [])
          }
          if (b.options.expiryText) {
            var e = b.options.layout;
            b.options.layout = b.options.expiryText;
            this._updateCountdown(a[0], b);
            b.options.layout = e
          }
          if (b.options.expiryUrl) {
            window.location = b.options.expiryUrl
          }
        }
        b._expiring = false
      } else if (b._hold == 'pause') {
        this._removeElem(a[0])
      }
    },
    _resetExtraLabels: function (a, b) {
      for (var n in b) {
        if (n.match(/[Ll]abels[02-9]|compactLabels1/)) {
          a[n] = b[n]
        }
      }
      for (var n in a) {
        if (n.match(/[Ll]abels[02-9]|compactLabels1/) && typeof b[n] === 'undefined') {
          a[n] = null
        }
      }
    },
    _adjustSettings: function (a, b, c) {
      var d = null;
      for (var i = 0; i < this._serverSyncs.length; i++) {
        if (this._serverSyncs[i][0] == b.options.serverSync) {
          d = this._serverSyncs[i][1];
          break
        }
      }
      if (d != null) {
        var e = (b.options.serverSync ? d : 0);
        var f = new Date()
      } else {
        var g = ($.isFunction(b.options.serverSync) ? b.options.serverSync.apply(a[0], []) : null);
        var f = new Date();
        var e = (g ? f.getTime() - g.getTime() : 0);
        this._serverSyncs.push([b.options.serverSync, e])
      }
      var h = b.options.timezone;
      h = (h == null ? -f.getTimezoneOffset() : h);
      if (c || (!c && b._until == null && b._since == null)) {
        b._since = b.options.since;
        if (b._since != null) {
          b._since = this.UTCDate(h, this._determineTime(b._since, null));
          if (b._since && e) {
            b._since.setMilliseconds(b._since.getMilliseconds() + e)
          }
        }
        b._until = this.UTCDate(h, this._determineTime(b.options.until, f));
        if (e) {
          b._until.setMilliseconds(b._until.getMilliseconds() + e)
        }
      }
      b._show = this._determineShow(b)
    },
    _preDestroy: function (a, b) {
      this._removeElem(a[0]);
      a.empty()
    },
    pause: function (a) {
      this._hold(a, 'pause')
    },
    lap: function (a) {
      this._hold(a, 'lap')
    },
    resume: function (a) {
      this._hold(a, null)
    },
    toggle: function (a) {
      var b = $.data(a, this.name) || {};
      this[!b._hold ? 'pause' : 'resume'](a)
    },
    toggleLap: function (a) {
      var b = $.data(a, this.name) || {};
      this[!b._hold ? 'lap' : 'resume'](a)
    },
    _hold: function (a, b) {
      var c = $.data(a, this.name);
      if (c) {
        if (c._hold == 'pause' && !b) {
          c._periods = c._savePeriods;
          var d = (c._since ? '-' : '+');
          c[c._since ? '_since' : '_until'] = this._determineTime(d + c._periods[0] + 'y' + d + c._periods[1] + 'o' + d + c._periods[2] + 'w' + d + c._periods[3] + 'd' + d + c._periods[4] + 'h' + d + c._periods[5] + 'm' + d + c._periods[6] + 's');
          this._addElem(a)
        }
        c._hold = b;
        c._savePeriods = (b == 'pause' ? c._periods : null);
        $.data(a, this.name, c);
        this._updateCountdown(a, c)
      }
    },
    getTimes: function (a) {
      var b = $.data(a, this.name);
      return (!b ? null : (b._hold == 'pause' ? b._savePeriods : (!b._hold ? b._periods : this._calculatePeriods(b, b._show, b.options.significant, new Date()))))
    },
    _determineTime: function (k, l) {
      var m = this;
      var n = function (a) {
        var b = new Date();
        b.setTime(b.getTime() + a * 1000);
        return b
      };
      var o = function (a) {
        a = a.toLowerCase();
        var b = new Date();
        var c = b.getFullYear();
        var d = b.getMonth();
        var e = b.getDate();
        var f = b.getHours();
        var g = b.getMinutes();
        var h = b.getSeconds();
        var i = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g;
        var j = i.exec(a);
        while (j) {
          switch (j[2] || 's') {
            case 's':
              h += parseInt(j[1], 10);
              break;
            case 'm':
              g += parseInt(j[1], 10);
              break;
            case 'h':
              f += parseInt(j[1], 10);
              break;
            case 'd':
              e += parseInt(j[1], 10);
              break;
            case 'w':
              e += parseInt(j[1], 10) * 7;
              break;
            case 'o':
              d += parseInt(j[1], 10);
              e = Math.min(e, m._getDaysInMonth(c, d));
              break;
            case 'y':
              c += parseInt(j[1], 10);
              e = Math.min(e, m._getDaysInMonth(c, d));
              break
          }
          j = i.exec(a)
        }
        return new Date(c, d, e, f, g, h, 0)
      };
      var p = (k == null ? l : (typeof k == 'string' ? o(k) : (typeof k == 'number' ? n(k) : k)));
      if (p) p.setMilliseconds(0);
      return p
    },
    _getDaysInMonth: function (a, b) {
      return 32 - new Date(a, b, 32).getDate()
    },
    _normalLabels: function (a) {
      return a
    },
    _generateHTML: function (c) {
      var d = this;
      c._periods = (c._hold ? c._periods : this._calculatePeriods(c, c._show, c.options.significant, new Date()));
      var e = false;
      var f = 0;
      var g = c.options.significant;
      var h = $.extend({}, c._show);
      for (var i = Y; i <= S; i++) {
        e |= (c._show[i] == '?' && c._periods[i] > 0);
        h[i] = (c._show[i] == '?' && !e ? null : c._show[i]);
        f += (h[i] ? 1 : 0);
        g -= (c._periods[i] > 0 ? 1 : 0)
      }
      var j = [false, false, false, false, false, false, false];
      for (var i = S; i >= Y; i--) {
        if (c._show[i]) {
          if (c._periods[i]) {
            j[i] = true
          } else {
            j[i] = g > 0;
            g--
          }
        }
      }
      var k = (c.options.compact ? c.options.compactLabels : c.options.labels);
      var l = c.options.whichLabels || this._normalLabels;
      var m = function (a) {
        var b = c.options['compactLabels' + l(c._periods[a])];
        return (h[a] ? d._translateDigits(c, c._periods[a]) + (b ? b[a] : k[a]) + ' ' : '')
      };
      var n = (c.options.padZeroes ? 2 : 1);
      var o = function (a) {
        var b = c.options['labels' + l(c._periods[a])];
        return ((!c.options.significant && h[a]) || (c.options.significant && j[a]) ? '<span class="' + d._sectionClass + '">' + '<span class="' + d._amountClass + '">' + d._minDigits(c, c._periods[a], n) + '</span>' + '<span class="' + d._periodClass + '">' + (b ? b[a] : k[a]) + '</span></span>' : '')
      };
      return (c.options.layout ? this._buildLayout(c, h, c.options.layout, c.options.compact, c.options.significant, j) : ((c.options.compact ? '<span class="' + this._rowClass + ' ' + this._amountClass + (c._hold ? ' ' + this._holdingClass : '') + '">' + m(Y) + m(O) + m(W) + m(D) + (h[H] ? this._minDigits(c, c._periods[H], 2) : '') + (h[M] ? (h[H] ? c.options.timeSeparator : '') + this._minDigits(c, c._periods[M], 2) : '') + (h[S] ? (h[H] || h[M] ? c.options.timeSeparator : '') + this._minDigits(c, c._periods[S], 2) : '') : '<span class="' + this._rowClass + ' ' + this._showClass + (c.options.significant || f) + (c._hold ? ' ' + this._holdingClass : '') + '">' + o(Y) + o(O) + o(W) + o(D) + o(H) + o(M) + o(S)) + '</span>' + (c.options.description ? '<span class="' + this._rowClass + ' ' + this._descrClass + '">' + c.options.description + '</span>' : '')))
    },
    _buildLayout: function (c, d, e, f, g, h) {
      var j = c.options[f ? 'compactLabels' : 'labels'];
      var k = c.options.whichLabels || this._normalLabels;
      var l = function (a) {
        return (c.options[(f ? 'compactLabels' : 'labels') + k(c._periods[a])] || j)[a]
      };
      var m = function (a, b) {
        return c.options.digits[Math.floor(a / b) % 10]
      };
      var o = {
        desc: c.options.description,
        sep: c.options.timeSeparator,
        yl: l(Y),
        yn: this._minDigits(c, c._periods[Y], 1),
        ynn: this._minDigits(c, c._periods[Y], 2),
        ynnn: this._minDigits(c, c._periods[Y], 3),
        y1: m(c._periods[Y], 1),
        y10: m(c._periods[Y], 10),
        y100: m(c._periods[Y], 100),
        y1000: m(c._periods[Y], 1000),
        ol: l(O),
        on: this._minDigits(c, c._periods[O], 1),
        onn: this._minDigits(c, c._periods[O], 2),
        onnn: this._minDigits(c, c._periods[O], 3),
        o1: m(c._periods[O], 1),
        o10: m(c._periods[O], 10),
        o100: m(c._periods[O], 100),
        o1000: m(c._periods[O], 1000),
        wl: l(W),
        wn: this._minDigits(c, c._periods[W], 1),
        wnn: this._minDigits(c, c._periods[W], 2),
        wnnn: this._minDigits(c, c._periods[W], 3),
        w1: m(c._periods[W], 1),
        w10: m(c._periods[W], 10),
        w100: m(c._periods[W], 100),
        w1000: m(c._periods[W], 1000),
        dl: l(D),
        dn: this._minDigits(c, c._periods[D], 1),
        dnn: this._minDigits(c, c._periods[D], 2),
        dnnn: this._minDigits(c, c._periods[D], 3),
        d1: m(c._periods[D], 1),
        d10: m(c._periods[D], 10),
        d100: m(c._periods[D], 100),
        d1000: m(c._periods[D], 1000),
        hl: l(H),
        hn: this._minDigits(c, c._periods[H], 1),
        hnn: this._minDigits(c, c._periods[H], 2),
        hnnn: this._minDigits(c, c._periods[H], 3),
        h1: m(c._periods[H], 1),
        h10: m(c._periods[H], 10),
        h100: m(c._periods[H], 100),
        h1000: m(c._periods[H], 1000),
        ml: l(M),
        mn: this._minDigits(c, c._periods[M], 1),
        mnn: this._minDigits(c, c._periods[M], 2),
        mnnn: this._minDigits(c, c._periods[M], 3),
        m1: m(c._periods[M], 1),
        m10: m(c._periods[M], 10),
        m100: m(c._periods[M], 100),
        m1000: m(c._periods[M], 1000),
        sl: l(S),
        sn: this._minDigits(c, c._periods[S], 1),
        snn: this._minDigits(c, c._periods[S], 2),
        snnn: this._minDigits(c, c._periods[S], 3),
        s1: m(c._periods[S], 1),
        s10: m(c._periods[S], 10),
        s100: m(c._periods[S], 100),
        s1000: m(c._periods[S], 1000)
      };
      var p = e;
      for (var i = Y; i <= S; i++) {
        var q = 'yowdhms'.charAt(i);
        var r = new RegExp('\\{' + q + '<\\}([\\s\\S]*)\\{' + q + '>\\}', 'g');
        p = p.replace(r, ((!g && d[i]) || (g && h[i]) ? '$1' : ''))
      }
      $.each(o, function (n, v) {
        var a = new RegExp('\\{' + n + '\\}', 'g');
        p = p.replace(a, v)
      });
      return p
    },
    _minDigits: function (a, b, c) {
      b = '' + b;
      if (b.length >= c) {
        return this._translateDigits(a, b)
      }
      b = '0000000000' + b;
      return this._translateDigits(a, b.substr(b.length - c))
    },
    _translateDigits: function (b, c) {
      return ('' + c).replace(/[0-9]/g, function (a) {
        return b.options.digits[a]
      })
    },
    _determineShow: function (a) {
      var b = a.options.format;
      var c = [];
      c[Y] = (b.match('y') ? '?' : (b.match('Y') ? '!' : null));
      c[O] = (b.match('o') ? '?' : (b.match('O') ? '!' : null));
      c[W] = (b.match('w') ? '?' : (b.match('W') ? '!' : null));
      c[D] = (b.match('d') ? '?' : (b.match('D') ? '!' : null));
      c[H] = (b.match('h') ? '?' : (b.match('H') ? '!' : null));
      c[M] = (b.match('m') ? '?' : (b.match('M') ? '!' : null));
      c[S] = (b.match('s') ? '?' : (b.match('S') ? '!' : null));
      return c
    },
    _calculatePeriods: function (c, d, e, f) {
      c._now = f;
      c._now.setMilliseconds(0);
      var g = new Date(c._now.getTime());
      if (c._since) {
        if (f.getTime() < c._since.getTime()) {
          c._now = f = g
        } else {
          f = c._since
        }
      } else {
        g.setTime(c._until.getTime());
        if (f.getTime() > c._until.getTime()) {
          c._now = f = g
        }
      }
      var h = [0, 0, 0, 0, 0, 0, 0];
      if (d[Y] || d[O]) {
        var i = this._getDaysInMonth(f.getFullYear(), f.getMonth());
        var j = this._getDaysInMonth(g.getFullYear(), g.getMonth());
        var k = (g.getDate() == f.getDate() || (g.getDate() >= Math.min(i, j) && f.getDate() >= Math.min(i, j)));
        var l = function (a) {
          return (a.getHours() * 60 + a.getMinutes()) * 60 + a.getSeconds()
        };
        var m = Math.max(0, (g.getFullYear() - f.getFullYear()) * 12 + g.getMonth() - f.getMonth() + ((g.getDate() < f.getDate() && !k) || (k && l(g) < l(f)) ? -1 : 0));
        h[Y] = (d[Y] ? Math.floor(m / 12) : 0);
        h[O] = (d[O] ? m - h[Y] * 12 : 0);
        f = new Date(f.getTime());
        var n = (f.getDate() == i);
        var o = this._getDaysInMonth(f.getFullYear() + h[Y], f.getMonth() + h[O]);
        if (f.getDate() > o) {
          f.setDate(o)
        }
        f.setFullYear(f.getFullYear() + h[Y]);
        f.setMonth(f.getMonth() + h[O]);
        if (n) {
          f.setDate(o)
        }
      }
      var p = Math.floor((g.getTime() - f.getTime()) / 1000);
      var q = function (a, b) {
        h[a] = (d[a] ? Math.floor(p / b) : 0);
        p -= h[a] * b
      };
      q(W, 604800);
      q(D, 86400);
      q(H, 3600);
      q(M, 60);
      q(S, 1);
      if (p > 0 && !c._since) {
        var r = [1, 12, 4.3482, 7, 24, 60, 60];
        var s = S;
        var t = 1;
        for (var u = S; u >= Y; u--) {
          if (d[u]) {
            if (h[s] >= t) {
              h[s] = 0;
              p = 1
            }
            if (p > 0) {
              h[u]++;
              p = 0;
              s = u;
              t = 1
            }
          }
          t *= r[u]
        }
      }
      if (e) {
        for (var u = Y; u <= S; u++) {
          if (e && h[u]) {
            e--
          } else if (!e) {
            h[u] = 0
          }
        }
      }
      return h
    }
  })
})(jQuery);