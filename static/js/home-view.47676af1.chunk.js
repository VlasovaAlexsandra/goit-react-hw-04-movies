(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[1],{55:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a="2986a356ef3a214eb0a4615eddf8ffa1"},86:function(e,t,n){"use strict";n.r(t);var a=n(56),r=n.n(a),i=n(57),c=n(14),s=n(15),u=n(17),o=n(16),h=n(0),l=n(58),p=n.n(l),b=n(55),d=n(1),f=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(e){e.preventDefault()},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(i.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(b.a,"&query=").concat(t));case 2:n=e.sent,this.setState({movies:n.data.results,query:""});case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("header",{children:Object(d.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(d.jsx)("input",{type:"text",value:this.state.query,onChange:this.handleChange}),Object(d.jsx)("button",{type:"submit",children:Object(d.jsx)("span",{children:"Search"})}),Object(d.jsx)("ul",{children:this.state.movies.map((function(e){var t=e.id,n=e.original_title;return Object(d.jsx)("li",{children:n},t)}))})]})})})}}]),n}(h.Component);t.default=f}}]);
//# sourceMappingURL=home-view.47676af1.chunk.js.map