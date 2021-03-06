// Compiled by ClojureScript 1.10.773 {:target :nodejs}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__28061 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__28061 == null)){
return null;
} else {
return goog.object.get(G__28061,"requires");
}
}):(function (path){
var G__28062 = goog.object.get(goog.dependencies_.requires,path);
if((G__28062 == null)){
return null;
} else {
return goog.object.getKeys(G__28062);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28063_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28063_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__28064 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__28064__$1 = (((G__28064 == null))?null:goog.object.get(G__28064,"provides"));
if((G__28064__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__28064__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__28065 = cljs.core.seq.call(null,provides);
var chunk__28066 = null;
var count__28067 = (0);
var i__28068 = (0);
while(true){
if((i__28068 < count__28067)){
var prov = cljs.core._nth.call(null,chunk__28066,i__28068);
var seq__28077_28089 = cljs.core.seq.call(null,requires);
var chunk__28078_28090 = null;
var count__28079_28091 = (0);
var i__28080_28092 = (0);
while(true){
if((i__28080_28092 < count__28079_28091)){
var req_28093 = cljs.core._nth.call(null,chunk__28078_28090,i__28080_28092);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28093,prov);


var G__28094 = seq__28077_28089;
var G__28095 = chunk__28078_28090;
var G__28096 = count__28079_28091;
var G__28097 = (i__28080_28092 + (1));
seq__28077_28089 = G__28094;
chunk__28078_28090 = G__28095;
count__28079_28091 = G__28096;
i__28080_28092 = G__28097;
continue;
} else {
var temp__5720__auto___28098 = cljs.core.seq.call(null,seq__28077_28089);
if(temp__5720__auto___28098){
var seq__28077_28099__$1 = temp__5720__auto___28098;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28077_28099__$1)){
var c__4556__auto___28100 = cljs.core.chunk_first.call(null,seq__28077_28099__$1);
var G__28101 = cljs.core.chunk_rest.call(null,seq__28077_28099__$1);
var G__28102 = c__4556__auto___28100;
var G__28103 = cljs.core.count.call(null,c__4556__auto___28100);
var G__28104 = (0);
seq__28077_28089 = G__28101;
chunk__28078_28090 = G__28102;
count__28079_28091 = G__28103;
i__28080_28092 = G__28104;
continue;
} else {
var req_28105 = cljs.core.first.call(null,seq__28077_28099__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28105,prov);


var G__28106 = cljs.core.next.call(null,seq__28077_28099__$1);
var G__28107 = null;
var G__28108 = (0);
var G__28109 = (0);
seq__28077_28089 = G__28106;
chunk__28078_28090 = G__28107;
count__28079_28091 = G__28108;
i__28080_28092 = G__28109;
continue;
}
} else {
}
}
break;
}


var G__28110 = seq__28065;
var G__28111 = chunk__28066;
var G__28112 = count__28067;
var G__28113 = (i__28068 + (1));
seq__28065 = G__28110;
chunk__28066 = G__28111;
count__28067 = G__28112;
i__28068 = G__28113;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28065);
if(temp__5720__auto__){
var seq__28065__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28065__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28065__$1);
var G__28114 = cljs.core.chunk_rest.call(null,seq__28065__$1);
var G__28115 = c__4556__auto__;
var G__28116 = cljs.core.count.call(null,c__4556__auto__);
var G__28117 = (0);
seq__28065 = G__28114;
chunk__28066 = G__28115;
count__28067 = G__28116;
i__28068 = G__28117;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28065__$1);
var seq__28081_28118 = cljs.core.seq.call(null,requires);
var chunk__28082_28119 = null;
var count__28083_28120 = (0);
var i__28084_28121 = (0);
while(true){
if((i__28084_28121 < count__28083_28120)){
var req_28122 = cljs.core._nth.call(null,chunk__28082_28119,i__28084_28121);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28122,prov);


var G__28123 = seq__28081_28118;
var G__28124 = chunk__28082_28119;
var G__28125 = count__28083_28120;
var G__28126 = (i__28084_28121 + (1));
seq__28081_28118 = G__28123;
chunk__28082_28119 = G__28124;
count__28083_28120 = G__28125;
i__28084_28121 = G__28126;
continue;
} else {
var temp__5720__auto___28127__$1 = cljs.core.seq.call(null,seq__28081_28118);
if(temp__5720__auto___28127__$1){
var seq__28081_28128__$1 = temp__5720__auto___28127__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28081_28128__$1)){
var c__4556__auto___28129 = cljs.core.chunk_first.call(null,seq__28081_28128__$1);
var G__28130 = cljs.core.chunk_rest.call(null,seq__28081_28128__$1);
var G__28131 = c__4556__auto___28129;
var G__28132 = cljs.core.count.call(null,c__4556__auto___28129);
var G__28133 = (0);
seq__28081_28118 = G__28130;
chunk__28082_28119 = G__28131;
count__28083_28120 = G__28132;
i__28084_28121 = G__28133;
continue;
} else {
var req_28134 = cljs.core.first.call(null,seq__28081_28128__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28134,prov);


var G__28135 = cljs.core.next.call(null,seq__28081_28128__$1);
var G__28136 = null;
var G__28137 = (0);
var G__28138 = (0);
seq__28081_28118 = G__28135;
chunk__28082_28119 = G__28136;
count__28083_28120 = G__28137;
i__28084_28121 = G__28138;
continue;
}
} else {
}
}
break;
}


