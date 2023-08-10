goog.provide('com.rpl.specter');
com.rpl.specter.static_path_QMARK_ = (function com$rpl$specter$static_path_QMARK_(path){
if(cljs.core.sequential_QMARK_(path)){
return cljs.core.every_QMARK_(com.rpl.specter.static_path_QMARK_,path);
} else {
return (!(com.rpl.specter.impl.dynamic_param_QMARK_(path)));
}
});
com.rpl.specter.wrap_dynamic_nav = (function com$rpl$specter$wrap_dynamic_nav(f){
return (function() { 
var G__77973__delegate = function (args){
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
if(((cljs.core.sequential_QMARK_(ret)) && (com.rpl.specter.static_path_QMARK_(ret)))){
return com.rpl.specter.impl.comp_paths_STAR_(ret);
} else {
if(((cljs.core.sequential_QMARK_(ret)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(ret))))){
return cljs.core.first(ret);
} else {
return ret;

}
}
};
var G__77973 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77977__i = 0, G__77977__a = new Array(arguments.length -  0);
while (G__77977__i < G__77977__a.length) {G__77977__a[G__77977__i] = arguments[G__77977__i + 0]; ++G__77977__i;}
  args = new cljs.core.IndexedSeq(G__77977__a,0,null);
} 
return G__77973__delegate.call(this,args);};
G__77973.cljs$lang$maxFixedArity = 0;
G__77973.cljs$lang$applyTo = (function (arglist__77978){
var args = cljs.core.seq(arglist__77978);
return G__77973__delegate(args);
});
G__77973.cljs$core$IFn$_invoke$arity$variadic = G__77973__delegate;
return G__77973;
})()
;
});
/**
 * Returns a compiled version of the given path for use with
 * compiled-{select/transform/setval/etc.} functions.
 */
com.rpl.specter.comp_paths = (function com$rpl$specter$comp_paths(var_args){
var args__5775__auto__ = [];
var len__5769__auto___77979 = arguments.length;
var i__5770__auto___77980 = (0);
while(true){
if((i__5770__auto___77980 < len__5769__auto___77979)){
args__5775__auto__.push((arguments[i__5770__auto___77980]));

var G__77981 = (i__5770__auto___77980 + (1));
i__5770__auto___77980 = G__77981;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(com.rpl.specter.comp_paths.cljs$core$IFn$_invoke$arity$variadic = (function (apath){
return com.rpl.specter.impl.comp_paths_STAR_(cljs.core.vec(apath));
}));

(com.rpl.specter.comp_paths.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(com.rpl.specter.comp_paths.cljs$lang$applyTo = (function (seq77655){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77655));
}));

/**
 * Version of select that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select = com.rpl.specter.impl.compiled_select_STAR_;
/**
 * Navigates to and returns a sequence of all the elements specified by the path.
 */
com.rpl.specter.select_STAR_ = (function com$rpl$specter$select_STAR_(path,structure){
var G__77657 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__77658 = structure;
return (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(G__77657,G__77658) : com.rpl.specter.compiled_select.call(null,G__77657,G__77658));
});
/**
 * Version of select-one that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one = com.rpl.specter.impl.compiled_select_one_STAR_;
/**
 * Like select, but returns either one element or nil. Throws exception if multiple elements found
 */
com.rpl.specter.select_one_STAR_ = (function com$rpl$specter$select_one_STAR_(path,structure){
var G__77659 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__77660 = structure;
return (com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(G__77659,G__77660) : com.rpl.specter.compiled_select_one.call(null,G__77659,G__77660));
});
/**
 * Version of select-one! that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_one_BANG_ = com.rpl.specter.impl.compiled_select_one_BANG__STAR_;
/**
 * Returns exactly one element, throws exception if zero or multiple elements found
 */
com.rpl.specter.select_one_BANG__STAR_ = (function com$rpl$specter$select_one_BANG__STAR_(path,structure){
var G__77661 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__77662 = structure;
return (com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one_BANG_.cljs$core$IFn$_invoke$arity$2(G__77661,G__77662) : com.rpl.specter.compiled_select_one_BANG_.call(null,G__77661,G__77662));
});
/**
 * Version of select-first that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_first = com.rpl.specter.impl.compiled_select_first_STAR_;
/**
 * Returns first element found.
 */
com.rpl.specter.select_first_STAR_ = (function com$rpl$specter$select_first_STAR_(path,structure){
var G__77663 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__77664 = structure;
return (com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_first.cljs$core$IFn$_invoke$arity$2(G__77663,G__77664) : com.rpl.specter.compiled_select_first.call(null,G__77663,G__77664));
});
/**
 * Version of select-any that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_select_any = com.rpl.specter.impl.compiled_select_any_STAR_;
/**
 * Global value used to indicate no elements selected during
 *           [[select-any]].
 */
com.rpl.specter.NONE = com.rpl.specter.impl.NONE;
/**
 * Returns any element found or [[NONE]] if nothing selected. This is the most
 * efficient of the various selection operations.
 */
com.rpl.specter.select_any_STAR_ = (function com$rpl$specter$select_any_STAR_(path,structure){
var G__77665 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__77666 = structure;
return (com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_any.cljs$core$IFn$_invoke$arity$2(G__77665,G__77666) : com.rpl.specter.compiled_select_any.call(null,G__77665,G__77666));
});
/**
 * Version of selected-any? that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_selected_any_QMARK_ = com.rpl.specter.impl.compiled_selected_any_QMARK__STAR_;
/**
 * Returns true if any element was selected, false otherwise.
 */
com.rpl.specter.selected_any_QMARK__STAR_ = (function com$rpl$specter$selected_any_QMARK__STAR_(path,structure){
var G__77667 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__77668 = structure;
return (com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_selected_any_QMARK_.cljs$core$IFn$_invoke$arity$2(G__77667,G__77668) : com.rpl.specter.compiled_selected_any_QMARK_.call(null,G__77667,G__77668));
});
/**
 * Version of traverse that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse = com.rpl.specter.impl.do_compiled_traverse;
/**
 * Return a reducible object that traverses over `structure` to every element
 * specified by the path
 */
com.rpl.specter.traverse_STAR_ = (function com$rpl$specter$traverse_STAR_(apath,structure){
var G__77670 = com.rpl.specter.impl.comp_paths_STAR_(apath);
var G__77671 = structure;
return (com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(G__77670,G__77671) : com.rpl.specter.compiled_traverse.call(null,G__77670,G__77671));
});
/**
 * Version of traverse-all that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_traverse_all = com.rpl.specter.impl.compiled_traverse_all_STAR_;
/**
 * Returns a transducer that traverses over each element with the given path.
 */
com.rpl.specter.traverse_all_STAR_ = (function com$rpl$specter$traverse_all_STAR_(apath){
var G__77672 = com.rpl.specter.impl.comp_paths_STAR_(apath);
return (com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.compiled_traverse_all.cljs$core$IFn$_invoke$arity$1(G__77672) : com.rpl.specter.compiled_traverse_all.call(null,G__77672));
});
/**
 * Version of transform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_transform = com.rpl.specter.impl.compiled_transform_STAR_;
/**
 * Version of vtransform that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_vtransform = com.rpl.specter.impl.compiled_vtransform_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by the result of running
 *   the transform-fn on it
 */
com.rpl.specter.transform_STAR_ = (function com$rpl$specter$transform_STAR_(path,transform_fn,structure){
var G__77673 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__77674 = transform_fn;
var G__77675 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__77673,G__77674,G__77675) : com.rpl.specter.compiled_transform.call(null,G__77673,G__77674,G__77675));
});
/**
 * Version of `multi-transform` that takes in a path precompiled with `comp-paths`
 */
com.rpl.specter.compiled_multi_transform = com.rpl.specter.impl.compiled_multi_transform_STAR_;
/**
 * Just like `transform` but expects transform functions to be specified
 * inline in the path using `terminal` or `vterminal`. Error is thrown if navigation finishes
 * at a non-terminal navigator. `terminal-val` is a wrapper around `terminal` and is
 * the `multi-transform` equivalent of `setval`.
 */
com.rpl.specter.multi_transform_STAR_ = (function com$rpl$specter$multi_transform_STAR_(path,structure){
var G__77677 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__77678 = structure;
return (com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_multi_transform.cljs$core$IFn$_invoke$arity$2(G__77677,G__77678) : com.rpl.specter.compiled_multi_transform.call(null,G__77677,G__77678));
});
/**
 * Version of setval that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_setval = com.rpl.specter.impl.compiled_setval_STAR_;
/**
 * Navigates to each value specified by the path and replaces it by val
 */
com.rpl.specter.setval_STAR_ = (function com$rpl$specter$setval_STAR_(path,val,structure){
var G__77679 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__77680 = val;
var G__77681 = structure;
return (com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_setval.cljs$core$IFn$_invoke$arity$3(G__77679,G__77680,G__77681) : com.rpl.specter.compiled_setval.call(null,G__77679,G__77680,G__77681));
});
/**
 * Version of replace-in that takes in a path precompiled with comp-paths
 */
com.rpl.specter.compiled_replace_in = com.rpl.specter.impl.compiled_replace_in_STAR_;
/**
 * Similar to transform, except returns a pair of [transformed-structure sequence-of-user-ret].
 * The transform-fn in this case is expected to return [ret user-ret]. ret is
 * what's used to transform the data structure, while user-ret will be added to the user-ret sequence
 * in the final return. replace-in is useful for situations where you need to know the specific values
 * of what was transformed in the data structure.
 */
com.rpl.specter.replace_in_STAR_ = (function com$rpl$specter$replace_in_STAR_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___77984 = arguments.length;
var i__5770__auto___77985 = (0);
while(true){
if((i__5770__auto___77985 < len__5769__auto___77984)){
args__5775__auto__.push((arguments[i__5770__auto___77985]));

var G__77986 = (i__5770__auto___77985 + (1));
i__5770__auto___77985 = G__77986;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(com.rpl.specter.replace_in_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (path,transform_fn,structure,p__77686){
var map__77687 = p__77686;
var map__77687__$1 = cljs.core.__destructure_map(map__77687);
var merge_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__77687__$1,new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341),cljs.core.concat);
var G__77688 = com.rpl.specter.impl.comp_paths_STAR_(path);
var G__77689 = transform_fn;
var G__77690 = structure;
var G__77691 = new cljs.core.Keyword(null,"merge-fn","merge-fn",588067341);
var G__77692 = merge_fn;
return (com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5 ? com.rpl.specter.compiled_replace_in.cljs$core$IFn$_invoke$arity$5(G__77688,G__77689,G__77690,G__77691,G__77692) : com.rpl.specter.compiled_replace_in.call(null,G__77688,G__77689,G__77690,G__77691,G__77692));
}));

(com.rpl.specter.replace_in_STAR_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(com.rpl.specter.replace_in_STAR_.cljs$lang$applyTo = (function (seq77682){
var G__77683 = cljs.core.first(seq77682);
var seq77682__$1 = cljs.core.next(seq77682);
var G__77684 = cljs.core.first(seq77682__$1);
var seq77682__$2 = cljs.core.next(seq77682__$1);
var G__77685 = cljs.core.first(seq77682__$2);
var seq77682__$3 = cljs.core.next(seq77682__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77683,G__77684,G__77685,seq77682__$3);
}));

com.rpl.specter.late_path = com.rpl.specter.impl.late_path;
com.rpl.specter.dynamic_param_QMARK_ = com.rpl.specter.impl.dynamic_param_QMARK_;
com.rpl.specter.late_resolved_fn = com.rpl.specter.impl.late_resolved_fn;
com.rpl.specter.eachnav = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (navfn){
var latenavfn = (com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_resolved_fn.cljs$core$IFn$_invoke$arity$1(navfn) : com.rpl.specter.late_resolved_fn.call(null,navfn));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__77987__delegate = function (args){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(latenavfn,args);
};
var G__77987 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__77988__i = 0, G__77988__a = new Array(arguments.length -  0);
while (G__77988__i < G__77988__a.length) {G__77988__a[G__77988__i] = arguments[G__77988__i + 0]; ++G__77988__i;}
  args = new cljs.core.IndexedSeq(G__77988__a,0,null);
} 
return G__77987__delegate.call(this,args);};
G__77987.cljs$lang$maxFixedArity = 0;
G__77987.cljs$lang$applyTo = (function (arglist__77989){
var args = cljs.core.seq(arglist__77989);
return G__77987__delegate(args);
});
G__77987.cljs$core$IFn$_invoke$arity$variadic = G__77987__delegate;
return G__77987;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
com.rpl.specter.local_declarepath = com.rpl.specter.impl.local_declarepath;

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77693 = (function (meta77694){
this.meta77694 = meta77694;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77695,meta77694__$1){
var self__ = this;
var _77695__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77693(meta77694__$1));
}));

(com.rpl.specter.t_com$rpl$specter77693.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77695){
var self__ = this;
var _77695__$1 = this;
return self__.meta77694;
}));

(com.rpl.specter.t_com$rpl$specter77693.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77693.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter77693.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return structure;
}));

(com.rpl.specter.t_com$rpl$specter77693.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77694","meta77694",1830829364,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77693.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77693.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77693");

(com.rpl.specter.t_com$rpl$specter77693.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77693");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77693.
 */
com.rpl.specter.__GT_t_com$rpl$specter77693 = (function com$rpl$specter$__GT_t_com$rpl$specter77693(meta77694){
return (new com.rpl.specter.t_com$rpl$specter77693(meta77694));
});




com.rpl.specter.STOP_select_STAR_ = (function com$rpl$specter$STOP_select_STAR_(structure,next_fn){
return com.rpl.specter.NONE;
});

com.rpl.specter.STOP_transform_STAR_ = (function com$rpl$specter$STOP_transform_STAR_(structure,next_fn){
return structure;
});

/**
 * Stops navigation at this point. For selection returns nothing and for
 *        transformation returns the structure unchanged
 */
com.rpl.specter.STOP = (new com.rpl.specter.t_com$rpl$specter77693(null));
/**
 * Stays navigated at the current point. Essentially a no-op navigator.
 */
com.rpl.specter.STAY = com.rpl.specter.impl.STAY_STAR_;

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77696 = (function (afn,meta77697){
this.afn = afn;
this.meta77697 = meta77697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77698,meta77697__$1){
var self__ = this;
var _77698__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77696(self__.afn,meta77697__$1));
}));

(com.rpl.specter.t_com$rpl$specter77696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77698){
var self__ = this;
var _77698__$1 = this;
return self__.meta77697;
}));

(com.rpl.specter.t_com$rpl$specter77696.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77696.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter77696.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.terminal_STAR_(self__.afn,vals,structure);
}));

(com.rpl.specter.t_com$rpl$specter77696.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta77697","meta77697",2082735231,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77696.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77696.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77696");

(com.rpl.specter.t_com$rpl$specter77696.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77696");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77696.
 */
com.rpl.specter.__GT_t_com$rpl$specter77696 = (function com$rpl$specter$__GT_t_com$rpl$specter77696(afn,meta77697){
return (new com.rpl.specter.t_com$rpl$specter77696(afn,meta77697));
});


/**
 * Defines an endpoint in the navigation the transform function run. The transform
 *        function works just like it does in `transform`, with collected values
 *        given as the first arguments
 */
com.rpl.specter.terminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
return (new com.rpl.specter.t_com$rpl$specter77696(afn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77699 = (function (afn,meta77700){
this.afn = afn;
this.meta77700 = meta77700;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77699.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77701,meta77700__$1){
var self__ = this;
var _77701__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77699(self__.afn,meta77700__$1));
}));

(com.rpl.specter.t_com$rpl$specter77699.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77701){
var self__ = this;
var _77701__$1 = this;
return self__.meta77700;
}));

(com.rpl.specter.t_com$rpl$specter77699.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77699.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter77699.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return (self__.afn.cljs$core$IFn$_invoke$arity$2 ? self__.afn.cljs$core$IFn$_invoke$arity$2(vals,structure) : self__.afn.call(null,vals,structure));
}));

(com.rpl.specter.t_com$rpl$specter77699.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta77700","meta77700",-1201536891,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77699.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77699.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77699");

(com.rpl.specter.t_com$rpl$specter77699.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77699");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77699.
 */
com.rpl.specter.__GT_t_com$rpl$specter77699 = (function com$rpl$specter$__GT_t_com$rpl$specter77699(afn,meta77700){
return (new com.rpl.specter.t_com$rpl$specter77699(afn,meta77700));
});


/**
 * Defines an endpoint in the navigation the transform function run.The transform
 *        function works differently than it does in `transform`. Rather than receive
 *        collected vals spliced in as the first arguments to the function, this function
 *        always takes two arguemnts. The first is all collected vals in a vector, and
 *        the second is the navigated value.
 */
com.rpl.specter.vterminal = com.rpl.specter.impl.direct_nav_obj((function (afn){
return (new com.rpl.specter.t_com$rpl$specter77699(afn,null));
}));
/**
 * Like `terminal` but specifies a val to set at the location regardless of
 * the collected values or the value at the location.
 */
com.rpl.specter.terminal_val = (function com$rpl$specter$terminal_val(v){
var G__77702 = com.rpl.specter.impl.fast_constantly(v);
return (com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.terminal.cljs$core$IFn$_invoke$arity$1(G__77702) : com.rpl.specter.terminal.call(null,G__77702));
});

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77703 = (function (meta77704){
this.meta77704 = meta77704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77705,meta77704__$1){
var self__ = this;
var _77705__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77703(meta77704__$1));
}));

