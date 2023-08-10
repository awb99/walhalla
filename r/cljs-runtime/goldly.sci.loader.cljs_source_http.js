goog.provide('goldly.sci.loader.cljs_source_http');
goldly.sci.loader.cljs_source_http.filename_to_url_goldly = (function goldly$sci$loader$cljs_source_http$filename_to_url_goldly(filename){
return ["/code/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join('');
});
/**
 * gets the current url, as a map
 */
goldly.sci.loader.cljs_source_http.application_url = (function goldly$sci$loader$cljs_source_http$application_url(){
return cemerick.url.url.cljs$core$IFn$_invoke$arity$1(window.location.href);
});
goldly.sci.loader.cljs_source_http.filename_to_url_github = (function goldly$sci$loader$cljs_source_http$filename_to_url_github(filename){
var url = goldly.sci.loader.cljs_source_http.application_url();
var url_base = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(url,clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(url,"/"));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.cljs-source-http",null,21,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["github url-base: ",url_base], null);
}),null)),null,(83),null);

return [url_base,cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join('');
});
goldly.sci.loader.cljs_source_http.filename_to_url = goldly.sci.loader.cljs_source_http.filename_to_url_goldly;
goldly.sci.loader.cljs_source_http.set_github_load_mode = (function goldly$sci$loader$cljs_source_http$set_github_load_mode(){
return (
goldly.sci.loader.cljs_source_http.filename_to_url = goldly.sci.loader.cljs_source_http.filename_to_url_github)
;
});
goldly.sci.loader.cljs_source_http.load_module_sci = (function goldly$sci$loader$cljs_source_http$load_module_sci(p__51787){
var map__51788 = p__51787;
var map__51788__$1 = cljs.core.__destructure_map(map__51788);
var d = map__51788__$1;
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51788__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var libname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51788__$1,new cljs.core.Keyword(null,"libname","libname",135992497));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51788__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51788__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var property_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51788__$1,new cljs.core.Keyword(null,"property-path","property-path",201212852));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.cljs-source-http",null,36,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-sci-src","libname:",libname,"ns: ",ns,"opts:",opts], null);
}),null)),null,(84),null);

var filename = [goldly.sci.loader.cljs_source.ns__GT_filename(cljs.core.str.cljs$core$IFn$_invoke$arity$1(libname)),".cljs"].join('');
var url = (goldly.sci.loader.cljs_source_http.filename_to_url.cljs$core$IFn$_invoke$arity$1 ? goldly.sci.loader.cljs_source_http.filename_to_url.cljs$core$IFn$_invoke$arity$1(filename) : goldly.sci.loader.cljs_source_http.filename_to_url.call(null,filename));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.cljs-source-http",null,39,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loading filename: ",filename], null);
}),null)),null,(85),null);

