goog.provide('goldly.cljs.loader');
goldly.cljs.loader.compile_cljs_p = (function goldly$cljs$loader$compile_cljs_p(p__54638){
var map__54639 = p__54638;
var map__54639__$1 = cljs.core.__destructure_map(map__54639);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54639__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54639__$1,new cljs.core.Keyword(null,"code","code",1586293142));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compiling-async: ",filename], null);
}),null)),null,(102),null);

var er_p = goldly.sci.kernel_cljs.compile_code_async(code);
return er_p.catch((function (e){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.cljs.loader",null,26,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["eval failed: ",e], null);
}),null)),null,(103),null);

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
}),null)),null,(104),null);

if(cljs.core.truth_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [er], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,33,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs eval result:",er], null);
}),null)),null,(105),null);

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
}),null)),null,(106),null);

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
}),null)),null,(107),null);

var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_54672){
var state_val_54673 = (state_54672[(1)]);
if((state_val_54673 === (7))){
var state_54672__$1 = state_54672;
var statearr_54674_54768 = state_54672__$1;
(statearr_54674_54768[(2)] = null);

(statearr_54674_54768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54673 === (1))){
var state_54672__$1 = state_54672;
if(cljs.core.truth_(static_QMARK_)){
var statearr_54675_54769 = state_54672__$1;
(statearr_54675_54769[(1)] = (3));

} else {
var statearr_54676_54770 = state_54672__$1;
(statearr_54676_54770[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54673 === (4))){
var inst_54644 = [new cljs.core.Keyword(null,"fun","fun",-1265158045),new cljs.core.Keyword(null,"args","args",1315556576)];
var inst_54645 = new cljs.core.Symbol("goldly.cljs.loader","load-file-or-res!","goldly.cljs.loader/load-file-or-res!",823763230,null);
var inst_54646 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54647 = [filename];
var inst_54648 = (new cljs.core.PersistentVector(null,1,(5),inst_54646,inst_54647,null));
var inst_54649 = [inst_54645,inst_54648];
var inst_54650 = cljs.core.PersistentHashMap.fromArrays(inst_54644,inst_54649);
var inst_54651 = goldly.service.core.run(inst_54650);
var state_54672__$1 = state_54672;
var statearr_54677_54771 = state_54672__$1;
(statearr_54677_54771[(2)] = inst_54651);

(statearr_54677_54771[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54673 === (6))){
var inst_54657 = (state_54672[(7)]);
var inst_54656 = (state_54672[(8)]);
var inst_54660 = (inst_54657.cljs$core$IFn$_invoke$arity$2 ? inst_54657.cljs$core$IFn$_invoke$arity$2("error loading cljs: ",inst_54656) : inst_54657.call(null,"error loading cljs: ",inst_54656));
var state_54672__$1 = state_54672;
var statearr_54678_54772 = state_54672__$1;
(statearr_54678_54772[(2)] = inst_54660);

(statearr_54678_54772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54673 === (3))){
var inst_54642 = goldly.static$.get_code(filename);
var state_54672__$1 = state_54672;
var statearr_54679_54773 = state_54672__$1;
(statearr_54679_54773[(2)] = inst_54642);

(statearr_54679_54773[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54673 === (12))){
var inst_54667 = (state_54672[(2)]);
var state_54672__$1 = state_54672;
var statearr_54680_54774 = state_54672__$1;
(statearr_54680_54774[(2)] = inst_54667);

(statearr_54680_54774[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54673 === (2))){
var inst_54656 = (state_54672[(8)]);
var inst_54657 = (state_54672[(7)]);
var inst_54655 = (state_54672[(2)]);
var inst_54656__$1 = cljs.core.__destructure_map(inst_54655);
var inst_54657__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54656__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_54658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54656__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var state_54672__$1 = (function (){var statearr_54681 = state_54672;
(statearr_54681[(8)] = inst_54656__$1);

(statearr_54681[(7)] = inst_54657__$1);

(statearr_54681[(9)] = inst_54658);

return statearr_54681;
})();
if(cljs.core.truth_(inst_54657__$1)){
var statearr_54682_54775 = state_54672__$1;
(statearr_54682_54775[(1)] = (6));

} else {
var statearr_54683_54776 = state_54672__$1;
(statearr_54683_54776[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54673 === (11))){
var inst_54670 = (state_54672[(2)]);
var state_54672__$1 = state_54672;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54672__$1,inst_54670);
} else {
if((state_val_54673 === (9))){
var inst_54658 = (state_54672[(9)]);
var inst_54665 = goldly.cljs.loader.compile_cljs(inst_54658);
var state_54672__$1 = state_54672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54672__$1,(12),inst_54665);
} else {
if((state_val_54673 === (5))){
var inst_54653 = (state_54672[(2)]);
var state_54672__$1 = state_54672;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54672__$1,(2),inst_54653);
} else {
if((state_val_54673 === (10))){
var state_54672__$1 = state_54672;
var statearr_54684_54777 = state_54672__$1;
(statearr_54684_54777[(2)] = null);

(statearr_54684_54777[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54673 === (8))){
var inst_54658 = (state_54672[(9)]);
var inst_54663 = (state_54672[(2)]);
var state_54672__$1 = (function (){var statearr_54685 = state_54672;
(statearr_54685[(10)] = inst_54663);

return statearr_54685;
})();
if(cljs.core.truth_(inst_54658)){
var statearr_54686_54778 = state_54672__$1;
(statearr_54686_54778[(1)] = (9));

} else {
var statearr_54687_54779 = state_54672__$1;
(statearr_54687_54779[(1)] = (10));

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
var statearr_54688 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54688[(0)] = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__);

(statearr_54688[(1)] = (1));

return statearr_54688;
});
var goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1 = (function (state_54672){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_54672);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e54689){var ex__41228__auto__ = e54689;
var statearr_54690_54780 = state_54672;
(statearr_54690_54780[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_54672[(4)]))){
var statearr_54691_54781 = state_54672;
(statearr_54691_54781[(1)] = cljs.core.first((state_54672[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54782 = state_54672;
state_54672 = G__54782;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__ = function(state_54672){
switch(arguments.length){
case 0:
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1.call(this,state_54672);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____0;
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1;
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_54692 = f__41248__auto__();
(statearr_54692[(6)] = c__41247__auto__);

return statearr_54692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
});
goldly.cljs.loader.load_cljs = (function goldly$cljs$loader$load_cljs(static_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,67,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-cljs static?: ",static_QMARK_], null);
}),null)),null,(108),null);

var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_54739){
var state_val_54740 = (state_54739[(1)]);
if((state_val_54740 === (7))){
var inst_54697 = (state_54739[(7)]);
var inst_54698 = (state_54739[(8)]);
var inst_54699 = (state_54739[(9)]);
var inst_54710 = (function (){var map__54693 = inst_54697;
var result = inst_54698;
var error = inst_54699;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["autoload sci-cljs files: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0))], null);
});
})();
var inst_54711 = (new cljs.core.Delay(inst_54710,null));
var inst_54712 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,75,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54711,null,(110),null);
var inst_54713 = cljs.core.first(inst_54698);
var inst_54714 = cljs.core.rest(inst_54698);
var inst_54715 = inst_54713;
var inst_54716 = inst_54714;
var state_54739__$1 = (function (){var statearr_54741 = state_54739;
(statearr_54741[(10)] = inst_54712);

(statearr_54741[(11)] = inst_54715);

(statearr_54741[(12)] = inst_54716);

return statearr_54741;
})();
var statearr_54742_54783 = state_54739__$1;
(statearr_54742_54783[(2)] = null);

(statearr_54742_54783[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54740 === (1))){
var inst_54694 = goldly.cljs.loader.explore(static_QMARK_);
var state_54739__$1 = state_54739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54739__$1,(2),inst_54694);
} else {
if((state_val_54740 === (4))){
var inst_54698 = (state_54739[(8)]);
var inst_54704 = cljs.core.empty_QMARK_(inst_54698);
var state_54739__$1 = state_54739;
if(inst_54704){
var statearr_54743_54784 = state_54739__$1;
(statearr_54743_54784[(1)] = (6));

} else {
var statearr_54744_54785 = state_54739__$1;
(statearr_54744_54785[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54740 === (13))){
var state_54739__$1 = state_54739;
var statearr_54745_54786 = state_54739__$1;
(statearr_54745_54786[(2)] = null);

(statearr_54745_54786[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54740 === (6))){
var inst_54697 = (state_54739[(7)]);
var inst_54698 = (state_54739[(8)]);
var inst_54699 = (state_54739[(9)]);
var inst_54706 = (function (){var map__54693 = inst_54697;
var result = inst_54698;
var error = inst_54699;
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no autoload cljs files available!"], null);
});
})();
var inst_54707 = (new cljs.core.Delay(inst_54706,null));
var inst_54708 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"goldly.cljs.loader",null,73,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54707,null,(109),null);
var state_54739__$1 = state_54739;
var statearr_54746_54787 = state_54739__$1;
(statearr_54746_54787[(2)] = inst_54708);

(statearr_54746_54787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54740 === (3))){
var inst_54699 = (state_54739[(9)]);
var inst_54701 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54699], 0));
var inst_54702 = (inst_54699.cljs$core$IFn$_invoke$arity$2 ? inst_54699.cljs$core$IFn$_invoke$arity$2("error getting cljs files: ",inst_54701) : inst_54699.call(null,"error getting cljs files: ",inst_54701));
var state_54739__$1 = state_54739;
var statearr_54747_54788 = state_54739__$1;
(statearr_54747_54788[(2)] = inst_54702);

(statearr_54747_54788[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54740 === (12))){
var inst_54716 = (state_54739[(12)]);
var inst_54726 = cljs.core.first(inst_54716);
var inst_54727 = cljs.core.rest(inst_54716);
var inst_54715 = inst_54726;
var inst_54716__$1 = inst_54727;
var state_54739__$1 = (function (){var statearr_54748 = state_54739;
(statearr_54748[(11)] = inst_54715);

(statearr_54748[(12)] = inst_54716__$1);

return statearr_54748;
})();
var statearr_54749_54789 = state_54739__$1;
(statearr_54749_54789[(2)] = null);

(statearr_54749_54789[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54740 === (2))){
var inst_54697 = (state_54739[(7)]);
var inst_54699 = (state_54739[(9)]);
var inst_54696 = (state_54739[(2)]);
var inst_54697__$1 = cljs.core.__destructure_map(inst_54696);
var inst_54698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54697__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_54699__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54697__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var state_54739__$1 = (function (){var statearr_54750 = state_54739;
(statearr_54750[(7)] = inst_54697__$1);

(statearr_54750[(8)] = inst_54698);

(statearr_54750[(9)] = inst_54699__$1);

return statearr_54750;
})();
if(cljs.core.truth_(inst_54699__$1)){
var statearr_54751_54790 = state_54739__$1;
(statearr_54751_54790[(1)] = (3));

} else {
var statearr_54752_54791 = state_54739__$1;
(statearr_54752_54791[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54740 === (11))){
var inst_54697 = (state_54739[(7)]);
var inst_54698 = (state_54739[(8)]);
var inst_54699 = (state_54739[(9)]);
var inst_54715 = (state_54739[(11)]);
var inst_54716 = (state_54739[(12)]);
var inst_54720 = (state_54739[(2)]);
var inst_54721 = (function (){var map__54693 = inst_54697;
var result = inst_54698;
var error = inst_54699;
var f = inst_54715;
var files = inst_54716;
var r = inst_54720;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compile result: ",r], null);
});
})();
var inst_54722 = (new cljs.core.Delay(inst_54721,null));
var inst_54723 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,79,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54722,null,(111),null);
var inst_54724 = cljs.core.seq(inst_54716);
var state_54739__$1 = (function (){var statearr_54753 = state_54739;
(statearr_54753[(13)] = inst_54723);

return statearr_54753;
})();
if(inst_54724){
var statearr_54754_54792 = state_54739__$1;
(statearr_54754_54792[(1)] = (12));

} else {
var statearr_54755_54793 = state_54739__$1;
(statearr_54755_54793[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54740 === (9))){
var inst_54715 = (state_54739[(11)]);
var inst_54718 = goldly.cljs.loader.load_cljs_file(static_QMARK_,inst_54715);
var state_54739__$1 = state_54739;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54739__$1,(11),inst_54718);
} else {
if((state_val_54740 === (5))){
var inst_54737 = (state_54739[(2)]);
var state_54739__$1 = state_54739;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54739__$1,inst_54737);
} else {
if((state_val_54740 === (14))){
var inst_54731 = (state_54739[(2)]);
var state_54739__$1 = state_54739;
var statearr_54756_54794 = state_54739__$1;
(statearr_54756_54794[(2)] = inst_54731);

(statearr_54756_54794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54740 === (10))){
var inst_54733 = (state_54739[(2)]);
var state_54739__$1 = state_54739;
var statearr_54757_54795 = state_54739__$1;
(statearr_54757_54795[(2)] = inst_54733);

(statearr_54757_54795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54740 === (8))){
var inst_54735 = (state_54739[(2)]);
var state_54739__$1 = state_54739;
var statearr_54758_54796 = state_54739__$1;
(statearr_54758_54796[(2)] = inst_54735);

(statearr_54758_54796[(1)] = (5));


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
var statearr_54759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54759[(0)] = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__);

(statearr_54759[(1)] = (1));

return statearr_54759;
});
var goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1 = (function (state_54739){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_54739);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e54760){var ex__41228__auto__ = e54760;
var statearr_54761_54797 = state_54739;
(statearr_54761_54797[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_54739[(4)]))){
var statearr_54762_54798 = state_54739;
(statearr_54762_54798[(1)] = cljs.core.first((state_54739[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54799 = state_54739;
state_54739 = G__54799;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__ = function(state_54739){
switch(arguments.length){
case 0:
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1.call(this,state_54739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____0;
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1;
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_54763 = f__41248__auto__();
(statearr_54763[(6)] = c__41247__auto__);

return statearr_54763;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("goldly","cljs-sci-reload","goldly/cljs-sci-reload",784118632),(function (cofx,p__54764){
var vec__54765 = p__54764;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54765,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54765,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,97,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs-sci-reload received: %s",new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(result)], null);
}),null)),null,(112),null);

goldly.cljs.loader.compile_cljs(result);

goldly.cljs.reload.reload_cljs();

return null;
}));

//# sourceMappingURL=goldly.cljs.loader.js.map
