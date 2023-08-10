goog.provide('sci.configs.funcool.promesa');
sci.configs.funcool.promesa.pns = sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),null);
sci.configs.funcool.promesa.ptns = sci.core.create_ns.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"promesa.protocols","promesa.protocols",-132625180,null),null);
/**
 * Execute potentially side effectful code and return a promise resolved
 *   to the last expression. Always awaiting the result of each
 *   expression.
 */
sci.configs.funcool.promesa.do_BANG_ = (function sci$configs$funcool$promesa$do_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54782 = arguments.length;
var i__5770__auto___54783 = (0);
while(true){
if((i__5770__auto___54783 < len__5769__auto___54782)){
args__5775__auto__.push((arguments[i__5770__auto___54783]));

var G__54784 = (i__5770__auto___54783 + (1));
i__5770__auto___54783 = G__54784;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.configs.funcool.promesa.do_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.configs.funcool.promesa.do_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,exprs){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-bind","promesa.protocols/-bind",1690962013,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"___54601__auto__","___54601__auto__",250237397,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,(function (){var pred__54605 = cljs.core._EQ_;
var expr__54606 = cljs.core.count(exprs);
if(cljs.core.truth_((pred__54605.cljs$core$IFn$_invoke$arity$2 ? pred__54605.cljs$core$IFn$_invoke$arity$2((0),expr__54606) : pred__54605.call(null,(0),expr__54606)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null)))));
} else {
if(cljs.core.truth_((pred__54605.cljs$core$IFn$_invoke$arity$2 ? pred__54605.cljs$core$IFn$_invoke$arity$2((1),expr__54606) : pred__54605.call(null,(1),expr__54606)))){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(exprs),null,(1),null)))));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,e){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-bind","promesa.protocols/-bind",1690962013,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,e,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"___54600__auto__","___54600__auto__",-322590141,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,acc,null,(1),null))], 0)))),null,(1),null))], 0))));
}),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,cljs.core.last(exprs),null,(1),null))))),cljs.core.reverse(cljs.core.butlast(exprs)));
}
}
})(),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.configs.funcool.promesa.do_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.configs.funcool.promesa.do_BANG_.cljs$lang$applyTo = (function (seq54602){
var G__54603 = cljs.core.first(seq54602);
var seq54602__$1 = cljs.core.next(seq54602);
var G__54604 = cljs.core.first(seq54602__$1);
var seq54602__$2 = cljs.core.next(seq54602__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54603,G__54604,seq54602__$2);
}));

/**
 * A `let` alternative that always returns promise and waits for all the
 *   promises on the bindings.
 */
sci.configs.funcool.promesa.let$ = (function sci$configs$funcool$promesa$let(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54785 = arguments.length;
var i__5770__auto___54786 = (0);
while(true){
if((i__5770__auto___54786 < len__5769__auto___54785)){
args__5775__auto__.push((arguments[i__5770__auto___54786]));

var G__54787 = (i__5770__auto___54786 + (1));
i__5770__auto___54786 = G__54787;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.configs.funcool.promesa.let$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.configs.funcool.promesa.let$.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,bindings,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-bind","promesa.protocols/-bind",1690962013,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,null,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"___54612__auto__","___54612__auto__",-1107251950,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__54618){
var vec__54619 = p__54618;
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54619,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54619,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-bind","promesa.protocols/-bind",1690962013,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),null,(1),null)),(new cljs.core.List(null,r,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,l,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,acc,null,(1),null))], 0)))),null,(1),null))], 0))));
}),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do!","promesa.core/do!",12645930,null),null,(1),null)),body))),cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),bindings))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.configs.funcool.promesa.let$.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.configs.funcool.promesa.let$.cljs$lang$applyTo = (function (seq54614){
var G__54615 = cljs.core.first(seq54614);
var seq54614__$1 = cljs.core.next(seq54614);
var G__54616 = cljs.core.first(seq54614__$1);
var seq54614__$2 = cljs.core.next(seq54614__$1);
var G__54617 = cljs.core.first(seq54614__$2);
var seq54614__$3 = cljs.core.next(seq54614__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54615,G__54616,G__54617,seq54614__$3);
}));

/**
 * Like the clojure.core/->, but it will handle promises in values
 *   and make sure the next form gets the value realized instead of
 *   the promise. Example using to fetch data in the browser with CLJS:
 *   Example:
 *   (p/-> (js/fetch #js {...}) ; returns a promise
 *      .-body)
 *   The result of a thread is a promise that will resolve to the
 *   end of the thread chain.
 */
sci.configs.funcool.promesa.__GT_ = (function sci$configs$funcool$promesa$__GT_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54788 = arguments.length;
var i__5770__auto___54789 = (0);
while(true){
if((i__5770__auto___54789 < len__5769__auto___54788)){
args__5775__auto__.push((arguments[i__5770__auto___54789]));

var G__54790 = (i__5770__auto___54789 + (1));
i__5770__auto___54789 = G__54790;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.configs.funcool.promesa.__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.configs.funcool.promesa.__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,x,forms){
var fns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (arg){
var vec__54632 = ((cljs.core.sequential_QMARK_(arg))?arg:(new cljs.core.List(null,arg,null,(1),null)));
var seq__54633 = cljs.core.seq(vec__54632);
var first__54634 = cljs.core.first(seq__54633);
var seq__54633__$1 = cljs.core.next(seq__54633);
var f = first__54634;
var args = seq__54633__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"p__54626__auto__","p__54626__auto__",1540515631,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,f,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"p__54626__auto__","p__54626__auto__",1540515631,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0)))),null,(1),null))], 0))));
}),forms);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","chain","promesa.core/chain",-2105367206,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","promise","promesa.core/promise",-1423944288,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fns], 0))));
}));

