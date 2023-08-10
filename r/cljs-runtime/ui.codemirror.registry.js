goog.provide('ui.codemirror.registry');
if((typeof ui !== 'undefined') && (typeof ui.codemirror !== 'undefined') && (typeof ui.codemirror.registry !== 'undefined') && (typeof ui.codemirror.registry.active_editor_atom !== 'undefined')){
} else {
ui.codemirror.registry.active_editor_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
ui.codemirror.registry.get_editor = (function ui$codemirror$registry$get_editor(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(ui.codemirror.registry.active_editor_atom),id);
});

//# sourceMappingURL=ui.codemirror.registry.js.map
