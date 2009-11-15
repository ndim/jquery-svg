/* http://keith-wood.name/svg.html
   SVG for jQuery v1.3.0.
   Written by Keith Wood (kbwood@virginbroadband.com.au) August 2007.
   Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and 
   MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses. 
   Please attribute the author if you use it. */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(u($){u 2c(){7.1T=[];7.1U=[];7.2d=[];7.2d[\'\']={2e:\'3F 3G\',2R:\'3H 1b 3I 3J 3K 1V\'};7.1W=7.2d[\'\'];7.3L=1x 3M().3N()}8 m=\'3O\';$.G(2c.1J,{1C:\'3P\',1y:\'2f://2g.2h.2i/3Q/D\',1f:\'2f://2g.2h.2i/3R/2j\',2S:2k,2T:u(a,b){B($(a).2U(\'.\'+7.1C)){w}$(a).2l(7.1C);B($.1b.2m){B(!a.E){a.E=\'D\'+(3S++)}7.1T[a.E]=b;a.2V=\'<3T 1z="2n/D+2W" O="\'+a.2o+\'" P="\'+a.2p+\'" 3U="\'+(b.3V||\'\')+\'3W.D"/>\'}R B(1K.3X.3Y(\'2f://2g.2h.2i/3Z/40/41#1V\',\'1.1\')||($.1b.2X&&2Y($.1b.1L.42(2))>=9)||($.1b.43&&2Y($.1b.1L)>=44)){8 c=1K.2q(7.1y,\'D\');c.1l(\'1L\',\'1.1\');c.1l(\'O\',a.2o);c.1l(\'P\',a.2p);a.11(c);7.2r(a,c,b)}R{a.2V=\'<p 1D="45">\'+7.1W.2R+\'</p>\'}},2Z:u(){Y(8 i=0;i<1K.2s.W;i++){8 a=1K.2s[i].30;B(!$(a).1X(7.1C)||$.2t(a,m)){46}8 b=X;47{b=1K.2s[i].48()}49(e){4a(\'$.D.2Z()\',4b);w}b=(b?b.1Y:X);B(b){7.2r(a,b)}}},2r:u(a,b,c){8 c=c||7.1T[a.E];7.1T[a.E]=X;8 d=1x 7.2S(b,a);$.2t(a,m,d);B(c.31){d.32(c.31)}B(c.F){d.1M(c.F)}B(c.1m){c.1m.1g(a,[d])}},4c:u(a){a=(1c a==\'1n\'?$(a)[0]:(a.33?a[0]:a));w $.2t(a,m)},4d:u(a){8 b=$(a);B(!b.2U(\'.\'+7.1C)){w}b.2u(7.1C).4e();$.4f(a,m)},4g:u(a,b){7.1U.4h([a,b])}});u 2k(a,b){7.U=a;7.1E=b;Y(8 i=0;i<$.D.1U.W;i++){8 c=$.D.1U[i];7[c[0]]=1x c[1](7)}}$.G(2k.1J,{4i:u(){w 7.1E.2o},4j:u(){w 7.1E.2p},4k:u(){w 7.U},1M:u(a,b){B(b){Y(8 i=7.U.1d.W-1;i>=0;i--){8 c=7.U.1d.1Z(i);B(!(c.12==\'4l\'||c.12==\'1L\'||c.12.1F(0,5)==\'2v\')){7.U.1d.4m(c.12)}}}Y(8 d 34 a){7.U.1l(d,a[d])}w 7},35:u(a){w 7.U.15.35(a)},K:u(b,c,d){c.36(0,0,\'I\');c.36(c.W,0,\'F\');8 e={};8 f=0;B(b[0]!=X&&(1c b[0]!=\'2w\'||!b[0].12)){e[\'I\']=X;f=1}Y(8 i=0;i<b.W;i++){e[c[i+f]]=b[i]}B(d){$.1o(d,u(i,a){B(1c e[a]==\'2w\'){e.F=e[a];e[a]=X}})}w e},37:u(a,b,c){8 d=7.K(J,[\'16\']);8 e=7.N(d.I,\'37\',d.F||{});e.11(7.U.15.1h(d.16));w e},4n:u(a,b,c){8 d=7.K(J,[\'16\']);8 e=7.N(d.I,\'4o\',d.F||{});e.11(7.U.15.1h(d.16));w e},38:u(a,b,c){8 d=7.K(J,[\'E\'],[\'E\']);w 7.N(d.I,\'38\',$.G((d.E?{E:d.E}:{}),d.F||{}))},39:u(a,b,c,d,e,f,g){8 h=7.K(J,[\'E\',\'1e\',\'1p\',\'1q\',\'1r\']);w 7.N(h.I,\'39\',$.G({E:h.E,2x:h.1e+\' \'+h.1p+\' \'+h.1q+\' \'+h.1r},h.F||{}))},3a:u(a,b,c,d,e,f,g,h){8 i=7.K(J,[\'E\',\'2y\',\'2z\',\'3b\',\'3c\',\'21\'],[\'21\']);w 7.N(i.I,\'3a\',$.G({E:i.E,2y:i.2y,2z:i.2z,4p:i.3b,4q:i.3c,21:i.21||\'4r\'},i.F||{}))},22:u(a,b,c){8 d=7.K(J,[\'2A\']);8 e=7.N(d.I,\'22\',$.G({1z:\'16/3d\'},d.F||{}));e.11(7.U.15.1h(d.2A));B($.1b.4s){$(\'4t\').4u(\'<22 1z="16/3d">\'+d.2A+\'</22>\')}w e},1N:u(a,b,c,d){8 e=7.K(J,[\'1N\',\'1z\'],[\'1z\']);8 f=7.N(e.I,\'1N\',$.G({1z:e.1z||\'16/4v\'},e.F||{}));f.11(7.U.15.1h(7.3e(e.1N)));B(!$.1b.2X){$.4w(e.1N)}w f},3f:u(a,b,c,d,e,f,g,h){8 i=7.K(J,[\'E\',\'23\',\'1e\',\'1p\',\'1q\',\'1r\'],[\'1e\']);8 j=$.G({E:i.E},(i.1e!=X?{1e:i.1e,1p:i.1p,1q:i.1q,1r:i.1r}:{}));w 7.2B(i.I,\'3f\',$.G(j,i.F||{}),i.23)},3g:u(a,b,c,d,e,r,f,g,h){8 i=7.K(J,[\'E\',\'23\',\'19\',\'1i\',\'r\',\'2C\',\'2D\'],[\'19\']);8 j=$.G({E:i.E},(i.19!=X?{19:i.19,1i:i.1i,r:i.r,2C:i.2C,2D:i.2D}:{}));w 7.2B(i.I,\'3g\',$.G(j,i.F||{}),i.23)},2B:u(a,b,c,d){8 e=7.N(a,b,c);Y(8 i=0;i<d.W;i++){8 f=d[i];7.N(e,\'2E\',$.G({4x:f[0],\'2E-4y\':f[1]},(f[2]!=X?{\'2E-4z\':f[2]}:{})))}w e},3h:u(a,b,x,y,c,d,e,f,g,h,i){8 j=7.K(J,[\'E\',\'x\',\'y\',\'O\',\'P\',\'1s\',\'24\',\'25\',\'26\'],[\'1s\']);8 k=$.G({E:j.E,x:j.x,y:j.y,O:j.O,P:j.P},(j.1s!=X?{2x:j.1s+\' \'+j.24+\' \'+j.25+\' \'+j.26}:{}));w 7.N(j.I,\'3h\',$.G(k,j.F||{}))},3i:u(a,b,x,y,c,d,e){8 f=7.K(J,[\'E\',\'x\',\'y\',\'O\',\'P\']);w 7.N(f.I,\'3i\',$.G({E:f.E,x:f.x,y:f.y,O:f.O,P:f.P},f.F||{}))},4A:u(){w 1x 2F()},4B:u(){w 1x 2G()},D:u(a,x,y,b,c,d,e,f,g,h){8 i=7.K(J,[\'x\',\'y\',\'O\',\'P\',\'1s\',\'24\',\'25\',\'26\'],[\'1s\']);8 j=$.G({x:i.x,y:i.y,O:i.O,P:i.P},(i.1s!=X?{2x:i.1s+\' \'+i.24+\' \'+i.25+\' \'+i.26}:{}));w 7.N(i.I,\'D\',$.G(j,i.F||{}))},4C:u(a,b,c){8 d=7.K(J,[\'E\'],[\'E\']);w 7.N(d.I,\'g\',$.G({E:d.E},d.F||{}))},3j:u(a,x,y,b,c,d,e){8 f=7.K(J,[\'x\',\'y\',\'O\',\'P\',\'1t\']);B(1c f.x==\'1n\'){f.1t=f.x;f.F=f.y;f.x=f.y=f.O=f.P=X}8 g=7.N(f.I,\'3j\',$.G({x:f.x,y:f.y,O:f.O,P:f.P},f.F||{}));g.1A($.D.1f,\'1j\',f.1t);w g},4D:u(a,b,c){8 d=7.K(J,[\'1t\']);8 e=7.N(d.I,\'a\',d.F);e.1A($.D.1f,\'1j\',d.1t);w e},2n:u(a,x,y,b,c,d,e){8 f=7.K(J,[\'x\',\'y\',\'O\',\'P\',\'1t\']);8 g=7.N(f.I,\'2n\',$.G({x:f.x,y:f.y,O:f.O,P:f.P},f.F||{}));g.1A($.D.1f,\'1j\',f.1t);w g},17:u(a,b,c){8 d=7.K(J,[\'17\']);w 7.N(d.I,\'17\',$.G({d:(d.17.17?d.17.17():d.17)},d.F||{}))},3k:u(a,x,y,b,c,d,e,f){8 g=7.K(J,[\'x\',\'y\',\'O\',\'P\',\'1u\',\'1G\'],[\'1u\']);w 7.N(g.I,\'3k\',$.G({x:g.x,y:g.y,O:g.O,P:g.P},(g.1u?{1u:g.1u,1G:g.1G}:{}),g.F||{}))},3l:u(a,b,c,r,d){8 e=7.K(J,[\'19\',\'1i\',\'r\']);w 7.N(e.I,\'3l\',$.G({19:e.19,1i:e.1i,r:e.r},e.F||{}))},3m:u(a,b,c,d,e,f){8 g=7.K(J,[\'19\',\'1i\',\'1u\',\'1G\']);w 7.N(g.I,\'3m\',$.G({19:g.19,1i:g.1i,1u:g.1u,1G:g.1G},g.F||{}))},3n:u(a,b,c,d,e,f){8 g=7.K(J,[\'1e\',\'1p\',\'1q\',\'1r\']);w 7.N(g.I,\'3n\',$.G({1e:g.1e,1p:g.1p,1q:g.1q,1r:g.1r},g.F||{}))},3o:u(a,b,c){8 d=7.K(J,[\'1O\']);w 7.2H(d.I,\'3o\',d.1O,d.F)},3p:u(a,b,c){8 d=7.K(J,[\'1O\']);w 7.2H(d.I,\'3p\',d.1O,d.F)},2H:u(a,b,c,d){8 e=\'\';Y(8 i=0;i<c.W;i++){e+=c[i].1H()+\' \'}w 7.N(a,b,$.G({1O:$.27(e)},d||{}))},16:u(a,x,y,b,c){8 d=7.K(J,[\'x\',\'y\',\'1P\']);B(1c d.x==\'1n\'&&J.W<4){d.1P=d.x;d.F=d.y;d.x=d.y=X}w 7.2I(d.I,\'16\',d.1P,$.G({x:(d.x&&13(d.x)?d.x.1H(\' \'):d.x),y:(d.y&&13(d.y)?d.y.1H(\' \'):d.y)},d.F||{}))},2J:u(a,b,c,d){8 e=7.K(J,[\'17\',\'1P\']);8 f=7.2I(e.I,\'4E\',e.1P,e.F||{});f.1A($.D.1f,\'1j\',e.17);w f},2I:u(a,b,c,d){8 e=7.N(a,b,d);B(1c c==\'1n\'){e.11(e.15.1h(c))}R{Y(8 i=0;i<c.18.W;i++){8 f=c.18[i];B(f[0]==\'3q\'){8 g=7.N(e,f[0],f[2]);g.11(e.15.1h(f[1]));e.11(g)}R B(f[0]==\'3r\'){8 g=7.N(e,f[0],f[2]);g.1A($.D.1f,\'1j\',f[1]);e.11(g)}R B(f[0]==\'2J\'){8 h=$.G({},f[2]);h.1j=X;8 g=7.N(e,f[0],h);g.1A($.D.1f,\'1j\',f[2].1j);g.11(e.15.1h(f[1]));e.11(g)}R{e.11(e.15.1h(f[1]))}}}w e},4F:u(a,b,c){8 d=7.K(J,[\'3s\']);w 7.N(d.I,d.3s,d.F||{})},N:u(a,b,c){a=a||7.U;8 d=7.U.15.2q($.D.1y,b);Y(8 b 34 c){8 e=c[b];B(e!=X&&e!=X&&(1c e!=\'1n\'||e!=\'\')){d.1l(b,e)}}a.11(d);w d},2K:u(b,c){8 d=7.K(J,[\'1I\']);8 e=7;d.I=d.I||7.U;d.1I=(d.1I.33?d.1I:$(d.1I));d.1I.1o(u(){8 a=e.2L(7);B(a){d.I.11(a)}});w 7},2L:u(a){8 b=X;B(a.1v==1){b=7.U.15.2q($.D.1y,7.2M(a.12));Y(8 i=0;i<a.1d.W;i++){8 c=a.1d.1Z(i);B(c.12!=\'2v\'&&c.14){B(c.4G==\'2j\'){b.1A($.D.1f,c.4H,c.14)}R{b.1l(7.2M(c.12),c.14)}}}Y(8 i=0;i<a.2N.W;i++){8 d=7.2L(a.2N[i]);B(d){b.11(d)}}}R B(a.1v==3){B($.27(a.14)){b=7.U.15.1h(a.14)}}R B(a.1v==4){B($.27(a.14)){b=7.U.15.4I(a.14)}}w b},2M:u(a){a=(a.1F(0,1)>=\'A\'&&a.1F(0,1)<=\'Z\'?a.4J():a);w(a.1F(0,4)==\'D:\'?a.1F(4):a)},32:u(g,h){B(1c h==\'4K\'){h={3t:h}}R{h=h||{}}B(!h.3t){7.3u(28)}8 j=[7.U.1Q(\'O\'),7.U.1Q(\'P\')];8 k=7;8 l=$.4L({4M:g,4N:($.1b.2m?\'16\':\'2W\'),4O:u(a){B($.1b.2m){8 b=1x 4P(\'4Q.4R\');b.4S=28;b.4T=28;b.4U(a);B(b.3v.4V!=0){8 c=$.D.1W.2e+\': \'+b.3v.4W;B(h.1m){h.1m.1g(k.1E,[k,c])}R{k.16(X,10,20,c)}w}a=b}8 d={};Y(8 i=0;i<a.1Y.1d.W;i++){8 e=a.1Y.1d.1Z(i);B(!(e.12==\'1L\'||e.12.1F(0,5)==\'2v\')){d[e.12]=e.14}}k.1M(d,29);8 f=a.1Y.2N;Y(8 i=0;i<f.W;i++){k.2K(X,f[i])}B(!h.4X){k.1M({O:j[0],P:j[1]})}B(h.1m){h.1m.1g(k.1E,[k])}},4Y:u(a,b,c){b=$.D.1W.2e+\': \'+b+(c?\' \'+c.4Z:\'\');B(h.1m){h.1m.1g(k.1E,[k,b])}R{k.16(X,10,20,b)}}});w 7},3w:u(a){a.30.3x(a);w 7},3u:u(a){B(a){7.1M({},29)}3y(7.U.2a){7.U.3x(7.U.2a)}w 7},50:u(){w 7.2O(7.U)},2O:u(a){8 b=\'\';B(!a){w b}B(a.1v==3){b=a.14}R B(a.1v==4){b=\'<![51[\'+a.14+\']]>\'}R{b=\'<\'+a.12;B(a.1d){Y(8 i=0;i<a.1d.W;i++){8 c=a.1d.1Z(i);B(!($.27(c.14)==\'\'||c.14.3z(/^\\[2w/)||c.14.3z(/^u/))){b+=\' \'+(c.2b==$.D.1f?\'2j:\':\'\')+c.12+\'="\'+c.14+\'"\'}}}B(a.2a){b+=\'>\';8 d=a.2a;3y(d){b+=7.2O(d);d=d.52}b+=\'</\'+a.12+\'>\'}R{b+=\'/>\'}}w b},3e:u(a){a=a.2P(/&/g,\'&53;\');a=a.2P(/</g,\'&54;\');a=a.2P(/>/g,\'&55;\');w a}});u 2F(){7.1a=\'\'}$.G(2F.1J,{3A:u(){7.1a=\'\';w 7},56:u(x,y,a){a=(13(x)?y:a);w 7.1B((a?\'m\':\'M\'),x,y)},57:u(x,y,a){a=(13(x)?y:a);w 7.1B((a?\'l\':\'L\'),x,y)},58:u(x,a){7.1a+=(a?\'h\':\'H\')+(13(x)?x.1H(\' \'):x);w 7},59:u(y,a){7.1a+=(a?\'v\':\'V\')+(13(y)?y.1H(\' \'):y);w 7},5a:u(a,b,c,d,x,y,e){e=(13(a)?b:e);w 7.1B((e?\'c\':\'C\'),a,b,c,d,x,y)},5b:u(a,b,x,y,c){c=(13(a)?b:c);w 7.1B((c?\'s\':\'S\'),a,b,x,y)},5c:u(a,b,x,y,c){c=(13(a)?b:c);w 7.1B((c?\'q\':\'Q\'),a,b,x,y)},5d:u(x,y,a){a=(13(x)?y:a);w 7.1B((a?\'t\':\'T\'),x,y)},1B:u(a,b,c,d,e,f,g){B(13(b)){Y(8 i=0;i<b.W;i++){8 h=b[i];7.1a+=(i==0?a:\' \')+h[0]+\',\'+h[1]+(h.W<4?\'\':\' \'+h[2]+\',\'+h[3]+(h.W<6?\'\':\' \'+h[4]+\',\'+h[5]))}}R{7.1a+=a+b+\',\'+c+(d==X?\'\':\' \'+d+\',\'+e+(f==X?\'\':\' \'+f+\',\'+g))}w 7},5e:u(a,b,c,d,e,x,y,f){f=(13(a)?b:f);7.1a+=(f?\'a\':\'A\');B(13(a)){Y(8 i=0;i<a.W;i++){8 g=a[i];7.1a+=(i==0?\'\':\' \')+g[0]+\',\'+g[1]+\' \'+g[2]+\' \'+(g[3]?\'1\':\'0\')+\',\'+(g[4]?\'1\':\'0\')+\' \'+g[5]+\',\'+g[6]}}R{7.1a+=a+\',\'+b+\' \'+c+\' \'+(d?\'1\':\'0\')+\',\'+(e?\'1\':\'0\')+\' \'+x+\',\'+y}w 7},5f:u(){7.1a+=\'z\';w 7},17:u(){w 7.1a}});u 2G(){7.18=[]}$.G(2G.1J,{3A:u(){7.18=[];w 7},1n:u(a){7.18[7.18.W]=[\'16\',a];w 7},5g:u(a,b){7.18[7.18.W]=[\'3q\',a,b];w 7},1t:u(a,b){7.18[7.18.W]=[\'3r\',a,b];w 7},17:u(a,b,c){7.18[7.18.W]=[\'2J\',b,$.G({1j:a},c||{})];w 7}});$.1k.D=u(a){8 b=3B.1J.5h.5i(J,1);B(1c a==\'1n\'&&a==\'5j\'){w $.D[\'3C\'+a+\'1V\'].1g($.D,[7[0]].3D(b))}w 7.1o(u(){B(1c a==\'1n\'){$.D[\'3C\'+a+\'1V\'].1g($.D,[7].3D(b))}R{$.D.2T(7,a||{})}})};8 o=$.1k.2l;$.1k.2l=u(c){c=c||\'\';8 d=u(a,b){w b+($.2Q(a,b.1R(/\\s+/))==-1?(b?\' \':\'\')+a:\'\')};w 7.1o(u(){B(7.1v==1&&7.2b==$.D.1y){8 b=7;$.1o(c.1R(/\\s+/),u(i,a){B(b.1w){b.1w.1S=d(a,b.1w.1S)}R{b.1l(\'1D\',d(a,b.1Q(\'1D\')))}})}R{o.1g($(7),[c])}})};8 p=$.1k.2u;$.1k.2u=u(d){d=d||\'\';8 e=u(a,b){b=b.1R(/\\s+/);8 c=$.2Q(a,b);w $.5k(b,u(n,i){w i!=c}).1H(\' \')};w 7.1o(u(){B(7.1v==1&&7.2b==$.D.1y){8 b=7;$.1o(d.1R(/\\s+/),u(i,a){B(b.1w){b.1w.1S=e(a,b.1w.1S)}R{b.1l(\'1D\',e(a,b.1Q(\'1D\')))}})}R{p.1g($(7),[d])}})};8 q=$.1k.3E;$.1k.3E=u(a){7[(7.1X(a)?\'3w\':\'2K\')+\'5l\'](a)};8 s=$.1k.1X;$.1k.1X=u(b){b=b||\'\';8 c=28;7.1o(u(){B(7.1v==1&&7.2b==$.D.1y){8 a=(7.1w?7.1w.1S:7.1Q(\'1D\')).1R(/\\s+/);B($.2Q(b,a)>-1){c=29}}R{B(s.1g($(7),[b])){c=29}}w!c});w c};u 13(a){w(a&&a.5m==3B)}$.D=1x 2c()})(5n);',62,334,'|||||||this|var||||||||||||||||||||||function||return|||||if||svg|id|settings|extend||parent|arguments|_args|||_makeNode|width|height||else|||_svg||length|null|for|||appendChild|nodeName|isArray|nodeValue|ownerDocument|text|path|_parts|cx|_path|browser|typeof|attributes|x1|xlinkNS|apply|createTextNode|cy|href|fn|setAttribute|onLoad|string|each|y1|x2|y2|vx|ref|rx|nodeType|className|new|svgNS|type|setAttributeNS|_coords|markerClassName|class|_container|substring|ry|join|node|prototype|document|version|configure|script|points|value|getAttribute|split|baseVal|_settings|_extensions|SVG|local|hasClass|documentElement|item||orient|style|stops|vy|vwidth|vheight|trim|false|true|firstChild|namespaceURI|SVGManager|regional|errorLoadingText|http|www|w3|org|xlink|SVGWrapper|addClass|msie|image|clientWidth|clientHeight|createElementNS|_afterLoad|embeds|data|removeClass|xmlns|object|viewBox|refX|refY|styles|_gradient|fx|fy|stop|SVGPath|SVGText|_poly|_text|textpath|add|_cloneAsSVG|_checkName|childNodes|_toSVG|replace|inArray|notSupportedText|_wrapperClass|_attachSVG|is|innerHTML|xml|mozilla|parseInt|_registerSVG|parentNode|loadURL|load|jquery|in|getElementById|splice|title|defs|symbol|marker|mWidth|mHeight|css|_escapeXML|linearGradient|radialGradient|pattern|mask|use|rect|circle|ellipse|line|polyline|polygon|tspan|tref|name|addTo|clear|parseError|remove|removeChild|while|match|reset|Array|_|concat|toggleClass|Error|loading|This|does|not|support|_uuid|Date|getTime|svgwrapper|hasSVG|2000|1999|uuid|embed|src|initPath|blank|implementation|hasFeature|TR|SVG11|feature|substr|safari|525|svg_error|continue|try|getSVGDocument|catch|setTimeout|250|_getSVG|_destroySVG|empty|removeData|addExtension|push|_width|_height|root|onload|removeNamedItem|describe|desc|markerWidth|markerHeight|auto|opera|head|append|javascript|globalEval|offset|color|opacity|createPath|createText|group|link|textPath|other|prefix|localName|createCDATASection|toLowerCase|boolean|ajax|url|dataType|success|ActiveXObject|Microsoft|XMLDOM|validateOnParse|resolveExternals|loadXML|errorCode|reason|changeSize|error|message|toSVG|CDATA|nextSibling|amp|lt|gt|moveTo|lineTo|horizTo|vertTo|curveCTo|smoothCTo|curveQTo|smoothQTo|arcTo|close|span|slice|call|get|grep|Class|constructor|jQuery'.split('|'),0,{}))