(sci.configs.funcool.promesa.__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.configs.funcool.promesa.__GT_.cljs$lang$applyTo = (function (seq54627){
var G__54628 = cljs.core.first(seq54627);
var seq54627__$1 = cljs.core.next(seq54627);
var G__54629 = cljs.core.first(seq54627__$1);
var seq54627__$2 = cljs.core.next(seq54627__$1);
var G__54630 = cljs.core.first(seq54627__$2);
var seq54627__$3 = cljs.core.next(seq54627__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54628,G__54629,G__54630,seq54627__$3);
}));

/**
 * Like the clojure.core/->>, but it will handle promises in values
 *   and make sure the next form gets the value realized instead of
 *   the promise. Example using to fetch data in the browser with CLJS:
 *   Example:
 *   (p/->> (js/fetch #js {...}) ; returns a promise
 *       .-body
 *       read-string
 *       (mapv inc)
 *   The result of a thread is a promise that will resolve to the
 *   end of the thread chain.
 */
sci.configs.funcool.promesa.__GT__GT_ = (function sci$configs$funcool$promesa$__GT__GT_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54791 = arguments.length;
var i__5770__auto___54792 = (0);
while(true){
if((i__5770__auto___54792 < len__5769__auto___54791)){
args__5775__auto__.push((arguments[i__5770__auto___54792]));

var G__54793 = (i__5770__auto___54792 + (1));
i__5770__auto___54792 = G__54793;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.configs.funcool.promesa.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.configs.funcool.promesa.__GT__GT_.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,x,forms){
var fns = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (arg){
var vec__54650 = ((cljs.core.sequential_QMARK_(arg))?arg:(new cljs.core.List(null,arg,null,(1),null)));
var seq__54651 = cljs.core.seq(vec__54650);
var first__54652 = cljs.core.first(seq__54651);
var seq__54651__$1 = cljs.core.next(seq__54651);
var f = first__54652;
var args = seq__54651__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"p__54639__auto__","p__54639__auto__",-273886334,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,f,null,(1),null)),args,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"p__54639__auto__","p__54639__auto__",-273886334,null),null,(1),null))], 0)))),null,(1),null))], 0))));
}),forms);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","chain","promesa.core/chain",-2105367206,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","promise","promesa.core/promise",-1423944288,null),null,(1),null)),(new cljs.core.List(null,x,null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fns], 0))));
}));

(sci.configs.funcool.promesa.__GT__GT_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.configs.funcool.promesa.__GT__GT_.cljs$lang$applyTo = (function (seq54640){
var G__54641 = cljs.core.first(seq54640);
var seq54640__$1 = cljs.core.next(seq54640);
var G__54642 = cljs.core.first(seq54640__$1);
var seq54640__$2 = cljs.core.next(seq54640__$1);
var G__54643 = cljs.core.first(seq54640__$2);
var seq54640__$3 = cljs.core.next(seq54640__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54641,G__54642,G__54643,seq54640__$3);
}));

/**
 * Like clojure.core/with-redefs, but it will handle promises in
 *   body and wait until they resolve or reject before restoring the
 *   bindings. Useful for mocking async APIs.
 *   Example:
 *   (defn async-func [] (p/delay 1000 :slow-original))
 *   (p/with-redefs [async-func (fn [] (p/resolved :fast-mock))]
 *  (async-func))
 *   The result is a promise that will resolve to the last body form and
 *   upon resolving restores the bindings to their original values.
 */
sci.configs.funcool.promesa.with_redefs = (function sci$configs$funcool$promesa$with_redefs(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54794 = arguments.length;
var i__5770__auto___54795 = (0);
while(true){
if((i__5770__auto___54795 < len__5769__auto___54794)){
args__5775__auto__.push((arguments[i__5770__auto___54795]));

var G__54796 = (i__5770__auto___54795 + (1));
i__5770__auto___54795 = G__54796;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.configs.funcool.promesa.with_redefs.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.configs.funcool.promesa.with_redefs.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,bindings,body){
var names = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),bindings);
var vals = cljs.core.take_nth.cljs$core$IFn$_invoke$arity$2((2),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((1),bindings));
var orig_val_syms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.gensym,(function (p1__54654_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54654_SHARP_),"-orig-val__"].join('');
}),cljs.core.name),names);
var temp_val_syms = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.gensym,(function (p1__54655_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__54655_SHARP_),"-temp-val__"].join('');
}),cljs.core.name),names);
var binds = cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,temp_val_syms);
var resets = cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,names,orig_val_syms));
var bind_value = (function (p__54665){
var vec__54666 = p__54665;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54666,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54666,(1),null);
return (new cljs.core.List(null,new cljs.core.Symbol("clojure.core","alter-var-root","clojure.core/alter-var-root",-1449491008,null),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),(new cljs.core.List(null,k,null,(1),null)),(2),null)),(new cljs.core.List(null,(new cljs.core.List(null,new cljs.core.Symbol("clojure.core","constantly","clojure.core/constantly",1026935908,null),(new cljs.core.List(null,v,null,(1),null)),(2),null)),null,(1),null)),(2),null)),(3),null));
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(orig_val_syms,names),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(temp_val_syms,vals))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,binds),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","->","promesa.core/->",-530209568,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do!","promesa.core/do!",12645930,null),null,(1),null)),body))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","finally","promesa.core/finally",-527135850,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(bind_value,resets)], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.configs.funcool.promesa.with_redefs.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.configs.funcool.promesa.with_redefs.cljs$lang$applyTo = (function (seq54656){
var G__54657 = cljs.core.first(seq54656);
var seq54656__$1 = cljs.core.next(seq54656);
var G__54658 = cljs.core.first(seq54656__$1);
var seq54656__$2 = cljs.core.next(seq54656__$1);
var G__54659 = cljs.core.first(seq54656__$2);
var seq54656__$3 = cljs.core.next(seq54656__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54657,G__54658,G__54659,seq54656__$3);
}));

