goog.provide('goldly.run.app');
goog.scope(function(){
  goldly.run.app.goog$module$shadow$loader = goog.module.get('shadow.loader');
});
goldly.run.app.goldly_start = (function goldly$run$app$goldly_start(static_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.run.app",null,17,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goldly starting .. static?: ",static_QMARK_], null);
}),null)),null,(148),null);

goldly.run.app.goog$module$shadow$loader.init("");

cljs.core.reset_BANG_(webly.build.lazy.on_load,goldly.run.lazy_ext_css.goldly_on_load);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ga","event","ga/event",301434432),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"category","category",-593092832),"goldly",new cljs.core.Keyword(null,"action","action",-811238024),"started",new cljs.core.Keyword(null,"label","label",1718410804),(77),new cljs.core.Keyword(null,"value","value",305978217),(13)], null)], null));

var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_54831){
var state_val_54832 = (state_54831[(1)]);
if((state_val_54832 === (1))){
var inst_54823 = goldly.cljs.loader.load_cljs(static_QMARK_);
var state_54831__$1 = state_54831;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54831__$1,(2),inst_54823);
} else {
if((state_val_54832 === (2))){
var inst_54825 = (state_54831[(2)]);
var inst_54826 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54827 = [new cljs.core.Keyword("webly","status","webly/status",-2111320042),new cljs.core.Keyword(null,"running","running",1554969103)];
var inst_54828 = (new cljs.core.PersistentVector(null,2,(5),inst_54826,inst_54827,null));
var inst_54829 = re_frame.core.dispatch(inst_54828);
var state_54831__$1 = (function (){var statearr_54833 = state_54831;
(statearr_54833[(7)] = inst_54825);

return statearr_54833;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54831__$1,inst_54829);
} else {
return null;
}
}
});
return (function() {
var goldly$run$app$goldly_start_$_state_machine__41225__auto__ = null;
var goldly$run$app$goldly_start_$_state_machine__41225__auto____0 = (function (){
var statearr_54834 = [null,null,null,null,null,null,null,null];
(statearr_54834[(0)] = goldly$run$app$goldly_start_$_state_machine__41225__auto__);

(statearr_54834[(1)] = (1));

return statearr_54834;
});
var goldly$run$app$goldly_start_$_state_machine__41225__auto____1 = (function (state_54831){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_54831);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e54835){var ex__41228__auto__ = e54835;
var statearr_54836_54843 = state_54831;
(statearr_54836_54843[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_54831[(4)]))){
var statearr_54837_54844 = state_54831;
(statearr_54837_54844[(1)] = cljs.core.first((state_54831[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54845 = state_54831;
state_54831 = G__54845;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$run$app$goldly_start_$_state_machine__41225__auto__ = function(state_54831){
switch(arguments.length){
case 0:
return goldly$run$app$goldly_start_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$run$app$goldly_start_$_state_machine__41225__auto____1.call(this,state_54831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$run$app$goldly_start_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$run$app$goldly_start_$_state_machine__41225__auto____0;
goldly$run$app$goldly_start_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$run$app$goldly_start_$_state_machine__41225__auto____1;
return goldly$run$app$goldly_start_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_54838 = f__41248__auto__();
(statearr_54838[(6)] = c__41247__auto__);

return statearr_54838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("goldly","init","goldly/init",-635145545),(function (db,_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"goldly.run.app",null,28,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goldly.init.."], null);
}),null)),null,(149),null);

var db__$1 = (function (){var or__5045__auto__ = db;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var static_QMARK_ = goldly.offline.old.static_QMARK_();
if(static_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.run.app",null,32,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goldly.static.mode: ",static_QMARK_], null);
}),null)),null,(150),null);

goldly.run.app.goldly_start(static_QMARK_);
} else {
}

return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pref","pref",-307301052)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"compile-time","compile-time",214692584),"2023-08-12 21:04:35",new cljs.core.Keyword(null,"tenx","tenx",44439421),false,new cljs.core.Keyword(null,"profile","profile",-545963874),"compile2",new cljs.core.Keyword(null,"main-path","main-path",-1462199157),"",new cljs.core.Keyword(null,"asset-path","asset-path",1500889617),"/r",new cljs.core.Keyword(null,"advanced?","advanced?",-385632194),null,new cljs.core.Keyword(null,"start-user-app","start-user-app",-459208748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("goldly","init","goldly/init",-635145545)], null)], null));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("ws","open-first","ws/open-first",-1976054870),(function (cofx,p__54839){
var vec__54840 = p__54839;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54840,(0),null);
var new_state_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54840,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.run.app",null,40,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket successfully established!: %s",new_state_map], null);
}),null)),null,(151),null);

goldly.run.app.goldly_start(false);

return null;
}));

//# sourceMappingURL=goldly.run.app.js.map
