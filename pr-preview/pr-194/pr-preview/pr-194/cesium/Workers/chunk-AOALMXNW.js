/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.127
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

import{a as et}from"./chunk-CXNPIJLB.js";import{a as jt}from"./chunk-APUOR5ZJ.js";import{b as Lt}from"./chunk-V3DSE3OK.js";import{a as Et}from"./chunk-FMRIJYNG.js";import{a as j}from"./chunk-NNHN6WUY.js";import{a as mt,b as D,c as B,d as U}from"./chunk-GSNDLQ4C.js";import{a as _t,b as Ut,d as rt}from"./chunk-BKSIEBAA.js";import{a as dt,b as H}from"./chunk-YWRPWWKI.js";import{a as k}from"./chunk-VTVHUB7E.js";import{a as r,b as Mt,c as R,e as Ot}from"./chunk-JMSSU44E.js";import{a as N}from"./chunk-4UYSGV57.js";import{a as K}from"./chunk-VLPNAR64.js";import{a as I,b as pt}from"./chunk-GE5NEIZC.js";import{e as f}from"./chunk-35CVRQTC.js";var Yt=new r,Zt=new r,Xt=new r;function pe(t,e,n,s,i){pt.defined("point",t),pt.defined("p0",e),pt.defined("p1",n),pt.defined("p2",s),f(i)||(i=new r);let c,o,a,p,u,d,m,l;if(f(e.z)){if(r.equalsEpsilon(t,e,N.EPSILON14))return r.clone(r.UNIT_X,i);if(r.equalsEpsilon(t,n,N.EPSILON14))return r.clone(r.UNIT_Y,i);if(r.equalsEpsilon(t,s,N.EPSILON14))return r.clone(r.UNIT_Z,i);c=r.subtract(n,e,Yt),o=r.subtract(s,e,Zt),a=r.subtract(t,e,Xt),p=r.dot(c,c),u=r.dot(c,o),d=r.dot(c,a),m=r.dot(o,o),l=r.dot(o,a)}else{if(R.equalsEpsilon(t,e,N.EPSILON14))return r.clone(r.UNIT_X,i);if(R.equalsEpsilon(t,n,N.EPSILON14))return r.clone(r.UNIT_Y,i);if(R.equalsEpsilon(t,s,N.EPSILON14))return r.clone(r.UNIT_Z,i);c=R.subtract(n,e,Yt),o=R.subtract(s,e,Zt),a=R.subtract(t,e,Xt),p=R.dot(c,c),u=R.dot(c,o),d=R.dot(c,a),m=R.dot(o,o),l=R.dot(o,a)}i.y=m*d-u*l,i.z=p*l-u*d;let h=p*m-u*u;if(h!==0)return i.y/=h,i.z/=h,i.x=1-i.y-i.z,i}var Ht=pe;var Nt={};Nt.calculateACMR=function(t){t=K(t,K.EMPTY_OBJECT);let e=t.indices,n=t.maximumIndex,s=K(t.cacheSize,24);if(!f(e))throw new I("indices is required.");let i=e.length;if(i<3||i%3!==0)throw new I("indices length must be a multiple of three.");if(n<=0)throw new I("maximumIndex must be greater than zero.");if(s<3)throw new I("cacheSize must be greater than two.");if(!f(n)){n=0;let a=0,p=e[a];for(;a<i;)p>n&&(n=p),++a,p=e[a]}let c=[];for(let a=0;a<n+1;a++)c[a]=0;let o=s+1;for(let a=0;a<i;++a)o-c[e[a]]>s&&(c[e[a]]=o,++o);return(o-s+1)/(i/3)};Nt.tipsify=function(t){t=K(t,K.EMPTY_OBJECT);let e=t.indices,n=t.maximumIndex,s=K(t.cacheSize,24),i;function c(C,z,q,V){for(;z.length>=1;){let G=z[z.length-1];if(z.splice(z.length-1,1),C[G].numLiveTriangles>0)return G}for(;i<V;){if(C[i].numLiveTriangles>0)return++i,i-1;++i}return-1}function o(C,z,q,V,G,M,J){let Y=-1,_,Pt=-1,gt=0;for(;gt<q.length;){let ft=q[gt];V[ft].numLiveTriangles&&(_=0,G-V[ft].timeStamp+2*V[ft].numLiveTriangles<=z&&(_=G-V[ft].timeStamp),(_>Pt||Pt===-1)&&(Pt=_,Y=ft)),++gt}return Y===-1?c(V,M,C,J):Y}if(!f(e))throw new I("indices is required.");let a=e.length;if(a<3||a%3!==0)throw new I("indices length must be a multiple of three.");if(n<=0)throw new I("maximumIndex must be greater than zero.");if(s<3)throw new I("cacheSize must be greater than two.");let p=0,u=0,d=e[u],m=a;if(f(n))p=n+1;else{for(;u<m;)d>p&&(p=d),++u,d=e[u];if(p===-1)return 0;++p}let l=[],h;for(h=0;h<p;h++)l[h]={numLiveTriangles:0,timeStamp:0,vertexTriangles:[]};u=0;let y=0;for(;u<m;)l[e[u]].vertexTriangles.push(y),++l[e[u]].numLiveTriangles,l[e[u+1]].vertexTriangles.push(y),++l[e[u+1]].numLiveTriangles,l[e[u+2]].vertexTriangles.push(y),++l[e[u+2]].numLiveTriangles,++y,u+=3;let v=0,b=s+1;i=1;let S=[],x=[],w,A,E=0,P=[],O=a/3,L=[];for(h=0;h<O;h++)L[h]=!1;let g,T;for(;v!==-1;){S=[],A=l[v],T=A.vertexTriangles.length;for(let C=0;C<T;++C)if(y=A.vertexTriangles[C],!L[y]){L[y]=!0,u=y+y+y;for(let z=0;z<3;++z)g=e[u],S.push(g),x.push(g),P[E]=g,++E,w=l[g],--w.numLiveTriangles,b-w.timeStamp>s&&(w.timeStamp=b,++b),++u}v=o(e,s,S,l,b,x,p)}return P};var Wt=Nt;var F={};function St(t,e,n,s,i){t[e++]=n,t[e++]=s,t[e++]=s,t[e++]=i,t[e++]=i,t[e]=n}function de(t){let e=t.length,n=e/3*6,s=j.createTypedArray(e,n),i=0;for(let c=0;c<e;c+=3,i+=6)St(s,i,t[c],t[c+1],t[c+2]);return s}function me(t){let e=t.length;if(e>=3){let n=(e-2)*6,s=j.createTypedArray(e,n);St(s,0,t[0],t[1],t[2]);let i=6;for(let c=3;c<e;++c,i+=6)St(s,i,t[c-1],t[c],t[c-2]);return s}return new Uint16Array}function he(t){if(t.length>0){let e=t.length-1,n=(e-1)*6,s=j.createTypedArray(e,n),i=t[0],c=0;for(let o=1;o<e;++o,c+=6)St(s,c,i,t[o],t[o+1]);return s}return new Uint16Array}F.toWireframe=function(t){if(!f(t))throw new I("geometry is required.");let e=t.indices;if(f(e)){switch(t.primitiveType){case D.TRIANGLES:t.indices=de(e);break;case D.TRIANGLE_STRIP:t.indices=me(e);break;case D.TRIANGLE_FAN:t.indices=he(e);break;default:throw new I("geometry.primitiveType must be TRIANGLES, TRIANGLE_STRIP, or TRIANGLE_FAN.")}t.primitiveType=D.LINES}return t};F.createLineSegmentsForVectors=function(t,e,n){if(e=K(e,"normal"),!f(t))throw new I("geometry is required.");if(!f(t.attributes.position))throw new I("geometry.attributes.position is required.");if(!f(t.attributes[e]))throw new I(`geometry.attributes must have an attribute with the same name as the attributeName parameter, ${e}.`);n=K(n,1e4);let s=t.attributes.position.values,i=t.attributes[e].values,c=s.length,o=new Float64Array(2*c),a=0;for(let d=0;d<c;d+=3)o[a++]=s[d],o[a++]=s[d+1],o[a++]=s[d+2],o[a++]=s[d]+i[d]*n,o[a++]=s[d+1]+i[d+1]*n,o[a++]=s[d+2]+i[d+2]*n;let p,u=t.boundingSphere;return f(u)&&(p=new rt(u.center,u.radius+n)),new B({attributes:{position:new U({componentDatatype:k.DOUBLE,componentsPerAttribute:3,values:o})},primitiveType:D.LINES,boundingSphere:p})};F.createAttributeLocations=function(t){if(!f(t))throw new I("geometry is required.");let e=["position","positionHigh","positionLow","position3DHigh","position3DLow","position2DHigh","position2DLow","pickColor","normal","st","tangent","bitangent","extrudeDirection","compressedAttributes"],n=t.attributes,s={},i=0,c,o=e.length;for(c=0;c<o;++c){let a=e[c];f(n[a])&&(s[a]=i++)}for(let a in n)n.hasOwnProperty(a)&&!f(s[a])&&(s[a]=i++);return s};F.reorderForPreVertexCache=function(t){if(!f(t))throw new I("geometry is required.");let e=B.computeNumberOfVertices(t),n=t.indices;if(f(n)){let s=new Int32Array(e);for(let l=0;l<e;l++)s[l]=-1;let i=n,c=i.length,o=j.createTypedArray(e,c),a=0,p=0,u=0,d;for(;a<c;)d=s[i[a]],d!==-1?o[p]=d:(d=i[a],s[d]=u,o[p]=u,++u),++a,++p;t.indices=o;let m=t.attributes;for(let l in m)if(m.hasOwnProperty(l)&&f(m[l])&&f(m[l].values)){let h=m[l],y=h.values,v=0,b=h.componentsPerAttribute,S=k.createTypedArray(h.componentDatatype,u*b);for(;v<e;){let x=s[v];if(x!==-1)for(let w=0;w<b;w++)S[b*x+w]=y[b*v+w];++v}h.values=S}}return t};F.reorderForPostVertexCache=function(t,e){if(!f(t))throw new I("geometry is required.");let n=t.indices;if(t.primitiveType===D.TRIANGLES&&f(n)){let s=n.length,i=0;for(let c=0;c<s;c++)n[c]>i&&(i=n[c]);t.indices=Wt.tipsify({indices:n,maximumIndex:i,cacheSize:e})}return t};function $t(t){let e={};for(let n in t)if(t.hasOwnProperty(n)&&f(t[n])&&f(t[n].values)){let s=t[n];e[n]=new U({componentDatatype:s.componentDatatype,componentsPerAttribute:s.componentsPerAttribute,normalize:s.normalize,values:[]})}return e}function be(t,e,n){for(let s in e)if(e.hasOwnProperty(s)&&f(e[s])&&f(e[s].values)){let i=e[s];for(let c=0;c<i.componentsPerAttribute;++c)t[s].values.push(i.values[n*i.componentsPerAttribute+c])}}F.fitToUnsignedShortIndices=function(t){if(!f(t))throw new I("geometry is required.");if(f(t.indices)&&t.primitiveType!==D.TRIANGLES&&t.primitiveType!==D.LINES&&t.primitiveType!==D.POINTS)throw new I("geometry.primitiveType must equal to PrimitiveType.TRIANGLES, PrimitiveType.LINES, or PrimitiveType.POINTS.");let e=[],n=B.computeNumberOfVertices(t);if(f(t.indices)&&n>=N.SIXTY_FOUR_KILOBYTES){let s=[],i=[],c=0,o=$t(t.attributes),a=t.indices,p=a.length,u;t.primitiveType===D.TRIANGLES?u=3:t.primitiveType===D.LINES?u=2:t.primitiveType===D.POINTS&&(u=1);for(let d=0;d<p;d+=u){for(let m=0;m<u;++m){let l=a[d+m],h=s[l];f(h)||(h=c++,s[l]=h,be(o,t.attributes,l)),i.push(h)}c+u>=N.SIXTY_FOUR_KILOBYTES&&(e.push(new B({attributes:o,indices:i,primitiveType:t.primitiveType,boundingSphere:t.boundingSphere,boundingSphereCV:t.boundingSphereCV})),s=[],i=[],c=0,o=$t(t.attributes))}i.length!==0&&e.push(new B({attributes:o,indices:i,primitiveType:t.primitiveType,boundingSphere:t.boundingSphere,boundingSphereCV:t.boundingSphereCV}))}else e.push(t);return e};var Jt=new r,we=new Mt;F.projectTo2D=function(t,e,n,s,i){if(!f(t))throw new I("geometry is required.");if(!f(e))throw new I("attributeName is required.");if(!f(n))throw new I("attributeName3D is required.");if(!f(s))throw new I("attributeName2D is required.");if(!f(t.attributes[e]))throw new I(`geometry must have attribute matching the attributeName argument: ${e}.`);if(t.attributes[e].componentDatatype!==k.DOUBLE)throw new I("The attribute componentDatatype must be ComponentDatatype.DOUBLE.");let c=t.attributes[e];i=f(i)?i:new _t;let o=i.ellipsoid,a=c.values,p=new Float64Array(a.length),u=0;for(let d=0;d<a.length;d+=3){let m=r.fromArray(a,d,Jt),l=o.cartesianToCartographic(m,we);if(!f(l))throw new I(`Could not project point (${m.x}, ${m.y}, ${m.z}) to 2D.`);let h=i.project(l,Jt);p[u++]=h.x,p[u++]=h.y,p[u++]=h.z}return t.attributes[n]=c,t.attributes[s]=new U({componentDatatype:k.DOUBLE,componentsPerAttribute:3,values:p}),delete t.attributes[e],t};var zt={high:0,low:0};F.encodeAttribute=function(t,e,n,s){if(!f(t))throw new I("geometry is required.");if(!f(e))throw new I("attributeName is required.");if(!f(n))throw new I("attributeHighName is required.");if(!f(s))throw new I("attributeLowName is required.");if(!f(t.attributes[e]))throw new I(`geometry must have attribute matching the attributeName argument: ${e}.`);if(t.attributes[e].componentDatatype!==k.DOUBLE)throw new I("The attribute componentDatatype must be ComponentDatatype.DOUBLE.");let i=t.attributes[e],c=i.values,o=c.length,a=new Float32Array(o),p=new Float32Array(o);for(let d=0;d<o;++d)jt.encode(c[d],zt),a[d]=zt.high,p[d]=zt.low;let u=i.componentsPerAttribute;return t.attributes[n]=new U({componentDatatype:k.FLOAT,componentsPerAttribute:u,values:a}),t.attributes[s]=new U({componentDatatype:k.FLOAT,componentsPerAttribute:u,values:p}),delete t.attributes[e],t};var $=new r;function Dt(t,e){if(f(e)){let n=e.values,s=n.length;for(let i=0;i<s;i+=3)r.unpack(n,i,$),H.multiplyByPoint(t,$,$),r.pack($,n,i)}}function qt(t,e){if(f(e)){let n=e.values,s=n.length;for(let i=0;i<s;i+=3)r.unpack(n,i,$),Ot.multiplyByVector(t,$,$),$=r.normalize($,$),r.pack($,n,i)}}var vt=new H,yt=new Ot;F.transformToWorldCoordinates=function(t){if(!f(t))throw new I("instance is required.");let e=t.modelMatrix;if(H.equals(e,H.IDENTITY))return t;let n=t.geometry.attributes;Dt(e,n.position),Dt(e,n.prevPosition),Dt(e,n.nextPosition),(f(n.normal)||f(n.tangent)||f(n.bitangent))&&(H.inverse(e,vt),H.transpose(vt,vt),H.getMatrix3(vt,yt),qt(yt,n.normal),qt(yt,n.tangent),qt(yt,n.bitangent));let s=t.geometry.boundingSphere;return f(s)&&(t.geometry.boundingSphere=rt.transform(s,e,s)),t.modelMatrix=H.clone(H.IDENTITY),t};function ve(t,e){let n=t.length,s={},i=t[0][e].attributes,c;for(c in i)if(i.hasOwnProperty(c)&&f(i[c])&&f(i[c].values)){let o=i[c],a=o.values.length,p=!0;for(let u=1;u<n;++u){let d=t[u][e].attributes[c];if(!f(d)||o.componentDatatype!==d.componentDatatype||o.componentsPerAttribute!==d.componentsPerAttribute||o.normalize!==d.normalize){p=!1;break}a+=d.values.length}p&&(s[c]=new U({componentDatatype:o.componentDatatype,componentsPerAttribute:o.componentsPerAttribute,normalize:o.normalize,values:k.createTypedArray(o.componentDatatype,a)}))}return s}var ye=new r;function Vt(t,e){let n=t.length,s,i,c,o,a=t[0].modelMatrix,p=f(t[0][e].indices),u=t[0][e].primitiveType;for(i=1;i<n;++i){if(!H.equals(t[i].modelMatrix,a))throw new I("All instances must have the same modelMatrix.");if(f(t[i][e].indices)!==p)throw new I("All instance geometries must have an indices or not have one.");if(t[i][e].primitiveType!==u)throw new I("All instance geometries must have the same primitiveType.")}let d=ve(t,e),m,l,h;for(s in d)if(d.hasOwnProperty(s))for(m=d[s].values,o=0,i=0;i<n;++i)for(l=t[i][e].attributes[s].values,h=l.length,c=0;c<h;++c)m[o++]=l[c];let y;if(p){let x=0;for(i=0;i<n;++i)x+=t[i][e].indices.length;let w=B.computeNumberOfVertices(new B({attributes:d,primitiveType:D.POINTS})),A=j.createTypedArray(w,x),E=0,P=0;for(i=0;i<n;++i){let O=t[i][e].indices,L=O.length;for(o=0;o<L;++o)A[E++]=P+O[o];P+=B.computeNumberOfVertices(t[i][e])}y=A}let v=new r,b=0,S;for(i=0;i<n;++i){if(S=t[i][e].boundingSphere,!f(S)){v=void 0;break}r.add(S.center,v,v)}if(f(v))for(r.divideByScalar(v,n,v),i=0;i<n;++i){S=t[i][e].boundingSphere;let x=r.magnitude(r.subtract(S.center,v,ye))+S.radius;x>b&&(b=x)}return new B({attributes:d,indices:y,primitiveType:u,boundingSphere:f(v)?new rt(v,b):void 0})}F.combineInstances=function(t){if(!f(t)||t.length<1)throw new I("instances is required and must have length greater than zero.");let e=[],n=[],s=t.length;for(let c=0;c<s;++c){let o=t[c];f(o.geometry)?e.push(o):f(o.westHemisphereGeometry)&&f(o.eastHemisphereGeometry)&&n.push(o)}let i=[];return e.length>0&&i.push(Vt(e,"geometry")),n.length>0&&(i.push(Vt(n,"westHemisphereGeometry")),i.push(Vt(n,"eastHemisphereGeometry"))),i};var Z=new r,ht=new r,ct=new r,at=new r;F.computeNormal=function(t){if(!f(t))throw new I("geometry is required.");if(!f(t.attributes.position)||!f(t.attributes.position.values))throw new I("geometry.attributes.position.values is required.");if(!f(t.indices))throw new I("geometry.indices is required.");if(t.indices.length<2||t.indices.length%3!==0)throw new I("geometry.indices length must be greater than 0 and be a multiple of 3.");if(t.primitiveType!==D.TRIANGLES)throw new I("geometry.primitiveType must be PrimitiveType.TRIANGLES.");let e=t.indices,n=t.attributes,s=n.position.values,i=n.position.values.length/3,c=e.length,o=new Array(i),a=new Array(c/3),p=new Array(c),u;for(u=0;u<i;u++)o[u]={indexOffset:0,count:0,currentCount:0};let d=0;for(u=0;u<c;u+=3){let y=e[u],v=e[u+1],b=e[u+2],S=y*3,x=v*3,w=b*3;ht.x=s[S],ht.y=s[S+1],ht.z=s[S+2],ct.x=s[x],ct.y=s[x+1],ct.z=s[x+2],at.x=s[w],at.y=s[w+1],at.z=s[w+2],o[y].count++,o[v].count++,o[b].count++,r.subtract(ct,ht,ct),r.subtract(at,ht,at),a[d]=r.cross(ct,at,new r),d++}let m=0;for(u=0;u<i;u++)o[u].indexOffset+=m,m+=o[u].count;d=0;let l;for(u=0;u<c;u+=3){l=o[e[u]];let y=l.indexOffset+l.currentCount;p[y]=d,l.currentCount++,l=o[e[u+1]],y=l.indexOffset+l.currentCount,p[y]=d,l.currentCount++,l=o[e[u+2]],y=l.indexOffset+l.currentCount,p[y]=d,l.currentCount++,d++}let h=new Float32Array(i*3);for(u=0;u<i;u++){let y=u*3;if(l=o[u],r.clone(r.ZERO,Z),l.count>0){for(d=0;d<l.count;d++)r.add(Z,a[p[l.indexOffset+d]],Z);r.equalsEpsilon(r.ZERO,Z,N.EPSILON10)&&r.clone(a[p[l.indexOffset]],Z)}r.equalsEpsilon(r.ZERO,Z,N.EPSILON10)&&(Z.z=1),r.normalize(Z,Z),h[y]=Z.x,h[y+1]=Z.y,h[y+2]=Z.z}return t.attributes.normal=new U({componentDatatype:k.FLOAT,componentsPerAttribute:3,values:h}),t};var xe=new r,Kt=new r,Te=new r;F.computeTangentAndBitangent=function(t){if(!f(t))throw new I("geometry is required.");let e=t.attributes,n=t.indices;if(!f(e.position)||!f(e.position.values))throw new I("geometry.attributes.position.values is required.");if(!f(e.normal)||!f(e.normal.values))throw new I("geometry.attributes.normal.values is required.");if(!f(e.st)||!f(e.st.values))throw new I("geometry.attributes.st.values is required.");if(!f(n))throw new I("geometry.indices is required.");if(n.length<2||n.length%3!==0)throw new I("geometry.indices length must be greater than 0 and be a multiple of 3.");if(t.primitiveType!==D.TRIANGLES)throw new I("geometry.primitiveType must be PrimitiveType.TRIANGLES.");let s=t.attributes.position.values,i=t.attributes.normal.values,c=t.attributes.st.values,o=t.attributes.position.values.length/3,a=n.length,p=new Array(o*3),u;for(u=0;u<p.length;u++)p[u]=0;let d,m,l;for(u=0;u<a;u+=3){let v=n[u],b=n[u+1],S=n[u+2];d=v*3,m=b*3,l=S*3;let x=v*2,w=b*2,A=S*2,E=s[d],P=s[d+1],O=s[d+2],L=c[x],g=c[x+1],T=c[w+1]-g,C=c[A+1]-g,z=1/((c[w]-L)*C-(c[A]-L)*T),q=(C*(s[m]-E)-T*(s[l]-E))*z,V=(C*(s[m+1]-P)-T*(s[l+1]-P))*z,G=(C*(s[m+2]-O)-T*(s[l+2]-O))*z;p[d]+=q,p[d+1]+=V,p[d+2]+=G,p[m]+=q,p[m+1]+=V,p[m+2]+=G,p[l]+=q,p[l+1]+=V,p[l+2]+=G}let h=new Float32Array(o*3),y=new Float32Array(o*3);for(u=0;u<o;u++){d=u*3,m=d+1,l=d+2;let v=r.fromArray(i,d,xe),b=r.fromArray(p,d,Te),S=r.dot(v,b);r.multiplyByScalar(v,S,Kt),r.normalize(r.subtract(b,Kt,b),b),h[d]=b.x,h[m]=b.y,h[l]=b.z,r.normalize(r.cross(v,b,b),b),y[d]=b.x,y[m]=b.y,y[l]=b.z}return t.attributes.tangent=new U({componentDatatype:k.FLOAT,componentsPerAttribute:3,values:h}),t.attributes.bitangent=new U({componentDatatype:k.FLOAT,componentsPerAttribute:3,values:y}),t};var bt=new R,W=new r,Qt=new r,te=new r,xt=new R;F.compressVertices=function(t){if(!f(t))throw new I("geometry is required.");let e=t.attributes.extrudeDirection,n,s;if(f(e)){let P=e.values;s=P.length/3;let O=new Float32Array(s*2),L=0;for(n=0;n<s;++n){if(r.fromArray(P,n*3,W),r.equals(W,r.ZERO)){L+=2;continue}xt=et.octEncodeInRange(W,65535,xt),O[L++]=xt.x,O[L++]=xt.y}return t.attributes.compressedAttributes=new U({componentDatatype:k.FLOAT,componentsPerAttribute:2,values:O}),delete t.attributes.extrudeDirection,t}let i=t.attributes.normal,c=t.attributes.st,o=f(i),a=f(c);if(!o&&!a)return t;let p=t.attributes.tangent,u=t.attributes.bitangent,d=f(p),m=f(u),l,h,y,v;o&&(l=i.values),a&&(h=c.values),d&&(y=p.values),m&&(v=u.values),s=(o?l.length:h.length)/(o?3:2);let x=s,w=a&&o?2:1;w+=d||m?1:0,x*=w;let A=new Float32Array(x),E=0;for(n=0;n<s;++n){a&&(R.fromArray(h,n*2,bt),A[E++]=et.compressTextureCoordinates(bt));let P=n*3;o&&f(y)&&f(v)?(r.fromArray(l,P,W),r.fromArray(y,P,Qt),r.fromArray(v,P,te),et.octPack(W,Qt,te,bt),A[E++]=bt.x,A[E++]=bt.y):(o&&(r.fromArray(l,P,W),A[E++]=et.octEncodeFloat(W)),d&&(r.fromArray(y,P,W),A[E++]=et.octEncodeFloat(W)),m&&(r.fromArray(v,P,W),A[E++]=et.octEncodeFloat(W)))}return t.attributes.compressedAttributes=new U({componentDatatype:k.FLOAT,componentsPerAttribute:w,values:A}),o&&delete t.attributes.normal,a&&delete t.attributes.st,m&&delete t.attributes.bitangent,d&&delete t.attributes.tangent,t};function Ae(t){if(f(t.indices))return t;let e=B.computeNumberOfVertices(t);if(e<3)throw new I("The number of vertices must be at least three.");if(e%3!==0)throw new I("The number of vertices must be a multiple of three.");let n=j.createTypedArray(e,e);for(let s=0;s<e;++s)n[s]=s;return t.indices=n,t}function Ie(t){let e=B.computeNumberOfVertices(t);if(e<3)throw new I("The number of vertices must be at least three.");let n=j.createTypedArray(e,(e-2)*3);n[0]=1,n[1]=0,n[2]=2;let s=3;for(let i=3;i<e;++i)n[s++]=i-1,n[s++]=0,n[s++]=i;return t.indices=n,t.primitiveType=D.TRIANGLES,t}function Se(t){let e=B.computeNumberOfVertices(t);if(e<3)throw new I("The number of vertices must be at least 3.");let n=j.createTypedArray(e,(e-2)*3);n[0]=0,n[1]=1,n[2]=2,e>3&&(n[3]=0,n[4]=2,n[5]=3);let s=6;for(let i=3;i<e-1;i+=2)n[s++]=i,n[s++]=i-1,n[s++]=i+1,i+2<e&&(n[s++]=i,n[s++]=i+1,n[s++]=i+2);return t.indices=n,t.primitiveType=D.TRIANGLES,t}function Pe(t){if(f(t.indices))return t;let e=B.computeNumberOfVertices(t);if(e<2)throw new I("The number of vertices must be at least two.");if(e%2!==0)throw new I("The number of vertices must be a multiple of 2.");let n=j.createTypedArray(e,e);for(let s=0;s<e;++s)n[s]=s;return t.indices=n,t}function ge(t){let e=B.computeNumberOfVertices(t);if(e<2)throw new I("The number of vertices must be at least two.");let n=j.createTypedArray(e,(e-1)*2);n[0]=0,n[1]=1;let s=2;for(let i=2;i<e;++i)n[s++]=i-1,n[s++]=i;return t.indices=n,t.primitiveType=D.LINES,t}function Oe(t){let e=B.computeNumberOfVertices(t);if(e<2)throw new I("The number of vertices must be at least two.");let n=j.createTypedArray(e,e*2);n[0]=0,n[1]=1;let s=2;for(let i=2;i<e;++i)n[s++]=i-1,n[s++]=i;return n[s++]=e-1,n[s]=0,t.indices=n,t.primitiveType=D.LINES,t}function Le(t){switch(t.primitiveType){case D.TRIANGLE_FAN:return Ie(t);case D.TRIANGLE_STRIP:return Se(t);case D.TRIANGLES:return Ae(t);case D.LINE_STRIP:return ge(t);case D.LINE_LOOP:return Oe(t);case D.LINES:return Pe(t)}return t}function tt(t,e){Math.abs(t.y)<N.EPSILON6&&(e?t.y=-N.EPSILON6:t.y=N.EPSILON6)}function Ee(t,e,n){if(t.y!==0&&e.y!==0&&n.y!==0){tt(t,t.y<0),tt(e,e.y<0),tt(n,n.y<0);return}let s=Math.abs(t.y),i=Math.abs(e.y),c=Math.abs(n.y),o;s>i?s>c?o=N.sign(t.y):o=N.sign(n.y):i>c?o=N.sign(e.y):o=N.sign(n.y);let a=o<0;tt(t,a),tt(e,a),tt(n,a)}var ee=new r;function X(t,e,n,s){r.add(t,r.multiplyByScalar(r.subtract(e,t,ee),t.y/(t.y-e.y),ee),n),r.clone(n,s),tt(n,!0),tt(s,!1)}var nt=new r,it=new r,st=new r,ot=new r,Rt={positions:new Array(7),indices:new Array(3*3)};function Ne(t,e,n){if(t.x>=0||e.x>=0||n.x>=0)return;Ee(t,e,n);let s=t.y<0,i=e.y<0,c=n.y<0,o=0;o+=s?1:0,o+=i?1:0,o+=c?1:0;let a=Rt.indices;o===1?(a[1]=3,a[2]=4,a[5]=6,a[7]=6,a[8]=5,s?(X(t,e,nt,st),X(t,n,it,ot),a[0]=0,a[3]=1,a[4]=2,a[6]=1):i?(X(e,n,nt,st),X(e,t,it,ot),a[0]=1,a[3]=2,a[4]=0,a[6]=2):c&&(X(n,t,nt,st),X(n,e,it,ot),a[0]=2,a[3]=0,a[4]=1,a[6]=0)):o===2&&(a[2]=4,a[4]=4,a[5]=3,a[7]=5,a[8]=6,s?i?c||(X(n,t,nt,st),X(n,e,it,ot),a[0]=0,a[1]=1,a[3]=0,a[6]=2):(X(e,n,nt,st),X(e,t,it,ot),a[0]=2,a[1]=0,a[3]=2,a[6]=1):(X(t,e,nt,st),X(t,n,it,ot),a[0]=1,a[1]=2,a[3]=1,a[6]=0));let p=Rt.positions;return p[0]=t,p[1]=e,p[2]=n,p.length=3,(o===1||o===2)&&(p[3]=nt,p[4]=it,p[5]=st,p[6]=ot,p.length=7),Rt}function ne(t,e){let n=t.attributes;if(n.position.values.length===0)return;for(let i in n)if(n.hasOwnProperty(i)&&f(n[i])&&f(n[i].values)){let c=n[i];c.values=k.createTypedArray(c.componentDatatype,c.values)}let s=B.computeNumberOfVertices(t);return t.indices=j.createTypedArray(s,t.indices),e&&(t.boundingSphere=rt.fromVertices(n.position.values)),t}function lt(t){let e=t.attributes,n={};for(let s in e)if(e.hasOwnProperty(s)&&f(e[s])&&f(e[s].values)){let i=e[s];n[s]=new U({componentDatatype:i.componentDatatype,componentsPerAttribute:i.componentsPerAttribute,normalize:i.normalize,values:[]})}return new B({attributes:n,indices:[],primitiveType:t.primitiveType})}function kt(t,e,n){let s=f(t.geometry.boundingSphere);e=ne(e,s),n=ne(n,s),f(n)&&!f(e)?t.geometry=n:!f(n)&&f(e)?t.geometry=e:(t.westHemisphereGeometry=e,t.eastHemisphereGeometry=n,t.geometry=void 0)}function Ft(t,e){let n=new t,s=new t,i=new t;return function(c,o,a,p,u,d,m,l){let h=t.fromArray(u,c*e,n),y=t.fromArray(u,o*e,s),v=t.fromArray(u,a*e,i);t.multiplyByScalar(h,p.x,h),t.multiplyByScalar(y,p.y,y),t.multiplyByScalar(v,p.z,v);let b=t.add(h,y,h);t.add(b,v,b),l&&t.normalize(b,b),t.pack(b,d,m*e)}}var ze=Ft(dt,4),It=Ft(r,3),ae=Ft(R,2),De=function(t,e,n,s,i,c,o){let a=i[t]*s.x,p=i[e]*s.y,u=i[n]*s.z;c[o]=a+p+u>N.EPSILON6?1:0},wt=new r,Gt=new r,Ct=new r,qe=new r;function Tt(t,e,n,s,i,c,o,a,p,u,d,m,l,h,y,v){if(!f(c)&&!f(o)&&!f(a)&&!f(p)&&!f(u)&&h===0)return;let b=r.fromArray(i,t*3,wt),S=r.fromArray(i,e*3,Gt),x=r.fromArray(i,n*3,Ct),w=Ht(s,b,S,x,qe);if(f(w)){if(f(c)&&It(t,e,n,w,c,m.normal.values,v,!0),f(u)){let A=r.fromArray(u,t*3,wt),E=r.fromArray(u,e*3,Gt),P=r.fromArray(u,n*3,Ct);r.multiplyByScalar(A,w.x,A),r.multiplyByScalar(E,w.y,E),r.multiplyByScalar(P,w.z,P);let O;!r.equals(A,r.ZERO)||!r.equals(E,r.ZERO)||!r.equals(P,r.ZERO)?(O=r.add(A,E,A),r.add(O,P,O),r.normalize(O,O)):(O=wt,O.x=0,O.y=0,O.z=0),r.pack(O,m.extrudeDirection.values,v*3)}if(f(d)&&De(t,e,n,w,d,m.applyOffset.values,v),f(o)&&It(t,e,n,w,o,m.tangent.values,v,!0),f(a)&&It(t,e,n,w,a,m.bitangent.values,v,!0),f(p)&&ae(t,e,n,w,p,m.st.values,v),h>0)for(let A=0;A<h;A++){let E=l[A];Ve(t,e,n,w,v,y[E],m[E])}}}function Ve(t,e,n,s,i,c,o){let a=c.componentsPerAttribute,p=c.values,u=o.values;switch(a){case 4:ze(t,e,n,s,p,u,i,!1);break;case 3:It(t,e,n,s,p,u,i,!1);break;case 2:ae(t,e,n,s,p,u,i,!1);break;default:u[i]=p[t]*s.x+p[e]*s.y+p[n]*s.z}}function Q(t,e,n,s,i,c){let o=t.position.values.length/3;if(i!==-1){let a=s[i],p=n[a];return p===-1?(n[a]=o,t.position.values.push(c.x,c.y,c.z),e.push(o),o):(e.push(p),p)}return t.position.values.push(c.x,c.y,c.z),e.push(o),o}var Re={position:!0,normal:!0,bitangent:!0,tangent:!0,st:!0,extrudeDirection:!0,applyOffset:!0};function ie(t){let e=t.geometry,n=e.attributes,s=n.position.values,i=f(n.normal)?n.normal.values:void 0,c=f(n.bitangent)?n.bitangent.values:void 0,o=f(n.tangent)?n.tangent.values:void 0,a=f(n.st)?n.st.values:void 0,p=f(n.extrudeDirection)?n.extrudeDirection.values:void 0,u=f(n.applyOffset)?n.applyOffset.values:void 0,d=e.indices,m=[];for(let O in n)n.hasOwnProperty(O)&&!Re[O]&&f(n[O])&&m.push(O);let l=m.length,h=lt(e),y=lt(e),v,b,S,x,w,A=[];A.length=s.length/3;let E=[];for(E.length=s.length/3,w=0;w<A.length;++w)A[w]=-1,E[w]=-1;let P=d.length;for(w=0;w<P;w+=3){let O=d[w],L=d[w+1],g=d[w+2],T=r.fromArray(s,O*3),C=r.fromArray(s,L*3),z=r.fromArray(s,g*3),q=Ne(T,C,z);if(f(q)&&q.positions.length>3){let V=q.positions,G=q.indices,M=G.length;for(let J=0;J<M;++J){let Y=G[J],_=V[Y];_.y<0?(v=y.attributes,b=y.indices,S=A):(v=h.attributes,b=h.indices,S=E),x=Q(v,b,S,d,Y<3?w+Y:-1,_),Tt(O,L,g,_,s,i,o,c,a,p,u,v,m,l,n,x)}}else f(q)&&(T=q.positions[0],C=q.positions[1],z=q.positions[2]),T.y<0?(v=y.attributes,b=y.indices,S=A):(v=h.attributes,b=h.indices,S=E),x=Q(v,b,S,d,w,T),Tt(O,L,g,T,s,i,o,c,a,p,u,v,m,l,n,x),x=Q(v,b,S,d,w+1,C),Tt(O,L,g,C,s,i,o,c,a,p,u,v,m,l,n,x),x=Q(v,b,S,d,w+2,z),Tt(O,L,g,z,s,i,o,c,a,p,u,v,m,l,n,x)}kt(t,y,h)}var ue=Et.fromPointNormal(r.ZERO,r.UNIT_Y),Ge=new r,Ce=new r;function ut(t,e,n,s,i,c,o){if(!f(o))return;let a=r.fromArray(s,t*3,wt);r.equalsEpsilon(a,n,N.EPSILON10)?c.applyOffset.values[i]=o[t]:c.applyOffset.values[i]=o[e]}function se(t){let e=t.geometry,n=e.attributes,s=n.position.values,i=f(n.applyOffset)?n.applyOffset.values:void 0,c=e.indices,o=lt(e),a=lt(e),p,u=c.length,d=[];d.length=s.length/3;let m=[];for(m.length=s.length/3,p=0;p<d.length;++p)d[p]=-1,m[p]=-1;for(p=0;p<u;p+=2){let l=c[p],h=c[p+1],y=r.fromArray(s,l*3,wt),v=r.fromArray(s,h*3,Gt),b;Math.abs(y.y)<N.EPSILON6&&(y.y<0?y.y=-N.EPSILON6:y.y=N.EPSILON6),Math.abs(v.y)<N.EPSILON6&&(v.y<0?v.y=-N.EPSILON6:v.y=N.EPSILON6);let S=o.attributes,x=o.indices,w=m,A=a.attributes,E=a.indices,P=d,O=Lt.lineSegmentPlane(y,v,ue,Ct);if(f(O)){let L=r.multiplyByScalar(r.UNIT_Y,5*N.EPSILON9,Ge);y.y<0&&(r.negate(L,L),S=a.attributes,x=a.indices,w=d,A=o.attributes,E=o.indices,P=m);let g=r.add(O,L,Ce);b=Q(S,x,w,c,p,y),ut(l,h,y,s,b,S,i),b=Q(S,x,w,c,-1,g),ut(l,h,g,s,b,S,i),r.negate(L,L),r.add(O,L,g),b=Q(A,E,P,c,-1,g),ut(l,h,g,s,b,A,i),b=Q(A,E,P,c,p+1,v),ut(l,h,v,s,b,A,i)}else{let L,g,T;y.y<0?(L=a.attributes,g=a.indices,T=d):(L=o.attributes,g=o.indices,T=m),b=Q(L,g,T,c,p,y),ut(l,h,y,s,b,L,i),b=Q(L,g,T,c,p+1,v),ut(l,h,v,s,b,L,i)}}kt(t,a,o)}var oe=new R,Be=new R,le=new r,fe=new r,Bt=new r,ke=new r,Fe=new r,Me=new r,re=new dt;function ce(t){let e=t.attributes,n=e.position.values,s=e.prevPosition.values,i=e.nextPosition.values,c=n.length;for(let o=0;o<c;o+=3){let a=r.unpack(n,o,le);if(a.x>0)continue;let p=r.unpack(s,o,fe);(a.y<0&&p.y>0||a.y>0&&p.y<0)&&(o-3>0?(s[o]=n[o-3],s[o+1]=n[o-2],s[o+2]=n[o-1]):r.pack(a,s,o));let u=r.unpack(i,o,Bt);(a.y<0&&u.y>0||a.y>0&&u.y<0)&&(o+3<c?(i[o]=n[o+3],i[o+1]=n[o+4],i[o+2]=n[o+5]):r.pack(a,i,o))}}var _e=5*N.EPSILON9,At=N.EPSILON6;function Ue(t){let e=t.geometry,n=e.attributes,s=n.position.values,i=n.prevPosition.values,c=n.nextPosition.values,o=n.expandAndWidth.values,a=f(n.st)?n.st.values:void 0,p=f(n.color)?n.color.values:void 0,u=lt(e),d=lt(e),m,l,h,y=!1,v=s.length/3;for(m=0;m<v;m+=4){let b=m,S=m+2,x=r.fromArray(s,b*3,le),w=r.fromArray(s,S*3,fe);if(Math.abs(x.y)<At)for(x.y=At*(w.y<0?-1:1),s[m*3+1]=x.y,s[(m+1)*3+1]=x.y,l=b*3;l<b*3+4*3;l+=3)i[l]=s[m*3],i[l+1]=s[m*3+1],i[l+2]=s[m*3+2];if(Math.abs(w.y)<At)for(w.y=At*(x.y<0?-1:1),s[(m+2)*3+1]=w.y,s[(m+3)*3+1]=w.y,l=b*3;l<b*3+4*3;l+=3)c[l]=s[(m+2)*3],c[l+1]=s[(m+2)*3+1],c[l+2]=s[(m+2)*3+2];let A=u.attributes,E=u.indices,P=d.attributes,O=d.indices,L=Lt.lineSegmentPlane(x,w,ue,ke);if(f(L)){y=!0;let g=r.multiplyByScalar(r.UNIT_Y,_e,Fe);x.y<0&&(r.negate(g,g),A=d.attributes,E=d.indices,P=u.attributes,O=u.indices);let T=r.add(L,g,Me);A.position.values.push(x.x,x.y,x.z,x.x,x.y,x.z),A.position.values.push(T.x,T.y,T.z),A.position.values.push(T.x,T.y,T.z),A.prevPosition.values.push(i[b*3],i[b*3+1],i[b*3+2]),A.prevPosition.values.push(i[b*3+3],i[b*3+4],i[b*3+5]),A.prevPosition.values.push(x.x,x.y,x.z,x.x,x.y,x.z),A.nextPosition.values.push(T.x,T.y,T.z),A.nextPosition.values.push(T.x,T.y,T.z),A.nextPosition.values.push(T.x,T.y,T.z),A.nextPosition.values.push(T.x,T.y,T.z),r.negate(g,g),r.add(L,g,T),P.position.values.push(T.x,T.y,T.z),P.position.values.push(T.x,T.y,T.z),P.position.values.push(w.x,w.y,w.z,w.x,w.y,w.z),P.prevPosition.values.push(T.x,T.y,T.z),P.prevPosition.values.push(T.x,T.y,T.z),P.prevPosition.values.push(T.x,T.y,T.z),P.prevPosition.values.push(T.x,T.y,T.z),P.nextPosition.values.push(w.x,w.y,w.z,w.x,w.y,w.z),P.nextPosition.values.push(c[S*3],c[S*3+1],c[S*3+2]),P.nextPosition.values.push(c[S*3+3],c[S*3+4],c[S*3+5]);let C=R.fromArray(o,b*2,oe),z=Math.abs(C.y);A.expandAndWidth.values.push(-1,z,1,z),A.expandAndWidth.values.push(-1,-z,1,-z),P.expandAndWidth.values.push(-1,z,1,z),P.expandAndWidth.values.push(-1,-z,1,-z);let q=r.magnitudeSquared(r.subtract(L,x,Bt));if(q/=r.magnitudeSquared(r.subtract(w,x,Bt)),f(p)){let V=dt.fromArray(p,b*4,re),G=dt.fromArray(p,S*4,re),M=N.lerp(V.x,G.x,q),J=N.lerp(V.y,G.y,q),Y=N.lerp(V.z,G.z,q),_=N.lerp(V.w,G.w,q);for(l=b*4;l<b*4+2*4;++l)A.color.values.push(p[l]);for(A.color.values.push(M,J,Y,_),A.color.values.push(M,J,Y,_),P.color.values.push(M,J,Y,_),P.color.values.push(M,J,Y,_),l=S*4;l<S*4+2*4;++l)P.color.values.push(p[l])}if(f(a)){let V=R.fromArray(a,b*2,oe),G=R.fromArray(a,(m+3)*2,Be),M=N.lerp(V.x,G.x,q);for(l=b*2;l<b*2+2*2;++l)A.st.values.push(a[l]);for(A.st.values.push(M,V.y),A.st.values.push(M,G.y),P.st.values.push(M,V.y),P.st.values.push(M,G.y),l=S*2;l<S*2+2*2;++l)P.st.values.push(a[l])}h=A.position.values.length/3-4,E.push(h,h+2,h+1),E.push(h+1,h+2,h+3),h=P.position.values.length/3-4,O.push(h,h+2,h+1),O.push(h+1,h+2,h+3)}else{let g,T;for(x.y<0?(g=d.attributes,T=d.indices):(g=u.attributes,T=u.indices),g.position.values.push(x.x,x.y,x.z),g.position.values.push(x.x,x.y,x.z),g.position.values.push(w.x,w.y,w.z),g.position.values.push(w.x,w.y,w.z),l=m*3;l<m*3+4*3;++l)g.prevPosition.values.push(i[l]),g.nextPosition.values.push(c[l]);for(l=m*2;l<m*2+4*2;++l)g.expandAndWidth.values.push(o[l]),f(a)&&g.st.values.push(a[l]);if(f(p))for(l=m*4;l<m*4+4*4;++l)g.color.values.push(p[l]);h=g.position.values.length/3-4,T.push(h,h+2,h+1),T.push(h+1,h+2,h+3)}}y&&(ce(d),ce(u)),kt(t,d,u)}F.splitLongitude=function(t){if(!f(t))throw new I("instance is required.");let e=t.geometry,n=e.boundingSphere;if(f(n)&&(n.center.x-n.radius>0||rt.intersectPlane(n,Et.ORIGIN_ZX_PLANE)!==Ut.INTERSECTING))return t;if(e.geometryType!==mt.NONE)switch(e.geometryType){case mt.POLYLINES:Ue(t);break;case mt.TRIANGLES:ie(t);break;case mt.LINES:se(t);break}else Le(e),e.primitiveType===D.TRIANGLES?ie(t):e.primitiveType===D.LINES&&se(t);return t};var gn=F;export{gn as a};
