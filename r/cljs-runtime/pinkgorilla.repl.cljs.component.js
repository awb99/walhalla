goog.provide('pinkgorilla.repl.cljs.component');
pinkgorilla.repl.cljs.component.component = (function pinkgorilla$repl$cljs$component$component(p__49628){
var map__49646 = p__49628;
var map__49646__$1 = cljs.core.__destructure_map(map__49646);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49646__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49646__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49646__$1,new cljs.core.Keyword(null,"update","update",1045576396));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49646__$1,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null));
var config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49646__$1,new cljs.core.Keyword(null,"config","config",994861415));
var id = cljs_uuid_utils.core.uuid_string(cljs_uuid_utils.core.make_random_uuid());
var c = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"component",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"style","style",-496642736),style], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"pinkgorilla.repl.cljs.component",null,19,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component started. id: ",id," props: ",reagent.core.argv(this$)], null);
}),null)),null,(83),null);

return cljs.core.reset_BANG_(c,(start.cljs$core$IFn$_invoke$arity$2 ? start.cljs$core$IFn$_invoke$arity$2(id,config) : start.call(null,id,config)));
}),new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),(function (this$){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"pinkgorilla.repl.cljs.component",null,23,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component stopped."], null);
}),null)),null,(84),null);

if(cljs.core.truth_(stop)){
var G__49699 = cljs.core.deref(c);
var G__49700 = id;
return (stop.cljs$core$IFn$_invoke$arity$2 ? stop.cljs$core$IFn$_invoke$arity$2(G__49699,G__49700) : stop.call(null,G__49699,G__49700));
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,p__49703){
var vec__49708 = p__49703;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49708,(0),null);
var prev_props = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49708,(1),null);
var prev_more = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49708,(2),null);
var vec__49717 = reagent.core.argv(this$);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49717,(0),null);
var new_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49717,(1),null);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"pinkgorilla.repl.cljs.component",null,32,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component updated ",new_config], null);
}),null)),null,(85),null);

if(cljs.core.truth_(update)){
var G__49726 = cljs.core.deref(c);
var G__49727 = id;
var G__49728 = new_config;
return (update.cljs$core$IFn$_invoke$arity$3 ? update.cljs$core$IFn$_invoke$arity$3(G__49726,G__49727,G__49728) : update.call(null,G__49726,G__49727,G__49728));
} else {
return null;
}
})], null));
});

//# sourceMappingURL=pinkgorilla.repl.cljs.component.js.map
