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
er_p.catch((function (e){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.cljs.loader",null,25,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compile of ",filename," failed: ",e], null);
}),null)),null,(100),null);

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
}),null)),null,(102),null);

if(cljs.core.truth_(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [er], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,32,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs eval result:",er], null);
}),null)),null,(103),null);

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
}),null)),null,(104),null);

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
}),null)),null,(105),null);

var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_54617){
var state_val_54618 = (state_54617[(1)]);
if((state_val_54618 === (7))){
var state_54617__$1 = state_54617;
var statearr_54619_54713 = state_54617__$1;
(statearr_54619_54713[(2)] = null);

(statearr_54619_54713[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54618 === (1))){
var state_54617__$1 = state_54617;
if(cljs.core.truth_(static_QMARK_)){
var statearr_54620_54714 = state_54617__$1;
(statearr_54620_54714[(1)] = (3));

} else {
var statearr_54621_54715 = state_54617__$1;
(statearr_54621_54715[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54618 === (4))){
var inst_54589 = [new cljs.core.Keyword(null,"fun","fun",-1265158045),new cljs.core.Keyword(null,"args","args",1315556576)];
var inst_54590 = new cljs.core.Symbol("goldly.cljs.loader","load-file-or-res!","goldly.cljs.loader/load-file-or-res!",823763230,null);
var inst_54591 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54592 = [filename];
var inst_54593 = (new cljs.core.PersistentVector(null,1,(5),inst_54591,inst_54592,null));
var inst_54594 = [inst_54590,inst_54593];
var inst_54595 = cljs.core.PersistentHashMap.fromArrays(inst_54589,inst_54594);
var inst_54596 = goldly.service.core.run(inst_54595);
var state_54617__$1 = state_54617;
var statearr_54622_54716 = state_54617__$1;
(statearr_54622_54716[(2)] = inst_54596);

(statearr_54622_54716[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54618 === (6))){
var inst_54602 = (state_54617[(7)]);
var inst_54601 = (state_54617[(8)]);
var inst_54605 = (inst_54602.cljs$core$IFn$_invoke$arity$2 ? inst_54602.cljs$core$IFn$_invoke$arity$2("error loading cljs: ",inst_54601) : inst_54602.call(null,"error loading cljs: ",inst_54601));
var state_54617__$1 = state_54617;
var statearr_54623_54717 = state_54617__$1;
(statearr_54623_54717[(2)] = inst_54605);

(statearr_54623_54717[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54618 === (3))){
var inst_54587 = goldly.offline.old.get_code(filename);
var state_54617__$1 = state_54617;
var statearr_54624_54718 = state_54617__$1;
(statearr_54624_54718[(2)] = inst_54587);

(statearr_54624_54718[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54618 === (12))){
var inst_54612 = (state_54617[(2)]);
var state_54617__$1 = state_54617;
var statearr_54625_54719 = state_54617__$1;
(statearr_54625_54719[(2)] = inst_54612);

(statearr_54625_54719[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54618 === (2))){
var inst_54601 = (state_54617[(8)]);
var inst_54602 = (state_54617[(7)]);
var inst_54600 = (state_54617[(2)]);
var inst_54601__$1 = cljs.core.__destructure_map(inst_54600);
var inst_54602__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54601__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_54603 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54601__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var state_54617__$1 = (function (){var statearr_54626 = state_54617;
(statearr_54626[(8)] = inst_54601__$1);

(statearr_54626[(7)] = inst_54602__$1);

(statearr_54626[(9)] = inst_54603);

return statearr_54626;
})();
if(cljs.core.truth_(inst_54602__$1)){
var statearr_54627_54720 = state_54617__$1;
(statearr_54627_54720[(1)] = (6));

} else {
var statearr_54628_54721 = state_54617__$1;
(statearr_54628_54721[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54618 === (11))){
var inst_54615 = (state_54617[(2)]);
var state_54617__$1 = state_54617;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54617__$1,inst_54615);
} else {
if((state_val_54618 === (9))){
var inst_54603 = (state_54617[(9)]);
var inst_54610 = goldly.cljs.loader.compile_cljs(inst_54603);
var state_54617__$1 = state_54617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54617__$1,(12),inst_54610);
} else {
if((state_val_54618 === (5))){
var inst_54598 = (state_54617[(2)]);
var state_54617__$1 = state_54617;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54617__$1,(2),inst_54598);
} else {
if((state_val_54618 === (10))){
var state_54617__$1 = state_54617;
var statearr_54629_54722 = state_54617__$1;
(statearr_54629_54722[(2)] = null);

(statearr_54629_54722[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54618 === (8))){
var inst_54603 = (state_54617[(9)]);
var inst_54608 = (state_54617[(2)]);
var state_54617__$1 = (function (){var statearr_54630 = state_54617;
(statearr_54630[(10)] = inst_54608);

return statearr_54630;
})();
if(cljs.core.truth_(inst_54603)){
var statearr_54631_54723 = state_54617__$1;
(statearr_54631_54723[(1)] = (9));

} else {
var statearr_54632_54724 = state_54617__$1;
(statearr_54632_54724[(1)] = (10));

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
var statearr_54633 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54633[(0)] = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__);

(statearr_54633[(1)] = (1));

return statearr_54633;
});
var goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1 = (function (state_54617){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_54617);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e54634){var ex__41228__auto__ = e54634;
var statearr_54635_54725 = state_54617;
(statearr_54635_54725[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_54617[(4)]))){
var statearr_54636_54726 = state_54617;
(statearr_54636_54726[(1)] = cljs.core.first((state_54617[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54727 = state_54617;
state_54617 = G__54727;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__ = function(state_54617){
switch(arguments.length){
case 0:
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1.call(this,state_54617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____0;
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1;
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_54637 = f__41248__auto__();
(statearr_54637[(6)] = c__41247__auto__);

return statearr_54637;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
});
goldly.cljs.loader.load_cljs = (function goldly$cljs$loader$load_cljs(static_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,66,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["load-cljs static?: ",static_QMARK_], null);
}),null)),null,(106),null);

var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_54684){
var state_val_54685 = (state_54684[(1)]);
if((state_val_54685 === (7))){
var inst_54642 = (state_54684[(7)]);
var inst_54643 = (state_54684[(8)]);
var inst_54644 = (state_54684[(9)]);
var inst_54655 = (function (){var map__54638 = inst_54642;
var result = inst_54643;
var error = inst_54644;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["autoload sci-cljs files: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0))], null);
});
})();
var inst_54656 = (new cljs.core.Delay(inst_54655,null));
var inst_54657 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,74,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54656,null,(108),null);
var inst_54658 = cljs.core.first(inst_54643);
var inst_54659 = cljs.core.rest(inst_54643);
var inst_54660 = inst_54658;
var inst_54661 = inst_54659;
var state_54684__$1 = (function (){var statearr_54686 = state_54684;
(statearr_54686[(10)] = inst_54657);

(statearr_54686[(11)] = inst_54660);

(statearr_54686[(12)] = inst_54661);

return statearr_54686;
})();
var statearr_54687_54728 = state_54684__$1;
(statearr_54687_54728[(2)] = null);

(statearr_54687_54728[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54685 === (1))){
var inst_54639 = goldly.cljs.loader.explore(static_QMARK_);
var state_54684__$1 = state_54684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54684__$1,(2),inst_54639);
} else {
if((state_val_54685 === (4))){
var inst_54643 = (state_54684[(8)]);
var inst_54649 = cljs.core.empty_QMARK_(inst_54643);
var state_54684__$1 = state_54684;
if(inst_54649){
var statearr_54688_54729 = state_54684__$1;
(statearr_54688_54729[(1)] = (6));

} else {
var statearr_54689_54730 = state_54684__$1;
(statearr_54689_54730[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54685 === (13))){
var state_54684__$1 = state_54684;
var statearr_54690_54731 = state_54684__$1;
(statearr_54690_54731[(2)] = null);

(statearr_54690_54731[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54685 === (6))){
var inst_54642 = (state_54684[(7)]);
var inst_54643 = (state_54684[(8)]);
var inst_54644 = (state_54684[(9)]);
var inst_54651 = (function (){var map__54638 = inst_54642;
var result = inst_54643;
var error = inst_54644;
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no autoload cljs files available!"], null);
});
})();
var inst_54652 = (new cljs.core.Delay(inst_54651,null));
var inst_54653 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"goldly.cljs.loader",null,72,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54652,null,(107),null);
var state_54684__$1 = state_54684;
var statearr_54691_54732 = state_54684__$1;
(statearr_54691_54732[(2)] = inst_54653);

(statearr_54691_54732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54685 === (3))){
var inst_54644 = (state_54684[(9)]);
var inst_54646 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54644], 0));
var inst_54647 = (inst_54644.cljs$core$IFn$_invoke$arity$2 ? inst_54644.cljs$core$IFn$_invoke$arity$2("error getting cljs files: ",inst_54646) : inst_54644.call(null,"error getting cljs files: ",inst_54646));
var state_54684__$1 = state_54684;
var statearr_54692_54733 = state_54684__$1;
(statearr_54692_54733[(2)] = inst_54647);

(statearr_54692_54733[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54685 === (12))){
var inst_54661 = (state_54684[(12)]);
var inst_54671 = cljs.core.first(inst_54661);
var inst_54672 = cljs.core.rest(inst_54661);
var inst_54660 = inst_54671;
var inst_54661__$1 = inst_54672;
var state_54684__$1 = (function (){var statearr_54693 = state_54684;
(statearr_54693[(11)] = inst_54660);

(statearr_54693[(12)] = inst_54661__$1);

return statearr_54693;
})();
var statearr_54694_54734 = state_54684__$1;
(statearr_54694_54734[(2)] = null);

(statearr_54694_54734[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54685 === (2))){
var inst_54642 = (state_54684[(7)]);
var inst_54644 = (state_54684[(9)]);
var inst_54641 = (state_54684[(2)]);
var inst_54642__$1 = cljs.core.__destructure_map(inst_54641);
var inst_54643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54642__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_54644__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54642__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var state_54684__$1 = (function (){var statearr_54695 = state_54684;
(statearr_54695[(7)] = inst_54642__$1);

(statearr_54695[(8)] = inst_54643);

(statearr_54695[(9)] = inst_54644__$1);

return statearr_54695;
})();
if(cljs.core.truth_(inst_54644__$1)){
var statearr_54696_54735 = state_54684__$1;
(statearr_54696_54735[(1)] = (3));

} else {
var statearr_54697_54736 = state_54684__$1;
(statearr_54697_54736[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54685 === (11))){
var inst_54642 = (state_54684[(7)]);
var inst_54643 = (state_54684[(8)]);
var inst_54644 = (state_54684[(9)]);
var inst_54660 = (state_54684[(11)]);
var inst_54661 = (state_54684[(12)]);
var inst_54665 = (state_54684[(2)]);
var inst_54666 = (function (){var map__54638 = inst_54642;
var result = inst_54643;
var error = inst_54644;
var f = inst_54660;
var files = inst_54661;
var r = inst_54665;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compile result: ",r], null);
});
})();
var inst_54667 = (new cljs.core.Delay(inst_54666,null));
var inst_54668 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,78,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54667,null,(109),null);
var inst_54669 = cljs.core.seq(inst_54661);
var state_54684__$1 = (function (){var statearr_54698 = state_54684;
(statearr_54698[(13)] = inst_54668);

return statearr_54698;
})();
if(inst_54669){
var statearr_54699_54737 = state_54684__$1;
(statearr_54699_54737[(1)] = (12));

} else {
var statearr_54700_54738 = state_54684__$1;
(statearr_54700_54738[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54685 === (9))){
var inst_54660 = (state_54684[(11)]);
var inst_54663 = goldly.cljs.loader.load_cljs_file(static_QMARK_,inst_54660);
var state_54684__$1 = state_54684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54684__$1,(11),inst_54663);
} else {
if((state_val_54685 === (5))){
var inst_54682 = (state_54684[(2)]);
var state_54684__$1 = state_54684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54684__$1,inst_54682);
} else {
if((state_val_54685 === (14))){
var inst_54676 = (state_54684[(2)]);
var state_54684__$1 = state_54684;
var statearr_54701_54739 = state_54684__$1;
(statearr_54701_54739[(2)] = inst_54676);

(statearr_54701_54739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54685 === (10))){
var inst_54678 = (state_54684[(2)]);
var state_54684__$1 = state_54684;
var statearr_54702_54740 = state_54684__$1;
(statearr_54702_54740[(2)] = inst_54678);

(statearr_54702_54740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54685 === (8))){
var inst_54680 = (state_54684[(2)]);
var state_54684__$1 = state_54684;
var statearr_54703_54741 = state_54684__$1;
(statearr_54703_54741[(2)] = inst_54680);

(statearr_54703_54741[(1)] = (5));


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
var statearr_54704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54704[(0)] = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__);

(statearr_54704[(1)] = (1));

return statearr_54704;
});
var goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1 = (function (state_54684){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_54684);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e54705){var ex__41228__auto__ = e54705;
var statearr_54706_54742 = state_54684;
(statearr_54706_54742[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_54684[(4)]))){
var statearr_54707_54743 = state_54684;
(statearr_54707_54743[(1)] = cljs.core.first((state_54684[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54744 = state_54684;
state_54684 = G__54744;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__ = function(state_54684){
switch(arguments.length){
case 0:
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1.call(this,state_54684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____0;
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1;
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_54708 = f__41248__auto__();
(statearr_54708[(6)] = c__41247__auto__);

return statearr_54708;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("goldly","cljs-sci-reload","goldly/cljs-sci-reload",784118632),(function (cofx,p__54709){
var vec__54710 = p__54709;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54710,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54710,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,96,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs-sci-reload received: %s",new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(result)], null);
}),null)),null,(110),null);

goldly.cljs.loader.compile_cljs(result);

goldly.cljs.reload.reload_cljs();

return null;
}));

//# sourceMappingURL=goldly.cljs.loader.js.map
