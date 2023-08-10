goog.provide('sci.async');
sci.async.handle_libspecs = (function sci$async$handle_libspecs(ctx,libspecs){
var last_ns = new cljs.core.Keyword(null,"last-ns","last-ns",1405803181).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.seq(libspecs)){
var fst = cljs.core.first(libspecs);
var vec__72585 = (((fst instanceof cljs.core.Symbol))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fst], null):fst);
var seq__72586 = cljs.core.seq(vec__72585);
var first__72587 = cljs.core.first(seq__72586);
var seq__72586__$1 = cljs.core.next(seq__72586);
var libname = first__72587;
var opts = seq__72586__$1;
var libname__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),libname))?new cljs.core.Symbol(null,"clojure.core","clojure.core",-189332625,null):libname);
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var cnn = sci.core.ns_name(cljs.core.deref(last_ns));
if(cljs.core.truth_((function (){var and__5043__auto__ = (libname__$1 instanceof cljs.core.Symbol);
if(and__5043__auto__){
return sci.core.find_ns(ctx,libname__$1);
} else {
return and__5043__auto__;
}
})())){
var bm__72236__auto___72649 = cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.core.ns,cljs.core.deref(last_ns)]);
if(cljs.core.map_QMARK_(bm__72236__auto___72649)){
} else {
throw (new Error("Assert failed: (clojure.core/map? bm__72236__auto__)"));
}

sci.impl.vars.push_thread_bindings(bm__72236__auto___72649);

try{cljs.core.apply.cljs$core$IFn$_invoke$arity$5(sci.impl.load.load_lib,ctx,null,libname__$1,opts);
}finally {sci.impl.vars.pop_thread_bindings();
}
var G__72594 = ctx;
var G__72598 = cljs.core.rest(libspecs);
return (sci.async.handle_libspecs.cljs$core$IFn$_invoke$arity$2 ? sci.async.handle_libspecs.cljs$core$IFn$_invoke$arity$2(G__72594,G__72598) : sci.async.handle_libspecs.call(null,G__72594,G__72598));
} else {
var temp__5802__auto__ = new cljs.core.Keyword(null,"async-load-fn","async-load-fn",-472170029).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(env_STAR_));
if(cljs.core.truth_(temp__5802__auto__)){
var load_fn = temp__5802__auto__;
var opts__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var vec__72599 = ((typeof libname__$1 === 'string')?sci.impl.load.lib_PLUS_path(libname__$1):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [libname__$1], null));
var libname_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72599,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72599,(1),null);
return Promise.resolve((function (){var G__72604 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.core.ns_name(cljs.core.deref(last_ns)),new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx,new cljs.core.Keyword(null,"libname","libname",135992497),libname_STAR_,new cljs.core.Keyword(null,"property-path","property-path",201212852),path,new cljs.core.Keyword(null,"opts","opts",155075701),opts__$1], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__72604) : load_fn.call(null,G__72604));
})()).then((function (res){
var ctx__$1 = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"ctx","ctx",-493610118).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ctx;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"handled","handled",1889700151).cljs$core$IFn$_invoke$arity$1(res))){
var G__72606 = ctx__$1;
var G__72607 = cljs.core.rest(libspecs);
return (sci.async.handle_libspecs.cljs$core$IFn$_invoke$arity$2 ? sci.async.handle_libspecs.cljs$core$IFn$_invoke$arity$2(G__72606,G__72607) : sci.async.handle_libspecs.call(null,G__72606,G__72607));
} else {
var handle_opts = (function (ctx__$2,res__$1){
var libname__$2 = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"libname","libname",135992497).cljs$core$IFn$_invoke$arity$1(res__$1);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return libname__$1;
}
})();
var env_STAR___$1 = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx__$2);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR___$1,(function (env){
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,libname__$2);
return sci.impl.load.handle_require_libspec_env(ctx__$2,env,cnn,the_loaded_ns,libname__$2,opts__$1);
}));
});
var temp__5802__auto____$1 = new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(res);
if(cljs.core.truth_(temp__5802__auto____$1)){
var src = temp__5802__auto____$1;
var curr_ns = cljs.core.deref(last_ns);
return (sci.async.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.async.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(ctx__$1,src) : sci.async.eval_string_STAR_.call(null,ctx__$1,src)).then((function (){
cljs.core.vreset_BANG_(last_ns,curr_ns);

handle_opts(ctx__$1,res);

var G__72611 = ctx__$1;
var G__72612 = cljs.core.rest(libspecs);
return (sci.async.handle_libspecs.cljs$core$IFn$_invoke$arity$2 ? sci.async.handle_libspecs.cljs$core$IFn$_invoke$arity$2(G__72611,G__72612) : sci.async.handle_libspecs.call(null,G__72611,G__72612));
}));
} else {
handle_opts(ctx__$1,res);

var G__72614 = ctx__$1;
var G__72615 = cljs.core.rest(libspecs);
return (sci.async.handle_libspecs.cljs$core$IFn$_invoke$arity$2 ? sci.async.handle_libspecs.cljs$core$IFn$_invoke$arity$2(G__72614,G__72615) : sci.async.handle_libspecs.call(null,G__72614,G__72615));
}
}
}));
} else {
var bm__72236__auto___72658 = cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.core.ns,cljs.core.deref(last_ns)]);
if(cljs.core.map_QMARK_(bm__72236__auto___72658)){
} else {
throw (new Error("Assert failed: (clojure.core/map? bm__72236__auto__)"));
}

