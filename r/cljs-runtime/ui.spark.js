goog.provide('ui.spark');
var module$node_modules$react_sparklines$build$index=shadow.js.require("module$node_modules$react_sparklines$build$index", {});
/**
 * displays sparkline line-plot
 * example:
 *  [:p/sparkline {:data [1 2 3 4 5] :limit 20 :width 100 :height 20 :margin 5 :svgWidth 100 :svgHeight 20}]
 * 
 */
ui.spark.sparkline = (function ui$spark$sparkline(data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_sparklines$build$index.Sparklines,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_sparklines$build$index.SparklinesLine,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null)], null)], null);
});
/**
 * displays sparkline bar-plot
 * example:
 *   [:p/sparklinebar {:data [5, 10, 5, 20, 10] :limit 5 :svgWidth 100 :svgHeight 20 :margin 5}]
 * 
 */
ui.spark.sparkline_bar = (function ui$spark$sparkline_bar(data){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_sparklines$build$index.Sparklines,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_sparklines$build$index.SparklinesBars,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null)], null)], null);
});
/**
 * displays sparkline bar-plot
 * example:
 *  [:p/sparklinespot {:data [1 5 77 4 55] :limit 100 :svgWidth 100 :svgHeight 20 :margin 1}]
 *   
 */
ui.spark.sparkline_spot = (function ui$spark$sparkline_spot(data){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_sparklines$build$index.Sparklines,data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_sparklines$build$index.SparklinesLine,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_sparklines$build$index.SparklinesSpots,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"blue"], null)], null)], null);
});

//# sourceMappingURL=ui.spark.js.map
