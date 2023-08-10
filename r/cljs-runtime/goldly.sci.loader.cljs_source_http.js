goog.provide('goldly.sci.loader.cljs_source_http');
goldly.sci.loader.cljs_source_http.filename_to_url_goldly = (function goldly$sci$loader$cljs_source_http$filename_to_url_goldly(filename){
return ["/code/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join('');
});
goldly.sci.loader.cljs_source_http.filename_to_url_github = (function goldly$sci$loader$cljs_source_http$filename_to_url_github(filename){
var base = goldly.sci.loader.static$.dynamic_base();
return [base,"/code/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join('');
});
goldly.sci.loader.cljs_source_http.filename_to_url = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(goldly.sci.loader.cljs_source_http.filename_to_url_goldly);
goldly.sci.loader.cljs_source_http.set_github_load_mode = (function goldly$sci$loader$cljs_source_http$set_github_load_mode(){
return cljs.core.reset_BANG_(goldly.sci.loader.cljs_source_http.filename_to_url,goldly.sci.loader.cljs_source_http.filename_to_url_github);
});
goldly.sci.loader.cljs_source_http.load_module_sci = (function goldly$sci$loader$cljs_source_http$load_module_sci(p__51777){
var map__51779 = p__51777;
var map__51779__$1 = cljs.core.__destructure_map(map__51779);
var d = map__51779__$1;
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51779__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var libname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51779__$1,new cljs.core.Keyword(null,"libname","libname",135992497));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51779__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51779__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var property_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51779__$1,new cljs.core.Keyword(null,"property-path","property-path",201212852));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.cljs-source-http",null,28,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-sci-src","libname:",libname,"ns: ",ns,"opts:",opts], null);
}),null)),null,(87),null);

var filename = [goldly.sci.loader.cljs_source.ns__GT_filename(cljs.core.str.cljs$core$IFn$_invoke$arity$1(libname)),".cljs"].join('');
var url = (function (){var fexpr__51788 = cljs.core.deref(goldly.sci.loader.cljs_source_http.filename_to_url);
return (fexpr__51788.cljs$core$IFn$_invoke$arity$1 ? fexpr__51788.cljs$core$IFn$_invoke$arity$1(filename) : fexpr__51788.call(null,filename));
})();
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.cljs-source-http",null,31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loading filename: ",filename], null);
}),null)),null,(88),null);

