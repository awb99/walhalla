goog.provide('sci.impl.io');
/**
 * create a dynamic var with clojure.core :ns meta
 */
sci.impl.io.core_dynamic_var = (function sci$impl$io$core_dynamic_var(var_args){
var G__65655 = arguments.length;
switch (G__65655) {
case 1:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2(name,null);
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$2 = (function (name,init_val){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true], null));
}));

(sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$3 = (function (name,init_val,extra_meta){
return sci.impl.utils.dynamic_var.cljs$core$IFn$_invoke$arity$3(name,init_val,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(extra_meta,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true], 0)));
}));

(sci.impl.io.core_dynamic_var.cljs$lang$maxFixedArity = 3);

sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__65664 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__65665 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__65665);

try{var G__65667 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__65667);

return G__65667;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__65664);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__65670 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__65671 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__65671);

try{var G__65673 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__65673);

return G__65673;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__65670);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__65674 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__65675 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__65675);

try{var G__65676 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__65676);

return G__65676;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__65674);
}})();
sci.impl.io.print_fn = (function (){var _STAR_unrestricted_STAR__orig_val__65677 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__65678 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__65678);

try{var G__65679 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-fn*","*print-fn*",138509853,null));
sci.impl.vars.unbind(G__65679);

return G__65679;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__65677);
}})();
sci.impl.io.print_err_fn = (function (){var _STAR_unrestricted_STAR__orig_val__65680 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__65681 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__65681);

try{var G__65682 = sci.impl.io.core_dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*print-err-fn*","*print-err-fn*",1241679298,null));
sci.impl.vars.unbind(G__65682);

return G__65682;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__65680);
}})();
sci.impl.io.print_meta = (new sci.lang.Var(cljs.core._STAR_print_meta_STAR_,new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"If set to logical true, when printing an object, its metadata will also\n  be printed in a form that can be read back by the reader.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_length = (new sci.lang.Var(cljs.core._STAR_print_length_STAR_,new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-length* controls how many items of each collection the\n  printer will print. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  number of items of each collection to print. If a collection contains\n  more items, the printer will print items up to the limit followed by\n  '...' to represent the remaining items. The root binding is nil\n  indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_level = (new sci.lang.Var(cljs.core._STAR_print_level_STAR_,new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-level* controls how many levels deep the printer will\n  print nested objects. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  level to print. Each argument to print is at level 0; if an argument is a\n  collection, its items are at level 1; and so on. If an object is a\n  collection and is at a level greater than or equal to the value bound to\n  *print-level*, the printer prints '#' to represent it. The root binding\n  is nil indicating no limit.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_namespace_maps = (new sci.lang.Var(true,new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-namespace-maps*","*print-namespace-maps*",-1759108415,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"*print-namespace-maps* controls whether the printer will print\n  namespace map literal syntax.\n\n  Defaults to false, but the REPL binds it to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.flush_on_newline = (new sci.lang.Var(cljs.core._STAR_flush_on_newline_STAR_,new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*flush-on-newline*","*flush-on-newline*",-737526501,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to true, output will be flushed whenever a newline is printed.\n\n  Defaults to true.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_readably = (new sci.lang.Var(cljs.core._STAR_print_readably_STAR_,new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false, strings and characters will be printed with\n  non-alphanumeric characters converted to the appropriate escape sequences.\n\n  Defaults to true",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_dup_var = (new sci.lang.Var(cljs.core._STAR_print_dup_STAR_,new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-dup*","*print-dup*",103854877,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical true, objects will be printed in a way that preserves\n  their type when read in later.\n\n  Defaults to false.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.print_newline = (new sci.lang.Var(cljs.core._STAR_print_newline_STAR_,new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"*print-newline*","*print-newline*",1478078956,null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),null,new cljs.core.Keyword(null,"doc","doc",1913296891),"When set to logical false will drop newlines from printing calls.\n  This is to work around the implicit newlines emitted by standard JavaScript\n  console objects.",new cljs.core.Keyword(null,"dynamic","dynamic",704819571),true,new cljs.core.Keyword("sci","built-in","sci/built-in",1244659599),true,new cljs.core.Keyword(null,"ns","ns",441598760),sci.impl.utils.clojure_core_ns], null),false,null,null));
sci.impl.io.string_print = (function sci$impl$io$string_print(x){
var _STAR_print_fn_STAR__orig_val__65697 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__65698 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__65698);

try{return cljs.core.string_print(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__65697);
}});
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65945 = arguments.length;
var i__5770__auto___65946 = (0);
while(true){
if((i__5770__auto___65946 < len__5769__auto___65945)){
args__5775__auto__.push((arguments[i__5770__auto___65946]));

var G__65947 = (i__5770__auto___65946 + (1));
i__5770__auto___65946 = G__65947;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__65708 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__65709 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65710 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__65711 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__65712 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__65713 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__65714 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__65715 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__65716 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__65717 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65718 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__65719 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__65720 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__65721 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__65722 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__65723 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__65716);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65717);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65718);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__65719);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__65720);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__65721);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__65722);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__65723);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__65715);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__65714);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__65713);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__65712);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__65711);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65710);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65709);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__65708);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq65701){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65701));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
var _STAR_print_fn_STAR__orig_val__65738 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__65739 = cljs.core.deref(sci.impl.io.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__65739);

