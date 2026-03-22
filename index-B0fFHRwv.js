(function(){
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const f of document.querySelectorAll('link[rel="modulepreload"]'))
        c(f);
    new MutationObserver(f => {
        for (const b of f)
            if (b.type === "childList")
                for (const d of b.addedNodes)
                    d.tagName === "LINK" && d.rel === "modulepreload" && c(d)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(f) {
        const b = {};
        return f.integrity && (b.integrity = f.integrity),
        f.referrerPolicy && (b.referrerPolicy = f.referrerPolicy),
        f.crossOrigin === "use-credentials" ? b.credentials = "include" : f.crossOrigin === "anonymous" ? b.credentials = "omit" : b.credentials = "same-origin",
        b
    }
    function c(f) {
        if (f.ep)
            return;
        f.ep = !0;
        const b = t(f);
        fetch(f.href, b)
    }
}
)();
function bd(s) {
    const e = Object.create(null);
    for (const t of s.split(","))
        e[t] = 1;
    return t => t in e
}
const ve = {}
  , Gt = []
  , zs = () => {}
  , bn = () => !1
  , jf = s => s.charCodeAt(0) === 111 && s.charCodeAt(1) === 110 && (s.charCodeAt(2) > 122 || s.charCodeAt(2) < 97)
  , dd = s => s.startsWith("onUpdate:")
  , Ve = Object.assign
  , ad = (s, e) => {
    const t = s.indexOf(e);
    t > -1 && s.splice(t, 1)
}
  , O0 = Object.prototype.hasOwnProperty
  , oe = (s, e) => O0.call(s, e)
  , G = Array.isArray
  , Jt = s => Lc(s) === "[object Map]"
  , Vf = s => Lc(s) === "[object Set]"
  , Md = s => Lc(s) === "[object Date]"
  , se = s => typeof s == "function"
  , Oe = s => typeof s == "string"
  , Es = s => typeof s == "symbol"
  , ue = s => s !== null && typeof s == "object"
  , dn = s => (ue(s) || se(s)) && se(s.then) && se(s.catch)
  , an = Object.prototype.toString
  , Lc = s => an.call(s)
  , I0 = s => Lc(s).slice(8, -1)
  , nn = s => Lc(s) === "[object Object]"
  , zf = s => Oe(s) && s !== "NaN" && s[0] !== "-" && "" + parseInt(s, 10) === s
  , yc = bd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted")
  , Hf = s => {
    const e = Object.create(null);
    return (t => e[t] || (e[t] = s(t)))
}
  , R0 = /-\w/g
  , pt = Hf(s => s.replace(R0, e => e.slice(1).toUpperCase()))
  , $0 = /\B([A-Z])/g
  , Yt = Hf(s => s.replace($0, "-$1").toLowerCase())
  , ln = Hf(s => s.charAt(0).toUpperCase() + s.slice(1))
  , tb = Hf(s => s ? `on${ln(s)}` : "")
  , lt = (s, e) => !Object.is(s, e)
  , df = (s, ...e) => {
    for (let t = 0; t < s.length; t++)
        s[t](...e)
}
  , on = (s, e, t, c=!1) => {
    Object.defineProperty(s, e, {
        configurable: !0,
        enumerable: !1,
        writable: c,
        value: t
    })
}
  , rn = s => {
    const e = parseFloat(s);
    return isNaN(e) ? s : e
}
  , N0 = s => {
    const e = Oe(s) ? Number(s) : NaN;
    return isNaN(e) ? s : e
}
;
let Pd;
const Uf = () => Pd || (Pd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Dt(s) {
    if (G(s)) {
        const e = {};
        for (let t = 0; t < s.length; t++) {
            const c = s[t]
              , f = Oe(c) ? H0(c) : Dt(c);
            if (f)
                for (const b in f)
                    e[b] = f[b]
        }
        return e
    } else if (Oe(s) || ue(s))
        return s
}
const j0 = /;(?![^(]*\))/g
  , V0 = /:([^]+)/
  , z0 = /\/\*[^]*?\*\//g;
function H0(s) {
    const e = {};
    return s.replace(z0, "").split(j0).forEach(t => {
        if (t) {
            const c = t.split(V0);
            c.length > 1 && (e[c[0].trim()] = c[1].trim())
        }
    }
    ),
    e
}
function qe(s) {
    let e = "";
    if (Oe(s))
        e = s;
    else if (G(s))
        for (let t = 0; t < s.length; t++) {
            const c = qe(s[t]);
            c && (e += c + " ")
        }
    else if (ue(s))
        for (const t in s)
            s[t] && (e += t + " ");
    return e.trim()
}
const U0 = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"
  , S0 = bd(U0);
function hn(s) {
    return !!s || s === ""
}
function K0(s, e) {
    if (s.length !== e.length)
        return !1;
    let t = !0;
    for (let c = 0; t && c < s.length; c++)
        t = Sf(s[c], e[c]);
    return t
}
function Sf(s, e) {
    if (s === e)
        return !0;
    let t = Md(s)
      , c = Md(e);
    if (t || c)
        return t && c ? s.getTime() === e.getTime() : !1;
    if (t = Es(s),
    c = Es(e),
    t || c)
        return s === e;
    if (t = G(s),
    c = G(e),
    t || c)
        return t && c ? K0(s, e) : !1;
    if (t = ue(s),
    c = ue(e),
    t || c) {
        if (!t || !c)
            return !1;
        const f = Object.keys(s).length
          , b = Object.keys(e).length;
        if (f !== b)
            return !1;
        for (const d in s) {
            const a = s.hasOwnProperty(d)
              , n = e.hasOwnProperty(d);
            if (a && !n || !a && n || !Sf(s[d], e[d]))
                return !1
        }
    }
    return String(s) === String(e)
}
function Y0(s, e) {
    return s.findIndex(t => Sf(t, e))
}
const pn = s => !!(s && s.__v_isRef === !0)
  , be = s => Oe(s) ? s : s == null ? "" : G(s) || ue(s) && (s.toString === an || !se(s.toString)) ? pn(s) ? be(s.value) : JSON.stringify(s, un, 2) : String(s)
  , un = (s, e) => pn(e) ? un(s, e.value) : Jt(e) ? {
    [`Map(${e.size})`]: [...e.entries()].reduce( (t, [c,f], b) => (t[cb(c, b) + " =>"] = f,
    t), {})
} : Vf(e) ? {
    [`Set(${e.size})`]: [...e.values()].map(t => cb(t))
} : Es(e) ? cb(e) : ue(e) && !G(e) && !nn(e) ? String(e) : e
  , cb = (s, e="") => {
    var t;
    return Es(s) ? `Symbol(${(t = s.description) != null ? t : e})` : s
}
;
let Ue;
class mn {
    constructor(e=!1) {
        this.detached = e,
        this._active = !0,
        this._on = 0,
        this.effects = [],
        this.cleanups = [],
        this._isPaused = !1,
        this.parent = Ue,
        !e && Ue && (this.index = (Ue.scopes || (Ue.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    pause() {
        if (this._active) {
            this._isPaused = !0;
            let e, t;
            if (this.scopes)
                for (e = 0,
                t = this.scopes.length; e < t; e++)
                    this.scopes[e].pause();
            for (e = 0,
            t = this.effects.length; e < t; e++)
                this.effects[e].pause()
        }
    }
    resume() {
        if (this._active && this._isPaused) {
            this._isPaused = !1;
            let e, t;
            if (this.scopes)
                for (e = 0,
                t = this.scopes.length; e < t; e++)
                    this.scopes[e].resume();
            for (e = 0,
            t = this.effects.length; e < t; e++)
                this.effects[e].resume()
        }
    }
    run(e) {
        if (this._active) {
            const t = Ue;
            try {
                return Ue = this,
                e()
            } finally {
                Ue = t
            }
        }
    }
    on() {
        ++this._on === 1 && (this.prevScope = Ue,
        Ue = this)
    }
    off() {
        this._on > 0 && --this._on === 0 && (Ue = this.prevScope,
        this.prevScope = void 0)
    }
    stop(e) {
        if (this._active) {
            this._active = !1;
            let t, c;
            for (t = 0,
            c = this.effects.length; t < c; t++)
                this.effects[t].stop();
            for (this.effects.length = 0,
            t = 0,
            c = this.cleanups.length; t < c; t++)
                this.cleanups[t]();
            if (this.cleanups.length = 0,
            this.scopes) {
                for (t = 0,
                c = this.scopes.length; t < c; t++)
                    this.scopes[t].stop(!0);
                this.scopes.length = 0
            }
            if (!this.detached && this.parent && !e) {
                const f = this.parent.scopes.pop();
                f && f !== this && (this.parent.scopes[this.index] = f,
                f.index = this.index)
            }
            this.parent = void 0
        }
    }
}
function gn(s) {
    return new mn(s)
}
function Kf() {
    return Ue
}
function vn(s, e=!1) {
    Ue && Ue.cleanups.push(s)
}
let De;
const fb = new WeakSet;
class wn {
    constructor(e) {
        this.fn = e,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 5,
        this.next = void 0,
        this.cleanup = void 0,
        this.scheduler = void 0,
        Ue && Ue.active && Ue.effects.push(this)
    }
    pause() {
        this.flags |= 64
    }
    resume() {
        this.flags & 64 && (this.flags &= -65,
        fb.has(this) && (fb.delete(this),
        this.trigger()))
    }
    notify() {
        this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Cn(this)
    }
    run() {
        if (!(this.flags & 1))
            return this.fn();
        this.flags |= 2,
        Bd(this),
        xn(this);
        const e = De
          , t = Cs;
        De = this,
        Cs = !0;
        try {
            return this.fn()
        } finally {
            En(this),
            De = e,
            Cs = t,
            this.flags &= -3
        }
    }
    stop() {
        if (this.flags & 1) {
            for (let e = this.deps; e; e = e.nextDep)
                ld(e);
            this.deps = this.depsTail = void 0,
            Bd(this),
            this.onStop && this.onStop(),
            this.flags &= -2
        }
    }
    trigger() {
        this.flags & 64 ? fb.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty()
    }
    runIfDirty() {
        kb(this) && this.run()
    }
    get dirty() {
        return kb(this)
    }
}
let Dn = 0, Tc, Ac;
function Cn(s, e=!1) {
    if (s.flags |= 8,
    e) {
        s.next = Ac,
        Ac = s;
        return
    }
    s.next = Tc,
    Tc = s
}
function nd() {
    Dn++
}
function id() {
    if (--Dn > 0)
        return;
    if (Ac) {
        let e = Ac;
        for (Ac = void 0; e; ) {
            const t = e.next;
            e.next = void 0,
            e.flags &= -9,
            e = t
        }
    }
    let s;
    for (; Tc; ) {
        let e = Tc;
        for (Tc = void 0; e; ) {
            const t = e.next;
            if (e.next = void 0,
            e.flags &= -9,
            e.flags & 1)
                try {
                    e.trigger()
                } catch (c) {
                    s || (s = c)
                }
            e = t
        }
    }
    if (s)
        throw s
}
function xn(s) {
    for (let e = s.deps; e; e = e.nextDep)
        e.version = -1,
        e.prevActiveLink = e.dep.activeLink,
        e.dep.activeLink = e
}
function En(s) {
    let e, t = s.depsTail, c = t;
    for (; c; ) {
        const f = c.prevDep;
        c.version === -1 ? (c === t && (t = f),
        ld(c),
        q0(c)) : e = c,
        c.dep.activeLink = c.prevActiveLink,
        c.prevActiveLink = void 0,
        c = f
    }
    s.deps = e,
    s.depsTail = t
}
function kb(s) {
    for (let e = s.deps; e; e = e.nextDep)
        if (e.dep.version !== e.version || e.dep.computed && (Fn(e.dep.computed) || e.dep.version !== e.version))
            return !0;
    return !!s._dirty
}
function Fn(s) {
    if (s.flags & 4 && !(s.flags & 16) || (s.flags &= -17,
    s.globalVersion === jc) || (s.globalVersion = jc,
    !s.isSSR && s.flags & 128 && (!s.deps && !s._dirty || !kb(s))))
        return;
    s.flags |= 2;
    const e = s.dep
      , t = De
      , c = Cs;
    De = s,
    Cs = !0;
    try {
        xn(s);
        const f = s.fn(s._value);
        (e.version === 0 || lt(f, s._value)) && (s.flags |= 128,
        s._value = f,
        e.version++)
    } catch (f) {
        throw e.version++,
        f
    } finally {
        De = t,
        Cs = c,
        En(s),
        s.flags &= -3
    }
}
function ld(s, e=!1) {
    const {dep: t, prevSub: c, nextSub: f} = s;
    if (c && (c.nextSub = f,
    s.prevSub = void 0),
    f && (f.prevSub = c,
    s.nextSub = void 0),
    t.subs === s && (t.subs = c,
    !c && t.computed)) {
        t.computed.flags &= -5;
        for (let b = t.computed.deps; b; b = b.nextDep)
            ld(b, !0)
    }
    !e && !--t.sc && t.map && t.map.delete(t.key)
}
function q0(s) {
    const {prevDep: e, nextDep: t} = s;
    e && (e.nextDep = t,
    s.prevDep = void 0),
    t && (t.prevDep = e,
    s.nextDep = void 0)
}
let Cs = !0;
const yn = [];
function Ls() {
    yn.push(Cs),
    Cs = !1
}
function Ws() {
    const s = yn.pop();
    Cs = s === void 0 ? !0 : s
}
function Bd(s) {
    const {cleanup: e} = s;
    if (s.cleanup = void 0,
    e) {
        const t = De;
        De = void 0;
        try {
            e()
        } finally {
            De = t
        }
    }
}
let jc = 0;
class X0 {
    constructor(e, t) {
        this.sub = e,
        this.dep = t,
        this.version = t.version,
        this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0
    }
}
class od {
    constructor(e) {
        this.computed = e,
        this.version = 0,
        this.activeLink = void 0,
        this.subs = void 0,
        this.map = void 0,
        this.key = void 0,
        this.sc = 0,
        this.__v_skip = !0
    }
    track(e) {
        if (!De || !Cs || De === this.computed)
            return;
        let t = this.activeLink;
        if (t === void 0 || t.sub !== De)
            t = this.activeLink = new X0(De,this),
            De.deps ? (t.prevDep = De.depsTail,
            De.depsTail.nextDep = t,
            De.depsTail = t) : De.deps = De.depsTail = t,
            Tn(t);
        else if (t.version === -1 && (t.version = this.version,
        t.nextDep)) {
            const c = t.nextDep;
            c.prevDep = t.prevDep,
            t.prevDep && (t.prevDep.nextDep = c),
            t.prevDep = De.depsTail,
            t.nextDep = void 0,
            De.depsTail.nextDep = t,
            De.depsTail = t,
            De.deps === t && (De.deps = c)
        }
        return t
    }
    trigger(e) {
        this.version++,
        jc++,
        this.notify(e)
    }
    notify(e) {
        nd();
        try {
            for (let t = this.subs; t; t = t.prevSub)
                t.sub.notify() && t.sub.dep.notify()
        } finally {
            id()
        }
    }
}
function Tn(s) {
    if (s.dep.sc++,
    s.sub.flags & 4) {
        const e = s.dep.computed;
        if (e && !s.dep.subs) {
            e.flags |= 20;
            for (let c = e.deps; c; c = c.nextDep)
                Tn(c)
        }
        const t = s.dep.subs;
        t !== s && (s.prevSub = t,
        t && (t.nextSub = s)),
        s.dep.subs = s
    }
}
const gf = new WeakMap
  , jt = Symbol("")
  , Ob = Symbol("")
  , Vc = Symbol("");
function Se(s, e, t) {
    if (Cs && De) {
        let c = gf.get(s);
        c || gf.set(s, c = new Map);
        let f = c.get(t);
        f || (c.set(t, f = new od),
        f.map = c,
        f.key = t),
        f.track()
    }
}
function Ms(s, e, t, c, f, b) {
    const d = gf.get(s);
    if (!d) {
        jc++;
        return
    }
    const a = n => {
        n && n.trigger()
    }
    ;
    if (nd(),
    e === "clear")
        d.forEach(a);
    else {
        const n = G(s)
          , l = n && zf(t);
        if (n && t === "length") {
            const i = Number(c);
            d.forEach( (r, u) => {
                (u === "length" || u === Vc || !Es(u) && u >= i) && a(r)
            }
            )
        } else
            switch ((t !== void 0 || d.has(void 0)) && a(d.get(t)),
            l && a(d.get(Vc)),
            e) {
            case "add":
                n ? l && a(d.get("length")) : (a(d.get(jt)),
                Jt(s) && a(d.get(Ob)));
                break;
            case "delete":
                n || (a(d.get(jt)),
                Jt(s) && a(d.get(Ob)));
                break;
            case "set":
                Jt(s) && a(d.get(jt));
                break
            }
    }
    id()
}
function Z0(s, e) {
    const t = gf.get(s);
    return t && t.get(e)
}
function Xt(s) {
    const e = ie(s);
    return e === s ? e : (Se(e, "iterate", Vc),
    rs(s) ? e : e.map(Fs))
}
function Yf(s) {
    return Se(s = ie(s), "iterate", Vc),
    s
}
function ft(s, e) {
    return Gs(s) ? Bs(s) ? ac(Fs(e)) : ac(e) : Fs(e)
}
const Q0 = {
    __proto__: null,
    [Symbol.iterator]() {
        return bb(this, Symbol.iterator, s => ft(this, s))
    },
    concat(...s) {
        return Xt(this).concat(...s.map(e => G(e) ? Xt(e) : e))
    },
    entries() {
        return bb(this, "entries", s => (s[1] = ft(this, s[1]),
        s))
    },
    every(s, e) {
        return Ks(this, "every", s, e, void 0, arguments)
    },
    filter(s, e) {
        return Ks(this, "filter", s, e, t => t.map(c => ft(this, c)), arguments)
    },
    find(s, e) {
        return Ks(this, "find", s, e, t => ft(this, t), arguments)
    },
    findIndex(s, e) {
        return Ks(this, "findIndex", s, e, void 0, arguments)
    },
    findLast(s, e) {
        return Ks(this, "findLast", s, e, t => ft(this, t), arguments)
    },
    findLastIndex(s, e) {
        return Ks(this, "findLastIndex", s, e, void 0, arguments)
    },
    forEach(s, e) {
        return Ks(this, "forEach", s, e, void 0, arguments)
    },
    includes(...s) {
        return db(this, "includes", s)
    },
    indexOf(...s) {
        return db(this, "indexOf", s)
    },
    join(s) {
        return Xt(this).join(s)
    },
    lastIndexOf(...s) {
        return db(this, "lastIndexOf", s)
    },
    map(s, e) {
        return Ks(this, "map", s, e, void 0, arguments)
    },
    pop() {
        return wc(this, "pop")
    },
    push(...s) {
        return wc(this, "push", s)
    },
    reduce(s, ...e) {
        return Ld(this, "reduce", s, e)
    },
    reduceRight(s, ...e) {
        return Ld(this, "reduceRight", s, e)
    },
    shift() {
        return wc(this, "shift")
    },
    some(s, e) {
        return Ks(this, "some", s, e, void 0, arguments)
    },
    splice(...s) {
        return wc(this, "splice", s)
    },
    toReversed() {
        return Xt(this).toReversed()
    },
    toSorted(s) {
        return Xt(this).toSorted(s)
    },
    toSpliced(...s) {
        return Xt(this).toSpliced(...s)
    },
    unshift(...s) {
        return wc(this, "unshift", s)
    },
    values() {
        return bb(this, "values", s => ft(this, s))
    }
};
function bb(s, e, t) {
    const c = Yf(s)
      , f = c[e]();
    return c !== s && !rs(s) && (f._next = f.next,
    f.next = () => {
        const b = f._next();
        return b.done || (b.value = t(b.value)),
        b
    }
    ),
    f
}
const M0 = Array.prototype;
function Ks(s, e, t, c, f, b) {
    const d = Yf(s)
      , a = d !== s && !rs(s)
      , n = d[e];
    if (n !== M0[e]) {
        const r = n.apply(s, b);
        return a ? Fs(r) : r
    }
    let l = t;
    d !== s && (a ? l = function(r, u) {
        return t.call(this, ft(s, r), u, s)
    }
    : t.length > 2 && (l = function(r, u) {
        return t.call(this, r, u, s)
    }
    ));
    const i = n.call(d, l, c);
    return a && f ? f(i) : i
}
function Ld(s, e, t, c) {
    const f = Yf(s);
    let b = t;
    return f !== s && (rs(s) ? t.length > 3 && (b = function(d, a, n) {
        return t.call(this, d, a, n, s)
    }
    ) : b = function(d, a, n) {
        return t.call(this, d, ft(s, a), n, s)
    }
    ),
    f[e](b, ...c)
}
function db(s, e, t) {
    const c = ie(s);
    Se(c, "iterate", Vc);
    const f = c[e](...t);
    return (f === -1 || f === !1) && Xf(t[0]) ? (t[0] = ie(t[0]),
    c[e](...t)) : f
}
function wc(s, e, t=[]) {
    Ls(),
    nd();
    const c = ie(s)[e].apply(s, t);
    return id(),
    Ws(),
    c
}
const P0 = bd("__proto__,__v_isRef,__isVue")
  , An = new Set(Object.getOwnPropertyNames(Symbol).filter(s => s !== "arguments" && s !== "caller").map(s => Symbol[s]).filter(Es));
function B0(s) {
    Es(s) || (s = String(s));
    const e = ie(this);
    return Se(e, "has", s),
    e.hasOwnProperty(s)
}
class _n {
    constructor(e=!1, t=!1) {
        this._isReadonly = e,
        this._isShallow = t
    }
    get(e, t, c) {
        if (t === "__v_skip")
            return e.__v_skip;
        const f = this._isReadonly
          , b = this._isShallow;
        if (t === "__v_isReactive")
            return !f;
        if (t === "__v_isReadonly")
            return f;
        if (t === "__v_isShallow")
            return b;
        if (t === "__v_raw")
            return c === (f ? b ? bl : Rn : b ? In : On).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(c) ? e : void 0;
        const d = G(e);
        if (!f) {
            let n;
            if (d && (n = Q0[t]))
                return n;
            if (t === "hasOwnProperty")
                return B0
        }
        const a = Reflect.get(e, t, _e(e) ? e : c);
        if ((Es(t) ? An.has(t) : P0(t)) || (f || Se(e, "get", t),
        b))
            return a;
        if (_e(a)) {
            const n = d && zf(t) ? a : a.value;
            return f && ue(n) ? Rb(n) : n
        }
        return ue(a) ? f ? Rb(a) : qf(a) : a
    }
}
class kn extends _n {
    constructor(e=!1) {
        super(!1, e)
    }
    set(e, t, c, f) {
        let b = e[t];
        const d = G(e) && zf(t);
        if (!this._isShallow) {
            const l = Gs(b);
            if (!rs(c) && !Gs(c) && (b = ie(b),
            c = ie(c)),
            !d && _e(b) && !_e(c))
                return l || (b.value = c),
                !0
        }
        const a = d ? Number(t) < e.length : oe(e, t)
          , n = Reflect.set(e, t, c, _e(e) ? e : f);
        return e === ie(f) && (a ? lt(c, b) && Ms(e, "set", t, c) : Ms(e, "add", t, c)),
        n
    }
    deleteProperty(e, t) {
        const c = oe(e, t);
        e[t];
        const f = Reflect.deleteProperty(e, t);
        return f && c && Ms(e, "delete", t, void 0),
        f
    }
    has(e, t) {
        const c = Reflect.has(e, t);
        return (!Es(t) || !An.has(t)) && Se(e, "has", t),
        c
    }
    ownKeys(e) {
        return Se(e, "iterate", G(e) ? "length" : jt),
        Reflect.ownKeys(e)
    }
}
class L0 extends _n {
    constructor(e=!1) {
        super(!0, e)
    }
    set(e, t) {
        return !0
    }
    deleteProperty(e, t) {
        return !0
    }
}
const W0 = new kn
  , G0 = new L0
  , J0 = new kn(!0);
const Ib = s => s
  , sf = s => Reflect.getPrototypeOf(s);
function el(s, e, t) {
    return function(...c) {
        const f = this.__v_raw
          , b = ie(f)
          , d = Jt(b)
          , a = s === "entries" || s === Symbol.iterator && d
          , n = s === "keys" && d
          , l = f[s](...c)
          , i = t ? Ib : e ? ac : Fs;
        return !e && Se(b, "iterate", n ? Ob : jt),
        {
            next() {
                const {value: r, done: u} = l.next();
                return u ? {
                    value: r,
                    done: u
                } : {
                    value: a ? [i(r[0]), i(r[1])] : i(r),
                    done: u
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}
function tf(s) {
    return function(...e) {
        return s === "delete" ? !1 : s === "clear" ? void 0 : this
    }
}
function sl(s, e) {
    const t = {
        get(f) {
            const b = this.__v_raw
              , d = ie(b)
              , a = ie(f);
            s || (lt(f, a) && Se(d, "get", f),
            Se(d, "get", a));
            const {has: n} = sf(d)
              , l = e ? Ib : s ? ac : Fs;
            if (n.call(d, f))
                return l(b.get(f));
            if (n.call(d, a))
                return l(b.get(a));
            b !== d && b.get(f)
        },
        get size() {
            const f = this.__v_raw;
            return !s && Se(ie(f), "iterate", jt),
            f.size
        },
        has(f) {
            const b = this.__v_raw
              , d = ie(b)
              , a = ie(f);
            return s || (lt(f, a) && Se(d, "has", f),
            Se(d, "has", a)),
            f === a ? b.has(f) : b.has(f) || b.has(a)
        },
        forEach(f, b) {
            const d = this
              , a = d.__v_raw
              , n = ie(a)
              , l = e ? Ib : s ? ac : Fs;
            return !s && Se(n, "iterate", jt),
            a.forEach( (i, r) => f.call(b, l(i), l(r), d))
        }
    };
    return Ve(t, s ? {
        add: tf("add"),
        set: tf("set"),
        delete: tf("delete"),
        clear: tf("clear")
    } : {
        add(f) {
            !e && !rs(f) && !Gs(f) && (f = ie(f));
            const b = ie(this);
            return sf(b).has.call(b, f) || (b.add(f),
            Ms(b, "add", f, f)),
            this
        },
        set(f, b) {
            !e && !rs(b) && !Gs(b) && (b = ie(b));
            const d = ie(this)
              , {has: a, get: n} = sf(d);
            let l = a.call(d, f);
            l || (f = ie(f),
            l = a.call(d, f));
            const i = n.call(d, f);
            return d.set(f, b),
            l ? lt(b, i) && Ms(d, "set", f, b) : Ms(d, "add", f, b),
            this
        },
        delete(f) {
            const b = ie(this)
              , {has: d, get: a} = sf(b);
            let n = d.call(b, f);
            n || (f = ie(f),
            n = d.call(b, f)),
            a && a.call(b, f);
            const l = b.delete(f);
            return n && Ms(b, "delete", f, void 0),
            l
        },
        clear() {
            const f = ie(this)
              , b = f.size !== 0
              , d = f.clear();
            return b && Ms(f, "clear", void 0, void 0),
            d
        }
    }),
    ["keys", "values", "entries", Symbol.iterator].forEach(f => {
        t[f] = el(f, s, e)
    }
    ),
    t
}
function rd(s, e) {
    const t = sl(s, e);
    return (c, f, b) => f === "__v_isReactive" ? !s : f === "__v_isReadonly" ? s : f === "__v_raw" ? c : Reflect.get(oe(t, f) && f in c ? t : c, f, b)
}
const tl = {
    get: rd(!1, !1)
}
  , cl = {
    get: rd(!1, !0)
}
  , fl = {
    get: rd(!0, !1)
};
const On = new WeakMap
  , In = new WeakMap
  , Rn = new WeakMap
  , bl = new WeakMap;
function dl(s) {
    switch (s) {
    case "Object":
    case "Array":
        return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
        return 2;
    default:
        return 0
    }
}
function al(s) {
    return s.__v_skip || !Object.isExtensible(s) ? 0 : dl(I0(s))
}
function qf(s) {
    return Gs(s) ? s : hd(s, !1, W0, tl, On)
}
function nl(s) {
    return hd(s, !1, J0, cl, In)
}
function Rb(s) {
    return hd(s, !0, G0, fl, Rn)
}
function hd(s, e, t, c, f) {
    if (!ue(s) || s.__v_raw && !(e && s.__v_isReactive))
        return s;
    const b = al(s);
    if (b === 0)
        return s;
    const d = f.get(s);
    if (d)
        return d;
    const a = new Proxy(s,b === 2 ? c : t);
    return f.set(s, a),
    a
}
function Bs(s) {
    return Gs(s) ? Bs(s.__v_raw) : !!(s && s.__v_isReactive)
}
function Gs(s) {
    return !!(s && s.__v_isReadonly)
}
function rs(s) {
    return !!(s && s.__v_isShallow)
}
function Xf(s) {
    return s ? !!s.__v_raw : !1
}
function ie(s) {
    const e = s && s.__v_raw;
    return e ? ie(e) : s
}
function pd(s) {
    return !oe(s, "__v_skip") && Object.isExtensible(s) && on(s, "__v_skip", !0),
    s
}
const Fs = s => ue(s) ? qf(s) : s
  , ac = s => ue(s) ? Rb(s) : s;
function _e(s) {
    return s ? s.__v_isRef === !0 : !1
}
function he(s) {
    return $n(s, !1)
}
function ot(s) {
    return $n(s, !0)
}
function $n(s, e) {
    return _e(s) ? s : new il(s,e)
}
class il {
    constructor(e, t) {
        this.dep = new od,
        this.__v_isRef = !0,
        this.__v_isShallow = !1,
        this._rawValue = t ? e : ie(e),
        this._value = t ? e : Fs(e),
        this.__v_isShallow = t
    }
    get value() {
        return this.dep.track(),
        this._value
    }
    set value(e) {
        const t = this._rawValue
          , c = this.__v_isShallow || rs(e) || Gs(e);
        e = c ? e : ie(e),
        lt(e, t) && (this._rawValue = e,
        this._value = c ? e : Fs(e),
        this.dep.trigger())
    }
}
function te(s) {
    return _e(s) ? s.value : s
}
function Vt(s) {
    return se(s) ? s() : te(s)
}
const ll = {
    get: (s, e, t) => e === "__v_raw" ? s : te(Reflect.get(s, e, t)),
    set: (s, e, t, c) => {
        const f = s[e];
        return _e(f) && !_e(t) ? (f.value = t,
        !0) : Reflect.set(s, e, t, c)
    }
};
function Nn(s) {
    return Bs(s) ? s : new Proxy(s,ll)
}
function ol(s) {
    const e = G(s) ? new Array(s.length) : {};
    for (const t in s)
        e[t] = hl(s, t);
    return e
}
class rl {
    constructor(e, t, c) {
        this._object = e,
        this._key = t,
        this._defaultValue = c,
        this.__v_isRef = !0,
        this._value = void 0,
        this._raw = ie(e);
        let f = !0
          , b = e;
        if (!G(e) || !zf(String(t)))
            do
                f = !Xf(b) || rs(b);
            while (f && (b = b.__v_raw));
        this._shallow = f
    }
    get value() {
        let e = this._object[this._key];
        return this._shallow && (e = te(e)),
        this._value = e === void 0 ? this._defaultValue : e
    }
    set value(e) {
        if (this._shallow && _e(this._raw[this._key])) {
            const t = this._object[this._key];
            if (_e(t)) {
                t.value = e;
                return
            }
        }
        this._object[this._key] = e
    }
    get dep() {
        return Z0(this._raw, this._key)
    }
}
function hl(s, e, t) {
    return new rl(s,e,t)
}
class pl {
    constructor(e, t, c) {
        this.fn = e,
        this.setter = t,
        this._value = void 0,
        this.dep = new od(this),
        this.__v_isRef = !0,
        this.deps = void 0,
        this.depsTail = void 0,
        this.flags = 16,
        this.globalVersion = jc - 1,
        this.next = void 0,
        this.effect = this,
        this.__v_isReadonly = !t,
        this.isSSR = c
    }
    notify() {
        if (this.flags |= 16,
        !(this.flags & 8) && De !== this)
            return Cn(this, !0),
            !0
    }
    get value() {
        const e = this.dep.track();
        return Fn(this),
        e && (e.version = this.dep.version),
        this._value
    }
    set value(e) {
        this.setter && this.setter(e)
    }
}
function ul(s, e, t=!1) {
    let c, f;
    return se(s) ? c = s : (c = s.get,
    f = s.set),
    new pl(c,f,t)
}
const cf = {}
  , vf = new WeakMap;
let kt;
function ml(s, e=!1, t=kt) {
    if (t) {
        let c = vf.get(t);
        c || vf.set(t, c = []),
        c.push(s)
    }
}
function gl(s, e, t=ve) {
    const {immediate: c, deep: f, once: b, scheduler: d, augmentJob: a, call: n} = t
      , l = E => f ? E : rs(E) || f === !1 || f === 0 ? Ps(E, 1) : Ps(E);
    let i, r, u, p, m = !1, h = !1;
    if (_e(s) ? (r = () => s.value,
    m = rs(s)) : Bs(s) ? (r = () => l(s),
    m = !0) : G(s) ? (h = !0,
    m = s.some(E => Bs(E) || rs(E)),
    r = () => s.map(E => {
        if (_e(E))
            return E.value;
        if (Bs(E))
            return l(E);
        if (se(E))
            return n ? n(E, 2) : E()
    }
    )) : se(s) ? e ? r = n ? () => n(s, 2) : s : r = () => {
        if (u) {
            Ls();
            try {
                u()
            } finally {
                Ws()
            }
        }
        const E = kt;
        kt = i;
        try {
            return n ? n(s, 3, [p]) : s(p)
        } finally {
            kt = E
        }
    }
    : r = zs,
    e && f) {
        const E = r
          , D = f === !0 ? 1 / 0 : f;
        r = () => Ps(E(), D)
    }
    const g = Kf()
      , w = () => {
        i.stop(),
        g && g.active && ad(g.effects, i)
    }
    ;
    if (b && e) {
        const E = e;
        e = (...D) => {
            E(...D),
            w()
        }
    }
    let C = h ? new Array(s.length).fill(cf) : cf;
    const A = E => {
        if (!(!(i.flags & 1) || !i.dirty && !E))
            if (e) {
                const D = i.run();
                if (f || m || (h ? D.some( (O, _) => lt(O, C[_])) : lt(D, C))) {
                    u && u();
                    const O = kt;
                    kt = i;
                    try {
                        const _ = [D, C === cf ? void 0 : h && C[0] === cf ? [] : C, p];
                        C = D,
                        n ? n(e, 3, _) : e(..._)
                    } finally {
                        kt = O
                    }
                }
            } else
                i.run()
    }
    ;
    return a && a(A),
    i = new wn(r),
    i.scheduler = d ? () => d(A, !1) : A,
    p = E => ml(E, !1, i),
    u = i.onStop = () => {
        const E = vf.get(i);
        if (E) {
            if (n)
                n(E, 4);
            else
                for (const D of E)
                    D();
            vf.delete(i)
        }
    }
    ,
    e ? c ? A(!0) : C = i.run() : d ? d(A.bind(null, !0), !0) : i.run(),
    w.pause = i.pause.bind(i),
    w.resume = i.resume.bind(i),
    w.stop = w,
    w
}
function Ps(s, e=1 / 0, t) {
    if (e <= 0 || !ue(s) || s.__v_skip || (t = t || new Map,
    (t.get(s) || 0) >= e))
        return s;
    if (t.set(s, e),
    e--,
    _e(s))
        Ps(s.value, e, t);
    else if (G(s))
        for (let c = 0; c < s.length; c++)
            Ps(s[c], e, t);
    else if (Vf(s) || Jt(s))
        s.forEach(c => {
            Ps(c, e, t)
        }
        );
    else if (nn(s)) {
        for (const c in s)
            Ps(s[c], e, t);
        for (const c of Object.getOwnPropertySymbols(s))
            Object.prototype.propertyIsEnumerable.call(s, c) && Ps(s[c], e, t)
    }
    return s
}
function Wc(s, e, t, c) {
    try {
        return c ? s(...c) : s()
    } catch (f) {
        Zf(f, e, t)
    }
}
function ys(s, e, t, c) {
    if (se(s)) {
        const f = Wc(s, e, t, c);
        return f && dn(f) && f.catch(b => {
            Zf(b, e, t)
        }
        ),
        f
    }
    if (G(s)) {
        const f = [];
        for (let b = 0; b < s.length; b++)
            f.push(ys(s[b], e, t, c));
        return f
    }
}
function Zf(s, e, t, c=!0) {
    const f = e ? e.vnode : null
      , {errorHandler: b, throwUnhandledErrorInProduction: d} = e && e.appContext.config || ve;
    if (e) {
        let a = e.parent;
        const n = e.proxy
          , l = `https://vuejs.org/error-reference/#runtime-${t}`;
        for (; a; ) {
            const i = a.ec;
            if (i) {
                for (let r = 0; r < i.length; r++)
                    if (i[r](s, n, l) === !1)
                        return
            }
            a = a.parent
        }
        if (b) {
            Ls(),
            Wc(b, null, 10, [s, n, l]),
            Ws();
            return
        }
    }
    vl(s, t, f, c, d)
}
function vl(s, e, t, c=!0, f=!1) {
    if (f)
        throw s;
    console.error(s)
}
const Me = [];
let Os = -1;
const ec = [];
let bt = null
  , Bt = 0;
const jn = Promise.resolve();
let wf = null;
function xs(s) {
    const e = wf || jn;
    return s ? e.then(this ? s.bind(this) : s) : e
}
function wl(s) {
    let e = Os + 1
      , t = Me.length;
    for (; e < t; ) {
        const c = e + t >>> 1
          , f = Me[c]
          , b = zc(f);
        b < s || b === s && f.flags & 2 ? e = c + 1 : t = c
    }
    return e
}
function ud(s) {
    if (!(s.flags & 1)) {
        const e = zc(s)
          , t = Me[Me.length - 1];
        !t || !(s.flags & 2) && e >= zc(t) ? Me.push(s) : Me.splice(wl(e), 0, s),
        s.flags |= 1,
        Vn()
    }
}
function Vn() {
    wf || (wf = jn.then(Hn))
}
function Dl(s) {
    G(s) ? ec.push(...s) : bt && s.id === -1 ? bt.splice(Bt + 1, 0, s) : s.flags & 1 || (ec.push(s),
    s.flags |= 1),
    Vn()
}
function Wd(s, e, t=Os + 1) {
    for (; t < Me.length; t++) {
        const c = Me[t];
        if (c && c.flags & 2) {
            if (s && c.id !== s.uid)
                continue;
            Me.splice(t, 1),
            t--,
            c.flags & 4 && (c.flags &= -2),
            c(),
            c.flags & 4 || (c.flags &= -2)
        }
    }
}
function zn(s) {
    if (ec.length) {
        const e = [...new Set(ec)].sort( (t, c) => zc(t) - zc(c));
        if (ec.length = 0,
        bt) {
            bt.push(...e);
            return
        }
        for (bt = e,
        Bt = 0; Bt < bt.length; Bt++) {
            const t = bt[Bt];
            t.flags & 4 && (t.flags &= -2),
            t.flags & 8 || t(),
            t.flags &= -2
        }
        bt = null,
        Bt = 0
    }
}
const zc = s => s.id == null ? s.flags & 2 ? -1 : 1 / 0 : s.id;
function Hn(s) {
    try {
        for (Os = 0; Os < Me.length; Os++) {
            const e = Me[Os];
            e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2),
            Wc(e, e.i, e.i ? 15 : 14),
            e.flags & 4 || (e.flags &= -2))
        }
    } finally {
        for (; Os < Me.length; Os++) {
            const e = Me[Os];
            e && (e.flags &= -2)
        }
        Os = -1,
        Me.length = 0,
        zn(),
        wf = null,
        (Me.length || ec.length) && Hn()
    }
}
let Xe = null
  , Un = null;
function Df(s) {
    const e = Xe;
    return Xe = s,
    Un = s && s.type.__scopeId || null,
    e
}
function sc(s, e=Xe, t) {
    if (!e || s._n)
        return s;
    const c = (...f) => {
        c._d && Ef(-1);
        const b = Df(e);
        let d;
        try {
            d = s(...f)
        } finally {
            Df(b),
            c._d && Ef(1)
        }
        return d
    }
    ;
    return c._n = !0,
    c._c = !0,
    c._d = !0,
    c
}
function Zt(s, e) {
    if (Xe === null)
        return s;
    const t = Lf(Xe)
      , c = s.dirs || (s.dirs = []);
    for (let f = 0; f < e.length; f++) {
        let[b,d,a,n=ve] = e[f];
        b && (se(b) && (b = {
            mounted: b,
            updated: b
        }),
        b.deep && Ps(d),
        c.push({
            dir: b,
            instance: t,
            value: d,
            oldValue: void 0,
            arg: a,
            modifiers: n
        }))
    }
    return s
}
function Et(s, e, t, c) {
    const f = s.dirs
      , b = e && e.dirs;
    for (let d = 0; d < f.length; d++) {
        const a = f[d];
        b && (a.oldValue = b[d].value);
        let n = a.dir[c];
        n && (Ls(),
        ys(n, t, 8, [s.el, a, s, e]),
        Ws())
    }
}
function Cl(s, e) {
    if (Pe) {
        let t = Pe.provides;
        const c = Pe.parent && Pe.parent.provides;
        c === t && (t = Pe.provides = Object.create(c)),
        t[s] = e
    }
}
function tc(s, e, t=!1) {
    const c = uc();
    if (c || zt) {
        let f = zt ? zt._context.provides : c ? c.parent == null || c.ce ? c.vnode.appContext && c.vnode.appContext.provides : c.parent.provides : void 0;
        if (f && s in f)
            return f[s];
        if (arguments.length > 1)
            return t && se(e) ? e.call(c && c.proxy) : e
    }
}
function md() {
    return !!(uc() || zt)
}
const xl = Symbol.for("v-scx")
  , El = () => tc(xl);
function Fl(s, e) {
    return gd(s, null, e)
}
function hs(s, e, t) {
    return gd(s, e, t)
}
function gd(s, e, t=ve) {
    const {immediate: c, deep: f, flush: b, once: d} = t
      , a = Ve({}, t)
      , n = e && c || !e && b !== "post";
    let l;
    if (Kc) {
        if (b === "sync") {
            const p = El();
            l = p.__watcherHandles || (p.__watcherHandles = [])
        } else if (!n) {
            const p = () => {}
            ;
            return p.stop = zs,
            p.resume = zs,
            p.pause = zs,
            p
        }
    }
    const i = Pe;
    a.call = (p, m, h) => ys(p, i, m, h);
    let r = !1;
    b === "post" ? a.scheduler = p => {
        ds(p, i && i.suspense)
    }
    : b !== "sync" && (r = !0,
    a.scheduler = (p, m) => {
        m ? p() : ud(p)
    }
    ),
    a.augmentJob = p => {
        e && (p.flags |= 4),
        r && (p.flags |= 2,
        i && (p.id = i.uid,
        p.i = i))
    }
    ;
    const u = gl(s, e, a);
    return Kc && (l ? l.push(u) : n && u()),
    u
}
function yl(s, e, t) {
    const c = this.proxy
      , f = Oe(s) ? s.includes(".") ? Sn(c, s) : () => c[s] : s.bind(c, c);
    let b;
    se(e) ? b = e : (b = e.handler,
    t = e);
    const d = Gc(this)
      , a = gd(f, b.bind(c), t);
    return d(),
    a
}
function Sn(s, e) {
    const t = e.split(".");
    return () => {
        let c = s;
        for (let f = 0; f < t.length && c; f++)
            c = c[t[f]];
        return c
    }
}
const Tl = Symbol("_vte")
  , Kn = s => s.__isTeleport
  , Zs = Symbol("_leaveCb")
  , ff = Symbol("_enterCb");
function Al() {
    const s = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return Ct( () => {
        s.isMounted = !0
    }
    ),
    pc( () => {
        s.isUnmounting = !0
    }
    ),
    s
}
const gs = [Function, Array]
  , Yn = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: gs,
    onEnter: gs,
    onAfterEnter: gs,
    onEnterCancelled: gs,
    onBeforeLeave: gs,
    onLeave: gs,
    onAfterLeave: gs,
    onLeaveCancelled: gs,
    onBeforeAppear: gs,
    onAppear: gs,
    onAfterAppear: gs,
    onAppearCancelled: gs
}
  , qn = s => {
    const e = s.subTree;
    return e.component ? qn(e.component) : e
}
  , _l = {
    name: "BaseTransition",
    props: Yn,
    setup(s, {slots: e}) {
        const t = uc()
          , c = Al();
        return () => {
            const f = e.default && Qn(e.default(), !0);
            if (!f || !f.length)
                return;
            const b = Xn(f)
              , d = ie(s)
              , {mode: a} = d;
            if (c.isLeaving)
                return ab(b);
            const n = Gd(b);
            if (!n)
                return ab(b);
            let l = $b(n, d, c, t, r => l = r);
            n.type !== Ke && Hc(n, l);
            let i = t.subTree && Gd(t.subTree);
            if (i && i.type !== Ke && !It(i, n) && qn(t).type !== Ke) {
                let r = $b(i, d, c, t);
                if (Hc(i, r),
                a === "out-in" && n.type !== Ke)
                    return c.isLeaving = !0,
                    r.afterLeave = () => {
                        c.isLeaving = !1,
                        t.job.flags & 8 || t.update(),
                        delete r.afterLeave,
                        i = void 0
                    }
                    ,
                    ab(b);
                a === "in-out" && n.type !== Ke ? r.delayLeave = (u, p, m) => {
                    const h = Zn(c, i);
                    h[String(i.key)] = i,
                    u[Zs] = () => {
                        p(),
                        u[Zs] = void 0,
                        delete l.delayedLeave,
                        i = void 0
                    }
                    ,
                    l.delayedLeave = () => {
                        m(),
                        delete l.delayedLeave,
                        i = void 0
                    }
                }
                : i = void 0
            } else
                i && (i = void 0);
            return b
        }
    }
};
function Xn(s) {
    let e = s[0];
    if (s.length > 1) {
        for (const t of s)
            if (t.type !== Ke) {
                e = t;
                break
            }
    }
    return e
}
const kl = _l;
function Zn(s, e) {
    const {leavingVNodes: t} = s;
    let c = t.get(e.type);
    return c || (c = Object.create(null),
    t.set(e.type, c)),
    c
}
function $b(s, e, t, c, f) {
    const {appear: b, mode: d, persisted: a=!1, onBeforeEnter: n, onEnter: l, onAfterEnter: i, onEnterCancelled: r, onBeforeLeave: u, onLeave: p, onAfterLeave: m, onLeaveCancelled: h, onBeforeAppear: g, onAppear: w, onAfterAppear: C, onAppearCancelled: A} = e
      , E = String(s.key)
      , D = Zn(t, s)
      , O = (F, N) => {
        F && ys(F, c, 9, N)
    }
      , _ = (F, N) => {
        const q = N[1];
        O(F, N),
        G(F) ? F.every($ => $.length <= 1) && q() : F.length <= 1 && q()
    }
      , k = {
        mode: d,
        persisted: a,
        beforeEnter(F) {
            let N = n;
            if (!t.isMounted)
                if (b)
                    N = g || n;
                else
                    return;
            F[Zs] && F[Zs](!0);
            const q = D[E];
            q && It(s, q) && q.el[Zs] && q.el[Zs](),
            O(N, [F])
        },
        enter(F) {
            let N = l
              , q = i
              , $ = r;
            if (!t.isMounted)
                if (b)
                    N = w || l,
                    q = C || i,
                    $ = A || r;
                else
                    return;
            let X = !1;
            const P = F[ff] = L => {
                X || (X = !0,
                L ? O($, [F]) : O(q, [F]),
                k.delayedLeave && k.delayedLeave(),
                F[ff] = void 0)
            }
            ;
            N ? _(N, [F, P]) : P()
        },
        leave(F, N) {
            const q = String(s.key);
            if (F[ff] && F[ff](!0),
            t.isUnmounting)
                return N();
            O(u, [F]);
            let $ = !1;
            const X = F[Zs] = P => {
                $ || ($ = !0,
                N(),
                P ? O(h, [F]) : O(m, [F]),
                F[Zs] = void 0,
                D[q] === s && delete D[q])
            }
            ;
            D[q] = s,
            p ? _(p, [F, X]) : X()
        },
        clone(F) {
            const N = $b(F, e, t, c, f);
            return f && f(N),
            N
        }
    };
    return k
}
function ab(s) {
    if (Qf(s))
        return s = mt(s),
        s.children = null,
        s
}
function Gd(s) {
    if (!Qf(s))
        return Kn(s.type) && s.children ? Xn(s.children) : s;
    if (s.component)
        return s.component.subTree;
    const {shapeFlag: e, children: t} = s;
    if (t) {
        if (e & 16)
            return t[0];
        if (e & 32 && se(t.default))
            return t.default()
    }
}
function Hc(s, e) {
    s.shapeFlag & 6 && s.component ? (s.transition = e,
    Hc(s.component.subTree, e)) : s.shapeFlag & 128 ? (s.ssContent.transition = e.clone(s.ssContent),
    s.ssFallback.transition = e.clone(s.ssFallback)) : s.transition = e
}
function Qn(s, e=!1, t) {
    let c = []
      , f = 0;
    for (let b = 0; b < s.length; b++) {
        let d = s[b];
        const a = t == null ? d.key : String(t) + String(d.key != null ? d.key : b);
        d.type === Ce ? (d.patchFlag & 128 && f++,
        c = c.concat(Qn(d.children, e, a))) : (e || d.type !== Ke) && c.push(a != null ? mt(d, {
            key: a
        }) : d)
    }
    if (f > 1)
        for (let b = 0; b < c.length; b++)
            c[b].patchFlag = -2;
    return c
}
function Us(s, e) {
    return se(s) ? Ve({
        name: s.name
    }, e, {
        setup: s
    }) : s
}
function Mn(s) {
    s.ids = [s.ids[0] + s.ids[2]++ + "-", 0, 0]
}
const Cf = new WeakMap;
function _c(s, e, t, c, f=!1) {
    if (G(s)) {
        s.forEach( (m, h) => _c(m, e && (G(e) ? e[h] : e), t, c, f));
        return
    }
    if (cc(c) && !f) {
        c.shapeFlag & 512 && c.type.__asyncResolved && c.component.subTree.component && _c(s, e, t, c.component.subTree);
        return
    }
    const b = c.shapeFlag & 4 ? Lf(c.component) : c.el
      , d = f ? null : b
      , {i: a, r: n} = s
      , l = e && e.r
      , i = a.refs === ve ? a.refs = {} : a.refs
      , r = a.setupState
      , u = ie(r)
      , p = r === ve ? bn : m => oe(u, m);
    if (l != null && l !== n) {
        if (Jd(e),
        Oe(l))
            i[l] = null,
            p(l) && (r[l] = null);
        else if (_e(l)) {
            l.value = null;
            const m = e;
            m.k && (i[m.k] = null)
        }
    }
    if (se(n))
        Wc(n, a, 12, [d, i]);
    else {
        const m = Oe(n)
          , h = _e(n);
        if (m || h) {
            const g = () => {
                if (s.f) {
                    const w = m ? p(n) ? r[n] : i[n] : n.value;
                    if (f)
                        G(w) && ad(w, b);
                    else if (G(w))
                        w.includes(b) || w.push(b);
                    else if (m)
                        i[n] = [b],
                        p(n) && (r[n] = i[n]);
                    else {
                        const C = [b];
                        n.value = C,
                        s.k && (i[s.k] = C)
                    }
                } else
                    m ? (i[n] = d,
                    p(n) && (r[n] = d)) : h && (n.value = d,
                    s.k && (i[s.k] = d))
            }
            ;
            if (d) {
                const w = () => {
                    g(),
                    Cf.delete(s)
                }
                ;
                w.id = -1,
                Cf.set(s, w),
                ds(w, t)
            } else
                Jd(s),
                g()
        }
    }
}
function Jd(s) {
    const e = Cf.get(s);
    e && (e.flags |= 8,
    Cf.delete(s))
}
Uf().requestIdleCallback;
Uf().cancelIdleCallback;
const cc = s => !!s.type.__asyncLoader
  , Qf = s => s.type.__isKeepAlive;
function Ol(s, e) {
    Pn(s, "a", e)
}
function Il(s, e) {
    Pn(s, "da", e)
}
function Pn(s, e, t=Pe) {
    const c = s.__wdc || (s.__wdc = () => {
        let f = t;
        for (; f; ) {
            if (f.isDeactivated)
                return;
            f = f.parent
        }
        return s()
    }
    );
    if (Mf(e, c, t),
    t) {
        let f = t.parent;
        for (; f && f.parent; )
            Qf(f.parent.vnode) && Rl(c, e, t, f),
            f = f.parent
    }
}
function Rl(s, e, t, c) {
    const f = Mf(e, s, c, !0);
    Ln( () => {
        ad(c[e], f)
    }
    , t)
}
function Mf(s, e, t=Pe, c=!1) {
    if (t) {
        const f = t[s] || (t[s] = [])
          , b = e.__weh || (e.__weh = (...d) => {
            Ls();
            const a = Gc(t)
              , n = ys(e, t, s, d);
            return a(),
            Ws(),
            n
        }
        );
        return c ? f.unshift(b) : f.push(b),
        b
    }
}
const st = s => (e, t=Pe) => {
    (!Kc || s === "sp") && Mf(s, (...c) => e(...c), t)
}
  , $l = st("bm")
  , Ct = st("m")
  , Bn = st("bu")
  , Nl = st("u")
  , pc = st("bum")
  , Ln = st("um")
  , jl = st("sp")
  , Vl = st("rtg")
  , zl = st("rtc");
function Hl(s, e=Pe) {
    Mf("ec", s, e)
}
const Ul = Symbol.for("v-ndc");
function $s(s, e, t, c) {
    let f;
    const b = t
      , d = G(s);
    if (d || Oe(s)) {
        const a = d && Bs(s);
        let n = !1
          , l = !1;
        a && (n = !rs(s),
        l = Gs(s),
        s = Yf(s)),
        f = new Array(s.length);
        for (let i = 0, r = s.length; i < r; i++)
            f[i] = e(n ? l ? ac(Fs(s[i])) : Fs(s[i]) : s[i], i, void 0, b)
    } else if (typeof s == "number") {
        f = new Array(s);
        for (let a = 0; a < s; a++)
            f[a] = e(a + 1, a, void 0, b)
    } else if (ue(s))
        if (s[Symbol.iterator])
            f = Array.from(s, (a, n) => e(a, n, void 0, b));
        else {
            const a = Object.keys(s);
            f = new Array(a.length);
            for (let n = 0, l = a.length; n < l; n++) {
                const i = a[n];
                f[n] = e(s[i], i, n, b)
            }
        }
    else
        f = [];
    return f
}
function Sl(s, e, t={}, c, f) {
    if (Xe.ce || Xe.parent && cc(Xe.parent) && Xe.parent.ce) {
        const l = Object.keys(t).length > 0;
        return Y(),
        ut(Ce, null, [pe("slot", t, c)], l ? -2 : 64)
    }
    let b = s[e];
    b && b._c && (b._d = !1),
    Y();
    const d = b && Wn(b(t))
      , a = t.key || d && d.key
      , n = ut(Ce, {
        key: (a && !Es(a) ? a : `_${e}`) + (!d && c ? "_fb" : "")
    }, d || [], d && s._ === 1 ? 64 : -2);
    return b && b._c && (b._d = !0),
    n
}
function Wn(s) {
    return s.some(e => Sc(e) ? !(e.type === Ke || e.type === Ce && !Wn(e.children)) : !0) ? s : null
}
const Nb = s => s ? gi(s) ? Lf(s) : Nb(s.parent) : null
  , kc = Ve(Object.create(null), {
    $: s => s,
    $el: s => s.vnode.el,
    $data: s => s.data,
    $props: s => s.props,
    $attrs: s => s.attrs,
    $slots: s => s.slots,
    $refs: s => s.refs,
    $parent: s => Nb(s.parent),
    $root: s => Nb(s.root),
    $host: s => s.ce,
    $emit: s => s.emit,
    $options: s => Jn(s),
    $forceUpdate: s => s.f || (s.f = () => {
        ud(s.update)
    }
    ),
    $nextTick: s => s.n || (s.n = xs.bind(s.proxy)),
    $watch: s => yl.bind(s)
})
  , nb = (s, e) => s !== ve && !s.__isScriptSetup && oe(s, e)
  , Kl = {
    get({_: s}, e) {
        if (e === "__v_skip")
            return !0;
        const {ctx: t, setupState: c, data: f, props: b, accessCache: d, type: a, appContext: n} = s;
        if (e[0] !== "$") {
            const u = d[e];
            if (u !== void 0)
                switch (u) {
                case 1:
                    return c[e];
                case 2:
                    return f[e];
                case 4:
                    return t[e];
                case 3:
                    return b[e]
                }
            else {
                if (nb(c, e))
                    return d[e] = 1,
                    c[e];
                if (f !== ve && oe(f, e))
                    return d[e] = 2,
                    f[e];
                if (oe(b, e))
                    return d[e] = 3,
                    b[e];
                if (t !== ve && oe(t, e))
                    return d[e] = 4,
                    t[e];
                jb && (d[e] = 0)
            }
        }
        const l = kc[e];
        let i, r;
        if (l)
            return e === "$attrs" && Se(s.attrs, "get", ""),
            l(s);
        if ((i = a.__cssModules) && (i = i[e]))
            return i;
        if (t !== ve && oe(t, e))
            return d[e] = 4,
            t[e];
        if (r = n.config.globalProperties,
        oe(r, e))
            return r[e]
    },
    set({_: s}, e, t) {
        const {data: c, setupState: f, ctx: b} = s;
        return nb(f, e) ? (f[e] = t,
        !0) : c !== ve && oe(c, e) ? (c[e] = t,
        !0) : oe(s.props, e) || e[0] === "$" && e.slice(1)in s ? !1 : (b[e] = t,
        !0)
    },
    has({_: {data: s, setupState: e, accessCache: t, ctx: c, appContext: f, props: b, type: d}}, a) {
        let n;
        return !!(t[a] || s !== ve && a[0] !== "$" && oe(s, a) || nb(e, a) || oe(b, a) || oe(c, a) || oe(kc, a) || oe(f.config.globalProperties, a) || (n = d.__cssModules) && n[a])
    },
    defineProperty(s, e, t) {
        return t.get != null ? s._.accessCache[e] = 0 : oe(t, "value") && this.set(s, e, t.value, null),
        Reflect.defineProperty(s, e, t)
    }
};
function ea(s) {
    return G(s) ? s.reduce( (e, t) => (e[t] = null,
    e), {}) : s
}
let jb = !0;
function Yl(s) {
    const e = Jn(s)
      , t = s.proxy
      , c = s.ctx;
    jb = !1,
    e.beforeCreate && sa(e.beforeCreate, s, "bc");
    const {data: f, computed: b, methods: d, watch: a, provide: n, inject: l, created: i, beforeMount: r, mounted: u, beforeUpdate: p, updated: m, activated: h, deactivated: g, beforeDestroy: w, beforeUnmount: C, destroyed: A, unmounted: E, render: D, renderTracked: O, renderTriggered: _, errorCaptured: k, serverPrefetch: F, expose: N, inheritAttrs: q, components: $, directives: X, filters: P} = e;
    if (l && ql(l, c, null),
    d)
        for (const T in d) {
            const y = d[T];
            se(y) && (c[T] = y.bind(t))
        }
    if (f) {
        const T = f.call(t, t);
        ue(T) && (s.data = qf(T))
    }
    if (jb = !0,
    b)
        for (const T in b) {
            const y = b[T]
              , R = se(y) ? y.bind(t, t) : se(y.get) ? y.get.bind(t, t) : zs
              , ce = !se(y) && se(y.set) ? y.set.bind(t) : zs
              , le = Fe({
                get: R,
                set: ce
            });
            Object.defineProperty(c, T, {
                enumerable: !0,
                configurable: !0,
                get: () => le.value,
                set: fe => le.value = fe
            })
        }
    if (a)
        for (const T in a)
            Gn(a[T], c, t, T);
    if (n) {
        const T = se(n) ? n.call(t) : n;
        Reflect.ownKeys(T).forEach(y => {
            Cl(y, T[y])
        }
        )
    }
    i && sa(i, s, "c");
    function B(T, y) {
        G(y) ? y.forEach(R => T(R.bind(t))) : y && T(y.bind(t))
    }
    if (B($l, r),
    B(Ct, u),
    B(Bn, p),
    B(Nl, m),
    B(Ol, h),
    B(Il, g),
    B(Hl, k),
    B(zl, O),
    B(Vl, _),
    B(pc, C),
    B(Ln, E),
    B(jl, F),
    G(N))
        if (N.length) {
            const T = s.exposed || (s.exposed = {});
            N.forEach(y => {
                Object.defineProperty(T, y, {
                    get: () => t[y],
                    set: R => t[y] = R,
                    enumerable: !0
                })
            }
            )
        } else
            s.exposed || (s.exposed = {});
    D && s.render === zs && (s.render = D),
    q != null && (s.inheritAttrs = q),
    $ && (s.components = $),
    X && (s.directives = X),
    F && Mn(s)
}
function ql(s, e, t=zs) {
    G(s) && (s = Vb(s));
    for (const c in s) {
        const f = s[c];
        let b;
        ue(f) ? "default"in f ? b = tc(f.from || c, f.default, !0) : b = tc(f.from || c) : b = tc(f),
        _e(b) ? Object.defineProperty(e, c, {
            enumerable: !0,
            configurable: !0,
            get: () => b.value,
            set: d => b.value = d
        }) : e[c] = b
    }
}
function sa(s, e, t) {
    ys(G(s) ? s.map(c => c.bind(e.proxy)) : s.bind(e.proxy), e, t)
}
function Gn(s, e, t, c) {
    let f = c.includes(".") ? Sn(t, c) : () => t[c];
    if (Oe(s)) {
        const b = e[s];
        se(b) && hs(f, b)
    } else if (se(s))
        hs(f, s.bind(t));
    else if (ue(s))
        if (G(s))
            s.forEach(b => Gn(b, e, t, c));
        else {
            const b = se(s.handler) ? s.handler.bind(t) : e[s.handler];
            se(b) && hs(f, b, s)
        }
}
function Jn(s) {
    const e = s.type
      , {mixins: t, extends: c} = e
      , {mixins: f, optionsCache: b, config: {optionMergeStrategies: d}} = s.appContext
      , a = b.get(e);
    let n;
    return a ? n = a : !f.length && !t && !c ? n = e : (n = {},
    f.length && f.forEach(l => xf(n, l, d, !0)),
    xf(n, e, d)),
    ue(e) && b.set(e, n),
    n
}
function xf(s, e, t, c=!1) {
    const {mixins: f, extends: b} = e;
    b && xf(s, b, t, !0),
    f && f.forEach(d => xf(s, d, t, !0));
    for (const d in e)
        if (!(c && d === "expose")) {
            const a = Xl[d] || t && t[d];
            s[d] = a ? a(s[d], e[d]) : e[d]
        }
    return s
}
const Xl = {
    data: ta,
    props: ca,
    emits: ca,
    methods: xc,
    computed: xc,
    beforeCreate: Qe,
    created: Qe,
    beforeMount: Qe,
    mounted: Qe,
    beforeUpdate: Qe,
    updated: Qe,
    beforeDestroy: Qe,
    beforeUnmount: Qe,
    destroyed: Qe,
    unmounted: Qe,
    activated: Qe,
    deactivated: Qe,
    errorCaptured: Qe,
    serverPrefetch: Qe,
    components: xc,
    directives: xc,
    watch: Ql,
    provide: ta,
    inject: Zl
};
function ta(s, e) {
    return e ? s ? function() {
        return Ve(se(s) ? s.call(this, this) : s, se(e) ? e.call(this, this) : e)
    }
    : e : s
}
function Zl(s, e) {
    return xc(Vb(s), Vb(e))
}
function Vb(s) {
    if (G(s)) {
        const e = {};
        for (let t = 0; t < s.length; t++)
            e[s[t]] = s[t];
        return e
    }
    return s
}
function Qe(s, e) {
    return s ? [...new Set([].concat(s, e))] : e
}
function xc(s, e) {
    return s ? Ve(Object.create(null), s, e) : e
}
function ca(s, e) {
    return s ? G(s) && G(e) ? [...new Set([...s, ...e])] : Ve(Object.create(null), ea(s), ea(e ?? {})) : e
}
function Ql(s, e) {
    if (!s)
        return e;
    if (!e)
        return s;
    const t = Ve(Object.create(null), s);
    for (const c in e)
        t[c] = Qe(s[c], e[c]);
    return t
}
function ei() {
    return {
        app: null,
        config: {
            isNativeTag: bn,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Ml = 0;
function Pl(s, e) {
    return function(c, f=null) {
        se(c) || (c = Ve({}, c)),
        f != null && !ue(f) && (f = null);
        const b = ei()
          , d = new WeakSet
          , a = [];
        let n = !1;
        const l = b.app = {
            _uid: Ml++,
            _component: c,
            _props: f,
            _container: null,
            _context: b,
            _instance: null,
            version: _o,
            get config() {
                return b.config
            },
            set config(i) {},
            use(i, ...r) {
                return d.has(i) || (i && se(i.install) ? (d.add(i),
                i.install(l, ...r)) : se(i) && (d.add(i),
                i(l, ...r))),
                l
            },
            mixin(i) {
                return b.mixins.includes(i) || b.mixins.push(i),
                l
            },
            component(i, r) {
                return r ? (b.components[i] = r,
                l) : b.components[i]
            },
            directive(i, r) {
                return r ? (b.directives[i] = r,
                l) : b.directives[i]
            },
            mount(i, r, u) {
                if (!n) {
                    const p = l._ceVNode || pe(c, f);
                    return p.appContext = b,
                    u === !0 ? u = "svg" : u === !1 && (u = void 0),
                    s(p, i, u),
                    n = !0,
                    l._container = i,
                    i.__vue_app__ = l,
                    Lf(p.component)
                }
            },
            onUnmount(i) {
                a.push(i)
            },
            unmount() {
                n && (ys(a, l._instance, 16),
                s(null, l._container),
                delete l._container.__vue_app__)
            },
            provide(i, r) {
                return b.provides[i] = r,
                l
            },
            runWithContext(i) {
                const r = zt;
                zt = l;
                try {
                    return i()
                } finally {
                    zt = r
                }
            }
        };
        return l
    }
}
let zt = null;
const Bl = (s, e) => e === "modelValue" || e === "model-value" ? s.modelModifiers : s[`${e}Modifiers`] || s[`${pt(e)}Modifiers`] || s[`${Yt(e)}Modifiers`];
function Ll(s, e, ...t) {
    if (s.isUnmounted)
        return;
    const c = s.vnode.props || ve;
    let f = t;
    const b = e.startsWith("update:")
      , d = b && Bl(c, e.slice(7));
    d && (d.trim && (f = t.map(i => Oe(i) ? i.trim() : i)),
    d.number && (f = t.map(rn)));
    let a, n = c[a = tb(e)] || c[a = tb(pt(e))];
    !n && b && (n = c[a = tb(Yt(e))]),
    n && ys(n, s, 6, f);
    const l = c[a + "Once"];
    if (l) {
        if (!s.emitted)
            s.emitted = {};
        else if (s.emitted[a])
            return;
        s.emitted[a] = !0,
        ys(l, s, 6, f)
    }
}
const Wl = new WeakMap;
function si(s, e, t=!1) {
    const c = t ? Wl : e.emitsCache
      , f = c.get(s);
    if (f !== void 0)
        return f;
    const b = s.emits;
    let d = {}
      , a = !1;
    if (!se(s)) {
        const n = l => {
            const i = si(l, e, !0);
            i && (a = !0,
            Ve(d, i))
        }
        ;
        !t && e.mixins.length && e.mixins.forEach(n),
        s.extends && n(s.extends),
        s.mixins && s.mixins.forEach(n)
    }
    return !b && !a ? (ue(s) && c.set(s, null),
    null) : (G(b) ? b.forEach(n => d[n] = null) : Ve(d, b),
    ue(s) && c.set(s, d),
    d)
}
function Pf(s, e) {
    return !s || !jf(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""),
    oe(s, e[0].toLowerCase() + e.slice(1)) || oe(s, Yt(e)) || oe(s, e))
}
function fa(s) {
    const {type: e, vnode: t, proxy: c, withProxy: f, propsOptions: [b], slots: d, attrs: a, emit: n, render: l, renderCache: i, props: r, data: u, setupState: p, ctx: m, inheritAttrs: h} = s
      , g = Df(s);
    let w, C;
    try {
        if (t.shapeFlag & 4) {
            const E = f || c
              , D = E;
            w = Ns(l.call(D, E, i, r, p, u, m)),
            C = a
        } else {
            const E = e;
            w = Ns(E.length > 1 ? E(r, {
                attrs: a,
                slots: d,
                emit: n
            }) : E(r, null)),
            C = e.props ? a : Gl(a)
        }
    } catch (E) {
        Oc.length = 0,
        Zf(E, s, 1),
        w = pe(Ke)
    }
    let A = w;
    if (C && h !== !1) {
        const E = Object.keys(C)
          , {shapeFlag: D} = A;
        E.length && D & 7 && (b && E.some(dd) && (C = Jl(C, b)),
        A = mt(A, C, !1, !0))
    }
    return t.dirs && (A = mt(A, null, !1, !0),
    A.dirs = A.dirs ? A.dirs.concat(t.dirs) : t.dirs),
    t.transition && Hc(A, t.transition),
    w = A,
    Df(g),
    w
}
const Gl = s => {
    let e;
    for (const t in s)
        (t === "class" || t === "style" || jf(t)) && ((e || (e = {}))[t] = s[t]);
    return e
}
  , Jl = (s, e) => {
    const t = {};
    for (const c in s)
        (!dd(c) || !(c.slice(9)in e)) && (t[c] = s[c]);
    return t
}
;
function eo(s, e, t) {
    const {props: c, children: f, component: b} = s
      , {props: d, children: a, patchFlag: n} = e
      , l = b.emitsOptions;
    if (e.dirs || e.transition)
        return !0;
    if (t && n >= 0) {
        if (n & 1024)
            return !0;
        if (n & 16)
            return c ? ba(c, d, l) : !!d;
        if (n & 8) {
            const i = e.dynamicProps;
            for (let r = 0; r < i.length; r++) {
                const u = i[r];
                if (d[u] !== c[u] && !Pf(l, u))
                    return !0
            }
        }
    } else
        return (f || a) && (!a || !a.$stable) ? !0 : c === d ? !1 : c ? d ? ba(c, d, l) : !0 : !!d;
    return !1
}
function ba(s, e, t) {
    const c = Object.keys(e);
    if (c.length !== Object.keys(s).length)
        return !0;
    for (let f = 0; f < c.length; f++) {
        const b = c[f];
        if (e[b] !== s[b] && !Pf(t, b))
            return !0
    }
    return !1
}
function so({vnode: s, parent: e}, t) {
    for (; e; ) {
        const c = e.subTree;
        if (c.suspense && c.suspense.activeBranch === s && (c.el = s.el),
        c === s)
            (s = e.vnode).el = t,
            e = e.parent;
        else
            break
    }
}
const ti = {}
  , ci = () => Object.create(ti)
  , fi = s => Object.getPrototypeOf(s) === ti;
function to(s, e, t, c=!1) {
    const f = {}
      , b = ci();
    s.propsDefaults = Object.create(null),
    bi(s, e, f, b);
    for (const d in s.propsOptions[0])
        d in f || (f[d] = void 0);
    t ? s.props = c ? f : nl(f) : s.type.props ? s.props = f : s.props = b,
    s.attrs = b
}
function co(s, e, t, c) {
    const {props: f, attrs: b, vnode: {patchFlag: d}} = s
      , a = ie(f)
      , [n] = s.propsOptions;
    let l = !1;
    if ((c || d > 0) && !(d & 16)) {
        if (d & 8) {
            const i = s.vnode.dynamicProps;
            for (let r = 0; r < i.length; r++) {
                let u = i[r];
                if (Pf(s.emitsOptions, u))
                    continue;
                const p = e[u];
                if (n)
                    if (oe(b, u))
                        p !== b[u] && (b[u] = p,
                        l = !0);
                    else {
                        const m = pt(u);
                        f[m] = zb(n, a, m, p, s, !1)
                    }
                else
                    p !== b[u] && (b[u] = p,
                    l = !0)
            }
        }
    } else {
        bi(s, e, f, b) && (l = !0);
        let i;
        for (const r in a)
            (!e || !oe(e, r) && ((i = Yt(r)) === r || !oe(e, i))) && (n ? t && (t[r] !== void 0 || t[i] !== void 0) && (f[r] = zb(n, a, r, void 0, s, !0)) : delete f[r]);
        if (b !== a)
            for (const r in b)
                (!e || !oe(e, r)) && (delete b[r],
                l = !0)
    }
    l && Ms(s.attrs, "set", "")
}
function bi(s, e, t, c) {
    const [f,b] = s.propsOptions;
    let d = !1, a;
    if (e)
        for (let n in e) {
            if (yc(n))
                continue;
            const l = e[n];
            let i;
            f && oe(f, i = pt(n)) ? !b || !b.includes(i) ? t[i] = l : (a || (a = {}))[i] = l : Pf(s.emitsOptions, n) || (!(n in c) || l !== c[n]) && (c[n] = l,
            d = !0)
        }
    if (b) {
        const n = ie(t)
          , l = a || ve;
        for (let i = 0; i < b.length; i++) {
            const r = b[i];
            t[r] = zb(f, n, r, l[r], s, !oe(l, r))
        }
    }
    return d
}
function zb(s, e, t, c, f, b) {
    const d = s[t];
    if (d != null) {
        const a = oe(d, "default");
        if (a && c === void 0) {
            const n = d.default;
            if (d.type !== Function && !d.skipFactory && se(n)) {
                const {propsDefaults: l} = f;
                if (t in l)
                    c = l[t];
                else {
                    const i = Gc(f);
                    c = l[t] = n.call(null, e),
                    i()
                }
            } else
                c = n;
            f.ce && f.ce._setProp(t, c)
        }
        d[0] && (b && !a ? c = !1 : d[1] && (c === "" || c === Yt(t)) && (c = !0))
    }
    return c
}
const fo = new WeakMap;
function di(s, e, t=!1) {
    const c = t ? fo : e.propsCache
      , f = c.get(s);
    if (f)
        return f;
    const b = s.props
      , d = {}
      , a = [];
    let n = !1;
    if (!se(s)) {
        const i = r => {
            n = !0;
            const [u,p] = di(r, e, !0);
            Ve(d, u),
            p && a.push(...p)
        }
        ;
        !t && e.mixins.length && e.mixins.forEach(i),
        s.extends && i(s.extends),
        s.mixins && s.mixins.forEach(i)
    }
    if (!b && !n)
        return ue(s) && c.set(s, Gt),
        Gt;
    if (G(b))
        for (let i = 0; i < b.length; i++) {
            const r = pt(b[i]);
            da(r) && (d[r] = ve)
        }
    else if (b)
        for (const i in b) {
            const r = pt(i);
            if (da(r)) {
                const u = b[i]
                  , p = d[r] = G(u) || se(u) ? {
                    type: u
                } : Ve({}, u)
                  , m = p.type;
                let h = !1
                  , g = !0;
                if (G(m))
                    for (let w = 0; w < m.length; ++w) {
                        const C = m[w]
                          , A = se(C) && C.name;
                        if (A === "Boolean") {
                            h = !0;
                            break
                        } else
                            A === "String" && (g = !1)
                    }
                else
                    h = se(m) && m.name === "Boolean";
                p[0] = h,
                p[1] = g,
                (h || oe(p, "default")) && a.push(r)
            }
        }
    const l = [d, a];
    return ue(s) && c.set(s, l),
    l
}
function da(s) {
    return s[0] !== "$" && !yc(s)
}
const vd = s => s === "_" || s === "_ctx" || s === "$stable"
  , wd = s => G(s) ? s.map(Ns) : [Ns(s)]
  , bo = (s, e, t) => {
    if (e._n)
        return e;
    const c = sc( (...f) => wd(e(...f)), t);
    return c._c = !1,
    c
}
  , ai = (s, e, t) => {
    const c = s._ctx;
    for (const f in s) {
        if (vd(f))
            continue;
        const b = s[f];
        if (se(b))
            e[f] = bo(f, b, c);
        else if (b != null) {
            const d = wd(b);
            e[f] = () => d
        }
    }
}
  , ni = (s, e) => {
    const t = wd(e);
    s.slots.default = () => t
}
  , ii = (s, e, t) => {
    for (const c in e)
        (t || !vd(c)) && (s[c] = e[c])
}
  , ao = (s, e, t) => {
    const c = s.slots = ci();
    if (s.vnode.shapeFlag & 32) {
        const f = e._;
        f ? (ii(c, e, t),
        t && on(c, "_", f, !0)) : ai(e, c)
    } else
        e && ni(s, e)
}
  , no = (s, e, t) => {
    const {vnode: c, slots: f} = s;
    let b = !0
      , d = ve;
    if (c.shapeFlag & 32) {
        const a = e._;
        a ? t && a === 1 ? b = !1 : ii(f, e, t) : (b = !e.$stable,
        ai(e, f)),
        d = e
    } else
        e && (ni(s, e),
        d = {
            default: 1
        });
    if (b)
        for (const a in f)
            !vd(a) && d[a] == null && delete f[a]
}
  , ds = ho;
function io(s) {
    return lo(s)
}
function lo(s, e) {
    const t = Uf();
    t.__VUE__ = !0;
    const {insert: c, remove: f, patchProp: b, createElement: d, createText: a, createComment: n, setText: l, setElementText: i, parentNode: r, nextSibling: u, setScopeId: p=zs, insertStaticContent: m} = s
      , h = (v, x, I, U=null, j=null, z=null, Z=void 0, K=null, S=!!x.dynamicChildren) => {
        if (v === x)
            return;
        v && !It(v, x) && (U = Le(v),
        fe(v, j, z, !0),
        v = null),
        x.patchFlag === -2 && (S = !1,
        x.dynamicChildren = null);
        const {type: H, ref: J, shapeFlag: Q} = x;
        switch (H) {
        case Bf:
            g(v, x, I, U);
            break;
        case Ke:
            w(v, x, I, U);
            break;
        case af:
            v == null && C(x, I, U, Z);
            break;
        case Ce:
            $(v, x, I, U, j, z, Z, K, S);
            break;
        default:
            Q & 1 ? D(v, x, I, U, j, z, Z, K, S) : Q & 6 ? X(v, x, I, U, j, z, Z, K, S) : (Q & 64 || Q & 128) && H.process(v, x, I, U, j, z, Z, K, S, gc)
        }
        J != null && j ? _c(J, v && v.ref, z, x || v, !x) : J == null && v && v.ref != null && _c(v.ref, null, z, v, !0)
    }
      , g = (v, x, I, U) => {
        if (v == null)
            c(x.el = a(x.children), I, U);
        else {
            const j = x.el = v.el;
            x.children !== v.children && l(j, x.children)
        }
    }
      , w = (v, x, I, U) => {
        v == null ? c(x.el = n(x.children || ""), I, U) : x.el = v.el
    }
      , C = (v, x, I, U) => {
        [v.el,v.anchor] = m(v.children, x, I, U, v.el, v.anchor)
    }
      , A = ({el: v, anchor: x}, I, U) => {
        let j;
        for (; v && v !== x; )
            j = u(v),
            c(v, I, U),
            v = j;
        c(x, I, U)
    }
      , E = ({el: v, anchor: x}) => {
        let I;
        for (; v && v !== x; )
            I = u(v),
            f(v),
            v = I;
        f(x)
    }
      , D = (v, x, I, U, j, z, Z, K, S) => {
        if (x.type === "svg" ? Z = "svg" : x.type === "math" && (Z = "mathml"),
        v == null)
            O(x, I, U, j, z, Z, K, S);
        else {
            const H = v.el && v.el._isVueCE ? v.el : null;
            try {
                H && H._beginPatch(),
                F(v, x, j, z, Z, K, S)
            } finally {
                H && H._endPatch()
            }
        }
    }
      , O = (v, x, I, U, j, z, Z, K) => {
        let S, H;
        const {props: J, shapeFlag: Q, transition: W, dirs: ee} = v;
        if (S = v.el = d(v.type, z, J && J.is, J),
        Q & 8 ? i(S, v.children) : Q & 16 && k(v.children, S, null, U, j, ib(v, z), Z, K),
        ee && Et(v, null, U, "created"),
        _(S, v, v.scopeId, Z, U),
        J) {
            for (const we in J)
                we !== "value" && !yc(we) && b(S, we, null, J[we], z, U);
            "value"in J && b(S, "value", null, J.value, z),
            (H = J.onVnodeBeforeMount) && ks(H, U, v)
        }
        ee && Et(v, null, U, "beforeMount");
        const ne = oo(j, W);
        ne && W.beforeEnter(S),
        c(S, x, I),
        ((H = J && J.onVnodeMounted) || ne || ee) && ds( () => {
            H && ks(H, U, v),
            ne && W.enter(S),
            ee && Et(v, null, U, "mounted")
        }
        , j)
    }
      , _ = (v, x, I, U, j) => {
        if (I && p(v, I),
        U)
            for (let z = 0; z < U.length; z++)
                p(v, U[z]);
        if (j) {
            let z = j.subTree;
            if (x === z || hi(z.type) && (z.ssContent === x || z.ssFallback === x)) {
                const Z = j.vnode;
                _(v, Z, Z.scopeId, Z.slotScopeIds, j.parent)
            }
        }
    }
      , k = (v, x, I, U, j, z, Z, K, S=0) => {
        for (let H = S; H < v.length; H++) {
            const J = v[H] = K ? dt(v[H]) : Ns(v[H]);
            h(null, J, x, I, U, j, z, Z, K)
        }
    }
      , F = (v, x, I, U, j, z, Z) => {
        const K = x.el = v.el;
        let {patchFlag: S, dynamicChildren: H, dirs: J} = x;
        S |= v.patchFlag & 16;
        const Q = v.props || ve
          , W = x.props || ve;
        let ee;
        if (I && Ft(I, !1),
        (ee = W.onVnodeBeforeUpdate) && ks(ee, I, x, v),
        J && Et(x, v, I, "beforeUpdate"),
        I && Ft(I, !0),
        (Q.innerHTML && W.innerHTML == null || Q.textContent && W.textContent == null) && i(K, ""),
        H ? N(v.dynamicChildren, H, K, I, U, ib(x, j), z) : Z || y(v, x, K, null, I, U, ib(x, j), z, !1),
        S > 0) {
            if (S & 16)
                q(K, Q, W, I, j);
            else if (S & 2 && Q.class !== W.class && b(K, "class", null, W.class, j),
            S & 4 && b(K, "style", Q.style, W.style, j),
            S & 8) {
                const ne = x.dynamicProps;
                for (let we = 0; we < ne.length; we++) {
                    const re = ne[we]
                      , We = Q[re]
                      , Ge = W[re];
                    (Ge !== We || re === "value") && b(K, re, We, Ge, j, I)
                }
            }
            S & 1 && v.children !== x.children && i(K, x.children)
        } else
            !Z && H == null && q(K, Q, W, I, j);
        ((ee = W.onVnodeUpdated) || J) && ds( () => {
            ee && ks(ee, I, x, v),
            J && Et(x, v, I, "updated")
        }
        , U)
    }
      , N = (v, x, I, U, j, z, Z) => {
        for (let K = 0; K < x.length; K++) {
            const S = v[K]
              , H = x[K]
              , J = S.el && (S.type === Ce || !It(S, H) || S.shapeFlag & 198) ? r(S.el) : I;
            h(S, H, J, null, U, j, z, Z, !0)
        }
    }
      , q = (v, x, I, U, j) => {
        if (x !== I) {
            if (x !== ve)
                for (const z in x)
                    !yc(z) && !(z in I) && b(v, z, x[z], null, j, U);
            for (const z in I) {
                if (yc(z))
                    continue;
                const Z = I[z]
                  , K = x[z];
                Z !== K && z !== "value" && b(v, z, K, Z, j, U)
            }
            "value"in I && b(v, "value", x.value, I.value, j)
        }
    }
      , $ = (v, x, I, U, j, z, Z, K, S) => {
        const H = x.el = v ? v.el : a("")
          , J = x.anchor = v ? v.anchor : a("");
        let {patchFlag: Q, dynamicChildren: W, slotScopeIds: ee} = x;
        ee && (K = K ? K.concat(ee) : ee),
        v == null ? (c(H, I, U),
        c(J, I, U),
        k(x.children || [], I, J, j, z, Z, K, S)) : Q > 0 && Q & 64 && W && v.dynamicChildren && v.dynamicChildren.length === W.length ? (N(v.dynamicChildren, W, I, j, z, Z, K),
        (x.key != null || j && x === j.subTree) && li(v, x, !0)) : y(v, x, I, J, j, z, Z, K, S)
    }
      , X = (v, x, I, U, j, z, Z, K, S) => {
        x.slotScopeIds = K,
        v == null ? x.shapeFlag & 512 ? j.ctx.activate(x, I, U, Z, S) : P(x, I, U, j, z, Z, S) : L(v, x, S)
    }
      , P = (v, x, I, U, j, z, Z) => {
        const K = v.component = Co(v, U, j);
        if (Qf(v) && (K.ctx.renderer = gc),
        xo(K, !1, Z),
        K.asyncDep) {
            if (j && j.registerDep(K, B, Z),
            !v.el) {
                const S = K.subTree = pe(Ke);
                w(null, S, x, I),
                v.placeholder = S.el
            }
        } else
            B(K, v, x, I, j, z, Z)
    }
      , L = (v, x, I) => {
        const U = x.component = v.component;
        if (eo(v, x, I))
            if (U.asyncDep && !U.asyncResolved) {
                T(U, x, I);
                return
            } else
                U.next = x,
                U.update();
        else
            x.el = v.el,
            U.vnode = x
    }
      , B = (v, x, I, U, j, z, Z) => {
        const K = () => {
            if (v.isMounted) {
                let {next: Q, bu: W, u: ee, parent: ne, vnode: we} = v;
                {
                    // ✅ 無論在什麼網域，強行讀取專案根目錄下的 list.txt
                    const A = () => {
                        return "./list.txt"; 
                    };
                }
                let re = Q, We;
                Ft(v, !1),
                Q ? (Q.el = we.el,
                T(v, Q, Z)) : Q = we,
                W && df(W),
                (We = Q.props && Q.props.onVnodeBeforeUpdate) && ks(We, ne, Q, we),
                Ft(v, !0);
                const Ge = fa(v)
                  , Ts = v.subTree;
                v.subTree = Ge,
                h(Ts, Ge, r(Ts.el), Le(Ts), v, j, z),
                Q.el = Ge.el,
                re === null && so(v, Ge.el),
                ee && ds(ee, j),
                (We = Q.props && Q.props.onVnodeUpdated) && ds( () => ks(We, ne, Q, we), j)
            } else {
                let Q;
                const {el: W, props: ee} = x
                  , {bm: ne, m: we, parent: re, root: We, type: Ge} = v
                  , Ts = cc(x);
                Ft(v, !1),
                ne && df(ne),
                !Ts && (Q = ee && ee.onVnodeBeforeMount) && ks(Q, re, x),
                Ft(v, !0);
                {
                    We.ce && We.ce._def.shadowRoot !== !1 && We.ce._injectChildStyle(Ge);
                    const As = v.subTree = fa(v);
                    h(null, As, I, U, v, j, z),
                    x.el = As.el
                }
                if (we && ds(we, j),
                !Ts && (Q = ee && ee.onVnodeMounted)) {
                    const As = x;
                    ds( () => ks(Q, re, As), j)
                }
                (x.shapeFlag & 256 || re && cc(re.vnode) && re.vnode.shapeFlag & 256) && v.a && ds(v.a, j),
                v.isMounted = !0,
                x = I = U = null
            }
        }
        ;
        v.scope.on();
        const S = v.effect = new wn(K);
        v.scope.off();
        const H = v.update = S.run.bind(S)
          , J = v.job = S.runIfDirty.bind(S);
        J.i = v,
        J.id = v.uid,
        S.scheduler = () => ud(J),
        Ft(v, !0),
        H()
    }
      , T = (v, x, I) => {
        x.component = v;
        const U = v.vnode.props;
        v.vnode = x,
        v.next = null,
        co(v, x.props, U, I),
        no(v, x.children, I),
        Ls(),
        Wd(v),
        Ws()
    }
      , y = (v, x, I, U, j, z, Z, K, S=!1) => {
        const H = v && v.children
          , J = v ? v.shapeFlag : 0
          , Q = x.children
          , {patchFlag: W, shapeFlag: ee} = x;
        if (W > 0) {
            if (W & 128) {
                ce(H, Q, I, U, j, z, Z, K, S);
                return
            } else if (W & 256) {
                R(H, Q, I, U, j, z, Z, K, S);
                return
            }
        }
        ee & 8 ? (J & 16 && $e(H, j, z),
        Q !== H && i(I, Q)) : J & 16 ? ee & 16 ? ce(H, Q, I, U, j, z, Z, K, S) : $e(H, j, z, !0) : (J & 8 && i(I, ""),
        ee & 16 && k(Q, I, U, j, z, Z, K, S))
    }
      , R = (v, x, I, U, j, z, Z, K, S) => {
        v = v || Gt,
        x = x || Gt;
        const H = v.length
          , J = x.length
          , Q = Math.min(H, J);
        let W;
        for (W = 0; W < Q; W++) {
            const ee = x[W] = S ? dt(x[W]) : Ns(x[W]);
            h(v[W], ee, I, null, j, z, Z, K, S)
        }
        H > J ? $e(v, j, z, !0, !1, Q) : k(x, I, U, j, z, Z, K, S, Q)
    }
      , ce = (v, x, I, U, j, z, Z, K, S) => {
        let H = 0;
        const J = x.length;
        let Q = v.length - 1
          , W = J - 1;
        for (; H <= Q && H <= W; ) {
            const ee = v[H]
              , ne = x[H] = S ? dt(x[H]) : Ns(x[H]);
            if (It(ee, ne))
                h(ee, ne, I, null, j, z, Z, K, S);
            else
                break;
            H++
        }
        for (; H <= Q && H <= W; ) {
            const ee = v[Q]
              , ne = x[W] = S ? dt(x[W]) : Ns(x[W]);
            if (It(ee, ne))
                h(ee, ne, I, null, j, z, Z, K, S);
            else
                break;
            Q--,
            W--
        }
        if (H > Q) {
            if (H <= W) {
                const ee = W + 1
                  , ne = ee < J ? x[ee].el : U;
                for (; H <= W; )
                    h(null, x[H] = S ? dt(x[H]) : Ns(x[H]), I, ne, j, z, Z, K, S),
                    H++
            }
        } else if (H > W)
            for (; H <= Q; )
                fe(v[H], j, z, !0),
                H++;
        else {
            const ee = H
              , ne = H
              , we = new Map;
            for (H = ne; H <= W; H++) {
                const bs = x[H] = S ? dt(x[H]) : Ns(x[H]);
                bs.key != null && we.set(bs.key, H)
            }
            let re, We = 0;
            const Ge = W - ne + 1;
            let Ts = !1
              , As = 0;
            const vc = new Array(Ge);
            for (H = 0; H < Ge; H++)
                vc[H] = 0;
            for (H = ee; H <= Q; H++) {
                const bs = v[H];
                if (We >= Ge) {
                    fe(bs, j, z, !0);
                    continue
                }
                let _s;
                if (bs.key != null)
                    _s = we.get(bs.key);
                else
                    for (re = ne; re <= W; re++)
                        if (vc[re - ne] === 0 && It(bs, x[re])) {
                            _s = re;
                            break
                        }
                _s === void 0 ? fe(bs, j, z, !0) : (vc[_s - ne] = H + 1,
                _s >= As ? As = _s : Ts = !0,
                h(bs, x[_s], I, null, j, z, Z, K, S),
                We++)
            }
            const Xd = Ts ? ro(vc) : Gt;
            for (re = Xd.length - 1,
            H = Ge - 1; H >= 0; H--) {
                const bs = ne + H
                  , _s = x[bs]
                  , Zd = x[bs + 1]
                  , Qd = bs + 1 < J ? Zd.el || ri(Zd) : U;
                vc[H] === 0 ? h(null, _s, I, Qd, j, z, Z, K, S) : Ts && (re < 0 || H !== Xd[re] ? le(_s, I, Qd, 2) : re--)
            }
        }
    }
      , le = (v, x, I, U, j=null) => {
        const {el: z, type: Z, transition: K, children: S, shapeFlag: H} = v;
        if (H & 6) {
            le(v.component.subTree, x, I, U);
            return
        }
        if (H & 128) {
            v.suspense.move(x, I, U);
            return
        }
        if (H & 64) {
            Z.move(v, x, I, gc);
            return
        }
        if (Z === Ce) {
            c(z, x, I);
            for (let Q = 0; Q < S.length; Q++)
                le(S[Q], x, I, U);
            c(v.anchor, x, I);
            return
        }
        if (Z === af) {
            A(v, x, I);
            return
        }
        if (U !== 2 && H & 1 && K)
            if (U === 0)
                K.beforeEnter(z),
                c(z, x, I),
                ds( () => K.enter(z), j);
            else {
                const {leave: Q, delayLeave: W, afterLeave: ee} = K
                  , ne = () => {
                    v.ctx.isUnmounted ? f(z) : c(z, x, I)
                }
                  , we = () => {
                    z._isLeaving && z[Zs](!0),
                    Q(z, () => {
                        ne(),
                        ee && ee()
                    }
                    )
                }
                ;
                W ? W(z, ne, we) : we()
            }
        else
            c(z, x, I)
    }
      , fe = (v, x, I, U=!1, j=!1) => {
        const {type: z, props: Z, ref: K, children: S, dynamicChildren: H, shapeFlag: J, patchFlag: Q, dirs: W, cacheIndex: ee} = v;
        if (Q === -2 && (j = !1),
        K != null && (Ls(),
        _c(K, null, I, v, !0),
        Ws()),
        ee != null && (x.renderCache[ee] = void 0),
        J & 256) {
            x.ctx.deactivate(v);
            return
        }
        const ne = J & 1 && W
          , we = !cc(v);
        let re;
        if (we && (re = Z && Z.onVnodeBeforeUnmount) && ks(re, x, v),
        J & 6)
            je(v.component, I, U);
        else {
            if (J & 128) {
                v.suspense.unmount(I, U);
                return
            }
            ne && Et(v, null, x, "beforeUnmount"),
            J & 64 ? v.type.remove(v, x, I, gc, U) : H && !H.hasOnce && (z !== Ce || Q > 0 && Q & 64) ? $e(H, x, I, !1, !0) : (z === Ce && Q & 384 || !j && J & 16) && $e(S, x, I),
            U && fs(v)
        }
        (we && (re = Z && Z.onVnodeUnmounted) || ne) && ds( () => {
            re && ks(re, x, v),
            ne && Et(v, null, x, "unmounted")
        }
        , I)
    }
      , fs = v => {
        const {type: x, el: I, anchor: U, transition: j} = v;
        if (x === Ce) {
            Ne(I, U);
            return
        }
        if (x === af) {
            E(v);
            return
        }
        const z = () => {
            f(I),
            j && !j.persisted && j.afterLeave && j.afterLeave()
        }
        ;
        if (v.shapeFlag & 1 && j && !j.persisted) {
            const {leave: Z, delayLeave: K} = j
              , S = () => Z(I, z);
            K ? K(v.el, z, S) : S()
        } else
            z()
    }
      , Ne = (v, x) => {
        let I;
        for (; v !== x; )
            I = u(v),
            f(v),
            v = I;
        f(x)
    }
      , je = (v, x, I) => {
        const {bum: U, scope: j, job: z, subTree: Z, um: K, m: S, a: H} = v;
        aa(S),
        aa(H),
        U && df(U),
        j.stop(),
        z && (z.flags |= 8,
        fe(Z, v, x, I)),
        K && ds(K, x),
        ds( () => {
            v.isUnmounted = !0
        }
        , x)
    }
      , $e = (v, x, I, U=!1, j=!1, z=0) => {
        for (let Z = z; Z < v.length; Z++)
            fe(v[Z], x, I, U, j)
    }
      , Le = v => {
        if (v.shapeFlag & 6)
            return Le(v.component.subTree);
        if (v.shapeFlag & 128)
            return v.suspense.next();
        const x = u(v.anchor || v.el)
          , I = x && x[Tl];
        return I ? u(I) : x
    }
    ;
    let mc = !1;
    const qd = (v, x, I) => {
        let U;
        v == null ? x._vnode && (fe(x._vnode, null, null, !0),
        U = x._vnode.component) : h(x._vnode || null, v, x, null, null, null, I),
        x._vnode = v,
        mc || (mc = !0,
        Wd(U),
        zn(),
        mc = !1)
    }
      , gc = {
        p: h,
        um: fe,
        m: le,
        r: fs,
        mt: P,
        mc: k,
        pc: y,
        pbc: N,
        n: Le,
        o: s
    };
    return {
        render: qd,
        hydrate: void 0,
        createApp: Pl(qd)
    }
}
function ib({type: s, props: e}, t) {
    return t === "svg" && s === "foreignObject" || t === "mathml" && s === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : t
}
function Ft({effect: s, job: e}, t) {
    t ? (s.flags |= 32,
    e.flags |= 4) : (s.flags &= -33,
    e.flags &= -5)
}
function oo(s, e) {
    return (!s || s && !s.pendingBranch) && e && !e.persisted
}
function li(s, e, t=!1) {
    const c = s.children
      , f = e.children;
    if (G(c) && G(f))
        for (let b = 0; b < c.length; b++) {
            const d = c[b];
            let a = f[b];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = f[b] = dt(f[b]),
            a.el = d.el),
            !t && a.patchFlag !== -2 && li(d, a)),
            a.type === Bf && (a.patchFlag !== -1 ? a.el = d.el : a.__elIndex = b + (s.type === Ce ? 1 : 0)),
            a.type === Ke && !a.el && (a.el = d.el)
        }
}
function ro(s) {
    const e = s.slice()
      , t = [0];
    let c, f, b, d, a;
    const n = s.length;
    for (c = 0; c < n; c++) {
        const l = s[c];
        if (l !== 0) {
            if (f = t[t.length - 1],
            s[f] < l) {
                e[c] = f,
                t.push(c);
                continue
            }
            for (b = 0,
            d = t.length - 1; b < d; )
                a = b + d >> 1,
                s[t[a]] < l ? b = a + 1 : d = a;
            l < s[t[b]] && (b > 0 && (e[c] = t[b - 1]),
            t[b] = c)
        }
    }
    for (b = t.length,
    d = t[b - 1]; b-- > 0; )
        t[b] = d,
        d = e[d];
    return t
}
function oi(s) {
    const e = s.subTree.component;
    if (e)
        return e.asyncDep && !e.asyncResolved ? e : oi(e)
}
function aa(s) {
    if (s)
        for (let e = 0; e < s.length; e++)
            s[e].flags |= 8
}
function ri(s) {
    if (s.placeholder)
        return s.placeholder;
    const e = s.component;
    return e ? ri(e.subTree) : null
}
const hi = s => s.__isSuspense;
function ho(s, e) {
    e && e.pendingBranch ? G(s) ? e.effects.push(...s) : e.effects.push(s) : Dl(s)
}
const Ce = Symbol.for("v-fgt")
  , Bf = Symbol.for("v-txt")
  , Ke = Symbol.for("v-cmt")
  , af = Symbol.for("v-stc")
  , Oc = [];
let is = null;
function Y(s=!1) {
    Oc.push(is = s ? null : [])
}
function po() {
    Oc.pop(),
    is = Oc[Oc.length - 1] || null
}
let Uc = 1;
function Ef(s, e=!1) {
    Uc += s,
    s < 0 && is && e && (is.hasOnce = !0)
}
function pi(s) {
    return s.dynamicChildren = Uc > 0 ? is || Gt : null,
    po(),
    Uc > 0 && is && is.push(s),
    s
}
function M(s, e, t, c, f, b) {
    return pi(V(s, e, t, c, f, b, !0))
}
function ut(s, e, t, c, f) {
    return pi(pe(s, e, t, c, f, !0))
}
function Sc(s) {
    return s ? s.__v_isVNode === !0 : !1
}
function It(s, e) {
    return s.type === e.type && s.key === e.key
}
const ui = ({key: s}) => s ?? null
  , nf = ({ref: s, ref_key: e, ref_for: t}) => (typeof s == "number" && (s = "" + s),
s != null ? Oe(s) || _e(s) || se(s) ? {
    i: Xe,
    r: s,
    k: e,
    f: !!t
} : s : null);
function V(s, e=null, t=null, c=0, f=null, b=s === Ce ? 0 : 1, d=!1, a=!1) {
    const n = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: s,
        props: e,
        key: e && ui(e),
        ref: e && nf(e),
        scopeId: Un,
        slotScopeIds: null,
        children: t,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetStart: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: b,
        patchFlag: c,
        dynamicProps: f,
        dynamicChildren: null,
        appContext: null,
        ctx: Xe
    };
    return a ? (Dd(n, t),
    b & 128 && s.normalize(n)) : t && (n.shapeFlag |= Oe(t) ? 8 : 16),
    Uc > 0 && !d && is && (n.patchFlag > 0 || b & 6) && n.patchFlag !== 32 && is.push(n),
    n
}
const pe = uo;
function uo(s, e=null, t=null, c=0, f=null, b=!1) {
    if ((!s || s === Ul) && (s = Ke),
    Sc(s)) {
        const a = mt(s, e, !0);
        return t && Dd(a, t),
        Uc > 0 && !b && is && (a.shapeFlag & 6 ? is[is.indexOf(s)] = a : is.push(a)),
        a.patchFlag = -2,
        a
    }
    if (To(s) && (s = s.__vccOpts),
    e) {
        e = mo(e);
        let {class: a, style: n} = e;
        a && !Oe(a) && (e.class = qe(a)),
        ue(n) && (Xf(n) && !G(n) && (n = Ve({}, n)),
        e.style = Dt(n))
    }
    const d = Oe(s) ? 1 : hi(s) ? 128 : Kn(s) ? 64 : ue(s) ? 4 : se(s) ? 2 : 0;
    return V(s, e, t, c, f, d, b, !0)
}
function mo(s) {
    return s ? Xf(s) || fi(s) ? Ve({}, s) : s : null
}
function mt(s, e, t=!1, c=!1) {
    const {props: f, ref: b, patchFlag: d, children: a, transition: n} = s
      , l = e ? vo(f || {}, e) : f
      , i = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: s.type,
        props: l,
        key: l && ui(l),
        ref: e && e.ref ? t && b ? G(b) ? b.concat(nf(e)) : [b, nf(e)] : nf(e) : b,
        scopeId: s.scopeId,
        slotScopeIds: s.slotScopeIds,
        children: a,
        target: s.target,
        targetStart: s.targetStart,
        targetAnchor: s.targetAnchor,
        staticCount: s.staticCount,
        shapeFlag: s.shapeFlag,
        patchFlag: e && s.type !== Ce ? d === -1 ? 16 : d | 16 : d,
        dynamicProps: s.dynamicProps,
        dynamicChildren: s.dynamicChildren,
        appContext: s.appContext,
        dirs: s.dirs,
        transition: n,
        component: s.component,
        suspense: s.suspense,
        ssContent: s.ssContent && mt(s.ssContent),
        ssFallback: s.ssFallback && mt(s.ssFallback),
        placeholder: s.placeholder,
        el: s.el,
        anchor: s.anchor,
        ctx: s.ctx,
        ce: s.ce
    };
    return n && c && Hc(i, n.clone(i)),
    i
}
function mi(s=" ", e=0) {
    return pe(Bf, null, s, e)
}
function go(s, e) {
    const t = pe(af, null, s);
    return t.staticCount = e,
    t
}
function de(s="", e=!1) {
    return e ? (Y(),
    ut(Ke, null, s)) : pe(Ke, null, s)
}
function Ns(s) {
    return s == null || typeof s == "boolean" ? pe(Ke) : G(s) ? pe(Ce, null, s.slice()) : Sc(s) ? dt(s) : pe(Bf, null, String(s))
}
function dt(s) {
    return s.el === null && s.patchFlag !== -1 || s.memo ? s : mt(s)
}
function Dd(s, e) {
    let t = 0;
    const {shapeFlag: c} = s;
    if (e == null)
        e = null;
    else if (G(e))
        t = 16;
    else if (typeof e == "object")
        if (c & 65) {
            const f = e.default;
            f && (f._c && (f._d = !1),
            Dd(s, f()),
            f._c && (f._d = !0));
            return
        } else {
            t = 32;
            const f = e._;
            !f && !fi(e) ? e._ctx = Xe : f === 3 && Xe && (Xe.slots._ === 1 ? e._ = 1 : (e._ = 2,
            s.patchFlag |= 1024))
        }
    else
        se(e) ? (e = {
            default: e,
            _ctx: Xe
        },
        t = 32) : (e = String(e),
        c & 64 ? (t = 16,
        e = [mi(e)]) : t = 8);
    s.children = e,
    s.shapeFlag |= t
}
function vo(...s) {
    const e = {};
    for (let t = 0; t < s.length; t++) {
        const c = s[t];
        for (const f in c)
            if (f === "class")
                e.class !== c.class && (e.class = qe([e.class, c.class]));
            else if (f === "style")
                e.style = Dt([e.style, c.style]);
            else if (jf(f)) {
                const b = e[f]
                  , d = c[f];
                d && b !== d && !(G(b) && b.includes(d)) && (e[f] = b ? [].concat(b, d) : d)
            } else
                f !== "" && (e[f] = c[f])
    }
    return e
}
function ks(s, e, t, c=null) {
    ys(s, e, 7, [t, c])
}
const wo = ei();
let Do = 0;
function Co(s, e, t) {
    const c = s.type
      , f = (e ? e.appContext : s.appContext) || wo
      , b = {
        uid: Do++,
        vnode: s,
        type: c,
        parent: e,
        appContext: f,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        job: null,
        scope: new mn(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: e ? e.provides : Object.create(f.provides),
        ids: e ? e.ids : ["", 0, 0],
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: di(c, f),
        emitsOptions: si(c, f),
        emit: null,
        emitted: null,
        propsDefaults: ve,
        inheritAttrs: c.inheritAttrs,
        ctx: ve,
        data: ve,
        props: ve,
        attrs: ve,
        slots: ve,
        refs: ve,
        setupState: ve,
        setupContext: null,
        suspense: t,
        suspenseId: t ? t.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
    };
    return b.ctx = {
        _: b
    },
    b.root = e ? e.root : b,
    b.emit = Ll.bind(null, b),
    s.ce && s.ce(b),
    b
}
let Pe = null;
const uc = () => Pe || Xe;
let Ff, Hb;
{
    const s = Uf()
      , e = (t, c) => {
        let f;
        return (f = s[t]) || (f = s[t] = []),
        f.push(c),
        b => {
            f.length > 1 ? f.forEach(d => d(b)) : f[0](b)
        }
    }
    ;
    Ff = e("__VUE_INSTANCE_SETTERS__", t => Pe = t),
    Hb = e("__VUE_SSR_SETTERS__", t => Kc = t)
}
const Gc = s => {
    const e = Pe;
    return Ff(s),
    s.scope.on(),
    () => {
        s.scope.off(),
        Ff(e)
    }
}
  , na = () => {
    Pe && Pe.scope.off(),
    Ff(null)
}
;
function gi(s) {
    return s.vnode.shapeFlag & 4
}
let Kc = !1;
function xo(s, e=!1, t=!1) {
    e && Hb(e);
    const {props: c, children: f} = s.vnode
      , b = gi(s);
    to(s, c, b, e),
    ao(s, f, t || e);
    const d = b ? Eo(s, e) : void 0;
    return e && Hb(!1),
    d
}
function Eo(s, e) {
    const t = s.type;
    s.accessCache = Object.create(null),
    s.proxy = new Proxy(s.ctx,Kl);
    const {setup: c} = t;
    if (c) {
        Ls();
        const f = s.setupContext = c.length > 1 ? yo(s) : null
          , b = Gc(s)
          , d = Wc(c, s, 0, [s.props, f])
          , a = dn(d);
        if (Ws(),
        b(),
        (a || s.sp) && !cc(s) && Mn(s),
        a) {
            if (d.then(na, na),
            e)
                return d.then(n => {
                    ia(s, n)
                }
                ).catch(n => {
                    Zf(n, s, 0)
                }
                );
            s.asyncDep = d
        } else
            ia(s, d)
    } else
        vi(s)
}
function ia(s, e, t) {
    se(e) ? s.type.__ssrInlineRender ? s.ssrRender = e : s.render = e : ue(e) && (s.setupState = Nn(e)),
    vi(s)
}
function vi(s, e, t) {
    const c = s.type;
    s.render || (s.render = c.render || zs);
    {
        const f = Gc(s);
        Ls();
        try {
            Yl(s)
        } finally {
            Ws(),
            f()
        }
    }
}
const Fo = {
    get(s, e) {
        return Se(s, "get", ""),
        s[e]
    }
};
function yo(s) {
    const e = t => {
        s.exposed = t || {}
    }
    ;
    return {
        attrs: new Proxy(s.attrs,Fo),
        slots: s.slots,
        emit: s.emit,
        expose: e
    }
}
function Lf(s) {
    return s.exposed ? s.exposeProxy || (s.exposeProxy = new Proxy(Nn(pd(s.exposed)),{
        get(e, t) {
            if (t in e)
                return e[t];
            if (t in kc)
                return kc[t](s)
        },
        has(e, t) {
            return t in e || t in kc
        }
    })) : s.proxy
}
function To(s) {
    return se(s) && "__vccOpts"in s
}
const Fe = (s, e) => ul(s, e, Kc);
function Ao(s, e, t) {
    try {
        Ef(-1);
        const c = arguments.length;
        return c === 2 ? ue(e) && !G(e) ? Sc(e) ? pe(s, null, [e]) : pe(s, e) : pe(s, null, e) : (c > 3 ? t = Array.prototype.slice.call(arguments, 2) : c === 3 && Sc(t) && (t = [t]),
        pe(s, e, t))
    } finally {
        Ef(1)
    }
}
const _o = "3.5.26";
let Ub;
const la = typeof window < "u" && window.trustedTypes;
if (la)
    try {
        Ub = la.createPolicy("vue", {
            createHTML: s => s
        })
    } catch {}
const wi = Ub ? s => Ub.createHTML(s) : s => s
  , ko = "http://www.w3.org/2000/svg"
  , Oo = "http://www.w3.org/1998/Math/MathML"
  , qs = typeof document < "u" ? document : null
  , oa = qs && qs.createElement("template")
  , Io = {
    insert: (s, e, t) => {
        e.insertBefore(s, t || null)
    }
    ,
    remove: s => {
        const e = s.parentNode;
        e && e.removeChild(s)
    }
    ,
    createElement: (s, e, t, c) => {
        const f = e === "svg" ? qs.createElementNS(ko, s) : e === "mathml" ? qs.createElementNS(Oo, s) : t ? qs.createElement(s, {
            is: t
        }) : qs.createElement(s);
        return s === "select" && c && c.multiple != null && f.setAttribute("multiple", c.multiple),
        f
    }
    ,
    createText: s => qs.createTextNode(s),
    createComment: s => qs.createComment(s),
    setText: (s, e) => {
        s.nodeValue = e
    }
    ,
    setElementText: (s, e) => {
        s.textContent = e
    }
    ,
    parentNode: s => s.parentNode,
    nextSibling: s => s.nextSibling,
    querySelector: s => qs.querySelector(s),
    setScopeId(s, e) {
        s.setAttribute(e, "")
    },
    insertStaticContent(s, e, t, c, f, b) {
        const d = t ? t.previousSibling : e.lastChild;
        if (f && (f === b || f.nextSibling))
            for (; e.insertBefore(f.cloneNode(!0), t),
            !(f === b || !(f = f.nextSibling)); )
                ;
        else {
            oa.innerHTML = wi(c === "svg" ? `<svg>${s}</svg>` : c === "mathml" ? `<math>${s}</math>` : s);
            const a = oa.content;
            if (c === "svg" || c === "mathml") {
                const n = a.firstChild;
                for (; n.firstChild; )
                    a.appendChild(n.firstChild);
                a.removeChild(n)
            }
            e.insertBefore(a, t)
        }
        return [d ? d.nextSibling : e.firstChild, t ? t.previousSibling : e.lastChild]
    }
}
  , tt = "transition"
  , Dc = "animation"
  , Yc = Symbol("_vtc")
  , Di = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
}
  , Ro = Ve({}, Yn, Di)
  , $o = s => (s.displayName = "Transition",
s.props = Ro,
s)
  , Cd = $o( (s, {slots: e}) => Ao(kl, No(s), e))
  , yt = (s, e=[]) => {
    G(s) ? s.forEach(t => t(...e)) : s && s(...e)
}
  , ra = s => s ? G(s) ? s.some(e => e.length > 1) : s.length > 1 : !1;
function No(s) {
    const e = {};
    for (const $ in s)
        $ in Di || (e[$] = s[$]);
    if (s.css === !1)
        return e;
    const {name: t="v", type: c, duration: f, enterFromClass: b=`${t}-enter-from`, enterActiveClass: d=`${t}-enter-active`, enterToClass: a=`${t}-enter-to`, appearFromClass: n=b, appearActiveClass: l=d, appearToClass: i=a, leaveFromClass: r=`${t}-leave-from`, leaveActiveClass: u=`${t}-leave-active`, leaveToClass: p=`${t}-leave-to`} = s
      , m = jo(f)
      , h = m && m[0]
      , g = m && m[1]
      , {onBeforeEnter: w, onEnter: C, onEnterCancelled: A, onLeave: E, onLeaveCancelled: D, onBeforeAppear: O=w, onAppear: _=C, onAppearCancelled: k=A} = e
      , F = ($, X, P, L) => {
        $._enterCancelled = L,
        Tt($, X ? i : a),
        Tt($, X ? l : d),
        P && P()
    }
      , N = ($, X) => {
        $._isLeaving = !1,
        Tt($, r),
        Tt($, p),
        Tt($, u),
        X && X()
    }
      , q = $ => (X, P) => {
        const L = $ ? _ : C
          , B = () => F(X, $, P);
        yt(L, [X, B]),
        ha( () => {
            Tt(X, $ ? n : b),
            Ys(X, $ ? i : a),
            ra(L) || pa(X, c, h, B)
        }
        )
    }
    ;
    return Ve(e, {
        onBeforeEnter($) {
            yt(w, [$]),
            Ys($, b),
            Ys($, d)
        },
        onBeforeAppear($) {
            yt(O, [$]),
            Ys($, n),
            Ys($, l)
        },
        onEnter: q(!1),
        onAppear: q(!0),
        onLeave($, X) {
            $._isLeaving = !0;
            const P = () => N($, X);
            Ys($, r),
            $._enterCancelled ? (Ys($, u),
            ga($)) : (ga($),
            Ys($, u)),
            ha( () => {
                $._isLeaving && (Tt($, r),
                Ys($, p),
                ra(E) || pa($, c, g, P))
            }
            ),
            yt(E, [$, P])
        },
        onEnterCancelled($) {
            F($, !1, void 0, !0),
            yt(A, [$])
        },
        onAppearCancelled($) {
            F($, !0, void 0, !0),
            yt(k, [$])
        },
        onLeaveCancelled($) {
            N($),
            yt(D, [$])
        }
    })
}
function jo(s) {
    if (s == null)
        return null;
    if (ue(s))
        return [lb(s.enter), lb(s.leave)];
    {
        const e = lb(s);
        return [e, e]
    }
}
function lb(s) {
    return N0(s)
}
function Ys(s, e) {
    e.split(/\s+/).forEach(t => t && s.classList.add(t)),
    (s[Yc] || (s[Yc] = new Set)).add(e)
}
function Tt(s, e) {
    e.split(/\s+/).forEach(c => c && s.classList.remove(c));
    const t = s[Yc];
    t && (t.delete(e),
    t.size || (s[Yc] = void 0))
}
function ha(s) {
    requestAnimationFrame( () => {
        requestAnimationFrame(s)
    }
    )
}
let Vo = 0;
function pa(s, e, t, c) {
    const f = s._endId = ++Vo
      , b = () => {
        f === s._endId && c()
    }
    ;
    if (t != null)
        return setTimeout(b, t);
    const {type: d, timeout: a, propCount: n} = zo(s, e);
    if (!d)
        return c();
    const l = d + "end";
    let i = 0;
    const r = () => {
        s.removeEventListener(l, u),
        b()
    }
      , u = p => {
        p.target === s && ++i >= n && r()
    }
    ;
    setTimeout( () => {
        i < n && r()
    }
    , a + 1),
    s.addEventListener(l, u)
}
function zo(s, e) {
    const t = window.getComputedStyle(s)
      , c = m => (t[m] || "").split(", ")
      , f = c(`${tt}Delay`)
      , b = c(`${tt}Duration`)
      , d = ua(f, b)
      , a = c(`${Dc}Delay`)
      , n = c(`${Dc}Duration`)
      , l = ua(a, n);
    let i = null
      , r = 0
      , u = 0;
    e === tt ? d > 0 && (i = tt,
    r = d,
    u = b.length) : e === Dc ? l > 0 && (i = Dc,
    r = l,
    u = n.length) : (r = Math.max(d, l),
    i = r > 0 ? d > l ? tt : Dc : null,
    u = i ? i === tt ? b.length : n.length : 0);
    const p = i === tt && /\b(?:transform|all)(?:,|$)/.test(c(`${tt}Property`).toString());
    return {
        type: i,
        timeout: r,
        propCount: u,
        hasTransform: p
    }
}
function ua(s, e) {
    for (; s.length < e.length; )
        s = s.concat(s);
    return Math.max(...e.map( (t, c) => ma(t) + ma(s[c])))
}
function ma(s) {
    return s === "auto" ? 0 : Number(s.slice(0, -1).replace(",", ".")) * 1e3
}
function ga(s) {
    return (s ? s.ownerDocument : document).body.offsetHeight
}
function Ho(s, e, t) {
    const c = s[Yc];
    c && (e = (e ? [e, ...c] : [...c]).join(" ")),
    e == null ? s.removeAttribute("class") : t ? s.setAttribute("class", e) : s.className = e
}
const va = Symbol("_vod")
  , Uo = Symbol("_vsh")
  , So = Symbol("")
  , Ko = /(?:^|;)\s*display\s*:/;
function Yo(s, e, t) {
    const c = s.style
      , f = Oe(t);
    let b = !1;
    if (t && !f) {
        if (e)
            if (Oe(e))
                for (const d of e.split(";")) {
                    const a = d.slice(0, d.indexOf(":")).trim();
                    t[a] == null && lf(c, a, "")
                }
            else
                for (const d in e)
                    t[d] == null && lf(c, d, "");
        for (const d in t)
            d === "display" && (b = !0),
            lf(c, d, t[d])
    } else if (f) {
        if (e !== t) {
            const d = c[So];
            d && (t += ";" + d),
            c.cssText = t,
            b = Ko.test(t)
        }
    } else
        e && s.removeAttribute("style");
    va in s && (s[va] = b ? c.display : "",
    s[Uo] && (c.display = "none"))
}
const wa = /\s*!important$/;
function lf(s, e, t) {
    if (G(t))
        t.forEach(c => lf(s, e, c));
    else if (t == null && (t = ""),
    e.startsWith("--"))
        s.setProperty(e, t);
    else {
        const c = qo(s, e);
        wa.test(t) ? s.setProperty(Yt(c), t.replace(wa, ""), "important") : s[c] = t
    }
}
const Da = ["Webkit", "Moz", "ms"]
  , ob = {};
function qo(s, e) {
    const t = ob[e];
    if (t)
        return t;
    let c = pt(e);
    if (c !== "filter" && c in s)
        return ob[e] = c;
    c = ln(c);
    for (let f = 0; f < Da.length; f++) {
        const b = Da[f] + c;
        if (b in s)
            return ob[e] = b
    }
    return e
}
const Ca = "http://www.w3.org/1999/xlink";
function xa(s, e, t, c, f, b=S0(e)) {
    c && e.startsWith("xlink:") ? t == null ? s.removeAttributeNS(Ca, e.slice(6, e.length)) : s.setAttributeNS(Ca, e, t) : t == null || b && !hn(t) ? s.removeAttribute(e) : s.setAttribute(e, b ? "" : Es(t) ? String(t) : t)
}
function Ea(s, e, t, c, f) {
    if (e === "innerHTML" || e === "textContent") {
        t != null && (s[e] = e === "innerHTML" ? wi(t) : t);
        return
    }
    const b = s.tagName;
    if (e === "value" && b !== "PROGRESS" && !b.includes("-")) {
        const a = b === "OPTION" ? s.getAttribute("value") || "" : s.value
          , n = t == null ? s.type === "checkbox" ? "on" : "" : String(t);
        (a !== n || !("_value"in s)) && (s.value = n),
        t == null && s.removeAttribute(e),
        s._value = t;
        return
    }
    let d = !1;
    if (t === "" || t == null) {
        const a = typeof s[e];
        a === "boolean" ? t = hn(t) : t == null && a === "string" ? (t = "",
        d = !0) : a === "number" && (t = 0,
        d = !0)
    }
    try {
        s[e] = t
    } catch {}
    d && s.removeAttribute(f || e)
}
function Ci(s, e, t, c) {
    s.addEventListener(e, t, c)
}
function Xo(s, e, t, c) {
    s.removeEventListener(e, t, c)
}
const Fa = Symbol("_vei");
function Zo(s, e, t, c, f=null) {
    const b = s[Fa] || (s[Fa] = {})
      , d = b[e];
    if (c && d)
        d.value = c;
    else {
        const [a,n] = Qo(e);
        if (c) {
            const l = b[e] = Bo(c, f);
            Ci(s, a, l, n)
        } else
            d && (Xo(s, a, d, n),
            b[e] = void 0)
    }
}
const ya = /(?:Once|Passive|Capture)$/;
function Qo(s) {
    let e;
    if (ya.test(s)) {
        e = {};
        let c;
        for (; c = s.match(ya); )
            s = s.slice(0, s.length - c[0].length),
            e[c[0].toLowerCase()] = !0
    }
    return [s[2] === ":" ? s.slice(3) : Yt(s.slice(2)), e]
}
let rb = 0;
const Mo = Promise.resolve()
  , Po = () => rb || (Mo.then( () => rb = 0),
rb = Date.now());
function Bo(s, e) {
    const t = c => {
        if (!c._vts)
            c._vts = Date.now();
        else if (c._vts <= t.attached)
            return;
        ys(Lo(c, t.value), e, 5, [c])
    }
    ;
    return t.value = s,
    t.attached = Po(),
    t
}
function Lo(s, e) {
    if (G(e)) {
        const t = s.stopImmediatePropagation;
        return s.stopImmediatePropagation = () => {
            t.call(s),
            s._stopped = !0
        }
        ,
        e.map(c => f => !f._stopped && c && c(f))
    } else
        return e
}
const Ta = s => s.charCodeAt(0) === 111 && s.charCodeAt(1) === 110 && s.charCodeAt(2) > 96 && s.charCodeAt(2) < 123
  , Wo = (s, e, t, c, f, b) => {
    const d = f === "svg";
    e === "class" ? Ho(s, c, d) : e === "style" ? Yo(s, t, c) : jf(e) ? dd(e) || Zo(s, e, t, c, b) : (e[0] === "." ? (e = e.slice(1),
    !0) : e[0] === "^" ? (e = e.slice(1),
    !1) : Go(s, e, c, d)) ? (Ea(s, e, c),
    !s.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && xa(s, e, c, d, b, e !== "value")) : s._isVueCE && (/[A-Z]/.test(e) || !Oe(c)) ? Ea(s, pt(e), c, b, e) : (e === "true-value" ? s._trueValue = c : e === "false-value" && (s._falseValue = c),
    xa(s, e, c, d))
}
;
function Go(s, e, t, c) {
    if (c)
        return !!(e === "innerHTML" || e === "textContent" || e in s && Ta(e) && se(t));
    if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && s.tagName === "IFRAME" || e === "form" || e === "list" && s.tagName === "INPUT" || e === "type" && s.tagName === "TEXTAREA")
        return !1;
    if (e === "width" || e === "height") {
        const f = s.tagName;
        if (f === "IMG" || f === "VIDEO" || f === "CANVAS" || f === "SOURCE")
            return !1
    }
    return Ta(e) && Oe(t) ? !1 : e in s
}
const Aa = s => {
    const e = s.props["onUpdate:modelValue"] || !1;
    return G(e) ? t => df(e, t) : e
}
  , hb = Symbol("_assign")
  , Qt = {
    deep: !0,
    created(s, {value: e, modifiers: {number: t}}, c) {
        const f = Vf(e);
        Ci(s, "change", () => {
            const b = Array.prototype.filter.call(s.options, d => d.selected).map(d => t ? rn(yf(d)) : yf(d));
            s[hb](s.multiple ? f ? new Set(b) : b : b[0]),
            s._assigning = !0,
            xs( () => {
                s._assigning = !1
            }
            )
        }
        ),
        s[hb] = Aa(c)
    },
    mounted(s, {value: e}) {
        _a(s, e)
    },
    beforeUpdate(s, e, t) {
        s[hb] = Aa(t)
    },
    updated(s, {value: e}) {
        s._assigning || _a(s, e)
    }
};
function _a(s, e) {
    const t = s.multiple
      , c = G(e);
    if (!(t && !c && !Vf(e))) {
        for (let f = 0, b = s.options.length; f < b; f++) {
            const d = s.options[f]
              , a = yf(d);
            if (t)
                if (c) {
                    const n = typeof a;
                    n === "string" || n === "number" ? d.selected = e.some(l => String(l) === String(a)) : d.selected = Y0(e, a) > -1
                } else
                    d.selected = e.has(a);
            else if (Sf(yf(d), e)) {
                s.selectedIndex !== f && (s.selectedIndex = f);
                return
            }
        }
        !t && s.selectedIndex !== -1 && (s.selectedIndex = -1)
    }
}
function yf(s) {
    return "_value"in s ? s._value : s.value
}
const Jo = ["ctrl", "shift", "alt", "meta"]
  , e1 = {
    stop: s => s.stopPropagation(),
    prevent: s => s.preventDefault(),
    self: s => s.target !== s.currentTarget,
    ctrl: s => !s.ctrlKey,
    shift: s => !s.shiftKey,
    alt: s => !s.altKey,
    meta: s => !s.metaKey,
    left: s => "button"in s && s.button !== 0,
    middle: s => "button"in s && s.button !== 1,
    right: s => "button"in s && s.button !== 2,
    exact: (s, e) => Jo.some(t => s[`${t}Key`] && !e.includes(t))
}
  , Tf = (s, e) => {
    const t = s._withMods || (s._withMods = {})
      , c = e.join(".");
    return t[c] || (t[c] = ( (f, ...b) => {
        for (let d = 0; d < e.length; d++) {
            const a = e1[e[d]];
            if (a && a(f, e))
                return
        }
        return s(f, ...b)
    }
    ))
}
  , s1 = Ve({
    patchProp: Wo
}, Io);
let ka;
function t1() {
    return ka || (ka = io(s1))
}
const c1 = ( (...s) => {
    const e = t1().createApp(...s)
      , {mount: t} = e;
    return e.mount = c => {
        const f = b1(c);
        if (!f)
            return;
        const b = e._component;
        !se(b) && !b.render && !b.template && (b.template = f.innerHTML),
        f.nodeType === 1 && (f.textContent = "");
        const d = t(f, !1, f1(f));
        return f instanceof Element && (f.removeAttribute("v-cloak"),
        f.setAttribute("data-v-app", "")),
        d
    }
    ,
    e
}
);
function f1(s) {
    if (s instanceof SVGElement)
        return "svg";
    if (typeof MathMLElement == "function" && s instanceof MathMLElement)
        return "mathml"
}
function b1(s) {
    return Oe(s) ? document.querySelector(s) : s
}
let xi;
const Wf = s => xi = s
  , Ei = Symbol();
function Sb(s) {
    return s && typeof s == "object" && Object.prototype.toString.call(s) === "[object Object]" && typeof s.toJSON != "function"
}
var Ic;
(function(s) {
    s.direct = "direct",
    s.patchObject = "patch object",
    s.patchFunction = "patch function"
}
)(Ic || (Ic = {}));
function d1() {
    const s = gn(!0)
      , e = s.run( () => he({}));
    let t = []
      , c = [];
    const f = pd({
        install(b) {
            Wf(f),
            f._a = b,
            b.provide(Ei, f),
            b.config.globalProperties.$pinia = f,
            c.forEach(d => t.push(d)),
            c = []
        },
        use(b) {
            return this._a ? t.push(b) : c.push(b),
            this
        },
        _p: t,
        _a: null,
        _e: s,
        _s: new Map,
        state: e
    });
    return f
}
const Fi = () => {}
;
function Oa(s, e, t, c=Fi) {
    s.add(e);
    const f = () => {
        s.delete(e) && c()
    }
    ;
    return !t && Kf() && vn(f),
    f
}
function Mt(s, ...e) {
    s.forEach(t => {
        t(...e)
    }
    )
}
const a1 = s => s()
  , Ia = Symbol()
  , pb = Symbol();
function Kb(s, e) {
    s instanceof Map && e instanceof Map ? e.forEach( (t, c) => s.set(c, t)) : s instanceof Set && e instanceof Set && e.forEach(s.add, s);
    for (const t in e) {
        if (!e.hasOwnProperty(t))
            continue;
        const c = e[t]
          , f = s[t];
        Sb(f) && Sb(c) && s.hasOwnProperty(t) && !_e(c) && !Bs(c) ? s[t] = Kb(f, c) : s[t] = c
    }
    return s
}
const n1 = Symbol();
function i1(s) {
    return !Sb(s) || !Object.prototype.hasOwnProperty.call(s, n1)
}
const {assign: ct} = Object;
function l1(s) {
    return !!(_e(s) && s.effect)
}
function o1(s, e, t, c) {
    const {state: f, actions: b, getters: d} = e
      , a = t.state.value[s];
    let n;
    function l() {
        a || (t.state.value[s] = f ? f() : {});
        const i = ol(t.state.value[s]);
        return ct(i, b, Object.keys(d || {}).reduce( (r, u) => (r[u] = pd(Fe( () => {
            Wf(t);
            const p = t._s.get(s);
            return d[u].call(p, p)
        }
        )),
        r), {}))
    }
    return n = yi(s, l, e, t, c, !0),
    n
}
function yi(s, e, t={}, c, f, b) {
    let d;
    const a = ct({
        actions: {}
    }, t)
      , n = {
        deep: !0
    };
    let l, i, r = new Set, u = new Set, p;
    const m = c.state.value[s];
    !b && !m && (c.state.value[s] = {}),
    he({});
    let h;
    function g(k) {
        let F;
        l = i = !1,
        typeof k == "function" ? (k(c.state.value[s]),
        F = {
            type: Ic.patchFunction,
            storeId: s,
            events: p
        }) : (Kb(c.state.value[s], k),
        F = {
            type: Ic.patchObject,
            payload: k,
            storeId: s,
            events: p
        });
        const N = h = Symbol();
        xs().then( () => {
            h === N && (l = !0)
        }
        ),
        i = !0,
        Mt(r, F, c.state.value[s])
    }
    const w = b ? function() {
        const {state: F} = t
          , N = F ? F() : {};
        this.$patch(q => {
            ct(q, N)
        }
        )
    }
    : Fi;
    function C() {
        d.stop(),
        r.clear(),
        u.clear(),
        c._s.delete(s)
    }
    const A = (k, F="") => {
        if (Ia in k)
            return k[pb] = F,
            k;
        const N = function() {
            Wf(c);
            const q = Array.from(arguments)
              , $ = new Set
              , X = new Set;
            function P(T) {
                $.add(T)
            }
            function L(T) {
                X.add(T)
            }
            Mt(u, {
                args: q,
                name: N[pb],
                store: D,
                after: P,
                onError: L
            });
            let B;
            try {
                B = k.apply(this && this.$id === s ? this : D, q)
            } catch (T) {
                throw Mt(X, T),
                T
            }
            return B instanceof Promise ? B.then(T => (Mt($, T),
            T)).catch(T => (Mt(X, T),
            Promise.reject(T))) : (Mt($, B),
            B)
        };
        return N[Ia] = !0,
        N[pb] = F,
        N
    }
      , E = {
        _p: c,
        $id: s,
        $onAction: Oa.bind(null, u),
        $patch: g,
        $reset: w,
        $subscribe(k, F={}) {
            const N = Oa(r, k, F.detached, () => q())
              , q = d.run( () => hs( () => c.state.value[s], $ => {
                (F.flush === "sync" ? i : l) && k({
                    storeId: s,
                    type: Ic.direct,
                    events: p
                }, $)
            }
            , ct({}, n, F)));
            return N
        },
        $dispose: C
    }
      , D = qf(E);
    c._s.set(s, D);
    const _ = (c._a && c._a.runWithContext || a1)( () => c._e.run( () => (d = gn()).run( () => e({
        action: A
    }))));
    for (const k in _) {
        const F = _[k];
        if (_e(F) && !l1(F) || Bs(F))
            b || (m && i1(F) && (_e(F) ? F.value = m[k] : Kb(F, m[k])),
            c.state.value[s][k] = F);
        else if (typeof F == "function") {
            const N = A(F, k);
            _[k] = N,
            a.actions[k] = F
        }
    }
    return ct(D, _),
    ct(ie(D), _),
    Object.defineProperty(D, "$state", {
        get: () => c.state.value[s],
        set: k => {
            g(F => {
                ct(F, k)
            }
            )
        }
    }),
    c._p.forEach(k => {
        ct(D, d.run( () => k({
            store: D,
            app: c._a,
            pinia: c,
            options: a
        })))
    }
    ),
    m && b && t.hydrate && t.hydrate(D.$state, m),
    l = !0,
    i = !0,
    D
}
function r1(s, e, t) {
    let c;
    const f = typeof e == "function";
    c = f ? t : e;
    function b(d, a) {
        const n = md();
        return d = d || (n ? tc(Ei, null) : null),
        d && Wf(d),
        d = xi,
        d._s.has(s) || (f ? yi(s, e, c, d) : o1(s, c, d)),
        d._s.get(s)
    }
    return b.$id = s,
    b
}
const Ra = "playing_cards.png";
function h1(s) {
    const e = s.split(/\r?\n/)
      , t = e[0]?.split("\t")[0]?.trim() ?? ""
      , c = e[1]?.split("\t")[0]?.trim() ?? ""
      , f = e.slice(3)
      , b = [];

    for (const n of f) {
        if (!n || n.trim() === "")
            continue;
        const l = n.split("\t").map(w => w.trim())
          , [i, r, u, p, m, h, g] = [l[0] ?? "", l[1] ?? "", l[2] ?? "", l[3] ?? "", l[4] ?? "", l[5] ?? "", l[6] ?? ""];
        
        if (r) {
            b.push({
                id: `song-${b.length + 1}`,
                title: r,
                artist: u || void 0,
                language: p || void 0,
                genre: m || void 0,
                sc: h ?? "",
                remarks: g ?? "",
                isNew: i === "1",
                tags: []
            });
        }
    }

    // 將歌曲分為「新歌」與「舊歌」兩組
    const d = [] // 存放新歌
      , a = [];  // 存放一般歌曲

    for (const n of b) {
        n.isNew ? d.push(n) : a.push(n);
    }

    // 最後才回傳，並將新歌合併在最前面
    return {
        alias: t,
        liveLink: c,
        songs: d.concat(a)
    };
}
const p1 = r1("song", {
    state: () => ({
        songs: [],
        query: "",
        selectedArtist: "",
        selectedLanguage: "",
        selectedGenre: "",
        scOnly: !1,
        alias: "",
        liveLink: ""
    }),
    getters: {
        artistOptions(s) {
            return ub(s.songs, e => e.artist)
        },
        languageOptions(s) {
            return ub(s.songs, e => e.language)
        },
        genreOptions(s) {
            return ub(s.songs, e => e.genre)
        },
        filteredSongs(s) {
            const e = s.query.trim().toLowerCase()
              , t = e.length > 0;
            return s.songs.filter(c => {
                const f = (c.sc ?? "").trim()
                  , b = t ? `${c.title} ${c.artist ?? ""} ${c.sc ?? ""}`.toLowerCase().includes(e) : !0
                  , d = s.selectedArtist ? c.artist === s.selectedArtist : !0
                  , a = s.selectedLanguage ? c.language === s.selectedLanguage : !0
                  , n = s.selectedGenre ? c.genre === s.selectedGenre : !0
                  , l = s.scOnly ? f.length > 0 : !0;
                return b && d && a && n && l
            }
            )
        },
        filteredList() {
            return this.filteredSongs
        }
    },
    actions: {
        loadFromText(s) {
            const e = h1(s);
            this.songs = e.songs,
            this.alias = e.alias,
            this.liveLink = e.liveLink
        },
        setQuery(s) {
            this.query = s
        }
    }
});
function ub(s, e) {
    const t = new Map;
    for (const c of s) {
        const f = e(c);
        f && t.set(f, (t.get(f) ?? 0) + 1)
    }
    return Array.from(t.entries()).sort( (c, f) => c[0].localeCompare(f[0], "zh-Hans-CN")).map( ([c,f]) => ({
        value: c,
        label: `${c} (${f})`
    }))
}
const Ss = (s, e) => {
    const t = s.__vccOpts || s;
    for (const [c,f] of e)
        t[c] = f;
    return t
}
  , u1 = {}
  , m1 = {
    class: "glass"
};
function g1(s, e) {
    return Y(),
    M("div", m1, [Sl(s.$slots, "default", {}, void 0)])
}
const $a = Ss(u1, [["render", g1], ["__scopeId", "data-v-752da1e6"]])
  , v1 = {
    class: "search-bar"
}
  , w1 = ["value"]
  , D1 = Us({
    __name: "SearchBar",
    props: {
        modelValue: {}
    },
    emits: ["update:modelValue"],
    setup(s) {
        return (e, t) => (Y(),
        M("div", v1, [V("input", {
            value: s.modelValue,
            class: "search-input",
            type: "search",
            placeholder: "搜索歌名 / 藝術家 ",
            onInput: t[0] || (t[0] = c => e.$emit("update:modelValue", c.target.value))
        }, null, 40, w1)]))
    }
})
  , Na = Ss(D1, [["__scopeId", "data-v-76c35f5a"]]);
class o {
    Name;
    Desc;
    GiftType;
    Price;
    StlcImg;
    StlcImg_Mini;
    GIFImg;
    WEBPImg;
    constructor(e, t, c, f, b, d, a, n) {
        this.Name = e,
        this.Desc = t,
        this.GiftType = c,
        this.Price = f,
        this.StlcImg = b,
        this.StlcImg_Mini = d,
        this.GIFImg = a,
        this.WEBPImg = n
    }
    static Info(e) {
        return o.List.get(e)
    }
    static List = new Map([[31092, new o("白银宝盒","宝盒福利",1,10,"https://s1.hdslb.com/bfs/live/9219374a3655fea72d57da2d2bb25c6471e64bbb.png","https://i0.hdslb.com/bfs/live/9219374a3655fea72d57da2d2bb25c6471e64bbb.png","https://i0.hdslb.com/bfs/live/d28a24b03bf0608ccd906d655c4932fa2835e1a7.gif","https://i0.hdslb.com/bfs/live/fd1d1be20bbdfef70220e1d789e12535de7702a3.webp")], [30943, new o("欧皇登场","欧皇降临，闪耀全场！ ",1,500,"https://s1.hdslb.com/bfs/live/3af1aeb3f810d4d485bae5a8e683300dafa5212d.png","https://i0.hdslb.com/bfs/live/b3c6caee2066dd29ba575b36a1a7a884bf3b0409.png","https://i0.hdslb.com/bfs/live/a8b7285102c9a0b2556be3efe32d9a0c88f2dcff.gif","https://i0.hdslb.com/bfs/live/2199047f15f8b04e4455ddb52950124193216adf.webp")], [30006, new o("鸡小萌","请问，这是你掉落的小黄叽吗？",1,20,"https://s1.hdslb.com/bfs/live/19b84b30b2b27eb6348abb8b08c9ed3854605229.png","https://i0.hdslb.com/bfs/live/97d1958878439cf2ea2e25b5673cebe30fe2d21b.png","https://i0.hdslb.com/bfs/live/56b7d43c09911112804d84824d9fc8ec04da5a8c.gif","https://i0.hdslb.com/bfs/live/19cd9ff5e15e5fa88ef3904f5b7243d81085d315.webp")], [31122, new o("星愿水晶球","被施加了神奇魔法的水晶球",1,1e3,"https://s1.hdslb.com/bfs/live/288536798081e855e8f645bed6a2d2d27f411ee5.png","https://i0.hdslb.com/bfs/live/288536798081e855e8f645bed6a2d2d27f411ee5.png","https://i0.hdslb.com/bfs/live/92038dbbf7b5cda2ce3d0d2d5d568f0f77f9477a.gif","https://i0.hdslb.com/bfs/live/72bdc71f91ebec5681bb1975bc5f97862e996a34.webp")], [30978, new o("摩天大楼","B站买房了解一下~",1,4500,"https://s1.hdslb.com/bfs/live/4a016020b24b4ad063f10470f7812b3ced654331.png","https://i0.hdslb.com/bfs/live/4a016020b24b4ad063f10470f7812b3ced654331.png","https://i0.hdslb.com/bfs/live/9bfb4b7c55e1be67a5269b30b9a0c23a74009857.gif","https://i0.hdslb.com/bfs/live/e483b2dd2bf03e0c98542b5e1c395bc3e460ab3c.webp")], [30293, new o("s12金包裹","送你一朵小花花，一起过夏天吧！",1,1,"https://s1.hdslb.com/bfs/live/9492690a8d5ff0ce8f6c379b28f42e1e049f31ac.png","https://i0.hdslb.com/bfs/live/9492690a8d5ff0ce8f6c379b28f42e1e049f31ac.png","https://i0.hdslb.com/bfs/live/5273a78efec669e29563f0d33be46947aba59bc5.gif","https://i0.hdslb.com/bfs/live/f56766d70a1f69f6030e06fe84334aab844da0a3.webp")], [30957, new o("生日蛋糕","为天依送上祝福吧！",-1,0,"https://s1.hdslb.com/bfs/live/70884f8b07d847d1de3568525e14df8c3430362e.png","https://i0.hdslb.com/bfs/live/6925bc76968eacc7d6ff3fceef966b2618ad9595.png","https://i0.hdslb.com/bfs/live/f445c84f418f22d111ea11677c81ffc0b6644ba2.gif","https://i0.hdslb.com/bfs/live/a796c4a91fafcbb0718147770291e28df56227a3.webp")], [31127, new o("浪漫雪花","浪漫的雪花飘飘飘飘",1,520,"https://s1.hdslb.com/bfs/live/3eed664985577fa339858e94b5a1165150a2ff9a.png","https://i0.hdslb.com/bfs/live/e0a3c8a182c377faba899a05840aaf9dc32a8e42.png","https://i0.hdslb.com/bfs/live/e02450f3e0ccb88659827216e35cb8cfdd06c05d.gif","https://i0.hdslb.com/bfs/live/b5f11a35c93d02f89e35b56d6ecff99b3d3c18da.webp")], [30923, new o("乱斗为你","每赛季大乱斗最强之拳前10的专属礼物",-1,0,"https://s1.hdslb.com/bfs/live/a52d1839a7385a632b5e3eb27e561f74c2fbc7b4.png","https://i0.hdslb.com/bfs/live/a52d1839a7385a632b5e3eb27e561f74c2fbc7b4.png","https://i0.hdslb.com/bfs/live/9467f5ce18deb9a2172583a5c8781650a4c28c1e.gif","https://i0.hdslb.com/bfs/live/00a3d4a2514771ca401c4e8067be2e46e5b99369.webp")], [30444, new o("发卡卡冲呀！","",0,100,"https://s1.hdslb.com/bfs/live/c43a27998642446cb71ec111c7088d50d26f3657.png","https://i0.hdslb.com/bfs/live/0a546f781648ea65d898ad889e182db62be9a243.png","https://i0.hdslb.com/bfs/live/d5dc97a07835faf71713aa75b7322cce2c41e569.gif","https://i0.hdslb.com/bfs/live/c3f2348f79157c694f3e71bb51a8df5f61176acc.webp")], [31146, new o("告白花束","送你一束花花",1,220,"https://s1.hdslb.com/bfs/live/c313057cf96513db2374a2acd64801af176009a2.png","https://i0.hdslb.com/bfs/live/c313057cf96513db2374a2acd64801af176009a2.png","https://i0.hdslb.com/bfs/live/50cb25ea89426296fd174a8e8a24ed3bb8870f8e.gif","https://i0.hdslb.com/bfs/live/1bca516b95fa878407e96c640567221a74f8cadf.webp")], [30085, new o("小星星","你能明白无法重返天空的星星的悲伤吗？",0,100,"https://s1.hdslb.com/bfs/live/228fbf1b04acce5047224303ba0d34244131f278.png","https://i0.hdslb.com/bfs/live/e91eb0db4dd186b9076522182469de46c03ae351.png","https://i0.hdslb.com/bfs/live/f9daf8579afb7458ab4f7bb5c8dc44c2f9df2906.gif","https://i0.hdslb.com/bfs/live/40e48e6787e7297a3edeb28c29af7ef7b4ba50a8.webp")], [30572, new o("大闸蟹","擓一口~",1,20,"https://s1.hdslb.com/bfs/live/fcbdc284fc20680ebc382da38b9b93f0e996ebad.png","https://i0.hdslb.com/bfs/live/4e23a1724d2a8a8b543eb453db37ef8e56b67ae9.png","https://i0.hdslb.com/bfs/live/7f97a3077df69457574883c32a217663f67e1458.gif","https://i0.hdslb.com/bfs/live/47038d1d08077f23de4f4c6b7450352db30b4b91.webp")], [30618, new o("跑马灯","毕业歌会饿了么免费道具触发单直播间广播",0,2e7,"https://s1.hdslb.com/bfs/live/c08500e829a444ced33dbb1ca00b7d3f3ebe3b8d.png","https://i0.hdslb.com/bfs/live/c08500e829a444ced33dbb1ca00b7d3f3ebe3b8d.png","https://i0.hdslb.com/bfs/live/1e957212e9b9d529a3efd35ce856f9a5c5f7a6a9.gif","https://i0.hdslb.com/bfs/live/cfa793022890b693728958ce5832fdd48662e50e.webp")], [30712, new o("LPL加油","ALL WE FIGHT FOR!",1,10,"https://s1.hdslb.com/bfs/live/3295a6969b9a35b92428692c940c863775f5a9bf.png","https://i0.hdslb.com/bfs/live/3f00845bc07f6af4ca15a32768ccce96f6bc57a1.png","https://i0.hdslb.com/bfs/live/d4627393f6126d7b26fc2543a5fac3a8b119b41c.gif","https://i0.hdslb.com/bfs/live/c55068685349d592c4ddfaf3a75a501df6038ca1.webp")], [31128, new o("玲珑福袋","开袋可得一个礼物",1,50,"https://s1.hdslb.com/bfs/live/729e82319e4845b8acdba0f7d7e9bf21f508dcd5.png","https://i0.hdslb.com/bfs/live/823301bc9c33b1c7a11a105a66b0aed2df7836ad.png","https://i0.hdslb.com/bfs/live/fc5db445cc44975d1d6a6f105a485608310532a7.gif","https://i0.hdslb.com/bfs/live/d657df787674f2c690295639dcc5b51ad64b3bfd.webp")], [31251, new o("干杯","和你一起举起回忆酿的甜，再干一杯！",1,66,"https://s1.hdslb.com/bfs/live/3e7cf3f43a118a811cf7b864cef23765fdee87d9.png","https://i0.hdslb.com/bfs/live/3e7cf3f43a118a811cf7b864cef23765fdee87d9.png","https://i0.hdslb.com/bfs/live/2adadde008050d0b36b493fd45b8fc89a07c7698.gif","https://i0.hdslb.com/bfs/live/817e0ef58cee5aa5b143459c46c8ab288da5db25.webp")], [30147, new o("吃爪","《哔日头条》限定·吓得我瓜都掉了Σ(っ °Д °;)っ。",0,10,"https://s1.hdslb.com/bfs/live/df549bc002fd9429d86008fd09c84aebef47aca9.png","https://i0.hdslb.com/bfs/live/561e85c5f0584799a116381e69be30e1a1f2008a.png","https://i0.hdslb.com/bfs/live/bff50d0857ddab4e4afcfde596b311bc6b66ac46.gif","https://i0.hdslb.com/bfs/live/402952957640d5ce601331b6b4216536b984b875.webp")], [30974, new o("给大佬递茶","请大佬喝下这杯茶！",1,20,"https://s1.hdslb.com/bfs/live/1a74c3f60acee3c5d134e38db57a66dee0e1c023.png","https://i0.hdslb.com/bfs/live/304a3de202da9231a33e57bde569bf94b498ee5e.png","https://i0.hdslb.com/bfs/live/747dd5e27b6b06fca9d2b5d0be5d96619803e917.gif","https://i0.hdslb.com/bfs/live/9733aec683369e19cfd934a41b62ee20320eee74.webp")], [31151, new o("次元之城","霜叶季突围赛活动道具",1,12450,"https://s1.hdslb.com/bfs/live/dc95e8a3477e5f8e43a060acce875d4639657dff.png","https://i0.hdslb.com/bfs/live/6e0ba99d6bd26029eaf1a33f85b0fbd35995e87f.png","https://i0.hdslb.com/bfs/live/551b5c7ad6589eeab30bbfbc48681ca84e18e873.gif","https://i0.hdslb.com/bfs/live/8809417dc5632138f1b45e07e39edc379bd514d3.webp")], [30845, new o("开始做梦","新的做梦素材出现了！",1,12,"https://s1.hdslb.com/bfs/live/b0ca1711cbd4ea84635be7d2cfea5a07c0b13701.png","https://i0.hdslb.com/bfs/live/b0ca1711cbd4ea84635be7d2cfea5a07c0b13701.png","https://i0.hdslb.com/bfs/live/db4ba3ec484074d49ad6b7d23e65f66356076388.gif","https://i0.hdslb.com/bfs/live/d4e7a609f11ad008959be8b574ee9485df00dfa6.webp")], [30089, new o("暴击手套","放下无尽，好好说话~",1,20,"https://s1.hdslb.com/bfs/live/3e15a3150127db6183675f09cedc57db882da152.png","https://i0.hdslb.com/bfs/live/8c20138371f2a75e09dfacfdc81478ae80a0af1f.png","https://i0.hdslb.com/bfs/live/87e1a931b7fe2ddc05106e8d2f316bba68566fb7.gif","https://i0.hdslb.com/bfs/live/bbef77e689ab8675517206b0a06393c87225de10.webp")], [10, new o("蓝白胖次","传统而经典的蓝白条纹款式胖次，如今获得了新功能，穿戴上之后会开启新世界的大门。",0,19900,"https://s1.hdslb.com/bfs/live/c10ed9df669aa91f97a2c5609bfa5e718539a0b8.png","https://i0.hdslb.com/bfs/live/c10ed9df669aa91f97a2c5609bfa5e718539a0b8.png","https://i0.hdslb.com/bfs/live/9216de0c78329e53fc16385bc18f33b981121a92.gif","https://i0.hdslb.com/bfs/live/e29180471be69b6b1ee5cea7607171ef1b7565cc.webp")], [31030, new o("花好月圆会","当前主播亲密度+4500 经验值+450,000",0,45e4,"https://s1.hdslb.com/bfs/live/8cc0143b9662b2676d223f6f8a39edd241c2a172.png","https://i0.hdslb.com/bfs/live/25c48516a49820a607bc162ca230be89fdaa03dd.png","https://i0.hdslb.com/bfs/live/137377529ccc65848d8e6c0d3ea6d69e498e0177.gif","https://i0.hdslb.com/bfs/live/e90892ed94f17c43ea3a66fa6fca045f7bb20b34.webp")], [30229, new o("白金手柄","硬核玩家的荣耀！",1,20,"https://s1.hdslb.com/bfs/live/2cfc8f1e847adf2e9f33d824379ad3281d6c4464.png","https://i0.hdslb.com/bfs/live/2cfc8f1e847adf2e9f33d824379ad3281d6c4464.png","https://i0.hdslb.com/bfs/live/78cb2cffc8aed5431e583c920e532f49e4a6ee11.gif","https://i0.hdslb.com/bfs/live/29d827d97e8e58258d8158ed7e0399d8b643d9bf.webp")], [31296, new o("晶钻铠甲","",1,2990,"https://s1.hdslb.com/bfs/live/9b4c332c6f595bdaaf631b5d4637cfec3a91cdce.png","https://i0.hdslb.com/bfs/live/9b4c332c6f595bdaaf631b5d4637cfec3a91cdce.png","https://i0.hdslb.com/bfs/live/ac4669b1e41888cba079d28247a3dea380d937c4.gif","https://i0.hdslb.com/bfs/live/2a2034a3f771322d2c627a1c092a3406a001cbfa.webp")], [30164, new o("心愿果实","吃下这颗果实，就可以实现愿望！",1,10,"https://s1.hdslb.com/bfs/live/187b2bd8b71953bd09cb21aad73d7e430dc432ea.png","https://i0.hdslb.com/bfs/live/0ca71cf719ed13be1d17e10791d28d3e33bd01d8.png","https://i0.hdslb.com/bfs/live/97802885ee217591eb2bd245896aa7f8f1491c3a.gif","https://i0.hdslb.com/bfs/live/6031d2f37b626f1f6bc002d80ddf39800a1a04de.webp")], [30688, new o("冲浪","大航海用户可解锁冲浪购买资格哦～",1,1e3,"https://s1.hdslb.com/bfs/live/3816eb1d809c7020a5ef6b4deb10ee9a470acdac.png","https://i0.hdslb.com/bfs/live/b598563210f44c8376e858f471f708cea9e870f6.png","https://i0.hdslb.com/bfs/live/86debb06ae3a19edda87c911c5e5440c586a2652.gif","https://i0.hdslb.com/bfs/live/a717aee458bc31fa4737d0b2fffe89d9b56f410c.webp")], [30900, new o("原子宝石","",-1,0,"https://s1.hdslb.com/bfs/live/a0031d70323d085203c57272758520fe95bfeec0.png","https://i0.hdslb.com/bfs/live/f658d3a97693da6e424b27587195e032dea3faa5.png","https://i0.hdslb.com/bfs/live/b43d62db6c2dab01da0911a66287e39e56340aeb.gif","https://i0.hdslb.com/bfs/live/aeca0105b38b1b5e6fc267e1395de31e64dd7a0e.webp")], [31106, new o("狂欢派对","",1,2e3,"https://s1.hdslb.com/bfs/live/2c1a076a2d60d9a0b6fbe387670e06450d931d35.png","https://i0.hdslb.com/bfs/live/103a016eff945ea530020fe029f5201b6de6fdd6.png","https://i0.hdslb.com/bfs/live/9f79751911ed32887c45dce7b5525fb448264acf.gif","https://i0.hdslb.com/bfs/live/914443a9d67bada1fd7fcf2f6805eeec655f7e05.webp")], [31476, new o("小花花","一花一世界，一树一菩提",1,1,"https://s1.hdslb.com/bfs/live/c41e1a67f5f483b42e5fe3040c708e32fc937ac8.png","https://i0.hdslb.com/bfs/live/c41e1a67f5f483b42e5fe3040c708e32fc937ac8.png","https://i0.hdslb.com/bfs/live/0849fa6e7cee2916e413c19cb47073cd70a84479.gif","https://i0.hdslb.com/bfs/live/a4c8a134c059665d8d477a803b12430222d8e7b8.webp")], [30950, new o("应援棒","挥动起来，为嘉年华疯狂应援",0,100,"https://s1.hdslb.com/bfs/live/e3180d4ec43b4bbc7218526e5f16bd5627c1a9c5.png","https://i0.hdslb.com/bfs/live/e3180d4ec43b4bbc7218526e5f16bd5627c1a9c5.png","https://i0.hdslb.com/bfs/live/2b331191907e2c6603c742acf2adcd89208f5f5c.gif","https://i0.hdslb.com/bfs/live/59433a9b603a7e737ca8bd6be5137845c1d1b4db.webp")], [30631, new o("灵魂歌姬","bilibili气人唱跳歌手xxr",1,10,"https://s1.hdslb.com/bfs/live/867e5d846d4b4e37c6bc20d0471e8fdff81e7106.png","https://i0.hdslb.com/bfs/live/867e5d846d4b4e37c6bc20d0471e8fdff81e7106.png","https://i0.hdslb.com/bfs/live/ad84e00e31b4912f5455f590b00bd93898e161dc.gif","https://i0.hdslb.com/bfs/live/48d4e5a7f3db65b4b0991062ba751673f18295af.webp")], [30676, new o("呵呵打的不错","你的操作宛如风中残烛",1,52,"https://s1.hdslb.com/bfs/live/87587827cfd03d7b245bd78c5dd8e3e783ce427d.png","https://i0.hdslb.com/bfs/live/8927721beb070c18656db962b8f1731ea3c760e5.png","https://i0.hdslb.com/bfs/live/81fbbd4d14081a90b838ffa2d12182715f6a6f74.gif","https://i0.hdslb.com/bfs/live/41f224d421d037417c996120784925f65b93acd2.webp")], [31325, new o("十里桃花","",1,400,"https://s1.hdslb.com/bfs/live/9f108399d405d03605b69c26ef1c27b2ee001a5a.png","https://i0.hdslb.com/bfs/live/9f108399d405d03605b69c26ef1c27b2ee001a5a.png","https://i0.hdslb.com/bfs/live/625223c49fedf19c860da11612903527c5c35708.gif","https://i0.hdslb.com/bfs/live/3b13509ddcfe194c9cbb5c1ab32089a69a4af406.webp")], [31235, new o("恭喜发财","财源滚滚来",0,520,"https://s1.hdslb.com/bfs/live/5a01036e077060a53d06e6bd13a7ce32c798e914.png","https://i0.hdslb.com/bfs/live/ac01b637471638607f4cb99f741c90dbebb01b8c.png","https://i0.hdslb.com/bfs/live/90a8bff7972dc890d711cea21f98c68320dcd1a3.gif","https://i0.hdslb.com/bfs/live/bc7d85afb3ec24555d3b4c152c5b1fde6695ec25.webp")], [30977, new o("礼花","为王的诞生，献上礼炮！",1,280,"https://s1.hdslb.com/bfs/live/084ff1eaa7832c4c1040772a5fec4911930bd107.png","https://i0.hdslb.com/bfs/live/d6e3f925c2ccce7c15352a73e145f1092c20639a.png","https://i0.hdslb.com/bfs/live/db50cc13ad0450338807e879be769af222d63d09.gif","https://i0.hdslb.com/bfs/live/a54d38ea937643c37a2dd0cd2c983540e479f6a2.webp")], [30799, new o("运气爆棚","",-1,0,"https://s1.hdslb.com/bfs/live/61b8fe9500459e73bb0c8a8dd29afc85983a61ea.png","https://i0.hdslb.com/bfs/live/61b8fe9500459e73bb0c8a8dd29afc85983a61ea.png","https://i0.hdslb.com/bfs/live/fbebab1a6fbda1f0d5bd6f3c13ec259cf639efff.gif","https://i0.hdslb.com/bfs/live/2d0c8e76f5c4d99cf1a0d510f90a0b0f8d53bb29.webp")], [30891, new o("黑糖","蜜獾会开水龙头的家养猫",1,10,"https://s1.hdslb.com/bfs/live/3366c23c97dc94fbc2d1b73d2b51d0d5f7149efa.png","https://i0.hdslb.com/bfs/live/62a442f71a736619c0971cf5e7fb93fedaa74b09.png","https://i0.hdslb.com/bfs/live/e85d9c966127f0510ff57c31666b9e2d7cfcb3a3.gif","https://i0.hdslb.com/bfs/live/23d5a563eda0ce46e607aa55d0cb3889d302c41f.webp")], [30322, new o("你气不气！！","你气不气！！！",1,10,"https://s1.hdslb.com/bfs/live/c7f6cdd868fc53bc26a6bf51b6f4af9ea6cb72f7.png","https://i0.hdslb.com/bfs/live/87aed52516a01029d0fde37a175c3b53443aff4f.png","https://i0.hdslb.com/bfs/live/693e932951b1113439966bb0613c712220006592.gif","https://i0.hdslb.com/bfs/live/f246aca7ea6a2882bb58b977c3a48bc03327831f.webp")], [30682, new o("82年红酒","82年红酒！",1,10,"https://s1.hdslb.com/bfs/live/e03f4b9f999b92f8f014d8749477bc08f24126d0.png","https://i0.hdslb.com/bfs/live/e03f4b9f999b92f8f014d8749477bc08f24126d0.png","https://i0.hdslb.com/bfs/live/cbb0e7218a7d1da168a57456494f2c7bfaeb7275.gif","https://i0.hdslb.com/bfs/live/b61fe081e3b3ee2c4e685f19dd527e440308e078.webp")], [31484, new o("花式夸夸","疯狂产出一波夸夸弹幕！！",1,330,"https://s1.hdslb.com/bfs/live/d8f43b41722a5874aec1809fa46ec7ac41d7c2b7.png","https://i0.hdslb.com/bfs/live/00d83a3f7e03e0276f98d8b9cbcb3d0c1858a7e6.png","https://i0.hdslb.com/bfs/live/e3ca71756fd0e6edf885bbcb2ccaf7f58d46738a.gif","https://i0.hdslb.com/bfs/live/8f1b36c1ea16ed413de2d29559493ce85157978d.webp")], [31326, new o("春季战车","",1,1e3,"https://s1.hdslb.com/bfs/live/79e65ff0cbd7898afa6a1ac4f9a92d1317f9888d.png","https://i0.hdslb.com/bfs/live/79e65ff0cbd7898afa6a1ac4f9a92d1317f9888d.png","https://i0.hdslb.com/bfs/live/5c4de9b91f71bb38e1ece21f00d4f7d13ba6c023.gif","https://i0.hdslb.com/bfs/live/fb8288c6f9c2c968009df96a6789e7fe43eac562.webp")], [30805, new o("新年暴富","",-1,0,"https://s1.hdslb.com/bfs/live/61b8fe9500459e73bb0c8a8dd29afc85983a61ea.png","https://i0.hdslb.com/bfs/live/61b8fe9500459e73bb0c8a8dd29afc85983a61ea.png","https://i0.hdslb.com/bfs/live/9a042e4975412545559e21a8fc99fd24c33b3927.gif","https://i0.hdslb.com/bfs/live/945aadc71b4a4378bf472c5cbe40e41aa2d04c0e.webp")], [31320, new o("纸飞机","",1,110,"https://s1.hdslb.com/bfs/live/a40001aca63bc5159f1da8d10930da0754340e0c.png","https://i0.hdslb.com/bfs/live/a40001aca63bc5159f1da8d10930da0754340e0c.png","https://i0.hdslb.com/bfs/live/ecfa328d34116cd6f7b8a2f4e229943a7f2ecf4e.gif","https://i0.hdslb.com/bfs/live/dc0856cc21fe62b422d12698ac5ec2d781c64752.webp")], [30671, new o("害怕","害怕就扔道具吧！",1,10,"https://s1.hdslb.com/bfs/live/a70955554047961592fc6293e46b201eac607ee8.png","https://i0.hdslb.com/bfs/live/08fb62e6719fdb46945709de6e956888049ac1ad.png","https://i0.hdslb.com/bfs/live/2a4842350a8131d6ae77eee8a6499ac5cd953233.gif","https://i0.hdslb.com/bfs/live/8393f5624ed8a787358c169992a657db536a9623.webp")], [31150, new o("旋转木马","旋转旋转，可爱的木马",1,5200,"https://s1.hdslb.com/bfs/live/e895c8bbe1b0aa01ad3bc0a6c37d8f433d2ed824.png","https://i0.hdslb.com/bfs/live/e895c8bbe1b0aa01ad3bc0a6c37d8f433d2ed824.png","https://i0.hdslb.com/bfs/live/d1bdf3fe22cfe2bc33eda4b99bb0c5289f0b80db.gif","https://i0.hdslb.com/bfs/live/332bcaeab63ca6d4bec1aa30f23b17b6768fa053.webp")], [30834, new o("小风筝","霜叶季突围赛活动道具",-1,0,"https://s1.hdslb.com/bfs/live/70b60660d33c2075b40339fc03c37633a1aca639.png","https://i0.hdslb.com/bfs/live/b2f0a1459b3c19e843a69f86007cb768e2c0cd80.png","https://i0.hdslb.com/bfs/live/3f7d313133896e1f765b7780ef9c668176b67faf.gif","https://i0.hdslb.com/bfs/live/95e3ceeec7d57abf3cf8dfbcc76bdfbc71a5c8cc.webp")], [30543, new o("金币","叮~你获得金币x1！",1,10,"https://s1.hdslb.com/bfs/live/27f5f308033897e727073b35967d634a9703cc3b.png","https://i0.hdslb.com/bfs/live/27f5f308033897e727073b35967d634a9703cc3b.png","https://i0.hdslb.com/bfs/live/79358780ea7a32028d4727d95576c1ea153fee51.gif","https://i0.hdslb.com/bfs/live/bbc1a0fa4924a644c861cc39e30e38d84fe219d0.webp")], [30545, new o("战术可乐","战术可乐",1,10,"https://s1.hdslb.com/bfs/live/b7e3c4fd969471c7da7b1e9f2acfaaa7bc07dd0a.png","https://i0.hdslb.com/bfs/live/b7e3c4fd969471c7da7b1e9f2acfaaa7bc07dd0a.png","https://i0.hdslb.com/bfs/live/66d6811af7a2220192b397eb4c4f6d0cbe2963d5.gif","https://i0.hdslb.com/bfs/live/c1a915d84c3c368c090d565c69ff78b393bbba20.webp")], [31212, new o("打call","想要给你最极致的应援",1,5,"https://s1.hdslb.com/bfs/live/f75291a0e267425c41e1ce31b5ffd6bfedc6f0b6.png","https://i0.hdslb.com/bfs/live/a58a69ecf188e6a690eb731815d3afb4366145eb.png","https://i0.hdslb.com/bfs/live/72d357629310c27cf375e9e049390bb44af11b6e.gif","https://i0.hdslb.com/bfs/live/7dad99cce8772d1045dec6916a55642491989819.webp")], [30769, new o("1000乱斗值卡","在大乱斗中，给主播增加1000乱斗值",-1,0,"https://s1.hdslb.com/bfs/live/10d15f0fa49ee61410aa916adefa50fe77040ac3.png","https://i0.hdslb.com/bfs/live/10d15f0fa49ee61410aa916adefa50fe77040ac3.png","https://i0.hdslb.com/bfs/live/4c2cd10f74fa767bbf019c2445b37cb7c0409841.gif","https://i0.hdslb.com/bfs/live/8b2995828cf41dcd337836853caa5d1872849b46.webp")], [31011, new o("航海经验卡","8月航海日志，等级经验+10",-1,0,"https://s1.hdslb.com/bfs/live/e2f111e953a7da18d0a49c2b95ccfc62a1f22f97.png","https://i0.hdslb.com/bfs/live/332aa08bc0366be5ceb3d048e559d39eb45e6ebd.png","https://i0.hdslb.com/bfs/live/0de5067199ce3b7a48daa22c15f6e3c32d09a869.gif","https://i0.hdslb.com/bfs/live/c6cf36ad55f62722df15e3ff99b58f6f151736a4.webp")], [30713, new o("MVP!","谁是真正的MVP？ I’m back",1,66,"https://s1.hdslb.com/bfs/live/2d3bc99bd3b2e9b1babfa5d9fde2f358b06185d2.png","https://i0.hdslb.com/bfs/live/2d3bc99bd3b2e9b1babfa5d9fde2f358b06185d2.png","https://i0.hdslb.com/bfs/live/65dd389d6f13f979a613135fad8bb64c98f9c3d1.gif","https://i0.hdslb.com/bfs/live/affe6a13499f3b2a8e84e755f5d3ffeb58c799d1.webp")], [31028, new o("探索者启航","小电视潜心打造的探索者号终于出发啦！即将开启一场向着星辰大海的探索之旅……",1,22330,"https://s1.hdslb.com/bfs/live/f95de770154c6b89e376a16cfae6f5a5bf751d05.png","https://i0.hdslb.com/bfs/live/b55e296fd3d73a48a86391b5f0708f1fa5c7445d.png","https://i0.hdslb.com/bfs/live/5b8da16a5de9ec3272f15056e3c8f417a4b6ece8.gif","https://i0.hdslb.com/bfs/live/e77c2a95958b4dfb9e386af357a12a2848995c7d.webp")], [31702, new o("告白气球","被风吹到了你那边~",1,10,"https://s1.hdslb.com/bfs/live/acaebc2e2b6efa5c2b84502c7bd0296f7f940d3f.png","https://i0.hdslb.com/bfs/live/8aa2484edba0b6654ec4ad0c9b2f530277c04480.png","https://i0.hdslb.com/bfs/live/ffe76ca12e5731a561eb3921aed2c8e6e437f3b1.gif","https://i0.hdslb.com/bfs/live/0b5e4c99b86de5179a02001fc73d29d74afd9da9.webp")], [31387, new o("樱花之恋","来一场樱花下的会面吧",1,1e3,"https://s1.hdslb.com/bfs/live/1dbdd7c23770bb84d885649dd59aa5296e73dfe0.png","https://i0.hdslb.com/bfs/live/1dbdd7c23770bb84d885649dd59aa5296e73dfe0.png","https://i0.hdslb.com/bfs/live/c0f42bd52889d37985e9ade9c3a0cb4aacabda3c.gif","https://i0.hdslb.com/bfs/live/596d2456c03e62fe31594331c29d1ba2fbf1d183.webp")], [30579, new o("草莓奶茶","老白牌草莓奶茶，不要草莓，不要奶，只要欧的白！",1,52,"https://s1.hdslb.com/bfs/live/3417b115a2bb3e9de5a80067b65be0fa8481f971.png","https://i0.hdslb.com/bfs/live/ffd91ba52c139050d3c1e3ec8c112b05795391fc.png","https://i0.hdslb.com/bfs/live/cb661450ffcf6428ec4a601d3cfaa285e30f736d.gif","https://i0.hdslb.com/bfs/live/d7a99e5b746d14639b3882e275e9dba4fd60aba1.webp")], [30588, new o("如意小香包","端午香草的味道，让人温馨又平静~",-1,0,"https://s1.hdslb.com/bfs/live/359b78aabd328a46651b403ef82b185defb14828.png","https://i0.hdslb.com/bfs/live/0142e356b340a8b7efc6d42d7013e8a4872c5bc1.png","https://i0.hdslb.com/bfs/live/31ac1c2e27bde8a80d367eaef1dbe396d23c8604.gif","https://i0.hdslb.com/bfs/live/f999640bc200b3e404b08b37927d1962bc42c811.webp")], [31304, new o("冰晶城堡","冰雪赏专属礼物",1,4500,"https://s1.hdslb.com/bfs/live/4a6970c6f89f1c80556f7dd46459b0b2385a95f5.png","https://i0.hdslb.com/bfs/live/f0fb11cdbc7a69fe9b1dceeb00e2c9911a60793e.png","https://i0.hdslb.com/bfs/live/5bd99f524fd9e371382545f5dcc6d143aca607b5.gif","https://i0.hdslb.com/bfs/live/b49b90def2b5b2abc38797e4e63205736fe676f5.webp")], [30131, new o("粉玫瑰","花之初~送你一朵小花花，每天都要开心呀！",1,40,"https://s1.hdslb.com/bfs/live/66d4f09ee8732b8cbe51fe9b28ba34dc275d9226.png","https://i0.hdslb.com/bfs/live/d09b8e734a616b097b0683996107725e08b83b3e.png","https://i0.hdslb.com/bfs/live/416c48d733de4fb4d4eb44f151f91bdadb1865b3.gif","https://i0.hdslb.com/bfs/live/6e82dcb63b2b927ae8f48959996d62f5bcd95a95.webp")], [30146, new o("摩夫大楼","《哔日头条》限定·一旦接受了这种设定……",0,250,"https://s1.hdslb.com/bfs/live/32b6c60cc9f10676c4f3ee139ded6edf5fe4919f.png","https://i0.hdslb.com/bfs/live/32b6c60cc9f10676c4f3ee139ded6edf5fe4919f.png","https://i0.hdslb.com/bfs/live/b777bdaa96ff3ba1abc284312071d56035551991.gif","https://i0.hdslb.com/bfs/live/c89ebfc978d20052231640c38067047ce2f39ee3.webp")], [30888, new o("泡泡糖","",0,15e4,"https://s1.hdslb.com/bfs/live/322867d00ab5572ba0c5594ca35f4ed54688a480.png","https://i0.hdslb.com/bfs/live/7298f6597b3be2ade2ae964a03c0b6d83350f847.png","https://i0.hdslb.com/bfs/live/150bf2fc23281b1857676e94550b9a767a5d30fa.gif","https://i0.hdslb.com/bfs/live/54dea226fcf20ea43e24d36001ea83a4b0cd7b7f.webp")], [31035, new o("疯狂心动","就是这一刻，我心动了……",1,520,"https://s1.hdslb.com/bfs/live/542192b614f4af4cecac4b970a0bb23620367eac.png","https://i0.hdslb.com/bfs/live/542192b614f4af4cecac4b970a0bb23620367eac.png","https://i0.hdslb.com/bfs/live/77a742e6efea2336f5a94500ac03e7e1b8a96300.gif","https://i0.hdslb.com/bfs/live/8cf4b349611da383e2d9db196c16fb8b18d3f1ca.webp")], [30803, new o("好运随心","",-1,0,"https://s1.hdslb.com/bfs/live/61b8fe9500459e73bb0c8a8dd29afc85983a61ea.png","https://i0.hdslb.com/bfs/live/61b8fe9500459e73bb0c8a8dd29afc85983a61ea.png","https://i0.hdslb.com/bfs/live/0c56fa6b39c294bf5dfc40580818370f99a1546a.gif","https://i0.hdslb.com/bfs/live/67dc9811152f23251479575d23021e96277b1e60.webp")], [9, new o("爱心便当","你在这个便当里面加了什么？ 加满了爱 ⁄(⁄ ⁄•⁄ω⁄•⁄ ⁄]⁄。",0,4500,"https://s1.hdslb.com/bfs/live/9492690a8d5ff0ce8f6c379b28f42e1e049f31ac.png","https://i0.hdslb.com/bfs/live/9492690a8d5ff0ce8f6c379b28f42e1e049f31ac.png","https://i0.hdslb.com/bfs/live/5273a78efec669e29563f0d33be46947aba59bc5.gif","https://i0.hdslb.com/bfs/live/f56766d70a1f69f6030e06fe84334aab844da0a3.webp")], [31225, new o("牛哇","是真的牛！！",1,1,"https://s1.hdslb.com/bfs/live/b8a38b4bd3be120becddfb92650786f00dffad48.png","https://i0.hdslb.com/bfs/live/b8a38b4bd3be120becddfb92650786f00dffad48.png","https://i0.hdslb.com/bfs/live/ab9e8b9868c0ae4a0ab429a11e65ee58a1053cb2.gif","https://i0.hdslb.com/bfs/live/419bf4e5bd6fb4e1185fb73a466c6c884d0f2ba2.webp")], [30059, new o("锄头","开局一把锄，装备全靠偷~一起开心锄大地！",1,20,"https://s1.hdslb.com/bfs/live/c0703bda226cdc2a5624258ec78cd77ca4966deb.png","https://i0.hdslb.com/bfs/live/21fb29456559460308b17da02428471d72453f99.png","https://i0.hdslb.com/bfs/live/b4e3ecc9e15da05e5d7e4b720240ea9369b59794.gif","https://i0.hdslb.com/bfs/live/3815652ee7969d7fc9a9b3fb459e3b46ae5088b1.webp")], [30685, new o("五十块一斤","五十块一斤",1,10,"https://s1.hdslb.com/bfs/live/289390101447ef699f7d4df03f6ed95d4865387e.png","https://i0.hdslb.com/bfs/live/39160aeb8652f3822021ec8702bd0031765896ef.png","https://i0.hdslb.com/bfs/live/dfa3e3662880ed3a7c660a52f62fa2203ef7ae8b.gif","https://i0.hdslb.com/bfs/live/59adbcec045ee547f6818e7a3a605a9dac898322.webp")], [31132, new o("次元火力","BLS虚拟次元战投票专用道具",-1,0,"https://s1.hdslb.com/bfs/live/f9333800afe63b4e90c0787bc433ceade5f4f1b8.png","https://i0.hdslb.com/bfs/live/f9333800afe63b4e90c0787bc433ceade5f4f1b8.png","https://i0.hdslb.com/bfs/live/5152ca0c6c0482e46b941e514709841d13b293dc.gif","https://i0.hdslb.com/bfs/live/d61b57c4dd0c010babd451d4f24bd5a8b8a865b9.webp")], [31752, new o("激爽刨冰","为素人向前冲+1热力值",1,1,"https://s1.hdslb.com/bfs/live/bb749294ca18e7b0ce8248b8aa4fd0d39d5bc33c.png","https://i0.hdslb.com/bfs/live/bb749294ca18e7b0ce8248b8aa4fd0d39d5bc33c.png","https://i0.hdslb.com/bfs/live/19eca43359f974134503244f4419f4ae32e91adc.gif","https://i0.hdslb.com/bfs/live/5ec1406c1006e8428a13d7736628d4663f6702f7.webp")], [30976, new o("Poker小电视","由我来组成弹幕！",-1,0,"https://s1.hdslb.com/bfs/live/55884347edb09ddbc8ca4da259a0bafc15014231.png","https://i0.hdslb.com/bfs/live/55884347edb09ddbc8ca4da259a0bafc15014231.png","https://i0.hdslb.com/bfs/live/71fde0c4922641abb13ac0ac77d69475168e6835.gif","https://i0.hdslb.com/bfs/live/1cb71df3185d1a5819c5b98d7394cede62439a5f.webp")], [30580, new o("青龙刀","青龙会专属",1,1,"https://s1.hdslb.com/bfs/live/e5583888bccdc8d127fc01478eb9f43ab543aa48.png","https://i0.hdslb.com/bfs/live/e5583888bccdc8d127fc01478eb9f43ab543aa48.png","https://i0.hdslb.com/bfs/live/2df47a4a9f11ae125f526b8bc782ac22bb238270.gif","https://i0.hdslb.com/bfs/live/7b072eeea32c2747cac760c883e965397850bd67.webp")], [31075, new o("守护之翼","会有天使守护你",1,2e3,"https://s1.hdslb.com/bfs/live/1d7d973972e70cad7e97478b3c8d20b0faafd0dc.png","https://i0.hdslb.com/bfs/live/bcc637789f6ccfdeb742ca7742eed257bc54d6d1.png","https://i0.hdslb.com/bfs/live/2aab96bf43b0c9a72ab4f704be3621f9bdb9ee4f.gif","https://i0.hdslb.com/bfs/live/a83bf6648b5585e6117afc60bd9826a989f043f5.webp")], [30617, new o("爱什么来什么","爱什么，来什么 开心到飞起",0,2e7,"https://s1.hdslb.com/bfs/live/7ebb0c9f82ca1b01fec012f44b2249ff4b15d786.png","https://i0.hdslb.com/bfs/live/7ebb0c9f82ca1b01fec012f44b2249ff4b15d786.png","https://i0.hdslb.com/bfs/live/eb296d742c20419dda541e93d7b208a9bedbe852.gif","https://i0.hdslb.com/bfs/live/df1aa5cf7c59cf356ccee787b9f141f7b5ab0c86.webp")], [8, new o("233","23333333333",1,2,"https://s1.hdslb.com/bfs/live/d78cd791ee85e8a58f7c85f3241f50e4b01c639f.png","https://i0.hdslb.com/bfs/live/d78cd791ee85e8a58f7c85f3241f50e4b01c639f.png","https://i0.hdslb.com/bfs/live/ed5b3735ca0cbec9820080c97ccaa04c4a28ebc7.gif","https://i0.hdslb.com/bfs/live/1dfb6f6648fce374169bc0ddffd4c2c3e309c83b.webp")], [30294, new o("ganbei","送你一朵小花花，一起过夏天吧！",0,1,"https://s1.hdslb.com/bfs/live/cd033464fddec0bed596752ed244158fd60b9771.png","https://i0.hdslb.com/bfs/live/faa3d9bc24bcef496c21a52d6cd5084e813ad651.png","https://i0.hdslb.com/bfs/live/db4ff33d00bfc6166e26a8331a35d4bd761878f0.gif","https://i0.hdslb.com/bfs/live/b783044aff1ac991507eabd6b52e541918147381.webp")], [30973, new o("吃瓜","不明真相的吃瓜群众上线了！",1,1,"https://s1.hdslb.com/bfs/live/e1d8fa2f48cca14c4dd221e27871be801eeb90fc.png","https://i0.hdslb.com/bfs/live/561e85c5f0584799a116381e69be30e1a1f2008a.png","https://i0.hdslb.com/bfs/live/c2e7f08b90aba08bf767671ead29728a709b9dbc.gif","https://i0.hdslb.com/bfs/live/a68d7f135353e4745a5cbbb2acdd0c7fd7ec0e8f.webp")], [30464, new o("欢心-废弃","",1,10,"https://s1.hdslb.com/bfs/live/094c77579201fee18ffdaaba19d644437085fabf.png","https://i0.hdslb.com/bfs/live/34643b8ff0945b518f275d914e81827e9f5318fa.png","https://i0.hdslb.com/bfs/live/b2e4d88aa6b01871384e8cad1d3f60a19cd753cb.gif","https://i0.hdslb.com/bfs/live/8411912261bd7e087ea4984cc9d2664c91c42717.webp")], [30716, new o("福仔","投喂福仔",1,10,"https://s1.hdslb.com/bfs/live/c96f3748cc37b6afa1c1c6b0a26e64138094a524.png","https://i0.hdslb.com/bfs/live/b9b7e7ba255fdb79583f38cbdfa95cb2876ff22a.png","https://i0.hdslb.com/bfs/live/fd587a460016fcaff96cbaee6934a8df67046941.gif","https://i0.hdslb.com/bfs/live/c53b49de7c223b774881d244ae3800c762999afb.webp")], [20014, new o("比心","给你比个心~",1,5,"https://s1.hdslb.com/bfs/live/5ae89a024b4abeb5bdd44709e5bd783442227a3b.png","https://i0.hdslb.com/bfs/live/e3eaf5e5d569e2caa030d53189857f15e30de8be.png","https://i0.hdslb.com/bfs/live/899a71fdde890eccbf5dc4ec4548942acbe8b658.gif","https://i0.hdslb.com/bfs/live/6cb54d2e279de74a8fab6d945b9c5077715bb728.webp")], [30418, new o("22下装","22下装",-1,0,"https://s1.hdslb.com/bfs/live/e30abc2ccd1eea290c4a930bc740c48d17872e3c.png","https://i0.hdslb.com/bfs/live/e30abc2ccd1eea290c4a930bc740c48d17872e3c.png","https://i0.hdslb.com/bfs/live/4887787fc7d00332fc98fc62d4abd310fd6c13ab.gif","https://i0.hdslb.com/bfs/live/11894482ad4a89578e34c40024560f9e7415ba51.webp")], [30869, new o("心动卡","加入主播粉丝团可解锁心动卡购买资格哦～",1,1,"https://s1.hdslb.com/bfs/live/b304a1ae04d10c25db87cfd8ec2a83bce1749322.png","https://i0.hdslb.com/bfs/live/b304a1ae04d10c25db87cfd8ec2a83bce1749322.png","https://i0.hdslb.com/bfs/live/d790967bad7d6d2e7feed8eeeb63553a6c748a29.gif","https://i0.hdslb.com/bfs/live/9e8a419973840fae4e62089476a0c39d367788e1.webp")], [7, new o("666","66666666666666666666",1,6,"https://s1.hdslb.com/bfs/live/cb361874bc8fe0e13e328ce3829fdb0d96c91e9a.png","https://i0.hdslb.com/bfs/live/cb361874bc8fe0e13e328ce3829fdb0d96c91e9a.png","https://i0.hdslb.com/bfs/live/c9ae92020fc2b5fc13f8fd8d912827a92e993e90.gif","https://i0.hdslb.com/bfs/live/0d1db1fd276cf09fc57eaead8ac8021b507edf79.webp")], [31054, new o("召唤神龙","来自金主爸爸的神龙~ ",0,45e4,"https://s1.hdslb.com/bfs/live/1715164593667b7c6d5c33258bda5384195ad611.png","https://i0.hdslb.com/bfs/live/1715164593667b7c6d5c33258bda5384195ad611.png","https://i0.hdslb.com/bfs/live/938e418094a7bc532b9c8b5dba843df10d08b199.gif","https://i0.hdslb.com/bfs/live/17eb2833386828a3a662cdbcf530d04bf26e0b0a.webp")], [31316, new o("一箭倾心","原谅我这一生不羁放纵爱自由~",1,100,"https://s1.hdslb.com/bfs/live/f7e7f17d18ad1890ac20fb71d80c6ffa86ee1170.png","https://i0.hdslb.com/bfs/live/f7e7f17d18ad1890ac20fb71d80c6ffa86ee1170.png","https://i0.hdslb.com/bfs/live/37bfb23fba3df9bae4e6b164b94620c3c150f4e3.gif","https://i0.hdslb.com/bfs/live/e083dd6c5ba0b9040d036074d7a08ca051bd5bda.webp")], [30268, new o("分区任意门","",0,1,"https://s1.hdslb.com/bfs/live/dcf5ada27ff2fecff7be440eafb31afbc5470567.png","https://i0.hdslb.com/bfs/live/dcf5ada27ff2fecff7be440eafb31afbc5470567.png","https://i0.hdslb.com/bfs/live/02dddbc81fcc1786db1a58d555b6bca0e9269069.gif","https://i0.hdslb.com/bfs/live/a3e164513bd030f1113a8fbe1165454880c3ee4c.webp")], [30742, new o("一起跨年","2020最美的夜，在B站一起跨年！",-1,0,"https://s1.hdslb.com/bfs/live/266b3d519868f52bd93e1e282dc1d45390daf8f5.png","https://i0.hdslb.com/bfs/live/266b3d519868f52bd93e1e282dc1d45390daf8f5.png","https://i0.hdslb.com/bfs/live/f57dd7921ed5f456a0b60ab36e55ee86c5a45f14.gif","https://i0.hdslb.com/bfs/live/10cbc1f935a9ae9839cce618cbb684aa7aef162f.webp")], [30601, new o("呆呆","KBDYDNB!!!",1,52,"https://s1.hdslb.com/bfs/live/dcaf4942cff8771c7988592d0a118512e85c74bf.png","https://i0.hdslb.com/bfs/live/dcaf4942cff8771c7988592d0a118512e85c74bf.png","https://i0.hdslb.com/bfs/live/e38725eb0ca34f5978465005b023df2bbc43f242.gif","https://i0.hdslb.com/bfs/live/d2606568b4d1bd65a4d4989ae1ad5b710423d46d.webp")], [31216, new o("i了i了","好想大声说爱你",1,1,"https://s1.hdslb.com/bfs/live/1157a445487b39c0b7368d91b22290c60fa665b2.png","https://i0.hdslb.com/bfs/live/1157a445487b39c0b7368d91b22290c60fa665b2.png","https://i0.hdslb.com/bfs/live/d349922434d86d42a945479c0a812a0f6c10d8f9.gif","https://i0.hdslb.com/bfs/live/a5a1437074843d4ddd78766a1633534f748164a4.webp")], [30032, new o("最强C位","",-1,0,"https://s1.hdslb.com/bfs/live/3d4fd3afa059e864f0d3c0fa50be5d563fc148bb.png","https://i0.hdslb.com/bfs/live/2787bfa96c71cdc8bd8f927befc3d773281e286c.png","https://i0.hdslb.com/bfs/live/c526bf1a2398ed131e5b55e426bdbfc3a52ec5c5.gif","https://i0.hdslb.com/bfs/live/bdd67e50e04fb4668e77294ace37ea59524ddb8c.webp")], [30719, new o("超级加分卡","在大乱斗时送出，可为主播增加10000点乱斗值",-1,0,"https://s1.hdslb.com/bfs/live/666b70c37e8e7b1faacf7825ebf4b0753cac2dee.png","https://i0.hdslb.com/bfs/live/666b70c37e8e7b1faacf7825ebf4b0753cac2dee.png","https://i0.hdslb.com/bfs/live/2aed81888ed107ec58ab73e4cf86c3b2bdb52f82.gif","https://i0.hdslb.com/bfs/live/c73ac6025d1ea07b17fc688eade3a386d1c22d36.webp")], [30054, new o("粉丝卡","成为主播的的专属粉丝！",0,5e3,"https://s1.hdslb.com/bfs/live/5a51712f4df40d98757201c5e77d345d2c079bc0.png","https://i0.hdslb.com/bfs/live/5a51712f4df40d98757201c5e77d345d2c079bc0.png","https://i0.hdslb.com/bfs/live/ed8f9d21d1a88748be64d54c99207d5ec14471ea.gif","https://i0.hdslb.com/bfs/live/ae5aa66dbbcbf327ece438207243b8cffa5f2609.webp")], [30282, new o("誓言","",-1,0,"https://s1.hdslb.com/bfs/live/58c0930eebcc977c0008980add17b3fcdf71a4f6.png","https://i0.hdslb.com/bfs/live/58c0930eebcc977c0008980add17b3fcdf71a4f6.png","https://i0.hdslb.com/bfs/live/67e0f49dc3cf697691cd7ed1f661eac6f1ecabb9.gif","https://i0.hdslb.com/bfs/live/2cadd30c10be70272d10561d7efaec24636fc3f5.webp")], [31244, new o("海底历险记","大航海冒险故事现在开启~",1,18880,"https://s1.hdslb.com/bfs/live/967fb1f7651c4f1371226e7af82a78a44ddda955.png","https://i0.hdslb.com/bfs/live/967fb1f7651c4f1371226e7af82a78a44ddda955.png","https://i0.hdslb.com/bfs/live/b2e2f6743c09e91ced313a6abec2fa9a66a29be5.gif","https://i0.hdslb.com/bfs/live/0df23fb6a6dcae2f6cccd8a6646766e1f1f9e99a.webp")], [13e3, new o("发红包","发送红包可以为主播增加曝光和粉丝",1,0,"https://s1.hdslb.com/bfs/live/2b3de8fa9eddebfab4d62b3a953a90da2a4ab81c.png","https://i0.hdslb.com/bfs/live/2b3de8fa9eddebfab4d62b3a953a90da2a4ab81c.png","https://i0.hdslb.com/bfs/live/83a98ba519e8fc422cd8e490b17a2b17f09c5646.gif","https://i0.hdslb.com/bfs/live/95d10e699a6368d638b00b10ec4362c19ae32bd7.webp")], [31373, new o("樱花冰粉","可在樱花大作战中，为主播增加220闪耀值",1,110,"https://s1.hdslb.com/bfs/live/2c1e4ec9e7e12fcef401c1a364f5e7d61f55ad32.png","https://i0.hdslb.com/bfs/live/2c1e4ec9e7e12fcef401c1a364f5e7d61f55ad32.png","https://i0.hdslb.com/bfs/live/3a3d015003254c58c7f546c326f872340d1fff36.gif","https://i0.hdslb.com/bfs/live/c535b2c643f8e029a9cf595ccce1f2c13b109391.webp")], [30547, new o("大铁头","世界第二聪明的人工智能",1,99,"https://s1.hdslb.com/bfs/live/521144e56cc85b909beef5b8e94d111d23625587.png","https://i0.hdslb.com/bfs/live/521144e56cc85b909beef5b8e94d111d23625587.png","https://i0.hdslb.com/bfs/live/8001fcfdbfced351a2359b821cd43e7d41c75eb3.gif","https://i0.hdslb.com/bfs/live/8b7e9b4661048944cad229064b1c8e1bb9da7e13.webp")], [31085, new o("奶粉","吨吨吨",1,150,"https://s1.hdslb.com/bfs/live/6be48f9a2b25a57a51d1ccb0b8f091e51159525e.png","https://i0.hdslb.com/bfs/live/6be48f9a2b25a57a51d1ccb0b8f091e51159525e.png","https://i0.hdslb.com/bfs/live/847898544d441fd9dcd73da146e4fd9825de47b3.gif","https://i0.hdslb.com/bfs/live/54747c8860ce00344e28838648033aa3633c7ebc.webp")], [30628, new o("摩天轮","粉丝勋章28级可解锁摩天轮购买资格哦～",1,1e3,"https://s1.hdslb.com/bfs/live/1d7037457bcfa8fd033ff26d6c452d1667ac6c17.png","https://i0.hdslb.com/bfs/live/1d7037457bcfa8fd033ff26d6c452d1667ac6c17.png","https://i0.hdslb.com/bfs/live/7820395368271757533649d3f4926b656470f5c4.gif","https://i0.hdslb.com/bfs/live/c69a34217f4b60ca99804fa54d675483703fdaab.webp")], [30634, new o("指点","你个白银蛮子！",1,20,"https://s1.hdslb.com/bfs/live/32f8b569b5cf3426983ce9c17df878e8c074e895.png","https://i0.hdslb.com/bfs/live/32f8b569b5cf3426983ce9c17df878e8c074e895.png","https://i0.hdslb.com/bfs/live/5405be1bf5e35b311d65f2edc24f048eba2a0167.gif","https://i0.hdslb.com/bfs/live/744c512947efdb3d29a9a0d18a9db4ff57d9eb9a.webp")], [31149, new o("荧光马车","梦幻的荧光马车来了~",1,3e3,"https://s1.hdslb.com/bfs/live/d6a3d3946bc3baf076fd822d6b5bddf118c4eaf8.png","https://i0.hdslb.com/bfs/live/d6a3d3946bc3baf076fd822d6b5bddf118c4eaf8.png","https://i0.hdslb.com/bfs/live/0b549edc2a0bdd7f19e193031d971476823a08fc.gif","https://i0.hdslb.com/bfs/live/65a89610439cac2f99ed5428025ce53aa38ffcd0.webp")], [30806, new o("牛气冲天","",-1,0,"https://s1.hdslb.com/bfs/live/61b8fe9500459e73bb0c8a8dd29afc85983a61ea.png","https://i0.hdslb.com/bfs/live/61b8fe9500459e73bb0c8a8dd29afc85983a61ea.png","https://i0.hdslb.com/bfs/live/e83c2e97fec9ef5834539dcaae0e620af890ec99.gif","https://i0.hdslb.com/bfs/live/0b93140eacfc3f0e11a3d0350775e9b0b1e7be14.webp")], [30048, new o("小光头","某幻君定制道具☆I am watching your 发际线！",1,23,"https://s1.hdslb.com/bfs/live/2144fa0297a58de687adbe94d85b7920c3b79668.png","https://i0.hdslb.com/bfs/live/2144fa0297a58de687adbe94d85b7920c3b79668.png","https://i0.hdslb.com/bfs/live/2f9ef6a55bd5ea94c61b7ff6c51587b80651ab0d.gif","https://i0.hdslb.com/bfs/live/53f918968a46753937a4fad1e52e02e594769550.webp")], [31341, new o("彩虹泡泡机","",1,520,"https://s1.hdslb.com/bfs/live/54a1705ce261aa73f71b5b8982bb9def5f83739b.png","https://i0.hdslb.com/bfs/live/54a1705ce261aa73f71b5b8982bb9def5f83739b.png","https://i0.hdslb.com/bfs/live/c7f74db92c906d28576946cfdcc7f68444e85856.gif","https://i0.hdslb.com/bfs/live/588b9bec06fa90b102cb7525d53cc6f6c6db9090.webp")], [30461, new o("新年红包","新年红包",-1,0,"https://s1.hdslb.com/bfs/live/0bd31a83a2bdc77d1cba2e4ff9813bdbd91f6098.png","https://i0.hdslb.com/bfs/live/0bd31a83a2bdc77d1cba2e4ff9813bdbd91f6098.png","https://i0.hdslb.com/bfs/live/4d895e227c37e3a9a775db56aa5766cf21dec5b3.gif","https://i0.hdslb.com/bfs/live/e580ae83846bfc998b6aeac8fe206ac9f468f224.webp")], [30636, new o("樱花雨测试","",1,1,"https://s1.hdslb.com/bfs/live/e45a485348ea0076c7c1b99c15e5f861f4c90178.png","https://i0.hdslb.com/bfs/live/6a0631e85bd2d5a054c976aaf1bc075ad68f7696.png","https://i0.hdslb.com/bfs/live/ded36afd84523bcdee17fa27dd025c1c149b4eef.gif","https://i0.hdslb.com/bfs/live/393c336d29565d141a06235a65c9390bb7bd06af.webp")], [30802, new o("属你最牛","",-1,0,"https://s1.hdslb.com/bfs/live/61b8fe9500459e73bb0c8a8dd29afc85983a61ea.png","https://i0.hdslb.com/bfs/live/61b8fe9500459e73bb0c8a8dd29afc85983a61ea.png","https://i0.hdslb.com/bfs/live/e7ca0228b0b02872aceb24f7eb1ed8001931ff06.gif","https://i0.hdslb.com/bfs/live/24d3499f410bc700c3f73868e47a15b99937a4af.webp")], [30475, new o("test","1",0,9900,"https://s1.hdslb.com/bfs/live/094c77579201fee18ffdaaba19d644437085fabf.png","https://i0.hdslb.com/bfs/live/34643b8ff0945b518f275d914e81827e9f5318fa.png","https://i0.hdslb.com/bfs/live/b2e4d88aa6b01871384e8cad1d3f60a19cd753cb.gif","https://i0.hdslb.com/bfs/live/8411912261bd7e087ea4984cc9d2664c91c42717.webp")], [31039, new o("牛哇牛哇","是真的牛！！",1,1,"https://s1.hdslb.com/bfs/live/91ac8e35dd93a7196325f1e2052356e71d135afb.png","https://i0.hdslb.com/bfs/live/91ac8e35dd93a7196325f1e2052356e71d135afb.png","https://i0.hdslb.com/bfs/live/179f42946c1f268071800aca17f7743654af7177.gif","https://i0.hdslb.com/bfs/live/7571c8bdfcb65f9b00ab1307b2c86630f0d00859.webp")], [30197, new o("xufu","",-1,0,"https://s1.hdslb.com/bfs/live/63dfbae07cbeb82a173e5e5b70c46ef4c6e95153.png","https://i0.hdslb.com/bfs/live/ea6ffc35e1e0e48d6c6c119636b1ce8be098a917.png","https://i0.hdslb.com/bfs/live/3248b63f0a4e3f9c16f6f553d5e6e9d99c0d1b09.gif","https://i0.hdslb.com/bfs/live/70bae1291dea354732b9385e4556b78ab86d14e8.webp")], [30470, new o("LPL应援","",0,1,"https://s1.hdslb.com/bfs/live/e13ee22e60f43c190816f6b907dfceeea48e5ab6.png","https://i0.hdslb.com/bfs/live/e13ee22e60f43c190816f6b907dfceeea48e5ab6.png","https://i0.hdslb.com/bfs/live/e13ee22e60f43c190816f6b907dfceeea48e5ab6.gif","https://i0.hdslb.com/bfs/live/e13ee22e60f43c190816f6b907dfceeea48e5ab6.webp")], [31637, new o("为你加冕","今日起，加冕为王",1,4500,"https://s1.hdslb.com/bfs/live/f50ca117d56053bf054f2eba377892a62499948d.png","https://i0.hdslb.com/bfs/live/de22cebbfe2b54da0414f6907192ecf29db96582.png","https://i0.hdslb.com/bfs/live/7c02b022eddfb6c71534d242ebc176ddf5a28d12.gif","https://i0.hdslb.com/bfs/live/f9a094a29ed085c719e796e72e7414345a25d21c.webp")], [31286, new o("兔子红薯","吃红薯！",1,523,"https://s1.hdslb.com/bfs/live/d00a13e75fc82c67351692fe8fbc23b886bb6855.png","https://i0.hdslb.com/bfs/live/bef92554e9f05ef1e593ffb256e0599827a42e57.png","https://i0.hdslb.com/bfs/live/d69a27b76ed233dd6be8cacd1c937136dc00d854.gif","https://i0.hdslb.com/bfs/live/55caef7219b831a04f9b073cd3c93eb6bcc5c4d9.webp")], [30417, new o("22娘上装","22娘上装",-1,0,"https://s1.hdslb.com/bfs/live/f6b73dd3bd0d672b1c186db7b314648307e39fba.png","https://i0.hdslb.com/bfs/live/f6b73dd3bd0d672b1c186db7b314648307e39fba.png","https://i0.hdslb.com/bfs/live/b4a4d59afd0c09872e07c54c872edb4157d07f7b.gif","https://i0.hdslb.com/bfs/live/edcd71c4a3f2fe91c6e7de24f243d91ee0f6f1a5.webp")], [30140, new o("Bang！","粉色风暴来袭！",1,10,"https://s1.hdslb.com/bfs/live/2fb24dcc86ef13acb79b8b52f3c54b978d18a1ee.png","https://i0.hdslb.com/bfs/live/affe94651549d63876493d6ebe959c220ecd11c9.png","https://i0.hdslb.com/bfs/live/0f0d0ac9b2d93b494188727fa256734d90bae255.gif","https://i0.hdslb.com/bfs/live/9a56f3d5bbd3ce4e9f1e04adbd41761f920365e9.webp")], [30467, new o("如意","",-1,0,"https://s1.hdslb.com/bfs/live/8a5a9bde41cf49cd142f48e84b948c22fde83a11.png","https://i0.hdslb.com/bfs/live/8a5a9bde41cf49cd142f48e84b948c22fde83a11.png","https://i0.hdslb.com/bfs/live/fb52dc328b242c24352a0c36f13f658a7379dad4.gif","https://i0.hdslb.com/bfs/live/ca2ccc121b99ceca9e855834693502da9c2c103e.webp")], [30670, new o("BLG干杯！","海报？海豹？BLG加油，为信念干杯！",1,10,"https://s1.hdslb.com/bfs/live/02a127ef2aa64b5f50d9c79778632d624ae95460.png","https://i0.hdslb.com/bfs/live/5b1cd6b252cbb730712ab0f786714fbf8754904d.png","https://i0.hdslb.com/bfs/live/89edc17e0defe4f903e61e13491c1a9d4e5a1186.gif","https://i0.hdslb.com/bfs/live/ddd087345f2cddee93e3ee372765673609e40ee7.webp")], [30889, new o("暴汗火锅	","",0,3e5,"https://s1.hdslb.com/bfs/live/36071d570dbee8c8dd3b18468de78c586bb6d79d.png","https://i0.hdslb.com/bfs/live/36071d570dbee8c8dd3b18468de78c586bb6d79d.png","https://i0.hdslb.com/bfs/live/75eed03d0c0062f57faf8cc8e5641a58bb5e3257.gif","https://i0.hdslb.com/bfs/live/fd815fe3f9b71a5f54175efa0e9ff1d526c2038b.webp")], [30241, new o("十周年快乐","哔哩哔哩十周年生日快乐！",-1,0,"https://s1.hdslb.com/bfs/live/32ce372786e3548d36ec8ac2905ca9b117125e76.png","https://i0.hdslb.com/bfs/live/e223d47cae0a5a74e04354638f1ebaced9078188.png","https://i0.hdslb.com/bfs/live/0442b9012db2eb42c5657a8e78f28786f66ed987.gif","https://i0.hdslb.com/bfs/live/aff9faf803daebbbaf3b16113c118e7024a48aaf.webp")], [30424, new o("BLS抽奖道具","",-1,0,"https://s1.hdslb.com/bfs/live/e6b9c3ea75677a403c4814d29b3a8ca5da47fce0.png","https://i0.hdslb.com/bfs/live/e6b9c3ea75677a403c4814d29b3a8ca5da47fce0.png","https://i0.hdslb.com/bfs/live/8b4fc279d11b5f48968403b8d6c544d80fcd8ff8.gif","https://i0.hdslb.com/bfs/live/a79301688159e0596e8bc2273c1c0a4fec5609e5.webp")], [30448, new o("蘑菇别跑","让我来康康是哪只蘑菇被提莫抓住啦",1,1219,"https://s1.hdslb.com/bfs/live/44e9d90b8dd6014bfa51064e2c6f53c12608eca3.png","https://i0.hdslb.com/bfs/live/47f49e1ac11b06334af8b4d8f88f6c985eea8fc3.png","https://i0.hdslb.com/bfs/live/e3499facf6e1e2188d501c57f7ad4957140b9284.gif","https://i0.hdslb.com/bfs/live/41964b6356be4b143e3ddc3dcf2757247a9bf200.webp")], [30718, new o("加分卡","在大乱斗时送出，可为主播增加100点乱斗值",-1,0,"https://s1.hdslb.com/bfs/live/3753b899dfaa9385f18bd36233fe3a3effe6d874.png","https://i0.hdslb.com/bfs/live/3753b899dfaa9385f18bd36233fe3a3effe6d874.png","https://i0.hdslb.com/bfs/live/2b136d27190f525e9586e09faf62157796bb470e.gif","https://i0.hdslb.com/bfs/live/99e29c1e85e9a35783d24a6e962b0384c81b0e7e.webp")], [30512, new o("科马内奇","翻滚吧，科马内奇！",1,130,"https://s1.hdslb.com/bfs/live/f6863c42c159666dffe3b5e156b23d05bd8fad7d.png","https://i0.hdslb.com/bfs/live/f6863c42c159666dffe3b5e156b23d05bd8fad7d.png","https://i0.hdslb.com/bfs/live/7979ec95c82963e4fb97aba4bf99eea75e795de2.gif","https://i0.hdslb.com/bfs/live/f14e881b24b4f7dd007868bfb30b89c5fc187d57.webp")], [25, new o("小电视飞船","哔哩哔哩吉祥物，33花了一个暑假魔改，加装了灵能跃迁引擎、相转移立场、因果律变动弹......",1,12450,"https://s1.hdslb.com/bfs/live/ac43b069bec53d303a9a1e0c4e90ccd1213d1b6b.png","https://i0.hdslb.com/bfs/live/c6f1e68ab1e4ad29bd0dc116a48565afb9248079.png","https://i0.hdslb.com/bfs/live/b4c24534dcfff74ca664860d37575551f2b58b37.gif","https://i0.hdslb.com/bfs/live/29e01d47ca7584754a682171e3644fcec3669280.webp")], [30954, new o("星令经验卡","bilibili直播嘉年华，星令经验+10",-1,0,"https://s1.hdslb.com/bfs/live/81af7e535c7ceccf3635ee112e06194a1b2a61e2.png","https://i0.hdslb.com/bfs/live/81af7e535c7ceccf3635ee112e06194a1b2a61e2.png","https://i0.hdslb.com/bfs/live/de69c8edbfca7c990ef20f8401aa26c53d8c3380.gif","https://i0.hdslb.com/bfs/live/0ec8c3968aa0fd58fcd24994d03232ab02ea5f27.webp")], [30861, new o("小鱼干","有小鱼干就不咬人啦~",1,10,"https://s1.hdslb.com/bfs/live/0bf36c0d5b6bc4b1eb403994d530eb5c6bbe546f.png","https://i0.hdslb.com/bfs/live/0bf36c0d5b6bc4b1eb403994d530eb5c6bbe546f.png","https://i0.hdslb.com/bfs/live/abe10040b6989cdc619d112409709bed6a1b4bb1.gif","https://i0.hdslb.com/bfs/live/c3f1e44ea76026f2da34946eef5e0563cc1d18ee.webp")], [30544, new o("ZGNB","ZGNB!",1,1,"https://s1.hdslb.com/bfs/live/9f59d5d6bd0d68a8cf8debb3513d6cc589639faf.png","https://i0.hdslb.com/bfs/live/9f59d5d6bd0d68a8cf8debb3513d6cc589639faf.png","https://i0.hdslb.com/bfs/live/eabb7be619fbde1bd782fbcc6f930a325687d501.gif","https://i0.hdslb.com/bfs/live/974e8fd7669d898d01fa065bb0220dcbfa287dba.webp")], [30876, new o("D言D语","疯狂产出一波来自DD的夸夸弹幕！！",1,330,"https://s1.hdslb.com/bfs/live/28186596880db45a7b843f17d6ebb70feeac06f9.png","https://i0.hdslb.com/bfs/live/28186596880db45a7b843f17d6ebb70feeac06f9.png","https://i0.hdslb.com/bfs/live/62597ef6fdef4d80130179948588aec142c2030f.gif","https://i0.hdslb.com/bfs/live/98b4c8485634df6103c746ed084249f34883487d.webp")], [30087, new o("天空之翼","光翼展开！Biu！",1,1e3,"https://s1.hdslb.com/bfs/live/913b1ec5af5f1c8005bcd532349b8408c10e4f9d.png","https://i0.hdslb.com/bfs/live/7df45e822082c99653a9208e915a2de446ff6ff9.png","https://i0.hdslb.com/bfs/live/b5bed732d5055215344dd93e7da386d4e6b1dc4e.gif","https://i0.hdslb.com/bfs/live/9476f56e8b82fdc953e6635cb2d14eb8692472c2.webp")], [30264, new o("小拳拳","吃我一记小拳拳~",-1,0,"https://s1.hdslb.com/bfs/live/b596be542dc17d86d623d267da1e9203f3439668.png","https://i0.hdslb.com/bfs/live/b596be542dc17d86d623d267da1e9203f3439668.png","https://i0.hdslb.com/bfs/live/140e301c1abb40ac06e4eeec7d2c000f4f389721.gif","https://i0.hdslb.com/bfs/live/54fdd5aa865afd51f223af38ede5b624ba4abcf4.webp")], [30935, new o("12周年小蛋糕","bilibili12周年定制礼物～",1,5,"https://s1.hdslb.com/bfs/live/39e2b2acaab7c8a9be2daa5cd690f46cc8a195ef.png","https://i0.hdslb.com/bfs/live/39e2b2acaab7c8a9be2daa5cd690f46cc8a195ef.png","https://i0.hdslb.com/bfs/live/78489da49ef47e1bf0f09d22f51c22681d322241.gif","https://i0.hdslb.com/bfs/live/9b0d8c2c88d05cdb028ef80ad85c3a883afc23c7.webp")], [30332, new o("最终糕能","",-1,0,"https://s1.hdslb.com/bfs/live/c19d0a779268ef487c7bba9a5c71fdc1f5d2f538.png","https://i0.hdslb.com/bfs/live/c19d0a779268ef487c7bba9a5c71fdc1f5d2f538.png","https://i0.hdslb.com/bfs/live/486daee228517667adf315a6f8893fc8d92847fe.gif","https://i0.hdslb.com/bfs/live/10a8295766001abff08eb5bc43b68334e6c81393.webp")], [30254, new o("生日快乐","Happy birthday to you！",0,1e3,"https://s1.hdslb.com/bfs/live/d84e5de2c7c1beeac9306d8ff88a59f0b63aec85.png","https://i0.hdslb.com/bfs/live/d84e5de2c7c1beeac9306d8ff88a59f0b63aec85.png","https://i0.hdslb.com/bfs/live/d07f14396b98136b0b843ac601205514b5c72796.gif","https://i0.hdslb.com/bfs/live/1dafa1336c62dc860bec807f9a7883ee8ef3265d.webp")], [30932, new o("5G未来大使","青年一派为毕业干杯！",0,45e4,"https://s1.hdslb.com/bfs/live/84d744aa28a7bd90e8fc2243284f65a1a75656b5.png","https://i0.hdslb.com/bfs/live/84d744aa28a7bd90e8fc2243284f65a1a75656b5.png","https://i0.hdslb.com/bfs/live/6ea71d027f6a138a18ee56225f0a2e3ae474e755.gif","https://i0.hdslb.com/bfs/live/c9fd3a63a142096cdef93bed839a25142dea2711.webp")], [30677, new o("瓶子","这是个神奇的瓶子，你甚至可以拿它装水",1,10,"https://s1.hdslb.com/bfs/live/c68857340e3237270e7af8ada63d4184b7bb5d81.png","https://i0.hdslb.com/bfs/live/c68857340e3237270e7af8ada63d4184b7bb5d81.png","https://i0.hdslb.com/bfs/live/fbdcf155e4070add801bd7e4df99b51468b71aab.gif","https://i0.hdslb.com/bfs/live/a45c75414d283c7f33d8fc702b945354082f7199.webp")], [30768, new o("10乱斗值卡","在大乱斗中，给主播增加10乱斗值",-1,0,"https://s1.hdslb.com/bfs/live/1b74a47931eea508985a776b112ae8f866d703aa.png","https://i0.hdslb.com/bfs/live/1b74a47931eea508985a776b112ae8f866d703aa.png","https://i0.hdslb.com/bfs/live/3bbcf5d50e3b2a6cd351c6dda7ac966b4ce0c627.gif","https://i0.hdslb.com/bfs/live/68d83a681cff7a5712eb4230b090ce16167e08d7.webp")], [30747, new o("大电影票","暗影猎手 准备就绪",1,10,"https://s1.hdslb.com/bfs/live/d21e7a143ebe47aede3a0564c7b5899aaf7879b4.png","https://i0.hdslb.com/bfs/live/586dbe173c7ccb7f662cda25708ed71c6779675c.png","https://i0.hdslb.com/bfs/live/a8ae15ca29233a94506d0743d78931c3e929b9a0.gif","https://i0.hdslb.com/bfs/live/919a3fe07fac0f7dfe1f59a9ba67a94aace906f3.webp")], [30406, new o("小电视图抽奖","",-1,0,"https://s1.hdslb.com/bfs/live/157193dea0f7f8f558c35d7aece2d54fbee20c34.png","https://i0.hdslb.com/bfs/live/157193dea0f7f8f558c35d7aece2d54fbee20c34.png","https://i0.hdslb.com/bfs/live/5870e7fab94cd33a571c615e0e78d584ee6cc00b.gif","https://i0.hdslb.com/bfs/live/05479678bfdf4a0f1526614b79bb4e0cf77c4295.webp")], [31044, new o("情书","山有木兮木有枝，心悦君兮君不知",1,52,"https://s1.hdslb.com/bfs/live/57534e2fc6da1f98ce1631214f32d70f26b60ac1.png","https://i0.hdslb.com/bfs/live/57534e2fc6da1f98ce1631214f32d70f26b60ac1.png","https://i0.hdslb.com/bfs/live/85872855e9b718168ed1e94d7bc9aec36a8f7c67.gif","https://i0.hdslb.com/bfs/live/e9a574947740617a907184e8e4d6792aa571ca32.webp")], [30468, new o("美满","",-1,0,"https://s1.hdslb.com/bfs/live/8a5a9bde41cf49cd142f48e84b948c22fde83a11.png","https://i0.hdslb.com/bfs/live/8a5a9bde41cf49cd142f48e84b948c22fde83a11.png","https://i0.hdslb.com/bfs/live/fb52dc328b242c24352a0c36f13f658a7379dad4.gif","https://i0.hdslb.com/bfs/live/ca2ccc121b99ceca9e855834693502da9c2c103e.webp")], [30615, new o("敖敖","让敖敖随风飘扬~",1,20,"https://s1.hdslb.com/bfs/live/7160ed608f076b8d842654d87991f6325689cc46.png","https://i0.hdslb.com/bfs/live/7160ed608f076b8d842654d87991f6325689cc46.png","https://i0.hdslb.com/bfs/live/6c16f8b7123b1395323dfec3fc6ae3686effa4e0.gif","https://i0.hdslb.com/bfs/live/f83800b5d48b88c5b0ce926830b8cbef604ad067.webp")], [30088, new o("奈斯","夸就完事儿了！",1,20,"https://s1.hdslb.com/bfs/live/e273b5737b6422808d4c1b68441884cbdc1d738a.png","https://i0.hdslb.com/bfs/live/fc701c6fac51624b9e757da73bdea78ffbcfa5a5.png","https://i0.hdslb.com/bfs/live/5546414a3be8e3fd8fb79829b438567e99c9e53e.gif","https://i0.hdslb.com/bfs/live/42f2836bab6a2bbb73c60e10ff1448b5a21e596b.webp")], [30733, new o("爱之魔力","粉丝勋章24级可解锁爱之魔力购买资格哦~ ",1,280,"https://s1.hdslb.com/bfs/live/1e2bbd767902cbf57bba83ea91c308b5c17b361e.png","https://i0.hdslb.com/bfs/live/0483884825815a322b55d54655b11f39948c9d18.png","https://i0.hdslb.com/bfs/live/7200d6156169422cd5e407683c584bcd1d2ed451.gif","https://i0.hdslb.com/bfs/live/b927abad4749f050b3a5fb514aa5c64861e0ecc1.webp")], [31243, new o("海湾之旅","专属于大航海船员的浪漫陪伴之旅~",1,8880,"https://s1.hdslb.com/bfs/live/00587e5dee12f8b8715c2e470104e15a96be4534.png","https://i0.hdslb.com/bfs/live/00587e5dee12f8b8715c2e470104e15a96be4534.png","https://i0.hdslb.com/bfs/live/1127d6b19005fc0b9db4057590117501b1237950.gif","https://i0.hdslb.com/bfs/live/a4667de09de544d776a62f1cc9d2d0678fc06dab.webp")], [30783, new o("影·摩天大楼","B站买房了解一下~",-1,0,"https://s1.hdslb.com/bfs/live/380bcd708da496d75737c68930965dd67b82879d.png","https://i0.hdslb.com/bfs/live/b26ec493cb03891a03efe117a434e58f9cb89366.png","https://i0.hdslb.com/bfs/live/9bfb4b7c55e1be67a5269b30b9a0c23a74009857.gif","https://i0.hdslb.com/bfs/live/e483b2dd2bf03e0c98542b5e1c395bc3e460ab3c.webp")], [20009, new o("超级战舰","",1,13140,"https://s1.hdslb.com/bfs/live/29ce0bb6a1c411c79847db27b5173ff42095330f.png","https://i0.hdslb.com/bfs/live/29ce0bb6a1c411c79847db27b5173ff42095330f.png","https://i0.hdslb.com/bfs/live/2fb61cf31e1aa4a10a649cb8b6c8b25ec6b1ab11.gif","https://i0.hdslb.com/bfs/live/be76beeed0b40dac73ffd278e8b286f0dc92baeb.webp")], [31050, new o("充能测试道具","",1,10,"https://s1.hdslb.com/bfs/live/8b0ec105c99a11649291c385d235db5935d72184.png","https://i0.hdslb.com/bfs/live/8b0ec105c99a11649291c385d235db5935d72184.png","https://i0.hdslb.com/bfs/live/13987286ab33ac0ba79c8678f815f8a8fed2a588.gif","https://i0.hdslb.com/bfs/live/9bc9a5e03e7c33d386a1e8f5ad3bbf25b5033789.webp")], [30284, new o("夏日出游头饰","",-1,0,"https://s1.hdslb.com/bfs/live/5a6934356de67daef636dc69603a9959bb2ce1fa.png","https://i0.hdslb.com/bfs/live/5a6934356de67daef636dc69603a9959bb2ce1fa.png","https://i0.hdslb.com/bfs/live/6f4e16618294386b805039eab8a21acfd9ea2d57.gif","https://i0.hdslb.com/bfs/live/45442a2036c3885c3950ebfcdcaa54789e024803.webp")], [30767, new o("1乱斗值卡","在大乱斗中，给主播增加1乱斗值",-1,0,"https://s1.hdslb.com/bfs/live/9d1cff6b3eeacda16ac0b4df3be9822208834e89.png","https://i0.hdslb.com/bfs/live/9d1cff6b3eeacda16ac0b4df3be9822208834e89.png","https://i0.hdslb.com/bfs/live/9ac1ae7a269974e557043aef9a4710be9df47a73.gif","https://i0.hdslb.com/bfs/live/9980c565c91d7b64771b7a9bf6cae06e61e2b904.webp")], [30766, new o("招财进宝","财源滚滚，好运连连",0,2e7,"https://s1.hdslb.com/bfs/live/f71ac1f6d13e2e35dae70b5b071a66a31272d47f.png","https://i0.hdslb.com/bfs/live/34838f2bc9d6d0eb8b23882723a8d3694b0b9609.png","https://i0.hdslb.com/bfs/live/1939ffc836b0fd63a8640d1d986096b47b6b5bf3.gif","https://i0.hdslb.com/bfs/live/d736cf704524f5fb2d6e2efa15ae58061b9f057d.webp")], [4, new o("喵娘","( >ω<) 喵~~",0,5200,"https://s1.hdslb.com/bfs/live/0db6616b4f17dbd1a9743f30996e35e7012cbc76.png","https://i0.hdslb.com/bfs/live/0db6616b4f17dbd1a9743f30996e35e7012cbc76.png","https://i0.hdslb.com/bfs/live/26403d9eddce07b58ffe138b03262fd276c4fab8.gif","https://i0.hdslb.com/bfs/live/8e31ae247fd6824a904c60e98aa28176a55ae615.webp")], [30886, new o("初夏么么茶","",-1,0,"https://s1.hdslb.com/bfs/live/377df23acfa55688a1c2323025d179719027652b.png","https://i0.hdslb.com/bfs/live/a1256e48114df7d76013d9dc0ff23575339b0df9.png","https://i0.hdslb.com/bfs/live/b0ae45a4b215d1d5624c5557443700237b222c45.gif","https://i0.hdslb.com/bfs/live/f70eef3a703c99a70ec8184e59cda4b841e2918e.webp")], [30686, new o("逗猫棒","喵！是小蝴蝶~",1,10,"https://s1.hdslb.com/bfs/live/6e9654d71e3a47a139b36e2400ea9a67f526f045.png","https://i0.hdslb.com/bfs/live/6e9654d71e3a47a139b36e2400ea9a67f526f045.png","https://i0.hdslb.com/bfs/live/5f1e4e78015ae8f126cc81c1915f96f6c9db1842.gif","https://i0.hdslb.com/bfs/live/1670678968341ed810cded46f5e5601cee102424.webp")], [30725, new o("打call棒","挥舞起来，疯狂打call",-1,0,"https://s1.hdslb.com/bfs/live/1f0eb5a2aa15990b0de859ceef30ba2b53a2c6e1.png","https://i0.hdslb.com/bfs/live/9bd1f4e51c7d3df75efa0875cb24fbc78fb6a332.png","https://i0.hdslb.com/bfs/live/4176dfc30daeca66aa5a7da47f7fb0b082685075.gif","https://i0.hdslb.com/bfs/live/e15e64dce8bd902c7dcd851471fa33be355a430f.webp")], [30058, new o("460","再也不要看见460辣！！",1,10,"https://s1.hdslb.com/bfs/live/9e9873e18b54ba6ef0cb1e0c28d83685352f387d.png","https://i0.hdslb.com/bfs/live/6433c773655204ad6cf6549129c0df5292849f8f.png","https://i0.hdslb.com/bfs/live/9b085ea5de981f7c0ff94103658785950f7d0518.gif","https://i0.hdslb.com/bfs/live/b468952ee432c11481638286eec8e6ced51dbaf7.webp")], [31307, new o("烟花棒","",-1,0,"https://s1.hdslb.com/bfs/live/fe69a56589a0361b177c62d681fdb3ecbe1bee7f.png","https://i0.hdslb.com/bfs/live/fe69a56589a0361b177c62d681fdb3ecbe1bee7f.png","https://i0.hdslb.com/bfs/live/d4cc8d5185d8c2ec8b353f74de1e16a2f32f73ef.gif","https://i0.hdslb.com/bfs/live/4ea2b3543353a53473c08384bbda67dd832ddeac.webp")], [31923, new o("如意柿","摘下它，所有事都会称心如意",1,170,"https://s1.hdslb.com/bfs/live/08c043973f4d93987fa5ed47c9f7ade80ec71770.png","https://i0.hdslb.com/bfs/live/28487ef663316c0e7159feb2082e33d3995a78b7.png","https://i0.hdslb.com/bfs/live/12b04bebdaf582ae67d40891fc48af6e2501ba10.gif","https://i0.hdslb.com/bfs/live/2248e57570366d8d6dcd19aade0d1872f5aa126a.webp")], [30740, new o("一起跨年测试","2020最美的夜，在B站一起跨年！",-1,0,"https://s1.hdslb.com/bfs/live/266b3d519868f52bd93e1e282dc1d45390daf8f5.png","https://i0.hdslb.com/bfs/live/266b3d519868f52bd93e1e282dc1d45390daf8f5.png","https://i0.hdslb.com/bfs/live/f57dd7921ed5f456a0b60ab36e55ee86c5a45f14.gif","https://i0.hdslb.com/bfs/live/10cbc1f935a9ae9839cce618cbb684aa7aef162f.webp")], [30874, new o("星星时刻","",-1,0,"https://s1.hdslb.com/bfs/live/109deae0f55bba192b1d94fe4b8af7e8dc287d35.png","https://i0.hdslb.com/bfs/live/109deae0f55bba192b1d94fe4b8af7e8dc287d35.png","https://i0.hdslb.com/bfs/live/1f93860fc15febc289ab2a51da96f093f38c67f0.gif","https://i0.hdslb.com/bfs/live/743944812f179ddc056e47e9cb07e7d1a93d09e8.webp")], [31061, new o("战术喝水","梦之起点 重新启航",1,10,"https://s1.hdslb.com/bfs/live/c859c61372a5b5ddaad8a0435234d8a4925acd48.png","https://i0.hdslb.com/bfs/live/8607d0fe95deb7441f33318a0d1eb10505b00a82.png","https://i0.hdslb.com/bfs/live/24e621bdb8c5f798e83a13c685c25c0f7d4e86be.gif","https://i0.hdslb.com/bfs/live/7f7ddb20f9e85281719954f77dd975071652218e.webp")], [30897, new o("冰阔落","",1,10,"https://s1.hdslb.com/bfs/live/080753229f6069d1f9c33026b455c9035d0d6ec0.png","https://i0.hdslb.com/bfs/live/4f637f73faa6476abd300ccb5113993affb8e621.png","https://i0.hdslb.com/bfs/live/ef144e1910c5dfa20ab8683b352379162d4e7228.gif","https://i0.hdslb.com/bfs/live/b01e128fa4ab6218943c468ae24168feffb7c337.webp")], [31093, new o("紫金宝盒","宝盒福利",1,100,"https://s1.hdslb.com/bfs/live/1649da7f53bba51289f12653fd764121b5725a58.png","https://i0.hdslb.com/bfs/live/1649da7f53bba51289f12653fd764121b5725a58.png","https://i0.hdslb.com/bfs/live/0fb6bc2b271e288003baa550848ea4c988d3e853.gif","https://i0.hdslb.com/bfs/live/452904539bec706d776297f8eaefdcab23f0a913.webp")], [30732, new o("转运锦鲤","粉丝勋章32级可解锁转运锦鲤购买资格哦~ ",1,6660,"https://s1.hdslb.com/bfs/live/f21d3ea71b9c6d200d48d948a670cc351fd65f21.png","https://i0.hdslb.com/bfs/live/3fd83495c8d303e7c990e992ba56f7bd9bdf37a1.png","https://i0.hdslb.com/bfs/live/7f2bfda21e3b14c8afffe2c407daf3a8899efdc9.gif","https://i0.hdslb.com/bfs/live/182e990a43dc1f6b9b03fb77d478856cdb5410e9.webp")], [30502, new o("一起哈啤","",0,1e4,"https://s1.hdslb.com/bfs/live/6438ac6ed3fe53004dfebe1d2bb161455b9e10fa.png","https://i0.hdslb.com/bfs/live/6438ac6ed3fe53004dfebe1d2bb161455b9e10fa.png","https://i0.hdslb.com/bfs/live/23ee223cdb643f52a7c100a052eb1b49b654aab7.gif","https://i0.hdslb.com/bfs/live/66fbb24922f97bdbc84a80b84ab1b9ad6e8e30b6.webp")], [31009, new o("变欧喷雾","轻喷一下，增加欧气",1,10,"https://s1.hdslb.com/bfs/live/2953e15edd6cadd3459e83e1b6a3baad603ab076.png","https://i0.hdslb.com/bfs/live/6e793b36f7e71ff45bedebfea4e78386364718b0.png","https://i0.hdslb.com/bfs/live/a143f2ca4e7e4c02c2efd0df6578b2a3976ddda9.gif","https://i0.hdslb.com/bfs/live/3ce49229d2c7c99e4f87923db0b318c42822b582.webp")], [30848, new o("绚烂烟花","",-1,0,"https://s1.hdslb.com/bfs/live/a5a4186d4fa505cada91e2d2b12d5181fcaff4ea.png","https://i0.hdslb.com/bfs/live/a5a4186d4fa505cada91e2d2b12d5181fcaff4ea.png","https://i0.hdslb.com/bfs/live/d862d10fbd8b21d71068e4dd7cfaaca760eca4e9.gif","https://i0.hdslb.com/bfs/live/a5c6b419bb91874d7a8e91256d4c5d31c6102e34.webp")], [30329, new o("桂花","",0,10,"https://s1.hdslb.com/bfs/live/53eb00722ca27defef07f06f8a932edf98cd0dcc.png","https://i0.hdslb.com/bfs/live/53eb00722ca27defef07f06f8a932edf98cd0dcc.png","https://i0.hdslb.com/bfs/live/643025da42e3491f37dd686bb59b1d9c7e9c6116.gif","https://i0.hdslb.com/bfs/live/d9deca65e2b3fbf7c77c75de510e42e959f4613a.webp")], [30256, new o("Best wishes!","许下美好的心愿~",0,1e5,"https://s1.hdslb.com/bfs/live/482fd35069812e637fe87abf176f35bb1b7e1338.png","https://i0.hdslb.com/bfs/live/e1bf2da5cda7532b1982cfe1565285ac45ae1422.png","https://i0.hdslb.com/bfs/live/dc0ba902413b11d9852348a61da7e274bc9fa9e7.gif","https://i0.hdslb.com/bfs/live/e3a43eb8dfabff91a64fff721cbfa20ceb76b279.webp")], [30465, new o("欢心","",-1,0,"https://s1.hdslb.com/bfs/live/8a5a9bde41cf49cd142f48e84b948c22fde83a11.png","https://i0.hdslb.com/bfs/live/8a5a9bde41cf49cd142f48e84b948c22fde83a11.png","https://i0.hdslb.com/bfs/live/fb52dc328b242c24352a0c36f13f658a7379dad4.gif","https://i0.hdslb.com/bfs/live/ca2ccc121b99ceca9e855834693502da9c2c103e.webp")], [30736, new o("高级加分卡","在大乱斗时送出，可为主播增加5000点乱斗值",-1,0,"https://s1.hdslb.com/bfs/live/520f4243eb34213595796d9fb55cbdd6ade4bb17.png","https://i0.hdslb.com/bfs/live/520f4243eb34213595796d9fb55cbdd6ade4bb17.png","https://i0.hdslb.com/bfs/live/fcb2bd56053f129af11d0de5a97a4e5085fafbb6.gif","https://i0.hdslb.com/bfs/live/c8098ec67dd0485fdc8641e096ad9f764c7b7e5e.webp")], [6, new o("亿圆","虽然只要1元，但是四舍五入之后就值一个亿啊。",0,1e3,"https://s1.hdslb.com/bfs/live/592e81002d20699c7e4dae4480ada79ab3253eae.png","https://i0.hdslb.com/bfs/live/592e81002d20699c7e4dae4480ada79ab3253eae.png","https://i0.hdslb.com/bfs/live/e9a7971219a6f6d9ad641dad5019a7ddcef40d47.gif","https://i0.hdslb.com/bfs/live/840aa8e74326905b73453d950ce73871ee5d1818.webp")], [30426, new o("BLS能量石","BLS秋季赛活动道具",-1,0,"https://s1.hdslb.com/bfs/live/abfcc154715836547a9bbc766c079675a400721d.png","https://i0.hdslb.com/bfs/live/a0ec413623db5b032f0a89d9d593ef4b85f30f84.png","https://i0.hdslb.com/bfs/live/de10454df2585f6863d8517c3aef2d8da8cf9317.gif","https://i0.hdslb.com/bfs/live/4ce8119c246f17fcad311e4c2b1feec97b41d060.webp")], [30362, new o("咕咕卡","快来捕获你最爱的小Bu咕",-1,0,"https://s1.hdslb.com/bfs/live/d5ab99f79a98eb169e94efaa4ac8cfcd80b2c01b.png","https://i0.hdslb.com/bfs/live/d5ab99f79a98eb169e94efaa4ac8cfcd80b2c01b.png","https://i0.hdslb.com/bfs/live/940fa0e7678f67fa1f4bc622976c0f6269887877.gif","https://i0.hdslb.com/bfs/live/04a547d09500d930d7613a0b675d3d3255e3bfd3.webp")], [30788, new o("小金人来辽","2020年度UP主颁奖奖杯",0,2e7,"https://s1.hdslb.com/bfs/live/05e6149a81f1482e837aeb156ac899f0d8bc5f4c.png","https://i0.hdslb.com/bfs/live/05e6149a81f1482e837aeb156ac899f0d8bc5f4c.png","https://i0.hdslb.com/bfs/live/a99d3309f2d4ac241dddd3937a6325c13f17d806.gif","https://i0.hdslb.com/bfs/live/29cf403ff37b0292e01733ddf434ff14f93b6a2d.webp")], [39, new o("节奏风暴","是时候带一波节奏了，触发弹幕风暴！",1,1e3,"https://s1.hdslb.com/bfs/live/a44fc28ba3b1ce478399c5d1919d0ae786bbb642.png","https://i0.hdslb.com/bfs/live/9d11c44cc3cf0a5a4b05741098d355f923313407.png","https://i0.hdslb.com/bfs/live/927cc195124c47474b4a150d8b09e00536d15a0a.gif","https://i0.hdslb.com/bfs/live/99c26fd0cf591a7639e862ed1f20bbc337578ce3.webp")], [31148, new o("炫彩许愿池","",1,2330,"https://s1.hdslb.com/bfs/live/8bfa67c8b606314cb1701b785a03d07ba38416d6.png","https://i0.hdslb.com/bfs/live/8bfa67c8b606314cb1701b785a03d07ba38416d6.png","https://i0.hdslb.com/bfs/live/abe245ab6c01fc4b12e115c0d55a33a68da87006.gif","https://i0.hdslb.com/bfs/live/2929dd3eafd98a4a97a4d8a2d13ca8838ebc9f2c.webp")], [30715, new o("前方高能！","请注意！请注意！前方超高能量警告！",1,10,"https://s1.hdslb.com/bfs/live/36ae1c3abd41d8f8e7c48dd483a7aec78c851151.png","https://i0.hdslb.com/bfs/live/36ae1c3abd41d8f8e7c48dd483a7aec78c851151.png","https://i0.hdslb.com/bfs/live/c5747b2dcb1c5de75307531fcfc0aa99cafbd57b.gif","https://i0.hdslb.com/bfs/live/be6c898e4c22791d367e461f4768a01e7c529151.webp")], [31024, new o("典藏战舰","典藏版战舰，时刻准备起航",1,13140,"https://s1.hdslb.com/bfs/live/103790a25a3ba724868db7fdb50892df83af6b0f.png","https://i0.hdslb.com/bfs/live/103790a25a3ba724868db7fdb50892df83af6b0f.png","https://i0.hdslb.com/bfs/live/b0c8abf89c062736a16db9bf97447238177b08b0.gif","https://i0.hdslb.com/bfs/live/9477bec24270b27bf5027546cb4e62a72eb6d935.webp")], [30931, new o("毕业快乐","毕业起航，目标星辰大海！ ",1,10,"https://s1.hdslb.com/bfs/live/c92a6fc41e406161042ee68e2a72541f5ce4ecc6.png","https://i0.hdslb.com/bfs/live/2e2a28740e58c6775d6e40d342de0f8945783571.png","https://i0.hdslb.com/bfs/live/2567a50308c45bef2286a4fbb5d29721be4d6129.gif","https://i0.hdslb.com/bfs/live/cc51e9d19089e15459db1edf530d05259007aebd.webp")], [31314, new o("小精灵","《元气赏》活动道具",1,52,"https://s1.hdslb.com/bfs/live/7fafaf78ff4e2fbbd6c6c9a8cad8d9711c98d36e.png","https://i0.hdslb.com/bfs/live/7fafaf78ff4e2fbbd6c6c9a8cad8d9711c98d36e.png","https://i0.hdslb.com/bfs/live/3abb4a352333cc392947d6b871e4ed2c85dd4f6b.gif","https://i0.hdslb.com/bfs/live/194dff1335795bf7be126b9e2db76e11d28895e1.webp")], [30057, new o("三级头","三级头才不是电焊盔~",1,20,"https://s1.hdslb.com/bfs/live/89ea1ad64500818e37602b9e2beb2aeccc4f7a5a.png","https://i0.hdslb.com/bfs/live/1eb8316c80d7f3a541a6979e97d88a52b8f48a41.png","https://i0.hdslb.com/bfs/live/0df8a9fd0ae2fcec75d13a0b3f23cae04b9e6b0d.gif","https://i0.hdslb.com/bfs/live/444b4c9258cc0fd65ad474a4540e714aeeebd22c.webp")], [30748, new o("元气满满","2021，一起元气满满！",0,2e7,"https://s1.hdslb.com/bfs/live/25587e7b0adf34cd62492ac155c154c58d0feb15.png","https://i0.hdslb.com/bfs/live/25587e7b0adf34cd62492ac155c154c58d0feb15.png","https://i0.hdslb.com/bfs/live/2cf9c2ec31493c52776dd7c027ced385f688a5d0.gif","https://i0.hdslb.com/bfs/live/60c9519b38fa5d7756a11c6b8c1bcac38ccdd644.webp")], [30408, new o("33看板娘头饰","",-1,0,"https://s1.hdslb.com/bfs/live/623224c509f9f059c333a8952ed7700836a1d792.png","https://i0.hdslb.com/bfs/live/623224c509f9f059c333a8952ed7700836a1d792.png","https://i0.hdslb.com/bfs/live/79b2b4b9b0c2f1e716e087f00490341f8d4375ea.gif","https://i0.hdslb.com/bfs/live/b3cf162a91fd91aa705ceaad7424bae3b19bce97.webp")], [31156, new o("星辰大海","3009专属道具",1,12e3,"https://s1.hdslb.com/bfs/live/810fa63817c988188b5c60fda269e2b374e403b8.png","https://i0.hdslb.com/bfs/live/810fa63817c988188b5c60fda269e2b374e403b8.png","https://i0.hdslb.com/bfs/live/32d9e6fe70713fc41f74743770c58e8fdc86b0fe.gif","https://i0.hdslb.com/bfs/live/1b7e21d28e708408cf3aaa4cfeadaf18e46971b0.webp")], [30508, new o("喵爪","1个喵爪产生1吸猫值",-1,0,"https://s1.hdslb.com/bfs/live/27b0ac1f6be21e06504cd8935b1299ad0d202cdb.png","https://i0.hdslb.com/bfs/live/27b0ac1f6be21e06504cd8935b1299ad0d202cdb.png","https://i0.hdslb.com/bfs/live/ff8bcfd52eb3d9becf02216a79529b3c3b30afd2.gif","https://i0.hdslb.com/bfs/live/28e89e056d8a1de791ea9d293f862c1dea28360c.webp")], [31297, new o("环游飞车","旅行大作战活动道具",1,12e3,"https://s1.hdslb.com/bfs/live/a141a58410ee50c8e7b0ad75bff8649a74c17f57.png","https://i0.hdslb.com/bfs/live/a6d125e3566146ad9fcb0311163bb55a1d8ec4f8.png","https://i0.hdslb.com/bfs/live/e1d1b51a0f9e79ed1251b38ff39d8c23eec497c0.gif","https://i0.hdslb.com/bfs/live/3b91f8c2908b01d179875af0bbdeef2c5875181e.webp")], [30607, new o("小心心","观看5分钟即可获得哦～",-1,0,"https://s1.hdslb.com/bfs/live/d4a0827cbb6b00e48f4d3e6c0f4fdd6e24c93a8f.png","https://i0.hdslb.com/bfs/live/d4a0827cbb6b00e48f4d3e6c0f4fdd6e24c93a8f.png","https://i0.hdslb.com/bfs/live/e52c67d092d490c58869c30f40fdbd613d5536ea.gif","https://i0.hdslb.com/bfs/live/cce60fd908e4910a340a1a4a061a3d4d4a1a123d.webp")], [30279, new o("聆听","",-1,0,"https://s1.hdslb.com/bfs/live/58c0930eebcc977c0008980add17b3fcdf71a4f6.png","https://i0.hdslb.com/bfs/live/58c0930eebcc977c0008980add17b3fcdf71a4f6.png","https://i0.hdslb.com/bfs/live/67e0f49dc3cf697691cd7ed1f661eac6f1ecabb9.gif","https://i0.hdslb.com/bfs/live/2cadd30c10be70272d10561d7efaec24636fc3f5.webp")], [31130, new o("小雪人","可可爱爱小雪人",1,52,"https://s1.hdslb.com/bfs/live/93111c28a5c0b7b0b1fdbacf81e361fdf8b67ec6.png","https://i0.hdslb.com/bfs/live/93111c28a5c0b7b0b1fdbacf81e361fdf8b67ec6.png","https://i0.hdslb.com/bfs/live/44f302b07062fb6fd99757d3bb9587e16f9a07c8.gif","https://i0.hdslb.com/bfs/live/bd3f6b25640a8323d29cfd82a1cb0cf9e409bb63.webp")], [31154, new o("孙哥吃面","孙哥你快吃吧！",1,100,"https://s1.hdslb.com/bfs/live/485b3ca80f4c9e43022d9bdef62537b10d24a4dd.png","https://i0.hdslb.com/bfs/live/485b3ca80f4c9e43022d9bdef62537b10d24a4dd.png","https://i0.hdslb.com/bfs/live/7cce6d98caf169e1d2193068c91f391f9c1a3b33.gif","https://i0.hdslb.com/bfs/live/dc3482cbd4f79ca52af4bca2ee98a8c0d859db46.webp")], [30539, new o("小鹿包","爱心满满小鹿包，来一口！",1,100,"https://s1.hdslb.com/bfs/live/4f7bbcb4d5d6c9b91bc467f2a989622d1a0eda2c.png","https://i0.hdslb.com/bfs/live/4f7bbcb4d5d6c9b91bc467f2a989622d1a0eda2c.png","https://i0.hdslb.com/bfs/live/9956369da838a89e9bd209e125cabcdeecd58bef.gif","https://i0.hdslb.com/bfs/live/7aa8b8562e38340d7634cc58c4190976fa4d091b.webp")], [30403, new o("猫爪软糖","",-1,0,"https://s1.hdslb.com/bfs/live/7ad2c73450f7c47eb1eb4532907a3e17b2325548.png","https://i0.hdslb.com/bfs/live/1e58d0a9446981aac325634b0a2b59fa30323224.png","https://i0.hdslb.com/bfs/live/12f6deae813aa684ca8aad655d34ca943ea86fd0.gif","https://i0.hdslb.com/bfs/live/faa5d9b6b77784c62dd774ce0042277cea06b02a.webp")], [30609, new o("老罗秘制鸭腿","来一口鸭腿 ,肉的一批同时伤害还高！",1,20,"https://s1.hdslb.com/bfs/live/cc817af4eb181d79abac6a0b752ee697d2158f40.png","https://i0.hdslb.com/bfs/live/8b7cdefec6105b28c03722e4b2bd3167c928569f.png","https://i0.hdslb.com/bfs/live/ad2a2e32295fb0c9ecee2994fcf9fd1cf655aea6.gif","https://i0.hdslb.com/bfs/live/54c1864f4c1764ca8ca01836dc192dd22c024377.webp")], [30606, new o("泡泡机","粉丝勋章10级可解锁泡泡机购买资格哦～",1,50,"https://s1.hdslb.com/bfs/live/03f77460f808e33bf3564b1092e261a00b37b4e2.png","https://i0.hdslb.com/bfs/live/348cb67166e96a12294c71afb805fa0028f2298a.png","https://i0.hdslb.com/bfs/live/3a41003ad27f25b19a5233f5f94a1a119b4e0730.gif","https://i0.hdslb.com/bfs/live/412f3820c32233fb69293f2f1185fe742918c842.webp")], [30703, new o("我来CARRY","全为更高境界",1,10,"https://s1.hdslb.com/bfs/live/4135f117b7c464223f294196289ca56c162bba76.png","https://i0.hdslb.com/bfs/live/33dc10735be796cd17e31fe8411e65363fdcc131.png","https://i0.hdslb.com/bfs/live/2695c233d3cc4861cd24601b8eb63cc991de42ce.gif","https://i0.hdslb.com/bfs/live/fda73f1e90421caea0e287bd224f19c6b17d120e.webp")], [31310, new o("月球漫步","可在BLS春季赛中，为主播增加2倍闪耀值",1,13140,"https://s1.hdslb.com/bfs/live/596ef0137c2ae9fa01522a2b62d5a8c06d418e8e.png","https://i0.hdslb.com/bfs/live/596ef0137c2ae9fa01522a2b62d5a8c06d418e8e.png","https://i0.hdslb.com/bfs/live/40db080a8db98f091268c0549431efad3f9c28a2.gif","https://i0.hdslb.com/bfs/live/bc926307bfee8ec5f15ecb8f7a4e895165a90e39.webp")], [31289, new o("龙虎江湖","虎超龙骧，千门开锁万灯明",0,2e7,"https://s1.hdslb.com/bfs/live/48c3520695c3bd0b7e641f4a31d1db2a4c45776a.png","https://i0.hdslb.com/bfs/live/e40910bce0c3046e97154a72d6c87b140536159e.png","https://i0.hdslb.com/bfs/live/ad9c17081d649ebff4ac93baac066382e4330282.gif","https://i0.hdslb.com/bfs/live/8840590415f515223b594bd769608a8cbf9a79ac.webp")], [30105, new o("雪球","白绒绒的雪球",1,10,"https://s1.hdslb.com/bfs/live/b591dadd07c1325da612f5472ffeff4215058808.png","https://i0.hdslb.com/bfs/live/164cb913fcb3c89482e84c3ad9c60f658e698776.png","https://i0.hdslb.com/bfs/live/6509fb52b67c42c455aa2ba4e027e8ffac0e07fe.gif","https://i0.hdslb.com/bfs/live/7f2f30c38265eb16b599aaf805c562e2e8c17dc7.webp")], [31126, new o("好运雪球","打雪仗咯",1,10,"https://s1.hdslb.com/bfs/live/b591dadd07c1325da612f5472ffeff4215058808.png","https://i0.hdslb.com/bfs/live/164cb913fcb3c89482e84c3ad9c60f658e698776.png","https://i0.hdslb.com/bfs/live/6509fb52b67c42c455aa2ba4e027e8ffac0e07fe.gif","https://i0.hdslb.com/bfs/live/7f2f30c38265eb16b599aaf805c562e2e8c17dc7.webp")], [30081, new o("积分加成卡","超稀有，使用后1分钟内当前主播获得的周星积分*120%",-1,0,"https://s1.hdslb.com/bfs/live/408dfd298cb015c696e714a6da977c100ee652bb.png","https://i0.hdslb.com/bfs/live/26e144dab4c822fb7ebcc6ba9909c29e40071c33.png","https://i0.hdslb.com/bfs/live/f1f1c5f49a3561b28b85304ceaed678a14dad39a.gif","https://i0.hdslb.com/bfs/live/5d0cf0fac486b38adb1cbefd0bfa90c0a5cc7c85.webp")], [30447, new o("提莫比心","比个小心心送给你~",1,100,"https://s1.hdslb.com/bfs/live/83bfcf28369eeb574a85b5c715b225adf67985df.png","https://i0.hdslb.com/bfs/live/83bfcf28369eeb574a85b5c715b225adf67985df.png","https://i0.hdslb.com/bfs/live/a1f1105471142733a87cae6162098c1e45a19d08.gif","https://i0.hdslb.com/bfs/live/1a554c5466b88a97f311cca4692bd75a4d99b7b7.webp")], [31115, new o("鸿运小电视","据说加装鸿运系统之后，投喂能带来好运哦~",1,12450,"https://s1.hdslb.com/bfs/live/037ff1f5dbf1cb996a39cedc8b67fcdb04b00cdc.png","https://i0.hdslb.com/bfs/live/b103cd065c954453f9d7e45f40e5e95f09b0b868.png","https://i0.hdslb.com/bfs/live/2b6e17d10c09072c2007ed462e4d3257e99481cc.gif","https://i0.hdslb.com/bfs/live/5a02f041d03912d589b8abba6b8680c6b52bc09b.webp")], [30035, new o("任意门","",0,1,"https://s1.hdslb.com/bfs/live/28c2f3dd68170391d173ca2efd02bdabc917df26.png","https://i0.hdslb.com/bfs/live/7ddc8f5abc1d821740630a2909ce6588e5669cf1.png","https://i0.hdslb.com/bfs/live/d733dc5e229e71eaa01615a08d323c2152e578a2.gif","https://i0.hdslb.com/bfs/live/a3e164513bd030f1113a8fbe1165454880c3ee4c.webp")], [30619, new o("老师喝水","老师辛苦啦，请喝口水！",1,10,"https://s1.hdslb.com/bfs/live/05d3c8314f010008291678ac6ac080cadba32c0e.png","https://i0.hdslb.com/bfs/live/05d3c8314f010008291678ac6ac080cadba32c0e.png","https://i0.hdslb.com/bfs/live/15814b32ac04cea16f216fa02bb00d6c3c5ec50b.gif","https://i0.hdslb.com/bfs/live/7a584597233bd72f102893647cc5532d3e712a1d.webp")], [31386, new o("樱花","如樱花般美好的你",1,1,"https://s1.hdslb.com/bfs/live/5649026b0dd6d8f328d51e16b702c7951410018e.png","https://i0.hdslb.com/bfs/live/b7aace0b26a6ea87074fab27194119fb4a347c43.png","https://i0.hdslb.com/bfs/live/8732cd80b8df1eb559f2d3e959a8c1eb15415719.gif","https://i0.hdslb.com/bfs/live/38ec3df0629d55cd7b46c6ea8daa7d4d96ca56ad.webp")], [30709, new o("巴掌","影后的巴掌",1,10,"https://s1.hdslb.com/bfs/live/9e1b39bdc0865d4b2878fa93d2df62b1843d3f77.png","https://i0.hdslb.com/bfs/live/9e1b39bdc0865d4b2878fa93d2df62b1843d3f77.png","https://i0.hdslb.com/bfs/live/1384c56c1dc653d373402f5aac9c673d62cd2104.gif","https://i0.hdslb.com/bfs/live/6d40e110cf19d57d628391ee164b91f640282550.webp")], [30675, new o("下饭","这波操作下饭饭",1,99,"https://s1.hdslb.com/bfs/live/8ba04b53487581cda0c25440ca5d3b300c2e5ee2.png","https://i0.hdslb.com/bfs/live/5816afa4033bef63f2f91ce21ebd2f6c3595680a.png","https://i0.hdslb.com/bfs/live/36a343d9974e8f0ad7427d88473f208ba237e125.gif","https://i0.hdslb.com/bfs/live/9b1f21b1e9b2bcabfc8e9e62df06382c5d040bf9.webp")], [30072, new o("疯狂打call","为TA疯狂打call！",1,520,"https://s1.hdslb.com/bfs/live/4fdff86d1f0c1091ee9b1406790699c226040f8b.png","https://i0.hdslb.com/bfs/live/abe8ffa8c5d74f885779397e9e6c334609e77ed6.png","https://i0.hdslb.com/bfs/live/0cad65e5f1f86a6899f638d6eedeaa2917434d2a.gif","https://i0.hdslb.com/bfs/live/ac3528cbc8a341e958e6d86f3e815fbfcfb6d657.webp")], [20002, new o("flag","打完这个boss我就回家结——",1,2,"https://s1.hdslb.com/bfs/live/a4f02bd9a95a71d0ee5b3d77e1bb4000de75093a.png","https://i0.hdslb.com/bfs/live/01e91aec5888b90a7179f3d841d337bf8db8af88.png","https://i0.hdslb.com/bfs/live/17c2c0d0aabf4db6698debf0cf14d031baecb7fe.gif","https://i0.hdslb.com/bfs/live/b7d428c3a5dc117412c6fa2cc389c06c51f5cd7a.webp")], [30281, new o("心动","",-1,0,"https://s1.hdslb.com/bfs/live/58c0930eebcc977c0008980add17b3fcdf71a4f6.png","https://i0.hdslb.com/bfs/live/58c0930eebcc977c0008980add17b3fcdf71a4f6.png","https://i0.hdslb.com/bfs/live/67e0f49dc3cf697691cd7ed1f661eac6f1ecabb9.gif","https://i0.hdslb.com/bfs/live/2cadd30c10be70272d10561d7efaec24636fc3f5.webp")], [30278, new o("邂逅","",-1,0,"https://s1.hdslb.com/bfs/live/58c0930eebcc977c0008980add17b3fcdf71a4f6.png","https://i0.hdslb.com/bfs/live/58c0930eebcc977c0008980add17b3fcdf71a4f6.png","https://i0.hdslb.com/bfs/live/67e0f49dc3cf697691cd7ed1f661eac6f1ecabb9.gif","https://i0.hdslb.com/bfs/live/2cadd30c10be70272d10561d7efaec24636fc3f5.webp")], [30446, new o("欧气石头","让我变欧吧！",1,10,"https://s1.hdslb.com/bfs/live/d2fe44c4adb2c809fef2e3efb05cfa3b4c6679b9.png","https://i0.hdslb.com/bfs/live/92d113b7bdef0b882dbbae92772fcb063d068975.png","https://i0.hdslb.com/bfs/live/dd60298e4b210fa3f460858bc3dd5edaf5b974d9.gif","https://i0.hdslb.com/bfs/live/e2f7321ec1f2067a2c760e61859b6b9955441580.webp")], [31052, new o("撒花","wowwwwwwwwww",1,660,"https://s1.hdslb.com/bfs/live/c7a5d0433c2956f9bcba0c4218a1784f4607fe11.png","https://i0.hdslb.com/bfs/live/be28c0f10fde5e18c8940d61b8e2f819e22d87a9.png","https://i0.hdslb.com/bfs/live/c0b7ad940860b1e7b2ba28a3f50836c759f3f577.gif","https://i0.hdslb.com/bfs/live/9e9191dbfc72d26ed78e3fafe3fa10c14e2f19b8.webp")], [30240, new o("时光沙漏","叮！让时间回归自然....",-1,0,"https://s1.hdslb.com/bfs/live/0898535576c195dd8b0c43c52a77276efb2a9aa1.png","https://i0.hdslb.com/bfs/live/0898535576c195dd8b0c43c52a77276efb2a9aa1.png","https://i0.hdslb.com/bfs/live/d4c3f9b67fe4d0497b71b2137345a0b7897c25a9.gif","https://i0.hdslb.com/bfs/live/0f791976eb8c6bead9347ff6d0bcb25528d2ad08.webp")], [30800, new o("平安喜乐","",-1,0,"https://s1.hdslb.com/bfs/live/61b8fe9500459e73bb0c8a8dd29afc85983a61ea.png","https://i0.hdslb.com/bfs/live/61b8fe9500459e73bb0c8a8dd29afc85983a61ea.png","https://i0.hdslb.com/bfs/live/48c979d6b31ed56dabc07b93e71c55399a00e3b2.gif","https://i0.hdslb.com/bfs/live/f455928fafefab32d2140c35f5e12f9753ce96e1.webp")], [30933, new o("12周年马卡龙","bilibili12周年定制礼物～",-1,0,"https://s1.hdslb.com/bfs/live/f23fc552bd3cbc93cd02399d0a3f2c3129fc9fd1.png","https://i0.hdslb.com/bfs/live/f23fc552bd3cbc93cd02399d0a3f2c3129fc9fd1.png","https://i0.hdslb.com/bfs/live/b047ba5277569a43246a022c873d17433fa1fefc.gif","https://i0.hdslb.com/bfs/live/f89d9564d6f542ca57dac4ad22a75f4c736ce214.webp")], [30331, new o("大糕能","",-1,0,"https://s1.hdslb.com/bfs/live/c19d0a779268ef487c7bba9a5c71fdc1f5d2f538.png","https://i0.hdslb.com/bfs/live/c19d0a779268ef487c7bba9a5c71fdc1f5d2f538.png","https://i0.hdslb.com/bfs/live/486daee228517667adf315a6f8893fc8d92847fe.gif","https://i0.hdslb.com/bfs/live/10a8295766001abff08eb5bc43b68334e6c81393.webp")], [30846, new o("欧皇","",-1,0,"https://s1.hdslb.com/bfs/live/3af1aeb3f810d4d485bae5a8e683300dafa5212d.png","https://i0.hdslb.com/bfs/live/b3c6caee2066dd29ba575b36a1a7a884bf3b0409.png","https://i0.hdslb.com/bfs/live/a8b7285102c9a0b2556be3efe32d9a0c88f2dcff.gif","https://i0.hdslb.com/bfs/live/2199047f15f8b04e4455ddb52950124193216adf.webp")], [30280, new o("絮语","",-1,0,"https://s1.hdslb.com/bfs/live/58c0930eebcc977c0008980add17b3fcdf71a4f6.png","https://i0.hdslb.com/bfs/live/58c0930eebcc977c0008980add17b3fcdf71a4f6.png","https://i0.hdslb.com/bfs/live/67e0f49dc3cf697691cd7ed1f661eac6f1ecabb9.gif","https://i0.hdslb.com/bfs/live/2cadd30c10be70272d10561d7efaec24636fc3f5.webp")], [30791, new o("来玩水呀","来玩水呀姐妹们~",1,20,"https://s1.hdslb.com/bfs/live/6cea6241a52da2aa0fdf24defa4b3b811ea43d08.png","https://i0.hdslb.com/bfs/live/6cea6241a52da2aa0fdf24defa4b3b811ea43d08.png","https://i0.hdslb.com/bfs/live/507dde9815e19713fc03b3a0cb6aab75bdfc7ed5.gif","https://i0.hdslb.com/bfs/live/8ef1831d7dc19e490b421c4b40bbdcd298d423be.webp")], [30702, new o("一桶好运","中秋国庆，给你满满一桶好运",1,10,"https://s1.hdslb.com/bfs/live/2b9d1d606d7ac4919bf66ef5954377ab49f13ef5.png","https://i0.hdslb.com/bfs/live/2b9d1d606d7ac4919bf66ef5954377ab49f13ef5.png","https://i0.hdslb.com/bfs/live/ee1ed85b0101e62e5af4186c859a1e253915fb17.gif","https://i0.hdslb.com/bfs/live/f1a46f4f7e6ff7940b143d8ed14112df72228c73.webp")], [30801, new o("牛转乾坤","",-1,0,"https://s1.hdslb.com/bfs/live/61b8fe9500459e73bb0c8a8dd29afc85983a61ea.png","https://i0.hdslb.com/bfs/live/61b8fe9500459e73bb0c8a8dd29afc85983a61ea.png","https://i0.hdslb.com/bfs/live/18b6dddab7f273fe54e6b38cda9e12a51ab4569d.gif","https://i0.hdslb.com/bfs/live/35c428bf0e3de2b538455fabadf44e232a1650b9.webp")], [31370, new o("踏青日记","可在樱花大作战中，为主播增加1200闪耀值",1,400,"https://s1.hdslb.com/bfs/live/28e651ae1da4967f07797d1120209ecf80fe3e15.png","https://i0.hdslb.com/bfs/live/7b076b7e88165599b760aa80e1a0139dbb72e97c.png","https://i0.hdslb.com/bfs/live/d9393a859dd772c1b6e2d9978c7b682f4e7f6c44.gif","https://i0.hdslb.com/bfs/live/a92d3664cfc7e4611861e85e7cc13c8a11a729d8.webp")], [30589, new o("花生米","可爱小米，在线送花~",1,10,"https://s1.hdslb.com/bfs/live/9d468c53ad012a95260e4e5eec2aa0580ba09882.png","https://i0.hdslb.com/bfs/live/9d468c53ad012a95260e4e5eec2aa0580ba09882.png","https://i0.hdslb.com/bfs/live/cec50d6729462d00b8d3dfa56b0b3cb5a9e9e8e1.gif","https://i0.hdslb.com/bfs/live/2ac8eca9fc3ba2a4eef2be6a289923318a1dec83.webp")], [30299, new o("传送门","",-1,0,"https://s1.hdslb.com/bfs/live/625434e4a2fbf0758397f47f4fdea678faeb80a0.png","https://i0.hdslb.com/bfs/live/625434e4a2fbf0758397f47f4fdea678faeb80a0.png","https://i0.hdslb.com/bfs/live/7c6097354c4d46050652d3046c5462f50a8489ee.gif","https://i0.hdslb.com/bfs/live/88f0e86879f825a09f127fe3d3dd953120d7b6be.webp")], [30918, new o("觉醒宝石","觉醒吧，战斗之魂！",1,1e3,"https://s1.hdslb.com/bfs/live/86dd14b83c1b07611bada8de4a183ddfa8a829fa.png","https://i0.hdslb.com/bfs/live/bef8082f31e04d2cf56ba1e9d349348715318ab0.png","https://i0.hdslb.com/bfs/live/68b7c43df1244815bfe463036546b65443214daf.gif","https://i0.hdslb.com/bfs/live/7329ff08acac5878fbd08abc35e888fd0e6c125a.webp")], [30640, new o("旋风游侠","泛式专属礼物 其实你也很想说喜欢我的对吧？？ ",1,10,"https://s1.hdslb.com/bfs/live/e371fead2dbdb00abc17cd02ca8a929b08a602c2.png","https://i0.hdslb.com/bfs/live/40206592f2846cdb57beb1ec453a5932fd666f4a.png","https://i0.hdslb.com/bfs/live/5e559a8bdd3b8d8c22b17668e177f533d2ecb4c3.gif","https://i0.hdslb.com/bfs/live/aa2bd5f756768f97113ef621cb4a16c52e0a2d3c.webp")], [31522, new o("充能炮","BLS夏季赛活动道具，可为主播增加200闪耀值",1,100,"https://s1.hdslb.com/bfs/live/1364c63088b4eb5e31d575e5b4095c904e48f017.png","https://i0.hdslb.com/bfs/live/7ddc8f5abc1d821740630a2909ce6588e5669cf1.png","https://i0.hdslb.com/bfs/live/d733dc5e229e71eaa01615a08d323c2152e578a2.gif","https://i0.hdslb.com/bfs/live/bdd67e50e04fb4668e77294ace37ea59524ddb8c.webp")], [30567, new o("LEX充电宝","为你充电电！",1,10,"https://s1.hdslb.com/bfs/live/19f5782bdda8c539d2cc94a10a07843cace5426a.png","https://i0.hdslb.com/bfs/live/19f5782bdda8c539d2cc94a10a07843cace5426a.png","https://i0.hdslb.com/bfs/live/873e3179bff81adf6d1a058c497f6ab5d80332ca.gif","https://i0.hdslb.com/bfs/live/518fbfd97fdfefed5e3c917f734569f7af68583a.webp")], [30614, new o("海岛游船","梦幻沙滩，碧海蓝天，轻舟海上漂，鱼儿水中游~",1,5200,"https://s1.hdslb.com/bfs/live/d4c14530c667dc3133b92acfd9eb319529227b6b.png","https://i0.hdslb.com/bfs/live/164b9244d3a31652e86f5e8f418448f98ce15c1a.png","https://i0.hdslb.com/bfs/live/a9497ddd344712964e1bcd0809c15a343c6a4bd6.gif","https://i0.hdslb.com/bfs/live/c1d22526a7b9b481af105ef1486991ee8bf6e728.webp")], [30091, new o("变身话筒","月棱镜，威力变身！",1,20,"https://s1.hdslb.com/bfs/live/786d8387eda3f6a50342cb0467fcd508a5d58fad.png","https://i0.hdslb.com/bfs/live/786d8387eda3f6a50342cb0467fcd508a5d58fad.png","https://i0.hdslb.com/bfs/live/9faf7beb165be56a5aeb83f11d8f98394f2c4ee3.gif","https://i0.hdslb.com/bfs/live/279df14a67fcac363ce398b436a074f4e34ec4bc.webp")], [31313, new o("喵大人","《元气赏》活动道具",1,520,"https://s1.hdslb.com/bfs/live/545f7b3e99bab963af75ec89588c3ebe62122598.png","https://i0.hdslb.com/bfs/live/545f7b3e99bab963af75ec89588c3ebe62122598.png","https://i0.hdslb.com/bfs/live/ff753ca6fe4759db5c84d2bae8abb25d904d614d.gif","https://i0.hdslb.com/bfs/live/569fc8af78055d75a017da0c3991dc002895b8ab.webp")], [30683, new o("只有你会","只有你会！",1,10,"https://s1.hdslb.com/bfs/live/b4d19f7a0695117d969b18755f280cdc90ec3fda.png","https://i0.hdslb.com/bfs/live/3197b0d25cd185220379be4189b26851d80e0335.png","https://i0.hdslb.com/bfs/live/9842047dc92efdc193c7e0b4508f97cb6ce6b87c.gif","https://i0.hdslb.com/bfs/live/9c236771ebf310c7026a113b9b360e9d1ebdbee7.webp")], [30090, new o("么么哒","亲一口就跑~",1,20,"https://s1.hdslb.com/bfs/live/209e914b602b1accb6083c8a4f38297d8eff46dc.png","https://i0.hdslb.com/bfs/live/ab4eb5d61da0fdeebee7208e09dd76df8f09f246.png","https://i0.hdslb.com/bfs/live/c2099fdc983f1f7853d45644ccfa486e2a3a6e2c.gif","https://i0.hdslb.com/bfs/live/f754a632dbd7213926c5ea4477d6a62594131f2d.webp")], [30046, new o("打榜","☆为你爆灯！日夜不分！",1,20,"https://s1.hdslb.com/bfs/live/5229d18f65faca325a6e9cc26277624df9c8878a.png","https://i0.hdslb.com/bfs/live/5229d18f65faca325a6e9cc26277624df9c8878a.png","https://i0.hdslb.com/bfs/live/6daf9c9f30b6270dd32cb6a69013bc399d4f6551.gif","https://i0.hdslb.com/bfs/live/7ce695a583ec9462683feac61b6acdcb71a00758.webp")], [30014, new o("超级星","",-1,0,"https://s1.hdslb.com/bfs/live/5d64467d3211dbe00c67698d8a2b7bea3ab3723c.png","https://i0.hdslb.com/bfs/live/5d64467d3211dbe00c67698d8a2b7bea3ab3723c.png","https://i0.hdslb.com/bfs/live/69bb2eb657c32e42a38e3d1e4658561b12d9d1ff.gif","https://i0.hdslb.com/bfs/live/e1b7e47fdf3fc40fcf7c1c5eed99a62b7afd74b2.webp")], [30469, new o("福至","",-1,0,"https://s1.hdslb.com/bfs/live/8a5a9bde41cf49cd142f48e84b948c22fde83a11.png","https://i0.hdslb.com/bfs/live/8a5a9bde41cf49cd142f48e84b948c22fde83a11.png","https://i0.hdslb.com/bfs/live/fb52dc328b242c24352a0c36f13f658a7379dad4.gif","https://i0.hdslb.com/bfs/live/ca2ccc121b99ceca9e855834693502da9c2c103e.webp")], [31213, new o("这个好诶","都 想 要 ",1,10,"https://s1.hdslb.com/bfs/live/bb6c11dcc365b3d8287569f08b8b0d0f2e1a3ef8.png","https://i0.hdslb.com/bfs/live/bb6c11dcc365b3d8287569f08b8b0d0f2e1a3ef8.png","https://i0.hdslb.com/bfs/live/574f5a36fe371c6e80fbcb1522fc899977007b73.gif","https://i0.hdslb.com/bfs/live/f3057d838ff4c2f7b5d930db9c03ed6513aaf36c.webp")], [30804, new o("欧气满满","",-1,0,"https://s1.hdslb.com/bfs/live/61b8fe9500459e73bb0c8a8dd29afc85983a61ea.png","https://i0.hdslb.com/bfs/live/61b8fe9500459e73bb0c8a8dd29afc85983a61ea.png","https://i0.hdslb.com/bfs/live/0b85d85f0492c1f01efea25c7c2d7f9232613672.gif","https://i0.hdslb.com/bfs/live/f81e55f443c3c2174974b1d05f395dd41bfe664b.webp")], [30323, new o("B坷垃","",0,1,"https://s1.hdslb.com/bfs/live/6450000dc1f96e3a3068fca7622827d481ff6029.png","https://i0.hdslb.com/bfs/live/6450000dc1f96e3a3068fca7622827d481ff6029.png","https://i0.hdslb.com/bfs/live/9e7d50d7feb63aa3e9f223dbf9b6d0f165cc0b32.gif","https://i0.hdslb.com/bfs/live/553665c53c2d080b771badba55469473db90dc59.webp")], [30608, new o("奶粉钱","奶奶孩子吧~",1,20,"https://s1.hdslb.com/bfs/live/a7ef8654bdfc1ed7f55e890c3b1abf5d620607c9.png","https://i0.hdslb.com/bfs/live/a7ef8654bdfc1ed7f55e890c3b1abf5d620607c9.png","https://i0.hdslb.com/bfs/live/41dc2a91bf9c8995310eb810e73b422b0393f8b7.gif","https://i0.hdslb.com/bfs/live/8c1ca622177e63be241487f7b82138630af76d01.webp")], [30321, new o("漂亮！","漂亮！！为战队加油！！",1,10,"https://s1.hdslb.com/bfs/live/7165f7fdf430aea3ab1301ef02556973138cebd3.png","https://i0.hdslb.com/bfs/live/df67ae7e2343c790ca4a30ed39716629fd70ca16.png","https://i0.hdslb.com/bfs/live/ff83370697ac5b43ea47f491d608eb79c1f7f4d5.gif","https://i0.hdslb.com/bfs/live/959cb9544db392b314bc709da987d4db3fe5c444.webp")], [30466, new o("安康","",-1,0,"https://s1.hdslb.com/bfs/live/8a5a9bde41cf49cd142f48e84b948c22fde83a11.png","https://i0.hdslb.com/bfs/live/8a5a9bde41cf49cd142f48e84b948c22fde83a11.png","https://i0.hdslb.com/bfs/live/fb52dc328b242c24352a0c36f13f658a7379dad4.gif","https://i0.hdslb.com/bfs/live/ca2ccc121b99ceca9e855834693502da9c2c103e.webp")], [30117, new o("发牌姬","朋友，听说你在做大牌？",1,1,"https://s1.hdslb.com/bfs/live/c05b3020550651c95a359788db0d8d6d6bfa2519.png","https://i0.hdslb.com/bfs/live/ca76f022a20adbac6dac7af57e2004862f9f4721.png","https://i0.hdslb.com/bfs/live/c830d65644d0ee23805216c999112228f5be1049.gif","https://i0.hdslb.com/bfs/live/8b59747fc8da594d1ce178e5900e8411849b15ae.webp")], [30621, new o("法治追光者","和罗老师一起，追寻法治之光！",1,1e3,"https://s1.hdslb.com/bfs/live/b81f822748b609a68725442c246c2340de5f6c71.png","https://i0.hdslb.com/bfs/live/b81f822748b609a68725442c246c2340de5f6c71.png","https://i0.hdslb.com/bfs/live/0940d1eb32223d9da7116c706daf90742f62feff.gif","https://i0.hdslb.com/bfs/live/1c655b0f22fd87d008fd97a22b7a755a391cef01.webp")], [30047, new o("友谊的小船","友谊的小船说上就上！",1,52,"https://s1.hdslb.com/bfs/live/b33c94c51b669bd88f811ecf5f4e34a1db22a648.png","https://i0.hdslb.com/bfs/live/96904a33cd9968c8681fe9f85c912e52029bd6c7.png","https://i0.hdslb.com/bfs/live/b7f50f423a594aa722cb640320eaf43d8655c8d9.gif","https://i0.hdslb.com/bfs/live/24a007b0299c5e7f652d9eec0e0a51afd5a652f3.webp")], [30295, new o("jinbi","送你一朵小花花，一起过夏天吧！",0,100,"https://s1.hdslb.com/bfs/live/27f5f308033897e727073b35967d634a9703cc3b.png","https://i0.hdslb.com/bfs/live/27f5f308033897e727073b35967d634a9703cc3b.png","https://i0.hdslb.com/bfs/live/22604178977903dbf46c8564cf293bcbf61f86a8.gif","https://i0.hdslb.com/bfs/live/37b54d1b1b28d4ef9cfd65901129a597eff3b96a.webp")], [30513, new o("抖鱼翅","别发呆！抖抖鱼翅！",1,140,"https://s1.hdslb.com/bfs/live/631840c6b396a32f1d5ee20feff74fe6dacd07a4.png","https://i0.hdslb.com/bfs/live/04045f225d65d168ced15d56e5cbe1c76b9bcf6e.png","https://i0.hdslb.com/bfs/live/b766f68b73f25e7d9ec24d39e26f5566c3e87348.gif","https://i0.hdslb.com/bfs/live/7141568845aa45f011680a12fbec09be7db15a7b.webp")], [30570, new o("心跳回忆","属于你和我的独家记忆…",-1,0,"https://s1.hdslb.com/bfs/live/e0420cd92e8ed0cba893d88044b505a899678d25.png","https://i0.hdslb.com/bfs/live/c0909fbacd915d3674bdd5601a533670ade4d9f7.png","https://i0.hdslb.com/bfs/live/c8c1e3c88defb252b45834905b9883dfa5ef3742.gif","https://i0.hdslb.com/bfs/live/adf3e5da5d32954bd5be258d9a62120cbebdcedf.webp")], [30065, new o("狂欢之椅","快拆掉这个狂欢之椅！",1,20,"https://s1.hdslb.com/bfs/live/2eeb473c11dd641cd9c40a91e2a23cac63cf6db6.png","https://i0.hdslb.com/bfs/live/123b6a4ece91ac62f8e9e65f8da57067e6c9b449.png","https://i0.hdslb.com/bfs/live/b7652ed5c53d35b7318fc7db73671cf7277eaa12.gif","https://i0.hdslb.com/bfs/live/5285a531e78d2d612f4697e4fa3d2f6314bddd10.webp")], [30887, new o("爆米花","",0,1e5,"https://s1.hdslb.com/bfs/live/bc45215dc69da74096a86b57f191a38d8dc7719e.png","https://i0.hdslb.com/bfs/live/dac6fcca58fa707404c0be5ad2d30ef570826ced.png","https://i0.hdslb.com/bfs/live/e17aadd50219c3ffcfcfbee8a97d2d0bb38c2635.gif","https://i0.hdslb.com/bfs/live/755405b32903c4cf4e2d4075a357a22e6c593087.webp")], [30875, new o("喵鲜包","痒局长定制宠物，dio猫！",1,20,"https://s1.hdslb.com/bfs/live/184b1df8fb9a2a27d5f8f06af2cbf2ac23ebba15.png","https://i0.hdslb.com/bfs/live/184b1df8fb9a2a27d5f8f06af2cbf2ac23ebba15.png","https://i0.hdslb.com/bfs/live/0154430ef66572a6c120f8ad2f025ac114bbe283.gif","https://i0.hdslb.com/bfs/live/4b8662c1e2fa68e96e22288f390b7c546c8d25c2.webp")], [30711, new o("翅桶","恰KFC翅桶，这波起飞！",1,10,"https://s1.hdslb.com/bfs/live/41e85789cf6d8059493bcc8ad5626436b467646d.png","https://i0.hdslb.com/bfs/live/41e85789cf6d8059493bcc8ad5626436b467646d.png","https://i0.hdslb.com/bfs/live/61d6aebb9ce8ba2460252659fdd502dfa3145e0a.gif","https://i0.hdslb.com/bfs/live/84578628ee0163e2289029cd97881308f8c3531e.webp")], [30002, new o("疯狂应援","",1,100,"https://s1.hdslb.com/bfs/live/8268cb362534123e1f5f5650accb3c3256b94db5.png","https://i0.hdslb.com/bfs/live/347596a89910a0e613cb9cefe6bf20a0ec4b315c.png","https://i0.hdslb.com/bfs/live/061393d5a86eeb4c1eb0c25d5cd86d6a003aa377.gif","https://i0.hdslb.com/bfs/live/7e013ccf09590ee03c55cb0d929337aae3662fff.webp")], [30248, new o("绊爱生日蛋糕","生日快乐~！",0,1e5,"https://s1.hdslb.com/bfs/live/a8251825e2a1b6cdea980c5ed12c1ee0dd11a29f.png","https://i0.hdslb.com/bfs/live/a8251825e2a1b6cdea980c5ed12c1ee0dd11a29f.png","https://i0.hdslb.com/bfs/live/9458020df41d706e8ea014365858109610d7058e.gif","https://i0.hdslb.com/bfs/live/29d542ae9396dc570c46bb953b49e9c14fb4fe62.webp")], [30813, new o("平安如意","财源滚滚，好运连连",0,2e7,"https://s1.hdslb.com/bfs/live/cc49667d0b6fbf556fe8e49d5f8a705793e03df7.png","https://i0.hdslb.com/bfs/live/f8f56679d6993eea4c88f30eeed9448d37367a5c.png","https://i0.hdslb.com/bfs/live/64acecb5093081d171a61efafe905ba9a8dab4eb.gif","https://i0.hdslb.com/bfs/live/6d800ebf60f1914daf67d50b21fd51cab7e4400a.webp")], [31168, new o("星际漫步","2233和小电视驾驶着探索者号飞船，在太空经历了一场紧张刺激又绚丽多彩的太空冒险",1,36660,"https://s1.hdslb.com/bfs/live/df4c6a4c4de57db56c012e1ea24423f3ac90b3dc.png","https://i0.hdslb.com/bfs/live/ec4c6a541717734bd338f6add77e905b3faa80dc.png","https://i0.hdslb.com/bfs/live/9043f0b254a3dc8a48166c5dc6fc2fab5edfe292.gif","https://i0.hdslb.com/bfs/live/1cca77e8b74682bd8cd2eee460f220ce09aff8ca.webp")], [30554, new o("战斧牛排","战斧牛排！",1,10,"https://s1.hdslb.com/bfs/live/3052d7c63ab4cd00604df6d930c8b39b26ad64fe.png","https://i0.hdslb.com/bfs/live/f86125619b3802b4999b02bcd93b6cffa94cc034.png","https://i0.hdslb.com/bfs/live/0a2c5b1522f0bea75d99892c37ce30fc80d17c40.gif","https://i0.hdslb.com/bfs/live/2c7bf3dc8ae6fd6077d464b41a91331cbc8ea4aa.webp")], [30153, new o("棋开得胜","这，就是棋技！",1,10,"https://s1.hdslb.com/bfs/live/8cf841fe98d6775c66040fbdb06f60228254f2bd.png","https://i0.hdslb.com/bfs/live/30cc78998d48ae06dbe4b15d6c115833aba254f1.png","https://i0.hdslb.com/bfs/live/6a95193d5b092b56a4babd7122065eeb5be99e8e.gif","https://i0.hdslb.com/bfs/live/f1dc9dd30e8ffafe752cfaaf0f9b4572b27650e3.webp")], [31378, new o("樱花列车","可在樱花大作战中，为主播增加4000闪耀值",1,1e3,"https://s1.hdslb.com/bfs/live/11009435e0d45356988a56cfb0094a7a86195e0c.png","https://i0.hdslb.com/bfs/live/11009435e0d45356988a56cfb0094a7a86195e0c.png","https://i0.hdslb.com/bfs/live/10a4bf3338d890ddfa4f7293a912550c2884cc03.gif","https://i0.hdslb.com/bfs/live/89a59cfde29f2d211abcaac30ee9f8ff72fc6fc3.webp")], [1, new o("辣条","辣条是流行于哔哩哔哩的坊间美食，可以直接食用，也能用来打赌。",0,100,"https://s1.hdslb.com/bfs/live/d57afb7c5596359970eb430655c6aef501a268ab.png","https://i0.hdslb.com/bfs/live/d57afb7c5596359970eb430655c6aef501a268ab.png","https://i0.hdslb.com/bfs/live/d40ff17d533047cbb9b2bed4feb927cb0e71901c.gif","https://i0.hdslb.com/bfs/live/07d4dad91d7f68d92cb6a324ad9395ae2adefd47.webp")], [30865, new o("樱花雨","想要带你去看一场樱花雨",-1,0,"https://s1.hdslb.com/bfs/live/e45a485348ea0076c7c1b99c15e5f861f4c90178.png","https://i0.hdslb.com/bfs/live/6a0631e85bd2d5a054c976aaf1bc075ad68f7696.png","https://i0.hdslb.com/bfs/live/ded36afd84523bcdee17fa27dd025c1c149b4eef.gif","https://i0.hdslb.com/bfs/live/393c336d29565d141a06235a65c9390bb7bd06af.webp")], [31129, new o("元气福袋","开袋可得一个礼物",1,300,"https://s1.hdslb.com/bfs/live/92a2d51ec3e375bc51400121fb755fcda3c979d5.png","https://i0.hdslb.com/bfs/live/13e01391f616e6146a304888ca31c6f93c26bd09.png","https://i0.hdslb.com/bfs/live/e9e82a56ab3db0cc7d852b32c7e244bbac629a7e.gif","https://i0.hdslb.com/bfs/live/46512700409d2741507ee69749c7ebf91f74406b.webp")], [30244, new o("晃悠悠","pyokopyko~",1,1,"https://s1.hdslb.com/bfs/live/1de0f6c3e9040504e54b7c26ed8733b0e5105588.png","https://i0.hdslb.com/bfs/live/1de0f6c3e9040504e54b7c26ed8733b0e5105588.png","https://i0.hdslb.com/bfs/live/f98924e254a5637824cfefce9d684a08ac63f26d.gif","https://i0.hdslb.com/bfs/live/7c2cd61513fdbc988771bd95b6026268fe809c7e.webp")], [31008, new o("你最棒","加油，你就是最棒的！",1,1,"https://s1.hdslb.com/bfs/live/dcf873136bcaabfdd8d19939e85dbba2b4fa274e.png","https://i0.hdslb.com/bfs/live/87edb704c1fc0b82cab17605dbf054312c6cb664.png","https://i0.hdslb.com/bfs/live/49d16f25e534bc06117288463a64cfdb5e203aa8.gif","https://i0.hdslb.com/bfs/live/4decd44025891f487815ad8c6e6f76acb568b40b.webp")], [20012, new o("氪金键盘","氪爆！",1,330,"https://s1.hdslb.com/bfs/live/011d0a9865ab236f8bc3e23e0dad27f309ebaa4d.png","https://i0.hdslb.com/bfs/live/531cac33fed17cb12e98debbe8fff48c848ba061.png","https://i0.hdslb.com/bfs/live/70bdff3d1d4c04616f33a28988871e7a6c650b17.gif","https://i0.hdslb.com/bfs/live/dbb4a28ea0c13bca7add961bec752080ff71939d.webp")], [31153, new o("李哥吃堡","我只吃一口！",1,100,"https://s1.hdslb.com/bfs/live/3dbb3ed6821b752f978f739a6688f38c15c69e9b.png","https://i0.hdslb.com/bfs/live/3dbb3ed6821b752f978f739a6688f38c15c69e9b.png","https://i0.hdslb.com/bfs/live/bfdfbe509d8d1a0d06c6d3ad49ac5d78a3625754.gif","https://i0.hdslb.com/bfs/live/5e1298820c5f2b8d4d128e7663d8161258ea9d17.webp")], [30356, new o("柠檬冰淇淋茶","酸爽中带着一丝苦涩的冰淇淋红茶",1,280,"https://s1.hdslb.com/bfs/live/4825f57ee631ce48ea412e24b44a286409324e8e.png","https://i0.hdslb.com/bfs/live/74dbadd01b70a4e53b1a8e5d5a67adebf39db85d.png","https://i0.hdslb.com/bfs/live/2ca6d5cf505fb2492481e4dfea7f5f9e08dd1627.gif","https://i0.hdslb.com/bfs/live/9bbf2da1b82df20ca11a88444ea007019f4709c8.webp")], [30847, new o("领航者飞船","粉丝勋章36级可解锁领航者飞船购买资格哦~",1,12450,"https://s1.hdslb.com/bfs/live/572c8dfb9ce0e1782b8a8ab88794448819065553.png","https://i0.hdslb.com/bfs/live/572c8dfb9ce0e1782b8a8ab88794448819065553.png","https://i0.hdslb.com/bfs/live/04415b8b8ae1dbf4cc586180c02d414ab54874b3.gif","https://i0.hdslb.com/bfs/live/3ae0aec459c1ff6e2dc82146fb6ac5f730386117.webp")], [30600, new o("柯基","南“柯”一梦闻“基”起舞",1,10,"https://s1.hdslb.com/bfs/live/8be7a64d810b46323dd6307736efd9b6626fb79e.png","https://i0.hdslb.com/bfs/live/8be7a64d810b46323dd6307736efd9b6626fb79e.png","https://i0.hdslb.com/bfs/live/b786a0fb72120824759b76dfa10b3ed525b3399f.gif","https://i0.hdslb.com/bfs/live/513ef2d3d41233969517c51dded6d2cacb73adb3.webp")], [30556, new o("醋溜砖头","醋溜砖头！",1,10,"https://s1.hdslb.com/bfs/live/f8efa4f40951b4a9b643373e1be22326a29eeae9.png","https://i0.hdslb.com/bfs/live/f8efa4f40951b4a9b643373e1be22326a29eeae9.png","https://i0.hdslb.com/bfs/live/24021ca36d7687865c48b649ca4eb0fb2456405f.gif","https://i0.hdslb.com/bfs/live/006f5d1a3e50fa84cd23640cecc03e5e989cff4c.webp")], [31675, new o("航海望远镜","未知的神秘海域，正在等待着你的探索",1,399,"https://s1.hdslb.com/bfs/live/0c944e50367ec5a5d90ba60df4eeefcdeda4e1b9.png","https://i0.hdslb.com/bfs/live/0c944e50367ec5a5d90ba60df4eeefcdeda4e1b9.png","https://i0.hdslb.com/bfs/live/dd4ed6fde6b3a1494e4382e2440c19ad273c7b20.gif","https://i0.hdslb.com/bfs/live/11dd25f4e11e6ddf492c862e31aec4e58488125d.webp")], [31638, new o("乐园冰激淋","咔咔冰爽，邂逅清凉~",-1,0,"https://s1.hdslb.com/bfs/live/ca448aed54050e7f5f80a62a59370d8114760928.png","https://i0.hdslb.com/bfs/live/321e2f92821cd0978c0fc6d81a27998bfe3ebadc.png","https://i0.hdslb.com/bfs/live/0b3477bad6c3eef8a244aa807e1d9dda25c8fe3c.gif","https://i0.hdslb.com/bfs/live/7cd2f8aed24118673116884c38861a36e7588bbb.webp")], [31774, new o("爱的啵啵","小天使之吻",1,199,"https://s1.hdslb.com/bfs/live/c939269850abe4d858d1d8d15d777640f0440afe.png","https://i0.hdslb.com/bfs/live/3b80b4430ff28597ca921c3ea6c0dba90c6baa48.png","https://i0.hdslb.com/bfs/live/086067bd852857d121135198a8433b284ab9d880.gif","https://i0.hdslb.com/bfs/live/9e2a092cab14682b5e54f7439d59970d7870a7cb.webp")], [31164, new o("粉丝团灯牌","投喂即可加入主播的粉丝团！",1,10,"https://s1.hdslb.com/bfs/live/cbed3bb0a894369b49ceaf0b5337b4491b75ac42.png","https://i0.hdslb.com/bfs/live/cbed3bb0a894369b49ceaf0b5337b4491b75ac42.png","https://i0.hdslb.com/bfs/live/0f0e6b3faaac8c93b0ec09121b54023af1c1a73a.gif","https://i0.hdslb.com/bfs/live/ae05135dafe1d97323bb343c7c228590d1e6f200.webp")], [31538, new o("超感摩托","未来的概念摩托，驾驶它畅游太空",1,1e3,"https://s1.hdslb.com/bfs/live/e73f05d9d65e40cb77dc5288a5e3d239a0591751.png","https://i0.hdslb.com/bfs/live/e73f05d9d65e40cb77dc5288a5e3d239a0591751.png","https://i0.hdslb.com/bfs/live/3d276fc36ae7eeaa322ad10ea3d3a296d33cce18.gif","https://i0.hdslb.com/bfs/live/2b0607ee7fbcc96ef9fe0344bb3587a2df944be8.webp")], [30994, new o("幻乐之声","",1,2e3,"https://s1.hdslb.com/bfs/live/d1e565ddf74335ae7ad7331d68633257294f3b5f.png","https://i0.hdslb.com/bfs/live/e0f8938fe2a833fa58b82f23b385109c82907431.png","https://i0.hdslb.com/bfs/live/c6980b66a0444545a272efbd1005b86f944217b9.gif","https://i0.hdslb.com/bfs/live/42ea1b2c7d668e091cc3f1896cf2cf0271b4ea05.webp")], [31589, new o("我星永恒","任时光流转，始终与你“星星”相印",1,1314,"https://s1.hdslb.com/bfs/live/aeb574c61c6a0c433ae369589d1f99a4bd8a4d22.png","https://i0.hdslb.com/bfs/live/0cc190debdbe615dd76126a52a64e6aac93c2a32.png","https://i0.hdslb.com/bfs/live/068f637a45c55485942e4d999ae8848cfa63e39e.gif","https://i0.hdslb.com/bfs/live/d741353c103db947aecef2c28aa4987784a5111a.webp")], [31590, new o("为你摘星","心中有日月，手可摘星辰",1,5200,"https://s1.hdslb.com/bfs/live/5bd584b6fdfb03d66de56102e775582fb29ceab7.png","https://i0.hdslb.com/bfs/live/5bd584b6fdfb03d66de56102e775582fb29ceab7.png","https://i0.hdslb.com/bfs/live/8ecff2500645fbb60c4bac3cd66fa37c844297d0.gif","https://i0.hdslb.com/bfs/live/ed0d6f2d2945f5184c45b72f17cbaf9628ff05dd.webp")], [31588, new o("星河入梦","每一个爱星星的人，都有浪漫的灵魂",1,199,"https://s1.hdslb.com/bfs/live/d00e6a2a471995ac0033b660680eeb1bc1be4d2c.png","https://i0.hdslb.com/bfs/live/00cad548e36cdbef03f565e10ff0c9627aa1b2f1.png","https://i0.hdslb.com/bfs/live/9a2d1d7299e585096427be315fb804afc2a79ca6.gif","https://i0.hdslb.com/bfs/live/b171ae30b6ef6b6a8d3e4fac95fa0f237409de9d.webp")], [31759, new o("啵啵奶茶","喝完这杯再减肥！",1,170,"https://s1.hdslb.com/bfs/live/ec4a6a16e3b67bab9c79f926dbe11c1a3b5306d2.png","https://i0.hdslb.com/bfs/live/ec4a6a16e3b67bab9c79f926dbe11c1a3b5306d2.png","https://i0.hdslb.com/bfs/live/4b47f7d193b3e000039eb3fd895f1895fb8ea346.gif","https://i0.hdslb.com/bfs/live/582de0856c6f0791f3bd8b63194fc7f21906f315.webp")], [31760, new o("爱神之箭","瞄准你！biu~",1,90,"https://s1.hdslb.com/bfs/live/f7e7f17d18ad1890ac20fb71d80c6ffa86ee1170.png","https://i0.hdslb.com/bfs/live/f7e7f17d18ad1890ac20fb71d80c6ffa86ee1170.png","https://i0.hdslb.com/bfs/live/37bfb23fba3df9bae4e6b164b94620c3c150f4e3.gif","https://i0.hdslb.com/bfs/live/e083dd6c5ba0b9040d036074d7a08ca051bd5bda.webp")], [31703, new o("嗨翻全场","动次打次嗨起来，点燃这个夏天~",1,500,"https://s1.hdslb.com/bfs/live/096ab641ae492b6f9842e0e18997d906fc31e147.png","https://i0.hdslb.com/bfs/live/03c28b20f623d23a09a853526149c96ecbe1eede.png","https://i0.hdslb.com/bfs/live/a204a57b32e886702bfb1a2a2696b56ad24656b3.gif","https://i0.hdslb.com/bfs/live/7e6c6ff0dfe4463130d9923e688f3d799bcd08c4.webp")], [31520, new o("星光盾牌","BLS夏季赛骑士团专属道具",1,2990,"https://s1.hdslb.com/bfs/live/ecc7f0839149c13b271a6a45cf67022996117525.png","https://i0.hdslb.com/bfs/live/23d289ec21379267e4bb4593ace3e0f5cb9e7fb8.png","https://i0.hdslb.com/bfs/live/a12e8ff58d4ae6b45d21cfad0a01adc7425af9ea.gif","https://i0.hdslb.com/bfs/live/b4f9bb63241c36720c174baa08922f68a8595560.webp")], [31537, new o("古董八音盒","古典的八音盒，与你一起感受温馨时光",1,299,"https://s1.hdslb.com/bfs/live/5b132995ddd7cdd1627a3b8014ff5b13b518876e.png","https://i0.hdslb.com/bfs/live/654cd6daec6c4667553a826fdafe6dd950bbe0b7.png","https://i0.hdslb.com/bfs/live/6f02037e5c2ef484d47097f88236ba4a84bc1f1d.gif","https://i0.hdslb.com/bfs/live/12aa8c41056b6f81c5e188e9718710194666e385.webp")], [31762, new o("蓝金宝盒","投喂“蓝金宝盒”，有概率爆出不同礼物直接送给主播",1,80,"https://s1.hdslb.com/bfs/live/6c3a80f3bc0a7ced1e5380ff36505c05075102d1.png","https://i0.hdslb.com/bfs/live/62e44a316185dd013fb1aa92bb20beeaf94e9668.png","https://i0.hdslb.com/bfs/live/28270aad49b3a99cfe98830c0ae98b89891b6ff1.gif","https://i0.hdslb.com/bfs/live/a52eb6fc6d414083077ec68798e290b43a6170d0.webp")], [31721, new o("棒冰","素人向前冲+10热力值",-1,0,"https://s1.hdslb.com/bfs/live/fa9fbf6528f2111a41f0ceb5f39873cccd2ad343.png","https://i0.hdslb.com/bfs/live/fa9fbf6528f2111a41f0ceb5f39873cccd2ad343.png","https://i0.hdslb.com/bfs/live/99d25d0e4ffbb8441491336d0f2eecc9c99bf613.gif","https://i0.hdslb.com/bfs/live/5e98c861d43d002e8ab6ceff8eba32e9cc37dcc7.webp")], [31754, new o("吼吼听","吼吼听的歌声",1,10,"https://s1.hdslb.com/bfs/live/70ca8f12e1d2c17e3731e6da25ee87b74426acab.png","https://i0.hdslb.com/bfs/live/70ca8f12e1d2c17e3731e6da25ee87b74426acab.png","https://i0.hdslb.com/bfs/live/0b6441b6206ac37209314286bf3caf39da123a4a.gif","https://i0.hdslb.com/bfs/live/1a830f19be014e8c67d8a2cbd61453045d83b2de.webp")], [31018, new o("加油喵","",1,1e3,"https://s1.hdslb.com/bfs/live/2090d88c508d47e0670bec57d9126e576d998c34.png","https://i0.hdslb.com/bfs/live/0db6616b4f17dbd1a9743f30996e35e7012cbc76.png","https://i0.hdslb.com/bfs/live/1df52a9b0a659041937109ff80209d8c2ed559c7.gif","https://i0.hdslb.com/bfs/live/ea274c736ad65785ba6984e610844edfceff42a0.webp")], [31521, new o("萌龙骑士","BLS夏季赛骑士团专属道具",1,12e3,"https://s1.hdslb.com/bfs/live/d6565fe2713783d72165c56234cf80381b90049c.png","https://i0.hdslb.com/bfs/live/b92cfe859492ac67816112cbdf9ff9a822b5cc93.png","https://i0.hdslb.com/bfs/live/8bc24d78d5ce3e8c4a8a95bbd7dc2d82f628fe00.gif","https://i0.hdslb.com/bfs/live/fdc0043d4a438aba446bc50bfab82c0206526ba5.webp")], [31764, new o("黑金宝盒","投喂“黑金宝盒”，有概率爆出不同礼物直接送给主播",1,150,"https://s1.hdslb.com/bfs/live/2308c2da2d6fdfd56a0e67dc218fb2e2ddf9c079.png","https://i0.hdslb.com/bfs/live/ecb597f5b849a772bd1b4527364856f6fe38f5a6.png","https://i0.hdslb.com/bfs/live/e08ff29f9e7976b63d7d92242dbabf9cb81c7612.gif","https://i0.hdslb.com/bfs/live/69c96804b51a88a5d85fd9264ef3412e735f24be.webp")], [30927, new o("青年一派","投喂一个云宝宝",1,10,"https://s1.hdslb.com/bfs/live/45607a4f5b9897c0f0c378ab6d56c749805172e3.png","https://i0.hdslb.com/bfs/live/45607a4f5b9897c0f0c378ab6d56c749805172e3.png","https://i0.hdslb.com/bfs/live/28d1c086b1db74eb2c18d58d9b09dd87608e3faa.gif","https://i0.hdslb.com/bfs/live/2c4f3ae445567bf9e1549b1c04c8018eadf4d7f6.webp")], [31644, new o("盛夏花海","BLS夏季赛活动道具",1,688,"https://s1.hdslb.com/bfs/live/f95553dc2c9acd6eefbd48355711cc959cd9cbfe.png","https://i0.hdslb.com/bfs/live/d4616db186982fd66854c3039ad3e610357624dc.png","https://i0.hdslb.com/bfs/live/f5c4be3989c7f9a5489f6ce6ac6d84fa6778f17f.gif","https://i0.hdslb.com/bfs/live/a85612a5fd84c995ab9c8d5ebb693679052c1f4e.webp")], [31674, new o("小海浪","当海浪们聚集在一起，就形成了一片广阔的海域",-1,0,"https://s1.hdslb.com/bfs/live/d891361c81e74cfca4eb727f548ff184a1f67fa8.png","https://i0.hdslb.com/bfs/live/d891361c81e74cfca4eb727f548ff184a1f67fa8.png","https://i0.hdslb.com/bfs/live/f7f182d27568e3806010ddfa57ddeb1c129d5564.gif","https://i0.hdslb.com/bfs/live/7290976f9f1e07bf4771a37e5623e4fcb381c3a9.webp")], [31609, new o("小肉包","小肉包，20块钱一个，嘿嘿",1,200,"https://s1.hdslb.com/bfs/live/5aa3594f64beff44c78f09492b62615310c031d5.png","https://i0.hdslb.com/bfs/live/9ef540e860522050fb8deef1663cb64035ce6811.png","https://i0.hdslb.com/bfs/live/9cdeab4137e7df96d4026e43494426994d88e9b2.gif","https://i0.hdslb.com/bfs/live/508c90a0ba7ed933d899c1ee21d6767135449699.webp")], [31612, new o("火树银花","BLS夏季赛活动道具，可为主播增加3600闪耀值",1,1990,"https://s1.hdslb.com/bfs/live/538f5697589c7b50f22f8bf51121946d63d26607.png","https://i0.hdslb.com/bfs/live/4fd4b825f4962042c851557dfcbad5637c8cb847.png","https://i0.hdslb.com/bfs/live/dfeb3b363af63a5395039fa1ac2c9059044e0ae0.gif","https://i0.hdslb.com/bfs/live/1583f868af7a0730fde5182b5f7d652976254052.webp")], [30995, new o("唱片计划","",1,400,"https://s1.hdslb.com/bfs/live/a3988bd40dc03348cf82e50a64b22cdb48908294.png","https://i0.hdslb.com/bfs/live/a3988bd40dc03348cf82e50a64b22cdb48908294.png","https://i0.hdslb.com/bfs/live/5a8e6bc5e3346804505412c2eee507fae83e3bcc.gif","https://i0.hdslb.com/bfs/live/053cc4dc134e47ec7cb495c8c1e88e1470e3d107.webp")], [31587, new o("夏日萤火","BLS夏季赛活动道具，可为主播增加600闪耀值",1,200,"https://s1.hdslb.com/bfs/live/408393f30479e3b77d4c2d9a5dd7875f65daa14a.png","https://i0.hdslb.com/bfs/live/e5f78891d1f46d82cd304841dd48f56009bf7522.png","https://i0.hdslb.com/bfs/live/8f9a9880b757b0a65d20d745657665532fe7f9ae.gif","https://i0.hdslb.com/bfs/live/492fdee87713eac062a34b8af60c8f0025fd4845.webp")], [31672, new o("脸萌测试1","",1,1,"https://s1.hdslb.com/bfs/live/dc95e8a3477e5f8e43a060acce875d4639657dff.png","https://i0.hdslb.com/bfs/live/6e0ba99d6bd26029eaf1a33f85b0fbd35995e87f.png","https://i0.hdslb.com/bfs/live/551b5c7ad6589eeab30bbfbc48681ca84e18e873.gif","https://i0.hdslb.com/bfs/live/8809417dc5632138f1b45e07e39edc379bd514d3.webp")], [31763, new o("海洋之心","伴随泰坦尼克号一起沉入海底的绝世珍宝～",1,29990,"https://s1.hdslb.com/bfs/live/431af546e261a4d6f9a74483ace3fd4986d2cb19.png","https://i0.hdslb.com/bfs/live/431af546e261a4d6f9a74483ace3fd4986d2cb19.png","https://i0.hdslb.com/bfs/live/3c912ab54dc85d736ca1353bdd3f99028341885c.gif","https://i0.hdslb.com/bfs/live/49b14e056066d04e4ce8e2d74872faa70799d141.webp")], [31020, new o("智慧之书","",1,110,"https://s1.hdslb.com/bfs/live/f0d0cbdd63973172ee22536546462a39988ed9d9.png","https://i0.hdslb.com/bfs/live/f0d0cbdd63973172ee22536546462a39988ed9d9.png","https://i0.hdslb.com/bfs/live/d645602be49f06d780aade24437cffd8b7f10aa9.gif","https://i0.hdslb.com/bfs/live/36f10c0a7b47e55628e0cddd75c26735ff17386a.webp")], [31394, new o("时空飞车","",1,1e3,"https://s1.hdslb.com/bfs/live/9786f2a361609f97a9cb207c5b8cb82a2fc4db1a.png","https://i0.hdslb.com/bfs/live/8ec019db48803f7fac243dcdef507469f476f39c.png","https://i0.hdslb.com/bfs/live/4526e4f433d623231d7eaf3b49d52a49a956bfe6.gif","https://i0.hdslb.com/bfs/live/98fb79f1223ee3a248f6008d4f2d72cfec690650.webp")], [31531, new o("PK票","每张PK票+10PK值",-1,0,"https://s1.hdslb.com/bfs/live/5c3dd95c242ea94d304209c869d7cde3bf10b3ad.png","https://i0.hdslb.com/bfs/live/5c3dd95c242ea94d304209c869d7cde3bf10b3ad.png","https://i0.hdslb.com/bfs/live/98b0516cca9a82e0ea33ced5adf10f2248f6fc0f.gif","https://i0.hdslb.com/bfs/live/6da3775ae5b7169836a3df68909dbb2292d3776d.webp")], [31461, new o("夢冬の守护","陈沧海i专属道具",1,19e3,"https://s1.hdslb.com/bfs/live/2a4cad8a6c2a2d1d48a4c41c4ca1cf79b8da6e62.png","https://i0.hdslb.com/bfs/live/2a4cad8a6c2a2d1d48a4c41c4ca1cf79b8da6e62.png","https://i0.hdslb.com/bfs/live/74636fbadbc44d7d48c647308b2a855208f2dba0.gif","https://i0.hdslb.com/bfs/live/9548cd41e6ec747c9335289dd521d3274bbfeb28.webp")], [31511, new o("Pico VR","毕业不散场，Pico 再相会",0,45e4,"https://s1.hdslb.com/bfs/live/37874d2d53451a7c613fd1c152bdec9ac48f79c0.png","https://i0.hdslb.com/bfs/live/2bd47cd92255795018a7c5cd5d8322fddf7dd0dd.png","https://i0.hdslb.com/bfs/live/0b90be58c44657cbe9cd666c782ab996021a8e24.gif","https://i0.hdslb.com/bfs/live/0cba7b83dd652ac663e91d59ecfee6ef4665383a.webp")], [31459, new o("九宝的贴贴","九兒ii专属道具",1,12e3,"https://s1.hdslb.com/bfs/live/7640b184ff94f53c2e46f15699c28da2e397adf8.png","https://i0.hdslb.com/bfs/live/c32ee4a1dbdfd54422266977ed2bc04c6aaa1f92.png","https://i0.hdslb.com/bfs/live/b5fd7221731bfcb2cc9549b3f62b8a1b4dc2d946.gif","https://i0.hdslb.com/bfs/live/1718ab4cac10ab40ee2c0503ffd1012d1c0ca42b.webp")], [31591, new o("星轨列车","超越时空的爱恋，没有终点",1,6666,"https://s1.hdslb.com/bfs/live/239c1e0c584b47601347812536422a37a5e3b3b9.png","https://i0.hdslb.com/bfs/live/89a5a62984bb25d07cadab34debd3fc42008249b.png","https://i0.hdslb.com/bfs/live/4aed436a8603c117155405050a3fe8b9cf7be947.gif","https://i0.hdslb.com/bfs/live/7b0058b109f66d75fb9ce5df23e6705ec05ff05b.webp")], [30714, new o("奖杯！","捧杯吧，冠军！",1,10,"https://s1.hdslb.com/bfs/live/921e722caa4b250f78dd5723b6de23354f12a774.png","https://i0.hdslb.com/bfs/live/921e722caa4b250f78dd5723b6de23354f12a774.png","https://i0.hdslb.com/bfs/live/cff869130a97fbf436a10fd524d41d51a34e6bcc.gif","https://i0.hdslb.com/bfs/live/1c593b5d39f65544f839ef019b19145f9f7e9752.webp")], [31458, new o("饺子爹战舰","饺子爹_aiou专属道具",1,12e3,"https://s1.hdslb.com/bfs/live/67206e8d32cba4e8a720d3b7a6602dd5f2dc444c.png","https://i0.hdslb.com/bfs/live/67206e8d32cba4e8a720d3b7a6602dd5f2dc444c.png","https://i0.hdslb.com/bfs/live/0c10741bbae5fd7b7562909c97dc37f8c576ebf7.gif","https://i0.hdslb.com/bfs/live/79de0b7f73f581e067c3c7d32a2db339fe6faaac.webp")], [31120, new o("雷包","C4倒计时开启，和主播一起感受爆炸的魅力~",1,10,"https://s1.hdslb.com/bfs/live/bc63d995468096e7dc59d36ef05e79d0b1c663a4.png","https://i0.hdslb.com/bfs/live/856e0b27f276b84594b155cd8214225d38a41e74.png","https://i0.hdslb.com/bfs/live/d1e0f5f8fbc7397aecea2745bc8a18647d3c5193.gif","https://i0.hdslb.com/bfs/live/29c2697179595a91e24e6489aa75288b2210c8d2.webp")], [31742, new o("欢庆时刻","欢庆时刻，好友相伴",1,1e3,"https://s1.hdslb.com/bfs/live/d72ff0dfa51380edb063d9db9fc47a1734c01f70.png","https://i0.hdslb.com/bfs/live/d72ff0dfa51380edb063d9db9fc47a1734c01f70.png","https://i0.hdslb.com/bfs/live/d91e40545fbfc72876ae8e7b016a44f76c516fca.gif","https://i0.hdslb.com/bfs/live/49ea5934fc3a82952ba27dd6c7eb33d2568fb9be.webp")], [31456, new o("缘定三生","缘定三生，约同白首",1,5200,"https://s1.hdslb.com/bfs/live/88ac5c2aeb70d87f1bc948a71c8ea7582a53ca22.png","https://i0.hdslb.com/bfs/live/f8e3eb20372b76cd1e57dc1c8a448c0616eaeedb.png","https://i0.hdslb.com/bfs/live/b3cd1e79c5596ff4bbe604187b7bf41078017646.gif","https://i0.hdslb.com/bfs/live/e8165711c8d5c6bab28712b5de70968cf365db47.webp")], [31460, new o("二条恭一","二条恭一专属道具",1,12e3,"https://s1.hdslb.com/bfs/live/a61361656699ae332e22b36e68793796e797ced7.png","https://i0.hdslb.com/bfs/live/8d5cb8c9b2eb28cedda7e57690f063d38d9d9731.png","https://i0.hdslb.com/bfs/live/8aa22eb41f10ec9ef08e2f643a971d7aeae0bbfd.gif","https://i0.hdslb.com/bfs/live/c733d64652a9c210c9aff2385ff8ed0337fdb40a.webp")], [31645, new o("梦幻彩虹","BLS夏季赛活动道具",1,9990,"https://s1.hdslb.com/bfs/live/94219c956a6f1a213da4522203f1c81bf35e39b5.png","https://i0.hdslb.com/bfs/live/62cca11efc8eb8e222a145e5db3bbb7b329ae092.png","https://i0.hdslb.com/bfs/live/7b1481df5009cbd0282204c9af8594117c5eb4e4.gif","https://i0.hdslb.com/bfs/live/73b3d91c3f61ef6ef343f1767a80af0251a9b179.webp")], [30558, new o("盛夏萌星","BLS夏季赛活动道具，可为主播增加5闪耀值",-1,0,"https://s1.hdslb.com/bfs/live/40021516866f3ec1d5488574d44514104397b9ca.png","https://i0.hdslb.com/bfs/live/40021516866f3ec1d5488574d44514104397b9ca.png","https://i0.hdslb.com/bfs/live/24c0920dba98712e1226f0a02dcf3b469e93d4de.gif","https://i0.hdslb.com/bfs/live/7ae2768a8f4d0b72d889c90821540002cb7aa040.webp")], [31778, new o("家养萌喵","是你的家养喵喵~",1,199,"https://s1.hdslb.com/bfs/live/a47daccdb124e8d8a0f9ea2df976025b5d4286b4.png","https://i0.hdslb.com/bfs/live/084f4e529ce0a585499c43f5a20d0c02d7bb1f47.png","https://i0.hdslb.com/bfs/live/313e818ed0fa082693d91d3fce110c6691a6c6fe.gif","https://i0.hdslb.com/bfs/live/313e818ed0fa082693d91d3fce110c6691a6c6fe.gif")], [31741, new o("幸运使者","你遇到了一只幸运的粉色小海豚",1,399,"https://s1.hdslb.com/bfs/live/d31ed9954425593746acfd73910b3b00e9d7db45.png","https://i0.hdslb.com/bfs/live/7450fedfb5b54e4b594c99383d50199910f7b845.png","https://i0.hdslb.com/bfs/live/5414ccc462dcf2d9581613781a64602f2fdb3639.gif","https://i0.hdslb.com/bfs/live/cd0576954f61ea4146385d9e119b9f23419b11df.webp")], [31779, new o("明日之星","一颗冉冉升级的明星，即将加冕为王！",1,299,"https://s1.hdslb.com/bfs/live/641b4adc18c8ed7187f39d9e5c73dce5eba51985.png","https://i0.hdslb.com/bfs/live/53deaeed898845b1121a9435d0d519344fc00b3d.png","https://i0.hdslb.com/bfs/live/9a5bc980f7a93fc4ef4a914bf76c0df2647c9159.gif","https://i0.hdslb.com/bfs/live/9a5bc980f7a93fc4ef4a914bf76c0df2647c9159.gif")], [31776, new o("带你远航","乘着巨轮，携手驶向大海远方~",1,2330,"https://s1.hdslb.com/bfs/live/daeb044aced9bde1df854a9c504964077fed6023.png","https://i0.hdslb.com/bfs/live/daeb044aced9bde1df854a9c504964077fed6023.png","https://i0.hdslb.com/bfs/live/c4d5a158cb8dbe7ef8e11718a5e3ff65c084cb02.gif","https://i0.hdslb.com/bfs/live/7fc1813262c00369962dcc28423a712f78257d39.webp")], [30971, new o("这个好诶","都 想 要 ",1,10,"https://s1.hdslb.com/bfs/live/bb6c11dcc365b3d8287569f08b8b0d0f2e1a3ef8.png","https://i0.hdslb.com/bfs/live/bb6c11dcc365b3d8287569f08b8b0d0f2e1a3ef8.png","https://i0.hdslb.com/bfs/live/574f5a36fe371c6e80fbcb1522fc899977007b73.gif","https://i0.hdslb.com/bfs/live/f3057d838ff4c2f7b5d930db9c03ed6513aaf36c.webp")], [31049, new o("干杯","和你一起举起回忆酿的甜，再干一杯！",1,66,"https://s1.hdslb.com/bfs/live/3e7cf3f43a118a811cf7b864cef23765fdee87d9.png","https://i0.hdslb.com/bfs/live/3e7cf3f43a118a811cf7b864cef23765fdee87d9.png","https://i0.hdslb.com/bfs/live/2adadde008050d0b36b493fd45b8fc89a07c7698.gif","https://i0.hdslb.com/bfs/live/817e0ef58cee5aa5b143459c46c8ab288da5db25.webp")], [31777, new o("友谊的小船","友谊的小船说上就上！",1,52,"https://s1.hdslb.com/bfs/live/b33c94c51b669bd88f811ecf5f4e34a1db22a648.png","https://i0.hdslb.com/bfs/live/96904a33cd9968c8681fe9f85c912e52029bd6c7.png","https://i0.hdslb.com/bfs/live/b7f50f423a594aa722cb640320eaf43d8655c8d9.gif","https://i0.hdslb.com/bfs/live/24a007b0299c5e7f652d9eec0e0a51afd5a652f3.webp")], [31025, new o("泡泡糖","",1,11,"https://s1.hdslb.com/bfs/live/322867d00ab5572ba0c5594ca35f4ed54688a480.png","https://i0.hdslb.com/bfs/live/7298f6597b3be2ade2ae964a03c0b6d83350f847.png","https://i0.hdslb.com/bfs/live/150bf2fc23281b1857676e94550b9a767a5d30fa.gif","https://i0.hdslb.com/bfs/live/54dea226fcf20ea43e24d36001ea83a4b0cd7b7f.webp")], [31253, new o("为你加冕","今日起，加冕为王",1,4500,"https://s1.hdslb.com/bfs/live/ca908f0e96367940e105a71f2c99e71a7ecc6d56.png","https://i0.hdslb.com/bfs/live/ca908f0e96367940e105a71f2c99e71a7ecc6d56.png","https://i0.hdslb.com/bfs/live/32689538296ac31d37d5d432ee3a30226624ed17.gif","https://i0.hdslb.com/bfs/live/dbd610f5d5a51481308715fd594a30b480a58ea7.webp")], [31566, new o("烟花棒","霜叶季突围赛活动道具",-1,0,"https://s1.hdslb.com/bfs/live/fe69a56589a0361b177c62d681fdb3ecbe1bee7f.png","https://i0.hdslb.com/bfs/live/fe69a56589a0361b177c62d681fdb3ecbe1bee7f.png","https://i0.hdslb.com/bfs/live/d4cc8d5185d8c2ec8b353f74de1e16a2f32f73ef.gif","https://i0.hdslb.com/bfs/live/4ea2b3543353a53473c08384bbda67dd832ddeac.webp")], [31479, new o("情书","山有木兮木有枝，心悦君兮君不知",1,52,"https://s1.hdslb.com/bfs/live/50d940c2b13026e24584ac621089d8436d7cc330.png","https://i0.hdslb.com/bfs/live/50d940c2b13026e24584ac621089d8436d7cc330.png","https://i0.hdslb.com/bfs/live/85872855e9b718168ed1e94d7bc9aec36a8f7c67.gif","https://i0.hdslb.com/bfs/live/e9a574947740617a907184e8e4d6792aa571ca32.webp")], [31483, new o("超级战舰","战舰集结，火力全开",1,13140,"https://s1.hdslb.com/bfs/live/29ce0bb6a1c411c79847db27b5173ff42095330f.png","https://i0.hdslb.com/bfs/live/29ce0bb6a1c411c79847db27b5173ff42095330f.png","https://i0.hdslb.com/bfs/live/2fb61cf31e1aa4a10a649cb8b6c8b25ec6b1ab11.gif","https://i0.hdslb.com/bfs/live/be76beeed0b40dac73ffd278e8b286f0dc92baeb.webp")], [30896, new o("打榜","",1,20,"https://s1.hdslb.com/bfs/live/5229d18f65faca325a6e9cc26277624df9c8878a.png","https://i0.hdslb.com/bfs/live/5229d18f65faca325a6e9cc26277624df9c8878a.png","https://i0.hdslb.com/bfs/live/6daf9c9f30b6270dd32cb6a69013bc399d4f6551.gif","https://i0.hdslb.com/bfs/live/7ce695a583ec9462683feac61b6acdcb71a00758.webp")], [31217, new o("星愿水晶球","霜叶季突围赛活动道具",1,1e3,"https://s1.hdslb.com/bfs/live/791f28a0913833d23eab68205c0b8d2c66b29b2d.png","https://i0.hdslb.com/bfs/live/791f28a0913833d23eab68205c0b8d2c66b29b2d.png","https://i0.hdslb.com/bfs/live/694fda21124dcac7052e62c721e9a2cf5899749c.gif","https://i0.hdslb.com/bfs/live/0f8dd4dda2d0ff22bca99a4a2cef7ede37902bf2.webp")], [31147, new o("星愿水晶球","美丽的水晶球",1,1e3,"https://s1.hdslb.com/bfs/live/791f28a0913833d23eab68205c0b8d2c66b29b2d.png","https://i0.hdslb.com/bfs/live/791f28a0913833d23eab68205c0b8d2c66b29b2d.png","https://i0.hdslb.com/bfs/live/694fda21124dcac7052e62c721e9a2cf5899749c.gif","https://i0.hdslb.com/bfs/live/0f8dd4dda2d0ff22bca99a4a2cef7ede37902bf2.webp")], [31640, new o("嗨翻全场","动次打次嗨起来，点燃这个夏天~",1,500,"https://s1.hdslb.com/bfs/live/096ab641ae492b6f9842e0e18997d906fc31e147.png","https://i0.hdslb.com/bfs/live/03c28b20f623d23a09a853526149c96ecbe1eede.png","https://i0.hdslb.com/bfs/live/a204a57b32e886702bfb1a2a2696b56ad24656b3.gif","https://i0.hdslb.com/bfs/live/7e6c6ff0dfe4463130d9923e688f3d799bcd08c4.webp")], [31481, new o("告白花束","送你一束花花",1,220,"https://s1.hdslb.com/bfs/live/78f9d11309e31227ffbb708ee3243a4a732be4e1.png","https://i0.hdslb.com/bfs/live/78f9d11309e31227ffbb708ee3243a4a732be4e1.png","https://i0.hdslb.com/bfs/live/50cb25ea89426296fd174a8e8a24ed3bb8870f8e.gif","https://i0.hdslb.com/bfs/live/1bca516b95fa878407e96c640567221a74f8cadf.webp")], [31152, new o("探索者启航","小电视潜心打造的探索者号终于出发啦！",1,22330,"https://s1.hdslb.com/bfs/live/9f2dddbaa96b4b12bf637a52398c9375f4ef67fe.png","https://i0.hdslb.com/bfs/live/b55e296fd3d73a48a86391b5f0708f1fa5c7445d.png","https://i0.hdslb.com/bfs/live/5b8da16a5de9ec3272f15056e3c8f417a4b6ece8.gif","https://i0.hdslb.com/bfs/live/e77c2a95958b4dfb9e386af357a12a2848995c7d.webp")], [31034, new o("B坷垃","主播吃了B坷垃，吸收方圆百里人气值——American SHENGDIYAGE",1,99,"https://s1.hdslb.com/bfs/live/cc8bfcbc24c8b65937f62ce0d16b31ab987dce47.png","https://i0.hdslb.com/bfs/live/cc8bfcbc24c8b65937f62ce0d16b31ab987dce47.png","https://i0.hdslb.com/bfs/live/ae2d28fabcd773869d954e780f5c1252ec07ea47.gif","https://i0.hdslb.com/bfs/live/ad01f5b786fa6272adf0e985576b20a93ea11c6c.webp")], [31036, new o("小花花","一花一世界，一树一菩提",1,1,"https://s1.hdslb.com/bfs/live/8b40d0470890e7d573995383af8a8ae074d485d9.png","https://i0.hdslb.com/bfs/live/82f489ceccf67e9c3c5c9104ce33d06117db844e.png","https://i0.hdslb.com/bfs/live/c806ee29394aab4877fa3d535daca5c66c631306.gif","https://i0.hdslb.com/bfs/live/28357ba4cd566418730ca29da2c552efa7e4a390.webp")], [20011, new o("金币","",1,6,"https://s1.hdslb.com/bfs/live/27f5f308033897e727073b35967d634a9703cc3b.png","https://i0.hdslb.com/bfs/live/27f5f308033897e727073b35967d634a9703cc3b.png","https://i0.hdslb.com/bfs/live/79358780ea7a32028d4727d95576c1ea153fee51.gif","https://i0.hdslb.com/bfs/live/bbc1a0fa4924a644c861cc39e30e38d84fe219d0.webp")], [31478, new o("这个好诶","都 想 要 ",1,10,"https://s1.hdslb.com/bfs/live/475494f221873f9654d04ad44c5853740bd89149.png","https://i0.hdslb.com/bfs/live/475494f221873f9654d04ad44c5853740bd89149.png","https://i0.hdslb.com/bfs/live/574f5a36fe371c6e80fbcb1522fc899977007b73.gif","https://i0.hdslb.com/bfs/live/f3057d838ff4c2f7b5d930db9c03ed6513aaf36c.webp")], [30898, new o("樱花之恋","来一场樱花下的会面吧",1,1e3,"https://s1.hdslb.com/bfs/live/1dbdd7c23770bb84d885649dd59aa5296e73dfe0.png","https://i0.hdslb.com/bfs/live/1dbdd7c23770bb84d885649dd59aa5296e73dfe0.png","https://i0.hdslb.com/bfs/live/c0f42bd52889d37985e9ade9c3a0cb4aacabda3c.gif","https://i0.hdslb.com/bfs/live/596d2456c03e62fe31594331c29d1ba2fbf1d183.webp")], [30004, new o("喵娘","( >ω<) 喵~~",1,52,"https://s1.hdslb.com/bfs/live/f62ef02a70cd0fc4c99d7f436644b6008beb0244.png","https://i0.hdslb.com/bfs/live/0db6616b4f17dbd1a9743f30996e35e7012cbc76.png","https://i0.hdslb.com/bfs/live/26403d9eddce07b58ffe138b03262fd276c4fab8.gif","https://i0.hdslb.com/bfs/live/8e31ae247fd6824a904c60e98aa28176a55ae615.webp")], [30641, new o("打call","为BML打call！",0,1,"https://s1.hdslb.com/bfs/live/a2c8e5afec4e9da0af6e08b2913d192dea3152cd.png","https://i0.hdslb.com/bfs/live/3a34167c0efcbed1e1b2d19a7bb2a53443c3411c.png","https://i0.hdslb.com/bfs/live/5995d6ee2f21fba40abeced03a2db10bae6603ad.gif","https://i0.hdslb.com/bfs/live/36642fff9cfca041d8e83dba2863c665487ee58d.webp")], [31037, new o("打call","想要给你最极致的应援",1,5,"https://s1.hdslb.com/bfs/live/79b6d0533fc988f2800fc5bb4fe3722c825f746f.png","https://i0.hdslb.com/bfs/live/79b6d0533fc988f2800fc5bb4fe3722c825f746f.png","https://i0.hdslb.com/bfs/live/72d357629310c27cf375e9e049390bb44af11b6e.gif","https://i0.hdslb.com/bfs/live/7dad99cce8772d1045dec6916a55642491989819.webp")], [31158, new o("星愿水晶球","美丽的水晶球",0,1,"https://s1.hdslb.com/bfs/live/791f28a0913833d23eab68205c0b8d2c66b29b2d.png","https://i0.hdslb.com/bfs/live/791f28a0913833d23eab68205c0b8d2c66b29b2d.png","https://i0.hdslb.com/bfs/live/694fda21124dcac7052e62c721e9a2cf5899749c.gif","https://i0.hdslb.com/bfs/live/0f8dd4dda2d0ff22bca99a4a2cef7ede37902bf2.webp")], [31087, new o("次元之城","在城市的一角，与你相守相望",1,12450,"https://s1.hdslb.com/bfs/live/cdae8136b1ee767609aeec688bca8124651d4d01.png","https://i0.hdslb.com/bfs/live/cdae8136b1ee767609aeec688bca8124651d4d01.png","https://i0.hdslb.com/bfs/live/89b9ccf287a3bae9904f5c660a6a86e0e26fe3e0.gif","https://i0.hdslb.com/bfs/live/1b8387b37ab4469c925d645b2c2b3888f12f3dd3.webp")], [30610, new o("激爽刨冰","甜甜沙冰，透凉到心~ ",0,1,"https://s1.hdslb.com/bfs/live/bb749294ca18e7b0ce8248b8aa4fd0d39d5bc33c.png","https://i0.hdslb.com/bfs/live/bb749294ca18e7b0ce8248b8aa4fd0d39d5bc33c.png","https://i0.hdslb.com/bfs/live/19eca43359f974134503244f4419f4ae32e91adc.gif","https://i0.hdslb.com/bfs/live/5ec1406c1006e8428a13d7736628d4663f6702f7.webp")], [31116, new o("干杯","和你一起举起回忆酿的甜，再干一杯！",1,66,"https://s1.hdslb.com/bfs/live/3e7cf3f43a118a811cf7b864cef23765fdee87d9.png","https://i0.hdslb.com/bfs/live/3e7cf3f43a118a811cf7b864cef23765fdee87d9.png","https://i0.hdslb.com/bfs/live/2adadde008050d0b36b493fd45b8fc89a07c7698.gif","https://i0.hdslb.com/bfs/live/817e0ef58cee5aa5b143459c46c8ab288da5db25.webp")], [31477, new o("牛哇牛哇","是真的牛！！",1,1,"https://s1.hdslb.com/bfs/live/23475a7a6170e0d94ba52720e23060dc7604b735.png","https://i0.hdslb.com/bfs/live/aa335d1e6e8192994c8aa50c06fd388d815fd01c.png","https://i0.hdslb.com/bfs/live/ab9e8b9868c0ae4a0ab429a11e65ee58a1053cb2.gif","https://i0.hdslb.com/bfs/live/419bf4e5bd6fb4e1185fb73a466c6c884d0f2ba2.webp")], [31278, new o("打call","想要给你最极致的应援",1,5,"https://s1.hdslb.com/bfs/live/79b6d0533fc988f2800fc5bb4fe3722c825f746f.png","https://i0.hdslb.com/bfs/live/79b6d0533fc988f2800fc5bb4fe3722c825f746f.png","https://i0.hdslb.com/bfs/live/72d357629310c27cf375e9e049390bb44af11b6e.gif","https://i0.hdslb.com/bfs/live/7dad99cce8772d1045dec6916a55642491989819.webp")], [31641, new o("打call","想要给你最极致的应援",1,5,"https://s1.hdslb.com/bfs/live/f75291a0e267425c41e1ce31b5ffd6bfedc6f0b6.png","https://i0.hdslb.com/bfs/live/a58a69ecf188e6a690eb731815d3afb4366145eb.png","https://i0.hdslb.com/bfs/live/72d357629310c27cf375e9e049390bb44af11b6e.gif","https://i0.hdslb.com/bfs/live/7dad99cce8772d1045dec6916a55642491989819.webp")], [30958, new o("应援棒","为天依打call吧！",-1,0,"https://s1.hdslb.com/bfs/live/5da946ec6b668db0514e9944871d4733fb6507e6.png","https://i0.hdslb.com/bfs/live/6e105d88d956151b0d6d2bf030f6561fc6b2a84f.png","https://i0.hdslb.com/bfs/live/9fccb0de1efbdecd6a0c96e6396258826a57c19d.gif","https://i0.hdslb.com/bfs/live/3a5a7ef3f73a371da45155a439a6a4ca5baaa4a8.webp")], [31218, new o("撒花","wowwwwwwwwww",1,660,"https://s1.hdslb.com/bfs/live/c7a5d0433c2956f9bcba0c4218a1784f4607fe11.png","https://i0.hdslb.com/bfs/live/be28c0f10fde5e18c8940d61b8e2f819e22d87a9.png","https://i0.hdslb.com/bfs/live/c0b7ad940860b1e7b2ba28a3f50836c759f3f577.gif","https://i0.hdslb.com/bfs/live/9e9191dbfc72d26ed78e3fafe3fa10c14e2f19b8.webp")], [31252, new o("守护之翼","会有天使守护你",1,2e3,"https://s1.hdslb.com/bfs/live/1d7d973972e70cad7e97478b3c8d20b0faafd0dc.png","https://i0.hdslb.com/bfs/live/bcc637789f6ccfdeb742ca7742eed257bc54d6d1.png","https://i0.hdslb.com/bfs/live/2aab96bf43b0c9a72ab4f704be3621f9bdb9ee4f.gif","https://i0.hdslb.com/bfs/live/a83bf6648b5585e6117afc60bd9826a989f043f5.webp")], [31738, new o("粉丝团灯牌","投喂即可加入主播的粉丝团哦~",0,1e3,"https://s1.hdslb.com/bfs/live/cbed3bb0a894369b49ceaf0b5337b4491b75ac42.png","https://i0.hdslb.com/bfs/live/cbed3bb0a894369b49ceaf0b5337b4491b75ac42.png","https://i0.hdslb.com/bfs/live/0f0e6b3faaac8c93b0ec09121b54023af1c1a73a.gif","https://i0.hdslb.com/bfs/live/ae05135dafe1d97323bb343c7c228590d1e6f200.webp")], [31215, new o("花式夸夸","疯狂产出一波夸夸弹幕！！",1,330,"https://s1.hdslb.com/bfs/live/ce0efeceae7054d1ee835864eace28f08a54a37d.png","https://i0.hdslb.com/bfs/live/ce0efeceae7054d1ee835864eace28f08a54a37d.png","https://i0.hdslb.com/bfs/live/e3ca71756fd0e6edf885bbcb2ccaf7f58d46738a.gif","https://i0.hdslb.com/bfs/live/8f1b36c1ea16ed413de2d29559493ce85157978d.webp")], [31053, new o("告白花束","一束寄托了最美好心意的花",1,220,"https://s1.hdslb.com/bfs/live/c313057cf96513db2374a2acd64801af176009a2.png","https://i0.hdslb.com/bfs/live/c313057cf96513db2374a2acd64801af176009a2.png","https://i0.hdslb.com/bfs/live/50cb25ea89426296fd174a8e8a24ed3bb8870f8e.gif","https://i0.hdslb.com/bfs/live/1bca516b95fa878407e96c640567221a74f8cadf.webp")], [31048, new o("疯狂心动","不是风动，不是幡动，是心动",1,520,"https://s1.hdslb.com/bfs/live/542192b614f4af4cecac4b970a0bb23620367eac.png","https://i0.hdslb.com/bfs/live/542192b614f4af4cecac4b970a0bb23620367eac.png","https://i0.hdslb.com/bfs/live/77a742e6efea2336f5a94500ac03e7e1b8a96300.gif","https://i0.hdslb.com/bfs/live/8cf4b349611da383e2d9db196c16fb8b18d3f1ca.webp")], [30033, new o("充能炮","",-1,0,"https://s1.hdslb.com/bfs/live/1364c63088b4eb5e31d575e5b4095c904e48f017.png","https://i0.hdslb.com/bfs/live/7ddc8f5abc1d821740630a2909ce6588e5669cf1.png","https://i0.hdslb.com/bfs/live/d733dc5e229e71eaa01615a08d323c2152e578a2.gif","https://i0.hdslb.com/bfs/live/bdd67e50e04fb4668e77294ace37ea59524ddb8c.webp")], [30063, new o("给大佬递茶","请大佬喝下这杯茶！",1,20,"https://s1.hdslb.com/bfs/live/1a74c3f60acee3c5d134e38db57a66dee0e1c023.png","https://i0.hdslb.com/bfs/live/304a3de202da9231a33e57bde569bf94b498ee5e.png","https://i0.hdslb.com/bfs/live/747dd5e27b6b06fca9d2b5d0be5d96619803e917.gif","https://i0.hdslb.com/bfs/live/9733aec683369e19cfd934a41b62ee20320eee74.webp")], [30873, new o("花式夸夸","疯狂产出一波夸夸弹幕！！",1,330,"https://s1.hdslb.com/bfs/live/28186596880db45a7b843f17d6ebb70feeac06f9.png","https://i0.hdslb.com/bfs/live/28186596880db45a7b843f17d6ebb70feeac06f9.png","https://i0.hdslb.com/bfs/live/62597ef6fdef4d80130179948588aec142c2030f.gif","https://i0.hdslb.com/bfs/live/98b4c8485634df6103c746ed084249f34883487d.webp")], [31117, new o("星愿水晶球","被施加了神奇魔法的水晶球",1,1e3,"https://s1.hdslb.com/bfs/live/791f28a0913833d23eab68205c0b8d2c66b29b2d.png","https://i0.hdslb.com/bfs/live/791f28a0913833d23eab68205c0b8d2c66b29b2d.png","https://i0.hdslb.com/bfs/live/694fda21124dcac7052e62c721e9a2cf5899749c.gif","https://i0.hdslb.com/bfs/live/0f8dd4dda2d0ff22bca99a4a2cef7ede37902bf2.webp")], [31134, new o("守护之翼","会有天使守护你",1,2e3,"https://s1.hdslb.com/bfs/live/1d7d973972e70cad7e97478b3c8d20b0faafd0dc.png","https://i0.hdslb.com/bfs/live/bcc637789f6ccfdeb742ca7742eed257bc54d6d1.png","https://i0.hdslb.com/bfs/live/2aab96bf43b0c9a72ab4f704be3621f9bdb9ee4f.gif","https://i0.hdslb.com/bfs/live/a83bf6648b5585e6117afc60bd9826a989f043f5.webp")], [30758, new o("这个好诶","都 想 要 ",1,10,"https://s1.hdslb.com/bfs/live/3ddb10b055b9d1826829ec0fad93ab56484d4a90.png","https://i0.hdslb.com/bfs/live/3ddb10b055b9d1826829ec0fad93ab56484d4a90.png","https://i0.hdslb.com/bfs/live/898f8a734a60313295acf7144bd3fdb63e3ca196.gif","https://i0.hdslb.com/bfs/live/d39c9c5428ca145936a6e08430e8789f43f2a2ce.webp")], [3, new o("B坷垃","主播吃了B坷垃，吸收方圆百里人气值——American SHENGDIYAGE",1,99,"https://s1.hdslb.com/bfs/live/cc8bfcbc24c8b65937f62ce0d16b31ab987dce47.png","https://i0.hdslb.com/bfs/live/cc8bfcbc24c8b65937f62ce0d16b31ab987dce47.png","https://i0.hdslb.com/bfs/live/ae2d28fabcd773869d954e780f5c1252ec07ea47.gif","https://i0.hdslb.com/bfs/live/ad01f5b786fa6272adf0e985576b20a93ea11c6c.webp")], [30863, new o("变欧喷雾","喷一喷，变成欧洲人！",-1,0,"https://s1.hdslb.com/bfs/live/6f33984b09326845cc527c4b0fb6f62d4a296fd4.png","https://i0.hdslb.com/bfs/live/d1425b1b9789ee658d731871b6d325aeb390a200.png","https://i0.hdslb.com/bfs/live/a929e3461ba87066a27b76c003688afbf8d847b3.gif","https://i0.hdslb.com/bfs/live/d63a490abb8e13d16dfd677f12288ae421b6e8fc.webp")], [31485, new o("打call","想要给你最极致的应援",1,5,"https://s1.hdslb.com/bfs/live/f75291a0e267425c41e1ce31b5ffd6bfedc6f0b6.png","https://i0.hdslb.com/bfs/live/a58a69ecf188e6a690eb731815d3afb4366145eb.png","https://i0.hdslb.com/bfs/live/72d357629310c27cf375e9e049390bb44af11b6e.gif","https://i0.hdslb.com/bfs/live/7dad99cce8772d1045dec6916a55642491989819.webp")], [31250, new o("情书","山有木兮木有枝，心悦君兮君不知",1,52,"https://s1.hdslb.com/bfs/live/57534e2fc6da1f98ce1631214f32d70f26b60ac1.png","https://i0.hdslb.com/bfs/live/57534e2fc6da1f98ce1631214f32d70f26b60ac1.png","https://i0.hdslb.com/bfs/live/85872855e9b718168ed1e94d7bc9aec36a8f7c67.gif","https://i0.hdslb.com/bfs/live/e9a574947740617a907184e8e4d6792aa571ca32.webp")], [30996, new o("天空之翼","光翼展开！Biu！",1,1e3,"https://s1.hdslb.com/bfs/live/913b1ec5af5f1c8005bcd532349b8408c10e4f9d.png","https://i0.hdslb.com/bfs/live/7df45e822082c99653a9208e915a2de446ff6ff9.png","https://i0.hdslb.com/bfs/live/b5bed732d5055215344dd93e7da386d4e6b1dc4e.gif","https://i0.hdslb.com/bfs/live/9476f56e8b82fdc953e6635cb2d14eb8692472c2.webp")], [31214, new o("牛哇","是真的牛！！",1,1,"https://s1.hdslb.com/bfs/live/b8a38b4bd3be120becddfb92650786f00dffad48.png","https://i0.hdslb.com/bfs/live/b8a38b4bd3be120becddfb92650786f00dffad48.png","https://i0.hdslb.com/bfs/live/ab9e8b9868c0ae4a0ab429a11e65ee58a1053cb2.gif","https://i0.hdslb.com/bfs/live/419bf4e5bd6fb4e1185fb73a466c6c884d0f2ba2.webp")], [31480, new o("B坷垃","主播吃了B坷垃，吸收方圆百里人气值——American SHENGDIYAGE",1,99,"https://s1.hdslb.com/bfs/live/cc8bfcbc24c8b65937f62ce0d16b31ab987dce47.png","https://i0.hdslb.com/bfs/live/cc8bfcbc24c8b65937f62ce0d16b31ab987dce47.png","https://i0.hdslb.com/bfs/live/ae2d28fabcd773869d954e780f5c1252ec07ea47.gif","https://i0.hdslb.com/bfs/live/ad01f5b786fa6272adf0e985576b20a93ea11c6c.webp")], [31157, new o("告白花束","送你一束花花",1,220,"https://s1.hdslb.com/bfs/live/c313057cf96513db2374a2acd64801af176009a2.png","https://i0.hdslb.com/bfs/live/c313057cf96513db2374a2acd64801af176009a2.png","https://i0.hdslb.com/bfs/live/50cb25ea89426296fd174a8e8a24ed3bb8870f8e.gif","https://i0.hdslb.com/bfs/live/1bca516b95fa878407e96c640567221a74f8cadf.webp")], [31639, new o("告白气球","被风吹到了你那边~",1,10,"https://s1.hdslb.com/bfs/live/acaebc2e2b6efa5c2b84502c7bd0296f7f940d3f.png","https://i0.hdslb.com/bfs/live/8aa2484edba0b6654ec4ad0c9b2f530277c04480.png","https://i0.hdslb.com/bfs/live/ffe76ca12e5731a561eb3921aed2c8e6e437f3b1.gif","https://i0.hdslb.com/bfs/live/0b5e4c99b86de5179a02001fc73d29d74afd9da9.webp")], [31294, new o("冰晶城堡","冰雪赏专属礼物",1,4500,"https://s1.hdslb.com/bfs/live/4a6970c6f89f1c80556f7dd46459b0b2385a95f5.png","https://i0.hdslb.com/bfs/live/f0fb11cdbc7a69fe9b1dceeb00e2c9911a60793e.png","https://i0.hdslb.com/bfs/live/5bd99f524fd9e371382545f5dcc6d143aca607b5.gif","https://i0.hdslb.com/bfs/live/b49b90def2b5b2abc38797e4e63205736fe676f5.webp")], [31207, new o("打call","",1,1,"https://s1.hdslb.com/bfs/live/f75291a0e267425c41e1ce31b5ffd6bfedc6f0b6.png","https://i0.hdslb.com/bfs/live/a58a69ecf188e6a690eb731815d3afb4366145eb.png","https://i0.hdslb.com/bfs/live/72d357629310c27cf375e9e049390bb44af11b6e.gif","https://i0.hdslb.com/bfs/live/7dad99cce8772d1045dec6916a55642491989819.webp")], [31091, new o("天空之翼","光翼展开！Biu！",1,1e3,"https://s1.hdslb.com/bfs/live/75a9a524ad73ce8d7bf47d9e9d61e6378fe69b1b.png","https://i0.hdslb.com/bfs/live/7df45e822082c99653a9208e915a2de446ff6ff9.png","https://i0.hdslb.com/bfs/live/b5bed732d5055215344dd93e7da386d4e6b1dc4e.gif","https://i0.hdslb.com/bfs/live/9476f56e8b82fdc953e6635cb2d14eb8692472c2.webp")], [31802, new o("心跳回忆","属于你和我的独家记忆…",-1,0,"https://s1.hdslb.com/bfs/live/e0420cd92e8ed0cba893d88044b505a899678d25.png","https://i0.hdslb.com/bfs/live/c0909fbacd915d3674bdd5601a533670ade4d9f7.png","https://i0.hdslb.com/bfs/live/c8c1e3c88defb252b45834905b9883dfa5ef3742.gif","https://i0.hdslb.com/bfs/live/adf3e5da5d32954bd5be258d9a62120cbebdcedf.webp")], [31816, new o("打榜","☆为你爆灯！日夜不分！",1,20,"https://s1.hdslb.com/bfs/live/5229d18f65faca325a6e9cc26277624df9c8878a.png","https://i0.hdslb.com/bfs/live/5229d18f65faca325a6e9cc26277624df9c8878a.png","https://i0.hdslb.com/bfs/live/6daf9c9f30b6270dd32cb6a69013bc399d4f6551.gif","https://i0.hdslb.com/bfs/live/7ce695a583ec9462683feac61b6acdcb71a00758.webp")], [31940, new o("首饰盒","BLS秋季赛活动道具",1,200,"https://s1.hdslb.com/bfs/live/cad9c8c72b14dc32e816af3c467b6f201e948a8d.png","https://i0.hdslb.com/bfs/live/1465b5392cb0ff1d58d77346783b4fa9095237c6.png","https://i0.hdslb.com/bfs/live/c8fa8b846909ffacdff571a3aec1b81f95ec54b2.gif","https://i0.hdslb.com/bfs/live/158578ef92140f37b47f8493ec99e08d27911c65.webp")], [31852, new o("夏日舞台","",1,400,"https://s1.hdslb.com/bfs/live/8cf6217cd567248e2df5529817c0a23cfa22b88c.png","https://i0.hdslb.com/bfs/live/8cf6217cd567248e2df5529817c0a23cfa22b88c.png","https://i0.hdslb.com/bfs/live/d465b6199a4178f86a4bbe59f403f93d110b6af7.gif","https://i0.hdslb.com/bfs/live/a17db470b475c628833e90db1447df2721c94add.webp")], [31872, new o("粉玫瑰","送你一朵小花花，每天都要开心呀！",1,40,"https://s1.hdslb.com/bfs/live/66d4f09ee8732b8cbe51fe9b28ba34dc275d9226.png","https://i0.hdslb.com/bfs/live/d09b8e734a616b097b0683996107725e08b83b3e.png","https://i0.hdslb.com/bfs/live/416c48d733de4fb4d4eb44f151f91bdadb1865b3.gif","https://i0.hdslb.com/bfs/live/6e82dcb63b2b927ae8f48959996d62f5bcd95a95.webp")], [31871, new o("智慧之书","打开它！你就能拥有无边的智慧！",1,110,"https://s1.hdslb.com/bfs/live/f0d0cbdd63973172ee22536546462a39988ed9d9.png","https://i0.hdslb.com/bfs/live/f0d0cbdd63973172ee22536546462a39988ed9d9.png","https://i0.hdslb.com/bfs/live/d645602be49f06d780aade24437cffd8b7f10aa9.gif","https://i0.hdslb.com/bfs/live/36f10c0a7b47e55628e0cddd75c26735ff17386a.webp")], [31846, new o("为你颁奖","",1,6660,"https://s1.hdslb.com/bfs/live/6d6ff37b04acf3c4195cb8a7b24084bdc5cfa625.png","https://i0.hdslb.com/bfs/live/6d6ff37b04acf3c4195cb8a7b24084bdc5cfa625.png","https://i0.hdslb.com/bfs/live/8b1f3186c7cc2f0ce4da4b7a32fe7c58c4bd872c.gif","https://i0.hdslb.com/bfs/live/4850977081ca850b07c47b54eba249738a97a657.webp")], [31933, new o("为你摘星","心中有日月，手可摘星辰",1,5200,"https://s1.hdslb.com/bfs/live/5bd584b6fdfb03d66de56102e775582fb29ceab7.png","https://i0.hdslb.com/bfs/live/5bd584b6fdfb03d66de56102e775582fb29ceab7.png","https://i0.hdslb.com/bfs/live/8ecff2500645fbb60c4bac3cd66fa37c844297d0.gif","https://i0.hdslb.com/bfs/live/ed0d6f2d2945f5184c45b72f17cbaf9628ff05dd.webp")], [31844, new o("梦游仙境","想与你一同踏入仙境，看遍瑰丽风景",1,3e3,"https://s1.hdslb.com/bfs/live/88a338dbe644473c800e4cde1306d923be350e94.png","https://i0.hdslb.com/bfs/live/827e77dfdd0d2de603dc52a6eb5972d8c3daf3f4.png","https://i0.hdslb.com/bfs/live/3897ba4fbc2e590651620fa1275f0994b92b8919.gif","https://i0.hdslb.com/bfs/live/6955a8ca060099676490995de7e400c393b90ca2.webp")], [31932, new o("梦游仙境","想与你一同踏入仙境，看遍瑰丽风景",1,3e3,"https://s1.hdslb.com/bfs/live/88a338dbe644473c800e4cde1306d923be350e94.png","https://i0.hdslb.com/bfs/live/827e77dfdd0d2de603dc52a6eb5972d8c3daf3f4.png","https://i0.hdslb.com/bfs/live/3897ba4fbc2e590651620fa1275f0994b92b8919.gif","https://i0.hdslb.com/bfs/live/6955a8ca060099676490995de7e400c393b90ca2.webp")], [31818, new o("金币","叮~你获得金币x1！",1,6,"https://s1.hdslb.com/bfs/live/27f5f308033897e727073b35967d634a9703cc3b.png","https://i0.hdslb.com/bfs/live/27f5f308033897e727073b35967d634a9703cc3b.png","https://i0.hdslb.com/bfs/live/79358780ea7a32028d4727d95576c1ea153fee51.gif","https://i0.hdslb.com/bfs/live/bbc1a0fa4924a644c861cc39e30e38d84fe219d0.webp")], [31817, new o("泡泡糖","吹一个大泡泡！",1,11,"https://s1.hdslb.com/bfs/live/322867d00ab5572ba0c5594ca35f4ed54688a480.png","https://i0.hdslb.com/bfs/live/7298f6597b3be2ade2ae964a03c0b6d83350f847.png","https://i0.hdslb.com/bfs/live/150bf2fc23281b1857676e94550b9a767a5d30fa.gif","https://i0.hdslb.com/bfs/live/54dea226fcf20ea43e24d36001ea83a4b0cd7b7f.webp")], [31814, new o("缘定三生","缘定三生，约同白首",1,5200,"https://s1.hdslb.com/bfs/live/88ac5c2aeb70d87f1bc948a71c8ea7582a53ca22.png","https://i0.hdslb.com/bfs/live/f8e3eb20372b76cd1e57dc1c8a448c0616eaeedb.png","https://i0.hdslb.com/bfs/live/b3cd1e79c5596ff4bbe604187b7bf41078017646.gif","https://i0.hdslb.com/bfs/live/e8165711c8d5c6bab28712b5de70968cf365db47.webp")], [30272, new o("柠檬茶","为素人向前冲+10热力值",1,10,"https://s1.hdslb.com/bfs/live/8d14183ba874126a63dcd539b7657da3cd7b126e.png","https://i0.hdslb.com/bfs/live/8d14183ba874126a63dcd539b7657da3cd7b126e.png","https://i0.hdslb.com/bfs/live/dc56d776e49518a37830a0f4463d67971f891441.gif","https://i0.hdslb.com/bfs/live/4a1e000dd82e3dbcaecfe0e4a8429b9ca1a6ddf5.webp")], [31874, new o("冰阔落","大锅，霍冰阔落！",1,10,"https://s1.hdslb.com/bfs/live/080753229f6069d1f9c33026b455c9035d0d6ec0.png","https://i0.hdslb.com/bfs/live/4f637f73faa6476abd300ccb5113993affb8e621.png","https://i0.hdslb.com/bfs/live/ef144e1910c5dfa20ab8683b352379162d4e7228.gif","https://i0.hdslb.com/bfs/live/b01e128fa4ab6218943c468ae24168feffb7c337.webp")], [31876, new o("幻乐之声","命运的守护者，为你奏起永恒的歌~",1,2e3,"https://s1.hdslb.com/bfs/live/d1e565ddf74335ae7ad7331d68633257294f3b5f.png","https://i0.hdslb.com/bfs/live/e0f8938fe2a833fa58b82f23b385109c82907431.png","https://i0.hdslb.com/bfs/live/c6980b66a0444545a272efbd1005b86f944217b9.gif","https://i0.hdslb.com/bfs/live/42ea1b2c7d668e091cc3f1896cf2cf0271b4ea05.webp")], [31842, new o("美梦成真","捕梦网留住美梦，把捕获的力量和幸运传递给你",1,399,"https://s1.hdslb.com/bfs/live/b5aa29527e8b39d5d932bc15c5a8804933ca1afd.png","https://i0.hdslb.com/bfs/live/b5aa29527e8b39d5d932bc15c5a8804933ca1afd.png","https://i0.hdslb.com/bfs/live/6e4fe199ed65c9ea4f29ea7738c4139fb0c3f718.gif","https://i0.hdslb.com/bfs/live/7976d5e81bbacad3275514319431845481f25f7e.webp")], [31026, new o("白银宝盒","宝盒福利",1,10,"https://s1.hdslb.com/bfs/live/9219374a3655fea72d57da2d2bb25c6471e64bbb.png","https://i0.hdslb.com/bfs/live/9219374a3655fea72d57da2d2bb25c6471e64bbb.png","https://i0.hdslb.com/bfs/live/d28a24b03bf0608ccd906d655c4932fa2835e1a7.gif","https://i0.hdslb.com/bfs/live/fd1d1be20bbdfef70220e1d789e12535de7702a3.webp")], [31954, new o("海洋之心","伴随泰坦尼克号一起沉入海底的绝世珍宝～",1,29990,"https://s1.hdslb.com/bfs/live/431af546e261a4d6f9a74483ace3fd4986d2cb19.png","https://i0.hdslb.com/bfs/live/431af546e261a4d6f9a74483ace3fd4986d2cb19.png","https://i0.hdslb.com/bfs/live/3c912ab54dc85d736ca1353bdd3f99028341885c.gif","https://i0.hdslb.com/bfs/live/49b14e056066d04e4ce8e2d74872faa70799d141.webp")], [31944, new o("D言D语","疯狂产出一波来自DD的夸夸弹幕！！",1,330,"https://s1.hdslb.com/bfs/live/8b0ec105c99a11649291c385d235db5935d72184.png","https://i0.hdslb.com/bfs/live/8b0ec105c99a11649291c385d235db5935d72184.png","https://i0.hdslb.com/bfs/live/13987286ab33ac0ba79c8678f815f8a8fed2a588.gif","https://i0.hdslb.com/bfs/live/9bc9a5e03e7c33d386a1e8f5ad3bbf25b5033789.webp")], [30613, new o("夏日水枪","在沙滩上，当然要尽情玩耍啦！",1,52,"https://s1.hdslb.com/bfs/live/7e754caeca528b0ca2234769ce0275eb6894ec3d.png","https://i0.hdslb.com/bfs/live/7e754caeca528b0ca2234769ce0275eb6894ec3d.png","https://i0.hdslb.com/bfs/live/84a27e2ad1a82aa6ff8e7b9e253baac201a21b1c.gif","https://i0.hdslb.com/bfs/live/306f9644c857e37f5a3a4ef0300bb0860e563aaa.webp")], [31875, new o("加油喵","",1,1e3,"https://s1.hdslb.com/bfs/live/2090d88c508d47e0670bec57d9126e576d998c34.png","https://i0.hdslb.com/bfs/live/0db6616b4f17dbd1a9743f30996e35e7012cbc76.png","https://i0.hdslb.com/bfs/live/1df52a9b0a659041937109ff80209d8c2ed559c7.gif","https://i0.hdslb.com/bfs/live/ea274c736ad65785ba6984e610844edfceff42a0.webp")], [31873, new o("唱片计划","",1,400,"https://s1.hdslb.com/bfs/live/a3988bd40dc03348cf82e50a64b22cdb48908294.png","https://i0.hdslb.com/bfs/live/a3988bd40dc03348cf82e50a64b22cdb48908294.png","https://i0.hdslb.com/bfs/live/5a8e6bc5e3346804505412c2eee507fae83e3bcc.gif","https://i0.hdslb.com/bfs/live/053cc4dc134e47ec7cb495c8c1e88e1470e3d107.webp")], [31843, new o("许愿精灵","向小精灵许下最真挚的心愿，就一定会实现",1,888,"https://s1.hdslb.com/bfs/live/a02afd18fc93670e9adb6da42675bb5aba92c587.png","https://i0.hdslb.com/bfs/live/a02afd18fc93670e9adb6da42675bb5aba92c587.png","https://i0.hdslb.com/bfs/live/d4665d90fa7e2af5946d508dc85cc2e29251bf75.gif","https://i0.hdslb.com/bfs/live/8539e0a42af421291122e1fe68c6e20704164f10.webp")], [31891, new o("明灯相伴","明灯相伴，月圆情长",1,3600,"https://s1.hdslb.com/bfs/live/6202e06e508be43631eedfab151184ae6c538e0f.png","https://i0.hdslb.com/bfs/live/6202e06e508be43631eedfab151184ae6c538e0f.png","https://i0.hdslb.com/bfs/live/8c04c0d15b1fbc787845323fffa0819c35540bd4.gif","https://i0.hdslb.com/bfs/live/3b3331f9038b7b00e054ae14b6040dd0ce449a89.webp")], [31828, new o("疯狂应援","",1,100,"https://s1.hdslb.com/bfs/live/8268cb362534123e1f5f5650accb3c3256b94db5.png","https://i0.hdslb.com/bfs/live/347596a89910a0e613cb9cefe6bf20a0ec4b315c.png","https://i0.hdslb.com/bfs/live/061393d5a86eeb4c1eb0c25d5cd86d6a003aa377.gif","https://i0.hdslb.com/bfs/live/7e013ccf09590ee03c55cb0d929337aae3662fff.webp")], [31924, new o("狂欢派对","",1,2e3,"https://s1.hdslb.com/bfs/live/2c1a076a2d60d9a0b6fbe387670e06450d931d35.png","https://i0.hdslb.com/bfs/live/103a016eff945ea530020fe029f5201b6de6fdd6.png","https://i0.hdslb.com/bfs/live/9f79751911ed32887c45dce7b5525fb448264acf.gif","https://i0.hdslb.com/bfs/live/914443a9d67bada1fd7fcf2f6805eeec655f7e05.webp")], [31925, new o("时空隧道","BLS秋季赛活动道具",1,1e3,"https://s1.hdslb.com/bfs/live/92758063dddbcba1d8b77652ffa7ba8093363545.png","https://i0.hdslb.com/bfs/live/90f95842fae9f4b5130645a792b6ab75cc90b93f.png","https://i0.hdslb.com/bfs/live/ae572c5b6aa065d92a7722ae06722e4b5eb243b0.gif","https://i0.hdslb.com/bfs/live/57c0bb530b620633833f81432c5f42af023936ed.webp")], [31953, new o("啵啵奶茶","喝完这杯再减肥！",1,170,"https://s1.hdslb.com/bfs/live/ec4a6a16e3b67bab9c79f926dbe11c1a3b5306d2.png","https://i0.hdslb.com/bfs/live/ec4a6a16e3b67bab9c79f926dbe11c1a3b5306d2.png","https://i0.hdslb.com/bfs/live/4b47f7d193b3e000039eb3fd895f1895fb8ea346.gif","https://i0.hdslb.com/bfs/live/582de0856c6f0791f3bd8b63194fc7f21906f315.webp")], [31926, new o("花式夸夸","疯狂产出一波夸夸弹幕！！",1,330,"https://s1.hdslb.com/bfs/live/ce0efeceae7054d1ee835864eace28f08a54a37d.png","https://i0.hdslb.com/bfs/live/ce0efeceae7054d1ee835864eace28f08a54a37d.png","https://i0.hdslb.com/bfs/live/e3ca71756fd0e6edf885bbcb2ccaf7f58d46738a.gif","https://i0.hdslb.com/bfs/live/8f1b36c1ea16ed413de2d29559493ce85157978d.webp")], [31815, new o("时空飞车","",1,1e3,"https://s1.hdslb.com/bfs/live/9786f2a361609f97a9cb207c5b8cb82a2fc4db1a.png","https://i0.hdslb.com/bfs/live/8ec019db48803f7fac243dcdef507469f476f39c.png","https://i0.hdslb.com/bfs/live/4526e4f433d623231d7eaf3b49d52a49a956bfe6.gif","https://i0.hdslb.com/bfs/live/98fb79f1223ee3a248f6008d4f2d72cfec690650.webp")], [31922, new o("风吹麦浪","BLS秋季赛活动道具",1,400,"https://s1.hdslb.com/bfs/live/e54bb5afcaf1f732616abbef03bc6a69f32215ae.png","https://i0.hdslb.com/bfs/live/eed3f3923c5af22836638c8a356e7d63ef30d2e3.png","https://i0.hdslb.com/bfs/live/cd4f4b5705317f0e17571df54587cf7549d671f3.gif","https://i0.hdslb.com/bfs/live/52717a20cfdc0877f05ca01338842d0b42c0d8c3.webp")], [31883, new o("璀璨烟火","当烟花骤然绽放，璀璨了整个夜空",1,1314,"https://s1.hdslb.com/bfs/live/e04015f28791688f499f207aa83928aceebd0b7d.png","https://i0.hdslb.com/bfs/live/e04015f28791688f499f207aa83928aceebd0b7d.png","https://i0.hdslb.com/bfs/live/071b34615dbc3188944799afedf74e51e14be5dc.gif","https://i0.hdslb.com/bfs/live/97ea868bb6fb2fa326054a1149b0c8df2ed91c5f.webp")], [31853, new o("出道盛典","",1,1e3,"https://s1.hdslb.com/bfs/live/deb9ed69c34a5f58b1932b4f996df606b1385a91.png","https://i0.hdslb.com/bfs/live/deb9ed69c34a5f58b1932b4f996df606b1385a91.png","https://i0.hdslb.com/bfs/live/ae1e012add6f2f925deb750b6faccbd9a9078d78.gif","https://i0.hdslb.com/bfs/live/6496f84ebe71356bcb3d061fda0338a70dfed695.webp")], [31942, new o("月光银簪","BLS秋季赛活动道具",1,688,"https://s1.hdslb.com/bfs/live/28b73b9f5bd0bf0cd8ea8be79cb708ebf3c8754d.png","https://i0.hdslb.com/bfs/live/28b73b9f5bd0bf0cd8ea8be79cb708ebf3c8754d.png","https://i0.hdslb.com/bfs/live/1f4f539b0b7506c82f5ca8e03e5c6339cd28d37f.gif","https://i0.hdslb.com/bfs/live/c94220c221c0b576c2c086aa657554e0e97b477a.webp")], [32054, new o("祈愿天灯","中秋活动道具",1,6666,"https://s1.hdslb.com/bfs/live/43a28429f3c845db51e4e711b2dac7251b62f808.png","https://i0.hdslb.com/bfs/live/a3a852b80c482d732fe87b12626cd3b9b6e535a3.png","https://i0.hdslb.com/bfs/live/edee3d0e04cddb5e2d5883c12c1e75d423db5bca.gif","https://i0.hdslb.com/bfs/live/a66e248ff2df4811016ee489a2d54dd537fca001.webp")], [32053, new o("嫦娥派福","中秋活动道具",1,6666,"https://s1.hdslb.com/bfs/live/ca6de778101ea90a19446849cf97dff2202cc748.png","https://i0.hdslb.com/bfs/live/9e53216ef5c9da01b40b1ad9695653ef5e5dde9f.png","https://i0.hdslb.com/bfs/live/0c18fec29cf42c7e077a96d441a08ef5b95bf842.gif","https://i0.hdslb.com/bfs/live/12dc48e8fa5e97c345d7449059d11aa918f3ad30.webp")], [32067, new o("深海明珠","",1,266,"https://s1.hdslb.com/bfs/live/6dfae7f4328394fbca8c5a2c0d1e5ff2de05a5d3.png","https://i0.hdslb.com/bfs/live/7db5f2fd71bef963832e539c59a05db4b724109a.png","https://i0.hdslb.com/bfs/live/29a79fb8c184db32c48794757878ca5687023a8a.gif","https://i0.hdslb.com/bfs/live/d4c1d0a8754c0763167a3fcd2586be3b56c294f8.webp")], [31939, new o("蝶恋花","BLS秋季赛活动道具",1,1990,"https://s1.hdslb.com/bfs/live/06d8e7727afce5b8ebc218fceb8a2cbdae412620.png","https://i0.hdslb.com/bfs/live/3db13401758517b9ca00bdb20aefb4b93bdbb8d5.png","https://i0.hdslb.com/bfs/live/f95ef1916cc9b5559cd9b2458338802baa1529bf.gif","https://i0.hdslb.com/bfs/live/01e95cf1c09dd317c9543f55e095854a17700e9f.webp")], [32052, new o("星河月","中秋活动道具",1,1111,"https://s1.hdslb.com/bfs/live/3319f9976c27177151b786a6f7c22a600c79a6bd.png","https://i0.hdslb.com/bfs/live/213ce374559e98d14132f9c1b192f8fbb4cf1aec.png","https://i0.hdslb.com/bfs/live/28948f0ef6009ad71a4d3eb7d7085c226fcb8428.gif","https://i0.hdslb.com/bfs/live/26def7d0fd35eff8a8720fc05190e8a3acc0d71a.webp")], [32075, new o("情书","山有木兮木有枝，心悦君兮君不知",1,52,"https://s1.hdslb.com/bfs/live/0da8e5e88675740baa7d202ff887faa80d2c2736.png","https://i0.hdslb.com/bfs/live/0da8e5e88675740baa7d202ff887faa80d2c2736.png","https://i0.hdslb.com/bfs/live/85872855e9b718168ed1e94d7bc9aec36a8f7c67.gif","https://i0.hdslb.com/bfs/live/e9a574947740617a907184e8e4d6792aa571ca32.webp")], [31545, new o("金色星愿石","散发着金色光芒的神奇许愿宝石",1,450,"https://s1.hdslb.com/bfs/live/f3d6da728d61e777ece35816d5eaa344c3283fda.png","https://i0.hdslb.com/bfs/live/594a3496d4a25453211e4aacb11501afcf44bf19.png","https://i0.hdslb.com/bfs/live/8d521339fe0eb60b5c268a91a7d8d634132b8557.gif","https://i0.hdslb.com/bfs/live/63217a067f64fda4655b4a94de33027e6ee24ee7.webp")], [32058, new o("瓜瓜","真是顶呱呱！",1,15,"https://s1.hdslb.com/bfs/live/0b09ae3ae7f013c9321f83b54f54afec893f9bdb.png","https://i0.hdslb.com/bfs/live/0b09ae3ae7f013c9321f83b54f54afec893f9bdb.png","https://i0.hdslb.com/bfs/live/825005be3a9f84e4ffe172bf0d98f83fb2b17f9d.gif","https://i0.hdslb.com/bfs/live/18768822a70ab74afbb36ace3512c31c1c01cd8c.webp")], [31941, new o("画中人","BLS秋季赛活动道具",1,9990,"https://s1.hdslb.com/bfs/live/8eaad76d4ba6be2f613bdb3f4a62ffef278ced15.png","https://i0.hdslb.com/bfs/live/f48ff160489bb81761d1e92cf769c0cb0769c148.png","https://i0.hdslb.com/bfs/live/82ac45fc3f035f1f14c80a2bfb6ab6310a04c6df.gif","https://i0.hdslb.com/bfs/live/41424e17f8d03767ab7abb779bf1af9e926675a0.webp")], [32051, new o("月饼","中秋活动道具",1,10,"https://s1.hdslb.com/bfs/live/0c2f1bb9af762c029377351573aba6cf01da8c09.png","https://i0.hdslb.com/bfs/live/f2fd13d29329b23b680c78e96403291f9653bc2f.png","https://i0.hdslb.com/bfs/live/df22b4abee8a810763294934601aaf747bb2f164.gif","https://i0.hdslb.com/bfs/live/e239bbfe866261d2832b9f949c46cea871743f53.webp")], [31709, new o("幸运之钥","一把可以打开宝盒的钥匙",1,10,"https://s1.hdslb.com/bfs/live/019c3a78e1014cb9e48996dfd1eda040a4b835fa.png","https://i0.hdslb.com/bfs/live/019c3a78e1014cb9e48996dfd1eda040a4b835fa.png","https://i0.hdslb.com/bfs/live/3c0d7a463fc0ac2556193fa33ac4a340207caa1f.gif","https://i0.hdslb.com/bfs/live/8fc049a5e24594a0bb92d5763d1d2379d5b6b4eb.webp")], [32077, new o("告白花束","一束寄托了最美好心意的花",1,220,"https://s1.hdslb.com/bfs/live/c313057cf96513db2374a2acd64801af176009a2.png","https://i0.hdslb.com/bfs/live/78f9d11309e31227ffbb708ee3243a4a732be4e1.png","https://i0.hdslb.com/bfs/live/50cb25ea89426296fd174a8e8a24ed3bb8870f8e.gif","https://i0.hdslb.com/bfs/live/1bca516b95fa878407e96c640567221a74f8cadf.webp")], [32079, new o("祈愿天灯","中秋活动道具",1,6666,"https://s1.hdslb.com/bfs/live/43a28429f3c845db51e4e711b2dac7251b62f808.png","https://i0.hdslb.com/bfs/live/a3a852b80c482d732fe87b12626cd3b9b6e535a3.png","https://i0.hdslb.com/bfs/live/edee3d0e04cddb5e2d5883c12c1e75d423db5bca.gif","https://i0.hdslb.com/bfs/live/a66e248ff2df4811016ee489a2d54dd537fca001.webp")], [32068, new o("小电视飞船","小电视精心打造的顶级飞船已启航！一起感受超越时空的星际之旅~",1,29990,"https://s1.hdslb.com/bfs/live/3207208726805a14bced02f07c1e2b6a00a7ba10.png","https://i0.hdslb.com/bfs/live/5f876bd8de2e95aecc234df4d4f6ab8293fb35c1.png","https://i0.hdslb.com/bfs/live/84ce85b830e5e2e43f98b4b59d197884f9b3ad54.gif","https://i0.hdslb.com/bfs/live/8623e0f5e3e1a5ff90d0d55cb745d08f664df5e1.webp")], [32076, new o("干杯","和你一起举起回忆酿的甜，再干一杯！",1,66,"https://s1.hdslb.com/bfs/live/24fedc222b5c5d024afcff630775202c9eb3bc93.png","https://i0.hdslb.com/bfs/live/24fedc222b5c5d024afcff630775202c9eb3bc93.png","https://i0.hdslb.com/bfs/live/2adadde008050d0b36b493fd45b8fc89a07c7698.gif","https://i0.hdslb.com/bfs/live/817e0ef58cee5aa5b143459c46c8ab288da5db25.webp")], [32059, new o("新小电视飞船","",1,1,"https://s1.hdslb.com/bfs/live/3207208726805a14bced02f07c1e2b6a00a7ba10.png","https://i0.hdslb.com/bfs/live/5f876bd8de2e95aecc234df4d4f6ab8293fb35c1.png","https://i0.hdslb.com/bfs/live/84ce85b830e5e2e43f98b4b59d197884f9b3ad54.gif","https://i0.hdslb.com/bfs/live/8623e0f5e3e1a5ff90d0d55cb745d08f664df5e1.webp")], [31938, new o("银杏赛都","BLS秋季赛活动道具",1,1880,"https://s1.hdslb.com/bfs/live/8a1fca7a547538cb01fdc41f69d404c06af981e5.png","https://i0.hdslb.com/bfs/live/86899f08ea873ec5e6b9c496686b2c91c53b6c8f.png","https://i0.hdslb.com/bfs/live/106ea45e16240a33d69d3f87bdf264e7ee499a55.gif","https://i0.hdslb.com/bfs/live/0a1c90777a2224e564e0ba0f40a2f346ddf79228.webp")], [31544, new o("银色星愿石","散发着银色光芒的神奇许愿宝石",1,300,"https://s1.hdslb.com/bfs/live/cd8b5978a10c2c6d862208bdc151ddce38eb4789.png","https://i0.hdslb.com/bfs/live/934eb945dfd4d1f19ca1dd698776df28a4a68f82.png","https://i0.hdslb.com/bfs/live/b898a891686595ce93a8ca059244d3101eea88a2.gif","https://i0.hdslb.com/bfs/live/48b4a5497ab08a2c1406f3c8b28d462026d711fc.webp")], [31088, new o("为你加冕","今日起，加冕为王",1,4500,"https://s1.hdslb.com/bfs/live/8be43b333053bd7e6fe8ad87e8bf013e4c1b3225.png","https://i0.hdslb.com/bfs/live/8be43b333053bd7e6fe8ad87e8bf013e4c1b3225.png","https://i0.hdslb.com/bfs/live/9bdfa4e4fa475edc758aea8e402f6427c7bd371c.gif","https://i0.hdslb.com/bfs/live/ad21781943cd8c46cd6c287f6961607a56334e6f.webp")], [30727, new o("盛典门票","BLS秋季赛活动道具",1,20,"https://s1.hdslb.com/bfs/live/04de0912c1ef77709c73102bfad97370e9948d02.png","https://i0.hdslb.com/bfs/live/a4a3a6a6b9e8ec53394500b2e9d4cce38d4b5325.png","https://i0.hdslb.com/bfs/live/f14b56faddef54e73ab057bdd458e440f63c1e71.gif","https://i0.hdslb.com/bfs/live/949277dde355bd369f8ed718a7572d881ca336c6.webp")], [32055, new o("冲鸭","一起加油，一起冲！",1,99,"https://s1.hdslb.com/bfs/live/f8cd58460df456a6bc71ce9a7e53816f3110a133.png","https://i0.hdslb.com/bfs/live/3deeea01c51a05c977bb76060acad9d4c6aa8fba.png","https://i0.hdslb.com/bfs/live/bf8194bc7bd2d7cd21688c5d6d5a004eba552f28.gif","https://i0.hdslb.com/bfs/live/21b60df59598bdba9062b3740da52e2819228c77.webp")], [31937, new o("逐梦之城","BLS秋季赛骑士团专属道具",1,12e3,"https://s1.hdslb.com/bfs/live/598f92110d97eba904ec479a9750b532b1c3ef10.png","https://i0.hdslb.com/bfs/live/3d60cc98a7858b12b3634b496e22d2d58cc3ee87.png","https://i0.hdslb.com/bfs/live/a2e16366a07d26a13c873e2485761b117fa0a653.gif","https://i0.hdslb.com/bfs/live/7051ee0c76e2a634d8e6e7cb9ee766af32bb03d8.webp")], [32080, new o("打call","想要给你最极致的应援",1,5,"https://s1.hdslb.com/bfs/live/79b6d0533fc988f2800fc5bb4fe3722c825f746f.png","https://i0.hdslb.com/bfs/live/79b6d0533fc988f2800fc5bb4fe3722c825f746f.png","https://i0.hdslb.com/bfs/live/72d357629310c27cf375e9e049390bb44af11b6e.gif","https://i0.hdslb.com/bfs/live/7dad99cce8772d1045dec6916a55642491989819.webp")], [20010, new o("凉了","一曲凉凉，送给你~",1,1,"https://s1.hdslb.com/bfs/live/de8da30ef3b893fc2313be73d2ffb08bdbd3845d.png","https://i0.hdslb.com/bfs/live/23683d7df7771052b14f54e41d7183c255bd93ed.png","https://i0.hdslb.com/bfs/live/4bd75d176e44108898b4f210f88a4eaab2611798.gif","https://i0.hdslb.com/bfs/live/af28111004e65bd53f651c6582f83e7e80a52ed8.webp")], [32057, new o("快乐水","无法拒绝的快乐魔法～",1,20,"https://s1.hdslb.com/bfs/live/12108463ababa5afcf3a26ce4bd97f6e8fb4ab3d.png","https://i0.hdslb.com/bfs/live/e78c692e3606083ec01b837d969b752169dc1094.png","https://i0.hdslb.com/bfs/live/cb9f4af574a7e34adbaf8adbb70154848226b878.gif","https://i0.hdslb.com/bfs/live/c16a52c07ca222163a0da77aa7b93a99fc9b9a55.webp")], [32078, new o("这个好诶","都 想 要 ",1,10,"https://s1.hdslb.com/bfs/live/3ddb10b055b9d1826829ec0fad93ab56484d4a90.png","https://i0.hdslb.com/bfs/live/3ddb10b055b9d1826829ec0fad93ab56484d4a90.png","https://i0.hdslb.com/bfs/live/898f8a734a60313295acf7144bd3fdb63e3ca196.gif","https://i0.hdslb.com/bfs/live/d39c9c5428ca145936a6e08430e8789f43f2a2ce.webp")], [31936, new o("启程","BLS秋季赛骑士团专属道具",1,2990,"https://s1.hdslb.com/bfs/live/035718621a534dfbc9bfdc15e63ebe365cc74d78.png","https://i0.hdslb.com/bfs/live/2bd47d026d344a822832193ac8372fec8567cd04.png","https://i0.hdslb.com/bfs/live/7e114fabfe6ff03da7bf06bef64b9a4c5eff6aa0.gif","https://i0.hdslb.com/bfs/live/88dde9b53c1b2864c07c22b87d494ea913261cca.webp")], [32056, new o("加鸡腿","加只鸡腿，烦恼拜拜",1,30,"https://s1.hdslb.com/bfs/live/4860ff8338ec74306bef78cde1a66940983c4096.png","https://i0.hdslb.com/bfs/live/24e5f087a1f9e8a57b1d7c351010c5753bf0a02b.png","https://i0.hdslb.com/bfs/live/e61d4bc0d51075d612768fa9efe8ee6250174b75.gif","https://i0.hdslb.com/bfs/live/126e4f43fe0276aeca86655f8223aa4793f4a507.webp")], [32090, new o("璀璨烟火","当烟花骤然绽放，璀璨了整个夜空",1,1314,"https://s1.hdslb.com/bfs/live/e04015f28791688f499f207aa83928aceebd0b7d.png","https://i0.hdslb.com/bfs/live/e04015f28791688f499f207aa83928aceebd0b7d.png","https://i0.hdslb.com/bfs/live/071b34615dbc3188944799afedf74e51e14be5dc.gif","https://i0.hdslb.com/bfs/live/97ea868bb6fb2fa326054a1149b0c8df2ed91c5f.webp")], [32087, new o("热气球","乘着热气球一同远行～",1,660,"https://s1.hdslb.com/bfs/live/ca4faaf9cec95d84e630edb893bc4a057ec85de2.png","https://i0.hdslb.com/bfs/live/ca4faaf9cec95d84e630edb893bc4a057ec85de2.png","https://i0.hdslb.com/bfs/live/7679950019e8ca27fa9b9fdc359594aa241eeb75.gif","https://i0.hdslb.com/bfs/live/930394ed6246998661c4245f83f325689fc3a8c2.webp")], [32088, new o("草莓蛋糕","幸福时刻，分享甜蜜",1,200,"https://s1.hdslb.com/bfs/live/0840da07719fc80076ed1d3a9069e444e3ae1310.png","https://i0.hdslb.com/bfs/live/0840da07719fc80076ed1d3a9069e444e3ae1310.png","https://i0.hdslb.com/bfs/live/150c888d5e42152b8206269223305180929abf37.gif","https://i0.hdslb.com/bfs/live/cad12eab78af7a1208ebb6c78e239f5f0388e028.webp")], [32089, new o("极速超跑","B站首款超跑闪亮登场！",1,2660,"https://s1.hdslb.com/bfs/live/27b9734d1a5f77ea6fc94957e3fcbeb55505c6b9.png","https://i0.hdslb.com/bfs/live/27b9734d1a5f77ea6fc94957e3fcbeb55505c6b9.png","https://i0.hdslb.com/bfs/live/02414f2a4c26f64c0f87e0e53176a0c0b4e22de1.gif","https://i0.hdslb.com/bfs/live/cb1f5d7663a2a3edb2012263b70282c6e5001953.webp")], [31943, new o("神游桂宫","BLS秋季赛活动道具",1,9990,"https://s1.hdslb.com/bfs/live/1d0f960fcbd03f01946cbd1f15f6db232b980e33.png","https://i0.hdslb.com/bfs/live/1d0f960fcbd03f01946cbd1f15f6db232b980e33.png","https://i0.hdslb.com/bfs/live/15f52abca7b08806ac26f8c84c32eaef15ea275c.gif","https://i0.hdslb.com/bfs/live/8e824bbdea4b0524f7ed3cce930d3b4a740cbfca.webp")], [32138, new o("飞了个盘","",1,420,"https://s1.hdslb.com/bfs/live/ec9051bb8451a2f1e3b6581401a79563c019f456.png","https://i0.hdslb.com/bfs/live/ec9051bb8451a2f1e3b6581401a79563c019f456.png","https://i0.hdslb.com/bfs/live/e71a135b2cbd5f738d9d134ebf8c9bb04cdc5e0d.gif","https://i0.hdslb.com/bfs/live/1cb0b9f0cd710eff9d08eb64fbef1b36b441cd4a.webp")], [31396, new o("风吟","霜叶季突围赛活动道具",1,10,"https://s1.hdslb.com/bfs/live/3507caa4e0db6fdacf57949ff345cfedf836c618.png","https://i0.hdslb.com/bfs/live/abcc288984e4ce481fa71b2222f1751cf76d55a8.png","https://i0.hdslb.com/bfs/live/5dbdddd1882141aff910d9f23137305bb0280076.gif","https://i0.hdslb.com/bfs/live/cf6f95d3bb565f47997d7ddba0dd398b96181e44.webp")], [32139, new o("耍帅必备","",1,520,"https://s1.hdslb.com/bfs/live/01047ed933ed5468b9e4ccff1d915d40f6d46f4d.png","https://i0.hdslb.com/bfs/live/01047ed933ed5468b9e4ccff1d915d40f6d46f4d.png","https://i0.hdslb.com/bfs/live/696009c1a9ac2a2b62ffbb7f55f7e20f70033946.gif","https://i0.hdslb.com/bfs/live/58bb29967731596b129276f3828239c24a45e2f4.webp")], [32072, new o("你最优雅","霜叶季突围赛活动道具",1,3330,"https://s1.hdslb.com/bfs/live/b07bb80aeac95f522e6fa3fe57e6505ff5245f03.png","https://i0.hdslb.com/bfs/live/b07bb80aeac95f522e6fa3fe57e6505ff5245f03.png","https://i0.hdslb.com/bfs/live/6a03624e4e3637c76bc580881c7c107bb6b97528.gif","https://i0.hdslb.com/bfs/live/6a41bea677b514199bf97231230b42b0796d161c.webp")], [32133, new o("璀璨钻石","",1,220,"https://s1.hdslb.com/bfs/live/a0031d70323d085203c57272758520fe95bfeec0.png","https://i0.hdslb.com/bfs/live/f658d3a97693da6e424b27587195e032dea3faa5.png","https://i0.hdslb.com/bfs/live/b43d62db6c2dab01da0911a66287e39e56340aeb.gif","https://i0.hdslb.com/bfs/live/aeca0105b38b1b5e6fc267e1395de31e64dd7a0e.webp")], [32071, new o("枫叶之王","霜叶季突围赛活动道具",1,6660,"https://s1.hdslb.com/bfs/live/c39a3607838b1bb9cc3245225928f9fd40985a04.png","https://i0.hdslb.com/bfs/live/c39a3607838b1bb9cc3245225928f9fd40985a04.png","https://i0.hdslb.com/bfs/live/d490fa3213b4eabd34ec684edc111126d5388aa5.gif","https://i0.hdslb.com/bfs/live/dd12d736f60b9bf68b44d4251becd978fb72034e.webp")], [32140, new o("浪漫手机","",1,660,"https://s1.hdslb.com/bfs/live/08dacdbc15dacd0cbb3b6765656029ddfe75c6f7.png","https://i0.hdslb.com/bfs/live/08dacdbc15dacd0cbb3b6765656029ddfe75c6f7.png","https://i0.hdslb.com/bfs/live/4b15e4ad7c233b465fe76def1e8056db34e2a117.gif","https://i0.hdslb.com/bfs/live/85f9624b5a877115517d222f2fd2b6be36009bf9.webp")], [32189, new o("千纸鹤","旅行大作战活动道具",-1,0,"https://s1.hdslb.com/bfs/live/66a74f564143bea605d6ee63ac2acb139fb3da35.png","https://i0.hdslb.com/bfs/live/66a74f564143bea605d6ee63ac2acb139fb3da35.png","https://i0.hdslb.com/bfs/live/182bda28abece0d758f4978b85781a8759443703.gif","https://i0.hdslb.com/bfs/live/f618b1bbe1fd0678fe132b0f978601bb9ddde245.webp")], [32166, new o("秋日来信","霜叶季突围赛活动道具",1,400,"https://s1.hdslb.com/bfs/live/828d7141a4f3eb8cb0c50f925624d6e44970008b.png","https://i0.hdslb.com/bfs/live/828d7141a4f3eb8cb0c50f925624d6e44970008b.png","https://i0.hdslb.com/bfs/live/683605e4a1b1615b82a6364d12f84c8b0b168cd6.gif","https://i0.hdslb.com/bfs/live/c6058677bf8b723ddcb468248754cec75dc858fa.webp")], [32135, new o("踏青日记","",1,330,"https://s1.hdslb.com/bfs/live/28e651ae1da4967f07797d1120209ecf80fe3e15.png","https://i0.hdslb.com/bfs/live/7b076b7e88165599b760aa80e1a0139dbb72e97c.png","https://i0.hdslb.com/bfs/live/d9393a859dd772c1b6e2d9978c7b682f4e7f6c44.gif","https://i0.hdslb.com/bfs/live/a92d3664cfc7e4611861e85e7cc13c8a11a729d8.webp")], [32108, new o("海洋之心","伴随泰坦尼克号一起沉入海底的绝世珍宝～",1,29990,"https://s1.hdslb.com/bfs/live/0fd8f4fb82c9715f19ba1eb07f4b89ed15e65ccd.png","https://i0.hdslb.com/bfs/live/65a893ae6f760762a029dbf072801dd51858d027.png","https://i0.hdslb.com/bfs/live/6de4aa422e84e65284ea53ac1ba072ce2649d197.gif","https://i0.hdslb.com/bfs/live/01af483130ea75f62069ef93275b95caed76df31.webp")], [32137, new o("乘风破浪","",1,280,"https://s1.hdslb.com/bfs/live/16fcd4af132bb7f34f5d2b23917448b689cfecf4.png","https://i0.hdslb.com/bfs/live/fff89c7349a3dcdbb9edfd5b6ece89816ae7381f.png","https://i0.hdslb.com/bfs/live/58bfe73934f53f0b474f843148cfe52baef041a0.gif","https://i0.hdslb.com/bfs/live/245536be0be278111a7487a3031303fa4812245a.webp")], [32122, new o("小电视飞船","小电视精心打造的顶级飞船已启航！一起感受超越时空的星际之旅~",1,29990,"https://s1.hdslb.com/bfs/live/3207208726805a14bced02f07c1e2b6a00a7ba10.png","https://i0.hdslb.com/bfs/live/5f876bd8de2e95aecc234df4d4f6ab8293fb35c1.png","https://i0.hdslb.com/bfs/live/84ce85b830e5e2e43f98b4b59d197884f9b3ad54.gif","https://i0.hdslb.com/bfs/live/8623e0f5e3e1a5ff90d0d55cb745d08f664df5e1.webp")], [32115, new o("咩咩羊","咩～",1,6,"https://s1.hdslb.com/bfs/live/a77d8e999c6a461c1e2fa32ce352cb6443f33fb6.png","https://i0.hdslb.com/bfs/live/a77d8e999c6a461c1e2fa32ce352cb6443f33fb6.png","https://i0.hdslb.com/bfs/live/39f9cde69c24f71aff9021ada14af84a88d51eaa.gif","https://i0.hdslb.com/bfs/live/6f52a7ca4a2b57af34b8798b9d8b54926e50d6d8.webp")], [32186, new o("保温杯","旅行大作战活动道具",1,170,"https://s1.hdslb.com/bfs/live/81bd0e42f383180ac69577bd5a0fd07bdc109f17.png","https://i0.hdslb.com/bfs/live/103776d109e7cb16228e524bddbc666ea1ada14e.png","https://i0.hdslb.com/bfs/live/3c441759b09b4b88e44c59989319834259123df2.gif","https://i0.hdslb.com/bfs/live/e6fe7a7981fdde8c813b29b9e32dad2c87d0a3d7.webp")], [32194, new o("能量棒","旅行大作战活动道具",1,66,"https://s1.hdslb.com/bfs/live/e439f0119f6babb5301b84be10a3b9615fe272cc.png","https://i0.hdslb.com/bfs/live/e439f0119f6babb5301b84be10a3b9615fe272cc.png","https://i0.hdslb.com/bfs/live/db1512edd1a662da9398bb5aba5dccf6094f651f.gif","https://i0.hdslb.com/bfs/live/26deb551b66c0d6bfcd45eb36e70bdb2c62d7533.webp")], [32165, new o("秋日列车","霜叶季突围赛活动道具",1,1e3,"https://s1.hdslb.com/bfs/live/4a6c84a92045550d7ff604d92fe3a917bab0ec1e.png","https://i0.hdslb.com/bfs/live/d91d77551e070404e7361303b9c03cd1ca2414ad.png","https://i0.hdslb.com/bfs/live/20e96bece82b1830d0c94597566dd89a4871759b.gif","https://i0.hdslb.com/bfs/live/cbb800edc90058838c7aa7535ea3512bb1a497be.webp")], [32136, new o("时光沙漏","",1,490,"https://s1.hdslb.com/bfs/live/2b578604640f0ab3bd24a3a9883367b5202811f6.png","https://i0.hdslb.com/bfs/live/2b578604640f0ab3bd24a3a9883367b5202811f6.png","https://i0.hdslb.com/bfs/live/80504adf56dcc7d5c361f7b2e54849648298fb24.gif","https://i0.hdslb.com/bfs/live/d2ed62a90a1bb0f2454a9bf7f06175c76a12c7e9.webp")], [32187, new o("豪华帐篷","旅行大作战活动道具",1,400,"https://s1.hdslb.com/bfs/live/9bcb3714c2337dc8c70528af1200539c4fa1f0af.png","https://i0.hdslb.com/bfs/live/9bcb3714c2337dc8c70528af1200539c4fa1f0af.png","https://i0.hdslb.com/bfs/live/2d626f47435aece0e2d372e930c425cf02f1c0d8.gif","https://i0.hdslb.com/bfs/live/85da64d24fb2613666f733bac50121a2644afb74.webp")], [32188, new o("私人飞机","旅行大作战活动道具",1,1e3,"https://s1.hdslb.com/bfs/live/635d4ffffaf36f59d83bebfa0b0a24b085e79a00.png","https://i0.hdslb.com/bfs/live/635d4ffffaf36f59d83bebfa0b0a24b085e79a00.png","https://i0.hdslb.com/bfs/live/078501f7d2005da66492863b11f2377b91de7255.gif","https://i0.hdslb.com/bfs/live/0d7faf51c139766865e942039426a84abb3713b7.webp")], [31878, new o("花式夸夸（闪光应援）","魅力舞台，炫彩装扮，浓浓爱意",1,396,"https://s1.hdslb.com/bfs/live/e1d6d496e99ae87b067d8993fe01c62f2162381c.png","https://i0.hdslb.com/bfs/live/0a32c03eb296c91296e6408aaac81633ca293d76.png","https://i0.hdslb.com/bfs/live/639e3ce34c1f8b76ba5baef970240aa6d0968223.gif","https://i0.hdslb.com/bfs/live/2b525017858b2e3b4ed289ca2221d551c649e76a.webp")], [31886, new o("璀璨烟火（好运相伴）","好运时时相伴，美好如期而至",1,1580,"https://s1.hdslb.com/bfs/live/6b86ec8bb39bf7f5792514782406f46f301830d4.png","https://i0.hdslb.com/bfs/live/da8495f104b13e76cce2c948a7e8fd1892fdceca.png","https://i0.hdslb.com/bfs/live/8bfaed97f039b982b77ff9066ea85d757699765f.gif","https://i0.hdslb.com/bfs/live/b2c0b45789e3468c8475b3234182fa232864f716.webp")], [32131, new o("花海兜风","",1,2e3,"https://s1.hdslb.com/bfs/live/f5338c819c2d1900daa104b5a59013d753af6f8d.png","https://i0.hdslb.com/bfs/live/f5338c819c2d1900daa104b5a59013d753af6f8d.png","https://i0.hdslb.com/bfs/live/c582c07c47ddc34c9cabd5155b16e20fb95e12d2.gif","https://i0.hdslb.com/bfs/live/903657ad0a2b41192d64e102e191d8fbc9dcb793.webp")], [32129, new o("烛光晚餐","",1,400,"https://s1.hdslb.com/bfs/live/99f253df777d1888120a973afc2192476f8b01aa.png","https://i0.hdslb.com/bfs/live/5c0acc299141e27830c5ee242a95a37224c0b833.png","https://i0.hdslb.com/bfs/live/d9baf9fe402df02ca33e5eed692bf0694110a11a.gif","https://i0.hdslb.com/bfs/live/97613056f9610d7f2d2bb227bda690d9701fe5f3.webp")], [32174, new o("冲冲冲","共同为S12加油助威！",1,666,"https://s1.hdslb.com/bfs/live/bf0890045bce6dcf2a5fe3d80810d7f68e01c309.png","https://i0.hdslb.com/bfs/live/bf0890045bce6dcf2a5fe3d80810d7f68e01c309.png","https://i0.hdslb.com/bfs/live/f625360abb86cee7a790c5ba83fc462038dabce9.gif","https://i0.hdslb.com/bfs/live/fbaf9b92fc85317ec26e8babd2b823f42557102a.webp")], [32202, new o("八音盒（萌萌兔）","小可爱～",1,800,"https://s1.hdslb.com/bfs/live/e4a2b1366cb9a44fefc47558204c47f97a951df7.png","https://i0.hdslb.com/bfs/live/e4a2b1366cb9a44fefc47558204c47f97a951df7.png","https://i0.hdslb.com/bfs/live/8737fcf76ae84cd3f718584c0020f5a5d8afc898.gif","https://i0.hdslb.com/bfs/live/2fe0a84040c967ebd8f4eccac1a9c0012cc1c4c5.webp")], [32126, new o("棉花糖","",1,90,"https://s1.hdslb.com/bfs/live/b555682af41551c28f8ad19dc5c4ed87943c84f4.png","https://i0.hdslb.com/bfs/live/b555682af41551c28f8ad19dc5c4ed87943c84f4.png","https://i0.hdslb.com/bfs/live/97652a724c610b3e7df2f49a4fc82769a4b0c062.gif","https://i0.hdslb.com/bfs/live/3dfb753065c967653dc35be1df85322188a88625.webp")], [32173, new o("勇往直前","共同为S12加油助威！",1,2022,"https://s1.hdslb.com/bfs/live/c464b7fb17cb8e074df1e141e2ca8f9960369af1.png","https://i0.hdslb.com/bfs/live/c464b7fb17cb8e074df1e141e2ca8f9960369af1.png","https://i0.hdslb.com/bfs/live/e47ea35c960136a347430a3040beaba851d850fc.gif","https://i0.hdslb.com/bfs/live/fa6b3ae5d6feb7d5a577f8417770123313c04d44.webp")], [32199, new o("爱的抱抱","给你爱的抱抱，陪你一直到老",1,520,"https://s1.hdslb.com/bfs/live/e32c4eb184728b70e2fa988eabb97c0c21f3d844.png","https://i0.hdslb.com/bfs/live/e32c4eb184728b70e2fa988eabb97c0c21f3d844.png","https://i0.hdslb.com/bfs/live/ce2c94ad191b628d2df5ac58576dc359f1e9ae91.gif","https://i0.hdslb.com/bfs/live/2a6b4d5dd628b20ae4aca31d1fa26f56f276f4ab.webp")], [31894, new o("明灯相伴（天长地久）","相伴相守，天长地久",1,4266,"https://s1.hdslb.com/bfs/live/f6b3a5bafddd81c00c002a44472fa6f3666a5af4.png","https://i0.hdslb.com/bfs/live/f6b3a5bafddd81c00c002a44472fa6f3666a5af4.png","https://i0.hdslb.com/bfs/live/ecea0d314a4f6e5f6c52b6cf1ba81b6be4b6d7ec.gif","https://i0.hdslb.com/bfs/live/e752ede70ba8724491a0d786b7981ccff3fe139a.webp")], [31892, new o("明灯相伴（称心如意）","日日称心，事事如意",1,4266,"https://s1.hdslb.com/bfs/live/e005c6803f98200e8029da8ff105b8e30f67f6a5.png","https://i0.hdslb.com/bfs/live/e005c6803f98200e8029da8ff105b8e30f67f6a5.png","https://i0.hdslb.com/bfs/live/ae0dbd60143af976612957150701c34da9e1a7d2.gif","https://i0.hdslb.com/bfs/live/775372d58286f52f1e025002f94461ed72e9ff7f.webp")], [32206, new o("鼠鼠来喽","由乃の小仓鼠定制礼物",1,16888,"https://s1.hdslb.com/bfs/live/3caea2f265aa625eda8071d8bb2b58e18ed801cc.png","https://i0.hdslb.com/bfs/live/5205927f6cdc556a0926b0ca8f2da473cb313c5a.png","https://i0.hdslb.com/bfs/live/7d56f4fdaf09c226672215988d436f7782349435.gif","https://i0.hdslb.com/bfs/live/4003675296c723fdab66fe0e05aba156699101dd.webp")], [32091, new o("极速超跑（火力全开）","全场焦点，夺目而出！",1,3020,"https://s1.hdslb.com/bfs/live/fb122b8fd3703037356d93ae565bae4feed0f3a6.png","https://i0.hdslb.com/bfs/live/fb122b8fd3703037356d93ae565bae4feed0f3a6.png","https://i0.hdslb.com/bfs/live/379add4d0468a8660b15da46ed71be866e984628.gif","https://i0.hdslb.com/bfs/live/6010e99a3b073800399a46de261d332435e890dd.webp")], [32130, new o("落日影院","",1,1e3,"https://s1.hdslb.com/bfs/live/33ede9a2b4bf9a33cf3d32e672dbfec4e9ff2308.png","https://i0.hdslb.com/bfs/live/33ede9a2b4bf9a33cf3d32e672dbfec4e9ff2308.png","https://i0.hdslb.com/bfs/live/e6ebdbaac843c2c78749f1cdb2d5053ebc0ba770.gif","https://i0.hdslb.com/bfs/live/b64a936e11eb9f73ef6340898f41d58dc581a0f1.webp")], [31885, new o("璀璨烟火（梦想成真）","祝福是最亮的光，守护你的梦想成真",1,1580,"https://s1.hdslb.com/bfs/live/86103c11995117d9c8f0ea816a4b45943a1b5759.png","https://i0.hdslb.com/bfs/live/86103c11995117d9c8f0ea816a4b45943a1b5759.png","https://i0.hdslb.com/bfs/live/e53a0c53a7e8e4cd675a33c04f3318fa58d4b51b.gif","https://i0.hdslb.com/bfs/live/a62d04a3c346445da68199debdc9cbfbb134024f.webp")], [31946, new o("D言D语（闪光应援）","为闪闪发光的你喝彩！",1,396,"https://s1.hdslb.com/bfs/live/e1d6d496e99ae87b067d8993fe01c62f2162381c.png","https://i0.hdslb.com/bfs/live/0a32c03eb296c91296e6408aaac81633ca293d76.png","https://i0.hdslb.com/bfs/live/639e3ce34c1f8b76ba5baef970240aa6d0968223.gif","https://i0.hdslb.com/bfs/live/2b525017858b2e3b4ed289ca2221d551c649e76a.webp")], [31893, new o("明灯相伴（心心相印）","执子之手，心心相印",1,4266,"https://s1.hdslb.com/bfs/live/67005b010750c140404c8dab78005bc1f63308db.png","https://i0.hdslb.com/bfs/live/67005b010750c140404c8dab78005bc1f63308db.png","https://i0.hdslb.com/bfs/live/a3424a0fc7e4037edd27787c281c30e138b8e220.gif","https://i0.hdslb.com/bfs/live/1138c6422c31eeb73f39876cf658dd131206c881.webp")], [32204, new o("八音盒（嘟嘟猪）","粉嘟嘟～",1,800,"https://s1.hdslb.com/bfs/live/cc1fa9e779493817da09fd98450e5ba5abffceeb.png","https://i0.hdslb.com/bfs/live/cc1fa9e779493817da09fd98450e5ba5abffceeb.png","https://i0.hdslb.com/bfs/live/7965d386bf7117c12616e7c4e4d998ea7e28762a.gif","https://i0.hdslb.com/bfs/live/d9191321d522155c7fa422fa77887b636cb1ebdd.webp")], [32124, new o("心动盲盒","投喂“心动盲盒”，概率爆出不同礼物直接送给主播",1,150,"https://s1.hdslb.com/bfs/live/a78fa33c0431fcb816cf2ac31deed8dee0b5b6e2.png","https://i0.hdslb.com/bfs/live/4adca0e35eaf9fe48a0e2cd3e1d4595a507ff813.png","https://i0.hdslb.com/bfs/live/6a7222b0d186a1b05053a86f218ac5f2944c1dd1.gif","https://i0.hdslb.com/bfs/live/7a16369cf2b192179e91210dcfca717748a633e1.webp")], [32093, new o("极速超跑（流光飞电）","风驰电掣，制霸赛场！",1,2920,"https://s1.hdslb.com/bfs/live/ea85d978f6ab0e075da33ce20564f51f67e341d0.png","https://i0.hdslb.com/bfs/live/ea85d978f6ab0e075da33ce20564f51f67e341d0.png","https://i0.hdslb.com/bfs/live/25487cd68d8cd5d8baf704910b1278eade7e1550.gif","https://i0.hdslb.com/bfs/live/3db1c96b11437782a4871eaac618c2fbc1a490c4.webp")], [32128, new o("爱心抱枕","",1,160,"https://s1.hdslb.com/bfs/live/824714c830966d7bec381e35ef808b1f478e21ee.png","https://i0.hdslb.com/bfs/live/824714c830966d7bec381e35ef808b1f478e21ee.png","https://i0.hdslb.com/bfs/live/ae80d80ea758ff08fb4e2c4226ab7b5011b728a6.gif","https://i0.hdslb.com/bfs/live/32c8ee42566501822d8ecc68b33cd2c64937266a.webp")], [32200, new o("八音盒","为你献上所有梦幻",1,800,"https://s1.hdslb.com/bfs/live/07c6d2d5982fb53b1c9a5ae57a0d05da2f218d65.png","https://i0.hdslb.com/bfs/live/07c6d2d5982fb53b1c9a5ae57a0d05da2f218d65.png","https://i0.hdslb.com/bfs/live/e037e7edcc6ce9e94ee62b16ef1174bd80cf276e.gif","https://i0.hdslb.com/bfs/live/3d9ce4851b25ebc391d7438c8f9485167c41585e.webp")], [31089, new o("好运红叶","旅行大作战活动道具",1,10,"https://s1.hdslb.com/bfs/live/b0412d755365c7129dc1735170201639c81f54f2.png","https://i0.hdslb.com/bfs/live/b0412d755365c7129dc1735170201639c81f54f2.png","https://i0.hdslb.com/bfs/live/d268772e6b1f1e2b8ddf0f7c5ceb9a1230210299.gif","https://i0.hdslb.com/bfs/live/c06ce5b30057786ce0ac92b9026a60a1107cdfc5.webp")], [31947, new o("D言D语（震撼声浪）","节奏感爆棚的夸夸弹幕！",1,396,"https://s1.hdslb.com/bfs/live/3b57ce0159975ecb1e629d4992705d1292a527b2.png","https://i0.hdslb.com/bfs/live/48d28765db865559565dac6745de60948ba5640f.png","https://i0.hdslb.com/bfs/live/4adcf0e6b9393b8eca9dd68d50457838b5cadd5a.gif","https://i0.hdslb.com/bfs/live/aa877979f2b83a22fd16b5b430c724cf3b94e970.webp")], [32125, new o("电影票","",1,20,"https://s1.hdslb.com/bfs/live/20864a10beaea541c7dce264d5bbc56676d63e4f.png","https://i0.hdslb.com/bfs/live/20864a10beaea541c7dce264d5bbc56676d63e4f.png","https://i0.hdslb.com/bfs/live/ef9b630931080a27d47c39aee03744f2f6a6df19.gif","https://i0.hdslb.com/bfs/live/0879943234303141c3a0ca680df239a278ac1e37.webp")], [31877, new o("花式夸夸（疯狂点赞）","爱就要大声赞出来！！",1,396,"https://s1.hdslb.com/bfs/live/11cbd86ad8e6f40a9659855ed9c80d288f946486.png","https://i0.hdslb.com/bfs/live/11cbd86ad8e6f40a9659855ed9c80d288f946486.png","https://i0.hdslb.com/bfs/live/215835fce51ff93ad4419d18ff068518520f7ed0.gif","https://i0.hdslb.com/bfs/live/786c62a64e3e294b7e48bc0a40c3d50fee7c1d19.webp")], [32198, new o("轻舞风铃","风铃响起时，是我在想你",1,466,"https://s1.hdslb.com/bfs/live/ccc1f9c65248972b523135555946ad93f509fc62.png","https://i0.hdslb.com/bfs/live/ccc1f9c65248972b523135555946ad93f509fc62.png","https://i0.hdslb.com/bfs/live/3e873b19d9951c815fcf30d884ba069103b9a943.gif","https://i0.hdslb.com/bfs/live/929770feb25b4e01f3caa966e150113cd6831735.webp")], [31884, new o("璀璨烟火（美轮美奂）","最美的风景不止烟火，还有光彩夺目的你",1,1580,"https://s1.hdslb.com/bfs/live/2e217f560038ecac2033b26a51a9db449c6b1db8.png","https://i0.hdslb.com/bfs/live/2e217f560038ecac2033b26a51a9db449c6b1db8.png","https://i0.hdslb.com/bfs/live/633c4110dd23fe902459206352d06cf9545daa62.gif","https://i0.hdslb.com/bfs/live/9b45b113c6c1dd52a9d5473b742a2e8fc8f5075c.webp")], [32132, new o("浪漫城堡","",1,22330,"https://s1.hdslb.com/bfs/live/216fac597b3c5619d56ed332bcf5f880ea657e8e.png","https://i0.hdslb.com/bfs/live/216fac597b3c5619d56ed332bcf5f880ea657e8e.png","https://i0.hdslb.com/bfs/live/251f6a60854da414f3527b07eab77df27215c797.gif","https://i0.hdslb.com/bfs/live/c96bf379b53f43ea03834843c167464d2668b6c4.webp")], [31882, new o("花式夸夸（震撼声浪）","节奏感爆棚的夸夸弹幕！！",1,396,"https://s1.hdslb.com/bfs/live/3b57ce0159975ecb1e629d4992705d1292a527b2.png","https://i0.hdslb.com/bfs/live/48d28765db865559565dac6745de60948ba5640f.png","https://i0.hdslb.com/bfs/live/4adcf0e6b9393b8eca9dd68d50457838b5cadd5a.gif","https://i0.hdslb.com/bfs/live/aa877979f2b83a22fd16b5b430c724cf3b94e970.webp")], [32092, new o("极速超跑（闪烁疾驰）","完美漂移，极速狂飙！",1,2820,"https://s1.hdslb.com/bfs/live/e15f11d1ef5273502c428f29ac5095bed7978ff8.png","https://i0.hdslb.com/bfs/live/e15f11d1ef5273502c428f29ac5095bed7978ff8.png","https://i0.hdslb.com/bfs/live/819b4ce86eeefb50716c1ea06712fc830d1436b6.gif","https://i0.hdslb.com/bfs/live/17d01ceb497aef88890d8e5d598fca572fe2af18.webp")], [32203, new o("八音盒（乖乖汪）","小乖乖～",1,800,"https://s1.hdslb.com/bfs/live/9c74101ca2d3b4f1b5e329654dcabca1a9de7c4c.png","https://i0.hdslb.com/bfs/live/9c74101ca2d3b4f1b5e329654dcabca1a9de7c4c.png","https://i0.hdslb.com/bfs/live/76161fb669cf0e55168aad1a525b81db22a67386.gif","https://i0.hdslb.com/bfs/live/1cd41b19ad9c312aa1b148890ae920b153097fab.webp")], [31945, new o("D言D语（疯狂点赞）","爱要大声赞出来！",1,396,"https://s1.hdslb.com/bfs/live/11cbd86ad8e6f40a9659855ed9c80d288f946486.png","https://i0.hdslb.com/bfs/live/11cbd86ad8e6f40a9659855ed9c80d288f946486.png","https://i0.hdslb.com/bfs/live/215835fce51ff93ad4419d18ff068518520f7ed0.gif","https://i0.hdslb.com/bfs/live/786c62a64e3e294b7e48bc0a40c3d50fee7c1d19.webp")], [32201, new o("么么","么么代表我的心",1,299,"https://s1.hdslb.com/bfs/live/ffe9c630850d052385823d7ba9a6c6bbfbdde2a4.png","https://i0.hdslb.com/bfs/live/ffe9c630850d052385823d7ba9a6c6bbfbdde2a4.png","https://i0.hdslb.com/bfs/live/679cb407d7f05b6f0df3337e6f3f4c22a77d8065.gif","https://i0.hdslb.com/bfs/live/08c56c83ca6f876ed5d4d76f8f8ab2e3ef5f6ff8.webp")], [10001, new o("总督","null",1,198e3,"","null","null","https://s1.hdslb.com/bfs/static/blive/blfe-live-room/static/img/icon-l-1.fde1190..png")], [10002, new o("提督","null",1,19800,"","null","null","https://s1.hdslb.com/bfs/static/blive/blfe-live-room/static/img/icon-l-2.6f68d77..png")], [10003, new o("舰长","null",1,1980,"https://s1.hdslb.com/bfs/static/blive/blfe-live-room/static/img/icon-level-3.ac277c1.png","null","null","https://s1.hdslb.com/bfs/static/blive/blfe-live-room/static/img/icon-l-3.402ac8f..png")], [32220, new o("冲鸭","一起加油，一起冲！",1,99,"https://s1.hdslb.com/bfs/live/f8cd58460df456a6bc71ce9a7e53816f3110a133.png","https://i0.hdslb.com/bfs/live/3deeea01c51a05c977bb76060acad9d4c6aa8fba.png","https://i0.hdslb.com/bfs/live/bf8194bc7bd2d7cd21688c5d6d5a004eba552f28.gif","https://i0.hdslb.com/bfs/live/21b60df59598bdba9062b3740da52e2819228c77.webp")], [32218, new o("么么","么么代表我的心",1,299,"https://s1.hdslb.com/bfs/live/ffe9c630850d052385823d7ba9a6c6bbfbdde2a4.png","https://i0.hdslb.com/bfs/live/ffe9c630850d052385823d7ba9a6c6bbfbdde2a4.png","https://i0.hdslb.com/bfs/live/679cb407d7f05b6f0df3337e6f3f4c22a77d8065.gif","https://i0.hdslb.com/bfs/live/08c56c83ca6f876ed5d4d76f8f8ab2e3ef5f6ff8.webp")], [32176, new o("TES灯牌","此志无双！",1,10,"https://s1.hdslb.com/bfs/live/8f770c8019cc9bc2e4cdb8cb7b246f2e6c077c58.png","https://i0.hdslb.com/bfs/live/8f770c8019cc9bc2e4cdb8cb7b246f2e6c077c58.png","https://i0.hdslb.com/bfs/live/a89c5ee76ce7cd86a32cc833c6268cbc340fa278.gif","https://i0.hdslb.com/bfs/live/50b8b7b8d70e517cf9975012ac6835b25a716949.webp")], [32178, new o("RNG灯牌","此志无双！",1,10,"https://s1.hdslb.com/bfs/live/1e098592f802101bb35b3e428f2faa31fa68d1d1.png","https://i0.hdslb.com/bfs/live/1e098592f802101bb35b3e428f2faa31fa68d1d1.png","https://i0.hdslb.com/bfs/live/85fd9b20091b7af4aa452d88bc2c40215568fb4e.gif","https://i0.hdslb.com/bfs/live/3a170d692d362d135bab1f55b13de122ca14c63c.webp")], [32175, new o("JDG灯牌","此志无双！",1,10,"https://s1.hdslb.com/bfs/live/30698607220e9c291c7794f9844b1d16e2782494.png","https://i0.hdslb.com/bfs/live/30698607220e9c291c7794f9844b1d16e2782494.png","https://i0.hdslb.com/bfs/live/7d1fbc344ba8246188412135f88f1f756d8eaf26.gif","https://i0.hdslb.com/bfs/live/0c2701f17c6b61b2a334469ff7c854f66095161e.webp")], [32177, new o("EDG灯牌","此志无双！",1,10,"https://s1.hdslb.com/bfs/live/3d94fbfba54ac40c1a276e594ec6ea3b839080a2.png","https://i0.hdslb.com/bfs/live/3d94fbfba54ac40c1a276e594ec6ea3b839080a2.png","https://i0.hdslb.com/bfs/live/28e642430076f62bef757c70b257e96acc211667.gif","https://i0.hdslb.com/bfs/live/7b568e9277bacc941f86cac9fa0f0d5a3fa01773.webp")]])
}
const C1 = {
    key: 0,
    class: "sc-display"
}
  , x1 = ["src", "alt"]
  , E1 = {
    key: 2,
    class: "gift-name"
}
  , F1 = {
    key: 3,
    class: "sc-badge sc-fallback"
}
  , y1 = Us({
    __name: "ScDisplay",
    props: {
        sc: {}
    },
    setup(s) {
        const e = s
          , t = new Map;
        for (const p of o.List.values())
            t.set(p.Name, p.StlcImg);
        const c = new Map([["总督专属", "https://s1.hdslb.com/bfs/live/1d16bf0fcc3b1b768d1179d60f1fdbabe6ab4489.png"], ["提督专属", "https://s1.hdslb.com/bfs/live/98a201c14a64e860a758f089144dcf3f42e7038c.png"], ["舰长专属", "https://s1.hdslb.com/bfs/live/143f5ec3003b4080d1b5f817a9efdca46d631945.png"]])
          , f = p => {
            const m = p.match(/\d+/);
            return m ? Number(m[0]) : 0
        }
          , b = p => p >= 2e3 ? "rgb(171, 26, 50)" : p >= 1e3 ? "rgb(229, 77, 77)" : p >= 500 ? "rgb(224, 148, 67)" : p >= 100 ? "rgb(226, 181, 43)" : p >= 50 ? "rgb(66, 125, 158)" : p >= 30 ? "rgb(42, 96, 178)" : "rgba(239, 68, 68, 0.35)"
          , d = p => {
            for (const [m,h] of c)
                if (h && p.includes(m))
                    return h;
            return ""
        }
          , a = p => d(p) || t.get(p) || ""
          , n = Fe( () => !!e.sc)
          , l = Fe( () => f(e.sc ?? ""))
          , i = Fe( () => b(l.value))
          , r = Fe( () => a(e.sc ?? ""))
          , u = Fe( () => !!e.sc && l.value === 0 && !r.value);
        return (p, m) => n.value ? (Y(),
        M("div", C1, [l.value > 0 ? (Y(),
        M("span", {
            key: 0,
            class: "sc-badge",
            style: Dt({
                backgroundColor: i.value
            })
        }, be(l.value) + "SC ", 5)) : de("", !0), r.value ? (Y(),
        M("img", {
            key: 1,
            class: "gift-icon",
            src: r.value,
            alt: s.sc,
            loading: "lazy"
        }, null, 8, x1)) : de("", !0), r.value ? (Y(),
        M("span", E1, be(s.sc), 1)) : de("", !0), u.value ? (Y(),
        M("span", F1, "SC")) : de("", !0)])) : de("", !0)
    }
})
  , Af = Ss(y1, [["__scopeId", "data-v-9ea0e8f2"]])
  , T1 = () => window.location.hostname === "kkcc.vsinger.ink" ? "要听" : ""
  , xd = async s => {
    const e = `${T1()} ${s}`.trim();
    try {
        await navigator.clipboard.writeText(e);
        return
    } catch {
        const t = document.createElement("textarea");
        t.value = e,
        t.setAttribute("readonly", ""),
        t.style.position = "fixed",
        t.style.opacity = "0",
        document.body.appendChild(t),
        t.select(),
        document.execCommand("copy"),
        document.body.removeChild(t)
    }
}
  , Yb = new Set
  , Ed = s => {
    Yb.forEach(e => e(s))
}
  , A1 = s => (Yb.add(s),
() => Yb.delete(s))
  , _1 = {
    class: "song-list"
}
  , k1 = ["data-song-id"]
  , O1 = {
    class: "song-mobile"
}
  , I1 = {
    class: "song-main"
}
  , R1 = ["onClick"]
  , $1 = {
    key: 0,
    class: "badge badge-new"
}
  , N1 = {
    key: 1,
    class: "badge paid"
}
  , j1 = {
    class: "song-meta"
}
  , V1 = {
    key: 0
}
  , z1 = {
    key: 1
}
  , H1 = {
    class: "song-detail"
}
  , U1 = {
    key: 1
}
  , S1 = {
    class: "song-desktop"
}
  , K1 = ["onClick"]
  , Y1 = {
    class: "song-title-text"
}
  , q1 = {
    key: 0,
    class: "badge badge-new"
}
  , X1 = {
    key: 1,
    class: "badge paid"
}
  , Z1 = {
    class: "col col-artist"
}
  , Q1 = {
    class: "col col-language"
}
  , M1 = {
    class: "col col-genre"
}
  , P1 = {
    class: "col col-sc"
}
  , B1 = {
    class: "col col-remarks"
}
  , L1 = Us({
    __name: "SongList",
    props: {
        songs: {},
        activeSongId: {}
    },
    setup(s) {
        const e = async t => {
            await xd(t),
            Ed("已複製歌曲名")
        }
        ;
        return (t, c) => (Y(),
        M("div", _1, [(Y(!0),
        M(Ce, null, $s(s.songs, f => (Y(),
        M("div", {
            key: f.id,
            class: qe(["song-row", {
                active: f.id === s.activeSongId
            }]),
            "data-song-id": f.id
        }, [V("div", O1, [V("div", I1, [V("div", {
            class: "song-title song-title-clickable",
            onClick: b => e(f.title)
        }, [mi(be(f.title) + " ", 1), f.isNew ? (Y(),
        M("span", $1, "NEW")) : de("", !0), f.isPaid ? (Y(),
        M("span", N1, "付费")) : de("", !0)], 8, R1), V("div", j1, [V("span", null, be(f.artist || "未知歌手"), 1), f.language ? (Y(),
        M("span", V1, be(f.language), 1)) : de("", !0), f.genre ? (Y(),
        M("span", z1, be(f.genre), 1)) : de("", !0)])]), V("div", H1, [f.sc ? (Y(),
        ut(Af, {
            key: 0,
            sc: f.sc
        }, null, 8, ["sc"])) : de("", !0), f.remarks ? (Y(),
        M("span", U1, be(f.remarks), 1)) : de("", !0)])]), V("div", S1, [V("div", {
            class: "col col-title song-title-clickable",
            onClick: b => e(f.title)
        }, [V("span", Y1, be(f.title), 1), f.isNew ? (Y(),
        M("span", q1, "NEW")) : de("", !0), f.isPaid ? (Y(),
        M("span", X1, "付费")) : de("", !0)], 8, K1), V("div", Z1, be(f.artist || "未知歌手"), 1), V("div", Q1, be(f.language || ""), 1), V("div", M1, be(f.genre || ""), 1), V("div", P1, [f.sc ? (Y(),
        ut(Af, {
            key: 0,
            sc: f.sc
        }, null, 8, ["sc"])) : de("", !0)]), V("div", B1, be(f.remarks || ""), 1)])], 10, k1))), 128))]))
    }
})
  , W1 = Ss(L1, [["__scopeId", "data-v-040ec3e7"]]);
function G1(s) {
    return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s
}
var of = {
    exports: {}
};
var J1 = of.exports, ja;
function er() {
    return ja || (ja = 1,
    (function(s, e) {
        (function(t, c) {
            s.exports = c()
        }
        )(J1, (function() {
            function t(p, m) {
                var h = Object.keys(p);
                if (Object.getOwnPropertySymbols) {
                    var g = Object.getOwnPropertySymbols(p);
                    m && (g = g.filter(function(w) {
                        return Object.getOwnPropertyDescriptor(p, w).enumerable
                    })),
                    h.push.apply(h, g)
                }
                return h
            }
            function c(p) {
                for (var m = 1; m < arguments.length; m++) {
                    var h = arguments[m] != null ? arguments[m] : {};
                    m % 2 ? t(Object(h), !0).forEach(function(g) {
                        a(p, g, h[g])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(p, Object.getOwnPropertyDescriptors(h)) : t(Object(h)).forEach(function(g) {
                        Object.defineProperty(p, g, Object.getOwnPropertyDescriptor(h, g))
                    })
                }
                return p
            }
            function f(p, m) {
                if (!(p instanceof m))
                    throw new TypeError("Cannot call a class as a function")
            }
            function b(p, m) {
                for (var h = 0; h < m.length; h++) {
                    var g = m[h];
                    g.enumerable = g.enumerable || !1,
                    g.configurable = !0,
                    "value"in g && (g.writable = !0),
                    Object.defineProperty(p, i(g.key), g)
                }
            }
            function d(p, m, h) {
                return m && b(p.prototype, m),
                h && b(p, h),
                Object.defineProperty(p, "prototype", {
                    writable: !1
                }),
                p
            }
            function a(p, m, h) {
                return m = i(m),
                m in p ? Object.defineProperty(p, m, {
                    value: h,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : p[m] = h,
                p
            }
            function n() {
                return n = Object.assign ? Object.assign.bind() : function(p) {
                    for (var m = 1; m < arguments.length; m++) {
                        var h = arguments[m];
                        for (var g in h)
                            Object.prototype.hasOwnProperty.call(h, g) && (p[g] = h[g])
                    }
                    return p
                }
                ,
                n.apply(this, arguments)
            }
            function l(p, m) {
                if (typeof p != "object" || p === null)
                    return p;
                var h = p[Symbol.toPrimitive];
                if (h !== void 0) {
                    var g = h.call(p, m);
                    if (typeof g != "object")
                        return g;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return String(p)
            }
            function i(p) {
                var m = l(p, "string");
                return typeof m == "symbol" ? m : String(m)
            }
            var r = (function() {
                function p() {
                    var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document.body
                      , h = arguments.length > 1 ? arguments[1] : void 0
                      , g = arguments.length > 2 ? arguments[2] : void 0;
                    f(this, p);
                    var w = this;
                    if (!m || m.nodeType !== 1)
                        return new Error("Incorrect element type");
                    w.$container = m,
                    w.texts = h || [],
                    w.config = c(c({}, p._defaultConfig), g || {}),
                    w.radius = w.config.radius,
                    w.depth = 2 * w.radius,
                    w.size = 1.5 * w.radius,
                    w.maxSpeed = p._getMaxSpeed(w.config.maxSpeed),
                    w.initSpeed = p._getInitSpeed(w.config.initSpeed),
                    w.direction = w.config.direction,
                    w.keep = w.config.keep,
                    w.paused = !1,
                    w._createElment(),
                    w._init(),
                    p.list.push({
                        el: w.$el,
                        container: m,
                        instance: w
                    })
                }
                return d(p, [{
                    key: "_createElment",
                    value: function() {
                        var h = this
                          , g = document.createElement("div");
                        g.className = h.config.containerClass,
                        h.config.useContainerInlineStyles && (g.style.position = "relative",
                        g.style.width = "".concat(2 * h.radius, "px"),
                        g.style.height = "".concat(2 * h.radius, "px")),
                        h.items = [],
                        h.texts.forEach(function(w, C) {
                            var A = h._createTextItem(w, C);
                            g.appendChild(A.el),
                            h.items.push(A)
                        }),
                        h.$container.appendChild(g),
                        h.$el = g
                    }
                }, {
                    key: "_createTextItem",
                    value: function(h) {
                        var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
                          , w = this
                          , C = document.createElement("span");
                        if (C.className = w.config.itemClass,
                        w.config.useItemInlineStyles) {
                            C.style.willChange = "transform, opacity, filter",
                            C.style.position = "absolute",
                            C.style.top = "50%",
                            C.style.left = "50%",
                            C.style.zIndex = g + 1,
                            C.style.filter = "alpha(opacity=0)",
                            C.style.opacity = 0;
                            var A = "50% 50%";
                            C.style.WebkitTransformOrigin = A,
                            C.style.MozTransformOrigin = A,
                            C.style.OTransformOrigin = A,
                            C.style.transformOrigin = A;
                            var E = "translate3d(-50%, -50%, 0) scale(1)";
                            C.style.WebkitTransform = E,
                            C.style.MozTransform = E,
                            C.style.OTransform = E,
                            C.style.transform = E
                        }
                        return w.config.useHTML ? C.innerHTML = h : C.innerText = h,
                        c({
                            el: C
                        }, w._computePosition(g))
                    }
                }, {
                    key: "_computePosition",
                    value: function(h) {
                        var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
                          , w = this
                          , C = w.texts.length;
                        g && (h = Math.floor(Math.random() * (C + 1)));
                        var A = Math.acos(-1 + (2 * h + 1) / C)
                          , E = Math.sqrt((C + 1) * Math.PI) * A;
                        return {
                            x: w.size * Math.cos(E) * Math.sin(A) / 2,
                            y: w.size * Math.sin(E) * Math.sin(A) / 2,
                            z: w.size * Math.cos(A) / 2
                        }
                    }
                }, {
                    key: "_requestInterval",
                    value: function(h, g) {
                        var w = (function() {
                            return window.requestAnimationFrame
                        }
                        )()
                          , C = new Date().getTime()
                          , A = {};
                        function E() {
                            A.value = w(E);
                            var D = new Date().getTime()
                              , O = D - C;
                            O >= g && (h.call(),
                            C = new Date().getTime())
                        }
                        return A.value = w(E),
                        A
                    }
                }, {
                    key: "_init",
                    value: function() {
                        var h = this;
                        h.active = !1,
                        h.mouseX0 = h.initSpeed * Math.sin(h.direction * (Math.PI / 180)),
                        h.mouseY0 = -h.initSpeed * Math.cos(h.direction * (Math.PI / 180)),
                        h.mouseX = h.mouseX0,
                        h.mouseY = h.mouseY0;
                        var g = window.matchMedia("(hover: hover)");
                        (!g || g.matches) && (p._on(h.$el, "mouseover", function() {
                            h.active = !0
                        }),
                        p._on(h.$el, "mouseout", function() {
                            h.active = !1
                        }),
                        p._on(h.keep ? window : h.$el, "mousemove", function(w) {
                            w = w || window.event;
                            var C = h.$el.getBoundingClientRect();
                            h.mouseX = (w.clientX - (C.left + C.width / 2)) / 5,
                            h.mouseY = (w.clientY - (C.top + C.height / 2)) / 5
                        })),
                        h._next(),
                        h.interval = h._requestInterval(function() {
                            h._next.call(h)
                        }, 10)
                    }
                }, {
                    key: "_next",
                    value: function() {
                        var h = this;
                        if (!h.paused) {
                            !h.keep && !h.active && (h.mouseX = Math.abs(h.mouseX - h.mouseX0) < 1 ? h.mouseX0 : (h.mouseX + h.mouseX0) / 2,
                            h.mouseY = Math.abs(h.mouseY - h.mouseY0) < 1 ? h.mouseY0 : (h.mouseY + h.mouseY0) / 2);
                            var g = -(Math.min(Math.max(-h.mouseY, -h.size), h.size) / h.radius) * h.maxSpeed
                              , w = Math.min(Math.max(-h.mouseX, -h.size), h.size) / h.radius * h.maxSpeed;
                            if (h.config.reverseDirection && (g = -g,
                            w = -w),
                            !(Math.abs(g) <= .01 && Math.abs(w) <= .01)) {
                                var C = Math.PI / 180
                                  , A = [Math.sin(g * C), Math.cos(g * C), Math.sin(w * C), Math.cos(w * C)];
                                h.items.forEach(function(E) {
                                    var D = E.x
                                      , O = E.y * A[1] + E.z * -A[0]
                                      , _ = E.y * A[0] + E.z * A[1]
                                      , k = D * A[3] + _ * A[2]
                                      , F = O
                                      , N = _ * A[3] - D * A[2]
                                      , q = 2 * h.depth / (2 * h.depth + N);
                                    E.x = k,
                                    E.y = F,
                                    E.z = N,
                                    E.scale = q.toFixed(3);
                                    var $ = q * q - .25;
                                    $ = ($ > 1 ? 1 : $).toFixed(3);
                                    var X = E.el
                                      , P = (E.x - X.offsetWidth / 2).toFixed(2)
                                      , L = (E.y - X.offsetHeight / 2).toFixed(2)
                                      , B = "translate3d(".concat(P, "px, ").concat(L, "px, 0) scale(").concat(E.scale, ")");
                                    X.style.WebkitTransform = B,
                                    X.style.MozTransform = B,
                                    X.style.OTransform = B,
                                    X.style.transform = B,
                                    X.style.filter = "alpha(opacity=".concat(100 * $, ")"),
                                    X.style.opacity = $
                                })
                            }
                        }
                    }
                }, {
                    key: "update",
                    value: function(h) {
                        var g = this;
                        g.texts = h || [],
                        g.texts.forEach(function(E, D) {
                            var O = g.items[D];
                            O || (O = g._createTextItem(E, D),
                            n(O, g._computePosition(D, !0)),
                            g.$el.appendChild(O.el),
                            g.items.push(O)),
                            g.config.useHTML ? O.el.innerHTML = E : O.el.innerText = E
                        });
                        var w = g.texts.length
                          , C = g.items.length;
                        if (w < C) {
                            var A = g.items.splice(w, C - w);
                            A.forEach(function(E) {
                                g.$el.removeChild(E.el)
                            })
                        }
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var h = this;
                        h.interval = null;
                        var g = p.list.findIndex(function(w) {
                            return w.el === h.$el
                        });
                        g !== -1 && p.list.splice(g, 1),
                        h.$container && h.$el && h.$container.removeChild(h.$el)
                    }
                }, {
                    key: "pause",
                    value: function() {
                        var h = this;
                        h.paused = !0
                    }
                }, {
                    key: "resume",
                    value: function() {
                        var h = this;
                        h.paused = !1
                    }
                }], [{
                    key: "_on",
                    value: function(h, g, w, C) {
                        h.addEventListener ? h.addEventListener(g, w, C) : h.attachEvent ? h.attachEvent("on".concat(g), w) : h["on".concat(g)] = w
                    }
                }]),
                p
            }
            )();
            r.list = [],
            r._defaultConfig = {
                radius: 100,
                maxSpeed: "normal",
                initSpeed: "normal",
                direction: 135,
                keep: !0,
                reverseDirection: !1,
                useContainerInlineStyles: !0,
                useItemInlineStyles: !0,
                containerClass: "tagcloud",
                itemClass: "tagcloud--item",
                useHTML: !1
            },
            r._getMaxSpeed = function(p) {
                return {
                    slow: .5,
                    normal: 1,
                    fast: 2
                }[p] || 1
            }
            ,
            r._getInitSpeed = function(p) {
                return {
                    slow: 16,
                    normal: 32,
                    fast: 80
                }[p] || 32
            }
            ;
            var u = (function(p, m, h) {
                typeof p == "string" && (p = document.querySelectorAll(p)),
                p.forEach || (p = [p]);
                var g = [];
                return p.forEach(function(w) {
                    w && g.push(new r(w,m,h))
                }),
                g.length <= 1 ? g[0] : g
            }
            );
            return u
        }
        ))
    }
    )(of)),
    of.exports
}
var sr = er();
const tr = G1(sr)
  , cr = {
    class: "tag-cloud-stack"
}
  , fr = {
    class: "tag-cloud-progress"
}
  , br = {
    key: 0,
    class: "absolute inset-0 flex items-center justify-center text-white/80"
}
  , mb = 2e4
  , dr = Us({
    __name: "SongSphere",
    props: {
        songs: {}
    },
    emits: ["select"],
    setup(s, {emit: e}) {
        const t = s
          , c = e
          , f = he(null);
        let b = null;
        const d = he(!1)
          , a = he(100)
          , n = he([]);
        let l = null
          , i = null
          , r = null
          , u = !1
          , p = null
          , m = Date.now() + mb;
        const h = _ => {
            if (!_)
                return;
            (Array.isArray(_) ? _ : [_]).forEach(F => {
                F?.destroy?.()
            }
            )
        }
          , g = async _ => {
            await xs();
            const k = f.value;
            if (!k || (h(b),
            k.innerHTML = "",
            !_.length))
                return;
            const F = window.innerWidth <= 768 ? 35 : 80
              , N = _.length > F ? _.slice(0, F) : _
              , q = [...N];
            for (let P = q.length - 1; P > 0; P -= 1) {
                const L = Math.floor(Math.random() * (P + 1))
                  , B = q[P];
                q[P] = q[L],
                q[L] = B
            }
            n.value = N;
            const $ = q.map(P => P.title);
            b = tr(k, $, {
                radius: 300,
                maxSpeed: "normal",
                initSpeed: "normal",
                useContainerInlineStyles: !1,
                itemClass: "tag-cloud-item",
                containerClass: "tag-cloud-container"
            });
            const X = new Set(N.filter(P => P.sc).map(P => P.title));
            k.querySelectorAll(".tag-cloud-item").forEach(P => {
                const L = P.textContent?.trim();
                L && X.has(L) && P.classList.add("sc-glow")
            }
            )
        }
          , w = async _ => {
            i && window.clearTimeout(i),
            d.value = !0,
            i = window.setTimeout(async () => {
                await g(_),
                d.value = !1
            }
            , 220)
        }
          , C = () => {
            m = Date.now() + mb,
            a.value = 100
        }
          , A = () => {
            l && window.clearInterval(l),
            r && window.clearInterval(r),
            C(),
            r = window.setInterval( () => {
                if (u)
                    return;
                const _ = m - Date.now()
                  , k = Math.max(0, _ / mb);
                a.value = Math.round(k * 100)
            }
            , 200),
            l = window.setInterval( () => {
                u || (w(t.songs),
                C())
            }
            , 2e4)
        }
          , E = () => {
            u || (u = !0,
            p = Date.now())
        }
          , D = () => {
            if (u && (u = !1,
            p)) {
                const _ = Date.now() - p;
                m += _,
                p = null
            }
        }
          , O = _ => {
            const k = _.target;
            if (!k?.classList.contains("tag-cloud-item"))
                return;
            const F = k.textContent?.trim();
            if (!F)
                return;
            const N = n.value.find(q => q.title === F);
            N && c("select", N)
        }
        ;
        return Ct( () => {
            g(t.songs),
            A()
        }
        ),
        hs( () => t.songs, _ => {
            w(_ ?? []),
            A()
        }
        , {
            deep: !0
        }),
        pc( () => {
            l && window.clearInterval(l),
            r && window.clearInterval(r),
            i && window.clearTimeout(i),
            h(b)
        }
        ),
        (_, k) => (Y(),
        M("div", {
            class: "relative flex h-full w-full items-center justify-center",
            onMouseenter: E,
            onMouseleave: D,
            onTouchstartPassive: E,
            onTouchend: D,
            onTouchcancel: D,
            onClick: O
        }, [V("div", cr, [V("div", fr, [V("div", {
            class: "tag-cloud-progress-bar",
            style: Dt({
                width: `${a.value}%`
            })
        }, null, 4)]), V("div", {
            ref_key: "containerRef",
            ref: f,
            class: qe(["tag-cloud-wrap", {
                "is-fading": d.value
            }])
        }, null, 2)]), s.songs.length ? de("", !0) : (Y(),
        M("div", br, " 没有找到相关歌曲 "))], 32))
    }
})
  , ar = Ss(dr, [["__scopeId", "data-v-ecf77b53"]]);
function nr(s, e) {
    return Kf() ? (vn(s, e),
    !0) : !1
}
const gb = new WeakMap
  , ir = (...s) => {
    var e;
    const t = s[0]
      , c = (e = uc()) === null || e === void 0 ? void 0 : e.proxy
      , f = c ?? Kf();
    if (f == null && !md())
        throw new Error("injectLocal must be called in setup");
    return f && gb.has(f) && t in gb.get(f) ? gb.get(f)[t] : tc(...s)
}
  , lr = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const or = Object.prototype.toString
  , rr = s => or.call(s) === "[object Object]";
function Va(s) {
    return s.endsWith("rem") ? Number.parseFloat(s) * 16 : Number.parseFloat(s)
}
function rf(s) {
    return Array.isArray(s) ? s : [s]
}
function hr(s) {
    return uc()
}
function Ti(s, e=!0, t) {
    hr() ? Ct(s, t) : e ? s() : xs(s)
}
function pr(s, e, t) {
    return hs(s, e, {
        ...t,
        immediate: !0
    })
}
const Jc = lr ? window : void 0;
function Rt(s) {
    var e;
    const t = Vt(s);
    return (e = t?.$el) !== null && e !== void 0 ? e : t
}
function qb(...s) {
    const e = (c, f, b, d) => (c.addEventListener(f, b, d),
    () => c.removeEventListener(f, b, d))
      , t = Fe( () => {
        const c = rf(Vt(s[0])).filter(f => f != null);
        return c.every(f => typeof f != "string") ? c : void 0
    }
    );
    return pr( () => {
        var c, f;
        return [(c = (f = t.value) === null || f === void 0 ? void 0 : f.map(b => Rt(b))) !== null && c !== void 0 ? c : [Jc].filter(b => b != null), rf(Vt(t.value ? s[1] : s[0])), rf(te(t.value ? s[2] : s[1])), Vt(t.value ? s[3] : s[2])]
    }
    , ([c,f,b,d], a, n) => {
        if (!c?.length || !f?.length || !b?.length)
            return;
        const l = rr(d) ? {
            ...d
        } : d
          , i = c.flatMap(r => f.flatMap(u => b.map(p => e(r, u, p, l))));
        n( () => {
            i.forEach(r => r())
        }
        )
    }
    , {
        flush: "post"
    })
}
function ur() {
    const s = ot(!1)
      , e = uc();
    return e && Ct( () => {
        s.value = !0
    }
    , e),
    s
}
function Ai(s) {
    const e = ur();
    return Fe( () => (e.value,
    !!s()))
}
const mr = Symbol("vueuse-ssr-width");
function gr() {
    const s = md() ? ir(mr, null) : null;
    return typeof s == "number" ? s : void 0
}
function vr(s, e={}) {
    const {window: t=Jc, ssrWidth: c=gr()} = e
      , f = Ai( () => t && "matchMedia"in t && typeof t.matchMedia == "function")
      , b = ot(typeof c == "number")
      , d = ot()
      , a = ot(!1)
      , n = l => {
        a.value = l.matches
    }
    ;
    return Fl( () => {
        if (b.value) {
            b.value = !f.value,
            a.value = Vt(s).split(",").some(l => {
                const i = l.includes("not all")
                  , r = l.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/)
                  , u = l.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);
                let p = !!(r || u);
                return r && p && (p = c >= Va(r[1])),
                u && p && (p = c <= Va(u[1])),
                i ? !p : p
            }
            );
            return
        }
        f.value && (d.value = t.matchMedia(Vt(s)),
        a.value = d.value.matches)
    }
    ),
    qb(d, "change", n, {
        passive: !0
    }),
    Fe( () => a.value)
}
function wr(s, e, t={}) {
    const {window: c=Jc, ...f} = t;
    let b;
    const d = Ai( () => c && "ResizeObserver"in c)
      , a = () => {
        b && (b.disconnect(),
        b = void 0)
    }
      , n = hs(Fe( () => {
        const i = Vt(s);
        return Array.isArray(i) ? i.map(r => Rt(r)) : [Rt(i)]
    }
    ), i => {
        if (a(),
        d.value && c) {
            b = new ResizeObserver(e);
            for (const r of i)
                r && b.observe(r, f)
        }
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , l = () => {
        a(),
        n()
    }
    ;
    return nr(l),
    {
        isSupported: d,
        stop: l
    }
}
function Dr(s, e={
    width: 0,
    height: 0
}, t={}) {
    const {window: c=Jc, box: f="content-box"} = t
      , b = Fe( () => {
        var r;
        return (r = Rt(s)) === null || r === void 0 || (r = r.namespaceURI) === null || r === void 0 ? void 0 : r.includes("svg")
    }
    )
      , d = ot(e.width)
      , a = ot(e.height)
      , {stop: n} = wr(s, ([r]) => {
        const u = f === "border-box" ? r.borderBoxSize : f === "content-box" ? r.contentBoxSize : r.devicePixelContentBoxSize;
        if (c && b.value) {
            const p = Rt(s);
            if (p) {
                const m = p.getBoundingClientRect();
                d.value = m.width,
                a.value = m.height
            }
        } else if (u) {
            const p = rf(u);
            d.value = p.reduce( (m, {inlineSize: h}) => m + h, 0),
            a.value = p.reduce( (m, {blockSize: h}) => m + h, 0)
        } else
            d.value = r.contentRect.width,
            a.value = r.contentRect.height
    }
    , t);
    Ti( () => {
        const r = Rt(s);
        r && (d.value = "offsetWidth"in r ? r.offsetWidth : e.width,
        a.value = "offsetHeight"in r ? r.offsetHeight : e.height)
    }
    );
    const l = hs( () => Rt(s), r => {
        d.value = r ? e.width : 0,
        a.value = r ? e.height : 0
    }
    );
    function i() {
        n(),
        l()
    }
    return {
        width: d,
        height: a,
        stop: i
    }
}
function _i(s={}) {
    const {window: e=Jc, initialWidth: t=Number.POSITIVE_INFINITY, initialHeight: c=Number.POSITIVE_INFINITY, listenOrientation: f=!0, includeScrollbar: b=!0, type: d="inner"} = s
      , a = ot(t)
      , n = ot(c)
      , l = () => {
        if (e)
            if (d === "outer")
                a.value = e.outerWidth,
                n.value = e.outerHeight;
            else if (d === "visual" && e.visualViewport) {
                const {width: r, height: u, scale: p} = e.visualViewport;
                a.value = Math.round(r * p),
                n.value = Math.round(u * p)
            } else
                b ? (a.value = e.innerWidth,
                n.value = e.innerHeight) : (a.value = e.document.documentElement.clientWidth,
                n.value = e.document.documentElement.clientHeight)
    }
    ;
    l(),
    Ti(l);
    const i = {
        passive: !0
    };
    return qb("resize", l, i),
    e && d === "visual" && e.visualViewport && qb(e.visualViewport, "resize", l, i),
    f && hs(vr("(orientation: portrait)"), () => l()),
    {
        width: a,
        height: n
    }
}
const Cr = {
    class: "danmaku-container"
}
  , xr = ["onClick"]
  , Er = 70
  , Fr = 35
  , yr = Us({
    __name: "SongDanmaku",
    props: {
        songs: {}
    },
    emits: ["select"],
    setup(s, {emit: e}) {
        const t = s
          , c = e
          , {width: f} = _i()
          , b = (n, l) => {
            if (n.length <= l)
                return n;
            const i = [...n];
            for (let r = i.length - 1; r > 0; r -= 1) {
                const u = Math.floor(Math.random() * (r + 1))
                  , p = i[r];
                i[r] = i[u],
                i[u] = p
            }
            return i.slice(0, l)
        }
          , d = Fe( () => {
            const n = f.value <= 768 ? Fr : Er;
            return b(t.songs ?? [], n).map(i => {
                const u = -(f.value * (.25 + Math.random() * .45) * .8)
                  , p = u - f.value * (.08 + Math.random() * .12) * .8;
                return {
                    song: i,
                    top: 5 + Math.random() * 85,
                    duration: (3 + Math.random() * 2) / .6,
                    delay: Math.random() * 10,
                    opacity: .6 + Math.random() * .4,
                    fontSize: 14 + Math.random() * 10,
                    midStartX: u,
                    midEndX: p
                }
            }
            )
        }
        )
          , a = n => {
            c("select", n)
        }
        ;
        return (n, l) => (Y(),
        M("div", Cr, [(Y(!0),
        M(Ce, null, $s(d.value, i => (Y(),
        M("div", {
            key: i.song.id,
            class: qe(["danmaku-item", {
                "sc-glow": i.song.sc
            }]),
            style: Dt({
                top: `${i.top}%`,
                animationDuration: `${i.duration}s`,
                animationDelay: `${i.delay}s`,
                opacity: i.opacity,
                fontSize: `${i.fontSize}px`,
                "--mid-start-x": `${i.midStartX}px`,
                "--mid-end-x": `${i.midEndX}px`
            }),
            onClick: r => a(i.song)
        }, be(i.song.title), 15, xr))), 128))]))
    }
})
  , Tr = Ss(yr, [["__scopeId", "data-v-4fe8bfdf"]]);
function Xs(s) {
    if (s === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return s
}
function ki(s, e) {
    s.prototype = Object.create(e.prototype),
    s.prototype.constructor = s,
    s.__proto__ = e
}
var ps = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, nc = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, Fd, He, xe, ws = 1e8, ge = 1 / ws, Xb = Math.PI * 2, Ar = Xb / 4, _r = 0, Oi = Math.sqrt, kr = Math.cos, Or = Math.sin, ze = function(e) {
    return typeof e == "string"
}, Ae = function(e) {
    return typeof e == "function"
}, Js = function(e) {
    return typeof e == "number"
}, yd = function(e) {
    return typeof e > "u"
}, Hs = function(e) {
    return typeof e == "object"
}, Je = function(e) {
    return e !== !1
}, Td = function() {
    return typeof window < "u"
}, bf = function(e) {
    return Ae(e) || ze(e)
}, Ii = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, Ze = Array.isArray, Ir = /random\([^)]+\)/g, Rr = /,\s*/g, za = /(?:-?\.?\d|\.)+/gi, Ri = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Lt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, vb = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, $i = /[+-]=-?[.\d]+/, $r = /[^,'"\[\]\s]+/gi, Nr = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, ye, Rs, Zb, Ad, us = {}, _f = {}, Ni, ji = function(e) {
    return (_f = ic(e, us)) && cs
}, _d = function(e, t) {
    return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
}, qc = function(e, t) {
    return !t && console.warn(e)
}, Vi = function(e, t) {
    return e && (us[e] = t) && _f && (_f[e] = t) || us
}, Xc = function() {
    return 0
}, jr = {
    suppressEvents: !0,
    isStart: !0,
    kill: !1
}, hf = {
    suppressEvents: !0,
    kill: !1
}, Vr = {
    suppressEvents: !0
}, kd = {}, rt = [], Qb = {}, zi, as = {}, wb = {}, Ha = 30, pf = [], Od = "", Id = function(e) {
    var t = e[0], c, f;
    if (Hs(t) || Ae(t) || (e = [e]),
    !(c = (t._gsap || {}).harness)) {
        for (f = pf.length; f-- && !pf[f].targetTest(t); )
            ;
        c = pf[f]
    }
    for (f = e.length; f--; )
        e[f] && (e[f]._gsap || (e[f]._gsap = new a0(e[f],c))) || e.splice(f, 1);
    return e
}, Ht = function(e) {
    return e._gsap || Id(Ds(e))[0]._gsap
}, Hi = function(e, t, c) {
    return (c = e[t]) && Ae(c) ? e[t]() : yd(c) && e.getAttribute && e.getAttribute(t) || c
}, es = function(e, t) {
    return (e = e.split(",")).forEach(t) || e
}, ke = function(e) {
    return Math.round(e * 1e5) / 1e5 || 0
}, Ee = function(e) {
    return Math.round(e * 1e7) / 1e7 || 0
}, fc = function(e, t) {
    var c = t.charAt(0)
      , f = parseFloat(t.substr(2));
    return e = parseFloat(e),
    c === "+" ? e + f : c === "-" ? e - f : c === "*" ? e * f : e / f
}, zr = function(e, t) {
    for (var c = t.length, f = 0; e.indexOf(t[f]) < 0 && ++f < c; )
        ;
    return f < c
}, kf = function() {
    var e = rt.length, t = rt.slice(0), c, f;
    for (Qb = {},
    rt.length = 0,
    c = 0; c < e; c++)
        f = t[c],
        f && f._lazy && (f.render(f._lazy[0], f._lazy[1], !0)._lazy = 0)
}, Rd = function(e) {
    return !!(e._initted || e._startAt || e.add)
}, Ui = function(e, t, c, f) {
    rt.length && !He && kf(),
    e.render(t, c, !!(He && t < 0 && Rd(e))),
    rt.length && !He && kf()
}, Si = function(e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match($r).length < 2 ? t : ze(e) ? e.trim() : e
}, Ki = function(e) {
    return e
}, ms = function(e, t) {
    for (var c in t)
        c in e || (e[c] = t[c]);
    return e
}, Hr = function(e) {
    return function(t, c) {
        for (var f in c)
            f in t || f === "duration" && e || f === "ease" || (t[f] = c[f])
    }
}, ic = function(e, t) {
    for (var c in t)
        e[c] = t[c];
    return e
}, Ua = function s(e, t) {
    for (var c in t)
        c !== "__proto__" && c !== "constructor" && c !== "prototype" && (e[c] = Hs(t[c]) ? s(e[c] || (e[c] = {}), t[c]) : t[c]);
    return e
}, Of = function(e, t) {
    var c = {}, f;
    for (f in e)
        f in t || (c[f] = e[f]);
    return c
}, Rc = function(e) {
    var t = e.parent || ye
      , c = e.keyframes ? Hr(Ze(e.keyframes)) : ms;
    if (Je(e.inherit))
        for (; t; )
            c(e, t.vars.defaults),
            t = t.parent || t._dp;
    return e
}, Ur = function(e, t) {
    for (var c = e.length, f = c === t.length; f && c-- && e[c] === t[c]; )
        ;
    return c < 0
}, Yi = function(e, t, c, f, b) {
    var d = e[f], a;
    if (b)
        for (a = t[b]; d && d[b] > a; )
            d = d._prev;
    return d ? (t._next = d._next,
    d._next = t) : (t._next = e[c],
    e[c] = t),
    t._next ? t._next._prev = t : e[f] = t,
    t._prev = d,
    t.parent = t._dp = e,
    t
}, Gf = function(e, t, c, f) {
    c === void 0 && (c = "_first"),
    f === void 0 && (f = "_last");
    var b = t._prev
      , d = t._next;
    b ? b._next = d : e[c] === t && (e[c] = d),
    d ? d._prev = b : e[f] === t && (e[f] = b),
    t._next = t._prev = t.parent = null
}, gt = function(e, t) {
    e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e),
    e._act = 0
}, Ut = function(e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
        for (var c = e; c; )
            c._dirty = 1,
            c = c.parent;
    return e
}, Sr = function(e) {
    for (var t = e.parent; t && t.parent; )
        t._dirty = 1,
        t.totalDuration(),
        t = t.parent;
    return e
}, Mb = function(e, t, c, f) {
    return e._startAt && (He ? e._startAt.revert(hf) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, f))
}, Kr = function s(e) {
    return !e || e._ts && s(e.parent)
}, Sa = function(e) {
    return e._repeat ? lc(e._tTime, e = e.duration() + e._rDelay) * e : 0
}, lc = function(e, t) {
    var c = Math.floor(e = Ee(e / t));
    return e && c === e ? c - 1 : c
}, If = function(e, t) {
    return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
}, Jf = function(e) {
    return e._end = Ee(e._start + (e._tDur / Math.abs(e._ts || e._rts || ge) || 0))
}, eb = function(e, t) {
    var c = e._dp;
    return c && c.smoothChildTiming && e._ts && (e._start = Ee(c._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)),
    Jf(e),
    c._dirty || Ut(c, e)),
    e
}, qi = function(e, t) {
    var c;
    if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (c = If(e.rawTime(), t),
    (!t._dur || ef(0, t.totalDuration(), c) - t._tTime > ge) && t.render(c, !0)),
    Ut(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
        if (e._dur < e.duration())
            for (c = e; c._dp; )
                c.rawTime() >= 0 && c.totalTime(c._tTime),
                c = c._dp;
        e._zTime = -ge
    }
}, js = function(e, t, c, f) {
    return t.parent && gt(t),
    t._start = Ee((Js(c) ? c : c || e !== ye ? vs(e, c, t) : e._time) + t._delay),
    t._end = Ee(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)),
    Yi(e, t, "_first", "_last", e._sort ? "_start" : 0),
    Pb(t) || (e._recent = t),
    f || qi(e, t),
    e._ts < 0 && eb(e, e._tTime),
    e
}, Xi = function(e, t) {
    return (us.ScrollTrigger || _d("scrollTrigger", t)) && us.ScrollTrigger.create(t, e)
}, Zi = function(e, t, c, f, b) {
    if (Nd(e, t, b),
    !e._initted)
        return 1;
    if (!c && e._pt && !He && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && zi !== ns.frame)
        return rt.push(e),
        e._lazy = [b, f],
        1
}, Yr = function s(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || s(t))
}, Pb = function(e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart"
}, qr = function(e, t, c, f) {
    var b = e.ratio, d = t < 0 || !t && (!e._start && Yr(e) && !(!e._initted && Pb(e)) || (e._ts < 0 || e._dp._ts < 0) && !Pb(e)) ? 0 : 1, a = e._rDelay, n = 0, l, i, r;
    if (a && e._repeat && (n = ef(0, e._tDur, t),
    i = lc(n, a),
    e._yoyo && i & 1 && (d = 1 - d),
    i !== lc(e._tTime, a) && (b = 1 - d,
    e.vars.repeatRefresh && e._initted && e.invalidate())),
    d !== b || He || f || e._zTime === ge || !t && e._zTime) {
        if (!e._initted && Zi(e, t, f, c, n))
            return;
        for (r = e._zTime,
        e._zTime = t || (c ? ge : 0),
        c || (c = t && !r),
        e.ratio = d,
        e._from && (d = 1 - d),
        e._time = 0,
        e._tTime = n,
        l = e._pt; l; )
            l.r(d, l.d),
            l = l._next;
        t < 0 && Mb(e, t, c, !0),
        e._onUpdate && !c && ls(e, "onUpdate"),
        n && e._repeat && !c && e.parent && ls(e, "onRepeat"),
        (t >= e._tDur || t < 0) && e.ratio === d && (d && gt(e, 1),
        !c && !He && (ls(e, d ? "onComplete" : "onReverseComplete", !0),
        e._prom && e._prom()))
    } else
        e._zTime || (e._zTime = t)
}, Xr = function(e, t, c) {
    var f;
    if (c > t)
        for (f = e._first; f && f._start <= c; ) {
            if (f.data === "isPause" && f._start > t)
                return f;
            f = f._next
        }
    else
        for (f = e._last; f && f._start >= c; ) {
            if (f.data === "isPause" && f._start < t)
                return f;
            f = f._prev
        }
}, oc = function(e, t, c, f) {
    var b = e._repeat
      , d = Ee(t) || 0
      , a = e._tTime / e._tDur;
    return a && !f && (e._time *= d / e._dur),
    e._dur = d,
    e._tDur = b ? b < 0 ? 1e10 : Ee(d * (b + 1) + e._rDelay * b) : d,
    a > 0 && !f && eb(e, e._tTime = e._tDur * a),
    e.parent && Jf(e),
    c || Ut(e.parent, e),
    e
}, Ka = function(e) {
    return e instanceof Be ? Ut(e) : oc(e, e._dur)
}, Zr = {
    _start: 0,
    endTime: Xc,
    totalDuration: Xc
}, vs = function s(e, t, c) {
    var f = e.labels, b = e._recent || Zr, d = e.duration() >= ws ? b.endTime(!1) : e._dur, a, n, l;
    return ze(t) && (isNaN(t) || t in f) ? (n = t.charAt(0),
    l = t.substr(-1) === "%",
    a = t.indexOf("="),
    n === "<" || n === ">" ? (a >= 0 && (t = t.replace(/=/, "")),
    (n === "<" ? b._start : b.endTime(b._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (l ? (a < 0 ? b : c).totalDuration() / 100 : 1)) : a < 0 ? (t in f || (f[t] = d),
    f[t]) : (n = parseFloat(t.charAt(a - 1) + t.substr(a + 1)),
    l && c && (n = n / 100 * (Ze(c) ? c[0] : c).totalDuration()),
    a > 1 ? s(e, t.substr(0, a - 1), c) + n : d + n)) : t == null ? d : +t
}, $c = function(e, t, c) {
    var f = Js(t[1]), b = (f ? 2 : 1) + (e < 2 ? 0 : 1), d = t[b], a, n;
    if (f && (d.duration = t[1]),
    d.parent = c,
    e) {
        for (a = d,
        n = c; n && !("immediateRender"in a); )
            a = n.vars.defaults || {},
            n = Je(n.vars.inherit) && n.parent;
        d.immediateRender = Je(a.immediateRender),
        e < 2 ? d.runBackwards = 1 : d.startAt = t[b - 1]
    }
    return new Re(t[0],d,t[b + 1])
}, xt = function(e, t) {
    return e || e === 0 ? t(e) : t
}, ef = function(e, t, c) {
    return c < e ? e : c > t ? t : c
}, Ye = function(e, t) {
    return !ze(e) || !(t = Nr.exec(e)) ? "" : t[1]
}, Qr = function(e, t, c) {
    return xt(c, function(f) {
        return ef(e, t, f)
    })
}, Bb = [].slice, Qi = function(e, t) {
    return e && Hs(e) && "length"in e && (!t && !e.length || e.length - 1 in e && Hs(e[0])) && !e.nodeType && e !== Rs
}, Mr = function(e, t, c) {
    return c === void 0 && (c = []),
    e.forEach(function(f) {
        var b;
        return ze(f) && !t || Qi(f, 1) ? (b = c).push.apply(b, Ds(f)) : c.push(f)
    }) || c
}, Ds = function(e, t, c) {
    return xe && !t && xe.selector ? xe.selector(e) : ze(e) && !c && (Zb || !rc()) ? Bb.call((t || Ad).querySelectorAll(e), 0) : Ze(e) ? Mr(e, c) : Qi(e) ? Bb.call(e, 0) : e ? [e] : []
}, Lb = function(e) {
    return e = Ds(e)[0] || qc("Invalid scope") || {},
    function(t) {
        var c = e.current || e.nativeElement || e;
        return Ds(t, c.querySelectorAll ? c : c === e ? qc("Invalid scope") || Ad.createElement("div") : e)
    }
}, Mi = function(e) {
    return e.sort(function() {
        return .5 - Math.random()
    })
}, Pi = function(e) {
    if (Ae(e))
        return e;
    var t = Hs(e) ? e : {
        each: e
    }
      , c = St(t.ease)
      , f = t.from || 0
      , b = parseFloat(t.base) || 0
      , d = {}
      , a = f > 0 && f < 1
      , n = isNaN(f) || a
      , l = t.axis
      , i = f
      , r = f;
    return ze(f) ? i = r = {
        center: .5,
        edges: .5,
        end: 1
    }[f] || 0 : !a && n && (i = f[0],
    r = f[1]),
    function(u, p, m) {
        var h = (m || t).length, g = d[h], w, C, A, E, D, O, _, k, F;
        if (!g) {
            if (F = t.grid === "auto" ? 0 : (t.grid || [1, ws])[1],
            !F) {
                for (_ = -ws; _ < (_ = m[F++].getBoundingClientRect().left) && F < h; )
                    ;
                F < h && F--
            }
            for (g = d[h] = [],
            w = n ? Math.min(F, h) * i - .5 : f % F,
            C = F === ws ? 0 : n ? h * r / F - .5 : f / F | 0,
            _ = 0,
            k = ws,
            O = 0; O < h; O++)
                A = O % F - w,
                E = C - (O / F | 0),
                g[O] = D = l ? Math.abs(l === "y" ? E : A) : Oi(A * A + E * E),
                D > _ && (_ = D),
                D < k && (k = D);
            f === "random" && Mi(g),
            g.max = _ - k,
            g.min = k,
            g.v = h = (parseFloat(t.amount) || parseFloat(t.each) * (F > h ? h - 1 : l ? l === "y" ? h / F : F : Math.max(F, h / F)) || 0) * (f === "edges" ? -1 : 1),
            g.b = h < 0 ? b - h : b,
            g.u = Ye(t.amount || t.each) || 0,
            c = c && h < 0 ? f0(c) : c
        }
        return h = (g[u] - g.min) / g.max || 0,
        Ee(g.b + (c ? c(h) : h) * g.v) + g.u
    }
}, Wb = function(e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function(c) {
        var f = Ee(Math.round(parseFloat(c) / e) * e * t);
        return (f - f % 1) / t + (Js(c) ? 0 : Ye(c))
    }
}, Bi = function(e, t) {
    var c = Ze(e), f, b;
    return !c && Hs(e) && (f = c = e.radius || ws,
    e.values ? (e = Ds(e.values),
    (b = !Js(e[0])) && (f *= f)) : e = Wb(e.increment)),
    xt(t, c ? Ae(e) ? function(d) {
        return b = e(d),
        Math.abs(b - d) <= f ? b : d
    }
    : function(d) {
        for (var a = parseFloat(b ? d.x : d), n = parseFloat(b ? d.y : 0), l = ws, i = 0, r = e.length, u, p; r--; )
            b ? (u = e[r].x - a,
            p = e[r].y - n,
            u = u * u + p * p) : u = Math.abs(e[r] - a),
            u < l && (l = u,
            i = r);
        return i = !f || l <= f ? e[i] : d,
        b || i === d || Js(d) ? i : i + Ye(d)
    }
    : Wb(e))
}, Li = function(e, t, c, f) {
    return xt(Ze(e) ? !t : c === !0 ? !!(c = 0) : !f, function() {
        return Ze(e) ? e[~~(Math.random() * e.length)] : (c = c || 1e-5) && (f = c < 1 ? Math.pow(10, (c + "").length - 2) : 1) && Math.floor(Math.round((e - c / 2 + Math.random() * (t - e + c * .99)) / c) * c * f) / f
    })
}, Pr = function() {
    for (var e = arguments.length, t = new Array(e), c = 0; c < e; c++)
        t[c] = arguments[c];
    return function(f) {
        return t.reduce(function(b, d) {
            return d(b)
        }, f)
    }
}, Br = function(e, t) {
    return function(c) {
        return e(parseFloat(c)) + (t || Ye(c))
    }
}, Lr = function(e, t, c) {
    return Gi(e, t, 0, 1, c)
}, Wi = function(e, t, c) {
    return xt(c, function(f) {
        return e[~~t(f)]
    })
}, Wr = function s(e, t, c) {
    var f = t - e;
    return Ze(e) ? Wi(e, s(0, e.length), t) : xt(c, function(b) {
        return (f + (b - e) % f) % f + e
    })
}, Gr = function s(e, t, c) {
    var f = t - e
      , b = f * 2;
    return Ze(e) ? Wi(e, s(0, e.length - 1), t) : xt(c, function(d) {
        return d = (b + (d - e) % b) % b || 0,
        e + (d > f ? b - d : d)
    })
}, Zc = function(e) {
    return e.replace(Ir, function(t) {
        var c = t.indexOf("[") + 1
          , f = t.substring(c || 7, c ? t.indexOf("]") : t.length - 1).split(Rr);
        return Li(c ? f : +f[0], c ? 0 : +f[1], +f[2] || 1e-5)
    })
}, Gi = function(e, t, c, f, b) {
    var d = t - e
      , a = f - c;
    return xt(b, function(n) {
        return c + ((n - e) / d * a || 0)
    })
}, Jr = function s(e, t, c, f) {
    var b = isNaN(e + t) ? 0 : function(p) {
        return (1 - p) * e + p * t
    }
    ;
    if (!b) {
        var d = ze(e), a = {}, n, l, i, r, u;
        if (c === !0 && (f = 1) && (c = null),
        d)
            e = {
                p: e
            },
            t = {
                p: t
            };
        else if (Ze(e) && !Ze(t)) {
            for (i = [],
            r = e.length,
            u = r - 2,
            l = 1; l < r; l++)
                i.push(s(e[l - 1], e[l]));
            r--,
            b = function(m) {
                m *= r;
                var h = Math.min(u, ~~m);
                return i[h](m - h)
            }
            ,
            c = t
        } else
            f || (e = ic(Ze(e) ? [] : {}, e));
        if (!i) {
            for (n in t)
                $d.call(a, e, n, "get", t[n]);
            b = function(m) {
                return zd(m, a) || (d ? e.p : e)
            }
        }
    }
    return xt(c, b)
}, Ya = function(e, t, c) {
    var f = e.labels, b = ws, d, a, n;
    for (d in f)
        a = f[d] - t,
        a < 0 == !!c && a && b > (a = Math.abs(a)) && (n = d,
        b = a);
    return n
}, ls = function(e, t, c) {
    var f = e.vars, b = f[t], d = xe, a = e._ctx, n, l, i;
    if (b)
        return n = f[t + "Params"],
        l = f.callbackScope || e,
        c && rt.length && kf(),
        a && (xe = a),
        i = n ? b.apply(l, n) : b.call(l),
        xe = d,
        i
}, Ec = function(e) {
    return gt(e),
    e.scrollTrigger && e.scrollTrigger.kill(!!He),
    e.progress() < 1 && ls(e, "onInterrupt"),
    e
}, Wt, Ji = [], e0 = function(e) {
    if (e)
        if (e = !e.name && e.default || e,
        Td() || e.headless) {
            var t = e.name
              , c = Ae(e)
              , f = t && !c && e.init ? function() {
                this._props = []
            }
            : e
              , b = {
                init: Xc,
                render: zd,
                add: $d,
                kill: uh,
                modifier: ph,
                rawVars: 0
            }
              , d = {
                targetTest: 0,
                get: 0,
                getSetter: Vd,
                aliases: {},
                register: 0
            };
            if (rc(),
            e !== f) {
                if (as[t])
                    return;
                ms(f, ms(Of(e, b), d)),
                ic(f.prototype, ic(b, Of(e, d))),
                as[f.prop = t] = f,
                e.targetTest && (pf.push(f),
                kd[t] = 1),
                t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
            }
            Vi(t, f),
            e.register && e.register(cs, f, ss)
        } else
            Ji.push(e)
}, me = 255, Fc = {
    aqua: [0, me, me],
    lime: [0, me, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, me],
    navy: [0, 0, 128],
    white: [me, me, me],
    olive: [128, 128, 0],
    yellow: [me, me, 0],
    orange: [me, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [me, 0, 0],
    pink: [me, 192, 203],
    cyan: [0, me, me],
    transparent: [me, me, me, 0]
}, Db = function(e, t, c) {
    return e += e < 0 ? 1 : e > 1 ? -1 : 0,
    (e * 6 < 1 ? t + (c - t) * e * 6 : e < .5 ? c : e * 3 < 2 ? t + (c - t) * (2 / 3 - e) * 6 : t) * me + .5 | 0
}, s0 = function(e, t, c) {
    var f = e ? Js(e) ? [e >> 16, e >> 8 & me, e & me] : 0 : Fc.black, b, d, a, n, l, i, r, u, p, m;
    if (!f) {
        if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)),
        Fc[e])
            f = Fc[e];
        else if (e.charAt(0) === "#") {
            if (e.length < 6 && (b = e.charAt(1),
            d = e.charAt(2),
            a = e.charAt(3),
            e = "#" + b + b + d + d + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")),
            e.length === 9)
                return f = parseInt(e.substr(1, 6), 16),
                [f >> 16, f >> 8 & me, f & me, parseInt(e.substr(7), 16) / 255];
            e = parseInt(e.substr(1), 16),
            f = [e >> 16, e >> 8 & me, e & me]
        } else if (e.substr(0, 3) === "hsl") {
            if (f = m = e.match(za),
            !t)
                n = +f[0] % 360 / 360,
                l = +f[1] / 100,
                i = +f[2] / 100,
                d = i <= .5 ? i * (l + 1) : i + l - i * l,
                b = i * 2 - d,
                f.length > 3 && (f[3] *= 1),
                f[0] = Db(n + 1 / 3, b, d),
                f[1] = Db(n, b, d),
                f[2] = Db(n - 1 / 3, b, d);
            else if (~e.indexOf("="))
                return f = e.match(Ri),
                c && f.length < 4 && (f[3] = 1),
                f
        } else
            f = e.match(za) || Fc.transparent;
        f = f.map(Number)
    }
    return t && !m && (b = f[0] / me,
    d = f[1] / me,
    a = f[2] / me,
    r = Math.max(b, d, a),
    u = Math.min(b, d, a),
    i = (r + u) / 2,
    r === u ? n = l = 0 : (p = r - u,
    l = i > .5 ? p / (2 - r - u) : p / (r + u),
    n = r === b ? (d - a) / p + (d < a ? 6 : 0) : r === d ? (a - b) / p + 2 : (b - d) / p + 4,
    n *= 60),
    f[0] = ~~(n + .5),
    f[1] = ~~(l * 100 + .5),
    f[2] = ~~(i * 100 + .5)),
    c && f.length < 4 && (f[3] = 1),
    f
}, t0 = function(e) {
    var t = []
      , c = []
      , f = -1;
    return e.split(ht).forEach(function(b) {
        var d = b.match(Lt) || [];
        t.push.apply(t, d),
        c.push(f += d.length + 1)
    }),
    t.c = c,
    t
}, qa = function(e, t, c) {
    var f = "", b = (e + f).match(ht), d = t ? "hsla(" : "rgba(", a = 0, n, l, i, r;
    if (!b)
        return e;
    if (b = b.map(function(u) {
        return (u = s0(u, t, 1)) && d + (t ? u[0] + "," + u[1] + "%," + u[2] + "%," + u[3] : u.join(",")) + ")"
    }),
    c && (i = t0(e),
    n = c.c,
    n.join(f) !== i.c.join(f)))
        for (l = e.replace(ht, "1").split(Lt),
        r = l.length - 1; a < r; a++)
            f += l[a] + (~n.indexOf(a) ? b.shift() || d + "0,0,0,0)" : (i.length ? i : b.length ? b : c).shift());
    if (!l)
        for (l = e.split(ht),
        r = l.length - 1; a < r; a++)
            f += l[a] + b[a];
    return f + l[r]
}, ht = (function() {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
    for (e in Fc)
        s += "|" + e + "\\b";
    return new RegExp(s + ")","gi")
}
)(), eh = /hsl[a]?\(/, c0 = function(e) {
    var t = e.join(" "), c;
    if (ht.lastIndex = 0,
    ht.test(t))
        return c = eh.test(t),
        e[1] = qa(e[1], c),
        e[0] = qa(e[0], c, t0(e[1])),
        !0
}, Qc, ns = (function() {
    var s = Date.now, e = 500, t = 33, c = s(), f = c, b = 1e3 / 240, d = b, a = [], n, l, i, r, u, p, m = function h(g) {
        var w = s() - f, C = g === !0, A, E, D, O;
        if ((w > e || w < 0) && (c += w - t),
        f += w,
        D = f - c,
        A = D - d,
        (A > 0 || C) && (O = ++r.frame,
        u = D - r.time * 1e3,
        r.time = D = D / 1e3,
        d += A + (A >= b ? 4 : b - A),
        E = 1),
        C || (n = l(h)),
        E)
            for (p = 0; p < a.length; p++)
                a[p](D, u, O, g)
    };
    return r = {
        time: 0,
        frame: 0,
        tick: function() {
            m(!0)
        },
        deltaRatio: function(g) {
            return u / (1e3 / (g || 60))
        },
        wake: function() {
            Ni && (!Zb && Td() && (Rs = Zb = window,
            Ad = Rs.document || {},
            us.gsap = cs,
            (Rs.gsapVersions || (Rs.gsapVersions = [])).push(cs.version),
            ji(_f || Rs.GreenSockGlobals || !Rs.gsap && Rs || {}),
            Ji.forEach(e0)),
            i = typeof requestAnimationFrame < "u" && requestAnimationFrame,
            n && r.sleep(),
            l = i || function(g) {
                return setTimeout(g, d - r.time * 1e3 + 1 | 0)
            }
            ,
            Qc = 1,
            m(2))
        },
        sleep: function() {
            (i ? cancelAnimationFrame : clearTimeout)(n),
            Qc = 0,
            l = Xc
        },
        lagSmoothing: function(g, w) {
            e = g || 1 / 0,
            t = Math.min(w || 33, e)
        },
        fps: function(g) {
            b = 1e3 / (g || 240),
            d = r.time * 1e3 + b
        },
        add: function(g, w, C) {
            var A = w ? function(E, D, O, _) {
                g(E, D, O, _),
                r.remove(A)
            }
            : g;
            return r.remove(g),
            a[C ? "unshift" : "push"](A),
            rc(),
            A
        },
        remove: function(g, w) {
            ~(w = a.indexOf(g)) && a.splice(w, 1) && p >= w && p--
        },
        _listeners: a
    },
    r
}
)(), rc = function() {
    return !Qc && ns.wake()
}, ae = {}, sh = /^[\d.\-M][\d.\-,\s]/, th = /["']/g, ch = function(e) {
    for (var t = {}, c = e.substr(1, e.length - 3).split(":"), f = c[0], b = 1, d = c.length, a, n, l; b < d; b++)
        n = c[b],
        a = b !== d - 1 ? n.lastIndexOf(",") : n.length,
        l = n.substr(0, a),
        t[f] = isNaN(l) ? l.replace(th, "").trim() : +l,
        f = n.substr(a + 1).trim();
    return t
}, fh = function(e) {
    var t = e.indexOf("(") + 1
      , c = e.indexOf(")")
      , f = e.indexOf("(", t);
    return e.substring(t, ~f && f < c ? e.indexOf(")", c + 1) : c)
}, bh = function(e) {
    var t = (e + "").split("(")
      , c = ae[t[0]];
    return c && t.length > 1 && c.config ? c.config.apply(null, ~e.indexOf("{") ? [ch(t[1])] : fh(e).split(",").map(Si)) : ae._CE && sh.test(e) ? ae._CE("", e) : c
}, f0 = function(e) {
    return function(t) {
        return 1 - e(1 - t)
    }
}, b0 = function s(e, t) {
    for (var c = e._first, f; c; )
        c instanceof Be ? s(c, t) : c.vars.yoyoEase && (!c._yoyo || !c._repeat) && c._yoyo !== t && (c.timeline ? s(c.timeline, t) : (f = c._ease,
        c._ease = c._yEase,
        c._yEase = f,
        c._yoyo = t)),
        c = c._next
}, St = function(e, t) {
    return e && (Ae(e) ? e : ae[e] || bh(e)) || t
}, qt = function(e, t, c, f) {
    c === void 0 && (c = function(n) {
        return 1 - t(1 - n)
    }
    ),
    f === void 0 && (f = function(n) {
        return n < .5 ? t(n * 2) / 2 : 1 - t((1 - n) * 2) / 2
    }
    );
    var b = {
        easeIn: t,
        easeOut: c,
        easeInOut: f
    }, d;
    return es(e, function(a) {
        ae[a] = us[a] = b,
        ae[d = a.toLowerCase()] = c;
        for (var n in b)
            ae[d + (n === "easeIn" ? ".in" : n === "easeOut" ? ".out" : ".inOut")] = ae[a + "." + n] = b[n]
    }),
    b
}, d0 = function(e) {
    return function(t) {
        return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2
    }
}, Cb = function s(e, t, c) {
    var f = t >= 1 ? t : 1
      , b = (c || (e ? .3 : .45)) / (t < 1 ? t : 1)
      , d = b / Xb * (Math.asin(1 / f) || 0)
      , a = function(i) {
        return i === 1 ? 1 : f * Math.pow(2, -10 * i) * Or((i - d) * b) + 1
    }
      , n = e === "out" ? a : e === "in" ? function(l) {
        return 1 - a(1 - l)
    }
    : d0(a);
    return b = Xb / b,
    n.config = function(l, i) {
        return s(e, l, i)
    }
    ,
    n
}, xb = function s(e, t) {
    t === void 0 && (t = 1.70158);
    var c = function(d) {
        return d ? --d * d * ((t + 1) * d + t) + 1 : 0
    }
      , f = e === "out" ? c : e === "in" ? function(b) {
        return 1 - c(1 - b)
    }
    : d0(c);
    return f.config = function(b) {
        return s(e, b)
    }
    ,
    f
};
es("Linear,Quad,Cubic,Quart,Quint,Strong", function(s, e) {
    var t = e < 5 ? e + 1 : e;
    qt(s + ",Power" + (t - 1), e ? function(c) {
        return Math.pow(c, t)
    }
    : function(c) {
        return c
    }
    , function(c) {
        return 1 - Math.pow(1 - c, t)
    }, function(c) {
        return c < .5 ? Math.pow(c * 2, t) / 2 : 1 - Math.pow((1 - c) * 2, t) / 2
    })
});
ae.Linear.easeNone = ae.none = ae.Linear.easeIn;
qt("Elastic", Cb("in"), Cb("out"), Cb());
(function(s, e) {
    var t = 1 / e
      , c = 2 * t
      , f = 2.5 * t
      , b = function(a) {
        return a < t ? s * a * a : a < c ? s * Math.pow(a - 1.5 / e, 2) + .75 : a < f ? s * (a -= 2.25 / e) * a + .9375 : s * Math.pow(a - 2.625 / e, 2) + .984375
    };
    qt("Bounce", function(d) {
        return 1 - b(1 - d)
    }, b)
}
)(7.5625, 2.75);
qt("Expo", function(s) {
    return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s)
});
qt("Circ", function(s) {
    return -(Oi(1 - s * s) - 1)
});
qt("Sine", function(s) {
    return s === 1 ? 1 : -kr(s * Ar) + 1
});
qt("Back", xb("in"), xb("out"), xb());
ae.SteppedEase = ae.steps = us.SteppedEase = {
    config: function(e, t) {
        e === void 0 && (e = 1);
        var c = 1 / e
          , f = e + (t ? 0 : 1)
          , b = t ? 1 : 0
          , d = 1 - ge;
        return function(a) {
            return ((f * ef(0, d, a) | 0) + b) * c
        }
    }
};
nc.ease = ae["quad.out"];
es("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(s) {
    return Od += s + "," + s + "Params,"
});
var a0 = function(e, t) {
    this.id = _r++,
    e._gsap = this,
    this.target = e,
    this.harness = t,
    this.get = t ? t.get : Hi,
    this.set = t ? t.getSetter : Vd
}
  , Mc = (function() {
    function s(t) {
        this.vars = t,
        this._delay = +t.delay || 0,
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
        this._yoyo = !!t.yoyo || !!t.yoyoEase),
        this._ts = 1,
        oc(this, +t.duration, 1, 1),
        this.data = t.data,
        xe && (this._ctx = xe,
        xe.data.push(this)),
        Qc || ns.wake()
    }
    var e = s.prototype;
    return e.delay = function(c) {
        return c || c === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + c - this._delay),
        this._delay = c,
        this) : this._delay
    }
    ,
    e.duration = function(c) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? c + (c + this._rDelay) * this._repeat : c) : this.totalDuration() && this._dur
    }
    ,
    e.totalDuration = function(c) {
        return arguments.length ? (this._dirty = 0,
        oc(this, this._repeat < 0 ? c : (c - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    e.totalTime = function(c, f) {
        if (rc(),
        !arguments.length)
            return this._tTime;
        var b = this._dp;
        if (b && b.smoothChildTiming && this._ts) {
            for (eb(this, c),
            !b._dp || b.parent || qi(b, this); b && b.parent; )
                b.parent._time !== b._start + (b._ts >= 0 ? b._tTime / b._ts : (b.totalDuration() - b._tTime) / -b._ts) && b.totalTime(b._tTime, !0),
                b = b.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && c < this._tDur || this._ts < 0 && c > 0 || !this._tDur && !c) && js(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== c || !this._dur && !f || this._initted && Math.abs(this._zTime) === ge || !this._initted && this._dur && c || !c && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = c),
        Ui(this, c, f)),
        this
    }
    ,
    e.time = function(c, f) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), c + Sa(this)) % (this._dur + this._rDelay) || (c ? this._dur : 0), f) : this._time
    }
    ,
    e.totalProgress = function(c, f) {
        return arguments.length ? this.totalTime(this.totalDuration() * c, f) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0
    }
    ,
    e.progress = function(c, f) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - c : c) + Sa(this), f) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0
    }
    ,
    e.iteration = function(c, f) {
        var b = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (c - 1) * b, f) : this._repeat ? lc(this._tTime, b) + 1 : 1
    }
    ,
    e.timeScale = function(c, f) {
        if (!arguments.length)
            return this._rts === -ge ? 0 : this._rts;
        if (this._rts === c)
            return this;
        var b = this.parent && this._ts ? If(this.parent._time, this) : this._tTime;
        return this._rts = +c || 0,
        this._ts = this._ps || c === -ge ? 0 : this._rts,
        this.totalTime(ef(-Math.abs(this._delay), this.totalDuration(), b), f !== !1),
        Jf(this),
        Sr(this)
    }
    ,
    e.paused = function(c) {
        return arguments.length ? (this._ps !== c && (this._ps = c,
        c ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (rc(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ge && (this._tTime -= ge)))),
        this) : this._ps
    }
    ,
    e.startTime = function(c) {
        if (arguments.length) {
            this._start = Ee(c);
            var f = this.parent || this._dp;
            return f && (f._sort || !this.parent) && js(f, this, this._start - this._delay),
            this
        }
        return this._start
    }
    ,
    e.endTime = function(c) {
        return this._start + (Je(c) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    e.rawTime = function(c) {
        var f = this.parent || this._dp;
        return f ? c && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? If(f.rawTime(c), this) : this._tTime : this._tTime
    }
    ,
    e.revert = function(c) {
        c === void 0 && (c = Vr);
        var f = He;
        return He = c,
        Rd(this) && (this.timeline && this.timeline.revert(c),
        this.totalTime(-.01, c.suppressEvents)),
        this.data !== "nested" && c.kill !== !1 && this.kill(),
        He = f,
        this
    }
    ,
    e.globalTime = function(c) {
        for (var f = this, b = arguments.length ? c : f.rawTime(); f; )
            b = f._start + b / (Math.abs(f._ts) || 1),
            f = f._dp;
        return !this.parent && this._sat ? this._sat.globalTime(c) : b
    }
    ,
    e.repeat = function(c) {
        return arguments.length ? (this._repeat = c === 1 / 0 ? -2 : c,
        Ka(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    e.repeatDelay = function(c) {
        if (arguments.length) {
            var f = this._time;
            return this._rDelay = c,
            Ka(this),
            f ? this.time(f) : this
        }
        return this._rDelay
    }
    ,
    e.yoyo = function(c) {
        return arguments.length ? (this._yoyo = c,
        this) : this._yoyo
    }
    ,
    e.seek = function(c, f) {
        return this.totalTime(vs(this, c), Je(f))
    }
    ,
    e.restart = function(c, f) {
        return this.play().totalTime(c ? -this._delay : 0, Je(f)),
        this._dur || (this._zTime = -ge),
        this
    }
    ,
    e.play = function(c, f) {
        return c != null && this.seek(c, f),
        this.reversed(!1).paused(!1)
    }
    ,
    e.reverse = function(c, f) {
        return c != null && this.seek(c || this.totalDuration(), f),
        this.reversed(!0).paused(!1)
    }
    ,
    e.pause = function(c, f) {
        return c != null && this.seek(c, f),
        this.paused(!0)
    }
    ,
    e.resume = function() {
        return this.paused(!1)
    }
    ,
    e.reversed = function(c) {
        return arguments.length ? (!!c !== this.reversed() && this.timeScale(-this._rts || (c ? -ge : 0)),
        this) : this._rts < 0
    }
    ,
    e.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -ge,
        this
    }
    ,
    e.isActive = function() {
        var c = this.parent || this._dp, f = this._start, b;
        return !!(!c || this._ts && this._initted && c.isActive() && (b = c.rawTime(!0)) >= f && b < this.endTime(!0) - ge)
    }
    ,
    e.eventCallback = function(c, f, b) {
        var d = this.vars;
        return arguments.length > 1 ? (f ? (d[c] = f,
        b && (d[c + "Params"] = b),
        c === "onUpdate" && (this._onUpdate = f)) : delete d[c],
        this) : d[c]
    }
    ,
    e.then = function(c) {
        var f = this
          , b = f._prom;
        return new Promise(function(d) {
            var a = Ae(c) ? c : Ki
              , n = function() {
                var i = f.then;
                f.then = null,
                b && b(),
                Ae(a) && (a = a(f)) && (a.then || a === f) && (f.then = i),
                d(a),
                f.then = i
            };
            f._initted && f.totalProgress() === 1 && f._ts >= 0 || !f._tTime && f._ts < 0 ? n() : f._prom = n
        }
        )
    }
    ,
    e.kill = function() {
        Ec(this)
    }
    ,
    s
}
)();
ms(Mc.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -ge,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var Be = (function(s) {
    ki(e, s);
    function e(c, f) {
        var b;
        return c === void 0 && (c = {}),
        b = s.call(this, c) || this,
        b.labels = {},
        b.smoothChildTiming = !!c.smoothChildTiming,
        b.autoRemoveChildren = !!c.autoRemoveChildren,
        b._sort = Je(c.sortChildren),
        ye && js(c.parent || ye, Xs(b), f),
        c.reversed && b.reverse(),
        c.paused && b.paused(!0),
        c.scrollTrigger && Xi(Xs(b), c.scrollTrigger),
        b
    }
    var t = e.prototype;
    return t.to = function(f, b, d) {
        return $c(0, arguments, this),
        this
    }
    ,
    t.from = function(f, b, d) {
        return $c(1, arguments, this),
        this
    }
    ,
    t.fromTo = function(f, b, d, a) {
        return $c(2, arguments, this),
        this
    }
    ,
    t.set = function(f, b, d) {
        return b.duration = 0,
        b.parent = this,
        Rc(b).repeatDelay || (b.repeat = 0),
        b.immediateRender = !!b.immediateRender,
        new Re(f,b,vs(this, d),1),
        this
    }
    ,
    t.call = function(f, b, d) {
        return js(this, Re.delayedCall(0, f, b), d)
    }
    ,
    t.staggerTo = function(f, b, d, a, n, l, i) {
        return d.duration = b,
        d.stagger = d.stagger || a,
        d.onComplete = l,
        d.onCompleteParams = i,
        d.parent = this,
        new Re(f,d,vs(this, n)),
        this
    }
    ,
    t.staggerFrom = function(f, b, d, a, n, l, i) {
        return d.runBackwards = 1,
        Rc(d).immediateRender = Je(d.immediateRender),
        this.staggerTo(f, b, d, a, n, l, i)
    }
    ,
    t.staggerFromTo = function(f, b, d, a, n, l, i, r) {
        return a.startAt = d,
        Rc(a).immediateRender = Je(a.immediateRender),
        this.staggerTo(f, b, a, n, l, i, r)
    }
    ,
    t.render = function(f, b, d) {
        var a = this._time, n = this._dirty ? this.totalDuration() : this._tDur, l = this._dur, i = f <= 0 ? 0 : Ee(f), r = this._zTime < 0 != f < 0 && (this._initted || !l), u, p, m, h, g, w, C, A, E, D, O, _;
        if (this !== ye && i > n && f >= 0 && (i = n),
        i !== this._tTime || d || r) {
            if (a !== this._time && l && (i += this._time - a,
            f += this._time - a),
            u = i,
            E = this._start,
            A = this._ts,
            w = !A,
            r && (l || (a = this._zTime),
            (f || !b) && (this._zTime = f)),
            this._repeat) {
                if (O = this._yoyo,
                g = l + this._rDelay,
                this._repeat < -1 && f < 0)
                    return this.totalTime(g * 100 + f, b, d);
                if (u = Ee(i % g),
                i === n ? (h = this._repeat,
                u = l) : (D = Ee(i / g),
                h = ~~D,
                h && h === D && (u = l,
                h--),
                u > l && (u = l)),
                D = lc(this._tTime, g),
                !a && this._tTime && D !== h && this._tTime - D * g - this._dur <= 0 && (D = h),
                O && h & 1 && (u = l - u,
                _ = 1),
                h !== D && !this._lock) {
                    var k = O && D & 1
                      , F = k === (O && h & 1);
                    if (h < D && (k = !k),
                    a = k ? 0 : i % l ? l : i,
                    this._lock = 1,
                    this.render(a || (_ ? 0 : Ee(h * g)), b, !l)._lock = 0,
                    this._tTime = i,
                    !b && this.parent && ls(this, "onRepeat"),
                    this.vars.repeatRefresh && !_ && (this.invalidate()._lock = 1,
                    D = h),
                    a && a !== this._time || w !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (l = this._dur,
                    n = this._tDur,
                    F && (this._lock = 2,
                    a = k ? l : -1e-4,
                    this.render(a, !0),
                    this.vars.repeatRefresh && !_ && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !w)
                        return this;
                    b0(this, _)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (C = Xr(this, Ee(a), Ee(u)),
            C && (i -= u - (u = C._start))),
            this._tTime = i,
            this._time = u,
            this._act = !A,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = f,
            a = 0),
            !a && i && l && !b && !D && (ls(this, "onStart"),
            this._tTime !== i))
                return this;
            if (u >= a && f >= 0)
                for (p = this._first; p; ) {
                    if (m = p._next,
                    (p._act || u >= p._start) && p._ts && C !== p) {
                        if (p.parent !== this)
                            return this.render(f, b, d);
                        if (p.render(p._ts > 0 ? (u - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (u - p._start) * p._ts, b, d),
                        u !== this._time || !this._ts && !w) {
                            C = 0,
                            m && (i += this._zTime = -ge);
                            break
                        }
                    }
                    p = m
                }
            else {
                p = this._last;
                for (var N = f < 0 ? f : u; p; ) {
                    if (m = p._prev,
                    (p._act || N <= p._end) && p._ts && C !== p) {
                        if (p.parent !== this)
                            return this.render(f, b, d);
                        if (p.render(p._ts > 0 ? (N - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (N - p._start) * p._ts, b, d || He && Rd(p)),
                        u !== this._time || !this._ts && !w) {
                            C = 0,
                            m && (i += this._zTime = N ? -ge : ge);
                            break
                        }
                    }
                    p = m
                }
            }
            if (C && !b && (this.pause(),
            C.render(u >= a ? 0 : -ge)._zTime = u >= a ? 1 : -1,
            this._ts))
                return this._start = E,
                Jf(this),
                this.render(f, b, d);
            this._onUpdate && !b && ls(this, "onUpdate", !0),
            (i === n && this._tTime >= this.totalDuration() || !i && a) && (E === this._start || Math.abs(A) !== Math.abs(this._ts)) && (this._lock || ((f || !l) && (i === n && this._ts > 0 || !i && this._ts < 0) && gt(this, 1),
            !b && !(f < 0 && !a) && (i || a || !n) && (ls(this, i === n && f >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(i < n && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    t.add = function(f, b) {
        var d = this;
        if (Js(b) || (b = vs(this, b, f)),
        !(f instanceof Mc)) {
            if (Ze(f))
                return f.forEach(function(a) {
                    return d.add(a, b)
                }),
                this;
            if (ze(f))
                return this.addLabel(f, b);
            if (Ae(f))
                f = Re.delayedCall(0, f);
            else
                return this
        }
        return this !== f ? js(this, f, b) : this
    }
    ,
    t.getChildren = function(f, b, d, a) {
        f === void 0 && (f = !0),
        b === void 0 && (b = !0),
        d === void 0 && (d = !0),
        a === void 0 && (a = -ws);
        for (var n = [], l = this._first; l; )
            l._start >= a && (l instanceof Re ? b && n.push(l) : (d && n.push(l),
            f && n.push.apply(n, l.getChildren(!0, b, d)))),
            l = l._next;
        return n
    }
    ,
    t.getById = function(f) {
        for (var b = this.getChildren(1, 1, 1), d = b.length; d--; )
            if (b[d].vars.id === f)
                return b[d]
    }
    ,
    t.remove = function(f) {
        return ze(f) ? this.removeLabel(f) : Ae(f) ? this.killTweensOf(f) : (f.parent === this && Gf(this, f),
        f === this._recent && (this._recent = this._last),
        Ut(this))
    }
    ,
    t.totalTime = function(f, b) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = Ee(ns.time - (this._ts > 0 ? f / this._ts : (this.totalDuration() - f) / -this._ts))),
        s.prototype.totalTime.call(this, f, b),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    t.addLabel = function(f, b) {
        return this.labels[f] = vs(this, b),
        this
    }
    ,
    t.removeLabel = function(f) {
        return delete this.labels[f],
        this
    }
    ,
    t.addPause = function(f, b, d) {
        var a = Re.delayedCall(0, b || Xc, d);
        return a.data = "isPause",
        this._hasPause = 1,
        js(this, a, vs(this, f))
    }
    ,
    t.removePause = function(f) {
        var b = this._first;
        for (f = vs(this, f); b; )
            b._start === f && b.data === "isPause" && gt(b),
            b = b._next
    }
    ,
    t.killTweensOf = function(f, b, d) {
        for (var a = this.getTweensOf(f, d), n = a.length; n--; )
            at !== a[n] && a[n].kill(f, b);
        return this
    }
    ,
    t.getTweensOf = function(f, b) {
        for (var d = [], a = Ds(f), n = this._first, l = Js(b), i; n; )
            n instanceof Re ? zr(n._targets, a) && (l ? (!at || n._initted && n._ts) && n.globalTime(0) <= b && n.globalTime(n.totalDuration()) > b : !b || n.isActive()) && d.push(n) : (i = n.getTweensOf(a, b)).length && d.push.apply(d, i),
            n = n._next;
        return d
    }
    ,
    t.tweenTo = function(f, b) {
        b = b || {};
        var d = this, a = vs(d, f), n = b, l = n.startAt, i = n.onStart, r = n.onStartParams, u = n.immediateRender, p, m = Re.to(d, ms({
            ease: b.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: a,
            overwrite: "auto",
            duration: b.duration || Math.abs((a - (l && "time"in l ? l.time : d._time)) / d.timeScale()) || ge,
            onStart: function() {
                if (d.pause(),
                !p) {
                    var g = b.duration || Math.abs((a - (l && "time"in l ? l.time : d._time)) / d.timeScale());
                    m._dur !== g && oc(m, g, 0, 1).render(m._time, !0, !0),
                    p = 1
                }
                i && i.apply(m, r || [])
            }
        }, b));
        return u ? m.render(0) : m
    }
    ,
    t.tweenFromTo = function(f, b, d) {
        return this.tweenTo(b, ms({
            startAt: {
                time: vs(this, f)
            }
        }, d))
    }
    ,
    t.recent = function() {
        return this._recent
    }
    ,
    t.nextLabel = function(f) {
        return f === void 0 && (f = this._time),
        Ya(this, vs(this, f))
    }
    ,
    t.previousLabel = function(f) {
        return f === void 0 && (f = this._time),
        Ya(this, vs(this, f), 1)
    }
    ,
    t.currentLabel = function(f) {
        return arguments.length ? this.seek(f, !0) : this.previousLabel(this._time + ge)
    }
    ,
    t.shiftChildren = function(f, b, d) {
        d === void 0 && (d = 0);
        var a = this._first, n = this.labels, l;
        for (f = Ee(f); a; )
            a._start >= d && (a._start += f,
            a._end += f),
            a = a._next;
        if (b)
            for (l in n)
                n[l] >= d && (n[l] += f);
        return Ut(this)
    }
    ,
    t.invalidate = function(f) {
        var b = this._first;
        for (this._lock = 0; b; )
            b.invalidate(f),
            b = b._next;
        return s.prototype.invalidate.call(this, f)
    }
    ,
    t.clear = function(f) {
        f === void 0 && (f = !0);
        for (var b = this._first, d; b; )
            d = b._next,
            this.remove(b),
            b = d;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        f && (this.labels = {}),
        Ut(this)
    }
    ,
    t.totalDuration = function(f) {
        var b = 0, d = this, a = d._last, n = ws, l, i, r;
        if (arguments.length)
            return d.timeScale((d._repeat < 0 ? d.duration() : d.totalDuration()) / (d.reversed() ? -f : f));
        if (d._dirty) {
            for (r = d.parent; a; )
                l = a._prev,
                a._dirty && a.totalDuration(),
                i = a._start,
                i > n && d._sort && a._ts && !d._lock ? (d._lock = 1,
                js(d, a, i - a._delay, 1)._lock = 0) : n = i,
                i < 0 && a._ts && (b -= i,
                (!r && !d._dp || r && r.smoothChildTiming) && (d._start += Ee(i / d._ts),
                d._time -= i,
                d._tTime -= i),
                d.shiftChildren(-i, !1, -1 / 0),
                n = 0),
                a._end > b && a._ts && (b = a._end),
                a = l;
            oc(d, d === ye && d._time > b ? d._time : b, 1, 1),
            d._dirty = 0
        }
        return d._tDur
    }
    ,
    e.updateRoot = function(f) {
        if (ye._ts && (Ui(ye, If(f, ye)),
        zi = ns.frame),
        ns.frame >= Ha) {
            Ha += ps.autoSleep || 120;
            var b = ye._first;
            if ((!b || !b._ts) && ps.autoSleep && ns._listeners.length < 2) {
                for (; b && !b._ts; )
                    b = b._next;
                b || ns.sleep()
            }
        }
    }
    ,
    e
}
)(Mc);
ms(Be.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var dh = function(e, t, c, f, b, d, a) {
    var n = new ss(this._pt,e,t,0,1,h0,null,b), l = 0, i = 0, r, u, p, m, h, g, w, C;
    for (n.b = c,
    n.e = f,
    c += "",
    f += "",
    (w = ~f.indexOf("random(")) && (f = Zc(f)),
    d && (C = [c, f],
    d(C, e, t),
    c = C[0],
    f = C[1]),
    u = c.match(vb) || []; r = vb.exec(f); )
        m = r[0],
        h = f.substring(l, r.index),
        p ? p = (p + 1) % 5 : h.substr(-5) === "rgba(" && (p = 1),
        m !== u[i++] && (g = parseFloat(u[i - 1]) || 0,
        n._pt = {
            _next: n._pt,
            p: h || i === 1 ? h : ",",
            s: g,
            c: m.charAt(1) === "=" ? fc(g, m) - g : parseFloat(m) - g,
            m: p && p < 4 ? Math.round : 0
        },
        l = vb.lastIndex);
    return n.c = l < f.length ? f.substring(l, f.length) : "",
    n.fp = a,
    ($i.test(f) || w) && (n.e = 0),
    this._pt = n,
    n
}, $d = function(e, t, c, f, b, d, a, n, l, i) {
    Ae(f) && (f = f(b || 0, e, d));
    var r = e[t], u = c !== "get" ? c : Ae(r) ? l ? e[t.indexOf("set") || !Ae(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : r, p = Ae(r) ? l ? oh : o0 : jd, m;
    if (ze(f) && (~f.indexOf("random(") && (f = Zc(f)),
    f.charAt(1) === "=" && (m = fc(u, f) + (Ye(u) || 0),
    (m || m === 0) && (f = m))),
    !i || u !== f || Gb)
        return !isNaN(u * f) && f !== "" ? (m = new ss(this._pt,e,t,+u || 0,f - (u || 0),typeof r == "boolean" ? hh : r0,0,p),
        l && (m.fp = l),
        a && m.modifier(a, this, e),
        this._pt = m) : (!r && !(t in e) && _d(t, f),
        dh.call(this, e, t, u, f, p, n || ps.stringFilter, l))
}, ah = function(e, t, c, f, b) {
    if (Ae(e) && (e = Nc(e, b, t, c, f)),
    !Hs(e) || e.style && e.nodeType || Ze(e) || Ii(e))
        return ze(e) ? Nc(e, b, t, c, f) : e;
    var d = {}, a;
    for (a in e)
        d[a] = Nc(e[a], b, t, c, f);
    return d
}, n0 = function(e, t, c, f, b, d) {
    var a, n, l, i;
    if (as[e] && (a = new as[e]).init(b, a.rawVars ? t[e] : ah(t[e], f, b, d, c), c, f, d) !== !1 && (c._pt = n = new ss(c._pt,b,e,0,1,a.render,a,0,a.priority),
    c !== Wt))
        for (l = c._ptLookup[c._targets.indexOf(b)],
        i = a._props.length; i--; )
            l[a._props[i]] = n;
    return a
}, at, Gb, Nd = function s(e, t, c) {
    var f = e.vars, b = f.ease, d = f.startAt, a = f.immediateRender, n = f.lazy, l = f.onUpdate, i = f.runBackwards, r = f.yoyoEase, u = f.keyframes, p = f.autoRevert, m = e._dur, h = e._startAt, g = e._targets, w = e.parent, C = w && w.data === "nested" ? w.vars.targets : g, A = e._overwrite === "auto" && !Fd, E = e.timeline, D, O, _, k, F, N, q, $, X, P, L, B, T;
    if (E && (!u || !b) && (b = "none"),
    e._ease = St(b, nc.ease),
    e._yEase = r ? f0(St(r === !0 ? b : r, nc.ease)) : 0,
    r && e._yoyo && !e._repeat && (r = e._yEase,
    e._yEase = e._ease,
    e._ease = r),
    e._from = !E && !!f.runBackwards,
    !E || u && !f.stagger) {
        if ($ = g[0] ? Ht(g[0]).harness : 0,
        B = $ && f[$.prop],
        D = Of(f, kd),
        h && (h._zTime < 0 && h.progress(1),
        t < 0 && i && a && !p ? h.render(-1, !0) : h.revert(i && m ? hf : jr),
        h._lazy = 0),
        d) {
            if (gt(e._startAt = Re.set(g, ms({
                data: "isStart",
                overwrite: !1,
                parent: w,
                immediateRender: !0,
                lazy: !h && Je(n),
                startAt: null,
                delay: 0,
                onUpdate: l && function() {
                    return ls(e, "onUpdate")
                }
                ,
                stagger: 0
            }, d))),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            t < 0 && (He || !a && !p) && e._startAt.revert(hf),
            a && m && t <= 0 && c <= 0) {
                t && (e._zTime = t);
                return
            }
        } else if (i && m && !h) {
            if (t && (a = !1),
            _ = ms({
                overwrite: !1,
                data: "isFromStart",
                lazy: a && !h && Je(n),
                immediateRender: a,
                stagger: 0,
                parent: w
            }, D),
            B && (_[$.prop] = B),
            gt(e._startAt = Re.set(g, _)),
            e._startAt._dp = 0,
            e._startAt._sat = e,
            t < 0 && (He ? e._startAt.revert(hf) : e._startAt.render(-1, !0)),
            e._zTime = t,
            !a)
                s(e._startAt, ge, ge);
            else if (!t)
                return
        }
        for (e._pt = e._ptCache = 0,
        n = m && Je(n) || n && !m,
        O = 0; O < g.length; O++) {
            if (F = g[O],
            q = F._gsap || Id(g)[O]._gsap,
            e._ptLookup[O] = P = {},
            Qb[q.id] && rt.length && kf(),
            L = C === g ? O : C.indexOf(F),
            $ && (X = new $).init(F, B || D, e, L, C) !== !1 && (e._pt = k = new ss(e._pt,F,X.name,0,1,X.render,X,0,X.priority),
            X._props.forEach(function(y) {
                P[y] = k
            }),
            X.priority && (N = 1)),
            !$ || B)
                for (_ in D)
                    as[_] && (X = n0(_, D, e, L, F, C)) ? X.priority && (N = 1) : P[_] = k = $d.call(e, F, _, "get", D[_], L, C, 0, f.stringFilter);
            e._op && e._op[O] && e.kill(F, e._op[O]),
            A && e._pt && (at = e,
            ye.killTweensOf(F, P, e.globalTime(t)),
            T = !e.parent,
            at = 0),
            e._pt && n && (Qb[q.id] = 1)
        }
        N && p0(e),
        e._onInit && e._onInit(e)
    }
    e._onUpdate = l,
    e._initted = (!e._op || e._pt) && !T,
    u && t <= 0 && E.render(ws, !0, !0)
}, nh = function(e, t, c, f, b, d, a, n) {
    var l = (e._pt && e._ptCache || (e._ptCache = {}))[t], i, r, u, p;
    if (!l)
        for (l = e._ptCache[t] = [],
        u = e._ptLookup,
        p = e._targets.length; p--; ) {
            if (i = u[p][t],
            i && i.d && i.d._pt)
                for (i = i.d._pt; i && i.p !== t && i.fp !== t; )
                    i = i._next;
            if (!i)
                return Gb = 1,
                e.vars[t] = "+=0",
                Nd(e, a),
                Gb = 0,
                n ? qc(t + " not eligible for reset") : 1;
            l.push(i)
        }
    for (p = l.length; p--; )
        r = l[p],
        i = r._pt || r,
        i.s = (f || f === 0) && !b ? f : i.s + (f || 0) + d * i.c,
        i.c = c - i.s,
        r.e && (r.e = ke(c) + Ye(r.e)),
        r.b && (r.b = i.s + Ye(r.b))
}, ih = function(e, t) {
    var c = e[0] ? Ht(e[0]).harness : 0, f = c && c.aliases, b, d, a, n;
    if (!f)
        return t;
    b = ic({}, t);
    for (d in f)
        if (d in b)
            for (n = f[d].split(","),
            a = n.length; a--; )
                b[n[a]] = b[d];
    return b
}, lh = function(e, t, c, f) {
    var b = t.ease || f || "power1.inOut", d, a;
    if (Ze(t))
        a = c[e] || (c[e] = []),
        t.forEach(function(n, l) {
            return a.push({
                t: l / (t.length - 1) * 100,
                v: n,
                e: b
            })
        });
    else
        for (d in t)
            a = c[d] || (c[d] = []),
            d === "ease" || a.push({
                t: parseFloat(e),
                v: t[d],
                e: b
            })
}, Nc = function(e, t, c, f, b) {
    return Ae(e) ? e.call(t, c, f, b) : ze(e) && ~e.indexOf("random(") ? Zc(e) : e
}, i0 = Od + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", l0 = {};
es(i0 + ",id,stagger,delay,duration,paused,scrollTrigger", function(s) {
    return l0[s] = 1
});
var Re = (function(s) {
    ki(e, s);
    function e(c, f, b, d) {
        var a;
        typeof f == "number" && (b.duration = f,
        f = b,
        b = null),
        a = s.call(this, d ? f : Rc(f)) || this;
        var n = a.vars, l = n.duration, i = n.delay, r = n.immediateRender, u = n.stagger, p = n.overwrite, m = n.keyframes, h = n.defaults, g = n.scrollTrigger, w = n.yoyoEase, C = f.parent || ye, A = (Ze(c) || Ii(c) ? Js(c[0]) : "length"in f) ? [c] : Ds(c), E, D, O, _, k, F, N, q;
        if (a._targets = A.length ? Id(A) : qc("GSAP target " + c + " not found. https://gsap.com", !ps.nullTargetWarn) || [],
        a._ptLookup = [],
        a._overwrite = p,
        m || u || bf(l) || bf(i)) {
            if (f = a.vars,
            E = a.timeline = new Be({
                data: "nested",
                defaults: h || {},
                targets: C && C.data === "nested" ? C.vars.targets : A
            }),
            E.kill(),
            E.parent = E._dp = Xs(a),
            E._start = 0,
            u || bf(l) || bf(i)) {
                if (_ = A.length,
                N = u && Pi(u),
                Hs(u))
                    for (k in u)
                        ~i0.indexOf(k) && (q || (q = {}),
                        q[k] = u[k]);
                for (D = 0; D < _; D++)
                    O = Of(f, l0),
                    O.stagger = 0,
                    w && (O.yoyoEase = w),
                    q && ic(O, q),
                    F = A[D],
                    O.duration = +Nc(l, Xs(a), D, F, A),
                    O.delay = (+Nc(i, Xs(a), D, F, A) || 0) - a._delay,
                    !u && _ === 1 && O.delay && (a._delay = i = O.delay,
                    a._start += i,
                    O.delay = 0),
                    E.to(F, O, N ? N(D, F, A) : 0),
                    E._ease = ae.none;
                E.duration() ? l = i = 0 : a.timeline = 0
            } else if (m) {
                Rc(ms(E.vars.defaults, {
                    ease: "none"
                })),
                E._ease = St(m.ease || f.ease || "none");
                var $ = 0, X, P, L;
                if (Ze(m))
                    m.forEach(function(B) {
                        return E.to(A, B, ">")
                    }),
                    E.duration();
                else {
                    O = {};
                    for (k in m)
                        k === "ease" || k === "easeEach" || lh(k, m[k], O, m.easeEach);
                    for (k in O)
                        for (X = O[k].sort(function(B, T) {
                            return B.t - T.t
                        }),
                        $ = 0,
                        D = 0; D < X.length; D++)
                            P = X[D],
                            L = {
                                ease: P.e,
                                duration: (P.t - (D ? X[D - 1].t : 0)) / 100 * l
                            },
                            L[k] = P.v,
                            E.to(A, L, $),
                            $ += L.duration;
                    E.duration() < l && E.to({}, {
                        duration: l - E.duration()
                    })
                }
            }
            l || a.duration(l = E.duration())
        } else
            a.timeline = 0;
        return p === !0 && !Fd && (at = Xs(a),
        ye.killTweensOf(A),
        at = 0),
        js(C, Xs(a), b),
        f.reversed && a.reverse(),
        f.paused && a.paused(!0),
        (r || !l && !m && a._start === Ee(C._time) && Je(r) && Kr(Xs(a)) && C.data !== "nested") && (a._tTime = -ge,
        a.render(Math.max(0, -i) || 0)),
        g && Xi(Xs(a), g),
        a
    }
    var t = e.prototype;
    return t.render = function(f, b, d) {
        var a = this._time, n = this._tDur, l = this._dur, i = f < 0, r = f > n - ge && !i ? n : f < ge ? 0 : f, u, p, m, h, g, w, C, A, E;
        if (!l)
            qr(this, f, b, d);
        else if (r !== this._tTime || !f || d || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== i || this._lazy) {
            if (u = r,
            A = this.timeline,
            this._repeat) {
                if (h = l + this._rDelay,
                this._repeat < -1 && i)
                    return this.totalTime(h * 100 + f, b, d);
                if (u = Ee(r % h),
                r === n ? (m = this._repeat,
                u = l) : (g = Ee(r / h),
                m = ~~g,
                m && m === g ? (u = l,
                m--) : u > l && (u = l)),
                w = this._yoyo && m & 1,
                w && (E = this._yEase,
                u = l - u),
                g = lc(this._tTime, h),
                u === a && !d && this._initted && m === g)
                    return this._tTime = r,
                    this;
                m !== g && (A && this._yEase && b0(A, w),
                this.vars.repeatRefresh && !w && !this._lock && u !== h && this._initted && (this._lock = d = 1,
                this.render(Ee(h * m), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Zi(this, i ? f : u, d, b, r))
                    return this._tTime = 0,
                    this;
                if (a !== this._time && !(d && this.vars.repeatRefresh && m !== g))
                    return this;
                if (l !== this._dur)
                    return this.render(f, b, d)
            }
            if (this._tTime = r,
            this._time = u,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = C = (E || this._ease)(u / l),
            this._from && (this.ratio = C = 1 - C),
            !a && r && !b && !g && (ls(this, "onStart"),
            this._tTime !== r))
                return this;
            for (p = this._pt; p; )
                p.r(C, p.d),
                p = p._next;
            A && A.render(f < 0 ? f : A._dur * A._ease(u / this._dur), b, d) || this._startAt && (this._zTime = f),
            this._onUpdate && !b && (i && Mb(this, f, b, d),
            ls(this, "onUpdate")),
            this._repeat && m !== g && this.vars.onRepeat && !b && this.parent && ls(this, "onRepeat"),
            (r === this._tDur || !r) && this._tTime === r && (i && !this._onUpdate && Mb(this, f, !0, !0),
            (f || !l) && (r === this._tDur && this._ts > 0 || !r && this._ts < 0) && gt(this, 1),
            !b && !(i && !a) && (r || a || w) && (ls(this, r === n ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(r < n && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    t.targets = function() {
        return this._targets
    }
    ,
    t.invalidate = function(f) {
        return (!f || !this.vars.runBackwards) && (this._startAt = 0),
        this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(f),
        s.prototype.invalidate.call(this, f)
    }
    ,
    t.resetTo = function(f, b, d, a, n) {
        Qc || ns.wake(),
        this._ts || this.play();
        var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), i;
        return this._initted || Nd(this, l),
        i = this._ease(l / this._dur),
        nh(this, f, b, d, a, i, l, n) ? this.resetTo(f, b, d, a, 1) : (eb(this, 0),
        this.parent || Yi(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    t.kill = function(f, b) {
        if (b === void 0 && (b = "all"),
        !f && (!b || b === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? Ec(this) : this.scrollTrigger && this.scrollTrigger.kill(!!He),
            this;
        if (this.timeline) {
            var d = this.timeline.totalDuration();
            return this.timeline.killTweensOf(f, b, at && at.vars.overwrite !== !0)._first || Ec(this),
            this.parent && d !== this.timeline.totalDuration() && oc(this, this._dur * this.timeline._tDur / d, 0, 1),
            this
        }
        var a = this._targets, n = f ? Ds(f) : a, l = this._ptLookup, i = this._pt, r, u, p, m, h, g, w;
        if ((!b || b === "all") && Ur(a, n))
            return b === "all" && (this._pt = 0),
            Ec(this);
        for (r = this._op = this._op || [],
        b !== "all" && (ze(b) && (h = {},
        es(b, function(C) {
            return h[C] = 1
        }),
        b = h),
        b = ih(a, b)),
        w = a.length; w--; )
            if (~n.indexOf(a[w])) {
                u = l[w],
                b === "all" ? (r[w] = b,
                m = u,
                p = {}) : (p = r[w] = r[w] || {},
                m = b);
                for (h in m)
                    g = u && u[h],
                    g && ((!("kill"in g.d) || g.d.kill(h) === !0) && Gf(this, g, "_pt"),
                    delete u[h]),
                    p !== "all" && (p[h] = 1)
            }
        return this._initted && !this._pt && i && Ec(this),
        this
    }
    ,
    e.to = function(f, b) {
        return new e(f,b,arguments[2])
    }
    ,
    e.from = function(f, b) {
        return $c(1, arguments)
    }
    ,
    e.delayedCall = function(f, b, d, a) {
        return new e(b,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: f,
            onComplete: b,
            onReverseComplete: b,
            onCompleteParams: d,
            onReverseCompleteParams: d,
            callbackScope: a
        })
    }
    ,
    e.fromTo = function(f, b, d) {
        return $c(2, arguments)
    }
    ,
    e.set = function(f, b) {
        return b.duration = 0,
        b.repeatDelay || (b.repeat = 0),
        new e(f,b)
    }
    ,
    e.killTweensOf = function(f, b, d) {
        return ye.killTweensOf(f, b, d)
    }
    ,
    e
}
)(Mc);
ms(Re.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
es("staggerTo,staggerFrom,staggerFromTo", function(s) {
    Re[s] = function() {
        var e = new Be
          , t = Bb.call(arguments, 0);
        return t.splice(s === "staggerFromTo" ? 5 : 4, 0, 0),
        e[s].apply(e, t)
    }
});
var jd = function(e, t, c) {
    return e[t] = c
}
  , o0 = function(e, t, c) {
    return e[t](c)
}
  , oh = function(e, t, c, f) {
    return e[t](f.fp, c)
}
  , rh = function(e, t, c) {
    return e.setAttribute(t, c)
}
  , Vd = function(e, t) {
    return Ae(e[t]) ? o0 : yd(e[t]) && e.setAttribute ? rh : jd
}
  , r0 = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
}
  , hh = function(e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t)
}
  , h0 = function(e, t) {
    var c = t._pt
      , f = "";
    if (!e && t.b)
        f = t.b;
    else if (e === 1 && t.e)
        f = t.e;
    else {
        for (; c; )
            f = c.p + (c.m ? c.m(c.s + c.c * e) : Math.round((c.s + c.c * e) * 1e4) / 1e4) + f,
            c = c._next;
        f += t.c
    }
    t.set(t.t, t.p, f, t)
}
  , zd = function(e, t) {
    for (var c = t._pt; c; )
        c.r(e, c.d),
        c = c._next
}
  , ph = function(e, t, c, f) {
    for (var b = this._pt, d; b; )
        d = b._next,
        b.p === f && b.modifier(e, t, c),
        b = d
}
  , uh = function(e) {
    for (var t = this._pt, c, f; t; )
        f = t._next,
        t.p === e && !t.op || t.op === e ? Gf(this, t, "_pt") : t.dep || (c = 1),
        t = f;
    return !c
}
  , mh = function(e, t, c, f) {
    f.mSet(e, t, f.m.call(f.tween, c, f.mt), f)
}
  , p0 = function(e) {
    for (var t = e._pt, c, f, b, d; t; ) {
        for (c = t._next,
        f = b; f && f.pr > t.pr; )
            f = f._next;
        (t._prev = f ? f._prev : d) ? t._prev._next = t : b = t,
        (t._next = f) ? f._prev = t : d = t,
        t = c
    }
    e._pt = b
}
  , ss = (function() {
    function s(t, c, f, b, d, a, n, l, i) {
        this.t = c,
        this.s = b,
        this.c = d,
        this.p = f,
        this.r = a || r0,
        this.d = n || this,
        this.set = l || jd,
        this.pr = i || 0,
        this._next = t,
        t && (t._prev = this)
    }
    var e = s.prototype;
    return e.modifier = function(c, f, b) {
        this.mSet = this.mSet || this.set,
        this.set = mh,
        this.m = c,
        this.mt = b,
        this.tween = f
    }
    ,
    s
}
)();
es(Od + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(s) {
    return kd[s] = 1
});
us.TweenMax = us.TweenLite = Re;
us.TimelineLite = us.TimelineMax = Be;
ye = new Be({
    sortChildren: !1,
    defaults: nc,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
ps.stringFilter = c0;
var Kt = []
  , uf = {}
  , gh = []
  , Xa = 0
  , vh = 0
  , Eb = function(e) {
    return (uf[e] || gh).map(function(t) {
        return t()
    })
}
  , Jb = function() {
    var e = Date.now()
      , t = [];
    e - Xa > 2 && (Eb("matchMediaInit"),
    Kt.forEach(function(c) {
        var f = c.queries, b = c.conditions, d, a, n, l;
        for (a in f)
            d = Rs.matchMedia(f[a]).matches,
            d && (n = 1),
            d !== b[a] && (b[a] = d,
            l = 1);
        l && (c.revert(),
        n && t.push(c))
    }),
    Eb("matchMediaRevert"),
    t.forEach(function(c) {
        return c.onMatch(c, function(f) {
            return c.add(null, f)
        })
    }),
    Xa = e,
    Eb("matchMedia"))
}
  , u0 = (function() {
    function s(t, c) {
        this.selector = c && Lb(c),
        this.data = [],
        this._r = [],
        this.isReverted = !1,
        this.id = vh++,
        t && this.add(t)
    }
    var e = s.prototype;
    return e.add = function(c, f, b) {
        Ae(c) && (b = f,
        f = c,
        c = Ae);
        var d = this
          , a = function() {
            var l = xe, i = d.selector, r;
            return l && l !== d && l.data.push(d),
            b && (d.selector = Lb(b)),
            xe = d,
            r = f.apply(d, arguments),
            Ae(r) && d._r.push(r),
            xe = l,
            d.selector = i,
            d.isReverted = !1,
            r
        };
        return d.last = a,
        c === Ae ? a(d, function(n) {
            return d.add(null, n)
        }) : c ? d[c] = a : a
    }
    ,
    e.ignore = function(c) {
        var f = xe;
        xe = null,
        c(this),
        xe = f
    }
    ,
    e.getTweens = function() {
        var c = [];
        return this.data.forEach(function(f) {
            return f instanceof s ? c.push.apply(c, f.getTweens()) : f instanceof Re && !(f.parent && f.parent.data === "nested") && c.push(f)
        }),
        c
    }
    ,
    e.clear = function() {
        this._r.length = this.data.length = 0
    }
    ,
    e.kill = function(c, f) {
        var b = this;
        if (c ? (function() {
            for (var a = b.getTweens(), n = b.data.length, l; n--; )
                l = b.data[n],
                l.data === "isFlip" && (l.revert(),
                l.getChildren(!0, !0, !1).forEach(function(i) {
                    return a.splice(a.indexOf(i), 1)
                }));
            for (a.map(function(i) {
                return {
                    g: i._dur || i._delay || i._sat && !i._sat.vars.immediateRender ? i.globalTime(0) : -1 / 0,
                    t: i
                }
            }).sort(function(i, r) {
                return r.g - i.g || -1 / 0
            }).forEach(function(i) {
                return i.t.revert(c)
            }),
            n = b.data.length; n--; )
                l = b.data[n],
                l instanceof Be ? l.data !== "nested" && (l.scrollTrigger && l.scrollTrigger.revert(),
                l.kill()) : !(l instanceof Re) && l.revert && l.revert(c);
            b._r.forEach(function(i) {
                return i(c, b)
            }),
            b.isReverted = !0
        }
        )() : this.data.forEach(function(a) {
            return a.kill && a.kill()
        }),
        this.clear(),
        f)
            for (var d = Kt.length; d--; )
                Kt[d].id === this.id && Kt.splice(d, 1)
    }
    ,
    e.revert = function(c) {
        this.kill(c || {})
    }
    ,
    s
}
)()
  , wh = (function() {
    function s(t) {
        this.contexts = [],
        this.scope = t,
        xe && xe.data.push(this)
    }
    var e = s.prototype;
    return e.add = function(c, f, b) {
        Hs(c) || (c = {
            matches: c
        });
        var d = new u0(0,b || this.scope), a = d.conditions = {}, n, l, i;
        xe && !d.selector && (d.selector = xe.selector),
        this.contexts.push(d),
        f = d.add("onMatch", f),
        d.queries = c;
        for (l in c)
            l === "all" ? i = 1 : (n = Rs.matchMedia(c[l]),
            n && (Kt.indexOf(d) < 0 && Kt.push(d),
            (a[l] = n.matches) && (i = 1),
            n.addListener ? n.addListener(Jb) : n.addEventListener("change", Jb)));
        return i && f(d, function(r) {
            return d.add(null, r)
        }),
        this
    }
    ,
    e.revert = function(c) {
        this.kill(c || {})
    }
    ,
    e.kill = function(c) {
        this.contexts.forEach(function(f) {
            return f.kill(c, !0)
        })
    }
    ,
    s
}
)()
  , Rf = {
    registerPlugin: function() {
        for (var e = arguments.length, t = new Array(e), c = 0; c < e; c++)
            t[c] = arguments[c];
        t.forEach(function(f) {
            return e0(f)
        })
    },
    timeline: function(e) {
        return new Be(e)
    },
    getTweensOf: function(e, t) {
        return ye.getTweensOf(e, t)
    },
    getProperty: function(e, t, c, f) {
        ze(e) && (e = Ds(e)[0]);
        var b = Ht(e || {}).get
          , d = c ? Ki : Si;
        return c === "native" && (c = ""),
        e && (t ? d((as[t] && as[t].get || b)(e, t, c, f)) : function(a, n, l) {
            return d((as[a] && as[a].get || b)(e, a, n, l))
        }
        )
    },
    quickSetter: function(e, t, c) {
        if (e = Ds(e),
        e.length > 1) {
            var f = e.map(function(i) {
                return cs.quickSetter(i, t, c)
            })
              , b = f.length;
            return function(i) {
                for (var r = b; r--; )
                    f[r](i)
            }
        }
        e = e[0] || {};
        var d = as[t]
          , a = Ht(e)
          , n = a.harness && (a.harness.aliases || {})[t] || t
          , l = d ? function(i) {
            var r = new d;
            Wt._pt = 0,
            r.init(e, c ? i + c : i, Wt, 0, [e]),
            r.render(1, r),
            Wt._pt && zd(1, Wt)
        }
        : a.set(e, n);
        return d ? l : function(i) {
            return l(e, n, c ? i + c : i, a, 1)
        }
    },
    quickTo: function(e, t, c) {
        var f, b = cs.to(e, ms((f = {},
        f[t] = "+=0.1",
        f.paused = !0,
        f.stagger = 0,
        f), c || {})), d = function(n, l, i) {
            return b.resetTo(t, n, l, i)
        };
        return d.tween = b,
        d
    },
    isTweening: function(e) {
        return ye.getTweensOf(e, !0).length > 0
    },
    defaults: function(e) {
        return e && e.ease && (e.ease = St(e.ease, nc.ease)),
        Ua(nc, e || {})
    },
    config: function(e) {
        return Ua(ps, e || {})
    },
    registerEffect: function(e) {
        var t = e.name
          , c = e.effect
          , f = e.plugins
          , b = e.defaults
          , d = e.extendTimeline;
        (f || "").split(",").forEach(function(a) {
            return a && !as[a] && !us[a] && qc(t + " effect requires " + a + " plugin.")
        }),
        wb[t] = function(a, n, l) {
            return c(Ds(a), ms(n || {}, b), l)
        }
        ,
        d && (Be.prototype[t] = function(a, n, l) {
            return this.add(wb[t](a, Hs(n) ? n : (l = n) && {}, this), l)
        }
        )
    },
    registerEase: function(e, t) {
        ae[e] = St(t)
    },
    parseEase: function(e, t) {
        return arguments.length ? St(e, t) : ae
    },
    getById: function(e) {
        return ye.getById(e)
    },
    exportRoot: function(e, t) {
        e === void 0 && (e = {});
        var c = new Be(e), f, b;
        for (c.smoothChildTiming = Je(e.smoothChildTiming),
        ye.remove(c),
        c._dp = 0,
        c._time = c._tTime = ye._time,
        f = ye._first; f; )
            b = f._next,
            (t || !(!f._dur && f instanceof Re && f.vars.onComplete === f._targets[0])) && js(c, f, f._start - f._delay),
            f = b;
        return js(ye, c, 0),
        c
    },
    context: function(e, t) {
        return e ? new u0(e,t) : xe
    },
    matchMedia: function(e) {
        return new wh(e)
    },
    matchMediaRefresh: function() {
        return Kt.forEach(function(e) {
            var t = e.conditions, c, f;
            for (f in t)
                t[f] && (t[f] = !1,
                c = 1);
            c && e.revert()
        }) || Jb()
    },
    addEventListener: function(e, t) {
        var c = uf[e] || (uf[e] = []);
        ~c.indexOf(t) || c.push(t)
    },
    removeEventListener: function(e, t) {
        var c = uf[e]
          , f = c && c.indexOf(t);
        f >= 0 && c.splice(f, 1)
    },
    utils: {
        wrap: Wr,
        wrapYoyo: Gr,
        distribute: Pi,
        random: Li,
        snap: Bi,
        normalize: Lr,
        getUnit: Ye,
        clamp: Qr,
        splitColor: s0,
        toArray: Ds,
        selector: Lb,
        mapRange: Gi,
        pipe: Pr,
        unitize: Br,
        interpolate: Jr,
        shuffle: Mi
    },
    install: ji,
    effects: wb,
    ticker: ns,
    updateRoot: Be.updateRoot,
    plugins: as,
    globalTimeline: ye,
    core: {
        PropTween: ss,
        globals: Vi,
        Tween: Re,
        Timeline: Be,
        Animation: Mc,
        getCache: Ht,
        _removeLinkedListItem: Gf,
        reverting: function() {
            return He
        },
        context: function(e) {
            return e && xe && (xe.data.push(e),
            e._ctx = xe),
            xe
        },
        suppressOverwrites: function(e) {
            return Fd = e
        }
    }
};
es("to,from,fromTo,delayedCall,set,killTweensOf", function(s) {
    return Rf[s] = Re[s]
});
ns.add(Be.updateRoot);
Wt = Rf.to({}, {
    duration: 0
});
var Dh = function(e, t) {
    for (var c = e._pt; c && c.p !== t && c.op !== t && c.fp !== t; )
        c = c._next;
    return c
}
  , Ch = function(e, t) {
    var c = e._targets, f, b, d;
    for (f in t)
        for (b = c.length; b--; )
            d = e._ptLookup[b][f],
            d && (d = d.d) && (d._pt && (d = Dh(d, f)),
            d && d.modifier && d.modifier(t[f], e, c[b], f))
}
  , Fb = function(e, t) {
    return {
        name: e,
        headless: 1,
        rawVars: 1,
        init: function(f, b, d) {
            d._onInit = function(a) {
                var n, l;
                if (ze(b) && (n = {},
                es(b, function(i) {
                    return n[i] = 1
                }),
                b = n),
                t) {
                    n = {};
                    for (l in b)
                        n[l] = t(b[l]);
                    b = n
                }
                Ch(a, b)
            }
        }
    }
}
  , cs = Rf.registerPlugin({
    name: "attr",
    init: function(e, t, c, f, b) {
        var d, a, n;
        this.tween = c;
        for (d in t)
            n = e.getAttribute(d) || "",
            a = this.add(e, "setAttribute", (n || 0) + "", t[d], f, b, 0, 0, d),
            a.op = d,
            a.b = n,
            this._props.push(d)
    },
    render: function(e, t) {
        for (var c = t._pt; c; )
            He ? c.set(c.t, c.p, c.b, c) : c.r(e, c.d),
            c = c._next
    }
}, {
    name: "endArray",
    headless: 1,
    init: function(e, t) {
        for (var c = t.length; c--; )
            this.add(e, c, e[c] || 0, t[c], 0, 0, 0, 0, 0, 1)
    }
}, Fb("roundProps", Wb), Fb("modifiers"), Fb("snap", Bi)) || Rf;
Re.version = Be.version = cs.version = "3.14.2";
Ni = 1;
Td() && rc();
ae.Power0;
ae.Power1;
ae.Power2;
ae.Power3;
ae.Power4;
ae.Linear;
ae.Quad;
ae.Cubic;
ae.Quart;
ae.Quint;
ae.Strong;
ae.Elastic;
ae.Back;
ae.SteppedEase;
ae.Bounce;
ae.Sine;
ae.Expo;
ae.Circ;
var Za, nt, bc, Hd, $t, Qa, Ud, xh = function() {
    return typeof window < "u"
}, et = {}, Ot = 180 / Math.PI, dc = Math.PI / 180, Pt = Math.atan2, Ma = 1e8, Sd = /([A-Z])/g, Eh = /(left|right|width|margin|padding|x)/i, Fh = /[\s,\(]\S/, Vs = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, ed = function(e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
}, yh = function(e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
}, Th = function(e, t) {
    return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
}, Ah = function(e, t) {
    return t.set(t.t, t.p, e === 1 ? t.e : e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
}, _h = function(e, t) {
    var c = t.s + t.c * e;
    t.set(t.t, t.p, ~~(c + (c < 0 ? -.5 : .5)) + t.u, t)
}, m0 = function(e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t)
}, g0 = function(e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t)
}, kh = function(e, t, c) {
    return e.style[t] = c
}, Oh = function(e, t, c) {
    return e.style.setProperty(t, c)
}, Ih = function(e, t, c) {
    return e._gsap[t] = c
}, Rh = function(e, t, c) {
    return e._gsap.scaleX = e._gsap.scaleY = c
}, $h = function(e, t, c, f, b) {
    var d = e._gsap;
    d.scaleX = d.scaleY = c,
    d.renderTransform(b, d)
}, Nh = function(e, t, c, f, b) {
    var d = e._gsap;
    d[t] = c,
    d.renderTransform(b, d)
}, Te = "transform", ts = Te + "Origin", jh = function s(e, t) {
    var c = this
      , f = this.target
      , b = f.style
      , d = f._gsap;
    if (e in et && b) {
        if (this.tfm = this.tfm || {},
        e !== "transform")
            e = Vs[e] || e,
            ~e.indexOf(",") ? e.split(",").forEach(function(a) {
                return c.tfm[a] = Qs(f, a)
            }) : this.tfm[e] = d.x ? d[e] : Qs(f, e),
            e === ts && (this.tfm.zOrigin = d.zOrigin);
        else
            return Vs.transform.split(",").forEach(function(a) {
                return s.call(c, a, t)
            });
        if (this.props.indexOf(Te) >= 0)
            return;
        d.svg && (this.svgo = f.getAttribute("data-svg-origin"),
        this.props.push(ts, t, "")),
        e = Te
    }
    (b || t) && this.props.push(e, t, b[e])
}, v0 = function(e) {
    e.translate && (e.removeProperty("translate"),
    e.removeProperty("scale"),
    e.removeProperty("rotate"))
}, Vh = function() {
    var e = this.props, t = this.target, c = t.style, f = t._gsap, b, d;
    for (b = 0; b < e.length; b += 3)
        e[b + 1] ? e[b + 1] === 2 ? t[e[b]](e[b + 2]) : t[e[b]] = e[b + 2] : e[b + 2] ? c[e[b]] = e[b + 2] : c.removeProperty(e[b].substr(0, 2) === "--" ? e[b] : e[b].replace(Sd, "-$1").toLowerCase());
    if (this.tfm) {
        for (d in this.tfm)
            f[d] = this.tfm[d];
        f.svg && (f.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        b = Ud(),
        (!b || !b.isStart) && !c[Te] && (v0(c),
        f.zOrigin && c[ts] && (c[ts] += " " + f.zOrigin + "px",
        f.zOrigin = 0,
        f.renderTransform()),
        f.uncache = 1)
    }
}, w0 = function(e, t) {
    var c = {
        target: e,
        props: [],
        revert: Vh,
        save: jh
    };
    return e._gsap || cs.core.getCache(e),
    t && e.style && e.nodeType && t.split(",").forEach(function(f) {
        return c.save(f)
    }),
    c
}, D0, sd = function(e, t) {
    var c = nt.createElementNS ? nt.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : nt.createElement(e);
    return c && c.style ? c : nt.createElement(e)
}, os = function s(e, t, c) {
    var f = getComputedStyle(e);
    return f[t] || f.getPropertyValue(t.replace(Sd, "-$1").toLowerCase()) || f.getPropertyValue(t) || !c && s(e, hc(t) || t, 1) || ""
}, Pa = "O,Moz,ms,Ms,Webkit".split(","), hc = function(e, t, c) {
    var f = t || $t
      , b = f.style
      , d = 5;
    if (e in b && !c)
        return e;
    for (e = e.charAt(0).toUpperCase() + e.substr(1); d-- && !(Pa[d] + e in b); )
        ;
    return d < 0 ? null : (d === 3 ? "ms" : d >= 0 ? Pa[d] : "") + e
}, td = function() {
    xh() && window.document && (Za = window,
    nt = Za.document,
    bc = nt.documentElement,
    $t = sd("div") || {
        style: {}
    },
    sd("div"),
    Te = hc(Te),
    ts = Te + "Origin",
    $t.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    D0 = !!hc("perspective"),
    Ud = cs.core.reverting,
    Hd = 1)
}, Ba = function(e) {
    var t = e.ownerSVGElement, c = sd("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), f = e.cloneNode(!0), b;
    f.style.display = "block",
    c.appendChild(f),
    bc.appendChild(c);
    try {
        b = f.getBBox()
    } catch {}
    return c.removeChild(f),
    bc.removeChild(c),
    b
}, La = function(e, t) {
    for (var c = t.length; c--; )
        if (e.hasAttribute(t[c]))
            return e.getAttribute(t[c])
}, C0 = function(e) {
    var t, c;
    try {
        t = e.getBBox()
    } catch {
        t = Ba(e),
        c = 1
    }
    return t && (t.width || t.height) || c || (t = Ba(e)),
    t && !t.width && !t.x && !t.y ? {
        x: +La(e, ["x", "cx", "x1"]) || 0,
        y: +La(e, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : t
}, x0 = function(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && C0(e))
}, vt = function(e, t) {
    if (t) {
        var c = e.style, f;
        t in et && t !== ts && (t = Te),
        c.removeProperty ? (f = t.substr(0, 2),
        (f === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
        c.removeProperty(f === "--" ? t : t.replace(Sd, "-$1").toLowerCase())) : c.removeAttribute(t)
    }
}, it = function(e, t, c, f, b, d) {
    var a = new ss(e._pt,t,c,0,1,d ? g0 : m0);
    return e._pt = a,
    a.b = f,
    a.e = b,
    e._props.push(c),
    a
}, Wa = {
    deg: 1,
    rad: 1,
    turn: 1
}, zh = {
    grid: 1,
    flex: 1
}, wt = function s(e, t, c, f) {
    var b = parseFloat(c) || 0, d = (c + "").trim().substr((b + "").length) || "px", a = $t.style, n = Eh.test(t), l = e.tagName.toLowerCase() === "svg", i = (l ? "client" : "offset") + (n ? "Width" : "Height"), r = 100, u = f === "px", p = f === "%", m, h, g, w;
    if (f === d || !b || Wa[f] || Wa[d])
        return b;
    if (d !== "px" && !u && (b = s(e, t, c, "px")),
    w = e.getCTM && x0(e),
    (p || d === "%") && (et[t] || ~t.indexOf("adius")))
        return m = w ? e.getBBox()[n ? "width" : "height"] : e[i],
        ke(p ? b / m * r : b / 100 * m);
    if (a[n ? "width" : "height"] = r + (u ? d : f),
    h = f !== "rem" && ~t.indexOf("adius") || f === "em" && e.appendChild && !l ? e : e.parentNode,
    w && (h = (e.ownerSVGElement || {}).parentNode),
    (!h || h === nt || !h.appendChild) && (h = nt.body),
    g = h._gsap,
    g && p && g.width && n && g.time === ns.time && !g.uncache)
        return ke(b / g.width * r);
    if (p && (t === "height" || t === "width")) {
        var C = e.style[t];
        e.style[t] = r + f,
        m = e[i],
        C ? e.style[t] = C : vt(e, t)
    } else
        (p || d === "%") && !zh[os(h, "display")] && (a.position = os(e, "position")),
        h === e && (a.position = "static"),
        h.appendChild($t),
        m = $t[i],
        h.removeChild($t),
        a.position = "absolute";
    return n && p && (g = Ht(h),
    g.time = ns.time,
    g.width = h[i]),
    ke(u ? m * b / r : m && b ? r / m * b : 0)
}, Qs = function(e, t, c, f) {
    var b;
    return Hd || td(),
    t in Vs && t !== "transform" && (t = Vs[t],
    ~t.indexOf(",") && (t = t.split(",")[0])),
    et[t] && t !== "transform" ? (b = Bc(e, f),
    b = t !== "transformOrigin" ? b[t] : b.svg ? b.origin : Nf(os(e, ts)) + " " + b.zOrigin + "px") : (b = e.style[t],
    (!b || b === "auto" || f || ~(b + "").indexOf("calc(")) && (b = $f[t] && $f[t](e, t, c) || os(e, t) || Hi(e, t) || (t === "opacity" ? 1 : 0))),
    c && !~(b + "").trim().indexOf(" ") ? wt(e, t, b, c) + c : b
}, Hh = function(e, t, c, f) {
    if (!c || c === "none") {
        var b = hc(t, e, 1)
          , d = b && os(e, b, 1);
        d && d !== c ? (t = b,
        c = d) : t === "borderColor" && (c = os(e, "borderTopColor"))
    }
    var a = new ss(this._pt,e.style,t,0,1,h0), n = 0, l = 0, i, r, u, p, m, h, g, w, C, A, E, D;
    if (a.b = c,
    a.e = f,
    c += "",
    f += "",
    f.substring(0, 6) === "var(--" && (f = os(e, f.substring(4, f.indexOf(")")))),
    f === "auto" && (h = e.style[t],
    e.style[t] = f,
    f = os(e, t) || f,
    h ? e.style[t] = h : vt(e, t)),
    i = [c, f],
    c0(i),
    c = i[0],
    f = i[1],
    u = c.match(Lt) || [],
    D = f.match(Lt) || [],
    D.length) {
        for (; r = Lt.exec(f); )
            g = r[0],
            C = f.substring(n, r.index),
            m ? m = (m + 1) % 5 : (C.substr(-5) === "rgba(" || C.substr(-5) === "hsla(") && (m = 1),
            g !== (h = u[l++] || "") && (p = parseFloat(h) || 0,
            E = h.substr((p + "").length),
            g.charAt(1) === "=" && (g = fc(p, g) + E),
            w = parseFloat(g),
            A = g.substr((w + "").length),
            n = Lt.lastIndex - A.length,
            A || (A = A || ps.units[t] || E,
            n === f.length && (f += A,
            a.e += A)),
            E !== A && (p = wt(e, t, h, A) || 0),
            a._pt = {
                _next: a._pt,
                p: C || l === 1 ? C : ",",
                s: p,
                c: w - p,
                m: m && m < 4 || t === "zIndex" ? Math.round : 0
            });
        a.c = n < f.length ? f.substring(n, f.length) : ""
    } else
        a.r = t === "display" && f === "none" ? g0 : m0;
    return $i.test(f) && (a.e = 0),
    this._pt = a,
    a
}, Ga = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, Uh = function(e) {
    var t = e.split(" ")
      , c = t[0]
      , f = t[1] || "50%";
    return (c === "top" || c === "bottom" || f === "left" || f === "right") && (e = c,
    c = f,
    f = e),
    t[0] = Ga[c] || c,
    t[1] = Ga[f] || f,
    t.join(" ")
}, Sh = function(e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
        var c = t.t, f = c.style, b = t.u, d = c._gsap, a, n, l;
        if (b === "all" || b === !0)
            f.cssText = "",
            n = 1;
        else
            for (b = b.split(","),
            l = b.length; --l > -1; )
                a = b[l],
                et[a] && (n = 1,
                a = a === "transformOrigin" ? ts : Te),
                vt(c, a);
        n && (vt(c, Te),
        d && (d.svg && c.removeAttribute("transform"),
        f.scale = f.rotate = f.translate = "none",
        Bc(c, 1),
        d.uncache = 1,
        v0(f)))
    }
}, $f = {
    clearProps: function(e, t, c, f, b) {
        if (b.data !== "isFromStart") {
            var d = e._pt = new ss(e._pt,t,c,0,0,Sh);
            return d.u = f,
            d.pr = -10,
            d.tween = b,
            e._props.push(c),
            1
        }
    }
}, Pc = [1, 0, 0, 1, 0, 0], E0 = {}, F0 = function(e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
}, Ja = function(e) {
    var t = os(e, Te);
    return F0(t) ? Pc : t.substr(7).match(Ri).map(ke)
}, Kd = function(e, t) {
    var c = e._gsap || Ht(e), f = e.style, b = Ja(e), d, a, n, l;
    return c.svg && e.getAttribute("transform") ? (n = e.transform.baseVal.consolidate().matrix,
    b = [n.a, n.b, n.c, n.d, n.e, n.f],
    b.join(",") === "1,0,0,1,0,0" ? Pc : b) : (b === Pc && !e.offsetParent && e !== bc && !c.svg && (n = f.display,
    f.display = "block",
    d = e.parentNode,
    (!d || !e.offsetParent && !e.getBoundingClientRect().width) && (l = 1,
    a = e.nextElementSibling,
    bc.appendChild(e)),
    b = Ja(e),
    n ? f.display = n : vt(e, "display"),
    l && (a ? d.insertBefore(e, a) : d ? d.appendChild(e) : bc.removeChild(e))),
    t && b.length > 6 ? [b[0], b[1], b[4], b[5], b[12], b[13]] : b)
}, cd = function(e, t, c, f, b, d) {
    var a = e._gsap, n = b || Kd(e, !0), l = a.xOrigin || 0, i = a.yOrigin || 0, r = a.xOffset || 0, u = a.yOffset || 0, p = n[0], m = n[1], h = n[2], g = n[3], w = n[4], C = n[5], A = t.split(" "), E = parseFloat(A[0]) || 0, D = parseFloat(A[1]) || 0, O, _, k, F;
    c ? n !== Pc && (_ = p * g - m * h) && (k = E * (g / _) + D * (-h / _) + (h * C - g * w) / _,
    F = E * (-m / _) + D * (p / _) - (p * C - m * w) / _,
    E = k,
    D = F) : (O = C0(e),
    E = O.x + (~A[0].indexOf("%") ? E / 100 * O.width : E),
    D = O.y + (~(A[1] || A[0]).indexOf("%") ? D / 100 * O.height : D)),
    f || f !== !1 && a.smooth ? (w = E - l,
    C = D - i,
    a.xOffset = r + (w * p + C * h) - w,
    a.yOffset = u + (w * m + C * g) - C) : a.xOffset = a.yOffset = 0,
    a.xOrigin = E,
    a.yOrigin = D,
    a.smooth = !!f,
    a.origin = t,
    a.originIsAbsolute = !!c,
    e.style[ts] = "0px 0px",
    d && (it(d, a, "xOrigin", l, E),
    it(d, a, "yOrigin", i, D),
    it(d, a, "xOffset", r, a.xOffset),
    it(d, a, "yOffset", u, a.yOffset)),
    e.setAttribute("data-svg-origin", E + " " + D)
}, Bc = function(e, t) {
    var c = e._gsap || new a0(e);
    if ("x"in c && !t && !c.uncache)
        return c;
    var f = e.style, b = c.scaleX < 0, d = "px", a = "deg", n = getComputedStyle(e), l = os(e, ts) || "0", i, r, u, p, m, h, g, w, C, A, E, D, O, _, k, F, N, q, $, X, P, L, B, T, y, R, ce, le, fe, fs, Ne, je;
    return i = r = u = h = g = w = C = A = E = 0,
    p = m = 1,
    c.svg = !!(e.getCTM && x0(e)),
    n.translate && ((n.translate !== "none" || n.scale !== "none" || n.rotate !== "none") && (f[Te] = (n.translate !== "none" ? "translate3d(" + (n.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (n.rotate !== "none" ? "rotate(" + n.rotate + ") " : "") + (n.scale !== "none" ? "scale(" + n.scale.split(" ").join(",") + ") " : "") + (n[Te] !== "none" ? n[Te] : "")),
    f.scale = f.rotate = f.translate = "none"),
    _ = Kd(e, c.svg),
    c.svg && (c.uncache ? (y = e.getBBox(),
    l = c.xOrigin - y.x + "px " + (c.yOrigin - y.y) + "px",
    T = "") : T = !t && e.getAttribute("data-svg-origin"),
    cd(e, T || l, !!T || c.originIsAbsolute, c.smooth !== !1, _)),
    D = c.xOrigin || 0,
    O = c.yOrigin || 0,
    _ !== Pc && (q = _[0],
    $ = _[1],
    X = _[2],
    P = _[3],
    i = L = _[4],
    r = B = _[5],
    _.length === 6 ? (p = Math.sqrt(q * q + $ * $),
    m = Math.sqrt(P * P + X * X),
    h = q || $ ? Pt($, q) * Ot : 0,
    C = X || P ? Pt(X, P) * Ot + h : 0,
    C && (m *= Math.abs(Math.cos(C * dc))),
    c.svg && (i -= D - (D * q + O * X),
    r -= O - (D * $ + O * P))) : (je = _[6],
    fs = _[7],
    ce = _[8],
    le = _[9],
    fe = _[10],
    Ne = _[11],
    i = _[12],
    r = _[13],
    u = _[14],
    k = Pt(je, fe),
    g = k * Ot,
    k && (F = Math.cos(-k),
    N = Math.sin(-k),
    T = L * F + ce * N,
    y = B * F + le * N,
    R = je * F + fe * N,
    ce = L * -N + ce * F,
    le = B * -N + le * F,
    fe = je * -N + fe * F,
    Ne = fs * -N + Ne * F,
    L = T,
    B = y,
    je = R),
    k = Pt(-X, fe),
    w = k * Ot,
    k && (F = Math.cos(-k),
    N = Math.sin(-k),
    T = q * F - ce * N,
    y = $ * F - le * N,
    R = X * F - fe * N,
    Ne = P * N + Ne * F,
    q = T,
    $ = y,
    X = R),
    k = Pt($, q),
    h = k * Ot,
    k && (F = Math.cos(k),
    N = Math.sin(k),
    T = q * F + $ * N,
    y = L * F + B * N,
    $ = $ * F - q * N,
    B = B * F - L * N,
    q = T,
    L = y),
    g && Math.abs(g) + Math.abs(h) > 359.9 && (g = h = 0,
    w = 180 - w),
    p = ke(Math.sqrt(q * q + $ * $ + X * X)),
    m = ke(Math.sqrt(B * B + je * je)),
    k = Pt(L, B),
    C = Math.abs(k) > 2e-4 ? k * Ot : 0,
    E = Ne ? 1 / (Ne < 0 ? -Ne : Ne) : 0),
    c.svg && (T = e.getAttribute("transform"),
    c.forceCSS = e.setAttribute("transform", "") || !F0(os(e, Te)),
    T && e.setAttribute("transform", T))),
    Math.abs(C) > 90 && Math.abs(C) < 270 && (b ? (p *= -1,
    C += h <= 0 ? 180 : -180,
    h += h <= 0 ? 180 : -180) : (m *= -1,
    C += C <= 0 ? 180 : -180)),
    t = t || c.uncache,
    c.x = i - ((c.xPercent = i && (!t && c.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? e.offsetWidth * c.xPercent / 100 : 0) + d,
    c.y = r - ((c.yPercent = r && (!t && c.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? e.offsetHeight * c.yPercent / 100 : 0) + d,
    c.z = u + d,
    c.scaleX = ke(p),
    c.scaleY = ke(m),
    c.rotation = ke(h) + a,
    c.rotationX = ke(g) + a,
    c.rotationY = ke(w) + a,
    c.skewX = C + a,
    c.skewY = A + a,
    c.transformPerspective = E + d,
    (c.zOrigin = parseFloat(l.split(" ")[2]) || !t && c.zOrigin || 0) && (f[ts] = Nf(l)),
    c.xOffset = c.yOffset = 0,
    c.force3D = ps.force3D,
    c.renderTransform = c.svg ? Yh : D0 ? y0 : Kh,
    c.uncache = 0,
    c
}, Nf = function(e) {
    return (e = e.split(" "))[0] + " " + e[1]
}, yb = function(e, t, c) {
    var f = Ye(t);
    return ke(parseFloat(t) + parseFloat(wt(e, "x", c + "px", f))) + f
}, Kh = function(e, t) {
    t.z = "0px",
    t.rotationY = t.rotationX = "0deg",
    t.force3D = 0,
    y0(e, t)
}, At = "0deg", Cc = "0px", _t = ") ", y0 = function(e, t) {
    var c = t || this
      , f = c.xPercent
      , b = c.yPercent
      , d = c.x
      , a = c.y
      , n = c.z
      , l = c.rotation
      , i = c.rotationY
      , r = c.rotationX
      , u = c.skewX
      , p = c.skewY
      , m = c.scaleX
      , h = c.scaleY
      , g = c.transformPerspective
      , w = c.force3D
      , C = c.target
      , A = c.zOrigin
      , E = ""
      , D = w === "auto" && e && e !== 1 || w === !0;
    if (A && (r !== At || i !== At)) {
        var O = parseFloat(i) * dc, _ = Math.sin(O), k = Math.cos(O), F;
        O = parseFloat(r) * dc,
        F = Math.cos(O),
        d = yb(C, d, _ * F * -A),
        a = yb(C, a, -Math.sin(O) * -A),
        n = yb(C, n, k * F * -A + A)
    }
    g !== Cc && (E += "perspective(" + g + _t),
    (f || b) && (E += "translate(" + f + "%, " + b + "%) "),
    (D || d !== Cc || a !== Cc || n !== Cc) && (E += n !== Cc || D ? "translate3d(" + d + ", " + a + ", " + n + ") " : "translate(" + d + ", " + a + _t),
    l !== At && (E += "rotate(" + l + _t),
    i !== At && (E += "rotateY(" + i + _t),
    r !== At && (E += "rotateX(" + r + _t),
    (u !== At || p !== At) && (E += "skew(" + u + ", " + p + _t),
    (m !== 1 || h !== 1) && (E += "scale(" + m + ", " + h + _t),
    C.style[Te] = E || "translate(0, 0)"
}, Yh = function(e, t) {
    var c = t || this, f = c.xPercent, b = c.yPercent, d = c.x, a = c.y, n = c.rotation, l = c.skewX, i = c.skewY, r = c.scaleX, u = c.scaleY, p = c.target, m = c.xOrigin, h = c.yOrigin, g = c.xOffset, w = c.yOffset, C = c.forceCSS, A = parseFloat(d), E = parseFloat(a), D, O, _, k, F;
    n = parseFloat(n),
    l = parseFloat(l),
    i = parseFloat(i),
    i && (i = parseFloat(i),
    l += i,
    n += i),
    n || l ? (n *= dc,
    l *= dc,
    D = Math.cos(n) * r,
    O = Math.sin(n) * r,
    _ = Math.sin(n - l) * -u,
    k = Math.cos(n - l) * u,
    l && (i *= dc,
    F = Math.tan(l - i),
    F = Math.sqrt(1 + F * F),
    _ *= F,
    k *= F,
    i && (F = Math.tan(i),
    F = Math.sqrt(1 + F * F),
    D *= F,
    O *= F)),
    D = ke(D),
    O = ke(O),
    _ = ke(_),
    k = ke(k)) : (D = r,
    k = u,
    O = _ = 0),
    (A && !~(d + "").indexOf("px") || E && !~(a + "").indexOf("px")) && (A = wt(p, "x", d, "px"),
    E = wt(p, "y", a, "px")),
    (m || h || g || w) && (A = ke(A + m - (m * D + h * _) + g),
    E = ke(E + h - (m * O + h * k) + w)),
    (f || b) && (F = p.getBBox(),
    A = ke(A + f / 100 * F.width),
    E = ke(E + b / 100 * F.height)),
    F = "matrix(" + D + "," + O + "," + _ + "," + k + "," + A + "," + E + ")",
    p.setAttribute("transform", F),
    C && (p.style[Te] = F)
}, qh = function(e, t, c, f, b) {
    var d = 360, a = ze(b), n = parseFloat(b) * (a && ~b.indexOf("rad") ? Ot : 1), l = n - f, i = f + l + "deg", r, u;
    return a && (r = b.split("_")[1],
    r === "short" && (l %= d,
    l !== l % (d / 2) && (l += l < 0 ? d : -d)),
    r === "cw" && l < 0 ? l = (l + d * Ma) % d - ~~(l / d) * d : r === "ccw" && l > 0 && (l = (l - d * Ma) % d - ~~(l / d) * d)),
    e._pt = u = new ss(e._pt,t,c,f,l,yh),
    u.e = i,
    u.u = "deg",
    e._props.push(c),
    u
}, en = function(e, t) {
    for (var c in t)
        e[c] = t[c];
    return e
}, Xh = function(e, t, c) {
    var f = en({}, c._gsap), b = "perspective,force3D,transformOrigin,svgOrigin", d = c.style, a, n, l, i, r, u, p, m;
    f.svg ? (l = c.getAttribute("transform"),
    c.setAttribute("transform", ""),
    d[Te] = t,
    a = Bc(c, 1),
    vt(c, Te),
    c.setAttribute("transform", l)) : (l = getComputedStyle(c)[Te],
    d[Te] = t,
    a = Bc(c, 1),
    d[Te] = l);
    for (n in et)
        l = f[n],
        i = a[n],
        l !== i && b.indexOf(n) < 0 && (p = Ye(l),
        m = Ye(i),
        r = p !== m ? wt(c, n, l, m) : parseFloat(l),
        u = parseFloat(i),
        e._pt = new ss(e._pt,a,n,r,u - r,ed),
        e._pt.u = m || 0,
        e._props.push(n));
    en(a, f)
};
es("padding,margin,Width,Radius", function(s, e) {
    var t = "Top"
      , c = "Right"
      , f = "Bottom"
      , b = "Left"
      , d = (e < 3 ? [t, c, f, b] : [t + b, t + c, f + c, f + b]).map(function(a) {
        return e < 2 ? s + a : "border" + a + s
    });
    $f[e > 1 ? "border" + s : s] = function(a, n, l, i, r) {
        var u, p;
        if (arguments.length < 4)
            return u = d.map(function(m) {
                return Qs(a, m, l)
            }),
            p = u.join(" "),
            p.split(u[0]).length === 5 ? u[0] : p;
        u = (i + "").split(" "),
        p = {},
        d.forEach(function(m, h) {
            return p[m] = u[h] = u[h] || u[(h - 1) / 2 | 0]
        }),
        a.init(n, p, r)
    }
});
var T0 = {
    name: "css",
    register: td,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, t, c, f, b) {
        var d = this._props, a = e.style, n = c.vars.startAt, l, i, r, u, p, m, h, g, w, C, A, E, D, O, _, k, F;
        Hd || td(),
        this.styles = this.styles || w0(e),
        k = this.styles.props,
        this.tween = c;
        for (h in t)
            if (h !== "autoRound" && (i = t[h],
            !(as[h] && n0(h, t, c, f, e, b)))) {
                if (p = typeof i,
                m = $f[h],
                p === "function" && (i = i.call(c, f, e, b),
                p = typeof i),
                p === "string" && ~i.indexOf("random(") && (i = Zc(i)),
                m)
                    m(this, e, h, i, c) && (_ = 1);
                else if (h.substr(0, 2) === "--")
                    l = (getComputedStyle(e).getPropertyValue(h) + "").trim(),
                    i += "",
                    ht.lastIndex = 0,
                    ht.test(l) || (g = Ye(l),
                    w = Ye(i),
                    w ? g !== w && (l = wt(e, h, l, w) + w) : g && (i += g)),
                    this.add(a, "setProperty", l, i, f, b, 0, 0, h),
                    d.push(h),
                    k.push(h, 0, a[h]);
                else if (p !== "undefined") {
                    if (n && h in n ? (l = typeof n[h] == "function" ? n[h].call(c, f, e, b) : n[h],
                    ze(l) && ~l.indexOf("random(") && (l = Zc(l)),
                    Ye(l + "") || l === "auto" || (l += ps.units[h] || Ye(Qs(e, h)) || ""),
                    (l + "").charAt(1) === "=" && (l = Qs(e, h))) : l = Qs(e, h),
                    u = parseFloat(l),
                    C = p === "string" && i.charAt(1) === "=" && i.substr(0, 2),
                    C && (i = i.substr(2)),
                    r = parseFloat(i),
                    h in Vs && (h === "autoAlpha" && (u === 1 && Qs(e, "visibility") === "hidden" && r && (u = 0),
                    k.push("visibility", 0, a.visibility),
                    it(this, a, "visibility", u ? "inherit" : "hidden", r ? "inherit" : "hidden", !r)),
                    h !== "scale" && h !== "transform" && (h = Vs[h],
                    ~h.indexOf(",") && (h = h.split(",")[0]))),
                    A = h in et,
                    A) {
                        if (this.styles.save(h),
                        F = i,
                        p === "string" && i.substring(0, 6) === "var(--") {
                            if (i = os(e, i.substring(4, i.indexOf(")"))),
                            i.substring(0, 5) === "calc(") {
                                var N = e.style.perspective;
                                e.style.perspective = i,
                                i = os(e, "perspective"),
                                N ? e.style.perspective = N : vt(e, "perspective")
                            }
                            r = parseFloat(i)
                        }
                        if (E || (D = e._gsap,
                        D.renderTransform && !t.parseTransform || Bc(e, t.parseTransform),
                        O = t.smoothOrigin !== !1 && D.smooth,
                        E = this._pt = new ss(this._pt,a,Te,0,1,D.renderTransform,D,0,-1),
                        E.dep = 1),
                        h === "scale")
                            this._pt = new ss(this._pt,D,"scaleY",D.scaleY,(C ? fc(D.scaleY, C + r) : r) - D.scaleY || 0,ed),
                            this._pt.u = 0,
                            d.push("scaleY", h),
                            h += "X";
                        else if (h === "transformOrigin") {
                            k.push(ts, 0, a[ts]),
                            i = Uh(i),
                            D.svg ? cd(e, i, 0, O, 0, this) : (w = parseFloat(i.split(" ")[2]) || 0,
                            w !== D.zOrigin && it(this, D, "zOrigin", D.zOrigin, w),
                            it(this, a, h, Nf(l), Nf(i)));
                            continue
                        } else if (h === "svgOrigin") {
                            cd(e, i, 1, O, 0, this);
                            continue
                        } else if (h in E0) {
                            qh(this, D, h, u, C ? fc(u, C + i) : i);
                            continue
                        } else if (h === "smoothOrigin") {
                            it(this, D, "smooth", D.smooth, i);
                            continue
                        } else if (h === "force3D") {
                            D[h] = i;
                            continue
                        } else if (h === "transform") {
                            Xh(this, i, e);
                            continue
                        }
                    } else
                        h in a || (h = hc(h) || h);
                    if (A || (r || r === 0) && (u || u === 0) && !Fh.test(i) && h in a)
                        g = (l + "").substr((u + "").length),
                        r || (r = 0),
                        w = Ye(i) || (h in ps.units ? ps.units[h] : g),
                        g !== w && (u = wt(e, h, l, w)),
                        this._pt = new ss(this._pt,A ? D : a,h,u,(C ? fc(u, C + r) : r) - u,!A && (w === "px" || h === "zIndex") && t.autoRound !== !1 ? _h : ed),
                        this._pt.u = w || 0,
                        A && F !== i ? (this._pt.b = l,
                        this._pt.e = F,
                        this._pt.r = Ah) : g !== w && w !== "%" && (this._pt.b = l,
                        this._pt.r = Th);
                    else if (h in a)
                        Hh.call(this, e, h, l, C ? C + i : i);
                    else if (h in e)
                        this.add(e, h, l || e[h], C ? C + i : i, f, b);
                    else if (h !== "parseTransform") {
                        _d(h, i);
                        continue
                    }
                    A || (h in a ? k.push(h, 0, a[h]) : typeof e[h] == "function" ? k.push(h, 2, e[h]()) : k.push(h, 1, l || e[h])),
                    d.push(h)
                }
            }
        _ && p0(this)
    },
    render: function(e, t) {
        if (t.tween._time || !Ud())
            for (var c = t._pt; c; )
                c.r(e, c.d),
                c = c._next;
        else
            t.styles.revert()
    },
    get: Qs,
    aliases: Vs,
    getSetter: function(e, t, c) {
        var f = Vs[t];
        return f && f.indexOf(",") < 0 && (t = f),
        t in et && t !== ts && (e._gsap.x || Qs(e, "x")) ? c && Qa === c ? t === "scale" ? Rh : Ih : (Qa = c || {}) && (t === "scale" ? $h : Nh) : e.style && !yd(e.style[t]) ? kh : ~t.indexOf("-") ? Oh : Vd(e, t)
    },
    core: {
        _removeProperty: vt,
        _getMatrix: Kd
    }
};
cs.utils.checkPrefix = hc;
cs.core.getStyleSaver = w0;
(function(s, e, t, c) {
    var f = es(s + "," + e + "," + t, function(b) {
        et[b] = 1
    });
    es(e, function(b) {
        ps.units[b] = "deg",
        E0[b] = 1
    }),
    Vs[f[13]] = s + "," + e,
    es(c, function(b) {
        var d = b.split(":");
        Vs[d[1]] = f[d[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
es("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s) {
    ps.units[s] = "px"
});
cs.registerPlugin(T0);
var Ie = cs.registerPlugin(T0) || cs;
Ie.core.Tween;
var Zh = /(?:^\s+|\s+$)/g
  , Qh = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2642\u2640]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDD27\uDCBC\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCC\uDFCB]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
function Yd(s) {
    var e = s.nodeType
      , t = "";
    if (e === 1 || e === 9 || e === 11) {
        if (typeof s.textContent == "string")
            return s.textContent;
        for (s = s.firstChild; s; s = s.nextSibling)
            t += Yd(s)
    } else if (e === 3 || e === 4)
        return s.nodeValue;
    return t
}
function Is(s, e, t, c, f) {
    if (s += "",
    t && (s = s.trim ? s.trim() : s.replace(Zh, "")),
    e && e !== "")
        return s.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(e);
    for (var b = [], d = s.length, a = 0, n, l; a < d; a++)
        l = s.charAt(a),
        (l.charCodeAt(0) >= 55296 && l.charCodeAt(0) <= 56319 || s.charCodeAt(a + 1) >= 65024 && s.charCodeAt(a + 1) <= 65039) && (n = ((s.substr(a, 12).split(Qh) || [])[1] || "").length || 2,
        l = s.substr(a, n),
        b.emoji = 1,
        a += n - 1),
        b.push(f ? l : l === ">" ? "&gt;" : l === "<" ? "&lt;" : c && l === " " && (s.charAt(a - 1) === " " || s.charAt(a + 1) === " ") ? "&nbsp;" : l);
    return b
}
var mf = (function() {
    function s(t) {
        this.chars = Is(t),
        this.sets = [],
        this.length = 50;
        for (var c = 0; c < 20; c++)
            this.sets[c] = tn(80, this.chars)
    }
    var e = s.prototype;
    return e.grow = function(c) {
        for (var f = 0; f < 20; f++)
            this.sets[f] += tn(c - this.length, this.chars);
        this.length = c
    }
    ,
    s
}
)(), Nt, A0, _0 = function() {
    return Nt || typeof window < "u" && (Nt = window.gsap) && Nt.registerPlugin && Nt
}, Mh = 1, sn = /\s+/g, tn = function(e, t) {
    for (var c = t.length, f = ""; --e > -1; )
        f += t[~~(Math.random() * c)];
    return f
}, fd = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", cn = fd.toLowerCase(), Ph = {
    upperCase: new mf(fd),
    lowerCase: new mf(cn),
    upperAndLowerCase: new mf(fd + cn)
}, fn = function() {
    A0 = Nt = _0()
}, sb = {
    version: "3.14.2",
    name: "scrambleText",
    register: function(e, t, c) {
        Nt = e,
        fn()
    },
    init: function(e, t, c, f, b) {
        if (A0 || fn(),
        this.prop = "innerHTML"in e ? "innerHTML" : "textContent"in e ? "textContent" : 0,
        !!this.prop) {
            this.target = e,
            typeof t != "object" && (t = {
                text: t
            });
            var d = t.text || t.value || "", a = t.trim !== !1, n = this, l, i, r, u;
            return n.delimiter = l = t.delimiter || "",
            n.original = Is(Yd(e).replace(sn, " ").split("&nbsp;").join(""), l, a),
            (d === "{original}" || d === !0 || d == null) && (d = n.original.join(l)),
            n.text = Is((d || "").replace(sn, " "), l, a),
            n.hasClass = !!(t.newClass || t.oldClass),
            n.newClass = t.newClass,
            n.oldClass = t.oldClass,
            u = l === "",
            n.textHasEmoji = u && !!n.text.emoji,
            n.charsHaveEmoji = !!t.chars && !!Is(t.chars).emoji,
            n.length = u ? n.original.length : n.original.join(l).length,
            n.lengthDif = (u ? n.text.length : n.text.join(l).length) - n.length,
            n.fillChar = t.fillChar || t.chars && ~t.chars.indexOf(" ") ? "&nbsp;" : "",
            n.charSet = r = Ph[t.chars || "upperCase"] || new mf(t.chars),
            n.speed = .05 / (t.speed || 1),
            n.prevScrambleTime = 0,
            n.setIndex = Math.random() * 20 | 0,
            i = n.length + Math.max(n.lengthDif, 0),
            i > r.length && r.grow(i),
            n.chars = r.sets[n.setIndex],
            n.revealDelay = t.revealDelay || 0,
            n.tweenLength = t.tweenLength !== !1,
            n.tween = c,
            n.rightToLeft = !!t.rightToLeft,
            n._props.push("scrambleText", "text"),
            Mh
        }
    },
    render: function(e, t) {
        var c = t.target, f = t.prop, b = t.text, d = t.delimiter, a = t.tween, n = t.prevScrambleTime, l = t.revealDelay, i = t.setIndex, r = t.chars, u = t.charSet, p = t.length, m = t.textHasEmoji, h = t.charsHaveEmoji, g = t.lengthDif, w = t.tweenLength, C = t.oldClass, A = t.newClass, E = t.rightToLeft, D = t.fillChar, O = t.speed, _ = t.original, k = t.hasClass, F = b.length, N = a._time, q = N - n, $, X, P, L, B, T, y, R, ce, le, fe;
        l && (a._from && (N = a._dur - N),
        e = N === 0 ? 0 : N < l ? 1e-6 : N === a._dur ? 1 : a._ease((N - l) / (a._dur - l))),
        e < 0 ? e = 0 : e > 1 && (e = 1),
        E && (e = 1 - e),
        $ = ~~(e * F + .5),
        e ? ((q > O || q < -O) && (t.setIndex = i = (i + (Math.random() * 19 | 0)) % 20,
        t.chars = u.sets[i],
        t.prevScrambleTime += q),
        L = r) : L = _.join(d),
        fe = a._from ? e : 1 - e,
        le = p + (w ? a._from ? fe * fe * fe : 1 - fe * fe * fe : 1) * g,
        E ? e === 1 && (a._from || a.data === "isFromStart") ? (P = "",
        L = _.join(d)) : (y = b.slice($).join(d),
        h ? P = Is(L).slice(0, le - (m ? Is(y) : y).length + .5 | 0).join("") : P = L.substr(0, le - (m ? Is(y) : y).length + .5 | 0),
        L = y) : (P = b.slice(0, $).join(d),
        X = (m ? Is(P) : P).length,
        h ? L = Is(L).slice(X, le + .5 | 0).join("") : L = L.substr(X, le - X + .5 | 0)),
        k ? (R = E ? C : A,
        ce = E ? A : C,
        B = R && $ !== 0,
        T = ce && $ !== F,
        y = (B ? "<span class='" + R + "'>" : "") + P + (B ? "</span>" : "") + (T ? "<span class='" + ce + "'>" : "") + d + L + (T ? "</span>" : "")) : y = P + d + L,
        c[f] = D === "&nbsp;" && ~y.indexOf("  ") ? y.split("  ").join("&nbsp;&nbsp;") : y
    }
};
sb.emojiSafeSplit = Is;
sb.getText = Yd;
_0() && Nt.registerPlugin(sb);
const Bh = {
    class: "unit-inner"
}
  , Lh = ["onClick"]
  , Wh = Us({
    __name: "SongMonitor",
    props: {
        songs: {}
    },
    emits: ["select"],
    setup(s, {emit: e}) {
        Ie.registerPlugin(sb);
        const t = s
          , c = e
          , f = he(null)
          , b = he(null)
          , d = he([])
          , {width: a, height: n} = Dr(f)
          , l = Fe( () => a.value > 0 && a.value <= 768)
          , i = Fe( () => l.value ? 160 : 220)
          , r = Fe( () => l.value ? 44 : 56)
          , u = Fe( () => Math.max(1, Math.floor(a.value / i.value) || 1))
          , p = Fe( () => Math.max(1, Math.floor(n.value / r.value) || 1))
          , m = Fe( () => u.value * p.value)
          , h = Fe( () => u.value ? a.value / u.value : 0)
          , g = Fe( () => p.value ? n.value / p.value : 0)
          , w = he([])
          , C = he(new Set)
          , A = he("horizontal")
          , E = he(!1);
        let D = null
          , O = null;
        const _ = T => {
            const y = t.songs ?? [];
            if (!y.length)
                return null;
            if (y.length === 1)
                return y[0];
            let R = y[Math.floor(Math.random() * y.length)];
            if (!T)
                return R;
            for (let ce = 0; ce < 6; ce += 1) {
                if (R.id !== T)
                    return R;
                R = y[Math.floor(Math.random() * y.length)]
            }
            return R
        }
          , k = T => Array.from({
            length: T
        }, (y, R) => {
            const ce = _();
            return {
                slot: R,
                title: ce?.title ?? "",
                songId: ce?.id,
                song: ce
            }
        }
        )
          , F = (T, y=0) => {
            const R = d.value[T];
            if (!R)
                return;
            const ce = w.value[T]?.title ?? "";
            Ie.to(R, {
                duration: .7,
                delay: y,
                scrambleText: {
                    text: ce,
                    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
                    speed: .8
                },
                ease: "none"
            })
        }
          , N = () => {
            if (!d.value.length)
                return;
            const T = d.value;
            Ie.killTweensOf(T),
            Ie.set(T, {
                opacity: 0,
                y: -18
            }),
            T.forEach( (y, R) => {
                Ie.to(y, {
                    opacity: 1,
                    y: 0,
                    duration: .5,
                    delay: R * .02,
                    ease: "power2.out"
                }),
                F(R, R * .02)
            }
            )
        }
          , q = () => {
            d.value.forEach( (T, y) => {
                F(y)
            }
            )
        }
          , $ = T => {
            const y = w.value[T]
              , R = _(y?.songId);
            w.value.splice(T, 1, {
                slot: y?.slot ?? T,
                title: R?.title ?? "",
                songId: R?.id,
                song: R
            })
        }
          , X = T => {
            T && c("select", T)
        }
          , P = () => {
            if (!b.value || !f.value || !w.value.length)
                return;
            const T = u.value
              , y = p.value;
            if (!T || !y)
                return;
            const R = Math.random() > .5
              , ce = Math.floor(R ? Math.random() * y : Math.random() * T)
              , le = R ? Array.from({
                length: T
            }, ($e, Le) => ce * T + Le) : Array.from({
                length: y
            }, ($e, Le) => Le * T + ce);
            A.value = R ? "horizontal" : "vertical",
            C.value = new Set,
            O && window.clearTimeout(O);
            const fe = le
              , fs = .8
              , Ne = fs / Math.max(1, fe.length);
            fe.forEach( ($e, Le) => {
                const mc = Le * Ne;
                Ie.delayedCall(mc, () => {
                    C.value = new Set([$e]),
                    $($e),
                    xs( () => F($e))
                }
                )
            }
            ),
            O = window.setTimeout( () => {
                C.value = new Set
            }
            , fs * 1e3 + 200);
            const je = b.value;
            if (Ie.killTweensOf(je),
            R) {
                const $e = Math.max(120, h.value * 1.5)
                  , Le = ce * g.value;
                Ie.set(je, {
                    width: $e,
                    height: Math.max(10, g.value),
                    x: -$e,
                    y: Le,
                    opacity: 0
                }),
                Ie.to(je, {
                    x: a.value + $e,
                    opacity: 1,
                    duration: .8,
                    ease: "none",
                    onComplete: () => {
                        Ie.to(je, {
                            opacity: 0,
                            duration: .2
                        })
                    }
                })
            } else {
                const $e = Math.max(120, g.value * 1.5)
                  , Le = ce * h.value;
                Ie.set(je, {
                    width: Math.max(10, h.value),
                    height: $e,
                    x: Le,
                    y: -$e,
                    opacity: 0
                }),
                Ie.to(je, {
                    y: n.value + $e,
                    opacity: 1,
                    duration: .8,
                    ease: "none",
                    onComplete: () => {
                        Ie.to(je, {
                            opacity: 0,
                            duration: .2
                        })
                    }
                })
            }
        }
          , L = () => {
            D && window.clearInterval(D),
            D = window.setInterval(P, 3500)
        }
          , B = () => {
            D && (window.clearInterval(D),
            D = null),
            O && (window.clearTimeout(O),
            O = null)
        }
        ;
        return hs([ () => t.songs, m], async () => {
            if (w.value = k(m.value),
            await xs(),
            !E.value) {
                N(),
                L(),
                E.value = !0;
                return
            }
            q()
        }
        ),
        Ct(async () => {
            w.value = k(m.value),
            await xs(),
            N(),
            L(),
            E.value = !0
        }
        ),
        pc( () => {
            B()
        }
        ),
        (T, y) => (Y(),
        M("div", {
            ref_key: "containerRef",
            ref: f,
            class: "monitor-shell"
        }, [V("div", {
            class: "monitor-grid",
            style: Dt({
                gridTemplateColumns: `repeat(${u.value}, minmax(0, 1fr))`
            })
        }, [(Y(!0),
        M(Ce, null, $s(w.value, (R, ce) => (Y(),
        M("div", {
            key: R.slot,
            class: qe(["monitor-unit", {
                active: C.value.has(ce)
            }])
        }, [V("div", Bh, [V("span", {
            ref_for: !0,
            ref_key: "unitRefs",
            ref: d,
            class: qe(["unit-text", {
                disabled: !R.song,
                "sc-glow": !!R.song?.sc
            }]),
            onClick: le => X(R.song)
        }, be(R.title), 11, Lh)])], 2))), 128))], 4), V("div", {
            ref_key: "scanlineRef",
            ref: b,
            class: qe(["monitor-scanline", A.value])
        }, null, 2)], 512))
    }
})
  , Gh = Ss(Wh, [["__scopeId", "data-v-eae55766"]])
  , Jh = {
    key: 0,
    class: "random-ring"
}
  , e3 = ["onClick"]
  , s3 = {
    class: "card-inner"
}
  , t3 = {
    key: 0,
    class: "card-content"
}
  , c3 = {
    class: "card-meta"
}
  , f3 = {
    key: 0,
    class: "card-row"
}
  , b3 = {
    key: 1,
    class: "card-tags"
}
  , d3 = {
    key: 0,
    class: "card-tag"
}
  , a3 = {
    key: 1,
    class: "card-tag"
}
  , n3 = {
    key: 2,
    class: "card-row card-remarks"
}
  , i3 = ["onClick"]
  , l3 = {
    key: 1,
    class: "card-empty"
}
  , o3 = {
    key: 1,
    class: "random-empty"
}
  , r3 = Us({
    __name: "RandomCardModal",
    props: {
        open: {
            type: Boolean
        },
        songs: {}
    },
    emits: ["close"],
    setup(s, {emit: e}) {
        const t = s
          , c = e
          , f = he([])
          , b = he(new Set)
          , d = he(null)
          , a = he([])
          , {width: n} = _i();
        let l = null;
        const i = (D, O) => {
            if (!D.length)
                return [];
            const _ = [...D];
            for (let k = _.length - 1; k > 0; k -= 1) {
                const F = Math.floor(Math.random() * (k + 1))
                  , N = _[k];
                _[k] = _[F],
                _[F] = N
            }
            return _.slice(0, O)
        }
          , r = D => {
            const O = n.value <= 768 ? 4 : 10
              , k = [...i(D, O)];
            for (; k.length < O; )
                k.push(null);
            return k.map( (F, N) => ({
                key: F?.id ? `${F.id}-${N}` : `empty-${N}`,
                song: F
            }))
        }
          , u = () => {
            f.value = r(t.songs ?? []),
            b.value = new Set,
            a.value = []
        }
          , p = async () => {
            await xs();
            const D = d.value
              , O = a.value;
            D && (l && l.kill(),
            Ie.set(D, {
                opacity: 0,
                scale: .96,
                y: 16
            }),
            Ie.set(O, {
                opacity: 0,
                scale: .7,
                y: 20,
                rotationZ: -8
            }),
            l = Ie.timeline(),
            l.to(D, {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: .45,
                ease: "power2.out"
            }).to(O, {
                opacity: 1,
                scale: 1,
                y: 0,
                rotationZ: 0,
                duration: .6,
                stagger: .08,
                ease: "power3.out"
            }, "-=0.2"))
        }
          , m = async () => {
            await xs();
            const D = a.value;
            l && l.kill(),
            Ie.set(D, {
                opacity: 0,
                scale: .85,
                y: 16,
                rotationZ: -6
            }),
            l = Ie.timeline(),
            l.to(D, {
                opacity: 1,
                scale: 1,
                y: 0,
                rotationZ: 0,
                duration: .5,
                stagger: .06,
                ease: "power3.out"
            })
        }
        ;
        hs( () => t.open, D => {
            D && (u(),
            p())
        }
        ),
        hs( () => t.songs, () => {
            t.open && (u(),
            p())
        }
        );
        const h = D => {
            if (!f.value[D]?.song)
                return;
            b.value.has(D) ? b.value.delete(D) : b.value.add(D);
            const O = a.value[D];
            O && Ie.fromTo(O, {
                scale: 1
            }, {
                scale: 1.05,
                duration: .18,
                yoyo: !0,
                repeat: 1,
                ease: "power2.out"
            })
        }
          , g = (D, O) => {
            D instanceof HTMLElement && (a.value[O] = D)
        }
        ;
        Bn( () => {
            a.value = []
        }
        );
        const w = () => {
            c("close")
        }
          , C = async D => {
            await xd(D),
            Ed("已複製歌曲名")
        }
          , A = D => D.trim().length > 5
          , E = () => {
            u(),
            m()
        }
        ;
        return pc( () => {
            l && l.kill()
        }
        ),
        (D, O) => (Y(),
        ut(Cd, {
            name: "random-fade"
        }, {
            default: sc( () => [s.open ? (Y(),
            M("div", {
                key: 0,
                class: "random-modal",
                onClick: Tf(w, ["self"])
            }, [V("div", {
                ref_key: "shellRef",
                ref: d,
                class: "random-shell"
            }, [V("button", {
                class: "random-close",
                type: "button",
                onClick: w
            }, "×"), V("div", {
                class: "random-header"
            }, [O[0] || (O[0] = V("div", {
                class: "random-title"
            }, "随機一下", -1)), O[1] || (O[1] = V("div", {
                class: "random-subtitle"
            }, "點塔羅牌翻開", -1)), V("button", {
                class: "random-refresh",
                type: "button",
                onClick: E
            }, "重新随機")]), f.value.length ? (Y(),
            M("div", Jh, [(Y(!0),
            M(Ce, null, $s(f.value, (_, k) => (Y(),
            M("div", {
                key: _.key,
                ref_for: !0,
                ref: F => g(F, k),
                class: qe(["random-card", {
                    flipped: b.value.has(k),
                    empty: !_.song
                }]),
                onClick: F => h(k)
            }, [V("div", s3, [O[2] || (O[2] = V("div", {
                class: "card-face card-front"
            }, [V("div", {
                class: "card-front-title"
            })], -1)), V("div", {
                class: qe(["card-face card-back", {
                    "has-sc": !!_.song?.sc
                }])
            }, [_.song ? (Y(),
            M("div", t3, [V("div", {
                class: qe(["card-title", {
                    "is-long": A(_.song.title)
                }])
            }, be(_.song.title), 3), V("div", c3, [_.song.artist ? (Y(),
            M("div", f3, "歌手：" + be(_.song.artist), 1)) : de("", !0), _.song.language || _.song.genre ? (Y(),
            M("div", b3, [_.song.language ? (Y(),
            M("span", d3, be(_.song.language), 1)) : de("", !0), _.song.genre ? (Y(),
            M("span", a3, be(_.song.genre), 1)) : de("", !0)])) : de("", !0), V("div", {
                class: qe(["card-row card-sc", {

                }])
            }, [_.song.sc ? (Y(),
            ut(Af, {
                key: 0,
                sc: _.song.sc
            }, null, 8, ["sc"])) : de("", !0)], 2), "" ? (Y(),
            M("div", n3, be(_.song.remarks), 1)) : de("", !0)]), V("button", {
                class: "card-copy",
                type: "button",
                onClick: Tf(F => C(_.song.title), ["stop"])
            }, " 複製歌名 ", 8, i3)])) : (Y(),
            M("div", l3, "暫無歌曲"))], 2)])], 10, e3))), 128))])) : (Y(),
            M("div", o3, "沒有找到相關歌曲"))], 512)])) : de("", !0)]),
            _: 1
        }))
    }
})
  , h3 = Ss(r3, [["__scopeId", "data-v-3d17bb05"]])
  , p3 = {
    class: "monitor-card"
}
  , u3 = {
    class: "monitor-title"
}
  , m3 = {
    class: "monitor-meta"
}
  , g3 = {
    key: 0,
    class: "monitor-row"
}
  , v3 = {
    key: 1,
    class: "monitor-tags"
}
  , w3 = {
    key: 0,
    class: "monitor-tag"
}
  , D3 = {
    key: 1,
    class: "monitor-tag"
}
  , C3 = {
    key: 2,
    class: "monitor-row monitor-sc"
}
  , x3 = {
    key: 3,
    class: "monitor-row monitor-remarks"
}
  , E3 = Us({
    __name: "SongCardModal",
    props: {
        song: {}
    },
    emits: ["close"],
    setup(s, {emit: e}) {
        const t = s
          , c = e
          , f = () => {
            c("close")
        }
          , b = async () => {
            t.song && (await xd(t.song.title),
            Ed("已複製歌曲名"))
        }
        ;
        return (d, a) => s.song ? (Y(),
        M("div", {
            key: 0,
            class: "monitor-modal",
            onClick: Tf(f, ["self"])
        }, [V("div", p3, [V("button", {
            class: "monitor-close",
            type: "button",
            onClick: f
        }, "×"), V("div", u3, be(s.song.title), 1), V("div", m3, [s.song.artist ? (Y(),
        M("div", g3, "歌手：" + be(s.song.artist), 1)) : de("", !0), s.song.language || s.song.genre ? (Y(),
        M("div", v3, [s.song.language ? (Y(),
        M("span", w3, be(s.song.language), 1)) : de("", !0), s.song.genre ? (Y(),
        M("span", D3, be(s.song.genre), 1)) : de("", !0)])) : de("", !0), s.song.sc ? (Y(),
        M("div", C3, [pe(Af, {
            sc: s.song.sc
        }, null, 8, ["sc"])])) : de("", !0), s.song.remarks ? (Y(),
        M("div", x3, be(s.song.remarks), 1)) : de("", !0)]), V("button", {
            class: "monitor-copy",
            type: "button",
            onClick: b
        }, "複製歌名")])])) : de("", !0)
    }
})
  , F3 = Ss(E3, [["__scopeId", "data-v-d5b320b2"]])
  , y3 = {
    key: 0,
    class: "toast-notice"
}
  , T3 = Us({
    __name: "ToastNotice",
    setup(s) {
        const e = he(!1)
          , t = he("");
        let c = null
          , f = null;
        const b = d => {
            t.value = d,
            e.value = !0,
            c && window.clearTimeout(c),
            c = window.setTimeout( () => {
                e.value = !1
            }
            , 1800)
        }
        ;
        return Ct( () => {
            f = A1(b)
        }
        ),
        pc( () => {
            f?.(),
            c && window.clearTimeout(c)
        }
        ),
        (d, a) => (Y(),
        ut(Cd, {
            name: "toast-fade"
        }, {
            default: sc( () => [e.value ? (Y(),
            M("div", y3, be(t.value), 1)) : de("", !0)]),
            _: 1
        }))
    }
})
  , A3 = Ss(T3, [["__scopeId", "data-v-faae94fc"]])
  , _3 = {
    class: "app-root"
}
  , k3 = {
    key: 0,
    class: "global-loader",
    role: "status",
    "aria-live": "polite",
    "aria-busy": "true"
}
  , O3 = ["src"]
  , I3 = ["src"]
  , R3 = {
    class: "app-shell"
}
  , $3 = {
    class: "app-cards"
}
  , N3 = {
    class: "sidebar-body"
}
  , j3 = {
    class: "sidebar-profile"
}
  , V3 = {
    class: "sidebar-name"
}
  , z3 = {
    class: "sidebar-profile-actions"
}
  , H3 = ["href"]
  , U3 = {
    class: "sidebar-random-row"
}
  , S3 = {
    class: "sidebar-search"
}
  , K3 = {
    class: "sidebar-filters"
}
  , Y3 = ["value"]
  , q3 = ["value"]
  , X3 = ["value"]
  , Z3 = {
    class: "sidebar-count"
}
  , Q3 = {
    class: "window-header mobile-only"
}
  , M3 = {
    class: "mobile-action-row"
}
  , P3 = {
    class: "mobile-filters"
}
  , B3 = ["value"]
  , L3 = ["value"]
  , W3 = ["value"]
  , G3 = {
    key: 0,
    class: "list-header desktop-only"
}
  , J3 = {
    key: 1,
    class: "main-header desktop-only"
}
  , e2 = {
    key: "sphere",
    class: "main-body main-body-centered flex items-center justify-center"
}
  , s2 = {
    key: "danmaku",
    class: "main-body main-body-centered flex items-center justify-center"
}
  , t2 = {
    key: "monitor",
    class: "main-body main-body-centered flex items-center justify-center"
}
  , c2 = {
    class: "app-footer"
}
  , f2 = {
    class: "profile-card",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "主播檔案"
}
  , Tb = "https://songlist-1252424442.cos.accelerate.myqcloud.com/"
  , Ab = "https://nilianlily-1252424442.cos.ap-shanghai.myqcloud.com/www-nilianlily-cn/"
  , _b = "https://s1.hdslb.com/bfs/face/0f32efc5fb51e9deab9f34aa73b4ced183a56559.webp@128w_128h_1c_1s.webp"
  , b2 = Us({
    __name: "App",
    setup(s) {
        const e = p1()
          , t = he(null)
          , c = he("list")
          , f = he(null)
          , b = he(new Date().toISOString().slice(0, 10))
          , d = he(!1)
          , a = he(!1)
          , n = he(null)
          , l = he(!0)
          , i = () => {
            const T = window.location.hostname;
            return T === "localhost" || T === "127.0.0.1" || T === "::1"
        }
          , r = T => T === "nilianlily.cn" || T.endsWith(".nilianlily.cn")
          , u = he({
            type: "video",
            src: "./background.mp4"
        })
          , p = he(_b)
          , m = Fe( () => c.value === "list" ? "切換平鋪模式" : c.value === "monitor" ? "切換3D模式" : c.value === "sphere" ? "切換彈幕模式" : "切換列表模式")
          , h = Fe( () => c.value === "list" ? "平鋪" : c.value === "monitor" ? "3D" : c.value === "sphere" ? "彈幕" : "列表")
          , g = () => {
            c.value = c.value === "list" ? "monitor" : c.value === "monitor" ? "sphere" : c.value === "sphere" ? "danmaku" : "list"
        }
          , w = T => {
            f.value = T.id,
            n.value = T
        }
          , C = T => T === "themis-wife.vsinger.ink" || T === "songlist.aria.fish" ? "songlist-aria-fish" : T === "aria-wife.vsinger.ink" || T === "themis.vsinger.ink" ? "themis" : T.endsWith("vsinger.ink") ? T.split(".")[0] ?? T : T.replace(/\./g, "-")
          , A = () => "./list.txt"
          ,E = () => "./"
          , D = T => r(T) ? _b : {
            "weisteria.vsinger.ink": "https://s1.hdslb.com/bfs/face/ac736bacfbbc0e791cc15547454fde39eb34ac09.jpg@240w_240h.webp",
            "guan.vsinger.ink": "https://s1.hdslb.com/bfs/face/e683a1ee7b15b347e6e22ab8b7e34f44de2f4f5e.jpg@240w_240h.webp",
            "kkcc.vsinger.ink": "https://s1.hdslb.com/bfs/face/175a90bf55ebd288ab0b6cc3116bf8cb7aa133b4.jpg@240w_240h.webp",
            "thorn.vsinger.ink": "https://s1.hdslb.com/bfs/face/c4c9c14fd2b0c7b57cd9724408e956f1a5f043e5.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif",
            "songlist.aria.fish": "https://s1.hdslb.com/bfs/face/67ec51850628d1b1ae63c6b922a300f38203e946.jpg@240w_240h.webp",
            "galaxy.vsinger.ink": "https://s1.hdslb.com/bfs/face/8c50439d025abc2a8cd43cb800ee1c2e82f5e3c0.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif",
            "khonsu.vsinger.ink": "https://s1.hdslb.com/bfs/face/89fb8b8558ed1175862cb33fddcc60994dc2bd5f.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif",
            "link.vsinger.ink": "https://s1.hdslb.com/bfs/face/69752646fc90ba53f34c8cc00ab7c4015844c733.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif",
            "penz.vsinger.ink": "https://s1.hdslb.com/bfs/face/28f2ac93d1d1952389cdf8e81ca2ac3d1b5caea5.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif",
            "themis.vsinger.ink": "https://s1.hdslb.com/bfs/face/ff78a4321bea50530cac4371832eb2576e6f601b.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif",
            "wenina.vsinger.ink": "https://s1.hdslb.com/bfs/face/91baa03226ab78b7cc23033e62e46ab821045c57.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif",
            "wurong.vsinger.ink": "https://s1.hdslb.com/bfs/face/d0607ee3030f33de83a1145a43f6c0d824197d4c.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif",
            "yybb.vsinger.ink": "https://s1.hdslb.com/bfs/face/9ce464de773fba0a7e4d5b66f18829424b4a9825.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif",
            "mizu.vsinger.ink": "https://s1.hdslb.com/bfs/face/03a1c747a27a6397535ba76712e71f627e3fabd2.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif",
            "xiu.vsinger.ink": "https://s1.hdslb.com/bfs/face/08e3a02a9d13ad8dd09b6db2f20bb4d51e63bedb.jpg@240w_240h_1c_1s_!web-avatar-space-header.avif",
            "hoi.vsinger.ink": "https://s1.hdslb.com/bfs/face/80739e2f82931b88548f6c726b82d8f1707a1b65.jpg@240w_240h.webp",
            "may.vsinger.ink": "https://s1.hdslb.com/bfs/face/684aa3142cba2e20258b3a3b9ee4cdff061d2e9f.jpg@240w_240h.webp"
        }[T.toLowerCase()] ?? _b
          , O = T => {
            if (!T)
                return "";
            const y = new Date(T);
            return Number.isNaN(y.getTime()) ? "" : y.toISOString().slice(0, 10)
        }
          , _ = T => {
            const y = document.querySelector('link[rel~="icon"]');
            if (y) {
                y.href = T;
                return
            }
            const R = document.createElement("link");
            R.rel = "icon",
            R.href = T,
            document.head.appendChild(R)
        }
          , k = () => document.createElement("video").canPlayType('video/mp4; codecs="hev1.2.4.L120.B0"') !== ""
          , F = async T => {
            try {
                return (await fetch(T, {
                    method: "GET",
                    cache: "no-store"
                })).ok
            } catch {
                return !1
            }
        }
          , N = async () => {
            const T = E()
              , y = window.innerWidth > 1280
              , R = window.innerWidth <= 768
              , ce = window.location.hostname;
            if (r(ce) && !R) {
                const fe = ["background-2.mp4", "background-3.mp4", "background.mp4"]
                  , fs = fe[Math.floor(Math.random() * fe.length)]
                  , Ne = `${T}${fs}`;
                if (await F(Ne) && k()) {
                    u.value = {
                        type: "video",
                        src: Ne
                    };
                    return
                }
                u.value = {
                    type: "image",
                    src: ""
                };
                return
            }
            const le = R ? "background2" : "background";
            if (y || R) {
                const fe = `${T}${le}.mp4`;
                if (await F(fe) && k()) {
                    u.value = {
                        type: "video",
                        src: ""
                    };
                    return
                }
            }
            u.value = {
                type: "image",
                src: `${T}${le}.webp`
            }
        }
          , q = () => {
            const T = E()
              , y = window.location.hostname;
            if (r(y) && window.innerWidth > 768) {
                u.value = {
                    type: "image",
                    src: ""
                };
                return
            }
            const R = window.innerWidth <= 768 ? "background2" : "background";
            u.value = {
                type: "image",
                src: `${T}${R}.webp`
            }
        }
          , $ = T => {
            const y = T?.trim() || "主播名稱";
            document.title = `嘎嘎的歌單`
        }
          , X = () => new Promise(T => {
            if (document.readyState === "complete") {
                T();
                return
            }
            window.addEventListener("load", () => T(), {
                once: !0
            })
        }
        )
          , P = T => new Promise(y => {
            if (!T.src) {
                y();
                return
            }
           if (T.type === "image") {
    // 暴力修正：如果發現路徑包含 webp，強行改成 mp4 走下面的影片邏輯
    if (T.src.includes('background.webp')) {
        T.type = "video";
        T.src = "./background.mp4";
    } else {
        const ce = new Image;
        ce.onload = () => y(),
        ce.onerror = () => y(),
        ce.src = T.src,
        ce.complete && y();
        return
    }
}
// 下面是處理影片的邏輯
const R = document.createElement("video");
R.onloadeddata = () => y(),
R.onerror = () => {
    console.log("背景影片加載失敗，強行跳過加載畫面");
    y(); // 關鍵：就算報錯也要執行 y()，讓網頁繼續顯示內容
},
R.src = T.src,
R.load()
        }
        )
          , L = async () => {
            const T = e.filteredSongs;
            if (!T.length)
                return;
            const y = T[Math.floor(Math.random() * T.length)];
            if (!y)
                return;
            f.value = y.id,
            n.value = y,
            await xs();
            const R = t.value?.querySelector(`[data-song-id="${y.id}"]`);
            R && R.scrollIntoView({
                behavior: "smooth",
                block: "center"
            })
        }
          , B = () => {
            a.value = !0
        }
        ;
        return Ct(async () => {
            try {
                const T = window.location.hostname;
                p.value = D(T);
                const y = i() ? "/favicon.ico" : r(T) ? `${Ab}favicon.ico` : `${Tb}${C(T)}/favicon.ico`;
                _(y),
                await N(),
                $(e.alias),
                hs( () => e.alias, Ne => $(Ne), {
                    immediate: !0
                }),
                Promise.all([X(), P(u.value)]).finally( () => {
                    l.value = !1
                }
                );
                const R = A()
                  , ce = `${R}?timestamp=${new Date().getTime()}`;
                let le = await fetch(ce);
                if (!le.ok && R !== "/list.txt" && (le = await fetch(`/list.txt?timestamp=${new Date().getTime()}`)),
                !le.ok)
                    return;
                const fe = O(le.headers.get("last-modified"));
                b.value = fe || new Date().toISOString().slice(0, 10);
                const fs = await le.text();
                e.loadFromText(fs)
            } catch {}
        }
        ),
        (T, y) => (Y(),
        M("div", _3, [l.value ? (Y(),
        M("div", k3, [...y[16] || (y[16] = [V("div", {
            class: "loader-card"
        }, [V("span", {
            class: "loader-spinner"
        }), V("span", {
            class: "loader-text"
        }, "資源加載中...")], -1)])])) : de("", !0), u.value.type === "video" ? (Y(),
        M("video", {
            key: 1,
            class: "background-video",
            autoplay: "",
            muted: "",
            loop: "",
            playsinline: "",
            onError: q
        }, [V("source", {
            src: "./background.mp4",
            type: "video/mp4"
        }, null, 8, O3)], 32)) : (Y(),
        M("img", {
            key: 2,
            class: "background-image",
            src: "./background.mp4",
            alt: ""
        }, null, 8, I3)), V("div", R3, [V("div", $3, [pe($a, {
            class: "app-card sidebar-card desktop-only"
        }, {
            default: sc( () => [V("div", N3, [V("div", j3, [V("div", {
                class: "avatar",
                style: Dt({
                    backgroundImage: `url('${p.value}')`
                })
            }, null, 4),// ...前面的代碼
            V("div", V3, be(te(e).alias || "嘎嘎的歌單")), 
            V("div", z3, [
                V("button", {
                    class: "sidebar-link sidebar-profile-button",
                    type: "button",
                    onClick: y[0] || (y[0] = R => d.value = !0)
                }, " 主播檔案 "), 
                V("a", {
                    href: "https://timmy1015-student.github.io/portfolio/",
                    class: "sidebar-link sidebar-profile-button",
                    rel: "noreferrer"
                }, " 前往主頁 ")
            ])]), V("div", U3, [V("button", {
                class: "sidebar-action",
                type: "button",
                onClick: L
            }, " 隨機一首 "), V("button", {
                class: "sidebar-action icon-button random-icon-button",
                type: "button",
                onClick: B,
                "aria-label": "隨機一下"
            }, [...y[17] || (y[17] = [V("img", {
                class: "sidebar-action-icon",
                src: "./playing_cards.png",
                alt: ""
            }, null, -1), V("span", {
                class: "visually-hidden"
            }, "随機一下", -1)])]), V("button", {
                class: qe(["sidebar-sc-toggle", {
                    active: te(e).scOnly
                }]),
                type: "button",
                onClick: y[1] || (y[1] = R => te(e).scOnly = !te(e).scOnly)
            }, " SC ", 2)]), V("div", S3, [pe(Na, {
                modelValue: te(e).query,
                "onUpdate:modelValue": y[2] || (y[2] = R => te(e).query = R)
            }, null, 8, ["modelValue"])]), V("div", K3, [Zt(V("select", {
                "onUpdate:modelValue": y[3] || (y[3] = R => te(e).selectedArtist = R),
                class: "sidebar-select"
            }, [y[18] || (y[18] = V("option", {
                value: ""
            }, "全部歌手", -1)), (Y(!0),
            M(Ce, null, $s(te(e).artistOptions, R => (Y(),
            M("option", {
                key: R.value,
                value: R.value
            }, be(R.label), 9, Y3))), 128))], 512), [[Qt, te(e).selectedArtist]]), Zt(V("select", {
                "onUpdate:modelValue": y[4] || (y[4] = R => te(e).selectedLanguage = R),
                class: "sidebar-select"
            }, [y[19] || (y[19] = V("option", {
                value: ""
            }, "全部語言", -1)), (Y(!0),
            M(Ce, null, $s(te(e).languageOptions, R => (Y(),
            M("option", {
                key: R.value,
                value: R.value
            }, be(R.label), 9, q3))), 128))], 512), [[Qt, te(e).selectedLanguage]]), Zt(V("select", {
                "onUpdate:modelValue": y[5] || (y[5] = R => te(e).selectedGenre = R),
                class: "sidebar-select"
            }, [y[20] || (y[20] = V("option", {
                value: ""
            }, "全部風格", -1)), (Y(!0),
            M(Ce, null, $s(te(e).genreOptions, R => (Y(),
            M("option", {
                key: R.value,
                value: R.value
            }, be(R.label), 9, X3))), 128))], 512), [[Qt, te(e).selectedGenre]]), V("button", {
                class: "sidebar-action",
                type: "button",
                onClick: g
            }, be(m.value), 1)]), V("div", Z3, "共 " + be(te(e).songs.length) + " 首歌曲", 1)])]),
            _: 1
        }), pe($a, {
            class: "app-card main-card"
        }, {
            default: sc( () => [V("div", Q3, [pe(Na, {
                modelValue: te(e).query,
                "onUpdate:modelValue": y[6] || (y[6] = R => te(e).query = R)
            }, null, 8, ["modelValue"]), V("div", M3, [V("button", {
                class: "sidebar-action",
                type: "button",
                onClick: L
            }, "随機"), V("button", {
                class: "sidebar-action icon-button random-icon-button",
                type: "button",
                onClick: B,
                "aria-label": "随機一下"
            }, [...y[21] || (y[21] = [V("img", {
                class: "sidebar-action-icon",
                src: "./playing_cards.png",
                alt: ""
            }, null, -1), V("span", {
                class: "visually-hidden"
            }, "随機一下", -1)])]), V("button", {
                class: "sidebar-sc-toggle sidebar-profile-button",
                type: "button",
                onClick: y[7] || (y[7] = R => d.value = !0)
            }, " 檔案 "), V("button", {
                class: qe(["sidebar-sc-toggle mobile-3d-toggle", {
                    active: c.value !== "list"
                }]),
                type: "button",
                onClick: g
            }, be(h.value), 3), V("button", {
                class: qe(["sidebar-sc-toggle", {
                    active: te(e).scOnly
                }]),
                type: "button",
                onClick: y[8] || (y[8] = R => te(e).scOnly = !te(e).scOnly)
            }, " SC ", 2)]), V("div", P3, [Zt(V("select", {
                "onUpdate:modelValue": y[9] || (y[9] = R => te(e).selectedArtist = R),
                class: "sidebar-select"
            }, [y[22] || (y[22] = V("option", {
                value: ""
            }, "全部歌手", -1)), (Y(!0),
            M(Ce, null, $s(te(e).artistOptions, R => (Y(),
            M("option", {
                key: R.value,
                value: R.value
            }, be(R.label), 9, B3))), 128))], 512), [[Qt, te(e).selectedArtist]]), Zt(V("select", {
                "onUpdate:modelValue": y[10] || (y[10] = R => te(e).selectedLanguage = R),
                class: "sidebar-select"
            }, [y[23] || (y[23] = V("option", {
                value: ""
            }, "全部語言", -1)), (Y(!0),
            M(Ce, null, $s(te(e).languageOptions, R => (Y(),
            M("option", {
                key: R.value,
                value: R.value
            }, be(R.label), 9, L3))), 128))], 512), [[Qt, te(e).selectedLanguage]]), Zt(V("select", {
                "onUpdate:modelValue": y[11] || (y[11] = R => te(e).selectedGenre = R),
                class: "sidebar-select"
            }, [y[24] || (y[24] = V("option", {
                value: ""
            }, "全部風格", -1)), (Y(!0),
            M(Ce, null, $s(te(e).genreOptions, R => (Y(),
            M("option", {
                key: R.value,
                value: R.value
            }, be(R.label), 9, W3))), 128))], 512), [[Qt, te(e).selectedGenre]])])]), c.value === "list" ? (Y(),
            M("div", G3, [...y[25] || (y[25] = [V("div", {
                class: "col col-title"
            }, "歌名", -1), V("div", {
                class: "col col-artist"
            }, "歌手", -1), V("div", {
                class: "col col-language"
            }, "語言", -1), V("div", {
                class: "col col-genre"
            }, "風格", -1), V("div", {
                class: "col col-sc"
            }, "SC", -1), V("div", {
                class: "col col-remarks"
            }, "備註", -1)])])) : de("", !0), c.value === "list" ? (Y(),
            M("div", J3)) : de("", !0), pe(Cd, {
                name: "fade",
                mode: "out-in"
            }, {
                default: sc( () => [c.value === "sphere" ? (Y(),
                M("div", e2, [pe(ar, {
                    songs: te(e).filteredSongs,
                    onSelect: w
                }, null, 8, ["songs"])])) : c.value === "danmaku" ? (Y(),
                M("div", s2, [pe(Tr, {
                    songs: te(e).filteredList,
                    onSelect: w
                }, null, 8, ["songs"])])) : c.value === "monitor" ? (Y(),
                M("div", t2, [pe(Gh, {
                    songs: te(e).filteredList,
                    onSelect: w
                }, null, 8, ["songs"])])) : (Y(),
                M("div", {
                    key: "list",
                    ref_key: "listContainer",
                    ref: t,
                    class: "main-body app-scroll"
                }, [pe(W1, {
                    songs: te(e).filteredSongs,
                    "active-song-id": f.value
                }, null, 8, ["songs", "active-song-id"])], 512))]),
                _: 1
            })]),
            _: 1
        })])]), V("div", c2, [y[26] || (y[26] = V("span", null, "© 2026 陳霆嘉．版權所有", -1)), V("span", null, "Last Updated: 2026 / 03 / 22", 1)]), d.value ? (Y(),
        M("div", {
            key: 3,
            class: "profile-modal",
            onClick: y[13] || (y[13] = Tf(R => d.value = !1, ["self"]))
        }, [V("div", f2, [V("button", {
            class: "profile-close",
            type: "button",
            onClick: y[12] || (y[12] = R => d.value = !1)
        }, "×"), y[27] || (y[27] = go(`<div class="profile-section"> <div class="profile-title">🎤 關於嘎嘎 Gaga</div> <div class="profile-item"><span class="profile-label">身份：</span><span>曾任熱音社男主唱 (兩任)</span></div> <div class="profile-item"><span class="profile-label">特質：</span><span>INTJ / 喜歡音樂與程式</span></div> <div class="profile-item"><span class="profile-label">愛好：</span><span>雀魂 / 唱歌 / 睡覺 / 豆漿紅茶</span></div> </div> <div class="profile-section"> <div class="profile-title">🎵 歌單說明</div> <div class="profile-rule">✨ 這裡收藏了許多我喜歡唱，或是覺得動聽的歌。</div> <div class="profile-rule">✨ 點擊歌名即可自動播放音樂，歡迎在這聽歌！</div> </div> <div class="profile-section"> <div class="profile-title">🛠️ 開發紀錄與致敬</div> <div class="profile-rule">✨ UI 概念啟發自 <b>nilianlily.cn</b>。</div> <div class="profile-rule">✨ 本站本人進行代碼重構並新增音樂播放等眾多功能</b>。</div> <div class="profile-rule">✨ 透過技術優化，實現更符合個人化需求的音樂工具。</div> </div>`, 2))])])) : de("", !0), pe(F3, {
            song: n.value,
            onClose: y[14] || (y[14] = R => n.value = null)
        }, null, 8, ["song"]), pe(h3, {
            open: a.value,
            songs: te(e).filteredSongs,
            onClose: y[15] || (y[15] = R => a.value = !1)
        }, null, 8, ["open", "songs"]), pe(A3)]))
    }
})
  , k0 = c1(b2);
k0.use(d1());
k0.mount("#app");

