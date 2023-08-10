goog.provide('ui.codemirror.bound.core');
var module$node_modules$codemirror$lib$codemirror=shadow.js.require("module$node_modules$codemirror$lib$codemirror", {});
var module$node_modules$codemirror$addon$edit$closebrackets=shadow.js.require("module$node_modules$codemirror$addon$edit$closebrackets", {});
var module$node_modules$codemirror$addon$edit$matchbrackets=shadow.js.require("module$node_modules$codemirror$addon$edit$matchbrackets", {});
var module$node_modules$codemirror$addon$hint$show_hint=shadow.js.require("module$node_modules$codemirror$addon$hint$show_hint", {});
var module$node_modules$codemirror$addon$runmode$runmode=shadow.js.require("module$node_modules$codemirror$addon$runmode$runmode", {});
var module$node_modules$codemirror$addon$runmode$colorize=shadow.js.require("module$node_modules$codemirror$addon$runmode$colorize", {});
var module$node_modules$codemirror$mode$clojure$clojure=shadow.js.require("module$node_modules$codemirror$mode$clojure$clojure", {});
var module$node_modules$codemirror$mode$markdown$markdown=shadow.js.require("module$node_modules$codemirror$mode$markdown$markdown", {});
ui.codemirror.bound.core.focus_cm_BANG_ = (function ui$codemirror$bound$core$focus_cm_BANG_(cm){
if(cljs.core.truth_(cm)){
return cm.focus();
} else {
return null;
}
});
ui.codemirror.bound.core.blur_cm_BANG_ = (function ui$codemirror$bound$core$blur_cm_BANG_(cm){
if(cljs.core.truth_(cm)){
var input = cm.getInputField();
return input.blur();
} else {
return null;
}
});
ui.codemirror.bound.core.focus_active = (function ui$codemirror$bound$core$focus_active(id,p__54650,cm){
var map__54651 = p__54650;
var map__54651__$1 = cljs.core.__destructure_map(map__54651);
var cm_opts = map__54651__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54651__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var view_only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54651__$1,new cljs.core.Keyword(null,"view-only","view-only",2006764702));
if(cljs.core.truth_((function (){var and__5043__auto__ = active_QMARK_;
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(view_only);
} else {
return and__5043__auto__;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"ui.codemirror.bound.core",null,40,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["focusing cm %s ..",id,"active:",active_QMARK_,"view-only: ",view_only], null);
}),null)),null,(117),null);

return ui.codemirror.bound.core.focus_cm_BANG_(cm);
} else {
return null;
}
});
ui.codemirror.bound.core.blur_inactive = (function ui$codemirror$bound$core$blur_inactive(id,p__54654,cm){
var map__54655 = p__54654;
var map__54655__$1 = cljs.core.__destructure_map(map__54655);
var cm_opts = map__54655__$1;
var active_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54655__$1,new cljs.core.Keyword(null,"active?","active?",459499776));
var view_only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54655__$1,new cljs.core.Keyword(null,"view-only","view-only",2006764702));
if(cljs.core.truth_((function (){var or__5045__auto__ = cljs.core.not(active_QMARK_);
if(or__5045__auto__){
return or__5045__auto__;
} else {
return view_only;
}
})())){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"ui.codemirror.bound.core",null,45,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["blurring cm %s",id,"active:",active_QMARK_,"view-only: ",view_only], null);
}),null)),null,(119),null);

return ui.codemirror.bound.core.blur_cm_BANG_(cm);
} else {
return null;
}
});
ui.codemirror.bound.core.create_editor = (function ui$codemirror$bound$core$create_editor(id,el,opts_js){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui.codemirror.bound.core",null,49,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["creating codemirror-js id: ",id], null);
}),null)),null,(120),null);

ui.codemirror.unbound.options.ensure_initialized();

var cm = module$node_modules$codemirror$lib$codemirror.fromTextArea(el,opts_js);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ui.codemirror.registry.active_editor_atom,cljs.core.assoc,id,cm);