var G__28139 = cljs.core.next.call(null,seq__28065__$1);
var G__28140 = null;
var G__28141 = (0);
var G__28142 = (0);
seq__28065 = G__28139;
chunk__28066 = G__28140;
count__28067 = G__28141;
i__28068 = G__28142;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__28085 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__28086 = null;
var count__28087 = (0);
var i__28088 = (0);
while(true){
if((i__28088 < count__28087)){
var prov = cljs.core._nth.call(null,chunk__28086,i__28088);
goog.object.forEach(deps,((function (seq__28085,chunk__28086,count__28087,i__28088,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__28085,chunk__28086,count__28087,i__28088,prov,requires))
);


var G__28143 = seq__28085;
var G__28144 = chunk__28086;
var G__28145 = count__28087;
var G__28146 = (i__28088 + (1));
seq__28085 = G__28143;
chunk__28086 = G__28144;
count__28087 = G__28145;
i__28088 = G__28146;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28085);
if(temp__5720__auto__){
var seq__28085__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28085__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28085__$1);
var G__28147 = cljs.core.chunk_rest.call(null,seq__28085__$1);
var G__28148 = c__4556__auto__;
var G__28149 = cljs.core.count.call(null,c__4556__auto__);
var G__28150 = (0);
seq__28085 = G__28147;
chunk__28086 = G__28148;
count__28087 = G__28149;
i__28088 = G__28150;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28085__$1);
goog.object.forEach(deps,((function (seq__28085,chunk__28086,count__28087,i__28088,prov,seq__28085__$1,temp__5720__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__28085,chunk__28086,count__28087,i__28088,prov,seq__28085__$1,temp__5720__auto__,requires))
);


var G__28151 = cljs.core.next.call(null,seq__28085__$1);
var G__28152 = null;
var G__28153 = (0);
var G__28154 = (0);
seq__28085 = G__28151;
chunk__28086 = G__28152;
count__28087 = G__28153;
i__28088 = G__28154;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__28155){
var vec__28156 = p__28155;
var _ = cljs.core.nth.call(null,vec__28156,(0),null);
var v = cljs.core.nth.call(null,vec__28156,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__28159){
var vec__28160 = p__28159;
var k = cljs.core.nth.call(null,vec__28160,(0),null);
var v = cljs.core.nth.call(null,vec__28160,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28172_28180 = cljs.core.seq.call(null,deps);
var chunk__28173_28181 = null;
var count__28174_28182 = (0);
var i__28175_28183 = (0);
while(true){
if((i__28175_28183 < count__28174_28182)){
var dep_28184 = cljs.core._nth.call(null,chunk__28173_28181,i__28175_28183);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_28184;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28184));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28184,(depth + (1)),state);
} else {
}


var G__28185 = seq__28172_28180;
var G__28186 = chunk__28173_28181;
var G__28187 = count__28174_28182;
var G__28188 = (i__28175_28183 + (1));
seq__28172_28180 = G__28185;
chunk__28173_28181 = G__28186;
count__28174_28182 = G__28187;
i__28175_28183 = G__28188;
continue;
} else {
var temp__5720__auto___28189 = cljs.core.seq.call(null,seq__28172_28180);
if(temp__5720__auto___28189){
var seq__28172_28190__$1 = temp__5720__auto___28189;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28172_28190__$1)){
var c__4556__auto___28191 = cljs.core.chunk_first.call(null,seq__28172_28190__$1);
var G__28192 = cljs.core.chunk_rest.call(null,seq__28172_28190__$1);
var G__28193 = c__4556__auto___28191;
var G__28194 = cljs.core.count.call(null,c__4556__auto___28191);
var G__28195 = (0);
seq__28172_28180 = G__28192;
chunk__28173_28181 = G__28193;
count__28174_28182 = G__28194;
i__28175_28183 = G__28195;
continue;
} else {
var dep_28196 = cljs.core.first.call(null,seq__28172_28190__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_28196;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28196));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28196,(depth + (1)),state);
} else {
}


var G__28197 = cljs.core.next.call(null,seq__28172_28190__$1);
var G__28198 = null;
var G__28199 = (0);
var G__28200 = (0);
seq__28172_28180 = G__28197;
chunk__28173_28181 = G__28198;
count__28174_28182 = G__28199;
i__28175_28183 = G__28200;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28176){
var vec__28177 = p__28176;
var seq__28178 = cljs.core.seq.call(null,vec__28177);
var first__28179 = cljs.core.first.call(null,seq__28178);
var seq__28178__$1 = cljs.core.next.call(null,seq__28178);
var x = first__28179;
var xs = seq__28178__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__28163_SHARP_){
return clojure.set.difference.call(null,p1__28163_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__28201_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__28201_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28202 = cljs.core.seq.call(null,provides);
var chunk__28203 = null;
var count__28204 = (0);
var i__28205 = (0);
while(true){
if((i__28205 < count__28204)){
var prov = cljs.core._nth.call(null,chunk__28203,i__28205);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28214_28222 = cljs.core.seq.call(null,requires);
var chunk__28215_28223 = null;
var count__28216_28224 = (0);
var i__28217_28225 = (0);
while(true){
if((i__28217_28225 < count__28216_28224)){
var req_28226 = cljs.core._nth.call(null,chunk__28215_28223,i__28217_28225);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28226,prov);


var G__28227 = seq__28214_28222;
var G__28228 = chunk__28215_28223;
var G__28229 = count__28216_28224;
var G__28230 = (i__28217_28225 + (1));
seq__28214_28222 = G__28227;
chunk__28215_28223 = G__28228;
count__28216_28224 = G__28229;
i__28217_28225 = G__28230;
continue;
} else {
var temp__5720__auto___28231 = cljs.core.seq.call(null,seq__28214_28222);
if(temp__5720__auto___28231){
var seq__28214_28232__$1 = temp__5720__auto___28231;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28214_28232__$1)){
var c__4556__auto___28233 = cljs.core.chunk_first.call(null,seq__28214_28232__$1);
var G__28234 = cljs.core.chunk_rest.call(null,seq__28214_28232__$1);
var G__28235 = c__4556__auto___28233;
var G__28236 = cljs.core.count.call(null,c__4556__auto___28233);
var G__28237 = (0);
seq__28214_28222 = G__28234;
chunk__28215_28223 = G__28235;
count__28216_28224 = G__28236;
i__28217_28225 = G__28237;
continue;
} else {
var req_28238 = cljs.core.first.call(null,seq__28214_28232__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28238,prov);


var G__28239 = cljs.core.next.call(null,seq__28214_28232__$1);
var G__28240 = null;
var G__28241 = (0);
var G__28242 = (0);
seq__28214_28222 = G__28239;
chunk__28215_28223 = G__28240;
count__28216_28224 = G__28241;
i__28217_28225 = G__28242;
continue;
}
} else {
}
}
break;
}


var G__28243 = seq__28202;
var G__28244 = chunk__28203;
var G__28245 = count__28204;
var G__28246 = (i__28205 + (1));
seq__28202 = G__28243;
chunk__28203 = G__28244;
count__28204 = G__28245;
i__28205 = G__28246;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__28202);
if(temp__5720__auto__){
var seq__28202__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28202__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__28202__$1);
var G__28247 = cljs.core.chunk_rest.call(null,seq__28202__$1);
var G__28248 = c__4556__auto__;
var G__28249 = cljs.core.count.call(null,c__4556__auto__);
var G__28250 = (0);
seq__28202 = G__28247;
chunk__28203 = G__28248;
count__28204 = G__28249;
i__28205 = G__28250;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28202__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28218_28251 = cljs.core.seq.call(null,requires);
var chunk__28219_28252 = null;
var count__28220_28253 = (0);
var i__28221_28254 = (0);
while(true){
if((i__28221_28254 < count__28220_28253)){
var req_28255 = cljs.core._nth.call(null,chunk__28219_28252,i__28221_28254);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28255,prov);


var G__28256 = seq__28218_28251;
var G__28257 = chunk__28219_28252;
var G__28258 = count__28220_28253;
var G__28259 = (i__28221_28254 + (1));
seq__28218_28251 = G__28256;
chunk__28219_28252 = G__28257;
count__28220_28253 = G__28258;
i__28221_28254 = G__28259;
continue;
} else {
var temp__5720__auto___28260__$1 = cljs.core.seq.call(null,seq__28218_28251);
if(temp__5720__auto___28260__$1){
var seq__28218_28261__$1 = temp__5720__auto___28260__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28218_28261__$1)){
var c__4556__auto___28262 = cljs.core.chunk_first.call(null,seq__28218_28261__$1);
var G__28263 = cljs.core.chunk_rest.call(null,seq__28218_28261__$1);
var G__28264 = c__4556__auto___28262;
var G__28265 = cljs.core.count.call(null,c__4556__auto___28262);
var G__28266 = (0);
seq__28218_28251 = G__28263;
chunk__28219_28252 = G__28264;
count__28220_28253 = G__28265;
i__28221_28254 = G__28266;
continue;
} else {
var req_28267 = cljs.core.first.call(null,seq__28218_28261__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28267,prov);


var G__28268 = cljs.core.next.call(null,seq__28218_28261__$1);
var G__28269 = null;
var G__28270 = (0);
var G__28271 = (0);
seq__28218_28251 = G__28268;
chunk__28219_28252 = G__28269;
count__28220_28253 = G__28270;
i__28221_28254 = G__28271;
continue;
}
} else {
}
}
break;
}


