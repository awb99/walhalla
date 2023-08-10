goog.provide('frontend.keybindings.init');
frontend.keybindings.init.current = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
frontend.keybindings.init.id = (function frontend$keybindings$init$id(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(frontend.keybindings.init.current,cljs.core.inc);

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.keybindings.init.current)));
});
frontend.keybindings.init.current_scope = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
frontend.keybindings.init.reframe_handler = (function frontend$keybindings$init$reframe_handler(p__44901,evt){
var map__44903 = p__44901;
var map__44903__$1 = cljs.core.__destructure_map(map__44903);
var keybinding = map__44903__$1;
var kb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44903__$1,new cljs.core.Keyword(null,"kb","kb",1183038587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44903__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44903__$1,new cljs.core.Keyword(null,"scope","scope",-439358418));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.keybindings.init",null,16,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keybinding triggered scope: ",scope,"handler: ",handler," evt: ",evt], null);
}),null)),null,(138),null);

if((((scope == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(scope,cljs.core.deref(frontend.keybindings.init.current_scope))))){
re_frame.core.dispatch(handler);

return evt.preventDefault();
} else {
return null;
}
});
frontend.keybindings.init.BINDINGS = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Binds a sequence of button presses, specified by `spec`, to `cb` when
 *   pressed. Keys must be unique per `spec`, and can be used to remove keybinding
 *   with `unbind!`.
 *   `spec` format is emacs-like strings a-la "ctrl-c k", "meta-shift-k", etc.
 */
frontend.keybindings.init.bind_key = (function frontend$keybindings$init$bind_key(p__44909){
var map__44910 = p__44909;
var map__44910__$1 = cljs.core.__destructure_map(map__44910);
var keybinding = map__44910__$1;
var kb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44910__$1,new cljs.core.Keyword(null,"kb","kb",1183038587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44910__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var scope = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44910__$1,new cljs.core.Keyword(null,"scope","scope",-439358418));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"frontend.keybindings.init",null,30,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["binding %s to %s",kb,handler], null);
}),null)),null,(139),null);

return keybind.core.bind_BANG_(kb,frontend.keybindings.init.id(),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(frontend.keybindings.init.reframe_handler,keybinding));
});
frontend.keybindings.init.init_keybindings_BANG_ = (function frontend$keybindings$init$init_keybindings_BANG_(keybindings){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.keybindings.init",null,37,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["registering %s keybindings..",cljs.core.count(keybindings)], null);
}),null)),null,(144),null);

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function frontend$keybindings$init$init_keybindings_BANG__$_iter__44927(s__44928){
return (new cljs.core.LazySeq(null,(function (){
var s__44928__$1 = s__44928;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__44928__$1);
if(temp__5804__auto__){
var s__44928__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__44928__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__44928__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__44930 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__44929 = (0);
while(true){
if((i__44929 < size__5522__auto__)){
var kb = cljs.core._nth(c__5521__auto__,i__44929);
cljs.core.chunk_append(b__44930,frontend.keybindings.init.bind_key(kb));

var G__44948 = (i__44929 + (1));
i__44929 = G__44948;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__44930),frontend$keybindings$init$init_keybindings_BANG__$_iter__44927(cljs.core.chunk_rest(s__44928__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__44930),null);
}
} else {
var kb = cljs.core.first(s__44928__$2);
return cljs.core.cons(frontend.keybindings.init.bind_key(kb),frontend$keybindings$init$init_keybindings_BANG__$_iter__44927(cljs.core.rest(s__44928__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(keybindings);
})());
});
goog.exportSymbol('frontend.keybindings.init.init_keybindings_BANG_', frontend.keybindings.init.init_keybindings_BANG_);

//# sourceMappingURL=frontend.keybindings.init.js.map
