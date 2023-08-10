goog.provide('ui.binaryclock.clock');
ui.binaryclock.clock.cell = (function ui$binaryclock$clock$cell(n,bit){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clock-cell","div.clock-cell",-12507663),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),((((n & (1 << bit)) != 0))?"light":"dark")], null)], null);
});
ui.binaryclock.clock.column = (function ui$binaryclock$clock$column(n){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clock-col","div.clock-col",1418748813),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.binaryclock.clock.cell,n,(3)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.binaryclock.clock.cell,n,(2)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.binaryclock.clock.cell,n,(1)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.binaryclock.clock.cell,n,(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clock-cell","div.clock-cell",-12507663),n], null)], null);
});
ui.binaryclock.clock.column_pair = (function ui$binaryclock$clock$column_pair(n){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clock-pair","div.clock-pair",-65283468),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.binaryclock.clock.column,cljs.core.quot(n,(10))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.binaryclock.clock.column,cljs.core.mod(n,(10))], null)], null);
});
ui.binaryclock.clock.legend = (function ui$binaryclock$clock$legend(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54568 = arguments.length;
var i__5770__auto___54569 = (0);
while(true){
if((i__5770__auto___54569 < len__5769__auto___54568)){
args__5775__auto__.push((arguments[i__5770__auto___54569]));

var G__54570 = (i__5770__auto___54569 + (1));
i__5770__auto___54569 = G__54570;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return ui.binaryclock.clock.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(ui.binaryclock.clock.legend.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clock-col.clock-legend","div.clock-col.clock-legend",-1934406846)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"div.clock-cell","div.clock-cell",-12507663)),items));
}));

(ui.binaryclock.clock.legend.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(ui.binaryclock.clock.legend.cljs$lang$applyTo = (function (seq54555){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq54555));
}));

ui.binaryclock.clock.clock = (function ui$binaryclock$clock$clock(date,show_100s,toggle_100s){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clock-main","div.clock-main",-402520242),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle_100s,new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(show_100s)?"wide":null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.binaryclock.clock.legend,(8),(4),(2),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.binaryclock.clock.column_pair,date.getHours()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.binaryclock.clock.column_pair,date.getMinutes()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.binaryclock.clock.column_pair,date.getSeconds()], null),(cljs.core.truth_(show_100s)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.binaryclock.clock.column_pair,cljs.core.quot(date.getMilliseconds(),(10))], null):null)], null);
});
ui.binaryclock.clock.clock_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"time","time",1385887882),(new Date()),new cljs.core.Keyword(null,"show-100s","show-100s",1072817186),false], null));
ui.binaryclock.clock.update_time = (function ui$binaryclock$clock$update_time(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ui.binaryclock.clock.clock_state,cljs.core.assoc,new cljs.core.Keyword(null,"time","time",1385887882),(new Date()));
});
/**
 * displays a binary clock; on click with seconds.
 *   useful to debug reagent component that do not update
 */
ui.binaryclock.clock.binary_clock = (function ui$binaryclock$clock$binary_clock(){
var map__54561 = cljs.core.deref(ui.binaryclock.clock.clock_state);
var map__54561__$1 = cljs.core.__destructure_map(map__54561);
var time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54561__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var show_100s = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54561__$1,new cljs.core.Keyword(null,"show-100s","show-100s",1072817186));
if(cljs.core.truth_(show_100s)){
reagent.core.next_tick(ui.binaryclock.clock.update_time);
} else {
setTimeout(ui.binaryclock.clock.update_time,(1000));
}

return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.binaryclock.clock.clock,time,show_100s,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(ui.binaryclock.clock.clock_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-100s","show-100s",1072817186)], null),cljs.core.not);
})], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"R","R",-936662523),true], null));
});

//# sourceMappingURL=ui.binaryclock.clock.js.map
