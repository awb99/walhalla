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
goldly.sci.loader.cljs_source_http.load_module_sci = (function goldly$sci$loader$cljs_source_http$load_module_sci(p__52459){
var map__52460 = p__52459;
var map__52460__$1 = cljs.core.__destructure_map(map__52460);
var d = map__52460__$1;
var ctx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52460__$1,new cljs.core.Keyword(null,"ctx","ctx",-493610118));
var libname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52460__$1,new cljs.core.Keyword(null,"libname","libname",135992497));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52460__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52460__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var property_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52460__$1,new cljs.core.Keyword(null,"property-path","property-path",201212852));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.cljs-source-http",null,27,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-sci-src","libname:",libname,"ns: ",ns,"opts:",opts], null);
}),null)),null,(227),null);

var filename = [goldly.sci.loader.cljs_source.ns__GT_filename(cljs.core.str.cljs$core$IFn$_invoke$arity$1(libname)),".cljs"].join('');
var url = (function (){var fexpr__52461 = cljs.core.deref(goldly.sci.loader.cljs_source_http.filename_to_url);
return (fexpr__52461.cljs$core$IFn$_invoke$arity$1 ? fexpr__52461.cljs$core$IFn$_invoke$arity$1(filename) : fexpr__52461.call(null,filename));
})();
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.cljs-source-http",null,30,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loading filename: ",filename], null);
}),null)),null,(228),null);

