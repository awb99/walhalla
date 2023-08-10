goog.provide('frontend.notifications.dialog');
frontend.notifications.dialog.type_css_class = (function frontend$notifications$dialog$type_css_class(notification_type){
if(cljs.core.truth_((frontend.notifications.core.notification_types.cljs$core$IFn$_invoke$arity$1 ? frontend.notifications.core.notification_types.cljs$core$IFn$_invoke$arity$1(notification_type) : frontend.notifications.core.notification_types.call(null,notification_type)))){
} else {
throw (new Error("Assert failed: (notification-types notification-type)"));
}

var notification_type__$1 = (function (){var or__5045__auto__ = notification_type;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"info","info",-317069002);
}
})();
var n_class = (function (){var G__46984 = notification_type__$1;
var G__46984__$1 = (((G__46984 instanceof cljs.core.Keyword))?G__46984.fqn:null);
switch (G__46984__$1) {
case "error":
return "bg-red-100 border-l-4 border-red-500 text-red-700 p-4";

break;
case "warning":
return "bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4";

break;
case "info":
return "bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46984__$1)].join('')));

}
})();
return ["notification ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n_class)].join('');
});
frontend.notifications.dialog.notification_component = (function frontend$notifications$dialog$notification_component(p__46989){
var map__46991 = p__46989;
var map__46991__$1 = cljs.core.__destructure_map(map__46991);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46991__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46991__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var hiccup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46991__$1,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),["notification-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"class","class",-2030961996),frontend.notifications.dialog.type_css_class(type),new cljs.core.Keyword(null,"role","role",-736691072),"alert"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","dismiss","notification/dismiss",1041352438),id], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-trash.pr-3","i.fas.fa-trash.pr-3",1989009343)], null)], null),hiccup], null);
});
frontend.notifications.dialog.notifications_container = (function frontend$notifications$dialog$notifications_container(){
var nots_subs = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"notifications","notifications",1685638001)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"width","width",-384071477),"calc(100vw - 3em)",new cljs.core.Keyword(null,"top","top",-1856271961),"6em",new cljs.core.Keyword(null,"right","right",-452581833),"1em",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(300),new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),[".notification {","opacity: 0.8; ","margin-bottom 0.5em !important; ","} ",".notification:hover { ","opacity: 1; ","} "].join('')], null),(cljs.core.truth_(cljs.core.not_empty(cljs.core.deref(nots_subs)))?cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function frontend$notifications$dialog$notifications_container_$_iter__47001(s__47002){
return (new cljs.core.LazySeq(null,(function (){
var s__47002__$1 = s__47002;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__47002__$1);
if(temp__5804__auto__){
var s__47002__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__47002__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__47002__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__47004 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__47003 = (0);
while(true){
if((i__47003 < size__5522__auto__)){
var n = cljs.core._nth(c__5521__auto__,i__47003);
cljs.core.chunk_append(b__47004,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.notifications.dialog.notification_component,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["notify-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(n))].join('')], null)));

var G__47025 = (i__47003 + (1));
i__47003 = G__47025;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47004),frontend$notifications$dialog$notifications_container_$_iter__47001(cljs.core.chunk_rest(s__47002__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47004),null);
}
} else {
var n = cljs.core.first(s__47002__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.notifications.dialog.notification_component,n], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["notify-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(n))].join('')], null)),frontend$notifications$dialog$notifications_container_$_iter__47001(cljs.core.rest(s__47002__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.deref(nots_subs));
})()):null)], null);
});
goog.exportSymbol('frontend.notifications.dialog.notifications_container', frontend.notifications.dialog.notifications_container);

//# sourceMappingURL=frontend.notifications.dialog.js.map
