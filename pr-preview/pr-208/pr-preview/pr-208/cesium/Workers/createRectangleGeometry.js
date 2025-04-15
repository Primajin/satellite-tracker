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

import{a as W}from"./chunk-OZZFBEPK.js";import{a as Nt}from"./chunk-2TTZKDIP.js";import{a as zt}from"./chunk-HJB4AZ37.js";import"./chunk-NSW7N5NB.js";import"./chunk-56SXHQAK.js";import{a as ft}from"./chunk-FFURXUS3.js";import{a as q}from"./chunk-YPLJFYMF.js";import{b as yt}from"./chunk-XUAV2AYX.js";import"./chunk-FT22QKWD.js";import"./chunk-HGNPNJ5T.js";import"./chunk-ISZ7WW7L.js";import{a as At}from"./chunk-CF754CSJ.js";import{a as Vt}from"./chunk-CZ3TUBLX.js";import{b as Mt,c as Pt,d as Y}from"./chunk-L4Y3PGRA.js";import{d as at}from"./chunk-BHOMZQKL.js";import{f as Lt,h as E,i as bt}from"./chunk-O23FQWOY.js";import{a as U}from"./chunk-KGIGJVHC.js";import{a as w,b as mt,c as $,d as D,e as lt,f as St}from"./chunk-V3YO6LNK.js";import{a as I}from"./chunk-XAJAI4KM.js";import"./chunk-QJ75BJDL.js";import"./chunk-SAZKQEJR.js";import{a as Et,b as ct}from"./chunk-Y5QCE4LD.js";import{e as K}from"./chunk-V7XFDMXL.js";var Tt=new w,Bt=new w,Ut=new w,Yt=new w,qt=new E,Zt=new $,Kt=new at,$t=new at;function Xt(t,e){let n=new Pt({attributes:new Vt,primitiveType:Mt.TRIANGLES});return n.attributes.position=new Y({componentDatatype:U.DOUBLE,componentsPerAttribute:3,values:e.positions}),t.normal&&(n.attributes.normal=new Y({componentDatatype:U.FLOAT,componentsPerAttribute:3,values:e.normals})),t.tangent&&(n.attributes.tangent=new Y({componentDatatype:U.FLOAT,componentsPerAttribute:3,values:e.tangents})),t.bitangent&&(n.attributes.bitangent=new Y({componentDatatype:U.FLOAT,componentsPerAttribute:3,values:e.bitangents})),n}function Gt(t,e,n,r){let a=t.length,c=e.normal?new Float32Array(a):void 0,l=e.tangent?new Float32Array(a):void 0,u=e.bitangent?new Float32Array(a):void 0,p=0,d=Yt,o=Ut,i=Bt;if(e.normal||e.tangent||e.bitangent)for(let f=0;f<a;f+=3){let s=w.fromArray(t,f,Tt),h=p+1,g=p+2;i=n.geodeticSurfaceNormal(s,i),(e.tangent||e.bitangent)&&(w.cross(w.UNIT_Z,i,o),lt.multiplyByVector(r,o,o),w.normalize(o,o),e.bitangent&&w.normalize(w.cross(i,o,d),d)),e.normal&&(c[p]=i.x,c[h]=i.y,c[g]=i.z),e.tangent&&(l[p]=o.x,l[h]=o.y,l[g]=o.z),e.bitangent&&(u[p]=d.x,u[h]=d.y,u[g]=d.z),p+=3}return Xt(e,{positions:t,normals:c,tangents:l,bitangents:u})}var Ct=new w,jt=new w;function te(t,e,n){let r=t.length,a=e.normal?new Float32Array(r):void 0,c=e.tangent?new Float32Array(r):void 0,l=e.bitangent?new Float32Array(r):void 0,u=0,p=0,d=0,o=!0,i=Yt,f=Ut,s=Bt;if(e.normal||e.tangent||e.bitangent)for(let h=0;h<r;h+=6){let g=w.fromArray(t,h,Tt),A=w.fromArray(t,(h+6)%r,Ct);if(o){let b=w.fromArray(t,(h+3)%r,jt);w.subtract(A,g,A),w.subtract(b,g,b),s=w.normalize(w.cross(b,A,s),s),o=!1}w.equalsEpsilon(A,g,I.EPSILON10)&&(o=!0),(e.tangent||e.bitangent)&&(i=n.geodeticSurfaceNormal(g,i),e.tangent&&(f=w.normalize(w.cross(i,s,f),f))),e.normal&&(a[u++]=s.x,a[u++]=s.y,a[u++]=s.z,a[u++]=s.x,a[u++]=s.y,a[u++]=s.z),e.tangent&&(c[p++]=f.x,c[p++]=f.y,c[p++]=f.z,c[p++]=f.x,c[p++]=f.y,c[p++]=f.z),e.bitangent&&(l[d++]=i.x,l[d++]=i.y,l[d++]=i.z,l[d++]=i.x,l[d++]=i.y,l[d++]=i.z)}return Xt(e,{positions:t,normals:a,tangents:c,bitangents:l})}function It(t,e){let n=t._vertexFormat,r=t._ellipsoid,a=e.height,c=e.width,l=e.northCap,u=e.southCap,p=0,d=a,o=a,i=0;l&&(p=1,o-=1,i+=1),u&&(d-=1,o-=1,i+=1),i+=c*o;let f=n.position?new Float64Array(i*3):void 0,s=n.st?new Float32Array(i*2):void 0,h=0,g=0,A=Tt,b=Zt,V=Number.MAX_VALUE,z=Number.MAX_VALUE,X=-Number.MAX_VALUE,N=-Number.MAX_VALUE;for(let x=p;x<d;++x)for(let O=0;O<c;++O)W.computePosition(e,r,n.st,x,O,A,b),f[h++]=A.x,f[h++]=A.y,f[h++]=A.z,n.st&&(s[g++]=b.x,s[g++]=b.y,V=Math.min(V,b.x),z=Math.min(z,b.y),X=Math.max(X,b.x),N=Math.max(N,b.y));if(l&&(W.computePosition(e,r,n.st,0,0,A,b),f[h++]=A.x,f[h++]=A.y,f[h++]=A.z,n.st&&(s[g++]=b.x,s[g++]=b.y,V=b.x,z=b.y,X=b.x,N=b.y)),u&&(W.computePosition(e,r,n.st,a-1,0,A,b),f[h++]=A.x,f[h++]=A.y,f[h]=A.z,n.st&&(s[g++]=b.x,s[g]=b.y,V=Math.min(V,b.x),z=Math.min(z,b.y),X=Math.max(X,b.x),N=Math.max(N,b.y))),n.st&&(V<0||z<0||X>1||N>1))for(let x=0;x<s.length;x+=2)s[x]=(s[x]-V)/(X-V),s[x+1]=(s[x+1]-z)/(N-z);let m=Gt(f,n,r,e.tangentRotationMatrix),Z=6*(c-1)*(o-1);l&&(Z+=3*(c-1)),u&&(Z+=3*(c-1));let L=At.createTypedArray(i,Z),C=0,P=0,H;for(H=0;H<o-1;++H){for(let x=0;x<c-1;++x){let O=C,k=O+c,j=k+1,st=O+1;L[P++]=O,L[P++]=k,L[P++]=st,L[P++]=st,L[P++]=k,L[P++]=j,++C}++C}if(l||u){let x=i-1,O=i-1;l&&u&&(x=i-2);let k,j;if(C=0,l)for(H=0;H<c-1;H++)k=C,j=k+1,L[P++]=x,L[P++]=k,L[P++]=j,++C;if(u)for(C=(o-1)*c,H=0;H<c-1;H++)k=C,j=k+1,L[P++]=k,L[P++]=O,L[P++]=j,++C}return m.indices=L,n.st&&(m.attributes.st=new Y({componentDatatype:U.FLOAT,componentsPerAttribute:2,values:s})),m}function ut(t,e,n,r,a){return t[e++]=r[n],t[e++]=r[n+1],t[e++]=r[n+2],t[e++]=a[n],t[e++]=a[n+1],t[e]=a[n+2],t}function ht(t,e,n,r){return t[e++]=r[n],t[e++]=r[n+1],t[e++]=r[n],t[e]=r[n+1],t}var Dt=new q;function ee(t,e){let n=t._shadowVolume,r=t._offsetAttribute,a=t._vertexFormat,c=t._extrudedHeight,l=t._surfaceHeight,u=t._ellipsoid,p=e.height,d=e.width,o;if(n){let R=q.clone(a,Dt);R.normal=!0,t._vertexFormat=R}let i=It(t,e);n&&(t._vertexFormat=a);let f=yt.scaleToGeodeticHeight(i.attributes.position.values,l,u,!1);f=new Float64Array(f);let s=f.length,h=s*2,g=new Float64Array(h);g.set(f);let A=yt.scaleToGeodeticHeight(i.attributes.position.values,c,u);g.set(A,s),i.attributes.position.values=g;let b=a.normal?new Float32Array(h):void 0,V=a.tangent?new Float32Array(h):void 0,z=a.bitangent?new Float32Array(h):void 0,X=a.st?new Float32Array(h/3*2):void 0,N,m;if(a.normal){for(m=i.attributes.normal.values,b.set(m),o=0;o<s;o++)m[o]=-m[o];b.set(m,s),i.attributes.normal.values=b}if(n){m=i.attributes.normal.values,a.normal||(i.attributes.normal=void 0);let R=new Float32Array(h);for(o=0;o<s;o++)m[o]=-m[o];R.set(m,s),i.attributes.extrudeDirection=new Y({componentDatatype:U.FLOAT,componentsPerAttribute:3,values:R})}let Z,L=K(r);if(L){let R=s/3*2,it=new Uint8Array(R);r===ft.TOP?it=it.fill(1,0,R/2):(Z=r===ft.NONE?0:1,it=it.fill(Z)),i.attributes.applyOffset=new Y({componentDatatype:U.UNSIGNED_BYTE,componentsPerAttribute:1,values:it})}if(a.tangent){let R=i.attributes.tangent.values;for(V.set(R),o=0;o<s;o++)R[o]=-R[o];V.set(R,s),i.attributes.tangent.values=V}if(a.bitangent){let R=i.attributes.bitangent.values;z.set(R),z.set(R,s),i.attributes.bitangent.values=z}a.st&&(N=i.attributes.st.values,X.set(N),X.set(N,s/3*2),i.attributes.st.values=X);let C=i.indices,P=C.length,H=s/3,x=At.createTypedArray(h/3,P*2);for(x.set(C),o=0;o<P;o+=3)x[o+P]=C[o+2]+H,x[o+1+P]=C[o+1]+H,x[o+2+P]=C[o]+H;i.indices=x;let O=e.northCap,k=e.southCap,j=p,st=2,pt=0,Rt=4,xt=4;O&&(st-=1,j-=1,pt+=1,Rt-=2,xt-=1),k&&(st-=1,j-=1,pt+=1,Rt-=2,xt-=1),pt+=st*d+2*j-Rt;let dt=(pt+xt)*2,T=new Float64Array(dt*3),S=n?new Float32Array(dt*3):void 0,Q=L?new Uint8Array(dt):void 0,M=a.st?new Float32Array(dt*2):void 0,tt=r===ft.TOP;L&&!tt&&(Z=r===ft.ALL?1:0,Q=Q.fill(Z));let F=0,v=0,y=0,B=0,et=d*j,_;for(o=0;o<et;o+=d)_=o*3,T=ut(T,F,_,f,A),F+=6,a.st&&(M=ht(M,v,o*2,N),v+=4),n&&(y+=3,S[y++]=m[_],S[y++]=m[_+1],S[y++]=m[_+2]),tt&&(Q[B++]=1,B+=1);if(k){let R=O?et+1:et;for(_=R*3,o=0;o<2;o++)T=ut(T,F,_,f,A),F+=6,a.st&&(M=ht(M,v,R*2,N),v+=4),n&&(y+=3,S[y++]=m[_],S[y++]=m[_+1],S[y++]=m[_+2]),tt&&(Q[B++]=1,B+=1)}else for(o=et-d;o<et;o++)_=o*3,T=ut(T,F,_,f,A),F+=6,a.st&&(M=ht(M,v,o*2,N),v+=4),n&&(y+=3,S[y++]=m[_],S[y++]=m[_+1],S[y++]=m[_+2]),tt&&(Q[B++]=1,B+=1);for(o=et-1;o>0;o-=d)_=o*3,T=ut(T,F,_,f,A),F+=6,a.st&&(M=ht(M,v,o*2,N),v+=4),n&&(y+=3,S[y++]=m[_],S[y++]=m[_+1],S[y++]=m[_+2]),tt&&(Q[B++]=1,B+=1);if(O){let R=et;for(_=R*3,o=0;o<2;o++)T=ut(T,F,_,f,A),F+=6,a.st&&(M=ht(M,v,R*2,N),v+=4),n&&(y+=3,S[y++]=m[_],S[y++]=m[_+1],S[y++]=m[_+2]),tt&&(Q[B++]=1,B+=1)}else for(o=d-1;o>=0;o--)_=o*3,T=ut(T,F,_,f,A),F+=6,a.st&&(M=ht(M,v,o*2,N),v+=4),n&&(y+=3,S[y++]=m[_],S[y++]=m[_+1],S[y++]=m[_+2]),tt&&(Q[B++]=1,B+=1);let nt=te(T,a,u);a.st&&(nt.attributes.st=new Y({componentDatatype:U.FLOAT,componentsPerAttribute:2,values:M})),n&&(nt.attributes.extrudeDirection=new Y({componentDatatype:U.FLOAT,componentsPerAttribute:3,values:S})),L&&(nt.attributes.applyOffset=new Y({componentDatatype:U.UNSIGNED_BYTE,componentsPerAttribute:1,values:Q}));let ot=At.createTypedArray(dt,pt*6),gt,_t,kt,wt;s=T.length/3;let rt=0;for(o=0;o<s-1;o+=2){gt=o,wt=(gt+2)%s;let R=w.fromArray(T,gt*3,Ct),it=w.fromArray(T,wt*3,jt);w.equalsEpsilon(R,it,I.EPSILON10)||(_t=(gt+1)%s,kt=(_t+2)%s,ot[rt++]=gt,ot[rt++]=_t,ot[rt++]=wt,ot[rt++]=wt,ot[rt++]=_t,ot[rt++]=kt)}return nt.indices=ot,nt=zt.combineInstances([new Nt({geometry:i}),new Nt({geometry:nt})]),nt[0]}var ne=[new w,new w,new w,new w],Wt=new mt,oe=new mt;function Ht(t,e,n,r,a){if(n===0)return E.clone(t,a);let c=W.computeOptions(t,e,n,0,qt,Wt),l=c.height,u=c.width,p=ne;return W.computePosition(c,r,!1,0,0,p[0]),W.computePosition(c,r,!1,0,u-1,p[1]),W.computePosition(c,r,!1,l-1,0,p[2]),W.computePosition(c,r,!1,l-1,u-1,p[3]),E.fromCartesianArray(p,r,a)}function J(t){t=t??St.EMPTY_OBJECT;let e=t.rectangle;if(ct.typeOf.object("rectangle",e),E._validate(e),e.north<e.south)throw new Et("options.rectangle.north must be greater than or equal to options.rectangle.south");let n=t.height??0,r=t.extrudedHeight??n;this._rectangle=E.clone(e),this._granularity=t.granularity??I.RADIANS_PER_DEGREE,this._ellipsoid=D.clone(t.ellipsoid??D.default),this._surfaceHeight=Math.max(n,r),this._rotation=t.rotation??0,this._stRotation=t.stRotation??0,this._vertexFormat=q.clone(t.vertexFormat??q.DEFAULT),this._extrudedHeight=Math.min(n,r),this._shadowVolume=t.shadowVolume??!1,this._workerName="createRectangleGeometry",this._offsetAttribute=t.offsetAttribute,this._rotatedRectangle=void 0,this._textureCoordinateRotationPoints=void 0}J.packedLength=E.packedLength+D.packedLength+q.packedLength+7;J.pack=function(t,e,n){return ct.typeOf.object("value",t),ct.defined("array",e),n=n??0,E.pack(t._rectangle,e,n),n+=E.packedLength,D.pack(t._ellipsoid,e,n),n+=D.packedLength,q.pack(t._vertexFormat,e,n),n+=q.packedLength,e[n++]=t._granularity,e[n++]=t._surfaceHeight,e[n++]=t._rotation,e[n++]=t._stRotation,e[n++]=t._extrudedHeight,e[n++]=t._shadowVolume?1:0,e[n]=t._offsetAttribute??-1,e};var Jt=new E,Qt=D.clone(D.UNIT_SPHERE),G={rectangle:Jt,ellipsoid:Qt,vertexFormat:Dt,granularity:void 0,height:void 0,rotation:void 0,stRotation:void 0,extrudedHeight:void 0,shadowVolume:void 0,offsetAttribute:void 0};J.unpack=function(t,e,n){ct.defined("array",t),e=e??0;let r=E.unpack(t,e,Jt);e+=E.packedLength;let a=D.unpack(t,e,Qt);e+=D.packedLength;let c=q.unpack(t,e,Dt);e+=q.packedLength;let l=t[e++],u=t[e++],p=t[e++],d=t[e++],o=t[e++],i=t[e++]===1,f=t[e];return K(n)?(n._rectangle=E.clone(r,n._rectangle),n._ellipsoid=D.clone(a,n._ellipsoid),n._vertexFormat=q.clone(c,n._vertexFormat),n._granularity=l,n._surfaceHeight=u,n._rotation=p,n._stRotation=d,n._extrudedHeight=o,n._shadowVolume=i,n._offsetAttribute=f===-1?void 0:f,n):(G.granularity=l,G.height=u,G.rotation=p,G.stRotation=d,G.extrudedHeight=o,G.shadowVolume=i,G.offsetAttribute=f===-1?void 0:f,new J(G))};J.computeRectangle=function(t,e){t=t??St.EMPTY_OBJECT;let n=t.rectangle;if(ct.typeOf.object("rectangle",n),E._validate(n),n.north<n.south)throw new Et("options.rectangle.north must be greater than or equal to options.rectangle.south");let r=t.granularity??I.RADIANS_PER_DEGREE,a=t.ellipsoid??D.default,c=t.rotation??0;return Ht(n,r,c,a,e)};var ie=new lt,Ft=new Lt,ae=new mt;J.createGeometry=function(t){if(I.equalsEpsilon(t._rectangle.north,t._rectangle.south,I.EPSILON10)||I.equalsEpsilon(t._rectangle.east,t._rectangle.west,I.EPSILON10))return;let e=t._rectangle,n=t._ellipsoid,r=t._rotation,a=t._stRotation,c=t._vertexFormat,l=W.computeOptions(e,t._granularity,r,a,qt,Wt,oe),u=ie;if(a!==0||r!==0){let s=E.center(e,ae),h=n.geodeticSurfaceNormalCartographic(s,Ct);Lt.fromAxisAngle(h,-a,Ft),lt.fromQuaternion(Ft,u)}else lt.clone(lt.IDENTITY,u);let p=t._surfaceHeight,d=t._extrudedHeight,o=!I.equalsEpsilon(p,d,0,I.EPSILON2);l.lonScalar=1/t._rectangle.width,l.latScalar=1/t._rectangle.height,l.tangentRotationMatrix=u;let i,f;if(e=t._rectangle,o){i=ee(t,l);let s=at.fromRectangle3D(e,n,p,$t),h=at.fromRectangle3D(e,n,d,Kt);f=at.union(s,h)}else{if(i=It(t,l),i.attributes.position.values=yt.scaleToGeodeticHeight(i.attributes.position.values,p,n,!1),K(t._offsetAttribute)){let s=i.attributes.position.values.length,h=t._offsetAttribute===ft.NONE?0:1,g=new Uint8Array(s/3).fill(h);i.attributes.applyOffset=new Y({componentDatatype:U.UNSIGNED_BYTE,componentsPerAttribute:1,values:g})}f=at.fromRectangle3D(e,n,p)}return c.position||delete i.attributes.position,new Pt({attributes:i.attributes,indices:i.indices,primitiveType:i.primitiveType,boundingSphere:f,offsetAttribute:t._offsetAttribute})};J.createShadowVolume=function(t,e,n){let r=t._granularity,a=t._ellipsoid,c=e(r,a),l=n(r,a);return new J({rectangle:t._rectangle,rotation:t._rotation,ellipsoid:a,stRotation:t._stRotation,granularity:r,extrudedHeight:l,height:c,vertexFormat:q.POSITION_ONLY,shadowVolume:!0})};var vt=new E,se=[new $,new $,new $],re=new bt,ce=new mt;function le(t){if(t._stRotation===0)return[0,0,0,1,1,0];let e=E.clone(t._rectangle,vt),n=t._granularity,r=t._ellipsoid,a=t._rotation-t._stRotation,c=Ht(e,n,a,r,vt),l=se;l[0].x=c.west,l[0].y=c.south,l[1].x=c.west,l[1].y=c.north,l[2].x=c.east,l[2].y=c.south;let u=t.rectangle,p=bt.fromRotation(t._stRotation,re),d=E.center(u,ce);for(let h=0;h<3;++h){let g=l[h];g.x-=d.longitude,g.y-=d.latitude,bt.multiplyByVector(p,g,g),g.x+=d.longitude,g.y+=d.latitude,g.x=(g.x-u.west)/u.width,g.y=(g.y-u.south)/u.height}let o=l[0],i=l[1],f=l[2],s=new Array(6);return $.pack(o,s),$.pack(i,s,2),$.pack(f,s,4),s}Object.defineProperties(J.prototype,{rectangle:{get:function(){return K(this._rotatedRectangle)||(this._rotatedRectangle=Ht(this._rectangle,this._granularity,this._rotation,this._ellipsoid)),this._rotatedRectangle}},textureCoordinateRotationPoints:{get:function(){return K(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=le(this)),this._textureCoordinateRotationPoints}}});var Ot=J;function fe(t,e){return K(e)&&(t=Ot.unpack(t,e)),t._ellipsoid=D.clone(t._ellipsoid),t._rectangle=E.clone(t._rectangle),Ot.createGeometry(t)}var Ye=fe;export{Ye as default};
