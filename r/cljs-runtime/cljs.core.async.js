goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50431 = (function (f,blockable,meta50432){
this.f = f;
this.blockable = blockable;
this.meta50432 = meta50432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50433,meta50432__$1){
var self__ = this;
var _50433__$1 = this;
return (new cljs.core.async.t_cljs$core$async50431(self__.f,self__.blockable,meta50432__$1));
}));

(cljs.core.async.t_cljs$core$async50431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50433){
var self__ = this;
var _50433__$1 = this;
return self__.meta50432;
}));

(cljs.core.async.t_cljs$core$async50431.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50431.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50431.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async50431.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async50431.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta50432","meta50432",1339808523,null)], null);
}));

(cljs.core.async.t_cljs$core$async50431.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50431.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50431");

(cljs.core.async.t_cljs$core$async50431.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async50431");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50431.
 */
cljs.core.async.__GT_t_cljs$core$async50431 = (function cljs$core$async$__GT_t_cljs$core$async50431(f,blockable,meta50432){
return (new cljs.core.async.t_cljs$core$async50431(f,blockable,meta50432));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__50430 = arguments.length;
switch (G__50430) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async50431(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__50439 = arguments.length;
switch (G__50439) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__50443 = arguments.length;
switch (G__50443) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__50445 = arguments.length;
switch (G__50445) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_52729 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52729) : fn1.call(null,val_52729));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_52729) : fn1.call(null,val_52729));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__50447 = arguments.length;
switch (G__50447) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___52737 = n;
var x_52738 = (0);
while(true){
if((x_52738 < n__5636__auto___52737)){
(a[x_52738] = x_52738);

var G__52739 = (x_52738 + (1));
x_52738 = G__52739;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50450 = (function (flag,meta50451){
this.flag = flag;
this.meta50451 = meta50451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50452,meta50451__$1){
var self__ = this;
var _50452__$1 = this;
return (new cljs.core.async.t_cljs$core$async50450(self__.flag,meta50451__$1));
}));

(cljs.core.async.t_cljs$core$async50450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50452){
var self__ = this;
var _50452__$1 = this;
return self__.meta50451;
}));

(cljs.core.async.t_cljs$core$async50450.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50450.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50450.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50450.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async50450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta50451","meta50451",-2065404963,null)], null);
}));

(cljs.core.async.t_cljs$core$async50450.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50450");

(cljs.core.async.t_cljs$core$async50450.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async50450");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50450.
 */
cljs.core.async.__GT_t_cljs$core$async50450 = (function cljs$core$async$__GT_t_cljs$core$async50450(flag,meta50451){
return (new cljs.core.async.t_cljs$core$async50450(flag,meta50451));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async50450(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50456 = (function (flag,cb,meta50457){
this.flag = flag;
this.cb = cb;
this.meta50457 = meta50457;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50458,meta50457__$1){
var self__ = this;
var _50458__$1 = this;
return (new cljs.core.async.t_cljs$core$async50456(self__.flag,self__.cb,meta50457__$1));
}));

(cljs.core.async.t_cljs$core$async50456.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50458){
var self__ = this;
var _50458__$1 = this;
return self__.meta50457;
}));

(cljs.core.async.t_cljs$core$async50456.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50456.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async50456.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async50456.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async50456.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta50457","meta50457",145672904,null)], null);
}));

