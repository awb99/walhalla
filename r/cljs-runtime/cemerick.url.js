goog.provide('cemerick.url');
cemerick.url.url_encode = (function cemerick$url$url_encode(string){
var G__47821 = string;
var G__47821__$1 = (((G__47821 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47821));
var G__47821__$2 = (((G__47821__$1 == null))?null:encodeURIComponent(G__47821__$1));
if((G__47821__$2 == null)){
return null;
} else {
return G__47821__$2.replace("+","%20");
}
});
cemerick.url.url_decode = (function cemerick$url$url_decode(string){
var G__47827 = string;
var G__47827__$1 = (((G__47827 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47827));
if((G__47827__$1 == null)){
return null;
} else {
return decodeURIComponent(G__47827__$1);
}
});
cemerick.url.map__GT_query = (function cemerick$url$map__GT_query(m){
var G__47837 = cljs.core.seq(m);
var G__47837__$1 = (((G__47837 == null))?null:cljs.core.sort.cljs$core$IFn$_invoke$arity$1(G__47837));
var G__47837__$2 = (((G__47837__$1 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__47846){
var vec__47847 = p__47846;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47847,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47847,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cemerick.url.url_encode(cljs.core.name(k)),"=",cemerick.url.url_encode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v))], null);
}),G__47837__$1));
var G__47837__$3 = (((G__47837__$2 == null))?null:cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("&",G__47837__$2));
var G__47837__$4 = (((G__47837__$3 == null))?null:cljs.core.flatten(G__47837__$3));
if((G__47837__$4 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,G__47837__$4);
}
});
cemerick.url.split_param = (function cemerick$url$split_param(param){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(param,/=/),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("")));
});
cemerick.url.query__GT_map = (function cemerick$url$query__GT_map(qstr){
if((!(clojure.string.blank_QMARK_(qstr)))){
var G__47853 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(qstr,/&/);
var G__47853__$1 = (((G__47853 == null))?null:cljs.core.seq(G__47853));
var G__47853__$2 = (((G__47853__$1 == null))?null:cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cemerick.url.split_param,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__47853__$1], 0)));
var G__47853__$3 = (((G__47853__$2 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2(cemerick.url.url_decode,G__47853__$2));
if((G__47853__$3 == null)){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,G__47853__$3);
}
} else {
return null;
}
});
cemerick.url.port_str = (function cemerick$url$port_str(protocol,port){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,port)) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((-1),port)) && ((((!((((port === (80))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"http")))))) && ((!((((port === (443))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https")))))))))))){
return [":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(port)].join('');
} else {
return null;
}
});
cemerick.url.url_creds = (function cemerick$url$url_creds(username,password){
if(cljs.core.truth_(username)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(username),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(password)].join('');
} else {
return null;
}
});

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
cemerick.url.URL = (function (protocol,username,password,host,port,path,query,anchor,__meta,__extmap,__hash){
this.protocol = protocol;
this.username = username;
this.password = password;
this.host = host;
this.port = port;
this.path = path;
this.query = query;
this.anchor = anchor;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(cemerick.url.URL.prototype.toString = (function (){
var self__ = this;
var this$ = this;
var creds = cemerick.url.url_creds(self__.username,self__.password);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.protocol),"://",creds,(cljs.core.truth_(creds)?"@":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.host),cemerick.url.port_str(self__.protocol,self__.port),cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.path),((cljs.core.seq(self__.query))?["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof self__.query === 'string')?self__.query:cemerick.url.map__GT_query(self__.query)))].join(''):null),(cljs.core.truth_(self__.anchor)?["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.anchor)].join(''):null)].join('');
}));

(cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(cemerick.url.URL.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k47870,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__47889 = k47870;
var G__47889__$1 = (((G__47889 instanceof cljs.core.Keyword))?G__47889.fqn:null);
switch (G__47889__$1) {
case "protocol":
return self__.protocol;

break;
case "username":
return self__.username;

break;
case "password":
return self__.password;

break;
case "host":
return self__.host;

break;
case "port":
return self__.port;

break;
case "path":
return self__.path;

break;
case "query":
return self__.query;

break;
case "anchor":
return self__.anchor;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k47870,else__5346__auto__);

}
}));

(cemerick.url.URL.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__47899){
var vec__47901 = p__47899;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47901,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47901,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(cemerick.url.URL.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#cemerick.url.URL{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"protocol","protocol",652470118),self__.protocol],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"username","username",1605666410),self__.username],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"password","password",417022471),self__.password],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"anchor","anchor",1549638489),self__.anchor],null))], null),self__.__extmap));
}));

(cemerick.url.URL.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__47869){
var self__ = this;
var G__47869__$1 = this;
return (new cljs.core.RecordIter((0),G__47869__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"anchor","anchor",1549638489)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(cemerick.url.URL.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(cemerick.url.URL.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,self__.__hash));
}));

(cemerick.url.URL.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
}));

