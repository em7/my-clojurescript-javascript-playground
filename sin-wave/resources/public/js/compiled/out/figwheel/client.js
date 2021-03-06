// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e30024){if((e30024 instanceof Error)){
var e = e30024;
return "Error: Unable to stringify";
} else {
throw e30024;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30027 = arguments.length;
switch (G__30027) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30025_SHARP_){
if(typeof p1__30025_SHARP_ === 'string'){
return p1__30025_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30025_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30030 = arguments.length;
var i__4737__auto___30031 = (0);
while(true){
if((i__4737__auto___30031 < len__4736__auto___30030)){
args__4742__auto__.push((arguments[i__4737__auto___30031]));

var G__30032 = (i__4737__auto___30031 + (1));
i__4737__auto___30031 = G__30032;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30029){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30029));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30034 = arguments.length;
var i__4737__auto___30035 = (0);
while(true){
if((i__4737__auto___30035 < len__4736__auto___30034)){
args__4742__auto__.push((arguments[i__4737__auto___30035]));

var G__30036 = (i__4737__auto___30035 + (1));
i__4737__auto___30035 = G__30036;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30033){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30033));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30037){
var map__30038 = p__30037;
var map__30038__$1 = (((((!((map__30038 == null))))?(((((map__30038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30038):map__30038);
var message = cljs.core.get.call(null,map__30038__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30038__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__25936__auto___30117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_30089){
var state_val_30090 = (state_30089[(1)]);
if((state_val_30090 === (7))){
var inst_30085 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
var statearr_30091_30118 = state_30089__$1;
(statearr_30091_30118[(2)] = inst_30085);

(statearr_30091_30118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (1))){
var state_30089__$1 = state_30089;
var statearr_30092_30119 = state_30089__$1;
(statearr_30092_30119[(2)] = null);

(statearr_30092_30119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (4))){
var inst_30042 = (state_30089[(7)]);
var inst_30042__$1 = (state_30089[(2)]);
var state_30089__$1 = (function (){var statearr_30093 = state_30089;
(statearr_30093[(7)] = inst_30042__$1);

return statearr_30093;
})();
if(cljs.core.truth_(inst_30042__$1)){
var statearr_30094_30120 = state_30089__$1;
(statearr_30094_30120[(1)] = (5));

} else {
var statearr_30095_30121 = state_30089__$1;
(statearr_30095_30121[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (15))){
var inst_30049 = (state_30089[(8)]);
var inst_30064 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30049);
var inst_30065 = cljs.core.first.call(null,inst_30064);
var inst_30066 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30065);
var inst_30067 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30066)].join('');
var inst_30068 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30067);
var state_30089__$1 = state_30089;
var statearr_30096_30122 = state_30089__$1;
(statearr_30096_30122[(2)] = inst_30068);

(statearr_30096_30122[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (13))){
var inst_30073 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
var statearr_30097_30123 = state_30089__$1;
(statearr_30097_30123[(2)] = inst_30073);

(statearr_30097_30123[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (6))){
var state_30089__$1 = state_30089;
var statearr_30098_30124 = state_30089__$1;
(statearr_30098_30124[(2)] = null);

(statearr_30098_30124[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (17))){
var inst_30071 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
var statearr_30099_30125 = state_30089__$1;
(statearr_30099_30125[(2)] = inst_30071);

(statearr_30099_30125[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (3))){
var inst_30087 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30089__$1,inst_30087);
} else {
if((state_val_30090 === (12))){
var inst_30048 = (state_30089[(9)]);
var inst_30062 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30048,opts);
var state_30089__$1 = state_30089;
if(inst_30062){
var statearr_30100_30126 = state_30089__$1;
(statearr_30100_30126[(1)] = (15));

} else {
var statearr_30101_30127 = state_30089__$1;
(statearr_30101_30127[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (2))){
var state_30089__$1 = state_30089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30089__$1,(4),ch);
} else {
if((state_val_30090 === (11))){
var inst_30049 = (state_30089[(8)]);
var inst_30054 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30055 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30049);
var inst_30056 = cljs.core.async.timeout.call(null,(1000));
var inst_30057 = [inst_30055,inst_30056];
var inst_30058 = (new cljs.core.PersistentVector(null,2,(5),inst_30054,inst_30057,null));
var state_30089__$1 = state_30089;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30089__$1,(14),inst_30058);
} else {
if((state_val_30090 === (9))){
var inst_30049 = (state_30089[(8)]);
var inst_30075 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30076 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30049);
var inst_30077 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30076);
var inst_30078 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30077)].join('');
var inst_30079 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30078);
var state_30089__$1 = (function (){var statearr_30102 = state_30089;
(statearr_30102[(10)] = inst_30075);

return statearr_30102;
})();
var statearr_30103_30128 = state_30089__$1;
(statearr_30103_30128[(2)] = inst_30079);

(statearr_30103_30128[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (5))){
var inst_30042 = (state_30089[(7)]);
var inst_30044 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30045 = (new cljs.core.PersistentArrayMap(null,2,inst_30044,null));
var inst_30046 = (new cljs.core.PersistentHashSet(null,inst_30045,null));
var inst_30047 = figwheel.client.focus_msgs.call(null,inst_30046,inst_30042);
var inst_30048 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30047);
var inst_30049 = cljs.core.first.call(null,inst_30047);
var inst_30050 = figwheel.client.autoload_QMARK_.call(null);
var state_30089__$1 = (function (){var statearr_30104 = state_30089;
(statearr_30104[(8)] = inst_30049);

(statearr_30104[(9)] = inst_30048);

return statearr_30104;
})();
if(cljs.core.truth_(inst_30050)){
var statearr_30105_30129 = state_30089__$1;
(statearr_30105_30129[(1)] = (8));

} else {
var statearr_30106_30130 = state_30089__$1;
(statearr_30106_30130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (14))){
var inst_30060 = (state_30089[(2)]);
var state_30089__$1 = state_30089;
var statearr_30107_30131 = state_30089__$1;
(statearr_30107_30131[(2)] = inst_30060);

(statearr_30107_30131[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (16))){
var state_30089__$1 = state_30089;
var statearr_30108_30132 = state_30089__$1;
(statearr_30108_30132[(2)] = null);

(statearr_30108_30132[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (10))){
var inst_30081 = (state_30089[(2)]);
var state_30089__$1 = (function (){var statearr_30109 = state_30089;
(statearr_30109[(11)] = inst_30081);

return statearr_30109;
})();
var statearr_30110_30133 = state_30089__$1;
(statearr_30110_30133[(2)] = null);

(statearr_30110_30133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30090 === (8))){
var inst_30048 = (state_30089[(9)]);
var inst_30052 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30048,opts);
var state_30089__$1 = state_30089;
if(cljs.core.truth_(inst_30052)){
var statearr_30111_30134 = state_30089__$1;
(statearr_30111_30134[(1)] = (11));

} else {
var statearr_30112_30135 = state_30089__$1;
(statearr_30112_30135[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25842__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25842__auto____0 = (function (){
var statearr_30113 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30113[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25842__auto__);

(statearr_30113[(1)] = (1));

return statearr_30113;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25842__auto____1 = (function (state_30089){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_30089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e30114){if((e30114 instanceof Object)){
var ex__25845__auto__ = e30114;
var statearr_30115_30136 = state_30089;
(statearr_30115_30136[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30137 = state_30089;
state_30089 = G__30137;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25842__auto__ = function(state_30089){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25842__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25842__auto____1.call(this,state_30089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25842__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25842__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_30116 = f__25937__auto__.call(null);
(statearr_30116[(6)] = c__25936__auto___30117);

return statearr_30116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30138_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30138_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30144 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__30140 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__30141 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__30142 = true;
var _STAR_print_fn_STAR__temp_val__30143 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__30142);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__30143);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__30141);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__30140);
}}catch (e30139){if((e30139 instanceof Error)){
var e = e30139;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30144], null));
} else {
var e = e30139;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30145){
var map__30146 = p__30145;
var map__30146__$1 = (((((!((map__30146 == null))))?(((((map__30146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30146):map__30146);
var opts = map__30146__$1;
var build_id = cljs.core.get.call(null,map__30146__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__30148){
var vec__30149 = p__30148;
var seq__30150 = cljs.core.seq.call(null,vec__30149);
var first__30151 = cljs.core.first.call(null,seq__30150);
var seq__30150__$1 = cljs.core.next.call(null,seq__30150);
var map__30152 = first__30151;
var map__30152__$1 = (((((!((map__30152 == null))))?(((((map__30152.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30152.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30152):map__30152);
var msg = map__30152__$1;
var msg_name = cljs.core.get.call(null,map__30152__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30150__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30154){
var vec__30155 = p__30154;
var seq__30156 = cljs.core.seq.call(null,vec__30155);
var first__30157 = cljs.core.first.call(null,seq__30156);
var seq__30156__$1 = cljs.core.next.call(null,seq__30156);
var map__30158 = first__30157;
var map__30158__$1 = (((((!((map__30158 == null))))?(((((map__30158.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30158.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30158):map__30158);
var msg = map__30158__$1;
var msg_name = cljs.core.get.call(null,map__30158__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30156__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30160){
var map__30161 = p__30160;
var map__30161__$1 = (((((!((map__30161 == null))))?(((((map__30161.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30161.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30161):map__30161);
var on_compile_warning = cljs.core.get.call(null,map__30161__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30161__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__30163){
var vec__30164 = p__30163;
var seq__30165 = cljs.core.seq.call(null,vec__30164);
var first__30166 = cljs.core.first.call(null,seq__30165);
var seq__30165__$1 = cljs.core.next.call(null,seq__30165);
var map__30167 = first__30166;
var map__30167__$1 = (((((!((map__30167 == null))))?(((((map__30167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30167):map__30167);
var msg = map__30167__$1;
var msg_name = cljs.core.get.call(null,map__30167__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30165__$1;
var pred__30169 = cljs.core._EQ_;
var expr__30170 = msg_name;
if(cljs.core.truth_(pred__30169.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30170))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30169.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30170))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__25936__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_30259){
var state_val_30260 = (state_30259[(1)]);
if((state_val_30260 === (7))){
var inst_30179 = (state_30259[(2)]);
var state_30259__$1 = state_30259;
if(cljs.core.truth_(inst_30179)){
var statearr_30261_30308 = state_30259__$1;
(statearr_30261_30308[(1)] = (8));

} else {
var statearr_30262_30309 = state_30259__$1;
(statearr_30262_30309[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (20))){
var inst_30253 = (state_30259[(2)]);
var state_30259__$1 = state_30259;
var statearr_30263_30310 = state_30259__$1;
(statearr_30263_30310[(2)] = inst_30253);

(statearr_30263_30310[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (27))){
var inst_30249 = (state_30259[(2)]);
var state_30259__$1 = state_30259;
var statearr_30264_30311 = state_30259__$1;
(statearr_30264_30311[(2)] = inst_30249);

(statearr_30264_30311[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (1))){
var inst_30172 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30259__$1 = state_30259;
if(cljs.core.truth_(inst_30172)){
var statearr_30265_30312 = state_30259__$1;
(statearr_30265_30312[(1)] = (2));

} else {
var statearr_30266_30313 = state_30259__$1;
(statearr_30266_30313[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (24))){
var inst_30251 = (state_30259[(2)]);
var state_30259__$1 = state_30259;
var statearr_30267_30314 = state_30259__$1;
(statearr_30267_30314[(2)] = inst_30251);

(statearr_30267_30314[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (4))){
var inst_30257 = (state_30259[(2)]);
var state_30259__$1 = state_30259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30259__$1,inst_30257);
} else {
if((state_val_30260 === (15))){
var inst_30255 = (state_30259[(2)]);
var state_30259__$1 = state_30259;
var statearr_30268_30315 = state_30259__$1;
(statearr_30268_30315[(2)] = inst_30255);

(statearr_30268_30315[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (21))){
var inst_30208 = (state_30259[(2)]);
var inst_30209 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30210 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30209);
var state_30259__$1 = (function (){var statearr_30269 = state_30259;
(statearr_30269[(7)] = inst_30208);

return statearr_30269;
})();
var statearr_30270_30316 = state_30259__$1;
(statearr_30270_30316[(2)] = inst_30210);

(statearr_30270_30316[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (31))){
var inst_30238 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30259__$1 = state_30259;
if(inst_30238){
var statearr_30271_30317 = state_30259__$1;
(statearr_30271_30317[(1)] = (34));

} else {
var statearr_30272_30318 = state_30259__$1;
(statearr_30272_30318[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (32))){
var inst_30247 = (state_30259[(2)]);
var state_30259__$1 = state_30259;
var statearr_30273_30319 = state_30259__$1;
(statearr_30273_30319[(2)] = inst_30247);

(statearr_30273_30319[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (33))){
var inst_30234 = (state_30259[(2)]);
var inst_30235 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30236 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30235);
var state_30259__$1 = (function (){var statearr_30274 = state_30259;
(statearr_30274[(8)] = inst_30234);

return statearr_30274;
})();
var statearr_30275_30320 = state_30259__$1;
(statearr_30275_30320[(2)] = inst_30236);

(statearr_30275_30320[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (13))){
var inst_30193 = figwheel.client.heads_up.clear.call(null);
var state_30259__$1 = state_30259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30259__$1,(16),inst_30193);
} else {
if((state_val_30260 === (22))){
var inst_30214 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30215 = figwheel.client.heads_up.append_warning_message.call(null,inst_30214);
var state_30259__$1 = state_30259;
var statearr_30276_30321 = state_30259__$1;
(statearr_30276_30321[(2)] = inst_30215);

(statearr_30276_30321[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (36))){
var inst_30245 = (state_30259[(2)]);
var state_30259__$1 = state_30259;
var statearr_30277_30322 = state_30259__$1;
(statearr_30277_30322[(2)] = inst_30245);

(statearr_30277_30322[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (29))){
var inst_30225 = (state_30259[(2)]);
var inst_30226 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30227 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30226);
var state_30259__$1 = (function (){var statearr_30278 = state_30259;
(statearr_30278[(9)] = inst_30225);

return statearr_30278;
})();
var statearr_30279_30323 = state_30259__$1;
(statearr_30279_30323[(2)] = inst_30227);

(statearr_30279_30323[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (6))){
var inst_30174 = (state_30259[(10)]);
var state_30259__$1 = state_30259;
var statearr_30280_30324 = state_30259__$1;
(statearr_30280_30324[(2)] = inst_30174);

(statearr_30280_30324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (28))){
var inst_30221 = (state_30259[(2)]);
var inst_30222 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30223 = figwheel.client.heads_up.display_warning.call(null,inst_30222);
var state_30259__$1 = (function (){var statearr_30281 = state_30259;
(statearr_30281[(11)] = inst_30221);

return statearr_30281;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30259__$1,(29),inst_30223);
} else {
if((state_val_30260 === (25))){
var inst_30219 = figwheel.client.heads_up.clear.call(null);
var state_30259__$1 = state_30259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30259__$1,(28),inst_30219);
} else {
if((state_val_30260 === (34))){
var inst_30240 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30259__$1 = state_30259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30259__$1,(37),inst_30240);
} else {
if((state_val_30260 === (17))){
var inst_30199 = (state_30259[(2)]);
var inst_30200 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30201 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30200);
var state_30259__$1 = (function (){var statearr_30282 = state_30259;
(statearr_30282[(12)] = inst_30199);

return statearr_30282;
})();
var statearr_30283_30325 = state_30259__$1;
(statearr_30283_30325[(2)] = inst_30201);

(statearr_30283_30325[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (3))){
var inst_30191 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30259__$1 = state_30259;
if(inst_30191){
var statearr_30284_30326 = state_30259__$1;
(statearr_30284_30326[(1)] = (13));

} else {
var statearr_30285_30327 = state_30259__$1;
(statearr_30285_30327[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (12))){
var inst_30187 = (state_30259[(2)]);
var state_30259__$1 = state_30259;
var statearr_30286_30328 = state_30259__$1;
(statearr_30286_30328[(2)] = inst_30187);

(statearr_30286_30328[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (2))){
var inst_30174 = (state_30259[(10)]);
var inst_30174__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30259__$1 = (function (){var statearr_30287 = state_30259;
(statearr_30287[(10)] = inst_30174__$1);

return statearr_30287;
})();
if(cljs.core.truth_(inst_30174__$1)){
var statearr_30288_30329 = state_30259__$1;
(statearr_30288_30329[(1)] = (5));

} else {
var statearr_30289_30330 = state_30259__$1;
(statearr_30289_30330[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (23))){
var inst_30217 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30259__$1 = state_30259;
if(inst_30217){
var statearr_30290_30331 = state_30259__$1;
(statearr_30290_30331[(1)] = (25));

} else {
var statearr_30291_30332 = state_30259__$1;
(statearr_30291_30332[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (35))){
var state_30259__$1 = state_30259;
var statearr_30292_30333 = state_30259__$1;
(statearr_30292_30333[(2)] = null);

(statearr_30292_30333[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (19))){
var inst_30212 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30259__$1 = state_30259;
if(inst_30212){
var statearr_30293_30334 = state_30259__$1;
(statearr_30293_30334[(1)] = (22));

} else {
var statearr_30294_30335 = state_30259__$1;
(statearr_30294_30335[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (11))){
var inst_30183 = (state_30259[(2)]);
var state_30259__$1 = state_30259;
var statearr_30295_30336 = state_30259__$1;
(statearr_30295_30336[(2)] = inst_30183);

(statearr_30295_30336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (9))){
var inst_30185 = figwheel.client.heads_up.clear.call(null);
var state_30259__$1 = state_30259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30259__$1,(12),inst_30185);
} else {
if((state_val_30260 === (5))){
var inst_30176 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30259__$1 = state_30259;
var statearr_30296_30337 = state_30259__$1;
(statearr_30296_30337[(2)] = inst_30176);

(statearr_30296_30337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (14))){
var inst_30203 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30259__$1 = state_30259;
if(inst_30203){
var statearr_30297_30338 = state_30259__$1;
(statearr_30297_30338[(1)] = (18));

} else {
var statearr_30298_30339 = state_30259__$1;
(statearr_30298_30339[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (26))){
var inst_30229 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30259__$1 = state_30259;
if(inst_30229){
var statearr_30299_30340 = state_30259__$1;
(statearr_30299_30340[(1)] = (30));

} else {
var statearr_30300_30341 = state_30259__$1;
(statearr_30300_30341[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (16))){
var inst_30195 = (state_30259[(2)]);
var inst_30196 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30197 = figwheel.client.heads_up.display_exception.call(null,inst_30196);
var state_30259__$1 = (function (){var statearr_30301 = state_30259;
(statearr_30301[(13)] = inst_30195);

return statearr_30301;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30259__$1,(17),inst_30197);
} else {
if((state_val_30260 === (30))){
var inst_30231 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30232 = figwheel.client.heads_up.display_warning.call(null,inst_30231);
var state_30259__$1 = state_30259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30259__$1,(33),inst_30232);
} else {
if((state_val_30260 === (10))){
var inst_30189 = (state_30259[(2)]);
var state_30259__$1 = state_30259;
var statearr_30302_30342 = state_30259__$1;
(statearr_30302_30342[(2)] = inst_30189);

(statearr_30302_30342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (18))){
var inst_30205 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30206 = figwheel.client.heads_up.display_exception.call(null,inst_30205);
var state_30259__$1 = state_30259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30259__$1,(21),inst_30206);
} else {
if((state_val_30260 === (37))){
var inst_30242 = (state_30259[(2)]);
var state_30259__$1 = state_30259;
var statearr_30303_30343 = state_30259__$1;
(statearr_30303_30343[(2)] = inst_30242);

(statearr_30303_30343[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30260 === (8))){
var inst_30181 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30259__$1 = state_30259;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30259__$1,(11),inst_30181);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25842__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25842__auto____0 = (function (){
var statearr_30304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30304[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25842__auto__);

(statearr_30304[(1)] = (1));

return statearr_30304;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25842__auto____1 = (function (state_30259){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_30259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e30305){if((e30305 instanceof Object)){
var ex__25845__auto__ = e30305;
var statearr_30306_30344 = state_30259;
(statearr_30306_30344[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30345 = state_30259;
state_30259 = G__30345;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25842__auto__ = function(state_30259){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25842__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25842__auto____1.call(this,state_30259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25842__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25842__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_30307 = f__25937__auto__.call(null);
(statearr_30307[(6)] = c__25936__auto__);

return statearr_30307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));

return c__25936__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__25936__auto___30374 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_30360){
var state_val_30361 = (state_30360[(1)]);
if((state_val_30361 === (1))){
var state_30360__$1 = state_30360;
var statearr_30362_30375 = state_30360__$1;
(statearr_30362_30375[(2)] = null);

(statearr_30362_30375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (2))){
var state_30360__$1 = state_30360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30360__$1,(4),ch);
} else {
if((state_val_30361 === (3))){
var inst_30358 = (state_30360[(2)]);
var state_30360__$1 = state_30360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30360__$1,inst_30358);
} else {
if((state_val_30361 === (4))){
var inst_30348 = (state_30360[(7)]);
var inst_30348__$1 = (state_30360[(2)]);
var state_30360__$1 = (function (){var statearr_30363 = state_30360;
(statearr_30363[(7)] = inst_30348__$1);

return statearr_30363;
})();
if(cljs.core.truth_(inst_30348__$1)){
var statearr_30364_30376 = state_30360__$1;
(statearr_30364_30376[(1)] = (5));

} else {
var statearr_30365_30377 = state_30360__$1;
(statearr_30365_30377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (5))){
var inst_30348 = (state_30360[(7)]);
var inst_30350 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30348);
var state_30360__$1 = state_30360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30360__$1,(8),inst_30350);
} else {
if((state_val_30361 === (6))){
var state_30360__$1 = state_30360;
var statearr_30366_30378 = state_30360__$1;
(statearr_30366_30378[(2)] = null);

(statearr_30366_30378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (7))){
var inst_30356 = (state_30360[(2)]);
var state_30360__$1 = state_30360;
var statearr_30367_30379 = state_30360__$1;
(statearr_30367_30379[(2)] = inst_30356);

(statearr_30367_30379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30361 === (8))){
var inst_30352 = (state_30360[(2)]);
var state_30360__$1 = (function (){var statearr_30368 = state_30360;
(statearr_30368[(8)] = inst_30352);

return statearr_30368;
})();
var statearr_30369_30380 = state_30360__$1;
(statearr_30369_30380[(2)] = null);

(statearr_30369_30380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25842__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25842__auto____0 = (function (){
var statearr_30370 = [null,null,null,null,null,null,null,null,null];
(statearr_30370[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25842__auto__);

(statearr_30370[(1)] = (1));

return statearr_30370;
});
var figwheel$client$heads_up_plugin_$_state_machine__25842__auto____1 = (function (state_30360){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_30360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e30371){if((e30371 instanceof Object)){
var ex__25845__auto__ = e30371;
var statearr_30372_30381 = state_30360;
(statearr_30372_30381[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30382 = state_30360;
state_30360 = G__30382;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25842__auto__ = function(state_30360){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25842__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25842__auto____1.call(this,state_30360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25842__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25842__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_30373 = f__25937__auto__.call(null);
(statearr_30373[(6)] = c__25936__auto___30374);

return statearr_30373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25936__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_30388){
var state_val_30389 = (state_30388[(1)]);
if((state_val_30389 === (1))){
var inst_30383 = cljs.core.async.timeout.call(null,(3000));
var state_30388__$1 = state_30388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30388__$1,(2),inst_30383);
} else {
if((state_val_30389 === (2))){
var inst_30385 = (state_30388[(2)]);
var inst_30386 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30388__$1 = (function (){var statearr_30390 = state_30388;
(statearr_30390[(7)] = inst_30385);

return statearr_30390;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30388__$1,inst_30386);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25842__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25842__auto____0 = (function (){
var statearr_30391 = [null,null,null,null,null,null,null,null];
(statearr_30391[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25842__auto__);

(statearr_30391[(1)] = (1));

return statearr_30391;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25842__auto____1 = (function (state_30388){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_30388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e30392){if((e30392 instanceof Object)){
var ex__25845__auto__ = e30392;
var statearr_30393_30395 = state_30388;
(statearr_30393_30395[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30392;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30396 = state_30388;
state_30388 = G__30396;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25842__auto__ = function(state_30388){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25842__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25842__auto____1.call(this,state_30388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25842__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25842__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_30394 = f__25937__auto__.call(null);
(statearr_30394[(6)] = c__25936__auto__);

return statearr_30394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));

return c__25936__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5720__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5720__auto__)){
var figwheel_version = temp__5720__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__25936__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_30403){
var state_val_30404 = (state_30403[(1)]);
if((state_val_30404 === (1))){
var inst_30397 = cljs.core.async.timeout.call(null,(2000));
var state_30403__$1 = state_30403;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30403__$1,(2),inst_30397);
} else {
if((state_val_30404 === (2))){
var inst_30399 = (state_30403[(2)]);
var inst_30400 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30401 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30400);
var state_30403__$1 = (function (){var statearr_30405 = state_30403;
(statearr_30405[(7)] = inst_30399);

return statearr_30405;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30403__$1,inst_30401);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25842__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25842__auto____0 = (function (){
var statearr_30406 = [null,null,null,null,null,null,null,null];
(statearr_30406[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25842__auto__);

(statearr_30406[(1)] = (1));

return statearr_30406;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25842__auto____1 = (function (state_30403){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_30403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e30407){if((e30407 instanceof Object)){
var ex__25845__auto__ = e30407;
var statearr_30408_30410 = state_30403;
(statearr_30408_30410[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30411 = state_30403;
state_30403 = G__30411;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25842__auto__ = function(state_30403){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25842__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25842__auto____1.call(this,state_30403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25842__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25842__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_30409 = f__25937__auto__.call(null);
(statearr_30409[(6)] = c__25936__auto__);

return statearr_30409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));

return c__25936__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30412){
var map__30413 = p__30412;
var map__30413__$1 = (((((!((map__30413 == null))))?(((((map__30413.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30413.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30413):map__30413);
var file = cljs.core.get.call(null,map__30413__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30413__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30413__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30415 = "";
var G__30415__$1 = (cljs.core.truth_(file)?[G__30415,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30415);
var G__30415__$2 = (cljs.core.truth_(line)?[G__30415__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30415__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__30415__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30415__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30416){
var map__30417 = p__30416;
var map__30417__$1 = (((((!((map__30417 == null))))?(((((map__30417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30417):map__30417);
var ed = map__30417__$1;
var exception_data = cljs.core.get.call(null,map__30417__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30417__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_30420 = (function (){var G__30419 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30419)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__30419;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_30420);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30421){
var map__30422 = p__30421;
var map__30422__$1 = (((((!((map__30422 == null))))?(((((map__30422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30422):map__30422);
var w = map__30422__$1;
var message = cljs.core.get.call(null,map__30422__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources\\public\\js\\compiled\\out\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__30424 = cljs.core.seq.call(null,plugins);
var chunk__30425 = null;
var count__30426 = (0);
var i__30427 = (0);
while(true){
if((i__30427 < count__30426)){
var vec__30434 = cljs.core._nth.call(null,chunk__30425,i__30427);
var k = cljs.core.nth.call(null,vec__30434,(0),null);
var plugin = cljs.core.nth.call(null,vec__30434,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30440 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30424,chunk__30425,count__30426,i__30427,pl_30440,vec__30434,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30440.call(null,msg_hist);
});})(seq__30424,chunk__30425,count__30426,i__30427,pl_30440,vec__30434,k,plugin))
);
} else {
}


var G__30441 = seq__30424;
var G__30442 = chunk__30425;
var G__30443 = count__30426;
var G__30444 = (i__30427 + (1));
seq__30424 = G__30441;
chunk__30425 = G__30442;
count__30426 = G__30443;
i__30427 = G__30444;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__30424);
if(temp__5720__auto__){
var seq__30424__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30424__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__30424__$1);
var G__30445 = cljs.core.chunk_rest.call(null,seq__30424__$1);
var G__30446 = c__4556__auto__;
var G__30447 = cljs.core.count.call(null,c__4556__auto__);
var G__30448 = (0);
seq__30424 = G__30445;
chunk__30425 = G__30446;
count__30426 = G__30447;
i__30427 = G__30448;
continue;
} else {
var vec__30437 = cljs.core.first.call(null,seq__30424__$1);
var k = cljs.core.nth.call(null,vec__30437,(0),null);
var plugin = cljs.core.nth.call(null,vec__30437,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30449 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30424,chunk__30425,count__30426,i__30427,pl_30449,vec__30437,k,plugin,seq__30424__$1,temp__5720__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30449.call(null,msg_hist);
});})(seq__30424,chunk__30425,count__30426,i__30427,pl_30449,vec__30437,k,plugin,seq__30424__$1,temp__5720__auto__))
);
} else {
}


var G__30450 = cljs.core.next.call(null,seq__30424__$1);
var G__30451 = null;
var G__30452 = (0);
var G__30453 = (0);
seq__30424 = G__30450;
chunk__30425 = G__30451;
count__30426 = G__30452;
i__30427 = G__30453;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__30455 = arguments.length;
switch (G__30455) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__30456_30461 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30457_30462 = null;
var count__30458_30463 = (0);
var i__30459_30464 = (0);
while(true){
if((i__30459_30464 < count__30458_30463)){
var msg_30465 = cljs.core._nth.call(null,chunk__30457_30462,i__30459_30464);
figwheel.client.socket.handle_incoming_message.call(null,msg_30465);


var G__30466 = seq__30456_30461;
var G__30467 = chunk__30457_30462;
var G__30468 = count__30458_30463;
var G__30469 = (i__30459_30464 + (1));
seq__30456_30461 = G__30466;
chunk__30457_30462 = G__30467;
count__30458_30463 = G__30468;
i__30459_30464 = G__30469;
continue;
} else {
var temp__5720__auto___30470 = cljs.core.seq.call(null,seq__30456_30461);
if(temp__5720__auto___30470){
var seq__30456_30471__$1 = temp__5720__auto___30470;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30456_30471__$1)){
var c__4556__auto___30472 = cljs.core.chunk_first.call(null,seq__30456_30471__$1);
var G__30473 = cljs.core.chunk_rest.call(null,seq__30456_30471__$1);
var G__30474 = c__4556__auto___30472;
var G__30475 = cljs.core.count.call(null,c__4556__auto___30472);
var G__30476 = (0);
seq__30456_30461 = G__30473;
chunk__30457_30462 = G__30474;
count__30458_30463 = G__30475;
i__30459_30464 = G__30476;
continue;
} else {
var msg_30477 = cljs.core.first.call(null,seq__30456_30471__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30477);


var G__30478 = cljs.core.next.call(null,seq__30456_30471__$1);
var G__30479 = null;
var G__30480 = (0);
var G__30481 = (0);
seq__30456_30461 = G__30478;
chunk__30457_30462 = G__30479;
count__30458_30463 = G__30480;
i__30459_30464 = G__30481;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___30486 = arguments.length;
var i__4737__auto___30487 = (0);
while(true){
if((i__4737__auto___30487 < len__4736__auto___30486)){
args__4742__auto__.push((arguments[i__4737__auto___30487]));

var G__30488 = (i__4737__auto___30487 + (1));
i__4737__auto___30487 = G__30488;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30483){
var map__30484 = p__30483;
var map__30484__$1 = (((((!((map__30484 == null))))?(((((map__30484.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30484.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30484):map__30484);
var opts = map__30484__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30482){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30482));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30489){if((e30489 instanceof Error)){
var e = e30489;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30489;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__30490){
var map__30491 = p__30490;
var map__30491__$1 = (((((!((map__30491 == null))))?(((((map__30491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30491):map__30491);
var msg_name = cljs.core.get.call(null,map__30491__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1614970915938
