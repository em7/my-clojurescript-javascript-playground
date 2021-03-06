// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29677){
var map__29678 = p__29677;
var map__29678__$1 = (((((!((map__29678 == null))))?(((((map__29678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29678):map__29678);
var m = map__29678__$1;
var n = cljs.core.get.call(null,map__29678__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29678__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29680_29712 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29681_29713 = null;
var count__29682_29714 = (0);
var i__29683_29715 = (0);
while(true){
if((i__29683_29715 < count__29682_29714)){
var f_29716 = cljs.core._nth.call(null,chunk__29681_29713,i__29683_29715);
cljs.core.println.call(null,"  ",f_29716);


var G__29717 = seq__29680_29712;
var G__29718 = chunk__29681_29713;
var G__29719 = count__29682_29714;
var G__29720 = (i__29683_29715 + (1));
seq__29680_29712 = G__29717;
chunk__29681_29713 = G__29718;
count__29682_29714 = G__29719;
i__29683_29715 = G__29720;
continue;
} else {
var temp__5720__auto___29721 = cljs.core.seq.call(null,seq__29680_29712);
if(temp__5720__auto___29721){
var seq__29680_29722__$1 = temp__5720__auto___29721;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29680_29722__$1)){
var c__4556__auto___29723 = cljs.core.chunk_first.call(null,seq__29680_29722__$1);
var G__29724 = cljs.core.chunk_rest.call(null,seq__29680_29722__$1);
var G__29725 = c__4556__auto___29723;
var G__29726 = cljs.core.count.call(null,c__4556__auto___29723);
var G__29727 = (0);
seq__29680_29712 = G__29724;
chunk__29681_29713 = G__29725;
count__29682_29714 = G__29726;
i__29683_29715 = G__29727;
continue;
} else {
var f_29728 = cljs.core.first.call(null,seq__29680_29722__$1);
cljs.core.println.call(null,"  ",f_29728);


var G__29729 = cljs.core.next.call(null,seq__29680_29722__$1);
var G__29730 = null;
var G__29731 = (0);
var G__29732 = (0);
seq__29680_29712 = G__29729;
chunk__29681_29713 = G__29730;
count__29682_29714 = G__29731;
i__29683_29715 = G__29732;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29733 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29733);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29733)))?cljs.core.second.call(null,arglists_29733):arglists_29733));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29684_29734 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29685_29735 = null;
var count__29686_29736 = (0);
var i__29687_29737 = (0);
while(true){
if((i__29687_29737 < count__29686_29736)){
var vec__29698_29738 = cljs.core._nth.call(null,chunk__29685_29735,i__29687_29737);
var name_29739 = cljs.core.nth.call(null,vec__29698_29738,(0),null);
var map__29701_29740 = cljs.core.nth.call(null,vec__29698_29738,(1),null);
var map__29701_29741__$1 = (((((!((map__29701_29740 == null))))?(((((map__29701_29740.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29701_29740.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29701_29740):map__29701_29740);
var doc_29742 = cljs.core.get.call(null,map__29701_29741__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29743 = cljs.core.get.call(null,map__29701_29741__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29739);

cljs.core.println.call(null," ",arglists_29743);

if(cljs.core.truth_(doc_29742)){
cljs.core.println.call(null," ",doc_29742);
} else {
}


var G__29744 = seq__29684_29734;
var G__29745 = chunk__29685_29735;
var G__29746 = count__29686_29736;
var G__29747 = (i__29687_29737 + (1));
seq__29684_29734 = G__29744;
chunk__29685_29735 = G__29745;
count__29686_29736 = G__29746;
i__29687_29737 = G__29747;
continue;
} else {
var temp__5720__auto___29748 = cljs.core.seq.call(null,seq__29684_29734);
if(temp__5720__auto___29748){
var seq__29684_29749__$1 = temp__5720__auto___29748;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29684_29749__$1)){
var c__4556__auto___29750 = cljs.core.chunk_first.call(null,seq__29684_29749__$1);
var G__29751 = cljs.core.chunk_rest.call(null,seq__29684_29749__$1);
var G__29752 = c__4556__auto___29750;
var G__29753 = cljs.core.count.call(null,c__4556__auto___29750);
var G__29754 = (0);
seq__29684_29734 = G__29751;
chunk__29685_29735 = G__29752;
count__29686_29736 = G__29753;
i__29687_29737 = G__29754;
continue;
} else {
var vec__29703_29755 = cljs.core.first.call(null,seq__29684_29749__$1);
var name_29756 = cljs.core.nth.call(null,vec__29703_29755,(0),null);
var map__29706_29757 = cljs.core.nth.call(null,vec__29703_29755,(1),null);
var map__29706_29758__$1 = (((((!((map__29706_29757 == null))))?(((((map__29706_29757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29706_29757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29706_29757):map__29706_29757);
var doc_29759 = cljs.core.get.call(null,map__29706_29758__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29760 = cljs.core.get.call(null,map__29706_29758__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29756);

cljs.core.println.call(null," ",arglists_29760);

if(cljs.core.truth_(doc_29759)){
cljs.core.println.call(null," ",doc_29759);
} else {
}


var G__29761 = cljs.core.next.call(null,seq__29684_29749__$1);
var G__29762 = null;
var G__29763 = (0);
var G__29764 = (0);
seq__29684_29734 = G__29761;
chunk__29685_29735 = G__29762;
count__29686_29736 = G__29763;
i__29687_29737 = G__29764;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__29708 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29709 = null;
var count__29710 = (0);
var i__29711 = (0);
while(true){
if((i__29711 < count__29710)){
var role = cljs.core._nth.call(null,chunk__29709,i__29711);
var temp__5720__auto___29765__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___29765__$1)){
var spec_29766 = temp__5720__auto___29765__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29766));
} else {
}


var G__29767 = seq__29708;
var G__29768 = chunk__29709;
var G__29769 = count__29710;
var G__29770 = (i__29711 + (1));
seq__29708 = G__29767;
chunk__29709 = G__29768;
count__29710 = G__29769;
i__29711 = G__29770;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__29708);
if(temp__5720__auto____$1){
var seq__29708__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29708__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29708__$1);
var G__29771 = cljs.core.chunk_rest.call(null,seq__29708__$1);
var G__29772 = c__4556__auto__;
var G__29773 = cljs.core.count.call(null,c__4556__auto__);
var G__29774 = (0);
seq__29708 = G__29771;
chunk__29709 = G__29772;
count__29710 = G__29773;
i__29711 = G__29774;
continue;
} else {
var role = cljs.core.first.call(null,seq__29708__$1);
var temp__5720__auto___29775__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___29775__$2)){
var spec_29776 = temp__5720__auto___29775__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29776));
} else {
}


var G__29777 = cljs.core.next.call(null,seq__29708__$1);
var G__29778 = null;
var G__29779 = (0);
var G__29780 = (0);
seq__29708 = G__29777;
chunk__29709 = G__29778;
count__29710 = G__29779;
i__29711 = G__29780;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5720__auto__)){
var ed = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__29781 = cljs.core.conj.call(null,via,t);
var G__29782 = cljs.core.ex_cause.call(null,t);
via = G__29781;
t = G__29782;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5720__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var root_msg = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5720__auto__)){
var data = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5720__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5720__auto__)){
var phase = temp__5720__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__29785 = datafied_throwable;
var map__29785__$1 = (((((!((map__29785 == null))))?(((((map__29785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29785):map__29785);
var via = cljs.core.get.call(null,map__29785__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__29785__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__29785__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29786 = cljs.core.last.call(null,via);
var map__29786__$1 = (((((!((map__29786 == null))))?(((((map__29786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29786):map__29786);
var type = cljs.core.get.call(null,map__29786__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__29786__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__29786__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29787 = data;
var map__29787__$1 = (((((!((map__29787 == null))))?(((((map__29787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29787):map__29787);
var problems = cljs.core.get.call(null,map__29787__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__29787__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__29787__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29788 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__29788__$1 = (((((!((map__29788 == null))))?(((((map__29788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29788):map__29788);
var top_data = map__29788__$1;
var source = cljs.core.get.call(null,map__29788__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__29793 = phase;
var G__29793__$1 = (((G__29793 instanceof cljs.core.Keyword))?G__29793.fqn:null);
switch (G__29793__$1) {
case "read-source":
var map__29794 = data;
var map__29794__$1 = (((((!((map__29794 == null))))?(((((map__29794.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29794.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29794):map__29794);
var line = cljs.core.get.call(null,map__29794__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29794__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29796 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__29796__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29796,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29796);
var G__29796__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29796__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29796__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29796__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29796__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29797 = top_data;
var G__29797__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29797,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29797);
var G__29797__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29797__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29797__$1);
var G__29797__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29797__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29797__$2);
var G__29797__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29797__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29797__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29797__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29797__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29798 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29798,(0),null);
var method = cljs.core.nth.call(null,vec__29798,(1),null);
var file = cljs.core.nth.call(null,vec__29798,(2),null);
var line = cljs.core.nth.call(null,vec__29798,(3),null);
var G__29801 = top_data;
var G__29801__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__29801,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29801);
var G__29801__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__29801__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29801__$1);
var G__29801__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__29801__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29801__$2);
var G__29801__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29801__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29801__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29801__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29801__$4;
}

break;
case "execution":
var vec__29802 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29802,(0),null);
var method = cljs.core.nth.call(null,vec__29802,(1),null);
var file = cljs.core.nth.call(null,vec__29802,(2),null);
var line = cljs.core.nth.call(null,vec__29802,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__29784_SHARP_){
var or__4126__auto__ = (p1__29784_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__29784_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__29805 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29805__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__29805,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29805);
var G__29805__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29805__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29805__$1);
var G__29805__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__29805__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29805__$2);
var G__29805__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__29805__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29805__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29805__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29805__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29793__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29809){
var map__29810 = p__29809;
var map__29810__$1 = (((((!((map__29810 == null))))?(((((map__29810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29810):map__29810);
var triage_data = map__29810__$1;
var phase = cljs.core.get.call(null,map__29810__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__29810__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__29810__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29810__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__29810__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__29810__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__29810__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__29810__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__29812 = phase;
var G__29812__$1 = (((G__29812 instanceof cljs.core.Keyword))?G__29812.fqn:null);
switch (G__29812__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29813_29822 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29814_29823 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29815_29824 = true;
var _STAR_print_fn_STAR__temp_val__29816_29825 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29815_29824);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29816_29825);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__29807_SHARP_){
return cljs.core.dissoc.call(null,p1__29807_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29814_29823);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29813_29822);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29817_29826 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29818_29827 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29819_29828 = true;
var _STAR_print_fn_STAR__temp_val__29820_29829 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29819_29828);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29820_29829);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__29808_SHARP_){
return cljs.core.dissoc.call(null,p1__29808_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29818_29827);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29817_29826);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29812__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1614970915669
