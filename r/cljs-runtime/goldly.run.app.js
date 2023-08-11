goog.provide('goldly.run.app');
goog.scope(function(){
  goldly.run.app.goog$module$shadow$loader = goog.module.get('shadow.loader');
});
goldly.run.app.goldly_start = (function goldly$run$app$goldly_start(static_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.run.app",null,18,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goldly starting .. static?: ",static_QMARK_], null);
}),null)),null,(125),null);

goldly.run.app.goog$module$shadow$loader.init("");

cljs.core.reset_BANG_(webly.build.lazy.on_load,goldly.run.lazy_ext_css.goldly_on_load);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ga","event","ga/event",301434432),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"category","category",-593092832),"goldly",new cljs.core.Keyword(null,"action","action",-811238024),"started",new cljs.core.Keyword(null,"label","label",1718410804),(77),new cljs.core.Keyword(null,"value","value",305978217),(13)], null)], null));

var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_54783){
var state_val_54784 = (state_54783[(1)]);
if((state_val_54784 === (1))){
var inst_54775 = goldly.cljs.loader.load_cljs(static_QMARK_);
var state_54783__$1 = state_54783;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54783__$1,(2),inst_54775);
} else {
if((state_val_54784 === (2))){
var inst_54777 = (state_54783[(2)]);
var inst_54778 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54779 = [new cljs.core.Keyword("webly","status","webly/status",-2111320042),new cljs.core.Keyword(null,"running","running",1554969103)];
var inst_54780 = (new cljs.core.PersistentVector(null,2,(5),inst_54778,inst_54779,null));
var inst_54781 = re_frame.core.dispatch(inst_54780);
var state_54783__$1 = (function (){var statearr_54785 = state_54783;
(statearr_54785[(7)] = inst_54777);

return statearr_54785;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54783__$1,inst_54781);
} else {
return null;
}
}
});
return (function() {
var goldly$run$app$goldly_start_$_state_machine__41225__auto__ = null;
var goldly$run$app$goldly_start_$_state_machine__41225__auto____0 = (function (){
var statearr_54786 = [null,null,null,null,null,null,null,null];
(statearr_54786[(0)] = goldly$run$app$goldly_start_$_state_machine__41225__auto__);

(statearr_54786[(1)] = (1));

return statearr_54786;
});
var goldly$run$app$goldly_start_$_state_machine__41225__auto____1 = (function (state_54783){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_54783);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e54787){var ex__41228__auto__ = e54787;
var statearr_54788_54795 = state_54783;
(statearr_54788_54795[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_54783[(4)]))){
var statearr_54789_54796 = state_54783;
(statearr_54789_54796[(1)] = cljs.core.first((state_54783[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54797 = state_54783;
state_54783 = G__54797;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$run$app$goldly_start_$_state_machine__41225__auto__ = function(state_54783){
switch(arguments.length){
case 0:
return goldly$run$app$goldly_start_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$run$app$goldly_start_$_state_machine__41225__auto____1.call(this,state_54783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$run$app$goldly_start_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$run$app$goldly_start_$_state_machine__41225__auto____0;
goldly$run$app$goldly_start_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$run$app$goldly_start_$_state_machine__41225__auto____1;
return goldly$run$app$goldly_start_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_54790 = f__41248__auto__();
(statearr_54790[(6)] = c__41247__auto__);

return statearr_54790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("goldly","init","goldly/init",-635145545),(function (db,_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"goldly.run.app",null,29,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goldly.init.."], null);
}),null)),null,(126),null);

var db__$1 = (function (){var or__5045__auto__ = db;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var static_QMARK_ = goldly.offline.old.static_QMARK_();
if(static_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.run.app",null,33,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goldly.static.mode: ",static_QMARK_], null);
}),null)),null,(127),null);

goldly.run.app.goldly_start(static_QMARK_);
} else {
}

return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pref","pref",-307301052)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"compile-time","compile-time",214692584),"2023-08-11 13:39:30",new cljs.core.Keyword(null,"tenx","tenx",44439421),false,new cljs.core.Keyword(null,"profile","profile",-545963874),"compile2",new cljs.core.Keyword(null,"main-path","main-path",-1462199157),"",new cljs.core.Keyword(null,"asset-path","asset-path",1500889617),"/r",new cljs.core.Keyword(null,"advanced?","advanced?",-385632194),null,new cljs.core.Keyword(null,"start-user-app","start-user-app",-459208748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("goldly","init","goldly/init",-635145545)], null)], null));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("ws","open-first","ws/open-first",-1976054870),(function (cofx,p__54791){
var vec__54792 = p__54791;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54792,(0),null);
var new_state_map = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54792,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.run.app",null,41,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["websocket successfully established!: %s",new_state_map], null);
}),null)),null,(128),null);

goldly.run.app.goldly_start(false);

return null;
}));

//# sourceMappingURL=goldly.run.app.js.map
