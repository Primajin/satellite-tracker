/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.114
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

import{a as Se}from"./chunk-4A2FUNVR.js";import{a as D}from"./chunk-4Z3GDVJK.js";import{b as ae}from"./chunk-S2577PU4.js";import{c as R,d as Ot,e as me}from"./chunk-2TPVVSVW.js";var Ie=R((Li,Ae)=>{"use strict";var zt=(t,i,e,r)=>{let s=t&65535|0,n=t>>>16&65535|0,c=0;for(;e!==0;){c=e>2e3?2e3:e,e-=c;do s=s+i[r++]|0,n=n+s|0;while(--c);s%=65521,n%=65521}return s|n<<16|0};Ae.exports=zt});var De=R((Pi,Re)=>{"use strict";var Ht=()=>{let t,i=[];for(var e=0;e<256;e++){t=e;for(var r=0;r<8;r++)t=t&1?3988292384^t>>>1:t>>>1;i[e]=t}return i},Ft=new Uint32Array(Ht()),Vt=(t,i,e,r)=>{let s=Ft,n=r+e;t^=-1;for(let c=r;c<n;c++)t=t>>>8^s[(t^i[c])&255];return t^-1};Re.exports=Vt});var Oe=R((zi,Ue)=>{"use strict";Ue.exports=function(i,e){let r,s,n,c,f,_,a,o,v,w,l,u,I,p,x,T,g,d,E,A,h,S,k,b,m=i.state;r=i.next_in,k=i.input,s=r+(i.avail_in-5),n=i.next_out,b=i.output,c=n-(e-i.avail_out),f=n+(i.avail_out-257),_=m.dmax,a=m.wsize,o=m.whave,v=m.wnext,w=m.window,l=m.hold,u=m.bits,I=m.lencode,p=m.distcode,x=(1<<m.lenbits)-1,T=(1<<m.distbits)-1;e:do{u<15&&(l+=k[r++]<<u,u+=8,l+=k[r++]<<u,u+=8),g=I[l&x];t:for(;;){if(d=g>>>24,l>>>=d,u-=d,d=g>>>16&255,d===0)b[n++]=g&65535;else if(d&16){E=g&65535,d&=15,d&&(u<d&&(l+=k[r++]<<u,u+=8),E+=l&(1<<d)-1,l>>>=d,u-=d),u<15&&(l+=k[r++]<<u,u+=8,l+=k[r++]<<u,u+=8),g=p[l&T];i:for(;;){if(d=g>>>24,l>>>=d,u-=d,d=g>>>16&255,d&16){if(A=g&65535,d&=15,u<d&&(l+=k[r++]<<u,u+=8,u<d&&(l+=k[r++]<<u,u+=8)),A+=l&(1<<d)-1,A>_){i.msg="invalid distance too far back",m.mode=16209;break e}if(l>>>=d,u-=d,d=n-c,A>d){if(d=A-d,d>o&&m.sane){i.msg="invalid distance too far back",m.mode=16209;break e}if(h=0,S=w,v===0){if(h+=a-d,d<E){E-=d;do b[n++]=w[h++];while(--d);h=n-A,S=b}}else if(v<d){if(h+=a+v-d,d-=v,d<E){E-=d;do b[n++]=w[h++];while(--d);if(h=0,v<E){d=v,E-=d;do b[n++]=w[h++];while(--d);h=n-A,S=b}}}else if(h+=v-d,d<E){E-=d;do b[n++]=w[h++];while(--d);h=n-A,S=b}for(;E>2;)b[n++]=S[h++],b[n++]=S[h++],b[n++]=S[h++],E-=3;E&&(b[n++]=S[h++],E>1&&(b[n++]=S[h++]))}else{h=n-A;do b[n++]=b[h++],b[n++]=b[h++],b[n++]=b[h++],E-=3;while(E>2);E&&(b[n++]=b[h++],E>1&&(b[n++]=b[h++]))}}else if(d&64){i.msg="invalid distance code",m.mode=16209;break e}else{g=p[(g&65535)+(l&(1<<d)-1)];continue i}break}}else if(d&64)if(d&32){m.mode=16191;break e}else{i.msg="invalid literal/length code",m.mode=16209;break e}else{g=I[(g&65535)+(l&(1<<d)-1)];continue t}break}}while(r<s&&n<f);E=u>>3,r-=E,u-=E<<3,l&=(1<<u)-1,i.next_in=r,i.next_out=n,i.avail_in=r<s?5+(s-r):5-(r-s),i.avail_out=n<f?257+(f-n):257-(n-f),m.hold=l,m.bits=u}});var Me=R((Hi,Ne)=>{"use strict";var Gt=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),Yt=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78]),Xt=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),qt=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),Kt=(t,i,e,r,s,n,c,f)=>{let _=f.bits,a=0,o=0,v=0,w=0,l=0,u=0,I=0,p=0,x=0,T=0,g,d,E,A,h,S=null,k,b=new Uint16Array(16),m=new Uint16Array(16),L=null,Ee,W,Q;for(a=0;a<=15;a++)b[a]=0;for(o=0;o<r;o++)b[i[e+o]]++;for(l=_,w=15;w>=1&&b[w]===0;w--);if(l>w&&(l=w),w===0)return s[n++]=1<<24|64<<16|0,s[n++]=1<<24|64<<16|0,f.bits=1,0;for(v=1;v<w&&b[v]===0;v++);for(l<v&&(l=v),p=1,a=1;a<=15;a++)if(p<<=1,p-=b[a],p<0)return-1;if(p>0&&(t===0||w!==1))return-1;for(m[1]=0,a=1;a<15;a++)m[a+1]=m[a]+b[a];for(o=0;o<r;o++)i[e+o]!==0&&(c[m[i[e+o]]++]=o);if(t===0?(S=L=c,k=20):t===1?(S=Gt,L=Yt,k=257):(S=Xt,L=qt,k=0),T=0,o=0,a=v,h=n,u=l,I=0,E=-1,x=1<<l,A=x-1,t===1&&x>852||t===2&&x>592)return 1;for(;;){Ee=a-I,c[o]+1<k?(W=0,Q=c[o]):c[o]>=k?(W=L[c[o]-k],Q=S[c[o]-k]):(W=96,Q=0),g=1<<a-I,d=1<<u,v=d;do d-=g,s[h+(T>>I)+d]=Ee<<24|W<<16|Q|0;while(d!==0);for(g=1<<a-1;T&g;)g>>=1;if(g!==0?(T&=g-1,T+=g):T=0,o++,--b[a]===0){if(a===w)break;a=i[e+c[o]]}if(a>l&&(T&A)!==E){for(I===0&&(I=l),h+=v,u=a-I,p=1<<u;u+I<w&&(p-=b[u+I],!(p<=0));)u++,p<<=1;if(x+=1<<u,t===1&&x>852||t===2&&x>592)return 1;E=T&A,s[E]=l<<24|u<<16|h-n|0}}return T!==0&&(s[h+T]=a-I<<24|64<<16|0),f.bits=l,0};Ne.exports=Kt});var J=R((Fi,Ze)=>{"use strict";Ze.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}});var bt=R((Vi,O)=>{"use strict";var he=Ie(),M=De(),jt=Oe(),X=Me(),Wt=0,st=1,ft=2,{Z_FINISH:Be,Z_BLOCK:Qt,Z_TREES:$,Z_OK:P,Z_STREAM_END:Jt,Z_NEED_DICT:$t,Z_STREAM_ERROR:U,Z_DATA_ERROR:lt,Z_MEM_ERROR:ue,Z_BUF_ERROR:ei,Z_DEFLATED:Ce}=J(),ne=16180,Le=16181,Pe=16182,ze=16183,He=16184,Fe=16185,Ve=16186,Ge=16187,Ye=16188,Xe=16189,ie=16190,Z=16191,se=16192,qe=16193,fe=16194,Ke=16195,je=16196,We=16197,Qe=16198,ee=16199,te=16200,Je=16201,$e=16202,et=16203,tt=16204,it=16205,le=16206,nt=16207,rt=16208,y=16209,we=16210,ct=16211,ti=852,ii=592,ni=15,ri=ni,at=t=>(t>>>24&255)+(t>>>8&65280)+((t&65280)<<8)+((t&255)<<24);function ai(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}var z=t=>{if(!t)return 1;let i=t.state;return!i||i.strm!==t||i.mode<ne||i.mode>ct?1:0},dt=t=>{if(z(t))return U;let i=t.state;return t.total_in=t.total_out=i.total=0,t.msg="",i.wrap&&(t.adler=i.wrap&1),i.mode=ne,i.last=0,i.havedict=0,i.flags=-1,i.dmax=32768,i.head=null,i.hold=0,i.bits=0,i.lencode=i.lendyn=new Int32Array(ti),i.distcode=i.distdyn=new Int32Array(ii),i.sane=1,i.back=-1,P},ht=t=>{if(z(t))return U;let i=t.state;return i.wsize=0,i.whave=0,i.wnext=0,dt(t)},ut=(t,i)=>{let e;if(z(t))return U;let r=t.state;return i<0?(e=0,i=-i):(e=(i>>4)+5,i<48&&(i&=15)),i&&(i<8||i>15)?U:(r.window!==null&&r.wbits!==i&&(r.window=null),r.wrap=e,r.wbits=i,ht(t))},wt=(t,i)=>{if(!t)return U;let e=new ai;t.state=e,e.strm=t,e.window=null,e.mode=ne;let r=ut(t,i);return r!==P&&(t.state=null),r},oi=t=>wt(t,ri),ot=!0,ce,de,si=t=>{if(ot){ce=new Int32Array(512),de=new Int32Array(32);let i=0;for(;i<144;)t.lens[i++]=8;for(;i<256;)t.lens[i++]=9;for(;i<280;)t.lens[i++]=7;for(;i<288;)t.lens[i++]=8;for(X(st,t.lens,0,288,ce,0,t.work,{bits:9}),i=0;i<32;)t.lens[i++]=5;X(ft,t.lens,0,32,de,0,t.work,{bits:5}),ot=!1}t.lencode=ce,t.lenbits=9,t.distcode=de,t.distbits=5},xt=(t,i,e,r)=>{let s,n=t.state;return n.window===null&&(n.wsize=1<<n.wbits,n.wnext=0,n.whave=0,n.window=new Uint8Array(n.wsize)),r>=n.wsize?(n.window.set(i.subarray(e-n.wsize,e),0),n.wnext=0,n.whave=n.wsize):(s=n.wsize-n.wnext,s>r&&(s=r),n.window.set(i.subarray(e-r,e-r+s),n.wnext),r-=s,r?(n.window.set(i.subarray(e-r,e),0),n.wnext=r,n.whave=n.wsize):(n.wnext+=s,n.wnext===n.wsize&&(n.wnext=0),n.whave<n.wsize&&(n.whave+=s))),0},fi=(t,i)=>{let e,r,s,n,c,f,_,a,o,v,w,l,u,I,p=0,x,T,g,d,E,A,h,S,k=new Uint8Array(4),b,m,L=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(z(t)||!t.output||!t.input&&t.avail_in!==0)return U;e=t.state,e.mode===Z&&(e.mode=se),c=t.next_out,s=t.output,_=t.avail_out,n=t.next_in,r=t.input,f=t.avail_in,a=e.hold,o=e.bits,v=f,w=_,S=P;e:for(;;)switch(e.mode){case ne:if(e.wrap===0){e.mode=se;break}for(;o<16;){if(f===0)break e;f--,a+=r[n++]<<o,o+=8}if(e.wrap&2&&a===35615){e.wbits===0&&(e.wbits=15),e.check=0,k[0]=a&255,k[1]=a>>>8&255,e.check=M(e.check,k,2,0),a=0,o=0,e.mode=Le;break}if(e.head&&(e.head.done=!1),!(e.wrap&1)||(((a&255)<<8)+(a>>8))%31){t.msg="incorrect header check",e.mode=y;break}if((a&15)!==Ce){t.msg="unknown compression method",e.mode=y;break}if(a>>>=4,o-=4,h=(a&15)+8,e.wbits===0&&(e.wbits=h),h>15||h>e.wbits){t.msg="invalid window size",e.mode=y;break}e.dmax=1<<e.wbits,e.flags=0,t.adler=e.check=1,e.mode=a&512?Xe:Z,a=0,o=0;break;case Le:for(;o<16;){if(f===0)break e;f--,a+=r[n++]<<o,o+=8}if(e.flags=a,(e.flags&255)!==Ce){t.msg="unknown compression method",e.mode=y;break}if(e.flags&57344){t.msg="unknown header flags set",e.mode=y;break}e.head&&(e.head.text=a>>8&1),e.flags&512&&e.wrap&4&&(k[0]=a&255,k[1]=a>>>8&255,e.check=M(e.check,k,2,0)),a=0,o=0,e.mode=Pe;case Pe:for(;o<32;){if(f===0)break e;f--,a+=r[n++]<<o,o+=8}e.head&&(e.head.time=a),e.flags&512&&e.wrap&4&&(k[0]=a&255,k[1]=a>>>8&255,k[2]=a>>>16&255,k[3]=a>>>24&255,e.check=M(e.check,k,4,0)),a=0,o=0,e.mode=ze;case ze:for(;o<16;){if(f===0)break e;f--,a+=r[n++]<<o,o+=8}e.head&&(e.head.xflags=a&255,e.head.os=a>>8),e.flags&512&&e.wrap&4&&(k[0]=a&255,k[1]=a>>>8&255,e.check=M(e.check,k,2,0)),a=0,o=0,e.mode=He;case He:if(e.flags&1024){for(;o<16;){if(f===0)break e;f--,a+=r[n++]<<o,o+=8}e.length=a,e.head&&(e.head.extra_len=a),e.flags&512&&e.wrap&4&&(k[0]=a&255,k[1]=a>>>8&255,e.check=M(e.check,k,2,0)),a=0,o=0}else e.head&&(e.head.extra=null);e.mode=Fe;case Fe:if(e.flags&1024&&(l=e.length,l>f&&(l=f),l&&(e.head&&(h=e.head.extra_len-e.length,e.head.extra||(e.head.extra=new Uint8Array(e.head.extra_len)),e.head.extra.set(r.subarray(n,n+l),h)),e.flags&512&&e.wrap&4&&(e.check=M(e.check,r,l,n)),f-=l,n+=l,e.length-=l),e.length))break e;e.length=0,e.mode=Ve;case Ve:if(e.flags&2048){if(f===0)break e;l=0;do h=r[n+l++],e.head&&h&&e.length<65536&&(e.head.name+=String.fromCharCode(h));while(h&&l<f);if(e.flags&512&&e.wrap&4&&(e.check=M(e.check,r,l,n)),f-=l,n+=l,h)break e}else e.head&&(e.head.name=null);e.length=0,e.mode=Ge;case Ge:if(e.flags&4096){if(f===0)break e;l=0;do h=r[n+l++],e.head&&h&&e.length<65536&&(e.head.comment+=String.fromCharCode(h));while(h&&l<f);if(e.flags&512&&e.wrap&4&&(e.check=M(e.check,r,l,n)),f-=l,n+=l,h)break e}else e.head&&(e.head.comment=null);e.mode=Ye;case Ye:if(e.flags&512){for(;o<16;){if(f===0)break e;f--,a+=r[n++]<<o,o+=8}if(e.wrap&4&&a!==(e.check&65535)){t.msg="header crc mismatch",e.mode=y;break}a=0,o=0}e.head&&(e.head.hcrc=e.flags>>9&1,e.head.done=!0),t.adler=e.check=0,e.mode=Z;break;case Xe:for(;o<32;){if(f===0)break e;f--,a+=r[n++]<<o,o+=8}t.adler=e.check=at(a),a=0,o=0,e.mode=ie;case ie:if(e.havedict===0)return t.next_out=c,t.avail_out=_,t.next_in=n,t.avail_in=f,e.hold=a,e.bits=o,$t;t.adler=e.check=1,e.mode=Z;case Z:if(i===Qt||i===$)break e;case se:if(e.last){a>>>=o&7,o-=o&7,e.mode=le;break}for(;o<3;){if(f===0)break e;f--,a+=r[n++]<<o,o+=8}switch(e.last=a&1,a>>>=1,o-=1,a&3){case 0:e.mode=qe;break;case 1:if(si(e),e.mode=ee,i===$){a>>>=2,o-=2;break e}break;case 2:e.mode=je;break;case 3:t.msg="invalid block type",e.mode=y}a>>>=2,o-=2;break;case qe:for(a>>>=o&7,o-=o&7;o<32;){if(f===0)break e;f--,a+=r[n++]<<o,o+=8}if((a&65535)!==(a>>>16^65535)){t.msg="invalid stored block lengths",e.mode=y;break}if(e.length=a&65535,a=0,o=0,e.mode=fe,i===$)break e;case fe:e.mode=Ke;case Ke:if(l=e.length,l){if(l>f&&(l=f),l>_&&(l=_),l===0)break e;s.set(r.subarray(n,n+l),c),f-=l,n+=l,_-=l,c+=l,e.length-=l;break}e.mode=Z;break;case je:for(;o<14;){if(f===0)break e;f--,a+=r[n++]<<o,o+=8}if(e.nlen=(a&31)+257,a>>>=5,o-=5,e.ndist=(a&31)+1,a>>>=5,o-=5,e.ncode=(a&15)+4,a>>>=4,o-=4,e.nlen>286||e.ndist>30){t.msg="too many length or distance symbols",e.mode=y;break}e.have=0,e.mode=We;case We:for(;e.have<e.ncode;){for(;o<3;){if(f===0)break e;f--,a+=r[n++]<<o,o+=8}e.lens[L[e.have++]]=a&7,a>>>=3,o-=3}for(;e.have<19;)e.lens[L[e.have++]]=0;if(e.lencode=e.lendyn,e.lenbits=7,b={bits:e.lenbits},S=X(Wt,e.lens,0,19,e.lencode,0,e.work,b),e.lenbits=b.bits,S){t.msg="invalid code lengths set",e.mode=y;break}e.have=0,e.mode=Qe;case Qe:for(;e.have<e.nlen+e.ndist;){for(;p=e.lencode[a&(1<<e.lenbits)-1],x=p>>>24,T=p>>>16&255,g=p&65535,!(x<=o);){if(f===0)break e;f--,a+=r[n++]<<o,o+=8}if(g<16)a>>>=x,o-=x,e.lens[e.have++]=g;else{if(g===16){for(m=x+2;o<m;){if(f===0)break e;f--,a+=r[n++]<<o,o+=8}if(a>>>=x,o-=x,e.have===0){t.msg="invalid bit length repeat",e.mode=y;break}h=e.lens[e.have-1],l=3+(a&3),a>>>=2,o-=2}else if(g===17){for(m=x+3;o<m;){if(f===0)break e;f--,a+=r[n++]<<o,o+=8}a>>>=x,o-=x,h=0,l=3+(a&7),a>>>=3,o-=3}else{for(m=x+7;o<m;){if(f===0)break e;f--,a+=r[n++]<<o,o+=8}a>>>=x,o-=x,h=0,l=11+(a&127),a>>>=7,o-=7}if(e.have+l>e.nlen+e.ndist){t.msg="invalid bit length repeat",e.mode=y;break}for(;l--;)e.lens[e.have++]=h}}if(e.mode===y)break;if(e.lens[256]===0){t.msg="invalid code -- missing end-of-block",e.mode=y;break}if(e.lenbits=9,b={bits:e.lenbits},S=X(st,e.lens,0,e.nlen,e.lencode,0,e.work,b),e.lenbits=b.bits,S){t.msg="invalid literal/lengths set",e.mode=y;break}if(e.distbits=6,e.distcode=e.distdyn,b={bits:e.distbits},S=X(ft,e.lens,e.nlen,e.ndist,e.distcode,0,e.work,b),e.distbits=b.bits,S){t.msg="invalid distances set",e.mode=y;break}if(e.mode=ee,i===$)break e;case ee:e.mode=te;case te:if(f>=6&&_>=258){t.next_out=c,t.avail_out=_,t.next_in=n,t.avail_in=f,e.hold=a,e.bits=o,jt(t,w),c=t.next_out,s=t.output,_=t.avail_out,n=t.next_in,r=t.input,f=t.avail_in,a=e.hold,o=e.bits,e.mode===Z&&(e.back=-1);break}for(e.back=0;p=e.lencode[a&(1<<e.lenbits)-1],x=p>>>24,T=p>>>16&255,g=p&65535,!(x<=o);){if(f===0)break e;f--,a+=r[n++]<<o,o+=8}if(T&&!(T&240)){for(d=x,E=T,A=g;p=e.lencode[A+((a&(1<<d+E)-1)>>d)],x=p>>>24,T=p>>>16&255,g=p&65535,!(d+x<=o);){if(f===0)break e;f--,a+=r[n++]<<o,o+=8}a>>>=d,o-=d,e.back+=d}if(a>>>=x,o-=x,e.back+=x,e.length=g,T===0){e.mode=it;break}if(T&32){e.back=-1,e.mode=Z;break}if(T&64){t.msg="invalid literal/length code",e.mode=y;break}e.extra=T&15,e.mode=Je;case Je:if(e.extra){for(m=e.extra;o<m;){if(f===0)break e;f--,a+=r[n++]<<o,o+=8}e.length+=a&(1<<e.extra)-1,a>>>=e.extra,o-=e.extra,e.back+=e.extra}e.was=e.length,e.mode=$e;case $e:for(;p=e.distcode[a&(1<<e.distbits)-1],x=p>>>24,T=p>>>16&255,g=p&65535,!(x<=o);){if(f===0)break e;f--,a+=r[n++]<<o,o+=8}if(!(T&240)){for(d=x,E=T,A=g;p=e.distcode[A+((a&(1<<d+E)-1)>>d)],x=p>>>24,T=p>>>16&255,g=p&65535,!(d+x<=o);){if(f===0)break e;f--,a+=r[n++]<<o,o+=8}a>>>=d,o-=d,e.back+=d}if(a>>>=x,o-=x,e.back+=x,T&64){t.msg="invalid distance code",e.mode=y;break}e.offset=g,e.extra=T&15,e.mode=et;case et:if(e.extra){for(m=e.extra;o<m;){if(f===0)break e;f--,a+=r[n++]<<o,o+=8}e.offset+=a&(1<<e.extra)-1,a>>>=e.extra,o-=e.extra,e.back+=e.extra}if(e.offset>e.dmax){t.msg="invalid distance too far back",e.mode=y;break}e.mode=tt;case tt:if(_===0)break e;if(l=w-_,e.offset>l){if(l=e.offset-l,l>e.whave&&e.sane){t.msg="invalid distance too far back",e.mode=y;break}l>e.wnext?(l-=e.wnext,u=e.wsize-l):u=e.wnext-l,l>e.length&&(l=e.length),I=e.window}else I=s,u=c-e.offset,l=e.length;l>_&&(l=_),_-=l,e.length-=l;do s[c++]=I[u++];while(--l);e.length===0&&(e.mode=te);break;case it:if(_===0)break e;s[c++]=e.length,_--,e.mode=te;break;case le:if(e.wrap){for(;o<32;){if(f===0)break e;f--,a|=r[n++]<<o,o+=8}if(w-=_,t.total_out+=w,e.total+=w,e.wrap&4&&w&&(t.adler=e.check=e.flags?M(e.check,s,w,c-w):he(e.check,s,w,c-w)),w=_,e.wrap&4&&(e.flags?a:at(a))!==e.check){t.msg="incorrect data check",e.mode=y;break}a=0,o=0}e.mode=nt;case nt:if(e.wrap&&e.flags){for(;o<32;){if(f===0)break e;f--,a+=r[n++]<<o,o+=8}if(e.wrap&4&&a!==(e.total&4294967295)){t.msg="incorrect length check",e.mode=y;break}a=0,o=0}e.mode=rt;case rt:S=Jt;break e;case y:S=lt;break e;case we:return ue;case ct:default:return U}return t.next_out=c,t.avail_out=_,t.next_in=n,t.avail_in=f,e.hold=a,e.bits=o,(e.wsize||w!==t.avail_out&&e.mode<y&&(e.mode<le||i!==Be))&&xt(t,t.output,t.next_out,w-t.avail_out)?(e.mode=we,ue):(v-=t.avail_in,w-=t.avail_out,t.total_in+=v,t.total_out+=w,e.total+=w,e.wrap&4&&w&&(t.adler=e.check=e.flags?M(e.check,s,w,t.next_out-w):he(e.check,s,w,t.next_out-w)),t.data_type=e.bits+(e.last?64:0)+(e.mode===Z?128:0)+(e.mode===ee||e.mode===fe?256:0),(v===0&&w===0||i===Be)&&S===P&&(S=ei),S)},li=t=>{if(z(t))return U;let i=t.state;return i.window&&(i.window=null),t.state=null,P},ci=(t,i)=>{if(z(t))return U;let e=t.state;return e.wrap&2?(e.head=i,i.done=!1,P):U},di=(t,i)=>{let e=i.length,r,s,n;return z(t)||(r=t.state,r.wrap!==0&&r.mode!==ie)?U:r.mode===ie&&(s=1,s=he(s,i,e,0),s!==r.check)?lt:(n=xt(t,i,e,e),n?(r.mode=we,ue):(r.havedict=1,P))};O.exports.inflateReset=ht;O.exports.inflateReset2=ut;O.exports.inflateResetKeep=dt;O.exports.inflateInit=oi;O.exports.inflateInit2=wt;O.exports.inflate=fi;O.exports.inflateEnd=li;O.exports.inflateGetHeader=ci;O.exports.inflateSetDictionary=di;O.exports.inflateInfo="pako inflate (from Nodeca project)"});var _t=R((Gi,xe)=>{"use strict";var hi=(t,i)=>Object.prototype.hasOwnProperty.call(t,i);xe.exports.assign=function(t){let i=Array.prototype.slice.call(arguments,1);for(;i.length;){let e=i.shift();if(e){if(typeof e!="object")throw new TypeError(e+"must be non-object");for(let r in e)hi(e,r)&&(t[r]=e[r])}}return t};xe.exports.flattenChunks=t=>{let i=0;for(let r=0,s=t.length;r<s;r++)i+=t[r].length;let e=new Uint8Array(i);for(let r=0,s=0,n=t.length;r<n;r++){let c=t[r];e.set(c,s),s+=c.length}return e}});var kt=R((Yi,re)=>{"use strict";var gt=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{gt=!1}var q=new Uint8Array(256);for(let t=0;t<256;t++)q[t]=t>=252?6:t>=248?5:t>=240?4:t>=224?3:t>=192?2:1;q[254]=q[254]=1;re.exports.string2buf=t=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(t);let i,e,r,s,n,c=t.length,f=0;for(s=0;s<c;s++)e=t.charCodeAt(s),(e&64512)===55296&&s+1<c&&(r=t.charCodeAt(s+1),(r&64512)===56320&&(e=65536+(e-55296<<10)+(r-56320),s++)),f+=e<128?1:e<2048?2:e<65536?3:4;for(i=new Uint8Array(f),n=0,s=0;n<f;s++)e=t.charCodeAt(s),(e&64512)===55296&&s+1<c&&(r=t.charCodeAt(s+1),(r&64512)===56320&&(e=65536+(e-55296<<10)+(r-56320),s++)),e<128?i[n++]=e:e<2048?(i[n++]=192|e>>>6,i[n++]=128|e&63):e<65536?(i[n++]=224|e>>>12,i[n++]=128|e>>>6&63,i[n++]=128|e&63):(i[n++]=240|e>>>18,i[n++]=128|e>>>12&63,i[n++]=128|e>>>6&63,i[n++]=128|e&63);return i};var ui=(t,i)=>{if(i<65534&&t.subarray&&gt)return String.fromCharCode.apply(null,t.length===i?t:t.subarray(0,i));let e="";for(let r=0;r<i;r++)e+=String.fromCharCode(t[r]);return e};re.exports.buf2string=(t,i)=>{let e=i||t.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(t.subarray(0,i));let r,s,n=new Array(e*2);for(s=0,r=0;r<e;){let c=t[r++];if(c<128){n[s++]=c;continue}let f=q[c];if(f>4){n[s++]=65533,r+=f-1;continue}for(c&=f===2?31:f===3?15:7;f>1&&r<e;)c=c<<6|t[r++]&63,f--;if(f>1){n[s++]=65533;continue}c<65536?n[s++]=c:(c-=65536,n[s++]=55296|c>>10&1023,n[s++]=56320|c&1023)}return ui(n,s)};re.exports.utf8border=(t,i)=>{i=i||t.length,i>t.length&&(i=t.length);let e=i-1;for(;e>=0&&(t[e]&192)===128;)e--;return e<0||e===0?i:e+q[t[e]]>i?e:i}});var Et=R((Xi,pt)=>{"use strict";pt.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}});var St=R((qi,mt)=>{"use strict";function wi(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}mt.exports=wi});var vt=R((Ki,Tt)=>{"use strict";function xi(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}Tt.exports=xi});var Rt=R((ji,V)=>{"use strict";var B=bt(),At=_t(),ge=kt(),ke=Et(),bi=St(),_i=vt(),It=Object.prototype.toString,{Z_NO_FLUSH:gi,Z_FINISH:ki,Z_OK:K,Z_STREAM_END:be,Z_NEED_DICT:_e,Z_STREAM_ERROR:pi,Z_DATA_ERROR:yt,Z_MEM_ERROR:Ei}=J();function j(t){this.options=At.assign({chunkSize:1024*64,windowBits:15,to:""},t||{});let i=this.options;i.raw&&i.windowBits>=0&&i.windowBits<16&&(i.windowBits=-i.windowBits,i.windowBits===0&&(i.windowBits=-15)),i.windowBits>=0&&i.windowBits<16&&!(t&&t.windowBits)&&(i.windowBits+=32),i.windowBits>15&&i.windowBits<48&&(i.windowBits&15||(i.windowBits|=15)),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new bi,this.strm.avail_out=0;let e=B.inflateInit2(this.strm,i.windowBits);if(e!==K)throw new Error(ke[e]);if(this.header=new _i,B.inflateGetHeader(this.strm,this.header),i.dictionary&&(typeof i.dictionary=="string"?i.dictionary=ge.string2buf(i.dictionary):It.call(i.dictionary)==="[object ArrayBuffer]"&&(i.dictionary=new Uint8Array(i.dictionary)),i.raw&&(e=B.inflateSetDictionary(this.strm,i.dictionary),e!==K)))throw new Error(ke[e])}j.prototype.push=function(t,i){let e=this.strm,r=this.options.chunkSize,s=this.options.dictionary,n,c,f;if(this.ended)return!1;for(i===~~i?c=i:c=i===!0?ki:gi,It.call(t)==="[object ArrayBuffer]"?e.input=new Uint8Array(t):e.input=t,e.next_in=0,e.avail_in=e.input.length;;){for(e.avail_out===0&&(e.output=new Uint8Array(r),e.next_out=0,e.avail_out=r),n=B.inflate(e,c),n===_e&&s&&(n=B.inflateSetDictionary(e,s),n===K?n=B.inflate(e,c):n===yt&&(n=_e));e.avail_in>0&&n===be&&e.state.wrap>0&&t[e.next_in]!==0;)B.inflateReset(e),n=B.inflate(e,c);switch(n){case pi:case yt:case _e:case Ei:return this.onEnd(n),this.ended=!0,!1}if(f=e.avail_out,e.next_out&&(e.avail_out===0||n===be))if(this.options.to==="string"){let _=ge.utf8border(e.output,e.next_out),a=e.next_out-_,o=ge.buf2string(e.output,_);e.next_out=a,e.avail_out=r-a,a&&e.output.set(e.output.subarray(_,_+a),0),this.onData(o)}else this.onData(e.output.length===e.next_out?e.output:e.output.subarray(0,e.next_out));if(!(n===K&&f===0)){if(n===be)return n=B.inflateEnd(this.strm),this.onEnd(n),this.ended=!0,!0;if(e.avail_in===0)break}}return!0};j.prototype.onData=function(t){this.chunks.push(t)};j.prototype.onEnd=function(t){t===K&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=At.flattenChunks(this.chunks)),this.chunks=[],this.err=t,this.msg=this.strm.msg};function pe(t,i){let e=new j(i);if(e.push(t),e.err)throw e.msg||ke[e.err];return e.result}function mi(t,i){return i=i||{},i.raw=!0,pe(t,i)}V.exports.Inflate=j;V.exports.inflate=pe;V.exports.inflateRaw=mi;V.exports.ungzip=pe;V.exports.constants=J()});var Nt=1953029805,Mt=2917034100;function oe(t,i){if(oe.passThroughDataForTesting)return i;ae.typeOf.object("key",t),ae.typeOf.object("data",i);let e=t.byteLength;if(e===0||e%4!==0)throw new D("The length of key must be greater than 0 and a multiple of 4.");let r=new DataView(i),s=r.getUint32(0,!0);if(s===Nt||s===Mt)return i;let n=new DataView(t),c=0,f=i.byteLength,_=f-f%8,a=e,o,v=8;for(;c<_;)for(v=(v+8)%24,o=v;c<_&&o<a;)r.setUint32(c,r.getUint32(c,!0)^n.getUint32(o,!0),!0),r.setUint32(c+4,r.getUint32(c+4,!0)^n.getUint32(o+4,!0),!0),c+=8,o+=24;if(c<f)for(o>=a&&(v=(v+8)%24,o=v);c<f;)r.setUint8(c,r.getUint8(c)^n.getUint8(o)),c++,o++}oe.passThroughDataForTesting=!1;var Te=oe;function Zt(t,i){return(t&i)!==0}var F=Zt;var Bt=[1,2,4,8],ve=15,Ct=16,Lt=64,Pt=128;function N(t,i,e,r,s,n){this._bits=t,this.cnodeVersion=i,this.imageryVersion=e,this.terrainVersion=r,this.imageryProvider=s,this.terrainProvider=n,this.ancestorHasTerrain=!1,this.terrainState=void 0}N.clone=function(t,i){return me(i)?(i._bits=t._bits,i.cnodeVersion=t.cnodeVersion,i.imageryVersion=t.imageryVersion,i.terrainVersion=t.terrainVersion,i.imageryProvider=t.imageryProvider,i.terrainProvider=t.terrainProvider):i=new N(t._bits,t.cnodeVersion,t.imageryVersion,t.terrainVersion,t.imageryProvider,t.terrainProvider),i.ancestorHasTerrain=t.ancestorHasTerrain,i.terrainState=t.terrainState,i};N.prototype.setParent=function(t){this.ancestorHasTerrain=t.ancestorHasTerrain||this.hasTerrain()};N.prototype.hasSubtree=function(){return F(this._bits,Ct)};N.prototype.hasImagery=function(){return F(this._bits,Lt)};N.prototype.hasTerrain=function(){return F(this._bits,Pt)};N.prototype.hasChildren=function(){return F(this._bits,ve)};N.prototype.hasChild=function(t){return F(this._bits,Bt[t])};N.prototype.getChildBitmask=function(){return this._bits&ve};var ye=N;var Ut=Ot(Rt(),1);var G=Uint16Array.BYTES_PER_ELEMENT,H=Int32Array.BYTES_PER_ELEMENT,Y=Uint32Array.BYTES_PER_ELEMENT,C={METADATA:0,TERRAIN:1,DBROOT:2};C.fromString=function(t){if(t==="Metadata")return C.METADATA;if(t==="Terrain")return C.TERRAIN;if(t==="DbRoot")return C.DBROOT};function Si(t,i){let e=C.fromString(t.type),r=t.buffer;Te(t.key,r);let s=Di(r);r=s.buffer;let n=s.length;switch(e){case C.METADATA:return vi(r,n,t.quadKey);case C.TERRAIN:return Ii(r,n,i);case C.DBROOT:return i.push(r),{buffer:r}}}var Ti=32301;function vi(t,i,e){let r=new DataView(t),s=0,n=r.getUint32(s,!0);if(s+=Y,n!==Ti)throw new D("Invalid magic");let c=r.getUint32(s,!0);if(s+=Y,c!==1)throw new D("Invalid data type. Must be 1 for QuadTreePacket");let f=r.getUint32(s,!0);if(s+=Y,f!==2)throw new D("Invalid QuadTreePacket version. Only version 2 is supported.");let _=r.getInt32(s,!0);s+=H;let a=r.getInt32(s,!0);if(s+=H,a!==32)throw new D("Invalid instance size.");let o=r.getInt32(s,!0);s+=H;let v=r.getInt32(s,!0);s+=H;let w=r.getInt32(s,!0);if(s+=H,o!==_*a+s)throw new D("Invalid dataBufferOffset");if(o+v+w!==i)throw new D("Invalid packet offsets");let l=[];for(let g=0;g<_;++g){let d=r.getUint8(s);++s,++s;let E=r.getUint16(s,!0);s+=G;let A=r.getUint16(s,!0);s+=G;let h=r.getUint16(s,!0);s+=G,s+=G,s+=G,s+=H,s+=H,s+=8;let S=r.getUint8(s++),k=r.getUint8(s++);s+=G,l.push(new ye(d,E,A,h,S,k))}let u=[],I=0;function p(g,d,E){let A=!1;if(E===4){if(d.hasSubtree())return;A=!0}for(let h=0;h<4;++h){let S=g+h.toString();if(A)u[S]=null;else if(E<4)if(!d.hasChild(h))u[S]=null;else{if(I===_){console.log("Incorrect number of instances");return}let k=l[I++];u[S]=k,p(S,k,E+1)}}}let x=0,T=l[I++];return e===""?++x:u[e]=T,p(e,T,x),u}var yi=5,Ai=4;function Ii(t,i,e){let r=new DataView(t),s=function(f){for(let _=0;_<Ai;++_){let a=r.getUint32(f,!0);if(f+=Y,f+=a,f>i)throw new D("Malformed terrain packet found.")}return f},n=0,c=[];for(;c.length<yi;){let f=n;n=s(n);let _=t.slice(f,n);e.push(_),c.push(_)}return c}var Dt=1953029805,Ri=2917034100;function Di(t){let i=new DataView(t),e=0,r=i.getUint32(e,!0);if(e+=Y,r!==Dt&&r!==Ri)throw new D("Invalid magic");let s=i.getUint32(e,r===Dt);e+=Y;let n=new Uint8Array(t,e),c=Ut.default.inflate(n);if(c.length!==s)throw new D("Size of packet doesn't match header");return c}var en=Se(Si);export{en as default};
