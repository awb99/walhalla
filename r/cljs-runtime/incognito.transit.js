goog.provide('incognito.transit');

/**
* @constructor
*/
incognito.transit.IncognitoTaggedLiteralHandler = (function (write_handlers,map_handler){
this.write_handlers = write_handlers;
this.map_handler = map_handler;
});
(incognito.transit.IncognitoTaggedLiteralHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
if((!(((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(v),cljs.core.PersistentArrayMap)) || (((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(v),cljs.core.PersistentHashMap)) || (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(v),cljs.core.PersistentTreeMap)))))))){
return "incognito";
} else {
return self__.map_handler.tag(v);
}
}));

(incognito.transit.IncognitoTaggedLiteralHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
if((!(((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(v),cljs.core.PersistentArrayMap)) || (((cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(v),cljs.core.PersistentHashMap)) || (cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(v),cljs.core.PersistentTreeMap)))))))){
if(cljs.core.isa_QMARK_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(v),incognito.base.IncognitoTaggedLiteral)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,v);
} else {
return incognito.base.incognito_writer(cljs.core.deref(self__.write_handlers),v);
}
} else {
return self__.map_handler.rep(v);
}
}));

(incognito.transit.IncognitoTaggedLiteralHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return null;
}));

(incognito.transit.IncognitoTaggedLiteralHandler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"write-handlers","write-handlers",-456757384,null),new cljs.core.Symbol(null,"map-handler","map-handler",-989481679,null)], null);
}));

(incognito.transit.IncognitoTaggedLiteralHandler.cljs$lang$type = true);

(incognito.transit.IncognitoTaggedLiteralHandler.cljs$lang$ctorStr = "incognito.transit/IncognitoTaggedLiteralHandler");

(incognito.transit.IncognitoTaggedLiteralHandler.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"incognito.transit/IncognitoTaggedLiteralHandler");
}));

/**
 * Positional factory function for incognito.transit/IncognitoTaggedLiteralHandler.
 */
incognito.transit.__GT_IncognitoTaggedLiteralHandler = (function incognito$transit$__GT_IncognitoTaggedLiteralHandler(write_handlers,map_handler){
return (new incognito.transit.IncognitoTaggedLiteralHandler(write_handlers,map_handler));
});

incognito.transit.incognito_write_handler = (function incognito$transit$incognito_write_handler(write_handlers){
return (new incognito.transit.IncognitoTaggedLiteralHandler(write_handlers,(new cognitect.transit.MapHandler())));
});
incognito.transit.incognito_read_handler = (function incognito$transit$incognito_read_handler(read_handlers){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(incognito.base.incognito_reader,cljs.core.deref(read_handlers));
});

//# sourceMappingURL=incognito.transit.js.map