(com.rpl.specter.t_com$rpl$specter77703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77705){
var self__ = this;
var _77705__$1 = this;
return self__.meta77704;
}));

(com.rpl.specter.t_com$rpl$specter77703.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77703.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter77703.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return com.rpl.specter.navs.all_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter77703.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77704","meta77704",360882279,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77703.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77703.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77703");

(com.rpl.specter.t_com$rpl$specter77703.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77703");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77703.
 */
com.rpl.specter.__GT_t_com$rpl$specter77703 = (function com$rpl$specter$__GT_t_com$rpl$specter77703(meta77704){
return (new com.rpl.specter.t_com$rpl$specter77703(meta77704));
});




com.rpl.specter.ALL_select_STAR_ = (function com$rpl$specter$ALL_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_transform_STAR_ = (function com$rpl$specter$ALL_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_transform(structure,next_fn);
});

/**
 * Navigate to every element of the collection. For maps navigates to
 *        a vector of `[key value]`.
 */
com.rpl.specter.ALL = (new com.rpl.specter.t_com$rpl$specter77703(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77706 = (function (meta77707){
this.meta77707 = meta77707;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77706.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77708,meta77707__$1){
var self__ = this;
var _77708__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77706(meta77707__$1));
}));

(com.rpl.specter.t_com$rpl$specter77706.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77708){
var self__ = this;
var _77708__$1 = this;
return self__.meta77707;
}));

(com.rpl.specter.t_com$rpl$specter77706.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77706.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return com.rpl.specter.navs.all_select(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter77706.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
}));

(com.rpl.specter.t_com$rpl$specter77706.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77707","meta77707",-1855857362,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77706.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77706.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77706");

(com.rpl.specter.t_com$rpl$specter77706.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77706");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77706.
 */
com.rpl.specter.__GT_t_com$rpl$specter77706 = (function com$rpl$specter$__GT_t_com$rpl$specter77706(meta77707){
return (new com.rpl.specter.t_com$rpl$specter77706(meta77707));
});




com.rpl.specter.ALL_WITH_META_select_STAR_ = (function com$rpl$specter$ALL_WITH_META_select_STAR_(structure,next_fn){
return com.rpl.specter.navs.all_select(structure,next_fn);
});

com.rpl.specter.ALL_WITH_META_transform_STAR_ = (function com$rpl$specter$ALL_WITH_META_transform_STAR_(structure,next_fn){
var m = cljs.core.meta(structure);
var res = com.rpl.specter.navs.all_transform(structure,next_fn);
if((!((res == null)))){
return cljs.core.with_meta(res,m);
} else {
return null;
}
});

/**
 * Same as ALL, except maintains metadata on the structure.
 */
com.rpl.specter.ALL_WITH_META = (new com.rpl.specter.t_com$rpl$specter77706(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77709 = (function (meta77710){
this.meta77710 = meta77710;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77709.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77711,meta77710__$1){
var self__ = this;
var _77711__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77709(meta77710__$1));
}));

(com.rpl.specter.t_com$rpl$specter77709.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77711){
var self__ = this;
var _77711__$1 = this;
return self__.meta77710;
}));

(com.rpl.specter.t_com$rpl$specter77709.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77709.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__72714__auto__,v){
var ret__72715__auto__ = next_fn(v);
if((ret__72715__auto__ === com.rpl.specter.NONE)){
return curr__72714__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__72715__auto__)){
return cljs.core.reduced(ret__72715__auto__);
} else {
return ret__72715__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals(structure));
}));

(com.rpl.specter.t_com$rpl$specter77709.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter77709.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77710","meta77710",-1661809613,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77709.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77709.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77709");

(com.rpl.specter.t_com$rpl$specter77709.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77709");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77709.
 */
com.rpl.specter.__GT_t_com$rpl$specter77709 = (function com$rpl$specter$__GT_t_com$rpl$specter77709(meta77710){
return (new com.rpl.specter.t_com$rpl$specter77709(meta77710));
});




com.rpl.specter.MAP_VALS_select_STAR_ = (function com$rpl$specter$MAP_VALS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__72714__auto__,v){
var ret__72715__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(v) : next_fn.call(null,v));
if((ret__72715__auto__ === com.rpl.specter.NONE)){
return curr__72714__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__72715__auto__)){
return cljs.core.reduced(ret__72715__auto__);
} else {
return ret__72715__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.vals(structure));
});

com.rpl.specter.MAP_VALS_transform_STAR_ = (function com$rpl$specter$MAP_VALS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_vals_transform(structure,next_fn);
});

/**
 * Navigate to each value of the map. This is more efficient than
 *        navigating via [ALL LAST]
 */
com.rpl.specter.MAP_VALS = (new com.rpl.specter.t_com$rpl$specter77709(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77712 = (function (meta77713){
this.meta77713 = meta77713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77714,meta77713__$1){
var self__ = this;
var _77714__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77712(meta77713__$1));
}));

(com.rpl.specter.t_com$rpl$specter77712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77714){
var self__ = this;
var _77714__$1 = this;
return self__.meta77713;
}));

(com.rpl.specter.t_com$rpl$specter77712.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77712.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__72714__auto__,k){
var ret__72715__auto__ = next_fn(k);
if((ret__72715__auto__ === com.rpl.specter.NONE)){
return curr__72714__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__72715__auto__)){
return cljs.core.reduced(ret__72715__auto__);
} else {
return ret__72715__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys(structure));
}));

(com.rpl.specter.t_com$rpl$specter77712.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter77712.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77713","meta77713",-695399492,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77712.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77712.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77712");

(com.rpl.specter.t_com$rpl$specter77712.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77712");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77712.
 */
com.rpl.specter.__GT_t_com$rpl$specter77712 = (function com$rpl$specter$__GT_t_com$rpl$specter77712(meta77713){
return (new com.rpl.specter.t_com$rpl$specter77712(meta77713));
});




com.rpl.specter.MAP_KEYS_select_STAR_ = (function com$rpl$specter$MAP_KEYS_select_STAR_(structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__72714__auto__,k){
var ret__72715__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(k) : next_fn.call(null,k));
if((ret__72715__auto__ === com.rpl.specter.NONE)){
return curr__72714__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__72715__auto__)){
return cljs.core.reduced(ret__72715__auto__);
} else {
return ret__72715__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.keys(structure));
});

com.rpl.specter.MAP_KEYS_transform_STAR_ = (function com$rpl$specter$MAP_KEYS_transform_STAR_(structure,next_fn){
return com.rpl.specter.navs.map_keys_transform(structure,next_fn);
});

/**
 * Navigate to each key of the map. This is more efficient than
 *        navigating via [ALL FIRST]
 */
com.rpl.specter.MAP_KEYS = (new com.rpl.specter.t_com$rpl$specter77712(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77715 = (function (meta77716){
this.meta77716 = meta77716;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77717,meta77716__$1){
var self__ = this;
var _77717__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77715(meta77716__$1));
}));

(com.rpl.specter.t_com$rpl$specter77715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77717){
var self__ = this;
var _77717__$1 = this;
return self__.meta77716;
}));

(com.rpl.specter.t_com$rpl$specter77715.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77715.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__76660__auto__,vals__76661__auto__,structure,next_fn__76662__auto__){
var self__ = this;
var this__76660__auto____$1 = this;
var G__77718 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__76661__auto__,structure);
var G__77719 = structure;
return (next_fn__76662__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__76662__auto__.cljs$core$IFn$_invoke$arity$2(G__77718,G__77719) : next_fn__76662__auto__.call(null,G__77718,G__77719));
}));

(com.rpl.specter.t_com$rpl$specter77715.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__76660__auto__,vals__76661__auto__,structure,next_fn__76662__auto__){
var self__ = this;
var this__76660__auto____$1 = this;
var G__77720 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__76661__auto__,structure);
var G__77721 = structure;
return (next_fn__76662__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__76662__auto__.cljs$core$IFn$_invoke$arity$2(G__77720,G__77721) : next_fn__76662__auto__.call(null,G__77720,G__77721));
}));

(com.rpl.specter.t_com$rpl$specter77715.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77716","meta77716",414493271,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77715.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77715.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77715");

(com.rpl.specter.t_com$rpl$specter77715.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77715");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77715.
 */
com.rpl.specter.__GT_t_com$rpl$specter77715 = (function com$rpl$specter$__GT_t_com$rpl$specter77715(meta77716){
return (new com.rpl.specter.t_com$rpl$specter77715(meta77716));
});


com.rpl.specter.VAL = (new com.rpl.specter.t_com$rpl$specter77715(null));
/**
 * Navigate to the last element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.LAST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last) : com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_last,com.rpl.specter.navs.update_last));
/**
 * Navigate to the first element of the collection. If the collection is
 *        empty navigation is stopped at this point.
 */
com.rpl.specter.FIRST = (com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.navs.PosNavigator.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first) : com.rpl.specter.navs.PosNavigator.call(null,com.rpl.specter.navs.get_first,com.rpl.specter.navs.update_first));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77726 = (function (start_index_fn,end_index_fn,meta77727){
this.start_index_fn = start_index_fn;
this.end_index_fn = end_index_fn;
this.meta77727 = meta77727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77728,meta77727__$1){
var self__ = this;
var _77728__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77726(self__.start_index_fn,self__.end_index_fn,meta77727__$1));
}));

(com.rpl.specter.t_com$rpl$specter77726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77728){
var self__ = this;
var _77728__$1 = this;
return self__.meta77727;
}));

(com.rpl.specter.t_com$rpl$specter77726.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77726.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s),next_fn);
}));

(com.rpl.specter.t_com$rpl$specter77726.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
var s = (self__.start_index_fn.cljs$core$IFn$_invoke$arity$1 ? self__.start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.start_index_fn.call(null,structure));
var G__77729 = structure;
var G__77730 = s;
var G__77731 = com.rpl.specter.navs.invoke_end_fn(self__.end_index_fn,structure,s);
var G__77732 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__77729,G__77730,G__77731,G__77732) : com.rpl.specter.navs.srange_transform.call(null,G__77729,G__77730,G__77731,G__77732));
}));

(com.rpl.specter.t_com$rpl$specter77726.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start-index-fn","start-index-fn",-344842645,null),new cljs.core.Symbol(null,"end-index-fn","end-index-fn",1237092062,null),new cljs.core.Symbol(null,"meta77727","meta77727",573993971,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77726.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77726.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77726");

(com.rpl.specter.t_com$rpl$specter77726.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77726");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77726.
 */
com.rpl.specter.__GT_t_com$rpl$specter77726 = (function com$rpl$specter$__GT_t_com$rpl$specter77726(start_index_fn,end_index_fn,meta77727){
return (new com.rpl.specter.t_com$rpl$specter77726(start_index_fn,end_index_fn,meta77727));
});




com.rpl.specter.srange_dynamic_select_STAR_ = (function com$rpl$specter$srange_dynamic_select_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null,structure));
return com.rpl.specter.navs.srange_select(structure,s,com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s),next_fn);
});

com.rpl.specter.srange_dynamic_transform_STAR_ = (function com$rpl$specter$srange_dynamic_transform_STAR_(start_index_fn,end_index_fn,structure,next_fn){
var s = (start_index_fn.cljs$core$IFn$_invoke$arity$1 ? start_index_fn.cljs$core$IFn$_invoke$arity$1(structure) : start_index_fn.call(null,structure));
var G__77722 = structure;
var G__77723 = s;
var G__77724 = com.rpl.specter.navs.invoke_end_fn(end_index_fn,structure,s);
var G__77725 = next_fn;
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(G__77722,G__77723,G__77724,G__77725) : com.rpl.specter.navs.srange_transform.call(null,G__77722,G__77723,G__77724,G__77725));
});

/**
 * Uses start-index-fn and end-index-fn to determine the bounds of the subsequence
 *        to select when navigating. `start-index-fn` takes in the structure as input. `end-index-fn`
 *        can be one of two forms. If a regular function (e.g. defined with `fn`), it takes in only the structure as input. If a function defined using special `end-fn` macro, it takes in the structure and the result of `start-index-fn`.
 */
com.rpl.specter.srange_dynamic = com.rpl.specter.impl.direct_nav_obj((function (start_index_fn,end_index_fn){
return (new com.rpl.specter.t_com$rpl$specter77726(start_index_fn,end_index_fn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77733 = (function (start,end,meta77734){
this.start = start;
this.end = end;
this.meta77734 = meta77734;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77733.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77735,meta77734__$1){
var self__ = this;
var _77735__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77733(self__.start,self__.end,meta77734__$1));
}));

(com.rpl.specter.t_com$rpl$specter77733.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77735){
var self__ = this;
var _77735__$1 = this;
return self__.meta77734;
}));

(com.rpl.specter.t_com$rpl$specter77733.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77733.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return com.rpl.specter.navs.srange_select(structure,self__.start,self__.end,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter77733.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,self__.start,self__.end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,self__.start,self__.end,next_fn));
}));

(com.rpl.specter.t_com$rpl$specter77733.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"meta77734","meta77734",-1423983646,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77733.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77733.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77733");

(com.rpl.specter.t_com$rpl$specter77733.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77733");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77733.
 */
com.rpl.specter.__GT_t_com$rpl$specter77733 = (function com$rpl$specter$__GT_t_com$rpl$specter77733(start,end,meta77734){
return (new com.rpl.specter.t_com$rpl$specter77733(start,end,meta77734));
});




com.rpl.specter.srange_select_STAR_ = (function com$rpl$specter$srange_select_STAR_(start,end,structure,next_fn){
return com.rpl.specter.navs.srange_select(structure,start,end,next_fn);
});

com.rpl.specter.srange_transform_STAR_ = (function com$rpl$specter$srange_transform_STAR_(start,end,structure,next_fn){
return (com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4 ? com.rpl.specter.navs.srange_transform.cljs$core$IFn$_invoke$arity$4(structure,start,end,next_fn) : com.rpl.specter.navs.srange_transform.call(null,structure,start,end,next_fn));
});

/**
 * Navigates to the subsequence bound by the indexes start (inclusive)
 *        and end (exclusive)
 */
com.rpl.specter.srange = com.rpl.specter.impl.direct_nav_obj((function (start,end){
return (new com.rpl.specter.t_com$rpl$specter77733(start,end,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77740 = (function (pred,meta77741){
this.pred = pred;
this.meta77741 = meta77741;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77740.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77742,meta77741__$1){
var self__ = this;
var _77742__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77740(self__.pred,meta77741__$1));
}));

(com.rpl.specter.t_com$rpl$specter77740.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77742){
var self__ = this;
var _77742__$1 = this;
return self__.meta77741;
}));

(com.rpl.specter.t_com$rpl$specter77740.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77740.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__72714__auto__,p__77743){
var vec__77744 = p__77743;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77744,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77744,(1),null);
var ret__72715__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__72715__auto__ === com.rpl.specter.NONE)){
return curr__72714__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__72715__auto__)){
return cljs.core.reduced(ret__72715__auto__);
} else {
return ret__72715__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,self__.pred));
}));

(com.rpl.specter.t_com$rpl$specter77740.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(self__.pred,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter77740.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"meta77741","meta77741",1847607454,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77740.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77740.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77740");

(com.rpl.specter.t_com$rpl$specter77740.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77740");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77740.
 */
com.rpl.specter.__GT_t_com$rpl$specter77740 = (function com$rpl$specter$__GT_t_com$rpl$specter77740(pred,meta77741){
return (new com.rpl.specter.t_com$rpl$specter77740(pred,meta77741));
});




com.rpl.specter.continuous_subseqs_select_STAR_ = (function com$rpl$specter$continuous_subseqs_select_STAR_(pred,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__72714__auto__,p__77736){
var vec__77737 = p__77736;
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77737,(0),null);
var e = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77737,(1),null);
var ret__72715__auto__ = com.rpl.specter.navs.srange_select(structure,s,e,next_fn);
if((ret__72715__auto__ === com.rpl.specter.NONE)){
return curr__72714__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__72715__auto__)){
return cljs.core.reduced(ret__72715__auto__);
} else {
return ret__72715__auto__;
}
}
}),com.rpl.specter.NONE,com.rpl.specter.impl.matching_ranges(structure,pred));
});

com.rpl.specter.continuous_subseqs_transform_STAR_ = (function com$rpl$specter$continuous_subseqs_transform_STAR_(pred,structure,next_fn){
return com.rpl.specter.impl.continuous_subseqs_transform_STAR_(pred,structure,next_fn);
});

/**
 * Navigates to every continuous subsequence of elements matching `pred`
 */
