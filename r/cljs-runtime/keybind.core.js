goog.provide('keybind.core');
keybind.core.MODS = cljs.core.PersistentHashMap.fromArrays(["option","M","S","super","win","C","shift","alt","control","cmd","meta","ctrl","defmod"],[new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"shift","shift",997140064),new cljs.core.Keyword(null,"alt","alt",-3214426),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.Keyword(null,"ctrl","ctrl",361402094),(((navigator.userAgent.indexOf("Mac OS X") < (0)))?new cljs.core.Keyword(null,"ctrl","ctrl",361402094):new cljs.core.Keyword(null,"meta","meta",1499536964))]);
keybind.core.KEYATTRS = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shift","shift",997140064),"shiftKey",new cljs.core.Keyword(null,"ctrl","ctrl",361402094),"ctrlKey",new cljs.core.Keyword(null,"alt","alt",-3214426),"altKey",new cljs.core.Keyword(null,"meta","meta",1499536964),"metaKey",new cljs.core.Keyword(null,"code","code",1586293142),"keyCode"], null);
keybind.core.DEFCHORD = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"shift","shift",997140064),false,new cljs.core.Keyword(null,"ctrl","ctrl",361402094),false,new cljs.core.Keyword(null,"alt","alt",-3214426),false,new cljs.core.Keyword(null,"meta","meta",1499536964),false], null);
keybind.core.KEYS = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentHashMap.fromArrays(["]","'","space","tab","=","`","right","*","kpplus","up","delete","caps","/","plus","return","-","ins","backspace","minus","capslock","escape","del","pgdown","pageup","pause","down","home",".",";",",","insert","pagedown","[","pgup","kpminus","\\","enter","+","end","esc","left"],[(221),(222),(32),(9),(187),(192),(39),(106),(107),(38),(46),(20),(191),(107),(13),(189),(45),(8),(189),(20),(27),(46),(34),(33),(19),(40),(36),(190),(186),(188),(45),(34),(219),(33),(109),(220),(13),(107),(35),(27),(37)]),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function keybind$core$iter__57921(s__57922){
return (new cljs.core.LazySeq(null,(function (){
var s__57922__$1 = s__57922;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__57922__$1);
if(temp__5804__auto__){
var s__57922__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57922__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__57922__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__57924 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__57923 = (0);
while(true){
if((i__57923 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__57923);
cljs.core.chunk_append(b__57924,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["num-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null));

var G__58121 = (i__57923 + (1));
i__57923 = G__58121;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57924),keybind$core$iter__57921(cljs.core.chunk_rest(s__57922__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57924),null);
}
} else {
var i = cljs.core.first(s__57922__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["num-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((95) + i)], null),keybind$core$iter__57921(cljs.core.rest(s__57922__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function keybind$core$iter__57944(s__57945){
return (new cljs.core.LazySeq(null,(function (){
var s__57945__$1 = s__57945;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__57945__$1);
if(temp__5804__auto__){
var s__57945__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57945__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__57945__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__57947 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__57946 = (0);
while(true){
if((i__57946 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__57946);
cljs.core.chunk_append(b__57947,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),((48) + i)], null));

var G__58125 = (i__57946 + (1));
i__57946 = G__58125;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57947),keybind$core$iter__57944(cljs.core.chunk_rest(s__57945__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57947),null);
}
} else {
var i = cljs.core.first(s__57945__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),((48) + i)], null),keybind$core$iter__57944(cljs.core.rest(s__57945__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((10)));
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function keybind$core$iter__57961(s__57962){
return (new cljs.core.LazySeq(null,(function (){
var s__57962__$1 = s__57962;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__57962__$1);
if(temp__5804__auto__){
var s__57962__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57962__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__57962__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__57964 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__57963 = (0);
while(true){
if((i__57963 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__57963);
cljs.core.chunk_append(b__57964,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null));

var G__58126 = (i__57963 + (1));
i__57963 = G__58126;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57964),keybind$core$iter__57961(cljs.core.chunk_rest(s__57962__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57964),null);
}
} else {
var i = cljs.core.first(s__57962__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["f",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),((111) + i)], null),keybind$core$iter__57961(cljs.core.rest(s__57962__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(25)));
})()),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function keybind$core$iter__57970(s__57971){
return (new cljs.core.LazySeq(null,(function (){
var s__57971__$1 = s__57971;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__57971__$1);
if(temp__5804__auto__){
var s__57971__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57971__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__57971__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__57973 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__57972 = (0);
while(true){
if((i__57972 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__57972);
cljs.core.chunk_append(b__57973,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null));

var G__58138 = (i__57972 + (1));
i__57972 = G__58138;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57973),keybind$core$iter__57970(cljs.core.chunk_rest(s__57971__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57973),null);
}
} else {
var i = cljs.core.first(s__57971__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [String.fromCharCode(i).toLowerCase(),i], null),keybind$core$iter__57970(cljs.core.rest(s__57971__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((65),(91)));
})())], 0));
keybind.core.KNOWN_KEYS = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function keybind$core$iter__57980(s__57981){
return (new cljs.core.LazySeq(null,(function (){
var s__57981__$1 = s__57981;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__57981__$1);
if(temp__5804__auto__){
var s__57981__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__57981__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__57981__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__57983 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__57982 = (0);
while(true){
if((i__57982 < size__5522__auto__)){
var vec__57986 = cljs.core._nth(c__5521__auto__,i__57982);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57986,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57986,(1),null);
cljs.core.chunk_append(b__57983,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null));

var G__58147 = (i__57982 + (1));
i__57982 = G__58147;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__57983),keybind$core$iter__57980(cljs.core.chunk_rest(s__57981__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__57983),null);
}
} else {
var vec__58001 = cljs.core.first(s__57981__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58001,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58001,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,k], null),keybind$core$iter__57980(cljs.core.rest(s__57981__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(keybind.core.KEYS);
})());
if((typeof keybind !== 'undefined') && (typeof keybind.core !== 'undefined') && (typeof keybind.core.BINDINGS !== 'undefined')){
} else {
keybind.core.BINDINGS = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof keybind !== 'undefined') && (typeof keybind.core !== 'undefined') && (typeof keybind.core.PRESSED !== 'undefined')){
} else {
keybind.core.PRESSED = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof keybind !== 'undefined') && (typeof keybind.core !== 'undefined') && (typeof keybind.core.ENABLED_QMARK_ !== 'undefined')){
} else {
keybind.core.ENABLED_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
}
keybind.core.button__GT_code = (function keybind$core$button__GT_code(button){
var temp__5802__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(keybind.core.KEYS,button);
if(cljs.core.truth_(temp__5802__auto__)){
var code = temp__5802__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [code,null], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(keybind.core.KEYS,button.toLowerCase()),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shift","shift",997140064),true], null)], null);
}
});
keybind.core.parse_chord = (function keybind$core$parse_chord(keystring){
var bits = keystring.split(/-(?!$)/);
var button = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(bits,(cljs.core.count(bits) - (1)));
var vec__58038 = keybind.core.button__GT_code(button);
var code = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58038,(0),null);
var mods = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58038,(1),null);
if(cljs.core.truth_(code)){
} else {
throw (new Error(["Unknown key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(button),"' in keystring '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystring),"'"].join('')));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (mods__$1,mod){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mods__$1,mod,true);
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keybind.core.DEFCHORD,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),code], null),mods], 0)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58034_SHARP_){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(keybind.core.MODS,p1__58034_SHARP_);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw (new Error(["Unknown modifier '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.mod),"' in keystring '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(keystring),"'"].join('')));
}
}),cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(bits)));
});
keybind.core.parse = (function keybind$core$parse(chain){
var bits = chain.split(" ");
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(keybind.core.parse_chord,bits);
});
keybind.core.e__GT_chord = (function keybind$core$e__GT_chord(e){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5523__auto__ = (function keybind$core$e__GT_chord_$_iter__58053(s__58054){
return (new cljs.core.LazySeq(null,(function (){
var s__58054__$1 = s__58054;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__58054__$1);
if(temp__5804__auto__){
var s__58054__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__58054__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__58054__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__58056 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__58055 = (0);
while(true){
if((i__58055 < size__5522__auto__)){
var vec__58063 = cljs.core._nth(c__5521__auto__,i__58055);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58063,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58063,(1),null);
cljs.core.chunk_append(b__58056,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null));

var G__58170 = (i__58055 + (1));
i__58055 = G__58170;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__58056),keybind$core$e__GT_chord_$_iter__58053(cljs.core.chunk_rest(s__58054__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__58056),null);
}
} else {
var vec__58067 = cljs.core.first(s__58054__$2);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58067,(0),null);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58067,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,(e[attr])], null),keybind$core$e__GT_chord_$_iter__58053(cljs.core.rest(s__58054__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(keybind.core.KEYATTRS);
})());
});
keybind.core.reset_sequence_BANG_ = (function keybind$core$reset_sequence_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(keybind.core.PRESSED,cljs.core.empty);
});
keybind.core.dispatch = (function keybind$core$dispatch(e,bindings){
var chord = keybind.core.e__GT_chord(e);
var sequence = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(keybind.core.PRESSED),chord);
var inner = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(bindings,sequence);
var handlers = new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(inner);
if(cljs.core.not(inner)){
return keybind.core.reset_sequence_BANG_();
} else {
if(cljs.core.truth_(handlers)){
var seq__58075_58173 = cljs.core.seq(new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(inner));
var chunk__58076_58174 = null;
var count__58077_58175 = (0);
var i__58078_58176 = (0);
while(true){
if((i__58078_58176 < count__58077_58175)){
var vec__58099_58180 = chunk__58076_58174.cljs$core$IIndexed$_nth$arity$2(null,i__58078_58176);
var __58181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58099_58180,(0),null);
var handler_58182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58099_58180,(1),null);
(handler_58182.cljs$core$IFn$_invoke$arity$2 ? handler_58182.cljs$core$IFn$_invoke$arity$2(e,sequence) : handler_58182.call(null,e,sequence));


var G__58187 = seq__58075_58173;
var G__58188 = chunk__58076_58174;
var G__58189 = count__58077_58175;
var G__58190 = (i__58078_58176 + (1));
seq__58075_58173 = G__58187;
chunk__58076_58174 = G__58188;
count__58077_58175 = G__58189;
i__58078_58176 = G__58190;
continue;
} else {
var temp__5804__auto___58191 = cljs.core.seq(seq__58075_58173);
if(temp__5804__auto___58191){
var seq__58075_58192__$1 = temp__5804__auto___58191;
if(cljs.core.chunked_seq_QMARK_(seq__58075_58192__$1)){
var c__5568__auto___58193 = cljs.core.chunk_first(seq__58075_58192__$1);
var G__58194 = cljs.core.chunk_rest(seq__58075_58192__$1);
var G__58195 = c__5568__auto___58193;
var G__58196 = cljs.core.count(c__5568__auto___58193);
var G__58197 = (0);
seq__58075_58173 = G__58194;
chunk__58076_58174 = G__58195;
count__58077_58175 = G__58196;
i__58078_58176 = G__58197;
continue;
} else {
var vec__58103_58198 = cljs.core.first(seq__58075_58192__$1);
var __58199 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58103_58198,(0),null);
var handler_58200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58103_58198,(1),null);
(handler_58200.cljs$core$IFn$_invoke$arity$2 ? handler_58200.cljs$core$IFn$_invoke$arity$2(e,sequence) : handler_58200.call(null,e,sequence));


var G__58201 = cljs.core.next(seq__58075_58192__$1);
var G__58202 = null;
var G__58203 = (0);
var G__58204 = (0);
seq__58075_58173 = G__58201;
chunk__58076_58174 = G__58202;
count__58077_58175 = G__58203;
i__58078_58176 = G__58204;
continue;
}
} else {
}
}
break;
}