return (new Promise((function (resolve,reject){
var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_51894){
var state_val_51896 = (state_51894[(1)]);
if((state_val_51896 === (1))){
var inst_51822 = (state_51894[(7)]);
var inst_51822__$1 = opts;
var state_51894__$1 = (function (){var statearr_51923 = state_51894;
(statearr_51923[(7)] = inst_51822__$1);

return statearr_51923;
})();
if(cljs.core.truth_(inst_51822__$1)){
var statearr_51925_51984 = state_51894__$1;
(statearr_51925_51984[(1)] = (2));

} else {
var statearr_51929_51985 = state_51894__$1;
(statearr_51929_51985[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51896 === (2))){
var inst_51822 = (state_51894[(7)]);
var state_51894__$1 = state_51894;
var statearr_51934_51986 = state_51894__$1;
(statearr_51934_51986[(2)] = inst_51822);

(statearr_51934_51986[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51896 === (3))){
var inst_51836 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51837 = [false];
var inst_51838 = cljs.core.PersistentHashMap.fromArrays(inst_51836,inst_51837);
var state_51894__$1 = state_51894;
var statearr_51948_51987 = state_51894__$1;
(statearr_51948_51987[(2)] = inst_51838);

(statearr_51948_51987[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51896 === (4))){
var inst_51841 = (state_51894[(8)]);
var inst_51841__$1 = (state_51894[(2)]);
var inst_51852 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51841__$1], 0));
var state_51894__$1 = (function (){var statearr_51957 = state_51894;
(statearr_51957[(8)] = inst_51841__$1);

return statearr_51957;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51894__$1,(5),inst_51852);
} else {
if((state_val_51896 === (5))){
var inst_51841 = (state_51894[(8)]);
var inst_51855 = (state_51894[(9)]);
var inst_51856 = (state_51894[(10)]);
var inst_51854 = (state_51894[(2)]);
var inst_51855__$1 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_51854);
var inst_51856__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_51854);
var inst_51859 = (function (){var opts__$1 = inst_51841;
var response = inst_51854;
var status = inst_51855__$1;
var code = inst_51856__$1;
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-module-sci-cljs url: ",url,"status: ",status], null);
});
})();
var inst_51860 = (new cljs.core.Delay(inst_51859,null));
var inst_51861 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.cljs-source-http",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_51860,null,(86),null);
var inst_51862 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51855__$1,(200));
var state_51894__$1 = (function (){var statearr_51962 = state_51894;
(statearr_51962[(9)] = inst_51855__$1);

(statearr_51962[(10)] = inst_51856__$1);

(statearr_51962[(11)] = inst_51861);

return statearr_51962;
})();
if(inst_51862){
var statearr_51963_51992 = state_51894__$1;
(statearr_51963_51992[(1)] = (6));

} else {
var statearr_51964_51993 = state_51894__$1;
(statearr_51964_51993[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51896 === (6))){
var inst_51856 = (state_51894[(10)]);
var inst_51841 = (state_51894[(8)]);
var inst_51868 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51870 = [new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_51871 = [new cljs.core.Keyword(null,"code","code",1586293142)];
var inst_51874 = [inst_51856];
var inst_51876 = cljs.core.PersistentHashMap.fromArrays(inst_51871,inst_51874);
var inst_51877 = [inst_51876];
var inst_51878 = cljs.core.PersistentHashMap.fromArrays(inst_51870,inst_51877);
var inst_51879 = [new cljs.core.Keyword(null,"http-load","http-load",-1640742303),inst_51878];
var inst_51880 = (new cljs.core.PersistentVector(null,2,(5),inst_51868,inst_51879,null));
var inst_51881 = goldly.sci.loader.cljs_source.on_cljs_received(ctx,libname,ns,inst_51841,resolve,reject,inst_51880);
var state_51894__$1 = state_51894;
var statearr_51965_52001 = state_51894__$1;
(statearr_51965_52001[(2)] = inst_51881);

(statearr_51965_52001[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51896 === (7))){
var inst_51855 = (state_51894[(9)]);
var inst_51883 = ["failed to load: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libname)," status: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51855)," url: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
var inst_51884 = (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(inst_51883) : reject.call(null,inst_51883));
var state_51894__$1 = state_51894;
var statearr_51966_52003 = state_51894__$1;
(statearr_51966_52003[(2)] = inst_51884);

(statearr_51966_52003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51896 === (8))){
var inst_51886 = (state_51894[(2)]);
var state_51894__$1 = state_51894;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51894__$1,inst_51886);
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
var statearr_51967 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51967[(0)] = goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__);

(statearr_51967[(1)] = (1));

return statearr_51967;
});
var goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____1 = (function (state_51894){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_51894);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e51968){var ex__41228__auto__ = e51968;
var statearr_51969_52009 = state_51894;
(statearr_51969_52009[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_51894[(4)]))){
var statearr_51970_52014 = state_51894;
(statearr_51970_52014[(1)] = cljs.core.first((state_51894[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52017 = state_51894;
state_51894 = G__52017;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__ = function(state_51894){
switch(arguments.length){
case 0:
return goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____1.call(this,state_51894);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____0;
goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____1;
return goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_51971 = f__41248__auto__();
(statearr_51971[(6)] = c__41247__auto__);

return statearr_51971;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
})));
});

//# sourceMappingURL=goldly.sci.loader.cljs_source_http.js.map
