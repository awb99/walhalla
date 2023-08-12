goog.provide('goldly.service.core');
goldly.service.core.print_result = (function goldly$service$core$print_result(p__55059){
var vec__55060 = p__55059;
var event_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55060,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55060,(1),null);
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"goldly.service.core",null,10,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["service result rcvd: type: %s data: %s",event_type,data], null);
}),null)),null,(214),null);
});
goldly.service.core.run_cb = (function goldly$service$core$run_cb(p__55065){
var map__55066 = p__55065;
var map__55066__$1 = cljs.core.__destructure_map(map__55066);
var params = map__55066__$1;
var fun = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55066__$1,new cljs.core.Keyword(null,"fun","fun",-1265158045));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55066__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55066__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(120000));
var cb = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55066__$1,new cljs.core.Keyword(null,"cb","cb",589947841),goldly.service.core.print_result);
var p_clean = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"where","where",-2044795965)], 0));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.service.core",null,19,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["running service :%s args: %s",fun,args], null);
}),null)),null,(215),null);

modular.ws.core.send_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("goldly","service","goldly/service",-1054858282),p_clean], null),cb,timeout);

return null;
});
goldly.service.core.run = (function goldly$service$core$run(params){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var cb = (function (event){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.service.core",null,28,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["service/run cb: %s",event], null);
}),null)),null,(216),null);


if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"timeout","timeout",-318625318)], null));
} else {
var vec__55072 = event;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55072,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55072,(1),null);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,data);
}
});
goldly.service.core.run_cb(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"cb","cb",589947841),cb));

return ch;
});
goldly.service.core.wait_chan_result = (function goldly$service$core$wait_chan_result(ch,fn_success,fn_err){
var c__41381__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41382__auto__ = (function (){var switch__41305__auto__ = (function (state_55092){
var state_val_55093 = (state_55092[(1)]);
if((state_val_55093 === (1))){
var state_55092__$1 = state_55092;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55092__$1,(2),ch);
} else {
if((state_val_55093 === (2))){
var inst_55079 = (state_55092[(7)]);
var inst_55077 = (state_55092[(2)]);
var inst_55078 = cljs.core.__destructure_map(inst_55077);
var inst_55079__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55078,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_55080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55078,new cljs.core.Keyword(null,"result","result",1415092211));
var state_55092__$1 = (function (){var statearr_55097 = state_55092;
(statearr_55097[(7)] = inst_55079__$1);

(statearr_55097[(8)] = inst_55080);

return statearr_55097;
})();
if(cljs.core.truth_(inst_55079__$1)){
var statearr_55098_55129 = state_55092__$1;
(statearr_55098_55129[(1)] = (3));

} else {
var statearr_55099_55130 = state_55092__$1;
(statearr_55099_55130[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55093 === (3))){
var inst_55079 = (state_55092[(7)]);
var inst_55082 = (fn_err.cljs$core$IFn$_invoke$arity$1 ? fn_err.cljs$core$IFn$_invoke$arity$1(inst_55079) : fn_err.call(null,inst_55079));
var state_55092__$1 = state_55092;
var statearr_55100_55131 = state_55092__$1;
(statearr_55100_55131[(2)] = inst_55082);

(statearr_55100_55131[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55093 === (4))){
var state_55092__$1 = state_55092;
var statearr_55101_55132 = state_55092__$1;
(statearr_55101_55132[(2)] = null);

(statearr_55101_55132[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55093 === (5))){
var inst_55080 = (state_55092[(8)]);
var inst_55085 = (state_55092[(2)]);
var state_55092__$1 = (function (){var statearr_55102 = state_55092;
(statearr_55102[(9)] = inst_55085);

return statearr_55102;
})();
if(cljs.core.truth_(inst_55080)){
var statearr_55103_55133 = state_55092__$1;
(statearr_55103_55133[(1)] = (6));

} else {
var statearr_55104_55134 = state_55092__$1;
(statearr_55104_55134[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55093 === (6))){
var inst_55080 = (state_55092[(8)]);
var inst_55087 = (fn_success.cljs$core$IFn$_invoke$arity$1 ? fn_success.cljs$core$IFn$_invoke$arity$1(inst_55080) : fn_success.call(null,inst_55080));
var state_55092__$1 = state_55092;
var statearr_55105_55135 = state_55092__$1;
(statearr_55105_55135[(2)] = inst_55087);

(statearr_55105_55135[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55093 === (7))){
var state_55092__$1 = state_55092;
var statearr_55108_55136 = state_55092__$1;
(statearr_55108_55136[(2)] = null);

(statearr_55108_55136[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55093 === (8))){
var inst_55090 = (state_55092[(2)]);
var state_55092__$1 = state_55092;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55092__$1,inst_55090);
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
var statearr_55110 = [null,null,null,null,null,null,null,null,null,null];
(statearr_55110[(0)] = goldly$service$core$wait_chan_result_$_state_machine__41306__auto__);

(statearr_55110[(1)] = (1));

return statearr_55110;
});
var goldly$service$core$wait_chan_result_$_state_machine__41306__auto____1 = (function (state_55092){
while(true){
var ret_value__41307__auto__ = (function (){try{while(true){
var result__41308__auto__ = switch__41305__auto__(state_55092);
if(cljs.core.keyword_identical_QMARK_(result__41308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41308__auto__;
}
break;
}
}catch (e55111){var ex__41309__auto__ = e55111;
var statearr_55112_55137 = state_55092;
(statearr_55112_55137[(2)] = ex__41309__auto__);


if(cljs.core.seq((state_55092[(4)]))){
var statearr_55113_55138 = state_55092;
(statearr_55113_55138[(1)] = cljs.core.first((state_55092[(4)])));

} else {
throw ex__41309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55139 = state_55092;
state_55092 = G__55139;
continue;
} else {
return ret_value__41307__auto__;
}
break;
}
});
goldly$service$core$wait_chan_result_$_state_machine__41306__auto__ = function(state_55092){
switch(arguments.length){
case 0:
return goldly$service$core$wait_chan_result_$_state_machine__41306__auto____0.call(this);
case 1:
return goldly$service$core$wait_chan_result_$_state_machine__41306__auto____1.call(this,state_55092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$service$core$wait_chan_result_$_state_machine__41306__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$service$core$wait_chan_result_$_state_machine__41306__auto____0;
goldly$service$core$wait_chan_result_$_state_machine__41306__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$service$core$wait_chan_result_$_state_machine__41306__auto____1;
return goldly$service$core$wait_chan_result_$_state_machine__41306__auto__;
})()
})();
var state__41383__auto__ = (function (){var statearr_55114 = f__41382__auto__();
(statearr_55114[(6)] = c__41381__auto__);

return statearr_55114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41383__auto__);
}));

return c__41381__auto__;
});
goldly.service.core.process_error = (function goldly$service$core$process_error(data){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.service.core",null,47,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error in clj-service: ",data], null);
}),null)),null,(219),null);

return frontend.notifications.core.add_notification.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0)));
});
goldly.service.core.process_timeout = (function goldly$service$core$process_timeout(data){
var data_safe = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"a","a",-2123407586));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.service.core",null,52,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["timeout in clj-service: ",data_safe], null);
}),null)),null,(220),null);

