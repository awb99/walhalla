goog.provide('goldly.offline.old');
goldly.offline.old.static_QMARK_ = (function goldly$offline$old$static_QMARK_(){
var pref = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"compile-time","compile-time",214692584),"2023-08-11 21:33:04",new cljs.core.Keyword(null,"tenx","tenx",44439421),false,new cljs.core.Keyword(null,"profile","profile",-545963874),"compile2",new cljs.core.Keyword(null,"main-path","main-path",-1462199157),"",new cljs.core.Keyword(null,"asset-path","asset-path",1500889617),"/r",new cljs.core.Keyword(null,"advanced?","advanced?",-385632194),null,new cljs.core.Keyword(null,"start-user-app","start-user-app",-459208748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("goldly","init","goldly/init",-635145545)], null)], null);
var profile = new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(pref);
var static_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("static",profile);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.offline.old",null,13,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pref:",pref], null);
}),null)),null,(230),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.offline.old",null,14,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["static?: ",static_QMARK_], null);
}),null)),null,(231),null);

return static_QMARK_;
});
goldly.offline.old.error_handler = (function goldly$offline$old$error_handler(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55182 = arguments.length;
var i__5770__auto___55183 = (0);
while(true){
if((i__5770__auto___55183 < len__5769__auto___55182)){
args__5775__auto__.push((arguments[i__5770__auto___55183]));

var G__55184 = (i__5770__auto___55183 + (1));
i__5770__auto___55183 = G__55184;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return goldly.offline.old.error_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(goldly.offline.old.error_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.offline.old",null,18,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error getting data ..."], null);
}),null)),null,(233),null);
}));

(goldly.offline.old.error_handler.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(goldly.offline.old.error_handler.cljs$lang$applyTo = (function (seq55147){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55147));
}));

goldly.offline.old.make_url = (function goldly$offline$old$make_url(ext){
var pref = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"compile-time","compile-time",214692584),"2023-08-11 21:33:04",new cljs.core.Keyword(null,"tenx","tenx",44439421),false,new cljs.core.Keyword(null,"profile","profile",-545963874),"compile2",new cljs.core.Keyword(null,"main-path","main-path",-1462199157),"",new cljs.core.Keyword(null,"asset-path","asset-path",1500889617),"/r",new cljs.core.Keyword(null,"advanced?","advanced?",-385632194),null,new cljs.core.Keyword(null,"start-user-app","start-user-app",-459208748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("goldly","init","goldly/init",-635145545)], null)], null);
var asset_path = new cljs.core.Keyword(null,"asset-path","asset-path",1500889617).cljs$core$IFn$_invoke$arity$1(pref);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(asset_path),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ext)].join('');
});
goldly.offline.old.get_url = (function goldly$offline$old$get_url(uri){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var handler = (function (data){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.offline.old",null,28,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["static/get  %s",uri], null);
}),null)),null,(234),null);

var d = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(data);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.offline.old",null,30,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data: ",d], null);
}),null)),null,(235),null);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),d], null));
});
ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(uri,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),goldly.offline.old.error_handler], null)], 0));

