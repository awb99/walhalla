goog.provide('goldly.cljs.loader');
goldly.cljs.loader.compile_cljs_p = (function goldly$cljs$loader$compile_cljs_p(p__54572){
var map__54573 = p__54572;
var map__54573__$1 = cljs.core.__destructure_map(map__54573);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54573__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54573__$1,new cljs.core.Keyword(null,"code","code",1586293142));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compiling-async: ",filename], null);
}),null)),null,(99),null);

var er_p = goldly.sci.kernel_cljs.compile_code_async(code);
return er_p.catch((function (e){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.cljs.loader",null,26,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["eval failed: ",e], null);
}),null)),null,(100),null);

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
}),null)),null,(101),null);

if(cljs.core.truth_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [er], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,33,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs eval result:",er], null);
}),null)),null,(102),null);

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
}),null)),null,(103),null);

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
}),null)),null,(104),null);

var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_54606){
var state_val_54607 = (state_54606[(1)]);
if((state_val_54607 === (7))){
var state_54606__$1 = state_54606;
var statearr_54608_54702 = state_54606__$1;
(statearr_54608_54702[(2)] = null);

(statearr_54608_54702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54607 === (1))){
var state_54606__$1 = state_54606;
if(cljs.core.truth_(static_QMARK_)){
var statearr_54609_54703 = state_54606__$1;
(statearr_54609_54703[(1)] = (3));

} else {
var statearr_54610_54704 = state_54606__$1;
(statearr_54610_54704[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54607 === (4))){
var inst_54578 = [new cljs.core.Keyword(null,"fun","fun",-1265158045),new cljs.core.Keyword(null,"args","args",1315556576)];
var inst_54579 = new cljs.core.Symbol("goldly.cljs.loader","load-file-or-res!","goldly.cljs.loader/load-file-or-res!",823763230,null);
var inst_54580 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54581 = [filename];
var inst_54582 = (new cljs.core.PersistentVector(null,1,(5),inst_54580,inst_54581,null));
var inst_54583 = [inst_54579,inst_54582];
var inst_54584 = cljs.core.PersistentHashMap.fromArrays(inst_54578,inst_54583);
var inst_54585 = goldly.service.core.run(inst_54584);
var state_54606__$1 = state_54606;
var statearr_54611_54705 = state_54606__$1;
(statearr_54611_54705[(2)] = inst_54585);

(statearr_54611_54705[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54607 === (6))){
var inst_54591 = (state_54606[(7)]);
var inst_54590 = (state_54606[(8)]);
var inst_54594 = (inst_54591.cljs$core$IFn$_invoke$arity$2 ? inst_54591.cljs$core$IFn$_invoke$arity$2("error loading cljs: ",inst_54590) : inst_54591.call(null,"error loading cljs: ",inst_54590));
var state_54606__$1 = state_54606;
var statearr_54612_54706 = state_54606__$1;
(statearr_54612_54706[(2)] = inst_54594);

(statearr_54612_54706[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54607 === (3))){
var inst_54576 = goldly.static$.get_code(filename);
var state_54606__$1 = state_54606;
var statearr_54613_54707 = state_54606__$1;
(statearr_54613_54707[(2)] = inst_54576);

(statearr_54613_54707[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54607 === (12))){
var inst_54601 = (state_54606[(2)]);
var state_54606__$1 = state_54606;
var statearr_54614_54708 = state_54606__$1;
(statearr_54614_54708[(2)] = inst_54601);

(statearr_54614_54708[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54607 === (2))){
var inst_54590 = (state_54606[(8)]);
var inst_54591 = (state_54606[(7)]);
var inst_54589 = (state_54606[(2)]);
var inst_54590__$1 = cljs.core.__destructure_map(inst_54589);
var inst_54591__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54590__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_54592 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54590__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var state_54606__$1 = (function (){var statearr_54615 = state_54606;
(statearr_54615[(8)] = inst_54590__$1);

(statearr_54615[(7)] = inst_54591__$1);

(statearr_54615[(9)] = inst_54592);

return statearr_54615;
})();
if(cljs.core.truth_(inst_54591__$1)){
var statearr_54616_54709 = state_54606__$1;
(statearr_54616_54709[(1)] = (6));

} else {
var statearr_54617_54710 = state_54606__$1;
(statearr_54617_54710[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54607 === (11))){
var inst_54604 = (state_54606[(2)]);
var state_54606__$1 = state_54606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54606__$1,inst_54604);
} else {
if((state_val_54607 === (9))){
var inst_54592 = (state_54606[(9)]);
var inst_54599 = goldly.cljs.loader.compile_cljs(inst_54592);
var state_54606__$1 = state_54606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54606__$1,(12),inst_54599);
} else {
if((state_val_54607 === (5))){
var inst_54587 = (state_54606[(2)]);
var state_54606__$1 = state_54606;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54606__$1,(2),inst_54587);
} else {
if((state_val_54607 === (10))){
var state_54606__$1 = state_54606;
var statearr_54618_54711 = state_54606__$1;
(statearr_54618_54711[(2)] = null);

(statearr_54618_54711[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54607 === (8))){
var inst_54592 = (state_54606[(9)]);
var inst_54597 = (state_54606[(2)]);
var state_54606__$1 = (function (){var statearr_54619 = state_54606;
(statearr_54619[(10)] = inst_54597);

return statearr_54619;
})();
if(cljs.core.truth_(inst_54592)){
var statearr_54620_54712 = state_54606__$1;
(statearr_54620_54712[(1)] = (9));

} else {
var statearr_54621_54713 = state_54606__$1;
(statearr_54621_54713[(1)] = (10));

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
var goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__ = null;
var goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____0 = (function (){
var statearr_54622 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54622[(0)] = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__);

(statearr_54622[(1)] = (1));

return statearr_54622;
});
var goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1 = (function (state_54606){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_54606);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e54623){var ex__41228__auto__ = e54623;
var statearr_54624_54714 = state_54606;
(statearr_54624_54714[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_54606[(4)]))){
var statearr_54625_54715 = state_54606;
(statearr_54625_54715[(1)] = cljs.core.first((state_54606[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54716 = state_54606;
state_54606 = G__54716;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__ = function(state_54606){
switch(arguments.length){
case 0:
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1.call(this,state_54606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____0;
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1;
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_54626 = f__41248__auto__();
(statearr_54626[(6)] = c__41247__auto__);

return statearr_54626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
});
goldly.cljs.loader.load_cljs = (function goldly$cljs$loader$load_cljs(static_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,67,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-cljs static?: ",static_QMARK_], null);
}),null)),null,(105),null);

var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_54673){
var state_val_54674 = (state_54673[(1)]);
if((state_val_54674 === (7))){
var inst_54631 = (state_54673[(7)]);
var inst_54632 = (state_54673[(8)]);
var inst_54633 = (state_54673[(9)]);
var inst_54644 = (function (){var map__54627 = inst_54631;
var result = inst_54632;
var error = inst_54633;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["autoload sci-cljs files: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0))], null);
});
})();
var inst_54645 = (new cljs.core.Delay(inst_54644,null));
var inst_54646 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,75,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54645,null,(107),null);
var inst_54647 = cljs.core.first(inst_54632);
var inst_54648 = cljs.core.rest(inst_54632);
var inst_54649 = inst_54647;
var inst_54650 = inst_54648;
var state_54673__$1 = (function (){var statearr_54675 = state_54673;
(statearr_54675[(10)] = inst_54646);

(statearr_54675[(11)] = inst_54649);

(statearr_54675[(12)] = inst_54650);

return statearr_54675;
})();
var statearr_54676_54717 = state_54673__$1;
(statearr_54676_54717[(2)] = null);

(statearr_54676_54717[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (1))){
var inst_54628 = goldly.cljs.loader.explore(static_QMARK_);
var state_54673__$1 = state_54673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54673__$1,(2),inst_54628);
} else {
if((state_val_54674 === (4))){
var inst_54632 = (state_54673[(8)]);
var inst_54638 = cljs.core.empty_QMARK_(inst_54632);
var state_54673__$1 = state_54673;
if(inst_54638){
var statearr_54677_54718 = state_54673__$1;
(statearr_54677_54718[(1)] = (6));

} else {
var statearr_54678_54719 = state_54673__$1;
(statearr_54678_54719[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (13))){
var state_54673__$1 = state_54673;
var statearr_54679_54720 = state_54673__$1;
(statearr_54679_54720[(2)] = null);

(statearr_54679_54720[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (6))){
var inst_54631 = (state_54673[(7)]);
var inst_54632 = (state_54673[(8)]);
var inst_54633 = (state_54673[(9)]);
var inst_54640 = (function (){var map__54627 = inst_54631;
var result = inst_54632;
var error = inst_54633;
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no autoload cljs files available!"], null);
});
})();
var inst_54641 = (new cljs.core.Delay(inst_54640,null));
var inst_54642 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"goldly.cljs.loader",null,73,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54641,null,(106),null);
var state_54673__$1 = state_54673;
var statearr_54680_54721 = state_54673__$1;
(statearr_54680_54721[(2)] = inst_54642);

(statearr_54680_54721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (3))){
var inst_54633 = (state_54673[(9)]);
var inst_54635 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54633], 0));
var inst_54636 = (inst_54633.cljs$core$IFn$_invoke$arity$2 ? inst_54633.cljs$core$IFn$_invoke$arity$2("error getting cljs files: ",inst_54635) : inst_54633.call(null,"error getting cljs files: ",inst_54635));
var state_54673__$1 = state_54673;
var statearr_54681_54722 = state_54673__$1;
(statearr_54681_54722[(2)] = inst_54636);

(statearr_54681_54722[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (12))){
var inst_54650 = (state_54673[(12)]);
var inst_54660 = cljs.core.first(inst_54650);
var inst_54661 = cljs.core.rest(inst_54650);
var inst_54649 = inst_54660;
var inst_54650__$1 = inst_54661;
var state_54673__$1 = (function (){var statearr_54682 = state_54673;
(statearr_54682[(11)] = inst_54649);

(statearr_54682[(12)] = inst_54650__$1);

return statearr_54682;
})();
var statearr_54683_54723 = state_54673__$1;
(statearr_54683_54723[(2)] = null);

(statearr_54683_54723[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (2))){
var inst_54631 = (state_54673[(7)]);
var inst_54633 = (state_54673[(9)]);
var inst_54630 = (state_54673[(2)]);
var inst_54631__$1 = cljs.core.__destructure_map(inst_54630);
var inst_54632 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54631__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_54633__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54631__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var state_54673__$1 = (function (){var statearr_54684 = state_54673;
(statearr_54684[(7)] = inst_54631__$1);

(statearr_54684[(8)] = inst_54632);

(statearr_54684[(9)] = inst_54633__$1);

return statearr_54684;
})();
if(cljs.core.truth_(inst_54633__$1)){
var statearr_54685_54724 = state_54673__$1;
(statearr_54685_54724[(1)] = (3));

} else {
var statearr_54686_54725 = state_54673__$1;
(statearr_54686_54725[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (11))){
var inst_54631 = (state_54673[(7)]);
var inst_54632 = (state_54673[(8)]);
var inst_54633 = (state_54673[(9)]);
var inst_54649 = (state_54673[(11)]);
var inst_54650 = (state_54673[(12)]);
var inst_54654 = (state_54673[(2)]);
var inst_54655 = (function (){var map__54627 = inst_54631;
var result = inst_54632;
var error = inst_54633;
var f = inst_54649;
var files = inst_54650;
var r = inst_54654;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compile result: ",r], null);
});
})();
var inst_54656 = (new cljs.core.Delay(inst_54655,null));
var inst_54657 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,79,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54656,null,(108),null);
var inst_54658 = cljs.core.seq(inst_54650);
var state_54673__$1 = (function (){var statearr_54687 = state_54673;
(statearr_54687[(13)] = inst_54657);

return statearr_54687;
})();
if(inst_54658){
var statearr_54688_54726 = state_54673__$1;
(statearr_54688_54726[(1)] = (12));

} else {
var statearr_54689_54727 = state_54673__$1;
(statearr_54689_54727[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (9))){
var inst_54649 = (state_54673[(11)]);
var inst_54652 = goldly.cljs.loader.load_cljs_file(static_QMARK_,inst_54649);
var state_54673__$1 = state_54673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54673__$1,(11),inst_54652);
} else {
if((state_val_54674 === (5))){
var inst_54671 = (state_54673[(2)]);
var state_54673__$1 = state_54673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54673__$1,inst_54671);
} else {
if((state_val_54674 === (14))){
var inst_54665 = (state_54673[(2)]);
var state_54673__$1 = state_54673;
var statearr_54690_54728 = state_54673__$1;
(statearr_54690_54728[(2)] = inst_54665);

(statearr_54690_54728[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (10))){
var inst_54667 = (state_54673[(2)]);
var state_54673__$1 = state_54673;
var statearr_54691_54729 = state_54673__$1;
(statearr_54691_54729[(2)] = inst_54667);

(statearr_54691_54729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54674 === (8))){
var inst_54669 = (state_54673[(2)]);
var state_54673__$1 = state_54673;
var statearr_54692_54730 = state_54673__$1;
(statearr_54692_54730[(2)] = inst_54669);

(statearr_54692_54730[(1)] = (5));


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
var goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__ = null;
var goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____0 = (function (){
var statearr_54693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54693[(0)] = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__);

(statearr_54693[(1)] = (1));

return statearr_54693;
});
var goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1 = (function (state_54673){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_54673);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e54694){var ex__41228__auto__ = e54694;
var statearr_54695_54731 = state_54673;
(statearr_54695_54731[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_54673[(4)]))){
var statearr_54696_54732 = state_54673;
(statearr_54696_54732[(1)] = cljs.core.first((state_54673[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54733 = state_54673;
state_54673 = G__54733;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__ = function(state_54673){
switch(arguments.length){
case 0:
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1.call(this,state_54673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____0;
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1;
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_54697 = f__41248__auto__();
(statearr_54697[(6)] = c__41247__auto__);

return statearr_54697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("goldly","cljs-sci-reload","goldly/cljs-sci-reload",784118632),(function (cofx,p__54698){
var vec__54699 = p__54698;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54699,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54699,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,97,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs-sci-reload received: %s",new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(result)], null);
}),null)),null,(109),null);

goldly.cljs.loader.compile_cljs(result);

goldly.cljs.reload.reload_cljs();

return null;
}));

//# sourceMappingURL=goldly.cljs.loader.js.map
