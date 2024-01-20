/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.113
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

import{a as J}from"./chunk-54KKWN6C.js";import{a as Y}from"./chunk-TBE3AFZU.js";import{a as B}from"./chunk-XAJFOHMU.js";import{a as X}from"./chunk-AT27Z3WO.js";import{c as W}from"./chunk-HB5KYIAZ.js";import"./chunk-JJLMPDRL.js";import{a as t,b as k,d as _}from"./chunk-T4TQMW7B.js";import{a as v}from"./chunk-7TT2TZHW.js";import"./chunk-FRKPHPJC.js";import"./chunk-OHNTPGT4.js";import"./chunk-XQTMMRVI.js";import"./chunk-QHDGFGBI.js";import"./chunk-MVZBAA6W.js";var V=32767,it=Math.cos(v.toRadians(150)),ct=new k,rt=new t;function at(e,o,c,i,s,A,h){let g=e.length,f=new Float64Array(g*3);for(let d=0;d<g;++d){let l=e[d],r=o[d],E=c[d],n=v.lerp(i.west,i.east,l/V),p=v.lerp(i.south,i.north,r/V),w=v.lerp(s,A,E/V),x=k.fromRadians(n,p,w,ct),P=h.cartographicToCartesian(x,rt);t.pack(P,f,d*3)}return f}function dt(e){let o=e.length,c=new Uint32Array(o+1),i=0;for(let s=0;s<o;++s)c[s]=i,i+=e[s];return c[o]=i,c}var lt=new k,ht=new k;function ft(e,o,c,i){let s=i.length,A=e.length,h=new Uint8Array(A),g=lt,f=ht,d=0;for(let r=0;r<s;r++){let E=i[r],n=E;for(let p=1;p<E;p++){let w=d+p,x=w-1;f.longitude=e[w],f.latitude=o[w],g.longitude=e[x],g.latitude=o[x],k.equals(f,g)&&(n--,h[x]=1)}i[r]=n,d+=E}let l=0;for(let r=0;r<A;r++)h[r]!==1&&(e[l]=e[r],o[l]=o[r],c[l]=c[r],l++)}function ot(e){let o=e*8,c=o*3,i=o*4;this.startEllipsoidNormals=new Float32Array(c),this.endEllipsoidNormals=new Float32Array(c),this.startPositionAndHeights=new Float32Array(i),this.startFaceNormalAndVertexCornerIds=new Float32Array(i),this.endPositionAndHeights=new Float32Array(i),this.endFaceNormalAndHalfWidths=new Float32Array(i),this.vertexBatchIds=new Uint16Array(o),this.indices=B.createTypedArray(o,36*e),this.vec3Offset=0,this.vec4Offset=0,this.batchIdOffset=0,this.indexOffset=0,this.volumeStartIndex=0}var Q=new t,pt=new t;function $(e,o,c,i,s){let A=t.subtract(c,o,pt),h=t.subtract(o,e,Q);return t.normalize(A,A),t.normalize(h,h),t.dot(A,h)<it&&(h=t.multiplyByScalar(h,-1,Q)),t.add(A,h,s),t.equals(s,t.ZERO)&&(s=t.subtract(e,o)),t.cross(s,i,s),t.cross(i,s,s),t.normalize(s,s),s}var st=[0,2,6,0,6,4,0,1,3,0,3,2,0,4,5,0,5,1,5,3,1,5,7,3,7,5,4,7,4,6,7,6,2,7,2,3],j=st.length,tt=new t,ut=new t,mt=new t,At=new t,Nt=new t;ot.prototype.addVolume=function(e,o,c,i,s,A,h,g,f,d){let l=t.add(o,f,tt),r=d.geodeticSurfaceNormal(l,ut);l=t.add(c,f,tt);let E=d.geodeticSurfaceNormal(l,At),n=$(e,o,c,r,mt),p=$(i,c,o,E,Nt),w=this.startEllipsoidNormals,x=this.endEllipsoidNormals,P=this.startPositionAndHeights,H=this.startFaceNormalAndVertexCornerIds,b=this.endPositionAndHeights,a=this.endFaceNormalAndHalfWidths,F=this.vertexBatchIds,m=this.batchIdOffset,I=this.vec3Offset,u=this.vec4Offset,N;for(N=0;N<8;N++)t.pack(r,w,I),t.pack(E,x,I),t.pack(o,P,u),P[u+3]=s,t.pack(c,b,u),b[u+3]=A,t.pack(n,H,u),H[u+3]=N,t.pack(p,a,u),a[u+3]=h,F[m++]=g,I+=3,u+=4;this.batchIdOffset=m,this.vec3Offset=I,this.vec4Offset=u;let C=this.indices,y=this.volumeStartIndex,z=this.indexOffset;for(N=0;N<j;N++)C[z+N]=st[N]+y;this.volumeStartIndex+=8,this.indexOffset+=j};var gt=new W,Et=new _,wt=new t,M=new t,It=new t,xt=new t,T=new t;function Pt(e,o){let c=new Uint16Array(e.positions),i=new Uint16Array(e.widths),s=new Uint32Array(e.counts),A=new Uint16Array(e.batchIds),h=gt,g=Et,f=wt,d=new Float64Array(e.packedBuffer),l=0,r=d[l++],E=d[l++];W.unpack(d,l,h),l+=W.packedLength,_.unpack(d,l,g),l+=_.packedLength,t.unpack(d,l,f);let n,p=c.length/3,w=c.subarray(0,p),x=c.subarray(p,2*p),P=c.subarray(2*p,3*p);Y.zigZagDeltaDecode(w,x,P),ft(w,x,P,s);let H=s.length,b=0;for(n=0;n<H;n++){let y=s[n];b+=y-1}let a=new ot(b),F=at(w,x,P,h,r,E,g,f);p=w.length;let m=new Float32Array(p*3);for(n=0;n<p;++n)m[n*3]=F[n*3]-f.x,m[n*3+1]=F[n*3+1]-f.y,m[n*3+2]=F[n*3+2]-f.z;let I=0,u=0;for(n=0;n<H;n++){let y=s[n]-1,z=i[n]*.5,et=A[n],q=I;for(let D=0;D<y;D++){let S=t.unpack(m,I,It),O=t.unpack(m,I+3,xt),G=P[u],Z=P[u+1];G=v.lerp(r,E,G/V),Z=v.lerp(r,E,Z/V),u++;let L=M,R=T;if(D===0){let U=q+y*3,K=t.unpack(m,U,M);if(t.equals(K,S))t.unpack(m,U-3,L);else{let nt=t.subtract(S,O,M);L=t.add(nt,S,M)}}else t.unpack(m,I-3,L);if(D===y-1){let U=t.unpack(m,q,T);if(t.equals(U,O))t.unpack(m,q+3,R);else{let K=t.subtract(O,S,T);R=t.add(K,O,T)}}else t.unpack(m,I+6,R);a.addVolume(L,S,O,R,G,Z,z,et,f,g),I+=3}I+=3,u++}let N=a.indices;o.push(a.startEllipsoidNormals.buffer),o.push(a.endEllipsoidNormals.buffer),o.push(a.startPositionAndHeights.buffer),o.push(a.startFaceNormalAndVertexCornerIds.buffer),o.push(a.endPositionAndHeights.buffer),o.push(a.endFaceNormalAndHalfWidths.buffer),o.push(a.vertexBatchIds.buffer),o.push(N.buffer);let C={indexDatatype:N.BYTES_PER_ELEMENT===2?B.UNSIGNED_SHORT:B.UNSIGNED_INT,startEllipsoidNormals:a.startEllipsoidNormals.buffer,endEllipsoidNormals:a.endEllipsoidNormals.buffer,startPositionAndHeights:a.startPositionAndHeights.buffer,startFaceNormalAndVertexCornerIds:a.startFaceNormalAndVertexCornerIds.buffer,endPositionAndHeights:a.endPositionAndHeights.buffer,endFaceNormalAndHalfWidths:a.endFaceNormalAndHalfWidths.buffer,vertexBatchIds:a.vertexBatchIds.buffer,indices:N.buffer};if(e.keepDecodedPositions){let y=dt(s);o.push(F.buffer,y.buffer),C=X(C,{decodedPositions:F.buffer,decodedPositionOffsets:y.buffer})}return C}var Vt=J(Pt);export{Vt as default};