sci.configs.funcool.promesa.loop_run_fn = sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(new cljs.core.Symbol(null,"*loop-run-fn*","*loop-run-fn*",-90130279,null),promesa.exec.run_BANG_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ns","ns",441598760),sci.configs.funcool.promesa.pns], null));
sci.configs.funcool.promesa.loop = (function sci$configs$funcool$promesa$loop(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54797 = arguments.length;
var i__5770__auto___54798 = (0);
while(true){
if((i__5770__auto___54798 < len__5769__auto___54797)){
args__5775__auto__.push((arguments[i__5770__auto___54798]));

var G__54799 = (i__5770__auto___54798 + (1));
i__5770__auto___54798 = G__54799;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.configs.funcool.promesa.loop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.configs.funcool.promesa.loop.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,bindings,body){
var bindings__$1 = cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(2),bindings);
var names = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,bindings__$1);
var fvals = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,bindings__$1);
var tsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("loop");
var dsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("deferred");
var rsym = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("run");
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,rsym,null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("promesa.core","*loop-run-fn*","promesa.core/*loop-run-fn*",448089407,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,dsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","deferred","promesa.core/deferred",-880308979,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,tsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,tsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,new cljs.core.Symbol(null,"params__54684__auto__","params__54684__auto__",302154388,null),null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","all","promesa.core/all",-152914545,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"params__54684__auto__","params__54684__auto__",302154388,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","then","promesa.core/then",487138967,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(names)))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do!","promesa.core/do!",12645930,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","handle","promesa.core/handle",-1644778541,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"res__54685__auto__","res__54685__auto__",-546508231,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__54686__auto__","err__54686__auto__",-398616406,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","cond","cljs.core/cond",2005388338,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"err__54686__auto__","err__54686__auto__",-398616406,null),null,(1),null))))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","reject!","promesa.core/reject!",-314773537,null),null,(1),null)),(new cljs.core.List(null,dsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"err__54686__auto__","err__54686__auto__",-398616406,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","and","cljs.core/and",-6692549,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__54685__auto__","res__54685__auto__",-546508231,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__54685__auto__","res__54685__auto__",-546508231,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("promesa.core","recur","promesa.core/recur",100580374),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,rsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,tsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Keyword(null,"args","args",1315556576),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"res__54685__auto__","res__54685__auto__",-546508231,null),null,(1),null))))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,null,null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"else","else",-1508377146),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","resolve!","promesa.core/resolve!",1603668640,null),null,(1),null)),(new cljs.core.List(null,dsym,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"res__54685__auto__","res__54685__auto__",-546508231,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,rsym,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,tsym,null,(1),null)),(new cljs.core.List(null,fvals,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,dsym,null,(1),null))], 0))));
}));

(sci.configs.funcool.promesa.loop.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.configs.funcool.promesa.loop.cljs$lang$applyTo = (function (seq54691){
var G__54692 = cljs.core.first(seq54691);
var seq54691__$1 = cljs.core.next(seq54691);
var G__54693 = cljs.core.first(seq54691__$1);
var seq54691__$2 = cljs.core.next(seq54691__$1);
var G__54694 = cljs.core.first(seq54691__$2);
var seq54691__$3 = cljs.core.next(seq54691__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54692,G__54693,G__54694,seq54691__$3);
}));

sci.configs.funcool.promesa.recur = (function sci$configs$funcool$promesa$recur(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54800 = arguments.length;
var i__5770__auto___54801 = (0);
while(true){
if((i__5770__auto___54801 < len__5769__auto___54800)){
args__5775__auto__.push((arguments[i__5770__auto___54801]));

var G__54802 = (i__5770__auto___54801 + (1));
i__5770__auto___54801 = G__54802;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.configs.funcool.promesa.recur.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.configs.funcool.promesa.recur.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","array-map","cljs.core/array-map",-1519210683,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"type","type",1174270348),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("promesa.core","recur","promesa.core/recur",100580374),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"args","args",1315556576),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(args)))),null,(1),null))], 0))));
}));

(sci.configs.funcool.promesa.recur.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.configs.funcool.promesa.recur.cljs$lang$applyTo = (function (seq54705){
var G__54706 = cljs.core.first(seq54705);
var seq54705__$1 = cljs.core.next(seq54705);
var G__54707 = cljs.core.first(seq54705__$1);
var seq54705__$2 = cljs.core.next(seq54705__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54706,G__54707,seq54705__$2);
}));

/**
 * Simplified version of `doseq` which takes one binding and a seq, and
 *   runs over it using `promesa.core/run!`
 */
sci.configs.funcool.promesa.doseq = (function sci$configs$funcool$promesa$doseq(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54803 = arguments.length;
var i__5770__auto___54804 = (0);
while(true){
if((i__5770__auto___54804 < len__5769__auto___54803)){
args__5775__auto__.push((arguments[i__5770__auto___54804]));

var G__54805 = (i__5770__auto___54804 + (1));
i__5770__auto___54804 = G__54805;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return sci.configs.funcool.promesa.doseq.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(sci.configs.funcool.promesa.doseq.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,p__54715,body){
var vec__54716 = p__54715;
var binding = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54716,(0),null);
var xs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54716,(1),null);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","run!","promesa.core/run!",-1526702839,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$1((new cljs.core.List(null,binding,null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","do","promesa.core/do",79683106,null),null,(1),null)),body))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,xs,null,(1),null))], 0))));
}));

