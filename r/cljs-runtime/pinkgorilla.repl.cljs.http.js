goog.provide('pinkgorilla.repl.cljs.http');
pinkgorilla.repl.cljs.http.make_get = (function pinkgorilla$repl$cljs$http$make_get(process){
return (function() { 
var G__54776__delegate = function (url,a,path,p__54755){
var vec__54756 = p__54755;
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54756,(0),null);
var opts__$1 = (function (){var or__5045__auto__ = opts;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222),false], null);
}
})();
var c__41244__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41245__auto__ = (function (){var switch__41221__auto__ = (function (state_54768){
var state_val_54769 = (state_54768[(1)]);
if((state_val_54769 === (1))){
var inst_54759 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts__$1], 0));
var state_54768__$1 = state_54768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_54768__$1,(2),inst_54759);
} else {
if((state_val_54769 === (2))){
var inst_54761 = (state_54768[(2)]);
var inst_54762 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_54761);
var inst_54763 = cljs.core.type(inst_54762);
var inst_54764 = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["body: ",inst_54762,"type: ",inst_54763], 0));
var inst_54765 = (process.cljs$core$IFn$_invoke$arity$1 ? process.cljs$core$IFn$_invoke$arity$1(inst_54762) : process.call(null,inst_54762));
var inst_54766 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc_in,path,inst_54765);
var state_54768__$1 = (function (){var statearr_54770 = state_54768;
(statearr_54770[(7)] = inst_54764);

(statearr_54770[(8)] = inst_54766);

return statearr_54770;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_54768__$1,null);
} else {
return null;
}
}
});
return (function() {
var pinkgorilla$repl$cljs$http$make_get_$_state_machine__41222__auto__ = null;
var pinkgorilla$repl$cljs$http$make_get_$_state_machine__41222__auto____0 = (function (){
var statearr_54771 = [null,null,null,null,null,null,null,null,null];
(statearr_54771[(0)] = pinkgorilla$repl$cljs$http$make_get_$_state_machine__41222__auto__);

(statearr_54771[(1)] = (1));

return statearr_54771;
});
var pinkgorilla$repl$cljs$http$make_get_$_state_machine__41222__auto____1 = (function (state_54768){
while(true){
var ret_value__41223__auto__ = (function (){try{while(true){
var result__41224__auto__ = switch__41221__auto__(state_54768);
if(cljs.core.keyword_identical_QMARK_(result__41224__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41224__auto__;
}
break;
}
}catch (e54772){var ex__41225__auto__ = e54772;
var statearr_54773_54777 = state_54768;
(statearr_54773_54777[(2)] = ex__41225__auto__);


if(cljs.core.seq((state_54768[(4)]))){
var statearr_54774_54778 = state_54768;
(statearr_54774_54778[(1)] = cljs.core.first((state_54768[(4)])));

} else {
throw ex__41225__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41223__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54779 = state_54768;
state_54768 = G__54779;
continue;
} else {
return ret_value__41223__auto__;
}
break;
}
});
pinkgorilla$repl$cljs$http$make_get_$_state_machine__41222__auto__ = function(state_54768){
switch(arguments.length){
case 0:
return pinkgorilla$repl$cljs$http$make_get_$_state_machine__41222__auto____0.call(this);
case 1:
return pinkgorilla$repl$cljs$http$make_get_$_state_machine__41222__auto____1.call(this,state_54768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pinkgorilla$repl$cljs$http$make_get_$_state_machine__41222__auto__.cljs$core$IFn$_invoke$arity$0 = pinkgorilla$repl$cljs$http$make_get_$_state_machine__41222__auto____0;
pinkgorilla$repl$cljs$http$make_get_$_state_machine__41222__auto__.cljs$core$IFn$_invoke$arity$1 = pinkgorilla$repl$cljs$http$make_get_$_state_machine__41222__auto____1;
return pinkgorilla$repl$cljs$http$make_get_$_state_machine__41222__auto__;
})()
})();
var state__41246__auto__ = (function (){var statearr_54775 = f__41245__auto__();
(statearr_54775[(6)] = c__41244__auto__);

return statearr_54775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41246__auto__);
}));

return c__41244__auto__;
};
var G__54776 = function (url,a,path,var_args){
var p__54755 = null;
if (arguments.length > 3) {
var G__54780__i = 0, G__54780__a = new Array(arguments.length -  3);
while (G__54780__i < G__54780__a.length) {G__54780__a[G__54780__i] = arguments[G__54780__i + 3]; ++G__54780__i;}
  p__54755 = new cljs.core.IndexedSeq(G__54780__a,0,null);
} 
return G__54776__delegate.call(this,url,a,path,p__54755);};
G__54776.cljs$lang$maxFixedArity = 3;
G__54776.cljs$lang$applyTo = (function (arglist__54781){
var url = cljs.core.first(arglist__54781);
arglist__54781 = cljs.core.next(arglist__54781);
var a = cljs.core.first(arglist__54781);
arglist__54781 = cljs.core.next(arglist__54781);
var path = cljs.core.first(arglist__54781);
var p__54755 = cljs.core.rest(arglist__54781);
return G__54776__delegate(url,a,path,p__54755);
});
G__54776.cljs$core$IFn$_invoke$arity$variadic = G__54776__delegate;
return G__54776;
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
