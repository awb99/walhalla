goog.provide('pinkgorilla.repl.cljs.js');
goog.scope(function(){
  pinkgorilla.repl.cljs.js.goog$module$goog$object = goog.module.get('goog.object');
});
pinkgorilla.repl.cljs.js.to_fixed = (function pinkgorilla$repl$cljs$js$to_fixed(nr,digits){
return nr.toFixed(digits);
});
pinkgorilla.repl.cljs.js.timeout = (function pinkgorilla$repl$cljs$js$timeout(f,ms){
return setTimeout(f,ms);
});
pinkgorilla.repl.cljs.js.interval = (function pinkgorilla$repl$cljs$js$interval(f,ms){
return setInterval(f,ms);
});
pinkgorilla.repl.cljs.js.parse_float = (function pinkgorilla$repl$cljs$js$parse_float(s){
return parseFloat(s);
});
pinkgorilla.repl.cljs.js.alert = (function pinkgorilla$repl$cljs$js$alert(s){
return alert(s);
});
pinkgorilla.repl.cljs.js.evt_val = (function pinkgorilla$repl$cljs$js$evt_val(e){
return e.target.value;
});
pinkgorilla.repl.cljs.js.jsx__GT_clj = (function pinkgorilla$repl$cljs$js$jsx__GT_clj(x){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function pinkgorilla$repl$cljs$js$jsx__GT_clj_$_iter__54781(s__54782){
return (new cljs.core.LazySeq(null,(function (){
var s__54782__$1 = s__54782;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__54782__$1);
if(temp__5804__auto__){
var s__54782__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__54782__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__54782__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__54784 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__54783 = (0);
while(true){
if((i__54783 < size__5522__auto__)){
var k = cljs.core._nth(c__5521__auto__,i__54783);
cljs.core.chunk_append(b__54784,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,pinkgorilla.repl.cljs.js.goog$module$goog$object.get(x,k)], null));

var G__54791 = (i__54783 + (1));
i__54783 = G__54791;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__54784),pinkgorilla$repl$cljs$js$jsx__GT_clj_$_iter__54781(cljs.core.chunk_rest(s__54782__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__54784),null);
}
} else {
var k = cljs.core.first(s__54782__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,pinkgorilla.repl.cljs.js.goog$module$goog$object.get(x,k)], null),pinkgorilla$repl$cljs$js$jsx__GT_clj_$_iter__54781(cljs.core.rest(s__54782__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(Object.keys(x));
})());
});

//# sourceMappingURL=pinkgorilla.repl.cljs.js.js.map
