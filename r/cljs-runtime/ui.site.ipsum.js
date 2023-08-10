goog.provide('ui.site.ipsum');
ui.site.ipsum.sentences = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.","Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. ","Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. ","Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? ","Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"], null);
ui.site.ipsum.random_sentence = (function ui$site$ipsum$random_sentence(var_args){
var G__54622 = arguments.length;
switch (G__54622) {
case 0:
return ui.site.ipsum.random_sentence.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ui.site.ipsum.random_sentence.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ui.site.ipsum.random_sentence.cljs$core$IFn$_invoke$arity$0 = (function (){
return ui.site.ipsum.random_sentence.cljs$core$IFn$_invoke$arity$1((1));
}));

(ui.site.ipsum.random_sentence.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ui.site.ipsum.sentences,cljs.core.rand_int(cljs.core.count(ui.site.ipsum.sentences)));
})));
}));

(ui.site.ipsum.random_sentence.cljs$lang$maxFixedArity = 1);

ui.site.ipsum.random_word = (function ui$site$ipsum$random_word(var_args){
var G__54641 = arguments.length;
switch (G__54641) {
case 0:
return ui.site.ipsum.random_word.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ui.site.ipsum.random_word.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ui.site.ipsum.random_word.cljs$core$IFn$_invoke$arity$0 = (function (){
return ui.site.ipsum.random_word.cljs$core$IFn$_invoke$arity$1((1));
}));

(ui.site.ipsum.random_word.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,clojure.string.split.cljs$core$IFn$_invoke$arity$2(cljs.core.first(ui.site.ipsum.random_sentence.cljs$core$IFn$_invoke$arity$0()),/[, ]/));
}));

(ui.site.ipsum.random_word.cljs$lang$maxFixedArity = 1);

ui.site.ipsum.random_paragraph = (function ui$site$ipsum$random_paragraph(var_args){
var G__54648 = arguments.length;
switch (G__54648) {
case 0:
return ui.site.ipsum.random_paragraph.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return ui.site.ipsum.random_paragraph.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ui.site.ipsum.random_paragraph.cljs$core$IFn$_invoke$arity$0 = (function (){
return ui.site.ipsum.random_paragraph.cljs$core$IFn$_invoke$arity$1((1));
}));

(ui.site.ipsum.random_paragraph.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2(n,cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",ui.site.ipsum.random_sentence.cljs$core$IFn$_invoke$arity$1((5)));
})));
}));

(ui.site.ipsum.random_paragraph.cljs$lang$maxFixedArity = 1);

ui.site.ipsum.wrap_p = (function ui$site$ipsum$wrap_p(s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.pb-3","p.pb-3",390178813),s], null);
});
ui.site.ipsum.ipsum = (function ui$site$ipsum$ipsum(n){
var ps = ui.site.ipsum.random_paragraph.cljs$core$IFn$_invoke$arity$1(n);
var t = cljs.core.map.cljs$core$IFn$_invoke$arity$2(ui.site.ipsum.wrap_p,ps);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),t);
});

//# sourceMappingURL=ui.site.ipsum.js.map