return keybind.core.reset_sequence_BANG_();
} else {
return cljs.core.reset_BANG_(keybind.core.PRESSED,sequence);

}
}
});
keybind.core.bind = (function keybind$core$bind(bindings,spec,key,cb){

var parsed = keybind.core.parse(spec);
return cljs.core.assoc_in(bindings,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(parsed,new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0)),cb);
});
keybind.core.unbind = (function keybind$core$unbind(bindings,spec,key){

var parsed = keybind.core.parse(spec);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(bindings,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(parsed,new cljs.core.Keyword(null,"handlers","handlers",79528781)),cljs.core.dissoc,key);
});
keybind.core.bind_BANG_ = (function keybind$core$bind_BANG_(spec,key,cb){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(keybind.core.BINDINGS,keybind.core.bind,spec,key,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cb], 0));
});
keybind.core.unbind_BANG_ = (function keybind$core$unbind_BANG_(spec,key){

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(keybind.core.BINDINGS,keybind.core.unbind,spec,key);
});
keybind.core.unbind_all_BANG_ = (function keybind$core$unbind_all_BANG_(){

keybind.core.reset_sequence_BANG_();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(keybind.core.BINDINGS,cljs.core.empty);
});
keybind.core.disable_BANG_ = (function keybind$core$disable_BANG_(){

return cljs.core.reset_BANG_(keybind.core.ENABLED_QMARK_,false);
});
keybind.core.enable_BANG_ = (function keybind$core$enable_BANG_(){

return cljs.core.reset_BANG_(keybind.core.ENABLED_QMARK_,true);
});
keybind.core.dispatcher_BANG_ = (function keybind$core$dispatcher_BANG_(bindings){

return (function (e){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.deref(keybind.core.ENABLED_QMARK_);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(keybind.core.KNOWN_KEYS,e.keyCode);
} else {
return and__5043__auto__;
}
})())){
return keybind.core.dispatch(e,cljs.core.deref(bindings));
} else {
return null;
}
});
});
if((typeof keybind !== 'undefined') && (typeof keybind.core !== 'undefined') && (typeof keybind.core.bind_keypress_listener !== 'undefined')){
} else {
keybind.core.bind_keypress_listener = addEventListener("keydown",keybind.core.dispatcher_BANG_(keybind.core.BINDINGS),false);
}

//# sourceMappingURL=keybind.core.js.map