com.rpl.specter.continuous_subseqs = com.rpl.specter.impl.direct_nav_obj((function (pred){
return (new com.rpl.specter.t_com$rpl$specter77740(pred,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77749 = (function (meta77750){
this.meta77750 = meta77750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77751,meta77750__$1){
var self__ = this;
var _77751__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77749(meta77750__$1));
}));

(com.rpl.specter.t_com$rpl$specter77749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77751){
var self__ = this;
var _77751__$1 = this;
return self__.meta77750;
}));

(com.rpl.specter.t_com$rpl$specter77749.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77749.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter77749.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn("")),structure].join('');
} else {
var to_prepend = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
}));

(com.rpl.specter.t_com$rpl$specter77749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77750","meta77750",783892358,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77749.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77749.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77749");

(com.rpl.specter.t_com$rpl$specter77749.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77749");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77749.
 */
com.rpl.specter.__GT_t_com$rpl$specter77749 = (function com$rpl$specter$__GT_t_com$rpl$specter77749(meta77750){
return (new com.rpl.specter.t_com$rpl$specter77749(meta77750));
});




com.rpl.specter.BEGINNING_select_STAR_ = (function com$rpl$specter$BEGINNING_select_STAR_(structure,next_fn){
var G__77747 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__77747) : next_fn.call(null,G__77747));
});

com.rpl.specter.BEGINNING_transform_STAR_ = (function com$rpl$specter$BEGINNING_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,""))),structure].join('');
} else {
var to_prepend = (function (){var G__77748 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__77748) : next_fn.call(null,G__77748));
})();
return com.rpl.specter.navs.prepend_all(structure,to_prepend);
}
});

/**
 * Navigate to the empty subsequence before the first element of the collection.
 */
com.rpl.specter.BEGINNING = (new com.rpl.specter.t_com$rpl$specter77749(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77754 = (function (meta77755){
this.meta77755 = meta77755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77756,meta77755__$1){
var self__ = this;
var _77756__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77754(meta77755__$1));
}));

(com.rpl.specter.t_com$rpl$specter77754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77756){
var self__ = this;
var _77756__$1 = this;
return self__.meta77755;
}));

(com.rpl.specter.t_com$rpl$specter77754.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77754.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return next_fn(((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY));
}));

(com.rpl.specter.t_com$rpl$specter77754.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_fn(""))].join('');
} else {
var to_append = next_fn(cljs.core.PersistentVector.EMPTY);
return com.rpl.specter.navs.append_all(structure,to_append);
}
}));

(com.rpl.specter.t_com$rpl$specter77754.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77755","meta77755",-648545616,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77754.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77754.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77754");

(com.rpl.specter.t_com$rpl$specter77754.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77754");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77754.
 */
com.rpl.specter.__GT_t_com$rpl$specter77754 = (function com$rpl$specter$__GT_t_com$rpl$specter77754(meta77755){
return (new com.rpl.specter.t_com$rpl$specter77754(meta77755));
});




com.rpl.specter.END_select_STAR_ = (function com$rpl$specter$END_select_STAR_(structure,next_fn){
var G__77752 = ((typeof structure === 'string')?"":cljs.core.PersistentVector.EMPTY);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__77752) : next_fn.call(null,G__77752));
});

com.rpl.specter.END_transform_STAR_ = (function com$rpl$specter$END_transform_STAR_(structure,next_fn){
if(typeof structure === 'string'){
return [structure,cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1("") : next_fn.call(null,"")))].join('');
} else {
var to_append = (function (){var G__77753 = cljs.core.PersistentVector.EMPTY;
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__77753) : next_fn.call(null,G__77753));
})();
return com.rpl.specter.navs.append_all(structure,to_append);
}
});

/**
 * Navigate to the empty subsequence after the last element of the collection.
 */
com.rpl.specter.END = (new com.rpl.specter.t_com$rpl$specter77754(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77757 = (function (meta77758){
this.meta77758 = meta77758;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77757.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77759,meta77758__$1){
var self__ = this;
var _77759__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77757(meta77758__$1));
}));

(com.rpl.specter.t_com$rpl$specter77757.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77759){
var self__ = this;
var _77759__$1 = this;
return self__.meta77758;
}));

(com.rpl.specter.t_com$rpl$specter77757.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77757.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter77757.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
}));

(com.rpl.specter.t_com$rpl$specter77757.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77758","meta77758",-28068689,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77757.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77757.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77757");

(com.rpl.specter.t_com$rpl$specter77757.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77757");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77757.
 */
com.rpl.specter.__GT_t_com$rpl$specter77757 = (function com$rpl$specter$__GT_t_com$rpl$specter77757(meta77758){
return (new com.rpl.specter.t_com$rpl$specter77757(meta77758));
});




com.rpl.specter.NONE_ELEM_select_STAR_ = (function com$rpl$specter$NONE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.NONE_ELEM_transform_STAR_ = (function com$rpl$specter$NONE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
if((structure == null)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([newe]);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(structure,newe);
}
}
});

/**
 * Navigate to 'void' elem in the set.
 *        For transformations - if result is not `NONE`,
 *        then add that value to the set.
 */
com.rpl.specter.NONE_ELEM = (new com.rpl.specter.t_com$rpl$specter77757(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77760 = (function (meta77761){
this.meta77761 = meta77761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77762,meta77761__$1){
var self__ = this;
var _77762__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77760(meta77761__$1));
}));

(com.rpl.specter.t_com$rpl$specter77760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77762){
var self__ = this;
var _77762__$1 = this;
return self__.meta77761;
}));

(com.rpl.specter.t_com$rpl$specter77760.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77760.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter77760.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter77760.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77761","meta77761",2038450014,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77760.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77760.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77760");

(com.rpl.specter.t_com$rpl$specter77760.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77760");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77760.
 */
com.rpl.specter.__GT_t_com$rpl$specter77760 = (function com$rpl$specter$__GT_t_com$rpl$specter77760(meta77761){
return (new com.rpl.specter.t_com$rpl$specter77760(meta77761));
});




com.rpl.specter.BEFORE_ELEM_select_STAR_ = (function com$rpl$specter$BEFORE_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.BEFORE_ELEM_transform_STAR_ = (function com$rpl$specter$BEFORE_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.prepend_one(structure,newe);
}
});

/**
 * Navigate to 'void' element before the sequence.
 *        For transformations – if result is not `NONE`,
 *        then prepend that value.
 */
com.rpl.specter.BEFORE_ELEM = (new com.rpl.specter.t_com$rpl$specter77760(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77763 = (function (meta77764){
this.meta77764 = meta77764;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77763.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77765,meta77764__$1){
var self__ = this;
var _77765__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77763(meta77764__$1));
}));

(com.rpl.specter.t_com$rpl$specter77763.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77765){
var self__ = this;
var _77765__$1 = this;
return self__.meta77764;
}));

(com.rpl.specter.t_com$rpl$specter77763.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77763.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return next_fn(com.rpl.specter.NONE);
}));

(com.rpl.specter.t_com$rpl$specter77763.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
var newe = next_fn(com.rpl.specter.NONE);
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
}));

(com.rpl.specter.t_com$rpl$specter77763.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77764","meta77764",-1833383292,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77763.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77763.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77763");

(com.rpl.specter.t_com$rpl$specter77763.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77763");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77763.
 */
com.rpl.specter.__GT_t_com$rpl$specter77763 = (function com$rpl$specter$__GT_t_com$rpl$specter77763(meta77764){
return (new com.rpl.specter.t_com$rpl$specter77763(meta77764));
});




com.rpl.specter.AFTER_ELEM_select_STAR_ = (function com$rpl$specter$AFTER_ELEM_select_STAR_(structure,next_fn){
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
});

com.rpl.specter.AFTER_ELEM_transform_STAR_ = (function com$rpl$specter$AFTER_ELEM_transform_STAR_(structure,next_fn){
var newe = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.NONE) : next_fn.call(null,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === newe)){
return structure;
} else {
return com.rpl.specter.navs.append_one(structure,newe);
}
});

/**
 * Navigate to 'void' element after the sequence.
 *        For transformations – if result is not `NONE`,
 *        then append that value.
 */
com.rpl.specter.AFTER_ELEM = (new com.rpl.specter.t_com$rpl$specter77763(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77767 = (function (aset,meta77768){
this.aset = aset;
this.meta77768 = meta77768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77769,meta77768__$1){
var self__ = this;
var _77769__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77767(self__.aset,meta77768__$1));
}));

(com.rpl.specter.t_com$rpl$specter77767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77769){
var self__ = this;
var _77769__$1 = this;
return self__.meta77768;
}));

(com.rpl.specter.t_com$rpl$specter77767.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77767.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return next_fn(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset));
}));

(com.rpl.specter.t_com$rpl$specter77767.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,self__.aset);
var newset = next_fn(subset);
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
}));

(com.rpl.specter.t_com$rpl$specter77767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"aset","aset",900773178,null),new cljs.core.Symbol(null,"meta77768","meta77768",258868081,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77767.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77767.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77767");

(com.rpl.specter.t_com$rpl$specter77767.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77767");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77767.
 */
com.rpl.specter.__GT_t_com$rpl$specter77767 = (function com$rpl$specter$__GT_t_com$rpl$specter77767(aset,meta77768){
return (new com.rpl.specter.t_com$rpl$specter77767(aset,meta77768));
});




com.rpl.specter.subset_select_STAR_ = (function com$rpl$specter$subset_select_STAR_(aset,structure,next_fn){
var G__77766 = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__77766) : next_fn.call(null,G__77766));
});

com.rpl.specter.subset_transform_STAR_ = (function com$rpl$specter$subset_transform_STAR_(aset,structure,next_fn){
var subset = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(structure,aset);
var newset = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(subset) : next_fn.call(null,subset));
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(structure,subset),newset);
});

/**
 * Navigates to the specified subset (by taking an intersection).
 *        In a transform, that subset in the original set is changed to the
 *        new value of the subset.
 */
com.rpl.specter.subset = com.rpl.specter.impl.direct_nav_obj((function (aset){
return (new com.rpl.specter.t_com$rpl$specter77767(aset,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77771 = (function (m_keys,meta77772){
this.m_keys = m_keys;
this.meta77772 = meta77772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77773,meta77772__$1){
var self__ = this;
var _77773__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77771(self__.m_keys,meta77772__$1));
}));

(com.rpl.specter.t_com$rpl$specter77771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77773){
var self__ = this;
var _77773__$1 = this;
return self__.meta77772;
}));

(com.rpl.specter.t_com$rpl$specter77771.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77771.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return next_fn(cljs.core.select_keys(structure,self__.m_keys));
}));

(com.rpl.specter.t_com$rpl$specter77771.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
var submap = cljs.core.select_keys(structure,self__.m_keys);
var newmap = next_fn(submap);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,self__.m_keys),newmap], 0));
}));

(com.rpl.specter.t_com$rpl$specter77771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m-keys","m-keys",-197459035,null),new cljs.core.Symbol(null,"meta77772","meta77772",1346424535,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77771.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77771.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77771");

(com.rpl.specter.t_com$rpl$specter77771.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77771");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77771.
 */
com.rpl.specter.__GT_t_com$rpl$specter77771 = (function com$rpl$specter$__GT_t_com$rpl$specter77771(m_keys,meta77772){
return (new com.rpl.specter.t_com$rpl$specter77771(m_keys,meta77772));
});




com.rpl.specter.submap_select_STAR_ = (function com$rpl$specter$submap_select_STAR_(m_keys,structure,next_fn){
var G__77770 = cljs.core.select_keys(structure,m_keys);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__77770) : next_fn.call(null,G__77770));
});

com.rpl.specter.submap_transform_STAR_ = (function com$rpl$specter$submap_transform_STAR_(m_keys,structure,next_fn){
var submap = cljs.core.select_keys(structure,m_keys);
var newmap = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(submap) : next_fn.call(null,submap));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,structure,m_keys),newmap], 0));
});

/**
 * Navigates to the specified submap (using select-keys).
 *        In a transform, that submap in the original map is changed to the new
 *        value of the submap.
 */
com.rpl.specter.submap = com.rpl.specter.impl.direct_nav_obj((function (m_keys){
return (new com.rpl.specter.t_com$rpl$specter77771(m_keys,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77774 = (function (path,late,meta77775){
this.path = path;
this.late = late;
this.meta77775 = meta77775;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77774.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77776,meta77775__$1){
var self__ = this;
var _77776__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77774(self__.path,self__.late,meta77775__$1));
}));

(com.rpl.specter.t_com$rpl$specter77774.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77776){
var self__ = this;
var _77776__$1 = this;
return self__.meta77775;
}));

(com.rpl.specter.t_com$rpl$specter77774.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77774.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return next_fn((com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
}));

(com.rpl.specter.t_com$rpl$specter77774.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
var select_result = (com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure));
var transformed = next_fn(select_result);
var values_to_insert = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(transformed));
var G__77777 = self__.late;
var G__77778 = (function (_){
var vs = com.rpl.specter.impl.get_cell(values_to_insert);
if(cljs.core.truth_(vs)){
com.rpl.specter.impl.update_cell_BANG_(values_to_insert,cljs.core.next);

return cljs.core.first(vs);
} else {
return com.rpl.specter.NONE;
}
});
var G__77779 = structure;
return (com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(G__77777,G__77778,G__77779) : com.rpl.specter.compiled_transform.call(null,G__77777,G__77778,G__77779));
}));

(com.rpl.specter.t_com$rpl$specter77774.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta77775","meta77775",-843597705,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77774.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77774.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77774");

(com.rpl.specter.t_com$rpl$specter77774.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77774");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77774.
 */
com.rpl.specter.__GT_t_com$rpl$specter77774 = (function com$rpl$specter$__GT_t_com$rpl$specter77774(path,late,meta77775){
return (new com.rpl.specter.t_com$rpl$specter77774(path,late,meta77775));
});


/**
 * Navigates to a sequence that contains the results of (select ...),
 *   but is a view to the original structure that can be transformed.
 * 
 *   Requires that the input navigators will walk the structure's
 *   children in the same order when executed on "select" and then
 *   "transform".
 * 
 *   If transformed sequence is smaller than input sequence, missing entries
 *   will be filled in with NONE, triggering removal if supported by that navigator.
 * 
 *   Value collection (e.g. collect, collect-one) may not be used in the subpath.
 */
com.rpl.specter.subselect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__78039__delegate = function (path){
var builder__76663__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter77774(path,late,null));
}));
var curr_params__76664__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__76664__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__76663__auto__,curr_params__76664__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__76663__auto__,curr_params__76664__auto__,null);
}
};
var G__78039 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__78040__i = 0, G__78040__a = new Array(arguments.length -  0);
while (G__78040__i < G__78040__a.length) {G__78040__a[G__78040__i] = arguments[G__78040__i + 0]; ++G__78040__i;}
  path = new cljs.core.IndexedSeq(G__78040__a,0,null);
} 
return G__78039__delegate.call(this,path);};
G__78039.cljs$lang$maxFixedArity = 0;
G__78039.cljs$lang$applyTo = (function (arglist__78041){
var path = cljs.core.seq(arglist__78041);
return G__78039__delegate(path);
});
G__78039.cljs$core$IFn$_invoke$arity$variadic = G__78039__delegate;
return G__78039;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77780 = (function (key,meta77781){
this.key = key;
this.meta77781 = meta77781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77782,meta77781__$1){
var self__ = this;
var _77782__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77780(self__.key,meta77781__$1));
}));

(com.rpl.specter.t_com$rpl$specter77780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77782){
var self__ = this;
var _77782__$1 = this;
return self__.meta77781;
}));

(com.rpl.specter.t_com$rpl$specter77780.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77780.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter77780.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.key)){
var newkey = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.key) : next_fn.call(null,vals,self__.key));
var dissoced = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(structure,self__.key);
if((com.rpl.specter.NONE === newkey)){
return dissoced;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dissoced,newkey,cljs.core.get.cljs$core$IFn$_invoke$arity$2(structure,self__.key));
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter77780.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"meta77781","meta77781",1660229849,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77780.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77780.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77780");

