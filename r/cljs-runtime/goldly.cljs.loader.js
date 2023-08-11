goog.provide('goldly.cljs.loader');
goldly.cljs.loader.compile_cljs_p = (function goldly$cljs$loader$compile_cljs_p(p__54613){
var map__54614 = p__54613;
var map__54614__$1 = cljs.core.__destructure_map(map__54614);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54614__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54614__$1,new cljs.core.Keyword(null,"code","code",1586293142));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compiling-async: ",filename], null);
}),null)),null,(114),null);

var er_p = goldly.sci.kernel_cljs.compile_code_async(code);
return er_p.catch((function (e){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.cljs.loader",null,26,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["eval failed: ",e], null);
}),null)),null,(115),null);

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
}),null)),null,(116),null);

if(cljs.core.truth_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [er], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,33,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs eval result:",er], null);
}),null)),null,(117),null);

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
}),null)),null,(118),null);

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
}),null)),null,(119),null);

var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_54647){
var state_val_54648 = (state_54647[(1)]);
if((state_val_54648 === (7))){
var state_54647__$1 = state_54647;
var statearr_54649_54743 = state_54647__$1;
(statearr_54649_54743[(2)] = null);

(statearr_54649_54743[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54648 === (1))){
var state_54647__$1 = state_54647;
if(cljs.core.truth_(static_QMARK_)){
var statearr_54650_54744 = state_54647__$1;
(statearr_54650_54744[(1)] = (3));

} else {
var statearr_54651_54745 = state_54647__$1;
(statearr_54651_54745[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54648 === (4))){
var inst_54619 = [new cljs.core.Keyword(null,"fun","fun",-1265158045),new cljs.core.Keyword(null,"args","args",1315556576)];
var inst_54620 = new cljs.core.Symbol("goldly.cljs.loader","load-file-or-res!","goldly.cljs.loader/load-file-or-res!",823763230,null);
var inst_54621 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54622 = [filename];
var inst_54623 = (new cljs.core.PersistentVector(null,1,(5),inst_54621,inst_54622,null));
var inst_54624 = [inst_54620,inst_54623];
var inst_54625 = cljs.core.PersistentHashMap.fromArrays(inst_54619,inst_54624);
var inst_54626 = goldly.service.core.run(inst_54625);
var state_54647__$1 = state_54647;
var statearr_54652_54746 = state_54647__$1;
(statearr_54652_54746[(2)] = inst_54626);

(statearr_54652_54746[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54648 === (6))){
var inst_54632 = (state_54647[(7)]);
var inst_54631 = (state_54647[(8)]);
var inst_54635 = (inst_54632.cljs$core$IFn$_invoke$arity$2 ? inst_54632.cljs$core$IFn$_invoke$arity$2("error loading cljs: ",inst_54631) : inst_54632.call(null,"error loading cljs: ",inst_54631));
var state_54647__$1 = state_54647;
var statearr_54653_54747 = state_54647__$1;
(statearr_54653_54747[(2)] = inst_54635);

(statearr_54653_54747[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54648 === (3))){
var inst_54617 = goldly.offline.old.get_code(filename);
var state_54647__$1 = state_54647;
var statearr_54654_54748 = state_54647__$1;
(statearr_54654_54748[(2)] = inst_54617);

(statearr_54654_54748[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54648 === (12))){
var inst_54642 = (state_54647[(2)]);
var state_54647__$1 = state_54647;
var statearr_54655_54749 = state_54647__$1;
(statearr_54655_54749[(2)] = inst_54642);

(statearr_54655_54749[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54648 === (2))){
var inst_54631 = (state_54647[(8)]);
var inst_54632 = (state_54647[(7)]);
var inst_54630 = (state_54647[(2)]);
var inst_54631__$1 = cljs.core.__destructure_map(inst_54630);
var inst_54632__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54631__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_54633 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54631__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var state_54647__$1 = (function (){var statearr_54656 = state_54647;
(statearr_54656[(8)] = inst_54631__$1);

(statearr_54656[(7)] = inst_54632__$1);

(statearr_54656[(9)] = inst_54633);

return statearr_54656;
})();
if(cljs.core.truth_(inst_54632__$1)){
var statearr_54657_54750 = state_54647__$1;
(statearr_54657_54750[(1)] = (6));

} else {
var statearr_54658_54751 = state_54647__$1;
(statearr_54658_54751[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54648 === (11))){
var inst_54645 = (state_54647[(2)]);
var state_54647__$1 = state_54647;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54647__$1,inst_54645);
} else {
if((state_val_54648 === (9))){
var inst_54633 = (state_54647[(9)]);
var inst_54640 = goldly.cljs.loader.compile_cljs(inst_54633);
var state_54647__$1 = state_54647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54647__$1,(12),inst_54640);
} else {
if((state_val_54648 === (5))){
var inst_54628 = (state_54647[(2)]);
var state_54647__$1 = state_54647;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54647__$1,(2),inst_54628);
} else {
if((state_val_54648 === (10))){
var state_54647__$1 = state_54647;
var statearr_54659_54752 = state_54647__$1;
(statearr_54659_54752[(2)] = null);

(statearr_54659_54752[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54648 === (8))){
var inst_54633 = (state_54647[(9)]);
var inst_54638 = (state_54647[(2)]);
var state_54647__$1 = (function (){var statearr_54660 = state_54647;
(statearr_54660[(10)] = inst_54638);

return statearr_54660;
})();
if(cljs.core.truth_(inst_54633)){
var statearr_54661_54753 = state_54647__$1;
(statearr_54661_54753[(1)] = (9));

} else {
var statearr_54662_54754 = state_54647__$1;
(statearr_54662_54754[(1)] = (10));

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
var statearr_54663 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54663[(0)] = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__);

(statearr_54663[(1)] = (1));

return statearr_54663;
});
var goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1 = (function (state_54647){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_54647);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e54664){var ex__41228__auto__ = e54664;
var statearr_54665_54755 = state_54647;
(statearr_54665_54755[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_54647[(4)]))){
var statearr_54666_54756 = state_54647;
(statearr_54666_54756[(1)] = cljs.core.first((state_54647[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54757 = state_54647;
state_54647 = G__54757;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__ = function(state_54647){
switch(arguments.length){
case 0:
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1.call(this,state_54647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____0;
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1;
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_54667 = f__41248__auto__();
(statearr_54667[(6)] = c__41247__auto__);

return statearr_54667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
});
goldly.cljs.loader.load_cljs = (function goldly$cljs$loader$load_cljs(static_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,67,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-cljs static?: ",static_QMARK_], null);
}),null)),null,(120),null);

var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_54714){
var state_val_54715 = (state_54714[(1)]);
if((state_val_54715 === (7))){
var inst_54672 = (state_54714[(7)]);
var inst_54673 = (state_54714[(8)]);
var inst_54674 = (state_54714[(9)]);
var inst_54685 = (function (){var map__54668 = inst_54672;
var result = inst_54673;
var error = inst_54674;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["autoload sci-cljs files: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0))], null);
});
})();
var inst_54686 = (new cljs.core.Delay(inst_54685,null));
var inst_54687 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,75,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54686,null,(122),null);
var inst_54688 = cljs.core.first(inst_54673);
var inst_54689 = cljs.core.rest(inst_54673);
var inst_54690 = inst_54688;
var inst_54691 = inst_54689;
var state_54714__$1 = (function (){var statearr_54716 = state_54714;
(statearr_54716[(10)] = inst_54687);

(statearr_54716[(11)] = inst_54690);

(statearr_54716[(12)] = inst_54691);

return statearr_54716;
})();
var statearr_54717_54758 = state_54714__$1;
(statearr_54717_54758[(2)] = null);

(statearr_54717_54758[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54715 === (1))){
var inst_54669 = goldly.cljs.loader.explore(static_QMARK_);
var state_54714__$1 = state_54714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54714__$1,(2),inst_54669);
} else {
if((state_val_54715 === (4))){
var inst_54673 = (state_54714[(8)]);
var inst_54679 = cljs.core.empty_QMARK_(inst_54673);
var state_54714__$1 = state_54714;
if(inst_54679){
var statearr_54718_54759 = state_54714__$1;
(statearr_54718_54759[(1)] = (6));

} else {
var statearr_54719_54760 = state_54714__$1;
(statearr_54719_54760[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54715 === (13))){
var state_54714__$1 = state_54714;
var statearr_54720_54761 = state_54714__$1;
(statearr_54720_54761[(2)] = null);

(statearr_54720_54761[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54715 === (6))){
var inst_54672 = (state_54714[(7)]);
var inst_54673 = (state_54714[(8)]);
var inst_54674 = (state_54714[(9)]);
var inst_54681 = (function (){var map__54668 = inst_54672;
var result = inst_54673;
var error = inst_54674;
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no autoload cljs files available!"], null);
});
})();
var inst_54682 = (new cljs.core.Delay(inst_54681,null));
var inst_54683 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"goldly.cljs.loader",null,73,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54682,null,(121),null);
var state_54714__$1 = state_54714;
var statearr_54721_54762 = state_54714__$1;
(statearr_54721_54762[(2)] = inst_54683);

(statearr_54721_54762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54715 === (3))){
var inst_54674 = (state_54714[(9)]);
var inst_54676 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54674], 0));
var inst_54677 = (inst_54674.cljs$core$IFn$_invoke$arity$2 ? inst_54674.cljs$core$IFn$_invoke$arity$2("error getting cljs files: ",inst_54676) : inst_54674.call(null,"error getting cljs files: ",inst_54676));
var state_54714__$1 = state_54714;
var statearr_54722_54763 = state_54714__$1;
(statearr_54722_54763[(2)] = inst_54677);

(statearr_54722_54763[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54715 === (12))){
var inst_54691 = (state_54714[(12)]);
var inst_54701 = cljs.core.first(inst_54691);
var inst_54702 = cljs.core.rest(inst_54691);
var inst_54690 = inst_54701;
var inst_54691__$1 = inst_54702;
var state_54714__$1 = (function (){var statearr_54723 = state_54714;
(statearr_54723[(11)] = inst_54690);

(statearr_54723[(12)] = inst_54691__$1);

return statearr_54723;
})();
var statearr_54724_54764 = state_54714__$1;
(statearr_54724_54764[(2)] = null);

(statearr_54724_54764[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54715 === (2))){
var inst_54672 = (state_54714[(7)]);
var inst_54674 = (state_54714[(9)]);
var inst_54671 = (state_54714[(2)]);
var inst_54672__$1 = cljs.core.__destructure_map(inst_54671);
var inst_54673 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54672__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_54674__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54672__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var state_54714__$1 = (function (){var statearr_54725 = state_54714;
(statearr_54725[(7)] = inst_54672__$1);

(statearr_54725[(8)] = inst_54673);

(statearr_54725[(9)] = inst_54674__$1);

return statearr_54725;
})();
if(cljs.core.truth_(inst_54674__$1)){
var statearr_54726_54765 = state_54714__$1;
(statearr_54726_54765[(1)] = (3));

} else {
var statearr_54727_54766 = state_54714__$1;
(statearr_54727_54766[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54715 === (11))){
var inst_54672 = (state_54714[(7)]);
var inst_54673 = (state_54714[(8)]);
var inst_54674 = (state_54714[(9)]);
var inst_54690 = (state_54714[(11)]);
var inst_54691 = (state_54714[(12)]);
var inst_54695 = (state_54714[(2)]);
var inst_54696 = (function (){var map__54668 = inst_54672;
var result = inst_54673;
var error = inst_54674;
var f = inst_54690;
var files = inst_54691;
var r = inst_54695;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compile result: ",r], null);
});
})();
var inst_54697 = (new cljs.core.Delay(inst_54696,null));
var inst_54698 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,79,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54697,null,(123),null);
var inst_54699 = cljs.core.seq(inst_54691);
var state_54714__$1 = (function (){var statearr_54728 = state_54714;
(statearr_54728[(13)] = inst_54698);

return statearr_54728;
})();
if(inst_54699){
var statearr_54729_54767 = state_54714__$1;
(statearr_54729_54767[(1)] = (12));

} else {
var statearr_54730_54768 = state_54714__$1;
(statearr_54730_54768[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54715 === (9))){
var inst_54690 = (state_54714[(11)]);
var inst_54693 = goldly.cljs.loader.load_cljs_file(static_QMARK_,inst_54690);
var state_54714__$1 = state_54714;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54714__$1,(11),inst_54693);
} else {
if((state_val_54715 === (5))){
var inst_54712 = (state_54714[(2)]);
var state_54714__$1 = state_54714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54714__$1,inst_54712);
} else {
if((state_val_54715 === (14))){
var inst_54706 = (state_54714[(2)]);
var state_54714__$1 = state_54714;
var statearr_54731_54769 = state_54714__$1;
(statearr_54731_54769[(2)] = inst_54706);

(statearr_54731_54769[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54715 === (10))){
var inst_54708 = (state_54714[(2)]);
var state_54714__$1 = state_54714;
var statearr_54732_54770 = state_54714__$1;
(statearr_54732_54770[(2)] = inst_54708);

(statearr_54732_54770[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54715 === (8))){
var inst_54710 = (state_54714[(2)]);
var state_54714__$1 = state_54714;
var statearr_54733_54771 = state_54714__$1;
(statearr_54733_54771[(2)] = inst_54710);

(statearr_54733_54771[(1)] = (5));


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
var statearr_54734 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54734[(0)] = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__);

(statearr_54734[(1)] = (1));

return statearr_54734;
});
var goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1 = (function (state_54714){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_54714);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e54735){var ex__41228__auto__ = e54735;
var statearr_54736_54772 = state_54714;
(statearr_54736_54772[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_54714[(4)]))){
var statearr_54737_54773 = state_54714;
(statearr_54737_54773[(1)] = cljs.core.first((state_54714[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54774 = state_54714;
state_54714 = G__54774;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__ = function(state_54714){
switch(arguments.length){
case 0:
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1.call(this,state_54714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____0;
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1;
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_54738 = f__41248__auto__();
(statearr_54738[(6)] = c__41247__auto__);

return statearr_54738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("goldly","cljs-sci-reload","goldly/cljs-sci-reload",784118632),(function (cofx,p__54739){
var vec__54740 = p__54739;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54740,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54740,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,97,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs-sci-reload received: %s",new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(result)], null);
}),null)),null,(124),null);

goldly.cljs.loader.compile_cljs(result);

goldly.cljs.reload.reload_cljs();

return null;
}));

//# sourceMappingURL=goldly.cljs.loader.js.map
