import Je, { useState as re, useRef as me, useEffect as le, Fragment as Dt } from "react";
var ze = { exports: {} }, be = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function Wt() {
  if (dt) return be;
  dt = 1;
  var d = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function o(r, a, s) {
    var E = null;
    if (s !== void 0 && (E = "" + s), a.key !== void 0 && (E = "" + a.key), "key" in a) {
      s = {};
      for (var i in a)
        i !== "key" && (s[i] = a[i]);
    } else s = a;
    return a = s.ref, {
      $$typeof: d,
      type: r,
      key: E,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return be.Fragment = e, be.jsx = o, be.jsxs = o, be;
}
var we = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pt;
function Ht() {
  return pt || (pt = 1, process.env.NODE_ENV !== "production" && function() {
    function d(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === ee ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case k:
          return "Fragment";
        case F:
          return "Profiler";
        case I:
          return "StrictMode";
        case Q:
          return "Suspense";
        case X:
          return "SuspenseList";
        case ie:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case m:
            return "Portal";
          case M:
            return t.displayName || "Context";
          case C:
            return (t._context.displayName || "Context") + ".Consumer";
          case S:
            var n = t.render;
            return t = t.displayName, t || (t = n.displayName || n.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case he:
            return n = t.displayName || null, n !== null ? n : d(t.type) || "Memo";
          case K:
            n = t._payload, t = t._init;
            try {
              return d(t(n));
            } catch {
            }
        }
      return null;
    }
    function e(t) {
      return "" + t;
    }
    function o(t) {
      try {
        e(t);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var l = n.error, T = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return l.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          T
        ), e(t);
      }
    }
    function r(t) {
      if (t === k) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === K)
        return "<...>";
      try {
        var n = d(t);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var t = fe.A;
      return t === null ? null : t.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function E(t) {
      if (ne.call(t, "key")) {
        var n = Object.getOwnPropertyDescriptor(t, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function i(t, n) {
      function l() {
        Z || (Z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      l.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: l,
        configurable: !0
      });
    }
    function y() {
      var t = d(this.type);
      return ae[t] || (ae[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function g(t, n, l, T, _, R) {
      var w = l.ref;
      return t = {
        $$typeof: x,
        type: t,
        key: n,
        props: l,
        _owner: T
      }, (w !== void 0 ? w : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: y
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: _
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: R
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function v(t, n, l, T, _, R) {
      var w = n.children;
      if (w !== void 0)
        if (T)
          if (de(w)) {
            for (T = 0; T < w.length; T++)
              h(w[T]);
            Object.freeze && Object.freeze(w);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else h(w);
      if (ne.call(n, "key")) {
        w = d(t);
        var A = Object.keys(n).filter(function(j) {
          return j !== "key";
        });
        T = 0 < A.length ? "{key: someKey, " + A.join(": ..., ") + ": ...}" : "{key: someKey}", b[w + T] || (A = 0 < A.length ? "{" + A.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          T,
          w,
          A,
          w
        ), b[w + T] = !0);
      }
      if (w = null, l !== void 0 && (o(l), w = "" + l), E(n) && (o(n.key), w = "" + n.key), "key" in n) {
        l = {};
        for (var P in n)
          P !== "key" && (l[P] = n[P]);
      } else l = n;
      return w && i(
        l,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), g(
        t,
        w,
        l,
        a(),
        _,
        R
      );
    }
    function h(t) {
      O(t) ? t._store && (t._store.validated = 1) : typeof t == "object" && t !== null && t.$$typeof === K && (t._payload.status === "fulfilled" ? O(t._payload.value) && t._payload.value._store && (t._payload.value._store.validated = 1) : t._store && (t._store.validated = 1));
    }
    function O(t) {
      return typeof t == "object" && t !== null && t.$$typeof === x;
    }
    var c = Je, x = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), C = Symbol.for("react.consumer"), M = Symbol.for("react.context"), S = Symbol.for("react.forward_ref"), Q = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), he = Symbol.for("react.memo"), K = Symbol.for("react.lazy"), ie = Symbol.for("react.activity"), ee = Symbol.for("react.client.reference"), fe = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = Object.prototype.hasOwnProperty, de = Array.isArray, ce = console.createTask ? console.createTask : function() {
      return null;
    };
    c = {
      react_stack_bottom_frame: function(t) {
        return t();
      }
    };
    var Z, ae = {}, te = c.react_stack_bottom_frame.bind(
      c,
      s
    )(), pe = ce(r(s)), b = {};
    we.Fragment = k, we.jsx = function(t, n, l) {
      var T = 1e4 > fe.recentlyCreatedOwnerStacks++;
      return v(
        t,
        n,
        l,
        !1,
        T ? Error("react-stack-top-frame") : te,
        T ? ce(r(t)) : pe
      );
    }, we.jsxs = function(t, n, l) {
      var T = 1e4 > fe.recentlyCreatedOwnerStacks++;
      return v(
        t,
        n,
        l,
        !0,
        T ? Error("react-stack-top-frame") : te,
        T ? ce(r(t)) : pe
      );
    };
  }()), we;
}
process.env.NODE_ENV === "production" ? ze.exports = Wt() : ze.exports = Ht();
var q = ze.exports, Ie = {}, Be = { exports: {} }, je = { exports: {} }, B = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ht;
function Ut() {
  if (ht) return B;
  ht = 1;
  var d = typeof Symbol == "function" && Symbol.for, e = d ? Symbol.for("react.element") : 60103, o = d ? Symbol.for("react.portal") : 60106, r = d ? Symbol.for("react.fragment") : 60107, a = d ? Symbol.for("react.strict_mode") : 60108, s = d ? Symbol.for("react.profiler") : 60114, E = d ? Symbol.for("react.provider") : 60109, i = d ? Symbol.for("react.context") : 60110, y = d ? Symbol.for("react.async_mode") : 60111, g = d ? Symbol.for("react.concurrent_mode") : 60111, v = d ? Symbol.for("react.forward_ref") : 60112, h = d ? Symbol.for("react.suspense") : 60113, O = d ? Symbol.for("react.suspense_list") : 60120, c = d ? Symbol.for("react.memo") : 60115, x = d ? Symbol.for("react.lazy") : 60116, m = d ? Symbol.for("react.block") : 60121, k = d ? Symbol.for("react.fundamental") : 60117, I = d ? Symbol.for("react.responder") : 60118, F = d ? Symbol.for("react.scope") : 60119;
  function C(S) {
    if (typeof S == "object" && S !== null) {
      var Q = S.$$typeof;
      switch (Q) {
        case e:
          switch (S = S.type, S) {
            case y:
            case g:
            case r:
            case s:
            case a:
            case h:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case i:
                case v:
                case x:
                case c:
                case E:
                  return S;
                default:
                  return Q;
              }
          }
        case o:
          return Q;
      }
    }
  }
  function M(S) {
    return C(S) === g;
  }
  return B.AsyncMode = y, B.ConcurrentMode = g, B.ContextConsumer = i, B.ContextProvider = E, B.Element = e, B.ForwardRef = v, B.Fragment = r, B.Lazy = x, B.Memo = c, B.Portal = o, B.Profiler = s, B.StrictMode = a, B.Suspense = h, B.isAsyncMode = function(S) {
    return M(S) || C(S) === y;
  }, B.isConcurrentMode = M, B.isContextConsumer = function(S) {
    return C(S) === i;
  }, B.isContextProvider = function(S) {
    return C(S) === E;
  }, B.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === e;
  }, B.isForwardRef = function(S) {
    return C(S) === v;
  }, B.isFragment = function(S) {
    return C(S) === r;
  }, B.isLazy = function(S) {
    return C(S) === x;
  }, B.isMemo = function(S) {
    return C(S) === c;
  }, B.isPortal = function(S) {
    return C(S) === o;
  }, B.isProfiler = function(S) {
    return C(S) === s;
  }, B.isStrictMode = function(S) {
    return C(S) === a;
  }, B.isSuspense = function(S) {
    return C(S) === h;
  }, B.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === r || S === g || S === s || S === a || S === h || S === O || typeof S == "object" && S !== null && (S.$$typeof === x || S.$$typeof === c || S.$$typeof === E || S.$$typeof === i || S.$$typeof === v || S.$$typeof === k || S.$$typeof === I || S.$$typeof === F || S.$$typeof === m);
  }, B.typeOf = C, B;
}
var J = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vt;
function zt() {
  return vt || (vt = 1, process.env.NODE_ENV !== "production" && function() {
    var d = typeof Symbol == "function" && Symbol.for, e = d ? Symbol.for("react.element") : 60103, o = d ? Symbol.for("react.portal") : 60106, r = d ? Symbol.for("react.fragment") : 60107, a = d ? Symbol.for("react.strict_mode") : 60108, s = d ? Symbol.for("react.profiler") : 60114, E = d ? Symbol.for("react.provider") : 60109, i = d ? Symbol.for("react.context") : 60110, y = d ? Symbol.for("react.async_mode") : 60111, g = d ? Symbol.for("react.concurrent_mode") : 60111, v = d ? Symbol.for("react.forward_ref") : 60112, h = d ? Symbol.for("react.suspense") : 60113, O = d ? Symbol.for("react.suspense_list") : 60120, c = d ? Symbol.for("react.memo") : 60115, x = d ? Symbol.for("react.lazy") : 60116, m = d ? Symbol.for("react.block") : 60121, k = d ? Symbol.for("react.fundamental") : 60117, I = d ? Symbol.for("react.responder") : 60118, F = d ? Symbol.for("react.scope") : 60119;
    function C(f) {
      return typeof f == "string" || typeof f == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      f === r || f === g || f === s || f === a || f === h || f === O || typeof f == "object" && f !== null && (f.$$typeof === x || f.$$typeof === c || f.$$typeof === E || f.$$typeof === i || f.$$typeof === v || f.$$typeof === k || f.$$typeof === I || f.$$typeof === F || f.$$typeof === m);
    }
    function M(f) {
      if (typeof f == "object" && f !== null) {
        var z = f.$$typeof;
        switch (z) {
          case e:
            var oe = f.type;
            switch (oe) {
              case y:
              case g:
              case r:
              case s:
              case a:
              case h:
                return oe;
              default:
                var ve = oe && oe.$$typeof;
                switch (ve) {
                  case i:
                  case v:
                  case x:
                  case c:
                  case E:
                    return ve;
                  default:
                    return z;
                }
            }
          case o:
            return z;
        }
      }
    }
    var S = y, Q = g, X = i, he = E, K = e, ie = v, ee = r, fe = x, ne = c, de = o, ce = s, Z = a, ae = h, te = !1;
    function pe(f) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), b(f) || M(f) === y;
    }
    function b(f) {
      return M(f) === g;
    }
    function t(f) {
      return M(f) === i;
    }
    function n(f) {
      return M(f) === E;
    }
    function l(f) {
      return typeof f == "object" && f !== null && f.$$typeof === e;
    }
    function T(f) {
      return M(f) === v;
    }
    function _(f) {
      return M(f) === r;
    }
    function R(f) {
      return M(f) === x;
    }
    function w(f) {
      return M(f) === c;
    }
    function A(f) {
      return M(f) === o;
    }
    function P(f) {
      return M(f) === s;
    }
    function j(f) {
      return M(f) === a;
    }
    function L(f) {
      return M(f) === h;
    }
    J.AsyncMode = S, J.ConcurrentMode = Q, J.ContextConsumer = X, J.ContextProvider = he, J.Element = K, J.ForwardRef = ie, J.Fragment = ee, J.Lazy = fe, J.Memo = ne, J.Portal = de, J.Profiler = ce, J.StrictMode = Z, J.Suspense = ae, J.isAsyncMode = pe, J.isConcurrentMode = b, J.isContextConsumer = t, J.isContextProvider = n, J.isElement = l, J.isForwardRef = T, J.isFragment = _, J.isLazy = R, J.isMemo = w, J.isPortal = A, J.isProfiler = P, J.isStrictMode = j, J.isSuspense = L, J.isValidElementType = C, J.typeOf = M;
  }()), J;
}
var mt;
function Ct() {
  return mt || (mt = 1, process.env.NODE_ENV === "production" ? je.exports = Ut() : je.exports = zt()), je.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Fe, yt;
function Bt() {
  if (yt) return Fe;
  yt = 1;
  var d = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, o = Object.prototype.propertyIsEnumerable;
  function r(s) {
    if (s == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(s);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var s = new String("abc");
      if (s[5] = "de", Object.getOwnPropertyNames(s)[0] === "5")
        return !1;
      for (var E = {}, i = 0; i < 10; i++)
        E["_" + String.fromCharCode(i)] = i;
      var y = Object.getOwnPropertyNames(E).map(function(v) {
        return E[v];
      });
      if (y.join("") !== "0123456789")
        return !1;
      var g = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(v) {
        g[v] = v;
      }), Object.keys(Object.assign({}, g)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Fe = a() ? Object.assign : function(s, E) {
    for (var i, y = r(s), g, v = 1; v < arguments.length; v++) {
      i = Object(arguments[v]);
      for (var h in i)
        e.call(i, h) && (y[h] = i[h]);
      if (d) {
        g = d(i);
        for (var O = 0; O < g.length; O++)
          o.call(i, g[O]) && (y[g[O]] = i[g[O]]);
      }
    }
    return y;
  }, Fe;
}
var Ye, gt;
function Ve() {
  if (gt) return Ye;
  gt = 1;
  var d = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ye = d, Ye;
}
var De, Et;
function Rt() {
  return Et || (Et = 1, De = Function.call.bind(Object.prototype.hasOwnProperty)), De;
}
var We, Tt;
function Jt() {
  if (Tt) return We;
  Tt = 1;
  var d = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = Ve(), o = {}, r = Rt();
    d = function(s) {
      var E = "Warning: " + s;
      typeof console < "u" && console.error(E);
      try {
        throw new Error(E);
      } catch {
      }
    };
  }
  function a(s, E, i, y, g) {
    if (process.env.NODE_ENV !== "production") {
      for (var v in s)
        if (r(s, v)) {
          var h;
          try {
            if (typeof s[v] != "function") {
              var O = Error(
                (y || "React class") + ": " + i + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw O.name = "Invariant Violation", O;
            }
            h = s[v](E, v, y, i, null, e);
          } catch (x) {
            h = x;
          }
          if (h && !(h instanceof Error) && d(
            (y || "React class") + ": type specification of " + i + " `" + v + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in o)) {
            o[h.message] = !0;
            var c = g ? g() : "";
            d(
              "Failed " + i + " type: " + h.message + (c ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (o = {});
  }, We = a, We;
}
var He, bt;
function Vt() {
  if (bt) return He;
  bt = 1;
  var d = Ct(), e = Bt(), o = Ve(), r = Rt(), a = Jt(), s = function() {
  };
  process.env.NODE_ENV !== "production" && (s = function(i) {
    var y = "Warning: " + i;
    typeof console < "u" && console.error(y);
    try {
      throw new Error(y);
    } catch {
    }
  });
  function E() {
    return null;
  }
  return He = function(i, y) {
    var g = typeof Symbol == "function" && Symbol.iterator, v = "@@iterator";
    function h(b) {
      var t = b && (g && b[g] || b[v]);
      if (typeof t == "function")
        return t;
    }
    var O = "<<anonymous>>", c = {
      array: I("array"),
      bigint: I("bigint"),
      bool: I("boolean"),
      func: I("function"),
      number: I("number"),
      object: I("object"),
      string: I("string"),
      symbol: I("symbol"),
      any: F(),
      arrayOf: C,
      element: M(),
      elementType: S(),
      instanceOf: Q,
      node: ie(),
      objectOf: he,
      oneOf: X,
      oneOfType: K,
      shape: fe,
      exact: ne
    };
    function x(b, t) {
      return b === t ? b !== 0 || 1 / b === 1 / t : b !== b && t !== t;
    }
    function m(b, t) {
      this.message = b, this.data = t && typeof t == "object" ? t : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function k(b) {
      if (process.env.NODE_ENV !== "production")
        var t = {}, n = 0;
      function l(_, R, w, A, P, j, L) {
        if (A = A || O, j = j || w, L !== o) {
          if (y) {
            var f = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw f.name = "Invariant Violation", f;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var z = A + ":" + w;
            !t[z] && // Avoid spamming the console because they are often not actionable except for lib authors
            n < 3 && (s(
              "You are manually calling a React.PropTypes validation function for the `" + j + "` prop on `" + A + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), t[z] = !0, n++);
          }
        }
        return R[w] == null ? _ ? R[w] === null ? new m("The " + P + " `" + j + "` is marked as required " + ("in `" + A + "`, but its value is `null`.")) : new m("The " + P + " `" + j + "` is marked as required in " + ("`" + A + "`, but its value is `undefined`.")) : null : b(R, w, A, P, j);
      }
      var T = l.bind(null, !1);
      return T.isRequired = l.bind(null, !0), T;
    }
    function I(b) {
      function t(n, l, T, _, R, w) {
        var A = n[l], P = Z(A);
        if (P !== b) {
          var j = ae(A);
          return new m(
            "Invalid " + _ + " `" + R + "` of type " + ("`" + j + "` supplied to `" + T + "`, expected ") + ("`" + b + "`."),
            { expectedType: b }
          );
        }
        return null;
      }
      return k(t);
    }
    function F() {
      return k(E);
    }
    function C(b) {
      function t(n, l, T, _, R) {
        if (typeof b != "function")
          return new m("Property `" + R + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
        var w = n[l];
        if (!Array.isArray(w)) {
          var A = Z(w);
          return new m("Invalid " + _ + " `" + R + "` of type " + ("`" + A + "` supplied to `" + T + "`, expected an array."));
        }
        for (var P = 0; P < w.length; P++) {
          var j = b(w, P, T, _, R + "[" + P + "]", o);
          if (j instanceof Error)
            return j;
        }
        return null;
      }
      return k(t);
    }
    function M() {
      function b(t, n, l, T, _) {
        var R = t[n];
        if (!i(R)) {
          var w = Z(R);
          return new m("Invalid " + T + " `" + _ + "` of type " + ("`" + w + "` supplied to `" + l + "`, expected a single ReactElement."));
        }
        return null;
      }
      return k(b);
    }
    function S() {
      function b(t, n, l, T, _) {
        var R = t[n];
        if (!d.isValidElementType(R)) {
          var w = Z(R);
          return new m("Invalid " + T + " `" + _ + "` of type " + ("`" + w + "` supplied to `" + l + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return k(b);
    }
    function Q(b) {
      function t(n, l, T, _, R) {
        if (!(n[l] instanceof b)) {
          var w = b.name || O, A = pe(n[l]);
          return new m("Invalid " + _ + " `" + R + "` of type " + ("`" + A + "` supplied to `" + T + "`, expected ") + ("instance of `" + w + "`."));
        }
        return null;
      }
      return k(t);
    }
    function X(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : s("Invalid argument supplied to oneOf, expected an array.")), E;
      function t(n, l, T, _, R) {
        for (var w = n[l], A = 0; A < b.length; A++)
          if (x(w, b[A]))
            return null;
        var P = JSON.stringify(b, function(L, f) {
          var z = ae(f);
          return z === "symbol" ? String(f) : f;
        });
        return new m("Invalid " + _ + " `" + R + "` of value `" + String(w) + "` " + ("supplied to `" + T + "`, expected one of " + P + "."));
      }
      return k(t);
    }
    function he(b) {
      function t(n, l, T, _, R) {
        if (typeof b != "function")
          return new m("Property `" + R + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
        var w = n[l], A = Z(w);
        if (A !== "object")
          return new m("Invalid " + _ + " `" + R + "` of type " + ("`" + A + "` supplied to `" + T + "`, expected an object."));
        for (var P in w)
          if (r(w, P)) {
            var j = b(w, P, T, _, R + "." + P, o);
            if (j instanceof Error)
              return j;
          }
        return null;
      }
      return k(t);
    }
    function K(b) {
      if (!Array.isArray(b))
        return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), E;
      for (var t = 0; t < b.length; t++) {
        var n = b[t];
        if (typeof n != "function")
          return s(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + te(n) + " at index " + t + "."
          ), E;
      }
      function l(T, _, R, w, A) {
        for (var P = [], j = 0; j < b.length; j++) {
          var L = b[j], f = L(T, _, R, w, A, o);
          if (f == null)
            return null;
          f.data && r(f.data, "expectedType") && P.push(f.data.expectedType);
        }
        var z = P.length > 0 ? ", expected one of type [" + P.join(", ") + "]" : "";
        return new m("Invalid " + w + " `" + A + "` supplied to " + ("`" + R + "`" + z + "."));
      }
      return k(l);
    }
    function ie() {
      function b(t, n, l, T, _) {
        return de(t[n]) ? null : new m("Invalid " + T + " `" + _ + "` supplied to " + ("`" + l + "`, expected a ReactNode."));
      }
      return k(b);
    }
    function ee(b, t, n, l, T) {
      return new m(
        (b || "React class") + ": " + t + " type `" + n + "." + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
      );
    }
    function fe(b) {
      function t(n, l, T, _, R) {
        var w = n[l], A = Z(w);
        if (A !== "object")
          return new m("Invalid " + _ + " `" + R + "` of type `" + A + "` " + ("supplied to `" + T + "`, expected `object`."));
        for (var P in b) {
          var j = b[P];
          if (typeof j != "function")
            return ee(T, _, R, P, ae(j));
          var L = j(w, P, T, _, R + "." + P, o);
          if (L)
            return L;
        }
        return null;
      }
      return k(t);
    }
    function ne(b) {
      function t(n, l, T, _, R) {
        var w = n[l], A = Z(w);
        if (A !== "object")
          return new m("Invalid " + _ + " `" + R + "` of type `" + A + "` " + ("supplied to `" + T + "`, expected `object`."));
        var P = e({}, n[l], b);
        for (var j in P) {
          var L = b[j];
          if (r(b, j) && typeof L != "function")
            return ee(T, _, R, j, ae(L));
          if (!L)
            return new m(
              "Invalid " + _ + " `" + R + "` key `" + j + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(n[l], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(b), null, "  ")
            );
          var f = L(w, j, T, _, R + "." + j, o);
          if (f)
            return f;
        }
        return null;
      }
      return k(t);
    }
    function de(b) {
      switch (typeof b) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !b;
        case "object":
          if (Array.isArray(b))
            return b.every(de);
          if (b === null || i(b))
            return !0;
          var t = h(b);
          if (t) {
            var n = t.call(b), l;
            if (t !== b.entries) {
              for (; !(l = n.next()).done; )
                if (!de(l.value))
                  return !1;
            } else
              for (; !(l = n.next()).done; ) {
                var T = l.value;
                if (T && !de(T[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ce(b, t) {
      return b === "symbol" ? !0 : t ? t["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && t instanceof Symbol : !1;
    }
    function Z(b) {
      var t = typeof b;
      return Array.isArray(b) ? "array" : b instanceof RegExp ? "object" : ce(t, b) ? "symbol" : t;
    }
    function ae(b) {
      if (typeof b > "u" || b === null)
        return "" + b;
      var t = Z(b);
      if (t === "object") {
        if (b instanceof Date)
          return "date";
        if (b instanceof RegExp)
          return "regexp";
      }
      return t;
    }
    function te(b) {
      var t = ae(b);
      switch (t) {
        case "array":
        case "object":
          return "an " + t;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + t;
        default:
          return t;
      }
    }
    function pe(b) {
      return !b.constructor || !b.constructor.name ? O : b.constructor.name;
    }
    return c.checkPropTypes = a, c.resetWarningCache = a.resetWarningCache, c.PropTypes = c, c;
  }, He;
}
var Ue, wt;
function Gt() {
  if (wt) return Ue;
  wt = 1;
  var d = Ve();
  function e() {
  }
  function o() {
  }
  return o.resetWarningCache = e, Ue = function() {
    function r(E, i, y, g, v, h) {
      if (h !== d) {
        var O = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw O.name = "Invariant Violation", O;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var s = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: a,
      element: r,
      elementType: r,
      instanceOf: a,
      node: r,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: o,
      resetWarningCache: e
    };
    return s.PropTypes = s, s;
  }, Ue;
}
if (process.env.NODE_ENV !== "production") {
  var Zt = Ct(), Xt = !0;
  Be.exports = Vt()(Zt.isElement, Xt);
} else
  Be.exports = Gt()();
var Qt = Be.exports, _t = { exports: {} };
(function(d) {
  d.exports = /******/
  function(e) {
    var o = {};
    function r(a) {
      if (o[a])
        return o[a].exports;
      var s = o[a] = {
        /******/
        exports: {},
        /******/
        id: a,
        /******/
        loaded: !1
        /******/
      };
      return e[a].call(s.exports, s, s.exports, r), s.loaded = !0, s.exports;
    }
    return r.m = e, r.c = o, r.p = "", r(0);
  }([
    /* 0 */
    /***/
    function(e, o, r) {
      e.exports = r(1);
    },
    /* 1 */
    /***/
    function(e, o, r) {
      Object.defineProperty(o, "__esModule", {
        value: !0
      });
      function a(i) {
        return i && i.__esModule ? i : { default: i };
      }
      var s = r(2), E = a(s);
      o.default = E.default, e.exports = o.default;
    },
    /* 2 */
    /***/
    function(e, o, r) {
      Object.defineProperty(o, "__esModule", {
        value: !0
      });
      var a = Object.assign || function(x) {
        for (var m = 1; m < arguments.length; m++) {
          var k = arguments[m];
          for (var I in k)
            Object.prototype.hasOwnProperty.call(k, I) && (x[I] = k[I]);
        }
        return x;
      };
      o.default = c;
      function s(x) {
        return x && x.__esModule ? x : { default: x };
      }
      function E(x, m) {
        var k = {};
        for (var I in x)
          m.indexOf(I) >= 0 || Object.prototype.hasOwnProperty.call(x, I) && (k[I] = x[I]);
        return k;
      }
      var i = r(3), y = r(4), g = s(y), v = r(14), h = r(15), O = s(h);
      c.propTypes = {
        activeClassName: g.default.string,
        activeIndex: g.default.number,
        activeStyle: g.default.object,
        autoEscape: g.default.bool,
        className: g.default.string,
        findChunks: g.default.func,
        highlightClassName: g.default.oneOfType([g.default.object, g.default.string]),
        highlightStyle: g.default.object,
        highlightTag: g.default.oneOfType([g.default.node, g.default.func, g.default.string]),
        sanitize: g.default.func,
        searchWords: g.default.arrayOf(g.default.oneOfType([g.default.string, g.default.instanceOf(RegExp)])).isRequired,
        textToHighlight: g.default.string.isRequired,
        unhighlightClassName: g.default.string,
        unhighlightStyle: g.default.object
      };
      function c(x) {
        var m = x.activeClassName, k = m === void 0 ? "" : m, I = x.activeIndex, F = I === void 0 ? -1 : I, C = x.activeStyle, M = x.autoEscape, S = x.caseSensitive, Q = S === void 0 ? !1 : S, X = x.className, he = x.findChunks, K = x.highlightClassName, ie = K === void 0 ? "" : K, ee = x.highlightStyle, fe = ee === void 0 ? {} : ee, ne = x.highlightTag, de = ne === void 0 ? "mark" : ne, ce = x.sanitize, Z = x.searchWords, ae = x.textToHighlight, te = x.unhighlightClassName, pe = te === void 0 ? "" : te, b = x.unhighlightStyle, t = E(x, ["activeClassName", "activeIndex", "activeStyle", "autoEscape", "caseSensitive", "className", "findChunks", "highlightClassName", "highlightStyle", "highlightTag", "sanitize", "searchWords", "textToHighlight", "unhighlightClassName", "unhighlightStyle"]), n = (0, i.findAll)({
          autoEscape: M,
          caseSensitive: Q,
          findChunks: he,
          sanitize: ce,
          searchWords: Z,
          textToHighlight: ae
        }), l = de, T = -1, _ = "", R = void 0, w = function(j) {
          var L = {};
          for (var f in j)
            L[f.toLowerCase()] = j[f];
          return L;
        }, A = (0, O.default)(w);
        return (0, v.createElement)("span", a({
          className: X
        }, t, {
          children: n.map(function(P, j) {
            var L = ae.substr(P.start, P.end - P.start);
            if (P.highlight) {
              T++;
              var f = void 0;
              typeof ie == "object" ? Q ? f = ie[L] : (ie = A(ie), f = ie[L.toLowerCase()]) : f = ie;
              var z = T === +F;
              _ = f + " " + (z ? k : ""), R = z === !0 && C != null ? Object.assign({}, fe, C) : fe;
              var oe = {
                children: L,
                className: _,
                key: j,
                style: R
              };
              return typeof l != "string" && (oe.highlightIndex = T), (0, v.createElement)(l, oe);
            } else
              return (0, v.createElement)("span", {
                children: L,
                className: pe,
                key: j,
                style: b
              });
          })
        }));
      }
      e.exports = o.default;
    },
    /* 3 */
    /***/
    function(e, o) {
      e.exports = /******/
      function(r) {
        var a = {};
        function s(E) {
          if (a[E])
            return a[E].exports;
          var i = a[E] = {
            /******/
            exports: {},
            /******/
            id: E,
            /******/
            loaded: !1
            /******/
          };
          return r[E].call(i.exports, i, i.exports, s), i.loaded = !0, i.exports;
        }
        return s.m = r, s.c = a, s.p = "", s(0);
      }([
        /* 0 */
        /***/
        function(r, a, s) {
          r.exports = s(1);
        },
        /* 1 */
        /***/
        function(r, a, s) {
          Object.defineProperty(a, "__esModule", {
            value: !0
          });
          var E = s(2);
          Object.defineProperty(a, "combineChunks", {
            enumerable: !0,
            get: function() {
              return E.combineChunks;
            }
          }), Object.defineProperty(a, "fillInChunks", {
            enumerable: !0,
            get: function() {
              return E.fillInChunks;
            }
          }), Object.defineProperty(a, "findAll", {
            enumerable: !0,
            get: function() {
              return E.findAll;
            }
          }), Object.defineProperty(a, "findChunks", {
            enumerable: !0,
            get: function() {
              return E.findChunks;
            }
          });
        },
        /* 2 */
        /***/
        function(r, a) {
          Object.defineProperty(a, "__esModule", {
            value: !0
          }), a.findAll = function(h) {
            var O = h.autoEscape, c = h.caseSensitive, x = c === void 0 ? !1 : c, m = h.findChunks, k = m === void 0 ? E : m, I = h.sanitize, F = h.searchWords, C = h.textToHighlight;
            return i({
              chunksToHighlight: s({
                chunks: k({
                  autoEscape: O,
                  caseSensitive: x,
                  sanitize: I,
                  searchWords: F,
                  textToHighlight: C
                })
              }),
              totalLength: C ? C.length : 0
            });
          };
          var s = a.combineChunks = function(h) {
            var O = h.chunks;
            return O = O.sort(function(c, x) {
              return c.start - x.start;
            }).reduce(function(c, x) {
              if (c.length === 0)
                return [x];
              var m = c.pop();
              if (x.start <= m.end) {
                var k = Math.max(m.end, x.end);
                c.push({ start: m.start, end: k });
              } else
                c.push(m, x);
              return c;
            }, []), O;
          }, E = function(h) {
            var O = h.autoEscape, c = h.caseSensitive, x = h.sanitize, m = x === void 0 ? y : x, k = h.searchWords, I = h.textToHighlight;
            return I = m(I), k.filter(function(F) {
              return F;
            }).reduce(function(F, C) {
              C = m(C), O && (C = g(C));
              for (var M = new RegExp(C, c ? "g" : "gi"), S = void 0; S = M.exec(I); ) {
                var Q = S.index, X = M.lastIndex;
                X > Q && F.push({ start: Q, end: X }), S.index == M.lastIndex && M.lastIndex++;
              }
              return F;
            }, []);
          };
          a.findChunks = E;
          var i = a.fillInChunks = function(h) {
            var O = h.chunksToHighlight, c = h.totalLength, x = [], m = function(F, C, M) {
              C - F > 0 && x.push({
                start: F,
                end: C,
                highlight: M
              });
            };
            if (O.length === 0)
              m(0, c, !1);
            else {
              var k = 0;
              O.forEach(function(I) {
                m(k, I.start, !1), m(I.start, I.end, !0), k = I.end;
              }), m(k, c, !1);
            }
            return x;
          };
          function y(v) {
            return v;
          }
          function g(v) {
            return v.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
          }
        }
        /******/
      ]);
    },
    /* 4 */
    /***/
    function(e, o, r) {
      (function(a) {
        if (a.env.NODE_ENV !== "production") {
          var s = typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103, E = function(y) {
            return typeof y == "object" && y !== null && y.$$typeof === s;
          }, i = !0;
          e.exports = r(6)(E, i);
        } else
          e.exports = r(13)();
      }).call(o, r(5));
    },
    /* 5 */
    /***/
    function(e, o) {
      var r = e.exports = {}, a, s;
      function E() {
        throw new Error("setTimeout has not been defined");
      }
      function i() {
        throw new Error("clearTimeout has not been defined");
      }
      (function() {
        try {
          typeof setTimeout == "function" ? a = setTimeout : a = E;
        } catch {
          a = E;
        }
        try {
          typeof clearTimeout == "function" ? s = clearTimeout : s = i;
        } catch {
          s = i;
        }
      })();
      function y(F) {
        if (a === setTimeout)
          return setTimeout(F, 0);
        if ((a === E || !a) && setTimeout)
          return a = setTimeout, setTimeout(F, 0);
        try {
          return a(F, 0);
        } catch {
          try {
            return a.call(null, F, 0);
          } catch {
            return a.call(this, F, 0);
          }
        }
      }
      function g(F) {
        if (s === clearTimeout)
          return clearTimeout(F);
        if ((s === i || !s) && clearTimeout)
          return s = clearTimeout, clearTimeout(F);
        try {
          return s(F);
        } catch {
          try {
            return s.call(null, F);
          } catch {
            return s.call(this, F);
          }
        }
      }
      var v = [], h = !1, O, c = -1;
      function x() {
        !h || !O || (h = !1, O.length ? v = O.concat(v) : c = -1, v.length && m());
      }
      function m() {
        if (!h) {
          var F = y(x);
          h = !0;
          for (var C = v.length; C; ) {
            for (O = v, v = []; ++c < C; )
              O && O[c].run();
            c = -1, C = v.length;
          }
          O = null, h = !1, g(F);
        }
      }
      r.nextTick = function(F) {
        var C = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var M = 1; M < arguments.length; M++)
            C[M - 1] = arguments[M];
        v.push(new k(F, C)), v.length === 1 && !h && y(m);
      };
      function k(F, C) {
        this.fun = F, this.array = C;
      }
      k.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {};
      function I() {
      }
      r.on = I, r.addListener = I, r.once = I, r.off = I, r.removeListener = I, r.removeAllListeners = I, r.emit = I, r.prependListener = I, r.prependOnceListener = I, r.listeners = function(F) {
        return [];
      }, r.binding = function(F) {
        throw new Error("process.binding is not supported");
      }, r.cwd = function() {
        return "/";
      }, r.chdir = function(F) {
        throw new Error("process.chdir is not supported");
      }, r.umask = function() {
        return 0;
      };
    },
    /* 6 */
    /***/
    function(e, o, r) {
      (function(a) {
        var s = r(7), E = r(8), i = r(9), y = r(10), g = r(11), v = r(12);
        e.exports = function(h, O) {
          var c = typeof Symbol == "function" && Symbol.iterator, x = "@@iterator";
          function m(n) {
            var l = n && (c && n[c] || n[x]);
            if (typeof l == "function")
              return l;
          }
          var k = "<<anonymous>>", I = {
            array: S("array"),
            bool: S("boolean"),
            func: S("function"),
            number: S("number"),
            object: S("object"),
            string: S("string"),
            symbol: S("symbol"),
            any: Q(),
            arrayOf: X,
            element: he(),
            instanceOf: K,
            node: ne(),
            objectOf: ee,
            oneOf: ie,
            oneOfType: fe,
            shape: de,
            exact: ce
          };
          function F(n, l) {
            return n === l ? n !== 0 || 1 / n === 1 / l : n !== n && l !== l;
          }
          function C(n) {
            this.message = n, this.stack = "";
          }
          C.prototype = Error.prototype;
          function M(n) {
            if (a.env.NODE_ENV !== "production")
              var l = {}, T = 0;
            function _(w, A, P, j, L, f, z) {
              if (j = j || k, f = f || P, z !== g) {
                if (O)
                  E(
                    !1,
                    "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
                  );
                else if (a.env.NODE_ENV !== "production" && typeof console < "u") {
                  var oe = j + ":" + P;
                  !l[oe] && // Avoid spamming the console because they are often not actionable except for lib authors
                  T < 3 && (i(
                    !1,
                    "You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",
                    f,
                    j
                  ), l[oe] = !0, T++);
                }
              }
              return A[P] == null ? w ? A[P] === null ? new C("The " + L + " `" + f + "` is marked as required " + ("in `" + j + "`, but its value is `null`.")) : new C("The " + L + " `" + f + "` is marked as required in " + ("`" + j + "`, but its value is `undefined`.")) : null : n(A, P, j, L, f);
            }
            var R = _.bind(null, !1);
            return R.isRequired = _.bind(null, !0), R;
          }
          function S(n) {
            function l(T, _, R, w, A, P) {
              var j = T[_], L = te(j);
              if (L !== n) {
                var f = pe(j);
                return new C("Invalid " + w + " `" + A + "` of type " + ("`" + f + "` supplied to `" + R + "`, expected ") + ("`" + n + "`."));
              }
              return null;
            }
            return M(l);
          }
          function Q() {
            return M(s.thatReturnsNull);
          }
          function X(n) {
            function l(T, _, R, w, A) {
              if (typeof n != "function")
                return new C("Property `" + A + "` of component `" + R + "` has invalid PropType notation inside arrayOf.");
              var P = T[_];
              if (!Array.isArray(P)) {
                var j = te(P);
                return new C("Invalid " + w + " `" + A + "` of type " + ("`" + j + "` supplied to `" + R + "`, expected an array."));
              }
              for (var L = 0; L < P.length; L++) {
                var f = n(P, L, R, w, A + "[" + L + "]", g);
                if (f instanceof Error)
                  return f;
              }
              return null;
            }
            return M(l);
          }
          function he() {
            function n(l, T, _, R, w) {
              var A = l[T];
              if (!h(A)) {
                var P = te(A);
                return new C("Invalid " + R + " `" + w + "` of type " + ("`" + P + "` supplied to `" + _ + "`, expected a single ReactElement."));
              }
              return null;
            }
            return M(n);
          }
          function K(n) {
            function l(T, _, R, w, A) {
              if (!(T[_] instanceof n)) {
                var P = n.name || k, j = t(T[_]);
                return new C("Invalid " + w + " `" + A + "` of type " + ("`" + j + "` supplied to `" + R + "`, expected ") + ("instance of `" + P + "`."));
              }
              return null;
            }
            return M(l);
          }
          function ie(n) {
            if (!Array.isArray(n))
              return a.env.NODE_ENV !== "production" && i(!1, "Invalid argument supplied to oneOf, expected an instance of array."), s.thatReturnsNull;
            function l(T, _, R, w, A) {
              for (var P = T[_], j = 0; j < n.length; j++)
                if (F(P, n[j]))
                  return null;
              var L = JSON.stringify(n);
              return new C("Invalid " + w + " `" + A + "` of value `" + P + "` " + ("supplied to `" + R + "`, expected one of " + L + "."));
            }
            return M(l);
          }
          function ee(n) {
            function l(T, _, R, w, A) {
              if (typeof n != "function")
                return new C("Property `" + A + "` of component `" + R + "` has invalid PropType notation inside objectOf.");
              var P = T[_], j = te(P);
              if (j !== "object")
                return new C("Invalid " + w + " `" + A + "` of type " + ("`" + j + "` supplied to `" + R + "`, expected an object."));
              for (var L in P)
                if (P.hasOwnProperty(L)) {
                  var f = n(P, L, R, w, A + "." + L, g);
                  if (f instanceof Error)
                    return f;
                }
              return null;
            }
            return M(l);
          }
          function fe(n) {
            if (!Array.isArray(n))
              return a.env.NODE_ENV !== "production" && i(!1, "Invalid argument supplied to oneOfType, expected an instance of array."), s.thatReturnsNull;
            for (var l = 0; l < n.length; l++) {
              var T = n[l];
              if (typeof T != "function")
                return i(
                  !1,
                  "Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",
                  b(T),
                  l
                ), s.thatReturnsNull;
            }
            function _(R, w, A, P, j) {
              for (var L = 0; L < n.length; L++) {
                var f = n[L];
                if (f(R, w, A, P, j, g) == null)
                  return null;
              }
              return new C("Invalid " + P + " `" + j + "` supplied to " + ("`" + A + "`."));
            }
            return M(_);
          }
          function ne() {
            function n(l, T, _, R, w) {
              return Z(l[T]) ? null : new C("Invalid " + R + " `" + w + "` supplied to " + ("`" + _ + "`, expected a ReactNode."));
            }
            return M(n);
          }
          function de(n) {
            function l(T, _, R, w, A) {
              var P = T[_], j = te(P);
              if (j !== "object")
                return new C("Invalid " + w + " `" + A + "` of type `" + j + "` " + ("supplied to `" + R + "`, expected `object`."));
              for (var L in n) {
                var f = n[L];
                if (f) {
                  var z = f(P, L, R, w, A + "." + L, g);
                  if (z)
                    return z;
                }
              }
              return null;
            }
            return M(l);
          }
          function ce(n) {
            function l(T, _, R, w, A) {
              var P = T[_], j = te(P);
              if (j !== "object")
                return new C("Invalid " + w + " `" + A + "` of type `" + j + "` " + ("supplied to `" + R + "`, expected `object`."));
              var L = y({}, T[_], n);
              for (var f in L) {
                var z = n[f];
                if (!z)
                  return new C(
                    "Invalid " + w + " `" + A + "` key `" + f + "` supplied to `" + R + "`.\nBad object: " + JSON.stringify(T[_], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(n), null, "  ")
                  );
                var oe = z(P, f, R, w, A + "." + f, g);
                if (oe)
                  return oe;
              }
              return null;
            }
            return M(l);
          }
          function Z(n) {
            switch (typeof n) {
              case "number":
              case "string":
              case "undefined":
                return !0;
              case "boolean":
                return !n;
              case "object":
                if (Array.isArray(n))
                  return n.every(Z);
                if (n === null || h(n))
                  return !0;
                var l = m(n);
                if (l) {
                  var T = l.call(n), _;
                  if (l !== n.entries) {
                    for (; !(_ = T.next()).done; )
                      if (!Z(_.value))
                        return !1;
                  } else
                    for (; !(_ = T.next()).done; ) {
                      var R = _.value;
                      if (R && !Z(R[1]))
                        return !1;
                    }
                } else
                  return !1;
                return !0;
              default:
                return !1;
            }
          }
          function ae(n, l) {
            return n === "symbol" || l["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && l instanceof Symbol;
          }
          function te(n) {
            var l = typeof n;
            return Array.isArray(n) ? "array" : n instanceof RegExp ? "object" : ae(l, n) ? "symbol" : l;
          }
          function pe(n) {
            if (typeof n > "u" || n === null)
              return "" + n;
            var l = te(n);
            if (l === "object") {
              if (n instanceof Date)
                return "date";
              if (n instanceof RegExp)
                return "regexp";
            }
            return l;
          }
          function b(n) {
            var l = pe(n);
            switch (l) {
              case "array":
              case "object":
                return "an " + l;
              case "boolean":
              case "date":
              case "regexp":
                return "a " + l;
              default:
                return l;
            }
          }
          function t(n) {
            return !n.constructor || !n.constructor.name ? k : n.constructor.name;
          }
          return I.checkPropTypes = v, I.PropTypes = I, I;
        };
      }).call(o, r(5));
    },
    /* 7 */
    /***/
    function(e, o) {
      function r(s) {
        return function() {
          return s;
        };
      }
      var a = function() {
      };
      a.thatReturns = r, a.thatReturnsFalse = r(!1), a.thatReturnsTrue = r(!0), a.thatReturnsNull = r(null), a.thatReturnsThis = function() {
        return this;
      }, a.thatReturnsArgument = function(s) {
        return s;
      }, e.exports = a;
    },
    /* 8 */
    /***/
    function(e, o, r) {
      (function(a) {
        var s = function(y) {
        };
        a.env.NODE_ENV !== "production" && (s = function(y) {
          if (y === void 0)
            throw new Error("invariant requires an error message argument");
        });
        function E(i, y, g, v, h, O, c, x) {
          if (s(y), !i) {
            var m;
            if (y === void 0)
              m = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
            else {
              var k = [g, v, h, O, c, x], I = 0;
              m = new Error(y.replace(/%s/g, function() {
                return k[I++];
              })), m.name = "Invariant Violation";
            }
            throw m.framesToPop = 1, m;
          }
        }
        e.exports = E;
      }).call(o, r(5));
    },
    /* 9 */
    /***/
    function(e, o, r) {
      (function(a) {
        var s = r(7), E = s;
        if (a.env.NODE_ENV !== "production") {
          var i = function(g) {
            for (var v = arguments.length, h = Array(v > 1 ? v - 1 : 0), O = 1; O < v; O++)
              h[O - 1] = arguments[O];
            var c = 0, x = "Warning: " + g.replace(/%s/g, function() {
              return h[c++];
            });
            typeof console < "u" && console.error(x);
            try {
              throw new Error(x);
            } catch {
            }
          };
          E = function(g, v) {
            if (v === void 0)
              throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
            if (v.indexOf("Failed Composite propType: ") !== 0 && !g) {
              for (var h = arguments.length, O = Array(h > 2 ? h - 2 : 0), c = 2; c < h; c++)
                O[c - 2] = arguments[c];
              i.apply(void 0, [v].concat(O));
            }
          };
        }
        e.exports = E;
      }).call(o, r(5));
    },
    /* 10 */
    /***/
    function(e, o) {
      var r = Object.getOwnPropertySymbols, a = Object.prototype.hasOwnProperty, s = Object.prototype.propertyIsEnumerable;
      function E(y) {
        if (y == null)
          throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(y);
      }
      function i() {
        try {
          if (!Object.assign)
            return !1;
          var y = new String("abc");
          if (y[5] = "de", Object.getOwnPropertyNames(y)[0] === "5")
            return !1;
          for (var g = {}, v = 0; v < 10; v++)
            g["_" + String.fromCharCode(v)] = v;
          var h = Object.getOwnPropertyNames(g).map(function(c) {
            return g[c];
          });
          if (h.join("") !== "0123456789")
            return !1;
          var O = {};
          return "abcdefghijklmnopqrst".split("").forEach(function(c) {
            O[c] = c;
          }), Object.keys(Object.assign({}, O)).join("") === "abcdefghijklmnopqrst";
        } catch {
          return !1;
        }
      }
      e.exports = i() ? Object.assign : function(y, g) {
        for (var v, h = E(y), O, c = 1; c < arguments.length; c++) {
          v = Object(arguments[c]);
          for (var x in v)
            a.call(v, x) && (h[x] = v[x]);
          if (r) {
            O = r(v);
            for (var m = 0; m < O.length; m++)
              s.call(v, O[m]) && (h[O[m]] = v[O[m]]);
          }
        }
        return h;
      };
    },
    /* 11 */
    /***/
    function(e, o) {
      var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      e.exports = r;
    },
    /* 12 */
    /***/
    function(e, o, r) {
      (function(a) {
        if (a.env.NODE_ENV !== "production")
          var s = r(8), E = r(9), i = r(11), y = {};
        function g(v, h, O, c, x) {
          if (a.env.NODE_ENV !== "production") {
            for (var m in v)
              if (v.hasOwnProperty(m)) {
                var k;
                try {
                  s(typeof v[m] == "function", "%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.", c || "React class", O, m, typeof v[m]), k = v[m](h, m, c, O, null, i);
                } catch (F) {
                  k = F;
                }
                if (E(!k || k instanceof Error, "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", O, m, typeof k), k instanceof Error && !(k.message in y)) {
                  y[k.message] = !0;
                  var I = x ? x() : "";
                  E(!1, "Failed %s type: %s%s", O, k.message, I ?? "");
                }
              }
          }
        }
        e.exports = g;
      }).call(o, r(5));
    },
    /* 13 */
    /***/
    function(e, o, r) {
      var a = r(7), s = r(8), E = r(11);
      e.exports = function() {
        function i(v, h, O, c, x, m) {
          m !== E && s(
            !1,
            "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
          );
        }
        i.isRequired = i;
        function y() {
          return i;
        }
        var g = {
          array: i,
          bool: i,
          func: i,
          number: i,
          object: i,
          string: i,
          symbol: i,
          any: i,
          arrayOf: y,
          element: i,
          instanceOf: y,
          node: i,
          objectOf: y,
          oneOf: y,
          oneOfType: y,
          shape: y,
          exact: y
        };
        return g.checkPropTypes = a, g.PropTypes = g, g;
      };
    },
    /* 14 */
    /***/
    function(e, o) {
      e.exports = Je;
    },
    /* 15 */
    /***/
    function(e, o) {
      var r = function(E, i) {
        return E === i;
      };
      function a(s) {
        var E = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : r, i = void 0, y = [], g = void 0, v = !1, h = function(x, m) {
          return E(x, y[m]);
        }, O = function() {
          for (var x = arguments.length, m = Array(x), k = 0; k < x; k++)
            m[k] = arguments[k];
          return v && i === this && m.length === y.length && m.every(h) || (v = !0, i = this, y = m, g = s.apply(this, m)), g;
        };
        return O;
      }
      e.exports = a;
    }
    /******/
  ]);
})(_t);
var Kt = _t.exports;
Object.defineProperty(Ie, "__esModule", {
  value: !0
});
Ie.ReactDaDataBox = void 0;
var er = /* @__PURE__ */ function() {
  function d(e, o) {
    for (var r = 0; r < o.length; r++) {
      var a = o[r];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, o, r) {
    return o && d(e.prototype, o), r && d(e, r), e;
  };
}(), Ne = Object.assign || function(d) {
  for (var e = 1; e < arguments.length; e++) {
    var o = arguments[e];
    for (var r in o)
      Object.prototype.hasOwnProperty.call(o, r) && (d[r] = o[r]);
  }
  return d;
}, tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(d) {
  return typeof d;
} : function(d) {
  return d && typeof Symbol == "function" && d.constructor === Symbol && d !== Symbol.prototype ? "symbol" : typeof d;
}, rr = Je, V = or(rr), nr = Qt, H = Pt(nr), ar = Kt, ir = Pt(ar);
function Pt(d) {
  return d && d.__esModule ? d : { default: d };
}
function or(d) {
  if (d && d.__esModule)
    return d;
  var e = {};
  if (d != null)
    for (var o in d)
      Object.prototype.hasOwnProperty.call(d, o) && (e[o] = d[o]);
  return e.default = d, e;
}
function sr(d, e) {
  if (!(d instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function xt(d, e) {
  if (!d)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : d;
}
function ur(d, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  d.prototype = Object.create(e && e.prototype, { constructor: { value: d, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(d, e) : d.__proto__ = e);
}
var cr = ["г", "респ", "ул", "р-н", "село", "деревня", "поселок", "пр-д", "пл", "к", "кв", "обл", "д"], lr = {
  data: {},
  unrestricted_value: "",
  value: ""
}, ke = {
  api: "suggestions/api/4_1/rs/suggest",
  host: "https://suggestions.dadata.ru"
}, St = {
  "react-dadata__custom-action": "react-dadata__suggestion react-dadata__custom-action",
  "react-dadata__suggestion": "react-dadata__suggestion",
  "react-dadata__suggestion-note": "react-dadata__suggestion-note",
  "react-dadata__suggestions": "react-dadata__suggestions"
}, Ae = function(e) {
  var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments[2];
  return o[e] && tr(o[e]) === "object" ? {
    className: ((St[e] || e) + " " + (r || "")).trim(),
    style: o[e]
  } : {
    className: ((St[e] || e) + " " + (r || "") + " " + (o[e] || "")).trim()
  };
}, xe = function(e) {
  return e.endsWith("/") ? e.slice(0, -1) : e;
}, fr = function(e) {
  if (typeof e == "string") {
    if (/^http[s]?:/g.test(e) || e.startsWith("/"))
      return xe(e + "/" + ke.api);
  } else if (e instanceof Object) {
    var o = Ne({}, ke, e);
    return xe(o.host) + "/" + xe(o.api);
  }
  return xe(ke.host + "/" + ke.api);
}, dr = function(e) {
  var o = e.replace(",", "").split(" "), r = o.filter(function(a) {
    return cr.indexOf(a) < 0;
  });
  return r;
}, jt = function() {
  return Math.random().toString(16).slice(2);
}, pr = function(e) {
  var o = e.data, r = o === void 0 ? {} : o, a = e.type;
  return V.createElement(
    "div",
    { className: "react-dadata__suggestion-info" },
    V.createElement(
      "span",
      null,
      [a === "party" ? r.inn || null : r.bic || null, r.address && r.address.value || null].join(" ")
    )
  );
}, hr = function(e) {
  return V.createElement(
    "div",
    Ae("react-dadata__suggestion-note", e),
    V.createElement(
      "span",
      { className: "suggestion-note_arrow" },
      V.createElement(
        "svg",
        { width: "34", height: "16", viewBox: "0 0 44 21", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        V.createElement("path", {
          d: "M25.9 20.1H41.2C42.1 20.1 42.9 19.4 42.9 18.4V3.1C42.9 2.2 42.1 1.4 41.2 1.4H25.9C24.9 1.4 24.2 2.2 24.2 3.1V18.4C24.2 19.4 25 20.1 25.9 20.1Z",
          stroke: "#424242",
          strokeWidth: "1.122",
          strokeMiterlimit: "10"
        }),
        V.createElement("path", {
          d: "M33.4295 6.62049C33.4295 7.32049 33.4295 8.0205 33.4295 8.7205C33.4295 10.9205 33.4295 13.2205 33.4295 15.5205C33.4295 15.6205 33.4295 15.6205 33.4295 15.7205C33.4295 15.8205 33.5295 15.9205 33.6295 15.9205C33.7295 15.9205 33.8295 15.8205 33.8295 15.7205C33.8295 15.6205 33.8295 15.6205 33.8295 15.5205C33.8295 12.6205 33.8295 9.82049 33.8295 6.92049C33.8295 6.82049 33.8295 6.8205 33.8295 6.7205C33.9295 6.8205 33.9295 6.8205 34.0295 6.8205C34.4295 7.2205 34.9295 7.72049 35.3295 8.12049C35.4295 8.22049 35.5295 8.2205 35.6295 8.2205C35.7295 8.2205 35.8295 8.12049 35.8295 8.02049C35.8295 7.92049 35.8295 7.8205 35.7295 7.7205C35.4295 7.4205 35.1295 7.1205 34.8295 6.8205C34.5295 6.5205 34.2295 6.2205 33.8295 5.8205C33.6295 5.6205 33.5295 5.6205 33.4295 5.8205C32.8295 6.4205 32.2295 7.0205 31.5295 7.7205C31.3295 7.9205 31.4295 8.12049 31.6295 8.12049C31.7295 8.12049 31.8295 8.02049 31.9295 8.02049C32.3295 7.62049 32.8295 7.1205 33.2295 6.7205C33.2295 6.7205 33.3295 6.72049 33.4295 6.62049Z",
          fill: "#424242",
          stroke: "#424242",
          strokeWidth: "0.8",
          strokeMiterlimit: "10"
        }),
        V.createElement("path", {
          d: "M0.699997 3.1V18.4C0.699997 19.4 1.5 20.1 2.4 20.1H17.7C18.6 20.1 19.4 19.4 19.4 18.4V3.1C19.4 2.1 18.6 1.4 17.7 1.4H2.4C1.4 1.5 0.699997 2.2 0.699997 3.1Z",
          stroke: "#424242",
          strokeWidth: "1.122",
          strokeMiterlimit: "10"
        }),
        V.createElement("path", {
          d: "M10.3 15C10.3 14.3 10.3 13.6 10.3 12.9C10.3 10.7 10.3 8.4 10.3 6.1C10.3 6 10.3 6 10.3 5.9C10.3 5.8 10.2 5.7 10.1 5.7C9.99999 5.7 9.89999 5.8 9.89999 5.9C9.89999 6 9.89999 6 9.89999 6.1C9.89999 9 9.89999 11.8 9.89999 14.7C9.89999 14.8 9.89999 14.8 9.89999 14.9C9.79999 14.8 9.79999 14.8 9.69999 14.8C9.29999 14.4 8.79999 13.9 8.39999 13.5C8.29999 13.4 8.19999 13.4 8.09999 13.4C7.99999 13.4 7.89999 13.5 7.89999 13.6C7.89999 13.7 7.89999 13.8 7.99999 13.9C8.29999 14.2 8.59999 14.5 8.89999 14.8C9.19999 15.1 9.49999 15.4 9.89999 15.8C10.1 16 10.2 16 10.3 15.8C10.9 15.2 11.5 14.6 12.2 13.9C12.4 13.7 12.3 13.5 12.1 13.5C12 13.5 11.9 13.6 11.8 13.6C11.4 14 10.9 14.5 10.5 14.9C10.4 14.9 10.3 14.9 10.3 15Z",
          fill: "#424242",
          stroke: "#424242",
          strokeWidth: "0.8",
          strokeMiterlimit: "10"
        })
      )
    ),
    V.createElement(
      "span",
      null,
      "навигация"
    ),
    V.createElement(
      "span",
      { className: "suggestion-note_arrow" },
      V.createElement(
        "svg",
        { width: "18", height: "16", viewBox: "0 0 21 21", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        V.createElement("path", {
          d: "M2.9 20.1H18.2C19.1 20.1 19.9 19.4 19.9 18.4V3.09999C19.9 2.19999 19.1 1.39999 18.2 1.39999H2.9C1.9 1.39999 1.2 2.19999 1.2 3.09999V18.4C1.2 19.4 2 20.1 2.9 20.1Z",
          stroke: "#424242",
          strokeWidth: "1.122",
          strokeMiterlimit: "10"
        }),
        V.createElement("path", {
          d: "M14.8 10.6C14.1 10.6 13.4 10.6 12.7 10.6C10.5 10.6 8.2 10.6 5.9 10.6C5.8 10.6 5.8 10.6 5.7 10.6C5.6 10.6 5.5 10.7 5.5 10.8C5.5 10.9 5.6 11 5.7 11C5.8 11 5.8 11 5.9 11C8.8 11 11.6 11 14.5 11C14.6 11 14.6 11 14.7 11C14.6 11.1 14.6 11.1 14.6 11.2C14.2 11.6 13.7 12.1 13.3 12.5C13.2 12.6 13.2 12.7 13.2 12.8C13.2 12.9 13.3 13 13.4 13C13.5 13 13.6 13 13.7 12.9C14 12.6 14.3 12.3 14.6 12C14.9 11.7 15.2 11.4 15.6 11C15.8 10.8 15.8 10.7 15.6 10.6C15 9.99999 14.4 9.39999 13.7 8.69999C13.5 8.49999 13.3 8.59999 13.3 8.79999C13.3 8.89999 13.4 8.99999 13.4 9.09999C13.8 9.49999 14.3 9.99999 14.7 10.4C14.7 10.4 14.7 10.5 14.8 10.6Z",
          fill: "#424242",
          stroke: "#424242",
          strokeWidth: "0.8",
          strokeMiterlimit: "10"
        })
      )
    ),
    V.createElement(
      "span",
      null,
      "подстановка"
    )
  );
}, vr = function(e, o, r) {
  var a = e.customActions, s = e.customStyles, E = e.suggestions;
  if (!a) return [];
  var i = a instanceof Function ? a(E) : a;
  return i = i instanceof Array ? i : i ? [i] : !1, i && i.length ? [V.createElement("hr", { key: "custom-actions-line", className: "actions-delimiter" })].concat(i.map(function(y) {
    return V.createElement(
      "div",
      Ne({
        key: jt(),
        onMouseDown: o,
        onClick: r
      }, Ae("react-dadata__custom-action", s)),
      y
    );
  })) : !1;
}, mr = function(e) {
  var o = e.actions, r = o === void 0 ? [] : o, a = e.customStyles, s = e.onSuggestionClick, E = e.query, i = e.showNote, y = i === void 0 ? !0 : i, g = e.suggestionIndex, v = e.suggestions, h = e.type;
  return !!(v.length || r.length) && V.createElement(
    "div",
    Ae("react-dadata__suggestions", a),
    y && V.createElement(hr, null),
    v.map(function(O, c) {
      var x = O.value, m = O.data;
      return V.createElement(
        "div",
        Ne({
          key: jt(),
          onMouseDown: function() {
            s(c);
          }
        }, Ae("react-dadata__suggestion", a, c === g && "react-dadata__suggestion--current")),
        V.createElement(ir.default, {
          highlightClassName: "react-dadata--highlighted",
          searchWords: dr(E),
          textToHighlight: x,
          autoEscape: !0
        }),
        (h === "party" || h === "bank") && V.createElement(pr, { data: m, type: h })
      );
    }),
    r
  );
}, Se = function(d) {
  ur(e, d);
  function e() {
    var o, r, a, s;
    sr(this, e);
    for (var E = arguments.length, i = Array(E), y = 0; y < E; y++)
      i[y] = arguments[y];
    return s = (r = (a = xt(this, (o = e.__proto__ || Object.getPrototypeOf(e)).call.apply(o, [this].concat(i))), a), yr.call(a), r), xt(a, s);
  }
  return er(e, [{
    key: "componentWillUnmount",
    value: function() {
      clearTimeout(this.debounceTimer), this.xhr.abort();
    }
  }, {
    key: "render",
    value: function() {
      var r = this.state, a = r.inputFocused, s = r.query, E = r.showSuggestions, i = r.suggestionIndex, y = r.suggestions, g = r.type, v = this.props, h = v.allowClear, O = v.autocomplete, c = v.className, x = v.customActions, m = v.customInput, k = v.customStyles, I = v.forceOpenList, F = v.placeholder, C = v.showNote, M = v.style, S = a && E, Q = {
        autoComplete: O === "on" && O || "off",
        className: "react-dadata__input" + (h ? " react-dadata__input-clearable" : ""),
        onBlur: this.onInputBlur,
        onChange: this.onInputChange,
        onFocus: this.onInputFocus,
        onKeyDown: this.onKeyPress,
        placeholder: F,
        value: s
      };
      return V.createElement(
        "div",
        { className: "react-dadata react-dadata__container " + c, style: M },
        m(Q),
        h && s && V.createElement(
          "span",
          { className: "react-dadata__input-suffix", onClick: this.clear },
          V.createElement("i", { className: "react-dadata__icon react-dadata__icon-clear" })
        ),
        (S || I) && V.createElement(mr, {
          actions: x && vr({
            customActions: x,
            customStyles: k,
            suggestions: y
          }, this.muteEventHandler, this.onInputBlur),
          customStyles: k,
          suggestions: y,
          suggestionIndex: i,
          query: s,
          type: g,
          showNote: C,
          onSuggestionClick: this.onSuggestionClick
        })
      );
    }
  }]), e;
}(V.PureComponent);
Se.displayName = "ReactDaDataBox";
var yr = function() {
  var e = this;
  this.state = {
    inputFocused: !1,
    isValid: !1,
    query: this.props.query || "",
    showSuggestions: !0,
    suggestionIndex: 0,
    suggestions: [],
    type: this.props.type || "address"
  }, this.componentDidMount = function() {
    e.xhr = new XMLHttpRequest(), (e.props.query || e.props.silentQuery) && e.fetchSuggestions(null, function() {
      if (e.props.silentInit) {
        var o = e.props.silentInit(e.state.suggestions);
        o !== void 0 && typeof o == "number" && o < e.state.suggestions.length && e.selectSuggestion(o);
      }
    });
  }, this.componentDidUpdate = function(o) {
    e.props.query !== o.query && e.setState({ query: e.props.query }, e.fetchSuggestions);
  }, this.onInputFocus = function() {
    !e.state.value && e.props.silentQuery ? e.fetchSuggestions({ inputFocused: !0, showSuggestions: !0 }) : e.setState({ inputFocused: !0 });
  }, this.onInputBlur = function(o) {
    e.setState({ inputFocused: !1 }), o && e.props.onBlur && (o.preventDefault(), o.stopPropagation(), e.props.onBlur(o, e.state.query));
  }, this.debounce = function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 350;
    return function() {
      for (var a = arguments.length, s = Array(a), E = 0; E < a; E++)
        s[E] = arguments[E];
      e.debounceTimer && clearTimeout(e.debounceTimer), e.debounceTimer = setTimeout(function() {
        o.apply(void 0, s);
      }, r);
    };
  }, this.onInputChange = function(o) {
    var r = o.target.value;
    e.setState({ query: r, showSuggestions: !0 }, function() {
      e.debounce(e.fetchSuggestions, e.props.debounce)({ inputFocused: !0, showSuggestions: !0 });
    }), !r && e.clear();
  }, this.onKeyPress = function(o) {
    var r = e.state, a = r.suggestionIndex, s = r.suggestions;
    o.which === 40 && a < s.length - 1 ? e.setState(function(E) {
      return { suggestionIndex: E.suggestionIndex + 1 };
    }) : o.which === 38 && a > 0 ? e.setState(function(E) {
      return { suggestionIndex: E.suggestionIndex - 1 };
    }) : o.which === 39 && a >= 0 ? e.selectSuggestion(e.state.suggestionIndex, !0) : o.which === 13 && a >= 0 && (o.preventDefault(), o.stopPropagation(), e.selectSuggestion(e.state.suggestionIndex));
  }, this.fetchSuggestions = function() {
    var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments[1];
    e.xhr.abort();
    var a = e.state.type, s = e.props, E = s.city, i = s.customEndpoint, y = {
      query: e.state.query || e.props.silentQuery,
      count: e.props.count || 10
    };
    E && a === "address" && (y.from_bound = { value: "city" }, y.to_bound = { value: "settlement" }, y.value = "settlement"), e.props.payloadModifier && (y = e.props.payloadModifier instanceof Function ? e.props.payloadModifier(y) : e.props.payloadModifier instanceof Object ? Object.assign(y, e.props.payloadModifier) : y), e.xhr.open("POST", xe(fr(i)) + "/" + a), e.xhr.setRequestHeader("Accept", "application/json"), e.xhr.setRequestHeader("Authorization", "Token " + e.props.token), e.xhr.setRequestHeader("Content-Type", "application/json"), e.xhr.send(JSON.stringify(y)), e.xhr.onreadystatechange = function() {
      if (e.xhr.readyState === 4 && e.xhr.status === 200) {
        var g = JSON.parse(e.xhr.response), v = g.suggestions, h = o || {};
        v && v.length ? e.setState(Ne({}, h, {
          suggestions: v,
          suggestionIndex: 0,
          showSuggestions: e.state.inputFocused || h.inputFocused ? !!h.showSuggestions : !1
        }), r) : e.props.onIdleOut && e.props.onIdleOut(e.state.query);
      }
    };
  }, this.onSuggestionClick = function(o) {
    e.state.suggestions[o] && e.selectSuggestion(o);
  }, this.clear = function() {
    e.setState({
      query: "",
      showSuggestions: !1
    }), e.props.onChange && e.props.onChange(lr);
  }, this.selectSuggestion = function(o) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, a = e.state.suggestions, s = a[o].value;
    e.setState({
      query: s,
      showSuggestions: r
    }), e.props.onChange && e.props.onChange(a[o]);
  }, this.muteEventHandler = function(o) {
    o.preventDefault(), o.stopPropagation();
  };
};
Se.propTypes = {
  allowClear: H.default.bool,
  autocomplete: H.default.bool,
  city: H.default.bool,
  className: H.default.string,
  count: H.default.number,
  customActions: H.default.oneOfType([H.default.node, H.default.func]),
  customEndpoint: H.default.oneOfType([H.default.object, H.default.shape, H.default.string]),
  customInput: H.default.func,
  customStyles: H.default.object,
  debounce: H.default.number,
  forceOpenList: H.default.bool,
  onChange: H.default.func,
  onBlur: H.default.func,
  onIdleOut: H.default.func,
  payloadModifier: H.default.oneOfType([H.default.object, H.default.shape, H.default.func]),
  placeholder: H.default.string,
  query: H.default.string,
  showNote: H.default.bool,
  silentInit: H.default.func,
  silentQuery: H.default.string,
  style: H.default.objectOf(H.default.string),
  token: H.default.string.isRequired,
  type: H.default.string
};
Se.defaultProps = {
  type: "address",
  customInput: function(e) {
    return V.createElement("input", e);
  }
};
Ie.ReactDaDataBox = Se;
var gr = Ie.default = Se;
const Er = {
  center: [37.588144, 55.733842],
  zoom: 9
}, Tr = {
  code: "initial-loading",
  type: "info",
  text: "Загружаем варианты доставки...",
  reloadRecommended: !1
}, Ot = "EShopLogisticDeliveryData", wr = ({ DADATA_TOKEN: d, ESHOPLOGISTIC_TOKEN: e, YANDEX_API_KEY: o, orderWeight: r, onDeliveryConfirm: a }) => {
  function s() {
    try {
      const u = localStorage.getItem(Ot);
      return u ? JSON.parse(u) : {};
    } catch {
      return {};
    }
  }
  const E = s(), [i, y] = re({}), [g, v] = re({}), [h, O] = re(null), [c, x] = re(!1), [m, k] = re(null), [I, F] = re(!1), [C, M] = re(null), [S, Q] = re(null), [X, he] = re(E.deliveryRoom || ""), [K, ie] = re(E.deliveryName || ""), [ee, fe] = re(E.deliveryPhone || ""), [ne, de] = re(E.deliveryComment || null), [ce, Z] = re({}), [ae, te] = re({}), [pe, b] = re(!1), [t, n] = re(null), [l, T] = re(!0), [_, R] = re(Tr), [w, A] = re(!1), [P, j] = re(!1), L = me(null), f = me(null), z = me(null), oe = me(!1), ve = me(null), ye = me(!1), Oe = me(!1), Ge = me(null);
  function se(u, p, N, Y = !1) {
    R(($) => ($ == null ? void 0 : $.code) === u && ($ == null ? void 0 : $.type) === p && ($ == null ? void 0 : $.text) === N && ($ == null ? void 0 : $.reloadRecommended) === Y ? $ : { code: u, type: p, text: N, reloadRecommended: Y });
  }
  function ge(u, p, N = !1) {
    se(u, "error", p, N);
  }
  function Ee(u = null) {
    R((p) => !p || u && p.code !== u ? p : null);
  }
  function Ce(u) {
    return u == null ? "" : typeof u == "object" ? JSON.stringify(u) : String(u);
  }
  function kt(u) {
    const p = u.replace(/\D/g, "").slice(0, 11);
    if (!p.length)
      return "";
    let N = p;
    return p.length > 4 && (N = `${p.slice(0, 4)} ${p.slice(4)}`), p.length > 7 && (N = `${p.slice(0, 4)} ${p.slice(4, 7)}-${p.slice(7)}`), p.length > 9 && (N = `${p.slice(0, 4)} ${p.slice(4, 7)}-${p.slice(7, 9)}-${p.slice(9)}`), N;
  }
  function At(u) {
    return u != null && u.data ? {
      value: u.value || u.source,
      fias: u.data.city_fias_id || u.data.settlement_fias_id || u.data.region_fias_id,
      lon: Number(u.data.geo_lon),
      lat: Number(u.data.geo_lat)
    } : null;
  }
  const Ze = (u) => {
    const p = At(u);
    if (!p) {
      O(null);
      return;
    }
    if (Ee("invalid-method"), Ee("map-click-error"), I) {
      const N = {
        address: u.value,
        lon: p.lon,
        lat: p.lat
      };
      ye.current = !0, M(N), Q(N), O({
        ...p,
        value: u.value || p.value
      }), se("address-selected", "success", "Адрес выбран. Проверьте данные и подтвердите доставку.");
    } else
      O(p), se("city-selected", "info", "Город выбран. Загружаем доступные способы доставки...");
  };
  async function It(u) {
    var p, N, Y, $, D, U, G;
    try {
      const ue = await fetch(
        "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Token " + d
          },
          body: JSON.stringify({
            query: u,
            count: 1
          })
        }
      );
      if (!ue.ok)
        return console.error("Ошибка получения FIAS по адресу:", ue.status, u), null;
      const W = (p = (await ue.json()).suggestions) == null ? void 0 : p[0];
      return {
        fias: ((N = W == null ? void 0 : W.data) == null ? void 0 : N.city_fias_id) || ((Y = W == null ? void 0 : W.data) == null ? void 0 : Y.settlement_fias_id) || (($ = W == null ? void 0 : W.data) == null ? void 0 : $.region_fias_id) || null,
        value: ((D = W == null ? void 0 : W.data) == null ? void 0 : D.city_with_type) || ((U = W == null ? void 0 : W.data) == null ? void 0 : U.settlement_with_type) || ((G = W == null ? void 0 : W.data) == null ? void 0 : G.region_with_type) || (W == null ? void 0 : W.value) || u,
        country: W.data.country_iso_code,
        city: W.data.city_with_type,
        region: W.data.region_with_type,
        district: W.data.city_district,
        street: W.data.street_with_type,
        house: W.data.house
      };
    } catch (ue) {
      return console.error("Ошибка получения FIAS по адресу:", ue), null;
    }
  }
  async function Nt(u, p) {
    var U, G, ue;
    const N = await fetch(
      `https://geocode-maps.yandex.ru/1.x/?apikey=${o}&geocode=${u},${p}&format=json`
    );
    if (!N.ok)
      throw new Error("Не удалось определить адрес по точке на карте.");
    const $ = (G = (U = (await N.json()).response.GeoObjectCollection.featureMember) == null ? void 0 : U[0]) == null ? void 0 : G.GeoObject, D = (ue = $ == null ? void 0 : $.metaDataProperty) == null ? void 0 : ue.GeocoderMetaData;
    return {
      address: (D == null ? void 0 : D.text) || null
    };
  }
  async function Mt(u) {
    const [p, N] = u;
    try {
      Ee("map-click-error"), se("map-click-loading", "info", "Определяем адрес по выбранной точке на карте...");
      const Y = await Nt(p, N), $ = Y == null ? void 0 : Y.address;
      if (!$) {
        ge(
          "map-click-error",
          "Не удалось определить адрес по выбранной точке. Попробуйте выбрать другое место."
        );
        return;
      }
      const D = await It($), U = D == null ? void 0 : D.fias, G = D == null ? void 0 : D.value, ue = {
        address: $,
        lon: p,
        lat: N,
        country: D.country,
        city: D.city,
        region: D.region,
        district: D.district,
        street: D.street,
        house: D.house
      };
      ye.current = !0, M(ue), Q(ue), O({
        value: G || $,
        fias: U || (h == null ? void 0 : h.fias) || null,
        lon: p,
        lat: N
      }), se("address-selected", "success", "Адрес определён. Проверьте его и подтвердите доставку.");
    } catch (Y) {
      console.error("Ошибка выбора адреса на карте:", Y), ge(
        "map-click-error",
        "Не удалось получить адрес по точке на карте. Попробуйте ещё раз. Если ошибка повторяется, перезагрузите страницу.",
        !0
      );
    }
  }
  function Me() {
    ve.current && f.current && (f.current.removeChild(ve.current), ve.current = null);
  }
  function $t(u) {
    if (!f.current || !window.ymaps3 || !u || !Oe.current)
      return;
    const { YMapMarker: p } = window.ymaps3;
    Me();
    const N = document.createElement("div");
    N.className = "delivery-address-marker", ve.current = new p(
      {
        coordinates: [u.lon, u.lat],
        source: "delivery-address-source"
      },
      N
    ), f.current.addChild(ve.current);
  }
  async function $e(u, p = {}, N = !1) {
    const Y = u.split("/"), $ = Y[Y.length - 1];
    try {
      const D = await fetch("https://api.esplc.ru" + u, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: e, ...p })
      });
      if (te((G) => ({
        ...G,
        [N]: !1
      })), !D.ok)
        return console.error(`Ошибка ${$}: ${D.status}`, p), N && y((G) => ({
          ...G,
          [$]: {
            ...G[$],
            [N]: {}
          }
        })), ge(
          `${$}-error`,
          "Не удалось загрузить часть данных по доставке. Попробуйте выбрать другой способ или перезагрузить страницу.",
          !0
        ), te((G) => ({
          ...G,
          [N]: !0
        })), null;
      const U = await D.json();
      return te((G) => ({
        ...G,
        [N]: !0
      })), y(N ? (G) => ({
        ...G,
        [$]: {
          ...G[$],
          [N]: U
        }
      }) : (G) => ({
        ...G,
        [$]: U
      })), U;
    } catch (D) {
      return console.error(`Network error ${u}:`, D), N && y((U) => ({
        ...U,
        [$]: {
          ...U[$],
          [N]: {}
        }
      })), ge(
        `${$}-network-error`,
        "Ошибка сети при загрузке доставки. Проверьте интернет и, если проблема не исчезнет, перезагрузите страницу.",
        !0
      ), null;
    }
  }
  function Lt(u) {
    const { YMapMarker: p } = window.ymaps3, N = u.properties.terminal, Y = document.createElement("img");
    return Y.className = "ymap-marker", Y.src = N.image, Y.onclick = ($) => {
      const D = {
        address: N.address,
        lon: Number(N.lon),
        lat: Number(N.lat)
      };
      k(N), M(D), Ee("invalid-method"), se("terminal-selected", "success", "Пункт выдачи выбран. Проверьте данные и подтвердите доставку."), document.querySelectorAll(".ymap-marker").forEach((U) => {
        U.classList.remove("active");
      }), $.currentTarget.classList.add("active");
    }, new p(
      {
        coordinates: u.geometry.coordinates,
        source: "clusterer-source"
      },
      Y
    );
  }
  function qt(u, p) {
    const { YMapMarker: N } = window.ymaps3, Y = document.createElement("div");
    return Y.className = "ymap-cluster", Y.textContent = p.length, new N(
      {
        coordinates: u,
        source: "clusterer-source"
      },
      Y
    );
  }
  function Ft(u) {
    return u ? Object.entries(u.data.terminals || {}).map(([p, N]) => ({
      id: `${N.service}-${p}`,
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [Number(N.lon), Number(N.lat)]
      },
      properties: {
        terminal: N,
        service: N.service
      }
    })) : [];
  }
  function Xe(u, p, N) {
    document.querySelectorAll(".deliveryMethod").forEach((D) => D.classList.remove("active")), u.currentTarget.classList.add("active");
    const Y = S, $ = (c == null ? void 0 : c.name) !== p || (c == null ? void 0 : c.type) !== N;
    switch ($ && (M(null), n(null), a == null || a(null)), N) {
      case "terminal":
        F(!1), ye.current = !1, Me(), k(null), se("terminal-mode", "info", "Выберите удобный пункт выдачи на карте.");
        break;
      case "door":
        F(!0), k(null), ye.current = !1, M(!$ && Y ? Y : null), se("door-mode", "info", "Выберите адрес на карте или введите его в строке поиска.");
        break;
    }
    x({ name: p, type: N });
  }
  async function Qe() {
    if (!c)
      return;
    let u = {};
    switch (u.service = c.name, u.type = c.type, c.type) {
      case "terminal":
        if (!m)
          return;
        u.isPostamat = m.is_postamat, u.address = {
          address: m.address
        }, u.code = m.code, u.price = m.price.value, u.unitPrice = m.price.unit, u.time = m.time.value, u.unitTime = m.time.unit, u.payment = m.payment.methods;
        break;
      case "door": {
        if (!C)
          return;
        let p = null;
        if (ye.current && (console.error("recalculation"), p = await $e(
          "/delivery/calculation",
          {
            to: h.fias,
            weight: r,
            service: c.name,
            address: C.address
          },
          c.name
        ), !p))
          return;
        u.address = C, p ? (u.price = p.data.door.price.value, u.unitPrice = p.data.door.price.unit, u.time = p.data.door.time.value, u.unitTime = p.data.door.time.unit) : (u.price = i.calculation[c.name].data.door.price.value, u.unitPrice = i.calculation[c.name].data.door.price.unit, u.time = i.calculation[c.name].data.door.time.value, u.unitTime = i.calculation[c.name].data.door.time.unit);
        break;
      }
    }
    n(u), se("delivery-confirmed", "success", "Адрес доставки подтверждён.");
  }
  le(() => {
    oe.current = I;
  }, [I]), le(() => {
    if (!P || !C || !I)
      return;
    const u = Number(C.lon), p = Number(C.lat);
    f.current && Number.isFinite(u) && Number.isFinite(p) && f.current.setLocation({
      center: [u, p]
    }), $t(C.address);
  }, [C, P, I]), le(() => {
    (async () => {
      try {
        T(!0), Ee(), se("initial-loading", "info", "Загружаем варианты доставки..."), await $e("/client/state");
        const p = await fetch("https://api.ipify.org?format=json");
        if (!p.ok)
          throw new Error("Не удалось определить IP адрес.");
        const N = await p.json(), Y = await fetch(
          "https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: "Token " + d
            },
            body: JSON.stringify({ ip: N.ip })
          }
        );
        if (!Y.ok)
          throw new Error("Не удалось определить город автоматически.");
        const $ = await Y.json();
        Ze($.location), M(null), Q(null);
      } catch (p) {
        console.error("Ошибка начальной загрузки:", p), ge(
          "initial-load-error",
          "Не удалось полностью загрузить данные доставки. Вы можете попробовать выбрать город вручную. Если ошибка повторяется, перезагрузите страницу.",
          !0
        );
      }
    })();
  }, []), le(() => {
    i.state && v(i.state.data.services);
  }, [i.state]), le(() => {
    !(h != null && h.fias) || !(h != null && h.value) || !Object.keys(g).length || Ge.current !== h.fias && (Ge.current = h.fias, se("calculation-loading", "info", "Рассчитываем стоимость и сроки доставки..."), Object.keys(g).forEach((u) => {
      $e(
        "/delivery/calculation",
        { to: h.fias, weight: r, service: u, address: h.value },
        u
      );
    }));
  }, [h, g]), le(() => {
    var N, Y;
    if (!c || !i.calculation)
      return;
    const u = i.calculation[c.name];
    (c.type === "terminal" ? (N = u == null ? void 0 : u.data) != null && N.terminal : (Y = u == null ? void 0 : u.data) != null && Y.door) || (document.querySelectorAll(".deliveryMethod").forEach(($) => $.classList.remove("active")), x(!1), k(null), I || Me(), se(
      "invalid-method",
      "info",
      "Выбранный способ доставки больше недоступен для текущего адреса. Пожалуйста, выберите другой вариант."
    ));
  }, [i.calculation, c, I]), le(() => {
    if (!w || !f.current || !h)
      return;
    const u = Number(h.lon), p = Number(h.lat);
    !Number.isFinite(u) || !Number.isFinite(p) || w && i.state && f.current.setLocation({
      center: [u, p]
    });
  }, [h, w, i.state]), le(() => {
    if (!w || !P || !i.calculation || !f.current || !window.ymaps3 || !c)
      return;
    const u = async () => {
      var U;
      k(null);
      const { YMapClusterer: N, clusterByGrid: Y } = await window.ymaps3.import(
        "@yandex/ymaps3-clusterer@0.0.1"
      ), $ = i.calculation[c.name];
      if (!((U = $ == null ? void 0 : $.data) != null && U.terminals)) {
        se(
          "terminal-points-missing",
          "info",
          "Для выбранного способа нет точек выдачи. Попробуйте другой вариант доставки."
        );
        return;
      }
      const D = Ft($);
      z.current && (f.current.removeChild(z.current), z.current = null), z.current = new N({
        method: Y({ gridSize: 128 }),
        features: D,
        marker: Lt,
        cluster: qt
      }), f.current.addChild(z.current);
    }, p = async () => {
      k(null), z.current && (f.current.removeChild(z.current), z.current = null);
    };
    c.type === "terminal" && u(), c.type === "door" && p();
  }, [w, P, c, i.calculation]), le(() => {
    i.state && (T(!1), se("state-loaded", "success", "Данные доставки загружены. Выберите подходящий способ."));
  }, [i.state]), le(() => {
    if (l)
      return;
    j(!1), Oe.current = !1;
    let u = !1;
    const p = () => new Promise((Y, $) => {
      if (window.ymaps3) {
        Y();
        return;
      }
      const D = document.querySelector('script[src^="https://api-maps.yandex.ru/v3/"]');
      if (D) {
        D.addEventListener("load", Y, { once: !0 }), D.addEventListener("error", $, { once: !0 });
        return;
      }
      const U = document.createElement("script");
      U.src = `https://api-maps.yandex.ru/v3/?apikey=${o}&lang=ru_RU`, U.async = !0, U.onload = Y, U.onerror = $, document.head.appendChild(U);
    });
    return (async () => {
      try {
        if (se("map-loading", "info", "Загружаем карту..."), await p(), await window.ymaps3.ready, ymaps3.import.registerCdn(
          "https://cdn.jsdelivr.net/npm/{package}",
          "@yandex/ymaps3-default-ui-theme@latest"
        ), u || !L.current)
          return;
        const {
          YMap: Y,
          YMapDefaultSchemeLayer: $,
          YMapDefaultFeaturesLayer: D,
          YMapFeatureDataSource: U,
          YMapLayer: G,
          YMapListener: ue
        } = window.ymaps3, { YMapControls: Te } = window.ymaps3, { YMapZoomControl: W } = await window.ymaps3.import("@yandex/ymaps3-default-ui-theme");
        f.current = new Y(L.current, {
          location: Er
        });
        const Re = new Te(
          { position: "right", orientation: "vertical" },
          [new W({ easing: "linear" })]
        ), _e = new ue({
          layer: "any",
          onClick: (Le, Pe) => {
            oe.current && Mt(Pe.coordinates);
          }
        });
        f.current.addChild(new $()).addChild(new D()).addChild(new U({ id: "clusterer-source" })).addChild(new G({ source: "clusterer-source", type: "markers", zIndex: 1800 })).addChild(new U({ id: "delivery-address-source" })).addChild(
          new G({ source: "delivery-address-source", type: "markers", zIndex: 1900 })
        ).addChild(Re).addChild(_e), Oe.current = !0, j(!0), A(!0), se("map-ready", "success", "Карта загружена. Теперь можно выбрать способ и адрес доставки.");
      } catch (Y) {
        console.error("Ошибка загрузки Яндекс.Карт:", Y), ge(
          "map-load-error",
          "Не удалось загрузить карту. Попробуйте перезагрузить страницу. Если карта не нужна, вы всё равно можете выбрать город через поиск.",
          !0
        );
      }
    })(), () => {
      u = !0, j(!1), Oe.current = !1, ve.current = null, f.current && f.current.destroy();
    };
  }, [l]), le(() => {
    const u = m || I && C;
    if (u) {
      b(u);
      return;
    }
    b(!1);
  }, [m, I, C]), le(() => {
    if (n(null), (c == null ? void 0 : c.type) === "door") {
      if (!ye.current || !I || !C)
        return;
      Qe(), ye.current = !1;
      return;
    }
    (c == null ? void 0 : c.type) === "terminal" && m && Qe();
  }, [C, I, c, m]);
  async function Yt() {
    if (!t)
      return;
    const u = {};
    t.type === "door" && !(X != null && X.trim()) && (u.deliveryRoom = !0), K != null && K.trim() || (u.deliveryName = !0);
    const p = (ee || "").replace(/\D/g, "");
    if ((!(ee != null && ee.trim()) || p.length !== 11) && (u.deliveryPhone = !0), Z(u), Object.keys(u).length > 0) {
      ge("delivery-required-fields", "Заполните обязательные поля доставки.");
      return;
    }
    Ee("delivery-required-fields");
    const N = {
      ...t,
      room: (X == null ? void 0 : X.trim()) || "",
      name: K.trim(),
      phone: ee.trim(),
      comment: ne,
      checked: !0
    };
    a == null || a(N);
  }
  return le(() => {
    t && Yt();
  }, [t, X, K, ee, ne]), le(() => {
    const u = {};
    u.deliveryRoom = !X, u.deliveryName = !K, u.deliveryPhone = !ee, Z(u);
  }, [X, K, ee, c]), le(() => {
    localStorage.setItem(
      Ot,
      JSON.stringify({
        deliveryRoom: X,
        deliveryName: K,
        deliveryPhone: ee,
        deliveryComment: ne
      })
    );
  }, [X, K, ee, ne]), /* @__PURE__ */ q.jsxs("div", { className: "EShopLogistic", children: [
    l && /* @__PURE__ */ q.jsx("div", { className: "deliveryLoading", children: "Загрузка..." }),
    !l && /* @__PURE__ */ q.jsxs(q.Fragment, { children: [
      /* @__PURE__ */ q.jsx(
        gr,
        {
          token: d,
          type: "address",
          onChange: Ze,
          placeholder: "Введите город / Адрес доставки...",
          query: (C == null ? void 0 : C.address) || (h == null ? void 0 : h.value) || ""
        }
      ),
      i.calculation && /* @__PURE__ */ q.jsxs("div", { className: "deliverySettings", children: [
        /* @__PURE__ */ q.jsx("ul", { className: "deliveryCalculation", children: Object.entries(i.calculation).map(([u, p]) => {
          var N, Y, $, D, U, G, ue, Te, W, Re, _e, Le, Pe, Ke, et, tt, rt, nt, at, it, ot, st, ut, ct, lt, ft;
          return /* @__PURE__ */ q.jsxs(Dt, { children: [
            ((N = p == null ? void 0 : p.data) == null ? void 0 : N.terminal) && /* @__PURE__ */ q.jsx(
              "li",
              {
                className: "deliveryMethod",
                onClick: (qe) => {
                  Xe(qe, u, "terminal");
                },
                children: /* @__PURE__ */ q.jsxs("span", { children: [
                  i.state.data.services[u].name,
                  " до пункта выдачи: ",
                  (D = ($ = (Y = p == null ? void 0 : p.data) == null ? void 0 : Y.terminal) == null ? void 0 : $.price) == null ? void 0 : D.value,
                  " ",
                  (ue = (G = (U = p == null ? void 0 : p.data) == null ? void 0 : U.terminal) == null ? void 0 : G.price) == null ? void 0 : ue.unit,
                  " - ",
                  (Re = (W = (Te = p == null ? void 0 : p.data) == null ? void 0 : Te.terminal) == null ? void 0 : W.time) == null ? void 0 : Re.value,
                  " ",
                  (Pe = (Le = (_e = p == null ? void 0 : p.data) == null ? void 0 : _e.terminal) == null ? void 0 : Le.time) == null ? void 0 : Pe.unit
                ] })
              }
            ),
            ((Ke = p == null ? void 0 : p.data) == null ? void 0 : Ke.door) && /* @__PURE__ */ q.jsx(
              "li",
              {
                className: "deliveryMethod",
                onClick: (qe) => {
                  Xe(qe, u, "door");
                },
                children: /* @__PURE__ */ q.jsxs("span", { children: [
                  i.state.data.services[u].name,
                  " курьером: ",
                  (rt = (tt = (et = p == null ? void 0 : p.data) == null ? void 0 : et.door) == null ? void 0 : tt.price) == null ? void 0 : rt.value,
                  " ",
                  (it = (at = (nt = p == null ? void 0 : p.data) == null ? void 0 : nt.door) == null ? void 0 : at.price) == null ? void 0 : it.unit,
                  " - ",
                  (ut = (st = (ot = p == null ? void 0 : p.data) == null ? void 0 : ot.door) == null ? void 0 : st.time) == null ? void 0 : ut.value,
                  " ",
                  (ft = (lt = (ct = p == null ? void 0 : p.data) == null ? void 0 : ct.door) == null ? void 0 : lt.time) == null ? void 0 : ft.unit
                ] })
              }
            )
          ] }, u);
        }) }),
        /* @__PURE__ */ q.jsx("div", { children: Object.values(ae).some((u) => u === !1) && /* @__PURE__ */ q.jsx("div", { children: "Loading..." }) })
      ] }),
      /* @__PURE__ */ q.jsxs("div", { className: "deliveryInfo", children: [
        /* @__PURE__ */ q.jsx("div", { id: "ymap", ref: L }),
        /* @__PURE__ */ q.jsxs("ul", { className: "pointInfo", children: [
          m && /* @__PURE__ */ q.jsxs(q.Fragment, { children: [
            /* @__PURE__ */ q.jsx("li", { children: /* @__PURE__ */ q.jsx("img", { src: m.image, alt: m.service }) }),
            /* @__PURE__ */ q.jsx("li", { children: m.is_postamat ? "Постамат" : "Пункт выдачи" }),
            /* @__PURE__ */ q.jsx("li", { children: Ce(m.address) }),
            /* @__PURE__ */ q.jsx("li", { children: Ce(m.workTime) }),
            /* @__PURE__ */ q.jsxs("li", { children: [
              "Номер: ",
              Array.isArray(m.phones) ? m.phones.join(", ") : Ce(m.phones)
            ] }),
            /* @__PURE__ */ q.jsx("q", { children: Ce(m.note) })
          ] }),
          !m && C && c && g[c.name] && /* @__PURE__ */ q.jsxs(q.Fragment, { children: [
            /* @__PURE__ */ q.jsx("li", { children: /* @__PURE__ */ q.jsx("img", { src: g[c.name].logo, alt: c.name }) }),
            /* @__PURE__ */ q.jsx("li", { children: g[c.name].name }),
            /* @__PURE__ */ q.jsx("li", { children: C.address })
          ] })
        ] })
      ] }),
      t && /* @__PURE__ */ q.jsxs("div", { className: "prooveDelivery", children: [
        /* @__PURE__ */ q.jsx("img", { src: g[t.service].logo, alt: t.service }),
        /* @__PURE__ */ q.jsxs("div", { className: "heading", children: [
          t.type == "terminal" ? t.isPostamat == !0 ? "Постамат" : "Пункт выдачи" : "Курьер",
          " ",
          g[t.service].name
        ] }),
        /* @__PURE__ */ q.jsx("div", { className: "address", children: t.address.address }),
        c.type == "door" && /* @__PURE__ */ q.jsxs("div", { children: [
          /* @__PURE__ */ q.jsx("span", { className: "red", children: "*" }),
          "Квартира: ",
          " ",
          /* @__PURE__ */ q.jsx(
            "input",
            {
              className: `room ${ce.deliveryRoom ? "inputError" : ""}`,
              type: "text",
              placeholder: "№",
              value: X || "",
              onChange: (u) => {
                he(u.target.value), Z((p) => ({ ...p, deliveryRoom: !1 }));
              }
            }
          )
        ] }),
        /* @__PURE__ */ q.jsxs("div", { children: [
          /* @__PURE__ */ q.jsx("span", { className: "red", children: "*" }),
          "Имя: ",
          " ",
          /* @__PURE__ */ q.jsx(
            "input",
            {
              className: `name ${ce.deliveryName ? "inputError" : ""}`,
              type: "text",
              placeholder: "Сайтама",
              value: K || "",
              onChange: (u) => {
                ie(u.target.value), Z((p) => ({ ...p, deliveryName: !1 }));
              }
            }
          )
        ] }),
        /* @__PURE__ */ q.jsxs("div", { children: [
          /* @__PURE__ */ q.jsx("span", { className: "red", children: "*" }),
          "Телефон: ",
          " ",
          /* @__PURE__ */ q.jsx(
            "input",
            {
              className: `phone ${ce.deliveryPhone ? "inputError" : ""}`,
              type: "text",
              inputMode: "tel",
              placeholder: "+7 (900) 800-70-60",
              value: ee || "",
              onChange: (u) => {
                fe(kt(u.target.value)), Z((p) => ({ ...p, deliveryPhone: !1 }));
              }
            }
          )
        ] }),
        /* @__PURE__ */ q.jsxs("div", { children: [
          "Комментарий:",
          /* @__PURE__ */ q.jsx(
            "input",
            {
              className: "comment",
              type: "text",
              value: ne || "",
              onChange: (u) => de(u.target.value),
              placeholder: "Комментарий к доставке (укажите особенности адреса)"
            }
          )
        ] }),
        /* @__PURE__ */ q.jsx("div", { className: "time", children: t.time + " " + t.unitTime }),
        /* @__PURE__ */ q.jsx("div", { className: "price", children: t.price + " " + t.unitPrice })
      ] }),
      (_ == null ? void 0 : _.text) && /* @__PURE__ */ q.jsxs("div", { className: `deliveryStatus deliveryStatus--${_.type}`, children: [
        /* @__PURE__ */ q.jsx("div", { children: _.text }),
        _.reloadRecommended && /* @__PURE__ */ q.jsx("div", { className: "deliveryStatusHint", children: "Если проблема повторяется, попробуйте перезагрузить страницу." })
      ] })
    ] })
  ] });
};
async function xr(d, e, o, r, a = {}) {
  if (!d)
    throw new Error("ESHOPLOGISTIC_TOKEN is required to create an EShopLogistic delivery order.");
  let s = r.pick_up == !0 ? {
    pick_up: r.pick_up,
    address: r.address
  } : {
    pick_up: r.pick_up
  }, E = e.type == "terminal" ? {
    terminal: e.code
  } : {
    address: {
      country: e.address.country,
      // string 	Код страны.
      // Варианты: RU, UZ, AZ, KZ, AB, TM, BY, UA, TJ, KG, AM, MD 
      region: e.address.region,
      // string 	Регион. Например: Московская область
      city: e.address.city,
      // string 	Населённый пункт
      district: e.address.district,
      // string 	Район
      street: e.address.street,
      // string 	Улица
      house: e.address.house,
      // string 	Номер строения
      room: e.room
      // string 	Квартира / офис / помещение
    }
  }, i = {
    id: o.id,
    comment: e.comment
    // string 	Комментарий
  }, y;
  switch (e.service) {
    case "sdek":
      i.type = o.type, o.combine_places_apply == !0 && (i.combine_places = {}, i.combine_places.apply = !0, i.combine_places.weight = o.total_weight, i.combine_places.dimensions = o.dimensions), e.type == "terminal" ? y = 136 : e.type == "door" && (y = 137);
      break;
  }
  let g = {
    key: d,
    action: "create",
    cms: "custom",
    service: e.service,
    order: i,
    sender: {
      name: r.senderName,
      phone: r.senderPhone,
      company: r.senderCompany
    },
    receiver: {
      name: e.name,
      phone: e.phone
    },
    places: o.places,
    delivery: {
      type: e.type,
      tariff: y,
      location_from: s,
      location_to: E,
      payment: o.payment,
      cost: e.price
    }
  }, v = await fetch("https://api.esplc.ru/delivery/order", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(g)
  });
  if (!v.ok)
    throw new Error(`EShopLogistic order creation failed with status ${v.status}`);
  return await v.json();
}
export {
  wr as EShopLogistic,
  xr as createOrder
};
