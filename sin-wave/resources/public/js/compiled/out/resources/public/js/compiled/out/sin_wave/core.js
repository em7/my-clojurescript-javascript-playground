// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('sin_wave.core');
goog.require('cljs.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.println.call(null,"This text is printed from src/sin-wave/core.cljs. Go ahead and edit it and see reloading in action.");
sin_wave.core.rx_interval = rxjs.interval;
sin_wave.core.rx_concat = rxjs.concat;
sin_wave.core.rx_defer = rxjs.defer;
sin_wave.core.rx_from_event = rxjs.fromEvent;
sin_wave.core.rx_take_until = rxjs.operators.takeUntil;
sin_wave.core.rx_take = rxjs.operators.take;
sin_wave.core.rx_map = rxjs.operators.map;
sin_wave.core.app_time = sin_wave.core.rx_interval.call(null,(10));
if((typeof sin_wave !== 'undefined') && (typeof sin_wave.core !== 'undefined') && (typeof sin_wave.core.app_state !== 'undefined')){
} else {
sin_wave.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
sin_wave.core.canvas = (function sin_wave$core$canvas(){
return document.getElementById("myCanvas");
});
sin_wave.core.ctx = (function sin_wave$core$ctx(){
return sin_wave.core.canvas.call(null).getContext("2d");
});
sin_wave.core.deg_to_rad = (function sin_wave$core$deg_to_rad(n){
return ((Math.PI / (180)) * n);
});
sin_wave.core.sine_coord = (function sin_wave$core$sine_coord(x){
var sin = Math.sin(sin_wave.core.deg_to_rad.call(null,x));
var y = ((100) - (sin * (90)));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"sin","sin",80907862),sin], null);
});
sin_wave.core.sine_wave = sin_wave.core.app_time.pipe(sin_wave.core.rx_map.call(null,sin_wave.core.sine_coord));
sin_wave.core.fill_rect = (function sin_wave$core$fill_rect(x,y,colour){
(sin_wave.core.ctx.call(null).fillStyle = colour);

return sin_wave.core.ctx.call(null).fillRect(x,y,(2),(2));
});
sin_wave.core.red = sin_wave.core.app_time.pipe(sin_wave.core.rx_map.call(null,(function (_){
return "red";
})));
sin_wave.core.blue = sin_wave.core.app_time.pipe(sin_wave.core.rx_map.call(null,(function (_){
return "blue";
})));
sin_wave.core.mouse_click = sin_wave.core.rx_from_event.call(null,sin_wave.core.canvas.call(null),"click");
sin_wave.core.cycle_colour = sin_wave.core.rx_concat.call(null,sin_wave.core.red.pipe(sin_wave.core.rx_take_until.call(null,sin_wave.core.mouse_click)),sin_wave.core.rx_defer.call(null,(function (){
return sin_wave.core.rx_concat.call(null,sin_wave.core.blue.pipe(sin_wave.core.rx_take_until.call(null,sin_wave.core.mouse_click)),sin_wave.core.cycle_colour);
})));
rxjs.zip(sin_wave.core.sine_wave,sin_wave.core.cycle_colour).pipe(sin_wave.core.rx_take.call(null,(700))).subscribe((function (p__22795){
var vec__22796 = p__22795;
var map__22799 = cljs.core.nth.call(null,vec__22796,(0),null);
var map__22799__$1 = (((((!((map__22799 == null))))?(((((map__22799.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__22799.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22799):map__22799);
var x = cljs.core.get.call(null,map__22799__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__22799__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var colour = cljs.core.nth.call(null,vec__22796,(1),null);
return sin_wave.core.fill_rect.call(null,x,y,colour);
}));
sin_wave.core.on_js_reload = (function sin_wave$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1615048417062
