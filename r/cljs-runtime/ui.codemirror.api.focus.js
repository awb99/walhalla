goog.provide('ui.codemirror.api.focus');
ui.codemirror.api.focus.focus = (function ui$codemirror$api$focus$focus(cm){
if(cljs.core.truth_(cm)){
return cm.focus();
} else {
return null;
}
});
ui.codemirror.api.focus.blur = (function ui$codemirror$api$focus$blur(cm){
if(cljs.core.truth_(cm)){
var input = cm.getInputField();
return input.blur();
} else {
return null;
}
});

//# sourceMappingURL=ui.codemirror.api.focus.js.map
