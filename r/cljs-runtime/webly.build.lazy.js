goog.provide('webly.build.lazy');
if((typeof webly !== 'undefined') && (typeof webly.build !== 'undefined') && (typeof webly.build.lazy !== 'undefined') && (typeof webly.build.lazy.renderer !== 'undefined')){
} else {
webly.build.lazy.renderer = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
webly.build.lazy.log_loading = (function webly$build$lazy$log_loading(symbol_fn){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"webly.build.lazy",null,15,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["webly lazy loading: ",symbol_fn], null);
}),null)),null,(180),null);
});
if((typeof webly !== 'undefined') && (typeof webly.build !== 'undefined') && (typeof webly.build.lazy !== 'undefined') && (typeof webly.build.lazy.on_load !== 'undefined')){
} else {
webly.build.lazy.on_load = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(webly.build.lazy.log_loading);
}
webly.build.lazy.available = (function webly$build$lazy$available(){
return cljs.core.keys(cljs.core.deref(webly.build.lazy.renderer));
});
webly.build.lazy.add_available = (function webly$build$lazy$add_available(s){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"webly.build.lazy",null,23,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["available lazy renderer: ",s], null);
}),null)),null,(182),null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webly.build.lazy.renderer,cljs.core.assoc,s,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),s], null));
});
webly.build.lazy.add_loaded = (function webly$build$lazy$add_loaded(s,f){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"webly.build.lazy",null,27,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loaded lazy renderer: ",s], null);
}),null)),null,(183),null);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(webly.build.lazy.renderer,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,new cljs.core.Keyword(null,"fun","fun",-1265158045)], null),f);
});
webly.build.lazy.start_load = (function webly$build$lazy$start_load(symbol_fn,load_spec){
var fexpr__45068_45096 = cljs.core.deref(webly.build.lazy.on_load);
(fexpr__45068_45096.cljs$core$IFn$_invoke$arity$1 ? fexpr__45068_45096.cljs$core$IFn$_invoke$arity$1(symbol_fn) : fexpr__45068_45096.call(null,symbol_fn));

try{return shadow.lazy.load.cljs$core$IFn$_invoke$arity$2(load_spec,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(webly.build.lazy.add_loaded,symbol_fn));
}catch (e45069){var e = e45069;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"webly.build.lazy",null,35,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Lazy Loading failed for: ",symbol_fn], null);
}),null)),null,(185),null);
}});
webly.build.lazy.run = (function webly$build$lazy$run(f,args){
if(cljs.core.truth_(args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
} else {
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}
});
webly.build.lazy.loading = (function webly$build$lazy$loading(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45100 = arguments.length;
var i__5770__auto___45105 = (0);
while(true){
if((i__5770__auto___45105 < len__5769__auto___45100)){
args__5775__auto__.push((arguments[i__5770__auto___45105]));

var G__45106 = (i__5770__auto___45105 + (1));
i__5770__auto___45105 = G__45106;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return webly.build.lazy.loading.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(webly.build.lazy.loading.cljs$core$IFn$_invoke$arity$variadic = (function (symbol_fn,args){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"lazy-load "], null);
}));

(webly.build.lazy.loading.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(webly.build.lazy.loading.cljs$lang$applyTo = (function (seq45074){
var G__45075 = cljs.core.first(seq45074);
var seq45074__$1 = cljs.core.next(seq45074);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__45075,seq45074__$1);
}));

webly.build.lazy.show_lazy = (function webly$build$lazy$show_lazy(load_spec,symbol_fn){
var css_loading_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("css","loading?","css/loading?",1905541688)], null));
return (function() { 
var G__45107__delegate = function (args){
var r = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(webly.build.lazy.renderer),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [symbol_fn,new cljs.core.Keyword(null,"fun","fun",-1265158045)], null));
if(cljs.core.truth_((function (){var and__5043__auto__ = r;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.deref(css_loading_QMARK_));
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [webly.build.lazy.run,r,args], null);
} else {
webly.build.lazy.start_load(symbol_fn,load_spec);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webly.build.lazy.loading,symbol_fn], null);
}
};
var G__45107 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45110__i = 0, G__45110__a = new Array(arguments.length -  0);
while (G__45110__i < G__45110__a.length) {G__45110__a[G__45110__i] = arguments[G__45110__i + 0]; ++G__45110__i;}
  args = new cljs.core.IndexedSeq(G__45110__a,0,null);
} 
return G__45107__delegate.call(this,args);};
G__45107.cljs$lang$maxFixedArity = 0;
G__45107.cljs$lang$applyTo = (function (arglist__45112){
var args = cljs.core.seq(arglist__45112);
return G__45107__delegate(args);
});
G__45107.cljs$core$IFn$_invoke$arity$variadic = G__45107__delegate;
return G__45107;
})()
;
});

//# sourceMappingURL=webly.build.lazy.js.map
