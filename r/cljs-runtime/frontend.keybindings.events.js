goog.provide('frontend.keybindings.events');
frontend.keybindings.events.clean_search = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"highlight","highlight",-800930873),(0),new cljs.core.Keyword(null,"visible-items","visible-items",1351335131),null,new cljs.core.Keyword(null,"query","query",-1288509510),""], null);
frontend.keybindings.events.kb_from_config = (function frontend$keybindings$events$kb_from_config(db){
var or__5045__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"keybindings","keybindings",656951934)], null));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("keybindings","init","keybindings/init",1829009079),(function (db,p__44959){
var vec__44960 = p__44959;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44960,(0),null);
var db__$1 = (function (){var or__5045__auto__ = db;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var keybindings = frontend.keybindings.events.kb_from_config(db__$1);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"frontend.keybindings.events",null,23,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keybinding init .."], null);
}),null)),null,(149),null);

frontend.keybindings.init.init_keybindings_BANG_(keybindings);

return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keybindings","keybindings",656951934)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search","search",1564939822),frontend.keybindings.events.clean_search], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("palette","show","palette/show",234924316),(function (db,p__44965){
var vec__44966 = p__44965;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44966,(0),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.keybindings.events",null,34,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["showing keybindings dialog"], null);
}),null)),null,(150),null);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("palette","filter-changed","palette/filter-changed",1488356424),""], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","open","modal/open",-1860325197),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.keybindings.component.keybindings_dialog], null),new cljs.core.Keyword(null,"medium","medium",-1864319384)], null));

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keybindings","keybindings",656951934),new cljs.core.Keyword(null,"search","search",1564939822)], null),frontend.keybindings.events.clean_search);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("palette","hide","palette/hide",1820438114),(function (db,_){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("modal","close","modal/close",1402872795)], null));

return db;
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"palette","palette",-456203511),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keybindings","keybindings",656951934),new cljs.core.Keyword(null,"search","search",1564939822)], null));
})], 0));
frontend.keybindings.events.make_regex = (function frontend$keybindings$events$make_regex(val){
var res = clojure.string.join.cljs$core$IFn$_invoke$arity$2(".*",clojure.string.split.cljs$core$IFn$_invoke$arity$2(val," "));
var pattern = ["(?i)",res,".*"].join('');
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"frontend.keybindings.events",null,56,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["regex: ",pattern], null);
}),null)),null,(155),null);
var re = cljs.core.re_pattern(pattern);
return (function (item){
var desc = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})();
var match = cljs.core.re_find(re,desc);
return match;
});
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("palette","filter-changed","palette/filter-changed",1488356424),(function (db,p__44989){
var vec__44990 = p__44989;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44990,(0),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44990,(1),null);
var all = frontend.keybindings.events.kb_from_config(db);
var search_old = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keybindings","keybindings",656951934),new cljs.core.Keyword(null,"search","search",1564939822)], null));
var visible = (((((query == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(query,""))))?all:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frontend.keybindings.events.make_regex(query),all));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keybindings","keybindings",656951934),new cljs.core.Keyword(null,"search","search",1564939822)], null),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([search_old,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible-items","visible-items",1351335131),visible,new cljs.core.Keyword(null,"query","query",-1288509510),query], null)], 0)));
}));
frontend.keybindings.events.highlight_move = (function frontend$keybindings$events$highlight_move(db,direction){
var palette = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keybindings","keybindings",656951934),new cljs.core.Keyword(null,"search","search",1564939822)], null));
var map__44996 = palette;
var map__44996__$1 = cljs.core.__destructure_map(map__44996);
var highlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44996__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
var visible_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__44996__$1,new cljs.core.Keyword(null,"visible-items","visible-items",1351335131));
var maxidx = (cljs.core.count(visible_items) - (1));
var highlight_new = (function (){var G__44997 = direction;
var G__44997__$1 = (((G__44997 instanceof cljs.core.Keyword))?G__44997.fqn:null);
switch (G__44997__$1) {
case "up":
if((highlight > (0))){
return (highlight - (1));
} else {
return highlight;
}

break;
case "down":
if((highlight < maxidx)){
return (highlight + (1));
} else {
return highlight;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44997__$1)].join('')));

}
})();
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"frontend.keybindings.events",null,87,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["highlight: ",highlight_new], null);
}),null)),null,(162),null);

return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keybindings","keybindings",656951934),new cljs.core.Keyword(null,"search","search",1564939822),new cljs.core.Keyword(null,"highlight","highlight",-800930873)], null),highlight_new);
});
frontend.keybindings.events.highlight_action = (function frontend$keybindings$events$highlight_action(db){
var palette = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"keybindings","keybindings",656951934),new cljs.core.Keyword(null,"search","search",1564939822)], null));
var map__45013 = palette;
var map__45013__$1 = cljs.core.__destructure_map(map__45013);
var highlight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45013__$1,new cljs.core.Keyword(null,"highlight","highlight",-800930873));
var visible_items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45013__$1,new cljs.core.Keyword(null,"visible-items","visible-items",1351335131));
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"frontend.keybindings.events",null,93,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["action highlight: %s count: %s",highlight,cljs.core.count(visible_items)], null);
}),null)),null,(164),null);
var item = (cljs.core.truth_(cljs.core.not_empty(visible_items))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(visible_items,highlight):null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("palette","action","palette/action",-49869325),item], null));

return db;
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("palette","filter-keydown","palette/filter-keydown",488668044),(function (db,p__45021){
var vec__45022 = p__45021;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45022,(0),null);
var keycode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45022,(1),null);
var G__45025 = keycode;
switch (G__45025) {
case (38):
return frontend.keybindings.events.highlight_move(db,new cljs.core.Keyword(null,"up","up",-269712113));

break;
case (40):
return frontend.keybindings.events.highlight_move(db,new cljs.core.Keyword(null,"down","down",1565245570));

break;
case (27):
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("palette","hide","palette/hide",1820438114)], null));

return db;

break;
case (13):
return frontend.keybindings.events.highlight_action(db);

break;
default:
return db;

}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("palette","action","palette/action",-49869325),(function (db,p__45037){
var vec__45038 = p__45037;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45038,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45038,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.keybindings.events",null,114,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["palette/action!",item], null);
}),null)),null,(167),null);

var handler = new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(handler)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"frontend.keybindings.events",null,117,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dispatching",handler], null);
}),null)),null,(168),null);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("palette","hide","palette/hide",1820438114)], null));

re_frame.core.dispatch(handler);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"frontend.keybindings.events",null,121,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["handler not found!"], null);
}),null)),null,(169),null);

frontend.notifications.core.add_notification.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"danger","danger",-624338030),"keybining didn't have a handler!");

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("palette","hide","palette/hide",1820438114)], null));
}

return db;
}));

//# sourceMappingURL=frontend.keybindings.events.js.map
