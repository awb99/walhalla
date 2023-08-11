goog.provide('goldly.cljs.loader');
goldly.cljs.loader.compile_cljs_p = (function goldly$cljs$loader$compile_cljs_p(p__54577){
var map__54578 = p__54577;
var map__54578__$1 = cljs.core.__destructure_map(map__54578);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54578__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54578__$1,new cljs.core.Keyword(null,"code","code",1586293142));
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
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_54611){
var state_val_54612 = (state_54611[(1)]);
if((state_val_54612 === (7))){
var state_54611__$1 = state_54611;
var statearr_54613_54707 = state_54611__$1;
(statearr_54613_54707[(2)] = null);

(statearr_54613_54707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (1))){
var state_54611__$1 = state_54611;
if(cljs.core.truth_(static_QMARK_)){
var statearr_54614_54708 = state_54611__$1;
(statearr_54614_54708[(1)] = (3));

} else {
var statearr_54615_54709 = state_54611__$1;
(statearr_54615_54709[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (4))){
var inst_54583 = [new cljs.core.Keyword(null,"fun","fun",-1265158045),new cljs.core.Keyword(null,"args","args",1315556576)];
var inst_54584 = new cljs.core.Symbol("goldly.cljs.loader","load-file-or-res!","goldly.cljs.loader/load-file-or-res!",823763230,null);
var inst_54585 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54586 = [filename];
var inst_54587 = (new cljs.core.PersistentVector(null,1,(5),inst_54585,inst_54586,null));
var inst_54588 = [inst_54584,inst_54587];
var inst_54589 = cljs.core.PersistentHashMap.fromArrays(inst_54583,inst_54588);
var inst_54590 = goldly.service.core.run(inst_54589);
var state_54611__$1 = state_54611;
var statearr_54616_54710 = state_54611__$1;
(statearr_54616_54710[(2)] = inst_54590);

(statearr_54616_54710[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (6))){
var inst_54596 = (state_54611[(7)]);
var inst_54595 = (state_54611[(8)]);
var inst_54599 = (inst_54596.cljs$core$IFn$_invoke$arity$2 ? inst_54596.cljs$core$IFn$_invoke$arity$2("error loading cljs: ",inst_54595) : inst_54596.call(null,"error loading cljs: ",inst_54595));
var state_54611__$1 = state_54611;
var statearr_54617_54711 = state_54611__$1;
(statearr_54617_54711[(2)] = inst_54599);

(statearr_54617_54711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (3))){
var inst_54581 = goldly.static$.get_code(filename);
var state_54611__$1 = state_54611;
var statearr_54618_54712 = state_54611__$1;
(statearr_54618_54712[(2)] = inst_54581);

(statearr_54618_54712[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (12))){
var inst_54606 = (state_54611[(2)]);
var state_54611__$1 = state_54611;
var statearr_54619_54713 = state_54611__$1;
(statearr_54619_54713[(2)] = inst_54606);

(statearr_54619_54713[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (2))){
var inst_54595 = (state_54611[(8)]);
var inst_54596 = (state_54611[(7)]);
var inst_54594 = (state_54611[(2)]);
var inst_54595__$1 = cljs.core.__destructure_map(inst_54594);
var inst_54596__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54595__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_54597 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54595__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var state_54611__$1 = (function (){var statearr_54620 = state_54611;
(statearr_54620[(8)] = inst_54595__$1);

(statearr_54620[(7)] = inst_54596__$1);

(statearr_54620[(9)] = inst_54597);

return statearr_54620;
})();
if(cljs.core.truth_(inst_54596__$1)){
var statearr_54621_54714 = state_54611__$1;
(statearr_54621_54714[(1)] = (6));

} else {
var statearr_54622_54715 = state_54611__$1;
(statearr_54622_54715[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (11))){
var inst_54609 = (state_54611[(2)]);
var state_54611__$1 = state_54611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54611__$1,inst_54609);
} else {
if((state_val_54612 === (9))){
var inst_54597 = (state_54611[(9)]);
var inst_54604 = goldly.cljs.loader.compile_cljs(inst_54597);
var state_54611__$1 = state_54611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54611__$1,(12),inst_54604);
} else {
if((state_val_54612 === (5))){
var inst_54592 = (state_54611[(2)]);
var state_54611__$1 = state_54611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54611__$1,(2),inst_54592);
} else {
if((state_val_54612 === (10))){
var state_54611__$1 = state_54611;
var statearr_54623_54716 = state_54611__$1;
(statearr_54623_54716[(2)] = null);

(statearr_54623_54716[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54612 === (8))){
var inst_54597 = (state_54611[(9)]);
var inst_54602 = (state_54611[(2)]);
var state_54611__$1 = (function (){var statearr_54624 = state_54611;
(statearr_54624[(10)] = inst_54602);

return statearr_54624;
})();
if(cljs.core.truth_(inst_54597)){
var statearr_54625_54717 = state_54611__$1;
(statearr_54625_54717[(1)] = (9));

} else {
var statearr_54626_54718 = state_54611__$1;
(statearr_54626_54718[(1)] = (10));

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
var statearr_54627 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54627[(0)] = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__);

(statearr_54627[(1)] = (1));

return statearr_54627;
});
var goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1 = (function (state_54611){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_54611);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e54628){var ex__41228__auto__ = e54628;
var statearr_54629_54719 = state_54611;
(statearr_54629_54719[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_54611[(4)]))){
var statearr_54630_54720 = state_54611;
(statearr_54630_54720[(1)] = cljs.core.first((state_54611[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54721 = state_54611;
state_54611 = G__54721;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__ = function(state_54611){
switch(arguments.length){
case 0:
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1.call(this,state_54611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____0;
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1;
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_54631 = f__41248__auto__();
(statearr_54631[(6)] = c__41247__auto__);

return statearr_54631;
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
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_54678){
var state_val_54679 = (state_54678[(1)]);
if((state_val_54679 === (7))){
var inst_54636 = (state_54678[(7)]);
var inst_54637 = (state_54678[(8)]);
var inst_54638 = (state_54678[(9)]);
var inst_54649 = (function (){var map__54632 = inst_54636;
var result = inst_54637;
var error = inst_54638;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["autoload sci-cljs files: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0))], null);
});
})();
var inst_54650 = (new cljs.core.Delay(inst_54649,null));
var inst_54651 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,75,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54650,null,(107),null);
var inst_54652 = cljs.core.first(inst_54637);
var inst_54653 = cljs.core.rest(inst_54637);
var inst_54654 = inst_54652;
var inst_54655 = inst_54653;
var state_54678__$1 = (function (){var statearr_54680 = state_54678;
(statearr_54680[(10)] = inst_54651);

(statearr_54680[(11)] = inst_54654);

(statearr_54680[(12)] = inst_54655);

return statearr_54680;
})();
var statearr_54681_54722 = state_54678__$1;
(statearr_54681_54722[(2)] = null);

(statearr_54681_54722[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54679 === (1))){
var inst_54633 = goldly.cljs.loader.explore(static_QMARK_);
var state_54678__$1 = state_54678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54678__$1,(2),inst_54633);
} else {
if((state_val_54679 === (4))){
var inst_54637 = (state_54678[(8)]);
var inst_54643 = cljs.core.empty_QMARK_(inst_54637);
var state_54678__$1 = state_54678;
if(inst_54643){
var statearr_54682_54723 = state_54678__$1;
(statearr_54682_54723[(1)] = (6));

} else {
var statearr_54683_54724 = state_54678__$1;
(statearr_54683_54724[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54679 === (13))){
var state_54678__$1 = state_54678;
var statearr_54684_54725 = state_54678__$1;
(statearr_54684_54725[(2)] = null);

(statearr_54684_54725[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54679 === (6))){
var inst_54636 = (state_54678[(7)]);
var inst_54637 = (state_54678[(8)]);
var inst_54638 = (state_54678[(9)]);
var inst_54645 = (function (){var map__54632 = inst_54636;
var result = inst_54637;
var error = inst_54638;
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no autoload cljs files available!"], null);
});
})();
var inst_54646 = (new cljs.core.Delay(inst_54645,null));
var inst_54647 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"goldly.cljs.loader",null,73,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54646,null,(106),null);
var state_54678__$1 = state_54678;
var statearr_54685_54726 = state_54678__$1;
(statearr_54685_54726[(2)] = inst_54647);

(statearr_54685_54726[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54679 === (3))){
var inst_54638 = (state_54678[(9)]);
var inst_54640 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54638], 0));
var inst_54641 = (inst_54638.cljs$core$IFn$_invoke$arity$2 ? inst_54638.cljs$core$IFn$_invoke$arity$2("error getting cljs files: ",inst_54640) : inst_54638.call(null,"error getting cljs files: ",inst_54640));
var state_54678__$1 = state_54678;
var statearr_54686_54727 = state_54678__$1;
(statearr_54686_54727[(2)] = inst_54641);

(statearr_54686_54727[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54679 === (12))){
var inst_54655 = (state_54678[(12)]);
var inst_54665 = cljs.core.first(inst_54655);
var inst_54666 = cljs.core.rest(inst_54655);
var inst_54654 = inst_54665;
var inst_54655__$1 = inst_54666;
var state_54678__$1 = (function (){var statearr_54687 = state_54678;
(statearr_54687[(11)] = inst_54654);

(statearr_54687[(12)] = inst_54655__$1);

return statearr_54687;
})();
var statearr_54688_54728 = state_54678__$1;
(statearr_54688_54728[(2)] = null);

(statearr_54688_54728[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54679 === (2))){
var inst_54636 = (state_54678[(7)]);
var inst_54638 = (state_54678[(9)]);
var inst_54635 = (state_54678[(2)]);
var inst_54636__$1 = cljs.core.__destructure_map(inst_54635);
var inst_54637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54636__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_54638__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54636__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var state_54678__$1 = (function (){var statearr_54689 = state_54678;
(statearr_54689[(7)] = inst_54636__$1);

(statearr_54689[(8)] = inst_54637);

(statearr_54689[(9)] = inst_54638__$1);

return statearr_54689;
})();
if(cljs.core.truth_(inst_54638__$1)){
var statearr_54690_54729 = state_54678__$1;
(statearr_54690_54729[(1)] = (3));

} else {
var statearr_54691_54730 = state_54678__$1;
(statearr_54691_54730[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54679 === (11))){
var inst_54636 = (state_54678[(7)]);
var inst_54637 = (state_54678[(8)]);
var inst_54638 = (state_54678[(9)]);
var inst_54654 = (state_54678[(11)]);
var inst_54655 = (state_54678[(12)]);
var inst_54659 = (state_54678[(2)]);
var inst_54660 = (function (){var map__54632 = inst_54636;
var result = inst_54637;
var error = inst_54638;
var f = inst_54654;
var files = inst_54655;
var r = inst_54659;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compile result: ",r], null);
});
})();
var inst_54661 = (new cljs.core.Delay(inst_54660,null));
var inst_54662 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,79,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54661,null,(108),null);
var inst_54663 = cljs.core.seq(inst_54655);
var state_54678__$1 = (function (){var statearr_54692 = state_54678;
(statearr_54692[(13)] = inst_54662);

return statearr_54692;
})();
if(inst_54663){
var statearr_54693_54731 = state_54678__$1;
(statearr_54693_54731[(1)] = (12));

} else {
var statearr_54694_54732 = state_54678__$1;
(statearr_54694_54732[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54679 === (9))){
var inst_54654 = (state_54678[(11)]);
var inst_54657 = goldly.cljs.loader.load_cljs_file(static_QMARK_,inst_54654);
var state_54678__$1 = state_54678;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54678__$1,(11),inst_54657);
} else {
if((state_val_54679 === (5))){
var inst_54676 = (state_54678[(2)]);
var state_54678__$1 = state_54678;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54678__$1,inst_54676);
} else {
if((state_val_54679 === (14))){
var inst_54670 = (state_54678[(2)]);
var state_54678__$1 = state_54678;
var statearr_54695_54733 = state_54678__$1;
(statearr_54695_54733[(2)] = inst_54670);

(statearr_54695_54733[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54679 === (10))){
var inst_54672 = (state_54678[(2)]);
var state_54678__$1 = state_54678;
var statearr_54696_54734 = state_54678__$1;
(statearr_54696_54734[(2)] = inst_54672);

(statearr_54696_54734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54679 === (8))){
var inst_54674 = (state_54678[(2)]);
var state_54678__$1 = state_54678;
var statearr_54697_54735 = state_54678__$1;
(statearr_54697_54735[(2)] = inst_54674);

(statearr_54697_54735[(1)] = (5));


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
var statearr_54698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54698[(0)] = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__);

(statearr_54698[(1)] = (1));

return statearr_54698;
});
var goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1 = (function (state_54678){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_54678);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e54699){var ex__41228__auto__ = e54699;
var statearr_54700_54736 = state_54678;
(statearr_54700_54736[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_54678[(4)]))){
var statearr_54701_54737 = state_54678;
(statearr_54701_54737[(1)] = cljs.core.first((state_54678[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54738 = state_54678;
state_54678 = G__54738;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__ = function(state_54678){
switch(arguments.length){
case 0:
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1.call(this,state_54678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____0;
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1;
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_54702 = f__41248__auto__();
(statearr_54702[(6)] = c__41247__auto__);

return statearr_54702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("goldly","cljs-sci-reload","goldly/cljs-sci-reload",784118632),(function (cofx,p__54703){
var vec__54704 = p__54703;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54704,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54704,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,97,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs-sci-reload received: %s",new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(result)], null);
}),null)),null,(109),null);

goldly.cljs.loader.compile_cljs(result);

goldly.cljs.reload.reload_cljs();

return null;
}));

//# sourceMappingURL=goldly.cljs.loader.js.map
