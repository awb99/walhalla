goog.provide('goldly.cljs.loader');
goldly.cljs.loader.compile_cljs_p = (function goldly$cljs$loader$compile_cljs_p(p__55289){
var map__55290 = p__55289;
var map__55290__$1 = cljs.core.__destructure_map(map__55290);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55290__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55290__$1,new cljs.core.Keyword(null,"code","code",1586293142));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compiling-async: ",filename], null);
}),null)),null,(264),null);

var er_p = goldly.sci.kernel_cljs.compile_code_async(code);
return er_p.catch((function (e){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.cljs.loader",null,26,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["eval failed: ",e], null);
}),null)),null,(265),null);

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
}),null)),null,(266),null);

if(cljs.core.truth_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [er], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,33,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs eval result:",er], null);
}),null)),null,(267),null);

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
}),null)),null,(268),null);

return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,(27));
}));

return ch;
});
goldly.cljs.loader.explore = (function goldly$cljs$loader$explore(static_QMARK_){
if(cljs.core.truth_(static_QMARK_)){
return goldly.offline.old.cljs_explore();
} else {
return goldly.service.core.run(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fun","fun",-1265158045),new cljs.core.Symbol("goldly.app.run","cljs-explore","goldly.app.run/cljs-explore",-1183368704,null)], null));
}
});
goldly.cljs.loader.load_cljs_file = (function goldly$cljs$loader$load_cljs_file(static_QMARK_,filename){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,53,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loading cljs file: ",filename], null);
}),null)),null,(269),null);

