goog.provide('frontend.page');
if((typeof frontend !== 'undefined') && (typeof frontend.page !== 'undefined') && (typeof frontend.page.reagent_page !== 'undefined')){
} else {
frontend.page.reagent_page = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__45563 = cljs.core.get_global_hierarchy;
return (fexpr__45563.cljs$core$IFn$_invoke$arity$0 ? fexpr__45563.cljs$core$IFn$_invoke$arity$0() : fexpr__45563.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("frontend.page","reagent-page"),(function (x){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"handler","handler",-195596612));
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
frontend.page.available_pages = (function frontend$page$available_pages(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__45568_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),p1__45568_SHARP_);
}),cljs.core.keys(cljs.core.methods$(frontend.page.reagent_page))));
});
frontend.page.not_found_page = (function frontend$page$not_found_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-red-500.m-5","div.bg-red-500.m-5",1504272810),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),["page ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.routes.current)))," - not found!"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Available pages: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([frontend.page.available_pages()], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Current Page:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.routes.current))], null)], null);
});
frontend.page.reagent_page.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__45601__delegate = function (args){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.page.not_found_page], null);
};
var G__45601 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45602__i = 0, G__45602__a = new Array(arguments.length -  0);
while (G__45602__i < G__45602__a.length) {G__45602__a[G__45602__i] = arguments[G__45602__i + 0]; ++G__45602__i;}
  args = new cljs.core.IndexedSeq(G__45602__a,0,null);
} 
return G__45601__delegate.call(this,args);};
G__45601.cljs$lang$maxFixedArity = 0;
G__45601.cljs$lang$applyTo = (function (arglist__45603){
var args = cljs.core.seq(arglist__45603);
return G__45601__delegate(args);
});
G__45601.cljs$core$IFn$_invoke$arity$variadic = G__45601__delegate;
return G__45601;
})()
);

//# sourceMappingURL=frontend.page.js.map
