(this["webpackJsonpfe-weblabel"]=this["webpackJsonpfe-weblabel"]||[]).push([[0],{123:function(e,t,a){},124:function(e,t,a){},207:function(e,t,a){},211:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(23),o=a.n(r),l=(a(123),a(124),a(27)),s=a(14),i=a(9),b=a.n(i),d=a(16),j=a(3),u=a(11),h=a(111),O=a.n(h).a.create({baseURL:"/api"}),x={login:function(e,t){return O.post("/".concat(e,"/login"),t)},getBeritaUser:function(e){return O.get("//berita/label/".concat(e))},getBerita:function(){return O.get("/berita")},postBerita:function(e){return O.post("/berita",e)},postBeritaExcel:function(e){return O.post("/berita/excel",e)},putBerita:function(e,t){return O.put("/berita/".concat(t),e)},deleteBerita:function(e){return O.delete("/berita/".concat(e))},getUserLabel:function(){return O.get("/userlabel")},addUserLabel:function(e){return O.post("/userlabel",e)},updateUserLabel:function(e,t){return O.put("/userlabel/".concat(t),e)},deleteUserLabel:function(e){return O.delete("/userlabel/".concat(e))},getLabel:function(){return O.get("/label")},addManyLabel:function(e){return O.post("/label/many",e)},getBeritaLabel:function(e){return O.get("/berita/label/".concat(e))},labeledByUser:function(e,t){return O.put("/label/".concat(t),e)}},m={beritaCounter:Object(u.b)({key:"beritaCounter",default:0})},g={white:"#FFFFFF",gray:"#FCFCFC",blue:"#83FFE6",red:"#FF5F5F",black:"#2C2C2C"},p=a(1),f=function(){return Object(p.jsx)("div",{className:"container py-2",children:Object(p.jsx)("div",{className:"container py-3 card",children:Object(p.jsx)("h3",{className:"pb-2",children:"Tidak ada berita yg perlu di labeli lagi"})})})},v=a(218),C=a(13),y=a.n(C),k=function(e){var t=Object(n.useState)(!1),a=Object(j.a)(t,2),c=a[0],r=a[1],o=e.data,s=o.judul,i=o.sumber,b=o.isi,d=e.data.labels[0],h=d.id,O=d.beritumId,f=d.userlabelId,C=Object(n.useState)(),k=Object(j.a)(C,2),S=k[0],w=k[1],N=Object(u.d)(m.beritaCounter),F=Object(j.a)(N,2),B=F[0],L=F[1];return Object(p.jsx)("div",{className:"container py-2",children:Object(p.jsxs)("div",{className:"container py-3 card",style:{textAlign:"left"},children:[Object(p.jsx)("h3",{className:"pb-2",children:s}),Object(p.jsx)("p",{style:{textAlign:"justify"},children:b}),Object(p.jsxs)(v.a,{children:[Object(p.jsx)(v.a.Group,{children:Object(p.jsxs)(v.a.Select,{onChange:function(e){return w(e.target.value)},children:[Object(p.jsx)("option",{hidden:"hidden",children:"- Pilih kelas berita -"}),Object(p.jsx)("option",{value:"1",children:"Clickbait"}),Object(p.jsx)("option",{value:"2",children:"Bukan Clickbait"})]})}),Object(p.jsx)("button",{onClick:function(e){return function(e){e.preventDefault(),c||(r(!0),x.labeledByUser({userlabelId:f,beritumId:O,label:S},h).then((function(e){L(B+1),y()("Data berhasil ditambah",{icon:"success"})})).catch((function(e){y()("Data gagal ditambah"+e.toString(),{icon:"warning"})})),r(!1))}(e)},className:"btn col-md-12 mt-3",style:{backgroundColor:c?g.white:g.red,color:c?g.red:g.white},children:c?"Loading":"Submit"}),Object(p.jsx)("div",{className:"text-center mt-2",children:Object(p.jsx)(l.b,{to:{pathname:i},target:"_blank",className:"text-center",children:"Lihat berita"})})]})]})})},S=function(){var e=Object(s.f)(),t=Object(u.e)(m.beritaCounter),a=Object(n.useState)(null),c=Object(j.a)(a,2),r=c[0],o=c[1],l=Object(n.useCallback)(function(){var e=Object(d.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getBeritaLabel(t);case 2:a=e.sent,o(a.data.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(n.useEffect)((function(){var a,n=null!==(a=localStorage.getItem("userWebLabel"))&&void 0!==a?a:0;console.log(n),0===n&&e.push("/login"),t>=0&&l(n)}),[t,l,e]),Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)("div",{className:"py-3 mb-2 shadow",style:{backgroundColor:g.white,color:g.black,textAlign:"right"},children:Object(p.jsx)("div",{className:"container",children:Object(p.jsx)("span",{onClick:function(){return localStorage.removeItem("userWebLabel"),void e.push("/login")},className:"pt-1 pb-2 px-4",style:{cursor:"pointer",borderRadius:30,backgroundColor:g.red,color:g.white},children:"Keluar"})})}),r?Object(p.jsx)(k,{data:r}):Object(p.jsx)(f,{})]})},w=a(219),N=a(213),F=a(216),B=a.p+"static/media/error.d42ef678.svg",L=function(e){var t=Object(s.f)(),a=Object(n.useState)(!1),c=Object(j.a)(a,2),r=c[0],o=c[1],l=Object(n.useState)(""),i=Object(j.a)(l,2),b=i[0],d=i[1],u=Object(n.useState)(""),h=Object(j.a)(u,2),O=h[0],m=h[1],f=Object(n.useState)(!1),C=Object(j.a)(f,2),y=C[0],k=C[1];return Object(p.jsx)("div",{className:"body-center",style:{backgroundColor:g.gray,padding:10},children:Object(p.jsxs)(w.a,{className:"center rounded-3 shadow-sm col-lg-6 col-md-8 col-sm-12 col-12 ",style:{backgroundColor:g.white,color:g.black,border:"none",paddingTop:30,paddingBottom:20,paddingLeft:20,paddingRight:20},children:[Object(p.jsxs)(w.a.Title,{children:["Login ","user"===e.login?"User":"Admin"]}),Object(p.jsx)(w.a.Body,{children:Object(p.jsxs)(v.a,{children:[Object(p.jsx)(v.a.Group,{className:"mb-3",children:Object(p.jsx)(v.a.Control,{placeholder:"Username",style:{borderColor:g.black,opacity:.5,outline:0,boxShadow:"none"},onChange:function(e){return d(e.target.value)}})}),Object(p.jsx)(v.a.Group,{className:"mb-3",children:Object(p.jsx)(v.a.Control,{type:"password",placeholder:"Password",style:{borderColor:g.black,opacity:.5,outline:0,boxShadow:"none"},onChange:function(e){return m(e.target.value)}})}),Object(p.jsx)(N.a,{type:"submit",className:"col-12 btn",style:{color:y?g.red:g.white,backgroundColor:y?g.gray:g.red,border:"none",outline:0,boxShadow:"none"},onClick:function(a){return function(a){if(a.preventDefault(),!y){k(!0);var n="user"===e.login?"userLabel":"admin";x.login(n,{username:b,password:O}).then((function(a){0!==a.data.data.length?"user"===e.login?(localStorage.setItem("userWebLabel",a.data.data[0].id),t.push("/")):(localStorage.setItem("adminWebLabel",a.data.data[0].id),t.push("/admin")):o(!0)})).catch((function(){o(!0)})),k(!1)}}(a)},children:y?"Loading":"Login"}),Object(p.jsx)(F.a,{show:r,onHide:function(){return o(!1)},children:Object(p.jsxs)(F.a.Body,{children:[Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-4"}),Object(p.jsx)("img",{src:B,alt:"img-not-found",className:"p-2 col-md-4"}),Object(p.jsx)("div",{className:"col-md-4"})]}),Object(p.jsx)("p",{style:{textAlign:"center",padding:10},children:"Terjadi kesalahan, periksa kembali username dan password anda"}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-4"}),Object(p.jsx)("button",{className:"btn col-md-4",style:{boxShadow:"none",outline:0,backgroundColor:g.red,color:g.gray},onClick:function(){return o(!1)},children:"Coba Lagi"}),Object(p.jsx)("div",{className:"col-md-4"})]})]})})]})})]})})},T=a(48),D=a(84),U=a.p+"static/media/notfound.d1f89014.svg",I=function(e){return Object(p.jsx)("div",{className:"body-center",children:Object(p.jsxs)("div",{className:"center col-md-4 col-12",children:[Object(p.jsx)("img",{src:U,alt:"img-not-found",className:"p-2",width:"100%",height:"auto"}),Object(p.jsx)(l.b,{to:e.link,className:"btn col-md-4 mt-3",style:{backgroundColor:g.red,color:g.white},children:"Back to Home"})]})})},G=a(214),H=function(e){var t=e.onClick,a=e.title,n=e.bgColor,c=e.textColor,r=e.className,o=e.link,s=e.isLink;return Object(p.jsx)("div",{style:{marginRight:15},children:s?Object(p.jsx)(l.b,{to:o,className:"btn ".concat(r),style:{boxShadow:"none",outline:0,backgroundColor:n,color:c},children:a}):Object(p.jsx)("div",{onClick:function(){return null!==t&&void 0!==t?t:null},className:"btn ".concat(r),style:{boxShadow:"none",outline:0,backgroundColor:n,color:c},children:a})})},E=a(217),A=function(e){var t=e.id,a=e.judul,c=e.sumber,r=e.isi,o=Object(n.useState)(a),l=Object(j.a)(o,2),s=l[0],i=l[1],h=Object(n.useState)(c),O=Object(j.a)(h,2),f=O[0],C=O[1],k=Object(n.useState)(r),S=Object(j.a)(k,2),w=S[0],N=S[1],B=Object(n.useState)(!1),L=Object(j.a)(B,2),T=L[0],D=L[1],U=Object(n.useState)(!1),I=Object(j.a)(U,2),G=I[0],A=I[1],P=Object(u.d)(m.beritaCounter),W=Object(j.a)(P,2),J=W[0],M=W[1],z=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.putBerita({judul:s,sumber:f,isi:w},t).then((function(e){M(J+1),R(),y()("Data berhasil diedit",{icon:"success"})})).catch((function(e){A(!0),y()("Data gagal diedit",{icon:"warning"})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){return D(!1)};return Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)("div",{onClick:function(){return D(!0)},children:Object(p.jsx)(H,{title:"Edit",textColor:g.black,bgColor:g.blue})}),Object(p.jsxs)(F.a,{show:T,onHide:R,children:[Object(p.jsx)(F.a.Header,{closeButton:!0,children:Object(p.jsx)(F.a.Title,{children:"Edit Data"})}),Object(p.jsxs)(F.a.Body,{children:[G?Object(p.jsx)(E.a,{variant:"danger",children:"Terdapat kesalahan ketika mengubah data"}):null,Object(p.jsxs)(v.a,{children:[Object(p.jsx)(v.a.Group,{className:"mb-3",children:Object(p.jsx)(v.a.Control,{placeholder:"Judul",value:s,style:{borderColor:g.black,opacity:.5,outline:0,boxShadow:"none"},onChange:function(e){return i(e.target.value)}})}),Object(p.jsx)(v.a.Group,{className:"mb-3",children:Object(p.jsx)(v.a.Control,{placeholder:"Sumber",value:f,style:{borderColor:g.black,opacity:.5,outline:0,boxShadow:"none"},onChange:function(e){return C(e.target.value)}})}),Object(p.jsx)(v.a.Group,{className:"mb-3",children:Object(p.jsx)("textarea",{style:{borderColor:g.black,opacity:.5,outline:0,boxShadow:"none"},className:"form-control",onChange:function(e){return N(e.target.value)},children:w})})]})]}),Object(p.jsx)(F.a.Footer,{children:Object(p.jsx)("div",{onClick:z,children:Object(p.jsx)(H,{title:"Simpan",bgColor:g.blue,textColor:g.black,className:"col-md-12"})})})]})]})},P=a(2),W=a(115),J=a.n(W),M=a(116),z=a.n(M),R=a(85),K=a.n(R),X=R.Search.SearchBar,_=function(e){var t=e.data,a=e.columns,n=e.defaultSorted;return Object(p.jsx)(K.a,{bootstrap4:!0,keyField:"id",data:t,columns:a,defaultSorted:n,search:!0,children:function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{className:"mb-2",style:{float:"right"},children:Object(p.jsx)(X,Object(P.a)(Object(P.a)({},e.searchProps),{},{style:{borderColor:g.black,outline:0,boxShadow:"none"},placeholder:"Search ..."}))}),Object(p.jsx)(J.a,Object(P.a)(Object(P.a)({},e.baseProps),{},{pagination:z()({active:!1}),style:{overflowX:"auto"}}))]})}})},q=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),o=Object(j.a)(r,2),l=o[0],s=o[1],i=Object(n.useState)(!1),h=Object(j.a)(i,2),O=h[0],f=h[1],C=Object(u.d)(m.beritaCounter),k=Object(j.a)(C,2),S=k[0],w=k[1],N=Object(n.useState)(),B=Object(j.a)(N,2),L=B[0],T=B[1],D=function(){var e=Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),(t=new FormData).append("fileExcel",L),e.next=5,x.postBeritaExcel(t).then((function(e){U(),w(S+1),f(!1)})).catch((function(e){s(!0),f(!1),y()("Data gagal ditambah",{icon:"warning"})}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){c(!1),s(!1)};return Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)("div",{onClick:function(){return c(!0)},children:Object(p.jsx)(H,{title:"Tambah Data With Excel",bgColor:g.red,textColor:g.gray})}),Object(p.jsxs)(F.a,{show:a,onHide:U,children:[Object(p.jsx)(F.a.Header,{closeButton:!0,children:Object(p.jsx)(F.a.Title,{children:"Tambah Data"})}),Object(p.jsxs)(F.a.Body,{children:[l?Object(p.jsx)(E.a,{variant:"danger",children:"Terdapat kesalahan ketika menambahkan data"}):null,Object(p.jsx)(v.a,{children:Object(p.jsx)(v.a.Group,{className:"mb-3",children:Object(p.jsx)(v.a.Control,{type:"file",placeholder:"Judul",style:{borderColor:g.black,opacity:.5,outline:0,boxShadow:"none"},onChange:function(e){T(e.target.files[0])}})})})]}),Object(p.jsx)(F.a.Footer,{children:Object(p.jsx)("div",{onClick:D,children:Object(p.jsx)(H,{title:O?"Loading...":"Tambah",bgColor:O?"#808080":g.red,textColor:g.gray,className:"col-md-12"})})})]})]})},Q=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),o=Object(j.a)(r,2),l=o[0],s=o[1],i=Object(u.d)(m.beritaCounter),h=Object(j.a)(i,2),O=h[0],f=h[1],C=Object(n.useState)(""),k=Object(j.a)(C,2),S=k[0],w=k[1],N=Object(n.useState)(""),B=Object(j.a)(N,2),L=B[0],T=B[1],D=Object(n.useState)(""),U=Object(j.a)(D,2),I=U[0],G=U[1],A=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.postBerita({judul:S,sumber:L,isi:I}).then((function(e){f(O+1),P(),y()("Data berhasil ditambah",{icon:"success"})})).catch((function(e){s(!0),y()("Data gagal ditambah",{icon:"warning"})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){c(!1),s(!1)};return Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)("div",{onClick:function(){return c(!0)},children:Object(p.jsx)(H,{title:"Tambah Data",bgColor:g.red,textColor:g.gray})}),Object(p.jsxs)(F.a,{show:a,onHide:P,children:[Object(p.jsx)(F.a.Header,{closeButton:!0,children:Object(p.jsx)(F.a.Title,{children:"Tambah Data"})}),Object(p.jsxs)(F.a.Body,{children:[l?Object(p.jsx)(E.a,{variant:"danger",children:"Terdapat kesalahan ketika menambahkan data"}):null,Object(p.jsxs)(v.a,{children:[Object(p.jsx)(v.a.Group,{className:"mb-3",children:Object(p.jsx)(v.a.Control,{placeholder:"Judul",style:{borderColor:g.black,opacity:.5,outline:0,boxShadow:"none"},onChange:function(e){return w(e.target.value)}})}),Object(p.jsx)(v.a.Group,{className:"mb-3",children:Object(p.jsx)(v.a.Control,{placeholder:"Sumber",style:{borderColor:g.black,opacity:.5,outline:0,boxShadow:"none"},onChange:function(e){return T(e.target.value)}})}),Object(p.jsx)(v.a.Group,{className:"mb-3",children:Object(p.jsx)("textarea",{style:{borderColor:g.black,opacity:.5,outline:0,boxShadow:"none"},className:"form-control",onChange:function(e){return G(e.target.value)}})})]})]}),Object(p.jsx)(F.a.Footer,{children:Object(p.jsx)("div",{onClick:A,children:Object(p.jsx)(H,{title:"Tambah",bgColor:g.red,textColor:g.gray,className:"col-md-12"})})})]})]})},V=function(e){return Object(p.jsx)(n.Fragment,{children:Object(p.jsx)("div",{className:"space",children:Object(p.jsx)("h1",{style:{fontSize:20,color:g.red},children:e.title})})})},Y=function(){var e=Object(u.d)(m.beritaCounter),t=Object(j.a)(e,2),a=t[0],c=t[1],r=[{dataField:"judul",text:"Judul",sort:!0,headerStyle:{backgroundColor:g.red,color:g.gray,border:"none"}},{dataField:"sumber",text:"Sumber",sort:!0,headerStyle:{backgroundColor:g.red,color:g.gray,border:"none"}},{dataField:"isi",text:"Isi",headerStyle:{backgroundColor:g.red,color:g.gray,border:"none"}},{dataField:"id",text:"Action",headerStyle:{backgroundColor:g.red,color:g.gray,border:"none"},formatter:function(e,t){var r=t.id,o=t.judul,l=t.sumber,s=t.isi;return Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)("div",{className:"mb-1",children:Object(p.jsx)(A,{judul:o,sumber:l,isi:s,id:r})}),Object(p.jsx)("div",{className:"mb-1",onClick:function(){return function(e){y()({title:"Apakah anda yakin ingin menghapus semua data?",icon:"warning",buttons:!0,dangerMode:!0}).then((function(t){t&&x.deleteBerita(e).then((function(e){y()("Data berhasil dihapus",{icon:"success"}),c(a+1)}))}))}(r)},children:Object(p.jsx)(H,{title:"Delete",textColor:g.gray,bgColor:g.red,id:r})})]})}}],o=Object(n.useState)([]),l=Object(j.a)(o,2),s=l[0],i=l[1],h=Object(n.useCallback)(Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getBerita();case 2:t=e.sent,i(t.data.data);case 4:case"end":return e.stop()}}),e)}))),[]);return Object(n.useEffect)((function(){a>=0&&h()}),[a,h]),Object(p.jsxs)(G.a,{className:"mt-3",children:[Object(p.jsx)(V,{title:"Berita"}),Object(p.jsx)("div",{className:"mt-4"}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"m-1 col-md-2",children:Object(p.jsx)(Q,{})}),Object(p.jsx)("div",{className:"m-1 col-md-4",children:Object(p.jsx)(q,{})})]}),Object(p.jsx)(_,{data:s,columns:r,defaultSorted:[{dataField:"judul",order:"asc"}]})]})},Z=function(e){var t=e.title,a=e.body;return Object(p.jsxs)(w.a,{style:{textAlign:"center",color:g.black,backgroundColor:g.white,border:"none"},className:"rounded-3 shadow-sm p-3",children:[Object(p.jsx)(w.a.Title,{style:{fontSize:14,fontWeight:400},children:t}),Object(p.jsx)(w.a.Body,{style:{fontSize:50,fontWeight:600},className:"m-1",children:a})]})},$=function(){return Object(p.jsxs)(G.a,{className:"mt-3",children:[Object(p.jsx)(V,{title:"Dashboard"}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)("div",{className:"col-md-4 p-2",children:Object(p.jsx)(Z,{title:"Total Berita",body:"1000"})}),Object(p.jsx)("div",{className:"col-md-4 p-2",children:Object(p.jsx)(Z,{title:"Total User Label",body:"10"})}),Object(p.jsx)("div",{className:"col-md-4 p-2",children:Object(p.jsx)(Z,{title:"Total Hasil Label Berita",body:"1000"})})]})]})},ee=Object(u.c)({key:"getUserLabel",get:function(){var e=Object(d.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(0,t.get)(m.beritaCounter),e.next=4,x.getUserLabel();case 4:return a=e.sent,e.abrupt("return",a.data.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),te=ee,ae=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),o=Object(j.a)(r,2),l=o[0],s=o[1],i=Object(u.d)(m.beritaCounter),h=Object(j.a)(i,2),O=h[0],f=h[1],C=Object(u.e)(te),k=Object(n.useState)(),S=Object(j.a)(k,2),w=S[0],N=S[1],B=Object(n.useState)(),L=Object(j.a)(B,2),T=L[0],D=L[1],U=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.addManyLabel({idUserLabel:w,jumlahBerita:T}).then((function(e){f(O+1),I(),y()("Data berhasil ditambah",{icon:"success"})})).catch((function(e){s(!0),y()("Data gagal ditambah",{icon:"warning"})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){c(!1),s(!1)};return Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)("div",{onClick:function(){return c(!0)},children:Object(p.jsx)(H,{title:"Tambah Data",bgColor:g.red,textColor:g.gray})}),Object(p.jsxs)(F.a,{show:a,onHide:I,children:[Object(p.jsx)(F.a.Header,{closeButton:!0,children:Object(p.jsx)(F.a.Title,{children:"Tambah Data"})}),Object(p.jsxs)(F.a.Body,{children:[l?Object(p.jsx)(E.a,{variant:"danger",children:"Terdapat kesalahan ketika menambahkan data"}):null,Object(p.jsxs)(v.a,{children:[Object(p.jsx)(v.a.Group,{className:"mb-3",children:Object(p.jsxs)(v.a.Select,{className:"mb-3",style:{borderColor:g.black,opacity:.5,outline:0,boxShadow:"none"},onChange:function(e){return N(e.target.value)},children:[Object(p.jsx)("option",{hidden:!0,children:"Masukkan user label"}),C.map((function(e,t){return Object(p.jsx)("option",{value:e.id,children:e.username},t)}))]})}),Object(p.jsx)(v.a.Group,{className:"mb-3",children:Object(p.jsx)(v.a.Control,{type:"number",placeholder:"Jumlah Berita",style:{borderColor:g.black,opacity:.5,outline:0,boxShadow:"none"},onChange:function(e){return D(e.target.value)}})})]})]}),Object(p.jsx)(F.a.Footer,{children:Object(p.jsx)("div",{onClick:U,children:Object(p.jsx)(H,{title:"Tambah",bgColor:g.red,textColor:g.gray,className:"col-md-12"})})})]})]})},ne=function(){var e=Object(u.e)(m.beritaCounter),t=Object(n.useState)([]),a=Object(j.a)(t,2),c=a[0],r=a[1],o=Object(n.useCallback)(Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getLabel();case 2:t=e.sent,r(t.data.data);case 4:case"end":return e.stop()}}),e)}))),[]);Object(n.useEffect)((function(){e>=0&&o()}),[e,o]);var l=[{dataField:"label",text:"Hasil Label",sort:!0,headerStyle:{backgroundColor:g.red,color:g.gray,border:"none"}},{dataField:"userlabelId",text:"Id User",sort:!0,headerStyle:{backgroundColor:g.red,color:g.gray,border:"none"}},{dataField:"beritumId",text:"Id Berita",sort:!0,headerStyle:{backgroundColor:g.red,color:g.gray,border:"none"}}];return Object(p.jsxs)(G.a,{className:"mt-3",children:[Object(p.jsx)(V,{title:"Label"}),Object(p.jsx)(ae,{}),Object(p.jsx)(_,{data:c,columns:l,defaultSorted:[{dataField:"label",order:"asc"}]})]})},ce=(a(207),function(e){var t=e.id,a=e.username,c=e.password,r=Object(n.useState)(a),o=Object(j.a)(r,2),l=o[0],s=o[1],i=Object(n.useState)(c),h=Object(j.a)(i,2),O=h[0],f=h[1],C=Object(n.useState)(!1),k=Object(j.a)(C,2),S=k[0],w=k[1],N=Object(n.useState)(!1),B=Object(j.a)(N,2),L=B[0],T=B[1],D=Object(u.d)(m.beritaCounter),U=Object(j.a)(D,2),I=U[0],G=U[1],A=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.updateUserLabel({username:l,password:O},t).then((function(e){P(),G(I+1),y()("Data berhasil diedit",{icon:"success"})})).catch((function(e){T(!0),y()("Data gagal diedit",{icon:"warning"})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){return w(!1)};return Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)("div",{onClick:function(){return w(!0)},children:Object(p.jsx)(H,{title:"Edit",textColor:g.black,bgColor:g.blue})}),Object(p.jsxs)(F.a,{show:S,onHide:P,children:[Object(p.jsx)(F.a.Header,{closeButton:!0,children:Object(p.jsx)(F.a.Title,{children:"Edit Data"})}),Object(p.jsxs)(F.a.Body,{children:[L?Object(p.jsx)(E.a,{variant:"danger",children:"Terdapat kesalahan ketika mengubah data"}):null,Object(p.jsxs)(v.a,{children:[Object(p.jsx)(v.a.Group,{className:"mb-3",children:Object(p.jsx)(v.a.Control,{placeholder:"Username",value:l,style:{borderColor:g.black,opacity:.5,outline:0,boxShadow:"none"},onChange:function(e){return s(e.target.value)}})}),Object(p.jsx)(v.a.Group,{className:"mb-3",children:Object(p.jsx)(v.a.Control,{placeholder:"Password",value:O,style:{borderColor:g.black,opacity:.5,outline:0,boxShadow:"none"},onChange:function(e){return f(e.target.value)}})})]})]}),Object(p.jsx)(F.a.Footer,{children:Object(p.jsx)("div",{onClick:A,children:Object(p.jsx)(H,{title:"Simpan",bgColor:g.blue,textColor:g.black,className:"col-md-12"})})})]})]})}),re=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),o=Object(j.a)(r,2),l=o[0],s=o[1],i=Object(n.useState)(""),h=Object(j.a)(i,2),O=h[0],f=h[1],C=Object(n.useState)(""),k=Object(j.a)(C,2),S=k[0],w=k[1],N=Object(u.d)(m.beritaCounter),B=Object(j.a)(N,2),L=B[0],T=B[1],D=function(){var e=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.addUserLabel({username:O,password:S}).then((function(e){U(),T(L+1),y()("Data berhasil ditambah",{icon:"success"})})).catch((function(e){s(!0),y()("Data gagal ditambah",{icon:"warning"})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){c(!1),s(!1)};return Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)("div",{onClick:function(){return c(!0)},children:Object(p.jsx)(H,{title:"Tambah User",bgColor:g.red,textColor:g.gray})}),Object(p.jsxs)(F.a,{show:a,onHide:U,children:[Object(p.jsx)(F.a.Header,{closeButton:!0,children:Object(p.jsx)(F.a.Title,{children:"Tambah User"})}),Object(p.jsxs)(F.a.Body,{children:[l?Object(p.jsx)(E.a,{variant:"danger",children:"Terdapat kesalahan ketika menambahkan data"}):null,Object(p.jsxs)(v.a,{children:[Object(p.jsx)(v.a.Group,{className:"mb-3",children:Object(p.jsx)(v.a.Control,{placeholder:"Username",style:{borderColor:g.black,opacity:.5,outline:0,boxShadow:"none"},onChange:function(e){return f(e.target.value)}})}),Object(p.jsx)(v.a.Group,{className:"mb-3",children:Object(p.jsx)(v.a.Control,{placeholder:"Password",style:{borderColor:g.black,opacity:.5,outline:0,boxShadow:"none"},onChange:function(e){return w(e.target.value)}})})]})]}),Object(p.jsx)(F.a.Footer,{children:Object(p.jsx)("div",{onClick:D,children:Object(p.jsx)(H,{title:"Tambah",bgColor:g.red,textColor:g.gray,className:"col-md-12"})})})]})]})},oe=function(){var e=Object(u.d)(m.beritaCounter),t=Object(j.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)([]),o=Object(j.a)(r,2),l=o[0],s=o[1],i=Object(n.useCallback)(Object(d.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getUserLabel();case 2:t=e.sent,s(t.data.data);case 4:case"end":return e.stop()}}),e)}))),[]);Object(n.useEffect)((function(){a>=0&&i()}),[a,i]);var h=[{dataField:"username",text:"username",sort:!0,headerStyle:{backgroundColor:g.red,color:g.gray,border:"none"}},{dataField:"password",text:"Password",sort:!0,headerStyle:{backgroundColor:g.red,color:g.gray,border:"none"}},{dataField:"id",text:"Action",headerStyle:{backgroundColor:g.red,color:g.gray,border:"none"},formatter:function(e,t){var r=t.id,o=t.username,l=t.password;return Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)("div",{className:"mb-1",children:Object(p.jsx)(ce,{username:o,password:l,id:r})}),Object(p.jsx)("div",{className:"mb-1",onClick:function(){return function(e){y()({title:"Apakah anda yakin ingin menghapus semua data?",icon:"warning",buttons:!0,dangerMode:!0}).then((function(t){t&&x.deleteUserLabel(e).then((function(e){y()("Data berhasil dihapus",{icon:"success"}),c(a+1)}))}))}(r)},children:Object(p.jsx)(H,{title:"Delete",textColor:g.gray,bgColor:g.red,id:r})})]})}}];return Object(p.jsxs)(G.a,{className:"mt-3",children:[Object(p.jsx)(V,{title:"User Label"}),Object(p.jsx)("div",{className:"mt-4"}),Object(p.jsx)(re,{}),Object(p.jsx)(_,{data:l,columns:h,defaultSorted:[{dataField:"username",order:"asc"}]})]})},le=function(){var e=Object(s.f)();Object(n.useEffect)((function(){var t;0===(null!==(t=localStorage.getItem("adminWebLabel"))&&void 0!==t?t:0)&&e.push("../login-admin")}));var t=[{name:"Dashboard",link:"/",route:Object(p.jsx)($,{}),icon:T.a},{name:"Berita",link:"/berita",route:Object(p.jsx)(Y,{}),icon:T.c},{name:"Label",link:"/label",route:Object(p.jsx)(ne,{}),icon:T.d},{name:"User Label",link:"/userlabel",route:Object(p.jsx)(oe,{}),icon:T.e}];return Object(p.jsx)(l.a,{basename:"/admin",children:Object(p.jsxs)("div",{className:"bg-default admin-wrapper",children:[Object(p.jsxs)("div",{className:"admin-aside",children:[Object(p.jsxs)(l.b,{to:"/",className:"title",children:[Object(p.jsx)("span",{className:"not-mobile mx-3",children:"De-Clickbait"}),Object(p.jsx)("span",{className:"is-mobile mx-3",children:"DC"})]}),Object(p.jsx)("div",{style:{height:20}}),Object(p.jsx)("div",{children:Object(p.jsxs)("ul",{style:{padding:0,margin:0},children:[t.map((function(e,t){return Object(p.jsx)("li",{style:{listStyleType:"none",padding:0,margin:0,marginBottom:15},children:Object(p.jsxs)(l.b,{className:"menu-list",to:e.link,children:[Object(p.jsx)(D.a,{icon:e.icon,size:"lg",className:"mx-3"}),Object(p.jsx)("span",{className:"not-mobile",children:e.name})]})},t)})),Object(p.jsx)("li",{style:{listStyleType:"none",padding:0,margin:0,marginBottom:15},children:Object(p.jsxs)("div",{style:{cursor:"pointer"},className:"menu-list",onClick:function(){return localStorage.removeItem("adminWebLabel"),void e.push("../login-admin")},children:[Object(p.jsx)(D.a,{icon:T.b,size:"lg",className:"mx-3"}),Object(p.jsx)("span",{className:"not-mobile",children:"Logout"})]})},99)]})})]}),Object(p.jsx)("div",{className:"margin-main"}),Object(p.jsx)("div",{className:"admin-main",children:Object(p.jsxs)(s.c,{children:[t.map((function(e,t){return"/"===e.link?Object(p.jsx)(s.a,{path:e.link,exact:!0,children:e.route},t):Object(p.jsx)(s.a,{path:e.link,children:e.route},99)})),Object(p.jsx)(s.a,{path:"*",children:Object(p.jsx)(I,{link:"/"})},101)]})})]})})};var se=function(){return Object(p.jsx)(l.a,{children:Object(p.jsxs)(s.c,{children:[Object(p.jsx)(s.a,{path:"/",exact:!0,children:Object(p.jsx)(S,{})}),Object(p.jsx)(s.a,{path:"/login",children:Object(p.jsx)(L,{login:"user"})}),Object(p.jsx)(s.a,{path:"/login-admin",children:Object(p.jsx)(L,{login:"admin"})}),Object(p.jsx)(s.a,{path:"/admin",children:Object(p.jsx)(le,{})}),Object(p.jsx)(s.a,{path:"*",children:Object(p.jsx)(I,{link:"/"})})]})})},ie=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,220)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),r(e),o(e)}))},be=(a(208),a(209),a(210),a(215)),de=function(){return Object(p.jsx)("div",{className:"body-center",children:Object(p.jsx)(be.a,{animation:"border",variant:"danger",className:"center"})})};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(u.a,{children:Object(p.jsx)(n.Suspense,{fallback:Object(p.jsx)(de,{}),children:Object(p.jsx)(se,{})})})}),document.getElementById("root")),ie()}},[[211,1,2]]]);
//# sourceMappingURL=main.c65b5a82.chunk.js.map