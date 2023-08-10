goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__46858 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__46859 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__46859);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___47090 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___47090)){
var new_db_47091 = temp__5804__auto___47090;
var fexpr__46877_47092 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__46877_47092.cljs$core$IFn$_invoke$arity$1 ? fexpr__46877_47092.cljs$core$IFn$_invoke$arity$1(new_db_47091) : fexpr__46877_47092.call(null,new_db_47091));
} else {
}

var seq__46878 = cljs.core.seq(effects_without_db);
var chunk__46879 = null;
var count__46880 = (0);
var i__46881 = (0);
while(true){
if((i__46881 < count__46880)){
var vec__46892 = chunk__46879.cljs$core$IIndexed$_nth$arity$2(null,i__46881);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46892,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46892,(1),null);
var temp__5802__auto___47093 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___47093)){
var effect_fn_47094 = temp__5802__auto___47093;
(effect_fn_47094.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47094.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47094.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47095 = seq__46878;
var G__47096 = chunk__46879;
var G__47097 = count__46880;
var G__47098 = (i__46881 + (1));
seq__46878 = G__47095;
chunk__46879 = G__47096;
count__46880 = G__47097;
i__46881 = G__47098;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46878);
if(temp__5804__auto__){
var seq__46878__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46878__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46878__$1);
var G__47099 = cljs.core.chunk_rest(seq__46878__$1);
var G__47100 = c__5568__auto__;
var G__47101 = cljs.core.count(c__5568__auto__);
var G__47102 = (0);
seq__46878 = G__47099;
chunk__46879 = G__47100;
count__46880 = G__47101;
i__46881 = G__47102;
continue;
} else {
var vec__46898 = cljs.core.first(seq__46878__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46898,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46898,(1),null);
var temp__5802__auto___47103 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___47103)){
var effect_fn_47104 = temp__5802__auto___47103;
(effect_fn_47104.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47104.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47104.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47105 = cljs.core.next(seq__46878__$1);
var G__47106 = null;
var G__47107 = (0);
var G__47108 = (0);
seq__46878 = G__47105;
chunk__46879 = G__47106;
count__46880 = G__47107;
i__46881 = G__47108;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__46255__auto___47109 = re_frame.interop.now();
var duration__46256__auto___47110 = (end__46255__auto___47109 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__46256__auto___47110,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__46255__auto___47109);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__46858);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___47111 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___47111)){
var new_db_47112 = temp__5804__auto___47111;
var fexpr__46905_47113 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__46905_47113.cljs$core$IFn$_invoke$arity$1 ? fexpr__46905_47113.cljs$core$IFn$_invoke$arity$1(new_db_47112) : fexpr__46905_47113.call(null,new_db_47112));
} else {
}