return (new Promise((function (resolve,reject){
var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_51880){
var state_val_51882 = (state_51880[(1)]);
if((state_val_51882 === (1))){
var inst_51809 = (state_51880[(7)]);
var inst_51809__$1 = opts;
var state_51880__$1 = (function (){var statearr_51910 = state_51880;
(statearr_51910[(7)] = inst_51809__$1);

return statearr_51910;
})();
if(cljs.core.truth_(inst_51809__$1)){
var statearr_51911_51973 = state_51880__$1;
(statearr_51911_51973[(1)] = (2));

} else {
var statearr_51912_51974 = state_51880__$1;
(statearr_51912_51974[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51882 === (2))){
var inst_51809 = (state_51880[(7)]);
var state_51880__$1 = state_51880;
var statearr_51919_51975 = state_51880__$1;
(statearr_51919_51975[(2)] = inst_51809);

(statearr_51919_51975[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51882 === (3))){
var inst_51827 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51828 = [false];
var inst_51829 = cljs.core.PersistentHashMap.fromArrays(inst_51827,inst_51828);
var state_51880__$1 = state_51880;
var statearr_51929_51976 = state_51880__$1;
(statearr_51929_51976[(2)] = inst_51829);

(statearr_51929_51976[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51882 === (4))){
var inst_51831 = (state_51880[(8)]);
var inst_51831__$1 = (state_51880[(2)]);
var inst_51834 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51831__$1], 0));
var state_51880__$1 = (function (){var statearr_51936 = state_51880;
(statearr_51936[(8)] = inst_51831__$1);

return statearr_51936;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51880__$1,(5),inst_51834);
} else {
if((state_val_51882 === (5))){
var inst_51831 = (state_51880[(8)]);
var inst_51837 = (state_51880[(9)]);
var inst_51838 = (state_51880[(10)]);
var inst_51836 = (state_51880[(2)]);
var inst_51837__$1 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_51836);
var inst_51838__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_51836);
var inst_51845 = (function (){var opts__$1 = inst_51831;
var response = inst_51836;
var status = inst_51837__$1;
var code = inst_51838__$1;
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-module-sci-cljs url: ",url,"status: ",status], null);
});
})();
var inst_51846 = (new cljs.core.Delay(inst_51845,null));
var inst_51847 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.cljs-source-http",null,38,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_51846,null,(89),null);
var inst_51848 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51837__$1,(200));
var state_51880__$1 = (function (){var statearr_51946 = state_51880;
(statearr_51946[(9)] = inst_51837__$1);

(statearr_51946[(10)] = inst_51838__$1);

(statearr_51946[(11)] = inst_51847);

return statearr_51946;
})();
if(inst_51848){
var statearr_51952_51977 = state_51880__$1;
(statearr_51952_51977[(1)] = (6));

} else {
var statearr_51954_51978 = state_51880__$1;
(statearr_51954_51978[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51882 === (6))){
var inst_51838 = (state_51880[(10)]);
var inst_51831 = (state_51880[(8)]);
var inst_51851 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51852 = [new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_51854 = [new cljs.core.Keyword(null,"code","code",1586293142)];
var inst_51855 = [inst_51838];
var inst_51856 = cljs.core.PersistentHashMap.fromArrays(inst_51854,inst_51855);
var inst_51857 = [inst_51856];
var inst_51858 = cljs.core.PersistentHashMap.fromArrays(inst_51852,inst_51857);
var inst_51859 = [new cljs.core.Keyword(null,"http-load","http-load",-1640742303),inst_51858];
var inst_51860 = (new cljs.core.PersistentVector(null,2,(5),inst_51851,inst_51859,null));
var inst_51861 = goldly.sci.loader.cljs_source.on_cljs_received(ctx,libname,ns,inst_51831,resolve,reject,inst_51860);
var state_51880__$1 = state_51880;
var statearr_51966_51979 = state_51880__$1;
(statearr_51966_51979[(2)] = inst_51861);

(statearr_51966_51979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51882 === (7))){
var inst_51837 = (state_51880[(9)]);
var inst_51864 = ["failed to load: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libname)," status: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51837)," url: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
var inst_51865 = (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(inst_51864) : reject.call(null,inst_51864));
var state_51880__$1 = state_51880;
var statearr_51967_51980 = state_51880__$1;
(statearr_51967_51980[(2)] = inst_51865);

(statearr_51967_51980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51882 === (8))){
var inst_51867 = (state_51880[(2)]);
var state_51880__$1 = state_51880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51880__$1,inst_51867);
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
var statearr_51968 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51968[(0)] = goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__);

(statearr_51968[(1)] = (1));

return statearr_51968;
});
var goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____1 = (function (state_51880){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_51880);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e51969){var ex__41228__auto__ = e51969;
var statearr_51970_51987 = state_51880;
(statearr_51970_51987[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_51880[(4)]))){
var statearr_51971_51988 = state_51880;
(statearr_51971_51988[(1)] = cljs.core.first((state_51880[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51989 = state_51880;
state_51880 = G__51989;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__ = function(state_51880){
switch(arguments.length){
case 0:
return goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____1.call(this,state_51880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____0;
goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____1;
return goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_51972 = f__41248__auto__();
(statearr_51972[(6)] = c__41247__auto__);

return statearr_51972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
})));
});

//# sourceMappingURL=goldly.sci.loader.cljs_source_http.js.map
