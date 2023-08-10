goog.provide('goldly.static$');
goldly.static$.static_QMARK_ = (function goldly$static$static_QMARK_(){
var pref = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"compile-time","compile-time",214692584),"2023-08-09 14:29:19",new cljs.core.Keyword(null,"tenx","tenx",44439421),false,new cljs.core.Keyword(null,"profile","profile",-545963874),"compile2",new cljs.core.Keyword(null,"main-path","main-path",-1462199157),"",new cljs.core.Keyword(null,"asset-path","asset-path",1500889617),"/r",new cljs.core.Keyword(null,"advanced?","advanced?",-385632194),null,new cljs.core.Keyword(null,"start-user-app","start-user-app",-459208748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("goldly","init","goldly/init",-635145545)], null)], null);
var profile = new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(pref);
var static_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("static",profile);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.static",null,13,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pref:",pref], null);
}),null)),null,(222),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.static",null,14,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["static?: ",static_QMARK_], null);
}),null)),null,(224),null);

return static_QMARK_;
});
goldly.static$.error_handler = (function goldly$static$error_handler(var_args){
var args__5775__auto__ = [];
var len__5769__auto___55127 = arguments.length;
var i__5770__auto___55128 = (0);
while(true){
if((i__5770__auto___55128 < len__5769__auto___55127)){
args__5775__auto__.push((arguments[i__5770__auto___55128]));

var G__55129 = (i__5770__auto___55128 + (1));
i__5770__auto___55128 = G__55129;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return goldly.static$.error_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(goldly.static$.error_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.static",null,18,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error getting data ..."], null);
}),null)),null,(225),null);
}));

(goldly.static$.error_handler.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(goldly.static$.error_handler.cljs$lang$applyTo = (function (seq55081){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq55081));
}));

goldly.static$.make_url = (function goldly$static$make_url(ext){
var pref = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"compile-time","compile-time",214692584),"2023-08-09 14:29:19",new cljs.core.Keyword(null,"tenx","tenx",44439421),false,new cljs.core.Keyword(null,"profile","profile",-545963874),"compile2",new cljs.core.Keyword(null,"main-path","main-path",-1462199157),"",new cljs.core.Keyword(null,"asset-path","asset-path",1500889617),"/r",new cljs.core.Keyword(null,"advanced?","advanced?",-385632194),null,new cljs.core.Keyword(null,"start-user-app","start-user-app",-459208748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("goldly","init","goldly/init",-635145545)], null)], null);
var asset_path = new cljs.core.Keyword(null,"asset-path","asset-path",1500889617).cljs$core$IFn$_invoke$arity$1(pref);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(asset_path),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ext)].join('');
});
goldly.static$.get_url = (function goldly$static$get_url(uri){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var handler = (function (data){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.static",null,28,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["static/get  %s",uri], null);
}),null)),null,(226),null);

var d = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(data);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.static",null,30,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data: ",d], null);
}),null)),null,(227),null);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),d], null));
});
ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(uri,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),goldly.static$.error_handler], null)], 0));