var seq__46907 = cljs.core.seq(effects_without_db);
var chunk__46908 = null;
var count__46909 = (0);
var i__46910 = (0);
while(true){
if((i__46910 < count__46909)){
var vec__46930 = chunk__46908.cljs$core$IIndexed$_nth$arity$2(null,i__46910);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46930,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46930,(1),null);
var temp__5802__auto___47114 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___47114)){
var effect_fn_47115 = temp__5802__auto___47114;
(effect_fn_47115.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47115.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47115.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47117 = seq__46907;
var G__47118 = chunk__46908;
var G__47119 = count__46909;
var G__47120 = (i__46910 + (1));
seq__46907 = G__47117;
chunk__46908 = G__47118;
count__46909 = G__47119;
i__46910 = G__47120;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46907);
if(temp__5804__auto__){
var seq__46907__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46907__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46907__$1);
var G__47121 = cljs.core.chunk_rest(seq__46907__$1);
var G__47122 = c__5568__auto__;
var G__47123 = cljs.core.count(c__5568__auto__);
var G__47124 = (0);
seq__46907 = G__47121;
chunk__46908 = G__47122;
count__46909 = G__47123;
i__46910 = G__47124;
continue;
} else {
var vec__46936 = cljs.core.first(seq__46907__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46936,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46936,(1),null);
var temp__5802__auto___47125 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___47125)){
var effect_fn_47127 = temp__5802__auto___47125;
(effect_fn_47127.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47127.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47127.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__47128 = cljs.core.next(seq__46907__$1);
var G__47129 = null;
var G__47130 = (0);
var G__47131 = (0);
seq__46907 = G__47128;
chunk__46908 = G__47129;
count__46909 = G__47130;
i__46910 = G__47131;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__46943){
var map__46944 = p__46943;
var map__46944__$1 = cljs.core.__destructure_map(map__46944);
var effect = map__46944__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46944__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46944__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__46951 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__46952 = null;
var count__46953 = (0);
var i__46954 = (0);
while(true){
if((i__46954 < count__46953)){
var effect = chunk__46952.cljs$core$IIndexed$_nth$arity$2(null,i__46954);
re_frame.fx.dispatch_later(effect);


var G__47136 = seq__46951;
var G__47137 = chunk__46952;
var G__47138 = count__46953;
var G__47139 = (i__46954 + (1));
seq__46951 = G__47136;
chunk__46952 = G__47137;
count__46953 = G__47138;
i__46954 = G__47139;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46951);
if(temp__5804__auto__){
var seq__46951__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46951__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46951__$1);
var G__47141 = cljs.core.chunk_rest(seq__46951__$1);
var G__47142 = c__5568__auto__;
var G__47143 = cljs.core.count(c__5568__auto__);
var G__47144 = (0);
seq__46951 = G__47141;
chunk__46952 = G__47142;
count__46953 = G__47143;
i__46954 = G__47144;
continue;
} else {
var effect = cljs.core.first(seq__46951__$1);
re_frame.fx.dispatch_later(effect);


var G__47145 = cljs.core.next(seq__46951__$1);
var G__47146 = null;
var G__47147 = (0);
var G__47148 = (0);
seq__46951 = G__47145;
chunk__46952 = G__47146;
count__46953 = G__47147;
i__46954 = G__47148;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__46983 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__46984 = null;
var count__46985 = (0);
var i__46986 = (0);
while(true){
if((i__46986 < count__46985)){
var vec__47020 = chunk__46984.cljs$core$IIndexed$_nth$arity$2(null,i__46986);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47020,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47020,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___47149 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___47149)){
var effect_fn_47153 = temp__5802__auto___47149;
(effect_fn_47153.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47153.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47153.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__47154 = seq__46983;
var G__47155 = chunk__46984;
var G__47156 = count__46985;
var G__47157 = (i__46986 + (1));
seq__46983 = G__47154;
chunk__46984 = G__47155;
count__46985 = G__47156;
i__46986 = G__47157;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46983);
if(temp__5804__auto__){
var seq__46983__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46983__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46983__$1);
var G__47159 = cljs.core.chunk_rest(seq__46983__$1);
var G__47160 = c__5568__auto__;
var G__47161 = cljs.core.count(c__5568__auto__);
var G__47162 = (0);
seq__46983 = G__47159;
chunk__46984 = G__47160;
count__46985 = G__47161;
i__46986 = G__47162;
continue;
} else {
var vec__47031 = cljs.core.first(seq__46983__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47031,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47031,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___47164 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___47164)){
var effect_fn_47165 = temp__5802__auto___47164;
(effect_fn_47165.cljs$core$IFn$_invoke$arity$1 ? effect_fn_47165.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_47165.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__47166 = cljs.core.next(seq__46983__$1);
var G__47167 = null;
var G__47168 = (0);
var G__47169 = (0);
seq__46983 = G__47166;
chunk__46984 = G__47167;
count__46985 = G__47168;
i__46986 = G__47169;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__47053 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__47054 = null;
var count__47055 = (0);
var i__47056 = (0);
while(true){
if((i__47056 < count__47055)){
var event = chunk__47054.cljs$core$IIndexed$_nth$arity$2(null,i__47056);
re_frame.router.dispatch(event);


var G__47170 = seq__47053;
var G__47171 = chunk__47054;
var G__47172 = count__47055;
var G__47173 = (i__47056 + (1));
seq__47053 = G__47170;
chunk__47054 = G__47171;
count__47055 = G__47172;
i__47056 = G__47173;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47053);
if(temp__5804__auto__){
var seq__47053__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47053__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47053__$1);
var G__47180 = cljs.core.chunk_rest(seq__47053__$1);
var G__47181 = c__5568__auto__;
var G__47182 = cljs.core.count(c__5568__auto__);
var G__47183 = (0);
seq__47053 = G__47180;
chunk__47054 = G__47181;
count__47055 = G__47182;
i__47056 = G__47183;
continue;
} else {
var event = cljs.core.first(seq__47053__$1);
re_frame.router.dispatch(event);


var G__47190 = cljs.core.next(seq__47053__$1);
var G__47191 = null;
var G__47192 = (0);
var G__47193 = (0);
seq__47053 = G__47190;
chunk__47054 = G__47191;
count__47055 = G__47192;
i__47056 = G__47193;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__47077 = cljs.core.seq(value);
var chunk__47078 = null;
var count__47079 = (0);
var i__47080 = (0);
while(true){
if((i__47080 < count__47079)){
var event = chunk__47078.cljs$core$IIndexed$_nth$arity$2(null,i__47080);
clear_event(event);


var G__47205 = seq__47077;
var G__47206 = chunk__47078;
var G__47207 = count__47079;
var G__47208 = (i__47080 + (1));
seq__47077 = G__47205;
chunk__47078 = G__47206;
count__47079 = G__47207;
i__47080 = G__47208;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47077);
if(temp__5804__auto__){
var seq__47077__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47077__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47077__$1);
var G__47209 = cljs.core.chunk_rest(seq__47077__$1);
var G__47210 = c__5568__auto__;
var G__47211 = cljs.core.count(c__5568__auto__);
var G__47212 = (0);
seq__47077 = G__47209;
chunk__47078 = G__47210;
count__47079 = G__47211;
i__47080 = G__47212;
continue;
} else {
var event = cljs.core.first(seq__47077__$1);
clear_event(event);


var G__47214 = cljs.core.next(seq__47077__$1);
var G__47215 = null;
var G__47216 = (0);
var G__47217 = (0);
seq__47077 = G__47214;
chunk__47078 = G__47215;
count__47079 = G__47216;
i__47080 = G__47217;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
