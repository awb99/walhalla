goog.provide('applied_science.js_interop');
applied_science.js_interop.unchecked_set = (function applied_science$js_interop$unchecked_set(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69714 = arguments.length;
var i__5770__auto___69715 = (0);
while(true){
if((i__5770__auto___69715 < len__5769__auto___69714)){
args__5775__auto__.push((arguments[i__5770__auto___69715]));

var G__69716 = (i__5770__auto___69715 + (1));
i__5770__auto___69715 = G__69716;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var G__69362_69718 = keyvals;
var vec__69363_69719 = G__69362_69718;
var seq__69364_69720 = cljs.core.seq(vec__69363_69719);
var first__69365_69721 = cljs.core.first(seq__69364_69720);
var seq__69364_69722__$1 = cljs.core.next(seq__69364_69720);
var k_69723 = first__69365_69721;
var first__69365_69724__$1 = cljs.core.first(seq__69364_69722__$1);
var seq__69364_69725__$2 = cljs.core.next(seq__69364_69722__$1);
var v_69726 = first__69365_69724__$1;
var keyvals_69727__$1 = seq__69364_69725__$2;
var G__69362_69745__$1 = G__69362_69718;
while(true){
var vec__69369_69747 = G__69362_69745__$1;
var seq__69370_69748 = cljs.core.seq(vec__69369_69747);
var first__69371_69749 = cljs.core.first(seq__69370_69748);
var seq__69370_69750__$1 = cljs.core.next(seq__69370_69748);
var k_69751__$1 = first__69371_69749;
var first__69371_69752__$1 = cljs.core.first(seq__69370_69750__$1);
var seq__69370_69753__$2 = cljs.core.next(seq__69370_69750__$1);
var v_69754__$1 = first__69371_69752__$1;
var keyvals_69755__$2 = seq__69370_69753__$2;
(obj[applied_science.js_interop.impl.wrap_key(k_69751__$1)] = v_69754__$1);

if(keyvals_69755__$2){
var G__69756 = keyvals_69755__$2;
G__69362_69745__$1 = G__69756;
continue;
} else {
}
break;
}

return obj;
}));

(applied_science.js_interop.unchecked_set.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.unchecked_set.cljs$lang$applyTo = (function (seq69350){
var G__69351 = cljs.core.first(seq69350);
var seq69350__$1 = cljs.core.next(seq69350);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69351,seq69350__$1);
}));

applied_science.js_interop.unchecked_get = (function applied_science$js_interop$unchecked_get(obj,k){
return (obj[applied_science.js_interop.impl.wrap_key(k)]);
});
/**
 * Returns the value mapped to key, not-found or nil if key not present.
 * 
 *   ```
 *   (j/get o :k)
 *   (j/get o .-k)
 *   ```
 */
