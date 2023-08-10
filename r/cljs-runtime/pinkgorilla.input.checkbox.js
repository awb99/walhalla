goog.provide('pinkgorilla.input.checkbox');
pinkgorilla.input.checkbox.checkbox = (function pinkgorilla$input$checkbox$checkbox(p__54519){
var map__54520 = p__54519;
var map__54520__$1 = cljs.core.__destructure_map(map__54520);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54520__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54520__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"class","class",-2030961996),"pt-0 px-2 py-1 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm border border-gray-400 outline-none focus:outline-none focus:shadow-outline",new cljs.core.Keyword(null,"checked","checked",-50955819),(((value == null))?false:value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var v = e.target.checked;
if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(v) : on_change.call(null,v));
} else {
return null;
}
})], null)], null);
});

//# sourceMappingURL=pinkgorilla.input.checkbox.js.map
