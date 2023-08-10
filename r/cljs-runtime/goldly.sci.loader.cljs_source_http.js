goog.provide('goldly.sci.loader.cljs_source_http');
goldly.sci.loader.cljs_source_http.filename_to_url_goldly = (function goldly$sci$loader$cljs_source_http$filename_to_url_goldly(filename){
return ["/code/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join('');
});
goldly.sci.loader.cljs_source_http.application_url = (function goldly$sci$loader$cljs_source_http$application_url(){
return window.location.href;
});
goldly.sci.loader.cljs_source_http.filename_to_url_github = (function goldly$sci$loader$cljs_source_http$filename_to_url_github(filename){
var url = goldly.sci.loader.cljs_source_http.application_url();
var url_base = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(url,(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(url,"/"));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.cljs-source-http",null,19,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["github url-base: ",url_base], null);
}),null)),null,(83),null);

return [url_base,"code/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join('');
});
goldly.sci.loader.cljs_source_http.filename_to_url = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(goldly.sci.loader.cljs_source_http.filename_to_url_goldly);
goldly.sci.loader.cljs_source_http.set_github_load_mode = (function goldly$sci$loader$cljs_source_http$set_github_load_mode(){
return cljs.core.reset_BANG_(goldly.sci.loader.cljs_source_http.filename_to_url,goldly.sci.loader.cljs_source_http.filename_to_url_github);
});
goldly.sci.loader.cljs_source_http.load_module_sci = (function goldly$sci$loader$cljs_source_http$load_module_sci(p__51918){
var map__51919 = p__51918;
var map__51919__$1 = cljs.core.__destructure_map(map__51919);
var d = map__51919__$1;
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51919__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var libname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51919__$1,new cljs.core.Keyword(null,"libname","libname",135992497));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51919__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51919__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var property_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51919__$1,new cljs.core.Keyword(null,"property-path","property-path",201212852));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.cljs-source-http",null,33,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-sci-src","libname:",libname,"ns: ",ns,"opts:",opts], null);
}),null)),null,(84),null);

var filename = [goldly.sci.loader.cljs_source.ns__GT_filename(cljs.core.str.cljs$core$IFn$_invoke$arity$1(libname)),".cljs"].join('');
var url = (function (){var fexpr__51920 = cljs.core.deref(goldly.sci.loader.cljs_source_http.filename_to_url);
return (fexpr__51920.cljs$core$IFn$_invoke$arity$1 ? fexpr__51920.cljs$core$IFn$_invoke$arity$1(filename) : fexpr__51920.call(null,filename));
})();
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.cljs-source-http",null,36,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loading filename: ",filename], null);
}),null)),null,(85),null);

