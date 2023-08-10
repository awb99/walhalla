goog.provide('cljs_http.core');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5804__auto__ = (function (){var fexpr__68487 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__68487.cljs$core$IFn$_invoke$arity$1 ? fexpr__68487.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__68487.call(null,channel));
})();
if(cljs.core.truth_(temp__5804__auto__)){
var req = temp__5804__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68505){
var vec__68509 = p__68505;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68509,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68509,(1),null);
return xhr.headers.set(k,v);
}),formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__68515 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__68515)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"blob","blob",1636965233),G__68515)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"document","document",-1329188687),G__68515)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),G__68515)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),G__68515)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__68515)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68515)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__68531){
var map__68532 = p__68531;
var map__68532__$1 = cljs.core.__destructure_map(map__68532);
var request = map__68532__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68532__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68532__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68532__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__68535 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__68535,default_headers);

cljs_http.core.apply_response_type_BANG_(G__68535,response_type);

G__68535.setTimeoutInterval(timeout);

G__68535.setWithCredentials(send_credentials);

return G__68535;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__68549){
var map__68550 = p__68549;
var map__68550__$1 = cljs.core.__destructure_map(map__68550);
var request = map__68550__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68550__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68550__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68550__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68550__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68550__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68550__$1,new cljs.core.Keyword(null,"progress","progress",244323547));
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__5045__auto__ = request_method;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,(function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers(target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),(function (){var G__68564 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__68564) : cljs_http.core.error_kw.call(null,G__68564));
})(),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if((!(cljs_http.core.aborted_QMARK_(xhr)))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));

if(cljs.core.truth_(progress)){
var listener_68764 = (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"direction","direction",-633359395),direction,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"total","total",1916810418),evt.total], null):null)], 0)));
});
var G__68572_68766 = xhr;
G__68572_68766.setProgressEventsEnabled(true);

G__68572_68766.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_68764,new cljs.core.Keyword(null,"upload","upload",-255769218)));