sci.impl.vars.push_thread_bindings(bm__72236__auto___72658);

try{cljs.core.apply.cljs$core$IFn$_invoke$arity$5(sci.impl.load.load_lib,ctx,null,libname__$1,opts);
}finally {sci.impl.vars.pop_thread_bindings();
}
var G__72617 = ctx;
var G__72618 = cljs.core.rest(libspecs);
return (sci.async.handle_libspecs.cljs$core$IFn$_invoke$arity$2 ? sci.async.handle_libspecs.cljs$core$IFn$_invoke$arity$2(G__72617,G__72618) : sci.async.handle_libspecs.call(null,G__72617,G__72618));
}
}
} else {
return Promise.resolve(null);
}
});
sci.async.eval_ns_form = (function sci$async$eval_ns_form(ctx,ns_form){
var last_ns = new cljs.core.Keyword(null,"last-ns","last-ns",1405803181).cljs$core$IFn$_invoke$arity$1(ctx);
var vec__72622 = ns_form;
var seq__72623 = cljs.core.seq(vec__72622);
var first__72624 = cljs.core.first(seq__72623);
var seq__72623__$1 = cljs.core.next(seq__72623);
var _ns = first__72624;
var first__72624__$1 = cljs.core.first(seq__72623__$1);
var seq__72623__$2 = cljs.core.next(seq__72623__$1);
var ns_name = first__72624__$1;
var ns_forms = seq__72623__$2;
var grouped = cljs.core.group_by((function (ns_form__$1){
return ((cljs.core.seq_QMARK_(ns_form__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"require","require",-468001333),cljs.core.first(ns_form__$1))));
}),ns_forms);
var require_forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grouped,true);
var other_forms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(grouped,false);
var other_forms__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__72620_SHARP_){
return ((cljs.core.seq_QMARK_(p1__72620_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"require-macros","require-macros",707947416),cljs.core.first(p1__72620_SHARP_))));
}),other_forms);
var ns_obj = (function (){var bm__72236__auto__ = cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.core.ns,cljs.core.deref(last_ns)]);
if(cljs.core.map_QMARK_(bm__72236__auto__)){
} else {
throw (new Error("Assert failed: (clojure.core/map? bm__72236__auto__)"));
}

sci.impl.vars.push_thread_bindings(bm__72236__auto__);

try{return sci.core.eval_form(ctx,(new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),(new cljs.core.List(null,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"ns","ns",2082130287,null),ns_name,other_forms__$1),(new cljs.core.List(null,new cljs.core.Symbol(null,"*ns*","*ns*",740153818,null),null,(1),null)),(2),null)),(3),null)));
}finally {sci.impl.vars.pop_thread_bindings();
}})();
var _ = cljs.core.vreset_BANG_(last_ns,ns_obj);
var libspecs = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.rest,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([require_forms], 0));
return sci.async.handle_libspecs(ctx,libspecs);
});

