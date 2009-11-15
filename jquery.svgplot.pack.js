/* http://keith-wood.name/svg.html
   SVG plotting extension for jQuery v1.4.2.
   Written by Keith Wood (kbwood{at}iinet.com.au) December 2008.
   Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and
   MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses.
   Please attribute the author if you use it. */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(r($){$.1U.2u(\'2d\',1V);r 1V(a){4.w=a;4.1k=1l;4.N={13:\'\',1m:25,1C:{1n:\'1D\'}};4.14=[0.1,0.1,0.8,0.9];4.1E={19:\'2e\',Z:\'1W\'};4.U=[];4.1F=1a;4.16=[];4.1o=A;4.1X=1p 2v().2w();4.u=4.w.1U(0,0,0,0,{1b:\'1U-2d\'});4.I=1p 1G(4);4.I.1q(\'X\',20);4.O=1p 1G(4);4.O.1q(\'Y\',20);4.Q=1p 1Y(4);4.1k=1a}$.M(1V.1H,{X:0,Y:1,W:2,H:3,L:0,T:1,R:2,B:3,2x:r(a){q(F.E==0){6 4.u}4.u=a;6 4},2f:r(a,b,c,d){q(F.E==0){6 4.14}4.14=(1I(a)?a:[a,b,c,d]);4.G();6 4},1J:r(a,b,c){q(F.E==0){6 4.1E}q(J b==\'2g\'){c=b;b=A}4.1E=$.M({19:a},(b?{Z:b}:{}),c||{});4.G();6 4},2y:r(a,b){q(F.E==0){6 4.U}4.U=[(J a==\'17\'?{Z:a}:a),(J b==\'17\'?{Z:b}:b)];q(4.U[0]==A&&4.U[1]==A){4.U=[]}4.G();6 4},2z:r(a){q(F.E==0){6 4.1F}4.1F=a;6 4},1q:r(a,b,c,d){q(F.E==0){6 4.N}q(J b!=\'1g\'){d=c;c=b;b=A}q(J c!=\'17\'){d=c;c=A}4.N={13:a,1m:b||4.N.1m,1C:$.M({1n:\'1D\'},(c?{19:c}:{}),d||{})};4.G();6 4},2A:r(a,b,c,d,e,f,g){4.16.2B(1p 1Z(4,a,b,c,d,e,f,g));4.G();6 4},2C:r(i){6(F.E>0?4.16[i]:A)||4.16},2D:r(){4.1k=1l;6 4},2E:r(){4.1k=1a;4.G();6 4},2F:r(a){4.1o=a;6 4},G:r(){q(!4.1k){6}21(4.u.2h){4.u.2G(4.u.2h)}q(!4.u.22){4.w.2H.2I(4.u)}q(!4.u.V){4.u.2i(\'V\',23(4.u.24(\'V\'),10)||4.w.26())}1r q(4.u.V.18){4.u.V.18.13=4.u.V.18.13||4.w.26()}1r{4.u.V=4.u.V||4.w.26()}q(!4.u.11){4.u.2i(\'11\',23(4.u.24(\'11\'),10)||4.w.27())}1r q(4.u.11.18){4.u.11.18.13=4.u.11.18.13||4.w.27()}1r{4.u.11=4.u.11||4.w.27()}4.2j();7 a=4.1c();7 b=4.w.2J(4.u,\'2k\',{2K:\'2l\'+4.1X});4.w.1K(b,a[4.X],a[4.Y],a[4.W],a[4.H]);4.C=4.w.1h(4.u,{1b:\'2L\',2k:\'2M(#2l\'+4.1X+\')\'});4.28(1a);4.28(1l);29(7 i=0;i<4.16.E;i++){4.2m(4.16[i],i)}4.2n();4.2o()},1L:r(a,b){6(!a[b]?23(a.24(b),10):(a[b].18?a[b].18.13:a[b]))},1c:r(a){7 b=(a!=A);a=a||4.14;7 c=4.1L(4.u,\'V\');7 d=4.1L(4.u,\'11\');7 e=(a[4.L]>1?a[4.L]:c*a[4.L]);7 f=(a[4.T]>1?a[4.T]:d*a[4.T]);7 g=(a[4.R]>1?a[4.R]:c*a[4.R])-e;7 h=(a[4.B]>1?a[4.B]:d*a[4.B])-f;q(4.1F&&!b){7 i=1s.D(g/(4.I.t.K-4.I.t.D),h/(4.O.t.K-4.O.t.D));g=i*(4.I.t.K-4.I.t.D);h=i*(4.O.t.K-4.O.t.D)}6[e,f,g,h]},1M:r(){7 a=4.1c();6[a[4.W]/(4.I.t.K-4.I.t.D),a[4.H]/(4.O.t.K-4.O.t.D)]},2j:r(a,b){7 c=4.w.1h(4.u,{1b:\'2N\'});7 d=4.1c();4.w.1K(c,d[4.X],d[4.Y],d[4.W],d[4.H],4.1E);q(4.U[0]&&4.O.z.P&&!b){4.2a(c,1a,4.U[0],d)}q(4.U[1]&&4.I.z.P&&!a){4.2a(c,1l,4.U[1],d)}6 c},2a:r(a,b,c,d){7 g=4.w.1h(a,c);7 e=(b?4.O:4.I);7 f=4.1M();7 h=1s.2b(e.t.D/e.z.P)*e.z.P;h+=(h<=e.t.D?e.z.P:0);21(h<e.t.K){7 v=(b?e.t.K-h:h-e.t.D)*f[b?1:0]+(b?d[4.Y]:d[4.X]);4.w.1t(g,(b?d[4.X]:v),(b?v:d[4.Y]),(b?d[4.X]+d[4.W]:v),(b?v:d[4.Y]+d[4.H]));h+=e.z.P}},28:r(a){7 b=(a?\'x\':\'y\')+\'2O\';7 c=(a?4.I:4.O);7 d=(a?4.O:4.I);7 e=4.1c();7 f=4.1M();7 g=4.w.1h(4.C,$.M({1b:b},c.1u));7 h=4.w.1h(4.C,$.M({1b:b+\'2P\',1n:(a?\'1D\':\'1v\')},c.1N));7 i=(a?d.t.K:-d.t.D)*f[a?1:0]+(a?e[4.Y]:e[4.X]);4.w.1t(g,(a?e[4.X]:i),(a?i:e[4.Y]),(a?e[4.X]+e[4.W]:i),(a?i:e[4.Y]+e[4.H]));q(c.z.P){7 j=c.z.1O;7 k=1s.2b(c.t.D/c.z.P)*c.z.P;k=(k<c.t.D?k+c.z.P:k);7 l=(!c.z.1d?c.t.K+1:1s.2b(c.t.D/c.z.1d)*c.z.1d);l=(l<c.t.D?l+c.z.1d:l);7 m=[(c.z.1e==\'2Q\'||c.z.1e==\'2c\'?-1:0),(c.z.1e==\'2R\'||c.z.1e==\'2c\'?+1:0)];21(k<=c.t.K||l<=c.t.K){7 n=1s.D(k,l);7 o=(n==k?j:j/2);7 p=(a?n-c.t.D:c.t.K-n)*f[a?0:1]+(a?e[4.X]:e[4.Y]);4.w.1t(g,(a?p:i+o*m[0]),(a?i+o*m[0]:p),(a?p:i+o*m[1]),(a?i+o*m[1]:p));q(n==k&&n!=0){4.w.1w(h,(a?p:i-j),(a?i-j:p),\'\'+n)}k+=(n==k?c.z.P:0);l+=(n==l?c.z.1d:0)}}q(c.N){q(a){4.w.1w(4.u,e[4.X]-c.1i,i,c.N,$.M({1n:\'1v\'},c.1x||{}))}1r{4.w.1w(4.u,i,e[4.Y]+e[4.H]+c.1i,c.N,$.M({1n:\'1D\'},c.1x||{}))}}},2m:r(a,b){7 c=4.1c();7 d=4.1M();7 e=4.w.2S();7 f=a.1P||[4.I.t.D,4.I.t.K];7 g=(f[1]-f[0])/a.1y;7 h=1a;29(7 i=0;i<=a.1y;i++){7 x=f[0]+i*g;q(x>4.I.t.K+g){2T}q(x<4.I.t.D-g){2U}7 j=(x-4.I.t.D)*d[0]+c[4.X];7 k=c[4.H]-((a.1Q(x)-4.O.t.D)*d[1])+c[4.Y];e[(h?\'2V\':\'1t\')+\'2W\'](j,k);h=1l}4.w.2X(4.C,e,$.M({1b:\'2p\'+b,19:\'2e\',Z:a.1j,1z:a.1A},4.2q(a.1f),a.1R||{}))},2n:r(){4.w.1w(4.u,4.1L(4.u,\'V\')/2,4.N.1m,4.N.13,4.N.1C)},2o:r(){q(!4.Q.1S){6}7 g=4.w.1h(4.u,{1b:\'Q\'});7 a=4.1c(4.Q.14);4.w.1K(g,a[4.X],a[4.Y],a[4.W],a[4.H],4.Q.1T);7 b=a[4.W]>a[4.H];7 c=4.16.E;7 d=(b?a[4.W]:a[4.H])/c;7 e=a[4.X]+5;7 f=a[4.Y]+((b?a[4.H]:d)+4.Q.12)/2;29(7 i=0;i<c;i++){7 h=4.16[i];4.w.1K(g,e+(b?i*d:0),f+(b?0:i*d)-4.Q.12,4.Q.12,4.Q.12,{19:h.1j});4.w.1w(g,e+(b?i*d:0)+4.Q.12+5,f+(b?0:i*d),h.1f,4.Q.1B)}},2q:r(a){7 b=(!4.1o?\'\':4.1o.2Y().2Z(/r (.*)\\([\\s\\S]*/m,\'$1\'));6(!4.1o?{}:{30:\'2r.22.\'+b+\'(\\\'\'+a+\'\\\');\',31:\'2r.22.\'+b+\'(\\\'\\\');\'})}});r 1Z(a,b,c,d,e,f,g,h){q(J b!=\'17\'){h=g;g=f;f=e;e=d;d=c;c=b;b=A}q(!1I(d)){h=g;g=f;f=e;e=d;d=A}q(J e!=\'1g\'){h=g;g=f;f=e;e=A}q(J f!=\'17\'){h=g;g=f;f=A}q(J g!=\'1g\'){h=g;g=A}4.C=a;4.1f=b||\'\';4.1Q=c||2s;4.1P=d;4.1y=e||2t;4.1j=f||\'1W\';4.1A=g||1;4.1R=h||{}}$.M(1Z.1H,{32:r(a){q(F.E==0){6 4.1f}4.1f=a;4.C.G();6 4},2p:r(a,b){q(F.E==0){6 4.1Q}q(J a==\'r\'){b=a;a=A}4.1f=a||4.1f;4.1Q=b;4.C.G();6 4},33:r(a,b){q(F.E==0){6 4.1P}4.1P=(a==A?A:[a,b]);4.C.G();6 4},34:r(a){q(F.E==0){6 4.1y}4.1y=a;4.C.G();6 4},1J:r(a,b,c){q(F.E==0){6 $.M({Z:4.1j,1z:4.1A},4.1R)}q(J b!=\'1g\'){c=b;b=A}4.1j=a||4.1j;4.1A=b||4.1A;$.M(4.1R,c||{});4.C.G();6 4},1v:r(){6 4.C}});r 2s(x){6 x}r 1G(a,b,c,d,e,f){4.C=a;4.N=b||\'\';4.1x={};4.1i=0;4.1N={};4.1u={Z:\'1W\',1z:1};4.z={P:e||10,1d:f||0,1O:10,1e:\'2c\'};4.t={D:c||0,K:d||2t};4.35=0}$.M(1G.1H,{36:r(a,b){q(F.E==0){6 4.t}4.t.D=a;4.t.K=b;4.C.G();6 4},37:r(a,b,c,d){q(F.E==0){6 4.z}q(J c==\'17\'){d=c;c=A}4.z.P=a;4.z.1d=b;4.z.1O=c||4.z.1O;4.z.1e=d||4.z.1e;4.C.G();6 4},1q:r(a,b,c,d){q(F.E==0){6{1q:4.N,1m:4.1i,1J:4.1x}}q(J b!=\'1g\'){d=c;c=b;b=A}q(J c!=\'17\'){d=c;c=A}4.N=a;4.1i=(b!=A?b:4.1i);q(c||d){4.1x=$.M(d||{},(c?{19:c}:{}))}4.C.G();6 4},1J:r(a,b){q(F.E==0){6 4.1N}q(J a!=\'17\'){b=a;a=A}4.1N=$.M(b||{},(a?{19:a}:{}));4.C.G();6 4},1t:r(a,b,c){q(F.E==0){6 4.1u}q(J b!=\'1g\'){c=b;b=A}$.M(4.1u,{Z:a,1z:b||4.1u.1z},c||{});4.C.G();6 4},1v:r(){6 4.C}});r 1Y(a,b,c){4.C=a;4.1S=1a;4.14=[0.9,0.1,1.0,0.9];4.12=15;4.1T=b||{Z:\'38\'};4.1B=c||{}}$.M(1Y.1H,{39:r(a){q(F.E==0){6 4.1S}4.1S=a;4.C.G();6 4},2f:r(a,b,c,d){q(F.E==0){6 4.14}4.14=(1I(a)?a:[a,b,c,d]);4.C.G();6 4},1C:r(a,b,c){q(F.E==0){6{3a:4.12,3b:4.1T,3c:4.1B}}q(J a==\'2g\'){c=b;b=a;a=A}4.12=a||4.12;4.1T=b;4.1B=c||4.1B;4.C.G();6 4},1v:r(){6 4.C}});r 1I(a){6(a&&a.3d==3e)}})(3f)',62,202,'||||this||return|var|||||||||||||||||||if|function||_scale|_plotCont||_wrapper|||_ticks|null||_plot|min|length|arguments|_drawPlot||xAxis|typeof|max||extend|_title|yAxis|major|legend||||_gridlines|width||||stroke||height|_sampleSize|value|_area||_functions|string|baseVal|fill|true|class_|_getDims|minor|position|_name|number|group|_titleOffset|_stroke|_drawNow|false|offset|textAnchor|_onstatus|new|title|else|Math|line|_lineFormat|end|text|_titleFormat|_points|strokeWidth|_strokeWidth|_textSettings|settings|middle|_areaFormat|_equalXY|SVGPlotAxis|prototype|isArray|format|rect|_getValue|_getScales|_labelFormat|size|_range|_fn|_settings|_show|_bgSettings|svg|SVGPlot|black|_uuid|SVGPlotLegend|SVGPlotFunction||while|parent|parseInt|getAttribute||_width|_height|_drawAxis|for|_drawGridlines|floor|both|plot|none|area|object|firstChild|setAttribute|_drawChartBackground|clipPath|clip|_plotFunction|_drawTitle|_drawLegend|fn|_showStatus|window|identity|100|addExtension|Date|getTime|container|gridlines|equalXY|addFunction|push|functions|noDraw|redraw|status|removeChild|_svg|appendChild|other|id|foreground|url|background|Axis|Labels|nw|se|createPath|break|continue|move|To|path|toString|replace|onmouseover|onmouseout|name|range|points|_crossAt|scale|ticks|gray|show|sampleSize|bgSettings|textSettings|constructor|Array|jQuery'.split('|'),0,{}))