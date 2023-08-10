goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__44086 = libspec;
var seq__44087 = cljs.core.seq(vec__44086);
var first__44088 = cljs.core.first(seq__44087);
var seq__44087__$1 = cljs.core.next(seq__44087);
var lib = first__44088;
var spec = seq__44087__$1;
var libspec__$1 = vec__44086;
var vec__44089 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44089,(0),null);
var vec__44092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44089,(1),null);
var seq__44093 = cljs.core.seq(vec__44092);
var first__44094 = cljs.core.first(seq__44093);
var seq__44093__$1 = cljs.core.next(seq__44093);
var _ = first__44094;
var first__44094__$1 = cljs.core.first(seq__44093__$1);
var seq__44093__$2 = cljs.core.next(seq__44093__$1);
var alias = first__44094__$1;
var post_spec = seq__44093__$2;
var post = vec__44092;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__44098 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__44098,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__44098;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__44100 = cljs.core.seq(new_as_aliases);
var chunk__44101 = null;
var count__44102 = (0);
var i__44103 = (0);
while(true){
if((i__44103 < count__44102)){
var vec__44123 = chunk__44101.cljs$core$IIndexed$_nth$arity$2(null,i__44103);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44123,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44123,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__44179 = seq__44100;
var G__44180 = chunk__44101;
var G__44181 = count__44102;
var G__44182 = (i__44103 + (1));
seq__44100 = G__44179;
chunk__44101 = G__44180;
count__44102 = G__44181;
i__44103 = G__44182;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44100);
if(temp__5804__auto__){
var seq__44100__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44100__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44100__$1);
var G__44184 = cljs.core.chunk_rest(seq__44100__$1);
var G__44185 = c__5568__auto__;
var G__44186 = cljs.core.count(c__5568__auto__);
var G__44187 = (0);
seq__44100 = G__44184;
chunk__44101 = G__44185;
count__44102 = G__44186;
i__44103 = G__44187;
continue;
} else {
var vec__44126 = cljs.core.first(seq__44100__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44126,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44126,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__44188 = cljs.core.next(seq__44100__$1);
var G__44189 = null;
var G__44190 = (0);
var G__44191 = (0);
seq__44100 = G__44188;
chunk__44101 = G__44189;
count__44102 = G__44190;
i__44103 = G__44191;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__44131 = arguments.length;
switch (G__44131) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__44138 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__44138__$1 = cljs.core.__destructure_map(map__44138);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44138__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44138__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__44142 = ret__$1;
var G__44142__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__44142,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__44142);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__44142__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__44142__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__44148,p__44149){
var map__44150 = p__44148;
var map__44150__$1 = cljs.core.__destructure_map(map__44150);
var ret__$1 = map__44150__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44150__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__44151 = p__44149;
var seq__44152 = cljs.core.seq(vec__44151);
var first__44153 = cljs.core.first(seq__44152);
var seq__44152__$1 = cljs.core.next(seq__44152);
var spec_key = first__44153;
var libspecs = seq__44152__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__44160 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__44160__$1 = cljs.core.__destructure_map(map__44160);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44160__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44160__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__44162 = ret__$1;
var G__44162__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__44162,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__44162);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__44162__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__44162__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