var c__41381__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41382__auto__ = (function (){var switch__41305__auto__ = (function (state_55323){
var state_val_55324 = (state_55323[(1)]);
if((state_val_55324 === (7))){
var state_55323__$1 = state_55323;
var statearr_55325_55419 = state_55323__$1;
(statearr_55325_55419[(2)] = null);

(statearr_55325_55419[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55324 === (1))){
var state_55323__$1 = state_55323;
if(cljs.core.truth_(static_QMARK_)){
var statearr_55326_55420 = state_55323__$1;
(statearr_55326_55420[(1)] = (3));

} else {
var statearr_55327_55421 = state_55323__$1;
(statearr_55327_55421[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55324 === (4))){
var inst_55295 = [new cljs.core.Keyword(null,"fun","fun",-1265158045),new cljs.core.Keyword(null,"args","args",1315556576)];
var inst_55296 = new cljs.core.Symbol("goldly.cljs.loader","load-file-or-res!","goldly.cljs.loader/load-file-or-res!",823763230,null);
var inst_55297 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_55298 = [filename];
var inst_55299 = (new cljs.core.PersistentVector(null,1,(5),inst_55297,inst_55298,null));
var inst_55300 = [inst_55296,inst_55299];
var inst_55301 = cljs.core.PersistentHashMap.fromArrays(inst_55295,inst_55300);
var inst_55302 = goldly.service.core.run(inst_55301);
var state_55323__$1 = state_55323;
var statearr_55328_55422 = state_55323__$1;
(statearr_55328_55422[(2)] = inst_55302);

(statearr_55328_55422[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55324 === (6))){
var inst_55308 = (state_55323[(7)]);
var inst_55307 = (state_55323[(8)]);
var inst_55311 = (inst_55308.cljs$core$IFn$_invoke$arity$2 ? inst_55308.cljs$core$IFn$_invoke$arity$2("error loading cljs: ",inst_55307) : inst_55308.call(null,"error loading cljs: ",inst_55307));
var state_55323__$1 = state_55323;
var statearr_55329_55423 = state_55323__$1;
(statearr_55329_55423[(2)] = inst_55311);

(statearr_55329_55423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55324 === (3))){
var inst_55293 = goldly.offline.old.get_code(filename);
var state_55323__$1 = state_55323;
var statearr_55330_55424 = state_55323__$1;
(statearr_55330_55424[(2)] = inst_55293);

(statearr_55330_55424[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55324 === (12))){
var inst_55318 = (state_55323[(2)]);
var state_55323__$1 = state_55323;
var statearr_55331_55425 = state_55323__$1;
(statearr_55331_55425[(2)] = inst_55318);

(statearr_55331_55425[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55324 === (2))){
var inst_55307 = (state_55323[(8)]);
var inst_55308 = (state_55323[(7)]);
var inst_55306 = (state_55323[(2)]);
var inst_55307__$1 = cljs.core.__destructure_map(inst_55306);
var inst_55308__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55307__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_55309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55307__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var state_55323__$1 = (function (){var statearr_55332 = state_55323;
(statearr_55332[(8)] = inst_55307__$1);

(statearr_55332[(7)] = inst_55308__$1);

(statearr_55332[(9)] = inst_55309);

return statearr_55332;
})();
if(cljs.core.truth_(inst_55308__$1)){
var statearr_55333_55426 = state_55323__$1;
(statearr_55333_55426[(1)] = (6));

} else {
var statearr_55334_55427 = state_55323__$1;
(statearr_55334_55427[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55324 === (11))){
var inst_55321 = (state_55323[(2)]);
var state_55323__$1 = state_55323;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55323__$1,inst_55321);
} else {
if((state_val_55324 === (9))){
var inst_55309 = (state_55323[(9)]);
var inst_55316 = goldly.cljs.loader.compile_cljs(inst_55309);
var state_55323__$1 = state_55323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55323__$1,(12),inst_55316);
} else {
if((state_val_55324 === (5))){
var inst_55304 = (state_55323[(2)]);
var state_55323__$1 = state_55323;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55323__$1,(2),inst_55304);
} else {
if((state_val_55324 === (10))){
var state_55323__$1 = state_55323;
var statearr_55335_55428 = state_55323__$1;
(statearr_55335_55428[(2)] = null);

(statearr_55335_55428[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55324 === (8))){
var inst_55309 = (state_55323[(9)]);
var inst_55314 = (state_55323[(2)]);
var state_55323__$1 = (function (){var statearr_55336 = state_55323;
(statearr_55336[(10)] = inst_55314);

return statearr_55336;
})();
if(cljs.core.truth_(inst_55309)){
var statearr_55337_55429 = state_55323__$1;
(statearr_55337_55429[(1)] = (9));

} else {
var statearr_55338_55430 = state_55323__$1;
(statearr_55338_55430[(1)] = (10));

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
var statearr_55339 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_55339[(0)] = goldly$cljs$loader$load_cljs_file_$_state_machine__41306__auto__);

(statearr_55339[(1)] = (1));

return statearr_55339;
});
var goldly$cljs$loader$load_cljs_file_$_state_machine__41306__auto____1 = (function (state_55323){
while(true){
var ret_value__41307__auto__ = (function (){try{while(true){
var result__41308__auto__ = switch__41305__auto__(state_55323);
if(cljs.core.keyword_identical_QMARK_(result__41308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41308__auto__;
}
break;
}
}catch (e55340){var ex__41309__auto__ = e55340;
var statearr_55341_55431 = state_55323;
(statearr_55341_55431[(2)] = ex__41309__auto__);


if(cljs.core.seq((state_55323[(4)]))){
var statearr_55342_55432 = state_55323;
(statearr_55342_55432[(1)] = cljs.core.first((state_55323[(4)])));

} else {
throw ex__41309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55433 = state_55323;
state_55323 = G__55433;
continue;
} else {
return ret_value__41307__auto__;
}
break;
}
});
goldly$cljs$loader$load_cljs_file_$_state_machine__41306__auto__ = function(state_55323){
switch(arguments.length){
case 0:
return goldly$cljs$loader$load_cljs_file_$_state_machine__41306__auto____0.call(this);
case 1:
return goldly$cljs$loader$load_cljs_file_$_state_machine__41306__auto____1.call(this,state_55323);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$cljs$loader$load_cljs_file_$_state_machine__41306__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$cljs$loader$load_cljs_file_$_state_machine__41306__auto____0;
goldly$cljs$loader$load_cljs_file_$_state_machine__41306__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$cljs$loader$load_cljs_file_$_state_machine__41306__auto____1;
return goldly$cljs$loader$load_cljs_file_$_state_machine__41306__auto__;
})()
})();
var state__41383__auto__ = (function (){var statearr_55343 = f__41382__auto__();
(statearr_55343[(6)] = c__41381__auto__);

return statearr_55343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41383__auto__);
}));

return c__41381__auto__;
});
goldly.cljs.loader.load_cljs = (function goldly$cljs$loader$load_cljs(static_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,67,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-cljs static?: ",static_QMARK_], null);
}),null)),null,(270),null);

var c__41381__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41382__auto__ = (function (){var switch__41305__auto__ = (function (state_55390){
var state_val_55391 = (state_55390[(1)]);
if((state_val_55391 === (7))){
var inst_55348 = (state_55390[(7)]);
var inst_55349 = (state_55390[(8)]);
var inst_55350 = (state_55390[(9)]);
var inst_55361 = (function (){var map__55344 = inst_55348;
var result = inst_55349;
var error = inst_55350;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["autoload sci-cljs files: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0))], null);
});
})();
var inst_55362 = (new cljs.core.Delay(inst_55361,null));
var inst_55363 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,75,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_55362,null,(272),null);
var inst_55364 = cljs.core.first(inst_55349);
var inst_55365 = cljs.core.rest(inst_55349);
var inst_55366 = inst_55364;
var inst_55367 = inst_55365;
var state_55390__$1 = (function (){var statearr_55392 = state_55390;
(statearr_55392[(10)] = inst_55363);

(statearr_55392[(11)] = inst_55366);

(statearr_55392[(12)] = inst_55367);

return statearr_55392;
})();
var statearr_55393_55434 = state_55390__$1;
(statearr_55393_55434[(2)] = null);

(statearr_55393_55434[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55391 === (1))){
var inst_55345 = goldly.cljs.loader.explore(static_QMARK_);
var state_55390__$1 = state_55390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55390__$1,(2),inst_55345);
} else {
if((state_val_55391 === (4))){
var inst_55349 = (state_55390[(8)]);
var inst_55355 = cljs.core.empty_QMARK_(inst_55349);
var state_55390__$1 = state_55390;
if(inst_55355){
var statearr_55394_55435 = state_55390__$1;
(statearr_55394_55435[(1)] = (6));

} else {
var statearr_55395_55436 = state_55390__$1;
(statearr_55395_55436[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55391 === (13))){
var state_55390__$1 = state_55390;
var statearr_55396_55437 = state_55390__$1;
(statearr_55396_55437[(2)] = null);

(statearr_55396_55437[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55391 === (6))){
var inst_55348 = (state_55390[(7)]);
var inst_55349 = (state_55390[(8)]);
var inst_55350 = (state_55390[(9)]);
var inst_55357 = (function (){var map__55344 = inst_55348;
var result = inst_55349;
var error = inst_55350;
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no autoload cljs files available!"], null);
});
})();
var inst_55358 = (new cljs.core.Delay(inst_55357,null));
var inst_55359 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"goldly.cljs.loader",null,73,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_55358,null,(271),null);
var state_55390__$1 = state_55390;
var statearr_55397_55438 = state_55390__$1;
(statearr_55397_55438[(2)] = inst_55359);

(statearr_55397_55438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55391 === (3))){
var inst_55350 = (state_55390[(9)]);
var inst_55352 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_55350], 0));
var inst_55353 = (inst_55350.cljs$core$IFn$_invoke$arity$2 ? inst_55350.cljs$core$IFn$_invoke$arity$2("error getting cljs files: ",inst_55352) : inst_55350.call(null,"error getting cljs files: ",inst_55352));
var state_55390__$1 = state_55390;
var statearr_55398_55439 = state_55390__$1;
(statearr_55398_55439[(2)] = inst_55353);

(statearr_55398_55439[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55391 === (12))){
var inst_55367 = (state_55390[(12)]);
var inst_55377 = cljs.core.first(inst_55367);
var inst_55378 = cljs.core.rest(inst_55367);
var inst_55366 = inst_55377;
var inst_55367__$1 = inst_55378;
var state_55390__$1 = (function (){var statearr_55399 = state_55390;
(statearr_55399[(11)] = inst_55366);

(statearr_55399[(12)] = inst_55367__$1);

return statearr_55399;
})();
var statearr_55400_55440 = state_55390__$1;
(statearr_55400_55440[(2)] = null);

(statearr_55400_55440[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55391 === (2))){
var inst_55348 = (state_55390[(7)]);
var inst_55350 = (state_55390[(9)]);
var inst_55347 = (state_55390[(2)]);
var inst_55348__$1 = cljs.core.__destructure_map(inst_55347);
var inst_55349 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55348__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_55350__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_55348__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var state_55390__$1 = (function (){var statearr_55401 = state_55390;
(statearr_55401[(7)] = inst_55348__$1);

(statearr_55401[(8)] = inst_55349);

(statearr_55401[(9)] = inst_55350__$1);

return statearr_55401;
})();
if(cljs.core.truth_(inst_55350__$1)){
var statearr_55402_55441 = state_55390__$1;
(statearr_55402_55441[(1)] = (3));

} else {
var statearr_55403_55442 = state_55390__$1;
(statearr_55403_55442[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55391 === (11))){
var inst_55348 = (state_55390[(7)]);
var inst_55349 = (state_55390[(8)]);
var inst_55350 = (state_55390[(9)]);
var inst_55366 = (state_55390[(11)]);
var inst_55367 = (state_55390[(12)]);
var inst_55371 = (state_55390[(2)]);
var inst_55372 = (function (){var map__55344 = inst_55348;
var result = inst_55349;
var error = inst_55350;
var f = inst_55366;
var files = inst_55367;
var r = inst_55371;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compile result: ",r], null);
});
})();
var inst_55373 = (new cljs.core.Delay(inst_55372,null));
var inst_55374 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,79,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_55373,null,(273),null);
var inst_55375 = cljs.core.seq(inst_55367);
var state_55390__$1 = (function (){var statearr_55404 = state_55390;
(statearr_55404[(13)] = inst_55374);

return statearr_55404;
})();
if(inst_55375){
var statearr_55405_55443 = state_55390__$1;
(statearr_55405_55443[(1)] = (12));

} else {
var statearr_55406_55444 = state_55390__$1;
(statearr_55406_55444[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55391 === (9))){
var inst_55366 = (state_55390[(11)]);
var inst_55369 = goldly.cljs.loader.load_cljs_file(static_QMARK_,inst_55366);
var state_55390__$1 = state_55390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_55390__$1,(11),inst_55369);
} else {
if((state_val_55391 === (5))){
var inst_55388 = (state_55390[(2)]);
var state_55390__$1 = state_55390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_55390__$1,inst_55388);
} else {
if((state_val_55391 === (14))){
var inst_55382 = (state_55390[(2)]);
var state_55390__$1 = state_55390;
var statearr_55407_55445 = state_55390__$1;
(statearr_55407_55445[(2)] = inst_55382);

(statearr_55407_55445[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55391 === (10))){
var inst_55384 = (state_55390[(2)]);
var state_55390__$1 = state_55390;
var statearr_55408_55446 = state_55390__$1;
(statearr_55408_55446[(2)] = inst_55384);

(statearr_55408_55446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55391 === (8))){
var inst_55386 = (state_55390[(2)]);
var state_55390__$1 = state_55390;
var statearr_55409_55447 = state_55390__$1;
(statearr_55409_55447[(2)] = inst_55386);

(statearr_55409_55447[(1)] = (5));


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
var statearr_55410 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55410[(0)] = goldly$cljs$loader$load_cljs_$_state_machine__41306__auto__);

(statearr_55410[(1)] = (1));

return statearr_55410;
});
var goldly$cljs$loader$load_cljs_$_state_machine__41306__auto____1 = (function (state_55390){
while(true){
var ret_value__41307__auto__ = (function (){try{while(true){
var result__41308__auto__ = switch__41305__auto__(state_55390);
if(cljs.core.keyword_identical_QMARK_(result__41308__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41308__auto__;
}
break;
}
}catch (e55411){var ex__41309__auto__ = e55411;
var statearr_55412_55448 = state_55390;
(statearr_55412_55448[(2)] = ex__41309__auto__);


if(cljs.core.seq((state_55390[(4)]))){
var statearr_55413_55449 = state_55390;
(statearr_55413_55449[(1)] = cljs.core.first((state_55390[(4)])));

} else {
throw ex__41309__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41307__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55450 = state_55390;
state_55390 = G__55450;
continue;
} else {
return ret_value__41307__auto__;
}
break;
}
});
goldly$cljs$loader$load_cljs_$_state_machine__41306__auto__ = function(state_55390){
switch(arguments.length){
case 0:
return goldly$cljs$loader$load_cljs_$_state_machine__41306__auto____0.call(this);
case 1:
return goldly$cljs$loader$load_cljs_$_state_machine__41306__auto____1.call(this,state_55390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$cljs$loader$load_cljs_$_state_machine__41306__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$cljs$loader$load_cljs_$_state_machine__41306__auto____0;
goldly$cljs$loader$load_cljs_$_state_machine__41306__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$cljs$loader$load_cljs_$_state_machine__41306__auto____1;
return goldly$cljs$loader$load_cljs_$_state_machine__41306__auto__;
})()
})();
var state__41383__auto__ = (function (){var statearr_55414 = f__41382__auto__();
(statearr_55414[(6)] = c__41381__auto__);

return statearr_55414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41383__auto__);
}));

return c__41381__auto__;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("goldly","cljs-sci-reload","goldly/cljs-sci-reload",784118632),(function (cofx,p__55415){
var vec__55416 = p__55415;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55416,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55416,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,97,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs-sci-reload received: %s",new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(result)], null);
}),null)),null,(274),null);

goldly.cljs.loader.compile_cljs(result);

goldly.cljs.reload.reload_cljs();

return null;
}));

//# sourceMappingURL=goldly.cljs.loader.js.map
