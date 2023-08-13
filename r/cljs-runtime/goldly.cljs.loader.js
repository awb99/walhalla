goog.provide('goldly.cljs.loader');
goldly.cljs.loader.compile_cljs_p = (function goldly$cljs$loader$compile_cljs_p(p__54655){
var map__54656 = p__54655;
var map__54656__$1 = cljs.core.__destructure_map(map__54656);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54656__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54656__$1,new cljs.core.Keyword(null,"code","code",1586293142));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compiling-async: ",filename], null);
}),null)),null,(136),null);

var er_p = goldly.sci.kernel_cljs.compile_code_async(code);
er_p.catch((function (e){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.cljs.loader",null,25,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compile of ",filename," failed: ",e], null);
}),null)),null,(137),null);

var temp__5804__auto__ = goldly.sci.error.exception__GT_error(e);
if(cljs.core.truth_(temp__5804__auto__)){
var sci_err = temp__5804__auto__;
goldly.sci.error.show_sci_error(filename,sci_err);

return sci_err;
} else {
return null;
}
}));

return er_p.then((function (er){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,30,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["successfully compiled %s ",filename], null);
}),null)),null,(138),null);

if(cljs.core.truth_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [er], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,32,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs eval result:",er], null);
}),null)),null,(139),null);

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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,40,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compile-code promise received:  %s",data], null);
}),null)),null,(140),null);

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
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,52,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["loading cljs file: ",filename], null);
}),null)),null,(142),null);

