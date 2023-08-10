goog.provide('taoensso.sente.packers.transit');
/**
 * Returns thread-safe (fn [x-to-write])
 */
taoensso.sente.packers.transit.get_transit_writer_fn = (function (){var G__51865 = (function (fmt,opts){
var writer = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(fmt,opts);
return (function (x){
return cognitect.transit.write(writer,x);
});
});
return (taoensso.encore.memoize_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.memoize_.cljs$core$IFn$_invoke$arity$1(G__51865) : taoensso.encore.memoize_.call(null,G__51865));
})();
/**
 * Returns thread-safe (fn [str-to-read])
 */
taoensso.sente.packers.transit.get_transit_reader_fn = (function (){var G__51871 = (function (fmt,opts){
var reader = cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(fmt,opts);
return (function (s){
return cognitect.transit.read(reader,s);
});
});
return (taoensso.encore.memoize_.cljs$core$IFn$_invoke$arity$1 ? taoensso.encore.memoize_.cljs$core$IFn$_invoke$arity$1(G__51871) : taoensso.encore.memoize_.call(null,G__51871));
})();

/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.packers.transit.TransitPacker = (function (transit_fmt,writer_opts,reader_opts){
this.transit_fmt = transit_fmt;
this.writer_opts = writer_opts;
this.reader_opts = reader_opts;
});
(taoensso.sente.packers.transit.TransitPacker.prototype.taoensso$sente$interfaces$IPacker$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.packers.transit.TransitPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var fexpr__51874 = (taoensso.sente.packers.transit.get_transit_writer_fn.cljs$core$IFn$_invoke$arity$2 ? taoensso.sente.packers.transit.get_transit_writer_fn.cljs$core$IFn$_invoke$arity$2(self__.transit_fmt,self__.writer_opts) : taoensso.sente.packers.transit.get_transit_writer_fn.call(null,self__.transit_fmt,self__.writer_opts));
return (fexpr__51874.cljs$core$IFn$_invoke$arity$1 ? fexpr__51874.cljs$core$IFn$_invoke$arity$1(x) : fexpr__51874.call(null,x));
}));

(taoensso.sente.packers.transit.TransitPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
var fexpr__51876 = (taoensso.sente.packers.transit.get_transit_reader_fn.cljs$core$IFn$_invoke$arity$2 ? taoensso.sente.packers.transit.get_transit_reader_fn.cljs$core$IFn$_invoke$arity$2(self__.transit_fmt,self__.reader_opts) : taoensso.sente.packers.transit.get_transit_reader_fn.call(null,self__.transit_fmt,self__.reader_opts));
return (fexpr__51876.cljs$core$IFn$_invoke$arity$1 ? fexpr__51876.cljs$core$IFn$_invoke$arity$1(s) : fexpr__51876.call(null,s));
}));

(taoensso.sente.packers.transit.TransitPacker.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"transit-fmt","transit-fmt",913727703,null),new cljs.core.Symbol(null,"writer-opts","writer-opts",1122222818,null),new cljs.core.Symbol(null,"reader-opts","reader-opts",-1524615329,null)], null);
}));

(taoensso.sente.packers.transit.TransitPacker.cljs$lang$type = true);

(taoensso.sente.packers.transit.TransitPacker.cljs$lang$ctorStr = "taoensso.sente.packers.transit/TransitPacker");

(taoensso.sente.packers.transit.TransitPacker.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"taoensso.sente.packers.transit/TransitPacker");
}));

/**
 * Positional factory function for taoensso.sente.packers.transit/TransitPacker.
 */
taoensso.sente.packers.transit.__GT_TransitPacker = (function taoensso$sente$packers$transit$__GT_TransitPacker(transit_fmt,writer_opts,reader_opts){
return (new taoensso.sente.packers.transit.TransitPacker(transit_fmt,writer_opts,reader_opts));
});

/**
 * Returns a new TransitPacker
 */
taoensso.sente.packers.transit.get_transit_packer = (function taoensso$sente$packers$transit$get_transit_packer(var_args){
var G__51888 = arguments.length;
switch (G__51888) {
case 0:
return taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$0 = (function (){
return taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"json","json",1279968570),cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
}));

(taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$1 = (function (transit_fmt){
return taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$3(transit_fmt,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY);
}));

(taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$3 = (function (transit_fmt,writer_opts,reader_opts){
var e_51918 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_(taoensso.truss.impl.ensure_set(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"json-verbose","json-verbose",-542533531),null,new cljs.core.Keyword(null,"json","json",1279968570),null], null), null)),x);
})(transit_fmt)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51895){if((e51895 instanceof Error)){
var e_51918 = e51895;
return e_51918;
} else {
throw e51895;

}
}})();
if((e_51918 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente.packers.transit","taoensso.sente.packers.transit",342192149,null),102,4,"jar:file:/home/florian/.m2/repository/com/taoensso/sente/1.16.2/sente-1.16.2.jar!/taoensso/sente/packers/transit.cljc",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"el","el",-1618201118),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"json-verbose","json-verbose",-542533531),"null",new cljs.core.Keyword(null,"json","json",1279968570),"null"], null), null)], null),new cljs.core.Symbol(null,"transit-fmt","transit-fmt",913727703,null),transit_fmt,e_51918,null);
}

var e_51922 = (function (){try{if(cljs.core.map_QMARK_(writer_opts)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51908){if((e51908 instanceof Error)){
var e_51922 = e51908;
return e_51922;
} else {
throw e51908;

}
}})();
if((e_51922 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente.packers.transit","taoensso.sente.packers.transit",342192149,null),103,4,"jar:file:/home/florian/.m2/repository/com/taoensso/sente/1.16.2/sente-1.16.2.jar!/taoensso/sente/packers/transit.cljc",new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"writer-opts","writer-opts",1122222818,null),writer_opts,e_51922,null);
}

var e_51925 = (function (){try{if(cljs.core.map_QMARK_(reader_opts)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e51910){if((e51910 instanceof Error)){
var e_51925 = e51910;
return e_51925;
} else {
throw e51910;

}
}})();
if((e_51925 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,new cljs.core.Symbol(null,"taoensso.sente.packers.transit","taoensso.sente.packers.transit",342192149,null),103,4,"jar:file:/home/florian/.m2/repository/com/taoensso/sente/1.16.2/sente-1.16.2.jar!/taoensso/sente/packers/transit.cljc",new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"reader-opts","reader-opts",-1524615329,null),reader_opts,e_51925,null);
}


return (new taoensso.sente.packers.transit.TransitPacker(transit_fmt,writer_opts,reader_opts));
}));

(taoensso.sente.packers.transit.get_transit_packer.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=taoensso.sente.packers.transit.js.map
