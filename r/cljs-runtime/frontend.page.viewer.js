goog.provide('frontend.page.viewer');
if((typeof frontend !== 'undefined') && (typeof frontend.page !== 'undefined') && (typeof frontend.page.viewer !== 'undefined') && (typeof frontend.page.viewer.generation !== 'undefined')){
} else {
frontend.page.viewer.generation = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((1));
}
frontend.page.viewer.page_viewer = (function frontend$page$viewer$page_viewer(){
return (function (){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.page.reagent_page,cljs.core.deref(frontend.routes.current)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(frontend.page.viewer.generation),cljs.core.deref(frontend.routes.current)], null)], null));
});
});
/**
 * used in goldly for dynamic reloading when page source was changed
 */
frontend.page.viewer.refresh_page = (function frontend$page$viewer$refresh_page(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.page.viewer.generation,cljs.core.inc);
});

//# sourceMappingURL=frontend.page.viewer.js.map
