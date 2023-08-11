goog.provide('modular.oauth2.authorize.redirect');
modular.oauth2.authorize.redirect.bc = (new BroadcastChannel("webly_oauth2_redirect_channel"));
modular.oauth2.authorize.redirect.keywordize = (function modular$oauth2$authorize$redirect$keywordize(my_map){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function modular$oauth2$authorize$redirect$keywordize_$_iter__39876(s__39877){
return (new cljs.core.LazySeq(null,(function (){
var s__39877__$1 = s__39877;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__39877__$1);
if(temp__5804__auto__){
var s__39877__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__39877__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__39877__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__39879 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__39878 = (0);
while(true){
if((i__39878 < size__5522__auto__)){
var vec__39888 = cljs.core._nth(c__5521__auto__,i__39878);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39888,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39888,(1),null);
cljs.core.chunk_append(b__39879,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null));

var G__39915 = (i__39878 + (1));
i__39878 = G__39915;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__39879),modular$oauth2$authorize$redirect$keywordize_$_iter__39876(cljs.core.chunk_rest(s__39877__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__39879),null);
}
} else {
var vec__39897 = cljs.core.first(s__39877__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39897,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39897,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),v], null),modular$oauth2$authorize$redirect$keywordize_$_iter__39876(cljs.core.rest(s__39877__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(my_map);
})());
});
modular.oauth2.authorize.redirect.url_data = (function modular$oauth2$authorize$redirect$url_data(wurl){
var url = cemerick.url.url.cljs$core$IFn$_invoke$arity$1(wurl);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),modular.oauth2.authorize.redirect.keywordize(cemerick.url.query__GT_map(url.anchor)),new cljs.core.Keyword(null,"query","query",-1288509510),modular.oauth2.authorize.redirect.keywordize(url.query)], null);
});
modular.oauth2.authorize.redirect.register_callback = (function modular$oauth2$authorize$redirect$register_callback(cb){
return (modular.oauth2.authorize.redirect.bc.onmessage = (function (ev){
var json = ev.data;
var data = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(json));
var wurl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,"url");
var provider = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,"provider");
var cbdata = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([modular.oauth2.authorize.redirect.url_data(wurl),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"provider","provider",-302056900),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(provider)], null)], 0));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.oauth2.authorize.redirect",null,35,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["oauth chan rcvd: json: ",json,"data: ",data], null);
}),null)),null,(51),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"modular.oauth2.authorize.redirect",null,36,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["oauth cb data: ",cbdata], null);
}),null)),null,(52),null);

return (cb.cljs$core$IFn$_invoke$arity$1 ? cb.cljs$core$IFn$_invoke$arity$1(cbdata) : cb.call(null,cbdata));
}));
});
modular.oauth2.authorize.redirect.window_url = (function modular$oauth2$authorize$redirect$window_url(){
return window.location.href;
});
modular.oauth2.authorize.redirect.sendcallback = (function modular$oauth2$authorize$redirect$sendcallback(provider){
var wurl = modular.oauth2.authorize.redirect.window_url();
var str = JSON.stringify(({"provider": provider, "url": wurl}));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["sending message: ",str], 0));

return modular.oauth2.authorize.redirect.bc.postMessage(str);
});
goog.exportSymbol('modular.oauth2.authorize.redirect.sendcallback', modular.oauth2.authorize.redirect.sendcallback);

//# sourceMappingURL=modular.oauth2.authorize.redirect.js.map