return (new Promise((function (resolve,reject){
var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_51975){
var state_val_51979 = (state_51975[(1)]);
if((state_val_51979 === (1))){
var inst_51921 = (state_51975[(7)]);
var inst_51921__$1 = opts;
var state_51975__$1 = (function (){var statearr_52019 = state_51975;
(statearr_52019[(7)] = inst_51921__$1);

return statearr_52019;
})();
if(cljs.core.truth_(inst_51921__$1)){
var statearr_52021_52106 = state_51975__$1;
(statearr_52021_52106[(1)] = (2));

} else {
var statearr_52022_52107 = state_51975__$1;
(statearr_52022_52107[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (2))){
var inst_51921 = (state_51975[(7)]);
var state_51975__$1 = state_51975;
var statearr_52025_52108 = state_51975__$1;
(statearr_52025_52108[(2)] = inst_51921);

(statearr_52025_52108[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (3))){
var inst_51930 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51931 = [false];
var inst_51932 = cljs.core.PersistentHashMap.fromArrays(inst_51930,inst_51931);
var state_51975__$1 = state_51975;
var statearr_52035_52109 = state_51975__$1;
(statearr_52035_52109[(2)] = inst_51932);

(statearr_52035_52109[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (4))){
var inst_51934 = (state_51975[(8)]);
var inst_51934__$1 = (state_51975[(2)]);
var inst_51938 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51934__$1], 0));
var state_51975__$1 = (function (){var statearr_52043 = state_51975;
(statearr_52043[(8)] = inst_51934__$1);

return statearr_52043;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51975__$1,(5),inst_51938);
} else {
if((state_val_51979 === (5))){
var inst_51934 = (state_51975[(8)]);
var inst_51941 = (state_51975[(9)]);
var inst_51942 = (state_51975[(10)]);
var inst_51940 = (state_51975[(2)]);
var inst_51941__$1 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_51940);
var inst_51942__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_51940);
var inst_51946 = (function (){var opts__$1 = inst_51934;
var response = inst_51940;
var status = inst_51941__$1;
var code = inst_51942__$1;
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-module-sci-cljs url: ",url,"status: ",status], null);
});
})();
var inst_51947 = (new cljs.core.Delay(inst_51946,null));
var inst_51948 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.cljs-source-http",null,43,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_51947,null,(86),null);
var inst_51949 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51941__$1,(200));
var state_51975__$1 = (function (){var statearr_52058 = state_51975;
(statearr_52058[(9)] = inst_51941__$1);

(statearr_52058[(10)] = inst_51942__$1);

(statearr_52058[(11)] = inst_51948);

return statearr_52058;
})();
if(inst_51949){
var statearr_52063_52115 = state_51975__$1;
(statearr_52063_52115[(1)] = (6));

} else {
var statearr_52065_52116 = state_51975__$1;
(statearr_52065_52116[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (6))){
var inst_51942 = (state_51975[(10)]);
var inst_51934 = (state_51975[(8)]);
var inst_51951 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51952 = [new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_51953 = [new cljs.core.Keyword(null,"code","code",1586293142)];
var inst_51954 = [inst_51942];
var inst_51955 = cljs.core.PersistentHashMap.fromArrays(inst_51953,inst_51954);
var inst_51956 = [inst_51955];
var inst_51957 = cljs.core.PersistentHashMap.fromArrays(inst_51952,inst_51956);
var inst_51958 = [new cljs.core.Keyword(null,"http-load","http-load",-1640742303),inst_51957];
var inst_51959 = (new cljs.core.PersistentVector(null,2,(5),inst_51951,inst_51958,null));
var inst_51961 = goldly.sci.loader.cljs_source.on_cljs_received(ctx,libname,ns,inst_51934,resolve,reject,inst_51959);
var state_51975__$1 = state_51975;
var statearr_52077_52118 = state_51975__$1;
(statearr_52077_52118[(2)] = inst_51961);

(statearr_52077_52118[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (7))){
var inst_51941 = (state_51975[(9)]);
var inst_51963 = ["failed to load: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libname)," status: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51941)," url: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
var inst_51965 = (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(inst_51963) : reject.call(null,inst_51963));
var state_51975__$1 = state_51975;
var statearr_52084_52119 = state_51975__$1;
(statearr_52084_52119[(2)] = inst_51965);

(statearr_52084_52119[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51979 === (8))){
var inst_51967 = (state_51975[(2)]);
var state_51975__$1 = state_51975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51975__$1,inst_51967);
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
var goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__ = null;
var goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____0 = (function (){
var statearr_52089 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52089[(0)] = goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__);

(statearr_52089[(1)] = (1));

return statearr_52089;
});
var goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____1 = (function (state_51975){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_51975);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e52090){var ex__41228__auto__ = e52090;
var statearr_52091_52124 = state_51975;
(statearr_52091_52124[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_51975[(4)]))){
var statearr_52092_52125 = state_51975;
(statearr_52092_52125[(1)] = cljs.core.first((state_51975[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52126 = state_51975;
state_51975 = G__52126;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__ = function(state_51975){
switch(arguments.length){
case 0:
return goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____1.call(this,state_51975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____0;
goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____1;
return goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_52095 = f__41248__auto__();
(statearr_52095[(6)] = c__41247__auto__);

return statearr_52095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
})));
});

//# sourceMappingURL=goldly.sci.loader.cljs_source_http.js.map
