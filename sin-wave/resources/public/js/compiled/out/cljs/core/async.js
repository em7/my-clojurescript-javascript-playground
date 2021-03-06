// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__25996 = arguments.length;
switch (G__25996) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async25997 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25997 = (function (f,blockable,meta25998){
this.f = f;
this.blockable = blockable;
this.meta25998 = meta25998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async25997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25999,meta25998__$1){
var self__ = this;
var _25999__$1 = this;
return (new cljs.core.async.t_cljs$core$async25997(self__.f,self__.blockable,meta25998__$1));
}));

(cljs.core.async.t_cljs$core$async25997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25999){
var self__ = this;
var _25999__$1 = this;
return self__.meta25998;
}));

(cljs.core.async.t_cljs$core$async25997.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async25997.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async25997.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async25997.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async25997.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25998","meta25998",-1497366946,null)], null);
}));

(cljs.core.async.t_cljs$core$async25997.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async25997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25997");

(cljs.core.async.t_cljs$core$async25997.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async25997");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async25997.
 */
cljs.core.async.__GT_t_cljs$core$async25997 = (function cljs$core$async$__GT_t_cljs$core$async25997(f__$1,blockable__$1,meta25998){
return (new cljs.core.async.t_cljs$core$async25997(f__$1,blockable__$1,meta25998));
});

}

return (new cljs.core.async.t_cljs$core$async25997(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__26003 = arguments.length;
switch (G__26003) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__26006 = arguments.length;
switch (G__26006) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__26009 = arguments.length;
switch (G__26009) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26011 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26011);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_26011);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__26013 = arguments.length;
switch (G__26013) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___26015 = n;
var x_26016 = (0);
while(true){
if((x_26016 < n__4613__auto___26015)){
(a[x_26016] = x_26016);

var G__26017 = (x_26016 + (1));
x_26016 = G__26017;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26018 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26018 = (function (flag,meta26019){
this.flag = flag;
this.meta26019 = meta26019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26020,meta26019__$1){
var self__ = this;
var _26020__$1 = this;
return (new cljs.core.async.t_cljs$core$async26018(self__.flag,meta26019__$1));
}));

(cljs.core.async.t_cljs$core$async26018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26020){
var self__ = this;
var _26020__$1 = this;
return self__.meta26019;
}));

(cljs.core.async.t_cljs$core$async26018.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26018.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26018.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26018.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async26018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26019","meta26019",-186220655,null)], null);
}));

(cljs.core.async.t_cljs$core$async26018.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26018");

(cljs.core.async.t_cljs$core$async26018.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26018");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26018.
 */
cljs.core.async.__GT_t_cljs$core$async26018 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26018(flag__$1,meta26019){
return (new cljs.core.async.t_cljs$core$async26018(flag__$1,meta26019));
});

}

return (new cljs.core.async.t_cljs$core$async26018(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26021 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26021 = (function (flag,cb,meta26022){
this.flag = flag;
this.cb = cb;
this.meta26022 = meta26022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26023,meta26022__$1){
var self__ = this;
var _26023__$1 = this;
return (new cljs.core.async.t_cljs$core$async26021(self__.flag,self__.cb,meta26022__$1));
}));

(cljs.core.async.t_cljs$core$async26021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26023){
var self__ = this;
var _26023__$1 = this;
return self__.meta26022;
}));

(cljs.core.async.t_cljs$core$async26021.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26021.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async26021.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async26021.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async26021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26022","meta26022",-280868498,null)], null);
}));

(cljs.core.async.t_cljs$core$async26021.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26021");

(cljs.core.async.t_cljs$core$async26021.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26021");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26021.
 */
cljs.core.async.__GT_t_cljs$core$async26021 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26021(flag__$1,cb__$1,meta26022){
return (new cljs.core.async.t_cljs$core$async26021(flag__$1,cb__$1,meta26022));
});

}

