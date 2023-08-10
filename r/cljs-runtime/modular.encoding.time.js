goog.provide('modular.encoding.time');
modular.encoding.time.iso_local_time = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("HH:mm:ss.SSS");
modular.encoding.time.iso_local_date = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd");
modular.encoding.time.iso_local_date_time = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSS");
modular.encoding.time.iso_zoned_date_time = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
modular.encoding.time.time_deserialization_handlers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentArrayMap(null, 4, ["LocalTime",cognitect.transit.read_handler((function (p1__58563_SHARP_){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(modular.encoding.time.iso_local_time,p1__58563_SHARP_);
})),"LocalDate",cognitect.transit.read_handler((function (p1__58564_SHARP_){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(modular.encoding.time.iso_local_date,p1__58564_SHARP_);
})),"LocalDateTime",cognitect.transit.read_handler((function (p1__58565_SHARP_){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(modular.encoding.time.iso_local_date_time,p1__58565_SHARP_);
})),"ZonedDateTime",cognitect.transit.read_handler((function (p1__58566_SHARP_){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(modular.encoding.time.iso_zoned_date_time,p1__58566_SHARP_);
}))], null)], null);
modular.encoding.time.time_serialization_handlers = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handlers","handlers",79528781),cljs.core.PersistentArrayMap.createAsIfByAssoc([goog.date.Date,cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly("LocalDate"),(function (p1__58568_SHARP_){
return cljs_time.format.unparse(modular.encoding.time.iso_local_date,p1__58568_SHARP_);
})),goog.date.DateTime,cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly("LocalDateTime"),(function (p1__58569_SHARP_){
return cljs_time.format.unparse(modular.encoding.time.iso_local_date_time,p1__58569_SHARP_);
})),goog.date.UtcDateTime,cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly("ZonedDateTime"),(function (p1__58570_SHARP_){
return cljs_time.format.unparse(modular.encoding.time.iso_zoned_date_time,p1__58570_SHARP_);
}))])], null);

//# sourceMappingURL=modular.encoding.time.js.map
