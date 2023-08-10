goog.provide('frontend.keybindings.component');
frontend.keybindings.component.search_box = (function frontend$keybindings$component$search_box(query){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-stretch.mb-0.border.border-solid.border-blue-800.p-0","div.flex.flex-row.items-stretch.mb-0.border.border-solid.border-blue-800.p-0",1048386469),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-full ml-2 bg-blue-200 text-lg",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),query,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__44892_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("palette","filter-changed","palette/filter-changed",1488356424),p1__44892_SHARP_.target.value], null));
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__44893_SHARP_){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("palette","filter-keydown","palette/filter-keydown",488668044),p1__44893_SHARP_.which], null));
}),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__44894_SHARP_){
if(cljs.core.truth_(p1__44894_SHARP_)){
return p1__44894_SHARP_.focus();
} else {
return null;
}
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-times-circle.pr-2","i.fas.fa-times-circle.pr-2",1424249691),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","close","modal/close",1402872795)], null));
})], null)], null)], null)], null);
});
frontend.keybindings.component.scroll_into_view = (function frontend$keybindings$component$scroll_into_view(el){
if(cljs.core.truth_(el)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"frontend.keybindings.component",null,28,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["scroll-into-view"], null);
}),null)),null,(130),null);

if(cljs.core.truth_(el.scrollIntoViewIfNeeded)){
return el.scrollIntoViewIfNeeded(false);
} else {
return el.scrollIntoView(false);
}
} else {
return null;
}
});
frontend.keybindings.component.palette_item = (function frontend$keybindings$component$palette_item(item,active_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(active_QMARK_)?"bg-red-300":null),new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__44898_SHARP_){
if(cljs.core.truth_(active_QMARK_)){
return frontend.keybindings.component.scroll_into_view(p1__44898_SHARP_);
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.flex.flex-row.items-stretch","li.flex.flex-row.items-stretch",2075046754),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("palette","action","palette/action",-49869325),item], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.w-full","span.w-full",-78135730),new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(item)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.m-2.border.border-round.border-blue-400","span.m-2.border.border-round.border-blue-400",-931356153),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"w-1/4"], null),new cljs.core.Keyword(null,"kb","kb",1183038587).cljs$core$IFn$_invoke$arity$1(item)], null)], null)], null);
});
frontend.keybindings.component.keybinding_list = (function frontend$keybindings$component$keybinding_list(visible_items,highlight){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"mt-0 pt-0",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),"auto",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"300px",new cljs.core.Keyword(null,"background","background",-863952629),"#f5f5f5"], null)], null),(cljs.core.truth_(visible_items)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403)], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.keybindings.component.palette_item,x,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,highlight)], null);
}),visible_items)):null)], null);
});
frontend.keybindings.component.keybindings_dialog = (function frontend$keybindings$component$keybindings_dialog(){
var palette = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"palette","palette",-456203511)], null));
var map__44906 = cljs.core.deref(palette);
var map__44906__$1 = cljs.core.__destructure_map(map__44906);
var query = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44906__$1,new cljs.core.Keyword(null,"query","query",-1288509510));
var visible_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44906__$1,new cljs.core.Keyword(null,"visible-items","visible-items",1351335131));
var highlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44906__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-blue-200","div.bg-blue-200",1411808396),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.keybindings.component.search_box,query], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.keybindings.component.keybinding_list,visible_items,highlight], null)], null);
});

//# sourceMappingURL=frontend.keybindings.component.js.map