return (new cljs.core.async.t_cljs$core$async26021(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26024_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26024_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26025_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26025_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__26026 = (i + (1));
i = G__26026;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26032 = arguments.length;
var i__4737__auto___26033 = (0);
while(true){
if((i__4737__auto___26033 < len__4736__auto___26032)){
args__4742__auto__.push((arguments[i__4737__auto___26033]));

var G__26034 = (i__4737__auto___26033 + (1));
i__4737__auto___26033 = G__26034;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26029){
var map__26030 = p__26029;
var map__26030__$1 = (((((!((map__26030 == null))))?(((((map__26030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26030):map__26030);
var opts = map__26030__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26027){
var G__26028 = cljs.core.first.call(null,seq26027);
var seq26027__$1 = cljs.core.next.call(null,seq26027);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26028,seq26027__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__26036 = arguments.length;
switch (G__26036) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__25936__auto___26082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_26060){
var state_val_26061 = (state_26060[(1)]);
if((state_val_26061 === (7))){
var inst_26056 = (state_26060[(2)]);
var state_26060__$1 = state_26060;
var statearr_26062_26083 = state_26060__$1;
(statearr_26062_26083[(2)] = inst_26056);

(statearr_26062_26083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26061 === (1))){
var state_26060__$1 = state_26060;
var statearr_26063_26084 = state_26060__$1;
(statearr_26063_26084[(2)] = null);

(statearr_26063_26084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26061 === (4))){
var inst_26039 = (state_26060[(7)]);
var inst_26039__$1 = (state_26060[(2)]);
var inst_26040 = (inst_26039__$1 == null);
var state_26060__$1 = (function (){var statearr_26064 = state_26060;
(statearr_26064[(7)] = inst_26039__$1);

return statearr_26064;
})();
if(cljs.core.truth_(inst_26040)){
var statearr_26065_26085 = state_26060__$1;
(statearr_26065_26085[(1)] = (5));

} else {
var statearr_26066_26086 = state_26060__$1;
(statearr_26066_26086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26061 === (13))){
var state_26060__$1 = state_26060;
var statearr_26067_26087 = state_26060__$1;
(statearr_26067_26087[(2)] = null);

(statearr_26067_26087[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26061 === (6))){
var inst_26039 = (state_26060[(7)]);
var state_26060__$1 = state_26060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26060__$1,(11),to,inst_26039);
} else {
if((state_val_26061 === (3))){
var inst_26058 = (state_26060[(2)]);
var state_26060__$1 = state_26060;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26060__$1,inst_26058);
} else {
if((state_val_26061 === (12))){
var state_26060__$1 = state_26060;
var statearr_26068_26088 = state_26060__$1;
(statearr_26068_26088[(2)] = null);

(statearr_26068_26088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26061 === (2))){
var state_26060__$1 = state_26060;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26060__$1,(4),from);
} else {
if((state_val_26061 === (11))){
var inst_26049 = (state_26060[(2)]);
var state_26060__$1 = state_26060;
if(cljs.core.truth_(inst_26049)){
var statearr_26069_26089 = state_26060__$1;
(statearr_26069_26089[(1)] = (12));

} else {
var statearr_26070_26090 = state_26060__$1;
(statearr_26070_26090[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26061 === (9))){
var state_26060__$1 = state_26060;
var statearr_26071_26091 = state_26060__$1;
(statearr_26071_26091[(2)] = null);

(statearr_26071_26091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26061 === (5))){
var state_26060__$1 = state_26060;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26072_26092 = state_26060__$1;
(statearr_26072_26092[(1)] = (8));

} else {
var statearr_26073_26093 = state_26060__$1;
(statearr_26073_26093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26061 === (14))){
var inst_26054 = (state_26060[(2)]);
var state_26060__$1 = state_26060;
var statearr_26074_26094 = state_26060__$1;
(statearr_26074_26094[(2)] = inst_26054);

(statearr_26074_26094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26061 === (10))){
var inst_26046 = (state_26060[(2)]);
var state_26060__$1 = state_26060;
var statearr_26075_26095 = state_26060__$1;
(statearr_26075_26095[(2)] = inst_26046);

(statearr_26075_26095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26061 === (8))){
var inst_26043 = cljs.core.async.close_BANG_.call(null,to);
var state_26060__$1 = state_26060;
var statearr_26076_26096 = state_26060__$1;
(statearr_26076_26096[(2)] = inst_26043);

(statearr_26076_26096[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__25842__auto__ = null;
var cljs$core$async$state_machine__25842__auto____0 = (function (){
var statearr_26077 = [null,null,null,null,null,null,null,null];
(statearr_26077[(0)] = cljs$core$async$state_machine__25842__auto__);

(statearr_26077[(1)] = (1));

return statearr_26077;
});
var cljs$core$async$state_machine__25842__auto____1 = (function (state_26060){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_26060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e26078){if((e26078 instanceof Object)){
var ex__25845__auto__ = e26078;
var statearr_26079_26097 = state_26060;
(statearr_26079_26097[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26098 = state_26060;
state_26060 = G__26098;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
cljs$core$async$state_machine__25842__auto__ = function(state_26060){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25842__auto____1.call(this,state_26060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25842__auto____0;
cljs$core$async$state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25842__auto____1;
return cljs$core$async$state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_26080 = f__25937__auto__.call(null);
(statearr_26080[(6)] = c__25936__auto___26082);

return statearr_26080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__26099){
var vec__26100 = p__26099;
var v = cljs.core.nth.call(null,vec__26100,(0),null);
var p = cljs.core.nth.call(null,vec__26100,(1),null);
var job = vec__26100;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__25936__auto___26271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_26107){
var state_val_26108 = (state_26107[(1)]);
if((state_val_26108 === (1))){
var state_26107__$1 = state_26107;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26107__$1,(2),res,v);
} else {
if((state_val_26108 === (2))){
var inst_26104 = (state_26107[(2)]);
var inst_26105 = cljs.core.async.close_BANG_.call(null,res);
var state_26107__$1 = (function (){var statearr_26109 = state_26107;
(statearr_26109[(7)] = inst_26104);

return statearr_26109;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26107__$1,inst_26105);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____0 = (function (){
var statearr_26110 = [null,null,null,null,null,null,null,null];
(statearr_26110[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__);

(statearr_26110[(1)] = (1));

return statearr_26110;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____1 = (function (state_26107){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_26107);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e26111){if((e26111 instanceof Object)){
var ex__25845__auto__ = e26111;
var statearr_26112_26272 = state_26107;
(statearr_26112_26272[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26107);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26273 = state_26107;
state_26107 = G__26273;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__ = function(state_26107){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____1.call(this,state_26107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_26113 = f__25937__auto__.call(null);
(statearr_26113[(6)] = c__25936__auto___26271);

return statearr_26113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__26114){
var vec__26115 = p__26114;
var v = cljs.core.nth.call(null,vec__26115,(0),null);
var p = cljs.core.nth.call(null,vec__26115,(1),null);
var job = vec__26115;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___26274 = n;
var __26275 = (0);
while(true){
if((__26275 < n__4613__auto___26274)){
var G__26118_26276 = type;
var G__26118_26277__$1 = (((G__26118_26276 instanceof cljs.core.Keyword))?G__26118_26276.fqn:null);
switch (G__26118_26277__$1) {
case "compute":
var c__25936__auto___26279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26275,c__25936__auto___26279,G__26118_26276,G__26118_26277__$1,n__4613__auto___26274,jobs,results,process,async){
return (function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = ((function (__26275,c__25936__auto___26279,G__26118_26276,G__26118_26277__$1,n__4613__auto___26274,jobs,results,process,async){
return (function (state_26131){
var state_val_26132 = (state_26131[(1)]);
if((state_val_26132 === (1))){
var state_26131__$1 = state_26131;
var statearr_26133_26280 = state_26131__$1;
(statearr_26133_26280[(2)] = null);

(statearr_26133_26280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (2))){
var state_26131__$1 = state_26131;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26131__$1,(4),jobs);
} else {
if((state_val_26132 === (3))){
var inst_26129 = (state_26131[(2)]);
var state_26131__$1 = state_26131;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26131__$1,inst_26129);
} else {
if((state_val_26132 === (4))){
var inst_26121 = (state_26131[(2)]);
var inst_26122 = process.call(null,inst_26121);
var state_26131__$1 = state_26131;
if(cljs.core.truth_(inst_26122)){
var statearr_26134_26281 = state_26131__$1;
(statearr_26134_26281[(1)] = (5));

} else {
var statearr_26135_26282 = state_26131__$1;
(statearr_26135_26282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (5))){
var state_26131__$1 = state_26131;
var statearr_26136_26283 = state_26131__$1;
(statearr_26136_26283[(2)] = null);

(statearr_26136_26283[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (6))){
var state_26131__$1 = state_26131;
var statearr_26137_26284 = state_26131__$1;
(statearr_26137_26284[(2)] = null);

(statearr_26137_26284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26132 === (7))){
var inst_26127 = (state_26131[(2)]);
var state_26131__$1 = state_26131;
var statearr_26138_26285 = state_26131__$1;
(statearr_26138_26285[(2)] = inst_26127);

(statearr_26138_26285[(1)] = (3));


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
});})(__26275,c__25936__auto___26279,G__26118_26276,G__26118_26277__$1,n__4613__auto___26274,jobs,results,process,async))
;
return ((function (__26275,switch__25841__auto__,c__25936__auto___26279,G__26118_26276,G__26118_26277__$1,n__4613__auto___26274,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____0 = (function (){
var statearr_26139 = [null,null,null,null,null,null,null];
(statearr_26139[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__);

(statearr_26139[(1)] = (1));

return statearr_26139;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____1 = (function (state_26131){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_26131);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e26140){if((e26140 instanceof Object)){
var ex__25845__auto__ = e26140;
var statearr_26141_26286 = state_26131;
(statearr_26141_26286[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26131);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26140;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26287 = state_26131;
state_26131 = G__26287;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__ = function(state_26131){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____1.call(this,state_26131);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__;
})()
;})(__26275,switch__25841__auto__,c__25936__auto___26279,G__26118_26276,G__26118_26277__$1,n__4613__auto___26274,jobs,results,process,async))
})();
var state__25938__auto__ = (function (){var statearr_26142 = f__25937__auto__.call(null);
(statearr_26142[(6)] = c__25936__auto___26279);

return statearr_26142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
});})(__26275,c__25936__auto___26279,G__26118_26276,G__26118_26277__$1,n__4613__auto___26274,jobs,results,process,async))
);


break;
case "async":
var c__25936__auto___26288 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26275,c__25936__auto___26288,G__26118_26276,G__26118_26277__$1,n__4613__auto___26274,jobs,results,process,async){
return (function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = ((function (__26275,c__25936__auto___26288,G__26118_26276,G__26118_26277__$1,n__4613__auto___26274,jobs,results,process,async){
return (function (state_26155){
var state_val_26156 = (state_26155[(1)]);
if((state_val_26156 === (1))){
var state_26155__$1 = state_26155;
var statearr_26157_26289 = state_26155__$1;
(statearr_26157_26289[(2)] = null);

(statearr_26157_26289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26156 === (2))){
var state_26155__$1 = state_26155;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26155__$1,(4),jobs);
} else {
if((state_val_26156 === (3))){
var inst_26153 = (state_26155[(2)]);
var state_26155__$1 = state_26155;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26155__$1,inst_26153);
} else {
if((state_val_26156 === (4))){
var inst_26145 = (state_26155[(2)]);
var inst_26146 = async.call(null,inst_26145);
var state_26155__$1 = state_26155;
if(cljs.core.truth_(inst_26146)){
var statearr_26158_26290 = state_26155__$1;
(statearr_26158_26290[(1)] = (5));

} else {
var statearr_26159_26291 = state_26155__$1;
(statearr_26159_26291[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26156 === (5))){
var state_26155__$1 = state_26155;
var statearr_26160_26292 = state_26155__$1;
(statearr_26160_26292[(2)] = null);

(statearr_26160_26292[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26156 === (6))){
var state_26155__$1 = state_26155;
var statearr_26161_26293 = state_26155__$1;
(statearr_26161_26293[(2)] = null);

(statearr_26161_26293[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26156 === (7))){
var inst_26151 = (state_26155[(2)]);
var state_26155__$1 = state_26155;
var statearr_26162_26294 = state_26155__$1;
(statearr_26162_26294[(2)] = inst_26151);

(statearr_26162_26294[(1)] = (3));


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
});})(__26275,c__25936__auto___26288,G__26118_26276,G__26118_26277__$1,n__4613__auto___26274,jobs,results,process,async))
;
return ((function (__26275,switch__25841__auto__,c__25936__auto___26288,G__26118_26276,G__26118_26277__$1,n__4613__auto___26274,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____0 = (function (){
var statearr_26163 = [null,null,null,null,null,null,null];
(statearr_26163[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__);

(statearr_26163[(1)] = (1));

return statearr_26163;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____1 = (function (state_26155){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_26155);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e26164){if((e26164 instanceof Object)){
var ex__25845__auto__ = e26164;
var statearr_26165_26295 = state_26155;
(statearr_26165_26295[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26155);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26296 = state_26155;
state_26155 = G__26296;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__ = function(state_26155){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____1.call(this,state_26155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__;
})()
;})(__26275,switch__25841__auto__,c__25936__auto___26288,G__26118_26276,G__26118_26277__$1,n__4613__auto___26274,jobs,results,process,async))
})();
var state__25938__auto__ = (function (){var statearr_26166 = f__25937__auto__.call(null);
(statearr_26166[(6)] = c__25936__auto___26288);

return statearr_26166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
});})(__26275,c__25936__auto___26288,G__26118_26276,G__26118_26277__$1,n__4613__auto___26274,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26118_26277__$1)].join('')));

}

var G__26297 = (__26275 + (1));
__26275 = G__26297;
continue;
} else {
}
break;
}

var c__25936__auto___26298 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_26188){
var state_val_26189 = (state_26188[(1)]);
if((state_val_26189 === (7))){
var inst_26184 = (state_26188[(2)]);
var state_26188__$1 = state_26188;
var statearr_26190_26299 = state_26188__$1;
(statearr_26190_26299[(2)] = inst_26184);

(statearr_26190_26299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (1))){
var state_26188__$1 = state_26188;
var statearr_26191_26300 = state_26188__$1;
(statearr_26191_26300[(2)] = null);

(statearr_26191_26300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (4))){
var inst_26169 = (state_26188[(7)]);
var inst_26169__$1 = (state_26188[(2)]);
var inst_26170 = (inst_26169__$1 == null);
var state_26188__$1 = (function (){var statearr_26192 = state_26188;
(statearr_26192[(7)] = inst_26169__$1);

return statearr_26192;
})();
if(cljs.core.truth_(inst_26170)){
var statearr_26193_26301 = state_26188__$1;
(statearr_26193_26301[(1)] = (5));

} else {
var statearr_26194_26302 = state_26188__$1;
(statearr_26194_26302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (6))){
var inst_26174 = (state_26188[(8)]);
var inst_26169 = (state_26188[(7)]);
var inst_26174__$1 = cljs.core.async.chan.call(null,(1));
var inst_26175 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26176 = [inst_26169,inst_26174__$1];
var inst_26177 = (new cljs.core.PersistentVector(null,2,(5),inst_26175,inst_26176,null));
var state_26188__$1 = (function (){var statearr_26195 = state_26188;
(statearr_26195[(8)] = inst_26174__$1);

return statearr_26195;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26188__$1,(8),jobs,inst_26177);
} else {
if((state_val_26189 === (3))){
var inst_26186 = (state_26188[(2)]);
var state_26188__$1 = state_26188;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26188__$1,inst_26186);
} else {
if((state_val_26189 === (2))){
var state_26188__$1 = state_26188;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26188__$1,(4),from);
} else {
if((state_val_26189 === (9))){
var inst_26181 = (state_26188[(2)]);
var state_26188__$1 = (function (){var statearr_26196 = state_26188;
(statearr_26196[(9)] = inst_26181);

return statearr_26196;
})();
var statearr_26197_26303 = state_26188__$1;
(statearr_26197_26303[(2)] = null);

(statearr_26197_26303[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (5))){
var inst_26172 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26188__$1 = state_26188;
var statearr_26198_26304 = state_26188__$1;
(statearr_26198_26304[(2)] = inst_26172);

(statearr_26198_26304[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26189 === (8))){
var inst_26174 = (state_26188[(8)]);
var inst_26179 = (state_26188[(2)]);
var state_26188__$1 = (function (){var statearr_26199 = state_26188;
(statearr_26199[(10)] = inst_26179);

return statearr_26199;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26188__$1,(9),results,inst_26174);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____0 = (function (){
var statearr_26200 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26200[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__);

(statearr_26200[(1)] = (1));

return statearr_26200;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____1 = (function (state_26188){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_26188);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e26201){if((e26201 instanceof Object)){
var ex__25845__auto__ = e26201;
var statearr_26202_26305 = state_26188;
(statearr_26202_26305[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26188);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26201;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26306 = state_26188;
state_26188 = G__26306;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__ = function(state_26188){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____1.call(this,state_26188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_26203 = f__25937__auto__.call(null);
(statearr_26203[(6)] = c__25936__auto___26298);

return statearr_26203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));


var c__25936__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_26241){
var state_val_26242 = (state_26241[(1)]);
if((state_val_26242 === (7))){
var inst_26237 = (state_26241[(2)]);
var state_26241__$1 = state_26241;
var statearr_26243_26307 = state_26241__$1;
(statearr_26243_26307[(2)] = inst_26237);

(statearr_26243_26307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (20))){
var state_26241__$1 = state_26241;
var statearr_26244_26308 = state_26241__$1;
(statearr_26244_26308[(2)] = null);

(statearr_26244_26308[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (1))){
var state_26241__$1 = state_26241;
var statearr_26245_26309 = state_26241__$1;
(statearr_26245_26309[(2)] = null);

(statearr_26245_26309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (4))){
var inst_26206 = (state_26241[(7)]);
var inst_26206__$1 = (state_26241[(2)]);
var inst_26207 = (inst_26206__$1 == null);
var state_26241__$1 = (function (){var statearr_26246 = state_26241;
(statearr_26246[(7)] = inst_26206__$1);

return statearr_26246;
})();
if(cljs.core.truth_(inst_26207)){
var statearr_26247_26310 = state_26241__$1;
(statearr_26247_26310[(1)] = (5));

} else {
var statearr_26248_26311 = state_26241__$1;
(statearr_26248_26311[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (15))){
var inst_26219 = (state_26241[(8)]);
var state_26241__$1 = state_26241;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26241__$1,(18),to,inst_26219);
} else {
if((state_val_26242 === (21))){
var inst_26232 = (state_26241[(2)]);
var state_26241__$1 = state_26241;
var statearr_26249_26312 = state_26241__$1;
(statearr_26249_26312[(2)] = inst_26232);

(statearr_26249_26312[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (13))){
var inst_26234 = (state_26241[(2)]);
var state_26241__$1 = (function (){var statearr_26250 = state_26241;
(statearr_26250[(9)] = inst_26234);

return statearr_26250;
})();
var statearr_26251_26313 = state_26241__$1;
(statearr_26251_26313[(2)] = null);

(statearr_26251_26313[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (6))){
var inst_26206 = (state_26241[(7)]);
var state_26241__$1 = state_26241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26241__$1,(11),inst_26206);
} else {
if((state_val_26242 === (17))){
var inst_26227 = (state_26241[(2)]);
var state_26241__$1 = state_26241;
if(cljs.core.truth_(inst_26227)){
var statearr_26252_26314 = state_26241__$1;
(statearr_26252_26314[(1)] = (19));

} else {
var statearr_26253_26315 = state_26241__$1;
(statearr_26253_26315[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (3))){
var inst_26239 = (state_26241[(2)]);
var state_26241__$1 = state_26241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26241__$1,inst_26239);
} else {
if((state_val_26242 === (12))){
var inst_26216 = (state_26241[(10)]);
var state_26241__$1 = state_26241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26241__$1,(14),inst_26216);
} else {
if((state_val_26242 === (2))){
var state_26241__$1 = state_26241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26241__$1,(4),results);
} else {
if((state_val_26242 === (19))){
var state_26241__$1 = state_26241;
var statearr_26254_26316 = state_26241__$1;
(statearr_26254_26316[(2)] = null);

(statearr_26254_26316[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (11))){
var inst_26216 = (state_26241[(2)]);
var state_26241__$1 = (function (){var statearr_26255 = state_26241;
(statearr_26255[(10)] = inst_26216);

return statearr_26255;
})();
var statearr_26256_26317 = state_26241__$1;
(statearr_26256_26317[(2)] = null);

(statearr_26256_26317[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (9))){
var state_26241__$1 = state_26241;
var statearr_26257_26318 = state_26241__$1;
(statearr_26257_26318[(2)] = null);

(statearr_26257_26318[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (5))){
var state_26241__$1 = state_26241;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26258_26319 = state_26241__$1;
(statearr_26258_26319[(1)] = (8));

} else {
var statearr_26259_26320 = state_26241__$1;
(statearr_26259_26320[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (14))){
var inst_26219 = (state_26241[(8)]);
var inst_26219__$1 = (state_26241[(2)]);
var inst_26220 = (inst_26219__$1 == null);
var inst_26221 = cljs.core.not.call(null,inst_26220);
var state_26241__$1 = (function (){var statearr_26260 = state_26241;
(statearr_26260[(8)] = inst_26219__$1);

return statearr_26260;
})();
if(inst_26221){
var statearr_26261_26321 = state_26241__$1;
(statearr_26261_26321[(1)] = (15));

} else {
var statearr_26262_26322 = state_26241__$1;
(statearr_26262_26322[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (16))){
var state_26241__$1 = state_26241;
var statearr_26263_26323 = state_26241__$1;
(statearr_26263_26323[(2)] = false);

(statearr_26263_26323[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (10))){
var inst_26213 = (state_26241[(2)]);
var state_26241__$1 = state_26241;
var statearr_26264_26324 = state_26241__$1;
(statearr_26264_26324[(2)] = inst_26213);

(statearr_26264_26324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (18))){
var inst_26224 = (state_26241[(2)]);
var state_26241__$1 = state_26241;
var statearr_26265_26325 = state_26241__$1;
(statearr_26265_26325[(2)] = inst_26224);

(statearr_26265_26325[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26242 === (8))){
var inst_26210 = cljs.core.async.close_BANG_.call(null,to);
var state_26241__$1 = state_26241;
var statearr_26266_26326 = state_26241__$1;
(statearr_26266_26326[(2)] = inst_26210);

(statearr_26266_26326[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____0 = (function (){
var statearr_26267 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26267[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__);

(statearr_26267[(1)] = (1));

return statearr_26267;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____1 = (function (state_26241){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_26241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e26268){if((e26268 instanceof Object)){
var ex__25845__auto__ = e26268;
var statearr_26269_26327 = state_26241;
(statearr_26269_26327[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26328 = state_26241;
state_26241 = G__26328;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__ = function(state_26241){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____1.call(this,state_26241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25842__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_26270 = f__25937__auto__.call(null);
(statearr_26270[(6)] = c__25936__auto__);

return statearr_26270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));

return c__25936__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__26330 = arguments.length;
switch (G__26330) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__26333 = arguments.length;
switch (G__26333) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__26336 = arguments.length;
switch (G__26336) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__25936__auto___26385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_26362){
var state_val_26363 = (state_26362[(1)]);
if((state_val_26363 === (7))){
var inst_26358 = (state_26362[(2)]);
var state_26362__$1 = state_26362;
var statearr_26364_26386 = state_26362__$1;
(statearr_26364_26386[(2)] = inst_26358);

(statearr_26364_26386[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (1))){
var state_26362__$1 = state_26362;
var statearr_26365_26387 = state_26362__$1;
(statearr_26365_26387[(2)] = null);

(statearr_26365_26387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (4))){
var inst_26339 = (state_26362[(7)]);
var inst_26339__$1 = (state_26362[(2)]);
var inst_26340 = (inst_26339__$1 == null);
var state_26362__$1 = (function (){var statearr_26366 = state_26362;
(statearr_26366[(7)] = inst_26339__$1);

return statearr_26366;
})();
if(cljs.core.truth_(inst_26340)){
var statearr_26367_26388 = state_26362__$1;
(statearr_26367_26388[(1)] = (5));

} else {
var statearr_26368_26389 = state_26362__$1;
(statearr_26368_26389[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (13))){
var state_26362__$1 = state_26362;
var statearr_26369_26390 = state_26362__$1;
(statearr_26369_26390[(2)] = null);

(statearr_26369_26390[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (6))){
var inst_26339 = (state_26362[(7)]);
var inst_26345 = p.call(null,inst_26339);
var state_26362__$1 = state_26362;
if(cljs.core.truth_(inst_26345)){
var statearr_26370_26391 = state_26362__$1;
(statearr_26370_26391[(1)] = (9));

} else {
var statearr_26371_26392 = state_26362__$1;
(statearr_26371_26392[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (3))){
var inst_26360 = (state_26362[(2)]);
var state_26362__$1 = state_26362;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26362__$1,inst_26360);
} else {
if((state_val_26363 === (12))){
var state_26362__$1 = state_26362;
var statearr_26372_26393 = state_26362__$1;
(statearr_26372_26393[(2)] = null);

(statearr_26372_26393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (2))){
var state_26362__$1 = state_26362;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26362__$1,(4),ch);
} else {
if((state_val_26363 === (11))){
var inst_26339 = (state_26362[(7)]);
var inst_26349 = (state_26362[(2)]);
var state_26362__$1 = state_26362;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26362__$1,(8),inst_26349,inst_26339);
} else {
if((state_val_26363 === (9))){
var state_26362__$1 = state_26362;
var statearr_26373_26394 = state_26362__$1;
(statearr_26373_26394[(2)] = tc);

(statearr_26373_26394[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (5))){
var inst_26342 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26343 = cljs.core.async.close_BANG_.call(null,fc);
var state_26362__$1 = (function (){var statearr_26374 = state_26362;
(statearr_26374[(8)] = inst_26342);

return statearr_26374;
})();
var statearr_26375_26395 = state_26362__$1;
(statearr_26375_26395[(2)] = inst_26343);

(statearr_26375_26395[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (14))){
var inst_26356 = (state_26362[(2)]);
var state_26362__$1 = state_26362;
var statearr_26376_26396 = state_26362__$1;
(statearr_26376_26396[(2)] = inst_26356);

(statearr_26376_26396[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (10))){
var state_26362__$1 = state_26362;
var statearr_26377_26397 = state_26362__$1;
(statearr_26377_26397[(2)] = fc);

(statearr_26377_26397[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26363 === (8))){
var inst_26351 = (state_26362[(2)]);
var state_26362__$1 = state_26362;
if(cljs.core.truth_(inst_26351)){
var statearr_26378_26398 = state_26362__$1;
(statearr_26378_26398[(1)] = (12));

} else {
var statearr_26379_26399 = state_26362__$1;
(statearr_26379_26399[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__25842__auto__ = null;
var cljs$core$async$state_machine__25842__auto____0 = (function (){
var statearr_26380 = [null,null,null,null,null,null,null,null,null];
(statearr_26380[(0)] = cljs$core$async$state_machine__25842__auto__);

(statearr_26380[(1)] = (1));

return statearr_26380;
});
var cljs$core$async$state_machine__25842__auto____1 = (function (state_26362){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_26362);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e26381){if((e26381 instanceof Object)){
var ex__25845__auto__ = e26381;
var statearr_26382_26400 = state_26362;
(statearr_26382_26400[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26362);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26401 = state_26362;
state_26362 = G__26401;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
cljs$core$async$state_machine__25842__auto__ = function(state_26362){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25842__auto____1.call(this,state_26362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25842__auto____0;
cljs$core$async$state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25842__auto____1;
return cljs$core$async$state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_26383 = f__25937__auto__.call(null);
(statearr_26383[(6)] = c__25936__auto___26385);

return statearr_26383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__25936__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_26422){
var state_val_26423 = (state_26422[(1)]);
if((state_val_26423 === (7))){
var inst_26418 = (state_26422[(2)]);
var state_26422__$1 = state_26422;
var statearr_26424_26442 = state_26422__$1;
(statearr_26424_26442[(2)] = inst_26418);

(statearr_26424_26442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26423 === (1))){
var inst_26402 = init;
var state_26422__$1 = (function (){var statearr_26425 = state_26422;
(statearr_26425[(7)] = inst_26402);

return statearr_26425;
})();
var statearr_26426_26443 = state_26422__$1;
(statearr_26426_26443[(2)] = null);

(statearr_26426_26443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26423 === (4))){
var inst_26405 = (state_26422[(8)]);
var inst_26405__$1 = (state_26422[(2)]);
var inst_26406 = (inst_26405__$1 == null);
var state_26422__$1 = (function (){var statearr_26427 = state_26422;
(statearr_26427[(8)] = inst_26405__$1);

return statearr_26427;
})();
if(cljs.core.truth_(inst_26406)){
var statearr_26428_26444 = state_26422__$1;
(statearr_26428_26444[(1)] = (5));

} else {
var statearr_26429_26445 = state_26422__$1;
(statearr_26429_26445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26423 === (6))){
var inst_26409 = (state_26422[(9)]);
var inst_26405 = (state_26422[(8)]);
var inst_26402 = (state_26422[(7)]);
var inst_26409__$1 = f.call(null,inst_26402,inst_26405);
var inst_26410 = cljs.core.reduced_QMARK_.call(null,inst_26409__$1);
var state_26422__$1 = (function (){var statearr_26430 = state_26422;
(statearr_26430[(9)] = inst_26409__$1);

return statearr_26430;
})();
if(inst_26410){
var statearr_26431_26446 = state_26422__$1;
(statearr_26431_26446[(1)] = (8));

} else {
var statearr_26432_26447 = state_26422__$1;
(statearr_26432_26447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26423 === (3))){
var inst_26420 = (state_26422[(2)]);
var state_26422__$1 = state_26422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26422__$1,inst_26420);
} else {
if((state_val_26423 === (2))){
var state_26422__$1 = state_26422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26422__$1,(4),ch);
} else {
if((state_val_26423 === (9))){
var inst_26409 = (state_26422[(9)]);
var inst_26402 = inst_26409;
var state_26422__$1 = (function (){var statearr_26433 = state_26422;
(statearr_26433[(7)] = inst_26402);

return statearr_26433;
})();
var statearr_26434_26448 = state_26422__$1;
(statearr_26434_26448[(2)] = null);

(statearr_26434_26448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26423 === (5))){
var inst_26402 = (state_26422[(7)]);
var state_26422__$1 = state_26422;
var statearr_26435_26449 = state_26422__$1;
(statearr_26435_26449[(2)] = inst_26402);

(statearr_26435_26449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26423 === (10))){
var inst_26416 = (state_26422[(2)]);
var state_26422__$1 = state_26422;
var statearr_26436_26450 = state_26422__$1;
(statearr_26436_26450[(2)] = inst_26416);

(statearr_26436_26450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26423 === (8))){
var inst_26409 = (state_26422[(9)]);
var inst_26412 = cljs.core.deref.call(null,inst_26409);
var state_26422__$1 = state_26422;
var statearr_26437_26451 = state_26422__$1;
(statearr_26437_26451[(2)] = inst_26412);

(statearr_26437_26451[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__25842__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25842__auto____0 = (function (){
var statearr_26438 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26438[(0)] = cljs$core$async$reduce_$_state_machine__25842__auto__);

(statearr_26438[(1)] = (1));

return statearr_26438;
});
var cljs$core$async$reduce_$_state_machine__25842__auto____1 = (function (state_26422){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_26422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e26439){if((e26439 instanceof Object)){
var ex__25845__auto__ = e26439;
var statearr_26440_26452 = state_26422;
(statearr_26440_26452[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26453 = state_26422;
state_26422 = G__26453;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25842__auto__ = function(state_26422){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25842__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25842__auto____1.call(this,state_26422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25842__auto____0;
cljs$core$async$reduce_$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25842__auto____1;
return cljs$core$async$reduce_$_state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_26441 = f__25937__auto__.call(null);
(statearr_26441[(6)] = c__25936__auto__);

return statearr_26441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));

return c__25936__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__25936__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_26459){
var state_val_26460 = (state_26459[(1)]);
if((state_val_26460 === (1))){
var inst_26454 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26459__$1 = state_26459;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26459__$1,(2),inst_26454);
} else {
if((state_val_26460 === (2))){
var inst_26456 = (state_26459[(2)]);
var inst_26457 = f__$1.call(null,inst_26456);
var state_26459__$1 = state_26459;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26459__$1,inst_26457);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__25842__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25842__auto____0 = (function (){
var statearr_26461 = [null,null,null,null,null,null,null];
(statearr_26461[(0)] = cljs$core$async$transduce_$_state_machine__25842__auto__);

(statearr_26461[(1)] = (1));

return statearr_26461;
});
var cljs$core$async$transduce_$_state_machine__25842__auto____1 = (function (state_26459){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_26459);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e26462){if((e26462 instanceof Object)){
var ex__25845__auto__ = e26462;
var statearr_26463_26465 = state_26459;
(statearr_26463_26465[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26459);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26466 = state_26459;
state_26459 = G__26466;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25842__auto__ = function(state_26459){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25842__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25842__auto____1.call(this,state_26459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25842__auto____0;
cljs$core$async$transduce_$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25842__auto____1;
return cljs$core$async$transduce_$_state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_26464 = f__25937__auto__.call(null);
(statearr_26464[(6)] = c__25936__auto__);

return statearr_26464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));

return c__25936__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__26468 = arguments.length;
switch (G__26468) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__25936__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_26493){
var state_val_26494 = (state_26493[(1)]);
if((state_val_26494 === (7))){
var inst_26475 = (state_26493[(2)]);
var state_26493__$1 = state_26493;
var statearr_26495_26516 = state_26493__$1;
(statearr_26495_26516[(2)] = inst_26475);

(statearr_26495_26516[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26494 === (1))){
var inst_26469 = cljs.core.seq.call(null,coll);
var inst_26470 = inst_26469;
var state_26493__$1 = (function (){var statearr_26496 = state_26493;
(statearr_26496[(7)] = inst_26470);

return statearr_26496;
})();
var statearr_26497_26517 = state_26493__$1;
(statearr_26497_26517[(2)] = null);

(statearr_26497_26517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26494 === (4))){
var inst_26470 = (state_26493[(7)]);
var inst_26473 = cljs.core.first.call(null,inst_26470);
var state_26493__$1 = state_26493;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26493__$1,(7),ch,inst_26473);
} else {
if((state_val_26494 === (13))){
var inst_26487 = (state_26493[(2)]);
var state_26493__$1 = state_26493;
var statearr_26498_26518 = state_26493__$1;
(statearr_26498_26518[(2)] = inst_26487);

(statearr_26498_26518[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26494 === (6))){
var inst_26478 = (state_26493[(2)]);
var state_26493__$1 = state_26493;
if(cljs.core.truth_(inst_26478)){
var statearr_26499_26519 = state_26493__$1;
(statearr_26499_26519[(1)] = (8));

} else {
var statearr_26500_26520 = state_26493__$1;
(statearr_26500_26520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26494 === (3))){
var inst_26491 = (state_26493[(2)]);
var state_26493__$1 = state_26493;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26493__$1,inst_26491);
} else {
if((state_val_26494 === (12))){
var state_26493__$1 = state_26493;
var statearr_26501_26521 = state_26493__$1;
(statearr_26501_26521[(2)] = null);

(statearr_26501_26521[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26494 === (2))){
var inst_26470 = (state_26493[(7)]);
var state_26493__$1 = state_26493;
if(cljs.core.truth_(inst_26470)){
var statearr_26502_26522 = state_26493__$1;
(statearr_26502_26522[(1)] = (4));

} else {
var statearr_26503_26523 = state_26493__$1;
(statearr_26503_26523[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26494 === (11))){
var inst_26484 = cljs.core.async.close_BANG_.call(null,ch);
var state_26493__$1 = state_26493;
var statearr_26504_26524 = state_26493__$1;
(statearr_26504_26524[(2)] = inst_26484);

(statearr_26504_26524[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26494 === (9))){
var state_26493__$1 = state_26493;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26505_26525 = state_26493__$1;
(statearr_26505_26525[(1)] = (11));

} else {
var statearr_26506_26526 = state_26493__$1;
(statearr_26506_26526[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26494 === (5))){
var inst_26470 = (state_26493[(7)]);
var state_26493__$1 = state_26493;
var statearr_26507_26527 = state_26493__$1;
(statearr_26507_26527[(2)] = inst_26470);

(statearr_26507_26527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26494 === (10))){
var inst_26489 = (state_26493[(2)]);
var state_26493__$1 = state_26493;
var statearr_26508_26528 = state_26493__$1;
(statearr_26508_26528[(2)] = inst_26489);

(statearr_26508_26528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26494 === (8))){
var inst_26470 = (state_26493[(7)]);
var inst_26480 = cljs.core.next.call(null,inst_26470);
var inst_26470__$1 = inst_26480;
var state_26493__$1 = (function (){var statearr_26509 = state_26493;
(statearr_26509[(7)] = inst_26470__$1);

return statearr_26509;
})();
var statearr_26510_26529 = state_26493__$1;
(statearr_26510_26529[(2)] = null);

(statearr_26510_26529[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__25842__auto__ = null;
var cljs$core$async$state_machine__25842__auto____0 = (function (){
var statearr_26511 = [null,null,null,null,null,null,null,null];
(statearr_26511[(0)] = cljs$core$async$state_machine__25842__auto__);

(statearr_26511[(1)] = (1));

return statearr_26511;
});
var cljs$core$async$state_machine__25842__auto____1 = (function (state_26493){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_26493);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e26512){if((e26512 instanceof Object)){
var ex__25845__auto__ = e26512;
var statearr_26513_26530 = state_26493;
(statearr_26513_26530[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26512;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26531 = state_26493;
state_26493 = G__26531;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
cljs$core$async$state_machine__25842__auto__ = function(state_26493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25842__auto____1.call(this,state_26493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25842__auto____0;
cljs$core$async$state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25842__auto____1;
return cljs$core$async$state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_26514 = f__25937__auto__.call(null);
(statearr_26514[(6)] = c__25936__auto__);

return statearr_26514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));

return c__25936__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_26532 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_26532.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_26533 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_26533.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_26534 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_26534.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_26535 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_26535.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26536 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26536 = (function (ch,cs,meta26537){
this.ch = ch;
this.cs = cs;
this.meta26537 = meta26537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26538,meta26537__$1){
var self__ = this;
var _26538__$1 = this;
return (new cljs.core.async.t_cljs$core$async26536(self__.ch,self__.cs,meta26537__$1));
}));

(cljs.core.async.t_cljs$core$async26536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26538){
var self__ = this;
var _26538__$1 = this;
return self__.meta26537;
}));

(cljs.core.async.t_cljs$core$async26536.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26536.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async26536.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26536.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async26536.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async26536.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async26536.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26537","meta26537",-951118399,null)], null);
}));

(cljs.core.async.t_cljs$core$async26536.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26536.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26536");

(cljs.core.async.t_cljs$core$async26536.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26536");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26536.
 */
cljs.core.async.__GT_t_cljs$core$async26536 = (function cljs$core$async$mult_$___GT_t_cljs$core$async26536(ch__$1,cs__$1,meta26537){
return (new cljs.core.async.t_cljs$core$async26536(ch__$1,cs__$1,meta26537));
});

}

return (new cljs.core.async.t_cljs$core$async26536(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__25936__auto___26758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_26673){
var state_val_26674 = (state_26673[(1)]);
if((state_val_26674 === (7))){
var inst_26669 = (state_26673[(2)]);
var state_26673__$1 = state_26673;
var statearr_26675_26759 = state_26673__$1;
(statearr_26675_26759[(2)] = inst_26669);

(statearr_26675_26759[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (20))){
var inst_26572 = (state_26673[(7)]);
var inst_26584 = cljs.core.first.call(null,inst_26572);
var inst_26585 = cljs.core.nth.call(null,inst_26584,(0),null);
var inst_26586 = cljs.core.nth.call(null,inst_26584,(1),null);
var state_26673__$1 = (function (){var statearr_26676 = state_26673;
(statearr_26676[(8)] = inst_26585);

return statearr_26676;
})();
if(cljs.core.truth_(inst_26586)){
var statearr_26677_26760 = state_26673__$1;
(statearr_26677_26760[(1)] = (22));

} else {
var statearr_26678_26761 = state_26673__$1;
(statearr_26678_26761[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (27))){
var inst_26614 = (state_26673[(9)]);
var inst_26616 = (state_26673[(10)]);
var inst_26621 = (state_26673[(11)]);
var inst_26541 = (state_26673[(12)]);
var inst_26621__$1 = cljs.core._nth.call(null,inst_26614,inst_26616);
var inst_26622 = cljs.core.async.put_BANG_.call(null,inst_26621__$1,inst_26541,done);
var state_26673__$1 = (function (){var statearr_26679 = state_26673;
(statearr_26679[(11)] = inst_26621__$1);

return statearr_26679;
})();
if(cljs.core.truth_(inst_26622)){
var statearr_26680_26762 = state_26673__$1;
(statearr_26680_26762[(1)] = (30));

} else {
var statearr_26681_26763 = state_26673__$1;
(statearr_26681_26763[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (1))){
var state_26673__$1 = state_26673;
var statearr_26682_26764 = state_26673__$1;
(statearr_26682_26764[(2)] = null);

(statearr_26682_26764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (24))){
var inst_26572 = (state_26673[(7)]);
var inst_26591 = (state_26673[(2)]);
var inst_26592 = cljs.core.next.call(null,inst_26572);
var inst_26550 = inst_26592;
var inst_26551 = null;
var inst_26552 = (0);
var inst_26553 = (0);
var state_26673__$1 = (function (){var statearr_26683 = state_26673;
(statearr_26683[(13)] = inst_26551);

(statearr_26683[(14)] = inst_26553);

(statearr_26683[(15)] = inst_26591);

(statearr_26683[(16)] = inst_26552);

(statearr_26683[(17)] = inst_26550);

return statearr_26683;
})();
var statearr_26684_26765 = state_26673__$1;
(statearr_26684_26765[(2)] = null);

(statearr_26684_26765[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (39))){
var state_26673__$1 = state_26673;
var statearr_26688_26766 = state_26673__$1;
(statearr_26688_26766[(2)] = null);

(statearr_26688_26766[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (4))){
var inst_26541 = (state_26673[(12)]);
var inst_26541__$1 = (state_26673[(2)]);
var inst_26542 = (inst_26541__$1 == null);
var state_26673__$1 = (function (){var statearr_26689 = state_26673;
(statearr_26689[(12)] = inst_26541__$1);

return statearr_26689;
})();
if(cljs.core.truth_(inst_26542)){
var statearr_26690_26767 = state_26673__$1;
(statearr_26690_26767[(1)] = (5));

} else {
var statearr_26691_26768 = state_26673__$1;
(statearr_26691_26768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (15))){
var inst_26551 = (state_26673[(13)]);
var inst_26553 = (state_26673[(14)]);
var inst_26552 = (state_26673[(16)]);
var inst_26550 = (state_26673[(17)]);
var inst_26568 = (state_26673[(2)]);
var inst_26569 = (inst_26553 + (1));
var tmp26685 = inst_26551;
var tmp26686 = inst_26552;
var tmp26687 = inst_26550;
var inst_26550__$1 = tmp26687;
var inst_26551__$1 = tmp26685;
var inst_26552__$1 = tmp26686;
var inst_26553__$1 = inst_26569;
var state_26673__$1 = (function (){var statearr_26692 = state_26673;
(statearr_26692[(13)] = inst_26551__$1);

(statearr_26692[(14)] = inst_26553__$1);

(statearr_26692[(16)] = inst_26552__$1);

(statearr_26692[(18)] = inst_26568);

(statearr_26692[(17)] = inst_26550__$1);

return statearr_26692;
})();
var statearr_26693_26769 = state_26673__$1;
(statearr_26693_26769[(2)] = null);

(statearr_26693_26769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (21))){
var inst_26595 = (state_26673[(2)]);
var state_26673__$1 = state_26673;
var statearr_26697_26770 = state_26673__$1;
(statearr_26697_26770[(2)] = inst_26595);

(statearr_26697_26770[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (31))){
var inst_26621 = (state_26673[(11)]);
var inst_26625 = done.call(null,null);
var inst_26626 = cljs.core.async.untap_STAR_.call(null,m,inst_26621);
var state_26673__$1 = (function (){var statearr_26698 = state_26673;
(statearr_26698[(19)] = inst_26625);

return statearr_26698;
})();
var statearr_26699_26771 = state_26673__$1;
(statearr_26699_26771[(2)] = inst_26626);

(statearr_26699_26771[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (32))){
var inst_26614 = (state_26673[(9)]);
var inst_26613 = (state_26673[(20)]);
var inst_26616 = (state_26673[(10)]);
var inst_26615 = (state_26673[(21)]);
var inst_26628 = (state_26673[(2)]);
var inst_26629 = (inst_26616 + (1));
var tmp26694 = inst_26614;
var tmp26695 = inst_26613;
var tmp26696 = inst_26615;
var inst_26613__$1 = tmp26695;
var inst_26614__$1 = tmp26694;
var inst_26615__$1 = tmp26696;
var inst_26616__$1 = inst_26629;
var state_26673__$1 = (function (){var statearr_26700 = state_26673;
(statearr_26700[(22)] = inst_26628);

(statearr_26700[(9)] = inst_26614__$1);

(statearr_26700[(20)] = inst_26613__$1);

(statearr_26700[(10)] = inst_26616__$1);

(statearr_26700[(21)] = inst_26615__$1);

return statearr_26700;
})();
var statearr_26701_26772 = state_26673__$1;
(statearr_26701_26772[(2)] = null);

(statearr_26701_26772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (40))){
var inst_26641 = (state_26673[(23)]);
var inst_26645 = done.call(null,null);
var inst_26646 = cljs.core.async.untap_STAR_.call(null,m,inst_26641);
var state_26673__$1 = (function (){var statearr_26702 = state_26673;
(statearr_26702[(24)] = inst_26645);

return statearr_26702;
})();
var statearr_26703_26773 = state_26673__$1;
(statearr_26703_26773[(2)] = inst_26646);

(statearr_26703_26773[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (33))){
var inst_26632 = (state_26673[(25)]);
var inst_26634 = cljs.core.chunked_seq_QMARK_.call(null,inst_26632);
var state_26673__$1 = state_26673;
if(inst_26634){
var statearr_26704_26774 = state_26673__$1;
(statearr_26704_26774[(1)] = (36));

} else {
var statearr_26705_26775 = state_26673__$1;
(statearr_26705_26775[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (13))){
var inst_26562 = (state_26673[(26)]);
var inst_26565 = cljs.core.async.close_BANG_.call(null,inst_26562);
var state_26673__$1 = state_26673;
var statearr_26706_26776 = state_26673__$1;
(statearr_26706_26776[(2)] = inst_26565);

(statearr_26706_26776[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (22))){
var inst_26585 = (state_26673[(8)]);
var inst_26588 = cljs.core.async.close_BANG_.call(null,inst_26585);
var state_26673__$1 = state_26673;
var statearr_26707_26777 = state_26673__$1;
(statearr_26707_26777[(2)] = inst_26588);

(statearr_26707_26777[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (36))){
var inst_26632 = (state_26673[(25)]);
var inst_26636 = cljs.core.chunk_first.call(null,inst_26632);
var inst_26637 = cljs.core.chunk_rest.call(null,inst_26632);
var inst_26638 = cljs.core.count.call(null,inst_26636);
var inst_26613 = inst_26637;
var inst_26614 = inst_26636;
var inst_26615 = inst_26638;
var inst_26616 = (0);
var state_26673__$1 = (function (){var statearr_26708 = state_26673;
(statearr_26708[(9)] = inst_26614);

(statearr_26708[(20)] = inst_26613);

(statearr_26708[(10)] = inst_26616);

(statearr_26708[(21)] = inst_26615);

return statearr_26708;
})();
var statearr_26709_26778 = state_26673__$1;
(statearr_26709_26778[(2)] = null);

(statearr_26709_26778[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (41))){
var inst_26632 = (state_26673[(25)]);
var inst_26648 = (state_26673[(2)]);
var inst_26649 = cljs.core.next.call(null,inst_26632);
var inst_26613 = inst_26649;
var inst_26614 = null;
var inst_26615 = (0);
var inst_26616 = (0);
var state_26673__$1 = (function (){var statearr_26710 = state_26673;
(statearr_26710[(27)] = inst_26648);

(statearr_26710[(9)] = inst_26614);

(statearr_26710[(20)] = inst_26613);

(statearr_26710[(10)] = inst_26616);

(statearr_26710[(21)] = inst_26615);

return statearr_26710;
})();
var statearr_26711_26779 = state_26673__$1;
(statearr_26711_26779[(2)] = null);

(statearr_26711_26779[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (43))){
var state_26673__$1 = state_26673;
var statearr_26712_26780 = state_26673__$1;
(statearr_26712_26780[(2)] = null);

(statearr_26712_26780[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (29))){
var inst_26657 = (state_26673[(2)]);
var state_26673__$1 = state_26673;
var statearr_26713_26781 = state_26673__$1;
(statearr_26713_26781[(2)] = inst_26657);

(statearr_26713_26781[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (44))){
var inst_26666 = (state_26673[(2)]);
var state_26673__$1 = (function (){var statearr_26714 = state_26673;
(statearr_26714[(28)] = inst_26666);

return statearr_26714;
})();
var statearr_26715_26782 = state_26673__$1;
(statearr_26715_26782[(2)] = null);

(statearr_26715_26782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (6))){
var inst_26605 = (state_26673[(29)]);
var inst_26604 = cljs.core.deref.call(null,cs);
var inst_26605__$1 = cljs.core.keys.call(null,inst_26604);
var inst_26606 = cljs.core.count.call(null,inst_26605__$1);
var inst_26607 = cljs.core.reset_BANG_.call(null,dctr,inst_26606);
var inst_26612 = cljs.core.seq.call(null,inst_26605__$1);
var inst_26613 = inst_26612;
var inst_26614 = null;
var inst_26615 = (0);
var inst_26616 = (0);
var state_26673__$1 = (function (){var statearr_26716 = state_26673;
(statearr_26716[(30)] = inst_26607);

(statearr_26716[(9)] = inst_26614);

(statearr_26716[(20)] = inst_26613);

(statearr_26716[(29)] = inst_26605__$1);

(statearr_26716[(10)] = inst_26616);

(statearr_26716[(21)] = inst_26615);

return statearr_26716;
})();
var statearr_26717_26783 = state_26673__$1;
(statearr_26717_26783[(2)] = null);

(statearr_26717_26783[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (28))){
var inst_26613 = (state_26673[(20)]);
var inst_26632 = (state_26673[(25)]);
var inst_26632__$1 = cljs.core.seq.call(null,inst_26613);
var state_26673__$1 = (function (){var statearr_26718 = state_26673;
(statearr_26718[(25)] = inst_26632__$1);

return statearr_26718;
})();
if(inst_26632__$1){
var statearr_26719_26784 = state_26673__$1;
(statearr_26719_26784[(1)] = (33));

} else {
var statearr_26720_26785 = state_26673__$1;
(statearr_26720_26785[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (25))){
var inst_26616 = (state_26673[(10)]);
var inst_26615 = (state_26673[(21)]);
var inst_26618 = (inst_26616 < inst_26615);
var inst_26619 = inst_26618;
var state_26673__$1 = state_26673;
if(cljs.core.truth_(inst_26619)){
var statearr_26721_26786 = state_26673__$1;
(statearr_26721_26786[(1)] = (27));

} else {
var statearr_26722_26787 = state_26673__$1;
(statearr_26722_26787[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (34))){
var state_26673__$1 = state_26673;
var statearr_26723_26788 = state_26673__$1;
(statearr_26723_26788[(2)] = null);

(statearr_26723_26788[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (17))){
var state_26673__$1 = state_26673;
var statearr_26724_26789 = state_26673__$1;
(statearr_26724_26789[(2)] = null);

(statearr_26724_26789[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (3))){
var inst_26671 = (state_26673[(2)]);
var state_26673__$1 = state_26673;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26673__$1,inst_26671);
} else {
if((state_val_26674 === (12))){
var inst_26600 = (state_26673[(2)]);
var state_26673__$1 = state_26673;
var statearr_26725_26790 = state_26673__$1;
(statearr_26725_26790[(2)] = inst_26600);

(statearr_26725_26790[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (2))){
var state_26673__$1 = state_26673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26673__$1,(4),ch);
} else {
if((state_val_26674 === (23))){
var state_26673__$1 = state_26673;
var statearr_26726_26791 = state_26673__$1;
(statearr_26726_26791[(2)] = null);

(statearr_26726_26791[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (35))){
var inst_26655 = (state_26673[(2)]);
var state_26673__$1 = state_26673;
var statearr_26727_26792 = state_26673__$1;
(statearr_26727_26792[(2)] = inst_26655);

(statearr_26727_26792[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (19))){
var inst_26572 = (state_26673[(7)]);
var inst_26576 = cljs.core.chunk_first.call(null,inst_26572);
var inst_26577 = cljs.core.chunk_rest.call(null,inst_26572);
var inst_26578 = cljs.core.count.call(null,inst_26576);
var inst_26550 = inst_26577;
var inst_26551 = inst_26576;
var inst_26552 = inst_26578;
var inst_26553 = (0);
var state_26673__$1 = (function (){var statearr_26728 = state_26673;
(statearr_26728[(13)] = inst_26551);

(statearr_26728[(14)] = inst_26553);

(statearr_26728[(16)] = inst_26552);

(statearr_26728[(17)] = inst_26550);

return statearr_26728;
})();
var statearr_26729_26793 = state_26673__$1;
(statearr_26729_26793[(2)] = null);

(statearr_26729_26793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (11))){
var inst_26550 = (state_26673[(17)]);
var inst_26572 = (state_26673[(7)]);
var inst_26572__$1 = cljs.core.seq.call(null,inst_26550);
var state_26673__$1 = (function (){var statearr_26730 = state_26673;
(statearr_26730[(7)] = inst_26572__$1);

return statearr_26730;
})();
if(inst_26572__$1){
var statearr_26731_26794 = state_26673__$1;
(statearr_26731_26794[(1)] = (16));

} else {
var statearr_26732_26795 = state_26673__$1;
(statearr_26732_26795[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (9))){
var inst_26602 = (state_26673[(2)]);
var state_26673__$1 = state_26673;
var statearr_26733_26796 = state_26673__$1;
(statearr_26733_26796[(2)] = inst_26602);

(statearr_26733_26796[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (5))){
var inst_26548 = cljs.core.deref.call(null,cs);
var inst_26549 = cljs.core.seq.call(null,inst_26548);
var inst_26550 = inst_26549;
var inst_26551 = null;
var inst_26552 = (0);
var inst_26553 = (0);
var state_26673__$1 = (function (){var statearr_26734 = state_26673;
(statearr_26734[(13)] = inst_26551);

(statearr_26734[(14)] = inst_26553);

(statearr_26734[(16)] = inst_26552);

(statearr_26734[(17)] = inst_26550);

return statearr_26734;
})();
var statearr_26735_26797 = state_26673__$1;
(statearr_26735_26797[(2)] = null);

(statearr_26735_26797[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (14))){
var state_26673__$1 = state_26673;
var statearr_26736_26798 = state_26673__$1;
(statearr_26736_26798[(2)] = null);

(statearr_26736_26798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (45))){
var inst_26663 = (state_26673[(2)]);
var state_26673__$1 = state_26673;
var statearr_26737_26799 = state_26673__$1;
(statearr_26737_26799[(2)] = inst_26663);

(statearr_26737_26799[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (26))){
var inst_26605 = (state_26673[(29)]);
var inst_26659 = (state_26673[(2)]);
var inst_26660 = cljs.core.seq.call(null,inst_26605);
var state_26673__$1 = (function (){var statearr_26738 = state_26673;
(statearr_26738[(31)] = inst_26659);

return statearr_26738;
})();
if(inst_26660){
var statearr_26739_26800 = state_26673__$1;
(statearr_26739_26800[(1)] = (42));

} else {
var statearr_26740_26801 = state_26673__$1;
(statearr_26740_26801[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (16))){
var inst_26572 = (state_26673[(7)]);
var inst_26574 = cljs.core.chunked_seq_QMARK_.call(null,inst_26572);
var state_26673__$1 = state_26673;
if(inst_26574){
var statearr_26741_26802 = state_26673__$1;
(statearr_26741_26802[(1)] = (19));

} else {
var statearr_26742_26803 = state_26673__$1;
(statearr_26742_26803[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (38))){
var inst_26652 = (state_26673[(2)]);
var state_26673__$1 = state_26673;
var statearr_26743_26804 = state_26673__$1;
(statearr_26743_26804[(2)] = inst_26652);

(statearr_26743_26804[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (30))){
var state_26673__$1 = state_26673;
var statearr_26744_26805 = state_26673__$1;
(statearr_26744_26805[(2)] = null);

(statearr_26744_26805[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (10))){
var inst_26551 = (state_26673[(13)]);
var inst_26553 = (state_26673[(14)]);
var inst_26561 = cljs.core._nth.call(null,inst_26551,inst_26553);
var inst_26562 = cljs.core.nth.call(null,inst_26561,(0),null);
var inst_26563 = cljs.core.nth.call(null,inst_26561,(1),null);
var state_26673__$1 = (function (){var statearr_26745 = state_26673;
(statearr_26745[(26)] = inst_26562);

return statearr_26745;
})();
if(cljs.core.truth_(inst_26563)){
var statearr_26746_26806 = state_26673__$1;
(statearr_26746_26806[(1)] = (13));

} else {
var statearr_26747_26807 = state_26673__$1;
(statearr_26747_26807[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (18))){
var inst_26598 = (state_26673[(2)]);
var state_26673__$1 = state_26673;
var statearr_26748_26808 = state_26673__$1;
(statearr_26748_26808[(2)] = inst_26598);

(statearr_26748_26808[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (42))){
var state_26673__$1 = state_26673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26673__$1,(45),dchan);
} else {
if((state_val_26674 === (37))){
var inst_26641 = (state_26673[(23)]);
var inst_26632 = (state_26673[(25)]);
var inst_26541 = (state_26673[(12)]);
var inst_26641__$1 = cljs.core.first.call(null,inst_26632);
var inst_26642 = cljs.core.async.put_BANG_.call(null,inst_26641__$1,inst_26541,done);
var state_26673__$1 = (function (){var statearr_26749 = state_26673;
(statearr_26749[(23)] = inst_26641__$1);

return statearr_26749;
})();
if(cljs.core.truth_(inst_26642)){
var statearr_26750_26809 = state_26673__$1;
(statearr_26750_26809[(1)] = (39));

} else {
var statearr_26751_26810 = state_26673__$1;
(statearr_26751_26810[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26674 === (8))){
var inst_26553 = (state_26673[(14)]);
var inst_26552 = (state_26673[(16)]);
var inst_26555 = (inst_26553 < inst_26552);
var inst_26556 = inst_26555;
var state_26673__$1 = state_26673;
if(cljs.core.truth_(inst_26556)){
var statearr_26752_26811 = state_26673__$1;
(statearr_26752_26811[(1)] = (10));

} else {
var statearr_26753_26812 = state_26673__$1;
(statearr_26753_26812[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__25842__auto__ = null;
var cljs$core$async$mult_$_state_machine__25842__auto____0 = (function (){
var statearr_26754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26754[(0)] = cljs$core$async$mult_$_state_machine__25842__auto__);

(statearr_26754[(1)] = (1));

return statearr_26754;
});
var cljs$core$async$mult_$_state_machine__25842__auto____1 = (function (state_26673){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_26673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e26755){if((e26755 instanceof Object)){
var ex__25845__auto__ = e26755;
var statearr_26756_26813 = state_26673;
(statearr_26756_26813[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26814 = state_26673;
state_26673 = G__26814;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25842__auto__ = function(state_26673){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25842__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25842__auto____1.call(this,state_26673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25842__auto____0;
cljs$core$async$mult_$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25842__auto____1;
return cljs$core$async$mult_$_state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_26757 = f__25937__auto__.call(null);
(statearr_26757[(6)] = c__25936__auto___26758);

return statearr_26757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__26816 = arguments.length;
switch (G__26816) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_26818 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_26818.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_26819 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_26819.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_26820 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_26820.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_26821 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_26821.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_26822 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_26822.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___26833 = arguments.length;
var i__4737__auto___26834 = (0);
while(true){
if((i__4737__auto___26834 < len__4736__auto___26833)){
args__4742__auto__.push((arguments[i__4737__auto___26834]));

var G__26835 = (i__4737__auto___26834 + (1));
i__4737__auto___26834 = G__26835;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26827){
var map__26828 = p__26827;
var map__26828__$1 = (((((!((map__26828 == null))))?(((((map__26828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26828.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26828):map__26828);
var opts = map__26828__$1;
var statearr_26830_26836 = state;
(statearr_26830_26836[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_26831_26837 = state;
(statearr_26831_26837[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_26832_26838 = state;
(statearr_26832_26838[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26823){
var G__26824 = cljs.core.first.call(null,seq26823);
var seq26823__$1 = cljs.core.next.call(null,seq26823);
var G__26825 = cljs.core.first.call(null,seq26823__$1);
var seq26823__$2 = cljs.core.next.call(null,seq26823__$1);
var G__26826 = cljs.core.first.call(null,seq26823__$2);
var seq26823__$3 = cljs.core.next.call(null,seq26823__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26824,G__26825,G__26826,seq26823__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async26839 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26839 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26840){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26840 = meta26840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async26839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26841,meta26840__$1){
var self__ = this;
var _26841__$1 = this;
return (new cljs.core.async.t_cljs$core$async26839(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26840__$1));
}));

(cljs.core.async.t_cljs$core$async26839.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26841){
var self__ = this;
var _26841__$1 = this;
return self__.meta26840;
}));

(cljs.core.async.t_cljs$core$async26839.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26839.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async26839.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async26839.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async26839.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async26839.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async26839.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async26839.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async26839.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26840","meta26840",-1612016363,null)], null);
}));

(cljs.core.async.t_cljs$core$async26839.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async26839.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26839");

(cljs.core.async.t_cljs$core$async26839.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async26839");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26839.
 */
cljs.core.async.__GT_t_cljs$core$async26839 = (function cljs$core$async$mix_$___GT_t_cljs$core$async26839(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26840){
return (new cljs.core.async.t_cljs$core$async26839(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26840));
});

}

return (new cljs.core.async.t_cljs$core$async26839(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25936__auto___27003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_26943){
var state_val_26944 = (state_26943[(1)]);
if((state_val_26944 === (7))){
var inst_26858 = (state_26943[(2)]);
var state_26943__$1 = state_26943;
var statearr_26945_27004 = state_26943__$1;
(statearr_26945_27004[(2)] = inst_26858);

(statearr_26945_27004[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (20))){
var inst_26870 = (state_26943[(7)]);
var state_26943__$1 = state_26943;
var statearr_26946_27005 = state_26943__$1;
(statearr_26946_27005[(2)] = inst_26870);

(statearr_26946_27005[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (27))){
var state_26943__$1 = state_26943;
var statearr_26947_27006 = state_26943__$1;
(statearr_26947_27006[(2)] = null);

(statearr_26947_27006[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (1))){
var inst_26845 = (state_26943[(8)]);
var inst_26845__$1 = calc_state.call(null);
var inst_26847 = (inst_26845__$1 == null);
var inst_26848 = cljs.core.not.call(null,inst_26847);
var state_26943__$1 = (function (){var statearr_26948 = state_26943;
(statearr_26948[(8)] = inst_26845__$1);

return statearr_26948;
})();
if(inst_26848){
var statearr_26949_27007 = state_26943__$1;
(statearr_26949_27007[(1)] = (2));

} else {
var statearr_26950_27008 = state_26943__$1;
(statearr_26950_27008[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (24))){
var inst_26917 = (state_26943[(9)]);
var inst_26903 = (state_26943[(10)]);
var inst_26894 = (state_26943[(11)]);
var inst_26917__$1 = inst_26894.call(null,inst_26903);
var state_26943__$1 = (function (){var statearr_26951 = state_26943;
(statearr_26951[(9)] = inst_26917__$1);

return statearr_26951;
})();
if(cljs.core.truth_(inst_26917__$1)){
var statearr_26952_27009 = state_26943__$1;
(statearr_26952_27009[(1)] = (29));

} else {
var statearr_26953_27010 = state_26943__$1;
(statearr_26953_27010[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (4))){
var inst_26861 = (state_26943[(2)]);
var state_26943__$1 = state_26943;
if(cljs.core.truth_(inst_26861)){
var statearr_26954_27011 = state_26943__$1;
(statearr_26954_27011[(1)] = (8));

} else {
var statearr_26955_27012 = state_26943__$1;
(statearr_26955_27012[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (15))){
var inst_26888 = (state_26943[(2)]);
var state_26943__$1 = state_26943;
if(cljs.core.truth_(inst_26888)){
var statearr_26956_27013 = state_26943__$1;
(statearr_26956_27013[(1)] = (19));

} else {
var statearr_26957_27014 = state_26943__$1;
(statearr_26957_27014[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (21))){
var inst_26893 = (state_26943[(12)]);
var inst_26893__$1 = (state_26943[(2)]);
var inst_26894 = cljs.core.get.call(null,inst_26893__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26895 = cljs.core.get.call(null,inst_26893__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26896 = cljs.core.get.call(null,inst_26893__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_26943__$1 = (function (){var statearr_26958 = state_26943;
(statearr_26958[(13)] = inst_26895);

(statearr_26958[(11)] = inst_26894);

(statearr_26958[(12)] = inst_26893__$1);

return statearr_26958;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26943__$1,(22),inst_26896);
} else {
if((state_val_26944 === (31))){
var inst_26925 = (state_26943[(2)]);
var state_26943__$1 = state_26943;
if(cljs.core.truth_(inst_26925)){
var statearr_26959_27015 = state_26943__$1;
(statearr_26959_27015[(1)] = (32));

} else {
var statearr_26960_27016 = state_26943__$1;
(statearr_26960_27016[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (32))){
var inst_26902 = (state_26943[(14)]);
var state_26943__$1 = state_26943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26943__$1,(35),out,inst_26902);
} else {
if((state_val_26944 === (33))){
var inst_26893 = (state_26943[(12)]);
var inst_26870 = inst_26893;
var state_26943__$1 = (function (){var statearr_26961 = state_26943;
(statearr_26961[(7)] = inst_26870);

return statearr_26961;
})();
var statearr_26962_27017 = state_26943__$1;
(statearr_26962_27017[(2)] = null);

(statearr_26962_27017[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (13))){
var inst_26870 = (state_26943[(7)]);
var inst_26877 = inst_26870.cljs$lang$protocol_mask$partition0$;
var inst_26878 = (inst_26877 & (64));
var inst_26879 = inst_26870.cljs$core$ISeq$;
var inst_26880 = (cljs.core.PROTOCOL_SENTINEL === inst_26879);
var inst_26881 = ((inst_26878) || (inst_26880));
var state_26943__$1 = state_26943;
if(cljs.core.truth_(inst_26881)){
var statearr_26963_27018 = state_26943__$1;
(statearr_26963_27018[(1)] = (16));

} else {
var statearr_26964_27019 = state_26943__$1;
(statearr_26964_27019[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (22))){
var inst_26903 = (state_26943[(10)]);
var inst_26902 = (state_26943[(14)]);
var inst_26901 = (state_26943[(2)]);
var inst_26902__$1 = cljs.core.nth.call(null,inst_26901,(0),null);
var inst_26903__$1 = cljs.core.nth.call(null,inst_26901,(1),null);
var inst_26904 = (inst_26902__$1 == null);
var inst_26905 = cljs.core._EQ_.call(null,inst_26903__$1,change);
var inst_26906 = ((inst_26904) || (inst_26905));
var state_26943__$1 = (function (){var statearr_26965 = state_26943;
(statearr_26965[(10)] = inst_26903__$1);

(statearr_26965[(14)] = inst_26902__$1);

return statearr_26965;
})();
if(cljs.core.truth_(inst_26906)){
var statearr_26966_27020 = state_26943__$1;
(statearr_26966_27020[(1)] = (23));

} else {
var statearr_26967_27021 = state_26943__$1;
(statearr_26967_27021[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (36))){
var inst_26893 = (state_26943[(12)]);
var inst_26870 = inst_26893;
var state_26943__$1 = (function (){var statearr_26968 = state_26943;
(statearr_26968[(7)] = inst_26870);

return statearr_26968;
})();
var statearr_26969_27022 = state_26943__$1;
(statearr_26969_27022[(2)] = null);

(statearr_26969_27022[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (29))){
var inst_26917 = (state_26943[(9)]);
var state_26943__$1 = state_26943;
var statearr_26970_27023 = state_26943__$1;
(statearr_26970_27023[(2)] = inst_26917);

(statearr_26970_27023[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (6))){
var state_26943__$1 = state_26943;
var statearr_26971_27024 = state_26943__$1;
(statearr_26971_27024[(2)] = false);

(statearr_26971_27024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (28))){
var inst_26913 = (state_26943[(2)]);
var inst_26914 = calc_state.call(null);
var inst_26870 = inst_26914;
var state_26943__$1 = (function (){var statearr_26972 = state_26943;
(statearr_26972[(15)] = inst_26913);

(statearr_26972[(7)] = inst_26870);

return statearr_26972;
})();
var statearr_26973_27025 = state_26943__$1;
(statearr_26973_27025[(2)] = null);

(statearr_26973_27025[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (25))){
var inst_26939 = (state_26943[(2)]);
var state_26943__$1 = state_26943;
var statearr_26974_27026 = state_26943__$1;
(statearr_26974_27026[(2)] = inst_26939);

(statearr_26974_27026[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (34))){
var inst_26937 = (state_26943[(2)]);
var state_26943__$1 = state_26943;
var statearr_26975_27027 = state_26943__$1;
(statearr_26975_27027[(2)] = inst_26937);

(statearr_26975_27027[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (17))){
var state_26943__$1 = state_26943;
var statearr_26976_27028 = state_26943__$1;
(statearr_26976_27028[(2)] = false);

(statearr_26976_27028[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (3))){
var state_26943__$1 = state_26943;
var statearr_26977_27029 = state_26943__$1;
(statearr_26977_27029[(2)] = false);

(statearr_26977_27029[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (12))){
var inst_26941 = (state_26943[(2)]);
var state_26943__$1 = state_26943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26943__$1,inst_26941);
} else {
if((state_val_26944 === (2))){
var inst_26845 = (state_26943[(8)]);
var inst_26850 = inst_26845.cljs$lang$protocol_mask$partition0$;
var inst_26851 = (inst_26850 & (64));
var inst_26852 = inst_26845.cljs$core$ISeq$;
var inst_26853 = (cljs.core.PROTOCOL_SENTINEL === inst_26852);
var inst_26854 = ((inst_26851) || (inst_26853));
var state_26943__$1 = state_26943;
if(cljs.core.truth_(inst_26854)){
var statearr_26978_27030 = state_26943__$1;
(statearr_26978_27030[(1)] = (5));

} else {
var statearr_26979_27031 = state_26943__$1;
(statearr_26979_27031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (23))){
var inst_26902 = (state_26943[(14)]);
var inst_26908 = (inst_26902 == null);
var state_26943__$1 = state_26943;
if(cljs.core.truth_(inst_26908)){
var statearr_26980_27032 = state_26943__$1;
(statearr_26980_27032[(1)] = (26));

} else {
var statearr_26981_27033 = state_26943__$1;
(statearr_26981_27033[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (35))){
var inst_26928 = (state_26943[(2)]);
var state_26943__$1 = state_26943;
if(cljs.core.truth_(inst_26928)){
var statearr_26982_27034 = state_26943__$1;
(statearr_26982_27034[(1)] = (36));

} else {
var statearr_26983_27035 = state_26943__$1;
(statearr_26983_27035[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (19))){
var inst_26870 = (state_26943[(7)]);
var inst_26890 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26870);
var state_26943__$1 = state_26943;
var statearr_26984_27036 = state_26943__$1;
(statearr_26984_27036[(2)] = inst_26890);

(statearr_26984_27036[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (11))){
var inst_26870 = (state_26943[(7)]);
var inst_26874 = (inst_26870 == null);
var inst_26875 = cljs.core.not.call(null,inst_26874);
var state_26943__$1 = state_26943;
if(inst_26875){
var statearr_26985_27037 = state_26943__$1;
(statearr_26985_27037[(1)] = (13));

} else {
var statearr_26986_27038 = state_26943__$1;
(statearr_26986_27038[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (9))){
var inst_26845 = (state_26943[(8)]);
var state_26943__$1 = state_26943;
var statearr_26987_27039 = state_26943__$1;
(statearr_26987_27039[(2)] = inst_26845);

(statearr_26987_27039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (5))){
var state_26943__$1 = state_26943;
var statearr_26988_27040 = state_26943__$1;
(statearr_26988_27040[(2)] = true);

(statearr_26988_27040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (14))){
var state_26943__$1 = state_26943;
var statearr_26989_27041 = state_26943__$1;
(statearr_26989_27041[(2)] = false);

(statearr_26989_27041[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (26))){
var inst_26903 = (state_26943[(10)]);
var inst_26910 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26903);
var state_26943__$1 = state_26943;
var statearr_26990_27042 = state_26943__$1;
(statearr_26990_27042[(2)] = inst_26910);

(statearr_26990_27042[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (16))){
var state_26943__$1 = state_26943;
var statearr_26991_27043 = state_26943__$1;
(statearr_26991_27043[(2)] = true);

(statearr_26991_27043[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (38))){
var inst_26933 = (state_26943[(2)]);
var state_26943__$1 = state_26943;
var statearr_26992_27044 = state_26943__$1;
(statearr_26992_27044[(2)] = inst_26933);

(statearr_26992_27044[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (30))){
var inst_26903 = (state_26943[(10)]);
var inst_26895 = (state_26943[(13)]);
var inst_26894 = (state_26943[(11)]);
var inst_26920 = cljs.core.empty_QMARK_.call(null,inst_26894);
var inst_26921 = inst_26895.call(null,inst_26903);
var inst_26922 = cljs.core.not.call(null,inst_26921);
var inst_26923 = ((inst_26920) && (inst_26922));
var state_26943__$1 = state_26943;
var statearr_26993_27045 = state_26943__$1;
(statearr_26993_27045[(2)] = inst_26923);

(statearr_26993_27045[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (10))){
var inst_26845 = (state_26943[(8)]);
var inst_26866 = (state_26943[(2)]);
var inst_26867 = cljs.core.get.call(null,inst_26866,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26868 = cljs.core.get.call(null,inst_26866,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26869 = cljs.core.get.call(null,inst_26866,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26870 = inst_26845;
var state_26943__$1 = (function (){var statearr_26994 = state_26943;
(statearr_26994[(16)] = inst_26868);

(statearr_26994[(17)] = inst_26869);

(statearr_26994[(18)] = inst_26867);

(statearr_26994[(7)] = inst_26870);

return statearr_26994;
})();
var statearr_26995_27046 = state_26943__$1;
(statearr_26995_27046[(2)] = null);

(statearr_26995_27046[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (18))){
var inst_26885 = (state_26943[(2)]);
var state_26943__$1 = state_26943;
var statearr_26996_27047 = state_26943__$1;
(statearr_26996_27047[(2)] = inst_26885);

(statearr_26996_27047[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (37))){
var state_26943__$1 = state_26943;
var statearr_26997_27048 = state_26943__$1;
(statearr_26997_27048[(2)] = null);

(statearr_26997_27048[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26944 === (8))){
var inst_26845 = (state_26943[(8)]);
var inst_26863 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26845);
var state_26943__$1 = state_26943;
var statearr_26998_27049 = state_26943__$1;
(statearr_26998_27049[(2)] = inst_26863);

(statearr_26998_27049[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__25842__auto__ = null;
var cljs$core$async$mix_$_state_machine__25842__auto____0 = (function (){
var statearr_26999 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26999[(0)] = cljs$core$async$mix_$_state_machine__25842__auto__);

(statearr_26999[(1)] = (1));

return statearr_26999;
});
var cljs$core$async$mix_$_state_machine__25842__auto____1 = (function (state_26943){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_26943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e27000){if((e27000 instanceof Object)){
var ex__25845__auto__ = e27000;
var statearr_27001_27050 = state_26943;
(statearr_27001_27050[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27051 = state_26943;
state_26943 = G__27051;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25842__auto__ = function(state_26943){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25842__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25842__auto____1.call(this,state_26943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25842__auto____0;
cljs$core$async$mix_$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25842__auto____1;
return cljs$core$async$mix_$_state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_27002 = f__25937__auto__.call(null);
(statearr_27002[(6)] = c__25936__auto___27003);

return statearr_27002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_27054 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_27054.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_27055 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_27055.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_27056 = (function() {
var G__27057 = null;
var G__27057__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__27057__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__27057 = function(p,v){
switch(arguments.length){
case 1:
return G__27057__1.call(this,p);
case 2:
return G__27057__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__27057.cljs$core$IFn$_invoke$arity$1 = G__27057__1;
G__27057.cljs$core$IFn$_invoke$arity$2 = G__27057__2;
return G__27057;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__27053 = arguments.length;
switch (G__27053) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27056.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_27056.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__27061 = arguments.length;
switch (G__27061) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__27059_SHARP_){
if(cljs.core.truth_(p1__27059_SHARP_.call(null,topic))){
return p1__27059_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27059_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27062 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27062 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27063){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27063 = meta27063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27064,meta27063__$1){
var self__ = this;
var _27064__$1 = this;
return (new cljs.core.async.t_cljs$core$async27062(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27063__$1));
}));

(cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27064){
var self__ = this;
var _27064__$1 = this;
return self__.meta27063;
}));

(cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async27062.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async27062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27063","meta27063",2131616568,null)], null);
}));

(cljs.core.async.t_cljs$core$async27062.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27062");

(cljs.core.async.t_cljs$core$async27062.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27062");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27062.
 */
cljs.core.async.__GT_t_cljs$core$async27062 = (function cljs$core$async$__GT_t_cljs$core$async27062(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27063){
return (new cljs.core.async.t_cljs$core$async27062(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27063));
});

}

return (new cljs.core.async.t_cljs$core$async27062(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__25936__auto___27182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_27136){
var state_val_27137 = (state_27136[(1)]);
if((state_val_27137 === (7))){
var inst_27132 = (state_27136[(2)]);
var state_27136__$1 = state_27136;
var statearr_27138_27183 = state_27136__$1;
(statearr_27138_27183[(2)] = inst_27132);

(statearr_27138_27183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27137 === (20))){
var state_27136__$1 = state_27136;
var statearr_27139_27184 = state_27136__$1;
(statearr_27139_27184[(2)] = null);

(statearr_27139_27184[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27137 === (1))){
var state_27136__$1 = state_27136;
var statearr_27140_27185 = state_27136__$1;
(statearr_27140_27185[(2)] = null);

(statearr_27140_27185[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27137 === (24))){
var inst_27115 = (state_27136[(7)]);
var inst_27124 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27115);
var state_27136__$1 = state_27136;
var statearr_27141_27186 = state_27136__$1;
(statearr_27141_27186[(2)] = inst_27124);

(statearr_27141_27186[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27137 === (4))){
var inst_27067 = (state_27136[(8)]);
var inst_27067__$1 = (state_27136[(2)]);
var inst_27068 = (inst_27067__$1 == null);
var state_27136__$1 = (function (){var statearr_27142 = state_27136;
(statearr_27142[(8)] = inst_27067__$1);

return statearr_27142;
})();
if(cljs.core.truth_(inst_27068)){
var statearr_27143_27187 = state_27136__$1;
(statearr_27143_27187[(1)] = (5));

} else {
var statearr_27144_27188 = state_27136__$1;
(statearr_27144_27188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27137 === (15))){
var inst_27109 = (state_27136[(2)]);
var state_27136__$1 = state_27136;
var statearr_27145_27189 = state_27136__$1;
(statearr_27145_27189[(2)] = inst_27109);

(statearr_27145_27189[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27137 === (21))){
var inst_27129 = (state_27136[(2)]);
var state_27136__$1 = (function (){var statearr_27146 = state_27136;
(statearr_27146[(9)] = inst_27129);

return statearr_27146;
})();
var statearr_27147_27190 = state_27136__$1;
(statearr_27147_27190[(2)] = null);

(statearr_27147_27190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27137 === (13))){
var inst_27091 = (state_27136[(10)]);
var inst_27093 = cljs.core.chunked_seq_QMARK_.call(null,inst_27091);
var state_27136__$1 = state_27136;
if(inst_27093){
var statearr_27148_27191 = state_27136__$1;
(statearr_27148_27191[(1)] = (16));

} else {
var statearr_27149_27192 = state_27136__$1;
(statearr_27149_27192[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27137 === (22))){
var inst_27121 = (state_27136[(2)]);
var state_27136__$1 = state_27136;
if(cljs.core.truth_(inst_27121)){
var statearr_27150_27193 = state_27136__$1;
(statearr_27150_27193[(1)] = (23));

} else {
var statearr_27151_27194 = state_27136__$1;
(statearr_27151_27194[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27137 === (6))){
var inst_27115 = (state_27136[(7)]);
var inst_27067 = (state_27136[(8)]);
var inst_27117 = (state_27136[(11)]);
var inst_27115__$1 = topic_fn.call(null,inst_27067);
var inst_27116 = cljs.core.deref.call(null,mults);
var inst_27117__$1 = cljs.core.get.call(null,inst_27116,inst_27115__$1);
var state_27136__$1 = (function (){var statearr_27152 = state_27136;
(statearr_27152[(7)] = inst_27115__$1);

(statearr_27152[(11)] = inst_27117__$1);

return statearr_27152;
})();
if(cljs.core.truth_(inst_27117__$1)){
var statearr_27153_27195 = state_27136__$1;
(statearr_27153_27195[(1)] = (19));

} else {
var statearr_27154_27196 = state_27136__$1;
(statearr_27154_27196[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27137 === (25))){
var inst_27126 = (state_27136[(2)]);
var state_27136__$1 = state_27136;
var statearr_27155_27197 = state_27136__$1;
(statearr_27155_27197[(2)] = inst_27126);

(statearr_27155_27197[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27137 === (17))){
var inst_27091 = (state_27136[(10)]);
var inst_27100 = cljs.core.first.call(null,inst_27091);
var inst_27101 = cljs.core.async.muxch_STAR_.call(null,inst_27100);
var inst_27102 = cljs.core.async.close_BANG_.call(null,inst_27101);
var inst_27103 = cljs.core.next.call(null,inst_27091);
var inst_27077 = inst_27103;
var inst_27078 = null;
var inst_27079 = (0);
var inst_27080 = (0);
var state_27136__$1 = (function (){var statearr_27156 = state_27136;
(statearr_27156[(12)] = inst_27102);

(statearr_27156[(13)] = inst_27080);

(statearr_27156[(14)] = inst_27079);

(statearr_27156[(15)] = inst_27078);

(statearr_27156[(16)] = inst_27077);

return statearr_27156;
})();
var statearr_27157_27198 = state_27136__$1;
(statearr_27157_27198[(2)] = null);

(statearr_27157_27198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27137 === (3))){
var inst_27134 = (state_27136[(2)]);
var state_27136__$1 = state_27136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27136__$1,inst_27134);
} else {
if((state_val_27137 === (12))){
var inst_27111 = (state_27136[(2)]);
var state_27136__$1 = state_27136;
var statearr_27158_27199 = state_27136__$1;
(statearr_27158_27199[(2)] = inst_27111);

(statearr_27158_27199[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27137 === (2))){
var state_27136__$1 = state_27136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27136__$1,(4),ch);
} else {
if((state_val_27137 === (23))){
var state_27136__$1 = state_27136;
var statearr_27159_27200 = state_27136__$1;
(statearr_27159_27200[(2)] = null);

(statearr_27159_27200[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27137 === (19))){
var inst_27067 = (state_27136[(8)]);
var inst_27117 = (state_27136[(11)]);
var inst_27119 = cljs.core.async.muxch_STAR_.call(null,inst_27117);
var state_27136__$1 = state_27136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27136__$1,(22),inst_27119,inst_27067);
} else {
if((state_val_27137 === (11))){
var inst_27091 = (state_27136[(10)]);
var inst_27077 = (state_27136[(16)]);
var inst_27091__$1 = cljs.core.seq.call(null,inst_27077);
var state_27136__$1 = (function (){var statearr_27160 = state_27136;
(statearr_27160[(10)] = inst_27091__$1);

return statearr_27160;
})();
if(inst_27091__$1){
var statearr_27161_27201 = state_27136__$1;
(statearr_27161_27201[(1)] = (13));

} else {
var statearr_27162_27202 = state_27136__$1;
(statearr_27162_27202[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27137 === (9))){
var inst_27113 = (state_27136[(2)]);
var state_27136__$1 = state_27136;
var statearr_27163_27203 = state_27136__$1;
(statearr_27163_27203[(2)] = inst_27113);

(statearr_27163_27203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27137 === (5))){
var inst_27074 = cljs.core.deref.call(null,mults);
var inst_27075 = cljs.core.vals.call(null,inst_27074);
var inst_27076 = cljs.core.seq.call(null,inst_27075);
var inst_27077 = inst_27076;
var inst_27078 = null;
var inst_27079 = (0);
var inst_27080 = (0);
var state_27136__$1 = (function (){var statearr_27164 = state_27136;
(statearr_27164[(13)] = inst_27080);

(statearr_27164[(14)] = inst_27079);

(statearr_27164[(15)] = inst_27078);

(statearr_27164[(16)] = inst_27077);

return statearr_27164;
})();
var statearr_27165_27204 = state_27136__$1;
(statearr_27165_27204[(2)] = null);

(statearr_27165_27204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27137 === (14))){
var state_27136__$1 = state_27136;
var statearr_27169_27205 = state_27136__$1;
(statearr_27169_27205[(2)] = null);

(statearr_27169_27205[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27137 === (16))){
var inst_27091 = (state_27136[(10)]);
var inst_27095 = cljs.core.chunk_first.call(null,inst_27091);
var inst_27096 = cljs.core.chunk_rest.call(null,inst_27091);
var inst_27097 = cljs.core.count.call(null,inst_27095);
var inst_27077 = inst_27096;
var inst_27078 = inst_27095;
var inst_27079 = inst_27097;
var inst_27080 = (0);
var state_27136__$1 = (function (){var statearr_27170 = state_27136;
(statearr_27170[(13)] = inst_27080);

(statearr_27170[(14)] = inst_27079);

(statearr_27170[(15)] = inst_27078);

(statearr_27170[(16)] = inst_27077);

return statearr_27170;
})();
var statearr_27171_27206 = state_27136__$1;
(statearr_27171_27206[(2)] = null);

(statearr_27171_27206[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27137 === (10))){
var inst_27080 = (state_27136[(13)]);
var inst_27079 = (state_27136[(14)]);
var inst_27078 = (state_27136[(15)]);
var inst_27077 = (state_27136[(16)]);
var inst_27085 = cljs.core._nth.call(null,inst_27078,inst_27080);
var inst_27086 = cljs.core.async.muxch_STAR_.call(null,inst_27085);
var inst_27087 = cljs.core.async.close_BANG_.call(null,inst_27086);
var inst_27088 = (inst_27080 + (1));
var tmp27166 = inst_27079;
var tmp27167 = inst_27078;
var tmp27168 = inst_27077;
var inst_27077__$1 = tmp27168;
var inst_27078__$1 = tmp27167;
var inst_27079__$1 = tmp27166;
var inst_27080__$1 = inst_27088;
var state_27136__$1 = (function (){var statearr_27172 = state_27136;
(statearr_27172[(17)] = inst_27087);

(statearr_27172[(13)] = inst_27080__$1);

(statearr_27172[(14)] = inst_27079__$1);

(statearr_27172[(15)] = inst_27078__$1);

(statearr_27172[(16)] = inst_27077__$1);

return statearr_27172;
})();
var statearr_27173_27207 = state_27136__$1;
(statearr_27173_27207[(2)] = null);

(statearr_27173_27207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27137 === (18))){
var inst_27106 = (state_27136[(2)]);
var state_27136__$1 = state_27136;
var statearr_27174_27208 = state_27136__$1;
(statearr_27174_27208[(2)] = inst_27106);

(statearr_27174_27208[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27137 === (8))){
var inst_27080 = (state_27136[(13)]);
var inst_27079 = (state_27136[(14)]);
var inst_27082 = (inst_27080 < inst_27079);
var inst_27083 = inst_27082;
var state_27136__$1 = state_27136;
if(cljs.core.truth_(inst_27083)){
var statearr_27175_27209 = state_27136__$1;
(statearr_27175_27209[(1)] = (10));

} else {
var statearr_27176_27210 = state_27136__$1;
(statearr_27176_27210[(1)] = (11));

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
var cljs$core$async$state_machine__25842__auto__ = null;
var cljs$core$async$state_machine__25842__auto____0 = (function (){
var statearr_27177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27177[(0)] = cljs$core$async$state_machine__25842__auto__);

(statearr_27177[(1)] = (1));

return statearr_27177;
});
var cljs$core$async$state_machine__25842__auto____1 = (function (state_27136){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_27136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e27178){if((e27178 instanceof Object)){
var ex__25845__auto__ = e27178;
var statearr_27179_27211 = state_27136;
(statearr_27179_27211[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27212 = state_27136;
state_27136 = G__27212;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
cljs$core$async$state_machine__25842__auto__ = function(state_27136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25842__auto____1.call(this,state_27136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25842__auto____0;
cljs$core$async$state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25842__auto____1;
return cljs$core$async$state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_27180 = f__25937__auto__.call(null);
(statearr_27180[(6)] = c__25936__auto___27182);

return statearr_27180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__27214 = arguments.length;
switch (G__27214) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__27217 = arguments.length;
switch (G__27217) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__27220 = arguments.length;
switch (G__27220) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__25936__auto___27287 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_27259){
var state_val_27260 = (state_27259[(1)]);
if((state_val_27260 === (7))){
var state_27259__$1 = state_27259;
var statearr_27261_27288 = state_27259__$1;
(statearr_27261_27288[(2)] = null);

(statearr_27261_27288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27260 === (1))){
var state_27259__$1 = state_27259;
var statearr_27262_27289 = state_27259__$1;
(statearr_27262_27289[(2)] = null);

(statearr_27262_27289[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27260 === (4))){
var inst_27223 = (state_27259[(7)]);
var inst_27225 = (inst_27223 < cnt);
var state_27259__$1 = state_27259;
if(cljs.core.truth_(inst_27225)){
var statearr_27263_27290 = state_27259__$1;
(statearr_27263_27290[(1)] = (6));

} else {
var statearr_27264_27291 = state_27259__$1;
(statearr_27264_27291[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27260 === (15))){
var inst_27255 = (state_27259[(2)]);
var state_27259__$1 = state_27259;
var statearr_27265_27292 = state_27259__$1;
(statearr_27265_27292[(2)] = inst_27255);

(statearr_27265_27292[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27260 === (13))){
var inst_27248 = cljs.core.async.close_BANG_.call(null,out);
var state_27259__$1 = state_27259;
var statearr_27266_27293 = state_27259__$1;
(statearr_27266_27293[(2)] = inst_27248);

(statearr_27266_27293[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27260 === (6))){
var state_27259__$1 = state_27259;
var statearr_27267_27294 = state_27259__$1;
(statearr_27267_27294[(2)] = null);

(statearr_27267_27294[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27260 === (3))){
var inst_27257 = (state_27259[(2)]);
var state_27259__$1 = state_27259;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27259__$1,inst_27257);
} else {
if((state_val_27260 === (12))){
var inst_27245 = (state_27259[(8)]);
var inst_27245__$1 = (state_27259[(2)]);
var inst_27246 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27245__$1);
var state_27259__$1 = (function (){var statearr_27268 = state_27259;
(statearr_27268[(8)] = inst_27245__$1);

return statearr_27268;
})();
if(cljs.core.truth_(inst_27246)){
var statearr_27269_27295 = state_27259__$1;
(statearr_27269_27295[(1)] = (13));

} else {
var statearr_27270_27296 = state_27259__$1;
(statearr_27270_27296[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27260 === (2))){
var inst_27222 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27223 = (0);
var state_27259__$1 = (function (){var statearr_27271 = state_27259;
(statearr_27271[(9)] = inst_27222);

(statearr_27271[(7)] = inst_27223);

return statearr_27271;
})();
var statearr_27272_27297 = state_27259__$1;
(statearr_27272_27297[(2)] = null);

(statearr_27272_27297[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27260 === (11))){
var inst_27223 = (state_27259[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27259,(10),Object,null,(9));
var inst_27232 = chs__$1.call(null,inst_27223);
var inst_27233 = done.call(null,inst_27223);
var inst_27234 = cljs.core.async.take_BANG_.call(null,inst_27232,inst_27233);
var state_27259__$1 = state_27259;
var statearr_27273_27298 = state_27259__$1;
(statearr_27273_27298[(2)] = inst_27234);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27259__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27260 === (9))){
var inst_27223 = (state_27259[(7)]);
var inst_27236 = (state_27259[(2)]);
var inst_27237 = (inst_27223 + (1));
var inst_27223__$1 = inst_27237;
var state_27259__$1 = (function (){var statearr_27274 = state_27259;
(statearr_27274[(10)] = inst_27236);

(statearr_27274[(7)] = inst_27223__$1);

return statearr_27274;
})();
var statearr_27275_27299 = state_27259__$1;
(statearr_27275_27299[(2)] = null);

(statearr_27275_27299[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27260 === (5))){
var inst_27243 = (state_27259[(2)]);
var state_27259__$1 = (function (){var statearr_27276 = state_27259;
(statearr_27276[(11)] = inst_27243);

return statearr_27276;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27259__$1,(12),dchan);
} else {
if((state_val_27260 === (14))){
var inst_27245 = (state_27259[(8)]);
var inst_27250 = cljs.core.apply.call(null,f,inst_27245);
var state_27259__$1 = state_27259;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27259__$1,(16),out,inst_27250);
} else {
if((state_val_27260 === (16))){
var inst_27252 = (state_27259[(2)]);
var state_27259__$1 = (function (){var statearr_27277 = state_27259;
(statearr_27277[(12)] = inst_27252);

return statearr_27277;
})();
var statearr_27278_27300 = state_27259__$1;
(statearr_27278_27300[(2)] = null);

(statearr_27278_27300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27260 === (10))){
var inst_27227 = (state_27259[(2)]);
var inst_27228 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27259__$1 = (function (){var statearr_27279 = state_27259;
(statearr_27279[(13)] = inst_27227);

return statearr_27279;
})();
var statearr_27280_27301 = state_27259__$1;
(statearr_27280_27301[(2)] = inst_27228);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27259__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27260 === (8))){
var inst_27241 = (state_27259[(2)]);
var state_27259__$1 = state_27259;
var statearr_27281_27302 = state_27259__$1;
(statearr_27281_27302[(2)] = inst_27241);

(statearr_27281_27302[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__25842__auto__ = null;
var cljs$core$async$state_machine__25842__auto____0 = (function (){
var statearr_27282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27282[(0)] = cljs$core$async$state_machine__25842__auto__);

(statearr_27282[(1)] = (1));

return statearr_27282;
});
var cljs$core$async$state_machine__25842__auto____1 = (function (state_27259){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_27259);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e27283){if((e27283 instanceof Object)){
var ex__25845__auto__ = e27283;
var statearr_27284_27303 = state_27259;
(statearr_27284_27303[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27259);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27283;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27304 = state_27259;
state_27259 = G__27304;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
cljs$core$async$state_machine__25842__auto__ = function(state_27259){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25842__auto____1.call(this,state_27259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25842__auto____0;
cljs$core$async$state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25842__auto____1;
return cljs$core$async$state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_27285 = f__25937__auto__.call(null);
(statearr_27285[(6)] = c__25936__auto___27287);

return statearr_27285;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__27307 = arguments.length;
switch (G__27307) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25936__auto___27361 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_27339){
var state_val_27340 = (state_27339[(1)]);
if((state_val_27340 === (7))){
var inst_27318 = (state_27339[(7)]);
var inst_27319 = (state_27339[(8)]);
var inst_27318__$1 = (state_27339[(2)]);
var inst_27319__$1 = cljs.core.nth.call(null,inst_27318__$1,(0),null);
var inst_27320 = cljs.core.nth.call(null,inst_27318__$1,(1),null);
var inst_27321 = (inst_27319__$1 == null);
var state_27339__$1 = (function (){var statearr_27341 = state_27339;
(statearr_27341[(9)] = inst_27320);

(statearr_27341[(7)] = inst_27318__$1);

(statearr_27341[(8)] = inst_27319__$1);

return statearr_27341;
})();
if(cljs.core.truth_(inst_27321)){
var statearr_27342_27362 = state_27339__$1;
(statearr_27342_27362[(1)] = (8));

} else {
var statearr_27343_27363 = state_27339__$1;
(statearr_27343_27363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27340 === (1))){
var inst_27308 = cljs.core.vec.call(null,chs);
var inst_27309 = inst_27308;
var state_27339__$1 = (function (){var statearr_27344 = state_27339;
(statearr_27344[(10)] = inst_27309);

return statearr_27344;
})();
var statearr_27345_27364 = state_27339__$1;
(statearr_27345_27364[(2)] = null);

(statearr_27345_27364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27340 === (4))){
var inst_27309 = (state_27339[(10)]);
var state_27339__$1 = state_27339;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27339__$1,(7),inst_27309);
} else {
if((state_val_27340 === (6))){
var inst_27335 = (state_27339[(2)]);
var state_27339__$1 = state_27339;
var statearr_27346_27365 = state_27339__$1;
(statearr_27346_27365[(2)] = inst_27335);

(statearr_27346_27365[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27340 === (3))){
var inst_27337 = (state_27339[(2)]);
var state_27339__$1 = state_27339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27339__$1,inst_27337);
} else {
if((state_val_27340 === (2))){
var inst_27309 = (state_27339[(10)]);
var inst_27311 = cljs.core.count.call(null,inst_27309);
var inst_27312 = (inst_27311 > (0));
var state_27339__$1 = state_27339;
if(cljs.core.truth_(inst_27312)){
var statearr_27348_27366 = state_27339__$1;
(statearr_27348_27366[(1)] = (4));

} else {
var statearr_27349_27367 = state_27339__$1;
(statearr_27349_27367[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27340 === (11))){
var inst_27309 = (state_27339[(10)]);
var inst_27328 = (state_27339[(2)]);
var tmp27347 = inst_27309;
var inst_27309__$1 = tmp27347;
var state_27339__$1 = (function (){var statearr_27350 = state_27339;
(statearr_27350[(11)] = inst_27328);

(statearr_27350[(10)] = inst_27309__$1);

return statearr_27350;
})();
var statearr_27351_27368 = state_27339__$1;
(statearr_27351_27368[(2)] = null);

(statearr_27351_27368[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27340 === (9))){
var inst_27319 = (state_27339[(8)]);
var state_27339__$1 = state_27339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27339__$1,(11),out,inst_27319);
} else {
if((state_val_27340 === (5))){
var inst_27333 = cljs.core.async.close_BANG_.call(null,out);
var state_27339__$1 = state_27339;
var statearr_27352_27369 = state_27339__$1;
(statearr_27352_27369[(2)] = inst_27333);

(statearr_27352_27369[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27340 === (10))){
var inst_27331 = (state_27339[(2)]);
var state_27339__$1 = state_27339;
var statearr_27353_27370 = state_27339__$1;
(statearr_27353_27370[(2)] = inst_27331);

(statearr_27353_27370[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27340 === (8))){
var inst_27320 = (state_27339[(9)]);
var inst_27318 = (state_27339[(7)]);
var inst_27319 = (state_27339[(8)]);
var inst_27309 = (state_27339[(10)]);
var inst_27323 = (function (){var cs = inst_27309;
var vec__27314 = inst_27318;
var v = inst_27319;
var c = inst_27320;
return (function (p1__27305_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27305_SHARP_);
});
})();
var inst_27324 = cljs.core.filterv.call(null,inst_27323,inst_27309);
var inst_27309__$1 = inst_27324;
var state_27339__$1 = (function (){var statearr_27354 = state_27339;
(statearr_27354[(10)] = inst_27309__$1);

return statearr_27354;
})();
var statearr_27355_27371 = state_27339__$1;
(statearr_27355_27371[(2)] = null);

(statearr_27355_27371[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__25842__auto__ = null;
var cljs$core$async$state_machine__25842__auto____0 = (function (){
var statearr_27356 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27356[(0)] = cljs$core$async$state_machine__25842__auto__);

(statearr_27356[(1)] = (1));

return statearr_27356;
});
var cljs$core$async$state_machine__25842__auto____1 = (function (state_27339){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_27339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e27357){if((e27357 instanceof Object)){
var ex__25845__auto__ = e27357;
var statearr_27358_27372 = state_27339;
(statearr_27358_27372[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27357;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27373 = state_27339;
state_27339 = G__27373;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
cljs$core$async$state_machine__25842__auto__ = function(state_27339){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25842__auto____1.call(this,state_27339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25842__auto____0;
cljs$core$async$state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25842__auto____1;
return cljs$core$async$state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_27359 = f__25937__auto__.call(null);
(statearr_27359[(6)] = c__25936__auto___27361);

return statearr_27359;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__27375 = arguments.length;
switch (G__27375) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25936__auto___27420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_27399){
var state_val_27400 = (state_27399[(1)]);
if((state_val_27400 === (7))){
var inst_27381 = (state_27399[(7)]);
var inst_27381__$1 = (state_27399[(2)]);
var inst_27382 = (inst_27381__$1 == null);
var inst_27383 = cljs.core.not.call(null,inst_27382);
var state_27399__$1 = (function (){var statearr_27401 = state_27399;
(statearr_27401[(7)] = inst_27381__$1);

return statearr_27401;
})();
if(inst_27383){
var statearr_27402_27421 = state_27399__$1;
(statearr_27402_27421[(1)] = (8));

} else {
var statearr_27403_27422 = state_27399__$1;
(statearr_27403_27422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (1))){
var inst_27376 = (0);
var state_27399__$1 = (function (){var statearr_27404 = state_27399;
(statearr_27404[(8)] = inst_27376);

return statearr_27404;
})();
var statearr_27405_27423 = state_27399__$1;
(statearr_27405_27423[(2)] = null);

(statearr_27405_27423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (4))){
var state_27399__$1 = state_27399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27399__$1,(7),ch);
} else {
if((state_val_27400 === (6))){
var inst_27394 = (state_27399[(2)]);
var state_27399__$1 = state_27399;
var statearr_27406_27424 = state_27399__$1;
(statearr_27406_27424[(2)] = inst_27394);

(statearr_27406_27424[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (3))){
var inst_27396 = (state_27399[(2)]);
var inst_27397 = cljs.core.async.close_BANG_.call(null,out);
var state_27399__$1 = (function (){var statearr_27407 = state_27399;
(statearr_27407[(9)] = inst_27396);

return statearr_27407;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27399__$1,inst_27397);
} else {
if((state_val_27400 === (2))){
var inst_27376 = (state_27399[(8)]);
var inst_27378 = (inst_27376 < n);
var state_27399__$1 = state_27399;
if(cljs.core.truth_(inst_27378)){
var statearr_27408_27425 = state_27399__$1;
(statearr_27408_27425[(1)] = (4));

} else {
var statearr_27409_27426 = state_27399__$1;
(statearr_27409_27426[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (11))){
var inst_27376 = (state_27399[(8)]);
var inst_27386 = (state_27399[(2)]);
var inst_27387 = (inst_27376 + (1));
var inst_27376__$1 = inst_27387;
var state_27399__$1 = (function (){var statearr_27410 = state_27399;
(statearr_27410[(10)] = inst_27386);

(statearr_27410[(8)] = inst_27376__$1);

return statearr_27410;
})();
var statearr_27411_27427 = state_27399__$1;
(statearr_27411_27427[(2)] = null);

(statearr_27411_27427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (9))){
var state_27399__$1 = state_27399;
var statearr_27412_27428 = state_27399__$1;
(statearr_27412_27428[(2)] = null);

(statearr_27412_27428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (5))){
var state_27399__$1 = state_27399;
var statearr_27413_27429 = state_27399__$1;
(statearr_27413_27429[(2)] = null);

(statearr_27413_27429[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (10))){
var inst_27391 = (state_27399[(2)]);
var state_27399__$1 = state_27399;
var statearr_27414_27430 = state_27399__$1;
(statearr_27414_27430[(2)] = inst_27391);

(statearr_27414_27430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (8))){
var inst_27381 = (state_27399[(7)]);
var state_27399__$1 = state_27399;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27399__$1,(11),out,inst_27381);
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
});
return (function() {
var cljs$core$async$state_machine__25842__auto__ = null;
var cljs$core$async$state_machine__25842__auto____0 = (function (){
var statearr_27415 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27415[(0)] = cljs$core$async$state_machine__25842__auto__);

(statearr_27415[(1)] = (1));

return statearr_27415;
});
var cljs$core$async$state_machine__25842__auto____1 = (function (state_27399){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_27399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e27416){if((e27416 instanceof Object)){
var ex__25845__auto__ = e27416;
var statearr_27417_27431 = state_27399;
(statearr_27417_27431[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27432 = state_27399;
state_27399 = G__27432;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
cljs$core$async$state_machine__25842__auto__ = function(state_27399){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25842__auto____1.call(this,state_27399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25842__auto____0;
cljs$core$async$state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25842__auto____1;
return cljs$core$async$state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_27418 = f__25937__auto__.call(null);
(statearr_27418[(6)] = c__25936__auto___27420);

return statearr_27418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27434 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27434 = (function (f,ch,meta27435){
this.f = f;
this.ch = ch;
this.meta27435 = meta27435;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27436,meta27435__$1){
var self__ = this;
var _27436__$1 = this;
return (new cljs.core.async.t_cljs$core$async27434(self__.f,self__.ch,meta27435__$1));
}));

(cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27436){
var self__ = this;
var _27436__$1 = this;
return self__.meta27435;
}));

(cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27437 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27437 = (function (f,ch,meta27435,_,fn1,meta27438){
this.f = f;
this.ch = ch;
this.meta27435 = meta27435;
this._ = _;
this.fn1 = fn1;
this.meta27438 = meta27438;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27439,meta27438__$1){
var self__ = this;
var _27439__$1 = this;
return (new cljs.core.async.t_cljs$core$async27437(self__.f,self__.ch,self__.meta27435,self__._,self__.fn1,meta27438__$1));
}));

(cljs.core.async.t_cljs$core$async27437.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27439){
var self__ = this;
var _27439__$1 = this;
return self__.meta27438;
}));

(cljs.core.async.t_cljs$core$async27437.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27437.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async27437.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27437.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__27433_SHARP_){
return f1.call(null,(((p1__27433_SHARP_ == null))?null:self__.f.call(null,p1__27433_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async27437.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27435","meta27435",1316785187,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27434","cljs.core.async/t_cljs$core$async27434",-1388009982,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27438","meta27438",621496292,null)], null);
}));

(cljs.core.async.t_cljs$core$async27437.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27437.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27437");

(cljs.core.async.t_cljs$core$async27437.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27437");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27437.
 */
cljs.core.async.__GT_t_cljs$core$async27437 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27437(f__$1,ch__$1,meta27435__$1,___$2,fn1__$1,meta27438){
return (new cljs.core.async.t_cljs$core$async27437(f__$1,ch__$1,meta27435__$1,___$2,fn1__$1,meta27438));
});

}

return (new cljs.core.async.t_cljs$core$async27437(self__.f,self__.ch,self__.meta27435,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27434.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async27434.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27435","meta27435",1316785187,null)], null);
}));

(cljs.core.async.t_cljs$core$async27434.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27434.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27434");

(cljs.core.async.t_cljs$core$async27434.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27434");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27434.
 */
cljs.core.async.__GT_t_cljs$core$async27434 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27434(f__$1,ch__$1,meta27435){
return (new cljs.core.async.t_cljs$core$async27434(f__$1,ch__$1,meta27435));
});

}

return (new cljs.core.async.t_cljs$core$async27434(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27440 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27440 = (function (f,ch,meta27441){
this.f = f;
this.ch = ch;
this.meta27441 = meta27441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27442,meta27441__$1){
var self__ = this;
var _27442__$1 = this;
return (new cljs.core.async.t_cljs$core$async27440(self__.f,self__.ch,meta27441__$1));
}));

(cljs.core.async.t_cljs$core$async27440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27442){
var self__ = this;
var _27442__$1 = this;
return self__.meta27441;
}));

(cljs.core.async.t_cljs$core$async27440.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27440.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27440.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27440.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async27440.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27440.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async27440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27441","meta27441",-570966059,null)], null);
}));

(cljs.core.async.t_cljs$core$async27440.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27440.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27440");

(cljs.core.async.t_cljs$core$async27440.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27440");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27440.
 */
cljs.core.async.__GT_t_cljs$core$async27440 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27440(f__$1,ch__$1,meta27441){
return (new cljs.core.async.t_cljs$core$async27440(f__$1,ch__$1,meta27441));
});

}

return (new cljs.core.async.t_cljs$core$async27440(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27443 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27443 = (function (p,ch,meta27444){
this.p = p;
this.ch = ch;
this.meta27444 = meta27444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27445,meta27444__$1){
var self__ = this;
var _27445__$1 = this;
return (new cljs.core.async.t_cljs$core$async27443(self__.p,self__.ch,meta27444__$1));
}));

(cljs.core.async.t_cljs$core$async27443.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27445){
var self__ = this;
var _27445__$1 = this;
return self__.meta27444;
}));

(cljs.core.async.t_cljs$core$async27443.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27443.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27443.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async27443.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27443.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async27443.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27443.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async27443.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27444","meta27444",-1672527395,null)], null);
}));

(cljs.core.async.t_cljs$core$async27443.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27443");

(cljs.core.async.t_cljs$core$async27443.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27443");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27443.
 */
cljs.core.async.__GT_t_cljs$core$async27443 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27443(p__$1,ch__$1,meta27444){
return (new cljs.core.async.t_cljs$core$async27443(p__$1,ch__$1,meta27444));
});

}

return (new cljs.core.async.t_cljs$core$async27443(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__27447 = arguments.length;
switch (G__27447) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25936__auto___27487 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_27468){
var state_val_27469 = (state_27468[(1)]);
if((state_val_27469 === (7))){
var inst_27464 = (state_27468[(2)]);
var state_27468__$1 = state_27468;
var statearr_27470_27488 = state_27468__$1;
(statearr_27470_27488[(2)] = inst_27464);

(statearr_27470_27488[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (1))){
var state_27468__$1 = state_27468;
var statearr_27471_27489 = state_27468__$1;
(statearr_27471_27489[(2)] = null);

(statearr_27471_27489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (4))){
var inst_27450 = (state_27468[(7)]);
var inst_27450__$1 = (state_27468[(2)]);
var inst_27451 = (inst_27450__$1 == null);
var state_27468__$1 = (function (){var statearr_27472 = state_27468;
(statearr_27472[(7)] = inst_27450__$1);

return statearr_27472;
})();
if(cljs.core.truth_(inst_27451)){
var statearr_27473_27490 = state_27468__$1;
(statearr_27473_27490[(1)] = (5));

} else {
var statearr_27474_27491 = state_27468__$1;
(statearr_27474_27491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (6))){
var inst_27450 = (state_27468[(7)]);
var inst_27455 = p.call(null,inst_27450);
var state_27468__$1 = state_27468;
if(cljs.core.truth_(inst_27455)){
var statearr_27475_27492 = state_27468__$1;
(statearr_27475_27492[(1)] = (8));

} else {
var statearr_27476_27493 = state_27468__$1;
(statearr_27476_27493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (3))){
var inst_27466 = (state_27468[(2)]);
var state_27468__$1 = state_27468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27468__$1,inst_27466);
} else {
if((state_val_27469 === (2))){
var state_27468__$1 = state_27468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27468__$1,(4),ch);
} else {
if((state_val_27469 === (11))){
var inst_27458 = (state_27468[(2)]);
var state_27468__$1 = state_27468;
var statearr_27477_27494 = state_27468__$1;
(statearr_27477_27494[(2)] = inst_27458);

(statearr_27477_27494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (9))){
var state_27468__$1 = state_27468;
var statearr_27478_27495 = state_27468__$1;
(statearr_27478_27495[(2)] = null);

(statearr_27478_27495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (5))){
var inst_27453 = cljs.core.async.close_BANG_.call(null,out);
var state_27468__$1 = state_27468;
var statearr_27479_27496 = state_27468__$1;
(statearr_27479_27496[(2)] = inst_27453);

(statearr_27479_27496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (10))){
var inst_27461 = (state_27468[(2)]);
var state_27468__$1 = (function (){var statearr_27480 = state_27468;
(statearr_27480[(8)] = inst_27461);

return statearr_27480;
})();
var statearr_27481_27497 = state_27468__$1;
(statearr_27481_27497[(2)] = null);

(statearr_27481_27497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27469 === (8))){
var inst_27450 = (state_27468[(7)]);
var state_27468__$1 = state_27468;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27468__$1,(11),out,inst_27450);
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
});
return (function() {
var cljs$core$async$state_machine__25842__auto__ = null;
var cljs$core$async$state_machine__25842__auto____0 = (function (){
var statearr_27482 = [null,null,null,null,null,null,null,null,null];
(statearr_27482[(0)] = cljs$core$async$state_machine__25842__auto__);

(statearr_27482[(1)] = (1));

return statearr_27482;
});
var cljs$core$async$state_machine__25842__auto____1 = (function (state_27468){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_27468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e27483){if((e27483 instanceof Object)){
var ex__25845__auto__ = e27483;
var statearr_27484_27498 = state_27468;
(statearr_27484_27498[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27499 = state_27468;
state_27468 = G__27499;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
cljs$core$async$state_machine__25842__auto__ = function(state_27468){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25842__auto____1.call(this,state_27468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25842__auto____0;
cljs$core$async$state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25842__auto____1;
return cljs$core$async$state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_27485 = f__25937__auto__.call(null);
(statearr_27485[(6)] = c__25936__auto___27487);

return statearr_27485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27501 = arguments.length;
switch (G__27501) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__25936__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_27564){
var state_val_27565 = (state_27564[(1)]);
if((state_val_27565 === (7))){
var inst_27560 = (state_27564[(2)]);
var state_27564__$1 = state_27564;
var statearr_27566_27604 = state_27564__$1;
(statearr_27566_27604[(2)] = inst_27560);

(statearr_27566_27604[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (20))){
var inst_27530 = (state_27564[(7)]);
var inst_27541 = (state_27564[(2)]);
var inst_27542 = cljs.core.next.call(null,inst_27530);
var inst_27516 = inst_27542;
var inst_27517 = null;
var inst_27518 = (0);
var inst_27519 = (0);
var state_27564__$1 = (function (){var statearr_27567 = state_27564;
(statearr_27567[(8)] = inst_27518);

(statearr_27567[(9)] = inst_27517);

(statearr_27567[(10)] = inst_27519);

(statearr_27567[(11)] = inst_27541);

(statearr_27567[(12)] = inst_27516);

return statearr_27567;
})();
var statearr_27568_27605 = state_27564__$1;
(statearr_27568_27605[(2)] = null);

(statearr_27568_27605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (1))){
var state_27564__$1 = state_27564;
var statearr_27569_27606 = state_27564__$1;
(statearr_27569_27606[(2)] = null);

(statearr_27569_27606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (4))){
var inst_27505 = (state_27564[(13)]);
var inst_27505__$1 = (state_27564[(2)]);
var inst_27506 = (inst_27505__$1 == null);
var state_27564__$1 = (function (){var statearr_27570 = state_27564;
(statearr_27570[(13)] = inst_27505__$1);

return statearr_27570;
})();
if(cljs.core.truth_(inst_27506)){
var statearr_27571_27607 = state_27564__$1;
(statearr_27571_27607[(1)] = (5));

} else {
var statearr_27572_27608 = state_27564__$1;
(statearr_27572_27608[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (15))){
var state_27564__$1 = state_27564;
var statearr_27576_27609 = state_27564__$1;
(statearr_27576_27609[(2)] = null);

(statearr_27576_27609[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (21))){
var state_27564__$1 = state_27564;
var statearr_27577_27610 = state_27564__$1;
(statearr_27577_27610[(2)] = null);

(statearr_27577_27610[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (13))){
var inst_27518 = (state_27564[(8)]);
var inst_27517 = (state_27564[(9)]);
var inst_27519 = (state_27564[(10)]);
var inst_27516 = (state_27564[(12)]);
var inst_27526 = (state_27564[(2)]);
var inst_27527 = (inst_27519 + (1));
var tmp27573 = inst_27518;
var tmp27574 = inst_27517;
var tmp27575 = inst_27516;
var inst_27516__$1 = tmp27575;
var inst_27517__$1 = tmp27574;
var inst_27518__$1 = tmp27573;
var inst_27519__$1 = inst_27527;
var state_27564__$1 = (function (){var statearr_27578 = state_27564;
(statearr_27578[(8)] = inst_27518__$1);

(statearr_27578[(9)] = inst_27517__$1);

(statearr_27578[(10)] = inst_27519__$1);

(statearr_27578[(14)] = inst_27526);

(statearr_27578[(12)] = inst_27516__$1);

return statearr_27578;
})();
var statearr_27579_27611 = state_27564__$1;
(statearr_27579_27611[(2)] = null);

(statearr_27579_27611[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (22))){
var state_27564__$1 = state_27564;
var statearr_27580_27612 = state_27564__$1;
(statearr_27580_27612[(2)] = null);

(statearr_27580_27612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (6))){
var inst_27505 = (state_27564[(13)]);
var inst_27514 = f.call(null,inst_27505);
var inst_27515 = cljs.core.seq.call(null,inst_27514);
var inst_27516 = inst_27515;
var inst_27517 = null;
var inst_27518 = (0);
var inst_27519 = (0);
var state_27564__$1 = (function (){var statearr_27581 = state_27564;
(statearr_27581[(8)] = inst_27518);

(statearr_27581[(9)] = inst_27517);

(statearr_27581[(10)] = inst_27519);

(statearr_27581[(12)] = inst_27516);

return statearr_27581;
})();
var statearr_27582_27613 = state_27564__$1;
(statearr_27582_27613[(2)] = null);

(statearr_27582_27613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (17))){
var inst_27530 = (state_27564[(7)]);
var inst_27534 = cljs.core.chunk_first.call(null,inst_27530);
var inst_27535 = cljs.core.chunk_rest.call(null,inst_27530);
var inst_27536 = cljs.core.count.call(null,inst_27534);
var inst_27516 = inst_27535;
var inst_27517 = inst_27534;
var inst_27518 = inst_27536;
var inst_27519 = (0);
var state_27564__$1 = (function (){var statearr_27583 = state_27564;
(statearr_27583[(8)] = inst_27518);

(statearr_27583[(9)] = inst_27517);

(statearr_27583[(10)] = inst_27519);

(statearr_27583[(12)] = inst_27516);

return statearr_27583;
})();
var statearr_27584_27614 = state_27564__$1;
(statearr_27584_27614[(2)] = null);

(statearr_27584_27614[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (3))){
var inst_27562 = (state_27564[(2)]);
var state_27564__$1 = state_27564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27564__$1,inst_27562);
} else {
if((state_val_27565 === (12))){
var inst_27550 = (state_27564[(2)]);
var state_27564__$1 = state_27564;
var statearr_27585_27615 = state_27564__$1;
(statearr_27585_27615[(2)] = inst_27550);

(statearr_27585_27615[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (2))){
var state_27564__$1 = state_27564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27564__$1,(4),in$);
} else {
if((state_val_27565 === (23))){
var inst_27558 = (state_27564[(2)]);
var state_27564__$1 = state_27564;
var statearr_27586_27616 = state_27564__$1;
(statearr_27586_27616[(2)] = inst_27558);

(statearr_27586_27616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (19))){
var inst_27545 = (state_27564[(2)]);
var state_27564__$1 = state_27564;
var statearr_27587_27617 = state_27564__$1;
(statearr_27587_27617[(2)] = inst_27545);

(statearr_27587_27617[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (11))){
var inst_27530 = (state_27564[(7)]);
var inst_27516 = (state_27564[(12)]);
var inst_27530__$1 = cljs.core.seq.call(null,inst_27516);
var state_27564__$1 = (function (){var statearr_27588 = state_27564;
(statearr_27588[(7)] = inst_27530__$1);

return statearr_27588;
})();
if(inst_27530__$1){
var statearr_27589_27618 = state_27564__$1;
(statearr_27589_27618[(1)] = (14));

} else {
var statearr_27590_27619 = state_27564__$1;
(statearr_27590_27619[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (9))){
var inst_27552 = (state_27564[(2)]);
var inst_27553 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27564__$1 = (function (){var statearr_27591 = state_27564;
(statearr_27591[(15)] = inst_27552);

return statearr_27591;
})();
if(cljs.core.truth_(inst_27553)){
var statearr_27592_27620 = state_27564__$1;
(statearr_27592_27620[(1)] = (21));

} else {
var statearr_27593_27621 = state_27564__$1;
(statearr_27593_27621[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (5))){
var inst_27508 = cljs.core.async.close_BANG_.call(null,out);
var state_27564__$1 = state_27564;
var statearr_27594_27622 = state_27564__$1;
(statearr_27594_27622[(2)] = inst_27508);

(statearr_27594_27622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (14))){
var inst_27530 = (state_27564[(7)]);
var inst_27532 = cljs.core.chunked_seq_QMARK_.call(null,inst_27530);
var state_27564__$1 = state_27564;
if(inst_27532){
var statearr_27595_27623 = state_27564__$1;
(statearr_27595_27623[(1)] = (17));

} else {
var statearr_27596_27624 = state_27564__$1;
(statearr_27596_27624[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (16))){
var inst_27548 = (state_27564[(2)]);
var state_27564__$1 = state_27564;
var statearr_27597_27625 = state_27564__$1;
(statearr_27597_27625[(2)] = inst_27548);

(statearr_27597_27625[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27565 === (10))){
var inst_27517 = (state_27564[(9)]);
var inst_27519 = (state_27564[(10)]);
var inst_27524 = cljs.core._nth.call(null,inst_27517,inst_27519);
var state_27564__$1 = state_27564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27564__$1,(13),out,inst_27524);
} else {
if((state_val_27565 === (18))){
var inst_27530 = (state_27564[(7)]);
var inst_27539 = cljs.core.first.call(null,inst_27530);
var state_27564__$1 = state_27564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27564__$1,(20),out,inst_27539);
} else {
if((state_val_27565 === (8))){
var inst_27518 = (state_27564[(8)]);
var inst_27519 = (state_27564[(10)]);
var inst_27521 = (inst_27519 < inst_27518);
var inst_27522 = inst_27521;
var state_27564__$1 = state_27564;
if(cljs.core.truth_(inst_27522)){
var statearr_27598_27626 = state_27564__$1;
(statearr_27598_27626[(1)] = (10));

} else {
var statearr_27599_27627 = state_27564__$1;
(statearr_27599_27627[(1)] = (11));

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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25842__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25842__auto____0 = (function (){
var statearr_27600 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27600[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25842__auto__);

(statearr_27600[(1)] = (1));

return statearr_27600;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25842__auto____1 = (function (state_27564){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_27564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e27601){if((e27601 instanceof Object)){
var ex__25845__auto__ = e27601;
var statearr_27602_27628 = state_27564;
(statearr_27602_27628[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27601;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27629 = state_27564;
state_27564 = G__27629;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25842__auto__ = function(state_27564){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25842__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25842__auto____1.call(this,state_27564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25842__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25842__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_27603 = f__25937__auto__.call(null);
(statearr_27603[(6)] = c__25936__auto__);

return statearr_27603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));

return c__25936__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__27631 = arguments.length;
switch (G__27631) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__27634 = arguments.length;
switch (G__27634) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__27637 = arguments.length;
switch (G__27637) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25936__auto___27684 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_27661){
var state_val_27662 = (state_27661[(1)]);
if((state_val_27662 === (7))){
var inst_27656 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
var statearr_27663_27685 = state_27661__$1;
(statearr_27663_27685[(2)] = inst_27656);

(statearr_27663_27685[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (1))){
var inst_27638 = null;
var state_27661__$1 = (function (){var statearr_27664 = state_27661;
(statearr_27664[(7)] = inst_27638);

return statearr_27664;
})();
var statearr_27665_27686 = state_27661__$1;
(statearr_27665_27686[(2)] = null);

(statearr_27665_27686[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (4))){
var inst_27641 = (state_27661[(8)]);
var inst_27641__$1 = (state_27661[(2)]);
var inst_27642 = (inst_27641__$1 == null);
var inst_27643 = cljs.core.not.call(null,inst_27642);
var state_27661__$1 = (function (){var statearr_27666 = state_27661;
(statearr_27666[(8)] = inst_27641__$1);

return statearr_27666;
})();
if(inst_27643){
var statearr_27667_27687 = state_27661__$1;
(statearr_27667_27687[(1)] = (5));

} else {
var statearr_27668_27688 = state_27661__$1;
(statearr_27668_27688[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (6))){
var state_27661__$1 = state_27661;
var statearr_27669_27689 = state_27661__$1;
(statearr_27669_27689[(2)] = null);

(statearr_27669_27689[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (3))){
var inst_27658 = (state_27661[(2)]);
var inst_27659 = cljs.core.async.close_BANG_.call(null,out);
var state_27661__$1 = (function (){var statearr_27670 = state_27661;
(statearr_27670[(9)] = inst_27658);

return statearr_27670;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27661__$1,inst_27659);
} else {
if((state_val_27662 === (2))){
var state_27661__$1 = state_27661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27661__$1,(4),ch);
} else {
if((state_val_27662 === (11))){
var inst_27641 = (state_27661[(8)]);
var inst_27650 = (state_27661[(2)]);
var inst_27638 = inst_27641;
var state_27661__$1 = (function (){var statearr_27671 = state_27661;
(statearr_27671[(10)] = inst_27650);

(statearr_27671[(7)] = inst_27638);

return statearr_27671;
})();
var statearr_27672_27690 = state_27661__$1;
(statearr_27672_27690[(2)] = null);

(statearr_27672_27690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (9))){
var inst_27641 = (state_27661[(8)]);
var state_27661__$1 = state_27661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27661__$1,(11),out,inst_27641);
} else {
if((state_val_27662 === (5))){
var inst_27641 = (state_27661[(8)]);
var inst_27638 = (state_27661[(7)]);
var inst_27645 = cljs.core._EQ_.call(null,inst_27641,inst_27638);
var state_27661__$1 = state_27661;
if(inst_27645){
var statearr_27674_27691 = state_27661__$1;
(statearr_27674_27691[(1)] = (8));

} else {
var statearr_27675_27692 = state_27661__$1;
(statearr_27675_27692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (10))){
var inst_27653 = (state_27661[(2)]);
var state_27661__$1 = state_27661;
var statearr_27676_27693 = state_27661__$1;
(statearr_27676_27693[(2)] = inst_27653);

(statearr_27676_27693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27662 === (8))){
var inst_27638 = (state_27661[(7)]);
var tmp27673 = inst_27638;
var inst_27638__$1 = tmp27673;
var state_27661__$1 = (function (){var statearr_27677 = state_27661;
(statearr_27677[(7)] = inst_27638__$1);

return statearr_27677;
})();
var statearr_27678_27694 = state_27661__$1;
(statearr_27678_27694[(2)] = null);

(statearr_27678_27694[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__25842__auto__ = null;
var cljs$core$async$state_machine__25842__auto____0 = (function (){
var statearr_27679 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27679[(0)] = cljs$core$async$state_machine__25842__auto__);

(statearr_27679[(1)] = (1));

return statearr_27679;
});
var cljs$core$async$state_machine__25842__auto____1 = (function (state_27661){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_27661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e27680){if((e27680 instanceof Object)){
var ex__25845__auto__ = e27680;
var statearr_27681_27695 = state_27661;
(statearr_27681_27695[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27680;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27696 = state_27661;
state_27661 = G__27696;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
cljs$core$async$state_machine__25842__auto__ = function(state_27661){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25842__auto____1.call(this,state_27661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25842__auto____0;
cljs$core$async$state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25842__auto____1;
return cljs$core$async$state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_27682 = f__25937__auto__.call(null);
(statearr_27682[(6)] = c__25936__auto___27684);

return statearr_27682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27698 = arguments.length;
switch (G__27698) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25936__auto___27764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_27736){
var state_val_27737 = (state_27736[(1)]);
if((state_val_27737 === (7))){
var inst_27732 = (state_27736[(2)]);
var state_27736__$1 = state_27736;
var statearr_27738_27765 = state_27736__$1;
(statearr_27738_27765[(2)] = inst_27732);

(statearr_27738_27765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (1))){
var inst_27699 = (new Array(n));
var inst_27700 = inst_27699;
var inst_27701 = (0);
var state_27736__$1 = (function (){var statearr_27739 = state_27736;
(statearr_27739[(7)] = inst_27701);

(statearr_27739[(8)] = inst_27700);

return statearr_27739;
})();
var statearr_27740_27766 = state_27736__$1;
(statearr_27740_27766[(2)] = null);

(statearr_27740_27766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (4))){
var inst_27704 = (state_27736[(9)]);
var inst_27704__$1 = (state_27736[(2)]);
var inst_27705 = (inst_27704__$1 == null);
var inst_27706 = cljs.core.not.call(null,inst_27705);
var state_27736__$1 = (function (){var statearr_27741 = state_27736;
(statearr_27741[(9)] = inst_27704__$1);

return statearr_27741;
})();
if(inst_27706){
var statearr_27742_27767 = state_27736__$1;
(statearr_27742_27767[(1)] = (5));

} else {
var statearr_27743_27768 = state_27736__$1;
(statearr_27743_27768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (15))){
var inst_27726 = (state_27736[(2)]);
var state_27736__$1 = state_27736;
var statearr_27744_27769 = state_27736__$1;
(statearr_27744_27769[(2)] = inst_27726);

(statearr_27744_27769[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (13))){
var state_27736__$1 = state_27736;
var statearr_27745_27770 = state_27736__$1;
(statearr_27745_27770[(2)] = null);

(statearr_27745_27770[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (6))){
var inst_27701 = (state_27736[(7)]);
var inst_27722 = (inst_27701 > (0));
var state_27736__$1 = state_27736;
if(cljs.core.truth_(inst_27722)){
var statearr_27746_27771 = state_27736__$1;
(statearr_27746_27771[(1)] = (12));

} else {
var statearr_27747_27772 = state_27736__$1;
(statearr_27747_27772[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (3))){
var inst_27734 = (state_27736[(2)]);
var state_27736__$1 = state_27736;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27736__$1,inst_27734);
} else {
if((state_val_27737 === (12))){
var inst_27700 = (state_27736[(8)]);
var inst_27724 = cljs.core.vec.call(null,inst_27700);
var state_27736__$1 = state_27736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27736__$1,(15),out,inst_27724);
} else {
if((state_val_27737 === (2))){
var state_27736__$1 = state_27736;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27736__$1,(4),ch);
} else {
if((state_val_27737 === (11))){
var inst_27716 = (state_27736[(2)]);
var inst_27717 = (new Array(n));
var inst_27700 = inst_27717;
var inst_27701 = (0);
var state_27736__$1 = (function (){var statearr_27748 = state_27736;
(statearr_27748[(7)] = inst_27701);

(statearr_27748[(8)] = inst_27700);

(statearr_27748[(10)] = inst_27716);

return statearr_27748;
})();
var statearr_27749_27773 = state_27736__$1;
(statearr_27749_27773[(2)] = null);

(statearr_27749_27773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (9))){
var inst_27700 = (state_27736[(8)]);
var inst_27714 = cljs.core.vec.call(null,inst_27700);
var state_27736__$1 = state_27736;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27736__$1,(11),out,inst_27714);
} else {
if((state_val_27737 === (5))){
var inst_27701 = (state_27736[(7)]);
var inst_27704 = (state_27736[(9)]);
var inst_27700 = (state_27736[(8)]);
var inst_27709 = (state_27736[(11)]);
var inst_27708 = (inst_27700[inst_27701] = inst_27704);
var inst_27709__$1 = (inst_27701 + (1));
var inst_27710 = (inst_27709__$1 < n);
var state_27736__$1 = (function (){var statearr_27750 = state_27736;
(statearr_27750[(12)] = inst_27708);

(statearr_27750[(11)] = inst_27709__$1);

return statearr_27750;
})();
if(cljs.core.truth_(inst_27710)){
var statearr_27751_27774 = state_27736__$1;
(statearr_27751_27774[(1)] = (8));

} else {
var statearr_27752_27775 = state_27736__$1;
(statearr_27752_27775[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (14))){
var inst_27729 = (state_27736[(2)]);
var inst_27730 = cljs.core.async.close_BANG_.call(null,out);
var state_27736__$1 = (function (){var statearr_27754 = state_27736;
(statearr_27754[(13)] = inst_27729);

return statearr_27754;
})();
var statearr_27755_27776 = state_27736__$1;
(statearr_27755_27776[(2)] = inst_27730);

(statearr_27755_27776[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (10))){
var inst_27720 = (state_27736[(2)]);
var state_27736__$1 = state_27736;
var statearr_27756_27777 = state_27736__$1;
(statearr_27756_27777[(2)] = inst_27720);

(statearr_27756_27777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27737 === (8))){
var inst_27700 = (state_27736[(8)]);
var inst_27709 = (state_27736[(11)]);
var tmp27753 = inst_27700;
var inst_27700__$1 = tmp27753;
var inst_27701 = inst_27709;
var state_27736__$1 = (function (){var statearr_27757 = state_27736;
(statearr_27757[(7)] = inst_27701);

(statearr_27757[(8)] = inst_27700__$1);

return statearr_27757;
})();
var statearr_27758_27778 = state_27736__$1;
(statearr_27758_27778[(2)] = null);

(statearr_27758_27778[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__25842__auto__ = null;
var cljs$core$async$state_machine__25842__auto____0 = (function (){
var statearr_27759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27759[(0)] = cljs$core$async$state_machine__25842__auto__);

(statearr_27759[(1)] = (1));

return statearr_27759;
});
var cljs$core$async$state_machine__25842__auto____1 = (function (state_27736){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_27736);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e27760){if((e27760 instanceof Object)){
var ex__25845__auto__ = e27760;
var statearr_27761_27779 = state_27736;
(statearr_27761_27779[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27780 = state_27736;
state_27736 = G__27780;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
cljs$core$async$state_machine__25842__auto__ = function(state_27736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25842__auto____1.call(this,state_27736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25842__auto____0;
cljs$core$async$state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25842__auto____1;
return cljs$core$async$state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_27762 = f__25937__auto__.call(null);
(statearr_27762[(6)] = c__25936__auto___27764);

return statearr_27762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27782 = arguments.length;
switch (G__27782) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__25936__auto___27852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_27824){
var state_val_27825 = (state_27824[(1)]);
if((state_val_27825 === (7))){
var inst_27820 = (state_27824[(2)]);
var state_27824__$1 = state_27824;
var statearr_27826_27853 = state_27824__$1;
(statearr_27826_27853[(2)] = inst_27820);

(statearr_27826_27853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (1))){
var inst_27783 = [];
var inst_27784 = inst_27783;
var inst_27785 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27824__$1 = (function (){var statearr_27827 = state_27824;
(statearr_27827[(7)] = inst_27785);

(statearr_27827[(8)] = inst_27784);

return statearr_27827;
})();
var statearr_27828_27854 = state_27824__$1;
(statearr_27828_27854[(2)] = null);

(statearr_27828_27854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (4))){
var inst_27788 = (state_27824[(9)]);
var inst_27788__$1 = (state_27824[(2)]);
var inst_27789 = (inst_27788__$1 == null);
var inst_27790 = cljs.core.not.call(null,inst_27789);
var state_27824__$1 = (function (){var statearr_27829 = state_27824;
(statearr_27829[(9)] = inst_27788__$1);

return statearr_27829;
})();
if(inst_27790){
var statearr_27830_27855 = state_27824__$1;
(statearr_27830_27855[(1)] = (5));

} else {
var statearr_27831_27856 = state_27824__$1;
(statearr_27831_27856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (15))){
var inst_27814 = (state_27824[(2)]);
var state_27824__$1 = state_27824;
var statearr_27832_27857 = state_27824__$1;
(statearr_27832_27857[(2)] = inst_27814);

(statearr_27832_27857[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (13))){
var state_27824__$1 = state_27824;
var statearr_27833_27858 = state_27824__$1;
(statearr_27833_27858[(2)] = null);

(statearr_27833_27858[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (6))){
var inst_27784 = (state_27824[(8)]);
var inst_27809 = inst_27784.length;
var inst_27810 = (inst_27809 > (0));
var state_27824__$1 = state_27824;
if(cljs.core.truth_(inst_27810)){
var statearr_27834_27859 = state_27824__$1;
(statearr_27834_27859[(1)] = (12));

} else {
var statearr_27835_27860 = state_27824__$1;
(statearr_27835_27860[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (3))){
var inst_27822 = (state_27824[(2)]);
var state_27824__$1 = state_27824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27824__$1,inst_27822);
} else {
if((state_val_27825 === (12))){
var inst_27784 = (state_27824[(8)]);
var inst_27812 = cljs.core.vec.call(null,inst_27784);
var state_27824__$1 = state_27824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27824__$1,(15),out,inst_27812);
} else {
if((state_val_27825 === (2))){
var state_27824__$1 = state_27824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27824__$1,(4),ch);
} else {
if((state_val_27825 === (11))){
var inst_27792 = (state_27824[(10)]);
var inst_27788 = (state_27824[(9)]);
var inst_27802 = (state_27824[(2)]);
var inst_27803 = [];
var inst_27804 = inst_27803.push(inst_27788);
var inst_27784 = inst_27803;
var inst_27785 = inst_27792;
var state_27824__$1 = (function (){var statearr_27836 = state_27824;
(statearr_27836[(11)] = inst_27804);

(statearr_27836[(12)] = inst_27802);

(statearr_27836[(7)] = inst_27785);

(statearr_27836[(8)] = inst_27784);

return statearr_27836;
})();
var statearr_27837_27861 = state_27824__$1;
(statearr_27837_27861[(2)] = null);

(statearr_27837_27861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (9))){
var inst_27784 = (state_27824[(8)]);
var inst_27800 = cljs.core.vec.call(null,inst_27784);
var state_27824__$1 = state_27824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27824__$1,(11),out,inst_27800);
} else {
if((state_val_27825 === (5))){
var inst_27785 = (state_27824[(7)]);
var inst_27792 = (state_27824[(10)]);
var inst_27788 = (state_27824[(9)]);
var inst_27792__$1 = f.call(null,inst_27788);
var inst_27793 = cljs.core._EQ_.call(null,inst_27792__$1,inst_27785);
var inst_27794 = cljs.core.keyword_identical_QMARK_.call(null,inst_27785,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27795 = ((inst_27793) || (inst_27794));
var state_27824__$1 = (function (){var statearr_27838 = state_27824;
(statearr_27838[(10)] = inst_27792__$1);

return statearr_27838;
})();
if(cljs.core.truth_(inst_27795)){
var statearr_27839_27862 = state_27824__$1;
(statearr_27839_27862[(1)] = (8));

} else {
var statearr_27840_27863 = state_27824__$1;
(statearr_27840_27863[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (14))){
var inst_27817 = (state_27824[(2)]);
var inst_27818 = cljs.core.async.close_BANG_.call(null,out);
var state_27824__$1 = (function (){var statearr_27842 = state_27824;
(statearr_27842[(13)] = inst_27817);

return statearr_27842;
})();
var statearr_27843_27864 = state_27824__$1;
(statearr_27843_27864[(2)] = inst_27818);

(statearr_27843_27864[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (10))){
var inst_27807 = (state_27824[(2)]);
var state_27824__$1 = state_27824;
var statearr_27844_27865 = state_27824__$1;
(statearr_27844_27865[(2)] = inst_27807);

(statearr_27844_27865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27825 === (8))){
var inst_27792 = (state_27824[(10)]);
var inst_27784 = (state_27824[(8)]);
var inst_27788 = (state_27824[(9)]);
var inst_27797 = inst_27784.push(inst_27788);
var tmp27841 = inst_27784;
var inst_27784__$1 = tmp27841;
var inst_27785 = inst_27792;
var state_27824__$1 = (function (){var statearr_27845 = state_27824;
(statearr_27845[(7)] = inst_27785);

(statearr_27845[(14)] = inst_27797);

(statearr_27845[(8)] = inst_27784__$1);

return statearr_27845;
})();
var statearr_27846_27866 = state_27824__$1;
(statearr_27846_27866[(2)] = null);

(statearr_27846_27866[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__25842__auto__ = null;
var cljs$core$async$state_machine__25842__auto____0 = (function (){
var statearr_27847 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27847[(0)] = cljs$core$async$state_machine__25842__auto__);

(statearr_27847[(1)] = (1));

return statearr_27847;
});
var cljs$core$async$state_machine__25842__auto____1 = (function (state_27824){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_27824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e27848){if((e27848 instanceof Object)){
var ex__25845__auto__ = e27848;
var statearr_27849_27867 = state_27824;
(statearr_27849_27867[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27848;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27868 = state_27824;
state_27824 = G__27868;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
cljs$core$async$state_machine__25842__auto__ = function(state_27824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25842__auto____1.call(this,state_27824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25842__auto____0;
cljs$core$async$state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25842__auto____1;
return cljs$core$async$state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_27850 = f__25937__auto__.call(null);
(statearr_27850[(6)] = c__25936__auto___27852);

return statearr_27850;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1614970914599
