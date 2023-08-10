goog.provide('webly.app.views');
if((typeof webly !== 'undefined') && (typeof webly.app !== 'undefined') && (typeof webly.app.views !== 'undefined') && (typeof webly.app.views.generation !== 'undefined')){
} else {
webly.app.views.generation = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((1));
}
webly.app.views.page_viewer = (function webly$app$views$page_viewer(current){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.page.reagent_page,cljs.core.deref(current)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(webly.app.views.generation),cljs.core.deref(current)], null)], null));
});
/**
 * used in goldly for dynamic reloading when page source was changed
 */
webly.app.views.refresh_page = (function webly$app$views$refresh_page(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(webly.app.views.generation,cljs.core.inc);
});
webly.app.views.webly_page = (function webly$app$views$webly_page(){
var show_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webly","status-show-app","webly/status-show-app",-1254988117)], null));
return (function (){
if(cljs.core.truth_(cljs.core.deref(show_QMARK_))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [webly.app.views.page_viewer,frontend.routes.current], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webly.app.status.page.status_page], null);
}
});
});
webly.app.views.webly_app = (function webly$app$views$webly_app(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.dialog.modal_container], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.notifications.dialog.notifications_container], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.css.view.load_css], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [webly.app.views.webly_page], null)], null);
});

//# sourceMappingURL=webly.app.views.js.map
