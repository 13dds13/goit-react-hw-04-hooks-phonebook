(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,function(t){t.exports=JSON.parse('{"alertMsg":"is already in contacts. Please change name.","allContacts":"All contacts:","search":"Search result:","inputName":"Enter name:","inputTel":"Enter number:","submitBtn":"Add to contacts","deleteBtn":"Delete","titleMain":"Phonebook","titleSecondary":"Contacts","inputSearch":"Find contact by name:","noDataToRender":"No contacts :("}')},function(t){t.exports=JSON.parse('{"a":{"contacts":[],"filter":""},"c":"contacts","b":{"name":"","number":""}}')},,function(t,e,n){t.exports={listWrap:"ContactsList_listWrap__2CJH8",listItem:"ContactsList_listItem__1MD_k",btn:"ContactsList_btn__3p_my",name:"ContactsList_name__1KJf-",number:"ContactsList_number__1hRxz"}},,,,function(t,e,n){t.exports={form:"ContactForm_form__3gAn0",btn:"ContactForm_btn__pGwMA",input:"ContactForm_input__3N3wQ"}},,,,,function(t,e,n){t.exports={container:"Container_container__2hGjQ",title:"Container_title__1Evj_"}},,function(t,e,n){t.exports={wrap:"Filter_wrap__1eVhf",listWrap:"Filter_listWrap__3sFOq",listItem:"Filter_listItem__3daw1",name:"Filter_name__3YUoL",number:"Filter_number__3-3z1",btn:"Filter_btn__1U4AH"}},,,,,function(t,e,n){},,,function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(15),r=n.n(c),o=(n(21),n(12)),i=n(7),s=n(4),l=n(11),u=n(8),b=n(3),m=n(9),d=n(0),j=function(t){var e=t.addNewContact,n=t.dataUI,c=Object(a.useState)(Object(u.a)({},b.b)),r=Object(i.a)(c,2),o=r[0],j=r[1],p=o.name,f=o.number,h=Object(s.a)(),_=Object(s.a)(),O=function(t){var e=t.target,n=e.name,a=e.value;j((function(t){return Object(u.a)(Object(u.a)({},t),{},Object(l.a)({},n,a))}))},C=n.inputName,x=n.inputTel,N=n.submitBtn;return Object(d.jsxs)("form",{className:m.form,onSubmit:function(t){t.preventDefault(),e(p,f)||j(Object(u.a)({},b.b))},children:[Object(d.jsx)("label",{htmlFor:h,children:C}),Object(d.jsx)("input",{className:m.input,id:h,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,autoComplete:"off",onChange:O,value:p}),Object(d.jsx)("label",{htmlFor:_,children:x}),Object(d.jsx)("input",{className:m.input,id:_,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,autoComplete:"off",onChange:O,value:f}),Object(d.jsx)("button",{className:m.btn,type:"submit",children:N})]})},p=n(16),f=function(t){var e=t.handleChange,n=t.filter,a=t.inputSearch,c=Object(s.a)();return Object(d.jsxs)("div",{className:p.wrap,children:[Object(d.jsx)("label",{htmlFor:c,children:a}),Object(d.jsx)("input",{id:c,type:"text",name:"filter",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,autoComplete:"off",onChange:e,value:n})]})},h=n(5),_=n.n(h),O=_.a.listWrap,C=_.a.listItem,x=_.a.name,N=_.a.number,g=_.a.btn,v=function(t){var e=t.contactsDataToRender,n=t.deleteContact,a=t.dataUI,c=a.deleteBtn,r=a.noDataToRender,o=e.title,i=e.contacts;return i.length?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{children:o}),Object(d.jsx)("ul",{className:O,children:i.map((function(t){return Object(d.jsxs)("li",{className:C,children:[" ",Object(d.jsxs)("p",{className:x,children:[t.name,": ",Object(d.jsx)("span",{className:N,children:t.number})]}),Object(d.jsx)("button",{className:g,type:"button",onClick:function(){return n(t.name)},children:c})]},t.id)}))})]}):Object(d.jsx)("p",{children:r})},S=n(14),w=n.n(S),A=n(2),F=function(){var t=localStorage.getItem(b.c);if((t=JSON.parse(t))&&0!==t.length)return t},y=A.alertMsg,I=A.allContacts,B=A.search,z=A.titleMain,J=A.titleSecondary,L=A.inputName,T=A.inputTel,k=A.submitBtn,D=A.deleteBtn,M=A.inputSearch,R=A.noDataToRender,E=function(){var t=Object(a.useState)(b.a.contacts),e=Object(i.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(b.a.filter),l=Object(i.a)(r,2),u=l[0],m=l[1];Object(a.useEffect)((function(){var t=F();t&&c(Object(o.a)(t))}),[]),Object(a.useEffect)((function(){var t=JSON.stringify(n);localStorage.setItem(b.c,t)}),[n]);var p=w.a.container,h=w.a.title,_=function(t,e){return e?{contacts:t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})),title:"".concat(B)}:{contacts:t,title:"".concat(I)}}(n,u);return Object(d.jsxs)("div",{className:p,children:[Object(d.jsx)("h2",{className:h,children:z}),Object(d.jsx)(j,{dataUI:{inputName:L,inputTel:T,submitBtn:k},addNewContact:function(t,e){var a,r=(a=t,n.some((function(t){return t.name.toLowerCase()===a.toLowerCase()})));return r?(alert("".concat(t," ").concat(y)),r):(c((function(n){return[].concat(Object(o.a)(n),[{name:t,id:Object(s.a)(),number:e}])})),r)}}),Object(d.jsx)("h2",{className:h,children:J}),Object(d.jsx)(f,{inputSearch:M,filter:u,handleChange:function(t){var e=t.target.value;m(e)}}),Object(d.jsx)(v,{contactsDataToRender:_,deleteContact:function(t){var e=n.filter((function(e){return e.name!==t}));c(Object(o.a)(e))},dataUI:{deleteBtn:D,noDataToRender:R}})]})};n(23);r.a.render(Object(d.jsx)(E,{}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.dc383235.chunk.js.map