(cemerick.url.URL.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-797987557 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(cemerick.url.URL.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this47871,other47872){
var self__ = this;
var this47871__$1 = this;
return (((!((other47872 == null)))) && ((((this47871__$1.constructor === other47872.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47871__$1.protocol,other47872.protocol)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47871__$1.username,other47872.username)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47871__$1.password,other47872.password)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47871__$1.host,other47872.host)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47871__$1.port,other47872.port)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47871__$1.path,other47872.path)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47871__$1.query,other47872.query)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47871__$1.anchor,other47872.anchor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this47871__$1.__extmap,other47872.__extmap)))))))))))))))))))));
}));

(cemerick.url.URL.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"protocol","protocol",652470118),null,new cljs.core.Keyword(null,"password","password",417022471),null,new cljs.core.Keyword(null,"username","username",1605666410),null,new cljs.core.Keyword(null,"port","port",1534937262),null,new cljs.core.Keyword(null,"host","host",-1558485167),null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),null,new cljs.core.Keyword(null,"query","query",-1288509510),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(cemerick.url.URL.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k47870){
var self__ = this;
var this__5350__auto____$1 = this;
var G__47919 = k47870;
var G__47919__$1 = (((G__47919 instanceof cljs.core.Keyword))?G__47919.fqn:null);
switch (G__47919__$1) {
case "protocol":
case "username":
case "password":
case "host":
case "port":
case "path":
case "query":
case "anchor":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k47870);

}
}));

(cemerick.url.URL.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__47869){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__47920 = cljs.core.keyword_identical_QMARK_;
var expr__47922 = k__5352__auto__;
if(cljs.core.truth_((pred__47920.cljs$core$IFn$_invoke$arity$2 ? pred__47920.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"protocol","protocol",652470118),expr__47922) : pred__47920.call(null,new cljs.core.Keyword(null,"protocol","protocol",652470118),expr__47922)))){
return (new cemerick.url.URL(G__47869,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47920.cljs$core$IFn$_invoke$arity$2 ? pred__47920.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"username","username",1605666410),expr__47922) : pred__47920.call(null,new cljs.core.Keyword(null,"username","username",1605666410),expr__47922)))){
return (new cemerick.url.URL(self__.protocol,G__47869,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47920.cljs$core$IFn$_invoke$arity$2 ? pred__47920.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"password","password",417022471),expr__47922) : pred__47920.call(null,new cljs.core.Keyword(null,"password","password",417022471),expr__47922)))){
return (new cemerick.url.URL(self__.protocol,self__.username,G__47869,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47920.cljs$core$IFn$_invoke$arity$2 ? pred__47920.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"host","host",-1558485167),expr__47922) : pred__47920.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),expr__47922)))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,G__47869,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47920.cljs$core$IFn$_invoke$arity$2 ? pred__47920.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"port","port",1534937262),expr__47922) : pred__47920.call(null,new cljs.core.Keyword(null,"port","port",1534937262),expr__47922)))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,G__47869,self__.path,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47920.cljs$core$IFn$_invoke$arity$2 ? pred__47920.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),expr__47922) : pred__47920.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__47922)))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,G__47869,self__.query,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47920.cljs$core$IFn$_invoke$arity$2 ? pred__47920.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"query","query",-1288509510),expr__47922) : pred__47920.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),expr__47922)))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,G__47869,self__.anchor,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__47920.cljs$core$IFn$_invoke$arity$2 ? pred__47920.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"anchor","anchor",1549638489),expr__47922) : pred__47920.call(null,new cljs.core.Keyword(null,"anchor","anchor",1549638489),expr__47922)))){
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,G__47869,self__.__meta,self__.__extmap,null));
} else {
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__47869),null));
}
}
}
}
}
}
}
}
}));

(cemerick.url.URL.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"protocol","protocol",652470118),self__.protocol,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"username","username",1605666410),self__.username,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"password","password",417022471),self__.password,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"host","host",-1558485167),self__.host,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"port","port",1534937262),self__.port,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"query","query",-1288509510),self__.query,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"anchor","anchor",1549638489),self__.anchor,null))], null),self__.__extmap));
}));

(cemerick.url.URL.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__47869){
var self__ = this;
var this__5342__auto____$1 = this;
return (new cemerick.url.URL(self__.protocol,self__.username,self__.password,self__.host,self__.port,self__.path,self__.query,self__.anchor,G__47869,self__.__extmap,self__.__hash));
}));

(cemerick.url.URL.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(cemerick.url.URL.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"protocol","protocol",-2001965651,null),new cljs.core.Symbol(null,"username","username",-1048769359,null),new cljs.core.Symbol(null,"password","password",2057553998,null),new cljs.core.Symbol(null,"host","host",82046360,null),new cljs.core.Symbol(null,"port","port",-1119498507,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.Symbol(null,"anchor","anchor",-1104797280,null)], null);
}));

