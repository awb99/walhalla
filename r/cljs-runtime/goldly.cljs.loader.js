goog.provide('goldly.cljs.loader');
goldly.cljs.loader.compile_cljs_p = (function goldly$cljs$loader$compile_cljs_p(p__55279){
var map__55280 = p__55279;
var map__55280__$1 = cljs.core.__destructure_map(map__55280);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55280__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55280__$1,new cljs.core.Keyword(null,"code","code",1586293142));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compiling-async: ",filename], null);
}),null)),null,(263),null);

var er_p = goldly.sci.kernel_cljs.compile_code_async(code);
return er_p.catch((function (e){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.cljs.loader",null,26,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["eval failed: ",e], null);
}),null)),null,(264),null);

var temp__5804__auto__ = goldly.sci.error.exception__GT_error(e);
if(cljs.core.truth_(temp__5804__auto__)){
var sci_err = temp__5804__auto__;
goldly.sci.error.show_sci_error(filename,sci_err);

return sci_err;
} else {
return null;
}
})).then((function (er){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,31,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["successfully compiled %s ",filename], null);
}),null)),null,(265),null);

if(cljs.core.truth_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [er], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,33,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs eval result:",er], null);
}),null)),null,(266),null);

return er;
} else {
return null;
}
}));
});
goldly.cljs.loader.compile_cljs = (function goldly$cljs$loader$compile_cljs(opts){
var p = goldly.cljs.loader.compile_cljs_p(opts);
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
p.then((function (data){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,41,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compile-code promise received:  %s",data], null);
}),null)),null,(267),null);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,(27));
}));

return ch;
});
goldly.cljs.loader.explore = (function goldly$cljs$loader$explore(static_QMARK_){
if(cljs.core.truth_(static_QMARK_)){
return goldly.static$.cljs_explore();
} else {
return goldly.service.core.run(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fun","fun",-1265158045),new cljs.core.Symbol("goldly.app.run","cljs-explore","goldly.app.run/cljs-explore",-1183368704,null)], null));
}
});
goldly.cljs.loader.load_cljs_file = (function goldly$cljs$loader$load_cljs_file(static_QMARK_,filename){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,53,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loading cljs file: ",filename], null);
}),null)),null,(268),null);

