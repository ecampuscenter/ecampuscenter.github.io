// Compiled by ClojureScript 1.9.542 {:static-fns true, :optimize-constants true}
goog.provide('devcards.system');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('devcards.util.edn_renderer');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('goog.labs.userAgent.device');
goog.require('devcards.util.utils');
goog.require('goog.History');
devcards.system.l = (function devcards$system$l(x){
console.log(x);

return x;
});
devcards.system.devcards_app_element_id = "com-rigsomelight-devcards-main";
devcards.system.devcards_rendered_card_class = "com-rigsomelight-devcards_rendered-card";
devcards.system.prevent__GT_ = (function devcards$system$prevent__GT_(f){
return (function (e){
e.preventDefault();

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(e) : f.call(null,e));
});
});
devcards.system.get_element_by_id = (function devcards$system$get_element_by_id(id){
return document.getElementById(id);
});
devcards.system.devcards_app_node = (function devcards$system$devcards_app_node(){
return devcards.system.get_element_by_id(devcards.system.devcards_app_element_id);
});
devcards.system.path__GT_unique_card_id = (function devcards$system$path__GT_unique_card_id(path){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("["),cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),cljs.core.str.cljs$core$IFn$_invoke$arity$1("]")].join('');
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.cons(cljs.core.cst$kw$cardpath,path))));
});
devcards.system.create_element_STAR_ = (function devcards$system$create_element_STAR_(tag,id,style_text){
var el = document.createElement(tag);
el.id = id;

el.appendChild(document.createTextNode(style_text));

return el;
});
devcards.system.create_style_element = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.system.create_element_STAR_,"style");
devcards.system.create_script_element = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.system.create_element_STAR_,"script");
devcards.system.prepend_child = (function devcards$system$prepend_child(node,node2){
var temp__6736__auto__ = node.firstChild;
if(cljs.core.truth_(temp__6736__auto__)){
var first_child = temp__6736__auto__;
return node.insertBefore(node2,first_child);
} else {
return node.appendChild(node2);
}
});
devcards.system.add_css_if_necessary_BANG_ = (function devcards$system$add_css_if_necessary_BANG_(){
var temp__6736__auto__ = document.getElementsByTagName("head");
if(cljs.core.truth_(temp__6736__auto__)){
var heads = temp__6736__auto__;
var head = (heads[(0)]);
if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-code-highlight-css"))){
} else {
head.appendChild((function (){var G__23946 = "com-rigsomelight-code-highlight-css";
var G__23947 = "/*\n\ngithub.com style (c) Vasily Polovnyov <vast@whiteants.net>\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #333;\n  background: #f8f8f8;\n  -webkit-text-size-adjust: none;\n}\n\n.hljs-comment,\n.diff .hljs-header {\n  color: #998;\n  font-style: italic;\n}\n\n.hljs-keyword,\n.css .rule .hljs-keyword,\n.hljs-winutils,\n.nginx .hljs-title,\n.hljs-subst,\n.hljs-request,\n.hljs-status {\n  color: #333;\n  font-weight: bold;\n}\n\n.hljs-number,\n.hljs-hexcolor,\n.ruby .hljs-constant {\n  color: #008080;\n}\n\n.hljs-string,\n.hljs-tag .hljs-value,\n.hljs-doctag,\n.tex .hljs-formula {\n  color: #d14;\n}\n\n.hljs-title,\n.hljs-id,\n.scss .hljs-preprocessor {\n  color: #900;\n  font-weight: bold;\n}\n\n.hljs-list .hljs-keyword,\n.hljs-subst {\n  font-weight: normal;\n}\n\n.hljs-class .hljs-title,\n.hljs-type,\n.vhdl .hljs-literal,\n.tex .hljs-command {\n  color: #458;\n  font-weight: bold;\n}\n\n.hljs-tag,\n.hljs-tag .hljs-title,\n.hljs-rule .hljs-property,\n.django .hljs-tag .hljs-keyword {\n  color: #000080;\n  font-weight: normal;\n}\n\n.hljs-attribute,\n.hljs-variable,\n.lisp .hljs-body,\n.hljs-name {\n  color: #008080;\n}\n\n.hljs-regexp {\n  color: #009926;\n}\n\n.hljs-symbol,\n.ruby .hljs-symbol .hljs-string,\n.lisp .hljs-keyword,\n.clojure .hljs-keyword,\n.scheme .hljs-keyword,\n.tex .hljs-special,\n.hljs-prompt {\n  color: #990073;\n}\n\n.hljs-built_in {\n  color: #0086b3;\n}\n\n.hljs-preprocessor,\n.hljs-pragma,\n.hljs-pi,\n.hljs-doctype,\n.hljs-shebang,\n.hljs-cdata {\n  color: #999;\n  font-weight: bold;\n}\n\n.hljs-deletion {\n  background: #fdd;\n}\n\n.hljs-addition {\n  background: #dfd;\n}\n\n.diff .hljs-change {\n  background: #0086b3;\n}\n\n.hljs-chunk {\n  color: #aaa;\n}\n";
return (devcards.system.create_style_element.cljs$core$IFn$_invoke$arity$2 ? devcards.system.create_style_element.cljs$core$IFn$_invoke$arity$2(G__23946,G__23947) : devcards.system.create_style_element.call(null,G__23946,G__23947));
})());
}

if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-devcards-css"))){
} else {
head.appendChild((function (){var G__23948 = "com-rigsomelight-devcards-css";
var G__23949 = "body {\n    margin: 0px;\n}\n\nbody .hljs {\n  padding: 0px;\n  color: #333;\n  background: transparent;\n}\n  \n#com-rigsomelight-devcards-main {\n    padding-bottom: 10em;\n}\n\n.com-rigsomelight-devcards_rendered-card {\n  position: relative;\n}\n\n.com-rigsomelight-devcards-body {\n    background-color: rgb(233,234,237);\n}\n\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre\n{\n  display: block;\n  padding: 9.5px 14px;\n  margin: 0px 0px 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;\n  color: #333;\n  background-color: rgb(250,250,250);\n  border: 1px solid #e1e1e1;  \n  margin-left: -14px;\n  margin-right: -14px;  \n  border-left: 0px;\n  border-right: 0px; \n}\n\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre {\n  margin-left: -15px;\n  margin-right: -15px;  \n}\n\n/* frameless style for markdown */\n.com-rigsomelight-devcards-framelesss .com-rigsomelight-devcards-markdown {\n    padding-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n}\n\n/* end fremless markdown style */\n\n.com-rigsomelight-devcards-padding-top-border {\n    margin-top: 14px;\n    padding-top: 14px;\n}\n\n.com-rigsomelight-devcards-markdown code {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #990073;\n  background-color: #fafafa;\n  white-space: nowrap;\n  border-radius: 4px;\n}\n\n.com-rigsomelight-devcards-markdown pre code {\n  padding: 0;\n  font-size: 1em;\n  color: inherit;\n  white-space: pre; \n  background-color: transparent;\n  border-radius: 0;\n}\n\n.com-rigsomelight-devcards-base,\n.com-rigsomelight-devcards-markdown {\n\n}\n\n\n.com-rigsomelight-devcards-typog {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.42857143;\n}\n\n.com-rigsomelight-devcards-typog h1,\n.com-rigsomelight-devcards-typog h2,\n.com-rigsomelight-devcards-typog h3,\n.com-rigsomelight-devcards-typog h4,\n.com-rigsomelight-devcards-typog h5,\n.com-rigsomelight-devcards-markdown h1,\n.com-rigsomelight-devcards-markdown h2,\n.com-rigsomelight-devcards-markdown h3,\n.com-rigsomelight-devcards-markdown h4,\n.com-rigsomelight-devcards-markdown h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards-typog a {\n    color: #428bca;\n    text-decoration: none;\n}\n\n.com-rigsomelight-devcards-markdown h1:first-child,\n.com-rigsomelight-devcards-markdown h2:first-child,\n.com-rigsomelight-devcards-markdown h3:first-child,\n.com-rigsomelight-devcards-markdown h4:first-child,\n.com-rigsomelight-devcards-markdown h5:first-child {\n    margin-top: 14px;\n}\n                                           \n.com-rigsomelight-devcards-markdown code,\n.com-rigsomelight-devcards-markdown kbd,\n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-markdown samp {\n  font-family: Menlo,Monaco,Consolas,\"Courier New\",monospace;\n}\n\n.com-rigsomelight-devcards-navbar {\n    background-color: rgb(60,90,153);\n    border-color: rgb(50,80,153);\n    color: #fff;\n    height: 50px;\n}\n\n.com-rigsomelight-devcards-brand {\n    color: #ccc;\n    font-size: 18px;\n    line-height: 50px;\n    display: block;\n    margin-left: 14px;\n}\n\n.com-rigsomelight-devcards-container {\n /* margin: auto;\n    width: 80%;*/\n}\n\n.com-rigsomelight-devcards-card-base {\n    background: #fff;\n    padding: 8px 14px;     \n    margin-top: 20px;\n}\n\n.com-rigsomelight-devcards-card-base-no-pad {\n    background: #fff;\n    border:  1px solid rgb(231,234,242);\n    margin-top: 20px;\n    border-left: 0px;\n    border-right: 0px;    \n}\n\n.com-rigsomelight-devcards-card-base-no-pad.com-rigsomelight-devcards-card-hide-border {\n   border: 1px solid transparent;\n}\n\n\n.com-rigsomelight-devcards-breadcrumbs {\n    font-size: 16px;\n    line-height: 1.5em;\n    border: none !important;\n}\n\n.com-rigsomelight-devcards-breadcrumb-sep {\n    display: inline-block;\n    padding: 0px 5px;\n    color: #ccc;\n}\n\n.com-rigsomelight-devcards-list-group {\n    margin-top: 30px;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    color: #555;\n    position: relative;\n    display: block;\n    padding: 10px 14px;\n    margin-bottom: -1px;\n    border-bottom: 1px solid #eee;\n}\n\n.com-rigsomelight-devcards-badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #fff;\n  line-height: 1;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #999;\n  border-radius: 10px;\n}\n\nbutton.com-rigsomelight-devcards-badge {\n    border: none;\n    padding: 3px 19px;\n}\n\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 15px;\n    font-size: 16px;\n    line-height: 1.5em;\n    background-color: rgb(142,162,206);\n    background-color: rgb(239, 237, 237);\n}\n\n.com-rigsomelight-devcards-panel-heading a {\n    color: #666;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    margin-top: 14px;\n    padding-left: 14px;\n    padding-right: 14px;\n    padding-bottom: 14px;\n}\n\n.com-rigsomelight-devcards-test-line {\n  position: relative;\n  display: block;\n  padding: 10px 14px;\n  border: none;\n  border-top: 1px solid #fafafa;\n}\n\n\n\n\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-context {\n    background-color: #fcfcfc;\n    border-left: 1px solid #f1f1f1;\n    border-right: 1px solid #f1f1f1;      \n}\n\n.com-rigsomelight-devcards-test-line pre {\n  margin: 0px;\n    \n  word-break: normal;\n  word-wrap: normal;\n  overflow-x: scroll;    \n}\n\n\n.com-rigsomelight-devcards-test-line pre code {\n    font-size: 80%;\n    padding: 0px;\n    background-color:transparent;\n}\n    \n.com-rigsomelight-devcards-pass {\n    color: #3c763d;\n    border: 1px solid rgb(199, 225, 160);\n    border-left: 10px solid rgb(199, 225, 160);    \n}\n\n.com-rigsomelight-devcards-fail, .com-rigsomelight-devcards-error {\n  color: #a94442;\n  border: 1px solid rgb(236, 196, 196);    \n  border-left: 10px solid rgb(236, 196, 196);  \n}\n\n.com-rigsomelight-devcards-fail {\n    background-color: rgb(254, 254, 244);\n}\n\n\n.com-rigsomelight-devcards-error {\n    background-color: rgb(254, 245, 245);\n}\n\n\n\n.com-rigsomelight-devcards-test-message {\n    display: block;\n    margin-top: 2px;\n    margin-bottom: 8px;\n}\n\n.com-rigsomelight-devcards-pass .com-rigsomelight-devcards-test-message {\n    color: #386739;\n}\n\n.com-rigsomelight-devcards-fail .com-rigsomelight-devcards-test-message {\n    color: #994745;\n}\n\n.com-rigsomelight-devcards-history-control-small-arrow {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 9px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-block {\n    display: inline-block;\n    height: 16px;\n    width: 3px;\n    background-color: #666;\n}    \n\n.com-rigsomelight-devcards-history-control-right {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-left-width: 16px;\n    border-left-color: #666;\n    margin-right: -10px;\n}\n\n.com-rigsomelight-devcards-history-control-left {\n    display: inline-block;\n    height: 0px;\n    width: 0px;\n    border: 8px solid transparent;\n    border-right-width: 16px;\n    border-right-color: #666;\n    margin-left: -10px;\n}\n\n.com-rigsomelight-devcards-history-stop {\n    display: inline-block;\n    height: 17px;\n    width: 17px;\n    background-color: #D88282;\n    border-radius: 3px;\n}\n\n.com-rigsomelight-devcards-history-control-bar {\n    background-color: rgb(255,252,234);\n    padding-top: 5px;\n    padding-bottom: 3px;    \n    margin: 14px 0px;\n    padding-left: 14px;\n    padding-right: 14px;\n    text-align: right;\n    /* position: absolute;\n    top: 0px;\n    right: 0px; */\n}\n\n.com-rigsomelight-devcards-history-control-bar button {\n    background: transparent;\n    border: none;\n    margin: 0px 4px;\n    height: 20px;\n    padding: 1px 28px;\n}\n\n.com-rigsomelight-devcards-history-control-bar + .com-rigsomelight-devcards-padding-top-border {\n    border: none;\n    padding-top: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding .com-rigsomelight-devcards-history-control-bar {\n    /* margin-top: -14px; */\n    margin: 14px -30px;\n}\n\n\n\n\n@media (min-width: 768px) {\n\n    \n.com-rigsomelight-devcards-markdown pre,\n.com-rigsomelight-devcards-test-line.com-rigsomelight-devcards-test-doc .com-rigsomelight-devcards-markdown pre {\n  padding: 9.5px 30px;\n  margin-left: -30px;\n  margin-right: -30px;      \n}\n\n.com-rigsomelight-devcards-panel-heading {\n    padding: 8px 30px;\n}    \n\n.com-rigsomelight-devcards-brand {\n    margin-left: 0px;\n}\n\n.com-rigsomelight-devcards-devcard-padding {\n    padding-left: 30px;\n    padding-right: 30px;\n}\n\n.com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-devcard-padding {\n    padding-left: 0px;\n    padding-right: 0px;\n}\n\n.com-rigsomelight-devcards-breadcrumbs {\n    padding: 0px 0px;\n}\n\n.com-rigsomelight-devcards-list-group {\n    margin-top: 30px;\n}\n\n.com-rigsomelight-devcards-list-group-item {\n    padding-left: 0px;\n    padding-right: 0px;    \n}\n    \n .com-rigsomelight-devcards-container {\n    margin: auto;\n    width: 750px;\n }\n\n button.com-rigsomelight-devcards-badge {\n    border: 1px solid #999;\n    padding: 3px 9px;\n    background-color: #ccc;\n }\n\n .com-rigsomelight-devcards-history-control-bar button {\n     padding: 1px 6px;\n }\n\n .com-rigsomelight-devcards-card-base,\n .com-rigsomelight-devcards-card-base-no-pad {\n     border-radius: 3px;\n     border:  1px solid rgb(231,234,242);\n }\n\n .com-rigsomelight-devcards-test-line {\n    padding: 10px 30px;\n }\n\n.com-rigsomelight-devcards-pass {\n  border-left: 25px solid rgb(199, 225, 160);        \n}\n\n.com-rigsomelight-devcards-fail {\n  border-left: 25px solid rgb(236, 196, 196);  \n}\n\n.com-rigsomelight-devcards-error {\n  border-left: 25px solid rgb(236, 196, 196);      \n}\n \n}\n\n@media (min-width: 800px) {\n  .com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-markdown pre {\n      border: 1px solid #e1e1e1;\n      border-radius: 4px;\n      padding-left: 14px;\n      padding-right: 14px;\n\n      margin-left: 0px;\n      margin-right: 0px;            \n  }\n}\n\n@media (min-width: 1200px) {\n  .com-rigsomelight-devcards-card-hide-border .com-rigsomelight-devcards-devcard-padding {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n  .com-rigsomelight-devcards-brand {\n    margin-left: 30px;\n  }\n  .com-rigsomelight-devcards-list-group-item {\n      margin-left: 30px;\n      margin-right: 30px;\n  }\n  \n  .com-rigsomelight-devcards-breadcrumbs {\n    padding: 0px 30px;\n  }\n  \n  .com-rigsomelight-devcards-container {    \n    margin: auto;\n    width: 970px;\n  }\n}\n";
return (devcards.system.create_style_element.cljs$core$IFn$_invoke$arity$2 ? devcards.system.create_style_element.cljs$core$IFn$_invoke$arity$2(G__23948,G__23949) : devcards.system.create_style_element.call(null,G__23948,G__23949));
})());
}

if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-devcards-addons-css"))){
} else {
head.appendChild((function (){var G__23950 = "com-rigsomelight-devcards-addons-css";
var G__23951 = "/* full width code examples */\n\nbody {\n    overflow-x: hidden;\n}\n\n@media (max-width: 1000px) {\n.com-rigsomelight-devcards-card-hide-border\n.com-rigsomelight-devcards_rendered-card\n.com-rigsomelight-devcards-markdown pre {\n    margin-right: -3000px;\n    margin-left: -3000px;\n    padding-right: 3000px;\n    padding-left: 3000px;        \n}\n}\n\n/* default typography */\n.com-rigsomelight-devcards_rendered-card {\n    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;\n    font-size: 16px;\n    line-height: 1.42857143;\n}\n\n.com-rigsomelight-devcards_rendered-card code {\n    font-size: 90%;\n}\n\n.com-rigsomelight-devcards_rendered-card h1,\n.com-rigsomelight-devcards_rendered-card h2,\n.com-rigsomelight-devcards_rendered-card h3,\n.com-rigsomelight-devcards_rendered-card h4,\n.com-rigsomelight-devcards_rendered-card h5 {\n    font-weight: 500;\n}\n\n.com-rigsomelight-devcards_rendered-card a {\n    color: #428bca;\n    text-decoration: none;\n}\n";
return (devcards.system.create_style_element.cljs$core$IFn$_invoke$arity$2 ? devcards.system.create_style_element.cljs$core$IFn$_invoke$arity$2(G__23950,G__23951) : devcards.system.create_style_element.call(null,G__23950,G__23951));
})());
}

