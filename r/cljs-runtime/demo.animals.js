goog.provide('demo.animals');
demo.animals.data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bear","bear",-413943675),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"brown",new cljs.core.Keyword(null,"size","size",1098693007),"big"], null),new cljs.core.Keyword(null,"snake","snake",-244377242),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"varies",new cljs.core.Keyword(null,"shape","shape",1190694006),"a cylinder"], null)], null);
demo.animals.animals = (function demo$animals$animals(){
return demo.animals.data;
});
demo.animals.all = (function demo$animals$all(){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__73892){
var vec__73893 = p__73892;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73893,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73893,(1),null);
return cljs.core.name(k);
}),demo.animals.data);
});

//# sourceMappingURL=demo.animals.js.map
