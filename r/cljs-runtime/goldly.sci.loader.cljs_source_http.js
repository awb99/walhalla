goog.provide('goldly.sci.loader.cljs_source_http');
goldly.sci.loader.cljs_source_http.filename_to_url_goldly = (function goldly$sci$loader$cljs_source_http$filename_to_url_goldly(filename){
return ["/code/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join('');
});
goldly.sci.loader.cljs_source_http.filename_to_url_github = (function goldly$sci$loader$cljs_source_http$filename_to_url_github(filename){
var base = (goldly.sci.loader.static$.dynamic_base.cljs$core$IFn$_invoke$arity$0 ? goldly.sci.loader.static$.dynamic_base.cljs$core$IFn$_invoke$arity$0() : goldly.sci.loader.static$.dynamic_base.call(null));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),"/code/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(filename)].join('');
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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.cljs-source-http",null,28,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-sci-src","libname:",libname,"ns: ",ns,"opts:",opts], null);
}),null)),null,(86),null);

var filename = [goldly.sci.loader.cljs_source.ns__GT_filename(cljs.core.str.cljs$core$IFn$_invoke$arity$1(libname)),".cljs"].join('');
var url = (function (){var fexpr__51920 = cljs.core.deref(goldly.sci.loader.cljs_source_http.filename_to_url);
return (fexpr__51920.cljs$core$IFn$_invoke$arity$1 ? fexpr__51920.cljs$core$IFn$_invoke$arity$1(filename) : fexpr__51920.call(null,filename));
})();
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.cljs-source-http",null,31,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loading filename: ",filename], null);
}),null)),null,(87),null);

return (new Promise((function (resolve,reject){
var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_51980){
var state_val_51981 = (state_51980[(1)]);
if((state_val_51981 === (1))){
var inst_51927 = (state_51980[(7)]);
var inst_51927__$1 = opts;
var state_51980__$1 = (function (){var statearr_52014 = state_51980;
(statearr_52014[(7)] = inst_51927__$1);

return statearr_52014;
})();
if(cljs.core.truth_(inst_51927__$1)){
var statearr_52020_52094 = state_51980__$1;
(statearr_52020_52094[(1)] = (2));

} else {
var statearr_52022_52095 = state_51980__$1;
(statearr_52022_52095[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51981 === (2))){
var inst_51927 = (state_51980[(7)]);
var state_51980__$1 = state_51980;
var statearr_52023_52096 = state_51980__$1;
(statearr_52023_52096[(2)] = inst_51927);

(statearr_52023_52096[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51981 === (3))){
var inst_51936 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_51937 = [false];
var inst_51938 = cljs.core.PersistentHashMap.fromArrays(inst_51936,inst_51937);
var state_51980__$1 = state_51980;
var statearr_52026_52097 = state_51980__$1;
(statearr_52026_52097[(2)] = inst_51938);

(statearr_52026_52097[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51981 === (4))){
var inst_51940 = (state_51980[(8)]);
var inst_51940__$1 = (state_51980[(2)]);
var inst_51942 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_51940__$1], 0));
var state_51980__$1 = (function (){var statearr_52032 = state_51980;
(statearr_52032[(8)] = inst_51940__$1);

return statearr_52032;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51980__$1,(5),inst_51942);
} else {
if((state_val_51981 === (5))){
var inst_51940 = (state_51980[(8)]);
var inst_51947 = (state_51980[(9)]);
var inst_51948 = (state_51980[(10)]);
var inst_51945 = (state_51980[(2)]);
var inst_51947__$1 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_51945);
var inst_51948__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_51945);
var inst_51950 = (function (){var opts__$1 = inst_51940;
var response = inst_51945;
var status = inst_51947__$1;
var code = inst_51948__$1;
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-module-sci-cljs url: ",url,"status: ",status], null);
});
})();
var inst_51951 = (new cljs.core.Delay(inst_51950,null));
var inst_51952 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.cljs-source-http",null,38,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_51951,null,(88),null);
var inst_51953 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51947__$1,(200));
var state_51980__$1 = (function (){var statearr_52039 = state_51980;
(statearr_52039[(9)] = inst_51947__$1);

(statearr_52039[(10)] = inst_51948__$1);

(statearr_52039[(11)] = inst_51952);

return statearr_52039;
})();
if(inst_51953){
var statearr_52041_52103 = state_51980__$1;
(statearr_52041_52103[(1)] = (6));

} else {
var statearr_52042_52104 = state_51980__$1;
(statearr_52042_52104[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51981 === (6))){
var inst_51948 = (state_51980[(10)]);
var inst_51940 = (state_51980[(8)]);
var inst_51955 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_51956 = [new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_51957 = [new cljs.core.Keyword(null,"code","code",1586293142)];
var inst_51958 = [inst_51948];
var inst_51959 = cljs.core.PersistentHashMap.fromArrays(inst_51957,inst_51958);
var inst_51960 = [inst_51959];
var inst_51961 = cljs.core.PersistentHashMap.fromArrays(inst_51956,inst_51960);
var inst_51962 = [new cljs.core.Keyword(null,"http-load","http-load",-1640742303),inst_51961];
var inst_51963 = (new cljs.core.PersistentVector(null,2,(5),inst_51955,inst_51962,null));
var inst_51964 = goldly.sci.loader.cljs_source.on_cljs_received(ctx,libname,ns,inst_51940,resolve,reject,inst_51963);
var state_51980__$1 = state_51980;
var statearr_52057_52106 = state_51980__$1;
(statearr_52057_52106[(2)] = inst_51964);

(statearr_52057_52106[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51981 === (7))){
var inst_51947 = (state_51980[(9)]);
var inst_51971 = ["failed to load: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libname)," status: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_51947)," url: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
var inst_51972 = (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(inst_51971) : reject.call(null,inst_51971));
var state_51980__$1 = state_51980;
var statearr_52060_52107 = state_51980__$1;
(statearr_52060_52107[(2)] = inst_51972);

(statearr_52060_52107[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51981 === (8))){
var inst_51974 = (state_51980[(2)]);
var state_51980__$1 = state_51980;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51980__$1,inst_51974);
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
var statearr_52066 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52066[(0)] = goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__);

(statearr_52066[(1)] = (1));

return statearr_52066;
});
var goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____1 = (function (state_51980){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_51980);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e52069){var ex__41228__auto__ = e52069;
var statearr_52070_52110 = state_51980;
(statearr_52070_52110[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_51980[(4)]))){
var statearr_52072_52111 = state_51980;
(statearr_52072_52111[(1)] = cljs.core.first((state_51980[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52112 = state_51980;
state_51980 = G__52112;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__ = function(state_51980){
switch(arguments.length){
case 0:
return goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____1.call(this,state_51980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____0;
goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto____1;
return goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_52076 = f__41248__auto__();
(statearr_52076[(6)] = c__41247__auto__);

return statearr_52076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
})));
});

//# sourceMappingURL=goldly.sci.loader.cljs_source_http.js.map
