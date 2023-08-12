goog.provide('goldly.service.core');
goldly.service.core.print_result = (function goldly$service$core$print_result(p__55199){
var vec__55200 = p__55199;
var event_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55200,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55200,(1),null);
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"goldly.service.core",null,10,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["service result rcvd: type: %s data: %s",event_type,data], null);
}),null)),null,(243),null);
});
goldly.service.core.run_cb = (function goldly$service$core$run_cb(p__55203){
var map__55204 = p__55203;
var map__55204__$1 = cljs.core.__destructure_map(map__55204);
var params = map__55204__$1;
var fun = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55204__$1,new cljs.core.Keyword(null,"fun","fun",-1265158045));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55204__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55204__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(120000));
var cb = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55204__$1,new cljs.core.Keyword(null,"cb","cb",589947841),goldly.service.core.print_result);
var p_clean = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"where","where",-2044795965)], 0));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.service.core",null,19,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["running service :%s args: %s",fun,args], null);
}),null)),null,(247),null);

modular.ws.core.send_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("goldly","service","goldly/service",-1054858282),p_clean], null),cb,timeout);

return null;
});
goldly.service.core.run = (function goldly$service$core$run(params){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var cb = (function (event){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.service.core",null,28,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["service/run cb: %s",event], null);
}),null)),null,(248),null);


if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"timeout","timeout",-318625318)], null));
} else {
var vec__55205 = event;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55205,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55205,(1),null);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,data);
}
});
goldly.service.core.run_cb(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"cb","cb",589947841),cb));

return ch;
});
goldly.service.core.wait_chan_result = (function goldly$service$core$wait_chan_result(ch,fn_success,fn_err){
var c__41381__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41382__auto__ = (function (){var switch__41305__auto__ = (function (state_55225){
var state_val_55226 = (state_55225[(1)]);
if((state_val_55226 === (1))){
var state_55225__$1 = state_55225;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55225__$1,(2),ch);
} else {
if((state_val_55226 === (2))){
var inst_55212 = (state_55225[(7)]);
var inst_55210 = (state_55225[(2)]);
var inst_55211 = cljs.core.__destructure_map(inst_55210);
var inst_55212__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55211,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_55213 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55211,new cljs.core.Keyword(null,"result","result",1415092211));
var state_55225__$1 = (function (){var statearr_55227 = state_55225;
(statearr_55227[(7)] = inst_55212__$1);

(statearr_55227[(8)] = inst_55213);

return statearr_55227;
})();
if(cljs.core.truth_(inst_55212__$1)){
var statearr_55228_55252 = state_55225__$1;
(statearr_55228_55252[(1)] = (3));

} else {
var statearr_55229_55253 = state_55225__$1;
(statearr_55229_55253[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (3))){
var inst_55212 = (state_55225[(7)]);
var inst_55215 = (fn_err.cljs$core$IFn$_invoke$arity$1 ? fn_err.cljs$core$IFn$_invoke$arity$1(inst_55212) : fn_err.call(null,inst_55212));
var state_55225__$1 = state_55225;
var statearr_55230_55254 = state_55225__$1;
(statearr_55230_55254[(2)] = inst_55215);

(statearr_55230_55254[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (4))){
var state_55225__$1 = state_55225;
var statearr_55231_55255 = state_55225__$1;
(statearr_55231_55255[(2)] = null);

(statearr_55231_55255[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (5))){
var inst_55213 = (state_55225[(8)]);
var inst_55218 = (state_55225[(2)]);
var state_55225__$1 = (function (){var statearr_55232 = state_55225;
(statearr_55232[(9)] = inst_55218);

return statearr_55232;
})();
if(cljs.core.truth_(inst_55213)){
var statearr_55233_55256 = state_55225__$1;
(statearr_55233_55256[(1)] = (6));

} else {
var statearr_55234_55257 = state_55225__$1;
(statearr_55234_55257[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (6))){
var inst_55213 = (state_55225[(8)]);
var inst_55220 = (fn_success.cljs$core$IFn$_invoke$arity$1 ? fn_success.cljs$core$IFn$_invoke$arity$1(inst_55213) : fn_success.call(null,inst_55213));
var state_55225__$1 = state_55225;
var statearr_55235_55258 = state_55225__$1;
(statearr_55235_55258[(2)] = inst_55220);

(statearr_55235_55258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (7))){
var state_55225__$1 = state_55225;
var statearr_55236_55259 = state_55225__$1;
(statearr_55236_55259[(2)] = null);

(statearr_55236_55259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55226 === (8))){
var inst_55223 = (state_55225[(2)]);
var state_55225__$1 = state_55225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55225__$1,inst_55223);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var goldly$service$core$wait_chan_result_$_state_machine__41306__auto__ = null;
var goldly$service$core$wait_chan_result_$_state_machine__41306__auto____0 = (function (){
var statearr_55237 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55237[(0)] = goldly$service$core$wait_chan_result_$_state_machine__41306__auto__);

(statearr_55237[(1)] = (1));

return statearr_55237;
});
var goldly$service$core$wait_chan_result_$_state_machine__41306__auto____1 = (function (state_55225){
while(true){
var ret_value__41307__auto__ = (function (){try{while(true){
var result__41308__auto__ = switch__41305__auto__(state_55225);
if(cljs.core.keyword_identical_QMARK_(result__41308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41308__auto__;
}
break;
}
}catch (e55238){var ex__41309__auto__ = e55238;
var statearr_55239_55260 = state_55225;
(statearr_55239_55260[(2)] = ex__41309__auto__);


if(cljs.core.seq((state_55225[(4)]))){
var statearr_55240_55261 = state_55225;
(statearr_55240_55261[(1)] = cljs.core.first((state_55225[(4)])));

} else {
throw ex__41309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55262 = state_55225;
state_55225 = G__55262;
continue;
} else {
return ret_value__41307__auto__;
}
break;
}
});
goldly$service$core$wait_chan_result_$_state_machine__41306__auto__ = function(state_55225){
switch(arguments.length){
case 0:
return goldly$service$core$wait_chan_result_$_state_machine__41306__auto____0.call(this);
case 1:
return goldly$service$core$wait_chan_result_$_state_machine__41306__auto____1.call(this,state_55225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$service$core$wait_chan_result_$_state_machine__41306__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$service$core$wait_chan_result_$_state_machine__41306__auto____0;
goldly$service$core$wait_chan_result_$_state_machine__41306__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$service$core$wait_chan_result_$_state_machine__41306__auto____1;
return goldly$service$core$wait_chan_result_$_state_machine__41306__auto__;
})()
})();
var state__41383__auto__ = (function (){var statearr_55241 = f__41382__auto__();
(statearr_55241[(6)] = c__41381__auto__);

return statearr_55241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41383__auto__);
}));

return c__41381__auto__;
});
goldly.service.core.process_error = (function goldly$service$core$process_error(data){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.service.core",null,47,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error in clj-service: ",data], null);
}),null)),null,(249),null);

return frontend.notifications.core.add_notification.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0)));
});
goldly.service.core.process_timeout = (function goldly$service$core$process_timeout(data){
var data_safe = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"a","a",-2123407586));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.service.core",null,52,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["timeout in clj-service: ",data_safe], null);
}),null)),null,(250),null);

