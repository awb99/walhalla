goog.provide('ui.codemirror.api.position');
ui.codemirror.api.position.cursor_position = (function ui$codemirror$api$position$cursor_position(cm){
var pos = cm.getCursor();
var line = pos.line;
var ch = pos.ch;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"col","col",-1959363084),ch], null);
});
ui.codemirror.api.position.move_to_last_line = (function ui$codemirror$api$position$move_to_last_line(cm){
var last_line = cm.lastLine();
var last_ch = cljs.core.count(cm.getLine(last_line));
return cm.setCursor(last_line,last_ch);
});
ui.codemirror.api.position.first_line_number = (function ui$codemirror$api$position$first_line_number(cm){
return cm.firstLine();
});
ui.codemirror.api.position.last_line_number = (function ui$codemirror$api$position$last_line_number(cm){
return cm.lastLine();
});
ui.codemirror.api.position.current_line_number = (function ui$codemirror$api$position$current_line_number(cm){
var pos = cm.getCursor();
return pos.line;
});
ui.codemirror.api.position.first_line_QMARK_ = (function ui$codemirror$api$position$first_line_QMARK_(cm){
var f = ui.codemirror.api.position.first_line_number(cm);
var c = ui.codemirror.api.position.current_line_number(cm);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(f,c);
});
ui.codemirror.api.position.last_line_QMARK_ = (function ui$codemirror$api$position$last_line_QMARK_(cm){
var l = ui.codemirror.api.position.last_line_number(cm);
var c = ui.codemirror.api.position.current_line_number(cm);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(l,c);
});
ui.codemirror.api.position.cursor_coords = (function ui$codemirror$api$position$cursor_coords(cm){
var pos = cm.getCursor();
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(cm.cursorCoords());
});

//# sourceMappingURL=ui.codemirror.api.position.js.map
