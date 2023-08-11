goog.provide('goldly.offline.old');
goldly.offline.old.static_QMARK_ = (function goldly$offline$old$static_QMARK_(){
var pref = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"compile-time","compile-time",214692584),"2023-08-11 13:39:30",new cljs.core.Keyword(null,"tenx","tenx",44439421),false,new cljs.core.Keyword(null,"profile","profile",-545963874),"compile2",new cljs.core.Keyword(null,"main-path","main-path",-1462199157),"",new cljs.core.Keyword(null,"asset-path","asset-path",1500889617),"/r",new cljs.core.Keyword(null,"advanced?","advanced?",-385632194),null,new cljs.core.Keyword(null,"start-user-app","start-user-app",-459208748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("goldly","init","goldly/init",-635145545)], null)], null);
var profile = new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(pref);
var static_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("static",profile);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.offline.old",null,13,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["pref:",pref], null);
}),null)),null,(86),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.offline.old",null,14,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["static?: ",static_QMARK_], null);
}),null)),null,(87),null);

return static_QMARK_;
});
goldly.offline.old.error_handler = (function goldly$offline$old$error_handler(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52077 = arguments.length;
var i__5770__auto___52078 = (0);
while(true){
if((i__5770__auto___52078 < len__5769__auto___52077)){
args__5775__auto__.push((arguments[i__5770__auto___52078]));

var G__52079 = (i__5770__auto___52078 + (1));
i__5770__auto___52078 = G__52079;
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
}),null)),null,(88),null);
}));

(goldly.offline.old.error_handler.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(goldly.offline.old.error_handler.cljs$lang$applyTo = (function (seq51918){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq51918));
}));

goldly.offline.old.make_url = (function goldly$offline$old$make_url(ext){
var pref = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"compile-time","compile-time",214692584),"2023-08-11 13:39:30",new cljs.core.Keyword(null,"tenx","tenx",44439421),false,new cljs.core.Keyword(null,"profile","profile",-545963874),"compile2",new cljs.core.Keyword(null,"main-path","main-path",-1462199157),"",new cljs.core.Keyword(null,"asset-path","asset-path",1500889617),"/r",new cljs.core.Keyword(null,"advanced?","advanced?",-385632194),null,new cljs.core.Keyword(null,"start-user-app","start-user-app",-459208748),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("goldly","init","goldly/init",-635145545)], null)], null);
var asset_path = new cljs.core.Keyword(null,"asset-path","asset-path",1500889617).cljs$core$IFn$_invoke$arity$1(pref);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(asset_path),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ext)].join('');
});
goldly.offline.old.get_url = (function goldly$offline$old$get_url(uri){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var handler = (function (data){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.offline.old",null,28,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["static/get  %s",uri], null);
}),null)),null,(89),null);

var d = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(data);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.offline.old",null,30,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data: ",d], null);
}),null)),null,(90),null);

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
var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_52002){
var state_val_52008 = (state_52002[(1)]);
if((state_val_52008 === (1))){
var inst_51960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var inst_51977 = goldly.offline.old.extensions();
var state_52002__$1 = (function (){var statearr_52031 = state_52002;
(statearr_52031[(7)] = inst_51960);

return statearr_52031;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52002__$1,(2),inst_51977);
} else {
if((state_val_52008 === (2))){
var inst_51960 = (state_52002[(7)]);
var inst_51979 = (state_52002[(2)]);
var inst_51987 = (function (){var ch = inst_51960;
var data = inst_51979;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["data: ",data], null);
});
})();
var inst_51988 = (new cljs.core.Delay(inst_51987,null));
var inst_51989 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.offline.old",null,47,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_51988,null,(91),null);
var inst_51990 = (function (){var ch = inst_51960;
var data = inst_51979;
var _ = inst_51989;
return (function (p1__51932_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ext_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__51932_SHARP_));
});
})();
var inst_51991 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inst_51990,inst_51979);
var inst_51992 = (function (){var ch = inst_51960;
var data = inst_51979;
var _ = inst_51989;
var e = inst_51991;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ext: ",e], null);
});
})();
var inst_51993 = (new cljs.core.Delay(inst_51992,null));
var inst_51994 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.offline.old",null,49,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_51993,null,(92),null);
var state_52002__$1 = (function (){var statearr_52048 = state_52002;
(statearr_52048[(8)] = inst_51994);

return statearr_52048;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52002__$1,(3),inst_51960,inst_51991);
} else {
if((state_val_52008 === (3))){
var inst_51996 = (state_52002[(2)]);
var state_52002__$1 = state_52002;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52002__$1,inst_51996);
} else {
return null;
}
}
}
});
return (function() {
var goldly$offline$old$get_ext_static_$_state_machine__41225__auto__ = null;
var goldly$offline$old$get_ext_static_$_state_machine__41225__auto____0 = (function (){
var statearr_52056 = [null,null,null,null,null,null,null,null,null];
(statearr_52056[(0)] = goldly$offline$old$get_ext_static_$_state_machine__41225__auto__);

(statearr_52056[(1)] = (1));

return statearr_52056;
});
var goldly$offline$old$get_ext_static_$_state_machine__41225__auto____1 = (function (state_52002){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_52002);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e52061){var ex__41228__auto__ = e52061;
var statearr_52062_52090 = state_52002;
(statearr_52062_52090[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_52002[(4)]))){
var statearr_52063_52091 = state_52002;
(statearr_52063_52091[(1)] = cljs.core.first((state_52002[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52094 = state_52002;
state_52002 = G__52094;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$offline$old$get_ext_static_$_state_machine__41225__auto__ = function(state_52002){
switch(arguments.length){
case 0:
return goldly$offline$old$get_ext_static_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$offline$old$get_ext_static_$_state_machine__41225__auto____1.call(this,state_52002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$offline$old$get_ext_static_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$offline$old$get_ext_static_$_state_machine__41225__auto____0;
goldly$offline$old$get_ext_static_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$offline$old$get_ext_static_$_state_machine__41225__auto____1;
return goldly$offline$old$get_ext_static_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_52064 = f__41248__auto__();
(statearr_52064[(6)] = c__41247__auto__);

return statearr_52064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
});
goldly.offline.old.get_code = (function goldly$offline$old$get_code(filename){
var uri = goldly.offline.old.make_url(filename);
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var handler = (function (data){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.offline.old",null,56,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["static/get-code received code for: %s",filename], null);
}),null)),null,(93),null);

var d = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"code","code",1586293142),data,new cljs.core.Keyword(null,"filename","filename",-1428840783),filename], null);
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"result","result",1415092211),d], null));
});
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.offline.old",null,61,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["getcode url: ",uri], null);
}),null)),null,(94),null);

ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(uri,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),handler,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),goldly.offline.old.error_handler], null)], 0));

return ch;
});

//# sourceMappingURL=goldly.offline.old.js.map