if(cljs.core.truth_(devcards.system.get_element_by_id("com-rigsomelight-edn-css"))){
} else {
head.appendChild((function (){var G__23952 = "com-rigsomelight-edn-css";
var G__23953 = ".com-rigsomelight-rendered-edn .collection {\n    display: flex;\n    display: -webkit-flex;\n}\n\n.com-rigsomelight-rendered-edn .keyval {\n    display: flex;\n    display: -webkit-flex;    \n    flex-wrap: wrap;\n    -webkit-flex-wrap: wrap;    \n}\n\n.com-rigsomelight-rendered-edn .keyval > .keyword {\n    color: #a94442; \n}\n\n.com-rigsomelight-rendered-edn .keyval > *:first-child {\n    margin: 0px 3px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;\n}\n\n.com-rigsomelight-rendered-edn .keyval > *:last-child {\n    margin: 0px 3px;\n}\n\n.com-rigsomelight-rendered-edn .opener {\n    color: #999;\n    margin: 0px 4px;\n    flex-shrink: 0;\n    -webkit-flex-shrink: 0;    \n}\n\n.com-rigsomelight-rendered-edn .closer {\n    display: flex;\n    display: -webkit-flex;\n    flex-direction: column-reverse;\n    -webkit-flex-direction: column-reverse;\n    margin: 0px 3px;    \n    color: #999;\n}\n\n.com-rigsomelight-rendered-edn .string {\n    color: #428bca;\n}\n\n.com-rigsomelight-rendered-edn .string .opener,\n.com-rigsomelight-rendered-edn .string .closer {\n    display: inline;\n    margin: 0px;\n    color: #428bca;    \n}\n";
return (devcards.system.create_style_element.cljs$core$IFn$_invoke$arity$2 ? devcards.system.create_style_element.cljs$core$IFn$_invoke$arity$2(G__23952,G__23953) : devcards.system.create_style_element.call(null,G__23952,G__23953));
})());
}

