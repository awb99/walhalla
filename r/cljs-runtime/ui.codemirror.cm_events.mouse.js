goog.provide('ui.codemirror.cm_events.mouse');
ui.codemirror.cm_events.mouse.on_mousedown = (function ui$codemirror$cm_events$mouse$on_mousedown(p__54606,sender,evt){
var map__54615 = p__54606;
var map__54615__$1 = cljs.core.__destructure_map(map__54615);
var context = map__54615__$1;
var cm_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54615__$1,new cljs.core.Keyword(null,"cm-opts","cm-opts",-794223420));
var cm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54615__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54615__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"ui.codemirror.cm-events.mouse",null,8,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["on-mousedown segment-id: ",id], null);
}),null)),null,(99),null);

var c = ui.codemirror.api.position.cursor_coords(cm);
return ui.codemirror.fun.dispatch(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cm","mouse-down","cm/mouse-down",647104313),id,c], null));
});

//# sourceMappingURL=ui.codemirror.cm_events.mouse.js.map