try{return cljs.core.newline.cljs$core$IFn$_invoke$arity$0();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__65738);
}});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65951 = arguments.length;
var i__5770__auto___65952 = (0);
while(true){
if((i__5770__auto___65952 < len__5769__auto___65951)){
args__5775__auto__.push((arguments[i__5770__auto___65952]));

var G__65953 = (i__5770__auto___65952 + (1));
i__5770__auto___65952 = G__65953;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__65752 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65753 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__65754 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__65755 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__65756 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__65757 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__65758 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__65759 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65760 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__65761 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__65762 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__65763 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__65764 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__65765 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65759);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65760);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__65761);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__65762);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__65763);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__65764);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__65765);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__65758);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__65757);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__65756);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__65755);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__65754);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65753);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65752);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq65743){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65743));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65958 = arguments.length;
var i__5770__auto___65959 = (0);
while(true){
if((i__5770__auto___65959 < len__5769__auto___65958)){
args__5775__auto__.push((arguments[i__5770__auto___65959]));

var G__65963 = (i__5770__auto___65959 + (1));
i__5770__auto___65959 = G__65963;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__65789 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__65790 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65791 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__65792 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__65793 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__65794 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__65795 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__65796 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__65797 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__65798 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65799 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__65800 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__65801 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__65802 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__65803 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__65804 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__65797);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65798);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65799);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__65800);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__65801);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__65802);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__65803);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__65804);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__65796);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__65795);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__65794);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__65793);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__65792);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65791);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65790);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__65789);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq65782){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65782));
}));