return frontend.notifications.core.add_notification.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error","error",-978969032),["timeout clj-fun: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fun","fun",-1265158045).cljs$core$IFn$_invoke$arity$1(data))].join(''));
});
goldly.service.core.run_a_map = (function goldly$service$core$run_a_map(p__55115){
var map__55116 = p__55115;
var map__55116__$1 = cljs.core.__destructure_map(map__55116);
var args = map__55116__$1;
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55116__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55116__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var on_result = (function (r){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489))){
return goldly.service.core.process_timeout(args);
} else {
var vec__55118 = r;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55118,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55118,(1),null);
var map__55121 = data;
var map__55121__$1 = cljs.core.__destructure_map(map__55121);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55121__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55121__$1,new cljs.core.Keyword(null,"error","error",-978969032));
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
var len__5769__auto___55140 = arguments.length;
var i__5770__auto___55141 = (0);
while(true){
if((i__5770__auto___55141 < len__5769__auto___55140)){
args__5775__auto__.push((arguments[i__5770__auto___55141]));

var G__55142 = (i__5770__auto___55141 + (1));
i__5770__auto___55141 = G__55142;
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
(goldly.service.core.run_a.cljs$lang$applyTo = (function (seq55123){
var G__55124 = cljs.core.first(seq55123);
var seq55123__$1 = cljs.core.next(seq55123);
var G__55125 = cljs.core.first(seq55123__$1);
var seq55123__$2 = cljs.core.next(seq55123__$1);
var G__55126 = cljs.core.first(seq55123__$2);
var seq55123__$3 = cljs.core.next(seq55123__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55124,G__55125,G__55126,seq55123__$3);
}));


//# sourceMappingURL=goldly.service.core.js.map
