(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const i of l)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(l) {
    const i = {};
    return (
      l.integrity && (i.integrity = l.integrity),
      l.referrerPolicy && (i.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const i = t(l);
    fetch(l.href, i);
  }
})();
var Wu = { exports: {} },
  el = {},
  Qu = { exports: {} },
  L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Xt = Symbol.for("react.element"),
  ic = Symbol.for("react.portal"),
  oc = Symbol.for("react.fragment"),
  uc = Symbol.for("react.strict_mode"),
  sc = Symbol.for("react.profiler"),
  ac = Symbol.for("react.provider"),
  cc = Symbol.for("react.context"),
  fc = Symbol.for("react.forward_ref"),
  dc = Symbol.for("react.suspense"),
  pc = Symbol.for("react.memo"),
  mc = Symbol.for("react.lazy"),
  Do = Symbol.iterator;
function hc(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Do && e[Do]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Ku = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Yu = Object.assign,
  Xu = {};
function lt(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = Xu),
    (this.updater = t || Ku);
}
lt.prototype.isReactComponent = {};
lt.prototype.setState = function (e, n) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, n, "setState");
};
lt.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Gu() {}
Gu.prototype = lt.prototype;
function $i(e, n, t) {
  (this.props = e),
    (this.context = n),
    (this.refs = Xu),
    (this.updater = t || Ku);
}
var Hi = ($i.prototype = new Gu());
Hi.constructor = $i;
Yu(Hi, lt.prototype);
Hi.isPureReactComponent = !0;
var Io = Array.isArray,
  Zu = Object.prototype.hasOwnProperty,
  Ai = { current: null },
  Ju = { key: !0, ref: !0, __self: !0, __source: !0 };
