(this["webpackJsonpfriends-giving-2023"]=this["webpackJsonpfriends-giving-2023"]||[]).push([[0],{17:function(e,t,i){},21:function(e,t,i){"use strict";i.r(t);var a=i(1),n=i.n(a),s=i(11),r=i.n(s),c=(i(17),i(2)),o=(i(18),i(6),i(3)),l=i.p+"static/media/Boop.e162cec3.mp3",d=i(0);var b=function(e){var t=Object(o.a)(l),i=Object(c.a)(t,1)[0],n=Object(a.useState)("label"),s=Object(c.a)(n,2),r=s[0],b=s[1];return Object(a.useEffect)((function(){e.id===e.activeId?b("labelActive"):b("label")}),[e.activeId]),Object(d.jsx)("div",{className:"tab",children:Object(d.jsx)("h1",{className:r,onClick:function(){return i()&e.setActiveId(e.id)},children:e.label})})};var u=function(e){return Object(d.jsx)("div",{className:"tabList",children:e.labels.map((function(t,i){return Object(d.jsx)(b,{label:t,activeId:e.tabId,id:i,setActiveId:e.setTabId})}))})},h=i.p+"static/media/HappyFriendsgiving.db7f1c79.png",m=i.p+"static/media/Menu.476f93ab.png",g=i.p+"static/media/Itinerary.d587c4eb.png";var j=function(e){var t=Object(a.useState)(!1),i=Object(c.a)(t,2),n=i[0],s=i[1];return Object(a.useEffect)((function(){0===e.activeId?s(!0):s(!1)}),[e.activeId]),Object(d.jsx)("div",{className:"mainPage",children:n?Object(d.jsxs)("div",{children:[Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"itemBox-heading",children:Object(d.jsxs)("h1",{className:"heading",children:["Welcome to the Official Site for ",Object(d.jsx)("br",{})," Friendsgiving 2023 Lake Tahoe Edition"]})}),Object(d.jsx)("h4",{children:'"Celebrate we will because life is short but sweet for certain!"'}),Object(d.jsx)("h4",{children:"- Dave"}),Object(d.jsx)("br",{}),Object(d.jsx)("h2",{className:"heading2",children:"Hello "+e.user+"! Please use this site to learn more about the everyone's roles for this weekend"}),Object(d.jsx)("h2",{className:"heading2",children:"You can also find your specific packing lists and meals within your tab"}),Object(d.jsx)("h2",{className:"heading2",children:"Finally check out the Menu and Itinerary Below"}),Object(d.jsx)("img",{src:m}),Object(d.jsx)("img",{src:g}),Object(d.jsx)("img",{src:h})]}):null})},p=i.p+"static/media/HarvestMoon.e62c591c.mp3";var v=function(e){var t,i=Object(o.a)(p),n=Object(c.a)(i,1)[0],s=Object(a.useState)(!1),r=Object(c.a)(s,2),l=r[0],b=r[1],u=[["Harvest Salad (ingredients will be supplied)"],["Turkey","Mashed Potatoes","Gravy","Stuffing","Veggies","Soup","Cranberry Sauce"],["Drinks (please coordinate with Will Barber to determine what mixed drink supplies + alcohol to bring up)"],["Breakfast","Pumpkin Cornbread"],["Charcuterie Board Appetizer (please bring up fixings for a charcuterie board for Saturday evening and arrange as desired)"],["Mashed Potatoes (ingredients will be supplied)"],["Homemade Pies (please bake homemade pies to bring up to Tahoe)"],["Turkey","Mashed Potatoes","Gravy","Stuffing","Veggies","Soup","Cranberry Sauce"],["Drinks please coordinate with Drew Barber to determine what mixed drink supplies + alcohol to bring up)"]];return Object(a.useEffect)((function(){0!==e.activeId?b(!0):b(!1),e.activeId-1==e.userId&&0==e.songPlaying&&(n(),e.setSongPlaying(!0))}),[e.activeId]),Object(d.jsx)("div",{className:"personalPage",children:l?Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"h1-name",children:e.labels[e.activeId]}),Object(d.jsxs)("div",{className:"itemBox",children:[Object(d.jsx)("h2",{children:'"'+["The Polar Plunge Planner","Co Head Chef","Co Mixologist","The Activation Specialist","Early Bird","Friendsgiving Facilitator","The Game Guru","Co Head Chef","Co Mixologist"][e.activeId-1]+'"'}),Object(d.jsx)("h2",{className:"descriptions",children:["You will be coordinating and planning our annual Tahoe plunge. Make sure everyone fights off the hypothermia with a beverage to warm the liver :)","You know what you're doing","You will be mixing drinks with Will Barber during, before and after the friendsgiving feast. Ensure everyone is socially lubricated for the evenings festivities with a variety of delicious cocktails","Your job covers many bases: \n\n1. You must help everyone stay activated,\n(get people dancing, hiking, drinking etc...) \n\n2. You must plan and coordinate the outdoor activity on Saturday \n\n3. Keep the atmosphere activated \n(if the tunes aren't fitting the mood change them, \nif people are cold make a fire, \nkeep it stokin' ya feel?)","TBD","Your title gets you wearing many hats, but can be summarized as follows: \n\n-Plate the table before the meal \n\n-Be available for help in the kitchen as needed \n\n-Take photos of friendsgiving so we've got some good ones for the memories (and to share with Maggie and Ben)",'Your job is plan, coordinate and execute the games. Preferably a fun mix of drinking games and "normal" games',"You know what you're doing","You will be mixing drinks with Drew Barber during, before and after the friendsgiving feast. Ensure everyone is socially lubricated for the evenings festivities, with a variety of delicious cocktails"][e.activeId-1]})]}),(null===(t=u[e.activeId-1])||void 0===t?void 0:t.length)>0?Object(d.jsxs)("div",{className:"itemBox",children:[Object(d.jsx)("h2",{children:"What you're making Saturday:"}),u[e.activeId-1].map((function(e){return Object(d.jsx)("h3",{children:"- "+e})}))]}):null,Object(d.jsxs)("div",{className:"itemBox",children:[Object(d.jsx)("h2",{children:"Essentials to Bring to Chambers:"}),["Sleeping Bag","Pillow","Towel","Bathing Suit","Warm Clothes (Average Temps 25\xb0F-45\xb0F)","Comfortable Walking Shoes","Friendsgiving Outfit"].map((function(e){return Object(d.jsx)("h3",{children:"- "+e})}))]})]}):null})};var f=function(e){return Object(d.jsxs)("div",{className:"body",children:[Object(d.jsx)(j,{activeId:e.tabId,user:e.user}),Object(d.jsx)(v,{activeId:e.tabId,labels:e.labels,userId:e.userId,songPlaying:e.songPlaying,setSongPlaying:e.setSongPlaying})]})};var O=function(e){var t,i,n=Object(a.useState)(null),s=Object(c.a)(n,2),r=s[0],o=s[1],l=Object(a.useState)(!1),b=Object(c.a)(l,2),u=b[0],h=b[1],m=Object(a.useState)(!1),g=Object(c.a)(m,2),j=g[0],p=g[1],v=["baillie1997","garsia1999","barber1999","floyd1998","strand1997","dunne1998","reynolds1999","mckinstry1999","barber2001"],f=new Map([["baillie1997","Miss Alexis"],["garsia1999","Topher"],["barber1999","Drewbie"],["floyd1998","E Monster"],["strand1997","Strand"],["dunne1998","Libster"],["reynolds1999","Sambo"],["mckinstry1999","Tuts"],["barber2001","Willie B"]]);return Object(d.jsxs)("div",{className:"inner-container",children:[Object(d.jsx)("div",{className:"header",children:"Login"}),Object(d.jsxs)("div",{className:"box",children:[Object(d.jsxs)("div",{className:"input-group",children:[Object(d.jsx)("input",{type:"password",name:"password",className:"login-input",placeholder:"Password",value:r,onChange:function(e){return function(e){o(e.target.value)}(e)}}),u||j?Object(d.jsx)("label",{children:(t=u,i=j,i?"I told you not to try logging in on mobile :| Retry on desktop":t?"Password Invalid":void 0)}):null]}),Object(d.jsx)("button",{type:"button",className:"login-btn",onClick:function(t){!function(){var e=navigator.userAgent||navigator.vendor||window.opera;return!(!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)&&!/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))}()?null!==r?(p(!1),v.includes(r.toLowerCase())?(h(!1),e.setUser(f.get(r.toLowerCase())),e.setUserId(v.lastIndexOf(r.toLowerCase())),e.setLoggedIn(!0)):h(!0)):(p(!1),h(!0)):p(!0)},children:"Login"})]})]})},x=i(5),w=i.n(x);function y(e,t){return N(t.diff(e,"seconds")%60,2)}function k(e,t){return N(t.diff(e,"minutes")%60,2)}function I(e,t){return N(t.diff(e,"hours")%24,2)}function S(e,t){return t.diff(e,"days").toString()}function N(e,t){var i=e.toString();return i.length>=t?i:"0".repeat(t-i.length)+i}var C={seconds:"00",minutes:"00",hours:"00",days:"00"},P=function(e){var t=e.countdownTimestampMs,i=Object(a.useState)(C),n=Object(c.a)(i,2),s=n[0],r=n[1];return Object(a.useEffect)((function(){var e=setInterval((function(){r(function(e){var t=w()(e),i=w()();return t.isBefore(i)?{seconds:"00",minutes:"00",hours:"00",days:"00"}:{seconds:y(i,t),minutes:k(i,t),hours:I(i,t),days:S(i,t)}}(t))}),1e3);return function(){return clearInterval(e)}}),[t]),Object(d.jsxs)("div",{className:"countdown-div",children:[Object(d.jsx)("h1",{className:"h1-timer",children:"Countdown to Friendsgiving!"}),Object(d.jsxs)("div",{className:"countdown-timer",children:[Object(d.jsx)("span",{children:s.days}),Object(d.jsx)("span",{children:"days"}),Object(d.jsx)("span",{className:"two-numbers",children:s.hours}),Object(d.jsx)("span",{children:"hours"}),Object(d.jsx)("span",{className:"two-numbers",children:s.minutes}),Object(d.jsx)("span",{children:"minutes"}),Object(d.jsx)("span",{className:"two-numbers",children:s.seconds}),Object(d.jsx)("span",{children:"seconds"})]})]})},B=i(12),T=i.n(B),M=i.p+"static/media/leaf1.08dc102c.png";var z=function(){var e=document.createElement("img");e.src=M;var t=[e],i=Object(a.useState)(!1),n=Object(c.a)(i,2),s=n[0],r=n[1],o=Object(a.useState)(null),l=Object(c.a)(o,2),b=l[0],h=l[1],m=Object(a.useState)(null),g=Object(c.a)(m,2),j=g[0],p=g[1],v=Object(a.useState)(!1),x=Object(c.a)(v,2),w=x[0],y=x[1],k=Object(a.useState)(0),I=Object(c.a)(k,2),S=I[0],N=I[1],C=["Main","Alexis","Chris","Drew","Elinor","Kelly","Libby","Sam","Thomas","Will"];return Object(d.jsxs)("div",{className:"App",children:[s?Object(d.jsxs)("div",{children:[Object(d.jsx)(P,{countdownTimestampMs:1699758e6}),Object(d.jsx)(u,{setTabId:N,tabId:S,labels:C}),Object(d.jsx)(f,{setTabId:N,tabId:S,labels:C,user:b,userId:j,songPlaying:w,setSongPlaying:y}),Object(d.jsx)(T.a,{images:t,radius:[50,150],snowflakeCount:5,speed:[.25,1.5],wind:[0,0],style:{zIndex:-10}})]}):Object(d.jsx)("div",{className:"box-container",children:Object(d.jsx)(O,{setLoggedIn:r,setUser:h,setUserId:p})}),Object(d.jsx)("h3",{children:"\xa9 2023 | Chris Garsia"})]})},E=function(e){e&&e instanceof Function&&i.e(4).then(i.bind(null,24)).then((function(t){var i=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;i(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(z,{})}),document.getElementById("root")),E()},6:function(e,t,i){}},[[21,1,2]]]);
//# sourceMappingURL=main.dae3cab4.chunk.js.map