(com.rpl.specter.t_com$rpl$specter77780.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77780");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77780.
 */
com.rpl.specter.__GT_t_com$rpl$specter77780 = (function com$rpl$specter$__GT_t_com$rpl$specter77780(key,meta77781){
return (new com.rpl.specter.t_com$rpl$specter77780(key,meta77781));
});


/**
 * Navigates to the given key in the map (not to the value). Navigates only if the
 *        key currently exists in the map. Can transform to NONE to remove the key/value
 *        pair from the map.
 */
com.rpl.specter.map_key = com.rpl.specter.impl.direct_nav_obj((function (key){
return (new com.rpl.specter.t_com$rpl$specter77780(key,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77783 = (function (elem,meta77784){
this.elem = elem;
this.meta77784 = meta77784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77785,meta77784__$1){
var self__ = this;
var _77785__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77783(self__.elem,meta77784__$1));
}));

(com.rpl.specter.t_com$rpl$specter77783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77785){
var self__ = this;
var _77785__$1 = this;
return self__.meta77784;
}));

(com.rpl.specter.t_com$rpl$specter77783.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77783.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter77783.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if(cljs.core.contains_QMARK_(structure,self__.elem)){
var newelem = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.elem) : next_fn.call(null,vals,self__.elem));
var removed = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(structure,self__.elem);
if((com.rpl.specter.NONE === newelem)){
return removed;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(removed,newelem);
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter77783.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"meta77784","meta77784",-777479972,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77783.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77783.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77783");

(com.rpl.specter.t_com$rpl$specter77783.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77783");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77783.
 */
com.rpl.specter.__GT_t_com$rpl$specter77783 = (function com$rpl$specter$__GT_t_com$rpl$specter77783(elem,meta77784){
return (new com.rpl.specter.t_com$rpl$specter77783(elem,meta77784));
});


/**
 * Navigates to the given element in the set only if it exists in the set.
 *        Can transform to NONE to remove the element from the set.
 */
com.rpl.specter.set_elem = com.rpl.specter.impl.direct_nav_obj((function (elem){
return (new com.rpl.specter.t_com$rpl$specter77783(elem,null));
}));
/**
 * Navigate to the specified keys one after another. If navigate to NONE,
 *           that element is removed from the map or vector.
 */
com.rpl.specter.keypath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.keypath_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.keypath_STAR_));
/**
 * Navigate to the specified keys one after another, only if they exist
 *           in the data structure. If navigate to NONE, that element is removed
 *           from the map or vector.
 */
com.rpl.specter.must = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.must_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.must_STAR_));
/**
 * Navigate to the specified indices one after another. If navigate to
 *          NONE, that element is removed from the sequence.
 */
com.rpl.specter.nthpath = (com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.eachnav.cljs$core$IFn$_invoke$arity$1(com.rpl.specter.navs.nthpath_STAR_) : com.rpl.specter.eachnav.call(null,com.rpl.specter.navs.nthpath_STAR_));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77786 = (function (index,meta77787){
this.index = index;
this.meta77787 = meta77787;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77788,meta77787__$1){
var self__ = this;
var _77788__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77786(self__.index,meta77787__$1));
}));

(com.rpl.specter.t_com$rpl$specter77786.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77788){
var self__ = this;
var _77788__$1 = this;
return self__.meta77787;
}));

(com.rpl.specter.t_com$rpl$specter77786.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77786.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.NONE;
}));

(com.rpl.specter.t_com$rpl$specter77786.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var v = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,com.rpl.specter.NONE) : next_fn.call(null,vals,com.rpl.specter.NONE));
if((com.rpl.specter.NONE === v)){
return structure;
} else {
return com.rpl.specter.navs.insert_before_idx(structure,self__.index,v);
}
}));

(com.rpl.specter.t_com$rpl$specter77786.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta77787","meta77787",-353239110,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77786.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77786.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77786");

(com.rpl.specter.t_com$rpl$specter77786.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77786");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77786.
 */
com.rpl.specter.__GT_t_com$rpl$specter77786 = (function com$rpl$specter$__GT_t_com$rpl$specter77786(index,meta77787){
return (new com.rpl.specter.t_com$rpl$specter77786(index,meta77787));
});


/**
 * Navigates to the empty space between the index and the prior index. For select
 *        navigates to NONE, and transforms to non-NONE insert at that position.
 */
com.rpl.specter.before_index = com.rpl.specter.impl.direct_nav_obj((function (index){
return (new com.rpl.specter.t_com$rpl$specter77786(index,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77789 = (function (i,meta77790){
this.i = i;
this.meta77790 = meta77790;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77791,meta77790__$1){
var self__ = this;
var _77791__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77789(self__.i,meta77790__$1));
}));

(com.rpl.specter.t_com$rpl$specter77789.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77791){
var self__ = this;
var _77791__$1 = this;
return self__.meta77790;
}));

(com.rpl.specter.t_com$rpl$specter77789.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77789.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
} else {
return com.rpl.specter.NONE;
}
}));

(com.rpl.specter.t_com$rpl$specter77789.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
if((((self__.i >= (0))) && ((self__.i < cljs.core.count(structure))))){
var newi = (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,self__.i) : next_fn.call(null,vals,self__.i));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(newi,self__.i)){
return structure;
} else {
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(structure,self__.i);
if(cljs.core.vector_QMARK_(structure)){
var shifted = (((newi < self__.i))?(function (){var j = (self__.i - (1));
var s = structure;
while(true){
if((j < newi)){
return s;
} else {
var G__78046 = (j - (1));
var G__78047 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j + (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__78046;
s = G__78047;
continue;
}
break;
}
})():(function (){var j = (self__.i + (1));
var s = structure;
while(true){
if((j > newi)){
return s;
} else {
var G__78048 = (j + (1));
var G__78049 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,(j - (1)),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(s,j));
j = G__78048;
s = G__78049;
continue;
}
break;
}
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shifted,newi,v);
} else {
return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__76670__auto__ = com.rpl.specter.pathcache77792;
var info__76670__auto____$1 = (((info__76670__auto__ == null))?(function (){var info77793 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.before_index,new cljs.core.Var(function(){return com.rpl.specter.before_index;},new cljs.core.Symbol("com.rpl.specter","before-index","com.rpl.specter/before-index",1952616274,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),"com/rpl/specter.cljc",15,1,1004,1007,cljs.core.List.EMPTY,"Navigates to the empty space between the index and the prior index. For select\n          navigates to NONE, and transforms to non-NONE insert at that position.",(cljs.core.truth_(com.rpl.specter.before_index)?com.rpl.specter.before_index.cljs$lang$test:null)])),new cljs.core.Symbol(null,"before-index","before-index",-407870261,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(newi,new cljs.core.Symbol(null,"newi","newi",857919881,null))], null),cljs.core.list(new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"before-index","before-index",-407870261,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null));
com.rpl.specter.pathcache77792 = info77793;

return info77793;
})():info__76670__auto__);
var precompiled77794 = com.rpl.specter.impl.cached_path_info_precompiled(info__76670__auto____$1);
var dynamic_QMARK___76671__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__76670__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___76671__auto__)){
var G__77795 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.before_index,newi], null);
return (precompiled77794.cljs$core$IFn$_invoke$arity$1 ? precompiled77794.cljs$core$IFn$_invoke$arity$1(G__77795) : precompiled77794.call(null,G__77795));
} else {
return precompiled77794;
}
})(),v,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__76670__auto__ = com.rpl.specter.pathcache77796;
var info__76670__auto____$1 = (((info__76670__auto__ == null))?(function (){var info77797 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,999,1001,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(self__.i,new cljs.core.Symbol(null,"i","i",253690212,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"i","i",253690212,null)], null));
com.rpl.specter.pathcache77796 = info77797;

return info77797;
})():info__76670__auto__);
var precompiled77798 = com.rpl.specter.impl.cached_path_info_precompiled(info__76670__auto____$1);
var dynamic_QMARK___76671__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__76670__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___76671__auto__)){
var G__77799 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,self__.i], null);
return (precompiled77798.cljs$core$IFn$_invoke$arity$1 ? precompiled77798.cljs$core$IFn$_invoke$arity$1(G__77799) : precompiled77798.call(null,G__77799));
} else {
return precompiled77798;
}
})(),com.rpl.specter.NONE,structure));
}
}
} else {
return structure;
}
}));

(com.rpl.specter.t_com$rpl$specter77789.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"i","i",253690212,null),new cljs.core.Symbol(null,"meta77790","meta77790",-2053912952,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77789.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77789.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77789");

(com.rpl.specter.t_com$rpl$specter77789.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77789");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77789.
 */
com.rpl.specter.__GT_t_com$rpl$specter77789 = (function com$rpl$specter$__GT_t_com$rpl$specter77789(i,meta77790){
return (new com.rpl.specter.t_com$rpl$specter77789(i,meta77790));
});


/**
 * Navigates to the index of the sequence if within 0 and size. Transforms move element
 *        at that index to the new index, shifting other elements in the sequence.
 */
com.rpl.specter.index_nav = com.rpl.specter.impl.direct_nav_obj((function (i){
return (new com.rpl.specter.t_com$rpl$specter77789(i,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77819 = (function (start,meta77820){
this.start = start;
this.meta77820 = meta77820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77821,meta77820__$1){
var self__ = this;
var _77821__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77819(self__.start,meta77820__$1));
}));

(com.rpl.specter.t_com$rpl$specter77819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77821){
var self__ = this;
var _77821__$1 = this;
return self__.meta77820;
}));

(com.rpl.specter.t_com$rpl$specter77819.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77819.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((self__.start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__72714__auto__,e){
var ret__72715__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

return next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null));
})()
;
if((ret__72715__auto__ === com.rpl.specter.NONE)){
return curr__72714__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__72715__auto__)){
return cljs.core.reduced(ret__72715__auto__);
} else {
return ret__72715__auto__;
}
}
}),com.rpl.specter.NONE,structure);
}));

(com.rpl.specter.t_com$rpl$specter77819.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__77822 = next_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(self__.start + curri),e], null));
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77822,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77822,(1),null);
var newi = (newi_STAR_ - self__.start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__76670__auto__ = com.rpl.specter.pathcache77825;
var info__76670__auto____$1 = (((info__76670__auto__ == null))?(function (){var info77826 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,715,718,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__77800_SHARP_){
return (p1__77800_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__77800#","p1__77800#",-693489889,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__77800#","p1__77800#",-693489889,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__77801_SHARP_){
return (p1__77801_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__77801#","p1__77801#",1924375986,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__77801#","p1__77801#",1924375986,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__77800#","p1__77800#",-693489889,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__77800#","p1__77800#",-693489889,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__77801#","p1__77801#",1924375986,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__77801#","p1__77801#",1924375986,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__77800#","p1__77800#",-693489889,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__77800#","p1__77800#",-693489889,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__77801#","p1__77801#",1924375986,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__77801#","p1__77801#",1924375986,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache77825 = info77826;

return info77826;
})():info__76670__auto__);
var precompiled77827 = com.rpl.specter.impl.cached_path_info_precompiled(info__76670__auto____$1);
var dynamic_QMARK___76671__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__76670__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___76671__auto__)){
var G__77828 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__77800_SHARP_){
return (p1__77800_SHARP_ >= (curri + (1)));
}),(function (p1__77801_SHARP_){
return (p1__77801_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__77800_SHARP_){
return (p1__77800_SHARP_ >= (curri + (1)));
}),(function (p1__77801_SHARP_){
return (p1__77801_SHARP_ <= newi);
})], null);
return (precompiled77827.cljs$core$IFn$_invoke$arity$1 ? precompiled77827.cljs$core$IFn$_invoke$arity$1(G__77828) : precompiled77827.call(null,G__77828));
} else {
return precompiled77827;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__76670__auto__ = com.rpl.specter.pathcache77829;
var info__76670__auto____$1 = (((info__76670__auto__ == null))?(function (){var info77830 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,1018,1021,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache77829 = info77830;

return info77830;
})():info__76670__auto__);
var precompiled77831 = com.rpl.specter.impl.cached_path_info_precompiled(info__76670__auto____$1);
var dynamic_QMARK___76671__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__76670__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___76671__auto__)){
var G__77832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled77831.cljs$core$IFn$_invoke$arity$1 ? precompiled77831.cljs$core$IFn$_invoke$arity$1(G__77832) : precompiled77831.call(null,G__77832));
} else {
return precompiled77831;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__76670__auto__ = com.rpl.specter.pathcache77833;
var info__76670__auto____$1 = (((info__76670__auto__ == null))?(function (){var info77834 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,999,1001,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache77833 = info77834;

return info77834;
})():info__76670__auto__);
var precompiled77835 = com.rpl.specter.impl.cached_path_info_precompiled(info__76670__auto____$1);
var dynamic_QMARK___76671__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__76670__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___76671__auto__)){
var G__77836 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled77835.cljs$core$IFn$_invoke$arity$1 ? precompiled77835.cljs$core$IFn$_invoke$arity$1(G__77836) : precompiled77835.call(null,G__77836));
} else {
return precompiled77835;
}
})(),newe,s));
}),structure,structure);
}));

(com.rpl.specter.t_com$rpl$specter77819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"meta77820","meta77820",1792051888,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77819.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77819.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77819");

(com.rpl.specter.t_com$rpl$specter77819.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77819");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77819.
 */
com.rpl.specter.__GT_t_com$rpl$specter77819 = (function com$rpl$specter$__GT_t_com$rpl$specter77819(start,meta77820){
return (new com.rpl.specter.t_com$rpl$specter77819(start,meta77820));
});




com.rpl.specter.indexed_vals_select_STAR_ = (function com$rpl$specter$indexed_vals_select_STAR_(start,structure,next_fn){
var i = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1((start - (1)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__72714__auto__,e){
var ret__72715__auto__ = (function (){
com.rpl.specter.impl.update_cell_BANG_(i,cljs.core.inc);

var G__77802 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.get_cell(i),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__77802) : next_fn.call(null,G__77802));
})()
;
if((ret__72715__auto__ === com.rpl.specter.NONE)){
return curr__72714__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__72715__auto__)){
return cljs.core.reduced(ret__72715__auto__);
} else {
return ret__72715__auto__;
}
}
}),com.rpl.specter.NONE,structure);
});

com.rpl.specter.indexed_vals_transform_STAR_ = (function com$rpl$specter$indexed_vals_transform_STAR_(start,structure,next_fn){
var indices = com.rpl.specter.impl.mutable_cell.cljs$core$IFn$_invoke$arity$1(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(structure)));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,e){
var curri = cljs.core.first(com.rpl.specter.impl.get_cell(indices));
var vec__77803 = (function (){var G__77806 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(start + curri),e], null);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__77806) : next_fn.call(null,G__77806));
})();
var newi_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77803,(0),null);
var newe = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77803,(1),null);
var newi = (newi_STAR_ - start);
com.rpl.specter.impl.update_cell_BANG_(indices,(function (ii){
var ii2 = cljs.core.next(ii);
if((newi > curri)){
return com.rpl.specter.impl.compiled_transform_STAR_((function (){var info__76670__auto__ = com.rpl.specter.pathcache77807;
var info__76670__auto____$1 = (((info__76670__auto__ == null))?(function (){var info77808 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,715,718,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__77800_SHARP_){
return (p1__77800_SHARP_ >= (curri + (1)));
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__77800#","p1__77800#",-693489889,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__77800#","p1__77800#",-693489889,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null))))),com.rpl.specter.impl.__GT_SpecialFormUse((function (p1__77801_SHARP_){
return (p1__77801_SHARP_ <= newi);
}),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__77801#","p1__77801#",1924375986,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__77801#","p1__77801#",1924375986,null),new cljs.core.Symbol(null,"newi","newi",857919881,null))))], null)], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__77800#","p1__77800#",-693489889,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__77800#","p1__77800#",-693489889,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__77801#","p1__77801#",1924375986,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__77801#","p1__77801#",1924375986,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__77800#","p1__77800#",-693489889,null)], null),cljs.core.list(new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,"p1__77800#","p1__77800#",-693489889,null),cljs.core.list(new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__77801#","p1__77801#",1924375986,null)], null),cljs.core.list(new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"p1__77801#","p1__77801#",1924375986,null),new cljs.core.Symbol(null,"newi","newi",857919881,null)))], null));
com.rpl.specter.pathcache77807 = info77808;

return info77808;
})():info__76670__auto__);
var precompiled77809 = com.rpl.specter.impl.cached_path_info_precompiled(info__76670__auto____$1);
var dynamic_QMARK___76671__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__76670__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___76671__auto__)){
var G__77810 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,(function (p1__77800_SHARP_){
return (p1__77800_SHARP_ >= (curri + (1)));
}),(function (p1__77801_SHARP_){
return (p1__77801_SHARP_ <= newi);
})], null),com.rpl.specter.ALL,(function (p1__77800_SHARP_){
return (p1__77800_SHARP_ >= (curri + (1)));
}),(function (p1__77801_SHARP_){
return (p1__77801_SHARP_ <= newi);
})], null);
return (precompiled77809.cljs$core$IFn$_invoke$arity$1 ? precompiled77809.cljs$core$IFn$_invoke$arity$1(G__77810) : precompiled77809.call(null,G__77810));
} else {
return precompiled77809;
}
})(),cljs.core.dec,ii2);
} else {
return ii2;
}
}));

