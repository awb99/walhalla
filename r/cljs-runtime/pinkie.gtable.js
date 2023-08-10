goog.provide('pinkie.gtable');
pinkie.gtable.grow = (function pinkie$gtable$grow(r){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,c){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["table-col-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('')], null),c], null);
}),r));
});
/**
 * a reagent component to display an array of arrays 
 * as html table
 * individual items are reagent components
 * successor to legacy-gorilla table-view
 */
pinkie.gtable.gtable = (function pinkie$gtable$gtable(rows){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,r){
["table-row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join('');

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkie.gtable.grow,r], null);
}),rows)], null)], null);
});

//# sourceMappingURL=pinkie.gtable.js.map
