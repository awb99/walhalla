goog.provide('frontend.css.loading');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("css","loading-add","css/loading-add",211864941),(function (db,p__44864){
var vec__44868 = p__44864;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44868,(0),null);
var href = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44868,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.css.loading",null,9,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["css/loading-add: ",href], null);
}),null)),null,(125),null);

var css_loading = (function (){var or__5045__auto__ = new cljs.core.Keyword("css","loading","css/loading",-736953422).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var css_loading__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(css_loading,href));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.css.loading",null,12,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["css/loading: ",css_loading__$1], null);
}),null)),null,(126),null);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("css","loading","css/loading",-736953422)], null),css_loading__$1);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("css","loading-success","css/loading-success",-283738859),(function (db,p__44877){
var vec__44878 = p__44877;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44878,(0),null);
var href = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44878,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"frontend.css.loading",null,18,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["css/loading-success: ",href], null);
}),null)),null,(128),null);

var css_loading = (function (){var or__5045__auto__ = new cljs.core.Keyword("css","loading","css/loading",-736953422).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var css_loading__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__44873_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(href,p1__44873_SHARP_);
}),css_loading));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"frontend.css.loading",null,21,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["css/loading: ",css_loading__$1], null);
}),null)),null,(129),null);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("css","loading","css/loading",-736953422)], null),css_loading__$1);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("css","loading?","css/loading?",1905541688),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
var css_loading = (function (){var or__5045__auto__ = new cljs.core.Keyword("css","loading","css/loading",-736953422).cljs$core$IFn$_invoke$arity$1(db);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return (cljs.core.count(css_loading) > (0));
})], 0));

//# sourceMappingURL=frontend.css.loading.js.map