return ch;
});
goldly.static$.cljs_explore = (function goldly$static$cljs_explore(){
var url = goldly.static$.make_url("sci-cljs-autoload.edn");
return goldly.static$.get_url(url);
});
goldly.static$.extensions = (function goldly$static$extensions(){
var url = goldly.static$.make_url("extensions.edn");
return goldly.static$.get_url(url);
});
goldly.static$.get_ext_static = (function goldly$static$get_ext_static(ext_name){
var c__41395__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41396__auto__ = (function (){var switch__41305__auto__ = (function (state_55102){
var state_val_55104 = (state_55102[(1)]);
if((state_val_55104 === (1))){
var inst_55083 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_55088 = goldly.static$.extensions();
var state_55102__$1 = (function (){var statearr_55109 = state_55102;
(statearr_55109[(7)] = inst_55083);

return statearr_55109;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55102__$1,(2),inst_55088);
} else {
if((state_val_55104 === (2))){
var inst_55083 = (state_55102[(7)]);
var inst_55090 = (state_55102[(2)]);
var inst_55091 = (function (){var ch = inst_55083;
var data = inst_55090;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data: ",data], null);
});
})();
var inst_55092 = (new cljs.core.Delay(inst_55091,null));
var inst_55093 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.static",null,47,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_55092,null,(228),null);
var inst_55094 = (function (){var ch = inst_55083;
var data = inst_55090;
var _ = inst_55093;
return (function (p1__55082_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ext_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__55082_SHARP_));
});
})();
var inst_55095 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_55094,inst_55090);
var inst_55096 = (function (){var ch = inst_55083;
var data = inst_55090;
var _ = inst_55093;
var e = inst_55095;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ext: ",e], null);
});
})();
var inst_55097 = (new cljs.core.Delay(inst_55096,null));
var inst_55098 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.static",null,49,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_55097,null,(229),null);
var state_55102__$1 = (function (){var statearr_55110 = state_55102;
(statearr_55110[(8)] = inst_55098);

return statearr_55110;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55102__$1,(3),inst_55083,inst_55095);
} else {
if((state_val_55104 === (3))){
var inst_55100 = (state_55102[(2)]);
var state_55102__$1 = state_55102;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55102__$1,inst_55100);
} else {
return null;
}
}
}
});
return (function() {
var goldly$static$get_ext_static_$_state_machine__41306__auto__ = null;
var goldly$static$get_ext_static_$_state_machine__41306__auto____0 = (function (){
var statearr_55112 = [null,null,null,null,null,null,null,null,null];
(statearr_55112[(0)] = goldly$static$get_ext_static_$_state_machine__41306__auto__);

(statearr_55112[(1)] = (1));

return statearr_55112;
});
var goldly$static$get_ext_static_$_state_machine__41306__auto____1 = (function (state_55102){
while(true){
var ret_value__41307__auto__ = (function (){try{while(true){
var result__41308__auto__ = switch__41305__auto__(state_55102);
if(cljs.core.keyword_identical_QMARK_(result__41308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41308__auto__;
}
break;
}
}catch (e55113){var ex__41309__auto__ = e55113;
var statearr_55114_55135 = state_55102;
(statearr_55114_55135[(2)] = ex__41309__auto__);


if(cljs.core.seq((state_55102[(4)]))){
var statearr_55115_55136 = state_55102;
(statearr_55115_55136[(1)] = cljs.core.first((state_55102[(4)])));

} else {
throw ex__41309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55137 = state_55102;
state_55102 = G__55137;
continue;
} else {
return ret_value__41307__auto__;
}
break;
}
});
goldly$static$get_ext_static_$_state_machine__41306__auto__ = function(state_55102){
switch(arguments.length){
case 0:
return goldly$static$get_ext_static_$_state_machine__41306__auto____0.call(this);
case 1:
return goldly$static$get_ext_static_$_state_machine__41306__auto____1.call(this,state_55102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$static$get_ext_static_$_state_machine__41306__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$static$get_ext_static_$_state_machine__41306__auto____0;
goldly$static$get_ext_static_$_state_machine__41306__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$static$get_ext_static_$_state_machine__41306__auto____1;
return goldly$static$get_ext_static_$_state_machine__41306__auto__;
})()
})();
var state__41397__auto__ = (function (){var statearr_55121 = f__41396__auto__();
(statearr_55121[(6)] = c__41395__auto__);

return statearr_55121;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41397__auto__);
}));

return c__41395__auto__;
});
goldly.static$.get_code = (function goldly$static$get_code(filename){
var uri = goldly.static$.make_url(filename);
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var handler = (function (data){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.static",null,56,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["static/get-code received code for: %s",filename], null);
}),null)),null,(230),null);

var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),data,new cljs.core.Keyword(null,"filename","filename",-1428840783),filename], null);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),d], null));
});
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.static",null,61,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["getcode url: ",uri], null);
}),null)),null,(231),null);

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(uri,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),goldly.static$.error_handler], null)], 0));

return ch;
});

//# sourceMappingURL=goldly.static.js.map
