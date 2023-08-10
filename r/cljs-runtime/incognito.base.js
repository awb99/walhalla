goog.provide('incognito.base');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
incognito.base.IncognitoTaggedLiteral = (function (tag,value,__meta,__extmap,__hash){
this.tag = tag;
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k52179,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__52190 = k52179;
var G__52190__$1 = (((G__52190 instanceof cljs.core.Keyword))?G__52190.fqn:null);
switch (G__52190__$1) {
case "tag":
return self__.tag;

break;
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52179,else__5346__auto__);

}
}));

(incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__52195){
var vec__52196 = p__52195;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52196,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52196,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#incognito.base.IncognitoTaggedLiteral{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null))], null),self__.__extmap));
}));

(incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52178){
var self__ = this;
var G__52178__$1 = this;
return (new cljs.core.RecordIter((0),G__52178__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"value","value",305978217)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new incognito.base.IncognitoTaggedLiteral(self__.tag,self__.value,self__.__meta,self__.__extmap,self__.__hash));
}));

(incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-965605533 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52181,other52182){
var self__ = this;
var this52181__$1 = this;
return (((!((other52182 == null)))) && ((((this52181__$1.constructor === other52182.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52181__$1.tag,other52182.tag)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52181__$1.value,other52182.value)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52181__$1.__extmap,other52182.__extmap)))))))));
}));

(incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"tag","tag",-1290361223),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new incognito.base.IncognitoTaggedLiteral(self__.tag,self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k52179){
var self__ = this;
var this__5350__auto____$1 = this;
var G__52238 = k52179;
var G__52238__$1 = (((G__52238 instanceof cljs.core.Keyword))?G__52238.fqn:null);
switch (G__52238__$1) {
case "tag":
case "value":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k52179);

}
}));

(incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__52178){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__52242 = cljs.core.keyword_identical_QMARK_;
var expr__52243 = k__5352__auto__;
if(cljs.core.truth_((pred__52242.cljs$core$IFn$_invoke$arity$2 ? pred__52242.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__52243) : pred__52242.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223),expr__52243)))){
return (new incognito.base.IncognitoTaggedLiteral(G__52178,self__.value,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__52242.cljs$core$IFn$_invoke$arity$2 ? pred__52242.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),expr__52243) : pred__52242.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__52243)))){
return (new incognito.base.IncognitoTaggedLiteral(self__.tag,G__52178,self__.__meta,self__.__extmap,null));
} else {
return (new incognito.base.IncognitoTaggedLiteral(self__.tag,self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__52178),null));
}
}
}));

(incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"value","value",305978217),self__.value,null))], null),self__.__extmap));
}));

(incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__52178){
var self__ = this;
var this__5342__auto____$1 = this;
return (new incognito.base.IncognitoTaggedLiteral(self__.tag,self__.value,G__52178,self__.__extmap,self__.__hash));
}));

(incognito.base.IncognitoTaggedLiteral.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(incognito.base.IncognitoTaggedLiteral.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
}));

(incognito.base.IncognitoTaggedLiteral.cljs$lang$type = true);

(incognito.base.IncognitoTaggedLiteral.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"incognito.base/IncognitoTaggedLiteral",null,(1),null));
}));

(incognito.base.IncognitoTaggedLiteral.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"incognito.base/IncognitoTaggedLiteral");
}));

/**
 * Positional factory function for incognito.base/IncognitoTaggedLiteral.
 */
incognito.base.__GT_IncognitoTaggedLiteral = (function incognito$base$__GT_IncognitoTaggedLiteral(tag,value){
return (new incognito.base.IncognitoTaggedLiteral(tag,value,null,null,null));
});

/**
 * Factory function for incognito.base/IncognitoTaggedLiteral, taking a map of keywords to field values.
 */
incognito.base.map__GT_IncognitoTaggedLiteral = (function incognito$base$map__GT_IncognitoTaggedLiteral(G__52183){
var extmap__5385__auto__ = (function (){var G__52291 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52183,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0));
if(cljs.core.record_QMARK_(G__52183)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52291);
} else {
return G__52291;
}
})();
return (new incognito.base.IncognitoTaggedLiteral(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(G__52183),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__52183),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

incognito.base.incognito_reader = (function incognito$base$incognito_reader(read_handlers,m){
if(cljs.core.truth_((function (){var G__52301 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
return (read_handlers.cljs$core$IFn$_invoke$arity$1 ? read_handlers.cljs$core$IFn$_invoke$arity$1(G__52301) : read_handlers.call(null,G__52301));
})())){
var G__52307 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(m);
var fexpr__52306 = (function (){var G__52308 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
return (read_handlers.cljs$core$IFn$_invoke$arity$1 ? read_handlers.cljs$core$IFn$_invoke$arity$1(G__52308) : read_handlers.call(null,G__52308));
})();
return (fexpr__52306.cljs$core$IFn$_invoke$arity$1 ? fexpr__52306.cljs$core$IFn$_invoke$arity$1(G__52307) : fexpr__52306.call(null,G__52307));
} else {
return incognito.base.map__GT_IncognitoTaggedLiteral(m);
}
});
incognito.base.normalize_ns = (function incognito$base$normalize_ns(s){
return clojure.string.replace(clojure.string.replace_first(s,"/","."),"-","_");
});
incognito.base.incognito_writer = (function incognito$base$incognito_writer(write_handlers,r){
var s = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(incognito.base.normalize_ns(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.type(r)], 0))));
var break_map_recursion = ((cljs.core.map_QMARK_(r))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,r):r);
var vec__52321 = (cljs.core.truth_((write_handlers.cljs$core$IFn$_invoke$arity$1 ? write_handlers.cljs$core$IFn$_invoke$arity$1(s) : write_handlers.call(null,s)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,(function (){var fexpr__52325 = (write_handlers.cljs$core$IFn$_invoke$arity$1 ? write_handlers.cljs$core$IFn$_invoke$arity$1(s) : write_handlers.call(null,s));
return (fexpr__52325.cljs$core$IFn$_invoke$arity$1 ? fexpr__52325.cljs$core$IFn$_invoke$arity$1(break_map_recursion) : fexpr__52325.call(null,break_map_recursion));
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,break_map_recursion], null));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52321,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52321,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"value","value",305978217),v], null);
});

//# sourceMappingURL=incognito.base.js.map