return com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__76670__auto__ = com.rpl.specter.pathcache77811;
var info__76670__auto____$1 = (((info__76670__auto__ == null))?(function (){var info77812 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.index_nav,new cljs.core.Var(function(){return com.rpl.specter.index_nav;},new cljs.core.Symbol("com.rpl.specter","index-nav","com.rpl.specter/index-nav",2054501071,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),"com/rpl/specter.cljc",12,1,1018,1021,cljs.core.List.EMPTY,"Navigates to the index of the sequence if within 0 and size. Transforms move element\n          at that index to the new index, shifting other elements in the sequence.",(cljs.core.truth_(com.rpl.specter.index_nav)?com.rpl.specter.index_nav.cljs$lang$test:null)])),new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"index-nav","index-nav",-157001568,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache77811 = info77812;

return info77812;
})():info__76670__auto__);
var precompiled77813 = com.rpl.specter.impl.cached_path_info_precompiled(info__76670__auto____$1);
var dynamic_QMARK___76671__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__76670__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___76671__auto__)){
var G__77814 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.index_nav,curri], null);
return (precompiled77813.cljs$core$IFn$_invoke$arity$1 ? precompiled77813.cljs$core$IFn$_invoke$arity$1(G__77814) : precompiled77813.call(null,G__77814));
} else {
return precompiled77813;
}
})(),newi,com.rpl.specter.impl.compiled_setval_STAR_((function (){var info__76670__auto__ = com.rpl.specter.pathcache77815;
var info__76670__auto____$1 = (((info__76670__auto__ == null))?(function (){var info77816 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.nthpath,new cljs.core.Var(function(){return com.rpl.specter.nthpath;},new cljs.core.Symbol("com.rpl.specter","nthpath","com.rpl.specter/nthpath",2085224162,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),"com/rpl/specter.cljc",10,1,999,1001,cljs.core.List.EMPTY,"Navigate to the specified indices one after another. If navigate to\n            NONE, that element is removed from the sequence.",(cljs.core.truth_(com.rpl.specter.nthpath)?com.rpl.specter.nthpath.cljs$lang$test:null)])),new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(curri,new cljs.core.Symbol(null,"curri","curri",347667219,null))], null),cljs.core.list(new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"curri","curri",347667219,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"nthpath","nthpath",-400599909,null),new cljs.core.Symbol(null,"curri","curri",347667219,null)], null));
com.rpl.specter.pathcache77815 = info77816;

return info77816;
})():info__76670__auto__);
var precompiled77817 = com.rpl.specter.impl.cached_path_info_precompiled(info__76670__auto____$1);
var dynamic_QMARK___76671__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__76670__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___76671__auto__)){
var G__77818 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.nthpath,curri], null);
return (precompiled77817.cljs$core$IFn$_invoke$arity$1 ? precompiled77817.cljs$core$IFn$_invoke$arity$1(G__77818) : precompiled77817.call(null,G__77818));
} else {
return precompiled77817;
}
})(),newe,s));
}),structure,structure);
});

/**
 * Navigate to [index elem] pairs for each element in a sequence. The sequence will be indexed
 *        starting from `start`. Changing index in transform has same effect as `index-nav`. Indices seen
 *        during transform take into account any shifting from prior sequence elements changing indices.
 */
com.rpl.specter.indexed_vals = com.rpl.specter.impl.direct_nav_obj((function (start){
return (new com.rpl.specter.t_com$rpl$specter77819(start,null));
}));
/**
 * `indexed-vals` with a starting index of 0.
 */
com.rpl.specter.INDEXED_VALS = (com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.indexed_vals.cljs$core$IFn$_invoke$arity$1((0)) : com.rpl.specter.indexed_vals.call(null,(0)));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77837 = (function (afn,meta77838){
this.afn = afn;
this.meta77838 = meta77838;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77839,meta77838__$1){
var self__ = this;
var _77839__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77837(self__.afn,meta77838__$1));
}));

(com.rpl.specter.t_com$rpl$specter77837.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77839){
var self__ = this;
var _77839__$1 = this;
return self__.meta77838;
}));

(com.rpl.specter.t_com$rpl$specter77837.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77837.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__77840 = vals;
var G__77841 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__77840,G__77841) : next_fn.call(null,G__77840,G__77841));
}));

(com.rpl.specter.t_com$rpl$specter77837.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__77842 = vals;
var G__77843 = (self__.afn.cljs$core$IFn$_invoke$arity$1 ? self__.afn.cljs$core$IFn$_invoke$arity$1(structure) : self__.afn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__77842,G__77843) : next_fn.call(null,G__77842,G__77843));
}));

(com.rpl.specter.t_com$rpl$specter77837.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"meta77838","meta77838",-1354182328,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77837.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77837.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77837");

(com.rpl.specter.t_com$rpl$specter77837.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77837");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77837.
 */
com.rpl.specter.__GT_t_com$rpl$specter77837 = (function com$rpl$specter$__GT_t_com$rpl$specter77837(afn,meta77838){
return (new com.rpl.specter.t_com$rpl$specter77837(afn,meta77838));
});


/**
 * Navigates to result of running `afn` on the currently navigated value.
 */
com.rpl.specter.view = com.rpl.specter.impl.direct_nav_obj((function (afn){
return (new com.rpl.specter.t_com$rpl$specter77837(afn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77847 = (function (parse_fn,unparse_fn,meta77848){
this.parse_fn = parse_fn;
this.unparse_fn = unparse_fn;
this.meta77848 = meta77848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77849,meta77848__$1){
var self__ = this;
var _77849__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77847(self__.parse_fn,self__.unparse_fn,meta77848__$1));
}));

(com.rpl.specter.t_com$rpl$specter77847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77849){
var self__ = this;
var _77849__$1 = this;
return self__.meta77848;
}));

(com.rpl.specter.t_com$rpl$specter77847.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77847.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
}));

(com.rpl.specter.t_com$rpl$specter77847.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
var G__77850 = next_fn((self__.parse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : self__.parse_fn.call(null,structure)));
return (self__.unparse_fn.cljs$core$IFn$_invoke$arity$1 ? self__.unparse_fn.cljs$core$IFn$_invoke$arity$1(G__77850) : self__.unparse_fn.call(null,G__77850));
}));

(com.rpl.specter.t_com$rpl$specter77847.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parse-fn","parse-fn",-836029424,null),new cljs.core.Symbol(null,"unparse-fn","unparse-fn",407187734,null),new cljs.core.Symbol(null,"meta77848","meta77848",1008461741,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77847.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77847.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77847");

(com.rpl.specter.t_com$rpl$specter77847.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77847");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77847.
 */
com.rpl.specter.__GT_t_com$rpl$specter77847 = (function com$rpl$specter$__GT_t_com$rpl$specter77847(parse_fn,unparse_fn,meta77848){
return (new com.rpl.specter.t_com$rpl$specter77847(parse_fn,unparse_fn,meta77848));
});




com.rpl.specter.parser_select_STAR_ = (function com$rpl$specter$parser_select_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__77844 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__77844) : next_fn.call(null,G__77844));
});

com.rpl.specter.parser_transform_STAR_ = (function com$rpl$specter$parser_transform_STAR_(parse_fn,unparse_fn,structure,next_fn){
var G__77845 = (function (){var G__77846 = (parse_fn.cljs$core$IFn$_invoke$arity$1 ? parse_fn.cljs$core$IFn$_invoke$arity$1(structure) : parse_fn.call(null,structure));
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__77846) : next_fn.call(null,G__77846));
})();
return (unparse_fn.cljs$core$IFn$_invoke$arity$1 ? unparse_fn.cljs$core$IFn$_invoke$arity$1(G__77845) : unparse_fn.call(null,G__77845));
});

/**
 * Navigate to the result of running `parse-fn` on the value. For
 *        transforms, the transformed value then has `unparse-fn` run on
 *        it to get the final value at this point.
 */
com.rpl.specter.parser = com.rpl.specter.impl.direct_nav_obj((function (parse_fn,unparse_fn){
return (new com.rpl.specter.t_com$rpl$specter77847(parse_fn,unparse_fn,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77852 = (function (meta77853){
this.meta77853 = meta77853;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77852.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77854,meta77853__$1){
var self__ = this;
var _77854__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77852(meta77853__$1));
}));

(com.rpl.specter.t_com$rpl$specter77852.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77854){
var self__ = this;
var _77854__$1 = this;
return self__.meta77853;
}));

(com.rpl.specter.t_com$rpl$specter77852.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77852.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return next_fn(cljs.core.deref(structure));
}));

(com.rpl.specter.t_com$rpl$specter77852.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
}));

(com.rpl.specter.t_com$rpl$specter77852.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77853","meta77853",-1520776649,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77852.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77852.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77852");

(com.rpl.specter.t_com$rpl$specter77852.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77852");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77852.
 */
com.rpl.specter.__GT_t_com$rpl$specter77852 = (function com$rpl$specter$__GT_t_com$rpl$specter77852(meta77853){
return (new com.rpl.specter.t_com$rpl$specter77852(meta77853));
});




com.rpl.specter.ATOM_select_STAR_ = (function com$rpl$specter$ATOM_select_STAR_(structure,next_fn){
var G__77851 = cljs.core.deref(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__77851) : next_fn.call(null,G__77851));
});

com.rpl.specter.ATOM_transform_STAR_ = (function com$rpl$specter$ATOM_transform_STAR_(structure,next_fn){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(structure,next_fn);

return structure;
});

/**
 * Navigates to atom value.
 */
com.rpl.specter.ATOM = (new com.rpl.specter.t_com$rpl$specter77852(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77855 = (function (re,meta77856){
this.re = re;
this.meta77856 = meta77856;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77855.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77857,meta77856__$1){
var self__ = this;
var _77857__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77855(self__.re,meta77856__$1));
}));

(com.rpl.specter.t_com$rpl$specter77855.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77857){
var self__ = this;
var _77857__$1 = this;
return self__.meta77856;
}));

(com.rpl.specter.t_com$rpl$specter77855.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77855.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__72714__auto__,s){
var ret__72715__auto__ = next_fn(s);
if((ret__72715__auto__ === com.rpl.specter.NONE)){
return curr__72714__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__72715__auto__)){
return cljs.core.reduced(ret__72715__auto__);
} else {
return ret__72715__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(self__.re,structure));
}));

(com.rpl.specter.t_com$rpl$specter77855.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return clojure.string.replace(structure,self__.re,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter77855.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"meta77856","meta77856",765714087,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77855.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77855.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77855");

(com.rpl.specter.t_com$rpl$specter77855.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77855");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77855.
 */
com.rpl.specter.__GT_t_com$rpl$specter77855 = (function com$rpl$specter$__GT_t_com$rpl$specter77855(re,meta77856){
return (new com.rpl.specter.t_com$rpl$specter77855(re,meta77856));
});




com.rpl.specter.regex_nav_select_STAR_ = (function com$rpl$specter$regex_nav_select_STAR_(re,structure,next_fn){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (curr__72714__auto__,s){
var ret__72715__auto__ = (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(s) : next_fn.call(null,s));
if((ret__72715__auto__ === com.rpl.specter.NONE)){
return curr__72714__auto__;
} else {
if(cljs.core.reduced_QMARK_(ret__72715__auto__)){
return cljs.core.reduced(ret__72715__auto__);
} else {
return ret__72715__auto__;
}
}
}),com.rpl.specter.NONE,cljs.core.re_seq(re,structure));
});

com.rpl.specter.regex_nav_transform_STAR_ = (function com$rpl$specter$regex_nav_transform_STAR_(re,structure,next_fn){
return clojure.string.replace(structure,re,next_fn);
});

com.rpl.specter.regex_nav = com.rpl.specter.impl.direct_nav_obj((function (re){
return (new com.rpl.specter.t_com$rpl$specter77855(re,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77860 = (function (path,temp__5802__auto__,late,meta77861){
this.path = path;
this.temp__5802__auto__ = temp__5802__auto__;
this.late = late;
this.meta77861 = meta77861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77862,meta77861__$1){
var self__ = this;
var _77862__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77860(self__.path,self__.temp__5802__auto__,self__.late,meta77861__$1));
}));

(com.rpl.specter.t_com$rpl$specter77860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77862){
var self__ = this;
var _77862__$1 = this;
return self__.meta77861;
}));

(com.rpl.specter.t_com$rpl$specter77860.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77860.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__77858_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__77858_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter77860.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__77859_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late,vals,p1__77859_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter77860.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta77861","meta77861",1516047401,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77860.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77860.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77860");

(com.rpl.specter.t_com$rpl$specter77860.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77860");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77860.
 */
com.rpl.specter.__GT_t_com$rpl$specter77860 = (function com$rpl$specter$__GT_t_com$rpl$specter77860(path,temp__5802__auto__,late,meta77861){
return (new com.rpl.specter.t_com$rpl$specter77860(path,temp__5802__auto__,late,meta77861));
});


/**
 * Filters the current value based on whether a path finds anything.
 *   e.g. (selected? :vals ALL even?) keeps the current element only if an
 *   even number exists for the :vals key.
 */
com.rpl.specter.selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__78064__delegate = function (path){
var temp__5802__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5802__auto__)){
var afn = temp__5802__auto__;
return afn;
} else {
var builder__76663__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter77860(path,temp__5802__auto__,late,null));
}));
var curr_params__76664__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__76664__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__76663__auto__,curr_params__76664__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__76663__auto__,curr_params__76664__auto__,null);
}
}
};
var G__78064 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__78065__i = 0, G__78065__a = new Array(arguments.length -  0);
while (G__78065__i < G__78065__a.length) {G__78065__a[G__78065__i] = arguments[G__78065__i + 0]; ++G__78065__i;}
  path = new cljs.core.IndexedSeq(G__78065__a,0,null);
} 
return G__78064__delegate.call(this,path);};
G__78064.cljs$lang$maxFixedArity = 0;
G__78064.cljs$lang$applyTo = (function (arglist__78066){
var path = cljs.core.seq(arglist__78066);
return G__78064__delegate(path);
});
G__78064.cljs$core$IFn$_invoke$arity$variadic = G__78064__delegate;
return G__78064;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77865 = (function (path,temp__5802__auto__,late,meta77866){
this.path = path;
this.temp__5802__auto__ = temp__5802__auto__;
this.late = late;
this.meta77866 = meta77866;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77867,meta77866__$1){
var self__ = this;
var _77867__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77865(self__.path,self__.temp__5802__auto__,self__.late,meta77866__$1));
}));

(com.rpl.specter.t_com$rpl$specter77865.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77867){
var self__ = this;
var _77867__$1 = this;
return self__.meta77866;
}));

(com.rpl.specter.t_com$rpl$specter77865.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77865.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_select((function (p1__77863_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__77863_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter77865.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.impl.filter_transform((function (p1__77864_SHARP_){
return com.rpl.specter.navs.not_selected_QMARK__STAR_(self__.late,vals,p1__77864_SHARP_);
}),vals,structure,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter77865.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta77866","meta77866",764140278,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77865.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77865.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77865");

(com.rpl.specter.t_com$rpl$specter77865.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77865");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77865.
 */
com.rpl.specter.__GT_t_com$rpl$specter77865 = (function com$rpl$specter$__GT_t_com$rpl$specter77865(path,temp__5802__auto__,late,meta77866){
return (new com.rpl.specter.t_com$rpl$specter77865(path,temp__5802__auto__,late,meta77866));
});


com.rpl.specter.not_selected_QMARK_ = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__78067__delegate = function (path){
var temp__5802__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(path);
if(cljs.core.truth_(temp__5802__auto__)){
var afn = temp__5802__auto__;
return (function (s){
return cljs.core.not((afn.cljs$core$IFn$_invoke$arity$1 ? afn.cljs$core$IFn$_invoke$arity$1(s) : afn.call(null,s)));
});
} else {
var builder__76663__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter77865(path,temp__5802__auto__,late,null));
}));
var curr_params__76664__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__76664__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__76663__auto__,curr_params__76664__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__76663__auto__,curr_params__76664__auto__,null);
}
}
};
var G__78067 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__78068__i = 0, G__78068__a = new Array(arguments.length -  0);
while (G__78068__i < G__78068__a.length) {G__78068__a[G__78068__i] = arguments[G__78068__i + 0]; ++G__78068__i;}
  path = new cljs.core.IndexedSeq(G__78068__a,0,null);
} 
return G__78067__delegate.call(this,path);};
G__78067.cljs$lang$maxFixedArity = 0;
G__78067.cljs$lang$applyTo = (function (arglist__78069){
var path = cljs.core.seq(arglist__78069);
return G__78067__delegate(path);
});
G__78067.cljs$core$IFn$_invoke$arity$variadic = G__78067__delegate;
return G__78067;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to a view of the current sequence that only contains elements that
 *   match the given path. An element matches the selector path if calling select
 *   on that element with the path yields anything other than an empty sequence.
 * 
 *   For transformation: `NONE` entries in the result sequence cause corresponding entries in
 *   input to be removed. A result sequence smaller than the input sequence is equivalent to
 *   padding the result sequence with `NONE` at the end until the same size as the input.
 */
com.rpl.specter.filterer = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__78070__delegate = function (path){
var G__77868 = com.rpl.specter.ALL;
var G__77869 = (com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.selected_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.selected_QMARK_.call(null,path));
return (com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.subselect.cljs$core$IFn$_invoke$arity$2(G__77868,G__77869) : com.rpl.specter.subselect.call(null,G__77868,G__77869));
};
var G__78070 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__78071__i = 0, G__78071__a = new Array(arguments.length -  0);
while (G__78071__i < G__78071__a.length) {G__78071__a[G__78071__i] = arguments[G__78071__i + 0]; ++G__78071__i;}
  path = new cljs.core.IndexedSeq(G__78071__a,0,null);
} 
return G__78070__delegate.call(this,path);};
G__78070.cljs$lang$maxFixedArity = 0;
G__78070.cljs$lang$applyTo = (function (arglist__78072){
var path = cljs.core.seq(arglist__78072);
return G__78070__delegate(path);
});
G__78070.cljs$core$IFn$_invoke$arity$variadic = G__78070__delegate;
return G__78070;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77870 = (function (path,update_fn,late,late_fn,meta77871){
this.path = path;
this.update_fn = update_fn;
this.late = late;
this.late_fn = late_fn;
this.meta77871 = meta77871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77872,meta77871__$1){
var self__ = this;
var _77872__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77870(self__.path,self__.update_fn,self__.late,self__.late_fn,meta77871__$1));
}));

