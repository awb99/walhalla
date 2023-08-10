goog.provide('pinkie.box');
pinkie.box.container_style = (function pinkie$box$container_style(box){
var box__$1 = (function (){var or__5045__auto__ = box;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"sm","sm",-1402575065);
}
})();
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(function (){var G__48392 = box__$1;
var G__48392__$1 = (((G__48392 instanceof cljs.core.Keyword))?G__48392.fqn:null);
switch (G__48392__$1) {
case "sm":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"height","height",1025178622),"300px"], null);

break;
case "md":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"600px",new cljs.core.Keyword(null,"height","height",1025178622),"400px"], null);

break;
case "lg":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"800px",new cljs.core.Keyword(null,"height","height",1025178622),"600px"], null);

break;
case "fl":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%"], null);

break;
case "na":
return cljs.core.PersistentArrayMap.EMPTY;

break;
case "fs":
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"100vw",new cljs.core.Keyword(null,"height","height",1025178622),"100vw",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(5000)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48392__$1)].join('')));

}
})()], null);
});
pinkie.box.apply_style = (function pinkie$box$apply_style(p__48401){
var map__48403 = p__48401;
var map__48403__$1 = cljs.core.__destructure_map(map__48403);
var opts = map__48403__$1;
var box = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48403__$1,new cljs.core.Keyword(null,"box","box",1530920394));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48403__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var s = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([pinkie.box.container_style(box),opts], 0));
return s;
});

//# sourceMappingURL=pinkie.box.js.map
