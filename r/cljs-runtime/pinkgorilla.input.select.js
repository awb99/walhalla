goog.provide('pinkgorilla.input.select');
pinkgorilla.input.select.css = (function pinkgorilla$input$select$css(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),".top-100 {top: 100%}\n           .bottom-100 {bottom: 100%}\n           .max-h-select {\n              max-height: 300px;\n           }\n          "], null);
});
pinkgorilla.input.select.select_item = (function pinkgorilla$input$select$select_item(p__54559){
var map__54560 = p__54559;
var map__54560__$1 = cljs.core.__destructure_map(map__54560);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54560__$1,new cljs.core.Keyword(null,"value","value",305978217));
var display = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54560__$1,new cljs.core.Keyword(null,"display","display",242065432));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54560__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54560__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54560__$1,new cljs.core.Keyword(null,"select","select",1147833503));
var text = (cljs.core.truth_(display)?(display.cljs$core$IFn$_invoke$arity$1 ? display.cljs$core$IFn$_invoke$arity$1(value) : display.call(null,value)):value);
var s = (cljs.core.truth_(selected_QMARK_)?"bg-red-500 border-teal-600":null);
var p = (function (){var G__54561 = position;
var G__54561__$1 = (((G__54561 instanceof cljs.core.Keyword))?G__54561.fqn:null);
switch (G__54561__$1) {
case "first":
return "rounded-t";

break;
case "last":
return "rounded-b";

break;
default:
return "";

}
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["cursor-pointer w-full border-gray-100 border-b hover:bg-blue-300 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (select.cljs$core$IFn$_invoke$arity$1 ? select.cljs$core$IFn$_invoke$arity$1(value) : select.call(null,value));
}),new cljs.core.Keyword(null,"class","class",-2030961996),["flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:bg-teal-600 hover:text-teal-100 ",s].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full items-center flex"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"mx-2 leading-6"], null),text], null)], null)], null)], null);
});
pinkgorilla.input.select.button_remove_selection = (function pinkgorilla$input$select$button_remove_selection(h){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"cursor-pointer w-6 h-full flex items-center text-gray-400 outline-none focus:outline-none",new cljs.core.Keyword(null,"on-click","on-click",1632826543),h], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),new cljs.core.Keyword(null,"height","height",1025178622)],["currentColor","none","round","100%","http://www.w3.org/2000/svg","round","2","feather feather-x w-4 h-4","0 0 24 24","100%"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),"18",new cljs.core.Keyword(null,"y1","y1",589123466),"6",new cljs.core.Keyword(null,"x2","x2",-1362513475),"6",new cljs.core.Keyword(null,"y2","y2",-718691301),"18"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),"6",new cljs.core.Keyword(null,"y1","y1",589123466),"6",new cljs.core.Keyword(null,"x2","x2",-1362513475),"18",new cljs.core.Keyword(null,"y2","y2",-718691301),"18"], null)], null)], null)], null)], null);
});
pinkgorilla.input.select.button_dropdown = (function pinkgorilla$input$select$button_dropdown(dropdown_QMARK_,h){
var points = (cljs.core.truth_(dropdown_QMARK_)?"18 15 12 9 6 15":"18 9  12 15 6 9");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none",new cljs.core.Keyword(null,"on-click","on-click",1632826543),h], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke-linejoin","stroke-linejoin",-1810816406),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),new cljs.core.Keyword(null,"height","height",1025178622)],["currentColor","none","round","100%","http://www.w3.org/2000/svg","round","2","feather feather-chevron-up w-4 h-4","0 0 24 24","100%"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polyline","polyline",-1731551044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),points], null)], null)], null)], null)], null);
});
pinkgorilla.input.select.select = (function pinkgorilla$input$select$select(p__54575){
var map__54576 = p__54575;
var map__54576__$1 = cljs.core.__destructure_map(map__54576);
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54576__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54576__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54576__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var l = cljs.core.count(items);
var l1 = (l - (1));
var dropdown_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var toggle_dropdown = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dropdown_QMARK_,cljs.core.not);
});
var pos_key = (function (i){
var G__54585 = i;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),G__54585)){
return new cljs.core.Keyword(null,"first","first",-644103046);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"l1","l1",-790259990,null),G__54585)){
return new cljs.core.Keyword(null,"last","last",1105735132);
} else {
return null;

}
}
});
var select = (function (p1__54574_SHARP_){
cljs.core.reset_BANG_(dropdown_QMARK_,false);

if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(p1__54574_SHARP_) : on_change.call(null,p1__54574_SHARP_));
} else {
return null;
}
});
var unselect = (function (){
if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(null) : on_change.call(null,null));
} else {
return null;
}
});
var no_op = (function (){
return cljs.core.List.EMPTY;
});
return (function (p__54591){
var map__54592 = p__54591;
var map__54592__$1 = cljs.core.__destructure_map(map__54592);
var items__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54592__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54592__$1,new cljs.core.Keyword(null,"value","value",305978217));
var display = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54592__$1,new cljs.core.Keyword(null,"display","display",242065432));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54592__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var on_change__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54592__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["flex flex-col items-center relative ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})())].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkgorilla.input.select.css], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-white flex border border-gray-200 rounded"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-auto flex-wrap"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(display)?(display.cljs$core$IFn$_invoke$arity$1 ? display.cljs$core$IFn$_invoke$arity$1(value__$1) : display.call(null,value__$1)):value__$1),new cljs.core.Keyword(null,"on-change","on-change",-732046149),no_op,new cljs.core.Keyword(null,"class","class",-2030961996),"p-1 px-2 appearance-none outline-none w-full text-gray-800"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkgorilla.input.select.button_remove_selection,unselect], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkgorilla.input.select.button_dropdown,cljs.core.deref(dropdown_QMARK_),toggle_dropdown], null)], null)], null),(cljs.core.truth_(cljs.core.deref(dropdown_QMARK_))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["absolute bg-blue-200 shadow z-50 w-full lef-0 rounded max-h-select top-100 ","overflow-y-auto"].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex flex-col w-full"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,v){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkgorilla.input.select.select_item,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"value","value",305978217),v,new cljs.core.Keyword(null,"display","display",242065432),display,new cljs.core.Keyword(null,"selected?","selected?",-742502788),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value__$1,v),new cljs.core.Keyword(null,"position","position",-2011731912),pos_key(i),new cljs.core.Keyword(null,"select","select",1147833503),select], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
}),items__$1))], null)], null):null)], null);
});
});
pinkgorilla.input.select.go_next = (function pinkgorilla$input$select$go_next(v,list,action){
var new_index = (list.indexOf(v) + (1));
var new_index__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_index,cljs.core.count(list)))?(0):new_index);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(list,new_index__$1);
return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(new_value) : action.call(null,new_value));
});
pinkgorilla.input.select.go_prior = (function pinkgorilla$input$select$go_prior(v,list,action){
var new_index = (list.indexOf(v) - (1));
var new_index__$1 = (((new_index < (0)))?(cljs.core.count(list) - (1)):new_index);
var new_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(list,new_index__$1);
return (action.cljs$core$IFn$_invoke$arity$1 ? action.cljs$core$IFn$_invoke$arity$1(new_value) : action.call(null,new_value));
});
pinkgorilla.input.select.select_nav = (function pinkgorilla$input$select$select_nav(p__54599){
var map__54600 = p__54599;
var map__54600__$1 = cljs.core.__destructure_map(map__54600);
var opts = map__54600__$1;
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54600__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54600__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54600__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var nav_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54600__$1,new cljs.core.Keyword(null,"nav?","nav?",1269039770));
if(cljs.core.truth_(nav_QMARK_)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row","div.flex.flex-row",209103675),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkgorilla.input.select.select,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"flex-grow"], null)], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkgorilla.input.button.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return pinkgorilla.input.select.go_prior(value,items,on_change);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"hover:bg-blue-700 text-gray-600  font-bold rounded border border-gray-200 w-6"], null),"<"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkgorilla.input.button.button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return pinkgorilla.input.select.go_next(value,items,on_change);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"hover:bg-blue-700 text-gray-600  font-bold rounded border border-gray-200 w-6"], null),">"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkgorilla.input.select.select,opts], null);
}
});

//# sourceMappingURL=pinkgorilla.input.select.js.map
