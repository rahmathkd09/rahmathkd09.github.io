(this.webpackJsonptugas_3_react_js=this.webpackJsonptugas_3_react_js||[]).push([[0],{13:function(e,a,t){},14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(7),c=t.n(l),u=(t(13),t(1)),s=t(2),i=t(4),o=t(3);var m=function(){return r.a.createElement("div",{align:"center>"},r.a.createElement("h3",null,"Home | Product | Kontak | Tentang Kami"))},h=t(5),E=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={datalist:n.props.list},n}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{src:this.state.datalist,alt:"Product Makanan",width:"150",height:"100"}))}}]),t}(n.Component),p=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={pesan:0,jenisPesanan:"Masukkan Pesanan Anda"},n.rubahPesanan=n.rubahPesanan.bind(Object(h.a)(n)),n.pesanan=n.pesanan.bind(Object(h.a)(n)),n}return Object(s.a)(t,[{key:"rubahPesanan",value:function(){this.setState((function(e,a){return{pesan:e.pesan+1}}))}},{key:"pesanan",value:function(e){console.log(e.target.value)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h3",null,"Daftar Makanan Yang Kami Sediakan : "),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(E,{list:"https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"}),r.a.createElement("center",null,r.a.createElement("button",{onClick:this.rubahPesanan},"Pesan Sekarang"))),r.a.createElement("td",null,r.a.createElement(E,{list:"https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"}),r.a.createElement("center",null,r.a.createElement("button",{onClick:this.rubahPesanan},"Pesan Sekarang"))),r.a.createElement("td",null,r.a.createElement(E,{list:"https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"}),r.a.createElement("center",null,r.a.createElement("button",{onClick:this.rubahPesanan},"Pesan Sekarang"))),r.a.createElement("td",null,r.a.createElement(E,{list:"https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"}),r.a.createElement("center",null,r.a.createElement("button",{onClick:this.rubahPesanan},"Pesan Sekarang"))),r.a.createElement("td",null,r.a.createElement(E,{list:"https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"}),r.a.createElement("center",null,r.a.createElement("button",{onClick:this.rubahPesanan},"Pesan Sekarang")))))),r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:this.state.jenisPesanan,onChange:function(a){return e.pesanan(a)}}),r.a.createElement("h3",null,"Pesanan Anda : ",this.state.pesan))}}]),t}(n.Component),b=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={tentang:"Warung Nusantara Adalah Restoran Yang Bernuansa Makanan Nusantara, Kami Ada Untuk Membuat Anda Menikmati Makanan Khas Dari Nusantara"},n}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("p",null,"Tentang Kami"),this.state.tentang))}}]),t}(n.Component),d=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(u.a)(this,t),(n=a.call(this,e)).state={alamat:"Jl.Swadaya Ciranggon Cipayung Kota Jakarta Timur Daerah Khusus Ibukota Jakarta 13860",kontak:"081312345678"},n}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("center",null,r.a.createElement("h3",null,this.state.alamat),r.a.createElement("h4",null,"Kontak Kami: ",this.state.kontak)))}}]),t}(n.Component),k=function(){return r.a.createElement("a",{href:"/",onClick:function(e){return function(e,a){a.preventDefault(),alert(e)}("Back to Home",e)}},"Back To Home")},g=function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(k,null),r.a.createElement("h3",null," Tugas 3 React JS "))}}]),t}(n.Component),v=(t(14),function(e){Object(i.a)(t,e);var a=Object(o.a)(t);function t(){return Object(u.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{align:"center"},r.a.createElement(m,null),r.a.createElement(p,null),r.a.createElement(b,null),r.a.createElement(d,null),r.a.createElement(g,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.58fe6b4a.chunk.js.map