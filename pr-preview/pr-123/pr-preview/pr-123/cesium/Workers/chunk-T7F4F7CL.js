/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.121.1
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

import{a as S}from"./chunk-MMLIKCVQ.js";import{a as j}from"./chunk-E5HDF3DV.js";import{a as D}from"./chunk-YKIFKUHX.js";import{a as V}from"./chunk-T5AOQBYV.js";import{b as T,c as B,d as L}from"./chunk-2IMMJQM5.js";import{d as O}from"./chunk-DFXB7SZL.js";import{a as x}from"./chunk-BOISCMIO.js";import{a as c,d as l}from"./chunk-HKHWYVWA.js";import{a as E}from"./chunk-HJACR6CT.js";import{a as m}from"./chunk-XK5OJOFF.js";import{a as _}from"./chunk-YLNT2FRE.js";import{e as d}from"./chunk-PIOASIZ6.js";var q=new c,M=new c;function U(e){let t=e.center;M=c.multiplyByScalar(e.ellipsoid.geodeticSurfaceNormal(t,M),e.height,M),M=c.add(t,M,M);let i=new O(M,e.semiMajorAxis),f=S.computeEllipsePositions(e,!1,!0).outerPositions,o=new V({position:new L({componentDatatype:x.DOUBLE,componentsPerAttribute:3,values:S.raisePositionsToHeight(f,e,!1)})}),r=f.length/3,u=D.createTypedArray(r,r*2),h=0;for(let n=0;n<r;++n)u[h++]=n,u[h++]=(n+1)%r;return{boundingSphere:i,attributes:o,indices:u}}var N=new O,P=new O;function R(e){let t=e.center,i=e.ellipsoid,f=e.semiMajorAxis,o=c.multiplyByScalar(i.geodeticSurfaceNormal(t,q),e.height,q);N.center=c.add(t,o,N.center),N.radius=f,o=c.multiplyByScalar(i.geodeticSurfaceNormal(t,o),e.extrudedHeight,o),P.center=c.add(t,o,P.center),P.radius=f;let r=S.computeEllipsePositions(e,!1,!0).outerPositions,u=new V({position:new L({componentDatatype:x.DOUBLE,componentsPerAttribute:3,values:S.raisePositionsToHeight(r,e,!0)})});r=u.position.values;let h=O.union(N,P),n=r.length/3;if(d(e.offsetAttribute)){let g=new Uint8Array(n);if(e.offsetAttribute===j.TOP)g=g.fill(1,0,n/2);else{let H=e.offsetAttribute===j.NONE?0:1;g=g.fill(H)}u.applyOffset=new L({componentDatatype:x.UNSIGNED_BYTE,componentsPerAttribute:1,values:g})}let p=m(e.numberOfVerticalLines,16);p=E.clamp(p,0,n/2);let a=D.createTypedArray(n,n*2+p*2);n/=2;let A=0,s;for(s=0;s<n;++s)a[A++]=s,a[A++]=(s+1)%n,a[A++]=s+n,a[A++]=(s+1)%n+n;let k;if(p>0){let g=Math.min(p,n);k=Math.round(n/g);let H=Math.min(k*p,n);for(s=0;s<H;s+=k)a[A++]=s,a[A++]=s+n}return{boundingSphere:h,attributes:u,indices:a}}function w(e){e=m(e,m.EMPTY_OBJECT);let t=e.center,i=m(e.ellipsoid,l.default),f=e.semiMajorAxis,o=e.semiMinorAxis,r=m(e.granularity,E.RADIANS_PER_DEGREE);if(!d(t))throw new _("center is required.");if(!d(f))throw new _("semiMajorAxis is required.");if(!d(o))throw new _("semiMinorAxis is required.");if(f<o)throw new _("semiMajorAxis must be greater than or equal to the semiMinorAxis.");if(r<=0)throw new _("granularity must be greater than zero.");let u=m(e.height,0),h=m(e.extrudedHeight,u);this._center=c.clone(t),this._semiMajorAxis=f,this._semiMinorAxis=o,this._ellipsoid=l.clone(i),this._rotation=m(e.rotation,0),this._height=Math.max(h,u),this._granularity=r,this._extrudedHeight=Math.min(h,u),this._numberOfVerticalLines=Math.max(m(e.numberOfVerticalLines,16),0),this._offsetAttribute=e.offsetAttribute,this._workerName="createEllipseOutlineGeometry"}w.packedLength=c.packedLength+l.packedLength+8;w.pack=function(e,t,i){if(!d(e))throw new _("value is required");if(!d(t))throw new _("array is required");return i=m(i,0),c.pack(e._center,t,i),i+=c.packedLength,l.pack(e._ellipsoid,t,i),i+=l.packedLength,t[i++]=e._semiMajorAxis,t[i++]=e._semiMinorAxis,t[i++]=e._rotation,t[i++]=e._height,t[i++]=e._granularity,t[i++]=e._extrudedHeight,t[i++]=e._numberOfVerticalLines,t[i]=m(e._offsetAttribute,-1),t};var y=new c,C=new l,b={center:y,ellipsoid:C,semiMajorAxis:void 0,semiMinorAxis:void 0,rotation:void 0,height:void 0,granularity:void 0,extrudedHeight:void 0,numberOfVerticalLines:void 0,offsetAttribute:void 0};w.unpack=function(e,t,i){if(!d(e))throw new _("array is required");t=m(t,0);let f=c.unpack(e,t,y);t+=c.packedLength;let o=l.unpack(e,t,C);t+=l.packedLength;let r=e[t++],u=e[t++],h=e[t++],n=e[t++],p=e[t++],a=e[t++],A=e[t++],s=e[t];return d(i)?(i._center=c.clone(f,i._center),i._ellipsoid=l.clone(o,i._ellipsoid),i._semiMajorAxis=r,i._semiMinorAxis=u,i._rotation=h,i._height=n,i._granularity=p,i._extrudedHeight=a,i._numberOfVerticalLines=A,i._offsetAttribute=s===-1?void 0:s,i):(b.height=n,b.extrudedHeight=a,b.granularity=p,b.rotation=h,b.semiMajorAxis=r,b.semiMinorAxis=u,b.numberOfVerticalLines=A,b.offsetAttribute=s===-1?void 0:s,new w(b))};w.createGeometry=function(e){if(e._semiMajorAxis<=0||e._semiMinorAxis<=0)return;let t=e._height,i=e._extrudedHeight,f=!E.equalsEpsilon(t,i,0,E.EPSILON2);e._center=e._ellipsoid.scaleToGeodeticSurface(e._center,e._center);let o={center:e._center,semiMajorAxis:e._semiMajorAxis,semiMinorAxis:e._semiMinorAxis,ellipsoid:e._ellipsoid,rotation:e._rotation,height:t,granularity:e._granularity,numberOfVerticalLines:e._numberOfVerticalLines},r;if(f)o.extrudedHeight=i,o.offsetAttribute=e._offsetAttribute,r=R(o);else if(r=U(o),d(e._offsetAttribute)){let u=r.attributes.position.values.length,h=e._offsetAttribute===j.NONE?0:1,n=new Uint8Array(u/3).fill(h);r.attributes.applyOffset=new L({componentDatatype:x.UNSIGNED_BYTE,componentsPerAttribute:1,values:n})}return new B({attributes:r.attributes,indices:r.indices,primitiveType:T.LINES,boundingSphere:r.boundingSphere,offsetAttribute:e._offsetAttribute})};var ie=w;export{ie as a};