G__68572_68766.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_68764,new cljs.core.Keyword(null,"download","download",-300081668)));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__50366__auto___68772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50367__auto__ = (function (){var switch__50318__auto__ = (function (state_68591){
var state_val_68592 = (state_68591[(1)]);
if((state_val_68592 === (1))){
var state_68591__$1 = state_68591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68591__$1,(2),cancel);
} else {
if((state_val_68592 === (2))){
var inst_68578 = (state_68591[(2)]);
var inst_68579 = xhr.isComplete();
var inst_68580 = cljs.core.not(inst_68579);
var state_68591__$1 = (function (){var statearr_68608 = state_68591;
(statearr_68608[(7)] = inst_68578);

return statearr_68608;
})();
if(inst_68580){
var statearr_68609_68778 = state_68591__$1;
(statearr_68609_68778[(1)] = (3));

} else {
var statearr_68612_68780 = state_68591__$1;
(statearr_68612_68780[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68592 === (3))){
var inst_68583 = xhr.abort();
var state_68591__$1 = state_68591;
var statearr_68619_68781 = state_68591__$1;
(statearr_68619_68781[(2)] = inst_68583);

(statearr_68619_68781[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68592 === (4))){
var state_68591__$1 = state_68591;
var statearr_68621_68784 = state_68591__$1;
(statearr_68621_68784[(2)] = null);

(statearr_68621_68784[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68592 === (5))){
var inst_68586 = (state_68591[(2)]);
var state_68591__$1 = state_68591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_68591__$1,inst_68586);
} else {
return null;
}
}
}
}
}
});
return (function() {
var cljs_http$core$xhr_$_state_machine__50319__auto__ = null;
var cljs_http$core$xhr_$_state_machine__50319__auto____0 = (function (){
var statearr_68631 = [null,null,null,null,null,null,null,null];
(statearr_68631[(0)] = cljs_http$core$xhr_$_state_machine__50319__auto__);

(statearr_68631[(1)] = (1));

return statearr_68631;
});
var cljs_http$core$xhr_$_state_machine__50319__auto____1 = (function (state_68591){
while(true){
var ret_value__50320__auto__ = (function (){try{while(true){
var result__50321__auto__ = switch__50318__auto__(state_68591);
if(cljs.core.keyword_identical_QMARK_(result__50321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50321__auto__;
}
break;
}
}catch (e68636){var ex__50322__auto__ = e68636;
var statearr_68639_68787 = state_68591;
(statearr_68639_68787[(2)] = ex__50322__auto__);


if(cljs.core.seq((state_68591[(4)]))){
var statearr_68641_68788 = state_68591;
(statearr_68641_68788[(1)] = cljs.core.first((state_68591[(4)])));

} else {
throw ex__50322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68789 = state_68591;
state_68591 = G__68789;
continue;
} else {
return ret_value__50320__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__50319__auto__ = function(state_68591){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__50319__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__50319__auto____1.call(this,state_68591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__50319__auto____0;
cljs_http$core$xhr_$_state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__50319__auto____1;
return cljs_http$core$xhr_$_state_machine__50319__auto__;
})()
})();
var state__50368__auto__ = (function (){var statearr_68654 = f__50367__auto__();
(statearr_68654[(6)] = c__50366__auto___68772);

return statearr_68654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50368__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__68665){
var map__68666 = p__68665;
var map__68666__$1 = cljs.core.__destructure_map(map__68666);
var request = map__68666__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68666__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68666__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68666__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68666__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_68796 = jsonp.send(null,(function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}),(function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
}));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp,new cljs.core.Keyword(null,"request","request",1772954723),req_68796], null));

if(cljs.core.truth_(cancel)){
var c__50366__auto___68801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50367__auto__ = (function (){var switch__50318__auto__ = (function (state_68694){
var state_val_68695 = (state_68694[(1)]);
if((state_val_68695 === (1))){
var state_68694__$1 = state_68694;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68694__$1,(2),cancel);
} else {
if((state_val_68695 === (2))){
var inst_68689 = (state_68694[(2)]);
var inst_68690 = jsonp.cancel(req_68796);
var state_68694__$1 = (function (){var statearr_68709 = state_68694;
(statearr_68709[(7)] = inst_68689);

return statearr_68709;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_68694__$1,inst_68690);
} else {
return null;
}
}
});
return (function() {
var cljs_http$core$jsonp_$_state_machine__50319__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__50319__auto____0 = (function (){
var statearr_68713 = [null,null,null,null,null,null,null,null];
(statearr_68713[(0)] = cljs_http$core$jsonp_$_state_machine__50319__auto__);

(statearr_68713[(1)] = (1));

return statearr_68713;
});
var cljs_http$core$jsonp_$_state_machine__50319__auto____1 = (function (state_68694){
while(true){
var ret_value__50320__auto__ = (function (){try{while(true){
var result__50321__auto__ = switch__50318__auto__(state_68694);
if(cljs.core.keyword_identical_QMARK_(result__50321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50321__auto__;
}
break;
}
}catch (e68719){var ex__50322__auto__ = e68719;
var statearr_68722_68802 = state_68694;
(statearr_68722_68802[(2)] = ex__50322__auto__);


if(cljs.core.seq((state_68694[(4)]))){
var statearr_68725_68805 = state_68694;
(statearr_68725_68805[(1)] = cljs.core.first((state_68694[(4)])));

} else {
throw ex__50322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68806 = state_68694;
state_68694 = G__68806;
continue;
} else {
return ret_value__50320__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__50319__auto__ = function(state_68694){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__50319__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__50319__auto____1.call(this,state_68694);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__50319__auto____0;
cljs_http$core$jsonp_$_state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__50319__auto____1;
return cljs_http$core$jsonp_$_state_machine__50319__auto__;
})()
})();
var state__50368__auto__ = (function (){var statearr_68729 = f__50367__auto__();
(statearr_68729[(6)] = c__50366__auto___68801);

return statearr_68729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50368__auto__);
}));

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__68748){
var map__68750 = p__68748;
var map__68750__$1 = cljs.core.__destructure_map(map__68750);
var request = map__68750__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68750__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});

//# sourceMappingURL=cljs_http.core.js.map
