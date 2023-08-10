goog.provide('frontend.notifications.core');
frontend.notifications.core.notification_types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"warning","warning",-1685650671),null,new cljs.core.Keyword(null,"info","info",-317069002),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null);
frontend.notifications.core.notification = (function frontend$notifications$core$notification(var_args){
var G__39841 = arguments.length;
switch (G__39841) {
case 1:
return frontend.notifications.core.notification.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.notifications.core.notification.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.notifications.core.notification.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(frontend.notifications.core.notification.cljs$core$IFn$_invoke$arity$1 = (function (hiccup){
return frontend.notifications.core.notification.cljs$core$IFn$_invoke$arity$3(hiccup,new cljs.core.Keyword(null,"info","info",-317069002),(5000));
}));

(frontend.notifications.core.notification.cljs$core$IFn$_invoke$arity$2 = (function (type,hiccup){
return frontend.notifications.core.notification.cljs$core$IFn$_invoke$arity$3(hiccup,type,(5000));
}));

(frontend.notifications.core.notification.cljs$core$IFn$_invoke$arity$3 = (function (type,hiccup,ms){
if(cljs.core.truth_((frontend.notifications.core.notification_types.cljs$core$IFn$_invoke$arity$1 ? frontend.notifications.core.notification_types.cljs$core$IFn$_invoke$arity$1(type) : frontend.notifications.core.notification_types.call(null,type)))){
} else {
throw (new Error("Assert failed: (notification-types type)"));
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid(),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"hiccup","hiccup",1218876238),hiccup,new cljs.core.Keyword(null,"ms","ms",-1152709733),ms], null);
}));

(frontend.notifications.core.notification.cljs$lang$maxFixedArity = 3);

frontend.notifications.core.add_notification = (function frontend$notifications$core$add_notification(var_args){
var G__39869 = arguments.length;
switch (G__39869) {
case 1:
return frontend.notifications.core.add_notification.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return frontend.notifications.core.add_notification.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return frontend.notifications.core.add_notification.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('frontend.notifications.core.add_notification', frontend.notifications.core.add_notification);

(frontend.notifications.core.add_notification.cljs$core$IFn$_invoke$arity$1 = (function (hiccup){
return frontend.notifications.core.add_notification.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"info","info",-317069002),hiccup,(5000));
}));

(frontend.notifications.core.add_notification.cljs$core$IFn$_invoke$arity$2 = (function (type,hiccup){
return frontend.notifications.core.add_notification.cljs$core$IFn$_invoke$arity$3(type,hiccup,(5000));
}));

(frontend.notifications.core.add_notification.cljs$core$IFn$_invoke$arity$3 = (function (type,hiccup,ms){
var n = frontend.notifications.core.notification.cljs$core$IFn$_invoke$arity$3(type,hiccup,ms);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("notification","add","notification/add",-797397960),n], null));

return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(n);
}));

(frontend.notifications.core.add_notification.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=frontend.notifications.core.js.map
