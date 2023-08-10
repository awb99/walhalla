goog.provide('modular.encoding.edn');
/**
 * A default reader, for when we don't know what's coming in.
 */
modular.encoding.edn.default_reader = (function modular$encoding$edn$default_reader(t,v){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),t,new cljs.core.Keyword(null,"value","value",305978217),v], null);
});
modular.encoding.edn.data_readers = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([modular.encoding.bidi.bidi_edn_tag,time_literals.read_write.tags], 0));
modular.encoding.edn.read_edn = (function modular$encoding$edn$read_edn(s){
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),modular.encoding.edn.default_reader,new cljs.core.Keyword(null,"readers","readers",-2118263030),modular.encoding.edn.data_readers], null),s);
});
time_literals.read_write.print_time_literals_cljs_BANG_();
modular.encoding.edn.pr_str_with_meta = (function modular$encoding$edn$pr_str_with_meta(data){
var _STAR_print_meta_STAR__orig_val__58587 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_meta_STAR__temp_val__58588 = true;
(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__58588);

try{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__58587);
}});

//# sourceMappingURL=modular.encoding.edn.js.map
