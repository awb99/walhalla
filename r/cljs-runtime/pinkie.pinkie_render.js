goog.provide('pinkie.pinkie_render');
pinkie.pinkie_render.reagent_inject = (function pinkie$pinkie_render$reagent_inject(p__50322,component){
var map__50323 = p__50322;
var map__50323__$1 = cljs.core.__destructure_map(map__50323);
var map_keywords = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50323__$1,new cljs.core.Keyword(null,"map-keywords","map-keywords",-170077571),true);
var fix_style = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50323__$1,new cljs.core.Keyword(null,"fix-style","fix-style",-1909661792),true);
var component__$1 = pinkie.pinkie.convert_render_as(component);
var component__$2 = (cljs.core.truth_(map_keywords)?pinkie.pinkie.tag_inject(component__$1):component__$1);
var component__$3 = (cljs.core.truth_(fix_style)?pinkie.pinkie.convert_style_as_strings_to_map(component__$2):component__$2);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.reagent-output","div.reagent-output",-1411580514),component__$3], null);
});
/**
 * renders a reagent hiccup vector that can contain pinkie components.
 * wrapped with react error boundary.
 * 
 * [:p/pinkie {:map-keywords true
 *             :fix-style false}
 *            [:p/vega spec]]
 * 
 */
pinkie.pinkie_render.pinkie_render = (function pinkie$pinkie_render$pinkie_render(var_args){
var G__50325 = arguments.length;
switch (G__50325) {
case 1:
return pinkie.pinkie_render.pinkie_render.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return pinkie.pinkie_render.pinkie_render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pinkie.pinkie_render.pinkie_render.cljs$core$IFn$_invoke$arity$1 = (function (pinkie_spec){
return pinkie.pinkie_render.pinkie_render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map-keywords","map-keywords",-170077571),true,new cljs.core.Keyword(null,"fix-style","fix-style",-1909661792),true], null),pinkie_spec);
}));

(pinkie.pinkie_render.pinkie_render.cljs$core$IFn$_invoke$arity$2 = (function (options,pinkie_spec){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkie.error.error_boundary,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [pinkie.pinkie_render.reagent_inject,options,pinkie_spec], null)], null);
}));

(pinkie.pinkie_render.pinkie_render.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=pinkie.pinkie_render.js.map
