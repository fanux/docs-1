import{c as b,r as i,M as x,X as y,P as e,$ as t,a5 as h,Q as p,aj as _,ad as m,ai as S,G as v,_ as w}from"./framework-ca2ea75b.js";const U=S('<h1 id="_115网盘" tabindex="-1"><a class="header-anchor" href="#_115网盘" aria-hidden="true">#</a> 115网盘</h1><div class="hint-container tip"><p class="hint-container-title">提示</p><p>由于115网盘的限制，下载必须携带 Cookies，所以只能使用本程序中的代理功能进行传输。 （可以用其他机器转）</p></div><h2 id="根文件夹id" tabindex="-1"><a class="header-anchor" href="#根文件夹id" aria-hidden="true">#</a> 根文件夹ID</h2><p>打开115网盘官网，点击进入要设置的文件夹时点击 URL中 <code>cid</code>后面的数字</p>',4),q={href:"https://115.com/?cid=249163533602609229&offset=0&tab=&mode=wangpan",target:"_blank",rel:"noopener noreferrer"},T=e("p",null,[t("这个文件夹的 "),e("code",null,"根文件夹ID"),t(" 即为 "),e("code",null,"249163533602609229")],-1),V=e("h2",{id:"qrcode-扫码方式登录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#qrcode-扫码方式登录","aria-hidden":"true"},"#"),t(" QRCode 扫码方式登录")],-1),z=["disabled"],C={style:{margin:"4px"}},L=["src"],B={class:"hint-container info"},Q={class:"hint-container-title"},K=e("h2",{id:"cookie-方式登录",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cookie-方式登录","aria-hidden":"true"},"#"),t(" Cookie 方式登录")],-1),N=e("p",null,[e("code",null,"Cookie"),t("可以浏览器登录从浏览器的"),e("code",null,"api"),t("中获取，也可用抓包115应用获取cookie，115应用的有效期比较长，注意cookie最后不要有"),e("code",null,";"),t("。")],-1),D=e("h3",{id:"默认使用的下载方式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#默认使用的下载方式","aria-hidden":"true"},"#"),t(" 默认使用的下载方式")],-1),F=b({__name:"115.html",setup(E){const o=i("获取二维码"),a=i(0),d=i(""),l=i(""),s=i(""),f=async()=>{o.value="等待...",a.value=1;const n=await(await fetch("https://api.nn.ci/proxy/qrcodeapi.115.com/api/1.0/web/1.0/token")).json();console.log(n),o.value="使用115网盘 APP 扫描然后点击",a.value=2,s.value={uid:n.data.uid,time:n.data.time.toString(),sign:n.data.sign,_:(new Date().getTime()/1e3).toString()},d.value=`https://api.nn.ci/qr/?size=400&text=${encodeURIComponent(n.data.qrcode)}`},k=async()=>{a.value=3,o.value="等待...";const n=await(await fetch(`https://api.nn.ci/proxy/qrcodeapi.115.com/get/status/?uid=${s.value.uid}&time=${s.value.time}&sign=${s.value.sign}&_=${s.value._}`)).json(),{data:{version:u,status:c,msg:I}}=n;if(c!==2){a.value=2,o.value="使用115网盘 APP 扫描然后点击",alert("Status:"+c);return}l.value=s.value.uid,o.value="获取 Token 成功",a.value=4,console.log(n)},g=async()=>{a.value===0&&f(),a.value===2&&k()};return(r,n)=>{const u=v("ExternalLinkIcon"),c=v("Mermaid");return x(),y("div",null,[U,e("p",null,[t("如 "),e("a",q,[t("https://115.com/?cid=249163533602609229&offset=0&tab=&mode=wangpan"),h(u)])]),T,V,e("p",null,[e("button",{disabled:a.value===3||a.value===1,style:{outline:"none",padding:"12px",background:"#70c6be",border:"none","border-radius":"8px",cursor:"pointer","font-size":"20px"},onClick:g},p(o.value),9,z)]),_(e("div",C,[e("img",{src:d.value},null,8,L)],512),[[m,d.value]]),_(e("div",null,[e("div",B,[e("p",Q,"Token: "+p(l.value),1)])],512),[[m,l.value]]),K,N,D,h(c,{id:"mermaid-41",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57NaXjYtfr6898mO7hd79z6btvPpnv73e+ZzgdSn5eSXJ2ckFpUohDhxKQBBcUllTqpCsqFCWmZOjpVyUlKaTnFJUX52qpVympkZlK1bnplSkmFlVFChk5yfk18ElEtLQ9KeaATVnpZmbmpuCjfB2NgY1QSTggqIttKk9KLEggyFzJRUQ4VohViwaLIhmErNS4Fyo5/NWfNszq4nuxc/n9AWa2VlVZyfm5qck1hcbGsL8bKtrV2iUTTQ1886tr9Yt+/pknaoUSBFLqlpCnAdMBdamoEVJBlGQ4wNDfKJ1dUDanzZ0Kmni8u0zORsoBYFJT09/ZSizLLUomL95Pzc3Pw8vYyS3Bzl8tSklMQy3edrpz2fulQJSQ8wYInUAwBY/Lb1"})])}}}),P=w(F,[["__file","115.html.vue"]]);export{P as default};