return ch;
});
goldly.offline.old.cljs_explore = (function goldly$offline$old$cljs_explore(){
var url = goldly.offline.old.make_url("sci-cljs-autoload.edn");
return goldly.offline.old.get_url(url);
});
goldly.offline.old.extensions = (function goldly$offline$old$extensions(){
var url = goldly.offline.old.make_url("extensions.edn");
return goldly.offline.old.get_url(url);
});
goldly.offline.old.get_ext_static = (function goldly$offline$old$get_ext_static(ext_name){
var c__41381__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41382__auto__ = (function (){var switch__41305__auto__ = (function (state_55164){
var state_val_55165 = (state_55164[(1)]);
if((state_val_55165 === (1))){
var inst_55149 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_55150 = goldly.offline.old.extensions();
var state_55164__$1 = (function (){var statearr_55170 = state_55164;
(statearr_55170[(7)] = inst_55149);

return statearr_55170;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55164__$1,(2),inst_55150);
} else {
if((state_val_55165 === (2))){
var inst_55149 = (state_55164[(7)]);
var inst_55152 = (state_55164[(2)]);
var inst_55153 = (function (){var ch = inst_55149;
var data = inst_55152;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data: ",data], null);
});
})();
var inst_55154 = (new cljs.core.Delay(inst_55153,null));
var inst_55155 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.offline.old",null,47,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_55154,null,(236),null);
var inst_55156 = (function (){var ch = inst_55149;
var data = inst_55152;
var _ = inst_55155;
return (function (p1__55148_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ext_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__55148_SHARP_));
});
})();
var inst_55157 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_55156,inst_55152);
var inst_55158 = (function (){var ch = inst_55149;
var data = inst_55152;
var _ = inst_55155;
var e = inst_55157;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ext: ",e], null);
});
})();
var inst_55159 = (new cljs.core.Delay(inst_55158,null));
var inst_55160 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.offline.old",null,49,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_55159,null,(237),null);
var state_55164__$1 = (function (){var statearr_55171 = state_55164;
(statearr_55171[(8)] = inst_55160);

return statearr_55171;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55164__$1,(3),inst_55149,inst_55157);
} else {
if((state_val_55165 === (3))){
var inst_55162 = (state_55164[(2)]);
var state_55164__$1 = state_55164;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55164__$1,inst_55162);
} else {
return null;
}
}
}
});
return (function() {
var goldly$offline$old$get_ext_static_$_state_machine__41306__auto__ = null;
var goldly$offline$old$get_ext_static_$_state_machine__41306__auto____0 = (function (){
var statearr_55172 = [null,null,null,null,null,null,null,null,null];
(statearr_55172[(0)] = goldly$offline$old$get_ext_static_$_state_machine__41306__auto__);

(statearr_55172[(1)] = (1));

return statearr_55172;
});
var goldly$offline$old$get_ext_static_$_state_machine__41306__auto____1 = (function (state_55164){
while(true){
var ret_value__41307__auto__ = (function (){try{while(true){
var result__41308__auto__ = switch__41305__auto__(state_55164);
if(cljs.core.keyword_identical_QMARK_(result__41308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41308__auto__;
}
break;
}
}catch (e55174){var ex__41309__auto__ = e55174;
var statearr_55175_55190 = state_55164;
(statearr_55175_55190[(2)] = ex__41309__auto__);


if(cljs.core.seq((state_55164[(4)]))){
var statearr_55176_55191 = state_55164;
(statearr_55176_55191[(1)] = cljs.core.first((state_55164[(4)])));

} else {
throw ex__41309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55193 = state_55164;
state_55164 = G__55193;
continue;
} else {
return ret_value__41307__auto__;
}
break;
}
});
goldly$offline$old$get_ext_static_$_state_machine__41306__auto__ = function(state_55164){
switch(arguments.length){
case 0:
return goldly$offline$old$get_ext_static_$_state_machine__41306__auto____0.call(this);
case 1:
return goldly$offline$old$get_ext_static_$_state_machine__41306__auto____1.call(this,state_55164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$offline$old$get_ext_static_$_state_machine__41306__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$offline$old$get_ext_static_$_state_machine__41306__auto____0;
goldly$offline$old$get_ext_static_$_state_machine__41306__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$offline$old$get_ext_static_$_state_machine__41306__auto____1;
return goldly$offline$old$get_ext_static_$_state_machine__41306__auto__;
})()
})();
var state__41383__auto__ = (function (){var statearr_55177 = f__41382__auto__();
(statearr_55177[(6)] = c__41381__auto__);

return statearr_55177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41383__auto__);
}));

return c__41381__auto__;
});
goldly.offline.old.get_code = (function goldly$offline$old$get_code(filename){
var uri = goldly.offline.old.make_url(filename);
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var handler = (function (data){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.offline.old",null,56,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["static/get-code received code for: %s",filename], null);
}),null)),null,(238),null);

var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),data,new cljs.core.Keyword(null,"filename","filename",-1428840783),filename], null);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),d], null));
});
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.offline.old",null,61,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["getcode url: ",uri], null);
}),null)),null,(239),null);

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(uri,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),goldly.offline.old.error_handler], null)], 0));

return ch;
});

//# sourceMappingURL=goldly.offline.old.js.map
