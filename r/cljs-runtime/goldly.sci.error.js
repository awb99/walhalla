goog.provide('goldly.sci.error');
goldly.sci.error.sci_error = (function goldly$sci$error$sci_error(error){
var map__50722 = error;
var map__50722__$1 = cljs.core.__destructure_map(map__50722);
var err = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50722__$1,new cljs.core.Keyword(null,"err","err",-2089457205));
var root_ex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50722__$1,new cljs.core.Keyword(null,"root-ex","root-ex",-1080814778));
var map__50723 = root_ex;
var map__50723__$1 = cljs.core.__destructure_map(map__50723);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50723__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50723__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50723__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50723__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50723__$1,new cljs.core.Keyword(null,"phase","phase",575722892));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block","div.inline-block",-502349916),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-red-500.text-bold","p.text-red-500.text-bold",2083907018),err], null),(cljs.core.truth_(root_ex)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"phase: ",phase," type: ",type], null):null),(cljs.core.truth_(root_ex)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"file: ",file,"line: ",line," column: ",column], null):null)], null);
});
goldly.sci.error.error_view = (function goldly$sci$error$error_view(filename,error){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block","div.inline-block",-502349916),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"sci cljs compile error in file: ",filename], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goldly.sci.error.sci_error,error], null)], null);
});
goldly.sci.error.show_sci_error = (function goldly$sci$error$show_sci_error(filename,error){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.sci.error",null,29,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["compilation failed: ",filename,error], null);
}),null)),null,(201),null);

return frontend.notifications.core.add_notification.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"error","error",-978969032),goldly.sci.error.error_view(filename,error),(0));
});
goldly.sci.error.exception__GT_error = (function goldly$sci$error$exception__GT_error(e){
var data = cljs.core.ex_data(e);
var temp__5804__auto__ = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return e.message;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var message = temp__5804__auto__;
var data__$1 = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return e.data;
}
})();
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.sci.error",null,41,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error-message:",message], null);
}),null)),null,(202),null);

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"goldly.sci.error",null,42,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["error-data:",data__$1], null);
}),null)),null,(203),null);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"err","err",-2089457205),message,new cljs.core.Keyword(null,"root-ex","root-ex",-1080814778),data__$1], null);
} else {
return null;
}
});

//# sourceMappingURL=goldly.sci.error.js.map
