goog.provide('ui.codemirror.cm_js.completion');
ui.codemirror.cm_js.completion.wordChars = "[^\\s\\(\\)\\[\\]\\{\\},`']*";
ui.codemirror.cm_js.completion.word_in_line = (function ui$codemirror$cm_js$completion$word_in_line(line,lno,cno){
var back = cljs.core.get.cljs$core$IFn$_invoke$arity$2(line.slice((0),cno).match((new RegExp([ui.codemirror.cm_js.completion.wordChars,"$"].join('')))),(0));
var forward = cljs.core.get.cljs$core$IFn$_invoke$arity$2(line.slice(cno).match((new RegExp(["^",ui.codemirror.cm_js.completion.wordChars].join('')))),(0));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),({"line": lno, "ch": (cno - cljs.core.count(back))}),new cljs.core.Keyword(null,"end","end",-268185958),({"line": lno, "ch": (cno + cljs.core.count(forward))})], null);
});
ui.codemirror.cm_js.completion.cm_get_range = (function ui$codemirror$cm_js$completion$cm_get_range(cm,range){
return cm.getRange(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(range),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(range));
});
/**
 * Find the current 'word' according to CodeMirror's `wordChars' list
 */
ui.codemirror.cm_js.completion.cm_current_word_range = (function ui$codemirror$cm_js$completion$cm_current_word_range(cm){
var pos = cm.getCursor();
var line_no = pos.line;
var column_no = pos.ch;
var line_range = cm.getLine(line_no);
if(cljs.core.truth_(line_range)){
return ui.codemirror.cm_js.completion.word_in_line(line_range,line_no,column_no);
} else {
return null;
}
});
/**
 * Find the current 'word' according to CodeMirror's `wordChars' list
 */
ui.codemirror.cm_js.completion.cm_current_word = (function ui$codemirror$cm_js$completion$cm_current_word(cm){
var word_range = ui.codemirror.cm_js.completion.cm_current_word_range(cm);
return ui.codemirror.cm_js.completion.cm_get_range(cm,word_range);
});
ui.codemirror.cm_js.completion.cm_replace_current_word = (function ui$codemirror$cm_js$completion$cm_replace_current_word(cm,new_word){
var word_range = ui.codemirror.cm_js.completion.cm_current_word_range(cm);
var doc = cm.getDoc();
var start = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(word_range);
var end = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(word_range);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui.codemirror.cm-js.completion",null,108,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["replacing range ",start," - ",end," with ",new_word], null);
}),null)),null,(95),null);

doc.replaceRange(new_word,cljs.core.clj__GT_js(start),cljs.core.clj__GT_js(end));

return null;
});
ui.codemirror.cm_js.completion.get_completion_candidates = (function ui$codemirror$cm_js$completion$get_completion_candidates(p__54613){
var map__54614 = p__54613;
var map__54614__$1 = cljs.core.__destructure_map(map__54614);
var context = map__54614__$1;
var cm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54614__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
var word = ui.codemirror.cm_js.completion.cm_current_word(cm);
if(cljs.core.empty_QMARK_(word)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"ui.codemirror.cm-js.completion",null,117,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no current word - cannot get hint!"], null);
}),null)),null,(97),null);
} else {
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"ui.codemirror.cm-js.completion",null,119,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["getting code-completion for word: ",word], null);
}),null)),null,(98),null);

ui.codemirror.fun.dispatch(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("cm","hint","cm/hint",439643032),word], null));

return true;
}
});
/**
 * Get a new completion state.
 */
ui.codemirror.cm_js.completion.hint = (function ui$codemirror$cm_js$completion$hint(p__54616,evt){
var map__54617 = p__54616;
var map__54617__$1 = cljs.core.__destructure_map(map__54617);
var context = map__54617__$1;
var cm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54617__$1,new cljs.core.Keyword(null,"cm","cm",540591536));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"ui.codemirror.cm-js.completion",null,126,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hint-get .. "], null);
}),null)),null,(100),null);

if(cljs.core.truth_(cm)){
ui.codemirror.cm_js.completion.get_completion_candidates(context);
} else {
}

return evt.preventDefault();
});

//# sourceMappingURL=ui.codemirror.cm_js.completion.js.map