if(cljs.core.truth_((function (){var or__9426__auto__ = devcards.system.get_element_by_id("com-rigsomelight-code-highlighting");
if(cljs.core.truth_(or__9426__auto__)){
return or__9426__auto__;
} else {
return goog.labs.userAgent.device.isMobile();
}
})())){
return null;
} else {
return head.appendChild((function (){var G__23954 = "com-rigsomelight-code-highlighting";
var G__23955 = "!function(e){\"undefined\"!=typeof exports?e(exports):(window.hljs=e({}),\"function\"==typeof define&&define.amd&&define([],function(){return window.hljs}))}(function(e){function n(e){return e.replace(/&/gm,\"&amp;\").replace(/</gm,\"&lt;\").replace(/>/gm,\"&gt;\")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0==t.index}function a(e){var n=(e.className+\" \"+(e.parentNode?e.parentNode.className:\"\")).split(/\\s+/);return n=n.map(function(e){return e.replace(/^lang(uage)?-/,\"\")}),n.filter(function(e){return N(e)||/no(-?)highlight/.test(e)})[0]}function o(e,n){var t={};for(var r in e)t[r]=e[r];if(n)for(var r in n)t[r]=n[r];return t}function i(e){var n=[];return function r(e,a){for(var o=e.firstChild;o;o=o.nextSibling)3==o.nodeType?a+=o.nodeValue.length:1==o.nodeType&&(n.push({event:\"start\",offset:a,node:o}),a=r(o,a),t(o).match(/br|hr|img|input/)||n.push({event:\"stop\",offset:a,node:o}));return a}(e,0),n}function c(e,r,a){function o(){return e.length&&r.length?e[0].offset!=r[0].offset?e[0].offset<r[0].offset?e:r:\"start\"==r[0].event?e:r:e.length?e:r}function i(e){function r(e){return\" \"+e.nodeName+'=\"'+n(e.value)+'\"'}l+=\"<\"+t(e)+Array.prototype.map.call(e.attributes,r).join(\"\")+\">\"}function c(e){l+=\"</\"+t(e)+\">\"}function u(e){(\"start\"==e.event?i:c)(e.node)}for(var s=0,l=\"\",f=[];e.length||r.length;){var g=o();if(l+=n(a.substr(s,g[0].offset-s)),s=g[0].offset,g==e){f.reverse().forEach(c);do u(g.splice(0,1)[0]),g=o();while(g==e&&g.length&&g[0].offset==s);f.reverse().forEach(i)}else\"start\"==g[0].event?f.push(g[0].node):f.pop(),u(g.splice(0,1)[0])}return l+n(a.substr(s))}function u(e){function n(e){return e&&e.source||e}function t(t,r){return RegExp(n(t),\"m\"+(e.cI?\"i\":\"\")+(r?\"g\":\"\"))}function r(a,i){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var c={},u=function(n,t){e.cI&&(t=t.toLowerCase()),t.split(\" \").forEach(function(e){var t=e.split(\"|\");c[t[0]]=[n,t[1]?Number(t[1]):1]})};\"string\"==typeof a.k?u(\"keyword\",a.k):Object.keys(a.k).forEach(function(e){u(e,a.k[e])}),a.k=c}a.lR=t(a.l||/\\b[A-Za-z0-9_]+\\b/,!0),i&&(a.bK&&(a.b=\"\\\\b(\"+a.bK.split(\" \").join(\"|\")+\")\\\\b\"),a.b||(a.b=/\\B|\\b/),a.bR=t(a.b),a.e||a.eW||(a.e=/\\B|\\b/),a.e&&(a.eR=t(a.e)),a.tE=n(a.e)||\"\",a.eW&&i.tE&&(a.tE+=(a.e?\"|\":\"\")+i.tE)),a.i&&(a.iR=t(a.i)),void 0===a.r&&(a.r=1),a.c||(a.c=[]);var s=[];a.c.forEach(function(e){e.v?e.v.forEach(function(n){s.push(o(e,n))}):s.push(\"self\"==e?a:e)}),a.c=s,a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,i);var l=a.c.map(function(e){return e.bK?\"\\\\.?(\"+e.b+\")\\\\.?\":e.b}).concat([a.tE,a.i]).map(n).filter(Boolean);a.t=l.length?t(l.join(\"|\"),!0):{exec:function(){return null}}}}r(e)}function s(e,t,a,o){function i(e,n){for(var t=0;t<n.c.length;t++)if(r(n.c[t].bR,e))return n.c[t]}function c(e,n){return r(e.eR,n)?e:e.eW?c(e.parent,n):void 0}function f(e,n){return!a&&r(n.iR,e)}function g(e,n){var t=x.cI?n[0].toLowerCase():n[0];return e.k.hasOwnProperty(t)&&e.k[t]}function p(e,n,t,r){var a=r?\"\":E.classPrefix,o='<span class=\"'+a,i=t?\"\":\"</span>\";return o+=e+'\">',o+n+i}function d(){if(!w.k)return n(y);var e=\"\",t=0;w.lR.lastIndex=0;for(var r=w.lR.exec(y);r;){e+=n(y.substr(t,r.index-t));var a=g(w,r);a?(B+=a[1],e+=p(a[0],n(r[0]))):e+=n(r[0]),t=w.lR.lastIndex,r=w.lR.exec(y)}return e+n(y.substr(t))}function h(){if(w.sL&&!R[w.sL])return n(y);var e=w.sL?s(w.sL,y,!0,L[w.sL]):l(y);return w.r>0&&(B+=e.r),\"continuous\"==w.subLanguageMode&&(L[w.sL]=e.top),p(e.language,e.value,!1,!0)}function v(){return void 0!==w.sL?h():d()}function b(e,t){var r=e.cN?p(e.cN,\"\",!0):\"\";e.rB?(M+=r,y=\"\"):e.eB?(M+=n(t)+r,y=\"\"):(M+=r,y=t),w=Object.create(e,{parent:{value:w}})}function m(e,t){if(y+=e,void 0===t)return M+=v(),0;var r=i(t,w);if(r)return M+=v(),b(r,t),r.rB?0:t.length;var a=c(w,t);if(a){var o=w;o.rE||o.eE||(y+=t),M+=v();do w.cN&&(M+=\"</span>\"),B+=w.r,w=w.parent;while(w!=a.parent);return o.eE&&(M+=n(t)),y=\"\",a.starts&&b(a.starts,\"\"),o.rE?0:t.length}if(f(t,w))throw new Error('Illegal lexeme \"'+t+'\" for mode \"'+(w.cN||\"<unnamed>\")+'\"');return y+=t,t.length||1}var x=N(e);if(!x)throw new Error('Unknown language: \"'+e+'\"');u(x);for(var w=o||x,L={},M=\"\",k=w;k!=x;k=k.parent)k.cN&&(M=p(k.cN,\"\",!0)+M);var y=\"\",B=0;try{for(var C,j,I=0;;){if(w.t.lastIndex=I,C=w.t.exec(t),!C)break;j=m(t.substr(I,C.index-I),C[0]),I=C.index+j}m(t.substr(I));for(var k=w;k.parent;k=k.parent)k.cN&&(M+=\"</span>\");return{r:B,value:M,language:e,top:w}}catch(A){if(-1!=A.message.indexOf(\"Illegal\"))return{r:0,value:n(t)};throw A}}function l(e,t){t=t||E.languages||Object.keys(R);var r={r:0,value:n(e)},a=r;return t.forEach(function(n){if(N(n)){var t=s(n,e,!1);t.language=n,t.r>a.r&&(a=t),t.r>r.r&&(a=r,r=t)}}),a.language&&(r.second_best=a),r}function f(e){return E.tabReplace&&(e=e.replace(/^((<[^>]+>|\\t)+)/gm,function(e,n){return n.replace(/\\t/g,E.tabReplace)})),E.useBR&&(e=e.replace(/\\n/g,\"<br>\")),e}function g(e,n,t){var r=n?x[n]:t,a=[e.trim()];return e.match(/(\\s|^)hljs(\\s|$)/)||a.push(\"hljs\"),r&&a.push(r),a.join(\" \").trim()}function p(e){var n=a(e);if(!/no(-?)highlight/.test(n)){var t;E.useBR?(t=document.createElementNS(\"http://www.w3.org/1999/xhtml\",\"div\"),t.innerHTML=e.innerHTML.replace(/\\n/g,\"\").replace(/<br[ \\/]*>/g,\"\\n\")):t=e;var r=t.textContent,o=n?s(n,r,!0):l(r),u=i(t);if(u.length){var p=document.createElementNS(\"http://www.w3.org/1999/xhtml\",\"div\");p.innerHTML=o.value,o.value=c(u,i(p),r)}o.value=f(o.value),e.innerHTML=o.value,e.className=g(e.className,n,o.language),e.result={language:o.language,re:o.r},o.second_best&&(e.second_best={language:o.second_best.language,re:o.second_best.r})}}function d(e){E=o(E,e)}function h(){if(!h.called){h.called=!0;var e=document.querySelectorAll(\"pre code\");Array.prototype.forEach.call(e,p)}}function v(){addEventListener(\"DOMContentLoaded\",h,!1),addEventListener(\"load\",h,!1)}function b(n,t){var r=R[n]=t(e);r.aliases&&r.aliases.forEach(function(e){x[e]=n})}function m(){return Object.keys(R)}function N(e){return R[e]||R[x[e]]}var E={classPrefix:\"hljs-\",tabReplace:null,useBR:!1,languages:void 0},R={},x={};return e.highlight=s,e.highlightAuto=l,e.fixMarkup=f,e.highlightBlock=p,e.configure=d,e.initHighlighting=h,e.initHighlightingOnLoad=v,e.registerLanguage=b,e.listLanguages=m,e.getLanguage=N,e.inherit=o,e.IR=\"[a-zA-Z][a-zA-Z0-9_]*\",e.UIR=\"[a-zA-Z_][a-zA-Z0-9_]*\",e.NR=\"\\\\b\\\\d+(\\\\.\\\\d+)?\",e.CNR=\"(\\\\b0[xX][a-fA-F0-9]+|(\\\\b\\\\d+(\\\\.\\\\d*)?|\\\\.\\\\d+)([eE][-+]?\\\\d+)?)\",e.BNR=\"\\\\b(0b[01]+)\",e.RSR=\"!|!=|!==|%|%=|&|&&|&=|\\\\*|\\\\*=|\\\\+|\\\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\\\?|\\\\[|\\\\{|\\\\(|\\\\^|\\\\^=|\\\\||\\\\|=|\\\\|\\\\||~\",e.BE={b:\"\\\\\\\\[\\\\s\\\\S]\",r:0},e.ASM={cN:\"string\",b:\"'\",e:\"'\",i:\"\\\\n\",c:[e.BE]},e.QSM={cN:\"string\",b:'\"',e:'\"',i:\"\\\\n\",c:[e.BE]},e.PWM={b:/\\b(a|an|the|are|I|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such)\\b/},e.CLCM={cN:\"comment\",b:\"//\",e:\"$\",c:[e.PWM]},e.CBCM={cN:\"comment\",b:\"/\\\\*\",e:\"\\\\*/\",c:[e.PWM]},e.HCM={cN:\"comment\",b:\"#\",e:\"$\",c:[e.PWM]},e.NM={cN:\"number\",b:e.NR,r:0},e.CNM={cN:\"number\",b:e.CNR,r:0},e.BNM={cN:\"number\",b:e.BNR,r:0},e.CSSNM={cN:\"number\",b:e.NR+\"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?\",r:0},e.RM={cN:\"regexp\",b:/\\//,e:/\\/[gimuy]*/,i:/\\n/,c:[e.BE,{b:/\\[/,e:/\\]/,r:0,c:[e.BE]}]},e.TM={cN:\"title\",b:e.IR,r:0},e.UTM={cN:\"title\",b:e.UIR,r:0},e});hljs.registerLanguage(\"ruby\",function(e){var b=\"[a-zA-Z_]\\\\w*[!?=]?|[-+~]\\\\@|<<|>>|=~|===?|<=>|[<>]=?|\\\\*\\\\*|[-/+%^&*~`|]|\\\\[\\\\]=?\",r=\"and false then defined module in return redo if BEGIN retry end for true self when next until do begin unless END rescue nil else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor\",c={cN:\"yardoctag\",b:\"@[A-Za-z]+\"},a={cN:\"value\",b:\"#<\",e:\">\"},s={cN:\"comment\",v:[{b:\"#\",e:\"$\",c:[c]},{b:\"^\\\\=begin\",e:\"^\\\\=end\",c:[c],r:10},{b:\"^__END__\",e:\"\\\\n$\"}]},n={cN:\"subst\",b:\"#\\\\{\",e:\"}\",k:r},t={cN:\"string\",c:[e.BE,n],v:[{b:/'/,e:/'/},{b:/\"/,e:/\"/},{b:/`/,e:/`/},{b:\"%[qQwWx]?\\\\(\",e:\"\\\\)\"},{b:\"%[qQwWx]?\\\\[\",e:\"\\\\]\"},{b:\"%[qQwWx]?{\",e:\"}\"},{b:\"%[qQwWx]?<\",e:\">\"},{b:\"%[qQwWx]?/\",e:\"/\"},{b:\"%[qQwWx]?%\",e:\"%\"},{b:\"%[qQwWx]?-\",e:\"-\"},{b:\"%[qQwWx]?\\\\|\",e:\"\\\\|\"},{b:/\\B\\?(\\\\\\d{1,3}|\\\\x[A-Fa-f0-9]{1,2}|\\\\u[A-Fa-f0-9]{4}|\\\\?\\S)\\b/}]},i={cN:\"params\",b:\"\\\\(\",e:\"\\\\)\",k:r},d=[t,a,s,{cN:\"class\",bK:\"class module\",e:\"$|;\",i:/=/,c:[e.inherit(e.TM,{b:\"[A-Za-z_]\\\\w*(::\\\\w+)*(\\\\?|\\\\!)?\"}),{cN:\"inheritance\",b:\"<\\\\s*\",c:[{cN:\"parent\",b:\"(\"+e.IR+\"::)?\"+e.IR}]},s]},{cN:\"function\",bK:\"def\",e:\" |$|;\",r:0,c:[e.inherit(e.TM,{b:b}),i,s]},{cN:\"constant\",b:\"(::)?(\\\\b[A-Z]\\\\w*(::)?)+\",r:0},{cN:\"symbol\",b:e.UIR+\"(\\\\!|\\\\?)?:\",r:0},{cN:\"symbol\",b:\":\",c:[t,{b:b}],r:0},{cN:\"number\",b:\"(\\\\b0[0-7_]+)|(\\\\b0x[0-9a-fA-F_]+)|(\\\\b[1-9][0-9_]*(\\\\.[0-9_]+)?)|[0_]\\\\b\",r:0},{cN:\"variable\",b:\"(\\\\$\\\\W)|((\\\\$|\\\\@\\\\@?)(\\\\w+))\"},{b:\"(\"+e.RSR+\")\\\\s*\",c:[a,s,{cN:\"regexp\",c:[e.BE,n],i:/\\n/,v:[{b:\"/\",e:\"/[a-z]*\"},{b:\"%r{\",e:\"}[a-z]*\"},{b:\"%r\\\\(\",e:\"\\\\)[a-z]*\"},{b:\"%r!\",e:\"![a-z]*\"},{b:\"%r\\\\[\",e:\"\\\\][a-z]*\"}]}],r:0}];n.c=d,i.c=d;var l=\"[>?]>\",u=\"[\\\\w#]+\\\\(\\\\w+\\\\):\\\\d+:\\\\d+>\",N=\"(\\\\w+-)?\\\\d+\\\\.\\\\d+\\\\.\\\\d(p\\\\d+)?[^>]+>\",o=[{b:/^\\s*=>/,cN:\"status\",starts:{e:\"$\",c:d}},{cN:\"prompt\",b:\"^(\"+l+\"|\"+u+\"|\"+N+\")\",starts:{e:\"$\",c:d}}];return{aliases:[\"rb\",\"gemspec\",\"podspec\",\"thor\",\"irb\"],k:r,c:[s].concat(o).concat(d)}});hljs.registerLanguage(\"javascript\",function(r){return{aliases:[\"js\"],k:{keyword:\"in if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const class\",literal:\"true false null undefined NaN Infinity\",built_in:\"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document\"},c:[{cN:\"pi\",r:10,v:[{b:/^\\s*('|\")use strict('|\")/},{b:/^\\s*('|\")use asm('|\")/}]},r.ASM,r.QSM,r.CLCM,r.CBCM,r.CNM,{b:\"(\"+r.RSR+\"|\\\\b(case|return|throw)\\\\b)\\\\s*\",k:\"return throw case\",c:[r.CLCM,r.CBCM,r.RM,{b:/</,e:/>;/,r:0,sL:\"xml\"}],r:0},{cN:\"function\",bK:\"function\",e:/\\{/,eE:!0,c:[r.inherit(r.TM,{b:/[A-Za-z$_][0-9A-Za-z$_]*/}),{cN:\"params\",b:/\\(/,e:/\\)/,c:[r.CLCM,r.CBCM],i:/[\"'\\(]/}],i:/\\[|%/},{b:/\\$[(.]/},{b:\"\\\\.\"+r.IR,r:0}]}});hljs.registerLanguage(\"clojure\",function(e){var t={built_in:\"def cond apply if-not if-let if not not= = < > <= >= == + / * - rem quot neg? pos? delay? symbol? keyword? true? false? integer? empty? coll? list? set? ifn? fn? associative? sequential? sorted? counted? reversible? number? decimal? class? distinct? isa? float? rational? reduced? ratio? odd? even? char? seq? vector? string? map? nil? contains? zero? instance? not-every? not-any? libspec? -> ->> .. . inc compare do dotimes mapcat take remove take-while drop letfn drop-last take-last drop-while while intern condp case reduced cycle split-at split-with repeat replicate iterate range merge zipmap declare line-seq sort comparator sort-by dorun doall nthnext nthrest partition eval doseq await await-for let agent atom send send-off release-pending-sends add-watch mapv filterv remove-watch agent-error restart-agent set-error-handler error-handler set-error-mode! error-mode shutdown-agents quote var fn loop recur throw try monitor-enter monitor-exit defmacro defn defn- macroexpand macroexpand-1 for dosync and or when when-not when-let comp juxt partial sequence memoize constantly complement identity assert peek pop doto proxy defstruct first rest cons defprotocol cast coll deftype defrecord last butlast sigs reify second ffirst fnext nfirst nnext defmulti defmethod meta with-meta ns in-ns create-ns import refer keys select-keys vals key val rseq name namespace promise into transient persistent! conj! assoc! dissoc! pop! disj! use class type num float double short byte boolean bigint biginteger bigdec print-method print-dup throw-if printf format load compile get-in update-in pr pr-on newline flush read slurp read-line subvec with-open memfn time re-find re-groups rand-int rand mod locking assert-valid-fdecl alias resolve ref deref refset swap! reset! set-validator! compare-and-set! alter-meta! reset-meta! commute get-validator alter ref-set ref-history-count ref-min-history ref-max-history ensure sync io! new next conj set! to-array future future-call into-array aset gen-class reduce map filter find empty hash-map hash-set sorted-map sorted-map-by sorted-set sorted-set-by vec vector seq flatten reverse assoc dissoc list disj get union difference intersection extend extend-type extend-protocol int nth delay count concat chunk chunk-buffer chunk-append chunk-first chunk-rest max min dec unchecked-inc-int unchecked-inc unchecked-dec-inc unchecked-dec unchecked-negate unchecked-add-int unchecked-add unchecked-subtract-int unchecked-subtract chunk-next chunk-cons chunked-seq? prn vary-meta lazy-seq spread list* str find-keyword keyword symbol gensym force rationalize\"},r=\"a-zA-Z_\\\\-!.?+*=<>&#'\",n=\"[\"+r+\"][\"+r+\"0-9/;:]*\",a=\"[-+]?\\\\d+(\\\\.\\\\d+)?\",o={b:n,r:0},s={cN:\"number\",b:a,r:0},c=e.inherit(e.QSM,{i:null}),i={cN:\"comment\",b:\";\",e:\"$\",r:0},d={cN:\"literal\",b:/\\b(true|false|nil)\\b/},l={cN:\"collection\",b:\"[\\\\[\\\\{]\",e:\"[\\\\]\\\\}]\"},m={cN:\"comment\",b:\"\\\\^\"+n},p={cN:\"comment\",b:\"\\\\^\\\\{\",e:\"\\\\}\"},u={cN:\"attribute\",b:\"[:]\"+n},f={cN:\"list\",b:\"\\\\(\",e:\"\\\\)\"},h={eW:!0,r:0},y={k:t,l:n,cN:\"keyword\",b:n,starts:h},b=[f,c,m,p,i,u,l,s,d,o];return f.c=[{cN:\"comment\",b:\"comment\"},y,h],h.c=b,l.c=b,{aliases:[\"clj\"],i:/\\S/,c:[f,c,m,p,i,u,l,s,d]}});hljs.registerLanguage(\"bash\",function(e){var t={cN:\"variable\",v:[{b:/\\$[\\w\\d#@][\\w\\d_]*/},{b:/\\$\\{(.*?)\\}/}]},s={cN:\"string\",b:/\"/,e:/\"/,c:[e.BE,t,{cN:\"variable\",b:/\\$\\(/,e:/\\)/,c:[e.BE]}]},a={cN:\"string\",b:/'/,e:/'/};return{aliases:[\"sh\",\"zsh\"],l:/-?[a-z\\.]+/,k:{keyword:\"if then else elif fi for while in do done case esac function\",literal:\"true false\",built_in:\"break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp\",operator:\"-ne -eq -lt -gt -f -d -e -s -l -a\"},c:[{cN:\"shebang\",b:/^#![^\\n]+sh\\s*$/,r:10},{cN:\"function\",b:/\\w[\\w\\d_]*\\s*\\(\\s*\\)\\s*\\{/,rB:!0,c:[e.inherit(e.TM,{b:/\\w[\\w\\d_]*/})],r:0},e.HCM,e.NM,s,a,t]}});hljs.registerLanguage(\"css\",function(e){var c=\"[a-zA-Z-][a-zA-Z0-9_-]*\",a={cN:\"function\",b:c+\"\\\\(\",rB:!0,eE:!0,e:\"\\\\(\"};return{cI:!0,i:\"[=/|']\",c:[e.CBCM,{cN:\"id\",b:\"\\\\#[A-Za-z0-9_-]+\"},{cN:\"class\",b:\"\\\\.[A-Za-z0-9_-]+\",r:0},{cN:\"attr_selector\",b:\"\\\\[\",e:\"\\\\]\",i:\"$\"},{cN:\"pseudo\",b:\":(:)?[a-zA-Z0-9\\\\_\\\\-\\\\+\\\\(\\\\)\\\\\\\"\\\\']+\"},{cN:\"at_rule\",b:\"@(font-face|page)\",l:\"[a-z-]+\",k:\"font-face page\"},{cN:\"at_rule\",b:\"@\",e:\"[{;]\",c:[{cN:\"keyword\",b:/\\S+/},{b:/\\s/,eW:!0,eE:!0,r:0,c:[a,e.ASM,e.QSM,e.CSSNM]}]},{cN:\"tag\",b:c,r:0},{cN:\"rules\",b:\"{\",e:\"}\",i:\"[^\\\\s]\",r:0,c:[e.CBCM,{cN:\"rule\",b:\"[^\\\\s]\",rB:!0,e:\";\",eW:!0,c:[{cN:\"attribute\",b:\"[A-Z\\\\_\\\\.\\\\-]+\",e:\":\",eE:!0,i:\"[^\\\\s]\",starts:{cN:\"value\",eW:!0,eE:!0,c:[a,e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:\"hexcolor\",b:\"#[0-9A-Fa-f]+\"},{cN:\"important\",b:\"!important\"}]}}]}]}]}});hljs.registerLanguage(\"clojure-repl\",function(){return{c:[{cN:\"prompt\",b:/^([\\w.-]+|\\s*#_)=>/,starts:{e:/$/,sL:\"clojure\",subLanguageMode:\"continuous\"}}]}});hljs.registerLanguage(\"markdown\",function(){return{aliases:[\"md\",\"mkdown\",\"mkd\"],c:[{cN:\"header\",v:[{b:\"^#{1,6}\",e:\"$\"},{b:\"^.+?\\\\n[=-]{2,}$\"}]},{b:\"<\",e:\">\",sL:\"xml\",r:0},{cN:\"bullet\",b:\"^([*+-]|(\\\\d+\\\\.))\\\\s+\"},{cN:\"strong\",b:\"[*_]{2}.+?[*_]{2}\"},{cN:\"emphasis\",v:[{b:\"\\\\*.+?\\\\*\"},{b:\"_.+?_\",r:0}]},{cN:\"blockquote\",b:\"^>\\\\s+\",e:\"$\"},{cN:\"code\",v:[{b:\"`.+?`\"},{b:\"^( {4}|\t)\",e:\"$\",r:0}]},{cN:\"horizontal_rule\",b:\"^[-\\\\*]{3,}\",e:\"$\"},{b:\"\\\\[.+?\\\\][\\\\(\\\\[].*?[\\\\)\\\\]]\",rB:!0,c:[{cN:\"link_label\",b:\"\\\\[\",e:\"\\\\]\",eB:!0,rE:!0,r:0},{cN:\"link_url\",b:\"\\\\]\\\\(\",e:\"\\\\)\",eB:!0,eE:!0},{cN:\"link_reference\",b:\"\\\\]\\\\[\",e:\"\\\\]\",eB:!0,eE:!0}],r:10},{b:\"^\\\\[.+\\\\]:\",rB:!0,c:[{cN:\"link_reference\",b:\"\\\\[\",e:\"\\\\]:\",eB:!0,eE:!0,starts:{cN:\"link_url\",e:\"$\"}}]}]}});hljs.registerLanguage(\"xml\",function(){var t=\"[A-Za-z0-9\\\\._:-]+\",e={b:/<\\?(php)?(?!\\w)/,e:/\\?>/,sL:\"php\",subLanguageMode:\"continuous\"},c={eW:!0,i:/</,r:0,c:[e,{cN:\"attribute\",b:t,r:0},{b:\"=\",r:0,c:[{cN:\"value\",c:[e],v:[{b:/\"/,e:/\"/},{b:/'/,e:/'/},{b:/[^\\s\\/>]+/}]}]}]};return{aliases:[\"html\",\"xhtml\",\"rss\",\"atom\",\"xsl\",\"plist\"],cI:!0,c:[{cN:\"doctype\",b:\"<!DOCTYPE\",e:\">\",r:10,c:[{b:\"\\\\[\",e:\"\\\\]\"}]},{cN:\"comment\",b:\"<!--\",e:\"-->\",r:10},{cN:\"cdata\",b:\"<\\\\!\\\\[CDATA\\\\[\",e:\"\\\\]\\\\]>\",r:10},{cN:\"tag\",b:\"<style(?=\\\\s|>|$)\",e:\">\",k:{title:\"style\"},c:[c],starts:{e:\"</style>\",rE:!0,sL:\"css\"}},{cN:\"tag\",b:\"<script(?=\\\\s|>|$)\",e:\">\",k:{title:\"script\"},c:[c],starts:{e:\"</script>\",rE:!0,sL:\"javascript\"}},e,{cN:\"pi\",b:/<\\?\\w+/,e:/\\?>/,r:10},{cN:\"tag\",b:\"</?\",e:\"/?>\",c:[{cN:\"title\",b:/[^ \\/><\\n\\t]+/,r:0},c]}]}});hljs.registerLanguage(\"java\",function(e){var a=e.UIR+\"(<\"+e.UIR+\">)?\",t=\"false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private\",c=\"(\\\\b(0b[01_]+)|\\\\b0[xX][a-fA-F0-9_]+|(\\\\b[\\\\d_]+(\\\\.[\\\\d_]*)?|\\\\.[\\\\d_]+)([eE][-+]?\\\\d+)?)[lLfF]?\",r={cN:\"number\",b:c,r:0};return{aliases:[\"jsp\"],k:t,i:/<\\//,c:[{cN:\"javadoc\",b:\"/\\\\*\\\\*\",e:\"\\\\*/\",r:0,c:[{cN:\"javadoctag\",b:\"(^|\\\\s)@[A-Za-z]+\"}]},e.CLCM,e.CBCM,e.ASM,e.QSM,{cN:\"class\",bK:\"class interface\",e:/[{;=]/,eE:!0,k:\"class interface\",i:/[:\"\\[\\]]/,c:[{bK:\"extends implements\"},e.UTM]},{bK:\"new throw return\",r:0},{cN:\"function\",b:\"(\"+a+\"\\\\s+)+\"+e.UIR+\"\\\\s*\\\\(\",rB:!0,e:/[{;=]/,eE:!0,k:t,c:[{b:e.UIR+\"\\\\s*\\\\(\",rB:!0,r:0,c:[e.UTM]},{cN:\"params\",b:/\\(/,e:/\\)/,k:t,r:0,c:[e.ASM,e.QSM,e.CNM,e.CBCM]},e.CLCM,e.CBCM]},r,{cN:\"annotation\",b:\"@[A-Za-z]+\"}]}});hljs.registerLanguage(\"json\",function(e){var t={literal:\"true false null\"},i=[e.QSM,e.CNM],l={cN:\"value\",e:\",\",eW:!0,eE:!0,c:i,k:t},c={b:\"{\",e:\"}\",c:[{cN:\"attribute\",b:'\\\\s*\"',e:'\"\\\\s*:\\\\s*',eB:!0,eE:!0,c:[e.BE],i:\"\\\\n\",starts:l}],i:\"\\\\S\"},n={b:\"\\\\[\",e:\"\\\\]\",c:[e.inherit(l,{cN:null})],i:\"\\\\S\"};return i.splice(i.length,0,c,n),{c:i,k:t,i:\"\\\\S\"}});";
return (devcards.system.create_script_element.cljs$core$IFn$_invoke$arity$2 ? devcards.system.create_script_element.cljs$core$IFn$_invoke$arity$2(G__23954,G__23955) : devcards.system.create_script_element.call(null,G__23954,G__23955));
})());
}
} else {
return null;
}
});
devcards.system.render_base_if_necessary_BANG_ = (function devcards$system$render_base_if_necessary_BANG_(){
devcards.system.add_css_if_necessary_BANG_();

if(cljs.core.truth_(devcards.system.devcards_app_node())){
return null;
} else {
var el = document.createElement("div");
el.id = devcards.system.devcards_app_element_id;

return devcards.system.prepend_child(document.body,el);
}
});

