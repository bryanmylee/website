(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{31:function(e,t,c){"use strict";c.r(t),c.d(t,"META",(function(){return O}));var b=c(0),j=c(9),r=c(8);function a(e){let t,c,r,a,O,o,i,n,s,d,l,g,m,h,p,f,u,v,y,z,w,A,q,E,x,I,C,k,J,D,T,Y,$,V,G,R,N,F,M,P,W,H,S,B,K,L;return T=new j.a({props:{tech:e[1],class:"flex justify-center h-12"}}),{c(){t=Object(b.Y)(),c=Object(b.A)("div"),r=Object(b.A)("div"),a=Object(b.A)("h2"),O=Object(b.bb)(e[0]),o=Object(b.Y)(),i=Object(b.A)("div"),n=Object(b.A)("p"),s=Object(b.bb)("An efficient C library providing a "),d=Object(b.A)("strong"),l=Object(b.bb)("sequence, conflict-free replicated\ndata type"),g=Object(b.bb)("."),m=Object(b.Y)(),h=Object(b.A)("img"),f=Object(b.Y)(),u=Object(b.A)("div"),v=Object(b.A)("p"),y=Object(b.bb)("For my data structures and algorithm course, my group and I decided to\nstudy and implement a "),z=Object(b.A)("em"),w=Object(b.bb)("conflict-free replicated data type"),A=Object(b.bb)(" (CRDT)."),q=Object(b.Y)(),E=Object(b.A)("div"),x=Object(b.A)("p"),I=Object(b.bb)("We took inspiration from\n"),C=Object(b.A)("a"),k=Object(b.bb)("Conclave"),J=Object(b.bb)(" — a\npeer-to-peer, real-time, collaborative text editor. For our project, we\ndecided to extend the functionality of Conclave by providing methods for\ninserting and deleting multiple characters at the same time."),D=Object(b.Y)(),Object(b.t)(T.$$.fragment),Y=Object(b.Y)(),$=Object(b.A)("div"),V=Object(b.A)("p"),G=Object(b.bb)("Our course required that the project was written in "),R=Object(b.A)("strong"),N=Object(b.bb)("Java"),F=Object(b.bb)(". However, we\ndid notice some performance issues and a large memory footprint when the\ndocument size increased. Therefore, I decided to rewrite the project in\n"),M=Object(b.A)("strong"),P=Object(b.bb)("C"),W=Object(b.bb)(" during my Winter break, with the main goal of optimizing the largest\nperformance bottlenecks we observed in Java."),H=Object(b.Y)(),S=Object(b.A)("div"),B=Object(b.A)("a"),K=Object(b.bb)("Check it out on Github"),this.h()},l(j){Object(b.R)('[data-svelte="svelte-98yfvo"]',document.head).forEach(b.z),t=Object(b.p)(j),c=Object(b.o)(j,"DIV",{class:!0});var p=Object(b.m)(c);r=Object(b.o)(p,"DIV",{class:!0});var L=Object(b.m)(r);a=Object(b.o)(L,"H2",{});var Q=Object(b.m)(a);O=Object(b.q)(Q,e[0]),Q.forEach(b.z),L.forEach(b.z),o=Object(b.p)(p),i=Object(b.o)(p,"DIV",{class:!0});var U=Object(b.m)(i);n=Object(b.o)(U,"P",{});var X=Object(b.m)(n);s=Object(b.q)(X,"An efficient C library providing a "),d=Object(b.o)(X,"STRONG",{});var Z=Object(b.m)(d);l=Object(b.q)(Z,"sequence, conflict-free replicated\ndata type"),Z.forEach(b.z),g=Object(b.q)(X,"."),X.forEach(b.z),U.forEach(b.z),m=Object(b.p)(p),h=Object(b.o)(p,"IMG",{src:!0,alt:!0,class:!0}),f=Object(b.p)(p),u=Object(b.o)(p,"DIV",{class:!0});var _=Object(b.m)(u);v=Object(b.o)(_,"P",{});var ee=Object(b.m)(v);y=Object(b.q)(ee,"For my data structures and algorithm course, my group and I decided to\nstudy and implement a "),z=Object(b.o)(ee,"EM",{});var te=Object(b.m)(z);w=Object(b.q)(te,"conflict-free replicated data type"),te.forEach(b.z),A=Object(b.q)(ee," (CRDT)."),ee.forEach(b.z),_.forEach(b.z),q=Object(b.p)(p),E=Object(b.o)(p,"DIV",{class:!0});var ce=Object(b.m)(E);x=Object(b.o)(ce,"P",{});var be=Object(b.m)(x);I=Object(b.q)(be,"We took inspiration from\n"),C=Object(b.o)(be,"A",{href:!0});var je=Object(b.m)(C);k=Object(b.q)(je,"Conclave"),je.forEach(b.z),J=Object(b.q)(be," — a\npeer-to-peer, real-time, collaborative text editor. For our project, we\ndecided to extend the functionality of Conclave by providing methods for\ninserting and deleting multiple characters at the same time."),be.forEach(b.z),ce.forEach(b.z),D=Object(b.p)(p),Object(b.n)(T.$$.fragment,p),Y=Object(b.p)(p),$=Object(b.o)(p,"DIV",{class:!0});var re=Object(b.m)($);V=Object(b.o)(re,"P",{});var ae=Object(b.m)(V);G=Object(b.q)(ae,"Our course required that the project was written in "),R=Object(b.o)(ae,"STRONG",{});var Oe=Object(b.m)(R);N=Object(b.q)(Oe,"Java"),Oe.forEach(b.z),F=Object(b.q)(ae,". However, we\ndid notice some performance issues and a large memory footprint when the\ndocument size increased. Therefore, I decided to rewrite the project in\n"),M=Object(b.o)(ae,"STRONG",{});var oe=Object(b.m)(M);P=Object(b.q)(oe,"C"),oe.forEach(b.z),W=Object(b.q)(ae," during my Winter break, with the main goal of optimizing the largest\nperformance bottlenecks we observed in Java."),ae.forEach(b.z),re.forEach(b.z),p.forEach(b.z),H=Object(b.p)(j),S=Object(b.o)(j,"DIV",{class:!0});var ie=Object(b.m)(S);B=Object(b.o)(ie,"A",{href:!0,class:!0});var ne=Object(b.m)(B);K=Object(b.q)(ne,"Check it out on Github"),ne.forEach(b.z),ie.forEach(b.z),this.h()},h(){document.title="sequence-crdt",Object(b.i)(r,"class","font-mono text-center"),Object(b.i)(i,"class","text-center italic"),h.src!==(p=e[2])&&Object(b.i)(h,"src",p),Object(b.i)(h,"alt",e[0]),Object(b.i)(h,"class","mx-auto max-h-48"),Object(b.i)(u,"class","px-3 py-1 card leading-8"),Object(b.i)(C,"href","https://conclave-team.github.io/conclave-site/"),Object(b.i)(E,"class","px-3 py-1 card leading-8"),Object(b.i)($,"class","px-3 py-1 card leading-8"),Object(b.i)(c,"class","mx-auto my-10 prose space-y-3"),Object(b.i)(B,"href",e[3]),Object(b.i)(B,"class","p-3 italic font-bold cta-button"),Object(b.i)(S,"class","flex justify-center my-10")},m(e,j){Object(b.J)(e,t,j),Object(b.J)(e,c,j),Object(b.g)(c,r),Object(b.g)(r,a),Object(b.g)(a,O),Object(b.g)(c,o),Object(b.g)(c,i),Object(b.g)(i,n),Object(b.g)(n,s),Object(b.g)(n,d),Object(b.g)(d,l),Object(b.g)(n,g),Object(b.g)(c,m),Object(b.g)(c,h),Object(b.g)(c,f),Object(b.g)(c,u),Object(b.g)(u,v),Object(b.g)(v,y),Object(b.g)(v,z),Object(b.g)(z,w),Object(b.g)(v,A),Object(b.g)(c,q),Object(b.g)(c,E),Object(b.g)(E,x),Object(b.g)(x,I),Object(b.g)(x,C),Object(b.g)(C,k),Object(b.g)(x,J),Object(b.g)(c,D),Object(b.M)(T,c,null),Object(b.g)(c,Y),Object(b.g)(c,$),Object(b.g)($,V),Object(b.g)(V,G),Object(b.g)(V,R),Object(b.g)(R,N),Object(b.g)(V,F),Object(b.g)(V,M),Object(b.g)(M,P),Object(b.g)(V,W),Object(b.J)(e,H,j),Object(b.J)(e,S,j),Object(b.g)(S,B),Object(b.g)(B,K),L=!0},p:b.N,i(e){L||(Object(b.db)(T.$$.fragment,e),L=!0)},o(e){Object(b.eb)(T.$$.fragment,e),L=!1},d(e){e&&Object(b.z)(t),e&&Object(b.z)(c),Object(b.x)(T),e&&Object(b.z)(H),e&&Object(b.z)(S)}}}const O={};function o(e){const{projectName:t,tech:c,logo:b,github:j}=r.a.projects["sequence-crdt"];return[t,c,b,j]}class i extends b.b{constructor(e){super(),Object(b.I)(this,e,o,a,b.T,{})}}t.default=i}}]);