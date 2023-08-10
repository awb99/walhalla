goog.provide('goldly.sci.loader.cljs_source_http');
goldly.sci.loader.cljs_source_http.filename_to_url_goldly = (function goldly$sci$loader$cljs_source_http$filename_to_url_goldly(filename){
return ["/code/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join('');
});
goldly.sci.loader.cljs_source_http.application_url = (function goldly$sci$loader$cljs_source_http$application_url(){
return window.location.href;
});
goldly.sci.loader.cljs_source_http.filename_to_url_github = (function goldly$sci$loader$cljs_source_http$filename_to_url_github(filename){
var url = goldly.sci.loader.cljs_source_http.application_url();
var url_base = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(url,clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(url,"/"));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.cljs-source-http",null,19,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["github url-base: ",url_base], null);
}),null)),null,(83),null);

return [url_base,cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join('');
});
goldly.sci.loader.cljs_source_http.filename_to_url = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(goldly.sci.loader.cljs_source_http.filename_to_url_goldly);
goldly.sci.loader.cljs_source_http.set_github_load_mode = (function goldly$sci$loader$cljs_source_http$set_github_load_mode(){
return cljs.core.reset_BANG_(goldly.sci.loader.cljs_source_http.filename_to_url,goldly.sci.loader.cljs_source_http.filename_to_url_github);
});
goldly.sci.loader.cljs_source_http.load_module_sci = (function goldly$sci$loader$cljs_source_http$load_module_sci(p__51770){
var map__51771 = p__51770;
var map__51771__$1 = cljs.core.__destructure_map(map__51771);
var d = map__51771__$1;
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51771__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var libname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51771__$1,new cljs.core.Keyword(null,"libname","libname",135992497));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51771__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51771__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var property_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51771__$1,new cljs.core.Keyword(null,"property-path","property-path",201212852));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.cljs-source-http",null,34,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-sci-src","libname:",libname,"ns: ",ns,"opts:",opts], null);
}),null)),null,(84),null);

var filename = [goldly.sci.loader.cljs_source.ns__GT_filename(cljs.core.str.cljs$core$IFn$_invoke$arity$1(libname)),".cljs"].join('');
var url = (function (){var fexpr__51772 = cljs.core.deref(goldly.sci.loader.cljs_source_http.filename_to_url);
return (fexpr__51772.cljs$core$IFn$_invoke$arity$1 ? fexpr__51772.cljs$core$IFn$_invoke$arity$1(filename) : fexpr__51772.call(null,filename));
})();
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.cljs-source-http",null,37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loading filename: ",filename], null);
}),null)),null,(85),null);