var c__41381__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41382__auto__ = (function (){var switch__41305__auto__ = (function (state_55313){
var state_val_55314 = (state_55313[(1)]);
if((state_val_55314 === (7))){
var state_55313__$1 = state_55313;
var statearr_55315_55409 = state_55313__$1;
(statearr_55315_55409[(2)] = null);

(statearr_55315_55409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55314 === (1))){
var state_55313__$1 = state_55313;
if(cljs.core.truth_(static_QMARK_)){
var statearr_55316_55410 = state_55313__$1;
(statearr_55316_55410[(1)] = (3));

} else {
var statearr_55317_55411 = state_55313__$1;
(statearr_55317_55411[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55314 === (4))){
var inst_55285 = [new cljs.core.Keyword(null,"fun","fun",-1265158045),new cljs.core.Keyword(null,"args","args",1315556576)];
var inst_55286 = new cljs.core.Symbol("goldly.cljs.loader","load-file-or-res!","goldly.cljs.loader/load-file-or-res!",823763230,null);
var inst_55287 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55288 = [filename];
var inst_55289 = (new cljs.core.PersistentVector(null,1,(5),inst_55287,inst_55288,null));
var inst_55290 = [inst_55286,inst_55289];
var inst_55291 = cljs.core.PersistentHashMap.fromArrays(inst_55285,inst_55290);
var inst_55292 = goldly.service.core.run(inst_55291);
var state_55313__$1 = state_55313;
var statearr_55318_55412 = state_55313__$1;
(statearr_55318_55412[(2)] = inst_55292);

(statearr_55318_55412[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55314 === (6))){
var inst_55298 = (state_55313[(7)]);
var inst_55297 = (state_55313[(8)]);
var inst_55301 = (inst_55298.cljs$core$IFn$_invoke$arity$2 ? inst_55298.cljs$core$IFn$_invoke$arity$2("error loading cljs: ",inst_55297) : inst_55298.call(null,"error loading cljs: ",inst_55297));
var state_55313__$1 = state_55313;
var statearr_55319_55413 = state_55313__$1;
(statearr_55319_55413[(2)] = inst_55301);

(statearr_55319_55413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55314 === (3))){
var inst_55283 = goldly.static$.get_code(filename);
var state_55313__$1 = state_55313;
var statearr_55320_55414 = state_55313__$1;
(statearr_55320_55414[(2)] = inst_55283);

(statearr_55320_55414[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55314 === (12))){
var inst_55308 = (state_55313[(2)]);
var state_55313__$1 = state_55313;
var statearr_55321_55415 = state_55313__$1;
(statearr_55321_55415[(2)] = inst_55308);

(statearr_55321_55415[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55314 === (2))){
var inst_55297 = (state_55313[(8)]);
var inst_55298 = (state_55313[(7)]);
var inst_55296 = (state_55313[(2)]);
var inst_55297__$1 = cljs.core.__destructure_map(inst_55296);
var inst_55298__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55297__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_55299 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55297__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var state_55313__$1 = (function (){var statearr_55322 = state_55313;
(statearr_55322[(8)] = inst_55297__$1);

(statearr_55322[(7)] = inst_55298__$1);

(statearr_55322[(9)] = inst_55299);

return statearr_55322;
})();
if(cljs.core.truth_(inst_55298__$1)){
var statearr_55323_55416 = state_55313__$1;
(statearr_55323_55416[(1)] = (6));

} else {
var statearr_55324_55417 = state_55313__$1;
(statearr_55324_55417[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55314 === (11))){
var inst_55311 = (state_55313[(2)]);
var state_55313__$1 = state_55313;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55313__$1,inst_55311);
} else {
if((state_val_55314 === (9))){
var inst_55299 = (state_55313[(9)]);
var inst_55306 = goldly.cljs.loader.compile_cljs(inst_55299);
var state_55313__$1 = state_55313;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55313__$1,(12),inst_55306);
} else {
if((state_val_55314 === (5))){
var inst_55294 = (state_55313[(2)]);
var state_55313__$1 = state_55313;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55313__$1,(2),inst_55294);
} else {
if((state_val_55314 === (10))){
var state_55313__$1 = state_55313;
var statearr_55325_55418 = state_55313__$1;
(statearr_55325_55418[(2)] = null);

(statearr_55325_55418[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55314 === (8))){
var inst_55299 = (state_55313[(9)]);
var inst_55304 = (state_55313[(2)]);
var state_55313__$1 = (function (){var statearr_55326 = state_55313;
(statearr_55326[(10)] = inst_55304);

return statearr_55326;
})();
if(cljs.core.truth_(inst_55299)){
var statearr_55327_55419 = state_55313__$1;
(statearr_55327_55419[(1)] = (9));

} else {
var statearr_55328_55420 = state_55313__$1;
(statearr_55328_55420[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
});
return (function() {
var goldly$cljs$loader$load_cljs_file_$_state_machine__41306__auto__ = null;
var goldly$cljs$loader$load_cljs_file_$_state_machine__41306__auto____0 = (function (){
var statearr_55329 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55329[(0)] = goldly$cljs$loader$load_cljs_file_$_state_machine__41306__auto__);

(statearr_55329[(1)] = (1));

return statearr_55329;
});
var goldly$cljs$loader$load_cljs_file_$_state_machine__41306__auto____1 = (function (state_55313){
while(true){
var ret_value__41307__auto__ = (function (){try{while(true){
var result__41308__auto__ = switch__41305__auto__(state_55313);
if(cljs.core.keyword_identical_QMARK_(result__41308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41308__auto__;
}
break;
}
}catch (e55330){var ex__41309__auto__ = e55330;
var statearr_55331_55421 = state_55313;
(statearr_55331_55421[(2)] = ex__41309__auto__);


if(cljs.core.seq((state_55313[(4)]))){
var statearr_55332_55422 = state_55313;
(statearr_55332_55422[(1)] = cljs.core.first((state_55313[(4)])));

} else {
throw ex__41309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55423 = state_55313;
state_55313 = G__55423;
continue;
} else {
return ret_value__41307__auto__;
}
break;
}
});
goldly$cljs$loader$load_cljs_file_$_state_machine__41306__auto__ = function(state_55313){
switch(arguments.length){
case 0:
return goldly$cljs$loader$load_cljs_file_$_state_machine__41306__auto____0.call(this);
case 1:
return goldly$cljs$loader$load_cljs_file_$_state_machine__41306__auto____1.call(this,state_55313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$cljs$loader$load_cljs_file_$_state_machine__41306__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$cljs$loader$load_cljs_file_$_state_machine__41306__auto____0;
goldly$cljs$loader$load_cljs_file_$_state_machine__41306__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$cljs$loader$load_cljs_file_$_state_machine__41306__auto____1;
return goldly$cljs$loader$load_cljs_file_$_state_machine__41306__auto__;
})()
})();
var state__41383__auto__ = (function (){var statearr_55333 = f__41382__auto__();
(statearr_55333[(6)] = c__41381__auto__);

return statearr_55333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41383__auto__);
}));

return c__41381__auto__;
});
goldly.cljs.loader.load_cljs = (function goldly$cljs$loader$load_cljs(static_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,67,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-cljs static?: ",static_QMARK_], null);
}),null)),null,(269),null);

var c__41381__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41382__auto__ = (function (){var switch__41305__auto__ = (function (state_55380){
var state_val_55381 = (state_55380[(1)]);
if((state_val_55381 === (7))){
var inst_55338 = (state_55380[(7)]);
var inst_55339 = (state_55380[(8)]);
var inst_55340 = (state_55380[(9)]);
var inst_55351 = (function (){var map__55334 = inst_55338;
var result = inst_55339;
var error = inst_55340;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["autoload sci-cljs files: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0))], null);
});
})();
var inst_55352 = (new cljs.core.Delay(inst_55351,null));
var inst_55353 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,75,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_55352,null,(271),null);
var inst_55354 = cljs.core.first(inst_55339);
var inst_55355 = cljs.core.rest(inst_55339);
var inst_55356 = inst_55354;
var inst_55357 = inst_55355;
var state_55380__$1 = (function (){var statearr_55382 = state_55380;
(statearr_55382[(10)] = inst_55353);

(statearr_55382[(11)] = inst_55356);

(statearr_55382[(12)] = inst_55357);

return statearr_55382;
})();
var statearr_55383_55424 = state_55380__$1;
(statearr_55383_55424[(2)] = null);

(statearr_55383_55424[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55381 === (1))){
var inst_55335 = goldly.cljs.loader.explore(static_QMARK_);
var state_55380__$1 = state_55380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55380__$1,(2),inst_55335);
} else {
if((state_val_55381 === (4))){
var inst_55339 = (state_55380[(8)]);
var inst_55345 = cljs.core.empty_QMARK_(inst_55339);
var state_55380__$1 = state_55380;
if(inst_55345){
var statearr_55384_55425 = state_55380__$1;
(statearr_55384_55425[(1)] = (6));

} else {
var statearr_55385_55426 = state_55380__$1;
(statearr_55385_55426[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55381 === (13))){
var state_55380__$1 = state_55380;
var statearr_55386_55427 = state_55380__$1;
(statearr_55386_55427[(2)] = null);

(statearr_55386_55427[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55381 === (6))){
var inst_55338 = (state_55380[(7)]);
var inst_55339 = (state_55380[(8)]);
var inst_55340 = (state_55380[(9)]);
var inst_55347 = (function (){var map__55334 = inst_55338;
var result = inst_55339;
var error = inst_55340;
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no autoload cljs files available!"], null);
});
})();
var inst_55348 = (new cljs.core.Delay(inst_55347,null));
var inst_55349 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"goldly.cljs.loader",null,73,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_55348,null,(270),null);
var state_55380__$1 = state_55380;
var statearr_55387_55428 = state_55380__$1;
(statearr_55387_55428[(2)] = inst_55349);

(statearr_55387_55428[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55381 === (3))){
var inst_55340 = (state_55380[(9)]);
var inst_55342 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_55340], 0));
var inst_55343 = (inst_55340.cljs$core$IFn$_invoke$arity$2 ? inst_55340.cljs$core$IFn$_invoke$arity$2("error getting cljs files: ",inst_55342) : inst_55340.call(null,"error getting cljs files: ",inst_55342));
var state_55380__$1 = state_55380;
var statearr_55388_55429 = state_55380__$1;
(statearr_55388_55429[(2)] = inst_55343);

(statearr_55388_55429[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55381 === (12))){
var inst_55357 = (state_55380[(12)]);
var inst_55367 = cljs.core.first(inst_55357);
var inst_55368 = cljs.core.rest(inst_55357);
var inst_55356 = inst_55367;
var inst_55357__$1 = inst_55368;
var state_55380__$1 = (function (){var statearr_55389 = state_55380;
(statearr_55389[(11)] = inst_55356);

(statearr_55389[(12)] = inst_55357__$1);

return statearr_55389;
})();
var statearr_55390_55430 = state_55380__$1;
(statearr_55390_55430[(2)] = null);

(statearr_55390_55430[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55381 === (2))){
var inst_55338 = (state_55380[(7)]);
var inst_55340 = (state_55380[(9)]);
var inst_55337 = (state_55380[(2)]);
var inst_55338__$1 = cljs.core.__destructure_map(inst_55337);
var inst_55339 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55338__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_55340__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55338__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var state_55380__$1 = (function (){var statearr_55391 = state_55380;
(statearr_55391[(7)] = inst_55338__$1);

(statearr_55391[(8)] = inst_55339);

(statearr_55391[(9)] = inst_55340__$1);

return statearr_55391;
})();
if(cljs.core.truth_(inst_55340__$1)){
var statearr_55392_55431 = state_55380__$1;
(statearr_55392_55431[(1)] = (3));

} else {
var statearr_55393_55432 = state_55380__$1;
(statearr_55393_55432[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55381 === (11))){
var inst_55338 = (state_55380[(7)]);
var inst_55339 = (state_55380[(8)]);
var inst_55340 = (state_55380[(9)]);
var inst_55356 = (state_55380[(11)]);
var inst_55357 = (state_55380[(12)]);
var inst_55361 = (state_55380[(2)]);
var inst_55362 = (function (){var map__55334 = inst_55338;
var result = inst_55339;
var error = inst_55340;
var f = inst_55356;
var files = inst_55357;
var r = inst_55361;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compile result: ",r], null);
});
})();
var inst_55363 = (new cljs.core.Delay(inst_55362,null));
var inst_55364 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,79,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_55363,null,(272),null);
var inst_55365 = cljs.core.seq(inst_55357);
var state_55380__$1 = (function (){var statearr_55394 = state_55380;
(statearr_55394[(13)] = inst_55364);

return statearr_55394;
})();
if(inst_55365){
var statearr_55395_55433 = state_55380__$1;
(statearr_55395_55433[(1)] = (12));

} else {
var statearr_55396_55434 = state_55380__$1;
(statearr_55396_55434[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55381 === (9))){
var inst_55356 = (state_55380[(11)]);
var inst_55359 = goldly.cljs.loader.load_cljs_file(static_QMARK_,inst_55356);
var state_55380__$1 = state_55380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55380__$1,(11),inst_55359);
} else {
if((state_val_55381 === (5))){
var inst_55378 = (state_55380[(2)]);
var state_55380__$1 = state_55380;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55380__$1,inst_55378);
} else {
if((state_val_55381 === (14))){
var inst_55372 = (state_55380[(2)]);
var state_55380__$1 = state_55380;
var statearr_55397_55435 = state_55380__$1;
(statearr_55397_55435[(2)] = inst_55372);

(statearr_55397_55435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55381 === (10))){
var inst_55374 = (state_55380[(2)]);
var state_55380__$1 = state_55380;
var statearr_55398_55436 = state_55380__$1;
(statearr_55398_55436[(2)] = inst_55374);

(statearr_55398_55436[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55381 === (8))){
var inst_55376 = (state_55380[(2)]);
var state_55380__$1 = state_55380;
var statearr_55399_55437 = state_55380__$1;
(statearr_55399_55437[(2)] = inst_55376);

(statearr_55399_55437[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});
return (function() {
var goldly$cljs$loader$load_cljs_$_state_machine__41306__auto__ = null;
var goldly$cljs$loader$load_cljs_$_state_machine__41306__auto____0 = (function (){
var statearr_55400 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55400[(0)] = goldly$cljs$loader$load_cljs_$_state_machine__41306__auto__);

(statearr_55400[(1)] = (1));

return statearr_55400;
});
var goldly$cljs$loader$load_cljs_$_state_machine__41306__auto____1 = (function (state_55380){
while(true){
var ret_value__41307__auto__ = (function (){try{while(true){
var result__41308__auto__ = switch__41305__auto__(state_55380);
if(cljs.core.keyword_identical_QMARK_(result__41308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41308__auto__;
}
break;
}
}catch (e55401){var ex__41309__auto__ = e55401;
var statearr_55402_55438 = state_55380;
(statearr_55402_55438[(2)] = ex__41309__auto__);


if(cljs.core.seq((state_55380[(4)]))){
var statearr_55403_55439 = state_55380;
(statearr_55403_55439[(1)] = cljs.core.first((state_55380[(4)])));

} else {
throw ex__41309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55440 = state_55380;
state_55380 = G__55440;
continue;
} else {
return ret_value__41307__auto__;
}
break;
}
});
goldly$cljs$loader$load_cljs_$_state_machine__41306__auto__ = function(state_55380){
switch(arguments.length){
case 0:
return goldly$cljs$loader$load_cljs_$_state_machine__41306__auto____0.call(this);
case 1:
return goldly$cljs$loader$load_cljs_$_state_machine__41306__auto____1.call(this,state_55380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$cljs$loader$load_cljs_$_state_machine__41306__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$cljs$loader$load_cljs_$_state_machine__41306__auto____0;
goldly$cljs$loader$load_cljs_$_state_machine__41306__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$cljs$loader$load_cljs_$_state_machine__41306__auto____1;
return goldly$cljs$loader$load_cljs_$_state_machine__41306__auto__;
})()
})();
var state__41383__auto__ = (function (){var statearr_55404 = f__41382__auto__();
(statearr_55404[(6)] = c__41381__auto__);

return statearr_55404;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41383__auto__);
}));

return c__41381__auto__;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("goldly","cljs-sci-reload","goldly/cljs-sci-reload",784118632),(function (cofx,p__55405){
var vec__55406 = p__55405;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55406,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55406,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,97,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs-sci-reload received: %s",new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(result)], null);
}),null)),null,(273),null);

goldly.cljs.loader.compile_cljs(result);

goldly.cljs.reload.reload_cljs();

return null;
}));

//# sourceMappingURL=goldly.cljs.loader.js.map
