/* http://keith-wood.name/svg.html
   SVG attribute animations for jQuery v1.4.1.
   Written by Keith Wood (kbwood{at}iinet.com.au) June 2008.
   Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and 
   MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses. 
   Please attribute the author if you use it. */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(z($){$.23([\'x\',\'y\',\'24\',\'2F\',\'2G\',\'2H\',\'2I\',\'2J\',\'r\',\'2K\',\'2L\',\'2M\',\'2N\',\'1z-24\',\'2O\',\'1A\',\'26-1A\',\'2P\',\'1z-1A\',\'2Q\',\'2R-2S\',\'2T\'],z(i,f){o g=f.1B(0).27()+f.1C(1);$.Q.R[\'D\'+g]=$.Q.R[\'D-\'+f]=z(a){o b=$.D.2U[f]||f;o c=a.E.W.1a(b);u(!a.S){a.k=(c?p(c.J):0);o d=a.1k.1l[\'D-\'+f]||a.1k.1l[\'D\'+g];u(/^[+-]=/.K(d)){a.l=a.k+p(d.28(/=/,\'\'))}a.S=1m}o e=(a.v*(a.l-a.k)+a.k)+(a.2V==\'%\'?\'%\':\'\');(c?c.J=e:a.E.1n(b,e))}});$.Q.R[\'29\']=$.Q.R[\'D-1o\']=z(a){o b=a.E.W.1a(\'1o\');u(!a.S){a.k=1D(b?b.J:\'\');o c=a.1k.1l[\'D-1o\']||a.1k.1l[\'29\'];a.l=1D(c);u(/^[+-]=/.K(c)){c=c.2a(\' \');1p(c.1b<4){c.2b(\'0\')}1q(o i=0;i<4;i++){u(/^[+-]=/.K(c[i])){a.l[i]=a.k[i]+p(c[i].28(/=/,\'\'))}}}a.S=1m}o d=$.2W(a.k,z(n,i){F(a.v*(a.l[i]-n)+n)}).2c(\' \');(b?b.J=d:a.E.1n(\'1o\',d))};z 1D(a){o b=a.2a(\' \');1q(o i=0;i<b.1b;i++){b[i]=p(b[i]);u(2X(b[i])){b[i]=0}}1p(b.1b<4){b.2b(0)}F b}$.Q.R[\'2Y\']=$.Q.R[\'D-1E\']=z(a){o b=a.E.W.1a(\'1E\');u(!a.S){a.k=1F(b?b.J:\'\');a.l=1F(a.l,a.k);a.S=1m}o c=\'\';1q(o i=0;i<a.l.L.1b;i++){2d(a.l.L.1B(i)){A\'t\':c+=(a.k.X!=a.l.X||a.k.Y!=a.l.Y?\' 2e(\'+(a.v*(a.l.X-a.k.X)+a.k.X)+\',\'+(a.v*(a.l.Y-a.k.Y)+a.k.Y)+\')\':\'\');B;A\'s\':c+=(a.k.T!=a.l.T||a.k.12!=a.l.12?\' 2f(\'+(a.v*(a.l.T-a.k.T)+a.k.T)+\',\'+(a.v*(a.l.12-a.k.12)+a.k.12)+\')\':\'\');B;A\'r\':c+=(a.k.13!=a.l.13||a.k.14!=a.l.14||a.k.15!=a.l.15?\' 2g(\'+(a.v*(a.l.13-a.k.13)+a.k.13)+\',\'+(a.v*(a.l.14-a.k.14)+a.k.14)+\',\'+(a.v*(a.l.15-a.k.15)+a.k.15)+\')\':\'\');B;A\'x\':c+=(a.k.M!=a.l.M?\' M(\'+(a.v*(a.l.M-a.k.M)+a.k.M)+\')\':\'\');A\'y\':c+=(a.k.N!=a.l.N?\' N(\'+(a.v*(a.l.N-a.k.N)+a.k.N)+\')\':\'\');B;A\'m\':o d=\'\';1q(o j=0;j<6;j++){d+=\',\'+(a.v*(a.l.17[j]-a.k.17[j])+a.k.17[j])}c+=\' 17(\'+d.1C(1)+\')\';B}}(b?b.J=c:a.E.1n(\'1E\',c))};z 1F(a,b){a=a||\'\';u(2Z a==\'31\'){a=a.J}o c=$.33({X:0,Y:0,T:0,12:0,13:0,14:0,15:0,M:0,N:0,17:[0,0,0,0,0,0]},b||{});c.L=\'\';o d=/([a-36-Z]+)\\(\\s*([+-]?[\\d\\.]+)\\s*(?:[\\s,]\\s*([+-]?[\\d\\.]+)\\s*(?:[\\s,]\\s*([+-]?[\\d\\.]+)\\s*(?:[\\s,]\\s*([+-]?[\\d\\.]+)\\s*[\\s,]\\s*([+-]?[\\d\\.]+)\\s*[\\s,]\\s*([+-]?[\\d\\.]+)\\s*)?)?)?\\)/g;o e=d.K(a);1p(e){2d(e[1]){A\'2e\':c.L+=\'t\';c.X=p(e[2]);c.Y=(e[3]?p(e[3]):0);B;A\'2f\':c.L+=\'s\';c.T=p(e[2]);c.12=(e[3]?p(e[3]):c.T);B;A\'2g\':c.L+=\'r\';c.13=p(e[2]);c.14=(e[3]?p(e[3]):0);c.15=(e[4]?p(e[4]):0);B;A\'M\':c.L+=\'x\';c.M=p(e[2]);B;A\'N\':c.L+=\'y\';c.N=p(e[2]);B;A\'17\':c.L+=\'m\';c.17=[p(e[2]),p(e[3]),p(e[4]),p(e[5]),p(e[6]),p(e[7])];B}e=d.K(a)}F c}$.23([\'26\',\'1z\'],z(i,e){o f=e.1B(0).27()+e.1C(1);$.Q.R[\'D\'+f]=$.Q.R[\'D-\'+e]=z(a){u(!a.S){a.k=1G(a.E,e);o b=(a.l==\'1i\');a.l=(b?1G(a.E.2h,e):1H(a.l));a.l[3]=b;a.S=1m}o c=a.E.W.1a(e);o d=\'1I(\'+[1c.1J(1c.1K(C((a.v*(a.l[0]-a.k[0]))+a.k[0],10),0),8),1c.1J(1c.1K(C((a.v*(a.l[1]-a.k[1]))+a.k[1],10),0),8),1c.1J(1c.1K(C((a.v*(a.l[2]-a.k[2]))+a.k[2],10),0),8)].2c(\',\')+\')\';d=(a.l[3]&&a.37==1?\'1i\':d);(c?c.J=d:a.E.1n(e,d))}});z 1G(a,b){o c;38{c=(a.W&&a.W.1a(b)?a.W.1a(b).J:\'\');u((c!=\'\'&&c!=\'1i\')||$(a).39(\'3a\')){B}}1p(a=a.2h);F 1H(c)}z 1H(a){o b;u(a&&a.3b==3c&&(a.1b==3||a.1b==4)){F a}u(b=/1I\\(\\s*([0-9]{1,3})\\s*,\\s*([0-9]{1,3})\\s*,\\s*([0-9]{1,3})\\s*\\)/.K(a)){F[C(b[1],10),C(b[2],10),C(b[3],10)]}u(b=/1I\\(\\s*([0-9]+(?:\\.[0-9]+)?)\\%\\s*,\\s*([0-9]+(?:\\.[0-9]+)?)\\%\\s*,\\s*([0-9]+(?:\\.[0-9]+)?)\\%\\s*\\)/.K(a)){F[p(b[1])*2.55,p(b[2])*2.55,p(b[3])*2.55]}u(b=/#([a-1d-1e-9]{2})([a-1d-1e-9]{2})([a-1d-1e-9]{2})/.K(a)){F[C(b[1],16),C(b[2],16),C(b[3],16)]}u(b=/#([a-1d-1e-9])([a-1d-1e-9])([a-1d-1e-9])/.K(a)){F[C(b[1]+b[1],16),C(b[2]+b[2],16),C(b[3]+b[3],16)]}F h[$.3d(a).3e()]||h[\'1i\']}o h={\'\':[8,8,8,1],1i:[8,8,8,1],3f:[G,1r,8],3g:[w,1L,2i],3h:[0,8,8],3i:[1s,8,3j],3k:[G,8,8],3l:[H,H,1f],3m:[8,1M,2j],3n:[0,0,0],3o:[8,1L,O],3p:[0,0,8],3q:[3r,43,3s],3t:[1N,42,42],3u:[1t,2k,1O],3v:[3w,3x,1u],3y:[1s,8,0],3z:[1P,P,30],3A:[8,1s,3B],3C:[2l,3D,3E],3F:[8,1r,1f],3G:[1f,20,60],3H:[0,8,8],3I:[0,0,I],3J:[0,I,I],3K:[2k,3L,11],3M:[1g,1g,1g],3N:[0,2l,0],3O:[1g,1g,1g],3P:[3Q,3R,1Q],3S:[I,0,I],3T:[2m,1Q,47],3U:[8,1R,0],3V:[1S,50,2n],3W:[I,0,0],3X:[3Y,3Z,2o],40:[1v,2p,1v],41:[2q,61,I],44:[47,1w,1w],48:[47,1w,1w],49:[0,1T,2r],4a:[4b,0,U],4c:[8,20,1U],4d:[0,2s,8],4e:[P,P,P],4f:[P,P,P],4g:[30,1j,8],4h:[2t,34,34],4i:[8,w,G],4j:[34,I,34],4k:[8,0,8],4l:[1f,1f,1f],4m:[1r,1r,8],4n:[8,2i,0],4o:[1V,1N,32],4p:[q,q,q],4q:[q,q,q],4r:[0,q,0],4s:[1W,8,47],4t:[G,8,G],4u:[8,P,1X],4v:[O,2u,2u],4w:[4x,0,1Y],4y:[8,8,G],4z:[G,18,1R],4A:[18,18,w],4B:[8,G,H],4C:[4D,4E,0],4F:[8,w,O],4G:[1W,1Z,18],4H:[G,q,q],4I:[1x,8,8],4J:[w,w,1P],4K:[U,U,U],4L:[1j,V,1j],4M:[U,U,U],4N:[8,4O,4P],4Q:[8,1u,2o],4R:[32,2t,22],4S:[1O,1T,w],4T:[2v,2w,1S],4U:[2v,2w,1S],4V:[2x,2j,1t],4W:[8,8,1x],4X:[0,8,0],4Y:[50,O,50],4Z:[w,G,18],51:[8,0,8],52:[q,0,0],53:[54,O,22],56:[0,0,O],57:[58,2m,U],59:[1U,1h,2y],5a:[60,2z,5b],5c:[5d,5e,V],5f:[0,w,2A],5g:[2q,2r,2n],5h:[5i,21,2B],5j:[25,25,1h],5k:[H,8,w],5l:[8,1M,2C],5m:[8,1M,5n],5o:[8,1t,1W],5p:[0,0,q],5q:[5r,H,18],5s:[q,q,0],5t:[1Q,5u,35],5v:[8,1N,0],5w:[8,69,0],5x:[1V,1h,5y],5z:[V,5A,22],5B:[2D,5C,2D],5D:[5E,V,V],5F:[2y,1h,1U],5G:[8,5H,5I],5J:[8,1V,5K],5L:[O,2B,63],5M:[8,1y,5N],5O:[2E,1u,2E],5P:[2x,1x,18],5Q:[q,0,q],5R:[8,0,0],5S:[2p,1v,1v],5T:[65,P,2C],5U:[I,69,19],5V:[w,q,5W],5X:[5Y,5Z,62],66:[46,I,67],68:[8,H,V],6a:[1u,6b,45],6c:[1y,1y,1y],6d:[1O,1T,1L],6e:[6f,6g,O],6h:[1h,q,1j],6i:[1h,q,1j],6j:[8,w,w],6k:[0,8,1s],6l:[6m,1Y,1X],6n:[1P,1X,1R],6o:[0,q,q],6p:[1Z,2s,1Z],6q:[8,6r,6s],6t:[64,1x,6u],6v:[V,1Y,V],6w:[H,1t,2z],6x:[8,8,8],6y:[H,H,H],6z:[8,8,0],6A:[2A,O,50]}})(6B);',62,410,'||||||||255||||||||||||start|end|||var|parseFloat|128||||if|pos|250|||function|case|break|parseInt|svg|elem|return|240|245|139|nodeValue|exec|order|skewX|skewY|205|105|fx|step|set|scaleX|211|238|attributes|translateX|translateY||||scaleY|rotateA|rotateX|rotateY||matrix|230||getNamedItem|length|Math|fA|F0|220|169|112|none|144|options|curAnim|true|setAttribute|viewBox|while|for|248|127|222|160|143|79|224|192|stroke|opacity|charAt|substr|parseViewBox|transform|parseTransform|getColour|getRGB|rgb|min|max|235|228|165|135|210|107|140|153|206|147|218|173|180|130|216|||170|each|width||fill|toUpperCase|replace|svgViewBox|split|push|join|switch|translate|scale|rotate|parentNode|215|196|184|100|85|204|122|188|72|209|191|178|92|119|136|176|219|179|154|133|225|152|221|height|rx|ry|cx|cy|x1|y1|x2|y2|strokeWidth|fillOpacity|strokeOpacity|font|size|fontSize|_attrNames|unit|map|isNaN|svgTransform|typeof||object||extend|||zA|state|do|hasClass|hasSVG|constructor|Array|trim|toLowerCase|aliceblue|antiquewhite|aqua|aquamarine|212|azure|beige|bisque|black|blanchedalmond|blue|blueviolet|138|226|brown|burlywood|cadetblue|95|158|chartreuse|chocolate|coral|80|cornflowerblue|149|237|cornsilk|crimson|cyan|darkblue|darkcyan|darkgoldenrod|134|darkgray|darkgreen|darkgrey|darkkhaki|189|183|darkmagenta|darkolivegreen|darkorange|darkorchid|darkred|darksalmon|233|150|darkseagreen|darkslateblue|||darkslategray||||darkslategrey|darkturquoise|darkviolet|148|deeppink|deepskyblue|dimgray|dimgrey|dodgerblue|firebrick|floralwhite|forestgreen|fuchsia|gainsboro|ghostwhite|gold|goldenrod|gray|grey|green|greenyellow|honeydew|hotpink|indianred|indigo|75|ivory|khaki|lavender|lavenderblush|lawngreen|124|252|lemonchiffon|lightblue|lightcoral|lightcyan|lightgoldenrodyellow|lightgray|lightgreen|lightgrey|lightpink|182|193|lightsalmon|lightseagreen|lightskyblue|lightslategray|lightslategrey|lightsteelblue|lightyellow|lime|limegreen|linen||magenta|maroon|mediumaquamarine|102||mediumblue|mediumorchid|186|mediumpurple|mediumseagreen|113|mediumslateblue|123|104|mediumspringgreen|mediumturquoise|mediumvioletred|199|midnightblue|mintcream|mistyrose|moccasin|181|navajowhite|navy|oldlace|253|olive|olivedrab|142|orange|orangered|orchid|214|palegoldenrod|232|palegreen|251|paleturquoise|175|palevioletred|papayawhip|239|213|peachpuff|185|peru|pink|203|plum|powderblue|purple|red|rosybrown|royalblue|saddlebrown|salmon|114|sandybrown|244|164|||96||||seagreen|87|seashell||sienna|82|silver|skyblue|slateblue|106|90|slategray|slategrey|snow|springgreen|steelblue|70|tan|teal|thistle|tomato|99|71|turquoise|208|violet|wheat|white|whitesmoke|yellow|yellowgreen|jQuery'.split('|'),0,{}))