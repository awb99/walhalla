goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__46290){
var map__46291 = p__46290;
var map__46291__$1 = cljs.core.__destructure_map(map__46291);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46291__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46291__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46291__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46291__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__46295_46353 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__46296_46354 = null;
var count__46297_46355 = (0);
var i__46298_46356 = (0);
while(true){
if((i__46298_46356 < count__46297_46355)){
var vec__46315_46359 = chunk__46296_46354.cljs$core$IIndexed$_nth$arity$2(null,i__46298_46356);
var k_46360 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46315_46359,(0),null);
var cb_46361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46315_46359,(1),null);
try{var G__46324_46366 = cljs.core.deref(re_frame.trace.traces);
(cb_46361.cljs$core$IFn$_invoke$arity$1 ? cb_46361.cljs$core$IFn$_invoke$arity$1(G__46324_46366) : cb_46361.call(null,G__46324_46366));
}catch (e46320){var e_46367 = e46320;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_46360,"while storing",cljs.core.deref(re_frame.trace.traces),e_46367], 0));
}

var G__46371 = seq__46295_46353;
var G__46372 = chunk__46296_46354;
var G__46373 = count__46297_46355;
var G__46374 = (i__46298_46356 + (1));
seq__46295_46353 = G__46371;
chunk__46296_46354 = G__46372;
count__46297_46355 = G__46373;
i__46298_46356 = G__46374;
continue;
} else {
var temp__5804__auto___46375 = cljs.core.seq(seq__46295_46353);
if(temp__5804__auto___46375){
var seq__46295_46376__$1 = temp__5804__auto___46375;
if(cljs.core.chunked_seq_QMARK_(seq__46295_46376__$1)){
var c__5568__auto___46378 = cljs.core.chunk_first(seq__46295_46376__$1);
var G__46379 = cljs.core.chunk_rest(seq__46295_46376__$1);
var G__46380 = c__5568__auto___46378;
var G__46381 = cljs.core.count(c__5568__auto___46378);
var G__46382 = (0);
seq__46295_46353 = G__46379;
chunk__46296_46354 = G__46380;
count__46297_46355 = G__46381;
i__46298_46356 = G__46382;
continue;
} else {
var vec__46329_46387 = cljs.core.first(seq__46295_46376__$1);
var k_46388 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46329_46387,(0),null);
var cb_46389 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46329_46387,(1),null);
try{var G__46334_46390 = cljs.core.deref(re_frame.trace.traces);
(cb_46389.cljs$core$IFn$_invoke$arity$1 ? cb_46389.cljs$core$IFn$_invoke$arity$1(G__46334_46390) : cb_46389.call(null,G__46334_46390));
}catch (e46333){var e_46391 = e46333;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_46388,"while storing",cljs.core.deref(re_frame.trace.traces),e_46391], 0));
}

var G__46392 = cljs.core.next(seq__46295_46376__$1);
var G__46393 = null;
var G__46394 = (0);
var G__46395 = (0);
seq__46295_46353 = G__46392;
chunk__46296_46354 = G__46393;
count__46297_46355 = G__46394;
i__46298_46356 = G__46395;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
