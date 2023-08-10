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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.cljs-source-http",null,36,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-sci-src","libname:",libname,"ns: ",ns,"opts:",opts], null);
}),null)),null,(84),null);

var filename = [goldly.sci.loader.cljs_source.ns__GT_filename(cljs.core.str.cljs$core$IFn$_invoke$arity$1(libname)),".cljs"].join('');
var url = (function (){var fexpr__51772 = cljs.core.deref(goldly.sci.loader.cljs_source_http.filename_to_url);
return (fexpr__51772.cljs$core$IFn$_invoke$arity$1 ? fexpr__51772.cljs$core$IFn$_invoke$arity$1(filename) : fexpr__51772.call(null,filename));
})();
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.cljs-source-http",null,39,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loading filename: ",filename], null);
}),null)),null,(85),null);

return (new Promise((function (resolve,reject){
var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_51823){
var state_val_51824 = (state_51823[(1)]);
if((state_val_51824 === (1))){
var inst_51773 = (state_51823[(7)]);
var inst_51773__$1 = opts;
var state_51823__$1 = (function (){var statearr_51838 = state_51823;
(statearr_51838[(7)] = inst_51773__$1);

return statearr_51838;
})();
if(cljs.core.truth_(inst_51773__$1)){
var statearr_51841_51966 = state_51823__$1;
(statearr_51841_51966[(1)] = (2));

} else {
var statearr_51842_51968 = state_51823__$1;
(statearr_51842_51968[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51824 === (2))){
var inst_51773 = (state_51823[(7)]);
var state_51823__$1 = state_51823;
var statearr_51847_51969 = state_51823__$1;
(statearr_51847_51969[(2)] = inst_51773);

(statearr_51847_51969[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51824 === (3))){
var inst_51780 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51782 = [false];
var inst_51783 = cljs.core.PersistentHashMap.fromArrays(inst_51780,inst_51782);
var state_51823__$1 = state_51823;
var statearr_51857_51972 = state_51823__$1;
(statearr_51857_51972[(2)] = inst_51783);

(statearr_51857_51972[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51824 === (4))){
var inst_51785 = (state_51823[(8)]);
var inst_51785__$1 = (state_51823[(2)]);
var inst_51787 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51785__$1], 0));
var state_51823__$1 = (function (){var statearr_51860 = state_51823;
(statearr_51860[(8)] = inst_51785__$1);

return statearr_51860;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51823__$1,(5),inst_51787);
} else {
if((state_val_51824 === (5))){
var inst_51785 = (state_51823[(8)]);
var inst_51791 = (state_51823[(9)]);
var inst_51792 = (state_51823[(10)]);
var inst_51790 = (state_51823[(2)]);
var inst_51791__$1 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_51790);
var inst_51792__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_51790);
var inst_51796 = (function (){var opts__$1 = inst_51785;
var response = inst_51790;
var status = inst_51791__$1;
var code = inst_51792__$1;
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-module-sci-cljs url: ",url,"status: ",status], null);
});
})();
var inst_51797 = (new cljs.core.Delay(inst_51796,null));
var inst_51798 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.cljs-source-http",null,46,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_51797,null,(86),null);
var inst_51799 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51791__$1,(200));
var state_51823__$1 = (function (){var statearr_51867 = state_51823;
(statearr_51867[(9)] = inst_51791__$1);

(statearr_51867[(10)] = inst_51792__$1);

(statearr_51867[(11)] = inst_51798);

return statearr_51867;
})();
if(inst_51799){
var statearr_51869_51977 = state_51823__$1;
(statearr_51869_51977[(1)] = (6));

} else {
var statearr_51870_51978 = state_51823__$1;
(statearr_51870_51978[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51824 === (6))){
var inst_51792 = (state_51823[(10)]);
var inst_51785 = (state_51823[(8)]);
var inst_51801 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51802 = [new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_51803 = [new cljs.core.Keyword(null,"code","code",1586293142)];
var inst_51804 = [inst_51792];
var inst_51805 = cljs.core.PersistentHashMap.fromArrays(inst_51803,inst_51804);
var inst_51806 = [inst_51805];
var inst_51807 = cljs.core.PersistentHashMap.fromArrays(inst_51802,inst_51806);
var inst_51808 = [new cljs.core.Keyword(null,"http-load","http-load",-1640742303),inst_51807];
var inst_51809 = (new cljs.core.PersistentVector(null,2,(5),inst_51801,inst_51808,null));
var inst_51810 = goldly.sci.loader.cljs_source.on_cljs_received(ctx,libname,ns,inst_51785,resolve,reject,inst_51809);
var state_51823__$1 = state_51823;
var statearr_51890_51979 = state_51823__$1;
(statearr_51890_51979[(2)] = inst_51810);

(statearr_51890_51979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51824 === (7))){
var inst_51791 = (state_51823[(9)]);
var inst_51814 = ["failed to load: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libname)," status: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51791)," url: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
var inst_51815 = (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(inst_51814) : reject.call(null,inst_51814));
var state_51823__$1 = state_51823;
var statearr_51893_51980 = state_51823__$1;
(statearr_51893_51980[(2)] = inst_51815);

(statearr_51893_51980[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51824 === (8))){
var inst_51817 = (state_51823[(2)]);
var state_51823__$1 = state_51823;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51823__$1,inst_51817);
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
var statearr_51902 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51902[(0)] = goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__);

(statearr_51902[(1)] = (1));

return statearr_51902;
});
var goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____1 = (function (state_51823){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_51823);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e51909){var ex__41228__auto__ = e51909;
var statearr_51910_51981 = state_51823;
(statearr_51910_51981[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_51823[(4)]))){
var statearr_51913_51982 = state_51823;
(statearr_51913_51982[(1)] = cljs.core.first((state_51823[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__51983 = state_51823;
state_51823 = G__51983;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__ = function(state_51823){
switch(arguments.length){
case 0:
return goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____1.call(this,state_51823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____0;
goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____1;
return goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_51922 = f__41248__auto__();
(statearr_51922[(6)] = c__41247__auto__);

return statearr_51922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
})));
});

//# sourceMappingURL=goldly.sci.loader.cljs_source_http.js.map
