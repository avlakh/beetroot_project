(self["webpackChunkbeetroot_project"]=self["webpackChunkbeetroot_project"]||[]).push([[396],{1805:function(t,e,a){"use strict";a.d(e,{Z:function(){return p}});var r=a(3396),s=a(7139);const i={class:"build_together container"},o={class:"build_together_text"};function n(t,e,a,n,l,c){const d=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("section",i,[(0,r._)("div",o,[(0,r._)("h2",null,(0,s.zw)(a.item.heading),1),(0,r._)("p",null,(0,s.zw)(a.item.descr),1)]),(0,r.Wm)(d,{to:"/contact",class:"round_btn"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,s.zw)(a.item.btnText),1)])),_:1})])}var l={name:"BuildTogether",props:{item:{type:Object}}},c=a(89);const d=(0,c.Z)(l,[["render",n],["__scopeId","data-v-11b6efc4"]]);var p=d},2396:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return W}});var r=a(3396),s=a(7139);const i=(0,r.uE)('<section class="works_home_section" data-v-735674b9><div class="container" data-v-735674b9><div class="works_home_flex" data-v-735674b9><h4 data-v-735674b9>What we created</h4><h2 data-v-735674b9>Our Work Portfolio</h2><p data-v-735674b9>We help teams create great digital products by providing them with tools and technology to make the design-to-code process universally accessible.</p><ul class="sm_list" data-v-735674b9><li data-v-735674b9><a href="https://www.facebook.com/" target="_blank" title="Facebook" data-v-735674b9><i class="icon icon-facebook" data-v-735674b9></i></a></li><li data-v-735674b9><a href="https://twitter.com/" target="_blank" title="Twitter" data-v-735674b9><i class="icon icon-twitter" data-v-735674b9></i></a></li><li data-v-735674b9><a href="https://www.instagram.com/" target="_blank" title="Instagram" data-v-735674b9><i class="icon icon-instagram" data-v-735674b9></i></a></li><li data-v-735674b9><a href="https://www.linkedin.com/" target="_blank" title="LinkedIn" data-v-735674b9><i class="icon icon-linkedin-square" data-v-735674b9></i></a></li></ul></div></div></section>',1),o={class:"templates"},n={class:"container"},l={class:"templates_list_flex"},c={class:"templates_list"},d=["onClick"],p={class:"templates_grid"};function u(t,e,a,u,_,m){const g=(0,r.up)("works-card"),h=(0,r.up)("build-together");return(0,r.wg)(),(0,r.iD)(r.HY,null,[i,(0,r._)("section",o,[(0,r._)("div",n,[(0,r._)("div",l,[(0,r._)("ul",c,[(0,r._)("li",null,[(0,r._)("a",{onClick:e[0]||(e[0]=t=>m.setType("")),class:(0,s.C_)({active:""===_.type})},"All",2)]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(_.typesList,(t=>((0,r.wg)(),(0,r.iD)("li",{key:t},[(0,r._)("a",{onClick:e=>m.setType(t),class:(0,s.C_)({active:t===_.type})},(0,s.zw)(t)+" Design",11,d)])))),128))])]),(0,r._)("div",p,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(m.cardList(),((t,e)=>((0,r.wg)(),(0,r.j4)(g,{key:e,item:t},null,8,["item"])))),128))])])]),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(_.buildTogetherArr,((t,e)=>((0,r.wg)(),(0,r.j4)(h,{key:e,item:t},null,8,["item"])))),128))],64)}var _=a(6265),m=a.n(_);const g={class:"templates_card"},h={class:"templates_card_img"},w=["src","alt"],v=(0,r.Uk)("View Portfolio");function b(t,e,i,o,n,l){const c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",g,[(0,r._)("div",h,[(0,r.Wm)(c,{to:{name:"works-project",params:{slug:i.item.slug}}},{default:(0,r.w5)((()=>[(0,r._)("img",{src:a(2353)("./"+i.item.img),alt:i.item.imgAlt},null,8,w)])),_:1},8,["to"])]),(0,r.Wm)(c,{to:{name:"works-project",params:{slug:i.item.slug}}},{default:(0,r.w5)((()=>[(0,r._)("h3",null,(0,s.zw)(i.item.heading),1)])),_:1},8,["to"]),(0,r._)("p",null,(0,s.zw)(i.item.descr),1),(0,r.Wm)(c,{to:{name:"works-project",params:{slug:i.item.slug}},class:"arrow_btn"},{default:(0,r.w5)((()=>[v])),_:1},8,["to"])])}var k={name:"WorksCard",props:{item:{type:Object}}},f=a(89);const y=(0,f.Z)(k,[["render",b],["__scopeId","data-v-f9560c8a"]]);var j=y,C=a(1805),T={name:"WorksView",components:{WorksCard:j,BuildTogether:C.Z},data(){return{worksCardArr:[],buildTogetherArr:[],type:"",typesList:[]}},created(){m().get("data/Works/WorksCard.json").then((t=>{this.worksCardArr=t.data,this.getTypesList()})),m().get("data/BuildTogether.json").then((t=>{this.buildTogetherArr=t.data}))},methods:{cardList(){let t=[];return t=""!==this.type?this.worksCardArr.filter((t=>t.type===this.type)):this.worksCardArr,t},getTypesList(){let t=[];this.worksCardArr.forEach((e=>{-1===t.indexOf(e.type)&&t.push(e.type)})),this.typesList=t},setType(t){this.type=t}}};const x=(0,f.Z)(T,[["render",u],["__scopeId","data-v-735674b9"]]);var W=x},2353:function(t,e,a){var r={"./template_card_1.jpg":805,"./template_card_2.jpg":451,"./template_card_3.jpg":8863,"./template_card_4.jpg":5849,"./template_card_5.jpg":8310,"./template_card_6.jpg":7515};function s(t){var e=i(t);return a(e)}function i(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}s.keys=function(){return Object.keys(r)},s.resolve=i,t.exports=s,s.id=2353},805:function(t,e,a){"use strict";t.exports=a.p+"img/template_card_1.09d3e7ae.jpg"},451:function(t,e,a){"use strict";t.exports=a.p+"img/template_card_2.c75e06a2.jpg"},8863:function(t,e,a){"use strict";t.exports=a.p+"img/template_card_3.faa4d541.jpg"},5849:function(t,e,a){"use strict";t.exports=a.p+"img/template_card_4.8525535e.jpg"},8310:function(t,e,a){"use strict";t.exports=a.p+"img/template_card_5.991425e4.jpg"},7515:function(t,e,a){"use strict";t.exports=a.p+"img/template_card_6.9add613d.jpg"}}]);
//# sourceMappingURL=396.8a910e18.js.map