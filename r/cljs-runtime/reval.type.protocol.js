goog.provide('reval.type.protocol');

/**
 * @interface
 */
reval.type.protocol.hiccup_convertable = function(){};

var reval$type$protocol$hiccup_convertable$to_hiccup$dyn_51165 = (function (self){
var x__5393__auto__ = (((self == null))?null:self);
var m__5394__auto__ = (reval.type.protocol.to_hiccup[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(self) : m__5394__auto__.call(null,self));
} else {
var m__5392__auto__ = (reval.type.protocol.to_hiccup["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(self) : m__5392__auto__.call(null,self));
} else {
throw cljs.core.missing_protocol("hiccup-convertable.to-hiccup",self);
}
}
});
reval.type.protocol.to_hiccup = (function reval$type$protocol$to_hiccup(self){
if((((!((self == null)))) && ((!((self.reval$type$protocol$hiccup_convertable$to_hiccup$arity$1 == null)))))){
return self.reval$type$protocol$hiccup_convertable$to_hiccup$arity$1(self);
} else {
return reval$type$protocol$hiccup_convertable$to_hiccup$dyn_51165(self);
}
});


/**
 * @interface
 */
reval.type.protocol.hiccup_convertable_reproduceable = function(){};

var reval$type$protocol$hiccup_convertable_reproduceable$to_hiccup_reproduceable$dyn_51166 = (function (ns,self){
var x__5393__auto__ = (((ns == null))?null:ns);
var m__5394__auto__ = (reval.type.protocol.to_hiccup_reproduceable[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(ns,self) : m__5394__auto__.call(null,ns,self));
} else {
var m__5392__auto__ = (reval.type.protocol.to_hiccup_reproduceable["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(ns,self) : m__5392__auto__.call(null,ns,self));
} else {
throw cljs.core.missing_protocol("hiccup-convertable-reproduceable.to-hiccup-reproduceable",ns);
}
}
});
reval.type.protocol.to_hiccup_reproduceable = (function reval$type$protocol$to_hiccup_reproduceable(ns,self){
if((((!((ns == null)))) && ((!((ns.reval$type$protocol$hiccup_convertable_reproduceable$to_hiccup_reproduceable$arity$2 == null)))))){
return ns.reval$type$protocol$hiccup_convertable_reproduceable$to_hiccup_reproduceable$arity$2(ns,self);
} else {
return reval$type$protocol$hiccup_convertable_reproduceable$to_hiccup_reproduceable$dyn_51166(ns,self);
}
});


//# sourceMappingURL=reval.type.protocol.js.map
