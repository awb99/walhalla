goog.provide('pinkie.html');
pinkie.html.temp_comp_hack = (function pinkie$html$temp_comp_hack(no_kw){
if(cljs.core.truth_(no_kw)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.first(no_kw))], null),cljs.core.rest(no_kw));
} else {
return null;
}
});
/**
 * Setting innerHTML (dangerouslySetInnerHTML) or textContent does not
 *  execute scripts! Thats why we clone and replace the elements.
 */
pinkie.html.process_scripts_BANG_ = (function pinkie$html$process_scripts_BANG_(el){
var scripts = Array.from(el.getElementsByTagName("SCRIPT"));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (script){
var newScript = (function (){var G__48393 = document.createElement("script");
(G__48393["textContent"] = script.textContent);

return G__48393;
})();
var temp__5802__auto___48412 = script.getAttribute("src");
if(cljs.core.truth_(temp__5802__auto___48412)){
var src_48413 = temp__5802__auto___48412;
newScript.setAttribute("src",src_48413);
} else {
}

return script.replaceWith(newScript);
}),scripts));
});
/**
 * inject html string to reagent. allows script injection
 */
pinkie.html.html = (function pinkie$html$html(html){
if(typeof html === 'string'){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"htmlwrapper",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return pinkie.html.process_scripts_BANG_(reagent.dom.dom_node(this$));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),html], null)], null)], null);
})], null));
} else {
return null;
}
});

//# sourceMappingURL=pinkie.html.js.map
