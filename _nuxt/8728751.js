(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{356:function(t,n,e){"use strict";e.r(n);var r={props:{title:{type:String,required:!0},content:{type:String,required:!0},uniqueClass:{type:String,required:!0}},methods:{navigateToDetail:function(){this.$router.push({name:"DetailPage",params:{id:this.uniqueClass}})}}},l=e(14),component=Object(l.a)(r,(function(){var t=this,n=t._self._c;return n("div",[n("strong",[t._v(t._s(t.title))]),t._v(" "),n("span",[t._v(t._s(t.content))]),t._v(" "),n("button",{staticClass:"btn btn-sm btn-primary",class:t.uniqueClass,on:{click:t.navigateToDetail}},[t._v("\n    자세히보기\n  ")])])}),[],!1,null,null,null);n.default=component.exports}}]);