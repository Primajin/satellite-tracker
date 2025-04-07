/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.128
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

import{a as m}from"./chunk-H5ORMCZ2.js";import{a as R}from"./chunk-G7YCRUTN.js";import{a as N}from"./chunk-GL6V53IR.js";import"./chunk-T4QMV5NY.js";import{a as g}from"./chunk-YPLJFYMF.js";import{a as le}from"./chunk-FLU3S7Y5.js";import"./chunk-FT22QKWD.js";import"./chunk-HGNPNJ5T.js";import"./chunk-ISZ7WW7L.js";import{a as se}from"./chunk-CF754CSJ.js";import{a as ce}from"./chunk-CZ3TUBLX.js";import{a as ne,b as re,c as ie,d as x}from"./chunk-L4Y3PGRA.js";import{d as oe}from"./chunk-BHOMZQKL.js";import"./chunk-O23FQWOY.js";import{a as V}from"./chunk-KGIGJVHC.js";import{a as p,d as u,f as te}from"./chunk-V3YO6LNK.js";import{a as j}from"./chunk-XAJAI4KM.js";import"./chunk-QJ75BJDL.js";import"./chunk-SAZKQEJR.js";import{a as F}from"./chunk-Y5QCE4LD.js";import{e as h}from"./chunk-V7XFDMXL.js";var me=[];function Ae(e,o,t,n,c){let s=me;s.length=c;let l,k=t.red,a=t.green,r=t.blue,w=t.alpha,E=n.red,i=n.green,f=n.blue,b=n.alpha;if(m.equals(t,n)){for(l=0;l<c;l++)s[l]=m.clone(t);return s}let G=(E-k)/c,z=(i-a)/c,M=(f-r)/c,S=(b-w)/c;for(l=0;l<c;l++)s[l]=new m(k+l*G,a+l*z,r+l*M,w+l*S);return s}function q(e){e=e??te.EMPTY_OBJECT;let o=e.positions,t=e.colors,n=e.width??1,c=e.colorsPerVertex??!1;if(!h(o)||o.length<2)throw new F("At least two positions are required.");if(typeof n!="number")throw new F("width must be a number");if(h(t)&&(c&&t.length<o.length||!c&&t.length<o.length-1))throw new F("colors has an invalid length.");this._positions=o,this._colors=t,this._width=n,this._colorsPerVertex=c,this._vertexFormat=g.clone(e.vertexFormat??g.DEFAULT),this._arcType=e.arcType??R.GEODESIC,this._granularity=e.granularity??j.RADIANS_PER_DEGREE,this._ellipsoid=u.clone(e.ellipsoid??u.default),this._workerName="createPolylineGeometry";let s=1+o.length*p.packedLength;s+=h(t)?1+t.length*m.packedLength:1,this.packedLength=s+u.packedLength+g.packedLength+4}q.pack=function(e,o,t){if(!h(e))throw new F("value is required");if(!h(o))throw new F("array is required");t=t??0;let n,c=e._positions,s=c.length;for(o[t++]=s,n=0;n<s;++n,t+=p.packedLength)p.pack(c[n],o,t);let l=e._colors;for(s=h(l)?l.length:0,o[t++]=s,n=0;n<s;++n,t+=m.packedLength)m.pack(l[n],o,t);return u.pack(e._ellipsoid,o,t),t+=u.packedLength,g.pack(e._vertexFormat,o,t),t+=g.packedLength,o[t++]=e._width,o[t++]=e._colorsPerVertex?1:0,o[t++]=e._arcType,o[t]=e._granularity,o};var de=u.clone(u.UNIT_SPHERE),ue=new g,O={positions:void 0,colors:void 0,ellipsoid:de,vertexFormat:ue,width:void 0,colorsPerVertex:void 0,arcType:void 0,granularity:void 0};q.unpack=function(e,o,t){if(!h(e))throw new F("array is required");o=o??0;let n,c=e[o++],s=new Array(c);for(n=0;n<c;++n,o+=p.packedLength)s[n]=p.unpack(e,o);c=e[o++];let l=c>0?new Array(c):void 0;for(n=0;n<c;++n,o+=m.packedLength)l[n]=m.unpack(e,o);let k=u.unpack(e,o,de);o+=u.packedLength;let a=g.unpack(e,o,ue);o+=g.packedLength;let r=e[o++],w=e[o++]===1,E=e[o++],i=e[o];return h(t)?(t._positions=s,t._colors=l,t._ellipsoid=u.clone(k,t._ellipsoid),t._vertexFormat=g.clone(a,t._vertexFormat),t._width=r,t._colorsPerVertex=w,t._arcType=E,t._granularity=i,t):(O.positions=s,O.colors=l,O.width=r,O.colorsPerVertex=w,O.arcType=E,O.granularity=i,new q(O))};var pe=new p,ae=new p,fe=new p,he=new p;q.createGeometry=function(e){let o=e._width,t=e._vertexFormat,n=e._colors,c=e._colorsPerVertex,s=e._arcType,l=e._granularity,k=e._ellipsoid,a,r,w,E=[],i=le(e._positions,p.equalsEpsilon,!1,E);if(h(n)&&E.length>0){let d=0,P=E[0];n=n.filter(function(U,L){let A=!1;return c?A=L===P||L===0&&P===1:A=L+1===P,A?(d++,P=E[d],!1):!0})}let f=i.length;if(f<2||o<=0)return;if(s===R.GEODESIC||s===R.RHUMB){let d,P;s===R.GEODESIC?(d=j.chordLength(l,k.maximumRadius),P=N.numberOfPoints):(d=l,P=N.numberOfPointsRhumbLine);let U=N.extractHeights(i,k);if(h(n)){let L=1;for(a=0;a<f-1;++a)L+=P(i[a],i[a+1],d);let A=new Array(L),y=0;for(a=0;a<f-1;++a){let X=i[a],Z=i[a+1],$=n[a],I=P(X,Z,d);if(c&&a<L){let _e=n[a+1],ee=Ae(X,Z,$,_e,I),Pe=ee.length;for(r=0;r<Pe;++r)A[y++]=ee[r]}else for(r=0;r<I;++r)A[y++]=m.clone($)}A[y]=m.clone(n[n.length-1]),n=A,me.length=0}s===R.GEODESIC?i=N.generateCartesianArc({positions:i,minDistance:d,ellipsoid:k,height:U}):i=N.generateCartesianRhumbArc({positions:i,granularity:d,ellipsoid:k,height:U})}f=i.length;let b=f*4-4,G=new Float64Array(b*3),z=new Float64Array(b*3),M=new Float64Array(b*3),S=new Float32Array(b*2),Y=t.st?new Float32Array(b*2):void 0,T=h(n)?new Uint8Array(b*4):void 0,H=0,K=0,Q=0,W=0,_;for(r=0;r<f;++r){r===0?(_=pe,p.subtract(i[0],i[1],_),p.add(i[0],_,_)):_=i[r-1],p.clone(_,fe),p.clone(i[r],ae),r===f-1?(_=pe,p.subtract(i[f-1],i[f-2],_),p.add(i[f-1],_,_)):_=i[r+1],p.clone(_,he);let d,P;h(T)&&(r!==0&&!c?d=n[r-1]:d=n[r],r!==f-1&&(P=n[r]));let U=r===0?2:0,L=r===f-1?2:4;for(w=U;w<L;++w){p.pack(ae,G,H),p.pack(fe,z,H),p.pack(he,M,H),H+=3;let A=w-2<0?-1:1;if(S[K++]=2*(w%2)-1,S[K++]=A*o,t.st&&(Y[Q++]=r/(f-1),Y[Q++]=Math.max(S[K-2],0)),h(T)){let y=w<2?d:P;T[W++]=m.floatToByte(y.red),T[W++]=m.floatToByte(y.green),T[W++]=m.floatToByte(y.blue),T[W++]=m.floatToByte(y.alpha)}}}let D=new ce;D.position=new x({componentDatatype:V.DOUBLE,componentsPerAttribute:3,values:G}),D.prevPosition=new x({componentDatatype:V.DOUBLE,componentsPerAttribute:3,values:z}),D.nextPosition=new x({componentDatatype:V.DOUBLE,componentsPerAttribute:3,values:M}),D.expandAndWidth=new x({componentDatatype:V.FLOAT,componentsPerAttribute:2,values:S}),t.st&&(D.st=new x({componentDatatype:V.FLOAT,componentsPerAttribute:2,values:Y})),h(T)&&(D.color=new x({componentDatatype:V.UNSIGNED_BYTE,componentsPerAttribute:4,values:T,normalize:!0}));let v=se.createTypedArray(b,f*6-6),C=0,B=0,we=f-1;for(r=0;r<we;++r)v[B++]=C,v[B++]=C+2,v[B++]=C+1,v[B++]=C+1,v[B++]=C+2,v[B++]=C+3,C+=4;return new ie({attributes:D,indices:v,primitiveType:re.TRIANGLES,boundingSphere:oe.fromPoints(i),geometryType:ne.POLYLINES})};var J=q;function ge(e,o){return h(o)&&(e=J.unpack(e,o)),e._ellipsoid=u.clone(e._ellipsoid),J.createGeometry(e)}var We=ge;export{We as default};
