(this.webpackJsonptugas_3_react_js=this.webpackJsonptugas_3_react_js||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){},16:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(8),i=t.n(s),c=(t(14),t(2)),u=t(3),r=t(5),o=t(4),m=t(6),h=t(1),p=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={datalist:n.props.list},n}return Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("img",{src:this.state.datalist,alt:"Product Makanan",width:"150",height:"100"}))}}]),t}(n.Component),d=function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).state={pesan:"",jumlah:0,tampil:!1},n.pilihPesanan=n.pilihPesanan.bind(Object(h.a)(n)),n.nasipadang=n.nasipadang.bind(Object(h.a)(n)),n.sate=n.sate.bind(Object(h.a)(n)),n.soto=n.soto.bind(Object(h.a)(n)),n.uduk=n.uduk.bind(Object(h.a)(n)),n.kuning=n.kuning.bind(Object(h.a)(n)),n.batal=n.batal.bind(Object(h.a)(n)),n}return Object(u.a)(t,[{key:"pilihPesanan",value:function(e,a){var t;this.setState((t={},Object(m.a)(t,e,a.target.value),Object(m.a)(t,"tampil",!0),t))}},{key:"nasipadang",value:function(){this.setState({pesan:"Nasi Padang",jumlah:this.state.jumlah+1,tampil:!0})}},{key:"sate",value:function(){this.setState({pesan:"Sate",jumlah:this.state.jumlah+1,tampil:!0})}},{key:"soto",value:function(){this.setState({pesan:"Soto Ayam Lamongan",jumlah:this.state.jumlah+1,tampil:!0})}},{key:"uduk",value:function(){this.setState({pesan:"Nasi Uduk",jumlah:this.state.jumlah+1,tampil:!0})}},{key:"kuning",value:function(){this.setState({pesan:"Nasi Kuning",jumlah:this.state.jumlah+1,tampil:!0})}},{key:"batal",value:function(){this.setState({pesan:"",jumlah:0,tampil:!1})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h3",null,"Daftar Makanan Yang Kami Sediakan : "),l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(p,{list:"https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"}),l.a.createElement("center",null,l.a.createElement("button",{onClick:this.nasipadang},"Pesan Sekarang"))),l.a.createElement("td",null,l.a.createElement(p,{list:"https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"}),l.a.createElement("center",null,l.a.createElement("button",{onClick:this.sate},"Pesan Sekarang"))),l.a.createElement("td",null,l.a.createElement(p,{list:"https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png"}),l.a.createElement("center",null,l.a.createElement("button",{onClick:this.soto},"Pesan Sekarang"))),l.a.createElement("td",null,l.a.createElement(p,{list:"https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png"}),l.a.createElement("center",null,l.a.createElement("button",{onClick:this.uduk},"Pesan Sekarang"))),l.a.createElement("td",null,l.a.createElement(p,{list:"https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"}),l.a.createElement("center",null,l.a.createElement("button",{onClick:this.kuning},"Pesan Sekarang")))))),l.a.createElement("br",null),l.a.createElement("input",{type:"text",placeholder:"Masukan Pesanan Anda",onChange:function(a){return e.pilihPesanan("pesan",a)}}),l.a.createElement("input",{type:"number",placeholder:"Jumlah Pesanan",onChange:function(a){return e.pilihPesanan("jumlah",a)}}),l.a.createElement("button",{onClick:this.batal},"Batalkan Semua Pesanan"),!0===this.state.tampil?l.a.createElement("div",null,l.a.createElement("h3",null,"Pesanan Anda : ",this.state.pesan),l.a.createElement("h4",null,"Jumlah Pesanan : ",this.state.jumlah)):l.a.createElement("h1",null,l.a.createElement("center",null," Belum Ada Pesanan ")))}}]),t}(n.Component),b=(t(15),function(e){Object(r.a)(t,e);var a=Object(o.a)(t);function t(){return Object(c.a)(this,t),a.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{align:"center"},l.a.createElement(d,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,a,t){e.exports=t(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.c4ef3689.chunk.js.map