sci.async.eval_string_STAR_ = (function sci$async$eval_string_STAR_(ctx,s){
var rdr = sci.core.reader(s);
var last_ns = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"last-ns","last-ns",1405803181).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.volatile_BANG_(cljs.core.deref(sci.core.ns));
}
})();
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"last-ns","last-ns",1405803181),last_ns);
var eval_next = (function sci$async$eval_string_STAR__$_eval_next(res){
var continue$ = (function (){
var bm__72236__auto__ = cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.core.ns,cljs.core.deref(last_ns)]);
if(cljs.core.map_QMARK_(bm__72236__auto__)){
} else {
throw (new Error("Assert failed: (clojure.core/map? bm__72236__auto__)"));
}

sci.impl.vars.push_thread_bindings(bm__72236__auto__);

try{var form = sci.core.parse_next.cljs$core$IFn$_invoke$arity$2(ctx__$1,rdr);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.core","eof","sci.core/eof",-808584945),form)){
return Promise.resolve(res);
} else {
if(cljs.core.seq_QMARK_(form)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"ns","ns",2082130287,null),cljs.core.first(form))){
return sci$async$eval_string_STAR__$_eval_next((function (){var G__72629 = sci.async.eval_ns_form(ctx__$1,form);
return (sci.async.await$.cljs$core$IFn$_invoke$arity$1 ? sci.async.await$.cljs$core$IFn$_invoke$arity$1(G__72629) : sci.async.await$.call(null,G__72629));
})());
} else {
return sci$async$eval_string_STAR__$_eval_next(sci.core.eval_form(ctx__$1,form));
}
} else {
return sci$async$eval_string_STAR__$_eval_next(sci.core.eval_form(ctx__$1,form));
}
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
if(cljs.core.truth_((function (){var or__5045__auto__ = (!((res instanceof Promise)));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return (sci.async.await_QMARK_.cljs$core$IFn$_invoke$arity$1 ? sci.async.await_QMARK_.cljs$core$IFn$_invoke$arity$1(res) : sci.async.await_QMARK_.call(null,res));
}
})())){
return Promise.resolve(res).then(continue$);
} else {
return continue$();
}
});
return eval_next(null);
});
/**
 * Same as eval-string* but returns map with `:val`, the evaluation
 *   result, and `:ns`, the last active namespace. The return value can
 *   be passed back into `opts` to preserve the namespace state.
 */
sci.async.eval_string_PLUS_ = (function sci$async$eval_string_PLUS_(var_args){
var G__72634 = arguments.length;
switch (G__72634) {
case 2:
return sci.async.eval_string_PLUS_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.async.eval_string_PLUS_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.async.eval_string_PLUS_.cljs$core$IFn$_invoke$arity$2 = (function (ctx,s){
return sci.async.eval_string_PLUS_.cljs$core$IFn$_invoke$arity$3(ctx,s,null);
}));

(sci.async.eval_string_PLUS_.cljs$core$IFn$_invoke$arity$3 = (function (ctx,s,opts){
var last_ns = cljs.core.volatile_BANG_((function (){var or__5045__auto__ = (cljs.core.truth_(opts)?new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(opts):null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.deref(sci.core.ns);
}
})());
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"last-ns","last-ns",1405803181),last_ns);
return sci.async.eval_string_STAR_(ctx__$1,s).then((function (v){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"ns","ns",441598760),cljs.core.deref(last_ns)], null);
}));
}));

(sci.async.eval_string_PLUS_.cljs$lang$maxFixedArity = 3);

/**
 * Mark promise to be flatteded into top level async evaluation, similar
 *   to top level await.
 */
sci.async.await$ = (function sci$async$await(promise){
(promise.__sci_await = true);

return promise;
});
/**
 * Check if promise was marked with `await`.
 */
sci.async.await_QMARK_ = (function sci$async$await_QMARK_(promise){
return promise.__sci_await;
});
sci.async.require_STAR_ = (function sci$async$require_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___72669 = arguments.length;
var i__5770__auto___72670 = (0);
while(true){
if((i__5770__auto___72670 < len__5769__auto___72669)){
args__5775__auto__.push((arguments[i__5770__auto___72670]));

var G__72671 = (i__5770__auto___72670 + (1));
i__5770__auto___72670 = G__72671;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return sci.async.require_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(sci.async.require_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,libspecs){
var ctx__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"last-ns","last-ns",1405803181),(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"last-ns","last-ns",1405803181).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.volatile_BANG_(cljs.core.deref(sci.core.ns));
}
})());
var p = sci.async.handle_libspecs(ctx__$1,libspecs);
return sci.async.await$(p);
}));

(sci.async.require_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.async.require_STAR_.cljs$lang$applyTo = (function (seq72636){
var G__72637 = cljs.core.first(seq72636);
var seq72636__$1 = cljs.core.next(seq72636);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__72637,seq72636__$1);
}));

/**
 * Async require that can be substituted for sync require by
 *   `{:namespaces {'clojure.core {'require scia/require}}}`
 */
sci.async.require = sci.impl.copy_vars.new_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"require","require",1172530194,null),sci.async.require_STAR_,true);

//# sourceMappingURL=sci.async.js.map