function qu(e, n, t) {
  var r,
    l = {},
    i = null,
    o = null;
  if (n != null)
    for (r in (n.ref !== void 0 && (o = n.ref),
    n.key !== void 0 && (i = "" + n.key),
    n))
      Zu.call(n, r) && !Ju.hasOwnProperty(r) && (l[r] = n[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = t;
  else if (1 < u) {
    for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Xt,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Ai.current,
  };
}
function vc(e, n) {
  return {
    $$typeof: Xt,
    type: e.type,
    key: n,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Bi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Xt;
}
function gc(e) {
  var n = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (t) {
      return n[t];
    })
  );
}
var Fo = /\/+/g;
function wl(e, n) {
  return typeof e == "object" && e !== null && e.key != null
    ? gc("" + e.key)
    : n.toString(36);
}
function yr(e, n, t, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Xt:
          case ic:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (l = l(o)),
      (e = r === "" ? "." + wl(o, 0) : r),
      Io(l)
        ? ((t = ""),
          e != null && (t = e.replace(Fo, "$&/") + "/"),
          yr(l, n, t, "", function (f) {
            return f;
          }))
        : l != null &&
          (Bi(l) &&
            (l = vc(
              l,
              t +
                (!l.key || (o && o.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Fo, "$&/") + "/") +
                e
            )),
          n.push(l)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Io(e)))
    for (var u = 0; u < e.length; u++) {
      i = e[u];
      var s = r + wl(i, u);
      o += yr(i, n, t, s, l);
    }
  else if (((s = hc(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + wl(i, u++)), (o += yr(i, n, t, s, l));
  else if (i === "object")
    throw (
      ((n = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (n === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : n) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function nr(e, n, t) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    yr(e, r, "", "", function (i) {
      return n.call(t, i, l++);
    }),
    r
  );
}
function yc(e) {
  if (e._status === -1) {
    var n = e._result;
    (n = n()),
      n.then(
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = t));
        },
        function (t) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = t));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = n));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var ue = { current: null },
  wr = { transition: null },
  wc = {
    ReactCurrentDispatcher: ue,
    ReactCurrentBatchConfig: wr,
    ReactCurrentOwner: Ai,
  };
L.Children = {
  map: nr,
  forEach: function (e, n, t) {
    nr(
      e,
      function () {
        n.apply(this, arguments);
      },
      t
    );
  },
  count: function (e) {
    var n = 0;
    return (
      nr(e, function () {
        n++;
      }),
      n
    );
  },
  toArray: function (e) {
    return (
      nr(e, function (n) {
        return n;
      }) || []
    );
  },
  only: function (e) {
    if (!Bi(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
L.Component = lt;
L.Fragment = oc;
L.Profiler = sc;
L.PureComponent = $i;
L.StrictMode = uc;
L.Suspense = dc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = wc;
L.cloneElement = function (e, n, t) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Yu({}, e.props),
    l = e.key,
    i = e.ref,
    o = e._owner;
  if (n != null) {
    if (
      (n.ref !== void 0 && ((i = n.ref), (o = Ai.current)),
      n.key !== void 0 && (l = "" + n.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in n)
      Zu.call(n, s) &&
        !Ju.hasOwnProperty(s) &&
        (r[s] = n[s] === void 0 && u !== void 0 ? u[s] : n[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = t;
  else if (1 < s) {
    u = Array(s);
    for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: Xt, type: e.type, key: l, ref: i, props: r, _owner: o };
};
L.createContext = function (e) {
  return (
    (e = {
      $$typeof: cc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: ac, _context: e }),
    (e.Consumer = e)
  );
};
L.createElement = qu;
L.createFactory = function (e) {
  var n = qu.bind(null, e);
  return (n.type = e), n;
};
L.createRef = function () {
  return { current: null };
};
L.forwardRef = function (e) {
  return { $$typeof: fc, render: e };
};
L.isValidElement = Bi;
L.lazy = function (e) {
  return { $$typeof: mc, _payload: { _status: -1, _result: e }, _init: yc };
};
L.memo = function (e, n) {
  return { $$typeof: pc, type: e, compare: n === void 0 ? null : n };
};
L.startTransition = function (e) {
  var n = wr.transition;
  wr.transition = {};
  try {
    e();
  } finally {
    wr.transition = n;
  }
};
L.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
L.useCallback = function (e, n) {
  return ue.current.useCallback(e, n);
};
L.useContext = function (e) {
  return ue.current.useContext(e);
};
L.useDebugValue = function () {};
L.useDeferredValue = function (e) {
  return ue.current.useDeferredValue(e);
};
L.useEffect = function (e, n) {
  return ue.current.useEffect(e, n);
};
L.useId = function () {
  return ue.current.useId();
};
L.useImperativeHandle = function (e, n, t) {
  return ue.current.useImperativeHandle(e, n, t);
};
L.useInsertionEffect = function (e, n) {
  return ue.current.useInsertionEffect(e, n);
};
L.useLayoutEffect = function (e, n) {
  return ue.current.useLayoutEffect(e, n);
};
L.useMemo = function (e, n) {
  return ue.current.useMemo(e, n);
};
L.useReducer = function (e, n, t) {
  return ue.current.useReducer(e, n, t);
};
L.useRef = function (e) {
  return ue.current.useRef(e);
};
L.useState = function (e) {
  return ue.current.useState(e);
};
L.useSyncExternalStore = function (e, n, t) {
  return ue.current.useSyncExternalStore(e, n, t);
};
L.useTransition = function () {
  return ue.current.useTransition();
};
L.version = "18.2.0";
Qu.exports = L;
var bu = Qu.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sc = bu,
  xc = Symbol.for("react.element"),
  kc = Symbol.for("react.fragment"),
  Cc = Object.prototype.hasOwnProperty,
  Ec = Sc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  _c = { key: !0, ref: !0, __self: !0, __source: !0 };
function es(e, n, t) {
  var r,
    l = {},
    i = null,
    o = null;
  t !== void 0 && (i = "" + t),
    n.key !== void 0 && (i = "" + n.key),
    n.ref !== void 0 && (o = n.ref);
  for (r in n) Cc.call(n, r) && !_c.hasOwnProperty(r) && (l[r] = n[r]);
  if (e && e.defaultProps)
    for (r in ((n = e.defaultProps), n)) l[r] === void 0 && (l[r] = n[r]);
  return {
    $$typeof: xc,
    type: e,
    key: i,
    ref: o,
    props: l,
    _owner: Ec.current,
  };
}
el.Fragment = kc;
el.jsx = es;
el.jsxs = es;
Wu.exports = el;
var c = Wu.exports,
  Kl = {},
  ns = { exports: {} },
  ye = {},
  ts = { exports: {} },
  rs = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function n(E, P) {
    var z = E.length;
    E.push(P);
    e: for (; 0 < z; ) {
      var W = (z - 1) >>> 1,
        G = E[W];
      if (0 < l(G, P)) (E[W] = P), (E[z] = G), (z = W);
      else break e;
    }
  }
  function t(E) {
    return E.length === 0 ? null : E[0];
  }
  function r(E) {
    if (E.length === 0) return null;
    var P = E[0],
      z = E.pop();
    if (z !== P) {
      E[0] = z;
      e: for (var W = 0, G = E.length, bt = G >>> 1; W < bt; ) {
        var vn = 2 * (W + 1) - 1,
          yl = E[vn],
          gn = vn + 1,
          er = E[gn];
        if (0 > l(yl, z))
          gn < G && 0 > l(er, yl)
            ? ((E[W] = er), (E[gn] = z), (W = gn))
            : ((E[W] = yl), (E[vn] = z), (W = vn));
        else if (gn < G && 0 > l(er, z)) (E[W] = er), (E[gn] = z), (W = gn);
        else break e;
      }
    }
    return P;
  }
  function l(E, P) {
    var z = E.sortIndex - P.sortIndex;
    return z !== 0 ? z : E.id - P.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      u = o.now();
    e.unstable_now = function () {
      return o.now() - u;
    };
  }
  var s = [],
    f = [],
    v = 1,
    h = null,
    m = 3,
    w = !1,
    S = !1,
    x = !1,
    F = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function p(E) {
    for (var P = t(f); P !== null; ) {
      if (P.callback === null) r(f);
      else if (P.startTime <= E)
        r(f), (P.sortIndex = P.expirationTime), n(s, P);
      else break;
      P = t(f);
    }
  }
  function g(E) {
    if (((x = !1), p(E), !S))
      if (t(s) !== null) (S = !0), vl(C);
      else {
        var P = t(f);
        P !== null && gl(g, P.startTime - E);
      }
  }
  function C(E, P) {
    (S = !1), x && ((x = !1), d(j), (j = -1)), (w = !0);
    var z = m;
    try {
      for (
        p(P), h = t(s);
        h !== null && (!(h.expirationTime > P) || (E && !Ne()));

      ) {
        var W = h.callback;
        if (typeof W == "function") {
          (h.callback = null), (m = h.priorityLevel);
          var G = W(h.expirationTime <= P);
          (P = e.unstable_now()),
            typeof G == "function" ? (h.callback = G) : h === t(s) && r(s),
            p(P);
        } else r(s);
        h = t(s);
      }
      if (h !== null) var bt = !0;
      else {
        var vn = t(f);
        vn !== null && gl(g, vn.startTime - P), (bt = !1);
      }
      return bt;
    } finally {
      (h = null), (m = z), (w = !1);
    }
  }
  var _ = !1,
    N = null,
    j = -1,
    V = 5,
    T = -1;
  function Ne() {
    return !(e.unstable_now() - T < V);
  }
  function ut() {
    if (N !== null) {
      var E = e.unstable_now();
      T = E;
      var P = !0;
      try {
        P = N(!0, E);
      } finally {
        P ? st() : ((_ = !1), (N = null));
      }
    } else _ = !1;
  }
  var st;
  if (typeof a == "function")
    st = function () {
      a(ut);
    };
  else if (typeof MessageChannel < "u") {
    var Mo = new MessageChannel(),
      lc = Mo.port2;
    (Mo.port1.onmessage = ut),
      (st = function () {
        lc.postMessage(null);
      });
  } else
    st = function () {
      F(ut, 0);
    };
  function vl(E) {
    (N = E), _ || ((_ = !0), st());
  }
  function gl(E, P) {
    j = F(function () {
      E(e.unstable_now());
    }, P);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (E) {
      E.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || w || ((S = !0), vl(C));
    }),
    (e.unstable_forceFrameRate = function (E) {
      0 > E || 125 < E
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (V = 0 < E ? Math.floor(1e3 / E) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return t(s);
    }),
    (e.unstable_next = function (E) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = m;
      }
      var z = m;
      m = P;
      try {
        return E();
      } finally {
        m = z;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (E, P) {
      switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          E = 3;
      }
      var z = m;
      m = E;
      try {
        return P();
      } finally {
        m = z;
      }
    }),
    (e.unstable_scheduleCallback = function (E, P, z) {
      var W = e.unstable_now();
      switch (
        (typeof z == "object" && z !== null
          ? ((z = z.delay), (z = typeof z == "number" && 0 < z ? W + z : W))
          : (z = W),
        E)
      ) {
        case 1:
          var G = -1;
          break;
        case 2:
          G = 250;
          break;
        case 5:
          G = 1073741823;
          break;
        case 4:
          G = 1e4;
          break;
        default:
          G = 5e3;
      }
      return (
        (G = z + G),
        (E = {
          id: v++,
          callback: P,
          priorityLevel: E,
          startTime: z,
          expirationTime: G,
          sortIndex: -1,
        }),
        z > W
          ? ((E.sortIndex = z),
            n(f, E),
            t(s) === null &&
              E === t(f) &&
              (x ? (d(j), (j = -1)) : (x = !0), gl(g, z - W)))
          : ((E.sortIndex = G), n(s, E), S || w || ((S = !0), vl(C))),
        E
      );
    }),
    (e.unstable_shouldYield = Ne),
    (e.unstable_wrapCallback = function (E) {
      var P = m;
      return function () {
        var z = m;
        m = P;
        try {
          return E.apply(this, arguments);
        } finally {
          m = z;
        }
      };
    });
})(rs);
ts.exports = rs;
var Nc = ts.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ls = bu,
  ge = Nc;
function y(e) {
  for (
    var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1;
    t < arguments.length;
    t++
  )
    n += "&args[]=" + encodeURIComponent(arguments[t]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    n +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var is = new Set(),
  Lt = {};
function Ln(e, n) {
  Jn(e, n), Jn(e + "Capture", n);
}
function Jn(e, n) {
  for (Lt[e] = n, e = 0; e < n.length; e++) is.add(n[e]);
}
var We = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Yl = Object.prototype.hasOwnProperty,
  jc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Uo = {},
  $o = {};
function Pc(e) {
  return Yl.call($o, e)
    ? !0
    : Yl.call(Uo, e)
    ? !1
    : jc.test(e)
    ? ($o[e] = !0)
    : ((Uo[e] = !0), !1);
}
function zc(e, n, t, r) {
  if (t !== null && t.type === 0) return !1;
  switch (typeof n) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : t !== null
        ? !t.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Lc(e, n, t, r) {
  if (n === null || typeof n > "u" || zc(e, n, t, r)) return !0;
  if (r) return !1;
  if (t !== null)
    switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
  return !1;
}
function se(e, n, t, r, l, i, o) {
  (this.acceptsBooleans = n === 2 || n === 3 || n === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = t),
    (this.propertyName = e),
    (this.type = n),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var n = e[0];
  ee[n] = new se(n, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ee[e] = new se(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new se(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ee[e] = new se(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ee[e] = new se(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ee[e] = new se(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ee[e] = new se(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Vi = /[\-:]([a-z])/g;
function Wi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Vi, Wi);
    ee[n] = new se(n, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var n = e.replace(Vi, Wi);
    ee[n] = new se(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var n = e.replace(Vi, Wi);
  ee[n] = new se(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new se(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ee[e] = new se(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Qi(e, n, t, r) {
  var l = ee.hasOwnProperty(n) ? ee[n] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < n.length) ||
      (n[0] !== "o" && n[0] !== "O") ||
      (n[1] !== "n" && n[1] !== "N")) &&
    (Lc(n, t, l, r) && (t = null),
    r || l === null
      ? Pc(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t))
      : l.mustUseProperty
      ? (e[l.propertyName] = t === null ? (l.type === 3 ? !1 : "") : t)
      : ((n = l.attributeName),
        (r = l.attributeNamespace),
        t === null
          ? e.removeAttribute(n)
          : ((l = l.type),
            (t = l === 3 || (l === 4 && t === !0) ? "" : "" + t),
            r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
}
var Xe = ls.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  tr = Symbol.for("react.element"),
  On = Symbol.for("react.portal"),
  Mn = Symbol.for("react.fragment"),
  Ki = Symbol.for("react.strict_mode"),
  Xl = Symbol.for("react.profiler"),
  os = Symbol.for("react.provider"),
  us = Symbol.for("react.context"),
  Yi = Symbol.for("react.forward_ref"),
  Gl = Symbol.for("react.suspense"),
  Zl = Symbol.for("react.suspense_list"),
  Xi = Symbol.for("react.memo"),
  Ze = Symbol.for("react.lazy"),
  ss = Symbol.for("react.offscreen"),
  Ho = Symbol.iterator;
function at(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ho && e[Ho]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var A = Object.assign,
  Sl;
function gt(e) {
  if (Sl === void 0)
    try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      Sl = (n && n[1]) || "";
    }
  return (
    `
` +
    Sl +
    e
  );
}
var xl = !1;
function kl(e, n) {
  if (!e || xl) return "";
  xl = !0;
  var t = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (n)
      if (
        ((n = function () {
          throw Error();
        }),
        Object.defineProperty(n.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(n, []);
        } catch (f) {
          var r = f;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (f) {
          r = f;
        }
        e.call(n.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (
        var l = f.stack.split(`
`),
          i = r.stack.split(`
`),
          o = l.length - 1,
          u = i.length - 1;
        1 <= o && 0 <= u && l[o] !== i[u];

      )
        u--;
      for (; 1 <= o && 0 <= u; o--, u--)
        if (l[o] !== i[u]) {
          if (o !== 1 || u !== 1)
            do
              if ((o--, u--, 0 > u || l[o] !== i[u])) {
                var s =
                  `
` + l[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= u);
          break;
        }
    }
  } finally {
    (xl = !1), (Error.prepareStackTrace = t);
  }
  return (e = e ? e.displayName || e.name : "") ? gt(e) : "";
}
function Tc(e) {
  switch (e.tag) {
    case 5:
      return gt(e.type);
    case 16:
      return gt("Lazy");
    case 13:
      return gt("Suspense");
    case 19:
      return gt("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = kl(e.type, !1)), e;
    case 11:
      return (e = kl(e.type.render, !1)), e;
    case 1:
      return (e = kl(e.type, !0)), e;
    default:
      return "";
  }
}
function Jl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mn:
      return "Fragment";
    case On:
      return "Portal";
    case Xl:
      return "Profiler";
    case Ki:
      return "StrictMode";
    case Gl:
      return "Suspense";
    case Zl:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case us:
        return (e.displayName || "Context") + ".Consumer";
      case os:
        return (e._context.displayName || "Context") + ".Provider";
      case Yi:
        var n = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = n.displayName || n.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Xi:
        return (
          (n = e.displayName || null), n !== null ? n : Jl(e.type) || "Memo"
        );
      case Ze:
        (n = e._payload), (e = e._init);
        try {
          return Jl(e(n));
        } catch {}
    }
  return null;
}
function Rc(e) {
  var n = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (n.displayName || "Context") + ".Consumer";
    case 10:
      return (n._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = n.render),
        (e = e.displayName || e.name || ""),
        n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return n;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Jl(n);
    case 8:
      return n === Ki ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof n == "function") return n.displayName || n.name || null;
      if (typeof n == "string") return n;
  }
  return null;
}
function fn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function as(e) {
  var n = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (n === "checkbox" || n === "radio")
  );
}
function Oc(e) {
  var n = as(e) ? "checked" : "value",
    t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
    r = "" + e[n];
  if (
    !e.hasOwnProperty(n) &&
    typeof t < "u" &&
    typeof t.get == "function" &&
    typeof t.set == "function"
  ) {
    var l = t.get,
      i = t.set;
    return (
      Object.defineProperty(e, n, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, n, { enumerable: t.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[n];
        },
      }
    );
  }
}
function rr(e) {
  e._valueTracker || (e._valueTracker = Oc(e));
}
function cs(e) {
  if (!e) return !1;
  var n = e._valueTracker;
  if (!n) return !0;
  var t = n.getValue(),
    r = "";
  return (
    e && (r = as(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== t ? (n.setValue(e), !0) : !1
  );
}
function Lr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ql(e, n) {
  var t = n.checked;
  return A({}, n, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: t ?? e._wrapperState.initialChecked,
  });
}
function Ao(e, n) {
  var t = n.defaultValue == null ? "" : n.defaultValue,
    r = n.checked != null ? n.checked : n.defaultChecked;
  (t = fn(n.value != null ? n.value : t)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: t,
      controlled:
        n.type === "checkbox" || n.type === "radio"
          ? n.checked != null
          : n.value != null,
    });
}
function fs(e, n) {
  (n = n.checked), n != null && Qi(e, "checked", n, !1);
}
function bl(e, n) {
  fs(e, n);
  var t = fn(n.value),
    r = n.type;
  if (t != null)
    r === "number"
      ? ((t === 0 && e.value === "") || e.value != t) && (e.value = "" + t)
      : e.value !== "" + t && (e.value = "" + t);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  n.hasOwnProperty("value")
    ? ei(e, n.type, t)
    : n.hasOwnProperty("defaultValue") && ei(e, n.type, fn(n.defaultValue)),
    n.checked == null &&
      n.defaultChecked != null &&
      (e.defaultChecked = !!n.defaultChecked);
}
function Bo(e, n, t) {
  if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
    var r = n.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (n.value !== void 0 && n.value !== null)
      )
    )
      return;
    (n = "" + e._wrapperState.initialValue),
      t || n === e.value || (e.value = n),
      (e.defaultValue = n);
  }
  (t = e.name),
    t !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    t !== "" && (e.name = t);
}
function ei(e, n, t) {
  (n !== "number" || Lr(e.ownerDocument) !== e) &&
    (t == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
}
var yt = Array.isArray;
function Qn(e, n, t, r) {
  if (((e = e.options), n)) {
    n = {};
    for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
    for (t = 0; t < e.length; t++)
      (l = n.hasOwnProperty("$" + e[t].value)),
        e[t].selected !== l && (e[t].selected = l),
        l && r && (e[t].defaultSelected = !0);
  } else {
    for (t = "" + fn(t), n = null, l = 0; l < e.length; l++) {
      if (e[l].value === t) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      n !== null || e[l].disabled || (n = e[l]);
    }
    n !== null && (n.selected = !0);
  }
}
function ni(e, n) {
  if (n.dangerouslySetInnerHTML != null) throw Error(y(91));
  return A({}, n, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Vo(e, n) {
  var t = n.value;
  if (t == null) {
    if (((t = n.children), (n = n.defaultValue), t != null)) {
      if (n != null) throw Error(y(92));
      if (yt(t)) {
        if (1 < t.length) throw Error(y(93));
        t = t[0];
      }
      n = t;
    }
    n == null && (n = ""), (t = n);
  }
  e._wrapperState = { initialValue: fn(t) };
}
function ds(e, n) {
  var t = fn(n.value),
    r = fn(n.defaultValue);
  t != null &&
    ((t = "" + t),
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    r != null && (e.defaultValue = "" + r);
}
function Wo(e) {
  var n = e.textContent;
  n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
}
function ps(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ti(e, n) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? ps(n)
    : e === "http://www.w3.org/2000/svg" && n === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var lr,
  ms = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (n, t, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(n, t, r, l);
          });
        }
      : e;
  })(function (e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (
        lr = lr || document.createElement("div"),
          lr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
          n = lr.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
function Tt(e, n) {
  if (n) {
    var t = e.firstChild;
    if (t && t === e.lastChild && t.nodeType === 3) {
      t.nodeValue = n;
      return;
    }
  }
  e.textContent = n;
}
var xt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Mc = ["Webkit", "ms", "Moz", "O"];
Object.keys(xt).forEach(function (e) {
  Mc.forEach(function (n) {
    (n = n + e.charAt(0).toUpperCase() + e.substring(1)), (xt[n] = xt[e]);
  });
});
function hs(e, n, t) {
  return n == null || typeof n == "boolean" || n === ""
    ? ""
    : t || typeof n != "number" || n === 0 || (xt.hasOwnProperty(e) && xt[e])
    ? ("" + n).trim()
    : n + "px";
}
function vs(e, n) {
  e = e.style;
  for (var t in n)
    if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0,
        l = hs(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : (e[t] = l);
    }
}
var Dc = A(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function ri(e, n) {
  if (n) {
    if (Dc[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (n.dangerouslySetInnerHTML != null) {
      if (n.children != null) throw Error(y(60));
      if (
        typeof n.dangerouslySetInnerHTML != "object" ||
        !("__html" in n.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (n.style != null && typeof n.style != "object") throw Error(y(62));
  }
}
function li(e, n) {
  if (e.indexOf("-") === -1) return typeof n.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var ii = null;
function Gi(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var oi = null,
  Kn = null,
  Yn = null;
function Qo(e) {
  if ((e = Jt(e))) {
    if (typeof oi != "function") throw Error(y(280));
    var n = e.stateNode;
    n && ((n = il(n)), oi(e.stateNode, e.type, n));
  }
}
function gs(e) {
  Kn ? (Yn ? Yn.push(e) : (Yn = [e])) : (Kn = e);
}
function ys() {
  if (Kn) {
    var e = Kn,
      n = Yn;
    if (((Yn = Kn = null), Qo(e), n)) for (e = 0; e < n.length; e++) Qo(n[e]);
  }
}
function ws(e, n) {
  return e(n);
}
function Ss() {}
var Cl = !1;
function xs(e, n, t) {
  if (Cl) return e(n, t);
  Cl = !0;
  try {
    return ws(e, n, t);
  } finally {
    (Cl = !1), (Kn !== null || Yn !== null) && (Ss(), ys());
  }
}
function Rt(e, n) {
  var t = e.stateNode;
  if (t === null) return null;
  var r = il(t);
  if (r === null) return null;
  t = r[n];
  e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (t && typeof t != "function") throw Error(y(231, n, typeof t));
  return t;
}
var ui = !1;
if (We)
  try {
    var ct = {};
    Object.defineProperty(ct, "passive", {
      get: function () {
        ui = !0;
      },
    }),
      window.addEventListener("test", ct, ct),
      window.removeEventListener("test", ct, ct);
  } catch {
    ui = !1;
  }
function Ic(e, n, t, r, l, i, o, u, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    n.apply(t, f);
  } catch (v) {
    this.onError(v);
  }
}
var kt = !1,
  Tr = null,
  Rr = !1,
  si = null,
  Fc = {
    onError: function (e) {
      (kt = !0), (Tr = e);
    },
  };
function Uc(e, n, t, r, l, i, o, u, s) {
  (kt = !1), (Tr = null), Ic.apply(Fc, arguments);
}
function $c(e, n, t, r, l, i, o, u, s) {
  if ((Uc.apply(this, arguments), kt)) {
    if (kt) {
      var f = Tr;
      (kt = !1), (Tr = null);
    } else throw Error(y(198));
    Rr || ((Rr = !0), (si = f));
  }
}
function Tn(e) {
  var n = e,
    t = e;
  if (e.alternate) for (; n.return; ) n = n.return;
  else {
    e = n;
    do (n = e), n.flags & 4098 && (t = n.return), (e = n.return);
    while (e);
  }
  return n.tag === 3 ? t : null;
}
function ks(e) {
  if (e.tag === 13) {
    var n = e.memoizedState;
    if (
      (n === null && ((e = e.alternate), e !== null && (n = e.memoizedState)),
      n !== null)
    )
      return n.dehydrated;
  }
  return null;
}
function Ko(e) {
  if (Tn(e) !== e) throw Error(y(188));
}
function Hc(e) {
  var n = e.alternate;
  if (!n) {
    if (((n = Tn(e)), n === null)) throw Error(y(188));
    return n !== e ? null : e;
  }
  for (var t = e, r = n; ; ) {
    var l = t.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (((r = l.return), r !== null)) {
        t = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === t) return Ko(l), e;
        if (i === r) return Ko(l), n;
        i = i.sibling;
      }
      throw Error(y(188));
    }
    if (t.return !== r.return) (t = l), (r = i);
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === t) {
          (o = !0), (t = l), (r = i);
          break;
        }
        if (u === r) {
          (o = !0), (r = l), (t = i);
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === t) {
            (o = !0), (t = i), (r = l);
            break;
          }
          if (u === r) {
            (o = !0), (r = i), (t = l);
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(y(189));
      }
    }
    if (t.alternate !== r) throw Error(y(190));
  }
  if (t.tag !== 3) throw Error(y(188));
  return t.stateNode.current === t ? e : n;
}
function Cs(e) {
  return (e = Hc(e)), e !== null ? Es(e) : null;
}
function Es(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var n = Es(e);
    if (n !== null) return n;
    e = e.sibling;
  }
  return null;
}
var _s = ge.unstable_scheduleCallback,
  Yo = ge.unstable_cancelCallback,
  Ac = ge.unstable_shouldYield,
  Bc = ge.unstable_requestPaint,
  Q = ge.unstable_now,
  Vc = ge.unstable_getCurrentPriorityLevel,
  Zi = ge.unstable_ImmediatePriority,
  Ns = ge.unstable_UserBlockingPriority,
  Or = ge.unstable_NormalPriority,
  Wc = ge.unstable_LowPriority,
  js = ge.unstable_IdlePriority,
  nl = null,
  Fe = null;
function Qc(e) {
  if (Fe && typeof Fe.onCommitFiberRoot == "function")
    try {
      Fe.onCommitFiberRoot(nl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Te = Math.clz32 ? Math.clz32 : Xc,
  Kc = Math.log,
  Yc = Math.LN2;
function Xc(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Kc(e) / Yc) | 0)) | 0;
}
var ir = 64,
  or = 4194304;
function wt(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Mr(e, n) {
  var t = e.pendingLanes;
  if (t === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    i = e.pingedLanes,
    o = t & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? (r = wt(u)) : ((i &= o), i !== 0 && (r = wt(i)));
  } else (o = t & ~l), o !== 0 ? (r = wt(o)) : i !== 0 && (r = wt(i));
  if (r === 0) return 0;
  if (
    n !== 0 &&
    n !== r &&
    !(n & l) &&
    ((l = r & -r), (i = n & -n), l >= i || (l === 16 && (i & 4194240) !== 0))
  )
    return n;
  if ((r & 4 && (r |= t & 16), (n = e.entangledLanes), n !== 0))
    for (e = e.entanglements, n &= r; 0 < n; )
      (t = 31 - Te(n)), (l = 1 << t), (r |= e[t]), (n &= ~l);
  return r;
}
function Gc(e, n) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Zc(e, n) {
  for (
    var t = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - Te(i),
      u = 1 << o,
      s = l[o];
    s === -1
      ? (!(u & t) || u & r) && (l[o] = Gc(u, n))
      : s <= n && (e.expiredLanes |= u),
      (i &= ~u);
  }
}
function ai(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ps() {
  var e = ir;
  return (ir <<= 1), !(ir & 4194240) && (ir = 64), e;
}
function El(e) {
  for (var n = [], t = 0; 31 > t; t++) n.push(e);
  return n;
}
function Gt(e, n, t) {
  (e.pendingLanes |= n),
    n !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (n = 31 - Te(n)),
    (e[n] = t);
}
function Jc(e, n) {
  var t = e.pendingLanes & ~n;
  (e.pendingLanes = n),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= n),
    (e.mutableReadLanes &= n),
    (e.entangledLanes &= n),
    (n = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < t; ) {
    var l = 31 - Te(t),
      i = 1 << l;
    (n[l] = 0), (r[l] = -1), (e[l] = -1), (t &= ~i);
  }
}
function Ji(e, n) {
  var t = (e.entangledLanes |= n);
  for (e = e.entanglements; t; ) {
    var r = 31 - Te(t),
      l = 1 << r;
    (l & n) | (e[r] & n) && (e[r] |= n), (t &= ~l);
  }
}
var O = 0;
function zs(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Ls,
  qi,
  Ts,
  Rs,
  Os,
  ci = !1,
  ur = [],
  tn = null,
  rn = null,
  ln = null,
  Ot = new Map(),
  Mt = new Map(),
  qe = [],
  qc =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Xo(e, n) {
  switch (e) {
    case "focusin":
    case "focusout":
      tn = null;
      break;
    case "dragenter":
    case "dragleave":
      rn = null;
      break;
    case "mouseover":
    case "mouseout":
      ln = null;
      break;
    case "pointerover":
    case "pointerout":
      Ot.delete(n.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Mt.delete(n.pointerId);
  }
}
function ft(e, n, t, r, l, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [l],
      }),
      n !== null && ((n = Jt(n)), n !== null && qi(n)),
      e)
    : ((e.eventSystemFlags |= r),
      (n = e.targetContainers),
      l !== null && n.indexOf(l) === -1 && n.push(l),
      e);
}
function bc(e, n, t, r, l) {
  switch (n) {
    case "focusin":
      return (tn = ft(tn, e, n, t, r, l)), !0;
    case "dragenter":
      return (rn = ft(rn, e, n, t, r, l)), !0;
    case "mouseover":
      return (ln = ft(ln, e, n, t, r, l)), !0;
    case "pointerover":
      var i = l.pointerId;
      return Ot.set(i, ft(Ot.get(i) || null, e, n, t, r, l)), !0;
    case "gotpointercapture":
      return (
        (i = l.pointerId), Mt.set(i, ft(Mt.get(i) || null, e, n, t, r, l)), !0
      );
  }
  return !1;
}
function Ms(e) {
  var n = Sn(e.target);
  if (n !== null) {
    var t = Tn(n);
    if (t !== null) {
      if (((n = t.tag), n === 13)) {
        if (((n = ks(t)), n !== null)) {
          (e.blockedOn = n),
            Os(e.priority, function () {
              Ts(t);
            });
          return;
        }
      } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Sr(e) {
  if (e.blockedOn !== null) return !1;
  for (var n = e.targetContainers; 0 < n.length; ) {
    var t = fi(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
    if (t === null) {
      t = e.nativeEvent;
      var r = new t.constructor(t.type, t);
      (ii = r), t.target.dispatchEvent(r), (ii = null);
    } else return (n = Jt(t)), n !== null && qi(n), (e.blockedOn = t), !1;
    n.shift();
  }
  return !0;
}
function Go(e, n, t) {
  Sr(e) && t.delete(n);
}
function ef() {
  (ci = !1),
    tn !== null && Sr(tn) && (tn = null),
    rn !== null && Sr(rn) && (rn = null),
    ln !== null && Sr(ln) && (ln = null),
    Ot.forEach(Go),
    Mt.forEach(Go);
}
function dt(e, n) {
  e.blockedOn === n &&
    ((e.blockedOn = null),
    ci ||
      ((ci = !0),
      ge.unstable_scheduleCallback(ge.unstable_NormalPriority, ef)));
}
function Dt(e) {
  function n(l) {
    return dt(l, e);
  }
  if (0 < ur.length) {
    dt(ur[0], e);
    for (var t = 1; t < ur.length; t++) {
      var r = ur[t];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    tn !== null && dt(tn, e),
      rn !== null && dt(rn, e),
      ln !== null && dt(ln, e),
      Ot.forEach(n),
      Mt.forEach(n),
      t = 0;
    t < qe.length;
    t++
  )
    (r = qe[t]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < qe.length && ((t = qe[0]), t.blockedOn === null); )
    Ms(t), t.blockedOn === null && qe.shift();
}
var Xn = Xe.ReactCurrentBatchConfig,
  Dr = !0;
function nf(e, n, t, r) {
  var l = O,
    i = Xn.transition;
  Xn.transition = null;
  try {
    (O = 1), bi(e, n, t, r);
  } finally {
    (O = l), (Xn.transition = i);
  }
}
function tf(e, n, t, r) {
  var l = O,
    i = Xn.transition;
  Xn.transition = null;
  try {
    (O = 4), bi(e, n, t, r);
  } finally {
    (O = l), (Xn.transition = i);
  }
}
function bi(e, n, t, r) {
  if (Dr) {
    var l = fi(e, n, t, r);
    if (l === null) Ml(e, n, r, Ir, t), Xo(e, r);
    else if (bc(l, e, n, t, r)) r.stopPropagation();
    else if ((Xo(e, r), n & 4 && -1 < qc.indexOf(e))) {
      for (; l !== null; ) {
        var i = Jt(l);
        if (
          (i !== null && Ls(i),
          (i = fi(e, n, t, r)),
          i === null && Ml(e, n, r, Ir, t),
          i === l)
        )
          break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Ml(e, n, r, null, t);
  }
}
var Ir = null;
function fi(e, n, t, r) {
  if (((Ir = null), (e = Gi(r)), (e = Sn(e)), e !== null))
    if (((n = Tn(e)), n === null)) e = null;
    else if (((t = n.tag), t === 13)) {
      if (((e = ks(n)), e !== null)) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated)
        return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
  return (Ir = e), null;
}
function Ds(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Vc()) {
        case Zi:
          return 1;
        case Ns:
          return 4;
        case Or:
        case Wc:
          return 16;
        case js:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var en = null,
  eo = null,
  xr = null;
function Is() {
  if (xr) return xr;
  var e,
    n = eo,
    t = n.length,
    r,
    l = "value" in en ? en.value : en.textContent,
    i = l.length;
  for (e = 0; e < t && n[e] === l[e]; e++);
  var o = t - e;
  for (r = 1; r <= o && n[t - r] === l[i - r]; r++);
  return (xr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function kr(e) {
  var n = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && n === 13 && (e = 13))
      : (e = n),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function sr() {
  return !0;
}
function Zo() {
  return !1;
}
function we(e) {
  function n(t, r, l, i, o) {
    (this._reactName = t),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((t = e[u]), (this[u] = t ? t(i) : i[u]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? sr
        : Zo),
      (this.isPropagationStopped = Zo),
      this
    );
  }
  return (
    A(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var t = this.nativeEvent;
        t &&
          (t.preventDefault
            ? t.preventDefault()
            : typeof t.returnValue != "unknown" && (t.returnValue = !1),
          (this.isDefaultPrevented = sr));
      },
      stopPropagation: function () {
        var t = this.nativeEvent;
        t &&
          (t.stopPropagation
            ? t.stopPropagation()
            : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
          (this.isPropagationStopped = sr));
      },
      persist: function () {},
      isPersistent: sr,
    }),
    n
  );
}
var it = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  no = we(it),
  Zt = A({}, it, { view: 0, detail: 0 }),
  rf = we(Zt),
  _l,
  Nl,
  pt,
  tl = A({}, Zt, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: to,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== pt &&
            (pt && e.type === "mousemove"
              ? ((_l = e.screenX - pt.screenX), (Nl = e.screenY - pt.screenY))
              : (Nl = _l = 0),
            (pt = e)),
          _l);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Nl;
    },
  }),
  Jo = we(tl),
  lf = A({}, tl, { dataTransfer: 0 }),
  of = we(lf),
  uf = A({}, Zt, { relatedTarget: 0 }),
  jl = we(uf),
  sf = A({}, it, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  af = we(sf),
  cf = A({}, it, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ff = we(cf),
  df = A({}, it, { data: 0 }),
  qo = we(df),
  pf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  mf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  hf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function vf(e) {
  var n = this.nativeEvent;
  return n.getModifierState ? n.getModifierState(e) : (e = hf[e]) ? !!n[e] : !1;
}
function to() {
  return vf;
}
var gf = A({}, Zt, {
    key: function (e) {
      if (e.key) {
        var n = pf[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress"
        ? ((e = kr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? mf[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: to,
    charCode: function (e) {
      return e.type === "keypress" ? kr(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? kr(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  yf = we(gf),
  wf = A({}, tl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  bo = we(wf),
  Sf = A({}, Zt, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: to,
  }),
  xf = we(Sf),
  kf = A({}, it, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Cf = we(kf),
  Ef = A({}, tl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  _f = we(Ef),
  Nf = [9, 13, 27, 32],
  ro = We && "CompositionEvent" in window,
  Ct = null;
We && "documentMode" in document && (Ct = document.documentMode);
var jf = We && "TextEvent" in window && !Ct,
  Fs = We && (!ro || (Ct && 8 < Ct && 11 >= Ct)),
  eu = " ",
  nu = !1;
function Us(e, n) {
  switch (e) {
    case "keyup":
      return Nf.indexOf(n.keyCode) !== -1;
    case "keydown":
      return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function $s(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Dn = !1;
function Pf(e, n) {
  switch (e) {
    case "compositionend":
      return $s(n);
    case "keypress":
      return n.which !== 32 ? null : ((nu = !0), eu);
    case "textInput":
      return (e = n.data), e === eu && nu ? null : e;
    default:
      return null;
  }
}
function zf(e, n) {
  if (Dn)
    return e === "compositionend" || (!ro && Us(e, n))
      ? ((e = Is()), (xr = eo = en = null), (Dn = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(n.ctrlKey || n.altKey || n.metaKey) || (n.ctrlKey && n.altKey)) {
        if (n.char && 1 < n.char.length) return n.char;
        if (n.which) return String.fromCharCode(n.which);
      }
      return null;
    case "compositionend":
      return Fs && n.locale !== "ko" ? null : n.data;
    default:
      return null;
  }
}
var Lf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function tu(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return n === "input" ? !!Lf[e.type] : n === "textarea";
}
function Hs(e, n, t, r) {
  gs(r),
    (n = Fr(n, "onChange")),
    0 < n.length &&
      ((t = new no("onChange", "change", null, t, r)),
      e.push({ event: t, listeners: n }));
}
var Et = null,
  It = null;
function Tf(e) {
  Js(e, 0);
}
function rl(e) {
  var n = Un(e);
  if (cs(n)) return e;
}
function Rf(e, n) {
  if (e === "change") return n;
}
var As = !1;
if (We) {
  var Pl;
  if (We) {
    var zl = "oninput" in document;
    if (!zl) {
      var ru = document.createElement("div");
      ru.setAttribute("oninput", "return;"),
        (zl = typeof ru.oninput == "function");
    }
    Pl = zl;
  } else Pl = !1;
  As = Pl && (!document.documentMode || 9 < document.documentMode);
}
function lu() {
  Et && (Et.detachEvent("onpropertychange", Bs), (It = Et = null));
}
function Bs(e) {
  if (e.propertyName === "value" && rl(It)) {
    var n = [];
    Hs(n, It, e, Gi(e)), xs(Tf, n);
  }
}
function Of(e, n, t) {
  e === "focusin"
    ? (lu(), (Et = n), (It = t), Et.attachEvent("onpropertychange", Bs))
    : e === "focusout" && lu();
}
function Mf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return rl(It);
}
function Df(e, n) {
  if (e === "click") return rl(n);
}
function If(e, n) {
  if (e === "input" || e === "change") return rl(n);
}
function Ff(e, n) {
  return (e === n && (e !== 0 || 1 / e === 1 / n)) || (e !== e && n !== n);
}
var Oe = typeof Object.is == "function" ? Object.is : Ff;
function Ft(e, n) {
  if (Oe(e, n)) return !0;
  if (typeof e != "object" || e === null || typeof n != "object" || n === null)
    return !1;
  var t = Object.keys(e),
    r = Object.keys(n);
  if (t.length !== r.length) return !1;
  for (r = 0; r < t.length; r++) {
    var l = t[r];
    if (!Yl.call(n, l) || !Oe(e[l], n[l])) return !1;
  }
  return !0;
}
function iu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ou(e, n) {
  var t = iu(e);
  e = 0;
  for (var r; t; ) {
    if (t.nodeType === 3) {
      if (((r = e + t.textContent.length), e <= n && r >= n))
        return { node: t, offset: n - e };
      e = r;
    }
    e: {
      for (; t; ) {
        if (t.nextSibling) {
          t = t.nextSibling;
          break e;
        }
        t = t.parentNode;
      }
      t = void 0;
    }
    t = iu(t);
  }
}
function Vs(e, n) {
  return e && n
    ? e === n
      ? !0
      : e && e.nodeType === 3
      ? !1
      : n && n.nodeType === 3
      ? Vs(e, n.parentNode)
      : "contains" in e
      ? e.contains(n)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(n) & 16)
      : !1
    : !1;
}
function Ws() {
  for (var e = window, n = Lr(); n instanceof e.HTMLIFrameElement; ) {
    try {
      var t = typeof n.contentWindow.location.href == "string";
    } catch {
      t = !1;
    }
    if (t) e = n.contentWindow;
    else break;
    n = Lr(e.document);
  }
  return n;
}
function lo(e) {
  var n = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    n &&
    ((n === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      n === "textarea" ||
      e.contentEditable === "true")
  );
}
function Uf(e) {
  var n = Ws(),
    t = e.focusedElem,
    r = e.selectionRange;
  if (
    n !== t &&
    t &&
    t.ownerDocument &&
    Vs(t.ownerDocument.documentElement, t)
  ) {
    if (r !== null && lo(t)) {
      if (
        ((n = r.start),
        (e = r.end),
        e === void 0 && (e = n),
        "selectionStart" in t)
      )
        (t.selectionStart = n), (t.selectionEnd = Math.min(e, t.value.length));
      else if (
        ((e = ((n = t.ownerDocument || document) && n.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = t.textContent.length,
          i = Math.min(r.start, l);
        (r = r.end === void 0 ? i : Math.min(r.end, l)),
          !e.extend && i > r && ((l = r), (r = i), (i = l)),
          (l = ou(t, i));
        var o = ou(t, r);
        l &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((n = n.createRange()),
          n.setStart(l.node, l.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(n), e.extend(o.node, o.offset))
            : (n.setEnd(o.node, o.offset), e.addRange(n)));
      }
    }
    for (n = [], e = t; (e = e.parentNode); )
      e.nodeType === 1 &&
        n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
      (e = n[t]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var $f = We && "documentMode" in document && 11 >= document.documentMode,
  In = null,
  di = null,
  _t = null,
  pi = !1;
function uu(e, n, t) {
  var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
  pi ||
    In == null ||
    In !== Lr(r) ||
    ((r = In),
    "selectionStart" in r && lo(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (_t && Ft(_t, r)) ||
      ((_t = r),
      (r = Fr(di, "onSelect")),
      0 < r.length &&
        ((n = new no("onSelect", "select", null, n, t)),
        e.push({ event: n, listeners: r }),
        (n.target = In))));
}
function ar(e, n) {
  var t = {};
  return (
    (t[e.toLowerCase()] = n.toLowerCase()),
    (t["Webkit" + e] = "webkit" + n),
    (t["Moz" + e] = "moz" + n),
    t
  );
}
var Fn = {
    animationend: ar("Animation", "AnimationEnd"),
    animationiteration: ar("Animation", "AnimationIteration"),
    animationstart: ar("Animation", "AnimationStart"),
    transitionend: ar("Transition", "TransitionEnd"),
  },
  Ll = {},
  Qs = {};
We &&
  ((Qs = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Fn.animationend.animation,
    delete Fn.animationiteration.animation,
    delete Fn.animationstart.animation),
  "TransitionEvent" in window || delete Fn.transitionend.transition);
function ll(e) {
  if (Ll[e]) return Ll[e];
  if (!Fn[e]) return e;
  var n = Fn[e],
    t;
  for (t in n) if (n.hasOwnProperty(t) && t in Qs) return (Ll[e] = n[t]);
  return e;
}
var Ks = ll("animationend"),
  Ys = ll("animationiteration"),
  Xs = ll("animationstart"),
  Gs = ll("transitionend"),
  Zs = new Map(),
  su =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function pn(e, n) {
  Zs.set(e, n), Ln(n, [e]);
}
for (var Tl = 0; Tl < su.length; Tl++) {
  var Rl = su[Tl],
    Hf = Rl.toLowerCase(),
    Af = Rl[0].toUpperCase() + Rl.slice(1);
  pn(Hf, "on" + Af);
}
pn(Ks, "onAnimationEnd");
pn(Ys, "onAnimationIteration");
pn(Xs, "onAnimationStart");
pn("dblclick", "onDoubleClick");
pn("focusin", "onFocus");
pn("focusout", "onBlur");
pn(Gs, "onTransitionEnd");
Jn("onMouseEnter", ["mouseout", "mouseover"]);
Jn("onMouseLeave", ["mouseout", "mouseover"]);
Jn("onPointerEnter", ["pointerout", "pointerover"]);
Jn("onPointerLeave", ["pointerout", "pointerover"]);
Ln(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Ln(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Ln("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ln(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Ln(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Ln(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var St =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Bf = new Set("cancel close invalid load scroll toggle".split(" ").concat(St));
function au(e, n, t) {
  var r = e.type || "unknown-event";
  (e.currentTarget = t), $c(r, n, void 0, e), (e.currentTarget = null);
}
function Js(e, n) {
  n = (n & 4) !== 0;
  for (var t = 0; t < e.length; t++) {
    var r = e[t],
      l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (n)
        for (var o = r.length - 1; 0 <= o; o--) {
          var u = r[o],
            s = u.instance,
            f = u.currentTarget;
          if (((u = u.listener), s !== i && l.isPropagationStopped())) break e;
          au(l, u, f), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((u = r[o]),
            (s = u.instance),
            (f = u.currentTarget),
            (u = u.listener),
            s !== i && l.isPropagationStopped())
          )
            break e;
          au(l, u, f), (i = s);
        }
    }
  }
  if (Rr) throw ((e = si), (Rr = !1), (si = null), e);
}
function D(e, n) {
  var t = n[yi];
  t === void 0 && (t = n[yi] = new Set());
  var r = e + "__bubble";
  t.has(r) || (qs(n, e, 2, !1), t.add(r));
}
function Ol(e, n, t) {
  var r = 0;
  n && (r |= 4), qs(t, e, r, n);
}
var cr = "_reactListening" + Math.random().toString(36).slice(2);
function Ut(e) {
  if (!e[cr]) {
    (e[cr] = !0),
      is.forEach(function (t) {
        t !== "selectionchange" && (Bf.has(t) || Ol(t, !1, e), Ol(t, !0, e));
      });
    var n = e.nodeType === 9 ? e : e.ownerDocument;
    n === null || n[cr] || ((n[cr] = !0), Ol("selectionchange", !1, n));
  }
}
function qs(e, n, t, r) {
  switch (Ds(n)) {
    case 1:
      var l = nf;
      break;
    case 4:
      l = tf;
      break;
    default:
      l = bi;
  }
  (t = l.bind(null, n, t, e)),
    (l = void 0),
    !ui ||
      (n !== "touchstart" && n !== "touchmove" && n !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(n, t, { capture: !0, passive: l })
        : e.addEventListener(n, t, !0)
      : l !== void 0
      ? e.addEventListener(n, t, { passive: l })
      : e.addEventListener(n, t, !1);
}
function Ml(e, n, t, r, l) {
  var i = r;
  if (!(n & 1) && !(n & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            o = o.return;
          }
        for (; u !== null; ) {
          if (((o = Sn(u)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  xs(function () {
    var f = i,
      v = Gi(t),
      h = [];
    e: {
      var m = Zs.get(e);
      if (m !== void 0) {
        var w = no,
          S = e;
        switch (e) {
          case "keypress":
            if (kr(t) === 0) break e;
          case "keydown":
          case "keyup":
            w = yf;
            break;
          case "focusin":
            (S = "focus"), (w = jl);
            break;
          case "focusout":
            (S = "blur"), (w = jl);
            break;
          case "beforeblur":
          case "afterblur":
            w = jl;
            break;
          case "click":
            if (t.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            w = Jo;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = of;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = xf;
            break;
          case Ks:
          case Ys:
          case Xs:
            w = af;
            break;
          case Gs:
            w = Cf;
            break;
          case "scroll":
            w = rf;
            break;
          case "wheel":
            w = _f;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = ff;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = bo;
        }
        var x = (n & 4) !== 0,
          F = !x && e === "scroll",
          d = x ? (m !== null ? m + "Capture" : null) : m;
        x = [];
        for (var a = f, p; a !== null; ) {
          p = a;
          var g = p.stateNode;
          if (
            (p.tag === 5 &&
              g !== null &&
              ((p = g),
              d !== null && ((g = Rt(a, d)), g != null && x.push($t(a, g, p)))),
            F)
          )
            break;
          a = a.return;
        }
        0 < x.length &&
          ((m = new w(m, S, null, t, v)), h.push({ event: m, listeners: x }));
      }
    }
    if (!(n & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (w = e === "mouseout" || e === "pointerout"),
          m &&
            t !== ii &&
            (S = t.relatedTarget || t.fromElement) &&
            (Sn(S) || S[Qe]))
        )
          break e;
        if (
          (w || m) &&
          ((m =
            v.window === v
              ? v
              : (m = v.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          w
            ? ((S = t.relatedTarget || t.toElement),
              (w = f),
              (S = S ? Sn(S) : null),
              S !== null &&
                ((F = Tn(S)), S !== F || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((w = null), (S = f)),
          w !== S)
        ) {
          if (
            ((x = Jo),
            (g = "onMouseLeave"),
            (d = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = bo),
              (g = "onPointerLeave"),
              (d = "onPointerEnter"),
              (a = "pointer")),
            (F = w == null ? m : Un(w)),
            (p = S == null ? m : Un(S)),
            (m = new x(g, a + "leave", w, t, v)),
            (m.target = F),
            (m.relatedTarget = p),
            (g = null),
            Sn(v) === f &&
              ((x = new x(d, a + "enter", S, t, v)),
              (x.target = p),
              (x.relatedTarget = F),
              (g = x)),
            (F = g),
            w && S)
          )
            n: {
              for (x = w, d = S, a = 0, p = x; p; p = Rn(p)) a++;
              for (p = 0, g = d; g; g = Rn(g)) p++;
              for (; 0 < a - p; ) (x = Rn(x)), a--;
              for (; 0 < p - a; ) (d = Rn(d)), p--;
              for (; a--; ) {
                if (x === d || (d !== null && x === d.alternate)) break n;
                (x = Rn(x)), (d = Rn(d));
              }
              x = null;
            }
          else x = null;
          w !== null && cu(h, m, w, x, !1),
            S !== null && F !== null && cu(h, F, S, x, !0);
        }
      }
      e: {
        if (
          ((m = f ? Un(f) : window),
          (w = m.nodeName && m.nodeName.toLowerCase()),
          w === "select" || (w === "input" && m.type === "file"))
        )
          var C = Rf;
        else if (tu(m))
          if (As) C = If;
          else {
            C = Mf;
            var _ = Of;
          }
        else
          (w = m.nodeName) &&
            w.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (C = Df);
        if (C && (C = C(e, f))) {
          Hs(h, C, t, v);
          break e;
        }
        _ && _(e, m, f),
          e === "focusout" &&
            (_ = m._wrapperState) &&
            _.controlled &&
            m.type === "number" &&
            ei(m, "number", m.value);
      }
      switch (((_ = f ? Un(f) : window), e)) {
        case "focusin":
          (tu(_) || _.contentEditable === "true") &&
            ((In = _), (di = f), (_t = null));
          break;
        case "focusout":
          _t = di = In = null;
          break;
        case "mousedown":
          pi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (pi = !1), uu(h, t, v);
          break;
        case "selectionchange":
          if ($f) break;
        case "keydown":
        case "keyup":
          uu(h, t, v);
      }
      var N;
      if (ro)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        Dn
          ? Us(e, t) && (j = "onCompositionEnd")
          : e === "keydown" && t.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (Fs &&
          t.locale !== "ko" &&
          (Dn || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && Dn && (N = Is())
            : ((en = v),
              (eo = "value" in en ? en.value : en.textContent),
              (Dn = !0))),
        (_ = Fr(f, j)),
        0 < _.length &&
          ((j = new qo(j, e, null, t, v)),
          h.push({ event: j, listeners: _ }),
          N ? (j.data = N) : ((N = $s(t)), N !== null && (j.data = N)))),
        (N = jf ? Pf(e, t) : zf(e, t)) &&
          ((f = Fr(f, "onBeforeInput")),
          0 < f.length &&
            ((v = new qo("onBeforeInput", "beforeinput", null, t, v)),
            h.push({ event: v, listeners: f }),
            (v.data = N)));
    }
    Js(h, n);
  });
}
function $t(e, n, t) {
  return { instance: e, listener: n, currentTarget: t };
}
function Fr(e, n) {
  for (var t = n + "Capture", r = []; e !== null; ) {
    var l = e,
      i = l.stateNode;
    l.tag === 5 &&
      i !== null &&
      ((l = i),
      (i = Rt(e, t)),
      i != null && r.unshift($t(e, i, l)),
      (i = Rt(e, n)),
      i != null && r.push($t(e, i, l))),
      (e = e.return);
  }
  return r;
}
function Rn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function cu(e, n, t, r, l) {
  for (var i = n._reactName, o = []; t !== null && t !== r; ) {
    var u = t,
      s = u.alternate,
      f = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      f !== null &&
      ((u = f),
      l
        ? ((s = Rt(t, i)), s != null && o.unshift($t(t, s, u)))
        : l || ((s = Rt(t, i)), s != null && o.push($t(t, s, u)))),
      (t = t.return);
  }
  o.length !== 0 && e.push({ event: n, listeners: o });
}
var Vf = /\r\n?/g,
  Wf = /\u0000|\uFFFD/g;
function fu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Vf,
      `
`
    )
    .replace(Wf, "");
}
function fr(e, n, t) {
  if (((n = fu(n)), fu(e) !== n && t)) throw Error(y(425));
}
function Ur() {}
var mi = null,
  hi = null;
function vi(e, n) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof n.children == "string" ||
    typeof n.children == "number" ||
    (typeof n.dangerouslySetInnerHTML == "object" &&
      n.dangerouslySetInnerHTML !== null &&
      n.dangerouslySetInnerHTML.__html != null)
  );
}
var gi = typeof setTimeout == "function" ? setTimeout : void 0,
  Qf = typeof clearTimeout == "function" ? clearTimeout : void 0,
  du = typeof Promise == "function" ? Promise : void 0,
  Kf =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof du < "u"
      ? function (e) {
          return du.resolve(null).then(e).catch(Yf);
        }
      : gi;
function Yf(e) {
  setTimeout(function () {
    throw e;
  });
}
function Dl(e, n) {
  var t = n,
    r = 0;
  do {
    var l = t.nextSibling;
    if ((e.removeChild(t), l && l.nodeType === 8))
      if (((t = l.data), t === "/$")) {
        if (r === 0) {
          e.removeChild(l), Dt(n);
          return;
        }
        r--;
      } else (t !== "$" && t !== "$?" && t !== "$!") || r++;
    t = l;
  } while (t);
  Dt(n);
}
function on(e) {
  for (; e != null; e = e.nextSibling) {
    var n = e.nodeType;
    if (n === 1 || n === 3) break;
    if (n === 8) {
      if (((n = e.data), n === "$" || n === "$!" || n === "$?")) break;
      if (n === "/$") return null;
    }
  }
  return e;
}
function pu(e) {
  e = e.previousSibling;
  for (var n = 0; e; ) {
    if (e.nodeType === 8) {
      var t = e.data;
      if (t === "$" || t === "$!" || t === "$?") {
        if (n === 0) return e;
        n--;
      } else t === "/$" && n++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ot = Math.random().toString(36).slice(2),
  Ie = "__reactFiber$" + ot,
  Ht = "__reactProps$" + ot,
  Qe = "__reactContainer$" + ot,
  yi = "__reactEvents$" + ot,
  Xf = "__reactListeners$" + ot,
  Gf = "__reactHandles$" + ot;
function Sn(e) {
  var n = e[Ie];
  if (n) return n;
  for (var t = e.parentNode; t; ) {
    if ((n = t[Qe] || t[Ie])) {
      if (
        ((t = n.alternate),
        n.child !== null || (t !== null && t.child !== null))
      )
        for (e = pu(e); e !== null; ) {
          if ((t = e[Ie])) return t;
          e = pu(e);
        }
      return n;
    }
    (e = t), (t = e.parentNode);
  }
  return null;
}
function Jt(e) {
  return (
    (e = e[Ie] || e[Qe]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Un(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function il(e) {
  return e[Ht] || null;
}
var wi = [],
  $n = -1;
function mn(e) {
  return { current: e };
}
function I(e) {
  0 > $n || ((e.current = wi[$n]), (wi[$n] = null), $n--);
}
function M(e, n) {
  $n++, (wi[$n] = e.current), (e.current = n);
}
var dn = {},
  le = mn(dn),
  fe = mn(!1),
  _n = dn;
function qn(e, n) {
  var t = e.type.contextTypes;
  if (!t) return dn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    i;
  for (i in t) l[i] = n[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = n),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function de(e) {
  return (e = e.childContextTypes), e != null;
}
function $r() {
  I(fe), I(le);
}
function mu(e, n, t) {
  if (le.current !== dn) throw Error(y(168));
  M(le, n), M(fe, t);
}
function bs(e, n, t) {
  var r = e.stateNode;
  if (((n = n.childContextTypes), typeof r.getChildContext != "function"))
    return t;
  r = r.getChildContext();
  for (var l in r) if (!(l in n)) throw Error(y(108, Rc(e) || "Unknown", l));
  return A({}, t, r);
}
function Hr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dn),
    (_n = le.current),
    M(le, e),
    M(fe, fe.current),
    !0
  );
}
function hu(e, n, t) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  t
    ? ((e = bs(e, n, _n)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      I(fe),
      I(le),
      M(le, e))
    : I(fe),
    M(fe, t);
}
var He = null,
  ol = !1,
  Il = !1;
function ea(e) {
  He === null ? (He = [e]) : He.push(e);
}
function Zf(e) {
  (ol = !0), ea(e);
}
function hn() {
  if (!Il && He !== null) {
    Il = !0;
    var e = 0,
      n = O;
    try {
      var t = He;
      for (O = 1; e < t.length; e++) {
        var r = t[e];
        do r = r(!0);
        while (r !== null);
      }
      (He = null), (ol = !1);
    } catch (l) {
      throw (He !== null && (He = He.slice(e + 1)), _s(Zi, hn), l);
    } finally {
      (O = n), (Il = !1);
    }
  }
  return null;
}
var Hn = [],
  An = 0,
  Ar = null,
  Br = 0,
  Se = [],
  xe = 0,
  Nn = null,
  Ae = 1,
  Be = "";
function yn(e, n) {
  (Hn[An++] = Br), (Hn[An++] = Ar), (Ar = e), (Br = n);
}
function na(e, n, t) {
  (Se[xe++] = Ae), (Se[xe++] = Be), (Se[xe++] = Nn), (Nn = e);
  var r = Ae;
  e = Be;
  var l = 32 - Te(r) - 1;
  (r &= ~(1 << l)), (t += 1);
  var i = 32 - Te(n) + l;
  if (30 < i) {
    var o = l - (l % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (l -= o),
      (Ae = (1 << (32 - Te(n) + l)) | (t << l) | r),
      (Be = i + e);
  } else (Ae = (1 << i) | (t << l) | r), (Be = e);
}
function io(e) {
  e.return !== null && (yn(e, 1), na(e, 1, 0));
}
function oo(e) {
  for (; e === Ar; )
    (Ar = Hn[--An]), (Hn[An] = null), (Br = Hn[--An]), (Hn[An] = null);
  for (; e === Nn; )
    (Nn = Se[--xe]),
      (Se[xe] = null),
      (Be = Se[--xe]),
      (Se[xe] = null),
      (Ae = Se[--xe]),
      (Se[xe] = null);
}
var ve = null,
  he = null,
  U = !1,
  Le = null;
function ta(e, n) {
  var t = ke(5, null, null, 0);
  (t.elementType = "DELETED"),
    (t.stateNode = n),
    (t.return = e),
    (n = e.deletions),
    n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t);
}
function vu(e, n) {
  switch (e.tag) {
    case 5:
      var t = e.type;
      return (
        (n =
          n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase()
            ? null
            : n),
        n !== null
          ? ((e.stateNode = n), (ve = e), (he = on(n.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (n = e.pendingProps === "" || n.nodeType !== 3 ? null : n),
        n !== null ? ((e.stateNode = n), (ve = e), (he = null), !0) : !1
      );
    case 13:
      return (
        (n = n.nodeType !== 8 ? null : n),
        n !== null
          ? ((t = Nn !== null ? { id: Ae, overflow: Be } : null),
            (e.memoizedState = {
              dehydrated: n,
              treeContext: t,
              retryLane: 1073741824,
            }),
            (t = ke(18, null, null, 0)),
            (t.stateNode = n),
            (t.return = e),
            (e.child = t),
            (ve = e),
            (he = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Si(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function xi(e) {
  if (U) {
    var n = he;
    if (n) {
      var t = n;
      if (!vu(e, n)) {
        if (Si(e)) throw Error(y(418));
        n = on(t.nextSibling);
        var r = ve;
        n && vu(e, n)
          ? ta(r, t)
          : ((e.flags = (e.flags & -4097) | 2), (U = !1), (ve = e));
      }
    } else {
      if (Si(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (U = !1), (ve = e);
    }
  }
}
function gu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ve = e;
}
function dr(e) {
  if (e !== ve) return !1;
  if (!U) return gu(e), (U = !0), !1;
  var n;
  if (
    ((n = e.tag !== 3) &&
      !(n = e.tag !== 5) &&
      ((n = e.type),
      (n = n !== "head" && n !== "body" && !vi(e.type, e.memoizedProps))),
    n && (n = he))
  ) {
    if (Si(e)) throw (ra(), Error(y(418)));
    for (; n; ) ta(e, n), (n = on(n.nextSibling));
  }
  if ((gu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, n = 0; e; ) {
        if (e.nodeType === 8) {
          var t = e.data;
          if (t === "/$") {
            if (n === 0) {
              he = on(e.nextSibling);
              break e;
            }
            n--;
          } else (t !== "$" && t !== "$!" && t !== "$?") || n++;
        }
        e = e.nextSibling;
      }
      he = null;
    }
  } else he = ve ? on(e.stateNode.nextSibling) : null;
  return !0;
}
function ra() {
  for (var e = he; e; ) e = on(e.nextSibling);
}
function bn() {
  (he = ve = null), (U = !1);
}
function uo(e) {
  Le === null ? (Le = [e]) : Le.push(e);
}
var Jf = Xe.ReactCurrentBatchConfig;
function Pe(e, n) {
  if (e && e.defaultProps) {
    (n = A({}, n)), (e = e.defaultProps);
    for (var t in e) n[t] === void 0 && (n[t] = e[t]);
    return n;
  }
  return n;
}
var Vr = mn(null),
  Wr = null,
  Bn = null,
  so = null;
function ao() {
  so = Bn = Wr = null;
}
function co(e) {
  var n = Vr.current;
  I(Vr), (e._currentValue = n);
}
function ki(e, n, t) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & n) !== n
        ? ((e.childLanes |= n), r !== null && (r.childLanes |= n))
        : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n),
      e === t)
    )
      break;
    e = e.return;
  }
}
function Gn(e, n) {
  (Wr = e),
    (so = Bn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & n && (ce = !0), (e.firstContext = null));
}
function Ee(e) {
  var n = e._currentValue;
  if (so !== e)
    if (((e = { context: e, memoizedValue: n, next: null }), Bn === null)) {
      if (Wr === null) throw Error(y(308));
      (Bn = e), (Wr.dependencies = { lanes: 0, firstContext: e });
    } else Bn = Bn.next = e;
  return n;
}
var xn = null;
function fo(e) {
  xn === null ? (xn = [e]) : xn.push(e);
}
function la(e, n, t, r) {
  var l = n.interleaved;
  return (
    l === null ? ((t.next = t), fo(n)) : ((t.next = l.next), (l.next = t)),
    (n.interleaved = t),
    Ke(e, r)
  );
}
function Ke(e, n) {
  e.lanes |= n;
  var t = e.alternate;
  for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
    (e.childLanes |= n),
      (t = e.alternate),
      t !== null && (t.childLanes |= n),
      (t = e),
      (e = e.return);
  return t.tag === 3 ? t.stateNode : null;
}
var Je = !1;
function po(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function ia(e, n) {
  (e = e.updateQueue),
    n.updateQueue === e &&
      (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ve(e, n) {
  return {
    eventTime: e,
    lane: n,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function un(e, n, t) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), R & 2)) {
    var l = r.pending;
    return (
      l === null ? (n.next = n) : ((n.next = l.next), (l.next = n)),
      (r.pending = n),
      Ke(e, t)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((n.next = n), fo(r)) : ((n.next = l.next), (l.next = n)),
    (r.interleaved = n),
    Ke(e, t)
  );
}
function Cr(e, n, t) {
  if (
    ((n = n.updateQueue), n !== null && ((n = n.shared), (t & 4194240) !== 0))
  ) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), Ji(e, t);
  }
}
function yu(e, n) {
  var t = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), t === r)) {
    var l = null,
      i = null;
    if (((t = t.firstBaseUpdate), t !== null)) {
      do {
        var o = {
          eventTime: t.eventTime,
          lane: t.lane,
          tag: t.tag,
          payload: t.payload,
          callback: t.callback,
          next: null,
        };
        i === null ? (l = i = o) : (i = i.next = o), (t = t.next);
      } while (t !== null);
      i === null ? (l = i = n) : (i = i.next = n);
    } else l = i = n;
    (t = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = t);
    return;
  }
  (e = t.lastBaseUpdate),
    e === null ? (t.firstBaseUpdate = n) : (e.next = n),
    (t.lastBaseUpdate = n);
}
function Qr(e, n, t, r) {
  var l = e.updateQueue;
  Je = !1;
  var i = l.firstBaseUpdate,
    o = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      f = s.next;
    (s.next = null), o === null ? (i = f) : (o.next = f), (o = s);
    var v = e.alternate;
    v !== null &&
      ((v = v.updateQueue),
      (u = v.lastBaseUpdate),
      u !== o &&
        (u === null ? (v.firstBaseUpdate = f) : (u.next = f),
        (v.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var h = l.baseState;
    (o = 0), (v = f = s = null), (u = i);
    do {
      var m = u.lane,
        w = u.eventTime;
      if ((r & m) === m) {
        v !== null &&
          (v = v.next =
            {
              eventTime: w,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var S = e,
            x = u;
          switch (((m = n), (w = t), x.tag)) {
            case 1:
              if (((S = x.payload), typeof S == "function")) {
                h = S.call(w, h, m);
                break e;
              }
              h = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = x.payload),
                (m = typeof S == "function" ? S.call(w, h, m) : S),
                m == null)
              )
                break e;
              h = A({}, h, m);
              break e;
            case 2:
              Je = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [u]) : m.push(u));
      } else
        (w = {
          eventTime: w,
          lane: m,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          v === null ? ((f = v = w), (s = h)) : (v = v.next = w),
          (o |= m);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (m = u),
          (u = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (v === null && (s = h),
      (l.baseState = s),
      (l.firstBaseUpdate = f),
      (l.lastBaseUpdate = v),
      (n = l.shared.interleaved),
      n !== null)
    ) {
      l = n;
      do (o |= l.lane), (l = l.next);
      while (l !== n);
    } else i === null && (l.shared.lanes = 0);
    (Pn |= o), (e.lanes = o), (e.memoizedState = h);
  }
}
function wu(e, n, t) {
  if (((e = n.effects), (n.effects = null), e !== null))
    for (n = 0; n < e.length; n++) {
      var r = e[n],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = t), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var oa = new ls.Component().refs;
function Ci(e, n, t, r) {
  (n = e.memoizedState),
    (t = t(r, n)),
    (t = t == null ? n : A({}, n, t)),
    (e.memoizedState = t),
    e.lanes === 0 && (e.updateQueue.baseState = t);
}
var ul = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Tn(e) === e : !1;
  },
  enqueueSetState: function (e, n, t) {
    e = e._reactInternals;
    var r = oe(),
      l = an(e),
      i = Ve(r, l);
    (i.payload = n),
      t != null && (i.callback = t),
      (n = un(e, i, l)),
      n !== null && (Re(n, e, l, r), Cr(n, e, l));
  },
  enqueueReplaceState: function (e, n, t) {
    e = e._reactInternals;
    var r = oe(),
      l = an(e),
      i = Ve(r, l);
    (i.tag = 1),
      (i.payload = n),
      t != null && (i.callback = t),
      (n = un(e, i, l)),
      n !== null && (Re(n, e, l, r), Cr(n, e, l));
  },
  enqueueForceUpdate: function (e, n) {
    e = e._reactInternals;
    var t = oe(),
      r = an(e),
      l = Ve(t, r);
    (l.tag = 2),
      n != null && (l.callback = n),
      (n = un(e, l, r)),
      n !== null && (Re(n, e, r, t), Cr(n, e, r));
  },
};
function Su(e, n, t, r, l, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : n.prototype && n.prototype.isPureReactComponent
      ? !Ft(t, r) || !Ft(l, i)
      : !0
  );
}
function ua(e, n, t) {
  var r = !1,
    l = dn,
    i = n.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = Ee(i))
      : ((l = de(n) ? _n : le.current),
        (r = n.contextTypes),
        (i = (r = r != null) ? qn(e, l) : dn)),
    (n = new n(t, i)),
    (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
    (n.updater = ul),
    (e.stateNode = n),
    (n._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    n
  );
}
function xu(e, n, t, r) {
  (e = n.state),
    typeof n.componentWillReceiveProps == "function" &&
      n.componentWillReceiveProps(t, r),
    typeof n.UNSAFE_componentWillReceiveProps == "function" &&
      n.UNSAFE_componentWillReceiveProps(t, r),
    n.state !== e && ul.enqueueReplaceState(n, n.state, null);
}
function Ei(e, n, t, r) {
  var l = e.stateNode;
  (l.props = t), (l.state = e.memoizedState), (l.refs = oa), po(e);
  var i = n.contextType;
  typeof i == "object" && i !== null
    ? (l.context = Ee(i))
    : ((i = de(n) ? _n : le.current), (l.context = qn(e, i))),
    (l.state = e.memoizedState),
    (i = n.getDerivedStateFromProps),
    typeof i == "function" && (Ci(e, n, i, t), (l.state = e.memoizedState)),
    typeof n.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((n = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      n !== l.state && ul.enqueueReplaceState(l, l.state, null),
      Qr(e, t, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function mt(e, n, t) {
  if (
    ((e = t.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (t._owner) {
      if (((t = t._owner), t)) {
        if (t.tag !== 1) throw Error(y(309));
        var r = t.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        i = "" + e;
      return n !== null &&
        n.ref !== null &&
        typeof n.ref == "function" &&
        n.ref._stringRef === i
        ? n.ref
        : ((n = function (o) {
            var u = l.refs;
            u === oa && (u = l.refs = {}),
              o === null ? delete u[i] : (u[i] = o);
          }),
          (n._stringRef = i),
          n);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!t._owner) throw Error(y(290, e));
  }
  return e;
}
function pr(e, n) {
  throw (
    ((e = Object.prototype.toString.call(n)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(n).join(", ") + "}"
          : e
      )
    ))
  );
}
function ku(e) {
  var n = e._init;
  return n(e._payload);
}
function sa(e) {
  function n(d, a) {
    if (e) {
      var p = d.deletions;
      p === null ? ((d.deletions = [a]), (d.flags |= 16)) : p.push(a);
    }
  }
  function t(d, a) {
    if (!e) return null;
    for (; a !== null; ) n(d, a), (a = a.sibling);
    return null;
  }
  function r(d, a) {
    for (d = new Map(); a !== null; )
      a.key !== null ? d.set(a.key, a) : d.set(a.index, a), (a = a.sibling);
    return d;
  }
  function l(d, a) {
    return (d = cn(d, a)), (d.index = 0), (d.sibling = null), d;
  }
  function i(d, a, p) {
    return (
      (d.index = p),
      e
        ? ((p = d.alternate),
          p !== null
            ? ((p = p.index), p < a ? ((d.flags |= 2), a) : p)
            : ((d.flags |= 2), a))
        : ((d.flags |= 1048576), a)
    );
  }
  function o(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, a, p, g) {
    return a === null || a.tag !== 6
      ? ((a = Vl(p, d.mode, g)), (a.return = d), a)
      : ((a = l(a, p)), (a.return = d), a);
  }
  function s(d, a, p, g) {
    var C = p.type;
    return C === Mn
      ? v(d, a, p.props.children, g, p.key)
      : a !== null &&
        (a.elementType === C ||
          (typeof C == "object" &&
            C !== null &&
            C.$$typeof === Ze &&
            ku(C) === a.type))
      ? ((g = l(a, p.props)), (g.ref = mt(d, a, p)), (g.return = d), g)
      : ((g = zr(p.type, p.key, p.props, null, d.mode, g)),
        (g.ref = mt(d, a, p)),
        (g.return = d),
        g);
  }
  function f(d, a, p, g) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== p.containerInfo ||
      a.stateNode.implementation !== p.implementation
      ? ((a = Wl(p, d.mode, g)), (a.return = d), a)
      : ((a = l(a, p.children || [])), (a.return = d), a);
  }
  function v(d, a, p, g, C) {
    return a === null || a.tag !== 7
      ? ((a = En(p, d.mode, g, C)), (a.return = d), a)
      : ((a = l(a, p)), (a.return = d), a);
  }
  function h(d, a, p) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Vl("" + a, d.mode, p)), (a.return = d), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case tr:
          return (
            (p = zr(a.type, a.key, a.props, null, d.mode, p)),
            (p.ref = mt(d, null, a)),
            (p.return = d),
            p
          );
        case On:
          return (a = Wl(a, d.mode, p)), (a.return = d), a;
        case Ze:
          var g = a._init;
          return h(d, g(a._payload), p);
      }
      if (yt(a) || at(a))
        return (a = En(a, d.mode, p, null)), (a.return = d), a;
      pr(d, a);
    }
    return null;
  }
  function m(d, a, p, g) {
    var C = a !== null ? a.key : null;
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return C !== null ? null : u(d, a, "" + p, g);
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case tr:
          return p.key === C ? s(d, a, p, g) : null;
        case On:
          return p.key === C ? f(d, a, p, g) : null;
        case Ze:
          return (C = p._init), m(d, a, C(p._payload), g);
      }
      if (yt(p) || at(p)) return C !== null ? null : v(d, a, p, g, null);
      pr(d, p);
    }
    return null;
  }
  function w(d, a, p, g, C) {
    if ((typeof g == "string" && g !== "") || typeof g == "number")
      return (d = d.get(p) || null), u(a, d, "" + g, C);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case tr:
          return (d = d.get(g.key === null ? p : g.key) || null), s(a, d, g, C);
        case On:
          return (d = d.get(g.key === null ? p : g.key) || null), f(a, d, g, C);
        case Ze:
          var _ = g._init;
          return w(d, a, p, _(g._payload), C);
      }
      if (yt(g) || at(g)) return (d = d.get(p) || null), v(a, d, g, C, null);
      pr(a, g);
    }
    return null;
  }
  function S(d, a, p, g) {
    for (
      var C = null, _ = null, N = a, j = (a = 0), V = null;
      N !== null && j < p.length;
      j++
    ) {
      N.index > j ? ((V = N), (N = null)) : (V = N.sibling);
      var T = m(d, N, p[j], g);
      if (T === null) {
        N === null && (N = V);
        break;
      }
      e && N && T.alternate === null && n(d, N),
        (a = i(T, a, j)),
        _ === null ? (C = T) : (_.sibling = T),
        (_ = T),
        (N = V);
    }
    if (j === p.length) return t(d, N), U && yn(d, j), C;
    if (N === null) {
      for (; j < p.length; j++)
        (N = h(d, p[j], g)),
          N !== null &&
            ((a = i(N, a, j)), _ === null ? (C = N) : (_.sibling = N), (_ = N));
      return U && yn(d, j), C;
    }
    for (N = r(d, N); j < p.length; j++)
      (V = w(N, d, j, p[j], g)),
        V !== null &&
          (e && V.alternate !== null && N.delete(V.key === null ? j : V.key),
          (a = i(V, a, j)),
          _ === null ? (C = V) : (_.sibling = V),
          (_ = V));
    return (
      e &&
        N.forEach(function (Ne) {
          return n(d, Ne);
        }),
      U && yn(d, j),
      C
    );
  }
  function x(d, a, p, g) {
    var C = at(p);
    if (typeof C != "function") throw Error(y(150));
    if (((p = C.call(p)), p == null)) throw Error(y(151));
    for (
      var _ = (C = null), N = a, j = (a = 0), V = null, T = p.next();
      N !== null && !T.done;
      j++, T = p.next()
    ) {
      N.index > j ? ((V = N), (N = null)) : (V = N.sibling);
      var Ne = m(d, N, T.value, g);
      if (Ne === null) {
        N === null && (N = V);
        break;
      }
      e && N && Ne.alternate === null && n(d, N),
        (a = i(Ne, a, j)),
        _ === null ? (C = Ne) : (_.sibling = Ne),
        (_ = Ne),
        (N = V);
    }
    if (T.done) return t(d, N), U && yn(d, j), C;
    if (N === null) {
      for (; !T.done; j++, T = p.next())
        (T = h(d, T.value, g)),
          T !== null &&
            ((a = i(T, a, j)), _ === null ? (C = T) : (_.sibling = T), (_ = T));
      return U && yn(d, j), C;
    }
    for (N = r(d, N); !T.done; j++, T = p.next())
      (T = w(N, d, j, T.value, g)),
        T !== null &&
          (e && T.alternate !== null && N.delete(T.key === null ? j : T.key),
          (a = i(T, a, j)),
          _ === null ? (C = T) : (_.sibling = T),
          (_ = T));
    return (
      e &&
        N.forEach(function (ut) {
          return n(d, ut);
        }),
      U && yn(d, j),
      C
    );
  }
  function F(d, a, p, g) {
    if (
      (typeof p == "object" &&
        p !== null &&
        p.type === Mn &&
        p.key === null &&
        (p = p.props.children),
      typeof p == "object" && p !== null)
    ) {
      switch (p.$$typeof) {
        case tr:
          e: {
            for (var C = p.key, _ = a; _ !== null; ) {
              if (_.key === C) {
                if (((C = p.type), C === Mn)) {
                  if (_.tag === 7) {
                    t(d, _.sibling),
                      (a = l(_, p.props.children)),
                      (a.return = d),
                      (d = a);
                    break e;
                  }
                } else if (
                  _.elementType === C ||
                  (typeof C == "object" &&
                    C !== null &&
                    C.$$typeof === Ze &&
                    ku(C) === _.type)
                ) {
                  t(d, _.sibling),
                    (a = l(_, p.props)),
                    (a.ref = mt(d, _, p)),
                    (a.return = d),
                    (d = a);
                  break e;
                }
                t(d, _);
                break;
              } else n(d, _);
              _ = _.sibling;
            }
            p.type === Mn
              ? ((a = En(p.props.children, d.mode, g, p.key)),
                (a.return = d),
                (d = a))
              : ((g = zr(p.type, p.key, p.props, null, d.mode, g)),
                (g.ref = mt(d, a, p)),
                (g.return = d),
                (d = g));
          }
          return o(d);
        case On:
          e: {
            for (_ = p.key; a !== null; ) {
              if (a.key === _)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === p.containerInfo &&
                  a.stateNode.implementation === p.implementation
                ) {
                  t(d, a.sibling),
                    (a = l(a, p.children || [])),
                    (a.return = d),
                    (d = a);
                  break e;
                } else {
                  t(d, a);
                  break;
                }
              else n(d, a);
              a = a.sibling;
            }
            (a = Wl(p, d.mode, g)), (a.return = d), (d = a);
          }
          return o(d);
        case Ze:
          return (_ = p._init), F(d, a, _(p._payload), g);
      }
      if (yt(p)) return S(d, a, p, g);
      if (at(p)) return x(d, a, p, g);
      pr(d, p);
    }
    return (typeof p == "string" && p !== "") || typeof p == "number"
      ? ((p = "" + p),
        a !== null && a.tag === 6
          ? (t(d, a.sibling), (a = l(a, p)), (a.return = d), (d = a))
          : (t(d, a), (a = Vl(p, d.mode, g)), (a.return = d), (d = a)),
        o(d))
      : t(d, a);
  }
  return F;
}
var et = sa(!0),
  aa = sa(!1),
  qt = {},
  Ue = mn(qt),
  At = mn(qt),
  Bt = mn(qt);
function kn(e) {
  if (e === qt) throw Error(y(174));
  return e;
}
function mo(e, n) {
  switch ((M(Bt, n), M(At, e), M(Ue, qt), (e = n.nodeType), e)) {
    case 9:
    case 11:
      n = (n = n.documentElement) ? n.namespaceURI : ti(null, "");
      break;
    default:
      (e = e === 8 ? n.parentNode : n),
        (n = e.namespaceURI || null),
        (e = e.tagName),
        (n = ti(n, e));
  }
  I(Ue), M(Ue, n);
}
function nt() {
  I(Ue), I(At), I(Bt);
}
function ca(e) {
  kn(Bt.current);
  var n = kn(Ue.current),
    t = ti(n, e.type);
  n !== t && (M(At, e), M(Ue, t));
}
function ho(e) {
  At.current === e && (I(Ue), I(At));
}
var $ = mn(0);
function Kr(e) {
  for (var n = e; n !== null; ) {
    if (n.tag === 13) {
      var t = n.memoizedState;
      if (
        t !== null &&
        ((t = t.dehydrated), t === null || t.data === "$?" || t.data === "$!")
      )
        return n;
    } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
      if (n.flags & 128) return n;
    } else if (n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return null;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
  return null;
}
var Fl = [];
function vo() {
  for (var e = 0; e < Fl.length; e++)
    Fl[e]._workInProgressVersionPrimary = null;
  Fl.length = 0;
}
var Er = Xe.ReactCurrentDispatcher,
  Ul = Xe.ReactCurrentBatchConfig,
  jn = 0,
  H = null,
  Y = null,
  Z = null,
  Yr = !1,
  Nt = !1,
  Vt = 0,
  qf = 0;
function ne() {
  throw Error(y(321));
}
function go(e, n) {
  if (n === null) return !1;
  for (var t = 0; t < n.length && t < e.length; t++)
    if (!Oe(e[t], n[t])) return !1;
  return !0;
}
function yo(e, n, t, r, l, i) {
  if (
    ((jn = i),
    (H = n),
    (n.memoizedState = null),
    (n.updateQueue = null),
    (n.lanes = 0),
    (Er.current = e === null || e.memoizedState === null ? td : rd),
    (e = t(r, l)),
    Nt)
  ) {
    i = 0;
    do {
      if (((Nt = !1), (Vt = 0), 25 <= i)) throw Error(y(301));
      (i += 1),
        (Z = Y = null),
        (n.updateQueue = null),
        (Er.current = ld),
        (e = t(r, l));
    } while (Nt);
  }
  if (
    ((Er.current = Xr),
    (n = Y !== null && Y.next !== null),
    (jn = 0),
    (Z = Y = H = null),
    (Yr = !1),
    n)
  )
    throw Error(y(300));
  return e;
}
function wo() {
  var e = Vt !== 0;
  return (Vt = 0), e;
}
function De() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Z === null ? (H.memoizedState = Z = e) : (Z = Z.next = e), Z;
}
function _e() {
  if (Y === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var n = Z === null ? H.memoizedState : Z.next;
  if (n !== null) (Z = n), (Y = e);
  else {
    if (e === null) throw Error(y(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      Z === null ? (H.memoizedState = Z = e) : (Z = Z.next = e);
  }
  return Z;
}
function Wt(e, n) {
  return typeof n == "function" ? n(e) : n;
}
function $l(e) {
  var n = _e(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = Y,
    l = r.baseQueue,
    i = t.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      (l.next = i.next), (i.next = o);
    }
    (r.baseQueue = l = i), (t.pending = null);
  }
  if (l !== null) {
    (i = l.next), (r = r.baseState);
    var u = (o = null),
      s = null,
      f = i;
    do {
      var v = f.lane;
      if ((jn & v) === v)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (r = f.hasEagerState ? f.eagerState : e(r, f.action));
      else {
        var h = {
          lane: v,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        s === null ? ((u = s = h), (o = r)) : (s = s.next = h),
          (H.lanes |= v),
          (Pn |= v);
      }
      f = f.next;
    } while (f !== null && f !== i);
    s === null ? (o = r) : (s.next = u),
      Oe(r, n.memoizedState) || (ce = !0),
      (n.memoizedState = r),
      (n.baseState = o),
      (n.baseQueue = s),
      (t.lastRenderedState = r);
  }
  if (((e = t.interleaved), e !== null)) {
    l = e;
    do (i = l.lane), (H.lanes |= i), (Pn |= i), (l = l.next);
    while (l !== e);
  } else l === null && (t.lanes = 0);
  return [n.memoizedState, t.dispatch];
}
function Hl(e) {
  var n = _e(),
    t = n.queue;
  if (t === null) throw Error(y(311));
  t.lastRenderedReducer = e;
  var r = t.dispatch,
    l = t.pending,
    i = n.memoizedState;
  if (l !== null) {
    t.pending = null;
    var o = (l = l.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== l);
    Oe(i, n.memoizedState) || (ce = !0),
      (n.memoizedState = i),
      n.baseQueue === null && (n.baseState = i),
      (t.lastRenderedState = i);
  }
  return [i, r];
}
function fa() {}
function da(e, n) {
  var t = H,
    r = _e(),
    l = n(),
    i = !Oe(r.memoizedState, l);
  if (
    (i && ((r.memoizedState = l), (ce = !0)),
    (r = r.queue),
    So(ha.bind(null, t, r, e), [e]),
    r.getSnapshot !== n || i || (Z !== null && Z.memoizedState.tag & 1))
  ) {
    if (
      ((t.flags |= 2048),
      Qt(9, ma.bind(null, t, r, l, n), void 0, null),
      J === null)
    )
      throw Error(y(349));
    jn & 30 || pa(t, n, l);
  }
  return l;
}
function pa(e, n, t) {
  (e.flags |= 16384),
    (e = { getSnapshot: n, value: t }),
    (n = H.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (H.updateQueue = n),
        (n.stores = [e]))
      : ((t = n.stores), t === null ? (n.stores = [e]) : t.push(e));
}
function ma(e, n, t, r) {
  (n.value = t), (n.getSnapshot = r), va(n) && ga(e);
}
function ha(e, n, t) {
  return t(function () {
    va(n) && ga(e);
  });
}
function va(e) {
  var n = e.getSnapshot;
  e = e.value;
  try {
    var t = n();
    return !Oe(e, t);
  } catch {
    return !0;
  }
}
function ga(e) {
  var n = Ke(e, 1);
  n !== null && Re(n, e, 1, -1);
}
function Cu(e) {
  var n = De();
  return (
    typeof e == "function" && (e = e()),
    (n.memoizedState = n.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wt,
      lastRenderedState: e,
    }),
    (n.queue = e),
    (e = e.dispatch = nd.bind(null, H, e)),
    [n.memoizedState, e]
  );
}
function Qt(e, n, t, r) {
  return (
    (e = { tag: e, create: n, destroy: t, deps: r, next: null }),
    (n = H.updateQueue),
    n === null
      ? ((n = { lastEffect: null, stores: null }),
        (H.updateQueue = n),
        (n.lastEffect = e.next = e))
      : ((t = n.lastEffect),
        t === null
          ? (n.lastEffect = e.next = e)
          : ((r = t.next), (t.next = e), (e.next = r), (n.lastEffect = e))),
    e
  );
}
function ya() {
  return _e().memoizedState;
}
function _r(e, n, t, r) {
  var l = De();
  (H.flags |= e),
    (l.memoizedState = Qt(1 | n, t, void 0, r === void 0 ? null : r));
}
function sl(e, n, t, r) {
  var l = _e();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Y !== null) {
    var o = Y.memoizedState;
    if (((i = o.destroy), r !== null && go(r, o.deps))) {
      l.memoizedState = Qt(n, t, i, r);
      return;
    }
  }
  (H.flags |= e), (l.memoizedState = Qt(1 | n, t, i, r));
}
function Eu(e, n) {
  return _r(8390656, 8, e, n);
}
function So(e, n) {
  return sl(2048, 8, e, n);
}
function wa(e, n) {
  return sl(4, 2, e, n);
}
function Sa(e, n) {
  return sl(4, 4, e, n);
}
function xa(e, n) {
  if (typeof n == "function")
    return (
      (e = e()),
      n(e),
      function () {
        n(null);
      }
    );
  if (n != null)
    return (
      (e = e()),
      (n.current = e),
      function () {
        n.current = null;
      }
    );
}
function ka(e, n, t) {
  return (
    (t = t != null ? t.concat([e]) : null), sl(4, 4, xa.bind(null, n, e), t)
  );
}
function xo() {}
function Ca(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && go(n, r[1])
    ? r[0]
    : ((t.memoizedState = [e, n]), e);
}
function Ea(e, n) {
  var t = _e();
  n = n === void 0 ? null : n;
  var r = t.memoizedState;
  return r !== null && n !== null && go(n, r[1])
    ? r[0]
    : ((e = e()), (t.memoizedState = [e, n]), e);
}
function _a(e, n, t) {
  return jn & 21
    ? (Oe(t, n) || ((t = Ps()), (H.lanes |= t), (Pn |= t), (e.baseState = !0)),
      n)
    : (e.baseState && ((e.baseState = !1), (ce = !0)), (e.memoizedState = t));
}
function bf(e, n) {
  var t = O;
  (O = t !== 0 && 4 > t ? t : 4), e(!0);
  var r = Ul.transition;
  Ul.transition = {};
  try {
    e(!1), n();
  } finally {
    (O = t), (Ul.transition = r);
  }
}
function Na() {
  return _e().memoizedState;
}
function ed(e, n, t) {
  var r = an(e);
  if (
    ((t = {
      lane: r,
      action: t,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ja(e))
  )
    Pa(n, t);
  else if (((t = la(e, n, t, r)), t !== null)) {
    var l = oe();
    Re(t, e, r, l), za(t, n, r);
  }
}
function nd(e, n, t) {
  var r = an(e),
    l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
  if (ja(e)) Pa(n, l);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = n.lastRenderedReducer), i !== null)
    )
      try {
        var o = n.lastRenderedState,
          u = i(o, t);
        if (((l.hasEagerState = !0), (l.eagerState = u), Oe(u, o))) {
          var s = n.interleaved;
          s === null
            ? ((l.next = l), fo(n))
            : ((l.next = s.next), (s.next = l)),
            (n.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (t = la(e, n, l, r)),
      t !== null && ((l = oe()), Re(t, e, r, l), za(t, n, r));
  }
}
function ja(e) {
  var n = e.alternate;
  return e === H || (n !== null && n === H);
}
function Pa(e, n) {
  Nt = Yr = !0;
  var t = e.pending;
  t === null ? (n.next = n) : ((n.next = t.next), (t.next = n)),
    (e.pending = n);
}
function za(e, n, t) {
  if (t & 4194240) {
    var r = n.lanes;
    (r &= e.pendingLanes), (t |= r), (n.lanes = t), Ji(e, t);
  }
}
var Xr = {
    readContext: Ee,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useInsertionEffect: ne,
    useLayoutEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useMutableSource: ne,
    useSyncExternalStore: ne,
    useId: ne,
    unstable_isNewReconciler: !1,
  },
  td = {
    readContext: Ee,
    useCallback: function (e, n) {
      return (De().memoizedState = [e, n === void 0 ? null : n]), e;
    },
    useContext: Ee,
    useEffect: Eu,
    useImperativeHandle: function (e, n, t) {
      return (
        (t = t != null ? t.concat([e]) : null),
        _r(4194308, 4, xa.bind(null, n, e), t)
      );
    },
    useLayoutEffect: function (e, n) {
      return _r(4194308, 4, e, n);
    },
    useInsertionEffect: function (e, n) {
      return _r(4, 2, e, n);
    },
    useMemo: function (e, n) {
      var t = De();
      return (
        (n = n === void 0 ? null : n), (e = e()), (t.memoizedState = [e, n]), e
      );
    },
    useReducer: function (e, n, t) {
      var r = De();
      return (
        (n = t !== void 0 ? t(n) : n),
        (r.memoizedState = r.baseState = n),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: n,
        }),
        (r.queue = e),
        (e = e.dispatch = ed.bind(null, H, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var n = De();
      return (e = { current: e }), (n.memoizedState = e);
    },
    useState: Cu,
    useDebugValue: xo,
    useDeferredValue: function (e) {
      return (De().memoizedState = e);
    },
    useTransition: function () {
      var e = Cu(!1),
        n = e[0];
      return (e = bf.bind(null, e[1])), (De().memoizedState = e), [n, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, n, t) {
      var r = H,
        l = De();
      if (U) {
        if (t === void 0) throw Error(y(407));
        t = t();
      } else {
        if (((t = n()), J === null)) throw Error(y(349));
        jn & 30 || pa(r, n, t);
      }
      l.memoizedState = t;
      var i = { value: t, getSnapshot: n };
      return (
        (l.queue = i),
        Eu(ha.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Qt(9, ma.bind(null, r, i, t, n), void 0, null),
        t
      );
    },
    useId: function () {
      var e = De(),
        n = J.identifierPrefix;
      if (U) {
        var t = Be,
          r = Ae;
        (t = (r & ~(1 << (32 - Te(r) - 1))).toString(32) + t),
          (n = ":" + n + "R" + t),
          (t = Vt++),
          0 < t && (n += "H" + t.toString(32)),
          (n += ":");
      } else (t = qf++), (n = ":" + n + "r" + t.toString(32) + ":");
      return (e.memoizedState = n);
    },
    unstable_isNewReconciler: !1,
  },
  rd = {
    readContext: Ee,
    useCallback: Ca,
    useContext: Ee,
    useEffect: So,
    useImperativeHandle: ka,
    useInsertionEffect: wa,
    useLayoutEffect: Sa,
    useMemo: Ea,
    useReducer: $l,
    useRef: ya,
    useState: function () {
      return $l(Wt);
    },
    useDebugValue: xo,
    useDeferredValue: function (e) {
      var n = _e();
      return _a(n, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = $l(Wt)[0],
        n = _e().memoizedState;
      return [e, n];
    },
    useMutableSource: fa,
    useSyncExternalStore: da,
    useId: Na,
    unstable_isNewReconciler: !1,
  },
  ld = {
    readContext: Ee,
    useCallback: Ca,
    useContext: Ee,
    useEffect: So,
    useImperativeHandle: ka,
    useInsertionEffect: wa,
    useLayoutEffect: Sa,
    useMemo: Ea,
    useReducer: Hl,
    useRef: ya,
    useState: function () {
      return Hl(Wt);
    },
    useDebugValue: xo,
    useDeferredValue: function (e) {
      var n = _e();
      return Y === null ? (n.memoizedState = e) : _a(n, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Hl(Wt)[0],
        n = _e().memoizedState;
      return [e, n];
    },
    useMutableSource: fa,
    useSyncExternalStore: da,
    useId: Na,
    unstable_isNewReconciler: !1,
  };
function tt(e, n) {
  try {
    var t = "",
      r = n;
    do (t += Tc(r)), (r = r.return);
    while (r);
    var l = t;
  } catch (i) {
    l =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: n, stack: l, digest: null };
}
function Al(e, n, t) {
  return { value: e, source: null, stack: t ?? null, digest: n ?? null };
}
function _i(e, n) {
  try {
    console.error(n.value);
  } catch (t) {
    setTimeout(function () {
      throw t;
    });
  }
}
var id = typeof WeakMap == "function" ? WeakMap : Map;
function La(e, n, t) {
  (t = Ve(-1, t)), (t.tag = 3), (t.payload = { element: null });
  var r = n.value;
  return (
    (t.callback = function () {
      Zr || ((Zr = !0), (Di = r)), _i(e, n);
    }),
    t
  );
}
function Ta(e, n, t) {
  (t = Ve(-1, t)), (t.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = n.value;
    (t.payload = function () {
      return r(l);
    }),
      (t.callback = function () {
        _i(e, n);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (t.callback = function () {
        _i(e, n),
          typeof r != "function" &&
            (sn === null ? (sn = new Set([this])) : sn.add(this));
        var o = n.stack;
        this.componentDidCatch(n.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    t
  );
}
function _u(e, n, t) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new id();
    var l = new Set();
    r.set(n, l);
  } else (l = r.get(n)), l === void 0 && ((l = new Set()), r.set(n, l));
  l.has(t) || (l.add(t), (e = wd.bind(null, e, n, t)), n.then(e, e));
}
function Nu(e) {
  do {
    var n;
    if (
      ((n = e.tag === 13) &&
        ((n = e.memoizedState), (n = n !== null ? n.dehydrated !== null : !0)),
      n)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ju(e, n, t, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === n
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (t.flags |= 131072),
          (t.flags &= -52805),
          t.tag === 1 &&
            (t.alternate === null
              ? (t.tag = 17)
              : ((n = Ve(-1, 1)), (n.tag = 2), un(t, n, 1))),
          (t.lanes |= 1)),
      e);
}
var od = Xe.ReactCurrentOwner,
  ce = !1;
function ie(e, n, t, r) {
  n.child = e === null ? aa(n, null, t, r) : et(n, e.child, t, r);
}
function Pu(e, n, t, r, l) {
  t = t.render;
  var i = n.ref;
  return (
    Gn(n, l),
    (r = yo(e, n, t, r, i, l)),
    (t = wo()),
    e !== null && !ce
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Ye(e, n, l))
      : (U && t && io(n), (n.flags |= 1), ie(e, n, r, l), n.child)
  );
}
function zu(e, n, t, r, l) {
  if (e === null) {
    var i = t.type;
    return typeof i == "function" &&
      !zo(i) &&
      i.defaultProps === void 0 &&
      t.compare === null &&
      t.defaultProps === void 0
      ? ((n.tag = 15), (n.type = i), Ra(e, n, i, r, l))
      : ((e = zr(t.type, null, r, n, n.mode, l)),
        (e.ref = n.ref),
        (e.return = n),
        (n.child = e));
  }
  if (((i = e.child), !(e.lanes & l))) {
    var o = i.memoizedProps;
    if (
      ((t = t.compare), (t = t !== null ? t : Ft), t(o, r) && e.ref === n.ref)
    )
      return Ye(e, n, l);
  }
  return (
    (n.flags |= 1),
    (e = cn(i, r)),
    (e.ref = n.ref),
    (e.return = n),
    (n.child = e)
  );
}
function Ra(e, n, t, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Ft(i, r) && e.ref === n.ref)
      if (((ce = !1), (n.pendingProps = r = i), (e.lanes & l) !== 0))
        e.flags & 131072 && (ce = !0);
      else return (n.lanes = e.lanes), Ye(e, n, l);
  }
  return Ni(e, n, t, r, l);
}
function Oa(e, n, t) {
  var r = n.pendingProps,
    l = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(n.mode & 1))
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        M(Wn, me),
        (me |= t);
    else {
      if (!(t & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | t : t),
          (n.lanes = n.childLanes = 1073741824),
          (n.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (n.updateQueue = null),
          M(Wn, me),
          (me |= e),
          null
        );
      (n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : t),
        M(Wn, me),
        (me |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | t), (n.memoizedState = null)) : (r = t),
      M(Wn, me),
      (me |= r);
  return ie(e, n, l, t), n.child;
}
function Ma(e, n) {
  var t = n.ref;
  ((e === null && t !== null) || (e !== null && e.ref !== t)) &&
    ((n.flags |= 512), (n.flags |= 2097152));
}
function Ni(e, n, t, r, l) {
  var i = de(t) ? _n : le.current;
  return (
    (i = qn(n, i)),
    Gn(n, l),
    (t = yo(e, n, t, r, i, l)),
    (r = wo()),
    e !== null && !ce
      ? ((n.updateQueue = e.updateQueue),
        (n.flags &= -2053),
        (e.lanes &= ~l),
        Ye(e, n, l))
      : (U && r && io(n), (n.flags |= 1), ie(e, n, t, l), n.child)
  );
}
function Lu(e, n, t, r, l) {
  if (de(t)) {
    var i = !0;
    Hr(n);
  } else i = !1;
  if ((Gn(n, l), n.stateNode === null))
    Nr(e, n), ua(n, t, r), Ei(n, t, r, l), (r = !0);
  else if (e === null) {
    var o = n.stateNode,
      u = n.memoizedProps;
    o.props = u;
    var s = o.context,
      f = t.contextType;
    typeof f == "object" && f !== null
      ? (f = Ee(f))
      : ((f = de(t) ? _n : le.current), (f = qn(n, f)));
    var v = t.getDerivedStateFromProps,
      h =
        typeof v == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    h ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== r || s !== f) && xu(n, o, r, f)),
      (Je = !1);
    var m = n.memoizedState;
    (o.state = m),
      Qr(n, r, o, l),
      (s = n.memoizedState),
      u !== r || m !== s || fe.current || Je
        ? (typeof v == "function" && (Ci(n, t, v, r), (s = n.memoizedState)),
          (u = Je || Su(n, t, u, r, m, s, f))
            ? (h ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (n.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (n.flags |= 4194308),
              (n.memoizedProps = r),
              (n.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = f),
          (r = u))
        : (typeof o.componentDidMount == "function" && (n.flags |= 4194308),
          (r = !1));
  } else {
    (o = n.stateNode),
      ia(e, n),
      (u = n.memoizedProps),
      (f = n.type === n.elementType ? u : Pe(n.type, u)),
      (o.props = f),
      (h = n.pendingProps),
      (m = o.context),
      (s = t.contextType),
      typeof s == "object" && s !== null
        ? (s = Ee(s))
        : ((s = de(t) ? _n : le.current), (s = qn(n, s)));
    var w = t.getDerivedStateFromProps;
    (v =
      typeof w == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((u !== h || m !== s) && xu(n, o, r, s)),
      (Je = !1),
      (m = n.memoizedState),
      (o.state = m),
      Qr(n, r, o, l);
    var S = n.memoizedState;
    u !== h || m !== S || fe.current || Je
      ? (typeof w == "function" && (Ci(n, t, w, r), (S = n.memoizedState)),
        (f = Je || Su(n, t, f, r, m, S, s) || !1)
          ? (v ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, S, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, S, s)),
            typeof o.componentDidUpdate == "function" && (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (n.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && m === e.memoizedState) ||
              (n.flags |= 1024),
            (n.memoizedProps = r),
            (n.memoizedState = S)),
        (o.props = r),
        (o.state = S),
        (o.context = s),
        (r = f))
      : (typeof o.componentDidUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (n.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && m === e.memoizedState) ||
          (n.flags |= 1024),
        (r = !1));
  }
  return ji(e, n, t, r, i, l);
}
function ji(e, n, t, r, l, i) {
  Ma(e, n);
  var o = (n.flags & 128) !== 0;
  if (!r && !o) return l && hu(n, t, !1), Ye(e, n, i);
  (r = n.stateNode), (od.current = n);
  var u =
    o && typeof t.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (n.flags |= 1),
    e !== null && o
      ? ((n.child = et(n, e.child, null, i)), (n.child = et(n, null, u, i)))
      : ie(e, n, u, i),
    (n.memoizedState = r.state),
    l && hu(n, t, !0),
    n.child
  );
}
function Da(e) {
  var n = e.stateNode;
  n.pendingContext
    ? mu(e, n.pendingContext, n.pendingContext !== n.context)
    : n.context && mu(e, n.context, !1),
    mo(e, n.containerInfo);
}
function Tu(e, n, t, r, l) {
  return bn(), uo(l), (n.flags |= 256), ie(e, n, t, r), n.child;
}
var Pi = { dehydrated: null, treeContext: null, retryLane: 0 };
function zi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ia(e, n, t) {
  var r = n.pendingProps,
    l = $.current,
    i = !1,
    o = (n.flags & 128) !== 0,
    u;
  if (
    ((u = o) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((i = !0), (n.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    M($, l & 1),
    e === null)
  )
    return (
      xi(n),
      (e = n.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (n.mode & 1
            ? e.data === "$!"
              ? (n.lanes = 8)
              : (n.lanes = 1073741824)
            : (n.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = n.mode),
              (i = n.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = fl(o, r, 0, null)),
              (e = En(e, r, t, null)),
              (i.return = n),
              (e.return = n),
              (i.sibling = e),
              (n.child = i),
              (n.child.memoizedState = zi(t)),
              (n.memoizedState = Pi),
              e)
            : ko(n, o))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return ud(e, n, o, r, u, l, t);
  if (i) {
    (i = r.fallback), (o = n.mode), (l = e.child), (u = l.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && n.child !== l
        ? ((r = n.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (n.deletions = null))
        : ((r = cn(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (i = cn(u, i)) : ((i = En(i, o, t, null)), (i.flags |= 2)),
      (i.return = n),
      (r.return = n),
      (r.sibling = i),
      (n.child = r),
      (r = i),
      (i = n.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? zi(t)
          : {
              baseLanes: o.baseLanes | t,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~t),
      (n.memoizedState = Pi),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = cn(i, { mode: "visible", children: r.children })),
    !(n.mode & 1) && (r.lanes = t),
    (r.return = n),
    (r.sibling = null),
    e !== null &&
      ((t = n.deletions),
      t === null ? ((n.deletions = [e]), (n.flags |= 16)) : t.push(e)),
    (n.child = r),
    (n.memoizedState = null),
    r
  );
}
function ko(e, n) {
  return (
    (n = fl({ mode: "visible", children: n }, e.mode, 0, null)),
    (n.return = e),
    (e.child = n)
  );
}
function mr(e, n, t, r) {
  return (
    r !== null && uo(r),
    et(n, e.child, null, t),
    (e = ko(n, n.pendingProps.children)),
    (e.flags |= 2),
    (n.memoizedState = null),
    e
  );
}
function ud(e, n, t, r, l, i, o) {
  if (t)
    return n.flags & 256
      ? ((n.flags &= -257), (r = Al(Error(y(422)))), mr(e, n, o, r))
      : n.memoizedState !== null
      ? ((n.child = e.child), (n.flags |= 128), null)
      : ((i = r.fallback),
        (l = n.mode),
        (r = fl({ mode: "visible", children: r.children }, l, 0, null)),
        (i = En(i, l, o, null)),
        (i.flags |= 2),
        (r.return = n),
        (i.return = n),
        (r.sibling = i),
        (n.child = r),
        n.mode & 1 && et(n, e.child, null, o),
        (n.child.memoizedState = zi(o)),
        (n.memoizedState = Pi),
        i);
  if (!(n.mode & 1)) return mr(e, n, o, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (i = Error(y(419))), (r = Al(i, r, void 0)), mr(e, n, o, r);
  }
  if (((u = (o & e.childLanes) !== 0), ce || u)) {
    if (((r = J), r !== null)) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | o) ? 0 : l),
        l !== 0 &&
          l !== i.retryLane &&
          ((i.retryLane = l), Ke(e, l), Re(r, e, l, -1));
    }
    return Po(), (r = Al(Error(y(421)))), mr(e, n, o, r);
  }
  return l.data === "$?"
    ? ((n.flags |= 128),
      (n.child = e.child),
      (n = Sd.bind(null, e)),
      (l._reactRetry = n),
      null)
    : ((e = i.treeContext),
      (he = on(l.nextSibling)),
      (ve = n),
      (U = !0),
      (Le = null),
      e !== null &&
        ((Se[xe++] = Ae),
        (Se[xe++] = Be),
        (Se[xe++] = Nn),
        (Ae = e.id),
        (Be = e.overflow),
        (Nn = n)),
      (n = ko(n, r.children)),
      (n.flags |= 4096),
      n);
}
function Ru(e, n, t) {
  e.lanes |= n;
  var r = e.alternate;
  r !== null && (r.lanes |= n), ki(e.return, n, t);
}
function Bl(e, n, t, r, l) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: t,
        tailMode: l,
      })
    : ((i.isBackwards = n),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = t),
      (i.tailMode = l));
}
function Fa(e, n, t) {
  var r = n.pendingProps,
    l = r.revealOrder,
    i = r.tail;
  if ((ie(e, n, r.children, t), (r = $.current), r & 2))
    (r = (r & 1) | 2), (n.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ru(e, t, n);
        else if (e.tag === 19) Ru(e, t, n);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((M($, r), !(n.mode & 1))) n.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; )
          (e = t.alternate),
            e !== null && Kr(e) === null && (l = t),
            (t = t.sibling);
        (t = l),
          t === null
            ? ((l = n.child), (n.child = null))
            : ((l = t.sibling), (t.sibling = null)),
          Bl(n, !1, l, t, i);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Kr(e) === null)) {
            n.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = t), (t = l), (l = e);
        }
        Bl(n, !0, t, null, i);
        break;
      case "together":
        Bl(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
  return n.child;
}
function Nr(e, n) {
  !(n.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (n.alternate = null), (n.flags |= 2));
}
function Ye(e, n, t) {
  if (
    (e !== null && (n.dependencies = e.dependencies),
    (Pn |= n.lanes),
    !(t & n.childLanes))
  )
    return null;
  if (e !== null && n.child !== e.child) throw Error(y(153));
  if (n.child !== null) {
    for (
      e = n.child, t = cn(e, e.pendingProps), n.child = t, t.return = n;
      e.sibling !== null;

    )
      (e = e.sibling), (t = t.sibling = cn(e, e.pendingProps)), (t.return = n);
    t.sibling = null;
  }
  return n.child;
}
function sd(e, n, t) {
  switch (n.tag) {
    case 3:
      Da(n), bn();
      break;
    case 5:
      ca(n);
      break;
    case 1:
      de(n.type) && Hr(n);
      break;
    case 4:
      mo(n, n.stateNode.containerInfo);
      break;
    case 10:
      var r = n.type._context,
        l = n.memoizedProps.value;
      M(Vr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = n.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (M($, $.current & 1), (n.flags |= 128), null)
          : t & n.child.childLanes
          ? Ia(e, n, t)
          : (M($, $.current & 1),
            (e = Ye(e, n, t)),
            e !== null ? e.sibling : null);
      M($, $.current & 1);
      break;
    case 19:
      if (((r = (t & n.childLanes) !== 0), e.flags & 128)) {
        if (r) return Fa(e, n, t);
        n.flags |= 128;
      }
      if (
        ((l = n.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        M($, $.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (n.lanes = 0), Oa(e, n, t);
  }
  return Ye(e, n, t);
}
var Ua, Li, $a, Ha;
Ua = function (e, n) {
  for (var t = n.child; t !== null; ) {
    if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
    else if (t.tag !== 4 && t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === n) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === n) return;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
};
Li = function () {};
$a = function (e, n, t, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = n.stateNode), kn(Ue.current);
    var i = null;
    switch (t) {
      case "input":
        (l = ql(e, l)), (r = ql(e, r)), (i = []);
        break;
      case "select":
        (l = A({}, l, { value: void 0 })),
          (r = A({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (l = ni(e, l)), (r = ni(e, r)), (i = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ur);
    }
    ri(t, r);
    var o;
    t = null;
    for (f in l)
      if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null)
        if (f === "style") {
          var u = l[f];
          for (o in u) u.hasOwnProperty(o) && (t || (t = {}), (t[o] = ""));
        } else
          f !== "dangerouslySetInnerHTML" &&
            f !== "children" &&
            f !== "suppressContentEditableWarning" &&
            f !== "suppressHydrationWarning" &&
            f !== "autoFocus" &&
            (Lt.hasOwnProperty(f)
              ? i || (i = [])
              : (i = i || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (
        ((u = l != null ? l[f] : void 0),
        r.hasOwnProperty(f) && s !== u && (s != null || u != null))
      )
        if (f === "style")
          if (u) {
            for (o in u)
              !u.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (t || (t = {}), (t[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                u[o] !== s[o] &&
                (t || (t = {}), (t[o] = s[o]));
          } else t || (i || (i = []), i.push(f, t)), (t = s);
        else
          f === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (i = i || []).push(f, s))
            : f === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(f, "" + s)
            : f !== "suppressContentEditableWarning" &&
              f !== "suppressHydrationWarning" &&
              (Lt.hasOwnProperty(f)
                ? (s != null && f === "onScroll" && D("scroll", e),
                  i || u === s || (i = []))
                : (i = i || []).push(f, s));
    }
    t && (i = i || []).push("style", t);
    var f = i;
    (n.updateQueue = f) && (n.flags |= 4);
  }
};
Ha = function (e, n, t, r) {
  t !== r && (n.flags |= 4);
};
function ht(e, n) {
  if (!U)
    switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; )
          n.alternate !== null && (t = n), (n = n.sibling);
        t === null ? (e.tail = null) : (t.sibling = null);
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; )
          t.alternate !== null && (r = t), (t = t.sibling);
        r === null
          ? n || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function te(e) {
  var n = e.alternate !== null && e.alternate.child === e.child,
    t = 0,
    r = 0;
  if (n)
    for (var l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (t |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = t), n;
}
function ad(e, n, t) {
  var r = n.pendingProps;
  switch ((oo(n), n.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return te(n), null;
    case 1:
      return de(n.type) && $r(), te(n), null;
    case 3:
      return (
        (r = n.stateNode),
        nt(),
        I(fe),
        I(le),
        vo(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (dr(n)
            ? (n.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(n.flags & 256)) ||
              ((n.flags |= 1024), Le !== null && (Ui(Le), (Le = null)))),
        Li(e, n),
        te(n),
        null
      );
    case 5:
      ho(n);
      var l = kn(Bt.current);
      if (((t = n.type), e !== null && n.stateNode != null))
        $a(e, n, t, r, l),
          e.ref !== n.ref && ((n.flags |= 512), (n.flags |= 2097152));
      else {
        if (!r) {
          if (n.stateNode === null) throw Error(y(166));
          return te(n), null;
        }
        if (((e = kn(Ue.current)), dr(n))) {
          (r = n.stateNode), (t = n.type);
          var i = n.memoizedProps;
          switch (((r[Ie] = n), (r[Ht] = i), (e = (n.mode & 1) !== 0), t)) {
            case "dialog":
              D("cancel", r), D("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < St.length; l++) D(St[l], r);
              break;
            case "source":
              D("error", r);
              break;
            case "img":
            case "image":
            case "link":
              D("error", r), D("load", r);
              break;
            case "details":
              D("toggle", r);
              break;
            case "input":
              Ao(r, i), D("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                D("invalid", r);
              break;
            case "textarea":
              Vo(r, i), D("invalid", r);
          }
          ri(t, i), (l = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var u = i[o];
              o === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (i.suppressHydrationWarning !== !0 &&
                      fr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (i.suppressHydrationWarning !== !0 &&
                      fr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Lt.hasOwnProperty(o) &&
                  u != null &&
                  o === "onScroll" &&
                  D("scroll", r);
            }
          switch (t) {
            case "input":
              rr(r), Bo(r, i, !0);
              break;
            case "textarea":
              rr(r), Wo(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Ur);
          }
          (r = l), (n.updateQueue = r), r !== null && (n.flags |= 4);
        } else {
          (o = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = ps(t)),
            e === "http://www.w3.org/1999/xhtml"
              ? t === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(t, { is: r.is }))
                : ((e = o.createElement(t)),
                  t === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, t)),
            (e[Ie] = n),
            (e[Ht] = r),
            Ua(e, n, !1, !1),
            (n.stateNode = e);
          e: {
            switch (((o = li(t, r)), t)) {
              case "dialog":
                D("cancel", e), D("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < St.length; l++) D(St[l], e);
                l = r;
                break;
              case "source":
                D("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                D("error", e), D("load", e), (l = r);
                break;
              case "details":
                D("toggle", e), (l = r);
                break;
              case "input":
                Ao(e, r), (l = ql(e, r)), D("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = A({}, r, { value: void 0 })),
                  D("invalid", e);
                break;
              case "textarea":
                Vo(e, r), (l = ni(e, r)), D("invalid", e);
                break;
              default:
                l = r;
            }
            ri(t, l), (u = l);
            for (i in u)
              if (u.hasOwnProperty(i)) {
                var s = u[i];
                i === "style"
                  ? vs(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ms(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (t !== "textarea" || s !== "") && Tt(e, s)
                    : typeof s == "number" && Tt(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (Lt.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && D("scroll", e)
                      : s != null && Qi(e, i, s, o));
              }
            switch (t) {
              case "input":
                rr(e), Bo(e, r, !1);
                break;
              case "textarea":
                rr(e), Wo(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + fn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Qn(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Qn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ur);
            }
            switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (n.flags |= 4);
        }
        n.ref !== null && ((n.flags |= 512), (n.flags |= 2097152));
      }
      return te(n), null;
    case 6:
      if (e && n.stateNode != null) Ha(e, n, e.memoizedProps, r);
      else {
        if (typeof r != "string" && n.stateNode === null) throw Error(y(166));
        if (((t = kn(Bt.current)), kn(Ue.current), dr(n))) {
          if (
            ((r = n.stateNode),
            (t = n.memoizedProps),
            (r[Ie] = n),
            (i = r.nodeValue !== t) && ((e = ve), e !== null))
          )
            switch (e.tag) {
              case 3:
                fr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  fr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
          i && (n.flags |= 4);
        } else
          (r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r)),
            (r[Ie] = n),
            (n.stateNode = r);
      }
      return te(n), null;
    case 13:
      if (
        (I($),
        (r = n.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (U && he !== null && n.mode & 1 && !(n.flags & 128))
          ra(), bn(), (n.flags |= 98560), (i = !1);
        else if (((i = dr(n)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(y(318));
            if (
              ((i = n.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(y(317));
            i[Ie] = n;
          } else
            bn(), !(n.flags & 128) && (n.memoizedState = null), (n.flags |= 4);
          te(n), (i = !1);
        } else Le !== null && (Ui(Le), (Le = null)), (i = !0);
        if (!i) return n.flags & 65536 ? n : null;
      }
      return n.flags & 128
        ? ((n.lanes = t), n)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((n.child.flags |= 8192),
            n.mode & 1 &&
              (e === null || $.current & 1 ? X === 0 && (X = 3) : Po())),
          n.updateQueue !== null && (n.flags |= 4),
          te(n),
          null);
    case 4:
      return (
        nt(), Li(e, n), e === null && Ut(n.stateNode.containerInfo), te(n), null
      );
    case 10:
      return co(n.type._context), te(n), null;
    case 17:
      return de(n.type) && $r(), te(n), null;
    case 19:
      if ((I($), (i = n.memoizedState), i === null)) return te(n), null;
      if (((r = (n.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) ht(i, !1);
        else {
          if (X !== 0 || (e !== null && e.flags & 128))
            for (e = n.child; e !== null; ) {
              if (((o = Kr(e)), o !== null)) {
                for (
                  n.flags |= 128,
                    ht(i, !1),
                    r = o.updateQueue,
                    r !== null && ((n.updateQueue = r), (n.flags |= 4)),
                    n.subtreeFlags = 0,
                    r = t,
                    t = n.child;
                  t !== null;

                )
                  (i = t),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (t = t.sibling);
                return M($, ($.current & 1) | 2), n.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            Q() > rt &&
            ((n.flags |= 128), (r = !0), ht(i, !1), (n.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Kr(o)), e !== null)) {
            if (
              ((n.flags |= 128),
              (r = !0),
              (t = e.updateQueue),
              t !== null && ((n.updateQueue = t), (n.flags |= 4)),
              ht(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !U)
            )
              return te(n), null;
          } else
            2 * Q() - i.renderingStartTime > rt &&
              t !== 1073741824 &&
              ((n.flags |= 128), (r = !0), ht(i, !1), (n.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = n.child), (n.child = o))
          : ((t = i.last),
            t !== null ? (t.sibling = o) : (n.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((n = i.tail),
          (i.rendering = n),
          (i.tail = n.sibling),
          (i.renderingStartTime = Q()),
          (n.sibling = null),
          (t = $.current),
          M($, r ? (t & 1) | 2 : t & 1),
          n)
        : (te(n), null);
    case 22:
    case 23:
      return (
        jo(),
        (r = n.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (n.flags |= 8192),
        r && n.mode & 1
          ? me & 1073741824 && (te(n), n.subtreeFlags & 6 && (n.flags |= 8192))
          : te(n),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, n.tag));
}
function cd(e, n) {
  switch ((oo(n), n.tag)) {
    case 1:
      return (
        de(n.type) && $r(),
        (e = n.flags),
        e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 3:
      return (
        nt(),
        I(fe),
        I(le),
        vo(),
        (e = n.flags),
        e & 65536 && !(e & 128) ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 5:
      return ho(n), null;
    case 13:
      if ((I($), (e = n.memoizedState), e !== null && e.dehydrated !== null)) {
        if (n.alternate === null) throw Error(y(340));
        bn();
      }
      return (
        (e = n.flags), e & 65536 ? ((n.flags = (e & -65537) | 128), n) : null
      );
    case 19:
      return I($), null;
    case 4:
      return nt(), null;
    case 10:
      return co(n.type._context), null;
    case 22:
    case 23:
      return jo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var hr = !1,
  re = !1,
  fd = typeof WeakSet == "function" ? WeakSet : Set,
  k = null;
function Vn(e, n) {
  var t = e.ref;
  if (t !== null)
    if (typeof t == "function")
      try {
        t(null);
      } catch (r) {
        B(e, n, r);
      }
    else t.current = null;
}
function Ti(e, n, t) {
  try {
    t();
  } catch (r) {
    B(e, n, r);
  }
}
var Ou = !1;
function dd(e, n) {
  if (((mi = Dr), (e = Ws()), lo(e))) {
    if ("selectionStart" in e)
      var t = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        t = ((t = e.ownerDocument) && t.defaultView) || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, i.nodeType;
          } catch {
            t = null;
            break e;
          }
          var o = 0,
            u = -1,
            s = -1,
            f = 0,
            v = 0,
            h = e,
            m = null;
          n: for (;;) {
            for (
              var w;
              h !== t || (l !== 0 && h.nodeType !== 3) || (u = o + l),
                h !== i || (r !== 0 && h.nodeType !== 3) || (s = o + r),
                h.nodeType === 3 && (o += h.nodeValue.length),
                (w = h.firstChild) !== null;

            )
              (m = h), (h = w);
            for (;;) {
              if (h === e) break n;
              if (
                (m === t && ++f === l && (u = o),
                m === i && ++v === r && (s = o),
                (w = h.nextSibling) !== null)
              )
                break;
              (h = m), (m = h.parentNode);
            }
            h = w;
          }
          t = u === -1 || s === -1 ? null : { start: u, end: s };
        } else t = null;
      }
    t = t || { start: 0, end: 0 };
  } else t = null;
  for (hi = { focusedElem: e, selectionRange: t }, Dr = !1, k = n; k !== null; )
    if (((n = k), (e = n.child), (n.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = n), (k = e);
    else
      for (; k !== null; ) {
        n = k;
        try {
          var S = n.alternate;
          if (n.flags & 1024)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var x = S.memoizedProps,
                    F = S.memoizedState,
                    d = n.stateNode,
                    a = d.getSnapshotBeforeUpdate(
                      n.elementType === n.type ? x : Pe(n.type, x),
                      F
                    );
                  d.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var p = n.stateNode.containerInfo;
                p.nodeType === 1
                  ? (p.textContent = "")
                  : p.nodeType === 9 &&
                    p.documentElement &&
                    p.removeChild(p.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (g) {
          B(n, n.return, g);
        }
        if (((e = n.sibling), e !== null)) {
          (e.return = n.return), (k = e);
          break;
        }
        k = n.return;
      }
  return (S = Ou), (Ou = !1), S;
}
function jt(e, n, t) {
  var r = n.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        (l.destroy = void 0), i !== void 0 && Ti(n, t, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function al(e, n) {
  if (
    ((n = n.updateQueue), (n = n !== null ? n.lastEffect : null), n !== null)
  ) {
    var t = (n = n.next);
    do {
      if ((t.tag & e) === e) {
        var r = t.create;
        t.destroy = r();
      }
      t = t.next;
    } while (t !== n);
  }
}
function Ri(e) {
  var n = e.ref;
  if (n !== null) {
    var t = e.stateNode;
    switch (e.tag) {
      case 5:
        e = t;
        break;
      default:
        e = t;
    }
    typeof n == "function" ? n(e) : (n.current = e);
  }
}
function Aa(e) {
  var n = e.alternate;
  n !== null && ((e.alternate = null), Aa(n)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((n = e.stateNode),
      n !== null &&
        (delete n[Ie], delete n[Ht], delete n[yi], delete n[Xf], delete n[Gf])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Ba(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Mu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ba(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Oi(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      n
        ? t.nodeType === 8
          ? t.parentNode.insertBefore(e, n)
          : t.insertBefore(e, n)
        : (t.nodeType === 8
            ? ((n = t.parentNode), n.insertBefore(e, t))
            : ((n = t), n.appendChild(e)),
          (t = t._reactRootContainer),
          t != null || n.onclick !== null || (n.onclick = Ur));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Oi(e, n, t), e = e.sibling; e !== null; ) Oi(e, n, t), (e = e.sibling);
}
function Mi(e, n, t) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), n ? t.insertBefore(e, n) : t.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Mi(e, n, t), e = e.sibling; e !== null; ) Mi(e, n, t), (e = e.sibling);
}
var q = null,
  ze = !1;
function Ge(e, n, t) {
  for (t = t.child; t !== null; ) Va(e, n, t), (t = t.sibling);
}
function Va(e, n, t) {
  if (Fe && typeof Fe.onCommitFiberUnmount == "function")
    try {
      Fe.onCommitFiberUnmount(nl, t);
    } catch {}
  switch (t.tag) {
    case 5:
      re || Vn(t, n);
    case 6:
      var r = q,
        l = ze;
      (q = null),
        Ge(e, n, t),
        (q = r),
        (ze = l),
        q !== null &&
          (ze
            ? ((e = q),
              (t = t.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t))
            : q.removeChild(t.stateNode));
      break;
    case 18:
      q !== null &&
        (ze
          ? ((e = q),
            (t = t.stateNode),
            e.nodeType === 8
              ? Dl(e.parentNode, t)
              : e.nodeType === 1 && Dl(e, t),
            Dt(e))
          : Dl(q, t.stateNode));
      break;
    case 4:
      (r = q),
        (l = ze),
        (q = t.stateNode.containerInfo),
        (ze = !0),
        Ge(e, n, t),
        (q = r),
        (ze = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !re &&
        ((r = t.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var i = l,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && Ti(t, n, o),
            (l = l.next);
        } while (l !== r);
      }
      Ge(e, n, t);
      break;
    case 1:
      if (
        !re &&
        (Vn(t, n),
        (r = t.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = t.memoizedProps),
            (r.state = t.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          B(t, n, u);
        }
      Ge(e, n, t);
      break;
    case 21:
      Ge(e, n, t);
      break;
    case 22:
      t.mode & 1
        ? ((re = (r = re) || t.memoizedState !== null), Ge(e, n, t), (re = r))
        : Ge(e, n, t);
      break;
    default:
      Ge(e, n, t);
  }
}
function Du(e) {
  var n = e.updateQueue;
  if (n !== null) {
    e.updateQueue = null;
    var t = e.stateNode;
    t === null && (t = e.stateNode = new fd()),
      n.forEach(function (r) {
        var l = xd.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
  }
}
function je(e, n) {
  var t = n.deletions;
  if (t !== null)
    for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var i = e,
          o = n,
          u = o;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (q = u.stateNode), (ze = !1);
              break e;
            case 3:
              (q = u.stateNode.containerInfo), (ze = !0);
              break e;
            case 4:
              (q = u.stateNode.containerInfo), (ze = !0);
              break e;
          }
          u = u.return;
        }
        if (q === null) throw Error(y(160));
        Va(i, o, l), (q = null), (ze = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (f) {
        B(l, n, f);
      }
    }
  if (n.subtreeFlags & 12854)
    for (n = n.child; n !== null; ) Wa(n, e), (n = n.sibling);
}
function Wa(e, n) {
  var t = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((je(n, e), Me(e), r & 4)) {
        try {
          jt(3, e, e.return), al(3, e);
        } catch (x) {
          B(e, e.return, x);
        }
        try {
          jt(5, e, e.return);
        } catch (x) {
          B(e, e.return, x);
        }
      }
      break;
    case 1:
      je(n, e), Me(e), r & 512 && t !== null && Vn(t, t.return);
      break;
    case 5:
      if (
        (je(n, e),
        Me(e),
        r & 512 && t !== null && Vn(t, t.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Tt(l, "");
        } catch (x) {
          B(e, e.return, x);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var i = e.memoizedProps,
          o = t !== null ? t.memoizedProps : i,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && i.type === "radio" && i.name != null && fs(l, i),
              li(u, o);
            var f = li(u, i);
            for (o = 0; o < s.length; o += 2) {
              var v = s[o],
                h = s[o + 1];
              v === "style"
                ? vs(l, h)
                : v === "dangerouslySetInnerHTML"
                ? ms(l, h)
                : v === "children"
                ? Tt(l, h)
                : Qi(l, v, h, f);
            }
            switch (u) {
              case "input":
                bl(l, i);
                break;
              case "textarea":
                ds(l, i);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!i.multiple;
                var w = i.value;
                w != null
                  ? Qn(l, !!i.multiple, w, !1)
                  : m !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Qn(l, !!i.multiple, i.defaultValue, !0)
                      : Qn(l, !!i.multiple, i.multiple ? [] : "", !1));
            }
            l[Ht] = i;
          } catch (x) {
            B(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((je(n, e), Me(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (i = e.memoizedProps);
        try {
          l.nodeValue = i;
        } catch (x) {
          B(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (je(n, e), Me(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
      )
        try {
          Dt(n.containerInfo);
        } catch (x) {
          B(e, e.return, x);
        }
      break;
    case 4:
      je(n, e), Me(e);
      break;
    case 13:
      je(n, e),
        Me(e),
        (l = e.child),
        l.flags & 8192 &&
          ((i = l.memoizedState !== null),
          (l.stateNode.isHidden = i),
          !i ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (_o = Q())),
        r & 4 && Du(e);
      break;
    case 22:
      if (
        ((v = t !== null && t.memoizedState !== null),
        e.mode & 1 ? ((re = (f = re) || v), je(n, e), (re = f)) : je(n, e),
        Me(e),
        r & 8192)
      ) {
        if (
          ((f = e.memoizedState !== null),
          (e.stateNode.isHidden = f) && !v && e.mode & 1)
        )
          for (k = e, v = e.child; v !== null; ) {
            for (h = k = v; k !== null; ) {
              switch (((m = k), (w = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  jt(4, m, m.return);
                  break;
                case 1:
                  Vn(m, m.return);
                  var S = m.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = m), (t = m.return);
                    try {
                      (n = r),
                        (S.props = n.memoizedProps),
                        (S.state = n.memoizedState),
                        S.componentWillUnmount();
                    } catch (x) {
                      B(r, t, x);
                    }
                  }
                  break;
                case 5:
                  Vn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    Fu(h);
                    continue;
                  }
              }
              w !== null ? ((w.return = m), (k = w)) : Fu(h);
            }
            v = v.sibling;
          }
        e: for (v = null, h = e; ; ) {
          if (h.tag === 5) {
            if (v === null) {
              v = h;
              try {
                (l = h.stateNode),
                  f
                    ? ((i = l.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((u = h.stateNode),
                      (s = h.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = hs("display", o)));
              } catch (x) {
                B(e, e.return, x);
              }
            }
          } else if (h.tag === 6) {
            if (v === null)
              try {
                h.stateNode.nodeValue = f ? "" : h.memoizedProps;
              } catch (x) {
                B(e, e.return, x);
              }
          } else if (
            ((h.tag !== 22 && h.tag !== 23) ||
              h.memoizedState === null ||
              h === e) &&
            h.child !== null
          ) {
            (h.child.return = h), (h = h.child);
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            v === h && (v = null), (h = h.return);
          }
          v === h && (v = null), (h.sibling.return = h.return), (h = h.sibling);
        }
      }
      break;
    case 19:
      je(n, e), Me(e), r & 4 && Du(e);
      break;
    case 21:
      break;
    default:
      je(n, e), Me(e);
  }
}
function Me(e) {
  var n = e.flags;
  if (n & 2) {
    try {
      e: {
        for (var t = e.return; t !== null; ) {
          if (Ba(t)) {
            var r = t;
            break e;
          }
          t = t.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Tt(l, ""), (r.flags &= -33));
          var i = Mu(e);
          Mi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            u = Mu(e);
          Oi(e, u, o);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      B(e, e.return, s);
    }
    e.flags &= -3;
  }
  n & 4096 && (e.flags &= -4097);
}
function pd(e, n, t) {
  (k = e), Qa(e);
}
function Qa(e, n, t) {
  for (var r = (e.mode & 1) !== 0; k !== null; ) {
    var l = k,
      i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || hr;
      if (!o) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || re;
        u = hr;
        var f = re;
        if (((hr = o), (re = s) && !f))
          for (k = l; k !== null; )
            (o = k),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Uu(l)
                : s !== null
                ? ((s.return = o), (k = s))
                : Uu(l);
        for (; i !== null; ) (k = i), Qa(i), (i = i.sibling);
        (k = l), (hr = u), (re = f);
      }
      Iu(e);
    } else
      l.subtreeFlags & 8772 && i !== null ? ((i.return = l), (k = i)) : Iu(e);
  }
}
function Iu(e) {
  for (; k !== null; ) {
    var n = k;
    if (n.flags & 8772) {
      var t = n.alternate;
      try {
        if (n.flags & 8772)
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              re || al(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !re)
                if (t === null) r.componentDidMount();
                else {
                  var l =
                    n.elementType === n.type
                      ? t.memoizedProps
                      : Pe(n.type, t.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    t.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = n.updateQueue;
              i !== null && wu(n, i, r);
              break;
            case 3:
              var o = n.updateQueue;
              if (o !== null) {
                if (((t = null), n.child !== null))
                  switch (n.child.tag) {
                    case 5:
                      t = n.child.stateNode;
                      break;
                    case 1:
                      t = n.child.stateNode;
                  }
                wu(n, o, t);
              }
              break;
            case 5:
              var u = n.stateNode;
              if (t === null && n.flags & 4) {
                t = u;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (n.memoizedState === null) {
                var f = n.alternate;
                if (f !== null) {
                  var v = f.memoizedState;
                  if (v !== null) {
                    var h = v.dehydrated;
                    h !== null && Dt(h);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        re || (n.flags & 512 && Ri(n));
      } catch (m) {
        B(n, n.return, m);
      }
    }
    if (n === e) {
      k = null;
      break;
    }
    if (((t = n.sibling), t !== null)) {
      (t.return = n.return), (k = t);
      break;
    }
    k = n.return;
  }
}
function Fu(e) {
  for (; k !== null; ) {
    var n = k;
    if (n === e) {
      k = null;
      break;
    }
    var t = n.sibling;
    if (t !== null) {
      (t.return = n.return), (k = t);
      break;
    }
    k = n.return;
  }
}
function Uu(e) {
  for (; k !== null; ) {
    var n = k;
    try {
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          var t = n.return;
          try {
            al(4, n);
          } catch (s) {
            B(n, t, s);
          }
          break;
        case 1:
          var r = n.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = n.return;
            try {
              r.componentDidMount();
            } catch (s) {
              B(n, l, s);
            }
          }
          var i = n.return;
          try {
            Ri(n);
          } catch (s) {
            B(n, i, s);
          }
          break;
        case 5:
          var o = n.return;
          try {
            Ri(n);
          } catch (s) {
            B(n, o, s);
          }
      }
    } catch (s) {
      B(n, n.return, s);
    }
    if (n === e) {
      k = null;
      break;
    }
    var u = n.sibling;
    if (u !== null) {
      (u.return = n.return), (k = u);
      break;
    }
    k = n.return;
  }
}
var md = Math.ceil,
  Gr = Xe.ReactCurrentDispatcher,
  Co = Xe.ReactCurrentOwner,
  Ce = Xe.ReactCurrentBatchConfig,
  R = 0,
  J = null,
  K = null,
  b = 0,
  me = 0,
  Wn = mn(0),
  X = 0,
  Kt = null,
  Pn = 0,
  cl = 0,
  Eo = 0,
  Pt = null,
  ae = null,
  _o = 0,
  rt = 1 / 0,
  $e = null,
  Zr = !1,
  Di = null,
  sn = null,
  vr = !1,
  nn = null,
  Jr = 0,
  zt = 0,
  Ii = null,
  jr = -1,
  Pr = 0;
function oe() {
  return R & 6 ? Q() : jr !== -1 ? jr : (jr = Q());
}
function an(e) {
  return e.mode & 1
    ? R & 2 && b !== 0
      ? b & -b
      : Jf.transition !== null
      ? (Pr === 0 && (Pr = Ps()), Pr)
      : ((e = O),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ds(e.type))),
        e)
    : 1;
}
function Re(e, n, t, r) {
  if (50 < zt) throw ((zt = 0), (Ii = null), Error(y(185)));
  Gt(e, t, r),
    (!(R & 2) || e !== J) &&
      (e === J && (!(R & 2) && (cl |= t), X === 4 && be(e, b)),
      pe(e, r),
      t === 1 && R === 0 && !(n.mode & 1) && ((rt = Q() + 500), ol && hn()));
}
function pe(e, n) {
  var t = e.callbackNode;
  Zc(e, n);
  var r = Mr(e, e === J ? b : 0);
  if (r === 0)
    t !== null && Yo(t), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((n = r & -r), e.callbackPriority !== n)) {
    if ((t != null && Yo(t), n === 1))
      e.tag === 0 ? Zf($u.bind(null, e)) : ea($u.bind(null, e)),
        Kf(function () {
          !(R & 6) && hn();
        }),
        (t = null);
    else {
      switch (zs(r)) {
        case 1:
          t = Zi;
          break;
        case 4:
          t = Ns;
          break;
        case 16:
          t = Or;
          break;
        case 536870912:
          t = js;
          break;
        default:
          t = Or;
      }
      t = ba(t, Ka.bind(null, e));
    }
    (e.callbackPriority = n), (e.callbackNode = t);
  }
}
function Ka(e, n) {
  if (((jr = -1), (Pr = 0), R & 6)) throw Error(y(327));
  var t = e.callbackNode;
  if (Zn() && e.callbackNode !== t) return null;
  var r = Mr(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || n) n = qr(e, r);
  else {
    n = r;
    var l = R;
    R |= 2;
    var i = Xa();
    (J !== e || b !== n) && (($e = null), (rt = Q() + 500), Cn(e, n));
    do
      try {
        gd();
        break;
      } catch (u) {
        Ya(e, u);
      }
    while (!0);
    ao(),
      (Gr.current = i),
      (R = l),
      K !== null ? (n = 0) : ((J = null), (b = 0), (n = X));
  }
  if (n !== 0) {
    if (
      (n === 2 && ((l = ai(e)), l !== 0 && ((r = l), (n = Fi(e, l)))), n === 1)
    )
      throw ((t = Kt), Cn(e, 0), be(e, r), pe(e, Q()), t);
    if (n === 6) be(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !hd(l) &&
          ((n = qr(e, r)),
          n === 2 && ((i = ai(e)), i !== 0 && ((r = i), (n = Fi(e, i)))),
          n === 1))
      )
        throw ((t = Kt), Cn(e, 0), be(e, r), pe(e, Q()), t);
      switch (((e.finishedWork = l), (e.finishedLanes = r), n)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          wn(e, ae, $e);
          break;
        case 3:
          if (
            (be(e, r), (r & 130023424) === r && ((n = _o + 500 - Q()), 10 < n))
          ) {
            if (Mr(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              oe(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = gi(wn.bind(null, e, ae, $e), n);
            break;
          }
          wn(e, ae, $e);
          break;
        case 4:
          if ((be(e, r), (r & 4194240) === r)) break;
          for (n = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Te(r);
            (i = 1 << o), (o = n[o]), o > l && (l = o), (r &= ~i);
          }
          if (
            ((r = l),
            (r = Q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * md(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = gi(wn.bind(null, e, ae, $e), r);
            break;
          }
          wn(e, ae, $e);
          break;
        case 5:
          wn(e, ae, $e);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return pe(e, Q()), e.callbackNode === t ? Ka.bind(null, e) : null;
}
function Fi(e, n) {
  var t = Pt;
  return (
    e.current.memoizedState.isDehydrated && (Cn(e, n).flags |= 256),
    (e = qr(e, n)),
    e !== 2 && ((n = ae), (ae = t), n !== null && Ui(n)),
    e
  );
}
function Ui(e) {
  ae === null ? (ae = e) : ae.push.apply(ae, e);
}
function hd(e) {
  for (var n = e; ; ) {
    if (n.flags & 16384) {
      var t = n.updateQueue;
      if (t !== null && ((t = t.stores), t !== null))
        for (var r = 0; r < t.length; r++) {
          var l = t[r],
            i = l.getSnapshot;
          l = l.value;
          try {
            if (!Oe(i(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((t = n.child), n.subtreeFlags & 16384 && t !== null))
      (t.return = n), (n = t);
    else {
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return !0;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }
  return !0;
}
function be(e, n) {
  for (
    n &= ~Eo,
      n &= ~cl,
      e.suspendedLanes |= n,
      e.pingedLanes &= ~n,
      e = e.expirationTimes;
    0 < n;

  ) {
    var t = 31 - Te(n),
      r = 1 << t;
    (e[t] = -1), (n &= ~r);
  }
}
function $u(e) {
  if (R & 6) throw Error(y(327));
  Zn();
  var n = Mr(e, 0);
  if (!(n & 1)) return pe(e, Q()), null;
  var t = qr(e, n);
  if (e.tag !== 0 && t === 2) {
    var r = ai(e);
    r !== 0 && ((n = r), (t = Fi(e, r)));
  }
  if (t === 1) throw ((t = Kt), Cn(e, 0), be(e, n), pe(e, Q()), t);
  if (t === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = n),
    wn(e, ae, $e),
    pe(e, Q()),
    null
  );
}
function No(e, n) {
  var t = R;
  R |= 1;
  try {
    return e(n);
  } finally {
    (R = t), R === 0 && ((rt = Q() + 500), ol && hn());
  }
}
function zn(e) {
  nn !== null && nn.tag === 0 && !(R & 6) && Zn();
  var n = R;
  R |= 1;
  var t = Ce.transition,
    r = O;
  try {
    if (((Ce.transition = null), (O = 1), e)) return e();
  } finally {
    (O = r), (Ce.transition = t), (R = n), !(R & 6) && hn();
  }
}
function jo() {
  (me = Wn.current), I(Wn);
}
function Cn(e, n) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var t = e.timeoutHandle;
  if ((t !== -1 && ((e.timeoutHandle = -1), Qf(t)), K !== null))
    for (t = K.return; t !== null; ) {
      var r = t;
      switch ((oo(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && $r();
          break;
        case 3:
          nt(), I(fe), I(le), vo();
          break;
        case 5:
          ho(r);
          break;
        case 4:
          nt();
          break;
        case 13:
          I($);
          break;
        case 19:
          I($);
          break;
        case 10:
          co(r.type._context);
          break;
        case 22:
        case 23:
          jo();
      }
      t = t.return;
    }
  if (
    ((J = e),
    (K = e = cn(e.current, null)),
    (b = me = n),
    (X = 0),
    (Kt = null),
    (Eo = cl = Pn = 0),
    (ae = Pt = null),
    xn !== null)
  ) {
    for (n = 0; n < xn.length; n++)
      if (((t = xn[n]), (r = t.interleaved), r !== null)) {
        t.interleaved = null;
        var l = r.next,
          i = t.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = l), (r.next = o);
        }
        t.pending = r;
      }
    xn = null;
  }
  return e;
}
function Ya(e, n) {
  do {
    var t = K;
    try {
      if ((ao(), (Er.current = Xr), Yr)) {
        for (var r = H.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Yr = !1;
      }
      if (
        ((jn = 0),
        (Z = Y = H = null),
        (Nt = !1),
        (Vt = 0),
        (Co.current = null),
        t === null || t.return === null)
      ) {
        (X = 1), (Kt = n), (K = null);
        break;
      }
      e: {
        var i = e,
          o = t.return,
          u = t,
          s = n;
        if (
          ((n = b),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var f = s,
            v = u,
            h = v.tag;
          if (!(v.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var m = v.alternate;
            m
              ? ((v.updateQueue = m.updateQueue),
                (v.memoizedState = m.memoizedState),
                (v.lanes = m.lanes))
              : ((v.updateQueue = null), (v.memoizedState = null));
          }
          var w = Nu(o);
          if (w !== null) {
            (w.flags &= -257),
              ju(w, o, u, i, n),
              w.mode & 1 && _u(i, f, n),
              (n = w),
              (s = f);
            var S = n.updateQueue;
            if (S === null) {
              var x = new Set();
              x.add(s), (n.updateQueue = x);
            } else S.add(s);
            break e;
          } else {
            if (!(n & 1)) {
              _u(i, f, n), Po();
              break e;
            }
            s = Error(y(426));
          }
        } else if (U && u.mode & 1) {
          var F = Nu(o);
          if (F !== null) {
            !(F.flags & 65536) && (F.flags |= 256),
              ju(F, o, u, i, n),
              uo(tt(s, u));
            break e;
          }
        }
        (i = s = tt(s, u)),
          X !== 4 && (X = 2),
          Pt === null ? (Pt = [i]) : Pt.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (n &= -n), (i.lanes |= n);
              var d = La(i, s, n);
              yu(i, d);
              break e;
            case 1:
              u = s;
              var a = i.type,
                p = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (p !== null &&
                    typeof p.componentDidCatch == "function" &&
                    (sn === null || !sn.has(p))))
              ) {
                (i.flags |= 65536), (n &= -n), (i.lanes |= n);
                var g = Ta(i, u, n);
                yu(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Za(t);
    } catch (C) {
      (n = C), K === t && t !== null && (K = t = t.return);
      continue;
    }
    break;
  } while (!0);
}
function Xa() {
  var e = Gr.current;
  return (Gr.current = Xr), e === null ? Xr : e;
}
function Po() {
  (X === 0 || X === 3 || X === 2) && (X = 4),
    J === null || (!(Pn & 268435455) && !(cl & 268435455)) || be(J, b);
}
function qr(e, n) {
  var t = R;
  R |= 2;
  var r = Xa();
  (J !== e || b !== n) && (($e = null), Cn(e, n));
  do
    try {
      vd();
      break;
    } catch (l) {
      Ya(e, l);
    }
  while (!0);
  if ((ao(), (R = t), (Gr.current = r), K !== null)) throw Error(y(261));
  return (J = null), (b = 0), X;
}
function vd() {
  for (; K !== null; ) Ga(K);
}
function gd() {
  for (; K !== null && !Ac(); ) Ga(K);
}
function Ga(e) {
  var n = qa(e.alternate, e, me);
  (e.memoizedProps = e.pendingProps),
    n === null ? Za(e) : (K = n),
    (Co.current = null);
}
function Za(e) {
  var n = e;
  do {
    var t = n.alternate;
    if (((e = n.return), n.flags & 32768)) {
      if (((t = cd(t, n)), t !== null)) {
        (t.flags &= 32767), (K = t);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (X = 6), (K = null);
        return;
      }
    } else if (((t = ad(t, n, me)), t !== null)) {
      K = t;
      return;
    }
    if (((n = n.sibling), n !== null)) {
      K = n;
      return;
    }
    K = n = e;
  } while (n !== null);
  X === 0 && (X = 5);
}
function wn(e, n, t) {
  var r = O,
    l = Ce.transition;
  try {
    (Ce.transition = null), (O = 1), yd(e, n, t, r);
  } finally {
    (Ce.transition = l), (O = r);
  }
  return null;
}
function yd(e, n, t, r) {
  do Zn();
  while (nn !== null);
  if (R & 6) throw Error(y(327));
  t = e.finishedWork;
  var l = e.finishedLanes;
  if (t === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), t === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = t.lanes | t.childLanes;
  if (
    (Jc(e, i),
    e === J && ((K = J = null), (b = 0)),
    (!(t.subtreeFlags & 2064) && !(t.flags & 2064)) ||
      vr ||
      ((vr = !0),
      ba(Or, function () {
        return Zn(), null;
      })),
    (i = (t.flags & 15990) !== 0),
    t.subtreeFlags & 15990 || i)
  ) {
    (i = Ce.transition), (Ce.transition = null);
    var o = O;
    O = 1;
    var u = R;
    (R |= 4),
      (Co.current = null),
      dd(e, t),
      Wa(t, e),
      Uf(hi),
      (Dr = !!mi),
      (hi = mi = null),
      (e.current = t),
      pd(t),
      Bc(),
      (R = u),
      (O = o),
      (Ce.transition = i);
  } else e.current = t;
  if (
    (vr && ((vr = !1), (nn = e), (Jr = l)),
    (i = e.pendingLanes),
    i === 0 && (sn = null),
    Qc(t.stateNode),
    pe(e, Q()),
    n !== null)
  )
    for (r = e.onRecoverableError, t = 0; t < n.length; t++)
      (l = n[t]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Zr) throw ((Zr = !1), (e = Di), (Di = null), e);
  return (
    Jr & 1 && e.tag !== 0 && Zn(),
    (i = e.pendingLanes),
    i & 1 ? (e === Ii ? zt++ : ((zt = 0), (Ii = e))) : (zt = 0),
    hn(),
    null
  );
}
function Zn() {
  if (nn !== null) {
    var e = zs(Jr),
      n = Ce.transition,
      t = O;
    try {
      if (((Ce.transition = null), (O = 16 > e ? 16 : e), nn === null))
        var r = !1;
      else {
        if (((e = nn), (nn = null), (Jr = 0), R & 6)) throw Error(y(331));
        var l = R;
        for (R |= 4, k = e.current; k !== null; ) {
          var i = k,
            o = i.child;
          if (k.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                for (k = f; k !== null; ) {
                  var v = k;
                  switch (v.tag) {
                    case 0:
                    case 11:
                    case 15:
                      jt(8, v, i);
                  }
                  var h = v.child;
                  if (h !== null) (h.return = v), (k = h);
                  else
                    for (; k !== null; ) {
                      v = k;
                      var m = v.sibling,
                        w = v.return;
                      if ((Aa(v), v === f)) {
                        k = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = w), (k = m);
                        break;
                      }
                      k = w;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var x = S.child;
                if (x !== null) {
                  S.child = null;
                  do {
                    var F = x.sibling;
                    (x.sibling = null), (x = F);
                  } while (x !== null);
                }
              }
              k = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (k = o);
          else
            e: for (; k !== null; ) {
              if (((i = k), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    jt(9, i, i.return);
                }
              var d = i.sibling;
              if (d !== null) {
                (d.return = i.return), (k = d);
                break e;
              }
              k = i.return;
            }
        }
        var a = e.current;
        for (k = a; k !== null; ) {
          o = k;
          var p = o.child;
          if (o.subtreeFlags & 2064 && p !== null) (p.return = o), (k = p);
          else
            e: for (o = a; k !== null; ) {
              if (((u = k), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      al(9, u);
                  }
                } catch (C) {
                  B(u, u.return, C);
                }
              if (u === o) {
                k = null;
                break e;
              }
              var g = u.sibling;
              if (g !== null) {
                (g.return = u.return), (k = g);
                break e;
              }
              k = u.return;
            }
        }
        if (
          ((R = l), hn(), Fe && typeof Fe.onPostCommitFiberRoot == "function")
        )
          try {
            Fe.onPostCommitFiberRoot(nl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (O = t), (Ce.transition = n);
    }
  }
  return !1;
}
function Hu(e, n, t) {
  (n = tt(t, n)),
    (n = La(e, n, 1)),
    (e = un(e, n, 1)),
    (n = oe()),
    e !== null && (Gt(e, 1, n), pe(e, n));
}
function B(e, n, t) {
  if (e.tag === 3) Hu(e, e, t);
  else
    for (; n !== null; ) {
      if (n.tag === 3) {
        Hu(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (
          typeof n.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (sn === null || !sn.has(r)))
        ) {
          (e = tt(t, e)),
            (e = Ta(n, e, 1)),
            (n = un(n, e, 1)),
            (e = oe()),
            n !== null && (Gt(n, 1, e), pe(n, e));
          break;
        }
      }
      n = n.return;
    }
}
function wd(e, n, t) {
  var r = e.pingCache;
  r !== null && r.delete(n),
    (n = oe()),
    (e.pingedLanes |= e.suspendedLanes & t),
    J === e &&
      (b & t) === t &&
      (X === 4 || (X === 3 && (b & 130023424) === b && 500 > Q() - _o)
        ? Cn(e, 0)
        : (Eo |= t)),
    pe(e, n);
}
function Ja(e, n) {
  n === 0 &&
    (e.mode & 1
      ? ((n = or), (or <<= 1), !(or & 130023424) && (or = 4194304))
      : (n = 1));
  var t = oe();
  (e = Ke(e, n)), e !== null && (Gt(e, n, t), pe(e, t));
}
function Sd(e) {
  var n = e.memoizedState,
    t = 0;
  n !== null && (t = n.retryLane), Ja(e, t);
}
function xd(e, n) {
  var t = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (t = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(n), Ja(e, t);
}
var qa;
qa = function (e, n, t) {
  if (e !== null)
    if (e.memoizedProps !== n.pendingProps || fe.current) ce = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return (ce = !1), sd(e, n, t);
      ce = !!(e.flags & 131072);
    }
  else (ce = !1), U && n.flags & 1048576 && na(n, Br, n.index);
  switch (((n.lanes = 0), n.tag)) {
    case 2:
      var r = n.type;
      Nr(e, n), (e = n.pendingProps);
      var l = qn(n, le.current);
      Gn(n, t), (l = yo(null, n, r, e, l, t));
      var i = wo();
      return (
        (n.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((n.tag = 1),
            (n.memoizedState = null),
            (n.updateQueue = null),
            de(r) ? ((i = !0), Hr(n)) : (i = !1),
            (n.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            po(n),
            (l.updater = ul),
            (n.stateNode = l),
            (l._reactInternals = n),
            Ei(n, r, e, t),
            (n = ji(null, n, r, !0, i, t)))
          : ((n.tag = 0), U && i && io(n), ie(null, n, l, t), (n = n.child)),
        n
      );
    case 16:
      r = n.elementType;
      e: {
        switch (
          (Nr(e, n),
          (e = n.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (n.type = r),
          (l = n.tag = Cd(r)),
          (e = Pe(r, e)),
          l)
        ) {
          case 0:
            n = Ni(null, n, r, e, t);
            break e;
          case 1:
            n = Lu(null, n, r, e, t);
            break e;
          case 11:
            n = Pu(null, n, r, e, t);
            break e;
          case 14:
            n = zu(null, n, r, Pe(r.type, e), t);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return n;
    case 0:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Pe(r, l)),
        Ni(e, n, r, l, t)
      );
    case 1:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Pe(r, l)),
        Lu(e, n, r, l, t)
      );
    case 3:
      e: {
        if ((Da(n), e === null)) throw Error(y(387));
        (r = n.pendingProps),
          (i = n.memoizedState),
          (l = i.element),
          ia(e, n),
          Qr(n, r, null, t);
        var o = n.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (n.updateQueue.baseState = i),
            (n.memoizedState = i),
            n.flags & 256)
          ) {
            (l = tt(Error(y(423)), n)), (n = Tu(e, n, r, t, l));
            break e;
          } else if (r !== l) {
            (l = tt(Error(y(424)), n)), (n = Tu(e, n, r, t, l));
            break e;
          } else
            for (
              he = on(n.stateNode.containerInfo.firstChild),
                ve = n,
                U = !0,
                Le = null,
                t = aa(n, null, r, t),
                n.child = t;
              t;

            )
              (t.flags = (t.flags & -3) | 4096), (t = t.sibling);
        else {
          if ((bn(), r === l)) {
            n = Ye(e, n, t);
            break e;
          }
          ie(e, n, r, t);
        }
        n = n.child;
      }
      return n;
    case 5:
      return (
        ca(n),
        e === null && xi(n),
        (r = n.type),
        (l = n.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = l.children),
        vi(r, l) ? (o = null) : i !== null && vi(r, i) && (n.flags |= 32),
        Ma(e, n),
        ie(e, n, o, t),
        n.child
      );
    case 6:
      return e === null && xi(n), null;
    case 13:
      return Ia(e, n, t);
    case 4:
      return (
        mo(n, n.stateNode.containerInfo),
        (r = n.pendingProps),
        e === null ? (n.child = et(n, null, r, t)) : ie(e, n, r, t),
        n.child
      );
    case 11:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Pe(r, l)),
        Pu(e, n, r, l, t)
      );
    case 7:
      return ie(e, n, n.pendingProps, t), n.child;
    case 8:
      return ie(e, n, n.pendingProps.children, t), n.child;
    case 12:
      return ie(e, n, n.pendingProps.children, t), n.child;
    case 10:
      e: {
        if (
          ((r = n.type._context),
          (l = n.pendingProps),
          (i = n.memoizedProps),
          (o = l.value),
          M(Vr, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (Oe(i.value, o)) {
            if (i.children === l.children && !fe.current) {
              n = Ye(e, n, t);
              break e;
            }
          } else
            for (i = n.child, i !== null && (i.return = n); i !== null; ) {
              var u = i.dependencies;
              if (u !== null) {
                o = i.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Ve(-1, t & -t)), (s.tag = 2);
                      var f = i.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var v = f.pending;
                        v === null
                          ? (s.next = s)
                          : ((s.next = v.next), (v.next = s)),
                          (f.pending = s);
                      }
                    }
                    (i.lanes |= t),
                      (s = i.alternate),
                      s !== null && (s.lanes |= t),
                      ki(i.return, t, n),
                      (u.lanes |= t);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === n.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(y(341));
                (o.lanes |= t),
                  (u = o.alternate),
                  u !== null && (u.lanes |= t),
                  ki(o, t, n),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === n) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        ie(e, n, l.children, t), (n = n.child);
      }
      return n;
    case 9:
      return (
        (l = n.type),
        (r = n.pendingProps.children),
        Gn(n, t),
        (l = Ee(l)),
        (r = r(l)),
        (n.flags |= 1),
        ie(e, n, r, t),
        n.child
      );
    case 14:
      return (
        (r = n.type),
        (l = Pe(r, n.pendingProps)),
        (l = Pe(r.type, l)),
        zu(e, n, r, l, t)
      );
    case 15:
      return Ra(e, n, n.type, n.pendingProps, t);
    case 17:
      return (
        (r = n.type),
        (l = n.pendingProps),
        (l = n.elementType === r ? l : Pe(r, l)),
        Nr(e, n),
        (n.tag = 1),
        de(r) ? ((e = !0), Hr(n)) : (e = !1),
        Gn(n, t),
        ua(n, r, l),
        Ei(n, r, l, t),
        ji(null, n, r, !0, e, t)
      );
    case 19:
      return Fa(e, n, t);
    case 22:
      return Oa(e, n, t);
  }
  throw Error(y(156, n.tag));
};
function ba(e, n) {
  return _s(e, n);
}
function kd(e, n, t, r) {
  (this.tag = e),
    (this.key = t),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = n),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ke(e, n, t, r) {
  return new kd(e, n, t, r);
}
function zo(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Cd(e) {
  if (typeof e == "function") return zo(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Yi)) return 11;
    if (e === Xi) return 14;
  }
  return 2;
}
function cn(e, n) {
  var t = e.alternate;
  return (
    t === null
      ? ((t = ke(e.tag, n, e.key, e.mode)),
        (t.elementType = e.elementType),
        (t.type = e.type),
        (t.stateNode = e.stateNode),
        (t.alternate = e),
        (e.alternate = t))
      : ((t.pendingProps = n),
        (t.type = e.type),
        (t.flags = 0),
        (t.subtreeFlags = 0),
        (t.deletions = null)),
    (t.flags = e.flags & 14680064),
    (t.childLanes = e.childLanes),
    (t.lanes = e.lanes),
    (t.child = e.child),
    (t.memoizedProps = e.memoizedProps),
    (t.memoizedState = e.memoizedState),
    (t.updateQueue = e.updateQueue),
    (n = e.dependencies),
    (t.dependencies =
      n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }),
    (t.sibling = e.sibling),
    (t.index = e.index),
    (t.ref = e.ref),
    t
  );
}
function zr(e, n, t, r, l, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) zo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Mn:
        return En(t.children, l, i, n);
      case Ki:
        (o = 8), (l |= 8);
        break;
      case Xl:
        return (
          (e = ke(12, t, n, l | 2)), (e.elementType = Xl), (e.lanes = i), e
        );
      case Gl:
        return (e = ke(13, t, n, l)), (e.elementType = Gl), (e.lanes = i), e;
      case Zl:
        return (e = ke(19, t, n, l)), (e.elementType = Zl), (e.lanes = i), e;
      case ss:
        return fl(t, l, i, n);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case os:
              o = 10;
              break e;
            case us:
              o = 9;
              break e;
            case Yi:
              o = 11;
              break e;
            case Xi:
              o = 14;
              break e;
            case Ze:
              (o = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (n = ke(o, t, n, l)), (n.elementType = e), (n.type = r), (n.lanes = i), n
  );
}
function En(e, n, t, r) {
  return (e = ke(7, e, r, n)), (e.lanes = t), e;
}
function fl(e, n, t, r) {
  return (
    (e = ke(22, e, r, n)),
    (e.elementType = ss),
    (e.lanes = t),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Vl(e, n, t) {
  return (e = ke(6, e, null, n)), (e.lanes = t), e;
}
function Wl(e, n, t) {
  return (
    (n = ke(4, e.children !== null ? e.children : [], e.key, n)),
    (n.lanes = t),
    (n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    n
  );
}
function Ed(e, n, t, r, l) {
  (this.tag = n),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = El(0)),
    (this.expirationTimes = El(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = El(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Lo(e, n, t, r, l, i, o, u, s) {
  return (
    (e = new Ed(e, n, t, u, s)),
    n === 1 ? ((n = 1), i === !0 && (n |= 8)) : (n = 0),
    (i = ke(3, null, null, n)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: t,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    po(i),
    e
  );
}
function _d(e, n, t) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: On,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: n,
    implementation: t,
  };
}
function ec(e) {
  if (!e) return dn;
  e = e._reactInternals;
  e: {
    if (Tn(e) !== e || e.tag !== 1) throw Error(y(170));
    var n = e;
    do {
      switch (n.tag) {
        case 3:
          n = n.stateNode.context;
          break e;
        case 1:
          if (de(n.type)) {
            n = n.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      n = n.return;
    } while (n !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var t = e.type;
    if (de(t)) return bs(e, t, n);
  }
  return n;
}
function nc(e, n, t, r, l, i, o, u, s) {
  return (
    (e = Lo(t, r, !0, e, l, i, o, u, s)),
    (e.context = ec(null)),
    (t = e.current),
    (r = oe()),
    (l = an(t)),
    (i = Ve(r, l)),
    (i.callback = n ?? null),
    un(t, i, l),
    (e.current.lanes = l),
    Gt(e, l, r),
    pe(e, r),
    e
  );
}
function dl(e, n, t, r) {
  var l = n.current,
    i = oe(),
    o = an(l);
  return (
    (t = ec(t)),
    n.context === null ? (n.context = t) : (n.pendingContext = t),
    (n = Ve(i, o)),
    (n.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (n.callback = r),
    (e = un(l, n, o)),
    e !== null && (Re(e, l, o, i), Cr(e, l, o)),
    o
  );
}
function br(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Au(e, n) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var t = e.retryLane;
    e.retryLane = t !== 0 && t < n ? t : n;
  }
}
function To(e, n) {
  Au(e, n), (e = e.alternate) && Au(e, n);
}
function Nd() {
  return null;
}
var tc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Ro(e) {
  this._internalRoot = e;
}
pl.prototype.render = Ro.prototype.render = function (e) {
  var n = this._internalRoot;
  if (n === null) throw Error(y(409));
  dl(e, n, null, null);
};
pl.prototype.unmount = Ro.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var n = e.containerInfo;
    zn(function () {
      dl(null, e, null, null);
    }),
      (n[Qe] = null);
  }
};
function pl(e) {
  this._internalRoot = e;
}
pl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var n = Rs();
    e = { blockedOn: null, target: e, priority: n };
    for (var t = 0; t < qe.length && n !== 0 && n < qe[t].priority; t++);
    qe.splice(t, 0, e), t === 0 && Ms(e);
  }
};
function Oo(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function ml(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Bu() {}
function jd(e, n, t, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var f = br(o);
        i.call(f);
      };
    }
    var o = nc(n, r, e, 0, null, !1, !1, "", Bu);
    return (
      (e._reactRootContainer = o),
      (e[Qe] = o.current),
      Ut(e.nodeType === 8 ? e.parentNode : e),
      zn(),
      o
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var f = br(s);
      u.call(f);
    };
  }
  var s = Lo(e, 0, !1, null, null, !1, !1, "", Bu);
  return (
    (e._reactRootContainer = s),
    (e[Qe] = s.current),
    Ut(e.nodeType === 8 ? e.parentNode : e),
    zn(function () {
      dl(n, s, t, r);
    }),
    s
  );
}
function hl(e, n, t, r, l) {
  var i = t._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = br(o);
        u.call(s);
      };
    }
    dl(n, o, e, l);
  } else o = jd(t, n, e, l, r);
  return br(o);
}
Ls = function (e) {
  switch (e.tag) {
    case 3:
      var n = e.stateNode;
      if (n.current.memoizedState.isDehydrated) {
        var t = wt(n.pendingLanes);
        t !== 0 &&
          (Ji(n, t | 1), pe(n, Q()), !(R & 6) && ((rt = Q() + 500), hn()));
      }
      break;
    case 13:
      zn(function () {
        var r = Ke(e, 1);
        if (r !== null) {
          var l = oe();
          Re(r, e, 1, l);
        }
      }),
        To(e, 1);
  }
};
qi = function (e) {
  if (e.tag === 13) {
    var n = Ke(e, 134217728);
    if (n !== null) {
      var t = oe();
      Re(n, e, 134217728, t);
    }
    To(e, 134217728);
  }
};
Ts = function (e) {
  if (e.tag === 13) {
    var n = an(e),
      t = Ke(e, n);
    if (t !== null) {
      var r = oe();
      Re(t, e, n, r);
    }
    To(e, n);
  }
};
Rs = function () {
  return O;
};
Os = function (e, n) {
  var t = O;
  try {
    return (O = e), n();
  } finally {
    O = t;
  }
};
oi = function (e, n, t) {
  switch (n) {
    case "input":
      if ((bl(e, t), (n = t.name), t.type === "radio" && n != null)) {
        for (t = e; t.parentNode; ) t = t.parentNode;
        for (
          t = t.querySelectorAll(
            "input[name=" + JSON.stringify("" + n) + '][type="radio"]'
          ),
            n = 0;
          n < t.length;
          n++
        ) {
          var r = t[n];
          if (r !== e && r.form === e.form) {
            var l = il(r);
            if (!l) throw Error(y(90));
            cs(r), bl(r, l);
          }
        }
      }
      break;
    case "textarea":
      ds(e, t);
      break;
    case "select":
      (n = t.value), n != null && Qn(e, !!t.multiple, n, !1);
  }
};
ws = No;
Ss = zn;
var Pd = { usingClientEntryPoint: !1, Events: [Jt, Un, il, gs, ys, No] },
  vt = {
    findFiberByHostInstance: Sn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  zd = {
    bundleType: vt.bundleType,
    version: vt.version,
    rendererPackageName: vt.rendererPackageName,
    rendererConfig: vt.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xe.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Cs(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: vt.findFiberByHostInstance || Nd,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!gr.isDisabled && gr.supportsFiber)
    try {
      (nl = gr.inject(zd)), (Fe = gr);
    } catch {}
}
ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pd;
ye.createPortal = function (e, n) {
  var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Oo(n)) throw Error(y(200));
  return _d(e, n, null, t);
};
ye.createRoot = function (e, n) {
  if (!Oo(e)) throw Error(y(299));
  var t = !1,
    r = "",
    l = tc;
  return (
    n != null &&
      (n.unstable_strictMode === !0 && (t = !0),
      n.identifierPrefix !== void 0 && (r = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    (n = Lo(e, 1, !1, null, null, t, !1, r, l)),
    (e[Qe] = n.current),
    Ut(e.nodeType === 8 ? e.parentNode : e),
    new Ro(n)
  );
};
ye.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var n = e._reactInternals;
  if (n === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = Cs(n)), (e = e === null ? null : e.stateNode), e;
};
ye.flushSync = function (e) {
  return zn(e);
};
ye.hydrate = function (e, n, t) {
  if (!ml(n)) throw Error(y(200));
  return hl(null, e, n, !0, t);
};
ye.hydrateRoot = function (e, n, t) {
  if (!Oo(e)) throw Error(y(405));
  var r = (t != null && t.hydratedSources) || null,
    l = !1,
    i = "",
    o = tc;
  if (
    (t != null &&
      (t.unstable_strictMode === !0 && (l = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (n = nc(n, null, e, 1, t ?? null, l, !1, i, o)),
    (e[Qe] = n.current),
    Ut(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (t = r[e]),
        (l = t._getVersion),
        (l = l(t._source)),
        n.mutableSourceEagerHydrationData == null
          ? (n.mutableSourceEagerHydrationData = [t, l])
          : n.mutableSourceEagerHydrationData.push(t, l);
  return new pl(n);
};
ye.render = function (e, n, t) {
  if (!ml(n)) throw Error(y(200));
  return hl(null, e, n, !1, t);
};
ye.unmountComponentAtNode = function (e) {
  if (!ml(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (zn(function () {
        hl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Qe] = null);
        });
      }),
      !0)
    : !1;
};
ye.unstable_batchedUpdates = No;
ye.unstable_renderSubtreeIntoContainer = function (e, n, t, r) {
  if (!ml(t)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return hl(e, n, t, !1, r);
};
ye.version = "18.2.0-next-9e3b772b8-20220608";
function rc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rc);
    } catch (e) {
      console.error(e);
    }
}
rc(), (ns.exports = ye);
var Ld = ns.exports,
  Vu = Ld;
(Kl.createRoot = Vu.createRoot), (Kl.hydrateRoot = Vu.hydrateRoot);
function Yt({ padding: e = "13px 20px", children: n, onClick: t }) {
  const r = { padding: e };
  return c.jsx("button", {
    className: "Button-style-default",
    onClick: t,
    style: r,
    children: n,
  });
}
function Td() {
  return c.jsxs("div", {
    className: "HomeHeaderNavbar-container",
    children: [
      c.jsx("div", {
        className: "HomeHeaderNavbar-navigation",
        children: c.jsx("nav", {
          role: "navigation",
          "aria-label": "Main navigation",
          children: c.jsxs("ul", {
            children: [
              c.jsx("li", {
                children: c.jsx("a", { href: "#home", children: "О нас" }),
              }),
              c.jsx("li", {
                children: c.jsx("a", { href: "#about", children: "Услуги" }),
              }),
              c.jsx("li", {
                children: c.jsx("a", {
                  href: "#services",
                  children: "Преимущества",
                }),
              }),
              c.jsx("li", {
                children: c.jsx("a", {
                  href: "#contact",
                  children: "Размещение",
                }),
              }),
              c.jsx("li", {
                children: c.jsx("a", { href: "#contact", children: "Блог" }),
              }),
              c.jsx("li", {
                children: c.jsx("a", {
                  href: "#contact",
                  children: "Контакты",
                }),
              }),
            ],
          }),
        }),
      }),
      c.jsxs("div", {
        className: "HomeHeaderNavbar-buttons",
        children: [
          c.jsx(Yt, { children: "Хочу тур" }),
          c.jsx(Yt, { children: "Обрантый звонок" }),
        ],
      }),
    ],
  });
}
function Ql({ title: e, price: n, imgLink: t, type: r = "default" }) {
  const l = { backgroundImage: `url(/${t})` };
  return c.jsxs("div", {
    style: l,
    className:
      r === "large"
        ? "ContentSpecialOfferCard-container large-style"
        : "ContentSpecialOfferCard-container",
    children: [
      c.jsxs("div", {
        className: "ContentSpecialOfferCard-text",
        children: [
          c.jsx("h3", { children: e }),
          c.jsxs("span", {
            style: { paddingTop: "5px" },
            children: ["от ", n, " р"],
          }),
        ],
      }),
      c.jsxs("a", {
        href: "#",
        children: [
          "Подробнее",
          c.jsx("img", { src: "/resources/arrow-left.svg", alt: "arrow" }),
        ],
      }),
    ],
  });
}
function Rd({ imgPath: e, title: n, description: t }) {
  return c.jsxs("section", {
    className: "ContentServiceCard-container",
    children: [
      c.jsx("div", {
        className: "ContentServiceCard-cover",
        children: c.jsx("img", { src: `/${e}`, alt: "service" }),
      }),
      c.jsxs("div", {
        className: "ContentServiceCard-text",
        children: [
          c.jsxs("a", {
            href: "#",
            children: [
              n,
              c.jsx("img", { src: "/resources/arrow-left.svg", alt: "arrow" }),
            ],
          }),
          c.jsx("p", { children: t }),
        ],
      }),
    ],
  });
}
function Od({ imgPath: e, description: n }) {
  return c.jsxs("div", {
    className: "ContentAdvantages-container",
    children: [
      c.jsx("img", { src: `/${e}`, alt: "icon" }),
      c.jsx("p", { children: n }),
    ],
  });
}
function Md({ imgPath: e, price: n, stars: t, title: r, place: l }) {
  const i = [];
  for (let o = 0; o < 5; o++)
    o < t
      ? i.push(
          c.jsx("img", { src: "/resources/star.svg", alt: `Star ${o}` }, o)
        )
      : i.push(
          c.jsx("img", { src: "/resources/unstar.svg", alt: `Other ${o}` }, o)
        );
  return c.jsxs("div", {
    className: "ContentPlacement-container",
    children: [
      c.jsx("div", {
        className: "ContentPlacement-cover",
        children: c.jsx("img", { src: `/${e}`, alt: "cover" }),
      }),
      c.jsxs("div", {
        className: "ContentPlacement-content",
        children: [
          c.jsxs("div", {
            className: "ContentPlacement-price",
            children: [
              c.jsxs("p", {
                children: [
                  c.jsx("span", {
                    style: { color: "#999999" },
                    children: "от",
                  }),
                  " ",
                  c.jsxs("span", {
                    style: { fontWeight: "bold", fontSize: "20px" },
                    children: [n, " р"],
                  }),
                  " ",
                  c.jsx("span", { children: " / ночь" }),
                ],
              }),
              c.jsx("p", { children: i }),
            ],
          }),
          c.jsx("p", { style: { paddingBottom: "16px" }, children: r }),
          c.jsx("p", {
            style: { paddingBottom: "20px", color: "#999999" },
            children: l,
          }),
          c.jsx(Yt, { children: "Номера" }),
        ],
      }),
    ],
  });
}
function Dd({ imgPath: e }) {
  return c.jsx("div", {
    className: "ContentPlacement-container",
    children: c.jsx("div", {
      className: "ContentPlacement-continue",
      style: { backgroundImage: `url(/${e})` },
      children: c.jsxs("a", {
        href: "#",
        children: [
          "Посмотреть все варианты",
          " ",
          c.jsx("img", {
            src: "/resources/arrow-left-white.svg",
            alt: "arrow",
          }),
        ],
      }),
    }),
  });
}
function Id() {
  return c.jsxs("div", {
    className: "ContentTour-container",
    children: [
      c.jsxs("div", {
        className: "ContentTour-item",
        children: [
          c.jsx("p", { children: "Город вылета" }),
          c.jsx("select", {
            name: "city",
            id: "city",
            children: c.jsx("option", {
              value: "sp",
              children: "Санкт-Петербург",
            }),
          }),
        ],
      }),
      c.jsxs("div", {
        className: "ContentTour-item",
        children: [
          c.jsx("p", { children: "Страна" }),
          c.jsx("select", {
            name: "country",
            id: "country",
            children: c.jsx("option", { value: "aust", children: "Австралия" }),
          }),
        ],
      }),
      c.jsxs("div", {
        className: "ContentTour-item",
        children: [
          c.jsx("p", { children: "Дата прибытия" }),
          c.jsx("select", {
            className: "ContentTour-item-date",
            name: "country",
            id: "country",
            style: {
              background:
                "url(/resources/calendar_today.svg) no-repeat right center",
              appearance: "none",
            },
            children: c.jsx("option", {
              value: "aust",
              children: "18.10.2021ㅤㅤㅤ",
            }),
          }),
        ],
      }),
      c.jsxs("div", {
        className: "ContentTour-item",
        children: [
          c.jsx("p", { children: "Ночей" }),
          c.jsx("select", {
            className: "ContentTour-item-count",
            name: "country",
            id: "country",
            style: {
              background:
                "url(/resources/tour-counter.svg) no-repeat right center",
              appearance: "none",
            },
            children: c.jsx("option", { value: "aust", children: "6ㅤㅤㅤ" }),
          }),
        ],
      }),
      c.jsxs("div", {
        className: "ContentTour-item",
        children: [
          c.jsx("p", { children: "Туристы" }),
          c.jsx("select", {
            className: "ContentTour-item-count",
            name: "country",
            id: "country",
            style: {
              background:
                "url(resources/tour-counter.svg) no-repeat right center",
              appearance: "none",
            },
            children: c.jsx("option", { value: "aust", children: "2ㅤㅤㅤ" }),
          }),
        ],
      }),
      c.jsx("div", {
        className: "ContentTour-button",
        children: c.jsx(Yt, { children: "Найти" }),
      }),
    ],
  });
}
function Fd() {
  return c.jsxs("div", {
    className: "ContentContacts-container",
    children: [
      c.jsxs("div", {
        className: "ContentContacts-info-container",
        children: [
          c.jsxs("div", {
            className: "ContentContacts-text",
            children: [
              c.jsx("div", {
                className: "ContentContacts-title",
                children: c.jsx("h3", { children: "Адрес" }),
              }),
              c.jsx("div", {
                className: "ContentContacts-description",
                children: c.jsx("p", {
                  style: { width: "240px" },
                  children: "Москва, улица Юности, дом 5 строение 4, офис 2",
                }),
              }),
            ],
          }),
          c.jsxs("div", {
            className: "ContentContacts-text",
            children: [
              c.jsx("div", {
                className: "ContentContacts-title",
                children: c.jsx("h3", { children: "Телефон" }),
              }),
              c.jsxs("div", {
                className: "ContentContacts-description",
                children: [
                  c.jsx("p", {
                    style: { color: "#CC9933" },
                    children: "+7 (499) 535-64-34",
                  }),
                  c.jsx("p", {
                    style: { color: "#CC9933" },
                    children: "+7 (495) 005-05-44",
                  }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            className: "ContentContacts-text",
            children: [
              c.jsx("div", {
                className: "ContentContacts-title",
                children: c.jsx("h3", { children: "E-mail" }),
              }),
              c.jsxs("div", {
                className: "ContentContacts-description",
                children: [
                  c.jsx("p", {
                    style: { color: "#CC9933" },
                    children: "lg.oona@mail.ru",
                  }),
                  c.jsx("p", {
                    style: { color: "#999999" },
                    children: "по вопросам бронирования",
                  }),
                  c.jsx("p", {
                    style: { color: "#CC9933" },
                    children: "hotels.ln@mail.ru",
                  }),
                  c.jsx("p", {
                    style: { color: "#999999" },
                    children: "по вопросам сотрудничества",
                  }),
                ],
              }),
            ],
          }),
          c.jsxs("div", {
            className: "ContentContacts-text",
            children: [
              c.jsx("div", {
                className: "ContentContacts-title",
                children: c.jsx("h3", { children: "График" }),
              }),
              c.jsx("div", {
                className: "ContentContacts-description",
                children: c.jsx("p", {
                  style: { width: "240px" },
                  children: "Понедельник — пятница, с 10:00 до 19:00",
                }),
              }),
            ],
          }),
          c.jsx("div", {
            className: "ContentContacts-button",
            children: c.jsx(Yt, {
              padding: "27px 29px",
              children: "Построить маршрут",
            }),
          }),
        ],
      }),
      c.jsx("div", {
        className: "ContentContacts-cover",
        children: c.jsx("img", {
          src: "/resources/contacts.png",
          alt: "cover",
        }),
      }),
    ],
  });
}
const Ud = [
    {
      imgPath: "resources/service-1.png",
      title: "Эксклюзивное обслуживание",
      description:
        "Равным образом постоянный количественный рост и сфера нашей активности",
    },
    {
      imgPath: "resources/service-2.png",
      title: "Аренда банкетных залов",
      description:
        "Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм",
    },
    {
      imgPath: "resources/service-3.png",
      title: "Сауны, бассейны, бани, фитнес-залы",
      description:
        "Не следует, однако забывать, что начало повседневной работы по формированию позиции",
    },
    {
      imgPath: "resources/service-4.png",
      title: "Охраняемые автомобильные стоянки",
      description:
        "Не следует, однако забывать, что начало повседневной работы по формированию позиции",
    },
  ],
  $d = [
    {
      imgPath: "resources/bathtub.svg",
      desription:
        "Идейные соображения высшего порядка, а также постоянный количественный рост",
    },
    {
      imgPath: "resources/hanger.svg",
      desription:
        "Значимость этих проблем настолько очевидна, что вопрос остается открытым",
    },
    {
      imgPath: "resources/heating.svg",
      desription:
        "Таким образом реализация плановых заданий играет важную роль для понимания",
    },
    {
      imgPath: "resources/hotel-key.svg",
      desription:
        "Повседневная практика показывает, что сложившаяся структура организации",
    },
    {
      imgPath: "resources/parking.svg",
      desription:
        "Равным образом рамки и место обучения кадров способствует подготовки сотрудника",
    },
    {
      imgPath: "resources/reception.svg",
      desription:
        "Консультация с активом влечет за собой процесс внедрения услуг нашего сервиса ",
    },
    {
      imgPath: "resources/security-box.svg",
      desription:
        "Повседневная практика показывает, что дальнейшее развитие различных форм",
    },
    {
      imgPath: "resources/swimming-pool.svg",
      desription:
        "Значимость этого настолько очевидна, что консультация наших экспертов помогает",
    },
  ],
  Hd = [
    {
      imgPath: "resources/placement-1.png",
      price: "4 698",
      stars: 4,
      title: "Lagoona española",
      place: "Барселона, Испания",
    },
    {
      imgPath: "resources/placement-2.png",
      price: "5 148",
      stars: 4,
      title: "Lagoona son típicas",
      place: "Барселона, Испания",
    },
    {
      imgPath: "resources/placement-3.png",
      price: "6 254",
      stars: 5,
      title: "Lagoona de la guerra",
      place: "Барселона, Испания",
    },
    {
      imgPath: "resources/placement-4.png",
      price: "6 320",
      stars: 5,
      title: "Lagoona mentira piadosa",
      place: "Барселона, Испания",
    },
    {
      imgPath: "resources/placement-5.png",
      price: "6 457",
      stars: 4,
      title: "Lagoona empujar la creatividad",
      place: "Барселона, Испания",
    },
    {
      imgPath: "resources/placement-6.png",
      price: "6 320",
      stars: 4,
      title: "Lagoona el retorno",
      place: "Барселона, Испания",
    },
    {
      imgPath: "resources/placement-7.png",
      price: "6 505",
      stars: 5,
      title: "Lagoona mentira piadosa",
      place: "Барселона, Испания",
    },
    {
      imgPath: "resources/placement-8.png",
      price: "6 824",
      stars: 4,
      title: "Lagoona suerte siguió siempre",
      place: "Барселона, Испания",
    },
  ];
function Ad() {
  return c.jsxs("div", {
    className: "HomeContent-container",
    children: [
      c.jsxs("section", {
        children: [
          c.jsx("h2", { children: "Спецпредложения" }),
          c.jsxs("div", {
            style: { display: "flex", gap: "23px" },
            children: [
              c.jsxs("div", {
                style: {
                  display: "flex",
                  gap: "23px",
                  flexDirection: "column",
                },
                children: [
                  c.jsx(Ql, {
                    price: "55 000",
                    title: "Мальдивские острова",
                    imgLink: "resources/special-offer-1.png",
                  }),
                  c.jsx(Ql, {
                    price: "30 000",
                    title: "Горящий тур на остров Крит",
                    imgLink: "resources/special-offer-2.png",
                  }),
                ],
              }),
              c.jsx("div", {
                children: c.jsx(Ql, {
                  price: "5 000",
                  title: "Номера категории люкс",
                  imgLink: "resources/special-offer-3.png",
                  type: "large",
                }),
              }),
            ],
          }),
        ],
      }),
      c.jsxs("section", {
        className: "HomeContent-aboutUs",
        children: [
          c.jsx("h2", { children: "О нас" }),
          c.jsx("p", {
            children:
              "Идейные соображения высшего порядка, а также сложившаяся структура организации влечет за собой процесс внедрения и модернизации системы обучения кадров, соответствует насущным потребностям. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности представляет собой интересный эксперимент проверки системы обучения кадров, соответствует насущным потребностям. Равным образом сложившаяся структура организации требуют определения и уточнения существенных финансовых и административных условий.",
          }),
        ],
      }),
      c.jsxs("section", {
        children: [
          c.jsx("h2", { children: "Услуги" }),
          c.jsx("div", {
            className: "HomeContent-service",
            children: Ud.map((e, n) =>
              c.jsx(
                Rd,
                {
                  imgPath: e.imgPath,
                  title: e.title,
                  description: e.description,
                },
                n
              )
            ),
          }),
        ],
      }),
      c.jsxs("section", {
        children: [
          c.jsx("h2", { children: "Преимущества" }),
          c.jsx("div", {
            className: "HomeContent-advantages",
            children: $d.map((e, n) =>
              c.jsx(Od, { imgPath: e.imgPath, description: e.desription }, n)
            ),
          }),
        ],
      }),
      c.jsxs("section", {
        children: [
          c.jsx("h2", { children: "Размещение" }),
          c.jsxs("div", {
            className: "HomeContent-placements",
            children: [
              Hd.map((e, n) =>
                c.jsx(
                  Md,
                  {
                    imgPath: e.imgPath,
                    price: e.price,
                    stars: e.stars,
                    title: e.title,
                    place: e.place,
                  },
                  n
                )
              ),
              c.jsx(Dd, { imgPath: "resources/placement-continue.png" }),
            ],
          }),
        ],
      }),
      c.jsxs("section", {
        className: "HomeContent-tour",
        children: [c.jsx("h2", { children: "Хочу тур" }), c.jsx(Id, {})],
      }),
      c.jsxs("section", {
        children: [c.jsx("h2", { children: "Контакты" }), c.jsx(Fd, {})],
      }),
    ],
  });
}
function Bd() {
  return c.jsxs("div", {
    className: "HomeHeader-container",
    children: [
      c.jsxs("div", {
        className: "HomeHeader-info",
        children: [
          c.jsxs("div", {
            className: "HomeHeader-logo-and-number",
            children: [
              c.jsx("img", { src: "/resources/logo.svg", alt: "logo" }),
              c.jsx("a", { href: "#", children: "+7 495 322 54 48" }),
            ],
          }),
          c.jsx("div", {
            className: "HomeHeader-account",
            children: c.jsxs("a", {
              href: "#",
              children: [
                c.jsx("img", {
                  src: "/resources/keyboard_tab.svg",
                  alt: "icon",
                }),
                "Личный кабинет",
              ],
            }),
          }),
        ],
      }),
      c.jsx(Td, {}),
    ],
  });
}
function Vd() {
  return c.jsxs("div", {
    className: "HomeFooter-container",
    children: [
      c.jsxs("div", {
        className: "HomeFooter-first",
        children: [
          c.jsx("p", {
            style: { paddingBottom: "35px" },
            children:
              "© 2012-2020 Управляющая компания Объединенной сети «Лагуна Хотелс»",
          }),
          c.jsx("p", {
            style: { paddingBottom: "40px" },
            children:
              "Представленная на сайте информация носит справочный характер и не является публичной офертой",
          }),
          c.jsx("a", { href: "#", children: "Пользовательское соглашение" }),
        ],
      }),
      c.jsxs("div", {
        className: "HomeFooter-second",
        children: [
          c.jsx("p", {
            style: { paddingBottom: "8px" },
            children: "11710, улица Юности, дом 5 строение 4, офис 2",
          }),
          c.jsx("a", { children: "+7 (499) 535-64-34" }),
          c.jsx("a", {
            style: { paddingBottom: "10px" },
            children: "+7 (495) 005-05-44",
          }),
          c.jsx("a", { children: "lg.oona@mail.ru" }),
          c.jsx("a", { children: "hotels.ln@mail.ru" }),
        ],
      }),
      c.jsxs("div", {
        className: "HomeFooter-third",
        children: [
          c.jsx("img", { src: "/resources/comp.svg", alt: "img" }),
          c.jsx("img", { src: "/resources/twitter.svg", alt: "img" }),
          c.jsx("img", { src: "/resources/facebook.svg", alt: "img" }),
          c.jsx("img", { src: "/resources/social.svg", alt: "img" }),
          c.jsx("img", { src: "/resources/instagram.svg", alt: "img" }),
        ],
      }),
    ],
  });
}
function Wd() {
  return c.jsx("div", {
    className: "Home-wrapper",
    children: c.jsxs("div", {
      className: "Home-container",
      children: [c.jsx(Bd, {}), c.jsx(Ad, {}), c.jsx(Vd, {})],
    }),
  });
}
function Qd() {
  return c.jsx("div", { children: c.jsx(Wd, {}) });
}
Kl.createRoot(document.getElementById("root")).render(
  c.jsx("div", { children: c.jsx(Qd, {}) })
);
