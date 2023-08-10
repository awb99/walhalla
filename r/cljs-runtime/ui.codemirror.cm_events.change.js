goog.provide('ui.codemirror.cm_events.change');
ui.codemirror.cm_events.change.editor_load_content = (function ui$codemirror$cm_events$change$editor_load_content(cm,content){
return cm.setValue(content);
});
ui.codemirror.cm_events.change.on_change = (function ui$codemirror$cm_events$change$on_change(p__54607,sender,evt){
var map__54608 = p__54607;
var map__54608__$1 = cljs.core.__destructure_map(map__54608);
var context = map__54608__$1;
var cm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54608__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54608__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var code = cm.getValue();
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"ui.codemirror.cm-events.change",null,16,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["saving cm text id: %s",id], null);
}),null)),null,(92),null);

return ui.codemirror.fun.save_data(context,code);
});

//# sourceMappingURL=ui.codemirror.cm_events.change.js.map
