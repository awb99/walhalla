goog.provide('pinkgorilla.input.text');
pinkgorilla.input.text.textbox = (function pinkgorilla$input$text$textbox(p__54557){
var map__54558 = p__54557;
var map__54558__$1 = cljs.core.__destructure_map(map__54558);
var opts = map__54558__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54558__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54558__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Placeholder",new cljs.core.Keyword(null,"class","class",-2030961996),"px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline"], null),opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),(((value == null))?"":value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = e.target.value;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(v) : on_change.call(null,v));
})], null)], 0))], null);
});

//# sourceMappingURL=pinkgorilla.input.text.js.map
