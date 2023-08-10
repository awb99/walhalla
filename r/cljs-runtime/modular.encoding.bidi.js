goog.provide('modular.encoding.bidi');
modular.encoding.bidi.write_handlers2 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"bidi.bidi.TaggedMatch","bidi.bidi.TaggedMatch",600913065,null),(function (bar){
return bar;
})], null));
modular.encoding.bidi.read_handlers2 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"bidi.bidi.TaggedMatch","bidi.bidi.TaggedMatch",600913065,null),bidi.bidi.map__GT_TaggedMatch], null));
modular.encoding.bidi.bidi_serialization_handlers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.PersistentArrayMap.createAsIfByAssoc([bidi.bidi.TaggedMatch,incognito.transit.incognito_write_handler(modular.encoding.bidi.write_handlers2)])], null);
modular.encoding.bidi.bidi_deserialization_handlers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentArrayMap(null, 1, ["incognito",incognito.transit.incognito_read_handler(modular.encoding.bidi.read_handlers2)], null)], null);
modular.encoding.bidi.bidi_edn_tag = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"bidi.bidi.TaggedMatch","bidi.bidi.TaggedMatch",600913065,null),bidi.bidi.map__GT_TaggedMatch], null);
modular.encoding.bidi.demo_bidi_tag = bidi.bidi.tag(new cljs.core.Keyword("demo","job","demo/job",847531284),new cljs.core.Keyword(null,"wunderbar","wunderbar",-1992952018));

//# sourceMappingURL=modular.encoding.bidi.js.map
