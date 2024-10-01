/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.122
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

import{a as r}from"./chunk-45XN4A3L.js";import{a as S}from"./chunk-VBA7BAEC.js";import{a as E}from"./chunk-A3LWLQUH.js";import"./chunk-T2PCUASF.js";import"./chunk-XTD56O4T.js";import"./chunk-MQA5R2TD.js";import"./chunk-BNIMZJFI.js";import{a as X}from"./chunk-UENNBKKY.js";import{a as W}from"./chunk-ZV2BSYVW.js";import{b as K,c as Q,d as Y}from"./chunk-3WTHA73F.js";import{d as j}from"./chunk-MEAQKBL7.js";import"./chunk-RKBLQ2M4.js";import{a as H}from"./chunk-K3VQHMI6.js";import{a as k,d as b}from"./chunk-UTRPTI5S.js";import{a as q}from"./chunk-TFNGIACM.js";import"./chunk-ISVCOS3X.js";import"./chunk-XUAQFAMT.js";import{a as w}from"./chunk-OW23VKVW.js";import{a as L}from"./chunk-LKAZ42NI.js";import{e as u}from"./chunk-MYHWD27O.js";function Z(t,e,o,i,s,l,p){let g=E.numberOfPoints(t,e,s),f,n=o.red,m=o.green,d=o.blue,T=o.alpha,c=i.red,h=i.green,y=i.blue,V=i.alpha;if(r.equals(o,i)){for(f=0;f<g;f++)l[p++]=r.floatToByte(n),l[p++]=r.floatToByte(m),l[p++]=r.floatToByte(d),l[p++]=r.floatToByte(T);return p}let M=(c-n)/g,C=(h-m)/g,G=(y-d)/g,_=(V-T)/g,a=p;for(f=0;f<g;f++)l[a++]=r.floatToByte(n+f*M),l[a++]=r.floatToByte(m+f*C),l[a++]=r.floatToByte(d+f*G),l[a++]=r.floatToByte(T+f*_);return a}function R(t){t=w(t,w.EMPTY_OBJECT);let e=t.positions,o=t.colors,i=w(t.colorsPerVertex,!1);if(!u(e)||e.length<2)throw new L("At least two positions are required.");if(u(o)&&(i&&o.length<e.length||!i&&o.length<e.length-1))throw new L("colors has an invalid length.");this._positions=e,this._colors=o,this._colorsPerVertex=i,this._arcType=w(t.arcType,S.GEODESIC),this._granularity=w(t.granularity,q.RADIANS_PER_DEGREE),this._ellipsoid=w(t.ellipsoid,b.default),this._workerName="createSimplePolylineGeometry";let s=1+e.length*k.packedLength;s+=u(o)?1+o.length*r.packedLength:1,this.packedLength=s+b.packedLength+3}R.pack=function(t,e,o){if(!u(t))throw new L("value is required");if(!u(e))throw new L("array is required");o=w(o,0);let i,s=t._positions,l=s.length;for(e[o++]=l,i=0;i<l;++i,o+=k.packedLength)k.pack(s[i],e,o);let p=t._colors;for(l=u(p)?p.length:0,e[o++]=l,i=0;i<l;++i,o+=r.packedLength)r.pack(p[i],e,o);return b.pack(t._ellipsoid,e,o),o+=b.packedLength,e[o++]=t._colorsPerVertex?1:0,e[o++]=t._arcType,e[o]=t._granularity,e};R.unpack=function(t,e,o){if(!u(t))throw new L("array is required");e=w(e,0);let i,s=t[e++],l=new Array(s);for(i=0;i<s;++i,e+=k.packedLength)l[i]=k.unpack(t,e);s=t[e++];let p=s>0?new Array(s):void 0;for(i=0;i<s;++i,e+=r.packedLength)p[i]=r.unpack(t,e);let g=b.unpack(t,e);e+=b.packedLength;let f=t[e++]===1,n=t[e++],m=t[e];return u(o)?(o._positions=l,o._colors=p,o._ellipsoid=g,o._colorsPerVertex=f,o._arcType=n,o._granularity=m,o):new R({positions:l,colors:p,ellipsoid:g,colorsPerVertex:f,arcType:n,granularity:m})};var F=new Array(2),N=new Array(2),$={positions:F,height:N,ellipsoid:void 0,minDistance:void 0,granularity:void 0};R.createGeometry=function(t){let e=t._positions,o=t._colors,i=t._colorsPerVertex,s=t._arcType,l=t._granularity,p=t._ellipsoid,g=q.chordLength(l,p.maximumRadius),f=u(o)&&!i,n,m=e.length,d,T,c,h,y=0;if(s===S.GEODESIC||s===S.RHUMB){let _,a,P;s===S.GEODESIC?(_=q.chordLength(l,p.maximumRadius),a=E.numberOfPoints,P=E.generateArc):(_=l,a=E.numberOfPointsRhumbLine,P=E.generateRhumbArc);let v=E.extractHeights(e,p),B=$;if(s===S.GEODESIC?B.minDistance=g:B.granularity=l,B.ellipsoid=p,f){let A=0;for(n=0;n<m-1;n++)A+=a(e[n],e[n+1],_)+1;d=new Float64Array(A*3),c=new Uint8Array(A*4),B.positions=F,B.height=N;let D=0;for(n=0;n<m-1;++n){F[0]=e[n],F[1]=e[n+1],N[0]=v[n],N[1]=v[n+1];let O=P(B);if(u(o)){let z=O.length/3;h=o[n];for(let U=0;U<z;++U)c[D++]=r.floatToByte(h.red),c[D++]=r.floatToByte(h.green),c[D++]=r.floatToByte(h.blue),c[D++]=r.floatToByte(h.alpha)}d.set(O,y),y+=O.length}}else if(B.positions=e,B.height=v,d=new Float64Array(P(B)),u(o)){for(c=new Uint8Array(d.length/3*4),n=0;n<m-1;++n){let D=e[n],O=e[n+1],z=o[n],U=o[n+1];y=Z(D,O,z,U,g,c,y)}let A=o[m-1];c[y++]=r.floatToByte(A.red),c[y++]=r.floatToByte(A.green),c[y++]=r.floatToByte(A.blue),c[y++]=r.floatToByte(A.alpha)}}else{T=f?m*2-2:m,d=new Float64Array(T*3),c=u(o)?new Uint8Array(T*4):void 0;let _=0,a=0;for(n=0;n<m;++n){let P=e[n];if(f&&n>0&&(k.pack(P,d,_),_+=3,h=o[n-1],c[a++]=r.floatToByte(h.red),c[a++]=r.floatToByte(h.green),c[a++]=r.floatToByte(h.blue),c[a++]=r.floatToByte(h.alpha)),f&&n===m-1)break;k.pack(P,d,_),_+=3,u(o)&&(h=o[n],c[a++]=r.floatToByte(h.red),c[a++]=r.floatToByte(h.green),c[a++]=r.floatToByte(h.blue),c[a++]=r.floatToByte(h.alpha))}}let V=new W;V.position=new Y({componentDatatype:H.DOUBLE,componentsPerAttribute:3,values:d}),u(o)&&(V.color=new Y({componentDatatype:H.UNSIGNED_BYTE,componentsPerAttribute:4,values:c,normalize:!0})),T=d.length/3;let M=(T-1)*2,C=X.createTypedArray(T,M),G=0;for(n=0;n<T-1;++n)C[G++]=n,C[G++]=n+1;return new Q({attributes:V,indices:C,primitiveType:K.LINES,boundingSphere:j.fromPoints(e)})};var J=R;function x(t,e){return u(e)&&(t=J.unpack(t,e)),t._ellipsoid=b.clone(t._ellipsoid),J.createGeometry(t)}var _e=x;export{_e as default};
