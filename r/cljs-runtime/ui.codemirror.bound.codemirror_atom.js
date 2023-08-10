goog.provide('ui.codemirror.bound.codemirror_atom');
ui.codemirror.bound.codemirror_atom.codemirror_atom_impl = (function ui$codemirror$bound$codemirror_atom$codemirror_atom_impl(cm_opt,id,a,path){
var get_data = (function (id__$1){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui.codemirror.bound.codemirror-atom",null,8,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cm-text get id:",id__$1], null);
}),null)),null,(132),null);

if(cljs.core.truth_(path)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(a),path);
} else {
return cljs.core.deref(a);
}
});
var save_data = (function (id__$1,text){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui.codemirror.bound.codemirror-atom",null,13,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cm-text save id:",id__$1], null);
}),null)),null,(133),null);

if(cljs.core.truth_(path)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(a,cljs.core.assoc_in,path,text);
} else {
return cljs.core.reset_BANG_(a,text);
}
});
var cm_events = (function (cm_evt){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"info","info",-317069002),"ui.codemirror.bound.codemirror-atom",null,18,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["cm-text event ",cm_evt], null);
}),null)),null,(134),null);
});
var fun = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"get-data","get-data",454586681),get_data,new cljs.core.Keyword(null,"save-data","save-data",-1628617344),save_data,new cljs.core.Keyword(null,"cm-events","cm-events",-58624234),cm_events], null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.codemirror.bound.codemirror_themed.codemirror_themed,id,fun,cm_opt], null);
});
ui.codemirror.bound.codemirror_atom.codemirror_atom = (function ui$codemirror$bound$codemirror_atom$codemirror_atom(id,a,path){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.codemirror.bound.codemirror_atom.codemirror_atom_impl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active?","active?",459499776),true,new cljs.core.Keyword(null,"view-only","view-only",2006764702),false], null),id,a,path], null);
});
ui.codemirror.bound.codemirror_atom.codemirror_atom_viewonly = (function ui$codemirror$bound$codemirror_atom$codemirror_atom_viewonly(id,a,path){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [ui.codemirror.bound.codemirror_atom.codemirror_atom_impl,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active?","active?",459499776),false,new cljs.core.Keyword(null,"view-only","view-only",2006764702),true], null),id,a,path], null);
});

//# sourceMappingURL=ui.codemirror.bound.codemirror_atom.js.map