if(typeof devcards.system.history !== 'undefined'){
} else {
devcards.system.history = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_())?(function (){var h = (new goog.History());
h.setEnabled(true);

return h;
})():null);
}
devcards.system.path__GT_token = (function devcards$system$path__GT_token(path){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("!/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,path)))].join('');
});
devcards.system.token__GT_path = (function devcards$system$token__GT_path(token){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace_first(clojure.string.replace_first(token,/#/,""),/!\//,""),/\//)));
});
devcards.system.hash_navigate = (function devcards$system$hash_navigate(path){
return devcards.system.history.setToken(devcards.system.path__GT_token(path));
});
devcards.system.hash_routing_init = (function devcards$system$hash_routing_init(state_atom){
var G__23960_23963 = devcards.system.history;
var G__23961_23964 = goog.history.EventType.NAVIGATE;
var G__23962_23965 = ((function (G__23960_23963,G__23961_23964){
return (function (p1__23956_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,devcards.system.set_current_path,devcards.system.token__GT_path(p1__23956_SHARP_.token));
});})(G__23960_23963,G__23961_23964))
;
goog.events.listen(G__23960_23963,G__23961_23964,G__23962_23965);

var temp__6738__auto__ = (location["hash"]);
if(cljs.core.truth_(temp__6738__auto__)){
var token = temp__6738__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,devcards.system.set_current_path,devcards.system.token__GT_path(token));
} else {
return null;
}
});
devcards.system.devcard_QMARK_ = (function devcards$system$devcard_QMARK_(d){
var and__9414__auto__ = cljs.core.map_QMARK_(d);
if(and__9414__auto__){
var and__9414__auto____$1 = cljs.core.cst$kw$func.cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__9414__auto____$1)){
var and__9414__auto____$2 = cljs.core.cst$kw$path.cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__9414__auto____$2)){
var and__9414__auto____$3 = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(d);
if(cljs.core.truth_(and__9414__auto____$3)){
return d;
} else {
return and__9414__auto____$3;
}
} else {
return and__9414__auto____$2;
}
} else {
return and__9414__auto____$1;
}
} else {
return and__9414__auto__;
}
});
devcards.system.path_collision = (function devcards$system$path_collision(state,path){
var temp__6736__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$path_DASH_collision_DASH_count.cljs$core$IFn$_invoke$arity$1(state),path);
if(cljs.core.truth_(temp__6736__auto__)){
var c = temp__6736__auto__;
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(cljs.core.vec(path)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(cljs.core.last(path))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join(''))], null)));
} else {
return path;
}
});
devcards.system.register_collision = (function devcards$system$register_collision(state,path){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_DASH_collision_DASH_count,path], null),cljs.core.inc);
});
if(typeof devcards.system.dev_trans !== 'undefined'){
} else {
devcards.system.dev_trans = (function (){var method_table__10457__auto__ = (function (){var G__23966 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23966) : cljs.core.atom.call(null,G__23966));
})();
var prefer_table__10458__auto__ = (function (){var G__23967 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23967) : cljs.core.atom.call(null,G__23967));
})();
var method_cache__10459__auto__ = (function (){var G__23968 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23968) : cljs.core.atom.call(null,G__23968));
})();
var cached_hierarchy__10460__auto__ = (function (){var G__23969 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23969) : cljs.core.atom.call(null,G__23969));
})();
var hierarchy__10461__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("devcards.system","dev-trans"),cljs.core.first,cljs.core.cst$kw$default,hierarchy__10461__auto__,method_table__10457__auto__,prefer_table__10458__auto__,method_cache__10459__auto__,cached_hierarchy__10460__auto__));
})();
}
devcards.system.dev_trans.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (msg,state){
return state;
}));
devcards.system.dev_trans.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$register_DASH_card,(function (p__23970,state){
var vec__23971 = p__23970;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23971,(0),null);
var map__23974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23971,(1),null);
var map__23974__$1 = ((((!((map__23974 == null)))?((((map__23974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23974):map__23974);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23974__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23974__$1,cljs.core.cst$kw$options);
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23974__$1,cljs.core.cst$kw$func);
var position = cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(state);
var new_path = devcards.system.path_collision(state,path);
return devcards.system.register_collision(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$position], null),cljs.core.inc),cljs.core.cons(cljs.core.cst$kw$cards,new_path),((function (position,new_path,vec__23971,_,map__23974,map__23974__$1,path,options,func){
return (function (dc){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,new_path,cljs.core.cst$kw$func,func,cljs.core.cst$kw$position,position], null);
});})(position,new_path,vec__23971,_,map__23974,map__23974__$1,path,options,func))
),path);
}));
devcards.system.devcard_initial_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$current_DASH_path,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$position,(0),cljs.core.cst$kw$cards,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$path_DASH_collision_DASH_count,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$base_DASH_card_DASH_options,new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$frame,true,cljs.core.cst$kw$heading,true,cljs.core.cst$kw$padding,true,cljs.core.cst$kw$hidden,false,cljs.core.cst$kw$inspect_DASH_data,false,cljs.core.cst$kw$watch_DASH_atom,true,cljs.core.cst$kw$history,false], null)], null);
if(typeof devcards.system.app_state !== 'undefined'){
} else {
devcards.system.app_state = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(devcards.system.devcard_initial_data) : cljs.core.atom.call(null,devcards.system.devcard_initial_data));
}
devcards.system.valid_path_QMARK_ = (function devcards$system$valid_path_QMARK_(state,path){
var or__9426__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,path);
if(or__9426__auto__){
return or__9426__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1(state),path);
}
});
devcards.system.enforce_valid_path = (function devcards$system$enforce_valid_path(state,path){
return cljs.core.vec((cljs.core.truth_(devcards.system.valid_path_QMARK_(state,path))?path:cljs.core.PersistentVector.EMPTY));
});
devcards.system.add_to_current_path = (function devcards$system$add_to_current_path(p__23976,path){
var map__23979 = p__23976;
var map__23979__$1 = ((((!((map__23979 == null)))?((((map__23979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23979.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23979):map__23979);
var state = map__23979__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23979__$1,cljs.core.cst$kw$current_DASH_path);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$current_DASH_path,devcards.system.enforce_valid_path(state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_path,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(path))));
});
devcards.system.set_current_path = (function devcards$system$set_current_path(p__23981,path){
var map__23984 = p__23981;
var map__23984__$1 = ((((!((map__23984 == null)))?((((map__23984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23984.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23984):map__23984);
var state = map__23984__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23984__$1,cljs.core.cst$kw$current_DASH_path);
var path__$1 = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,path));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_path,path__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,cljs.core.cst$kw$current_DASH_path,devcards.system.enforce_valid_path(state,path__$1));
} else {
return state;
}
});
devcards.system.set_current_path_BANG_ = (function devcards$system$set_current_path_BANG_(state_atom,path){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_atom,devcards.system.set_current_path,path);

return devcards.system.hash_navigate(path);
});
devcards.system.current_page = (function devcards$system$current_page(data){
var and__9414__auto__ = cljs.core.cst$kw$current_DASH_path.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__9414__auto__)){
var and__9414__auto____$1 = cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(and__9414__auto____$1)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1(data),cljs.core.cst$kw$current_DASH_path.cljs$core$IFn$_invoke$arity$1(data));
} else {
return and__9414__auto____$1;
}
} else {
return and__9414__auto__;
}
});
devcards.system.display_single_card_QMARK_ = (function devcards$system$display_single_card_QMARK_(state){
return devcards.system.devcard_QMARK_(devcards.system.current_page(state));
});
devcards.system.display_dir_paths = (function devcards$system$display_dir_paths(state){
var cur = devcards.system.current_page(state);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(devcards.system.devcard_QMARK_,cljs.core.second)),cur);
});
devcards.system.display_cards = (function devcards$system$display_cards(cur){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2((function (p1__23986_SHARP_){
var and__9414__auto__ = cljs.core.not(cljs.core.cst$kw$delete_DASH_card.cljs$core$IFn$_invoke$arity$1(p1__23986_SHARP_));
if(and__9414__auto__){
return devcards.system.devcard_QMARK_(p1__23986_SHARP_);
} else {
return and__9414__auto__;
}
}),cljs.core.second),cur);
});
devcards.system._STAR_devcard_data_STAR_ = null;
devcards.system.card_template = (function devcards$system$card_template(state_atom,p__23987){
var map__23994 = p__23987;
var map__23994__$1 = ((((!((map__23994 == null)))?((((map__23994.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23994.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23994):map__23994);
var card = map__23994__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23994__$1,cljs.core.cst$kw$path);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23994__$1,cljs.core.cst$kw$options);
var func = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23994__$1,cljs.core.cst$kw$func);
var G__23996 = "div";
var G__23997 = ({"key": devcards.system.path__GT_unique_card_id(path), "className": "com-rigsomelight-devcard"});
var G__23998 = sablono.interpreter.interpret((function (){var _STAR_devcard_data_STAR_23999 = devcards.system._STAR_devcard_data_STAR_;
devcards.system._STAR_devcard_data_STAR_ = card;

try{return (func.cljs$core$IFn$_invoke$arity$0 ? func.cljs$core$IFn$_invoke$arity$0() : func.call(null));
}finally {devcards.system._STAR_devcard_data_STAR_ = _STAR_devcard_data_STAR_23999;
}})());
return React.createElement(G__23996,G__23997,G__23998);
});
devcards.system.render_cards = (function devcards$system$render_cards(cards,state_atom){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(devcards.system.card_template,state_atom),cljs.core.second),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$position,cljs.core.second),cards));
});
devcards.system.main_cards_template = (function devcards$system$main_cards_template(state_atom){
var data = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_atom) : cljs.core.deref.call(null,state_atom));
if(cljs.core.truth_(devcards.system.display_single_card_QMARK_(data))){
return devcards.system.card_template(state_atom,devcards.system.current_page(data));
} else {
return devcards.system.render_cards(devcards.system.display_cards(devcards.system.current_page(data)),state_atom);
}
});
devcards.system.breadcrumbs = (function devcards$system$breadcrumbs(p__24000){
var map__24003 = p__24000;
var map__24003__$1 = ((((!((map__24003 == null)))?((((map__24003.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24003.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__24003):map__24003);
var state = map__24003__$1;
var current_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24003__$1,cljs.core.cst$kw$current_DASH_path);
var cpath = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.cons(cljs.core.cst$kw$devcards,current_path));
var crumbs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.last,cljs.core.rest),cljs.core.rest(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(((function (cpath,map__24003,map__24003__$1,state,current_path){
return (function (i,v){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),i);
});})(cpath,map__24003,map__24003__$1,state,current_path))
,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(cpath) + (1)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.vec(cpath))))));
return crumbs;
});
devcards.system.breadcrumbs_templ = (function devcards$system$breadcrumbs_templ(crumbs,state_atom){
var counter = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
var sep_fn = ((function (counter){
return (function (_){
var G__24022 = "span";
var G__24023 = ({"key": (function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(counter,cljs.core.inc);

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(counter) : cljs.core.deref.call(null,counter));
})()
, "className": "com-rigsomelight-devcards-breadcrumb-sep"});
var G__24024 = "/";
return React.createElement(G__24022,G__24023,G__24024);
});})(counter))
;
var G__24025 = "div";
var G__24026 = ({"key": "breadcrumbs-templ", "className": "com-rigsomelight-devcards-card-base com-rigsomelight-devcards-breadcrumbs com-rigsomelight-devcards-typog"});
var G__24027 = sablono.interpreter.interpret(cljs.core.rest(cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate(sep_fn,sep_fn(null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__24025,G__24026,counter,sep_fn){
return (function (p__24029){
var vec__24030 = p__24029;
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24030,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24030,(1),null);
var G__24033 = "span";
var G__24034 = ({"style": ({"display": "inline-block"}), "key": devcards.system.path__GT_unique_card_id(path)});
var G__24035 = (function (){var G__24036 = "a";
var G__24037 = ({"href": "#", "onClick": devcards.system.prevent__GT_(((function (G__24036,G__24033,G__24034,vec__24030,n,path,G__24025,G__24026,counter,sep_fn){
return (function (){
return devcards.system.set_current_path_BANG_(state_atom,path);
});})(G__24036,G__24033,G__24034,vec__24030,n,path,G__24025,G__24026,counter,sep_fn))
), "className": "com-rigsomelight-devcards_set-current-path"});
var G__24038 = sablono.interpreter.interpret([cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''));
return React.createElement(G__24036,G__24037,G__24038);
})();
return React.createElement(G__24033,G__24034,G__24035);
});})(G__24025,G__24026,counter,sep_fn))
,crumbs))));
var G__24028 = sablono.interpreter.interpret((devcards.system.cljs_logo.cljs$core$IFn$_invoke$arity$0 ? devcards.system.cljs_logo.cljs$core$IFn$_invoke$arity$0() : devcards.system.cljs_logo.call(null)));
return React.createElement(G__24025,G__24026,G__24027,G__24028);
});
devcards.system.navigate_to_path = (function devcards$system$navigate_to_path(key,state_atom){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_atom,(function (s){
var new_s = devcards.system.add_to_current_path(s,key);
devcards.system.hash_navigate(cljs.core.cst$kw$current_DASH_path.cljs$core$IFn$_invoke$arity$1(new_s));

return new_s;
}));
});
devcards.system.dir_links = (function devcards$system$dir_links(dirs,state_atom){
if(cljs.core.empty_QMARK_(dirs)){
return null;
} else {
var attrs24059 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__24060){
var vec__24061 = p__24060;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24061,(0),null);
var child_tree = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24061,(1),null);
var G__24064 = "a";
var G__24065 = ({"href": "#", "key": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''), "onClick": devcards.system.prevent__GT_(((function (G__24064,vec__24061,key,child_tree){
return (function (e){
return devcards.system.navigate_to_path(key,state_atom);
});})(G__24064,vec__24061,key,child_tree))
), "className": "com-rigsomelight-devcards-list-group-item"});
var G__24066 = (function (){var G__24068 = "span";
var G__24069 = ({"style": ({"float": "right"}), "className": "com-rigsomelight-devcards-badge"});
var G__24070 = sablono.interpreter.interpret(cljs.core.count(child_tree));
return React.createElement(G__24068,G__24069,G__24070);
})();
var G__24067 = (function (){var G__24071 = "span";
var G__24072 = null;
var G__24073 = " ";
var G__24074 = sablono.interpreter.interpret(cljs.core.name(key));
return React.createElement(G__24071,G__24072,G__24073,G__24074);
})();
return React.createElement(G__24064,G__24065,G__24066,G__24067);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p__24075){
var vec__24076 = p__24075;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24076,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24076,(1),null);
return cljs.core.name(key);
}),dirs));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs24059))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-list-group","com-rigsomelight-devcards-typog"], null)], null),attrs24059], 0))):({"className": "com-rigsomelight-devcards-list-group com-rigsomelight-devcards-typog"})),((cljs.core.map_QMARK_(attrs24059))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24059)], null)));
}
});
devcards.system.main_template = (function devcards$system$main_template(state_atom){
var data = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state_atom) : cljs.core.deref.call(null,state_atom));
var G__24088 = "div";
var G__24089 = ({"className": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("com-rigsomelight-devcards-base "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__6738__auto__ = cljs.core.first(cljs.core.cst$kw$current_DASH_path.cljs$core$IFn$_invoke$arity$1(data));
if(cljs.core.truth_(temp__6738__auto__)){
var n = temp__6738__auto__;
return clojure.string.replace(cljs.core.name(n),".","-");
} else {
return null;
}
})())].join('')});
var G__24090 = (function (){var attrs24085 = (function (){var temp__6738__auto__ = devcards.system.breadcrumbs(data);
if(cljs.core.truth_(temp__6738__auto__)){
var crumbs = temp__6738__auto__;
return devcards.system.breadcrumbs_templ(crumbs,state_atom);
} else {
return null;
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs24085))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-container"], null)], null),attrs24085], 0))):({"className": "com-rigsomelight-devcards-container"})),((cljs.core.map_QMARK_(attrs24085))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret((cljs.core.truth_(devcards.system.display_single_card_QMARK_(data))?null:(function (){var dir_paths = devcards.system.display_dir_paths(data);
return devcards.system.dir_links(dir_paths,state_atom);
})())),(function (){var attrs24086 = devcards.system.main_cards_template(state_atom);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs24086))?sablono.interpreter.attributes(attrs24086):null),((cljs.core.map_QMARK_(attrs24086))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24086)], null)));
})()], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24085),sablono.interpreter.interpret((cljs.core.truth_(devcards.system.display_single_card_QMARK_(data))?null:(function (){var dir_paths = devcards.system.display_dir_paths(data);
return devcards.system.dir_links(dir_paths,state_atom);
})())),(function (){var attrs24087 = devcards.system.main_cards_template(state_atom);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs24087))?sablono.interpreter.attributes(attrs24087):null),((cljs.core.map_QMARK_(attrs24087))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs24087)], null)));
})()], null)));
})();
return React.createElement(G__24088,G__24089,G__24090);
});
var base__23924__auto___24095 = ({"componentDidMount": (function (){
var this$ = this;
return cljs.core.add_watch(devcards.system.app_state,cljs.core.cst$kw$renderer_DASH_watch,((function (this$){
return (function (_,___$1,___$2,___$3){
return this$.forceUpdate();
});})(this$))
);
}), "render": (function (){
return devcards.system.main_template(devcards.system.app_state);
})});
if(typeof devcards.system.DevcardsRoot !== 'undefined'){
} else {
devcards.system.DevcardsRoot = React.createClass(base__23924__auto___24095);
}

