goog.provide('goldly.cljs.loader');
goldly.cljs.loader.compile_cljs_p = (function goldly$cljs$loader$compile_cljs_p(p__54652){
var map__54653 = p__54652;
var map__54653__$1 = cljs.core.__destructure_map(map__54653);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54653__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54653__$1,new cljs.core.Keyword(null,"code","code",1586293142));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compiling-async: ",filename], null);
}),null)),null,(135),null);

var er_p = goldly.sci.kernel_cljs.compile_code_async(code);
return er_p.catch((function (e){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.cljs.loader",null,26,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["eval failed: ",e], null);
}),null)),null,(136),null);

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
}),null)),null,(137),null);

if(cljs.core.truth_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [er], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,33,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs eval result:",er], null);
}),null)),null,(138),null);

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
}),null)),null,(139),null);

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
}),null)),null,(140),null);

var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_54686){
var state_val_54687 = (state_54686[(1)]);
if((state_val_54687 === (7))){
var state_54686__$1 = state_54686;
var statearr_54688_54782 = state_54686__$1;
(statearr_54688_54782[(2)] = null);

(statearr_54688_54782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54687 === (1))){
var state_54686__$1 = state_54686;
if(cljs.core.truth_(static_QMARK_)){
var statearr_54689_54783 = state_54686__$1;
(statearr_54689_54783[(1)] = (3));

} else {
var statearr_54690_54784 = state_54686__$1;
(statearr_54690_54784[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54687 === (4))){
var inst_54658 = [new cljs.core.Keyword(null,"fun","fun",-1265158045),new cljs.core.Keyword(null,"args","args",1315556576)];
var inst_54659 = new cljs.core.Symbol("goldly.cljs.loader","load-file-or-res!","goldly.cljs.loader/load-file-or-res!",823763230,null);
var inst_54660 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54661 = [filename];
var inst_54662 = (new cljs.core.PersistentVector(null,1,(5),inst_54660,inst_54661,null));
var inst_54663 = [inst_54659,inst_54662];
var inst_54664 = cljs.core.PersistentHashMap.fromArrays(inst_54658,inst_54663);
var inst_54665 = goldly.service.core.run(inst_54664);
var state_54686__$1 = state_54686;
var statearr_54691_54785 = state_54686__$1;
(statearr_54691_54785[(2)] = inst_54665);

(statearr_54691_54785[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54687 === (6))){
var inst_54671 = (state_54686[(7)]);
var inst_54670 = (state_54686[(8)]);
var inst_54674 = (inst_54671.cljs$core$IFn$_invoke$arity$2 ? inst_54671.cljs$core$IFn$_invoke$arity$2("error loading cljs: ",inst_54670) : inst_54671.call(null,"error loading cljs: ",inst_54670));
var state_54686__$1 = state_54686;
var statearr_54692_54786 = state_54686__$1;
(statearr_54692_54786[(2)] = inst_54674);

(statearr_54692_54786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54687 === (3))){
var inst_54656 = goldly.offline.old.get_code(filename);
var state_54686__$1 = state_54686;
var statearr_54693_54787 = state_54686__$1;
(statearr_54693_54787[(2)] = inst_54656);

(statearr_54693_54787[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54687 === (12))){
var inst_54681 = (state_54686[(2)]);
var state_54686__$1 = state_54686;
var statearr_54694_54788 = state_54686__$1;
(statearr_54694_54788[(2)] = inst_54681);

(statearr_54694_54788[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54687 === (2))){
var inst_54670 = (state_54686[(8)]);
var inst_54671 = (state_54686[(7)]);
var inst_54669 = (state_54686[(2)]);
var inst_54670__$1 = cljs.core.__destructure_map(inst_54669);
var inst_54671__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54670__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_54672 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54670__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var state_54686__$1 = (function (){var statearr_54695 = state_54686;
(statearr_54695[(8)] = inst_54670__$1);

(statearr_54695[(7)] = inst_54671__$1);

(statearr_54695[(9)] = inst_54672);

return statearr_54695;
})();
if(cljs.core.truth_(inst_54671__$1)){
var statearr_54696_54789 = state_54686__$1;
(statearr_54696_54789[(1)] = (6));

} else {
var statearr_54697_54790 = state_54686__$1;
(statearr_54697_54790[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54687 === (11))){
var inst_54684 = (state_54686[(2)]);
var state_54686__$1 = state_54686;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54686__$1,inst_54684);
} else {
if((state_val_54687 === (9))){
var inst_54672 = (state_54686[(9)]);
var inst_54679 = goldly.cljs.loader.compile_cljs(inst_54672);
var state_54686__$1 = state_54686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54686__$1,(12),inst_54679);
} else {
if((state_val_54687 === (5))){
var inst_54667 = (state_54686[(2)]);
var state_54686__$1 = state_54686;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54686__$1,(2),inst_54667);
} else {
if((state_val_54687 === (10))){
var state_54686__$1 = state_54686;
var statearr_54698_54791 = state_54686__$1;
(statearr_54698_54791[(2)] = null);

(statearr_54698_54791[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54687 === (8))){
var inst_54672 = (state_54686[(9)]);
var inst_54677 = (state_54686[(2)]);
var state_54686__$1 = (function (){var statearr_54699 = state_54686;
(statearr_54699[(10)] = inst_54677);

return statearr_54699;
})();
if(cljs.core.truth_(inst_54672)){
var statearr_54700_54792 = state_54686__$1;
(statearr_54700_54792[(1)] = (9));

} else {
var statearr_54701_54793 = state_54686__$1;
(statearr_54701_54793[(1)] = (10));

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
var statearr_54702 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54702[(0)] = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__);

(statearr_54702[(1)] = (1));

return statearr_54702;
});
var goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1 = (function (state_54686){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_54686);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e54703){var ex__41228__auto__ = e54703;
var statearr_54704_54794 = state_54686;
(statearr_54704_54794[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_54686[(4)]))){
var statearr_54705_54795 = state_54686;
(statearr_54705_54795[(1)] = cljs.core.first((state_54686[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54796 = state_54686;
state_54686 = G__54796;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__ = function(state_54686){
switch(arguments.length){
case 0:
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1.call(this,state_54686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____0;
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1;
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_54706 = f__41248__auto__();
(statearr_54706[(6)] = c__41247__auto__);

return statearr_54706;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
});
goldly.cljs.loader.load_cljs = (function goldly$cljs$loader$load_cljs(static_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,67,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-cljs static?: ",static_QMARK_], null);
}),null)),null,(141),null);

var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_54753){
var state_val_54754 = (state_54753[(1)]);
if((state_val_54754 === (7))){
var inst_54711 = (state_54753[(7)]);
var inst_54712 = (state_54753[(8)]);
var inst_54713 = (state_54753[(9)]);
var inst_54724 = (function (){var map__54707 = inst_54711;
var result = inst_54712;
var error = inst_54713;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["autoload sci-cljs files: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0))], null);
});
})();
var inst_54725 = (new cljs.core.Delay(inst_54724,null));
var inst_54726 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,75,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54725,null,(143),null);
var inst_54727 = cljs.core.first(inst_54712);
var inst_54728 = cljs.core.rest(inst_54712);
var inst_54729 = inst_54727;
var inst_54730 = inst_54728;
var state_54753__$1 = (function (){var statearr_54755 = state_54753;
(statearr_54755[(10)] = inst_54726);

(statearr_54755[(11)] = inst_54729);

(statearr_54755[(12)] = inst_54730);

return statearr_54755;
})();
var statearr_54756_54797 = state_54753__$1;
(statearr_54756_54797[(2)] = null);

(statearr_54756_54797[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (1))){
var inst_54708 = goldly.cljs.loader.explore(static_QMARK_);
var state_54753__$1 = state_54753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54753__$1,(2),inst_54708);
} else {
if((state_val_54754 === (4))){
var inst_54712 = (state_54753[(8)]);
var inst_54718 = cljs.core.empty_QMARK_(inst_54712);
var state_54753__$1 = state_54753;
if(inst_54718){
var statearr_54757_54798 = state_54753__$1;
(statearr_54757_54798[(1)] = (6));

} else {
var statearr_54758_54799 = state_54753__$1;
(statearr_54758_54799[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (13))){
var state_54753__$1 = state_54753;
var statearr_54759_54800 = state_54753__$1;
(statearr_54759_54800[(2)] = null);

(statearr_54759_54800[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (6))){
var inst_54711 = (state_54753[(7)]);
var inst_54712 = (state_54753[(8)]);
var inst_54713 = (state_54753[(9)]);
var inst_54720 = (function (){var map__54707 = inst_54711;
var result = inst_54712;
var error = inst_54713;
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no autoload cljs files available!"], null);
});
})();
var inst_54721 = (new cljs.core.Delay(inst_54720,null));
var inst_54722 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"goldly.cljs.loader",null,73,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54721,null,(142),null);
var state_54753__$1 = state_54753;
var statearr_54760_54801 = state_54753__$1;
(statearr_54760_54801[(2)] = inst_54722);

(statearr_54760_54801[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (3))){
var inst_54713 = (state_54753[(9)]);
var inst_54715 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54713], 0));
var inst_54716 = (inst_54713.cljs$core$IFn$_invoke$arity$2 ? inst_54713.cljs$core$IFn$_invoke$arity$2("error getting cljs files: ",inst_54715) : inst_54713.call(null,"error getting cljs files: ",inst_54715));
var state_54753__$1 = state_54753;
var statearr_54761_54802 = state_54753__$1;
(statearr_54761_54802[(2)] = inst_54716);

(statearr_54761_54802[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (12))){
var inst_54730 = (state_54753[(12)]);
var inst_54740 = cljs.core.first(inst_54730);
var inst_54741 = cljs.core.rest(inst_54730);
var inst_54729 = inst_54740;
var inst_54730__$1 = inst_54741;
var state_54753__$1 = (function (){var statearr_54762 = state_54753;
(statearr_54762[(11)] = inst_54729);

(statearr_54762[(12)] = inst_54730__$1);

return statearr_54762;
})();
var statearr_54763_54803 = state_54753__$1;
(statearr_54763_54803[(2)] = null);

(statearr_54763_54803[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (2))){
var inst_54711 = (state_54753[(7)]);
var inst_54713 = (state_54753[(9)]);
var inst_54710 = (state_54753[(2)]);
var inst_54711__$1 = cljs.core.__destructure_map(inst_54710);
var inst_54712 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54711__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_54713__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54711__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var state_54753__$1 = (function (){var statearr_54764 = state_54753;
(statearr_54764[(7)] = inst_54711__$1);

(statearr_54764[(8)] = inst_54712);

(statearr_54764[(9)] = inst_54713__$1);

return statearr_54764;
})();
if(cljs.core.truth_(inst_54713__$1)){
var statearr_54765_54804 = state_54753__$1;
(statearr_54765_54804[(1)] = (3));

} else {
var statearr_54766_54805 = state_54753__$1;
(statearr_54766_54805[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (11))){
var inst_54711 = (state_54753[(7)]);
var inst_54712 = (state_54753[(8)]);
var inst_54713 = (state_54753[(9)]);
var inst_54729 = (state_54753[(11)]);
var inst_54730 = (state_54753[(12)]);
var inst_54734 = (state_54753[(2)]);
var inst_54735 = (function (){var map__54707 = inst_54711;
var result = inst_54712;
var error = inst_54713;
var f = inst_54729;
var files = inst_54730;
var r = inst_54734;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compile result: ",r], null);
});
})();
var inst_54736 = (new cljs.core.Delay(inst_54735,null));
var inst_54737 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,79,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54736,null,(144),null);
var inst_54738 = cljs.core.seq(inst_54730);
var state_54753__$1 = (function (){var statearr_54767 = state_54753;
(statearr_54767[(13)] = inst_54737);

return statearr_54767;
})();
if(inst_54738){
var statearr_54768_54806 = state_54753__$1;
(statearr_54768_54806[(1)] = (12));

} else {
var statearr_54769_54807 = state_54753__$1;
(statearr_54769_54807[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (9))){
var inst_54729 = (state_54753[(11)]);
var inst_54732 = goldly.cljs.loader.load_cljs_file(static_QMARK_,inst_54729);
var state_54753__$1 = state_54753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54753__$1,(11),inst_54732);
} else {
if((state_val_54754 === (5))){
var inst_54751 = (state_54753[(2)]);
var state_54753__$1 = state_54753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54753__$1,inst_54751);
} else {
if((state_val_54754 === (14))){
var inst_54745 = (state_54753[(2)]);
var state_54753__$1 = state_54753;
var statearr_54770_54808 = state_54753__$1;
(statearr_54770_54808[(2)] = inst_54745);

(statearr_54770_54808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (10))){
var inst_54747 = (state_54753[(2)]);
var state_54753__$1 = state_54753;
var statearr_54771_54809 = state_54753__$1;
(statearr_54771_54809[(2)] = inst_54747);

(statearr_54771_54809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54754 === (8))){
var inst_54749 = (state_54753[(2)]);
var state_54753__$1 = state_54753;
var statearr_54772_54810 = state_54753__$1;
(statearr_54772_54810[(2)] = inst_54749);

(statearr_54772_54810[(1)] = (5));


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
var statearr_54773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54773[(0)] = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__);

(statearr_54773[(1)] = (1));

return statearr_54773;
});
var goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1 = (function (state_54753){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_54753);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e54774){var ex__41228__auto__ = e54774;
var statearr_54775_54811 = state_54753;
(statearr_54775_54811[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_54753[(4)]))){
var statearr_54776_54812 = state_54753;
(statearr_54776_54812[(1)] = cljs.core.first((state_54753[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54813 = state_54753;
state_54753 = G__54813;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__ = function(state_54753){
switch(arguments.length){
case 0:
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1.call(this,state_54753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____0;
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1;
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_54777 = f__41248__auto__();
(statearr_54777[(6)] = c__41247__auto__);

return statearr_54777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("goldly","cljs-sci-reload","goldly/cljs-sci-reload",784118632),(function (cofx,p__54778){
var vec__54779 = p__54778;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54779,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54779,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,97,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs-sci-reload received: %s",new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(result)], null);
}),null)),null,(145),null);

goldly.cljs.loader.compile_cljs(result);

goldly.cljs.reload.reload_cljs();

return null;
}));

//# sourceMappingURL=goldly.cljs.loader.js.map