applied_science.js_interop.get = (function applied_science$js_interop$get(var_args){
var G__69391 = arguments.length;
switch (G__69391) {
case 1:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$1 = (function (k){
return (function (obj){
var obj69394 = obj;
if((!((obj69394 == null)))){
return (obj69394[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
});
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$2 = (function (obj,k){
var obj69407 = obj;
if((!((obj69407 == null)))){
return (obj69407[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.get.cljs$core$IFn$_invoke$arity$3 = (function (obj,k,not_found){
var val__68907__auto__ = (function (){var obj69408 = obj;
if((!((obj69408 == null)))){
return (obj69408[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__68907__auto__)){
return not_found;
} else {
return val__68907__auto__;
}
}));

(applied_science.js_interop.get.cljs$lang$maxFixedArity = 3);

/**
 * Returns the value in a nested object structure, where ks is
 * a sequence of keys. Returns nil if the key is not present,
 * or the not-found value if supplied.
 * 
 * ```
 * (j/get-in o [:x :y] :fallback-value)
 * (j/get-in o [.-x .-y] :fallback-value)
 * ```
 */
applied_science.js_interop.get_in = (function applied_science$js_interop$get_in(var_args){
var G__69419 = arguments.length;
switch (G__69419) {
case 1:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$1 = (function (ks){
var ks__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks);
return (function (obj){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,ks__$1);
});
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$2 = (function (obj,ks){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$2(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
}));

(applied_science.js_interop.get_in.cljs$core$IFn$_invoke$arity$3 = (function (obj,ks,not_found){
return applied_science.js_interop.impl.get_in_STAR_.cljs$core$IFn$_invoke$arity$3(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),not_found);
}));

(applied_science.js_interop.get_in.cljs$lang$maxFixedArity = 3);

/**
 * Returns true if `obj` contains `k`.
 * 
 *   ```
 *   (j/contains? o :k)
 *   (j/contains? o .-k)
 *   ```
 */
applied_science.js_interop.contains_QMARK_ = (function applied_science$js_interop$contains_QMARK_(obj,k){
return applied_science.js_interop.impl.contains_QMARK__STAR_(obj,applied_science.js_interop.impl.wrap_key(k));
});
/**
 * Returns an object containing only those entries in `o` whose key is in `ks`.
 * 
 *   ```
 *   (j/select-keys o [:a :b :c])
 *   (j/select-keys o [.-a .-b .-c])
 *   ```
 */
applied_science.js_interop.select_keys = (function applied_science$js_interop$select_keys(obj,ks){
return applied_science.js_interop.impl.select_keys_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.ILookup}
*/
applied_science.js_interop.JSLookup = (function (obj){
this.obj = obj;
this.cljs$lang$protocol_mask$partition0$ = 33024;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
var obj69437 = self__.obj;
if((!((obj69437 == null)))){
return (obj69437[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
var val__68907__auto__ = (function (){var obj69442 = self__.obj;
if((!((obj69442 == null)))){
return (obj69442[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})();
if((void 0 === val__68907__auto__)){
return not_found;
} else {
return val__68907__auto__;
}
}));

(applied_science.js_interop.JSLookup.prototype.cljs$core$IDeref$_deref$arity$1 = (function (o){
var self__ = this;
var o__$1 = this;
return self__.obj;
}));

(applied_science.js_interop.JSLookup.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
}));

(applied_science.js_interop.JSLookup.cljs$lang$type = true);

(applied_science.js_interop.JSLookup.cljs$lang$ctorStr = "applied-science.js-interop/JSLookup");

(applied_science.js_interop.JSLookup.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"applied-science.js-interop/JSLookup");
}));

/**
 * Positional factory function for applied-science.js-interop/JSLookup.
 */
applied_science.js_interop.__GT_JSLookup = (function applied_science$js_interop$__GT_JSLookup(obj){
return (new applied_science.js_interop.JSLookup(obj));
});

/**
 * Wraps `obj` with an ILookup implementation, to support reading/destructuring. Does not support renamable keys.
 * 
 *   ```
 *   (let [{:keys [a b c]} (j/lookup o)]
 * ...)
 *   ```
 */
applied_science.js_interop.lookup = (function applied_science$js_interop$lookup(obj){
if(cljs.core.truth_(obj)){
return (new applied_science.js_interop.JSLookup(obj));
} else {
return null;
}
});
/**
 * Sets key-value pairs on `obj`, returns `obj`.
 * 
 *   ```
 *   (j/assoc! o :x 10)
 *   (j/assoc! o .-x 10)
 *   ```
 */
applied_science.js_interop.assoc_BANG_ = (function applied_science$js_interop$assoc_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69781 = arguments.length;
var i__5770__auto___69782 = (0);
while(true){
if((i__5770__auto___69782 < len__5769__auto___69781)){
args__5775__auto__.push((arguments[i__5770__auto___69782]));

var G__69784 = (i__5770__auto___69782 + (1));
i__5770__auto___69782 = G__69784;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(applied_science.js_interop.assoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,keyvals){
var obj__$1 = (((!((obj == null))))?obj:({}));
var G__69464 = keyvals;
var vec__69465 = G__69464;
var seq__69466 = cljs.core.seq(vec__69465);
var first__69467 = cljs.core.first(seq__69466);
var seq__69466__$1 = cljs.core.next(seq__69466);
var k = first__69467;
var first__69467__$1 = cljs.core.first(seq__69466__$1);
var seq__69466__$2 = cljs.core.next(seq__69466__$1);
var v = first__69467__$1;
var kvs = seq__69466__$2;
var G__69464__$1 = G__69464;
while(true){
var vec__69469 = G__69464__$1;
var seq__69470 = cljs.core.seq(vec__69469);
var first__69471 = cljs.core.first(seq__69470);
var seq__69470__$1 = cljs.core.next(seq__69470);
var k__$1 = first__69471;
var first__69471__$1 = cljs.core.first(seq__69470__$1);
var seq__69470__$2 = cljs.core.next(seq__69470__$1);
var v__$1 = first__69471__$1;
var kvs__$1 = seq__69470__$2;
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k__$1,v__$1], 0));

if(kvs__$1){
var G__69786 = kvs__$1;
G__69464__$1 = G__69786;
continue;
} else {
return obj__$1;
}
break;
}
}));

(applied_science.js_interop.assoc_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(applied_science.js_interop.assoc_BANG_.cljs$lang$applyTo = (function (seq69454){
var G__69455 = cljs.core.first(seq69454);
var seq69454__$1 = cljs.core.next(seq69454);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69455,seq69454__$1);
}));

/**
 * Mutates the value in a nested object structure, where ks is a
 *   sequence of keys and v is the new value. If any levels do not
 *   exist, objects will be created.
 * 
 *   ```
 *   (j/assoc-in! o [:x :y] 10)
 *   (j/assoc-in! o [.-x .-y] 10)
 *   ```
 */
applied_science.js_interop.assoc_in_BANG_ = (function applied_science$js_interop$assoc_in_BANG_(obj,ks,v){
return applied_science.js_interop.impl.assoc_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),v);
});
/**
 * 'Updates' a value in a JavaScript object, where k is a key and
 *   f is a function that will take the old value and any supplied
 *   args and return the new value, which replaces the old value.
 *   If the key does not exist, nil is passed as the old value.
 * 
 *   ```
 *   (j/update! o :a + 10)
 *   (j/update! o .-a + 10)
 *   ```
 */
applied_science.js_interop.update_BANG_ = (function applied_science$js_interop$update_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69787 = arguments.length;
var i__5770__auto___69788 = (0);
while(true){
if((i__5770__auto___69788 < len__5769__auto___69787)){
args__5775__auto__.push((arguments[i__5770__auto___69788]));

var G__69790 = (i__5770__auto___69788 + (1));
i__5770__auto___69788 = G__69790;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(applied_science.js_interop.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,f,args){
var obj__$1 = (((!((obj == null))))?obj:({}));
var k_STAR_ = applied_science.js_interop.impl.wrap_key(k);
var v = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,(obj__$1[k_STAR_]),args);
(obj__$1[k_STAR_] = v);

return obj__$1;
}));

(applied_science.js_interop.update_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_BANG_.cljs$lang$applyTo = (function (seq69485){
var G__69486 = cljs.core.first(seq69485);
var seq69485__$1 = cljs.core.next(seq69485);
var G__69487 = cljs.core.first(seq69485__$1);
var seq69485__$2 = cljs.core.next(seq69485__$1);
var G__69488 = cljs.core.first(seq69485__$2);
var seq69485__$3 = cljs.core.next(seq69485__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69486,G__69487,G__69488,seq69485__$3);
}));

/**
 * 'Updates' a value in a nested object structure, where ks is a
 *   sequence of keys and f is a function that will take the old value
 *   and any supplied args and return the new value, mutating the
 *   nested structure.  If any levels do not exist, objects will be
 *   created.
 * 
 *   ```
 *   (j/update-in! o [:x :y] + 10)
 *   (j/update-in! o [.-x .-y] + 10)
 *   ```
 */
applied_science.js_interop.update_in_BANG_ = (function applied_science$js_interop$update_in_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69812 = arguments.length;
var i__5770__auto___69813 = (0);
while(true){
if((i__5770__auto___69813 < len__5769__auto___69812)){
args__5775__auto__.push((arguments[i__5770__auto___69813]));

var G__69814 = (i__5770__auto___69813 + (1));
i__5770__auto___69813 = G__69814;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(applied_science.js_interop.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,f,args){
return applied_science.js_interop.impl.update_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),f,args);
}));

(applied_science.js_interop.update_in_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(applied_science.js_interop.update_in_BANG_.cljs$lang$applyTo = (function (seq69493){
var G__69494 = cljs.core.first(seq69493);
var seq69493__$1 = cljs.core.next(seq69493);
var G__69495 = cljs.core.first(seq69493__$1);
var seq69493__$2 = cljs.core.next(seq69493__$1);
var G__69496 = cljs.core.first(seq69493__$2);
var seq69493__$3 = cljs.core.next(seq69493__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69494,G__69495,G__69496,seq69493__$3);
}));

/**
 * Extends `obj` with the properties of one or more objects, overwriting
 * existing properties, moving left to right. Returns `obj`.
 * An empty starting object is provided if `obj` is nil.
 *   ```
 *   (j/extend! o other)
 *   (j/extend! o other #js{:x 1})
 *   ```
 *   Not IE6-friendly
 */
applied_science.js_interop.extend_BANG_ = (function applied_science$js_interop$extend_BANG_(var_args){
var G__69516 = arguments.length;
switch (G__69516) {
case 1:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___69816 = arguments.length;
var i__5770__auto___69817 = (0);
while(true){
if((i__5770__auto___69817 < len__5769__auto___69816)){
args_arr__5794__auto__.push((arguments[i__5770__auto___69817]));

var G__69818 = (i__5770__auto___69817 + (1));
i__5770__auto___69817 = G__69818;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((2)),(0),null));
return applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5795__auto__);

}
});

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return obj;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (obj,x){
var obj__$1 = (((!((obj == null))))?obj:({}));
if((!((x == null)))){
var seq__69526_69821 = cljs.core.seq(cljs.core.js_keys(x));
var chunk__69527_69822 = null;
var count__69528_69823 = (0);
var i__69529_69824 = (0);
while(true){
if((i__69529_69824 < count__69528_69823)){
var k_69825 = chunk__69527_69822.cljs$core$IIndexed$_nth$arity$2(null,i__69529_69824);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_69825,applied_science.js_interop.unchecked_get(x,k_69825)], 0));


var G__69826 = seq__69526_69821;
var G__69827 = chunk__69527_69822;
var G__69828 = count__69528_69823;
var G__69829 = (i__69529_69824 + (1));
seq__69526_69821 = G__69826;
chunk__69527_69822 = G__69827;
count__69528_69823 = G__69828;
i__69529_69824 = G__69829;
continue;
} else {
var temp__5804__auto___69830 = cljs.core.seq(seq__69526_69821);
if(temp__5804__auto___69830){
var seq__69526_69831__$1 = temp__5804__auto___69830;
if(cljs.core.chunked_seq_QMARK_(seq__69526_69831__$1)){
var c__5568__auto___69832 = cljs.core.chunk_first(seq__69526_69831__$1);
var G__69833 = cljs.core.chunk_rest(seq__69526_69831__$1);
var G__69834 = c__5568__auto___69832;
var G__69835 = cljs.core.count(c__5568__auto___69832);
var G__69836 = (0);
seq__69526_69821 = G__69833;
chunk__69527_69822 = G__69834;
count__69528_69823 = G__69835;
i__69529_69824 = G__69836;
continue;
} else {
var k_69838 = cljs.core.first(seq__69526_69831__$1);
applied_science.js_interop.unchecked_set.cljs$core$IFn$_invoke$arity$variadic(obj__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_69838,applied_science.js_interop.unchecked_get(x,k_69838)], 0));


var G__69839 = cljs.core.next(seq__69526_69831__$1);
var G__69840 = null;
var G__69841 = (0);
var G__69842 = (0);
seq__69526_69821 = G__69839;
chunk__69527_69822 = G__69840;
count__69528_69823 = G__69841;
i__69529_69824 = G__69842;
continue;
}
} else {
}
}
break;
}
} else {
}

return obj__$1;
}));

(applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,x,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(applied_science.js_interop.extend_BANG_,applied_science.js_interop.extend_BANG_.cljs$core$IFn$_invoke$arity$2(obj,x),more);
}));

/** @this {Function} */
(applied_science.js_interop.extend_BANG_.cljs$lang$applyTo = (function (seq69512){
var G__69513 = cljs.core.first(seq69512);
var seq69512__$1 = cljs.core.next(seq69512);
var G__69514 = cljs.core.first(seq69512__$1);
var seq69512__$2 = cljs.core.next(seq69512__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69513,G__69514,seq69512__$2);
}));

(applied_science.js_interop.extend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Appends `v` to `array` and returns the mutated array.
 * 
 *   ```
 *   (j/push! arr 10)
 *   ```
 */
applied_science.js_interop.push_BANG_ = (function applied_science$js_interop$push_BANG_(array,x){
var G__69555 = array;
G__69555.push(x);

return G__69555;
});
/**
 * Prepends `v` to `a` and returns the mutated array.
 * 
 *   ```
 *   (j/unshift! arr 10)
 *   ```
 */
applied_science.js_interop.unshift_BANG_ = (function applied_science$js_interop$unshift_BANG_(array,x){
var G__69564 = array;
G__69564.unshift(x);

return G__69564;
});
/**
 * Call function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/call o :someFunction arg1 arg2)
 *   (j/call o .-someFunction arg1 arg2)
 *   ```
 */
applied_science.js_interop.call = (function applied_science$js_interop$call(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69861 = arguments.length;
var i__5770__auto___69863 = (0);
while(true){
if((i__5770__auto___69863 < len__5769__auto___69861)){
args__5775__auto__.push((arguments[i__5770__auto___69863]));

var G__69864 = (i__5770__auto___69863 + (1));
i__5770__auto___69863 = G__69864;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop.call.cljs$core$IFn$_invoke$arity$variadic = (function (obj,k,args){
return (function (){var obj69580 = obj;
if((!((obj69580 == null)))){
return (obj69580[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,cljs.core.to_array(args));
}));

(applied_science.js_interop.call.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call.cljs$lang$applyTo = (function (seq69566){
var G__69567 = cljs.core.first(seq69566);
var seq69566__$1 = cljs.core.next(seq69566);
var G__69568 = cljs.core.first(seq69566__$1);
var seq69566__$2 = cljs.core.next(seq69566__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69567,G__69568,seq69566__$2);
}));

/**
 * Apply function `k` of `obj`, binding `this` to `obj`.
 * 
 *   ```
 *   (j/apply o :someFunction #js [arg1 arg2])
 *   (j/apply o .-someFunction #js [arg1 arg2])
 *   ```
 */
applied_science.js_interop.apply = (function applied_science$js_interop$apply(obj,k,arg_array){
return (function (){var obj69586 = obj;
if((!((obj69586 == null)))){
return (obj69586[applied_science.js_interop.impl.wrap_key(k)]);
} else {
return undefined;
}
})().apply(obj,arg_array);
});
/**
 * Call function nested at `path` with `args`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/call-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.call_in = (function applied_science$js_interop$call_in(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69868 = arguments.length;
var i__5770__auto___69869 = (0);
while(true){
if((i__5770__auto___69869 < len__5769__auto___69868)){
args__5775__auto__.push((arguments[i__5770__auto___69869]));

var G__69870 = (i__5770__auto___69869 + (1));
i__5770__auto___69869 = G__69870;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(applied_science.js_interop.call_in.cljs$core$IFn$_invoke$arity$variadic = (function (obj,ks,args){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),cljs.core.to_array(args));
}));

(applied_science.js_interop.call_in.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(applied_science.js_interop.call_in.cljs$lang$applyTo = (function (seq69596){
var G__69597 = cljs.core.first(seq69596);
var seq69596__$1 = cljs.core.next(seq69596);
var G__69598 = cljs.core.first(seq69596__$1);
var seq69596__$2 = cljs.core.next(seq69596__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69597,G__69598,seq69596__$2);
}));

/**
 * Apply function nested at `path` with `arg-array`, binding `this` to its parent object.
 * 
 *   ```
 *   (j/apply-in o [:x :someFunction] arg1 arg2)
 *   ```
 */
applied_science.js_interop.apply_in = (function applied_science$js_interop$apply_in(obj,ks,arg_array){
return applied_science.js_interop.impl.apply_in_STAR_(obj,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(applied_science.js_interop.impl.wrap_key,ks),arg_array);
});
/**
 * Create JavaScript object from an even number arguments representing
 * interleaved keys and values.
 * 
 * ```
 * (obj :a 1 :b 2 .-c 3 .-d 4)
 * ```
 */
applied_science.js_interop.obj = (function applied_science$js_interop$obj(var_args){
var args__5775__auto__ = [];
var len__5769__auto___69874 = arguments.length;
var i__5770__auto___69875 = (0);
while(true){
if((i__5770__auto___69875 < len__5769__auto___69874)){
args__5775__auto__.push((arguments[i__5770__auto___69875]));

var G__69876 = (i__5770__auto___69875 + (1));
i__5770__auto___69875 = G__69876;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(applied_science.js_interop.obj.cljs$core$IFn$_invoke$arity$variadic = (function (keyvals){
var obj = ({});
var seq__69633_69877 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),keyvals));
var chunk__69634_69878 = null;
var count__69635_69879 = (0);
var i__69636_69880 = (0);
while(true){
if((i__69636_69880 < count__69635_69879)){
var vec__69679_69900 = chunk__69634_69878.cljs$core$IIndexed$_nth$arity$2(null,i__69636_69880);
var k_69901 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69679_69900,(0),null);
var v_69902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69679_69900,(1),null);
var obj69682_69903 = obj;
var obj69683_69904 = (((!((obj69682_69903 == null))))?obj69682_69903:({}));
(obj69683_69904[applied_science.js_interop.impl.wrap_key(k_69901)] = v_69902);



var G__69905 = seq__69633_69877;
var G__69906 = chunk__69634_69878;
var G__69907 = count__69635_69879;
var G__69908 = (i__69636_69880 + (1));
seq__69633_69877 = G__69905;
chunk__69634_69878 = G__69906;
count__69635_69879 = G__69907;
i__69636_69880 = G__69908;
continue;
} else {
var temp__5804__auto___69909 = cljs.core.seq(seq__69633_69877);
if(temp__5804__auto___69909){
var seq__69633_69910__$1 = temp__5804__auto___69909;
if(cljs.core.chunked_seq_QMARK_(seq__69633_69910__$1)){
var c__5568__auto___69911 = cljs.core.chunk_first(seq__69633_69910__$1);
var G__69912 = cljs.core.chunk_rest(seq__69633_69910__$1);
var G__69913 = c__5568__auto___69911;
var G__69914 = cljs.core.count(c__5568__auto___69911);
var G__69915 = (0);
seq__69633_69877 = G__69912;
chunk__69634_69878 = G__69913;
count__69635_69879 = G__69914;
i__69636_69880 = G__69915;
continue;
} else {
var vec__69686_69916 = cljs.core.first(seq__69633_69910__$1);
var k_69917 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69686_69916,(0),null);
var v_69918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69686_69916,(1),null);
var obj69689_69919 = obj;
var obj69690_69920 = (((!((obj69689_69919 == null))))?obj69689_69919:({}));
(obj69690_69920[applied_science.js_interop.impl.wrap_key(k_69917)] = v_69918);



var G__69921 = cljs.core.next(seq__69633_69910__$1);
var G__69922 = null;
var G__69923 = (0);
var G__69924 = (0);
seq__69633_69877 = G__69921;
chunk__69634_69878 = G__69922;
count__69635_69879 = G__69923;
i__69636_69880 = G__69924;
continue;
}
} else {
}
}
break;
}

return obj;
}));

(applied_science.js_interop.obj.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(applied_science.js_interop.obj.cljs$lang$applyTo = (function (seq69625){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69625));
}));


//# sourceMappingURL=applied_science.js_interop.js.map
