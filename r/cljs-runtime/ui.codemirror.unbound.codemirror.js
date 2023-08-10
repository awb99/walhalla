goog.provide('ui.codemirror.unbound.codemirror');
var module$node_modules$codemirror$lib$codemirror=shadow.js.require("module$node_modules$codemirror$lib$codemirror", {});
var module$node_modules$codemirror$addon$edit$closebrackets=shadow.js.require("module$node_modules$codemirror$addon$edit$closebrackets", {});
var module$node_modules$codemirror$addon$edit$matchbrackets=shadow.js.require("module$node_modules$codemirror$addon$edit$matchbrackets", {});
var module$node_modules$codemirror$addon$hint$show_hint=shadow.js.require("module$node_modules$codemirror$addon$hint$show_hint", {});
var module$node_modules$codemirror$addon$runmode$runmode=shadow.js.require("module$node_modules$codemirror$addon$runmode$runmode", {});
var module$node_modules$codemirror$addon$runmode$colorize=shadow.js.require("module$node_modules$codemirror$addon$runmode$colorize", {});
var module$node_modules$codemirror$mode$clojure$clojure=shadow.js.require("module$node_modules$codemirror$mode$clojure$clojure", {});
var module$node_modules$codemirror$mode$markdown$markdown=shadow.js.require("module$node_modules$codemirror$mode$markdown$markdown", {});
ui.codemirror.unbound.codemirror.create_editor = (function ui$codemirror$unbound$codemirror$create_editor(id,el,opts_js){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui.codemirror.unbound.codemirror",null,25,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["creating codemirror-js id: ",id], null);
}),null)),null,(88),null);

ui.codemirror.unbound.options.ensure_initialized();

var cm = module$node_modules$codemirror$lib$codemirror.fromTextArea(el,opts_js);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ui.codemirror.registry.active_editor_atom,cljs.core.assoc,id,cm);

return cm;
});
ui.codemirror.unbound.codemirror.destroy_editor = (function ui$codemirror$unbound$codemirror$destroy_editor(id){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui.codemirror.unbound.codemirror",null,33,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["destroying codemirror-js id: ",id], null);
}),null)),null,(90),null);

var temp__5802__auto__ = ui.codemirror.registry.get_editor(id);
if(cljs.core.truth_(temp__5802__auto__)){
var cm = temp__5802__auto__;
cm.toTextArea();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ui.codemirror.registry.active_editor_atom,cljs.core.dissoc,id);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"ui.codemirror.unbound.codemirror",null,37,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Could not kill CodeMirror instance id: ",id], null);
}),null)),null,(91),null);
}
});
ui.codemirror.unbound.codemirror.codemirror_unbound = (function ui$codemirror$unbound$codemirror$codemirror_unbound(id,cm_opts){
var cm_opts__$1 = (function (){var or__5045__auto__ = cm_opts;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.codemirror.unbound.options.cm_default_opts,cm_opts__$1], 0));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var el = reagent.dom.dom_node(this$);
var opts_js = cljs.core.clj__GT_js(opts);
return ui.codemirror.unbound.codemirror.create_editor(id,el,opts_js);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"ui.codemirror.unbound.codemirror",null,56,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cm component-will-unmount"], null);
}),null)),null,(93),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"ui.codemirror.unbound.codemirror",null,57,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["this: ",this$], null);
}),null)),null,(94),null);

return ui.codemirror.unbound.codemirror.destroy_editor(id);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,old_argv){
var vec__54609 = reagent.core.argv(this$);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54609,(0),null);
var id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54609,(1),null);
var opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54609,(2),null);
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui.codemirror.unbound.codemirror",null,63,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component-did-update: id ",id__$1,"opts: ",opts__$1], null);
}),null)),null,(96),null);
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var map__54612 = opts;
var map__54612__$1 = cljs.core.__destructure_map(map__54612);
var readOnly = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54612__$1,new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317));
if(cljs.core.truth_(readOnly)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null);
}
})], null));
});

//# sourceMappingURL=ui.codemirror.unbound.codemirror.js.map
