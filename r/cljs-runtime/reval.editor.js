goog.provide('reval.editor');
reval.editor.reader_tag_QMARK_ = (function reval$editor$reader_tag_QMARK_(node){
if(cljs.core.truth_(node)){
return (((node instanceof rewrite_clj.node.reader_macro.ReaderMacroNode)) || ((((node instanceof rewrite_clj.node.fn.FnNode)) || ((((node instanceof rewrite_clj.node.quote.QuoteNode)) || ((node instanceof rewrite_clj.node.reader_macro.DerefNode)))))));
} else {
return null;
}
});
reval.editor.in_range_QMARK_ = (function reval$editor$in_range_QMARK_(p__54603,p__54604){
var map__54605 = p__54603;
var map__54605__$1 = cljs.core.__destructure_map(map__54605);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54605__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54605__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var end_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54605__$1,new cljs.core.Keyword(null,"end-row","end-row",-545103581));
var end_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54605__$1,new cljs.core.Keyword(null,"end-col","end-col",-724155879));
var map__54606 = p__54604;
var map__54606__$1 = cljs.core.__destructure_map(map__54606);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54606__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54606__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var and__5043__auto__ = (r >= row);
if(and__5043__auto__){
var and__5043__auto____$1 = (r <= end_row);
if(and__5043__auto____$1){
var and__5043__auto____$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,row))?(c >= col):true);
if(and__5043__auto____$2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(r,end_row)){
return (c <= end_col);
} else {
return true;
}
} else {
return and__5043__auto____$2;
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});
/**
 * Find last node (if more than one node) that is in range of pos and
 *   satisfying the given predicate depth first from initial zipper
 *   location.
 */
reval.editor.find_inners_by_pos = (function reval$editor$find_inners_by_pos(zloc,pos){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54607_SHARP_){
return reval.editor.in_range_QMARK_(cljs.core.meta((rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1(p1__54607_SHARP_) : rewrite_clj.zip.node.call(null,p1__54607_SHARP_))),pos);
}),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(rewrite_clj.zip.move.end_QMARK_),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(rewrite_clj.zip.next,zloc))));
});
reval.editor.filter_forms = (function reval$editor$filter_forms(nodes){
if(cljs.core.truth_(nodes)){
var valid_tag_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"list","list",765357683),null,new cljs.core.Keyword(null,"quote","quote",-262615245),null,new cljs.core.Keyword(null,"set","set",304602554),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null),new cljs.core.Keyword(null,"tag","tag",-1290361223));
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54608){
var vec__54609 = p__54608;
var fst = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54609,(0),null);
var snd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54609,(1),null);
if(cljs.core.truth_(reval.editor.reader_tag_QMARK_(fst))){
return fst;
} else {
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(fst),new cljs.core.Keyword(null,"list","list",765357683));
if(and__5043__auto__){
var and__5043__auto____$1 = snd;
if(cljs.core.truth_(and__5043__auto____$1)){
return reval.editor.reader_tag_QMARK_(snd);
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
})())){
return snd;
} else {
if(cljs.core.truth_(valid_tag_QMARK_(fst))){
return fst;
} else {
return null;
}
}
}
}),cljs.core.partition_all.cljs$core$IFn$_invoke$arity$3((2),(1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rewrite_clj.zip.node,nodes)))));
} else {
return null;
}
});
reval.editor.zip_from_code = (function reval$editor$zip_from_code(code){
var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(code);
var nodes = cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
try{return rewrite_clj.parser.parse(reader);
}catch (e54612){var _ = e54612;
cljs.tools.reader.reader_types.read_char(reader);

return (rewrite_clj.node.whitespace_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.whitespace_node.cljs$core$IFn$_invoke$arity$1(" ") : rewrite_clj.node.whitespace_node.call(null," "));
}}))));
var all_nodes = cljs.core.with_meta((rewrite_clj.node.forms_node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.forms_node.cljs$core$IFn$_invoke$arity$1(nodes) : rewrite_clj.node.forms_node.call(null,nodes)),cljs.core.meta(cljs.core.first(nodes)));
return rewrite_clj.zip.base.edn(all_nodes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"track-position?","track-position?",1860535489),true], null));
});
/**
 * Gets the current block from the code (a string) to the current row and col (0-based)
 */
reval.editor.block_for = (function reval$editor$block_for(code,p__54613){
var vec__54614 = p__54613;
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54614,(0),null);
var col = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54614,(1),null);
var node_block = reval.editor.filter_forms(cljs.core.reverse(reval.editor.find_inners_by_pos(reval.editor.zip_from_code(code),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),(row + (1)),new cljs.core.Keyword(null,"col","col",-1959363084),(col + (1))], null))));
var map__54617 = (function (){var G__54618 = node_block;
if((G__54618 == null)){
return null;
} else {
return cljs.core.meta(G__54618);
}
})();
var map__54617__$1 = cljs.core.__destructure_map(map__54617);
var row__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54617__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var col__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54617__$1,new cljs.core.Keyword(null,"col","col",-1959363084));
var end_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54617__$1,new cljs.core.Keyword(null,"end-row","end-row",-545103581));
var end_col = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54617__$1,new cljs.core.Keyword(null,"end-col","end-col",-724155879));
if(cljs.core.truth_(node_block)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(row__$1 - (1)),(col__$1 - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(end_row - (1)),(end_col - (2))], null)], null),(rewrite_clj.node.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.node.string.cljs$core$IFn$_invoke$arity$1(node_block) : rewrite_clj.node.string.call(null,node_block))], null);
} else {
return null;
}
});

//# sourceMappingURL=reval.editor.js.map
