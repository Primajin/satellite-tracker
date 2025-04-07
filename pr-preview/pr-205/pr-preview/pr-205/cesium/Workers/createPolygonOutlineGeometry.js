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

import{a}from"./chunk-SVOVYNOK.js";import{a as P}from"./chunk-G7YCRUTN.js";import{a as F}from"./chunk-2TTZKDIP.js";import{a as V}from"./chunk-HJB4AZ37.js";import"./chunk-NSW7N5NB.js";import"./chunk-56SXHQAK.js";import{a as C}from"./chunk-FFURXUS3.js";import{a as M}from"./chunk-D7EBM725.js";import"./chunk-6HLC35BP.js";import{a as W,b as D}from"./chunk-XUAV2AYX.js";import"./chunk-FLU3S7Y5.js";import"./chunk-FT22QKWD.js";import"./chunk-HGNPNJ5T.js";import"./chunk-ISZ7WW7L.js";import{a as G}from"./chunk-CF754CSJ.js";import{a as B}from"./chunk-CZ3TUBLX.js";import{b as U,c as S,d as w}from"./chunk-L4Y3PGRA.js";import{d as x}from"./chunk-BHOMZQKL.js";import"./chunk-O23FQWOY.js";import{a as T}from"./chunk-KGIGJVHC.js";import{a as v,d as y,f as j}from"./chunk-V3YO6LNK.js";import{a as L}from"./chunk-XAJAI4KM.js";import"./chunk-QJ75BJDL.js";import"./chunk-SAZKQEJR.js";import{a as N,b as O}from"./chunk-Y5QCE4LD.js";import{e as E}from"./chunk-V7XFDMXL.js";var Y=[],k=[];function K(e,t,r,b,l){let p=M.fromPoints(t,e).projectPointsOntoPlane(t,Y);D.computeWindingOrder2D(p)===W.CLOCKWISE&&(p.reverse(),t=t.slice().reverse());let n,i,o=t.length,c=0;if(b)for(n=new Float64Array(o*2*3),i=0;i<o;i++){let u=t[i],h=t[(i+1)%o];n[c++]=u.x,n[c++]=u.y,n[c++]=u.z,n[c++]=h.x,n[c++]=h.y,n[c++]=h.z}else{let u=0;if(l===P.GEODESIC)for(i=0;i<o;i++)u+=a.subdivideLineCount(t[i],t[(i+1)%o],r);else if(l===P.RHUMB)for(i=0;i<o;i++)u+=a.subdivideRhumbLineCount(e,t[i],t[(i+1)%o],r);for(n=new Float64Array(u*3),i=0;i<o;i++){let h;l===P.GEODESIC?h=a.subdivideLine(t[i],t[(i+1)%o],r,k):l===P.RHUMB&&(h=a.subdivideRhumbLine(e,t[i],t[(i+1)%o],r,k));let g=h.length;for(let d=0;d<g;++d)n[c++]=h[d]}}o=n.length/3;let f=o*2,m=G.createTypedArray(o,f);for(c=0,i=0;i<o-1;i++)m[c++]=i,m[c++]=i+1;return m[c++]=o-1,m[c++]=0,new F({geometry:new S({attributes:new B({position:new w({componentDatatype:T.DOUBLE,componentsPerAttribute:3,values:n})}),indices:m,primitiveType:U.LINES})})}function q(e,t,r,b,l){let p=M.fromPoints(t,e).projectPointsOntoPlane(t,Y);D.computeWindingOrder2D(p)===W.CLOCKWISE&&(p.reverse(),t=t.slice().reverse());let n,i,o=t.length,c=new Array(o),f=0;if(b)for(n=new Float64Array(o*2*3*2),i=0;i<o;++i){c[i]=f/3;let g=t[i],d=t[(i+1)%o];n[f++]=g.x,n[f++]=g.y,n[f++]=g.z,n[f++]=d.x,n[f++]=d.y,n[f++]=d.z}else{let g=0;if(l===P.GEODESIC)for(i=0;i<o;i++)g+=a.subdivideLineCount(t[i],t[(i+1)%o],r);else if(l===P.RHUMB)for(i=0;i<o;i++)g+=a.subdivideRhumbLineCount(e,t[i],t[(i+1)%o],r);for(n=new Float64Array(g*3*2),i=0;i<o;++i){c[i]=f/3;let d;l===P.GEODESIC?d=a.subdivideLine(t[i],t[(i+1)%o],r,k):l===P.RHUMB&&(d=a.subdivideRhumbLine(e,t[i],t[(i+1)%o],r,k));let _=d.length;for(let R=0;R<_;++R)n[f++]=d[R]}}o=n.length/(3*2);let m=c.length,u=(o*2+m)*2,h=G.createTypedArray(o+m,u);for(f=0,i=0;i<o;++i)h[f++]=i,h[f++]=(i+1)%o,h[f++]=i+o,h[f++]=(i+1)%o+o;for(i=0;i<m;i++){let g=c[i];h[f++]=g,h[f++]=g+o}return new F({geometry:new S({attributes:new B({position:new w({componentDatatype:T.DOUBLE,componentsPerAttribute:3,values:n})}),indices:h,primitiveType:U.LINES})})}function A(e){if(O.typeOf.object("options",e),O.typeOf.object("options.polygonHierarchy",e.polygonHierarchy),e.perPositionHeight&&E(e.height))throw new N("Cannot use both options.perPositionHeight and options.height");if(E(e.arcType)&&e.arcType!==P.GEODESIC&&e.arcType!==P.RHUMB)throw new N("Invalid arcType. Valid options are ArcType.GEODESIC and ArcType.RHUMB.");let t=e.polygonHierarchy,r=e.ellipsoid??y.default,b=e.granularity??L.RADIANS_PER_DEGREE,l=e.perPositionHeight??!1,H=l&&E(e.extrudedHeight),p=e.arcType??P.GEODESIC,s=e.height??0,n=e.extrudedHeight??s;if(!H){let i=Math.max(s,n);n=Math.min(s,n),s=i}this._ellipsoid=y.clone(r),this._granularity=b,this._height=s,this._extrudedHeight=n,this._arcType=p,this._polygonHierarchy=t,this._perPositionHeight=l,this._perPositionHeightExtrude=H,this._offsetAttribute=e.offsetAttribute,this._workerName="createPolygonOutlineGeometry",this.packedLength=a.computeHierarchyPackedLength(t,v)+y.packedLength+8}A.pack=function(e,t,r){return O.typeOf.object("value",e),O.defined("array",t),r=r??0,r=a.packPolygonHierarchy(e._polygonHierarchy,t,r,v),y.pack(e._ellipsoid,t,r),r+=y.packedLength,t[r++]=e._height,t[r++]=e._extrudedHeight,t[r++]=e._granularity,t[r++]=e._perPositionHeightExtrude?1:0,t[r++]=e._perPositionHeight?1:0,t[r++]=e._arcType,t[r++]=e._offsetAttribute??-1,t[r]=e.packedLength,t};var J=y.clone(y.UNIT_SPHERE),Q={polygonHierarchy:{}};A.unpack=function(e,t,r){O.defined("array",e),t=t??0;let b=a.unpackPolygonHierarchy(e,t,v);t=b.startingIndex,delete b.startingIndex;let l=y.unpack(e,t,J);t+=y.packedLength;let H=e[t++],p=e[t++],s=e[t++],n=e[t++]===1,i=e[t++]===1,o=e[t++],c=e[t++],f=e[t];return E(r)||(r=new A(Q)),r._polygonHierarchy=b,r._ellipsoid=y.clone(l,r._ellipsoid),r._height=H,r._extrudedHeight=p,r._granularity=s,r._perPositionHeight=i,r._perPositionHeightExtrude=n,r._arcType=o,r._offsetAttribute=c===-1?void 0:c,r.packedLength=f,r};A.fromPositions=function(e){e=e??j.EMPTY_OBJECT,O.defined("options.positions",e.positions);let t={polygonHierarchy:{positions:e.positions},height:e.height,extrudedHeight:e.extrudedHeight,ellipsoid:e.ellipsoid,granularity:e.granularity,perPositionHeight:e.perPositionHeight,arcType:e.arcType,offsetAttribute:e.offsetAttribute};return new A(t)};A.createGeometry=function(e){let t=e._ellipsoid,r=e._granularity,b=e._polygonHierarchy,l=e._perPositionHeight,H=e._arcType,p=a.polygonOutlinesFromHierarchy(b,!l,t);if(p.length===0)return;let s,n=[],i=L.chordLength(r,t.maximumRadius),o=e._height,c=e._extrudedHeight,f=e._perPositionHeightExtrude||!L.equalsEpsilon(o,c,0,L.EPSILON2),m,u;if(f)for(u=0;u<p.length;u++){if(s=q(t,p[u],i,l,H),s.geometry=a.scaleToGeodeticHeightExtruded(s.geometry,o,c,t,l),E(e._offsetAttribute)){let d=s.geometry.attributes.position.values.length/3,_=new Uint8Array(d);e._offsetAttribute===C.TOP?_=_.fill(1,0,d/2):(m=e._offsetAttribute===C.NONE?0:1,_=_.fill(m)),s.geometry.attributes.applyOffset=new w({componentDatatype:T.UNSIGNED_BYTE,componentsPerAttribute:1,values:_})}n.push(s)}else for(u=0;u<p.length;u++){if(s=K(t,p[u],i,l,H),s.geometry.attributes.position.values=D.scaleToGeodeticHeight(s.geometry.attributes.position.values,o,t,!l),E(e._offsetAttribute)){let d=s.geometry.attributes.position.values.length;m=e._offsetAttribute===C.NONE?0:1;let _=new Uint8Array(d/3).fill(m);s.geometry.attributes.applyOffset=new w({componentDatatype:T.UNSIGNED_BYTE,componentsPerAttribute:1,values:_})}n.push(s)}let h=V.combineInstances(n)[0],g=x.fromVertices(h.attributes.position.values);return new S({attributes:h.attributes,indices:h.indices,primitiveType:h.primitiveType,boundingSphere:g,offsetAttribute:e._offsetAttribute})};var z=A;function X(e,t){return E(t)&&(e=z.unpack(e,t)),e._ellipsoid=y.clone(e._ellipsoid),z.createGeometry(e)}var Oe=X;export{Oe as default};
