/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.123.1
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

import{a as M}from"./chunk-A7PYZWOJ.js";import{a as W}from"./chunk-6PSYLVHH.js";import"./chunk-AXZROGOU.js";import"./chunk-FBGWLBZF.js";import{a as I,b as j}from"./chunk-5VR2U74L.js";import"./chunk-5P76J7M2.js";import"./chunk-UYHBBQ6A.js";import{a as g}from"./chunk-E3JWUR3Y.js";import"./chunk-3DTIN3PX.js";import"./chunk-54256N4H.js";import{a as x,b as V}from"./chunk-4SSSBIZQ.js";import{a as $}from"./chunk-VYTWK24A.js";import"./chunk-JFXGGH4U.js";import"./chunk-NDAGFHEH.js";import"./chunk-UONIHL6J.js";import{a as Z}from"./chunk-MMUM2K3W.js";import{a as X}from"./chunk-KYQV7GBQ.js";import{b as z,c as Q,d as U}from"./chunk-QAZHJDBR.js";import{d as Y}from"./chunk-DHJSNIID.js";import{h as K}from"./chunk-TZA2EBXA.js";import{a as B}from"./chunk-N2BNZIW6.js";import{a as T,c as C,d as f}from"./chunk-HCEU6S2D.js";import{a as J}from"./chunk-CU56QGQW.js";import"./chunk-D6INCCYP.js";import"./chunk-2M3RUB3T.js";import{a as k}from"./chunk-FA3XILPW.js";import{a as D}from"./chunk-IEHYVM5Q.js";import{e as _}from"./chunk-RT4BZSKE.js";function oe(t,e,n,o){let l=new X;o.position&&(l.position=new U({componentDatatype:B.DOUBLE,componentsPerAttribute:3,values:t}));let i=e.length,u=t.length/3,L=(u-i*2)/(i*2),E=V.triangulate(e),q=(L-1)*i*6+E.length*2,r=Z.createTypedArray(u,q),m,s,d,b,A,F,G=i*2,p=0;for(m=0;m<L-1;m++){for(s=0;s<i-1;s++)d=s*2+m*i*2,F=d+G,b=d+1,A=b+G,r[p++]=b,r[p++]=d,r[p++]=A,r[p++]=A,r[p++]=d,r[p++]=F;d=i*2-2+m*i*2,b=d+1,A=b+G,F=d+G,r[p++]=b,r[p++]=d,r[p++]=A,r[p++]=A,r[p++]=d,r[p++]=F}if(o.st||o.tangent||o.bitangent){let c=new Float32Array(u*2),O=1/(L-1),w=1/n.height,S=n.height/2,y,a,h=0;for(m=0;m<L;m++){for(y=m*O,a=w*(e[0].y+S),c[h++]=y,c[h++]=a,s=1;s<i;s++)a=w*(e[s].y+S),c[h++]=y,c[h++]=a,c[h++]=y,c[h++]=a;a=w*(e[0].y+S),c[h++]=y,c[h++]=a}for(s=0;s<i;s++)y=0,a=w*(e[s].y+S),c[h++]=y,c[h++]=a;for(s=0;s<i;s++)y=(L-1)*O,a=w*(e[s].y+S),c[h++]=y,c[h++]=a;l.st=new U({componentDatatype:B.FLOAT,componentsPerAttribute:2,values:new Float32Array(c)})}let N=u-i*2;for(m=0;m<E.length;m+=3){let c=E[m]+N,O=E[m+1]+N,w=E[m+2]+N;r[p++]=c,r[p++]=O,r[p++]=w,r[p++]=w+i,r[p++]=O+i,r[p++]=c+i}let P=new Q({attributes:l,indices:r,boundingSphere:Y.fromVertices(t),primitiveType:z.TRIANGLES});if(o.normal&&(P=W.computeNormal(P)),o.tangent||o.bitangent){try{P=W.computeTangentAndBitangent(P)}catch{K("polyline-volume-tangent-bitangent","Unable to compute tangents and bitangents for polyline volume geometry")}o.tangent||(P.attributes.tangent=void 0),o.bitangent||(P.attributes.bitangent=void 0),o.st||(P.attributes.st=void 0)}return P}function R(t){t=k(t,k.EMPTY_OBJECT);let e=t.polylinePositions,n=t.shapePositions;if(!_(e))throw new D("options.polylinePositions is required.");if(!_(n))throw new D("options.shapePositions is required.");this._positions=e,this._shape=n,this._ellipsoid=f.clone(k(t.ellipsoid,f.default)),this._cornerType=k(t.cornerType,I.ROUNDED),this._vertexFormat=g.clone(k(t.vertexFormat,g.DEFAULT)),this._granularity=k(t.granularity,J.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeGeometry";let o=1+e.length*T.packedLength;o+=1+n.length*C.packedLength,this.packedLength=o+f.packedLength+g.packedLength+2}R.pack=function(t,e,n){if(!_(t))throw new D("value is required");if(!_(e))throw new D("array is required");n=k(n,0);let o,l=t._positions,i=l.length;for(e[n++]=i,o=0;o<i;++o,n+=T.packedLength)T.pack(l[o],e,n);let u=t._shape;for(i=u.length,e[n++]=i,o=0;o<i;++o,n+=C.packedLength)C.pack(u[o],e,n);return f.pack(t._ellipsoid,e,n),n+=f.packedLength,g.pack(t._vertexFormat,e,n),n+=g.packedLength,e[n++]=t._cornerType,e[n]=t._granularity,e};var ee=f.clone(f.UNIT_SPHERE),te=new g,v={polylinePositions:void 0,shapePositions:void 0,ellipsoid:ee,vertexFormat:te,cornerType:void 0,granularity:void 0};R.unpack=function(t,e,n){if(!_(t))throw new D("array is required");e=k(e,0);let o,l=t[e++],i=new Array(l);for(o=0;o<l;++o,e+=T.packedLength)i[o]=T.unpack(t,e);l=t[e++];let u=new Array(l);for(o=0;o<l;++o,e+=C.packedLength)u[o]=C.unpack(t,e);let L=f.unpack(t,e,ee);e+=f.packedLength;let E=g.unpack(t,e,te);e+=g.packedLength;let q=t[e++],r=t[e];return _(n)?(n._positions=i,n._shape=u,n._ellipsoid=f.clone(L,n._ellipsoid),n._vertexFormat=g.clone(E,n._vertexFormat),n._cornerType=q,n._granularity=r,n):(v.polylinePositions=i,v.shapePositions=u,v.cornerType=q,v.granularity=r,new R(v))};var ne=new M;R.createGeometry=function(t){let e=t._positions,n=$(e,T.equalsEpsilon),o=t._shape;if(o=j.removeDuplicatesFromShape(o),n.length<2||o.length<3)return;V.computeWindingOrder2D(o)===x.CLOCKWISE&&o.reverse();let l=M.fromPoints(o,ne),i=j.computePositions(n,o,l,t,!0);return oe(i,o,l,t._vertexFormat)};var H=R;function ie(t,e){return _(e)&&(t=H.unpack(t,e)),t._ellipsoid=f.clone(t._ellipsoid),H.createGeometry(t)}var Re=ie;export{Re as default};