(cemerick.url.URL.cljs$lang$type = true);

(cemerick.url.URL.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"cemerick.url/URL",null,(1),null));
}));

(cemerick.url.URL.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"cemerick.url/URL");
}));

/**
 * Positional factory function for cemerick.url/URL.
 */
cemerick.url.__GT_URL = (function cemerick$url$__GT_URL(protocol,username,password,host,port,path,query,anchor){
return (new cemerick.url.URL(protocol,username,password,host,port,path,query,anchor,null,null,null));
});

/**
 * Factory function for cemerick.url/URL, taking a map of keywords to field values.
 */
cemerick.url.map__GT_URL = (function cemerick$url$map__GT_URL(G__47873){
var extmap__5385__auto__ = (function (){var G__47932 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__47873,new cljs.core.Keyword(null,"protocol","protocol",652470118),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"username","username",1605666410),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"anchor","anchor",1549638489)], 0));
if(cljs.core.record_QMARK_(G__47873)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__47932);
} else {
return G__47932;
}
})();
return (new cemerick.url.URL(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(G__47873),new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(G__47873),new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(G__47873),new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(G__47873),new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(G__47873),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__47873),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(G__47873),new cljs.core.Keyword(null,"anchor","anchor",1549638489).cljs$core$IFn$_invoke$arity$1(G__47873),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

cemerick.url.translate_default = (function cemerick$url$translate_default(s,old_default,new_default){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s,old_default)){
return new_default;
} else {
return s;
}
});
cemerick.url.url_STAR_ = (function cemerick$url$url_STAR_(url){
var url__$1 = (new goog.Uri(url));
var vec__47935 = clojure.string.split.cljs$core$IFn$_invoke$arity$3((function (){var or__5045__auto__ = url__$1.getUserInfo();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})(),/:/,(2));
var user = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47935,(0),null);
var pass = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47935,(1),null);
return (new cemerick.url.URL(url__$1.getScheme(),(function (){var and__5043__auto__ = cljs.core.seq(user);
if(and__5043__auto__){
return user;
} else {
return and__5043__auto__;
}
})(),(function (){var and__5043__auto__ = cljs.core.seq(pass);
if(and__5043__auto__){
return pass;
} else {
return and__5043__auto__;
}
})(),url__$1.getDomain(),cemerick.url.translate_default(url__$1.getPort(),null,(-1)),pathetic.core.normalize(url__$1.getPath()),cemerick.url.query__GT_map(cemerick.url.translate_default(url__$1.getQuery(),"",null)),cemerick.url.translate_default(url__$1.getFragment(),"",null),null,null,null));
});
/**
 * Returns a new URL record for the given url string(s).
 * 
 * The first argument must be a base url — either a complete url string, or
 * a pre-existing URL record instance that will serve as the basis for the new
 * URL.  Any additional arguments must be strings, which are interpreted as
 * relative paths that are successively resolved against the base url's path
 * to construct the final :path in the returned URL record. 
 * 
 * This function does not perform any url-encoding.  Use `url-encode` to encode
 * URL path segments as desired before passing them into this fn.
 */
cemerick.url.url = (function cemerick$url$url(var_args){
var G__47959 = arguments.length;
switch (G__47959) {
case 1:
return cemerick.url.url.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5794__auto__ = [];
var len__5769__auto___48010 = arguments.length;
var i__5770__auto___48011 = (0);
while(true){
if((i__5770__auto___48011 < len__5769__auto___48010)){
args_arr__5794__auto__.push((arguments[i__5770__auto___48011]));

var G__48012 = (i__5770__auto___48011 + (1));
i__5770__auto___48011 = G__48012;
continue;
} else {
}
break;
}

var argseq__5795__auto__ = (new cljs.core.IndexedSeq(args_arr__5794__auto__.slice((1)),(0),null));
return cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5795__auto__);

}
});

(cemerick.url.url.cljs$core$IFn$_invoke$arity$1 = (function (url){
if((url instanceof cemerick.url.URL)){
return url;
} else {
return cemerick.url.url_STAR_(url);
}
}));

(cemerick.url.url.cljs$core$IFn$_invoke$arity$variadic = (function (base_url,path_segments){
var base_url__$1 = (((base_url instanceof cemerick.url.URL))?base_url:cemerick.url.url.cljs$core$IFn$_invoke$arity$1(base_url));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(base_url__$1,new cljs.core.Keyword(null,"path","path",-188191168),pathetic.core.normalize(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(pathetic.core.resolve,base_url__$1.path,path_segments)));
}));

/** @this {Function} */
(cemerick.url.url.cljs$lang$applyTo = (function (seq47956){
var G__47957 = cljs.core.first(seq47956);
var seq47956__$1 = cljs.core.next(seq47956);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47957,seq47956__$1);
}));

(cemerick.url.url.cljs$lang$maxFixedArity = (1));


//# sourceMappingURL=cemerick.url.js.map
