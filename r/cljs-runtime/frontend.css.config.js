goog.provide('frontend.css.config');
frontend.css.config.link_css = (function frontend$css$config$link_css(prefix,link){
if(((clojure.string.starts_with_QMARK_(link,"http")) || (clojure.string.starts_with_QMARK_(link,"/")))){
return link;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(link)].join('');
}
});
frontend.css.config.css_component = (function frontend$css$config$css_component(prefix,available,component_kw,component_theme){
var component_theme__$1 = (function (){var or__5045__auto__ = component_theme;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return false;
}
})();
var get_theme = (function (theme){
var or__5045__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(available,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component_kw,theme], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
var links = (function (){var G__44878 = component_theme__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__44878)){
return cljs.core.PersistentVector.EMPTY;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,G__44878)){
return get_theme(true);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(get_theme(true),get_theme(component_theme__$1));

}
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.css.config.link_css,prefix),links));
});
frontend.css.config.css_app = (function frontend$css$config$css_app(prefix,available,current){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__44888){
var vec__44889 = p__44888;
var kw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44889,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44889,(1),null);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(acc,frontend.css.config.css_component(prefix,available,kw,v));
}),cljs.core.PersistentVector.EMPTY,current));
});

//# sourceMappingURL=frontend.css.config.js.map
