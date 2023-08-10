goog.provide('pinkgorilla.layout.sidebar');
pinkgorilla.layout.sidebar.sidebar_menu_item = (function pinkgorilla$layout$sidebar$sidebar_menu_item(p__54511){
var map__54513 = p__54511;
var map__54513__$1 = cljs.core.__destructure_map(map__54513);
var item = map__54513__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54513__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var fas = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54513__$1,new cljs.core.Keyword(null,"fas","fas",492603861),"link");
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54513__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var goto_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54513__$1,new cljs.core.Keyword(null,"goto-page","goto-page",-1569580297));
var active_QMARK___$1 = (active_QMARK_.cljs$core$IFn$_invoke$arity$1 ? active_QMARK_.cljs$core$IFn$_invoke$arity$1(item) : active_QMARK_.call(null,item));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mr-3 flex-1"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function() { 
var G__54538__delegate = function (_){
return (goto_page.cljs$core$IFn$_invoke$arity$1 ? goto_page.cljs$core$IFn$_invoke$arity$1(item) : goto_page.call(null,item));
};
var G__54538 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__54539__i = 0, G__54539__a = new Array(arguments.length -  0);
while (G__54539__i < G__54539__a.length) {G__54539__a[G__54539__i] = arguments[G__54539__i + 0]; ++G__54539__i;}
  _ = new cljs.core.IndexedSeq(G__54539__a,0,null);
} 
return G__54538__delegate.call(this,_);};
G__54538.cljs$lang$maxFixedArity = 0;
G__54538.cljs$lang$applyTo = (function (arglist__54541){
var _ = cljs.core.seq(arglist__54541);
return G__54538__delegate(_);
});
G__54538.cljs$core$IFn$_invoke$arity$variadic = G__54538__delegate;
return G__54538;
})()
,new cljs.core.Keyword(null,"class","class",-2030961996),["block py-1 md:py-3 pl-1 align-middle no-underline border-b-2 ",(cljs.core.truth_(active_QMARK___$1)?"text-white hover:text-white border-pink-600":"text-gray-600 hover:text-pink-500 border-gray-800 md:border-gray-900 hover:border-pink-500")].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["fas fa-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fas)," pr-0 md:pr-3 ",(cljs.core.truth_(active_QMARK___$1)?"text-pink-500":"")].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["pb-1 md:pb-0 text-xs md:text-base block md:inline-block ",(cljs.core.truth_(active_QMARK___$1)?"text-white md:font-bold":"text-gray-600 md:text-gray-400")].join('')], null),name], null)], null)], null);
});
pinkgorilla.layout.sidebar.sidebar_menu = (function pinkgorilla$layout$sidebar$sidebar_menu(goto_page,active_QMARK_,items){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["w-full bg-blue-500 px-2 text-center  bottom-0 ","lg:w-1/6 ","md:w-1/5 md:pt-8 md:top-0 md:left-0 h-16 md:h-full md:border-r-4 md:border-pink-600 md:bg-teal-800 "].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[" mx-auto ","lg:float-right lg:px-6 ","md:relative"].join('')], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["list-reset flex flex-row text-center ","md:flex-col  md:text-left"].join('')], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkgorilla.layout.sidebar.sidebar_menu_item,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,new cljs.core.Keyword(null,"goto-page","goto-page",-1569580297),goto_page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"active?","active?",459499776),active_QMARK_], 0))], null);
}),items))], null)], null);
});
/**
 * a sidebar menu; on mobile moves to bottom
 */
pinkgorilla.layout.sidebar.sidebar = (function pinkgorilla$layout$sidebar$sidebar(items,default_page){
var active_name = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var active_page = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(default_page);
var goto_page = (function (item){
cljs.core.reset_BANG_(active_page,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(item));

return cljs.core.reset_BANG_(active_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item));
});
var active_QMARK_ = (function (item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),cljs.core.deref(active_name));
});
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex flex-wrap h-full w-full ","md:flex-row-reverse"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["w-full h-full bg-blue-100 ","lg:w-5/6 ","md:w-4/5 "].join('')], null),(cljs.core.truth_(cljs.core.deref(active_page))?cljs.core.deref(active_page):null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkgorilla.layout.sidebar.sidebar_menu,goto_page,active_QMARK_,items], null)], null);
});
});

//# sourceMappingURL=pinkgorilla.layout.sidebar.js.map