var G__28272 = cljs.core.next.call(null,seq__28202__$1);
var G__28273 = null;
var G__28274 = (0);
var G__28275 = (0);
seq__28202 = G__28272;
chunk__28203 = G__28273;
count__28204 = G__28274;
i__28205 = G__28275;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28276_28280 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28277_28281 = null;
var count__28278_28282 = (0);
var i__28279_28283 = (0);
while(true){
if((i__28279_28283 < count__28278_28282)){
var ns_28284 = cljs.core._nth.call(null,chunk__28277_28281,i__28279_28283);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28284);


var G__28285 = seq__28276_28280;
var G__28286 = chunk__28277_28281;
var G__28287 = count__28278_28282;
var G__28288 = (i__28279_28283 + (1));
seq__28276_28280 = G__28285;
chunk__28277_28281 = G__28286;
count__28278_28282 = G__28287;
i__28279_28283 = G__28288;
continue;
} else {
var temp__5720__auto___28289 = cljs.core.seq.call(null,seq__28276_28280);
if(temp__5720__auto___28289){
var seq__28276_28290__$1 = temp__5720__auto___28289;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28276_28290__$1)){
var c__4556__auto___28291 = cljs.core.chunk_first.call(null,seq__28276_28290__$1);
var G__28292 = cljs.core.chunk_rest.call(null,seq__28276_28290__$1);
var G__28293 = c__4556__auto___28291;
var G__28294 = cljs.core.count.call(null,c__4556__auto___28291);
var G__28295 = (0);
seq__28276_28280 = G__28292;
chunk__28277_28281 = G__28293;
count__28278_28282 = G__28294;
i__28279_28283 = G__28295;
continue;
} else {
var ns_28296 = cljs.core.first.call(null,seq__28276_28290__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28296);


var G__28297 = cljs.core.next.call(null,seq__28276_28290__$1);
var G__28298 = null;
var G__28299 = (0);
var G__28300 = (0);
seq__28276_28280 = G__28297;
chunk__28277_28281 = G__28298;
count__28278_28282 = G__28299;
i__28279_28283 = G__28300;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__28301__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28301 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28302__i = 0, G__28302__a = new Array(arguments.length -  0);
while (G__28302__i < G__28302__a.length) {G__28302__a[G__28302__i] = arguments[G__28302__i + 0]; ++G__28302__i;}
  args = new cljs.core.IndexedSeq(G__28302__a,0,null);
} 
return G__28301__delegate.call(this,args);};
G__28301.cljs$lang$maxFixedArity = 0;
G__28301.cljs$lang$applyTo = (function (arglist__28303){
var args = cljs.core.seq(arglist__28303);
return G__28301__delegate(args);
});
G__28301.cljs$core$IFn$_invoke$arity$variadic = G__28301__delegate;
return G__28301;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__28304_SHARP_,p2__28305_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28304_SHARP_)),p2__28305_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__28306_SHARP_,p2__28307_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28306_SHARP_),p2__28307_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28308 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28308.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__28308.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__28308;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28309){if((e28309 instanceof Error)){
var e = e28309;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28309;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28310){if((e28310 instanceof Error)){
var e = e28310;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28310;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28311 = cljs.core._EQ_;
var expr__28312 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28311.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28312))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28311.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28312))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28311.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28312))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28314,callback){
var map__28315 = p__28314;
var map__28315__$1 = (((((!((map__28315 == null))))?(((((map__28315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28315):map__28315);
var file_msg = map__28315__$1;
var request_url = cljs.core.get.call(null,map__28315__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__25936__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_28353){
var state_val_28354 = (state_28353[(1)]);
if((state_val_28354 === (7))){
var inst_28349 = (state_28353[(2)]);
var state_28353__$1 = state_28353;
var statearr_28355_28381 = state_28353__$1;
(statearr_28355_28381[(2)] = inst_28349);

(statearr_28355_28381[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (1))){
var state_28353__$1 = state_28353;
var statearr_28356_28382 = state_28353__$1;
(statearr_28356_28382[(2)] = null);

(statearr_28356_28382[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (4))){
var inst_28319 = (state_28353[(7)]);
var inst_28319__$1 = (state_28353[(2)]);
var state_28353__$1 = (function (){var statearr_28357 = state_28353;
(statearr_28357[(7)] = inst_28319__$1);

return statearr_28357;
})();
if(cljs.core.truth_(inst_28319__$1)){
var statearr_28358_28383 = state_28353__$1;
(statearr_28358_28383[(1)] = (5));

} else {
var statearr_28359_28384 = state_28353__$1;
(statearr_28359_28384[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (15))){
var inst_28334 = (state_28353[(8)]);
var inst_28332 = (state_28353[(9)]);
var inst_28336 = inst_28334.call(null,inst_28332);
var state_28353__$1 = state_28353;
var statearr_28360_28385 = state_28353__$1;
(statearr_28360_28385[(2)] = inst_28336);

(statearr_28360_28385[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (13))){
var inst_28343 = (state_28353[(2)]);
var state_28353__$1 = state_28353;
var statearr_28361_28386 = state_28353__$1;
(statearr_28361_28386[(2)] = inst_28343);

(statearr_28361_28386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (6))){
var state_28353__$1 = state_28353;
var statearr_28362_28387 = state_28353__$1;
(statearr_28362_28387[(2)] = null);

(statearr_28362_28387[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (17))){
var inst_28340 = (state_28353[(2)]);
var state_28353__$1 = state_28353;
var statearr_28363_28388 = state_28353__$1;
(statearr_28363_28388[(2)] = inst_28340);

(statearr_28363_28388[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (3))){
var inst_28351 = (state_28353[(2)]);
var state_28353__$1 = state_28353;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28353__$1,inst_28351);
} else {
if((state_val_28354 === (12))){
var state_28353__$1 = state_28353;
var statearr_28364_28389 = state_28353__$1;
(statearr_28364_28389[(2)] = null);

(statearr_28364_28389[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (2))){
var state_28353__$1 = state_28353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28353__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28354 === (11))){
var inst_28324 = (state_28353[(10)]);
var inst_28330 = figwheel.client.file_reloading.blocking_load.call(null,inst_28324);
var state_28353__$1 = state_28353;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28353__$1,(14),inst_28330);
} else {
if((state_val_28354 === (9))){
var inst_28324 = (state_28353[(10)]);
var state_28353__$1 = state_28353;
if(cljs.core.truth_(inst_28324)){
var statearr_28365_28390 = state_28353__$1;
(statearr_28365_28390[(1)] = (11));

} else {
var statearr_28366_28391 = state_28353__$1;
(statearr_28366_28391[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (5))){
var inst_28325 = (state_28353[(11)]);
var inst_28319 = (state_28353[(7)]);
var inst_28324 = cljs.core.nth.call(null,inst_28319,(0),null);
var inst_28325__$1 = cljs.core.nth.call(null,inst_28319,(1),null);
var state_28353__$1 = (function (){var statearr_28367 = state_28353;
(statearr_28367[(11)] = inst_28325__$1);

(statearr_28367[(10)] = inst_28324);

return statearr_28367;
})();
if(cljs.core.truth_(inst_28325__$1)){
var statearr_28368_28392 = state_28353__$1;
(statearr_28368_28392[(1)] = (8));

} else {
var statearr_28369_28393 = state_28353__$1;
(statearr_28369_28393[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (14))){
var inst_28334 = (state_28353[(8)]);
var inst_28324 = (state_28353[(10)]);
var inst_28332 = (state_28353[(2)]);
var inst_28333 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28334__$1 = cljs.core.get.call(null,inst_28333,inst_28324);
var state_28353__$1 = (function (){var statearr_28370 = state_28353;
(statearr_28370[(8)] = inst_28334__$1);

(statearr_28370[(9)] = inst_28332);

return statearr_28370;
})();
if(cljs.core.truth_(inst_28334__$1)){
var statearr_28371_28394 = state_28353__$1;
(statearr_28371_28394[(1)] = (15));

} else {
var statearr_28372_28395 = state_28353__$1;
(statearr_28372_28395[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (16))){
var inst_28332 = (state_28353[(9)]);
var inst_28338 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28332);
var state_28353__$1 = state_28353;
var statearr_28373_28396 = state_28353__$1;
(statearr_28373_28396[(2)] = inst_28338);

(statearr_28373_28396[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (10))){
var inst_28345 = (state_28353[(2)]);
var state_28353__$1 = (function (){var statearr_28374 = state_28353;
(statearr_28374[(12)] = inst_28345);

return statearr_28374;
})();
var statearr_28375_28397 = state_28353__$1;
(statearr_28375_28397[(2)] = null);

(statearr_28375_28397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28354 === (8))){
var inst_28325 = (state_28353[(11)]);
var inst_28327 = eval(inst_28325);
var state_28353__$1 = state_28353;
var statearr_28376_28398 = state_28353__$1;
(statearr_28376_28398[(2)] = inst_28327);

(statearr_28376_28398[(1)] = (10));


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
var figwheel$client$file_reloading$state_machine__25842__auto__ = null;
var figwheel$client$file_reloading$state_machine__25842__auto____0 = (function (){
var statearr_28377 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28377[(0)] = figwheel$client$file_reloading$state_machine__25842__auto__);

(statearr_28377[(1)] = (1));

return statearr_28377;
});
var figwheel$client$file_reloading$state_machine__25842__auto____1 = (function (state_28353){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_28353);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e28378){if((e28378 instanceof Object)){
var ex__25845__auto__ = e28378;
var statearr_28379_28399 = state_28353;
(statearr_28379_28399[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28353);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28400 = state_28353;
state_28353 = G__28400;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25842__auto__ = function(state_28353){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25842__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25842__auto____1.call(this,state_28353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25842__auto____0;
figwheel$client$file_reloading$state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25842__auto____1;
return figwheel$client$file_reloading$state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_28380 = f__25937__auto__.call(null);
(statearr_28380[(6)] = c__25936__auto__);

return statearr_28380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));

return c__25936__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28402 = arguments.length;
switch (G__28402) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28404,callback){
var map__28405 = p__28404;
var map__28405__$1 = (((((!((map__28405 == null))))?(((((map__28405.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28405.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28405):map__28405);
var file_msg = map__28405__$1;
var namespace = cljs.core.get.call(null,map__28405__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28407){
var map__28408 = p__28407;
var map__28408__$1 = (((((!((map__28408 == null))))?(((((map__28408.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28408.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28408):map__28408);
var file_msg = map__28408__$1;
var namespace = cljs.core.get.call(null,map__28408__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28410){
var map__28411 = p__28410;
var map__28411__$1 = (((((!((map__28411 == null))))?(((((map__28411.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28411.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28411):map__28411);
var file_msg = map__28411__$1;
var namespace = cljs.core.get.call(null,map__28411__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28413,callback){
var map__28414 = p__28413;
var map__28414__$1 = (((((!((map__28414 == null))))?(((((map__28414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28414):map__28414);
var file_msg = map__28414__$1;
var request_url = cljs.core.get.call(null,map__28414__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28414__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__25936__auto___28464 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_28449){
var state_val_28450 = (state_28449[(1)]);
if((state_val_28450 === (1))){
var inst_28423 = cljs.core.seq.call(null,files);
var inst_28424 = cljs.core.first.call(null,inst_28423);
var inst_28425 = cljs.core.next.call(null,inst_28423);
var inst_28426 = files;
var state_28449__$1 = (function (){var statearr_28451 = state_28449;
(statearr_28451[(7)] = inst_28424);

(statearr_28451[(8)] = inst_28425);

(statearr_28451[(9)] = inst_28426);

return statearr_28451;
})();
var statearr_28452_28465 = state_28449__$1;
(statearr_28452_28465[(2)] = null);

(statearr_28452_28465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28450 === (2))){
var inst_28426 = (state_28449[(9)]);
var inst_28432 = (state_28449[(10)]);
var inst_28431 = cljs.core.seq.call(null,inst_28426);
var inst_28432__$1 = cljs.core.first.call(null,inst_28431);
var inst_28433 = cljs.core.next.call(null,inst_28431);
var inst_28434 = (inst_28432__$1 == null);
var inst_28435 = cljs.core.not.call(null,inst_28434);
var state_28449__$1 = (function (){var statearr_28453 = state_28449;
(statearr_28453[(11)] = inst_28433);

(statearr_28453[(10)] = inst_28432__$1);

return statearr_28453;
})();
if(inst_28435){
var statearr_28454_28466 = state_28449__$1;
(statearr_28454_28466[(1)] = (4));

} else {
var statearr_28455_28467 = state_28449__$1;
(statearr_28455_28467[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28450 === (3))){
var inst_28447 = (state_28449[(2)]);
var state_28449__$1 = state_28449;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28449__$1,inst_28447);
} else {
if((state_val_28450 === (4))){
var inst_28432 = (state_28449[(10)]);
var inst_28437 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28432);
var state_28449__$1 = state_28449;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28449__$1,(7),inst_28437);
} else {
if((state_val_28450 === (5))){
var inst_28443 = cljs.core.async.close_BANG_.call(null,out);
var state_28449__$1 = state_28449;
var statearr_28456_28468 = state_28449__$1;
(statearr_28456_28468[(2)] = inst_28443);

(statearr_28456_28468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28450 === (6))){
var inst_28445 = (state_28449[(2)]);
var state_28449__$1 = state_28449;
var statearr_28457_28469 = state_28449__$1;
(statearr_28457_28469[(2)] = inst_28445);

(statearr_28457_28469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28450 === (7))){
var inst_28433 = (state_28449[(11)]);
var inst_28439 = (state_28449[(2)]);
var inst_28440 = cljs.core.async.put_BANG_.call(null,out,inst_28439);
var inst_28426 = inst_28433;
var state_28449__$1 = (function (){var statearr_28458 = state_28449;
(statearr_28458[(9)] = inst_28426);

(statearr_28458[(12)] = inst_28440);

return statearr_28458;
})();
var statearr_28459_28470 = state_28449__$1;
(statearr_28459_28470[(2)] = null);

(statearr_28459_28470[(1)] = (2));


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
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25842__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25842__auto____0 = (function (){
var statearr_28460 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28460[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25842__auto__);

(statearr_28460[(1)] = (1));

return statearr_28460;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25842__auto____1 = (function (state_28449){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_28449);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e28461){if((e28461 instanceof Object)){
var ex__25845__auto__ = e28461;
var statearr_28462_28471 = state_28449;
(statearr_28462_28471[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28449);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28461;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28472 = state_28449;
state_28449 = G__28472;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25842__auto__ = function(state_28449){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25842__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25842__auto____1.call(this,state_28449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25842__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25842__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_28463 = f__25937__auto__.call(null);
(statearr_28463[(6)] = c__25936__auto___28464);

return statearr_28463;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28473,opts){
var map__28474 = p__28473;
var map__28474__$1 = (((((!((map__28474 == null))))?(((((map__28474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28474.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28474):map__28474);
var eval_body = cljs.core.get.call(null,map__28474__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28474__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28476){var e = e28476;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5718__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__28477_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28477_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5718__auto__)){
var file_msg = temp__5718__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28478){
var vec__28479 = p__28478;
var k = cljs.core.nth.call(null,vec__28479,(0),null);
var v = cljs.core.nth.call(null,vec__28479,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28482){
var vec__28483 = p__28482;
var k = cljs.core.nth.call(null,vec__28483,(0),null);
var v = cljs.core.nth.call(null,vec__28483,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28489,p__28490){
var map__28491 = p__28489;
var map__28491__$1 = (((((!((map__28491 == null))))?(((((map__28491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28491):map__28491);
var opts = map__28491__$1;
var before_jsload = cljs.core.get.call(null,map__28491__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28491__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28491__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28492 = p__28490;
var map__28492__$1 = (((((!((map__28492 == null))))?(((((map__28492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28492.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28492):map__28492);
var msg = map__28492__$1;
var files = cljs.core.get.call(null,map__28492__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28492__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28492__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__25936__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__25937__auto__ = (function (){var switch__25841__auto__ = (function (state_28646){
var state_val_28647 = (state_28646[(1)]);
if((state_val_28647 === (7))){
var inst_28507 = (state_28646[(7)]);
var inst_28508 = (state_28646[(8)]);
var inst_28509 = (state_28646[(9)]);
var inst_28506 = (state_28646[(10)]);
var inst_28514 = cljs.core._nth.call(null,inst_28507,inst_28509);
var inst_28515 = figwheel.client.file_reloading.eval_body.call(null,inst_28514,opts);
var inst_28516 = (inst_28509 + (1));
var tmp28648 = inst_28507;
var tmp28649 = inst_28508;
var tmp28650 = inst_28506;
var inst_28506__$1 = tmp28650;
var inst_28507__$1 = tmp28648;
var inst_28508__$1 = tmp28649;
var inst_28509__$1 = inst_28516;
var state_28646__$1 = (function (){var statearr_28651 = state_28646;
(statearr_28651[(7)] = inst_28507__$1);

(statearr_28651[(8)] = inst_28508__$1);

(statearr_28651[(9)] = inst_28509__$1);

(statearr_28651[(11)] = inst_28515);

(statearr_28651[(10)] = inst_28506__$1);

return statearr_28651;
})();
var statearr_28652_28735 = state_28646__$1;
(statearr_28652_28735[(2)] = null);

(statearr_28652_28735[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (20))){
var inst_28549 = (state_28646[(12)]);
var inst_28557 = figwheel.client.file_reloading.sort_files.call(null,inst_28549);
var state_28646__$1 = state_28646;
var statearr_28653_28736 = state_28646__$1;
(statearr_28653_28736[(2)] = inst_28557);

(statearr_28653_28736[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (27))){
var state_28646__$1 = state_28646;
var statearr_28654_28737 = state_28646__$1;
(statearr_28654_28737[(2)] = null);

(statearr_28654_28737[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (1))){
var inst_28498 = (state_28646[(13)]);
var inst_28495 = before_jsload.call(null,files);
var inst_28496 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28497 = (function (){return (function (p1__28486_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28486_SHARP_);
});
})();
var inst_28498__$1 = cljs.core.filter.call(null,inst_28497,files);
var inst_28499 = cljs.core.not_empty.call(null,inst_28498__$1);
var state_28646__$1 = (function (){var statearr_28655 = state_28646;
(statearr_28655[(14)] = inst_28495);

(statearr_28655[(13)] = inst_28498__$1);

(statearr_28655[(15)] = inst_28496);

return statearr_28655;
})();
if(cljs.core.truth_(inst_28499)){
var statearr_28656_28738 = state_28646__$1;
(statearr_28656_28738[(1)] = (2));

} else {
var statearr_28657_28739 = state_28646__$1;
(statearr_28657_28739[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (24))){
var state_28646__$1 = state_28646;
var statearr_28658_28740 = state_28646__$1;
(statearr_28658_28740[(2)] = null);

(statearr_28658_28740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (39))){
var inst_28599 = (state_28646[(16)]);
var state_28646__$1 = state_28646;
var statearr_28659_28741 = state_28646__$1;
(statearr_28659_28741[(2)] = inst_28599);

(statearr_28659_28741[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (46))){
var inst_28641 = (state_28646[(2)]);
var state_28646__$1 = state_28646;
var statearr_28660_28742 = state_28646__$1;
(statearr_28660_28742[(2)] = inst_28641);

(statearr_28660_28742[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (4))){
var inst_28543 = (state_28646[(2)]);
var inst_28544 = cljs.core.List.EMPTY;
var inst_28545 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28544);
var inst_28546 = (function (){return (function (p1__28487_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28487_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28487_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28487_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_28547 = cljs.core.filter.call(null,inst_28546,files);
var inst_28548 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28549 = cljs.core.concat.call(null,inst_28547,inst_28548);
var state_28646__$1 = (function (){var statearr_28661 = state_28646;
(statearr_28661[(17)] = inst_28545);

(statearr_28661[(12)] = inst_28549);

(statearr_28661[(18)] = inst_28543);

return statearr_28661;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28662_28743 = state_28646__$1;
(statearr_28662_28743[(1)] = (16));

} else {
var statearr_28663_28744 = state_28646__$1;
(statearr_28663_28744[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (15))){
var inst_28533 = (state_28646[(2)]);
var state_28646__$1 = state_28646;
var statearr_28664_28745 = state_28646__$1;
(statearr_28664_28745[(2)] = inst_28533);

(statearr_28664_28745[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (21))){
var inst_28559 = (state_28646[(19)]);
var inst_28559__$1 = (state_28646[(2)]);
var inst_28560 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28559__$1);
var state_28646__$1 = (function (){var statearr_28665 = state_28646;
(statearr_28665[(19)] = inst_28559__$1);

return statearr_28665;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28646__$1,(22),inst_28560);
} else {
if((state_val_28647 === (31))){
var inst_28644 = (state_28646[(2)]);
var state_28646__$1 = state_28646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28646__$1,inst_28644);
} else {
if((state_val_28647 === (32))){
var inst_28599 = (state_28646[(16)]);
var inst_28604 = inst_28599.cljs$lang$protocol_mask$partition0$;
var inst_28605 = (inst_28604 & (64));
var inst_28606 = inst_28599.cljs$core$ISeq$;
var inst_28607 = (cljs.core.PROTOCOL_SENTINEL === inst_28606);
var inst_28608 = ((inst_28605) || (inst_28607));
var state_28646__$1 = state_28646;
if(cljs.core.truth_(inst_28608)){
var statearr_28666_28746 = state_28646__$1;
(statearr_28666_28746[(1)] = (35));

} else {
var statearr_28667_28747 = state_28646__$1;
(statearr_28667_28747[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (40))){
var inst_28621 = (state_28646[(20)]);
var inst_28620 = (state_28646[(2)]);
var inst_28621__$1 = cljs.core.get.call(null,inst_28620,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28622 = cljs.core.get.call(null,inst_28620,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28623 = cljs.core.not_empty.call(null,inst_28621__$1);
var state_28646__$1 = (function (){var statearr_28668 = state_28646;
(statearr_28668[(20)] = inst_28621__$1);

(statearr_28668[(21)] = inst_28622);

return statearr_28668;
})();
if(cljs.core.truth_(inst_28623)){
var statearr_28669_28748 = state_28646__$1;
(statearr_28669_28748[(1)] = (41));

} else {
var statearr_28670_28749 = state_28646__$1;
(statearr_28670_28749[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (33))){
var state_28646__$1 = state_28646;
var statearr_28671_28750 = state_28646__$1;
(statearr_28671_28750[(2)] = false);

(statearr_28671_28750[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (13))){
var inst_28519 = (state_28646[(22)]);
var inst_28523 = cljs.core.chunk_first.call(null,inst_28519);
var inst_28524 = cljs.core.chunk_rest.call(null,inst_28519);
var inst_28525 = cljs.core.count.call(null,inst_28523);
var inst_28506 = inst_28524;
var inst_28507 = inst_28523;
var inst_28508 = inst_28525;
var inst_28509 = (0);
var state_28646__$1 = (function (){var statearr_28672 = state_28646;
(statearr_28672[(7)] = inst_28507);

(statearr_28672[(8)] = inst_28508);

(statearr_28672[(9)] = inst_28509);

(statearr_28672[(10)] = inst_28506);

return statearr_28672;
})();
var statearr_28673_28751 = state_28646__$1;
(statearr_28673_28751[(2)] = null);

(statearr_28673_28751[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (22))){
var inst_28563 = (state_28646[(23)]);
var inst_28559 = (state_28646[(19)]);
var inst_28567 = (state_28646[(24)]);
var inst_28562 = (state_28646[(25)]);
var inst_28562__$1 = (state_28646[(2)]);
var inst_28563__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28562__$1);
var inst_28564 = (function (){var all_files = inst_28559;
var res_SINGLEQUOTE_ = inst_28562__$1;
var res = inst_28563__$1;
return (function (p1__28488_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28488_SHARP_));
});
})();
var inst_28565 = cljs.core.filter.call(null,inst_28564,inst_28562__$1);
var inst_28566 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28567__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28566);
var inst_28568 = cljs.core.not_empty.call(null,inst_28567__$1);
var state_28646__$1 = (function (){var statearr_28674 = state_28646;
(statearr_28674[(23)] = inst_28563__$1);

(statearr_28674[(26)] = inst_28565);

(statearr_28674[(24)] = inst_28567__$1);

(statearr_28674[(25)] = inst_28562__$1);

return statearr_28674;
})();
if(cljs.core.truth_(inst_28568)){
var statearr_28675_28752 = state_28646__$1;
(statearr_28675_28752[(1)] = (23));

} else {
var statearr_28676_28753 = state_28646__$1;
(statearr_28676_28753[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (36))){
var state_28646__$1 = state_28646;
var statearr_28677_28754 = state_28646__$1;
(statearr_28677_28754[(2)] = false);

(statearr_28677_28754[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (41))){
var inst_28621 = (state_28646[(20)]);
var inst_28625 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28626 = cljs.core.map.call(null,inst_28625,inst_28621);
var inst_28627 = cljs.core.pr_str.call(null,inst_28626);
var inst_28628 = ["figwheel-no-load meta-data: ",inst_28627].join('');
var inst_28629 = figwheel.client.utils.log.call(null,inst_28628);
var state_28646__$1 = state_28646;
var statearr_28678_28755 = state_28646__$1;
(statearr_28678_28755[(2)] = inst_28629);

(statearr_28678_28755[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (43))){
var inst_28622 = (state_28646[(21)]);
var inst_28632 = (state_28646[(2)]);
var inst_28633 = cljs.core.not_empty.call(null,inst_28622);
var state_28646__$1 = (function (){var statearr_28679 = state_28646;
(statearr_28679[(27)] = inst_28632);

return statearr_28679;
})();
if(cljs.core.truth_(inst_28633)){
var statearr_28680_28756 = state_28646__$1;
(statearr_28680_28756[(1)] = (44));

} else {
var statearr_28681_28757 = state_28646__$1;
(statearr_28681_28757[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (29))){
var inst_28563 = (state_28646[(23)]);
var inst_28565 = (state_28646[(26)]);
var inst_28599 = (state_28646[(16)]);
var inst_28559 = (state_28646[(19)]);
var inst_28567 = (state_28646[(24)]);
var inst_28562 = (state_28646[(25)]);
var inst_28595 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28598 = (function (){var all_files = inst_28559;
var res_SINGLEQUOTE_ = inst_28562;
var res = inst_28563;
var files_not_loaded = inst_28565;
var dependencies_that_loaded = inst_28567;
return (function (p__28597){
var map__28682 = p__28597;
var map__28682__$1 = (((((!((map__28682 == null))))?(((((map__28682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28682):map__28682);
var namespace = cljs.core.get.call(null,map__28682__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_28599__$1 = cljs.core.group_by.call(null,inst_28598,inst_28565);
var inst_28601 = (inst_28599__$1 == null);
var inst_28602 = cljs.core.not.call(null,inst_28601);
var state_28646__$1 = (function (){var statearr_28684 = state_28646;
(statearr_28684[(16)] = inst_28599__$1);

(statearr_28684[(28)] = inst_28595);

return statearr_28684;
})();
if(inst_28602){
var statearr_28685_28758 = state_28646__$1;
(statearr_28685_28758[(1)] = (32));

} else {
var statearr_28686_28759 = state_28646__$1;
(statearr_28686_28759[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (44))){
var inst_28622 = (state_28646[(21)]);
var inst_28635 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28622);
var inst_28636 = cljs.core.pr_str.call(null,inst_28635);
var inst_28637 = ["not required: ",inst_28636].join('');
var inst_28638 = figwheel.client.utils.log.call(null,inst_28637);
var state_28646__$1 = state_28646;
var statearr_28687_28760 = state_28646__$1;
(statearr_28687_28760[(2)] = inst_28638);

(statearr_28687_28760[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (6))){
var inst_28540 = (state_28646[(2)]);
var state_28646__$1 = state_28646;
var statearr_28688_28761 = state_28646__$1;
(statearr_28688_28761[(2)] = inst_28540);

(statearr_28688_28761[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (28))){
var inst_28565 = (state_28646[(26)]);
var inst_28592 = (state_28646[(2)]);
var inst_28593 = cljs.core.not_empty.call(null,inst_28565);
var state_28646__$1 = (function (){var statearr_28689 = state_28646;
(statearr_28689[(29)] = inst_28592);

return statearr_28689;
})();
if(cljs.core.truth_(inst_28593)){
var statearr_28690_28762 = state_28646__$1;
(statearr_28690_28762[(1)] = (29));

} else {
var statearr_28691_28763 = state_28646__$1;
(statearr_28691_28763[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (25))){
var inst_28563 = (state_28646[(23)]);
var inst_28579 = (state_28646[(2)]);
var inst_28580 = cljs.core.not_empty.call(null,inst_28563);
var state_28646__$1 = (function (){var statearr_28692 = state_28646;
(statearr_28692[(30)] = inst_28579);

return statearr_28692;
})();
if(cljs.core.truth_(inst_28580)){
var statearr_28693_28764 = state_28646__$1;
(statearr_28693_28764[(1)] = (26));

} else {
var statearr_28694_28765 = state_28646__$1;
(statearr_28694_28765[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (34))){
var inst_28615 = (state_28646[(2)]);
var state_28646__$1 = state_28646;
if(cljs.core.truth_(inst_28615)){
var statearr_28695_28766 = state_28646__$1;
(statearr_28695_28766[(1)] = (38));

} else {
var statearr_28696_28767 = state_28646__$1;
(statearr_28696_28767[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (17))){
var state_28646__$1 = state_28646;
var statearr_28697_28768 = state_28646__$1;
(statearr_28697_28768[(2)] = recompile_dependents);

(statearr_28697_28768[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (3))){
var state_28646__$1 = state_28646;
var statearr_28698_28769 = state_28646__$1;
(statearr_28698_28769[(2)] = null);

(statearr_28698_28769[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (12))){
var inst_28536 = (state_28646[(2)]);
var state_28646__$1 = state_28646;
var statearr_28699_28770 = state_28646__$1;
(statearr_28699_28770[(2)] = inst_28536);

(statearr_28699_28770[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (2))){
var inst_28498 = (state_28646[(13)]);
var inst_28505 = cljs.core.seq.call(null,inst_28498);
var inst_28506 = inst_28505;
var inst_28507 = null;
var inst_28508 = (0);
var inst_28509 = (0);
var state_28646__$1 = (function (){var statearr_28700 = state_28646;
(statearr_28700[(7)] = inst_28507);

(statearr_28700[(8)] = inst_28508);

(statearr_28700[(9)] = inst_28509);

(statearr_28700[(10)] = inst_28506);

return statearr_28700;
})();
var statearr_28701_28771 = state_28646__$1;
(statearr_28701_28771[(2)] = null);

(statearr_28701_28771[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (23))){
var inst_28563 = (state_28646[(23)]);
var inst_28565 = (state_28646[(26)]);
var inst_28559 = (state_28646[(19)]);
var inst_28567 = (state_28646[(24)]);
var inst_28562 = (state_28646[(25)]);
var inst_28570 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28572 = (function (){var all_files = inst_28559;
var res_SINGLEQUOTE_ = inst_28562;
var res = inst_28563;
var files_not_loaded = inst_28565;
var dependencies_that_loaded = inst_28567;
return (function (p__28571){
var map__28702 = p__28571;
var map__28702__$1 = (((((!((map__28702 == null))))?(((((map__28702.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28702.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28702):map__28702);
var request_url = cljs.core.get.call(null,map__28702__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_28573 = cljs.core.reverse.call(null,inst_28567);
var inst_28574 = cljs.core.map.call(null,inst_28572,inst_28573);
var inst_28575 = cljs.core.pr_str.call(null,inst_28574);
var inst_28576 = figwheel.client.utils.log.call(null,inst_28575);
var state_28646__$1 = (function (){var statearr_28704 = state_28646;
(statearr_28704[(31)] = inst_28570);

return statearr_28704;
})();
var statearr_28705_28772 = state_28646__$1;
(statearr_28705_28772[(2)] = inst_28576);

(statearr_28705_28772[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (35))){
var state_28646__$1 = state_28646;
var statearr_28706_28773 = state_28646__$1;
(statearr_28706_28773[(2)] = true);

(statearr_28706_28773[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (19))){
var inst_28549 = (state_28646[(12)]);
var inst_28555 = figwheel.client.file_reloading.expand_files.call(null,inst_28549);
var state_28646__$1 = state_28646;
var statearr_28707_28774 = state_28646__$1;
(statearr_28707_28774[(2)] = inst_28555);

(statearr_28707_28774[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (11))){
var state_28646__$1 = state_28646;
var statearr_28708_28775 = state_28646__$1;
(statearr_28708_28775[(2)] = null);

(statearr_28708_28775[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (9))){
var inst_28538 = (state_28646[(2)]);
var state_28646__$1 = state_28646;
var statearr_28709_28776 = state_28646__$1;
(statearr_28709_28776[(2)] = inst_28538);

(statearr_28709_28776[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (5))){
var inst_28508 = (state_28646[(8)]);
var inst_28509 = (state_28646[(9)]);
var inst_28511 = (inst_28509 < inst_28508);
var inst_28512 = inst_28511;
var state_28646__$1 = state_28646;
if(cljs.core.truth_(inst_28512)){
var statearr_28710_28777 = state_28646__$1;
(statearr_28710_28777[(1)] = (7));

} else {
var statearr_28711_28778 = state_28646__$1;
(statearr_28711_28778[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (14))){
var inst_28519 = (state_28646[(22)]);
var inst_28528 = cljs.core.first.call(null,inst_28519);
var inst_28529 = figwheel.client.file_reloading.eval_body.call(null,inst_28528,opts);
var inst_28530 = cljs.core.next.call(null,inst_28519);
var inst_28506 = inst_28530;
var inst_28507 = null;
var inst_28508 = (0);
var inst_28509 = (0);
var state_28646__$1 = (function (){var statearr_28712 = state_28646;
(statearr_28712[(7)] = inst_28507);

(statearr_28712[(8)] = inst_28508);

(statearr_28712[(32)] = inst_28529);

(statearr_28712[(9)] = inst_28509);

(statearr_28712[(10)] = inst_28506);

return statearr_28712;
})();
var statearr_28713_28779 = state_28646__$1;
(statearr_28713_28779[(2)] = null);

(statearr_28713_28779[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (45))){
var state_28646__$1 = state_28646;
var statearr_28714_28780 = state_28646__$1;
(statearr_28714_28780[(2)] = null);

(statearr_28714_28780[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (26))){
var inst_28563 = (state_28646[(23)]);
var inst_28565 = (state_28646[(26)]);
var inst_28559 = (state_28646[(19)]);
var inst_28567 = (state_28646[(24)]);
var inst_28562 = (state_28646[(25)]);
var inst_28582 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28584 = (function (){var all_files = inst_28559;
var res_SINGLEQUOTE_ = inst_28562;
var res = inst_28563;
var files_not_loaded = inst_28565;
var dependencies_that_loaded = inst_28567;
return (function (p__28583){
var map__28715 = p__28583;
var map__28715__$1 = (((((!((map__28715 == null))))?(((((map__28715.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28715.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28715):map__28715);
var namespace = cljs.core.get.call(null,map__28715__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28715__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_28585 = cljs.core.map.call(null,inst_28584,inst_28563);
var inst_28586 = cljs.core.pr_str.call(null,inst_28585);
var inst_28587 = figwheel.client.utils.log.call(null,inst_28586);
var inst_28588 = (function (){var all_files = inst_28559;
var res_SINGLEQUOTE_ = inst_28562;
var res = inst_28563;
var files_not_loaded = inst_28565;
var dependencies_that_loaded = inst_28567;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_28589 = setTimeout(inst_28588,(10));
var state_28646__$1 = (function (){var statearr_28717 = state_28646;
(statearr_28717[(33)] = inst_28582);

(statearr_28717[(34)] = inst_28587);

return statearr_28717;
})();
var statearr_28718_28781 = state_28646__$1;
(statearr_28718_28781[(2)] = inst_28589);

(statearr_28718_28781[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (16))){
var state_28646__$1 = state_28646;
var statearr_28719_28782 = state_28646__$1;
(statearr_28719_28782[(2)] = reload_dependents);

(statearr_28719_28782[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (38))){
var inst_28599 = (state_28646[(16)]);
var inst_28617 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28599);
var state_28646__$1 = state_28646;
var statearr_28720_28783 = state_28646__$1;
(statearr_28720_28783[(2)] = inst_28617);

(statearr_28720_28783[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (30))){
var state_28646__$1 = state_28646;
var statearr_28721_28784 = state_28646__$1;
(statearr_28721_28784[(2)] = null);

(statearr_28721_28784[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (10))){
var inst_28519 = (state_28646[(22)]);
var inst_28521 = cljs.core.chunked_seq_QMARK_.call(null,inst_28519);
var state_28646__$1 = state_28646;
if(inst_28521){
var statearr_28722_28785 = state_28646__$1;
(statearr_28722_28785[(1)] = (13));

} else {
var statearr_28723_28786 = state_28646__$1;
(statearr_28723_28786[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (18))){
var inst_28553 = (state_28646[(2)]);
var state_28646__$1 = state_28646;
if(cljs.core.truth_(inst_28553)){
var statearr_28724_28787 = state_28646__$1;
(statearr_28724_28787[(1)] = (19));

} else {
var statearr_28725_28788 = state_28646__$1;
(statearr_28725_28788[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (42))){
var state_28646__$1 = state_28646;
var statearr_28726_28789 = state_28646__$1;
(statearr_28726_28789[(2)] = null);

(statearr_28726_28789[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (37))){
var inst_28612 = (state_28646[(2)]);
var state_28646__$1 = state_28646;
var statearr_28727_28790 = state_28646__$1;
(statearr_28727_28790[(2)] = inst_28612);

(statearr_28727_28790[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28647 === (8))){
var inst_28519 = (state_28646[(22)]);
var inst_28506 = (state_28646[(10)]);
var inst_28519__$1 = cljs.core.seq.call(null,inst_28506);
var state_28646__$1 = (function (){var statearr_28728 = state_28646;
(statearr_28728[(22)] = inst_28519__$1);

return statearr_28728;
})();
if(inst_28519__$1){
var statearr_28729_28791 = state_28646__$1;
(statearr_28729_28791[(1)] = (10));

} else {
var statearr_28730_28792 = state_28646__$1;
(statearr_28730_28792[(1)] = (11));

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
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25842__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25842__auto____0 = (function (){
var statearr_28731 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28731[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25842__auto__);

(statearr_28731[(1)] = (1));

return statearr_28731;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25842__auto____1 = (function (state_28646){
while(true){
var ret_value__25843__auto__ = (function (){try{while(true){
var result__25844__auto__ = switch__25841__auto__.call(null,state_28646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25844__auto__;
}
break;
}
}catch (e28732){if((e28732 instanceof Object)){
var ex__25845__auto__ = e28732;
var statearr_28733_28793 = state_28646;
(statearr_28733_28793[(5)] = ex__25845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28732;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28794 = state_28646;
state_28646 = G__28794;
continue;
} else {
return ret_value__25843__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25842__auto__ = function(state_28646){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25842__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25842__auto____1.call(this,state_28646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25842__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25842__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25842__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25842__auto__;
})()
})();
var state__25938__auto__ = (function (){var statearr_28734 = f__25937__auto__.call(null);
(statearr_28734[(6)] = c__25936__auto__);

return statearr_28734;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__25938__auto__);
}));

return c__25936__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28797,link){
var map__28798 = p__28797;
var map__28798__$1 = (((((!((map__28798 == null))))?(((((map__28798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28798):map__28798);
var file = cljs.core.get.call(null,map__28798__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5720__auto__ = link.href;
if(cljs.core.truth_(temp__5720__auto__)){
var link_href = temp__5720__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__28795_SHARP_,p2__28796_SHARP_){
if(cljs.core._EQ_.call(null,p1__28795_SHARP_,p2__28796_SHARP_)){
return p1__28795_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5720__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28801){
var map__28802 = p__28801;
var map__28802__$1 = (((((!((map__28802 == null))))?(((((map__28802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28802):map__28802);
var match_length = cljs.core.get.call(null,map__28802__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28802__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28800_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28800_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5720__auto__)){
var res = temp__5720__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28804_SHARP_,p2__28805_SHARP_){
return cljs.core.assoc.call(null,p1__28804_SHARP_,cljs.core.get.call(null,p2__28805_SHARP_,key),p2__28805_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5718__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5718__auto__)){
var link = temp__5718__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_28806 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28806);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28806);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28807,p__28808){
var map__28809 = p__28807;
var map__28809__$1 = (((((!((map__28809 == null))))?(((((map__28809.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28809.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28809):map__28809);
var on_cssload = cljs.core.get.call(null,map__28809__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28810 = p__28808;
var map__28810__$1 = (((((!((map__28810 == null))))?(((((map__28810.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28810.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28810):map__28810);
var files_msg = map__28810__$1;
var files = cljs.core.get.call(null,map__28810__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5720__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5720__auto__)){
var f_datas = temp__5720__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1614970915003
