import { Fragment as e, useEffect as t, useRef as n, useState as r } from "react";
//#region \0rolldown/runtime.js
var i = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), a = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy < "u" ? new Proxy(e, { get: (e, t) => (typeof require < "u" ? require : e)[t] }) : e)(function(e) {
	if (typeof require < "u") return require.apply(this, arguments);
	throw Error("Calling `require` for \"" + e + "\" in an environment that doesn't expose the `require` function. See https://rolldown.rs/in-depth/bundling-cjs#require-external-modules for more details.");
}), o = /* @__PURE__ */ i(((e) => {
	var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
	function b(e) {
		if (typeof e == "object" && e) {
			var t = e.$$typeof;
			switch (t) {
				case n: switch (e = e.type, e) {
					case l:
					case u:
					case i:
					case o:
					case a:
					case f: return e;
					default: switch (e &&= e.$$typeof, e) {
						case c:
						case d:
						case h:
						case m:
						case s: return e;
						default: return t;
					}
				}
				case r: return t;
			}
		}
	}
	function x(e) {
		return b(e) === u;
	}
	e.AsyncMode = l, e.ConcurrentMode = u, e.ContextConsumer = c, e.ContextProvider = s, e.Element = n, e.ForwardRef = d, e.Fragment = i, e.Lazy = h, e.Memo = m, e.Portal = r, e.Profiler = o, e.StrictMode = a, e.Suspense = f, e.isAsyncMode = function(e) {
		return x(e) || b(e) === l;
	}, e.isConcurrentMode = x, e.isContextConsumer = function(e) {
		return b(e) === c;
	}, e.isContextProvider = function(e) {
		return b(e) === s;
	}, e.isElement = function(e) {
		return typeof e == "object" && !!e && e.$$typeof === n;
	}, e.isForwardRef = function(e) {
		return b(e) === d;
	}, e.isFragment = function(e) {
		return b(e) === i;
	}, e.isLazy = function(e) {
		return b(e) === h;
	}, e.isMemo = function(e) {
		return b(e) === m;
	}, e.isPortal = function(e) {
		return b(e) === r;
	}, e.isProfiler = function(e) {
		return b(e) === o;
	}, e.isStrictMode = function(e) {
		return b(e) === a;
	}, e.isSuspense = function(e) {
		return b(e) === f;
	}, e.isValidElementType = function(e) {
		return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
	}, e.typeOf = b;
})), s = /* @__PURE__ */ i(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		var t = typeof Symbol == "function" && Symbol.for, n = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, i = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, c = t ? Symbol.for("react.context") : 60110, l = t ? Symbol.for("react.async_mode") : 60111, u = t ? Symbol.for("react.concurrent_mode") : 60111, d = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, g = t ? Symbol.for("react.block") : 60121, _ = t ? Symbol.for("react.fundamental") : 60117, v = t ? Symbol.for("react.responder") : 60118, y = t ? Symbol.for("react.scope") : 60119;
		function b(e) {
			return typeof e == "string" || typeof e == "function" || e === i || e === u || e === o || e === a || e === f || e === p || typeof e == "object" && !!e && (e.$$typeof === h || e.$$typeof === m || e.$$typeof === s || e.$$typeof === c || e.$$typeof === d || e.$$typeof === _ || e.$$typeof === v || e.$$typeof === y || e.$$typeof === g);
		}
		function x(e) {
			if (typeof e == "object" && e) {
				var t = e.$$typeof;
				switch (t) {
					case n:
						var p = e.type;
						switch (p) {
							case l:
							case u:
							case i:
							case o:
							case a:
							case f: return p;
							default:
								var g = p && p.$$typeof;
								switch (g) {
									case c:
									case d:
									case h:
									case m:
									case s: return g;
									default: return t;
								}
						}
					case r: return t;
				}
			}
		}
		var S = l, C = u, w = c, T = s, E = n, D = d, O = i, k = h, A = m, j = r, M = o, N = a, P = f, F = !1;
		function I(e) {
			return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), L(e) || x(e) === l;
		}
		function L(e) {
			return x(e) === u;
		}
		function R(e) {
			return x(e) === c;
		}
		function ee(e) {
			return x(e) === s;
		}
		function z(e) {
			return typeof e == "object" && !!e && e.$$typeof === n;
		}
		function B(e) {
			return x(e) === d;
		}
		function te(e) {
			return x(e) === i;
		}
		function V(e) {
			return x(e) === h;
		}
		function ne(e) {
			return x(e) === m;
		}
		function re(e) {
			return x(e) === r;
		}
		function H(e) {
			return x(e) === o;
		}
		function U(e) {
			return x(e) === a;
		}
		function W(e) {
			return x(e) === f;
		}
		e.AsyncMode = S, e.ConcurrentMode = C, e.ContextConsumer = w, e.ContextProvider = T, e.Element = E, e.ForwardRef = D, e.Fragment = O, e.Lazy = k, e.Memo = A, e.Portal = j, e.Profiler = M, e.StrictMode = N, e.Suspense = P, e.isAsyncMode = I, e.isConcurrentMode = L, e.isContextConsumer = R, e.isContextProvider = ee, e.isElement = z, e.isForwardRef = B, e.isFragment = te, e.isLazy = V, e.isMemo = ne, e.isPortal = re, e.isProfiler = H, e.isStrictMode = U, e.isSuspense = W, e.isValidElementType = b, e.typeOf = x;
	})();
})), c = /* @__PURE__ */ i(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = o() : t.exports = s();
})), l = /* @__PURE__ */ i(((e, t) => {
	var n = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
	function a(e) {
		if (e == null) throw TypeError("Object.assign cannot be called with null or undefined");
		return Object(e);
	}
	function o() {
		try {
			if (!Object.assign) return !1;
			var e = /* @__PURE__ */ new String("abc");
			if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5") return !1;
			for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
			if (Object.getOwnPropertyNames(t).map(function(e) {
				return t[e];
			}).join("") !== "0123456789") return !1;
			var r = {};
			return "abcdefghijklmnopqrst".split("").forEach(function(e) {
				r[e] = e;
			}), Object.keys(Object.assign({}, r)).join("") === "abcdefghijklmnopqrst";
		} catch {
			return !1;
		}
	}
	t.exports = o() ? Object.assign : function(e, t) {
		for (var o, s = a(e), c, l = 1; l < arguments.length; l++) {
			for (var u in o = Object(arguments[l]), o) r.call(o, u) && (s[u] = o[u]);
			if (n) {
				c = n(o);
				for (var d = 0; d < c.length; d++) i.call(o, c[d]) && (s[c[d]] = o[c[d]]);
			}
		}
		return s;
	};
})), u = /* @__PURE__ */ i(((e, t) => {
	t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
})), d = /* @__PURE__ */ i(((e, t) => {
	t.exports = Function.call.bind(Object.prototype.hasOwnProperty);
})), f = /* @__PURE__ */ i(((e, t) => {
	var n = function() {};
	if (process.env.NODE_ENV !== "production") {
		var r = u(), i = {}, a = d();
		n = function(e) {
			var t = "Warning: " + e;
			typeof console < "u" && console.error(t);
			try {
				throw Error(t);
			} catch {}
		};
	}
	function o(e, t, o, s, c) {
		if (process.env.NODE_ENV !== "production") {
			for (var l in e) if (a(e, l)) {
				var u;
				try {
					if (typeof e[l] != "function") {
						var d = Error((s || "React class") + ": " + o + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
						throw d.name = "Invariant Violation", d;
					}
					u = e[l](t, l, s, o, null, r);
				} catch (e) {
					u = e;
				}
				if (u && !(u instanceof Error) && n((s || "React class") + ": type specification of " + o + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), u instanceof Error && !(u.message in i)) {
					i[u.message] = !0;
					var f = c ? c() : "";
					n("Failed " + o + " type: " + u.message + (f ?? ""));
				}
			}
		}
	}
	o.resetWarningCache = function() {
		process.env.NODE_ENV !== "production" && (i = {});
	}, t.exports = o;
})), p = /* @__PURE__ */ i(((e, t) => {
	var n = c(), r = l(), i = u(), a = d(), o = f(), s = function() {};
	process.env.NODE_ENV !== "production" && (s = function(e) {
		var t = "Warning: " + e;
		typeof console < "u" && console.error(t);
		try {
			throw Error(t);
		} catch {}
	});
	function p() {
		return null;
	}
	t.exports = function(e, t) {
		var c = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
		function u(e) {
			var t = e && (c && e[c] || e[l]);
			if (typeof t == "function") return t;
		}
		var d = "<<anonymous>>", f = {
			array: _("array"),
			bigint: _("bigint"),
			bool: _("boolean"),
			func: _("function"),
			number: _("number"),
			object: _("object"),
			string: _("string"),
			symbol: _("symbol"),
			any: v(),
			arrayOf: y,
			element: b(),
			elementType: x(),
			instanceOf: S,
			node: E(),
			objectOf: w,
			oneOf: C,
			oneOfType: T,
			shape: O,
			exact: k
		};
		function m(e, t) {
			return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
		}
		function h(e, t) {
			this.message = e, this.data = t && typeof t == "object" ? t : {}, this.stack = "";
		}
		h.prototype = Error.prototype;
		function g(e) {
			if (process.env.NODE_ENV !== "production") var n = {}, r = 0;
			function a(a, o, c, l, u, f, p) {
				if (l ||= d, f ||= c, p !== i) {
					if (t) {
						var m = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
						throw m.name = "Invariant Violation", m;
					} else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
						var g = l + ":" + c;
						!n[g] && r < 3 && (s("You are manually calling a React.PropTypes validation function for the `" + f + "` prop on `" + l + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), n[g] = !0, r++);
					}
				}
				return o[c] == null ? a ? o[c] === null ? new h("The " + u + " `" + f + "` is marked as required " + ("in `" + l + "`, but its value is `null`.")) : new h("The " + u + " `" + f + "` is marked as required in " + ("`" + l + "`, but its value is `undefined`.")) : null : e(o, c, l, u, f);
			}
			var o = a.bind(null, !1);
			return o.isRequired = a.bind(null, !0), o;
		}
		function _(e) {
			function t(t, n, r, i, a, o) {
				var s = t[n];
				if (M(s) !== e) {
					var c = N(s);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected ") + ("`" + e + "`."), { expectedType: e });
				}
				return null;
			}
			return g(t);
		}
		function v() {
			return g(p);
		}
		function y(e) {
			function t(t, n, r, a, o) {
				if (typeof e != "function") return new h("Property `" + o + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
				var s = t[n];
				if (!Array.isArray(s)) {
					var c = M(s);
					return new h("Invalid " + a + " `" + o + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected an array."));
				}
				for (var l = 0; l < s.length; l++) {
					var u = e(s, l, r, a, o + "[" + l + "]", i);
					if (u instanceof Error) return u;
				}
				return null;
			}
			return g(t);
		}
		function b() {
			function t(t, n, r, i, a) {
				var o = t[n];
				if (!e(o)) {
					var s = M(o);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected a single ReactElement."));
				}
				return null;
			}
			return g(t);
		}
		function x() {
			function e(e, t, r, i, a) {
				var o = e[t];
				if (!n.isValidElementType(o)) {
					var s = M(o);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected a single ReactElement type."));
				}
				return null;
			}
			return g(e);
		}
		function S(e) {
			function t(t, n, r, i, a) {
				if (!(t[n] instanceof e)) {
					var o = e.name || d, s = F(t[n]);
					return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected ") + ("instance of `" + o + "`."));
				}
				return null;
			}
			return g(t);
		}
		function C(e) {
			if (!Array.isArray(e)) return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? s("Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).") : s("Invalid argument supplied to oneOf, expected an array.")), p;
			function t(t, n, r, i, a) {
				for (var o = t[n], s = 0; s < e.length; s++) if (m(o, e[s])) return null;
				var c = JSON.stringify(e, function(e, t) {
					return N(t) === "symbol" ? String(t) : t;
				});
				return new h("Invalid " + i + " `" + a + "` of value `" + String(o) + "` " + ("supplied to `" + r + "`, expected one of " + c + "."));
			}
			return g(t);
		}
		function w(e) {
			function t(t, n, r, o, s) {
				if (typeof e != "function") return new h("Property `" + s + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
				var c = t[n], l = M(c);
				if (l !== "object") return new h("Invalid " + o + " `" + s + "` of type " + ("`" + l + "` supplied to `" + r + "`, expected an object."));
				for (var u in c) if (a(c, u)) {
					var d = e(c, u, r, o, s + "." + u, i);
					if (d instanceof Error) return d;
				}
				return null;
			}
			return g(t);
		}
		function T(e) {
			if (!Array.isArray(e)) return process.env.NODE_ENV !== "production" && s("Invalid argument supplied to oneOfType, expected an instance of array."), p;
			for (var t = 0; t < e.length; t++) {
				var n = e[t];
				if (typeof n != "function") return s("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + P(n) + " at index " + t + "."), p;
			}
			function r(t, n, r, o, s) {
				for (var c = [], l = 0; l < e.length; l++) {
					var u = e[l], d = u(t, n, r, o, s, i);
					if (d == null) return null;
					d.data && a(d.data, "expectedType") && c.push(d.data.expectedType);
				}
				var f = c.length > 0 ? ", expected one of type [" + c.join(", ") + "]" : "";
				return new h("Invalid " + o + " `" + s + "` supplied to " + ("`" + r + "`" + f + "."));
			}
			return g(r);
		}
		function E() {
			function e(e, t, n, r, i) {
				return A(e[t]) ? null : new h("Invalid " + r + " `" + i + "` supplied to " + ("`" + n + "`, expected a ReactNode."));
			}
			return g(e);
		}
		function D(e, t, n, r, i) {
			return new h((e || "React class") + ": " + t + " type `" + n + "." + r + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + i + "`.");
		}
		function O(e) {
			function t(t, n, r, a, o) {
				var s = t[n], c = M(s);
				if (c !== "object") return new h("Invalid " + a + " `" + o + "` of type `" + c + "` " + ("supplied to `" + r + "`, expected `object`."));
				for (var l in e) {
					var u = e[l];
					if (typeof u != "function") return D(r, a, o, l, N(u));
					var d = u(s, l, r, a, o + "." + l, i);
					if (d) return d;
				}
				return null;
			}
			return g(t);
		}
		function k(e) {
			function t(t, n, o, s, c) {
				var l = t[n], u = M(l);
				if (u !== "object") return new h("Invalid " + s + " `" + c + "` of type `" + u + "` " + ("supplied to `" + o + "`, expected `object`."));
				for (var d in r({}, t[n], e)) {
					var f = e[d];
					if (a(e, d) && typeof f != "function") return D(o, s, c, d, N(f));
					if (!f) return new h("Invalid " + s + " `" + c + "` key `" + d + "` supplied to `" + o + "`.\nBad object: " + JSON.stringify(t[n], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
					var p = f(l, d, o, s, c + "." + d, i);
					if (p) return p;
				}
				return null;
			}
			return g(t);
		}
		function A(t) {
			switch (typeof t) {
				case "number":
				case "string":
				case "undefined": return !0;
				case "boolean": return !t;
				case "object":
					if (Array.isArray(t)) return t.every(A);
					if (t === null || e(t)) return !0;
					var n = u(t);
					if (n) {
						var r = n.call(t), i;
						if (n !== t.entries) {
							for (; !(i = r.next()).done;) if (!A(i.value)) return !1;
						} else for (; !(i = r.next()).done;) {
							var a = i.value;
							if (a && !A(a[1])) return !1;
						}
					} else return !1;
					return !0;
				default: return !1;
			}
		}
		function j(e, t) {
			return e === "symbol" ? !0 : t ? t["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && t instanceof Symbol : !1;
		}
		function M(e) {
			var t = typeof e;
			return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : j(t, e) ? "symbol" : t;
		}
		function N(e) {
			if (e == null) return "" + e;
			var t = M(e);
			if (t === "object") {
				if (e instanceof Date) return "date";
				if (e instanceof RegExp) return "regexp";
			}
			return t;
		}
		function P(e) {
			var t = N(e);
			switch (t) {
				case "array":
				case "object": return "an " + t;
				case "boolean":
				case "date":
				case "regexp": return "a " + t;
				default: return t;
			}
		}
		function F(e) {
			return !e.constructor || !e.constructor.name ? d : e.constructor.name;
		}
		return f.checkPropTypes = o, f.resetWarningCache = o.resetWarningCache, f.PropTypes = f, f;
	};
})), m = /* @__PURE__ */ i(((e, t) => {
	var n = u();
	function r() {}
	function i() {}
	i.resetWarningCache = r, t.exports = function() {
		function e(e, t, r, i, a, o) {
			if (o !== n) {
				var s = /* @__PURE__ */ Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				throw s.name = "Invariant Violation", s;
			}
		}
		e.isRequired = e;
		function t() {
			return e;
		}
		var a = {
			array: e,
			bigint: e,
			bool: e,
			func: e,
			number: e,
			object: e,
			string: e,
			symbol: e,
			any: e,
			arrayOf: t,
			element: e,
			elementType: e,
			instanceOf: t,
			node: e,
			objectOf: t,
			oneOf: t,
			oneOfType: t,
			shape: t,
			exact: t,
			checkPropTypes: i,
			resetWarningCache: r
		};
		return a.PropTypes = a, a;
	};
})), h = /* @__PURE__ */ i(((e, t) => {
	if (process.env.NODE_ENV !== "production") {
		var n = c();
		t.exports = p()(n.isElement, !0);
	} else t.exports = m()();
})), g = /* @__PURE__ */ i(((e, t) => {
	t.exports = (function(e) {
		var t = {};
		function n(r) {
			if (t[r]) return t[r].exports;
			var i = t[r] = {
				exports: {},
				id: r,
				loaded: !1
			};
			return e[r].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports;
		}
		return n.m = e, n.c = t, n.p = "", n(0);
	})([
		(function(e, t, n) {
			e.exports = n(1);
		}),
		(function(e, t, n) {
			Object.defineProperty(t, "__esModule", { value: !0 });
			function r(e) {
				return e && e.__esModule ? e : { default: e };
			}
			t.default = r(n(2)).default, e.exports = t.default;
		}),
		(function(e, t, n) {
			Object.defineProperty(t, "__esModule", { value: !0 });
			var r = Object.assign || function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var n = arguments[t];
					for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
				}
				return e;
			};
			t.default = u;
			function i(e) {
				return e && e.__esModule ? e : { default: e };
			}
			function a(e, t) {
				var n = {};
				for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
				return n;
			}
			var o = n(3), s = i(n(4)), c = n(14), l = i(n(15));
			u.propTypes = {
				activeClassName: s.default.string,
				activeIndex: s.default.number,
				activeStyle: s.default.object,
				autoEscape: s.default.bool,
				className: s.default.string,
				findChunks: s.default.func,
				highlightClassName: s.default.oneOfType([s.default.object, s.default.string]),
				highlightStyle: s.default.object,
				highlightTag: s.default.oneOfType([
					s.default.node,
					s.default.func,
					s.default.string
				]),
				sanitize: s.default.func,
				searchWords: s.default.arrayOf(s.default.oneOfType([s.default.string, s.default.instanceOf(RegExp)])).isRequired,
				textToHighlight: s.default.string.isRequired,
				unhighlightClassName: s.default.string,
				unhighlightStyle: s.default.object
			};
			function u(e) {
				var t = e.activeClassName, n = t === void 0 ? "" : t, i = e.activeIndex, s = i === void 0 ? -1 : i, u = e.activeStyle, d = e.autoEscape, f = e.caseSensitive, p = f !== void 0 && f, m = e.className, h = e.findChunks, g = e.highlightClassName, _ = g === void 0 ? "" : g, v = e.highlightStyle, y = v === void 0 ? {} : v, b = e.highlightTag, x = b === void 0 ? "mark" : b, S = e.sanitize, C = e.searchWords, w = e.textToHighlight, T = e.unhighlightClassName, E = T === void 0 ? "" : T, D = e.unhighlightStyle, O = a(e, [
					"activeClassName",
					"activeIndex",
					"activeStyle",
					"autoEscape",
					"caseSensitive",
					"className",
					"findChunks",
					"highlightClassName",
					"highlightStyle",
					"highlightTag",
					"sanitize",
					"searchWords",
					"textToHighlight",
					"unhighlightClassName",
					"unhighlightStyle"
				]), k = (0, o.findAll)({
					autoEscape: d,
					caseSensitive: p,
					findChunks: h,
					sanitize: S,
					searchWords: C,
					textToHighlight: w
				}), A = x, j = -1, M = "", N = void 0, P = (0, l.default)(function(e) {
					var t = {};
					for (var n in e) t[n.toLowerCase()] = e[n];
					return t;
				});
				return (0, c.createElement)("span", r({ className: m }, O, { children: k.map(function(e, t) {
					var r = w.substr(e.start, e.end - e.start);
					if (e.highlight) {
						j++;
						var i = void 0;
						typeof _ == "object" ? p ? i = _[r] : (_ = P(_), i = _[r.toLowerCase()]) : i = _;
						var a = j === +s;
						M = i + " " + (a ? n : ""), N = a === !0 && u != null ? Object.assign({}, y, u) : y;
						var o = {
							children: r,
							className: M,
							key: t,
							style: N
						};
						return typeof A != "string" && (o.highlightIndex = j), (0, c.createElement)(A, o);
					} else return (0, c.createElement)("span", {
						children: r,
						className: E,
						key: t,
						style: D
					});
				}) }));
			}
			e.exports = t.default;
		}),
		(function(e, t) {
			e.exports = (function(e) {
				var t = {};
				function n(r) {
					if (t[r]) return t[r].exports;
					var i = t[r] = {
						exports: {},
						id: r,
						loaded: !1
					};
					return e[r].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports;
				}
				return n.m = e, n.c = t, n.p = "", n(0);
			})([
				(function(e, t, n) {
					e.exports = n(1);
				}),
				(function(e, t, n) {
					Object.defineProperty(t, "__esModule", { value: !0 });
					var r = n(2);
					Object.defineProperty(t, "combineChunks", {
						enumerable: !0,
						get: function() {
							return r.combineChunks;
						}
					}), Object.defineProperty(t, "fillInChunks", {
						enumerable: !0,
						get: function() {
							return r.fillInChunks;
						}
					}), Object.defineProperty(t, "findAll", {
						enumerable: !0,
						get: function() {
							return r.findAll;
						}
					}), Object.defineProperty(t, "findChunks", {
						enumerable: !0,
						get: function() {
							return r.findChunks;
						}
					});
				}),
				(function(e, t) {
					Object.defineProperty(t, "__esModule", { value: !0 }), t.findAll = function(e) {
						var t = e.autoEscape, a = e.caseSensitive, o = a !== void 0 && a, s = e.findChunks, c = s === void 0 ? r : s, l = e.sanitize, u = e.searchWords, d = e.textToHighlight;
						return i({
							chunksToHighlight: n({ chunks: c({
								autoEscape: t,
								caseSensitive: o,
								sanitize: l,
								searchWords: u,
								textToHighlight: d
							}) }),
							totalLength: d ? d.length : 0
						});
					};
					var n = t.combineChunks = function(e) {
						var t = e.chunks;
						return t = t.sort(function(e, t) {
							return e.start - t.start;
						}).reduce(function(e, t) {
							if (e.length === 0) return [t];
							var n = e.pop();
							if (t.start <= n.end) {
								var r = Math.max(n.end, t.end);
								e.push({
									start: n.start,
									end: r
								});
							} else e.push(n, t);
							return e;
						}, []), t;
					}, r = function(e) {
						var t = e.autoEscape, n = e.caseSensitive, r = e.sanitize, i = r === void 0 ? a : r, s = e.searchWords, c = e.textToHighlight;
						return c = i(c), s.filter(function(e) {
							return e;
						}).reduce(function(e, r) {
							r = i(r), t && (r = o(r));
							for (var a = new RegExp(r, n ? "g" : "gi"), s = void 0; s = a.exec(c);) {
								var l = s.index, u = a.lastIndex;
								u > l && e.push({
									start: l,
									end: u
								}), s.index == a.lastIndex && a.lastIndex++;
							}
							return e;
						}, []);
					};
					t.findChunks = r;
					var i = t.fillInChunks = function(e) {
						var t = e.chunksToHighlight, n = e.totalLength, r = [], i = function(e, t, n) {
							t - e > 0 && r.push({
								start: e,
								end: t,
								highlight: n
							});
						};
						if (t.length === 0) i(0, n, !1);
						else {
							var a = 0;
							t.forEach(function(e) {
								i(a, e.start, !1), i(e.start, e.end, !0), a = e.end;
							}), i(a, n, !1);
						}
						return r;
					};
					function a(e) {
						return e;
					}
					function o(e) {
						return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
					}
				})
			]);
		}),
		(function(e, t, n) {
			(function(t) {
				if (t.env.NODE_ENV !== "production") {
					var r = typeof Symbol == "function" && Symbol.for && Symbol.for("react.element") || 60103;
					e.exports = n(6)(function(e) {
						return typeof e == "object" && !!e && e.$$typeof === r;
					}, !0);
				} else e.exports = n(13)();
			}).call(t, n(5));
		}),
		(function(e, t) {
			var n = e.exports = {}, r, i;
			function a() {
				throw Error("setTimeout has not been defined");
			}
			function o() {
				throw Error("clearTimeout has not been defined");
			}
			(function() {
				try {
					r = typeof setTimeout == "function" ? setTimeout : a;
				} catch {
					r = a;
				}
				try {
					i = typeof clearTimeout == "function" ? clearTimeout : o;
				} catch {
					i = o;
				}
			})();
			function s(e) {
				if (r === setTimeout) return setTimeout(e, 0);
				if ((r === a || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
				try {
					return r(e, 0);
				} catch {
					try {
						return r.call(null, e, 0);
					} catch {
						return r.call(this, e, 0);
					}
				}
			}
			function c(e) {
				if (i === clearTimeout) return clearTimeout(e);
				if ((i === o || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
				try {
					return i(e);
				} catch {
					try {
						return i.call(null, e);
					} catch {
						return i.call(this, e);
					}
				}
			}
			var l = [], u = !1, d, f = -1;
			function p() {
				!u || !d || (u = !1, d.length ? l = d.concat(l) : f = -1, l.length && m());
			}
			function m() {
				if (!u) {
					var e = s(p);
					u = !0;
					for (var t = l.length; t;) {
						for (d = l, l = []; ++f < t;) d && d[f].run();
						f = -1, t = l.length;
					}
					d = null, u = !1, c(e);
				}
			}
			n.nextTick = function(e) {
				var t = Array(arguments.length - 1);
				if (arguments.length > 1) for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
				l.push(new h(e, t)), l.length === 1 && !u && s(m);
			};
			function h(e, t) {
				this.fun = e, this.array = t;
			}
			h.prototype.run = function() {
				this.fun.apply(null, this.array);
			}, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {};
			function g() {}
			n.on = g, n.addListener = g, n.once = g, n.off = g, n.removeListener = g, n.removeAllListeners = g, n.emit = g, n.prependListener = g, n.prependOnceListener = g, n.listeners = function(e) {
				return [];
			}, n.binding = function(e) {
				throw Error("process.binding is not supported");
			}, n.cwd = function() {
				return "/";
			}, n.chdir = function(e) {
				throw Error("process.chdir is not supported");
			}, n.umask = function() {
				return 0;
			};
		}),
		(function(e, t, n) {
			(function(t) {
				var r = n(7), i = n(8), a = n(9), o = n(10), s = n(11), c = n(12);
				e.exports = function(e, n) {
					var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
					function d(e) {
						var t = e && (l && e[l] || e[u]);
						if (typeof t == "function") return t;
					}
					var f = "<<anonymous>>", p = {
						array: _("array"),
						bool: _("boolean"),
						func: _("function"),
						number: _("number"),
						object: _("object"),
						string: _("string"),
						symbol: _("symbol"),
						any: v(),
						arrayOf: y,
						element: b(),
						instanceOf: x,
						node: T(),
						objectOf: C,
						oneOf: S,
						oneOfType: w,
						shape: E,
						exact: D
					};
					function m(e, t) {
						return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
					}
					function h(e) {
						this.message = e, this.stack = "";
					}
					h.prototype = Error.prototype;
					function g(e) {
						if (t.env.NODE_ENV !== "production") var r = {}, o = 0;
						function c(c, l, u, d, p, m, g) {
							if (d ||= f, m ||= u, g !== s) {
								if (n) i(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
								else if (t.env.NODE_ENV !== "production" && typeof console < "u") {
									var _ = d + ":" + u;
									!r[_] && o < 3 && (a(!1, "You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.", m, d), r[_] = !0, o++);
								}
							}
							return l[u] == null ? c ? l[u] === null ? new h("The " + p + " `" + m + "` is marked as required " + ("in `" + d + "`, but its value is `null`.")) : new h("The " + p + " `" + m + "` is marked as required in " + ("`" + d + "`, but its value is `undefined`.")) : null : e(l, u, d, p, m);
						}
						var l = c.bind(null, !1);
						return l.isRequired = c.bind(null, !0), l;
					}
					function _(e) {
						function t(t, n, r, i, a, o) {
							var s = t[n];
							if (A(s) !== e) {
								var c = j(s);
								return new h("Invalid " + i + " `" + a + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected ") + ("`" + e + "`."));
							}
							return null;
						}
						return g(t);
					}
					function v() {
						return g(r.thatReturnsNull);
					}
					function y(e) {
						function t(t, n, r, i, a) {
							if (typeof e != "function") return new h("Property `" + a + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
							var o = t[n];
							if (!Array.isArray(o)) {
								var c = A(o);
								return new h("Invalid " + i + " `" + a + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected an array."));
							}
							for (var l = 0; l < o.length; l++) {
								var u = e(o, l, r, i, a + "[" + l + "]", s);
								if (u instanceof Error) return u;
							}
							return null;
						}
						return g(t);
					}
					function b() {
						function t(t, n, r, i, a) {
							var o = t[n];
							if (!e(o)) {
								var s = A(o);
								return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected a single ReactElement."));
							}
							return null;
						}
						return g(t);
					}
					function x(e) {
						function t(t, n, r, i, a) {
							if (!(t[n] instanceof e)) {
								var o = e.name || f, s = N(t[n]);
								return new h("Invalid " + i + " `" + a + "` of type " + ("`" + s + "` supplied to `" + r + "`, expected ") + ("instance of `" + o + "`."));
							}
							return null;
						}
						return g(t);
					}
					function S(e) {
						if (!Array.isArray(e)) return t.env.NODE_ENV !== "production" && a(!1, "Invalid argument supplied to oneOf, expected an instance of array."), r.thatReturnsNull;
						function n(t, n, r, i, a) {
							for (var o = t[n], s = 0; s < e.length; s++) if (m(o, e[s])) return null;
							var c = JSON.stringify(e);
							return new h("Invalid " + i + " `" + a + "` of value `" + o + "` " + ("supplied to `" + r + "`, expected one of " + c + "."));
						}
						return g(n);
					}
					function C(e) {
						function t(t, n, r, i, a) {
							if (typeof e != "function") return new h("Property `" + a + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
							var o = t[n], c = A(o);
							if (c !== "object") return new h("Invalid " + i + " `" + a + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected an object."));
							for (var l in o) if (o.hasOwnProperty(l)) {
								var u = e(o, l, r, i, a + "." + l, s);
								if (u instanceof Error) return u;
							}
							return null;
						}
						return g(t);
					}
					function w(e) {
						if (!Array.isArray(e)) return t.env.NODE_ENV !== "production" && a(!1, "Invalid argument supplied to oneOfType, expected an instance of array."), r.thatReturnsNull;
						for (var n = 0; n < e.length; n++) {
							var i = e[n];
							if (typeof i != "function") return a(!1, "Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.", M(i), n), r.thatReturnsNull;
						}
						function o(t, n, r, i, a) {
							for (var o = 0; o < e.length; o++) {
								var c = e[o];
								if (c(t, n, r, i, a, s) == null) return null;
							}
							return new h("Invalid " + i + " `" + a + "` supplied to " + ("`" + r + "`."));
						}
						return g(o);
					}
					function T() {
						function e(e, t, n, r, i) {
							return O(e[t]) ? null : new h("Invalid " + r + " `" + i + "` supplied to " + ("`" + n + "`, expected a ReactNode."));
						}
						return g(e);
					}
					function E(e) {
						function t(t, n, r, i, a) {
							var o = t[n], c = A(o);
							if (c !== "object") return new h("Invalid " + i + " `" + a + "` of type `" + c + "` " + ("supplied to `" + r + "`, expected `object`."));
							for (var l in e) {
								var u = e[l];
								if (u) {
									var d = u(o, l, r, i, a + "." + l, s);
									if (d) return d;
								}
							}
							return null;
						}
						return g(t);
					}
					function D(e) {
						function t(t, n, r, i, a) {
							var c = t[n], l = A(c);
							if (l !== "object") return new h("Invalid " + i + " `" + a + "` of type `" + l + "` " + ("supplied to `" + r + "`, expected `object`."));
							for (var u in o({}, t[n], e)) {
								var d = e[u];
								if (!d) return new h("Invalid " + i + " `" + a + "` key `" + u + "` supplied to `" + r + "`.\nBad object: " + JSON.stringify(t[n], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
								var f = d(c, u, r, i, a + "." + u, s);
								if (f) return f;
							}
							return null;
						}
						return g(t);
					}
					function O(t) {
						switch (typeof t) {
							case "number":
							case "string":
							case "undefined": return !0;
							case "boolean": return !t;
							case "object":
								if (Array.isArray(t)) return t.every(O);
								if (t === null || e(t)) return !0;
								var n = d(t);
								if (n) {
									var r = n.call(t), i;
									if (n !== t.entries) {
										for (; !(i = r.next()).done;) if (!O(i.value)) return !1;
									} else for (; !(i = r.next()).done;) {
										var a = i.value;
										if (a && !O(a[1])) return !1;
									}
								} else return !1;
								return !0;
							default: return !1;
						}
					}
					function k(e, t) {
						return e === "symbol" || t["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && t instanceof Symbol;
					}
					function A(e) {
						var t = typeof e;
						return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : k(t, e) ? "symbol" : t;
					}
					function j(e) {
						if (e == null) return "" + e;
						var t = A(e);
						if (t === "object") {
							if (e instanceof Date) return "date";
							if (e instanceof RegExp) return "regexp";
						}
						return t;
					}
					function M(e) {
						var t = j(e);
						switch (t) {
							case "array":
							case "object": return "an " + t;
							case "boolean":
							case "date":
							case "regexp": return "a " + t;
							default: return t;
						}
					}
					function N(e) {
						return !e.constructor || !e.constructor.name ? f : e.constructor.name;
					}
					return p.checkPropTypes = c, p.PropTypes = p, p;
				};
			}).call(t, n(5));
		}),
		(function(e, t) {
			function n(e) {
				return function() {
					return e;
				};
			}
			var r = function() {};
			r.thatReturns = n, r.thatReturnsFalse = n(!1), r.thatReturnsTrue = n(!0), r.thatReturnsNull = n(null), r.thatReturnsThis = function() {
				return this;
			}, r.thatReturnsArgument = function(e) {
				return e;
			}, e.exports = r;
		}),
		(function(e, t, n) {
			(function(t) {
				var n = function(e) {};
				t.env.NODE_ENV !== "production" && (n = function(e) {
					if (e === void 0) throw Error("invariant requires an error message argument");
				});
				function r(e, t, r, i, a, o, s, c) {
					if (n(t), !e) {
						var l;
						if (t === void 0) l = /* @__PURE__ */ Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
						else {
							var u = [
								r,
								i,
								a,
								o,
								s,
								c
							], d = 0;
							l = Error(t.replace(/%s/g, function() {
								return u[d++];
							})), l.name = "Invariant Violation";
						}
						throw l.framesToPop = 1, l;
					}
				}
				e.exports = r;
			}).call(t, n(5));
		}),
		(function(e, t, n) {
			(function(t) {
				var r = n(7);
				if (t.env.NODE_ENV !== "production") {
					var i = function(e) {
						var t = [...arguments].slice(1), n = 0, r = "Warning: " + e.replace(/%s/g, function() {
							return t[n++];
						});
						typeof console < "u" && console.error(r);
						try {
							throw Error(r);
						} catch {}
					};
					r = function(e, t) {
						if (t === void 0) throw Error("`warning(condition, format, ...args)` requires a warning message argument");
						if (t.indexOf("Failed Composite propType: ") !== 0 && !e) {
							var n = [...arguments].slice(2);
							i.apply(void 0, [t].concat(n));
						}
					};
				}
				e.exports = r;
			}).call(t, n(5));
		}),
		(function(e, t) {
			var n = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, i = Object.prototype.propertyIsEnumerable;
			function a(e) {
				if (e == null) throw TypeError("Object.assign cannot be called with null or undefined");
				return Object(e);
			}
			function o() {
				try {
					if (!Object.assign) return !1;
					var e = /* @__PURE__ */ new String("abc");
					if (e[5] = "de", Object.getOwnPropertyNames(e)[0] === "5") return !1;
					for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
					if (Object.getOwnPropertyNames(t).map(function(e) {
						return t[e];
					}).join("") !== "0123456789") return !1;
					var r = {};
					return "abcdefghijklmnopqrst".split("").forEach(function(e) {
						r[e] = e;
					}), Object.keys(Object.assign({}, r)).join("") === "abcdefghijklmnopqrst";
				} catch {
					return !1;
				}
			}
			e.exports = o() ? Object.assign : function(e, t) {
				for (var o, s = a(e), c, l = 1; l < arguments.length; l++) {
					for (var u in o = Object(arguments[l]), o) r.call(o, u) && (s[u] = o[u]);
					if (n) {
						c = n(o);
						for (var d = 0; d < c.length; d++) i.call(o, c[d]) && (s[c[d]] = o[c[d]]);
					}
				}
				return s;
			};
		}),
		(function(e, t) {
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
		}),
		(function(e, t, n) {
			(function(t) {
				if (t.env.NODE_ENV !== "production") var r = n(8), i = n(9), a = n(11), o = {};
				function s(e, n, s, c, l) {
					if (t.env.NODE_ENV !== "production") {
						for (var u in e) if (e.hasOwnProperty(u)) {
							var d;
							try {
								r(typeof e[u] == "function", "%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.", c || "React class", s, u, typeof e[u]), d = e[u](n, u, c, s, null, a);
							} catch (e) {
								d = e;
							}
							if (i(!d || d instanceof Error, "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", s, u, typeof d), d instanceof Error && !(d.message in o)) {
								o[d.message] = !0;
								var f = l ? l() : "";
								i(!1, "Failed %s type: %s%s", s, d.message, f ?? "");
							}
						}
					}
				}
				e.exports = s;
			}).call(t, n(5));
		}),
		(function(e, t, n) {
			var r = n(7), i = n(8), a = n(11);
			e.exports = function() {
				function e(e, t, n, r, o, s) {
					s !== a && i(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
				}
				e.isRequired = e;
				function t() {
					return e;
				}
				var n = {
					array: e,
					bool: e,
					func: e,
					number: e,
					object: e,
					string: e,
					symbol: e,
					any: e,
					arrayOf: t,
					element: e,
					instanceOf: t,
					node: e,
					objectOf: t,
					oneOf: t,
					oneOfType: t,
					shape: t,
					exact: t
				};
				return n.checkPropTypes = r, n.PropTypes = n, n;
			};
		}),
		(function(e, t) {
			e.exports = a("react");
		}),
		(function(e, t) {
			var n = function(e, t) {
				return e === t;
			};
			function r(e) {
				var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : n, r = void 0, i = [], a = void 0, o = !1, s = function(e, n) {
					return t(e, i[n]);
				};
				return function() {
					var t = [...arguments];
					return o && r === this && t.length === i.length && t.every(s) ? a : (o = !0, r = this, i = t, a = e.apply(this, t), a);
				};
			}
			e.exports = r;
		})
	]);
})), _ = /* @__PURE__ */ i((() => {})), v = (/* @__PURE__ */ i(((e) => {
	Object.defineProperty(e, "__esModule", { value: !0 }), e.ReactDaDataBox = void 0;
	var t = function() {
		function e(e, t) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n];
				r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
			}
		}
		return function(t, n, r) {
			return n && e(t.prototype, n), r && e(t, r), t;
		};
	}(), n = Object.assign || function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
		}
		return e;
	}, r = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
		return typeof e;
	} : function(e) {
		return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
	}, i = l(a("react")), o = c(h()), s = c(g());
	_();
	function c(e) {
		return e && e.__esModule ? e : { default: e };
	}
	function l(e) {
		if (e && e.__esModule) return e;
		var t = {};
		if (e != null) for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
		return t.default = e, t;
	}
	function u(e, t) {
		if (!(e instanceof t)) throw TypeError("Cannot call a class as a function");
	}
	function d(e, t) {
		if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
		return t && (typeof t == "object" || typeof t == "function") ? t : e;
	}
	function f(e, t) {
		if (typeof t != "function" && t !== null) throw TypeError("Super expression must either be null or a function, not " + typeof t);
		e.prototype = Object.create(t && t.prototype, { constructor: {
			value: e,
			enumerable: !1,
			writable: !0,
			configurable: !0
		} }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
	}
	var p = [
		"г",
		"респ",
		"ул",
		"р-н",
		"село",
		"деревня",
		"поселок",
		"пр-д",
		"пл",
		"к",
		"кв",
		"обл",
		"д"
	], m = {
		data: {},
		unrestricted_value: "",
		value: ""
	}, v = {
		api: "suggestions/api/4_1/rs/suggest",
		host: "https://suggestions.dadata.ru"
	}, y = {
		"react-dadata__custom-action": "react-dadata__suggestion react-dadata__custom-action",
		"react-dadata__suggestion": "react-dadata__suggestion",
		"react-dadata__suggestion-note": "react-dadata__suggestion-note",
		"react-dadata__suggestions": "react-dadata__suggestions"
	}, b = function(e) {
		var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments[2];
		return t[e] && r(t[e]) === "object" ? {
			className: ((y[e] || e) + " " + (n || "")).trim(),
			style: t[e]
		} : { className: ((y[e] || e) + " " + (n || "") + " " + (t[e] || "")).trim() };
	}, x = function(e) {
		return e.endsWith("/") ? e.slice(0, -1) : e;
	}, S = function(e) {
		if (typeof e == "string") {
			if (/^http[s]?:/g.test(e) || e.startsWith("/")) return x(e + "/" + v.api);
		} else if (e instanceof Object) {
			var t = n({}, v, e);
			return x(t.host) + "/" + x(t.api);
		}
		return x(v.host + "/" + v.api);
	}, C = function(e) {
		return e.replace(",", "").split(" ").filter(function(e) {
			return p.indexOf(e) < 0;
		});
	}, w = function() {
		return Math.random().toString(16).slice(2);
	}, T = function(e) {
		var t = e.data, n = t === void 0 ? {} : t, r = e.type;
		return i.createElement("div", { className: "react-dadata__suggestion-info" }, i.createElement("span", null, [r === "party" ? n.inn || null : n.bic || null, n.address && n.address.value || null].join(" ")));
	}, E = function(e) {
		return i.createElement("div", b("react-dadata__suggestion-note", e), i.createElement("span", { className: "suggestion-note_arrow" }, i.createElement("svg", {
			width: "34",
			height: "16",
			viewBox: "0 0 44 21",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg"
		}, i.createElement("path", {
			d: "M25.9 20.1H41.2C42.1 20.1 42.9 19.4 42.9 18.4V3.1C42.9 2.2 42.1 1.4 41.2 1.4H25.9C24.9 1.4 24.2 2.2 24.2 3.1V18.4C24.2 19.4 25 20.1 25.9 20.1Z",
			stroke: "#424242",
			strokeWidth: "1.122",
			strokeMiterlimit: "10"
		}), i.createElement("path", {
			d: "M33.4295 6.62049C33.4295 7.32049 33.4295 8.0205 33.4295 8.7205C33.4295 10.9205 33.4295 13.2205 33.4295 15.5205C33.4295 15.6205 33.4295 15.6205 33.4295 15.7205C33.4295 15.8205 33.5295 15.9205 33.6295 15.9205C33.7295 15.9205 33.8295 15.8205 33.8295 15.7205C33.8295 15.6205 33.8295 15.6205 33.8295 15.5205C33.8295 12.6205 33.8295 9.82049 33.8295 6.92049C33.8295 6.82049 33.8295 6.8205 33.8295 6.7205C33.9295 6.8205 33.9295 6.8205 34.0295 6.8205C34.4295 7.2205 34.9295 7.72049 35.3295 8.12049C35.4295 8.22049 35.5295 8.2205 35.6295 8.2205C35.7295 8.2205 35.8295 8.12049 35.8295 8.02049C35.8295 7.92049 35.8295 7.8205 35.7295 7.7205C35.4295 7.4205 35.1295 7.1205 34.8295 6.8205C34.5295 6.5205 34.2295 6.2205 33.8295 5.8205C33.6295 5.6205 33.5295 5.6205 33.4295 5.8205C32.8295 6.4205 32.2295 7.0205 31.5295 7.7205C31.3295 7.9205 31.4295 8.12049 31.6295 8.12049C31.7295 8.12049 31.8295 8.02049 31.9295 8.02049C32.3295 7.62049 32.8295 7.1205 33.2295 6.7205C33.2295 6.7205 33.3295 6.72049 33.4295 6.62049Z",
			fill: "#424242",
			stroke: "#424242",
			strokeWidth: "0.8",
			strokeMiterlimit: "10"
		}), i.createElement("path", {
			d: "M0.699997 3.1V18.4C0.699997 19.4 1.5 20.1 2.4 20.1H17.7C18.6 20.1 19.4 19.4 19.4 18.4V3.1C19.4 2.1 18.6 1.4 17.7 1.4H2.4C1.4 1.5 0.699997 2.2 0.699997 3.1Z",
			stroke: "#424242",
			strokeWidth: "1.122",
			strokeMiterlimit: "10"
		}), i.createElement("path", {
			d: "M10.3 15C10.3 14.3 10.3 13.6 10.3 12.9C10.3 10.7 10.3 8.4 10.3 6.1C10.3 6 10.3 6 10.3 5.9C10.3 5.8 10.2 5.7 10.1 5.7C9.99999 5.7 9.89999 5.8 9.89999 5.9C9.89999 6 9.89999 6 9.89999 6.1C9.89999 9 9.89999 11.8 9.89999 14.7C9.89999 14.8 9.89999 14.8 9.89999 14.9C9.79999 14.8 9.79999 14.8 9.69999 14.8C9.29999 14.4 8.79999 13.9 8.39999 13.5C8.29999 13.4 8.19999 13.4 8.09999 13.4C7.99999 13.4 7.89999 13.5 7.89999 13.6C7.89999 13.7 7.89999 13.8 7.99999 13.9C8.29999 14.2 8.59999 14.5 8.89999 14.8C9.19999 15.1 9.49999 15.4 9.89999 15.8C10.1 16 10.2 16 10.3 15.8C10.9 15.2 11.5 14.6 12.2 13.9C12.4 13.7 12.3 13.5 12.1 13.5C12 13.5 11.9 13.6 11.8 13.6C11.4 14 10.9 14.5 10.5 14.9C10.4 14.9 10.3 14.9 10.3 15Z",
			fill: "#424242",
			stroke: "#424242",
			strokeWidth: "0.8",
			strokeMiterlimit: "10"
		}))), i.createElement("span", null, "навигация"), i.createElement("span", { className: "suggestion-note_arrow" }, i.createElement("svg", {
			width: "18",
			height: "16",
			viewBox: "0 0 21 21",
			fill: "none",
			xmlns: "http://www.w3.org/2000/svg"
		}, i.createElement("path", {
			d: "M2.9 20.1H18.2C19.1 20.1 19.9 19.4 19.9 18.4V3.09999C19.9 2.19999 19.1 1.39999 18.2 1.39999H2.9C1.9 1.39999 1.2 2.19999 1.2 3.09999V18.4C1.2 19.4 2 20.1 2.9 20.1Z",
			stroke: "#424242",
			strokeWidth: "1.122",
			strokeMiterlimit: "10"
		}), i.createElement("path", {
			d: "M14.8 10.6C14.1 10.6 13.4 10.6 12.7 10.6C10.5 10.6 8.2 10.6 5.9 10.6C5.8 10.6 5.8 10.6 5.7 10.6C5.6 10.6 5.5 10.7 5.5 10.8C5.5 10.9 5.6 11 5.7 11C5.8 11 5.8 11 5.9 11C8.8 11 11.6 11 14.5 11C14.6 11 14.6 11 14.7 11C14.6 11.1 14.6 11.1 14.6 11.2C14.2 11.6 13.7 12.1 13.3 12.5C13.2 12.6 13.2 12.7 13.2 12.8C13.2 12.9 13.3 13 13.4 13C13.5 13 13.6 13 13.7 12.9C14 12.6 14.3 12.3 14.6 12C14.9 11.7 15.2 11.4 15.6 11C15.8 10.8 15.8 10.7 15.6 10.6C15 9.99999 14.4 9.39999 13.7 8.69999C13.5 8.49999 13.3 8.59999 13.3 8.79999C13.3 8.89999 13.4 8.99999 13.4 9.09999C13.8 9.49999 14.3 9.99999 14.7 10.4C14.7 10.4 14.7 10.5 14.8 10.6Z",
			fill: "#424242",
			stroke: "#424242",
			strokeWidth: "0.8",
			strokeMiterlimit: "10"
		}))), i.createElement("span", null, "подстановка"));
	}, D = function(e, t, r) {
		var a = e.customActions, o = e.customStyles, s = e.suggestions;
		if (!a) return [];
		var c = a instanceof Function ? a(s) : a;
		return c = c instanceof Array ? c : c ? [c] : !1, c && c.length ? [i.createElement("hr", {
			key: "custom-actions-line",
			className: "actions-delimiter"
		})].concat(c.map(function(e) {
			return i.createElement("div", n({
				key: w(),
				onMouseDown: t,
				onClick: r
			}, b("react-dadata__custom-action", o)), e);
		})) : !1;
	}, O = function(e) {
		var t = e.actions, r = t === void 0 ? [] : t, a = e.customStyles, o = e.onSuggestionClick, c = e.query, l = e.showNote, u = l === void 0 || l, d = e.suggestionIndex, f = e.suggestions, p = e.type;
		return !!(f.length || r.length) && i.createElement("div", b("react-dadata__suggestions", a), u && i.createElement(E, null), f.map(function(e, t) {
			var r = e.value, l = e.data;
			return i.createElement("div", n({
				key: w(),
				onMouseDown: function() {
					o(t);
				}
			}, b("react-dadata__suggestion", a, t === d && "react-dadata__suggestion--current")), i.createElement(s.default, {
				highlightClassName: "react-dadata--highlighted",
				searchWords: C(c),
				textToHighlight: r,
				autoEscape: !0
			}), (p === "party" || p === "bank") && i.createElement(T, {
				data: l,
				type: p
			}));
		}), r);
	}, k = function(e) {
		f(n, e);
		function n() {
			var e, t, r, i;
			u(this, n);
			var a = [...arguments];
			return i = (t = (r = d(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [this].concat(a))), r), A.call(r), t), d(r, i);
		}
		return t(n, [{
			key: "componentWillUnmount",
			value: function() {
				clearTimeout(this.debounceTimer), this.xhr.abort();
			}
		}, {
			key: "render",
			value: function() {
				var e = this.state, t = e.inputFocused, n = e.query, r = e.showSuggestions, a = e.suggestionIndex, o = e.suggestions, s = e.type, c = this.props, l = c.allowClear, u = c.autocomplete, d = c.className, f = c.customActions, p = c.customInput, m = c.customStyles, h = c.forceOpenList, g = c.placeholder, _ = c.showNote, v = c.style, y = t && r, b = {
					autoComplete: u === "on" && u || "off",
					className: "react-dadata__input" + (l ? " react-dadata__input-clearable" : ""),
					onBlur: this.onInputBlur,
					onChange: this.onInputChange,
					onFocus: this.onInputFocus,
					onKeyDown: this.onKeyPress,
					placeholder: g,
					value: n
				};
				return i.createElement("div", {
					className: "react-dadata react-dadata__container " + d,
					style: v
				}, p(b), l && n && i.createElement("span", {
					className: "react-dadata__input-suffix",
					onClick: this.clear
				}, i.createElement("i", { className: "react-dadata__icon react-dadata__icon-clear" })), (y || h) && i.createElement(O, {
					actions: f && D({
						customActions: f,
						customStyles: m,
						suggestions: o
					}, this.muteEventHandler, this.onInputBlur),
					customStyles: m,
					suggestions: o,
					suggestionIndex: a,
					query: n,
					type: s,
					showNote: _,
					onSuggestionClick: this.onSuggestionClick
				}));
			}
		}]), n;
	}(i.PureComponent);
	k.displayName = "ReactDaDataBox";
	var A = function() {
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
					var t = e.props.silentInit(e.state.suggestions);
					t !== void 0 && typeof t == "number" && t < e.state.suggestions.length && e.selectSuggestion(t);
				}
			});
		}, this.componentDidUpdate = function(t) {
			e.props.query !== t.query && e.setState({ query: e.props.query }, e.fetchSuggestions);
		}, this.onInputFocus = function() {
			!e.state.value && e.props.silentQuery ? e.fetchSuggestions({
				inputFocused: !0,
				showSuggestions: !0
			}) : e.setState({ inputFocused: !0 });
		}, this.onInputBlur = function(t) {
			e.setState({ inputFocused: !1 }), t && e.props.onBlur && (t.preventDefault(), t.stopPropagation(), e.props.onBlur(t, e.state.query));
		}, this.debounce = function(t) {
			var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 350;
			return function() {
				var r = [...arguments];
				e.debounceTimer && clearTimeout(e.debounceTimer), e.debounceTimer = setTimeout(function() {
					t.apply(void 0, r);
				}, n);
			};
		}, this.onInputChange = function(t) {
			var n = t.target.value;
			e.setState({
				query: n,
				showSuggestions: !0
			}, function() {
				e.debounce(e.fetchSuggestions, e.props.debounce)({
					inputFocused: !0,
					showSuggestions: !0
				});
			}), !n && e.clear();
		}, this.onKeyPress = function(t) {
			var n = e.state, r = n.suggestionIndex, i = n.suggestions;
			t.which === 40 && r < i.length - 1 ? e.setState(function(e) {
				return { suggestionIndex: e.suggestionIndex + 1 };
			}) : t.which === 38 && r > 0 ? e.setState(function(e) {
				return { suggestionIndex: e.suggestionIndex - 1 };
			}) : t.which === 39 && r >= 0 ? e.selectSuggestion(e.state.suggestionIndex, !0) : t.which === 13 && r >= 0 && (t.preventDefault(), t.stopPropagation(), e.selectSuggestion(e.state.suggestionIndex));
		}, this.fetchSuggestions = function() {
			var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = arguments[1];
			e.xhr.abort();
			var i = e.state.type, a = e.props, o = a.city, s = a.customEndpoint, c = {
				query: e.state.query || e.props.silentQuery,
				count: e.props.count || 10
			};
			o && i === "address" && (c.from_bound = { value: "city" }, c.to_bound = { value: "settlement" }, c.value = "settlement"), e.props.payloadModifier && (c = e.props.payloadModifier instanceof Function ? e.props.payloadModifier(c) : e.props.payloadModifier instanceof Object ? Object.assign(c, e.props.payloadModifier) : c), e.xhr.open("POST", x(S(s)) + "/" + i), e.xhr.setRequestHeader("Accept", "application/json"), e.xhr.setRequestHeader("Authorization", "Token " + e.props.token), e.xhr.setRequestHeader("Content-Type", "application/json"), e.xhr.send(JSON.stringify(c)), e.xhr.onreadystatechange = function() {
				if (e.xhr.readyState === 4 && e.xhr.status === 200) {
					var i = JSON.parse(e.xhr.response).suggestions, a = t || {};
					i && i.length ? e.setState(n({}, a, {
						suggestions: i,
						suggestionIndex: 0,
						showSuggestions: e.state.inputFocused || a.inputFocused ? !!a.showSuggestions : !1
					}), r) : e.props.onIdleOut && e.props.onIdleOut(e.state.query);
				}
			};
		}, this.onSuggestionClick = function(t) {
			e.state.suggestions[t] && e.selectSuggestion(t);
		}, this.clear = function() {
			e.setState({
				query: "",
				showSuggestions: !1
			}), e.props.onChange && e.props.onChange(m);
		}, this.selectSuggestion = function(t) {
			var n = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], r = e.state.suggestions, i = r[t].value;
			e.setState({
				query: i,
				showSuggestions: n
			}), e.props.onChange && e.props.onChange(r[t]);
		}, this.muteEventHandler = function(e) {
			e.preventDefault(), e.stopPropagation();
		};
	};
	k.propTypes = {
		allowClear: o.default.bool,
		autocomplete: o.default.bool,
		city: o.default.bool,
		className: o.default.string,
		count: o.default.number,
		customActions: o.default.oneOfType([o.default.node, o.default.func]),
		customEndpoint: o.default.oneOfType([
			o.default.object,
			o.default.shape,
			o.default.string
		]),
		customInput: o.default.func,
		customStyles: o.default.object,
		debounce: o.default.number,
		forceOpenList: o.default.bool,
		onChange: o.default.func,
		onBlur: o.default.func,
		onIdleOut: o.default.func,
		payloadModifier: o.default.oneOfType([
			o.default.object,
			o.default.shape,
			o.default.func
		]),
		placeholder: o.default.string,
		query: o.default.string,
		showNote: o.default.bool,
		silentInit: o.default.func,
		silentQuery: o.default.string,
		style: o.default.objectOf(o.default.string),
		token: o.default.string.isRequired,
		type: o.default.string
	}, k.defaultProps = {
		type: "address",
		customInput: function(e) {
			return i.createElement("input", e);
		}
	}, e.ReactDaDataBox = k;
})))(), y = /* @__PURE__ */ i(((e) => {
	var t = Symbol.for("react.transitional.element"), n = Symbol.for("react.fragment");
	function r(e, n, r) {
		var i = null;
		if (r !== void 0 && (i = "" + r), n.key !== void 0 && (i = "" + n.key), "key" in n) for (var a in r = {}, n) a !== "key" && (r[a] = n[a]);
		else r = n;
		return n = r.ref, {
			$$typeof: t,
			type: e,
			key: i,
			ref: n === void 0 ? null : n,
			props: r
		};
	}
	e.Fragment = n, e.jsx = r, e.jsxs = r;
})), b = /* @__PURE__ */ i(((e) => {
	process.env.NODE_ENV !== "production" && (function() {
		function t(e) {
			if (e == null) return null;
			if (typeof e == "function") return e.$$typeof === k ? null : e.displayName || e.name || null;
			if (typeof e == "string") return e;
			switch (e) {
				case v: return "Fragment";
				case b: return "Profiler";
				case y: return "StrictMode";
				case w: return "Suspense";
				case T: return "SuspenseList";
				case O: return "Activity";
			}
			if (typeof e == "object") switch (typeof e.tag == "number" && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), e.$$typeof) {
				case _: return "Portal";
				case S: return e.displayName || "Context";
				case x: return (e._context.displayName || "Context") + ".Consumer";
				case C:
					var n = e.render;
					return e = e.displayName, e ||= (e = n.displayName || n.name || "", e === "" ? "ForwardRef" : "ForwardRef(" + e + ")"), e;
				case E: return n = e.displayName || null, n === null ? t(e.type) || "Memo" : n;
				case D:
					n = e._payload, e = e._init;
					try {
						return t(e(n));
					} catch {}
			}
			return null;
		}
		function n(e) {
			return "" + e;
		}
		function r(e) {
			try {
				n(e);
				var t = !1;
			} catch {
				t = !0;
			}
			if (t) {
				t = console;
				var r = t.error, i = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
				return r.call(t, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", i), n(e);
			}
		}
		function i(e) {
			if (e === v) return "<>";
			if (typeof e == "object" && e && e.$$typeof === D) return "<...>";
			try {
				var n = t(e);
				return n ? "<" + n + ">" : "<...>";
			} catch {
				return "<...>";
			}
		}
		function o() {
			var e = A.A;
			return e === null ? null : e.getOwner();
		}
		function s() {
			return Error("react-stack-top-frame");
		}
		function c(e) {
			if (j.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1;
			}
			return e.key !== void 0;
		}
		function l(e, t) {
			function n() {
				P || (P = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", t));
			}
			n.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: n,
				configurable: !0
			});
		}
		function u() {
			var e = t(this.type);
			return F[e] || (F[e] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")), e = this.props.ref, e === void 0 ? null : e;
		}
		function d(e, t, n, r, i, a) {
			var o = n.ref;
			return e = {
				$$typeof: g,
				type: e,
				key: t,
				props: n,
				_owner: r
			}, (o === void 0 ? null : o) === null ? Object.defineProperty(e, "ref", {
				enumerable: !1,
				value: null
			}) : Object.defineProperty(e, "ref", {
				enumerable: !1,
				get: u
			}), e._store = {}, Object.defineProperty(e._store, "validated", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: 0
			}), Object.defineProperty(e, "_debugInfo", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: null
			}), Object.defineProperty(e, "_debugStack", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: i
			}), Object.defineProperty(e, "_debugTask", {
				configurable: !1,
				enumerable: !1,
				writable: !0,
				value: a
			}), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
		}
		function f(e, n, i, a, s, u) {
			var f = n.children;
			if (f !== void 0) if (a) if (M(f)) {
				for (a = 0; a < f.length; a++) p(f[a]);
				Object.freeze && Object.freeze(f);
			} else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
			else p(f);
			if (j.call(n, "key")) {
				f = t(e);
				var m = Object.keys(n).filter(function(e) {
					return e !== "key";
				});
				a = 0 < m.length ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}", R[f + a] || (m = 0 < m.length ? "{" + m.join(": ..., ") + ": ...}" : "{}", console.error("A props object containing a \"key\" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />", a, f, m, f), R[f + a] = !0);
			}
			if (f = null, i !== void 0 && (r(i), f = "" + i), c(n) && (r(n.key), f = "" + n.key), "key" in n) for (var h in i = {}, n) h !== "key" && (i[h] = n[h]);
			else i = n;
			return f && l(i, typeof e == "function" ? e.displayName || e.name || "Unknown" : e), d(e, f, i, o(), s, u);
		}
		function p(e) {
			m(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e && e.$$typeof === D && (e._payload.status === "fulfilled" ? m(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
		}
		function m(e) {
			return typeof e == "object" && !!e && e.$$typeof === g;
		}
		var h = a("react"), g = Symbol.for("react.transitional.element"), _ = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), S = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), T = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), k = Symbol.for("react.client.reference"), A = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = Object.prototype.hasOwnProperty, M = Array.isArray, N = console.createTask ? console.createTask : function() {
			return null;
		};
		h = { react_stack_bottom_frame: function(e) {
			return e();
		} };
		var P, F = {}, I = h.react_stack_bottom_frame.bind(h, s)(), L = N(i(s)), R = {};
		e.Fragment = v, e.jsx = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !1, r ? Error("react-stack-top-frame") : I, r ? N(i(e)) : L);
		}, e.jsxs = function(e, t, n) {
			var r = 1e4 > A.recentlyCreatedOwnerStacks++;
			return f(e, t, n, !0, r ? Error("react-stack-top-frame") : I, r ? N(i(e)) : L);
		};
	})();
})), x = (/* @__PURE__ */ i(((e, t) => {
	process.env.NODE_ENV === "production" ? t.exports = y() : t.exports = b();
})))(), S = {
	center: [37.588144, 55.733842],
	zoom: 9
}, C = {
	code: "initial-loading",
	type: "info",
	text: "Загружаем варианты доставки...",
	reloadRecommended: !1
}, w = "EShopLogisticDeliveryData", T = ({ DADATA_TOKEN: i, ESHOPLOGISTIC_TOKEN: a, YANDEX_API_KEY: o, orderWeight: s, onDeliveryConfirm: c }) => {
	function l() {
		try {
			let e = localStorage.getItem(w);
			return e ? JSON.parse(e) : {};
		} catch {
			return {};
		}
	}
	let u = l(), [d, f] = r({}), [p, m] = r({}), [h, g] = r(null), [_, y] = r(!1), [b, T] = r(null), [E, D] = r(!1), [O, k] = r(null), [A, j] = r(null), [M, N] = r(u.deliveryRoom || ""), [P, F] = r(u.deliveryName || ""), [I, L] = r(u.deliveryPhone || ""), [R, ee] = r(u.deliveryComment || null), [z, B] = r({}), [te, V] = r({}), [ne, re] = r(!1), [H, U] = r(null), [W, ie] = r(!0), [ae, oe] = r(C), [G, se] = r(!1), [K, ce] = r(!1), le = n(null), q = n(null), J = n(null), ue = n(!1), Y = n(null), X = n(!1), de = n(!1), fe = n(null);
	function Z(e, t, n, r = !1) {
		oe((i) => i?.code === e && i?.type === t && i?.text === n && i?.reloadRecommended === r ? i : {
			code: e,
			type: t,
			text: n,
			reloadRecommended: r
		});
	}
	function Q(e, t, n = !1) {
		Z(e, "error", t, n);
	}
	function $(e = null) {
		oe((t) => !t || e && t.code !== e ? t : null);
	}
	function pe(e) {
		return e == null ? "" : typeof e == "object" ? JSON.stringify(e) : String(e);
	}
	function me(e) {
		let t = e.replace(/\D/g, "").slice(0, 11);
		if (!t.length) return "";
		let n = t;
		return t.length > 4 && (n = `${t.slice(0, 4)} ${t.slice(4)}`), t.length > 7 && (n = `${t.slice(0, 4)} ${t.slice(4, 7)}-${t.slice(7)}`), t.length > 9 && (n = `${t.slice(0, 4)} ${t.slice(4, 7)}-${t.slice(7, 9)}-${t.slice(9)}`), n;
	}
	function he(e) {
		return e?.data ? {
			value: e.value || e.source,
			fias: e.data.city_fias_id || e.data.settlement_fias_id || e.data.region_fias_id,
			lon: Number(e.data.geo_lon),
			lat: Number(e.data.geo_lat)
		} : null;
	}
	let ge = (e) => {
		let t = he(e);
		if (!t) {
			g(null);
			return;
		}
		if ($("invalid-method"), $("map-click-error"), E) {
			let n = {
				address: e.value,
				lon: t.lon,
				lat: t.lat
			};
			X.current = !0, k(n), j(n), g({
				...t,
				value: e.value || t.value
			}), Z("address-selected", "success", "Адрес выбран. Проверьте данные и подтвердите доставку.");
		} else g(t), Z("city-selected", "info", "Город выбран. Загружаем доступные способы доставки...");
	};
	async function _e(e) {
		try {
			let t = await fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address", {
				method: "POST",
				mode: "cors",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
					Authorization: "Token " + i
				},
				body: JSON.stringify({
					query: e,
					count: 1
				})
			});
			if (!t.ok) return console.error("Ошибка получения FIAS по адресу:", t.status, e), null;
			let n = (await t.json()).suggestions?.[0];
			return {
				fias: n?.data?.city_fias_id || n?.data?.settlement_fias_id || n?.data?.region_fias_id || null,
				value: n?.data?.city_with_type || n?.data?.settlement_with_type || n?.data?.region_with_type || n?.value || e,
				country: n.data.country_iso_code,
				city: n.data.city_with_type,
				region: n.data.region_with_type,
				district: n.data.city_district,
				street: n.data.street_with_type,
				house: n.data.house
			};
		} catch (e) {
			return console.error("Ошибка получения FIAS по адресу:", e), null;
		}
	}
	async function ve(e, t) {
		let n = await fetch(`https://geocode-maps.yandex.ru/1.x/?apikey=${o}&geocode=${e},${t}&format=json`);
		if (!n.ok) throw Error("Не удалось определить адрес по точке на карте.");
		return { address: ((await n.json()).response.GeoObjectCollection.featureMember?.[0]?.GeoObject)?.metaDataProperty?.GeocoderMetaData?.text || null };
	}
	async function ye(e) {
		let [t, n] = e;
		try {
			$("map-click-error"), Z("map-click-loading", "info", "Определяем адрес по выбранной точке на карте...");
			let e = (await ve(t, n))?.address;
			if (!e) {
				Q("map-click-error", "Не удалось определить адрес по выбранной точке. Попробуйте выбрать другое место.");
				return;
			}
			let r = await _e(e), i = r?.fias, a = r?.value, o = {
				address: e,
				lon: t,
				lat: n,
				country: r.country,
				city: r.city,
				region: r.region,
				district: r.district,
				street: r.street,
				house: r.house
			};
			X.current = !0, k(o), j(o), g({
				value: a || e,
				fias: i || h?.fias || null,
				lon: t,
				lat: n
			}), Z("address-selected", "success", "Адрес определён. Проверьте его и подтвердите доставку.");
		} catch (e) {
			console.error("Ошибка выбора адреса на карте:", e), Q("map-click-error", "Не удалось получить адрес по точке на карте. Попробуйте ещё раз. Если ошибка повторяется, перезагрузите страницу.", !0);
		}
	}
	function be() {
		Y.current && q.current && (q.current.removeChild(Y.current), Y.current = null);
	}
	function xe(e) {
		if (!q.current || !window.ymaps3 || !e || !de.current) return;
		let { YMapMarker: t } = window.ymaps3;
		be();
		let n = document.createElement("div");
		n.className = "delivery-address-marker", Y.current = new t({
			coordinates: [e.lon, e.lat],
			source: "delivery-address-source"
		}, n), q.current.addChild(Y.current);
	}
	async function Se(e, t = {}, n = !1) {
		let r = e.split("/"), i = r[r.length - 1];
		try {
			let r = await fetch("https://api.esplc.ru" + e, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					key: a,
					...t
				})
			});
			if (V((e) => ({
				...e,
				[n]: !1
			})), !r.ok) return console.error(`Ошибка ${i}: ${r.status}`, t), n && f((e) => ({
				...e,
				[i]: {
					...e[i],
					[n]: {}
				}
			})), Q(`${i}-error`, "Не удалось загрузить часть данных по доставке. Попробуйте выбрать другой способ или перезагрузить страницу.", !0), V((e) => ({
				...e,
				[n]: !0
			})), null;
			let o = await r.json();
			return V((e) => ({
				...e,
				[n]: !0
			})), f(n ? (e) => ({
				...e,
				[i]: {
					...e[i],
					[n]: o
				}
			}) : (e) => ({
				...e,
				[i]: o
			})), o;
		} catch (t) {
			return console.error(`Network error ${e}:`, t), n && f((e) => ({
				...e,
				[i]: {
					...e[i],
					[n]: {}
				}
			})), Q(`${i}-network-error`, "Ошибка сети при загрузке доставки. Проверьте интернет и, если проблема не исчезнет, перезагрузите страницу.", !0), null;
		}
	}
	function Ce(e) {
		let { YMapMarker: t } = window.ymaps3, n = e.properties.terminal, r = document.createElement("img");
		return r.className = "ymap-marker", r.src = n.image, r.onclick = (e) => {
			let t = {
				address: n.address,
				lon: Number(n.lon),
				lat: Number(n.lat)
			};
			T(n), k(t), $("invalid-method"), Z("terminal-selected", "success", "Пункт выдачи выбран. Проверьте данные и подтвердите доставку."), document.querySelectorAll(".ymap-marker").forEach((e) => {
				e.classList.remove("active");
			}), e.currentTarget.classList.add("active");
		}, new t({
			coordinates: e.geometry.coordinates,
			source: "clusterer-source"
		}, r);
	}
	function we(e, t) {
		let { YMapMarker: n } = window.ymaps3, r = document.createElement("div");
		return r.className = "ymap-cluster", r.textContent = t.length, new n({
			coordinates: e,
			source: "clusterer-source"
		}, r);
	}
	function Te(e) {
		return e ? Object.entries(e.data.terminals || {}).map(([e, t]) => ({
			id: `${t.service}-${e}`,
			type: "Feature",
			geometry: {
				type: "Point",
				coordinates: [Number(t.lon), Number(t.lat)]
			},
			properties: {
				terminal: t,
				service: t.service
			}
		})) : [];
	}
	function Ee(e, t, n) {
		document.querySelectorAll(".deliveryMethod").forEach((e) => e.classList.remove("active")), e.currentTarget.classList.add("active");
		let r = A, i = _?.name !== t || _?.type !== n;
		switch (i && (k(null), U(null), c?.(null)), n) {
			case "terminal":
				D(!1), X.current = !1, be(), T(null), Z("terminal-mode", "info", "Выберите удобный пункт выдачи на карте.");
				break;
			case "door":
				D(!0), T(null), X.current = !1, k(!i && r ? r : null), Z("door-mode", "info", "Выберите адрес на карте или введите его в строке поиска.");
				break;
			default: break;
		}
		y({
			name: t,
			type: n
		});
	}
	async function De() {
		if (!_) return;
		let e = {};
		switch (e.service = _.name, e.type = _.type, _.type) {
			case "terminal":
				if (!b) return;
				e.isPostamat = b.is_postamat, e.address = { address: b.address }, e.code = b.code, e.price = b.price.value, e.unitPrice = b.price.unit, e.time = b.time.value, e.unitTime = b.time.unit, e.payment = b.payment.methods;
				break;
			case "door": {
				if (!O) return;
				let t = null;
				if (X.current && (console.error("recalculation"), t = await Se("/delivery/calculation", {
					to: h.fias,
					weight: s,
					service: _.name,
					address: O.address
				}, _.name), !t)) return;
				e.address = O, t ? (e.price = t.data.door.price.value, e.unitPrice = t.data.door.price.unit, e.time = t.data.door.time.value, e.unitTime = t.data.door.time.unit) : (e.price = d.calculation[_.name].data.door.price.value, e.unitPrice = d.calculation[_.name].data.door.price.unit, e.time = d.calculation[_.name].data.door.time.value, e.unitTime = d.calculation[_.name].data.door.time.unit);
				break;
			}
			default: break;
		}
		U(e), Z("delivery-confirmed", "success", "Адрес доставки подтверждён.");
	}
	t(() => {
		ue.current = E;
	}, [E]), t(() => {
		if (!K || !O || !E) return;
		let e = Number(O.lon), t = Number(O.lat);
		q.current && Number.isFinite(e) && Number.isFinite(t) && q.current.setLocation({ center: [e, t] }), xe(O.address);
	}, [
		O,
		K,
		E
	]), t(() => {
		(async () => {
			try {
				ie(!0), $(), Z("initial-loading", "info", "Загружаем варианты доставки..."), await Se("/client/state");
				let e = await fetch("https://api.ipify.org?format=json");
				if (!e.ok) throw Error("Не удалось определить IP адрес.");
				let t = await e.json(), n = await fetch("https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
						Authorization: "Token " + i
					},
					body: JSON.stringify({ ip: t.ip })
				});
				if (!n.ok) throw Error("Не удалось определить город автоматически.");
				let r = await n.json();
				ge(r.location), k(null), j(null);
			} catch (e) {
				console.error("Ошибка начальной загрузки:", e), Q("initial-load-error", "Не удалось полностью загрузить данные доставки. Вы можете попробовать выбрать город вручную. Если ошибка повторяется, перезагрузите страницу.", !0);
			}
		})();
	}, []), t(() => {
		d.state && m(d.state.data.services);
	}, [d.state]), t(() => {
		!h?.fias || !h?.value || !Object.keys(p).length || fe.current !== h.fias && (fe.current = h.fias, Z("calculation-loading", "info", "Рассчитываем стоимость и сроки доставки..."), Object.keys(p).forEach((e) => {
			Se("/delivery/calculation", {
				to: h.fias,
				weight: s,
				service: e,
				address: h.value
			}, e);
		}));
	}, [h, p]), t(() => {
		if (!_ || !d.calculation) return;
		let e = d.calculation[_.name];
		(_.type === "terminal" ? e?.data?.terminal : e?.data?.door) || (document.querySelectorAll(".deliveryMethod").forEach((e) => e.classList.remove("active")), y(!1), T(null), E || be(), Z("invalid-method", "info", "Выбранный способ доставки больше недоступен для текущего адреса. Пожалуйста, выберите другой вариант."));
	}, [
		d.calculation,
		_,
		E
	]), t(() => {
		if (!G || !q.current || !h) return;
		let e = Number(h.lon), t = Number(h.lat);
		!Number.isFinite(e) || !Number.isFinite(t) || G && d.state && q.current.setLocation({ center: [e, t] });
	}, [
		h,
		G,
		d.state
	]), t(() => {
		!G || !K || !d.calculation || !q.current || !window.ymaps3 || !_ || (_.type === "terminal" && (async () => {
			T(null);
			let { YMapClusterer: e, clusterByGrid: t } = await window.ymaps3.import("@yandex/ymaps3-clusterer@0.0.1"), n = d.calculation[_.name];
			if (!n?.data?.terminals) {
				Z("terminal-points-missing", "info", "Для выбранного способа нет точек выдачи. Попробуйте другой вариант доставки.");
				return;
			}
			let r = Te(n);
			J.current &&= (q.current.removeChild(J.current), null), J.current = new e({
				method: t({ gridSize: 128 }),
				features: r,
				marker: Ce,
				cluster: we
			}), q.current.addChild(J.current);
		})(), _.type === "door" && (async () => {
			T(null), J.current &&= (q.current.removeChild(J.current), null);
		})());
	}, [
		G,
		K,
		_,
		d.calculation
	]), t(() => {
		d.state && (ie(!1), Z("state-loaded", "success", "Данные доставки загружены. Выберите подходящий способ."));
	}, [d.state]), t(() => {
		if (W) return;
		ce(!1), de.current = !1;
		let e = !1, t = () => new Promise((e, t) => {
			if (window.ymaps3) {
				e();
				return;
			}
			let n = document.querySelector("script[src^=\"https://api-maps.yandex.ru/v3/\"]");
			if (n) {
				n.addEventListener("load", e, { once: !0 }), n.addEventListener("error", t, { once: !0 });
				return;
			}
			let r = document.createElement("script");
			r.src = `https://api-maps.yandex.ru/v3/?apikey=${o}&lang=ru_RU`, r.async = !0, r.onload = e, r.onerror = t, document.head.appendChild(r);
		});
		return (async () => {
			try {
				if (Z("map-loading", "info", "Загружаем карту..."), await t(), await window.ymaps3.ready, ymaps3.import.registerCdn("https://cdn.jsdelivr.net/npm/{package}", "@yandex/ymaps3-default-ui-theme@latest"), e || !le.current) return;
				let { YMap: n, YMapDefaultSchemeLayer: r, YMapDefaultFeaturesLayer: i, YMapFeatureDataSource: a, YMapLayer: o, YMapListener: s } = window.ymaps3, { YMapControls: c } = window.ymaps3, { YMapZoomControl: l } = await window.ymaps3.import("@yandex/ymaps3-default-ui-theme");
				q.current = new n(le.current, { location: S });
				let u = new c({
					position: "right",
					orientation: "vertical"
				}, [new l({ easing: "linear" })]), d = new s({
					layer: "any",
					onClick: (e, t) => {
						ue.current && ye(t.coordinates);
					}
				});
				q.current.addChild(new r()).addChild(new i()).addChild(new a({ id: "clusterer-source" })).addChild(new o({
					source: "clusterer-source",
					type: "markers",
					zIndex: 1800
				})).addChild(new a({ id: "delivery-address-source" })).addChild(new o({
					source: "delivery-address-source",
					type: "markers",
					zIndex: 1900
				})).addChild(u).addChild(d), de.current = !0, ce(!0), se(!0), Z("map-ready", "success", "Карта загружена. Теперь можно выбрать способ и адрес доставки.");
			} catch (e) {
				console.error("Ошибка загрузки Яндекс.Карт:", e), Q("map-load-error", "Не удалось загрузить карту. Попробуйте перезагрузить страницу. Если карта не нужна, вы всё равно можете выбрать город через поиск.", !0);
			}
		})(), () => {
			e = !0, ce(!1), de.current = !1, Y.current = null, q.current && q.current.destroy();
		};
	}, [W]), t(() => {
		let e = b || E && O;
		if (e) {
			re(e);
			return;
		}
		re(!1);
	}, [
		b,
		E,
		O
	]), t(() => {
		if (U(null), _?.type === "door") {
			if (!X.current || !E || !O) return;
			De(), X.current = !1;
			return;
		}
		_?.type === "terminal" && b && De();
	}, [
		O,
		E,
		_,
		b
	]);
	async function Oe() {
		if (!H) return;
		let e = {};
		H.type === "door" && !M?.trim() && (e.deliveryRoom = !0), P?.trim() || (e.deliveryName = !0);
		let t = (I || "").replace(/\D/g, "");
		if ((!I?.trim() || t.length !== 11) && (e.deliveryPhone = !0), B(e), Object.keys(e).length > 0) {
			Q("delivery-required-fields", "Заполните обязательные поля доставки.");
			return;
		}
		$("delivery-required-fields");
		let n = {
			...H,
			room: M?.trim() || "",
			name: P.trim(),
			phone: I.trim(),
			comment: R,
			checked: !0
		};
		c?.(n);
	}
	return t(() => {
		H && Oe();
	}, [
		H,
		M,
		P,
		I,
		R
	]), t(() => {
		let e = {};
		e.deliveryRoom = !M, e.deliveryName = !P, e.deliveryPhone = !I, B(e);
	}, [
		M,
		P,
		I,
		_
	]), t(() => {
		localStorage.setItem(w, JSON.stringify({
			deliveryRoom: M,
			deliveryName: P,
			deliveryPhone: I,
			deliveryComment: R
		}));
	}, [
		M,
		P,
		I,
		R
	]), /* @__PURE__ */ (0, x.jsxs)("div", {
		className: "EShopLogistic",
		children: [W && /* @__PURE__ */ (0, x.jsx)("div", {
			className: "deliveryLoading",
			children: "Загрузка..."
		}), !W && /* @__PURE__ */ (0, x.jsxs)(x.Fragment, { children: [
			/* @__PURE__ */ (0, x.jsx)(v.ReactDaDataBox, {
				token: i,
				type: "address",
				onChange: ge,
				placeholder: "Введите город / Адрес доставки...",
				query: O?.address || h?.value || ""
			}),
			d.calculation && /* @__PURE__ */ (0, x.jsxs)("div", {
				className: "deliverySettings",
				children: [/* @__PURE__ */ (0, x.jsx)("ul", {
					className: "deliveryCalculation",
					children: Object.entries(d.calculation).map(([t, n]) => /* @__PURE__ */ (0, x.jsxs)(e, { children: [n?.data?.terminal && /* @__PURE__ */ (0, x.jsx)("li", {
						className: "deliveryMethod",
						onClick: (e) => {
							Ee(e, t, "terminal");
						},
						children: /* @__PURE__ */ (0, x.jsxs)("span", { children: [
							d.state.data.services[t].name,
							" до пункта выдачи: ",
							n?.data?.terminal?.price?.value,
							" ",
							n?.data?.terminal?.price?.unit,
							" - ",
							n?.data?.terminal?.time?.value,
							" ",
							n?.data?.terminal?.time?.unit
						] })
					}), n?.data?.door && /* @__PURE__ */ (0, x.jsx)("li", {
						className: "deliveryMethod",
						onClick: (e) => {
							Ee(e, t, "door");
						},
						children: /* @__PURE__ */ (0, x.jsxs)("span", { children: [
							d.state.data.services[t].name,
							" курьером: ",
							n?.data?.door?.price?.value,
							" ",
							n?.data?.door?.price?.unit,
							" - ",
							n?.data?.door?.time?.value,
							" ",
							n?.data?.door?.time?.unit
						] })
					})] }, t))
				}), /* @__PURE__ */ (0, x.jsx)("div", { children: Object.values(te).some((e) => e === !1) && /* @__PURE__ */ (0, x.jsx)("div", { children: "Loading..." }) })]
			}),
			/* @__PURE__ */ (0, x.jsxs)("div", {
				className: "deliveryInfo",
				children: [/* @__PURE__ */ (0, x.jsx)("div", {
					id: "ymap",
					ref: le
				}), /* @__PURE__ */ (0, x.jsxs)("ul", {
					className: "pointInfo",
					children: [b && /* @__PURE__ */ (0, x.jsxs)(x.Fragment, { children: [
						/* @__PURE__ */ (0, x.jsx)("li", { children: /* @__PURE__ */ (0, x.jsx)("img", {
							src: b.image,
							alt: b.service
						}) }),
						/* @__PURE__ */ (0, x.jsx)("li", { children: b.is_postamat ? "Постамат" : "Пункт выдачи" }),
						/* @__PURE__ */ (0, x.jsx)("li", { children: pe(b.address) }),
						/* @__PURE__ */ (0, x.jsx)("li", { children: pe(b.workTime) }),
						/* @__PURE__ */ (0, x.jsxs)("li", { children: ["Номер: ", Array.isArray(b.phones) ? b.phones.join(", ") : pe(b.phones)] }),
						/* @__PURE__ */ (0, x.jsx)("q", { children: pe(b.note) })
					] }), !b && O && _ && p[_.name] && /* @__PURE__ */ (0, x.jsxs)(x.Fragment, { children: [
						/* @__PURE__ */ (0, x.jsx)("li", { children: /* @__PURE__ */ (0, x.jsx)("img", {
							src: p[_.name].logo,
							alt: _.name
						}) }),
						/* @__PURE__ */ (0, x.jsx)("li", { children: p[_.name].name }),
						/* @__PURE__ */ (0, x.jsx)("li", { children: O.address })
					] })]
				})]
			}),
			H && /* @__PURE__ */ (0, x.jsxs)("div", {
				className: "prooveDelivery",
				children: [
					/* @__PURE__ */ (0, x.jsx)("img", {
						src: p[H.service].logo,
						alt: H.service
					}),
					/* @__PURE__ */ (0, x.jsxs)("div", {
						className: "heading",
						children: [
							H.type == "terminal" ? H.isPostamat == 1 ? "Постамат" : "Пункт выдачи" : "Курьер",
							" ",
							p[H.service].name
						]
					}),
					/* @__PURE__ */ (0, x.jsx)("div", {
						className: "address",
						children: H.address.address
					}),
					_.type == "door" && /* @__PURE__ */ (0, x.jsxs)("div", { children: [
						/* @__PURE__ */ (0, x.jsx)("span", {
							className: "red",
							children: "*"
						}),
						"Квартира: ",
						" ",
						/* @__PURE__ */ (0, x.jsx)("input", {
							className: `room ${z.deliveryRoom ? "inputError" : ""}`,
							type: "text",
							placeholder: "№",
							value: M || "",
							onChange: (e) => {
								N(e.target.value), B((e) => ({
									...e,
									deliveryRoom: !1
								}));
							}
						})
					] }),
					/* @__PURE__ */ (0, x.jsxs)("div", { children: [
						/* @__PURE__ */ (0, x.jsx)("span", {
							className: "red",
							children: "*"
						}),
						"Имя: ",
						" ",
						/* @__PURE__ */ (0, x.jsx)("input", {
							className: `name ${z.deliveryName ? "inputError" : ""}`,
							type: "text",
							placeholder: "Сайтама",
							value: P || "",
							onChange: (e) => {
								F(e.target.value), B((e) => ({
									...e,
									deliveryName: !1
								}));
							}
						})
					] }),
					/* @__PURE__ */ (0, x.jsxs)("div", { children: [
						/* @__PURE__ */ (0, x.jsx)("span", {
							className: "red",
							children: "*"
						}),
						"Телефон: ",
						" ",
						/* @__PURE__ */ (0, x.jsx)("input", {
							className: `phone ${z.deliveryPhone ? "inputError" : ""}`,
							type: "text",
							inputMode: "tel",
							placeholder: "+7 (900) 800-70-60",
							value: I || "",
							onChange: (e) => {
								L(me(e.target.value)), B((e) => ({
									...e,
									deliveryPhone: !1
								}));
							}
						})
					] }),
					/* @__PURE__ */ (0, x.jsxs)("div", { children: ["Комментарий:", /* @__PURE__ */ (0, x.jsx)("input", {
						className: "comment",
						type: "text",
						value: R || "",
						onChange: (e) => ee(e.target.value),
						placeholder: "Комментарий к доставке (укажите особенности адреса)"
					})] }),
					/* @__PURE__ */ (0, x.jsx)("div", {
						className: "time",
						children: H.time + " " + H.unitTime
					}),
					/* @__PURE__ */ (0, x.jsx)("div", {
						className: "price",
						children: H.price + " " + H.unitPrice
					})
				]
			}),
			ae?.text && /* @__PURE__ */ (0, x.jsxs)("div", {
				className: `deliveryStatus deliveryStatus--${ae.type}`,
				children: [/* @__PURE__ */ (0, x.jsx)("div", { children: ae.text }), ae.reloadRecommended && /* @__PURE__ */ (0, x.jsx)("div", {
					className: "deliveryStatusHint",
					children: "Если проблема повторяется, попробуйте перезагрузить страницу."
				})]
			})
		] })]
	});
};
//#endregion
//#region createOrder.js
async function E(e, t, n, r, i = {}) {
	if (!e) throw Error("ESHOPLOGISTIC_TOKEN is required to create an EShopLogistic delivery order.");
	let a = r.pick_up == 1 ? {
		pick_up: r.pick_up,
		address: r.address
	} : { pick_up: r.pick_up }, o = t.type == "terminal" ? { terminal: t.code } : { address: {
		country: t.address.country,
		region: t.address.region,
		city: t.address.city,
		district: t.address.district,
		street: t.address.street,
		house: t.address.house,
		room: t.room
	} }, s = {
		id: n.id,
		comment: t.comment
	}, c;
	switch (t.service) {
		case "sdek":
			s.type = n.type, n.combine_places_apply == 1 && (s.combine_places = {}, s.combine_places.apply = !0, s.combine_places.weight = n.total_weight, s.combine_places.dimensions = n.dimensions), t.type == "terminal" ? c = 136 : t.type == "door" && (c = 137);
			break;
		default: break;
	}
	let l = {
		key: e,
		action: "create",
		cms: "custom",
		service: t.service,
		order: s,
		sender: {
			name: r.senderName,
			phone: r.senderPhone,
			company: r.senderCompany
		},
		receiver: {
			name: t.name,
			phone: t.phone
		},
		places: n.places,
		delivery: {
			type: t.type,
			tariff: c,
			location_from: a,
			location_to: o,
			payment: n.payment,
			cost: t.price
		}
	}, u = await fetch("https://api.esplc.ru/delivery/order", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(l)
	});
	if (!u.ok) throw Error(`EShopLogistic order creation failed with status ${u.status}`);
	return await u.json();
}
//#endregion
export { T as EShopLogistic, E as createOrder };
