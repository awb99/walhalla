goog.provide('pinkie.text');
pinkie.text.line_with_br = (function pinkie$text$line_with_br(t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.font-mono.text-lg.whitespace-pre","span.font-mono.text-lg.whitespace-pre",-559173342),t], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null);
});
/**
 * Render text (as string) to html
 * works with \n (newlines)
 * Needed because \n is meaningless in html
 */
pinkie.text.text = (function pinkie$text$text(t){
var lines = clojure.string.split.cljs$core$IFn$_invoke$arity$2(t,/\n/);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gorilla_ui","gorilla_ui",-568848226),"text"], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(pinkie.text.line_with_br,lines));
});

//# sourceMappingURL=pinkie.text.js.map