/**
 * prn to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65965 = arguments.length;
var i__5770__auto___65966 = (0);
while(true){
if((i__5770__auto___65966 < len__5769__auto___65965)){
args__5775__auto__.push((arguments[i__5770__auto___65966]));

var G__65967 = (i__5770__auto___65966 + (1));
i__5770__auto___65966 = G__65967;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__65816 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65817 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__65818 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__65819 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__65820 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__65821 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__65822 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__65823 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65824 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__65825 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__65826 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__65827 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__65828 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__65829 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65823);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65824);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__65825);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__65826);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__65827);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__65828);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__65829);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__65822);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__65821);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__65820);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__65819);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__65818);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65817);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65816);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq65810){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65810));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65968 = arguments.length;
var i__5770__auto___65969 = (0);
while(true){
if((i__5770__auto___65969 < len__5769__auto___65968)){
args__5775__auto__.push((arguments[i__5770__auto___65969]));

var G__65970 = (i__5770__auto___65969 + (1));
i__5770__auto___65969 = G__65970;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__65852 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__65853 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65854 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__65855 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__65856 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__65857 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__65858 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__65859 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__65860 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65861 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_namespace_maps_STAR__temp_val__65862 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__65863 = null;
var _STAR_print_newline_STAR__temp_val__65864 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__65866 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__65859);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65860);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65861);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__65862);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__65863);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__65864);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__65866);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__65858);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__65857);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__65856);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__65855);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65854);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65853);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__65852);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq65841){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65841));
}));

/**
 * print to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65973 = arguments.length;
var i__5770__auto___65974 = (0);
while(true){
if((i__5770__auto___65974 < len__5769__auto___65973)){
args__5775__auto__.push((arguments[i__5770__auto___65974]));

var G__65975 = (i__5770__auto___65974 + (1));
i__5770__auto___65974 = G__65975;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__65876 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65877 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__65878 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__65879 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__65880 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__65881 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__65882 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_length_STAR__temp_val__65883 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65884 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__65885 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__65886 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__65887 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__65888 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__65889 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65883);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65884);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__65885);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__65886);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__65887);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__65888);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__65889);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__65882);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__65881);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__65880);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__65879);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__65878);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65877);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65876);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq65872){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65872));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65980 = arguments.length;
var i__5770__auto___65981 = (0);
while(true){
if((i__5770__auto___65981 < len__5769__auto___65980)){
args__5775__auto__.push((arguments[i__5770__auto___65981]));

var G__65982 = (i__5770__auto___65981 + (1));
i__5770__auto___65981 = G__65982;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_fn_STAR__orig_val__65897 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_length_STAR__orig_val__65898 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__65900 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__65901 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_namespace_maps_STAR__orig_val__65902 = cljs.core._STAR_print_namespace_maps_STAR_;
var _STAR_print_readably_STAR__orig_val__65903 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_newline_STAR__orig_val__65904 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_dup_STAR__orig_val__65905 = cljs.core._STAR_print_dup_STAR_;
var _STAR_print_fn_STAR__temp_val__65906 = cljs.core.deref(sci.impl.io.print_fn);
var _STAR_print_length_STAR__temp_val__65907 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__65908 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__65909 = cljs.core.deref(sci.impl.io.print_meta);
var _STAR_print_namespace_maps_STAR__temp_val__65910 = cljs.core.deref(sci.impl.io.print_namespace_maps);
var _STAR_print_readably_STAR__temp_val__65911 = cljs.core.deref(sci.impl.io.print_readably);
var _STAR_print_newline_STAR__temp_val__65912 = cljs.core.deref(sci.impl.io.print_newline);
var _STAR_print_dup_STAR__temp_val__65913 = cljs.core.deref(sci.impl.io.print_dup_var);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__65906);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__65907);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__65908);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__65909);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__temp_val__65910);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__temp_val__65911);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__65912);

(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__temp_val__65913);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println,objs);
}finally {(cljs.core._STAR_print_dup_STAR_ = _STAR_print_dup_STAR__orig_val__65905);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__65904);

(cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR__orig_val__65903);

(cljs.core._STAR_print_namespace_maps_STAR_ = _STAR_print_namespace_maps_STAR__orig_val__65902);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__65901);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__65900);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__65898);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__65897);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq65895){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65895));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__5775__auto__ = [];
var len__5769__auto___65985 = arguments.length;
var i__5770__auto___65986 = (0);
while(true){
if((i__5770__auto___65986 < len__5769__auto___65985)){
args__5775__auto__.push((arguments[i__5770__auto___65986]));

var G__65987 = (i__5770__auto___65986 + (1));
i__5770__auto___65986 = G__65987;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__65918__auto__","s__65918__auto__",-545058300,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-newline*","cljs.core/*print-newline*",6231625,null),null,(1),null)),(new cljs.core.List(null,true,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*print-fn*","cljs.core/*print-fn*",1342365176,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"x__65919__auto__","x__65919__auto__",-784926624,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,".",".",1975675962,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__65918__auto__","s__65918__auto__",-545058300,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,sci.impl.utils.allowed_append,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__65919__auto__","x__65919__auto__",-784926624,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__65918__auto__","s__65918__auto__",-545058300,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq65922){
var G__65923 = cljs.core.first(seq65922);
var seq65922__$1 = cljs.core.next(seq65922);
var G__65924 = cljs.core.first(seq65922__$1);
var seq65922__$2 = cljs.core.next(seq65922__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65923,G__65924,seq65922__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