var seq__24091_24096 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.list(cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_shouldComponentUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillReceiveProps,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidMount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentDidUpdate,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_componentWillUnmount,cljs.core.cst$sym$cljs_DASH_react_DASH_reload$core_SLASH_render)));
var chunk__24092_24097 = null;
var count__24093_24098 = (0);
var i__24094_24099 = (0);
while(true){
if((i__24094_24099 < count__24093_24098)){
var property__23925__auto___24100 = chunk__24092_24097.cljs$core$IIndexed$_nth$arity$2(null,i__24094_24099);
if(cljs.core.truth_((base__23924__auto___24095[property__23925__auto___24100]))){
(devcards.system.DevcardsRoot.prototype[property__23925__auto___24100] = (base__23924__auto___24095[property__23925__auto___24100]));
} else {
}

var G__24101 = seq__24091_24096;
var G__24102 = chunk__24092_24097;
var G__24103 = count__24093_24098;
var G__24104 = (i__24094_24099 + (1));
seq__24091_24096 = G__24101;
chunk__24092_24097 = G__24102;
count__24093_24098 = G__24103;
i__24094_24099 = G__24104;
continue;
} else {
var temp__6738__auto___24105 = cljs.core.seq(seq__24091_24096);
if(temp__6738__auto___24105){
var seq__24091_24106__$1 = temp__6738__auto___24105;
if(cljs.core.chunked_seq_QMARK_(seq__24091_24106__$1)){
var c__10337__auto___24107 = cljs.core.chunk_first(seq__24091_24106__$1);
var G__24108 = cljs.core.chunk_rest(seq__24091_24106__$1);
var G__24109 = c__10337__auto___24107;
var G__24110 = cljs.core.count(c__10337__auto___24107);
var G__24111 = (0);
seq__24091_24096 = G__24108;
chunk__24092_24097 = G__24109;
count__24093_24098 = G__24110;
i__24094_24099 = G__24111;
continue;
} else {
var property__23925__auto___24112 = cljs.core.first(seq__24091_24106__$1);
if(cljs.core.truth_((base__23924__auto___24095[property__23925__auto___24112]))){
(devcards.system.DevcardsRoot.prototype[property__23925__auto___24112] = (base__23924__auto___24095[property__23925__auto___24112]));
} else {
}

var G__24113 = cljs.core.next(seq__24091_24106__$1);
var G__24114 = null;
var G__24115 = (0);
var G__24116 = (0);
seq__24091_24096 = G__24113;
chunk__24092_24097 = G__24114;
count__24093_24098 = G__24115;
i__24094_24099 = G__24116;
continue;
}
} else {
}
}
break;
}
devcards.system.renderer = (function devcards$system$renderer(state_atom){
var G__24119 = React.createElement(devcards.system.DevcardsRoot);
var G__24120 = devcards.system.devcards_app_node();
return ReactDOM.render(G__24119,G__24120);
});
devcards.system.merge_in_new_data = (function devcards$system$merge_in_new_data(state,new_state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.cst$kw$path_DASH_collision_DASH_count,cljs.core.PersistentArrayMap.EMPTY,cljs.core.array_seq([cljs.core.cst$kw$position,cljs.core.cst$kw$position.cljs$core$IFn$_invoke$arity$1(new_state),cljs.core.cst$kw$cards,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1(state),cljs.core.cst$kw$cards.cljs$core$IFn$_invoke$arity$1(new_state)], 0))], 0));
});
/**
 * Run sequential messages off the books outside of the atom and
 * then difference the result so we can only display the new cards
 * that have arrived. This prevents multiple renders and allows us
 * to delete cards live.
 */
