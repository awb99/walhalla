goog.provide('ui.codemirror.unbound.options');
var module$node_modules$codemirror$lib$codemirror=shadow.js.require("module$node_modules$codemirror$lib$codemirror", {});
ui.codemirror.unbound.options.cm_default_opts = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"keyMap","keyMap",945500512),new cljs.core.Keyword(null,"lineWrapping","lineWrapping",1248501985),new cljs.core.Keyword(null,"matchBrackets","matchBrackets",1256448936),new cljs.core.Keyword(null,"showCursorWhenSelecting","showCursorWhenSelecting",169880137),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"extraKeys","extraKeys",1380834830),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"readOnly","readOnly",-1749118317),new cljs.core.Keyword(null,"autofocus","autofocus",-712814732),new cljs.core.Keyword(null,"firstLineNumber","firstLineNumber",-327461640),new cljs.core.Keyword(null,"lineNumbers","lineNumbers",1374890941),new cljs.core.Keyword(null,"autoCloseBrackets","autoCloseBrackets",1157493311)],["gorilla",true,true,true,"clojure",({}),"mdn-like",false,false,(1),true,"()[]{}\"\""]);
ui.codemirror.unbound.options.cm_keybindings = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"Shift-Enter","Shift-Enter",-572682192),"doNothing",new cljs.core.Keyword(null,"Shift-Ctrl-Enter","Shift-Ctrl-Enter",675106862),"doNothing",new cljs.core.Keyword(null,"Shift-Alt-Enter","Shift-Alt-Enter",1366734923),"doNothing",new cljs.core.Keyword(null,"fallthrough","fallthrough",567425038),"default"], null);
/**
 * Initialize CodeMirror globally
 */
ui.codemirror.unbound.options.configure_cm_globally_BANG_ = (function ui$codemirror$unbound$options$configure_cm_globally_BANG_(){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"ui.codemirror.unbound.options",null,44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Configure Code Mirror globally"], null);
}),null)),null,(84),null);

var cm_commands = module$node_modules$codemirror$lib$codemirror.commands;
var cm_keymap = module$node_modules$codemirror$lib$codemirror.keyMap;
if(cljs.core.truth_(cm_commands)){
(cm_commands["doNothing"] = (function (){
return cljs.core.List.EMPTY;
}));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"ui.codemirror.unbound.options",null,49,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["could not set codemirror commands!"], null);
}),null)),null,(85),null);
}

if(cljs.core.truth_(cm_keymap)){
(cm_keymap["gorilla"] = cljs.core.clj__GT_js(ui.codemirror.unbound.options.cm_keybindings));
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"ui.codemirror.unbound.options",null,52,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["could not set codemirror keymap!"], null);
}),null)),null,(86),null);
}

return null;
});
if((typeof ui !== 'undefined') && (typeof ui.codemirror !== 'undefined') && (typeof ui.codemirror.unbound !== 'undefined') && (typeof ui.codemirror.unbound.options !== 'undefined') && (typeof ui.codemirror.unbound.options.needs_init !== 'undefined')){
} else {
ui.codemirror.unbound.options.needs_init = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
}
ui.codemirror.unbound.options.ensure_initialized = (function ui$codemirror$unbound$options$ensure_initialized(){
if(cljs.core.truth_(cljs.core.deref(ui.codemirror.unbound.options.needs_init))){
ui.codemirror.unbound.options.configure_cm_globally_BANG_();

cljs.core.reset_BANG_(ui.codemirror.unbound.options.needs_init,false);
} else {
}

return null;
});

//# sourceMappingURL=ui.codemirror.unbound.options.js.map
