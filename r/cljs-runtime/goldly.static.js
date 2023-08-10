goog.provide('goldly.static$');
goldly.static$.static_QMARK_ = (function goldly$static$static_QMARK_(){
var pref = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"compile-time","compile-time",214692584),"2023-08-09 21:32:27",new cljs.core.Keyword(null,"tenx","tenx",44439421),false,new cljs.core.Keyword(null,"profile","profile",-545963874),"compile2",new cljs.core.Keyword(null,"main-path","main-path",-1462199157),"",new cljs.core.Keyword(null,"asset-path","asset-path",1500889617),"/r",new cljs.core.Keyword(null,"advanced?","advanced?",-385632194),null,new cljs.core.Keyword(null,"start-user-app","start-user-app",-459208748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("goldly","init","goldly/init",-635145545)], null)], null);
var profile = new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(pref);
var static_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("static",profile);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.static",null,13,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pref:",pref], null);
}),null)),null,(222),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.static",null,14,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["static?: ",static_QMARK_], null);
}),null)),null,(223),null);

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
var pref = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"compile-time","compile-time",214692584),"2023-08-09 21:32:27",new cljs.core.Keyword(null,"tenx","tenx",44439421),false,new cljs.core.Keyword(null,"profile","profile",-545963874),"compile2",new cljs.core.Keyword(null,"main-path","main-path",-1462199157),"",new cljs.core.Keyword(null,"asset-path","asset-path",1500889617),"/r",new cljs.core.Keyword(null,"advanced?","advanced?",-385632194),null,new cljs.core.Keyword(null,"start-user-app","start-user-app",-459208748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("goldly","init","goldly/init",-635145545)], null)], null);
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
var c__41381__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41382__auto__ = (function (){var switch__41305__auto__ = (function (state_55114){
var state_val_55115 = (state_55114[(1)]);
if((state_val_55115 === (1))){
var inst_55092 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_55094 = goldly.static$.extensions();
var state_55114__$1 = (function (){var statearr_55116 = state_55114;
(statearr_55116[(7)] = inst_55092);

return statearr_55116;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55114__$1,(2),inst_55094);
} else {
if((state_val_55115 === (2))){
var inst_55092 = (state_55114[(7)]);
var inst_55096 = (state_55114[(2)]);
var inst_55097 = (function (){var ch = inst_55092;
var data = inst_55096;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data: ",data], null);
});
})();
var inst_55098 = (new cljs.core.Delay(inst_55097,null));
var inst_55099 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.static",null,47,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_55098,null,(228),null);
var inst_55100 = (function (){var ch = inst_55092;
var data = inst_55096;
var _ = inst_55099;
return (function (p1__55087_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ext_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__55087_SHARP_));
});
})();
var inst_55101 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_55100,inst_55096);
var inst_55106 = (function (){var ch = inst_55092;
var data = inst_55096;
var _ = inst_55099;
var e = inst_55101;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ext: ",e], null);
});
})();
var inst_55107 = (new cljs.core.Delay(inst_55106,null));
var inst_55108 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.static",null,49,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_55107,null,(229),null);
var state_55114__$1 = (function (){var statearr_55117 = state_55114;
(statearr_55117[(8)] = inst_55108);

return statearr_55117;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_55114__$1,(3),inst_55092,inst_55101);
} else {
if((state_val_55115 === (3))){
var inst_55110 = (state_55114[(2)]);
var state_55114__$1 = state_55114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55114__$1,inst_55110);
} else {
return null;
}
}
}
});
return (function() {
var goldly$static$get_ext_static_$_state_machine__41306__auto__ = null;
var goldly$static$get_ext_static_$_state_machine__41306__auto____0 = (function (){
var statearr_55118 = [null,null,null,null,null,null,null,null,null];
(statearr_55118[(0)] = goldly$static$get_ext_static_$_state_machine__41306__auto__);

(statearr_55118[(1)] = (1));

return statearr_55118;
});
var goldly$static$get_ext_static_$_state_machine__41306__auto____1 = (function (state_55114){
while(true){
var ret_value__41307__auto__ = (function (){try{while(true){
var result__41308__auto__ = switch__41305__auto__(state_55114);
if(cljs.core.keyword_identical_QMARK_(result__41308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41308__auto__;
}
break;
}
}catch (e55119){var ex__41309__auto__ = e55119;
var statearr_55120_55132 = state_55114;
(statearr_55120_55132[(2)] = ex__41309__auto__);


if(cljs.core.seq((state_55114[(4)]))){
var statearr_55121_55133 = state_55114;
(statearr_55121_55133[(1)] = cljs.core.first((state_55114[(4)])));

} else {
throw ex__41309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55134 = state_55114;
state_55114 = G__55134;
continue;
} else {
return ret_value__41307__auto__;
}
break;
}
});
goldly$static$get_ext_static_$_state_machine__41306__auto__ = function(state_55114){
switch(arguments.length){
case 0:
return goldly$static$get_ext_static_$_state_machine__41306__auto____0.call(this);
case 1:
return goldly$static$get_ext_static_$_state_machine__41306__auto____1.call(this,state_55114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$static$get_ext_static_$_state_machine__41306__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$static$get_ext_static_$_state_machine__41306__auto____0;
goldly$static$get_ext_static_$_state_machine__41306__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$static$get_ext_static_$_state_machine__41306__auto____1;
return goldly$static$get_ext_static_$_state_machine__41306__auto__;
})()
})();
var state__41383__auto__ = (function (){var statearr_55122 = f__41382__auto__();
(statearr_55122[(6)] = c__41381__auto__);

return statearr_55122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41383__auto__);
}));

return c__41381__auto__;
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