return cm;
});
ui.codemirror.bound.core.destroy_editor = (function ui$codemirror$bound$core$destroy_editor(id){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui.codemirror.bound.core",null,57,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["destroying codemirror-js id: ",id], null);
}),null)),null,(121),null);

var temp__5802__auto__ = ui.codemirror.registry.get_editor(id);
if(cljs.core.truth_(temp__5802__auto__)){
var cm = temp__5802__auto__;
cm.toTextArea();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ui.codemirror.registry.active_editor_atom,cljs.core.dissoc,id);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"ui.codemirror.bound.core",null,61,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Could not kill CodeMirror instance id: ",id], null);
}),null)),null,(122),null);
}
});
/**
 * code-mirror editor
 */
ui.codemirror.bound.core.codemirror_reagent = (function ui$codemirror$bound$core$codemirror_reagent(id,p__54668,cm_opts){
var map__54669 = p__54668;
var map__54669__$1 = cljs.core.__destructure_map(map__54669);
var fun = map__54669__$1;
var get_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54669__$1,new cljs.core.Keyword(null,"get-data","get-data",454586681));
var opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ui.codemirror.unbound.options.cm_default_opts,cm_opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),new cljs.core.Keyword(null,"view-only","view-only",2006764702).cljs$core$IFn$_invoke$arity$1(cm_opts)], null)], 0));
var make_event_handler = (function (f){
return (function (s,evt){
var G__54672 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"cm-opts","cm-opts",-794223420),opts,new cljs.core.Keyword(null,"fun","fun",-1265158045),fun,new cljs.core.Keyword(null,"cm","cm",540591536),ui.codemirror.registry.get_editor(id)], null);
var G__54673 = s;
var G__54674 = evt;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__54672,G__54673,G__54674) : f.call(null,G__54672,G__54673,G__54674));
});
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var el = reagent.dom.dom_node(this$);
var opts_js = cljs.core.clj__GT_js(opts);
var cm_ = ui.codemirror.bound.core.create_editor(id,el,opts_js);
var code = (get_data.cljs$core$IFn$_invoke$arity$1 ? get_data.cljs$core$IFn$_invoke$arity$1(id) : get_data.call(null,id));
cm_.setValue(code);

cm_.on("change",make_event_handler(ui.codemirror.cm_events.change.on_change));

cm_.on("keydown",make_event_handler(ui.codemirror.cm_events.key.on_key_down));

cm_.on("keyup",make_event_handler(ui.codemirror.cm_events.key.on_key_up));

cm_.on("mousedown",make_event_handler(ui.codemirror.cm_events.mouse.on_mousedown));

ui.codemirror.bound.core.blur_inactive(id,opts,cm_);

return ui.codemirror.bound.core.focus_active(id,opts,cm_);
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"ui.codemirror.bound.core",null,104,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cm component-will-unmount"], null);
}),null)),null,(127),null);

return ui.codemirror.bound.core.destroy_editor(id);
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,old_argv){
var vec__54677 = reagent.core.argv(this$);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54677,(0),null);
var id__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54677,(1),null);
var fun__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54677,(2),null);
var opts__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54677,(3),null);
var temp__5804__auto__ = ui.codemirror.registry.get_editor(id__$1);
if(cljs.core.truth_(temp__5804__auto__)){
var cm = temp__5804__auto__;
ui.codemirror.cm_events.change.editor_load_content(cm,(get_data.cljs$core$IFn$_invoke$arity$1 ? get_data.cljs$core$IFn$_invoke$arity$1(id__$1) : get_data.call(null,id__$1)));

ui.codemirror.bound.core.blur_inactive(id__$1,opts__$1,cm);

return ui.codemirror.bound.core.focus_active(id__$1,opts__$1,cm);
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var map__54683 = opts;
var map__54683__$1 = cljs.core.__destructure_map(map__54683);
var readOnly = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54683__$1,new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317));
if(cljs.core.truth_(readOnly)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true], null)], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null);
}
})], null));
});

//# sourceMappingURL=ui.codemirror.bound.core.js.map
