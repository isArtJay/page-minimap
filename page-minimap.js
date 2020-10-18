!(function(e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("pagemap", [], t)
    : "object" == typeof exports
    ? (exports.pagemap = t())
    : (e.pagemap = t());
})("undefined" != typeof self ? self : this, function() {
  return (
    (r = {}),
    (o.m = n = [
      function(e, t, n) {
        (function(M) {
          e.exports = function(c, e) {
            function t(e) {
              return "rgba(0,0,0,".concat(e / 100, ")");
            }
            function r(t, n, e, r) {
              return e.split(/\s+/).forEach(function(e) {
                return t[n](e, r);
              });
            }
            function o(e, t, n) {
              return r(e, "addEventListener", t, n);
            }
            function n(e, t, n) {
              return r(e, "removeEventListener", t, n);
            }
            function u(e, t, n, r) {
              return { x: e, y: t, w: n, h: r };
            }
            function l(e, t) {
              var n = 1 < arguments.length && void 0 !== t ? t : { x: 0, y: 0 };
              return u(e.x - n.x, e.y - n.y, e.w, e.h);
            }
            function f(e) {
              var t = e.getBoundingClientRect();
              return { x: t.left + O.pageXOffset, y: t.top + O.pageYOffset };
            }
            function a(e) {
              var t = f(e),
                n = t.x,
                r = t.y;
              return u(
                n + e.clientLeft,
                r + e.clientTop,
                e.clientWidth,
                e.clientHeight
              );
            }
            function s(e, t) {
              t &&
                (H.beginPath(),
                H.rect(e.x, e.y, e.w, e.h),
                (H.fillStyle = t),
                H.fill());
            }
            function p(n) {
              Object.keys(n).forEach(function(e) {
                var t,
                  i = n[e];
                (t = e),
                  Array.from((W || S).querySelectorAll(t)).forEach(function(e) {
                    var t, n, r, o;
                    s(
                      l(
                        ((n = f((t = e))),
                        (r = n.x),
                        (o = n.y),
                        u(r, o, t.offsetWidth, t.offsetHeight)),
                        m
                      ),
                      i
                    );
                  });
              });
            }
            function i() {
              var e, t, n, r, o, i;
              (m = W
                ? ((t = f((e = W))),
                  (n = t.x),
                  (r = t.y),
                  u(
                    n + e.clientLeft - e.scrollLeft,
                    r + e.clientTop - e.scrollTop,
                    e.scrollWidth,
                    e.scrollHeight
                  ))
                : u(0, 0, T.scrollWidth, T.scrollHeight)),
                (x = W
                  ? a(W)
                  : u(
                      O.pageXOffset,
                      O.pageYOffset,
                      T.clientWidth,
                      T.clientHeight
                    )),
                (b = P(m.w, m.h)),
                (o = m.w * b),
                (i = m.h * b),
                (c.width = o),
                (c.height = i),
                (c.style.width = "".concat(o, "px")),
                (c.style.height = "".concat(i, "px")),
                H.setTransform(1, 0, 0, 1, 0, 0),
                H.clearRect(0, 0, c.width, c.height),
                H.scale(b, b),
                s(l(m, m), L.back),
                p(L.styles),
                s(l(x, m), _ ? L.drag : L.view);
            }
            function d(e) {
              e.preventDefault();
              var t = a(c),
                n = (e.pageX - t.x) / b - x.w * w,
                r = (e.pageY - t.y) / b - x.h * j;
              W ? ((W.scrollLeft = n), (W.scrollTop = r)) : O.scrollTo(n, r),
                i();
            }
            function h(e) {
              (_ = !1),
                (c.style.cursor = "pointer"),
                (E.style.cursor = "auto"),
                n(O, "mousemove", d),
                n(O, "mouseup", h),
                d(e);
            }
            function y(e) {
              _ = !0;
              var t = a(c),
                n = l(x, m);
              (w = ((e.pageX - t.x) / b - n.x) / n.w),
                (j = ((e.pageY - t.y) / b - n.y) / n.h),
                (w < 0 || 1 < w || j < 0 || 1 < j) && (j = w = 0.5),
                (c.style.cursor = "crosshair"),
                (E.style.cursor = "crosshair"),
                o(O, "mousemove", d),
                o(O, "mouseup", h),
                d(e);
            }
            var g,
              v,
              m,
              x,
              b,
              w,
              j,
              O = M.window,
              S = O.document,
              T = S.documentElement,
              E = S.querySelector("body"),
              H = c.getContext("2d"),
              L = Object.assign(
                {
                  viewport: null,
                  styles: {
                    "header,footer,section,article": t(8),
                    "h1,a": t(10),
                    "h2,h3,h4": t(8)
                  },
                  back: t(2),
                  view: t(5),
                  drag: t(10),
                  interval: null
                },
                e
              ),
              P =
                ((g = c.clientWidth),
                (v = c.clientHeight),
                function(e, t) {
                  return Math.min(g / e, v / t);
                }),
              W = L.viewport,
              _ = !1;
            return (
              (c.style.cursor = "pointer"),
              o(c, "mousedown", y),
              o(W || O, "load resize scroll", i),
              0 < L.interval &&
                setInterval(function() {
                  return i();
                }, L.interval),
              i(),
              { redraw: i }
            );
          };
        }.call(this, n(1)));
      },
      function(e, t) {
        var n;
        n = (function() {
          return this;
        })();
        try {
          n = n || new Function("return this")();
        } catch (e) {
          "object" == typeof window && (n = window);
        }
        e.exports = n;
      }
    ]),
    (o.c = r),
    (o.d = function(e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function(e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function(t, e) {
      if ((1 & e && (t = o(t)), 8 & e)) return t;
      if (4 & e && "object" == typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: t }),
        2 & e && "string" != typeof t)
      )
        for (var r in t)
          o.d(
            n,
            r,
            function(e) {
              return t[e];
            }.bind(null, r)
          );
      return n;
    }),
    (o.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e.default;
            }
          : function() {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = ""),
    o((o.s = 0))
  );
  function o(e) {
    if (r[e]) return r[e].exports;
    var t = (r[e] = { i: e, l: !1, exports: {} });
    return n[e].call(t.exports, t, t.exports, o), (t.l = !0), t.exports;
  }
  var n, r;
});
