goog.provide('ui.pprint');
ui.pprint.pprint = (function ui$pprint$pprint(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54679 = arguments.length;
var i__5770__auto___54680 = (0);
while(true){
if((i__5770__auto___54680 < len__5769__auto___54679)){
args__5775__auto__.push((arguments[i__5770__auto___54680]));

var G__54681 = (i__5770__auto___54680 + (1));
i__5770__auto___54680 = G__54681;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return ui.pprint.pprint.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(ui.pprint.pprint.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_print_fn_STAR__orig_val__54645 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__54646 = cljs.core.deref(sci.core.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54646);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.pprint,args);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54645);
}}));

(ui.pprint.pprint.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui.pprint.pprint.cljs$lang$applyTo = (function (seq54642){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54642));
}));

ui.pprint.print_table = (function ui$pprint$print_table(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54682 = arguments.length;
var i__5770__auto___54683 = (0);
while(true){
if((i__5770__auto___54683 < len__5769__auto___54682)){
args__5775__auto__.push((arguments[i__5770__auto___54683]));

var G__54685 = (i__5770__auto___54683 + (1));
i__5770__auto___54683 = G__54685;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return ui.pprint.print_table.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(ui.pprint.print_table.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var _STAR_print_fn_STAR__orig_val__54654 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_fn_STAR__temp_val__54655 = cljs.core.deref(sci.core.print_fn);
(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__54655);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.pprint.print_table,args);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__54654);
}}));

(ui.pprint.print_table.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui.pprint.print_table.cljs$lang$applyTo = (function (seq54651){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54651));
}));

ui.pprint.pns = sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),null);
ui.pprint.pprint_namespace = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"pprint","pprint",-1434237374,null),(function (){var ns__51620__auto__ = ui.pprint.pns;
var var__51621__auto__ = new cljs.core.Var(function(){return ui.pprint.pprint;},new cljs.core.Symbol("ui.pprint","pprint","ui.pprint/pprint",386106745,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ui.pprint","ui.pprint",676586713,null),new cljs.core.Symbol(null,"pprint","pprint",-1434237374,null),"ui/pprint.cljs",13,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"args","args",-1338879193,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,6,6,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),null,(cljs.core.truth_(ui.pprint.pprint)?ui.pprint.pprint.cljs$lang$test:null)]));
var val__51622__auto__ = cljs.core.deref(var__51621__auto__);
var m__51623__auto__ = cljs.core.meta(var__51621__auto__);
var name__51624__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51623__auto__);
}
})();
var new_m__51625__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51620__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51624__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51623__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51623__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51623__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51624__auto__,val__51622__auto__,new_m__51625__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51623__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51623__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51624__auto__,val__51622__auto__,new_m__51625__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51624__auto__,val__51622__auto__,new_m__51625__auto__);

}
}
})(),new cljs.core.Symbol(null,"print-table","print-table",-2093158225,null),(function (){var ns__51620__auto__ = ui.pprint.pns;
var var__51621__auto__ = new cljs.core.Var(function(){return ui.pprint.print_table;},new cljs.core.Symbol("ui.pprint","print-table","ui.pprint/print-table",633155974,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ui.pprint","ui.pprint",676586713,null),new cljs.core.Symbol(null,"print-table","print-table",-2093158225,null),"ui/pprint.cljs",18,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"args","args",-1338879193,null))], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,10,10,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),null,(cljs.core.truth_(ui.pprint.print_table)?ui.pprint.print_table.cljs$lang$test:null)]));
var val__51622__auto__ = cljs.core.deref(var__51621__auto__);
var m__51623__auto__ = cljs.core.meta(var__51621__auto__);
var name__51624__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51623__auto__);
}
})();
var new_m__51625__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51620__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51624__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51623__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51623__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51623__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51624__auto__,val__51622__auto__,new_m__51625__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51623__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51623__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51624__auto__,val__51622__auto__,new_m__51625__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51624__auto__,val__51622__auto__,new_m__51625__auto__);

}
}
})()], null);

//# sourceMappingURL=ui.pprint.js.map
