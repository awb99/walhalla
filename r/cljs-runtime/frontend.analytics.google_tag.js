goog.provide('frontend.analytics.google_tag');
frontend.analytics.google_tag.script_cljs = (function frontend$analytics$google_tag$script_cljs(id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",-1304443801),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"async","async",1050769601),true,new cljs.core.Keyword(null,"type","type",1174270348),"text/javascript",new cljs.core.Keyword(null,"src","src",-1651076051),["https://www.googletagmanager.com/gtag/js?id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null)], null);
});
frontend.analytics.google_tag.script_js = (function frontend$analytics$google_tag$script_js(id){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["<script async src='https://www.googletagmanager.com/gtag/js?id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"' type= 'text/javascript'> </script>"].join('')], null);
});
frontend.analytics.google_tag.script_tag_src = (function frontend$analytics$google_tag$script_tag_src(google_analytics_config){
var map__44945 = google_analytics_config;
var map__44945__$1 = cljs.core.__destructure_map(map__44945);
var enabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44945__$1,new cljs.core.Keyword(null,"enabled","enabled",1195909756));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44945__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_((function (){var and__5043__auto__ = enabled;
if(cljs.core.truth_(and__5043__auto__)){
return id;
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"frontend.analytics.google-tag",null,23,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["google analytics starting with google id: ",id], null);
}),null)),null,(150),null);

return frontend.analytics.google_tag.script_cljs(id);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"frontend.analytics.google-tag",null,27,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no google analytics config!"], null);
}),null)),null,(151),null);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"no-google-analytics-config-tag"], null)], null);
}
});
frontend.analytics.google_tag.script_tag_config = (function frontend$analytics$google_tag$script_tag_config(google_analytics_config){
var map__44965 = google_analytics_config;
var map__44965__$1 = cljs.core.__destructure_map(map__44965);
var enabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44965__$1,new cljs.core.Keyword(null,"enabled","enabled",1195909756));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44965__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_((function (){var and__5043__auto__ = enabled;
if(cljs.core.truth_(and__5043__auto__)){
return id;
} else {
return and__5043__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"script","script",-1304443801),["window.dataLayer = window.dataLayer || [];\n         function gtag(){dataLayer.push(arguments);}\n         gtag('js', new Date());\n         gtag('config', '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"', {cookie_flags: 'SameSite=None;Secure' }  );"].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"no-google-analytics-config-config"], null)], null);
}
});
frontend.analytics.google_tag.send_event = (function frontend$analytics$google_tag$send_event(action,data){
var datajs = cljs.core.clj__GT_js(data);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.analytics.google-tag",null,45,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ga event",action,data], null);
}),null)),null,(158),null);

return gtag("event",action,datajs);
});

//# sourceMappingURL=frontend.analytics.google_tag.js.map
