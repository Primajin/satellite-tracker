/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.124
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

import{a as Gt,b as Xt}from"./chunk-PJQ53UQY.js";import{a as kt}from"./chunk-4BYMTYMT.js";import{a as lt}from"./chunk-UJMUN4NO.js";import{a as Dt}from"./chunk-SOCYD7RP.js";import"./chunk-Q5MYX5A2.js";import"./chunk-CTRWX4F5.js";import{a as qt}from"./chunk-Z7BLUZ7R.js";import"./chunk-PY4CW263.js";import"./chunk-RRZIPF5C.js";import{d as Lt}from"./chunk-K2M3OJ7Z.js";import{b as $,g as Ot,h as zt}from"./chunk-M3A6SPGI.js";import"./chunk-D5HNP2LB.js";import{a as P,b as N,c as wt,d as Ht}from"./chunk-S4VBGY2U.js";import{a as r}from"./chunk-UCTPWOTZ.js";import"./chunk-54PMPXZ4.js";import{a as Vt}from"./chunk-R62IKKEC.js";import{a as Ut}from"./chunk-N3A5CZ2S.js";import"./chunk-G75U3WZT.js";import{e as ht}from"./chunk-3THTQ4QB.js";var te=Uint16Array.BYTES_PER_ELEMENT,mt=Int32Array.BYTES_PER_ELEMENT,Pt=Uint32Array.BYTES_PER_ELEMENT,ee=Float32Array.BYTES_PER_ELEMENT,H=Float64Array.BYTES_PER_ELEMENT;function tt(n,l,e){e=Ut(e,r);let i=n.length;for(let c=0;c<i;++c)if(e.equalsEpsilon(n[c],l,r.EPSILON12))return c;return-1}function oe(n,l){n.ellipsoid=Ht.clone(n.ellipsoid),n.rectangle=zt.clone(n.rectangle);let e=se(n.buffer,n.relativeToCenter,n.ellipsoid,n.rectangle,n.nativeRectangle,n.exaggeration,n.exaggerationRelativeHeight,n.skirtHeight,n.includeWebMercatorT,n.negativeAltitudeExponentBias,n.negativeElevationThreshold),i=e.vertices;l.push(i.buffer);let c=e.indices;return l.push(c.buffer),{vertices:i.buffer,indices:c.buffer,numberOfAttributes:e.encoding.stride,minimumHeight:e.minimumHeight,maximumHeight:e.maximumHeight,boundingSphere3D:e.boundingSphere3D,orientedBoundingBox:e.orientedBoundingBox,occludeePointInScaledSpace:e.occludeePointInScaledSpace,encoding:e.encoding,vertexCountWithoutSkirts:e.vertexCountWithoutSkirts,indexCountWithoutSkirts:e.indexCountWithoutSkirts,westIndicesSouthToNorth:e.westIndicesSouthToNorth,southIndicesEastToWest:e.southIndicesEastToWest,eastIndicesNorthToSouth:e.eastIndicesNorthToSouth,northIndicesWestToEast:e.northIndicesWestToEast}}var u=new N,G=new P,ne=new P,ie=new P,re=new $;function se(n,l,e,i,c,et,m,ot,T,nt,it){let I,h,E,f,x,p;ht(i)?(I=i.west,h=i.south,E=i.east,f=i.north,x=i.width,p=i.height):(I=r.toRadians(c.west),h=r.toRadians(c.south),E=r.toRadians(c.east),f=r.toRadians(c.north),x=r.toRadians(i.width),p=r.toRadians(i.height));let X=[h,f],A=[I,E],V=Ot.eastNorthUpToFixedFrame(l,e),j=$.inverseTransformation(V,re),O,Q;T&&(O=lt.geodeticLatitudeToMercatorAngle(h),Q=1/(lt.geodeticLatitudeToMercatorAngle(f)-O));let y=et!==1,a=new DataView(n),z=Number.POSITIVE_INFINITY,J=Number.NEGATIVE_INFINITY,b=ne;b.x=Number.POSITIVE_INFINITY,b.y=Number.POSITIVE_INFINITY,b.z=Number.POSITIVE_INFINITY;let M=ie;M.x=Number.NEGATIVE_INFINITY,M.y=Number.NEGATIVE_INFINITY,M.z=Number.NEGATIVE_INFINITY;let o=0,S=0,At=0,rt,L;for(L=0;L<4;++L){let t=o;rt=a.getUint32(t,!0),t+=Pt;let d=r.toRadians(a.getFloat64(t,!0)*180);t+=H,tt(A,d)===-1&&A.push(d);let Y=r.toRadians(a.getFloat64(t,!0)*180);t+=H,tt(X,Y)===-1&&X.push(Y),t+=2*H;let B=a.getInt32(t,!0);t+=mt,S+=B,B=a.getInt32(t,!0),At+=B*3,o+=rt+Pt}let yt=[],bt=[],g=new Array(S),R=new Array(S),_=new Array(S),C=T?new Array(S):[],F=y?new Array(S):[],v=new Array(At),k=[],st=[],ct=[],W=[],s=0,pt=0;for(o=0,L=0;L<4;++L){rt=a.getUint32(o,!0),o+=Pt;let t=o,d=r.toRadians(a.getFloat64(o,!0)*180);o+=H;let Y=r.toRadians(a.getFloat64(o,!0)*180);o+=H;let B=r.toRadians(a.getFloat64(o,!0)*180),Ft=B*.5;o+=H;let vt=r.toRadians(a.getFloat64(o,!0)*180),Wt=vt*.5;o+=H;let Yt=a.getInt32(o,!0);o+=mt;let Zt=a.getInt32(o,!0);o+=mt,o+=mt;let St=new Array(Yt);for(let U=0;U<Yt;++U){let Z=d+a.getUint8(o++)*B;u.longitude=Z;let D=Y+a.getUint8(o++)*vt;u.latitude=D;let w=a.getFloat32(o,!0);if(o+=ee,w!==0&&w<it&&(w*=-Math.pow(2,nt)),w*=6371010,u.height=w,tt(A,Z)!==-1||tt(X,D)!==-1){let dt=tt(yt,u,N);if(dt===-1)yt.push(N.clone(u)),bt.push(s);else{St[U]=bt[dt];continue}}St[U]=s,Math.abs(Z-I)<Ft?k.push({index:s,cartographic:N.clone(u)}):Math.abs(Z-E)<Ft?ct.push({index:s,cartographic:N.clone(u)}):Math.abs(D-h)<Wt?st.push({index:s,cartographic:N.clone(u)}):Math.abs(D-f)<Wt&&W.push({index:s,cartographic:N.clone(u)}),z=Math.min(w,z),J=Math.max(w,J),_[s]=w;let Nt=e.cartographicToCartesian(u);if(g[s]=Nt,T&&(C[s]=(lt.geodeticLatitudeToMercatorAngle(D)-O)*Q),y){let dt=e.geodeticSurfaceNormal(Nt);F[s]=dt}$.multiplyByPoint(j,Nt,G),P.minimumByComponent(G,b,b),P.maximumByComponent(G,M,M);let Tt=(Z-I)/(E-I);Tt=r.clamp(Tt,0,1);let Bt=(D-h)/(f-h);Bt=r.clamp(Bt,0,1),R[s]=new wt(Tt,Bt),++s}let $t=Zt*3;for(let U=0;U<$t;++U,++pt)v[pt]=St[a.getUint16(o,!0)],o+=te;if(rt!==o-t)throw new Vt("Invalid terrain tile.")}g.length=s,R.length=s,_.length=s,T&&(C.length=s),y&&(F.length=s);let Mt=s,jt=pt,K={hMin:z,lastBorderPoint:void 0,skirtHeight:ot,toENU:j,ellipsoid:e,minimum:b,maximum:M};k.sort(function(t,d){return d.cartographic.latitude-t.cartographic.latitude}),st.sort(function(t,d){return t.cartographic.longitude-d.cartographic.longitude}),ct.sort(function(t,d){return t.cartographic.latitude-d.cartographic.latitude}),W.sort(function(t,d){return d.cartographic.longitude-t.cartographic.longitude});let q=1e-5;if(gt(g,_,R,C,F,v,K,k,-q*x,!0,-q*p),gt(g,_,R,C,F,v,K,st,-q*p,!1),gt(g,_,R,C,F,v,K,ct,q*x,!0,q*p),gt(g,_,R,C,F,v,K,W,q*p,!1),k.length>0&&W.length>0){let t=k[0].index,d=Mt,Y=W[W.length-1].index,B=g.length-1;v.push(Y,B,d,d,t,Y)}S=g.length;let Qt=Lt.fromPoints(g),Rt;ht(i)&&(Rt=Dt.fromRectangle(i,z,J,e));let Jt=new Gt(e).computeHorizonCullingPointPossiblyUnderEllipsoid(l,g,z),Kt=new qt(b,M,l),It=new Xt(l,Kt,K.hMin,J,V,!1,T,y,et,m),_t=new Float32Array(S*It.stride),Ct=0;for(let t=0;t<S;++t)Ct=It.encode(_t,Ct,g[t],R[t],_[t],void 0,C[t],F[t]);let at=k.map(function(t){return t.index}).reverse(),Et=st.map(function(t){return t.index}).reverse(),ut=ct.map(function(t){return t.index}).reverse(),xt=W.map(function(t){return t.index}).reverse();return Et.unshift(ut[ut.length-1]),Et.push(at[0]),xt.unshift(at[at.length-1]),xt.push(ut[0]),{vertices:_t,indices:new Uint16Array(v),maximumHeight:J,minimumHeight:z,encoding:It,boundingSphere3D:Qt,orientedBoundingBox:Rt,occludeePointInScaledSpace:Jt,vertexCountWithoutSkirts:Mt,indexCountWithoutSkirts:jt,westIndicesSouthToNorth:at,southIndicesEastToWest:Et,eastIndicesNorthToSouth:ut,northIndicesWestToEast:xt}}function gt(n,l,e,i,c,et,m,ot,T,nt,it){let I=ot.length;for(let h=0;h<I;++h){let E=ot[h],f=E.cartographic,x=E.index,p=n.length,X=f.longitude,A=f.latitude;A=r.clamp(A,-r.PI_OVER_TWO,r.PI_OVER_TWO);let V=f.height-m.skirtHeight;m.hMin=Math.min(m.hMin,V),N.fromRadians(X,A,V,u),nt&&(u.longitude+=T),nt?h===I-1?u.latitude+=it:h===0&&(u.latitude-=it):u.latitude+=T;let j=m.ellipsoid.cartographicToCartesian(u);n.push(j),l.push(V),e.push(wt.clone(e[x])),i.length>0&&i.push(i[x]),c.length>0&&c.push(c[x]),$.multiplyByPoint(m.toENU,j,G);let O=m.minimum,Q=m.maximum;P.minimumByComponent(G,O,O),P.maximumByComponent(G,Q,Q);let ft=m.lastBorderPoint;if(ht(ft)){let y=ft.index;et.push(y,p-1,p,p,x,y)}m.lastBorderPoint=E}}var Ae=kt(oe);export{Ae as default};