(com.rpl.specter.t_com$rpl$specter77870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77872){
var self__ = this;
var _77872__$1 = this;
return self__.meta77871;
}));

(com.rpl.specter.t_com$rpl$specter77870.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77870.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter77870.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return next_fn((com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.compiled_transform.cljs$core$IFn$_invoke$arity$3(self__.late,self__.late_fn,structure) : com.rpl.specter.compiled_transform.call(null,self__.late,self__.late_fn,structure)));
}));

(com.rpl.specter.t_com$rpl$specter77870.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"update-fn","update-fn",-1943348456,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta77871","meta77871",442363810,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77870.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77870.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77870");

(com.rpl.specter.t_com$rpl$specter77870.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77870");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77870.
 */
com.rpl.specter.__GT_t_com$rpl$specter77870 = (function com$rpl$specter$__GT_t_com$rpl$specter77870(path,update_fn,late,late_fn,meta77871){
return (new com.rpl.specter.t_com$rpl$specter77870(path,update_fn,late,late_fn,meta77871));
});


/**
 * Navigates to a view of the current value by transforming it with the
 * specified path and update-fn.
 */
com.rpl.specter.transformed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,update_fn){
var builder__76663__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
return (new com.rpl.specter.t_com$rpl$specter77870(path,update_fn,late,late_fn,null));
}));
var curr_params__76664__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),update_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__76664__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__76663__auto__,curr_params__76664__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__76663__auto__,curr_params__76664__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77873 = (function (path,reduce_fn,late,late_fn,meta77874){
this.path = path;
this.reduce_fn = reduce_fn;
this.late = late;
this.late_fn = late_fn;
this.meta77874 = meta77874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77875,meta77874__$1){
var self__ = this;
var _77875__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77873(self__.path,self__.reduce_fn,self__.late,self__.late_fn,meta77874__$1));
}));

(com.rpl.specter.t_com$rpl$specter77873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77875){
var self__ = this;
var _77875__$1 = this;
return self__.meta77874;
}));

(com.rpl.specter.t_com$rpl$specter77873.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77873.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter77873.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return next_fn(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(self__.late_fn,(com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_traverse.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_traverse.call(null,self__.late,structure))));
}));

(com.rpl.specter.t_com$rpl$specter77873.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"reduce-fn","reduce-fn",-1484020844,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"late-fn","late-fn",268309430,null),new cljs.core.Symbol(null,"meta77874","meta77874",-1595829955,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77873.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77873.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77873");

(com.rpl.specter.t_com$rpl$specter77873.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77873");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77873.
 */
com.rpl.specter.__GT_t_com$rpl$specter77873 = (function com$rpl$specter$__GT_t_com$rpl$specter77873(path,reduce_fn,late,late_fn,meta77874){
return (new com.rpl.specter.t_com$rpl$specter77873(path,reduce_fn,late,late_fn,meta77874));
});


/**
 * Navigates to a view of the current value by transforming with a reduction over
 * the specified traversal.
 */
com.rpl.specter.traversed = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function (path,reduce_fn){
var builder__76663__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late,late_fn){
return (new com.rpl.specter.t_com$rpl$specter77873(path,reduce_fn,late,late_fn,null));
}));
var curr_params__76664__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path)),reduce_fn], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__76664__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__76663__auto__,curr_params__76664__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__76663__auto__,curr_params__76664__auto__,null);
}
})),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Keeps the element only if it matches the supplied predicate. Functions in paths
 *        implicitly convert to this navigator.
 */
com.rpl.specter.pred = com.rpl.specter.impl.pred_STAR_;
com.rpl.specter.pred_EQ_ = (function com$rpl$specter$pred_EQ_(v){
var G__77877 = (function (p1__77876_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__77876_SHARP_,v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__77877) : com.rpl.specter.pred.call(null,G__77877));
});
com.rpl.specter.pred_LT_ = (function com$rpl$specter$pred_LT_(v){
var G__77879 = (function (p1__77878_SHARP_){
return (p1__77878_SHARP_ < v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__77879) : com.rpl.specter.pred.call(null,G__77879));
});
com.rpl.specter.pred_GT_ = (function com$rpl$specter$pred_GT_(v){
var G__77881 = (function (p1__77880_SHARP_){
return (p1__77880_SHARP_ > v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__77881) : com.rpl.specter.pred.call(null,G__77881));
});
com.rpl.specter.pred_LT__EQ_ = (function com$rpl$specter$pred_LT__EQ_(v){
var G__77883 = (function (p1__77882_SHARP_){
return (p1__77882_SHARP_ <= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__77883) : com.rpl.specter.pred.call(null,G__77883));
});
com.rpl.specter.pred_GT__EQ_ = (function com$rpl$specter$pred_GT__EQ_(v){
var G__77885 = (function (p1__77884_SHARP_){
return (p1__77884_SHARP_ >= v);
});
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(G__77885) : com.rpl.specter.pred.call(null,G__77885));
});
(com.rpl.specter.protocols.ImplicitNav["null"] = true);

(com.rpl.specter.protocols.implicit_nav["null"] = (function (this$){
return com.rpl.specter.STAY;
}));
(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Symbol.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
(com.rpl.specter.protocols.ImplicitNav["string"] = true);

(com.rpl.specter.protocols.implicit_nav["string"] = (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
(com.rpl.specter.protocols.ImplicitNav["number"] = true);

(com.rpl.specter.protocols.implicit_nav["number"] = (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.char$.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.navs.keypath_STAR_.call(null,this$__$1));
}));
(com.rpl.specter.protocols.ImplicitNav["boolean"] = true);

(com.rpl.specter.protocols.implicit_nav["boolean"] = (function (this$){
return (com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.navs.keypath_STAR_.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.navs.keypath_STAR_.call(null,this$));
}));
(com.rpl.specter.protocols.ImplicitNav["function"] = true);

(com.rpl.specter.protocols.implicit_nav["function"] = (function (this$){
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$) : com.rpl.specter.pred.call(null,this$));
}));
(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashSet.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.pred.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.pred.call(null,this$__$1));
}));
(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$ = cljs.core.PROTOCOL_SENTINEL);

(RegExp.prototype.com$rpl$specter$protocols$ImplicitNav$implicit_nav$arity$1 = (function (this$){
var this$__$1 = this;
return (com.rpl.specter.regex_nav.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.regex_nav.cljs$core$IFn$_invoke$arity$1(this$__$1) : com.rpl.specter.regex_nav.call(null,this$__$1));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77888 = (function (v,meta77889){
this.v = v;
this.meta77889 = meta77889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77890,meta77889__$1){
var self__ = this;
var _77890__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77888(self__.v,meta77889__$1));
}));

(com.rpl.specter.t_com$rpl$specter77888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77890){
var self__ = this;
var _77890__$1 = this;
return self__.meta77889;
}));

(com.rpl.specter.t_com$rpl$specter77888.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77888.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter77888.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return next_fn((((structure == null))?self__.v:structure));
}));

(com.rpl.specter.t_com$rpl$specter77888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"v","v",1661996586,null),new cljs.core.Symbol(null,"meta77889","meta77889",1111114016,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77888.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77888.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77888");

(com.rpl.specter.t_com$rpl$specter77888.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77888");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77888.
 */
com.rpl.specter.__GT_t_com$rpl$specter77888 = (function com$rpl$specter$__GT_t_com$rpl$specter77888(v,meta77889){
return (new com.rpl.specter.t_com$rpl$specter77888(v,meta77889));
});




com.rpl.specter.nil__GT_val_select_STAR_ = (function com$rpl$specter$nil__GT_val_select_STAR_(v,structure,next_fn){
var G__77886 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__77886) : next_fn.call(null,G__77886));
});

com.rpl.specter.nil__GT_val_transform_STAR_ = (function com$rpl$specter$nil__GT_val_transform_STAR_(v,structure,next_fn){
var G__77887 = (((structure == null))?v:structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__77887) : next_fn.call(null,G__77887));
});

/**
 * Navigates to the provided val if the structure is nil. Otherwise it stays
 *        navigated at the structure.
 */
com.rpl.specter.nil__GT_val = com.rpl.specter.impl.direct_nav_obj((function (v){
return (new com.rpl.specter.t_com$rpl$specter77888(v,null));
}));
/**
 * Navigates to #{} if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_SET = (function (){var G__77891 = cljs.core.PersistentHashSet.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__77891) : com.rpl.specter.nil__GT_val.call(null,G__77891));
})();
/**
 * Navigates to '() if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_LIST = (function (){var G__77892 = cljs.core.List.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__77892) : com.rpl.specter.nil__GT_val.call(null,G__77892));
})();
/**
 * Navigates to [] if the value is nil. Otherwise it stays
 *        navigated at the current value.
 */
com.rpl.specter.NIL__GT_VECTOR = (function (){var G__77893 = cljs.core.PersistentVector.EMPTY;
return (com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.nil__GT_val.cljs$core$IFn$_invoke$arity$1(G__77893) : com.rpl.specter.nil__GT_val.call(null,G__77893));
})();

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77896 = (function (meta77897){
this.meta77897 = meta77897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77898,meta77897__$1){
var self__ = this;
var _77898__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77896(meta77897__$1));
}));

(com.rpl.specter.t_com$rpl$specter77896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77898){
var self__ = this;
var _77898__$1 = this;
return self__.meta77897;
}));

(com.rpl.specter.t_com$rpl$specter77896.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77896.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return next_fn(cljs.core.meta(structure));
}));

(com.rpl.specter.t_com$rpl$specter77896.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return cljs.core.with_meta(structure,next_fn(cljs.core.meta(structure)));
}));

(com.rpl.specter.t_com$rpl$specter77896.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77897","meta77897",-456735780,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77896.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77896.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77896");

(com.rpl.specter.t_com$rpl$specter77896.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77896");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77896.
 */
com.rpl.specter.__GT_t_com$rpl$specter77896 = (function com$rpl$specter$__GT_t_com$rpl$specter77896(meta77897){
return (new com.rpl.specter.t_com$rpl$specter77896(meta77897));
});




com.rpl.specter.META_select_STAR_ = (function com$rpl$specter$META_select_STAR_(structure,next_fn){
var G__77894 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__77894) : next_fn.call(null,G__77894));
});

com.rpl.specter.META_transform_STAR_ = (function com$rpl$specter$META_transform_STAR_(structure,next_fn){
return cljs.core.with_meta(structure,(function (){var G__77895 = cljs.core.meta(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__77895) : next_fn.call(null,G__77895));
})());
});

/**
 * Navigates to the metadata of the structure, or nil if
 *   the structure has no metadata or may not contain metadata.
 */
com.rpl.specter.META = (new com.rpl.specter.t_com$rpl$specter77896(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77901 = (function (meta77902){
this.meta77902 = meta77902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77903,meta77902__$1){
var self__ = this;
var _77903__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77901(meta77902__$1));
}));

(com.rpl.specter.t_com$rpl$specter77901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77903){
var self__ = this;
var _77903__$1 = this;
return self__.meta77902;
}));

(com.rpl.specter.t_com$rpl$specter77901.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77901.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return next_fn(cljs.core.name(structure));
}));

(com.rpl.specter.t_com$rpl$specter77901.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
var new_name = next_fn(cljs.core.name(structure));
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("NAME can only be used on symbols or keywords",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure], null));

}
}
}));

(com.rpl.specter.t_com$rpl$specter77901.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77902","meta77902",331250813,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77901.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77901.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77901");

(com.rpl.specter.t_com$rpl$specter77901.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77901");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77901.
 */
com.rpl.specter.__GT_t_com$rpl$specter77901 = (function com$rpl$specter$__GT_t_com$rpl$specter77901(meta77902){
return (new com.rpl.specter.t_com$rpl$specter77901(meta77902));
});




com.rpl.specter.NAME_select_STAR_ = (function com$rpl$specter$NAME_select_STAR_(structure,next_fn){
var G__77899 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__77899) : next_fn.call(null,G__77899));
});

com.rpl.specter.NAME_transform_STAR_ = (function com$rpl$specter$NAME_transform_STAR_(structure,next_fn){
var new_name = (function (){var G__77900 = cljs.core.name(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__77900) : next_fn.call(null,G__77900));
})();
var ns = cljs.core.namespace(structure);
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(ns,new_name);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("NAME can only be used on symbols or keywords",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure], null));

}
}
});

/**
 * Navigates to the name portion of the keyword or symbol
 */
com.rpl.specter.NAME = (new com.rpl.specter.t_com$rpl$specter77901(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77906 = (function (meta77907){
this.meta77907 = meta77907;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77906.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77908,meta77907__$1){
var self__ = this;
var _77908__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77906(meta77907__$1));
}));

(com.rpl.specter.t_com$rpl$specter77906.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77908){
var self__ = this;
var _77908__$1 = this;
return self__.meta77907;
}));

(com.rpl.specter.t_com$rpl$specter77906.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77906.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
return next_fn(cljs.core.namespace(structure));
}));

(com.rpl.specter.t_com$rpl$specter77906.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__75997__auto__,vals__75998__auto__,structure,next_fn__75999__auto__){
var self__ = this;
var this__75997__auto____$1 = this;
var next_fn = (function (s__76000__auto__){
return (next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__75999__auto__.cljs$core$IFn$_invoke$arity$2(vals__75998__auto__,s__76000__auto__) : next_fn__75999__auto__.call(null,vals__75998__auto__,s__76000__auto__));
});
var name = cljs.core.name(structure);
var new_ns = next_fn(cljs.core.namespace(structure));
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("NAMESPACE can only be used on symbols or keywords",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure], null));

}
}
}));

(com.rpl.specter.t_com$rpl$specter77906.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77907","meta77907",75469588,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77906.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77906.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77906");

(com.rpl.specter.t_com$rpl$specter77906.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77906");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77906.
 */
com.rpl.specter.__GT_t_com$rpl$specter77906 = (function com$rpl$specter$__GT_t_com$rpl$specter77906(meta77907){
return (new com.rpl.specter.t_com$rpl$specter77906(meta77907));
});




com.rpl.specter.NAMESPACE_select_STAR_ = (function com$rpl$specter$NAMESPACE_select_STAR_(structure,next_fn){
var G__77904 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__77904) : next_fn.call(null,G__77904));
});

com.rpl.specter.NAMESPACE_transform_STAR_ = (function com$rpl$specter$NAMESPACE_transform_STAR_(structure,next_fn){
var name = cljs.core.name(structure);
var new_ns = (function (){var G__77905 = cljs.core.namespace(structure);
return (next_fn.cljs$core$IFn$_invoke$arity$1 ? next_fn.cljs$core$IFn$_invoke$arity$1(G__77905) : next_fn.call(null,G__77905));
})();
if((structure instanceof cljs.core.Keyword)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
if((structure instanceof cljs.core.Symbol)){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(new_ns,name);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("NAMESPACE can only be used on symbols or keywords",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"structure","structure",1563832083),structure], null));

}
}
});

/**
 * Navigates to the namespace portion of the keyword or symbol
 */
com.rpl.specter.NAMESPACE = (new com.rpl.specter.t_com$rpl$specter77906(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77909 = (function (path,late,meta77910){
this.path = path;
this.late = late;
this.meta77910 = meta77910;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77911,meta77910__$1){
var self__ = this;
var _77911__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77909(self__.path,self__.late,meta77910__$1));
}));

(com.rpl.specter.t_com$rpl$specter77909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77911){
var self__ = this;
var _77911__$1 = this;
return self__.meta77910;
}));

(com.rpl.specter.t_com$rpl$specter77909.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77909.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__76660__auto__,vals__76661__auto__,structure,next_fn__76662__auto__){
var self__ = this;
var this__76660__auto____$1 = this;
var G__77912 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__76661__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__77913 = structure;
return (next_fn__76662__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__76662__auto__.cljs$core$IFn$_invoke$arity$2(G__77912,G__77913) : next_fn__76662__auto__.call(null,G__77912,G__77913));
}));

(com.rpl.specter.t_com$rpl$specter77909.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__76660__auto__,vals__76661__auto__,structure,next_fn__76662__auto__){
var self__ = this;
var this__76660__auto____$1 = this;
var G__77914 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__76661__auto__,(com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select.call(null,self__.late,structure)));
var G__77915 = structure;
return (next_fn__76662__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__76662__auto__.cljs$core$IFn$_invoke$arity$2(G__77914,G__77915) : next_fn__76662__auto__.call(null,G__77914,G__77915));
}));

(com.rpl.specter.t_com$rpl$specter77909.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta77910","meta77910",1480415281,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77909.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77909.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77909");

