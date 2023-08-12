goog.provide('frontend.dialog');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("modal","open","modal/open",-1860325197),(function (db,p__44942){
var vec__44943 = p__44942;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44943,(0),null);
var child = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44943,(1),null);
var size = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44943,(2),null);
var close = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44943,(3),null);
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"show?","show?",1543842127),true,new cljs.core.Keyword(null,"child","child",623967545),child,new cljs.core.Keyword(null,"close","close",1835149582),(function (){var or__5045__auto__ = close;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return null;
}
})(),new cljs.core.Keyword(null,"size","size",1098693007),(function (){var or__5045__auto__ = size;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);
}
})()], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("modal","close","modal/close",1402872795),(function (db,p__44952){
var vec__44953 = p__44952;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44953,(0),null);
var map__44956 = new cljs.core.Keyword(null,"modal","modal",-1031880850).cljs$core$IFn$_invoke$arity$1(db);
var map__44956__$1 = cljs.core.__destructure_map(map__44956);
var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44956__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
var close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44956__$1,new cljs.core.Keyword(null,"close","close",1835149582));
if(cljs.core.truth_(show_QMARK_)){
if(cljs.core.truth_(close)){
re_frame.core.dispatch(close);
} else {
}

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"show?","show?",1543842127),false,new cljs.core.Keyword(null,"child","child",623967545),null,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"close","close",1835149582),null], null));
} else {
return db;
}
}));
frontend.dialog.modal_panel = (function frontend$dialog$modal_panel(p__44960){
var map__44961 = p__44960;
var map__44961__$1 = cljs.core.__destructure_map(map__44961);
var child = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44961__$1,new cljs.core.Keyword(null,"child","child",623967545));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44961__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-wrapper"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-backdrop",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","close","modal/close",1402872795)], null));

event.preventDefault();

return event.stopPropagation();
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-child",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(function (){var G__44967 = size;
var G__44967__$1 = (((G__44967 instanceof cljs.core.Keyword))?G__44967.fqn:null);
switch (G__44967__$1) {
case "extra-small":
return "15%";

break;
case "small":
return "30%";

break;
case "large":
return "70%";

break;
case "extra-large":
return "85%";

break;
default:
return "50%";

}
})()], null)], null),child], null)], null);
});
re_frame.core.reg_sub_raw(new cljs.core.Keyword(null,"modal","modal",-1031880850),(function (db,_){
return reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"modal","modal",-1031880850).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(db));
}));
}));
frontend.dialog.modal_container = (function frontend$dialog$modal_container(){
var modal = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850)], null));
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword(null,"show?","show?",1543842127).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(modal)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.dialog.modal_panel,cljs.core.deref(modal)], null):null)], null);
});
});

//# sourceMappingURL=frontend.dialog.js.map
