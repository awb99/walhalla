goog.provide('reval.type.cljs');
(reval.type.protocol.hiccup_convertable["_"] = true);

(reval.type.protocol.to_hiccup["_"] = (function (self){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-red-500","div.bg-red-500",-1260745041),"unknown type: ",cljs.core.type(self),reval.type.ui.simplevalue.simplevalue__GT_hiccup(self,"clj-unknown")], null);
}));
(reval.type.protocol.hiccup_convertable["null"] = true);

(reval.type.protocol.to_hiccup["null"] = (function (self){
return reval.type.ui.simplevalue.simplevalue__GT_hiccup(self,"clj-nil");
}));
(cljs.core.Keyword.prototype.reval$type$protocol$hiccup_convertable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.reval$type$protocol$hiccup_convertable$to_hiccup$arity$1 = (function (self){
var self__$1 = this;
return reval.type.ui.simplevalue.simplevalue__GT_hiccup(self__$1,"clj-keyword");
}));
(cljs.core.Symbol.prototype.reval$type$protocol$hiccup_convertable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.reval$type$protocol$hiccup_convertable$to_hiccup$arity$1 = (function (self){
var self__$1 = this;
return reval.type.ui.simplevalue.simplevalue__GT_hiccup(self__$1,"clj-symbol");
}));
(reval.type.protocol.hiccup_convertable["string"] = true);

(reval.type.protocol.to_hiccup["string"] = (function (self){
return reval.type.ui.simplevalue.simplevalue__GT_hiccup(self,"clj-string");
}));
(reval.type.protocol.hiccup_convertable["number"] = true);

(reval.type.protocol.to_hiccup["number"] = (function (self){
return reval.type.ui.simplevalue.simplevalue__GT_hiccup(self,"clj-long");
}));
(reval.type.protocol.hiccup_convertable["boolean"] = true);

(reval.type.protocol.to_hiccup["boolean"] = (function (self){
return reval.type.ui.simplevalue.simplevalue__GT_hiccup(self,"clj-boolean");
}));
(cljs.core.MapEntry.prototype.reval$type$protocol$hiccup_convertable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.MapEntry.prototype.reval$type$protocol$hiccup_convertable$to_hiccup$arity$1 = (function (self){
var self__$1 = this;
return reval.type.ui.list.list__GT_hiccup(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"clj-vector",new cljs.core.Keyword(null,"open","open",-1763596448),"[",new cljs.core.Keyword(null,"close","close",1835149582),"]",new cljs.core.Keyword(null,"separator","separator",-1628749125),", "], null),self__$1);
}));
(cljs.core.LazySeq.prototype.reval$type$protocol$hiccup_convertable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.reval$type$protocol$hiccup_convertable$to_hiccup$arity$1 = (function (self){
var self__$1 = this;
return reval.type.ui.list.list__GT_hiccup(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"clj-lazy-seq",new cljs.core.Keyword(null,"open","open",-1763596448),"(",new cljs.core.Keyword(null,"close","close",1835149582),")",new cljs.core.Keyword(null,"separator","separator",-1628749125)," "], null),self__$1);
}));
(cljs.core.IntegerRange.prototype.reval$type$protocol$hiccup_convertable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.IntegerRange.prototype.reval$type$protocol$hiccup_convertable$to_hiccup$arity$1 = (function (self){
var self__$1 = this;
return reval.type.ui.list.list__GT_hiccup(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"clj-int-range",new cljs.core.Keyword(null,"open","open",-1763596448),"(",new cljs.core.Keyword(null,"close","close",1835149582),")",new cljs.core.Keyword(null,"separator","separator",-1628749125)," "], null),self__$1);
}));
(cljs.core.PersistentVector.prototype.reval$type$protocol$hiccup_convertable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.reval$type$protocol$hiccup_convertable$to_hiccup$arity$1 = (function (self){
var self__$1 = this;
return reval.type.ui.list.list__GT_hiccup(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"clj-vector",new cljs.core.Keyword(null,"open","open",-1763596448),"[",new cljs.core.Keyword(null,"close","close",1835149582),"]",new cljs.core.Keyword(null,"separator","separator",-1628749125)," "], null),self__$1);
}));
(cljs.core.List.prototype.reval$type$protocol$hiccup_convertable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.List.prototype.reval$type$protocol$hiccup_convertable$to_hiccup$arity$1 = (function (self){
var self__$1 = this;
return reval.type.ui.list.list__GT_hiccup(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"clj-list",new cljs.core.Keyword(null,"open","open",-1763596448),"(",new cljs.core.Keyword(null,"close","close",1835149582),")",new cljs.core.Keyword(null,"separator","separator",-1628749125)," "], null),self__$1);
}));
(cljs.core.PersistentHashSet.prototype.reval$type$protocol$hiccup_convertable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.reval$type$protocol$hiccup_convertable$to_hiccup$arity$1 = (function (self){
var self__$1 = this;
return reval.type.ui.list.list__GT_hiccup(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"clj-set",new cljs.core.Keyword(null,"open","open",-1763596448),"#{",new cljs.core.Keyword(null,"close","close",1835149582),"}",new cljs.core.Keyword(null,"separator","separator",-1628749125)," "], null),self__$1);
}));
(cljs.core.PersistentArrayMap.prototype.reval$type$protocol$hiccup_convertable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.reval$type$protocol$hiccup_convertable$to_hiccup$arity$1 = (function (self){
var self__$1 = this;
return reval.type.ui.list.map__GT_hiccup(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),"clj-map",new cljs.core.Keyword(null,"open","open",-1763596448),"{",new cljs.core.Keyword(null,"close","close",1835149582),"}",new cljs.core.Keyword(null,"separator","separator",-1628749125)," "], null),self__$1);
}));

//# sourceMappingURL=reval.type.cljs.js.map
