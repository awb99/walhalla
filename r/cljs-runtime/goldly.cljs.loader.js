goog.provide('goldly.cljs.loader');
goldly.cljs.loader.compile_cljs_p = (function goldly$cljs$loader$compile_cljs_p(p__54637){
var map__54638 = p__54637;
var map__54638__$1 = cljs.core.__destructure_map(map__54638);
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54638__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54638__$1,new cljs.core.Keyword(null,"code","code",1586293142));
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
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_54671){
var state_val_54672 = (state_54671[(1)]);
if((state_val_54672 === (7))){
var state_54671__$1 = state_54671;
var statearr_54673_54767 = state_54671__$1;
(statearr_54673_54767[(2)] = null);

(statearr_54673_54767[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54672 === (1))){
var state_54671__$1 = state_54671;
if(cljs.core.truth_(static_QMARK_)){
var statearr_54674_54768 = state_54671__$1;
(statearr_54674_54768[(1)] = (3));

} else {
var statearr_54675_54769 = state_54671__$1;
(statearr_54675_54769[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54672 === (4))){
var inst_54643 = [new cljs.core.Keyword(null,"fun","fun",-1265158045),new cljs.core.Keyword(null,"args","args",1315556576)];
var inst_54644 = new cljs.core.Symbol("goldly.cljs.loader","load-file-or-res!","goldly.cljs.loader/load-file-or-res!",823763230,null);
var inst_54645 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54646 = [filename];
var inst_54647 = (new cljs.core.PersistentVector(null,1,(5),inst_54645,inst_54646,null));
var inst_54648 = [inst_54644,inst_54647];
var inst_54649 = cljs.core.PersistentHashMap.fromArrays(inst_54643,inst_54648);
var inst_54650 = goldly.service.core.run(inst_54649);
var state_54671__$1 = state_54671;
var statearr_54676_54770 = state_54671__$1;
(statearr_54676_54770[(2)] = inst_54650);

(statearr_54676_54770[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54672 === (6))){
var inst_54656 = (state_54671[(7)]);
var inst_54655 = (state_54671[(8)]);
var inst_54659 = (inst_54656.cljs$core$IFn$_invoke$arity$2 ? inst_54656.cljs$core$IFn$_invoke$arity$2("error loading cljs: ",inst_54655) : inst_54656.call(null,"error loading cljs: ",inst_54655));
var state_54671__$1 = state_54671;
var statearr_54677_54771 = state_54671__$1;
(statearr_54677_54771[(2)] = inst_54659);

(statearr_54677_54771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54672 === (3))){
var inst_54641 = goldly.static$.get_code(filename);
var state_54671__$1 = state_54671;
var statearr_54678_54772 = state_54671__$1;
(statearr_54678_54772[(2)] = inst_54641);

(statearr_54678_54772[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54672 === (12))){
var inst_54666 = (state_54671[(2)]);
var state_54671__$1 = state_54671;
var statearr_54679_54773 = state_54671__$1;
(statearr_54679_54773[(2)] = inst_54666);

(statearr_54679_54773[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54672 === (2))){
var inst_54655 = (state_54671[(8)]);
var inst_54656 = (state_54671[(7)]);
var inst_54654 = (state_54671[(2)]);
var inst_54655__$1 = cljs.core.__destructure_map(inst_54654);
var inst_54656__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54655__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var inst_54657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54655__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var state_54671__$1 = (function (){var statearr_54680 = state_54671;
(statearr_54680[(8)] = inst_54655__$1);

(statearr_54680[(7)] = inst_54656__$1);

(statearr_54680[(9)] = inst_54657);

return statearr_54680;
})();
if(cljs.core.truth_(inst_54656__$1)){
var statearr_54681_54774 = state_54671__$1;
(statearr_54681_54774[(1)] = (6));

} else {
var statearr_54682_54775 = state_54671__$1;
(statearr_54682_54775[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54672 === (11))){
var inst_54669 = (state_54671[(2)]);
var state_54671__$1 = state_54671;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54671__$1,inst_54669);
} else {
if((state_val_54672 === (9))){
var inst_54657 = (state_54671[(9)]);
var inst_54664 = goldly.cljs.loader.compile_cljs(inst_54657);
var state_54671__$1 = state_54671;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54671__$1,(12),inst_54664);
} else {
if((state_val_54672 === (5))){
var inst_54652 = (state_54671[(2)]);
var state_54671__$1 = state_54671;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54671__$1,(2),inst_54652);
} else {
if((state_val_54672 === (10))){
var state_54671__$1 = state_54671;
var statearr_54683_54776 = state_54671__$1;
(statearr_54683_54776[(2)] = null);

(statearr_54683_54776[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54672 === (8))){
var inst_54657 = (state_54671[(9)]);
var inst_54662 = (state_54671[(2)]);
var state_54671__$1 = (function (){var statearr_54684 = state_54671;
(statearr_54684[(10)] = inst_54662);

return statearr_54684;
})();
if(cljs.core.truth_(inst_54657)){
var statearr_54685_54777 = state_54671__$1;
(statearr_54685_54777[(1)] = (9));

} else {
var statearr_54686_54778 = state_54671__$1;
(statearr_54686_54778[(1)] = (10));

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
var statearr_54687 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54687[(0)] = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__);

(statearr_54687[(1)] = (1));

return statearr_54687;
});
var goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1 = (function (state_54671){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_54671);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e54688){var ex__41228__auto__ = e54688;
var statearr_54689_54779 = state_54671;
(statearr_54689_54779[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_54671[(4)]))){
var statearr_54690_54780 = state_54671;
(statearr_54690_54780[(1)] = cljs.core.first((state_54671[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54781 = state_54671;
state_54671 = G__54781;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__ = function(state_54671){
switch(arguments.length){
case 0:
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1.call(this,state_54671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____0;
goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto____1;
return goldly$cljs$loader$load_cljs_file_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_54691 = f__41248__auto__();
(statearr_54691[(6)] = c__41247__auto__);

return statearr_54691;
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
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_54738){
var state_val_54739 = (state_54738[(1)]);
if((state_val_54739 === (7))){
var inst_54696 = (state_54738[(7)]);
var inst_54697 = (state_54738[(8)]);
var inst_54698 = (state_54738[(9)]);
var inst_54709 = (function (){var map__54692 = inst_54696;
var result = inst_54697;
var error = inst_54698;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["autoload sci-cljs files: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([result], 0))], null);
});
})();
var inst_54710 = (new cljs.core.Delay(inst_54709,null));
var inst_54711 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,75,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54710,null,(107),null);
var inst_54712 = cljs.core.first(inst_54697);
var inst_54713 = cljs.core.rest(inst_54697);
var inst_54714 = inst_54712;
var inst_54715 = inst_54713;
var state_54738__$1 = (function (){var statearr_54740 = state_54738;
(statearr_54740[(10)] = inst_54711);

(statearr_54740[(11)] = inst_54714);

(statearr_54740[(12)] = inst_54715);

return statearr_54740;
})();
var statearr_54741_54782 = state_54738__$1;
(statearr_54741_54782[(2)] = null);

(statearr_54741_54782[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (1))){
var inst_54693 = goldly.cljs.loader.explore(static_QMARK_);
var state_54738__$1 = state_54738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54738__$1,(2),inst_54693);
} else {
if((state_val_54739 === (4))){
var inst_54697 = (state_54738[(8)]);
var inst_54703 = cljs.core.empty_QMARK_(inst_54697);
var state_54738__$1 = state_54738;
if(inst_54703){
var statearr_54742_54783 = state_54738__$1;
(statearr_54742_54783[(1)] = (6));

} else {
var statearr_54743_54784 = state_54738__$1;
(statearr_54743_54784[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (13))){
var state_54738__$1 = state_54738;
var statearr_54744_54785 = state_54738__$1;
(statearr_54744_54785[(2)] = null);

(statearr_54744_54785[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (6))){
var inst_54696 = (state_54738[(7)]);
var inst_54697 = (state_54738[(8)]);
var inst_54698 = (state_54738[(9)]);
var inst_54705 = (function (){var map__54692 = inst_54696;
var result = inst_54697;
var error = inst_54698;
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no autoload cljs files available!"], null);
});
})();
var inst_54706 = (new cljs.core.Delay(inst_54705,null));
var inst_54707 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"goldly.cljs.loader",null,73,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54706,null,(106),null);
var state_54738__$1 = state_54738;
var statearr_54745_54786 = state_54738__$1;
(statearr_54745_54786[(2)] = inst_54707);

(statearr_54745_54786[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (3))){
var inst_54698 = (state_54738[(9)]);
var inst_54700 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_54698], 0));
var inst_54701 = (inst_54698.cljs$core$IFn$_invoke$arity$2 ? inst_54698.cljs$core$IFn$_invoke$arity$2("error getting cljs files: ",inst_54700) : inst_54698.call(null,"error getting cljs files: ",inst_54700));
var state_54738__$1 = state_54738;
var statearr_54746_54787 = state_54738__$1;
(statearr_54746_54787[(2)] = inst_54701);

(statearr_54746_54787[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (12))){
var inst_54715 = (state_54738[(12)]);
var inst_54725 = cljs.core.first(inst_54715);
var inst_54726 = cljs.core.rest(inst_54715);
var inst_54714 = inst_54725;
var inst_54715__$1 = inst_54726;
var state_54738__$1 = (function (){var statearr_54747 = state_54738;
(statearr_54747[(11)] = inst_54714);

(statearr_54747[(12)] = inst_54715__$1);

return statearr_54747;
})();
var statearr_54748_54788 = state_54738__$1;
(statearr_54748_54788[(2)] = null);

(statearr_54748_54788[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (2))){
var inst_54696 = (state_54738[(7)]);
var inst_54698 = (state_54738[(9)]);
var inst_54695 = (state_54738[(2)]);
var inst_54696__$1 = cljs.core.__destructure_map(inst_54695);
var inst_54697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54696__$1,new cljs.core.Keyword(null,"result","result",1415092211));
var inst_54698__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_54696__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var state_54738__$1 = (function (){var statearr_54749 = state_54738;
(statearr_54749[(7)] = inst_54696__$1);

(statearr_54749[(8)] = inst_54697);

(statearr_54749[(9)] = inst_54698__$1);

return statearr_54749;
})();
if(cljs.core.truth_(inst_54698__$1)){
var statearr_54750_54789 = state_54738__$1;
(statearr_54750_54789[(1)] = (3));

} else {
var statearr_54751_54790 = state_54738__$1;
(statearr_54751_54790[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (11))){
var inst_54696 = (state_54738[(7)]);
var inst_54697 = (state_54738[(8)]);
var inst_54698 = (state_54738[(9)]);
var inst_54714 = (state_54738[(11)]);
var inst_54715 = (state_54738[(12)]);
var inst_54719 = (state_54738[(2)]);
var inst_54720 = (function (){var map__54692 = inst_54696;
var result = inst_54697;
var error = inst_54698;
var f = inst_54714;
var files = inst_54715;
var r = inst_54719;
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compile result: ",r], null);
});
})();
var inst_54721 = (new cljs.core.Delay(inst_54720,null));
var inst_54722 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,79,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_54721,null,(108),null);
var inst_54723 = cljs.core.seq(inst_54715);
var state_54738__$1 = (function (){var statearr_54752 = state_54738;
(statearr_54752[(13)] = inst_54722);

return statearr_54752;
})();
if(inst_54723){
var statearr_54753_54791 = state_54738__$1;
(statearr_54753_54791[(1)] = (12));

} else {
var statearr_54754_54792 = state_54738__$1;
(statearr_54754_54792[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (9))){
var inst_54714 = (state_54738[(11)]);
var inst_54717 = goldly.cljs.loader.load_cljs_file(static_QMARK_,inst_54714);
var state_54738__$1 = state_54738;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54738__$1,(11),inst_54717);
} else {
if((state_val_54739 === (5))){
var inst_54736 = (state_54738[(2)]);
var state_54738__$1 = state_54738;
return cljs.core.async.impl.ioc_helpers.return_chan(state_54738__$1,inst_54736);
} else {
if((state_val_54739 === (14))){
var inst_54730 = (state_54738[(2)]);
var state_54738__$1 = state_54738;
var statearr_54755_54793 = state_54738__$1;
(statearr_54755_54793[(2)] = inst_54730);

(statearr_54755_54793[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (10))){
var inst_54732 = (state_54738[(2)]);
var state_54738__$1 = state_54738;
var statearr_54756_54794 = state_54738__$1;
(statearr_54756_54794[(2)] = inst_54732);

(statearr_54756_54794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54739 === (8))){
var inst_54734 = (state_54738[(2)]);
var state_54738__$1 = state_54738;
var statearr_54757_54795 = state_54738__$1;
(statearr_54757_54795[(2)] = inst_54734);

(statearr_54757_54795[(1)] = (5));


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
var statearr_54758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54758[(0)] = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__);

(statearr_54758[(1)] = (1));

return statearr_54758;
});
var goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1 = (function (state_54738){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_54738);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e54759){var ex__41228__auto__ = e54759;
var statearr_54760_54796 = state_54738;
(statearr_54760_54796[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_54738[(4)]))){
var statearr_54761_54797 = state_54738;
(statearr_54761_54797[(1)] = cljs.core.first((state_54738[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54798 = state_54738;
state_54738 = G__54798;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__ = function(state_54738){
switch(arguments.length){
case 0:
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____0.call(this);
case 1:
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1.call(this,state_54738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____0;
goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = goldly$cljs$loader$load_cljs_$_state_machine__41225__auto____1;
return goldly$cljs$loader$load_cljs_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_54762 = f__41248__auto__();
(statearr_54762[(6)] = c__41247__auto__);

return statearr_54762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("goldly","cljs-sci-reload","goldly/cljs-sci-reload",784118632),(function (cofx,p__54763){
var vec__54764 = p__54763;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54764,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54764,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"goldly.cljs.loader",null,97,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cljs-sci-reload received: %s",new cljs.core.Keyword(null,"filename","filename",-1428840783).cljs$core$IFn$_invoke$arity$1(result)], null);
}),null)),null,(109),null);

goldly.cljs.loader.compile_cljs(result);

goldly.cljs.reload.reload_cljs();

return null;
}));

//# sourceMappingURL=goldly.cljs.loader.js.map