(cljs.core.async.t_cljs$core$async50456.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50456.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50456");

(cljs.core.async.t_cljs$core$async50456.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async50456");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50456.
 */
cljs.core.async.__GT_t_cljs$core$async50456 = (function cljs$core$async$__GT_t_cljs$core$async50456(flag,cb,meta50457){
return (new cljs.core.async.t_cljs$core$async50456(flag,cb,meta50457));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async50456(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__50459_SHARP_){
var G__50461 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50459_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50461) : fret.call(null,G__50461));
});})(i,val,idx,port,wport,flag,ports__$1,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,idxs,priority){
return (function (p1__50460_SHARP_){
var G__50462 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__50460_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__50462) : fret.call(null,G__50462));
});})(i,idx,port,wport,flag,ports__$1,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__52763 = (i + (1));
i = G__52763;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___52774 = arguments.length;
var i__5770__auto___52775 = (0);
while(true){
if((i__5770__auto___52775 < len__5769__auto___52774)){
args__5775__auto__.push((arguments[i__5770__auto___52775]));

var G__52776 = (i__5770__auto___52775 + (1));
i__5770__auto___52775 = G__52776;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__50465){
var map__50466 = p__50465;
var map__50466__$1 = cljs.core.__destructure_map(map__50466);
var opts = map__50466__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq50463){
var G__50464 = cljs.core.first(seq50463);
var seq50463__$1 = cljs.core.next(seq50463);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50464,seq50463__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__50468 = arguments.length;
switch (G__50468) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__50366__auto___52778 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50367__auto__ = (function (){var switch__50318__auto__ = (function (state_50500){
var state_val_50502 = (state_50500[(1)]);
if((state_val_50502 === (7))){
var inst_50495 = (state_50500[(2)]);
var state_50500__$1 = state_50500;
var statearr_50504_52779 = state_50500__$1;
(statearr_50504_52779[(2)] = inst_50495);

(statearr_50504_52779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50502 === (1))){
var state_50500__$1 = state_50500;
var statearr_50505_52781 = state_50500__$1;
(statearr_50505_52781[(2)] = null);

(statearr_50505_52781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50502 === (4))){
var inst_50478 = (state_50500[(7)]);
var inst_50478__$1 = (state_50500[(2)]);
var inst_50479 = (inst_50478__$1 == null);
var state_50500__$1 = (function (){var statearr_50508 = state_50500;
(statearr_50508[(7)] = inst_50478__$1);

return statearr_50508;
})();
if(cljs.core.truth_(inst_50479)){
var statearr_50509_52782 = state_50500__$1;
(statearr_50509_52782[(1)] = (5));

} else {
var statearr_50510_52783 = state_50500__$1;
(statearr_50510_52783[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50502 === (13))){
var state_50500__$1 = state_50500;
var statearr_50514_52784 = state_50500__$1;
(statearr_50514_52784[(2)] = null);

(statearr_50514_52784[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50502 === (6))){
var inst_50478 = (state_50500[(7)]);
var state_50500__$1 = state_50500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50500__$1,(11),to,inst_50478);
} else {
if((state_val_50502 === (3))){
var inst_50497 = (state_50500[(2)]);
var state_50500__$1 = state_50500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50500__$1,inst_50497);
} else {
if((state_val_50502 === (12))){
var state_50500__$1 = state_50500;
var statearr_50517_52786 = state_50500__$1;
(statearr_50517_52786[(2)] = null);

(statearr_50517_52786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50502 === (2))){
var state_50500__$1 = state_50500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50500__$1,(4),from);
} else {
if((state_val_50502 === (11))){
var inst_50488 = (state_50500[(2)]);
var state_50500__$1 = state_50500;
if(cljs.core.truth_(inst_50488)){
var statearr_50518_52787 = state_50500__$1;
(statearr_50518_52787[(1)] = (12));

} else {
var statearr_50519_52788 = state_50500__$1;
(statearr_50519_52788[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50502 === (9))){
var state_50500__$1 = state_50500;
var statearr_50520_52789 = state_50500__$1;
(statearr_50520_52789[(2)] = null);

(statearr_50520_52789[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50502 === (5))){
var state_50500__$1 = state_50500;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50521_52790 = state_50500__$1;
(statearr_50521_52790[(1)] = (8));

} else {
var statearr_50522_52791 = state_50500__$1;
(statearr_50522_52791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50502 === (14))){
var inst_50493 = (state_50500[(2)]);
var state_50500__$1 = state_50500;
var statearr_50523_52792 = state_50500__$1;
(statearr_50523_52792[(2)] = inst_50493);

(statearr_50523_52792[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50502 === (10))){
var inst_50485 = (state_50500[(2)]);
var state_50500__$1 = state_50500;
var statearr_50524_52793 = state_50500__$1;
(statearr_50524_52793[(2)] = inst_50485);

(statearr_50524_52793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50502 === (8))){
var inst_50482 = cljs.core.async.close_BANG_(to);
var state_50500__$1 = state_50500;
var statearr_50525_52794 = state_50500__$1;
(statearr_50525_52794[(2)] = inst_50482);

(statearr_50525_52794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50319__auto__ = null;
var cljs$core$async$state_machine__50319__auto____0 = (function (){
var statearr_50526 = [null,null,null,null,null,null,null,null];
(statearr_50526[(0)] = cljs$core$async$state_machine__50319__auto__);

(statearr_50526[(1)] = (1));

return statearr_50526;
});
var cljs$core$async$state_machine__50319__auto____1 = (function (state_50500){
while(true){
var ret_value__50320__auto__ = (function (){try{while(true){
var result__50321__auto__ = switch__50318__auto__(state_50500);
if(cljs.core.keyword_identical_QMARK_(result__50321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50321__auto__;
}
break;
}
}catch (e50527){var ex__50322__auto__ = e50527;
var statearr_50528_52797 = state_50500;
(statearr_50528_52797[(2)] = ex__50322__auto__);


if(cljs.core.seq((state_50500[(4)]))){
var statearr_50530_52798 = state_50500;
(statearr_50530_52798[(1)] = cljs.core.first((state_50500[(4)])));

} else {
throw ex__50322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52799 = state_50500;
state_50500 = G__52799;
continue;
} else {
return ret_value__50320__auto__;
}
break;
}
});
cljs$core$async$state_machine__50319__auto__ = function(state_50500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50319__auto____1.call(this,state_50500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50319__auto____0;
cljs$core$async$state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50319__auto____1;
return cljs$core$async$state_machine__50319__auto__;
})()
})();
var state__50368__auto__ = (function (){var statearr_50532 = f__50367__auto__();
(statearr_50532[(6)] = c__50366__auto___52778);

return statearr_50532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50368__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__50534){
var vec__50536 = p__50534;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50536,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50536,(1),null);
var job = vec__50536;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__50366__auto___52805 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50367__auto__ = (function (){var switch__50318__auto__ = (function (state_50543){
var state_val_50544 = (state_50543[(1)]);
if((state_val_50544 === (1))){
var state_50543__$1 = state_50543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50543__$1,(2),res,v);
} else {
if((state_val_50544 === (2))){
var inst_50540 = (state_50543[(2)]);
var inst_50541 = cljs.core.async.close_BANG_(res);
var state_50543__$1 = (function (){var statearr_50545 = state_50543;
(statearr_50545[(7)] = inst_50540);

return statearr_50545;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_50543__$1,inst_50541);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____0 = (function (){
var statearr_50546 = [null,null,null,null,null,null,null,null];
(statearr_50546[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__);

(statearr_50546[(1)] = (1));

return statearr_50546;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____1 = (function (state_50543){
while(true){
var ret_value__50320__auto__ = (function (){try{while(true){
var result__50321__auto__ = switch__50318__auto__(state_50543);
if(cljs.core.keyword_identical_QMARK_(result__50321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50321__auto__;
}
break;
}
}catch (e50547){var ex__50322__auto__ = e50547;
var statearr_50548_52807 = state_50543;
(statearr_50548_52807[(2)] = ex__50322__auto__);


if(cljs.core.seq((state_50543[(4)]))){
var statearr_50549_52808 = state_50543;
(statearr_50549_52808[(1)] = cljs.core.first((state_50543[(4)])));

} else {
throw ex__50322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52809 = state_50543;
state_50543 = G__52809;
continue;
} else {
return ret_value__50320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__ = function(state_50543){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____1.call(this,state_50543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__;
})()
})();
var state__50368__auto__ = (function (){var statearr_50551 = f__50367__auto__();
(statearr_50551[(6)] = c__50366__auto___52805);

return statearr_50551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50368__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__50554){
var vec__50556 = p__50554;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50556,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50556,(1),null);
var job = vec__50556;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___52815 = n;
var __52816 = (0);
while(true){
if((__52816 < n__5636__auto___52815)){
var G__50563_52817 = type;
var G__50563_52818__$1 = (((G__50563_52817 instanceof cljs.core.Keyword))?G__50563_52817.fqn:null);
switch (G__50563_52818__$1) {
case "compute":
var c__50366__auto___52820 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52816,c__50366__auto___52820,G__50563_52817,G__50563_52818__$1,n__5636__auto___52815,jobs,results,process__$1,async){
return (function (){
var f__50367__auto__ = (function (){var switch__50318__auto__ = ((function (__52816,c__50366__auto___52820,G__50563_52817,G__50563_52818__$1,n__5636__auto___52815,jobs,results,process__$1,async){
return (function (state_50581){
var state_val_50582 = (state_50581[(1)]);
if((state_val_50582 === (1))){
var state_50581__$1 = state_50581;
var statearr_50583_52822 = state_50581__$1;
(statearr_50583_52822[(2)] = null);

(statearr_50583_52822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50582 === (2))){
var state_50581__$1 = state_50581;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50581__$1,(4),jobs);
} else {
if((state_val_50582 === (3))){
var inst_50578 = (state_50581[(2)]);
var state_50581__$1 = state_50581;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50581__$1,inst_50578);
} else {
if((state_val_50582 === (4))){
var inst_50570 = (state_50581[(2)]);
var inst_50571 = process__$1(inst_50570);
var state_50581__$1 = state_50581;
if(cljs.core.truth_(inst_50571)){
var statearr_50586_52825 = state_50581__$1;
(statearr_50586_52825[(1)] = (5));

} else {
var statearr_50587_52827 = state_50581__$1;
(statearr_50587_52827[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50582 === (5))){
var state_50581__$1 = state_50581;
var statearr_50588_52829 = state_50581__$1;
(statearr_50588_52829[(2)] = null);

(statearr_50588_52829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50582 === (6))){
var state_50581__$1 = state_50581;
var statearr_50589_52833 = state_50581__$1;
(statearr_50589_52833[(2)] = null);

(statearr_50589_52833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50582 === (7))){
var inst_50576 = (state_50581[(2)]);
var state_50581__$1 = state_50581;
var statearr_50591_52834 = state_50581__$1;
(statearr_50591_52834[(2)] = inst_50576);

(statearr_50591_52834[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__52816,c__50366__auto___52820,G__50563_52817,G__50563_52818__$1,n__5636__auto___52815,jobs,results,process__$1,async))
;
return ((function (__52816,switch__50318__auto__,c__50366__auto___52820,G__50563_52817,G__50563_52818__$1,n__5636__auto___52815,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____0 = (function (){
var statearr_50592 = [null,null,null,null,null,null,null];
(statearr_50592[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__);

(statearr_50592[(1)] = (1));

return statearr_50592;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____1 = (function (state_50581){
while(true){
var ret_value__50320__auto__ = (function (){try{while(true){
var result__50321__auto__ = switch__50318__auto__(state_50581);
if(cljs.core.keyword_identical_QMARK_(result__50321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50321__auto__;
}
break;
}
}catch (e50593){var ex__50322__auto__ = e50593;
var statearr_50594_52838 = state_50581;
(statearr_50594_52838[(2)] = ex__50322__auto__);


if(cljs.core.seq((state_50581[(4)]))){
var statearr_50595_52839 = state_50581;
(statearr_50595_52839[(1)] = cljs.core.first((state_50581[(4)])));

} else {
throw ex__50322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52840 = state_50581;
state_50581 = G__52840;
continue;
} else {
return ret_value__50320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__ = function(state_50581){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____1.call(this,state_50581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__;
})()
;})(__52816,switch__50318__auto__,c__50366__auto___52820,G__50563_52817,G__50563_52818__$1,n__5636__auto___52815,jobs,results,process__$1,async))
})();
var state__50368__auto__ = (function (){var statearr_50596 = f__50367__auto__();
(statearr_50596[(6)] = c__50366__auto___52820);

return statearr_50596;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50368__auto__);
});})(__52816,c__50366__auto___52820,G__50563_52817,G__50563_52818__$1,n__5636__auto___52815,jobs,results,process__$1,async))
);


break;
case "async":
var c__50366__auto___52843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__52816,c__50366__auto___52843,G__50563_52817,G__50563_52818__$1,n__5636__auto___52815,jobs,results,process__$1,async){
return (function (){
var f__50367__auto__ = (function (){var switch__50318__auto__ = ((function (__52816,c__50366__auto___52843,G__50563_52817,G__50563_52818__$1,n__5636__auto___52815,jobs,results,process__$1,async){
return (function (state_50611){
var state_val_50613 = (state_50611[(1)]);
if((state_val_50613 === (1))){
var state_50611__$1 = state_50611;
var statearr_50615_52844 = state_50611__$1;
(statearr_50615_52844[(2)] = null);

(statearr_50615_52844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50613 === (2))){
var state_50611__$1 = state_50611;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50611__$1,(4),jobs);
} else {
if((state_val_50613 === (3))){
var inst_50609 = (state_50611[(2)]);
var state_50611__$1 = state_50611;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50611__$1,inst_50609);
} else {
if((state_val_50613 === (4))){
var inst_50601 = (state_50611[(2)]);
var inst_50602 = async(inst_50601);
var state_50611__$1 = state_50611;
if(cljs.core.truth_(inst_50602)){
var statearr_50616_52848 = state_50611__$1;
(statearr_50616_52848[(1)] = (5));

} else {
var statearr_50617_52850 = state_50611__$1;
(statearr_50617_52850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50613 === (5))){
var state_50611__$1 = state_50611;
var statearr_50618_52851 = state_50611__$1;
(statearr_50618_52851[(2)] = null);

(statearr_50618_52851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50613 === (6))){
var state_50611__$1 = state_50611;
var statearr_50619_52852 = state_50611__$1;
(statearr_50619_52852[(2)] = null);

(statearr_50619_52852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50613 === (7))){
var inst_50607 = (state_50611[(2)]);
var state_50611__$1 = state_50611;
var statearr_50620_52853 = state_50611__$1;
(statearr_50620_52853[(2)] = inst_50607);

(statearr_50620_52853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__52816,c__50366__auto___52843,G__50563_52817,G__50563_52818__$1,n__5636__auto___52815,jobs,results,process__$1,async))
;
return ((function (__52816,switch__50318__auto__,c__50366__auto___52843,G__50563_52817,G__50563_52818__$1,n__5636__auto___52815,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____0 = (function (){
var statearr_50621 = [null,null,null,null,null,null,null];
(statearr_50621[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__);

(statearr_50621[(1)] = (1));

return statearr_50621;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____1 = (function (state_50611){
while(true){
var ret_value__50320__auto__ = (function (){try{while(true){
var result__50321__auto__ = switch__50318__auto__(state_50611);
if(cljs.core.keyword_identical_QMARK_(result__50321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50321__auto__;
}
break;
}
}catch (e50622){var ex__50322__auto__ = e50622;
var statearr_50623_52854 = state_50611;
(statearr_50623_52854[(2)] = ex__50322__auto__);


if(cljs.core.seq((state_50611[(4)]))){
var statearr_50624_52856 = state_50611;
(statearr_50624_52856[(1)] = cljs.core.first((state_50611[(4)])));

} else {
throw ex__50322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52857 = state_50611;
state_50611 = G__52857;
continue;
} else {
return ret_value__50320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__ = function(state_50611){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____1.call(this,state_50611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__;
})()
;})(__52816,switch__50318__auto__,c__50366__auto___52843,G__50563_52817,G__50563_52818__$1,n__5636__auto___52815,jobs,results,process__$1,async))
})();
var state__50368__auto__ = (function (){var statearr_50625 = f__50367__auto__();
(statearr_50625[(6)] = c__50366__auto___52843);

return statearr_50625;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50368__auto__);
});})(__52816,c__50366__auto___52843,G__50563_52817,G__50563_52818__$1,n__5636__auto___52815,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50563_52818__$1)].join('')));

}

var G__52858 = (__52816 + (1));
__52816 = G__52858;
continue;
} else {
}
break;
}

var c__50366__auto___52859 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50367__auto__ = (function (){var switch__50318__auto__ = (function (state_50653){
var state_val_50654 = (state_50653[(1)]);
if((state_val_50654 === (7))){
var inst_50649 = (state_50653[(2)]);
var state_50653__$1 = state_50653;
var statearr_50656_52861 = state_50653__$1;
(statearr_50656_52861[(2)] = inst_50649);

(statearr_50656_52861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (1))){
var state_50653__$1 = state_50653;
var statearr_50657_52862 = state_50653__$1;
(statearr_50657_52862[(2)] = null);

(statearr_50657_52862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (4))){
var inst_50630 = (state_50653[(7)]);
var inst_50630__$1 = (state_50653[(2)]);
var inst_50634 = (inst_50630__$1 == null);
var state_50653__$1 = (function (){var statearr_50659 = state_50653;
(statearr_50659[(7)] = inst_50630__$1);

return statearr_50659;
})();
if(cljs.core.truth_(inst_50634)){
var statearr_50660_52863 = state_50653__$1;
(statearr_50660_52863[(1)] = (5));

} else {
var statearr_50661_52864 = state_50653__$1;
(statearr_50661_52864[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (6))){
var inst_50630 = (state_50653[(7)]);
var inst_50639 = (state_50653[(8)]);
var inst_50639__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_50640 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_50641 = [inst_50630,inst_50639__$1];
var inst_50642 = (new cljs.core.PersistentVector(null,2,(5),inst_50640,inst_50641,null));
var state_50653__$1 = (function (){var statearr_50662 = state_50653;
(statearr_50662[(8)] = inst_50639__$1);

return statearr_50662;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50653__$1,(8),jobs,inst_50642);
} else {
if((state_val_50654 === (3))){
var inst_50651 = (state_50653[(2)]);
var state_50653__$1 = state_50653;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50653__$1,inst_50651);
} else {
if((state_val_50654 === (2))){
var state_50653__$1 = state_50653;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50653__$1,(4),from);
} else {
if((state_val_50654 === (9))){
var inst_50646 = (state_50653[(2)]);
var state_50653__$1 = (function (){var statearr_50665 = state_50653;
(statearr_50665[(9)] = inst_50646);

return statearr_50665;
})();
var statearr_50666_52866 = state_50653__$1;
(statearr_50666_52866[(2)] = null);

(statearr_50666_52866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (5))){
var inst_50637 = cljs.core.async.close_BANG_(jobs);
var state_50653__$1 = state_50653;
var statearr_50667_52867 = state_50653__$1;
(statearr_50667_52867[(2)] = inst_50637);

(statearr_50667_52867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50654 === (8))){
var inst_50639 = (state_50653[(8)]);
var inst_50644 = (state_50653[(2)]);
var state_50653__$1 = (function (){var statearr_50668 = state_50653;
(statearr_50668[(10)] = inst_50644);

return statearr_50668;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50653__$1,(9),results,inst_50639);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____0 = (function (){
var statearr_50671 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_50671[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__);

(statearr_50671[(1)] = (1));

return statearr_50671;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____1 = (function (state_50653){
while(true){
var ret_value__50320__auto__ = (function (){try{while(true){
var result__50321__auto__ = switch__50318__auto__(state_50653);
if(cljs.core.keyword_identical_QMARK_(result__50321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50321__auto__;
}
break;
}
}catch (e50672){var ex__50322__auto__ = e50672;
var statearr_50673_52868 = state_50653;
(statearr_50673_52868[(2)] = ex__50322__auto__);


if(cljs.core.seq((state_50653[(4)]))){
var statearr_50674_52869 = state_50653;
(statearr_50674_52869[(1)] = cljs.core.first((state_50653[(4)])));

} else {
throw ex__50322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52870 = state_50653;
state_50653 = G__52870;
continue;
} else {
return ret_value__50320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__ = function(state_50653){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____1.call(this,state_50653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__;
})()
})();
var state__50368__auto__ = (function (){var statearr_50675 = f__50367__auto__();
(statearr_50675[(6)] = c__50366__auto___52859);

return statearr_50675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50368__auto__);
}));


var c__50366__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50367__auto__ = (function (){var switch__50318__auto__ = (function (state_50713){
var state_val_50714 = (state_50713[(1)]);
if((state_val_50714 === (7))){
var inst_50709 = (state_50713[(2)]);
var state_50713__$1 = state_50713;
var statearr_50715_52872 = state_50713__$1;
(statearr_50715_52872[(2)] = inst_50709);

(statearr_50715_52872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (20))){
var state_50713__$1 = state_50713;
var statearr_50716_52873 = state_50713__$1;
(statearr_50716_52873[(2)] = null);

(statearr_50716_52873[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (1))){
var state_50713__$1 = state_50713;
var statearr_50717_52875 = state_50713__$1;
(statearr_50717_52875[(2)] = null);

(statearr_50717_52875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (4))){
var inst_50678 = (state_50713[(7)]);
var inst_50678__$1 = (state_50713[(2)]);
var inst_50679 = (inst_50678__$1 == null);
var state_50713__$1 = (function (){var statearr_50718 = state_50713;
(statearr_50718[(7)] = inst_50678__$1);

return statearr_50718;
})();
if(cljs.core.truth_(inst_50679)){
var statearr_50719_52876 = state_50713__$1;
(statearr_50719_52876[(1)] = (5));

} else {
var statearr_50720_52877 = state_50713__$1;
(statearr_50720_52877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (15))){
var inst_50691 = (state_50713[(8)]);
var state_50713__$1 = state_50713;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50713__$1,(18),to,inst_50691);
} else {
if((state_val_50714 === (21))){
var inst_50704 = (state_50713[(2)]);
var state_50713__$1 = state_50713;
var statearr_50721_52879 = state_50713__$1;
(statearr_50721_52879[(2)] = inst_50704);

(statearr_50721_52879[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (13))){
var inst_50706 = (state_50713[(2)]);
var state_50713__$1 = (function (){var statearr_50722 = state_50713;
(statearr_50722[(9)] = inst_50706);

return statearr_50722;
})();
var statearr_50723_52882 = state_50713__$1;
(statearr_50723_52882[(2)] = null);

(statearr_50723_52882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (6))){
var inst_50678 = (state_50713[(7)]);
var state_50713__$1 = state_50713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50713__$1,(11),inst_50678);
} else {
if((state_val_50714 === (17))){
var inst_50699 = (state_50713[(2)]);
var state_50713__$1 = state_50713;
if(cljs.core.truth_(inst_50699)){
var statearr_50724_52883 = state_50713__$1;
(statearr_50724_52883[(1)] = (19));

} else {
var statearr_50725_52884 = state_50713__$1;
(statearr_50725_52884[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (3))){
var inst_50711 = (state_50713[(2)]);
var state_50713__$1 = state_50713;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50713__$1,inst_50711);
} else {
if((state_val_50714 === (12))){
var inst_50688 = (state_50713[(10)]);
var state_50713__$1 = state_50713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50713__$1,(14),inst_50688);
} else {
if((state_val_50714 === (2))){
var state_50713__$1 = state_50713;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50713__$1,(4),results);
} else {
if((state_val_50714 === (19))){
var state_50713__$1 = state_50713;
var statearr_50727_52888 = state_50713__$1;
(statearr_50727_52888[(2)] = null);

(statearr_50727_52888[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (11))){
var inst_50688 = (state_50713[(2)]);
var state_50713__$1 = (function (){var statearr_50728 = state_50713;
(statearr_50728[(10)] = inst_50688);

return statearr_50728;
})();
var statearr_50729_52890 = state_50713__$1;
(statearr_50729_52890[(2)] = null);

(statearr_50729_52890[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (9))){
var state_50713__$1 = state_50713;
var statearr_50734_52893 = state_50713__$1;
(statearr_50734_52893[(2)] = null);

(statearr_50734_52893[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (5))){
var state_50713__$1 = state_50713;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50738_52894 = state_50713__$1;
(statearr_50738_52894[(1)] = (8));

} else {
var statearr_50739_52895 = state_50713__$1;
(statearr_50739_52895[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (14))){
var inst_50691 = (state_50713[(8)]);
var inst_50693 = (state_50713[(11)]);
var inst_50691__$1 = (state_50713[(2)]);
var inst_50692 = (inst_50691__$1 == null);
var inst_50693__$1 = cljs.core.not(inst_50692);
var state_50713__$1 = (function (){var statearr_50740 = state_50713;
(statearr_50740[(8)] = inst_50691__$1);

(statearr_50740[(11)] = inst_50693__$1);

return statearr_50740;
})();
if(inst_50693__$1){
var statearr_50741_52896 = state_50713__$1;
(statearr_50741_52896[(1)] = (15));

} else {
var statearr_50745_52897 = state_50713__$1;
(statearr_50745_52897[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (16))){
var inst_50693 = (state_50713[(11)]);
var state_50713__$1 = state_50713;
var statearr_50746_52899 = state_50713__$1;
(statearr_50746_52899[(2)] = inst_50693);

(statearr_50746_52899[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (10))){
var inst_50685 = (state_50713[(2)]);
var state_50713__$1 = state_50713;
var statearr_50750_52900 = state_50713__$1;
(statearr_50750_52900[(2)] = inst_50685);

(statearr_50750_52900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (18))){
var inst_50696 = (state_50713[(2)]);
var state_50713__$1 = state_50713;
var statearr_50751_52901 = state_50713__$1;
(statearr_50751_52901[(2)] = inst_50696);

(statearr_50751_52901[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50714 === (8))){
var inst_50682 = cljs.core.async.close_BANG_(to);
var state_50713__$1 = state_50713;
var statearr_50752_52903 = state_50713__$1;
(statearr_50752_52903[(2)] = inst_50682);

(statearr_50752_52903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____0 = (function (){
var statearr_50756 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_50756[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__);

(statearr_50756[(1)] = (1));

return statearr_50756;
});
var cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____1 = (function (state_50713){
while(true){
var ret_value__50320__auto__ = (function (){try{while(true){
var result__50321__auto__ = switch__50318__auto__(state_50713);
if(cljs.core.keyword_identical_QMARK_(result__50321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50321__auto__;
}
break;
}
}catch (e50757){var ex__50322__auto__ = e50757;
var statearr_50758_52906 = state_50713;
(statearr_50758_52906[(2)] = ex__50322__auto__);


if(cljs.core.seq((state_50713[(4)]))){
var statearr_50759_52907 = state_50713;
(statearr_50759_52907[(1)] = cljs.core.first((state_50713[(4)])));

} else {
throw ex__50322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52908 = state_50713;
state_50713 = G__52908;
continue;
} else {
return ret_value__50320__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__ = function(state_50713){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____1.call(this,state_50713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__50319__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__50319__auto__;
})()
})();
var state__50368__auto__ = (function (){var statearr_50760 = f__50367__auto__();
(statearr_50760[(6)] = c__50366__auto__);

return statearr_50760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50368__auto__);
}));

return c__50366__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__50764 = arguments.length;
switch (G__50764) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__50768 = arguments.length;
switch (G__50768) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__50776 = arguments.length;
switch (G__50776) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__50366__auto___52929 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50367__auto__ = (function (){var switch__50318__auto__ = (function (state_50807){
var state_val_50808 = (state_50807[(1)]);
if((state_val_50808 === (7))){
var inst_50803 = (state_50807[(2)]);
var state_50807__$1 = state_50807;
var statearr_50811_52930 = state_50807__$1;
(statearr_50811_52930[(2)] = inst_50803);

(statearr_50811_52930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50808 === (1))){
var state_50807__$1 = state_50807;
var statearr_50812_52931 = state_50807__$1;
(statearr_50812_52931[(2)] = null);

(statearr_50812_52931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50808 === (4))){
var inst_50781 = (state_50807[(7)]);
var inst_50781__$1 = (state_50807[(2)]);
var inst_50782 = (inst_50781__$1 == null);
var state_50807__$1 = (function (){var statearr_50814 = state_50807;
(statearr_50814[(7)] = inst_50781__$1);

return statearr_50814;
})();
if(cljs.core.truth_(inst_50782)){
var statearr_50815_52933 = state_50807__$1;
(statearr_50815_52933[(1)] = (5));

} else {
var statearr_50816_52934 = state_50807__$1;
(statearr_50816_52934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50808 === (13))){
var state_50807__$1 = state_50807;
var statearr_50818_52935 = state_50807__$1;
(statearr_50818_52935[(2)] = null);

(statearr_50818_52935[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50808 === (6))){
var inst_50781 = (state_50807[(7)]);
var inst_50787 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_50781) : p.call(null,inst_50781));
var state_50807__$1 = state_50807;
if(cljs.core.truth_(inst_50787)){
var statearr_50819_52937 = state_50807__$1;
(statearr_50819_52937[(1)] = (9));

} else {
var statearr_50820_52939 = state_50807__$1;
(statearr_50820_52939[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50808 === (3))){
var inst_50805 = (state_50807[(2)]);
var state_50807__$1 = state_50807;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50807__$1,inst_50805);
} else {
if((state_val_50808 === (12))){
var state_50807__$1 = state_50807;
var statearr_50822_52941 = state_50807__$1;
(statearr_50822_52941[(2)] = null);

(statearr_50822_52941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50808 === (2))){
var state_50807__$1 = state_50807;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50807__$1,(4),ch);
} else {
if((state_val_50808 === (11))){
var inst_50781 = (state_50807[(7)]);
var inst_50794 = (state_50807[(2)]);
var state_50807__$1 = state_50807;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50807__$1,(8),inst_50794,inst_50781);
} else {
if((state_val_50808 === (9))){
var state_50807__$1 = state_50807;
var statearr_50824_52942 = state_50807__$1;
(statearr_50824_52942[(2)] = tc);

(statearr_50824_52942[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50808 === (5))){
var inst_50784 = cljs.core.async.close_BANG_(tc);
var inst_50785 = cljs.core.async.close_BANG_(fc);
var state_50807__$1 = (function (){var statearr_50825 = state_50807;
(statearr_50825[(8)] = inst_50784);

return statearr_50825;
})();
var statearr_50826_52946 = state_50807__$1;
(statearr_50826_52946[(2)] = inst_50785);

(statearr_50826_52946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50808 === (14))){
var inst_50801 = (state_50807[(2)]);
var state_50807__$1 = state_50807;
var statearr_50827_52948 = state_50807__$1;
(statearr_50827_52948[(2)] = inst_50801);

(statearr_50827_52948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50808 === (10))){
var state_50807__$1 = state_50807;
var statearr_50828_52949 = state_50807__$1;
(statearr_50828_52949[(2)] = fc);

(statearr_50828_52949[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50808 === (8))){
var inst_50796 = (state_50807[(2)]);
var state_50807__$1 = state_50807;
if(cljs.core.truth_(inst_50796)){
var statearr_50829_52950 = state_50807__$1;
(statearr_50829_52950[(1)] = (12));

} else {
var statearr_50830_52951 = state_50807__$1;
(statearr_50830_52951[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50319__auto__ = null;
var cljs$core$async$state_machine__50319__auto____0 = (function (){
var statearr_50831 = [null,null,null,null,null,null,null,null,null];
(statearr_50831[(0)] = cljs$core$async$state_machine__50319__auto__);

(statearr_50831[(1)] = (1));

return statearr_50831;
});
var cljs$core$async$state_machine__50319__auto____1 = (function (state_50807){
while(true){
var ret_value__50320__auto__ = (function (){try{while(true){
var result__50321__auto__ = switch__50318__auto__(state_50807);
if(cljs.core.keyword_identical_QMARK_(result__50321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50321__auto__;
}
break;
}
}catch (e50832){var ex__50322__auto__ = e50832;
var statearr_50833_52955 = state_50807;
(statearr_50833_52955[(2)] = ex__50322__auto__);


if(cljs.core.seq((state_50807[(4)]))){
var statearr_50836_52957 = state_50807;
(statearr_50836_52957[(1)] = cljs.core.first((state_50807[(4)])));

} else {
throw ex__50322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52961 = state_50807;
state_50807 = G__52961;
continue;
} else {
return ret_value__50320__auto__;
}
break;
}
});
cljs$core$async$state_machine__50319__auto__ = function(state_50807){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50319__auto____1.call(this,state_50807);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50319__auto____0;
cljs$core$async$state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50319__auto____1;
return cljs$core$async$state_machine__50319__auto__;
})()
})();
var state__50368__auto__ = (function (){var statearr_50837 = f__50367__auto__();
(statearr_50837[(6)] = c__50366__auto___52929);

return statearr_50837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50368__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__50366__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50367__auto__ = (function (){var switch__50318__auto__ = (function (state_50863){
var state_val_50864 = (state_50863[(1)]);
if((state_val_50864 === (7))){
var inst_50859 = (state_50863[(2)]);
var state_50863__$1 = state_50863;
var statearr_50869_52965 = state_50863__$1;
(statearr_50869_52965[(2)] = inst_50859);

(statearr_50869_52965[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50864 === (1))){
var inst_50842 = init;
var inst_50843 = inst_50842;
var state_50863__$1 = (function (){var statearr_50870 = state_50863;
(statearr_50870[(7)] = inst_50843);

return statearr_50870;
})();
var statearr_50871_52968 = state_50863__$1;
(statearr_50871_52968[(2)] = null);

(statearr_50871_52968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50864 === (4))){
var inst_50846 = (state_50863[(8)]);
var inst_50846__$1 = (state_50863[(2)]);
var inst_50847 = (inst_50846__$1 == null);
var state_50863__$1 = (function (){var statearr_50872 = state_50863;
(statearr_50872[(8)] = inst_50846__$1);

return statearr_50872;
})();
if(cljs.core.truth_(inst_50847)){
var statearr_50876_52970 = state_50863__$1;
(statearr_50876_52970[(1)] = (5));

} else {
var statearr_50877_52971 = state_50863__$1;
(statearr_50877_52971[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50864 === (6))){
var inst_50843 = (state_50863[(7)]);
var inst_50846 = (state_50863[(8)]);
var inst_50850 = (state_50863[(9)]);
var inst_50850__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_50843,inst_50846) : f.call(null,inst_50843,inst_50846));
var inst_50851 = cljs.core.reduced_QMARK_(inst_50850__$1);
var state_50863__$1 = (function (){var statearr_50878 = state_50863;
(statearr_50878[(9)] = inst_50850__$1);

return statearr_50878;
})();
if(inst_50851){
var statearr_50879_52974 = state_50863__$1;
(statearr_50879_52974[(1)] = (8));

} else {
var statearr_50880_52975 = state_50863__$1;
(statearr_50880_52975[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50864 === (3))){
var inst_50861 = (state_50863[(2)]);
var state_50863__$1 = state_50863;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50863__$1,inst_50861);
} else {
if((state_val_50864 === (2))){
var state_50863__$1 = state_50863;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50863__$1,(4),ch);
} else {
if((state_val_50864 === (9))){
var inst_50850 = (state_50863[(9)]);
var inst_50843 = inst_50850;
var state_50863__$1 = (function (){var statearr_50884 = state_50863;
(statearr_50884[(7)] = inst_50843);

return statearr_50884;
})();
var statearr_50885_52977 = state_50863__$1;
(statearr_50885_52977[(2)] = null);

(statearr_50885_52977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50864 === (5))){
var inst_50843 = (state_50863[(7)]);
var state_50863__$1 = state_50863;
var statearr_50886_52978 = state_50863__$1;
(statearr_50886_52978[(2)] = inst_50843);

(statearr_50886_52978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50864 === (10))){
var inst_50857 = (state_50863[(2)]);
var state_50863__$1 = state_50863;
var statearr_50887_52981 = state_50863__$1;
(statearr_50887_52981[(2)] = inst_50857);

(statearr_50887_52981[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50864 === (8))){
var inst_50850 = (state_50863[(9)]);
var inst_50853 = cljs.core.deref(inst_50850);
var state_50863__$1 = state_50863;
var statearr_50888_52983 = state_50863__$1;
(statearr_50888_52983[(2)] = inst_50853);

(statearr_50888_52983[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__50319__auto__ = null;
var cljs$core$async$reduce_$_state_machine__50319__auto____0 = (function (){
var statearr_50889 = [null,null,null,null,null,null,null,null,null,null];
(statearr_50889[(0)] = cljs$core$async$reduce_$_state_machine__50319__auto__);

(statearr_50889[(1)] = (1));

return statearr_50889;
});
var cljs$core$async$reduce_$_state_machine__50319__auto____1 = (function (state_50863){
while(true){
var ret_value__50320__auto__ = (function (){try{while(true){
var result__50321__auto__ = switch__50318__auto__(state_50863);
if(cljs.core.keyword_identical_QMARK_(result__50321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50321__auto__;
}
break;
}
}catch (e50890){var ex__50322__auto__ = e50890;
var statearr_50891_52986 = state_50863;
(statearr_50891_52986[(2)] = ex__50322__auto__);


if(cljs.core.seq((state_50863[(4)]))){
var statearr_50892_52989 = state_50863;
(statearr_50892_52989[(1)] = cljs.core.first((state_50863[(4)])));

} else {
throw ex__50322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52991 = state_50863;
state_50863 = G__52991;
continue;
} else {
return ret_value__50320__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__50319__auto__ = function(state_50863){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__50319__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__50319__auto____1.call(this,state_50863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__50319__auto____0;
cljs$core$async$reduce_$_state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__50319__auto____1;
return cljs$core$async$reduce_$_state_machine__50319__auto__;
})()
})();
var state__50368__auto__ = (function (){var statearr_50895 = f__50367__auto__();
(statearr_50895[(6)] = c__50366__auto__);

return statearr_50895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50368__auto__);
}));

return c__50366__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__50366__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50367__auto__ = (function (){var switch__50318__auto__ = (function (state_50905){
var state_val_50906 = (state_50905[(1)]);
if((state_val_50906 === (1))){
var inst_50900 = cljs.core.async.reduce(f__$1,init,ch);
var state_50905__$1 = state_50905;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_50905__$1,(2),inst_50900);
} else {
if((state_val_50906 === (2))){
var inst_50902 = (state_50905[(2)]);
var inst_50903 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_50902) : f__$1.call(null,inst_50902));
var state_50905__$1 = state_50905;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50905__$1,inst_50903);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__50319__auto__ = null;
var cljs$core$async$transduce_$_state_machine__50319__auto____0 = (function (){
var statearr_50910 = [null,null,null,null,null,null,null];
(statearr_50910[(0)] = cljs$core$async$transduce_$_state_machine__50319__auto__);

(statearr_50910[(1)] = (1));

return statearr_50910;
});
var cljs$core$async$transduce_$_state_machine__50319__auto____1 = (function (state_50905){
while(true){
var ret_value__50320__auto__ = (function (){try{while(true){
var result__50321__auto__ = switch__50318__auto__(state_50905);
if(cljs.core.keyword_identical_QMARK_(result__50321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50321__auto__;
}
break;
}
}catch (e50911){var ex__50322__auto__ = e50911;
var statearr_50912_52995 = state_50905;
(statearr_50912_52995[(2)] = ex__50322__auto__);


if(cljs.core.seq((state_50905[(4)]))){
var statearr_50913_52996 = state_50905;
(statearr_50913_52996[(1)] = cljs.core.first((state_50905[(4)])));

} else {
throw ex__50322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__52997 = state_50905;
state_50905 = G__52997;
continue;
} else {
return ret_value__50320__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__50319__auto__ = function(state_50905){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__50319__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__50319__auto____1.call(this,state_50905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__50319__auto____0;
cljs$core$async$transduce_$_state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__50319__auto____1;
return cljs$core$async$transduce_$_state_machine__50319__auto__;
})()
})();
var state__50368__auto__ = (function (){var statearr_50914 = f__50367__auto__();
(statearr_50914[(6)] = c__50366__auto__);

return statearr_50914;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50368__auto__);
}));

return c__50366__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__50919 = arguments.length;
switch (G__50919) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__50366__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50367__auto__ = (function (){var switch__50318__auto__ = (function (state_50947){
var state_val_50948 = (state_50947[(1)]);
if((state_val_50948 === (7))){
var inst_50929 = (state_50947[(2)]);
var state_50947__$1 = state_50947;
var statearr_50950_53003 = state_50947__$1;
(statearr_50950_53003[(2)] = inst_50929);

(statearr_50950_53003[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50948 === (1))){
var inst_50923 = cljs.core.seq(coll);
var inst_50924 = inst_50923;
var state_50947__$1 = (function (){var statearr_50952 = state_50947;
(statearr_50952[(7)] = inst_50924);

return statearr_50952;
})();
var statearr_50953_53005 = state_50947__$1;
(statearr_50953_53005[(2)] = null);

(statearr_50953_53005[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50948 === (4))){
var inst_50924 = (state_50947[(7)]);
var inst_50927 = cljs.core.first(inst_50924);
var state_50947__$1 = state_50947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_50947__$1,(7),ch,inst_50927);
} else {
if((state_val_50948 === (13))){
var inst_50941 = (state_50947[(2)]);
var state_50947__$1 = state_50947;
var statearr_50954_53006 = state_50947__$1;
(statearr_50954_53006[(2)] = inst_50941);

(statearr_50954_53006[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50948 === (6))){
var inst_50932 = (state_50947[(2)]);
var state_50947__$1 = state_50947;
if(cljs.core.truth_(inst_50932)){
var statearr_50955_53008 = state_50947__$1;
(statearr_50955_53008[(1)] = (8));

} else {
var statearr_50956_53010 = state_50947__$1;
(statearr_50956_53010[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50948 === (3))){
var inst_50945 = (state_50947[(2)]);
var state_50947__$1 = state_50947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_50947__$1,inst_50945);
} else {
if((state_val_50948 === (12))){
var state_50947__$1 = state_50947;
var statearr_50957_53012 = state_50947__$1;
(statearr_50957_53012[(2)] = null);

(statearr_50957_53012[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50948 === (2))){
var inst_50924 = (state_50947[(7)]);
var state_50947__$1 = state_50947;
if(cljs.core.truth_(inst_50924)){
var statearr_50960_53013 = state_50947__$1;
(statearr_50960_53013[(1)] = (4));

} else {
var statearr_50961_53015 = state_50947__$1;
(statearr_50961_53015[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50948 === (11))){
var inst_50938 = cljs.core.async.close_BANG_(ch);
var state_50947__$1 = state_50947;
var statearr_50962_53021 = state_50947__$1;
(statearr_50962_53021[(2)] = inst_50938);

(statearr_50962_53021[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50948 === (9))){
var state_50947__$1 = state_50947;
if(cljs.core.truth_(close_QMARK_)){
var statearr_50963_53023 = state_50947__$1;
(statearr_50963_53023[(1)] = (11));

} else {
var statearr_50964_53025 = state_50947__$1;
(statearr_50964_53025[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50948 === (5))){
var inst_50924 = (state_50947[(7)]);
var state_50947__$1 = state_50947;
var statearr_50965_53026 = state_50947__$1;
(statearr_50965_53026[(2)] = inst_50924);

(statearr_50965_53026[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50948 === (10))){
var inst_50943 = (state_50947[(2)]);
var state_50947__$1 = state_50947;
var statearr_50966_53027 = state_50947__$1;
(statearr_50966_53027[(2)] = inst_50943);

(statearr_50966_53027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_50948 === (8))){
var inst_50924 = (state_50947[(7)]);
var inst_50934 = cljs.core.next(inst_50924);
var inst_50924__$1 = inst_50934;
var state_50947__$1 = (function (){var statearr_50967 = state_50947;
(statearr_50967[(7)] = inst_50924__$1);

return statearr_50967;
})();
var statearr_50968_53028 = state_50947__$1;
(statearr_50968_53028[(2)] = null);

(statearr_50968_53028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50319__auto__ = null;
var cljs$core$async$state_machine__50319__auto____0 = (function (){
var statearr_50969 = [null,null,null,null,null,null,null,null];
(statearr_50969[(0)] = cljs$core$async$state_machine__50319__auto__);

(statearr_50969[(1)] = (1));

return statearr_50969;
});
var cljs$core$async$state_machine__50319__auto____1 = (function (state_50947){
while(true){
var ret_value__50320__auto__ = (function (){try{while(true){
var result__50321__auto__ = switch__50318__auto__(state_50947);
if(cljs.core.keyword_identical_QMARK_(result__50321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50321__auto__;
}
break;
}
}catch (e50971){var ex__50322__auto__ = e50971;
var statearr_50972_53029 = state_50947;
(statearr_50972_53029[(2)] = ex__50322__auto__);


if(cljs.core.seq((state_50947[(4)]))){
var statearr_50973_53030 = state_50947;
(statearr_50973_53030[(1)] = cljs.core.first((state_50947[(4)])));

} else {
throw ex__50322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53032 = state_50947;
state_50947 = G__53032;
continue;
} else {
return ret_value__50320__auto__;
}
break;
}
});
cljs$core$async$state_machine__50319__auto__ = function(state_50947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50319__auto____1.call(this,state_50947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50319__auto____0;
cljs$core$async$state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50319__auto____1;
return cljs$core$async$state_machine__50319__auto__;
})()
})();
var state__50368__auto__ = (function (){var statearr_50978 = f__50367__auto__();
(statearr_50978[(6)] = c__50366__auto__);

return statearr_50978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50368__auto__);
}));

return c__50366__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__50983 = arguments.length;
switch (G__50983) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_53040 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_53040(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_53051 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_53051(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_53058 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_53058(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_53065 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_53065(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async50990 = (function (ch,cs,meta50991){
this.ch = ch;
this.cs = cs;
this.meta50991 = meta50991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async50990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50992,meta50991__$1){
var self__ = this;
var _50992__$1 = this;
return (new cljs.core.async.t_cljs$core$async50990(self__.ch,self__.cs,meta50991__$1));
}));

(cljs.core.async.t_cljs$core$async50990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50992){
var self__ = this;
var _50992__$1 = this;
return self__.meta50991;
}));

(cljs.core.async.t_cljs$core$async50990.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50990.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async50990.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async50990.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async50990.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async50990.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async50990.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta50991","meta50991",-1110700453,null)], null);
}));

(cljs.core.async.t_cljs$core$async50990.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async50990.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async50990");

(cljs.core.async.t_cljs$core$async50990.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async50990");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async50990.
 */
cljs.core.async.__GT_t_cljs$core$async50990 = (function cljs$core$async$__GT_t_cljs$core$async50990(ch,cs,meta50991){
return (new cljs.core.async.t_cljs$core$async50990(ch,cs,meta50991));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async50990(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__50366__auto___53078 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50367__auto__ = (function (){var switch__50318__auto__ = (function (state_51125){
var state_val_51126 = (state_51125[(1)]);
if((state_val_51126 === (7))){
var inst_51121 = (state_51125[(2)]);
var state_51125__$1 = state_51125;
var statearr_51131_53079 = state_51125__$1;
(statearr_51131_53079[(2)] = inst_51121);

(statearr_51131_53079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (20))){
var inst_51026 = (state_51125[(7)]);
var inst_51038 = cljs.core.first(inst_51026);
var inst_51039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51038,(0),null);
var inst_51040 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51038,(1),null);
var state_51125__$1 = (function (){var statearr_51134 = state_51125;
(statearr_51134[(8)] = inst_51039);

return statearr_51134;
})();
if(cljs.core.truth_(inst_51040)){
var statearr_51135_53082 = state_51125__$1;
(statearr_51135_53082[(1)] = (22));

} else {
var statearr_51136_53084 = state_51125__$1;
(statearr_51136_53084[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (27))){
var inst_51068 = (state_51125[(9)]);
var inst_51070 = (state_51125[(10)]);
var inst_51075 = (state_51125[(11)]);
var inst_50995 = (state_51125[(12)]);
var inst_51075__$1 = cljs.core._nth(inst_51068,inst_51070);
var inst_51076 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51075__$1,inst_50995,done);
var state_51125__$1 = (function (){var statearr_51137 = state_51125;
(statearr_51137[(11)] = inst_51075__$1);

return statearr_51137;
})();
if(cljs.core.truth_(inst_51076)){
var statearr_51138_53087 = state_51125__$1;
(statearr_51138_53087[(1)] = (30));

} else {
var statearr_51139_53088 = state_51125__$1;
(statearr_51139_53088[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (1))){
var state_51125__$1 = state_51125;
var statearr_51140_53091 = state_51125__$1;
(statearr_51140_53091[(2)] = null);

(statearr_51140_53091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (24))){
var inst_51026 = (state_51125[(7)]);
var inst_51045 = (state_51125[(2)]);
var inst_51046 = cljs.core.next(inst_51026);
var inst_51004 = inst_51046;
var inst_51005 = null;
var inst_51006 = (0);
var inst_51007 = (0);
var state_51125__$1 = (function (){var statearr_51141 = state_51125;
(statearr_51141[(13)] = inst_51045);

(statearr_51141[(14)] = inst_51004);

(statearr_51141[(15)] = inst_51005);

(statearr_51141[(16)] = inst_51006);

(statearr_51141[(17)] = inst_51007);

return statearr_51141;
})();
var statearr_51142_53097 = state_51125__$1;
(statearr_51142_53097[(2)] = null);

(statearr_51142_53097[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (39))){
var state_51125__$1 = state_51125;
var statearr_51146_53098 = state_51125__$1;
(statearr_51146_53098[(2)] = null);

(statearr_51146_53098[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (4))){
var inst_50995 = (state_51125[(12)]);
var inst_50995__$1 = (state_51125[(2)]);
var inst_50996 = (inst_50995__$1 == null);
var state_51125__$1 = (function (){var statearr_51147 = state_51125;
(statearr_51147[(12)] = inst_50995__$1);

return statearr_51147;
})();
if(cljs.core.truth_(inst_50996)){
var statearr_51149_53101 = state_51125__$1;
(statearr_51149_53101[(1)] = (5));

} else {
var statearr_51150_53103 = state_51125__$1;
(statearr_51150_53103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (15))){
var inst_51007 = (state_51125[(17)]);
var inst_51004 = (state_51125[(14)]);
var inst_51005 = (state_51125[(15)]);
var inst_51006 = (state_51125[(16)]);
var inst_51022 = (state_51125[(2)]);
var inst_51023 = (inst_51007 + (1));
var tmp51143 = inst_51005;
var tmp51144 = inst_51004;
var tmp51145 = inst_51006;
var inst_51004__$1 = tmp51144;
var inst_51005__$1 = tmp51143;
var inst_51006__$1 = tmp51145;
var inst_51007__$1 = inst_51023;
var state_51125__$1 = (function (){var statearr_51152 = state_51125;
(statearr_51152[(18)] = inst_51022);

(statearr_51152[(14)] = inst_51004__$1);

(statearr_51152[(15)] = inst_51005__$1);

(statearr_51152[(16)] = inst_51006__$1);

(statearr_51152[(17)] = inst_51007__$1);

return statearr_51152;
})();
var statearr_51153_53112 = state_51125__$1;
(statearr_51153_53112[(2)] = null);

(statearr_51153_53112[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (21))){
var inst_51049 = (state_51125[(2)]);
var state_51125__$1 = state_51125;
var statearr_51157_53113 = state_51125__$1;
(statearr_51157_53113[(2)] = inst_51049);

(statearr_51157_53113[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (31))){
var inst_51075 = (state_51125[(11)]);
var inst_51079 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51075);
var state_51125__$1 = state_51125;
var statearr_51158_53117 = state_51125__$1;
(statearr_51158_53117[(2)] = inst_51079);

(statearr_51158_53117[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (32))){
var inst_51070 = (state_51125[(10)]);
var inst_51067 = (state_51125[(19)]);
var inst_51068 = (state_51125[(9)]);
var inst_51069 = (state_51125[(20)]);
var inst_51081 = (state_51125[(2)]);
var inst_51082 = (inst_51070 + (1));
var tmp51154 = inst_51069;
var tmp51155 = inst_51068;
var tmp51156 = inst_51067;
var inst_51067__$1 = tmp51156;
var inst_51068__$1 = tmp51155;
var inst_51069__$1 = tmp51154;
var inst_51070__$1 = inst_51082;
var state_51125__$1 = (function (){var statearr_51159 = state_51125;
(statearr_51159[(21)] = inst_51081);

(statearr_51159[(19)] = inst_51067__$1);

(statearr_51159[(9)] = inst_51068__$1);

(statearr_51159[(20)] = inst_51069__$1);

(statearr_51159[(10)] = inst_51070__$1);

return statearr_51159;
})();
var statearr_51160_53124 = state_51125__$1;
(statearr_51160_53124[(2)] = null);

(statearr_51160_53124[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (40))){
var inst_51094 = (state_51125[(22)]);
var inst_51098 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_51094);
var state_51125__$1 = state_51125;
var statearr_51161_53130 = state_51125__$1;
(statearr_51161_53130[(2)] = inst_51098);

(statearr_51161_53130[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (33))){
var inst_51085 = (state_51125[(23)]);
var inst_51087 = cljs.core.chunked_seq_QMARK_(inst_51085);
var state_51125__$1 = state_51125;
if(inst_51087){
var statearr_51162_53131 = state_51125__$1;
(statearr_51162_53131[(1)] = (36));

} else {
var statearr_51163_53132 = state_51125__$1;
(statearr_51163_53132[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (13))){
var inst_51016 = (state_51125[(24)]);
var inst_51019 = cljs.core.async.close_BANG_(inst_51016);
var state_51125__$1 = state_51125;
var statearr_51165_53135 = state_51125__$1;
(statearr_51165_53135[(2)] = inst_51019);

(statearr_51165_53135[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (22))){
var inst_51039 = (state_51125[(8)]);
var inst_51042 = cljs.core.async.close_BANG_(inst_51039);
var state_51125__$1 = state_51125;
var statearr_51167_53138 = state_51125__$1;
(statearr_51167_53138[(2)] = inst_51042);

(statearr_51167_53138[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (36))){
var inst_51085 = (state_51125[(23)]);
var inst_51089 = cljs.core.chunk_first(inst_51085);
var inst_51090 = cljs.core.chunk_rest(inst_51085);
var inst_51091 = cljs.core.count(inst_51089);
var inst_51067 = inst_51090;
var inst_51068 = inst_51089;
var inst_51069 = inst_51091;
var inst_51070 = (0);
var state_51125__$1 = (function (){var statearr_51168 = state_51125;
(statearr_51168[(19)] = inst_51067);

(statearr_51168[(9)] = inst_51068);

(statearr_51168[(20)] = inst_51069);

(statearr_51168[(10)] = inst_51070);

return statearr_51168;
})();
var statearr_51169_53141 = state_51125__$1;
(statearr_51169_53141[(2)] = null);

(statearr_51169_53141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (41))){
var inst_51085 = (state_51125[(23)]);
var inst_51100 = (state_51125[(2)]);
var inst_51101 = cljs.core.next(inst_51085);
var inst_51067 = inst_51101;
var inst_51068 = null;
var inst_51069 = (0);
var inst_51070 = (0);
var state_51125__$1 = (function (){var statearr_51172 = state_51125;
(statearr_51172[(25)] = inst_51100);

(statearr_51172[(19)] = inst_51067);

(statearr_51172[(9)] = inst_51068);

(statearr_51172[(20)] = inst_51069);

(statearr_51172[(10)] = inst_51070);

return statearr_51172;
})();
var statearr_51175_53145 = state_51125__$1;
(statearr_51175_53145[(2)] = null);

(statearr_51175_53145[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (43))){
var state_51125__$1 = state_51125;
var statearr_51176_53148 = state_51125__$1;
(statearr_51176_53148[(2)] = null);

(statearr_51176_53148[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (29))){
var inst_51109 = (state_51125[(2)]);
var state_51125__$1 = state_51125;
var statearr_51177_53150 = state_51125__$1;
(statearr_51177_53150[(2)] = inst_51109);

(statearr_51177_53150[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (44))){
var inst_51118 = (state_51125[(2)]);
var state_51125__$1 = (function (){var statearr_51178 = state_51125;
(statearr_51178[(26)] = inst_51118);

return statearr_51178;
})();
var statearr_51179_53151 = state_51125__$1;
(statearr_51179_53151[(2)] = null);

(statearr_51179_53151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (6))){
var inst_51059 = (state_51125[(27)]);
var inst_51058 = cljs.core.deref(cs);
var inst_51059__$1 = cljs.core.keys(inst_51058);
var inst_51060 = cljs.core.count(inst_51059__$1);
var inst_51061 = cljs.core.reset_BANG_(dctr,inst_51060);
var inst_51066 = cljs.core.seq(inst_51059__$1);
var inst_51067 = inst_51066;
var inst_51068 = null;
var inst_51069 = (0);
var inst_51070 = (0);
var state_51125__$1 = (function (){var statearr_51180 = state_51125;
(statearr_51180[(27)] = inst_51059__$1);

(statearr_51180[(28)] = inst_51061);

(statearr_51180[(19)] = inst_51067);

(statearr_51180[(9)] = inst_51068);

(statearr_51180[(20)] = inst_51069);

(statearr_51180[(10)] = inst_51070);

return statearr_51180;
})();
var statearr_51181_53152 = state_51125__$1;
(statearr_51181_53152[(2)] = null);

(statearr_51181_53152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (28))){
var inst_51067 = (state_51125[(19)]);
var inst_51085 = (state_51125[(23)]);
var inst_51085__$1 = cljs.core.seq(inst_51067);
var state_51125__$1 = (function (){var statearr_51182 = state_51125;
(statearr_51182[(23)] = inst_51085__$1);

return statearr_51182;
})();
if(inst_51085__$1){
var statearr_51183_53153 = state_51125__$1;
(statearr_51183_53153[(1)] = (33));

} else {
var statearr_51184_53154 = state_51125__$1;
(statearr_51184_53154[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (25))){
var inst_51070 = (state_51125[(10)]);
var inst_51069 = (state_51125[(20)]);
var inst_51072 = (inst_51070 < inst_51069);
var inst_51073 = inst_51072;
var state_51125__$1 = state_51125;
if(cljs.core.truth_(inst_51073)){
var statearr_51185_53155 = state_51125__$1;
(statearr_51185_53155[(1)] = (27));

} else {
var statearr_51186_53156 = state_51125__$1;
(statearr_51186_53156[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (34))){
var state_51125__$1 = state_51125;
var statearr_51187_53158 = state_51125__$1;
(statearr_51187_53158[(2)] = null);

(statearr_51187_53158[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (17))){
var state_51125__$1 = state_51125;
var statearr_51188_53160 = state_51125__$1;
(statearr_51188_53160[(2)] = null);

(statearr_51188_53160[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (3))){
var inst_51123 = (state_51125[(2)]);
var state_51125__$1 = state_51125;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51125__$1,inst_51123);
} else {
if((state_val_51126 === (12))){
var inst_51054 = (state_51125[(2)]);
var state_51125__$1 = state_51125;
var statearr_51189_53161 = state_51125__$1;
(statearr_51189_53161[(2)] = inst_51054);

(statearr_51189_53161[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (2))){
var state_51125__$1 = state_51125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51125__$1,(4),ch);
} else {
if((state_val_51126 === (23))){
var state_51125__$1 = state_51125;
var statearr_51190_53162 = state_51125__$1;
(statearr_51190_53162[(2)] = null);

(statearr_51190_53162[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (35))){
var inst_51107 = (state_51125[(2)]);
var state_51125__$1 = state_51125;
var statearr_51191_53163 = state_51125__$1;
(statearr_51191_53163[(2)] = inst_51107);

(statearr_51191_53163[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (19))){
var inst_51026 = (state_51125[(7)]);
var inst_51030 = cljs.core.chunk_first(inst_51026);
var inst_51031 = cljs.core.chunk_rest(inst_51026);
var inst_51032 = cljs.core.count(inst_51030);
var inst_51004 = inst_51031;
var inst_51005 = inst_51030;
var inst_51006 = inst_51032;
var inst_51007 = (0);
var state_51125__$1 = (function (){var statearr_51194 = state_51125;
(statearr_51194[(14)] = inst_51004);

(statearr_51194[(15)] = inst_51005);

(statearr_51194[(16)] = inst_51006);

(statearr_51194[(17)] = inst_51007);

return statearr_51194;
})();
var statearr_51195_53166 = state_51125__$1;
(statearr_51195_53166[(2)] = null);

(statearr_51195_53166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (11))){
var inst_51004 = (state_51125[(14)]);
var inst_51026 = (state_51125[(7)]);
var inst_51026__$1 = cljs.core.seq(inst_51004);
var state_51125__$1 = (function (){var statearr_51196 = state_51125;
(statearr_51196[(7)] = inst_51026__$1);

return statearr_51196;
})();
if(inst_51026__$1){
var statearr_51197_53167 = state_51125__$1;
(statearr_51197_53167[(1)] = (16));

} else {
var statearr_51198_53168 = state_51125__$1;
(statearr_51198_53168[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (9))){
var inst_51056 = (state_51125[(2)]);
var state_51125__$1 = state_51125;
var statearr_51199_53171 = state_51125__$1;
(statearr_51199_53171[(2)] = inst_51056);

(statearr_51199_53171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (5))){
var inst_51002 = cljs.core.deref(cs);
var inst_51003 = cljs.core.seq(inst_51002);
var inst_51004 = inst_51003;
var inst_51005 = null;
var inst_51006 = (0);
var inst_51007 = (0);
var state_51125__$1 = (function (){var statearr_51201 = state_51125;
(statearr_51201[(14)] = inst_51004);

(statearr_51201[(15)] = inst_51005);

(statearr_51201[(16)] = inst_51006);

(statearr_51201[(17)] = inst_51007);

return statearr_51201;
})();
var statearr_51203_53175 = state_51125__$1;
(statearr_51203_53175[(2)] = null);

(statearr_51203_53175[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (14))){
var state_51125__$1 = state_51125;
var statearr_51204_53176 = state_51125__$1;
(statearr_51204_53176[(2)] = null);

(statearr_51204_53176[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (45))){
var inst_51115 = (state_51125[(2)]);
var state_51125__$1 = state_51125;
var statearr_51205_53177 = state_51125__$1;
(statearr_51205_53177[(2)] = inst_51115);

(statearr_51205_53177[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (26))){
var inst_51059 = (state_51125[(27)]);
var inst_51111 = (state_51125[(2)]);
var inst_51112 = cljs.core.seq(inst_51059);
var state_51125__$1 = (function (){var statearr_51206 = state_51125;
(statearr_51206[(29)] = inst_51111);

return statearr_51206;
})();
if(inst_51112){
var statearr_51207_53178 = state_51125__$1;
(statearr_51207_53178[(1)] = (42));

} else {
var statearr_51208_53179 = state_51125__$1;
(statearr_51208_53179[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (16))){
var inst_51026 = (state_51125[(7)]);
var inst_51028 = cljs.core.chunked_seq_QMARK_(inst_51026);
var state_51125__$1 = state_51125;
if(inst_51028){
var statearr_51209_53180 = state_51125__$1;
(statearr_51209_53180[(1)] = (19));

} else {
var statearr_51210_53181 = state_51125__$1;
(statearr_51210_53181[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (38))){
var inst_51104 = (state_51125[(2)]);
var state_51125__$1 = state_51125;
var statearr_51212_53182 = state_51125__$1;
(statearr_51212_53182[(2)] = inst_51104);

(statearr_51212_53182[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (30))){
var state_51125__$1 = state_51125;
var statearr_51214_53184 = state_51125__$1;
(statearr_51214_53184[(2)] = null);

(statearr_51214_53184[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (10))){
var inst_51005 = (state_51125[(15)]);
var inst_51007 = (state_51125[(17)]);
var inst_51015 = cljs.core._nth(inst_51005,inst_51007);
var inst_51016 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51015,(0),null);
var inst_51017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51015,(1),null);
var state_51125__$1 = (function (){var statearr_51215 = state_51125;
(statearr_51215[(24)] = inst_51016);

return statearr_51215;
})();
if(cljs.core.truth_(inst_51017)){
var statearr_51216_53186 = state_51125__$1;
(statearr_51216_53186[(1)] = (13));

} else {
var statearr_51217_53187 = state_51125__$1;
(statearr_51217_53187[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (18))){
var inst_51052 = (state_51125[(2)]);
var state_51125__$1 = state_51125;
var statearr_51218_53188 = state_51125__$1;
(statearr_51218_53188[(2)] = inst_51052);

(statearr_51218_53188[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (42))){
var state_51125__$1 = state_51125;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51125__$1,(45),dchan);
} else {
if((state_val_51126 === (37))){
var inst_51085 = (state_51125[(23)]);
var inst_51094 = (state_51125[(22)]);
var inst_50995 = (state_51125[(12)]);
var inst_51094__$1 = cljs.core.first(inst_51085);
var inst_51095 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_51094__$1,inst_50995,done);
var state_51125__$1 = (function (){var statearr_51219 = state_51125;
(statearr_51219[(22)] = inst_51094__$1);

return statearr_51219;
})();
if(cljs.core.truth_(inst_51095)){
var statearr_51220_53191 = state_51125__$1;
(statearr_51220_53191[(1)] = (39));

} else {
var statearr_51221_53192 = state_51125__$1;
(statearr_51221_53192[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51126 === (8))){
var inst_51007 = (state_51125[(17)]);
var inst_51006 = (state_51125[(16)]);
var inst_51009 = (inst_51007 < inst_51006);
var inst_51010 = inst_51009;
var state_51125__$1 = state_51125;
if(cljs.core.truth_(inst_51010)){
var statearr_51222_53193 = state_51125__$1;
(statearr_51222_53193[(1)] = (10));

} else {
var statearr_51223_53194 = state_51125__$1;
(statearr_51223_53194[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__50319__auto__ = null;
var cljs$core$async$mult_$_state_machine__50319__auto____0 = (function (){
var statearr_51226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51226[(0)] = cljs$core$async$mult_$_state_machine__50319__auto__);

(statearr_51226[(1)] = (1));

return statearr_51226;
});
var cljs$core$async$mult_$_state_machine__50319__auto____1 = (function (state_51125){
while(true){
var ret_value__50320__auto__ = (function (){try{while(true){
var result__50321__auto__ = switch__50318__auto__(state_51125);
if(cljs.core.keyword_identical_QMARK_(result__50321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50321__auto__;
}
break;
}
}catch (e51227){var ex__50322__auto__ = e51227;
var statearr_51228_53196 = state_51125;
(statearr_51228_53196[(2)] = ex__50322__auto__);


if(cljs.core.seq((state_51125[(4)]))){
var statearr_51229_53197 = state_51125;
(statearr_51229_53197[(1)] = cljs.core.first((state_51125[(4)])));

} else {
throw ex__50322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53199 = state_51125;
state_51125 = G__53199;
continue;
} else {
return ret_value__50320__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__50319__auto__ = function(state_51125){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__50319__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__50319__auto____1.call(this,state_51125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__50319__auto____0;
cljs$core$async$mult_$_state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__50319__auto____1;
return cljs$core$async$mult_$_state_machine__50319__auto__;
})()
})();
var state__50368__auto__ = (function (){var statearr_51232 = f__50367__auto__();
(statearr_51232[(6)] = c__50366__auto___53078);

return statearr_51232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50368__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__51236 = arguments.length;
switch (G__51236) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_53210 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_53210(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_53216 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_53216(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_53218 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_53218(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_53219 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_53219(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_53223 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_53223(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___53226 = arguments.length;
var i__5770__auto___53227 = (0);
while(true){
if((i__5770__auto___53227 < len__5769__auto___53226)){
args__5775__auto__.push((arguments[i__5770__auto___53227]));

var G__53231 = (i__5770__auto___53227 + (1));
i__5770__auto___53227 = G__53231;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__51258){
var map__51259 = p__51258;
var map__51259__$1 = cljs.core.__destructure_map(map__51259);
var opts = map__51259__$1;
var statearr_51260_53236 = state;
(statearr_51260_53236[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_51261_53238 = state;
(statearr_51261_53238[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_51262_53241 = state;
(statearr_51262_53241[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq51250){
var G__51251 = cljs.core.first(seq51250);
var seq51250__$1 = cljs.core.next(seq51250);
var G__51252 = cljs.core.first(seq51250__$1);
var seq51250__$2 = cljs.core.next(seq51250__$1);
var G__51253 = cljs.core.first(seq51250__$2);
var seq51250__$3 = cljs.core.next(seq51250__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51251,G__51252,G__51253,seq51250__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51267 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51268){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta51268 = meta51268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51269,meta51268__$1){
var self__ = this;
var _51269__$1 = this;
return (new cljs.core.async.t_cljs$core$async51267(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta51268__$1));
}));

(cljs.core.async.t_cljs$core$async51267.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51269){
var self__ = this;
var _51269__$1 = this;
return self__.meta51268;
}));

(cljs.core.async.t_cljs$core$async51267.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51267.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async51267.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51267.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51267.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51267.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51267.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51267.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async51267.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta51268","meta51268",-718829399,null)], null);
}));

(cljs.core.async.t_cljs$core$async51267.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51267.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51267");

(cljs.core.async.t_cljs$core$async51267.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async51267");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51267.
 */
cljs.core.async.__GT_t_cljs$core$async51267 = (function cljs$core$async$__GT_t_cljs$core$async51267(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51268){
return (new cljs.core.async.t_cljs$core$async51267(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta51268));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async51267(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__50366__auto___53274 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50367__auto__ = (function (){var switch__50318__auto__ = (function (state_51345){
var state_val_51346 = (state_51345[(1)]);
if((state_val_51346 === (7))){
var inst_51305 = (state_51345[(2)]);
var state_51345__$1 = state_51345;
if(cljs.core.truth_(inst_51305)){
var statearr_51349_53277 = state_51345__$1;
(statearr_51349_53277[(1)] = (8));

} else {
var statearr_51350_53278 = state_51345__$1;
(statearr_51350_53278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (20))){
var inst_51296 = (state_51345[(7)]);
var state_51345__$1 = state_51345;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51345__$1,(23),out,inst_51296);
} else {
if((state_val_51346 === (1))){
var inst_51279 = calc_state();
var inst_51280 = cljs.core.__destructure_map(inst_51279);
var inst_51281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51280,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51280,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51283 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51280,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_51284 = inst_51279;
var state_51345__$1 = (function (){var statearr_51351 = state_51345;
(statearr_51351[(8)] = inst_51281);

(statearr_51351[(9)] = inst_51282);

(statearr_51351[(10)] = inst_51283);

(statearr_51351[(11)] = inst_51284);

return statearr_51351;
})();
var statearr_51352_53281 = state_51345__$1;
(statearr_51352_53281[(2)] = null);

(statearr_51352_53281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (24))){
var inst_51287 = (state_51345[(12)]);
var inst_51284 = inst_51287;
var state_51345__$1 = (function (){var statearr_51355 = state_51345;
(statearr_51355[(11)] = inst_51284);

return statearr_51355;
})();
var statearr_51356_53282 = state_51345__$1;
(statearr_51356_53282[(2)] = null);

(statearr_51356_53282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (4))){
var inst_51296 = (state_51345[(7)]);
var inst_51299 = (state_51345[(13)]);
var inst_51295 = (state_51345[(2)]);
var inst_51296__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51295,(0),null);
var inst_51297 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51295,(1),null);
var inst_51299__$1 = (inst_51296__$1 == null);
var state_51345__$1 = (function (){var statearr_51357 = state_51345;
(statearr_51357[(7)] = inst_51296__$1);

(statearr_51357[(14)] = inst_51297);

(statearr_51357[(13)] = inst_51299__$1);

return statearr_51357;
})();
if(cljs.core.truth_(inst_51299__$1)){
var statearr_51358_53283 = state_51345__$1;
(statearr_51358_53283[(1)] = (5));

} else {
var statearr_51359_53284 = state_51345__$1;
(statearr_51359_53284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (15))){
var inst_51288 = (state_51345[(15)]);
var inst_51319 = (state_51345[(16)]);
var inst_51319__$1 = cljs.core.empty_QMARK_(inst_51288);
var state_51345__$1 = (function (){var statearr_51364 = state_51345;
(statearr_51364[(16)] = inst_51319__$1);

return statearr_51364;
})();
if(inst_51319__$1){
var statearr_51365_53286 = state_51345__$1;
(statearr_51365_53286[(1)] = (17));

} else {
var statearr_51366_53287 = state_51345__$1;
(statearr_51366_53287[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (21))){
var inst_51287 = (state_51345[(12)]);
var inst_51284 = inst_51287;
var state_51345__$1 = (function (){var statearr_51367 = state_51345;
(statearr_51367[(11)] = inst_51284);

return statearr_51367;
})();
var statearr_51368_53288 = state_51345__$1;
(statearr_51368_53288[(2)] = null);

(statearr_51368_53288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (13))){
var inst_51312 = (state_51345[(2)]);
var inst_51313 = calc_state();
var inst_51284 = inst_51313;
var state_51345__$1 = (function (){var statearr_51369 = state_51345;
(statearr_51369[(17)] = inst_51312);

(statearr_51369[(11)] = inst_51284);

return statearr_51369;
})();
var statearr_51372_53289 = state_51345__$1;
(statearr_51372_53289[(2)] = null);

(statearr_51372_53289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (22))){
var inst_51339 = (state_51345[(2)]);
var state_51345__$1 = state_51345;
var statearr_51373_53290 = state_51345__$1;
(statearr_51373_53290[(2)] = inst_51339);

(statearr_51373_53290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (6))){
var inst_51297 = (state_51345[(14)]);
var inst_51303 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_51297,change);
var state_51345__$1 = state_51345;
var statearr_51374_53292 = state_51345__$1;
(statearr_51374_53292[(2)] = inst_51303);

(statearr_51374_53292[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (25))){
var state_51345__$1 = state_51345;
var statearr_51375_53293 = state_51345__$1;
(statearr_51375_53293[(2)] = null);

(statearr_51375_53293[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (17))){
var inst_51289 = (state_51345[(18)]);
var inst_51297 = (state_51345[(14)]);
var inst_51321 = (inst_51289.cljs$core$IFn$_invoke$arity$1 ? inst_51289.cljs$core$IFn$_invoke$arity$1(inst_51297) : inst_51289.call(null,inst_51297));
var inst_51322 = cljs.core.not(inst_51321);
var state_51345__$1 = state_51345;
var statearr_51380_53296 = state_51345__$1;
(statearr_51380_53296[(2)] = inst_51322);

(statearr_51380_53296[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (3))){
var inst_51343 = (state_51345[(2)]);
var state_51345__$1 = state_51345;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51345__$1,inst_51343);
} else {
if((state_val_51346 === (12))){
var state_51345__$1 = state_51345;
var statearr_51381_53298 = state_51345__$1;
(statearr_51381_53298[(2)] = null);

(statearr_51381_53298[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (2))){
var inst_51284 = (state_51345[(11)]);
var inst_51287 = (state_51345[(12)]);
var inst_51287__$1 = cljs.core.__destructure_map(inst_51284);
var inst_51288 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51287__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_51289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51287__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_51290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51287__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_51345__$1 = (function (){var statearr_51382 = state_51345;
(statearr_51382[(12)] = inst_51287__$1);

(statearr_51382[(15)] = inst_51288);

(statearr_51382[(18)] = inst_51289);

return statearr_51382;
})();
return cljs.core.async.ioc_alts_BANG_(state_51345__$1,(4),inst_51290);
} else {
if((state_val_51346 === (23))){
var inst_51330 = (state_51345[(2)]);
var state_51345__$1 = state_51345;
if(cljs.core.truth_(inst_51330)){
var statearr_51383_53299 = state_51345__$1;
(statearr_51383_53299[(1)] = (24));

} else {
var statearr_51384_53300 = state_51345__$1;
(statearr_51384_53300[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (19))){
var inst_51325 = (state_51345[(2)]);
var state_51345__$1 = state_51345;
var statearr_51385_53301 = state_51345__$1;
(statearr_51385_53301[(2)] = inst_51325);

(statearr_51385_53301[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (11))){
var inst_51297 = (state_51345[(14)]);
var inst_51309 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_51297);
var state_51345__$1 = state_51345;
var statearr_51390_53304 = state_51345__$1;
(statearr_51390_53304[(2)] = inst_51309);

(statearr_51390_53304[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (9))){
var inst_51288 = (state_51345[(15)]);
var inst_51297 = (state_51345[(14)]);
var inst_51316 = (state_51345[(19)]);
var inst_51316__$1 = (inst_51288.cljs$core$IFn$_invoke$arity$1 ? inst_51288.cljs$core$IFn$_invoke$arity$1(inst_51297) : inst_51288.call(null,inst_51297));
var state_51345__$1 = (function (){var statearr_51391 = state_51345;
(statearr_51391[(19)] = inst_51316__$1);

return statearr_51391;
})();
if(cljs.core.truth_(inst_51316__$1)){
var statearr_51392_53305 = state_51345__$1;
(statearr_51392_53305[(1)] = (14));

} else {
var statearr_51393_53306 = state_51345__$1;
(statearr_51393_53306[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (5))){
var inst_51299 = (state_51345[(13)]);
var state_51345__$1 = state_51345;
var statearr_51394_53307 = state_51345__$1;
(statearr_51394_53307[(2)] = inst_51299);

(statearr_51394_53307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (14))){
var inst_51316 = (state_51345[(19)]);
var state_51345__$1 = state_51345;
var statearr_51396_53308 = state_51345__$1;
(statearr_51396_53308[(2)] = inst_51316);

(statearr_51396_53308[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (26))){
var inst_51335 = (state_51345[(2)]);
var state_51345__$1 = state_51345;
var statearr_51398_53310 = state_51345__$1;
(statearr_51398_53310[(2)] = inst_51335);

(statearr_51398_53310[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (16))){
var inst_51327 = (state_51345[(2)]);
var state_51345__$1 = state_51345;
if(cljs.core.truth_(inst_51327)){
var statearr_51399_53312 = state_51345__$1;
(statearr_51399_53312[(1)] = (20));

} else {
var statearr_51400_53314 = state_51345__$1;
(statearr_51400_53314[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (10))){
var inst_51341 = (state_51345[(2)]);
var state_51345__$1 = state_51345;
var statearr_51401_53315 = state_51345__$1;
(statearr_51401_53315[(2)] = inst_51341);

(statearr_51401_53315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (18))){
var inst_51319 = (state_51345[(16)]);
var state_51345__$1 = state_51345;
var statearr_51402_53316 = state_51345__$1;
(statearr_51402_53316[(2)] = inst_51319);

(statearr_51402_53316[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51346 === (8))){
var inst_51296 = (state_51345[(7)]);
var inst_51307 = (inst_51296 == null);
var state_51345__$1 = state_51345;
if(cljs.core.truth_(inst_51307)){
var statearr_51403_53317 = state_51345__$1;
(statearr_51403_53317[(1)] = (11));

} else {
var statearr_51405_53318 = state_51345__$1;
(statearr_51405_53318[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__50319__auto__ = null;
var cljs$core$async$mix_$_state_machine__50319__auto____0 = (function (){
var statearr_51409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51409[(0)] = cljs$core$async$mix_$_state_machine__50319__auto__);

(statearr_51409[(1)] = (1));

return statearr_51409;
});
var cljs$core$async$mix_$_state_machine__50319__auto____1 = (function (state_51345){
while(true){
var ret_value__50320__auto__ = (function (){try{while(true){
var result__50321__auto__ = switch__50318__auto__(state_51345);
if(cljs.core.keyword_identical_QMARK_(result__50321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50321__auto__;
}
break;
}
}catch (e51410){var ex__50322__auto__ = e51410;
var statearr_51411_53319 = state_51345;
(statearr_51411_53319[(2)] = ex__50322__auto__);


if(cljs.core.seq((state_51345[(4)]))){
var statearr_51412_53320 = state_51345;
(statearr_51412_53320[(1)] = cljs.core.first((state_51345[(4)])));

} else {
throw ex__50322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53322 = state_51345;
state_51345 = G__53322;
continue;
} else {
return ret_value__50320__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__50319__auto__ = function(state_51345){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__50319__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__50319__auto____1.call(this,state_51345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__50319__auto____0;
cljs$core$async$mix_$_state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__50319__auto____1;
return cljs$core$async$mix_$_state_machine__50319__auto__;
})()
})();
var state__50368__auto__ = (function (){var statearr_51413 = f__50367__auto__();
(statearr_51413[(6)] = c__50366__auto___53274);

return statearr_51413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50368__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_53323 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_53323(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_53327 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_53327(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_53329 = (function() {
var G__53330 = null;
var G__53330__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__53330__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__53330 = function(p,v){
switch(arguments.length){
case 1:
return G__53330__1.call(this,p);
case 2:
return G__53330__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__53330.cljs$core$IFn$_invoke$arity$1 = G__53330__1;
G__53330.cljs$core$IFn$_invoke$arity$2 = G__53330__2;
return G__53330;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__51424 = arguments.length;
switch (G__51424) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53329(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_53329(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51436 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta51437){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta51437 = meta51437;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51436.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51438,meta51437__$1){
var self__ = this;
var _51438__$1 = this;
return (new cljs.core.async.t_cljs$core$async51436(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta51437__$1));
}));

(cljs.core.async.t_cljs$core$async51436.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51438){
var self__ = this;
var _51438__$1 = this;
return self__.meta51437;
}));

(cljs.core.async.t_cljs$core$async51436.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51436.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async51436.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51436.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async51436.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async51436.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async51436.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async51436.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta51437","meta51437",-1619672684,null)], null);
}));

(cljs.core.async.t_cljs$core$async51436.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51436.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51436");

(cljs.core.async.t_cljs$core$async51436.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async51436");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51436.
 */
cljs.core.async.__GT_t_cljs$core$async51436 = (function cljs$core$async$__GT_t_cljs$core$async51436(ch,topic_fn,buf_fn,mults,ensure_mult,meta51437){
return (new cljs.core.async.t_cljs$core$async51436(ch,topic_fn,buf_fn,mults,ensure_mult,meta51437));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__51431 = arguments.length;
switch (G__51431) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__51428_SHARP_){
if(cljs.core.truth_((p1__51428_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__51428_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__51428_SHARP_.call(null,topic)))){
return p1__51428_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51428_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async51436(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__50366__auto___53338 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50367__auto__ = (function (){var switch__50318__auto__ = (function (state_51529){
var state_val_51530 = (state_51529[(1)]);
if((state_val_51530 === (7))){
var inst_51525 = (state_51529[(2)]);
var state_51529__$1 = state_51529;
var statearr_51534_53340 = state_51529__$1;
(statearr_51534_53340[(2)] = inst_51525);

(statearr_51534_53340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51530 === (20))){
var state_51529__$1 = state_51529;
var statearr_51535_53341 = state_51529__$1;
(statearr_51535_53341[(2)] = null);

(statearr_51535_53341[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51530 === (1))){
var state_51529__$1 = state_51529;
var statearr_51536_53342 = state_51529__$1;
(statearr_51536_53342[(2)] = null);

(statearr_51536_53342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51530 === (24))){
var inst_51508 = (state_51529[(7)]);
var inst_51517 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_51508);
var state_51529__$1 = state_51529;
var statearr_51537_53344 = state_51529__$1;
(statearr_51537_53344[(2)] = inst_51517);

(statearr_51537_53344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51530 === (4))){
var inst_51460 = (state_51529[(8)]);
var inst_51460__$1 = (state_51529[(2)]);
var inst_51461 = (inst_51460__$1 == null);
var state_51529__$1 = (function (){var statearr_51538 = state_51529;
(statearr_51538[(8)] = inst_51460__$1);

return statearr_51538;
})();
if(cljs.core.truth_(inst_51461)){
var statearr_51539_53351 = state_51529__$1;
(statearr_51539_53351[(1)] = (5));

} else {
var statearr_51540_53352 = state_51529__$1;
(statearr_51540_53352[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51530 === (15))){
var inst_51502 = (state_51529[(2)]);
var state_51529__$1 = state_51529;
var statearr_51541_53353 = state_51529__$1;
(statearr_51541_53353[(2)] = inst_51502);

(statearr_51541_53353[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51530 === (21))){
var inst_51522 = (state_51529[(2)]);
var state_51529__$1 = (function (){var statearr_51542 = state_51529;
(statearr_51542[(9)] = inst_51522);

return statearr_51542;
})();
var statearr_51543_53354 = state_51529__$1;
(statearr_51543_53354[(2)] = null);

(statearr_51543_53354[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51530 === (13))){
var inst_51484 = (state_51529[(10)]);
var inst_51486 = cljs.core.chunked_seq_QMARK_(inst_51484);
var state_51529__$1 = state_51529;
if(inst_51486){
var statearr_51544_53355 = state_51529__$1;
(statearr_51544_53355[(1)] = (16));

} else {
var statearr_51545_53356 = state_51529__$1;
(statearr_51545_53356[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51530 === (22))){
var inst_51514 = (state_51529[(2)]);
var state_51529__$1 = state_51529;
if(cljs.core.truth_(inst_51514)){
var statearr_51546_53357 = state_51529__$1;
(statearr_51546_53357[(1)] = (23));

} else {
var statearr_51547_53358 = state_51529__$1;
(statearr_51547_53358[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51530 === (6))){
var inst_51460 = (state_51529[(8)]);
var inst_51508 = (state_51529[(7)]);
var inst_51510 = (state_51529[(11)]);
var inst_51508__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_51460) : topic_fn.call(null,inst_51460));
var inst_51509 = cljs.core.deref(mults);
var inst_51510__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_51509,inst_51508__$1);
var state_51529__$1 = (function (){var statearr_51548 = state_51529;
(statearr_51548[(7)] = inst_51508__$1);

(statearr_51548[(11)] = inst_51510__$1);

return statearr_51548;
})();
if(cljs.core.truth_(inst_51510__$1)){
var statearr_51549_53360 = state_51529__$1;
(statearr_51549_53360[(1)] = (19));

} else {
var statearr_51550_53362 = state_51529__$1;
(statearr_51550_53362[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51530 === (25))){
var inst_51519 = (state_51529[(2)]);
var state_51529__$1 = state_51529;
var statearr_51551_53363 = state_51529__$1;
(statearr_51551_53363[(2)] = inst_51519);

(statearr_51551_53363[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51530 === (17))){
var inst_51484 = (state_51529[(10)]);
var inst_51493 = cljs.core.first(inst_51484);
var inst_51494 = cljs.core.async.muxch_STAR_(inst_51493);
var inst_51495 = cljs.core.async.close_BANG_(inst_51494);
var inst_51496 = cljs.core.next(inst_51484);
var inst_51470 = inst_51496;
var inst_51471 = null;
var inst_51472 = (0);
var inst_51473 = (0);
var state_51529__$1 = (function (){var statearr_51554 = state_51529;
(statearr_51554[(12)] = inst_51495);

(statearr_51554[(13)] = inst_51470);

(statearr_51554[(14)] = inst_51471);

(statearr_51554[(15)] = inst_51472);

(statearr_51554[(16)] = inst_51473);

return statearr_51554;
})();
var statearr_51555_53365 = state_51529__$1;
(statearr_51555_53365[(2)] = null);

(statearr_51555_53365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51530 === (3))){
var inst_51527 = (state_51529[(2)]);
var state_51529__$1 = state_51529;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51529__$1,inst_51527);
} else {
if((state_val_51530 === (12))){
var inst_51504 = (state_51529[(2)]);
var state_51529__$1 = state_51529;
var statearr_51556_53377 = state_51529__$1;
(statearr_51556_53377[(2)] = inst_51504);

(statearr_51556_53377[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51530 === (2))){
var state_51529__$1 = state_51529;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51529__$1,(4),ch);
} else {
if((state_val_51530 === (23))){
var state_51529__$1 = state_51529;
var statearr_51560_53378 = state_51529__$1;
(statearr_51560_53378[(2)] = null);

(statearr_51560_53378[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51530 === (19))){
var inst_51510 = (state_51529[(11)]);
var inst_51460 = (state_51529[(8)]);
var inst_51512 = cljs.core.async.muxch_STAR_(inst_51510);
var state_51529__$1 = state_51529;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51529__$1,(22),inst_51512,inst_51460);
} else {
if((state_val_51530 === (11))){
var inst_51470 = (state_51529[(13)]);
var inst_51484 = (state_51529[(10)]);
var inst_51484__$1 = cljs.core.seq(inst_51470);
var state_51529__$1 = (function (){var statearr_51561 = state_51529;
(statearr_51561[(10)] = inst_51484__$1);

return statearr_51561;
})();
if(inst_51484__$1){
var statearr_51562_53380 = state_51529__$1;
(statearr_51562_53380[(1)] = (13));

} else {
var statearr_51563_53381 = state_51529__$1;
(statearr_51563_53381[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51530 === (9))){
var inst_51506 = (state_51529[(2)]);
var state_51529__$1 = state_51529;
var statearr_51564_53382 = state_51529__$1;
(statearr_51564_53382[(2)] = inst_51506);

(statearr_51564_53382[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51530 === (5))){
var inst_51467 = cljs.core.deref(mults);
var inst_51468 = cljs.core.vals(inst_51467);
var inst_51469 = cljs.core.seq(inst_51468);
var inst_51470 = inst_51469;
var inst_51471 = null;
var inst_51472 = (0);
var inst_51473 = (0);
var state_51529__$1 = (function (){var statearr_51565 = state_51529;
(statearr_51565[(13)] = inst_51470);

(statearr_51565[(14)] = inst_51471);

(statearr_51565[(15)] = inst_51472);

(statearr_51565[(16)] = inst_51473);

return statearr_51565;
})();
var statearr_51567_53384 = state_51529__$1;
(statearr_51567_53384[(2)] = null);

(statearr_51567_53384[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51530 === (14))){
var state_51529__$1 = state_51529;
var statearr_51572_53387 = state_51529__$1;
(statearr_51572_53387[(2)] = null);

(statearr_51572_53387[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51530 === (16))){
var inst_51484 = (state_51529[(10)]);
var inst_51488 = cljs.core.chunk_first(inst_51484);
var inst_51489 = cljs.core.chunk_rest(inst_51484);
var inst_51490 = cljs.core.count(inst_51488);
var inst_51470 = inst_51489;
var inst_51471 = inst_51488;
var inst_51472 = inst_51490;
var inst_51473 = (0);
var state_51529__$1 = (function (){var statearr_51573 = state_51529;
(statearr_51573[(13)] = inst_51470);

(statearr_51573[(14)] = inst_51471);

(statearr_51573[(15)] = inst_51472);

(statearr_51573[(16)] = inst_51473);

return statearr_51573;
})();
var statearr_51574_53391 = state_51529__$1;
(statearr_51574_53391[(2)] = null);

(statearr_51574_53391[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51530 === (10))){
var inst_51471 = (state_51529[(14)]);
var inst_51473 = (state_51529[(16)]);
var inst_51470 = (state_51529[(13)]);
var inst_51472 = (state_51529[(15)]);
var inst_51478 = cljs.core._nth(inst_51471,inst_51473);
var inst_51479 = cljs.core.async.muxch_STAR_(inst_51478);
var inst_51480 = cljs.core.async.close_BANG_(inst_51479);
var inst_51481 = (inst_51473 + (1));
var tmp51569 = inst_51470;
var tmp51570 = inst_51472;
var tmp51571 = inst_51471;
var inst_51470__$1 = tmp51569;
var inst_51471__$1 = tmp51571;
var inst_51472__$1 = tmp51570;
var inst_51473__$1 = inst_51481;
var state_51529__$1 = (function (){var statearr_51575 = state_51529;
(statearr_51575[(17)] = inst_51480);

(statearr_51575[(13)] = inst_51470__$1);

(statearr_51575[(14)] = inst_51471__$1);

(statearr_51575[(15)] = inst_51472__$1);

(statearr_51575[(16)] = inst_51473__$1);

return statearr_51575;
})();
var statearr_51576_53396 = state_51529__$1;
(statearr_51576_53396[(2)] = null);

(statearr_51576_53396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51530 === (18))){
var inst_51499 = (state_51529[(2)]);
var state_51529__$1 = state_51529;
var statearr_51578_53397 = state_51529__$1;
(statearr_51578_53397[(2)] = inst_51499);

(statearr_51578_53397[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51530 === (8))){
var inst_51473 = (state_51529[(16)]);
var inst_51472 = (state_51529[(15)]);
var inst_51475 = (inst_51473 < inst_51472);
var inst_51476 = inst_51475;
var state_51529__$1 = state_51529;
if(cljs.core.truth_(inst_51476)){
var statearr_51580_53398 = state_51529__$1;
(statearr_51580_53398[(1)] = (10));

} else {
var statearr_51581_53399 = state_51529__$1;
(statearr_51581_53399[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50319__auto__ = null;
var cljs$core$async$state_machine__50319__auto____0 = (function (){
var statearr_51582 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51582[(0)] = cljs$core$async$state_machine__50319__auto__);

(statearr_51582[(1)] = (1));

return statearr_51582;
});
var cljs$core$async$state_machine__50319__auto____1 = (function (state_51529){
while(true){
var ret_value__50320__auto__ = (function (){try{while(true){
var result__50321__auto__ = switch__50318__auto__(state_51529);
if(cljs.core.keyword_identical_QMARK_(result__50321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50321__auto__;
}
break;
}
}catch (e51583){var ex__50322__auto__ = e51583;
var statearr_51584_53400 = state_51529;
(statearr_51584_53400[(2)] = ex__50322__auto__);


if(cljs.core.seq((state_51529[(4)]))){
var statearr_51585_53401 = state_51529;
(statearr_51585_53401[(1)] = cljs.core.first((state_51529[(4)])));

} else {
throw ex__50322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53402 = state_51529;
state_51529 = G__53402;
continue;
} else {
return ret_value__50320__auto__;
}
break;
}
});
cljs$core$async$state_machine__50319__auto__ = function(state_51529){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50319__auto____1.call(this,state_51529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50319__auto____0;
cljs$core$async$state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50319__auto____1;
return cljs$core$async$state_machine__50319__auto__;
})()
})();
var state__50368__auto__ = (function (){var statearr_51586 = f__50367__auto__();
(statearr_51586[(6)] = c__50366__auto___53338);

return statearr_51586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50368__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__51588 = arguments.length;
switch (G__51588) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__51590 = arguments.length;
switch (G__51590) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__51592 = arguments.length;
switch (G__51592) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__50366__auto___53413 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50367__auto__ = (function (){var switch__50318__auto__ = (function (state_51641){
var state_val_51642 = (state_51641[(1)]);
if((state_val_51642 === (7))){
var state_51641__$1 = state_51641;
var statearr_51643_53417 = state_51641__$1;
(statearr_51643_53417[(2)] = null);

(statearr_51643_53417[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51642 === (1))){
var state_51641__$1 = state_51641;
var statearr_51644_53418 = state_51641__$1;
(statearr_51644_53418[(2)] = null);

(statearr_51644_53418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51642 === (4))){
var inst_51597 = (state_51641[(7)]);
var inst_51596 = (state_51641[(8)]);
var inst_51599 = (inst_51597 < inst_51596);
var state_51641__$1 = state_51641;
if(cljs.core.truth_(inst_51599)){
var statearr_51645_53419 = state_51641__$1;
(statearr_51645_53419[(1)] = (6));

} else {
var statearr_51646_53420 = state_51641__$1;
(statearr_51646_53420[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51642 === (15))){
var inst_51627 = (state_51641[(9)]);
var inst_51632 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_51627);
var state_51641__$1 = state_51641;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51641__$1,(17),out,inst_51632);
} else {
if((state_val_51642 === (13))){
var inst_51627 = (state_51641[(9)]);
var inst_51627__$1 = (state_51641[(2)]);
var inst_51628 = cljs.core.some(cljs.core.nil_QMARK_,inst_51627__$1);
var state_51641__$1 = (function (){var statearr_51648 = state_51641;
(statearr_51648[(9)] = inst_51627__$1);

return statearr_51648;
})();
if(cljs.core.truth_(inst_51628)){
var statearr_51649_53421 = state_51641__$1;
(statearr_51649_53421[(1)] = (14));

} else {
var statearr_51650_53422 = state_51641__$1;
(statearr_51650_53422[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51642 === (6))){
var state_51641__$1 = state_51641;
var statearr_51651_53423 = state_51641__$1;
(statearr_51651_53423[(2)] = null);

(statearr_51651_53423[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51642 === (17))){
var inst_51634 = (state_51641[(2)]);
var state_51641__$1 = (function (){var statearr_51658 = state_51641;
(statearr_51658[(10)] = inst_51634);

return statearr_51658;
})();
var statearr_51659_53424 = state_51641__$1;
(statearr_51659_53424[(2)] = null);

(statearr_51659_53424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51642 === (3))){
var inst_51639 = (state_51641[(2)]);
var state_51641__$1 = state_51641;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51641__$1,inst_51639);
} else {
if((state_val_51642 === (12))){
var _ = (function (){var statearr_51661 = state_51641;
(statearr_51661[(4)] = cljs.core.rest((state_51641[(4)])));

return statearr_51661;
})();
var state_51641__$1 = state_51641;
var ex51657 = (state_51641__$1[(2)]);
var statearr_51662_53425 = state_51641__$1;
(statearr_51662_53425[(5)] = ex51657);


if((ex51657 instanceof Object)){
var statearr_51663_53426 = state_51641__$1;
(statearr_51663_53426[(1)] = (11));

(statearr_51663_53426[(5)] = null);

} else {
throw ex51657;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51642 === (2))){
var inst_51595 = cljs.core.reset_BANG_(dctr,cnt);
var inst_51596 = cnt;
var inst_51597 = (0);
var state_51641__$1 = (function (){var statearr_51665 = state_51641;
(statearr_51665[(11)] = inst_51595);

(statearr_51665[(8)] = inst_51596);

(statearr_51665[(7)] = inst_51597);

return statearr_51665;
})();
var statearr_51666_53429 = state_51641__$1;
(statearr_51666_53429[(2)] = null);

(statearr_51666_53429[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51642 === (11))){
var inst_51605 = (state_51641[(2)]);
var inst_51606 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_51641__$1 = (function (){var statearr_51667 = state_51641;
(statearr_51667[(12)] = inst_51605);

return statearr_51667;
})();
var statearr_51668_53430 = state_51641__$1;
(statearr_51668_53430[(2)] = inst_51606);

(statearr_51668_53430[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51642 === (9))){
var inst_51597 = (state_51641[(7)]);
var _ = (function (){var statearr_51670 = state_51641;
(statearr_51670[(4)] = cljs.core.cons((12),(state_51641[(4)])));

return statearr_51670;
})();
var inst_51612 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_51597) : chs__$1.call(null,inst_51597));
var inst_51613 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_51597) : done.call(null,inst_51597));
var inst_51614 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_51612,inst_51613);
var ___$1 = (function (){var statearr_51673 = state_51641;
(statearr_51673[(4)] = cljs.core.rest((state_51641[(4)])));

return statearr_51673;
})();
var state_51641__$1 = state_51641;
var statearr_51674_53435 = state_51641__$1;
(statearr_51674_53435[(2)] = inst_51614);

(statearr_51674_53435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51642 === (5))){
var inst_51625 = (state_51641[(2)]);
var state_51641__$1 = (function (){var statearr_51675 = state_51641;
(statearr_51675[(13)] = inst_51625);

return statearr_51675;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51641__$1,(13),dchan);
} else {
if((state_val_51642 === (14))){
var inst_51630 = cljs.core.async.close_BANG_(out);
var state_51641__$1 = state_51641;
var statearr_51677_53436 = state_51641__$1;
(statearr_51677_53436[(2)] = inst_51630);

(statearr_51677_53436[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51642 === (16))){
var inst_51637 = (state_51641[(2)]);
var state_51641__$1 = state_51641;
var statearr_51678_53437 = state_51641__$1;
(statearr_51678_53437[(2)] = inst_51637);

(statearr_51678_53437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51642 === (10))){
var inst_51597 = (state_51641[(7)]);
var inst_51618 = (state_51641[(2)]);
var inst_51619 = (inst_51597 + (1));
var inst_51597__$1 = inst_51619;
var state_51641__$1 = (function (){var statearr_51679 = state_51641;
(statearr_51679[(14)] = inst_51618);

(statearr_51679[(7)] = inst_51597__$1);

return statearr_51679;
})();
var statearr_51680_53438 = state_51641__$1;
(statearr_51680_53438[(2)] = null);

(statearr_51680_53438[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51642 === (8))){
var inst_51623 = (state_51641[(2)]);
var state_51641__$1 = state_51641;
var statearr_51681_53441 = state_51641__$1;
(statearr_51681_53441[(2)] = inst_51623);

(statearr_51681_53441[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50319__auto__ = null;
var cljs$core$async$state_machine__50319__auto____0 = (function (){
var statearr_51683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51683[(0)] = cljs$core$async$state_machine__50319__auto__);

(statearr_51683[(1)] = (1));

return statearr_51683;
});
var cljs$core$async$state_machine__50319__auto____1 = (function (state_51641){
while(true){
var ret_value__50320__auto__ = (function (){try{while(true){
var result__50321__auto__ = switch__50318__auto__(state_51641);
if(cljs.core.keyword_identical_QMARK_(result__50321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50321__auto__;
}
break;
}
}catch (e51687){var ex__50322__auto__ = e51687;
var statearr_51689_53443 = state_51641;
(statearr_51689_53443[(2)] = ex__50322__auto__);


if(cljs.core.seq((state_51641[(4)]))){
var statearr_51691_53444 = state_51641;
(statearr_51691_53444[(1)] = cljs.core.first((state_51641[(4)])));

} else {
throw ex__50322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53447 = state_51641;
state_51641 = G__53447;
continue;
} else {
return ret_value__50320__auto__;
}
break;
}
});
cljs$core$async$state_machine__50319__auto__ = function(state_51641){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50319__auto____1.call(this,state_51641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50319__auto____0;
cljs$core$async$state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50319__auto____1;
return cljs$core$async$state_machine__50319__auto__;
})()
})();
var state__50368__auto__ = (function (){var statearr_51694 = f__50367__auto__();
(statearr_51694[(6)] = c__50366__auto___53413);

return statearr_51694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50368__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__51703 = arguments.length;
switch (G__51703) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50366__auto___53451 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50367__auto__ = (function (){var switch__50318__auto__ = (function (state_51742){
var state_val_51743 = (state_51742[(1)]);
if((state_val_51743 === (7))){
var inst_51719 = (state_51742[(7)]);
var inst_51720 = (state_51742[(8)]);
var inst_51719__$1 = (state_51742[(2)]);
var inst_51720__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51719__$1,(0),null);
var inst_51721 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_51719__$1,(1),null);
var inst_51722 = (inst_51720__$1 == null);
var state_51742__$1 = (function (){var statearr_51744 = state_51742;
(statearr_51744[(7)] = inst_51719__$1);

(statearr_51744[(8)] = inst_51720__$1);

(statearr_51744[(9)] = inst_51721);

return statearr_51744;
})();
if(cljs.core.truth_(inst_51722)){
var statearr_51745_53453 = state_51742__$1;
(statearr_51745_53453[(1)] = (8));

} else {
var statearr_51746_53455 = state_51742__$1;
(statearr_51746_53455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (1))){
var inst_51708 = cljs.core.vec(chs);
var inst_51709 = inst_51708;
var state_51742__$1 = (function (){var statearr_51747 = state_51742;
(statearr_51747[(10)] = inst_51709);

return statearr_51747;
})();
var statearr_51748_53456 = state_51742__$1;
(statearr_51748_53456[(2)] = null);

(statearr_51748_53456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (4))){
var inst_51709 = (state_51742[(10)]);
var state_51742__$1 = state_51742;
return cljs.core.async.ioc_alts_BANG_(state_51742__$1,(7),inst_51709);
} else {
if((state_val_51743 === (6))){
var inst_51738 = (state_51742[(2)]);
var state_51742__$1 = state_51742;
var statearr_51750_53460 = state_51742__$1;
(statearr_51750_53460[(2)] = inst_51738);

(statearr_51750_53460[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (3))){
var inst_51740 = (state_51742[(2)]);
var state_51742__$1 = state_51742;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51742__$1,inst_51740);
} else {
if((state_val_51743 === (2))){
var inst_51709 = (state_51742[(10)]);
var inst_51711 = cljs.core.count(inst_51709);
var inst_51712 = (inst_51711 > (0));
var state_51742__$1 = state_51742;
if(cljs.core.truth_(inst_51712)){
var statearr_51752_53463 = state_51742__$1;
(statearr_51752_53463[(1)] = (4));

} else {
var statearr_51753_53464 = state_51742__$1;
(statearr_51753_53464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (11))){
var inst_51709 = (state_51742[(10)]);
var inst_51731 = (state_51742[(2)]);
var tmp51751 = inst_51709;
var inst_51709__$1 = tmp51751;
var state_51742__$1 = (function (){var statearr_51754 = state_51742;
(statearr_51754[(11)] = inst_51731);

(statearr_51754[(10)] = inst_51709__$1);

return statearr_51754;
})();
var statearr_51756_53465 = state_51742__$1;
(statearr_51756_53465[(2)] = null);

(statearr_51756_53465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (9))){
var inst_51720 = (state_51742[(8)]);
var state_51742__$1 = state_51742;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51742__$1,(11),out,inst_51720);
} else {
if((state_val_51743 === (5))){
var inst_51736 = cljs.core.async.close_BANG_(out);
var state_51742__$1 = state_51742;
var statearr_51758_53466 = state_51742__$1;
(statearr_51758_53466[(2)] = inst_51736);

(statearr_51758_53466[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (10))){
var inst_51734 = (state_51742[(2)]);
var state_51742__$1 = state_51742;
var statearr_51761_53467 = state_51742__$1;
(statearr_51761_53467[(2)] = inst_51734);

(statearr_51761_53467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51743 === (8))){
var inst_51709 = (state_51742[(10)]);
var inst_51719 = (state_51742[(7)]);
var inst_51720 = (state_51742[(8)]);
var inst_51721 = (state_51742[(9)]);
var inst_51724 = (function (){var cs = inst_51709;
var vec__51715 = inst_51719;
var v = inst_51720;
var c = inst_51721;
return (function (p1__51697_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__51697_SHARP_);
});
})();
var inst_51726 = cljs.core.filterv(inst_51724,inst_51709);
var inst_51709__$1 = inst_51726;
var state_51742__$1 = (function (){var statearr_51763 = state_51742;
(statearr_51763[(10)] = inst_51709__$1);

return statearr_51763;
})();
var statearr_51764_53469 = state_51742__$1;
(statearr_51764_53469[(2)] = null);

(statearr_51764_53469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50319__auto__ = null;
var cljs$core$async$state_machine__50319__auto____0 = (function (){
var statearr_51766 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_51766[(0)] = cljs$core$async$state_machine__50319__auto__);

(statearr_51766[(1)] = (1));

return statearr_51766;
});
var cljs$core$async$state_machine__50319__auto____1 = (function (state_51742){
while(true){
var ret_value__50320__auto__ = (function (){try{while(true){
var result__50321__auto__ = switch__50318__auto__(state_51742);
if(cljs.core.keyword_identical_QMARK_(result__50321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50321__auto__;
}
break;
}
}catch (e51767){var ex__50322__auto__ = e51767;
var statearr_51768_53470 = state_51742;
(statearr_51768_53470[(2)] = ex__50322__auto__);


if(cljs.core.seq((state_51742[(4)]))){
var statearr_51769_53471 = state_51742;
(statearr_51769_53471[(1)] = cljs.core.first((state_51742[(4)])));

} else {
throw ex__50322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53472 = state_51742;
state_51742 = G__53472;
continue;
} else {
return ret_value__50320__auto__;
}
break;
}
});
cljs$core$async$state_machine__50319__auto__ = function(state_51742){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50319__auto____1.call(this,state_51742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50319__auto____0;
cljs$core$async$state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50319__auto____1;
return cljs$core$async$state_machine__50319__auto__;
})()
})();
var state__50368__auto__ = (function (){var statearr_51770 = f__50367__auto__();
(statearr_51770[(6)] = c__50366__auto___53451);

return statearr_51770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50368__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__51774 = arguments.length;
switch (G__51774) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50366__auto___53476 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50367__auto__ = (function (){var switch__50318__auto__ = (function (state_51800){
var state_val_51801 = (state_51800[(1)]);
if((state_val_51801 === (7))){
var inst_51781 = (state_51800[(7)]);
var inst_51781__$1 = (state_51800[(2)]);
var inst_51782 = (inst_51781__$1 == null);
var inst_51783 = cljs.core.not(inst_51782);
var state_51800__$1 = (function (){var statearr_51806 = state_51800;
(statearr_51806[(7)] = inst_51781__$1);

return statearr_51806;
})();
if(inst_51783){
var statearr_51807_53480 = state_51800__$1;
(statearr_51807_53480[(1)] = (8));

} else {
var statearr_51808_53481 = state_51800__$1;
(statearr_51808_53481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51801 === (1))){
var inst_51776 = (0);
var state_51800__$1 = (function (){var statearr_51809 = state_51800;
(statearr_51809[(8)] = inst_51776);

return statearr_51809;
})();
var statearr_51810_53482 = state_51800__$1;
(statearr_51810_53482[(2)] = null);

(statearr_51810_53482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51801 === (4))){
var state_51800__$1 = state_51800;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51800__$1,(7),ch);
} else {
if((state_val_51801 === (6))){
var inst_51794 = (state_51800[(2)]);
var state_51800__$1 = state_51800;
var statearr_51812_53483 = state_51800__$1;
(statearr_51812_53483[(2)] = inst_51794);

(statearr_51812_53483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51801 === (3))){
var inst_51796 = (state_51800[(2)]);
var inst_51797 = cljs.core.async.close_BANG_(out);
var state_51800__$1 = (function (){var statearr_51813 = state_51800;
(statearr_51813[(9)] = inst_51796);

return statearr_51813;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_51800__$1,inst_51797);
} else {
if((state_val_51801 === (2))){
var inst_51776 = (state_51800[(8)]);
var inst_51778 = (inst_51776 < n);
var state_51800__$1 = state_51800;
if(cljs.core.truth_(inst_51778)){
var statearr_51817_53485 = state_51800__$1;
(statearr_51817_53485[(1)] = (4));

} else {
var statearr_51818_53486 = state_51800__$1;
(statearr_51818_53486[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51801 === (11))){
var inst_51776 = (state_51800[(8)]);
var inst_51786 = (state_51800[(2)]);
var inst_51787 = (inst_51776 + (1));
var inst_51776__$1 = inst_51787;
var state_51800__$1 = (function (){var statearr_51820 = state_51800;
(statearr_51820[(10)] = inst_51786);

(statearr_51820[(8)] = inst_51776__$1);

return statearr_51820;
})();
var statearr_51821_53487 = state_51800__$1;
(statearr_51821_53487[(2)] = null);

(statearr_51821_53487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51801 === (9))){
var state_51800__$1 = state_51800;
var statearr_51822_53488 = state_51800__$1;
(statearr_51822_53488[(2)] = null);

(statearr_51822_53488[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51801 === (5))){
var state_51800__$1 = state_51800;
var statearr_51823_53489 = state_51800__$1;
(statearr_51823_53489[(2)] = null);

(statearr_51823_53489[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51801 === (10))){
var inst_51791 = (state_51800[(2)]);
var state_51800__$1 = state_51800;
var statearr_51827_53490 = state_51800__$1;
(statearr_51827_53490[(2)] = inst_51791);

(statearr_51827_53490[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51801 === (8))){
var inst_51781 = (state_51800[(7)]);
var state_51800__$1 = state_51800;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51800__$1,(11),out,inst_51781);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50319__auto__ = null;
var cljs$core$async$state_machine__50319__auto____0 = (function (){
var statearr_51829 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_51829[(0)] = cljs$core$async$state_machine__50319__auto__);

(statearr_51829[(1)] = (1));

return statearr_51829;
});
var cljs$core$async$state_machine__50319__auto____1 = (function (state_51800){
while(true){
var ret_value__50320__auto__ = (function (){try{while(true){
var result__50321__auto__ = switch__50318__auto__(state_51800);
if(cljs.core.keyword_identical_QMARK_(result__50321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50321__auto__;
}
break;
}
}catch (e51832){var ex__50322__auto__ = e51832;
var statearr_51833_53491 = state_51800;
(statearr_51833_53491[(2)] = ex__50322__auto__);


if(cljs.core.seq((state_51800[(4)]))){
var statearr_51834_53492 = state_51800;
(statearr_51834_53492[(1)] = cljs.core.first((state_51800[(4)])));

} else {
throw ex__50322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53493 = state_51800;
state_51800 = G__53493;
continue;
} else {
return ret_value__50320__auto__;
}
break;
}
});
cljs$core$async$state_machine__50319__auto__ = function(state_51800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50319__auto____1.call(this,state_51800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50319__auto____0;
cljs$core$async$state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50319__auto____1;
return cljs$core$async$state_machine__50319__auto__;
})()
})();
var state__50368__auto__ = (function (){var statearr_51835 = f__50367__auto__();
(statearr_51835[(6)] = c__50366__auto___53476);

return statearr_51835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50368__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51844 = (function (f,ch,meta51841,_,fn1,meta51845){
this.f = f;
this.ch = ch;
this.meta51841 = meta51841;
this._ = _;
this.fn1 = fn1;
this.meta51845 = meta51845;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51846,meta51845__$1){
var self__ = this;
var _51846__$1 = this;
return (new cljs.core.async.t_cljs$core$async51844(self__.f,self__.ch,self__.meta51841,self__._,self__.fn1,meta51845__$1));
}));

(cljs.core.async.t_cljs$core$async51844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51846){
var self__ = this;
var _51846__$1 = this;
return self__.meta51845;
}));

(cljs.core.async.t_cljs$core$async51844.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51844.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async51844.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async51844.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__51838_SHARP_){
var G__51860 = (((p1__51838_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__51838_SHARP_) : self__.f.call(null,p1__51838_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__51860) : f1.call(null,G__51860));
});
}));

(cljs.core.async.t_cljs$core$async51844.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51841","meta51841",-1347738384,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async51840","cljs.core.async/t_cljs$core$async51840",226917100,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta51845","meta51845",-1150749413,null)], null);
}));

(cljs.core.async.t_cljs$core$async51844.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51844.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51844");

(cljs.core.async.t_cljs$core$async51844.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async51844");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51844.
 */
cljs.core.async.__GT_t_cljs$core$async51844 = (function cljs$core$async$__GT_t_cljs$core$async51844(f,ch,meta51841,_,fn1,meta51845){
return (new cljs.core.async.t_cljs$core$async51844(f,ch,meta51841,_,fn1,meta51845));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51840 = (function (f,ch,meta51841){
this.f = f;
this.ch = ch;
this.meta51841 = meta51841;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51840.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51842,meta51841__$1){
var self__ = this;
var _51842__$1 = this;
return (new cljs.core.async.t_cljs$core$async51840(self__.f,self__.ch,meta51841__$1));
}));

(cljs.core.async.t_cljs$core$async51840.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51842){
var self__ = this;
var _51842__$1 = this;
return self__.meta51841;
}));

(cljs.core.async.t_cljs$core$async51840.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51840.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51840.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51840.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51840.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async51844(self__.f,self__.ch,self__.meta51841,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__51866 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__51866) : self__.f.call(null,G__51866));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async51840.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51840.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async51840.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51841","meta51841",-1347738384,null)], null);
}));

(cljs.core.async.t_cljs$core$async51840.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51840.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51840");

(cljs.core.async.t_cljs$core$async51840.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async51840");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51840.
 */
cljs.core.async.__GT_t_cljs$core$async51840 = (function cljs$core$async$__GT_t_cljs$core$async51840(f,ch,meta51841){
return (new cljs.core.async.t_cljs$core$async51840(f,ch,meta51841));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async51840(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51877 = (function (f,ch,meta51878){
this.f = f;
this.ch = ch;
this.meta51878 = meta51878;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51879,meta51878__$1){
var self__ = this;
var _51879__$1 = this;
return (new cljs.core.async.t_cljs$core$async51877(self__.f,self__.ch,meta51878__$1));
}));

(cljs.core.async.t_cljs$core$async51877.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51879){
var self__ = this;
var _51879__$1 = this;
return self__.meta51878;
}));

(cljs.core.async.t_cljs$core$async51877.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51877.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51877.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51877.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51877.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51877.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async51877.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51878","meta51878",633910967,null)], null);
}));

(cljs.core.async.t_cljs$core$async51877.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51877.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51877");

(cljs.core.async.t_cljs$core$async51877.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async51877");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51877.
 */
cljs.core.async.__GT_t_cljs$core$async51877 = (function cljs$core$async$__GT_t_cljs$core$async51877(f,ch,meta51878){
return (new cljs.core.async.t_cljs$core$async51877(f,ch,meta51878));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async51877(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async51905 = (function (p,ch,meta51906){
this.p = p;
this.ch = ch;
this.meta51906 = meta51906;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async51905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51907,meta51906__$1){
var self__ = this;
var _51907__$1 = this;
return (new cljs.core.async.t_cljs$core$async51905(self__.p,self__.ch,meta51906__$1));
}));

(cljs.core.async.t_cljs$core$async51905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51907){
var self__ = this;
var _51907__$1 = this;
return self__.meta51906;
}));

(cljs.core.async.t_cljs$core$async51905.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51905.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51905.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async51905.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51905.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async51905.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async51905.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async51905.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta51906","meta51906",-1978873635,null)], null);
}));

(cljs.core.async.t_cljs$core$async51905.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async51905.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async51905");

(cljs.core.async.t_cljs$core$async51905.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async51905");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async51905.
 */
cljs.core.async.__GT_t_cljs$core$async51905 = (function cljs$core$async$__GT_t_cljs$core$async51905(p,ch,meta51906){
return (new cljs.core.async.t_cljs$core$async51905(p,ch,meta51906));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async51905(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__51928 = arguments.length;
switch (G__51928) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50366__auto___53523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50367__auto__ = (function (){var switch__50318__auto__ = (function (state_51965){
var state_val_51966 = (state_51965[(1)]);
if((state_val_51966 === (7))){
var inst_51960 = (state_51965[(2)]);
var state_51965__$1 = state_51965;
var statearr_51971_53525 = state_51965__$1;
(statearr_51971_53525[(2)] = inst_51960);

(statearr_51971_53525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51966 === (1))){
var state_51965__$1 = state_51965;
var statearr_51972_53528 = state_51965__$1;
(statearr_51972_53528[(2)] = null);

(statearr_51972_53528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51966 === (4))){
var inst_51942 = (state_51965[(7)]);
var inst_51942__$1 = (state_51965[(2)]);
var inst_51944 = (inst_51942__$1 == null);
var state_51965__$1 = (function (){var statearr_51976 = state_51965;
(statearr_51976[(7)] = inst_51942__$1);

return statearr_51976;
})();
if(cljs.core.truth_(inst_51944)){
var statearr_51978_53530 = state_51965__$1;
(statearr_51978_53530[(1)] = (5));

} else {
var statearr_51980_53532 = state_51965__$1;
(statearr_51980_53532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51966 === (6))){
var inst_51942 = (state_51965[(7)]);
var inst_51948 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_51942) : p.call(null,inst_51942));
var state_51965__$1 = state_51965;
if(cljs.core.truth_(inst_51948)){
var statearr_51983_53534 = state_51965__$1;
(statearr_51983_53534[(1)] = (8));

} else {
var statearr_51984_53535 = state_51965__$1;
(statearr_51984_53535[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51966 === (3))){
var inst_51962 = (state_51965[(2)]);
var state_51965__$1 = state_51965;
return cljs.core.async.impl.ioc_helpers.return_chan(state_51965__$1,inst_51962);
} else {
if((state_val_51966 === (2))){
var state_51965__$1 = state_51965;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_51965__$1,(4),ch);
} else {
if((state_val_51966 === (11))){
var inst_51952 = (state_51965[(2)]);
var state_51965__$1 = state_51965;
var statearr_51989_53538 = state_51965__$1;
(statearr_51989_53538[(2)] = inst_51952);

(statearr_51989_53538[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51966 === (9))){
var state_51965__$1 = state_51965;
var statearr_51991_53542 = state_51965__$1;
(statearr_51991_53542[(2)] = null);

(statearr_51991_53542[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51966 === (5))){
var inst_51946 = cljs.core.async.close_BANG_(out);
var state_51965__$1 = state_51965;
var statearr_51992_53543 = state_51965__$1;
(statearr_51992_53543[(2)] = inst_51946);

(statearr_51992_53543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51966 === (10))){
var inst_51955 = (state_51965[(2)]);
var state_51965__$1 = (function (){var statearr_51994 = state_51965;
(statearr_51994[(8)] = inst_51955);

return statearr_51994;
})();
var statearr_51998_53545 = state_51965__$1;
(statearr_51998_53545[(2)] = null);

(statearr_51998_53545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_51966 === (8))){
var inst_51942 = (state_51965[(7)]);
var state_51965__$1 = state_51965;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_51965__$1,(11),out,inst_51942);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50319__auto__ = null;
var cljs$core$async$state_machine__50319__auto____0 = (function (){
var statearr_52002 = [null,null,null,null,null,null,null,null,null];
(statearr_52002[(0)] = cljs$core$async$state_machine__50319__auto__);

(statearr_52002[(1)] = (1));

return statearr_52002;
});
var cljs$core$async$state_machine__50319__auto____1 = (function (state_51965){
while(true){
var ret_value__50320__auto__ = (function (){try{while(true){
var result__50321__auto__ = switch__50318__auto__(state_51965);
if(cljs.core.keyword_identical_QMARK_(result__50321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50321__auto__;
}
break;
}
}catch (e52003){var ex__50322__auto__ = e52003;
var statearr_52006_53549 = state_51965;
(statearr_52006_53549[(2)] = ex__50322__auto__);


if(cljs.core.seq((state_51965[(4)]))){
var statearr_52007_53550 = state_51965;
(statearr_52007_53550[(1)] = cljs.core.first((state_51965[(4)])));

} else {
throw ex__50322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53552 = state_51965;
state_51965 = G__53552;
continue;
} else {
return ret_value__50320__auto__;
}
break;
}
});
cljs$core$async$state_machine__50319__auto__ = function(state_51965){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50319__auto____1.call(this,state_51965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50319__auto____0;
cljs$core$async$state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50319__auto____1;
return cljs$core$async$state_machine__50319__auto__;
})()
})();
var state__50368__auto__ = (function (){var statearr_52011 = f__50367__auto__();
(statearr_52011[(6)] = c__50366__auto___53523);

return statearr_52011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50368__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__52018 = arguments.length;
switch (G__52018) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__50366__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50367__auto__ = (function (){var switch__50318__auto__ = (function (state_52107){
var state_val_52108 = (state_52107[(1)]);
if((state_val_52108 === (7))){
var inst_52097 = (state_52107[(2)]);
var state_52107__$1 = state_52107;
var statearr_52112_53562 = state_52107__$1;
(statearr_52112_53562[(2)] = inst_52097);

(statearr_52112_53562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52108 === (20))){
var inst_52062 = (state_52107[(7)]);
var inst_52077 = (state_52107[(2)]);
var inst_52078 = cljs.core.next(inst_52062);
var inst_52039 = inst_52078;
var inst_52040 = null;
var inst_52041 = (0);
var inst_52042 = (0);
var state_52107__$1 = (function (){var statearr_52116 = state_52107;
(statearr_52116[(8)] = inst_52077);

(statearr_52116[(9)] = inst_52039);

(statearr_52116[(10)] = inst_52040);

(statearr_52116[(11)] = inst_52041);

(statearr_52116[(12)] = inst_52042);

return statearr_52116;
})();
var statearr_52119_53564 = state_52107__$1;
(statearr_52119_53564[(2)] = null);

(statearr_52119_53564[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52108 === (1))){
var state_52107__$1 = state_52107;
var statearr_52123_53565 = state_52107__$1;
(statearr_52123_53565[(2)] = null);

(statearr_52123_53565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52108 === (4))){
var inst_52027 = (state_52107[(13)]);
var inst_52027__$1 = (state_52107[(2)]);
var inst_52028 = (inst_52027__$1 == null);
var state_52107__$1 = (function (){var statearr_52125 = state_52107;
(statearr_52125[(13)] = inst_52027__$1);

return statearr_52125;
})();
if(cljs.core.truth_(inst_52028)){
var statearr_52126_53567 = state_52107__$1;
(statearr_52126_53567[(1)] = (5));

} else {
var statearr_52128_53569 = state_52107__$1;
(statearr_52128_53569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52108 === (15))){
var state_52107__$1 = state_52107;
var statearr_52138_53570 = state_52107__$1;
(statearr_52138_53570[(2)] = null);

(statearr_52138_53570[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52108 === (21))){
var state_52107__$1 = state_52107;
var statearr_52140_53573 = state_52107__$1;
(statearr_52140_53573[(2)] = null);

(statearr_52140_53573[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52108 === (13))){
var inst_52042 = (state_52107[(12)]);
var inst_52039 = (state_52107[(9)]);
var inst_52040 = (state_52107[(10)]);
var inst_52041 = (state_52107[(11)]);
var inst_52054 = (state_52107[(2)]);
var inst_52056 = (inst_52042 + (1));
var tmp52133 = inst_52040;
var tmp52134 = inst_52041;
var tmp52135 = inst_52039;
var inst_52039__$1 = tmp52135;
var inst_52040__$1 = tmp52133;
var inst_52041__$1 = tmp52134;
var inst_52042__$1 = inst_52056;
var state_52107__$1 = (function (){var statearr_52147 = state_52107;
(statearr_52147[(14)] = inst_52054);

(statearr_52147[(9)] = inst_52039__$1);

(statearr_52147[(10)] = inst_52040__$1);

(statearr_52147[(11)] = inst_52041__$1);

(statearr_52147[(12)] = inst_52042__$1);

return statearr_52147;
})();
var statearr_52148_53576 = state_52107__$1;
(statearr_52148_53576[(2)] = null);

(statearr_52148_53576[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52108 === (22))){
var state_52107__$1 = state_52107;
var statearr_52152_53577 = state_52107__$1;
(statearr_52152_53577[(2)] = null);

(statearr_52152_53577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52108 === (6))){
var inst_52027 = (state_52107[(13)]);
var inst_52037 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52027) : f.call(null,inst_52027));
var inst_52038 = cljs.core.seq(inst_52037);
var inst_52039 = inst_52038;
var inst_52040 = null;
var inst_52041 = (0);
var inst_52042 = (0);
var state_52107__$1 = (function (){var statearr_52157 = state_52107;
(statearr_52157[(9)] = inst_52039);

(statearr_52157[(10)] = inst_52040);

(statearr_52157[(11)] = inst_52041);

(statearr_52157[(12)] = inst_52042);

return statearr_52157;
})();
var statearr_52161_53581 = state_52107__$1;
(statearr_52161_53581[(2)] = null);

(statearr_52161_53581[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52108 === (17))){
var inst_52062 = (state_52107[(7)]);
var inst_52067 = cljs.core.chunk_first(inst_52062);
var inst_52068 = cljs.core.chunk_rest(inst_52062);
var inst_52069 = cljs.core.count(inst_52067);
var inst_52039 = inst_52068;
var inst_52040 = inst_52067;
var inst_52041 = inst_52069;
var inst_52042 = (0);
var state_52107__$1 = (function (){var statearr_52163 = state_52107;
(statearr_52163[(9)] = inst_52039);

(statearr_52163[(10)] = inst_52040);

(statearr_52163[(11)] = inst_52041);

(statearr_52163[(12)] = inst_52042);

return statearr_52163;
})();
var statearr_52168_53583 = state_52107__$1;
(statearr_52168_53583[(2)] = null);

(statearr_52168_53583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52108 === (3))){
var inst_52099 = (state_52107[(2)]);
var state_52107__$1 = state_52107;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52107__$1,inst_52099);
} else {
if((state_val_52108 === (12))){
var inst_52086 = (state_52107[(2)]);
var state_52107__$1 = state_52107;
var statearr_52177_53587 = state_52107__$1;
(statearr_52177_53587[(2)] = inst_52086);

(statearr_52177_53587[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52108 === (2))){
var state_52107__$1 = state_52107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52107__$1,(4),in$);
} else {
if((state_val_52108 === (23))){
var inst_52095 = (state_52107[(2)]);
var state_52107__$1 = state_52107;
var statearr_52185_53588 = state_52107__$1;
(statearr_52185_53588[(2)] = inst_52095);

(statearr_52185_53588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52108 === (19))){
var inst_52081 = (state_52107[(2)]);
var state_52107__$1 = state_52107;
var statearr_52186_53589 = state_52107__$1;
(statearr_52186_53589[(2)] = inst_52081);

(statearr_52186_53589[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52108 === (11))){
var inst_52039 = (state_52107[(9)]);
var inst_52062 = (state_52107[(7)]);
var inst_52062__$1 = cljs.core.seq(inst_52039);
var state_52107__$1 = (function (){var statearr_52187 = state_52107;
(statearr_52187[(7)] = inst_52062__$1);

return statearr_52187;
})();
if(inst_52062__$1){
var statearr_52188_53593 = state_52107__$1;
(statearr_52188_53593[(1)] = (14));

} else {
var statearr_52189_53594 = state_52107__$1;
(statearr_52189_53594[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52108 === (9))){
var inst_52088 = (state_52107[(2)]);
var inst_52089 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_52107__$1 = (function (){var statearr_52191 = state_52107;
(statearr_52191[(15)] = inst_52088);

return statearr_52191;
})();
if(cljs.core.truth_(inst_52089)){
var statearr_52192_53595 = state_52107__$1;
(statearr_52192_53595[(1)] = (21));

} else {
var statearr_52193_53596 = state_52107__$1;
(statearr_52193_53596[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52108 === (5))){
var inst_52030 = cljs.core.async.close_BANG_(out);
var state_52107__$1 = state_52107;
var statearr_52194_53597 = state_52107__$1;
(statearr_52194_53597[(2)] = inst_52030);

(statearr_52194_53597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52108 === (14))){
var inst_52062 = (state_52107[(7)]);
var inst_52064 = cljs.core.chunked_seq_QMARK_(inst_52062);
var state_52107__$1 = state_52107;
if(inst_52064){
var statearr_52199_53600 = state_52107__$1;
(statearr_52199_53600[(1)] = (17));

} else {
var statearr_52201_53601 = state_52107__$1;
(statearr_52201_53601[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52108 === (16))){
var inst_52084 = (state_52107[(2)]);
var state_52107__$1 = state_52107;
var statearr_52203_53602 = state_52107__$1;
(statearr_52203_53602[(2)] = inst_52084);

(statearr_52203_53602[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52108 === (10))){
var inst_52040 = (state_52107[(10)]);
var inst_52042 = (state_52107[(12)]);
var inst_52052 = cljs.core._nth(inst_52040,inst_52042);
var state_52107__$1 = state_52107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52107__$1,(13),out,inst_52052);
} else {
if((state_val_52108 === (18))){
var inst_52062 = (state_52107[(7)]);
var inst_52075 = cljs.core.first(inst_52062);
var state_52107__$1 = state_52107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52107__$1,(20),out,inst_52075);
} else {
if((state_val_52108 === (8))){
var inst_52042 = (state_52107[(12)]);
var inst_52041 = (state_52107[(11)]);
var inst_52045 = (inst_52042 < inst_52041);
var inst_52046 = inst_52045;
var state_52107__$1 = state_52107;
if(cljs.core.truth_(inst_52046)){
var statearr_52208_53609 = state_52107__$1;
(statearr_52208_53609[(1)] = (10));

} else {
var statearr_52209_53610 = state_52107__$1;
(statearr_52209_53610[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__50319__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__50319__auto____0 = (function (){
var statearr_52213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52213[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__50319__auto__);

(statearr_52213[(1)] = (1));

return statearr_52213;
});
var cljs$core$async$mapcat_STAR__$_state_machine__50319__auto____1 = (function (state_52107){
while(true){
var ret_value__50320__auto__ = (function (){try{while(true){
var result__50321__auto__ = switch__50318__auto__(state_52107);
if(cljs.core.keyword_identical_QMARK_(result__50321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50321__auto__;
}
break;
}
}catch (e52218){var ex__50322__auto__ = e52218;
var statearr_52219_53613 = state_52107;
(statearr_52219_53613[(2)] = ex__50322__auto__);


if(cljs.core.seq((state_52107[(4)]))){
var statearr_52221_53614 = state_52107;
(statearr_52221_53614[(1)] = cljs.core.first((state_52107[(4)])));

} else {
throw ex__50322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53616 = state_52107;
state_52107 = G__53616;
continue;
} else {
return ret_value__50320__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__50319__auto__ = function(state_52107){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__50319__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__50319__auto____1.call(this,state_52107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__50319__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__50319__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__50319__auto__;
})()
})();
var state__50368__auto__ = (function (){var statearr_52223 = f__50367__auto__();
(statearr_52223[(6)] = c__50366__auto__);

return statearr_52223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50368__auto__);
}));

return c__50366__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__52232 = arguments.length;
switch (G__52232) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__52240 = arguments.length;
switch (G__52240) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__52259 = arguments.length;
switch (G__52259) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50366__auto___53640 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50367__auto__ = (function (){var switch__50318__auto__ = (function (state_52289){
var state_val_52290 = (state_52289[(1)]);
if((state_val_52290 === (7))){
var inst_52284 = (state_52289[(2)]);
var state_52289__$1 = state_52289;
var statearr_52292_53644 = state_52289__$1;
(statearr_52292_53644[(2)] = inst_52284);

(statearr_52292_53644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52290 === (1))){
var inst_52263 = null;
var state_52289__$1 = (function (){var statearr_52293 = state_52289;
(statearr_52293[(7)] = inst_52263);

return statearr_52293;
})();
var statearr_52294_53645 = state_52289__$1;
(statearr_52294_53645[(2)] = null);

(statearr_52294_53645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52290 === (4))){
var inst_52268 = (state_52289[(8)]);
var inst_52268__$1 = (state_52289[(2)]);
var inst_52270 = (inst_52268__$1 == null);
var inst_52271 = cljs.core.not(inst_52270);
var state_52289__$1 = (function (){var statearr_52298 = state_52289;
(statearr_52298[(8)] = inst_52268__$1);

return statearr_52298;
})();
if(inst_52271){
var statearr_52299_53646 = state_52289__$1;
(statearr_52299_53646[(1)] = (5));

} else {
var statearr_52300_53647 = state_52289__$1;
(statearr_52300_53647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52290 === (6))){
var state_52289__$1 = state_52289;
var statearr_52302_53648 = state_52289__$1;
(statearr_52302_53648[(2)] = null);

(statearr_52302_53648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52290 === (3))){
var inst_52286 = (state_52289[(2)]);
var inst_52287 = cljs.core.async.close_BANG_(out);
var state_52289__$1 = (function (){var statearr_52305 = state_52289;
(statearr_52305[(9)] = inst_52286);

return statearr_52305;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_52289__$1,inst_52287);
} else {
if((state_val_52290 === (2))){
var state_52289__$1 = state_52289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52289__$1,(4),ch);
} else {
if((state_val_52290 === (11))){
var inst_52268 = (state_52289[(8)]);
var inst_52278 = (state_52289[(2)]);
var inst_52263 = inst_52268;
var state_52289__$1 = (function (){var statearr_52311 = state_52289;
(statearr_52311[(10)] = inst_52278);

(statearr_52311[(7)] = inst_52263);

return statearr_52311;
})();
var statearr_52312_53656 = state_52289__$1;
(statearr_52312_53656[(2)] = null);

(statearr_52312_53656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52290 === (9))){
var inst_52268 = (state_52289[(8)]);
var state_52289__$1 = state_52289;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52289__$1,(11),out,inst_52268);
} else {
if((state_val_52290 === (5))){
var inst_52268 = (state_52289[(8)]);
var inst_52263 = (state_52289[(7)]);
var inst_52273 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52268,inst_52263);
var state_52289__$1 = state_52289;
if(inst_52273){
var statearr_52316_53661 = state_52289__$1;
(statearr_52316_53661[(1)] = (8));

} else {
var statearr_52317_53662 = state_52289__$1;
(statearr_52317_53662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52290 === (10))){
var inst_52281 = (state_52289[(2)]);
var state_52289__$1 = state_52289;
var statearr_52318_53663 = state_52289__$1;
(statearr_52318_53663[(2)] = inst_52281);

(statearr_52318_53663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52290 === (8))){
var inst_52263 = (state_52289[(7)]);
var tmp52314 = inst_52263;
var inst_52263__$1 = tmp52314;
var state_52289__$1 = (function (){var statearr_52319 = state_52289;
(statearr_52319[(7)] = inst_52263__$1);

return statearr_52319;
})();
var statearr_52320_53664 = state_52289__$1;
(statearr_52320_53664[(2)] = null);

(statearr_52320_53664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50319__auto__ = null;
var cljs$core$async$state_machine__50319__auto____0 = (function (){
var statearr_52324 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_52324[(0)] = cljs$core$async$state_machine__50319__auto__);

(statearr_52324[(1)] = (1));

return statearr_52324;
});
var cljs$core$async$state_machine__50319__auto____1 = (function (state_52289){
while(true){
var ret_value__50320__auto__ = (function (){try{while(true){
var result__50321__auto__ = switch__50318__auto__(state_52289);
if(cljs.core.keyword_identical_QMARK_(result__50321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50321__auto__;
}
break;
}
}catch (e52326){var ex__50322__auto__ = e52326;
var statearr_52327_53672 = state_52289;
(statearr_52327_53672[(2)] = ex__50322__auto__);


if(cljs.core.seq((state_52289[(4)]))){
var statearr_52328_53674 = state_52289;
(statearr_52328_53674[(1)] = cljs.core.first((state_52289[(4)])));

} else {
throw ex__50322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53675 = state_52289;
state_52289 = G__53675;
continue;
} else {
return ret_value__50320__auto__;
}
break;
}
});
cljs$core$async$state_machine__50319__auto__ = function(state_52289){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50319__auto____1.call(this,state_52289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50319__auto____0;
cljs$core$async$state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50319__auto____1;
return cljs$core$async$state_machine__50319__auto__;
})()
})();
var state__50368__auto__ = (function (){var statearr_52329 = f__50367__auto__();
(statearr_52329[(6)] = c__50366__auto___53640);

return statearr_52329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50368__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__52332 = arguments.length;
switch (G__52332) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50366__auto___53682 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50367__auto__ = (function (){var switch__50318__auto__ = (function (state_52376){
var state_val_52378 = (state_52376[(1)]);
if((state_val_52378 === (7))){
var inst_52372 = (state_52376[(2)]);
var state_52376__$1 = state_52376;
var statearr_52385_53683 = state_52376__$1;
(statearr_52385_53683[(2)] = inst_52372);

(statearr_52385_53683[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52378 === (1))){
var inst_52335 = (new Array(n));
var inst_52336 = inst_52335;
var inst_52337 = (0);
var state_52376__$1 = (function (){var statearr_52387 = state_52376;
(statearr_52387[(7)] = inst_52336);

(statearr_52387[(8)] = inst_52337);

return statearr_52387;
})();
var statearr_52388_53685 = state_52376__$1;
(statearr_52388_53685[(2)] = null);

(statearr_52388_53685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52378 === (4))){
var inst_52340 = (state_52376[(9)]);
var inst_52340__$1 = (state_52376[(2)]);
var inst_52341 = (inst_52340__$1 == null);
var inst_52342 = cljs.core.not(inst_52341);
var state_52376__$1 = (function (){var statearr_52389 = state_52376;
(statearr_52389[(9)] = inst_52340__$1);

return statearr_52389;
})();
if(inst_52342){
var statearr_52390_53690 = state_52376__$1;
(statearr_52390_53690[(1)] = (5));

} else {
var statearr_52391_53692 = state_52376__$1;
(statearr_52391_53692[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52378 === (15))){
var inst_52366 = (state_52376[(2)]);
var state_52376__$1 = state_52376;
var statearr_52393_53693 = state_52376__$1;
(statearr_52393_53693[(2)] = inst_52366);

(statearr_52393_53693[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52378 === (13))){
var state_52376__$1 = state_52376;
var statearr_52398_53694 = state_52376__$1;
(statearr_52398_53694[(2)] = null);

(statearr_52398_53694[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52378 === (6))){
var inst_52337 = (state_52376[(8)]);
var inst_52362 = (inst_52337 > (0));
var state_52376__$1 = state_52376;
if(cljs.core.truth_(inst_52362)){
var statearr_52400_53695 = state_52376__$1;
(statearr_52400_53695[(1)] = (12));

} else {
var statearr_52401_53717 = state_52376__$1;
(statearr_52401_53717[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52378 === (3))){
var inst_52374 = (state_52376[(2)]);
var state_52376__$1 = state_52376;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52376__$1,inst_52374);
} else {
if((state_val_52378 === (12))){
var inst_52336 = (state_52376[(7)]);
var inst_52364 = cljs.core.vec(inst_52336);
var state_52376__$1 = state_52376;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52376__$1,(15),out,inst_52364);
} else {
if((state_val_52378 === (2))){
var state_52376__$1 = state_52376;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52376__$1,(4),ch);
} else {
if((state_val_52378 === (11))){
var inst_52356 = (state_52376[(2)]);
var inst_52357 = (new Array(n));
var inst_52336 = inst_52357;
var inst_52337 = (0);
var state_52376__$1 = (function (){var statearr_52407 = state_52376;
(statearr_52407[(10)] = inst_52356);

(statearr_52407[(7)] = inst_52336);

(statearr_52407[(8)] = inst_52337);

return statearr_52407;
})();
var statearr_52408_53737 = state_52376__$1;
(statearr_52408_53737[(2)] = null);

(statearr_52408_53737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52378 === (9))){
var inst_52336 = (state_52376[(7)]);
var inst_52354 = cljs.core.vec(inst_52336);
var state_52376__$1 = state_52376;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52376__$1,(11),out,inst_52354);
} else {
if((state_val_52378 === (5))){
var inst_52336 = (state_52376[(7)]);
var inst_52337 = (state_52376[(8)]);
var inst_52340 = (state_52376[(9)]);
var inst_52349 = (state_52376[(11)]);
var inst_52344 = (inst_52336[inst_52337] = inst_52340);
var inst_52349__$1 = (inst_52337 + (1));
var inst_52350 = (inst_52349__$1 < n);
var state_52376__$1 = (function (){var statearr_52413 = state_52376;
(statearr_52413[(12)] = inst_52344);

(statearr_52413[(11)] = inst_52349__$1);

return statearr_52413;
})();
if(cljs.core.truth_(inst_52350)){
var statearr_52414_53738 = state_52376__$1;
(statearr_52414_53738[(1)] = (8));

} else {
var statearr_52415_53739 = state_52376__$1;
(statearr_52415_53739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52378 === (14))){
var inst_52369 = (state_52376[(2)]);
var inst_52370 = cljs.core.async.close_BANG_(out);
var state_52376__$1 = (function (){var statearr_52417 = state_52376;
(statearr_52417[(13)] = inst_52369);

return statearr_52417;
})();
var statearr_52419_53740 = state_52376__$1;
(statearr_52419_53740[(2)] = inst_52370);

(statearr_52419_53740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52378 === (10))){
var inst_52360 = (state_52376[(2)]);
var state_52376__$1 = state_52376;
var statearr_52420_53741 = state_52376__$1;
(statearr_52420_53741[(2)] = inst_52360);

(statearr_52420_53741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52378 === (8))){
var inst_52336 = (state_52376[(7)]);
var inst_52349 = (state_52376[(11)]);
var tmp52416 = inst_52336;
var inst_52336__$1 = tmp52416;
var inst_52337 = inst_52349;
var state_52376__$1 = (function (){var statearr_52421 = state_52376;
(statearr_52421[(7)] = inst_52336__$1);

(statearr_52421[(8)] = inst_52337);

return statearr_52421;
})();
var statearr_52423_53743 = state_52376__$1;
(statearr_52423_53743[(2)] = null);

(statearr_52423_53743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50319__auto__ = null;
var cljs$core$async$state_machine__50319__auto____0 = (function (){
var statearr_52426 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52426[(0)] = cljs$core$async$state_machine__50319__auto__);

(statearr_52426[(1)] = (1));

return statearr_52426;
});
var cljs$core$async$state_machine__50319__auto____1 = (function (state_52376){
while(true){
var ret_value__50320__auto__ = (function (){try{while(true){
var result__50321__auto__ = switch__50318__auto__(state_52376);
if(cljs.core.keyword_identical_QMARK_(result__50321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50321__auto__;
}
break;
}
}catch (e52427){var ex__50322__auto__ = e52427;
var statearr_52428_53744 = state_52376;
(statearr_52428_53744[(2)] = ex__50322__auto__);


if(cljs.core.seq((state_52376[(4)]))){
var statearr_52429_53745 = state_52376;
(statearr_52429_53745[(1)] = cljs.core.first((state_52376[(4)])));

} else {
throw ex__50322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53746 = state_52376;
state_52376 = G__53746;
continue;
} else {
return ret_value__50320__auto__;
}
break;
}
});
cljs$core$async$state_machine__50319__auto__ = function(state_52376){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50319__auto____1.call(this,state_52376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50319__auto____0;
cljs$core$async$state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50319__auto____1;
return cljs$core$async$state_machine__50319__auto__;
})()
})();
var state__50368__auto__ = (function (){var statearr_52435 = f__50367__auto__();
(statearr_52435[(6)] = c__50366__auto___53682);

return statearr_52435;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50368__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__52439 = arguments.length;
switch (G__52439) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__50366__auto___53749 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__50367__auto__ = (function (){var switch__50318__auto__ = (function (state_52497){
var state_val_52498 = (state_52497[(1)]);
if((state_val_52498 === (7))){
var inst_52493 = (state_52497[(2)]);
var state_52497__$1 = state_52497;
var statearr_52502_53750 = state_52497__$1;
(statearr_52502_53750[(2)] = inst_52493);

(statearr_52502_53750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52498 === (1))){
var inst_52444 = [];
var inst_52446 = inst_52444;
var inst_52447 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_52497__$1 = (function (){var statearr_52503 = state_52497;
(statearr_52503[(7)] = inst_52446);

(statearr_52503[(8)] = inst_52447);

return statearr_52503;
})();
var statearr_52504_53751 = state_52497__$1;
(statearr_52504_53751[(2)] = null);

(statearr_52504_53751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52498 === (4))){
var inst_52454 = (state_52497[(9)]);
var inst_52454__$1 = (state_52497[(2)]);
var inst_52455 = (inst_52454__$1 == null);
var inst_52456 = cljs.core.not(inst_52455);
var state_52497__$1 = (function (){var statearr_52507 = state_52497;
(statearr_52507[(9)] = inst_52454__$1);

return statearr_52507;
})();
if(inst_52456){
var statearr_52508_53752 = state_52497__$1;
(statearr_52508_53752[(1)] = (5));

} else {
var statearr_52511_53753 = state_52497__$1;
(statearr_52511_53753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52498 === (15))){
var inst_52446 = (state_52497[(7)]);
var inst_52485 = cljs.core.vec(inst_52446);
var state_52497__$1 = state_52497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52497__$1,(18),out,inst_52485);
} else {
if((state_val_52498 === (13))){
var inst_52480 = (state_52497[(2)]);
var state_52497__$1 = state_52497;
var statearr_52515_53754 = state_52497__$1;
(statearr_52515_53754[(2)] = inst_52480);

(statearr_52515_53754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52498 === (6))){
var inst_52446 = (state_52497[(7)]);
var inst_52482 = inst_52446.length;
var inst_52483 = (inst_52482 > (0));
var state_52497__$1 = state_52497;
if(cljs.core.truth_(inst_52483)){
var statearr_52517_53755 = state_52497__$1;
(statearr_52517_53755[(1)] = (15));

} else {
var statearr_52518_53756 = state_52497__$1;
(statearr_52518_53756[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52498 === (17))){
var inst_52490 = (state_52497[(2)]);
var inst_52491 = cljs.core.async.close_BANG_(out);
var state_52497__$1 = (function (){var statearr_52522 = state_52497;
(statearr_52522[(10)] = inst_52490);

return statearr_52522;
})();
var statearr_52523_53757 = state_52497__$1;
(statearr_52523_53757[(2)] = inst_52491);

(statearr_52523_53757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52498 === (3))){
var inst_52495 = (state_52497[(2)]);
var state_52497__$1 = state_52497;
return cljs.core.async.impl.ioc_helpers.return_chan(state_52497__$1,inst_52495);
} else {
if((state_val_52498 === (12))){
var inst_52446 = (state_52497[(7)]);
var inst_52472 = cljs.core.vec(inst_52446);
var state_52497__$1 = state_52497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_52497__$1,(14),out,inst_52472);
} else {
if((state_val_52498 === (2))){
var state_52497__$1 = state_52497;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_52497__$1,(4),ch);
} else {
if((state_val_52498 === (11))){
var inst_52446 = (state_52497[(7)]);
var inst_52454 = (state_52497[(9)]);
var inst_52459 = (state_52497[(11)]);
var inst_52468 = inst_52446.push(inst_52454);
var tmp52527 = inst_52446;
var inst_52446__$1 = tmp52527;
var inst_52447 = inst_52459;
var state_52497__$1 = (function (){var statearr_52529 = state_52497;
(statearr_52529[(12)] = inst_52468);

(statearr_52529[(7)] = inst_52446__$1);

(statearr_52529[(8)] = inst_52447);

return statearr_52529;
})();
var statearr_52530_53758 = state_52497__$1;
(statearr_52530_53758[(2)] = null);

(statearr_52530_53758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52498 === (9))){
var inst_52447 = (state_52497[(8)]);
var inst_52463 = cljs.core.keyword_identical_QMARK_(inst_52447,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_52497__$1 = state_52497;
var statearr_52537_53759 = state_52497__$1;
(statearr_52537_53759[(2)] = inst_52463);

(statearr_52537_53759[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52498 === (5))){
var inst_52454 = (state_52497[(9)]);
var inst_52459 = (state_52497[(11)]);
var inst_52447 = (state_52497[(8)]);
var inst_52460 = (state_52497[(13)]);
var inst_52459__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_52454) : f.call(null,inst_52454));
var inst_52460__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_52459__$1,inst_52447);
var state_52497__$1 = (function (){var statearr_52548 = state_52497;
(statearr_52548[(11)] = inst_52459__$1);

(statearr_52548[(13)] = inst_52460__$1);

return statearr_52548;
})();
if(inst_52460__$1){
var statearr_52550_53760 = state_52497__$1;
(statearr_52550_53760[(1)] = (8));

} else {
var statearr_52551_53761 = state_52497__$1;
(statearr_52551_53761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52498 === (14))){
var inst_52454 = (state_52497[(9)]);
var inst_52459 = (state_52497[(11)]);
var inst_52474 = (state_52497[(2)]);
var inst_52476 = [];
var inst_52477 = inst_52476.push(inst_52454);
var inst_52446 = inst_52476;
var inst_52447 = inst_52459;
var state_52497__$1 = (function (){var statearr_52553 = state_52497;
(statearr_52553[(14)] = inst_52474);

(statearr_52553[(15)] = inst_52477);

(statearr_52553[(7)] = inst_52446);

(statearr_52553[(8)] = inst_52447);

return statearr_52553;
})();
var statearr_52560_53763 = state_52497__$1;
(statearr_52560_53763[(2)] = null);

(statearr_52560_53763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52498 === (16))){
var state_52497__$1 = state_52497;
var statearr_52565_53764 = state_52497__$1;
(statearr_52565_53764[(2)] = null);

(statearr_52565_53764[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52498 === (10))){
var inst_52465 = (state_52497[(2)]);
var state_52497__$1 = state_52497;
if(cljs.core.truth_(inst_52465)){
var statearr_52566_53765 = state_52497__$1;
(statearr_52566_53765[(1)] = (11));

} else {
var statearr_52567_53766 = state_52497__$1;
(statearr_52567_53766[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52498 === (18))){
var inst_52487 = (state_52497[(2)]);
var state_52497__$1 = state_52497;
var statearr_52569_53767 = state_52497__$1;
(statearr_52569_53767[(2)] = inst_52487);

(statearr_52569_53767[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_52498 === (8))){
var inst_52460 = (state_52497[(13)]);
var state_52497__$1 = state_52497;
var statearr_52574_53768 = state_52497__$1;
(statearr_52574_53768[(2)] = inst_52460);

(statearr_52574_53768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__50319__auto__ = null;
var cljs$core$async$state_machine__50319__auto____0 = (function (){
var statearr_52588 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_52588[(0)] = cljs$core$async$state_machine__50319__auto__);

(statearr_52588[(1)] = (1));

return statearr_52588;
});
var cljs$core$async$state_machine__50319__auto____1 = (function (state_52497){
while(true){
var ret_value__50320__auto__ = (function (){try{while(true){
var result__50321__auto__ = switch__50318__auto__(state_52497);
if(cljs.core.keyword_identical_QMARK_(result__50321__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50321__auto__;
}
break;
}
}catch (e52590){var ex__50322__auto__ = e52590;
var statearr_52592_53769 = state_52497;
(statearr_52592_53769[(2)] = ex__50322__auto__);


if(cljs.core.seq((state_52497[(4)]))){
var statearr_52593_53770 = state_52497;
(statearr_52593_53770[(1)] = cljs.core.first((state_52497[(4)])));

} else {
throw ex__50322__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__50320__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53771 = state_52497;
state_52497 = G__53771;
continue;
} else {
return ret_value__50320__auto__;
}
break;
}
});
cljs$core$async$state_machine__50319__auto__ = function(state_52497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__50319__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__50319__auto____1.call(this,state_52497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__50319__auto____0;
cljs$core$async$state_machine__50319__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__50319__auto____1;
return cljs$core$async$state_machine__50319__auto__;
})()
})();
var state__50368__auto__ = (function (){var statearr_52600 = f__50367__auto__();
(statearr_52600[(6)] = c__50366__auto___53749);

return statearr_52600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__50368__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