return (new Promise((function (resolve,reject){
var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_51851){
var state_val_51854 = (state_51851[(1)]);
if((state_val_51854 === (1))){
var inst_51783 = (state_51851[(7)]);
var inst_51783__$1 = opts;
var state_51851__$1 = (function (){var statearr_51874 = state_51851;
(statearr_51874[(7)] = inst_51783__$1);

return statearr_51874;
})();
if(cljs.core.truth_(inst_51783__$1)){
var statearr_51880_51973 = state_51851__$1;
(statearr_51880_51973[(1)] = (2));

} else {
var statearr_51883_51974 = state_51851__$1;
(statearr_51883_51974[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51854 === (2))){
var inst_51783 = (state_51851[(7)]);
var state_51851__$1 = state_51851;
var statearr_51886_51975 = state_51851__$1;
(statearr_51886_51975[(2)] = inst_51783);

(statearr_51886_51975[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51854 === (3))){
var inst_51797 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51798 = [false];
var inst_51799 = cljs.core.PersistentHashMap.fromArrays(inst_51797,inst_51798);
var state_51851__$1 = state_51851;
var statearr_51895_51976 = state_51851__$1;
(statearr_51895_51976[(2)] = inst_51799);

(statearr_51895_51976[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51854 === (4))){
var inst_51802 = (state_51851[(8)]);
var inst_51802__$1 = (state_51851[(2)]);
var inst_51810 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51802__$1], 0));
var state_51851__$1 = (function (){var statearr_51902 = state_51851;
(statearr_51902[(8)] = inst_51802__$1);

return statearr_51902;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51851__$1,(5),inst_51810);
} else {
if((state_val_51854 === (5))){
var inst_51802 = (state_51851[(8)]);
var inst_51815 = (state_51851[(9)]);
var inst_51816 = (state_51851[(10)]);
var inst_51813 = (state_51851[(2)]);
var inst_51815__$1 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_51813);
var inst_51816__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_51813);
var inst_51818 = (function (){var opts__$1 = inst_51802;
var response = inst_51813;
var status = inst_51815__$1;
var code = inst_51816__$1;
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-module-sci-cljs url: ",url,"status: ",status], null);
});
})();
var inst_51819 = (new cljs.core.Delay(inst_51818,null));
var inst_51820 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.cljs-source-http",null,44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_51819,null,(86),null);
var inst_51821 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51815__$1,(200));
var state_51851__$1 = (function (){var statearr_51916 = state_51851;
(statearr_51916[(9)] = inst_51815__$1);

(statearr_51916[(10)] = inst_51816__$1);

(statearr_51916[(11)] = inst_51820);

return statearr_51916;
})();
if(inst_51821){
var statearr_51917_51977 = state_51851__$1;
(statearr_51917_51977[(1)] = (6));

} else {
var statearr_51918_51978 = state_51851__$1;
(statearr_51918_51978[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51854 === (6))){
var inst_51816 = (state_51851[(10)]);
var inst_51802 = (state_51851[(8)]);
var inst_51826 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51828 = [new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_51829 = [new cljs.core.Keyword(null,"code","code",1586293142)];
var inst_51830 = [inst_51816];
var inst_51831 = cljs.core.PersistentHashMap.fromArrays(inst_51829,inst_51830);
var inst_51832 = [inst_51831];
var inst_51833 = cljs.core.PersistentHashMap.fromArrays(inst_51828,inst_51832);
var inst_51834 = [new cljs.core.Keyword(null,"http-load","http-load",-1640742303),inst_51833];
var inst_51835 = (new cljs.core.PersistentVector(null,2,(5),inst_51826,inst_51834,null));
var inst_51836 = goldly.sci.loader.cljs_source.on_cljs_received(ctx,libname,ns,inst_51802,resolve,reject,inst_51835);
var state_51851__$1 = state_51851;
var statearr_51934_51979 = state_51851__$1;
(statearr_51934_51979[(2)] = inst_51836);

(statearr_51934_51979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51854 === (7))){
var inst_51815 = (state_51851[(9)]);
var inst_51838 = ["failed to load: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libname)," status: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51815)," url: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
var inst_51839 = (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(inst_51838) : reject.call(null,inst_51838));
var state_51851__$1 = state_51851;
var statearr_51939_51980 = state_51851__$1;
(statearr_51939_51980[(2)] = inst_51839);

(statearr_51939_51980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51854 === (8))){
var inst_51841 = (state_51851[(2)]);
var state_51851__$1 = state_51851;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51851__$1,inst_51841);
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
var statearr_51951 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51951[(0)] = goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__);

(statearr_51951[(1)] = (1));

return statearr_51951;
});
var goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____1 = (function (state_51851){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_51851);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e51957){var ex__41228__auto__ = e51957;
var statearr_51961_51987 = state_51851;
(statearr_51961_51987[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_51851[(4)]))){
var statearr_51965_51988 = state_51851;
(statearr_51965_51988[(1)] = cljs.core.first((state_51851[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51989 = state_51851;
state_51851 = G__51989;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__ = function(state_51851){
switch(arguments.length){
case 0:
return goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____1.call(this,state_51851);
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
