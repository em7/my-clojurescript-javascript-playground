// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__21291__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__21291__auto__["add"]).call(o__21291__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__21291__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__21291__auto__["delete"]).call(o__21291__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__21291__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__21291__auto__["has"]).call(o__21291__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
return true;
} else {
return cljs.core.some.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__23904 = data;
var target__21296__auto__ = G__23904;
if(cljs.core.truth_(target__21296__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23904)].join(''),"\n","target__21296__auto__"].join('')));
}

(target__21296__auto__["config"] = devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__23904;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_23909 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_23909);
} else {
var seq__23905_23910 = cljs.core.seq.call(null,json_ml);
var chunk__23906_23911 = null;
var count__23907_23912 = (0);
var i__23908_23913 = (0);
while(true){
if((i__23908_23913 < count__23907_23912)){
var item_23914 = cljs.core._nth.call(null,chunk__23906_23911,i__23908_23913);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_23914,new_depth_budget_23909);


var G__23915 = seq__23905_23910;
var G__23916 = chunk__23906_23911;
var G__23917 = count__23907_23912;
var G__23918 = (i__23908_23913 + (1));
seq__23905_23910 = G__23915;
chunk__23906_23911 = G__23916;
count__23907_23912 = G__23917;
i__23908_23913 = G__23918;
continue;
} else {
var temp__5720__auto___23919 = cljs.core.seq.call(null,seq__23905_23910);
if(temp__5720__auto___23919){
var seq__23905_23920__$1 = temp__5720__auto___23919;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23905_23920__$1)){
var c__4556__auto___23921 = cljs.core.chunk_first.call(null,seq__23905_23920__$1);
var G__23922 = cljs.core.chunk_rest.call(null,seq__23905_23920__$1);
var G__23923 = c__4556__auto___23921;
var G__23924 = cljs.core.count.call(null,c__4556__auto___23921);
var G__23925 = (0);
seq__23905_23910 = G__23922;
chunk__23906_23911 = G__23923;
count__23907_23912 = G__23924;
i__23908_23913 = G__23925;
continue;
} else {
var item_23926 = cljs.core.first.call(null,seq__23905_23920__$1);
devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_23926,new_depth_budget_23909);


var G__23927 = cljs.core.next.call(null,seq__23905_23920__$1);
var G__23928 = null;
var G__23929 = (0);
var G__23930 = (0);
seq__23905_23910 = G__23927;
chunk__23906_23911 = G__23928;
count__23907_23912 = G__23929;
i__23908_23913 = G__23930;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5718__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5718__auto__)){
var initial_hierarchy_depth_budget = temp__5718__auto__;
var remaining_depth_budget = (function (){var or__4126__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map?rel=1614970913003
