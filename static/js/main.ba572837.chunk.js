(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{214:function(e,t,a){},215:function(e,t,a){},216:function(e,t,a){"use strict";a.r(t);var n,i,r,o,l=a(0),s=a.n(l),c=a(66),h=a.n(c),u=(a(44),a(3)),f=a(4),m=a(7),d=a(5),p=a(6),b=a(8),y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).getStyle=function(){return{padding:"15px",cursor:"pointer",fontFamily:"Roboto, sans-serif",fontWeight:"100"}},a}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{style:g},s.a.createElement("img",{style:x,src:this.props.page.imgsrc}),s.a.createElement("p",{style:this.getStyle(),onClick:this.props.showView},this.props.page.name))}}]),t}(l.Component),g={display:"flex",borderBottom:"1px solid rgba(255,255,255,0.2)"},x={marginTop:"18px",width:"45px",height:"45px"},v=y,w=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this;return this.props.pages.map(function(t){return s.a.createElement("div",null,s.a.createElement(v,{showView:e.props.showView.bind(e,t),page:t}))})}}]),t}(l.Component),E=a(41),O=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(E.a,{data:this.props.data,width:100,height:250,options:{maintainAspectRatio:!1}}))}}]),t}(l.Component),S=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(E.b,{data:this.props.data,height:125,options:{legend:{position:"bottom"}}}))}}]),t}(l.Component),j=O,k=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return s.a.createElement("button",{onClick:this.props.onClick,style:C},"Switch View")}}]),t}(l.Component),C={color:"white",borderRadius:"3px",border:"1px solid #0f63ff",backgroundColor:"#121823",fontSize:"15px",fontFamily:"Roboto, sans-serif",fontWeight:"100",cursor:"pointer"},R=k,A=function(){return{labels:["October","November","December","January","February","March","April"],datasets:[{label:"Performance",data:[80,94,75,83,63,95,88],borderColor:"#0f63ff"}]}},T=function(){return{labels:["October","November","December","January","February","March","April"],datasets:[{label:"Growth",data:[50,100,75,110,125,96,83],borderColor:"#0f63ff"}]}},W=function(){return{labels:["Pumpkins","Tomacco","Animotion","Trans-Atlantic Zepplin","Congreve's Inflammable Powders","US Hay"],datasets:[{label:"Shares",data:[50,100,15,70,30,96],backgroundColor:["#0f63ff","#4f88ff","#709fff","#87afff","#9bbdff","#bcd3ff"],borderColor:"#0f63ff"}]}},L=function(){return{labels:["June","July","August","September","October","November","December","January","February","March","April"],datasets:[{label:"Balance",data:[5320,1080,7500,8110,6425,9006,8350,12300,9080,13005,11238],borderColor:"#0f63ff",lineTension:0}]}},D=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={title:"Performance",subtitle:"Portfolio Trends",view:A},a.switchGraph=a.switchGraph.bind(Object(b.a)(Object(b.a)(a))),a}return Object(p.a)(t,e),Object(f.a)(t,[{key:"switchGraph",value:function(){var e="Performance"===this.state.title?"Growth":"Performance",t="Portfolio Trends"===this.state.subtitle?"Overall Health":"Portfolio Trends",a=this.state.view===A?T:A;this.setState({view:a,title:e,subtitle:t})}},{key:"render",value:function(){return s.a.createElement("div",{style:G},s.a.createElement("div",{style:B},s.a.createElement("div",{style:z},this.state.subtitle),s.a.createElement("div",{style:I},s.a.createElement("div",{style:F},this.state.title),s.a.createElement(R,{onClick:this.switchGraph})),s.a.createElement(j,{data:this.state.view})),s.a.createElement("div",{style:P},s.a.createElement("div",{style:z},"Share Distribution"),s.a.createElement("div",{style:F},"Portfolio"),s.a.createElement(S,{data:W})),s.a.createElement("div",{style:P},s.a.createElement("div",{style:z},"Account Totals"),s.a.createElement("div",{style:F},"Balance"),s.a.createElement(j,{data:L})))}}]),t}(l.Component),I={display:"flex",justifyContent:"space-between"},F={fontSize:"35px",fontFamily:"Roboto, sans-serif",fontWeight:"100"},z={textAlign:"left",fontSize:"15px",fontFamily:"Roboto, sans-serif",fontWeight:"100"},G={display:"flex",flexWrap:"wrap",justifyContent:"space-between",width:"90%",height:"auto"},B={display:"flex",flexDirection:"column",backgroundImage:"linear-gradient(#1d283a, #223047)",width:"100%",height:"300px",textAlign:"center",color:"white",margin:"15px",padding:"15px",borderRadius:"5px"},P={backgroundImage:"linear-gradient(#1d283a, #223047)",width:"45%",height:"450px",textAlign:"left",color:"white",padding:"15px",margin:"15px",borderRadius:"5px"},M=D,U=(a(214),function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{style:N},s.a.createElement("div",{style:$},"Locked-In Trades"),s.a.createElement("div",{style:H},s.a.createElement("div",null,s.a.createElement("p",{style:V},this.props.buySumm),s.a.createElement("p",{style:J},this.props.buyTotal),s.a.createElement("button",{style:Z},"Cancel Purchase")),s.a.createElement("div",null,s.a.createElement("p",{style:V},this.props.sellSumm),s.a.createElement("p",{style:J},this.props.sellTotal),s.a.createElement("button",{style:Z},"Cancel Sale"))),s.a.createElement("div",null,s.a.createElement("button",{class:"confirm",onMouseOver:this.buttonHandler},"CONFIRM")))}}]),t}(l.Component)),N={display:"flex",flexDirection:"column",backgroundImage:"linear-gradient(#1d283a, #223047)",width:"96%",height:"auto",alignItems:"center",color:"white",margin:"15px",padding:"15px",borderRadius:"5px"},V={fontSize:"20px",fontWeight:"100"},J={fontSize:"25px",fontWeight:"300",textAlign:"center"},H={width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between"},$={fontWeight:"100",fontSize:"35px",marginBottom:"10px",marginTop:"0",width:"100%"},Z={color:"white",borderRadius:"3px",width:"100%",height:"30px",border:"1px solid #0f63ff",backgroundColor:"#121823",fontSize:"20px",fontFamily:"Roboto, sans-serif",fontWeight:"100",cursor:"pointer"},Q=U,Y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={buySummary:"n/a",buyTot:"",sellSummary:"n/a",sellTot:""},a.buyDetails=a.buyDetails.bind(Object(b.a)(Object(b.a)(a))),a.sellDetails=a.sellDetails.bind(Object(b.a)(Object(b.a)(a))),a.buySymbol=s.a.createRef(),a.buyShares=s.a.createRef(),a.sellSymbol=s.a.createRef(),a.sellShares=s.a.createRef(),a}return Object(p.a)(t,e),Object(f.a)(t,[{key:"buyDetails",value:function(){var e,t=this,a=this.buySymbol.current.value,i=this.buyShares.current.value;fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+a+"&apikey=X22KEUCYAWJWZLZ2").then(function(e){return e.json()}).then(function(t){e=t["Global Quote"]}).then(function(){n=e[Object.keys(e)[4]]}).then(function(){var e=i*n;t.setState({buySummary:"Buy "+i+" shares of "+a.toUpperCase()+" at $"+n+" per share."}),t.setState({buyTot:"TOTAL: $"+e.toLocaleString("en")})}).catch(function(e){console.log(e)})}},{key:"sellDetails",value:function(){var e,t=this,a=this.sellSymbol.current.value,n=this.sellShares.current.value;fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+a+"&apikey=X22KEUCYAWJWZLZ2").then(function(e){return e.json()}).then(function(t){e=t["Global Quote"]}).then(function(){i=e[Object.keys(e)[4]]}).then(function(){var e=n*i;t.setState({sellSummary:"Sell "+n+" shares of "+a.toUpperCase()+" at $"+i+" per share."}),t.setState({sellTot:"TOTAL: $"+e.toLocaleString("en")})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return s.a.createElement("div",{style:q},s.a.createElement("div",{style:X},"Trade Summary"),s.a.createElement(Q,{buySumm:this.state.buySummary,buyTotal:this.state.buyTot,sellSumm:this.state.sellSummary,sellTotal:this.state.sellTot}),s.a.createElement("div",{style:K},s.a.createElement("div",{style:_},s.a.createElement("div",{style:ae},s.a.createElement("div",{style:te},s.a.createElement("h2",{style:ne},"Buy")),s.a.createElement("h3",{style:ie},"Symbol"),s.a.createElement("input",{ref:this.buySymbol,style:re})),s.a.createElement("div",{style:ae},s.a.createElement("h3",{style:ie},"Number of Shares"),s.a.createElement("input",{ref:this.buyShares,style:re})),s.a.createElement("button",{style:oe,onClick:this.buyDetails},"PROCESS")),s.a.createElement("div",{style:ee},s.a.createElement("div",{style:ae},s.a.createElement("div",{style:te},s.a.createElement("h2",{style:ne},"Sell")),s.a.createElement("h3",{style:ie},"Symbol"),s.a.createElement("input",{ref:this.sellSymbol,style:re})),s.a.createElement("div",{style:ae},s.a.createElement("h3",{style:ie},"Number of Shares"),s.a.createElement("input",{ref:this.sellShares,style:re})),s.a.createElement("button",{style:oe,onClick:this.sellDetails},"PROCESS"))))}}]),t}(l.Component),q={display:"flex",flexDirection:"column",flexGrow:"0",width:"100%",color:"white",margin:"15px",padding:"15px",borderRadius:"5px",fontFamily:"Roboto, sans-serif"},K={display:"flex",justifyContent:"space-evenly"},X={textAlign:"left",fontSize:"35px",fontWeight:"100"},_={display:"flex",flexDirection:"column",backgroundImage:"linear-gradient(#1d283a, #223047)",width:"100%",height:"300px",alignItems:"center",textAlign:"center",color:"white",margin:"15px",padding:"15px",borderRadius:"5px"},ee={display:"flex",flexDirection:"column",backgroundImage:"linear-gradient(#1d283a, #223047)",width:"100%",height:"300px",alignItems:"center",textAlign:"center",color:"white",margin:"15px",padding:"15px",borderRadius:"5px"},te={width:"100%",textAlign:"left"},ae={width:"100%"},ne={fontWeight:"100",fontSize:"35px",marginBottom:"10px",marginTop:"0"},ie={fontWeight:"100",margin:"5px"},re={width:"30%",fontWeight:"100",textAlign:"center",margin:"10px"},oe={color:"white",borderRadius:"3px",width:"20%",height:"30px",border:"1px solid #0f63ff",backgroundColor:"#121823",fontSize:"20px",fontFamily:"Roboto, sans-serif",fontWeight:"100",cursor:"pointer"},le=Y,se=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{style:ce},s.a.createElement("div",{style:pe},s.a.createElement("p",{style:be},"Summary for ",this.props.symbol),s.a.createElement("p",{style:ye},"Accurate within 1min or less")),s.a.createElement("div",{style:he},s.a.createElement("div",{style:ue},"OPEN: ",s.a.createElement("div",{style:fe},this.props.open)),s.a.createElement("div",{style:ue},"HIGH: ",s.a.createElement("div",{style:me},this.props.high)),s.a.createElement("div",{style:ue},"LOW: ",s.a.createElement("div",{style:de},this.props.low)),s.a.createElement("div",{style:ue},"PRICE: ",s.a.createElement("div",{style:fe},this.props.price)),s.a.createElement("div",{style:ue},"VOLUME: ",s.a.createElement("div",{style:fe},this.props.volume)),s.a.createElement("div",{style:ue},"PREVIOUS CLOSE: ",s.a.createElement("div",{style:fe},this.props.prevClose))))}}]),t}(l.Component),ce={width:"100%",justifyContent:"center"},he={marginRight:"15%",marginLeft:"15%",fontFamily:"Roboto, sans-serif",fontWeight:"300",justifyContent:"center"},ue={width:"100%",display:"flex",justifyContent:"space-evenly",textAlign:"left",marginBottom:"20px"},fe={width:"100%",marginLeft:"0px",textAlign:"right"},me={width:"100%",marginLeft:"0px",color:"green",textAlign:"right"},de={width:"100%",marginLeft:"0px",color:"red",textAlign:"right"},pe={marginTop:"15px",display:"flex",flexDirection:"column",alignItems:"left",textAlign:"left",width:"100%",fontSize:"15px"},be={fontSize:"25px",fontFamily:"Roboto, sans-serif",fontWeight:"100",marginTop:"0",marginBottom:"0"},ye={fontSize:"15px",fontFamily:"Roboto, sans-serif",fontWeight:"100",marginTop:"0",marginBottom:"20px"},ge=se,xe=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={suggestionName:"",suggestionSymbol:""},a.searchStock=a.searchStock.bind(Object(b.a)(Object(b.a)(a))),a.search=a.search.bind(Object(b.a)(Object(b.a)(a))),a.stock=s.a.createRef(),a.suggestions=s.a.createRef(),a}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.stock.current.addEventListener("keydown",this.search)}},{key:"search",value:function(e){13==e.keyCode&&this.searchStock()}},{key:"searchStock",value:function(){var e,t,a,n=this;r=this.stock.current.value,fetch("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords="+r+"&apikey=X22KEUCYAWJWZLZ2").then(function(e){return e.json()}).then(function(t){e=t.bestMatches}).then(function(){console.log(e),t=e[Object.keys(e)[0]],a=e[Object.keys(e)[0]],n.setState({suggestionName:"Name: "+a[Object.keys(a)[1]],suggestionSymbol:"Symbol: "+t[Object.keys(t)[0]]})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return s.a.createElement("div",{style:ve},s.a.createElement("div",{style:we},s.a.createElement("div",{style:Ee},"Search for best-matching Symbols/Companies"),s.a.createElement("div",{style:Oe},"Search Stocks"),s.a.createElement("div",null,s.a.createElement("input",{ref:this.stock,style:Se,placeholder:"Search Symbol..."}),s.a.createElement("button",{style:Ce,onClick:this.searchStock},"Search")),s.a.createElement("div",{ref:this.suggestions,style:je},s.a.createElement("p",{style:ke},this.state.suggestionName),s.a.createElement("p",{style:ke},this.state.suggestionSymbol))))}}]),t}(l.Component),ve={display:"flex",flexDirection:"column",flexGrow:"0",alignItems:"center",backgroundImage:"linear-gradient(#1d283a, #223047)",width:"100%",height:"auto",textAlign:"center",color:"white",margin:"15px",padding:"15px",borderRadius:"5px"},we={width:"100%"},Ee={textAlign:"left",fontSize:"15px",fontFamily:"Roboto, sans-serif",fontWeight:"100"},Oe={width:"100%",marginLeft:"0",textAlign:"left",fontSize:"35px",fontFamily:"Roboto, sans-serif",fontWeight:"100"},Se={width:"70%",height:"40px",fontSize:"30px",fontFamily:"Roboto, sans-serif",textAlign:"center",margin:"15px"},je={display:"flex",flexDirection:"column",flexGrow:"0",width:"100%",height:"auto",fontSize:"30px",fontFamily:"Roboto, sans-serif",textAlign:"center",margin:"15px"},ke={marginBottom:"5px"},Ce={color:"white",borderRadius:"3px",width:"20%",height:"30px",border:"1px solid #0f63ff",backgroundColor:"#121823",fontSize:"20px",fontFamily:"Roboto, sans-serif",fontWeight:"100",cursor:"pointer"},Re=xe,Ae=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={isHidden:!0,symbol:"",open:"",high:"",low:"",price:"",volume:"",prevClose:""},a.searchStock=a.searchStock.bind(Object(b.a)(Object(b.a)(a))),a.search=a.search.bind(Object(b.a)(Object(b.a)(a))),a.stock=s.a.createRef(),a}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.stock.current.addEventListener("keyup",this.search)}},{key:"search",value:function(e){13==e.keyCode&&this.searchStock()}},{key:"searchStock",value:function(){var e,t=this;o=this.stock.current.value,fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+o+"&apikey=X22KEUCYAWJWZLZ2").then(function(e){return e.json()}).then(function(t){e=t["Global Quote"]}).then(function(){console.log(e);var a=e[Object.keys(e)[1]],n=e[Object.keys(e)[2]],i=e[Object.keys(e)[3]],r=e[Object.keys(e)[4]],l=e[Object.keys(e)[5]],s=e[Object.keys(e)[7]],c=(t.state.isHidden,!1);t.setState({symbol:o.toUpperCase(),open:"$"+a,high:"$"+n,low:"$"+i,price:"$"+r,volume:l,prevClose:"$"+s,isHidden:c})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return s.a.createElement("div",{style:Te},s.a.createElement("div",{style:We},s.a.createElement("div",{style:Le},s.a.createElement("div",{style:De},"Individual Stock Info At A Glance"),s.a.createElement("div",{style:Ie},"Current Values"),s.a.createElement("div",null,s.a.createElement("input",{ref:this.stock,style:Fe,placeholder:"Enter Symbol..."}),s.a.createElement("button",{style:ze,onClick:this.searchStock},"Search"))),!this.state.isHidden&&s.a.createElement(ge,{symbol:this.state.symbol,open:this.state.open,high:this.state.high,low:this.state.low,price:this.state.price,volume:this.state.volume,prevClose:this.state.prevClose})),s.a.createElement(Re,null))}}]),t}(l.Component),Te={display:"flex",flexGrow:"0",width:"84%"},We={display:"flex",flexDirection:"column",flexGrow:"0",alignItems:"center",backgroundImage:"linear-gradient(#1d283a, #223047)",width:"100%",height:"auto",textAlign:"center",color:"white",margin:"15px",padding:"15px",borderRadius:"5px"},Le={width:"100%"},De={textAlign:"left",fontSize:"15px",fontFamily:"Roboto, sans-serif",fontWeight:"100"},Ie={width:"100%",marginLeft:"0",textAlign:"left",fontSize:"35px",fontFamily:"Roboto, sans-serif",fontWeight:"100"},Fe={width:"70%",height:"40px",fontSize:"30px",fontFamily:"Roboto, sans-serif",textAlign:"center",margin:"15px"},ze={color:"white",borderRadius:"3px",width:"20%",height:"30px",border:"1px solid #0f63ff",backgroundColor:"#121823",fontSize:"20px",fontFamily:"Roboto, sans-serif",fontWeight:"100",cursor:"pointer"},Ge=Ae,Be=(a(215),s.a.createElement(M,null)),Pe=s.a.createElement(le,null),Me=s.a.createElement(Ge,null),Ue=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).showView=function(e){1===e.id&&a.setState({view:Be}),2===e.id&&a.setState({view:Pe}),3===e.id&&a.setState({view:Me})},a.state={pages:[{id:1,name:"Main",imgsrc:"MainDisplay.png"},{id:2,name:"Trade",imgsrc:"Trade.png"},{id:3,name:"Market",imgsrc:"Market.png"}],view:Be},a.showView=a.showView.bind(Object(b.a)(Object(b.a)(a))),a}return Object(p.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{style:Ne},s.a.createElement(w,{pages:this.state.pages,showView:this.showView})),this.state.view)}}]),t}(l.Component),Ne={backgroundImage:"linear-gradient(#0f63ff, #2679ff)",textAlign:"left",color:"white",height:"700px",width:"200px",margin:"15px",borderRadius:"5px"},Ve=Ue;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));h.a.render(s.a.createElement(Ve,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},44:function(e,t,a){},68:function(e,t,a){e.exports=a(216)}},[[68,1,2]]]);
//# sourceMappingURL=main.ba572837.chunk.js.map