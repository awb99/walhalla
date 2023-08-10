goog.provide('ui.codemirror.cm_events.key');
ui.codemirror.cm_events.key.arrow_up = (function ui$codemirror$cm_events$key$arrow_up(p__54618,e){
var map__54619 = p__54618;
var map__54619__$1 = cljs.core.__destructure_map(map__54619);
var context = map__54619__$1;
var cm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54619__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54619__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fun = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54619__$1,new cljs.core.Keyword(null,"fun","fun",-1265158045));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"ui.codemirror.cm-events.key",null,9,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["arrow-up context: %s",context], null);
}),null)),null,(101),null);

if(ui.codemirror.api.position.first_line_QMARK_(cm)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"ui.codemirror.cm-events.key",null,11,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["up on first-line!"], null);
}),null)),null,(102),null);

e.preventDefault();

return ui.codemirror.fun.dispatch(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cm","move","cm/move",-2110887471),id,new cljs.core.Keyword(null,"up","up",-269712113)], null));
} else {
return null;
}
});
ui.codemirror.cm_events.key.arrow_down = (function ui$codemirror$cm_events$key$arrow_down(p__54620,e){
var map__54621 = p__54620;
var map__54621__$1 = cljs.core.__destructure_map(map__54621);
var context = map__54621__$1;
var cm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54621__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54621__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fun = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54621__$1,new cljs.core.Keyword(null,"fun","fun",-1265158045));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"ui.codemirror.cm-events.key",null,16,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["arrow-down context: %s",context], null);
}),null)),null,(103),null);

if(ui.codemirror.api.position.last_line_QMARK_(cm)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"ui.codemirror.cm-events.key",null,18,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["down on last-line!"], null);
}),null)),null,(104),null);

e.preventDefault();

return ui.codemirror.fun.dispatch(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cm","move","cm/move",-2110887471),id,new cljs.core.Keyword(null,"down","down",1565245570)], null));
} else {
return null;
}
});
ui.codemirror.cm_events.key.on_key_up = (function ui$codemirror$cm_events$key$on_key_up(p__54623,_,evt){
var map__54624 = p__54623;
var map__54624__$1 = cljs.core.__destructure_map(map__54624);
var context = map__54624__$1;
var cm_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54624__$1,new cljs.core.Keyword(null,"cm-opts","cm-opts",-794223420));
var cm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54624__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"ui.codemirror.cm-events.key",null,44,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["key-up:",evt.keyCode], null);
}),null)),null,(105),null);
});
ui.codemirror.cm_events.key.on_key_down = (function ui$codemirror$cm_events$key$on_key_down(p__54627,_,evt){
var map__54628 = p__54627;
var map__54628__$1 = cljs.core.__destructure_map(map__54628);
var context = map__54628__$1;
var cm_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54628__$1,new cljs.core.Keyword(null,"cm-opts","cm-opts",-794223420));
var cm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54628__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"ui.codemirror.cm-events.key",null,47,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["key-down: %s cm: %s",evt.keyCode,cm], null);
}),null)),null,(106),null);

var G__54629 = evt.keyCode;
switch (G__54629) {
case (38):
return ui.codemirror.cm_events.key.arrow_up(context,evt);

break;
case (40):
return ui.codemirror.cm_events.key.arrow_down(context,evt);

break;
case (9):
if(cljs.core.not(evt.shiftKey)){
return ui.codemirror.cm_js.completion.hint(context,evt);
} else {
return null;
}

break;
default:
return new cljs.core.Keyword(null,"none","none",1333468478);

}
});

//# sourceMappingURL=ui.codemirror.cm_events.key.js.map
