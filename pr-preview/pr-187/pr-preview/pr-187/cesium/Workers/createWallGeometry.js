/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.126
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

import{a as nt}from"./chunk-XDITHZHZ.js";import"./chunk-AUO2K2B5.js";import"./chunk-55B3WQ6I.js";import{a as _}from"./chunk-HZQ2LRMY.js";import"./chunk-K4QHJFYW.js";import"./chunk-CZ6DDD6J.js";import"./chunk-26PPBGHW.js";import"./chunk-FMJWH3RL.js";import{a as ot}from"./chunk-E25VRLIZ.js";import{a as it}from"./chunk-FZEJ65E6.js";import{b as tt,c as et,d as S}from"./chunk-SPFUTSGC.js";import{d as I}from"./chunk-E2NX4UJ2.js";import"./chunk-JBPQP6LH.js";import{a as R}from"./chunk-NLPIV6OK.js";import{a as s,d as l}from"./chunk-IIT3SHXK.js";import{a as J}from"./chunk-DLCTHPIV.js";import"./chunk-GMF7KJHC.js";import"./chunk-NYFH7JC3.js";import{a as w}from"./chunk-I2ICH2LD.js";import{a as P}from"./chunk-R6A52HT4.js";import{e as r}from"./chunk-D32DZSEC.js";var Q=new s,Y=new s,lt=new s,st=new s,pt=new s,ut=new s,ft=new s;function k(t){t=w(t,w.EMPTY_OBJECT);let e=t.positions,o=t.maximumHeights,n=t.minimumHeights;if(!r(e))throw new P("options.positions is required.");if(r(o)&&o.length!==e.length)throw new P("options.positions and options.maximumHeights must have the same length.");if(r(n)&&n.length!==e.length)throw new P("options.positions and options.minimumHeights must have the same length.");let i=w(t.vertexFormat,_.DEFAULT),c=w(t.granularity,J.RADIANS_PER_DEGREE),a=w(t.ellipsoid,l.default);this._positions=e,this._minimumHeights=n,this._maximumHeights=o,this._vertexFormat=_.clone(i),this._granularity=c,this._ellipsoid=l.clone(a),this._workerName="createWallGeometry";let m=1+e.length*s.packedLength+2;r(n)&&(m+=n.length),r(o)&&(m+=o.length),this.packedLength=m+l.packedLength+_.packedLength+1}k.pack=function(t,e,o){if(!r(t))throw new P("value is required");if(!r(e))throw new P("array is required");o=w(o,0);let n,i=t._positions,c=i.length;for(e[o++]=c,n=0;n<c;++n,o+=s.packedLength)s.pack(i[n],e,o);let a=t._minimumHeights;if(c=r(a)?a.length:0,e[o++]=c,r(a))for(n=0;n<c;++n)e[o++]=a[n];let m=t._maximumHeights;if(c=r(m)?m.length:0,e[o++]=c,r(m))for(n=0;n<c;++n)e[o++]=m[n];return l.pack(t._ellipsoid,e,o),o+=l.packedLength,_.pack(t._vertexFormat,e,o),o+=_.packedLength,e[o]=t._granularity,e};var mt=l.clone(l.UNIT_SPHERE),rt=new _,V={positions:void 0,minimumHeights:void 0,maximumHeights:void 0,ellipsoid:mt,vertexFormat:rt,granularity:void 0};k.unpack=function(t,e,o){if(!r(t))throw new P("array is required");e=w(e,0);let n,i=t[e++],c=new Array(i);for(n=0;n<i;++n,e+=s.packedLength)c[n]=s.unpack(t,e);i=t[e++];let a;if(i>0)for(a=new Array(i),n=0;n<i;++n)a[n]=t[e++];i=t[e++];let m;if(i>0)for(m=new Array(i),n=0;n<i;++n)m[n]=t[e++];let q=l.unpack(t,e,mt);e+=l.packedLength;let H=_.unpack(t,e,rt);e+=_.packedLength;let f=t[e];return r(o)?(o._positions=c,o._minimumHeights=a,o._maximumHeights=m,o._ellipsoid=l.clone(q,o._ellipsoid),o._vertexFormat=_.clone(H,o._vertexFormat),o._granularity=f,o):(V.positions=c,V.minimumHeights=a,V.maximumHeights=m,V.granularity=f,new k(V))};k.fromConstantHeights=function(t){t=w(t,w.EMPTY_OBJECT);let e=t.positions;if(!r(e))throw new P("options.positions is required.");let o,n,i=t.minimumHeight,c=t.maximumHeight,a=r(i),m=r(c);if(a||m){let H=e.length;o=a?new Array(H):void 0,n=m?new Array(H):void 0;for(let f=0;f<H;++f)a&&(o[f]=i),m&&(n[f]=c)}let q={positions:e,maximumHeights:n,minimumHeights:o,ellipsoid:t.ellipsoid,vertexFormat:t.vertexFormat};return new k(q)};k.createGeometry=function(t){let e=t._positions,o=t._minimumHeights,n=t._maximumHeights,i=t._vertexFormat,c=t._granularity,a=t._ellipsoid,m=nt.computePositions(a,e,n,o,c,!0);if(!r(m))return;let q=m.bottomPositions,H=m.topPositions,f=m.numCorners,B=H.length,y=B*2,h=i.position?new Float64Array(y):void 0,b=i.normal?new Float32Array(y):void 0,x=i.tangent?new Float32Array(y):void 0,F=i.bitangent?new Float32Array(y):void 0,M=i.st?new Float32Array(y/3*2):void 0,v=0,T=0,C=0,z=0,W=0,g=ft,d=ut,A=pt,Z=!0;B/=3;let p,j=0,ct=1/(B-f-1);for(p=0;p<B;++p){let E=p*3,u=s.fromArray(H,E,Q),U=s.fromArray(q,E,Y);if(i.position&&(h[v++]=U.x,h[v++]=U.y,h[v++]=U.z,h[v++]=u.x,h[v++]=u.y,h[v++]=u.z),i.st&&(M[W++]=j,M[W++]=0,M[W++]=j,M[W++]=1),i.normal||i.tangent||i.bitangent){let N=s.clone(s.ZERO,st),K=s.subtract(u,a.geodeticSurfaceNormal(u,Y),Y);if(p+1<B&&(N=s.fromArray(H,E+3,st)),Z){let G=s.subtract(N,u,lt),at=s.subtract(K,u,Q);g=s.normalize(s.cross(at,G,g),g),Z=!1}s.equalsEpsilon(u,N,J.EPSILON10)?Z=!0:(j+=ct,i.tangent&&(d=s.normalize(s.subtract(N,u,d),d)),i.bitangent&&(A=s.normalize(s.cross(g,d,A),A))),i.normal&&(b[T++]=g.x,b[T++]=g.y,b[T++]=g.z,b[T++]=g.x,b[T++]=g.y,b[T++]=g.z),i.tangent&&(x[z++]=d.x,x[z++]=d.y,x[z++]=d.z,x[z++]=d.x,x[z++]=d.y,x[z++]=d.z),i.bitangent&&(F[C++]=A.x,F[C++]=A.y,F[C++]=A.z,F[C++]=A.x,F[C++]=A.y,F[C++]=A.z)}}let D=new it;i.position&&(D.position=new S({componentDatatype:R.DOUBLE,componentsPerAttribute:3,values:h})),i.normal&&(D.normal=new S({componentDatatype:R.FLOAT,componentsPerAttribute:3,values:b})),i.tangent&&(D.tangent=new S({componentDatatype:R.FLOAT,componentsPerAttribute:3,values:x})),i.bitangent&&(D.bitangent=new S({componentDatatype:R.FLOAT,componentsPerAttribute:3,values:F})),i.st&&(D.st=new S({componentDatatype:R.FLOAT,componentsPerAttribute:2,values:M}));let $=y/3;y-=6*(f+1);let L=ot.createTypedArray($,y),O=0;for(p=0;p<$-2;p+=2){let E=p,u=p+2,U=s.fromArray(h,E*3,Q),N=s.fromArray(h,u*3,Y);if(s.equalsEpsilon(U,N,J.EPSILON10))continue;let K=p+1,G=p+3;L[O++]=K,L[O++]=E,L[O++]=G,L[O++]=G,L[O++]=E,L[O++]=u}return new et({attributes:D,indices:L,primitiveType:tt.TRIANGLES,boundingSphere:new I.fromVertices(h)})};var X=k;function ht(t,e){return r(e)&&(t=X.unpack(t,e)),t._ellipsoid=l.clone(t._ellipsoid),X.createGeometry(t)}var Ot=ht;export{Ot as default};
