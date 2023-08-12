goog.provide('modular.oauth2.protocol');
if((typeof modular !== 'undefined') && (typeof modular.oauth2 !== 'undefined') && (typeof modular.oauth2.protocol !== 'undefined') && (typeof modular.oauth2.protocol.provider_config !== 'undefined')){
} else {
modular.oauth2.protocol.provider_config = (function (){var method_table__5642__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__39839 = cljs.core.get_global_hierarchy;
return (fexpr__39839.cljs$core$IFn$_invoke$arity$0 ? fexpr__39839.cljs$core$IFn$_invoke$arity$0() : fexpr__39839.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("modular.oauth2.protocol","provider-config"),(function (type){
return type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}
modular.oauth2.protocol.provider_config.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
modular.oauth2.protocol.known_providers = (function modular$oauth2$protocol$known_providers(){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__39845_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),p1__39845_SHARP_);
}),cljs.core.keys(cljs.core.methods$(modular.oauth2.protocol.provider_config))));
});

//# sourceMappingURL=modular.oauth2.protocol.js.map
