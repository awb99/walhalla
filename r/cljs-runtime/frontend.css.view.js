goog.provide('frontend.css.view');
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webly","status-css","webly/status-css",2120189393),new cljs.core.Keyword(null,"loaded","loaded",-1246482293)], null));
frontend.css.view.load_css = (function frontend$css$view$load_css(){
var configured_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("webly","status-of","webly/status-of",556175399),new cljs.core.Keyword(null,"configured?","configured?",642178633)], null));
var css_links = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("css","app-theme-links","css/app-theme-links",-2052498290)], null));
return (function (){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(configured_QMARK_);
if(cljs.core.truth_(and__5043__auto__)){
return (!(cljs.core.empty_QMARK_(cljs.core.deref(css_links))));
} else {
return and__5043__auto__;
}
})())){
frontend.css.dom.update_css(cljs.core.deref(css_links));
} else {
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.webly-css-loader","div.webly-css-loader",-1281026519)], null);
});
});

//# sourceMappingURL=frontend.css.view.js.map
