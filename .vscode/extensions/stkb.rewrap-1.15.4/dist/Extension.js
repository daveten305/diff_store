var $19YtE$vscode = require("vscode");
var $19YtE$fastdiff = require("fast-diff");
var $19YtE$path = require("path");
var $19YtE$fs = require("fs");
var $19YtE$json5 = require("json5");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "activate", () => $fad922d34226e04f$export$234c45b355edd85b);
$parcel$export(module.exports, "getCoreSettings", () => $48bcbed0cf086a92$export$7b76d8f1f719850);
function $4261fbb19e0b4aac$export$9652023d9040757(x) {
    return x != null && typeof x === "object" && Symbol.iterator in x;
}
function $4261fbb19e0b4aac$export$1e2f57719e155213(x) {
    return Array.isArray(x) || ArrayBuffer.isView(x);
}
function $4261fbb19e0b4aac$var$isComparer(x) {
    return typeof x.Compare === "function";
}
function $4261fbb19e0b4aac$var$isComparable(x) {
    return typeof x.CompareTo === "function";
}
function $4261fbb19e0b4aac$var$isEquatable(x) {
    return typeof x.Equals === "function";
}
function $4261fbb19e0b4aac$var$isHashable(x) {
    return typeof x.GetHashCode === "function";
}
function $4261fbb19e0b4aac$export$e29d65b7eabdc6dd(x) {
    return x != null && typeof x.Dispose === "function";
}
function $4261fbb19e0b4aac$export$52febab2880147bb(x, y) {
    return Object.getPrototypeOf(x).constructor === Object.getPrototypeOf(y).constructor;
}
class $4261fbb19e0b4aac$export$95c529ba89ee4ce7 {
    constructor(iter){
        this.iter = iter;
    }
    ["System.Collections.Generic.IEnumerator`1.get_Current"]() {
        return this.current;
    }
    ["System.Collections.IEnumerator.get_Current"]() {
        return this.current;
    }
    ["System.Collections.IEnumerator.MoveNext"]() {
        const cur = this.iter.next();
        this.current = cur.value;
        return !cur.done;
    }
    ["System.Collections.IEnumerator.Reset"]() {
        throw new Error("JS iterators cannot be reset");
    }
    Dispose() {
        return;
    }
}
function $4261fbb19e0b4aac$export$a41738691dcd8bea(o) {
    return typeof o.GetEnumerator === "function" ? o.GetEnumerator() : new $4261fbb19e0b4aac$export$95c529ba89ee4ce7(o[Symbol.iterator]());
}
function $4261fbb19e0b4aac$export$21e0669b7bd01bb4(en) {
    return {
        [Symbol.iterator] () {
            return this;
        },
        next () {
            const hasNext = en["System.Collections.IEnumerator.MoveNext"]();
            const current = hasNext ? en["System.Collections.IEnumerator.get_Current"]() : undefined;
            return {
                done: !hasNext,
                value: current
            };
        }
    };
}
class $4261fbb19e0b4aac$export$6f7eded1b7c5be2f {
    constructor(f1){
        this.Compare = f1 || $4261fbb19e0b4aac$export$398604a469f7de9a;
    }
}
function $4261fbb19e0b4aac$export$40090773fd11c74c(comparer) {
    // Sometimes IEqualityComparer also implements IComparer
    if ($4261fbb19e0b4aac$var$isComparer(comparer)) return new $4261fbb19e0b4aac$export$6f7eded1b7c5be2f(comparer.Compare);
    else return new $4261fbb19e0b4aac$export$6f7eded1b7c5be2f((x, y)=>{
        const xhash = comparer.GetHashCode(x);
        const yhash = comparer.GetHashCode(y);
        if (xhash === yhash) return comparer.Equals(x, y) ? 0 : -1;
        else return xhash < yhash ? -1 : 1;
    });
}
function $4261fbb19e0b4aac$export$27555cdfb0b84a1a(actual, expected, msg) {
    if (!$4261fbb19e0b4aac$export$e9bab7fafb253603(actual, expected)) throw Object.assign(new Error(msg || `Expected: ${expected} - Actual: ${actual}`), {
        actual: actual,
        expected: expected
    });
}
function $4261fbb19e0b4aac$export$49eedac51f614f7d(actual, expected, msg) {
    if ($4261fbb19e0b4aac$export$e9bab7fafb253603(actual, expected)) throw Object.assign(new Error(msg || `Expected: ${expected} - Actual: ${actual}`), {
        actual: actual,
        expected: expected
    });
}
class $4261fbb19e0b4aac$export$b624eff549462981 {
    constructor(factory){
        this.factory = factory;
        this.isValueCreated = false;
    }
    get Value() {
        if (!this.isValueCreated) {
            this.createdValue = this.factory();
            this.isValueCreated = true;
        }
        return this.createdValue;
    }
    get IsValueCreated() {
        return this.isValueCreated;
    }
}
function $4261fbb19e0b4aac$export$c5f9bac959aafb6(v) {
    return new $4261fbb19e0b4aac$export$b624eff549462981(()=>v
    );
}
function $4261fbb19e0b4aac$export$eeb1958fe3944641(i, length) {
    let str = i.toString(10);
    while(str.length < length)str = "0" + str;
    return str;
}
function $4261fbb19e0b4aac$export$9251776e912f9733(i, lengthLeft, lengthRight) {
    let str = i.toString(10);
    while(str.length < lengthLeft)str = "0" + str;
    while(str.length < lengthRight)str = str + "0";
    return str;
}
function $4261fbb19e0b4aac$export$b4360650442640a0(date) {
    const date1 = date;
    return typeof date1.offset === "number" ? date1.offset : date.kind === 1 /* UTC */  ? 0 : date.getTimezoneOffset() * -60000;
}
function $4261fbb19e0b4aac$export$a3afeaad75c2403e(i, radix) {
    i = i < 0 && radix != null && radix !== 10 ? 65535 + i + 1 : i;
    return i.toString(radix);
}
function $4261fbb19e0b4aac$export$afbd86327cbebb03(i, radix) {
    i = i < 0 && radix != null && radix !== 10 ? 4294967295 + i + 1 : i;
    return i.toString(radix);
}
class $4261fbb19e0b4aac$export$f3f95c9f1920e9b5 {
    static id(o) {
        if (!$4261fbb19e0b4aac$export$f3f95c9f1920e9b5.idMap.has(o)) $4261fbb19e0b4aac$export$f3f95c9f1920e9b5.idMap.set(o, ++$4261fbb19e0b4aac$export$f3f95c9f1920e9b5.count);
        return $4261fbb19e0b4aac$export$f3f95c9f1920e9b5.idMap.get(o);
    }
}
$4261fbb19e0b4aac$export$f3f95c9f1920e9b5.idMap = new WeakMap();
$4261fbb19e0b4aac$export$f3f95c9f1920e9b5.count = 0;
function $4261fbb19e0b4aac$export$b9b095ec8c02760b(s) {
    let i = 0;
    let h = 5381;
    const len = s.length;
    while(i < len)h = h * 33 ^ s.charCodeAt(i++);
    return h;
}
function $4261fbb19e0b4aac$export$a9844eb73de0a218(x) {
    return x * 2654435761 | 0;
}
function $4261fbb19e0b4aac$export$4a6567c520a28ea3(hashes) {
    if (hashes.length === 0) return 0;
    return hashes.reduce((h1, h2)=>{
        return (h1 << 5) + h1 ^ h2;
    });
}
function $4261fbb19e0b4aac$export$9657185e7652fc5b(x) {
    if (x == null) return 0;
    switch(typeof x){
        case "boolean":
            return x ? 1 : 0;
        case "number":
            return $4261fbb19e0b4aac$export$a9844eb73de0a218(x);
        case "string":
            return $4261fbb19e0b4aac$export$b9b095ec8c02760b(x);
        default:
            return $4261fbb19e0b4aac$export$a9844eb73de0a218($4261fbb19e0b4aac$export$f3f95c9f1920e9b5.id(x));
    }
}
function $4261fbb19e0b4aac$export$66b47a187ef76f1c(x) {
    if (x == null) return 0;
    else if ($4261fbb19e0b4aac$var$isHashable(x)) return x.GetHashCode();
    else return $4261fbb19e0b4aac$export$9657185e7652fc5b(x);
}
function $4261fbb19e0b4aac$export$2e003ac3dfcb70a3(x) {
    return x.getTime();
}
function $4261fbb19e0b4aac$export$34638350c54b9a1b(x) {
    const len = x.length;
    const hashes = new Array(len);
    for(let i = 0; i < len; i++)hashes[i] = $4261fbb19e0b4aac$export$2e619f11ca48bee4(x[i]);
    return $4261fbb19e0b4aac$export$4a6567c520a28ea3(hashes);
}
function $4261fbb19e0b4aac$export$2e619f11ca48bee4(x) {
    if (x == null) return 0;
    switch(typeof x){
        case "boolean":
            return x ? 1 : 0;
        case "number":
            return $4261fbb19e0b4aac$export$a9844eb73de0a218(x);
        case "string":
            return $4261fbb19e0b4aac$export$b9b095ec8c02760b(x);
        default:
            if ($4261fbb19e0b4aac$var$isHashable(x)) return x.GetHashCode();
            else if ($4261fbb19e0b4aac$export$1e2f57719e155213(x)) return $4261fbb19e0b4aac$export$34638350c54b9a1b(x);
            else if (x instanceof Date) return $4261fbb19e0b4aac$export$2e003ac3dfcb70a3(x);
            else if (Object.getPrototypeOf(x).constructor === Object) {
                // TODO: check call-stack to prevent cyclic objects?
                const hashes = Object.values(x).map((v)=>$4261fbb19e0b4aac$export$2e619f11ca48bee4(v)
                );
                return $4261fbb19e0b4aac$export$4a6567c520a28ea3(hashes);
            } else // Classes don't implement GetHashCode by default, but must use identity hashing
            return $4261fbb19e0b4aac$export$a9844eb73de0a218($4261fbb19e0b4aac$export$f3f95c9f1920e9b5.id(x));
    }
}
function $4261fbb19e0b4aac$export$2ba04dca110a1015(x) {
    return $4261fbb19e0b4aac$export$b9b095ec8c02760b(String(x));
}
function $4261fbb19e0b4aac$export$fed18027a0c1a84b(x) {
    return x == null ? 0 : $4261fbb19e0b4aac$var$isHashable(x) ? x.GetHashCode() : $4261fbb19e0b4aac$export$a9844eb73de0a218($4261fbb19e0b4aac$export$f3f95c9f1920e9b5.id(x));
}
function $4261fbb19e0b4aac$export$b9a64d2e4daf3c9f(x, y, eq) {
    if (x == null) return y == null;
    if (y == null) return false;
    if (x.length !== y.length) return false;
    for(let i = 0; i < x.length; i++){
        if (!eq(x[i], y[i])) return false;
    }
    return true;
}
function $4261fbb19e0b4aac$export$dc63f52ecf814bf8(x, y) {
    return $4261fbb19e0b4aac$export$b9a64d2e4daf3c9f(x, y, $4261fbb19e0b4aac$export$e9bab7fafb253603);
}
function $4261fbb19e0b4aac$var$equalObjects(x, y) {
    const xKeys = Object.keys(x);
    const yKeys = Object.keys(y);
    if (xKeys.length !== yKeys.length) return false;
    xKeys.sort();
    yKeys.sort();
    for(let i = 0; i < xKeys.length; i++){
        if (xKeys[i] !== yKeys[i] || !$4261fbb19e0b4aac$export$e9bab7fafb253603(x[xKeys[i]], y[yKeys[i]])) return false;
    }
    return true;
}
function $4261fbb19e0b4aac$export$e9bab7fafb253603(x, y) {
    if (x === y) return true;
    else if (x == null) return y == null;
    else if (y == null) return false;
    else if (typeof x !== "object") return false;
    else if ($4261fbb19e0b4aac$var$isEquatable(x)) return x.Equals(y);
    else if ($4261fbb19e0b4aac$export$1e2f57719e155213(x)) return $4261fbb19e0b4aac$export$1e2f57719e155213(y) && $4261fbb19e0b4aac$export$dc63f52ecf814bf8(x, y);
    else if (x instanceof Date) return y instanceof Date && $4261fbb19e0b4aac$export$c4c806e061935577(x, y) === 0;
    else return Object.getPrototypeOf(x).constructor === Object && $4261fbb19e0b4aac$var$equalObjects(x, y);
}
function $4261fbb19e0b4aac$export$c4c806e061935577(x, y) {
    let xtime;
    let ytime;
    // DateTimeOffset and DateTime deals with equality differently.
    if ("offset" in x && "offset" in y) {
        xtime = x.getTime();
        ytime = y.getTime();
    } else {
        xtime = x.getTime() + $4261fbb19e0b4aac$export$b4360650442640a0(x);
        ytime = y.getTime() + $4261fbb19e0b4aac$export$b4360650442640a0(y);
    }
    return xtime === ytime ? 0 : xtime < ytime ? -1 : 1;
}
function $4261fbb19e0b4aac$export$591cc4a8025fba16(x, y) {
    return x === y ? 0 : x < y ? -1 : 1;
}
function $4261fbb19e0b4aac$export$7b00afb96b8966ce(x, y, comp) {
    if (x == null) return y == null ? 0 : 1;
    if (y == null) return -1;
    if (x.length !== y.length) return x.length < y.length ? -1 : 1;
    for(let i = 0, j = 0; i < x.length; i++){
        j = comp(x[i], y[i]);
        if (j !== 0) return j;
    }
    return 0;
}
function $4261fbb19e0b4aac$export$fc16749c794bf6ff(x, y) {
    return $4261fbb19e0b4aac$export$7b00afb96b8966ce(x, y, $4261fbb19e0b4aac$export$398604a469f7de9a);
}
function $4261fbb19e0b4aac$var$compareObjects(x, y) {
    const xKeys = Object.keys(x);
    const yKeys = Object.keys(y);
    if (xKeys.length !== yKeys.length) return xKeys.length < yKeys.length ? -1 : 1;
    xKeys.sort();
    yKeys.sort();
    for(let i = 0, j = 0; i < xKeys.length; i++){
        const key = xKeys[i];
        if (key !== yKeys[i]) return key < yKeys[i] ? -1 : 1;
        else {
            j = $4261fbb19e0b4aac$export$398604a469f7de9a(x[key], y[key]);
            if (j !== 0) return j;
        }
    }
    return 0;
}
function $4261fbb19e0b4aac$export$398604a469f7de9a(x, y) {
    if (x === y) return 0;
    else if (x == null) return y == null ? 0 : -1;
    else if (y == null) return 1;
    else if (typeof x !== "object") return x < y ? -1 : 1;
    else if ($4261fbb19e0b4aac$var$isComparable(x)) return x.CompareTo(y);
    else if ($4261fbb19e0b4aac$export$1e2f57719e155213(x)) return $4261fbb19e0b4aac$export$1e2f57719e155213(y) ? $4261fbb19e0b4aac$export$fc16749c794bf6ff(x, y) : -1;
    else if (x instanceof Date) return y instanceof Date ? $4261fbb19e0b4aac$export$c4c806e061935577(x, y) : -1;
    else return Object.getPrototypeOf(x).constructor === Object ? $4261fbb19e0b4aac$var$compareObjects(x, y) : -1;
}
function $4261fbb19e0b4aac$export$96ec731ed4dcb222(comparer, x, y) {
    return comparer(x, y) < 0 ? x : y;
}
function $4261fbb19e0b4aac$export$8960430cfd85939f(comparer, x, y) {
    return comparer(x, y) > 0 ? x : y;
}
function $4261fbb19e0b4aac$export$7d15b64cf5a3a4c4(comparer, value, min, max) {
    return comparer(value, min) < 0 ? min : comparer(value, max) > 0 ? max : value;
}
function $4261fbb19e0b4aac$export$2e17fe64ec9a826e(value1) {
    let atom = value1;
    return (value, isSetter)=>{
        if (!isSetter) return atom;
        else {
            atom = value;
            return void 0;
        }
    };
}
function $4261fbb19e0b4aac$export$ad1552835d16e4ca(fields) {
    const obj = {
    };
    for (const kv of fields)obj[kv[0]] = kv[1];
    return obj;
}
function $4261fbb19e0b4aac$export$abe6afec815e60a8(mutator) {
    const opts = {
    };
    mutator(opts);
    return opts;
}
function $4261fbb19e0b4aac$export$2077e0241d6afd3c(value, digits = 0) {
    const m = Math.pow(10, digits);
    const n = +(digits ? value * m : value).toFixed(8);
    const i = Math.floor(n);
    const f = n - i;
    const e = 0.00000001;
    const r = f > 0.5 - e && f < 0.5 + e ? i % 2 === 0 ? i : i + 1 : Math.round(n);
    return digits ? r / m : r;
}
function $4261fbb19e0b4aac$export$c5552dfdbc7cec71(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
}
function $4261fbb19e0b4aac$export$c9f44f6b6738bb00(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function $4261fbb19e0b4aac$export$5f828d93ff035aa8(buffer) {
    if (buffer == null) throw new Error("Buffer cannot be null");
    for(let i = 0; i < buffer.length; i += 6){
        // Pick random 48-bit number. Fill buffer in 2 24-bit chunks to avoid bitwise truncation.
        let r = Math.floor(Math.random() * 281474976710656); // Low 24 bits = chunk 1.
        const rhi = Math.floor(r / 16777216); // High 24 bits shifted via division = chunk 2.
        for(let j = 0; j < 6 && i + j < buffer.length; j++){
            if (j === 3) r = rhi;
            buffer[i + j] = r & 255;
            r >>>= 8;
        }
    }
}
function $4261fbb19e0b4aac$export$4aad32b45f511863(s) {
    // https://stackoverflow.com/a/4458580/524236
    return decodeURIComponent(s.replace(/\+/g, "%20"));
}
function $4261fbb19e0b4aac$export$c6a168a6353a7fe6(s) {
    return encodeURIComponent(s).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
}
function $4261fbb19e0b4aac$export$a793387c99636443(s) {
    return encodeURI(s);
}
function $4261fbb19e0b4aac$export$85b9a36db797e02b(col) {
    if ($4261fbb19e0b4aac$export$1e2f57719e155213(col)) return col.length;
    else {
        let count = 0;
        for (const _ of col)count++;
        return count;
    }
}
function $4261fbb19e0b4aac$export$42ffd38884aecdac(col) {
    if ($4261fbb19e0b4aac$export$1e2f57719e155213(col)) col.splice(0);
    else col.clear();
}
const $4261fbb19e0b4aac$var$CURRIED = Symbol("curried");
function $4261fbb19e0b4aac$export$7864d59d01b6d6bf(arity, f) {
    // f may be a function option with None value
    if (f == null || f.length > 1) return f;
    const uncurried = (...args)=>{
        let res = f;
        for(let i = 0; i < arity; i++)res = res(args[i]);
        return res;
    };
    uncurried[$4261fbb19e0b4aac$var$CURRIED] = f;
    return uncurried;
}
function $4261fbb19e0b4aac$var$_curry(args, arity, f) {
    return (arg)=>arity === 1 ? f(...args.concat([
            arg
        ])) : $4261fbb19e0b4aac$var$_curry(args.concat([
            arg
        ]), arity - 1, f)
    ;
}
function $4261fbb19e0b4aac$export$c3095a23b368d1f2(arity, f) {
    if (f == null || f.length === 1) return f;
    else if ($4261fbb19e0b4aac$var$CURRIED in f) return f[$4261fbb19e0b4aac$var$CURRIED];
    else return $4261fbb19e0b4aac$var$_curry([], arity, f);
}
function $4261fbb19e0b4aac$export$f09417b7b47dae29(arity, f) {
    return f.length > arity ? (...args1)=>(...args2)=>f.apply(undefined, args1.concat(args2))
     : f;
}
function $4261fbb19e0b4aac$export$955fe82a9145db62(arity, f, args) {
    if (f == null) return undefined;
    else if ($4261fbb19e0b4aac$var$CURRIED in f) {
        f = f[$4261fbb19e0b4aac$var$CURRIED];
        for(let i = 0; i < args.length; i++)f = f(args[i]);
        return f;
    } else return $4261fbb19e0b4aac$var$_curry(args, arity, f);
}
function $4261fbb19e0b4aac$export$880b1e43568f4c50(fn1, mappings1) {
    function mapArg(fn, arg1, mappings, idx) {
        const mapping = mappings[idx];
        if (mapping !== 0) {
            const expectedArity = mapping[0];
            const actualArity = mapping[1];
            if (expectedArity > 1) arg1 = $4261fbb19e0b4aac$export$c3095a23b368d1f2(expectedArity, arg1);
            if (actualArity > 1) arg1 = $4261fbb19e0b4aac$export$7864d59d01b6d6bf(actualArity, arg1);
        }
        const res = fn(arg1);
        if (idx + 1 === mappings.length) return res;
        else return (arg)=>mapArg(res, arg, mappings, idx + 1)
        ;
    }
    return (arg)=>mapArg(fn1, arg, mappings1, 0)
    ;
}


function $52d096336d1d74e9$export$67548df8c961d303(self) {
    let count = 0;
    let str = "[";
    for (const x of self){
        if (count === 0) str += $52d096336d1d74e9$export$f84e8e69fd4488a5(x);
        else if (count === 100) {
            str += "; ...";
            break;
        } else str += "; " + $52d096336d1d74e9$export$f84e8e69fd4488a5(x);
        count++;
    }
    return str + "]";
}
function $52d096336d1d74e9$export$f84e8e69fd4488a5(x, callStack = 0) {
    if (x != null && typeof x === "object") {
        if (typeof x.toString === "function") return x.toString();
        else if (Symbol.iterator in x) return $52d096336d1d74e9$export$67548df8c961d303(x);
        else {
            const cons = Object.getPrototypeOf(x).constructor;
            return cons === Object && callStack < 10 ? "{ " + Object.entries(x).map(([k, v])=>k + " = " + $52d096336d1d74e9$export$f84e8e69fd4488a5(v, callStack + 1)
            ).join("\n  ") + " }" : cons.name;
        }
    }
    return String(x);
}
function $52d096336d1d74e9$export$19c5b35f73b7bbbc(name, fields) {
    if (fields.length === 0) return name;
    else {
        let fieldStr = "";
        let withParens = true;
        if (fields.length === 1) {
            fieldStr = $52d096336d1d74e9$export$f84e8e69fd4488a5(fields[0]);
            withParens = fieldStr.indexOf(" ") >= 0;
        } else fieldStr = fields.map((x)=>$52d096336d1d74e9$export$f84e8e69fd4488a5(x)
        ).join(", ");
        return name + (withParens ? " (" : " ") + fieldStr + (withParens ? ")" : "");
    }
}
class $52d096336d1d74e9$export$6cbb4f8fa0c4c986 {
    get name() {
        return this.cases()[this.tag];
    }
    toJSON() {
        return this.fields.length === 0 ? this.name : [
            this.name
        ].concat(this.fields);
    }
    toString() {
        return $52d096336d1d74e9$export$19c5b35f73b7bbbc(this.name, this.fields);
    }
    GetHashCode() {
        const hashes = this.fields.map((x)=>$4261fbb19e0b4aac$export$2e619f11ca48bee4(x)
        );
        hashes.splice(0, 0, $4261fbb19e0b4aac$export$a9844eb73de0a218(this.tag));
        return $4261fbb19e0b4aac$export$4a6567c520a28ea3(hashes);
    }
    Equals(other2) {
        if (this === other2) return true;
        else if (!$4261fbb19e0b4aac$export$52febab2880147bb(this, other2)) return false;
        else if (this.tag === other2.tag) return $4261fbb19e0b4aac$export$dc63f52ecf814bf8(this.fields, other2.fields);
        else return false;
    }
    CompareTo(other1) {
        if (this === other1) return 0;
        else if (!$4261fbb19e0b4aac$export$52febab2880147bb(this, other1)) return -1;
        else if (this.tag === other1.tag) return $4261fbb19e0b4aac$export$fc16749c794bf6ff(this.fields, other1.fields);
        else return this.tag < other1.tag ? -1 : 1;
    }
}
function $52d096336d1d74e9$var$recordToJSON(self) {
    const o = {
    };
    const keys = Object.keys(self);
    for(let i = 0; i < keys.length; i++)o[keys[i]] = self[keys[i]];
    return o;
}
function $52d096336d1d74e9$var$recordToString(self) {
    return "{ " + Object.entries(self).map(([k, v])=>k + " = " + $52d096336d1d74e9$export$f84e8e69fd4488a5(v)
    ).join("\n  ") + " }";
}
function $52d096336d1d74e9$var$recordGetHashCode(self) {
    const hashes = Object.values(self).map((v)=>$4261fbb19e0b4aac$export$2e619f11ca48bee4(v)
    );
    return $4261fbb19e0b4aac$export$4a6567c520a28ea3(hashes);
}
function $52d096336d1d74e9$var$recordEquals(self, other) {
    if (self === other) return true;
    else if (!$4261fbb19e0b4aac$export$52febab2880147bb(self, other)) return false;
    else {
        const thisNames = Object.keys(self);
        for(let i = 0; i < thisNames.length; i++){
            if (!$4261fbb19e0b4aac$export$e9bab7fafb253603(self[thisNames[i]], other[thisNames[i]])) return false;
        }
        return true;
    }
}
function $52d096336d1d74e9$var$recordCompareTo(self, other) {
    if (self === other) return 0;
    else if (!$4261fbb19e0b4aac$export$52febab2880147bb(self, other)) return -1;
    else {
        const thisNames = Object.keys(self);
        for(let i = 0; i < thisNames.length; i++){
            const result = $4261fbb19e0b4aac$export$398604a469f7de9a(self[thisNames[i]], other[thisNames[i]]);
            if (result !== 0) return result;
        }
        return 0;
    }
}
class $52d096336d1d74e9$export$5b163c6d120341e7 {
    toJSON() {
        return $52d096336d1d74e9$var$recordToJSON(this);
    }
    toString() {
        return $52d096336d1d74e9$var$recordToString(this);
    }
    GetHashCode() {
        return $52d096336d1d74e9$var$recordGetHashCode(this);
    }
    Equals(other) {
        return $52d096336d1d74e9$var$recordEquals(this, other);
    }
    CompareTo(other3) {
        return $52d096336d1d74e9$var$recordCompareTo(this, other3);
    }
}
class $52d096336d1d74e9$export$be150d1a3c7e94fe {
    constructor(contentsOrGetter, setter){
        if (typeof setter === "function") {
            this.getter = contentsOrGetter;
            this.setter = setter;
        } else {
            this.getter = ()=>contentsOrGetter
            ;
            this.setter = (v)=>{
                contentsOrGetter = v;
            };
        }
    }
    get contents() {
        return this.getter();
    }
    set contents(v) {
        this.setter(v);
    }
}
class $52d096336d1d74e9$export$e2f174de097e0bcd {
    constructor(message){
        this.message = message;
    }
}
function $52d096336d1d74e9$export$40f07171f4b6ee01(x) {
    return x instanceof $52d096336d1d74e9$export$e2f174de097e0bcd || x instanceof Error;
}
class $52d096336d1d74e9$export$bf6d26922abbea07 extends $52d096336d1d74e9$export$e2f174de097e0bcd {
    toJSON() {
        return $52d096336d1d74e9$var$recordToJSON(this);
    }
    toString() {
        return $52d096336d1d74e9$var$recordToString(this);
    }
    GetHashCode() {
        return $52d096336d1d74e9$var$recordGetHashCode(this);
    }
    Equals(other4) {
        return $52d096336d1d74e9$var$recordEquals(this, other4);
    }
    CompareTo(other5) {
        return $52d096336d1d74e9$var$recordCompareTo(this, other5);
    }
}
class $52d096336d1d74e9$export$56fde45cb633adea extends $52d096336d1d74e9$export$bf6d26922abbea07 {
    constructor(arg1, arg2, arg3){
        super();
        this.arg1 = arg1;
        this.arg2 = arg2 | 0;
        this.arg3 = arg3 | 0;
        this.message = "The match cases were incomplete";
    }
}
class $52d096336d1d74e9$export$ab9c25261cd8c720 {
}





const $6997ebb8332b0ba8$export$8f701197936bc2a6 = Symbol("numeric");
function $6997ebb8332b0ba8$export$e90fb89750dba83f(x) {
    return typeof x === "number" || (x === null || x === void 0 ? void 0 : x[$6997ebb8332b0ba8$export$8f701197936bc2a6]);
}
function $6997ebb8332b0ba8$export$398604a469f7de9a(x, y) {
    if (typeof x === "number") return x < y ? -1 : x > y ? 1 : 0;
    else return x.CompareTo(y);
}
function $6997ebb8332b0ba8$export$2060d2db72cce88f(x, y) {
    if (typeof x === "number") return x * y;
    else return x[$6997ebb8332b0ba8$export$8f701197936bc2a6]().multiply(y);
}
function $6997ebb8332b0ba8$export$a81f732198733497(x, dp) {
    if (typeof x === "number") return x.toFixed(dp);
    else return x[$6997ebb8332b0ba8$export$8f701197936bc2a6]().toFixed(dp);
}
function $6997ebb8332b0ba8$export$3e91a10e66078270(x, sd) {
    if (typeof x === "number") return x.toPrecision(sd);
    else return x[$6997ebb8332b0ba8$export$8f701197936bc2a6]().toPrecision(sd);
}
function $6997ebb8332b0ba8$export$888cb08ddc4765be(x, dp) {
    if (typeof x === "number") return x.toExponential(dp);
    else return x[$6997ebb8332b0ba8$export$8f701197936bc2a6]().toExponential(dp);
}
function $6997ebb8332b0ba8$export$7ea66e3774a60b67(x) {
    if (typeof x === "number") return (Number(x) >>> 0).toString(16);
    else return x[$6997ebb8332b0ba8$export$8f701197936bc2a6]().toHex();
}


// The shared prototype object.
var $17d45351cea175bf$var$P = {
    GetHashCode () {
        return $4261fbb19e0b4aac$export$4a6567c520a28ea3([
            this.s,
            this.e
        ].concat(this.c));
    },
    Equals (x) {
        return !this.cmp(x);
    },
    CompareTo (x) {
        return this.cmp(x);
    },
    [$6997ebb8332b0ba8$export$8f701197936bc2a6] () {
        const _this = this;
        return {
            multiply: (y)=>_this.mul(y)
            ,
            toPrecision: (sd)=>_this.toPrecision(sd)
            ,
            toExponential: (dp)=>_this.toExponential(dp)
            ,
            toFixed: (dp)=>_this.toFixed(dp)
            ,
            toHex: ()=>(Number(_this) >>> 0).toString(16)
        };
    }
};
/*
 *  big.js v6.0.3
 *  A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic.
 *  Copyright (c) 2020 Michael Mclaughlin
 *  https://github.com/MikeMcl/big.js/LICENCE.md
 */ /************************************** EDITABLE DEFAULTS *****************************************/ // The default values below must be integers within the stated ranges.
/*
 * The maximum number of decimal places (DP) of the results of operations involving division:
 * div and sqrt, and pow with negative exponents.
 */ var $17d45351cea175bf$var$DP = 28, /*
 * The rounding mode (RM) used when rounding to the above decimal places.
 *
 *  0  Towards zero (i.e. truncate, no rounding).       (ROUND_DOWN)
 *  1  To nearest neighbour. If equidistant, round up.  (ROUND_HALF_UP)
 *  2  To nearest neighbour. If equidistant, to even.   (ROUND_HALF_EVEN)
 *  3  Away from zero.                                  (ROUND_UP)
 */ $17d45351cea175bf$var$RM = 1, // The maximum value of DP and Big.DP.
$17d45351cea175bf$var$MAX_DP = 1000000, // The maximum magnitude of the exponent argument to the pow method.
$17d45351cea175bf$var$MAX_POWER = 1000000, /*
 * The negative exponent (NE) at and beneath which toString returns exponential notation.
 * (JavaScript numbers: -7)
 * -1000000 is the minimum recommended exponent value of a Big.
 */ $17d45351cea175bf$var$NE = -29, /*
 * The positive exponent (PE) at and above which toString returns exponential notation.
 * (JavaScript numbers: 21)
 * 1000000 is the maximum recommended exponent value of a Big, but this limit is not enforced.
 */ $17d45351cea175bf$var$PE = 29, /*
 * When true, an error will be thrown if a primitive number is passed to the Big constructor,
 * or if valueOf is called, or if toNumber is called on a Big which cannot be converted to a
 * primitive number without a loss of precision.
 */ $17d45351cea175bf$var$STRICT = false, /**************************************************************************************************/ // Error messages.
$17d45351cea175bf$var$NAME = '[big.js] ', $17d45351cea175bf$var$INVALID = $17d45351cea175bf$var$NAME + 'Invalid ', $17d45351cea175bf$var$INVALID_DP = $17d45351cea175bf$var$INVALID + 'decimal places', $17d45351cea175bf$var$INVALID_RM = $17d45351cea175bf$var$INVALID + 'rounding mode', $17d45351cea175bf$var$DIV_BY_ZERO = $17d45351cea175bf$var$NAME + 'Division by zero', $17d45351cea175bf$var$UNDEFINED = void 0, $17d45351cea175bf$var$NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
/*
 * Create and return a Big constructor.
 */ function $17d45351cea175bf$var$_Big_() {
    /*
     * The Big constructor and exported function.
     * Create and return a new instance of a Big number object.
     *
     * n {number|string|Big} A numeric value.
     */ function Big(n) {
        var x = this;
        // Enable constructor usage without new.
        if (!(x instanceof Big)) return n === $17d45351cea175bf$var$UNDEFINED ? $17d45351cea175bf$var$_Big_() : new Big(n);
        // Duplicate.
        if (n instanceof Big) {
            x.s = n.s;
            x.e = n.e;
            x.c = n.c.slice();
            $17d45351cea175bf$var$normalize(x);
        } else {
            if (typeof n !== 'string') {
                if (Big.strict === true) throw TypeError($17d45351cea175bf$var$INVALID + 'number');
                // Minus zero?
                n = n === 0 && 1 / n < 0 ? '-0' : String(n);
            }
            $17d45351cea175bf$var$parse(x, n);
        }
        // Retain a reference to this Big constructor.
        // Shadow Big.prototype.constructor which points to Object.
        x.constructor = Big;
    }
    Big.prototype = $17d45351cea175bf$var$P;
    Big.DP = $17d45351cea175bf$var$DP;
    Big.RM = $17d45351cea175bf$var$RM;
    Big.NE = $17d45351cea175bf$var$NE;
    Big.PE = $17d45351cea175bf$var$PE;
    Big.strict = $17d45351cea175bf$var$STRICT;
    return Big;
}
function $17d45351cea175bf$var$normalize(x1) {
    // x = round(x, DP, 0);
    if (x1.c.length > 1 && !x1.c[0]) {
        let i = x1.c.findIndex((x)=>x
        );
        x1.c = x1.c.slice(i);
        x1.e = x1.e - i;
    }
}
/*
 * Parse the number or string value passed to a Big constructor.
 *
 * x {Big} A Big number instance.
 * n {number|string} A numeric value.
 */ function $17d45351cea175bf$var$parse(x, n) {
    var e, i, nl;
    if (!$17d45351cea175bf$var$NUMERIC.test(n)) throw Error($17d45351cea175bf$var$INVALID + 'number');
    // Determine sign.
    x.s = n.charAt(0) == '-' ? (n = n.slice(1), -1) : 1;
    // Decimal point?
    if ((e = n.indexOf('.')) > -1) n = n.replace('.', '');
    // Exponential form?
    if ((i = n.search(/e/i)) > 0) {
        // Determine exponent.
        if (e < 0) e = i;
        e += +n.slice(i + 1);
        n = n.substring(0, i);
    } else if (e < 0) // Integer.
    e = n.length;
    nl = n.length;
    // Determine leading zeros before decimal point.
    for(i = 0; i < e && i < nl && n.charAt(i) == '0';)++i;
    // original version (ignores decimal point).
    // // Determine leading zeros.
    // for (i = 0; i < nl && n.charAt(i) == '0';) ++i;
    if (i == nl) // Zero.
    x.c = [
        x.e = 0
    ];
    else {
        x.e = e - i - 1;
        x.c = [];
        // Convert string to array of digits without leading zeros
        for(e = 0; i < nl;)x.c[e++] = +n.charAt(i++);
    // older version (doesn't keep trailing zeroes).
    // // Determine trailing zeros.
    // for (; nl > 0 && n.charAt(--nl) == '0';);
    // // Convert string to array of digits without leading/trailing zeros.
    // for (e = 0; i <= nl;) x.c[e++] = +n.charAt(i++);
    }
    x = $17d45351cea175bf$var$round(x, $17d45351cea175bf$export$721faf8597f6f672.DP + 1, $17d45351cea175bf$export$721faf8597f6f672.RM);
    return x;
}
/*
 * Round Big x to a maximum of sd significant digits using rounding mode rm.
 *
 * x {Big} The Big to round.
 * sd {number} Significant digits: integer, 0 to MAX_DP inclusive.
 * rm {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 * [more] {boolean} Whether the result of division was truncated.
 */ function $17d45351cea175bf$var$round(x, sd, rm, more) {
    var xc = x.c;
    if (rm === $17d45351cea175bf$var$UNDEFINED) rm = $17d45351cea175bf$export$721faf8597f6f672.RM;
    if (rm !== 0 && rm !== 1 && rm !== 2 && rm !== 3) throw Error($17d45351cea175bf$var$INVALID_RM);
    if (sd < 1) {
        more = rm === 3 && (more || !!xc[0]) || sd === 0 && (rm === 1 && xc[0] >= 5 || rm === 2 && (xc[0] > 5 || xc[0] === 5 && (more || xc[1] !== $17d45351cea175bf$var$UNDEFINED)));
        xc.length = 1;
        if (more) {
            // 1, 0.1, 0.01, 0.001, 0.0001 etc.
            x.e = x.e - sd + 1;
            xc[0] = 1;
        } else // Zero.
        xc[0] = x.e = 0;
    } else if (sd < xc.length) {
        // xc[sd] is the digit after the digit that may be rounded up.
        const isZero = xc.findIndex((xci, idx)=>idx >= sd && xci > 0
        ) < 0;
        more = rm === 1 && xc[sd] >= 5 || rm === 2 && (xc[sd] > 5 || xc[sd] === 5 && (more || xc[sd + 1] !== $17d45351cea175bf$var$UNDEFINED || xc[sd - 1] & 1)) || rm === 3 && (more || !isZero);
        // Remove any digits after the required precision.
        xc.length = sd--;
        // Round up?
        if (more) // Rounding up may mean the previous digit has to be rounded up.
        for(; ++xc[sd] > 9;){
            xc[sd] = 0;
            if (!sd--) {
                ++x.e;
                xc.unshift(1);
            }
        }
        // Remove trailing zeros.
        for(sd = xc.length; !xc[--sd];)xc.pop();
    }
    return x;
}
/*
 * Return a string representing the value of Big x in normal or exponential notation.
 * Handles P.toExponential, P.toFixed, P.toJSON, P.toPrecision, P.toString and P.valueOf.
 */ function $17d45351cea175bf$var$stringify(x, doExponential, isNonzero) {
    var e = x.e, s = x.c.join(''), n = s.length;
    // Exponential notation?
    if (doExponential) s = s.charAt(0) + (n > 1 ? '.' + s.slice(1) : '') + (e < 0 ? 'e' : 'e+') + e;
    else if (e < 0) {
        for(; ++e;)s = '0' + s;
        s = '0.' + s;
    } else if (e > 0) {
        if (++e > n) for(e -= n; e--;)s += '0';
        else if (e < n) s = s.slice(0, e) + '.' + s.slice(e);
    } else if (n > 1) s = s.charAt(0) + '.' + s.slice(1);
    return x.s < 0 && isNonzero ? '-' + s : s;
}
// Prototype/instance methods
/*
 * Return a new Big whose value is the absolute value of this Big.
 */ $17d45351cea175bf$var$P.abs = function() {
    var x = new this.constructor(this);
    x.s = 1;
    return x;
};
/*
 * Return 1 if the value of this Big is greater than the value of Big y,
 *       -1 if the value of this Big is less than the value of Big y, or
 *        0 if they have the same value.
 */ $17d45351cea175bf$var$P.cmp = function(y) {
    var isneg, Big = this.constructor, x = new Big(this), y = new Big(y), xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
    // Either zero?
    if (!xc[0] || !yc[0]) return !xc[0] ? !yc[0] ? 0 : -j : i;
    // Signs differ?
    if (i != j) return i;
    isneg = i < 0;
    // Compare exponents.
    if (k != l) return k > l ^ isneg ? 1 : -1;
    // Compare digit by digit.
    j = Math.max(xc.length, yc.length);
    for(i = 0; i < j; i++){
        k = i < xc.length ? xc[i] : 0;
        l = i < yc.length ? yc[i] : 0;
        if (k != l) return k > l ^ isneg ? 1 : -1;
    }
    return 0;
// original version (doesn't compare well trailing zeroes, e.g. 1.0 with 1.00)
// j = (k = xc.length) < (l = yc.length) ? k : l;
// // Compare digit by digit.
// for (i = -1; ++i < j;) {
//   if (xc[i] != yc[i]) return xc[i] > yc[i] ^ isneg ? 1 : -1;
// }
// // Compare lengths.
// return k == l ? 0 : k > l ^ isneg ? 1 : -1;
};
/*
 * Return a new Big whose value is the value of this Big divided by the value of Big y, rounded,
 * if necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */ $17d45351cea175bf$var$P.div = function(y) {
    var Big = this.constructor, x = new Big(this), y = new Big(y), a = x.c, b = y.c, k = x.s == y.s ? 1 : -1, dp = Big.DP;
    if (dp !== ~~dp || dp < 0 || dp > $17d45351cea175bf$var$MAX_DP) throw Error($17d45351cea175bf$var$INVALID_DP);
    // Divisor is zero?
    if (!b[0]) throw Error($17d45351cea175bf$var$DIV_BY_ZERO);
    // Dividend is 0? Return +-0.
    if (!a[0]) {
        y.s = k;
        y.c = [
            y.e = 0
        ];
        return y;
    }
    var bl, bt, n, cmp, ri, bz = b.slice(), ai = bl = b.length, al = a.length, r = a.slice(0, bl), rl = r.length, q = y, qc = q.c = [], qi = 0, p = dp + (q.e = x.e - y.e) + 1; // precision of the result
    q.s = k;
    k = p < 0 ? 0 : p;
    // Create version of divisor with leading zero.
    bz.unshift(0);
    // Add zeros to make remainder as long as divisor.
    for(; (rl++) < bl;)r.push(0);
    do {
        // n is how many times the divisor goes into current remainder.
        for(n = 0; n < 10; n++){
            // Compare divisor and remainder.
            if (bl != (rl = r.length)) cmp = bl > rl ? 1 : -1;
            else {
                for(ri = -1, cmp = 0; ++ri < bl;)if (b[ri] != r[ri]) {
                    cmp = b[ri] > r[ri] ? 1 : -1;
                    break;
                }
            }
            // If divisor < remainder, subtract divisor from remainder.
            if (cmp < 0) {
                // Remainder can't be more than 1 digit longer than divisor.
                // Equalise lengths using divisor with extra leading zero?
                for(bt = rl == bl ? b : bz; rl;){
                    if (r[--rl] < bt[rl]) {
                        ri = rl;
                        for(; ri && !r[--ri];)r[ri] = 9;
                        --r[ri];
                        r[rl] += 10;
                    }
                    r[rl] -= bt[rl];
                }
                for(; !r[0];)r.shift();
            } else break;
        }
        // Add the digit n to the result array.
        qc[qi++] = cmp ? n : ++n;
        // Update the remainder.
        if (r[0] && cmp) r[rl] = a[ai] || 0;
        else r = [
            a[ai]
        ];
    }while (((ai++) < al || r[0] !== $17d45351cea175bf$var$UNDEFINED) && k--)
    // Leading zero? Do not remove if result is simply zero (qi == 1).
    if (!qc[0] && qi != 1) {
        // There can't be more than one zero.
        qc.shift();
        q.e--;
        p--;
    }
    // Round?
    if (qi > p) $17d45351cea175bf$var$round(q, p, Big.RM, r[0] !== $17d45351cea175bf$var$UNDEFINED);
    return q;
};
/*
 * Return true if the value of this Big is equal to the value of Big y, otherwise return false.
 */ $17d45351cea175bf$var$P.eq = function(y) {
    return this.cmp(y) === 0;
};
/*
 * Return true if the value of this Big is greater than the value of Big y, otherwise return
 * false.
 */ $17d45351cea175bf$var$P.gt = function(y) {
    return this.cmp(y) > 0;
};
/*
 * Return true if the value of this Big is greater than or equal to the value of Big y, otherwise
 * return false.
 */ $17d45351cea175bf$var$P.gte = function(y) {
    return this.cmp(y) > -1;
};
/*
 * Return true if the value of this Big is less than the value of Big y, otherwise return false.
 */ $17d45351cea175bf$var$P.lt = function(y) {
    return this.cmp(y) < 0;
};
/*
 * Return true if the value of this Big is less than or equal to the value of Big y, otherwise
 * return false.
 */ $17d45351cea175bf$var$P.lte = function(y) {
    return this.cmp(y) < 1;
};
/*
 * Return a new Big whose value is the value of this Big minus the value of Big y.
 */ $17d45351cea175bf$var$P.minus = $17d45351cea175bf$var$P.sub = function(y) {
    var i, j, t, xlty, Big = this.constructor, x = new Big(this), y = new Big(y), a = x.s, b = y.s;
    // Signs differ?
    if (a != b) {
        y.s = -b;
        return x.plus(y);
    }
    var xc = x.c.slice(), xe = x.e, yc = y.c, ye = y.e;
    // Either zero?
    if (!xc[0] || !yc[0]) {
        if (yc[0]) y.s = -b;
        else if (xc[0]) y = new Big(x);
        else y.s = 1;
        return y;
    }
    // Determine which is the bigger number. Prepend zeros to equalise exponents.
    if (a = xe - ye) {
        if (xlty = a < 0) {
            a = -a;
            t = xc;
        } else {
            ye = xe;
            t = yc;
        }
        t.reverse();
        for(b = a; b--;)t.push(0);
        t.reverse();
    } else {
        // Exponents equal. Check digit by digit.
        j = ((xlty = xc.length < yc.length) ? xc : yc).length;
        for(a = b = 0; b < j; b++)if (xc[b] != yc[b]) {
            xlty = xc[b] < yc[b];
            break;
        }
    }
    // x < y? Point xc to the array of the bigger number.
    if (xlty) {
        t = xc;
        xc = yc;
        yc = t;
        y.s = -y.s;
    }
    /*
     * Append zeros to xc if shorter. No need to add zeros to yc if shorter as subtraction only
     * needs to start at yc.length.
     */ if ((b = (j = yc.length) - (i = xc.length)) > 0) for(; b--;)xc[i++] = 0;
    // Subtract yc from xc.
    for(b = i; j > a;){
        if (xc[--j] < yc[j]) {
            for(i = j; i && !xc[--i];)xc[i] = 9;
            --xc[i];
            xc[j] += 10;
        }
        xc[j] -= yc[j];
    }
    // Remove trailing zeros.
    for(; xc[--b] === 0;)xc.pop();
    // Remove leading zeros and adjust exponent accordingly.
    for(; xc[0] === 0;){
        xc.shift();
        --ye;
    }
    if (!xc[0]) {
        // n - n = +0
        y.s = 1;
        // Result must be zero.
        xc = [
            ye = 0
        ];
    }
    y.c = xc;
    y.e = ye;
    return y;
};
/*
 * Return a new Big whose value is the value of this Big modulo the value of Big y.
 */ $17d45351cea175bf$var$P.mod = function(y) {
    var ygtx, Big = this.constructor, x = new Big(this), y = new Big(y), a = x.s, b = y.s;
    if (!y.c[0]) throw Error($17d45351cea175bf$var$DIV_BY_ZERO);
    x.s = y.s = 1;
    ygtx = y.cmp(x) == 1;
    x.s = a;
    y.s = b;
    if (ygtx) return new Big(x);
    a = Big.DP;
    b = Big.RM;
    Big.DP = Big.RM = 0;
    x = x.div(y);
    Big.DP = a;
    Big.RM = b;
    return this.minus(x.times(y));
};
/*
 * Return a new Big whose value is the value of this Big plus the value of Big y.
 */ $17d45351cea175bf$var$P.plus = $17d45351cea175bf$var$P.add = function(y) {
    var e, k, t, Big = this.constructor, x = new Big(this), y = new Big(y);
    // Signs differ?
    if (x.s != y.s) {
        y.s = -y.s;
        return x.minus(y);
    }
    var xe = x.e, xc = x.c, ye = y.e, yc = y.c;
    // Either zero?
    if (!xc[0] || !yc[0]) {
        if (!yc[0]) {
            if (xc[0]) y = new Big(x);
            else y.s = x.s;
        }
        return y;
    }
    xc = xc.slice();
    // Prepend zeros to equalise exponents.
    // Note: reverse faster than unshifts.
    if (e = xe - ye) {
        if (e > 0) {
            ye = xe;
            t = yc;
        } else {
            e = -e;
            t = xc;
        }
        t.reverse();
        for(; e--;)t.push(0);
        t.reverse();
    }
    // Point xc to the longer array.
    if (xc.length - yc.length < 0) {
        t = yc;
        yc = xc;
        xc = t;
    }
    e = yc.length;
    // Only start adding at yc.length - 1 as the further digits of xc can be left as they are.
    for(k = 0; e; xc[e] %= 10)k = (xc[--e] = xc[e] + yc[e] + k) / 10 | 0;
    // No need to check for zero, as +x + +y != 0 && -x + -y != 0
    if (k) {
        xc.unshift(k);
        ++ye;
    }
    // Remove trailing zeros.
    for(e = xc.length; xc[--e] === 0;)xc.pop();
    y.c = xc;
    y.e = ye;
    return y;
};
/*
 * Return a Big whose value is the value of this Big raised to the power n.
 * If n is negative, round to a maximum of Big.DP decimal places using rounding
 * mode Big.RM.
 *
 * n {number} Integer, -MAX_POWER to MAX_POWER inclusive.
 */ $17d45351cea175bf$var$P.pow = function(n) {
    var Big = this.constructor, x = new Big(this), y = new Big('1'), one = new Big('1'), isneg = n < 0;
    if (n !== ~~n || n < -$17d45351cea175bf$var$MAX_POWER || n > $17d45351cea175bf$var$MAX_POWER) throw Error($17d45351cea175bf$var$INVALID + 'exponent');
    if (isneg) n = -n;
    for(;;){
        if (n & 1) y = y.times(x);
        n >>= 1;
        if (!n) break;
        x = x.times(x);
    }
    return isneg ? one.div(y) : y;
};
/*
 * Return a new Big whose value is the value of this Big rounded to a maximum precision of sd
 * significant digits using rounding mode rm, or Big.RM if rm is not specified.
 *
 * sd {number} Significant digits: integer, 1 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */ $17d45351cea175bf$var$P.prec = function(sd, rm) {
    if (sd !== ~~sd || sd < 1 || sd > $17d45351cea175bf$var$MAX_DP) throw Error($17d45351cea175bf$var$INVALID + 'precision');
    return $17d45351cea175bf$var$round(new this.constructor(this), sd, rm);
};
/*
 * Return a new Big whose value is the value of this Big rounded to a maximum of dp decimal places
 * using rounding mode rm, or Big.RM if rm is not specified.
 * If dp is negative, round to an integer which is a multiple of 10**-dp.
 * If dp is not specified, round to 0 decimal places.
 *
 * dp? {number} Integer, -MAX_DP to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */ $17d45351cea175bf$var$P.round = function(dp, rm) {
    if (dp === $17d45351cea175bf$var$UNDEFINED) dp = 0;
    else if (dp !== ~~dp || dp < -$17d45351cea175bf$var$MAX_DP || dp > $17d45351cea175bf$var$MAX_DP) throw Error($17d45351cea175bf$var$INVALID_DP);
    return $17d45351cea175bf$var$round(new this.constructor(this), dp + this.e + 1, rm);
};
/*
 * Return a new Big whose value is the square root of the value of this Big, rounded, if
 * necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */ $17d45351cea175bf$var$P.sqrt = function() {
    var r, c, t, Big = this.constructor, x = new Big(this), s = x.s, e = x.e, half = new Big('0.5');
    // Zero?
    if (!x.c[0]) return new Big(x);
    // Negative?
    if (s < 0) throw Error($17d45351cea175bf$var$NAME + 'No square root');
    // Estimate.
    s = Math.sqrt(x + '');
    // Math.sqrt underflow/overflow?
    // Re-estimate: pass x coefficient to Math.sqrt as integer, then adjust the result exponent.
    if (s === 0 || s === 1 / 0) {
        c = x.c.join('');
        if (!(c.length + e & 1)) c += '0';
        s = Math.sqrt(c);
        e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
        r = new Big((s == 1 / 0 ? '5e' : (s = s.toExponential()).slice(0, s.indexOf('e') + 1)) + e);
    } else r = new Big(s + '');
    e = r.e + (Big.DP += 4);
    // Newton-Raphson iteration.
    do {
        t = r;
        r = half.times(t.plus(x.div(t)));
    }while (t.c.slice(0, e).join('') !== r.c.slice(0, e).join(''))
    return $17d45351cea175bf$var$round(r, (Big.DP -= 4) + r.e + 1, Big.RM);
};
/*
 * Return a new Big whose value is the value of this Big times the value of Big y.
 */ $17d45351cea175bf$var$P.times = $17d45351cea175bf$var$P.mul = function(y) {
    var c, Big = this.constructor, x = new Big(this), y = new Big(y), xc = x.c, yc = y.c, a = xc.length, b = yc.length, i = x.e, j = y.e;
    // Determine sign of result.
    y.s = x.s == y.s ? 1 : -1;
    // Return signed 0 if either 0.
    if (!xc[0] || !yc[0]) {
        y.c = [
            y.e = 0
        ];
        return y;
    }
    // Initialise exponent of result as x.e + y.e.
    y.e = i + j;
    // If array xc has fewer digits than yc, swap xc and yc, and lengths.
    if (a < b) {
        c = xc;
        xc = yc;
        yc = c;
        j = a;
        a = b;
        b = j;
    }
    // Initialise coefficient array of result with zeros.
    for(c = new Array(j = a + b); j--;)c[j] = 0;
    // Multiply.
    // i is initially xc.length.
    for(i = b; i--;){
        b = 0;
        // a is yc.length.
        for(j = a + i; j > i;){
            // Current sum of products at this digit position, plus carry.
            b = c[j] + yc[i] * xc[j - i - 1] + b;
            c[j--] = b % 10;
            // carry
            b = b / 10 | 0;
        }
        c[j] = b;
    }
    // Increment result exponent if there is a final carry, otherwise remove leading zero.
    if (b) ++y.e;
    else c.shift();
    // Remove trailing zeros.
    for(i = c.length; !c[--i];)c.pop();
    y.c = c;
    return y;
};
/*
 * Return a string representing the value of this Big in exponential notation rounded to dp fixed
 * decimal places using rounding mode rm, or Big.RM if rm is not specified.
 *
 * dp? {number} Decimal places: integer, 0 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */ $17d45351cea175bf$var$P.toExponential = function(dp, rm) {
    var x = this, n = x.c[0];
    if (dp !== $17d45351cea175bf$var$UNDEFINED) {
        if (dp !== ~~dp || dp < 0 || dp > $17d45351cea175bf$var$MAX_DP) throw Error($17d45351cea175bf$var$INVALID_DP);
        x = $17d45351cea175bf$var$round(new x.constructor(x), ++dp, rm);
        for(; x.c.length < dp;)x.c.push(0);
    }
    return $17d45351cea175bf$var$stringify(x, true, !!n);
};
/*
 * Return a string representing the value of this Big in normal notation rounded to dp fixed
 * decimal places using rounding mode rm, or Big.RM if rm is not specified.
 *
 * dp? {number} Decimal places: integer, 0 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 *
 * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
 * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
 */ $17d45351cea175bf$var$P.toFixed = function(dp, rm) {
    var x = this, n = x.c[0];
    if (dp !== $17d45351cea175bf$var$UNDEFINED) {
        if (dp !== ~~dp || dp < 0 || dp > $17d45351cea175bf$var$MAX_DP) throw Error($17d45351cea175bf$var$INVALID_DP);
        x = $17d45351cea175bf$var$round(new x.constructor(x), dp + x.e + 1, rm);
        // x.e may have changed if the value is rounded up.
        for(dp = dp + x.e + 1; x.c.length < dp;)x.c.push(0);
    }
    return $17d45351cea175bf$var$stringify(x, false, !!n);
};
/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Omit the sign for negative zero.
 */ $17d45351cea175bf$var$P.toJSON = $17d45351cea175bf$var$P.toString = function() {
    var x = this, Big = x.constructor;
    return $17d45351cea175bf$var$stringify(x, x.e <= Big.NE || x.e >= Big.PE, !!x.c[0]);
};
/*
 * Return the value of this Big as a primitve number.
 */ $17d45351cea175bf$var$P.toNumber = function() {
    var n = Number($17d45351cea175bf$var$stringify(this, true, true));
    if (this.constructor.strict === true && !this.eq(n.toString())) throw Error($17d45351cea175bf$var$NAME + 'Imprecise conversion');
    return n;
};
/*
 * Return a string representing the value of this Big rounded to sd significant digits using
 * rounding mode rm, or Big.RM if rm is not specified.
 * Use exponential notation if sd is less than the number of digits necessary to represent
 * the integer part of the value in normal notation.
 *
 * sd {number} Significant digits: integer, 1 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */ $17d45351cea175bf$var$P.toPrecision = function(sd, rm) {
    var x = this, Big = x.constructor, n = x.c[0];
    if (sd !== $17d45351cea175bf$var$UNDEFINED) {
        if (sd !== ~~sd || sd < 1 || sd > $17d45351cea175bf$var$MAX_DP) throw Error($17d45351cea175bf$var$INVALID + 'precision');
        x = $17d45351cea175bf$var$round(new Big(x), sd, rm);
        for(; x.c.length < sd;)x.c.push(0);
    }
    return $17d45351cea175bf$var$stringify(x, sd <= x.e || x.e <= Big.NE || x.e >= Big.PE, !!n);
};
/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Include the sign for negative zero.
 */ $17d45351cea175bf$var$P.valueOf = function() {
    var x = this, Big = x.constructor;
    if (Big.strict === true) throw Error($17d45351cea175bf$var$NAME + 'valueOf disallowed');
    return $17d45351cea175bf$var$stringify(x, x.e <= Big.NE || x.e >= Big.PE, true);
};
var $17d45351cea175bf$export$721faf8597f6f672 = $17d45351cea175bf$var$_Big_();
var /// <reference types="https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/big.js/index.d.ts" />
$17d45351cea175bf$export$2e2bcd8739ae039 = $17d45351cea175bf$export$721faf8597f6f672;



var $3b91e95f3a4155cf$export$2e2bcd8739ae039 = $17d45351cea175bf$export$2e2bcd8739ae039;
const $3b91e95f3a4155cf$export$1a6223d840786ec0 = new $17d45351cea175bf$export$2e2bcd8739ae039(0);
const $3b91e95f3a4155cf$export$ae43249cd38c8649 = new $17d45351cea175bf$export$2e2bcd8739ae039(1);
const $3b91e95f3a4155cf$export$75e2aaa55d56b95a = new $17d45351cea175bf$export$2e2bcd8739ae039(-1);
const $3b91e95f3a4155cf$export$67edc40118395795 = new $17d45351cea175bf$export$2e2bcd8739ae039("79228162514264337593543950335");
const $3b91e95f3a4155cf$export$8ebb19e07f98fc82 = new $17d45351cea175bf$export$2e2bcd8739ae039("-79228162514264337593543950335");
function $3b91e95f3a4155cf$export$398604a469f7de9a(x, y) {
    return x.cmp(y);
}
function $3b91e95f3a4155cf$export$e9bab7fafb253603(x, y) {
    return !x.cmp(y);
}
function $3b91e95f3a4155cf$export$2335f513bbd82c6d(x) {
    return x.abs();
}
function $3b91e95f3a4155cf$export$2077e0241d6afd3c(x, digits = 0) {
    return x.round(digits, 2 /* ROUND_HALF_EVEN */ );
}
function $3b91e95f3a4155cf$export$6a506b36fdea397d(x) {
    return x.round(0, 0 /* ROUND_DOWN */ );
}
function $3b91e95f3a4155cf$export$1d7d6ea1b95b29ae(x) {
    return x.round(0, x.cmp(0) >= 0 ? 3 /* ROUND_UP */  : 0 /* ROUND_DOWN */ );
}
function $3b91e95f3a4155cf$export$a3fe094919f356fd(x) {
    return x.round(0, x.cmp(0) >= 0 ? 0 /* ROUND_DOWN */  : 3 /* ROUND_UP */ );
}
function $3b91e95f3a4155cf$export$9c297f60e22e3389(x, n) {
    return x.pow(n);
}
function $3b91e95f3a4155cf$export$eba8049fb5020b81(x) {
    return x.sqrt();
}
function $3b91e95f3a4155cf$export$a5fb1fdca49990a(x, y) {
    return x.add(y);
}
function $3b91e95f3a4155cf$export$1ba572a54983744c(x, y) {
    return x.sub(y);
}
function $3b91e95f3a4155cf$export$bef948e98114a357(x, y) {
    return x.mul(y);
}
function $3b91e95f3a4155cf$export$a6e41fbebc04a9a6(x, y) {
    return x.div(y);
}
function $3b91e95f3a4155cf$export$ded19a969d94df2c(x, y) {
    return x.mod(y);
}
function $3b91e95f3a4155cf$export$816012df0c0b827b(x) {
    const x2 = new $17d45351cea175bf$export$2e2bcd8739ae039(x);
    x2.s = -x2.s || 0;
    return x2;
}
const $3b91e95f3a4155cf$export$e16d8520af44a096 = $3b91e95f3a4155cf$export$a5fb1fdca49990a;
const $3b91e95f3a4155cf$export$4e2d2ead65e5f7e3 = $3b91e95f3a4155cf$export$1ba572a54983744c;
const $3b91e95f3a4155cf$export$2060d2db72cce88f = $3b91e95f3a4155cf$export$bef948e98114a357;
const $3b91e95f3a4155cf$export$cd007d971a5a2143 = $3b91e95f3a4155cf$export$a6e41fbebc04a9a6;
const $3b91e95f3a4155cf$export$159037f780d3415c = $3b91e95f3a4155cf$export$ded19a969d94df2c;
const $3b91e95f3a4155cf$export$aef51622e549b8b0 = $3b91e95f3a4155cf$export$816012df0c0b827b;
function $3b91e95f3a4155cf$export$f84e8e69fd4488a5(x) {
    return x.toString();
}
function $3b91e95f3a4155cf$export$468ff95b83d315e5(str, defValue) {
    try {
        defValue.contents = new $17d45351cea175bf$export$2e2bcd8739ae039(str.trim());
        return true;
    } catch (_a) {
        return false;
    }
}
function $3b91e95f3a4155cf$export$98e6a39c04603d36(str) {
    const defValue = new $52d096336d1d74e9$export$be150d1a3c7e94fe($3b91e95f3a4155cf$export$1a6223d840786ec0);
    if ($3b91e95f3a4155cf$export$468ff95b83d315e5(str, defValue)) return defValue.contents;
    else throw new Error("Input string was not in a correct format.");
}
function $3b91e95f3a4155cf$export$a0a81dc3380ce7d3(x) {
    return +x;
}
function $3b91e95f3a4155cf$var$decimalToHex(dec, bitSize) {
    const hex = new Uint8Array(bitSize / 4 | 0);
    let hexCount = 1;
    for(let d = 0; d < dec.length; d++){
        let value = dec[d];
        for(let i = 0; i < hexCount; i++){
            const digit = hex[i] * 10 + value | 0;
            hex[i] = digit & 15;
            value = digit >> 4;
        }
        if (value !== 0) hex[hexCount++] = value;
    }
    return hex.slice(0, hexCount); // digits in reverse order
}
function $3b91e95f3a4155cf$var$hexToDecimal(hex, bitSize) {
    const dec = new Uint8Array(bitSize * 301 / 1000 + 1 | 0);
    let decCount = 1;
    for(let d = hex.length - 1; d >= 0; d--){
        let carry = hex[d];
        for(let i = 0; i < decCount; i++){
            const val = dec[i] * 16 + carry | 0;
            dec[i] = val % 10 | 0;
            carry = val / 10 | 0;
        }
        while(carry > 0){
            dec[decCount++] = carry % 10 | 0;
            carry = carry / 10 | 0;
        }
    }
    return dec.slice(0, decCount); // digits in reverse order
}
function $3b91e95f3a4155cf$var$setInt32Bits(hexDigits, bits, offset) {
    for(let i = 0; i < 8; i++)hexDigits[offset + i] = bits >> i * 4 & 15;
}
function $3b91e95f3a4155cf$var$getInt32Bits(hexDigits, offset) {
    let bits = 0;
    for(let i = 0; i < 8; i++)bits = bits | hexDigits[offset + i] << i * 4;
    return bits;
}
function $3b91e95f3a4155cf$export$a2cc8ea05f36c769(bits) {
    return $3b91e95f3a4155cf$export$6f511d4f8a01d621(bits[0], bits[1], bits[2], bits[3]);
}
function $3b91e95f3a4155cf$export$6f511d4f8a01d621(low, mid, high, signExp) {
    const isNegative = signExp < 0;
    const scale = signExp >> 16 & 127;
    return $3b91e95f3a4155cf$export$4ce09b63b66aecc9(low, mid, high, isNegative, scale);
}
function $3b91e95f3a4155cf$export$4ce09b63b66aecc9(low, mid, high, isNegative, scale) {
    const bitSize = 96;
    const hexDigits = new Uint8Array(bitSize / 4);
    $3b91e95f3a4155cf$var$setInt32Bits(hexDigits, low, 0);
    $3b91e95f3a4155cf$var$setInt32Bits(hexDigits, mid, 8);
    $3b91e95f3a4155cf$var$setInt32Bits(hexDigits, high, 16);
    const decDigits = $3b91e95f3a4155cf$var$hexToDecimal(hexDigits, bitSize);
    scale = scale & 127;
    const big = new $17d45351cea175bf$export$2e2bcd8739ae039(0);
    big.c = Array.from(decDigits.reverse());
    big.e = decDigits.length - scale - 1;
    big.s = isNegative ? -1 : 1;
    const d = new $17d45351cea175bf$export$2e2bcd8739ae039(big);
    return d;
}
function $3b91e95f3a4155cf$export$afb88973713cb16a(d) {
    const bitSize = 96;
    const decDigits = Uint8Array.from(d.c);
    const hexDigits = $3b91e95f3a4155cf$var$decimalToHex(decDigits, bitSize);
    const low = $3b91e95f3a4155cf$var$getInt32Bits(hexDigits, 0);
    const mid = $3b91e95f3a4155cf$var$getInt32Bits(hexDigits, 8);
    const high = $3b91e95f3a4155cf$var$getInt32Bits(hexDigits, 16);
    const decStr = d.toString();
    const dotPos = decStr.indexOf(".");
    const scale = dotPos < 0 ? 0 : decStr.length - dotPos - 1;
    const signExp = (scale & 127) << 16 | (d.s < 0 ? 2147483648 : 0);
    return [
        low,
        mid,
        high,
        signExp
    ];
} // export function makeRangeStepFunction(step: Decimal, last: Decimal) {
 //   const stepComparedWithZero = step.cmp(get_Zero);
 //   if (stepComparedWithZero === 0) {
 //     throw new Error("The step of a range cannot be zero");
 //   }
 //   const stepGreaterThanZero = stepComparedWithZero > 0;
 //   return (x: Decimal) => {
 //     const comparedWithLast = x.cmp(last);
 //     if ((stepGreaterThanZero && comparedWithLast <= 0)
 //       || (!stepGreaterThanZero && comparedWithLast >= 0)) {
 //       return [x, op_Addition(x, step)];
 //     } else {
 //       return undefined;
 //     }
 //   };
 // }


var $4809551403a912ed$export$2fb4bfa701a7ee12;
(function(NumberStyles) {
    // None = 0x00000000,
    // AllowLeadingWhite = 0x00000001,
    // AllowTrailingWhite = 0x00000002,
    // AllowLeadingSign = 0x00000004,
    // AllowTrailingSign = 0x00000008,
    // AllowParentheses = 0x00000010,
    // AllowDecimalPoint = 0x00000020,
    // AllowThousands = 0x00000040,
    // AllowExponent = 0x00000080,
    // AllowCurrencySymbol = 0x00000100,
    NumberStyles[NumberStyles["AllowHexSpecifier"] = 512] = "AllowHexSpecifier";
// Integer = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign,
// HexNumber = AllowLeadingWhite | AllowTrailingWhite | AllowHexSpecifier,
// Number = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign |
//          AllowTrailingSign | AllowDecimalPoint | AllowThousands,
// Float = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign |
//         AllowDecimalPoint | AllowExponent,
// Currency = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign | AllowTrailingSign |
//            AllowParentheses | AllowDecimalPoint | AllowThousands | AllowCurrencySymbol,
// Any = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign | AllowTrailingSign |
//       AllowParentheses | AllowDecimalPoint | AllowThousands | AllowCurrencySymbol | AllowExponent,
})($4809551403a912ed$export$2fb4bfa701a7ee12 || ($4809551403a912ed$export$2fb4bfa701a7ee12 = {
}));
function $4809551403a912ed$var$validResponse(regexMatch, radix) {
    const [, sign, prefix, digits] = regexMatch;
    return {
        sign: sign || "",
        prefix: prefix || "",
        digits: digits,
        radix: radix
    };
}
function $4809551403a912ed$var$getRange(unsigned, bitsize) {
    switch(bitsize){
        case 8:
            return unsigned ? [
                0,
                255
            ] : [
                -128,
                127
            ];
        case 16:
            return unsigned ? [
                0,
                65535
            ] : [
                -32768,
                32767
            ];
        case 32:
            return unsigned ? [
                0,
                4294967295
            ] : [
                -2147483648,
                2147483647
            ];
        default:
            throw new Error("Invalid bit size.");
    }
}
function $4809551403a912ed$var$getInvalidDigits(radix) {
    switch(radix){
        case 2:
            return /[^0-1]/;
        case 8:
            return /[^0-7]/;
        case 10:
            return /[^0-9]/;
        case 16:
            return /[^0-9a-fA-F]/;
        default:
            throw new Error("Invalid Base.");
    }
}
function $4809551403a912ed$var$getRadix(prefix, style) {
    if (style & $4809551403a912ed$export$2fb4bfa701a7ee12.AllowHexSpecifier) return 16;
    else switch(prefix){
        case "0b":
        case "0B":
            return 2;
        case "0o":
        case "0O":
            return 8;
        case "0x":
        case "0X":
            return 16;
        default:
            return 10;
    }
}
function $4809551403a912ed$export$1ea939691cdc45b8(str, style, radix) {
    const integerRegex = /^\s*([\+\-])?(0[xXoObB])?([0-9a-fA-F]+)\s*$/;
    const res = integerRegex.exec(str.replace(/_/g, ""));
    if (res != null) {
        const [, , prefix, digits] = res;
        radix = radix || $4809551403a912ed$var$getRadix(prefix, style);
        const invalidDigits = $4809551403a912ed$var$getInvalidDigits(radix);
        if (!invalidDigits.test(digits)) return $4809551403a912ed$var$validResponse(res, radix);
    }
    return null;
}
function $4809551403a912ed$export$98e6a39c04603d36(str, style, unsigned, bitsize, radix) {
    const res = $4809551403a912ed$export$1ea939691cdc45b8(str, style, radix);
    if (res != null) {
        let v = Number.parseInt(res.sign + res.digits, res.radix);
        if (!Number.isNaN(v)) {
            const [umin, umax] = $4809551403a912ed$var$getRange(true, bitsize);
            if (!unsigned && res.radix !== 10 && v >= umin && v <= umax) v = v << 32 - bitsize >> 32 - bitsize;
            const [min, max] = $4809551403a912ed$var$getRange(unsigned, bitsize);
            if (v >= min && v <= max) return v;
        }
    }
    throw new Error("Input string was not in a correct format.");
}
function $4809551403a912ed$export$468ff95b83d315e5(str, style, unsigned, bitsize, defValue) {
    try {
        defValue.contents = $4809551403a912ed$export$98e6a39c04603d36(str, style, unsigned, bitsize);
        return true;
    } catch (_a) {
        return false;
    }
}
function $4809551403a912ed$export$4cbff5ef24614dc7(x) {
    return x === -128 ? x : -x;
}
function $4809551403a912ed$export$9b736586c807d703(x) {
    return x === -32768 ? x : -x;
}
function $4809551403a912ed$export$87c665ad90b41cb3(x) {
    return x === -2147483648 ? x : -x;
}


var $6c9dd5248447d64a$exports = {};

$parcel$export($6c9dd5248447d64a$exports, "Long", () => $6c9dd5248447d64a$export$12ac1d26449d9c2e, (v) => $6c9dd5248447d64a$export$12ac1d26449d9c2e = v);
$parcel$export($6c9dd5248447d64a$exports, "equals", () => $6c9dd5248447d64a$export$e9bab7fafb253603, (v) => $6c9dd5248447d64a$export$e9bab7fafb253603 = v);
$parcel$export($6c9dd5248447d64a$exports, "compare", () => $6c9dd5248447d64a$export$398604a469f7de9a, (v) => $6c9dd5248447d64a$export$398604a469f7de9a = v);
$parcel$export($6c9dd5248447d64a$exports, "toString", () => $6c9dd5248447d64a$export$f84e8e69fd4488a5, (v) => $6c9dd5248447d64a$export$f84e8e69fd4488a5 = v);
$parcel$export($6c9dd5248447d64a$exports, "multiply", () => $6c9dd5248447d64a$export$2060d2db72cce88f, (v) => $6c9dd5248447d64a$export$2060d2db72cce88f = v);
$parcel$export($6c9dd5248447d64a$exports, "fromBytes", () => $6c9dd5248447d64a$export$de2da3025c30316c, (v) => $6c9dd5248447d64a$export$de2da3025c30316c = v);
$parcel$export($6c9dd5248447d64a$exports, "toBytes", () => $6c9dd5248447d64a$export$30a71edf0753ed6b, (v) => $6c9dd5248447d64a$export$30a71edf0753ed6b = v);
$parcel$export($6c9dd5248447d64a$exports, "fromInt", () => $6c9dd5248447d64a$export$62ffe363f1b08494, (v) => $6c9dd5248447d64a$export$62ffe363f1b08494 = v);
$parcel$export($6c9dd5248447d64a$exports, "fromBits", () => $6c9dd5248447d64a$export$af782817a0bb622d, (v) => $6c9dd5248447d64a$export$af782817a0bb622d = v);
$parcel$export($6c9dd5248447d64a$exports, "fromNumber", () => $6c9dd5248447d64a$export$7bbb4164c9a77bc2, (v) => $6c9dd5248447d64a$export$7bbb4164c9a77bc2 = v);
$parcel$export($6c9dd5248447d64a$exports, "ZERO", () => $6c9dd5248447d64a$export$2a1795c9359f92b9, (v) => $6c9dd5248447d64a$export$2a1795c9359f92b9 = v);
$parcel$export($6c9dd5248447d64a$exports, "negate", () => $6c9dd5248447d64a$export$aef51622e549b8b0, (v) => $6c9dd5248447d64a$export$aef51622e549b8b0 = v);
$parcel$export($6c9dd5248447d64a$exports, "fromString", () => $6c9dd5248447d64a$export$3004f64547af360e, (v) => $6c9dd5248447d64a$export$3004f64547af360e = v);
$parcel$export($6c9dd5248447d64a$exports, "add", () => $6c9dd5248447d64a$export$e16d8520af44a096, (v) => $6c9dd5248447d64a$export$e16d8520af44a096 = v);
$parcel$export($6c9dd5248447d64a$exports, "fromValue", () => $6c9dd5248447d64a$export$5f36b26c3833b3ba, (v) => $6c9dd5248447d64a$export$5f36b26c3833b3ba = v);
$parcel$export($6c9dd5248447d64a$exports, "ONE", () => $6c9dd5248447d64a$export$30f1bb5a4a4a5467, (v) => $6c9dd5248447d64a$export$30f1bb5a4a4a5467 = v);
$parcel$export($6c9dd5248447d64a$exports, "toInt", () => $6c9dd5248447d64a$export$e7a1baa2fae31f0f, (v) => $6c9dd5248447d64a$export$e7a1baa2fae31f0f = v);
$parcel$export($6c9dd5248447d64a$exports, "toNumber", () => $6c9dd5248447d64a$export$a0a81dc3380ce7d3, (v) => $6c9dd5248447d64a$export$a0a81dc3380ce7d3 = v);
$parcel$export($6c9dd5248447d64a$exports, "isNegative", () => $6c9dd5248447d64a$export$d0909a4f38b5c4d0, (v) => $6c9dd5248447d64a$export$d0909a4f38b5c4d0 = v);
$parcel$export($6c9dd5248447d64a$exports, "divide", () => $6c9dd5248447d64a$export$cd007d971a5a2143, (v) => $6c9dd5248447d64a$export$cd007d971a5a2143 = v);
$parcel$export($6c9dd5248447d64a$exports, "subtract", () => $6c9dd5248447d64a$export$4e2d2ead65e5f7e3, (v) => $6c9dd5248447d64a$export$4e2d2ead65e5f7e3 = v);
$parcel$export($6c9dd5248447d64a$exports, "getHighBits", () => $6c9dd5248447d64a$export$c8eeef792e5e2eee, (v) => $6c9dd5248447d64a$export$c8eeef792e5e2eee = v);
$parcel$export($6c9dd5248447d64a$exports, "getHighBitsUnsigned", () => $6c9dd5248447d64a$export$7a2febf4c9a31fb2, (v) => $6c9dd5248447d64a$export$7a2febf4c9a31fb2 = v);
$parcel$export($6c9dd5248447d64a$exports, "getLowBits", () => $6c9dd5248447d64a$export$4a10214d6ebc19b0, (v) => $6c9dd5248447d64a$export$4a10214d6ebc19b0 = v);
$parcel$export($6c9dd5248447d64a$exports, "getLowBitsUnsigned", () => $6c9dd5248447d64a$export$4c488f0e2ac21b03, (v) => $6c9dd5248447d64a$export$4c488f0e2ac21b03 = v);
$parcel$export($6c9dd5248447d64a$exports, "notEquals", () => $6c9dd5248447d64a$export$e72580e7aad6105c, (v) => $6c9dd5248447d64a$export$e72580e7aad6105c = v);
$parcel$export($6c9dd5248447d64a$exports, "lessThan", () => $6c9dd5248447d64a$export$9b050841a3a1b328, (v) => $6c9dd5248447d64a$export$9b050841a3a1b328 = v);
$parcel$export($6c9dd5248447d64a$exports, "lessThanOrEqual", () => $6c9dd5248447d64a$export$52dc2ecba809cb1a, (v) => $6c9dd5248447d64a$export$52dc2ecba809cb1a = v);
$parcel$export($6c9dd5248447d64a$exports, "greaterThan", () => $6c9dd5248447d64a$export$f517ea36c68d4644, (v) => $6c9dd5248447d64a$export$f517ea36c68d4644 = v);
$parcel$export($6c9dd5248447d64a$exports, "greaterThanOrEqual", () => $6c9dd5248447d64a$export$1d972cf4acc123bd, (v) => $6c9dd5248447d64a$export$1d972cf4acc123bd = v);
$parcel$export($6c9dd5248447d64a$exports, "not", () => $6c9dd5248447d64a$export$6003a5f097c73977, (v) => $6c9dd5248447d64a$export$6003a5f097c73977 = v);
$parcel$export($6c9dd5248447d64a$exports, "shiftRight", () => $6c9dd5248447d64a$export$86c449e29266e58a, (v) => $6c9dd5248447d64a$export$86c449e29266e58a = v);
$parcel$export($6c9dd5248447d64a$exports, "shiftLeft", () => $6c9dd5248447d64a$export$f613292be21d0bc3, (v) => $6c9dd5248447d64a$export$f613292be21d0bc3 = v);
$parcel$export($6c9dd5248447d64a$exports, "shiftRightUnsigned", () => $6c9dd5248447d64a$export$fd2d1dabe2e60497, (v) => $6c9dd5248447d64a$export$fd2d1dabe2e60497 = v);
$parcel$export($6c9dd5248447d64a$exports, "modulo", () => $6c9dd5248447d64a$export$ba467bec01d66def, (v) => $6c9dd5248447d64a$export$ba467bec01d66def = v);
$parcel$export($6c9dd5248447d64a$exports, "and", () => $6c9dd5248447d64a$export$21c0ac7fe1cef1b8, (v) => $6c9dd5248447d64a$export$21c0ac7fe1cef1b8 = v);
$parcel$export($6c9dd5248447d64a$exports, "or", () => $6c9dd5248447d64a$export$252bb8b3bbdf6749, (v) => $6c9dd5248447d64a$export$252bb8b3bbdf6749 = v);
$parcel$export($6c9dd5248447d64a$exports, "xor", () => $6c9dd5248447d64a$export$6444ef5cd411280c, (v) => $6c9dd5248447d64a$export$6444ef5cd411280c = v);

/**
 * wasm optimizations, to do native i64 multiplication and divide
 */ var $6c9dd5248447d64a$var$wasm = null;
try {
    $6c9dd5248447d64a$var$wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
        0,
        97,
        115,
        109,
        1,
        0,
        0,
        0,
        1,
        13,
        2,
        96,
        0,
        1,
        127,
        96,
        4,
        127,
        127,
        127,
        127,
        1,
        127,
        3,
        7,
        6,
        0,
        1,
        1,
        1,
        1,
        1,
        6,
        6,
        1,
        127,
        1,
        65,
        0,
        11,
        7,
        50,
        6,
        3,
        109,
        117,
        108,
        0,
        1,
        5,
        100,
        105,
        118,
        95,
        115,
        0,
        2,
        5,
        100,
        105,
        118,
        95,
        117,
        0,
        3,
        5,
        114,
        101,
        109,
        95,
        115,
        0,
        4,
        5,
        114,
        101,
        109,
        95,
        117,
        0,
        5,
        8,
        103,
        101,
        116,
        95,
        104,
        105,
        103,
        104,
        0,
        0,
        10,
        191,
        1,
        6,
        4,
        0,
        35,
        0,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        126,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        127,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        128,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        129,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11,
        36,
        1,
        1,
        126,
        32,
        0,
        173,
        32,
        1,
        173,
        66,
        32,
        134,
        132,
        32,
        2,
        173,
        32,
        3,
        173,
        66,
        32,
        134,
        132,
        130,
        34,
        4,
        66,
        32,
        135,
        167,
        36,
        0,
        32,
        4,
        167,
        11
    ])), {
    }).exports;
} catch (e) {
// no wasm support :(
}
function $6c9dd5248447d64a$export$12ac1d26449d9c2e(low, high, unsigned) {
    /**
     * The low 32 bits as a signed value.
     * @type {number}
     */ this.low = low | 0;
    /**
     * The high 32 bits as a signed value.
     * @type {number}
     */ this.high = high | 0;
    /**
     * Whether unsigned or not.
     * @type {boolean}
     */ this.unsigned = !!unsigned;
}
$6c9dd5248447d64a$export$12ac1d26449d9c2e.prototype.GetHashCode = function() {
    let h1 = this.unsigned ? 1 : 0;
    h1 = (h1 << 5) + h1 ^ this.high;
    h1 = (h1 << 5) + h1 ^ this.low;
    return h1;
};
$6c9dd5248447d64a$export$12ac1d26449d9c2e.prototype.Equals = function(x) {
    return $6c9dd5248447d64a$export$e9bab7fafb253603(this, x);
};
$6c9dd5248447d64a$export$12ac1d26449d9c2e.prototype.CompareTo = function(x) {
    return $6c9dd5248447d64a$export$398604a469f7de9a(this, x);
};
$6c9dd5248447d64a$export$12ac1d26449d9c2e.prototype.toString = function(radix) {
    return $6c9dd5248447d64a$export$f84e8e69fd4488a5(this, radix);
};
$6c9dd5248447d64a$export$12ac1d26449d9c2e.prototype.toJSON = function() {
    return $6c9dd5248447d64a$export$f84e8e69fd4488a5(this);
};
$6c9dd5248447d64a$export$12ac1d26449d9c2e.prototype[$6997ebb8332b0ba8$export$8f701197936bc2a6] = function() {
    const x = this;
    return {
        multiply: (y)=>$6c9dd5248447d64a$export$2060d2db72cce88f(x, y)
        ,
        toPrecision: (sd)=>String(x) + 0..toPrecision(sd).substr(1)
        ,
        toExponential: (dp)=>String(x) + 0..toExponential(dp).substr(1)
        ,
        toFixed: (dp)=>String(x) + 0..toFixed(dp).substr(1)
        ,
        toHex: ()=>$6c9dd5248447d64a$export$f84e8e69fd4488a5(x.unsigned ? x : $6c9dd5248447d64a$export$de2da3025c30316c($6c9dd5248447d64a$export$30a71edf0753ed6b(x), true), 16)
    };
};
// The internal representation of a long is the two given signed, 32-bit values.
// We use 32-bit pieces because these are the size of integers on which
// Javascript performs bit-operations.  For operations like addition and
// multiplication, we split each number into 16 bit pieces, which can easily be
// multiplied within Javascript's floating-point representation without overflow
// or change in sign.
//
// In the algorithms below, we frequently reduce the negative case to the
// positive case by negating the input(s) and then post-processing the result.
// Note that we must ALWAYS check specially whether those values are MIN_VALUE
// (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
// a positive number, it overflows back into a negative).  Not handling this
// case would often result in infinite recursion.
//
// Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
// methods on which they depend.
/**
 * An indicator used to reliably determine if an object is a Long or not.
 * @type {boolean}
 * @const
 * @private
 */ $6c9dd5248447d64a$export$12ac1d26449d9c2e.prototype.__isLong__;
Object.defineProperty($6c9dd5248447d64a$export$12ac1d26449d9c2e.prototype, "__isLong__", {
    value: true
});
function $6c9dd5248447d64a$export$d8c61589c31c4718(obj) {
    return (obj && obj["__isLong__"]) === true;
}
/**
 * Tests if the specified object is a Long.
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 */ // Long.isLong = isLong;
/**
 * A cache of the Long representations of small integer values.
 * @type {!Object}
 * @inner
 */ var $6c9dd5248447d64a$var$INT_CACHE = {
};
/**
 * A cache of the Long representations of small unsigned integer values.
 * @type {!Object}
 * @inner
 */ var $6c9dd5248447d64a$var$UINT_CACHE = {
};
function $6c9dd5248447d64a$export$62ffe363f1b08494(value, unsigned) {
    var obj, cachedObj, cache;
    if (unsigned) {
        value >>>= 0;
        if (cache = 0 <= value && value < 256) {
            cachedObj = $6c9dd5248447d64a$var$UINT_CACHE[value];
            if (cachedObj) return cachedObj;
        }
        obj = $6c9dd5248447d64a$export$af782817a0bb622d(value, (value | 0) < 0 ? -1 : 0, true);
        if (cache) $6c9dd5248447d64a$var$UINT_CACHE[value] = obj;
        return obj;
    } else {
        value |= 0;
        if (cache = -128 <= value && value < 128) {
            cachedObj = $6c9dd5248447d64a$var$INT_CACHE[value];
            if (cachedObj) return cachedObj;
        }
        obj = $6c9dd5248447d64a$export$af782817a0bb622d(value, value < 0 ? -1 : 0, false);
        if (cache) $6c9dd5248447d64a$var$INT_CACHE[value] = obj;
        return obj;
    }
}
function $6c9dd5248447d64a$export$7bbb4164c9a77bc2(value, unsigned) {
    if (isNaN(value)) return unsigned ? $6c9dd5248447d64a$export$e35e43f82f36d912 : $6c9dd5248447d64a$export$2a1795c9359f92b9;
    if (unsigned) {
        if (value < 0) return $6c9dd5248447d64a$export$e35e43f82f36d912;
        if (value >= $6c9dd5248447d64a$var$TWO_PWR_64_DBL) return $6c9dd5248447d64a$export$ece7599f9193150b;
    } else {
        if (value <= -$6c9dd5248447d64a$var$TWO_PWR_63_DBL) return $6c9dd5248447d64a$export$10e1f42189ea83da;
        if (value + 1 >= $6c9dd5248447d64a$var$TWO_PWR_63_DBL) return $6c9dd5248447d64a$export$e5fd331eb7ecbb12;
    }
    if (value < 0) return $6c9dd5248447d64a$export$aef51622e549b8b0($6c9dd5248447d64a$export$7bbb4164c9a77bc2(-value, unsigned));
    return $6c9dd5248447d64a$export$af782817a0bb622d(value % $6c9dd5248447d64a$var$TWO_PWR_32_DBL | 0, value / $6c9dd5248447d64a$var$TWO_PWR_32_DBL | 0, unsigned);
}
function $6c9dd5248447d64a$export$af782817a0bb622d(lowBits, highBits, unsigned) {
    return new $6c9dd5248447d64a$export$12ac1d26449d9c2e(lowBits, highBits, unsigned);
}
/**
 * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
 *  assumed to use 32 bits.
 * @function
 * @param {number} lowBits The low 32 bits
 * @param {number} highBits The high 32 bits
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */ // Long.fromBits = fromBits;
/**
 * @function
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 * @inner
 */ var $6c9dd5248447d64a$var$pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)
function $6c9dd5248447d64a$export$3004f64547af360e(str, unsigned, radix) {
    if (str.length === 0) throw Error('empty string');
    if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity") return $6c9dd5248447d64a$export$2a1795c9359f92b9;
    if (typeof unsigned === 'number') // For goog.math.long compatibility
    radix = unsigned, unsigned = false;
    else unsigned = !!unsigned;
    radix = radix || 10;
    if (radix < 2 || 36 < radix) throw RangeError('radix');
    var p = str.indexOf('-');
    if (p > 0) throw Error('interior hyphen');
    else if (p === 0) return $6c9dd5248447d64a$export$aef51622e549b8b0($6c9dd5248447d64a$export$3004f64547af360e(str.substring(1), unsigned, radix));
    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = $6c9dd5248447d64a$export$7bbb4164c9a77bc2($6c9dd5248447d64a$var$pow_dbl(radix, 8));
    var result = $6c9dd5248447d64a$export$2a1795c9359f92b9;
    for(var i = 0; i < str.length; i += 8){
        var size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
            var power = $6c9dd5248447d64a$export$7bbb4164c9a77bc2($6c9dd5248447d64a$var$pow_dbl(radix, size));
            result = $6c9dd5248447d64a$export$e16d8520af44a096($6c9dd5248447d64a$export$2060d2db72cce88f(result, power), $6c9dd5248447d64a$export$7bbb4164c9a77bc2(value));
        } else {
            result = $6c9dd5248447d64a$export$2060d2db72cce88f(result, radixToPower);
            result = $6c9dd5248447d64a$export$e16d8520af44a096(result, $6c9dd5248447d64a$export$7bbb4164c9a77bc2(value));
        }
    }
    result.unsigned = unsigned;
    return result;
}
function $6c9dd5248447d64a$export$5f36b26c3833b3ba(val, unsigned) {
    if (typeof val === 'number') return $6c9dd5248447d64a$export$7bbb4164c9a77bc2(val, unsigned);
    if (typeof val === 'string') return $6c9dd5248447d64a$export$3004f64547af360e(val, unsigned);
    // Throws for non-objects, converts non-instanceof Long:
    return $6c9dd5248447d64a$export$af782817a0bb622d(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
}
/**
 * Converts the specified value to a Long using the appropriate from* function for its type.
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long}
 */ // Long.fromValue = fromValue;
// NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
// no runtime penalty for these.
/**
 * @type {number}
 * @const
 * @inner
 */ var $6c9dd5248447d64a$var$TWO_PWR_16_DBL = 65536;
/**
 * @type {number}
 * @const
 * @inner
 */ var $6c9dd5248447d64a$var$TWO_PWR_24_DBL = 16777216;
/**
 * @type {number}
 * @const
 * @inner
 */ var $6c9dd5248447d64a$var$TWO_PWR_32_DBL = $6c9dd5248447d64a$var$TWO_PWR_16_DBL * $6c9dd5248447d64a$var$TWO_PWR_16_DBL;
/**
 * @type {number}
 * @const
 * @inner
 */ var $6c9dd5248447d64a$var$TWO_PWR_64_DBL = $6c9dd5248447d64a$var$TWO_PWR_32_DBL * $6c9dd5248447d64a$var$TWO_PWR_32_DBL;
/**
 * @type {number}
 * @const
 * @inner
 */ var $6c9dd5248447d64a$var$TWO_PWR_63_DBL = $6c9dd5248447d64a$var$TWO_PWR_64_DBL / 2;
/**
 * @type {!Long}
 * @const
 * @inner
 */ var $6c9dd5248447d64a$var$TWO_PWR_24 = $6c9dd5248447d64a$export$62ffe363f1b08494($6c9dd5248447d64a$var$TWO_PWR_24_DBL);
var $6c9dd5248447d64a$export$2a1795c9359f92b9 = $6c9dd5248447d64a$export$62ffe363f1b08494(0);
var $6c9dd5248447d64a$export$e35e43f82f36d912 = $6c9dd5248447d64a$export$62ffe363f1b08494(0, true);
var $6c9dd5248447d64a$export$30f1bb5a4a4a5467 = $6c9dd5248447d64a$export$62ffe363f1b08494(1);
var $6c9dd5248447d64a$export$789f666db4213815 = $6c9dd5248447d64a$export$62ffe363f1b08494(1, true);
var $6c9dd5248447d64a$export$e5b31325dd05546c = $6c9dd5248447d64a$export$62ffe363f1b08494(-1);
var $6c9dd5248447d64a$export$e5fd331eb7ecbb12 = $6c9dd5248447d64a$export$af782817a0bb622d(-1, 2147483647, false);
var $6c9dd5248447d64a$export$ece7599f9193150b = $6c9dd5248447d64a$export$af782817a0bb622d(-1, -1, true);
var $6c9dd5248447d64a$export$10e1f42189ea83da = $6c9dd5248447d64a$export$af782817a0bb622d(0, -2147483648, false);
function $6c9dd5248447d64a$export$e7a1baa2fae31f0f($this) {
    return $this.unsigned ? $this.low >>> 0 : $this.low;
}
function $6c9dd5248447d64a$export$a0a81dc3380ce7d3($this) {
    if ($this.unsigned) return ($this.high >>> 0) * $6c9dd5248447d64a$var$TWO_PWR_32_DBL + ($this.low >>> 0);
    return $this.high * $6c9dd5248447d64a$var$TWO_PWR_32_DBL + ($this.low >>> 0);
}
function $6c9dd5248447d64a$export$f84e8e69fd4488a5($this, radix) {
    radix = radix || 10;
    if (radix < 2 || 36 < radix) throw RangeError('radix');
    if ($6c9dd5248447d64a$export$c46ec7d82fb1f602($this)) return '0';
    if ($6c9dd5248447d64a$export$d0909a4f38b5c4d0($this)) {
        if ($6c9dd5248447d64a$export$e9bab7fafb253603($this, $6c9dd5248447d64a$export$10e1f42189ea83da)) {
            // We need to change the Long value before it can be negated, so we remove
            // the bottom-most digit in this base and then recurse to do the rest.
            var radixLong = $6c9dd5248447d64a$export$7bbb4164c9a77bc2(radix), div = $6c9dd5248447d64a$export$cd007d971a5a2143($this, radixLong), rem1 = $6c9dd5248447d64a$export$4e2d2ead65e5f7e3($6c9dd5248447d64a$export$2060d2db72cce88f(div, radixLong), $this);
            return $6c9dd5248447d64a$export$f84e8e69fd4488a5(div, radix) + $6c9dd5248447d64a$export$e7a1baa2fae31f0f(rem1).toString(radix);
        } else return '-' + $6c9dd5248447d64a$export$f84e8e69fd4488a5($6c9dd5248447d64a$export$aef51622e549b8b0($this), radix);
    }
    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = $6c9dd5248447d64a$export$7bbb4164c9a77bc2($6c9dd5248447d64a$var$pow_dbl(radix, 6), $this.unsigned), rem = $this;
    var result = '';
    while(true){
        var remDiv = $6c9dd5248447d64a$export$cd007d971a5a2143(rem, radixToPower), intval = $6c9dd5248447d64a$export$e7a1baa2fae31f0f($6c9dd5248447d64a$export$4e2d2ead65e5f7e3(rem, $6c9dd5248447d64a$export$2060d2db72cce88f(remDiv, radixToPower))) >>> 0, digits = intval.toString(radix);
        rem = remDiv;
        if ($6c9dd5248447d64a$export$c46ec7d82fb1f602(rem)) return digits + result;
        else {
            while(digits.length < 6)digits = '0' + digits;
            result = '' + digits + result;
        }
    }
}
function $6c9dd5248447d64a$export$c8eeef792e5e2eee($this) {
    return $this.high;
}
function $6c9dd5248447d64a$export$7a2febf4c9a31fb2($this) {
    return $this.high >>> 0;
}
function $6c9dd5248447d64a$export$4a10214d6ebc19b0($this) {
    return $this.low;
}
function $6c9dd5248447d64a$export$4c488f0e2ac21b03($this) {
    return $this.low >>> 0;
}
function $6c9dd5248447d64a$export$ef5a11dd04094ebe($this) {
    if ($6c9dd5248447d64a$export$d0909a4f38b5c4d0($this)) return $6c9dd5248447d64a$export$e9bab7fafb253603($this, $6c9dd5248447d64a$export$10e1f42189ea83da) ? 64 : $6c9dd5248447d64a$export$ef5a11dd04094ebe($6c9dd5248447d64a$export$aef51622e549b8b0($this));
    var val = $this.high != 0 ? $this.high : $this.low;
    for(var bit = 31; bit > 0; bit--)if ((val & 1 << bit) != 0) break;
    return $this.high != 0 ? bit + 33 : bit + 1;
}
function $6c9dd5248447d64a$export$c46ec7d82fb1f602($this) {
    return $this.high === 0 && $this.low === 0;
}
function $6c9dd5248447d64a$export$d0909a4f38b5c4d0($this) {
    return !$this.unsigned && $this.high < 0;
}
function $6c9dd5248447d64a$export$7e69d4236fcc3b19($this) {
    return $this.unsigned || $this.high >= 0;
}
function $6c9dd5248447d64a$export$d36793d8f5c37d4d($this) {
    return ($this.low & 1) === 1;
}
function $6c9dd5248447d64a$export$ce16302d1253e25($this) {
    return ($this.low & 1) === 0;
}
function $6c9dd5248447d64a$export$e9bab7fafb253603($this, other) {
    if (!$6c9dd5248447d64a$export$d8c61589c31c4718(other)) other = $6c9dd5248447d64a$export$5f36b26c3833b3ba(other);
    if ($this.unsigned !== other.unsigned && $this.high >>> 31 === 1 && other.high >>> 31 === 1) return false;
    return $this.high === other.high && $this.low === other.low;
}
function $6c9dd5248447d64a$export$e72580e7aad6105c($this, other) {
    return !$6c9dd5248447d64a$export$e9bab7fafb253603($this, /* validates */ other);
}
function $6c9dd5248447d64a$export$9b050841a3a1b328($this, other) {
    return $6c9dd5248447d64a$export$398604a469f7de9a($this, /* validates */ other) < 0;
}
function $6c9dd5248447d64a$export$52dc2ecba809cb1a($this, other) {
    return $6c9dd5248447d64a$export$398604a469f7de9a($this, /* validates */ other) <= 0;
}
function $6c9dd5248447d64a$export$f517ea36c68d4644($this, other) {
    return $6c9dd5248447d64a$export$398604a469f7de9a($this, /* validates */ other) > 0;
}
function $6c9dd5248447d64a$export$1d972cf4acc123bd($this, other) {
    return $6c9dd5248447d64a$export$398604a469f7de9a($this, /* validates */ other) >= 0;
}
function $6c9dd5248447d64a$export$398604a469f7de9a($this, other) {
    if (!$6c9dd5248447d64a$export$d8c61589c31c4718(other)) other = $6c9dd5248447d64a$export$5f36b26c3833b3ba(other);
    if ($6c9dd5248447d64a$export$e9bab7fafb253603($this, other)) return 0;
    var thisNeg = $6c9dd5248447d64a$export$d0909a4f38b5c4d0($this), otherNeg = $6c9dd5248447d64a$export$d0909a4f38b5c4d0(other);
    if (thisNeg && !otherNeg) return -1;
    if (!thisNeg && otherNeg) return 1;
    // At this point the sign bits are the same
    if (!$this.unsigned) return $6c9dd5248447d64a$export$d0909a4f38b5c4d0($6c9dd5248447d64a$export$4e2d2ead65e5f7e3($this, other)) ? -1 : 1;
    // Both are positive if at least one is unsigned
    return other.high >>> 0 > $this.high >>> 0 || other.high === $this.high && other.low >>> 0 > $this.low >>> 0 ? -1 : 1;
}
function $6c9dd5248447d64a$export$aef51622e549b8b0($this) {
    if (!$this.unsigned && $6c9dd5248447d64a$export$e9bab7fafb253603($this, $6c9dd5248447d64a$export$10e1f42189ea83da)) return $6c9dd5248447d64a$export$10e1f42189ea83da;
    return $6c9dd5248447d64a$export$e16d8520af44a096($6c9dd5248447d64a$export$6003a5f097c73977($this), $6c9dd5248447d64a$export$30f1bb5a4a4a5467);
}
function $6c9dd5248447d64a$export$e16d8520af44a096($this, addend) {
    if (!$6c9dd5248447d64a$export$d8c61589c31c4718(addend)) addend = $6c9dd5248447d64a$export$5f36b26c3833b3ba(addend);
    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
    var a48 = $this.high >>> 16;
    var a32 = $this.high & 65535;
    var a16 = $this.low >>> 16;
    var a00 = $this.low & 65535;
    var b48 = addend.high >>> 16;
    var b32 = addend.high & 65535;
    var b16 = addend.low >>> 16;
    var b00 = addend.low & 65535;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 65535;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 65535;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 65535;
    c48 += a48 + b48;
    c48 &= 65535;
    return $6c9dd5248447d64a$export$af782817a0bb622d(c16 << 16 | c00, c48 << 16 | c32, $this.unsigned);
}
function $6c9dd5248447d64a$export$4e2d2ead65e5f7e3($this, subtrahend) {
    if (!$6c9dd5248447d64a$export$d8c61589c31c4718(subtrahend)) subtrahend = $6c9dd5248447d64a$export$5f36b26c3833b3ba(subtrahend);
    return $6c9dd5248447d64a$export$e16d8520af44a096($this, $6c9dd5248447d64a$export$aef51622e549b8b0(subtrahend));
}
function $6c9dd5248447d64a$export$2060d2db72cce88f($this, multiplier) {
    if ($6c9dd5248447d64a$export$c46ec7d82fb1f602($this)) return $this.unsigned ? $6c9dd5248447d64a$export$e35e43f82f36d912 : $6c9dd5248447d64a$export$2a1795c9359f92b9;
    if (!$6c9dd5248447d64a$export$d8c61589c31c4718(multiplier)) multiplier = $6c9dd5248447d64a$export$5f36b26c3833b3ba(multiplier);
    // use wasm support if present
    if ($6c9dd5248447d64a$var$wasm) {
        var low = $6c9dd5248447d64a$var$wasm.mul($this.low, $this.high, multiplier.low, multiplier.high);
        return $6c9dd5248447d64a$export$af782817a0bb622d(low, $6c9dd5248447d64a$var$wasm.get_high(), $this.unsigned);
    }
    if ($6c9dd5248447d64a$export$c46ec7d82fb1f602(multiplier)) return $this.unsigned ? $6c9dd5248447d64a$export$e35e43f82f36d912 : $6c9dd5248447d64a$export$2a1795c9359f92b9;
    if ($6c9dd5248447d64a$export$e9bab7fafb253603($this, $6c9dd5248447d64a$export$10e1f42189ea83da)) return $6c9dd5248447d64a$export$d36793d8f5c37d4d(multiplier) ? $6c9dd5248447d64a$export$10e1f42189ea83da : $6c9dd5248447d64a$export$2a1795c9359f92b9;
    if ($6c9dd5248447d64a$export$e9bab7fafb253603(multiplier, $6c9dd5248447d64a$export$10e1f42189ea83da)) return $6c9dd5248447d64a$export$d36793d8f5c37d4d($this) ? $6c9dd5248447d64a$export$10e1f42189ea83da : $6c9dd5248447d64a$export$2a1795c9359f92b9;
    if ($6c9dd5248447d64a$export$d0909a4f38b5c4d0($this)) {
        if ($6c9dd5248447d64a$export$d0909a4f38b5c4d0(multiplier)) return $6c9dd5248447d64a$export$2060d2db72cce88f($6c9dd5248447d64a$export$aef51622e549b8b0($this), $6c9dd5248447d64a$export$aef51622e549b8b0(multiplier));
        else return $6c9dd5248447d64a$export$aef51622e549b8b0($6c9dd5248447d64a$export$2060d2db72cce88f($6c9dd5248447d64a$export$aef51622e549b8b0($this), multiplier));
    } else if ($6c9dd5248447d64a$export$d0909a4f38b5c4d0(multiplier)) return $6c9dd5248447d64a$export$aef51622e549b8b0($6c9dd5248447d64a$export$2060d2db72cce88f($this, $6c9dd5248447d64a$export$aef51622e549b8b0(multiplier)));
    // If both longs are small, use float multiplication
    if ($6c9dd5248447d64a$export$9b050841a3a1b328($this, $6c9dd5248447d64a$var$TWO_PWR_24) && $6c9dd5248447d64a$export$9b050841a3a1b328(multiplier, $6c9dd5248447d64a$var$TWO_PWR_24)) return $6c9dd5248447d64a$export$7bbb4164c9a77bc2($6c9dd5248447d64a$export$a0a81dc3380ce7d3($this) * $6c9dd5248447d64a$export$a0a81dc3380ce7d3(multiplier), $this.unsigned);
    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.
    var a48 = $this.high >>> 16;
    var a32 = $this.high & 65535;
    var a16 = $this.low >>> 16;
    var a00 = $this.low & 65535;
    var b48 = multiplier.high >>> 16;
    var b32 = multiplier.high & 65535;
    var b16 = multiplier.low >>> 16;
    var b00 = multiplier.low & 65535;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 65535;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 65535;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 65535;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 65535;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 65535;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 65535;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 65535;
    return $6c9dd5248447d64a$export$af782817a0bb622d(c16 << 16 | c00, c48 << 16 | c32, $this.unsigned);
}
function $6c9dd5248447d64a$export$cd007d971a5a2143($this, divisor) {
    if (!$6c9dd5248447d64a$export$d8c61589c31c4718(divisor)) divisor = $6c9dd5248447d64a$export$5f36b26c3833b3ba(divisor);
    if ($6c9dd5248447d64a$export$c46ec7d82fb1f602(divisor)) throw Error('division by zero');
    // use wasm support if present
    if ($6c9dd5248447d64a$var$wasm) {
        // guard against signed division overflow: the largest
        // negative number / -1 would be 1 larger than the largest
        // positive number, due to two's complement.
        if (!$this.unsigned && $this.high === -2147483648 && divisor.low === -1 && divisor.high === -1) // be consistent with non-wasm code path
        return $this;
        var low = ($this.unsigned ? $6c9dd5248447d64a$var$wasm.div_u : $6c9dd5248447d64a$var$wasm.div_s)($this.low, $this.high, divisor.low, divisor.high);
        return $6c9dd5248447d64a$export$af782817a0bb622d(low, $6c9dd5248447d64a$var$wasm.get_high(), $this.unsigned);
    }
    if ($6c9dd5248447d64a$export$c46ec7d82fb1f602($this)) return $this.unsigned ? $6c9dd5248447d64a$export$e35e43f82f36d912 : $6c9dd5248447d64a$export$2a1795c9359f92b9;
    var approx, rem, res;
    if (!$this.unsigned) {
        // This section is only relevant for signed longs and is derived from the
        // closure library as a whole.
        if ($6c9dd5248447d64a$export$e9bab7fafb253603($this, $6c9dd5248447d64a$export$10e1f42189ea83da)) {
            if ($6c9dd5248447d64a$export$e9bab7fafb253603(divisor, $6c9dd5248447d64a$export$30f1bb5a4a4a5467) || $6c9dd5248447d64a$export$e9bab7fafb253603(divisor, $6c9dd5248447d64a$export$e5b31325dd05546c)) return $6c9dd5248447d64a$export$10e1f42189ea83da; // recall that -MIN_VALUE == MIN_VALUE
            else if ($6c9dd5248447d64a$export$e9bab7fafb253603(divisor, $6c9dd5248447d64a$export$10e1f42189ea83da)) return $6c9dd5248447d64a$export$30f1bb5a4a4a5467;
            else {
                // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
                var halfThis = $6c9dd5248447d64a$export$86c449e29266e58a($this, 1);
                approx = $6c9dd5248447d64a$export$f613292be21d0bc3($6c9dd5248447d64a$export$cd007d971a5a2143(halfThis, divisor), 1);
                if ($6c9dd5248447d64a$export$e9bab7fafb253603(approx, $6c9dd5248447d64a$export$2a1795c9359f92b9)) return $6c9dd5248447d64a$export$d0909a4f38b5c4d0(divisor) ? $6c9dd5248447d64a$export$30f1bb5a4a4a5467 : $6c9dd5248447d64a$export$e5b31325dd05546c;
                else {
                    rem = $6c9dd5248447d64a$export$4e2d2ead65e5f7e3($this, $6c9dd5248447d64a$export$2060d2db72cce88f(divisor, approx));
                    res = $6c9dd5248447d64a$export$e16d8520af44a096(approx, $6c9dd5248447d64a$export$cd007d971a5a2143(rem, divisor));
                    return res;
                }
            }
        } else if ($6c9dd5248447d64a$export$e9bab7fafb253603(divisor, $6c9dd5248447d64a$export$10e1f42189ea83da)) return $this.unsigned ? $6c9dd5248447d64a$export$e35e43f82f36d912 : $6c9dd5248447d64a$export$2a1795c9359f92b9;
        if ($6c9dd5248447d64a$export$d0909a4f38b5c4d0($this)) {
            if ($6c9dd5248447d64a$export$d0909a4f38b5c4d0(divisor)) return $6c9dd5248447d64a$export$cd007d971a5a2143($6c9dd5248447d64a$export$aef51622e549b8b0($this), $6c9dd5248447d64a$export$aef51622e549b8b0(divisor));
            return $6c9dd5248447d64a$export$aef51622e549b8b0($6c9dd5248447d64a$export$cd007d971a5a2143($6c9dd5248447d64a$export$aef51622e549b8b0($this), divisor));
        } else if ($6c9dd5248447d64a$export$d0909a4f38b5c4d0(divisor)) return $6c9dd5248447d64a$export$aef51622e549b8b0($6c9dd5248447d64a$export$cd007d971a5a2143($this, $6c9dd5248447d64a$export$aef51622e549b8b0(divisor)));
        res = $6c9dd5248447d64a$export$2a1795c9359f92b9;
    } else {
        // The algorithm below has not been made for unsigned longs. It's therefore
        // required to take special care of the MSB prior to running it.
        if (!divisor.unsigned) divisor = $6c9dd5248447d64a$export$908ef9a84e4ca2d4(divisor);
        if ($6c9dd5248447d64a$export$f517ea36c68d4644(divisor, $this)) return $6c9dd5248447d64a$export$e35e43f82f36d912;
        if ($6c9dd5248447d64a$export$f517ea36c68d4644(divisor, $6c9dd5248447d64a$export$fd2d1dabe2e60497($this, 1))) return $6c9dd5248447d64a$export$789f666db4213815;
        res = $6c9dd5248447d64a$export$e35e43f82f36d912;
    }
    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    rem = $this;
    while($6c9dd5248447d64a$export$1d972cf4acc123bd(rem, divisor)){
        // Approximate the result of division. This may be a little greater or
        // smaller than the actual value.
        approx = Math.max(1, Math.floor($6c9dd5248447d64a$export$a0a81dc3380ce7d3(rem) / $6c9dd5248447d64a$export$a0a81dc3380ce7d3(divisor)));
        // We will tweak the approximate result by changing it in the 48-th digit or
        // the smallest non-fractional digit, whichever is larger.
        var log2 = Math.ceil(Math.log(approx) / Math.LN2), delta = log2 <= 48 ? 1 : $6c9dd5248447d64a$var$pow_dbl(2, log2 - 48), // Decrease the approximation until it is smaller than the remainder.  Note
        // that if it is too large, the product overflows and is negative.
        approxRes = $6c9dd5248447d64a$export$7bbb4164c9a77bc2(approx), approxRem = $6c9dd5248447d64a$export$2060d2db72cce88f(approxRes, divisor);
        while($6c9dd5248447d64a$export$d0909a4f38b5c4d0(approxRem) || $6c9dd5248447d64a$export$f517ea36c68d4644(approxRem, rem)){
            approx -= delta;
            approxRes = $6c9dd5248447d64a$export$7bbb4164c9a77bc2(approx, $this.unsigned);
            approxRem = $6c9dd5248447d64a$export$2060d2db72cce88f(approxRes, divisor);
        }
        // We know the answer can't be zero... and actually, zero would cause
        // infinite recursion since we would make no progress.
        if ($6c9dd5248447d64a$export$c46ec7d82fb1f602(approxRes)) approxRes = $6c9dd5248447d64a$export$30f1bb5a4a4a5467;
        res = $6c9dd5248447d64a$export$e16d8520af44a096(res, approxRes);
        rem = $6c9dd5248447d64a$export$4e2d2ead65e5f7e3(rem, approxRem);
    }
    return res;
}
function $6c9dd5248447d64a$export$ba467bec01d66def($this, divisor) {
    if (!$6c9dd5248447d64a$export$d8c61589c31c4718(divisor)) divisor = $6c9dd5248447d64a$export$5f36b26c3833b3ba(divisor);
    // use wasm support if present
    if ($6c9dd5248447d64a$var$wasm) {
        var low = ($this.unsigned ? $6c9dd5248447d64a$var$wasm.rem_u : $6c9dd5248447d64a$var$wasm.rem_s)($this.low, $this.high, divisor.low, divisor.high);
        return $6c9dd5248447d64a$export$af782817a0bb622d(low, $6c9dd5248447d64a$var$wasm.get_high(), $this.unsigned);
    }
    return $6c9dd5248447d64a$export$4e2d2ead65e5f7e3($this, $6c9dd5248447d64a$export$2060d2db72cce88f($6c9dd5248447d64a$export$cd007d971a5a2143($this, divisor), divisor));
}
function $6c9dd5248447d64a$export$6003a5f097c73977($this) {
    return $6c9dd5248447d64a$export$af782817a0bb622d(~$this.low, ~$this.high, $this.unsigned);
}
function $6c9dd5248447d64a$export$21c0ac7fe1cef1b8($this, other) {
    if (!$6c9dd5248447d64a$export$d8c61589c31c4718(other)) other = $6c9dd5248447d64a$export$5f36b26c3833b3ba(other);
    return $6c9dd5248447d64a$export$af782817a0bb622d($this.low & other.low, $this.high & other.high, $this.unsigned);
}
function $6c9dd5248447d64a$export$252bb8b3bbdf6749($this, other) {
    if (!$6c9dd5248447d64a$export$d8c61589c31c4718(other)) other = $6c9dd5248447d64a$export$5f36b26c3833b3ba(other);
    return $6c9dd5248447d64a$export$af782817a0bb622d($this.low | other.low, $this.high | other.high, $this.unsigned);
}
function $6c9dd5248447d64a$export$6444ef5cd411280c($this, other) {
    if (!$6c9dd5248447d64a$export$d8c61589c31c4718(other)) other = $6c9dd5248447d64a$export$5f36b26c3833b3ba(other);
    return $6c9dd5248447d64a$export$af782817a0bb622d($this.low ^ other.low, $this.high ^ other.high, $this.unsigned);
}
function $6c9dd5248447d64a$export$f613292be21d0bc3($this, numBits) {
    if ($6c9dd5248447d64a$export$d8c61589c31c4718(numBits)) numBits = $6c9dd5248447d64a$export$e7a1baa2fae31f0f(numBits);
    if ((numBits &= 63) === 0) return $this;
    else if (numBits < 32) return $6c9dd5248447d64a$export$af782817a0bb622d($this.low << numBits, $this.high << numBits | $this.low >>> 32 - numBits, $this.unsigned);
    else return $6c9dd5248447d64a$export$af782817a0bb622d(0, $this.low << numBits - 32, $this.unsigned);
}
function $6c9dd5248447d64a$export$86c449e29266e58a($this, numBits) {
    if ($6c9dd5248447d64a$export$d8c61589c31c4718(numBits)) numBits = $6c9dd5248447d64a$export$e7a1baa2fae31f0f(numBits);
    if ((numBits &= 63) === 0) return $this;
    else if (numBits < 32) return $6c9dd5248447d64a$export$af782817a0bb622d($this.low >>> numBits | $this.high << 32 - numBits, $this.high >> numBits, $this.unsigned);
    else return $6c9dd5248447d64a$export$af782817a0bb622d($this.high >> numBits - 32, $this.high >= 0 ? 0 : -1, $this.unsigned);
}
function $6c9dd5248447d64a$export$fd2d1dabe2e60497($this, numBits) {
    if ($6c9dd5248447d64a$export$d8c61589c31c4718(numBits)) numBits = $6c9dd5248447d64a$export$e7a1baa2fae31f0f(numBits);
    numBits &= 63;
    if (numBits === 0) return $this;
    else {
        var high = $this.high;
        if (numBits < 32) {
            var low = $this.low;
            return $6c9dd5248447d64a$export$af782817a0bb622d(low >>> numBits | high << 32 - numBits, high >>> numBits, $this.unsigned);
        } else if (numBits === 32) return $6c9dd5248447d64a$export$af782817a0bb622d(high, 0, $this.unsigned);
        else return $6c9dd5248447d64a$export$af782817a0bb622d(high >>> numBits - 32, 0, $this.unsigned);
    }
}
const $6c9dd5248447d64a$export$c5ff7c6cb12f5f46 = function rotateLeft(numBits) {
    var b;
    if ($6c9dd5248447d64a$export$d8c61589c31c4718(numBits)) numBits = numBits.toInt();
    if ((numBits &= 63) === 0) return this;
    if (numBits === 32) return $6c9dd5248447d64a$export$af782817a0bb622d(this.high, this.low, this.unsigned);
    if (numBits < 32) {
        b = 32 - numBits;
        return $6c9dd5248447d64a$export$af782817a0bb622d(this.low << numBits | this.high >>> b, this.high << numBits | this.low >>> b, this.unsigned);
    }
    numBits -= 32;
    b = 32 - numBits;
    return $6c9dd5248447d64a$export$af782817a0bb622d(this.high << numBits | this.low >>> b, this.low << numBits | this.high >>> b, this.unsigned);
};
const $6c9dd5248447d64a$export$b8ff662d454dbe46 = function rotateRight(numBits) {
    var b;
    if ($6c9dd5248447d64a$export$d8c61589c31c4718(numBits)) numBits = numBits.toInt();
    if ((numBits &= 63) === 0) return this;
    if (numBits === 32) return $6c9dd5248447d64a$export$af782817a0bb622d(this.high, this.low, this.unsigned);
    if (numBits < 32) {
        b = 32 - numBits;
        return $6c9dd5248447d64a$export$af782817a0bb622d(this.high << b | this.low >>> numBits, this.low << b | this.high >>> numBits, this.unsigned);
    }
    numBits -= 32;
    b = 32 - numBits;
    return $6c9dd5248447d64a$export$af782817a0bb622d(this.low << b | this.high >>> numBits, this.high << b | this.low >>> numBits, this.unsigned);
};
function $6c9dd5248447d64a$export$505ae59dc97b3d08($this) {
    if (!$this.unsigned) return $this;
    return $6c9dd5248447d64a$export$af782817a0bb622d($this.low, $this.high, false);
}
function $6c9dd5248447d64a$export$908ef9a84e4ca2d4($this) {
    if ($this.unsigned) return $this;
    return $6c9dd5248447d64a$export$af782817a0bb622d($this.low, $this.high, true);
}
function $6c9dd5248447d64a$export$30a71edf0753ed6b($this, le) {
    return le ? $6c9dd5248447d64a$export$4e5655041aced948($this) : $6c9dd5248447d64a$export$7fca740e0e0e35ff($this);
}
function $6c9dd5248447d64a$export$4e5655041aced948($this) {
    var hi = $this.high, lo = $this.low;
    return [
        lo & 255,
        lo >>> 8 & 255,
        lo >>> 16 & 255,
        lo >>> 24,
        hi & 255,
        hi >>> 8 & 255,
        hi >>> 16 & 255,
        hi >>> 24
    ];
}
function $6c9dd5248447d64a$export$7fca740e0e0e35ff($this) {
    var hi = $this.high, lo = $this.low;
    return [
        hi >>> 24,
        hi >>> 16 & 255,
        hi >>> 8 & 255,
        hi & 255,
        lo >>> 24,
        lo >>> 16 & 255,
        lo >>> 8 & 255,
        lo & 255
    ];
}
function $6c9dd5248447d64a$export$de2da3025c30316c(bytes, unsigned, le) {
    return le ? $6c9dd5248447d64a$export$c1b063d566627ce9(bytes, unsigned) : $6c9dd5248447d64a$export$3a3e04395cb3b0a4(bytes, unsigned);
}
function $6c9dd5248447d64a$export$c1b063d566627ce9(bytes, unsigned) {
    return new $6c9dd5248447d64a$export$12ac1d26449d9c2e(bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24, bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24, unsigned);
}
function $6c9dd5248447d64a$export$3a3e04395cb3b0a4(bytes, unsigned) {
    return new $6c9dd5248447d64a$export$12ac1d26449d9c2e(bytes[4] << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7], bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], unsigned);
}


var $9e7becb4b036935b$export$2e2bcd8739ae039 = $6c9dd5248447d64a$exports.Long;
const $9e7becb4b036935b$export$1a6223d840786ec0 = $6c9dd5248447d64a$exports.ZERO;
const $9e7becb4b036935b$export$ae43249cd38c8649 = $6c9dd5248447d64a$exports.ONE;
const $9e7becb4b036935b$export$a5fb1fdca49990a = $6c9dd5248447d64a$exports.add;
const $9e7becb4b036935b$export$1ba572a54983744c = $6c9dd5248447d64a$exports.subtract;
const $9e7becb4b036935b$export$bef948e98114a357 = $6c9dd5248447d64a$exports.multiply;
const $9e7becb4b036935b$export$a6e41fbebc04a9a6 = $6c9dd5248447d64a$exports.divide;
const $9e7becb4b036935b$export$ded19a969d94df2c = $6c9dd5248447d64a$exports.modulo;
const $9e7becb4b036935b$export$816012df0c0b827b = $6c9dd5248447d64a$exports.negate;
const $9e7becb4b036935b$export$db0cfad3fbfda1ec = $6c9dd5248447d64a$exports.shiftLeft;
const $9e7becb4b036935b$export$ac7ec3136e34a438 = $6c9dd5248447d64a$exports.shiftRight;
const $9e7becb4b036935b$export$acf92122e8147bcc = $6c9dd5248447d64a$exports.shiftRightUnsigned;
const $9e7becb4b036935b$export$63100fead1d420ec = $6c9dd5248447d64a$exports.and;
const $9e7becb4b036935b$export$3b31a93857920c35 = $6c9dd5248447d64a$exports.or;
const $9e7becb4b036935b$export$c0fdf16846965bbb = $6c9dd5248447d64a$exports.xor;
const $9e7becb4b036935b$export$67b770e7c3b07aa3 = $6c9dd5248447d64a$exports.not;
const $9e7becb4b036935b$export$8a328cfc4fb13f5a = $6c9dd5248447d64a$exports.lessThan;
const $9e7becb4b036935b$export$6b30a4ddd4d0a923 = $6c9dd5248447d64a$exports.lessThanOrEqual;
const $9e7becb4b036935b$export$3a91b96ca595f805 = $6c9dd5248447d64a$exports.greaterThan;
const $9e7becb4b036935b$export$bf572eb710c3cf1f = $6c9dd5248447d64a$exports.greaterThanOrEqual;
const $9e7becb4b036935b$export$9b1d5575afd83331 = $6c9dd5248447d64a$exports.equals;
const $9e7becb4b036935b$export$fabc92498ab6f0b9 = $6c9dd5248447d64a$exports.notEquals;
const $9e7becb4b036935b$export$e9bab7fafb253603 = $6c9dd5248447d64a$exports.equals;
const $9e7becb4b036935b$export$398604a469f7de9a = $6c9dd5248447d64a$exports.compare;
const $9e7becb4b036935b$export$62ffe363f1b08494 = $6c9dd5248447d64a$exports.fromInt;
const $9e7becb4b036935b$export$af782817a0bb622d = $6c9dd5248447d64a$exports.fromBits;
const $9e7becb4b036935b$export$de2da3025c30316c = $6c9dd5248447d64a$exports.fromBytes;
const $9e7becb4b036935b$export$7bbb4164c9a77bc2 = $6c9dd5248447d64a$exports.fromNumber;
const $9e7becb4b036935b$export$3004f64547af360e = $6c9dd5248447d64a$exports.fromString;
const $9e7becb4b036935b$export$5f36b26c3833b3ba = $6c9dd5248447d64a$exports.fromValue;
const $9e7becb4b036935b$export$e7a1baa2fae31f0f = $6c9dd5248447d64a$exports.toInt;
const $9e7becb4b036935b$export$30a71edf0753ed6b = $6c9dd5248447d64a$exports.toBytes;
const $9e7becb4b036935b$export$a0a81dc3380ce7d3 = $6c9dd5248447d64a$exports.toNumber;
const $9e7becb4b036935b$export$f84e8e69fd4488a5 = $6c9dd5248447d64a$exports.toString;
const $9e7becb4b036935b$export$4a10214d6ebc19b0 = $6c9dd5248447d64a$exports.getLowBits;
const $9e7becb4b036935b$export$c8eeef792e5e2eee = $6c9dd5248447d64a$exports.getHighBits;
const $9e7becb4b036935b$export$4c488f0e2ac21b03 = $6c9dd5248447d64a$exports.getLowBitsUnsigned;
const $9e7becb4b036935b$export$7a2febf4c9a31fb2 = $6c9dd5248447d64a$exports.getHighBitsUnsigned;
function $9e7becb4b036935b$var$getMaxValue(unsigned, radix, isNegative) {
    switch(radix){
        case 2:
            return unsigned ? "1111111111111111111111111111111111111111111111111111111111111111" : isNegative ? "1000000000000000000000000000000000000000000000000000000000000000" : "111111111111111111111111111111111111111111111111111111111111111";
        case 8:
            return unsigned ? "1777777777777777777777" : isNegative ? "1000000000000000000000" : "777777777777777777777";
        case 10:
            return unsigned ? "18446744073709551615" : isNegative ? "9223372036854775808" : "9223372036854775807";
        case 16:
            return unsigned ? "FFFFFFFFFFFFFFFF" : isNegative ? "8000000000000000" : "7FFFFFFFFFFFFFFF";
        default:
            throw new Error("Invalid radix.");
    }
}
function $9e7becb4b036935b$export$2335f513bbd82c6d(x) {
    if (!x.unsigned && $6c9dd5248447d64a$exports.isNegative(x)) return $9e7becb4b036935b$export$816012df0c0b827b(x);
    else return x;
}
function $9e7becb4b036935b$export$ee060913cffc652(value, unsigned, kind) {
    let x = value;
    let xh = 0;
    switch(kind){
        case 0:
            x = value << 24 >> 24;
            xh = x;
            break;
        case 4:
            x = value << 24 >>> 24;
            break;
        case 1:
            x = value << 16 >> 16;
            xh = x;
            break;
        case 5:
            x = value << 16 >>> 16;
            break;
        case 2:
            x = value >> 0;
            xh = x;
            break;
        case 6:
            x = value >>> 0;
            break;
    }
    return $6c9dd5248447d64a$exports.fromBits(x, xh >> 31, unsigned);
}
function $9e7becb4b036935b$export$98e6a39c04603d36(str, style, unsigned, _bitsize, radix) {
    const res = $4809551403a912ed$export$1ea939691cdc45b8(str, style, radix);
    if (res != null) {
        const lessOrEqual = (x, y)=>{
            const len = Math.max(x.length, y.length);
            return x.padStart(len, "0") <= y.padStart(len, "0");
        };
        const isNegative = res.sign === "-";
        const maxValue = $9e7becb4b036935b$var$getMaxValue(unsigned || res.radix !== 10, res.radix, isNegative);
        if (lessOrEqual(res.digits.toUpperCase(), maxValue)) {
            str = isNegative ? res.sign + res.digits : res.digits;
            return $6c9dd5248447d64a$exports.fromString(str, unsigned, res.radix);
        }
    }
    throw new Error("Input string was not in a correct format.");
}
function $9e7becb4b036935b$export$468ff95b83d315e5(str, style, unsigned, bitsize, defValue) {
    try {
        defValue.contents = $9e7becb4b036935b$export$98e6a39c04603d36(str, style, unsigned, bitsize);
        return true;
    } catch (_a) {
        return false;
    }
}
function $9e7becb4b036935b$export$b04aee43a70c325e(ms, offset) {
    return $9e7becb4b036935b$export$bef948e98114a357($9e7becb4b036935b$export$a5fb1fdca49990a($9e7becb4b036935b$export$a5fb1fdca49990a($6c9dd5248447d64a$exports.fromNumber(ms), 62135596800000), offset), 10000);
}
function $9e7becb4b036935b$export$2044bef34fee81ea(ticks) {
    return $6c9dd5248447d64a$exports.toNumber($9e7becb4b036935b$export$1ba572a54983744c($9e7becb4b036935b$export$a6e41fbebc04a9a6(ticks, 10000), 62135596800000));
} // export function makeRangeStepFunction(step: Long, last: Long, unsigned: boolean) {
 //   const stepComparedWithZero = LongLib.compare(step, unsigned ? LongLib.UZERO : LongLib.ZERO);
 //   if (stepComparedWithZero === 0) {
 //     throw new Error("The step of a range cannot be zero");
 //   }
 //   const stepGreaterThanZero = stepComparedWithZero > 0;
 //   return (x: Long) => {
 //     const comparedWithLast = LongLib.compare(x, last);
 //     if ((stepGreaterThanZero && comparedWithLast <= 0)
 //       || (!stepGreaterThanZero && comparedWithLast >= 0)) {
 //       return [x, op_Addition(x, step)];
 //     } else {
 //       return undefined;
 //     }
 //   };
 // }


class $64327df6a4d665f3$export$5da6bb266b244b1f {
    constructor(declaringType, tag, name3, fields2){
        this.declaringType = declaringType;
        this.tag = tag;
        this.name = name3;
        this.fields = fields2;
    }
}
class $64327df6a4d665f3$export$49bbbea0e28f81da {
    constructor(name1, parameters, returnType1){
        this.name = name1;
        this.parameters = parameters;
        this.returnType = returnType1;
    }
}
class $64327df6a4d665f3$export$f0c1fe746ce4bb1e {
    constructor(fullname1, generics1, construct1, parent1, fields1, cases1, enumCases1){
        this.fullname = fullname1;
        this.generics = generics1;
        this.construct = construct1;
        this.parent = parent1;
        this.fields = fields1;
        this.cases = cases1;
        this.enumCases = enumCases1;
    }
    toString() {
        return $64327df6a4d665f3$export$1d6cfa7493842c29(this);
    }
    GetHashCode() {
        return $64327df6a4d665f3$export$c14f61804029af13(this);
    }
    Equals(other) {
        return $64327df6a4d665f3$export$e9bab7fafb253603(this, other);
    }
}
class $64327df6a4d665f3$export$e2a012deca8e0eb5 extends $64327df6a4d665f3$export$f0c1fe746ce4bb1e {
    constructor(name2){
        super(name2);
    }
}
function $64327df6a4d665f3$export$18737d7a203fc740(t) {
    return t.generics != null ? t.generics : [];
}
function $64327df6a4d665f3$export$c14f61804029af13(t) {
    const fullnameHash = $4261fbb19e0b4aac$export$b9b095ec8c02760b(t.fullname);
    const genHashes = $64327df6a4d665f3$export$18737d7a203fc740(t).map($64327df6a4d665f3$export$c14f61804029af13);
    return $4261fbb19e0b4aac$export$4a6567c520a28ea3([
        fullnameHash,
        ...genHashes
    ]);
}
function $64327df6a4d665f3$export$e9bab7fafb253603(t1, t2) {
    if (t1.fullname === "") return t2.fullname === "" && $4261fbb19e0b4aac$export$b9a64d2e4daf3c9f($64327df6a4d665f3$export$b0ab498daed3dd7f(t1), $64327df6a4d665f3$export$b0ab498daed3dd7f(t2), ([k1, v1], [k2, v2])=>k1 === k2 && $64327df6a4d665f3$export$e9bab7fafb253603(v1, v2)
    );
    else return t1.fullname === t2.fullname && $4261fbb19e0b4aac$export$b9a64d2e4daf3c9f($64327df6a4d665f3$export$18737d7a203fc740(t1), $64327df6a4d665f3$export$18737d7a203fc740(t2), $64327df6a4d665f3$export$e9bab7fafb253603);
}
function $64327df6a4d665f3$export$8547d5acd31924e(fullname, generics, construct, parent) {
    return new $64327df6a4d665f3$export$f0c1fe746ce4bb1e(fullname, generics, construct, parent);
}
function $64327df6a4d665f3$export$d341dea990ee4af6(fullname, generics, construct, fields) {
    return new $64327df6a4d665f3$export$f0c1fe746ce4bb1e(fullname, generics, construct, undefined, fields);
}
function $64327df6a4d665f3$export$4bca6dc9d780d464(...fields) {
    return new $64327df6a4d665f3$export$f0c1fe746ce4bb1e("", undefined, undefined, undefined, ()=>fields
    );
}
function $64327df6a4d665f3$export$1ae0dd948e267c6b(fullname, generics, construct, cases) {
    const t = new $64327df6a4d665f3$export$f0c1fe746ce4bb1e(fullname, generics, construct, undefined, undefined, ()=>{
        const caseNames = construct.prototype.cases();
        return cases().map((fields, i)=>new $64327df6a4d665f3$export$5da6bb266b244b1f(t, i, caseNames[i], fields)
        );
    });
    return t;
}
function $64327df6a4d665f3$export$2163aa004254c8ff(...generics) {
    return new $64327df6a4d665f3$export$f0c1fe746ce4bb1e("System.Tuple`" + generics.length, generics);
}
function $64327df6a4d665f3$export$7740535942dd94ab(...generics) {
    return new $64327df6a4d665f3$export$f0c1fe746ce4bb1e("System.Func`" + generics.length, generics);
}
function $64327df6a4d665f3$export$14857d36df600d23(argType, returnType) {
    return new $64327df6a4d665f3$export$f0c1fe746ce4bb1e("Microsoft.FSharp.Core.FSharpFunc`2", [
        argType,
        returnType
    ]);
}
function $64327df6a4d665f3$export$a0bfd80c70f2d46b(generic) {
    return new $64327df6a4d665f3$export$f0c1fe746ce4bb1e("Microsoft.FSharp.Core.FSharpOption`1", [
        generic
    ]);
}
function $64327df6a4d665f3$export$5fe717259b8d6105(generic) {
    return new $64327df6a4d665f3$export$f0c1fe746ce4bb1e("Microsoft.FSharp.Collections.FSharpList`1", [
        generic
    ]);
}
function $64327df6a4d665f3$export$9242f430c61b672d(generic) {
    return new $64327df6a4d665f3$export$f0c1fe746ce4bb1e("[]", [
        generic
    ]);
}
function $64327df6a4d665f3$export$3120ec9ec286ab54(fullname, underlyingType, enumCases) {
    return new $64327df6a4d665f3$export$f0c1fe746ce4bb1e(fullname, [
        underlyingType
    ], undefined, undefined, undefined, undefined, enumCases);
}
function $64327df6a4d665f3$export$cfd970c638408302(fullname) {
    return new $64327df6a4d665f3$export$f0c1fe746ce4bb1e(fullname);
}
function $64327df6a4d665f3$export$6041990b44031fc4(name) {
    return new $64327df6a4d665f3$export$e2a012deca8e0eb5(name);
}
const $64327df6a4d665f3$export$e63caa28a27bc62e = new $64327df6a4d665f3$export$f0c1fe746ce4bb1e("System.Object");
const $64327df6a4d665f3$export$ffcad4a7b72710d8 = new $64327df6a4d665f3$export$f0c1fe746ce4bb1e("Microsoft.FSharp.Core.Unit");
const $64327df6a4d665f3$export$4b19e09c28c31d09 = new $64327df6a4d665f3$export$f0c1fe746ce4bb1e("System.Char");
const $64327df6a4d665f3$export$36bbd56a39d3f734 = new $64327df6a4d665f3$export$f0c1fe746ce4bb1e("System.String");
const $64327df6a4d665f3$export$4b2f4351dd8f4737 = new $64327df6a4d665f3$export$f0c1fe746ce4bb1e("System.Boolean");
const $64327df6a4d665f3$export$e123199e7dc4cbf4 = new $64327df6a4d665f3$export$f0c1fe746ce4bb1e("System.SByte");
const $64327df6a4d665f3$export$c006cc52c5c39616 = new $64327df6a4d665f3$export$f0c1fe746ce4bb1e("System.Byte");
const $64327df6a4d665f3$export$482d438fe95b1d2b = new $64327df6a4d665f3$export$f0c1fe746ce4bb1e("System.Int16");
const $64327df6a4d665f3$export$d96ab529e3d5b757 = new $64327df6a4d665f3$export$f0c1fe746ce4bb1e("System.UInt16");
const $64327df6a4d665f3$export$d5481a1dd0e3648a = new $64327df6a4d665f3$export$f0c1fe746ce4bb1e("System.Int32");
const $64327df6a4d665f3$export$173d14c9e9e1a539 = new $64327df6a4d665f3$export$f0c1fe746ce4bb1e("System.UInt32");
const $64327df6a4d665f3$export$b51642c3501712df = new $64327df6a4d665f3$export$f0c1fe746ce4bb1e("System.Single");
const $64327df6a4d665f3$export$8ff85e1c626cc255 = new $64327df6a4d665f3$export$f0c1fe746ce4bb1e("System.Double");
const $64327df6a4d665f3$export$71595c79c7738f26 = new $64327df6a4d665f3$export$f0c1fe746ce4bb1e("System.Decimal");
function $64327df6a4d665f3$export$a8ff84c12d48cfa6(info) {
    if (Array.isArray(info)) return info[0];
    else if (info instanceof $64327df6a4d665f3$export$f0c1fe746ce4bb1e) {
        const elemType = $64327df6a4d665f3$export$cc56411ddc6ec102(info);
        if (elemType != null) return $64327df6a4d665f3$export$a8ff84c12d48cfa6(elemType) + "[]";
        else {
            const i = info.fullname.lastIndexOf(".");
            return i === -1 ? info.fullname : info.fullname.substr(i + 1);
        }
    } else return info.name;
}
function $64327df6a4d665f3$export$1d6cfa7493842c29(t) {
    const elemType = $64327df6a4d665f3$export$cc56411ddc6ec102(t);
    if (elemType != null) return $64327df6a4d665f3$export$1d6cfa7493842c29(elemType) + "[]";
    else if (t.generics == null || t.generics.length === 0) return t.fullname;
    else return t.fullname + "[" + t.generics.map((x)=>$64327df6a4d665f3$export$1d6cfa7493842c29(x)
    ).join(",") + "]";
}
function $64327df6a4d665f3$export$76a88f7de6507443(t) {
    const elemType = $64327df6a4d665f3$export$cc56411ddc6ec102(t);
    if (elemType != null) return $64327df6a4d665f3$export$76a88f7de6507443(elemType);
    else {
        const i = t.fullname.lastIndexOf(".");
        return i === -1 ? "" : t.fullname.substr(0, i);
    }
}
function $64327df6a4d665f3$export$43bee75e5e14138e(t) {
    return $64327df6a4d665f3$export$cc56411ddc6ec102(t) != null;
}
function $64327df6a4d665f3$export$cc56411ddc6ec102(t) {
    var _a;
    return t.fullname === "[]" && ((_a = t.generics) === null || _a === void 0 ? void 0 : _a.length) === 1 ? t.generics[0] : undefined;
}
function $64327df6a4d665f3$export$6fbcf00b2c9d37c4(t) {
    return t.generics != null && t.generics.length > 0;
}
function $64327df6a4d665f3$export$9bc22e80ea04e051(t) {
    return t instanceof $64327df6a4d665f3$export$e2a012deca8e0eb5;
}
function $64327df6a4d665f3$export$9fc8c979231a883(t) {
    return t.enumCases != null && t.enumCases.length > 0;
}
function $64327df6a4d665f3$export$b0cce8e3db537309(t1, t2) {
    return t1.parent != null && (t1.parent.Equals(t2) || $64327df6a4d665f3$export$b0cce8e3db537309(t1.parent, t2));
}
function $64327df6a4d665f3$var$isErasedToNumber(t) {
    return $64327df6a4d665f3$export$9fc8c979231a883(t) || [
        $64327df6a4d665f3$export$e123199e7dc4cbf4.fullname,
        $64327df6a4d665f3$export$c006cc52c5c39616.fullname,
        $64327df6a4d665f3$export$482d438fe95b1d2b.fullname,
        $64327df6a4d665f3$export$d96ab529e3d5b757.fullname,
        $64327df6a4d665f3$export$d5481a1dd0e3648a.fullname,
        $64327df6a4d665f3$export$173d14c9e9e1a539.fullname,
        $64327df6a4d665f3$export$b51642c3501712df.fullname,
        $64327df6a4d665f3$export$8ff85e1c626cc255.fullname, 
    ].includes(t.fullname);
}
function $64327df6a4d665f3$export$142173e695a3a13(t, o) {
    switch(typeof o){
        case "boolean":
            return t.fullname === $64327df6a4d665f3$export$4b2f4351dd8f4737.fullname;
        case "string":
            return t.fullname === $64327df6a4d665f3$export$36bbd56a39d3f734.fullname;
        case "function":
            return $64327df6a4d665f3$export$f6e2535fb5126e54(t);
        case "number":
            return $64327df6a4d665f3$var$isErasedToNumber(t);
        default:
            return t.construct != null && o instanceof t.construct;
    }
}
function $64327df6a4d665f3$export$615e91928d222e7d(t) {
    return t.generics == null ? t : new $64327df6a4d665f3$export$f0c1fe746ce4bb1e(t.fullname, t.generics.map(()=>$64327df6a4d665f3$export$e63caa28a27bc62e
    ));
}
function $64327df6a4d665f3$export$1e17737c7179d31d(t) {
    var _a;
    return (_a = t.generics) === null || _a === void 0 ? void 0 : _a[0];
}
function $64327df6a4d665f3$export$70a5d58ec00f3c11(t) {
    if ($64327df6a4d665f3$export$9fc8c979231a883(t) && t.enumCases != null) return t.enumCases.map((kv)=>kv[1]
    );
    else throw new Error(`${t.fullname} is not an enum type`);
}
function $64327df6a4d665f3$export$cd2722bb53d0bea8(t) {
    if ($64327df6a4d665f3$export$9fc8c979231a883(t) && t.enumCases != null) return t.enumCases.map((kv)=>kv[0]
    );
    else throw new Error(`${t.fullname} is not an enum type`);
}
function $64327df6a4d665f3$var$getEnumCase(t, v) {
    if (t.enumCases != null) {
        if (typeof v === "string") {
            for (const kv of t.enumCases){
                if (kv[0] === v) return kv;
            }
            throw new Error(`'${v}' was not found in ${t.fullname}`);
        } else {
            for (const kv of t.enumCases){
                if (kv[1] === v) return kv;
            }
            // .NET returns the number even if it doesn't match any of the cases
            return [
                "",
                v
            ];
        }
    } else throw new Error(`${t.fullname} is not an enum type`);
}
function $64327df6a4d665f3$export$b5de0eeb63903617(t, str) {
    // TODO: better int parsing here, parseInt ceils floats: "4.8" -> 4
    const value = parseInt(str, 10);
    return $64327df6a4d665f3$var$getEnumCase(t, isNaN(value) ? str : value)[1];
}
function $64327df6a4d665f3$export$5fc9b63d26bd9368(t, str, defValue) {
    try {
        defValue.contents = $64327df6a4d665f3$export$b5de0eeb63903617(t, str);
        return true;
    } catch (_a) {
        return false;
    }
}
function $64327df6a4d665f3$export$e1d90e20ad64402a(t, v) {
    return $64327df6a4d665f3$var$getEnumCase(t, v)[0];
}
function $64327df6a4d665f3$export$2190ecbdbd91c18b(t, v) {
    try {
        const kv = $64327df6a4d665f3$var$getEnumCase(t, v);
        return kv[0] != null && kv[0] !== "";
    } catch (_a) {
    // supress error
    }
    return false;
}
function $64327df6a4d665f3$export$9842ee3eadac7211(t) {
    if (t.cases != null) return t.cases();
    else throw new Error(`${t.fullname} is not an F# union type`);
}
function $64327df6a4d665f3$export$b0ab498daed3dd7f(t) {
    if (t.fields != null) return t.fields();
    else throw new Error(`${t.fullname} is not an F# record type`);
}
function $64327df6a4d665f3$export$1f28650e18437653(t) {
    if ($64327df6a4d665f3$export$62b73b2f8f623580(t) && t.generics != null) return t.generics;
    else throw new Error(`${t.fullname} is not a tuple type`);
}
function $64327df6a4d665f3$export$5db3156b25539904(t) {
    if ($64327df6a4d665f3$export$f6e2535fb5126e54(t) && t.generics != null) {
        const gen = t.generics;
        return [
            gen[0],
            gen[1]
        ];
    } else throw new Error(`${t.fullname} is not an F# function type`);
}
function $64327df6a4d665f3$export$99587fd450e9f2d(t) {
    return t instanceof $64327df6a4d665f3$export$f0c1fe746ce4bb1e ? t.cases != null : t instanceof $52d096336d1d74e9$export$6cbb4f8fa0c4c986;
}
function $64327df6a4d665f3$export$6ba840931da50680(t) {
    return t instanceof $64327df6a4d665f3$export$f0c1fe746ce4bb1e ? t.fields != null : t instanceof $52d096336d1d74e9$export$5b163c6d120341e7;
}
function $64327df6a4d665f3$export$62b73b2f8f623580(t) {
    return t.fullname.startsWith("System.Tuple");
}
function $64327df6a4d665f3$export$f6e2535fb5126e54(t) {
    return t.fullname === "Microsoft.FSharp.Core.FSharpFunc`2";
}
function $64327df6a4d665f3$export$191ac0eced82ce46(v, t) {
    const cases = $64327df6a4d665f3$export$9842ee3eadac7211(t);
    const case_ = cases[v.tag];
    if (case_ == null) throw new Error(`Cannot find case ${v.name} in union type`);
    return [
        case_,
        v.fields
    ];
}
function $64327df6a4d665f3$export$309400f473e3880b(uci) {
    return uci.fields == null ? [] : uci.fields;
}
function $64327df6a4d665f3$export$9e3a3700ce0b0b89(v) {
    return Object.keys(v).map((k)=>v[k]
    );
}
function $64327df6a4d665f3$export$ba212be7256ab0fb(v, field) {
    return v[field[0]];
}
function $64327df6a4d665f3$export$6e8639fe0290f3b5(v) {
    return v;
}
function $64327df6a4d665f3$export$1a60394d1cea06d(v, i) {
    return v[i];
}
function $64327df6a4d665f3$export$e56a6584f93e6957(uci, values) {
    const expectedLength = (uci.fields || []).length;
    if (values.length !== expectedLength) throw new Error(`Expected an array of length ${expectedLength} but got ${values.length}`);
    return uci.declaringType.construct != null ? new uci.declaringType.construct(uci.tag, ...values) : {
    };
}
function $64327df6a4d665f3$export$b58500a28530c18(t, values) {
    const fields = $64327df6a4d665f3$export$b0ab498daed3dd7f(t);
    if (fields.length !== values.length) throw new Error(`Expected an array of length ${fields.length} but got ${values.length}`);
    return t.construct != null ? new t.construct(...values) : fields.reduce((obj, [key, _t], i)=>{
        obj[key] = values[i];
        return obj;
    }, {
    });
}
function $64327df6a4d665f3$export$f3583c34ca02a326(values, _t) {
    return values;
}
function $64327df6a4d665f3$export$89fe0430e2244c8d(t, generics) {
    return new $64327df6a4d665f3$export$f0c1fe746ce4bb1e(t.fullname, generics, t.construct, t.parent, t.fields, t.cases);
}
function $64327df6a4d665f3$export$99152e8d49ca4e7d(t, consArgs) {
    // TODO: Check if consArgs length is same as t.construct?
    // (Arg types can still be different)
    if (typeof t.construct === "function") return new t.construct(...consArgs !== null && consArgs !== void 0 ? consArgs : []);
    else if ($64327df6a4d665f3$var$isErasedToNumber(t)) return 0;
    else switch(t.fullname){
        case $64327df6a4d665f3$export$e63caa28a27bc62e.fullname:
            return {
            };
        case $64327df6a4d665f3$export$4b2f4351dd8f4737.fullname:
            return false;
        case "System.Int64":
        case "System.UInt64":
            // typeof<int64> and typeof<uint64> get transformed to class_type("System.Int64")
            // and class_type("System.UInt64") respectively. Test for the name of the primitive type.
            return $9e7becb4b036935b$export$62ffe363f1b08494(0);
        case $64327df6a4d665f3$export$71595c79c7738f26.fullname:
            return new $3b91e95f3a4155cf$export$2e2bcd8739ae039(0);
        case $64327df6a4d665f3$export$4b19e09c28c31d09.fullname:
            // Even though char is a value type, it's erased to string, and Unchecked.defaultof<char> is null
            return null;
        default:
            throw new Error(`Cannot access constructor of ${t.fullname}`);
    }
}
function $64327df6a4d665f3$export$bf7199a9ebcb84a9(propertyInfo, v) {
    return v[propertyInfo[0]];
}
// Fable.Core.Reflection
function $64327df6a4d665f3$var$assertUnion(x) {
    if (!(x instanceof $52d096336d1d74e9$export$6cbb4f8fa0c4c986)) throw new Error(`Value is not an F# union type`);
}
function $64327df6a4d665f3$export$2687ce0d4702ff61(x) {
    $64327df6a4d665f3$var$assertUnion(x);
    return x.tag;
}
function $64327df6a4d665f3$export$b1398297ef8fc3ed(x) {
    $64327df6a4d665f3$var$assertUnion(x);
    return x.cases()[x.tag];
}
function $64327df6a4d665f3$export$d42e393b18dfe5d3(x) {
    $64327df6a4d665f3$var$assertUnion(x);
    return x.fields;
}


class $2c0e5be185a9291c$export$a7566b2ec63e8493 extends $52d096336d1d74e9$export$5b163c6d120341e7 {
    constructor(line, block){
        super();
        this.line = line;
        this.block = block;
    }
}
function $2c0e5be185a9291c$export$2323b948e94eb234() {
    return $64327df6a4d665f3$export$d341dea990ee4af6("Rewrap.CustomMarkers", [], $2c0e5be185a9291c$export$a7566b2ec63e8493, ()=>[
            [
                "line",
                $64327df6a4d665f3$export$36bbd56a39d3f734
            ],
            [
                "block",
                $64327df6a4d665f3$export$2163aa004254c8ff($64327df6a4d665f3$export$36bbd56a39d3f734, $64327df6a4d665f3$export$36bbd56a39d3f734)
            ]
        ]
    );
}
class $2c0e5be185a9291c$export$b6afa8811b7e644e extends $52d096336d1d74e9$export$5b163c6d120341e7 {
    constructor(language, path, getMarkers){
        super();
        this.language = language;
        this.path = path;
        this.getMarkers = getMarkers;
    }
}
function $2c0e5be185a9291c$export$63730b4b3ecce5f1() {
    return $64327df6a4d665f3$export$d341dea990ee4af6("Rewrap.File", [], $2c0e5be185a9291c$export$b6afa8811b7e644e, ()=>[
            [
                "language",
                $64327df6a4d665f3$export$36bbd56a39d3f734
            ],
            [
                "path",
                $64327df6a4d665f3$export$36bbd56a39d3f734
            ],
            [
                "getMarkers",
                $64327df6a4d665f3$export$7740535942dd94ab($2c0e5be185a9291c$export$2323b948e94eb234())
            ]
        ]
    );
}
class $2c0e5be185a9291c$export$c72f6eaae7b9adff extends $52d096336d1d74e9$export$5b163c6d120341e7 {
    constructor(column, tabWidth, doubleSentenceSpacing, reformat, wholeComment){
        super();
        this.column = column | 0;
        this.tabWidth = tabWidth | 0;
        this.doubleSentenceSpacing = doubleSentenceSpacing;
        this.reformat = reformat;
        this.wholeComment = wholeComment;
    }
}
function $2c0e5be185a9291c$export$b088197328349f7e() {
    return $64327df6a4d665f3$export$d341dea990ee4af6("Rewrap.Settings", [], $2c0e5be185a9291c$export$c72f6eaae7b9adff, ()=>[
            [
                "column",
                $64327df6a4d665f3$export$d5481a1dd0e3648a
            ],
            [
                "tabWidth",
                $64327df6a4d665f3$export$d5481a1dd0e3648a
            ],
            [
                "doubleSentenceSpacing",
                $64327df6a4d665f3$export$4b2f4351dd8f4737
            ],
            [
                "reformat",
                $64327df6a4d665f3$export$4b2f4351dd8f4737
            ],
            [
                "wholeComment",
                $64327df6a4d665f3$export$4b2f4351dd8f4737
            ]
        ]
    );
}
class $2c0e5be185a9291c$export$13807d9ee5a34a42 extends $52d096336d1d74e9$export$5b163c6d120341e7 {
    constructor(line1, character){
        super();
        this.line = line1 | 0;
        this.character = character | 0;
    }
}
function $2c0e5be185a9291c$export$ad1154327601b750() {
    return $64327df6a4d665f3$export$d341dea990ee4af6("Rewrap.Position", [], $2c0e5be185a9291c$export$13807d9ee5a34a42, ()=>[
            [
                "line",
                $64327df6a4d665f3$export$d5481a1dd0e3648a
            ],
            [
                "character",
                $64327df6a4d665f3$export$d5481a1dd0e3648a
            ]
        ]
    );
}
class $2c0e5be185a9291c$export$e7cee7ee8bea336b extends $52d096336d1d74e9$export$5b163c6d120341e7 {
    constructor(anchor, active){
        super();
        this.anchor = anchor;
        this.active = active;
    }
}
function $2c0e5be185a9291c$export$c86e63932fd599ad() {
    return $64327df6a4d665f3$export$d341dea990ee4af6("Rewrap.Selection", [], $2c0e5be185a9291c$export$e7cee7ee8bea336b, ()=>[
            [
                "anchor",
                $2c0e5be185a9291c$export$ad1154327601b750()
            ],
            [
                "active",
                $2c0e5be185a9291c$export$ad1154327601b750()
            ]
        ]
    );
}
class $2c0e5be185a9291c$export$6ed0965c9443aaa6 extends $52d096336d1d74e9$export$5b163c6d120341e7 {
    constructor(startLine, endLine, lines, selections){
        super();
        this.startLine = startLine | 0;
        this.endLine = endLine | 0;
        this.lines = lines;
        this.selections = selections;
    }
}
function $2c0e5be185a9291c$export$1fd4bf095255a941() {
    return $64327df6a4d665f3$export$d341dea990ee4af6("Rewrap.Edit", [], $2c0e5be185a9291c$export$6ed0965c9443aaa6, ()=>[
            [
                "startLine",
                $64327df6a4d665f3$export$d5481a1dd0e3648a
            ],
            [
                "endLine",
                $64327df6a4d665f3$export$d5481a1dd0e3648a
            ],
            [
                "lines",
                $64327df6a4d665f3$export$9242f430c61b672d($64327df6a4d665f3$export$36bbd56a39d3f734)
            ],
            [
                "selections",
                $64327df6a4d665f3$export$9242f430c61b672d($2c0e5be185a9291c$export$c86e63932fd599ad())
            ]
        ]
    );
}
class $2c0e5be185a9291c$export$e2baa7eb8e218448 extends $52d096336d1d74e9$export$5b163c6d120341e7 {
    constructor(filePath, version, selections1){
        super();
        this.filePath = filePath;
        this.version = version | 0;
        this.selections = selections1;
    }
}
function $2c0e5be185a9291c$export$5bcc73c1c5a36d02() {
    return $64327df6a4d665f3$export$d341dea990ee4af6("Rewrap.DocState", [], $2c0e5be185a9291c$export$e2baa7eb8e218448, ()=>[
            [
                "filePath",
                $64327df6a4d665f3$export$36bbd56a39d3f734
            ],
            [
                "version",
                $64327df6a4d665f3$export$d5481a1dd0e3648a
            ],
            [
                "selections",
                $64327df6a4d665f3$export$9242f430c61b672d($2c0e5be185a9291c$export$c86e63932fd599ad())
            ]
        ]
    );
}



class $cbf049927489a6e9$export$9f9d0139d032da4f {
    constructor(value){
        this.value = value;
    }
    toJSON() {
        return this.value;
    }
    // Don't add "Some" for consistency with erased options
    toString() {
        return String(this.value);
    }
    GetHashCode() {
        return $4261fbb19e0b4aac$export$2e619f11ca48bee4(this.value);
    }
    Equals(other) {
        if (other == null) return false;
        else return $4261fbb19e0b4aac$export$e9bab7fafb253603(this.value, other instanceof $cbf049927489a6e9$export$9f9d0139d032da4f ? other.value : other);
    }
    CompareTo(other1) {
        if (other1 == null) return 1;
        else return $4261fbb19e0b4aac$export$398604a469f7de9a(this.value, other1 instanceof $cbf049927489a6e9$export$9f9d0139d032da4f ? other1.value : other1);
    }
}
function $cbf049927489a6e9$export$ad14ef4001db2bcd(x) {
    return x == null || x instanceof $cbf049927489a6e9$export$9f9d0139d032da4f ? new $cbf049927489a6e9$export$9f9d0139d032da4f(x) : x;
}
function $cbf049927489a6e9$export$2ab9a8f9f1186f14(x) {
    if (x == null) throw new Error("Option has no value");
    else return x instanceof $cbf049927489a6e9$export$9f9d0139d032da4f ? x.value : x;
}
function $cbf049927489a6e9$export$e724fd86d7aa146b(x) {
    // This will fail with unit probably, an alternative would be:
    // return x === null ? undefined : (x === undefined ? new Some(x) : x);
    return x == null ? undefined : x;
}
function $cbf049927489a6e9$export$b187f57ee1822bc5(x) {
    return x == null ? null : $cbf049927489a6e9$export$2ab9a8f9f1186f14(x);
}
function $cbf049927489a6e9$export$bffa455ba8c619a6(x) {
    return x == null ? undefined : $cbf049927489a6e9$export$2ab9a8f9f1186f14(x);
}
function $cbf049927489a6e9$export$45b10814cc054894(opt) {
    return opt == null ? [] : [
        $cbf049927489a6e9$export$2ab9a8f9f1186f14(opt)
    ];
}
function $cbf049927489a6e9$export$37721a79838ca038(opt, defaultValue) {
    return opt != null ? $cbf049927489a6e9$export$2ab9a8f9f1186f14(opt) : defaultValue;
}
function $cbf049927489a6e9$export$c90763f2293d7e67(opt, defThunk) {
    return opt != null ? $cbf049927489a6e9$export$2ab9a8f9f1186f14(opt) : defThunk();
}
function $cbf049927489a6e9$export$3dea766d36a8935f(predicate, opt) {
    return opt != null ? predicate($cbf049927489a6e9$export$2ab9a8f9f1186f14(opt)) ? opt : undefined : opt;
}
function $cbf049927489a6e9$export$871de8747c9eaa88(mapping, opt) {
    return opt != null ? $cbf049927489a6e9$export$ad14ef4001db2bcd(mapping($cbf049927489a6e9$export$2ab9a8f9f1186f14(opt))) : undefined;
}
function $cbf049927489a6e9$export$5be556bf484c4f10(mapping, opt1, opt2) {
    return opt1 != null && opt2 != null ? mapping($cbf049927489a6e9$export$2ab9a8f9f1186f14(opt1), $cbf049927489a6e9$export$2ab9a8f9f1186f14(opt2)) : undefined;
}
function $cbf049927489a6e9$export$f7389512af34c855(mapping, opt1, opt2, opt3) {
    return opt1 != null && opt2 != null && opt3 != null ? mapping($cbf049927489a6e9$export$2ab9a8f9f1186f14(opt1), $cbf049927489a6e9$export$2ab9a8f9f1186f14(opt2), $cbf049927489a6e9$export$2ab9a8f9f1186f14(opt3)) : undefined;
}
function $cbf049927489a6e9$export$2385a24977818dd0(binder, opt) {
    return opt != null ? binder($cbf049927489a6e9$export$2ab9a8f9f1186f14(opt)) : undefined;
}
function $cbf049927489a6e9$export$4324eaa7776d3b57(op, arg) {
    try {
        return $cbf049927489a6e9$export$ad14ef4001db2bcd(op(arg));
    } catch (_a) {
        return undefined;
    }
}



function $1d849aa8ef8b0f61$export$882a7a2eca8e1502(cons, len) {
    if (typeof cons === "function") return new cons(len);
    else return new Array(len);
}
function $1d849aa8ef8b0f61$var$indexNotFound() {
    throw new Error("An index satisfying the predicate was not found in the collection.");
}
function $1d849aa8ef8b0f61$var$differentLengths() {
    throw new Error("Arrays had different lengths");
}
function $1d849aa8ef8b0f61$export$10d8903dec122b9d(array1, array2, cons) {
    const len1 = array1.length | 0;
    const len2 = array2.length | 0;
    const newArray = $1d849aa8ef8b0f61$export$882a7a2eca8e1502(cons, len1 + len2);
    for(let i = 0; i <= len1 - 1; i++)newArray[i] = array1[i];
    for(let i_1 = 0; i_1 <= len2 - 1; i_1++)newArray[i_1 + len1] = array2[i_1];
    return newArray;
}
function $1d849aa8ef8b0f61$export$3dea766d36a8935f(predicate, array) {
    return array.filter(predicate);
}
function $1d849aa8ef8b0f61$export$9563e054e6f787fb(target, targetIndex, count, value) {
    const start = targetIndex | 0;
    return target.fill(value, start, start + count);
}
function $1d849aa8ef8b0f61$export$482c79a7d4ed32a1(array, start, count) {
    const start_1 = start | 0;
    return array.slice(start_1, start_1 + count);
}
function $1d849aa8ef8b0f61$export$4c7897fafd92b108(array) {
    if (array.length === 0) throw new Error("The input array was empty\\nParameter name: array");
    return array[array.length - 1];
}
function $1d849aa8ef8b0f61$export$e5907b21d797cce6(array) {
    if (array.length === 0) return void 0;
    else return $cbf049927489a6e9$export$ad14ef4001db2bcd(array[array.length - 1]);
}
function $1d849aa8ef8b0f61$export$e5bd5b3b105c2a71(f, source, cons) {
    const len = source.length | 0;
    const target = $1d849aa8ef8b0f61$export$882a7a2eca8e1502(cons, len);
    for(let i = 0; i <= len - 1; i++)target[i] = f(i, source[i]);
    return target;
}
function $1d849aa8ef8b0f61$export$871de8747c9eaa88(f, source, cons) {
    const len = source.length | 0;
    const target = $1d849aa8ef8b0f61$export$882a7a2eca8e1502(cons, len);
    for(let i = 0; i <= len - 1; i++)target[i] = f(source[i]);
    return target;
}
function $1d849aa8ef8b0f61$export$aded800c294daba4(f, source1, source2, cons) {
    if (source1.length !== source2.length) throw new Error("Arrays had different lengths");
    const result = $1d849aa8ef8b0f61$export$882a7a2eca8e1502(cons, source1.length);
    for(let i = 0; i <= source1.length - 1; i++)result[i] = f(i, source1[i], source2[i]);
    return result;
}
function $1d849aa8ef8b0f61$export$5be556bf484c4f10(f, source1, source2, cons) {
    if (source1.length !== source2.length) throw new Error("Arrays had different lengths");
    const result = $1d849aa8ef8b0f61$export$882a7a2eca8e1502(cons, source1.length);
    for(let i = 0; i <= source1.length - 1; i++)result[i] = f(source1[i], source2[i]);
    return result;
}
function $1d849aa8ef8b0f61$export$9ba7fb30dbbb3821(f, source1, source2, source3, cons) {
    if (source1.length !== source2.length ? true : source2.length !== source3.length) throw new Error("Arrays had different lengths");
    const result = $1d849aa8ef8b0f61$export$882a7a2eca8e1502(cons, source1.length);
    for(let i = 0; i <= source1.length - 1; i++)result[i] = f(i, source1[i], source2[i], source3[i]);
    return result;
}
function $1d849aa8ef8b0f61$export$f7389512af34c855(f, source1, source2, source3, cons) {
    if (source1.length !== source2.length ? true : source2.length !== source3.length) throw new Error("Arrays had different lengths");
    const result = $1d849aa8ef8b0f61$export$882a7a2eca8e1502(cons, source1.length);
    for(let i = 0; i <= source1.length - 1; i++)result[i] = f(source1[i], source2[i], source3[i]);
    return result;
}
function $1d849aa8ef8b0f61$export$9b19c2e3f2aab20f(mapping, state, array, cons) {
    const matchValue = array.length | 0;
    if (matchValue === 0) return [
        [],
        state
    ];
    else {
        let acc = state;
        const res = $1d849aa8ef8b0f61$export$882a7a2eca8e1502(cons, matchValue);
        for(let i = 0; i <= array.length - 1; i++){
            const patternInput = mapping(acc, array[i]);
            res[i] = patternInput[0];
            acc = patternInput[1];
        }
        return [
            res,
            acc
        ];
    }
}
function $1d849aa8ef8b0f61$export$6d7c6abab27be307(mapping, array, state, cons) {
    const matchValue = array.length | 0;
    if (matchValue === 0) return [
        [],
        state
    ];
    else {
        let acc = state;
        const res = $1d849aa8ef8b0f61$export$882a7a2eca8e1502(cons, matchValue);
        for(let i = array.length - 1; i >= 0; i--){
            const patternInput = mapping(array[i], acc);
            res[i] = patternInput[0];
            acc = patternInput[1];
        }
        return [
            res,
            acc
        ];
    }
}
function $1d849aa8ef8b0f61$export$ddf7c77acd0bf516(source) {
    const len = source.length | 0;
    const target = new Array(len);
    for(let i = 0; i <= len - 1; i++)target[i] = [
        i,
        source[i]
    ];
    return target;
}
function $1d849aa8ef8b0f61$export$6a506b36fdea397d(count, array) {
    const count_1 = $4261fbb19e0b4aac$export$8960430cfd85939f((x, y)=>$4261fbb19e0b4aac$export$591cc4a8025fba16(x, y)
    , 0, count) | 0;
    const start = 0;
    return array.slice(start, start + count_1);
}
function $1d849aa8ef8b0f61$export$ee1b3e54f0441b22(arrays, cons) {
    const arrays_1 = Array.isArray(arrays) ? arrays : Array.from(arrays);
    const matchValue = arrays_1.length | 0;
    switch(matchValue){
        case 0:
            return $1d849aa8ef8b0f61$export$882a7a2eca8e1502(cons, 0);
        case 1:
            return arrays_1[0];
        default:
            {
                let totalIdx = 0;
                let totalLength = 0;
                for(let idx = 0; idx <= arrays_1.length - 1; idx++){
                    const arr_1 = arrays_1[idx];
                    totalLength = totalLength + arr_1.length | 0;
                }
                const result = $1d849aa8ef8b0f61$export$882a7a2eca8e1502(cons, totalLength);
                for(let idx_1 = 0; idx_1 <= arrays_1.length - 1; idx_1++){
                    const arr_2 = arrays_1[idx_1];
                    for(let j = 0; j <= arr_2.length - 1; j++){
                        result[totalIdx] = arr_2[j];
                        totalIdx = totalIdx + 1 | 0;
                    }
                }
                return result;
            }
    }
}
function $1d849aa8ef8b0f61$export$bb44f104e3c54dae(mapping, array, cons) {
    return $1d849aa8ef8b0f61$export$ee1b3e54f0441b22($1d849aa8ef8b0f61$export$871de8747c9eaa88(mapping, array, null), cons);
}
function $1d849aa8ef8b0f61$export$9c59b80dda569a6e(predicate, array) {
    return array.filter(predicate);
}
function $1d849aa8ef8b0f61$export$2344b14b097df817(value, array, eq) {
    const loop = (i_mut)=>{
        loop: while(true){
            const i = i_mut;
            if (i >= array.length) return false;
            else if (eq.Equals(value, array[i])) return true;
            else {
                i_mut = i + 1;
                continue loop;
            }
            break;
        }
    };
    return loop(0);
}
function $1d849aa8ef8b0f61$export$6e22c362a0406a2c(cons) {
    return $1d849aa8ef8b0f61$export$882a7a2eca8e1502(cons, 0);
}
function $1d849aa8ef8b0f61$export$439306a4dcaafbb9(value, cons) {
    const ar = $1d849aa8ef8b0f61$export$882a7a2eca8e1502(cons, 1);
    ar[0] = value;
    return ar;
}
function $1d849aa8ef8b0f61$export$2a47f398eeff8b01(count, initializer, cons) {
    if (count < 0) throw new Error("The input must be non-negative\\nParameter name: count");
    const result = $1d849aa8ef8b0f61$export$882a7a2eca8e1502(cons, count);
    for(let i = 0; i <= count - 1; i++)result[i] = initializer(i);
    return result;
}
function $1d849aa8ef8b0f61$export$8f9d79d42bff1aac(array) {
    if (array.length < 2) return [];
    else {
        const count = array.length - 1 | 0;
        const result = new Array(count);
        for(let i = 0; i <= count - 1; i++)result[i] = [
            array[i],
            array[i + 1]
        ];
        return result;
    }
}
function $1d849aa8ef8b0f61$export$606959e7ccb797f0(count, initial, cons) {
    if (count < 0) throw new Error("The input must be non-negative\\nParameter name: count");
    const result = $1d849aa8ef8b0f61$export$882a7a2eca8e1502(cons, count);
    for(let i = 0; i <= result.length - 1; i++)result[i] = initial;
    return result;
}
function $1d849aa8ef8b0f61$export$784d13d8ee351f07(array) {
    return array.slice();
}
function $1d849aa8ef8b0f61$export$66c1ae025e96b4bc(array) {
    const array_2 = array.slice();
    return array_2.reverse();
}
function $1d849aa8ef8b0f61$export$c87d910e63d22ed6(folder, state, array, cons) {
    const res = $1d849aa8ef8b0f61$export$882a7a2eca8e1502(cons, array.length + 1);
    res[0] = state;
    for(let i = 0; i <= array.length - 1; i++)res[i + 1] = folder(res[i], array[i]);
    return res;
}
function $1d849aa8ef8b0f61$export$7bd1078b283d99ad(folder, array, state, cons) {
    const res = $1d849aa8ef8b0f61$export$882a7a2eca8e1502(cons, array.length + 1);
    res[array.length] = state;
    for(let i = array.length - 1; i >= 0; i--)res[i] = folder(array[i], res[i + 1]);
    return res;
}
function $1d849aa8ef8b0f61$export$955fc4a6c4be454d(count, array, cons) {
    if (count > array.length) throw new Error("count is greater than array length\\nParameter name: count");
    if (count === array.length) return $1d849aa8ef8b0f61$export$882a7a2eca8e1502(cons, 0);
    else {
        const count_1 = (count < 0 ? 0 : count) | 0;
        return array.slice(count_1);
    }
}
function $1d849aa8ef8b0f61$export$175dedd748069215(predicate, array, cons) {
    let count = 0;
    while(count < array.length ? predicate(array[count]) : false)count = count + 1 | 0;
    if (count === array.length) return $1d849aa8ef8b0f61$export$882a7a2eca8e1502(cons, 0);
    else {
        const count_1 = count | 0;
        return array.slice(count_1);
    }
}
function $1d849aa8ef8b0f61$export$b7df5d561049483a(count, array, cons) {
    if (count < 0) throw new Error("The input must be non-negative\\nParameter name: count");
    if (count > array.length) throw new Error("count is greater than array length\\nParameter name: count");
    if (count === 0) return $1d849aa8ef8b0f61$export$882a7a2eca8e1502(cons, 0);
    else {
        const start = 0;
        return array.slice(start, start + count);
    }
}
function $1d849aa8ef8b0f61$export$9384c7afe4015e42(predicate, array, cons) {
    let count = 0;
    while(count < array.length ? predicate(array[count]) : false)count = count + 1 | 0;
    if (count === 0) return $1d849aa8ef8b0f61$export$882a7a2eca8e1502(cons, 0);
    else {
        const start = 0;
        const count_1 = count | 0;
        return array.slice(start, start + count_1);
    }
}
function $1d849aa8ef8b0f61$export$7085ea1126df7818(x, array) {
    array.push(x);
}
function $1d849aa8ef8b0f61$export$9760889ead41947a(range, array) {
    const enumerator = $4261fbb19e0b4aac$export$a41738691dcd8bea(range);
    try {
        while(enumerator["System.Collections.IEnumerator.MoveNext"]())$1d849aa8ef8b0f61$export$7085ea1126df7818(enumerator["System.Collections.Generic.IEnumerator`1.get_Current"](), array);
    } finally{
        enumerator.Dispose();
    }
}
function $1d849aa8ef8b0f61$export$73ea5dcdf758ae6e(index, range, array) {
    let index_1;
    let i = index;
    const enumerator = $4261fbb19e0b4aac$export$a41738691dcd8bea(range);
    try {
        while(enumerator["System.Collections.IEnumerator.MoveNext"]()){
            const x = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            index_1 = i | 0, array.splice(index_1, 0, x);
            i = i + 1 | 0;
        }
    } finally{
        enumerator.Dispose();
    }
}
function $1d849aa8ef8b0f61$export$94ff4a985fbc3b28(item_1, array) {
    const i = array.indexOf(item_1, 0);
    if (i > -1) {
        array.splice(i, 1);
        return true;
    } else return false;
}
function $1d849aa8ef8b0f61$export$50ed39f80a942033(predicate, array) {
    const countRemoveAll = (count)=>{
        const i = array.findIndex(predicate);
        if (i > -1) {
            array.splice(i, 1);
            return countRemoveAll(count) + 1 | 0;
        } else return count | 0;
    };
    return countRemoveAll(0) | 0;
}
function $1d849aa8ef8b0f61$export$1c7fb22ad89b2a7c(source, sourceIndex, target, targetIndex, count) {
    const diff = targetIndex - sourceIndex | 0;
    for(let i = sourceIndex; i <= sourceIndex + count - 1; i++)target[i + diff] = source[i];
}
function $1d849aa8ef8b0f61$export$880a04cef8d49d7b(source, sourceIndex, target, targetIndex, count) {
    try {
        target.set(source.subarray(sourceIndex, sourceIndex + count), targetIndex);
    } catch (matchValue) {
        $1d849aa8ef8b0f61$export$1c7fb22ad89b2a7c(source, sourceIndex, target, targetIndex, count);
    }
}
function $1d849aa8ef8b0f61$export$305f7d4e9d4624f2(array, item_1, start, count) {
    const start_1 = $cbf049927489a6e9$export$37721a79838ca038(start, 0) | 0;
    const i = array.indexOf(item_1, start_1);
    if (count != null ? i >= start_1 + $cbf049927489a6e9$export$2ab9a8f9f1186f14(count) : false) return -1;
    else return i | 0;
}
function $1d849aa8ef8b0f61$export$b29f828819edca8d(f, source, cons) {
    const len = source.length | 0;
    const res1 = $1d849aa8ef8b0f61$export$882a7a2eca8e1502(cons, len);
    const res2 = $1d849aa8ef8b0f61$export$882a7a2eca8e1502(cons, len);
    let iTrue = 0;
    let iFalse = 0;
    for(let i = 0; i <= len - 1; i++)if (f(source[i])) {
        res1[iTrue] = source[i];
        iTrue = iTrue + 1 | 0;
    } else {
        res2[iFalse] = source[i];
        iFalse = iFalse + 1 | 0;
    }
    return [
        $1d849aa8ef8b0f61$export$6a506b36fdea397d(iTrue, res1),
        $1d849aa8ef8b0f61$export$6a506b36fdea397d(iFalse, res2)
    ];
}
function $1d849aa8ef8b0f61$export$71aa6c912b956294(predicate, array) {
    const matchValue = array.find(predicate);
    if (matchValue == null) return $1d849aa8ef8b0f61$var$indexNotFound();
    else return $cbf049927489a6e9$export$2ab9a8f9f1186f14(matchValue);
}
function $1d849aa8ef8b0f61$export$d65cb303b863e3bf(predicate, array) {
    return array.find(predicate);
}
function $1d849aa8ef8b0f61$export$de3a4d4a0d731119(predicate, array) {
    const matchValue = array.findIndex(predicate);
    if (matchValue > -1) return matchValue | 0;
    else return $1d849aa8ef8b0f61$var$indexNotFound() | 0;
}
function $1d849aa8ef8b0f61$export$5c13475397a61429(predicate, array) {
    const matchValue = array.findIndex(predicate);
    if (matchValue > -1) return matchValue;
    else return void 0;
}
function $1d849aa8ef8b0f61$export$357523c63a2253b9(chooser, array) {
    const loop = (i_mut)=>{
        loop: while(true){
            const i = i_mut;
            if (i >= array.length) return $1d849aa8ef8b0f61$var$indexNotFound();
            else {
                const matchValue = chooser(array[i]);
                if (matchValue != null) return $cbf049927489a6e9$export$2ab9a8f9f1186f14(matchValue);
                else {
                    i_mut = i + 1;
                    continue loop;
                }
            }
            break;
        }
    };
    return loop(0);
}
function $1d849aa8ef8b0f61$export$d944e5c60afb688e(chooser, array) {
    const loop = (i_mut)=>{
        loop: while(true){
            const i = i_mut;
            if (i >= array.length) return void 0;
            else {
                const matchValue = chooser(array[i]);
                if (matchValue == null) {
                    i_mut = i + 1;
                    continue loop;
                } else return matchValue;
            }
            break;
        }
    };
    return loop(0);
}
function $1d849aa8ef8b0f61$export$ec18defb06d12add(predicate, array) {
    const loop = (i_mut)=>{
        loop: while(true){
            const i = i_mut;
            if (i < 0) return $1d849aa8ef8b0f61$var$indexNotFound();
            else if (predicate(array[i])) return array[i];
            else {
                i_mut = i - 1;
                continue loop;
            }
            break;
        }
    };
    return loop(array.length - 1);
}
function $1d849aa8ef8b0f61$export$36425195e236bb0f(predicate, array) {
    const loop = (i_mut)=>{
        loop: while(true){
            const i = i_mut;
            if (i < 0) return void 0;
            else if (predicate(array[i])) return $cbf049927489a6e9$export$ad14ef4001db2bcd(array[i]);
            else {
                i_mut = i - 1;
                continue loop;
            }
            break;
        }
    };
    return loop(array.length - 1);
}
function $1d849aa8ef8b0f61$export$8855a8be7bd3e9f8(predicate, array) {
    const loop = (i_mut)=>{
        loop: while(true){
            const i = i_mut;
            if (i < 0) return -1;
            else if (predicate(array[i])) return i | 0;
            else {
                i_mut = i - 1;
                continue loop;
            }
            break;
        }
    };
    return loop(array.length - 1) | 0;
}
function $1d849aa8ef8b0f61$export$78e19deb30f83296(predicate, array) {
    const loop = (i_mut)=>{
        loop: while(true){
            const i = i_mut;
            if (i < 0) return $1d849aa8ef8b0f61$var$indexNotFound() | 0;
            else if (predicate(array[i])) return i | 0;
            else {
                i_mut = i - 1;
                continue loop;
            }
            break;
        }
    };
    return loop(array.length - 1) | 0;
}
function $1d849aa8ef8b0f61$export$e1cc954945760117(predicate, array) {
    const loop = (i_mut)=>{
        loop: while(true){
            const i = i_mut;
            if (i < 0) return void 0;
            else if (predicate(array[i])) return i;
            else {
                i_mut = i - 1;
                continue loop;
            }
            break;
        }
    };
    return loop(array.length - 1);
}
function $1d849aa8ef8b0f61$export$7877a478dd30fd3d(chooser, array, cons) {
    const res = [];
    for(let i = 0; i <= array.length - 1; i++){
        const matchValue = chooser(array[i]);
        if (matchValue != null) {
            const y = $cbf049927489a6e9$export$2ab9a8f9f1186f14(matchValue);
            res.push(y);
        }
    }
    if (typeof cons === "function") return $1d849aa8ef8b0f61$export$871de8747c9eaa88((x)=>x
    , res, cons);
    else return res;
}
function $1d849aa8ef8b0f61$export$c336ee92e62ce644(folder, state, array) {
    return array.reduce((delegateArg0, delegateArg1, delegateArg2)=>folder(delegateArg2, delegateArg0, delegateArg1)
    , state);
}
function $1d849aa8ef8b0f61$export$93e2b83da34ff82a(folder, state, array) {
    return array.reduce((delegateArg0, delegateArg1)=>folder(delegateArg0, delegateArg1)
    , state);
}
function $1d849aa8ef8b0f61$export$c1a059043cc9c119(action, array) {
    for(let i = 0; i <= array.length - 1; i++)action(array[i]);
}
function $1d849aa8ef8b0f61$export$5a067165821eae2d(action, array) {
    for(let i = 0; i <= array.length - 1; i++)action(i, array[i]);
}
function $1d849aa8ef8b0f61$export$d1731a37ee7d4fbb(action, array1, array2) {
    if (array1.length !== array2.length) $1d849aa8ef8b0f61$var$differentLengths();
    for(let i = 0; i <= array1.length - 1; i++)action(array1[i], array2[i]);
}
function $1d849aa8ef8b0f61$export$ab3c1f9aeb4948fd(action, array1, array2) {
    if (array1.length !== array2.length) $1d849aa8ef8b0f61$var$differentLengths();
    for(let i = 0; i <= array1.length - 1; i++)action(i, array1[i], array2[i]);
}
function $1d849aa8ef8b0f61$export$dd1bc94b04021eeb(array) {
    return array.length === 0;
}
function $1d849aa8ef8b0f61$export$e5bd981f5eeebe3b(predicate, array) {
    return array.every(predicate);
}
function $1d849aa8ef8b0f61$export$95e62ad65da8b7d2(f, array) {
    const size = array.length | 0;
    const res = array.slice();
    const checkFlags = new Array(size);
    $1d849aa8ef8b0f61$export$5a067165821eae2d((i, x)=>{
        const j = f(i) | 0;
        if (j < 0 ? true : j >= size) throw new Error("Not a valid permutation");
        res[j] = x;
        checkFlags[j] = 1;
    }, array);
    if (!checkFlags.every((y)=>1 === y
    )) throw new Error("Not a valid permutation");
    return res;
}
function $1d849aa8ef8b0f61$export$673bd84e9c48e6b2(target, lower, upper, source) {
    const lower_1 = $cbf049927489a6e9$export$37721a79838ca038(lower, 0) | 0;
    const upper_1 = $cbf049927489a6e9$export$37721a79838ca038(upper, 0) | 0;
    const length = (upper_1 > 0 ? upper_1 : target.length - 1) - lower_1 | 0;
    for(let i = 0; i <= length; i++)target[i + lower_1] = source[i];
}
function $1d849aa8ef8b0f61$export$9a2c8f31e984c6d5(projection, xs, comparer) {
    xs.sort((x, y)=>comparer.Compare(projection(x), projection(y))
    );
}
function $1d849aa8ef8b0f61$export$f76e9de28552298f(xs, comparer) {
    xs.sort((x, y)=>comparer.Compare(x, y)
    );
}
function $1d849aa8ef8b0f61$export$97db5808d8f88186(xs, comparer) {
    const xs_1 = xs.slice();
    xs_1.sort((x, y)=>comparer.Compare(x, y)
    );
    return xs_1;
}
function $1d849aa8ef8b0f61$export$b035e44d7bb4278f(projection, xs, comparer) {
    const xs_1 = xs.slice();
    xs_1.sort((x, y)=>comparer.Compare(projection(x), projection(y))
    );
    return xs_1;
}
function $1d849aa8ef8b0f61$export$9a59fdf05ed66d15(xs, comparer) {
    const xs_1 = xs.slice();
    xs_1.sort((x, y)=>comparer.Compare(x, y) * -1
    );
    return xs_1;
}
function $1d849aa8ef8b0f61$export$ca6dab212df382f6(projection, xs, comparer) {
    const xs_1 = xs.slice();
    xs_1.sort((x, y)=>comparer.Compare(projection(x), projection(y)) * -1
    );
    return xs_1;
}
function $1d849aa8ef8b0f61$export$a9e7d1a6fdcfefde(comparer, xs) {
    const comparer_1 = comparer;
    const xs_1 = xs.slice();
    xs_1.sort(comparer_1);
    return xs_1;
}
function $1d849aa8ef8b0f61$export$8016484fb8238078(xs, ys) {
    const len1 = xs.length | 0;
    const len2 = ys.length | 0;
    const res = new Array(len1 * len2);
    for(let i = 0; i <= xs.length - 1; i++)for(let j = 0; j <= ys.length - 1; j++)res[i * len2 + j] = [
        xs[i],
        ys[j]
    ];
    return res;
}
function $1d849aa8ef8b0f61$export$c48e357c1a89b78d(generator, state) {
    const res = [];
    const loop = (state_1_mut)=>{
        loop: while(true){
            const state_1 = state_1_mut;
            const matchValue = generator(state_1);
            if (matchValue != null) {
                const x = matchValue[0];
                const s = matchValue[1];
                res.push(x);
                state_1_mut = s;
                continue loop;
            }
            break;
        }
    };
    loop(state);
    return res;
}
function $1d849aa8ef8b0f61$export$23c8d3f8757cab88(array) {
    const len = array.length | 0;
    const res1 = new Array(len);
    const res2 = new Array(len);
    $1d849aa8ef8b0f61$export$5a067165821eae2d((i, tupledArg)=>{
        res1[i] = tupledArg[0];
        res2[i] = tupledArg[1];
    }, array);
    return [
        res1,
        res2
    ];
}
function $1d849aa8ef8b0f61$export$a52790ad56d35e3d(array) {
    const len = array.length | 0;
    const res1 = new Array(len);
    const res2 = new Array(len);
    const res3 = new Array(len);
    $1d849aa8ef8b0f61$export$5a067165821eae2d((i, tupledArg)=>{
        res1[i] = tupledArg[0];
        res2[i] = tupledArg[1];
        res3[i] = tupledArg[2];
    }, array);
    return [
        res1,
        res2,
        res3
    ];
}
function $1d849aa8ef8b0f61$export$8901015135f2fb22(array1, array2) {
    if (array1.length !== array2.length) $1d849aa8ef8b0f61$var$differentLengths();
    const result = new Array(array1.length);
    for(let i = 0; i <= array1.length - 1; i++)result[i] = [
        array1[i],
        array2[i]
    ];
    return result;
}
function $1d849aa8ef8b0f61$export$a3c629e5d025ffc1(array1, array2, array3) {
    if (array1.length !== array2.length ? true : array2.length !== array3.length) $1d849aa8ef8b0f61$var$differentLengths();
    const result = new Array(array1.length);
    for(let i = 0; i <= array1.length - 1; i++)result[i] = [
        array1[i],
        array2[i],
        array3[i]
    ];
    return result;
}
function $1d849aa8ef8b0f61$export$6302d00ba2848bf(chunkSize, array) {
    if (chunkSize < 1) throw new Error("The input must be positive.\\nParameter name: size");
    if (array.length === 0) return [
        []
    ];
    else {
        const result = [];
        for(let x = 0; x <= ~~Math.ceil(array.length / chunkSize) - 1; x++){
            let slice;
            const start_1 = x * chunkSize | 0;
            slice = array.slice(start_1, start_1 + chunkSize);
            result.push(slice);
        }
        return result;
    }
}
function $1d849aa8ef8b0f61$export$b0d75975ac0be0e1(index, array) {
    let start;
    if (index < 0) throw new Error("The input must be non-negative\\nParameter name: index");
    if (index > array.length) throw new Error("The input sequence has an insufficient number of elements.\\nParameter name: index");
    return [
        (start = 0, array.slice(start, start + index)),
        array.slice(index)
    ];
}
function $1d849aa8ef8b0f61$export$ecb3797c03e8ce0c(comparer, array1, array2) {
    if (array1 == null) {
        if (array2 == null) return 0;
        else return -1;
    } else if (array2 == null) return 1;
    else {
        let i = 0;
        let result = 0;
        const length1 = array1.length | 0;
        const length2 = array2.length | 0;
        if (length1 > length2) return 1;
        else if (length1 < length2) return -1;
        else {
            while(i < length1 ? result === 0 : false){
                result = comparer(array1[i], array2[i]) | 0;
                i = i + 1 | 0;
            }
            return result | 0;
        }
    }
}
function $1d849aa8ef8b0f61$export$9d4fa3538bf09487(equals, array1, array2) {
    if (array1 == null) {
        if (array2 == null) return true;
        else return false;
    } else if (array2 == null) return false;
    else {
        let i = 0;
        let result = true;
        const length1 = array1.length | 0;
        const length2 = array2.length | 0;
        if (length1 > length2) return false;
        else if (length1 < length2) return false;
        else {
            while(i < length1 ? result : false){
                result = equals(array1[i], array2[i]);
                i = i + 1 | 0;
            }
            return result;
        }
    }
}
function $1d849aa8ef8b0f61$export$3367fc0da2c111f0(array) {
    if (array.length === 1) return array[0];
    else if (array.length === 0) throw new Error("The input sequence was empty\\nParameter name: array");
    else throw new Error("Input array too long\\nParameter name: array");
}
function $1d849aa8ef8b0f61$export$22f0cfb94dab14ba(array) {
    if (array.length === 1) return $cbf049927489a6e9$export$ad14ef4001db2bcd(array[0]);
    else return void 0;
}
function $1d849aa8ef8b0f61$export$5fd5031fecdacec3(array) {
    if (array.length === 0) throw new Error("The input array was empty\\nParameter name: array");
    else return array[0];
}
function $1d849aa8ef8b0f61$export$1acbe849d0cb723e(array) {
    if (array.length === 0) return void 0;
    else return $cbf049927489a6e9$export$ad14ef4001db2bcd(array[0]);
}
function $1d849aa8ef8b0f61$export$c01875f616615628(array) {
    if (array.length === 0) throw new Error("Not enough elements\\nParameter name: array");
    return array.slice(1);
}
function $1d849aa8ef8b0f61$export$7061c75fc5af8b7e(index, array) {
    return array[index];
}
function $1d849aa8ef8b0f61$export$3fe40c3a4d8cb094(index, array) {
    if (index < 0 ? true : index >= array.length) return void 0;
    else return $cbf049927489a6e9$export$ad14ef4001db2bcd(array[index]);
}
function $1d849aa8ef8b0f61$export$550943be80b2169b(folder, array, state) {
    return array.reduceRight((delegateArg0, delegateArg1, delegateArg2)=>folder(delegateArg2, delegateArg1, delegateArg0)
    , state);
}
function $1d849aa8ef8b0f61$export$c38b8353041a4f48(folder, array, state) {
    return array.reduceRight((delegateArg0, delegateArg1)=>folder(delegateArg1, delegateArg0)
    , state);
}
function $1d849aa8ef8b0f61$export$665dec9c39c3adad(folder, state, array1, array2) {
    let acc = state;
    if (array1.length !== array2.length) throw new Error("Arrays have different lengths");
    for(let i = 0; i <= array1.length - 1; i++)acc = folder(i, acc, array1[i], array2[i]);
    return acc;
}
function $1d849aa8ef8b0f61$export$6eef545db8c1f6e(folder, state, array1, array2) {
    return $1d849aa8ef8b0f61$export$665dec9c39c3adad((_arg1, acc, x, y)=>folder(acc, x, y)
    , state, array1, array2);
}
function $1d849aa8ef8b0f61$export$eb873be546c6a428(folder, array1, array2, state) {
    let acc = state;
    if (array1.length !== array2.length) $1d849aa8ef8b0f61$var$differentLengths();
    const size = array1.length | 0;
    for(let i = 1; i <= size; i++)acc = folder(i - 1, array1[size - i], array2[size - i], acc);
    return acc;
}
function $1d849aa8ef8b0f61$export$f04d6919de1a1f94(f, array1, array2, state) {
    return $1d849aa8ef8b0f61$export$eb873be546c6a428((_arg1, x, y, acc)=>f(x, y, acc)
    , array1, array2, state);
}
function $1d849aa8ef8b0f61$export$533b26079ad0b4b(reduction, array) {
    if (array.length === 0) throw new Error("The input array was empty");
    const reduction_1 = reduction;
    return array.reduce(reduction_1);
}
function $1d849aa8ef8b0f61$export$90cf02207d4ef99b(reduction, array) {
    if (array.length === 0) throw new Error("The input array was empty");
    const reduction_1 = reduction;
    return array.reduceRight(reduction_1);
}
function $1d849aa8ef8b0f61$export$a85e1ff32f9fff6e(predicate, array1, array2) {
    return $1d849aa8ef8b0f61$export$6eef545db8c1f6e((acc, x, y)=>acc ? predicate(x, y) : false
    , true, array1, array2);
}
function $1d849aa8ef8b0f61$export$f9300ec6f6f05293(predicate_mut, array_mut, index_mut) {
    existsOffset: while(true){
        const predicate = predicate_mut, array = array_mut, index = index_mut;
        if (index === array.length) return false;
        else if (predicate(array[index])) return true;
        else {
            predicate_mut = predicate;
            array_mut = array;
            index_mut = index + 1;
            continue existsOffset;
        }
        break;
    }
}
function $1d849aa8ef8b0f61$export$f7e9f41ea797a17(predicate, array) {
    return $1d849aa8ef8b0f61$export$f9300ec6f6f05293(predicate, array, 0);
}
function $1d849aa8ef8b0f61$export$5c0f099be5c4dc6a(predicate_mut, array1_mut, array2_mut, index_mut) {
    existsOffset2: while(true){
        const predicate = predicate_mut, array1 = array1_mut, array2 = array2_mut, index = index_mut;
        if (index === array1.length) return false;
        else if (predicate(array1[index], array2[index])) return true;
        else {
            predicate_mut = predicate;
            array1_mut = array1;
            array2_mut = array2;
            index_mut = index + 1;
            continue existsOffset2;
        }
        break;
    }
}
function $1d849aa8ef8b0f61$export$d04ae74aaa2c0655(predicate, array1, array2) {
    if (array1.length !== array2.length) $1d849aa8ef8b0f61$var$differentLengths();
    return $1d849aa8ef8b0f61$export$5c0f099be5c4dc6a(predicate, array1, array2, 0);
}
function $1d849aa8ef8b0f61$export$8a63f25cc62965f1(array, adder) {
    let acc = adder.GetZero();
    for(let i = 0; i <= array.length - 1; i++)acc = adder.Add(acc, array[i]);
    return acc;
}
function $1d849aa8ef8b0f61$export$9e8299ab977385a3(projection, array, adder) {
    let acc = adder.GetZero();
    for(let i = 0; i <= array.length - 1; i++)acc = adder.Add(acc, projection(array[i]));
    return acc;
}
function $1d849aa8ef8b0f61$export$ad1963a493908da4(projection, xs, comparer) {
    return $1d849aa8ef8b0f61$export$533b26079ad0b4b((x, y)=>comparer.Compare(projection(y), projection(x)) > 0 ? y : x
    , xs);
}
function $1d849aa8ef8b0f61$export$8960430cfd85939f(xs, comparer) {
    return $1d849aa8ef8b0f61$export$533b26079ad0b4b((x, y)=>comparer.Compare(y, x) > 0 ? y : x
    , xs);
}
function $1d849aa8ef8b0f61$export$8c826aa0fa59ac68(projection, xs, comparer) {
    return $1d849aa8ef8b0f61$export$533b26079ad0b4b((x, y)=>comparer.Compare(projection(y), projection(x)) > 0 ? x : y
    , xs);
}
function $1d849aa8ef8b0f61$export$96ec731ed4dcb222(xs, comparer) {
    return $1d849aa8ef8b0f61$export$533b26079ad0b4b((x, y)=>comparer.Compare(y, x) > 0 ? x : y
    , xs);
}
function $1d849aa8ef8b0f61$export$cc6710ee5f037d57(array, averager) {
    if (array.length === 0) throw new Error("The input array was empty\\nParameter name: array");
    let total = averager.GetZero();
    for(let i = 0; i <= array.length - 1; i++)total = averager.Add(total, array[i]);
    return averager.DivideByInt(total, array.length);
}
function $1d849aa8ef8b0f61$export$9077387bc3582185(projection, array, averager) {
    if (array.length === 0) throw new Error("The input array was empty\\nParameter name: array");
    let total = averager.GetZero();
    for(let i = 0; i <= array.length - 1; i++)total = averager.Add(total, projection(array[i]));
    return averager.DivideByInt(total, array.length);
}
function $1d849aa8ef8b0f61$export$5f2b86065ccf5a1(windowSize, source) {
    if (windowSize <= 0) throw new Error("windowSize must be positive");
    let res;
    const len = $4261fbb19e0b4aac$export$8960430cfd85939f((x, y)=>$4261fbb19e0b4aac$export$591cc4a8025fba16(x, y)
    , 0, source.length - windowSize) | 0;
    res = new Array(len);
    for(let i = windowSize; i <= source.length; i++)res[i - windowSize] = source.slice(i - windowSize, i - 1 + 1);
    return res;
}
function $1d849aa8ef8b0f61$export$7120a88bf3d39e8(chunks, array) {
    if (chunks < 1) throw new Error("The input must be positive.\\nParameter name: chunks");
    if (array.length === 0) return [
        []
    ];
    else {
        const result = [];
        const chunks_1 = $4261fbb19e0b4aac$export$96ec731ed4dcb222((x, y)=>$4261fbb19e0b4aac$export$591cc4a8025fba16(x, y)
        , chunks, array.length) | 0;
        const minChunkSize = ~~(array.length / chunks_1) | 0;
        const chunksWithExtraItem = array.length % chunks_1 | 0;
        for(let i = 0; i <= chunks_1 - 1; i++){
            const chunkSize = (i < chunksWithExtraItem ? minChunkSize + 1 : minChunkSize) | 0;
            let slice;
            const start_1 = i * minChunkSize + $4261fbb19e0b4aac$export$96ec731ed4dcb222((x_1, y_1)=>$4261fbb19e0b4aac$export$591cc4a8025fba16(x_1, y_1)
            , chunksWithExtraItem, i) | 0;
            slice = array.slice(start_1, start_1 + chunkSize);
            result.push(slice);
        }
        return result;
    }
}
function $1d849aa8ef8b0f61$export$9cb09a71b7d66923(arrays, cons) {
    const arrays_1 = Array.isArray(arrays) ? arrays : Array.from(arrays);
    const len = arrays_1.length | 0;
    if (len === 0) return new Array(0);
    else {
        const lenInner = arrays_1[0].length | 0;
        if (!$1d849aa8ef8b0f61$export$e5bd981f5eeebe3b((a)=>a.length === lenInner
        , arrays_1)) $1d849aa8ef8b0f61$var$differentLengths();
        const result = new Array(lenInner);
        for(let i = 0; i <= lenInner - 1; i++){
            result[i] = $1d849aa8ef8b0f61$export$882a7a2eca8e1502(cons, len);
            for(let j = 0; j <= len - 1; j++)result[i][j] = arrays_1[j][i];
        }
        return result;
    }
}





const $9d352704d090efa5$var$CaseRules = {
    None: 0,
    LowerFirst: 1,
    SnakeCase: 2,
    SnakeCaseAllCaps: 3,
    KebabCase: 4
};
function $9d352704d090efa5$var$dashify(str, separator) {
    return str.replace(/[a-z]?[A-Z]/g, (m)=>m.length === 1 ? m.toLowerCase() : m.charAt(0) + separator + m.charAt(1).toLowerCase()
    );
}
function $9d352704d090efa5$var$changeCase(str, caseRule) {
    switch(caseRule){
        case $9d352704d090efa5$var$CaseRules.LowerFirst:
            return str.charAt(0).toLowerCase() + str.slice(1);
        case $9d352704d090efa5$var$CaseRules.SnakeCase:
            return $9d352704d090efa5$var$dashify(str, "_");
        case $9d352704d090efa5$var$CaseRules.SnakeCaseAllCaps:
            return $9d352704d090efa5$var$dashify(str, "_").toUpperCase();
        case $9d352704d090efa5$var$CaseRules.KebabCase:
            return $9d352704d090efa5$var$dashify(str, "-");
        case $9d352704d090efa5$var$CaseRules.None:
        default:
            return str;
    }
}
function $9d352704d090efa5$export$c0695a590b8490e7(fields, caseRule1 = $9d352704d090efa5$var$CaseRules.None) {
    const obj = {
    };
    const definedCaseRule = caseRule1;
    function fail(kvPair) {
        throw new Error("Cannot infer key and value of " + String(kvPair));
    }
    function assign(key, caseRule, value) {
        key = $9d352704d090efa5$var$changeCase(key, caseRule);
        obj[key] = value;
    }
    for (let kvPair1 of fields){
        let caseRule = $9d352704d090efa5$var$CaseRules.None;
        if (kvPair1 == null) fail(kvPair1);
        // Deflate unions and use the defined case rule
        if (kvPair1 instanceof $52d096336d1d74e9$export$6cbb4f8fa0c4c986) {
            const name = kvPair1.cases()[kvPair1.tag];
            kvPair1 = kvPair1.fields.length === 0 ? name : [
                name
            ].concat(kvPair1.fields);
            caseRule = definedCaseRule;
        }
        if (Array.isArray(kvPair1)) switch(kvPair1.length){
            case 0:
                fail(kvPair1);
                break;
            case 1:
                assign(kvPair1[0], caseRule, true);
                break;
            case 2:
                const value = kvPair1[1];
                assign(kvPair1[0], caseRule, value);
                break;
            default:
                assign(kvPair1[0], caseRule, kvPair1.slice(1));
        }
        else if (typeof kvPair1 === "string") assign(kvPair1, caseRule, true);
        else fail(kvPair1);
    }
    return obj;
}
function $9d352704d090efa5$export$ce913dab6077e540(v, map) {
    for (const kv of map){
        if ($4261fbb19e0b4aac$export$e9bab7fafb253603(v, kv[1])) return true;
    }
    return false;
}
function $9d352704d090efa5$export$8e0f4a40881f4a6f(map, key, defaultValue) {
    if (map.has(key)) {
        defaultValue.contents = map.get(key);
        return true;
    }
    return false;
}
function $9d352704d090efa5$export$59d4ed6bef8b84dd(v, set) {
    if (set.has(v)) return false;
    set.add(v);
    return true;
}
function $9d352704d090efa5$export$640abc42af5f7b25(dict, k, v) {
    if (dict.has(k)) throw new Error("An item with the same key has already been added. Key: " + k);
    dict.set(k, v);
}
function $9d352704d090efa5$export$6e0d12c66f82a152(map, key) {
    if (map.has(key)) return map.get(key);
    else throw new Error(`The given key '${key}' was not present in the dictionary.`);
}



let $fa430270a1cc70db$var$lastDocState = new $2c0e5be185a9291c$export$e2baa7eb8e218448("", 0, []);
const $fa430270a1cc70db$var$docWrappingColumns = new Map([]);
function $fa430270a1cc70db$export$2eecdacd3f587409(filePath, rulers) {
    let x;
    const setAndReturn = (column)=>{
        $fa430270a1cc70db$var$docWrappingColumns.set(filePath, column);
        return column | 0;
    };
    const firstRuler = $1d849aa8ef8b0f61$export$5fd5031fecdacec3(rulers) | 0;
    if (!$fa430270a1cc70db$var$docWrappingColumns.has(filePath)) return setAndReturn(firstRuler) | 0;
    else return setAndReturn($cbf049927489a6e9$export$37721a79838ca038($1d849aa8ef8b0f61$export$d65cb303b863e3bf((x = $9d352704d090efa5$export$6e0d12c66f82a152($fa430270a1cc70db$var$docWrappingColumns, filePath) | 0, (y)=>x === y
    ), rulers), firstRuler)) | 0;
}
function $fa430270a1cc70db$export$e6ea2f8a2f53b195(docState, rulers) {
    let x;
    const filePath = docState.filePath;
    if (!$fa430270a1cc70db$var$docWrappingColumns.has(filePath)) return $fa430270a1cc70db$export$2eecdacd3f587409(filePath, rulers) | 0;
    else {
        const rulerIndex = $cbf049927489a6e9$export$37721a79838ca038($cbf049927489a6e9$export$871de8747c9eaa88((i)=>{
            if ($4261fbb19e0b4aac$export$e9bab7fafb253603(docState, $fa430270a1cc70db$var$lastDocState)) return (i + 1) % rulers.length | 0;
            else return i | 0;
        }, $1d849aa8ef8b0f61$export$5c13475397a61429((x = $9d352704d090efa5$export$6e0d12c66f82a152($fa430270a1cc70db$var$docWrappingColumns, filePath) | 0, (y)=>x === y
        ), rulers)), 0) | 0;
        $fa430270a1cc70db$var$docWrappingColumns.set(filePath, rulers[rulerIndex]);
        return $9d352704d090efa5$export$6e0d12c66f82a152($fa430270a1cc70db$var$docWrappingColumns, filePath) | 0;
    }
}
function $fa430270a1cc70db$export$5b4c6cdc0f868d63(docState) {
    $fa430270a1cc70db$var$lastDocState = docState;
}
















function $7daf559abfa35e2a$export$5aed47dd1f4bcbcc(hash, eq) {
    return {
        Equals (x, y) {
            return eq(x, y);
        },
        GetHashCode (x_1) {
            return hash(x_1);
        }
    };
}
function $7daf559abfa35e2a$export$2887c3ff5c15faf3() {
    return $7daf559abfa35e2a$export$5aed47dd1f4bcbcc((obj)=>$4261fbb19e0b4aac$export$2e619f11ca48bee4(obj)
    , (e1, e2)=>$4261fbb19e0b4aac$export$e9bab7fafb253603(e1, e2)
    );
}
function $7daf559abfa35e2a$export$ab9580ec4835c401() {
    return $7daf559abfa35e2a$export$5aed47dd1f4bcbcc((obj)=>$4261fbb19e0b4aac$export$9657185e7652fc5b(obj)
    , (e1, e2)=>e1 === e2
    );
}
function $7daf559abfa35e2a$export$5deb45fecd67f859(comparer) {
    return {
        Compare (x, y) {
            return comparer(x, y);
        }
    };
}
function $7daf559abfa35e2a$export$fe834b789c7fece1() {
    return $7daf559abfa35e2a$export$5deb45fecd67f859((e1, e2)=>$4261fbb19e0b4aac$export$398604a469f7de9a(e1, e2)
    );
}




function $936302e085356e9e$export$4dcf2a40c0851df0(offset) {
    const isMinus = offset < 0;
    offset = Math.abs(offset);
    const hours = ~~(offset / 3600000);
    const minutes = offset % 3600000 / 60000;
    return (isMinus ? "-" : "+") + $4261fbb19e0b4aac$export$eeb1958fe3944641(hours, 2) + ":" + $4261fbb19e0b4aac$export$eeb1958fe3944641(minutes, 2);
}
function $936302e085356e9e$export$44fcf6ab0130c000(date, half) {
    const str = date.toISOString();
    return half === "first" ? str.substring(0, str.indexOf("T")) : str.substring(str.indexOf("T") + 1, str.length - 1);
}
function $936302e085356e9e$var$dateToISOString(d, utc) {
    if (utc) return d.toISOString();
    else {
        // JS Date is always local
        const printOffset = d.kind == null ? true : d.kind === 2 /* Local */ ;
        return $4261fbb19e0b4aac$export$eeb1958fe3944641(d.getFullYear(), 4) + "-" + $4261fbb19e0b4aac$export$eeb1958fe3944641(d.getMonth() + 1, 2) + "-" + $4261fbb19e0b4aac$export$eeb1958fe3944641(d.getDate(), 2) + "T" + $4261fbb19e0b4aac$export$eeb1958fe3944641(d.getHours(), 2) + ":" + $4261fbb19e0b4aac$export$eeb1958fe3944641(d.getMinutes(), 2) + ":" + $4261fbb19e0b4aac$export$eeb1958fe3944641(d.getSeconds(), 2) + "." + $4261fbb19e0b4aac$export$eeb1958fe3944641(d.getMilliseconds(), 3) + (printOffset ? $936302e085356e9e$export$4dcf2a40c0851df0(d.getTimezoneOffset() * -60000) : "");
    }
}
function $936302e085356e9e$var$dateToISOStringWithOffset(dateWithOffset, offset) {
    const str = dateWithOffset.toISOString();
    return str.substring(0, str.length - 1) + $936302e085356e9e$export$4dcf2a40c0851df0(offset);
}
function $936302e085356e9e$var$dateToStringWithCustomFormat(date, format, utc) {
    return format.replace(/(\w)\1*/g, (match)=>{
        let rep = Number.NaN;
        switch(match.substring(0, 1)){
            case "y":
                const y = utc ? date.getUTCFullYear() : date.getFullYear();
                rep = match.length < 4 ? y % 100 : y;
                break;
            case "M":
                rep = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
                break;
            case "d":
                rep = utc ? date.getUTCDate() : date.getDate();
                break;
            case "H":
                rep = utc ? date.getUTCHours() : date.getHours();
                break;
            case "h":
                const h = utc ? date.getUTCHours() : date.getHours();
                rep = h > 12 ? h % 12 : h;
                break;
            case "m":
                rep = utc ? date.getUTCMinutes() : date.getMinutes();
                break;
            case "s":
                rep = utc ? date.getUTCSeconds() : date.getSeconds();
                break;
            case "f":
                rep = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
                break;
        }
        if (Number.isNaN(rep)) return match;
        else return rep < 10 && match.length > 1 ? "0" + rep : "" + rep;
    });
}
function $936302e085356e9e$var$dateToStringWithOffset(date, format) {
    var _a, _b, _c;
    const d = new Date(date.getTime() + ((_a = date.offset) !== null && _a !== void 0 ? _a : 0));
    if (typeof format !== "string") return d.toISOString().replace(/\.\d+/, "").replace(/[A-Z]|\.\d+/g, " ") + $936302e085356e9e$export$4dcf2a40c0851df0((_b = date.offset) !== null && _b !== void 0 ? _b : 0);
    else if (format.length === 1) switch(format){
        case "D":
        case "d":
            return $936302e085356e9e$export$44fcf6ab0130c000(d, "first");
        case "T":
        case "t":
            return $936302e085356e9e$export$44fcf6ab0130c000(d, "second");
        case "O":
        case "o":
            return $936302e085356e9e$var$dateToISOStringWithOffset(d, (_c = date.offset) !== null && _c !== void 0 ? _c : 0);
        default:
            throw new Error("Unrecognized Date print format");
    }
    else return $936302e085356e9e$var$dateToStringWithCustomFormat(d, format, true);
}
function $936302e085356e9e$var$dateToStringWithKind(date, format) {
    const utc = date.kind === 1 /* UTC */ ;
    if (typeof format !== "string") return utc ? date.toUTCString() : date.toLocaleString();
    else if (format.length === 1) switch(format){
        case "D":
        case "d":
            return utc ? $936302e085356e9e$export$44fcf6ab0130c000(date, "first") : date.toLocaleDateString();
        case "T":
        case "t":
            return utc ? $936302e085356e9e$export$44fcf6ab0130c000(date, "second") : date.toLocaleTimeString();
        case "O":
        case "o":
            return $936302e085356e9e$var$dateToISOString(date, utc);
        default:
            throw new Error("Unrecognized Date print format");
    }
    else return $936302e085356e9e$var$dateToStringWithCustomFormat(date, format, utc);
}
function $936302e085356e9e$export$f84e8e69fd4488a5(date, format, _provider) {
    return date.offset != null ? $936302e085356e9e$var$dateToStringWithOffset(date, format) : $936302e085356e9e$var$dateToStringWithKind(date, format);
}
function $936302e085356e9e$export$82f9ebd9adeba146(value, kind) {
    const d = new Date(value);
    d.kind = (kind == null ? 0 /* Unspecified */  : kind) | 0;
    return d;
}
function $936302e085356e9e$export$b4dd4c63617c9281(ticks, kind) {
    ticks = $9e7becb4b036935b$export$5f36b26c3833b3ba(ticks);
    kind = kind != null ? kind : 2 /* Local */ ; // better default than Unspecified
    let date = $936302e085356e9e$export$82f9ebd9adeba146($9e7becb4b036935b$export$2044bef34fee81ea(ticks), kind);
    // Ticks are local to offset (in this case, either UTC or Local/Unknown).
    // If kind is anything but UTC, that means that the tick number was not
    // in utc, thus getTime() cannot return UTC, and needs to be shifted.
    if (kind !== 1 /* UTC */ ) date = $936302e085356e9e$export$82f9ebd9adeba146(date.getTime() - $4261fbb19e0b4aac$export$b4360650442640a0(date), kind);
    return date;
}
function $936302e085356e9e$export$e10d98d82915c35a(date, kind) {
    var _a;
    switch(kind){
        case 1 /* UTC */ :
            return $936302e085356e9e$export$82f9ebd9adeba146(date.getTime(), 1 /* UTC */ );
        case 2 /* Local */ :
            return $936302e085356e9e$export$82f9ebd9adeba146(date.getTime(), 2 /* Local */ );
        default:
            const d = $936302e085356e9e$export$82f9ebd9adeba146(date.getTime() + ((_a = date.offset) !== null && _a !== void 0 ? _a : 0), kind);
            return $936302e085356e9e$export$82f9ebd9adeba146(d.getTime() - $4261fbb19e0b4aac$export$b4360650442640a0(d), kind);
    }
}
function $936302e085356e9e$export$3d27d42b1034de5c(date) {
    return $9e7becb4b036935b$export$b04aee43a70c325e(date.getTime(), $4261fbb19e0b4aac$export$b4360650442640a0(date));
}
function $936302e085356e9e$export$5805e19da86cbb3c() {
    // This is "0001-01-01T00:00:00.000Z", actual JS min value is -8640000000000000
    return $936302e085356e9e$export$82f9ebd9adeba146(-62135596800000, 0 /* Unspecified */ );
}
function $936302e085356e9e$export$b9dc90d6499a9909() {
    // This is "9999-12-31T23:59:59.999Z", actual JS max value is 8640000000000000
    return $936302e085356e9e$export$82f9ebd9adeba146(253402300799999, 0 /* Unspecified */ );
}
function $936302e085356e9e$export$a6658d265f3f7695(input) {
    function fail() {
        throw new Error(`The string is not a valid Date: ${input}`);
    }
    if (input === null || input.trim() === "") fail();
    // ISO dates without TZ are parsed as UTC. Adding time without TZ keeps them local.
    if (input.length === 10 && input[4] === "-" && input[7] === "-") input += "T00:00:00";
    let date = new Date(input);
    let offset = null;
    if (isNaN(date.getTime())) {
        // Try to check strings JS Date cannot parse (see #1045, #1422)
        // tslint:disable-next-line:max-line-length
        const m = /^\s*(\d+[^\w\s:]\d+[^\w\s:]\d+)?\s*(\d+:\d+(?::\d+(?:\.\d+)?)?)?\s*([AaPp][Mm])?\s*(Z|[+-]([01]?\d):?([0-5]?\d)?)?\s*$/.exec(input);
        if (m != null) {
            let baseDate;
            let timeInSeconds = 0;
            if (m[2] != null) {
                const timeParts = m[2].split(":");
                timeInSeconds = parseInt(timeParts[0], 10) * 3600 + parseInt(timeParts[1] || "0", 10) * 60 + parseFloat(timeParts[2] || "0");
                if (m[3] != null && m[3].toUpperCase() === "PM") timeInSeconds += 720;
            }
            if (m[4] != null) {
                if (m[1] != null) baseDate = new Date(m[1] + " UTC");
                else {
                    const d = new Date();
                    baseDate = new Date(d.getUTCFullYear() + "/" + (d.getUTCMonth() + 1) + "/" + d.getUTCDate());
                }
                if (m[4] === "Z") offset = "Z";
                else {
                    let offsetInMinutes = parseInt(m[5], 10) * 60 + parseInt(m[6] || "0", 10);
                    if (m[4][0] === "-") offsetInMinutes *= -1;
                    offset = offsetInMinutes;
                    timeInSeconds -= offsetInMinutes * 60;
                }
            } else if (m[1] != null) baseDate = new Date(m[1]);
            else {
                const d = new Date();
                baseDate = new Date(d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate());
            }
            date = new Date(baseDate.getTime() + timeInSeconds * 1000);
            // correct for daylight savings time
            date = new Date(date.getTime() + (date.getTimezoneOffset() - baseDate.getTimezoneOffset()) * 60000);
        } else fail();
        // Check again the date is valid after transformations, see #2229
        if (isNaN(date.getTime())) fail();
    }
    return [
        date,
        offset
    ];
}
function $936302e085356e9e$export$98e6a39c04603d36(str, detectUTC = false) {
    const [date, offset] = $936302e085356e9e$export$a6658d265f3f7695(str);
    // .NET always parses DateTime as Local if there's offset info (even "Z")
    // Newtonsoft.Json uses UTC if the offset is "Z"
    const kind = offset != null ? detectUTC && offset === "Z" ? 1 /* UTC */  : 2 /* Local */  : 0 /* Unspecified */ ;
    return $936302e085356e9e$export$82f9ebd9adeba146(date.getTime(), kind);
}
function $936302e085356e9e$export$468ff95b83d315e5(v, defValue) {
    try {
        defValue.contents = $936302e085356e9e$export$98e6a39c04603d36(v);
        return true;
    } catch (_err) {
        return false;
    }
}
function $936302e085356e9e$export$185802fd694ee1f5(year, month, day, h = 0, m = 0, s = 0, ms = 0, kind) {
    const dateValue = kind === 1 /* UTC */  ? Date.UTC(year, month - 1, day, h, m, s, ms) : new Date(year, month - 1, day, h, m, s, ms).getTime();
    if (isNaN(dateValue)) throw new Error("The parameters describe an unrepresentable Date.");
    const date = $936302e085356e9e$export$82f9ebd9adeba146(dateValue, kind);
    if (year <= 99) date.setFullYear(year, month - 1, day);
    return date;
}
function $936302e085356e9e$export$461939dd4422153() {
    return $936302e085356e9e$export$82f9ebd9adeba146(Date.now(), 2 /* Local */ );
}
function $936302e085356e9e$export$a56f095995763cca() {
    return $936302e085356e9e$export$82f9ebd9adeba146(Date.now(), 1 /* UTC */ );
}
function $936302e085356e9e$export$d0bdf45af03a6ea3() {
    return $936302e085356e9e$export$324d90190a8b822a($936302e085356e9e$export$461939dd4422153());
}
function $936302e085356e9e$export$553d7fa8e3805fc0(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function $936302e085356e9e$export$4169ecd548fbc13a(year, month) {
    return month === 2 ? $936302e085356e9e$export$553d7fa8e3805fc0(year) ? 29 : 28 : month >= 8 ? month % 2 === 0 ? 31 : 30 : month % 2 === 0 ? 30 : 31;
}
function $936302e085356e9e$export$3230e995afdc9bec(date) {
    return date.kind === 1 /* UTC */  ? date : $936302e085356e9e$export$82f9ebd9adeba146(date.getTime(), 1 /* UTC */ );
}
function $936302e085356e9e$export$b96ad347bdf3bd16(date) {
    return date.kind === 2 /* Local */  ? date : $936302e085356e9e$export$82f9ebd9adeba146(date.getTime(), 2 /* Local */ );
}
function $936302e085356e9e$export$5289b38f662a812a(d, kind) {
    return $936302e085356e9e$export$185802fd694ee1f5($936302e085356e9e$export$31803937850fb2da(d), $936302e085356e9e$export$af5de1609f06c8e6(d), $936302e085356e9e$export$d2d39d1adcc883a2(d), $936302e085356e9e$export$842e383dfc19bc67(d), $936302e085356e9e$export$1cacba1045a8e790(d), $936302e085356e9e$export$3d3c77ce7df7d30d(d), $936302e085356e9e$export$edc5e5cb87280477(d), kind);
}
function $936302e085356e9e$export$54a89be6af0881dc(d) {
    return $936302e085356e9e$export$842e383dfc19bc67(d) * 3600000 + $936302e085356e9e$export$1cacba1045a8e790(d) * 60000 + $936302e085356e9e$export$3d3c77ce7df7d30d(d) * 1000 + $936302e085356e9e$export$edc5e5cb87280477(d);
}
function $936302e085356e9e$export$324d90190a8b822a(d) {
    return $936302e085356e9e$export$185802fd694ee1f5($936302e085356e9e$export$31803937850fb2da(d), $936302e085356e9e$export$af5de1609f06c8e6(d), $936302e085356e9e$export$d2d39d1adcc883a2(d), 0, 0, 0, 0, d.kind);
}
function $936302e085356e9e$export$d2d39d1adcc883a2(d) {
    return d.kind === 1 /* UTC */  ? d.getUTCDate() : d.getDate();
}
function $936302e085356e9e$export$842e383dfc19bc67(d) {
    return d.kind === 1 /* UTC */  ? d.getUTCHours() : d.getHours();
}
function $936302e085356e9e$export$edc5e5cb87280477(d) {
    return d.kind === 1 /* UTC */  ? d.getUTCMilliseconds() : d.getMilliseconds();
}
function $936302e085356e9e$export$1cacba1045a8e790(d) {
    return d.kind === 1 /* UTC */  ? d.getUTCMinutes() : d.getMinutes();
}
function $936302e085356e9e$export$af5de1609f06c8e6(d) {
    return (d.kind === 1 /* UTC */  ? d.getUTCMonth() : d.getMonth()) + 1;
}
function $936302e085356e9e$export$3d3c77ce7df7d30d(d) {
    return d.kind === 1 /* UTC */  ? d.getUTCSeconds() : d.getSeconds();
}
function $936302e085356e9e$export$31803937850fb2da(d) {
    return d.kind === 1 /* UTC */  ? d.getUTCFullYear() : d.getFullYear();
}
function $936302e085356e9e$export$a24aefd2b69080a9(d) {
    return d.kind === 1 /* UTC */  ? d.getUTCDay() : d.getDay();
}
function $936302e085356e9e$export$75898a44428fae85(d) {
    const _year = $936302e085356e9e$export$31803937850fb2da(d);
    const _month = $936302e085356e9e$export$af5de1609f06c8e6(d);
    let _day = $936302e085356e9e$export$d2d39d1adcc883a2(d);
    for(let i = 1; i < _month; i++)_day += $936302e085356e9e$export$4169ecd548fbc13a(_year, i);
    return _day;
}
function $936302e085356e9e$export$e16d8520af44a096(d, ts) {
    const newDate = $936302e085356e9e$export$82f9ebd9adeba146(d.getTime() + ts, d.kind);
    if (d.kind === 2 /* Local */ ) {
        const oldTzOffset = d.getTimezoneOffset();
        const newTzOffset = newDate.getTimezoneOffset();
        return oldTzOffset !== newTzOffset ? $936302e085356e9e$export$82f9ebd9adeba146(newDate.getTime() + (newTzOffset - oldTzOffset) * 60000, d.kind) : newDate;
    } else return newDate;
}
function $936302e085356e9e$export$dd412b56f1e4d8aa(d, v) {
    return $936302e085356e9e$export$e16d8520af44a096(d, v * 86400000);
}
function $936302e085356e9e$export$4a4306ad4fa0e5e6(d, v) {
    return $936302e085356e9e$export$e16d8520af44a096(d, v * 3600000);
}
function $936302e085356e9e$export$2287e3d29250119e(d, v) {
    return $936302e085356e9e$export$e16d8520af44a096(d, v * 60000);
}
function $936302e085356e9e$export$3cb31b0df13be68(d, v) {
    return $936302e085356e9e$export$e16d8520af44a096(d, v * 1000);
}
function $936302e085356e9e$export$baf757aaf0c95c94(d, v) {
    return $936302e085356e9e$export$e16d8520af44a096(d, v);
}
function $936302e085356e9e$export$3d83eec43f4ea476(d, v) {
    const newMonth = $936302e085356e9e$export$af5de1609f06c8e6(d);
    const newYear = $936302e085356e9e$export$31803937850fb2da(d) + v;
    const _daysInMonth = $936302e085356e9e$export$4169ecd548fbc13a(newYear, newMonth);
    const newDay = Math.min(_daysInMonth, $936302e085356e9e$export$d2d39d1adcc883a2(d));
    return $936302e085356e9e$export$185802fd694ee1f5(newYear, newMonth, newDay, $936302e085356e9e$export$842e383dfc19bc67(d), $936302e085356e9e$export$1cacba1045a8e790(d), $936302e085356e9e$export$3d3c77ce7df7d30d(d), $936302e085356e9e$export$edc5e5cb87280477(d), d.kind);
}
function $936302e085356e9e$export$17c93e242b2d3a22(d, v) {
    let newMonth = $936302e085356e9e$export$af5de1609f06c8e6(d) + v;
    let newMonth_ = 0;
    let yearOffset = 0;
    if (newMonth > 12) {
        newMonth_ = newMonth % 12;
        yearOffset = Math.floor(newMonth / 12);
        newMonth = newMonth_;
    } else if (newMonth < 1) {
        newMonth_ = 12 + newMonth % 12;
        yearOffset = Math.floor(newMonth / 12) + (newMonth_ === 12 ? -1 : 0);
        newMonth = newMonth_;
    }
    const newYear = $936302e085356e9e$export$31803937850fb2da(d) + yearOffset;
    const _daysInMonth = $936302e085356e9e$export$4169ecd548fbc13a(newYear, newMonth);
    const newDay = Math.min(_daysInMonth, $936302e085356e9e$export$d2d39d1adcc883a2(d));
    return $936302e085356e9e$export$185802fd694ee1f5(newYear, newMonth, newDay, $936302e085356e9e$export$842e383dfc19bc67(d), $936302e085356e9e$export$1cacba1045a8e790(d), $936302e085356e9e$export$3d3c77ce7df7d30d(d), $936302e085356e9e$export$edc5e5cb87280477(d), d.kind);
}
function $936302e085356e9e$export$4e2d2ead65e5f7e3(d, that) {
    return typeof that === "number" ? $936302e085356e9e$export$e16d8520af44a096(d, -that) : d.getTime() - that.getTime();
}
function $936302e085356e9e$export$c72df26d2bb0681f(d) {
    return d.toDateString();
}
function $936302e085356e9e$export$ed29312e46cde58f(d) {
    return d.toLocaleDateString();
}
function $936302e085356e9e$export$f45b9f9645a703d3(d) {
    return d.toLocaleTimeString();
}
function $936302e085356e9e$export$9384d167e08fd225(d) {
    return d.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
}
function $936302e085356e9e$export$e9bab7fafb253603(d1, d2) {
    return d1.getTime() === d2.getTime();
}
const $936302e085356e9e$export$398604a469f7de9a = $4261fbb19e0b4aac$export$c4c806e061935577;
const $936302e085356e9e$export$53576907a5c40ba3 = $4261fbb19e0b4aac$export$c4c806e061935577;
function $936302e085356e9e$export$a5fb1fdca49990a(x, y) {
    return $936302e085356e9e$export$e16d8520af44a096(x, y);
}
function $936302e085356e9e$export$1ba572a54983744c(x, y) {
    return $936302e085356e9e$export$4e2d2ead65e5f7e3(x, y);
}
function $936302e085356e9e$export$22d85042c308f25c(x) {
    const jan = new Date(x.getFullYear(), 0, 1);
    const jul = new Date(x.getFullYear(), 6, 1);
    return $936302e085356e9e$var$isDST(jan.getTimezoneOffset(), jul.getTimezoneOffset(), x.getTimezoneOffset());
}
function $936302e085356e9e$var$isDST(janOffset, julOffset, tOffset) {
    return Math.min(janOffset, julOffset) === tOffset;
}
var $936302e085356e9e$export$2e2bcd8739ae039 = $936302e085356e9e$export$82f9ebd9adeba146;



function $9daa05e285c504d2$export$185802fd694ee1f5(pattern, options = 0) {
    // Supported RegexOptions
    // * IgnoreCase:  0x0001
    // * Multiline:   0x0002
    // * Singleline:  0x0010
    // * ECMAScript:  0x0100 (ignored)
    if ((options & -276) !== 0) throw new Error("RegexOptions only supports: IgnoreCase, Multiline, Singleline and ECMAScript");
    let flags = "g";
    flags += options & 1 ? "i" : ""; // 0x0001 RegexOptions.IgnoreCase
    flags += options & 2 ? "m" : "";
    flags += options & 16 ? "s" : "";
    return new RegExp(pattern, flags);
}
function $9daa05e285c504d2$export$4e7f196112fea3c5(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
function $9daa05e285c504d2$export$e8bacd2802a88316(str) {
    return str.replace(/\\([\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|])/g, "$1");
}
function $9daa05e285c504d2$export$b74c33566721f70f(str, pattern, options = 0) {
    let reg;
    reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = $9daa05e285c504d2$export$185802fd694ee1f5(pattern, options);
    return reg.test(str);
}
function $9daa05e285c504d2$export$4659b591c19bdf3d(str, pattern, options = 0) {
    let reg;
    reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = $9daa05e285c504d2$export$185802fd694ee1f5(pattern, options);
    return reg.exec(str);
}
function $9daa05e285c504d2$export$de994efd351b291c(str, pattern, options = 0) {
    let reg;
    reg = str instanceof RegExp ? (reg = str, str = pattern, reg.lastIndex = options, reg) : reg = $9daa05e285c504d2$export$185802fd694ee1f5(pattern, options);
    if (!reg.global) throw new Error("Non-global RegExp"); // Prevent infinite loop
    let m = reg.exec(str);
    const matches = [];
    while(m !== null){
        matches.push(m);
        m = reg.exec(str);
    }
    return matches;
}
function $9daa05e285c504d2$export$41c562ebe57d11e2(reg) {
    let options = 256; // ECMAScript
    options |= reg.ignoreCase ? 1 : 0;
    options |= reg.multiline ? 2 : 0;
    return options;
}
function $9daa05e285c504d2$export$77ad94ebf1c2b9ed(reg, input, replacement, limit, offset = 0) {
    function replacer() {
        let res = arguments[0];
        if (limit) {
            limit--;
            const match = [];
            const len = arguments.length;
            // arguments: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#specifying_a_function_as_a_parameter
            // * match: matched substring
            // * p1, p2, ...: nth capture group string
            // * offset: offset of matched substring
            // * string: whole string examined
            // * groups: named capturing groups
            //           ONLY if regex contains a named capture group AND browser supports named groups
            // -> last element can be groups OR input string
            // -> check if last element is string
            const withGroups = typeof arguments[len - 1] !== "string";
            let pLast = withGroups ? len - 3 : len - 2;
            for(let i = 0; i < pLast; i++)match.push(arguments[i]);
            match.index = arguments[pLast++];
            match.input = arguments[pLast++];
            if (withGroups) match.groups = arguments[pLast];
            res = replacement(match);
        }
        return res;
    }
    if (typeof reg === "string") {
        const tmp = reg;
        reg = $9daa05e285c504d2$export$185802fd694ee1f5(input, limit !== null && limit !== void 0 ? limit : 0);
        input = tmp;
        limit = undefined;
    }
    if (typeof replacement === "function") {
        limit = limit == null ? -1 : limit;
        return input.substring(0, offset) + input.substring(offset).replace(reg, replacer);
    } else {
        replacement = replacement// $0 doesn't work with JS regex, see #1155
        .replace(/\$0/g, (_s)=>"$&"
        )// named groups in replacement are `${name}` in .Net, but `$<name>` in JS (in regex: groups are `(?<name>...)` in both)
        .replace(/\${([^}]+)}/g, "\$<$1>");
        if (limit != null) {
            let m;
            const sub1 = input.substring(offset);
            const _matches = $9daa05e285c504d2$export$de994efd351b291c(reg, sub1);
            const sub2 = $9daa05e285c504d2$export$de994efd351b291c.length > limit ? (m = _matches[limit - 1], sub1.substring(0, m.index + m[0].length)) : sub1;
            return input.substring(0, offset) + sub2.replace(reg, replacement) + input.substring(offset + sub2.length);
        } else return input.replace(reg, replacement);
    }
}
function $9daa05e285c504d2$export$65980d18b75784e2(reg, input, limit, offset = 0) {
    if (typeof reg === "string") {
        const tmp = reg;
        reg = $9daa05e285c504d2$export$185802fd694ee1f5(input, limit !== null && limit !== void 0 ? limit : 0);
        input = tmp;
        limit = undefined;
    }
    input = input.substring(offset);
    return input.split(reg, limit);
}



const $575619fada8b5e88$var$fsFormatRegExp = /(^|[^%])%([0+\- ]*)(\*|\d+)?(?:\.(\d+))?(\w)/g;
const $575619fada8b5e88$var$interpolateRegExp = /(?:(^|[^%])%([0+\- ]*)(\d+)?(?:\.(\d+))?(\w))?%P\(\)/g;
const $575619fada8b5e88$var$formatRegExp = /\{(\d+)(,-?\d+)?(?:\:([a-zA-Z])(\d{0,2})|\:(.+?))?\}/g;
function $575619fada8b5e88$var$isLessThan(x, y) {
    return $6997ebb8332b0ba8$export$398604a469f7de9a(x, y) < 0;
}
function $575619fada8b5e88$var$cmp(x, y, ic) {
    function isIgnoreCase(i) {
        return i === true || i === 1 /* CurrentCultureIgnoreCase */  || i === 3 /* InvariantCultureIgnoreCase */  || i === 5 /* OrdinalIgnoreCase */ ;
    }
    function isOrdinal(i) {
        return i === 4 /* Ordinal */  || i === 5 /* OrdinalIgnoreCase */ ;
    }
    if (x == null) return y == null ? 0 : -1;
    if (y == null) return 1;
     // everything is bigger than null
    if (isOrdinal(ic)) {
        if (isIgnoreCase(ic)) {
            x = x.toLowerCase();
            y = y.toLowerCase();
        }
        return x === y ? 0 : x < y ? -1 : 1;
    } else {
        if (isIgnoreCase(ic)) {
            x = x.toLocaleLowerCase();
            y = y.toLocaleLowerCase();
        }
        return x.localeCompare(y);
    }
}
function $575619fada8b5e88$export$398604a469f7de9a(...args) {
    switch(args.length){
        case 2:
            return $575619fada8b5e88$var$cmp(args[0], args[1], false);
        case 3:
            return $575619fada8b5e88$var$cmp(args[0], args[1], args[2]);
        case 4:
            return $575619fada8b5e88$var$cmp(args[0], args[1], args[2] === true);
        case 5:
            return $575619fada8b5e88$var$cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), false);
        case 6:
            return $575619fada8b5e88$var$cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5]);
        case 7:
            return $575619fada8b5e88$var$cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5] === true);
        default:
            throw new Error("String.compare: Unsupported number of parameters");
    }
}
function $575619fada8b5e88$export$bfd84690a68064b1(x, y) {
    return $575619fada8b5e88$var$cmp(x, y, 4 /* Ordinal */ );
}
function $575619fada8b5e88$export$53576907a5c40ba3(x, y) {
    return $575619fada8b5e88$var$cmp(x, y, 0 /* CurrentCulture */ );
}
function $575619fada8b5e88$export$68326237475e9a7d(str, pattern, ic) {
    if (str.length >= pattern.length) return $575619fada8b5e88$var$cmp(str.substr(0, pattern.length), pattern, ic) === 0;
    return false;
}
function $575619fada8b5e88$export$3ce79d7714e5c4aa(str, anyOf, ...args) {
    if (str == null || str === "") return -1;
    const startIndex = args.length > 0 ? args[0] : 0;
    if (startIndex < 0) throw new Error("Start index cannot be negative");
    const length = args.length > 1 ? args[1] : str.length - startIndex;
    if (length < 0) throw new Error("Length cannot be negative");
    if (length > str.length - startIndex) throw new Error("Invalid startIndex and length");
    str = str.substr(startIndex, length);
    for (const c of anyOf){
        const index = str.indexOf(c);
        if (index > -1) return index + startIndex;
    }
    return -1;
}
function $575619fada8b5e88$export$d1317194012d6b34(input) {
    return {
        input: input,
        cont: $575619fada8b5e88$export$214f04bcc4009507(input)
    };
}
function $575619fada8b5e88$export$89e29e4ab65e70a9(str, values) {
    let valIdx = 0;
    let strIdx = 0;
    let result = "";
    $575619fada8b5e88$var$interpolateRegExp.lastIndex = 0;
    let match = $575619fada8b5e88$var$interpolateRegExp.exec(str);
    while(match){
        // The first group corresponds to the no-escape char (^|[^%]), the actual pattern starts in the next char
        // Note: we don't use negative lookbehind because some browsers don't support it yet
        const matchIndex = match.index + (match[1] || "").length;
        result += str.substring(strIdx, matchIndex).replace(/%%/g, "%");
        const [, , flags, padLength, precision, format] = match;
        result += $575619fada8b5e88$var$formatReplacement(values[valIdx++], flags, padLength, precision, format);
        strIdx = $575619fada8b5e88$var$interpolateRegExp.lastIndex;
        // Likewise we need to move interpolateRegExp.lastIndex one char behind to make sure we match the no-escape char next time
        $575619fada8b5e88$var$interpolateRegExp.lastIndex -= 1;
        match = $575619fada8b5e88$var$interpolateRegExp.exec(str);
    }
    result += str.substring(strIdx).replace(/%%/g, "%");
    return result;
}
function $575619fada8b5e88$var$continuePrint(cont, arg) {
    return typeof arg === "string" ? cont(arg) : arg.cont(cont);
}
function $575619fada8b5e88$export$3de07bdccee76bc5(arg) {
    // Don't remove the lambda here, see #1357
    return $575619fada8b5e88$var$continuePrint((x)=>console.log(x)
    , arg);
}
function $575619fada8b5e88$export$457e5164de7d35a2(arg) {
    return $575619fada8b5e88$var$continuePrint((x)=>console.error(x)
    , arg);
}
function $575619fada8b5e88$export$598ff36d54604b81(arg) {
    return $575619fada8b5e88$var$continuePrint((x)=>x
    , arg);
}
function $575619fada8b5e88$export$c5eda7bb099ceb11(arg) {
    return $575619fada8b5e88$var$continuePrint((x)=>{
        throw new Error(x);
    }, arg);
}
function $575619fada8b5e88$var$formatReplacement(rep, flags, padLength, precision, format) {
    let sign = "";
    flags = flags || "";
    format = format || "";
    if ($6997ebb8332b0ba8$export$e90fb89750dba83f(rep)) {
        if (format.toLowerCase() !== "x") {
            if ($575619fada8b5e88$var$isLessThan(rep, 0)) {
                rep = $6997ebb8332b0ba8$export$2060d2db72cce88f(rep, -1);
                sign = "-";
            } else {
                if (flags.indexOf(" ") >= 0) sign = " ";
                else if (flags.indexOf("+") >= 0) sign = "+";
            }
        }
        precision = precision == null ? null : parseInt(precision, 10);
        switch(format){
            case "f":
            case "F":
                precision = precision != null ? precision : 6;
                rep = $6997ebb8332b0ba8$export$a81f732198733497(rep, precision);
                break;
            case "g":
            case "G":
                rep = precision != null ? $6997ebb8332b0ba8$export$3e91a10e66078270(rep, precision) : $6997ebb8332b0ba8$export$3e91a10e66078270(rep);
                break;
            case "e":
            case "E":
                rep = precision != null ? $6997ebb8332b0ba8$export$888cb08ddc4765be(rep, precision) : $6997ebb8332b0ba8$export$888cb08ddc4765be(rep);
                break;
            case "x":
                rep = $6997ebb8332b0ba8$export$7ea66e3774a60b67(rep);
                break;
            case "X":
                rep = $6997ebb8332b0ba8$export$7ea66e3774a60b67(rep).toUpperCase();
                break;
            default:
                rep = String(rep);
                break;
        }
    } else if (rep instanceof Date) rep = $936302e085356e9e$export$f84e8e69fd4488a5(rep);
    else rep = $52d096336d1d74e9$export$f84e8e69fd4488a5(rep);
    padLength = typeof padLength === "number" ? padLength : parseInt(padLength, 10);
    if (!isNaN(padLength)) {
        const zeroFlag = flags.indexOf("0") >= 0; // Use '0' for left padding
        const minusFlag = flags.indexOf("-") >= 0; // Right padding
        const ch = minusFlag || !zeroFlag ? " " : "0";
        if (ch === "0") {
            rep = $575619fada8b5e88$export$bc3bea8325045070(rep, padLength - sign.length, ch, minusFlag);
            rep = sign + rep;
        } else rep = $575619fada8b5e88$export$bc3bea8325045070(sign + rep, padLength, ch, minusFlag);
    } else rep = sign + rep;
    return rep;
}
function $575619fada8b5e88$var$createPrinter(cont, _strParts, _matches, _result = "", padArg = -1) {
    return (...args)=>{
        // Make copies of the values passed by reference because the function can be used multiple times
        let result = _result;
        const strParts = _strParts.slice();
        const matches = _matches.slice();
        for (const arg of args){
            const [, , flags, _padLength, precision, format] = matches[0];
            let padLength = _padLength;
            if (padArg >= 0) {
                padLength = padArg;
                padArg = -1;
            } else if (padLength === "*") {
                if (arg < 0) throw new Error("Non-negative number required");
                padArg = arg;
                continue;
            }
            result += strParts[0];
            result += $575619fada8b5e88$var$formatReplacement(arg, flags, padLength, precision, format);
            strParts.splice(0, 1);
            matches.splice(0, 1);
        }
        if (matches.length === 0) {
            result += strParts[0];
            return cont(result);
        } else return $575619fada8b5e88$var$createPrinter(cont, strParts, matches, result, padArg);
    };
}
function $575619fada8b5e88$export$214f04bcc4009507(str) {
    return (cont)=>{
        $575619fada8b5e88$var$fsFormatRegExp.lastIndex = 0;
        const strParts = [];
        const matches = [];
        let strIdx = 0;
        let match = $575619fada8b5e88$var$fsFormatRegExp.exec(str);
        while(match){
            // The first group corresponds to the no-escape char (^|[^%]), the actual pattern starts in the next char
            // Note: we don't use negative lookbehind because some browsers don't support it yet
            const matchIndex = match.index + (match[1] || "").length;
            strParts.push(str.substring(strIdx, matchIndex).replace(/%%/g, "%"));
            matches.push(match);
            strIdx = $575619fada8b5e88$var$fsFormatRegExp.lastIndex;
            // Likewise we need to move fsFormatRegExp.lastIndex one char behind to make sure we match the no-escape char next time
            $575619fada8b5e88$var$fsFormatRegExp.lastIndex -= 1;
            match = $575619fada8b5e88$var$fsFormatRegExp.exec(str);
        }
        if (strParts.length === 0) return cont(str.replace(/%%/g, "%"));
        else {
            strParts.push(str.substring(strIdx).replace(/%%/g, "%"));
            return $575619fada8b5e88$var$createPrinter(cont, strParts, matches);
        }
    };
}
function $575619fada8b5e88$export$d9468344d3651243(str, ...args) {
    if (typeof str === "object" && args.length > 0) {
        // Called with culture info
        str = args[0];
        args.shift();
    }
    return str.replace($575619fada8b5e88$var$formatRegExp, (_, idx, padLength, format, precision, pattern)=>{
        let rep = args[idx];
        if ($6997ebb8332b0ba8$export$e90fb89750dba83f(rep)) {
            precision = precision == null ? null : parseInt(precision, 10);
            switch(format){
                case "f":
                case "F":
                    precision = precision != null ? precision : 2;
                    rep = $6997ebb8332b0ba8$export$a81f732198733497(rep, precision);
                    break;
                case "g":
                case "G":
                    rep = precision != null ? $6997ebb8332b0ba8$export$3e91a10e66078270(rep, precision) : $6997ebb8332b0ba8$export$3e91a10e66078270(rep);
                    break;
                case "e":
                case "E":
                    rep = precision != null ? $6997ebb8332b0ba8$export$888cb08ddc4765be(rep, precision) : $6997ebb8332b0ba8$export$888cb08ddc4765be(rep);
                    break;
                case "p":
                case "P":
                    precision = precision != null ? precision : 2;
                    rep = $6997ebb8332b0ba8$export$a81f732198733497($6997ebb8332b0ba8$export$2060d2db72cce88f(rep, 100), precision) + " %";
                    break;
                case "d":
                case "D":
                    rep = precision != null ? $575619fada8b5e88$export$bc3bea8325045070(String(rep), precision, "0") : String(rep);
                    break;
                case "x":
                case "X":
                    rep = precision != null ? $575619fada8b5e88$export$bc3bea8325045070($6997ebb8332b0ba8$export$7ea66e3774a60b67(rep), precision, "0") : $6997ebb8332b0ba8$export$7ea66e3774a60b67(rep);
                    if (format === "X") rep = rep.toUpperCase();
                    break;
                default:
                    if (pattern) {
                        let sign = "";
                        rep = pattern.replace(/(0+)(\.0+)?/, (_, intPart, decimalPart)=>{
                            if ($575619fada8b5e88$var$isLessThan(rep, 0)) {
                                rep = $6997ebb8332b0ba8$export$2060d2db72cce88f(rep, -1);
                                sign = "-";
                            }
                            rep = $6997ebb8332b0ba8$export$a81f732198733497(rep, decimalPart != null ? decimalPart.length - 1 : 0);
                            return $575619fada8b5e88$export$bc3bea8325045070(rep, (intPart || "").length - sign.length + (decimalPart != null ? decimalPart.length : 0), "0");
                        });
                        rep = sign + rep;
                    }
            }
        } else if (rep instanceof Date) rep = $936302e085356e9e$export$f84e8e69fd4488a5(rep, pattern || format);
        else rep = $52d096336d1d74e9$export$f84e8e69fd4488a5(rep);
        padLength = parseInt((padLength || " ").substring(1), 10);
        if (!isNaN(padLength)) rep = $575619fada8b5e88$export$bc3bea8325045070(String(rep), Math.abs(padLength), " ", padLength < 0);
        return rep;
    });
}
function $575619fada8b5e88$export$10fdab3683b55b22(str, search) {
    const idx = str.lastIndexOf(search);
    return idx >= 0 && idx === str.length - search.length;
}
function $575619fada8b5e88$export$2a47f398eeff8b01(n, f) {
    if (n < 0) throw new Error("String length must be non-negative");
    const xs = new Array(n);
    for(let i = 0; i < n; i++)xs[i] = f(i);
    return xs.join("");
}
function $575619fada8b5e88$export$21a5ca8aa77d35ff(str, startIndex, value) {
    if (startIndex < 0 || startIndex > str.length) throw new Error("startIndex is negative or greater than the length of this instance.");
    return str.substring(0, startIndex) + value + str.substring(startIndex);
}
function $575619fada8b5e88$export$c8733ae29fb53302(str) {
    return typeof str !== "string" || str.length === 0;
}
function $575619fada8b5e88$export$c6e2787f63ca055d(str) {
    return typeof str !== "string" || /^\s*$/.test(str);
}
function $575619fada8b5e88$export$ee1b3e54f0441b22(...xs) {
    return xs.map((x)=>String(x)
    ).join("");
}
function $575619fada8b5e88$export$f7e2c8231c57a8bd(delimiter, xs) {
    if (Array.isArray(xs)) return xs.join(delimiter);
    else return Array.from(xs).join(delimiter);
}
function $575619fada8b5e88$export$5b532d5614fd5b39(delimiter, xs, startIndex, count) {
    const endIndexPlusOne = startIndex + count;
    if (endIndexPlusOne > xs.length) throw new Error("Index and count must refer to a location within the buffer.");
    return xs.slice(startIndex, endIndexPlusOne).join(delimiter);
}
function $575619fada8b5e88$var$notSupported(name) {
    throw new Error("The environment doesn't support '" + name + "', please use a polyfill.");
}
function $575619fada8b5e88$export$2e65ad783d953e9e(inArray) {
    let str = "";
    for(let i = 0; i < inArray.length; i++)str += String.fromCharCode(inArray[i]);
    return typeof btoa === "function" ? btoa(str) : $575619fada8b5e88$var$notSupported("btoa");
}
function $575619fada8b5e88$export$fdad0628bec1dd41(b64Encoded) {
    const binary = typeof atob === "function" ? atob(b64Encoded) : $575619fada8b5e88$var$notSupported("atob");
    const bytes = new Uint8Array(binary.length);
    for(let i = 0; i < binary.length; i++)bytes[i] = binary.charCodeAt(i);
    return bytes;
}
function $575619fada8b5e88$export$bc3bea8325045070(str, len, ch, isRight) {
    ch = ch || " ";
    len = len - str.length;
    for(let i = 0; i < len; i++)str = isRight ? str + ch : ch + str;
    return str;
}
function $575619fada8b5e88$export$7e24a29324041c48(str, len, ch) {
    return $575619fada8b5e88$export$bc3bea8325045070(str, len, ch, true);
}
function $575619fada8b5e88$export$cd7f480d6b8286c3(str, startIndex, count) {
    if (startIndex >= str.length) throw new Error("startIndex must be less than length of string");
    if (typeof count === "number" && startIndex + count > str.length) throw new Error("Index and count must refer to a location within the string.");
    return str.slice(0, startIndex) + (typeof count === "number" ? str.substr(startIndex + count) : "");
}
function $575619fada8b5e88$export$77ad94ebf1c2b9ed(str, search, replace) {
    return str.replace(new RegExp($9daa05e285c504d2$export$4e7f196112fea3c5(search), "g"), replace);
}
function $575619fada8b5e88$export$606959e7ccb797f0(n, x) {
    return $575619fada8b5e88$export$2a47f398eeff8b01(n, ()=>x
    );
}
function $575619fada8b5e88$export$2a1422e7517645a9(input, index) {
    if (index < 0 || index >= input.length) throw new Error("Index was outside the bounds of the array.");
    return input[index];
}
function $575619fada8b5e88$export$65980d18b75784e2(str, splitters, count, options) {
    count = typeof count === "number" ? count : undefined;
    options = typeof options === "number" ? options : 0;
    if (count && count < 0) throw new Error("Count cannot be less than zero");
    if (count === 0) return [];
    const removeEmpty = (options & 1) === 1;
    const trim = (options & 2) === 2;
    splitters = splitters || [];
    splitters = splitters.filter((x)=>x
    ).map($9daa05e285c504d2$export$4e7f196112fea3c5);
    splitters = splitters.length > 0 ? splitters : [
        "\\s"
    ];
    const splits = [];
    const reg = new RegExp(splitters.join("|"), "g");
    let findSplits = true;
    let i = 0;
    do {
        const match = reg.exec(str);
        if (match === null) {
            const candidate = trim ? str.substring(i).trim() : str.substring(i);
            if (!removeEmpty || candidate.length > 0) splits.push(candidate);
            findSplits = false;
        } else {
            const candidate = trim ? str.substring(i, match.index).trim() : str.substring(i, match.index);
            if (!removeEmpty || candidate.length > 0) {
                if (count != null && splits.length + 1 === count) {
                    splits.push(trim ? str.substring(i).trim() : str.substring(i));
                    findSplits = false;
                } else splits.push(candidate);
            }
            i = reg.lastIndex;
        }
    }while (findSplits)
    return splits;
}
function $575619fada8b5e88$export$87c2784dc9fc4ab(str, ...chars) {
    if (chars.length === 0) return str.trim();
    const pattern = "[" + $9daa05e285c504d2$export$4e7f196112fea3c5(chars.join("")) + "]+";
    return str.replace(new RegExp("^" + pattern), "").replace(new RegExp(pattern + "$"), "");
}
function $575619fada8b5e88$export$fec973013a01a752(str, ...chars) {
    return chars.length === 0 ? str.trimStart() : str.replace(new RegExp("^[" + $9daa05e285c504d2$export$4e7f196112fea3c5(chars.join("")) + "]+"), "");
}
function $575619fada8b5e88$export$8eb38b2a7b91ac21(str, ...chars) {
    return chars.length === 0 ? str.trimEnd() : str.replace(new RegExp("[" + $9daa05e285c504d2$export$4e7f196112fea3c5(chars.join("")) + "]+$"), "");
}
function $575619fada8b5e88$export$3dea766d36a8935f(pred, x) {
    return x.split("").filter((c)=>pred(c)
    ).join("");
}
function $575619fada8b5e88$export$662d3818631fba36(str, startIndex, length) {
    if (startIndex + (length || 0) > str.length) throw new Error("Invalid startIndex and/or length");
    return length != null ? str.substr(startIndex, length) : str.substr(startIndex);
}
function $575619fada8b5e88$export$bc71a178fd8db0f(strs, ...args) {
    return {
        strs: strs,
        args: args
    };
}
function $575619fada8b5e88$export$6088d99012177da4(fmts) {
    return (strs, ...args)=>({
            strs: strs,
            args: args,
            fmts: fmts
        })
    ;
}
function $575619fada8b5e88$export$f61ac8b6f1f46202(s) {
    return s.fmts ? s.strs.reduce((acc, newPart, index)=>acc + `{${String(index - 1) + s.fmts[index - 1]}}` + newPart
    ) : s.strs.reduce((acc, newPart, index)=>acc + `{${index - 1}}` + newPart
    );
}





class $281204856ef18594$export$a76dbac5bd058d1b {
    constructor(value1, capacity1){
        this.buf = [];
        if (!$575619fada8b5e88$export$c8733ae29fb53302(value1)) this.buf.push(value1);
    }
    toString() {
        const __ = this;
        return $575619fada8b5e88$export$f7e2c8231c57a8bd("", __.buf);
    }
}
function $281204856ef18594$export$b08fe2043fd86648() {
    return $64327df6a4d665f3$export$8547d5acd31924e("System.Text.StringBuilder", void 0, $281204856ef18594$export$a76dbac5bd058d1b);
}
function $281204856ef18594$export$c5d05c6a25e844a2(value, capacity) {
    return new $281204856ef18594$export$a76dbac5bd058d1b(value, capacity);
}
function $281204856ef18594$export$260c34d6b3e20770(capacity) {
    return $281204856ef18594$export$c5d05c6a25e844a2("", capacity);
}
function $281204856ef18594$export$f1bbb1bc6adb5e98(value) {
    return $281204856ef18594$export$c5d05c6a25e844a2(value, 16);
}
function $281204856ef18594$export$11d4896a43bc5bcd() {
    return $281204856ef18594$export$c5d05c6a25e844a2("", 16);
}
function $281204856ef18594$export$6b50450544032b4c(x, s) {
    x.buf.push(s);
    return x;
}
function $281204856ef18594$export$380be314ac460f13(x, c) {
    x.buf.push(c);
    return x;
}
function $281204856ef18594$export$b8a92401e368f9b1(x, o) {
    x.buf.push($4261fbb19e0b4aac$export$afbd86327cbebb03(o));
    return x;
}
function $281204856ef18594$export$7cad49e1ef432605(x, o) {
    x.buf.push(o.toString());
    return x;
}
function $281204856ef18594$export$884ea596fb61d3ad(x, o) {
    x.buf.push($52d096336d1d74e9$export$f84e8e69fd4488a5(o));
    return x;
}
function $281204856ef18594$export$4b402a09adf229a1(x, o) {
    x.buf.push($52d096336d1d74e9$export$f84e8e69fd4488a5(o));
    return x;
}
function $281204856ef18594$export$2392525085e82003(x, cs) {
    x.buf.push(cs.join(''));
    return x;
}
function $281204856ef18594$export$f4d22e689b6dca5d(x, s) {
    x.buf.push($52d096336d1d74e9$export$f84e8e69fd4488a5(s));
    return x;
}
function $281204856ef18594$export$53e9426b275a6099(x, fmt, o) {
    x.buf.push($575619fada8b5e88$export$d9468344d3651243(fmt, o));
    return x;
}
function $281204856ef18594$export$5ef3f527b248937a(x) {
    x.buf.push("\n");
    return x;
}
function $281204856ef18594$export$adc172ef5ec1d9a4(x, s) {
    x.buf.push(s);
    x.buf.push("\n");
    return x;
}
function $281204856ef18594$export$7ca6c13ca0fbff04(x) {
    let len = 0;
    for(let i = x.buf.length - 1; i >= 0; i--)len = len + x.buf[i].length | 0;
    return len | 0;
}
function $281204856ef18594$export$fd7ff3bb38b7c8f9(x, firstIndex, length) {
    return $575619fada8b5e88$export$662d3818631fba36($52d096336d1d74e9$export$f84e8e69fd4488a5(x), firstIndex, length);
}
function $281204856ef18594$export$de20c0c77a1c82b3(x) {
    $4261fbb19e0b4aac$export$42ffd38884aecdac(x.buf);
    return x;
}


const $b67554b9f15555d9$export$c41c26fdec11ec90 = {
    ["System.Collections.IEqualityComparer.Equals541DA560"] (x, y) {
        return $4261fbb19e0b4aac$export$e9bab7fafb253603(x, y);
    },
    ["System.Collections.IEqualityComparer.GetHashCode4E60E31B"] (x_1) {
        return $4261fbb19e0b4aac$export$2e619f11ca48bee4(x_1);
    }
};
const $b67554b9f15555d9$export$ea99482f058f81ef = {
    ["System.Collections.IEqualityComparer.Equals541DA560"] (x, y) {
        return $4261fbb19e0b4aac$export$e9bab7fafb253603(x, y);
    },
    ["System.Collections.IEqualityComparer.GetHashCode4E60E31B"] (x_1) {
        return $4261fbb19e0b4aac$export$2e619f11ca48bee4(x_1);
    }
};
function $b67554b9f15555d9$export$d009ffa0939ac970() {
    return $7daf559abfa35e2a$export$fe834b789c7fece1();
}
function $b67554b9f15555d9$export$af918a4279da88c8() {
    return $7daf559abfa35e2a$export$fe834b789c7fece1();
}
function $b67554b9f15555d9$export$f62943dc50e062f2() {
    return $7daf559abfa35e2a$export$2887c3ff5c15faf3();
}
function $b67554b9f15555d9$export$a382d3621b8bd42a() {
    return $7daf559abfa35e2a$export$2887c3ff5c15faf3();
}
function $b67554b9f15555d9$export$85b0ce7ccd58cf96(message) {
    return new Error(message);
}
function $b67554b9f15555d9$export$13e7d0bec9443a96(exn) {
    return exn.message;
}
function $b67554b9f15555d9$export$49fc45e4e62e7426(x) {
    throw new Error(x);
}
function $b67554b9f15555d9$export$cdb8bb7ae421efe4(resource, action) {
    try {
        return action(resource);
    } finally{
        if ($4261fbb19e0b4aac$export$e9bab7fafb253603(resource, null)) ;
        else resource.Dispose();
    }
}
function $b67554b9f15555d9$export$71bc834cee2b44c0(_lockObj, action) {
    return action();
}
function $b67554b9f15555d9$export$3fceb385c593a12(input) {
    return input.Value;
}
function $b67554b9f15555d9$export$db1d2a6f3518bc00(continuation, builder, format) {
    return format.cont((s)=>{
        $281204856ef18594$export$6b50450544032b4c(builder, s);
        return continuation();
    });
}
function $b67554b9f15555d9$export$1ca523c0edc2f91a(builder, format) {
    return $b67554b9f15555d9$export$db1d2a6f3518bc00(()=>{
    }, builder, format);
}









const $b9be9450bf7f24ec$export$1d7558b55257001d = "The index was outside the range of elements in the list.";
const $b9be9450bf7f24ec$export$c005a33403882123 = "List was empty";
const $b9be9450bf7f24ec$export$2f1b8e728b004525 = "The input must be non-negative.";
const $b9be9450bf7f24ec$export$bb8ebba5bfe3f17a = "The input sequence was empty.";
const $b9be9450bf7f24ec$export$8f2c469045724186 = "The input sequence contains more than one element.";
const $b9be9450bf7f24ec$export$bc2c3bc917b1d953 = "An index satisfying the predicate was not found in the collection.";
const $b9be9450bf7f24ec$export$da3d1203d4648eef = "The lists had different lengths.";
const $b9be9450bf7f24ec$export$9f17aeddfa374276 = "The input sequence has an insufficient number of elements.";
class $b9be9450bf7f24ec$export$46fa32c6f8b2f86 extends $52d096336d1d74e9$export$5b163c6d120341e7 {
    constructor(head, tail){
        super();
        this.head = head;
        this.tail = tail;
    }
    toString() {
        const xs = this;
        return "[" + $575619fada8b5e88$export$f7e2c8231c57a8bd("; ", xs) + "]";
    }
    Equals(other) {
        const xs = this;
        if (xs === other) return true;
        else {
            const loop = (xs_1_mut, ys_1_mut)=>{
                loop: while(true){
                    const xs_1 = xs_1_mut, ys_1 = ys_1_mut;
                    const matchValue = [
                        xs_1.tail,
                        ys_1.tail
                    ];
                    if (matchValue[0] != null) {
                        if (matchValue[1] != null) {
                            const xt = matchValue[0];
                            const yt = matchValue[1];
                            if ($4261fbb19e0b4aac$export$e9bab7fafb253603(xs_1.head, ys_1.head)) {
                                xs_1_mut = xt;
                                ys_1_mut = yt;
                                continue loop;
                            } else return false;
                        } else return false;
                    } else if (matchValue[1] != null) return false;
                    else return true;
                    break;
                }
            };
            return loop(xs, other);
        }
    }
    GetHashCode() {
        const xs = this;
        const loop = (i_mut, h_mut, xs_1_mut)=>{
            loop: while(true){
                const i = i_mut, h = h_mut, xs_1 = xs_1_mut;
                const matchValue = xs_1.tail;
                if (matchValue != null) {
                    const t = matchValue;
                    if (i > 18) return h | 0;
                    else {
                        i_mut = i + 1;
                        h_mut = (h << 1) + $4261fbb19e0b4aac$export$2e619f11ca48bee4(xs_1.head) + 631 * i;
                        xs_1_mut = t;
                        continue loop;
                    }
                } else return h | 0;
                break;
            }
        };
        return loop(0, 0, xs) | 0;
    }
    toJSON(_key) {
        const this$ = this;
        return Array.from(this$);
    }
    CompareTo(other1) {
        const xs = this;
        const loop = (xs_1_mut, ys_1_mut)=>{
            loop: while(true){
                const xs_1 = xs_1_mut, ys_1 = ys_1_mut;
                const matchValue = [
                    xs_1.tail,
                    ys_1.tail
                ];
                if (matchValue[0] != null) {
                    if (matchValue[1] != null) {
                        const xt = matchValue[0];
                        const yt = matchValue[1];
                        const c = $4261fbb19e0b4aac$export$398604a469f7de9a(xs_1.head, ys_1.head) | 0;
                        if (c === 0) {
                            xs_1_mut = xt;
                            ys_1_mut = yt;
                            continue loop;
                        } else return c | 0;
                    } else return 1;
                } else if (matchValue[1] != null) return -1;
                else return 0;
                break;
            }
        };
        return loop(xs, other1) | 0;
    }
    GetEnumerator() {
        const xs = this;
        return $b9be9450bf7f24ec$export$d5c5f9d2dd7dbba2(xs);
    }
    [Symbol.iterator]() {
        return $4261fbb19e0b4aac$export$21e0669b7bd01bb4(this.GetEnumerator());
    }
    ["System.Collections.IEnumerable.GetEnumerator"]() {
        const xs = this;
        return $4261fbb19e0b4aac$export$a41738691dcd8bea(xs);
    }
}
function $b9be9450bf7f24ec$export$6c33004ecbd2f682(gen0) {
    return $64327df6a4d665f3$export$d341dea990ee4af6("ListModule.FSharpList", [
        gen0
    ], $b9be9450bf7f24ec$export$46fa32c6f8b2f86, ()=>[
            [
                "head",
                gen0
            ],
            [
                "tail",
                $64327df6a4d665f3$export$a0bfd80c70f2d46b($b9be9450bf7f24ec$export$6c33004ecbd2f682(gen0))
            ]
        ]
    );
}
class $b9be9450bf7f24ec$export$9eb8d7afe7bf3554 {
    constructor(xs1){
        this.xs = xs1;
        this.it = this.xs;
        this.current = null;
    }
    ["System.Collections.Generic.IEnumerator`1.get_Current"]() {
        const __ = this;
        return __.current;
    }
    ["System.Collections.IEnumerator.get_Current"]() {
        const __ = this;
        return __.current;
    }
    ["System.Collections.IEnumerator.MoveNext"]() {
        const __ = this;
        const matchValue = __.it.tail;
        if (matchValue != null) {
            const t = matchValue;
            __.current = __.it.head;
            __.it = t;
            return true;
        } else return false;
    }
    ["System.Collections.IEnumerator.Reset"]() {
        const __ = this;
        __.it = __.xs;
        __.current = null;
    }
    Dispose() {
    }
}
function $b9be9450bf7f24ec$export$a7e43f4a4fc711bd(gen0) {
    return $64327df6a4d665f3$export$8547d5acd31924e("ListModule.ListEnumerator`1", [
        gen0
    ], $b9be9450bf7f24ec$export$9eb8d7afe7bf3554);
}
function $b9be9450bf7f24ec$export$d5c5f9d2dd7dbba2(xs) {
    return new $b9be9450bf7f24ec$export$9eb8d7afe7bf3554(xs);
}
function $b9be9450bf7f24ec$export$ca5f14a39f7c3bde() {
    return new $b9be9450bf7f24ec$export$46fa32c6f8b2f86(null, void 0);
}
function $b9be9450bf7f24ec$export$62ac43da335545f6(x, xs) {
    return new $b9be9450bf7f24ec$export$46fa32c6f8b2f86(x, xs);
}
function $b9be9450bf7f24ec$export$10d5772debd84bf1(xs) {
    return xs.tail == null;
}
function $b9be9450bf7f24ec$export$f15c1e15e73226cf(xs) {
    const loop = (i_mut, xs_1_mut)=>{
        loop: while(true){
            const i = i_mut, xs_1 = xs_1_mut;
            const matchValue = xs_1.tail;
            if (matchValue != null) {
                i_mut = i + 1;
                xs_1_mut = matchValue;
                continue loop;
            } else return i | 0;
            break;
        }
    };
    return loop(0, xs) | 0;
}
function $b9be9450bf7f24ec$export$1d866465156343c7(xs) {
    const matchValue = xs.tail;
    if (matchValue != null) return xs.head;
    else throw new Error($b9be9450bf7f24ec$export$c005a33403882123 + "\\nParameter name: " + "list");
}
function $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(xs) {
    const matchValue = xs.tail;
    if (matchValue != null) return matchValue;
    else throw new Error($b9be9450bf7f24ec$export$c005a33403882123 + "\\nParameter name: " + "list");
}
function $b9be9450bf7f24ec$export$f63236b60aa2bf0(xs, index) {
    const loop = (i_mut, xs_1_mut)=>{
        loop: while(true){
            const i = i_mut, xs_1 = xs_1_mut;
            const matchValue = xs_1.tail;
            if (matchValue != null) {
                if (i === index) return xs_1.head;
                else {
                    i_mut = i + 1;
                    xs_1_mut = matchValue;
                    continue loop;
                }
            } else throw new Error($b9be9450bf7f24ec$export$1d7558b55257001d + "\\nParameter name: " + "index");
            break;
        }
    };
    return loop(0, xs);
}
function $b9be9450bf7f24ec$export$6e22c362a0406a2c() {
    return $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
}
function $b9be9450bf7f24ec$export$8327ebbef2a0ba76(x, xs) {
    return $b9be9450bf7f24ec$export$62ac43da335545f6(x, xs);
}
function $b9be9450bf7f24ec$export$439306a4dcaafbb9(x) {
    return $b9be9450bf7f24ec$export$62ac43da335545f6(x, $b9be9450bf7f24ec$export$ca5f14a39f7c3bde());
}
function $b9be9450bf7f24ec$export$dd1bc94b04021eeb(xs) {
    return $b9be9450bf7f24ec$export$10d5772debd84bf1(xs);
}
function $b9be9450bf7f24ec$export$f24224f1c91d8156(xs) {
    return $b9be9450bf7f24ec$export$f15c1e15e73226cf(xs);
}
function $b9be9450bf7f24ec$export$5fd5031fecdacec3(xs) {
    return $b9be9450bf7f24ec$export$1d866465156343c7(xs);
}
function $b9be9450bf7f24ec$export$1acbe849d0cb723e(xs) {
    if ($b9be9450bf7f24ec$export$10d5772debd84bf1(xs)) return void 0;
    else return $cbf049927489a6e9$export$ad14ef4001db2bcd($b9be9450bf7f24ec$export$1d866465156343c7(xs));
}
function $b9be9450bf7f24ec$export$c01875f616615628(xs) {
    return $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(xs);
}
function $b9be9450bf7f24ec$export$e5907b21d797cce6(xs_mut) {
    tryLast: while(true){
        const xs = xs_mut;
        if ($b9be9450bf7f24ec$export$10d5772debd84bf1(xs)) return void 0;
        else {
            const t = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(xs);
            if ($b9be9450bf7f24ec$export$10d5772debd84bf1(t)) return $cbf049927489a6e9$export$ad14ef4001db2bcd($b9be9450bf7f24ec$export$1d866465156343c7(xs));
            else {
                xs_mut = t;
                continue tryLast;
            }
        }
        break;
    }
}
function $b9be9450bf7f24ec$export$4c7897fafd92b108(xs) {
    const matchValue = $b9be9450bf7f24ec$export$e5907b21d797cce6(xs);
    if (matchValue == null) throw new Error($b9be9450bf7f24ec$export$c005a33403882123);
    else return $cbf049927489a6e9$export$2ab9a8f9f1186f14(matchValue);
}
function $b9be9450bf7f24ec$export$ecb3797c03e8ce0c(comparer, xs, ys) {
    const loop = (xs_1_mut, ys_1_mut)=>{
        loop: while(true){
            const xs_1 = xs_1_mut, ys_1 = ys_1_mut;
            const matchValue = [
                $b9be9450bf7f24ec$export$10d5772debd84bf1(xs_1),
                $b9be9450bf7f24ec$export$10d5772debd84bf1(ys_1)
            ];
            if (matchValue[0]) {
                if (matchValue[1]) return 0;
                else return -1;
            } else if (matchValue[1]) return 1;
            else {
                const c = comparer($b9be9450bf7f24ec$export$1d866465156343c7(xs_1), $b9be9450bf7f24ec$export$1d866465156343c7(ys_1)) | 0;
                if (c === 0) {
                    xs_1_mut = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(xs_1);
                    ys_1_mut = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(ys_1);
                    continue loop;
                } else return c | 0;
            }
            break;
        }
    };
    return loop(xs, ys) | 0;
}
function $b9be9450bf7f24ec$export$45b10814cc054894(xs) {
    const len = $b9be9450bf7f24ec$export$f15c1e15e73226cf(xs) | 0;
    const res = $1d849aa8ef8b0f61$export$9563e054e6f787fb(new Array(len), 0, len, null);
    const loop = (i_mut, xs_1_mut)=>{
        loop: while(true){
            const i = i_mut, xs_1 = xs_1_mut;
            if (!$b9be9450bf7f24ec$export$10d5772debd84bf1(xs_1)) {
                res[i] = $b9be9450bf7f24ec$export$1d866465156343c7(xs_1);
                i_mut = i + 1;
                xs_1_mut = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(xs_1);
                continue loop;
            }
            break;
        }
    };
    loop(0, xs);
    return res;
}
function $b9be9450bf7f24ec$export$93e2b83da34ff82a(folder, state, xs) {
    let acc = state;
    let xs_1 = xs;
    while(!$b9be9450bf7f24ec$export$10d5772debd84bf1(xs_1)){
        acc = folder(acc, $b9be9450bf7f24ec$export$1d866465156343c7(xs_1));
        xs_1 = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(xs_1);
    }
    return acc;
}
function $b9be9450bf7f24ec$export$66c1ae025e96b4bc(xs) {
    return $b9be9450bf7f24ec$export$93e2b83da34ff82a((acc, x)=>$b9be9450bf7f24ec$export$62ac43da335545f6(x, acc)
    , $b9be9450bf7f24ec$export$ca5f14a39f7c3bde(), xs);
}
function $b9be9450bf7f24ec$export$c38b8353041a4f48(folder, xs, state) {
    return $1d849aa8ef8b0f61$export$c38b8353041a4f48(folder, $b9be9450bf7f24ec$export$45b10814cc054894(xs), state);
}
function $b9be9450bf7f24ec$export$c336ee92e62ce644(folder, state, xs) {
    const loop = (i_mut, acc_mut, xs_1_mut)=>{
        loop: while(true){
            const i = i_mut, acc = acc_mut, xs_1 = xs_1_mut;
            if ($b9be9450bf7f24ec$export$10d5772debd84bf1(xs_1)) return acc;
            else {
                i_mut = i + 1;
                acc_mut = folder(i, acc, $b9be9450bf7f24ec$export$1d866465156343c7(xs_1));
                xs_1_mut = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(xs_1);
                continue loop;
            }
            break;
        }
    };
    return loop(0, state, xs);
}
function $b9be9450bf7f24ec$export$6eef545db8c1f6e(folder, state, xs, ys) {
    let acc = state;
    let xs_1 = xs;
    let ys_1 = ys;
    while(!$b9be9450bf7f24ec$export$10d5772debd84bf1(xs_1) ? !$b9be9450bf7f24ec$export$10d5772debd84bf1(ys_1) : false){
        acc = folder(acc, $b9be9450bf7f24ec$export$1d866465156343c7(xs_1), $b9be9450bf7f24ec$export$1d866465156343c7(ys_1));
        xs_1 = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(xs_1);
        ys_1 = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(ys_1);
    }
    return acc;
}
function $b9be9450bf7f24ec$export$f04d6919de1a1f94(folder, xs, ys, state) {
    return $1d849aa8ef8b0f61$export$f04d6919de1a1f94(folder, $b9be9450bf7f24ec$export$45b10814cc054894(xs), $b9be9450bf7f24ec$export$45b10814cc054894(ys), state);
}
function $b9be9450bf7f24ec$export$c48e357c1a89b78d(gen, state) {
    const loop = (acc_mut, node_mut)=>{
        let t;
        loop: while(true){
            const acc = acc_mut, node = node_mut;
            const matchValue = gen(acc);
            if (matchValue != null) {
                acc_mut = matchValue[1];
                node_mut = (t = new $b9be9450bf7f24ec$export$46fa32c6f8b2f86(matchValue[0], void 0), node.tail = t, t);
                continue loop;
            } else return node;
            break;
        }
    };
    const root = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    const node_1 = loop(state, root);
    const t_2 = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    node_1.tail = t_2;
    return $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(root);
}
function $b9be9450bf7f24ec$export$c1a059043cc9c119(action, xs) {
    $b9be9450bf7f24ec$export$93e2b83da34ff82a((unitVar0, x)=>{
        action(x);
    }, void 0, xs);
}
function $b9be9450bf7f24ec$export$d1731a37ee7d4fbb(action, xs, ys) {
    $b9be9450bf7f24ec$export$6eef545db8c1f6e((unitVar0, x, y)=>{
        action(x, y);
    }, void 0, xs, ys);
}
function $b9be9450bf7f24ec$export$5a067165821eae2d(action, xs) {
    $b9be9450bf7f24ec$export$93e2b83da34ff82a((i, x)=>{
        action(i, x);
        return i + 1 | 0;
    }, 0, xs);
}
function $b9be9450bf7f24ec$export$ab3c1f9aeb4948fd(action, xs, ys) {
    $b9be9450bf7f24ec$export$6eef545db8c1f6e((i, x, y)=>{
        action(i, x, y);
        return i + 1 | 0;
    }, 0, xs, ys);
}
function $b9be9450bf7f24ec$export$1344b76b7b5a4395(xs) {
    return xs;
}
function $b9be9450bf7f24ec$export$2d23f4f67ce65296(xs, tail_1) {
    let res = tail_1;
    for(let i = xs.length - 1; i >= 0; i--)res = $b9be9450bf7f24ec$export$62ac43da335545f6(xs[i], res);
    return res;
}
function $b9be9450bf7f24ec$export$cb197a913f6bb809(xs) {
    return $b9be9450bf7f24ec$export$2d23f4f67ce65296(xs, $b9be9450bf7f24ec$export$ca5f14a39f7c3bde());
}
function $b9be9450bf7f24ec$export$c80b5fc7454ef206(xs) {
    let xs_3, t;
    if ($4261fbb19e0b4aac$export$1e2f57719e155213(xs)) return $b9be9450bf7f24ec$export$cb197a913f6bb809(xs);
    else if (xs instanceof $b9be9450bf7f24ec$export$46fa32c6f8b2f86) return xs;
    else {
        const root = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
        let node = root;
        const enumerator = $4261fbb19e0b4aac$export$a41738691dcd8bea(xs);
        try {
            while(enumerator["System.Collections.IEnumerator.MoveNext"]()){
                const x = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
                node = (xs_3 = node, t = new $b9be9450bf7f24ec$export$46fa32c6f8b2f86(x, void 0), xs_3.tail = t, t);
            }
        } finally{
            enumerator.Dispose();
        }
        const xs_5 = node;
        const t_2 = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
        xs_5.tail = t_2;
        return $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(root);
    }
}
function $b9be9450bf7f24ec$export$ee1b3e54f0441b22(lists) {
    const root = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    let node = root;
    const action = (xs)=>{
        node = $b9be9450bf7f24ec$export$93e2b83da34ff82a((acc, x)=>{
            const t = new $b9be9450bf7f24ec$export$46fa32c6f8b2f86(x, void 0);
            acc.tail = t;
            return t;
        }, node, xs);
    };
    if ($4261fbb19e0b4aac$export$1e2f57719e155213(lists)) lists.forEach(action);
    else if (lists instanceof $b9be9450bf7f24ec$export$46fa32c6f8b2f86) $b9be9450bf7f24ec$export$c1a059043cc9c119(action, lists);
    else {
        const enumerator = $4261fbb19e0b4aac$export$a41738691dcd8bea(lists);
        try {
            while(enumerator["System.Collections.IEnumerator.MoveNext"]())action(enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]());
        } finally{
            enumerator.Dispose();
        }
    }
    const xs_6 = node;
    const t_2 = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    xs_6.tail = t_2;
    return $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(root);
}
function $b9be9450bf7f24ec$export$c87d910e63d22ed6(folder, state, xs) {
    let xs_4, t_2;
    const root = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    let node;
    const t = new $b9be9450bf7f24ec$export$46fa32c6f8b2f86(state, void 0);
    root.tail = t;
    node = t;
    let acc = state;
    let xs_3 = xs;
    while(!$b9be9450bf7f24ec$export$10d5772debd84bf1(xs_3)){
        acc = folder(acc, $b9be9450bf7f24ec$export$1d866465156343c7(xs_3));
        node = (xs_4 = node, t_2 = new $b9be9450bf7f24ec$export$46fa32c6f8b2f86(acc, void 0), xs_4.tail = t_2, t_2);
        xs_3 = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(xs_3);
    }
    const xs_6 = node;
    const t_4 = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    xs_6.tail = t_4;
    return $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(root);
}
function $b9be9450bf7f24ec$export$7bd1078b283d99ad(folder, xs, state) {
    return $b9be9450bf7f24ec$export$cb197a913f6bb809($1d849aa8ef8b0f61$export$7bd1078b283d99ad(folder, $b9be9450bf7f24ec$export$45b10814cc054894(xs), state));
}
function $b9be9450bf7f24ec$export$10d8903dec122b9d(xs, ys) {
    return $b9be9450bf7f24ec$export$93e2b83da34ff82a((acc, x)=>$b9be9450bf7f24ec$export$62ac43da335545f6(x, acc)
    , ys, $b9be9450bf7f24ec$export$66c1ae025e96b4bc(xs));
}
function $b9be9450bf7f24ec$export$bb44f104e3c54dae(mapping, xs) {
    let xs_1, t;
    const root = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    let node = root;
    let ys = xs;
    while(!$b9be9450bf7f24ec$export$10d5772debd84bf1(ys)){
        let zs = mapping($b9be9450bf7f24ec$export$1d866465156343c7(ys));
        while(!$b9be9450bf7f24ec$export$10d5772debd84bf1(zs)){
            node = (xs_1 = node, t = new $b9be9450bf7f24ec$export$46fa32c6f8b2f86($b9be9450bf7f24ec$export$1d866465156343c7(zs), void 0), xs_1.tail = t, t);
            zs = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(zs);
        }
        ys = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(ys);
    }
    const xs_3 = node;
    const t_2 = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    xs_3.tail = t_2;
    return $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(root);
}
function $b9be9450bf7f24ec$export$e5bd5b3b105c2a71(mapping, xs) {
    const root = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    const node = $b9be9450bf7f24ec$export$c336ee92e62ce644((i, acc, x)=>{
        const t = new $b9be9450bf7f24ec$export$46fa32c6f8b2f86(mapping(i, x), void 0);
        acc.tail = t;
        return t;
    }, root, xs);
    const t_2 = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    node.tail = t_2;
    return $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(root);
}
function $b9be9450bf7f24ec$export$871de8747c9eaa88(mapping, xs) {
    const root = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    const node = $b9be9450bf7f24ec$export$93e2b83da34ff82a((acc, x)=>{
        const t = new $b9be9450bf7f24ec$export$46fa32c6f8b2f86(mapping(x), void 0);
        acc.tail = t;
        return t;
    }, root, xs);
    const t_2 = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    node.tail = t_2;
    return $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(root);
}
function $b9be9450bf7f24ec$export$ddf7c77acd0bf516(xs) {
    return $b9be9450bf7f24ec$export$e5bd5b3b105c2a71((i, x)=>[
            i,
            x
        ]
    , xs);
}
function $b9be9450bf7f24ec$export$5be556bf484c4f10(mapping, xs, ys) {
    const root = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    const node = $b9be9450bf7f24ec$export$6eef545db8c1f6e((acc, x, y)=>{
        const t = new $b9be9450bf7f24ec$export$46fa32c6f8b2f86(mapping(x, y), void 0);
        acc.tail = t;
        return t;
    }, root, xs, ys);
    const t_2 = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    node.tail = t_2;
    return $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(root);
}
function $b9be9450bf7f24ec$export$aded800c294daba4(mapping, xs, ys) {
    const loop = (i_mut, acc_mut, xs_1_mut, ys_1_mut)=>{
        let t;
        loop: while(true){
            const i = i_mut, acc = acc_mut, xs_1 = xs_1_mut, ys_1 = ys_1_mut;
            if ($b9be9450bf7f24ec$export$10d5772debd84bf1(xs_1) ? true : $b9be9450bf7f24ec$export$10d5772debd84bf1(ys_1)) return acc;
            else {
                i_mut = i + 1;
                acc_mut = (t = new $b9be9450bf7f24ec$export$46fa32c6f8b2f86(mapping(i, $b9be9450bf7f24ec$export$1d866465156343c7(xs_1), $b9be9450bf7f24ec$export$1d866465156343c7(ys_1)), void 0), acc.tail = t, t);
                xs_1_mut = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(xs_1);
                ys_1_mut = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(ys_1);
                continue loop;
            }
            break;
        }
    };
    const root = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    const node_1 = loop(0, root, xs, ys);
    const t_2 = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    node_1.tail = t_2;
    return $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(root);
}
function $b9be9450bf7f24ec$export$f7389512af34c855(mapping, xs, ys, zs) {
    const loop = (acc_mut, xs_1_mut, ys_1_mut, zs_1_mut)=>{
        let t;
        loop: while(true){
            const acc = acc_mut, xs_1 = xs_1_mut, ys_1 = ys_1_mut, zs_1 = zs_1_mut;
            if (($b9be9450bf7f24ec$export$10d5772debd84bf1(xs_1) ? true : $b9be9450bf7f24ec$export$10d5772debd84bf1(ys_1)) ? true : $b9be9450bf7f24ec$export$10d5772debd84bf1(zs_1)) return acc;
            else {
                acc_mut = (t = new $b9be9450bf7f24ec$export$46fa32c6f8b2f86(mapping($b9be9450bf7f24ec$export$1d866465156343c7(xs_1), $b9be9450bf7f24ec$export$1d866465156343c7(ys_1), $b9be9450bf7f24ec$export$1d866465156343c7(zs_1)), void 0), acc.tail = t, t);
                xs_1_mut = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(xs_1);
                ys_1_mut = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(ys_1);
                zs_1_mut = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(zs_1);
                continue loop;
            }
            break;
        }
    };
    const root = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    const node_1 = loop(root, xs, ys, zs);
    const t_2 = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    node_1.tail = t_2;
    return $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(root);
}
function $b9be9450bf7f24ec$export$9b19c2e3f2aab20f(mapping, state, xs) {
    const root = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    const patternInput_1 = $b9be9450bf7f24ec$export$93e2b83da34ff82a((tupledArg, x)=>{
        let t;
        const patternInput = mapping(tupledArg[1], x);
        return [
            (t = new $b9be9450bf7f24ec$export$46fa32c6f8b2f86(patternInput[0], void 0), (tupledArg[0].tail = t, t)),
            patternInput[1]
        ];
    }, [
        root,
        state
    ], xs);
    const t_2 = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    patternInput_1[0].tail = t_2;
    return [
        $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(root),
        patternInput_1[1]
    ];
}
function $b9be9450bf7f24ec$export$6d7c6abab27be307(mapping, xs, state) {
    return $b9be9450bf7f24ec$export$9b19c2e3f2aab20f((acc, x)=>mapping(x, acc)
    , state, $b9be9450bf7f24ec$export$66c1ae025e96b4bc(xs));
}
function $b9be9450bf7f24ec$export$d944e5c60afb688e(f, xs) {
    const loop = (xs_1_mut)=>{
        loop: while(true){
            const xs_1 = xs_1_mut;
            if ($b9be9450bf7f24ec$export$10d5772debd84bf1(xs_1)) return void 0;
            else {
                const matchValue = f($b9be9450bf7f24ec$export$1d866465156343c7(xs_1));
                if (matchValue == null) {
                    xs_1_mut = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(xs_1);
                    continue loop;
                } else return matchValue;
            }
            break;
        }
    };
    return loop(xs);
}
function $b9be9450bf7f24ec$export$357523c63a2253b9(f, xs) {
    const matchValue = $b9be9450bf7f24ec$export$d944e5c60afb688e(f, xs);
    if (matchValue == null) throw new Error($b9be9450bf7f24ec$export$bc2c3bc917b1d953);
    else return $cbf049927489a6e9$export$2ab9a8f9f1186f14(matchValue);
}
function $b9be9450bf7f24ec$export$d65cb303b863e3bf(f, xs) {
    return $b9be9450bf7f24ec$export$d944e5c60afb688e((x)=>f(x) ? $cbf049927489a6e9$export$ad14ef4001db2bcd(x) : void 0
    , xs);
}
function $b9be9450bf7f24ec$export$71aa6c912b956294(f, xs) {
    const matchValue = $b9be9450bf7f24ec$export$d65cb303b863e3bf(f, xs);
    if (matchValue == null) throw new Error($b9be9450bf7f24ec$export$bc2c3bc917b1d953);
    else return $cbf049927489a6e9$export$2ab9a8f9f1186f14(matchValue);
}
function $b9be9450bf7f24ec$export$36425195e236bb0f(f, xs) {
    return $1d849aa8ef8b0f61$export$36425195e236bb0f(f, $b9be9450bf7f24ec$export$45b10814cc054894(xs));
}
function $b9be9450bf7f24ec$export$ec18defb06d12add(f, xs) {
    const matchValue = $b9be9450bf7f24ec$export$36425195e236bb0f(f, xs);
    if (matchValue == null) throw new Error($b9be9450bf7f24ec$export$bc2c3bc917b1d953);
    else return $cbf049927489a6e9$export$2ab9a8f9f1186f14(matchValue);
}
function $b9be9450bf7f24ec$export$5c13475397a61429(f, xs) {
    const loop = (i_mut, xs_1_mut)=>{
        loop: while(true){
            const i = i_mut, xs_1 = xs_1_mut;
            if ($b9be9450bf7f24ec$export$10d5772debd84bf1(xs_1)) return void 0;
            else if (f($b9be9450bf7f24ec$export$1d866465156343c7(xs_1))) return i;
            else {
                i_mut = i + 1;
                xs_1_mut = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(xs_1);
                continue loop;
            }
            break;
        }
    };
    return loop(0, xs);
}
function $b9be9450bf7f24ec$export$de3a4d4a0d731119(f, xs) {
    const matchValue = $b9be9450bf7f24ec$export$5c13475397a61429(f, xs);
    if (matchValue == null) throw new Error($b9be9450bf7f24ec$export$bc2c3bc917b1d953);
    else return matchValue | 0;
}
function $b9be9450bf7f24ec$export$e1cc954945760117(f, xs) {
    return $1d849aa8ef8b0f61$export$e1cc954945760117(f, $b9be9450bf7f24ec$export$45b10814cc054894(xs));
}
function $b9be9450bf7f24ec$export$78e19deb30f83296(f, xs) {
    const matchValue = $b9be9450bf7f24ec$export$e1cc954945760117(f, xs);
    if (matchValue == null) throw new Error($b9be9450bf7f24ec$export$bc2c3bc917b1d953);
    else return matchValue | 0;
}
function $b9be9450bf7f24ec$export$3fe40c3a4d8cb094(n, xs) {
    const loop = (i_mut, xs_1_mut)=>{
        loop: while(true){
            const i = i_mut, xs_1 = xs_1_mut;
            if ($b9be9450bf7f24ec$export$10d5772debd84bf1(xs_1)) return void 0;
            else if (i === n) return $cbf049927489a6e9$export$ad14ef4001db2bcd($b9be9450bf7f24ec$export$1d866465156343c7(xs_1));
            else {
                i_mut = i + 1;
                xs_1_mut = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(xs_1);
                continue loop;
            }
            break;
        }
    };
    return loop(0, xs);
}
function $b9be9450bf7f24ec$export$7061c75fc5af8b7e(n, xs) {
    return $b9be9450bf7f24ec$export$f63236b60aa2bf0(xs, n);
}
function $b9be9450bf7f24ec$export$3dea766d36a8935f(f, xs) {
    const root = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    const node = $b9be9450bf7f24ec$export$93e2b83da34ff82a((acc, x)=>{
        if (f(x)) {
            const t = new $b9be9450bf7f24ec$export$46fa32c6f8b2f86(x, void 0);
            acc.tail = t;
            return t;
        } else return acc;
    }, root, xs);
    const t_2 = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    node.tail = t_2;
    return $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(root);
}
function $b9be9450bf7f24ec$export$b29f828819edca8d(f, xs) {
    const patternInput = [
        $b9be9450bf7f24ec$export$ca5f14a39f7c3bde(),
        $b9be9450bf7f24ec$export$ca5f14a39f7c3bde()
    ];
    const root2 = patternInput[1];
    const root1 = patternInput[0];
    const patternInput_1 = $b9be9450bf7f24ec$export$93e2b83da34ff82a($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (tupledArg)=>{
        const lacc = tupledArg[0];
        const racc = tupledArg[1];
        return (x)=>{
            let t, t_2;
            return f(x) ? [
                (t = new $b9be9450bf7f24ec$export$46fa32c6f8b2f86(x, void 0), (lacc.tail = t, t)),
                racc
            ] : [
                lacc,
                (t_2 = new $b9be9450bf7f24ec$export$46fa32c6f8b2f86(x, void 0), (racc.tail = t_2, t_2))
            ];
        };
    }), [
        root1,
        root2
    ], xs);
    const t_4 = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    patternInput_1[0].tail = t_4;
    const t_5 = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    patternInput_1[1].tail = t_5;
    return [
        $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(root1),
        $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(root2)
    ];
}
function $b9be9450bf7f24ec$export$7877a478dd30fd3d(f, xs) {
    const root = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    const node = $b9be9450bf7f24ec$export$93e2b83da34ff82a((acc, x)=>{
        const matchValue = f(x);
        if (matchValue == null) return acc;
        else {
            const t = new $b9be9450bf7f24ec$export$46fa32c6f8b2f86($cbf049927489a6e9$export$2ab9a8f9f1186f14(matchValue), void 0);
            acc.tail = t;
            return t;
        }
    }, root, xs);
    const t_2 = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    node.tail = t_2;
    return $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(root);
}
function $b9be9450bf7f24ec$export$2344b14b097df817(value, xs, eq) {
    return $b9be9450bf7f24ec$export$5c13475397a61429((v)=>eq.Equals(value, v)
    , xs) != null;
}
function $b9be9450bf7f24ec$export$2a47f398eeff8b01(n, f) {
    let xs, t;
    const root = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    let node = root;
    for(let i = 0; i <= n - 1; i++)node = (xs = node, t = new $b9be9450bf7f24ec$export$46fa32c6f8b2f86(f(i), void 0), xs.tail = t, t);
    const xs_2 = node;
    const t_2 = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    xs_2.tail = t_2;
    return $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(root);
}
function $b9be9450bf7f24ec$export$606959e7ccb797f0(n, x) {
    return $b9be9450bf7f24ec$export$2a47f398eeff8b01(n, (_arg1)=>x
    );
}
function $b9be9450bf7f24ec$export$533b26079ad0b4b(f, xs) {
    if ($b9be9450bf7f24ec$export$10d5772debd84bf1(xs)) throw new Error($b9be9450bf7f24ec$export$c005a33403882123);
    else return $b9be9450bf7f24ec$export$93e2b83da34ff82a(f, $b9be9450bf7f24ec$export$5fd5031fecdacec3(xs), $b9be9450bf7f24ec$export$c01875f616615628(xs));
}
function $b9be9450bf7f24ec$export$90cf02207d4ef99b(f, xs) {
    if ($b9be9450bf7f24ec$export$10d5772debd84bf1(xs)) throw new Error($b9be9450bf7f24ec$export$c005a33403882123);
    else return $b9be9450bf7f24ec$export$c38b8353041a4f48(f, $b9be9450bf7f24ec$export$c01875f616615628(xs), $b9be9450bf7f24ec$export$5fd5031fecdacec3(xs));
}
function $b9be9450bf7f24ec$export$e5bd981f5eeebe3b(f, xs) {
    return $b9be9450bf7f24ec$export$93e2b83da34ff82a((acc, x)=>acc ? f(x) : false
    , true, xs);
}
function $b9be9450bf7f24ec$export$a85e1ff32f9fff6e(f, xs, ys) {
    return $b9be9450bf7f24ec$export$6eef545db8c1f6e((acc, x, y)=>acc ? f(x, y) : false
    , true, xs, ys);
}
function $b9be9450bf7f24ec$export$f7e9f41ea797a17(f, xs) {
    return $b9be9450bf7f24ec$export$5c13475397a61429(f, xs) != null;
}
function $b9be9450bf7f24ec$export$d04ae74aaa2c0655(f_mut, xs_mut, ys_mut) {
    exists2: while(true){
        const f = f_mut, xs = xs_mut, ys = ys_mut;
        const matchValue = [
            $b9be9450bf7f24ec$export$10d5772debd84bf1(xs),
            $b9be9450bf7f24ec$export$10d5772debd84bf1(ys)
        ];
        let pattern_matching_result;
        if (matchValue[0]) {
            if (matchValue[1]) pattern_matching_result = 0;
            else pattern_matching_result = 2;
        } else if (matchValue[1]) pattern_matching_result = 2;
        else pattern_matching_result = 1;
        switch(pattern_matching_result){
            case 0:
                return false;
            case 1:
                if (f($b9be9450bf7f24ec$export$1d866465156343c7(xs), $b9be9450bf7f24ec$export$1d866465156343c7(ys))) return true;
                else {
                    f_mut = f;
                    xs_mut = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(xs);
                    ys_mut = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(ys);
                    continue exists2;
                }
            case 2:
                throw new Error($b9be9450bf7f24ec$export$da3d1203d4648eef + "\\nParameter name: " + "list2");
        }
        break;
    }
}
function $b9be9450bf7f24ec$export$23c8d3f8757cab88(xs) {
    return $b9be9450bf7f24ec$export$c38b8353041a4f48((tupledArg, tupledArg_1)=>[
            $b9be9450bf7f24ec$export$62ac43da335545f6(tupledArg[0], tupledArg_1[0]),
            $b9be9450bf7f24ec$export$62ac43da335545f6(tupledArg[1], tupledArg_1[1])
        ]
    , xs, [
        $b9be9450bf7f24ec$export$ca5f14a39f7c3bde(),
        $b9be9450bf7f24ec$export$ca5f14a39f7c3bde()
    ]);
}
function $b9be9450bf7f24ec$export$a52790ad56d35e3d(xs) {
    return $b9be9450bf7f24ec$export$c38b8353041a4f48((tupledArg, tupledArg_1)=>[
            $b9be9450bf7f24ec$export$62ac43da335545f6(tupledArg[0], tupledArg_1[0]),
            $b9be9450bf7f24ec$export$62ac43da335545f6(tupledArg[1], tupledArg_1[1]),
            $b9be9450bf7f24ec$export$62ac43da335545f6(tupledArg[2], tupledArg_1[2])
        ]
    , xs, [
        $b9be9450bf7f24ec$export$ca5f14a39f7c3bde(),
        $b9be9450bf7f24ec$export$ca5f14a39f7c3bde(),
        $b9be9450bf7f24ec$export$ca5f14a39f7c3bde()
    ]);
}
function $b9be9450bf7f24ec$export$8901015135f2fb22(xs, ys) {
    return $b9be9450bf7f24ec$export$5be556bf484c4f10((x, y)=>[
            x,
            y
        ]
    , xs, ys);
}
function $b9be9450bf7f24ec$export$a3c629e5d025ffc1(xs, ys, zs) {
    return $b9be9450bf7f24ec$export$f7389512af34c855((x, y, z)=>[
            x,
            y,
            z
        ]
    , xs, ys, zs);
}
function $b9be9450bf7f24ec$export$a9e7d1a6fdcfefde(comparer, xs) {
    const arr = $b9be9450bf7f24ec$export$45b10814cc054894(xs);
    arr.sort(comparer);
    return $b9be9450bf7f24ec$export$cb197a913f6bb809(arr);
}
function $b9be9450bf7f24ec$export$97db5808d8f88186(xs, comparer) {
    return $b9be9450bf7f24ec$export$a9e7d1a6fdcfefde((x, y)=>comparer.Compare(x, y)
    , xs);
}
function $b9be9450bf7f24ec$export$b035e44d7bb4278f(projection, xs, comparer) {
    return $b9be9450bf7f24ec$export$a9e7d1a6fdcfefde((x, y)=>comparer.Compare(projection(x), projection(y))
    , xs);
}
function $b9be9450bf7f24ec$export$9a59fdf05ed66d15(xs, comparer) {
    return $b9be9450bf7f24ec$export$a9e7d1a6fdcfefde((x, y)=>comparer.Compare(x, y) * -1
    , xs);
}
function $b9be9450bf7f24ec$export$ca6dab212df382f6(projection, xs, comparer) {
    return $b9be9450bf7f24ec$export$a9e7d1a6fdcfefde((x, y)=>comparer.Compare(projection(x), projection(y)) * -1
    , xs);
}
function $b9be9450bf7f24ec$export$8a63f25cc62965f1(xs, adder) {
    return $b9be9450bf7f24ec$export$93e2b83da34ff82a((acc, x)=>adder.Add(acc, x)
    , adder.GetZero(), xs);
}
function $b9be9450bf7f24ec$export$9e8299ab977385a3(f, xs, adder) {
    return $b9be9450bf7f24ec$export$93e2b83da34ff82a((acc, x)=>adder.Add(acc, f(x))
    , adder.GetZero(), xs);
}
function $b9be9450bf7f24ec$export$ad1963a493908da4(projection, xs, comparer) {
    return $b9be9450bf7f24ec$export$533b26079ad0b4b((x, y)=>comparer.Compare(projection(y), projection(x)) > 0 ? y : x
    , xs);
}
function $b9be9450bf7f24ec$export$8960430cfd85939f(xs, comparer) {
    return $b9be9450bf7f24ec$export$533b26079ad0b4b((x, y)=>comparer.Compare(y, x) > 0 ? y : x
    , xs);
}
function $b9be9450bf7f24ec$export$8c826aa0fa59ac68(projection, xs, comparer) {
    return $b9be9450bf7f24ec$export$533b26079ad0b4b((x, y)=>comparer.Compare(projection(y), projection(x)) > 0 ? x : y
    , xs);
}
function $b9be9450bf7f24ec$export$96ec731ed4dcb222(xs, comparer) {
    return $b9be9450bf7f24ec$export$533b26079ad0b4b((x, y)=>comparer.Compare(y, x) > 0 ? x : y
    , xs);
}
function $b9be9450bf7f24ec$export$cc6710ee5f037d57(xs, averager) {
    let count = 0;
    return averager.DivideByInt($b9be9450bf7f24ec$export$93e2b83da34ff82a((acc, x)=>{
        count = count + 1 | 0;
        return averager.Add(acc, x);
    }, averager.GetZero(), xs), count);
}
function $b9be9450bf7f24ec$export$9077387bc3582185(f, xs, averager) {
    let count = 0;
    return averager.DivideByInt($b9be9450bf7f24ec$export$93e2b83da34ff82a((acc, x)=>{
        count = count + 1 | 0;
        return averager.Add(acc, f(x));
    }, averager.GetZero(), xs), count);
}
function $b9be9450bf7f24ec$export$95e62ad65da8b7d2(f, xs) {
    return $b9be9450bf7f24ec$export$cb197a913f6bb809($1d849aa8ef8b0f61$export$95e62ad65da8b7d2(f, $b9be9450bf7f24ec$export$45b10814cc054894(xs)));
}
function $b9be9450bf7f24ec$export$6302d00ba2848bf(chunkSize, xs) {
    return $b9be9450bf7f24ec$export$cb197a913f6bb809($1d849aa8ef8b0f61$export$871de8747c9eaa88((xs_1)=>$b9be9450bf7f24ec$export$cb197a913f6bb809(xs_1)
    , $1d849aa8ef8b0f61$export$6302d00ba2848bf(chunkSize, $b9be9450bf7f24ec$export$45b10814cc054894(xs))));
}
function $b9be9450bf7f24ec$export$8016484fb8238078(xs, ys) {
    const root = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    let node = root;
    $b9be9450bf7f24ec$export$c1a059043cc9c119((x)=>{
        $b9be9450bf7f24ec$export$c1a059043cc9c119((y)=>{
            let xs_1, t;
            node = (xs_1 = node, t = new $b9be9450bf7f24ec$export$46fa32c6f8b2f86([
                x,
                y
            ], void 0), xs_1.tail = t, t);
        }, ys);
    }, xs);
    const xs_3 = node;
    const t_2 = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    xs_3.tail = t_2;
    return $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(root);
}
function $b9be9450bf7f24ec$export$955fc4a6c4be454d(count_mut, xs_mut) {
    skip: while(true){
        const count = count_mut, xs = xs_mut;
        if (count <= 0) return xs;
        else if ($b9be9450bf7f24ec$export$10d5772debd84bf1(xs)) throw new Error($b9be9450bf7f24ec$export$9f17aeddfa374276 + "\\nParameter name: " + "list");
        else {
            count_mut = count - 1;
            xs_mut = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(xs);
            continue skip;
        }
        break;
    }
}
function $b9be9450bf7f24ec$export$175dedd748069215(predicate_mut, xs_mut) {
    skipWhile: while(true){
        const predicate = predicate_mut, xs = xs_mut;
        if ($b9be9450bf7f24ec$export$10d5772debd84bf1(xs)) return xs;
        else if (!predicate($b9be9450bf7f24ec$export$1d866465156343c7(xs))) return xs;
        else {
            predicate_mut = predicate;
            xs_mut = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(xs);
            continue skipWhile;
        }
        break;
    }
}
function $b9be9450bf7f24ec$export$b7df5d561049483a(count, xs) {
    if (count < 0) throw new Error($b9be9450bf7f24ec$export$2f1b8e728b004525 + "\\nParameter name: " + "count");
    const loop = (i_mut, acc_mut, xs_1_mut)=>{
        let t;
        loop: while(true){
            const i = i_mut, acc = acc_mut, xs_1 = xs_1_mut;
            if (i <= 0) return acc;
            else if ($b9be9450bf7f24ec$export$10d5772debd84bf1(xs_1)) throw new Error($b9be9450bf7f24ec$export$9f17aeddfa374276 + "\\nParameter name: " + "list");
            else {
                i_mut = i - 1;
                acc_mut = (t = new $b9be9450bf7f24ec$export$46fa32c6f8b2f86($b9be9450bf7f24ec$export$1d866465156343c7(xs_1), void 0), acc.tail = t, t);
                xs_1_mut = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(xs_1);
                continue loop;
            }
            break;
        }
    };
    const root = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    const node = loop(count, root, xs);
    const t_2 = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    node.tail = t_2;
    return $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(root);
}
function $b9be9450bf7f24ec$export$9384c7afe4015e42(predicate, xs) {
    const loop = (acc_mut, xs_1_mut)=>{
        let t;
        loop: while(true){
            const acc = acc_mut, xs_1 = xs_1_mut;
            if ($b9be9450bf7f24ec$export$10d5772debd84bf1(xs_1)) return acc;
            else if (!predicate($b9be9450bf7f24ec$export$1d866465156343c7(xs_1))) return acc;
            else {
                acc_mut = (t = new $b9be9450bf7f24ec$export$46fa32c6f8b2f86($b9be9450bf7f24ec$export$1d866465156343c7(xs_1), void 0), acc.tail = t, t);
                xs_1_mut = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(xs_1);
                continue loop;
            }
            break;
        }
    };
    const root = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    const node = loop(root, xs);
    const t_2 = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    node.tail = t_2;
    return $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(root);
}
function $b9be9450bf7f24ec$export$6a506b36fdea397d(count, xs) {
    const loop = (i_mut, acc_mut, xs_1_mut)=>{
        let t;
        loop: while(true){
            const i = i_mut, acc = acc_mut, xs_1 = xs_1_mut;
            if (i <= 0) return acc;
            else if ($b9be9450bf7f24ec$export$10d5772debd84bf1(xs_1)) return acc;
            else {
                i_mut = i - 1;
                acc_mut = (t = new $b9be9450bf7f24ec$export$46fa32c6f8b2f86($b9be9450bf7f24ec$export$1d866465156343c7(xs_1), void 0), acc.tail = t, t);
                xs_1_mut = $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(xs_1);
                continue loop;
            }
            break;
        }
    };
    const root = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    const node = loop(count, root, xs);
    const t_2 = $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    node.tail = t_2;
    return $b9be9450bf7f24ec$export$4e0d45844bd5cd6a(root);
}
function $b9be9450bf7f24ec$export$9899dbe95982df9a(startIndex, endIndex, xs) {
    const len = $b9be9450bf7f24ec$export$f24224f1c91d8156(xs) | 0;
    const startIndex_1 = $cbf049927489a6e9$export$37721a79838ca038(startIndex, 0) | 0;
    const endIndex_1 = $cbf049927489a6e9$export$37721a79838ca038(endIndex, len - 1) | 0;
    if (startIndex_1 < 0) throw new Error($b9be9450bf7f24ec$export$1d7558b55257001d + "\\nParameter name: " + "startIndex");
    else if (endIndex_1 >= len) throw new Error($b9be9450bf7f24ec$export$1d7558b55257001d + "\\nParameter name: " + "endIndex");
    else if (endIndex_1 < startIndex_1) return $b9be9450bf7f24ec$export$ca5f14a39f7c3bde();
    else return $b9be9450bf7f24ec$export$b7df5d561049483a(endIndex_1 - startIndex_1 + 1, $b9be9450bf7f24ec$export$955fc4a6c4be454d(startIndex_1, xs));
}
function $b9be9450bf7f24ec$export$b0d75975ac0be0e1(index, xs) {
    if (index < 0) throw new Error($b9be9450bf7f24ec$export$2f1b8e728b004525 + "\\nParameter name: " + "index");
    if (index > $b9be9450bf7f24ec$export$f15c1e15e73226cf(xs)) throw new Error($b9be9450bf7f24ec$export$9f17aeddfa374276 + "\\nParameter name: " + "index");
    return [
        $b9be9450bf7f24ec$export$b7df5d561049483a(index, xs),
        $b9be9450bf7f24ec$export$955fc4a6c4be454d(index, xs)
    ];
}
function $b9be9450bf7f24ec$export$3367fc0da2c111f0(xs) {
    if ($b9be9450bf7f24ec$export$10d5772debd84bf1(xs)) throw new Error($b9be9450bf7f24ec$export$bb8ebba5bfe3f17a + "\\nParameter name: " + "list");
    else if ($b9be9450bf7f24ec$export$10d5772debd84bf1($b9be9450bf7f24ec$export$4e0d45844bd5cd6a(xs))) return $b9be9450bf7f24ec$export$1d866465156343c7(xs);
    else throw new Error($b9be9450bf7f24ec$export$8f2c469045724186 + "\\nParameter name: " + "list");
}
function $b9be9450bf7f24ec$export$22f0cfb94dab14ba(xs) {
    if (!$b9be9450bf7f24ec$export$10d5772debd84bf1(xs) ? $b9be9450bf7f24ec$export$10d5772debd84bf1($b9be9450bf7f24ec$export$4e0d45844bd5cd6a(xs)) : false) return $cbf049927489a6e9$export$ad14ef4001db2bcd($b9be9450bf7f24ec$export$1d866465156343c7(xs));
    else return void 0;
}
function $b9be9450bf7f24ec$export$9c59b80dda569a6e(predicate, xs) {
    return $b9be9450bf7f24ec$export$3dea766d36a8935f(predicate, xs);
}
function $b9be9450bf7f24ec$export$8f9d79d42bff1aac(xs) {
    return $b9be9450bf7f24ec$export$cb197a913f6bb809($1d849aa8ef8b0f61$export$8f9d79d42bff1aac($b9be9450bf7f24ec$export$45b10814cc054894(xs)));
}
function $b9be9450bf7f24ec$export$5f2b86065ccf5a1(windowSize, xs) {
    return $b9be9450bf7f24ec$export$cb197a913f6bb809($1d849aa8ef8b0f61$export$871de8747c9eaa88((xs_1)=>$b9be9450bf7f24ec$export$cb197a913f6bb809(xs_1)
    , $1d849aa8ef8b0f61$export$5f2b86065ccf5a1(windowSize, $b9be9450bf7f24ec$export$45b10814cc054894(xs))));
}
function $b9be9450bf7f24ec$export$7120a88bf3d39e8(chunks, xs) {
    return $b9be9450bf7f24ec$export$cb197a913f6bb809($1d849aa8ef8b0f61$export$871de8747c9eaa88((xs_1)=>$b9be9450bf7f24ec$export$cb197a913f6bb809(xs_1)
    , $1d849aa8ef8b0f61$export$7120a88bf3d39e8(chunks, $b9be9450bf7f24ec$export$45b10814cc054894(xs))));
}
function $b9be9450bf7f24ec$export$9cb09a71b7d66923(lists) {
    return $b9be9450bf7f24ec$export$cb197a913f6bb809($1d849aa8ef8b0f61$export$871de8747c9eaa88((xs_1)=>$b9be9450bf7f24ec$export$cb197a913f6bb809(xs_1)
    , $1d849aa8ef8b0f61$export$9cb09a71b7d66923($1d849aa8ef8b0f61$export$871de8747c9eaa88((xs)=>$b9be9450bf7f24ec$export$45b10814cc054894(xs)
    , Array.from(lists)))));
}


const $60035ec1a4f58e59$export$c1d29bc2efedc7e2 = "Enumeration already finished.";
const $60035ec1a4f58e59$export$d4f75b74a8a85920 = "Enumeration has not started. Call MoveNext.";
const $60035ec1a4f58e59$export$bb8ebba5bfe3f17a = "The input sequence was empty.";
const $60035ec1a4f58e59$export$8f2c469045724186 = "The input sequence contains more than one element.";
const $60035ec1a4f58e59$export$bc2c3bc917b1d953 = "An index satisfying the predicate was not found in the collection.";
const $60035ec1a4f58e59$export$9f17aeddfa374276 = "The input sequence has an insufficient number of elements.";
const $60035ec1a4f58e59$export$5c8816aab4f46f58 = "Reset is not supported on this enumerator.";
function $60035ec1a4f58e59$export$c9c12dccafdc9e15() {
    throw new Error($60035ec1a4f58e59$export$5c8816aab4f46f58);
}
function $60035ec1a4f58e59$export$fe7fea637c109b1() {
    throw new Error($60035ec1a4f58e59$export$d4f75b74a8a85920);
}
function $60035ec1a4f58e59$export$8314a61089d7dfd1() {
    throw new Error($60035ec1a4f58e59$export$c1d29bc2efedc7e2);
}
class $60035ec1a4f58e59$export$f84f5f7a2af4015b {
    constructor(f1){
        this.f = f1;
    }
    toString() {
        const xs = this;
        const maxCount = 4;
        let i = 0;
        let str = "seq [";
        const e = $4261fbb19e0b4aac$export$a41738691dcd8bea(xs);
        try {
            while(i < maxCount ? e["System.Collections.IEnumerator.MoveNext"]() : false){
                if (i > 0) str = str + "; ";
                str = str + $52d096336d1d74e9$export$f84e8e69fd4488a5(e["System.Collections.Generic.IEnumerator`1.get_Current"]());
                i = i + 1 | 0;
            }
            if (i === maxCount) str = str + "; ...";
            return str + "]";
        } finally{
            e.Dispose();
        }
    }
    GetEnumerator() {
        const x = this;
        return x.f();
    }
    [Symbol.iterator]() {
        return $4261fbb19e0b4aac$export$21e0669b7bd01bb4(this.GetEnumerator());
    }
    ["System.Collections.IEnumerable.GetEnumerator"]() {
        const x = this;
        return x.f();
    }
}
function $60035ec1a4f58e59$export$cc091c09229b4253(gen0) {
    return $64327df6a4d665f3$export$8547d5acd31924e("SeqModule.Enumerator.Seq", [
        gen0
    ], $60035ec1a4f58e59$export$f84f5f7a2af4015b);
}
function $60035ec1a4f58e59$export$9de9c521f6c9f38f(f) {
    return new $60035ec1a4f58e59$export$f84f5f7a2af4015b(f);
}
class $60035ec1a4f58e59$export$2cbf863d8f6afaa7 {
    constructor(current1, next1, dispose1){
        this.current = current1;
        this.next = next1;
        this.dispose = dispose1;
    }
    ["System.Collections.Generic.IEnumerator`1.get_Current"]() {
        const __ = this;
        return __.current();
    }
    ["System.Collections.IEnumerator.get_Current"]() {
        const __ = this;
        return __.current();
    }
    ["System.Collections.IEnumerator.MoveNext"]() {
        const __ = this;
        return __.next();
    }
    ["System.Collections.IEnumerator.Reset"]() {
        $60035ec1a4f58e59$export$c9c12dccafdc9e15();
    }
    Dispose() {
        const __ = this;
        __.dispose();
    }
}
function $60035ec1a4f58e59$export$8ea20ec9fcb9b264(gen0) {
    return $64327df6a4d665f3$export$8547d5acd31924e("SeqModule.Enumerator.FromFunctions`1", [
        gen0
    ], $60035ec1a4f58e59$export$2cbf863d8f6afaa7);
}
function $60035ec1a4f58e59$export$df49e5e409220125(current, next, dispose) {
    return new $60035ec1a4f58e59$export$2cbf863d8f6afaa7(current, next, dispose);
}
function $60035ec1a4f58e59$export$ebf0eca22469dbbc(e) {
    return $60035ec1a4f58e59$export$df49e5e409220125(()=>e["System.Collections.IEnumerator.get_Current"]()
    , ()=>e["System.Collections.IEnumerator.MoveNext"]()
    , ()=>{
        if ($4261fbb19e0b4aac$export$e29d65b7eabdc6dd(e)) e.Dispose();
    });
}
function $60035ec1a4f58e59$export$20426c14ee45c85e(sources) {
    let outerOpt = void 0;
    let innerOpt = void 0;
    let started = false;
    let finished = false;
    let curr = void 0;
    const finish = ()=>{
        finished = true;
        if (innerOpt != null) {
            const inner = innerOpt;
            try {
                inner.Dispose();
            } finally{
                innerOpt = void 0;
            }
        }
        if (outerOpt != null) {
            const outer = outerOpt;
            try {
                outer.Dispose();
            } finally{
                outerOpt = void 0;
            }
        }
    };
    return $60035ec1a4f58e59$export$df49e5e409220125(()=>{
        if (!started) $60035ec1a4f58e59$export$fe7fea637c109b1();
        else if (finished) $60035ec1a4f58e59$export$8314a61089d7dfd1();
        if (curr != null) return $cbf049927489a6e9$export$2ab9a8f9f1186f14(curr);
        else return $60035ec1a4f58e59$export$8314a61089d7dfd1();
    }, ()=>{
        let copyOfStruct;
        if (!started) started = true;
        if (finished) return false;
        else {
            let res = void 0;
            while(res == null){
                const matchValue = [
                    outerOpt,
                    innerOpt
                ];
                if (matchValue[0] != null) {
                    if (matchValue[1] != null) {
                        const inner_1 = matchValue[1];
                        if (inner_1["System.Collections.IEnumerator.MoveNext"]()) {
                            curr = $cbf049927489a6e9$export$ad14ef4001db2bcd(inner_1["System.Collections.Generic.IEnumerator`1.get_Current"]());
                            res = true;
                        } else try {
                            inner_1.Dispose();
                        } finally{
                            innerOpt = void 0;
                        }
                    } else {
                        const outer_1 = matchValue[0];
                        if (outer_1["System.Collections.IEnumerator.MoveNext"]()) {
                            const ie = outer_1["System.Collections.Generic.IEnumerator`1.get_Current"]();
                            innerOpt = (copyOfStruct = ie, $4261fbb19e0b4aac$export$a41738691dcd8bea(copyOfStruct));
                        } else {
                            finish();
                            res = false;
                        }
                    }
                } else outerOpt = $4261fbb19e0b4aac$export$a41738691dcd8bea(sources);
            }
            return $cbf049927489a6e9$export$2ab9a8f9f1186f14(res);
        }
    }, ()=>{
        if (!finished) finish();
    });
}
function $60035ec1a4f58e59$export$8da5aab8659eb06(f, e) {
    return $60035ec1a4f58e59$export$df49e5e409220125(()=>e["System.Collections.Generic.IEnumerator`1.get_Current"]()
    , ()=>e["System.Collections.IEnumerator.MoveNext"]()
    , ()=>{
        try {
            e.Dispose();
        } finally{
            f();
        }
    });
}
function $60035ec1a4f58e59$export$d82b80f0dbfe256d(openf, compute, closef) {
    let started = false;
    let curr = void 0;
    let state = $cbf049927489a6e9$export$ad14ef4001db2bcd(openf());
    const dispose = ()=>{
        if (state != null) {
            const x_1 = $cbf049927489a6e9$export$2ab9a8f9f1186f14(state);
            try {
                closef(x_1);
            } finally{
                state = void 0;
            }
        }
    };
    const finish = ()=>{
        try {
            dispose();
        } finally{
            curr = void 0;
        }
    };
    return $60035ec1a4f58e59$export$df49e5e409220125(()=>{
        if (!started) $60035ec1a4f58e59$export$fe7fea637c109b1();
        if (curr != null) return $cbf049927489a6e9$export$2ab9a8f9f1186f14(curr);
        else return $60035ec1a4f58e59$export$8314a61089d7dfd1();
    }, ()=>{
        if (!started) started = true;
        if (state != null) {
            const s = $cbf049927489a6e9$export$2ab9a8f9f1186f14(state);
            let matchValue_1;
            try {
                matchValue_1 = compute(s);
            } catch (matchValue) {
                finish();
                throw matchValue;
            }
            if (matchValue_1 != null) {
                curr = matchValue_1;
                return true;
            } else {
                finish();
                return false;
            }
        } else return false;
    }, dispose);
}
function $60035ec1a4f58e59$export$f054447c84a06e65(f, state) {
    let curr = void 0;
    let acc = state;
    return $60035ec1a4f58e59$export$df49e5e409220125(()=>{
        if (curr != null) {
            const x = curr[0];
            const st = curr[1];
            return x;
        } else return $60035ec1a4f58e59$export$fe7fea637c109b1();
    }, ()=>{
        curr = f(acc);
        if (curr != null) {
            const x_1 = curr[0];
            const st_1 = curr[1];
            acc = st_1;
            return true;
        } else return false;
    }, ()=>{
    });
}
function $60035ec1a4f58e59$export$6362f022d562392() {
    throw new Error($60035ec1a4f58e59$export$bc2c3bc917b1d953);
}
function $60035ec1a4f58e59$export$14d5e08ade3f14c2(argName, arg) {
    if (arg == null) $b67554b9f15555d9$export$49fc45e4e62e7426(argName);
}
function $60035ec1a4f58e59$export$327d67905f90fa80(f) {
    return $60035ec1a4f58e59$export$9de9c521f6c9f38f(f);
}
function $60035ec1a4f58e59$export$c80b5fc7454ef206(xs) {
    $60035ec1a4f58e59$export$14d5e08ade3f14c2("source", xs);
    return $4261fbb19e0b4aac$export$a41738691dcd8bea(xs);
}
function $60035ec1a4f58e59$export$1391212d75b2ee65(generator) {
    return $60035ec1a4f58e59$export$327d67905f90fa80(()=>$4261fbb19e0b4aac$export$a41738691dcd8bea(generator())
    );
}
function $60035ec1a4f58e59$export$ee1b3e54f0441b22(sources) {
    return $60035ec1a4f58e59$export$327d67905f90fa80(()=>$60035ec1a4f58e59$export$20426c14ee45c85e(sources)
    );
}
function $60035ec1a4f58e59$export$c48e357c1a89b78d(generator, state) {
    return $60035ec1a4f58e59$export$327d67905f90fa80(()=>$60035ec1a4f58e59$export$f054447c84a06e65(generator, state)
    );
}
function $60035ec1a4f58e59$export$6e22c362a0406a2c() {
    return $60035ec1a4f58e59$export$1391212d75b2ee65(()=>new Array(0)
    );
}
function $60035ec1a4f58e59$export$439306a4dcaafbb9(x) {
    return $60035ec1a4f58e59$export$1391212d75b2ee65(()=>$1d849aa8ef8b0f61$export$439306a4dcaafbb9(x)
    );
}
function $60035ec1a4f58e59$export$cb197a913f6bb809(arr) {
    return arr;
}
function $60035ec1a4f58e59$export$45b10814cc054894(xs) {
    if (xs instanceof $b9be9450bf7f24ec$export$46fa32c6f8b2f86) return $b9be9450bf7f24ec$export$45b10814cc054894(xs);
    else return Array.from(xs);
}
function $60035ec1a4f58e59$export$97ef4da51e4fceb3(xs) {
    return xs;
}
function $60035ec1a4f58e59$export$effcdbd76139450(xs) {
    if ($4261fbb19e0b4aac$export$1e2f57719e155213(xs)) return $b9be9450bf7f24ec$export$cb197a913f6bb809(xs);
    else if (xs instanceof $b9be9450bf7f24ec$export$46fa32c6f8b2f86) return xs;
    else return $b9be9450bf7f24ec$export$c80b5fc7454ef206(xs);
}
function $60035ec1a4f58e59$export$80d376111cc09ad7(create, compute, dispose) {
    return $60035ec1a4f58e59$export$327d67905f90fa80(()=>$60035ec1a4f58e59$export$d82b80f0dbfe256d(create, compute, dispose)
    );
}
function $60035ec1a4f58e59$export$7395da449cea18d1(create, compute, dispose) {
    return $60035ec1a4f58e59$export$327d67905f90fa80(()=>{
        let i = -1;
        return $60035ec1a4f58e59$export$d82b80f0dbfe256d(create, (x)=>{
            i = i + 1 | 0;
            return compute(i, x);
        }, dispose);
    });
}
function $60035ec1a4f58e59$export$10d8903dec122b9d(xs, ys) {
    return $60035ec1a4f58e59$export$ee1b3e54f0441b22([
        xs,
        ys
    ]);
}
function $60035ec1a4f58e59$export$f2db7d5238e1d23f(xs) {
    return $60035ec1a4f58e59$export$327d67905f90fa80(()=>{
        $60035ec1a4f58e59$export$14d5e08ade3f14c2("source", xs);
        return $60035ec1a4f58e59$export$ebf0eca22469dbbc($4261fbb19e0b4aac$export$a41738691dcd8bea(xs));
    });
}
function $60035ec1a4f58e59$export$7877a478dd30fd3d(chooser, xs) {
    return $60035ec1a4f58e59$export$80d376111cc09ad7(()=>$60035ec1a4f58e59$export$c80b5fc7454ef206(xs)
    , (e)=>{
        let curr = void 0;
        while(curr == null ? e["System.Collections.IEnumerator.MoveNext"]() : false)curr = chooser(e["System.Collections.Generic.IEnumerator`1.get_Current"]());
        return curr;
    }, (e_1)=>{
        e_1.Dispose();
    });
}
function $60035ec1a4f58e59$export$ecb3797c03e8ce0c(comparer, xs, ys) {
    const e1 = $60035ec1a4f58e59$export$c80b5fc7454ef206(xs);
    try {
        const e2 = $60035ec1a4f58e59$export$c80b5fc7454ef206(ys);
        try {
            let c = 0;
            let b1 = e1["System.Collections.IEnumerator.MoveNext"]();
            let b2 = e2["System.Collections.IEnumerator.MoveNext"]();
            while((c === 0 ? b1 : false) ? b2 : false){
                c = comparer(e1["System.Collections.Generic.IEnumerator`1.get_Current"](), e2["System.Collections.Generic.IEnumerator`1.get_Current"]()) | 0;
                if (c === 0) {
                    b1 = e1["System.Collections.IEnumerator.MoveNext"]();
                    b2 = e2["System.Collections.IEnumerator.MoveNext"]();
                }
            }
            return (c !== 0 ? c : b1 ? 1 : b2 ? -1 : 0) | 0;
        } finally{
            e2.Dispose();
        }
    } finally{
        e1.Dispose();
    }
}
function $60035ec1a4f58e59$export$2344b14b097df817(value, xs, comparer) {
    const e = $60035ec1a4f58e59$export$c80b5fc7454ef206(xs);
    try {
        let found = false;
        while(!found ? e["System.Collections.IEnumerator.MoveNext"]() : false)found = comparer.Equals(value, e["System.Collections.Generic.IEnumerator`1.get_Current"]());
        return found;
    } finally{
        e.Dispose();
    }
}
function $60035ec1a4f58e59$export$861f8efb7480e521(create, moveNext, current) {
    return $60035ec1a4f58e59$export$80d376111cc09ad7(create, (x)=>moveNext(x) ? $cbf049927489a6e9$export$ad14ef4001db2bcd(current(x)) : void 0
    , (x_1)=>{
        const matchValue = x_1;
        if ($4261fbb19e0b4aac$export$e29d65b7eabdc6dd(matchValue)) matchValue.Dispose();
    });
}
function $60035ec1a4f58e59$export$a961e324f78542f0(source, compensation) {
    const compensation_1 = compensation;
    return $60035ec1a4f58e59$export$327d67905f90fa80(()=>{
        try {
            return $60035ec1a4f58e59$export$8da5aab8659eb06(compensation_1, $60035ec1a4f58e59$export$c80b5fc7454ef206(source));
        } catch (matchValue) {
            compensation_1();
            throw matchValue;
        }
    });
}
function $60035ec1a4f58e59$export$19377b1e8666bd96(resource, source) {
    const compensation = ()=>{
        if ($4261fbb19e0b4aac$export$e9bab7fafb253603(resource, null)) ;
        else {
            let copyOfStruct = resource;
            copyOfStruct.Dispose();
        }
    };
    return $60035ec1a4f58e59$export$327d67905f90fa80(()=>{
        try {
            return $60035ec1a4f58e59$export$8da5aab8659eb06(compensation, $60035ec1a4f58e59$export$c80b5fc7454ef206(source(resource)));
        } catch (matchValue_1) {
            compensation();
            throw matchValue_1;
        }
    });
}
function $60035ec1a4f58e59$export$d6ea9ba8df458a3e(guard, xs) {
    return $60035ec1a4f58e59$export$ee1b3e54f0441b22($60035ec1a4f58e59$export$c48e357c1a89b78d((i)=>guard() ? [
            xs,
            i + 1
        ] : void 0
    , 0));
}
function $60035ec1a4f58e59$export$3dea766d36a8935f(f, xs) {
    return $60035ec1a4f58e59$export$7877a478dd30fd3d((x)=>{
        if (f(x)) return $cbf049927489a6e9$export$ad14ef4001db2bcd(x);
        else return void 0;
    }, xs);
}
function $60035ec1a4f58e59$export$f7e9f41ea797a17(predicate, xs) {
    const e = $60035ec1a4f58e59$export$c80b5fc7454ef206(xs);
    try {
        let found = false;
        while(!found ? e["System.Collections.IEnumerator.MoveNext"]() : false)found = predicate(e["System.Collections.Generic.IEnumerator`1.get_Current"]());
        return found;
    } finally{
        e.Dispose();
    }
}
function $60035ec1a4f58e59$export$d04ae74aaa2c0655(predicate, xs, ys) {
    const e1 = $60035ec1a4f58e59$export$c80b5fc7454ef206(xs);
    try {
        const e2 = $60035ec1a4f58e59$export$c80b5fc7454ef206(ys);
        try {
            let found = false;
            while((!found ? e1["System.Collections.IEnumerator.MoveNext"]() : false) ? e2["System.Collections.IEnumerator.MoveNext"]() : false)found = predicate(e1["System.Collections.Generic.IEnumerator`1.get_Current"](), e2["System.Collections.Generic.IEnumerator`1.get_Current"]());
            return found;
        } finally{
            e2.Dispose();
        }
    } finally{
        e1.Dispose();
    }
}
function $60035ec1a4f58e59$export$3367fc0da2c111f0(xs) {
    const e = $60035ec1a4f58e59$export$c80b5fc7454ef206(xs);
    try {
        if (e["System.Collections.IEnumerator.MoveNext"]()) {
            const v = e["System.Collections.Generic.IEnumerator`1.get_Current"]();
            if (e["System.Collections.IEnumerator.MoveNext"]()) throw new Error($60035ec1a4f58e59$export$8f2c469045724186 + "\\nParameter name: " + "source");
            else return v;
        } else throw new Error($60035ec1a4f58e59$export$bb8ebba5bfe3f17a + "\\nParameter name: " + "source");
    } finally{
        e.Dispose();
    }
}
function $60035ec1a4f58e59$export$22f0cfb94dab14ba(xs) {
    const e = $60035ec1a4f58e59$export$c80b5fc7454ef206(xs);
    try {
        if (e["System.Collections.IEnumerator.MoveNext"]()) {
            const v = e["System.Collections.Generic.IEnumerator`1.get_Current"]();
            return e["System.Collections.IEnumerator.MoveNext"]() ? void 0 : $cbf049927489a6e9$export$ad14ef4001db2bcd(v);
        } else return void 0;
    } finally{
        e.Dispose();
    }
}
function $60035ec1a4f58e59$export$d65cb303b863e3bf(predicate, xs) {
    const e = $60035ec1a4f58e59$export$c80b5fc7454ef206(xs);
    try {
        let res = void 0;
        while(res == null ? e["System.Collections.IEnumerator.MoveNext"]() : false){
            const c = e["System.Collections.Generic.IEnumerator`1.get_Current"]();
            if (predicate(c)) res = $cbf049927489a6e9$export$ad14ef4001db2bcd(c);
        }
        return res;
    } finally{
        e.Dispose();
    }
}
function $60035ec1a4f58e59$export$71aa6c912b956294(predicate, xs) {
    const matchValue = $60035ec1a4f58e59$export$d65cb303b863e3bf(predicate, xs);
    if (matchValue == null) return $60035ec1a4f58e59$export$6362f022d562392();
    else return $cbf049927489a6e9$export$2ab9a8f9f1186f14(matchValue);
}
function $60035ec1a4f58e59$export$36425195e236bb0f(predicate, xs) {
    return $1d849aa8ef8b0f61$export$36425195e236bb0f(predicate, $60035ec1a4f58e59$export$45b10814cc054894(xs));
}
function $60035ec1a4f58e59$export$ec18defb06d12add(predicate, xs) {
    const matchValue = $60035ec1a4f58e59$export$36425195e236bb0f(predicate, xs);
    if (matchValue == null) return $60035ec1a4f58e59$export$6362f022d562392();
    else return $cbf049927489a6e9$export$2ab9a8f9f1186f14(matchValue);
}
function $60035ec1a4f58e59$export$5c13475397a61429(predicate, xs) {
    const e = $60035ec1a4f58e59$export$c80b5fc7454ef206(xs);
    try {
        const loop = (i_mut)=>{
            loop: while(true){
                const i = i_mut;
                if (e["System.Collections.IEnumerator.MoveNext"]()) {
                    if (predicate(e["System.Collections.Generic.IEnumerator`1.get_Current"]())) return i;
                    else {
                        i_mut = i + 1;
                        continue loop;
                    }
                } else return void 0;
                break;
            }
        };
        return loop(0);
    } finally{
        e.Dispose();
    }
}
function $60035ec1a4f58e59$export$de3a4d4a0d731119(predicate, xs) {
    const matchValue = $60035ec1a4f58e59$export$5c13475397a61429(predicate, xs);
    if (matchValue == null) return $60035ec1a4f58e59$export$6362f022d562392() | 0;
    else return matchValue | 0;
}
function $60035ec1a4f58e59$export$e1cc954945760117(predicate, xs) {
    return $1d849aa8ef8b0f61$export$e1cc954945760117(predicate, $60035ec1a4f58e59$export$45b10814cc054894(xs));
}
function $60035ec1a4f58e59$export$78e19deb30f83296(predicate, xs) {
    const matchValue = $60035ec1a4f58e59$export$e1cc954945760117(predicate, xs);
    if (matchValue == null) return $60035ec1a4f58e59$export$6362f022d562392() | 0;
    else return matchValue | 0;
}
function $60035ec1a4f58e59$export$93e2b83da34ff82a(folder, state, xs) {
    const e = $60035ec1a4f58e59$export$c80b5fc7454ef206(xs);
    try {
        let acc = state;
        while(e["System.Collections.IEnumerator.MoveNext"]())acc = folder(acc, e["System.Collections.Generic.IEnumerator`1.get_Current"]());
        return acc;
    } finally{
        e.Dispose();
    }
}
function $60035ec1a4f58e59$export$c38b8353041a4f48(folder, xs, state) {
    return $1d849aa8ef8b0f61$export$c38b8353041a4f48(folder, $60035ec1a4f58e59$export$45b10814cc054894(xs), state);
}
function $60035ec1a4f58e59$export$6eef545db8c1f6e(folder, state, xs, ys) {
    const e1 = $60035ec1a4f58e59$export$c80b5fc7454ef206(xs);
    try {
        const e2 = $60035ec1a4f58e59$export$c80b5fc7454ef206(ys);
        try {
            let acc = state;
            while(e1["System.Collections.IEnumerator.MoveNext"]() ? e2["System.Collections.IEnumerator.MoveNext"]() : false)acc = folder(acc, e1["System.Collections.Generic.IEnumerator`1.get_Current"](), e2["System.Collections.Generic.IEnumerator`1.get_Current"]());
            return acc;
        } finally{
            e2.Dispose();
        }
    } finally{
        e1.Dispose();
    }
}
function $60035ec1a4f58e59$export$f04d6919de1a1f94(folder, xs, ys, state) {
    return $1d849aa8ef8b0f61$export$f04d6919de1a1f94(folder, $60035ec1a4f58e59$export$45b10814cc054894(xs), $60035ec1a4f58e59$export$45b10814cc054894(ys), state);
}
function $60035ec1a4f58e59$export$e5bd981f5eeebe3b(predicate, xs) {
    return !$60035ec1a4f58e59$export$f7e9f41ea797a17((x)=>!predicate(x)
    , xs);
}
function $60035ec1a4f58e59$export$a85e1ff32f9fff6e(predicate, xs, ys) {
    return !$60035ec1a4f58e59$export$d04ae74aaa2c0655((x, y)=>!predicate(x, y)
    , xs, ys);
}
function $60035ec1a4f58e59$export$1acbe849d0cb723e(xs) {
    if ($4261fbb19e0b4aac$export$1e2f57719e155213(xs)) return $1d849aa8ef8b0f61$export$1acbe849d0cb723e(xs);
    else if (xs instanceof $b9be9450bf7f24ec$export$46fa32c6f8b2f86) return $b9be9450bf7f24ec$export$1acbe849d0cb723e(xs);
    else {
        const e = $60035ec1a4f58e59$export$c80b5fc7454ef206(xs);
        try {
            return e["System.Collections.IEnumerator.MoveNext"]() ? $cbf049927489a6e9$export$ad14ef4001db2bcd(e["System.Collections.Generic.IEnumerator`1.get_Current"]()) : void 0;
        } finally{
            e.Dispose();
        }
    }
}
function $60035ec1a4f58e59$export$5fd5031fecdacec3(xs) {
    const matchValue = $60035ec1a4f58e59$export$1acbe849d0cb723e(xs);
    if (matchValue == null) throw new Error($60035ec1a4f58e59$export$bb8ebba5bfe3f17a + "\\nParameter name: " + "source");
    else return $cbf049927489a6e9$export$2ab9a8f9f1186f14(matchValue);
}
function $60035ec1a4f58e59$export$2a47f398eeff8b01(count, f) {
    return $60035ec1a4f58e59$export$c48e357c1a89b78d((i)=>i < count ? [
            f(i),
            i + 1
        ] : void 0
    , 0);
}
function $60035ec1a4f58e59$export$eac530aded73d64c(f) {
    return $60035ec1a4f58e59$export$2a47f398eeff8b01(2147483647, f);
}
function $60035ec1a4f58e59$export$dd1bc94b04021eeb(xs) {
    if ($4261fbb19e0b4aac$export$1e2f57719e155213(xs)) return xs.length === 0;
    else if (xs instanceof $b9be9450bf7f24ec$export$46fa32c6f8b2f86) return $b9be9450bf7f24ec$export$dd1bc94b04021eeb(xs);
    else {
        const e = $60035ec1a4f58e59$export$c80b5fc7454ef206(xs);
        try {
            return !e["System.Collections.IEnumerator.MoveNext"]();
        } finally{
            e.Dispose();
        }
    }
}
function $60035ec1a4f58e59$export$3fe40c3a4d8cb094(index, xs) {
    if ($4261fbb19e0b4aac$export$1e2f57719e155213(xs)) return $1d849aa8ef8b0f61$export$3fe40c3a4d8cb094(index, xs);
    else if (xs instanceof $b9be9450bf7f24ec$export$46fa32c6f8b2f86) return $b9be9450bf7f24ec$export$3fe40c3a4d8cb094(index, xs);
    else {
        const e = $60035ec1a4f58e59$export$c80b5fc7454ef206(xs);
        try {
            const loop = (index_1_mut)=>{
                loop: while(true){
                    const index_1 = index_1_mut;
                    if (!e["System.Collections.IEnumerator.MoveNext"]()) return void 0;
                    else if (index_1 === 0) return $cbf049927489a6e9$export$ad14ef4001db2bcd(e["System.Collections.Generic.IEnumerator`1.get_Current"]());
                    else {
                        index_1_mut = index_1 - 1;
                        continue loop;
                    }
                    break;
                }
            };
            return loop(index);
        } finally{
            e.Dispose();
        }
    }
}
function $60035ec1a4f58e59$export$7061c75fc5af8b7e(index, xs) {
    const matchValue = $60035ec1a4f58e59$export$3fe40c3a4d8cb094(index, xs);
    if (matchValue == null) throw new Error($60035ec1a4f58e59$export$9f17aeddfa374276 + "\\nParameter name: " + "index");
    else return $cbf049927489a6e9$export$2ab9a8f9f1186f14(matchValue);
}
function $60035ec1a4f58e59$export$c1a059043cc9c119(action, xs) {
    $60035ec1a4f58e59$export$93e2b83da34ff82a((unitVar0, x)=>{
        action(x);
    }, void 0, xs);
}
function $60035ec1a4f58e59$export$d1731a37ee7d4fbb(action, xs, ys) {
    $60035ec1a4f58e59$export$6eef545db8c1f6e((unitVar0, x, y)=>{
        action(x, y);
    }, void 0, xs, ys);
}
function $60035ec1a4f58e59$export$5a067165821eae2d(action, xs) {
    $60035ec1a4f58e59$export$93e2b83da34ff82a((i, x)=>{
        action(i, x);
        return i + 1 | 0;
    }, 0, xs);
}
function $60035ec1a4f58e59$export$ab3c1f9aeb4948fd(action, xs, ys) {
    $60035ec1a4f58e59$export$6eef545db8c1f6e((i, x, y)=>{
        action(i, x, y);
        return i + 1 | 0;
    }, 0, xs, ys);
}
function $60035ec1a4f58e59$export$e5907b21d797cce6(xs) {
    const e = $60035ec1a4f58e59$export$c80b5fc7454ef206(xs);
    try {
        const loop = (acc_mut)=>{
            loop: while(true){
                const acc = acc_mut;
                if (!e["System.Collections.IEnumerator.MoveNext"]()) return acc;
                else {
                    acc_mut = e["System.Collections.Generic.IEnumerator`1.get_Current"]();
                    continue loop;
                }
                break;
            }
        };
        return e["System.Collections.IEnumerator.MoveNext"]() ? $cbf049927489a6e9$export$ad14ef4001db2bcd(loop(e["System.Collections.Generic.IEnumerator`1.get_Current"]())) : void 0;
    } finally{
        e.Dispose();
    }
}
function $60035ec1a4f58e59$export$4c7897fafd92b108(xs) {
    const matchValue = $60035ec1a4f58e59$export$e5907b21d797cce6(xs);
    if (matchValue == null) throw new Error($60035ec1a4f58e59$export$9f17aeddfa374276 + "\\nParameter name: " + "source");
    else return $cbf049927489a6e9$export$2ab9a8f9f1186f14(matchValue);
}
function $60035ec1a4f58e59$export$f24224f1c91d8156(xs) {
    if ($4261fbb19e0b4aac$export$1e2f57719e155213(xs)) return xs.length | 0;
    else if (xs instanceof $b9be9450bf7f24ec$export$46fa32c6f8b2f86) return $b9be9450bf7f24ec$export$f24224f1c91d8156(xs) | 0;
    else {
        const e = $60035ec1a4f58e59$export$c80b5fc7454ef206(xs);
        try {
            let count = 0;
            while(e["System.Collections.IEnumerator.MoveNext"]())count = count + 1 | 0;
            return count | 0;
        } finally{
            e.Dispose();
        }
    }
}
function $60035ec1a4f58e59$export$871de8747c9eaa88(mapping, xs) {
    return $60035ec1a4f58e59$export$80d376111cc09ad7(()=>$60035ec1a4f58e59$export$c80b5fc7454ef206(xs)
    , (e)=>e["System.Collections.IEnumerator.MoveNext"]() ? $cbf049927489a6e9$export$ad14ef4001db2bcd(mapping(e["System.Collections.Generic.IEnumerator`1.get_Current"]())) : void 0
    , (e_1)=>{
        e_1.Dispose();
    });
}
function $60035ec1a4f58e59$export$e5bd5b3b105c2a71(mapping, xs) {
    return $60035ec1a4f58e59$export$7395da449cea18d1(()=>$60035ec1a4f58e59$export$c80b5fc7454ef206(xs)
    , (i, e)=>e["System.Collections.IEnumerator.MoveNext"]() ? $cbf049927489a6e9$export$ad14ef4001db2bcd(mapping(i, e["System.Collections.Generic.IEnumerator`1.get_Current"]())) : void 0
    , (e_1)=>{
        e_1.Dispose();
    });
}
function $60035ec1a4f58e59$export$ddf7c77acd0bf516(xs) {
    return $60035ec1a4f58e59$export$e5bd5b3b105c2a71((i, x)=>[
            i,
            x
        ]
    , xs);
}
function $60035ec1a4f58e59$export$5be556bf484c4f10(mapping, xs, ys) {
    return $60035ec1a4f58e59$export$80d376111cc09ad7(()=>[
            $60035ec1a4f58e59$export$c80b5fc7454ef206(xs),
            $60035ec1a4f58e59$export$c80b5fc7454ef206(ys)
        ]
    , (tupledArg)=>{
        const e1 = tupledArg[0];
        const e2 = tupledArg[1];
        return (e1["System.Collections.IEnumerator.MoveNext"]() ? e2["System.Collections.IEnumerator.MoveNext"]() : false) ? $cbf049927489a6e9$export$ad14ef4001db2bcd(mapping(e1["System.Collections.Generic.IEnumerator`1.get_Current"](), e2["System.Collections.Generic.IEnumerator`1.get_Current"]())) : void 0;
    }, (tupledArg_1)=>{
        try {
            tupledArg_1[0].Dispose();
        } finally{
            tupledArg_1[1].Dispose();
        }
    });
}
function $60035ec1a4f58e59$export$aded800c294daba4(mapping, xs, ys) {
    return $60035ec1a4f58e59$export$7395da449cea18d1(()=>[
            $60035ec1a4f58e59$export$c80b5fc7454ef206(xs),
            $60035ec1a4f58e59$export$c80b5fc7454ef206(ys)
        ]
    , (i, tupledArg)=>{
        const e1 = tupledArg[0];
        const e2 = tupledArg[1];
        return (e1["System.Collections.IEnumerator.MoveNext"]() ? e2["System.Collections.IEnumerator.MoveNext"]() : false) ? $cbf049927489a6e9$export$ad14ef4001db2bcd(mapping(i, e1["System.Collections.Generic.IEnumerator`1.get_Current"](), e2["System.Collections.Generic.IEnumerator`1.get_Current"]())) : void 0;
    }, (tupledArg_1)=>{
        try {
            tupledArg_1[0].Dispose();
        } finally{
            tupledArg_1[1].Dispose();
        }
    });
}
function $60035ec1a4f58e59$export$f7389512af34c855(mapping, xs, ys, zs) {
    return $60035ec1a4f58e59$export$80d376111cc09ad7(()=>[
            $60035ec1a4f58e59$export$c80b5fc7454ef206(xs),
            $60035ec1a4f58e59$export$c80b5fc7454ef206(ys),
            $60035ec1a4f58e59$export$c80b5fc7454ef206(zs)
        ]
    , (tupledArg)=>{
        const e1 = tupledArg[0];
        const e2 = tupledArg[1];
        const e3 = tupledArg[2];
        return ((e1["System.Collections.IEnumerator.MoveNext"]() ? e2["System.Collections.IEnumerator.MoveNext"]() : false) ? e3["System.Collections.IEnumerator.MoveNext"]() : false) ? $cbf049927489a6e9$export$ad14ef4001db2bcd(mapping(e1["System.Collections.Generic.IEnumerator`1.get_Current"](), e2["System.Collections.Generic.IEnumerator`1.get_Current"](), e3["System.Collections.Generic.IEnumerator`1.get_Current"]())) : void 0;
    }, (tupledArg_1)=>{
        try {
            tupledArg_1[0].Dispose();
        } finally{
            try {
                tupledArg_1[1].Dispose();
            } finally{
                tupledArg_1[2].Dispose();
            }
        }
    });
}
function $60035ec1a4f58e59$export$b2cbc93d4da94977(xs) {
    $60035ec1a4f58e59$export$14d5e08ade3f14c2("source", xs);
    return $60035ec1a4f58e59$export$871de8747c9eaa88((x)=>x
    , xs);
}
class $60035ec1a4f58e59$export$52178a8464ab8b5 {
    constructor(cleanup1, res1){
        this.cleanup = cleanup1;
        this.res = res1;
    }
    Dispose() {
        const _ = this;
        _.cleanup();
    }
    GetEnumerator() {
        const _ = this;
        return $4261fbb19e0b4aac$export$a41738691dcd8bea(_.res);
    }
    [Symbol.iterator]() {
        return $4261fbb19e0b4aac$export$21e0669b7bd01bb4(this.GetEnumerator());
    }
    ["System.Collections.IEnumerable.GetEnumerator"]() {
        const _ = this;
        return $4261fbb19e0b4aac$export$a41738691dcd8bea(_.res);
    }
}
function $60035ec1a4f58e59$export$9ceff0ca41e4c11a(gen0) {
    return $64327df6a4d665f3$export$8547d5acd31924e("SeqModule.CachedSeq`1", [
        gen0
    ], $60035ec1a4f58e59$export$52178a8464ab8b5);
}
function $60035ec1a4f58e59$export$3e405a892b2f2a5a(cleanup, res) {
    return new $60035ec1a4f58e59$export$52178a8464ab8b5(cleanup, res);
}
function $60035ec1a4f58e59$export$d9518c87d556a0bb(_) {
    _.cleanup();
}
function $60035ec1a4f58e59$export$69a3209f1a06c04d(source) {
    $60035ec1a4f58e59$export$14d5e08ade3f14c2("source", source);
    const prefix = [];
    let enumeratorR = void 0;
    return $60035ec1a4f58e59$export$3e405a892b2f2a5a(()=>{
        $4261fbb19e0b4aac$export$42ffd38884aecdac(prefix);
        let pattern_matching_result, e;
        if (enumeratorR != null) {
            if ($cbf049927489a6e9$export$2ab9a8f9f1186f14(enumeratorR) != null) {
                pattern_matching_result = 0;
                e = $cbf049927489a6e9$export$2ab9a8f9f1186f14(enumeratorR);
            } else pattern_matching_result = 1;
        } else pattern_matching_result = 1;
        switch(pattern_matching_result){
            case 0:
                e.Dispose();
                break;
        }
        enumeratorR = void 0;
    }, $60035ec1a4f58e59$export$c48e357c1a89b78d((i_1)=>{
        if (i_1 < prefix.length) return [
            prefix[i_1],
            i_1 + 1
        ];
        else {
            if (i_1 >= prefix.length) {
                let optEnumerator_2;
                if (enumeratorR != null) optEnumerator_2 = $cbf049927489a6e9$export$2ab9a8f9f1186f14(enumeratorR);
                else {
                    const optEnumerator = $4261fbb19e0b4aac$export$a41738691dcd8bea(source);
                    enumeratorR = $cbf049927489a6e9$export$ad14ef4001db2bcd(optEnumerator);
                    optEnumerator_2 = optEnumerator;
                }
                if (optEnumerator_2 == null) ;
                else {
                    const enumerator = optEnumerator_2;
                    if (enumerator["System.Collections.IEnumerator.MoveNext"]()) prefix.push(enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]());
                    else {
                        enumerator.Dispose();
                        enumeratorR = $cbf049927489a6e9$export$ad14ef4001db2bcd(void 0);
                    }
                }
            }
            return i_1 < prefix.length ? [
                prefix[i_1],
                i_1 + 1
            ] : void 0;
        }
    }, 0));
}
function $60035ec1a4f58e59$export$8016484fb8238078(xs, ys) {
    const ysCache = $60035ec1a4f58e59$export$69a3209f1a06c04d(ys);
    return $60035ec1a4f58e59$export$1391212d75b2ee65(()=>$60035ec1a4f58e59$export$ee1b3e54f0441b22($60035ec1a4f58e59$export$871de8747c9eaa88((x)=>$60035ec1a4f58e59$export$871de8747c9eaa88((y)=>[
                    x,
                    y
                ]
            , ysCache)
        , xs))
    );
}
function $60035ec1a4f58e59$export$9b19c2e3f2aab20f(mapping, state, xs) {
    const patternInput = $1d849aa8ef8b0f61$export$9b19c2e3f2aab20f(mapping, state, $60035ec1a4f58e59$export$45b10814cc054894(xs));
    return [
        $60035ec1a4f58e59$export$b2cbc93d4da94977(patternInput[0]),
        patternInput[1]
    ];
}
function $60035ec1a4f58e59$export$6d7c6abab27be307(mapping, xs, state) {
    const patternInput = $1d849aa8ef8b0f61$export$6d7c6abab27be307(mapping, $60035ec1a4f58e59$export$45b10814cc054894(xs), state);
    return [
        $60035ec1a4f58e59$export$b2cbc93d4da94977(patternInput[0]),
        patternInput[1]
    ];
}
function $60035ec1a4f58e59$export$d944e5c60afb688e(chooser, xs) {
    const e = $60035ec1a4f58e59$export$c80b5fc7454ef206(xs);
    try {
        let res = void 0;
        while(res == null ? e["System.Collections.IEnumerator.MoveNext"]() : false)res = chooser(e["System.Collections.Generic.IEnumerator`1.get_Current"]());
        return res;
    } finally{
        e.Dispose();
    }
}
function $60035ec1a4f58e59$export$357523c63a2253b9(chooser, xs) {
    const matchValue = $60035ec1a4f58e59$export$d944e5c60afb688e(chooser, xs);
    if (matchValue == null) return $60035ec1a4f58e59$export$6362f022d562392();
    else return $cbf049927489a6e9$export$2ab9a8f9f1186f14(matchValue);
}
function $60035ec1a4f58e59$export$533b26079ad0b4b(folder, xs) {
    const e = $60035ec1a4f58e59$export$c80b5fc7454ef206(xs);
    try {
        const loop = (acc_mut)=>{
            loop: while(true){
                const acc = acc_mut;
                if (e["System.Collections.IEnumerator.MoveNext"]()) {
                    acc_mut = folder(acc, e["System.Collections.Generic.IEnumerator`1.get_Current"]());
                    continue loop;
                } else return acc;
                break;
            }
        };
        if (e["System.Collections.IEnumerator.MoveNext"]()) return loop(e["System.Collections.Generic.IEnumerator`1.get_Current"]());
        else throw new Error($60035ec1a4f58e59$export$bb8ebba5bfe3f17a);
    } finally{
        e.Dispose();
    }
}
function $60035ec1a4f58e59$export$90cf02207d4ef99b(folder, xs) {
    const arr = $60035ec1a4f58e59$export$45b10814cc054894(xs);
    if (arr.length > 0) return arr.reduceRight(folder);
    else throw new Error($60035ec1a4f58e59$export$bb8ebba5bfe3f17a);
}
function $60035ec1a4f58e59$export$606959e7ccb797f0(n, x) {
    return $60035ec1a4f58e59$export$2a47f398eeff8b01(n, (_arg1)=>x
    );
}
function $60035ec1a4f58e59$export$66c1ae025e96b4bc(xs) {
    return $60035ec1a4f58e59$export$1391212d75b2ee65(()=>$60035ec1a4f58e59$export$cb197a913f6bb809($1d849aa8ef8b0f61$export$66c1ae025e96b4bc($60035ec1a4f58e59$export$45b10814cc054894(xs)))
    );
}
function $60035ec1a4f58e59$export$c87d910e63d22ed6(folder, state, xs) {
    return $60035ec1a4f58e59$export$1391212d75b2ee65(()=>{
        let acc = state;
        return $60035ec1a4f58e59$export$ee1b3e54f0441b22([
            $60035ec1a4f58e59$export$439306a4dcaafbb9(state),
            $60035ec1a4f58e59$export$871de8747c9eaa88((x)=>{
                acc = folder(acc, x);
                return acc;
            }, xs)
        ]);
    });
}
function $60035ec1a4f58e59$export$7bd1078b283d99ad(folder, xs, state) {
    return $60035ec1a4f58e59$export$1391212d75b2ee65(()=>$60035ec1a4f58e59$export$cb197a913f6bb809($1d849aa8ef8b0f61$export$7bd1078b283d99ad(folder, $60035ec1a4f58e59$export$45b10814cc054894(xs), state))
    );
}
function $60035ec1a4f58e59$export$955fc4a6c4be454d(count, xs) {
    return $60035ec1a4f58e59$export$327d67905f90fa80(()=>{
        const e = $60035ec1a4f58e59$export$c80b5fc7454ef206(xs);
        try {
            for(let i = 1; i <= count; i++){
                if (!e["System.Collections.IEnumerator.MoveNext"]()) throw new Error($60035ec1a4f58e59$export$9f17aeddfa374276 + "\\nParameter name: " + "source");
            }
            return $60035ec1a4f58e59$export$8da5aab8659eb06(()=>{
            }, e);
        } catch (matchValue) {
            e.Dispose();
            throw matchValue;
        }
    });
}
function $60035ec1a4f58e59$export$175dedd748069215(predicate, xs) {
    return $60035ec1a4f58e59$export$1391212d75b2ee65(()=>{
        let skipped = true;
        return $60035ec1a4f58e59$export$3dea766d36a8935f((x)=>{
            if (skipped) skipped = predicate(x);
            return !skipped;
        }, xs);
    });
}
function $60035ec1a4f58e59$export$c01875f616615628(xs) {
    return $60035ec1a4f58e59$export$955fc4a6c4be454d(1, xs);
}
function $60035ec1a4f58e59$export$b7df5d561049483a(count, xs) {
    return $60035ec1a4f58e59$export$7395da449cea18d1(()=>$60035ec1a4f58e59$export$c80b5fc7454ef206(xs)
    , (i, e)=>{
        if (i < count) {
            if (e["System.Collections.IEnumerator.MoveNext"]()) return $cbf049927489a6e9$export$ad14ef4001db2bcd(e["System.Collections.Generic.IEnumerator`1.get_Current"]());
            else throw new Error($60035ec1a4f58e59$export$9f17aeddfa374276 + "\\nParameter name: " + "source");
        } else return void 0;
    }, (e_1)=>{
        e_1.Dispose();
    });
}
function $60035ec1a4f58e59$export$9384c7afe4015e42(predicate, xs) {
    return $60035ec1a4f58e59$export$80d376111cc09ad7(()=>$60035ec1a4f58e59$export$c80b5fc7454ef206(xs)
    , (e)=>(e["System.Collections.IEnumerator.MoveNext"]() ? predicate(e["System.Collections.Generic.IEnumerator`1.get_Current"]()) : false) ? $cbf049927489a6e9$export$ad14ef4001db2bcd(e["System.Collections.Generic.IEnumerator`1.get_Current"]()) : void 0
    , (e_1)=>{
        e_1.Dispose();
    });
}
function $60035ec1a4f58e59$export$6a506b36fdea397d(count, xs) {
    return $60035ec1a4f58e59$export$7395da449cea18d1(()=>$60035ec1a4f58e59$export$c80b5fc7454ef206(xs)
    , (i, e)=>(i < count ? e["System.Collections.IEnumerator.MoveNext"]() : false) ? $cbf049927489a6e9$export$ad14ef4001db2bcd(e["System.Collections.Generic.IEnumerator`1.get_Current"]()) : void 0
    , (e_1)=>{
        e_1.Dispose();
    });
}
function $60035ec1a4f58e59$export$8901015135f2fb22(xs, ys) {
    return $60035ec1a4f58e59$export$5be556bf484c4f10((x, y)=>[
            x,
            y
        ]
    , xs, ys);
}
function $60035ec1a4f58e59$export$a3c629e5d025ffc1(xs, ys, zs) {
    return $60035ec1a4f58e59$export$f7389512af34c855((x, y, z)=>[
            x,
            y,
            z
        ]
    , xs, ys, zs);
}
function $60035ec1a4f58e59$export$bb44f104e3c54dae(mapping, xs) {
    return $60035ec1a4f58e59$export$1391212d75b2ee65(()=>$60035ec1a4f58e59$export$ee1b3e54f0441b22($60035ec1a4f58e59$export$871de8747c9eaa88(mapping, xs))
    );
}
function $60035ec1a4f58e59$export$9c59b80dda569a6e(predicate, xs) {
    return $60035ec1a4f58e59$export$3dea766d36a8935f(predicate, xs);
}
function $60035ec1a4f58e59$export$8f9d79d42bff1aac(xs) {
    return $60035ec1a4f58e59$export$1391212d75b2ee65(()=>$60035ec1a4f58e59$export$cb197a913f6bb809($1d849aa8ef8b0f61$export$8f9d79d42bff1aac($60035ec1a4f58e59$export$45b10814cc054894(xs)))
    );
}
function $60035ec1a4f58e59$export$7120a88bf3d39e8(chunks, xs) {
    return $60035ec1a4f58e59$export$1391212d75b2ee65(()=>$60035ec1a4f58e59$export$cb197a913f6bb809($1d849aa8ef8b0f61$export$871de8747c9eaa88((arr)=>$60035ec1a4f58e59$export$cb197a913f6bb809(arr)
        , $1d849aa8ef8b0f61$export$7120a88bf3d39e8(chunks, $60035ec1a4f58e59$export$45b10814cc054894(xs))))
    );
}
function $60035ec1a4f58e59$export$5f2b86065ccf5a1(windowSize, xs) {
    return $60035ec1a4f58e59$export$1391212d75b2ee65(()=>$60035ec1a4f58e59$export$cb197a913f6bb809($1d849aa8ef8b0f61$export$871de8747c9eaa88((arr)=>$60035ec1a4f58e59$export$cb197a913f6bb809(arr)
        , $1d849aa8ef8b0f61$export$5f2b86065ccf5a1(windowSize, $60035ec1a4f58e59$export$45b10814cc054894(xs))))
    );
}
function $60035ec1a4f58e59$export$9cb09a71b7d66923(xss) {
    return $60035ec1a4f58e59$export$1391212d75b2ee65(()=>$60035ec1a4f58e59$export$cb197a913f6bb809($1d849aa8ef8b0f61$export$871de8747c9eaa88((arr)=>$60035ec1a4f58e59$export$cb197a913f6bb809(arr)
        , $1d849aa8ef8b0f61$export$9cb09a71b7d66923($1d849aa8ef8b0f61$export$871de8747c9eaa88((xs_1)=>$60035ec1a4f58e59$export$45b10814cc054894(xs_1)
        , $60035ec1a4f58e59$export$45b10814cc054894(xss)))))
    );
}
function $60035ec1a4f58e59$export$a9e7d1a6fdcfefde(comparer, xs) {
    return $60035ec1a4f58e59$export$1391212d75b2ee65(()=>{
        const arr = $60035ec1a4f58e59$export$45b10814cc054894(xs);
        arr.sort(comparer);
        return $60035ec1a4f58e59$export$cb197a913f6bb809(arr);
    });
}
function $60035ec1a4f58e59$export$97db5808d8f88186(xs, comparer) {
    return $60035ec1a4f58e59$export$a9e7d1a6fdcfefde((x, y)=>comparer.Compare(x, y)
    , xs);
}
function $60035ec1a4f58e59$export$b035e44d7bb4278f(projection, xs, comparer) {
    return $60035ec1a4f58e59$export$a9e7d1a6fdcfefde((x, y)=>comparer.Compare(projection(x), projection(y))
    , xs);
}
function $60035ec1a4f58e59$export$9a59fdf05ed66d15(xs, comparer) {
    return $60035ec1a4f58e59$export$a9e7d1a6fdcfefde((x, y)=>comparer.Compare(x, y) * -1
    , xs);
}
function $60035ec1a4f58e59$export$ca6dab212df382f6(projection, xs, comparer) {
    return $60035ec1a4f58e59$export$a9e7d1a6fdcfefde((x, y)=>comparer.Compare(projection(x), projection(y)) * -1
    , xs);
}
function $60035ec1a4f58e59$export$8a63f25cc62965f1(xs, adder) {
    return $60035ec1a4f58e59$export$93e2b83da34ff82a((acc, x)=>adder.Add(acc, x)
    , adder.GetZero(), xs);
}
function $60035ec1a4f58e59$export$9e8299ab977385a3(f, xs, adder) {
    return $60035ec1a4f58e59$export$93e2b83da34ff82a((acc, x)=>adder.Add(acc, f(x))
    , adder.GetZero(), xs);
}
function $60035ec1a4f58e59$export$ad1963a493908da4(projection, xs, comparer) {
    return $60035ec1a4f58e59$export$533b26079ad0b4b((x, y)=>comparer.Compare(projection(y), projection(x)) > 0 ? y : x
    , xs);
}
function $60035ec1a4f58e59$export$8960430cfd85939f(xs, comparer) {
    return $60035ec1a4f58e59$export$533b26079ad0b4b((x, y)=>comparer.Compare(y, x) > 0 ? y : x
    , xs);
}
function $60035ec1a4f58e59$export$8c826aa0fa59ac68(projection, xs, comparer) {
    return $60035ec1a4f58e59$export$533b26079ad0b4b((x, y)=>comparer.Compare(projection(y), projection(x)) > 0 ? x : y
    , xs);
}
function $60035ec1a4f58e59$export$96ec731ed4dcb222(xs, comparer) {
    return $60035ec1a4f58e59$export$533b26079ad0b4b((x, y)=>comparer.Compare(y, x) > 0 ? x : y
    , xs);
}
function $60035ec1a4f58e59$export$cc6710ee5f037d57(xs, averager) {
    let count = 0;
    const total = $60035ec1a4f58e59$export$93e2b83da34ff82a((acc, x)=>{
        count = count + 1 | 0;
        return averager.Add(acc, x);
    }, averager.GetZero(), xs);
    if (count === 0) throw new Error("The input sequence was empty\\nParameter name: xs");
    else return averager.DivideByInt(total, count);
}
function $60035ec1a4f58e59$export$9077387bc3582185(f, xs, averager) {
    let count = 0;
    const total = $60035ec1a4f58e59$export$93e2b83da34ff82a((acc, x)=>{
        count = count + 1 | 0;
        return averager.Add(acc, f(x));
    }, averager.GetZero(), xs);
    if (count === 0) throw new Error("The input sequence was empty\\nParameter name: xs");
    else return averager.DivideByInt(total, count);
}
function $60035ec1a4f58e59$export$95e62ad65da8b7d2(f, xs) {
    return $60035ec1a4f58e59$export$1391212d75b2ee65(()=>$60035ec1a4f58e59$export$cb197a913f6bb809($1d849aa8ef8b0f61$export$95e62ad65da8b7d2(f, $60035ec1a4f58e59$export$45b10814cc054894(xs)))
    );
}
function $60035ec1a4f58e59$export$6302d00ba2848bf(chunkSize, xs) {
    return $60035ec1a4f58e59$export$1391212d75b2ee65(()=>$60035ec1a4f58e59$export$cb197a913f6bb809($1d849aa8ef8b0f61$export$871de8747c9eaa88((arr)=>$60035ec1a4f58e59$export$cb197a913f6bb809(arr)
        , $1d849aa8ef8b0f61$export$6302d00ba2848bf(chunkSize, $60035ec1a4f58e59$export$45b10814cc054894(xs))))
    );
}





class $3583e200a8ea3134$export$bd5b6bfc5fa2ee61 extends $52d096336d1d74e9$export$6cbb4f8fa0c4c986 {
    constructor(tag, ...fields){
        super();
        this.tag = tag | 0;
        this.fields = fields;
    }
    cases() {
        return [
            "Functor"
        ];
    }
}
function $3583e200a8ea3134$export$682f9183770380ae() {
    return $64327df6a4d665f3$export$1ae0dd948e267c6b("Prelude.Functor", [], $3583e200a8ea3134$export$bd5b6bfc5fa2ee61, ()=>[
            []
        ]
    );
}
class $3583e200a8ea3134$export$fd0fe42029639505 extends $52d096336d1d74e9$export$6cbb4f8fa0c4c986 {
    constructor(tag1, ...fields1){
        super();
        this.tag = tag1 | 0;
        this.fields = fields1;
    }
    cases() {
        return [
            "Bifunctor"
        ];
    }
}
function $3583e200a8ea3134$export$d698539a2a89b125() {
    return $64327df6a4d665f3$export$1ae0dd948e267c6b("Prelude.Bifunctor", [], $3583e200a8ea3134$export$fd0fe42029639505, ()=>[
            []
        ]
    );
}
class $3583e200a8ea3134$export$a79837a2b764b73d extends $52d096336d1d74e9$export$6cbb4f8fa0c4c986 {
    constructor(tag2, ...fields2){
        super();
        this.tag = tag2 | 0;
        this.fields = fields2;
    }
    cases() {
        return [
            "HasSize"
        ];
    }
}
function $3583e200a8ea3134$export$e1ce192203823c76() {
    return $64327df6a4d665f3$export$1ae0dd948e267c6b("Prelude.HasSize", [], $3583e200a8ea3134$export$a79837a2b764b73d, ()=>[
            []
        ]
    );
}
class $3583e200a8ea3134$export$d5a6d2063011a4a0 extends $52d096336d1d74e9$export$6cbb4f8fa0c4c986 {
    constructor(tag3, ...fields3){
        super();
        this.tag = tag3 | 0;
        this.fields = fields3;
    }
    cases() {
        return [
            "Nonempty"
        ];
    }
    GetEnumerator() {
        const self = this;
        return $4261fbb19e0b4aac$export$a41738691dcd8bea($60035ec1a4f58e59$export$97ef4da51e4fceb3($b9be9450bf7f24ec$export$8327ebbef2a0ba76(self.fields[0], self.fields[1])));
    }
    [Symbol.iterator]() {
        return $4261fbb19e0b4aac$export$21e0669b7bd01bb4(this.GetEnumerator());
    }
    ["System.Collections.IEnumerable.GetEnumerator"]() {
        const r = this;
        return $4261fbb19e0b4aac$export$a41738691dcd8bea(r);
    }
}
function $3583e200a8ea3134$export$4984d4827624d577(gen0) {
    return $64327df6a4d665f3$export$1ae0dd948e267c6b("Prelude.Nonempty`1", [
        gen0
    ], $3583e200a8ea3134$export$d5a6d2063011a4a0, ()=>[
            [
                [
                    "Item1",
                    gen0
                ],
                [
                    "Item2",
                    $64327df6a4d665f3$export$5fe717259b8d6105(gen0)
                ]
            ]
        ]
    );
}
function $3583e200a8ea3134$export$587352910a580561(_arg1, _arg2) {
    return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, _arg1.fields[0], $b9be9450bf7f24ec$export$10d8903dec122b9d(_arg1.fields[1], $b9be9450bf7f24ec$export$8327ebbef2a0ba76(_arg2.fields[0], _arg2.fields[1])));
}
function $3583e200a8ea3134$export$b7ddf5be20359725(_arg5, _arg6) {
    return $b9be9450bf7f24ec$export$f24224f1c91d8156(_arg6.fields[1]) + 1;
}
class $3583e200a8ea3134$export$4ac727d0279625de extends $52d096336d1d74e9$export$6cbb4f8fa0c4c986 {
    constructor(tag4, ...fields4){
        super();
        this.tag = tag4 | 0;
        this.fields = fields4;
    }
    cases() {
        return [
            "This",
            "That",
            "These"
        ];
    }
}
function $3583e200a8ea3134$export$2eb94597ba19184f(gen0, gen1) {
    return $64327df6a4d665f3$export$1ae0dd948e267c6b("Prelude.These`2", [
        gen0,
        gen1
    ], $3583e200a8ea3134$export$4ac727d0279625de, ()=>[
            [
                [
                    "Item",
                    gen0
                ]
            ],
            [
                [
                    "Item",
                    gen1
                ]
            ],
            [
                [
                    "Item1",
                    gen0
                ],
                [
                    "Item2",
                    gen1
                ]
            ]
        ]
    );
}
function $3583e200a8ea3134$export$d89f551de2738ab3(maybeA, b) {
    if (maybeA == null) return new $3583e200a8ea3134$export$4ac727d0279625de(1, b);
    else return new $3583e200a8ea3134$export$4ac727d0279625de(2, $cbf049927489a6e9$export$2ab9a8f9f1186f14(maybeA), b);
}
function $3583e200a8ea3134$export$41663dd4c93319e0(a, maybeB) {
    if (maybeB == null) return new $3583e200a8ea3134$export$4ac727d0279625de(0, a);
    else return new $3583e200a8ea3134$export$4ac727d0279625de(2, a, $cbf049927489a6e9$export$2ab9a8f9f1186f14(maybeB));
}
function $3583e200a8ea3134$export$481bbdc992532e79(f, these) {
    switch(these.tag){
        case 1:
            return new $3583e200a8ea3134$export$4ac727d0279625de(1, these.fields[0]);
        case 2:
            return new $3583e200a8ea3134$export$4ac727d0279625de(2, f(these.fields[0]), these.fields[1]);
        default:
            return new $3583e200a8ea3134$export$4ac727d0279625de(0, f(these.fields[0]));
    }
}
class $3583e200a8ea3134$export$9f4132aa238b51eb {
    constructor(){
    }
}
function $3583e200a8ea3134$export$72cb1caea509dc1b() {
    return $64327df6a4d665f3$export$8547d5acd31924e("Prelude.OptionBuilder", void 0, $3583e200a8ea3134$export$9f4132aa238b51eb);
}
function $3583e200a8ea3134$export$845c791fda464ad9() {
    return new $3583e200a8ea3134$export$9f4132aa238b51eb();
}
function $3583e200a8ea3134$export$e5403e43878ec1b6(_, x, f) {
    if (x != null) return f($cbf049927489a6e9$export$2ab9a8f9f1186f14(x));
    else return void 0;
}
function $3583e200a8ea3134$export$ba4da117d7bdef59(_, x) {
    return $cbf049927489a6e9$export$ad14ef4001db2bcd(x);
}
function $3583e200a8ea3134$export$b234b9af24438e(_, x) {
    return x;
}
const $3583e200a8ea3134$export$a75d1723e6bda2ec = $3583e200a8ea3134$export$845c791fda464ad9();
function $3583e200a8ea3134$export$477b54a49458a048(_arg1) {
    if (!$b9be9450bf7f24ec$export$dd1bc94b04021eeb(_arg1)) return $b9be9450bf7f24ec$export$c01875f616615628(_arg1);
    else return void 0;
}
function $3583e200a8ea3134$export$159f0336ef148a04(list) {
    return $cbf049927489a6e9$export$871de8747c9eaa88((list_2)=>$b9be9450bf7f24ec$export$66c1ae025e96b4bc(list_2)
    , $3583e200a8ea3134$export$477b54a49458a048($b9be9450bf7f24ec$export$66c1ae025e96b4bc(list)));
}
function $3583e200a8ea3134$export$24cd92fe340086fd(n, list) {
    let n_1;
    if (n === 0) return list;
    else return $cbf049927489a6e9$export$37721a79838ca038($cbf049927489a6e9$export$871de8747c9eaa88((n_1 = n - 1 | 0, (list_1)=>$3583e200a8ea3134$export$24cd92fe340086fd(n_1, list_1)
    ), $3583e200a8ea3134$export$477b54a49458a048(list)), $b9be9450bf7f24ec$export$6e22c362a0406a2c());
}
function $3583e200a8ea3134$export$408aaad965f58251(predicate) {
    const loop = (output_mut, remaining_mut)=>{
        loop: while(true){
            const output = output_mut, remaining = remaining_mut;
            if (!$b9be9450bf7f24ec$export$dd1bc94b04021eeb(remaining)) {
                const head = $b9be9450bf7f24ec$export$5fd5031fecdacec3(remaining);
                if (predicate(head)) {
                    output_mut = $b9be9450bf7f24ec$export$8327ebbef2a0ba76(head, output);
                    remaining_mut = $b9be9450bf7f24ec$export$c01875f616615628(remaining);
                    continue loop;
                } else return [
                    $b9be9450bf7f24ec$export$66c1ae025e96b4bc(output),
                    remaining
                ];
            } else return [
                $b9be9450bf7f24ec$export$66c1ae025e96b4bc(output),
                $b9be9450bf7f24ec$export$6e22c362a0406a2c()
            ];
            break;
        }
    };
    return $4261fbb19e0b4aac$export$955fe82a9145db62(1, loop, [
        $b9be9450bf7f24ec$export$6e22c362a0406a2c()
    ]);
}
function $3583e200a8ea3134$export$f57f1824c5412723(fn) {
    const loop = (acc_mut, _arg1_mut)=>{
        loop: while(true){
            const acc = acc_mut, _arg1 = _arg1_mut;
            if ($b9be9450bf7f24ec$export$dd1bc94b04021eeb(_arg1)) return [
                $b9be9450bf7f24ec$export$66c1ae025e96b4bc(acc),
                $b9be9450bf7f24ec$export$6e22c362a0406a2c()
            ];
            else {
                const rest = $b9be9450bf7f24ec$export$c01875f616615628(_arg1);
                const h = $b9be9450bf7f24ec$export$5fd5031fecdacec3(_arg1);
                const matchValue = fn(h);
                if (matchValue == null) return [
                    $b9be9450bf7f24ec$export$66c1ae025e96b4bc(acc),
                    $b9be9450bf7f24ec$export$8327ebbef2a0ba76(h, rest)
                ];
                else {
                    acc_mut = $b9be9450bf7f24ec$export$8327ebbef2a0ba76($cbf049927489a6e9$export$2ab9a8f9f1186f14(matchValue), acc);
                    _arg1_mut = rest;
                    continue loop;
                }
            }
            break;
        }
    };
    return $4261fbb19e0b4aac$export$955fe82a9145db62(1, loop, [
        $b9be9450bf7f24ec$export$6e22c362a0406a2c()
    ]);
}
function $3583e200a8ea3134$export$ab7587a9c063da06(n, list) {
    return [
        $b9be9450bf7f24ec$export$6a506b36fdea397d(n, list),
        $3583e200a8ea3134$export$24cd92fe340086fd(n, list)
    ];
}
function $3583e200a8ea3134$export$5835bdd4dd0bd418(def, _arg1) {
    if ($b9be9450bf7f24ec$export$dd1bc94b04021eeb(_arg1)) return def;
    else return $4261fbb19e0b4aac$export$96ec731ed4dcb222((x_1, y_1)=>$4261fbb19e0b4aac$export$398604a469f7de9a(x_1, y_1)
    , def, $b9be9450bf7f24ec$export$96ec731ed4dcb222(_arg1, {
        Compare: (x, y)=>$4261fbb19e0b4aac$export$398604a469f7de9a(x, y)
    }));
}
function $3583e200a8ea3134$export$236f5df1c02f3d73(n, str) {
    if (n > str.length) return "";
    else return $575619fada8b5e88$export$662d3818631fba36(str, $4261fbb19e0b4aac$export$8960430cfd85939f((x, y)=>$4261fbb19e0b4aac$export$591cc4a8025fba16(x, y)
    , n, 0));
}
function $3583e200a8ea3134$export$66b1838215db0958(n, str) {
    if (n > str.length) return str;
    else return $575619fada8b5e88$export$662d3818631fba36(str, 0, $4261fbb19e0b4aac$export$8960430cfd85939f((x, y)=>$4261fbb19e0b4aac$export$591cc4a8025fba16(x, y)
    , n, 0));
}
class $3583e200a8ea3134$export$d96a8827a60d6b69 extends $52d096336d1d74e9$export$6cbb4f8fa0c4c986 {
    constructor(tag5, ...fields5){
        super();
        this.tag = tag5 | 0;
        this.fields = fields5;
    }
    cases() {
        return [
            "Comment",
            "Wrap",
            "NoWrap"
        ];
    }
}
function $3583e200a8ea3134$export$3b141bb8ed484235() {
    return $64327df6a4d665f3$export$1ae0dd948e267c6b("Prelude.Block", [], $3583e200a8ea3134$export$d96a8827a60d6b69, ()=>[
            [
                [
                    "Item",
                    $3583e200a8ea3134$export$4984d4827624d577($3583e200a8ea3134$export$3b141bb8ed484235())
                ]
            ],
            [
                [
                    "Item",
                    $64327df6a4d665f3$export$2163aa004254c8ff($64327df6a4d665f3$export$2163aa004254c8ff($64327df6a4d665f3$export$36bbd56a39d3f734, $64327df6a4d665f3$export$36bbd56a39d3f734), $3583e200a8ea3134$export$4984d4827624d577($64327df6a4d665f3$export$36bbd56a39d3f734))
                ]
            ],
            [
                [
                    "Item",
                    $3583e200a8ea3134$export$4984d4827624d577($64327df6a4d665f3$export$36bbd56a39d3f734)
                ]
            ]
        ]
    );
}
function $3583e200a8ea3134$export$24915dfbfb141eb4(_arg1, b) {
    switch(b.tag){
        case 2:
            return $3583e200a8ea3134$export$b7ddf5be20359725(new $3583e200a8ea3134$export$a79837a2b764b73d(0), b.fields[0]) | 0;
        case 1:
            return $3583e200a8ea3134$export$b7ddf5be20359725(new $3583e200a8ea3134$export$a79837a2b764b73d(0), b.fields[0][1]) | 0;
        default:
            return $60035ec1a4f58e59$export$9e8299ab977385a3((b_1)=>$3583e200a8ea3134$export$24915dfbfb141eb4(new $3583e200a8ea3134$export$a79837a2b764b73d(0), b_1)
            , b.fields[0], {
                GetZero: ()=>0
                ,
                Add: (x, y)=>x + y
            }) | 0;
    }
}






class $044d4a9a60b1f629$export$ce4fe1c9e6520c1a extends $52d096336d1d74e9$export$6cbb4f8fa0c4c986 {
    constructor(tag, ...fields){
        super();
        this.tag = tag | 0;
        this.fields = fields;
    }
    cases() {
        return [
            "Language"
        ];
    }
}
function $044d4a9a60b1f629$export$fd0de1039bd38862() {
    return $64327df6a4d665f3$export$1ae0dd948e267c6b("Parsing.Language.Language", [], $044d4a9a60b1f629$export$ce4fe1c9e6520c1a, ()=>[
            [
                [
                    "Item1",
                    $64327df6a4d665f3$export$36bbd56a39d3f734
                ],
                [
                    "Item2",
                    $64327df6a4d665f3$export$9242f430c61b672d($64327df6a4d665f3$export$36bbd56a39d3f734)
                ],
                [
                    "Item3",
                    $64327df6a4d665f3$export$9242f430c61b672d($64327df6a4d665f3$export$36bbd56a39d3f734)
                ],
                [
                    "Item4",
                    $64327df6a4d665f3$export$14857d36df600d23($2c0e5be185a9291c$export$b088197328349f7e(), $64327df6a4d665f3$export$14857d36df600d23($3583e200a8ea3134$export$4984d4827624d577($64327df6a4d665f3$export$36bbd56a39d3f734), $3583e200a8ea3134$export$4984d4827624d577($3583e200a8ea3134$export$3b141bb8ed484235())))
                ]
            ]
        ]
    );
}
function $044d4a9a60b1f629$export$e705f8b690e926d(name, aliases, exts, parser) {
    const split = (s)=>$575619fada8b5e88$export$65980d18b75784e2(s.toLocaleLowerCase(), [
            "|"
        ], null, 1)
    ;
    return new $044d4a9a60b1f629$export$ce4fe1c9e6520c1a(0, name, $1d849aa8ef8b0f61$export$10d8903dec122b9d([
        name.toLocaleLowerCase()
    ], split(aliases)), split(exts), parser);
}
function $044d4a9a60b1f629$export$a68c0c8037b37d66(_arg1) {
    return _arg1.fields[0];
}
function $044d4a9a60b1f629$export$9c9dbb6e7b91b5af(_arg1) {
    return $4261fbb19e0b4aac$export$c3095a23b368d1f2(2, _arg1.fields[3]);
}
function $044d4a9a60b1f629$export$47bd1dafac8b8c58(fileLang, _arg1) {
    return $60035ec1a4f58e59$export$2344b14b097df817(fileLang.toLocaleLowerCase(), _arg1.fields[1], {
        Equals: (x, y)=>x === y
        ,
        GetHashCode: (x)=>$4261fbb19e0b4aac$export$b9b095ec8c02760b(x)
    });
}
function $044d4a9a60b1f629$export$37f42de08e6cfa5e(path, _arg1) {
    const fileName = $1d849aa8ef8b0f61$export$4c7897fafd92b108($575619fada8b5e88$export$65980d18b75784e2(path.toLocaleLowerCase(), [
        "\\",
        "/"
    ]));
    return $60035ec1a4f58e59$export$f7e9f41ea797a17((_arg2)=>{
        if (_arg2.indexOf(".") === 0) return $575619fada8b5e88$export$10fdab3683b55b22(fileName, _arg2);
        else return fileName === _arg2;
    }, _arg1.fields[2]);
}







function $1cbdac383b1632f3$export$effcdbd76139450(_arg1) {
    return $b9be9450bf7f24ec$export$8327ebbef2a0ba76(_arg1.fields[0], _arg1.fields[1]);
}
function $1cbdac383b1632f3$export$88e0dae599377b39(_arg1) {
    if (!$b9be9450bf7f24ec$export$dd1bc94b04021eeb(_arg1)) return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $b9be9450bf7f24ec$export$5fd5031fecdacec3(_arg1), $b9be9450bf7f24ec$export$c01875f616615628(_arg1));
    else return void 0;
}
function $1cbdac383b1632f3$export$da968afc9c9924d3(xs) {
    return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $60035ec1a4f58e59$export$5fd5031fecdacec3(xs), $b9be9450bf7f24ec$export$c80b5fc7454ef206($60035ec1a4f58e59$export$c01875f616615628(xs)));
}
function $1cbdac383b1632f3$export$8327ebbef2a0ba76(h, neList) {
    return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, h, $1cbdac383b1632f3$export$effcdbd76139450(neList));
}
function $1cbdac383b1632f3$export$c40cf5aab899f397(last_1, _arg1) {
    return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, _arg1.fields[0], $b9be9450bf7f24ec$export$10d8903dec122b9d(_arg1.fields[1], $b9be9450bf7f24ec$export$439306a4dcaafbb9(last_1)));
}
function $1cbdac383b1632f3$export$10d8903dec122b9d(_arg1, b) {
    return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, _arg1.fields[0], $b9be9450bf7f24ec$export$10d8903dec122b9d(_arg1.fields[1], $1cbdac383b1632f3$export$effcdbd76139450(b)));
}
function $1cbdac383b1632f3$export$29480e6fb0d9904(listA, neListB) {
    const matchValue = $1cbdac383b1632f3$export$88e0dae599377b39(listA);
    if (matchValue == null) return neListB;
    else return $1cbdac383b1632f3$export$10d8903dec122b9d(matchValue, neListB);
}
function $1cbdac383b1632f3$export$5fd5031fecdacec3(_arg1) {
    return _arg1.fields[0];
}
function $1cbdac383b1632f3$export$c01875f616615628(_arg1) {
    return _arg1.fields[1];
}
function $1cbdac383b1632f3$export$4c7897fafd92b108(_arg1) {
    return $cbf049927489a6e9$export$37721a79838ca038($b9be9450bf7f24ec$export$e5907b21d797cce6(_arg1.fields[1]), _arg1.fields[0]);
}
function $1cbdac383b1632f3$export$d65cb303b863e3bf(predicate) {
    return (arg)=>$b9be9450bf7f24ec$export$d65cb303b863e3bf(predicate, $1cbdac383b1632f3$export$effcdbd76139450(arg))
    ;
}
function $1cbdac383b1632f3$export$edb1c8e715f3944e(list) {
    return $1cbdac383b1632f3$export$da968afc9c9924d3($b9be9450bf7f24ec$export$66c1ae025e96b4bc($1cbdac383b1632f3$export$effcdbd76139450(list)));
}
function $1cbdac383b1632f3$export$f727098520cf33f5(fn, _arg1) {
    return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, fn(_arg1.fields[0]), _arg1.fields[1]);
}
function $1cbdac383b1632f3$export$87b4ba1f7891f330(fn, _arg1) {
    return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, _arg1.fields[0], $b9be9450bf7f24ec$export$871de8747c9eaa88(fn, _arg1.fields[1]));
}
function $1cbdac383b1632f3$export$8f2e0aff6bb7bc72(fn) {
    return (arg_1)=>$1cbdac383b1632f3$export$edb1c8e715f3944e($1cbdac383b1632f3$export$87b4ba1f7891f330(fn, $1cbdac383b1632f3$export$edb1c8e715f3944e(arg_1)))
    ;
}
function $1cbdac383b1632f3$export$fc3358c9db04462(fn) {
    return (arg_1)=>$1cbdac383b1632f3$export$edb1c8e715f3944e($1cbdac383b1632f3$export$f727098520cf33f5(fn, $1cbdac383b1632f3$export$edb1c8e715f3944e(arg_1)))
    ;
}
function $1cbdac383b1632f3$export$9b19c2e3f2aab20f(fn, s, _arg1) {
    const patternInput = fn(s, _arg1.fields[0]);
    const tupledArg = $b9be9450bf7f24ec$export$9b19c2e3f2aab20f(fn, patternInput[1], _arg1.fields[1]);
    return [
        new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, patternInput[0], tupledArg[0]),
        tupledArg[1]
    ];
}
function $1cbdac383b1632f3$export$605b1175d78d31fa(h) {
    return (arg10$0040)=>$1cbdac383b1632f3$export$f727098520cf33f5((_arg1)=>h
        , arg10$0040)
    ;
}
function $1cbdac383b1632f3$export$c28c8388be0ab31a(fn, neList) {
    const loop = (output_mut, _arg1_mut)=>{
        loop: while(true){
            const output = output_mut, _arg1 = _arg1_mut;
            if (!$b9be9450bf7f24ec$export$dd1bc94b04021eeb(_arg1)) {
                output_mut = $1cbdac383b1632f3$export$10d8903dec122b9d(fn($b9be9450bf7f24ec$export$5fd5031fecdacec3(_arg1)), output);
                _arg1_mut = $b9be9450bf7f24ec$export$c01875f616615628(_arg1);
                continue loop;
            } else return output;
            break;
        }
    };
    const _arg1_1 = $1cbdac383b1632f3$export$edb1c8e715f3944e(neList);
    return loop(fn(_arg1_1.fields[0]), _arg1_1.fields[1]);
}
function $1cbdac383b1632f3$export$b0d75975ac0be0e1(n, _arg1) {
    const loop = (count_mut, leftAcc_mut, maybeRightAcc_mut)=>{
        loop: while(true){
            const count = count_mut, leftAcc = leftAcc_mut, maybeRightAcc = maybeRightAcc_mut;
            if (maybeRightAcc != null) {
                const xs = maybeRightAcc.fields[1];
                if (count < 1) return [
                    leftAcc,
                    maybeRightAcc
                ];
                else {
                    count_mut = count - 1;
                    leftAcc_mut = $1cbdac383b1632f3$export$8327ebbef2a0ba76(maybeRightAcc.fields[0], leftAcc);
                    maybeRightAcc_mut = $1cbdac383b1632f3$export$88e0dae599377b39(xs);
                    continue loop;
                }
            } else return [
                leftAcc,
                void 0
            ];
            break;
        }
    };
    const tupledArg = loop(n - 1, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, _arg1.fields[0], $b9be9450bf7f24ec$export$6e22c362a0406a2c()), $1cbdac383b1632f3$export$88e0dae599377b39(_arg1.fields[1]));
    return [
        $1cbdac383b1632f3$export$edb1c8e715f3944e(tupledArg[0]),
        tupledArg[1]
    ];
}
function $1cbdac383b1632f3$export$afc1bfabebaf28a2(predicate) {
    const loop = (output_mut, maybeRemaining_mut)=>{
        let t;
        loop: while(true){
            const output = output_mut, maybeRemaining = maybeRemaining_mut;
            let pattern_matching_result, h_1, t_1;
            if (maybeRemaining != null) {
                if (t = maybeRemaining.fields[1], predicate(maybeRemaining.fields[0])) {
                    pattern_matching_result = 0;
                    h_1 = maybeRemaining.fields[0];
                    t_1 = maybeRemaining.fields[1];
                } else pattern_matching_result = 1;
            } else pattern_matching_result = 1;
            switch(pattern_matching_result){
                case 0:
                    output_mut = $b9be9450bf7f24ec$export$8327ebbef2a0ba76(h_1, output);
                    maybeRemaining_mut = $1cbdac383b1632f3$export$88e0dae599377b39(t_1);
                    continue loop;
                case 1:
                    return $cbf049927489a6e9$export$871de8747c9eaa88((o)=>[
                            o,
                            maybeRemaining
                        ]
                    , $1cbdac383b1632f3$export$88e0dae599377b39($b9be9450bf7f24ec$export$66c1ae025e96b4bc(output)));
            }
            break;
        }
    };
    return (arg)=>loop($b9be9450bf7f24ec$export$6e22c362a0406a2c(), arg)
    ;
}
function $1cbdac383b1632f3$export$ec880bbf53567368(fn) {
    const loop = (output_mut, maybeRemaining_mut)=>{
        loop: while(true){
            const output = output_mut, maybeRemaining = maybeRemaining_mut;
            if (maybeRemaining != null) {
                const t = maybeRemaining.fields[1];
                const matchValue = fn(maybeRemaining.fields[0]);
                if (matchValue == null) return $cbf049927489a6e9$export$871de8747c9eaa88((o)=>[
                        o,
                        maybeRemaining
                    ]
                , $1cbdac383b1632f3$export$88e0dae599377b39($b9be9450bf7f24ec$export$66c1ae025e96b4bc(output)));
                else {
                    output_mut = $b9be9450bf7f24ec$export$8327ebbef2a0ba76($cbf049927489a6e9$export$2ab9a8f9f1186f14(matchValue), output);
                    maybeRemaining_mut = $1cbdac383b1632f3$export$88e0dae599377b39(t);
                    continue loop;
                }
            } else return $cbf049927489a6e9$export$871de8747c9eaa88((o_1)=>[
                    o_1,
                    maybeRemaining
                ]
            , $1cbdac383b1632f3$export$88e0dae599377b39($b9be9450bf7f24ec$export$66c1ae025e96b4bc(output)));
            break;
        }
    };
    return (arg)=>loop($b9be9450bf7f24ec$export$6e22c362a0406a2c(), arg)
    ;
}
function $1cbdac383b1632f3$export$d6aec2285be45753(predicate) {
    const loop = (output_mut, _arg1_mut)=>{
        let nextList;
        loop: while(true){
            const output = output_mut, _arg1 = _arg1_mut;
            const h = _arg1.fields[0];
            const matchValue = $1cbdac383b1632f3$export$88e0dae599377b39(_arg1.fields[1]);
            let pattern_matching_result, nextList_1;
            if (matchValue != null) {
                if (nextList = matchValue, !predicate(h)) {
                    pattern_matching_result = 0;
                    nextList_1 = matchValue;
                } else pattern_matching_result = 1;
            } else pattern_matching_result = 1;
            switch(pattern_matching_result){
                case 0:
                    output_mut = $b9be9450bf7f24ec$export$8327ebbef2a0ba76(h, output);
                    _arg1_mut = nextList_1;
                    continue loop;
                case 1:
                    return [
                        new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, h, output),
                        matchValue
                    ];
            }
            break;
        }
    };
    return (arg)=>{
        const tupledArg = loop($b9be9450bf7f24ec$export$6e22c362a0406a2c(), arg);
        return [
            $1cbdac383b1632f3$export$edb1c8e715f3944e(tupledArg[0]),
            tupledArg[1]
        ];
    };
}
function $1cbdac383b1632f3$export$c48e357c1a89b78d(fn) {
    const loop = (output_mut, input_mut)=>{
        loop: while(true){
            const output = output_mut, input = input_mut;
            const matchValue = fn(input);
            if (matchValue[1] == null) return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, matchValue[0], output);
            else {
                output_mut = $b9be9450bf7f24ec$export$8327ebbef2a0ba76(matchValue[0], output);
                input_mut = $cbf049927489a6e9$export$2ab9a8f9f1186f14(matchValue[1]);
                continue loop;
            }
            break;
        }
    };
    return (arg)=>$1cbdac383b1632f3$export$edb1c8e715f3944e(loop($b9be9450bf7f24ec$export$6e22c362a0406a2c(), arg))
    ;
}










function $6f9339dcb7ad0d09$export$7ee701e290d9865(l) {
    return $575619fada8b5e88$export$c6e2787f63ca055d(l);
}
function $6f9339dcb7ad0d09$export$2344b14b097df817(regex, line) {
    return $9daa05e285c504d2$export$b74c33566721f70f(regex, line);
}
function $6f9339dcb7ad0d09$export$68326237475e9a7d(marker, line) {
    return $9daa05e285c504d2$export$b74c33566721f70f($9daa05e285c504d2$export$185802fd694ee1f5("^\\s*" + marker), line);
}
function $6f9339dcb7ad0d09$export$d2d84020f5326cd0(regex, line) {
    const m = $9daa05e285c504d2$export$4659b591c19bdf3d(regex, line);
    if (m != null) return $3583e200a8ea3134$export$66b1838215db0958(m.index + m[0].length, line);
    else return void 0;
}
const $6f9339dcb7ad0d09$var$leadingWhitespaceRegex = /^\s*/g;
function $6f9339dcb7ad0d09$export$c3ab302d598ba56c(line) {
    return $9daa05e285c504d2$export$4659b591c19bdf3d($6f9339dcb7ad0d09$var$leadingWhitespaceRegex, line)[0];
}
function $6f9339dcb7ad0d09$export$949cdd5cc1255afe(line) {
    if ($6f9339dcb7ad0d09$export$2344b14b097df817(/[A-Za-z0-9À-￿]/g, line)) return !$6f9339dcb7ad0d09$export$2344b14b097df817(/^=(begin|end)\s*$/g, line);
    else return false;
}
function $6f9339dcb7ad0d09$export$65980d18b75784e2(regex, line) {
    const prefix = $cbf049927489a6e9$export$37721a79838ca038($6f9339dcb7ad0d09$export$d2d84020f5326cd0(regex, line), "");
    return [
        prefix,
        $3583e200a8ea3134$export$236f5df1c02f3d73(prefix.length, line)
    ];
}
function $6f9339dcb7ad0d09$export$5efd720ef35c8e98(tabSize, str) {
    const matchValue = $b9be9450bf7f24ec$export$66c1ae025e96b4bc($b9be9450bf7f24ec$export$cb197a913f6bb809(str.split("\t")));
    if (!$b9be9450bf7f24ec$export$dd1bc94b04021eeb(matchValue)) return $575619fada8b5e88$export$f7e2c8231c57a8bd("", $b9be9450bf7f24ec$export$66c1ae025e96b4bc($b9be9450bf7f24ec$export$8327ebbef2a0ba76($b9be9450bf7f24ec$export$5fd5031fecdacec3(matchValue), $b9be9450bf7f24ec$export$871de8747c9eaa88((s)=>$575619fada8b5e88$export$7e24a29324041c48(s, (~~(s.length / tabSize) + 1) * tabSize)
    , $b9be9450bf7f24ec$export$c01875f616615628(matchValue)))));
    else return str;
}
function $6f9339dcb7ad0d09$export$de9247834912d11c(tabSize, column, charCode) {
    let x_4, x_6, x_8;
    if (charCode === 0) return 1;
    else if (charCode === 9) return tabSize - column % tabSize | 0;
    else if (charCode < 32) return 0;
    else if (charCode < 11904) return 1;
    else if (x_4 = charCode, x_4 >= 11904 ? x_4 <= 55215 : false) return 2;
    else if (x_6 = charCode, x_6 >= 63744 ? x_6 <= 64255 : false) return 2;
    else if (x_8 = charCode, x_8 >= 65281 ? x_8 <= 65374 : false) return 2;
    else return 1;
}
function $6f9339dcb7ad0d09$export$6736e22116c64a4c(offset, tabWidth, str) {
    const tabWidth_1 = $4261fbb19e0b4aac$export$8960430cfd85939f((x, y)=>$4261fbb19e0b4aac$export$591cc4a8025fba16(x, y)
    , tabWidth, 1) | 0;
    const loop = (acc_mut, i_mut)=>{
        loop: while(true){
            const acc = acc_mut, i = i_mut;
            if (i >= str.length) return acc - offset | 0;
            else {
                acc_mut = acc + $6f9339dcb7ad0d09$export$de9247834912d11c(tabWidth_1, acc, str[i].charCodeAt(0));
                i_mut = i + 1;
                continue loop;
            }
            break;
        }
    };
    return loop(offset, 0) | 0;
}
const $6f9339dcb7ad0d09$export$13c2f47aa8a3882d = (tabWidth)=>(str)=>$6f9339dcb7ad0d09$export$6736e22116c64a4c(0, tabWidth, str)
;
class $6f9339dcb7ad0d09$export$17d680238e50603e {
    constructor(prefix1, content1){
        this["prefix@95"] = prefix1;
        this["content@95"] = content1;
    }
    toString() {
        const this$ = this;
        return $6f9339dcb7ad0d09$export$42f65d3844869e20(this$) + $6f9339dcb7ad0d09$export$f587a4e4415f4276(this$);
    }
}
function $6f9339dcb7ad0d09$export$ce355770cc1c8d90() {
    return $64327df6a4d665f3$export$8547d5acd31924e("Line.Line", void 0, $6f9339dcb7ad0d09$export$17d680238e50603e);
}
function $6f9339dcb7ad0d09$export$45b30bb84adefa7e(prefix, content) {
    return new $6f9339dcb7ad0d09$export$17d680238e50603e(prefix, content);
}
function $6f9339dcb7ad0d09$export$42f65d3844869e20(_) {
    return _["prefix@95"];
}
function $6f9339dcb7ad0d09$export$f587a4e4415f4276(_) {
    return _["content@95"];
}
function $6f9339dcb7ad0d09$export$6574aa8202715258(str, splitAt) {
    return $6f9339dcb7ad0d09$export$45b30bb84adefa7e($575619fada8b5e88$export$662d3818631fba36(str, 0, splitAt), $575619fada8b5e88$export$662d3818631fba36(str, splitAt));
}
function $6f9339dcb7ad0d09$var$Line_$ctor_4E535C37(line, splitAt) {
    return $6f9339dcb7ad0d09$export$6574aa8202715258($6f9339dcb7ad0d09$export$42f65d3844869e20(line) + $6f9339dcb7ad0d09$export$f587a4e4415f4276(line), splitAt);
}
function $6f9339dcb7ad0d09$export$e8c29fbc0feda43c() {
    return (d)=>(line)=>$6f9339dcb7ad0d09$export$f587a4e4415f4276(line) === "" ? line : $6f9339dcb7ad0d09$var$Line_$ctor_4E535C37(line, $6f9339dcb7ad0d09$export$42f65d3844869e20(line).length + d)
    ;
}
function $6f9339dcb7ad0d09$export$6c40cc0b77eab95d() {
    return (indent)=>(line)=>{
            const trimmed = $6f9339dcb7ad0d09$export$f587a4e4415f4276(line).trimStart();
            return $6f9339dcb7ad0d09$var$Line_$ctor_4E535C37(line, $4261fbb19e0b4aac$export$96ec731ed4dcb222((x, y)=>$4261fbb19e0b4aac$export$591cc4a8025fba16(x, y)
            , indent, $6f9339dcb7ad0d09$export$42f65d3844869e20(line).length + $6f9339dcb7ad0d09$export$f587a4e4415f4276(line).length - trimmed.length));
        }
    ;
}
function $6f9339dcb7ad0d09$export$56b8a9d80ba24b50() {
    return (fn)=>(line)=>$6f9339dcb7ad0d09$export$45b30bb84adefa7e($6f9339dcb7ad0d09$export$42f65d3844869e20(line), fn($6f9339dcb7ad0d09$export$f587a4e4415f4276(line)))
    ;
}
function $6f9339dcb7ad0d09$export$64cd1025b86a9dd2() {
    return (fn)=>(line)=>$6f9339dcb7ad0d09$export$45b30bb84adefa7e(fn($6f9339dcb7ad0d09$export$42f65d3844869e20(line)), $6f9339dcb7ad0d09$export$f587a4e4415f4276(line))
    ;
}
function $6f9339dcb7ad0d09$export$b53b8f8eed07f89c() {
    return (line)=>$52d096336d1d74e9$export$f84e8e69fd4488a5(line)
    ;
}






function $e89b9b7ee1760219$export$a4b5e5573e6852c1(_arg1, lines) {
    return $1cbdac383b1632f3$export$87b4ba1f7891f330((y_1)=>_arg1[1] + y_1
    , $1cbdac383b1632f3$export$f727098520cf33f5((y)=>_arg1[0] + y
    , lines));
}
const $e89b9b7ee1760219$export$c080b07763463677 = (()=>{
    const prependPrefixTrimEndOfBlankLine = (p, s)=>{
        if ($6f9339dcb7ad0d09$export$7ee701e290d9865(s)) return p.trimEnd();
        else return p + s;
    };
    return (makeDefPrefix)=>(parser)=>(tupledArg_3)=>$1cbdac383b1632f3$export$c48e357c1a89b78d((tupledArg_2)=>{
                    let wrappable, x_6, tupledArg_1, tupledArg, arg10$0040_2;
                    const _arg1 = tupledArg_2[1];
                    const block_1 = _arg1.fields[0];
                    let patternInput_1;
                    const patternInput = $1cbdac383b1632f3$export$b0d75975ac0be0e1($3583e200a8ea3134$export$24915dfbfb141eb4(new $3583e200a8ea3134$export$a79837a2b764b73d(0), block_1), tupledArg_2[0]);
                    const pBlockRest = patternInput[0].fields[1];
                    const p1 = patternInput[0].fields[0];
                    const pRest = $cbf049927489a6e9$export$37721a79838ca038(patternInput[1], new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $cbf049927489a6e9$export$37721a79838ca038($b9be9450bf7f24ec$export$e5907b21d797cce6(pBlockRest), p1), $b9be9450bf7f24ec$export$6e22c362a0406a2c()));
                    patternInput_1 = [
                        p1,
                        $cbf049927489a6e9$export$37721a79838ca038($b9be9450bf7f24ec$export$1acbe849d0cb723e(pBlockRest), makeDefPrefix(p1)),
                        pRest
                    ];
                    const pre2 = patternInput_1[1];
                    const pre1 = patternInput_1[0];
                    return [
                        block_1.tag === 1 ? (wrappable = block_1.fields[0], new $3583e200a8ea3134$export$d96a8827a60d6b69(1, (x_6 = [
                            wrappable[0],
                            wrappable[1]
                        ], [
                            (tupledArg_1 = x_6[0], (tupledArg = [
                                pre1,
                                pre2
                            ], [
                                tupledArg[0] + tupledArg_1[0],
                                tupledArg[1] + tupledArg_1[1]
                            ])),
                            x_6[1]
                        ]))) : block_1.tag === 2 ? new $3583e200a8ea3134$export$d96a8827a60d6b69(2, (arg10$0040_2 = $1cbdac383b1632f3$export$f727098520cf33f5($4261fbb19e0b4aac$export$955fe82a9145db62(1, prependPrefixTrimEndOfBlankLine, [
                            pre1
                        ]), block_1.fields[0]), $1cbdac383b1632f3$export$87b4ba1f7891f330($4261fbb19e0b4aac$export$955fe82a9145db62(1, prependPrefixTrimEndOfBlankLine, [
                            pre2
                        ]), arg10$0040_2))) : block_1,
                        $cbf049927489a6e9$export$871de8747c9eaa88((b_5)=>[
                                patternInput_1[2],
                                b_5
                            ]
                        , $1cbdac383b1632f3$export$88e0dae599377b39(_arg1.fields[1]))
                    ];
                })([
                    tupledArg_3[0],
                    parser(tupledArg_3[1])
                ])
    ;
})();
function $e89b9b7ee1760219$export$db0233f52bd892a4(parser, _arg1, lines) {
    const pre2 = _arg1[1];
    return $e89b9b7ee1760219$export$c080b07763463677((a)=>pre2
    )(parser)([
        new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, _arg1[0], $b9be9450bf7f24ec$export$439306a4dcaafbb9(pre2)),
        lines
    ]);
}
function $e89b9b7ee1760219$export$c4b788daf331c00(parser, wrappable_0, wrappable_1) {
    const wrappable = [
        wrappable_0,
        wrappable_1
    ];
    return new $3583e200a8ea3134$export$d96a8827a60d6b69(0, $e89b9b7ee1760219$export$db0233f52bd892a4(parser, wrappable[0], wrappable[1]));
}
function $e89b9b7ee1760219$export$ba7ca0e7f111fc0b(arg0_0, arg0_1) {
    return new $3583e200a8ea3134$export$d96a8827a60d6b69(1, [
        arg0_0,
        arg0_1
    ]);
}
function $e89b9b7ee1760219$export$b42b71375aae9155(arg0) {
    return new $3583e200a8ea3134$export$d96a8827a60d6b69(2, arg0);
}







function $6cf548609c1fb621$export$855ebe41e1cc9d1d(splitter, totalParser) {
    return (arg)=>$cbf049927489a6e9$export$871de8747c9eaa88((tupledArg)=>[
                totalParser(tupledArg[0]),
                tupledArg[1]
            ]
        , splitter(arg))
    ;
}
function $6cf548609c1fb621$export$2c93594b4c05c833(splitter) {
    return (arg_1)=>$cbf049927489a6e9$export$871de8747c9eaa88((tupledArg)=>[
                new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $e89b9b7ee1760219$export$b42b71375aae9155(tupledArg[0]), $b9be9450bf7f24ec$export$6e22c362a0406a2c()),
                tupledArg[1]
            ]
        , splitter(arg_1))
    ;
}
function $6cf548609c1fb621$export$58518a0eb5d7e7ad(parsers_mut, lines_mut) {
    tryMany: while(true){
        const parsers = parsers_mut, lines = lines_mut;
        if (!$b9be9450bf7f24ec$export$dd1bc94b04021eeb(parsers)) {
            const matchValue = $b9be9450bf7f24ec$export$5fd5031fecdacec3(parsers)(lines);
            if (matchValue == null) {
                parsers_mut = $b9be9450bf7f24ec$export$c01875f616615628(parsers);
                lines_mut = lines;
                continue tryMany;
            } else return matchValue;
        } else return void 0;
        break;
    }
}
function $6cf548609c1fb621$export$ac8dfd3a7ad06e80(otherParser, totalParser) {
    const loop = (buffer_mut, lines_mut)=>{
        loop: while(true){
            const buffer = buffer_mut, lines = lines_mut;
            const lines_1 = lines;
            const headLine = lines_1.fields[0];
            const matchValue = otherParser(lines_1);
            if (matchValue == null) {
                const matchValue_2 = $1cbdac383b1632f3$export$88e0dae599377b39(lines_1.fields[1]);
                if (matchValue_2 == null) return [
                    totalParser($1cbdac383b1632f3$export$edb1c8e715f3944e(new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, headLine, buffer))),
                    void 0
                ];
                else {
                    buffer_mut = $b9be9450bf7f24ec$export$8327ebbef2a0ba76(headLine, buffer);
                    lines_mut = matchValue_2;
                    continue loop;
                }
            } else {
                const remainingLines = matchValue[1];
                const blocks = matchValue[0];
                const matchValue_1 = $1cbdac383b1632f3$export$88e0dae599377b39($b9be9450bf7f24ec$export$66c1ae025e96b4bc(buffer));
                if (matchValue_1 == null) return [
                    blocks,
                    remainingLines
                ];
                else return [
                    $1cbdac383b1632f3$export$10d8903dec122b9d(totalParser(matchValue_1), blocks),
                    remainingLines
                ];
            }
            break;
        }
    };
    return $4261fbb19e0b4aac$export$955fe82a9145db62(1, loop, [
        $b9be9450bf7f24ec$export$6e22c362a0406a2c()
    ]);
}
function $6cf548609c1fb621$export$6322879f5a137539(partialParser) {
    const loop = (blocks_mut, lines_mut)=>{
        loop: while(true){
            const blocks = blocks_mut, lines = lines_mut;
            const matchValue = partialParser(lines);
            if (matchValue[1] == null) return $1cbdac383b1632f3$export$29480e6fb0d9904(blocks, matchValue[0]);
            else {
                const remainingLines = matchValue[1];
                blocks_mut = $b9be9450bf7f24ec$export$10d8903dec122b9d(blocks, $1cbdac383b1632f3$export$effcdbd76139450(matchValue[0]));
                lines_mut = remainingLines;
                continue loop;
            }
            break;
        }
    };
    return $4261fbb19e0b4aac$export$955fe82a9145db62(1, loop, [
        $b9be9450bf7f24ec$export$6e22c362a0406a2c()
    ]);
}
function $6cf548609c1fb621$export$8e02eae49deb618c(splitFn) {
    return $1cbdac383b1632f3$export$c48e357c1a89b78d(splitFn);
}
function $6cf548609c1fb621$export$3eb3d7d4289547fd(predicate, lines) {
    const lines_1 = lines;
    const matchValue = $1cbdac383b1632f3$export$afc1bfabebaf28a2((arg)=>!predicate(arg)
    )(lines_1);
    if (matchValue == null) {
        let tupledArg_1;
        const tupledArg = $3583e200a8ea3134$export$408aaad965f58251((arg_1)=>!predicate(arg_1)
        )(lines_1.fields[1]);
        tupledArg_1 = [
            new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, lines_1.fields[0], tupledArg[0]),
            tupledArg[1]
        ];
        return [
            tupledArg_1[0],
            $1cbdac383b1632f3$export$88e0dae599377b39(tupledArg_1[1])
        ];
    } else return matchValue;
}
function $6cf548609c1fb621$export$e2f2b845afcbaf41(regex) {
    return (lines)=>$6cf548609c1fb621$export$3eb3d7d4289547fd((line)=>$6f9339dcb7ad0d09$export$2344b14b097df817(regex, line)
        , lines)
    ;
}
function $6cf548609c1fb621$export$97415d645e8556b1(regex) {
    return $1cbdac383b1632f3$export$d6aec2285be45753((line)=>$6f9339dcb7ad0d09$export$2344b14b097df817(regex, line)
    );
}
function $6cf548609c1fb621$export$a243c986f18047d7(tabWidth, _arg1) {
    const firstLine = _arg1.fields[0];
    const indentSize = (arg_1)=>$6f9339dcb7ad0d09$export$5efd720ef35c8e98(tabWidth, $6f9339dcb7ad0d09$export$c3ab302d598ba56c(arg_1)).length
    ;
    const firstLineIndentSize = indentSize(firstLine) | 0;
    let tupledArg_1;
    const tupledArg = $3583e200a8ea3134$export$408aaad965f58251((line_1)=>Math.abs(indentSize(line_1) - firstLineIndentSize) < 2
    )(_arg1.fields[1]);
    tupledArg_1 = [
        new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, firstLine, tupledArg[0]),
        tupledArg[1]
    ];
    return [
        tupledArg_1[0],
        $1cbdac383b1632f3$export$88e0dae599377b39(tupledArg_1[1])
    ];
}
function $6cf548609c1fb621$export$206f4d4d34012a5f(reformat, lines) {
    let f, _arg4;
    const lines_1 = lines;
    const headLine = lines_1.fields[0];
    return $e89b9b7ee1760219$export$ba7ca0e7f111fc0b(reformat ? [
        "",
        ""
    ] : [
        $6f9339dcb7ad0d09$export$c3ab302d598ba56c(headLine),
        $6f9339dcb7ad0d09$export$c3ab302d598ba56c($cbf049927489a6e9$export$37721a79838ca038($b9be9450bf7f24ec$export$1acbe849d0cb723e(lines_1.fields[1]), headLine))
    ], (f = (str)=>str.trimStart()
    , (_arg4 = lines_1, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f(_arg4.fields[0]), $b9be9450bf7f24ec$export$871de8747c9eaa88(f, _arg4.fields[1])))));
}
function $6cf548609c1fb621$export$bf5ec3b7ee7adf63(otherParser, settings, _arg1) {
    const headBlock = $e89b9b7ee1760219$export$b42b71375aae9155(new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, _arg1.fields[0], $b9be9450bf7f24ec$export$6e22c362a0406a2c()));
    return $cbf049927489a6e9$export$37721a79838ca038($cbf049927489a6e9$export$871de8747c9eaa88((arg)=>$1cbdac383b1632f3$export$8327ebbef2a0ba76(headBlock, otherParser(settings, arg))
    , $1cbdac383b1632f3$export$88e0dae599377b39(_arg1.fields[1])), new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, headBlock, $b9be9450bf7f24ec$export$6e22c362a0406a2c()));
}
function $6cf548609c1fb621$export$7fcae00e056f3102(textType, lines) {
    let f, _arg4;
    const prefix = $6f9339dcb7ad0d09$export$c3ab302d598ba56c($1cbdac383b1632f3$export$5fd5031fecdacec3(lines));
    return textType([
        [
            prefix,
            prefix
        ],
        (f = (str)=>str.trimStart()
        , (_arg4 = lines, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f(_arg4.fields[0]), $b9be9450bf7f24ec$export$871de8747c9eaa88(f, _arg4.fields[1]))))
    ]);
}
function $6cf548609c1fb621$export$7560c1bc3114403e(startRegex, endRegex, lines) {
    const lines_1 = lines;
    const headLine = lines_1.fields[0];
    return $cbf049927489a6e9$export$871de8747c9eaa88((prefix)=>{
        let n;
        const tupledArg = $6cf548609c1fb621$export$97415d645e8556b1(endRegex)($1cbdac383b1632f3$export$f727098520cf33f5((n = prefix.length | 0, (str)=>$3583e200a8ea3134$export$236f5df1c02f3d73(n, str)
        ), lines_1));
        return [
            $1cbdac383b1632f3$export$605b1175d78d31fa(headLine)(tupledArg[0]),
            tupledArg[1]
        ];
    }, $6f9339dcb7ad0d09$export$d2d84020f5326cd0(startRegex, headLine));
}
const $6cf548609c1fb621$export$c04a3c7d653d8aa0 = $6cf548609c1fb621$export$2c93594b4c05c833($1cbdac383b1632f3$export$afc1bfabebaf28a2((l)=>$6f9339dcb7ad0d09$export$7ee701e290d9865(l)
));


























function $1d9202ebfdcd392e$export$119a28847c08b9b4(marker, eraseIndentedMarker, reformatPrefix, settings, lines) {
    let prefixLength, f_2, _arg4;
    const regex = $9daa05e285c504d2$export$185802fd694ee1f5("^(\\s*)" + marker + "\\s*");
    let patternInput;
    const lines_1 = $1cbdac383b1632f3$export$effcdbd76139450(lines);
    const p = $cbf049927489a6e9$export$37721a79838ca038($cbf049927489a6e9$export$871de8747c9eaa88((arg)=>$6f9339dcb7ad0d09$export$65980d18b75784e2(regex, arg)[0]
    , $cbf049927489a6e9$export$37721a79838ca038($b9be9450bf7f24ec$export$d65cb303b863e3bf((line)=>$6f9339dcb7ad0d09$export$949cdd5cc1255afe(line)
    , lines_1), $b9be9450bf7f24ec$export$1acbe849d0cb723e(lines_1))), "");
    patternInput = [
        p,
        $6f9339dcb7ad0d09$export$5efd720ef35c8e98(settings.tabWidth, p).length
    ];
    const prefix = patternInput[0];
    const newPrefix = settings.reformat ? reformatPrefix(prefix) : prefix;
    return [
        [
            newPrefix,
            newPrefix
        ],
        (prefixLength = patternInput[1] | 0, (f_2 = (arg_3)=>{
            let pre;
            let tupledArg_1;
            const tupledArg = $6f9339dcb7ad0d09$export$65980d18b75784e2(regex, $6f9339dcb7ad0d09$export$5efd720ef35c8e98(settings.tabWidth, arg_3));
            tupledArg_1 = [
                (pre = tupledArg[0], eraseIndentedMarker ? $3583e200a8ea3134$export$236f5df1c02f3d73(prefixLength, $575619fada8b5e88$export$606959e7ccb797f0(pre.length, " ")) : $3583e200a8ea3134$export$236f5df1c02f3d73(prefixLength, pre)),
                tupledArg[1]
            ];
            return tupledArg_1[0] + tupledArg_1[1];
        }, (_arg4 = lines, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_2(_arg4.fields[0]), $b9be9450bf7f24ec$export$871de8747c9eaa88(f_2, _arg4.fields[1])))))
    ];
}
function $1d9202ebfdcd392e$var$maybeReformat(settings, prefix) {
    if (!settings.reformat) return prefix;
    else {
        const p = prefix.trimEnd();
        if (p === "") return p;
        else return p + " ";
    }
}
function $1d9202ebfdcd392e$export$4818399e242967ab(tabSize) {
    return (line)=>{
        let initWidth;
        return $6f9339dcb7ad0d09$export$56b8a9d80ba24b50()((initWidth = $6f9339dcb7ad0d09$export$13c2f47aa8a3882d(tabSize)($6f9339dcb7ad0d09$export$42f65d3844869e20(line)) | 0, (str)=>$cbf049927489a6e9$export$2ab9a8f9f1186f14($1d849aa8ef8b0f61$export$93e2b83da34ff82a($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (tupledArg)=>{
                const maybeAccStr = tupledArg[0];
                const accWidth = tupledArg[1] | 0;
                return (s)=>{
                    const accWidth$0027 = accWidth + $6f9339dcb7ad0d09$export$13c2f47aa8a3882d(tabSize)(s) | 0;
                    if (maybeAccStr != null) {
                        const spcCount = tabSize - accWidth % tabSize | 0;
                        return [
                            maybeAccStr + $575619fada8b5e88$export$606959e7ccb797f0(spcCount, " ") + s,
                            accWidth$0027 + spcCount
                        ];
                    } else return [
                        s,
                        accWidth$0027
                    ];
                };
            }), [
                void 0,
                initWidth
            ], str.split("\t"))[0])
        ))(line);
    };
}
class $1d9202ebfdcd392e$export$aa318e0578993894 extends $52d096336d1d74e9$export$6cbb4f8fa0c4c986 {
    constructor(tag, ...fields){
        super();
        this.tag = tag | 0;
        this.fields = fields;
    }
    cases() {
        return [
            "Decoration",
            "Normal"
        ];
    }
}
function $1d9202ebfdcd392e$export$7f7e89ef4e923dc3() {
    return $64327df6a4d665f3$export$1ae0dd948e267c6b("Parsing.Comments.LineType", [], $1d9202ebfdcd392e$export$aa318e0578993894, ()=>[
            [],
            []
        ]
    );
}
function $1d9202ebfdcd392e$var$splitAtWidth(tabWidth, leftWidth, extraWidth, line) {
    const spaces = (n)=>$575619fada8b5e88$export$606959e7ccb797f0(n, " ")
    ;
    const loop = (accWidth_mut, p_mut)=>{
        loop: while(true){
            const accWidth = accWidth_mut, p = p_mut;
            if (p >= $6f9339dcb7ad0d09$export$f587a4e4415f4276(line).length) return $6f9339dcb7ad0d09$export$45b30bb84adefa7e($6f9339dcb7ad0d09$export$42f65d3844869e20(line) + $6f9339dcb7ad0d09$export$f587a4e4415f4276(line), "");
            else {
                const ccWidth = $6f9339dcb7ad0d09$export$de9247834912d11c(tabWidth, leftWidth + accWidth, $6f9339dcb7ad0d09$export$f587a4e4415f4276(line)[p].charCodeAt(0)) | 0;
                const diff = extraWidth - accWidth - ccWidth | 0;
                if (diff === 0) return $6f9339dcb7ad0d09$export$e8c29fbc0feda43c()(p + 1)(line);
                else if (diff > 0) {
                    accWidth_mut = accWidth + ccWidth;
                    p_mut = p + 1;
                    continue loop;
                } else {
                    const line_1 = $6f9339dcb7ad0d09$export$e8c29fbc0feda43c()(p)(line);
                    return $6f9339dcb7ad0d09$export$45b30bb84adefa7e($6f9339dcb7ad0d09$export$42f65d3844869e20(line_1) + spaces(diff + ccWidth), spaces($4809551403a912ed$export$87c665ad90b41cb3(diff)) + $575619fada8b5e88$export$662d3818631fba36($6f9339dcb7ad0d09$export$f587a4e4415f4276(line_1), 1));
                }
            }
            break;
        }
    };
    return $1d9202ebfdcd392e$export$4818399e242967ab(tabWidth)(extraWidth < 1 ? line : loop(0, 0));
}
function $1d9202ebfdcd392e$var$processContent(settings, contentParser, prefix) {
    return $6cf548609c1fb621$export$6322879f5a137539($6cf548609c1fb621$export$ac8dfd3a7ad06e80((_arg1)=>{
        if (_arg1.fields[0][0].tag === 1) return void 0;
        else return [
            new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, new $3583e200a8ea3134$export$d96a8827a60d6b69(2, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $6f9339dcb7ad0d09$export$b53b8f8eed07f89c()(_arg1.fields[0][1]), $b9be9450bf7f24ec$export$6e22c362a0406a2c())), $b9be9450bf7f24ec$export$6e22c362a0406a2c()),
            $1cbdac383b1632f3$export$88e0dae599377b39(_arg1.fields[1])
        ];
    }, (arg)=>{
        let f_1, _arg4, f_6, _arg4_1;
        let lines;
        const f_11 = (tuple)=>tuple[1]
        ;
        const _arg4_2 = arg;
        lines = new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_11(_arg4_2.fields[0]), $b9be9450bf7f24ec$export$871de8747c9eaa88(f_11, _arg4_2.fields[1]));
        const prefix_1 = $1d9202ebfdcd392e$var$maybeReformat(settings, prefix);
        return $e89b9b7ee1760219$export$c080b07763463677((a)=>prefix_1
        )($4261fbb19e0b4aac$export$955fe82a9145db62(1, contentParser, [
            settings
        ]))([
            (f_1 = (l)=>$6f9339dcb7ad0d09$export$42f65d3844869e20(l)
            , (_arg4 = lines, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_1(_arg4.fields[0]), $b9be9450bf7f24ec$export$871de8747c9eaa88(f_1, _arg4.fields[1])))),
            (f_6 = (l_1)=>$6f9339dcb7ad0d09$export$f587a4e4415f4276(l_1)
            , (_arg4_1 = lines, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_6(_arg4_1.fields[0]), $b9be9450bf7f24ec$export$871de8747c9eaa88(f_6, _arg4_1.fields[1]))))
        ]);
    }));
}
const $1d9202ebfdcd392e$var$wsRegex = /^\s*/g;
class $1d9202ebfdcd392e$export$91352b5738766c8b extends $52d096336d1d74e9$export$6cbb4f8fa0c4c986 {
    constructor(tag1, ...fields1){
        super();
        this.tag = tag1 | 0;
        this.fields = fields1;
    }
    cases() {
        return [
            "LineFmt",
            "MultiLineBlockFmt",
            "SingleLineBlockFmt"
        ];
    }
}
function $1d9202ebfdcd392e$export$6aca2ecd345ec739() {
    return $64327df6a4d665f3$export$1ae0dd948e267c6b("Parsing.Comments.CommentFormat", [], $1d9202ebfdcd392e$export$91352b5738766c8b, ()=>[
            [
                [
                    "Item1",
                    $3583e200a8ea3134$export$4984d4827624d577($6f9339dcb7ad0d09$export$ce355770cc1c8d90())
                ],
                [
                    "Item2",
                    $64327df6a4d665f3$export$d5481a1dd0e3648a
                ]
            ],
            [
                [
                    "Item1",
                    $64327df6a4d665f3$export$2163aa004254c8ff($1d9202ebfdcd392e$export$7f7e89ef4e923dc3(), $6f9339dcb7ad0d09$export$ce355770cc1c8d90())
                ],
                [
                    "Item2",
                    $64327df6a4d665f3$export$5fe717259b8d6105($6f9339dcb7ad0d09$export$ce355770cc1c8d90())
                ],
                [
                    "Item3",
                    $64327df6a4d665f3$export$a0bfd80c70f2d46b($6f9339dcb7ad0d09$export$ce355770cc1c8d90())
                ],
                [
                    "Item4",
                    $64327df6a4d665f3$export$36bbd56a39d3f734
                ]
            ],
            [
                [
                    "Item1",
                    $64327df6a4d665f3$export$2163aa004254c8ff($1d9202ebfdcd392e$export$7f7e89ef4e923dc3(), $6f9339dcb7ad0d09$export$ce355770cc1c8d90())
                ],
                [
                    "Item2",
                    $64327df6a4d665f3$export$36bbd56a39d3f734
                ]
            ]
        ]
    );
}
function $1d9202ebfdcd392e$var$inspectAndProcessContent(fmt, contentParser, settings) {
    let b_2;
    const tabWidth = settings.tabWidth | 0;
    let patternInput;
    switch(fmt.tag){
        case 1:
            {
                const bodyMarkers = fmt.fields[3];
                patternInput = [
                    fmt.fields[1],
                    $9daa05e285c504d2$export$185802fd694ee1f5("^\\s*" + (bodyMarkers !== "" ? "[" + bodyMarkers + "]?\\s*" : "")),
                    0
                ];
                break;
            }
        case 2:
            patternInput = [
                $60035ec1a4f58e59$export$6e22c362a0406a2c(),
                $1d9202ebfdcd392e$var$wsRegex,
                0
            ];
            break;
        default:
            patternInput = [
                fmt.fields[0],
                $1d9202ebfdcd392e$var$wsRegex,
                fmt.fields[1]
            ];
    }
    const prefixRegex = patternInput[1];
    const initialIndent_1 = patternInput[2] | 0;
    const strWidth = (str)=>$6f9339dcb7ad0d09$export$6736e22116c64a4c(initialIndent_1, tabWidth, str)
    ;
    const patternInput_2 = $60035ec1a4f58e59$export$9b19c2e3f2aab20f((minIndent, line_1)=>{
        let patternInput_1;
        const line = line_1;
        const m = $9daa05e285c504d2$export$4659b591c19bdf3d(prefixRegex, $6f9339dcb7ad0d09$export$f587a4e4415f4276(line));
        patternInput_1 = $6f9339dcb7ad0d09$export$f587a4e4415f4276(line).length === m[0].length ? [
            new $1d9202ebfdcd392e$export$aa318e0578993894(1),
            2147483647
        ] : $6f9339dcb7ad0d09$export$949cdd5cc1255afe($6f9339dcb7ad0d09$export$f587a4e4415f4276(line)) ? [
            new $1d9202ebfdcd392e$export$aa318e0578993894(1),
            strWidth(m[0])
        ] : [
            new $1d9202ebfdcd392e$export$aa318e0578993894(0),
            2147483647
        ];
        return [
            [
                patternInput_1[0],
                line_1
            ],
            $4261fbb19e0b4aac$export$96ec731ed4dcb222((x, y)=>$4261fbb19e0b4aac$export$591cc4a8025fba16(x, y)
            , minIndent, patternInput_1[1])
        ];
    }, 2147483647, patternInput[0]);
    const indentIncrease = patternInput_2[1] | 0;
    let patternInput_4;
    const adjust = (tupledArg_mut)=>{
        adjust: while(true){
            const tupledArg = tupledArg_mut;
            const typ_1 = tupledArg[0];
            const line_2 = tupledArg[1];
            if (typ_1.tag === 1) {
                const line_3 = $1d9202ebfdcd392e$var$splitAtWidth(tabWidth, initialIndent_1, indentIncrease, line_2);
                const line_4 = $6f9339dcb7ad0d09$export$64cd1025b86a9dd2()((prefix)=>$1d9202ebfdcd392e$var$maybeReformat(settings, prefix)
                )($1d9202ebfdcd392e$export$4818399e242967ab(tabWidth)(line_3));
                return [
                    [
                        typ_1,
                        line_4
                    ],
                    $575619fada8b5e88$export$c6e2787f63ca055d($6f9339dcb7ad0d09$export$f587a4e4415f4276(line_4)) ? void 0 : $6f9339dcb7ad0d09$export$42f65d3844869e20(line_4)
                ];
            } else if (strWidth($9daa05e285c504d2$export$4659b591c19bdf3d(prefixRegex, $6f9339dcb7ad0d09$export$f587a4e4415f4276(line_2))[0]) >= indentIncrease) {
                tupledArg_mut = [
                    new $1d9202ebfdcd392e$export$aa318e0578993894(1),
                    line_2
                ];
                continue adjust;
            } else return [
                [
                    typ_1,
                    line_2
                ],
                void 0
            ];
            break;
        }
    };
    patternInput_4 = $60035ec1a4f58e59$export$9b19c2e3f2aab20f((maybePrefix, line_5)=>{
        const patternInput_3 = adjust(line_5);
        return [
            patternInput_3[0],
            $cbf049927489a6e9$export$37721a79838ca038(maybePrefix, patternInput_3[1])
        ];
    }, void 0, patternInput_2[0]);
    const lines_3 = patternInput_4[0];
    const patternInput_5 = fmt.tag === 1 ? [
        new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, fmt.fields[0], $b9be9450bf7f24ec$export$c80b5fc7454ef206($60035ec1a4f58e59$export$10d8903dec122b9d(lines_3, (b_2 = $60035ec1a4f58e59$export$6e22c362a0406a2c(), $cbf049927489a6e9$export$37721a79838ca038($cbf049927489a6e9$export$871de8747c9eaa88((arg)=>$60035ec1a4f58e59$export$439306a4dcaafbb9([
                new $1d9202ebfdcd392e$export$aa318e0578993894(0),
                arg
            ])
        , fmt.fields[2]), b_2))))),
        ""
    ] : fmt.tag === 2 ? [
        new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, fmt.fields[0], $b9be9450bf7f24ec$export$6e22c362a0406a2c()),
        fmt.fields[1]
    ] : [
        $1cbdac383b1632f3$export$da968afc9c9924d3(lines_3),
        ""
    ];
    return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, new $3583e200a8ea3134$export$d96a8827a60d6b69(0, $1d9202ebfdcd392e$var$processContent(settings, contentParser, $cbf049927489a6e9$export$37721a79838ca038(patternInput_4[1], patternInput_5[1]))(patternInput_5[0])), $b9be9450bf7f24ec$export$6e22c362a0406a2c());
}
function $1d9202ebfdcd392e$export$5d080f5a78d4f5b3(contentParser, marker, settings) {
    const prefixRegex = $9daa05e285c504d2$export$185802fd694ee1f5("^(\\s*)" + marker);
    const strWidth = (str)=>$6f9339dcb7ad0d09$export$6736e22116c64a4c(0, settings.tabWidth, str)
    ;
    const tryMatchPrefix = (str_1)=>{
        const m = $9daa05e285c504d2$export$4659b591c19bdf3d(prefixRegex, str_1);
        if (m != null) return $6f9339dcb7ad0d09$export$6574aa8202715258(str_1, m[0].length);
        else return void 0;
    };
    return (_arg1)=>$3583e200a8ea3134$export$e5403e43878ec1b6($3583e200a8ea3134$export$a75d1723e6bda2ec, tryMatchPrefix(_arg1.fields[0]), (_arg1_1)=>{
            const firstLine = _arg1_1;
            const indent = strWidth($6f9339dcb7ad0d09$export$42f65d3844869e20(firstLine)) | 0;
            const patternInput = $3583e200a8ea3134$export$f57f1824c5412723((arg)=>$cbf049927489a6e9$export$3dea766d36a8935f((l)=>strWidth($6f9339dcb7ad0d09$export$42f65d3844869e20(l)) === indent
                , tryMatchPrefix(arg))
            )(_arg1.fields[1]);
            return $3583e200a8ea3134$export$ba4da117d7bdef59($3583e200a8ea3134$export$a75d1723e6bda2ec, [
                $1d9202ebfdcd392e$var$inspectAndProcessContent(new $1d9202ebfdcd392e$export$91352b5738766c8b(0, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, firstLine, patternInput[0]), indent), contentParser, settings),
                $1cbdac383b1632f3$export$88e0dae599377b39(patternInput[1])
            ]);
        })
    ;
}
function $1d9202ebfdcd392e$export$f2ae215066c4835a(contentParser, bodyMarkers, defaultBodyMarker, startMarker, endMarker, settings) {
    const patternInput = [
        $9daa05e285c504d2$export$185802fd694ee1f5("^\\s*" + startMarker + "\\s*"),
        $9daa05e285c504d2$export$185802fd694ee1f5(endMarker)
    ];
    const endRegex = patternInput[1];
    const findEnd = (acc_mut, _arg1_mut)=>{
        findEnd: while(true){
            const acc = acc_mut, _arg1 = _arg1_mut;
            if (!$b9be9450bf7f24ec$export$dd1bc94b04021eeb(_arg1)) {
                const str = $b9be9450bf7f24ec$export$5fd5031fecdacec3(_arg1);
                const rest = $b9be9450bf7f24ec$export$c01875f616615628(_arg1);
                const m = $9daa05e285c504d2$export$4659b591c19bdf3d(endRegex, str);
                if (m != null) {
                    const patternInput_1 = $6f9339dcb7ad0d09$export$949cdd5cc1255afe($575619fada8b5e88$export$662d3818631fba36(str, 0, m.index)) ? [
                        $b9be9450bf7f24ec$export$8327ebbef2a0ba76($6f9339dcb7ad0d09$export$45b30bb84adefa7e("", str), acc),
                        void 0
                    ] : [
                        acc,
                        $6f9339dcb7ad0d09$export$45b30bb84adefa7e("", str)
                    ];
                    return [
                        $b9be9450bf7f24ec$export$66c1ae025e96b4bc(patternInput_1[0]),
                        patternInput_1[1],
                        rest
                    ];
                } else {
                    acc_mut = $b9be9450bf7f24ec$export$8327ebbef2a0ba76($6f9339dcb7ad0d09$export$45b30bb84adefa7e("", str), acc);
                    _arg1_mut = rest;
                    continue findEnd;
                }
            } else return [
                $b9be9450bf7f24ec$export$66c1ae025e96b4bc(acc),
                void 0,
                $b9be9450bf7f24ec$export$6e22c362a0406a2c()
            ];
            break;
        }
    };
    return (_arg1_1)=>{
        const tStrs = _arg1_1.fields[1];
        const hStr = _arg1_1.fields[0];
        const mStart = $9daa05e285c504d2$export$4659b591c19bdf3d(patternInput[0], hStr);
        if (!(mStart != null)) return $3583e200a8ea3134$export$b234b9af24438e($3583e200a8ea3134$export$a75d1723e6bda2ec, void 0);
        else {
            const hLine = $6f9339dcb7ad0d09$export$6574aa8202715258(hStr, mStart[0].length);
            const mkFirstLine = (p_1)=>{
                if (!$6f9339dcb7ad0d09$export$949cdd5cc1255afe($575619fada8b5e88$export$662d3818631fba36($6f9339dcb7ad0d09$export$f587a4e4415f4276(hLine), 0, p_1))) return [
                    new $1d9202ebfdcd392e$export$aa318e0578993894(0),
                    hLine
                ];
                else {
                    const hLine_1 = $1d9202ebfdcd392e$export$4818399e242967ab(settings.tabWidth)(hLine);
                    return [
                        new $1d9202ebfdcd392e$export$aa318e0578993894(1),
                        $6f9339dcb7ad0d09$export$64cd1025b86a9dd2()((prefix)=>$1d9202ebfdcd392e$var$maybeReformat(settings, prefix)
                        )(hLine_1)
                    ];
                }
            };
            let patternInput_3;
            const mEnd = $9daa05e285c504d2$export$4659b591c19bdf3d(endRegex, $6f9339dcb7ad0d09$export$f587a4e4415f4276(hLine));
            if (mEnd != null) {
                const addedLinesPrefix = $6f9339dcb7ad0d09$export$c3ab302d598ba56c($6f9339dcb7ad0d09$export$42f65d3844869e20(hLine)) + defaultBodyMarker;
                patternInput_3 = [
                    new $1d9202ebfdcd392e$export$91352b5738766c8b(2, mkFirstLine(mEnd.index), addedLinesPrefix),
                    tStrs
                ];
            } else {
                const patternInput_2 = findEnd($b9be9450bf7f24ec$export$6e22c362a0406a2c(), tStrs);
                patternInput_3 = [
                    new $1d9202ebfdcd392e$export$91352b5738766c8b(1, mkFirstLine($6f9339dcb7ad0d09$export$f587a4e4415f4276(hLine).length), patternInput_2[0], patternInput_2[1], bodyMarkers),
                    patternInput_2[2]
                ];
            }
            return $3583e200a8ea3134$export$ba4da117d7bdef59($3583e200a8ea3134$export$a75d1723e6bda2ec, [
                $1d9202ebfdcd392e$var$inspectAndProcessContent(patternInput_3[0], contentParser, settings),
                $1cbdac383b1632f3$export$88e0dae599377b39(patternInput_3[1])
            ]);
        }
    };
}














class $fd65bf8312d3edef$var$MarkdownState extends $52d096336d1d74e9$export$6cbb4f8fa0c4c986 {
    constructor(tag, ...fields){
        super();
        this.tag = tag | 0;
        this.fields = fields;
    }
    cases() {
        return [
            "FencedCodeBlock",
            "Paragraph",
            "NonParagraph"
        ];
    }
}
function $fd65bf8312d3edef$var$MarkdownState$reflection() {
    return $64327df6a4d665f3$export$1ae0dd948e267c6b("Parsing.Markdown.MarkdownState", [], $fd65bf8312d3edef$var$MarkdownState, ()=>[
            [],
            [],
            []
        ]
    );
}
function $fd65bf8312d3edef$export$199d64cd116a5491(settings) {
    let startRegex, startRegex_1, startRegex_2, startRegex_3, startRegex_4, startRegex_5;
    const fencedCodeBlock = (lines_1)=>{
        let tupledArg, startLineIndent, patternInput, otherLines, contentLines, patternInput_1, maybeEndLine, contentIndentShift;
        const lines_2 = lines_1;
        const headLine = lines_2.fields[0];
        const patternInput_2 = $6f9339dcb7ad0d09$export$65980d18b75784e2($fd65bf8312d3edef$var$fencedCodeBlockRegex, headLine);
        const prefix = patternInput_2[0];
        if (prefix.length > 0) {
            const marker_1 = prefix.trimStart();
            if (patternInput_2[1].indexOf($575619fada8b5e88$export$2a1422e7517645a9(marker_1, 0)) >= 0) return void 0;
            else return tupledArg = (startLineIndent = prefix.length - marker_1.length | 0, patternInput = $3583e200a8ea3134$export$408aaad965f58251((arg)=>!$fd65bf8312d3edef$var$lineStartsWith(marker_1)(arg)
            )(lines_2.fields[1]), otherLines = patternInput[1], contentLines = patternInput[0], patternInput_1 = !$b9be9450bf7f24ec$export$dd1bc94b04021eeb(otherLines) ? [
                $b9be9450bf7f24ec$export$439306a4dcaafbb9($b9be9450bf7f24ec$export$5fd5031fecdacec3(otherLines)),
                $1cbdac383b1632f3$export$88e0dae599377b39($b9be9450bf7f24ec$export$c01875f616615628(otherLines))
            ] : [
                $b9be9450bf7f24ec$export$6e22c362a0406a2c(),
                void 0
            ], maybeEndLine = patternInput_1[0], [
                settings.reformat ? (contentIndentShift = $3583e200a8ea3134$export$5835bdd4dd0bd418(startLineIndent, $b9be9450bf7f24ec$export$871de8747c9eaa88((l)=>$6f9339dcb7ad0d09$export$c3ab302d598ba56c(l).length
                , contentLines)) | 0, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, headLine.trimStart(), $b9be9450bf7f24ec$export$10d8903dec122b9d($b9be9450bf7f24ec$export$871de8747c9eaa88((str_2)=>$3583e200a8ea3134$export$236f5df1c02f3d73(contentIndentShift, str_2)
                , contentLines), $b9be9450bf7f24ec$export$871de8747c9eaa88((str_3)=>str_3.trimStart()
                , maybeEndLine)))) : new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, headLine, $b9be9450bf7f24ec$export$10d8903dec122b9d(contentLines, maybeEndLine)),
                patternInput_1[1]
            ]), [
                new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, new $3583e200a8ea3134$export$d96a8827a60d6b69(2, tupledArg[0]), $b9be9450bf7f24ec$export$6e22c362a0406a2c()),
                tupledArg[1]
            ];
        } else return void 0;
    };
    let htmlType1to6;
    const parsers = $b9be9450bf7f24ec$export$871de8747c9eaa88((splitter)=>$6cf548609c1fb621$export$2c93594b4c05c833(splitter)
    , $b9be9450bf7f24ec$export$cb197a913f6bb809([
        (startRegex = $fd65bf8312d3edef$var$mdMarker("\u003c(script|pre|style)( |\u003e|$)"), (lines_3)=>$6cf548609c1fb621$export$7560c1bc3114403e(startRegex, /<\/(script|pre|style)>/gi, lines_3)
        ),
        (startRegex_1 = $fd65bf8312d3edef$var$mdMarker("\u003c!--"), (lines_4)=>$6cf548609c1fb621$export$7560c1bc3114403e(startRegex_1, /-->/g, lines_4)
        ),
        (startRegex_2 = $fd65bf8312d3edef$var$mdMarker("\u003c\\?"), (lines_5)=>$6cf548609c1fb621$export$7560c1bc3114403e(startRegex_2, /\?>/g, lines_5)
        ),
        (startRegex_3 = $fd65bf8312d3edef$var$mdMarker("\u003c![A-Z]"), (lines_6)=>$6cf548609c1fb621$export$7560c1bc3114403e(startRegex_3, />/g, lines_6)
        ),
        (startRegex_4 = $fd65bf8312d3edef$var$mdMarker("\u003c!\\[CDATA\\["), (lines_7)=>$6cf548609c1fb621$export$7560c1bc3114403e(startRegex_4, /]]>/g, lines_7)
        ),
        (startRegex_5 = $fd65bf8312d3edef$var$mdMarker("\u003c/?(address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(\\s|/?\u003e|$)"), (lines_8)=>$6cf548609c1fb621$export$7560c1bc3114403e(startRegex_5, /^\s*$/g, lines_8)
        )
    ]));
    htmlType1to6 = (lines_9)=>$6cf548609c1fb621$export$58518a0eb5d7e7ad(parsers, lines_9)
    ;
    let table;
    const cellsRowRegex = /\S\s*\|\s*\S/g;
    table = $6cf548609c1fb621$export$2c93594b4c05c833((lines_10)=>{
        let tupledArg_2, tupledArg_1;
        const matchValue = $1cbdac383b1632f3$export$effcdbd76139450(lines_10);
        let pattern_matching_result, firstLine, rest, secondLine;
        if (!$b9be9450bf7f24ec$export$dd1bc94b04021eeb(matchValue)) {
            if (!$b9be9450bf7f24ec$export$dd1bc94b04021eeb($b9be9450bf7f24ec$export$c01875f616615628(matchValue))) {
                pattern_matching_result = 0;
                firstLine = $b9be9450bf7f24ec$export$5fd5031fecdacec3(matchValue);
                rest = $b9be9450bf7f24ec$export$c01875f616615628($b9be9450bf7f24ec$export$c01875f616615628(matchValue));
                secondLine = $b9be9450bf7f24ec$export$5fd5031fecdacec3($b9be9450bf7f24ec$export$c01875f616615628(matchValue));
            } else pattern_matching_result = 1;
        } else pattern_matching_result = 1;
        switch(pattern_matching_result){
            case 0:
                if ($6f9339dcb7ad0d09$export$2344b14b097df817(cellsRowRegex, firstLine) ? $6f9339dcb7ad0d09$export$2344b14b097df817(/:?-+:?\s*\|\s*:?-+:?/g, secondLine) : false) return tupledArg_2 = (tupledArg_1 = $3583e200a8ea3134$export$408aaad965f58251((line)=>$6f9339dcb7ad0d09$export$2344b14b097df817(cellsRowRegex, line)
                )(rest), [
                    new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, firstLine, $b9be9450bf7f24ec$export$8327ebbef2a0ba76(secondLine, tupledArg_1[0])),
                    tupledArg_1[1]
                ]), [
                    tupledArg_2[0],
                    $1cbdac383b1632f3$export$88e0dae599377b39(tupledArg_2[1])
                ];
                else return void 0;
            case 1:
                return void 0;
        }
    });
    const nonText = $6cf548609c1fb621$export$2c93594b4c05c833($1cbdac383b1632f3$export$afc1bfabebaf28a2((s_1)=>!($6f9339dcb7ad0d09$export$949cdd5cc1255afe(s_1) ? true : $6f9339dcb7ad0d09$export$7ee701e290d9865(s_1))
    ));
    const atxHeading = $6cf548609c1fb621$export$2c93594b4c05c833($1cbdac383b1632f3$export$afc1bfabebaf28a2($fd65bf8312d3edef$var$lineStartsWith("#{1,6} ")));
    const blockQuote = $6cf548609c1fb621$export$855ebe41e1cc9d1d((lines_11)=>{
        const option_1 = $cbf049927489a6e9$export$3dea766d36a8935f((arg_2)=>$fd65bf8312d3edef$var$lineStartsWith("\u003e")($1cbdac383b1632f3$export$5fd5031fecdacec3(arg_2))
        , lines_11);
        return $cbf049927489a6e9$export$2385a24977818dd0($1cbdac383b1632f3$export$afc1bfabebaf28a2((s_2)=>!$6f9339dcb7ad0d09$export$7ee701e290d9865(s_2)
        ), option_1);
    }, (lines_12)=>{
        let f_18, _arg4_2, f_22, _arg4_3;
        let splitLines;
        const f_14 = (line_1)=>$6f9339dcb7ad0d09$export$65980d18b75784e2(/ {0,3}>? ?/g, line_1)
        ;
        const _arg4_1 = lines_12;
        splitLines = new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_14(_arg4_1.fields[0]), $b9be9450bf7f24ec$export$871de8747c9eaa88(f_14, _arg4_1.fields[1]));
        const patternInput_3 = settings.reformat ? [
            new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, "\u003e ", $b9be9450bf7f24ec$export$6e22c362a0406a2c()),
            (a_6)=>"\u003e "
        ] : [
            (f_18 = (tuple)=>tuple[0]
            , (_arg4_2 = splitLines, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_18(_arg4_2.fields[0]), $b9be9450bf7f24ec$export$871de8747c9eaa88(f_18, _arg4_2.fields[1])))),
            (x_21)=>x_21
        ];
        return $e89b9b7ee1760219$export$c080b07763463677(patternInput_3[1])($fd65bf8312d3edef$export$199d64cd116a5491(settings))([
            patternInput_3[0],
            (f_22 = (tuple_1)=>tuple_1[1]
            , (_arg4_3 = splitLines, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_22(_arg4_3.fields[0]), $b9be9450bf7f24ec$export$871de8747c9eaa88(f_22, _arg4_3.fields[1]))))
        ]);
    });
    const indentedCodeBlock = $6cf548609c1fb621$export$855ebe41e1cc9d1d($1cbdac383b1632f3$export$afc1bfabebaf28a2((line_2)=>$6f9339dcb7ad0d09$export$2344b14b097df817(/^(\s{4}|\t)/g, line_2)
    ), (arg_4)=>new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, new $3583e200a8ea3134$export$d96a8827a60d6b69(2, (settings.reformat ? (lines)=>{
            let f_1;
            const n_1 = $b9be9450bf7f24ec$export$96ec731ed4dcb222($b9be9450bf7f24ec$export$871de8747c9eaa88((s)=>s.length - s.trimStart().length
            , $1cbdac383b1632f3$export$effcdbd76139450(lines)), {
                Compare: (x, y)=>$4261fbb19e0b4aac$export$591cc4a8025fba16(x, y)
            }) - 4 | 0;
            f_1 = (str)=>$3583e200a8ea3134$export$236f5df1c02f3d73(n_1, str)
            ;
            const _arg4 = lines;
            return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_1(_arg4.fields[0]), $b9be9450bf7f24ec$export$871de8747c9eaa88(f_1, _arg4.fields[1]));
        } : (x_25)=>x_25
        )(arg_4)), $b9be9450bf7f24ec$export$6e22c362a0406a2c())
    );
    const listItem = (_arg1_2)=>{
        const otherLines_1 = _arg1_2.fields[1];
        const firstLine_1 = _arg1_2.fields[0];
        return $cbf049927489a6e9$export$871de8747c9eaa88((listItemPrefix)=>{
            let tupledArg_3;
            const strippedFirstLine = $3583e200a8ea3134$export$236f5df1c02f3d73(listItemPrefix.length, firstLine_1);
            const prefixWithSpace = $575619fada8b5e88$export$10fdab3683b55b22(listItemPrefix, " ") ? listItemPrefix : listItemPrefix + " ";
            const indent = prefixWithSpace.length | 0;
            const patternInput_4 = strippedFirstLine === "" ? $fd65bf8312d3edef$var$findListItemEnd(indent)(new $fd65bf8312d3edef$var$MarkdownState(2))(otherLines_1) : $fd65bf8312d3edef$var$findListItemEnd(indent)(new $fd65bf8312d3edef$var$MarkdownState(1))(otherLines_1);
            const tailRegex = $9daa05e285c504d2$export$185802fd694ee1f5("^ {0," + $4261fbb19e0b4aac$export$afbd86327cbebb03(indent) + "}");
            const headPrefix = settings.reformat ? prefixWithSpace.trim() + " " : prefixWithSpace;
            return [
                (tupledArg_3 = [
                    [
                        headPrefix,
                        $575619fada8b5e88$export$606959e7ccb797f0(headPrefix.length, " ")
                    ],
                    new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, strippedFirstLine, $b9be9450bf7f24ec$export$871de8747c9eaa88((arg_5)=>$6f9339dcb7ad0d09$export$65980d18b75784e2(tailRegex, arg_5)[1]
                    , patternInput_4[0]))
                ], $e89b9b7ee1760219$export$db0233f52bd892a4($fd65bf8312d3edef$export$199d64cd116a5491(settings), tupledArg_3[0], tupledArg_3[1])),
                patternInput_4[1]
            ];
        }, $6f9339dcb7ad0d09$export$d2d84020f5326cd0($fd65bf8312d3edef$var$listItemRegex, firstLine_1));
    };
    return (arg_7)=>{
        let f_32, _arg4_5;
        return $6cf548609c1fb621$export$6322879f5a137539((lines_16)=>$cbf049927489a6e9$export$c90763f2293d7e67($6cf548609c1fb621$export$58518a0eb5d7e7ad($b9be9450bf7f24ec$export$cb197a913f6bb809([
                $6cf548609c1fb621$export$c04a3c7d653d8aa0,
                fencedCodeBlock,
                table,
                nonText,
                atxHeading,
                indentedCodeBlock,
                listItem,
                blockQuote
            ]), lines_16), ()=>$6cf548609c1fb621$export$ac8dfd3a7ad06e80((lines_15)=>$6cf548609c1fb621$export$58518a0eb5d7e7ad($b9be9450bf7f24ec$export$cb197a913f6bb809([
                        $6cf548609c1fb621$export$c04a3c7d653d8aa0,
                        fencedCodeBlock,
                        nonText,
                        listItem,
                        blockQuote,
                        atxHeading,
                        htmlType1to6
                    ]), lines_15)
                , (arg_6)=>{
                    const f_27 = (lines_14)=>$6cf548609c1fb621$export$206f4d4d34012a5f(settings.reformat, lines_14)
                    ;
                    const _arg4_4 = $6cf548609c1fb621$export$8e02eae49deb618c($6cf548609c1fb621$export$97415d645e8556b1(/(\\|\s{2}|<br\/?>)$/gi))(arg_6);
                    return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_27(_arg4_4.fields[0]), $b9be9450bf7f24ec$export$871de8747c9eaa88(f_27, _arg4_4.fields[1]));
                })(lines_16)
            )
        )((f_32 = (str_7)=>$6f9339dcb7ad0d09$export$5efd720ef35c8e98(settings.tabWidth, str_7)
        , (_arg4_5 = arg_7, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_32(_arg4_5.fields[0]), $b9be9450bf7f24ec$export$871de8747c9eaa88(f_32, _arg4_5.fields[1])))));
    };
}
function $fd65bf8312d3edef$var$mdMarker(marker) {
    return $9daa05e285c504d2$export$185802fd694ee1f5("^ {0,3}" + marker, 1);
}
const $fd65bf8312d3edef$var$listItemRegex = $fd65bf8312d3edef$var$mdMarker("([-+*]|[0-9]+[.)])(\\s+|$)");
const $fd65bf8312d3edef$var$blockQuoteRegex = $fd65bf8312d3edef$var$mdMarker("\u003e");
const $fd65bf8312d3edef$var$fencedCodeBlockRegex = $fd65bf8312d3edef$var$mdMarker("(`{3,}|~{3,})");
const $fd65bf8312d3edef$var$lineStartsWith = (arg)=>{
    const regex = $fd65bf8312d3edef$var$mdMarker(arg);
    return (line)=>$6f9339dcb7ad0d09$export$2344b14b097df817(regex, line)
    ;
};
function $fd65bf8312d3edef$var$findListItemEnd(indent) {
    const loop = (output, state_1, lines)=>{
        const exitLoop = ()=>[
                $b9be9450bf7f24ec$export$66c1ae025e96b4bc(output),
                $1cbdac383b1632f3$export$88e0dae599377b39(lines)
            ]
        ;
        if ($b9be9450bf7f24ec$export$dd1bc94b04021eeb(lines)) return exitLoop();
        else {
            const line_2 = $b9be9450bf7f24ec$export$5fd5031fecdacec3(lines);
            let trimmedLine;
            const line = line_2;
            let p = 0;
            while((p < indent ? p < line.length : false) ? line[p] === " " : false)p = p + 1 | 0;
            trimmedLine = $575619fada8b5e88$export$662d3818631fba36(line, p);
            const continueLoop = ()=>{
                let line_1, state;
                return loop($b9be9450bf7f24ec$export$8327ebbef2a0ba76(line_2, output), (line_1 = trimmedLine, (state = state_1, state.tag === 1 ? $fd65bf8312d3edef$var$lineStartsWith("(```|~~~)")(line_1) ? new $fd65bf8312d3edef$var$MarkdownState(0) : (!$6f9339dcb7ad0d09$export$949cdd5cc1255afe(line_1) ? true : $fd65bf8312d3edef$var$lineStartsWith("#{1,6} ")(line_1)) ? new $fd65bf8312d3edef$var$MarkdownState(2) : new $fd65bf8312d3edef$var$MarkdownState(1) : state.tag === 2 ? $fd65bf8312d3edef$var$lineStartsWith("(```|~~~)")(line_1) ? new $fd65bf8312d3edef$var$MarkdownState(0) : (!$6f9339dcb7ad0d09$export$949cdd5cc1255afe(line_1) ? true : $fd65bf8312d3edef$var$lineStartsWith("#{1,6} ")(line_1)) ? new $fd65bf8312d3edef$var$MarkdownState(2) : $6f9339dcb7ad0d09$export$2344b14b097df817(/^ {4,}/g, line_1) ? new $fd65bf8312d3edef$var$MarkdownState(2) : new $fd65bf8312d3edef$var$MarkdownState(1) : $fd65bf8312d3edef$var$lineStartsWith("(```|~~~)")(line_1) ? new $fd65bf8312d3edef$var$MarkdownState(2) : new $fd65bf8312d3edef$var$MarkdownState(0))), $b9be9450bf7f24ec$export$c01875f616615628(lines));
            };
            if ($6f9339dcb7ad0d09$export$7ee701e290d9865(line_2)) return continueLoop();
            else if (line_2.length - trimmedLine.length < indent) switch(state_1.tag){
                case 1:
                    if (($6f9339dcb7ad0d09$export$2344b14b097df817($fd65bf8312d3edef$var$blockQuoteRegex, line_2) ? true : $6f9339dcb7ad0d09$export$2344b14b097df817($fd65bf8312d3edef$var$listItemRegex, line_2)) ? true : $6f9339dcb7ad0d09$export$2344b14b097df817($fd65bf8312d3edef$var$fencedCodeBlockRegex, line_2)) return exitLoop();
                    else return continueLoop();
                case 2:
                    return exitLoop();
                default:
                    return continueLoop();
            }
            else return continueLoop();
        }
    };
    return $4261fbb19e0b4aac$export$955fe82a9145db62(2, loop, [
        $b9be9450bf7f24ec$export$6e22c362a0406a2c()
    ]);
}

























const $0f58927fbe9329c9$var$scriptMarkers = [
    $9daa05e285c504d2$export$185802fd694ee1f5("\u003cscript", 1),
    $9daa05e285c504d2$export$185802fd694ee1f5("\u003c/script\u003e", 1)
];
const $0f58927fbe9329c9$var$cssMarkers = [
    $9daa05e285c504d2$export$185802fd694ee1f5("\u003cstyle", 1),
    $9daa05e285c504d2$export$185802fd694ee1f5("\u003c/style\u003e", 1)
];
function $0f58927fbe9329c9$export$88aae633c7e0c3cb(scriptParser, cssParser, blockTags, settings) {
    const embeddedScript = (markers)=>(contentParser)=>$6cf548609c1fb621$export$855ebe41e1cc9d1d((lines_1)=>$6cf548609c1fb621$export$7560c1bc3114403e(markers[0], markers[1], lines_1)
            , (arg20$0040)=>$6cf548609c1fb621$export$bf5ec3b7ee7adf63((_arg1, lines)=>{
                    const patternInput = $1cbdac383b1632f3$export$edb1c8e715f3944e(lines);
                    if ($9daa05e285c504d2$export$b74c33566721f70f(markers[1], patternInput.fields[0])) {
                        const matchValue = $1cbdac383b1632f3$export$88e0dae599377b39($b9be9450bf7f24ec$export$66c1ae025e96b4bc(patternInput.fields[1]));
                        if (matchValue == null) return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $e89b9b7ee1760219$export$b42b71375aae9155(new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $1cbdac383b1632f3$export$4c7897fafd92b108(lines), $b9be9450bf7f24ec$export$6e22c362a0406a2c())), $b9be9450bf7f24ec$export$6e22c362a0406a2c());
                        else {
                            const middleLines = matchValue;
                            return $1cbdac383b1632f3$export$c40cf5aab899f397($e89b9b7ee1760219$export$b42b71375aae9155(new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $1cbdac383b1632f3$export$4c7897fafd92b108(lines), $b9be9450bf7f24ec$export$6e22c362a0406a2c())), contentParser(settings, middleLines));
                        }
                    } else return contentParser(settings, lines);
                }, settings, arg20$0040)
            )
    ;
    let otherParsers;
    const parsers = $b9be9450bf7f24ec$export$cb197a913f6bb809([
        $6cf548609c1fb621$export$c04a3c7d653d8aa0,
        $1d9202ebfdcd392e$export$f2ae215066c4835a($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (settings_1)=>$fd65bf8312d3edef$export$199d64cd116a5491(settings_1)
        ), "", "", "\u003c!--", "--\u003e", settings),
        embeddedScript($0f58927fbe9329c9$var$scriptMarkers)(scriptParser),
        embeddedScript($0f58927fbe9329c9$var$cssMarkers)(cssParser)
    ]);
    otherParsers = (lines_2)=>$6cf548609c1fb621$export$58518a0eb5d7e7ad(parsers, lines_2)
    ;
    const isBlockTag = (pattern, line)=>{
        const m = $9daa05e285c504d2$export$4659b591c19bdf3d($9daa05e285c504d2$export$185802fd694ee1f5(pattern, 1), line);
        if (m != null) {
            if ($60035ec1a4f58e59$export$dd1bc94b04021eeb(blockTags)) return true;
            else return $60035ec1a4f58e59$export$2344b14b097df817((m[1] || "").toLocaleLowerCase(), blockTags, {
                Equals: (x_7, y)=>x_7 === y
                ,
                GetHashCode: (x_7)=>$4261fbb19e0b4aac$export$b9b095ec8c02760b(x_7)
            });
        } else return false;
    };
    const beginsWithBlockStartTag = $4261fbb19e0b4aac$export$955fe82a9145db62(1, isBlockTag, [
        "^\\s*\u003c([\\w.-]+)"
    ]);
    const justBlockEndTag = $4261fbb19e0b4aac$export$955fe82a9145db62(1, isBlockTag, [
        "^\\s*\u003c/([\\w.-]+)\\s*\u003e"
    ]);
    const endsWithBlockTag = $4261fbb19e0b4aac$export$955fe82a9145db62(1, isBlockTag, [
        "([\\w.-]+)\u003e\\s*$"
    ]);
    return $6cf548609c1fb621$export$6322879f5a137539($6cf548609c1fb621$export$ac8dfd3a7ad06e80(otherParsers, (arg_1)=>{
        const f_1 = (lines_4)=>$6cf548609c1fb621$export$7fcae00e056f3102((tupledArg)=>$e89b9b7ee1760219$export$ba7ca0e7f111fc0b(tupledArg[0], tupledArg[1])
            , lines_4)
        ;
        let _arg4;
        const neList = $6cf548609c1fb621$export$8e02eae49deb618c((lines_3)=>$6cf548609c1fb621$export$3eb3d7d4289547fd((line_1)=>{
                if (justBlockEndTag(line_1)) return true;
                else return beginsWithBlockStartTag(line_1);
            }, lines_3)
        )(arg_1);
        _arg4 = $1cbdac383b1632f3$export$c28c8388be0ab31a($6cf548609c1fb621$export$8e02eae49deb618c($1cbdac383b1632f3$export$d6aec2285be45753((line_2)=>{
            if ($6f9339dcb7ad0d09$export$2344b14b097df817($9daa05e285c504d2$export$185802fd694ee1f5("([\"\\s]\u003e\\s*|  )$", 1), line_2)) return true;
            else return endsWithBlockTag(line_2);
        })), neList);
        return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_1(_arg4.fields[0]), $b9be9450bf7f24ec$export$871de8747c9eaa88(f_1, _arg4.fields[1]));
    }));
}


function $99598c93a066819c$var$splitBeforeTags(regex, matchParser, noMatchParser, settings, _arg1) {
    const outerHead = _arg1.fields[0];
    const prependRev = (_arg1_1, maybeRest)=>{
        const head = _arg1_1.fields[0];
        const nextRest = $cbf049927489a6e9$export$37721a79838ca038($cbf049927489a6e9$export$871de8747c9eaa88((neList)=>$1cbdac383b1632f3$export$8327ebbef2a0ba76(head, neList)
        , maybeRest), new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, head, $b9be9450bf7f24ec$export$6e22c362a0406a2c()));
        return $cbf049927489a6e9$export$37721a79838ca038($cbf049927489a6e9$export$871de8747c9eaa88((next)=>prependRev(next, nextRest)
        , $1cbdac383b1632f3$export$88e0dae599377b39(_arg1_1.fields[1])), nextRest);
    };
    const loop = (tagMatch_mut, buffer_mut, maybeOutput_mut, lines_mut)=>{
        loop: while(true){
            const tagMatch = tagMatch_mut, buffer = buffer_mut, maybeOutput = maybeOutput_mut, lines = lines_mut;
            const parser = tagMatch != null ? $4261fbb19e0b4aac$export$955fe82a9145db62(2, matchParser, [
                tagMatch
            ]) : $4261fbb19e0b4aac$export$c3095a23b368d1f2(2, noMatchParser);
            const addBufferToOutput = ()=>prependRev(parser(settings)($1cbdac383b1632f3$export$edb1c8e715f3944e(buffer)), maybeOutput)
            ;
            if (!$b9be9450bf7f24ec$export$dd1bc94b04021eeb(lines)) {
                const headLine = $b9be9450bf7f24ec$export$5fd5031fecdacec3(lines);
                const m = $9daa05e285c504d2$export$4659b591c19bdf3d(regex, headLine);
                const patternInput = m != null ? [
                    m,
                    new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, headLine, $b9be9450bf7f24ec$export$6e22c362a0406a2c()),
                    addBufferToOutput()
                ] : [
                    tagMatch,
                    $1cbdac383b1632f3$export$8327ebbef2a0ba76(headLine, buffer),
                    maybeOutput
                ];
                tagMatch_mut = patternInput[0];
                buffer_mut = patternInput[1];
                maybeOutput_mut = patternInput[2];
                lines_mut = $b9be9450bf7f24ec$export$c01875f616615628(lines);
                continue loop;
            } else return $1cbdac383b1632f3$export$edb1c8e715f3944e(addBufferToOutput());
            break;
        }
    };
    return loop($9daa05e285c504d2$export$4659b591c19bdf3d(regex, outerHead), new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, outerHead, $b9be9450bf7f24ec$export$6e22c362a0406a2c()), void 0, _arg1.fields[1]);
}
const $99598c93a066819c$export$556703cd17c59554 = (()=>{
    const markdownWithInlineTags = (settings, arg)=>{
        let f_1, _arg4;
        return $fd65bf8312d3edef$export$199d64cd116a5491(settings)((f_1 = (s)=>$9daa05e285c504d2$export$77ad94ebf1c2b9ed(/{@[a-z]+.*?[^\\]}/gi, s, (delegateArg0)=>$575619fada8b5e88$export$77ad94ebf1c2b9ed(delegateArg0[0], " ", "\u0000")
            )
        , (_arg4 = arg, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_1(_arg4.fields[0]), $b9be9450bf7f24ec$export$871de8747c9eaa88(f_1, _arg4.fields[1])))));
    };
    return (settings_2)=>(arg40$0040)=>$99598c93a066819c$var$splitBeforeTags(/^\s*@(\w+)(.*)$/g, $4261fbb19e0b4aac$export$7864d59d01b6d6bf(3, (m_1)=>{
                if ($6f9339dcb7ad0d09$export$7ee701e290d9865(m_1[2] || "")) {
                    if ((m_1[1] || "").toLocaleLowerCase() === "example") return (_arg1)=>(arg_1)=>new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $e89b9b7ee1760219$export$b42b71375aae9155(arg_1), $b9be9450bf7f24ec$export$6e22c362a0406a2c())
                    ;
                    else return (settings_1)=>(arg20$0040)=>$6cf548609c1fb621$export$bf5ec3b7ee7adf63(markdownWithInlineTags, settings_1, arg20$0040)
                    ;
                } else return $4261fbb19e0b4aac$export$c3095a23b368d1f2(2, markdownWithInlineTags);
            }), markdownWithInlineTags, settings_2, arg40$0040)
    ;
})();
const $99598c93a066819c$export$5adb48440af68970 = (settings_2)=>(arg40$0040)=>$99598c93a066819c$var$splitBeforeTags(/^\s*(@nodoc|{@template|{@endtemplate|{@macro)/g, (_arg1, settings, arg20$0040)=>$6cf548609c1fb621$export$bf5ec3b7ee7adf63($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (settings_1)=>$fd65bf8312d3edef$export$199d64cd116a5491(settings_1)
            ), settings, arg20$0040)
        , $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (settings_3)=>$fd65bf8312d3edef$export$199d64cd116a5491(settings_3)
        ), settings_2, arg40$0040)
;
const $99598c93a066819c$export$facd2f5b1b9287bb = (settings_9)=>(arg40$0040_1)=>$99598c93a066819c$var$splitBeforeTags(/^\s*\.([A-Z]+)/g, $4261fbb19e0b4aac$export$7864d59d01b6d6bf(3, (m)=>{
            if ((m[1] || "") === "EXAMPLE") return (settings_6)=>(arg20$0040_2)=>$6cf548609c1fb621$export$bf5ec3b7ee7adf63((settings, lines)=>{
                        const trimmedExampleSection = (settings_5, arg20$0040_1)=>$6cf548609c1fb621$export$bf5ec3b7ee7adf63((settings_3, arg40$0040)=>$99598c93a066819c$var$splitBeforeTags(/^\s*PS C:\\>/g, (_arg1, settings_1, arg20$0040)=>$6cf548609c1fb621$export$bf5ec3b7ee7adf63($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (settings_2)=>$fd65bf8312d3edef$export$199d64cd116a5491(settings_2)
                                    ), settings_1, arg20$0040)
                                , $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (settings_4)=>$fd65bf8312d3edef$export$199d64cd116a5491(settings_4)
                                ), settings_3, arg40$0040)
                            , settings_5, arg20$0040_1)
                        ;
                        const matchValue = $1cbdac383b1632f3$export$afc1bfabebaf28a2((l)=>$6f9339dcb7ad0d09$export$7ee701e290d9865(l)
                        )(lines);
                        if (matchValue == null) return trimmedExampleSection(settings, lines);
                        else if (matchValue[1] != null) {
                            const blankLines_1 = matchValue[0];
                            const remaining = matchValue[1];
                            return $1cbdac383b1632f3$export$8327ebbef2a0ba76($e89b9b7ee1760219$export$b42b71375aae9155(blankLines_1), trimmedExampleSection(settings, remaining));
                        } else {
                            const blankLines = matchValue[0];
                            return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $e89b9b7ee1760219$export$b42b71375aae9155(blankLines), $b9be9450bf7f24ec$export$6e22c362a0406a2c());
                        }
                    }, settings_6, arg20$0040_2)
            ;
            else return (settings_8)=>(arg20$0040_3)=>$6cf548609c1fb621$export$bf5ec3b7ee7adf63((settings_7, arg)=>{
                        const tupledArg = $1d9202ebfdcd392e$export$119a28847c08b9b4("", false, (_arg2)=>"  "
                        , settings_7, arg);
                        return $e89b9b7ee1760219$export$db0233f52bd892a4($fd65bf8312d3edef$export$199d64cd116a5491(settings_7), tupledArg[0], tupledArg[1]);
                    }, settings_8, arg20$0040_3)
            ;
        }), $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (settings_10)=>$fd65bf8312d3edef$export$199d64cd116a5491(settings_10)
        ), settings_9, arg40$0040_1)
;
const $99598c93a066819c$export$c86f42639fd67153 = (settings)=>$fd65bf8312d3edef$export$199d64cd116a5491(settings)
;
function $99598c93a066819c$export$852f70b1f9fa7d6c(settings) {
    const indentedLines = $6cf548609c1fb621$export$2c93594b4c05c833($1cbdac383b1632f3$export$afc1bfabebaf28a2((line)=>line[0] === " " ? true : line[0] === "\t"
    ));
    return $6cf548609c1fb621$export$6322879f5a137539($6cf548609c1fb621$export$ac8dfd3a7ad06e80((lines_2)=>$6cf548609c1fb621$export$58518a0eb5d7e7ad($b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6cf548609c1fb621$export$c04a3c7d653d8aa0,
            indentedLines
        ]), lines_2)
    , (arg_1)=>{
        const f_1 = (arg)=>new $3583e200a8ea3134$export$d96a8827a60d6b69(1, [
                [
                    "",
                    ""
                ],
                arg
            ])
        ;
        const _arg4 = $6cf548609c1fb621$export$8e02eae49deb618c($6cf548609c1fb621$export$97415d645e8556b1(/  $/g))(arg_1);
        return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_1(_arg4.fields[0]), $b9be9450bf7f24ec$export$871de8747c9eaa88(f_1, _arg4.fields[1]));
    }));
}
const $99598c93a066819c$export$14d468532af654a8 = (()=>{
    const blank = (_arg1, arg)=>new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $e89b9b7ee1760219$export$b42b71375aae9155(arg), $b9be9450bf7f24ec$export$6e22c362a0406a2c())
    ;
    const blockTags = [
        "code",
        "description",
        "example",
        "exception",
        "include",
        "inheritdoc",
        "list",
        "listheader",
        "item",
        "para",
        "param",
        "permission",
        "remarks",
        "seealso",
        "summary",
        "term",
        "typeparam",
        "typeparamref",
        "returns",
        "value"
    ];
    return (settings)=>{
        const clo4 = $0f58927fbe9329c9$export$88aae633c7e0c3cb(blank, blank, blockTags, settings);
        return (arg40)=>clo4(arg40)
        ;
    };
})();



function $6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers, settings) {
    let parsers;
    return $6cf548609c1fb621$export$6322879f5a137539($6cf548609c1fb621$export$ac8dfd3a7ad06e80((parsers = $b9be9450bf7f24ec$export$871de8747c9eaa88($4261fbb19e0b4aac$export$880b1e43568f4c50((cp)=>$4261fbb19e0b4aac$export$955fe82a9145db62(1, cp, [
            settings
        ])
    , [
        [
            0,
            2
        ]
    ]), commentParsers), (lines)=>$6cf548609c1fb621$export$58518a0eb5d7e7ad(parsers, lines)
    ), (arg)=>new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, $e89b9b7ee1760219$export$b42b71375aae9155(arg), $b9be9450bf7f24ec$export$6e22c362a0406a2c())
    ));
}
const $6aba1ea4fa57179a$export$8724c8703a551e81 = (contentParser)=>(marker)=>(settings)=>$1d9202ebfdcd392e$export$5d080f5a78d4f5b3(contentParser, marker, settings)
;
const $6aba1ea4fa57179a$export$53f1d5ea8de3d7c = $6aba1ea4fa57179a$export$8724c8703a551e81($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (settings)=>$fd65bf8312d3edef$export$199d64cd116a5491(settings)
));
const $6aba1ea4fa57179a$export$919f4fcdb677e3e8 = (contentParser)=>(tupledArg)=>(tupledArg_1)=>(settings)=>$1d9202ebfdcd392e$export$f2ae215066c4835a(contentParser, tupledArg[0], tupledArg[1], tupledArg_1[0], tupledArg_1[1], settings)
;
const $6aba1ea4fa57179a$export$837bd02682cd3db9 = $6aba1ea4fa57179a$export$919f4fcdb677e3e8($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (settings)=>$fd65bf8312d3edef$export$199d64cd116a5491(settings)
))([
    "",
    ""
]);
const $6aba1ea4fa57179a$export$d38c04023a68972a = $6aba1ea4fa57179a$export$53f1d5ea8de3d7c("//");
const $6aba1ea4fa57179a$export$130e0a92a66f7aeb = $6aba1ea4fa57179a$export$919f4fcdb677e3e8($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (settings)=>$fd65bf8312d3edef$export$199d64cd116a5491(settings)
))([
    "*",
    ""
])([
    "/\\*",
    "\\*/"
]);
const $6aba1ea4fa57179a$export$affc3f9492e2e59c = [
    "/\\*[*!]",
    "\\*/"
];
const $6aba1ea4fa57179a$export$4858af50da75e0e8 = (()=>{
    const commentParsers = $b9be9450bf7f24ec$export$cb197a913f6bb809([
        $6aba1ea4fa57179a$export$919f4fcdb677e3e8($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$556703cd17c59554))([
            "*",
            " * "
        ])($6aba1ea4fa57179a$export$affc3f9492e2e59c),
        $6aba1ea4fa57179a$export$130e0a92a66f7aeb,
        $6aba1ea4fa57179a$export$8724c8703a551e81($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$556703cd17c59554))("//[/!]"),
        $6aba1ea4fa57179a$export$d38c04023a68972a
    ]);
    return (settings)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers, settings)
    ;
})();
const $6aba1ea4fa57179a$export$dbf350e5966cf602 = (()=>{
    const commentParsers = $b9be9450bf7f24ec$export$cb197a913f6bb809([
        $6aba1ea4fa57179a$export$919f4fcdb677e3e8($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$556703cd17c59554))([
            "*",
            " * "
        ])($6aba1ea4fa57179a$export$affc3f9492e2e59c),
        $6aba1ea4fa57179a$export$130e0a92a66f7aeb
    ]);
    return (settings)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers, settings)
    ;
})();
const $6aba1ea4fa57179a$export$c0bb0b647f701bb5 = (()=>{
    const blockTags = [];
    return (settings)=>{
        const clo4 = $0f58927fbe9329c9$export$88aae633c7e0c3cb($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8), $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$dbf350e5966cf602), blockTags, settings);
        return (arg40)=>clo4(arg40)
        ;
    };
})();
















const $e1761599b71ea525$var$newlineRegex = $9daa05e285c504d2$export$185802fd694ee1f5("(\\\\(\\\\\\*?|hline|newline|break|linebreak)(\\[.*?\\])?(\\{.*?\\})?\\s*$)|  $|([^\\\\]%)");
const $e1761599b71ea525$var$blockCommands = [
    "[",
    "begin",
    "item"
];
const $e1761599b71ea525$var$preserveEnvironments = $1d849aa8ef8b0f61$export$bb44f104e3c54dae((x)=>[
        x,
        x + "*"
    ]
, [
    "align",
    "alltt",
    "displaymath",
    "equation",
    "gather",
    "listing",
    "lstlisting",
    "math",
    "multline",
    "verbatim"
]);
const $e1761599b71ea525$var$preserveShortcuts = [
    "\\(",
    "\\[",
    "$",
    "$$"
];
function $e1761599b71ea525$var$takeFrom2ndLineUntil(otherParser, parser, _arg1) {
    const bufferToBlocks = (arg)=>parser($1cbdac383b1632f3$export$edb1c8e715f3944e(arg))
    ;
    const loopFrom2ndLine = (buffer_mut, lines_mut)=>{
        let arg00$0040;
        loopFrom2ndLine: while(true){
            const buffer = buffer_mut, lines = lines_mut;
            const matchValue = $1cbdac383b1632f3$export$88e0dae599377b39(lines);
            if (matchValue != null) {
                const tail = matchValue.fields[1];
                const head = matchValue.fields[0];
                const matchValue_1 = otherParser(matchValue);
                if (matchValue_1 != null) {
                    const tupledArg = matchValue_1;
                    return [
                        (arg00$0040 = bufferToBlocks(buffer), (b)=>$1cbdac383b1632f3$export$10d8903dec122b9d(arg00$0040, b)
                        )(tupledArg[0]),
                        tupledArg[1]
                    ];
                } else {
                    buffer_mut = $1cbdac383b1632f3$export$8327ebbef2a0ba76(head, buffer);
                    lines_mut = tail;
                    continue loopFrom2ndLine;
                }
            } else return [
                bufferToBlocks(buffer),
                void 0
            ];
            break;
        }
    };
    return loopFrom2ndLine(new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, _arg1.fields[0], $b9be9450bf7f24ec$export$6e22c362a0406a2c()), _arg1.fields[1]);
}
const $e1761599b71ea525$var$commandRegex = $9daa05e285c504d2$export$185802fd694ee1f5("^\\\\(\\[|[a-z]+)\\*?\\s*(?:(?:\\[.*?\\]|\\{(.*?)\\})\\s*)*");
function $e1761599b71ea525$var$findPreserveSection(beginMarker) {
    const endMarker = (beginMarker === "$" ? true : beginMarker === "$$") ? beginMarker : beginMarker === "\\(" ? "\\)" : beginMarker === "\\[" ? "\\]" : "\\end{" + beginMarker + "}";
    const checkLine = (line_mut, offset_mut)=>{
        checkLine: while(true){
            const line = line_mut, offset = offset_mut;
            const p = line.indexOf(endMarker, offset) | 0;
            if (p < 0) return false;
            else if (p === 0 ? true : $575619fada8b5e88$export$2a1422e7517645a9(line, p - 1) !== "\\") return true;
            else {
                line_mut = line;
                offset_mut = p + 1;
                continue checkLine;
            }
            break;
        }
    };
    const loop = (acc_mut, lines_mut)=>{
        loop: while(true){
            const acc = acc_mut, lines = lines_mut;
            if (!$b9be9450bf7f24ec$export$dd1bc94b04021eeb(lines)) {
                const tail = $b9be9450bf7f24ec$export$c01875f616615628(lines);
                const head = $b9be9450bf7f24ec$export$5fd5031fecdacec3(lines);
                if (checkLine(head, 0)) return [
                    $b9be9450bf7f24ec$export$66c1ae025e96b4bc($b9be9450bf7f24ec$export$8327ebbef2a0ba76(head, acc)),
                    tail
                ];
                else {
                    acc_mut = $b9be9450bf7f24ec$export$8327ebbef2a0ba76(head, acc);
                    lines_mut = tail;
                    continue loop;
                }
            } else return [
                $b9be9450bf7f24ec$export$66c1ae025e96b4bc(acc),
                $b9be9450bf7f24ec$export$6e22c362a0406a2c()
            ];
            break;
        }
    };
    return (_arg1)=>{
        const patternInput = loop($b9be9450bf7f24ec$export$6e22c362a0406a2c(), _arg1.fields[1]);
        return [
            new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, new $3583e200a8ea3134$export$d96a8827a60d6b69(2, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, _arg1.fields[0], patternInput[0])), $b9be9450bf7f24ec$export$6e22c362a0406a2c()),
            $1cbdac383b1632f3$export$88e0dae599377b39(patternInput[1])
        ];
    };
}
function $e1761599b71ea525$export$33196dcc2d39693(settings) {
    const command = (lines)=>{
        const lines_1 = lines;
        const headLine = lines_1.fields[0];
        const trimmedLine = headLine.trim();
        const cmdMatch = $9daa05e285c504d2$export$4659b591c19bdf3d($e1761599b71ea525$var$commandRegex, trimmedLine);
        const patternInput = cmdMatch != null ? [
            cmdMatch[1] || "",
            cmdMatch[2] || "",
            cmdMatch[0].length === trimmedLine.length
        ] : [
            "",
            "",
            false
        ];
        const cmdName = patternInput[0];
        const cmdArg = patternInput[1];
        if ($1d849aa8ef8b0f61$export$2344b14b097df817(trimmedLine, $e1761599b71ea525$var$preserveShortcuts, {
            Equals: (x, y)=>x === y
            ,
            GetHashCode: (x)=>$4261fbb19e0b4aac$export$b9b095ec8c02760b(x)
        })) return $e1761599b71ea525$var$findPreserveSection(trimmedLine)(lines_1);
        else if (cmdName === "begin" ? $1d849aa8ef8b0f61$export$2344b14b097df817(cmdArg, $e1761599b71ea525$var$preserveEnvironments, {
            Equals: (x_1, y_1)=>x_1 === y_1
            ,
            GetHashCode: (x_1)=>$4261fbb19e0b4aac$export$b9b095ec8c02760b(x_1)
        }) : false) return $e1761599b71ea525$var$findPreserveSection(cmdArg)(lines_1);
        else if (patternInput[2]) return [
            new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, new $3583e200a8ea3134$export$d96a8827a60d6b69(2, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, headLine, $b9be9450bf7f24ec$export$6e22c362a0406a2c())), $b9be9450bf7f24ec$export$6e22c362a0406a2c()),
            $1cbdac383b1632f3$export$88e0dae599377b39(lines_1.fields[1])
        ];
        else if (trimmedLine.indexOf("$$") === 0 ? true : $1d849aa8ef8b0f61$export$2344b14b097df817(cmdName, $e1761599b71ea525$var$blockCommands, {
            Equals: (x_4, y_2)=>x_4 === y_2
            ,
            GetHashCode: (x_4)=>$4261fbb19e0b4aac$export$b9b095ec8c02760b(x_4)
        })) return $e1761599b71ea525$var$takeFrom2ndLineUntil(otherParsers, plainText, lines_1);
        else return void 0;
    };
    const plainText = (arg_1)=>{
        const f = (arg)=>$6cf548609c1fb621$export$206f4d4d34012a5f(settings.reformat, $1cbdac383b1632f3$export$87b4ba1f7891f330((str_2)=>{
                const m = $9daa05e285c504d2$export$4659b591c19bdf3d(/[^\\]%/g, str_2);
                if (!(m != null)) return str_2;
                else {
                    const p = m.index + 2 | 0;
                    return $575619fada8b5e88$export$662d3818631fba36(str_2, 0, p) + $575619fada8b5e88$export$77ad94ebf1c2b9ed($575619fada8b5e88$export$662d3818631fba36(str_2, p), " ", "\u0000");
                }
            }, arg))
        ;
        const _arg4 = $6cf548609c1fb621$export$8e02eae49deb618c($6cf548609c1fb621$export$97415d645e8556b1($e1761599b71ea525$var$newlineRegex))(arg_1);
        return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f(_arg4.fields[0]), $b9be9450bf7f24ec$export$871de8747c9eaa88(f, _arg4.fields[1]));
    };
    let otherParsers;
    const parsers = $b9be9450bf7f24ec$export$cb197a913f6bb809([
        $6cf548609c1fb621$export$c04a3c7d653d8aa0,
        $1d9202ebfdcd392e$export$5d080f5a78d4f5b3($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (settings_1)=>$fd65bf8312d3edef$export$199d64cd116a5491(settings_1)
        ), "%", settings),
        command
    ]);
    otherParsers = (lines_3)=>$6cf548609c1fb621$export$58518a0eb5d7e7ad(parsers, lines_3)
    ;
    return $6cf548609c1fb621$export$6322879f5a137539($6cf548609c1fb621$export$ac8dfd3a7ad06e80(otherParsers, plainText));
}






function $840f1b1ae3c3949d$export$8557d5da1ec1c0d8(settings) {
    return $6cf548609c1fb621$export$6322879f5a137539($6cf548609c1fb621$export$ac8dfd3a7ad06e80($6cf548609c1fb621$export$c04a3c7d653d8aa0, (arg_1)=>{
        const f_1 = (lines)=>$6cf548609c1fb621$export$7fcae00e056f3102((tupledArg)=>$e89b9b7ee1760219$export$ba7ca0e7f111fc0b(tupledArg[0], tupledArg[1])
            , lines)
        ;
        let _arg4;
        const neList = $6cf548609c1fb621$export$8e02eae49deb618c((arg10$0040)=>$6cf548609c1fb621$export$a243c986f18047d7(settings.tabWidth, arg10$0040)
        )(arg_1);
        _arg4 = $1cbdac383b1632f3$export$c28c8388be0ab31a($6cf548609c1fb621$export$8e02eae49deb618c($6cf548609c1fb621$export$97415d645e8556b1(/  $/g)), neList);
        return new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_1(_arg4.fields[0]), $b9be9450bf7f24ec$export$871de8747c9eaa88(f_1, _arg4.fields[1]));
    }));
}
const $840f1b1ae3c3949d$var$configFile = (()=>{
    const commentParsers = $b9be9450bf7f24ec$export$439306a4dcaafbb9($6aba1ea4fa57179a$export$53f1d5ea8de3d7c("#"));
    return (settings)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers, settings)
    ;
})();
function $840f1b1ae3c3949d$var$lang(name, aliases, exts, parser) {
    return $044d4a9a60b1f629$export$e705f8b690e926d(name, aliases, exts, parser);
}
let $840f1b1ae3c3949d$export$d0d68bb9ed2c643d = $4261fbb19e0b4aac$export$2e17fe64ec9a826e($b9be9450bf7f24ec$export$cb197a913f6bb809([
    $840f1b1ae3c3949d$var$lang("AsciiDoc", "", ".adoc|.asciidoc", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (settings)=>$840f1b1ae3c3949d$export$8557d5da1ec1c0d8(settings)
    )),
    $840f1b1ae3c3949d$var$lang("AutoHotkey", "ahk", ".ahk", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$53f1d5ea8de3d7c(";"),
            $6aba1ea4fa57179a$export$130e0a92a66f7aeb
        ]);
        return (settings_1)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers, settings_1)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("Basic", "vb", ".vb", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_1 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$8724c8703a551e81($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$14d468532af654a8))("\u0027\u0027\u0027"),
            $6aba1ea4fa57179a$export$53f1d5ea8de3d7c("\u0027")
        ]);
        return (settings_2)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_1, settings_2)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("Batch file", "bat", ".bat", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_2 = $b9be9450bf7f24ec$export$439306a4dcaafbb9($6aba1ea4fa57179a$export$53f1d5ea8de3d7c("(?:rem|::)"));
        return (settings_3)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_2, settings_3)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("Bikeshed", "", ".bs", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (settings_4)=>$fd65bf8312d3edef$export$199d64cd116a5491(settings_4)
    )),
    $840f1b1ae3c3949d$var$lang("C/C++", "c|c++|cpp", ".c|.cpp|.h", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_3 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$919f4fcdb677e3e8($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$556703cd17c59554))([
                "*",
                " * "
            ])($6aba1ea4fa57179a$export$affc3f9492e2e59c),
            $6aba1ea4fa57179a$export$130e0a92a66f7aeb,
            $6aba1ea4fa57179a$export$8724c8703a551e81($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$14d468532af654a8))("///"),
            $6aba1ea4fa57179a$export$8724c8703a551e81($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$556703cd17c59554))("//!?"),
            $6aba1ea4fa57179a$export$d38c04023a68972a
        ]);
        return (settings_5)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_3, settings_5)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("C#", "csharp", ".cs", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_4 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$8724c8703a551e81($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$14d468532af654a8))("///"),
            $6aba1ea4fa57179a$export$d38c04023a68972a,
            $6aba1ea4fa57179a$export$919f4fcdb677e3e8($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$556703cd17c59554))([
                "*",
                " * "
            ])($6aba1ea4fa57179a$export$affc3f9492e2e59c),
            $6aba1ea4fa57179a$export$130e0a92a66f7aeb
        ]);
        return (settings_6)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_4, settings_6)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("Clojure", "", ".clj|.cljs|.cljc|.cljx|.edn", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_5 = $b9be9450bf7f24ec$export$439306a4dcaafbb9($6aba1ea4fa57179a$export$53f1d5ea8de3d7c(";+"));
        return (settings_7)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_5, settings_7)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("CMake", "", "CMakeLists.txt", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$configFile)),
    $840f1b1ae3c3949d$var$lang("CoffeeScript", "", ".coffee", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_6 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$919f4fcdb677e3e8($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$556703cd17c59554))([
                "*#",
                " * "
            ])([
                "###\\*",
                "###"
            ]),
            $6aba1ea4fa57179a$export$837bd02682cd3db9([
                "###",
                "###"
            ]),
            $6aba1ea4fa57179a$export$53f1d5ea8de3d7c("#")
        ]);
        return (settings_8)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_6, settings_8)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("Common Lisp", "commonlisp|lisp", ".lisp", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_7 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$53f1d5ea8de3d7c(";+"),
            $6aba1ea4fa57179a$export$837bd02682cd3db9([
                "#\\|",
                "\\|#"
            ])
        ]);
        return (settings_9)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_7, settings_9)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("Configuration", "properties", ".conf|.gitconfig", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$configFile)),
    $840f1b1ae3c3949d$var$lang("Crystal", "", ".cr", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_8 = $b9be9450bf7f24ec$export$439306a4dcaafbb9($6aba1ea4fa57179a$export$53f1d5ea8de3d7c("#"));
        return (settings_10)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_8, settings_10)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("CSS", "postcss", ".css|.pcss|.postcss", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$dbf350e5966cf602)),
    $840f1b1ae3c3949d$var$lang("D", "", ".d", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_9 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$8724c8703a551e81($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$c86f42639fd67153))("///"),
            $6aba1ea4fa57179a$export$d38c04023a68972a,
            $6aba1ea4fa57179a$export$919f4fcdb677e3e8($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$c86f42639fd67153))([
                "*",
                " * "
            ])($6aba1ea4fa57179a$export$affc3f9492e2e59c),
            $6aba1ea4fa57179a$export$919f4fcdb677e3e8($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$c86f42639fd67153))([
                "+",
                " + "
            ])([
                "/\\+\\+",
                "\\+/"
            ]),
            $6aba1ea4fa57179a$export$130e0a92a66f7aeb,
            $6aba1ea4fa57179a$export$837bd02682cd3db9([
                "/\\+",
                "\\+/"
            ])
        ]);
        return (settings_11)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_9, settings_11)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("Dart", "", ".dart", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_10 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$8724c8703a551e81($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$5adb48440af68970))("///"),
            $6aba1ea4fa57179a$export$d38c04023a68972a,
            $6aba1ea4fa57179a$export$919f4fcdb677e3e8($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$5adb48440af68970))([
                "*",
                " * "
            ])($6aba1ea4fa57179a$export$affc3f9492e2e59c),
            $6aba1ea4fa57179a$export$130e0a92a66f7aeb
        ]);
        return (settings_12)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_10, settings_12)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("Dockerfile", "docker", "dockerfile", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$configFile)),
    $840f1b1ae3c3949d$var$lang("Elixir", "", ".ex|.exs", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_11 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$53f1d5ea8de3d7c("#"),
            $6aba1ea4fa57179a$export$837bd02682cd3db9([
                "@(module|type|)doc\\s+\"\"\"",
                "\"\"\""
            ])
        ]);
        return (settings_13)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_11, settings_13)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("Elm", "", ".elm", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_12 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$53f1d5ea8de3d7c("--"),
            $6aba1ea4fa57179a$export$837bd02682cd3db9([
                "{-\\|?",
                "-}"
            ])
        ]);
        return (settings_14)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_12, settings_14)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("Emacs Lisp", "elisp|emacslisp", ".el", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_13 = $b9be9450bf7f24ec$export$439306a4dcaafbb9($6aba1ea4fa57179a$export$53f1d5ea8de3d7c(";+"));
        return (settings_15)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_13, settings_15)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("F#", "fsharp", ".fs|.fsx", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_14 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$8724c8703a551e81($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$14d468532af654a8))("///"),
            $6aba1ea4fa57179a$export$d38c04023a68972a,
            $6aba1ea4fa57179a$export$837bd02682cd3db9([
                "\\(\\*",
                "\\*\\)"
            ])
        ]);
        return (settings_16)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_14, settings_16)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("Go", "", ".go", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_15 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$919f4fcdb677e3e8($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (settings_17)=>$99598c93a066819c$export$852f70b1f9fa7d6c(settings_17)
            ))([
                "",
                ""
            ])($6aba1ea4fa57179a$export$affc3f9492e2e59c),
            $6aba1ea4fa57179a$export$130e0a92a66f7aeb,
            $6aba1ea4fa57179a$export$8724c8703a551e81($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (settings_18)=>$99598c93a066819c$export$852f70b1f9fa7d6c(settings_18)
            ))("//"),
            $6aba1ea4fa57179a$export$d38c04023a68972a
        ]);
        return (settings_19)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_15, settings_19)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("Git commit", "git-commit", "tag_editmsg", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (settings_20)=>$fd65bf8312d3edef$export$199d64cd116a5491(settings_20)
    )),
    $840f1b1ae3c3949d$var$lang("GraphQL", "", ".graphql|.gql", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_16 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$53f1d5ea8de3d7c("#"),
            $6aba1ea4fa57179a$export$837bd02682cd3db9([
                ".*?\"\"\"",
                "\"\"\""
            ])
        ]);
        return (settings_21)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_16, settings_21)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("Groovy", "", ".groovy", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8)),
    $840f1b1ae3c3949d$var$lang("Handlebars", "", ".handlebars|.hbs", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_17 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$837bd02682cd3db9([
                "{{!--",
                "--}}"
            ]),
            $6aba1ea4fa57179a$export$837bd02682cd3db9([
                "{{!",
                "}}"
            ]),
            $6aba1ea4fa57179a$export$837bd02682cd3db9([
                "\u003c!--",
                "--\u003e"
            ])
        ]);
        return (settings_22)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_17, settings_22)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("Haskell", "", ".hs", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_18 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$53f1d5ea8de3d7c("--"),
            $6aba1ea4fa57179a$export$837bd02682cd3db9([
                "{-\\s*\\|?",
                "-}"
            ])
        ]);
        return (settings_23)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_18, settings_23)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("HCL", "terraform", ".hcl|.tf", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_19 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$919f4fcdb677e3e8($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$556703cd17c59554))([
                "*",
                " * "
            ])($6aba1ea4fa57179a$export$affc3f9492e2e59c),
            $6aba1ea4fa57179a$export$130e0a92a66f7aeb,
            $6aba1ea4fa57179a$export$8724c8703a551e81($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$556703cd17c59554))("//[/!]"),
            $6aba1ea4fa57179a$export$d38c04023a68972a,
            $6aba1ea4fa57179a$export$53f1d5ea8de3d7c("#")
        ]);
        return (settings_24)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_19, settings_24)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("HTML", "erb|htmlx|svelte|vue", ".htm|.html|.svelte|.vue", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$c0bb0b647f701bb5)),
    $840f1b1ae3c3949d$var$lang("INI", "", ".ini", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_20 = $b9be9450bf7f24ec$export$439306a4dcaafbb9($6aba1ea4fa57179a$export$53f1d5ea8de3d7c("[#;]"));
        return (settings_25)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_20, settings_25)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("J", "", ".ijs", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_21 = $b9be9450bf7f24ec$export$439306a4dcaafbb9($6aba1ea4fa57179a$export$53f1d5ea8de3d7c("NB\\."));
        return (settings_26)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_21, settings_26)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("Java", "", ".java", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8)),
    $840f1b1ae3c3949d$var$lang("JavaScript", "javascriptreact|js", ".js|.jsx", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8)),
    $840f1b1ae3c3949d$var$lang("Julia", "", ".jl", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_22 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$53f1d5ea8de3d7c("#"),
            $6aba1ea4fa57179a$export$837bd02682cd3db9([
                ".*?\"\"\"",
                "\"\"\""
            ])
        ]);
        return (settings_27)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_22, settings_27)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("JSON", "json5|jsonc", ".json|.json5|.jsonc", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8)),
    $840f1b1ae3c3949d$var$lang("LaTeX", "tex", ".bbx|.cbx|.cls|.sty|.tex", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (settings_28)=>$e1761599b71ea525$export$33196dcc2d39693(settings_28)
    )),
    $840f1b1ae3c3949d$var$lang("Lean", "", ".lean", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_23 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$53f1d5ea8de3d7c("--"),
            $6aba1ea4fa57179a$export$837bd02682cd3db9([
                "/-[-!]?",
                "-/"
            ])
        ]);
        return (settings_29)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_23, settings_29)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("Less", "", ".less", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8)),
    $840f1b1ae3c3949d$var$lang("Lua", "", ".lua", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_24 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$837bd02682cd3db9([
                "--\\[\\[",
                "\\]\\]"
            ]),
            $6aba1ea4fa57179a$export$53f1d5ea8de3d7c("--")
        ]);
        return (settings_30)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_24, settings_30)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("Makefile", "make", "makefile", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$configFile)),
    $840f1b1ae3c3949d$var$lang("Markdown", "", ".md", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (settings_31)=>$fd65bf8312d3edef$export$199d64cd116a5491(settings_31)
    )),
    $840f1b1ae3c3949d$var$lang("MATLAB", "", "", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_25 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$53f1d5ea8de3d7c("%(?![%{}])"),
            $6aba1ea4fa57179a$export$837bd02682cd3db9([
                "%\\{",
                "%\\}"
            ])
        ]);
        return (settings_32)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_25, settings_32)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("Objective-C", "", ".m|.mm", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8)),
    $840f1b1ae3c3949d$var$lang("Octave", "", "", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_26 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$837bd02682cd3db9([
                "#\\{",
                "#\\}"
            ]),
            $6aba1ea4fa57179a$export$837bd02682cd3db9([
                "%\\{",
                "%\\}"
            ]),
            $6aba1ea4fa57179a$export$53f1d5ea8de3d7c("##?"),
            $6aba1ea4fa57179a$export$53f1d5ea8de3d7c("%[^!]")
        ]);
        return (settings_33)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_26, settings_33)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("Perl", "perl6", ".p6|.pl|.pl6|.pm|.pm6", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$configFile)),
    $840f1b1ae3c3949d$var$lang("PHP", "", ".php", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_27 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$919f4fcdb677e3e8($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$556703cd17c59554))([
                "*",
                " * "
            ])($6aba1ea4fa57179a$export$affc3f9492e2e59c),
            $6aba1ea4fa57179a$export$130e0a92a66f7aeb,
            $6aba1ea4fa57179a$export$53f1d5ea8de3d7c("(?://|#)")
        ]);
        return (settings_34)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_27, settings_34)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("PowerShell", "", ".ps1|.psd1|.psm1", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_28 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$8724c8703a551e81($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$facd2f5b1b9287bb))("#"),
            $6aba1ea4fa57179a$export$919f4fcdb677e3e8($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$facd2f5b1b9287bb))([
                "",
                ""
            ])([
                "\u003c#",
                "#\u003e"
            ])
        ]);
        return (settings_35)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_28, settings_35)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("Prolog", "", "", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_29 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$919f4fcdb677e3e8($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $99598c93a066819c$export$556703cd17c59554))([
                "*",
                " * "
            ])($6aba1ea4fa57179a$export$affc3f9492e2e59c),
            $6aba1ea4fa57179a$export$130e0a92a66f7aeb,
            $6aba1ea4fa57179a$export$53f1d5ea8de3d7c("%[%!]?")
        ]);
        return (settings_36)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_29, settings_36)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("Protobuf", "proto|proto3", ".proto", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (settings_37)=>$6aba1ea4fa57179a$export$a03f62af6e933a3($b9be9450bf7f24ec$export$439306a4dcaafbb9($6aba1ea4fa57179a$export$d38c04023a68972a), settings_37)
    )),
    $840f1b1ae3c3949d$var$lang("Pug", "jade", ".jade|.pug", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (settings_38)=>$6aba1ea4fa57179a$export$a03f62af6e933a3($b9be9450bf7f24ec$export$439306a4dcaafbb9($6aba1ea4fa57179a$export$d38c04023a68972a), settings_38)
    )),
    $840f1b1ae3c3949d$var$lang("PureScript", "", ".purs", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_32 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$53f1d5ea8de3d7c("--\\s*\\|"),
            $6aba1ea4fa57179a$export$53f1d5ea8de3d7c("--"),
            $6aba1ea4fa57179a$export$837bd02682cd3db9([
                "{-\\s*\\|?",
                "-}"
            ])
        ]);
        return (settings_39)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_32, settings_39)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("Python", "", ".py", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_33 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$53f1d5ea8de3d7c("#"),
            $6aba1ea4fa57179a$export$837bd02682cd3db9([
                ".*?\"\"\"",
                "\"\"\""
            ]),
            $6aba1ea4fa57179a$export$837bd02682cd3db9([
                ".*?\u0027\u0027\u0027",
                "\u0027\u0027\u0027"
            ])
        ]);
        return (settings_40)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_33, settings_40)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("R", "", ".r", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_34 = $b9be9450bf7f24ec$export$439306a4dcaafbb9($6aba1ea4fa57179a$export$53f1d5ea8de3d7c("#\u0027?"));
        return (settings_41)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_34, settings_41)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("reStructuredText", "", ".rst|.rest", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (settings_42)=>$840f1b1ae3c3949d$export$8557d5da1ec1c0d8(settings_42)
    )),
    $840f1b1ae3c3949d$var$lang("Ruby", "", ".rb", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_35 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$53f1d5ea8de3d7c("#"),
            $6aba1ea4fa57179a$export$837bd02682cd3db9([
                "=begin",
                "=end"
            ])
        ]);
        return (settings_43)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_35, settings_43)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("Rust", "", ".rs", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_36 = $b9be9450bf7f24ec$export$439306a4dcaafbb9($6aba1ea4fa57179a$export$53f1d5ea8de3d7c("\\/\\/(?:\\/|\\!)?"));
        return (settings_44)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_36, settings_44)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("SCSS", "", ".scss", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8)),
    $840f1b1ae3c3949d$var$lang("Scala", "", ".scala", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8)),
    $840f1b1ae3c3949d$var$lang("Scheme", "", ".scm|.ss|.sch|.rkt", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_37 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$53f1d5ea8de3d7c(";+"),
            $6aba1ea4fa57179a$export$837bd02682cd3db9([
                "#\\|",
                "\\|#"
            ])
        ]);
        return (settings_45)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_37, settings_45)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("Shaderlab", "", ".shader", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8)),
    $840f1b1ae3c3949d$var$lang("Shell script", "shellscript", ".sh", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$configFile)),
    $840f1b1ae3c3949d$var$lang("SQL", "postgres", ".pgsql|.psql|.sql", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (()=>{
        const commentParsers_38 = $b9be9450bf7f24ec$export$cb197a913f6bb809([
            $6aba1ea4fa57179a$export$53f1d5ea8de3d7c("--"),
            $6aba1ea4fa57179a$export$130e0a92a66f7aeb
        ]);
        return (settings_46)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(commentParsers_38, settings_46)
        ;
    })())),
    $840f1b1ae3c3949d$var$lang("Swift", "", ".swift", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8)),
    $840f1b1ae3c3949d$var$lang("Tcl", "", ".tcl", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$configFile)),
    $840f1b1ae3c3949d$var$lang("TOML", "", ".toml", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $840f1b1ae3c3949d$var$configFile)),
    $840f1b1ae3c3949d$var$lang("TypeScript", "typescriptreact", ".ts|.tsx", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8)),
    $840f1b1ae3c3949d$var$lang("Verilog/SystemVerilog", "systemverilog|verilog", ".sv|.svh|.v|.vh|.vl", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$4858af50da75e0e8)),
    $840f1b1ae3c3949d$var$lang("XAML", "", ".xaml", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$c0bb0b647f701bb5)),
    $840f1b1ae3c3949d$var$lang("XML", "xsl", ".xml|.xsl", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, $6aba1ea4fa57179a$export$c0bb0b647f701bb5)),
    $840f1b1ae3c3949d$var$lang("YAML", "", ".yaml|.yml", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (settings_47)=>$6cf548609c1fb621$export$6322879f5a137539($6cf548609c1fb621$export$ac8dfd3a7ad06e80($6aba1ea4fa57179a$export$53f1d5ea8de3d7c("#{1,3}")(settings_47), $840f1b1ae3c3949d$export$8557d5da1ec1c0d8(settings_47)))
    ))
]));
function $840f1b1ae3c3949d$var$maybeAddCustomLanguage(name, markers) {
    let f, _arg5;
    const escape = (arg00)=>$9daa05e285c504d2$export$4e7f196112fea3c5(arg00)
    ;
    const isInvalid = (arg00_1)=>$575619fada8b5e88$export$c8733ae29fb53302(arg00_1)
    ;
    const maybeLine = isInvalid(markers.line) ? void 0 : $6aba1ea4fa57179a$export$53f1d5ea8de3d7c(escape(markers.line));
    const list_1 = $b9be9450bf7f24ec$export$7877a478dd30fd3d((x_2)=>$4261fbb19e0b4aac$export$c3095a23b368d1f2(2, x_2)
    , $b9be9450bf7f24ec$export$cb197a913f6bb809([
        (isInvalid(markers.block[0]) ? true : isInvalid(markers.block[1])) ? void 0 : $6aba1ea4fa57179a$export$837bd02682cd3db9((f = escape, (_arg5 = markers.block, [
            f(_arg5[0]),
            f(_arg5[1])
        ]))),
        maybeLine
    ]));
    if ($b9be9450bf7f24ec$export$dd1bc94b04021eeb(list_1)) return void 0;
    else {
        const cl = $840f1b1ae3c3949d$var$lang(name, "", "", $4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (settings)=>$6aba1ea4fa57179a$export$a03f62af6e933a3(list_1, settings)
        ));
        $840f1b1ae3c3949d$export$d0d68bb9ed2c643d($b9be9450bf7f24ec$export$8327ebbef2a0ba76(cl, $840f1b1ae3c3949d$export$d0d68bb9ed2c643d()), true);
        return cl;
    }
}
function $840f1b1ae3c3949d$export$78262f0a7b75cf50(file) {
    const l = file.language.toLocaleLowerCase();
    if (!($575619fada8b5e88$export$c6e2787f63ca055d(l) ? true : l === "plaintext")) return $60035ec1a4f58e59$export$d65cb303b863e3bf((arg10$0040)=>$044d4a9a60b1f629$export$47bd1dafac8b8c58(l, arg10$0040)
    , $840f1b1ae3c3949d$export$d0d68bb9ed2c643d());
    else return $60035ec1a4f58e59$export$d65cb303b863e3bf((arg10$0040_1)=>$044d4a9a60b1f629$export$37f42de08e6cfa5e(file.path, arg10$0040_1)
    , $840f1b1ae3c3949d$export$d0d68bb9ed2c643d());
}
function $840f1b1ae3c3949d$export$2e6c959c16ff56b8(file) {
    return $cbf049927489a6e9$export$37721a79838ca038($cbf049927489a6e9$export$871de8747c9eaa88((arg00$0040)=>$044d4a9a60b1f629$export$9c9dbb6e7b91b5af(arg00$0040)
    , $cbf049927489a6e9$export$c90763f2293d7e67($840f1b1ae3c3949d$export$78262f0a7b75cf50(file), ()=>$840f1b1ae3c3949d$var$maybeAddCustomLanguage(file.language, file.getMarkers())
    )), (settings)=>$840f1b1ae3c3949d$export$8557d5da1ec1c0d8(settings)
    );
}























function $54420dd84792de0d$var$isWhitespace(cc) {
    if (cc !== 0 ? cc <= 32 : false) return true;
    else return cc === 12288;
}
function $54420dd84792de0d$export$b59aa2bf8bdd5430(charCode) {
    if ((charCode >= 12352 ? charCode <= 12543 : false) ? true : charCode >= 13312 ? charCode <= 19903 : false) return true;
    else if (charCode >= 19968) return charCode <= 40959;
    else return false;
}
const $54420dd84792de0d$export$19f7251a75f6b29f = $1d849aa8ef8b0f61$export$871de8747c9eaa88((value)=>value.charCodeAt(0)
, "})]?,;¢°′″‰℃、。｡､￠，．：；？！％・･ゝゞヽヾーァィゥェォッャュョヮヵヶぁぃぅぇぉっゃゅょゎゕゖㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿ々〻ｧｨｩｪｫｬｭｮｯｰ”〉》」』】〕）］｝｣".split(""), Uint16Array);
const $54420dd84792de0d$export$148708de43fd0cdf = $1d849aa8ef8b0f61$export$871de8747c9eaa88((value)=>value.charCodeAt(0)
, "([{‘“〈《「『【〔（［｛｢£¥＄￡￥＋".split(""), Uint16Array);
function $54420dd84792de0d$export$20b87730f55e1dec(c1, c2) {
    if ($54420dd84792de0d$var$isWhitespace(c1) ? true : $54420dd84792de0d$var$isWhitespace(c2)) return true;
    else if ($1d849aa8ef8b0f61$export$2344b14b097df817(c1, $54420dd84792de0d$export$148708de43fd0cdf, {
        Equals: (x, y)=>x === y
        ,
        GetHashCode: (x)=>$4261fbb19e0b4aac$export$a9844eb73de0a218(x)
    }) ? true : $1d849aa8ef8b0f61$export$2344b14b097df817(c2, $54420dd84792de0d$export$19f7251a75f6b29f, {
        Equals: (x_1, y_1)=>x_1 === y_1
        ,
        GetHashCode: (x_1)=>$4261fbb19e0b4aac$export$a9844eb73de0a218(x_1)
    })) return false;
    else if ($54420dd84792de0d$export$b59aa2bf8bdd5430(c1) ? true : $54420dd84792de0d$export$b59aa2bf8bdd5430(c2)) return true;
    else return false;
}
function $54420dd84792de0d$export$c0210628b8ec1aab(c1, c2) {
    if ($54420dd84792de0d$export$b59aa2bf8bdd5430(c1) ? true : $54420dd84792de0d$export$b59aa2bf8bdd5430(c2)) return false;
    else return true;
}
function $54420dd84792de0d$export$1f12e983147761a0(doubleSentenceSpacing, lines) {
    return $b9be9450bf7f24ec$export$533b26079ad0b4b((acc, line)=>{
        const stops = new Uint16Array([
            46,
            63,
            33
        ]);
        const acc_1 = acc.trimEnd();
        const accEnd = acc_1[acc_1.length - 1].charCodeAt(0);
        const space = (doubleSentenceSpacing ? $1d849aa8ef8b0f61$export$2344b14b097df817(accEnd, stops, {
            Equals: (x, y)=>x === y
            ,
            GetHashCode: (x)=>$4261fbb19e0b4aac$export$a9844eb73de0a218(x)
        }) : false) ? "  " : " ";
        if ($54420dd84792de0d$export$c0210628b8ec1aab(accEnd, line[0].charCodeAt(0))) return acc_1 + space + line;
        else return acc_1 + line;
    }, $1cbdac383b1632f3$export$effcdbd76139450(lines));
}
function $54420dd84792de0d$export$ed6703e98539aa2b(addLine, tabWidth, maxWidth, str) {
    const prefixWidth = (prefixes)=>$6f9339dcb7ad0d09$export$13c2f47aa8a3882d(tabWidth)($1cbdac383b1632f3$export$5fd5031fecdacec3(prefixes))
    ;
    const findBreakPos = (min_mut, p_mut)=>{
        findBreakPos: while(true){
            const min = min_mut, p = p_mut;
            if (p === min) return min | 0;
            else if ($54420dd84792de0d$export$20b87730f55e1dec(str[p - 1].charCodeAt(0), str[p].charCodeAt(0))) return p | 0;
            else {
                min_mut = min;
                p_mut = p - 1;
                continue findBreakPos;
            }
            break;
        }
    };
    const outputLine = (prefixes_1, pStart, pEnd)=>{
        let patternInput;
        const list_1 = prefixes_1;
        patternInput = [
            list_1.fields[0],
            $cbf049927489a6e9$export$37721a79838ca038($1cbdac383b1632f3$export$88e0dae599377b39(list_1.fields[1]), list_1)
        ];
        addLine(patternInput[0] + $575619fada8b5e88$export$77ad94ebf1c2b9ed(pEnd > pStart ? $575619fada8b5e88$export$662d3818631fba36(str, pStart, pEnd - pStart).trim() : $575619fada8b5e88$export$662d3818631fba36(str, pStart), "\u0000", " "));
        return patternInput[1];
    };
    const loop = (prefixes_2_mut, lineStart_mut, curWidth_mut, pStr_mut)=>{
        loop: while(true){
            const prefixes_2 = prefixes_2_mut, lineStart = lineStart_mut, curWidth = curWidth_mut, pStr = pStr_mut;
            if (pStr >= str.length) outputLine(prefixes_2, lineStart, 0);
            else {
                const charCode = str[pStr].charCodeAt(0);
                if (pStr === lineStart ? $54420dd84792de0d$var$isWhitespace(charCode) : false) {
                    prefixes_2_mut = prefixes_2;
                    lineStart_mut = lineStart + 1;
                    curWidth_mut = curWidth;
                    pStr_mut = pStr + 1;
                    continue loop;
                } else {
                    const newWidth = curWidth + $6f9339dcb7ad0d09$export$de9247834912d11c(tabWidth, curWidth, charCode) | 0;
                    if (newWidth <= maxWidth) {
                        prefixes_2_mut = prefixes_2;
                        lineStart_mut = lineStart;
                        curWidth_mut = newWidth;
                        pStr_mut = pStr + 1;
                        continue loop;
                    } else {
                        const breakPos = findBreakPos(lineStart, pStr) | 0;
                        if (breakPos <= lineStart) {
                            prefixes_2_mut = prefixes_2;
                            lineStart_mut = lineStart;
                            curWidth_mut = newWidth;
                            pStr_mut = pStr + 1;
                            continue loop;
                        } else {
                            const nextPrefixes_1 = outputLine(prefixes_2, lineStart, breakPos);
                            prefixes_2_mut = nextPrefixes_1;
                            lineStart_mut = breakPos;
                            curWidth_mut = prefixWidth(nextPrefixes_1);
                            pStr_mut = breakPos;
                            continue loop;
                        }
                    }
                }
            }
            break;
        }
    };
    return (prefixes_3)=>{
        loop(prefixes_3, 0, prefixWidth(prefixes_3), 0);
    };
}
class $54420dd84792de0d$export$8fd5d8cae2018caf {
    constructor(settings1){
        this.settings = settings1;
        this.startLine = 0;
        this.linesConsumed = 0;
        this.outputLines = $b9be9450bf7f24ec$export$6e22c362a0406a2c();
    }
}
function $54420dd84792de0d$export$f61d4fa4e4ae4a01() {
    return $64327df6a4d665f3$export$8547d5acd31924e("Wrapping.OutputBuffer", void 0, $54420dd84792de0d$export$8fd5d8cae2018caf);
}
function $54420dd84792de0d$export$30f38f058075571c(settings) {
    return new $54420dd84792de0d$export$8fd5d8cae2018caf(settings);
}
function $54420dd84792de0d$var$OutputBuffer__get_IsEmpty(_) {
    return $b9be9450bf7f24ec$export$dd1bc94b04021eeb(_.outputLines);
}
function $54420dd84792de0d$export$58febc67f35f03ed(this$, lines) {
    if ($54420dd84792de0d$var$OutputBuffer__get_IsEmpty(this$)) this$.startLine = this$.startLine + $3583e200a8ea3134$export$b7ddf5be20359725(new $3583e200a8ea3134$export$a79837a2b764b73d(0), lines) | 0;
    else $54420dd84792de0d$export$fe5a27f68faa6da2(this$, lines);
}
function $54420dd84792de0d$export$fe5a27f68faa6da2(_, lines) {
    let patternInput;
    const arg = [
        0,
        _.outputLines
    ];
    patternInput = $60035ec1a4f58e59$export$93e2b83da34ff82a((tupledArg, l)=>[
            tupledArg[0] + 1,
            $b9be9450bf7f24ec$export$8327ebbef2a0ba76(l, tupledArg[1])
        ]
    , [
        arg[0],
        arg[1]
    ], lines);
    _.linesConsumed = _.linesConsumed + patternInput[0] | 0;
    _.outputLines = patternInput[1];
}
function $54420dd84792de0d$export$c87d9c0ebd52af61(this$, lines) {
    let f_1, _arg4, f_6, _arg4_1;
    $54420dd84792de0d$export$258fe58438b50cd2(this$, (f_1 = (l)=>$6f9339dcb7ad0d09$export$42f65d3844869e20(l)
    , (_arg4 = lines, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_1(_arg4.fields[0]), $b9be9450bf7f24ec$export$871de8747c9eaa88(f_1, _arg4.fields[1])))), (f_6 = (l_1)=>$6f9339dcb7ad0d09$export$f587a4e4415f4276(l_1)
    , (_arg4_1 = lines, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, f_6(_arg4_1.fields[0]), $b9be9450bf7f24ec$export$871de8747c9eaa88(f_6, _arg4_1.fields[1])))));
}
function $54420dd84792de0d$export$258fe58438b50cd2(_, prefixes, contents) {
    $54420dd84792de0d$export$ed6703e98539aa2b((line)=>{
        _.outputLines = $b9be9450bf7f24ec$export$8327ebbef2a0ba76(line, _.outputLines);
    }, _.settings.tabWidth, _.settings.column > 0 ? _.settings.column : 2147483647, $54420dd84792de0d$export$1f12e983147761a0(_.settings.doubleSentenceSpacing, contents))(prefixes);
    _.linesConsumed = _.linesConsumed + $3583e200a8ea3134$export$b7ddf5be20359725(new $3583e200a8ea3134$export$a79837a2b764b73d(0), contents) | 0;
}
function $54420dd84792de0d$export$a063593adec9431c(_) {
    return new $2c0e5be185a9291c$export$6ed0965c9443aaa6(_.startLine, _.startLine + _.linesConsumed - 1, $b9be9450bf7f24ec$export$45b10814cc054894($b9be9450bf7f24ec$export$66c1ae025e96b4bc(_.outputLines)), []);
}



class $f76db8779581d766$var$LineRange extends $52d096336d1d74e9$export$5b163c6d120341e7 {
    constructor(s1, e1){
        super();
        this.s = s1 | 0;
        this.e = e1 | 0;
    }
}
function $f76db8779581d766$var$LineRange$reflection() {
    return $64327df6a4d665f3$export$8547d5acd31924e("Selections.LineRange", void 0, $f76db8779581d766$var$LineRange, $64327df6a4d665f3$export$8547d5acd31924e("System.ValueType"));
}
function $f76db8779581d766$var$LineRange_$ctor_Z37302880(s, e) {
    return new $f76db8779581d766$var$LineRange(s, e);
}
function $f76db8779581d766$var$LineRange__get_startLine(_) {
    return _.s;
}
function $f76db8779581d766$var$LineRange__get_endLine(_) {
    return _.e;
}
function $f76db8779581d766$var$LineRange__get_length(x) {
    return $4261fbb19e0b4aac$export$8960430cfd85939f((x_1, y)=>$4261fbb19e0b4aac$export$591cc4a8025fba16(x_1, y)
    , $f76db8779581d766$var$LineRange__get_endLine(x) - $f76db8779581d766$var$LineRange__get_startLine(x) + 1, 0);
}
function $f76db8779581d766$var$LineRange__get_isEmpty(x) {
    return $f76db8779581d766$var$LineRange__get_endLine(x) < $f76db8779581d766$var$LineRange__get_startLine(x);
}
function $f76db8779581d766$var$LineRange_fromStartEnd(startLine, endLine) {
    return $f76db8779581d766$var$LineRange_$ctor_Z37302880(startLine, endLine);
}
function $f76db8779581d766$var$LineRange_fromStartLength(startLine, length) {
    return $f76db8779581d766$var$LineRange_$ctor_Z37302880(startLine, startLine + length - 1);
}
function $f76db8779581d766$var$LineRange_toInfinity_Z524259A4(startLine) {
    return $f76db8779581d766$var$LineRange_$ctor_Z37302880(startLine, 2147483646);
}
function $f76db8779581d766$var$LineRange_fromSelection_209E7828(s) {
    const startLine = $4261fbb19e0b4aac$export$96ec731ed4dcb222((x, y)=>$4261fbb19e0b4aac$export$591cc4a8025fba16(x, y)
    , s.active.line, s.anchor.line) | 0;
    const endLine = $4261fbb19e0b4aac$export$8960430cfd85939f((x_1, y_1)=>$4261fbb19e0b4aac$export$591cc4a8025fba16(x_1, y_1)
    , s.active.line, s.anchor.line) | 0;
    if (startLine === endLine ? s.anchor.character === s.active.character : false) return $f76db8779581d766$var$LineRange_$ctor_Z37302880(startLine, startLine - 1);
    else if (s.active.line > s.anchor.line ? s.active.character === 0 : false) return $f76db8779581d766$var$LineRange_$ctor_Z37302880(s.anchor.line, s.active.line - 1);
    else if (s.anchor.line > s.active.line ? s.anchor.character === 0 : false) return $f76db8779581d766$var$LineRange_$ctor_Z37302880(s.active.line, s.anchor.line - 1);
    else return $f76db8779581d766$var$LineRange_$ctor_Z37302880(startLine, endLine);
}
function $f76db8779581d766$var$LineRange__get_shiftStartDown(x) {
    if ($f76db8779581d766$var$LineRange__get_endLine(x) > $f76db8779581d766$var$LineRange__get_startLine(x)) return $f76db8779581d766$var$LineRange_$ctor_Z37302880($f76db8779581d766$var$LineRange__get_startLine(x) + 1, $f76db8779581d766$var$LineRange__get_endLine(x));
    else return void 0;
}
function $f76db8779581d766$var$LineRange__get_shiftEndUp(x) {
    if ($f76db8779581d766$var$LineRange__get_endLine(x) > $f76db8779581d766$var$LineRange__get_startLine(x)) return $f76db8779581d766$var$LineRange_$ctor_Z37302880($f76db8779581d766$var$LineRange__get_startLine(x), $f76db8779581d766$var$LineRange__get_endLine(x) - 1);
    else return void 0;
}
function $f76db8779581d766$var$intersects(r1_mut, r2_mut) {
    intersects: while(true){
        const r1 = r1_mut, r2 = r2_mut;
        if ($f76db8779581d766$var$LineRange__get_isEmpty(r2)) {
            r1_mut = r2;
            r2_mut = r1;
            continue intersects;
        } else if ($f76db8779581d766$var$LineRange__get_isEmpty(r1)) {
            if ($f76db8779581d766$var$LineRange__get_startLine(r1) >= $f76db8779581d766$var$LineRange__get_startLine(r2)) return $f76db8779581d766$var$LineRange__get_startLine(r1) <= $f76db8779581d766$var$LineRange__get_endLine(r2);
            else return false;
        } else return $4261fbb19e0b4aac$export$8960430cfd85939f((x, y)=>$4261fbb19e0b4aac$export$591cc4a8025fba16(x, y)
        , $f76db8779581d766$var$LineRange__get_startLine(r1), $f76db8779581d766$var$LineRange__get_startLine(r2)) <= $4261fbb19e0b4aac$export$96ec731ed4dcb222((x_1, y_1)=>$4261fbb19e0b4aac$export$591cc4a8025fba16(x_1, y_1)
        , $f76db8779581d766$var$LineRange__get_endLine(r1), $f76db8779581d766$var$LineRange__get_endLine(r2));
        break;
    }
}
const $f76db8779581d766$var$normalizeRanges = (arg_1)=>{
    let tupledArg_1, xs_1;
    return $b9be9450bf7f24ec$export$66c1ae025e96b4bc((tupledArg_1 = $60035ec1a4f58e59$export$93e2b83da34ff82a($4261fbb19e0b4aac$export$7864d59d01b6d6bf(2, (tupledArg)=>{
        const mCur = tupledArg[0];
        const output = tupledArg[1];
        return (next)=>{
            let arg10;
            if (mCur != null) {
                const cur = mCur;
                if ($f76db8779581d766$var$LineRange__get_endLine(cur) >= $f76db8779581d766$var$LineRange__get_startLine(next)) {
                    if ($f76db8779581d766$var$LineRange__get_isEmpty(cur) ? $f76db8779581d766$var$LineRange__get_isEmpty(next) : false) return [
                        next,
                        output
                    ];
                    else if ($f76db8779581d766$var$LineRange__get_isEmpty(cur)) {
                        const matchValue = $f76db8779581d766$var$LineRange__get_shiftStartDown(next);
                        return matchValue != null ? [
                            matchValue,
                            $b9be9450bf7f24ec$export$8327ebbef2a0ba76(cur, output)
                        ] : [
                            cur,
                            output
                        ];
                    } else if ($f76db8779581d766$var$LineRange__get_isEmpty(next)) {
                        const matchValue_1 = $f76db8779581d766$var$LineRange__get_shiftEndUp(cur);
                        return matchValue_1 != null ? [
                            next,
                            $b9be9450bf7f24ec$export$8327ebbef2a0ba76(matchValue_1, output)
                        ] : [
                            next,
                            output
                        ];
                    } else return [
                        (arg10 = $4261fbb19e0b4aac$export$8960430cfd85939f((x, y)=>$4261fbb19e0b4aac$export$591cc4a8025fba16(x, y)
                        , $f76db8779581d766$var$LineRange__get_endLine(cur), $f76db8779581d766$var$LineRange__get_endLine(next)) | 0, $f76db8779581d766$var$LineRange_fromStartEnd($f76db8779581d766$var$LineRange__get_startLine(cur), arg10)),
                        output
                    ];
                } else return [
                    next,
                    $b9be9450bf7f24ec$export$8327ebbef2a0ba76(cur, output)
                ];
            } else return [
                next,
                output
            ];
        };
    }), [
        void 0,
        $b9be9450bf7f24ec$export$6e22c362a0406a2c()
    ], arg_1), (xs_1 = tupledArg_1[1], $cbf049927489a6e9$export$37721a79838ca038($cbf049927489a6e9$export$871de8747c9eaa88((x_1)=>$b9be9450bf7f24ec$export$8327ebbef2a0ba76(x_1, xs_1)
    , tupledArg_1[0]), xs_1))));
};
class $f76db8779581d766$export$a73a08cf4ec58319 extends $52d096336d1d74e9$export$5b163c6d120341e7 {
    constructor(startLine, originalLines1, blocks1){
        super();
        this.startLine = startLine | 0;
        this.originalLines = originalLines1;
        this.blocks = blocks1;
    }
}
function $f76db8779581d766$export$a2920d406f476311() {
    return $64327df6a4d665f3$export$d341dea990ee4af6("Selections.ParseResult", [], $f76db8779581d766$export$a73a08cf4ec58319, ()=>[
            [
                "startLine",
                $64327df6a4d665f3$export$d5481a1dd0e3648a
            ],
            [
                "originalLines",
                $3583e200a8ea3134$export$4984d4827624d577($64327df6a4d665f3$export$36bbd56a39d3f734)
            ],
            [
                "blocks",
                $3583e200a8ea3134$export$4984d4827624d577($3583e200a8ea3134$export$3b141bb8ed484235())
            ]
        ]
    );
}
function $f76db8779581d766$var$processBlocks(output, settings, selections, parseResult) {
    const splitBlock = (n, block)=>{
        switch(block.tag){
            case 2:
                {
                    const tupledArg_1 = $1cbdac383b1632f3$export$b0d75975ac0be0e1(n, block.fields[0]);
                    const _arg2_1 = [
                        tupledArg_1[0],
                        tupledArg_1[1]
                    ];
                    return [
                        new $3583e200a8ea3134$export$d96a8827a60d6b69(2, _arg2_1[0]),
                        $cbf049927489a6e9$export$871de8747c9eaa88((arg0_1)=>new $3583e200a8ea3134$export$d96a8827a60d6b69(2, arg0_1)
                        , _arg2_1[1])
                    ];
                }
            case 0:
                throw new Error("Not going to split a comment");
            default:
                {
                    const pTail = block.fields[0][0][1];
                    const tupledArg = $1cbdac383b1632f3$export$b0d75975ac0be0e1(n, block.fields[0][1]);
                    const _arg2 = [
                        tupledArg[0],
                        tupledArg[1]
                    ];
                    return [
                        new $3583e200a8ea3134$export$d96a8827a60d6b69(1, [
                            [
                                block.fields[0][0][0],
                                pTail
                            ],
                            _arg2[0]
                        ]),
                        $cbf049927489a6e9$export$871de8747c9eaa88((ls_1)=>new $3583e200a8ea3134$export$d96a8827a60d6b69(1, [
                                [
                                    pTail,
                                    pTail
                                ],
                                ls_1
                            ])
                        , _arg2[1])
                    ];
                }
        }
    };
    const processWholeBlock = (length, origLines, block_1)=>{
        switch(block_1.tag){
            case 2:
                $54420dd84792de0d$export$fe5a27f68faa6da2(output, block_1.fields[0]);
                break;
            case 0:
                $60035ec1a4f58e59$export$c1a059043cc9c119((arg)=>{
                    processWholeBlock(1, origLines, arg);
                }, block_1.fields[0]);
                break;
            default:
                $54420dd84792de0d$export$258fe58438b50cd2(output, new $3583e200a8ea3134$export$d5a6d2063011a4a0(0, block_1.fields[0][0][0], $b9be9450bf7f24ec$export$439306a4dcaafbb9(block_1.fields[0][0][1])), block_1.fields[0][1]);
        }
        return [
            length,
            $1cbdac383b1632f3$export$b0d75975ac0be0e1(length, origLines)[1]
        ];
    };
    const skipLines = (count, lines_4)=>{
        let tupledArg_2, _arg2_2;
        return [
            count,
            (tupledArg_2 = $1cbdac383b1632f3$export$b0d75975ac0be0e1(count, lines_4), (_arg2_2 = [
                tupledArg_2[0],
                tupledArg_2[1]
            ], [
                $54420dd84792de0d$export$58febc67f35f03ed(output, _arg2_2[0]),
                _arg2_2[1]
            ]))[1]
        ];
    };
    const loop = (sels_mut, start_mut, _arg1_5_mut, origLines_1_mut)=>{
        loop: while(true){
            const sels = sels_mut, start = start_mut, _arg1_5 = _arg1_5_mut, origLines_1 = origLines_1_mut;
            const otherBlocks = _arg1_5.fields[1];
            const block_2 = _arg1_5.fields[0];
            const blockLength = $3583e200a8ea3134$export$24915dfbfb141eb4(new $3583e200a8ea3134$export$a79837a2b764b73d(0), block_2) | 0;
            const selsTouching = $b9be9450bf7f24ec$export$3dea766d36a8935f((s_1)=>$f76db8779581d766$var$LineRange__get_startLine(s_1) < start + blockLength
            , sels);
            const hasEmptySelection = $b9be9450bf7f24ec$export$f7e9f41ea797a17((s_2)=>$f76db8779581d766$var$LineRange__get_isEmpty(s_2)
            , selsTouching);
            let patternInput;
            const matchValue = $b9be9450bf7f24ec$export$1acbe849d0cb723e(selsTouching);
            if (matchValue != null) {
                const sel = matchValue;
                switch(block_2.tag){
                    case 2:
                        if (hasEmptySelection) patternInput = [
                            processWholeBlock(blockLength, origLines_1, block_2),
                            void 0
                        ];
                        else if ($f76db8779581d766$var$LineRange__get_startLine(sel) <= start) {
                            const splitAt = $4261fbb19e0b4aac$export$96ec731ed4dcb222((x_15, y_3)=>$4261fbb19e0b4aac$export$591cc4a8025fba16(x_15, y_3)
                            , $f76db8779581d766$var$LineRange__get_endLine(sel) - start + 1, blockLength) | 0;
                            const tupledArg_3 = splitBlock(splitAt, block_2);
                            const _arg2_3 = [
                                tupledArg_3[0],
                                tupledArg_3[1]
                            ];
                            patternInput = [
                                processWholeBlock(splitAt, origLines_1, _arg2_3[0]),
                                _arg2_3[1]
                            ];
                        } else {
                            const splitAt_1 = $f76db8779581d766$var$LineRange__get_startLine(sel) - start | 0;
                            const tupledArg_4 = splitBlock(splitAt_1, block_2);
                            patternInput = [
                                skipLines(splitAt_1, origLines_1),
                                tupledArg_4[1]
                            ];
                        }
                        break;
                    case 0:
                        if (hasEmptySelection ? settings.wholeComment : false) patternInput = [
                            processWholeBlock(blockLength, origLines_1, block_2),
                            void 0
                        ];
                        else {
                            $f76db8779581d766$var$processBlocks(output, settings, sels, new $f76db8779581d766$export$a73a08cf4ec58319(start, origLines_1, block_2.fields[0]));
                            patternInput = [
                                [
                                    blockLength,
                                    $1cbdac383b1632f3$export$b0d75975ac0be0e1(blockLength, origLines_1)[1]
                                ],
                                void 0
                            ];
                        }
                        break;
                    default:
                        if (hasEmptySelection) patternInput = [
                            processWholeBlock(blockLength, origLines_1, block_2),
                            void 0
                        ];
                        else if ($f76db8779581d766$var$LineRange__get_startLine(sel) <= start) {
                            const splitAt = $4261fbb19e0b4aac$export$96ec731ed4dcb222((x_15, y_3)=>$4261fbb19e0b4aac$export$591cc4a8025fba16(x_15, y_3)
                            , $f76db8779581d766$var$LineRange__get_endLine(sel) - start + 1, blockLength) | 0;
                            const tupledArg_3 = splitBlock(splitAt, block_2);
                            const _arg2_3 = [
                                tupledArg_3[0],
                                tupledArg_3[1]
                            ];
                            patternInput = [
                                processWholeBlock(splitAt, origLines_1, _arg2_3[0]),
                                _arg2_3[1]
                            ];
                        } else {
                            const splitAt_1 = $f76db8779581d766$var$LineRange__get_startLine(sel) - start | 0;
                            const tupledArg_4 = splitBlock(splitAt_1, block_2);
                            patternInput = [
                                skipLines(splitAt_1, origLines_1),
                                tupledArg_4[1]
                            ];
                        }
                }
            } else patternInput = [
                skipLines(blockLength, origLines_1),
                void 0
            ];
            const matchValue_1 = $1cbdac383b1632f3$export$88e0dae599377b39($cbf049927489a6e9$export$37721a79838ca038($cbf049927489a6e9$export$871de8747c9eaa88((b)=>$b9be9450bf7f24ec$export$8327ebbef2a0ba76(b, otherBlocks)
            , patternInput[1]), otherBlocks));
            if (matchValue_1 == null) ;
            else {
                const neNextBlocks = matchValue_1;
                const remaining = $f76db8779581d766$var$LineRange_toInfinity_Z524259A4(start + patternInput[0][0]);
                const nextSels = $b9be9450bf7f24ec$export$175dedd748069215((arg_1)=>!$f76db8779581d766$var$intersects(remaining, arg_1)
                , sels);
                if ($b9be9450bf7f24ec$export$dd1bc94b04021eeb(nextSels)) ;
                else {
                    sels_mut = nextSels;
                    start_mut = $f76db8779581d766$var$LineRange__get_startLine(remaining);
                    _arg1_5_mut = neNextBlocks;
                    origLines_1_mut = $cbf049927489a6e9$export$2ab9a8f9f1186f14(patternInput[0][1]);
                    continue loop;
                }
            }
            break;
        }
    };
    loop(selections, parseResult.startLine, parseResult.blocks, parseResult.originalLines);
}
function $f76db8779581d766$export$1fab492bedf0aecf(originalLines, selections, settings, blocks) {
    const selectionRanges = $f76db8779581d766$var$normalizeRanges($60035ec1a4f58e59$export$871de8747c9eaa88((arg00)=>$f76db8779581d766$var$LineRange_fromSelection_209E7828(arg00)
    , selections));
    const parseResult = new $f76db8779581d766$export$a73a08cf4ec58319(0, originalLines, blocks);
    const outputBuffer = $54420dd84792de0d$export$30f38f058075571c(settings);
    $f76db8779581d766$var$processBlocks(outputBuffer, settings, selectionRanges, parseResult);
    const inputRecord = $54420dd84792de0d$export$a063593adec9431c(outputBuffer);
    return new $2c0e5be185a9291c$export$6ed0965c9443aaa6(inputRecord.startLine, inputRecord.endLine, inputRecord.lines, Array.from(selections));
}





function $900a7436dc584467$export$2eecdacd3f587409(filePath, rulers) {
    return $fa430270a1cc70db$export$2eecdacd3f587409(filePath, rulers);
}
function $900a7436dc584467$export$e6ea2f8a2f53b195(docState, rulers) {
    return $fa430270a1cc70db$export$e6ea2f8a2f53b195(docState, rulers);
}
function $900a7436dc584467$export$5b4c6cdc0f868d63(docState) {
    $fa430270a1cc70db$export$5b4c6cdc0f868d63(docState);
}
const $900a7436dc584467$export$9b19ed2825079787 = new $2c0e5be185a9291c$export$a7566b2ec63e8493("", [
    "",
    ""
]);
function $900a7436dc584467$export$bcf2ee210a6ee362(file) {
    return $cbf049927489a6e9$export$37721a79838ca038($cbf049927489a6e9$export$871de8747c9eaa88((arg00$0040)=>$044d4a9a60b1f629$export$a68c0c8037b37d66(arg00$0040)
    , $840f1b1ae3c3949d$export$78262f0a7b75cf50(file)), null);
}
const $900a7436dc584467$export$d0d68bb9ed2c643d = $60035ec1a4f58e59$export$45b10814cc054894($60035ec1a4f58e59$export$871de8747c9eaa88((arg00$0040)=>$044d4a9a60b1f629$export$a68c0c8037b37d66(arg00$0040)
, $840f1b1ae3c3949d$export$d0d68bb9ed2c643d()));
function $900a7436dc584467$export$6cb9d9886761bf2b(file, settings, selections, getLine) {
    const parser = $840f1b1ae3c3949d$export$2e6c959c16ff56b8(file);
    const linesList = $1cbdac383b1632f3$export$da968afc9c9924d3($60035ec1a4f58e59$export$c48e357c1a89b78d((i)=>$cbf049927489a6e9$export$871de8747c9eaa88((l)=>[
                l,
                i + 1
            ]
        , $cbf049927489a6e9$export$e724fd86d7aa146b(getLine(i)))
    , 0));
    return $f76db8779581d766$export$1fab492bedf0aecf(linesList, selections, settings, parser(settings)(linesList));
}
function $900a7436dc584467$export$13c2f47aa8a3882d(tabSize, str) {
    return $6f9339dcb7ad0d09$export$13c2f47aa8a3882d(tabSize)(str);
}
function $900a7436dc584467$export$4fb73e9c1c14efbc(file, settings, newText, pos, getLine) {
    const noEdit = new $2c0e5be185a9291c$export$6ed0965c9443aaa6(0, 0, [], []);
    if ($575619fada8b5e88$export$c8733ae29fb53302(newText)) return noEdit;
    else if (settings.column < 1) return noEdit;
    else if (!$575619fada8b5e88$export$c6e2787f63ca055d(newText)) return noEdit;
    else {
        let patternInput;
        const matchValue = newText[0];
        switch(matchValue){
            case "\n":
                patternInput = [
                    true,
                    $575619fada8b5e88$export$662d3818631fba36(newText, 1)
                ];
                break;
            case "\r":
                patternInput = [
                    true,
                    $575619fada8b5e88$export$662d3818631fba36(newText, 2)
                ];
                break;
            default:
                patternInput = [
                    false,
                    ""
                ];
        }
        const enterPressed = patternInput[0];
        if (!enterPressed ? newText.length > 1 : false) return noEdit;
        else {
            const patternInput_1 = [
                pos.line,
                pos.character + (enterPressed ? 0 : newText.length)
            ];
            const line = patternInput_1[0] | 0;
            const char = patternInput_1[1] | 0;
            const lineText = getLine(line);
            if ($900a7436dc584467$export$13c2f47aa8a3882d(settings.tabWidth, $3583e200a8ea3134$export$66b1838215db0958(char, lineText)) <= settings.column) return noEdit;
            else {
                const edit = $900a7436dc584467$export$6cb9d9886761bf2b(file, settings, [
                    new $2c0e5be185a9291c$export$e7cee7ee8bea336b(new $2c0e5be185a9291c$export$13807d9ee5a34a42(line, 0), new $2c0e5be185a9291c$export$13807d9ee5a34a42(line, lineText.length))
                ], (i)=>{
                    if (i > line) return null;
                    else return getLine(i);
                });
                const afterPos = enterPressed ? new $2c0e5be185a9291c$export$13807d9ee5a34a42(line + 1, patternInput[1].length) : new $2c0e5be185a9291c$export$13807d9ee5a34a42(line, char);
                return new $2c0e5be185a9291c$export$6ed0965c9443aaa6(edit.startLine, edit.endLine, edit.lines, [
                    new $2c0e5be185a9291c$export$e7cee7ee8bea336b(afterPos, afterPos)
                ]);
            }
        }
    }
}


const $b892585b132b979f$export$2eecdacd3f587409 = $900a7436dc584467$export$2eecdacd3f587409;
const $b892585b132b979f$export$4fb73e9c1c14efbc = $900a7436dc584467$export$4fb73e9c1c14efbc;
const $b892585b132b979f$export$e6ea2f8a2f53b195 = $900a7436dc584467$export$e6ea2f8a2f53b195;
const $b892585b132b979f$export$9b19ed2825079787 = $900a7436dc584467$export$9b19ed2825079787;
const $b892585b132b979f$export$6cb9d9886761bf2b = $900a7436dc584467$export$6cb9d9886761bf2b;
const $b892585b132b979f$export$5b4c6cdc0f868d63 = $900a7436dc584467$export$5b4c6cdc0f868d63;





function $9f18fb2194e91655$export$2e2bcd8739ae039(oldLines, selections, edit) {
    if (!edit || !edit.lines.length) return selections;
    selections = selections.map((s)=>new $19YtE$vscode.Selection(s.anchor.line, s.anchor.character, s.active.line, s.active.character)
    );
    let runningLineGrowth = 0;
    const { startLine: startLine , endLine: endLine  } = edit, newStartLine = startLine + runningLineGrowth, oldLineCount = endLine - startLine + 1, diff = $19YtE$fastdiff(oldLines.join('\n'), edit.lines.join('\n')), newLineCount = edit.lines.length, rangeLineGrowth = newLineCount - oldLineCount;
    selections = selections.map((s)=>{
        const points = [
            s.anchor,
            s.active
        ].map((p)=>{
            // For selection points in the edit range, adjust from the diff
            if (p.line >= newStartLine && p.line <= endLine + runningLineGrowth) {
                const oldOffset = $9f18fb2194e91655$var$offsetAt(oldLines, p.translate(-newStartLine)), newOffset = $9f18fb2194e91655$var$newOffsetFromOld(oldOffset, diff);
                p = $9f18fb2194e91655$var$positionAt(edit.lines, newOffset).translate(newStartLine);
            } else if (p.line > endLine + runningLineGrowth) p = p.translate(rangeLineGrowth);
            return p;
        });
        return new $19YtE$vscode.Selection(points[0], points[1]);
    });
    runningLineGrowth += rangeLineGrowth;
    return selections;
}
/** Gets the new offset of a position, given and old offset and a diff between
 *  old and new text. */ function $9f18fb2194e91655$var$newOffsetFromOld(offset, diff) {
    // Count up chars from parts of the diff until we get to the original offset.
    // Keep count of the delta between old & new text from added & removed chars.
    let runningOffset = 0, delta = 0;
    for (let [operation, text] of diff){
        if (operation !== 1) {
            if (runningOffset + text.length > offset) break;
            runningOffset += text.length;
        }
        delta += operation * text.length;
    }
    return offset + delta;
}
function $9f18fb2194e91655$var$offsetAt(lines, position) {
    return lines.slice(0, position.line).reduce((sum, s)=>sum + s.length + 1
    , 0) + position.character;
}
function $9f18fb2194e91655$var$positionAt(lines, offset) {
    for(let i = 0; i < lines.length; i++){
        const lineLength = lines[i].length + 1;
        if (offset < lineLength) return new $19YtE$vscode.Position(i, offset);
        else offset -= lineLength;
    }
    throw new Error("Offset greater than text length.");
}







const $09996ecbe70ac43a$var$getConfig = (getText, path)=>{
    let config = {
        line: null,
        block: null
    };
    let warnings = [], error;
    try {
        const c = $19YtE$json5.parse(getText(path)).comments;
        if (c) {
            // 'line' must be a string or null.
            if (typeof c.lineComment === 'string') config.line = c.lineComment;
            else warnings.push("lineComment not a string.");
            // 'block' must be an array of 2 strings or null.
            if (Array.isArray(c.blockComment) && c.blockComment.length > 1) config.block = c.blockComment.slice(0, 2);
            else warnings.push("blockComment not a length-2 array.");
        } else warnings.push("No comments block found.");
    } catch (err) {
        error = err;
    }
    if (error || warnings.length) {
        console.info(`Inspecting JSON file ${path}`);
        if (error) console.error(error.message);
        warnings.forEach((w)=>console.warn(w)
        );
    }
    return config;
};
/** Iterates through all extensions and populates the cache with mappings for
 *  each found language id to a path to a configuration file. */ const $09996ecbe70ac43a$var$createCache = (exts)=>{
    const addConfigFiles = (cache, ext)=>{
        try {
            let obj = ext.packageJSON;
            if ((obj = obj.contributes) && (obj = obj.languages)) for (const l of obj){
                if (!l.id) continue;
                if (l.configuration) {
                    const confPath = $19YtE$path.join(ext.extensionPath, l.configuration);
                    cache[l.id] = confPath;
                }
            }
        } catch (err) {
            console.error(err.message);
        }
        return cache;
    };
    return exts.reduce(addConfigFiles, {
    });
};
function $09996ecbe70ac43a$export$2e2bcd8739ae039(exts, getFileText) {
    exts = exts || $19YtE$vscode.extensions.all;
    if (!exts.length) console.warn("`vscode.extensions.all` returned an empty array. Something is wrong.");
    getFileText = getFileText || ((p)=>$19YtE$fs.readFileSync(p)
    );
    let cache = null;
    return (lang)=>{
        cache = cache || $09996ecbe70ac43a$var$createCache(exts);
        if (typeof cache[lang] === 'string') {
            const config = $09996ecbe70ac43a$var$getConfig(getFileText, cache[lang]);
            cache[lang] = config.line || config.block ? {
                line: config.line,
                block: config.block || [
                    "",
                    ""
                ]
            } : $b892585b132b979f$export$9b19ed2825079787;
        } else if (!cache[lang]) cache[lang] = $b892585b132b979f$export$9b19ed2825079787;
        return cache[lang];
    };
}


const $0d70716f788862e9$var$getCustomMarkers = $09996ecbe70ac43a$export$2e2bcd8739ae039();
/** Converts a selection-like object to a vscode Selection object */ const $0d70716f788862e9$var$vscodeSelection = (s)=>new $19YtE$vscode.Selection(s.anchor.line, s.anchor.character, s.active.line, s.active.character)
;
function $0d70716f788862e9$export$dc51556a055f3c36(editor, edit) {
    if (!edit.lines.length) return Promise.resolve();
    const selections = edit.selections.map($0d70716f788862e9$var$vscodeSelection);
    const doc = editor.document;
    const docVersion = doc.version;
    const oldLines = Array(edit.endLine - edit.startLine + 1).fill(null).map((_, i)=>doc.lineAt(edit.startLine + i).text
    );
    const getDocRange = ()=>doc.validateRange(new $19YtE$vscode.Range(0, 0, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER))
    ;
    const wholeDocSelected = selections[0].isEqual(getDocRange());
    return editor.edit((editBuilder)=>{
        // Execution of this callback is delayed. Check the document is
        // still as we expect it.
        // todo: see if vscode already makes this check anyway
        if (doc.version !== docVersion) return false;
        const range = doc.validateRange(new $19YtE$vscode.Range(edit.startLine, 0, edit.endLine, Number.MAX_VALUE));
        // vscode takes care of converting to \r\n if necessary
        const text = edit.lines.join('\n');
        return editBuilder.replace(range, text);
    }).then((didEdit)=>{
        if (!didEdit) return;
        if (wholeDocSelected) {
            const wholeRange = getDocRange();
            editor.selection = new $19YtE$vscode.Selection(wholeRange.start, wholeRange.end);
        } else editor.selections = $9f18fb2194e91655$export$2e2bcd8739ae039(oldLines, selections, edit);
    });
}
function $0d70716f788862e9$export$7cc2a9afec49ab22(err) {
    console.error("====== Rewrap: Error ======");
    console.log(err);
    console.error("^^^^^^ Rewrap: Please report this (with a copy of the above lines) ^^^^^^\nat https://github.com/stkb/vscode-rewrap/issues");
    $19YtE$vscode.window.showInformationMessage("Sorry, there was an error in Rewrap. Go to: Help -> Toggle Developer Tools -> Console for more information.");
}
function $0d70716f788862e9$export$ee19c5e3e690f01a(document) {
    return (i)=>i < document.lineCount ? document.lineAt(i).text : null
    ;
}
function $0d70716f788862e9$export$6431655dacb1d83d(document) {
    const path = document.fileName, language = document.languageId;
    return {
        path: path,
        language: language,
        getMarkers: ()=>$0d70716f788862e9$var$getCustomMarkers(language)
    };
}




function $48bcbed0cf086a92$export$7b76d8f1f719850(editor, fn) {
    const settings = $48bcbed0cf086a92$export$55f23a6172c4a901(editor);
    return {
        column: fn(settings.columns.value),
        doubleSentenceSpacing: settings.doubleSentenceSpacing,
        wholeComment: settings.wholeComment,
        reformat: settings.reformat,
        tabWidth: settings.tabWidth
    };
}
function $48bcbed0cf086a92$export$55f23a6172c4a901(editor) {
    const docID = editor.document.uri.toString();
    const config = $19YtE$vscode.workspace.getConfiguration('', editor.document);
    const setting = (name)=>config.get(name)
    ;
    const checkTabSize = (size)=>!Number.isInteger(size) || size < 1 ? $48bcbed0cf086a92$var$warnings.tabSize(docID, size, 4) : size
    ;
    return {
        autoWrap: $48bcbed0cf086a92$var$getAutoWrapSettings(config, editor.document.languageId),
        columns: $48bcbed0cf086a92$var$getWrappingColumns(config, editor.document),
        doubleSentenceSpacing: setting('rewrap.doubleSentenceSpacing'),
        wholeComment: setting('rewrap.wholeComment'),
        reformat: setting('rewrap.reformat'),
        tabWidth: checkTabSize(editor.options.tabSize)
    };
}
const $48bcbed0cf086a92$var$getAutoWrapSettings = (config, lang)=>({
        enabled: $48bcbed0cf086a92$var$settingWithOrigin(config, lang)('rewrap.autoWrap.enabled'),
        notification: config.get('rewrap.autoWrap.notification')
    })
;
/** Gets an array of the available wrapping column(s) from the user's settings.
 */ function $48bcbed0cf086a92$var$getWrappingColumns(config, doc) {
    const checkColumn = (col)=>!Number.isInteger(col) || col < 1 ? $48bcbed0cf086a92$var$warnings.column(doc, col, 0) : col > 120 ? $48bcbed0cf086a92$var$warnings.largeColumn(doc, col, col) : col
    ;
    const get = $48bcbed0cf086a92$var$settingWithOrigin(config, doc.languageId);
    {
        const s = get('rewrap.wrappingColumn');
        if (s.value) return {
            ...s,
            value: [
                checkColumn(s.value)
            ]
        };
    }
    {
        const s = get('editor.rulers');
        const rValue = (r)=>checkColumn(r.column != undefined ? r.column : r)
        ;
        if (s.value && s.value[0]) return {
            ...s,
            value: s.value.map(rValue)
        };
    }
    {
        const s = get('editor.wordWrapColumn');
        return {
            ...s,
            value: [
                checkColumn(s.value)
            ]
        };
    }
}
const $48bcbed0cf086a92$var$settingWithOrigin = (config, lang)=>(name)=>{
        const scopes = [
            'default',
            'global',
            'workspace',
            'workspaceFolder'
        ];
        const info = config.inspect(name);
        for (let language of [
            lang,
            null
        ])for(let scope = 3; scope >= 0; scope--){
            const key = scopes[scope] + (language ? 'LanguageValue' : 'Value');
            if (info[key] !== undefined) return {
                name: name,
                value: info[key],
                origin: {
                    scope: scope,
                    language: language
                }
            };
        }
    }
;
/** Deals with writing warnings for invalid values. */ const $48bcbed0cf086a92$var$warnings = (()=>{
    // For each invalid value for each document, remember that we've warned so
    // that we don't flood the console with the same warnings
    let cache = {
    };
    const warn = (setting, msg)=>(doc, val, def)=>{
            const key = doc.uri.toString() + "|" + setting + "|" + val;
            if (!cache[key]) {
                cache[key] = true;
                console.warn("Rewrap: " + msg, val, def);
            }
            return def;
        }
    ;
    const column = warn('wrappingColumn', "wrapping column is set at '%o'. This will be treated as infinity.");
    const largeColumn = warn('wrappingColumn', "wrapping column is a rather large value (%d).");
    const tabSize = warn('tabSize', "tab size is an invalid value (%o). Using the default of (%d) instead.");
    return {
        column: column,
        largeColumn: largeColumn,
        tabSize: tabSize
    };
})();






/** Handler that's called if the text in the active editor changes */ const $3a2783b7990735e4$var$checkChange = (e)=>{
    // Make sure we're in the active document
    const editor = $19YtE$vscode.window.activeTextEditor;
    if (!editor || !e || editor.document !== e.document) return;
    const doc = e.document;
    // We only want to trigger on normal typing and input with IME's, not other
    // sorts of edits. With normal typing the range (text insertion point) and
    // selection will be both empty and equal to each other (the selection state
    // is still from *before* the edit). IME's make edits where the range is not
    // empty (as text is replaced), but the selection should still be empty. We
    // can also restrict it to single-line ranges (this filters out in
    // particular undo edits immediately after an auto-wrap).
    if (editor.selections.length != 1) return;
    if (!editor.selection.isEmpty) return;
    // There's more than one change if there were multiple selections,
    // or a whole line is moved up/down with alt+up/down
    if (e.contentChanges.length != 1) return;
    const { text: newText , range: range , rangeLength: rangeLength  } = e.contentChanges[0];
    if (rangeLength > 0) return;
    try {
        const file = $0d70716f788862e9$export$6431655dacb1d83d(doc);
        const settings = $48bcbed0cf086a92$export$7b76d8f1f719850(editor, (cs)=>$b892585b132b979f$export$2eecdacd3f587409(file.path, cs)
        );
        // maybeAutoWrap does more checks: that newText isn't empty, but is only
        // whitespace. Don't call this in a promise: it causes timing issues.
        const edit = $b892585b132b979f$export$4fb73e9c1c14efbc(file, settings, newText, range.start, $0d70716f788862e9$export$ee19c5e3e690f01a(doc));
        return $0d70716f788862e9$export$dc51556a055f3c36(editor, edit).then(null, $0d70716f788862e9$export$7cc2a9afec49ab22);
    } catch (err) {
        $0d70716f788862e9$export$7cc2a9afec49ab22(err);
    }
};
/** Notification that shows autowrap status in status bar */ var $3a2783b7990735e4$var$Notification;
(function(Notification) {
    const sbItem = $19YtE$vscode.window.createStatusBarItem(0, 101);
    const defaultColor = new $19YtE$vscode.ThemeColor('statusBar.foreground');
    let timeout // Used for the text notification that hides after a few secs
    ;
    function maybeShow(settings, override, wasToggled) {
        const hideAfterTimeout = ()=>{
            sbItem.hide();
            clearTimeout(timeout);
        };
        hideAfterTimeout();
        const enabled = settings.autoWrap.enabled;
        const onOffText = enabled.value != override ? "on" : "off";
        if (settings.autoWrap.notification === 'icon') {
            sbItem.tooltip = makeTooltip(settings, override);
            sbItem.text = "A$(word-wrap)";
            sbItem.color = override ? enabled.value ? 'gray' : 'orange' : defaultColor;
            enabled.value || override ? sbItem.show() : sbItem.hide();
        } else if (wasToggled) {
            sbItem.text = `Auto-wrap: ${onOffText}`;
            sbItem.show();
            timeout = setTimeout(hideAfterTimeout, 5000);
        }
    }
    Notification.maybeShow = maybeShow;
    function makeTooltip(settings, override) {
        function str({ name: name , value: value , origin: origin  }, vFn, text, showName = false) {
            const scopes = [
                "default",
                "user",
                "workspace",
                "workspace folder"
            ];
            const lang = origin.language ? `[${origin.language}] ` : "";
            const n = showName ? `'${name}' ` : "";
            text = text || name.split('.').slice[-1][0] + ":";
            return `${text} ${vFn(value)} (${lang}${n}${scopes[origin.scope]} setting)`;
        }
        const bStr = (x)=>x ? "on" : "off"
        ;
        const colsStr = (cols)=>cols.length > 1 ? "columns: " + cols : "column " + cols[0]
        ;
        const lines = [];
        const awEnabled = settings.autoWrap.enabled;
        if (override) {
            const onOffText = bStr(awEnabled.value != override);
            lines.push(`Auto-wrap toggled ${onOffText} for this document`);
            lines.push(`Normally: ${bStr(awEnabled.value)}`);
        } else lines.push(str(awEnabled, bStr, "Auto-wrap:"));
        lines.push(str(settings.columns, colsStr, "Wrapping at", true));
        return lines.join("\n");
    }
})($3a2783b7990735e4$var$Notification || ($3a2783b7990735e4$var$Notification = {
}));
let $3a2783b7990735e4$var$changeHook = null;
const $3a2783b7990735e4$var$setDocumentAutoWrap = (wsState, doToggle)=>async (editor)=>{
        const settings = $48bcbed0cf086a92$export$55f23a6172c4a901(editor), enabled = settings.autoWrap.enabled;
        // For every document, we store if autowrap has been toggled on or off. This
        // translates into a value for whether it has been overridden from the
        // current settings.
        const override = await async function() {
            const key = editor.document.uri + ':autoWrap.enabled';
            let val = wsState.get(key);
            if (doToggle) {
                val = val === undefined || val === enabled.value ? !enabled.value : undefined;
                await wsState.update(key, val);
            }
            return val !== undefined;
        }();
        $3a2783b7990735e4$var$Notification.maybeShow(settings, override, doToggle);
        const isOn = enabled.value != override;
        if (isOn && !$3a2783b7990735e4$var$changeHook) $3a2783b7990735e4$var$changeHook = $19YtE$vscode.workspace.onDidChangeTextDocument($3a2783b7990735e4$var$checkChange);
        else if (!isOn && $3a2783b7990735e4$var$changeHook) {
            $3a2783b7990735e4$var$changeHook.dispose();
            $3a2783b7990735e4$var$changeHook = null;
        }
    }
;
let $3a2783b7990735e4$var$editorListener, $3a2783b7990735e4$var$configListener;
function $3a2783b7990735e4$export$2e2bcd8739ae039(memento) {
    const onChangeEditor = $3a2783b7990735e4$var$setDocumentAutoWrap(memento, false);
    const ifActiveDoc = (fn)=>$19YtE$vscode.window.activeTextEditor && fn($19YtE$vscode.window.activeTextEditor)
    ;
    $3a2783b7990735e4$var$editorListener = $19YtE$vscode.window.onDidChangeActiveTextEditor((e)=>e && onChangeEditor(e)
    );
    $3a2783b7990735e4$var$configListener = $19YtE$vscode.workspace.onDidChangeConfiguration((e)=>ifActiveDoc((ed)=>e.affectsConfiguration('rewrap.autoWrap', ed.document) && onChangeEditor(ed)
        )
    );
    ifActiveDoc(onChangeEditor);
    return {
        editorToggle: $3a2783b7990735e4$var$setDocumentAutoWrap(memento, true)
    };
}


/** Function to activate the extension. */ async function $fad922d34226e04f$export$234c45b355edd85b(context) {
    const autoWrap = $3a2783b7990735e4$export$2e2bcd8739ae039(context.workspaceState);
    // Register the commands
    context.subscriptions.push($19YtE$vscode.commands.registerTextEditorCommand('rewrap.rewrapComment', rewrapCommentCommand), $19YtE$vscode.commands.registerTextEditorCommand('rewrap.rewrapCommentAt', rewrapCommentAtCommand), $19YtE$vscode.commands.registerTextEditorCommand('rewrap.toggleAutoWrap', autoWrap.editorToggle));
    /** Standard rewrap command */ function rewrapCommentCommand(editor) {
        $fad922d34226e04f$var$doWrap(editor).then(()=>$b892585b132b979f$export$5b4c6cdc0f868d63($fad922d34226e04f$var$getDocState(editor))
        );
    }
    let customWrappingColumn = 0;
    /** Does a rewrap, but first prompts for a custom wrapping column to use. */ async function rewrapCommentAtCommand(editor) {
        let columnStr = customWrappingColumn > 0 ? customWrappingColumn.toString() : undefined;
        columnStr = await $19YtE$vscode.window.showInputBox({
            prompt: "Enter a column number to wrap the selection to. Leave blank to remove wrapping instead.",
            value: columnStr,
            placeHolder: ""
        });
        if (columnStr === undefined) return; // The user pressed cancel
        customWrappingColumn = parseInt(columnStr) || 0;
        return $fad922d34226e04f$var$doWrap(editor, customWrappingColumn);
    }
}
/** Gets an object representing the state of the document and selections. When a
 *  standard wrap is done, the state is compared with the state after the last
 *  wrap. If they are equal, and there are multiple rulers for the document, the
 *  next ruler is used for wrapping instead. */ const $fad922d34226e04f$var$getDocState = (editor)=>{
    const doc = editor.document, selections = editor.selections;
    return {
        filePath: $0d70716f788862e9$export$6431655dacb1d83d(doc).path,
        version: doc.version,
        selections: selections
    };
};
/** Collects the information for a wrap from the editor, passes it to the
 *  wrapping code, and then applies the result to the document. If an edit
 *  is applied, returns an updated DocState object, else returns null.
 *  Takes an optional customColumn to wrap at.
 */ const $fad922d34226e04f$var$doWrap = (editor, customColumn)=>{
    const doc = editor.document;
    try {
        const docState = $fad922d34226e04f$var$getDocState(editor);
        const toCol = (cs)=>!isNaN(customColumn) ? customColumn : $b892585b132b979f$export$e6ea2f8a2f53b195(docState, cs)
        ;
        let settings = $48bcbed0cf086a92$export$7b76d8f1f719850(editor, toCol);
        const selections = editor.selections;
        const edit = $b892585b132b979f$export$6cb9d9886761bf2b($0d70716f788862e9$export$6431655dacb1d83d(doc), settings, selections, $0d70716f788862e9$export$ee19c5e3e690f01a(doc));
        return $0d70716f788862e9$export$dc51556a055f3c36(editor, edit).then(null, $0d70716f788862e9$export$7cc2a9afec49ab22);
    } catch (err) {
        $0d70716f788862e9$export$7cc2a9afec49ab22(err);
    }
};