return frontend.notifications.core.add_notification.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),["timeout clj-fun: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fun","fun",-1265158045).cljs$core$IFn$_invoke$arity$1(data))].join(''));
});
goldly.service.core.run_a_map = (function goldly$service$core$run_a_map(p__55242){
var map__55243 = p__55242;
var map__55243__$1 = cljs.core.__destructure_map(map__55243);
var args = map__55243__$1;
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55243__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55243__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var on_result = (function (r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489))){
return goldly.service.core.process_timeout(args);
} else {
var vec__55244 = r;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55244,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55244,(1),null);
var map__55247 = data;
var map__55247__$1 = cljs.core.__destructure_map(map__55247);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55247__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55247__$1,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(error)){
return goldly.service.core.process_error(data);
} else {
return goldly.service.result.update_atom_where(a,path,result);
}
}
});
return goldly.service.core.run_cb(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path","path",-188191168)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cb","cb",589947841),on_result], null)], 0)));
});
goldly.service.core.run_a = (function goldly$service$core$run_a(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55263 = arguments.length;
var i__5770__auto___55264 = (0);
while(true){
if((i__5770__auto___55264 < len__5769__auto___55263)){
args__5775__auto__.push((arguments[i__5770__auto___55264]));

var G__55265 = (i__5770__auto___55264 + (1));
i__5770__auto___55264 = G__55265;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return goldly.service.core.run_a.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(goldly.service.core.run_a.cljs$core$IFn$_invoke$arity$variadic = (function (a,path,fun,args){
return goldly.service.core.run_a_map(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"a","a",-2123407586),a,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"fun","fun",-1265158045),fun,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}));

(goldly.service.core.run_a.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(goldly.service.core.run_a.cljs$lang$applyTo = (function (seq55248){
var G__55249 = cljs.core.first(seq55248);
var seq55248__$1 = cljs.core.next(seq55248);
var G__55250 = cljs.core.first(seq55248__$1);
var seq55248__$2 = cljs.core.next(seq55248__$1);
var G__55251 = cljs.core.first(seq55248__$2);
var seq55248__$3 = cljs.core.next(seq55248__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55249,G__55250,G__55251,seq55248__$3);
}));


//# sourceMappingURL=goldly.service.core.js.map