var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_54695){
var state_val_54696 = (state_54695[(1)]);
if((state_val_54696 === (7))){
var state_54695__$1 = state_54695;
var statearr_54697_54791 = state_54695__$1;
(statearr_54697_54791[(2)] = null);

(statearr_54697_54791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54696 === (1))){
var state_54695__$1 = state_54695;
if(cljs.core.truth_(static_QMARK_)){
var statearr_54698_54792 = state_54695__$1;
(statearr_54698_54792[(1)] = (3));

} else {
var statearr_54699_54793 = state_54695__$1;
(statearr_54699_54793[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54696 === (4))){
var inst_54663 = [new cljs.core.Keyword(null,"fun","fun",-1265158045),new cljs.core.Keyword(null,"args","args",1315556576)];
var inst_54664 = new cljs.core.Symbol("goldly.cljs.loader","load-file-or-res!","goldly.cljs.loader/load-file-or-res!",823763230,null);
var inst_54665 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54666 = [filename];
var inst_54667 = (new cljs.core.PersistentVector(null,1,(5),inst_54665,inst_54666,null));
var inst_54668 = [inst_54664,inst_54667];
var inst_54669 = cljs.core.PersistentHashMap.fromArrays(inst_54663,inst_54668);
var inst_54670 = goldly.service.core.run(inst_54669);
var state_54695__$1 = state_54695;
var statearr_54700_54794 = state_54695__$1;
(statearr_54700_54794[(2)] = inst_54670);

(statearr_54700_54794[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54696 === (6))){
var inst_54677 = (state_54695[(7)]);
var inst_54676 = (state_54695[(8)]);
var inst_54680 = (inst_54677.cljs$core$IFn$_invoke$arity$2 ? inst_54677.cljs$core$IFn$_invoke$arity$2("error loading cljs: ",inst_54676) : inst_54677.call(null,"error loading cljs: ",inst_54676));
var state_54695__$1 = state_54695;
var statearr_54701_54795 = state_54695__$1;
(statearr_54701_54795[(2)] = inst_54680);

(statearr_54701_54795[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54696 === (3))){
var inst_54661 = goldly.offline.old.get_code(filename);
var state_54695__$1 = state_54695;
var statearr_54702_54796 = state_54695__$1;
(statearr_54702_54796[(2)] = inst_54661);

(statearr_54702_54796[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54696 === (12))){
var inst_54690 = (state_54695[(2)]);
var state_54695__$1 = state_54695;
var statearr_54703_54797 = state_54695__$1;
(statearr_54703_54797[(2)] = inst_54690);

(statearr_54703_54797[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54696 === (2))){
var inst_54676 = (state_54695[(8)]);
var inst_54677 = (state_54695[(7)]);
var inst_54675 = (state_54695[(2)]);
var inst_54676__$1 = cljs.core.__destructure_map(inst_54675);
var inst_54677__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54676__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_54678 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54676__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var state_54695__$1 = (function (){var statearr_54704 = state_54695;
(statearr_54704[(8)] = inst_54676__$1);

(statearr_54704[(7)] = inst_54677__$1);

(statearr_54704[(9)] = inst_54678);

return statearr_54704;
})();
if(cljs.core.truth_(inst_54677__$1)){
var statearr_54705_54798 = state_54695__$1;
(statearr_54705_54798[(1)] = (6));

} else {
var statearr_54706_54799 = state_54695__$1;
(statearr_54706_54799[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54696 === (11))){
var inst_54693 = (state_54695[(2)]);
var state_54695__$1 = state_54695;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54695__$1,inst_54693);
} else {
if((state_val_54696 === (9))){
var inst_54678 = (state_54695[(9)]);
var inst_54688 = goldly.cljs.loader.compile_cljs(inst_54678);
var state_54695__$1 = state_54695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54695__$1,(12),inst_54688);
} else {
if((state_val_54696 === (5))){
var inst_54673 = (state_54695[(2)]);
var state_54695__$1 = state_54695;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54695__$1,(2),inst_54673);
} else {
if((state_val_54696 === (10))){
var state_54695__$1 = state_54695;
var statearr_54707_54800 = state_54695__$1;
(statearr_54707_54800[(2)] = null);

(statearr_54707_54800[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54696 === (8))){
var inst_54678 = (state_54695[(9)]);
var inst_54683 = (state_54695[(2)]);
var state_54695__$1 = (function (){var statearr_54708 = state_54695;
(statearr_54708[(10)] = inst_54683);

return statearr_54708;
})();
if(cljs.core.truth_(inst_54678)){
var statearr_54709_54801 = state_54695__$1;
(statearr_54709_54801[(1)] = (9));

} else {
var statearr_54710_54802 = state_54695__$1;
(statearr_54710_54802[(1)] = (10));

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
var statearr_54711 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54711[(0)] = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__);

(statearr_54711[(1)] = (1));

return statearr_54711;
});
var goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1 = (function (state_54695){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_54695);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e54712){var ex__41228__auto__ = e54712;
var statearr_54713_54803 = state_54695;
(statearr_54713_54803[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_54695[(4)]))){
var statearr_54714_54804 = state_54695;
(statearr_54714_54804[(1)] = cljs.core.first((state_54695[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54805 = state_54695;
state_54695 = G__54805;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__ = function(state_54695){
switch(arguments.length){
case 0:
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1.call(this,state_54695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____0;
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1;
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_54715 = f__41248__auto__();
(statearr_54715[(6)] = c__41247__auto__);

return statearr_54715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
});
goldly.cljs.loader.load_cljs = (function goldly$cljs$loader$load_cljs(static_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,66,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-cljs static?: ",static_QMARK_], null);
}),null)),null,(143),null);

var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_54762){
var state_val_54763 = (state_54762[(1)]);
if((state_val_54763 === (7))){
var inst_54720 = (state_54762[(7)]);
var inst_54721 = (state_54762[(8)]);
var inst_54722 = (state_54762[(9)]);
var inst_54733 = (function (){var map__54716 = inst_54720;
var result = inst_54721;
var error = inst_54722;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["autoload sci-cljs files: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0))], null);
});
})();
var inst_54734 = (new cljs.core.Delay(inst_54733,null));
var inst_54735 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,74,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54734,null,(145),null);
var inst_54736 = cljs.core.first(inst_54721);
var inst_54737 = cljs.core.rest(inst_54721);
var inst_54738 = inst_54736;
var inst_54739 = inst_54737;
var state_54762__$1 = (function (){var statearr_54764 = state_54762;
(statearr_54764[(10)] = inst_54735);

(statearr_54764[(11)] = inst_54738);

(statearr_54764[(12)] = inst_54739);

return statearr_54764;
})();
var statearr_54765_54806 = state_54762__$1;
(statearr_54765_54806[(2)] = null);

(statearr_54765_54806[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54763 === (1))){
var inst_54717 = goldly.cljs.loader.explore(static_QMARK_);
var state_54762__$1 = state_54762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54762__$1,(2),inst_54717);
} else {
if((state_val_54763 === (4))){
var inst_54721 = (state_54762[(8)]);
var inst_54727 = cljs.core.empty_QMARK_(inst_54721);
var state_54762__$1 = state_54762;
if(inst_54727){
var statearr_54766_54807 = state_54762__$1;
(statearr_54766_54807[(1)] = (6));

} else {
var statearr_54767_54808 = state_54762__$1;
(statearr_54767_54808[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54763 === (13))){
var state_54762__$1 = state_54762;
var statearr_54768_54809 = state_54762__$1;
(statearr_54768_54809[(2)] = null);

(statearr_54768_54809[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54763 === (6))){
var inst_54720 = (state_54762[(7)]);
var inst_54721 = (state_54762[(8)]);
var inst_54722 = (state_54762[(9)]);
var inst_54729 = (function (){var map__54716 = inst_54720;
var result = inst_54721;
var error = inst_54722;
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no autoload cljs files available!"], null);
});
})();
var inst_54730 = (new cljs.core.Delay(inst_54729,null));
var inst_54731 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"goldly.cljs.loader",null,72,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54730,null,(144),null);
var state_54762__$1 = state_54762;
var statearr_54769_54810 = state_54762__$1;
(statearr_54769_54810[(2)] = inst_54731);

(statearr_54769_54810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54763 === (3))){
var inst_54722 = (state_54762[(9)]);
var inst_54724 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54722], 0));
var inst_54725 = (inst_54722.cljs$core$IFn$_invoke$arity$2 ? inst_54722.cljs$core$IFn$_invoke$arity$2("error getting cljs files: ",inst_54724) : inst_54722.call(null,"error getting cljs files: ",inst_54724));
var state_54762__$1 = state_54762;
var statearr_54770_54811 = state_54762__$1;
(statearr_54770_54811[(2)] = inst_54725);

(statearr_54770_54811[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54763 === (12))){
var inst_54739 = (state_54762[(12)]);
var inst_54749 = cljs.core.first(inst_54739);
var inst_54750 = cljs.core.rest(inst_54739);
var inst_54738 = inst_54749;
var inst_54739__$1 = inst_54750;
var state_54762__$1 = (function (){var statearr_54771 = state_54762;
(statearr_54771[(11)] = inst_54738);

(statearr_54771[(12)] = inst_54739__$1);

return statearr_54771;
})();
var statearr_54772_54812 = state_54762__$1;
(statearr_54772_54812[(2)] = null);

(statearr_54772_54812[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54763 === (2))){
var inst_54720 = (state_54762[(7)]);
var inst_54722 = (state_54762[(9)]);
var inst_54719 = (state_54762[(2)]);
var inst_54720__$1 = cljs.core.__destructure_map(inst_54719);
var inst_54721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54720__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_54722__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54720__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var state_54762__$1 = (function (){var statearr_54773 = state_54762;
(statearr_54773[(7)] = inst_54720__$1);

(statearr_54773[(8)] = inst_54721);

(statearr_54773[(9)] = inst_54722__$1);

return statearr_54773;
})();
if(cljs.core.truth_(inst_54722__$1)){
var statearr_54774_54813 = state_54762__$1;
(statearr_54774_54813[(1)] = (3));

} else {
var statearr_54775_54814 = state_54762__$1;
(statearr_54775_54814[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54763 === (11))){
var inst_54720 = (state_54762[(7)]);
var inst_54721 = (state_54762[(8)]);
var inst_54722 = (state_54762[(9)]);
var inst_54738 = (state_54762[(11)]);
var inst_54739 = (state_54762[(12)]);
var inst_54743 = (state_54762[(2)]);
var inst_54744 = (function (){var map__54716 = inst_54720;
var result = inst_54721;
var error = inst_54722;
var f = inst_54738;
var files = inst_54739;
var r = inst_54743;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compile result: ",r], null);
});
})();
var inst_54745 = (new cljs.core.Delay(inst_54744,null));
var inst_54746 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,78,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54745,null,(146),null);
var inst_54747 = cljs.core.seq(inst_54739);
var state_54762__$1 = (function (){var statearr_54776 = state_54762;
(statearr_54776[(13)] = inst_54746);

return statearr_54776;
})();
if(inst_54747){
var statearr_54777_54815 = state_54762__$1;
(statearr_54777_54815[(1)] = (12));

} else {
var statearr_54778_54816 = state_54762__$1;
(statearr_54778_54816[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54763 === (9))){
var inst_54738 = (state_54762[(11)]);
var inst_54741 = goldly.cljs.loader.load_cljs_file(static_QMARK_,inst_54738);
var state_54762__$1 = state_54762;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54762__$1,(11),inst_54741);
} else {
if((state_val_54763 === (5))){
var inst_54760 = (state_54762[(2)]);
var state_54762__$1 = state_54762;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54762__$1,inst_54760);
} else {
if((state_val_54763 === (14))){
var inst_54754 = (state_54762[(2)]);
var state_54762__$1 = state_54762;
var statearr_54779_54817 = state_54762__$1;
(statearr_54779_54817[(2)] = inst_54754);

(statearr_54779_54817[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54763 === (10))){
var inst_54756 = (state_54762[(2)]);
var state_54762__$1 = state_54762;
var statearr_54780_54818 = state_54762__$1;
(statearr_54780_54818[(2)] = inst_54756);

(statearr_54780_54818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54763 === (8))){
var inst_54758 = (state_54762[(2)]);
var state_54762__$1 = state_54762;
var statearr_54781_54819 = state_54762__$1;
(statearr_54781_54819[(2)] = inst_54758);

(statearr_54781_54819[(1)] = (5));


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
var statearr_54782 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54782[(0)] = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__);

(statearr_54782[(1)] = (1));

return statearr_54782;
});
var goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1 = (function (state_54762){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_54762);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e54783){var ex__41228__auto__ = e54783;
var statearr_54784_54820 = state_54762;
(statearr_54784_54820[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_54762[(4)]))){
var statearr_54785_54821 = state_54762;
(statearr_54785_54821[(1)] = cljs.core.first((state_54762[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54822 = state_54762;
state_54762 = G__54822;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__ = function(state_54762){
switch(arguments.length){
case 0:
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1.call(this,state_54762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____0;
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1;
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_54786 = f__41248__auto__();
(statearr_54786[(6)] = c__41247__auto__);

return statearr_54786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("goldly","cljs-sci-reload","goldly/cljs-sci-reload",784118632),(function (cofx,p__54787){
var vec__54788 = p__54787;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54788,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54788,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,96,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs-sci-reload received: %s",new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(result)], null);
}),null)),null,(147),null);

goldly.cljs.loader.compile_cljs(result);

goldly.cljs.reload.reload_cljs();

return null;
}));

//# sourceMappingURL=goldly.cljs.loader.js.map
