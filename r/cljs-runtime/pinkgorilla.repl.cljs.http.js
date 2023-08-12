goog.provide('pinkgorilla.repl.cljs.http');
pinkgorilla.repl.cljs.http.make_get = (function pinkgorilla$repl$cljs$http$make_get(process){
return (function() { 
var G__54822__delegate = function (url,a,path,p__54786){
var vec__54787 = p__54786;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54787,(0),null);
var opts__$1 = (function (){var or__5045__auto__ = opts;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null);
}
})();
var c__41247__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41248__auto__ = (function (){var switch__41224__auto__ = (function (state_54810){
var state_val_54811 = (state_54810[(1)]);
if((state_val_54811 === (1))){
var inst_54801 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__$1], 0));
var state_54810__$1 = state_54810;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54810__$1,(2),inst_54801);
} else {
if((state_val_54811 === (2))){
var inst_54803 = (state_54810[(2)]);
var inst_54804 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_54803);
var inst_54805 = cljs.core.type(inst_54804);
var inst_54806 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["body: ",inst_54804,"type: ",inst_54805], 0));
var inst_54807 = (process.cljs$core$IFn$_invoke$arity$1 ? process.cljs$core$IFn$_invoke$arity$1(inst_54804) : process.call(null,inst_54804));
var inst_54808 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc_in,path,inst_54807);
var state_54810__$1 = (function (){var statearr_54812 = state_54810;
(statearr_54812[(7)] = inst_54806);

(statearr_54812[(8)] = inst_54808);

return statearr_54812;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54810__$1,null);
} else {
return null;
}
}
});
return (function() {
var pinkgorilla$repl$cljs$http$make_get_$_state_machine__41225__auto__ = null;
var pinkgorilla$repl$cljs$http$make_get_$_state_machine__41225__auto____0 = (function (){
var statearr_54813 = [null,null,null,null,null,null,null,null,null];
(statearr_54813[(0)] = pinkgorilla$repl$cljs$http$make_get_$_state_machine__41225__auto__);

(statearr_54813[(1)] = (1));

return statearr_54813;
});
var pinkgorilla$repl$cljs$http$make_get_$_state_machine__41225__auto____1 = (function (state_54810){
while(true){
var ret_value__41226__auto__ = (function (){try{while(true){
var result__41227__auto__ = switch__41224__auto__(state_54810);
if(cljs.core.keyword_identical_QMARK_(result__41227__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41227__auto__;
}
break;
}
}catch (e54814){var ex__41228__auto__ = e54814;
var statearr_54815_54823 = state_54810;
(statearr_54815_54823[(2)] = ex__41228__auto__);


if(cljs.core.seq((state_54810[(4)]))){
var statearr_54816_54824 = state_54810;
(statearr_54816_54824[(1)] = cljs.core.first((state_54810[(4)])));

} else {
throw ex__41228__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41226__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54825 = state_54810;
state_54810 = G__54825;
continue;
} else {
return ret_value__41226__auto__;
}
break;
}
});
pinkgorilla$repl$cljs$http$make_get_$_state_machine__41225__auto__ = function(state_54810){
switch(arguments.length){
case 0:
return pinkgorilla$repl$cljs$http$make_get_$_state_machine__41225__auto____0.call(this);
case 1:
return pinkgorilla$repl$cljs$http$make_get_$_state_machine__41225__auto____1.call(this,state_54810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pinkgorilla$repl$cljs$http$make_get_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$0 = pinkgorilla$repl$cljs$http$make_get_$_state_machine__41225__auto____0;
pinkgorilla$repl$cljs$http$make_get_$_state_machine__41225__auto__.cljs$core$IFn$_invoke$arity$1 = pinkgorilla$repl$cljs$http$make_get_$_state_machine__41225__auto____1;
return pinkgorilla$repl$cljs$http$make_get_$_state_machine__41225__auto__;
})()
})();
var state__41249__auto__ = (function (){var statearr_54817 = f__41248__auto__();
(statearr_54817[(6)] = c__41247__auto__);

return statearr_54817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41249__auto__);
}));

return c__41247__auto__;
};
var G__54822 = function (url,a,path,var_args){
var p__54786 = null;
if (arguments.length > 3) {
var G__54826__i = 0, G__54826__a = new Array(arguments.length -  3);
while (G__54826__i < G__54826__a.length) {G__54826__a[G__54826__i] = arguments[G__54826__i + 3]; ++G__54826__i;}
  p__54786 = new cljs.core.IndexedSeq(G__54826__a,0,null);
} 
return G__54822__delegate.call(this,url,a,path,p__54786);};
G__54822.cljs$lang$maxFixedArity = 3;
G__54822.cljs$lang$applyTo = (function (arglist__54827){
var url = cljs.core.first(arglist__54827);
arglist__54827 = cljs.core.next(arglist__54827);
var a = cljs.core.first(arglist__54827);
arglist__54827 = cljs.core.next(arglist__54827);
var path = cljs.core.first(arglist__54827);
var p__54786 = cljs.core.rest(arglist__54827);
return G__54822__delegate(url,a,path,p__54786);
});
G__54822.cljs$core$IFn$_invoke$arity$variadic = G__54822__delegate;
return G__54822;
})()
;
});
pinkgorilla.repl.cljs.http.get_str = pinkgorilla.repl.cljs.http.make_get(cljs.core.identity);
pinkgorilla.repl.cljs.http.get_edn = pinkgorilla.repl.cljs.http.make_get(cljs.core.identity);
pinkgorilla.repl.cljs.http.parse_json = (function pinkgorilla$repl$cljs$http$parse_json(s){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(s));
});
pinkgorilla.repl.cljs.http.get_json = pinkgorilla.repl.cljs.http.make_get(cljs.core.identity);
/**
 * gets the current url, as a map
 */
pinkgorilla.repl.cljs.http.application_url = (function pinkgorilla$repl$cljs$http$application_url(){
return cemerick.url.url.cljs$core$IFn$_invoke$arity$1(window.location.href);
});
/**
 * useful to get a websocket to a path on the same server as the website is loaded from
 */
pinkgorilla.repl.cljs.http.ws_origin = (function pinkgorilla$repl$cljs$http$ws_origin(path){
var app_url = pinkgorilla.repl.cljs.http.application_url();
var proto = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app_url.protocol,"http"))?"ws":"wss");
var port_postfix = (function (){var port = app_url.port;
if(((0) < port)){
return [":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join('');
} else {
return "";
}
})();
return [proto,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app_url.host),port_postfix,clojure.string.replace(app_url.path,/[^\/]+$/,path)].join('');
});

//# sourceMappingURL=pinkgorilla.repl.cljs.http.js.map
