goog.provide('goldly.cljs.loader');
goldly.cljs.loader.compile_cljs_p = (function goldly$cljs$loader$compile_cljs_p(p__54587){
var map__54588 = p__54587;
var map__54588__$1 = cljs.core.__destructure_map(map__54588);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54588__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54588__$1,new cljs.core.Keyword(null,"code","code",1586293142));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compiling-async: ",filename], null);
}),null)),null,(109),null);

var er_p = goldly.sci.kernel_cljs.compile_code_async(code);
return er_p.catch((function (e){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.cljs.loader",null,26,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["eval failed: ",e], null);
}),null)),null,(110),null);

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
}),null)),null,(111),null);

if(cljs.core.truth_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [er], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,33,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs eval result:",er], null);
}),null)),null,(112),null);

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
}),null)),null,(113),null);

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
}),null)),null,(114),null);

var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_54621){
var state_val_54622 = (state_54621[(1)]);
if((state_val_54622 === (7))){
var state_54621__$1 = state_54621;
var statearr_54623_54717 = state_54621__$1;
(statearr_54623_54717[(2)] = null);

(statearr_54623_54717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54622 === (1))){
var state_54621__$1 = state_54621;
if(cljs.core.truth_(static_QMARK_)){
var statearr_54624_54718 = state_54621__$1;
(statearr_54624_54718[(1)] = (3));

} else {
var statearr_54625_54719 = state_54621__$1;
(statearr_54625_54719[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54622 === (4))){
var inst_54593 = [new cljs.core.Keyword(null,"fun","fun",-1265158045),new cljs.core.Keyword(null,"args","args",1315556576)];
var inst_54594 = new cljs.core.Symbol("goldly.cljs.loader","load-file-or-res!","goldly.cljs.loader/load-file-or-res!",823763230,null);
var inst_54595 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54596 = [filename];
var inst_54597 = (new cljs.core.PersistentVector(null,1,(5),inst_54595,inst_54596,null));
var inst_54598 = [inst_54594,inst_54597];
var inst_54599 = cljs.core.PersistentHashMap.fromArrays(inst_54593,inst_54598);
var inst_54600 = goldly.service.core.run(inst_54599);
var state_54621__$1 = state_54621;
var statearr_54626_54720 = state_54621__$1;
(statearr_54626_54720[(2)] = inst_54600);

(statearr_54626_54720[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54622 === (6))){
var inst_54606 = (state_54621[(7)]);
var inst_54605 = (state_54621[(8)]);
var inst_54609 = (inst_54606.cljs$core$IFn$_invoke$arity$2 ? inst_54606.cljs$core$IFn$_invoke$arity$2("error loading cljs: ",inst_54605) : inst_54606.call(null,"error loading cljs: ",inst_54605));
var state_54621__$1 = state_54621;
var statearr_54627_54721 = state_54621__$1;
(statearr_54627_54721[(2)] = inst_54609);

(statearr_54627_54721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54622 === (3))){
var inst_54591 = goldly.static$.get_code(filename);
var state_54621__$1 = state_54621;
var statearr_54628_54722 = state_54621__$1;
(statearr_54628_54722[(2)] = inst_54591);

(statearr_54628_54722[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54622 === (12))){
var inst_54616 = (state_54621[(2)]);
var state_54621__$1 = state_54621;
var statearr_54629_54723 = state_54621__$1;
(statearr_54629_54723[(2)] = inst_54616);

(statearr_54629_54723[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54622 === (2))){
var inst_54605 = (state_54621[(8)]);
var inst_54606 = (state_54621[(7)]);
var inst_54604 = (state_54621[(2)]);
var inst_54605__$1 = cljs.core.__destructure_map(inst_54604);
var inst_54606__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54605__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_54607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54605__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var state_54621__$1 = (function (){var statearr_54630 = state_54621;
(statearr_54630[(8)] = inst_54605__$1);

(statearr_54630[(7)] = inst_54606__$1);

(statearr_54630[(9)] = inst_54607);

return statearr_54630;
})();
if(cljs.core.truth_(inst_54606__$1)){
var statearr_54631_54724 = state_54621__$1;
(statearr_54631_54724[(1)] = (6));

} else {
var statearr_54632_54725 = state_54621__$1;
(statearr_54632_54725[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54622 === (11))){
var inst_54619 = (state_54621[(2)]);
var state_54621__$1 = state_54621;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54621__$1,inst_54619);
} else {
if((state_val_54622 === (9))){
var inst_54607 = (state_54621[(9)]);
var inst_54614 = goldly.cljs.loader.compile_cljs(inst_54607);
var state_54621__$1 = state_54621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54621__$1,(12),inst_54614);
} else {
if((state_val_54622 === (5))){
var inst_54602 = (state_54621[(2)]);
var state_54621__$1 = state_54621;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54621__$1,(2),inst_54602);
} else {
if((state_val_54622 === (10))){
var state_54621__$1 = state_54621;
var statearr_54633_54726 = state_54621__$1;
(statearr_54633_54726[(2)] = null);

(statearr_54633_54726[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54622 === (8))){
var inst_54607 = (state_54621[(9)]);
var inst_54612 = (state_54621[(2)]);
var state_54621__$1 = (function (){var statearr_54634 = state_54621;
(statearr_54634[(10)] = inst_54612);

return statearr_54634;
})();
if(cljs.core.truth_(inst_54607)){
var statearr_54635_54727 = state_54621__$1;
(statearr_54635_54727[(1)] = (9));

} else {
var statearr_54636_54728 = state_54621__$1;
(statearr_54636_54728[(1)] = (10));

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
var statearr_54637 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54637[(0)] = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__);

(statearr_54637[(1)] = (1));

return statearr_54637;
});
var goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1 = (function (state_54621){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_54621);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e54638){var ex__41228__auto__ = e54638;
var statearr_54639_54729 = state_54621;
(statearr_54639_54729[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_54621[(4)]))){
var statearr_54640_54730 = state_54621;
(statearr_54640_54730[(1)] = cljs.core.first((state_54621[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54731 = state_54621;
state_54621 = G__54731;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__ = function(state_54621){
switch(arguments.length){
case 0:
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1.call(this,state_54621);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____0;
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1;
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_54641 = f__41248__auto__();
(statearr_54641[(6)] = c__41247__auto__);

return statearr_54641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
});
goldly.cljs.loader.load_cljs = (function goldly$cljs$loader$load_cljs(static_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,67,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-cljs static?: ",static_QMARK_], null);
}),null)),null,(115),null);

var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_54688){
var state_val_54689 = (state_54688[(1)]);
if((state_val_54689 === (7))){
var inst_54646 = (state_54688[(7)]);
var inst_54647 = (state_54688[(8)]);
var inst_54648 = (state_54688[(9)]);
var inst_54659 = (function (){var map__54642 = inst_54646;
var result = inst_54647;
var error = inst_54648;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["autoload sci-cljs files: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0))], null);
});
})();
var inst_54660 = (new cljs.core.Delay(inst_54659,null));
var inst_54661 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,75,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54660,null,(117),null);
var inst_54662 = cljs.core.first(inst_54647);
var inst_54663 = cljs.core.rest(inst_54647);
var inst_54664 = inst_54662;
var inst_54665 = inst_54663;
var state_54688__$1 = (function (){var statearr_54690 = state_54688;
(statearr_54690[(10)] = inst_54661);

(statearr_54690[(11)] = inst_54664);

(statearr_54690[(12)] = inst_54665);

return statearr_54690;
})();
var statearr_54691_54732 = state_54688__$1;
(statearr_54691_54732[(2)] = null);

(statearr_54691_54732[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54689 === (1))){
var inst_54643 = goldly.cljs.loader.explore(static_QMARK_);
var state_54688__$1 = state_54688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54688__$1,(2),inst_54643);
} else {
if((state_val_54689 === (4))){
var inst_54647 = (state_54688[(8)]);
var inst_54653 = cljs.core.empty_QMARK_(inst_54647);
var state_54688__$1 = state_54688;
if(inst_54653){
var statearr_54692_54733 = state_54688__$1;
(statearr_54692_54733[(1)] = (6));

} else {
var statearr_54693_54734 = state_54688__$1;
(statearr_54693_54734[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54689 === (13))){
var state_54688__$1 = state_54688;
var statearr_54694_54735 = state_54688__$1;
(statearr_54694_54735[(2)] = null);

(statearr_54694_54735[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54689 === (6))){
var inst_54646 = (state_54688[(7)]);
var inst_54647 = (state_54688[(8)]);
var inst_54648 = (state_54688[(9)]);
var inst_54655 = (function (){var map__54642 = inst_54646;
var result = inst_54647;
var error = inst_54648;
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no autoload cljs files available!"], null);
});
})();
var inst_54656 = (new cljs.core.Delay(inst_54655,null));
var inst_54657 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"goldly.cljs.loader",null,73,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54656,null,(116),null);
var state_54688__$1 = state_54688;
var statearr_54695_54736 = state_54688__$1;
(statearr_54695_54736[(2)] = inst_54657);

(statearr_54695_54736[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54689 === (3))){
var inst_54648 = (state_54688[(9)]);
var inst_54650 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54648], 0));
var inst_54651 = (inst_54648.cljs$core$IFn$_invoke$arity$2 ? inst_54648.cljs$core$IFn$_invoke$arity$2("error getting cljs files: ",inst_54650) : inst_54648.call(null,"error getting cljs files: ",inst_54650));
var state_54688__$1 = state_54688;
var statearr_54696_54737 = state_54688__$1;
(statearr_54696_54737[(2)] = inst_54651);

(statearr_54696_54737[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54689 === (12))){
var inst_54665 = (state_54688[(12)]);
var inst_54675 = cljs.core.first(inst_54665);
var inst_54676 = cljs.core.rest(inst_54665);
var inst_54664 = inst_54675;
var inst_54665__$1 = inst_54676;
var state_54688__$1 = (function (){var statearr_54697 = state_54688;
(statearr_54697[(11)] = inst_54664);

(statearr_54697[(12)] = inst_54665__$1);

return statearr_54697;
})();
var statearr_54698_54738 = state_54688__$1;
(statearr_54698_54738[(2)] = null);

(statearr_54698_54738[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54689 === (2))){
var inst_54646 = (state_54688[(7)]);
var inst_54648 = (state_54688[(9)]);
var inst_54645 = (state_54688[(2)]);
var inst_54646__$1 = cljs.core.__destructure_map(inst_54645);
var inst_54647 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54646__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_54648__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54646__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var state_54688__$1 = (function (){var statearr_54699 = state_54688;
(statearr_54699[(7)] = inst_54646__$1);

(statearr_54699[(8)] = inst_54647);

(statearr_54699[(9)] = inst_54648__$1);

return statearr_54699;
})();
if(cljs.core.truth_(inst_54648__$1)){
var statearr_54700_54739 = state_54688__$1;
(statearr_54700_54739[(1)] = (3));

} else {
var statearr_54701_54740 = state_54688__$1;
(statearr_54701_54740[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54689 === (11))){
var inst_54646 = (state_54688[(7)]);
var inst_54647 = (state_54688[(8)]);
var inst_54648 = (state_54688[(9)]);
var inst_54664 = (state_54688[(11)]);
var inst_54665 = (state_54688[(12)]);
var inst_54669 = (state_54688[(2)]);
var inst_54670 = (function (){var map__54642 = inst_54646;
var result = inst_54647;
var error = inst_54648;
var f = inst_54664;
var files = inst_54665;
var r = inst_54669;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compile result: ",r], null);
});
})();
var inst_54671 = (new cljs.core.Delay(inst_54670,null));
var inst_54672 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,79,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54671,null,(118),null);
var inst_54673 = cljs.core.seq(inst_54665);
var state_54688__$1 = (function (){var statearr_54702 = state_54688;
(statearr_54702[(13)] = inst_54672);

return statearr_54702;
})();
if(inst_54673){
var statearr_54703_54741 = state_54688__$1;
(statearr_54703_54741[(1)] = (12));

} else {
var statearr_54704_54742 = state_54688__$1;
(statearr_54704_54742[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54689 === (9))){
var inst_54664 = (state_54688[(11)]);
var inst_54667 = goldly.cljs.loader.load_cljs_file(static_QMARK_,inst_54664);
var state_54688__$1 = state_54688;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54688__$1,(11),inst_54667);
} else {
if((state_val_54689 === (5))){
var inst_54686 = (state_54688[(2)]);
var state_54688__$1 = state_54688;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54688__$1,inst_54686);
} else {
if((state_val_54689 === (14))){
var inst_54680 = (state_54688[(2)]);
var state_54688__$1 = state_54688;
var statearr_54705_54743 = state_54688__$1;
(statearr_54705_54743[(2)] = inst_54680);

(statearr_54705_54743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54689 === (10))){
var inst_54682 = (state_54688[(2)]);
var state_54688__$1 = state_54688;
var statearr_54706_54744 = state_54688__$1;
(statearr_54706_54744[(2)] = inst_54682);

(statearr_54706_54744[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54689 === (8))){
var inst_54684 = (state_54688[(2)]);
var state_54688__$1 = state_54688;
var statearr_54707_54745 = state_54688__$1;
(statearr_54707_54745[(2)] = inst_54684);

(statearr_54707_54745[(1)] = (5));


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
var statearr_54708 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54708[(0)] = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__);

(statearr_54708[(1)] = (1));

return statearr_54708;
});
var goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1 = (function (state_54688){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_54688);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e54709){var ex__41228__auto__ = e54709;
var statearr_54710_54746 = state_54688;
(statearr_54710_54746[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_54688[(4)]))){
var statearr_54711_54747 = state_54688;
(statearr_54711_54747[(1)] = cljs.core.first((state_54688[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54748 = state_54688;
state_54688 = G__54748;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__ = function(state_54688){
switch(arguments.length){
case 0:
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1.call(this,state_54688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____0;
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1;
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_54712 = f__41248__auto__();
(statearr_54712[(6)] = c__41247__auto__);

return statearr_54712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("goldly","cljs-sci-reload","goldly/cljs-sci-reload",784118632),(function (cofx,p__54713){
var vec__54714 = p__54713;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54714,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54714,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,97,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs-sci-reload received: %s",new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(result)], null);
}),null)),null,(119),null);

goldly.cljs.loader.compile_cljs(result);

goldly.cljs.reload.reload_cljs();

return null;
}));

//# sourceMappingURL=goldly.cljs.loader.js.map
