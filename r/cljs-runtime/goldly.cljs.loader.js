goog.provide('goldly.cljs.loader');
goldly.cljs.loader.compile_cljs_p = (function goldly$cljs$loader$compile_cljs_p(p__54627){
var map__54629 = p__54627;
var map__54629__$1 = cljs.core.__destructure_map(map__54629);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54629__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54629__$1,new cljs.core.Keyword(null,"code","code",1586293142));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,22,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compiling-async: ",filename], null);
}),null)),null,(103),null);

var er_p = goldly.sci.kernel_cljs.compile_code_async(code);
return er_p.catch((function (e){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.cljs.loader",null,26,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["eval failed: ",e], null);
}),null)),null,(104),null);

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
}),null)),null,(105),null);

if(cljs.core.truth_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [er], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,33,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs eval result:",er], null);
}),null)),null,(106),null);

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
}),null)),null,(107),null);

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
}),null)),null,(108),null);

var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_54667){
var state_val_54668 = (state_54667[(1)]);
if((state_val_54668 === (7))){
var state_54667__$1 = state_54667;
var statearr_54669_54763 = state_54667__$1;
(statearr_54669_54763[(2)] = null);

(statearr_54669_54763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54668 === (1))){
var state_54667__$1 = state_54667;
if(cljs.core.truth_(static_QMARK_)){
var statearr_54670_54764 = state_54667__$1;
(statearr_54670_54764[(1)] = (3));

} else {
var statearr_54671_54765 = state_54667__$1;
(statearr_54671_54765[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54668 === (4))){
var inst_54639 = [new cljs.core.Keyword(null,"fun","fun",-1265158045),new cljs.core.Keyword(null,"args","args",1315556576)];
var inst_54640 = new cljs.core.Symbol("goldly.cljs.loader","load-file-or-res!","goldly.cljs.loader/load-file-or-res!",823763230,null);
var inst_54641 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54642 = [filename];
var inst_54643 = (new cljs.core.PersistentVector(null,1,(5),inst_54641,inst_54642,null));
var inst_54644 = [inst_54640,inst_54643];
var inst_54645 = cljs.core.PersistentHashMap.fromArrays(inst_54639,inst_54644);
var inst_54646 = goldly.service.core.run(inst_54645);
var state_54667__$1 = state_54667;
var statearr_54672_54766 = state_54667__$1;
(statearr_54672_54766[(2)] = inst_54646);

(statearr_54672_54766[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54668 === (6))){
var inst_54652 = (state_54667[(7)]);
var inst_54651 = (state_54667[(8)]);
var inst_54655 = (inst_54652.cljs$core$IFn$_invoke$arity$2 ? inst_54652.cljs$core$IFn$_invoke$arity$2("error loading cljs: ",inst_54651) : inst_54652.call(null,"error loading cljs: ",inst_54651));
var state_54667__$1 = state_54667;
var statearr_54673_54767 = state_54667__$1;
(statearr_54673_54767[(2)] = inst_54655);

(statearr_54673_54767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54668 === (3))){
var inst_54637 = goldly.static$.get_code(filename);
var state_54667__$1 = state_54667;
var statearr_54674_54768 = state_54667__$1;
(statearr_54674_54768[(2)] = inst_54637);

(statearr_54674_54768[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54668 === (12))){
var inst_54662 = (state_54667[(2)]);
var state_54667__$1 = state_54667;
var statearr_54675_54769 = state_54667__$1;
(statearr_54675_54769[(2)] = inst_54662);

(statearr_54675_54769[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54668 === (2))){
var inst_54651 = (state_54667[(8)]);
var inst_54652 = (state_54667[(7)]);
var inst_54650 = (state_54667[(2)]);
var inst_54651__$1 = cljs.core.__destructure_map(inst_54650);
var inst_54652__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54651__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_54653 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54651__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var state_54667__$1 = (function (){var statearr_54676 = state_54667;
(statearr_54676[(8)] = inst_54651__$1);

(statearr_54676[(7)] = inst_54652__$1);

(statearr_54676[(9)] = inst_54653);

return statearr_54676;
})();
if(cljs.core.truth_(inst_54652__$1)){
var statearr_54677_54770 = state_54667__$1;
(statearr_54677_54770[(1)] = (6));

} else {
var statearr_54678_54771 = state_54667__$1;
(statearr_54678_54771[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54668 === (11))){
var inst_54665 = (state_54667[(2)]);
var state_54667__$1 = state_54667;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54667__$1,inst_54665);
} else {
if((state_val_54668 === (9))){
var inst_54653 = (state_54667[(9)]);
var inst_54660 = goldly.cljs.loader.compile_cljs(inst_54653);
var state_54667__$1 = state_54667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54667__$1,(12),inst_54660);
} else {
if((state_val_54668 === (5))){
var inst_54648 = (state_54667[(2)]);
var state_54667__$1 = state_54667;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54667__$1,(2),inst_54648);
} else {
if((state_val_54668 === (10))){
var state_54667__$1 = state_54667;
var statearr_54679_54772 = state_54667__$1;
(statearr_54679_54772[(2)] = null);

(statearr_54679_54772[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54668 === (8))){
var inst_54653 = (state_54667[(9)]);
var inst_54658 = (state_54667[(2)]);
var state_54667__$1 = (function (){var statearr_54680 = state_54667;
(statearr_54680[(10)] = inst_54658);

return statearr_54680;
})();
if(cljs.core.truth_(inst_54653)){
var statearr_54681_54773 = state_54667__$1;
(statearr_54681_54773[(1)] = (9));

} else {
var statearr_54682_54774 = state_54667__$1;
(statearr_54682_54774[(1)] = (10));

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
var statearr_54683 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54683[(0)] = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__);

(statearr_54683[(1)] = (1));

return statearr_54683;
});
var goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1 = (function (state_54667){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_54667);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e54684){var ex__41228__auto__ = e54684;
var statearr_54685_54775 = state_54667;
(statearr_54685_54775[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_54667[(4)]))){
var statearr_54686_54776 = state_54667;
(statearr_54686_54776[(1)] = cljs.core.first((state_54667[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54777 = state_54667;
state_54667 = G__54777;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__ = function(state_54667){
switch(arguments.length){
case 0:
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1.call(this,state_54667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____0;
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1;
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_54687 = f__41248__auto__();
(statearr_54687[(6)] = c__41247__auto__);

return statearr_54687;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
});
goldly.cljs.loader.load_cljs = (function goldly$cljs$loader$load_cljs(static_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,67,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-cljs static?: ",static_QMARK_], null);
}),null)),null,(109),null);

var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_54734){
var state_val_54735 = (state_54734[(1)]);
if((state_val_54735 === (7))){
var inst_54692 = (state_54734[(7)]);
var inst_54693 = (state_54734[(8)]);
var inst_54694 = (state_54734[(9)]);
var inst_54705 = (function (){var map__54688 = inst_54692;
var result = inst_54693;
var error = inst_54694;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["autoload sci-cljs files: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0))], null);
});
})();
var inst_54706 = (new cljs.core.Delay(inst_54705,null));
var inst_54707 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,75,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54706,null,(111),null);
var inst_54708 = cljs.core.first(inst_54693);
var inst_54709 = cljs.core.rest(inst_54693);
var inst_54710 = inst_54708;
var inst_54711 = inst_54709;
var state_54734__$1 = (function (){var statearr_54736 = state_54734;
(statearr_54736[(10)] = inst_54707);

(statearr_54736[(11)] = inst_54710);

(statearr_54736[(12)] = inst_54711);

return statearr_54736;
})();
var statearr_54737_54778 = state_54734__$1;
(statearr_54737_54778[(2)] = null);

(statearr_54737_54778[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54735 === (1))){
var inst_54689 = goldly.cljs.loader.explore(static_QMARK_);
var state_54734__$1 = state_54734;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54734__$1,(2),inst_54689);
} else {
if((state_val_54735 === (4))){
var inst_54693 = (state_54734[(8)]);
var inst_54699 = cljs.core.empty_QMARK_(inst_54693);
var state_54734__$1 = state_54734;
if(inst_54699){
var statearr_54738_54779 = state_54734__$1;
(statearr_54738_54779[(1)] = (6));

} else {
var statearr_54739_54780 = state_54734__$1;
(statearr_54739_54780[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54735 === (13))){
var state_54734__$1 = state_54734;
var statearr_54740_54781 = state_54734__$1;
(statearr_54740_54781[(2)] = null);

(statearr_54740_54781[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54735 === (6))){
var inst_54692 = (state_54734[(7)]);
var inst_54693 = (state_54734[(8)]);
var inst_54694 = (state_54734[(9)]);
var inst_54701 = (function (){var map__54688 = inst_54692;
var result = inst_54693;
var error = inst_54694;
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no autoload cljs files available!"], null);
});
})();
var inst_54702 = (new cljs.core.Delay(inst_54701,null));
var inst_54703 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"goldly.cljs.loader",null,73,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54702,null,(110),null);
var state_54734__$1 = state_54734;
var statearr_54741_54782 = state_54734__$1;
(statearr_54741_54782[(2)] = inst_54703);

(statearr_54741_54782[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54735 === (3))){
var inst_54694 = (state_54734[(9)]);
var inst_54696 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54694], 0));
var inst_54697 = (inst_54694.cljs$core$IFn$_invoke$arity$2 ? inst_54694.cljs$core$IFn$_invoke$arity$2("error getting cljs files: ",inst_54696) : inst_54694.call(null,"error getting cljs files: ",inst_54696));
var state_54734__$1 = state_54734;
var statearr_54742_54783 = state_54734__$1;
(statearr_54742_54783[(2)] = inst_54697);

(statearr_54742_54783[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54735 === (12))){
var inst_54711 = (state_54734[(12)]);
var inst_54721 = cljs.core.first(inst_54711);
var inst_54722 = cljs.core.rest(inst_54711);
var inst_54710 = inst_54721;
var inst_54711__$1 = inst_54722;
var state_54734__$1 = (function (){var statearr_54743 = state_54734;
(statearr_54743[(11)] = inst_54710);

(statearr_54743[(12)] = inst_54711__$1);

return statearr_54743;
})();
var statearr_54744_54784 = state_54734__$1;
(statearr_54744_54784[(2)] = null);

(statearr_54744_54784[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54735 === (2))){
var inst_54692 = (state_54734[(7)]);
var inst_54694 = (state_54734[(9)]);
var inst_54691 = (state_54734[(2)]);
var inst_54692__$1 = cljs.core.__destructure_map(inst_54691);
var inst_54693 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54692__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_54694__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54692__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var state_54734__$1 = (function (){var statearr_54745 = state_54734;
(statearr_54745[(7)] = inst_54692__$1);

(statearr_54745[(8)] = inst_54693);

(statearr_54745[(9)] = inst_54694__$1);

return statearr_54745;
})();
if(cljs.core.truth_(inst_54694__$1)){
var statearr_54746_54785 = state_54734__$1;
(statearr_54746_54785[(1)] = (3));

} else {
var statearr_54747_54786 = state_54734__$1;
(statearr_54747_54786[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54735 === (11))){
var inst_54692 = (state_54734[(7)]);
var inst_54693 = (state_54734[(8)]);
var inst_54694 = (state_54734[(9)]);
var inst_54710 = (state_54734[(11)]);
var inst_54711 = (state_54734[(12)]);
var inst_54715 = (state_54734[(2)]);
var inst_54716 = (function (){var map__54688 = inst_54692;
var result = inst_54693;
var error = inst_54694;
var f = inst_54710;
var files = inst_54711;
var r = inst_54715;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compile result: ",r], null);
});
})();
var inst_54717 = (new cljs.core.Delay(inst_54716,null));
var inst_54718 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,79,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54717,null,(112),null);
var inst_54719 = cljs.core.seq(inst_54711);
var state_54734__$1 = (function (){var statearr_54748 = state_54734;
(statearr_54748[(13)] = inst_54718);

return statearr_54748;
})();
if(inst_54719){
var statearr_54749_54787 = state_54734__$1;
(statearr_54749_54787[(1)] = (12));

} else {
var statearr_54750_54788 = state_54734__$1;
(statearr_54750_54788[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54735 === (9))){
var inst_54710 = (state_54734[(11)]);
var inst_54713 = goldly.cljs.loader.load_cljs_file(static_QMARK_,inst_54710);
var state_54734__$1 = state_54734;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54734__$1,(11),inst_54713);
} else {
if((state_val_54735 === (5))){
var inst_54732 = (state_54734[(2)]);
var state_54734__$1 = state_54734;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54734__$1,inst_54732);
} else {
if((state_val_54735 === (14))){
var inst_54726 = (state_54734[(2)]);
var state_54734__$1 = state_54734;
var statearr_54751_54789 = state_54734__$1;
(statearr_54751_54789[(2)] = inst_54726);

(statearr_54751_54789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54735 === (10))){
var inst_54728 = (state_54734[(2)]);
var state_54734__$1 = state_54734;
var statearr_54752_54790 = state_54734__$1;
(statearr_54752_54790[(2)] = inst_54728);

(statearr_54752_54790[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54735 === (8))){
var inst_54730 = (state_54734[(2)]);
var state_54734__$1 = state_54734;
var statearr_54753_54791 = state_54734__$1;
(statearr_54753_54791[(2)] = inst_54730);

(statearr_54753_54791[(1)] = (5));


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
var statearr_54754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54754[(0)] = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__);

(statearr_54754[(1)] = (1));

return statearr_54754;
});
var goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1 = (function (state_54734){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_54734);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e54755){var ex__41228__auto__ = e54755;
var statearr_54756_54792 = state_54734;
(statearr_54756_54792[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_54734[(4)]))){
var statearr_54757_54793 = state_54734;
(statearr_54757_54793[(1)] = cljs.core.first((state_54734[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54794 = state_54734;
state_54734 = G__54794;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__ = function(state_54734){
switch(arguments.length){
case 0:
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1.call(this,state_54734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____0;
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1;
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_54758 = f__41248__auto__();
(statearr_54758[(6)] = c__41247__auto__);

return statearr_54758;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("goldly","cljs-sci-reload","goldly/cljs-sci-reload",784118632),(function (cofx,p__54759){
var vec__54760 = p__54759;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54760,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54760,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,97,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs-sci-reload received: %s",new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(result)], null);
}),null)),null,(113),null);

goldly.cljs.loader.compile_cljs(result);

goldly.cljs.reload.reload_cljs();

return null;
}));

//# sourceMappingURL=goldly.cljs.loader.js.map