return (new Promise((function (resolve,reject){
var c__41381__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41382__auto__ = (function (){var switch__41305__auto__ = (function (state_52500){
var state_val_52502 = (state_52500[(1)]);
if((state_val_52502 === (1))){
var inst_52462 = (state_52500[(7)]);
var inst_52462__$1 = opts;
var state_52500__$1 = (function (){var statearr_52510 = state_52500;
(statearr_52510[(7)] = inst_52462__$1);

return statearr_52510;
})();
if(cljs.core.truth_(inst_52462__$1)){
var statearr_52512_52609 = state_52500__$1;
(statearr_52512_52609[(1)] = (2));

} else {
var statearr_52514_52612 = state_52500__$1;
(statearr_52514_52612[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52502 === (2))){
var inst_52462 = (state_52500[(7)]);
var state_52500__$1 = state_52500;
var statearr_52517_52614 = state_52500__$1;
(statearr_52517_52614[(2)] = inst_52462);

(statearr_52517_52614[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52502 === (3))){
var inst_52465 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222)];
var inst_52466 = [false];
var inst_52467 = cljs.core.PersistentHashMap.fromArrays(inst_52465,inst_52466);
var state_52500__$1 = state_52500;
var statearr_52527_52617 = state_52500__$1;
(statearr_52527_52617[(2)] = inst_52467);

(statearr_52527_52617[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52502 === (4))){
var inst_52469 = (state_52500[(8)]);
var inst_52469__$1 = (state_52500[(2)]);
var inst_52470 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_52469__$1], 0));
var state_52500__$1 = (function (){var statearr_52530 = state_52500;
(statearr_52530[(8)] = inst_52469__$1);

return statearr_52530;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52500__$1,(5),inst_52470);
} else {
if((state_val_52502 === (5))){
var inst_52469 = (state_52500[(8)]);
var inst_52473 = (state_52500[(9)]);
var inst_52474 = (state_52500[(10)]);
var inst_52472 = (state_52500[(2)]);
var inst_52473__$1 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(inst_52472);
var inst_52474__$1 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_52472);
var inst_52475 = (function (){var opts__$1 = inst_52469;
var response = inst_52472;
var status = inst_52473__$1;
var code = inst_52474__$1;
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-module-sci-cljs url: ",url,"status: ",status], null);
});
})();
var inst_52476 = (new cljs.core.Delay(inst_52475,null));
var inst_52477 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.sci.loader.cljs-source-http",null,37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_52476,null,(229),null);
var inst_52478 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52473__$1,(200));
var state_52500__$1 = (function (){var statearr_52544 = state_52500;
(statearr_52544[(9)] = inst_52473__$1);

(statearr_52544[(10)] = inst_52474__$1);

(statearr_52544[(11)] = inst_52477);

return statearr_52544;
})();
if(inst_52478){
var statearr_52549_52622 = state_52500__$1;
(statearr_52549_52622[(1)] = (6));

} else {
var statearr_52551_52623 = state_52500__$1;
(statearr_52551_52623[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52502 === (6))){
var inst_52474 = (state_52500[(10)]);
var inst_52469 = (state_52500[(8)]);
var inst_52480 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_52481 = [new cljs.core.Keyword(null,"result","result",1415092211)];
var inst_52482 = [new cljs.core.Keyword(null,"code","code",1586293142)];
var inst_52483 = [inst_52474];
var inst_52484 = cljs.core.PersistentHashMap.fromArrays(inst_52482,inst_52483);
var inst_52485 = [inst_52484];
var inst_52486 = cljs.core.PersistentHashMap.fromArrays(inst_52481,inst_52485);
var inst_52487 = [new cljs.core.Keyword(null,"http-load","http-load",-1640742303),inst_52486];
var inst_52488 = (new cljs.core.PersistentVector(null,2,(5),inst_52480,inst_52487,null));
var inst_52489 = goldly.sci.loader.cljs_source.on_cljs_received(ctx,libname,ns,inst_52469,resolve,reject,inst_52488);
var state_52500__$1 = state_52500;
var statearr_52570_52628 = state_52500__$1;
(statearr_52570_52628[(2)] = inst_52489);

(statearr_52570_52628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52502 === (7))){
var inst_52473 = (state_52500[(9)]);
var inst_52491 = ["failed to load: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libname)," status: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_52473)," url: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)].join('');
var inst_52492 = (reject.cljs$core$IFn$_invoke$arity$1 ? reject.cljs$core$IFn$_invoke$arity$1(inst_52491) : reject.call(null,inst_52491));
var state_52500__$1 = state_52500;
var statearr_52573_52631 = state_52500__$1;
(statearr_52573_52631[(2)] = inst_52492);

(statearr_52573_52631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52502 === (8))){
var inst_52494 = (state_52500[(2)]);
var state_52500__$1 = state_52500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52500__$1,inst_52494);
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
var goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41306__auto__ = null;
var goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41306__auto____0 = (function (){
var statearr_52580 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52580[(0)] = goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41306__auto__);

(statearr_52580[(1)] = (1));

return statearr_52580;
});
var goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41306__auto____1 = (function (state_52500){
while(true){
var ret_value__41307__auto__ = (function (){try{while(true){
var result__41308__auto__ = switch__41305__auto__(state_52500);
if(cljs.core.keyword_identical_QMARK_(result__41308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41308__auto__;
}
break;
}
}catch (e52582){var ex__41309__auto__ = e52582;
var statearr_52584_52643 = state_52500;
(statearr_52584_52643[(2)] = ex__41309__auto__);


if(cljs.core.seq((state_52500[(4)]))){
var statearr_52586_52644 = state_52500;
(statearr_52586_52644[(1)] = cljs.core.first((state_52500[(4)])));

} else {
throw ex__41309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52645 = state_52500;
state_52500 = G__52645;
continue;
} else {
return ret_value__41307__auto__;
}
break;
}
});
goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41306__auto__ = function(state_52500){
switch(arguments.length){
case 0:
return goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41306__auto____0.call(this);
case 1:
return goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41306__auto____1.call(this,state_52500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41306__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41306__auto____0;
goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41306__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41306__auto____1;
return goldly$sci$loader$cljs_source_http$load_module_sci_$_state_machine__41306__auto__;
})()
})();
var state__41383__auto__ = (function (){var statearr_52590 = f__41382__auto__();
(statearr_52590[(6)] = c__41381__auto__);

return statearr_52590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41383__auto__);
}));

return c__41381__auto__;
})));
});

//# sourceMappingURL=goldly.sci.loader.cljs_source_http.js.map
