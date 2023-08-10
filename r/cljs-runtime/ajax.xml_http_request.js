goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__47456 = e.target.readyState;
var fexpr__47455 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__47455.cljs$core$IFn$_invoke$arity$1 ? fexpr__47455.cljs$core$IFn$_invoke$arity$1(G__47456) : fexpr__47455.call(null,G__47456));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__47471,handler){
var map__47472 = p__47471;
var map__47472__$1 = cljs.core.__destructure_map(map__47472);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47472__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47472__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47472__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47472__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47472__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__47472__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47472__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__47465_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__47465_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5804__auto___47530 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5804__auto___47530)){
var response_type_47531 = temp__5804__auto___47530;
(this$__$1.responseType = cljs.core.name(response_type_47531));
} else {
}

var seq__47483_47532 = cljs.core.seq(headers);
var chunk__47484_47533 = null;
var count__47485_47534 = (0);
var i__47486_47535 = (0);
while(true){
if((i__47486_47535 < count__47485_47534)){
var vec__47503_47536 = chunk__47484_47533.cljs$core$IIndexed$_nth$arity$2(null,i__47486_47535);
var k_47537 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47503_47536,(0),null);
var v_47538 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47503_47536,(1),null);
this$__$1.setRequestHeader(k_47537,v_47538);


var G__47539 = seq__47483_47532;
var G__47540 = chunk__47484_47533;
var G__47541 = count__47485_47534;
var G__47542 = (i__47486_47535 + (1));
seq__47483_47532 = G__47539;
chunk__47484_47533 = G__47540;
count__47485_47534 = G__47541;
i__47486_47535 = G__47542;
continue;
} else {
var temp__5804__auto___47543 = cljs.core.seq(seq__47483_47532);
if(temp__5804__auto___47543){
var seq__47483_47544__$1 = temp__5804__auto___47543;
if(cljs.core.chunked_seq_QMARK_(seq__47483_47544__$1)){
var c__5568__auto___47545 = cljs.core.chunk_first(seq__47483_47544__$1);
var G__47546 = cljs.core.chunk_rest(seq__47483_47544__$1);
var G__47547 = c__5568__auto___47545;
var G__47548 = cljs.core.count(c__5568__auto___47545);
var G__47549 = (0);
seq__47483_47532 = G__47546;
chunk__47484_47533 = G__47547;
count__47485_47534 = G__47548;
i__47486_47535 = G__47549;
continue;
} else {
var vec__47510_47550 = cljs.core.first(seq__47483_47544__$1);
var k_47551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47510_47550,(0),null);
var v_47552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47510_47550,(1),null);
this$__$1.setRequestHeader(k_47551,v_47552);


var G__47554 = cljs.core.next(seq__47483_47544__$1);
var G__47555 = null;
var G__47556 = (0);
var G__47557 = (0);
seq__47483_47532 = G__47554;
chunk__47484_47533 = G__47555;
count__47485_47534 = G__47556;
i__47486_47535 = G__47557;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5045__auto__ = body;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
