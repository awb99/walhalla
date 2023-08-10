goog.provide('modular.oauth2.user.view');
modular.oauth2.user.view.header_ico = (function modular$oauth2$user$view$header_ico(fa_icon,rf_dispatch){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(rf_dispatch);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"hover:text-blue-700"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["fa-lg pl-1 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fa_icon)].join('')], null)], null)], null);
});
modular.oauth2.user.view.header_icon = (function modular$oauth2$user$view$header_icon(fa_icon,rf_dispatch,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.tooltip.with_tooltip,text,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [modular.oauth2.user.view.header_ico,fa_icon,rf_dispatch], null)], null);
});
modular.oauth2.user.view.user_login = (function modular$oauth2$user$view$user_login(){
var user = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("oauth2","user","oauth2/user",-1906845315)], null));
return (function (){
if(cljs.core.truth_(cljs.core.deref(user))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-green-800","span.text-green-800",-890421382),["user: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(user))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.text-red-500","span.text-red-500",442347414),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [modular.oauth2.user.view.header_icon,"fas fa-user",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("login","dialog","login/dialog",1186171536)], null),"log in"], null)], null);
}
});
});

//# sourceMappingURL=modular.oauth2.user.view.js.map