devcards.system.off_the_books = (function devcards$system$off_the_books(channel,start_data,first_message){
var initial_data = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(start_data,cljs.core.cst$kw$path_DASH_collision_DASH_count,cljs.core.PersistentArrayMap.EMPTY),cljs.core.cst$kw$cards);
var c__19950__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19950__auto__,initial_data){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (c__19950__auto__,initial_data){
return (function (state_24247){
var state_val_24248 = (state_24247[(1)]);
if((state_val_24248 === (7))){
var inst_24243 = (state_24247[(2)]);
var state_24247__$1 = state_24247;
var statearr_24249_24279 = state_24247__$1;
(statearr_24249_24279[(2)] = inst_24243);

(statearr_24249_24279[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24248 === (1))){
var inst_24200 = (devcards.system.dev_trans.cljs$core$IFn$_invoke$arity$2 ? devcards.system.dev_trans.cljs$core$IFn$_invoke$arity$2(first_message,initial_data) : devcards.system.dev_trans.call(null,first_message,initial_data));
var inst_24201 = inst_24200;
var state_24247__$1 = (function (){var statearr_24250 = state_24247;
(statearr_24250[(7)] = inst_24201);

return statearr_24250;
})();
var statearr_24251_24280 = state_24247__$1;
(statearr_24251_24280[(2)] = null);

(statearr_24251_24280[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24248 === (4))){
var inst_24208 = (state_24247[(8)]);
var inst_24208__$1 = (state_24247[(2)]);
var state_24247__$1 = (function (){var statearr_24252 = state_24247;
(statearr_24252[(8)] = inst_24208__$1);

return statearr_24252;
})();
if(cljs.core.truth_(inst_24208__$1)){
var statearr_24253_24281 = state_24247__$1;
(statearr_24253_24281[(1)] = (5));

} else {
var statearr_24254_24282 = state_24247__$1;
(statearr_24254_24282[(1)] = (6));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24248 === (15))){
var state_24247__$1 = state_24247;
var statearr_24255_24283 = state_24247__$1;
(statearr_24255_24283[(2)] = null);

(statearr_24255_24283[(1)] = (16));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24248 === (13))){
var inst_24238 = (state_24247[(2)]);
var state_24247__$1 = state_24247;
var statearr_24256_24284 = state_24247__$1;
(statearr_24256_24284[(2)] = inst_24238);

(statearr_24256_24284[(1)] = (10));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24248 === (6))){
var state_24247__$1 = state_24247;
var statearr_24257_24285 = state_24247__$1;
(statearr_24257_24285[(2)] = null);

(statearr_24257_24285[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24248 === (3))){
var inst_24245 = (state_24247[(2)]);
var state_24247__$1 = state_24247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24247__$1,inst_24245);
} else {
if((state_val_24248 === (12))){
var state_24247__$1 = state_24247;
var statearr_24258_24286 = state_24247__$1;
(statearr_24258_24286[(1)] = (14));



return cljs.core.cst$kw$recur;
} else {
if((state_val_24248 === (2))){
var inst_24203 = (state_24247[(9)]);
var inst_24203__$1 = cljs.core.async.timeout((500));
var inst_24204 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24205 = [channel,inst_24203__$1];
var inst_24206 = (new cljs.core.PersistentVector(null,2,(5),inst_24204,inst_24205,null));
var state_24247__$1 = (function (){var statearr_24260 = state_24247;
(statearr_24260[(9)] = inst_24203__$1);

return statearr_24260;
})();
return cljs.core.async.ioc_alts_BANG_(state_24247__$1,(4),inst_24206);
} else {
if((state_val_24248 === (11))){
var inst_24201 = (state_24247[(7)]);
var inst_24226 = devcards.system.merge_in_new_data(start_data,inst_24201);
var state_24247__$1 = state_24247;
var statearr_24261_24287 = state_24247__$1;
(statearr_24261_24287[(2)] = inst_24226);

(statearr_24261_24287[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24248 === (9))){
var inst_24217 = (state_24247[(10)]);
var inst_24224 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24217,cljs.core.cst$kw$jsreload);
var state_24247__$1 = state_24247;
if(inst_24224){
var statearr_24262_24288 = state_24247__$1;
(statearr_24262_24288[(1)] = (11));

} else {
var statearr_24263_24289 = state_24247__$1;
(statearr_24263_24289[(1)] = (12));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24248 === (5))){
var inst_24203 = (state_24247[(9)]);
var inst_24208 = (state_24247[(8)]);
var inst_24216 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24208,(0),null);
var inst_24217 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24216,(0),null);
var inst_24218 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24216,(1),null);
var inst_24219 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24208,(1),null);
var inst_24220 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24219,inst_24203);
var state_24247__$1 = (function (){var statearr_24264 = state_24247;
(statearr_24264[(10)] = inst_24217);

(statearr_24264[(11)] = inst_24218);

return statearr_24264;
})();
if(inst_24220){
var statearr_24265_24290 = state_24247__$1;
(statearr_24265_24290[(1)] = (8));

} else {
var statearr_24266_24291 = state_24247__$1;
(statearr_24266_24291[(1)] = (9));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24248 === (14))){
var inst_24201 = (state_24247[(7)]);
var inst_24217 = (state_24247[(10)]);
var inst_24218 = (state_24247[(11)]);
var inst_24229 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24230 = [inst_24217,inst_24218];
var inst_24231 = (new cljs.core.PersistentVector(null,2,(5),inst_24229,inst_24230,null));
var inst_24232 = (devcards.system.dev_trans.cljs$core$IFn$_invoke$arity$2 ? devcards.system.dev_trans.cljs$core$IFn$_invoke$arity$2(inst_24231,inst_24201) : devcards.system.dev_trans.call(null,inst_24231,inst_24201));
var inst_24201__$1 = inst_24232;
var state_24247__$1 = (function (){var statearr_24267 = state_24247;
(statearr_24267[(7)] = inst_24201__$1);

return statearr_24267;
})();
var statearr_24268_24292 = state_24247__$1;
(statearr_24268_24292[(2)] = null);

(statearr_24268_24292[(1)] = (2));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24248 === (16))){
var inst_24236 = (state_24247[(2)]);
var state_24247__$1 = state_24247;
var statearr_24269_24293 = state_24247__$1;
(statearr_24269_24293[(2)] = inst_24236);

(statearr_24269_24293[(1)] = (13));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24248 === (10))){
var inst_24240 = (state_24247[(2)]);
var state_24247__$1 = state_24247;
var statearr_24270_24294 = state_24247__$1;
(statearr_24270_24294[(2)] = inst_24240);

(statearr_24270_24294[(1)] = (7));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24248 === (8))){
var inst_24201 = (state_24247[(7)]);
var inst_24222 = devcards.system.merge_in_new_data(start_data,inst_24201);
var state_24247__$1 = state_24247;
var statearr_24271_24295 = state_24247__$1;
(statearr_24271_24295[(2)] = inst_24222);

(statearr_24271_24295[(1)] = (10));


return cljs.core.cst$kw$recur;
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
});})(c__19950__auto__,initial_data))
;
return ((function (switch__19824__auto__,c__19950__auto__,initial_data){
return (function() {
var devcards$system$off_the_books_$_state_machine__19825__auto__ = null;
var devcards$system$off_the_books_$_state_machine__19825__auto____0 = (function (){
var statearr_24275 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24275[(0)] = devcards$system$off_the_books_$_state_machine__19825__auto__);

(statearr_24275[(1)] = (1));

return statearr_24275;
});
var devcards$system$off_the_books_$_state_machine__19825__auto____1 = (function (state_24247){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_24247);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e24276){if((e24276 instanceof Object)){
var ex__19828__auto__ = e24276;
var statearr_24277_24296 = state_24247;
(statearr_24277_24296[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24247);

return cljs.core.cst$kw$recur;
} else {
throw e24276;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__24297 = state_24247;
state_24247 = G__24297;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
devcards$system$off_the_books_$_state_machine__19825__auto__ = function(state_24247){
switch(arguments.length){
case 0:
return devcards$system$off_the_books_$_state_machine__19825__auto____0.call(this);
case 1:
return devcards$system$off_the_books_$_state_machine__19825__auto____1.call(this,state_24247);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
devcards$system$off_the_books_$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$off_the_books_$_state_machine__19825__auto____0;
devcards$system$off_the_books_$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$off_the_books_$_state_machine__19825__auto____1;
return devcards$system$off_the_books_$_state_machine__19825__auto__;
})()
;})(switch__19824__auto__,c__19950__auto__,initial_data))
})();
var state__19952__auto__ = (function (){var statearr_24278 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_24278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto__);

return statearr_24278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(c__19950__auto__,initial_data))
);

return c__19950__auto__;
});
devcards.system.load_data_from_channel_BANG_ = (function devcards$system$load_data_from_channel_BANG_(channel){
var c__19950__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19950__auto__){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (c__19950__auto__){
return (function (state_24321){
var state_val_24322 = (state_24321[(1)]);
if((state_val_24322 === (1))){
var inst_24314 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state));
var inst_24315 = cljs.core.PersistentVector.EMPTY;
var inst_24316 = devcards.system.off_the_books(channel,inst_24314,inst_24315);
var state_24321__$1 = state_24321;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24321__$1,(2),inst_24316);
} else {
if((state_val_24322 === (2))){
var inst_24318 = (state_24321[(2)]);
var inst_24319 = (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.system.app_state,inst_24318) : cljs.core.reset_BANG_.call(null,devcards.system.app_state,inst_24318));
var state_24321__$1 = state_24321;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24321__$1,inst_24319);
} else {
return null;
}
}
});})(c__19950__auto__))
;
return ((function (switch__19824__auto__,c__19950__auto__){
return (function() {
var devcards$system$load_data_from_channel_BANG__$_state_machine__19825__auto__ = null;
var devcards$system$load_data_from_channel_BANG__$_state_machine__19825__auto____0 = (function (){
var statearr_24326 = [null,null,null,null,null,null,null];
(statearr_24326[(0)] = devcards$system$load_data_from_channel_BANG__$_state_machine__19825__auto__);

(statearr_24326[(1)] = (1));

return statearr_24326;
});
var devcards$system$load_data_from_channel_BANG__$_state_machine__19825__auto____1 = (function (state_24321){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_24321);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e24327){if((e24327 instanceof Object)){
var ex__19828__auto__ = e24327;
var statearr_24328_24330 = state_24321;
(statearr_24328_24330[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24321);

return cljs.core.cst$kw$recur;
} else {
throw e24327;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__24331 = state_24321;
state_24321 = G__24331;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
devcards$system$load_data_from_channel_BANG__$_state_machine__19825__auto__ = function(state_24321){
switch(arguments.length){
case 0:
return devcards$system$load_data_from_channel_BANG__$_state_machine__19825__auto____0.call(this);
case 1:
return devcards$system$load_data_from_channel_BANG__$_state_machine__19825__auto____1.call(this,state_24321);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
devcards$system$load_data_from_channel_BANG__$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$load_data_from_channel_BANG__$_state_machine__19825__auto____0;
devcards$system$load_data_from_channel_BANG__$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$load_data_from_channel_BANG__$_state_machine__19825__auto____1;
return devcards$system$load_data_from_channel_BANG__$_state_machine__19825__auto__;
})()
;})(switch__19824__auto__,c__19950__auto__))
})();
var state__19952__auto__ = (function (){var statearr_24329 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_24329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto__);

return statearr_24329;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(c__19950__auto__))
);

return c__19950__auto__;
});
devcards.system.start_ui_with_renderer = (function devcards$system$start_ui_with_renderer(channel,renderer){
if(typeof devcards.system.devcards_ui_setup !== 'undefined'){
return null;
} else {
return (
devcards.system.devcards_ui_setup = (function (){
if(typeof React.initializeTouchEvents !== 'undefined'){
React.initializeTouchEvents(true);
} else {
}

var c__19950__auto___24416 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19950__auto___24416){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (c__19950__auto___24416){
return (function (state_24398){
var state_val_24399 = (state_24398[(1)]);
if((state_val_24399 === (1))){
var inst_24374 = devcards.system.load_data_from_channel_BANG_(channel);
var state_24398__$1 = state_24398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24398__$1,(2),inst_24374);
} else {
if((state_val_24399 === (2))){
var inst_24376 = (state_24398[(2)]);
var inst_24377 = (function (){return ((function (inst_24376,state_val_24399,c__19950__auto___24416){
return (function (){
return (renderer.cljs$core$IFn$_invoke$arity$1 ? renderer.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : renderer.call(null,devcards.system.app_state));
});
;})(inst_24376,state_val_24399,c__19950__auto___24416))
})();
var inst_24378 = setTimeout(inst_24377,(0));
var inst_24379 = (function (){return ((function (inst_24376,inst_24377,inst_24378,state_val_24399,c__19950__auto___24416){
return (function (){
return cljs.core.add_watch(devcards.system.app_state,cljs.core.cst$kw$devcards_DASH_render,((function (inst_24376,inst_24377,inst_24378,state_val_24399,c__19950__auto___24416){
return (function (_,___$1,___$2,___$3){
return (renderer.cljs$core$IFn$_invoke$arity$1 ? renderer.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : renderer.call(null,devcards.system.app_state));
});})(inst_24376,inst_24377,inst_24378,state_val_24399,c__19950__auto___24416))
);
});
;})(inst_24376,inst_24377,inst_24378,state_val_24399,c__19950__auto___24416))
})();
var inst_24380 = setTimeout(inst_24379,(0));
var state_24398__$1 = (function (){var statearr_24400 = state_24398;
(statearr_24400[(7)] = inst_24380);

(statearr_24400[(8)] = inst_24376);

(statearr_24400[(9)] = inst_24378);

return statearr_24400;
})();
var statearr_24401_24417 = state_24398__$1;
(statearr_24401_24417[(2)] = null);

(statearr_24401_24417[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24399 === (3))){
var state_24398__$1 = state_24398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24398__$1,(5),channel);
} else {
if((state_val_24399 === (4))){
var inst_24396 = (state_24398[(2)]);
var state_24398__$1 = state_24398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24398__$1,inst_24396);
} else {
if((state_val_24399 === (5))){
var inst_24383 = (state_24398[(10)]);
var inst_24383__$1 = (state_24398[(2)]);
var state_24398__$1 = (function (){var statearr_24402 = state_24398;
(statearr_24402[(10)] = inst_24383__$1);

return statearr_24402;
})();
if(cljs.core.truth_(inst_24383__$1)){
var statearr_24403_24418 = state_24398__$1;
(statearr_24403_24418[(1)] = (6));

} else {
var statearr_24404_24419 = state_24398__$1;
(statearr_24404_24419[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24399 === (6))){
var inst_24383 = (state_24398[(10)]);
var inst_24385 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state));
var inst_24386 = devcards.system.off_the_books(channel,inst_24385,inst_24383);
var state_24398__$1 = state_24398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24398__$1,(9),inst_24386);
} else {
if((state_val_24399 === (7))){
var state_24398__$1 = state_24398;
var statearr_24405_24420 = state_24398__$1;
(statearr_24405_24420[(2)] = null);

(statearr_24405_24420[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24399 === (8))){
var inst_24394 = (state_24398[(2)]);
var state_24398__$1 = state_24398;
var statearr_24406_24421 = state_24398__$1;
(statearr_24406_24421[(2)] = inst_24394);

(statearr_24406_24421[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24399 === (9))){
var inst_24383 = (state_24398[(10)]);
var inst_24388 = (state_24398[(2)]);
var inst_24389 = (function (){var temp__6738__auto__ = inst_24383;
var v = inst_24383;
var new_state = inst_24388;
return ((function (temp__6738__auto__,v,new_state,inst_24383,inst_24388,state_val_24399,c__19950__auto___24416){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.system.app_state,new_state) : cljs.core.reset_BANG_.call(null,devcards.system.app_state,new_state));
});
;})(temp__6738__auto__,v,new_state,inst_24383,inst_24388,state_val_24399,c__19950__auto___24416))
})();
var inst_24390 = setTimeout(inst_24389,(0));
var state_24398__$1 = (function (){var statearr_24407 = state_24398;
(statearr_24407[(11)] = inst_24390);

return statearr_24407;
})();
var statearr_24408_24422 = state_24398__$1;
(statearr_24408_24422[(2)] = null);

(statearr_24408_24422[(1)] = (3));


return cljs.core.cst$kw$recur;
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
});})(c__19950__auto___24416))
;
return ((function (switch__19824__auto__,c__19950__auto___24416){
return (function() {
var devcards$system$start_ui_with_renderer_$_state_machine__19825__auto__ = null;
var devcards$system$start_ui_with_renderer_$_state_machine__19825__auto____0 = (function (){
var statearr_24412 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24412[(0)] = devcards$system$start_ui_with_renderer_$_state_machine__19825__auto__);

(statearr_24412[(1)] = (1));

return statearr_24412;
});
var devcards$system$start_ui_with_renderer_$_state_machine__19825__auto____1 = (function (state_24398){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_24398);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e24413){if((e24413 instanceof Object)){
var ex__19828__auto__ = e24413;
var statearr_24414_24423 = state_24398;
(statearr_24414_24423[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24398);

return cljs.core.cst$kw$recur;
} else {
throw e24413;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__24424 = state_24398;
state_24398 = G__24424;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
devcards$system$start_ui_with_renderer_$_state_machine__19825__auto__ = function(state_24398){
switch(arguments.length){
case 0:
return devcards$system$start_ui_with_renderer_$_state_machine__19825__auto____0.call(this);
case 1:
return devcards$system$start_ui_with_renderer_$_state_machine__19825__auto____1.call(this,state_24398);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
devcards$system$start_ui_with_renderer_$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_with_renderer_$_state_machine__19825__auto____0;
devcards$system$start_ui_with_renderer_$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_with_renderer_$_state_machine__19825__auto____1;
return devcards$system$start_ui_with_renderer_$_state_machine__19825__auto__;
})()
;})(switch__19824__auto__,c__19950__auto___24416))
})();
var state__19952__auto__ = (function (){var statearr_24415 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_24415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto___24416);

return statearr_24415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(c__19950__auto___24416))
);


return true;
})()
)
;
}
});
devcards.system.start_ui = (function devcards$system$start_ui(channel){
if(typeof devcards.system.devcards_ui_setup !== 'undefined'){
return null;
} else {
return (
devcards.system.devcards_ui_setup = (function (){
if(typeof React.initializeTouchEvents !== 'undefined'){
React.initializeTouchEvents(true);
} else {
}

devcards.system.render_base_if_necessary_BANG_();

var c__19950__auto___24509 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__19950__auto___24509){
return (function (){
var f__19951__auto__ = (function (){var switch__19824__auto__ = ((function (c__19950__auto___24509){
return (function (state_24491){
var state_val_24492 = (state_24491[(1)]);
if((state_val_24492 === (1))){
var inst_24467 = devcards.system.load_data_from_channel_BANG_(channel);
var state_24491__$1 = state_24491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24491__$1,(2),inst_24467);
} else {
if((state_val_24492 === (2))){
var inst_24469 = (state_24491[(2)]);
var inst_24470 = (function (){return ((function (inst_24469,state_val_24492,c__19950__auto___24509){
return (function (){
return devcards.system.renderer(devcards.system.app_state);
});
;})(inst_24469,state_val_24492,c__19950__auto___24509))
})();
var inst_24471 = setTimeout(inst_24470,(0));
var inst_24472 = (function (){return ((function (inst_24469,inst_24470,inst_24471,state_val_24492,c__19950__auto___24509){
return (function (){
return devcards.system.hash_routing_init(devcards.system.app_state);
});
;})(inst_24469,inst_24470,inst_24471,state_val_24492,c__19950__auto___24509))
})();
var inst_24473 = setTimeout(inst_24472,(0));
var state_24491__$1 = (function (){var statearr_24493 = state_24491;
(statearr_24493[(7)] = inst_24469);

(statearr_24493[(8)] = inst_24471);

(statearr_24493[(9)] = inst_24473);

return statearr_24493;
})();
var statearr_24494_24510 = state_24491__$1;
(statearr_24494_24510[(2)] = null);

(statearr_24494_24510[(1)] = (3));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24492 === (3))){
var state_24491__$1 = state_24491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24491__$1,(5),channel);
} else {
if((state_val_24492 === (4))){
var inst_24489 = (state_24491[(2)]);
var state_24491__$1 = state_24491;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24491__$1,inst_24489);
} else {
if((state_val_24492 === (5))){
var inst_24476 = (state_24491[(10)]);
var inst_24476__$1 = (state_24491[(2)]);
var state_24491__$1 = (function (){var statearr_24495 = state_24491;
(statearr_24495[(10)] = inst_24476__$1);

return statearr_24495;
})();
if(cljs.core.truth_(inst_24476__$1)){
var statearr_24496_24511 = state_24491__$1;
(statearr_24496_24511[(1)] = (6));

} else {
var statearr_24497_24512 = state_24491__$1;
(statearr_24497_24512[(1)] = (7));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_24492 === (6))){
var inst_24476 = (state_24491[(10)]);
var inst_24478 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(devcards.system.app_state) : cljs.core.deref.call(null,devcards.system.app_state));
var inst_24479 = devcards.system.off_the_books(channel,inst_24478,inst_24476);
var state_24491__$1 = state_24491;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24491__$1,(9),inst_24479);
} else {
if((state_val_24492 === (7))){
var state_24491__$1 = state_24491;
var statearr_24498_24513 = state_24491__$1;
(statearr_24498_24513[(2)] = null);

(statearr_24498_24513[(1)] = (8));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24492 === (8))){
var inst_24487 = (state_24491[(2)]);
var state_24491__$1 = state_24491;
var statearr_24499_24514 = state_24491__$1;
(statearr_24499_24514[(2)] = inst_24487);

(statearr_24499_24514[(1)] = (4));


return cljs.core.cst$kw$recur;
} else {
if((state_val_24492 === (9))){
var inst_24476 = (state_24491[(10)]);
var inst_24481 = (state_24491[(2)]);
var inst_24482 = (function (){var temp__6738__auto__ = inst_24476;
var v = inst_24476;
var new_state = inst_24481;
return ((function (temp__6738__auto__,v,new_state,inst_24476,inst_24481,state_val_24492,c__19950__auto___24509){
return (function (){
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(devcards.system.app_state,new_state) : cljs.core.reset_BANG_.call(null,devcards.system.app_state,new_state));
});
;})(temp__6738__auto__,v,new_state,inst_24476,inst_24481,state_val_24492,c__19950__auto___24509))
})();
var inst_24483 = setTimeout(inst_24482,(0));
var state_24491__$1 = (function (){var statearr_24500 = state_24491;
(statearr_24500[(11)] = inst_24483);

return statearr_24500;
})();
var statearr_24501_24515 = state_24491__$1;
(statearr_24501_24515[(2)] = null);

(statearr_24501_24515[(1)] = (3));


return cljs.core.cst$kw$recur;
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
});})(c__19950__auto___24509))
;
return ((function (switch__19824__auto__,c__19950__auto___24509){
return (function() {
var devcards$system$start_ui_$_state_machine__19825__auto__ = null;
var devcards$system$start_ui_$_state_machine__19825__auto____0 = (function (){
var statearr_24505 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24505[(0)] = devcards$system$start_ui_$_state_machine__19825__auto__);

(statearr_24505[(1)] = (1));

return statearr_24505;
});
var devcards$system$start_ui_$_state_machine__19825__auto____1 = (function (state_24491){
while(true){
var ret_value__19826__auto__ = (function (){try{while(true){
var result__19827__auto__ = switch__19824__auto__(state_24491);
if(cljs.core.keyword_identical_QMARK_(result__19827__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__19827__auto__;
}
break;
}
}catch (e24506){if((e24506 instanceof Object)){
var ex__19828__auto__ = e24506;
var statearr_24507_24516 = state_24491;
(statearr_24507_24516[(5)] = ex__19828__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24491);

return cljs.core.cst$kw$recur;
} else {
throw e24506;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__19826__auto__,cljs.core.cst$kw$recur)){
var G__24517 = state_24491;
state_24491 = G__24517;
continue;
} else {
return ret_value__19826__auto__;
}
break;
}
});
devcards$system$start_ui_$_state_machine__19825__auto__ = function(state_24491){
switch(arguments.length){
case 0:
return devcards$system$start_ui_$_state_machine__19825__auto____0.call(this);
case 1:
return devcards$system$start_ui_$_state_machine__19825__auto____1.call(this,state_24491);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
devcards$system$start_ui_$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$system$start_ui_$_state_machine__19825__auto____0;
devcards$system$start_ui_$_state_machine__19825__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$system$start_ui_$_state_machine__19825__auto____1;
return devcards$system$start_ui_$_state_machine__19825__auto__;
})()
;})(switch__19824__auto__,c__19950__auto___24509))
})();
var state__19952__auto__ = (function (){var statearr_24508 = (f__19951__auto__.cljs$core$IFn$_invoke$arity$0 ? f__19951__auto__.cljs$core$IFn$_invoke$arity$0() : f__19951__auto__.call(null));
(statearr_24508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19950__auto___24509);

return statearr_24508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__19952__auto__);
});})(c__19950__auto___24509))
);


return true;
})()
)
;
}
});
devcards.system.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg class='cljs-logo' width='49px' height='49px' style='float: right; display: inline-block; position:relative; top:-13px; right: 0px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
devcards.system.cljs_logo = (function devcards$system$cljs_logo(){
return React.DOM.span(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,"cljs-logo",cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,devcards.system.cljs_logo_svg], null)], null)));
});