(sci.configs.funcool.promesa.doseq.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(sci.configs.funcool.promesa.doseq.cljs$lang$applyTo = (function (seq54710){
var G__54711 = cljs.core.first(seq54710);
var seq54710__$1 = cljs.core.next(seq54710);
var G__54712 = cljs.core.first(seq54710__$1);
var seq54710__$2 = cljs.core.next(seq54710__$1);
var G__54713 = cljs.core.first(seq54710__$2);
var seq54710__$3 = cljs.core.next(seq54710__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54711,G__54712,G__54713,seq54710__$3);
}));

/**
 * Analogous macro to `clojure.core/future` that returns promise
 *   instance instead of the `Future`. Exposed just for convenience and
 *   works as an alias to `thread`.
 */
sci.configs.funcool.promesa.future = (function sci$configs$funcool$promesa$future(var_args){
var args__5775__auto__ = [];
var len__5769__auto___54806 = arguments.length;
var i__5770__auto___54807 = (0);
while(true){
if((i__5770__auto___54807 < len__5769__auto___54806)){
args__5775__auto__.push((arguments[i__5770__auto___54807]));

var G__54808 = (i__5770__auto___54807 + (1));
i__5770__auto___54807 = G__54808;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return sci.configs.funcool.promesa.future.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(sci.configs.funcool.promesa.future.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("promesa.core","thread-call","promesa.core/thread-call",472685991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,cljs.core.with_meta(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"file","file",-1269645878),null,(1),null)),(new cljs.core.List(null,"sci/configs/funcool/promesa.cljs",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"line","line",212345235),null,(1),null)),(new cljs.core.List(null,160,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"column","column",2078222095),null,(1),null)),(new cljs.core.List(null,36,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-line","end-line",1837326455),null,(1),null)),(new cljs.core.List(null,160,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"end-column","end-column",1425389514),null,(1),null)),(new cljs.core.List(null,38,null,(1),null)),(new cljs.core.List(null,new cljs.core.Keyword(null,"once","once",-262568523),null,(1),null)),(new cljs.core.List(null,true,null,(1),null))], 0)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body], 0)))),null,(1),null))], 0))));
}));

(sci.configs.funcool.promesa.future.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.configs.funcool.promesa.future.cljs$lang$applyTo = (function (seq54720){
var G__54721 = cljs.core.first(seq54720);
var seq54720__$1 = cljs.core.next(seq54720);
var G__54722 = cljs.core.first(seq54720__$1);
var seq54720__$2 = cljs.core.next(seq54720__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54721,G__54722,seq54720__$2);
}));

sci.configs.funcool.promesa.promesa_namespace = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"deferred","deferred",-336429161,null),new cljs.core.Symbol(null,"all","all",-1762306027,null),new cljs.core.Symbol(null,"rejected","rejected",1871584526,null),new cljs.core.Symbol(null,"promise","promise",-887306482,null),new cljs.core.Symbol(null,"reject!","reject!",-854885003,null),new cljs.core.Symbol(null,"with-redefs","with-redefs",-1143728263,null),new cljs.core.Symbol(null,"do","do",1686842252,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"->>","->>",-1874332161,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"then","then",2101129597,null),new cljs.core.Symbol(null,"finally","finally",-1065347064,null),new cljs.core.Symbol(null,"future","future",-776593045,null),new cljs.core.Symbol(null,"handle","handle",-1115486915,null),new cljs.core.Symbol(null,"create","create",339032271,null),new cljs.core.Symbol(null,"error","error",661562495,null),new cljs.core.Symbol(null,"run!","run!",-2055483725,null),new cljs.core.Symbol(null,"race","race",-1960778897,null),new cljs.core.Symbol(null,"thread-call","thread-call",1007693373,null),new cljs.core.Symbol(null,"promise?","promise?",-283815882,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"resolve!","resolve!",2140913414,null),new cljs.core.Symbol(null,"thenable?","thenable?",-1206584560,null),new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Symbol(null,"any","any",-948528346,null),new cljs.core.Symbol(null,"catch","catch",-1616370245,null),new cljs.core.Symbol(null,"recur","recur",1202958259,null),new cljs.core.Symbol(null,"do!","do!",-522949760,null),new cljs.core.Symbol(null,"wrap","wrap",-1802765782,null),new cljs.core.Symbol(null,"mapcat","mapcat",-601348859,null),new cljs.core.Symbol(null,"*loop-run-fn*","*loop-run-fn*",-90130279,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"chain","chain",1656162556,null),new cljs.core.Symbol(null,"resolved","resolved",-1685672202,null)],[(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.core.deferred;},new cljs.core.Symbol("promesa.core","deferred","promesa.core/deferred",-880308979,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"deferred","deferred",-336429161,null),"promesa/core.cljc",(15),(1),(37),(37),cljs.core.list(cljs.core.PersistentVector.EMPTY),"Creates an empty promise instance.",(cljs.core.truth_(promesa.core.deferred)?promesa.core.deferred.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.core.all;},new cljs.core.Symbol("promesa.core","all","promesa.core/all",-152914545,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"all","all",-1762306027,null),"promesa/core.cljc",(10),(1),(267),(267),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promises","promises",988201016,null)], null)),"Given an array of promises, return a promise\n  that is fulfilled  when all the items in the\n  array are fulfilled.\n\n  Example:\n\n  (-> (all [(promise :first-promise)\n            (promise :second-promise)]\n      (then (fn [[first-result second-result]]))\n       (println (str first-result \", \" second-result)\n\n  Will print out\n  :first-promise, :second-promise.\n\n  If at least one of the promises is rejected, the resulting promise will be\n  rejected.",(cljs.core.truth_(promesa.core.all)?promesa.core.all.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.core.rejected;},new cljs.core.Symbol("promesa.core","rejected","promesa.core/rejected",1335525992,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"rejected","rejected",1871584526,null),"promesa/core.cljc",(15),(1),(32),(32),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),"Return a rejected promise with provided reason.",(cljs.core.truth_(promesa.core.rejected)?promesa.core.rejected.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.core.promise;},new cljs.core.Symbol("promesa.core","promise","promesa.core/promise",-1423944288,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"promise","promise",-887306482,null),"promesa/core.cljc",(14),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),(1),(42),(42),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),"The coerce based promise constructor. Creates an appropriate promise\n  instance depending on the provided value.\n\n  If an executor is provided, it will be used to resolve this\n  promise.",(cljs.core.truth_(promesa.core.promise)?promesa.core.promise.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.core.reject_BANG_;},new cljs.core.Symbol("promesa.core","reject!","promesa.core/reject!",-314773537,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"reject!","reject!",-854885003,null),"promesa/core.cljc",(14),(1),(356),(356),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"e","e",-1273166571,null)], null)),"Reject a completable promise with an error.",(cljs.core.truth_(promesa.core.reject_BANG_)?promesa.core.reject_BANG_.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return sci.configs.funcool.promesa.with_redefs;},new cljs.core.Symbol("sci.configs.funcool.promesa","with-redefs","sci.configs.funcool.promesa/with-redefs",-1201509054,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.funcool.promesa","sci.configs.funcool.promesa",-1117893218,null),new cljs.core.Symbol(null,"with-redefs","with-redefs",-1143728263,null),"sci/configs/funcool/promesa.cljs",26,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"body","body",-408674142,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,80,true,80,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),"Like clojure.core/with-redefs, but it will handle promises in\n  body and wait until they resolve or reject before restoring the\n  bindings. Useful for mocking async APIs.\n  Example:\n  (defn async-func [] (p/delay 1000 :slow-original))\n  (p/with-redefs [async-func (fn [] (p/resolved :fast-mock))]\n    (async-func))\n  The result is a promise that will resolve to the last body form and\n  upon resolving restores the bindings to their original values.",(cljs.core.truth_(sci.configs.funcool.promesa.with_redefs)?sci.configs.funcool.promesa.with_redefs.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return sci.configs.funcool.promesa.do_BANG_;},new cljs.core.Symbol("sci.configs.funcool.promesa","do!","sci.configs.funcool.promesa/do!",-462528085,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.funcool.promesa","sci.configs.funcool.promesa",-1117893218,null),new cljs.core.Symbol(null,"do!","do!",-522949760,null),"sci/configs/funcool/promesa.cljs",18,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"exprs","exprs",-858606675,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"exprs","exprs",-858606675,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,16,true,16,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"exprs","exprs",-858606675,null)], null)),"Execute potentially side effectful code and return a promise resolved\n  to the last expression. Always awaiting the result of each\n  expression.",(cljs.core.truth_(sci.configs.funcool.promesa.do_BANG_)?sci.configs.funcool.promesa.do_BANG_.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return sci.configs.funcool.promesa.loop;},new cljs.core.Symbol("sci.configs.funcool.promesa","loop","sci.configs.funcool.promesa/loop",1183765459,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.funcool.promesa","sci.configs.funcool.promesa",-1117893218,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),"sci/configs/funcool/promesa.cljs",19,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"body","body",-408674142,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,111,true,111,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),null,(cljs.core.truth_(sci.configs.funcool.promesa.loop)?sci.configs.funcool.promesa.loop.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return sci.configs.funcool.promesa.__GT__GT_;},new cljs.core.Symbol("sci.configs.funcool.promesa","->>","sci.configs.funcool.promesa/->>",-1929785446,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.funcool.promesa","sci.configs.funcool.promesa",-1117893218,null),new cljs.core.Symbol(null,"->>","->>",-1874332161,null),"sci/configs/funcool/promesa.cljs",18,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,61,true,61,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null)], null)),"Like the clojure.core/->>, but it will handle promises in values\n  and make sure the next form gets the value realized instead of\n  the promise. Example using to fetch data in the browser with CLJS:\n  Example:\n  (p/->> (js/fetch #js {...}) ; returns a promise\n         .-body\n         read-string\n         (mapv inc)\n  The result of a thread is a promise that will resolve to the\n  end of the thread chain.",(cljs.core.truth_(sci.configs.funcool.promesa.__GT__GT_)?sci.configs.funcool.promesa.__GT__GT_.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return sci.configs.funcool.promesa.doseq;},new cljs.core.Symbol("sci.configs.funcool.promesa","doseq","sci.configs.funcool.promesa/doseq",160478274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.funcool.promesa","sci.configs.funcool.promesa",-1117893218,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),"sci/configs/funcool/promesa.cljs",20,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null),new cljs.core.Symbol(null,"body","body",-408674142,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,146,true,146,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"xs","xs",-2004992428,null)], null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),"Simplified version of `doseq` which takes one binding and a seq, and\n  runs over it using `promesa.core/run!`",(cljs.core.truth_(sci.configs.funcool.promesa.doseq)?sci.configs.funcool.promesa.doseq.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.core.then;},new cljs.core.Symbol("promesa.core","then","promesa.core/then",487138967,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"then","then",2101129597,null),"promesa/core.cljc",(11),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(3),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(3),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),(1),(135),(135),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),"Chains a computation `f` (function) to be executed when the promise\n  `p` is successfully resolved.\n\n  The computation will be executed in the calling thread by default;\n  you also can provide a custom executor.\n\n  If the function `f` returns a promise instance, it will be\n  automatically unwrapped.",(cljs.core.truth_(promesa.core.then)?promesa.core.then.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.core.finally$;},new cljs.core.Symbol("promesa.core","finally","promesa.core/finally",-527135850,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"finally","finally",-1065347064,null),"promesa/core.cljc",(14),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(3),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(3),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),(1),(215),(215),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),"Attach a potentially side-effectful handler to promise that will be\n  executed independently if promise is resolved or rejected.\n\n  Returns the original promise and the return value of `f` function is\n  ignored.",(cljs.core.truth_(promesa.core.finally$)?promesa.core.finally$.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return sci.configs.funcool.promesa.future;},new cljs.core.Symbol("sci.configs.funcool.promesa","future","sci.configs.funcool.promesa/future",-574608500,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.funcool.promesa","sci.configs.funcool.promesa",-1117893218,null),new cljs.core.Symbol(null,"future","future",-776593045,null),"sci/configs/funcool/promesa.cljs",21,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"body","body",-408674142,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,155,true,155,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),"Analogous macro to `clojure.core/future` that returns promise\n  instance instead of the `Future`. Exposed just for convenience and\n  works as an alias to `thread`.",(cljs.core.truth_(sci.configs.funcool.promesa.future)?sci.configs.funcool.promesa.future.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.core.handle;},new cljs.core.Symbol("promesa.core","handle","promesa.core/handle",-1644778541,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"handle","handle",-1115486915,null),"promesa/core.cljc",(13),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(3),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(3),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),(1),(207),(207),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),"Executes `f` when the promise `p` is resolved or is rejected. Returns\n  a promise resolved with the return value of `f` function.",(cljs.core.truth_(promesa.core.handle)?promesa.core.handle.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.core.create;},new cljs.core.Symbol("promesa.core","create","promesa.core/create",1948896117,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"create","create",339032271,null),"promesa/core.cljc",(13),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),(1),(59),(59),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),"Create a promise instance from a factory function. If an executor is\n  provided, the factory will be executed in the provided executor.\n\n  A factory function looks like `(fn [resolve reject] (resolve 1))`.",(cljs.core.truth_(promesa.core.create)?promesa.core.create.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.core.error;},new cljs.core.Symbol("promesa.core","error","promesa.core/error",125448597,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"error","error",661562495,null),"promesa/core.cljc",(12),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(3),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(3),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),(1),(258),(258),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)),"Same as `catch` but with parameters inverted.",(cljs.core.truth_(promesa.core.error)?promesa.core.error.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.core.run_BANG_;},new cljs.core.Symbol("promesa.core","run!","promesa.core/run!",-1526702839,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"run!","run!",-2055483725,null),"promesa/core.cljc",(11),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(3),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(3),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),(1),(331),(331),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"coll","coll",-1006698606,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),"A promise aware run! function.",(cljs.core.truth_(promesa.core.run_BANG_)?promesa.core.run_BANG_.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.core.race;},new cljs.core.Symbol("promesa.core","race","promesa.core/race",-346786155,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"race","race",-1960778897,null),"promesa/core.cljc",(11),(1),(293),(293),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promises","promises",988201016,null)], null)),null,(cljs.core.truth_(promesa.core.race)?promesa.core.race.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.core.thread_call;},new cljs.core.Symbol("promesa.core","thread-call","promesa.core/thread-call",472685991,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"thread-call","thread-call",1007693373,null),"promesa/core.cljc",(18),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executor","executor",-1457220607,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executor","executor",-1457220607,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),(1),(456),(456),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executor","executor",-1457220607,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null)),"Analogous to `clojure.core.async/thread` that returns a promise\n  instance instead of the `Future`. Useful for executing synchronous\n  code in a separate thread (also works in cljs).",(cljs.core.truth_(promesa.core.thread_call)?promesa.core.thread_call.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.core.promise_QMARK_;},new cljs.core.Symbol("promesa.core","promise?","promesa.core/promise?",-1893544292,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"promise?","promise?",-283815882,null),"promesa/core.cljc",(15),(1),(82),(82),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),"Return true if `v` is a promise instance.",(cljs.core.truth_(promesa.core.promise_QMARK_)?promesa.core.promise_QMARK_.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return sci.configs.funcool.promesa.let$;},new cljs.core.Symbol("sci.configs.funcool.promesa","let","sci.configs.funcool.promesa/let",294810545,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.funcool.promesa","sci.configs.funcool.promesa",-1117893218,null),new cljs.core.Symbol(null,"let","let",358118826,null),"sci/configs/funcool/promesa.cljs",18,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"body","body",-408674142,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,32,true,32,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"bindings","bindings",-1383038577,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"body","body",-408674142,null)], null)),"A `let` alternative that always returns promise and waits for all the\n  promises on the bindings.",(cljs.core.truth_(sci.configs.funcool.promesa.let$)?sci.configs.funcool.promesa.let$.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.core.resolve_BANG_;},new cljs.core.Symbol("promesa.core","resolve!","promesa.core/resolve!",1603668640,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"resolve!","resolve!",2140913414,null),"promesa/core.cljc",(15),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",290524299,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",290524299,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),(1),(351),(351),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",290524299,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"o","o",290524299,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),"Resolve a completable promise with a value.",(cljs.core.truth_(promesa.core.resolve_BANG_)?promesa.core.resolve_BANG_.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.core.thenable_QMARK_;},new cljs.core.Symbol("promesa.core","thenable?","promesa.core/thenable?",1479042294,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"thenable?","thenable?",-1206584560,null),"promesa/core.cljc",(19),(4),(97),(97),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),"Returns true if `v` is a promise like object.",(cljs.core.truth_(promesa.core.thenable_QMARK_)?promesa.core.thenable_QMARK_.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.core.map;},new cljs.core.Symbol("promesa.core","map","promesa.core/map",1402366606,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"map","map",-1282745308,null),"promesa/core.cljc",(10),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(3),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(3),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executor","executor",-1457220607,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executor","executor",-1457220607,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),(1),(168),(168),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executor","executor",-1457220607,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)),"Chains a computation `f` (function) to be executed when the promise\n  `p` is successfully resolved.\n\n  Unlike `then`, this does not perform automatic promise flattening.\n  This is designed to be used with `->>`.",(cljs.core.truth_(promesa.core.map)?promesa.core.map.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.core.any;},new cljs.core.Symbol("promesa.core","any","promesa.core/any",660743608,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"any","any",-948528346,null),"promesa/core.cljc",(10),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promises","promises",988201016,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promises","promises",988201016,null),new cljs.core.Symbol(null,"default","default",-347290801,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promises","promises",988201016,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promises","promises",988201016,null),new cljs.core.Symbol(null,"default","default",-347290801,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),(1),(299),(299),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promises","promises",988201016,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"promises","promises",988201016,null),new cljs.core.Symbol(null,"default","default",-347290801,null)], null)),"Given an array of promises, return a promise that is fulfilled when\n  first one item in the array is fulfilled.",(cljs.core.truth_(promesa.core.any)?promesa.core.any.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.core.catch$;},new cljs.core.Symbol("promesa.core","catch","promesa.core/catch",-1078163451,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"catch","catch",-1616370245,null),"promesa/core.cljc",(12),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(3),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(3),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"pred-or-type","pred-or-type",1387438641,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"pred-or-type","pred-or-type",1387438641,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),(1),(226),(226),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"pred-or-type","pred-or-type",1387438641,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null)),"Executes `f` when the promise `p` is rejected. Returns a promise\n  resolved with the return value of `f` function handler.",(cljs.core.truth_(promesa.core.catch$)?promesa.core.catch$.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return sci.configs.funcool.promesa.recur;},new cljs.core.Symbol("sci.configs.funcool.promesa","recur","sci.configs.funcool.promesa/recur",1132058078,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.funcool.promesa","sci.configs.funcool.promesa",-1117893218,null),new cljs.core.Symbol(null,"recur","recur",1202958259,null),"sci/configs/funcool/promesa.cljs",20,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"args","args",-1338879193,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,142,true,142,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null)),null,(cljs.core.truth_(sci.configs.funcool.promesa.recur)?sci.configs.funcool.promesa.recur.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return sci.configs.funcool.promesa.do_BANG_;},new cljs.core.Symbol("sci.configs.funcool.promesa","do!","sci.configs.funcool.promesa/do!",-462528085,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.funcool.promesa","sci.configs.funcool.promesa",-1117893218,null),new cljs.core.Symbol(null,"do!","do!",-522949760,null),"sci/configs/funcool/promesa.cljs",18,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(0),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(0),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"exprs","exprs",-858606675,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"exprs","exprs",-858606675,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,16,true,16,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"exprs","exprs",-858606675,null)], null)),"Execute potentially side effectful code and return a promise resolved\n  to the last expression. Always awaiting the result of each\n  expression.",(cljs.core.truth_(sci.configs.funcool.promesa.do_BANG_)?sci.configs.funcool.promesa.do_BANG_.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.core.wrap;},new cljs.core.Symbol("promesa.core","wrap","promesa.core/wrap",1962895564,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"wrap","wrap",-1802765782,null),"promesa/core.cljc",(11),(1),(53),(53),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),"A convenience alias for `promise` coercion function that only accepts\n  a single argument.",(cljs.core.truth_(promesa.core.wrap)?promesa.core.wrap.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.core.mapcat;},new cljs.core.Symbol("promesa.core","mapcat","promesa.core/mapcat",-64727389,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"mapcat","mapcat",-601348859,null),"promesa/core.cljc",(13),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(3),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(3),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executor","executor",-1457220607,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executor","executor",-1457220607,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),(1),(179),(179),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"executor","executor",-1457220607,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)),"Chains a computation `f` (function) to be executed when the promise\n  `p` is successfully resolved. `f` must return a\n  promise that will be automatically unwrapped.\n\n  This is just a stricter version of `then` with reversed arguments in\n  the same way as `map`.\n\n  This is designed to be used with `->>`.",(cljs.core.truth_(promesa.core.mapcat)?promesa.core.mapcat.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),sci.configs.funcool.promesa.loop_run_fn,(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.core.delay;},new cljs.core.Symbol("promesa.core","delay","promesa.core/delay",528553114,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"delay","delay",1066306308,null),"promesa/core.cljc",(12),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(3),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(3),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"scheduler","scheduler",-242338681,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"scheduler","scheduler",-242338681,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null,null)], null),(1),(399),(399),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"scheduler","scheduler",-242338681,null)], null)),"Given a timeout in miliseconds and optional value, returns a promise\n  that will be fulfilled with provided value (or nil) after the time is\n  reached.",(cljs.core.truth_(promesa.core.delay)?promesa.core.delay.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return sci.configs.funcool.promesa.__GT_;},new cljs.core.Symbol("sci.configs.funcool.promesa","->","sci.configs.funcool.promesa/->",-2066861977,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"macro","macro",-867863404),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"sci.configs.funcool.promesa","sci.configs.funcool.promesa",-1117893218,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),"sci/configs/funcool/promesa.cljs",17,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(1),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(1),new cljs.core.Keyword(null,"method-params","method-params",-980792179),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null))),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null)], null),1,44,true,44,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null)], null)),"Like the clojure.core/->, but it will handle promises in values\n  and make sure the next form gets the value realized instead of\n  the promise. Example using to fetch data in the browser with CLJS:\n  Example:\n  (p/-> (js/fetch #js {...}) ; returns a promise\n        .-body)\n  The result of a thread is a promise that will resolve to the\n  end of the thread chain.",(cljs.core.truth_(sci.configs.funcool.promesa.__GT_)?sci.configs.funcool.promesa.__GT_.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.core.chain;},new cljs.core.Symbol("promesa.core","chain","promesa.core/chain",-2105367206,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"chain","chain",1656162556,null),"promesa/core.cljc",(12),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),true,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(2),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(2),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"fs","fs",-482394717,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),(1),(193),(193),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"&","&",-2144855648,null),new cljs.core.Symbol(null,"fs","fs",-482394717,null)], null)),"Chain variable number of computations to be executed\n  serially. Analogous to `then` that accepts variable number of\n  functions.",(cljs.core.truth_(promesa.core.chain)?promesa.core.chain.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.pns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.core.resolved;},new cljs.core.Symbol("promesa.core","resolved","promesa.core/resolved",-74821616,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),new cljs.core.Symbol(null,"resolved","resolved",-1685672202,null),"promesa/core.cljc",(15),(1),(27),(27),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),"Return a resolved promise with provided value.",(cljs.core.truth_(promesa.core.resolved)?promesa.core.resolved.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})()]);
sci.configs.funcool.promesa.promesa_protocols_namespace = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"-bind","-bind",238159517,null),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.ptns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.protocols._bind;},new cljs.core.Symbol("promesa.protocols","-bind","promesa.protocols/-bind",1690962013,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"top-fn","top-fn",-2056129173),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol("promesa.protocols","IPromise","promesa.protocols/IPromise",1733947164,null),new cljs.core.Symbol(null,"promesa.protocols","promesa.protocols",-132625180,null),new cljs.core.Symbol(null,"-bind","-bind",238159517,null),"promesa/protocols.cljc",(9),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"variadic?","variadic?",584179762),false,new cljs.core.Keyword(null,"fixed-arity","fixed-arity",1586445869),(3),new cljs.core.Keyword(null,"max-fixed-arity","max-fixed-arity",-690205543),(3),new cljs.core.Keyword(null,"method-params","method-params",-980792179),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)], null),new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),new cljs.core.Keyword(null,"arglists-meta","arglists-meta",1944829838),cljs.core.list(null,null)], null),(1),(10),(12),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"f","f",43394975,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"executor","executor",-1457220607,null)], null)),"Apply function to a computation and flatten.",(cljs.core.truth_(promesa.protocols._bind)?promesa.protocols._bind.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})(),new cljs.core.Symbol(null,"-promise","-promise",-196098007,null),(function (){var ns__51629__auto__ = sci.configs.funcool.promesa.ptns;
var var__51630__auto__ = new cljs.core.Var(function(){return promesa.protocols._promise;},new cljs.core.Symbol("promesa.protocols","-promise","promesa.protocols/-promise",-1959279895,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"protocol","protocol",652470118),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol("promesa.protocols","IPromiseFactory","promesa.protocols/IPromiseFactory",56789029,null),new cljs.core.Symbol(null,"promesa.protocols","promesa.protocols",-132625180,null),new cljs.core.Symbol(null,"-promise","-promise",-196098007,null),"promesa/protocols.cljc",(12),(1),(39),(41),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)),"Create a promise instance from other types",(cljs.core.truth_(promesa.protocols._promise)?promesa.protocols._promise.cljs$lang$test:null)]));
var val__51631__auto__ = cljs.core.deref(var__51630__auto__);
var m__51632__auto__ = cljs.core.meta(var__51630__auto__);
var name__51633__auto__ = (function (){var or__5045__auto__ = null;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})();
var new_m__51634__auto__ = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ns","ns",441598760),ns__51629__auto__,new cljs.core.Keyword(null,"name","name",1843675177),name__51633__auto__,new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m__51632__auto__),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m__51632__auto__)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"dynamic","dynamic",704819571).cljs$core$IFn$_invoke$arity$1(m__51632__auto__))){
return sci.core.new_dynamic_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword("sci","macro","sci/macro",-868536151).cljs$core$IFn$_invoke$arity$1(m__51632__auto__);
}
})())){
return sci.core.new_macro_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);
} else {
return sci.core.new_var.cljs$core$IFn$_invoke$arity$3(name__51633__auto__,val__51631__auto__,new_m__51634__auto__);

}
}
})()], null);
sci.configs.funcool.promesa.namespaces = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol(null,"promesa.core","promesa.core",231877733,null),sci.configs.funcool.promesa.promesa_namespace,new cljs.core.Symbol(null,"promesa.protocols","promesa.protocols",-132625180,null),sci.configs.funcool.promesa.promesa_protocols_namespace], null);
sci.configs.funcool.promesa.config = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),sci.configs.funcool.promesa.namespaces], null);

//# sourceMappingURL=sci.configs.funcool.promesa.js.map
