(this["webpackJsonpcat-boss-website"]=this["webpackJsonpcat-boss-website"]||[]).push([[0],{18:function(e,t,s){},19:function(e,t,s){},32:function(e,t,s){"use strict";s.r(t);var c=s(1),a=s(12),i=s.n(a),n=(s(18),s(4)),r=s(5),o=s(7),l=s(6),j=s(13),b=s.n(j),d=(s(19),s(8)),h=s.n(d),u=s(0),O=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.name,t=this.props.data;return Object(u.jsxs)("header",{id:"home",className:"cat-astronaut",children:[Object(u.jsxs)("nav",{id:"nav-wrap",children:[Object(u.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(u.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(u.jsxs)("ul",{id:"nav",className:"nav",children:[Object(u.jsx)("li",{className:"current",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(u.jsx)("li",{children:Object(u.jsx)("a",{className:"smoothscroll",href:"#networks",children:"Networks"})})]})]}),Object(u.jsx)("div",{className:"row banner",children:Object(u.jsxs)("div",{className:"banner-text",children:[Object(u.jsxs)(h.a,{bottom:!0,children:[Object(u.jsx)("img",{src:"/images/catboss.png",className:"catboss-logo",alt:"catboss-logo"}),Object(u.jsx)("h1",{className:"responsive-headline",children:e})]}),Object(u.jsx)(h.a,{bottom:!0,duration:1500,children:Object(u.jsx)("h3",{children:t.description_trust_me})}),Object(u.jsx)(h.a,{bottom:!0,duration:3e3,children:Object(u.jsxs)("h6",{children:[t.description,"."]})}),Object(u.jsx)("hr",{})]})}),Object(u.jsx)("p",{className:"scrolldown",children:Object(u.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(u.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(c.Component),m=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.social.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)("a",{href:e.url,children:Object(u.jsx)("i",{className:e.className})})},e.name)}));return Object(u.jsx)("section",{id:"contact",children:Object(u.jsx)("footer",{children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(h.a,{bottom:!0,children:Object(u.jsxs)("div",{className:"twelve columns",children:[Object(u.jsx)("ul",{className:"social-links",children:e}),Object(u.jsx)("ul",{className:"copyright",children:Object(u.jsx)("li",{children:"\xa9 2021 Cat Boss."})})]})}),Object(u.jsx)("div",{id:"go-top",children:Object(u.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(u.jsx)("i",{className:"icon-up-open"})})})]})})})}}]),s}(c.Component),x=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data;return Object(u.jsx)("section",{id:"about",children:Object(u.jsx)(h.a,{duration:1e3,children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("h1",{children:"About"}),Object(u.jsxs)("div",{className:"cat-pics",children:[Object(u.jsx)("img",{className:"cat-pic",src:"/images/cat-blue.png",alt:"Meow"}),Object(u.jsx)("img",{className:"cat-pic",src:"/images/cat-pink.png",alt:"Meow"}),Object(u.jsx)("img",{className:"cat-pic",src:"/images/cat-grey.png",alt:"Meow"})]}),Object(u.jsxs)("div",{className:"twelve columns main-col",children:[Object(u.jsx)("p",{id:"about-text",children:e.bio_intro}),Object(u.jsx)("p",{id:"about-text",children:e.bio_mission}),Object(u.jsx)("p",{id:"about-text",children:e.bio_mission_description}),Object(u.jsx)("p",{id:"about-text",children:e.bio_mission_no_cat_litter}),Object(u.jsx)("p",{id:"about-text",children:e.bio_support_us}),Object(u.jsx)("p",{id:"about-text",children:e.bio_stay_pawsome}),Object(u.jsx)("p",{id:"about-text",children:e.bio_cat_boss}),Object(u.jsx)("p",{id:"about-text",children:e.bio_ryuuash}),Object(u.jsx)("p",{id:"about-text",children:e.bio_mandoka}),Object(u.jsx)("p",{id:"about-text",children:e.bio_nayn}),Object(u.jsx)("p",{id:"about-text",children:e.bio_ps}),Object(u.jsx)("div",{className:"cat-pics",children:Object(u.jsx)("img",{className:"about-cat-pic",src:"/images/cat.png",alt:"Meow"})})]})]})})})}}]),s}(c.Component),p=0,v=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(){return Object(n.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){if(!this.props.data)return null;var e=this.props.data.projects.map((function(e){var t=e.image;return Object(u.jsx)("div",{className:"networks-item",children:Object(u.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:Object(u.jsxs)("div",{className:"item-wrap",children:[Object(u.jsx)("img",{src:t,alt:e.title,className:"networks-image"}),Object(u.jsx)("div",{className:"networks-link",children:e.title})]})})},p++)}));return Object(u.jsx)("section",{id:"networks",children:Object(u.jsx)(h.a,{left:!0,duration:1e3,distance:"40px",children:Object(u.jsx)("div",{className:"row",children:Object(u.jsxs)("div",{className:"twelve columns collapsed",style:{textAlign:"center"},children:[Object(u.jsx)("h1",{children:this.props.data.title}),Object(u.jsx)("h6",{children:this.props.data.description}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{id:"networks-wrapper",className:"networks-list",children:e})}),Object(u.jsx)("img",{className:"cat-pic",src:"/images/cat5.png",alt:"Meow"})]})})})})}}]),s}(c.Component),w=function(e){Object(o.a)(s,e);var t=Object(l.a)(s);function s(e){var c;return Object(n.a)(this,s),(c=t.call(this,e)).state={foo:"bar",networksData:{}},c}return Object(r.a)(s,[{key:"getNetworksData",value:function(){b.a.ajax({url:"./networksData.json",dataType:"json",cache:!1,success:function(e){this.setState({networksData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){this.getNetworksData()}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(O,{data:this.state.networksData.main}),Object(u.jsx)(x,{data:this.state.networksData.main}),Object(u.jsx)(v,{data:this.state.networksData.networks}),Object(u.jsx)(m,{data:this.state.networksData.main})]})}}]),s}(c.Component);i.a.render(Object(u.jsx)(w,{}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.17b5bc07.chunk.js.map