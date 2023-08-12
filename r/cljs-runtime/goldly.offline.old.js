goog.provide('goldly.offline.old');
goldly.offline.old.static_QMARK_ = (function goldly$offline$old$static_QMARK_(){
var pref = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"compile-time","compile-time",214692584),"2023-08-12 17:20:39",new cljs.core.Keyword(null,"tenx","tenx",44439421),false,new cljs.core.Keyword(null,"profile","profile",-545963874),"compile2",new cljs.core.Keyword(null,"main-path","main-path",-1462199157),"",new cljs.core.Keyword(null,"asset-path","asset-path",1500889617),"/r",new cljs.core.Keyword(null,"advanced?","advanced?",-385632194),null,new cljs.core.Keyword(null,"start-user-app","start-user-app",-459208748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("goldly","init","goldly/init",-635145545)], null)], null);
var profile = new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(pref);
var static_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("static",profile);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.offline.old",null,13,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pref:",pref], null);
}),null)),null,(206),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.offline.old",null,14,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["static?: ",static_QMARK_], null);
}),null)),null,(207),null);

return static_QMARK_;
});
goldly.offline.old.error_handler = (function goldly$offline$old$error_handler(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55094 = arguments.length;
var i__5770__auto___55095 = (0);
while(true){
if((i__5770__auto___55095 < len__5769__auto___55094)){
args__5775__auto__.push((arguments[i__5770__auto___55095]));

var G__55096 = (i__5770__auto___55095 + (1));
i__5770__auto___55095 = G__55096;
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
}),null)),null,(209),null);
}));

(goldly.offline.old.error_handler.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(goldly.offline.old.error_handler.cljs$lang$applyTo = (function (seq55024){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55024));
}));

goldly.offline.old.make_url = (function goldly$offline$old$make_url(ext){
var pref = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"compile-time","compile-time",214692584),"2023-08-12 17:20:39",new cljs.core.Keyword(null,"tenx","tenx",44439421),false,new cljs.core.Keyword(null,"profile","profile",-545963874),"compile2",new cljs.core.Keyword(null,"main-path","main-path",-1462199157),"",new cljs.core.Keyword(null,"asset-path","asset-path",1500889617),"/r",new cljs.core.Keyword(null,"advanced?","advanced?",-385632194),null,new cljs.core.Keyword(null,"start-user-app","start-user-app",-459208748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("goldly","init","goldly/init",-635145545)], null)], null);
var asset_path = new cljs.core.Keyword(null,"asset-path","asset-path",1500889617).cljs$core$IFn$_invoke$arity$1(pref);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(asset_path),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ext)].join('');
});
goldly.offline.old.get_url = (function goldly$offline$old$get_url(uri){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var handler = (function (data){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.offline.old",null,28,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["static/get  %s",uri], null);
}),null)),null,(210),null);

var d = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(data);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.offline.old",null,30,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data: ",d], null);
}),null)),null,(211),null);

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
var f__41382__auto__ = (function (){var switch__41305__auto__ = (function (state_55050){
var state_val_55051 = (state_55050[(1)]);
if((state_val_55051 === (1))){
var inst_55031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_55033 = goldly.offline.old.extensions();
var state_55050__$1 = (function (){var statearr_55053 = state_55050;
(statearr_55053[(7)] = inst_55031);

return statearr_55053;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55050__$1,(2),inst_55033);
} else {
if((state_val_55051 === (2))){
var inst_55031 = (state_55050[(7)]);
var inst_55035 = (state_55050[(2)]);
var inst_55039 = (function (){var ch = inst_55031;
var data = inst_55035;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data: ",data], null);
});
})();
var inst_55040 = (new cljs.core.Delay(inst_55039,null));
var inst_55041 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.offline.old",null,47,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_55040,null,(212),null);
var inst_55042 = (function (){var ch = inst_55031;
var data = inst_55035;
var _ = inst_55041;
return (function (p1__55025_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ext_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__55025_SHARP_));
});
})();
var inst_55043 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_55042,inst_55035);
var inst_55044 = (function (){var ch = inst_55031;
var data = inst_55035;
var _ = inst_55041;
var e = inst_55043;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ext: ",e], null);
});
})();
var inst_55045 = (new cljs.core.Delay(inst_55044,null));
var inst_55046 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.offline.old",null,49,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_55045,null,(213),null);
var state_55050__$1 = (function (){var statearr_55064 = state_55050;
(statearr_55064[(8)] = inst_55046);

return statearr_55064;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55050__$1,(3),inst_55031,inst_55043);
} else {
if((state_val_55051 === (3))){
var inst_55048 = (state_55050[(2)]);
var state_55050__$1 = state_55050;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55050__$1,inst_55048);
} else {
return null;
}
}
}
});
return (function() {
var goldly$offline$old$get_ext_static_$_state_machine__41306__auto__ = null;
var goldly$offline$old$get_ext_static_$_state_machine__41306__auto____0 = (function (){
var statearr_55067 = [null,null,null,null,null,null,null,null,null];
(statearr_55067[(0)] = goldly$offline$old$get_ext_static_$_state_machine__41306__auto__);

(statearr_55067[(1)] = (1));

return statearr_55067;
});
var goldly$offline$old$get_ext_static_$_state_machine__41306__auto____1 = (function (state_55050){
while(true){
var ret_value__41307__auto__ = (function (){try{while(true){
var result__41308__auto__ = switch__41305__auto__(state_55050);
if(cljs.core.keyword_identical_QMARK_(result__41308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41308__auto__;
}
break;
}
}catch (e55068){var ex__41309__auto__ = e55068;
var statearr_55069_55106 = state_55050;
(statearr_55069_55106[(2)] = ex__41309__auto__);


if(cljs.core.seq((state_55050[(4)]))){
var statearr_55070_55107 = state_55050;
(statearr_55070_55107[(1)] = cljs.core.first((state_55050[(4)])));

} else {
throw ex__41309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55109 = state_55050;
state_55050 = G__55109;
continue;
} else {
return ret_value__41307__auto__;
}
break;
}
});
goldly$offline$old$get_ext_static_$_state_machine__41306__auto__ = function(state_55050){
switch(arguments.length){
case 0:
return goldly$offline$old$get_ext_static_$_state_machine__41306__auto____0.call(this);
case 1:
return goldly$offline$old$get_ext_static_$_state_machine__41306__auto____1.call(this,state_55050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$offline$old$get_ext_static_$_state_machine__41306__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$offline$old$get_ext_static_$_state_machine__41306__auto____0;
goldly$offline$old$get_ext_static_$_state_machine__41306__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$offline$old$get_ext_static_$_state_machine__41306__auto____1;
return goldly$offline$old$get_ext_static_$_state_machine__41306__auto__;
})()
})();
var state__41383__auto__ = (function (){var statearr_55071 = f__41382__auto__();
(statearr_55071[(6)] = c__41381__auto__);

return statearr_55071;
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
}),null)),null,(217),null);

var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),data,new cljs.core.Keyword(null,"filename","filename",-1428840783),filename], null);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),d], null));
});
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.offline.old",null,61,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["getcode url: ",uri], null);
}),null)),null,(218),null);

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(uri,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),goldly.offline.old.error_handler], null)], 0));

return ch;
});

//# sourceMappingURL=goldly.offline.old.js.map