(com.rpl.specter.t_com$rpl$specter77909.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77909");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77909.
 */
com.rpl.specter.__GT_t_com$rpl$specter77909 = (function com$rpl$specter$__GT_t_com$rpl$specter77909(path,late,meta77910){
return (new com.rpl.specter.t_com$rpl$specter77909(path,late,meta77910));
});


com.rpl.specter.collect = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__78073__delegate = function (path){
var builder__76663__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter77909(path,late,null));
}));
var curr_params__76664__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__76664__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__76663__auto__,curr_params__76664__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__76663__auto__,curr_params__76664__auto__,null);
}
};
var G__78073 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__78074__i = 0, G__78074__a = new Array(arguments.length -  0);
while (G__78074__i < G__78074__a.length) {G__78074__a[G__78074__i] = arguments[G__78074__i + 0]; ++G__78074__i;}
  path = new cljs.core.IndexedSeq(G__78074__a,0,null);
} 
return G__78073__delegate.call(this,path);};
G__78073.cljs$lang$maxFixedArity = 0;
G__78073.cljs$lang$applyTo = (function (arglist__78075){
var path = cljs.core.seq(arglist__78075);
return G__78073__delegate(path);
});
G__78073.cljs$core$IFn$_invoke$arity$variadic = G__78073__delegate;
return G__78073;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77916 = (function (path,late,meta77917){
this.path = path;
this.late = late;
this.meta77917 = meta77917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77918,meta77917__$1){
var self__ = this;
var _77918__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77916(self__.path,self__.late,meta77917__$1));
}));

(com.rpl.specter.t_com$rpl$specter77916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77918){
var self__ = this;
var _77918__$1 = this;
return self__.meta77917;
}));

(com.rpl.specter.t_com$rpl$specter77916.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77916.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__76660__auto__,vals__76661__auto__,structure,next_fn__76662__auto__){
var self__ = this;
var this__76660__auto____$1 = this;
var G__77919 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__76661__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__77920 = structure;
return (next_fn__76662__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__76662__auto__.cljs$core$IFn$_invoke$arity$2(G__77919,G__77920) : next_fn__76662__auto__.call(null,G__77919,G__77920));
}));

(com.rpl.specter.t_com$rpl$specter77916.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__76660__auto__,vals__76661__auto__,structure,next_fn__76662__auto__){
var self__ = this;
var this__76660__auto____$1 = this;
var G__77921 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__76661__auto__,(com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.compiled_select_one.cljs$core$IFn$_invoke$arity$2(self__.late,structure) : com.rpl.specter.compiled_select_one.call(null,self__.late,structure)));
var G__77922 = structure;
return (next_fn__76662__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__76662__auto__.cljs$core$IFn$_invoke$arity$2(G__77921,G__77922) : next_fn__76662__auto__.call(null,G__77921,G__77922));
}));

(com.rpl.specter.t_com$rpl$specter77916.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta77917","meta77917",1039517550,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77916.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77916.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77916");

(com.rpl.specter.t_com$rpl$specter77916.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77916");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77916.
 */
com.rpl.specter.__GT_t_com$rpl$specter77916 = (function com$rpl$specter$__GT_t_com$rpl$specter77916(path,late,meta77917){
return (new com.rpl.specter.t_com$rpl$specter77916(path,late,meta77917));
});


com.rpl.specter.collect_one = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__78076__delegate = function (path){
var builder__76663__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter77916(path,late,null));
}));
var curr_params__76664__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__76664__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__76663__auto__,curr_params__76664__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__76663__auto__,curr_params__76664__auto__,null);
}
};
var G__78076 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__78077__i = 0, G__78077__a = new Array(arguments.length -  0);
while (G__78077__i < G__78077__a.length) {G__78077__a[G__78077__i] = arguments[G__78077__i + 0]; ++G__78077__i;}
  path = new cljs.core.IndexedSeq(G__78077__a,0,null);
} 
return G__78076__delegate.call(this,path);};
G__78076.cljs$lang$maxFixedArity = 0;
G__78076.cljs$lang$applyTo = (function (arglist__78078){
var path = cljs.core.seq(arglist__78078);
return G__78076__delegate(path);
});
G__78076.cljs$core$IFn$_invoke$arity$variadic = G__78076__delegate;
return G__78076;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77923 = (function (val,meta77924){
this.val = val;
this.meta77924 = meta77924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77925,meta77924__$1){
var self__ = this;
var _77925__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77923(self__.val,meta77924__$1));
}));

(com.rpl.specter.t_com$rpl$specter77923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77925){
var self__ = this;
var _77925__$1 = this;
return self__.meta77924;
}));

(com.rpl.specter.t_com$rpl$specter77923.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77923.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this__76660__auto__,vals__76661__auto__,structure,next_fn__76662__auto__){
var self__ = this;
var this__76660__auto____$1 = this;
var G__77926 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__76661__auto__,self__.val);
var G__77927 = structure;
return (next_fn__76662__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__76662__auto__.cljs$core$IFn$_invoke$arity$2(G__77926,G__77927) : next_fn__76662__auto__.call(null,G__77926,G__77927));
}));

(com.rpl.specter.t_com$rpl$specter77923.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this__76660__auto__,vals__76661__auto__,structure,next_fn__76662__auto__){
var self__ = this;
var this__76660__auto____$1 = this;
var G__77928 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(vals__76661__auto__,self__.val);
var G__77929 = structure;
return (next_fn__76662__auto__.cljs$core$IFn$_invoke$arity$2 ? next_fn__76662__auto__.cljs$core$IFn$_invoke$arity$2(G__77928,G__77929) : next_fn__76662__auto__.call(null,G__77928,G__77929));
}));

(com.rpl.specter.t_com$rpl$specter77923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta77924","meta77924",-53289362,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77923.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77923.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77923");

(com.rpl.specter.t_com$rpl$specter77923.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77923");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77923.
 */
com.rpl.specter.__GT_t_com$rpl$specter77923 = (function com$rpl$specter$__GT_t_com$rpl$specter77923(val,meta77924){
return (new com.rpl.specter.t_com$rpl$specter77923(val,meta77924));
});


/**
 * Adds an external value to the collected vals. Useful when additional arguments
 *   are required to the transform function that would otherwise require partial
 *   application or a wrapper function.
 * 
 *   e.g., incrementing val at path [:a :b] by 3:
 *   (transform [:a :b (putval 3)] + some-map)
 */
com.rpl.specter.putval = com.rpl.specter.impl.direct_nav_obj((function (val){
return (new com.rpl.specter.t_com$rpl$specter77923(val,null));
}));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77930 = (function (path,late,meta77931){
this.path = path;
this.late = late;
this.meta77931 = meta77931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77932,meta77931__$1){
var self__ = this;
var _77932__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77930(self__.path,self__.late,meta77931__$1));
}));

(com.rpl.specter.t_com$rpl$specter77930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77932){
var self__ = this;
var _77932__$1 = this;
return self__.meta77931;
}));

(com.rpl.specter.t_com$rpl$specter77930.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77930.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.select_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter77930.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.protocols.transform_STAR_(self__.late,cljs.core.PersistentVector.EMPTY,structure,(function (_,structure__$1){
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(vals,structure__$1) : next_fn.call(null,vals,structure__$1));
}));
}));

(com.rpl.specter.t_com$rpl$specter77930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"late","late",-666327347,null),new cljs.core.Symbol(null,"meta77931","meta77931",1879797499,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77930.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77930.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77930");

(com.rpl.specter.t_com$rpl$specter77930.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77930");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77930.
 */
com.rpl.specter.__GT_t_com$rpl$specter77930 = (function com$rpl$specter$__GT_t_com$rpl$specter77930(path,late,meta77931){
return (new com.rpl.specter.t_com$rpl$specter77930(path,late,meta77931));
});


com.rpl.specter.with_fresh_collected = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__78079__delegate = function (path){
var builder__76663__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late){
return (new com.rpl.specter.t_com$rpl$specter77930(path,late,null));
}));
var curr_params__76664__auto__ = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path) : com.rpl.specter.late_path.call(null,path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__76664__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__76663__auto__,curr_params__76664__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__76663__auto__,curr_params__76664__auto__,null);
}
};
var G__78079 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__78080__i = 0, G__78080__a = new Array(arguments.length -  0);
while (G__78080__i < G__78080__a.length) {G__78080__a[G__78080__i] = arguments[G__78080__i + 0]; ++G__78080__i;}
  path = new cljs.core.IndexedSeq(G__78080__a,0,null);
} 
return G__78079__delegate.call(this,path);};
G__78079.cljs$lang$maxFixedArity = 0;
G__78079.cljs$lang$applyTo = (function (arglist__78081){
var path = cljs.core.seq(arglist__78081);
return G__78079__delegate(path);
});
G__78079.cljs$core$IFn$_invoke$arity$variadic = G__78079__delegate;
return G__78079;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77935 = (function (meta77936){
this.meta77936 = meta77936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77937,meta77936__$1){
var self__ = this;
var _77937__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77935(meta77936__$1));
}));

(com.rpl.specter.t_com$rpl$specter77935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77937){
var self__ = this;
var _77937__$1 = this;
return self__.meta77936;
}));

(com.rpl.specter.t_com$rpl$specter77935.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77935.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__77938 = cljs.core.PersistentVector.EMPTY;
var G__77939 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__77938,G__77939) : next_fn.call(null,G__77938,G__77939));
}));

(com.rpl.specter.t_com$rpl$specter77935.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var G__77940 = cljs.core.PersistentVector.EMPTY;
var G__77941 = structure;
return (next_fn.cljs$core$IFn$_invoke$arity$2 ? next_fn.cljs$core$IFn$_invoke$arity$2(G__77940,G__77941) : next_fn.call(null,G__77940,G__77941));
}));

(com.rpl.specter.t_com$rpl$specter77935.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta77936","meta77936",-1641713087,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77935.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77935.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77935");

(com.rpl.specter.t_com$rpl$specter77935.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77935");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77935.
 */
com.rpl.specter.__GT_t_com$rpl$specter77935 = (function com$rpl$specter$__GT_t_com$rpl$specter77935(meta77936){
return (new com.rpl.specter.t_com$rpl$specter77935(meta77936));
});


/**
 * Drops all collected values for subsequent navigation.
 */
com.rpl.specter.DISPENSE = (new com.rpl.specter.t_com$rpl$specter77935(null));

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77944 = (function (cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,meta77945){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5802__auto__ = temp__5802__auto__;
this.afn = afn;
this.late_then = late_then;
this.late_else = late_else;
this.meta77945 = meta77945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77946,meta77945__$1){
var self__ = this;
var _77946__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77944(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5802__auto__,self__.afn,self__.late_then,self__.late_else,meta77945__$1));
}));

(com.rpl.specter.t_com$rpl$specter77944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77946){
var self__ = this;
var _77946__$1 = this;
return self__.meta77945;
}));

(com.rpl.specter.t_com$rpl$specter77944.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77944.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter77944.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,self__.afn,self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter77944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta77945","meta77945",-1112269988,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77944.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77944.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77944");

(com.rpl.specter.t_com$rpl$specter77944.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77944");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77944.
 */
com.rpl.specter.__GT_t_com$rpl$specter77944 = (function com$rpl$specter$__GT_t_com$rpl$specter77944(cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,meta77945){
return (new com.rpl.specter.t_com$rpl$specter77944(cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,meta77945));
});



/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77947 = (function (cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,meta77948){
this.cond_p = cond_p;
this.then_path = then_path;
this.else_path = else_path;
this.temp__5802__auto__ = temp__5802__auto__;
this.late_cond = late_cond;
this.late_then = late_then;
this.late_else = late_else;
this.meta77948 = meta77948;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77949,meta77948__$1){
var self__ = this;
var _77949__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77947(self__.cond_p,self__.then_path,self__.else_path,self__.temp__5802__auto__,self__.late_cond,self__.late_then,self__.late_else,meta77948__$1));
}));

(com.rpl.specter.t_com$rpl$specter77947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77949){
var self__ = this;
var _77949__$1 = this;
return self__.meta77948;
}));

(com.rpl.specter.t_com$rpl$specter77947.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77947.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_select(vals,structure,next_fn,(function (p1__77942_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__77942_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter77947.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
return com.rpl.specter.navs.if_transform(vals,structure,next_fn,(function (p1__77943_SHARP_){
return com.rpl.specter.navs.selected_QMARK__STAR_(self__.late_cond,vals,p1__77943_SHARP_);
}),self__.late_then,self__.late_else);
}));

(com.rpl.specter.t_com$rpl$specter77947.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-p","cond-p",695068009,null),new cljs.core.Symbol(null,"then-path","then-path",1949536092,null),new cljs.core.Symbol(null,"else-path","else-path",-2100209576,null),new cljs.core.Symbol(null,"temp__5802__auto__","temp__5802__auto__",-1659442335,null),new cljs.core.Symbol(null,"late-cond","late-cond",1031862828,null),new cljs.core.Symbol(null,"late-then","late-then",1623904294,null),new cljs.core.Symbol(null,"late-else","late-else",1462724600,null),new cljs.core.Symbol(null,"meta77948","meta77948",-175030339,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77947.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77947.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77947");

(com.rpl.specter.t_com$rpl$specter77947.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77947");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77947.
 */
com.rpl.specter.__GT_t_com$rpl$specter77947 = (function com$rpl$specter$__GT_t_com$rpl$specter77947(cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,meta77948){
return (new com.rpl.specter.t_com$rpl$specter77947(cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,meta77948));
});


/**
 * Like cond-path, but with if semantics.
 */
com.rpl.specter.if_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__78082 = null;
var G__78082__2 = (function (cond_p,then_path){
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(cond_p,then_path,com.rpl.specter.STOP) : com.rpl.specter.if_path.call(null,cond_p,then_path,com.rpl.specter.STOP));
});
var G__78082__3 = (function (cond_p,then_path,else_path){
var temp__5802__auto__ = com.rpl.specter.navs.extract_basic_filter_fn(cond_p);
if(cljs.core.truth_(temp__5802__auto__)){
var afn = temp__5802__auto__;
var builder__76663__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_then,late_else){
return (new com.rpl.specter.t_com$rpl$specter77944(cond_p,then_path,else_path,temp__5802__auto__,afn,late_then,late_else,null));
}));
var curr_params__76664__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__76664__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__76663__auto__,curr_params__76664__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__76663__auto__,curr_params__76664__auto__,null);
}
} else {
var builder__76663__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late_cond,late_then,late_else){
return (new com.rpl.specter.t_com$rpl$specter77947(cond_p,then_path,else_path,temp__5802__auto__,late_cond,late_then,late_else,null));
}));
var curr_params__76664__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(cond_p) : com.rpl.specter.late_path.call(null,cond_p)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(then_path) : com.rpl.specter.late_path.call(null,then_path)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(else_path) : com.rpl.specter.late_path.call(null,else_path))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__76664__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__76663__auto__,curr_params__76664__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__76663__auto__,curr_params__76664__auto__,null);
}
}
});
G__78082 = function(cond_p,then_path,else_path){
switch(arguments.length){
case 2:
return G__78082__2.call(this,cond_p,then_path);
case 3:
return G__78082__3.call(this,cond_p,then_path,else_path);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__78082.cljs$core$IFn$_invoke$arity$2 = G__78082__2;
G__78082.cljs$core$IFn$_invoke$arity$3 = G__78082__3;
return G__78082;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Takes in alternating cond-path path cond-path path...
 * Tests the structure if selecting with cond-path returns anything.
 * If so, it uses the following path for this portion of the navigation.
 * Otherwise, it tries the next cond-path. If nothing matches, then the structure
 * is not selected.
 */
com.rpl.specter.cond_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__78083__delegate = function (conds){
var pairs = cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),conds));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p,p__77950){
var vec__77951 = p__77950;
var tester = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77951,(0),null);
var apath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77951,(1),null);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$3(tester,apath,p) : com.rpl.specter.if_path.call(null,tester,apath,p));
}),com.rpl.specter.STOP,pairs);
};
var G__78083 = function (var_args){
var conds = null;
if (arguments.length > 0) {
var G__78084__i = 0, G__78084__a = new Array(arguments.length -  0);
while (G__78084__i < G__78084__a.length) {G__78084__a[G__78084__i] = arguments[G__78084__i + 0]; ++G__78084__i;}
  conds = new cljs.core.IndexedSeq(G__78084__a,0,null);
} 
return G__78083__delegate.call(this,conds);};
G__78083.cljs$lang$maxFixedArity = 0;
G__78083.cljs$lang$applyTo = (function (arglist__78085){
var conds = cljs.core.seq(arglist__78085);
return G__78083__delegate(conds);
});
G__78083.cljs$core$IFn$_invoke$arity$variadic = G__78083__delegate;
return G__78083;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {com.rpl.specter.protocols.RichNavigator}
 * @implements {cljs.core.IWithMeta}
*/
com.rpl.specter.t_com$rpl$specter77954 = (function (path1,path2,late1,late2,meta77955){
this.path1 = path1;
this.path2 = path2;
this.late1 = late1;
this.late2 = late2;
this.meta77955 = meta77955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(com.rpl.specter.t_com$rpl$specter77954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_77956,meta77955__$1){
var self__ = this;
var _77956__$1 = this;
return (new com.rpl.specter.t_com$rpl$specter77954(self__.path1,self__.path2,self__.late1,self__.late2,meta77955__$1));
}));

(com.rpl.specter.t_com$rpl$specter77954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_77956){
var self__ = this;
var _77956__$1 = this;
return self__.meta77955;
}));

(com.rpl.specter.t_com$rpl$specter77954.prototype.com$rpl$specter$protocols$RichNavigator$ = cljs.core.PROTOCOL_SENTINEL);

(com.rpl.specter.t_com$rpl$specter77954.prototype.com$rpl$specter$protocols$RichNavigator$select_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var res1 = com.rpl.specter.protocols.select_STAR_(self__.late1,vals,structure,next_fn);
if(cljs.core.reduced_QMARK_(res1)){
return res1;
} else {
var res2 = com.rpl.specter.protocols.select_STAR_(self__.late2,vals,structure,next_fn);
if((com.rpl.specter.NONE === res1)){
return res2;
} else {
return res1;
}
}
}));

(com.rpl.specter.t_com$rpl$specter77954.prototype.com$rpl$specter$protocols$RichNavigator$transform_STAR_$arity$4 = (function (this$,vals,structure,next_fn){
var self__ = this;
var this$__$1 = this;
var s1 = com.rpl.specter.protocols.transform_STAR_(self__.late1,vals,structure,next_fn);
return com.rpl.specter.protocols.transform_STAR_(self__.late2,vals,s1,next_fn);
}));

(com.rpl.specter.t_com$rpl$specter77954.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path1","path1",-2002517142,null),new cljs.core.Symbol(null,"path2","path2",-1937913521,null),new cljs.core.Symbol(null,"late1","late1",-1413016621,null),new cljs.core.Symbol(null,"late2","late2",-681717994,null),new cljs.core.Symbol(null,"meta77955","meta77955",1491901710,null)], null);
}));

(com.rpl.specter.t_com$rpl$specter77954.cljs$lang$type = true);

(com.rpl.specter.t_com$rpl$specter77954.cljs$lang$ctorStr = "com.rpl.specter/t_com$rpl$specter77954");

(com.rpl.specter.t_com$rpl$specter77954.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"com.rpl.specter/t_com$rpl$specter77954");
}));

/**
 * Positional factory function for com.rpl.specter/t_com$rpl$specter77954.
 */
com.rpl.specter.__GT_t_com$rpl$specter77954 = (function com$rpl$specter$__GT_t_com$rpl$specter77954(path1,path2,late1,late2,meta77955){
return (new com.rpl.specter.t_com$rpl$specter77954(path1,path2,late1,late2,meta77955));
});


/**
 * A path that branches on multiple paths. For updates,
 * applies updates to the paths in order.
 */
com.rpl.specter.multi_path = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() {
var G__78086 = null;
var G__78086__0 = (function (){
return com.rpl.specter.STAY;
});
var G__78086__1 = (function (path){
return path;
});
var G__78086__2 = (function (path1,path2){
var builder__76663__auto__ = com.rpl.specter.impl.direct_nav_obj((function (late1,late2){
return (new com.rpl.specter.t_com$rpl$specter77954(path1,path2,late1,late2,null));
}));
var curr_params__76664__auto__ = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path1) : com.rpl.specter.late_path.call(null,path1)),(com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1 ? com.rpl.specter.late_path.cljs$core$IFn$_invoke$arity$1(path2) : com.rpl.specter.late_path.call(null,path2))], null);
if(cljs.core.every_QMARK_(cljs.core.complement(com.rpl.specter.impl.dynamic_param_QMARK_),curr_params__76664__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(builder__76663__auto__,curr_params__76664__auto__);
} else {
return com.rpl.specter.impl.__GT_DynamicFunction(builder__76663__auto__,curr_params__76664__auto__,null);
}
});
var G__78086__3 = (function() { 
var G__78087__delegate = function (path1,path2,paths){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(com.rpl.specter.multi_path,(com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path1,path2) : com.rpl.specter.multi_path.call(null,path1,path2)),paths);
};
var G__78087 = function (path1,path2,var_args){
var paths = null;
if (arguments.length > 2) {
var G__78088__i = 0, G__78088__a = new Array(arguments.length -  2);
while (G__78088__i < G__78088__a.length) {G__78088__a[G__78088__i] = arguments[G__78088__i + 2]; ++G__78088__i;}
  paths = new cljs.core.IndexedSeq(G__78088__a,0,null);
} 
return G__78087__delegate.call(this,path1,path2,paths);};
G__78087.cljs$lang$maxFixedArity = 2;
G__78087.cljs$lang$applyTo = (function (arglist__78089){
var path1 = cljs.core.first(arglist__78089);
arglist__78089 = cljs.core.next(arglist__78089);
var path2 = cljs.core.first(arglist__78089);
var paths = cljs.core.rest(arglist__78089);
return G__78087__delegate(path1,path2,paths);
});
G__78087.cljs$core$IFn$_invoke$arity$variadic = G__78087__delegate;
return G__78087;
})()
;
G__78086 = function(path1,path2,var_args){
var paths = var_args;
switch(arguments.length){
case 0:
return G__78086__0.call(this);
case 1:
return G__78086__1.call(this,path1);
case 2:
return G__78086__2.call(this,path1,path2);
default:
var G__78090 = null;
if (arguments.length > 2) {
var G__78091__i = 0, G__78091__a = new Array(arguments.length -  2);
while (G__78091__i < G__78091__a.length) {G__78091__a[G__78091__i] = arguments[G__78091__i + 2]; ++G__78091__i;}
G__78090 = new cljs.core.IndexedSeq(G__78091__a,0,null);
}
return G__78086__3.cljs$core$IFn$_invoke$arity$variadic(path1,path2, G__78090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__78086.cljs$lang$maxFixedArity = 2;
G__78086.cljs$lang$applyTo = G__78086__3.cljs$lang$applyTo;
G__78086.cljs$core$IFn$_invoke$arity$0 = G__78086__0;
G__78086.cljs$core$IFn$_invoke$arity$1 = G__78086__1;
G__78086.cljs$core$IFn$_invoke$arity$2 = G__78086__2;
G__78086.cljs$core$IFn$_invoke$arity$variadic = G__78086__3.cljs$core$IFn$_invoke$arity$variadic;
return G__78086;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the current element and then navigates via the provided path.
 * This can be used to implement pre-order traversal.
 */
com.rpl.specter.stay_then_continue = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__78092__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(com.rpl.specter.STAY,path) : com.rpl.specter.multi_path.call(null,com.rpl.specter.STAY,path));
};
var G__78092 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__78093__i = 0, G__78093__a = new Array(arguments.length -  0);
while (G__78093__i < G__78093__a.length) {G__78093__a[G__78093__i] = arguments[G__78093__i + 0]; ++G__78093__i;}
  path = new cljs.core.IndexedSeq(G__78093__a,0,null);
} 
return G__78092__delegate.call(this,path);};
G__78092.cljs$lang$maxFixedArity = 0;
G__78092.cljs$lang$applyTo = (function (arglist__78094){
var path = cljs.core.seq(arglist__78094);
return G__78092__delegate(path);
});
G__78092.cljs$core$IFn$_invoke$arity$variadic = G__78092__delegate;
return G__78092;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigates to the provided path and then to the current element. This can be used
 * to implement post-order traversal.
 */
com.rpl.specter.continue_then_stay = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__78095__delegate = function (path){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(path,com.rpl.specter.STAY) : com.rpl.specter.multi_path.call(null,path,com.rpl.specter.STAY));
};
var G__78095 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__78096__i = 0, G__78096__a = new Array(arguments.length -  0);
while (G__78096__i < G__78096__a.length) {G__78096__a[G__78096__i] = arguments[G__78096__i + 0]; ++G__78096__i;}
  path = new cljs.core.IndexedSeq(G__78096__a,0,null);
} 
return G__78095__delegate.call(this,path);};
G__78095.cljs$lang$maxFixedArity = 0;
G__78095.cljs$lang$applyTo = (function (arglist__78097){
var path = cljs.core.seq(arglist__78097);
return G__78095__delegate(path);
});
G__78095.cljs$core$IFn$_invoke$arity$variadic = G__78095__delegate;
return G__78095;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);
/**
 * Navigate the data structure until reaching
 *        a value for which `afn` returns truthy. Has
 *        same semantics as clojure.walk.
 */
com.rpl.specter.walker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__76670__auto__ = com.rpl.specter.pathcache77961;
var info__76670__auto____$1 = (((info__76670__auto__ == null))?(function (){var info77962 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",new cljs.core.Keyword(null,"file","file",-1269645878),"com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),1430,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)], null)),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1210,1214,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,680,682,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",12,1,2138,2138,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL,new cljs.core.Var(function(){return com.rpl.specter.ALL;},new cljs.core.Symbol("com.rpl.specter","ALL","com.rpl.specter/ALL",-1409005960,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),"com/rpl/specter.cljc",6,1,715,718,cljs.core.List.EMPTY,"Navigate to every element of the collection. For maps navigates to\n          a vector of `[key value]`.",(cljs.core.truth_(com.rpl.specter.ALL)?com.rpl.specter.ALL.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL","ALL",866837407,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL","ALL",866837407,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache77961 = info77962;

return info77962;
})():info__76670__auto__);
var precompiled77963 = com.rpl.specter.impl.cached_path_info_precompiled(info__76670__auto____$1);
var dynamic_QMARK___76671__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__76670__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___76671__auto__)){
var G__77964 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL,p], null),com.rpl.specter.ALL,p], null);
return (precompiled77963.cljs$core$IFn$_invoke$arity$1 ? precompiled77963.cljs$core$IFn$_invoke$arity$1(G__77964) : precompiled77963.call(null,G__77964));
} else {
return precompiled77963;
}
})());

return p;
}));
/**
 * Like `walker` but maintains metadata of any forms traversed.
 */
com.rpl.specter.codewalker = com.rpl.specter.impl.direct_nav_obj((function (afn){
var p = com.rpl.specter.impl.local_declarepath();
com.rpl.specter.impl.providepath_STAR_(p,(function (){var info__76670__auto__ = com.rpl.specter.pathcache77965;
var info__76670__auto____$1 = (((info__76670__auto__ == null))?(function (){var info77966 = com.rpl.specter.impl.magic_precompilation(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.cond_path,new cljs.core.Var(function(){return com.rpl.specter.cond_path;},new cljs.core.Symbol("com.rpl.specter","cond-path","com.rpl.specter/cond-path",97137882,null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"doc","doc",1913296891),"Takes in alternating cond-path path cond-path path...\n   Tests the structure if selecting with cond-path returns anything.\n   If so, it uses the following path for this portion of the navigation.\n   Otherwise, it tries the next cond-path. If nothing matches, then the structure\n   is not selected.",new cljs.core.Keyword(null,"file","file",-1269645878),"com/rpl/specter.cljc",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Keyword(null,"line","line",212345235),1430,new cljs.core.Keyword(null,"column","column",2078222095),1,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Keyword(null,"test","test",577538877),(cljs.core.truth_(com.rpl.specter.cond_path)?com.rpl.specter.cond_path.cljs$lang$test:null)], null)),new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_FnInvocation(com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.pred,new cljs.core.Var(function(){return com.rpl.specter.pred;},new cljs.core.Symbol("com.rpl.specter","pred","com.rpl.specter/pred",1192968523,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"direct-nav","direct-nav",-2100776046),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),"com/rpl/specter.cljc",7,1,true,1210,1214,cljs.core.List.EMPTY,"Keeps the element only if it matches the supplied predicate. Functions in paths\n          implicitly convert to this navigator.",(cljs.core.truth_(com.rpl.specter.pred)?com.rpl.specter.pred.cljs$lang$test:null)])),new cljs.core.Symbol(null,"pred","pred",-727012372,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_LocalSym(afn,new cljs.core.Symbol(null,"afn","afn",216963467,null))], null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null))),com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.STAY,new cljs.core.Var(function(){return com.rpl.specter.STAY;},new cljs.core.Symbol("com.rpl.specter","STAY","com.rpl.specter/STAY",-176499375,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),"com/rpl/specter.cljc",7,1,680,682,cljs.core.List.EMPTY,"Stays navigated at the current point. Essentially a no-op navigator.",(cljs.core.truth_(com.rpl.specter.STAY)?com.rpl.specter.STAY.cljs$lang$test:null)])),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null)),com.rpl.specter.impl.__GT_VarUse(cljs.core.coll_QMARK_,new cljs.core.Var(function(){return cljs.core.coll_QMARK_;},new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),"cljs/core.cljs",12,1,2138,2138,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null)], null)),"Returns true if x satisfies ICollection",(cljs.core.truth_(cljs.core.coll_QMARK_)?cljs.core.coll_QMARK_.cljs$lang$test:null)])),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.impl.__GT_VarUse(com.rpl.specter.ALL_WITH_META,new cljs.core.Var(function(){return com.rpl.specter.ALL_WITH_META;},new cljs.core.Symbol("com.rpl.specter","ALL-WITH-META","com.rpl.specter/ALL-WITH-META",-1161868995,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"com.rpl.specter","com.rpl.specter",-2029095616,null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),"com/rpl/specter.cljc",16,1,725,727,cljs.core.List.EMPTY,"Same as ALL, except maintains metadata on the structure.",(cljs.core.truth_(com.rpl.specter.ALL_WITH_META)?com.rpl.specter.ALL_WITH_META.cljs$lang$test:null)])),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null)),com.rpl.specter.impl.__GT_LocalSym(p,new cljs.core.Symbol(null,"p","p",1791580836,null))], null)], null),cljs.core.list(new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),cljs.core.list(new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null)),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null)))], null),"com.rpl.specter",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cond-path","cond-path",-1167797965,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"afn","afn",216963467,null),new cljs.core.Symbol(null,"STAY","STAY",1628009270,null),new cljs.core.Symbol(null,"coll?","coll?",-1874821441,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null),new cljs.core.Symbol(null,"ALL-WITH-META","ALL-WITH-META",250401700,null),new cljs.core.Symbol(null,"p","p",1791580836,null)], null));
com.rpl.specter.pathcache77965 = info77966;

return info77966;
})():info__76670__auto__);
var precompiled77967 = com.rpl.specter.impl.cached_path_info_precompiled(info__76670__auto____$1);
var dynamic_QMARK___76671__auto__ = com.rpl.specter.impl.cached_path_info_dynamic_QMARK_(info__76670__auto____$1);
if(cljs.core.truth_(dynamic_QMARK___76671__auto__)){
var G__77968 = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.cond_path,com.rpl.specter.pred,afn,com.rpl.specter.STAY,cljs.core.coll_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [com.rpl.specter.ALL_WITH_META,p], null),com.rpl.specter.ALL_WITH_META,p], null);
return (precompiled77967.cljs$core$IFn$_invoke$arity$1 ? precompiled77967.cljs$core$IFn$_invoke$arity$1(G__77968) : precompiled77967.call(null,G__77968));
} else {
return precompiled77967;
}
})());

return p;
}));
var empty__GT_NONE_78099 = (function (){var G__77969 = cljs.core.empty_QMARK_;
var G__77970 = com.rpl.specter.terminal_val(com.rpl.specter.NONE);
return (com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.if_path.cljs$core$IFn$_invoke$arity$2(G__77969,G__77970) : com.rpl.specter.if_path.call(null,G__77969,G__77970));
})();
var compact_STAR__78100 = (function (nav){
return (com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2 ? com.rpl.specter.multi_path.cljs$core$IFn$_invoke$arity$2(nav,empty__GT_NONE_78099) : com.rpl.specter.multi_path.call(null,nav,empty__GT_NONE_78099));
});
/**
 * During transforms, after each step of navigation in subpath check if the
 *  value is empty. If so, remove that value by setting it to NONE.
 */
com.rpl.specter.compact = cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(com.rpl.specter.wrap_dynamic_nav((function() { 
var G__78101__delegate = function (path){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(compact_STAR__78100,path);
};
var G__78101 = function (var_args){
var path = null;
if (arguments.length > 0) {
var G__78102__i = 0, G__78102__a = new Array(arguments.length -  0);
while (G__78102__i < G__78102__a.length) {G__78102__a[G__78102__i] = arguments[G__78102__i + 0]; ++G__78102__i;}
  path = new cljs.core.IndexedSeq(G__78102__a,0,null);
} 
return G__78101__delegate.call(this,path);};
G__78101.cljs$lang$maxFixedArity = 0;
G__78101.cljs$lang$applyTo = (function (arglist__78103){
var path = cljs.core.seq(arglist__78103);
return G__78101__delegate(path);
});
G__78101.cljs$core$IFn$_invoke$arity$variadic = G__78101__delegate;
return G__78101;
})()
),cljs.core.assoc,new cljs.core.Keyword(null,"dynamicnav","dynamicnav",1267703844),true);

//# sourceMappingURL=com.rpl.specter.js.map
