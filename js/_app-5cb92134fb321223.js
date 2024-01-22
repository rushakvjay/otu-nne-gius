(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{98099:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(97117);function i(e,t,r){return void 0===t&&(t=new Uint8Array(2)),void 0===r&&(r=0),t[r+0]=e>>>8,t[r+1]=e>>>0,t}function a(e,t,r){return void 0===t&&(t=new Uint8Array(2)),void 0===r&&(r=0),t[r+0]=e>>>0,t[r+1]=e>>>8,t}function o(e,t){return void 0===t&&(t=0),e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}function s(e,t){return void 0===t&&(t=0),(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}function l(e,t){return void 0===t&&(t=0),e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t]}function c(e,t){return void 0===t&&(t=0),(e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t])>>>0}function u(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),t[r+0]=e>>>24,t[r+1]=e>>>16,t[r+2]=e>>>8,t[r+3]=e>>>0,t}function h(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),t[r+0]=e>>>0,t[r+1]=e>>>8,t[r+2]=e>>>16,t[r+3]=e>>>24,t}function d(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),u(e/4294967296>>>0,t,r),u(e>>>0,t,r+4),t}function p(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),h(e>>>0,t,r),h(e/4294967296>>>0,t,r+4),t}t.readInt16BE=function(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])<<16>>16},t.readUint16BE=function(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])>>>0},t.readInt16LE=function(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])<<16>>16},t.readUint16LE=function(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])>>>0},t.writeUint16BE=i,t.writeInt16BE=i,t.writeUint16LE=a,t.writeInt16LE=a,t.readInt32BE=o,t.readUint32BE=s,t.readInt32LE=l,t.readUint32LE=c,t.writeUint32BE=u,t.writeInt32BE=u,t.writeUint32LE=h,t.writeInt32LE=h,t.readInt64BE=function(e,t){void 0===t&&(t=0);var r=o(e,t),n=o(e,t+4);return 4294967296*r+n-(n>>31)*4294967296},t.readUint64BE=function(e,t){return void 0===t&&(t=0),4294967296*s(e,t)+s(e,t+4)},t.readInt64LE=function(e,t){void 0===t&&(t=0);var r=l(e,t);return 4294967296*l(e,t+4)+r-(r>>31)*4294967296},t.readUint64LE=function(e,t){void 0===t&&(t=0);var r=c(e,t);return 4294967296*c(e,t+4)+r},t.writeUint64BE=d,t.writeInt64BE=d,t.writeUint64LE=p,t.writeInt64LE=p,t.readUintBE=function(e,t,r){if(void 0===r&&(r=0),e%8!=0)throw Error("readUintBE supports only bitLengths divisible by 8");if(e/8>t.length-r)throw Error("readUintBE: array is too short for the given bitLength");for(var n=0,i=1,a=e/8+r-1;a>=r;a--)n+=t[a]*i,i*=256;return n},t.readUintLE=function(e,t,r){if(void 0===r&&(r=0),e%8!=0)throw Error("readUintLE supports only bitLengths divisible by 8");if(e/8>t.length-r)throw Error("readUintLE: array is too short for the given bitLength");for(var n=0,i=1,a=r;a<r+e/8;a++)n+=t[a]*i,i*=256;return n},t.writeUintBE=function(e,t,r,i){if(void 0===r&&(r=new Uint8Array(e/8)),void 0===i&&(i=0),e%8!=0)throw Error("writeUintBE supports only bitLengths divisible by 8");if(!n.isSafeInteger(t))throw Error("writeUintBE value must be an integer");for(var a=1,o=e/8+i-1;o>=i;o--)r[o]=t/a&255,a*=256;return r},t.writeUintLE=function(e,t,r,i){if(void 0===r&&(r=new Uint8Array(e/8)),void 0===i&&(i=0),e%8!=0)throw Error("writeUintLE supports only bitLengths divisible by 8");if(!n.isSafeInteger(t))throw Error("writeUintLE value must be an integer");for(var a=1,o=i;o<i+e/8;o++)r[o]=t/a&255,a*=256;return r},t.readFloat32BE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t)},t.readFloat32LE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t,!0)},t.readFloat64BE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t)},t.readFloat64LE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t,!0)},t.writeFloat32BE=function(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(r,e),t},t.writeFloat32LE=function(e,t,r){return void 0===t&&(t=new Uint8Array(4)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(r,e,!0),t},t.writeFloat64BE=function(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(r,e),t},t.writeFloat64LE=function(e,t,r){return void 0===t&&(t=new Uint8Array(8)),void 0===r&&(r=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(r,e,!0),t}},25439:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(98099),i=r(17309);function a(e,t,r,a,o){if(void 0===o&&(o=0),32!==e.length)throw Error("ChaCha: key size must be 32 bytes");if(a.length<r.length)throw Error("ChaCha: destination is shorter than source");if(0===o){if(8!==t.length&&12!==t.length)throw Error("ChaCha nonce must be 8 or 12 bytes");l=(s=new Uint8Array(16)).length-t.length,s.set(t,l)}else{if(16!==t.length)throw Error("ChaCha nonce with counter must be 16 bytes");s=t,l=o}for(var s,l,c=new Uint8Array(64),u=0;u<r.length;u+=64){!function(e,t,r){for(var i=r[3]<<24|r[2]<<16|r[1]<<8|r[0],a=r[7]<<24|r[6]<<16|r[5]<<8|r[4],o=r[11]<<24|r[10]<<16|r[9]<<8|r[8],s=r[15]<<24|r[14]<<16|r[13]<<8|r[12],l=r[19]<<24|r[18]<<16|r[17]<<8|r[16],c=r[23]<<24|r[22]<<16|r[21]<<8|r[20],u=r[27]<<24|r[26]<<16|r[25]<<8|r[24],h=r[31]<<24|r[30]<<16|r[29]<<8|r[28],d=t[3]<<24|t[2]<<16|t[1]<<8|t[0],p=t[7]<<24|t[6]<<16|t[5]<<8|t[4],f=t[11]<<24|t[10]<<16|t[9]<<8|t[8],m=t[15]<<24|t[14]<<16|t[13]<<8|t[12],b=1634760805,g=857760878,w=2036477234,y=1797285236,v=i,x=a,C=o,E=s,k=l,S=c,A=u,P=h,_=d,D=p,$=f,O=m,T=0;T<20;T+=2)_^=b=b+v|0,v^=k=k+(_=_>>>16|_<<16)|0,v=v>>>20|v<<12,D^=g=g+x|0,x^=S=S+(D=D>>>16|D<<16)|0,x=x>>>20|x<<12,$^=w=w+C|0,C^=A=A+($=$>>>16|$<<16)|0,C=C>>>20|C<<12,O^=y=y+E|0,E^=P=P+(O=O>>>16|O<<16)|0,E=E>>>20|E<<12,$^=w=w+C|0,C^=A=A+($=$>>>24|$<<8)|0,C=C>>>25|C<<7,O^=y=y+E|0,E^=P=P+(O=O>>>24|O<<8)|0,E=E>>>25|E<<7,D^=g=g+x|0,x^=S=S+(D=D>>>24|D<<8)|0,x=x>>>25|x<<7,_^=b=b+v|0,v^=k=k+(_=_>>>24|_<<8)|0,v=v>>>25|v<<7,O^=b=b+x|0,x^=A=A+(O=O>>>16|O<<16)|0,x=x>>>20|x<<12,_^=g=g+C|0,C^=P=P+(_=_>>>16|_<<16)|0,C=C>>>20|C<<12,D^=w=w+E|0,E^=k=k+(D=D>>>16|D<<16)|0,E=E>>>20|E<<12,$^=y=y+v|0,v^=S=S+($=$>>>16|$<<16)|0,v=v>>>20|v<<12,D^=w=w+E|0,E^=k=k+(D=D>>>24|D<<8)|0,E=E>>>25|E<<7,$^=y=y+v|0,v^=S=S+($=$>>>24|$<<8)|0,v=v>>>25|v<<7,_^=g=g+C|0,C^=P=P+(_=_>>>24|_<<8)|0,C=C>>>25|C<<7,O^=b=b+x|0,x^=A=A+(O=O>>>24|O<<8)|0,x=x>>>25|x<<7;n.writeUint32LE(b+1634760805|0,e,0),n.writeUint32LE(g+857760878|0,e,4),n.writeUint32LE(w+2036477234|0,e,8),n.writeUint32LE(y+1797285236|0,e,12),n.writeUint32LE(v+i|0,e,16),n.writeUint32LE(x+a|0,e,20),n.writeUint32LE(C+o|0,e,24),n.writeUint32LE(E+s|0,e,28),n.writeUint32LE(k+l|0,e,32),n.writeUint32LE(S+c|0,e,36),n.writeUint32LE(A+u|0,e,40),n.writeUint32LE(P+h|0,e,44),n.writeUint32LE(_+d|0,e,48),n.writeUint32LE(D+p|0,e,52),n.writeUint32LE($+f|0,e,56),n.writeUint32LE(O+m|0,e,60)}(c,s,e);for(var h=u;h<u+64&&h<r.length;h++)a[h]=r[h]^c[h-u];!function(e,t,r){for(var n=1;r--;)n=n+(255&e[t])|0,e[t]=255&n,n>>>=8,t++;if(n>0)throw Error("ChaCha: counter overflow")}(s,0,l)}return i.wipe(c),0===o&&i.wipe(s),a}t.streamXOR=a,t.stream=function(e,t,r,n){return void 0===n&&(n=0),i.wipe(r),a(e,t,r,r,n)}},15501:function(e,t,r){"use strict";var n=r(25439),i=r(63027),a=r(17309),o=r(98099),s=r(4153);t.Cv=32,t.WH=12,t.pg=16;var l=new Uint8Array(16),c=function(){function e(e){if(this.nonceLength=t.WH,this.tagLength=t.pg,e.length!==t.Cv)throw Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(e)}return e.prototype.seal=function(e,t,r,i){if(e.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");var o,s=new Uint8Array(16);s.set(e,s.length-e.length);var l=new Uint8Array(32);n.stream(this._key,s,l,4);var c=t.length+this.tagLength;if(i){if(i.length!==c)throw Error("ChaCha20Poly1305: incorrect destination length");o=i}else o=new Uint8Array(c);return n.streamXOR(this._key,s,t,o,4),this._authenticate(o.subarray(o.length-this.tagLength,o.length),l,o.subarray(0,o.length-this.tagLength),r),a.wipe(s),o},e.prototype.open=function(e,t,r,i){if(e.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");if(t.length<this.tagLength)return null;var o,l=new Uint8Array(16);l.set(e,l.length-e.length);var c=new Uint8Array(32);n.stream(this._key,l,c,4);var u=new Uint8Array(this.tagLength);if(this._authenticate(u,c,t.subarray(0,t.length-this.tagLength),r),!s.equal(u,t.subarray(t.length-this.tagLength,t.length)))return null;var h=t.length-this.tagLength;if(i){if(i.length!==h)throw Error("ChaCha20Poly1305: incorrect destination length");o=i}else o=new Uint8Array(h);return n.streamXOR(this._key,l,t.subarray(0,t.length-this.tagLength),o,4),a.wipe(l),o},e.prototype.clean=function(){return a.wipe(this._key),this},e.prototype._authenticate=function(e,t,r,n){var s=new i.Poly1305(t);n&&(s.update(n),n.length%16>0&&s.update(l.subarray(n.length%16))),s.update(r),r.length%16>0&&s.update(l.subarray(r.length%16));var c=new Uint8Array(8);n&&o.writeUint64LE(n.length,c),s.update(c),o.writeUint64LE(r.length,c),s.update(c);for(var u=s.digest(),h=0;h<u.length;h++)e[h]=u[h];s.clean(),a.wipe(u),a.wipe(c)},e}();t.OK=c},4153:function(e,t){"use strict";function r(e,t){if(e.length!==t.length)return 0;for(var r=0,n=0;n<e.length;n++)r|=e[n]^t[n];return 1&r-1>>>8}Object.defineProperty(t,"__esModule",{value:!0}),t.select=function(e,t,r){return~(e-1)&t|e-1&r},t.lessOrEqual=function(e,t){return(0|e)-(0|t)-1>>>31&1},t.compare=r,t.equal=function(e,t){return 0!==e.length&&0!==t.length&&0!==r(e,t)}},79984:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSerializableHash=function(e){return void 0!==e.saveState&&void 0!==e.restoreState&&void 0!==e.cleanSavedState}},512:function(e,t,r){"use strict";var n=r(25629),i=r(17309),a=function(){function e(e,t,r,i){void 0===r&&(r=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=e,this._info=i;var a=n.hmac(this._hash,r,t);this._hmac=new n.HMAC(e,a),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return e.prototype._fillBuffer=function(){this._counter[0]++;var e=this._counter[0];if(0===e)throw Error("hkdf: cannot expand more");this._hmac.reset(),e>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},e.prototype.expand=function(e){for(var t=new Uint8Array(e),r=0;r<t.length;r++)this._bufpos===this._buffer.length&&this._fillBuffer(),t[r]=this._buffer[this._bufpos++];return t},e.prototype.clean=function(){this._hmac.clean(),i.wipe(this._buffer),i.wipe(this._counter),this._bufpos=0},e}();t.t=a},25629:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(79984),i=r(4153),a=r(17309),o=function(){function e(e,t){this._finished=!1,this._inner=new e,this._outer=new e,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var r=new Uint8Array(this.blockSize);t.length>this.blockSize?this._inner.update(t).finish(r).clean():r.set(t);for(var i=0;i<r.length;i++)r[i]^=54;this._inner.update(r);for(var i=0;i<r.length;i++)r[i]^=106;this._outer.update(r),n.isSerializableHash(this._inner)&&n.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),a.wipe(r)}return e.prototype.reset=function(){if(!n.isSerializableHash(this._inner)||!n.isSerializableHash(this._outer))throw Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.clean=function(){n.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),n.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},e.prototype.update=function(e){return this._inner.update(e),this},e.prototype.finish=function(e){return this._finished?(this._outer.finish(e),this):(this._inner.finish(e),this._outer.update(e.subarray(0,this.digestLength)).finish(e),this._finished=!0,this)},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(!n.isSerializableHash(this._inner))throw Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},e.prototype.restoreState=function(e){if(!n.isSerializableHash(this._inner)||!n.isSerializableHash(this._outer))throw Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(e),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.cleanSavedState=function(e){if(!n.isSerializableHash(this._inner))throw Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(e)},e}();t.HMAC=o,t.hmac=function(e,t,r){var n=new o(e,t);n.update(r);var i=n.digest();return n.clean(),i},t.equal=i.equal},97117:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mul=Math.imul||function(e,t){var r=65535&e,n=65535&t;return r*n+((e>>>16&65535)*n+r*(t>>>16&65535)<<16>>>0)|0},t.add=function(e,t){return e+t|0},t.sub=function(e,t){return e-t|0},t.rotl=function(e,t){return e<<t|e>>>32-t},t.rotr=function(e,t){return e<<32-t|e>>>t},t.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},t.MAX_SAFE_INTEGER=9007199254740991,t.isSafeInteger=function(e){return t.isInteger(e)&&e>=-t.MAX_SAFE_INTEGER&&e<=t.MAX_SAFE_INTEGER}},63027:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(4153),i=r(17309);t.DIGEST_LENGTH=16;var a=function(){function e(e){this.digestLength=t.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var r=e[0]|e[1]<<8;this._r[0]=8191&r;var n=e[2]|e[3]<<8;this._r[1]=(r>>>13|n<<3)&8191;var i=e[4]|e[5]<<8;this._r[2]=(n>>>10|i<<6)&7939;var a=e[6]|e[7]<<8;this._r[3]=(i>>>7|a<<9)&8191;var o=e[8]|e[9]<<8;this._r[4]=(a>>>4|o<<12)&255,this._r[5]=o>>>1&8190;var s=e[10]|e[11]<<8;this._r[6]=(o>>>14|s<<2)&8191;var l=e[12]|e[13]<<8;this._r[7]=(s>>>11|l<<5)&8065;var c=e[14]|e[15]<<8;this._r[8]=(l>>>8|c<<8)&8191,this._r[9]=c>>>5&127,this._pad[0]=e[16]|e[17]<<8,this._pad[1]=e[18]|e[19]<<8,this._pad[2]=e[20]|e[21]<<8,this._pad[3]=e[22]|e[23]<<8,this._pad[4]=e[24]|e[25]<<8,this._pad[5]=e[26]|e[27]<<8,this._pad[6]=e[28]|e[29]<<8,this._pad[7]=e[30]|e[31]<<8}return e.prototype._blocks=function(e,t,r){for(var n=this._fin?0:2048,i=this._h[0],a=this._h[1],o=this._h[2],s=this._h[3],l=this._h[4],c=this._h[5],u=this._h[6],h=this._h[7],d=this._h[8],p=this._h[9],f=this._r[0],m=this._r[1],b=this._r[2],g=this._r[3],w=this._r[4],y=this._r[5],v=this._r[6],x=this._r[7],C=this._r[8],E=this._r[9];r>=16;){var k,S=e[t+0]|e[t+1]<<8;i+=8191&S;var A=e[t+2]|e[t+3]<<8;a+=(S>>>13|A<<3)&8191;var P=e[t+4]|e[t+5]<<8;o+=(A>>>10|P<<6)&8191;var _=e[t+6]|e[t+7]<<8;s+=(P>>>7|_<<9)&8191;var D=e[t+8]|e[t+9]<<8;l+=(_>>>4|D<<12)&8191,c+=D>>>1&8191;var $=e[t+10]|e[t+11]<<8;u+=(D>>>14|$<<2)&8191;var O=e[t+12]|e[t+13]<<8;h+=($>>>11|O<<5)&8191;var T=e[t+14]|e[t+15]<<8;d+=(O>>>8|T<<8)&8191,p+=T>>>5|n;var I=0;I=(k=0+i*f+a*(5*E)+o*(5*C)+s*(5*x)+l*(5*v))>>>13,k&=8191,k+=c*(5*y)+u*(5*w)+h*(5*g)+d*(5*b)+p*(5*m),I+=k>>>13,k&=8191;var R=I;R+=i*m+a*f+o*(5*E)+s*(5*C)+l*(5*x),I=R>>>13,R&=8191,R+=c*(5*v)+u*(5*y)+h*(5*w)+d*(5*g)+p*(5*b),I+=R>>>13,R&=8191;var N=I;N+=i*b+a*m+o*f+s*(5*E)+l*(5*C),I=N>>>13,N&=8191,N+=c*(5*x)+u*(5*v)+h*(5*y)+d*(5*w)+p*(5*g),I+=N>>>13,N&=8191;var U=I;U+=i*g+a*b+o*m+s*f+l*(5*E),I=U>>>13,U&=8191,U+=c*(5*C)+u*(5*x)+h*(5*v)+d*(5*y)+p*(5*w),I+=U>>>13,U&=8191;var B=I;B+=i*w+a*g+o*b+s*m+l*f,I=B>>>13,B&=8191,B+=c*(5*E)+u*(5*C)+h*(5*x)+d*(5*v)+p*(5*y),I+=B>>>13,B&=8191;var M=I;M+=i*y+a*w+o*g+s*b+l*m,I=M>>>13,M&=8191,M+=c*f+u*(5*E)+h*(5*C)+d*(5*x)+p*(5*v),I+=M>>>13,M&=8191;var j=I;j+=i*v+a*y+o*w+s*g+l*b,I=j>>>13,j&=8191,j+=c*m+u*f+h*(5*E)+d*(5*C)+p*(5*x),I+=j>>>13,j&=8191;var L=I;L+=i*x+a*v+o*y+s*w+l*g,I=L>>>13,L&=8191,L+=c*b+u*m+h*f+d*(5*E)+p*(5*C),I+=L>>>13,L&=8191;var F=I;F+=i*C+a*x+o*v+s*y+l*w,I=F>>>13,F&=8191,F+=c*g+u*b+h*m+d*f+p*(5*E),I+=F>>>13,F&=8191;var z=I;z+=i*E+a*C+o*x+s*v+l*y,I=z>>>13,z&=8191,z+=c*w+u*g+h*b+d*m+p*f,I+=z>>>13,z&=8191,k=8191&(I=(I=(I<<2)+I|0)+k|0),I>>>=13,R+=I,i=k,a=R,o=N,s=U,l=B,c=M,u=j,h=L,d=F,p=z,t+=16,r-=16}this._h[0]=i,this._h[1]=a,this._h[2]=o,this._h[3]=s,this._h[4]=l,this._h[5]=c,this._h[6]=u,this._h[7]=h,this._h[8]=d,this._h[9]=p},e.prototype.finish=function(e,t){void 0===t&&(t=0);var r,n,i,a,o=new Uint16Array(10);if(this._leftover){for(a=this._leftover,this._buffer[a++]=1;a<16;a++)this._buffer[a]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(r=this._h[1]>>>13,this._h[1]&=8191,a=2;a<10;a++)this._h[a]+=r,r=this._h[a]>>>13,this._h[a]&=8191;for(this._h[0]+=5*r,r=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=r,r=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=r,o[0]=this._h[0]+5,r=o[0]>>>13,o[0]&=8191,a=1;a<10;a++)o[a]=this._h[a]+r,r=o[a]>>>13,o[a]&=8191;for(o[9]-=8192,n=(1^r)-1,a=0;a<10;a++)o[a]&=n;for(a=0,n=~n;a<10;a++)this._h[a]=this._h[a]&n|o[a];for(a=1,this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,i=this._h[0]+this._pad[0],this._h[0]=65535&i;a<8;a++)i=(this._h[a]+this._pad[a]|0)+(i>>>16)|0,this._h[a]=65535&i;return e[t+0]=this._h[0]>>>0,e[t+1]=this._h[0]>>>8,e[t+2]=this._h[1]>>>0,e[t+3]=this._h[1]>>>8,e[t+4]=this._h[2]>>>0,e[t+5]=this._h[2]>>>8,e[t+6]=this._h[3]>>>0,e[t+7]=this._h[3]>>>8,e[t+8]=this._h[4]>>>0,e[t+9]=this._h[4]>>>8,e[t+10]=this._h[5]>>>0,e[t+11]=this._h[5]>>>8,e[t+12]=this._h[6]>>>0,e[t+13]=this._h[6]>>>8,e[t+14]=this._h[7]>>>0,e[t+15]=this._h[7]>>>8,this._finished=!0,this},e.prototype.update=function(e){var t,r=0,n=e.length;if(this._leftover){(t=16-this._leftover)>n&&(t=n);for(var i=0;i<t;i++)this._buffer[this._leftover+i]=e[r+i];if(n-=t,r+=t,this._leftover+=t,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(n>=16&&(t=n-n%16,this._blocks(e,r,t),r+=t,n-=t),n){for(var i=0;i<n;i++)this._buffer[this._leftover+i]=e[r+i];this._leftover+=n}return this},e.prototype.digest=function(){if(this._finished)throw Error("Poly1305 was finished");var e=new Uint8Array(16);return this.finish(e),e},e.prototype.clean=function(){return i.wipe(this._buffer),i.wipe(this._r),i.wipe(this._h),i.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},e}();t.Poly1305=a,t.oneTimeAuth=function(e,t){var r=new a(e);r.update(t);var n=r.digest();return r.clean(),n},t.equal=function(e,r){return e.length===t.DIGEST_LENGTH&&r.length===t.DIGEST_LENGTH&&n.equal(e,r)}},31416:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.randomStringForEntropy=t.randomString=t.randomUint32=t.randomBytes=t.defaultRandomSource=void 0;let n=r(46008),i=r(98099),a=r(17309);function o(e,r=t.defaultRandomSource){return r.randomBytes(e)}t.defaultRandomSource=new n.SystemRandomSource,t.randomBytes=o,t.randomUint32=function(e=t.defaultRandomSource){let r=o(4,e),n=(0,i.readUint32LE)(r);return(0,a.wipe)(r),n};let s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function l(e,r=s,n=t.defaultRandomSource){if(r.length<2)throw Error("randomString charset is too short");if(r.length>256)throw Error("randomString charset is too long");let i="",l=r.length,c=256-256%l;for(;e>0;){let t=o(Math.ceil(256*e/c),n);for(let n=0;n<t.length&&e>0;n++){let a=t[n];a<c&&(i+=r.charAt(a%l),e--)}(0,a.wipe)(t)}return i}t.randomString=l,t.randomStringForEntropy=function(e,r=s,n=t.defaultRandomSource){let i=Math.ceil(e/(Math.log(r.length)/Math.LN2));return l(i,r,n)}},75455:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BrowserRandomSource=void 0,t.BrowserRandomSource=class{constructor(){this.isAvailable=!1,this.isInstantiated=!1;let e="undefined"!=typeof self?self.crypto||self.msCrypto:null;e&&void 0!==e.getRandomValues&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(e){if(!this.isAvailable||!this._crypto)throw Error("Browser random byte generator is not available.");let t=new Uint8Array(e);for(let e=0;e<t.length;e+=65536)this._crypto.getRandomValues(t.subarray(e,e+Math.min(t.length-e,65536)));return t}}},58871:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NodeRandomSource=void 0;let n=r(17309);t.NodeRandomSource=class{constructor(){this.isAvailable=!1,this.isInstantiated=!1;{let e=r(35883);e&&e.randomBytes&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(e){if(!this.isAvailable||!this._crypto)throw Error("Node.js random byte generator is not available.");let t=this._crypto.randomBytes(e);if(t.length!==e)throw Error("NodeRandomSource: got fewer bytes than requested");let r=new Uint8Array(e);for(let e=0;e<r.length;e++)r[e]=t[e];return(0,n.wipe)(t),r}}},46008:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SystemRandomSource=void 0;let n=r(75455),i=r(58871);t.SystemRandomSource=class{constructor(){if(this.isAvailable=!1,this.name="",this._source=new n.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new i.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(e){if(!this.isAvailable)throw Error("System random byte generator is not available.");return this._source.randomBytes(e)}}},73294:function(e,t,r){"use strict";var n=r(98099),i=r(17309);t.k=32,t.cn=64;var a=function(){function e(){this.digestLength=t.k,this.blockSize=t.cn,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return e.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},e.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},e.prototype.clean=function(){i.wipe(this._buffer),i.wipe(this._temp),this.reset()},e.prototype.update=function(e,t){if(void 0===t&&(t=e.length),this._finished)throw Error("SHA256: can't update because hash was finished.");var r=0;if(this._bytesHashed+=t,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&t>0;)this._buffer[this._bufferLength++]=e[r++],t--;this._bufferLength===this.blockSize&&(s(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(t>=this.blockSize&&(r=s(this._temp,this._state,e,r,t),t%=this.blockSize);t>0;)this._buffer[this._bufferLength++]=e[r++],t--;return this},e.prototype.finish=function(e){if(!this._finished){var t=this._bytesHashed,r=this._bufferLength,i=t%64<56?64:128;this._buffer[r]=128;for(var a=r+1;a<i-8;a++)this._buffer[a]=0;n.writeUint32BE(t/536870912|0,this._buffer,i-8),n.writeUint32BE(t<<3,this._buffer,i-4),s(this._temp,this._state,this._buffer,0,i),this._finished=!0}for(var a=0;a<this.digestLength/4;a++)n.writeUint32BE(this._state[a],e,4*a);return this},e.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},e.prototype.saveState=function(){if(this._finished)throw Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},e.prototype.restoreState=function(e){return this._state.set(e.state),this._bufferLength=e.bufferLength,e.buffer&&this._buffer.set(e.buffer),this._bytesHashed=e.bytesHashed,this._finished=!1,this},e.prototype.cleanSavedState=function(e){i.wipe(e.state),e.buffer&&i.wipe(e.buffer),e.bufferLength=0,e.bytesHashed=0},e}();t.mE=a;var o=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function s(e,t,r,i,a){for(;a>=64;){for(var s=t[0],l=t[1],c=t[2],u=t[3],h=t[4],d=t[5],p=t[6],f=t[7],m=0;m<16;m++){var b=i+4*m;e[m]=n.readUint32BE(r,b)}for(var m=16;m<64;m++){var g=e[m-2],w=(g>>>17|g<<15)^(g>>>19|g<<13)^g>>>10,y=((g=e[m-15])>>>7|g<<25)^(g>>>18|g<<14)^g>>>3;e[m]=(w+e[m-7]|0)+(y+e[m-16]|0)}for(var m=0;m<64;m++){var w=(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))+(h&d^~h&p)|0)+(f+(o[m]+e[m]|0)|0)|0,y=((s>>>2|s<<30)^(s>>>13|s<<19)^(s>>>22|s<<10))+(s&l^s&c^l&c)|0;f=p,p=d,d=h,h=u+w|0,u=c,c=l,l=s,s=w+y|0}t[0]+=s,t[1]+=l,t[2]+=c,t[3]+=u,t[4]+=h,t[5]+=d,t[6]+=p,t[7]+=f,i+=64,a-=64}return i}t.vp=function(e){var t=new a;t.update(e);var r=t.digest();return t.clean(),r}},17309:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wipe=function(e){for(var t=0;t<e.length;t++)e[t]=0;return e}},57664:function(e,t,r){"use strict";t.gi=t.Au=t.KS=t.kz=void 0;let n=r(31416),i=r(17309);function a(e){let t=new Float64Array(16);if(e)for(let r=0;r<e.length;r++)t[r]=e[r];return t}t.kz=32,t.KS=32;let o=new Uint8Array(32);o[0]=9;let s=a([56129,1]);function l(e){let t=1;for(let r=0;r<16;r++){let n=e[r]+t+65535;t=Math.floor(n/65536),e[r]=n-65536*t}e[0]+=t-1+37*(t-1)}function c(e,t,r){let n=~(r-1);for(let r=0;r<16;r++){let i=n&(e[r]^t[r]);e[r]^=i,t[r]^=i}}function u(e,t,r){for(let n=0;n<16;n++)e[n]=t[n]+r[n]}function h(e,t,r){for(let n=0;n<16;n++)e[n]=t[n]-r[n]}function d(e,t,r){let n,i,a=0,o=0,s=0,l=0,c=0,u=0,h=0,d=0,p=0,f=0,m=0,b=0,g=0,w=0,y=0,v=0,x=0,C=0,E=0,k=0,S=0,A=0,P=0,_=0,D=0,$=0,O=0,T=0,I=0,R=0,N=0,U=r[0],B=r[1],M=r[2],j=r[3],L=r[4],F=r[5],z=r[6],H=r[7],W=r[8],q=r[9],G=r[10],Z=r[11],V=r[12],K=r[13],Q=r[14],Y=r[15];a+=(n=t[0])*U,o+=n*B,s+=n*M,l+=n*j,c+=n*L,u+=n*F,h+=n*z,d+=n*H,p+=n*W,f+=n*q,m+=n*G,b+=n*Z,g+=n*V,w+=n*K,y+=n*Q,v+=n*Y,o+=(n=t[1])*U,s+=n*B,l+=n*M,c+=n*j,u+=n*L,h+=n*F,d+=n*z,p+=n*H,f+=n*W,m+=n*q,b+=n*G,g+=n*Z,w+=n*V,y+=n*K,v+=n*Q,x+=n*Y,s+=(n=t[2])*U,l+=n*B,c+=n*M,u+=n*j,h+=n*L,d+=n*F,p+=n*z,f+=n*H,m+=n*W,b+=n*q,g+=n*G,w+=n*Z,y+=n*V,v+=n*K,x+=n*Q,C+=n*Y,l+=(n=t[3])*U,c+=n*B,u+=n*M,h+=n*j,d+=n*L,p+=n*F,f+=n*z,m+=n*H,b+=n*W,g+=n*q,w+=n*G,y+=n*Z,v+=n*V,x+=n*K,C+=n*Q,E+=n*Y,c+=(n=t[4])*U,u+=n*B,h+=n*M,d+=n*j,p+=n*L,f+=n*F,m+=n*z,b+=n*H,g+=n*W,w+=n*q,y+=n*G,v+=n*Z,x+=n*V,C+=n*K,E+=n*Q,k+=n*Y,u+=(n=t[5])*U,h+=n*B,d+=n*M,p+=n*j,f+=n*L,m+=n*F,b+=n*z,g+=n*H,w+=n*W,y+=n*q,v+=n*G,x+=n*Z,C+=n*V,E+=n*K,k+=n*Q,S+=n*Y,h+=(n=t[6])*U,d+=n*B,p+=n*M,f+=n*j,m+=n*L,b+=n*F,g+=n*z,w+=n*H,y+=n*W,v+=n*q,x+=n*G,C+=n*Z,E+=n*V,k+=n*K,S+=n*Q,A+=n*Y,d+=(n=t[7])*U,p+=n*B,f+=n*M,m+=n*j,b+=n*L,g+=n*F,w+=n*z,y+=n*H,v+=n*W,x+=n*q,C+=n*G,E+=n*Z,k+=n*V,S+=n*K,A+=n*Q,P+=n*Y,p+=(n=t[8])*U,f+=n*B,m+=n*M,b+=n*j,g+=n*L,w+=n*F,y+=n*z,v+=n*H,x+=n*W,C+=n*q,E+=n*G,k+=n*Z,S+=n*V,A+=n*K,P+=n*Q,_+=n*Y,f+=(n=t[9])*U,m+=n*B,b+=n*M,g+=n*j,w+=n*L,y+=n*F,v+=n*z,x+=n*H,C+=n*W,E+=n*q,k+=n*G,S+=n*Z,A+=n*V,P+=n*K,_+=n*Q,D+=n*Y,m+=(n=t[10])*U,b+=n*B,g+=n*M,w+=n*j,y+=n*L,v+=n*F,x+=n*z,C+=n*H,E+=n*W,k+=n*q,S+=n*G,A+=n*Z,P+=n*V,_+=n*K,D+=n*Q,$+=n*Y,b+=(n=t[11])*U,g+=n*B,w+=n*M,y+=n*j,v+=n*L,x+=n*F,C+=n*z,E+=n*H,k+=n*W,S+=n*q,A+=n*G,P+=n*Z,_+=n*V,D+=n*K,$+=n*Q,O+=n*Y,g+=(n=t[12])*U,w+=n*B,y+=n*M,v+=n*j,x+=n*L,C+=n*F,E+=n*z,k+=n*H,S+=n*W,A+=n*q,P+=n*G,_+=n*Z,D+=n*V,$+=n*K,O+=n*Q,T+=n*Y,w+=(n=t[13])*U,y+=n*B,v+=n*M,x+=n*j,C+=n*L,E+=n*F,k+=n*z,S+=n*H,A+=n*W,P+=n*q,_+=n*G,D+=n*Z,$+=n*V,O+=n*K,T+=n*Q,I+=n*Y,y+=(n=t[14])*U,v+=n*B,x+=n*M,C+=n*j,E+=n*L,k+=n*F,S+=n*z,A+=n*H,P+=n*W,_+=n*q,D+=n*G,$+=n*Z,O+=n*V,T+=n*K,I+=n*Q,R+=n*Y,v+=(n=t[15])*U,x+=n*B,C+=n*M,E+=n*j,k+=n*L,S+=n*F,A+=n*z,P+=n*H,_+=n*W,D+=n*q,$+=n*G,O+=n*Z,T+=n*V,I+=n*K,R+=n*Q,N+=n*Y,a+=38*x,o+=38*C,s+=38*E,l+=38*k,c+=38*S,u+=38*A,h+=38*P,d+=38*_,p+=38*D,f+=38*$,m+=38*O,b+=38*T,g+=38*I,w+=38*R,y+=38*N,i=Math.floor((n=a+(i=1)+65535)/65536),a=n-65536*i,i=Math.floor((n=o+i+65535)/65536),o=n-65536*i,i=Math.floor((n=s+i+65535)/65536),s=n-65536*i,i=Math.floor((n=l+i+65535)/65536),l=n-65536*i,i=Math.floor((n=c+i+65535)/65536),c=n-65536*i,i=Math.floor((n=u+i+65535)/65536),u=n-65536*i,i=Math.floor((n=h+i+65535)/65536),h=n-65536*i,i=Math.floor((n=d+i+65535)/65536),d=n-65536*i,i=Math.floor((n=p+i+65535)/65536),p=n-65536*i,i=Math.floor((n=f+i+65535)/65536),f=n-65536*i,i=Math.floor((n=m+i+65535)/65536),m=n-65536*i,i=Math.floor((n=b+i+65535)/65536),b=n-65536*i,i=Math.floor((n=g+i+65535)/65536),g=n-65536*i,i=Math.floor((n=w+i+65535)/65536),w=n-65536*i,i=Math.floor((n=y+i+65535)/65536),y=n-65536*i,i=Math.floor((n=v+i+65535)/65536),v=n-65536*i,a+=i-1+37*(i-1),i=Math.floor((n=a+(i=1)+65535)/65536),a=n-65536*i,i=Math.floor((n=o+i+65535)/65536),o=n-65536*i,i=Math.floor((n=s+i+65535)/65536),s=n-65536*i,i=Math.floor((n=l+i+65535)/65536),l=n-65536*i,i=Math.floor((n=c+i+65535)/65536),c=n-65536*i,i=Math.floor((n=u+i+65535)/65536),u=n-65536*i,i=Math.floor((n=h+i+65535)/65536),h=n-65536*i,i=Math.floor((n=d+i+65535)/65536),d=n-65536*i,i=Math.floor((n=p+i+65535)/65536),p=n-65536*i,i=Math.floor((n=f+i+65535)/65536),f=n-65536*i,i=Math.floor((n=m+i+65535)/65536),m=n-65536*i,i=Math.floor((n=b+i+65535)/65536),b=n-65536*i,i=Math.floor((n=g+i+65535)/65536),g=n-65536*i,i=Math.floor((n=w+i+65535)/65536),w=n-65536*i,i=Math.floor((n=y+i+65535)/65536),y=n-65536*i,i=Math.floor((n=v+i+65535)/65536),v=n-65536*i,a+=i-1+37*(i-1),e[0]=a,e[1]=o,e[2]=s,e[3]=l,e[4]=c,e[5]=u,e[6]=h,e[7]=d,e[8]=p,e[9]=f,e[10]=m,e[11]=b,e[12]=g,e[13]=w,e[14]=y,e[15]=v}function p(e,t){let r=new Uint8Array(32),n=new Float64Array(80),i=a(),o=a(),p=a(),f=a(),m=a(),b=a();for(let t=0;t<31;t++)r[t]=e[t];r[31]=127&e[31]|64,r[0]&=248,function(e,t){for(let r=0;r<16;r++)e[r]=t[2*r]+(t[2*r+1]<<8);e[15]&=32767}(n,t);for(let e=0;e<16;e++)o[e]=n[e];i[0]=f[0]=1;for(let e=254;e>=0;--e){let t=r[e>>>3]>>>(7&e)&1;c(i,o,t),c(p,f,t),u(m,i,p),h(i,i,p),u(p,o,f),h(o,o,f),d(f,m,m),d(b,i,i),d(i,p,i),d(p,o,m),u(m,i,p),h(i,i,p),d(o,i,i),h(p,f,b),d(i,p,s),u(i,i,f),d(p,p,i),d(i,f,b),d(f,o,n),d(o,m,m),c(i,o,t),c(p,f,t)}for(let e=0;e<16;e++)n[e+16]=i[e],n[e+32]=p[e],n[e+48]=o[e],n[e+64]=f[e];let g=n.subarray(32),w=n.subarray(16);!function(e,t){let r=a();for(let e=0;e<16;e++)r[e]=t[e];for(let e=253;e>=0;e--)d(r,r,r),2!==e&&4!==e&&d(r,r,t);for(let t=0;t<16;t++)e[t]=r[t]}(g,g),d(w,w,g);let y=new Uint8Array(32);return!function(e,t){let r=a(),n=a();for(let e=0;e<16;e++)n[e]=t[e];l(n),l(n),l(n);for(let e=0;e<2;e++){r[0]=n[0]-65517;for(let e=1;e<15;e++)r[e]=n[e]-65535-(r[e-1]>>16&1),r[e-1]&=65535;r[15]=n[15]-32767-(r[14]>>16&1);let e=r[15]>>16&1;r[14]&=65535,c(n,r,1-e)}for(let t=0;t<16;t++)e[2*t]=255&n[t],e[2*t+1]=n[t]>>8}(y,w),y}t.Au=function(e){let r=(0,n.randomBytes)(32,e),a=function(e){if(e.length!==t.KS)throw Error(`x25519: seed must be ${t.KS} bytes`);let r=new Uint8Array(e),n=p(r,o);return{publicKey:n,secretKey:r}}(r);return(0,i.wipe)(r),a},t.gi=function(e,r,n=!1){if(e.length!==t.kz)throw Error("X25519: incorrect secret key length");if(r.length!==t.kz)throw Error("X25519: incorrect public key length");let i=p(e,r);if(n){let e=0;for(let t=0;t<i.length;t++)e|=i[t];if(0===e)throw Error("X25519: invalid shared key")}return i}},69528:function(e,t,r){"use strict";let n=r(70610),i=r(44020),a=r(80500),o=r(92806),s=e=>null==e,l=Symbol("encodeFragmentIdentifier");function c(e){if("string"!=typeof e||1!==e.length)throw TypeError("arrayFormatSeparator must be single character string")}function u(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}function h(e,t){return t.decode?i(e):e}function d(e){let t=e.indexOf("#");return -1!==t&&(e=e.slice(0,t)),e}function p(e){e=d(e);let t=e.indexOf("?");return -1===t?"":e.slice(t+1)}function f(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):t.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())&&(e="true"===e.toLowerCase()),e}function m(e,t){c((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);let r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{if(t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),!t){n[e]=r;return}void 0===n[e]&&(n[e]={}),n[e][t[1]]=r};case"bracket":return(e,r,n)=>{if(t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),!t){n[e]=r;return}if(void 0===n[e]){n[e]=[r];return}n[e]=[].concat(n[e],r)};case"colon-list-separator":return(e,r,n)=>{if(t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),!t){n[e]=r;return}if(void 0===n[e]){n[e]=[r];return}n[e]=[].concat(n[e],r)};case"comma":case"separator":return(t,r,n)=>{let i="string"==typeof r&&r.includes(e.arrayFormatSeparator),a="string"==typeof r&&!i&&h(r,e).includes(e.arrayFormatSeparator);r=a?h(r,e):r;let o=i||a?r.split(e.arrayFormatSeparator).map(t=>h(t,e)):null===r?r:h(r,e);n[t]=o};case"bracket-separator":return(t,r,n)=>{let i=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!i){n[t]=r?h(r,e):r;return}let a=null===r?[]:r.split(e.arrayFormatSeparator).map(t=>h(t,e));if(void 0===n[t]){n[t]=a;return}n[t]=[].concat(n[t],a)};default:return(e,t,r)=>{if(void 0===r[e]){r[e]=t;return}r[e]=[].concat(r[e],t)}}}(t),n=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return n;for(let i of e.split("&")){if(""===i)continue;let[e,o]=a(t.decode?i.replace(/\+/g," "):i,"=");o=void 0===o?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?o:h(o,t),r(h(e,t),o,n)}for(let e of Object.keys(n)){let r=n[e];if("object"==typeof r&&null!==r)for(let e of Object.keys(r))r[e]=f(r[e],t);else n[e]=f(r,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((e,t)=>{let r=n[t];return r&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):e[t]=r,e},Object.create(null))}t.extract=p,t.parse=m,t.stringify=(e,t)=>{if(!e)return"";c((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);let r=r=>t.skipNull&&s(e[r])||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{let i=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[u(t,e),"[",i,"]"].join("")]:[...r,[u(t,e),"[",u(i,e),"]=",u(n,e)].join("")]};case"bracket":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[u(t,e),"[]"].join("")]:[...r,[u(t,e),"[]=",u(n,e)].join("")];case"colon-list-separator":return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,[u(t,e),":list="].join("")]:[...r,[u(t,e),":list=",u(n,e)].join("")];case"comma":case"separator":case"bracket-separator":{let t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,i)=>void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i?n:(i=null===i?"":i,0===n.length)?[[u(r,e),t,u(i,e)].join("")]:[[n,u(i,e)].join(e.arrayFormatSeparator)]}default:return t=>(r,n)=>void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n?r:null===n?[...r,u(t,e)]:[...r,[u(t,e),"=",u(n,e)].join("")]}}(t),i={};for(let t of Object.keys(e))r(t)||(i[t]=e[t]);let a=Object.keys(i);return!1!==t.sort&&a.sort(t.sort),a.map(r=>{let i=e[r];return void 0===i?"":null===i?u(r,t):Array.isArray(i)?0===i.length&&"bracket-separator"===t.arrayFormat?u(r,t)+"[]":i.reduce(n(r),[]).join("&"):u(r,t)+"="+u(i,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);let[r,n]=a(e,"#");return Object.assign({url:r.split("?")[0]||"",query:m(p(e),t)},t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:h(n,t)}:{})},t.stringifyUrl=(e,r)=>{r=Object.assign({encode:!0,strict:!0,[l]:!0},r);let n=d(e.url).split("?")[0]||"",i=t.extract(e.url),a=t.parse(i,{sort:!1}),o=Object.assign(a,e.query),s=t.stringify(o,r);s&&(s=`?${s}`);let c=function(e){let t="",r=e.indexOf("#");return -1!==r&&(t=e.slice(r)),t}(e.url);return e.fragmentIdentifier&&(c=`#${r[l]?u(e.fragmentIdentifier,r):e.fragmentIdentifier}`),`${n}${s}${c}`},t.pick=(e,r,n)=>{n=Object.assign({parseFragmentIdentifier:!0,[l]:!1},n);let{url:i,query:a,fragmentIdentifier:s}=t.parseUrl(e,n);return t.stringifyUrl({url:i,query:o(a,r),fragmentIdentifier:s},n)},t.exclude=(e,r,n)=>{let i=Array.isArray(r)?e=>!r.includes(e):(e,t)=>!r(e,t);return t.pick(e,i,n)}},60075:function(e,t,r){"use strict";r.d(t,{RELAY_JSONRPC:function(){return n}}),r(61882);let n={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}}},61882:function(){},36900:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=r(30004);n.__exportStar(r(46869),t),n.__exportStar(r(88033),t)},46869:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_THOUSAND=t.ONE_HUNDRED=void 0,t.ONE_HUNDRED=100,t.ONE_THOUSAND=1e3},88033:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_YEAR=t.FOUR_WEEKS=t.THREE_WEEKS=t.TWO_WEEKS=t.ONE_WEEK=t.THIRTY_DAYS=t.SEVEN_DAYS=t.FIVE_DAYS=t.THREE_DAYS=t.ONE_DAY=t.TWENTY_FOUR_HOURS=t.TWELVE_HOURS=t.SIX_HOURS=t.THREE_HOURS=t.ONE_HOUR=t.SIXTY_MINUTES=t.THIRTY_MINUTES=t.TEN_MINUTES=t.FIVE_MINUTES=t.ONE_MINUTE=t.SIXTY_SECONDS=t.THIRTY_SECONDS=t.TEN_SECONDS=t.FIVE_SECONDS=t.ONE_SECOND=void 0,t.ONE_SECOND=1,t.FIVE_SECONDS=5,t.TEN_SECONDS=10,t.THIRTY_SECONDS=30,t.SIXTY_SECONDS=60,t.ONE_MINUTE=t.SIXTY_SECONDS,t.FIVE_MINUTES=5*t.ONE_MINUTE,t.TEN_MINUTES=10*t.ONE_MINUTE,t.THIRTY_MINUTES=30*t.ONE_MINUTE,t.SIXTY_MINUTES=60*t.ONE_MINUTE,t.ONE_HOUR=t.SIXTY_MINUTES,t.THREE_HOURS=3*t.ONE_HOUR,t.SIX_HOURS=6*t.ONE_HOUR,t.TWELVE_HOURS=12*t.ONE_HOUR,t.TWENTY_FOUR_HOURS=24*t.ONE_HOUR,t.ONE_DAY=t.TWENTY_FOUR_HOURS,t.THREE_DAYS=3*t.ONE_DAY,t.FIVE_DAYS=5*t.ONE_DAY,t.SEVEN_DAYS=7*t.ONE_DAY,t.THIRTY_DAYS=30*t.ONE_DAY,t.ONE_WEEK=t.SEVEN_DAYS,t.TWO_WEEKS=2*t.ONE_WEEK,t.THREE_WEEKS=3*t.ONE_WEEK,t.FOUR_WEEKS=4*t.ONE_WEEK,t.ONE_YEAR=365*t.ONE_DAY},66736:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=r(30004);n.__exportStar(r(44273),t),n.__exportStar(r(47001),t),n.__exportStar(r(52939),t),n.__exportStar(r(36900),t)},52939:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=r(30004);n.__exportStar(r(88766),t)},88766:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IWatch=void 0,t.IWatch=class{}},83207:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fromMiliseconds=t.toMiliseconds=void 0;let n=r(36900);t.toMiliseconds=function(e){return e*n.ONE_THOUSAND},t.fromMiliseconds=function(e){return Math.floor(e/n.ONE_THOUSAND)}},83873:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delay=void 0,t.delay=function(e){return new Promise(t=>{setTimeout(()=>{t(!0)},e)})}},44273:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let n=r(30004);n.__exportStar(r(83873),t),n.__exportStar(r(83207),t)},47001:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Watch=void 0;class r{constructor(){this.timestamps=new Map}start(e){if(this.timestamps.has(e))throw Error(`Watch already started for label: ${e}`);this.timestamps.set(e,{started:Date.now()})}stop(e){let t=this.get(e);if(void 0!==t.elapsed)throw Error(`Watch already stopped for label: ${e}`);let r=Date.now()-t.started;this.timestamps.set(e,{started:t.started,elapsed:r})}get(e){let t=this.timestamps.get(e);if(void 0===t)throw Error(`No timestamp found for label: ${e}`);return t}elapsed(e){let t=this.get(e),r=t.elapsed||Date.now()-t.started;return r}}t.Watch=r,t.default=r},30004:function(e,t,r){"use strict";r.r(t),r.d(t,{__assign:function(){return a},__asyncDelegator:function(){return v},__asyncGenerator:function(){return y},__asyncValues:function(){return x},__await:function(){return w},__awaiter:function(){return u},__classPrivateFieldGet:function(){return S},__classPrivateFieldSet:function(){return A},__createBinding:function(){return d},__decorate:function(){return s},__exportStar:function(){return p},__extends:function(){return i},__generator:function(){return h},__importDefault:function(){return k},__importStar:function(){return E},__makeTemplateObject:function(){return C},__metadata:function(){return c},__param:function(){return l},__read:function(){return m},__rest:function(){return o},__spread:function(){return b},__spreadArrays:function(){return g},__values:function(){return f}});/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var n=function(e,t){return(n=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function i(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}var a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function o(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)0>t.indexOf(n[i])&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]]);return r}function s(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}function l(e,t){return function(r,n){t(r,n,e)}}function c(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function u(e,t,r,n){return new(r||(r=Promise))(function(i,a){function o(e){try{l(n.next(e))}catch(e){a(e)}}function s(e){try{l(n.throw(e))}catch(e){a(e)}}function l(e){var t;e.done?i(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(o,s)}l((n=n.apply(e,t||[])).next())})}function h(e,t){var r,n,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function s(a){return function(s){return function(a){if(r)throw TypeError("Generator is already executing.");for(;o;)try{if(r=1,n&&(i=2&a[0]?n.return:a[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,a[1])).done)return i;switch(n=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return o.label++,{value:a[1],done:!1};case 5:o.label++,n=a[1],a=[0];continue;case 7:a=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){o=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){o.label=a[1];break}if(6===a[0]&&o.label<i[1]){o.label=i[1],i=a;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(a);break}i[2]&&o.ops.pop(),o.trys.pop();continue}a=t.call(e,o)}catch(e){a=[6,e],n=0}finally{r=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,s])}}}function d(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}function p(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||(t[r]=e[r])}function f(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function m(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,i,a=r.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)o.push(n.value)}catch(e){i={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(i)throw i.error}}return o}function b(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(m(arguments[t]));return e}function g(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;for(var n=Array(e),i=0,t=0;t<r;t++)for(var a=arguments[t],o=0,s=a.length;o<s;o++,i++)n[i]=a[o];return n}function w(e){return this instanceof w?(this.v=e,this):new w(e)}function y(e,t,r){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var n,i=r.apply(e,t||[]),a=[];return n={},o("next"),o("throw"),o("return"),n[Symbol.asyncIterator]=function(){return this},n;function o(e){i[e]&&(n[e]=function(t){return new Promise(function(r,n){a.push([e,t,r,n])>1||s(e,t)})})}function s(e,t){try{var r;(r=i[e](t)).value instanceof w?Promise.resolve(r.value.v).then(l,c):u(a[0][2],r)}catch(e){u(a[0][3],e)}}function l(e){s("next",e)}function c(e){s("throw",e)}function u(e,t){e(t),a.shift(),a.length&&s(a[0][0],a[0][1])}}function v(e){var t,r;return t={},n("next"),n("throw",function(e){throw e}),n("return"),t[Symbol.iterator]=function(){return this},t;function n(n,i){t[n]=e[n]?function(t){return(r=!r)?{value:w(e[n](t)),done:"return"===n}:i?i(t):t}:i}}function x(e){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=f(e),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(r){t[r]=e[r]&&function(t){return new Promise(function(n,i){!function(e,t,r,n){Promise.resolve(n).then(function(t){e({value:t,done:r})},t)}(n,i,(t=e[r](t)).done,t.value)})}}}function C(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function E(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function k(e){return e&&e.__esModule?e:{default:e}}function S(e,t){if(!t.has(e))throw TypeError("attempted to get private field on non-instance");return t.get(e)}function A(e,t,r){if(!t.has(e))throw TypeError("attempted to set private field on non-instance");return t.set(e,r),r}},62873:function(e,t){"use strict";function r(e){let t;return"undefined"!=typeof window&&void 0!==window[e]&&(t=window[e]),t}function n(e){let t=r(e);if(!t)throw Error(`${e} is not defined in Window`);return t}Object.defineProperty(t,"__esModule",{value:!0}),t.getLocalStorage=t.getLocalStorageOrThrow=t.getCrypto=t.getCryptoOrThrow=t.getLocation=t.getLocationOrThrow=t.getNavigator=t.getNavigatorOrThrow=t.getDocument=t.getDocumentOrThrow=t.getFromWindowOrThrow=t.getFromWindow=void 0,t.getFromWindow=r,t.getFromWindowOrThrow=n,t.getDocumentOrThrow=function(){return n("document")},t.getDocument=function(){return r("document")},t.getNavigatorOrThrow=function(){return n("navigator")},t.getNavigator=function(){return r("navigator")},t.getLocationOrThrow=function(){return n("location")},t.getLocation=function(){return r("location")},t.getCryptoOrThrow=function(){return n("crypto")},t.getCrypto=function(){return r("crypto")},t.getLocalStorageOrThrow=function(){return n("localStorage")},t.getLocalStorage=function(){return r("localStorage")}},65755:function(e,t,r){"use strict";t.D=void 0;let n=r(62873);t.D=function(){let e,t,r;try{e=n.getDocumentOrThrow(),t=n.getLocationOrThrow()}catch(e){return null}function i(...t){let r=e.getElementsByTagName("meta");for(let e=0;e<r.length;e++){let n=r[e],i=["itemprop","property","name"].map(e=>n.getAttribute(e)).filter(e=>!!e&&t.includes(e));if(i.length&&i){let e=n.getAttribute("content");if(e)return e}}return""}let a=((r=i("name","og:site_name","og:title","twitter:title"))||(r=e.title),r),o=function(){let e=i("description","og:description","twitter:description","keywords");return e}(),s=t.origin,l=function(){let r=e.getElementsByTagName("link"),n=[];for(let e=0;e<r.length;e++){let i=r[e],a=i.getAttribute("rel");if(a&&a.toLowerCase().indexOf("icon")>-1){let e=i.getAttribute("href");if(e){if(-1===e.toLowerCase().indexOf("https:")&&-1===e.toLowerCase().indexOf("http:")&&0!==e.indexOf("//")){let r=t.protocol+"//"+t.host;if(0===e.indexOf("/"))r+=e;else{let n=t.pathname.split("/");n.pop();let i=n.join("/");r+=i+"/"+e}n.push(r)}else if(0===e.indexOf("//")){let r=t.protocol+e;n.push(r)}else n.push(e)}}}return n}();return{description:o,url:s,icons:l,name:a}}},79742:function(e,t){"use strict";t.byteLength=function(e){var t=l(e),r=t[0],n=t[1];return(r+n)*3/4-n},t.toByteArray=function(e){var t,r,a=l(e),o=a[0],s=a[1],c=new i((o+s)*3/4-s),u=0,h=s>0?o-4:o;for(r=0;r<h;r+=4)t=n[e.charCodeAt(r)]<<18|n[e.charCodeAt(r+1)]<<12|n[e.charCodeAt(r+2)]<<6|n[e.charCodeAt(r+3)],c[u++]=t>>16&255,c[u++]=t>>8&255,c[u++]=255&t;return 2===s&&(t=n[e.charCodeAt(r)]<<2|n[e.charCodeAt(r+1)]>>4,c[u++]=255&t),1===s&&(t=n[e.charCodeAt(r)]<<10|n[e.charCodeAt(r+1)]<<4|n[e.charCodeAt(r+2)]>>2,c[u++]=t>>8&255,c[u++]=255&t),c},t.fromByteArray=function(e){for(var t,n=e.length,i=n%3,a=[],o=0,s=n-i;o<s;o+=16383)a.push(function(e,t,n){for(var i,a=[],o=t;o<n;o+=3)a.push(r[(i=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(255&e[o+2]))>>18&63]+r[i>>12&63]+r[i>>6&63]+r[63&i]);return a.join("")}(e,o,o+16383>s?s:o+16383));return 1===i?a.push(r[(t=e[n-1])>>2]+r[t<<4&63]+"=="):2===i&&a.push(r[(t=(e[n-2]<<8)+e[n-1])>>10]+r[t>>4&63]+r[t<<2&63]+"="),a.join("")};for(var r=[],n=[],i="undefined"!=typeof Uint8Array?Uint8Array:Array,a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",o=0,s=a.length;o<s;++o)r[o]=a[o],n[a.charCodeAt(o)]=o;function l(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");-1===r&&(r=t);var n=r===t?0:4-r%4;return[r,n]}n["-".charCodeAt(0)]=62,n["_".charCodeAt(0)]=63},48764:function(e,t,r){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */let n=r(79742),i=r(80645),a="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function o(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,s.prototype),t}function s(e,t,r){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return u(e)}return l(e,t,r)}function l(e,t,r){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!s.isEncoding(t))throw TypeError("Unknown encoding: "+t);let r=0|f(e,t),n=o(r),i=n.write(e,t);return i!==r&&(n=n.slice(0,i)),n}(e,t);if(ArrayBuffer.isView(e))return function(e){if(B(e,Uint8Array)){let t=new Uint8Array(e);return d(t.buffer,t.byteOffset,t.byteLength)}return h(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(B(e,ArrayBuffer)||e&&B(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(B(e,SharedArrayBuffer)||e&&B(e.buffer,SharedArrayBuffer)))return d(e,t,r);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let n=e.valueOf&&e.valueOf();if(null!=n&&n!==e)return s.from(n,t,r);let i=function(e){var t;if(s.isBuffer(e)){let t=0|p(e.length),r=o(t);return 0===r.length||e.copy(r,0,0,t),r}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?o(0):h(e):"Buffer"===e.type&&Array.isArray(e.data)?h(e.data):void 0}(e);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return s.from(e[Symbol.toPrimitive]("string"),t,r);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function c(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function u(e){return c(e),o(e<0?0:0|p(e))}function h(e){let t=e.length<0?0:0|p(e.length),r=o(t);for(let n=0;n<t;n+=1)r[n]=255&e[n];return r}function d(e,t,r){let n;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),s.prototype),n}function p(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function f(e,t){if(s.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||B(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let r=e.length,n=arguments.length>2&&!0===arguments[2];if(!n&&0===r)return 0;let i=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return r;case"utf8":case"utf-8":return R(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*r;case"hex":return r>>>1;case"base64":return N(e).length;default:if(i)return n?-1:R(e).length;t=(""+t).toLowerCase(),i=!0}}function m(e,t,r){let i=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===r||r>this.length)&&(r=this.length),r<=0||(r>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,r){let n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);let i="";for(let n=t;n<r;++n)i+=M[e[n]];return i}(this,t,r);case"utf8":case"utf-8":return y(this,t,r);case"ascii":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}(this,t,r);case"latin1":case"binary":return function(e,t,r){let n="";r=Math.min(e.length,r);for(let i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}(this,t,r);case"base64":var a,o;return a=t,o=r,0===a&&o===this.length?n.fromByteArray(this):n.fromByteArray(this.slice(a,o));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,r){let n=e.slice(t,r),i="";for(let e=0;e<n.length-1;e+=2)i+=String.fromCharCode(n[e]+256*n[e+1]);return i}(this,t,r);default:if(i)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),i=!0}}function b(e,t,r){let n=e[t];e[t]=e[r],e[r]=n}function g(e,t,r,n,i){var a;if(0===e.length)return -1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),(a=r=+r)!=a&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return -1;r=e.length-1}else if(r<0){if(!i)return -1;r=0}if("string"==typeof t&&(t=s.from(t,n)),s.isBuffer(t))return 0===t.length?-1:w(e,t,r,n,i);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):w(e,[t],r,n,i);throw TypeError("val must be string, number or Buffer")}function w(e,t,r,n,i){let a,o=1,s=e.length,l=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return -1;o=2,s/=2,l/=2,r/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){let n=-1;for(a=r;a<s;a++)if(c(e,a)===c(t,-1===n?0:a-n)){if(-1===n&&(n=a),a-n+1===l)return n*o}else -1!==n&&(a-=a-n),n=-1}else for(r+l>s&&(r=s-l),a=r;a>=0;a--){let r=!0;for(let n=0;n<l;n++)if(c(e,a+n)!==c(t,n)){r=!1;break}if(r)return a}return -1}function y(e,t,r){r=Math.min(e.length,r);let n=[],i=t;for(;i<r;){let t=e[i],a=null,o=t>239?4:t>223?3:t>191?2:1;if(i+o<=r){let r,n,s,l;switch(o){case 1:t<128&&(a=t);break;case 2:(192&(r=e[i+1]))==128&&(l=(31&t)<<6|63&r)>127&&(a=l);break;case 3:r=e[i+1],n=e[i+2],(192&r)==128&&(192&n)==128&&(l=(15&t)<<12|(63&r)<<6|63&n)>2047&&(l<55296||l>57343)&&(a=l);break;case 4:r=e[i+1],n=e[i+2],s=e[i+3],(192&r)==128&&(192&n)==128&&(192&s)==128&&(l=(15&t)<<18|(63&r)<<12|(63&n)<<6|63&s)>65535&&l<1114112&&(a=l)}}null===a?(a=65533,o=1):a>65535&&(a-=65536,n.push(a>>>10&1023|55296),a=56320|1023&a),n.push(a),i+=o}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=4096));return r}(n)}function v(e,t,r){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>r)throw RangeError("Trying to access beyond buffer length")}function x(e,t,r,n,i,a){if(!s.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<a)throw RangeError('"value" argument is out of bounds');if(r+n>e.length)throw RangeError("Index out of range")}function C(e,t,r,n,i){$(t,n,i,e,r,7);let a=Number(t&BigInt(4294967295));e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,r}function E(e,t,r,n,i){$(t,n,i,e,r,7);let a=Number(t&BigInt(4294967295));e[r+7]=a,a>>=8,e[r+6]=a,a>>=8,e[r+5]=a,a>>=8,e[r+4]=a;let o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=o,o>>=8,e[r+2]=o,o>>=8,e[r+1]=o,o>>=8,e[r]=o,r+8}function k(e,t,r,n,i,a){if(r+n>e.length||r<0)throw RangeError("Index out of range")}function S(e,t,r,n,a){return t=+t,r>>>=0,a||k(e,t,r,4,34028234663852886e22,-34028234663852886e22),i.write(e,t,r,n,23,4),r+4}function A(e,t,r,n,a){return t=+t,r>>>=0,a||k(e,t,r,8,17976931348623157e292,-17976931348623157e292),i.write(e,t,r,n,52,8),r+8}t.Buffer=s,t.SlowBuffer=function(e){return+e!=e&&(e=0),s.alloc(+e)},t.INSPECT_MAX_BYTES=50,t.kMaxLength=2147483647,s.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),s.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(s.prototype,"parent",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.buffer}}),Object.defineProperty(s.prototype,"offset",{enumerable:!0,get:function(){if(s.isBuffer(this))return this.byteOffset}}),s.poolSize=8192,s.from=function(e,t,r){return l(e,t,r)},Object.setPrototypeOf(s.prototype,Uint8Array.prototype),Object.setPrototypeOf(s,Uint8Array),s.alloc=function(e,t,r){return(c(e),e<=0)?o(e):void 0!==t?"string"==typeof r?o(e).fill(t,r):o(e).fill(t):o(e)},s.allocUnsafe=function(e){return u(e)},s.allocUnsafeSlow=function(e){return u(e)},s.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==s.prototype},s.compare=function(e,t){if(B(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),B(t,Uint8Array)&&(t=s.from(t,t.offset,t.byteLength)),!s.isBuffer(e)||!s.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let r=e.length,n=t.length;for(let i=0,a=Math.min(r,n);i<a;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},s.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},s.concat=function(e,t){let r;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return s.alloc(0);if(void 0===t)for(r=0,t=0;r<e.length;++r)t+=e[r].length;let n=s.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){let t=e[r];if(B(t,Uint8Array))i+t.length>n.length?(s.isBuffer(t)||(t=s.from(t)),t.copy(n,i)):Uint8Array.prototype.set.call(n,t,i);else if(s.isBuffer(t))t.copy(n,i);else throw TypeError('"list" argument must be an Array of Buffers');i+=t.length}return n},s.byteLength=f,s.prototype._isBuffer=!0,s.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)b(this,t,t+1);return this},s.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)b(this,t,t+3),b(this,t+1,t+2);return this},s.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)b(this,t,t+7),b(this,t+1,t+6),b(this,t+2,t+5),b(this,t+3,t+4);return this},s.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?y(this,0,e):m.apply(this,arguments)},s.prototype.toLocaleString=s.prototype.toString,s.prototype.equals=function(e){if(!s.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===s.compare(this,e)},s.prototype.inspect=function(){let e="",r=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,r).replace(/(.{2})/g,"$1 ").trim(),this.length>r&&(e+=" ... "),"<Buffer "+e+">"},a&&(s.prototype[a]=s.prototype.inspect),s.prototype.compare=function(e,t,r,n,i){if(B(e,Uint8Array)&&(e=s.from(e,e.offset,e.byteLength)),!s.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===r&&(r=e?e.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),t<0||r>e.length||n<0||i>this.length)throw RangeError("out of range index");if(n>=i&&t>=r)return 0;if(n>=i)return -1;if(t>=r)return 1;if(t>>>=0,r>>>=0,n>>>=0,i>>>=0,this===e)return 0;let a=i-n,o=r-t,l=Math.min(a,o),c=this.slice(n,i),u=e.slice(t,r);for(let e=0;e<l;++e)if(c[e]!==u[e]){a=c[e],o=u[e];break}return a<o?-1:o<a?1:0},s.prototype.includes=function(e,t,r){return -1!==this.indexOf(e,t,r)},s.prototype.indexOf=function(e,t,r){return g(this,e,t,r,!0)},s.prototype.lastIndexOf=function(e,t,r){return g(this,e,t,r,!1)},s.prototype.write=function(e,t,r,n){var i,a,o,s,l,c,u,h;if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let d=this.length-t;if((void 0===r||r>d)&&(r=d),e.length>0&&(r<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");n||(n="utf8");let p=!1;for(;;)switch(n){case"hex":return function(e,t,r,n){let i;r=Number(r)||0;let a=e.length-r;n?(n=Number(n))>a&&(n=a):n=a;let o=t.length;for(n>o/2&&(n=o/2),i=0;i<n;++i){let n=parseInt(t.substr(2*i,2),16);if(n!=n)break;e[r+i]=n}return i}(this,e,t,r);case"utf8":case"utf-8":return i=t,a=r,U(R(e,this.length-i),this,i,a);case"ascii":case"latin1":case"binary":return o=t,s=r,U(function(e){let t=[];for(let r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(e),this,o,s);case"base64":return l=t,c=r,U(N(e),this,l,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return u=t,h=r,U(function(e,t){let r,n;let i=[];for(let a=0;a<e.length&&!((t-=2)<0);++a)n=(r=e.charCodeAt(a))>>8,i.push(r%256),i.push(n);return i}(e,this.length-u),this,u,h);default:if(p)throw TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),p=!0}},s.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},s.prototype.slice=function(e,t){let r=this.length;e=~~e,t=void 0===t?r:~~t,e<0?(e+=r)<0&&(e=0):e>r&&(e=r),t<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);let n=this.subarray(e,t);return Object.setPrototypeOf(n,s.prototype),n},s.prototype.readUintLE=s.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||v(e,t,this.length);let n=this[e],i=1,a=0;for(;++a<t&&(i*=256);)n+=this[e+a]*i;return n},s.prototype.readUintBE=s.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||v(e,t,this.length);let n=this[e+--t],i=1;for(;t>0&&(i*=256);)n+=this[e+--t]*i;return n},s.prototype.readUint8=s.prototype.readUInt8=function(e,t){return e>>>=0,t||v(e,1,this.length),this[e]},s.prototype.readUint16LE=s.prototype.readUInt16LE=function(e,t){return e>>>=0,t||v(e,2,this.length),this[e]|this[e+1]<<8},s.prototype.readUint16BE=s.prototype.readUInt16BE=function(e,t){return e>>>=0,t||v(e,2,this.length),this[e]<<8|this[e+1]},s.prototype.readUint32LE=s.prototype.readUInt32LE=function(e,t){return e>>>=0,t||v(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},s.prototype.readUint32BE=s.prototype.readUInt32BE=function(e,t){return e>>>=0,t||v(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},s.prototype.readBigUInt64LE=j(function(e){O(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&T(e,this.length-8);let n=t+256*this[++e]+65536*this[++e]+16777216*this[++e],i=this[++e]+256*this[++e]+65536*this[++e]+16777216*r;return BigInt(n)+(BigInt(i)<<BigInt(32))}),s.prototype.readBigUInt64BE=j(function(e){O(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&T(e,this.length-8);let n=16777216*t+65536*this[++e]+256*this[++e]+this[++e],i=16777216*this[++e]+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)}),s.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||v(e,t,this.length);let n=this[e],i=1,a=0;for(;++a<t&&(i*=256);)n+=this[e+a]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},s.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||v(e,t,this.length);let n=t,i=1,a=this[e+--n];for(;n>0&&(i*=256);)a+=this[e+--n]*i;return a>=(i*=128)&&(a-=Math.pow(2,8*t)),a},s.prototype.readInt8=function(e,t){return(e>>>=0,t||v(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},s.prototype.readInt16LE=function(e,t){e>>>=0,t||v(e,2,this.length);let r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt16BE=function(e,t){e>>>=0,t||v(e,2,this.length);let r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},s.prototype.readInt32LE=function(e,t){return e>>>=0,t||v(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},s.prototype.readInt32BE=function(e,t){return e>>>=0,t||v(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},s.prototype.readBigInt64LE=j(function(e){O(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&T(e,this.length-8);let n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+16777216*this[++e])}),s.prototype.readBigInt64BE=j(function(e){O(e>>>=0,"offset");let t=this[e],r=this[e+7];(void 0===t||void 0===r)&&T(e,this.length-8);let n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+r)}),s.prototype.readFloatLE=function(e,t){return e>>>=0,t||v(e,4,this.length),i.read(this,e,!0,23,4)},s.prototype.readFloatBE=function(e,t){return e>>>=0,t||v(e,4,this.length),i.read(this,e,!1,23,4)},s.prototype.readDoubleLE=function(e,t){return e>>>=0,t||v(e,8,this.length),i.read(this,e,!0,52,8)},s.prototype.readDoubleBE=function(e,t){return e>>>=0,t||v(e,8,this.length),i.read(this,e,!1,52,8)},s.prototype.writeUintLE=s.prototype.writeUIntLE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;x(this,e,t,r,n,0)}let i=1,a=0;for(this[t]=255&e;++a<r&&(i*=256);)this[t+a]=e/i&255;return t+r},s.prototype.writeUintBE=s.prototype.writeUIntBE=function(e,t,r,n){if(e=+e,t>>>=0,r>>>=0,!n){let n=Math.pow(2,8*r)-1;x(this,e,t,r,n,0)}let i=r-1,a=1;for(this[t+i]=255&e;--i>=0&&(a*=256);)this[t+i]=e/a&255;return t+r},s.prototype.writeUint8=s.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,1,255,0),this[t]=255&e,t+1},s.prototype.writeUint16LE=s.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},s.prototype.writeUint16BE=s.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},s.prototype.writeUint32LE=s.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},s.prototype.writeUint32BE=s.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},s.prototype.writeBigUInt64LE=j(function(e,t=0){return C(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeBigUInt64BE=j(function(e,t=0){return E(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),s.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);x(this,e,t,r,n-1,-n)}let i=0,a=1,o=0;for(this[t]=255&e;++i<r&&(a*=256);)e<0&&0===o&&0!==this[t+i-1]&&(o=1),this[t+i]=(e/a>>0)-o&255;return t+r},s.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){let n=Math.pow(2,8*r-1);x(this,e,t,r,n-1,-n)}let i=r-1,a=1,o=0;for(this[t+i]=255&e;--i>=0&&(a*=256);)e<0&&0===o&&0!==this[t+i+1]&&(o=1),this[t+i]=(e/a>>0)-o&255;return t+r},s.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},s.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},s.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},s.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},s.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||x(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},s.prototype.writeBigInt64LE=j(function(e,t=0){return C(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeBigInt64BE=j(function(e,t=0){return E(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),s.prototype.writeFloatLE=function(e,t,r){return S(this,e,t,!0,r)},s.prototype.writeFloatBE=function(e,t,r){return S(this,e,t,!1,r)},s.prototype.writeDoubleLE=function(e,t,r){return A(this,e,t,!0,r)},s.prototype.writeDoubleBE=function(e,t,r){return A(this,e,t,!1,r)},s.prototype.copy=function(e,t,r,n){if(!s.isBuffer(e))throw TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw RangeError("Index out of range");if(n<0)throw RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);let i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},s.prototype.fill=function(e,t,r,n){let i;if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw TypeError("encoding must be a string");if("string"==typeof n&&!s.isEncoding(n))throw TypeError("Unknown encoding: "+n);if(1===e.length){let t=e.charCodeAt(0);("utf8"===n&&t<128||"latin1"===n)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw RangeError("Out of range index");if(r<=t)return this;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(i=t;i<r;++i)this[i]=e;else{let a=s.isBuffer(e)?e:s.from(e,n),o=a.length;if(0===o)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(i=0;i<r-t;++i)this[i+t]=a[i%o]}return this};let P={};function _(e,t,r){P[e]=class extends r{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function D(e){let t="",r=e.length,n="-"===e[0]?1:0;for(;r>=n+4;r-=3)t=`_${e.slice(r-3,r)}${t}`;return`${e.slice(0,r)}${t}`}function $(e,t,r,n,i,a){if(e>r||e<t){let n;let i="bigint"==typeof t?"n":"";throw n=a>3?0===t||t===BigInt(0)?`>= 0${i} and < 2${i} ** ${(a+1)*8}${i}`:`>= -(2${i} ** ${(a+1)*8-1}${i}) and < 2 ** ${(a+1)*8-1}${i}`:`>= ${t}${i} and <= ${r}${i}`,new P.ERR_OUT_OF_RANGE("value",n,e)}O(i,"offset"),(void 0===n[i]||void 0===n[i+a])&&T(i,n.length-(a+1))}function O(e,t){if("number"!=typeof e)throw new P.ERR_INVALID_ARG_TYPE(t,"number",e)}function T(e,t,r){if(Math.floor(e)!==e)throw O(e,r),new P.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new P.ERR_BUFFER_OUT_OF_BOUNDS;throw new P.ERR_OUT_OF_RANGE(r||"offset",`>= ${r?1:0} and <= ${t}`,e)}_("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),_("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),_("ERR_OUT_OF_RANGE",function(e,t,r){let n=`The value of "${e}" is out of range.`,i=r;return Number.isInteger(r)&&Math.abs(r)>4294967296?i=D(String(r)):"bigint"==typeof r&&(i=String(r),(r>BigInt(2)**BigInt(32)||r<-(BigInt(2)**BigInt(32)))&&(i=D(i)),i+="n"),n+=` It must be ${t}. Received ${i}`},RangeError);let I=/[^+/0-9A-Za-z-_]/g;function R(e,t){let r;t=t||1/0;let n=e.length,i=null,a=[];for(let o=0;o<n;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!i){if(r>56319||o+1===n){(t-=3)>-1&&a.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&a.push(239,191,189),i=r;continue}r=(i-55296<<10|r-56320)+65536}else i&&(t-=3)>-1&&a.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;a.push(r)}else if(r<2048){if((t-=2)<0)break;a.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;a.push(r>>12|224,r>>6&63|128,63&r|128)}else if(r<1114112){if((t-=4)<0)break;a.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}else throw Error("Invalid code point")}return a}function N(e){return n.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(I,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function U(e,t,r,n){let i;for(i=0;i<n&&!(i+r>=t.length)&&!(i>=e.length);++i)t[i+r]=e[i];return i}function B(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}let M=function(){let e="0123456789abcdef",t=Array(256);for(let r=0;r<16;++r){let n=16*r;for(let i=0;i<16;++i)t[n+i]=e[r]+e[i]}return t}();function j(e){return"undefined"==typeof BigInt?L:e}function L(){throw Error("BigInt not supported")}},86010:function(e,t,r){"use strict";function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=function e(t){var r,n,i="";if("string"==typeof t||"number"==typeof t)i+=t;else if("object"==typeof t){if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(n=e(t[r]))&&(i&&(i+=" "),i+=n);else for(r in t)t[r]&&(i&&(i+=" "),i+=r)}return i}(e))&&(n&&(n+=" "),n+=t);return n}r.r(t),r.d(t,{clsx:function(){return n}}),t.default=n},44020:function(e){"use strict";var t="%[a-f0-9]{2}",r=RegExp("("+t+")|([^%]+?)","gi"),n=RegExp("("+t+")+","gi");e.exports=function(e){if("string"!=typeof e)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},i=n.exec(e);i;){try{t[i[0]]=decodeURIComponent(i[0])}catch(e){var a=function(e){try{return decodeURIComponent(e)}catch(i){for(var t=e.match(r)||[],n=1;n<t.length;n++)t=(e=(function e(t,r){try{return[decodeURIComponent(t.join(""))]}catch(e){}if(1===t.length)return t;r=r||1;var n=t.slice(0,r),i=t.slice(r);return Array.prototype.concat.call([],e(n),e(i))})(t,n).join("")).match(r)||[];return e}}(i[0]);a!==i[0]&&(t[i[0]]=a)}i=n.exec(e)}t["%C2"]="�";for(var o=Object.keys(t),s=0;s<o.length;s++){var l=o[s];e=e.replace(RegExp(l,"g"),t[l])}return e}(e)}}},65987:function(e){"use strict";var t={single_source_shortest_paths:function(e,r,n){var i,a,o,s,l,c,u,h={},d={};d[r]=0;var p=t.PriorityQueue.make();for(p.push(r,0);!p.empty();)for(o in a=(i=p.pop()).value,s=i.cost,l=e[a]||{})l.hasOwnProperty(o)&&(c=s+l[o],u=d[o],(void 0===d[o]||u>c)&&(d[o]=c,p.push(o,c),h[o]=a));if(void 0!==n&&void 0===d[n])throw Error(["Could not find a path from ",r," to ",n,"."].join(""));return h},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],n=t;n;)r.push(n),e[n],n=e[n];return r.reverse(),r},find_path:function(e,r,n){var i=t.single_source_shortest_paths(e,r,n);return t.extract_shortest_path_from_predecessor_list(i,n)},PriorityQueue:{make:function(e){var r,n=t.PriorityQueue,i={};for(r in e=e||{},n)n.hasOwnProperty(r)&&(i[r]=n[r]);return i.queue=[],i.sorter=e.sorter||n.default_sorter,i},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},62378:function(e){"use strict";e.exports=function(e){for(var t=[],r=e.length,n=0;n<r;n++){var i=e.charCodeAt(n);if(i>=55296&&i<=56319&&r>n+1){var a=e.charCodeAt(n+1);a>=56320&&a<=57343&&(i=(i-55296)*1024+a-56320+65536,n+=1)}if(i<128){t.push(i);continue}if(i<2048){t.push(i>>6|192),t.push(63&i|128);continue}if(i<55296||i>=57344&&i<65536){t.push(i>>12|224),t.push(i>>6&63|128),t.push(63&i|128);continue}if(i>=65536&&i<=1114111){t.push(i>>18|240),t.push(i>>12&63|128),t.push(i>>6&63|128),t.push(63&i|128);continue}t.push(239,191,189)}return new Uint8Array(t).buffer}},26729:function(e){"use strict";var t=Object.prototype.hasOwnProperty,r="~";function n(){}function i(e,t,r){this.fn=e,this.context=t,this.once=r||!1}function a(e,t,n,a,o){if("function"!=typeof n)throw TypeError("The listener must be a function");var s=new i(n,a||e,o),l=r?r+t:t;return e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],s]:e._events[l].push(s):(e._events[l]=s,e._eventsCount++),e}function o(e,t){0==--e._eventsCount?e._events=new n:delete e._events[t]}function s(){this._events=new n,this._eventsCount=0}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(r=!1)),s.prototype.eventNames=function(){var e,n,i=[];if(0===this._eventsCount)return i;for(n in e=this._events)t.call(e,n)&&i.push(r?n.slice(1):n);return Object.getOwnPropertySymbols?i.concat(Object.getOwnPropertySymbols(e)):i},s.prototype.listeners=function(e){var t=r?r+e:e,n=this._events[t];if(!n)return[];if(n.fn)return[n.fn];for(var i=0,a=n.length,o=Array(a);i<a;i++)o[i]=n[i].fn;return o},s.prototype.listenerCount=function(e){var t=r?r+e:e,n=this._events[t];return n?n.fn?1:n.length:0},s.prototype.emit=function(e,t,n,i,a,o){var s=r?r+e:e;if(!this._events[s])return!1;var l,c,u=this._events[s],h=arguments.length;if(u.fn){switch(u.once&&this.removeListener(e,u.fn,void 0,!0),h){case 1:return u.fn.call(u.context),!0;case 2:return u.fn.call(u.context,t),!0;case 3:return u.fn.call(u.context,t,n),!0;case 4:return u.fn.call(u.context,t,n,i),!0;case 5:return u.fn.call(u.context,t,n,i,a),!0;case 6:return u.fn.call(u.context,t,n,i,a,o),!0}for(c=1,l=Array(h-1);c<h;c++)l[c-1]=arguments[c];u.fn.apply(u.context,l)}else{var d,p=u.length;for(c=0;c<p;c++)switch(u[c].once&&this.removeListener(e,u[c].fn,void 0,!0),h){case 1:u[c].fn.call(u[c].context);break;case 2:u[c].fn.call(u[c].context,t);break;case 3:u[c].fn.call(u[c].context,t,n);break;case 4:u[c].fn.call(u[c].context,t,n,i);break;default:if(!l)for(d=1,l=Array(h-1);d<h;d++)l[d-1]=arguments[d];u[c].fn.apply(u[c].context,l)}}return!0},s.prototype.on=function(e,t,r){return a(this,e,t,r,!1)},s.prototype.once=function(e,t,r){return a(this,e,t,r,!0)},s.prototype.removeListener=function(e,t,n,i){var a=r?r+e:e;if(!this._events[a])return this;if(!t)return o(this,a),this;var s=this._events[a];if(s.fn)s.fn!==t||i&&!s.once||n&&s.context!==n||o(this,a);else{for(var l=0,c=[],u=s.length;l<u;l++)(s[l].fn!==t||i&&!s[l].once||n&&s[l].context!==n)&&c.push(s[l]);c.length?this._events[a]=1===c.length?c[0]:c:o(this,a)}return this},s.prototype.removeAllListeners=function(e){var t;return e?(t=r?r+e:e,this._events[t]&&o(this,t)):(this._events=new n,this._eventsCount=0),this},s.prototype.off=s.prototype.removeListener,s.prototype.addListener=s.prototype.on,s.prefixed=r,s.EventEmitter=s,e.exports=s},92806:function(e){"use strict";e.exports=function(e,t){for(var r={},n=Object.keys(e),i=Array.isArray(t),a=0;a<n.length;a++){var o=n[a],s=e[o];(i?-1!==t.indexOf(o):t(o,s,e))&&(r[o]=s)}return r}},80645:function(e,t){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */t.read=function(e,t,r,n,i){var a,o,s=8*i-n-1,l=(1<<s)-1,c=l>>1,u=-7,h=r?i-1:0,d=r?-1:1,p=e[t+h];for(h+=d,a=p&(1<<-u)-1,p>>=-u,u+=s;u>0;a=256*a+e[t+h],h+=d,u-=8);for(o=a&(1<<-u)-1,a>>=-u,u+=n;u>0;o=256*o+e[t+h],h+=d,u-=8);if(0===a)a=1-c;else{if(a===l)return o?NaN:(p?-1:1)*(1/0);o+=Math.pow(2,n),a-=c}return(p?-1:1)*o*Math.pow(2,a-n)},t.write=function(e,t,r,n,i,a){var o,s,l,c=8*a-i-1,u=(1<<c)-1,h=u>>1,d=23===i?5960464477539062e-23:0,p=n?0:a-1,f=n?1:-1,m=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(s=isNaN(t)?1:0,o=u):(o=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-o))<1&&(o--,l*=2),o+h>=1?t+=d/l:t+=d*Math.pow(2,1-h),t*l>=2&&(o++,l/=2),o+h>=u?(s=0,o=u):o+h>=1?(s=(t*l-1)*Math.pow(2,i),o+=h):(s=t*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;e[r+p]=255&s,p+=f,s/=256,i-=8);for(o=o<<i|s,c+=i;c>0;e[r+p]=255&o,p+=f,o/=256,c-=8);e[r+p-f]|=128*m}},83454:function(e,t,r){"use strict";var n,i;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(i=r.g.process)?void 0:i.env)?r.g.process:r(77663)},6840:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(46096)}])},46096:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return rd}});var n={};r.r(n),r.d(n,{arbitrum:function(){return c},arbitrumGoerli:function(){return u},arbitrumNova:function(){return h},arbitrumSepolia:function(){return d},astarZkatana:function(){return p},aurora:function(){return f},auroraTestnet:function(){return m},avalanche:function(){return b},avalancheFuji:function(){return g},base:function(){return E},baseGoerli:function(){return k},baseSepolia:function(){return S},bearNetworkChainMainnet:function(){return A},bearNetworkChainTestnet:function(){return P},boba:function(){return _},bronos:function(){return D},bronosTestnet:function(){return $},bsc:function(){return O},bscTestnet:function(){return T},bxn:function(){return I},bxnTestnet:function(){return R},canto:function(){return N},celo:function(){return ei},celoAlfajores:function(){return ea},celoCannoli:function(){return eo},classic:function(){return es},confluxESpace:function(){return el},coreDao:function(){return ec},cronos:function(){return eu},cronosTestnet:function(){return eh},crossbell:function(){return ed},dfk:function(){return ep},dogechain:function(){return ef},edgeware:function(){return em},edgewareTestnet:function(){return eb},ekta:function(){return ex},ektaTestnet:function(){return eC},eos:function(){return eg},eosTestnet:function(){return ew},evmos:function(){return ey},evmosTestnet:function(){return ev},fantom:function(){return eE},fantomTestnet:function(){return ek},fibo:function(){return eS},filecoin:function(){return eA},filecoinCalibration:function(){return eP},filecoinHyperspace:function(){return e_},flare:function(){return eD},flareTestnet:function(){return e$},foundry:function(){return eO},fuse:function(){return eT},fuseSparknet:function(){return eI},gnosis:function(){return eM},gnosisChiado:function(){return ej},gobi:function(){return eU},goerli:function(){return eB.w},haqqMainnet:function(){return ez},haqqTestedge2:function(){return eH},hardhat:function(){return eL},harmonyOne:function(){return eF},holesky:function(){return eW},iotex:function(){return eR},iotexTestnet:function(){return eN},klaytn:function(){return eq},kroma:function(){return eG},kromaSepolia:function(){return eZ},linea:function(){return eV},lineaTestnet:function(){return eK},localhost:function(){return eQ},mainnet:function(){return eY.R},manta:function(){return eX},mantaTestnet:function(){return eJ},mantle:function(){return e0},mantleTestnet:function(){return e1},meter:function(){return e2},meterTestnet:function(){return e3},metis:function(){return e5},metisGoerli:function(){return e6},mev:function(){return e4},mevTestnet:function(){return e8},modeTestnet:function(){return e7},moonbaseAlpha:function(){return e9},moonbeam:function(){return te},moonbeamDev:function(){return tt},moonriver:function(){return tr},neonDevnet:function(){return tn},nexi:function(){return ti},nexilix:function(){return ta},oasys:function(){return to},okc:function(){return ts},opBNB:function(){return th},opBNBTestnet:function(){return td},optimism:function(){return tl},optimismGoerli:function(){return tc},optimismSepolia:function(){return tu},plinga:function(){return tp},polygon:function(){return tf},polygonMumbai:function(){return tm},polygonZkEvm:function(){return tg},polygonZkEvmTestnet:function(){return tb},pulsechain:function(){return tw},pulsechainV4:function(){return ty},qMainnet:function(){return tv},qTestnet:function(){return tx},rollux:function(){return tC},rolluxTestnet:function(){return tE},ronin:function(){return tk},saigon:function(){return tS},scroll:function(){return tA},scrollSepolia:function(){return tP},scrollTestnet:function(){return t_},sepolia:function(){return tD},shardeumSphinx:function(){return tZ},skaleBlockBrawlers:function(){return t$},skaleCalypso:function(){return tO},skaleCalypsoTestnet:function(){return tT},skaleChaosTestnet:function(){return tI},skaleCryptoBlades:function(){return tR},skaleCryptoColosseum:function(){return tN},skaleEuropa:function(){return tU},skaleEuropaTestnet:function(){return tB},skaleExorde:function(){return tM},skaleHumanProtocol:function(){return tj},skaleNebula:function(){return tL},skaleNebulaTestnet:function(){return tF},skaleRazor:function(){return tz},skaleTitan:function(){return tH},skaleTitanTestnet:function(){return tW},songbird:function(){return tq},songbirdTestnet:function(){return tG},syscoin:function(){return tV},syscoinTestnet:function(){return tK},taikoJolnir:function(){return tY},taikoTestnetSepolia:function(){return tX},taraxa:function(){return tQ},taraxaTestnet:function(){return tJ},telos:function(){return t0},telosTestnet:function(){return t1},thunderTestnet:function(){return t2},vechain:function(){return t3},wanchain:function(){return t5},wanchainTestnet:function(){return t6},xdc:function(){return t4},xdcTestnet:function(){return t8},zetachainAthensTestnet:function(){return ra},zhejiang:function(){return t7},zkSync:function(){return rn},zkSyncTestnet:function(){return ri},zora:function(){return ro},zoraSepolia:function(){return rs},zoraTestnet:function(){return rl}});var i=r(85893);r(93814);var a=r(69077),o=r(55678);r(71399);var s=r(1966),l=r(86164);let c=(0,l.a)({id:42161,name:"Arbitrum One",network:"arbitrum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://arb-mainnet.g.alchemy.com/v2"],webSocket:["wss://arb-mainnet.g.alchemy.com/v2"]},infura:{http:["https://arbitrum-mainnet.infura.io/v3"],webSocket:["wss://arbitrum-mainnet.infura.io/ws/v3"]},default:{http:["https://arb1.arbitrum.io/rpc"]},public:{http:["https://arb1.arbitrum.io/rpc"]}},blockExplorers:{etherscan:{name:"Arbiscan",url:"https://arbiscan.io"},default:{name:"Arbiscan",url:"https://arbiscan.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:7654707}}}),u=(0,l.a)({id:421613,name:"Arbitrum Goerli",network:"arbitrum-goerli",nativeCurrency:{name:"Arbitrum Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://arb-goerli.g.alchemy.com/v2"],webSocket:["wss://arb-goerli.g.alchemy.com/v2"]},infura:{http:["https://arbitrum-goerli.infura.io/v3"],webSocket:["wss://arbitrum-goerli.infura.io/ws/v3"]},default:{http:["https://goerli-rollup.arbitrum.io/rpc"]},public:{http:["https://goerli-rollup.arbitrum.io/rpc"]}},blockExplorers:{etherscan:{name:"Arbiscan",url:"https://goerli.arbiscan.io"},default:{name:"Arbiscan",url:"https://goerli.arbiscan.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:88114}},testnet:!0}),h=(0,l.a)({id:42170,name:"Arbitrum Nova",network:"arbitrum-nova",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{blast:{http:["https://arbitrum-nova.public.blastapi.io"],webSocket:["wss://arbitrum-nova.public.blastapi.io"]},default:{http:["https://nova.arbitrum.io/rpc"]},public:{http:["https://nova.arbitrum.io/rpc"]}},blockExplorers:{etherscan:{name:"Arbiscan",url:"https://nova.arbiscan.io"},blockScout:{name:"BlockScout",url:"https://nova-explorer.arbitrum.io/"},default:{name:"Arbiscan",url:"https://nova.arbiscan.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:1746963}}}),d=(0,l.a)({id:421614,name:"Arbitrum Sepolia",network:"arbitrum-sepolia",nativeCurrency:{name:"Arbitrum Sepolia Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://sepolia-rollup.arbitrum.io/rpc"]},public:{http:["https://sepolia-rollup.arbitrum.io/rpc"]}},blockExplorers:{default:{name:"Blockscout",url:"https://sepolia-explorer.arbitrum.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:81930}},testnet:!0}),p=(0,l.a)({id:1261120,name:"Astar zkEVM Testnet zKatana",network:"zKatana",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.zkatana.gelato.digital","https://rpc.startale.com/zkatana"]},public:{http:["https://rpc.zkatana.gelato.digital","https://rpc.startale.com/zkatana"]}},blockExplorers:{blockscout:{name:"Blockscout zKatana chain explorer",url:"https://zkatana.blockscout.com"},default:{name:"zKatana Explorer",url:"https://zkatana.explorer.startale.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:31317}},testnet:!0}),f=(0,l.a)({id:1313161554,name:"Aurora",network:"aurora",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{infura:{http:["https://aurora-mainnet.infura.io/v3"]},default:{http:["https://mainnet.aurora.dev"]},public:{http:["https://mainnet.aurora.dev"]}},blockExplorers:{etherscan:{name:"Aurorascan",url:"https://aurorascan.dev"},default:{name:"Aurorascan",url:"https://aurorascan.dev"}}}),m=(0,l.a)({id:1313161555,name:"Aurora Testnet",network:"aurora-testnet",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{infura:{http:["https://aurora-testnet.infura.io/v3"]},default:{http:["https://testnet.aurora.dev"]},public:{http:["https://testnet.aurora.dev"]}},blockExplorers:{etherscan:{name:"Aurorascan",url:"https://testnet.aurorascan.dev"},default:{name:"Aurorascan",url:"https://testnet.aurorascan.dev"}},testnet:!0}),b=(0,l.a)({id:43114,name:"Avalanche",network:"avalanche",nativeCurrency:{decimals:18,name:"Avalanche",symbol:"AVAX"},rpcUrls:{default:{http:["https://api.avax.network/ext/bc/C/rpc"]},public:{http:["https://api.avax.network/ext/bc/C/rpc"]}},blockExplorers:{etherscan:{name:"SnowTrace",url:"https://snowtrace.io"},default:{name:"SnowTrace",url:"https://snowtrace.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:11907934}}}),g=(0,l.a)({id:43113,name:"Avalanche Fuji",network:"avalanche-fuji",nativeCurrency:{decimals:18,name:"Avalanche Fuji",symbol:"AVAX"},rpcUrls:{default:{http:["https://api.avax-test.network/ext/bc/C/rpc"]},public:{http:["https://api.avax-test.network/ext/bc/C/rpc"]}},blockExplorers:{etherscan:{name:"SnowTrace",url:"https://testnet.snowtrace.io"},default:{name:"SnowTrace",url:"https://testnet.snowtrace.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:7096959}},testnet:!0});var w=r(95946),y=r(43310),v=r(6073),x=r(30866);let C={block:(0,y.G)({format(e){let t=e.transactions?.map(e=>{if("string"==typeof e)return e;let t=(0,v.Tr)(e);return"0x7e"===t.typeHex&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?(0,w.y_)(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t});return{transactions:t,stateRoot:e.stateRoot}}}),transaction:(0,v.y_)({format(e){let t={};return"0x7e"===e.type&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?(0,w.y_)(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t}}),transactionReceipt:(0,x.d)({format:e=>({l1GasPrice:e.l1GasPrice?(0,w.y_)(e.l1GasPrice):null,l1GasUsed:e.l1GasUsed?(0,w.y_)(e.l1GasUsed):null,l1Fee:e.l1Fee?(0,w.y_)(e.l1Fee):null,l1FeeScalar:e.l1FeeScalar?Number(e.l1FeeScalar):null})})},E=(0,l.a)({id:8453,network:"base",name:"Base",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://base-mainnet.g.alchemy.com/v2"],webSocket:["wss://base-mainnet.g.alchemy.com/v2"]},infura:{http:["https://base-mainnet.infura.io/v3"],webSocket:["wss://base-mainnet.infura.io/ws/v3"]},default:{http:["https://mainnet.base.org"]},public:{http:["https://mainnet.base.org"]}},blockExplorers:{blockscout:{name:"Basescout",url:"https://base.blockscout.com"},default:{name:"Basescan",url:"https://basescan.org"},etherscan:{name:"Basescan",url:"https://basescan.org"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:5022}}},{formatters:C}),k=(0,l.a)({id:84531,network:"base-goerli",name:"Base Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://base-goerli.g.alchemy.com/v2"],webSocket:["wss://base-goerli.g.alchemy.com/v2"]},default:{http:["https://goerli.base.org"]},public:{http:["https://goerli.base.org"]}},blockExplorers:{etherscan:{name:"Basescan",url:"https://goerli.basescan.org"},default:{name:"Basescan",url:"https://goerli.basescan.org"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:1376988}},testnet:!0,sourceId:5},{formatters:C}),S=(0,l.a)({id:84532,network:"base-sepolia",name:"Base Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://sepolia.base.org"]},public:{http:["https://sepolia.base.org"]}},blockExplorers:{blockscout:{name:"Blockscout",url:"https://base-sepolia.blockscout.com"},default:{name:"Blockscout",url:"https://base-sepolia.blockscout.com"}},testnet:!0,sourceId:11155111},{formatters:C}),A=(0,l.a)({id:641230,name:"Bear Network Chain Mainnet",network:"BearNetworkChainMainnet",nativeCurrency:{decimals:18,name:"BearNetworkChain",symbol:"BRNKC"},rpcUrls:{public:{http:["https://brnkc-mainnet.bearnetwork.net"]},default:{http:["https://brnkc-mainnet.bearnetwork.net"]}},blockExplorers:{default:{name:"BrnkScan",url:"https://brnkscan.bearnetwork.net"}}}),P=(0,l.a)({id:751230,name:"Bear Network Chain Testnet",network:"BearNetworkChainTestnet",nativeCurrency:{decimals:18,name:"tBRNKC",symbol:"tBRNKC"},rpcUrls:{public:{http:["https://brnkc-test.bearnetwork.net"]},default:{http:["https://brnkc-test.bearnetwork.net"]}},blockExplorers:{default:{name:"BrnkTestScan",url:"https://brnktest-scan.bearnetwork.net"}},testnet:!0}),_=(0,l.a)({id:288,name:"Boba Network",network:"boba",nativeCurrency:{decimals:18,name:"Boba",symbol:"BOBA"},rpcUrls:{default:{http:["https://mainnet.boba.network"]},public:{http:["https://mainnet.boba.network"]}},blockExplorers:{etherscan:{name:"BOBAScan",url:"https://bobascan.com"},default:{name:"BOBAScan",url:"https://bobascan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:446859}}}),D=(0,l.a)({id:1039,name:"Bronos",network:"bronos",nativeCurrency:{decimals:18,name:"BRO",symbol:"BRO"},rpcUrls:{default:{http:["https://evm.bronos.org"]},public:{http:["https://evm.bronos.org"]}},blockExplorers:{default:{name:"BronoScan",url:"https://broscan.bronos.org"}}}),$=(0,l.a)({id:1038,name:"Bronos Testnet",network:"bronos-testnet",nativeCurrency:{decimals:18,name:"Bronos Coin",symbol:"tBRO"},rpcUrls:{default:{http:["https://evm-testnet.bronos.org"]},public:{http:["https://evm-testnet.bronos.org"]}},blockExplorers:{default:{name:"BronoScan",url:"https://tbroscan.bronos.org"}},testnet:!0}),O=(0,l.a)({id:56,name:"BNB Smart Chain",network:"bsc",nativeCurrency:{decimals:18,name:"BNB",symbol:"BNB"},rpcUrls:{default:{http:["https://rpc.ankr.com/bsc"]},public:{http:["https://rpc.ankr.com/bsc"]}},blockExplorers:{etherscan:{name:"BscScan",url:"https://bscscan.com"},default:{name:"BscScan",url:"https://bscscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:15921452}}}),T=(0,l.a)({id:97,name:"Binance Smart Chain Testnet",network:"bsc-testnet",nativeCurrency:{decimals:18,name:"BNB",symbol:"tBNB"},rpcUrls:{default:{http:["https://data-seed-prebsc-1-s1.binance.org:8545"]},public:{http:["https://data-seed-prebsc-1-s1.binance.org:8545"]}},blockExplorers:{etherscan:{name:"BscScan",url:"https://testnet.bscscan.com"},default:{name:"BscScan",url:"https://testnet.bscscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:17422483}},testnet:!0}),I=(0,l.a)({id:4999,name:"BlackFort Exchange Network",network:"bxn",nativeCurrency:{name:"BlackFort Token",symbol:"BXN",decimals:18},rpcUrls:{default:{http:["https://mainnet.blackfort.network/rpc"]},public:{http:["https://mainnet.blackfort.network/rpc"]}},blockExplorers:{default:{name:"Blockscout",url:"https://explorer.blackfort.network"}}}),R=(0,l.a)({id:4777,name:"BlackFort Exchange Network Testnet",network:"bxnTestnet",nativeCurrency:{name:"BlackFort Testnet Token",symbol:"TBXN",decimals:18},rpcUrls:{default:{http:["https://testnet.blackfort.network/rpc"]},public:{http:["https://testnet.blackfort.network/rpc"]}},blockExplorers:{default:{name:"Blockscout",url:"https://testnet-explorer.blackfort.network"}}}),N=(0,l.a)({id:7700,name:"Canto",network:"canto",nativeCurrency:{decimals:18,name:"Canto",symbol:"CANTO"},rpcUrls:{default:{http:["https://canto.gravitychain.io"]},public:{http:["https://canto.gravitychain.io"]}},blockExplorers:{default:{name:"Tuber.Build (Blockscout)",url:"https://tuber.build"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:2905789}}});var U=r(92106),B=r(74688);let M={block:(0,y.G)({exclude:["difficulty","gasLimit","mixHash","nonce","uncles"],format(e){let t=e.transactions?.map(e=>"string"==typeof e?e:{...(0,v.Tr)(e),feeCurrency:e.feeCurrency,..."0x7b"!==e.type?{gatewayFee:e.gatewayFee?(0,w.y_)(e.gatewayFee):null,gatewayFeeRecipient:e.gatewayFeeRecipient||null}:{}});return{randomness:e.randomness,transactions:t}}}),transaction:(0,v.y_)({format:e=>"0x7b"===e.type?{feeCurrency:e.feeCurrency}:{feeCurrency:e.feeCurrency,gatewayFee:e.gatewayFee?(0,w.y_)(e.gatewayFee):null,gatewayFeeRecipient:e.gatewayFeeRecipient}}),transactionReceipt:(0,x.d)({format:e=>({feeCurrency:e.feeCurrency,gatewayFee:e.gatewayFee?(0,w.y_)(e.gatewayFee):null,gatewayFeeRecipient:e.gatewayFeeRecipient})}),transactionRequest:(0,B.iy)({format(e){if("cip64"===e.type||!e.type&&"feeCurrency"in e&&void 0===e.gatewayFee&&void 0===e.gatewayFeeRecipient)return{type:"0x7b",feeCurrency:e.feeCurrency};let t={feeCurrency:e.feeCurrency,gatewayFee:void 0!==e.gatewayFee?(0,U.eC)(e.gatewayFee):void 0,gatewayFeeRecipient:e.gatewayFeeRecipient};return"cip42"!==e.type&&(e.type||void 0===e.gatewayFee&&void 0===e.gatewayFeeRecipient)||(t.type="0x7c"),t}})};var j=r(26087),L=r(62027),F=r(80377),z=r(26445),H=r(49321),W=r(57040),q=r(61836);class G extends L.G{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}}class Z extends L.G{constructor({length:e,position:t}){super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}}let V={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,assertPosition(e){if(e<0||e>this.bytes.length-1)throw new Z({length:this.bytes.length,position:e})},decrementPosition(e){if(e<0)throw new G({offset:e});let t=this.position-e;this.assertPosition(t),this.position=t},incrementPosition(e){if(e<0)throw new G({offset:e});let t=this.position+e;this.assertPosition(t),this.position=t},inspectByte(e){let t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(e,t){let r=t??this.position;return this.assertPosition(r+e-1),this.bytes.subarray(r,r+e)},inspectUint8(e){let t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(e){let t=e??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(e){let t=e??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(e){let t=e??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushBytes(e){this.assertPosition(this.position+e.length-1),this.bytes.set(e,this.position),this.position+=e.length},pushUint8(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushUint16(e){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,e),this.position+=2},pushUint24(e){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,e>>8),this.dataView.setUint8(this.position+2,255&e),this.position+=3},pushUint32(e){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,e),this.position+=4},readByte(){let e=this.inspectByte();return this.position++,e},readBytes(e){let t=this.inspectBytes(e);return this.position+=e,t},readUint8(){let e=this.inspectUint8();return this.position+=1,e},readUint16(){let e=this.inspectUint16();return this.position+=2,e},readUint24(){let e=this.inspectUint24();return this.position+=3,e},readUint32(){let e=this.inspectUint32();return this.position+=4,e},setPosition(e){this.assertPosition(e),this.position=e}};var K=r(11187);function Q(e,t="hex"){let r=function e(t){return Array.isArray(t)?function(e){let t=e.reduce((e,t)=>e+t.length,0),r=Y(t);return{length:t<=55?1+t:1+r+t,encode(n){t<=55?n.pushByte(192+t):(n.pushByte(247+r),1===r?n.pushUint8(t):2===r?n.pushUint16(t):3===r?n.pushUint24(t):n.pushUint32(t)),e.forEach(e=>e.encode(n))}}}(t.map(t=>e(t))):function(e){let t="string"==typeof e?(0,K.nr)(e):e,r=Y(t.length),n=1===t.length&&t[0]<128?1:t.length<=55?1+t.length:1+r+t.length;return{length:n,encode(e){1===t.length&&t[0]<128?e.pushBytes(t):t.length<=55?(e.pushByte(128+t.length),e.pushBytes(t)):(e.pushByte(183+r),1===r?e.pushUint8(t.length):2===r?e.pushUint16(t.length):3===r?e.pushUint24(t.length):e.pushUint32(t.length),e.pushBytes(t))}}}(t)}(e),n=function(e){let t=Object.create(V);return t.bytes=e,t.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength),t}(new Uint8Array(r.length));return(r.encode(n),"hex"===t)?(0,U.ci)(n.bytes):n.bytes}function Y(e){if(e<256)return 1;if(e<65536)return 2;if(e<16777216)return 3;if(e<4294967296)return 4;throw new L.G("Length is too large.")}var X=r(33639);function J(e){if(!e||0===e.length)return[];let t=[];for(let r=0;r<e.length;r++){let{address:n,storageKeys:i}=e[r];for(let e=0;e<i.length;e++)if(i[e].length-2!=64)throw new X.JC({storageKey:i[e]});if(!(0,H.U)(n))throw new j.b({address:n});t.push([n,i])}return t}var ee=r(82994);function et(e,t){let r=(0,ee.l)(e);return"eip1559"===r?function(e,t){let{chainId:r,gas:n,nonce:i,to:a,value:o,maxFeePerGas:s,maxPriorityFeePerGas:l,accessList:c,data:u}=e;!function(e){let{chainId:t,maxPriorityFeePerGas:r,gasPrice:n,maxFeePerGas:i,to:a}=e;if(t<=0)throw new F.hJ({chainId:t});if(a&&!(0,H.U)(a))throw new j.b({address:a});if(n)throw new L.G("`gasPrice` is not a valid EIP-1559 Transaction attribute.");if(i&&i>2n**256n-1n)throw new z.Hh({maxFeePerGas:i});if(r&&i&&r>i)throw new z.cs({maxFeePerGas:i,maxPriorityFeePerGas:r})}(e);let h=J(c),d=[(0,U.NC)(r),i?(0,U.NC)(i):"0x",l?(0,U.NC)(l):"0x",s?(0,U.NC)(s):"0x",n?(0,U.NC)(n):"0x",a??"0x",o?(0,U.NC)(o):"0x",u??"0x",h];return t&&d.push(27n===t.v?"0x":(0,U.NC)(1),(0,q.f)(t.r),(0,q.f)(t.s)),(0,W.SM)(["0x02",Q(d)])}(e,t):"eip2930"===r?function(e,t){let{chainId:r,gas:n,data:i,nonce:a,to:o,value:s,accessList:l,gasPrice:c}=e;!function(e){let{chainId:t,maxPriorityFeePerGas:r,gasPrice:n,maxFeePerGas:i,to:a}=e;if(t<=0)throw new F.hJ({chainId:t});if(a&&!(0,H.U)(a))throw new j.b({address:a});if(r||i)throw new L.G("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");if(n&&n>2n**256n-1n)throw new z.Hh({maxFeePerGas:n})}(e);let u=J(l),h=[(0,U.NC)(r),a?(0,U.NC)(a):"0x",c?(0,U.NC)(c):"0x",n?(0,U.NC)(n):"0x",o??"0x",s?(0,U.NC)(s):"0x",i??"0x",u];return t&&h.push(27n===t.v?"0x":(0,U.NC)(1),t.r,t.s),(0,W.SM)(["0x01",Q(h)])}(e,t):function(e,t){let{chainId:r=0,gas:n,data:i,nonce:a,to:o,value:s,gasPrice:l}=e;!function(e){let{chainId:t,maxPriorityFeePerGas:r,gasPrice:n,maxFeePerGas:i,to:a,accessList:o}=e;if(a&&!(0,H.U)(a))throw new j.b({address:a});if(void 0!==t&&t<=0)throw new F.hJ({chainId:t});if(r||i)throw new L.G("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");if(n&&n>2n**256n-1n)throw new z.Hh({maxFeePerGas:n});if(o)throw new L.G("`accessList` is not a valid Legacy Transaction attribute.")}(e);let c=[a?(0,U.NC)(a):"0x",l?(0,U.NC)(l):"0x",n?(0,U.NC)(n):"0x",o??"0x",s?(0,U.NC)(s):"0x",i??"0x"];if(t){let e=27n+(27n===t.v?0n:1n);if(r>0)e=BigInt(2*r)+BigInt(35n+t.v-27n);else if(t.v!==e)throw new X.vl({v:t.v});c=[...c,(0,U.NC)(e),t.r,t.s]}else r>0&&(c=[...c,(0,U.NC)(r),"0x","0x"]);return Q(c)}(e,t)}let er=(e,t)=>"cip64"===e.type||!e.type&&"maxFeePerGas"in e&&"maxPriorityFeePerGas"in e&&"feeCurrency"in e&&!("gatewayFee"in e)&&!("gatewayFeeRecipient"in e)?function(e,t){!function(e){let{chainId:t,maxPriorityFeePerGas:r,gasPrice:n,maxFeePerGas:i,to:a,feeCurrency:o}=e;if(t<=0)throw new F.hJ({chainId:t});if(a&&!(0,H.U)(a))throw new j.b({address:a});if(n)throw new L.G("`gasPrice` is not a valid CIP-64 Transaction attribute.");if(i&&i>0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn)throw new z.Hh({maxFeePerGas:i});if(r&&i&&r>i)throw new z.cs({maxFeePerGas:i,maxPriorityFeePerGas:r});if(o&&!o?.startsWith("0x"))throw new L.G("`feeCurrency` MUST be a token address for CIP-64 transactions.");if(!o)throw new L.G("`feeCurrency` must be provided for CIP-64 transactions.")}(e);let{chainId:r,gas:n,nonce:i,to:a,value:o,maxFeePerGas:s,maxPriorityFeePerGas:l,accessList:c,feeCurrency:u,data:h}=e,d=[(0,U.NC)(r),i?(0,U.NC)(i):"0x",l?(0,U.NC)(l):"0x",s?(0,U.NC)(s):"0x",n?(0,U.NC)(n):"0x",a??"0x",o?(0,U.NC)(o):"0x",h??"0x",J(c),u??"0x"];return t&&d.push(27n===t.v?"0x":(0,U.NC)(1),(0,q.f)(t.r),(0,q.f)(t.s)),(0,W.SM)(["0x7b",Q(d)])}(e,t):"cip42"===e.type||!e.type&&"maxFeePerGas"in e&&"maxPriorityFeePerGas"in e&&("feeCurrency"in e||"gatewayFee"in e||"gatewayFeeRecipient"in e)?function(e,t){!function(e){let{chainId:t,maxPriorityFeePerGas:r,gasPrice:n,maxFeePerGas:i,to:a,feeCurrency:o,gatewayFee:s,gatewayFeeRecipient:l}=e;if(t<=0)throw new F.hJ({chainId:t});if(a&&!(0,H.U)(a))throw new j.b({address:a});if(n)throw new L.G("`gasPrice` is not a valid CIP-42 Transaction attribute.");if(i&&i>0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn)throw new z.Hh({maxFeePerGas:i});if(r&&i&&r>i)throw new z.cs({maxFeePerGas:i,maxPriorityFeePerGas:r});if(s&&!l||l&&!s)throw new L.G("`gatewayFee` and `gatewayFeeRecipient` must be provided together.");if(o&&!o?.startsWith("0x"))throw new L.G("`feeCurrency` MUST be a token address for CIP-42 transactions.");if(!o&&!l)throw new L.G("Either `feeCurrency` or `gatewayFeeRecipient` must be provided for CIP-42 transactions.")}(e);let{chainId:r,gas:n,nonce:i,to:a,value:o,maxFeePerGas:s,maxPriorityFeePerGas:l,accessList:c,feeCurrency:u,gatewayFeeRecipient:h,gatewayFee:d,data:p}=e,f=[(0,U.NC)(r),i?(0,U.NC)(i):"0x",l?(0,U.NC)(l):"0x",s?(0,U.NC)(s):"0x",n?(0,U.NC)(n):"0x",u??"0x",h??"0x",d?(0,U.NC)(d):"0x",a??"0x",o?(0,U.NC)(o):"0x",p??"0x",J(c)];return t&&f.push(27n===t.v?"0x":(0,U.NC)(1),(0,q.f)(t.r),(0,q.f)(t.s)),(0,W.SM)(["0x7c",Q(f)])}(e,t):et(e,t),en={transaction:er},ei=(0,l.a)({id:42220,name:"Celo",network:"celo",nativeCurrency:{decimals:18,name:"CELO",symbol:"CELO"},rpcUrls:{default:{http:["https://forno.celo.org"]},infura:{http:["https://celo-mainnet.infura.io/v3"]},public:{http:["https://forno.celo.org"]}},blockExplorers:{default:{name:"Celo Explorer",url:"https://explorer.celo.org/mainnet"},etherscan:{name:"CeloScan",url:"https://celoscan.io"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:13112599}},testnet:!1},{formatters:M,serializers:en}),ea=(0,l.a)({id:44787,name:"Alfajores",network:"celo-alfajores",nativeCurrency:{decimals:18,name:"CELO",symbol:"A-CELO"},rpcUrls:{default:{http:["https://alfajores-forno.celo-testnet.org"]},infura:{http:["https://celo-alfajores.infura.io/v3"]},public:{http:["https://alfajores-forno.celo-testnet.org"]}},blockExplorers:{default:{name:"Celo Explorer",url:"https://explorer.celo.org/alfajores"},etherscan:{name:"CeloScan",url:"https://alfajores.celoscan.io/"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:14569001}},testnet:!0},{formatters:M,serializers:en}),eo=(0,l.a)({id:17323,name:"Cannoli",network:"celo-cannoli",nativeCurrency:{decimals:18,name:"CELO",symbol:"C-CELO"},rpcUrls:{default:{http:["https://forno.cannoli.celo-testnet.org"]},public:{http:["https://forno.cannoli.celo-testnet.org"]}},blockExplorers:{default:{name:"Celo Explorer",url:"https://explorer.celo.org/cannoli"}},contracts:{multicall3:{address:"0x5Acb0aa8BF4E8Ff0d882Ee187140713C12BF9718",blockCreated:87429}},testnet:!0},{formatters:M,serializers:en}),es=(0,l.a)({id:61,name:"Ethereum Classic",network:"classic",nativeCurrency:{decimals:18,name:"ETC",symbol:"ETC"},rpcUrls:{default:{http:["https://etc.rivet.link"]},public:{http:["https://etc.rivet.link"]}},blockExplorers:{default:{name:"Blockscout",url:"https://blockscout.com/etc/mainnet"}}}),el=(0,l.a)({id:1030,name:"Conflux eSpace",network:"cfx-espace",nativeCurrency:{name:"Conflux",symbol:"CFX",decimals:18},rpcUrls:{default:{http:["https://evm.confluxrpc.org"]},public:{http:["https://evm.confluxrpc.org"]}},blockExplorers:{default:{name:"ConfluxScan",url:"https://evm.confluxscan.io"}},contracts:{multicall3:{address:"0xEFf0078910f638cd81996cc117bccD3eDf2B072F",blockCreated:68602935}}}),ec=(0,l.a)({id:1116,name:"Core Dao",network:"coreDao",nativeCurrency:{decimals:18,name:"Core",symbol:"CORE"},rpcUrls:{public:{http:["https://rpc.coredao.org"]},default:{http:["https://rpc.coredao.org"]}},blockExplorers:{default:{name:"CoreDao",url:"https://scan.coredao.org"},etherscan:{name:"CoreDao",url:"https://scan.coredao.org"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:11907934}},testnet:!1}),eu=(0,l.a)({id:25,name:"Cronos Mainnet",network:"cronos",nativeCurrency:{decimals:18,name:"Cronos",symbol:"CRO"},rpcUrls:{default:{http:["https://evm.cronos.org"]},public:{http:["https://evm.cronos.org"]}},blockExplorers:{default:{name:"Cronoscan",url:"https://cronoscan.com"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:1963112}}}),eh=(0,l.a)({id:338,name:"Cronos Testnet",network:"cronos-testnet",nativeCurrency:{decimals:18,name:"CRO",symbol:"tCRO"},rpcUrls:{default:{http:["https://evm-t3.cronos.org"]},public:{http:["https://evm-t3.cronos.org"]}},blockExplorers:{default:{name:"Cronos Explorer",url:"https://cronos.org/explorer/testnet3"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:10191251}},testnet:!0}),ed=(0,l.a)({id:3737,network:"crossbell",name:"Crossbell",nativeCurrency:{decimals:18,name:"CSB",symbol:"CSB"},rpcUrls:{default:{http:["https://rpc.crossbell.io"]},public:{http:["https://rpc.crossbell.io"]}},blockExplorers:{default:{name:"CrossScan",url:"https://scan.crossbell.io"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:38246031}}}),ep=(0,l.a)({id:53935,name:"DFK Chain",network:"dfk",nativeCurrency:{decimals:18,name:"Jewel",symbol:"JEWEL"},rpcUrls:{default:{http:["https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"]},public:{http:["https://subnets.avax.network/defi-kingdoms/dfk-chain/rpc"]}},blockExplorers:{etherscan:{name:"DFKSubnetScan",url:"https://subnets.avax.network/defi-kingdoms"},default:{name:"DFKSubnetScan",url:"https://subnets.avax.network/defi-kingdoms"}}}),ef=(0,l.a)({id:2e3,name:"Dogechain",network:"dogechain",nativeCurrency:{decimals:18,name:"Dogechain",symbol:"DC"},rpcUrls:{default:{http:["https://rpc.dogechain.dog"]},public:{http:["https://rpc.dogechain.dog"]}},blockExplorers:{etherscan:{name:"DogeChainExplorer",url:"https://explorer.dogechain.dog"},default:{name:"DogeChainExplorer",url:"https://explorer.dogechain.dog"}}}),em=(0,l.a)({id:2021,name:"Edgeware EdgeEVM Mainnet",network:"edgeware",nativeCurrency:{decimals:18,name:"Edgeware",symbol:"EDG"},rpcUrls:{default:{http:["https://edgeware-evm.jelliedowl.net"]},public:{http:["https://edgeware-evm.jelliedowl.net"]}},blockExplorers:{etherscan:{name:"Edgscan by Bharathcoorg",url:"https://edgscan.live"},default:{name:"Edgscan by Bharathcoorg",url:"https://edgscan.live"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:18117872}}}),eb=(0,l.a)({id:2022,name:"Beresheet BereEVM Testnet",network:"edgewareTestnet",nativeCurrency:{decimals:18,name:"Testnet EDG",symbol:"tEDG"},rpcUrls:{default:{http:["https://beresheet-evm.jelliedowl.net"]},public:{http:["https://beresheet-evm.jelliedowl.net"]}},blockExplorers:{etherscan:{name:"Edgscan by Bharathcoorg",url:"https://testnet.edgscan.live"},default:{name:"Edgscan by Bharathcoorg",url:"https://testnet.edgscan.live"}}}),eg=(0,l.a)({id:17777,name:"EOS EVM",network:"eos",nativeCurrency:{decimals:18,name:"EOS",symbol:"EOS"},rpcUrls:{default:{http:["https://api.evm.eosnetwork.com"]},public:{http:["https://api.evm.eosnetwork.com"]}},blockExplorers:{etherscan:{name:"EOS EVM Explorer",url:"https://explorer.evm.eosnetwork.com"},default:{name:"EOS EVM Explorer",url:"https://explorer.evm.eosnetwork.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:7943933}}}),ew=(0,l.a)({id:15557,name:"EOS EVM Testnet",network:"eos",nativeCurrency:{decimals:18,name:"EOS",symbol:"EOS"},rpcUrls:{default:{http:["https://api.testnet.evm.eosnetwork.com"]},public:{http:["https://api.testnet.evm.eosnetwork.com"]}},blockExplorers:{etherscan:{name:"EOS EVM Testnet Explorer",url:"https://explorer.testnet.evm.eosnetwork.com"},default:{name:"EOS EVM Testnet Explorer",url:"https://explorer.testnet.evm.eosnetwork.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:9067940}},testnet:!0}),ey=(0,l.a)({id:9001,name:"Evmos",network:"evmos",nativeCurrency:{decimals:18,name:"Evmos",symbol:"EVMOS"},rpcUrls:{default:{http:["https://eth.bd.evmos.org:8545"]},public:{http:["https://eth.bd.evmos.org:8545"]}},blockExplorers:{default:{name:"Evmos Block Explorer",url:"https://escan.live"}}}),ev=(0,l.a)({id:9e3,name:"Evmos Testnet",network:"evmos-testnet",nativeCurrency:{decimals:18,name:"Evmos",symbol:"EVMOS"},rpcUrls:{default:{http:["https://eth.bd.evmos.dev:8545"]},public:{http:["https://eth.bd.evmos.dev:8545"]}},blockExplorers:{default:{name:"Evmos Testnet Block Explorer",url:"https://evm.evmos.dev/"}}}),ex=(0,l.a)({id:1994,name:"Ekta",network:"ekta",nativeCurrency:{decimals:18,name:"EKTA",symbol:"EKTA"},rpcUrls:{public:{http:["https://main.ekta.io"]},default:{http:["https://main.ekta.io"]}},blockExplorers:{default:{name:"Ektascan",url:"https://ektascan.io"}}}),eC=(0,l.a)({id:1004,name:"Ekta Testnet",network:"ekta-testnet",nativeCurrency:{decimals:18,name:"EKTA",symbol:"EKTA"},rpcUrls:{public:{http:["https://test.ekta.io:8545"]},default:{http:["https://test.ekta.io:8545"]}},blockExplorers:{default:{name:"Test Ektascan",url:"https://test.ektascan.io"}},testnet:!0}),eE=(0,l.a)({id:250,name:"Fantom",network:"fantom",nativeCurrency:{decimals:18,name:"Fantom",symbol:"FTM"},rpcUrls:{default:{http:["https://rpc.ankr.com/fantom"]},public:{http:["https://rpc.ankr.com/fantom"]}},blockExplorers:{etherscan:{name:"FTMScan",url:"https://ftmscan.com"},default:{name:"FTMScan",url:"https://ftmscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:33001987}}}),ek=(0,l.a)({id:4002,name:"Fantom Testnet",network:"fantom-testnet",nativeCurrency:{decimals:18,name:"Fantom",symbol:"FTM"},rpcUrls:{default:{http:["https://rpc.testnet.fantom.network"]},public:{http:["https://rpc.testnet.fantom.network"]}},blockExplorers:{etherscan:{name:"FTMScan",url:"https://testnet.ftmscan.com"},default:{name:"FTMScan",url:"https://testnet.ftmscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:8328688}}}),eS=(0,l.a)({id:12306,name:"Fibo Chain",network:"fibochain",nativeCurrency:{decimals:18,name:"fibo",symbol:"FIBO"},rpcUrls:{default:{http:["https://network.hzroc.art"]},public:{http:["https://network.hzroc.art"]}},blockExplorers:{default:{name:"FiboScan",url:"https://scan.fibochain.org"}}}),eA=(0,l.a)({id:314,name:"Filecoin Mainnet",network:"filecoin-mainnet",nativeCurrency:{decimals:18,name:"filecoin",symbol:"FIL"},rpcUrls:{default:{http:["https://api.node.glif.io/rpc/v1"]},public:{http:["https://api.node.glif.io/rpc/v1"]}},blockExplorers:{default:{name:"Filfox",url:"https://filfox.info/en"},filscan:{name:"Filscan",url:"https://filscan.io"},filscout:{name:"Filscout",url:"https://filscout.io/en"},glif:{name:"Glif",url:"https://explorer.glif.io"}}}),eP=(0,l.a)({id:314159,name:"Filecoin Calibration",network:"filecoin-calibration",nativeCurrency:{decimals:18,name:"testnet filecoin",symbol:"tFIL"},rpcUrls:{default:{http:["https://api.calibration.node.glif.io/rpc/v1"]},public:{http:["https://api.calibration.node.glif.io/rpc/v1"]}},blockExplorers:{default:{name:"Filscan",url:"https://calibration.filscan.io"}}}),e_=(0,l.a)({id:3141,name:"Filecoin Hyperspace",network:"filecoin-hyperspace",nativeCurrency:{decimals:18,name:"testnet filecoin",symbol:"tFIL"},rpcUrls:{default:{http:["https://api.hyperspace.node.glif.io/rpc/v1"]},public:{http:["https://api.hyperspace.node.glif.io/rpc/v1"]}},blockExplorers:{default:{name:"Filfox",url:"https://hyperspace.filfox.info/en"},filscan:{name:"Filscan",url:"https://hyperspace.filscan.io"}}}),eD=(0,l.a)({id:14,name:"Flare Mainnet",network:"flare-mainnet",nativeCurrency:{decimals:18,name:"flare",symbol:"FLR"},rpcUrls:{default:{http:["https://flare-api.flare.network/ext/C/rpc"]},public:{http:["https://flare-api.flare.network/ext/C/rpc"]}},blockExplorers:{default:{name:"Flare Explorer",url:"https://flare-explorer.flare.network"}}}),e$=(0,l.a)({id:114,name:"Coston2",network:"coston2",nativeCurrency:{decimals:18,name:"coston2flare",symbol:"C2FLR"},rpcUrls:{default:{http:["https://coston2-api.flare.network/ext/C/rpc"]},public:{http:["https://coston2-api.flare.network/ext/C/rpc"]}},blockExplorers:{default:{name:"Coston2 Explorer",url:"https://coston2-explorer.flare.network"}},testnet:!0}),eO=(0,l.a)({id:31337,name:"Foundry",network:"foundry",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["http://127.0.0.1:8545"],webSocket:["ws://127.0.0.1:8545"]},public:{http:["http://127.0.0.1:8545"],webSocket:["ws://127.0.0.1:8545"]}}}),eT=(0,l.a)({id:122,name:"Fuse",network:"fuse",nativeCurrency:{name:"Fuse",symbol:"FUSE",decimals:18},rpcUrls:{default:{http:["https://rpc.fuse.io"]},public:{http:["https://rpc.fuse.io"]}},blockExplorers:{default:{name:"Fuse Explorer",url:"https://explorer.fuse.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:16146628}}}),eI=(0,l.a)({id:123,name:"Fuse Sparknet",network:"fuse",nativeCurrency:{name:"Spark",symbol:"SPARK",decimals:18},rpcUrls:{default:{http:["https://rpc.fusespark.io"]},public:{http:["https://rpc.fusespark.io"]}},blockExplorers:{default:{name:"Sparkent Explorer",url:"https://explorer.fusespark.io"}}}),eR=(0,l.a)({id:4689,name:"IoTeX",network:"iotex",nativeCurrency:{decimals:18,name:"IoTeX",symbol:"IOTX"},rpcUrls:{default:{http:["https://babel-api.mainnet.iotex.io"],webSocket:["wss://babel-api.mainnet.iotex.io"]},public:{http:["https://babel-api.mainnet.iotex.io"],webSocket:["wss://babel-api.mainnet.iotex.io"]}},blockExplorers:{default:{name:"IoTeXScan",url:"https://iotexscan.io"}}}),eN=(0,l.a)({id:4690,name:"IoTeX Testnet",network:"iotex-testnet",nativeCurrency:{decimals:18,name:"IoTeX",symbol:"IOTX"},rpcUrls:{default:{http:["https://babel-api.testnet.iotex.io"],webSocket:["wss://babel-api.testnet.iotex.io"]},public:{http:["https://babel-api.testnet.iotex.io"],webSocket:["wss://babel-api.testnet.iotex.io"]}},blockExplorers:{default:{name:"IoTeXScan",url:"https://testnet.iotexscan.io"}}}),eU=(0,l.a)({id:1663,name:"Horizen Gobi Testnet",network:"gobi",nativeCurrency:{decimals:18,name:"Test ZEN",symbol:"tZEN"},rpcUrls:{public:{http:["https://gobi-testnet.horizenlabs.io/ethv1"]},default:{http:["https://gobi-testnet.horizenlabs.io/ethv1"]}},blockExplorers:{default:{name:"Gobi Explorer",url:"https://gobi-explorer.horizen.io"}},contracts:{},testnet:!0});var eB=r(6891);let eM=(0,l.a)({id:100,name:"Gnosis",network:"gnosis",nativeCurrency:{decimals:18,name:"Gnosis",symbol:"xDAI"},rpcUrls:{default:{http:["https://rpc.gnosischain.com"]},public:{http:["https://rpc.gnosischain.com"]}},blockExplorers:{etherscan:{name:"Gnosisscan",url:"https://gnosisscan.io"},default:{name:"Gnosis Chain Explorer",url:"https://blockscout.com/xdai/mainnet"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:21022491}}}),ej=(0,l.a)({id:10200,name:"Gnosis Chiado",network:"chiado",nativeCurrency:{decimals:18,name:"Gnosis",symbol:"xDAI"},rpcUrls:{default:{http:["https://rpc.chiadochain.net"]},public:{http:["https://rpc.chiadochain.net"]}},blockExplorers:{default:{name:"Blockscout",url:"https://blockscout.chiadochain.net"}},testnet:!0}),eL=(0,l.a)({id:31337,name:"Hardhat",network:"hardhat",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["http://127.0.0.1:8545"]},public:{http:["http://127.0.0.1:8545"]}}}),eF=(0,l.a)({id:16666e5,name:"Harmony One",network:"harmony",nativeCurrency:{name:"Harmony",symbol:"ONE",decimals:18},rpcUrls:{public:{http:["https://rpc.ankr.com/harmony"]},default:{http:["https://rpc.ankr.com/harmony"]}},blockExplorers:{default:{name:"Harmony Explorer",url:"https://explorer.harmony.one"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:24185753}}}),ez=(0,l.a)({id:11235,name:"HAQQ Mainnet",network:"haqq-mainnet",nativeCurrency:{decimals:18,name:"Islamic Coin",symbol:"ISLM"},rpcUrls:{default:{http:["https://rpc.eth.haqq.network"]},public:{http:["https://rpc.eth.haqq.network"]}},blockExplorers:{default:{name:"HAQQ Explorer",url:"https://explorer.haqq.network"}}}),eH=(0,l.a)({id:54211,name:"HAQQ Testedge 2",network:"haqq-testedge-2",nativeCurrency:{decimals:18,name:"Islamic Coin",symbol:"ISLMT"},rpcUrls:{default:{http:["https://rpc.eth.testedge2.haqq.network"]},public:{http:["https://rpc.eth.testedge2.haqq.network"]}},blockExplorers:{default:{name:"HAQQ Explorer",url:"https://explorer.testedge2.haqq.network"}}}),eW=(0,l.a)({id:17e3,network:"holesky",name:"Holesky",nativeCurrency:{name:"Holesky Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://ethereum-holesky.publicnode.com"]},public:{http:["wss://ethereum-holesky.publicnode.com"]}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:77}},testnet:!0}),eq=(0,l.a)({id:8217,name:"Klaytn",network:"klaytn",nativeCurrency:{decimals:18,name:"Klaytn",symbol:"KLAY"},rpcUrls:{default:{http:["https://cypress.fautor.app/archive"]},public:{http:["https://cypress.fautor.app/archive"]}},blockExplorers:{etherscan:{name:"KlaytnScope",url:"https://scope.klaytn.com"},default:{name:"KlaytnScope",url:"https://scope.klaytn.com"}}}),eG=(0,l.a)({id:255,network:"kroma",name:"Kroma",nativeCurrency:{name:"ETH",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://api.kroma.network"]},public:{http:["https://api.kroma.network"]}},blockExplorers:{default:{name:"Kroma Explorer",url:"https://blockscout.kroma.network"}},testnet:!1}),eZ=(0,l.a)({id:2358,network:"kroma-sepolia",name:"Kroma Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://api.sepolia.kroma.network"]},public:{http:["https://api.sepolia.kroma.network"]}},blockExplorers:{default:{name:"Kroma Sepolia Explorer",url:"https://blockscout.sepolia.kroma.network"}},testnet:!0}),eV=(0,l.a)({id:59144,name:"Linea Mainnet",network:"linea-mainnet",nativeCurrency:{name:"Linea Ether",symbol:"ETH",decimals:18},rpcUrls:{infura:{http:["https://linea-mainnet.infura.io/v3"],webSocket:["wss://linea-mainnet.infura.io/ws/v3"]},default:{http:["https://rpc.linea.build"],webSocket:["wss://rpc.linea.build"]},public:{http:["https://rpc.linea.build"],webSocket:["wss://rpc.linea.build"]}},blockExplorers:{default:{name:"Etherscan",url:"https://lineascan.build"},etherscan:{name:"Etherscan",url:"https://lineascan.build"},blockscout:{name:"Blockscout",url:"https://explorer.linea.build"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:42}},testnet:!1}),eK=(0,l.a)({id:59140,name:"Linea Goerli Testnet",network:"linea-testnet",nativeCurrency:{name:"Linea Ether",symbol:"ETH",decimals:18},rpcUrls:{infura:{http:["https://linea-goerli.infura.io/v3"],webSocket:["wss://linea-goerli.infura.io/ws/v3"]},default:{http:["https://rpc.goerli.linea.build"],webSocket:["wss://rpc.goerli.linea.build"]},public:{http:["https://rpc.goerli.linea.build"],webSocket:["wss://rpc.goerli.linea.build"]}},blockExplorers:{default:{name:"Etherscan",url:"https://goerli.lineascan.build"},etherscan:{name:"Etherscan",url:"https://goerli.lineascan.build"},blockscout:{name:"Blockscout",url:"https://explorer.goerli.linea.build"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:498623}},testnet:!0}),eQ=(0,l.a)({id:1337,name:"Localhost",network:"localhost",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["http://127.0.0.1:8545"]},public:{http:["http://127.0.0.1:8545"]}}});var eY=r(66403);let eX=(0,l.a)({id:169,name:"Manta Pacific Mainnet",network:"manta",nativeCurrency:{decimals:18,name:"ETH",symbol:"ETH"},rpcUrls:{default:{http:["https://pacific-rpc.manta.network/http"]},public:{http:["https://pacific-rpc.manta.network/http"]}},blockExplorers:{etherscan:{name:"Manta Explorer",url:"https://pacific-explorer.manta.network"},default:{name:"Manta Explorer",url:"https://pacific-explorer.manta.network"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:332890}}}),eJ=(0,l.a)({id:3441005,name:"Manta Pacific Testnet",network:"manta-testnet",nativeCurrency:{decimals:18,name:"ETH",symbol:"ETH"},rpcUrls:{default:{http:["https://manta-testnet.calderachain.xyz/http"]},public:{http:["https://manta-testnet.calderachain.xyz/http"]}},blockExplorers:{etherscan:{name:"Manta Testnet Explorer",url:"https://pacific-explorer.testnet.manta.network"},default:{name:"Manta Testnet Explorer",url:"https://pacific-explorer.testnet.manta.network"}},contracts:{multicall3:{address:"0x211B1643b95Fe76f11eD8880EE810ABD9A4cf56C",blockCreated:419915}},testnet:!0}),e0=(0,l.a)({id:5e3,name:"Mantle",network:"mantle",nativeCurrency:{decimals:18,name:"MNT",symbol:"MNT"},rpcUrls:{default:{http:["https://rpc.mantle.xyz"]},public:{http:["https://rpc.mantle.xyz"]}},blockExplorers:{etherscan:{name:"Mantle Explorer",url:"https://explorer.mantle.xyz"},default:{name:"Mantle Explorer",url:"https://explorer.mantle.xyz"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:304717}}}),e1=(0,l.a)({id:5001,name:"Mantle Testnet",network:"mantle",nativeCurrency:{decimals:18,name:"MNT",symbol:"MNT"},rpcUrls:{default:{http:["https://rpc.testnet.mantle.xyz"]},public:{http:["https://rpc.testnet.mantle.xyz"]}},blockExplorers:{etherscan:{name:"Mantle Testnet Explorer",url:"https://explorer.testnet.mantle.xyz"},default:{name:"Mantle Testnet Explorer",url:"https://explorer.testnet.mantle.xyz"}},testnet:!0}),e2=(0,l.a)({id:82,name:"Meter",network:"meter",nativeCurrency:{decimals:18,name:"MTR",symbol:"MTR"},rpcUrls:{default:{http:["https://rpc.meter.io"]},public:{http:["https://rpc.meter.io"]}},blockExplorers:{default:{name:"MeterScan",url:"https://scan.meter.io"}}}),e3=(0,l.a)({id:83,name:"Meter Testnet",network:"meter-testnet",nativeCurrency:{decimals:18,name:"MTR",symbol:"MTR"},rpcUrls:{default:{http:["https://rpctest.meter.io"]},public:{http:["https://rpctest.meter.io"]}},blockExplorers:{default:{name:"MeterTestnetScan",url:"https://scan-warringstakes.meter.io"}}}),e5=(0,l.a)({id:1088,name:"Metis",network:"andromeda",nativeCurrency:{decimals:18,name:"Metis",symbol:"METIS"},rpcUrls:{default:{http:["https://andromeda.metis.io/?owner=1088"]},public:{http:["https://andromeda.metis.io/?owner=1088"]}},blockExplorers:{default:{name:"Andromeda Explorer",url:"https://andromeda-explorer.metis.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:2338552}}}),e6=(0,l.a)({id:599,name:"Metis Goerli",network:"metis-goerli",nativeCurrency:{decimals:18,name:"Metis Goerli",symbol:"METIS"},rpcUrls:{default:{http:["https://goerli.gateway.metisdevops.link"]},public:{http:["https://goerli.gateway.metisdevops.link"]}},blockExplorers:{default:{name:"Metis Goerli Explorer",url:"https://goerli.explorer.metisdevops.link"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:1006207}}}),e4=(0,l.a)({id:7518,network:"MEVerse",name:"MEVerse Chain Mainnet",nativeCurrency:{decimals:18,name:"MEVerse",symbol:"MEV"},rpcUrls:{default:{http:["https://rpc.meversemainnet.io"]},public:{http:["https://rpc.meversemainnet.io"]}},blockExplorers:{default:{name:"Explorer",url:"https://www.meversescan.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:86881340}}}),e8=(0,l.a)({id:4759,network:"MEVerse Testnet",name:"MEVerse Chain Testnet",nativeCurrency:{decimals:18,name:"MEVerse",symbol:"MEV"},rpcUrls:{default:{http:["https://rpc.meversetestnet.io"]},public:{http:["https://rpc.meversetestnet.io"]}},blockExplorers:{default:{name:"Explorer",url:"https://testnet.meversescan.io/"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:64371115}},testnet:!0}),e7=(0,l.a)({id:919,name:"Mode Testnet",network:"mode-testnet",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://sepolia.mode.network"]},public:{http:["https://sepolia.mode.network"]}},blockExplorers:{default:{name:"Blockscout",url:"https://sepolia.explorer.mode.network"}},contracts:{multicall3:{address:"0xBAba8373113Fb7a68f195deF18732e01aF8eDfCF",blockCreated:3019007}},testnet:!0}),e9=(0,l.a)({id:1287,name:"Moonbase Alpha",network:"moonbase-alpha",nativeCurrency:{decimals:18,name:"DEV",symbol:"DEV"},rpcUrls:{default:{http:["https://rpc.api.moonbase.moonbeam.network"],webSocket:["wss://wss.api.moonbase.moonbeam.network"]},public:{http:["https://rpc.api.moonbase.moonbeam.network"],webSocket:["wss://wss.api.moonbase.moonbeam.network"]}},blockExplorers:{default:{name:"Moonscan",url:"https://moonbase.moonscan.io"},etherscan:{name:"Moonscan",url:"https://moonbase.moonscan.io"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:1850686}},testnet:!0}),te=(0,l.a)({id:1284,name:"Moonbeam",network:"moonbeam",nativeCurrency:{decimals:18,name:"GLMR",symbol:"GLMR"},rpcUrls:{public:{http:["https://moonbeam.public.blastapi.io"],webSocket:["wss://moonbeam.public.blastapi.io"]},default:{http:["https://moonbeam.public.blastapi.io"],webSocket:["wss://moonbeam.public.blastapi.io"]}},blockExplorers:{default:{name:"Moonscan",url:"https://moonscan.io"},etherscan:{name:"Moonscan",url:"https://moonscan.io"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:609002}},testnet:!1}),tt=(0,l.a)({id:1281,name:"Moonbeam Development Node",network:"development",nativeCurrency:{decimals:18,name:"DEV",symbol:"DEV"},rpcUrls:{default:{http:["http://127.0.0.1:9944"],webSocket:["wss://127.0.0.1:9944"]},public:{http:["http://127.0.0.1:9944"],webSocket:["wss://127.0.0.1:9944"]}}}),tr=(0,l.a)({id:1285,name:"Moonriver",network:"moonriver",nativeCurrency:{decimals:18,name:"MOVR",symbol:"MOVR"},rpcUrls:{public:{http:["https://moonriver.public.blastapi.io"],webSocket:["wss://moonriver.public.blastapi.io"]},default:{http:["https://moonriver.public.blastapi.io"],webSocket:["wss://moonriver.public.blastapi.io"]}},blockExplorers:{default:{name:"Moonscan",url:"https://moonriver.moonscan.io"},etherscan:{name:"Moonscan",url:"https://moonriver.moonscan.io"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:1597904}},testnet:!1}),tn=(0,l.a)({id:245022926,network:"neonDevnet",name:"Neon EVM DevNet",nativeCurrency:{name:"NEON",symbol:"NEON",decimals:18},rpcUrls:{default:{http:["https://devnet.neonevm.org"]},public:{http:["https://devnet.neonevm.org"]}},blockExplorers:{default:{name:"Neonscan",url:"https://neonscan.org"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:205206112}},testnet:!0}),ti=(0,l.a)({id:4242,name:"Nexi",network:"nexi",nativeCurrency:{name:"Nexi",symbol:"NEXI",decimals:18},rpcUrls:{default:{http:["https://rpc.chain.nexi.technology"]},public:{http:["https://rpc.chain.nexi.technology"]}},blockExplorers:{etherscan:{name:"NexiScan",url:"https://www.nexiscan.com"},default:{name:"NexiScan",url:"https://www.nexiscan.com"}},contracts:{multicall3:{address:"0x0277A46Cc69A57eE3A6C8c158bA874832F718B8E",blockCreated:25770160}}}),ta=(0,l.a)({id:240,name:"Nexilix Smart Chain",network:"nexilix",nativeCurrency:{decimals:18,name:"Nexilix",symbol:"NEXILIX"},rpcUrls:{default:{http:["https://rpcurl.pos.nexilix.com"]},public:{http:["https://rpcurl.pos.nexilix.com"]}},blockExplorers:{etherscan:{name:"NexilixScan",url:"https://scan.nexilix.com"},default:{name:"NexilixScan",url:"https://scan.nexilix.com"}},contracts:{multicall3:{address:"0x58381c8e2BF9d0C2C4259cA14BdA9Afe02831244",blockCreated:74448}}}),to=(0,l.a)({id:248,name:"Oasys",network:"oasys",nativeCurrency:{name:"Oasys",symbol:"OAS",decimals:18},rpcUrls:{default:{http:["https://rpc.mainnet.oasys.games"]},public:{http:["https://rpc.mainnet.oasys.games"]}},blockExplorers:{default:{name:"OasysScan",url:"https://scan.oasys.games"}}}),ts=(0,l.a)({id:66,name:"OKC",network:"okc",nativeCurrency:{decimals:18,name:"OKT",symbol:"OKT"},rpcUrls:{default:{http:["https://exchainrpc.okex.org"]},public:{http:["https://exchainrpc.okex.org"]}},blockExplorers:{default:{name:"oklink",url:"https://www.oklink.com/okc"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:10364792}}}),tl=(0,l.a)({id:10,name:"OP Mainnet",network:"optimism",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://opt-mainnet.g.alchemy.com/v2"],webSocket:["wss://opt-mainnet.g.alchemy.com/v2"]},infura:{http:["https://optimism-mainnet.infura.io/v3"],webSocket:["wss://optimism-mainnet.infura.io/ws/v3"]},default:{http:["https://mainnet.optimism.io"]},public:{http:["https://mainnet.optimism.io"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://optimistic.etherscan.io"},default:{name:"Optimism Explorer",url:"https://explorer.optimism.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:4286263}}},{formatters:C}),tc=(0,l.a)({id:420,name:"Optimism Goerli",network:"optimism-goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://opt-goerli.g.alchemy.com/v2"],webSocket:["wss://opt-goerli.g.alchemy.com/v2"]},infura:{http:["https://optimism-goerli.infura.io/v3"],webSocket:["wss://optimism-goerli.infura.io/ws/v3"]},default:{http:["https://goerli.optimism.io"]},public:{http:["https://goerli.optimism.io"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli-optimism.etherscan.io"},default:{name:"Etherscan",url:"https://goerli-optimism.etherscan.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:49461}},testnet:!0},{formatters:C}),tu=(0,l.a)({id:11155420,name:"Optimism Sepolia",network:"optimism-sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://sepolia.optimism.io"]},public:{http:["https://sepolia.optimism.io"]}},blockExplorers:{blockscout:{name:"Blockscout",url:"https://optimism-sepolia.blockscout.com"},default:{name:"Blockscout",url:"https://optimism-sepolia.blockscout.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:1620204}},testnet:!0},{formatters:C}),th=(0,l.a)({id:204,name:"opBNB",network:"opBNB Mainnet",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:{public:{http:["https://opbnb-mainnet-rpc.bnbchain.org"]},default:{http:["https://opbnb-mainnet-rpc.bnbchain.org"]}},blockExplorers:{default:{name:"opbnbscan",url:"https://mainnet.opbnbscan.com"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:512881}}}),td=(0,l.a)({id:5611,name:"opBNB Testnet",network:"opBNB Testnet",nativeCurrency:{decimals:18,name:"tBNB",symbol:"tBNB"},rpcUrls:{public:{http:["https://opbnb-testnet-rpc.bnbchain.org"]},default:{http:["https://opbnb-testnet-rpc.bnbchain.org"]}},blockExplorers:{default:{name:"opbnbscan",url:"https://opbnbscan.com"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:3705108}},testnet:!0}),tp=(0,l.a)({id:242,name:"Plinga",network:"plinga",nativeCurrency:{name:"Plinga",symbol:"PLINGA",decimals:18},rpcUrls:{default:{http:["https://rpcurl.mainnet.plgchain.com"]},public:{http:["https://rpcurl.mainnet.plgchain.com"]}},blockExplorers:{default:{name:"Plgscan",url:"https://www.plgscan.com"}},contracts:{multicall3:{address:"0x0989576160f2e7092908BB9479631b901060b6e4",blockCreated:204489}}}),tf=(0,l.a)({id:137,name:"Polygon",network:"matic",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:{alchemy:{http:["https://polygon-mainnet.g.alchemy.com/v2"],webSocket:["wss://polygon-mainnet.g.alchemy.com/v2"]},infura:{http:["https://polygon-mainnet.infura.io/v3"],webSocket:["wss://polygon-mainnet.infura.io/ws/v3"]},default:{http:["https://polygon-rpc.com"]},public:{http:["https://polygon-rpc.com"]}},blockExplorers:{etherscan:{name:"PolygonScan",url:"https://polygonscan.com"},default:{name:"PolygonScan",url:"https://polygonscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:25770160}}}),tm=(0,l.a)({id:80001,name:"Polygon Mumbai",network:"maticmum",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:{alchemy:{http:["https://polygon-mumbai.g.alchemy.com/v2"],webSocket:["wss://polygon-mumbai.g.alchemy.com/v2"]},infura:{http:["https://polygon-mumbai.infura.io/v3"],webSocket:["wss://polygon-mumbai.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/polygon_mumbai"]},public:{http:["https://rpc.ankr.com/polygon_mumbai"]}},blockExplorers:{etherscan:{name:"PolygonScan",url:"https://mumbai.polygonscan.com"},default:{name:"PolygonScan",url:"https://mumbai.polygonscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:25770160}},testnet:!0}),tb=(0,l.a)({id:1442,name:"Polygon zkEVM Testnet",network:"polygon-zkevm-testnet",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.public.zkevm-test.net"]},public:{http:["https://rpc.public.zkevm-test.net"]}},blockExplorers:{blockscout:{name:"Blockscout",url:"https://explorer.public.zkevm-test.net"},default:{name:"PolygonScan",url:"https://testnet-zkevm.polygonscan.com"}},testnet:!0,contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:525686}}}),tg=(0,l.a)({id:1101,name:"Polygon zkEVM",network:"polygon-zkevm",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://zkevm-rpc.com"]},public:{http:["https://zkevm-rpc.com"]}},blockExplorers:{default:{name:"PolygonScan",url:"https://zkevm.polygonscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:57746}}}),tw=(0,l.a)({id:369,network:"pulsechain",name:"PulseChain",nativeCurrency:{name:"Pulse",symbol:"PLS",decimals:18},testnet:!1,rpcUrls:{default:{http:["https://rpc.pulsechain.com"],webSocket:["wss://ws.pulsechain.com"]},public:{http:["https://rpc.pulsechain.com"],webSocket:["wss://ws.pulsechain.com"]}},blockExplorers:{default:{name:"PulseScan",url:"https://scan.pulsechain.com"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}}),ty=(0,l.a)({id:943,network:"pulsechainV4",name:"PulseChain V4",testnet:!0,nativeCurrency:{name:"V4 Pulse",symbol:"v4PLS",decimals:18},rpcUrls:{default:{http:["https://rpc.v4.testnet.pulsechain.com"],webSocket:["wss://ws.v4.testnet.pulsechain.com"]},public:{http:["https://rpc.v4.testnet.pulsechain.com"],webSocket:["wss://ws.v4.testnet.pulsechain.com"]}},blockExplorers:{default:{name:"PulseScan",url:"https://scan.v4.testnet.pulsechain.com"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}}),tv=(0,l.a)({id:35441,name:"Q Mainnet",network:"q-mainnet",nativeCurrency:{decimals:18,name:"Q",symbol:"Q"},rpcUrls:{default:{http:["https://rpc.q.org"]},public:{http:["https://rpc.q.org"]}},blockExplorers:{default:{name:"Q Mainnet Explorer",url:"https://explorer.q.org"}}}),tx=(0,l.a)({id:35443,name:"Q Testnet",network:"q-testnet",nativeCurrency:{decimals:18,name:"Q",symbol:"Q"},rpcUrls:{default:{http:["https://rpc.qtestnet.org"]},public:{http:["https://rpc.qtestnet.org"]}},blockExplorers:{default:{name:"Q Testnet Explorer",url:"https://explorer.qtestnet.org"}},testnet:!0}),tC=(0,l.a)({id:570,name:"Rollux Mainnet",network:"rollux",nativeCurrency:{decimals:18,name:"Syscoin",symbol:"SYS"},rpcUrls:{default:{http:["https://rpc.rollux.com"],webSocket:["wss://rpc.rollux.com/wss"]},public:{http:["https://rollux.public-rpc.com"]}},blockExplorers:{default:{name:"RolluxExplorer",url:"https://explorer.rollux.com"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:119222}}}),tE=(0,l.a)({id:57e3,name:"Rollux Testnet",network:"rollux-testnet",nativeCurrency:{decimals:18,name:"Syscoin",symbol:"SYS"},rpcUrls:{default:{http:["https://rpc-tanenbaum.rollux.com/"],webSocket:["wss://rpc-tanenbaum.rollux.com/wss"]},public:{http:["https://rpc-tanenbaum.rollux.com/"]}},blockExplorers:{default:{name:"RolluxTestnetExplorer",url:"https://rollux.tanenbaum.io"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:1813675}}}),tk=(0,l.a)({id:2020,name:"Ronin",network:"ronin",nativeCurrency:{name:"RON",symbol:"RON",decimals:18},rpcUrls:{default:{http:["https://api.roninchain.com/rpc"]},public:{http:["https://api.roninchain.com/rpc"]}},blockExplorers:{default:{name:"Ronin Explorer",url:"https://app.roninchain.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:26023535}}}),tS=(0,l.a)({id:2021,name:"Saigon Testnet",network:"saigon",nativeCurrency:{name:"RON",symbol:"RON",decimals:18},rpcUrls:{default:{http:["https://saigon-testnet.roninchain.com/rpc"]},public:{http:["https://saigon-testnet.roninchain.com/rpc"]}},blockExplorers:{default:{name:"Saigon Explorer",url:"https://saigon-explorer.roninchain.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:18736871}},testnet:!0}),tA=(0,l.a)({id:534352,name:"Scroll",network:"scroll",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.scroll.io"],webSocket:["wss://wss-rpc.scroll.io/ws"]},public:{http:["https://rpc.scroll.io"],webSocket:["wss://wss-rpc.scroll.io/ws"]}},blockExplorers:{default:{name:"Scrollscan",url:"https://scrollscan.com"},blockscout:{name:"Blockscout",url:"https://blockscout.scroll.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14}},testnet:!1}),tP=(0,l.a)({id:534351,name:"Scroll Sepolia",network:"scroll-sepolia",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://sepolia-rpc.scroll.io"],webSocket:["wss://sepolia-rpc.scroll.io/ws"]},public:{http:["https://sepolia-rpc.scroll.io"],webSocket:["wss://sepolia-rpc.scroll.io/ws"]}},blockExplorers:{default:{name:"Blockscout",url:"https://sepolia-blockscout.scroll.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:9473}},testnet:!0}),t_=(0,l.a)({id:534353,name:"Scroll Testnet",network:"scroll-testnet",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://alpha-rpc.scroll.io/l2"],webSocket:["wss://alpha-rpc.scroll.io/l2/ws"]},public:{http:["https://alpha-rpc.scroll.io/l2"],webSocket:["wss://alpha-rpc.scroll.io/l2/ws"]}},blockExplorers:{default:{name:"Blockscout",url:"https://blockscout.scroll.io"}},testnet:!0}),tD=(0,l.a)({id:11155111,network:"sepolia",name:"Sepolia",nativeCurrency:{name:"Sepolia Ether",symbol:"SEP",decimals:18},rpcUrls:{alchemy:{http:["https://eth-sepolia.g.alchemy.com/v2"],webSocket:["wss://eth-sepolia.g.alchemy.com/v2"]},infura:{http:["https://sepolia.infura.io/v3"],webSocket:["wss://sepolia.infura.io/ws/v3"]},default:{http:["https://rpc.sepolia.org"]},public:{http:["https://rpc.sepolia.org"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://sepolia.etherscan.io"},default:{name:"Etherscan",url:"https://sepolia.etherscan.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:751532},ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x21B000Fd62a880b2125A61e36a284BB757b76025",blockCreated:3914906}},testnet:!0}),t$=(0,l.a)({id:391845894,name:"SKALE | Block Brawlers",network:"skale-brawl",nativeCurrency:{name:"BRAWL",symbol:"BRAWL",decimals:18},rpcUrls:{default:{http:["https://mainnet.skalenodes.com/v1/frayed-decent-antares"],webSocket:["wss://mainnet.skalenodes.com/v1/ws/frayed-decent-antares"]},public:{http:["https://mainnet.skalenodes.com/v1/frayed-decent-antares"],webSocket:["wss://mainnet.skalenodes.com/v1/ws/frayed-decent-antares"]}},blockExplorers:{blockscout:{name:"SKALE Explorer",url:"https://frayed-decent-antares.explorer.mainnet.skalenodes.com"},default:{name:"SKALE Explorer",url:"https://frayed-decent-antares.explorer.mainnet.skalenodes.com"}},contracts:{}}),tO=(0,l.a)({id:1564830818,name:"SKALE | Calypso NFT Hub",network:"skale-calypso",nativeCurrency:{name:"sFUEL",symbol:"sFUEL",decimals:18},rpcUrls:{default:{http:["https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague"],webSocket:["wss://mainnet.skalenodes.com/v1/ws/honorable-steel-rasalhague"]},public:{http:["https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague"],webSocket:["wss://mainnet.skalenodes.com/v1/ws/honorable-steel-rasalhague"]}},blockExplorers:{blockscout:{name:"SKALE Explorer",url:"https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com"},default:{name:"SKALE Explorer",url:"https://honorable-steel-rasalhague.explorer.mainnet.skalenodes.com"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:3107626}}}),tT=(0,l.a)({id:344106930,name:"SKALE | Calypso NFT Hub Testnet",network:"skale-calypso-testnet",nativeCurrency:{name:"sFUEL",symbol:"sFUEL",decimals:18},rpcUrls:{default:{http:["https://staging-v3.skalenodes.com/v1/staging-utter-unripe-menkar"],webSocket:["wss://staging-v3.skalenodes.com/v1/ws/staging-utter-unripe-menkar"]},public:{http:["https://staging-v3.skalenodes.com/v1/staging-utter-unripe-menkar"],webSocket:["wss://staging-v3.skalenodes.com/v1/ws/staging-utter-unripe-menkar"]}},blockExplorers:{blockscout:{name:"SKALE Explorer",url:"https://staging-utter-unripe-menkar.explorer.staging-v3.skalenodes.com"},default:{name:"SKALE Explorer",url:"https://staging-utter-unripe-menkar.explorer.staging-v3.skalenodes.com"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:2131424}},testnet:!0}),tI=(0,l.a)({id:1351057110,name:"SKALE | Chaos Testnet",network:"skale-chaos-testnet",nativeCurrency:{name:"sFUEL",symbol:"sFUEL",decimals:18},rpcUrls:{default:{http:["https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix"],webSocket:["wss://staging-v3.skalenodes.com/v1/ws/staging-fast-active-bellatrix"]},public:{http:["https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix"],webSocket:["wss://staging-v3.skalenodes.com/v1/ws/staging-fast-active-bellatrix"]}},blockExplorers:{blockscout:{name:"SKALE Explorer",url:"https://staging-fast-active-bellatrix.explorer.staging-v3.skalenodes.com"},default:{name:"SKALE Explorer",url:"https://staging-fast-active-bellatrix.explorer.staging-v3.skalenodes.com"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:1192202}},testnet:!0}),tR=(0,l.a)({id:1026062157,name:"SKALE | CryptoBlades",network:"skale-cryptoblades",nativeCurrency:{name:"sFUEL",symbol:"sFUEL",decimals:18},rpcUrls:{default:{http:["https://mainnet.skalenodes.com/v1/affectionate-immediate-pollux"],webSocket:["wss://mainnet.skalenodes.com/v1/ws/affectionate-immediate-pollux"]},public:{http:["https://mainnet.skalenodes.com/v1/affectionate-immediate-pollux"],webSocket:["wss://mainnet.skalenodes.com/v1/ws/affectionate-immediate-pollux"]}},blockExplorers:{blockscout:{name:"SKALE Explorer",url:"https://affectionate-immediate-pollux.explorer.mainnet.skalenodes.com"},default:{name:"SKALE Explorer",url:"https://affectionate-immediate-pollux.explorer.mainnet.skalenodes.com"}},contracts:{}}),tN=(0,l.a)({id:2046399126,name:"SKALE | Crypto Colosseum",network:"skale-crypto-coloseeum",nativeCurrency:{name:"sFUEL",symbol:"sFUEL",decimals:18},rpcUrls:{default:{http:["https://mainnet.skalenodes.com/v1/haunting-devoted-deneb"],webSocket:["wss://mainnet.skalenodes.com/v1/ws/haunting-devoted-deneb"]},public:{http:["https://mainnet.skalenodes.com/v1/haunting-devoted-deneb"],webSocket:["wss://mainnet.skalenodes.com/v1/ws/haunting-devoted-deneb"]}},blockExplorers:{blockscout:{name:"SKALE Explorer",url:"https://haunting-devoted-deneb.explorer.mainnet.skalenodes.com"},default:{name:"SKALE Explorer",url:"https://haunting-devoted-deneb.explorer.mainnet.skalenodes.com"}},contracts:{}}),tU=(0,l.a)({id:2046399126,name:"SKALE | Europa Liquidity Hub",network:"skale-europa",nativeCurrency:{name:"sFUEL",symbol:"sFUEL",decimals:18},rpcUrls:{default:{http:["https://mainnet.skalenodes.com/v1/elated-tan-skat"],webSocket:["wss://mainnet.skalenodes.com/v1/ws/elated-tan-skat"]},public:{http:["https://mainnet.skalenodes.com/v1/elated-tan-skat"],webSocket:["wss://mainnet.skalenodes.com/v1/ws/elated-tan-skat"]}},blockExplorers:{blockscout:{name:"SKALE Explorer",url:"https://elated-tan-skat.explorer.mainnet.skalenodes.com"},default:{name:"SKALE Explorer",url:"https://elated-tan-skat.explorer.mainnet.skalenodes.com"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:3113495}}}),tB=(0,l.a)({id:476158412,name:"SKALE | Europa Liquidity Hub Testnet",network:"skale-europa-testnet",nativeCurrency:{name:"sFUEL",symbol:"sFUEL",decimals:18},rpcUrls:{default:{http:["https://staging-v3.skalenodes.com/v1/staging-legal-crazy-castor"],webSocket:["wss://staging-v3.skalenodes.com/v1/ws/staging-legal-crazy-castor"]},public:{http:["https://staging-v3.skalenodes.com/v1/staging-legal-crazy-castor"],webSocket:["wss://staging-v3.skalenodes.com/v1/ws/staging-legal-crazy-castor"]}},blockExplorers:{blockscout:{name:"SKALE Explorer",url:"https://staging-legal-crazy-castor.explorer.staging-v3.skalenodes.com"},default:{name:"SKALE Explorer",url:"https://staging-legal-crazy-castor.explorer.staging-v3.skalenodes.com"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:2071911}},testnet:!0}),tM=(0,l.a)({id:2139927552,name:"SKALE | Exorde",network:"skale-exorde",nativeCurrency:{name:"sFUEL",symbol:"sFUEL",decimals:18},rpcUrls:{default:{http:["https://mainnet.skalenodes.com/v1/light-vast-diphda"],webSocket:["wss://mainnet.skalenodes.com/v1/ws/light-vast-diphda"]},public:{http:["https://mainnet.skalenodes.com/v1/light-vast-diphda"],webSocket:["wss://mainnet.skalenodes.com/v1/ws/light-vast-diphda"]}},blockExplorers:{blockscout:{name:"SKALE Explorer",url:"https://light-vast-diphda.explorer.mainnet.skalenodes.com"},default:{name:"SKALE Explorer",url:"https://light-vast-diphda.explorer.mainnet.skalenodes.com"}},contracts:{}}),tj=(0,l.a)({id:1273227453,name:"SKALE | Human Protocol",network:"skale-human-protocol",nativeCurrency:{name:"sFUEL",symbol:"sFUEL",decimals:18},rpcUrls:{default:{http:["https://mainnet.skalenodes.com/v1/wan-red-ain"],webSocket:["wss://mainnet.skalenodes.com/v1/ws/wan-red-ain"]},public:{http:["https://mainnet.skalenodes.com/v1/wan-red-ain"],webSocket:["wss://mainnet.skalenodes.com/v1/ws/wan-red-ain"]}},blockExplorers:{blockscout:{name:"SKALE Explorer",url:"https://wan-red-ain.explorer.mainnet.skalenodes.com"},default:{name:"SKALE Explorer",url:"https://wan-red-ain.explorer.mainnet.skalenodes.com"}},contracts:{}}),tL=(0,l.a)({id:1482601649,name:"SKALE | Nebula Gaming Hub",network:"skale-nebula",nativeCurrency:{name:"sFUEL",symbol:"sFUEL",decimals:18},rpcUrls:{default:{http:["https://mainnet.skalenodes.com/v1/green-giddy-denebola"],webSocket:["wss://mainnet.skalenodes.com/v1/ws/green-giddy-denebola"]},public:{http:["https://mainnet.skalenodes.com/v1/green-giddy-denebola"],webSocket:["wss://mainnet.skalenodes.com/v1/ws/green-giddy-denebola"]}},blockExplorers:{blockscout:{name:"SKALE Explorer",url:"https://green-giddy-denebola.explorer.mainnet.skalenodes.com"},default:{name:"SKALE Explorer",url:"https://green-giddy-denebola.explorer.mainnet.skalenodes.com"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:2372986}}}),tF=(0,l.a)({id:503129905,name:"SKALE | Nebula Gaming Hub Testnet",network:"skale-nebula-testnet",nativeCurrency:{name:"sFUEL",symbol:"sFUEL",decimals:18},rpcUrls:{default:{http:["https://staging-v3.skalenodes.com/v1/staging-faint-slimy-achird"],webSocket:["wss://staging-v3.skalenodes.com/v1/ws/staging-faint-slimy-achird"]},public:{http:["https://staging-v3.skalenodes.com/v1/staging-faint-slimy-achird"],webSocket:["wss://staging-v3.skalenodes.com/v1/ws/staging-faint-slimy-achird"]}},blockExplorers:{blockscout:{name:"SKALE Explorer",url:"https://staging-faint-slimy-achird.explorer.staging-v3.skalenodes.com"},default:{name:"SKALE Explorer",url:"https://staging-faint-slimy-achird.explorer.staging-v3.skalenodes.com"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:2205882}},testnet:!0}),tz=(0,l.a)({id:278611351,name:"SKALE | Razor Network",network:"skale-razor",nativeCurrency:{name:"sFUEL",symbol:"sFUEL",decimals:18},rpcUrls:{default:{http:["https://mainnet.skalenodes.com/v1/turbulent-unique-scheat"],webSocket:["wss://mainnet.skalenodes.com/v1/ws/turbulent-unique-scheat"]},public:{http:["https://mainnet.skalenodes.com/v1/turbulent-unique-scheat"],webSocket:["wss://mainnet.skalenodes.com/v1/ws/turbulent-unique-scheat"]}},blockExplorers:{blockscout:{name:"SKALE Explorer",url:"https://turbulent-unique-scheat.explorer.mainnet.skalenodes.com"},default:{name:"SKALE Explorer",url:"https://turbulent-unique-scheat.explorer.mainnet.skalenodes.com"}},contracts:{}}),tH=(0,l.a)({id:1350216234,name:"SKALE | Titan Community Hub",network:"skale-titan",nativeCurrency:{name:"sFUEL",symbol:"sFUEL",decimals:18},rpcUrls:{default:{http:["https://mainnet.skalenodes.com/v1/parallel-stormy-spica"],webSocket:["wss://mainnet.skalenodes.com/v1/ws/parallel-stormy-spica"]},public:{http:["https://mainnet.skalenodes.com/v1/parallel-stormy-spica"],webSocket:["wss://mainnet.skalenodes.com/v1/ws/parallel-stormy-spica"]}},blockExplorers:{blockscout:{name:"SKALE Explorer",url:"https://parallel-stormy-spica.explorer.mainnet.skalenodes.com"},default:{name:"SKALE Explorer",url:"https://parallel-stormy-spica.explorer.mainnet.skalenodes.com"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:2076458}}}),tW=(0,l.a)({id:1517929550,name:"SKALE | Titan Community Hub Testnet",network:"skale-titan-testnet",nativeCurrency:{name:"sFUEL",symbol:"sFUEL",decimals:18},rpcUrls:{default:{http:["https://staging-v3.skalenodes.com/v1/staging-aware-chief-gianfar"],webSocket:["wss://staging-v3.skalenodes.com/v1/ws/staging-aware-chief-gianfar"]},public:{http:["https://staging-v3.skalenodes.com/v1/staging-aware-chief-gianfar"],webSocket:["wss://staging-v3.skalenodes.com/v1/ws/staging-aware-chief-gianfar"]}},blockExplorers:{blockscout:{name:"SKALE Explorer",url:"https://staging-aware-chief-gianfar.explorer.staging-v3.skalenodes.com"},default:{name:"SKALE Explorer",url:"https://staging-aware-chief-gianfar.explorer.staging-v3.skalenodes.com"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:2085155}},testnet:!0}),tq=(0,l.a)({id:19,name:"Songbird Mainnet",network:"songbird-mainnet",nativeCurrency:{decimals:18,name:"songbird",symbol:"SGB"},rpcUrls:{default:{http:["https://songbird-api.flare.network/ext/C/rpc"]},public:{http:["https://songbird-api.flare.network/ext/C/rpc"]}},blockExplorers:{default:{name:"Songbird Explorer",url:"https://songbird-explorer.flare.network"}}}),tG=(0,l.a)({id:16,name:"Coston",network:"coston",nativeCurrency:{decimals:18,name:"costonflare",symbol:"CFLR"},rpcUrls:{default:{http:["https://coston-api.flare.network/ext/C/rpc"]},public:{http:["https://coston-api.flare.network/ext/C/rpc"]}},blockExplorers:{default:{name:"Coston Explorer",url:"https://coston-explorer.flare.network"}},testnet:!0}),tZ=(0,l.a)({id:8082,name:"Shardeum Sphinx",network:"shmSphinx",nativeCurrency:{name:"SHARDEUM",symbol:"SHM",decimals:18},rpcUrls:{default:{http:["https://sphinx.shardeum.org"]},public:{http:["https://sphinx.shardeum.org"]}},blockExplorers:{default:{name:"Shardeum Explorer",url:"https://explorer-sphinx.shardeum.org"}},testnet:!0}),tV=(0,l.a)({id:57,name:"Syscoin Mainnet",network:"syscoin",nativeCurrency:{decimals:18,name:"Syscoin",symbol:"SYS"},rpcUrls:{default:{http:["https://rpc.syscoin.org"],webSocket:["wss://rpc.syscoin.org/wss"]},public:{http:["https://rpc.syscoin.org"],webSocket:["wss://rpc.syscoin.org/wss"]}},blockExplorers:{default:{name:"SyscoinExplorer",url:"https://explorer.syscoin.org"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:287139}}}),tK=(0,l.a)({id:5700,name:"Syscoin Tanenbaum Testnet",network:"syscoin-testnet",nativeCurrency:{decimals:18,name:"Syscoin",symbol:"SYS"},rpcUrls:{default:{http:["https://rpc.tanenbaum.io"],webSocket:["wss://rpc.tanenbaum.io/wss"]},public:{http:["https://rpc.tanenbaum.io"],webSocket:["wss://rpc.tanenbaum.io/wss"]}},blockExplorers:{default:{name:"SyscoinTestnetExplorer",url:"https://tanenbaum.io"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:271288}}}),tQ=(0,l.a)({id:841,name:"Taraxa Mainnet",network:"taraxa",nativeCurrency:{name:"Tara",symbol:"TARA",decimals:18},rpcUrls:{default:{http:["https://rpc.mainnet.taraxa.io"]},public:{http:["https://rpc.mainnet.taraxa.io"]}},blockExplorers:{default:{name:"Taraxa Explorer",url:"https://explorer.mainnet.taraxa.io"}}}),tY=(0,l.a)({id:167007,name:"Taiko Jolnir L2",network:"tko-jolnir",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://jolnir.taiko.xyz"]},public:{http:["https://jolnir.taiko.xyz"]}},blockExplorers:{default:{name:"blockscout",url:"https://explorer.jolnir.taiko.xyz"}}}),tX=(0,l.a)({id:167005,name:"Taiko (Alpha-3 Testnet)",network:"taiko-sepolia",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://rpc.test.taiko.xyz"]},public:{http:["https://rpc.test.taiko.xyz"]}},blockExplorers:{default:{name:"blockscout",url:"https://explorer.test.taiko.xyz"}}}),tJ=(0,l.a)({id:842,name:"Taraxa Testnet",network:"taraxa-testnet",nativeCurrency:{name:"Tara",symbol:"TARA",decimals:18},rpcUrls:{default:{http:["https://rpc.testnet.taraxa.io"]},public:{http:["https://rpc.testnet.taraxa.io"]}},blockExplorers:{default:{name:"Taraxa Explorer",url:"https://explorer.testnet.taraxa.io"}},testnet:!0}),t0=(0,l.a)({id:40,name:"Telos",network:"telos",nativeCurrency:{decimals:18,name:"Telos",symbol:"TLOS"},rpcUrls:{default:{http:["https://mainnet.telos.net/evm"]},public:{http:["https://mainnet.telos.net/evm"]}},blockExplorers:{default:{name:"Teloscan",url:"https://www.teloscan.io/"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:246530709}}}),t1=(0,l.a)({id:41,name:"Telos",network:"telosTestnet",nativeCurrency:{decimals:18,name:"Telos",symbol:"TLOS"},rpcUrls:{default:{http:["https://testnet.telos.net/evm"]},public:{http:["https://testnet.telos.net/evm"]}},blockExplorers:{default:{name:"Teloscan (testnet)",url:"https://testnet.teloscan.io/"}},testnet:!0}),t2=(0,l.a)({id:997,name:"5ireChain Thunder Testnet",network:"5ireChain",nativeCurrency:{name:"5ire Token",symbol:"5IRE",decimals:18},rpcUrls:{default:{http:["https://rpc-testnet.5ire.network"]},public:{http:["https://rpc-testnet.5ire.network"]}},blockExplorers:{default:{name:"5ireChain Explorer",url:"https://explorer.5ire.network"}},testnet:!0}),t3=(0,l.a)({id:100009,name:"Vechain",network:"vechain",nativeCurrency:{name:"VeChain",symbol:"VET",decimals:18},rpcUrls:{default:{http:["https://mainnet.vechain.org"]},public:{http:["https://mainnet.vechain.org"]}},blockExplorers:{default:{name:"Vechain Explorer",url:"https://explore.vechain.org"},vechainStats:{name:"Vechain Stats",url:"https://vechainstats.com"}}}),t5=(0,l.a)({id:888,name:"Wanchain",network:"wanchain",nativeCurrency:{name:"WANCHAIN",symbol:"WAN",decimals:18},rpcUrls:{default:{http:["https://gwan-ssl.wandevs.org:56891","https://gwan2-ssl.wandevs.org"]},public:{http:["https://gwan-ssl.wandevs.org:56891","https://gwan2-ssl.wandevs.org"]}},blockExplorers:{etherscan:{name:"WanScan",url:"https://wanscan.org"},default:{name:"WanScan",url:"https://wanscan.org"}},contracts:{multicall3:{address:"0xcDF6A1566e78EB4594c86Fe73Fcdc82429e97fbB",blockCreated:25312390}}}),t6=(0,l.a)({id:999,name:"Wanchain Testnet",network:"wanchainTestnet",nativeCurrency:{name:"WANCHAIN",symbol:"WANt",decimals:18},rpcUrls:{default:{http:["https://gwan-ssl.wandevs.org:46891"]},public:{http:["https://gwan-ssl.wandevs.org:46891"]}},blockExplorers:{etherscan:{name:"WanScanTest",url:"https://wanscan.org"},default:{name:"WanScanTest",url:"https://wanscan.org"}},contracts:{multicall3:{address:"0x11c89bF4496c39FB80535Ffb4c92715839CC5324",blockCreated:24743448}},testnet:!0}),t4=(0,l.a)({id:50,name:"XinFin Network",network:"xdc",nativeCurrency:{decimals:18,name:"XDC",symbol:"XDC"},rpcUrls:{default:{http:["https://rpc.xinfin.network"]},public:{http:["https://rpc.xinfin.network"]}},blockExplorers:{xinfin:{name:"XinFin",url:"https://explorer.xinfin.network"},default:{name:"Blocksscan",url:"https://xdc.blocksscan.io"}}}),t8=(0,l.a)({id:51,name:"Apothem Network",network:"xdc-testnet",nativeCurrency:{decimals:18,name:"TXDC",symbol:"TXDC"},rpcUrls:{default:{http:["https://erpc.apothem.network"]},public:{http:["https://erpc.apothem.network"]}},blockExplorers:{xinfin:{name:"XinFin",url:"https://explorer.apothem.network"},default:{name:"Blocksscan",url:"https://apothem.blocksscan.io"}}}),t7=(0,l.a)({id:1337803,network:"zhejiang",name:"Zhejiang",nativeCurrency:{name:"Zhejiang Ether",symbol:"ZhejETH",decimals:18},rpcUrls:{default:{http:["https://rpc.zhejiang.ethpandaops.io"]},public:{http:["https://rpc.zhejiang.ethpandaops.io"]}},blockExplorers:{beaconchain:{name:"Etherscan",url:"https://zhejiang.beaconcha.in"},blockscout:{name:"Blockscout",url:"https://blockscout.com/eth/zhejiang-testnet"},default:{name:"Beaconchain",url:"https://zhejiang.beaconcha.in"}},testnet:!0});var t9=r(53992);let re={block:(0,y.G)({format(e){let t=e.transactions?.map(e=>{if("string"==typeof e)return e;let t=re.transaction.format(e);return"0x71"===t.typeHex?t.type="eip712":"0xff"===t.typeHex&&(t.type="priority"),t});return{l1BatchNumber:(0,w.y_)(e.l1BatchNumber),l1BatchTimestamp:(0,w.y_)(e.l1BatchTimestamp),transactions:t}}}),transaction:(0,v.y_)({format(e){let t={};return"0x71"===e.type?t.type="eip712":"0xff"===e.type&&(t.type="priority"),{...t,l1BatchNumber:e.l1BatchNumber?(0,w.y_)(e.l1BatchNumber):null,l1BatchTxIndex:e.l1BatchTxIndex?(0,w.y_)(e.l1BatchTxIndex):null}}}),transactionReceipt:(0,x.d)({format:e=>({l1BatchNumber:e.l1BatchNumber?(0,w.y_)(e.l1BatchNumber):null,l1BatchTxIndex:e.l1BatchTxIndex?(0,w.y_)(e.l1BatchTxIndex):null,logs:e.logs.map(e=>({...(0,t9.U)(e),l1BatchNumber:e.l1BatchNumber?(0,w.y_)(e.l1BatchNumber):null,transactionLogIndex:(0,w.ly)(e.transactionLogIndex),logType:e.logType})),l2ToL1Logs:e.l2ToL1Logs.map(e=>({blockNumber:(0,w.y_)(e.blockHash),blockHash:e.blockHash,l1BatchNumber:(0,w.y_)(e.l1BatchNumber),transactionIndex:(0,w.y_)(e.transactionIndex),shardId:(0,w.y_)(e.shardId),isService:e.isService,sender:e.sender,key:e.key,value:e.value,transactionHash:e.transactionHash,logIndex:(0,w.y_)(e.logIndex)}))})}),transactionRequest:(0,B.iy)({exclude:["customSignature","factoryDeps","gasPerPubdata","paymaster","paymasterInput"],format:e=>e.gasPerPubdata||e.paymaster&&e.paymasterInput||e.factoryDeps||e.customSignature?{eip712Meta:{...e.gasPerPubdata?{gasPerPubdata:(0,U.NC)(e.gasPerPubdata)}:{},...e.paymaster&&e.paymasterInput?{paymasterParams:{paymaster:e.paymaster,paymasterInput:Array.from((0,K.nr)(e.paymasterInput))}}:{},...e.factoryDeps?{factoryDeps:e.factoryDeps}:{},...e.customSignature?{customSignature:e.customSignature}:{}},type:"eip712"===e.type?"0x71":"0xff"}:{}})},rt=(e,t)=>"customSignature"in e||"paymaster"in e||"paymasterInput"in e||"gasPerPubdata"in e||"factoryDeps"in e?function(e){let{chainId:t,gas:r,nonce:n,to:i,from:a,value:o,maxFeePerGas:s,maxPriorityFeePerGas:l,customSignature:c,factoryDeps:u,paymaster:h,paymasterInput:d,gasPerPubdata:p,data:f}=e;!function(e){let{chainId:t,to:r,from:n,paymaster:i,paymasterInput:a}=e;if(t<=0)throw new F.hJ({chainId:t});if(r&&!(0,H.U)(r))throw new j.b({address:r});if(n&&!(0,H.U)(n))throw new j.b({address:n});if(i&&!(0,H.U)(i))throw new j.b({address:i});if(i&&!a)throw new L.G("`paymasterInput` must be provided when `paymaster` is defined");if(!i&&a)throw new L.G("`paymaster` must be provided when `paymasterInput` is defined")}(e);let m=[n?(0,U.NC)(n):"0x",l?(0,U.NC)(l):"0x",s?(0,U.NC)(s):"0x",r?(0,U.NC)(r):"0x",i??"0x",o?(0,U.NC)(o):"0x",f??"0x",(0,U.NC)(t),(0,U.NC)(""),(0,U.NC)(""),(0,U.NC)(t),a??"0x",p?(0,U.NC)(p):"0x",u??[],c??"0x",h&&d?[h,d]:[]];return(0,W.SM)(["0x71",Q(m)])}(e):et(e,t),rr={transaction:rt},rn=(0,l.a)({id:324,name:"zkSync Era",network:"zksync-era",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["https://mainnet.era.zksync.io"],webSocket:["wss://mainnet.era.zksync.io/ws"]},public:{http:["https://mainnet.era.zksync.io"],webSocket:["wss://mainnet.era.zksync.io/ws"]}},blockExplorers:{default:{name:"zkExplorer",url:"https://explorer.zksync.io"}},contracts:{multicall3:{address:"0xF9cda624FBC7e059355ce98a31693d299FACd963"}}},{serializers:rr,formatters:re}),ri=(0,l.a)({id:280,name:"zkSync Era Testnet",network:"zksync-era-testnet",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{default:{http:["https://testnet.era.zksync.dev"],webSocket:["wss://testnet.era.zksync.dev/ws"]},public:{http:["https://testnet.era.zksync.dev"],webSocket:["wss://testnet.era.zksync.dev/ws"]}},blockExplorers:{default:{name:"zkExplorer",url:"https://goerli.explorer.zksync.io"}},contracts:{multicall3:{address:"0xF9cda624FBC7e059355ce98a31693d299FACd963"}},testnet:!0},{serializers:rr,formatters:re}),ra=(0,l.a)({id:7001,name:"ZetaChain Athens Testnet",network:"zetachain-athens-testnet",nativeCurrency:{decimals:18,name:"Zeta",symbol:"aZETA"},rpcUrls:{public:{http:["https://zetachain-athens-evm.blockpi.network/v1/rpc/public"]},default:{http:["https://zetachain-athens-evm.blockpi.network/v1/rpc/public"]}},blockExplorers:{default:{name:"ZetaScan",url:"https://athens3.explorer.zetachain.com"}},testnet:!0}),ro=(0,l.a)({id:7777777,name:"Zora",network:"zora",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.zora.energy"],webSocket:["wss://rpc.zora.energy"]},public:{http:["https://rpc.zora.energy"],webSocket:["wss://rpc.zora.energy"]}},blockExplorers:{default:{name:"Explorer",url:"https://explorer.zora.energy"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:5882}}},{formatters:C}),rs=(0,l.a)({id:999999999,name:"Zora Sepolia",network:"zora-sepolia",nativeCurrency:{decimals:18,name:"Zora Sepolia",symbol:"ETH"},rpcUrls:{default:{http:["https://sepolia.rpc.zora.energy"],webSocket:["wss://sepolia.rpc.zora.energy"]},public:{http:["https://sepolia.rpc.zora.energy"],webSocket:["wss://sepolia.rpc.zora.energy"]}},blockExplorers:{default:{name:"Zora Sepolia Explorer",url:"https://sepolia.explorer.zora.energy/"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:83160}},testnet:!0},{formatters:C}),rl=(0,l.a)({id:999,name:"Zora Goerli Testnet",network:"zora-testnet",nativeCurrency:{decimals:18,name:"Zora Goerli",symbol:"ETH"},rpcUrls:{default:{http:["https://testnet.rpc.zora.energy"],webSocket:["wss://testnet.rpc.zora.energy"]},public:{http:["https://testnet.rpc.zora.energy"],webSocket:["wss://testnet.rpc.zora.energy"]}},blockExplorers:{default:{name:"Explorer",url:"https://testnet.explorer.zora.energy"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:189123}},testnet:!0},{formatters:C}),rc="76ef70a7ae6ad9c1da590b083c200209",ru=Object.values(n),rh=(0,s.o1)({chains:ru,projectId:rc,metadata:{name:"Manta Pacific Bridge",description:"Manta Pacific Bridge",url:"https://pacific-bridge.manta.network/",icons:["https://avatars.githubusercontent.com/u/74517090?s=100&v=4"]}});(0,s.OY)({wagmiConfig:rh,projectId:rc,chains:ru,defaultChain:eY.R});var rd=function(e){let{Component:t,pageProps:r}=e;return(0,i.jsxs)(a.eM,{config:rh,children:[(0,i.jsx)(t,{...r}),(0,i.jsx)(o.Ix,{})]})}},71399:function(){},93814:function(){},77663:function(e){!function(){var t={229:function(e){var t,r,n,i=e.exports={};function a(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===a||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:a}catch(e){t=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var l=[],c=!1,u=-1;function h(){c&&n&&(c=!1,n.length?l=n.concat(l):u=-1,l.length&&d())}function d(){if(!c){var e=s(h);c=!0;for(var t=l.length;t;){for(n=l,l=[];++u<t;)n&&n[u].run();u=-1,t=l.length}n=null,c=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function f(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new p(e,t)),1!==l.length||c||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=f,i.addListener=f,i.once=f,i.off=f,i.removeListener=f,i.removeAllListeners=f,i.emit=f,i.prependListener=f,i.prependOnceListener=f,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var a=r[e]={exports:{}},o=!0;try{t[e](a,a.exports,n),o=!1}finally{o&&delete r[e]}return a.exports}n.ab="//";var i=n(229);e.exports=i}()},92592:function(e,t,r){let n=r(47138),i=r(95115),a=r(6907),o=r(93776);function s(e,t,r,a,o){let s=[].slice.call(arguments,1),l=s.length,c="function"==typeof s[l-1];if(!c&&!n())throw Error("Callback required as last argument");if(c){if(l<2)throw Error("Too few arguments provided");2===l?(o=r,r=t,t=a=void 0):3===l&&(t.getContext&&void 0===o?(o=a,a=void 0):(o=a,a=r,r=t,t=void 0))}else{if(l<1)throw Error("Too few arguments provided");return 1===l?(r=t,t=a=void 0):2!==l||t.getContext||(a=r,r=t,t=void 0),new Promise(function(n,o){try{let o=i.create(r,a);n(e(o,t,a))}catch(e){o(e)}})}try{let n=i.create(r,a);o(null,e(n,t,a))}catch(e){o(e)}}t.create=i.create,t.toCanvas=s.bind(null,a.render),t.toDataURL=s.bind(null,a.renderToDataURL),t.toString=s.bind(null,function(e,t,r){return o.render(e,r)})},47138:function(e){e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},21845:function(e,t,r){let n=r(10242).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];let t=Math.floor(e/7)+2,r=n(e),i=145===r?26:2*Math.ceil((r-13)/(2*t-2)),a=[r-7];for(let e=1;e<t-1;e++)a[e]=a[e-1]-i;return a.push(6),a.reverse()},t.getPositions=function(e){let r=[],n=t.getRowColCoords(e),i=n.length;for(let e=0;e<i;e++)for(let t=0;t<i;t++)(0!==e||0!==t)&&(0!==e||t!==i-1)&&(e!==i-1||0!==t)&&r.push([n[e],n[t]]);return r}},8260:function(e,t,r){let n=r(76910),i=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function a(e){this.mode=n.ALPHANUMERIC,this.data=e}a.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)},a.prototype.getLength=function(){return this.data.length},a.prototype.getBitsLength=function(){return a.getBitsLength(this.data.length)},a.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=45*i.indexOf(this.data[t]);r+=i.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(i.indexOf(this.data[t]),6)},e.exports=a},97245:function(e){function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){return(this.buffer[Math.floor(e/8)]>>>7-e%8&1)==1},put:function(e,t){for(let r=0;r<t;r++)this.putBit((e>>>t-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},73280:function(e){function t(e){if(!e||e<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,r,n){let i=e*this.size+t;this.data[i]=r,n&&(this.reservedBit[i]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},43424:function(e,t,r){let n=r(62378),i=r(76910);function a(e){this.mode=i.BYTE,"string"==typeof e&&(e=n(e)),this.data=new Uint8Array(e)}a.getBitsLength=function(e){return 8*e},a.prototype.getLength=function(){return this.data.length},a.prototype.getBitsLength=function(){return a.getBitsLength(this.data.length)},a.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)},e.exports=a},35393:function(e,t,r){let n=r(64908),i=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],a=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case n.L:return i[(e-1)*4+0];case n.M:return i[(e-1)*4+1];case n.Q:return i[(e-1)*4+2];case n.H:return i[(e-1)*4+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case n.L:return a[(e-1)*4+0];case n.M:return a[(e-1)*4+1];case n.Q:return a[(e-1)*4+2];case n.H:return a[(e-1)*4+3];default:return}}},64908:function(e,t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");let r=e.toLowerCase();switch(r){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw Error("Unknown EC Level: "+e)}}(e)}catch(e){return r}}},76526:function(e,t,r){let n=r(10242).getSymbolSize;t.getPositions=function(e){let t=n(e);return[[0,0],[t-7,0],[0,t-7]]}},61642:function(e,t,r){let n=r(10242),i=n.getBCHDigit(1335);t.getEncodedBits=function(e,t){let r=e.bit<<3|t,a=r<<10;for(;n.getBCHDigit(a)-i>=0;)a^=1335<<n.getBCHDigit(a)-i;return(r<<10|a)^21522}},69729:function(e,t){let r=new Uint8Array(512),n=new Uint8Array(256);!function(){let e=1;for(let t=0;t<255;t++)r[t]=e,n[e]=t,256&(e<<=1)&&(e^=285);for(let e=255;e<512;e++)r[e]=r[e-255]}(),t.log=function(e){if(e<1)throw Error("log("+e+")");return n[e]},t.exp=function(e){return r[e]},t.mul=function(e,t){return 0===e||0===t?0:r[n[e]+n[t]]}},35442:function(e,t,r){let n=r(76910),i=r(10242);function a(e){this.mode=n.KANJI,this.data=e}a.getBitsLength=function(e){return 13*e},a.prototype.getLength=function(){return this.data.length},a.prototype.getBitsLength=function(){return a.getBitsLength(this.data.length)},a.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=i.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");r=(r>>>8&255)*192+(255&r),e.put(r,13)}},e.exports=a},27126:function(e,t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let r={N1:3,N2:3,N3:40,N4:10};t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){let t=e.size,n=0,i=0,a=0,o=null,s=null;for(let l=0;l<t;l++){i=a=0,o=s=null;for(let c=0;c<t;c++){let t=e.get(l,c);t===o?i++:(i>=5&&(n+=r.N1+(i-5)),o=t,i=1),(t=e.get(c,l))===s?a++:(a>=5&&(n+=r.N1+(a-5)),s=t,a=1)}i>=5&&(n+=r.N1+(i-5)),a>=5&&(n+=r.N1+(a-5))}return n},t.getPenaltyN2=function(e){let t=e.size,n=0;for(let r=0;r<t-1;r++)for(let i=0;i<t-1;i++){let t=e.get(r,i)+e.get(r,i+1)+e.get(r+1,i)+e.get(r+1,i+1);(4===t||0===t)&&n++}return n*r.N2},t.getPenaltyN3=function(e){let t=e.size,n=0,i=0,a=0;for(let r=0;r<t;r++){i=a=0;for(let o=0;o<t;o++)i=i<<1&2047|e.get(r,o),o>=10&&(1488===i||93===i)&&n++,a=a<<1&2047|e.get(o,r),o>=10&&(1488===a||93===a)&&n++}return n*r.N3},t.getPenaltyN4=function(e){let t=0,n=e.data.length;for(let r=0;r<n;r++)t+=e.data[r];let i=Math.abs(Math.ceil(100*t/n/5)-10);return i*r.N4},t.applyMask=function(e,r){let n=r.size;for(let i=0;i<n;i++)for(let a=0;a<n;a++)r.isReserved(a,i)||r.xor(a,i,function(e,r,n){switch(e){case t.Patterns.PATTERN000:return(r+n)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return n%3==0;case t.Patterns.PATTERN011:return(r+n)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(n/3))%2==0;case t.Patterns.PATTERN101:return r*n%2+r*n%3==0;case t.Patterns.PATTERN110:return(r*n%2+r*n%3)%2==0;case t.Patterns.PATTERN111:return(r*n%3+(r+n)%2)%2==0;default:throw Error("bad maskPattern:"+e)}}(e,a,i))},t.getBestMask=function(e,r){let n=Object.keys(t.Patterns).length,i=0,a=1/0;for(let o=0;o<n;o++){r(o),t.applyMask(o,e);let n=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(o,e),n<a&&(a=n,i=o)}return i}},76910:function(e,t,r){let n=r(43114),i=r(7007);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw Error("Invalid mode: "+e);if(!n.isValid(t))throw Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return i.testNumeric(e)?t.NUMERIC:i.testAlphanumeric(e)?t.ALPHANUMERIC:i.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");let r=e.toLowerCase();switch(r){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw Error("Unknown mode: "+e)}}(e)}catch(e){return r}}},41085:function(e,t,r){let n=r(76910);function i(e){this.mode=n.NUMERIC,this.data=e.toString()}i.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t,r;for(t=0;t+3<=this.data.length;t+=3)r=parseInt(this.data.substr(t,3),10),e.put(r,10);let n=this.data.length-t;n>0&&(r=parseInt(this.data.substr(t),10),e.put(r,3*n+1))},e.exports=i},26143:function(e,t,r){let n=r(69729);t.mul=function(e,t){let r=new Uint8Array(e.length+t.length-1);for(let i=0;i<e.length;i++)for(let a=0;a<t.length;a++)r[i+a]^=n.mul(e[i],t[a]);return r},t.mod=function(e,t){let r=new Uint8Array(e);for(;r.length-t.length>=0;){let e=r[0];for(let i=0;i<t.length;i++)r[i]^=n.mul(t[i],e);let i=0;for(;i<r.length&&0===r[i];)i++;r=r.slice(i)}return r},t.generateECPolynomial=function(e){let r=new Uint8Array([1]);for(let i=0;i<e;i++)r=t.mul(r,new Uint8Array([1,n.exp(i)]));return r}},95115:function(e,t,r){let n=r(10242),i=r(64908),a=r(97245),o=r(73280),s=r(21845),l=r(76526),c=r(27126),u=r(35393),h=r(52882),d=r(23103),p=r(61642),f=r(76910),m=r(16130);function b(e,t,r){let n,i;let a=e.size,o=p.getEncodedBits(t,r);for(n=0;n<15;n++)i=(o>>n&1)==1,n<6?e.set(n,8,i,!0):n<8?e.set(n+1,8,i,!0):e.set(a-15+n,8,i,!0),n<8?e.set(8,a-n-1,i,!0):n<9?e.set(8,15-n-1+1,i,!0):e.set(8,15-n-1,i,!0);e.set(a-8,8,1,!0)}t.create=function(e,t){let r,p;if(void 0===e||""===e)throw Error("No input text");let g=i.M;return void 0!==t&&(g=i.from(t.errorCorrectionLevel,i.M),r=d.from(t.version),p=c.from(t.maskPattern),t.toSJISFunc&&n.setToSJISFunction(t.toSJISFunc)),function(e,t,r,i){let p;if(Array.isArray(e))p=m.fromArray(e);else if("string"==typeof e){let n=t;if(!n){let t=m.rawSplit(e);n=d.getBestVersionForData(t,r)}p=m.fromString(e,n||40)}else throw Error("Invalid data");let g=d.getBestVersionForData(p,r);if(!g)throw Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<g)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+g+".\n")}else t=g;let w=function(e,t,r){let i=new a;r.forEach(function(t){i.put(t.mode.bit,4),i.put(t.getLength(),f.getCharCountIndicator(t.mode,e)),t.write(i)});let o=n.getSymbolTotalCodewords(e),s=u.getTotalCodewordsCount(e,t),l=(o-s)*8;for(i.getLengthInBits()+4<=l&&i.put(0,4);i.getLengthInBits()%8!=0;)i.putBit(0);let c=(l-i.getLengthInBits())/8;for(let e=0;e<c;e++)i.put(e%2?17:236,8);return function(e,t,r){let i,a;let o=n.getSymbolTotalCodewords(t),s=u.getTotalCodewordsCount(t,r),l=u.getBlocksCount(t,r),c=l-o%l,d=Math.floor((o-s)/l),p=d+1,f=Math.floor(o/l)-d,m=new h(f),b=0,g=Array(l),w=Array(l),y=0,v=new Uint8Array(e.buffer);for(let e=0;e<l;e++){let t=e<c?d:p;g[e]=v.slice(b,b+t),w[e]=m.encode(g[e]),b+=t,y=Math.max(y,t)}let x=new Uint8Array(o),C=0;for(i=0;i<y;i++)for(a=0;a<l;a++)i<g[a].length&&(x[C++]=g[a][i]);for(i=0;i<f;i++)for(a=0;a<l;a++)x[C++]=w[a][i];return x}(i,e,t)}(t,r,p),y=n.getSymbolSize(t),v=new o(y);return function(e,t){let r=e.size,n=l.getPositions(t);for(let t=0;t<n.length;t++){let i=n[t][0],a=n[t][1];for(let t=-1;t<=7;t++)if(!(i+t<=-1)&&!(r<=i+t))for(let n=-1;n<=7;n++)a+n<=-1||r<=a+n||(t>=0&&t<=6&&(0===n||6===n)||n>=0&&n<=6&&(0===t||6===t)||t>=2&&t<=4&&n>=2&&n<=4?e.set(i+t,a+n,!0,!0):e.set(i+t,a+n,!1,!0))}}(v,t),function(e){let t=e.size;for(let r=8;r<t-8;r++){let t=r%2==0;e.set(r,6,t,!0),e.set(6,r,t,!0)}}(v),function(e,t){let r=s.getPositions(t);for(let t=0;t<r.length;t++){let n=r[t][0],i=r[t][1];for(let t=-2;t<=2;t++)for(let r=-2;r<=2;r++)-2===t||2===t||-2===r||2===r||0===t&&0===r?e.set(n+t,i+r,!0,!0):e.set(n+t,i+r,!1,!0)}}(v,t),b(v,r,0),t>=7&&function(e,t){let r,n,i;let a=e.size,o=d.getEncodedBits(t);for(let t=0;t<18;t++)r=Math.floor(t/3),n=t%3+a-8-3,i=(o>>t&1)==1,e.set(r,n,i,!0),e.set(n,r,i,!0)}(v,t),function(e,t){let r=e.size,n=-1,i=r-1,a=7,o=0;for(let s=r-1;s>0;s-=2)for(6===s&&s--;;){for(let r=0;r<2;r++)if(!e.isReserved(i,s-r)){let n=!1;o<t.length&&(n=(t[o]>>>a&1)==1),e.set(i,s-r,n),-1==--a&&(o++,a=7)}if((i+=n)<0||r<=i){i-=n,n=-n;break}}}(v,w),isNaN(i)&&(i=c.getBestMask(v,b.bind(null,v,r))),c.applyMask(i,v),b(v,r,i),{modules:v,version:t,errorCorrectionLevel:r,maskPattern:i,segments:p}}(e,r,g,p)}},52882:function(e,t,r){let n=r(26143);function i(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}i.prototype.initialize=function(e){this.degree=e,this.genPoly=n.generateECPolynomial(this.degree)},i.prototype.encode=function(e){if(!this.genPoly)throw Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let r=n.mod(t,this.genPoly),i=this.degree-r.length;if(i>0){let e=new Uint8Array(this.degree);return e.set(r,i),e}return r},e.exports=i},7007:function(e,t){let r="[0-9]+",n="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";n=n.replace(/u/g,"\\u");let i="(?:(?![A-Z0-9 $%*+\\-./:]|"+n+")(?:.|[\r\n]))+";t.KANJI=RegExp(n,"g"),t.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=RegExp(i,"g"),t.NUMERIC=RegExp(r,"g"),t.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let a=RegExp("^"+n+"$"),o=RegExp("^"+r+"$"),s=RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return a.test(e)},t.testNumeric=function(e){return o.test(e)},t.testAlphanumeric=function(e){return s.test(e)}},16130:function(e,t,r){let n=r(76910),i=r(41085),a=r(8260),o=r(43424),s=r(35442),l=r(7007),c=r(10242),u=r(65987);function h(e){return unescape(encodeURIComponent(e)).length}function d(e,t,r){let n;let i=[];for(;null!==(n=e.exec(r));)i.push({data:n[0],index:n.index,mode:t,length:n[0].length});return i}function p(e){let t,r;let i=d(l.NUMERIC,n.NUMERIC,e),a=d(l.ALPHANUMERIC,n.ALPHANUMERIC,e);c.isKanjiModeEnabled()?(t=d(l.BYTE,n.BYTE,e),r=d(l.KANJI,n.KANJI,e)):(t=d(l.BYTE_KANJI,n.BYTE,e),r=[]);let o=i.concat(a,t,r);return o.sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function f(e,t){switch(t){case n.NUMERIC:return i.getBitsLength(e);case n.ALPHANUMERIC:return a.getBitsLength(e);case n.KANJI:return s.getBitsLength(e);case n.BYTE:return o.getBitsLength(e)}}function m(e,t){let r;let l=n.getBestModeForData(e);if((r=n.from(t,l))!==n.BYTE&&r.bit<l.bit)throw Error('"'+e+'" cannot be encoded with mode '+n.toString(r)+".\n Suggested mode is: "+n.toString(l));switch(r!==n.KANJI||c.isKanjiModeEnabled()||(r=n.BYTE),r){case n.NUMERIC:return new i(e);case n.ALPHANUMERIC:return new a(e);case n.KANJI:return new s(e);case n.BYTE:return new o(e)}}t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(m(t,null)):t.data&&e.push(m(t.data,t.mode)),e},[])},t.fromString=function(e,r){let i=p(e,c.isKanjiModeEnabled()),a=function(e){let t=[];for(let r=0;r<e.length;r++){let i=e[r];switch(i.mode){case n.NUMERIC:t.push([i,{data:i.data,mode:n.ALPHANUMERIC,length:i.length},{data:i.data,mode:n.BYTE,length:i.length}]);break;case n.ALPHANUMERIC:t.push([i,{data:i.data,mode:n.BYTE,length:i.length}]);break;case n.KANJI:t.push([i,{data:i.data,mode:n.BYTE,length:h(i.data)}]);break;case n.BYTE:t.push([{data:i.data,mode:n.BYTE,length:h(i.data)}])}}return t}(i),o=function(e,t){let r={},i={start:{}},a=["start"];for(let o=0;o<e.length;o++){let s=e[o],l=[];for(let e=0;e<s.length;e++){let c=s[e],u=""+o+e;l.push(u),r[u]={node:c,lastCount:0},i[u]={};for(let e=0;e<a.length;e++){let o=a[e];r[o]&&r[o].node.mode===c.mode?(i[o][u]=f(r[o].lastCount+c.length,c.mode)-f(r[o].lastCount,c.mode),r[o].lastCount+=c.length):(r[o]&&(r[o].lastCount=c.length),i[o][u]=f(c.length,c.mode)+4+n.getCharCountIndicator(c.mode,t))}}a=l}for(let e=0;e<a.length;e++)i[a[e]].end=0;return{map:i,table:r}}(a,r),s=u.find_path(o.map,"start","end"),l=[];for(let e=1;e<s.length-1;e++)l.push(o.table[s[e]].node);return t.fromArray(l.reduce(function(e,t){let r=e.length-1>=0?e[e.length-1]:null;return r&&r.mode===t.mode?(e[e.length-1].data+=t.data,e):(e.push(t),e)},[]))},t.rawSplit=function(e){return t.fromArray(p(e,c.isKanjiModeEnabled()))}},10242:function(e,t){let r;let n=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw Error('"version" cannot be null or undefined');if(e<1||e>40)throw Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return n[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw Error('"toSJISFunc" is not a valid function.');r=e},t.isKanjiModeEnabled=function(){return void 0!==r},t.toSJIS=function(e){return r(e)}},43114:function(e,t){t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},23103:function(e,t,r){let n=r(10242),i=r(35393),a=r(64908),o=r(76910),s=r(43114),l=n.getBCHDigit(7973);function c(e,t){return o.getCharCountIndicator(e,t)+4}t.from=function(e,t){return s.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,r){if(!s.isValid(e))throw Error("Invalid QR Code version");void 0===r&&(r=o.BYTE);let a=n.getSymbolTotalCodewords(e),l=i.getTotalCodewordsCount(e,t),u=(a-l)*8;if(r===o.MIXED)return u;let h=u-c(r,e);switch(r){case o.NUMERIC:return Math.floor(h/10*3);case o.ALPHANUMERIC:return Math.floor(h/11*2);case o.KANJI:return Math.floor(h/13);case o.BYTE:default:return Math.floor(h/8)}},t.getBestVersionForData=function(e,r){let n;let i=a.from(r,a.M);if(Array.isArray(e)){if(e.length>1)return function(e,r){for(let n=1;n<=40;n++){let i=function(e,t){let r=0;return e.forEach(function(e){let n=c(e.mode,t);r+=n+e.getBitsLength()}),r}(e,n);if(i<=t.getCapacity(n,r,o.MIXED))return n}}(e,i);if(0===e.length)return 1;n=e[0]}else n=e;return function(e,r,n){for(let i=1;i<=40;i++)if(r<=t.getCapacity(i,n,e))return i}(n.mode,n.getLength(),i)},t.getEncodedBits=function(e){if(!s.isValid(e)||e<7)throw Error("Invalid QR Code version");let t=e<<12;for(;n.getBCHDigit(t)-l>=0;)t^=7973<<n.getBCHDigit(t)-l;return e<<12|t}},6907:function(e,t,r){let n=r(89653);t.render=function(e,t,r){var i;let a=r,o=t;void 0!==a||t&&t.getContext||(a=t,t=void 0),t||(o=function(){try{return document.createElement("canvas")}catch(e){throw Error("You need to specify a canvas element")}}()),a=n.getOptions(a);let s=n.getImageWidth(e.modules.size,a),l=o.getContext("2d"),c=l.createImageData(s,s);return n.qrToImageData(c.data,e,a),i=o,l.clearRect(0,0,i.width,i.height),i.style||(i.style={}),i.height=s,i.width=s,i.style.height=s+"px",i.style.width=s+"px",l.putImageData(c,0,0),o},t.renderToDataURL=function(e,r,n){let i=n;void 0!==i||r&&r.getContext||(i=r,r=void 0),i||(i={});let a=t.render(e,r,i),o=i.type||"image/png",s=i.rendererOpts||{};return a.toDataURL(o,s.quality)}},93776:function(e,t,r){let n=r(89653);function i(e,t){let r=e.a/255,n=t+'="'+e.hex+'"';return r<1?n+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':n}function a(e,t,r){let n=e+t;return void 0!==r&&(n+=" "+r),n}t.render=function(e,t,r){let o=n.getOptions(t),s=e.modules.size,l=e.modules.data,c=s+2*o.margin,u=o.color.light.a?"<path "+i(o.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",h="<path "+i(o.color.dark,"stroke")+' d="'+function(e,t,r){let n="",i=0,o=!1,s=0;for(let l=0;l<e.length;l++){let c=Math.floor(l%t),u=Math.floor(l/t);c||o||(o=!0),e[l]?(s++,l>0&&c>0&&e[l-1]||(n+=o?a("M",c+r,.5+u+r):a("m",i,0),i=0,o=!1),c+1<t&&e[l+1]||(n+=a("h",s),s=0)):i++}return n}(l,s,o.margin)+'"/>',d=o.width?'width="'+o.width+'" height="'+o.width+'" ':"",p='<svg xmlns="http://www.w3.org/2000/svg" '+d+('viewBox="0 0 '+c)+" "+c+'" shape-rendering="crispEdges">'+u+h+"</svg>\n";return"function"==typeof r&&r(null,p),p}},89653:function(e,t){function r(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw Error("Invalid hex color: "+e);(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");let r=parseInt(t.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});let t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,n=e.width&&e.width>=21?e.width:void 0,i=e.scale||4;return{width:n,scale:n?4:i,margin:t,color:{dark:r(e.color.dark||"#000000ff"),light:r(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,r){let n=t.getScale(e,r);return Math.floor((e+2*r.margin)*n)},t.qrToImageData=function(e,r,n){let i=r.modules.size,a=r.modules.data,o=t.getScale(i,n),s=Math.floor((i+2*n.margin)*o),l=n.margin*o,c=[n.color.light,n.color.dark];for(let t=0;t<s;t++)for(let r=0;r<s;r++){let u=(t*s+r)*4,h=n.color.light;if(t>=l&&r>=l&&t<s-l&&r<s-l){let e=Math.floor((t-l)/o),n=Math.floor((r-l)/o);h=c[a[e*i+n]?1:0]}e[u++]=h.r,e[u++]=h.g,e[u++]=h.b,e[u]=h.a}}},80500:function(e){"use strict";e.exports=(e,t)=>{if(!("string"==typeof e&&"string"==typeof t))throw TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];let r=e.indexOf(t);return -1===r?[e]:[e.slice(0,r),e.slice(r+t.length)]}},70610:function(e){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)},53250:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(67294),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=n.useState,o=n.useEffect,s=n.useLayoutEffect,l=n.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!i(e,r)}catch(e){return!0}}var u="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=a({inst:{value:r,getSnapshot:t}}),i=n[0].inst,u=n[1];return s(function(){i.value=r,i.getSnapshot=t,c(i)&&u({inst:i})},[e,r,t]),o(function(){return c(i)&&u({inst:i}),e(function(){c(i)&&u({inst:i})})},[e]),l(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:u},50139:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(67294),i=r(61688),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=i.useSyncExternalStore,s=n.useRef,l=n.useEffect,c=n.useMemo,u=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,i){var h=s(null);if(null===h.current){var d={hasValue:!1,value:null};h.current=d}else d=h.current;h=c(function(){function e(e){if(!l){if(l=!0,o=e,e=n(e),void 0!==i&&d.hasValue){var t=d.value;if(i(t,e))return s=t}return s=e}if(t=s,a(o,e))return t;var r=n(e);return void 0!==i&&i(t,r)?t:(o=e,s=r)}var o,s,l=!1,c=void 0===r?null:r;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,r,n,i]);var p=o(e,h[0],h[1]);return l(function(){d.hasValue=!0,d.value=p},[p]),u(p),p}},61688:function(e,t,r){"use strict";e.exports=r(53250)},52798:function(e,t,r){"use strict";e.exports=r(50139)},35883:function(){},53516:function(e,t,r){"use strict";function n(e){return"string"==typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"==typeof e?Number(e):e}r.d(t,{J:function(){return n}})},92219:function(e,t,r){"use strict";r.d(t,{_:function(){return d}});var n,i=r(57858),a=r(53516),o=r(53324),s=r(45775),l=r(39028),c=r(79578),u=r(3980),h=r(92106),d=class extends o.wR{constructor({chains:e,options:t}={}){let r={shimDisconnect:!0,getProvider(){if("undefined"==typeof window)return;let e=window.ethereum;return e?.providers&&e.providers.length>0?e.providers[0]:e},...t};super({chains:e,options:r}),this.id="injected",(0,o.Ko)(this,n,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,s.K)(e[0])})},this.onChainChanged=e=>{let t=(0,a.J)(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})},this.onDisconnect=async e=>{if(1013===e.code){let e=await this.getProvider();if(e){let e=await this.getAccount();if(e)return}}this.emit("disconnect"),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey)};let i=r.getProvider();if("string"==typeof r.name)this.name=r.name;else if(i){let e=function(e){if(!e)return"Injected";let t=e=>e.isApexWallet?"Apex Wallet":e.isAvalanche?"Core Wallet":e.isBackpack?"Backpack":e.isBifrost?"Bifrost Wallet":e.isBitKeep?"BitKeep":e.isBitski?"Bitski":e.isBlockWallet?"BlockWallet":e.isBraveWallet?"Brave Wallet":e.isCoin98?"Coin98 Wallet":e.isCoinbaseWallet?"Coinbase Wallet":e.isDawn?"Dawn Wallet":e.isDefiant?"Defiant":e.isDesig?"Desig Wallet":e.isEnkrypt?"Enkrypt":e.isExodus?"Exodus":e.isFordefi?"Fordefi":e.isFrame?"Frame":e.isFrontier?"Frontier Wallet":e.isGamestop?"GameStop Wallet":e.isHaqqWallet?"HAQQ Wallet":e.isHyperPay?"HyperPay Wallet":e.isImToken?"ImToken":e.isHaloWallet?"Halo Wallet":e.isKuCoinWallet?"KuCoin Wallet":e.isMathWallet?"MathWallet":e.isNovaWallet?"Nova Wallet":e.isOkxWallet||e.isOKExWallet?"OKX Wallet":e.isOktoWallet?"Okto Wallet":e.isOneInchIOSWallet||e.isOneInchAndroidWallet?"1inch Wallet":e.isOneKey?"OneKey Wallet":e.isOpera?"Opera":e.isPhantom?"Phantom":e.isPortal?"Ripio Portal":e.isRabby?"Rabby Wallet":e.isRainbow?"Rainbow":e.isSafePal?"SafePal Wallet":e.isStatus?"Status":e.isSubWallet?"SubWallet":e.isTalisman?"Talisman":e.isTally?"Taho":e.isTokenPocket?"TokenPocket":e.isTokenary?"Tokenary":e.isTrust||e.isTrustWallet?"Trust Wallet":e.isTTWallet?"TTWallet":e.isXDEFI?"XDEFI Wallet":e.isZeal?"Zeal":e.isZerion?"Zerion":e.isMetaMask?"MetaMask":void 0;if(e.providers?.length){let r=new Set,n=1;for(let i of e.providers){let e=t(i);e||(e=`Unknown Wallet #${n}`,n+=1),r.add(e)}let i=[...r];return i.length?i:i[0]??"Injected"}return t(e)??"Injected"}(i);r.name?this.name=r.name(e):"string"==typeof e?this.name=e:this.name=e[0]}else this.name="Injected";this.ready=!!i}async connect({chainId:e}={}){try{let t=await this.getProvider();if(!t)throw new i.N;t.on&&(t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});let r=await t.request({method:"eth_requestAccounts"}),n=(0,s.K)(r[0]),a=await this.getChainId(),o=this.isChainUnsupported(a);if(e&&a!==e){let t=await this.switchChain(e);a=t.id,o=this.isChainUnsupported(a)}return this.options.shimDisconnect&&this.storage?.setItem(this.shimDisconnectKey,!0),{account:n,chain:{id:a,unsupported:o}}}catch(e){if(this.isUserRejectedRequestError(e))throw new l.ab(e);if(-32002===e.code)throw new l.pT(e);throw e}}async disconnect(){let e=await this.getProvider();e?.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey))}async getAccount(){let e=await this.getProvider();if(!e)throw new i.N;let t=await e.request({method:"eth_accounts"});return(0,s.K)(t[0])}async getChainId(){let e=await this.getProvider();if(!e)throw new i.N;return e.request({method:"eth_chainId"}).then(a.J)}async getProvider(){let e=this.options.getProvider();return e&&(0,o.qx)(this,n,e),(0,o.ac)(this,n)}async getWalletClient({chainId:e}={}){let[t,r]=await Promise.all([this.getProvider(),this.getAccount()]),n=this.chains.find(t=>t.id===e);if(!t)throw Error("provider is required.");return(0,c.K)({account:r,chain:n,transport:(0,u.P)(t)})}async isAuthorized(){try{if(this.options.shimDisconnect&&!this.storage?.getItem(this.shimDisconnectKey))return!1;let e=await this.getProvider();if(!e)throw new i.N;let t=await this.getAccount();return!!t}catch{return!1}}async switchChain(e){let t=await this.getProvider();if(!t)throw new i.N;let r=(0,h.eC)(e);try{return await Promise.all([t.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),new Promise(t=>this.on("change",({chain:r})=>{r?.id===e&&t()}))]),this.chains.find(t=>t.id===e)??{id:e,name:`Chain ${r}`,network:`${r}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(a){let n=this.chains.find(t=>t.id===e);if(!n)throw new i.B({chainId:e,connectorId:this.id});if(4902===a.code||a?.data?.originalError?.code===4902)try{await t.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:n.name,nativeCurrency:n.nativeCurrency,rpcUrls:[n.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(n)}]});let i=await this.getChainId();if(i!==e)throw new l.ab(Error("User rejected switch after adding network."));return n}catch(e){throw new l.ab(e)}if(this.isUserRejectedRequestError(a))throw new l.ab(a);throw new l.x3(a)}}async watchAsset({address:e,decimals:t=18,image:r,symbol:n}){let a=await this.getProvider();if(!a)throw new i.N;return a.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:r,symbol:n}}})}isUserRejectedRequestError(e){return 4001===e.code}};n=new WeakMap},57858:function(e,t,r){"use strict";r.d(t,{B:function(){return n},N:function(){return i}});var n=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured for connector "${t}".`),this.name="ChainNotConfiguredForConnectorError"}},i=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}}},53324:function(e,t,r){"use strict";r.d(t,{Ko:function(){return l},U9:function(){return u},ac:function(){return s},qx:function(){return c},wR:function(){return h}});var n=r(26729),i=r(66403),a=r(6891),o=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},s=(e,t,r)=>(o(e,t,"read from private field"),r?r.call(e):t.get(e)),l=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},c=(e,t,r,n)=>(o(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),u=(e,t,r)=>(o(e,t,"access private method"),r),h=class extends n{constructor({chains:e=[i.R,a.w],options:t}){super(),this.chains=e,this.options=t}getBlockExplorerUrls(e){let{default:t,...r}=e.blockExplorers??{};if(t)return[t.url,...Object.values(r).map(e=>e.url)]}isChainUnsupported(e){return!this.chains.some(t=>t.id===e)}setStorage(e){this.storage=e}}},58438:function(e,t,r){"use strict";r.d(t,{QB:function(){return tg},$j:function(){return tR},_g:function(){return tT},o6:function(){return tD},vZ:function(){return function e(t,r){if(t===r)return!0;if(t&&r&&"object"==typeof t&&"object"==typeof r){let n,i;if(t.constructor!==r.constructor)return!1;if(Array.isArray(t)&&Array.isArray(r)){if((n=t.length)!=r.length)return!1;for(i=n;0!=i--;)if(!e(t[i],r[i]))return!1;return!0}if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();let a=Object.keys(t);if((n=a.length)!==Object.keys(r).length)return!1;for(i=n;0!=i--;)if(!Object.prototype.hasOwnProperty.call(r,a[i]))return!1;for(i=n;0!=i--;){let n=a[i];if(n&&!e(t[n],r[n]))return!1}return!0}return t!=t&&r!=r}},zP:function(){return tN},EG:function(){return tq},w6:function(){return tY},Lk:function(){return tX},D0:function(){return tG},Hy:function(){return tZ},uV:function(){return tM},xz:function(){return tj},wp:function(){return t_},If:function(){return tV},uH:function(){return tK},QC:function(){return tQ},pC:function(){return tL},Tb:function(){return tF}});var n,i,a,o,s,l=r(92219),c=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)},u=(e,t,r)=>(c(e,t,"read from private field"),r?r.call(e):t.get(e)),h=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},d=(e,t,r,n)=>(c(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r),p=(e,t,r)=>(c(e,t,"access private method"),r),f=r(16189),m=r(18011),b=r(95270),g=r(95602),w=r(15215),y=r(16171),v=r(61376);function x(e,{method:t}){let r={};return"fallback"===e.transport.type&&e.transport.onResponse?.(({method:e,response:n,status:i,transport:a})=>{"success"===i&&t===e&&(r[n]=a.request)}),t=>r[t]||e.request}async function C(e){let t=x(e,{method:"eth_newBlockFilter"}),r=await e.request({method:"eth_newBlockFilter"});return{id:r,request:t(r),type:"block"}}var E=r(57412),k=r(62027);class S extends k.G{constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}var A=r(11187),P=r(74059),_=r(56254),D=r(45444),$=r(80522),O=r(40840);function T({abi:e,eventName:t,args:r}){let n=e[0];if(t&&!(n=(0,O.m)({abi:e,args:r,name:t})))throw new E.mv(t,{docsPath:"/docs/contract/encodeEventTopics"});if("event"!==n.type)throw new E.mv(void 0,{docsPath:"/docs/contract/encodeEventTopics"});let i=(0,$.t)(n),a=(0,P.e)(i),o=[];if(r&&"inputs"in n){let e=n.inputs?.filter(e=>"indexed"in e&&e.indexed),t=Array.isArray(r)?r:Object.values(r).length>0?e?.map(e=>r[e.name])??[]:[];t.length>0&&(o=e?.map((e,r)=>Array.isArray(t[r])?t[r].map((n,i)=>I({param:e,value:t[r][i]})):t[r]?I({param:e,value:t[r]}):null)??[])}return[a,...o]}function I({param:e,value:t}){if("string"===e.type||"bytes"===e.type)return(0,_.w)((0,A.O0)(t));if("tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/))throw new S(e.type);return(0,D.E)([e],[t])}var R=r(92106);async function N(e,{address:t,abi:r,args:n,eventName:i,fromBlock:a,strict:o,toBlock:s}){let l=x(e,{method:"eth_newFilter"}),c=i?T({abi:r,args:n,eventName:i}):void 0,u=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"==typeof a?(0,R.eC)(a):a,toBlock:"bigint"==typeof s?(0,R.eC)(s):s,topics:c}]});return{abi:r,args:n,eventName:i,id:u,request:l(u),strict:o,type:"event"}}async function U(e,{address:t,args:r,event:n,events:i,fromBlock:a,strict:o,toBlock:s}={}){let l=i??(n?[n]:void 0),c=x(e,{method:"eth_newFilter"}),u=[];l&&(u=[l.flatMap(e=>T({abi:[e],eventName:e.name,args:r}))],n&&(u=u[0]));let h=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"==typeof a?(0,R.eC)(a):a,toBlock:"bigint"==typeof s?(0,R.eC)(s):s,...u.length?{topics:u}:{}}]});return{abi:l,args:r,eventName:n?n.name:void 0,fromBlock:a,id:h,request:c(h),strict:o,toBlock:s,type:"event"}}async function B(e){let t=x(e,{method:"eth_newPendingTransactionFilter"}),r=await e.request({method:"eth_newPendingTransactionFilter"});return{id:r,request:t(r),type:"transaction"}}var M=r(14503),j=r(77799),L=r(72365),F=r(93714),z=r(81841);async function H(e,{abi:t,address:r,args:n,functionName:i,...a}){let o=(0,j.R)({abi:t,args:n,functionName:i});try{let t=await (0,F.s)(e,z.Q)({data:o,to:r,...a});return t}catch(o){let e=a.account?(0,M.T)(a.account):void 0;throw(0,L.S)(o,{abi:t,address:r,args:n,docsPath:"/docs/contract/estimateContractGas",functionName:i,sender:e?.address})}}var W=r(43861),q=r(79379);async function G(e,{address:t,blockNumber:r,blockTag:n="latest"}){let i=r?(0,R.eC)(r):void 0,a=await e.request({method:"eth_getBalance",params:[t,i||n]});return BigInt(a)}var Z=r(36765);let V=new Map,K=new Map;async function Q(e,{cacheKey:t,cacheTime:r=1/0}){let n=function(e){let t=(e,t)=>({clear:()=>t.delete(e),get:()=>t.get(e),set:r=>t.set(e,r)}),r=t(e,V),n=t(e,K);return{clear:()=>{r.clear(),n.clear()},promise:r,response:n}}(t),i=n.response.get();if(i&&r>0){let e=new Date().getTime()-i.created.getTime();if(e<r)return i.data}let a=n.promise.get();a||(a=e(),n.promise.set(a));try{let e=await a;return n.response.set({created:new Date,data:e}),e}finally{n.promise.clear()}}let Y=e=>`blockNumber.${e}`;async function X(e,{cacheTime:t=e.cacheTime,maxAge:r}={}){let n=await Q(()=>e.request({method:"eth_blockNumber"}),{cacheKey:Y(e.uid),cacheTime:r??t});return BigInt(n)}var J=r(95946);async function ee(e,{blockHash:t,blockNumber:r,blockTag:n="latest"}={}){let i;let a=void 0!==r?(0,R.eC)(r):void 0;return i=t?await e.request({method:"eth_getBlockTransactionCountByHash",params:[t]}):await e.request({method:"eth_getBlockTransactionCountByNumber",params:[a||n]}),(0,J.ly)(i)}async function et(e,{address:t,blockNumber:r,blockTag:n="latest"}){let i=void 0!==r?(0,R.eC)(r):void 0,a=await e.request({method:"eth_getCode",params:[t,i||n]});if("0x"!==a)return a}var er=r(79524),en=r(34450);let ei="/docs/contract/decodeEventLog";function ea({abi:e,data:t,strict:r,topics:n}){let i=r??!0,[a,...o]=n;if(!a)throw new E.FM({docsPath:ei});let s=e.find(e=>"event"===e.type&&a===(0,P.e)((0,$.t)(e)));if(!(s&&"name"in s)||"event"!==s.type)throw new E.lC(a,{docsPath:ei});let{name:l,inputs:c}=s,u=c?.some(e=>!("name"in e&&e.name)),h=u?[]:{},d=c.filter(e=>"indexed"in e&&e.indexed);for(let e=0;e<d.length;e++){let t=d[e],r=o[e];if(!r)throw new E.Gy({abiItem:s,param:t});h[t.name||e]=function({param:e,value:t}){if("string"===e.type||"bytes"===e.type||"tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/))return t;let r=(0,en.r)([e],t)||[];return r[0]}({param:t,value:r})}let p=c.filter(e=>!("indexed"in e&&e.indexed));if(p.length>0){if(t&&"0x"!==t)try{let e=(0,en.r)(p,t);if(e){if(u)h=[...h,...e];else for(let t=0;t<p.length;t++)h[p[t].name]=e[t]}}catch(e){if(i){if(e instanceof E.xB)throw new E.SM({abiItem:s,data:e.data,params:e.params,size:e.size});throw e}}else if(i)throw new E.SM({abiItem:s,data:"0x",params:p,size:0})}return{eventName:l,args:Object.values(h).length>0?h:void 0}}var eo=r(53992);async function es(e,{address:t,blockHash:r,fromBlock:n,toBlock:i,event:a,events:o,args:s,strict:l}={}){let c=l??!1,u=o??(a?[a]:void 0),h=[];return u&&(h=[u.flatMap(e=>T({abi:[e],eventName:e.name,args:s}))],a&&(h=h[0])),(r?await e.request({method:"eth_getLogs",params:[{address:t,topics:h,blockHash:r}]}):await e.request({method:"eth_getLogs",params:[{address:t,topics:h,fromBlock:"bigint"==typeof n?(0,R.eC)(n):n,toBlock:"bigint"==typeof i?(0,R.eC)(i):i}]})).map(e=>{try{let{eventName:t,args:r}=u?ea({abi:u,data:e.data,topics:e.topics,strict:c}):{eventName:void 0,args:void 0};return(0,eo.U)(e,{args:r,eventName:t})}catch(n){let t,r;if(n instanceof E.SM||n instanceof E.Gy){if(c)return;t=n.abiItem.name,r=n.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return(0,eo.U)(e,{args:r?[]:{},eventName:t})}}).filter(Boolean)}async function el(e,{abi:t,address:r,args:n,blockHash:i,eventName:a,fromBlock:o,toBlock:s,strict:l}){let c=a?(0,O.m)({abi:t,name:a}):void 0,u=c?void 0:t.filter(e=>"event"===e.type);return(0,F.s)(e,es)({address:r,args:n,blockHash:i,event:c,events:u,fromBlock:o,toBlock:s,strict:l})}async function ec(e,{blockCount:t,blockNumber:r,blockTag:n="latest",rewardPercentiles:i}){let a=r?(0,R.eC)(r):void 0,o=await e.request({method:"eth_feeHistory",params:[(0,R.eC)(t),a||n,i]});return{baseFeePerGas:o.baseFeePerGas.map(e=>BigInt(e)),gasUsedRatio:o.gasUsedRatio,oldestBlock:BigInt(o.oldestBlock),reward:o.reward?.map(e=>e.map(e=>BigInt(e)))}}async function eu(e,{filter:t}){let r="strict"in t&&t.strict,n=await t.request({method:"eth_getFilterChanges",params:[t.id]});return n.map(e=>{if("string"==typeof e)return e;try{let{eventName:n,args:i}="abi"in t&&t.abi?ea({abi:t.abi,data:e.data,topics:e.topics,strict:r}):{eventName:void 0,args:void 0};return(0,eo.U)(e,{args:i,eventName:n})}catch(i){let r,n;if(i instanceof E.SM||i instanceof E.Gy){if("strict"in t&&t.strict)return;r=i.abiItem.name,n=i.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return(0,eo.U)(e,{args:n?[]:{},eventName:r})}}).filter(Boolean)}async function eh(e,{filter:t}){let r=t.strict??!1,n=await t.request({method:"eth_getFilterLogs",params:[t.id]});return n.map(e=>{try{let{eventName:n,args:i}="abi"in t&&t.abi?ea({abi:t.abi,data:e.data,topics:e.topics,strict:r}):{eventName:void 0,args:void 0};return(0,eo.U)(e,{args:i,eventName:n})}catch(i){let r,n;if(i instanceof E.SM||i instanceof E.Gy){if("strict"in t&&t.strict)return;r=i.abiItem.name,n=i.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return(0,eo.U)(e,{args:n?[]:{},eventName:r})}}).filter(Boolean)}var ed=r(24453);async function ep(e,{address:t,blockNumber:r,blockTag:n,storageKeys:i}){let a=void 0!==r?(0,R.eC)(r):void 0,o=await e.request({method:"eth_getProof",params:[t,i,a||(n??"latest")]});return{...o,balance:o.balance?BigInt(o.balance):void 0,nonce:o.nonce?(0,J.ly)(o.nonce):void 0,storageProof:o.storageProof?o.storageProof.map(e=>({...e,value:BigInt(e.value)})):void 0}}async function ef(e,{address:t,blockNumber:r,blockTag:n="latest",slot:i}){let a=void 0!==r?(0,R.eC)(r):void 0,o=await e.request({method:"eth_getStorageAt",params:[t,i,a||n]});return o}var em=r(33639),eb=r(6073);async function eg(e,{blockHash:t,blockNumber:r,blockTag:n,hash:i,index:a}){let o=n||"latest",s=void 0!==r?(0,R.eC)(r):void 0,l=null;if(i?l=await e.request({method:"eth_getTransactionByHash",params:[i]}):t?l=await e.request({method:"eth_getTransactionByBlockHashAndIndex",params:[t,(0,R.eC)(a)]}):(s||o)&&(l=await e.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[s||o,(0,R.eC)(a)]})),!l)throw new em.Bh({blockHash:t,blockNumber:r,blockTag:o,hash:i,index:a});let c=e.chain?.formatters?.transaction?.format||eb.Tr;return c(l)}async function ew(e,{hash:t,transactionReceipt:r}){let[n,i]=await Promise.all([(0,F.s)(e,X)({}),t?(0,F.s)(e,eg)({hash:t}):void 0]),a=r?.blockNumber||i?.blockNumber;return a?n-a+1n:0n}var ey=r(86162),ev=r(30866);async function ex(e,{hash:t}){let r=await e.request({method:"eth_getTransactionReceipt",params:[t]});if(!r)throw new em.Yb({hash:t});let n=e.chain?.formatters?.transactionReceipt?.format||ev.f;return n(r)}var eC=r(16693),eE=r(97405),ek=r(7210),eS=r(47864),eA=r(88819);async function eP(e,t){let{allowFailure:r=!0,batchSize:n,blockNumber:i,blockTag:a,contracts:o,multicallAddress:s}=t,l=n??("object"==typeof e.batch?.multicall&&e.batch.multicall.batchSize||1024),c=s;if(!c){if(!e.chain)throw Error("client chain not configured. multicallAddress is required.");c=(0,eS.L)({blockNumber:i,chain:e.chain,contract:"multicall3"})}let u=[[]],h=0,d=0;for(let e=0;e<o.length;e++){let{abi:t,address:n,args:i,functionName:a}=o[e];try{let e=(0,j.R)({abi:t,args:i,functionName:a});d+=(e.length-2)/2,l>0&&d>l&&u[h].length>0&&(h++,d=(e.length-2)/2,u[h]=[]),u[h]=[...u[h],{allowFailure:!0,callData:e,target:n}]}catch(o){let e=(0,L.S)(o,{abi:t,address:n,args:i,docsPath:"/docs/contract/multicall",functionName:a});if(!r)throw e;u[h]=[...u[h],{allowFailure:!0,callData:"0x",target:n}]}}let p=await Promise.allSettled(u.map(t=>(0,F.s)(e,eA.L)({abi:eC.F8,address:c,args:[t],blockNumber:i,blockTag:a,functionName:"aggregate3"}))),f=[];for(let e=0;e<p.length;e++){let t=p[e];if("rejected"===t.status){if(!r)throw t.reason;for(let r=0;r<u[e].length;r++)f.push({status:"failure",error:t.reason,result:void 0});continue}let n=t.value;for(let t=0;t<n.length;t++){let{returnData:i,success:a}=n[t],{callData:s}=u[e][t],{abi:l,address:c,functionName:h,args:d}=o[f.length];try{if("0x"===s)throw new E.wb;if(!a)throw new eE.VQ({data:i});let e=(0,ek.k)({abi:l,args:d,data:i,functionName:h});f.push(r?{result:e,status:"success"}:e)}catch(t){let e=(0,L.S)(t,{abi:l,address:c,args:d,docsPath:"/docs/contract/multicall",functionName:h});if(!r)throw e;f.push({error:e,result:void 0,status:"failure"})}}}if(f.length!==o.length)throw new k.G("multicall results mismatch");return f}async function e_(e,{abi:t,address:r,args:n,dataSuffix:i,functionName:a,...o}){let s=o.account?(0,M.T)(o.account):void 0,l=(0,j.R)({abi:t,args:n,functionName:a});try{let{data:s}=await (0,F.s)(e,v.R)({batch:!1,data:`${l}${i?i.replace("0x",""):""}`,to:r,...o}),c=(0,ek.k)({abi:t,args:n,functionName:a,data:s||"0x"});return{result:c,request:{abi:t,address:r,args:n,dataSuffix:i,functionName:a,...o}}}catch(e){throw(0,L.S)(e,{abi:t,address:r,args:n,docsPath:"/docs/contract/simulateContract",functionName:a,sender:s?.address})}}async function eD(e,{filter:t}){return t.request({method:"eth_uninstallFilter",params:[t.id]})}var e$=r(57040);BigInt(0),BigInt(1),BigInt(2),Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));var eO=r(15102),eT=r(30286);async function eI(e,{address:t,hash:r,signature:n,...i}){let a=(0,eO.v)(n)?n:(0,R.NC)(n);try{let{data:n}=await (0,F.s)(e,v.R)({data:(0,eT.w)({abi:eC.$o,args:[t,r,a],bytecode:"0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572"}),...i});return function(e,t){let r=(0,eO.v)(e)?(0,A.O0)(e):e,n=(0,eO.v)(t)?(0,A.O0)(t):t;return function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(r,n)}(n??"0x0","0x1")}catch(e){if(e instanceof eE.cg)return!1;throw e}}async function eR(e,{address:t,message:r,signature:n,...i}){let a=function(e,t){let r="string"==typeof e?(0,A.qX)(e):e.raw instanceof Uint8Array?e.raw:(0,A.O0)(e.raw),n=(0,A.qX)(`\x19Ethereum Signed Message:
${r.length}`);return(0,_.w)((0,e$.zo)([n,r]),void 0)}(r);return eI(e,{address:t,hash:a,signature:n,...i})}var eN=r(71352);function eU({data:e,primaryType:t,types:r}){let n=function e({data:t,primaryType:r,types:n}){let i=[{type:"bytes32"}],a=[function({primaryType:e,types:t}){let r=(0,R.NC)(function({primaryType:e,types:t}){let r="",n=function e({primaryType:t,types:r},n=new Set){let i=t.match(/^\w*/u),a=i?.[0];if(n.has(a)||void 0===r[a])return n;for(let t of(n.add(a),r[a]))e({primaryType:t.type,types:r},n);return n}({primaryType:e,types:t});n.delete(e);let i=[e,...Array.from(n).sort()];for(let e of i)r+=`${e}(${t[e].map(({name:e,type:t})=>`${t} ${e}`).join(",")})`;return r}({primaryType:e,types:t}));return(0,_.w)(r)}({primaryType:r,types:n})];for(let o of n[r]){let[r,s]=function t({types:r,name:n,type:i,value:a}){if(void 0!==r[i])return[{type:"bytes32"},(0,_.w)(e({data:a,primaryType:i,types:r}))];if("bytes"===i){let e=a.length%2?"0":"";return a=`0x${e+a.slice(2)}`,[{type:"bytes32"},(0,_.w)(a)]}if("string"===i)return[{type:"bytes32"},(0,_.w)((0,R.NC)(a))];if(i.lastIndexOf("]")===i.length-1){let e=i.slice(0,i.lastIndexOf("[")),o=a.map(i=>t({name:n,type:e,types:r,value:i}));return[{type:"bytes32"},(0,_.w)((0,D.E)(o.map(([e])=>e),o.map(([,e])=>e)))]}return[{type:i},a]}({types:n,name:o.name,type:o.type,value:t[o.name]});i.push(r),a.push(s)}return(0,D.E)(i,a)}({data:e,primaryType:t,types:r});return(0,_.w)(n)}async function eB(e,{address:t,signature:r,message:n,primaryType:i,types:a,domain:o,...s}){let l=function({domain:e,message:t,primaryType:r,types:n}){let i=void 0===e?{}:e,a={EIP712Domain:(0,eN.cj)({domain:i}),...n};(0,eN.iC)({domain:i,message:t,primaryType:r,types:a});let o=["0x1901"];return i&&o.push(function({domain:e,types:t}){return eU({data:e,primaryType:"EIP712Domain",types:t})}({domain:i,types:a})),"EIP712Domain"!==r&&o.push(eU({data:t,primaryType:r,types:a})),(0,_.w)((0,e$.zo)(o))}({message:n,primaryType:i,types:a,domain:o});return eI(e,{address:t,hash:l,signature:r,...s})}let eM=new Map,ej=new Map,eL=0;function eF(e,t,r){let n=++eL,i=()=>eM.get(e)||[],a=()=>{let t=i();eM.set(e,t.filter(e=>e.id!==n))},o=()=>{let t=ej.get(e);1===i().length&&t&&t(),a()},s=i();if(eM.set(e,[...s,{id:n,fns:t}]),s&&s.length>0)return o;let l={};for(let e in t)l[e]=(...t)=>{let r=i();0!==r.length&&r.forEach(r=>r.fns[e]?.(...t))};let c=r(l);return"function"==typeof c&&ej.set(e,c),o}var ez=r(7760),eH=r(96070),eW=r(62914);function eq(e,{emitOnBegin:t,initialWaitTime:r,interval:n}){let i=!0,a=()=>i=!1,o=async()=>{let o;t&&(o=await e({unpoll:a}));let s=await r?.(o)??n;await (0,eW.D)(s);let l=async()=>{i&&(await e({unpoll:a}),await (0,eW.D)(n),l())};l()};return o(),a}function eG(e,{emitOnBegin:t=!1,emitMissed:r=!1,onBlockNumber:n,onError:i,poll:a,pollingInterval:o=e.pollingInterval}){let s,l,c;let u=void 0!==a?a:"webSocket"!==e.transport.type;return u?(()=>{let a=(0,eH.P)(["watchBlockNumber",e.uid,t,r,o]);return eF(a,{onBlockNumber:n,onError:i},n=>eq(async()=>{try{let t=await (0,F.s)(e,X)({cacheTime:0});if(s){if(t===s)return;if(t-s>1&&r)for(let e=s+1n;e<t;e++)n.onBlockNumber(e,s),s=e}(!s||t>s)&&(n.onBlockNumber(t,s),s=t)}catch(e){n.onError?.(e)}},{emitOnBegin:t,interval:o}))})():(l=!0,c=()=>l=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newHeads"],onData(e){if(!l)return;let t=(0,J.y_)(e.result?.number);n(t,s),s=t},onError(e){i?.(e)}});c=t,l||c()}catch(e){i?.(e)}})(),c)}async function eZ(e,{confirmations:t=1,hash:r,onReplaced:n,pollingInterval:i=e.pollingInterval,timeout:a}){let o,s,l;let c=(0,eH.P)(["waitForTransactionReceipt",e.uid,r]),u=!1;return new Promise((h,d)=>{a&&setTimeout(()=>d(new em.mc({hash:r})),a);let p=eF(c,{onReplaced:n,resolve:h,reject:d},n=>{let a=(0,F.s)(e,eG)({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:i,async onBlockNumber(i){if(u)return;let c=i,h=e=>{a(),e(),p()};try{if(l){if(t>1&&(!l.blockNumber||c-l.blockNumber+1n<t))return;h(()=>n.resolve(l));return}if(o||(u=!0,await (0,ez.J)(async()=>{(o=await (0,F.s)(e,eg)({hash:r})).blockNumber&&(c=o.blockNumber)},{delay:({count:e})=>200*~~(1<<e),retryCount:6}),u=!1),l=await (0,F.s)(e,ex)({hash:r}),t>1&&(!l.blockNumber||c-l.blockNumber+1n<t))return;h(()=>n.resolve(l))}catch(r){if(o&&(r instanceof em.Bh||r instanceof em.Yb))try{s=o;let r=await (0,F.s)(e,Z.Q)({blockNumber:c,includeTransactions:!0}),i=r.transactions.find(({from:e,nonce:t})=>e===s.from&&t===s.nonce);if(!i||(l=await (0,F.s)(e,ex)({hash:i.hash}),t>1&&(!l.blockNumber||c-l.blockNumber+1n<t)))return;let a="replaced";i.to===s.to&&i.value===s.value?a="repriced":i.from===i.to&&0n===i.value&&(a="cancelled"),h(()=>{n.onReplaced?.({reason:a,replacedTransaction:s,transaction:i,transactionReceipt:l}),n.resolve(l)})}catch(e){h(()=>n.reject(e))}else h(()=>n.reject(r))}}})})})}var eV=r(43310),eK=r(39028),eQ=r(37397),eY=r(99238);function eX(e){return{call:t=>(0,v.R)(e,t),createBlockFilter:()=>C(e),createContractEventFilter:t=>N(e,t),createEventFilter:t=>U(e,t),createPendingTransactionFilter:()=>B(e),estimateContractGas:t=>H(e,t),estimateGas:t=>(0,z.Q)(e,t),getBalance:t=>G(e,t),getBlock:t=>(0,Z.Q)(e,t),getBlockNumber:t=>X(e,t),getBlockTransactionCount:t=>ee(e,t),getBytecode:t=>et(e,t),getChainId:()=>(0,er.L)(e),getContractEvents:t=>el(e,t),getEnsAddress:t=>(0,m.O)(e,t),getEnsAvatar:t=>(0,b.r)(e,t),getEnsName:t=>(0,g.w)(e,t),getEnsResolver:t=>(0,w.S)(e,t),getEnsText:t=>(0,y.g)(e,t),getFeeHistory:t=>ec(e,t),estimateFeesPerGas:t=>(0,W.X)(e,t),getFilterChanges:t=>eu(e,t),getFilterLogs:t=>eh(e,t),getGasPrice:()=>(0,ed.o)(e),getLogs:t=>es(e,t),getProof:t=>ep(e,t),estimateMaxPriorityFeePerGas:t=>(0,q._)(e,t),getStorageAt:t=>ef(e,t),getTransaction:t=>eg(e,t),getTransactionConfirmations:t=>ew(e,t),getTransactionCount:t=>(0,ey.K)(e,t),getTransactionReceipt:t=>ex(e,t),multicall:t=>eP(e,t),prepareTransactionRequest:t=>(0,eQ.Z)(e,t),readContract:t=>(0,eA.L)(e,t),sendRawTransaction:t=>(0,eY.p)(e,t),simulateContract:t=>e_(e,t),verifyMessage:t=>eR(e,t),verifyTypedData:t=>eB(e,t),uninstallFilter:t=>eD(e,t),waitForTransactionReceipt:t=>eZ(e,t),watchBlocks:t=>(function(e,{blockTag:t="latest",emitMissed:r=!1,emitOnBegin:n=!1,onBlock:i,onError:a,includeTransactions:o,poll:s,pollingInterval:l=e.pollingInterval}){let c,u,h;let d=void 0!==s?s:"webSocket"!==e.transport.type,p=o??!1;return d?(()=>{let o=(0,eH.P)(["watchBlocks",e.uid,r,n,p,l]);return eF(o,{onBlock:i,onError:a},i=>eq(async()=>{try{let n=await (0,F.s)(e,Z.Q)({blockTag:t,includeTransactions:p});if(n.number&&c?.number){if(n.number===c.number)return;if(n.number-c.number>1&&r)for(let t=c?.number+1n;t<n.number;t++){let r=await (0,F.s)(e,Z.Q)({blockNumber:t,includeTransactions:p});i.onBlock(r,c),c=r}}(!c?.number||"pending"===t&&!n?.number||n.number&&n.number>c.number)&&(i.onBlock(n,c),c=n)}catch(e){i.onError?.(e)}},{emitOnBegin:n,interval:l}))})():(u=!0,h=()=>u=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newHeads"],onData(t){if(!u)return;let r=e.chain?.formatters?.block?.format||eV.Z,n=r(t.result);i(n,c),c=n},onError(e){a?.(e)}});h=t,u||h()}catch(e){a?.(e)}})(),h)})(e,t),watchBlockNumber:t=>eG(e,t),watchContractEvent:t=>(function(e,{abi:t,address:r,args:n,batch:i=!0,eventName:a,onError:o,onLogs:s,poll:l,pollingInterval:c=e.pollingInterval,strict:u}){let h,d;let p=void 0!==l?l:"webSocket"!==e.transport.type;return p?(()=>{let l=(0,eH.P)(["watchContractEvent",r,n,i,e.uid,a,c]),h=u??!1;return eF(l,{onLogs:s,onError:o},o=>{let s,l;let u=!1,d=eq(async()=>{if(!u){try{l=await (0,F.s)(e,N)({abi:t,address:r,args:n,eventName:a,strict:h})}catch{}u=!0;return}try{let a;if(l)a=await (0,F.s)(e,eu)({filter:l});else{let i=await (0,F.s)(e,X)({});a=s&&s!==i?await (0,F.s)(e,el)({abi:t,address:r,args:n,fromBlock:s+1n,toBlock:i,strict:h}):[],s=i}if(0===a.length)return;i?o.onLogs(a):a.forEach(e=>o.onLogs([e]))}catch(e){l&&e instanceof eK.yR&&(u=!1),o.onError?.(e)}},{emitOnBegin:!0,interval:c});return async()=>{l&&await (0,F.s)(e,eD)({filter:l}),d()}})})():(h=!0,d=()=>h=!1,(async()=>{try{let i=a?T({abi:t,eventName:a,args:n}):[],{unsubscribe:l}=await e.transport.subscribe({params:["logs",{address:r,topics:i}],onData(e){if(!h)return;let r=e.result;try{let{eventName:e,args:n}=ea({abi:t,data:r.data,topics:r.topics,strict:u}),i=(0,eo.U)(r,{args:n,eventName:e});s([i])}catch(i){let e,t;if(i instanceof E.SM||i instanceof E.Gy){if(u)return;e=i.abiItem.name,t=i.abiItem.inputs?.some(e=>!("name"in e&&e.name))}let n=(0,eo.U)(r,{args:t?[]:{},eventName:e});s([n])}},onError(e){o?.(e)}});d=l,h||d()}catch(e){o?.(e)}})(),d)})(e,t),watchEvent:t=>(function(e,{address:t,args:r,batch:n=!0,event:i,events:a,onError:o,onLogs:s,poll:l,pollingInterval:c=e.pollingInterval,strict:u}){let h,d;let p=void 0!==l?l:"webSocket"!==e.transport.type,f=u??!1;return p?(()=>{let l=(0,eH.P)(["watchEvent",t,r,n,e.uid,i,c]);return eF(l,{onLogs:s,onError:o},o=>{let s,l;let u=!1,h=eq(async()=>{if(!u){try{l=await (0,F.s)(e,U)({address:t,args:r,event:i,events:a,strict:f})}catch{}u=!0;return}try{let c;if(l)c=await (0,F.s)(e,eu)({filter:l});else{let n=await (0,F.s)(e,X)({});c=s&&s!==n?await (0,F.s)(e,es)({address:t,args:r,event:i,events:a,fromBlock:s+1n,toBlock:n}):[],s=n}if(0===c.length)return;n?o.onLogs(c):c.forEach(e=>o.onLogs([e]))}catch(e){l&&e instanceof eK.yR&&(u=!1),o.onError?.(e)}},{emitOnBegin:!0,interval:c});return async()=>{l&&await (0,F.s)(e,eD)({filter:l}),h()}})})():(h=!0,d=()=>h=!1,(async()=>{try{let n=a??(i?[i]:void 0),l=[];n&&(l=[n.flatMap(e=>T({abi:[e],eventName:e.name,args:r}))],i&&(l=l[0]));let{unsubscribe:c}=await e.transport.subscribe({params:["logs",{address:t,topics:l}],onData(e){if(!h)return;let t=e.result;try{let{eventName:e,args:r}=ea({abi:n,data:t.data,topics:t.topics,strict:f}),i=(0,eo.U)(t,{args:r,eventName:e});s([i])}catch(i){let e,r;if(i instanceof E.SM||i instanceof E.Gy){if(u)return;e=i.abiItem.name,r=i.abiItem.inputs?.some(e=>!("name"in e&&e.name))}let n=(0,eo.U)(t,{args:r?[]:{},eventName:e});s([n])}},onError(e){o?.(e)}});d=c,h||d()}catch(e){o?.(e)}})(),d)})(e,t),watchPendingTransactions:t=>(function(e,{batch:t=!0,onError:r,onTransactions:n,poll:i,pollingInterval:a=e.pollingInterval}){let o,s;let l=void 0!==i?i:"webSocket"!==e.transport.type;return l?(()=>{let i=(0,eH.P)(["watchPendingTransactions",e.uid,t,a]);return eF(i,{onTransactions:n,onError:r},r=>{let n;let i=eq(async()=>{try{if(!n)try{n=await (0,F.s)(e,B)({});return}catch(e){throw i(),e}let a=await (0,F.s)(e,eu)({filter:n});if(0===a.length)return;t?r.onTransactions(a):a.forEach(e=>r.onTransactions([e]))}catch(e){r.onError?.(e)}},{emitOnBegin:!0,interval:a});return async()=>{n&&await (0,F.s)(e,eD)({filter:n}),i()}})})():(o=!0,s=()=>o=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newPendingTransactions"],onData(e){if(!o)return;let t=e.result;n([t])},onError(e){r?.(e)}});s=t,o||s()}catch(e){r?.(e)}})(),s)})(e,t)}}function eJ(e){let{key:t="public",name:r="Public Client"}=e,n=(0,f.e)({...e,key:t,name:r,type:"publicClient"});return n.extend(eX)}var e0=r(37029),e1=r(31031);function e2(e,t={}){let{key:r="fallback",name:n="Fallback",rank:i=!1,retryCount:a,retryDelay:o}=t;return({chain:t,pollingInterval:s=4e3,timeout:l})=>{let c=e,u=()=>{},h=(0,e1.q)({key:r,name:n,async request({method:e,params:r}){let n=async(i=0)=>{let a=c[i]({chain:t,retryCount:0,timeout:l});try{let t=await a.request({method:e,params:r});return u({method:e,params:r,response:t,transport:a,status:"success"}),t}catch(t){if(u({error:t,method:e,params:r,transport:a,status:"error"}),(0,e0.y)(t)||i===c.length-1)throw t;return n(i+1)}};return n()},retryCount:a,retryDelay:o,type:"fallback"},{onResponse:e=>u=e,transports:c.map(e=>e({chain:t,retryCount:0}))});if(i){let e="object"==typeof i?i:{};!function({chain:e,interval:t=4e3,onTransports:r,sampleCount:n=10,timeout:i=1e3,transports:a,weights:o={}}){let{stability:s=.7,latency:l=.3}=o,c=[],u=async()=>{let o=await Promise.all(a.map(async t=>{let r,n;let a=t({chain:e,retryCount:0,timeout:i}),o=Date.now();try{await a.request({method:"net_listening"}),n=1}catch{n=0}finally{r=Date.now()}let s=r-o;return{latency:s,success:n}}));c.push(o),c.length>n&&c.shift();let h=Math.max(...c.map(e=>Math.max(...e.map(({latency:e})=>e)))),d=a.map((e,t)=>{let r=c.map(e=>e[t].latency),n=r.reduce((e,t)=>e+t,0)/r.length,i=c.map(e=>e[t].success),a=i.reduce((e,t)=>e+t,0)/i.length;return 0===a?[0,t]:[l*(1-n/h)+s*a,t]}).sort((e,t)=>t[0]-e[0]);r(d.map(([,e])=>a[e])),await (0,eW.D)(t),u()};u()}({chain:t,interval:e.interval??s,onTransports:e=>c=e,sampleCount:e.sampleCount,timeout:e.timeout,transports:c,weights:e.weights})}return h}}var e3=r(78863);class e5 extends k.G{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}var e6=r(32357);let e4=function(){if("undefined"!=typeof WebSocket)return WebSocket;if(void 0!==global.WebSocket)return global.WebSocket;if(void 0!==window.WebSocket)return window.WebSocket;if(void 0!==self.WebSocket)return self.WebSocket;throw Error("`WebSocket` is not supported in this environment")}();function e8(e,{errorInstance:t=Error("timed out"),timeout:r,signal:n}){return new Promise((i,a)=>{(async()=>{let o;try{let s=new AbortController;r>0&&(o=setTimeout(()=>{n?s.abort():a(t)},r)),i(await e({signal:s?.signal}))}catch(e){"AbortError"===e.name&&a(t),a(e)}finally{clearTimeout(o)}})()})}let e7=0;async function e9(e,{body:t,fetchOptions:r={},timeout:n=1e4}){let{headers:i,method:a,signal:o}=r;try{let s;let l=await e8(async({signal:s})=>{let l=await fetch(e,{...r,body:Array.isArray(t)?(0,eH.P)(t.map(e=>({jsonrpc:"2.0",id:e.id??e7++,...e}))):(0,eH.P)({jsonrpc:"2.0",id:t.id??e7++,...t}),headers:{...i,"Content-Type":"application/json"},method:a||"POST",signal:o||(n>0?s:void 0)});return l},{errorInstance:new e3.W5({body:t,url:e}),timeout:n,signal:!0});if(s=l.headers.get("Content-Type")?.startsWith("application/json")?await l.json():await l.text(),!l.ok)throw new e3.Gg({body:t,details:(0,eH.P)(s.error)||l.statusText,headers:l.headers,status:l.status,url:e});return s}catch(r){if(r instanceof e3.Gg||r instanceof e3.W5)throw r;throw new e3.Gg({body:t,details:r.message,url:e})}}let te=new Map;async function tt(e){let t=te.get(e);if(t)return t;let{schedule:r}=(0,e6.S)({id:e,fn:async()=>{let r=new e4(e),n=new Map,i=new Map,a=({data:e})=>{let t=JSON.parse(e),r="eth_subscription"===t.method,a=r?t.params.subscription:t.id,o=r?i:n,s=o.get(a);s&&s({data:e}),r||o.delete(a)},o=()=>{te.delete(e),r.removeEventListener("close",o),r.removeEventListener("message",a)};return r.addEventListener("close",o),r.addEventListener("message",a),r.readyState===e4.CONNECTING&&await new Promise((e,t)=>{r&&(r.onopen=e,r.onerror=t)}),t=Object.assign(r,{requests:n,subscriptions:i}),te.set(e,t),[t]}}),[n,[i]]=await r();return i}async function tr(e,{body:t,timeout:r=1e4}){return e8(()=>new Promise(r=>tn.webSocket(e,{body:t,onResponse:r})),{errorInstance:new e3.W5({body:t,url:e.url}),timeout:r})}let tn={http:e9,webSocket:function(e,{body:t,onResponse:r}){if(e.readyState===e.CLOSED||e.readyState===e.CLOSING)throw new e3.c9({body:t,url:e.url,details:"Socket is closed."});let n=e7++,i=({data:a})=>{let o=JSON.parse(a);("number"!=typeof o.id||n===o.id)&&(r?.(o),"eth_subscribe"===t.method&&"string"==typeof o.result&&e.subscriptions.set(o.result,i),"eth_unsubscribe"===t.method&&e.subscriptions.delete(t.params?.[0]))};return e.requests.set(n,i),e.send(JSON.stringify({jsonrpc:"2.0",...t,id:n})),e},webSocketAsync:tr};var ti=r(57858),ta=r(84192);let to=e=>(t,r,n)=>{let i=n.subscribe;n.subscribe=(e,t,r)=>{let a=e;if(t){let i=(null==r?void 0:r.equalityFn)||Object.is,o=e(n.getState());a=r=>{let n=e(r);if(!i(o,n)){let e=o;t(o=n,e)}},(null==r?void 0:r.fireImmediately)&&t(o,o)}return i(a)};let a=e(t,r,n);return a},ts=e=>t=>{try{let r=e(t);if(r instanceof Promise)return r;return{then:e=>ts(e)(r),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>ts(t)(e)}}},tl=(e,t)=>(r,n,i)=>{let a,o,s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},l=!1,c=new Set,u=new Set;try{a=s.getStorage()}catch(e){}if(!a)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),r(...e)},n,i);let h=ts(s.serialize),d=()=>{let e;let t=s.partialize({...n()}),r=h({state:t,version:s.version}).then(e=>a.setItem(s.name,e)).catch(t=>{e=t});if(e)throw e;return r},p=i.setState;i.setState=(e,t)=>{p(e,t),d()};let f=e((...e)=>{r(...e),d()},n,i),m=()=>{var e;if(!a)return;l=!1,c.forEach(e=>e(n()));let t=(null==(e=s.onRehydrateStorage)?void 0:e.call(s,n()))||void 0;return ts(a.getItem.bind(a))(s.name).then(e=>{if(e)return s.deserialize(e)}).then(e=>{if(e){if("number"!=typeof e.version||e.version===s.version)return e.state;if(s.migrate)return s.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(o=s.merge(e,null!=(t=n())?t:f),!0),d()}).then(()=>{null==t||t(o,void 0),l=!0,u.forEach(e=>e(o))}).catch(e=>{null==t||t(void 0,e)})};return i.persist={setOptions:e=>{s={...s,...e},e.getStorage&&(a=e.getStorage())},clearStorage:()=>{null==a||a.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>m(),hasHydrated:()=>l,onHydrate:e=>(c.add(e),()=>{c.delete(e)}),onFinishHydration:e=>(u.add(e),()=>{u.delete(e)})},m(),o||f},tc=(e,t)=>(r,n,i)=>{let a,o={storage:function(e,t){let r;try{r=e()}catch(e){return}return{getItem:e=>{var n;let i=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),a=null!=(n=r.getItem(e))?n:null;return a instanceof Promise?a.then(i):i(a)},setItem:(e,n)=>r.setItem(e,JSON.stringify(n,null==t?void 0:t.replacer)),removeItem:e=>r.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},s=!1,l=new Set,c=new Set,u=o.storage;if(!u)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),r(...e)},n,i);let h=()=>{let e=o.partialize({...n()});return u.setItem(o.name,{state:e,version:o.version})},d=i.setState;i.setState=(e,t)=>{d(e,t),h()};let p=e((...e)=>{r(...e),h()},n,i),f=()=>{var e,t;if(!u)return;s=!1,l.forEach(e=>{var t;return e(null!=(t=n())?t:p)});let i=(null==(t=o.onRehydrateStorage)?void 0:t.call(o,null!=(e=n())?e:p))||void 0;return ts(u.getItem.bind(u))(o.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===o.version)return e.state;if(o.migrate)return o.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return r(a=o.merge(e,null!=(t=n())?t:p),!0),h()}).then(()=>{null==i||i(a,void 0),a=n(),s=!0,c.forEach(e=>e(a))}).catch(e=>{null==i||i(void 0,e)})};return i.persist={setOptions:e=>{o={...o,...e},e.storage&&(u=e.storage)},clearStorage:()=>{null==u||u.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>f(),hasHydrated:()=>s,onHydrate:e=>(l.add(e),()=>{l.delete(e)}),onFinishHydration:e=>(c.add(e),()=>{c.delete(e)})},o.skipHydration||f(),a||p},tu=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),tl(e,t)):tc(e,t),th=e=>{let t;let r=new Set,n=(e,n)=>{let i="function"==typeof e?e(t):e;if(!Object.is(i,t)){let e=t;t=(null!=n?n:"object"!=typeof i)?i:Object.assign({},t,i),r.forEach(r=>r(t,e))}},i=()=>t,a=e=>(r.add(e),()=>r.delete(e)),o=()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()},s={setState:n,getState:i,subscribe:a,destroy:o};return t=e(n,i,s),s},td=e=>e?th(e):th;var tp=r(15229),tf=r(61836);function tm(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[r,n]of e)if(!Object.is(n,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let r of e)if(!t.has(r))return!1;return!0}let r=Object.keys(e);if(r.length!==Object.keys(t).length)return!1;for(let n=0;n<r.length;n++)if(!Object.prototype.hasOwnProperty.call(t,r[n])||!Object.is(e[r[n]],t[r[n]]))return!1;return!0}var tb=r(45775);function tg(e,t,{batch:r={multicall:{wait:32}},pollingInterval:n=4e3,rank:i,retryCount:a,retryDelay:o,stallTimeout:s}={}){if(!e.length)throw Error("must have at least one chain");let l=[],c={},u={};for(let r of e){let e=!1;for(let n of t){let t=n(r);t&&(e=!0,l.some(({id:e})=>e===r.id)||(l=[...l,t.chain]),c[r.id]=[...c[r.id]||[],...t.rpcUrls.http],t.rpcUrls.webSocket&&(u[r.id]=[...u[r.id]||[],...t.rpcUrls.webSocket]))}if(!e)throw Error(`Could not find valid provider configuration for chain "${r.name}".

You may need to add \`jsonRpcProvider\` to \`configureChains\` with the chain's RPC URLs.
Read more: https://wagmi.sh/core/providers/jsonRpc`)}return{chains:l,publicClient:({chainId:t})=>{let u=l.find(e=>e.id===t)??e[0],h=c[u.id];if(!h||!h[0])throw Error(`No providers configured for chain "${u.id}"`);let d=eJ({batch:r,chain:u,transport:e2(h.map(e=>(function(e,t={}){let{batch:r,fetchOptions:n,key:i="http",name:a="HTTP JSON-RPC",retryDelay:o}=t;return({chain:s,retryCount:l,timeout:c})=>{let{batchSize:u=1e3,wait:h=0}="object"==typeof r?r:{},d=t.retryCount??l,p=c??t.timeout??1e4,f=e||s?.rpcUrls.default.http[0];if(!f)throw new e5;return(0,e1.q)({key:i,name:a,async request({method:t,params:i}){let a={method:t,params:i},{schedule:o}=(0,e6.S)({id:`${e}`,wait:h,shouldSplitBatch:e=>e.length>u,fn:e=>tn.http(f,{body:e,fetchOptions:n,timeout:p})}),s=async e=>r?o(e):[await tn.http(f,{body:e,fetchOptions:n,timeout:p})],[{error:l,result:c}]=await s(a);if(l)throw new e3.bs({body:a,error:l,url:f});return c},retryCount:d,retryDelay:o,timeout:p,type:"http"},{fetchOptions:n,url:e})}})(e,{timeout:s})),{rank:i,retryCount:a,retryDelay:o}),pollingInterval:n});return Object.assign(d,{chains:l})},webSocketPublicClient:({chainId:t})=>{let c=l.find(e=>e.id===t)??e[0],h=u[c.id];if(!h||!h[0])return;let d=eJ({batch:r,chain:c,transport:e2(h.map(e=>(function(e,t={}){let{key:r="webSocket",name:n="WebSocket JSON-RPC",retryDelay:i}=t;return({chain:a,retryCount:o,timeout:s})=>{let l=t.retryCount??o,c=s??t.timeout??1e4,u=e||a?.rpcUrls.default.webSocket?.[0];if(!u)throw new e5;return(0,e1.q)({key:r,name:n,async request({method:e,params:t}){let r={method:e,params:t},n=await tt(u),{error:i,result:a}=await tn.webSocketAsync(n,{body:r,timeout:c});if(i)throw new e3.bs({body:r,error:i,url:u});return a},retryCount:l,retryDelay:i,timeout:c,type:"webSocket"},{getSocket:()=>tt(u),async subscribe({params:e,onData:t,onError:r}){let n=await tt(u),{result:i}=await new Promise((i,a)=>tn.webSocket(n,{body:{method:"eth_subscribe",params:e},onResponse(e){if(e.error){a(e.error),r?.(e.error);return}if("number"==typeof e.id){i(e);return}"eth_subscription"===e.method&&t(e.params)}}));return{subscriptionId:i,unsubscribe:async()=>new Promise(e=>tn.webSocket(n,{body:{method:"eth_unsubscribe",params:[i]},onResponse:e}))}}})}})(e,{timeout:s})),{rank:i,retryCount:a,retryDelay:o}),pollingInterval:n});return Object.assign(d,{chains:l})}}}var tw=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured${t?` for connector "${t}"`:""}.`),this.name="ChainNotConfigured"}},ty=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},tv=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},tx=class extends Error{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}},tC=(e,{find:t,replace:r})=>e&&t(e)?r(e):"object"!=typeof e?e:Array.isArray(e)?e.map(e=>tC(e,{find:t,replace:r})):e instanceof Object?Object.entries(e).reduce((e,[n,i])=>({...e,[n]:tC(i,{find:t,replace:r})}),{}):e;function tE(e){let t=JSON.parse(e),r=tC(t,{find:e=>"string"==typeof e&&e.startsWith("#bigint."),replace:e=>BigInt(e.replace("#bigint.",""))});return r}function tk(e){return"number"==typeof e?e:"wei"===e?0:Math.abs(ta.Bd[e])}function tS(e,t){return e.slice(0,t).join(".")||"."}function tA(e,t){let{length:r}=e;for(let n=0;n<r;++n)if(e[n]===t)return n+1;return 0}function tP(e,t,r,n){return JSON.stringify(e,function(e,t){let r="function"==typeof e,n="function"==typeof t,i=[],a=[];return function(o,s){if("object"==typeof s){if(i.length){let e=tA(i,this);0===e?i[i.length]=this:(i.splice(e),a.splice(e)),a[a.length]=o;let r=tA(i,s);if(0!==r)return n?t.call(this,o,s,tS(a,r)):`[ref=${tS(a,r)}]`}else i[0]=s,a[0]=o}return r?e.call(this,o,s):s}}((e,r)=>{let n="bigint"==typeof r?`#bigint.${r.toString()}`:r;return t?.(e,n)||n},n),r??void 0)}var t_={getItem:e=>"",setItem:(e,t)=>null,removeItem:e=>null};function tD({deserialize:e=tE,key:t="wagmi",serialize:r=tP,storage:n}){return{...n,getItem:(r,i=null)=>{let a=n.getItem(`${t}.${r}`);try{return a?e(a):i}catch(e){return console.warn(e),i}},setItem:(e,i)=>{if(null===i)n.removeItem(`${t}.${e}`);else try{n.setItem(`${t}.${e}`,r(i))}catch(e){console.error(e)}},removeItem:e=>n.removeItem(`${t}.${e}`)}}var t$="store",tO=class{constructor({autoConnect:e=!1,connectors:t=[new l._],publicClient:r,storage:s=tD({storage:"undefined"!=typeof window?window.localStorage:t_}),logger:c={warn:console.warn},webSocketPublicClient:u}){let f;h(this,a),this.publicClients=new Map,this.webSocketPublicClients=new Map,h(this,n,void 0),h(this,i,void 0),this.args={autoConnect:e,connectors:t,logger:c,publicClient:r,storage:s,webSocketPublicClient:u};let m="disconnected";if(e)try{let e=s.getItem(t$),t=e?.state?.data;m=t?.account?"reconnecting":"connecting",f=t?.chain?.id}catch(e){}let b="function"==typeof t?t():t;b.forEach(e=>e.setStorage(s)),this.store=td(to(tu(()=>({connectors:b,publicClient:this.getPublicClient({chainId:f}),status:m,webSocketPublicClient:this.getWebSocketPublicClient({chainId:f})}),{name:t$,storage:s,partialize:t=>({...e&&{data:{account:t?.data?.account,chain:t?.data?.chain}},chains:t?.chains}),version:2}))),this.storage=s,d(this,i,s?.getItem("wallet")),p(this,a,o).call(this),e&&"undefined"!=typeof window&&setTimeout(async()=>await this.autoConnect(),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){return this.data?.chain?.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(e){let t="function"==typeof e?e(this.store.getState()):e;this.store.setState(t,!0)}clearState(){this.setState(e=>({...e,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){this.connector&&await this.connector.disconnect?.(),d(this,n,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(u(this,n))return;d(this,n,!0),this.setState(e=>({...e,status:e.data?.account?"reconnecting":"connecting"}));let e=u(this,i)?[...this.connectors].sort(e=>e.id===u(this,i)?-1:1):this.connectors,t=!1;for(let r of e){if(!r.ready||!r.isAuthorized)continue;let e=await r.isAuthorized();if(!e)continue;let n=await r.connect();this.setState(e=>({...e,connector:r,chains:r?.chains,data:n,status:"connected"})),t=!0;break}return t||this.setState(e=>({...e,data:void 0,status:"disconnected"})),d(this,n,!1),this.data}setConnectors(e){this.args={...this.args,connectors:e};let t="function"==typeof e?e():e;t.forEach(e=>e.setStorage(this.args.storage)),this.setState(e=>({...e,connectors:t}))}getPublicClient({chainId:e}={}){let t=this.publicClients.get(-1);if(t&&t?.chain.id===e||(t=this.publicClients.get(e??-1)))return t;let{publicClient:r}=this.args;return t="function"==typeof r?r({chainId:e}):r,this.publicClients.set(e??-1,t),t}setPublicClient(e){let t=this.data?.chain?.id;this.args={...this.args,publicClient:e},this.publicClients.clear(),this.setState(e=>({...e,publicClient:this.getPublicClient({chainId:t})}))}getWebSocketPublicClient({chainId:e}={}){let t=this.webSocketPublicClients.get(-1);if(t&&t?.chain.id===e||(t=this.webSocketPublicClients.get(e??-1)))return t;let{webSocketPublicClient:r}=this.args;return(t="function"==typeof r?r({chainId:e}):r)&&this.webSocketPublicClients.set(e??-1,t),t}setWebSocketPublicClient(e){let t=this.data?.chain?.id;this.args={...this.args,webSocketPublicClient:e},this.webSocketPublicClients.clear(),this.setState(e=>({...e,webSocketPublicClient:this.getWebSocketPublicClient({chainId:t})}))}setLastUsedConnector(e=null){this.storage?.setItem("wallet",e)}};function tT(e){let t=new tO(e);return s=t,t}function tI(){if(!s)throw Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return s}async function tR({chainId:e,connector:t}){let r=tI(),n=r.connector;if(n&&t.id===n.id)throw new ty;try{r.setState(e=>({...e,status:"connecting"}));let n=await t.connect({chainId:e});return r.setLastUsedConnector(t.id),r.setState(e=>({...e,connector:t,chains:t?.chains,data:n,status:"connected"})),r.storage.setItem("connected",!0),{...n,connector:t}}catch(e){throw r.setState(e=>({...e,status:e.connector?"connected":"disconnected"})),e}}async function tN(){let e=tI();e.connector&&await e.connector.disconnect(),e.clearState(),e.storage.removeItem("connected")}n=new WeakMap,i=new WeakMap,a=new WeakSet,o=function(){let e=e=>{this.setState(t=>({...t,data:{...t.data,...e}}))},t=()=>{this.clearState()},r=e=>{this.setState(t=>({...t,error:e}))};this.store.subscribe(({connector:e})=>e,(n,i)=>{i?.off?.("change",e),i?.off?.("disconnect",t),i?.off?.("error",r),n&&(n.on?.("change",e),n.on?.("disconnect",t),n.on?.("error",r))});let{publicClient:n,webSocketPublicClient:i}=this.args;("function"==typeof n||"function"==typeof i)&&this.store.subscribe(({data:e})=>e?.chain?.id,e=>{this.setState(t=>({...t,publicClient:this.getPublicClient({chainId:e}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:e})}))})};var tU=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],tB=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function tM({chainId:e}={}){let t=tI();return e&&t.getPublicClient({chainId:e})||t.publicClient}async function tj({chainId:e}={}){let t=tI(),r=await t.connector?.getWalletClient?.({chainId:e})||null;return r}function tL(e,t){let r=tI(),n=async()=>t(tM(e)),i=r.subscribe(({publicClient:e})=>e,n);return i}function tF({chainId:e},t){let r=tI(),n=async({chainId:r})=>{if(e&&r&&e!==r)return;let n=await tj({chainId:e});return tI().connector?t(n):t(null)},i=r.subscribe(({data:e,connector:t})=>({account:e?.account,chainId:e?.chain?.id,connector:t}),n,{equalityFn:tm});return i}async function tz({chainId:e,contracts:t,blockNumber:r,blockTag:n,...i}){let a=tM({chainId:e});if(!a.chains)throw new tv;if(e&&a.chain.id!==e)throw new tw({chainId:e});return a.multicall({allowFailure:i.allowFailure??!0,blockNumber:r,blockTag:n,contracts:t})}async function tH({address:e,account:t,chainId:r,abi:n,args:i,functionName:a,blockNumber:o,blockTag:s}){let l=tM({chainId:r});return l.readContract({abi:n,address:e,account:t,functionName:a,args:i,blockNumber:o,blockTag:s})}async function tW({contracts:e,blockNumber:t,blockTag:r,...n}){let{allowFailure:i=!0}=n;try{let n=tM(),a=e.reduce((e,t,r)=>{let i=t.chainId??n.chain.id;return{...e,[i]:[...e[i]||[],{contract:t,index:r}]}},{}),o=(await Promise.all(Object.entries(a).map(([e,n])=>tz({allowFailure:i,chainId:parseInt(e),contracts:n.map(({contract:e})=>e),blockNumber:t,blockTag:r})))).flat(),s=Object.values(a).flatMap(e=>e.map(({index:e})=>e));return o.reduce((e,t,r)=>(e&&(e[s[r]]=t),e),[])}catch(a){if(a instanceof eE.uq)throw a;let n=()=>e.map(e=>tH({...e,blockNumber:t,blockTag:r}));if(i)return(await Promise.allSettled(n())).map(e=>"fulfilled"===e.status?{result:e.value,status:"success"}:{error:e.reason,result:void 0,status:"failure"});return await Promise.all(n())}}async function tq({address:e,chainId:t,formatUnits:r,token:n}){let i=tI(),a=tM({chainId:t});if(n){let i=async({abi:i})=>{let a={abi:i,address:n,chainId:t},[o,s,l]=await tW({allowFailure:!1,contracts:[{...a,functionName:"balanceOf",args:[e]},{...a,functionName:"decimals"},{...a,functionName:"symbol"}]});return{decimals:s,formatted:(0,tp.b)(o??"0",tk(r??s)),symbol:l,value:o}};try{return await i({abi:tU})}catch(e){if(e instanceof eE.uq){let{symbol:e,...t}=await i({abi:tB});return{symbol:(0,J.rR)((0,tf.f)(e,{dir:"right"})),...t}}throw e}}let o=[...i.publicClient.chains||[],...i.chains??[]],s=await a.getBalance({address:e}),l=o.find(e=>e.id===a.chain.id);return{decimals:l?.nativeCurrency.decimals??18,formatted:(0,tp.b)(s??"0",tk(r??18)),symbol:l?.nativeCurrency.symbol??"ETH",value:s}}function tG(){let{data:e,connector:t,status:r}=tI();switch(r){case"connected":return{address:e?.account,connector:t,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:r};case"reconnecting":return{address:e?.account,connector:t,isConnected:!!e?.account,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:r};case"connecting":return{address:e?.account,connector:t,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:r};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:r}}}function tZ(){let e=tI(),t=e.data?.chain?.id,r=e.chains??[],n=[...e.publicClient?.chains||[],...r].find(e=>e.id===t)??{id:t,name:`Chain ${t}`,network:`${t}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:t?{...n,...e.data?.chain,id:t}:void 0,chains:r}}async function tV({chainId:e}){let{connector:t}=tI();if(!t)throw new ti.N;if(!t.switchChain)throw new tx({connector:t});return t.switchChain(e)}function tK(e,{selector:t=e=>e}={}){let r=tI(),n=()=>e(tG()),i=r.subscribe(({data:e,connector:r,status:n})=>t({address:e?.account,connector:r,status:n}),n,{equalityFn:tm});return i}function tQ(e,{selector:t=e=>e}={}){let r=tI(),n=()=>e(tZ()),i=r.subscribe(({data:e,chains:r})=>t({chainId:e?.chain?.id,chains:r}),n,{equalityFn:tm});return i}async function tY({name:e,chainId:t}){let{normalize:n}=await r.e(512).then(r.bind(r,46512)),i=tM({chainId:t}),a=await i.getEnsAvatar({name:n(e)});return a}async function tX({address:e,chainId:t}){let r=tM({chainId:t});return r.getEnsName({address:(0,tb.K)(e)})}},36635:function(e,t,r){"use strict";let n;r.d(t,{Ni:function(){return f},QT:function(){return I},WM:function(){return x},fz:function(){return X},Lr:function(){return Y},lZ:function(){return W},AA:function(){return E},bq:function(){return h},j1:function(){return d},Xs:function(){return M},IN:function(){return z},fB:function(){return P},hD:function(){return D},Ie:function(){return S},Pc:function(){return L},KC:function(){return G},MO:function(){return y},u0:function(){return V}});var i=r(17832);function a(e,t,r,n){let a=e[t];return(0,i.Ld)(e,()=>{let n=e[t];Object.is(a,n)||r(a=n)},n)}Symbol();let o=new WeakMap;new WeakMap;let s=(e,t)=>{let r=o.get(e);r&&(r[0].forEach(t=>{let{d:r}=t;e!==r&&s(r)}),++r[2],t&&r[3].add(t))},l=e=>{let t=o.get(e);t&&(--t[2],t[2]||(t[3].forEach(e=>e()),t[3].clear()),t[0].forEach(t=>{let{d:r}=t;e!==r&&l(r)}))},c=e=>"object"==typeof e&&null!==e,u=e=>{if(n||(n=unstable_buildProxyFunction()[2]),!c(e)||n.has(e))return e;let t=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return Reflect.ownKeys(e).forEach(r=>{t[r]=u(e[r])}),t},h={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"]},d={isMobile:()=>"undefined"!=typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid(){let e=navigator.userAgent.toLowerCase();return d.isMobile()&&e.includes("android")},isIos(){let e=navigator.userAgent.toLowerCase();return d.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient:()=>"undefined"!=typeof window,isPairingExpired:e=>!e||e-Date.now()<=h.TEN_SEC_MS,isAllowedRetry:e=>Date.now()-e>=h.ONE_SEC_MS,copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry:()=>Date.now()+h.FOUR_MINUTES_MS,getPlainAddress:e=>e.split(":")[2],wait:async e=>new Promise(t=>{setTimeout(t,e)}),debounce(e,t=500){let r;return(...n)=>{r&&clearTimeout(r),r=setTimeout(function(){e(...n)},t)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t){if(d.isHttpUrl(e))return this.formatUniversalUrl(e,t);let r=e;r.includes("://")||(r=`${r=e.replaceAll("/","").replaceAll(":","")}://`),r.endsWith("/")||(r=`${r}/`);let n=encodeURIComponent(t);return{redirect:`${r}wc?uri=${n}`,href:r}},formatUniversalUrl(e,t){if(!d.isHttpUrl(e))return this.formatNativeUrl(e,t);let r=e;r.endsWith("/")||(r=`${r}/`);let n=encodeURIComponent(t);return{redirect:`${r}wc?uri=${n}`,href:r}},openHref(e,t){window.open(e,t,"noreferrer noopener")},async preloadImage(e){let t=new Promise((t,r)=>{let n=new Image;n.onload=t,n.onerror=r,n.crossOrigin="anonymous",n.src=e});return Promise.race([t,d.wait(2e3)])},formatBalance(e,t){let r;if("0"===e)r="0.000";else if("string"==typeof e){let t=Number(e);t&&(r=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return r?`${r} ${t}`:"0.000"},isRestrictedRegion(){try{let{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return h.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl:()=>d.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com",getBlockchainApiUrl:()=>d.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com",getAnalyticsUrl:()=>d.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com",getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},p=(0,i.sj)({isConnected:!1}),f={state:p,subscribe:e=>(0,i.Ld)(p,()=>e(p)),subscribeKey:(e,t)=>a(p,e,t),setIsConnected(e){p.isConnected=e},setCaipAddress(e){p.caipAddress=e,p.address=e?d.getPlainAddress(e):void 0},setBalance(e,t){p.balance=e,p.balanceSymbol=t},setProfileName(e){p.profileName=e},setProfileImage(e){p.profileImage=e},setAddressExplorerUrl(e){p.addressExplorerUrl=e},resetAccount(){p.isConnected=!1,p.caipAddress=void 0,p.address=void 0,p.balance=void 0,p.balanceSymbol=void 0,p.profileName=void 0,p.profileImage=void 0,p.addressExplorerUrl=void 0}};class m{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...t}){let r=this.createUrl(t),n=await fetch(r,{method:"GET",headers:e});return n.json()}async getBlob({headers:e,...t}){let r=this.createUrl(t),n=await fetch(r,{method:"GET",headers:e});return n.blob()}async post({body:e,headers:t,...r}){let n=this.createUrl(r),i=await fetch(n,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0});return i.json()}async put({body:e,headers:t,...r}){let n=this.createUrl(r),i=await fetch(n,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0});return i.json()}async delete({body:e,headers:t,...r}){let n=this.createUrl(r),i=await fetch(n,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0});return i.json()}createUrl({path:e,params:t}){let r=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([e,t])=>{t&&r.searchParams.append(e,t)}),r}}let b="WALLETCONNECT_DEEPLINK_CHOICE",g="@w3m/recent",w="@w3m/connected_wallet_image_url",y={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(b,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let e=localStorage.getItem(b);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(b)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{let t=y.getRecentWallets(),r=t.find(t=>t.id===e.id);r||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(g,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{let e=localStorage.getItem(g);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]},setConnectedWalletImageUrl(e){try{localStorage.setItem(w,e)}catch{console.info("Unable to set Connected Wallet Image Url")}},getConnectedWalletImageUrl(){try{return localStorage.getItem(w)}catch{console.info("Unable to set Connected Wallet Image Url")}}},v=(0,i.sj)({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),x={state:v,subscribeNetworkImages:e=>(0,i.Ld)(v.networkImages,()=>e(v.networkImages)),subscribeKey:(e,t)=>a(v,e,t),setWalletImage(e,t){v.walletImages[e]=t},setNetworkImage(e,t){v.networkImages[e]=t},setConnectorImage(e,t){v.connectorImages[e]=t},setTokenImage(e,t){v.tokenImages[e]=t}},C=(0,i.sj)({connectors:[]}),E={state:C,subscribeKey:(e,t)=>a(C,e,t),setConnectors(e){C.connectors=e.map(e=>(0,i.iH)(e))},addConnector(e){C.connectors.push((0,i.iH)(e))},getConnectors:()=>C.connectors},k=(0,i.sj)({open:!1,selectedNetworkId:void 0}),S={state:k,subscribe:e=>(0,i.Ld)(k,()=>e(k)),set(e){Object.assign(k,{...k,...e})}},A=(0,i.sj)({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),P={state:A,subscribeKey:(e,t)=>a(A,e,t),_getClient(){if(!A._client)throw Error("NetworkController client not set");return A._client},setClient(e){A._client=(0,i.iH)(e)},setCaipNetwork(e){A.caipNetwork=e,S.set({selectedNetworkId:e?.id})},setDefaultCaipNetwork(e){A.caipNetwork=e,S.set({selectedNetworkId:e?.id}),A.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){A.requestedCaipNetworks=e},async getApprovedCaipNetworksData(){let e=await this._getClient().getApprovedCaipNetworksData();A.supportsAllNetworks=e.supportsAllNetworks,A.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),A.caipNetwork=e},resetNetwork(){A.isDefaultCaipNetwork||(A.caipNetwork=void 0),A.approvedCaipNetworkIds=void 0,A.supportsAllNetworks=!0}},_=(0,i.sj)({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),D={state:_,subscribeKey:(e,t)=>a(_,e,t),setProjectId(e){_.projectId=e},setIncludeWalletIds(e){_.includeWalletIds=e},setExcludeWalletIds(e){_.excludeWalletIds=e},setFeaturedWalletIds(e){_.featuredWalletIds=e},setTokens(e){_.tokens=e},setTermsConditionsUrl(e){_.termsConditionsUrl=e},setPrivacyPolicyUrl(e){_.privacyPolicyUrl=e},setCustomWallets(e){_.customWallets=e},setEnableAnalytics(e){_.enableAnalytics=e},setSdkVersion(e){_.sdkVersion=e},setMetadata(e){_.metadata=e}},$=d.getApiUrl(),O=new m({baseUrl:$}),T=(0,i.sj)({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),I={state:T,subscribeKey:(e,t)=>a(T,e,t),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=D.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _fetchWalletImage(e){let t=`${O.baseUrl}/getWalletImage/${e}`,r=await O.getBlob({path:t,headers:I._getApiHeaders()});x.setWalletImage(e,URL.createObjectURL(r))},async _fetchNetworkImage(e){let t=`${O.baseUrl}/public/getAssetImage/${e}`,r=await O.getBlob({path:t,headers:I._getApiHeaders()});x.setNetworkImage(e,URL.createObjectURL(r))},async _fetchConnectorImage(e){let t=`${O.baseUrl}/public/getAssetImage/${e}`,r=await O.getBlob({path:t,headers:I._getApiHeaders()});x.setConnectorImage(e,URL.createObjectURL(r))},async fetchNetworkImages(){let{requestedCaipNetworks:e}=P.state,t=e?.map(({imageId:e})=>e).filter(Boolean);t&&await Promise.allSettled(t.map(e=>I._fetchNetworkImage(e)))},async fetchConnectorImages(){let{connectors:e}=E.state,t=e.map(({imageId:e})=>e).filter(Boolean);await Promise.allSettled(t.map(e=>I._fetchConnectorImage(e)))},async fetchFeaturedWallets(){let{featuredWalletIds:e}=D.state;if(e?.length){let{data:t}=await O.get({path:"/getWallets",headers:I._getApiHeaders(),params:{page:"1",entries:e?.length?String(e.length):"4",include:e?.join(",")}});t.sort((t,r)=>e.indexOf(t.id)-e.indexOf(r.id));let r=t.map(e=>e.image_id).filter(Boolean);await Promise.allSettled(r.map(e=>I._fetchWalletImage(e))),T.featured=t}},async fetchRecommendedWallets(){let{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:r}=D.state,n=[...t??[],...r??[]].filter(Boolean),{data:i,count:a}=await O.get({path:"/getWallets",headers:I._getApiHeaders(),params:{page:"1",entries:"4",include:e?.join(","),exclude:n?.join(",")}}),o=y.getRecentWallets(),s=i.map(e=>e.image_id).filter(Boolean),l=o.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...s,...l].map(e=>I._fetchWalletImage(e))),T.recommended=i,T.count=a??0},async fetchWallets({page:e}){let{includeWalletIds:t,excludeWalletIds:r,featuredWalletIds:n}=D.state,i=[...T.recommended.map(({id:e})=>e),...r??[],...n??[]].filter(Boolean),{data:a,count:o}=await O.get({path:"/getWallets",headers:I._getApiHeaders(),params:{page:String(e),entries:"40",include:t?.join(","),exclude:i.join(",")}}),s=a.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...s.map(e=>I._fetchWalletImage(e)),d.wait(300)]),T.wallets=[...T.wallets,...a],T.count=o>T.count?o:T.count,T.page=e},async searchWallet({search:e}){let{includeWalletIds:t,excludeWalletIds:r}=D.state;T.search=[];let{data:n}=await O.get({path:"/getWallets",headers:I._getApiHeaders(),params:{page:"1",entries:"100",search:e,include:t?.join(","),exclude:r?.join(",")}}),i=n.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...i.map(e=>I._fetchWalletImage(e)),d.wait(300)]),T.search=n},prefetch(){T.prefetchPromise=Promise.race([Promise.allSettled([I.fetchFeaturedWallets(),I.fetchRecommendedWallets(),I.fetchNetworkImages(),I.fetchConnectorImages()]),d.wait(3e3)])}},R=d.getAnalyticsUrl(),N=new m({baseUrl:R}),U=["MODAL_CREATED"],B=(0,i.sj)({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),M={state:B,subscribe:e=>(0,i.Ld)(B,()=>e(B)),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:r}=D.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":r}},async _sendAnalyticsEvent(e){try{if(U.includes(e.data.event)||"undefined"==typeof window)return;await N.post({path:"/e",headers:M._getApiHeaders(),body:{eventId:d.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){B.timestamp=Date.now(),B.data=e,D.state.enableAnalytics&&M._sendAnalyticsEvent(B)}},j=(0,i.sj)({view:"Connect",history:["Connect"]}),L={state:j,subscribeKey:(e,t)=>a(j,e,t),push(e,t){e!==j.view&&(j.view=e,j.history.push(e),j.data=t)},reset(e){j.view=e,j.history=[e]},replace(e){j.history.length>1&&j.history.at(-1)!==e&&(j.view=e,j.history[j.history.length-1]=e)},goBack(){if(j.history.length>1){j.history.pop();let[e]=j.history.slice(-1);e&&(j.view=e)}}},F=(0,i.sj)({open:!1}),z={state:F,subscribeKey:(e,t)=>a(F,e,t),async open(e){await I.state.prefetchPromise,e?.view?L.reset(e.view):f.state.isConnected?L.reset("Account"):L.reset("Connect"),F.open=!0,S.set({open:!0}),M.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){F.open=!1,S.set({open:!1}),M.sendEvent({type:"track",event:"MODAL_CLOSE"})}},H=(0,i.sj)({wcError:!1,buffering:!1}),W={state:H,subscribeKey:(e,t)=>a(H,e,t),_getClient(){if(!H._client)throw Error("ConnectionController client not set");return H._client},setClient(e){H._client=(0,i.iH)(e)},connectWalletConnect(){H.wcPromise=this._getClient().connectWalletConnect(e=>{H.wcUri=e,H.wcPairingExpiry=d.getPairingExpiry()})},async connectExternal(e){await this._getClient().connectExternal?.(e)},checkInstalled(e){return this._getClient().checkInstalled?.(e)},resetWcConnection(){H.wcUri=void 0,H.wcPairingExpiry=void 0,H.wcPromise=void 0,H.wcLinking=void 0,H.recentWallet=void 0,y.deleteWalletConnectDeepLink()},setWcLinking(e){H.wcLinking=e},setWcError(e){H.wcError=e,H.buffering=!1},setRecentWallet(e){H.recentWallet=e},setBuffering(e){H.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},q=(0,i.sj)({message:"",variant:"success",open:!1}),G={state:q,subscribeKey:(e,t)=>a(q,e,t),showSuccess(e){q.message=e,q.variant="success",q.open=!0},showError(e){q.message=e,q.variant="error",q.open=!0},hide(){q.open=!1}},Z=(0,i.sj)({themeMode:"dark",themeVariables:{}}),V={state:Z,subscribe:e=>(0,i.Ld)(Z,()=>e(Z)),setThemeMode(e){Z.themeMode=e},setThemeVariables(e){Z.themeVariables={...Z.themeVariables,...e}}},K=d.getBlockchainApiUrl(),Q=new m({baseUrl:K}),Y={fetchIdentity:({caipChainId:e,address:t})=>Q.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:D.state.projectId}})},X={getWalletImage:e=>e?.image_url?e?.image_url:e?.image_id?x.state.walletImages[e.image_id]:void 0,getNetworkImage:e=>e?.imageUrl?e?.imageUrl:e?.imageId?x.state.networkImages[e.imageId]:void 0,getConnectorImage:e=>e?.imageUrl?e.imageUrl:e?.imageId?x.state.connectorImages[e.imageId]:void 0}},90078:function(e,t,r){"use strict";r.r(t),r.d(t,{W3mModal:function(){return u}});var n=r(36635),i=r(34751),a=r(77996),o=r(37380),s=a.iv`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`,l=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let c="scroll-lock",u=class extends a.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=n.IN.state.open,this.initializeTheming(),n.QT.prefetch(),this.unsubscribe.push(n.IN.subscribeKey("open",e=>e?this.onOpen():this.onClose())),n.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?a.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(e){e.target===e.currentTarget&&n.IN.close()}initializeTheming(){let{themeVariables:e,themeMode:t}=n.u0.state,r=i.UiHelperUtil.getColorTheme(t);(0,i.initializeTheming)(e,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,n.KC.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement("style");e.dataset.w3m=c,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${c}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)n.IN.close();else if("Tab"===t.key){let{tagName:r}=t.target;!r||r.includes("W3M-")||r.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}};u.styles=s,l([(0,o.SB)()],u.prototype,"open",void 0),u=l([(0,i.customElement)("w3m-modal")],u)},34751:function(e,t,r){"use strict";let n,i,a;r.r(t),r.d(t,{UiHelperUtil:function(){return e6},WuiAccountButton:function(){return ts},WuiAllWalletsImage:function(){return tp},WuiAvatar:function(){return tt},WuiButton:function(){return tb},WuiCard:function(){return b},WuiCardSelect:function(){return tP},WuiCardSelectLoader:function(){return tv},WuiChip:function(){return t$},WuiConnectButton:function(){return tI},WuiCtaButton:function(){return tU},WuiEmailInput:function(){return t1},WuiFlex:function(){return e7},WuiGrid:function(){return r3},WuiIcon:function(){return ew},WuiIconBox:function(){return ti},WuiIconLink:function(){return t5},WuiImage:function(){return ex},WuiInputElement:function(){return t8},WuiInputNumeric:function(){return re},WuiInputText:function(){return tX},WuiLink:function(){return rn},WuiListItem:function(){return ro},WuiListTransaction:function(){return rb},WuiListWallet:function(){return rC},WuiLoadingHexagon:function(){return eE},WuiLoadingSpinner:function(){return eA},WuiLoadingThumbnail:function(){return eD},WuiLogo:function(){return rS},WuiLogoSelect:function(){return r_},WuiNetworkButton:function(){return rO},WuiNetworkImage:function(){return tk},WuiOtp:function(){return rR},WuiQrCode:function(){return rL},WuiSearchBar:function(){return rz},WuiSeparator:function(){return r4},WuiShimmer:function(){return eT},WuiSnackbar:function(){return rq},WuiTabs:function(){return rV},WuiTag:function(){return ry},WuiText:function(){return eL},WuiTooltip:function(){return rY},WuiTransactionVisual:function(){return rp},WuiVisual:function(){return e3},WuiVisualThumbnail:function(){return r0},WuiWalletImage:function(){return tu},customElement:function(){return f},initializeTheming:function(){return s},setColorTheme:function(){return l},setThemeVariables:function(){return c}});var o=r(77996);function s(e,t){n=document.createElement("style"),i=document.createElement("style"),a=document.createElement("style"),n.textContent=u(e).core.cssText,i.textContent=u(e).dark.cssText,a.textContent=u(e).light.cssText,document.head.appendChild(n),document.head.appendChild(i),document.head.appendChild(a),l(t)}function l(e){i&&a&&("light"===e?(i.removeAttribute("media"),a.media="enabled"):(a.removeAttribute("media"),i.media="enabled"))}function c(e){n&&i&&a&&(n.textContent=u(e).core.cssText,i.textContent=u(e).dark.cssText,a.textContent=u(e).light.cssText)}function u(e){return{core:o.iv`
      :root {
        --w3m-color-mix-strength: ${(0,o.$m)(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${(0,o.$m)(e?.["--w3m-font-family"]||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${(0,o.$m)(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${(0,o.$m)(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${(0,o.$m)(e?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,light:o.iv`
      :root {
        --w3m-color-mix: ${(0,o.$m)(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${(0,o.$m)(e?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:o.iv`
      :root {
        --w3m-color-mix: ${(0,o.$m)(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${(0,o.$m)(e?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}let h=o.iv`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,d=o.iv`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,p=o.iv`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function f(e){return function(t){return"function"==typeof t?(customElements.get(e)||customElements.define(e,t),t):function(e,t){let{kind:r,elements:n}=t;return{kind:r,elements:n,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}var m=o.iv`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;let b=class extends o.oi{render(){return o.dy`<slot></slot>`}};b.styles=[h,m],b=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([f("wui-card")],b);var g=r(37380),w=o.iv`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`;let y=o.YP`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,v=o.YP`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,x=o.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,C=o.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,E=o.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,k=o.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,S=o.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,A=o.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,P=o.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,_=o.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,D=o.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,$=o.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,O=o.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,T=o.YP`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,I=o.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,R=o.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,N=o.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,U=o.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,B=o.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,M=o.YP` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,j=o.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,L=o.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,F=o.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,z=o.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,H=o.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,W=o.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,q=o.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,G=o.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Z=o.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,V=o.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,K=o.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,Q=o.YP`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,Y=o.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,X=o.YP`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,J=o.YP`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,ee=o.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,et=o.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,er=o.YP` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,en=o.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,ei=o.YP`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,ea=o.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,eo=o.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,es=o.YP`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,el=o.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,ec=o.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,eu=o.YP`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,eh=o.YP`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,ed=o.YP`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,ep=o.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,ef=o.YP`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,em=o.YP`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var eb=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eg={allWallets:y,appStore:v,chromeStore:T,apple:x,arrowBottom:C,arrowLeft:E,arrowRight:k,arrowTop:S,browser:A,checkmark:P,chevronBottom:_,chevronLeft:D,chevronRight:$,chevronTop:O,clock:I,close:R,compass:U,coinPlaceholder:N,copy:B,cursor:M,desktop:j,disconnect:L,discord:F,etherscan:z,extension:H,externalLink:W,facebook:q,filters:G,github:Z,google:V,helpCircle:K,infoCircle:Q,mail:Y,mobile:X,networkPlaceholder:J,nftPlaceholder:ee,off:et,playStore:er,qrCode:en,refresh:ei,search:ea,swapHorizontal:eo,swapVertical:es,telegram:el,twitch:ec,twitter:eu,twitterIcon:eh,wallet:ep,walletConnect:ef,walletPlaceholder:ed,warningCircle:em},ew=class extends o.oi{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
    `,o.dy`${eg[this.name]}`}};ew.styles=[h,p,w],eb([(0,g.Cb)()],ew.prototype,"size",void 0),eb([(0,g.Cb)()],ew.prototype,"name",void 0),eb([(0,g.Cb)()],ew.prototype,"color",void 0),ew=eb([f("wui-icon")],ew);var ey=o.iv`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,ev=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let ex=class extends o.oi{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return o.dy`<img src=${this.src} alt=${this.alt} />`}};ex.styles=[h,p,ey],ev([(0,g.Cb)()],ex.prototype,"src",void 0),ev([(0,g.Cb)()],ex.prototype,"alt",void 0),ex=ev([f("wui-image")],ex);var eC=o.iv`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let eE=class extends o.oi{render(){return o.dy`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};eE.styles=[h,eC],eE=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([f("wui-loading-hexagon")],eE);var ek=o.iv`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,eS=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eA=class extends o.oi{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,o.dy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};eA.styles=[h,ek],eS([(0,g.Cb)()],eA.prototype,"color",void 0),eS([(0,g.Cb)()],eA.prototype,"size",void 0),eA=eS([f("wui-loading-spinner")],eA);var eP=o.iv`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,e_=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eD=class extends o.oi{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return o.dy`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};eD.styles=[h,eP],e_([(0,g.Cb)({type:Number})],eD.prototype,"radius",void 0),eD=e_([f("wui-loading-thumbnail")],eD);var e$=o.iv`
  :host {
    display: block;
    outline: 1px solid var(--wui-gray-glass-005);
    background: linear-gradient(
      90deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 2.5s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,eO=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eT=class extends o.oi{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,o.dy`<slot></slot>`}};eT.styles=[e$],eO([(0,g.Cb)()],eT.prototype,"width",void 0),eO([(0,g.Cb)()],eT.prototype,"height",void 0),eO([(0,g.Cb)()],eT.prototype,"borderRadius",void 0),eT=eO([f("wui-shimmer")],eT);var eI=r(69699);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let eR={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},eN=e=>(...t)=>({_$litDirective$:e,values:t});class eU{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,r){this._$Ct=e,this._$AM=t,this._$Ci=r}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let eB=eN(class extends eU{constructor(e){if(super(e),e.type!==eR.ATTRIBUTE||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.it){for(let r in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[r]&&!this.st?.has(r)&&this.it.add(r);return this.render(t)}let r=e.element.classList;for(let e of this.it)e in t||(r.remove(e),this.it.delete(e));for(let e in t){let n=!!t[e];n===this.it.has(e)||this.st?.has(e)||(n?(r.add(e),this.it.add(e)):(r.remove(e),this.it.delete(e)))}return eI.Jb}});var eM=o.iv`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`,ej=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eL=class extends o.oi{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){let e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,o.dy`<slot class=${eB(e)}></slot>`}};eL.styles=[h,eM],ej([(0,g.Cb)()],eL.prototype,"variant",void 0),ej([(0,g.Cb)()],eL.prototype,"color",void 0),ej([(0,g.Cb)()],eL.prototype,"align",void 0),eL=ej([f("wui-text")],eL);let eF=o.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,ez=o.YP`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,eH=o.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,eW=o.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,eq=o.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,eG=o.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,eZ=o.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,eV=o.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,eK=o.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,eQ=o.YP`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,eY=o.YP`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,eX=o.YP`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,eJ=o.YP`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `;var e0=o.iv`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`,e1=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let e2={browser:eF,dao:ez,defi:eH,defiAlt:eW,eth:eq,layers:eG,lock:eZ,login:eV,network:eK,nft:eQ,noun:eY,profile:eX,system:eJ},e3=class extends o.oi{constructor(){super(...arguments),this.name="browser"}render(){return o.dy`${e2[this.name]}`}};e3.styles=[h,e0],e1([(0,g.Cb)()],e3.prototype,"name",void 0),e3=e1([f("wui-visual")],e3);var e5=r(35592);let e6={getSpacingStyles:(e,t)=>Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"==typeof e?`var(--wui-spacing-${e})`:void 0,getFormattedDate:e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),getHostName(e){let t=new URL(e);return t.hostname},getTruncateString:({string:e,charsStart:t,charsEnd:r,truncate:n})=>e.length<=t+r?e:"end"===n?`${e.substring(0,t)}...`:"start"===n?`...${e.substring(e.length-r)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`,generateAvatarColors(e){let t=e.toLowerCase().replace(/^0x/iu,""),r=t.substring(0,6),n=this.hexToRgb(r),i=[];for(let e=0;e<5;e+=1){let t=this.tintColor(n,.15*e);i.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`
    --local-color-1: ${i[0]};
    --local-color-2: ${i[1]};
    --local-color-3: ${i[2]};
    --local-color-4: ${i[3]};
    --local-color-5: ${i[4]};
   `},hexToRgb(e){let t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){let[r,n,i]=e;return[Math.round(r+(255-r)*t),Math.round(n+(255-n)*t),Math.round(i+(255-i)*t)]},isNumber:e=>/^[0-9]+$/u.test(e),getColorTheme:e=>e||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")};var e4=o.iv`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,e8=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let e7=class extends o.oi{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&e6.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&e6.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&e6.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&e6.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&e6.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&e6.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&e6.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&e6.getSpacingStyles(this.margin,3)};
    `,o.dy`<slot></slot>`}};e7.styles=[h,e4],e8([(0,g.Cb)()],e7.prototype,"flexDirection",void 0),e8([(0,g.Cb)()],e7.prototype,"flexWrap",void 0),e8([(0,g.Cb)()],e7.prototype,"flexBasis",void 0),e8([(0,g.Cb)()],e7.prototype,"flexGrow",void 0),e8([(0,g.Cb)()],e7.prototype,"flexShrink",void 0),e8([(0,g.Cb)()],e7.prototype,"alignItems",void 0),e8([(0,g.Cb)()],e7.prototype,"justifyContent",void 0),e8([(0,g.Cb)()],e7.prototype,"columnGap",void 0),e8([(0,g.Cb)()],e7.prototype,"rowGap",void 0),e8([(0,g.Cb)()],e7.prototype,"gap",void 0),e8([(0,g.Cb)()],e7.prototype,"padding",void 0),e8([(0,g.Cb)()],e7.prototype,"margin",void 0),e7=e8([f("wui-flex")],e7);var e9=o.iv`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`,te=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tt=class extends o.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return o.dy`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",o.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=e6.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};tt.styles=[h,e9],te([(0,g.Cb)()],tt.prototype,"imageSrc",void 0),te([(0,g.Cb)()],tt.prototype,"alt",void 0),te([(0,g.Cb)()],tt.prototype,"address",void 0),tt=te([f("wui-avatar")],tt);var tr=o.iv`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,tn=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let ti=class extends o.oi{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let e="xxs";switch(this.size){case"lg":e="lg";break;case"md":e="md";break;case"mdl":e="mdl";break;case"sm":e="xs";break;default:e="xxs"}let t="lg"===this.size,r="opaque"===this.background,n="accent-100"===this.backgroundColor&&r||"success-100"===this.backgroundColor&&r||"error-100"===this.backgroundColor&&r||"inverse-100"===this.backgroundColor&&r;return this.style.cssText=`
       --local-bg-value: ${n?`var(--wui-icon-box-bg-${this.backgroundColor})`:`var(--wui-color-${this.backgroundColor})`};
       --local-bg-mix: ${n?"100%":t?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${t?"xxs":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,o.dy` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};ti.styles=[h,d,tr],tn([(0,g.Cb)()],ti.prototype,"size",void 0),tn([(0,g.Cb)()],ti.prototype,"backgroundColor",void 0),tn([(0,g.Cb)()],ti.prototype,"iconColor",void 0),tn([(0,g.Cb)()],ti.prototype,"background",void 0),tn([(0,g.Cb)({type:Boolean})],ti.prototype,"border",void 0),tn([(0,g.Cb)()],ti.prototype,"borderColor",void 0),tn([(0,g.Cb)()],ti.prototype,"icon",void 0),ti=tn([f("wui-icon-box")],ti);var ta=o.iv`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    outline: 2px solid var(--wui-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`,to=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let ts=class extends o.oi{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return o.dy`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${(0,e5.o)(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${e6.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){let e=this.networkSrc?o.dy`<wui-image src=${this.networkSrc}></wui-image>`:o.dy`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return o.dy`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};ts.styles=[h,d,ta],to([(0,g.Cb)()],ts.prototype,"networkSrc",void 0),to([(0,g.Cb)()],ts.prototype,"avatarSrc",void 0),to([(0,g.Cb)()],ts.prototype,"balance",void 0),to([(0,g.Cb)({type:Boolean})],ts.prototype,"disabled",void 0),to([(0,g.Cb)({type:Boolean})],ts.prototype,"isProfileName",void 0),to([(0,g.Cb)()],ts.prototype,"address",void 0),ts=to([f("wui-account-button")],ts);var tl=o.iv`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`,tc=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tu=class extends o.oi{constructor(){super(...arguments),this.size="md",this.name=""}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),o.dy` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?o.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?o.dy`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:o.dy`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};tu.styles=[h,tl],tc([(0,g.Cb)()],tu.prototype,"size",void 0),tc([(0,g.Cb)()],tu.prototype,"name",void 0),tc([(0,g.Cb)()],tu.prototype,"imageSrc",void 0),tc([(0,g.Cb)()],tu.prototype,"walletIcon",void 0),tu=tc([f("wui-wallet-image")],tu);var th=o.iv`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`,td=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tp=class extends o.oi{constructor(){super(...arguments),this.walletImages=[]}render(){let e=this.walletImages.length<4;return o.dy`${this.walletImages.slice(0,4).map(({src:e,walletName:t})=>o.dy`
          <wui-wallet-image
            size="inherit"
            imageSrc=${e}
            name=${(0,e5.o)(t)}
          ></wui-wallet-image>
        `)}
    ${e?[...Array(4-this.walletImages.length)].map(()=>o.dy` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}`}};tp.styles=[h,th],td([(0,g.Cb)({type:Array})],tp.prototype,"walletImages",void 0),tp=td([f("wui-all-wallets-image")],tp);var tf=o.iv`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6px 12px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,tm=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tb=class extends o.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.fullWidth=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;let e="md"===this.size?"paragraph-600":"small-600";return o.dy`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?o.dy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:o.dy``}};tb.styles=[h,d,tf],tm([(0,g.Cb)()],tb.prototype,"size",void 0),tm([(0,g.Cb)({type:Boolean})],tb.prototype,"disabled",void 0),tm([(0,g.Cb)({type:Boolean})],tb.prototype,"fullWidth",void 0),tm([(0,g.Cb)({type:Boolean})],tb.prototype,"loading",void 0),tm([(0,g.Cb)()],tb.prototype,"variant",void 0),tb=tm([f("wui-button")],tb);let tg=o.YP`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var tw=o.iv`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`,ty=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tv=class extends o.oi{constructor(){super(...arguments),this.type="wallet"}render(){return o.dy`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?o.dy` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${tg}`:o.dy`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};tv.styles=[h,d,tw],ty([(0,g.Cb)()],tv.prototype,"type",void 0),tv=ty([f("wui-card-select-loader")],tv);let tx=o.YP`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var tC=o.iv`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`,tE=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tk=class extends o.oi{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){let e="lg"===this.size;return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${e?"86px":"48px"};
      --local-height: ${e?"96px":"54px"};
      --local-icon-size: ${e?"42px":"24px"};
    `,o.dy`${this.templateVisual()} ${e?tx:tg}`}templateVisual(){return this.imageSrc?o.dy`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:o.dy`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};tk.styles=[h,tC],tE([(0,g.Cb)()],tk.prototype,"size",void 0),tE([(0,g.Cb)()],tk.prototype,"name",void 0),tE([(0,g.Cb)()],tk.prototype,"imageSrc",void 0),tE([(0,g.Cb)({type:Boolean})],tk.prototype,"selected",void 0),tk=tE([f("wui-network-image")],tk);var tS=o.iv`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`,tA=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tP=class extends o.oi{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return o.dy`
      <button data-selected=${(0,e5.o)(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?o.dy`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${(0,e5.o)(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:o.dy`
      <wui-wallet-image size="md" imageSrc=${(0,e5.o)(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};tP.styles=[h,d,tS],tA([(0,g.Cb)()],tP.prototype,"name",void 0),tA([(0,g.Cb)()],tP.prototype,"type",void 0),tA([(0,g.Cb)()],tP.prototype,"imageSrc",void 0),tA([(0,g.Cb)({type:Boolean})],tP.prototype,"disabled",void 0),tA([(0,g.Cb)({type:Boolean})],tP.prototype,"selected",void 0),tP=tA([f("wui-card-select")],tP);var t_=o.iv`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`,tD=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let t$=class extends o.oi{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){let e="transparent"===this.variant?"small-600":"paragraph-600";return o.dy`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${e6.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?o.dy`<wui-image src=${this.imageSrc}></wui-image>`:null}};t$.styles=[h,d,t_],tD([(0,g.Cb)()],t$.prototype,"variant",void 0),tD([(0,g.Cb)()],t$.prototype,"imageSrc",void 0),tD([(0,g.Cb)({type:Boolean})],t$.prototype,"disabled",void 0),tD([(0,g.Cb)()],t$.prototype,"icon",void 0),tD([(0,g.Cb)()],t$.prototype,"href",void 0),t$=tD([f("wui-chip")],t$);var tO=o.iv`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`,tT=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tI=class extends o.oi{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let e="md"===this.size?"paragraph-600":"small-600";return o.dy`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?o.dy`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};tI.styles=[h,d,tO],tT([(0,g.Cb)()],tI.prototype,"size",void 0),tT([(0,g.Cb)({type:Boolean})],tI.prototype,"loading",void 0),tI=tT([f("wui-connect-button")],tI);var tR=o.iv`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,tN=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tU=class extends o.oi{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return o.dy`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" colo="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};tU.styles=[h,d,tR],tN([(0,g.Cb)({type:Boolean})],tU.prototype,"disabled",void 0),tN([(0,g.Cb)()],tU.prototype,"label",void 0),tN([(0,g.Cb)()],tU.prototype,"buttonLabel",void 0),tU=tN([f("wui-cta-button")],tU);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{D:tB}=eI.Al,tM=e=>void 0===e.strings,tj=(e,t)=>{let r=e._$AN;if(void 0===r)return!1;for(let e of r)e._$AO?.(t,!1),tj(e,t);return!0},tL=e=>{let t,r;do{if(void 0===(t=e._$AM))break;(r=t._$AN).delete(e),e=t}while(0===r?.size)},tF=e=>{for(let t;t=e._$AM;e=t){let r=t._$AN;if(void 0===r)t._$AN=r=new Set;else if(r.has(e))break;r.add(e),tW(t)}};function tz(e){void 0!==this._$AN?(tL(this),this._$AM=e,tF(this)):this._$AM=e}function tH(e,t=!1,r=0){let n=this._$AH,i=this._$AN;if(void 0!==i&&0!==i.size){if(t){if(Array.isArray(n))for(let e=r;e<n.length;e++)tj(n[e],!1),tL(n[e]);else null!=n&&(tj(n,!1),tL(n))}else tj(this,e)}}let tW=e=>{e.type==eR.CHILD&&(e._$AP??=tH,e._$AQ??=tz)};class tq extends eU{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,r){super._$AT(e,t,r),tF(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(tj(this,e),tL(this))}setValue(e){if(tM(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tG=()=>new tZ;class tZ{}let tV=new WeakMap,tK=eN(class extends tq{render(e){return eI.Ld}update(e,[t]){let r=t!==this.G;return r&&void 0!==this.G&&this.ot(void 0),(r||this.rt!==this.lt)&&(this.G=t,this.ct=e.options?.host,this.ot(this.lt=e.element)),eI.Ld}ot(e){if("function"==typeof this.G){let t=this.ct??globalThis,r=tV.get(t);void 0===r&&(r=new WeakMap,tV.set(t,r)),void 0!==r.get(this.G)&&this.G.call(this.ct,void 0),r.set(this.G,e),void 0!==e&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){return"function"==typeof this.G?tV.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var tQ=o.iv`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,tY=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let tX=class extends o.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=tG()}render(){let e=`wui-size-${this.size}`;return o.dy` ${this.templateIcon()}
      <input
        ${tK(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${(0,e5.o)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?o.dy`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};tX.styles=[h,d,tQ],tY([(0,g.Cb)()],tX.prototype,"size",void 0),tY([(0,g.Cb)()],tX.prototype,"icon",void 0),tY([(0,g.Cb)({type:Boolean})],tX.prototype,"disabled",void 0),tY([(0,g.Cb)()],tX.prototype,"placeholder",void 0),tY([(0,g.Cb)()],tX.prototype,"type",void 0),tY([(0,g.Cb)()],tX.prototype,"keyHint",void 0),tX=tY([f("wui-input-text")],tX);var tJ=o.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`,t0=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let t1=class extends o.oi{render(){return o.dy`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?o.dy`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};t1.styles=[h,tJ],t0([(0,g.Cb)()],t1.prototype,"errorMessage",void 0),t1=t0([f("wui-email-input")],t1);var t2=o.iv`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,t3=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let t5=class extends o.oi{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return o.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};t5.styles=[h,d,p,t2],t3([(0,g.Cb)()],t5.prototype,"size",void 0),t3([(0,g.Cb)({type:Boolean})],t5.prototype,"disabled",void 0),t3([(0,g.Cb)()],t5.prototype,"icon",void 0),t3([(0,g.Cb)()],t5.prototype,"iconColor",void 0),t5=t3([f("wui-icon-link")],t5);var t6=o.iv`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`,t4=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let t8=class extends o.oi{constructor(){super(...arguments),this.icon="copy"}render(){return o.dy`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};t8.styles=[h,d,t6],t4([(0,g.Cb)()],t8.prototype,"icon",void 0),t8=t4([f("wui-input-element")],t8);var t7=o.iv`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`,t9=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let re=class extends o.oi{constructor(){super(...arguments),this.disabled=!1}render(){return o.dy`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};re.styles=[h,d,t7],t9([(0,g.Cb)({type:Boolean})],re.prototype,"disabled",void 0),re=t9([f("wui-input-numeric")],re);var rt=o.iv`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`,rr=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rn=class extends o.oi{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return o.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};rn.styles=[h,d,rt],rr([(0,g.Cb)({type:Boolean})],rn.prototype,"disabled",void 0),rr([(0,g.Cb)()],rn.prototype,"color",void 0),rn=rr([f("wui-link")],rn);var ri=o.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    outline: 2px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    outline: 2px solid var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    outline: 2px solid var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,ra=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let ro=class extends o.oi{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return o.dy`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${(0,e5.o)(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return o.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return o.dy`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){let e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md";return o.dy`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?o.dy`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:o.dy``}chevronTemplate(){return this.chevron?o.dy`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};ro.styles=[h,d,ri],ra([(0,g.Cb)()],ro.prototype,"icon",void 0),ra([(0,g.Cb)()],ro.prototype,"variant",void 0),ra([(0,g.Cb)()],ro.prototype,"iconVariant",void 0),ra([(0,g.Cb)({type:Boolean})],ro.prototype,"disabled",void 0),ra([(0,g.Cb)()],ro.prototype,"imageSrc",void 0),ra([(0,g.Cb)()],ro.prototype,"alt",void 0),ra([(0,g.Cb)({type:Boolean})],ro.prototype,"chevron",void 0),ra([(0,g.Cb)({type:Boolean})],ro.prototype,"loading",void 0),ro=ra([f("wui-list-item")],ro);var rs=o.iv`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    border: 1px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  :host([data-type='minted']),
  :host([data-type='nftSent']),
  :host([data-type='bought']) {
    border-radius: var(--wui-border-radius-xs);
  }

  wui-image {
    display: block;
    border-radius: inherit;
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`,rl=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rc=["withdrawed","buy","cryptoSent","nftSent"],ru=["deposited","received","bought","minted"],rh=["minted","bought","nftSent"],rd=["deposited","withdrawed","cryptoSent","buy","received"],rp=class extends o.oi{constructor(){super(...arguments),this.type="buy"}render(){let e="accent-100",t="arrowTop";return rc.includes(this.type)?(e="accent-100",t="arrowTop"):ru.includes(this.type)&&rh.includes(this.type)?(e="success-100",t="arrowBottom"):ru.includes(this.type)&&rd.includes(this.type)?(e="success-100",t="arrowBottom"):(e="accent-100",t="swapVertical"),this.dataset.type=this.type,o.dy`
      ${this.templateVisual()}
      <wui-icon-box
        size="xs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        .icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `}templateVisual(){return this.imageSrc?o.dy`<wui-image src=${this.imageSrc} alt=${this.type}></wui-image>`:rh.includes(this.type)?o.dy`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:o.dy`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}};rp.styles=[h,rs],rl([(0,g.Cb)()],rp.prototype,"type",void 0),rl([(0,g.Cb)()],rp.prototype,"imageSrc",void 0),rp=rl([f("wui-transaction-visual")],rp);var rf=o.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  button > wui-flex > wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  button > wui-flex > wui-text:nth-child(2) {
    text-transform: uppercase;
  }

  button:disabled {
    color: var(--wui-color-fg-300);
  }
`,rm=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rb=class extends o.oi{constructor(){super(...arguments),this.type="bought",this.disabled=!1,this.imageSrc="",this.date=new Date,this.transactionDetail=""}render(){let e="nftSent"===this.type||"cryptoSent"===this.type,t=e?"Sent":this.type,r=e6.getFormattedDate(this.date);return o.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-transaction-visual
          type=${this.type}
          imageSrc=${this.imageSrc}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">${t}</wui-text>
          <wui-text variant="small-500" color="fg-200">${this.transactionDetail}</wui-text>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300">${r}</wui-text>
      </button>
    `}};rb.styles=[h,d,rf],rm([(0,g.Cb)()],rb.prototype,"type",void 0),rm([(0,g.Cb)({type:Boolean})],rb.prototype,"disabled",void 0),rm([(0,g.Cb)()],rb.prototype,"imageSrc",void 0),rm([(0,g.Cb)({attribute:!1})],rb.prototype,"date",void 0),rm([(0,g.Cb)()],rb.prototype,"transactionDetail",void 0),rb=rm([f("wui-list-transaction")],rb);var rg=o.iv`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`,rw=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let ry=class extends o.oi{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,o.dy`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};ry.styles=[h,rg],rw([(0,g.Cb)()],ry.prototype,"variant",void 0),ry=rw([f("wui-tag")],ry);var rv=o.iv`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`,rx=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rC=class extends o.oi{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return o.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?o.dy` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?o.dy` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?o.dy`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:o.dy`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?o.dy`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?o.dy`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};rC.styles=[h,d,rv],rx([(0,g.Cb)({type:Array})],rC.prototype,"walletImages",void 0),rx([(0,g.Cb)()],rC.prototype,"imageSrc",void 0),rx([(0,g.Cb)()],rC.prototype,"name",void 0),rx([(0,g.Cb)()],rC.prototype,"tagLabel",void 0),rx([(0,g.Cb)()],rC.prototype,"tagVariant",void 0),rx([(0,g.Cb)()],rC.prototype,"icon",void 0),rx([(0,g.Cb)()],rC.prototype,"walletIcon",void 0),rx([(0,g.Cb)({type:Boolean})],rC.prototype,"disabled",void 0),rx([(0,g.Cb)({type:Boolean})],rC.prototype,"showAllWallets",void 0),rC=rx([f("wui-list-wallet")],rC);var rE=o.iv`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`,rk=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rS=class extends o.oi{constructor(){super(...arguments),this.logo="google"}render(){return o.dy`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};rS.styles=[h,rE],rk([(0,g.Cb)()],rS.prototype,"logo",void 0),rS=rk([f("wui-logo")],rS);var rA=o.iv`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,rP=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let r_=class extends o.oi{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return o.dy`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};r_.styles=[h,d,rA],rP([(0,g.Cb)()],r_.prototype,"logo",void 0),rP([(0,g.Cb)({type:Boolean})],r_.prototype,"disabled",void 0),r_=rP([f("wui-logo-select")],r_);var rD=o.iv`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }
`,r$=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rO=class extends o.oi{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return o.dy`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?o.dy`<wui-image src=${this.imageSrc}></wui-image>`:o.dy`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};rO.styles=[h,d,rD],r$([(0,g.Cb)()],rO.prototype,"imageSrc",void 0),r$([(0,g.Cb)({type:Boolean})],rO.prototype,"disabled",void 0),rO=r$([f("wui-network-button")],rO);var rT=o.iv`
  :host {
    position: relative;
    display: block;
  }
`,rI=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rR=class extends o.oi{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(e,t)=>{let r=e.target,n=this.getInputElement(r);if(!n)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();let i=n.selectionStart;switch(e.key){case"ArrowLeft":i&&n.setSelectionRange(i+1,i+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===n.value?this.focusInputField("prev",t):n.value=""}},this.focusInputField=(e,t)=>{if("next"===e){let e=t+1,r=this.numerics[e<this.length?e:t],n=r?this.getInputElement(r):void 0;n&&n.focus()}if("prev"===e){let e=t-1,r=this.numerics[e>-1?e:t],n=r?this.getInputElement(r):void 0;n&&n.focus()}}}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e))}render(){return o.dy`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map((e,t)=>o.dy`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @keydown=${e=>this.handleKeyDown(e,t)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(e,t){let r=e.target,n=this.getInputElement(r);if(n){let r=n.value;if("insertFromPaste"===e.inputType)this.handlePaste(n,r,t);else{let i=e6.isNumber(r);i&&e.data?(n.value=e.data,this.focusInputField("next",t)):n.value=""}}}handlePaste(e,t,r){let n=t[0],i=n&&e6.isNumber(n);if(i){e.value=n;let i=t.substring(1);if(r+1<this.length&&i.length){let e=this.numerics[r+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,i,r+1)}else this.focusInputField("next",r)}else e.value=""}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}};rR.styles=[h,rT],rI([(0,g.Cb)({type:Number})],rR.prototype,"length",void 0),rR=rI([f("wui-otp")],rR);var rN=r(92592);function rU(e,t,r){return e!==t&&(e-t<0?t-e:e-t)<=r+.1}let rB={generate(e,t,r){let n="#141414",i=[],a=function(e,t){let r=Array.prototype.slice.call(rN.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),n=Math.sqrt(r.length);return r.reduce((e,t,r)=>(r%n==0?e.push([t]):e[e.length-1].push(t))&&e,[])}(e,0),s=t/a.length,l=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];l.forEach(({x:e,y:t})=>{let r=(a.length-7)*s*e,c=(a.length-7)*s*t;for(let e=0;e<l.length;e+=1){let t=s*(7-2*e);i.push(o.YP`
            <rect
              fill=${2===e?n:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*.45:.45*t}
              ry= ${0===e?(t-5)*.45:.45*t}
              stroke=${n}
              stroke-width=${0===e?5:0}
              height=${0===e?t-5:t}
              x= ${0===e?c+s*e+2.5:c+s*e}
              y= ${0===e?r+s*e+2.5:r+s*e}
            />
          `)}});let c=Math.floor((r+25)/s),u=a.length/2-c/2,h=a.length/2+c/2-1,d=[];a.forEach((e,t)=>{e.forEach((e,r)=>{!a[t][r]||t<7&&r<7||t>a.length-8&&r<7||t<7&&r>a.length-8||t>u&&t<h&&r>u&&r<h||d.push([t*s+s/2,r*s+s/2])})});let p={};return d.forEach(([e,t])=>{p[e]?p[e]?.push(t):p[e]=[t]}),Object.entries(p).map(([e,t])=>{let r=t.filter(e=>t.every(t=>!rU(e,t,s)));return[Number(e),r]}).forEach(([e,t])=>{t.forEach(t=>{i.push(o.YP`<circle cx=${e} cy=${t} fill=${n} r=${s/2.5} />`)})}),Object.entries(p).filter(([e,t])=>t.length>1).map(([e,t])=>{let r=t.filter(e=>t.some(t=>rU(e,t,s)));return[Number(e),r]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let r=[];for(let e of t){let t=r.find(t=>t.some(t=>rU(e,t,s)));t?t.push(e):r.push([e])}return[e,r.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,r])=>{i.push(o.YP`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${r}
                stroke=${n}
                stroke-width=${s/1.25}
                stroke-linecap="round"
              />
            `)})}),i}};var rM=o.iv`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    outline: 1px solid var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,rj=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rL=class extends o.oi{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,o.dy`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let e="light"===this.theme?this.size:this.size-32;return o.YP`
      <svg height=${e} width=${e}>
        ${rB.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?o.dy`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:o.dy`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};rL.styles=[h,rM],rj([(0,g.Cb)()],rL.prototype,"uri",void 0),rj([(0,g.Cb)({type:Number})],rL.prototype,"size",void 0),rj([(0,g.Cb)()],rL.prototype,"theme",void 0),rj([(0,g.Cb)()],rL.prototype,"imageSrc",void 0),rj([(0,g.Cb)()],rL.prototype,"alt",void 0),rL=rj([f("wui-qr-code")],rL);var rF=o.iv`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let rz=class extends o.oi{constructor(){super(...arguments),this.inputComponentRef=tG()}render(){return o.dy`
      <wui-input-text
        ${tK(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};rz.styles=[h,rF],rz=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([f("wui-search-bar")],rz);var rH=o.iv`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`,rW=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rq=class extends o.oi{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return o.dy`
      <wui-icon-box
        size="sm"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};rq.styles=[h,rH],rW([(0,g.Cb)()],rq.prototype,"backgroundColor",void 0),rW([(0,g.Cb)()],rq.prototype,"iconColor",void 0),rW([(0,g.Cb)()],rq.prototype,"icon",void 0),rW([(0,g.Cb)()],rq.prototype,"message",void 0),rq=rW([f("wui-snackbar")],rq);var rG=o.iv`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }
`,rZ=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rV=class extends o.oi{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{let r=t===this.activeTab;return o.dy`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
        >
          <wui-icon size="sm" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){let r=this.buttons[this.activeTab],n=this.buttons[e],i=r?.querySelector("wui-text"),a=n?.querySelector("wui-text"),o=n?.getBoundingClientRect(),s=a?.getBoundingClientRect();r&&i&&!t&&e!==this.activeTab&&(i.animate([{opacity:0}],{duration:50,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),n&&o&&s&&a&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(o.width+s.width)+6}px`,n.animate([{width:`${o.width+s.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),a.animate([{opacity:1}],{duration:t?0:125,delay:t?0:200,fill:"forwards",easing:"ease"}))}};rV.styles=[h,d,rG],rZ([(0,g.Cb)({type:Array})],rV.prototype,"tabs",void 0),rZ([(0,g.Cb)()],rV.prototype,"onTabChange",void 0),rZ([(0,g.Cb)({type:Array})],rV.prototype,"buttons",void 0),rZ([(0,g.Cb)({type:Boolean})],rV.prototype,"disabled",void 0),rZ([(0,g.SB)()],rV.prototype,"activeTab",void 0),rZ([(0,g.SB)()],rV.prototype,"localTabWidth",void 0),rZ([(0,g.SB)()],rV.prototype,"isDense",void 0),rV=rZ([f("wui-tabs")],rV);var rK=o.iv`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,rQ=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let rY=class extends o.oi{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return o.dy`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};rY.styles=[h,d,rK],rQ([(0,g.Cb)()],rY.prototype,"placement",void 0),rQ([(0,g.Cb)()],rY.prototype,"message",void 0),rY=rQ([f("wui-tooltip")],rY);var rX=o.iv`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`,rJ=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let r0=class extends o.oi{render(){return this.style.cssText=`--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`,o.dy`${this.templateVisual()}`}templateVisual(){return this.imageSrc?o.dy`<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>`:o.dy`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};r0.styles=[h,rX],rJ([(0,g.Cb)()],r0.prototype,"imageSrc",void 0),rJ([(0,g.Cb)()],r0.prototype,"alt",void 0),rJ([(0,g.Cb)({type:Boolean})],r0.prototype,"borderRadiusFull",void 0),r0=rJ([f("wui-visual-thumbnail")],r0);var r1=o.iv`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,r2=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let r3=class extends o.oi{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&e6.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&e6.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&e6.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&e6.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&e6.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&e6.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&e6.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&e6.getSpacingStyles(this.margin,3)};
    `,o.dy`<slot></slot>`}};r3.styles=[h,r1],r2([(0,g.Cb)()],r3.prototype,"gridTemplateRows",void 0),r2([(0,g.Cb)()],r3.prototype,"gridTemplateColumns",void 0),r2([(0,g.Cb)()],r3.prototype,"justifyItems",void 0),r2([(0,g.Cb)()],r3.prototype,"alignItems",void 0),r2([(0,g.Cb)()],r3.prototype,"justifyContent",void 0),r2([(0,g.Cb)()],r3.prototype,"alignContent",void 0),r2([(0,g.Cb)()],r3.prototype,"columnGap",void 0),r2([(0,g.Cb)()],r3.prototype,"rowGap",void 0),r2([(0,g.Cb)()],r3.prototype,"gap",void 0),r2([(0,g.Cb)()],r3.prototype,"padding",void 0),r2([(0,g.Cb)()],r3.prototype,"margin",void 0),r3=r2([f("wui-grid")],r3);var r5=o.iv`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`,r6=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let r4=class extends o.oi{constructor(){super(...arguments),this.text=""}render(){return o.dy`${this.template()}`}template(){return this.text?o.dy`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};r4.styles=[h,r5],r6([(0,g.Cb)()],r4.prototype,"text",void 0),r4=r6([f("wui-separator")],r4)},1966:function(e,t,r){"use strict";let n,i;function a(){if(!n)throw Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');return{open:async function(e){await n?.open(e)},close:async function(){await n?.close()}}}r.d(t,{OY:function(){return t$},o1:function(){return tD},k_:function(){return a}}),r(67294);var o,s,l,c,u,h,d,p,f,m,b,g,w,y,v,x,C,E,k,S,A,P,_,D,$=r(58438),O=r(66403),T=r(36635),I=r(34751),R=r(77996),N=r(37380),U=r(35592),B=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let M=class extends R.oi{constructor(){super(),this.unsubscribe=[],this.networkImages=T.WM.state.networkImages,this.disabled=!1,this.balance="show",this.address=T.Ni.state.address,this.balanceVal=T.Ni.state.balance,this.balanceSymbol=T.Ni.state.balanceSymbol,this.profileName=T.Ni.state.profileName,this.profileImage=T.Ni.state.profileImage,this.network=T.fB.state.caipNetwork,this.unsubscribe.push(...[T.Ni.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),T.fB.subscribeKey("caipNetwork",e=>this.network=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.networkImages[this.network?.imageId??""],t="show"===this.balance;return R.dy`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${(0,U.o)(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${(0,U.o)(e)}
        avatarSrc=${(0,U.o)(this.profileImage)}
        balance=${t?T.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){T.IN.open()}};B([(0,N.Cb)({type:Boolean})],M.prototype,"disabled",void 0),B([(0,N.Cb)()],M.prototype,"balance",void 0),B([(0,N.SB)()],M.prototype,"address",void 0),B([(0,N.SB)()],M.prototype,"balanceVal",void 0),B([(0,N.SB)()],M.prototype,"balanceSymbol",void 0),B([(0,N.SB)()],M.prototype,"profileName",void 0),B([(0,N.SB)()],M.prototype,"profileImage",void 0),B([(0,N.SB)()],M.prototype,"network",void 0),M=B([(0,I.customElement)("w3m-account-button")],M);var j=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let L=class extends R.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=T.Ni.state.isConnected,this.unsubscribe.push(T.Ni.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?R.dy`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${(0,U.o)(this.balance)}
          >
          </w3m-account-button>
        `:R.dy`
          <w3m-connect-button
            size=${(0,U.o)(this.size)}
            label=${(0,U.o)(this.label)}
            loadingLabel=${(0,U.o)(this.loadingLabel)}
          ></w3m-connect-button>
        `}};j([(0,N.Cb)({type:Boolean})],L.prototype,"disabled",void 0),j([(0,N.Cb)()],L.prototype,"balance",void 0),j([(0,N.Cb)()],L.prototype,"size",void 0),j([(0,N.Cb)()],L.prototype,"label",void 0),j([(0,N.Cb)()],L.prototype,"loadingLabel",void 0),j([(0,N.SB)()],L.prototype,"isAccount",void 0),L=j([(0,I.customElement)("w3m-button")],L);var F=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let z=class extends R.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=T.IN.state.open,this.unsubscribe.push(T.IN.subscribeKey("open",e=>this.open=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return R.dy`
      <wui-connect-button
        size=${(0,U.o)(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?T.IN.close():T.IN.open()}};F([(0,N.Cb)()],z.prototype,"size",void 0),F([(0,N.Cb)()],z.prototype,"label",void 0),F([(0,N.Cb)()],z.prototype,"loadingLabel",void 0),F([(0,N.SB)()],z.prototype,"open",void 0),z=F([(0,I.customElement)("w3m-connect-button")],z),r(90078);var H=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let W=class extends R.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=T.fB.state.caipNetwork,this.connected=T.Ni.state.isConnected,this.unsubscribe.push(...[T.fB.subscribeKey("caipNetwork",e=>this.network=e),T.Ni.subscribeKey("isConnected",e=>this.connected=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return R.dy`
      <wui-network-button
        .disabled=${!!this.disabled}
        imageSrc=${(0,U.o)(T.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){T.IN.open({view:"Networks"})}};H([(0,N.Cb)({type:Boolean})],W.prototype,"disabled",void 0),H([(0,N.SB)()],W.prototype,"network",void 0),H([(0,N.SB)()],W.prototype,"connected",void 0),W=H([(0,I.customElement)("w3m-network-button")],W);var q=R.iv`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`,G=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let Z=class extends R.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=T.Pc.state.view,this.unsubscribe.push(T.Pc.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{let t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return R.dy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return R.dy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return R.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return R.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"ConnectingSiwe":return R.dy`<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;case"AllWallets":return R.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return R.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return R.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return R.dy`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return R.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return R.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return R.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return R.dy`<w3m-downloads-view></w3m-downloads-view>`}}async onViewChange(e){let{history:t}=T.Pc.state,r=-10,n=10;t.length<this.prevHistoryLength&&(r=10,n=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${n}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};Z.styles=q,G([(0,N.SB)()],Z.prototype,"view",void 0),Z=G([(0,I.customElement)("w3m-router")],Z);var V=R.iv`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`,K=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let Q=class extends R.oi{constructor(){super(),this.usubscribe=[],this.networkImages=T.WM.state.networkImages,this.address=T.Ni.state.address,this.profileImage=T.Ni.state.profileImage,this.profileName=T.Ni.state.profileName,this.balance=T.Ni.state.balance,this.balanceSymbol=T.Ni.state.balanceSymbol,this.network=T.fB.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(...[T.Ni.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):T.IN.close()})],T.fB.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-view: No account provided");let e=this.networkImages[this.network?.imageId??""];return R.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,U.o)(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?I.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):I.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${T.j1.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${(0,U.o)(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}explorerBtnTemplate(){let{addressExplorerUrl:e}=T.Ni.state;return e?R.dy`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){let{requestedCaipNetworks:e}=T.fB.state,t=!!e&&e.length>1,r=e?.find(({id:e})=>e===this.network?.id);return t||!r}onCopyAddress(){try{this.address&&(T.j1.copyToClopboard(this.address),T.KC.showSuccess("Address copied"))}catch{T.KC.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&T.Pc.push("Networks")}async onDisconnect(){try{this.disconecting=!0,await T.lZ.disconnect(),T.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),T.IN.close()}catch{T.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),T.KC.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){let{addressExplorerUrl:e}=T.Ni.state;e&&T.j1.openHref(e,"_blank")}};Q.styles=V,K([(0,N.SB)()],Q.prototype,"address",void 0),K([(0,N.SB)()],Q.prototype,"profileImage",void 0),K([(0,N.SB)()],Q.prototype,"profileName",void 0),K([(0,N.SB)()],Q.prototype,"balance",void 0),K([(0,N.SB)()],Q.prototype,"balanceSymbol",void 0),K([(0,N.SB)()],Q.prototype,"network",void 0),K([(0,N.SB)()],Q.prototype,"disconecting",void 0),Q=K([(0,I.customElement)("w3m-account-view")],Q);var Y=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let X=class extends R.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=T.j1.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return R.dy`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?R.dy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:R.dy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return T.j1.isMobile()?R.dy`
        <wui-icon-box
          size="lg"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){T.Pc.push("ConnectingWalletConnect")}};Y([(0,N.SB)()],X.prototype,"search",void 0),X=Y([(0,I.customElement)("w3m-all-wallets-view")],X);var J=R.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`,ee=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let et=class extends R.oi{constructor(){super(),this.unsubscribe=[],this.connectors=T.AA.state.connectors,this.unsubscribe.push(T.AA.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return R.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(T.j1.isMobile())return null;let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type);return e?R.dy`
      <wui-list-wallet
        imageSrc=${(0,U.o)(T.fz.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){let{customWallets:e}=T.hD.state;if(!e?.length)return null;let t=this.filterOutDuplicateWallets(e);return t.map(e=>R.dy`
        <wui-list-wallet
          imageSrc=${(0,U.o)(T.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)}featuredTemplate(){let{featured:e}=T.QT.state;if(!e.length)return null;let t=this.filterOutDuplicateWallets(e);return t.map(e=>R.dy`
        <wui-list-wallet
          imageSrc=${(0,U.o)(T.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)}recentTemplate(){let e=T.MO.getRecentWallets();return e.map(e=>R.dy`
        <wui-list-wallet
          imageSrc=${(0,U.o)(T.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>"ANNOUNCED"!==e.type?null:R.dy`
        <wui-list-wallet
          imageSrc=${(0,U.o)(T.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `)}injectedTemplate(){let e=this.connectors.find(e=>"ANNOUNCED"===e.type);return this.connectors.map(t=>"INJECTED"===t.type&&T.lZ.checkInstalled()?R.dy`
        <wui-list-wallet
          imageSrc=${(0,U.o)(T.fz.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
          tagLabel=${(0,U.o)(e?void 0:"installed")}
          tagVariant=${(0,U.o)(e?void 0:"success")}
        >
        </wui-list-wallet>
      `:null)}connectorsTemplate(){return this.connectors.map(e=>["WALLET_CONNECT","INJECTED","ANNOUNCED"].includes(e.type)?null:R.dy`
        <wui-list-wallet
          imageSrc=${(0,U.o)(T.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){let e=10*Math.floor(T.QT.state.count/10);return R.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${e}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){let{recommended:e}=T.QT.state,{customWallets:t,featuredWalletIds:r}=T.hD.state,{connectors:n}=T.AA.state,i=T.MO.getRecentWallets(),a=n.filter(e=>"ANNOUNCED"===e.type);if(r||t||!e.length)return null;let o=a.length+i.length,s=this.filterOutDuplicateWallets(e).slice(0,Math.max(0,2-o));return s.map(e=>R.dy`
        <wui-list-wallet
          imageSrc=${(0,U.o)(T.fz.getWalletImage(e))}
          name=${e?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)}onConnector(e){"WALLET_CONNECT"===e.type?T.j1.isMobile()?T.Pc.push("AllWallets"):T.Pc.push("ConnectingWalletConnect"):T.Pc.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){let{connectors:t}=T.AA.state,r=T.MO.getRecentWallets(),n=r.map(e=>e.id),i=t.map(e=>e.info?.rdns).filter(Boolean),a=e.filter(e=>!n.includes(e.id)&&!i.includes(e.rdns??void 0));return a}onAllWallets(){T.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),T.Pc.push("AllWallets")}onConnectWallet(e){T.Pc.push("ConnectingWalletConnect",{wallet:e})}};et.styles=J,ee([(0,N.SB)()],et.prototype,"connectors",void 0),et=ee([(0,I.customElement)("w3m-connect-view")],et);var er=R.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,en=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};class ei extends R.oi{constructor(){super(),this.wallet=T.Pc.state.data?.wallet,this.connector=T.Pc.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=T.fz.getWalletImage(this.wallet)??T.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=T.lZ.state.wcUri,this.error=T.lZ.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(...[T.lZ.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),T.lZ.subscribeKey("wcError",e=>this.error=e),T.lZ.subscribeKey("buffering",e=>this.buffering=e)])}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),R.dy`
      <wui-flex
        data-error=${(0,U.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,U.o)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?R.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(T.lZ.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){let e=T.u0.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return R.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(T.j1.copyToClopboard(this.uri),T.KC.showSuccess("Link copied"))}catch{T.KC.showError("Failed to copy")}}}ei.styles=er,en([(0,N.SB)()],ei.prototype,"uri",void 0),en([(0,N.SB)()],ei.prototype,"error",void 0),en([(0,N.SB)()],ei.prototype,"ready",void 0),en([(0,N.SB)()],ei.prototype,"showRetry",void 0),en([(0,N.SB)()],ei.prototype,"buffering",void 0),en([(0,N.Cb)({type:Boolean})],ei.prototype,"isMobile",void 0),en([(0,N.Cb)()],ei.prototype,"onRetry",void 0);let ea={INJECTED:"browser",ANNOUNCED:"browser"},eo=class extends ei{constructor(){if(super(),!this.connector)throw Error("w3m-connecting-view: No connector provided");T.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:ea[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(this.connector.imageUrl&&T.MO.setConnectedWalletImageUrl(this.connector.imageUrl),await T.lZ.connectExternal(this.connector),T.IN.close(),T.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){T.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};eo=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,I.customElement)("w3m-connecting-external-view")],eo);let es=class extends R.oi{constructor(){super(...arguments),this.dappUrl=T.hD.state.metadata?.url,this.dappName=T.hD.state.metadata?.name}render(){return R.dy`
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} wants to connect to your wallet</wui-text
        >
      </wui-flex>
      ${this.urlTemplate()}
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and to continue</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button size="md" ?fullwidth=${!0} variant="shade" @click=${this.onCancel.bind(this)}>
          Cancel
        </wui-button>
        <wui-button size="md" ?fullwidth=${!0} variant="fill" @click=${this.onSign.bind(this)}>
          Sign
        </wui-button>
      </wui-flex>
    `}urlTemplate(){return this.dappUrl?R.dy`<wui-flex .padding=${["0","0","l","0"]} justifyContent="center">
        <wui-button size="sm" variant="accentBg" @click=${this.onDappLink.bind(this)}>
          ${this.dappUrl}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>`:null}onDappLink(){this.dappUrl&&T.j1.openHref(this.dappUrl,"_blank")}onSign(){}onCancel(){T.Pc.goBack()}};es=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,I.customElement)("w3m-connecting-siwe-view")],es);var el=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let ec=class extends R.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=T.Pc.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),T.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),R.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):R.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{let{wcPairingExpiry:t}=T.lZ.state;if(e||T.j1.isPairingExpired(t)){if(T.lZ.connectWalletConnect(),this.wallet){let e=T.fz.getWalletImage(this.wallet);e&&T.MO.setConnectedWalletImageUrl(e)}else{let e=T.AA.state.connectors,t=e.find(e=>"WALLET_CONNECT"===e.type),r=T.fz.getConnectorImage(t);r&&T.MO.setConnectedWalletImageUrl(r)}await T.lZ.state.wcPromise,this.finalizeConnection(),T.IN.close()}}catch(e){T.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),T.lZ.setWcError(!0),T.j1.isAllowedRetry(this.lastRetry)&&(T.KC.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){let{wcLinking:e,recentWallet:t}=T.lZ.state;e&&T.MO.setWalletConnectDeepLink(e),t&&T.MO.setWeb3ModalRecent(t),T.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:r,injected:n,rdns:i}=this.wallet,a=n?.map(({injected_id:e})=>e).filter(Boolean),o=i?[i]:a??[],s=o.length,l=T.lZ.checkInstalled(o),c=s&&l,u=t&&!T.j1.isMobile();c&&this.platforms.push("browser"),e&&this.platforms.push(T.j1.isMobile()?"mobile":"qrcode"),r&&this.platforms.push("web"),u&&this.platforms.push("desktop"),!c&&s&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return R.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return R.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return R.dy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return R.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return R.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return R.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){let e=this.platforms.length>1;return e?R.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};el([(0,N.SB)()],ec.prototype,"platform",void 0),el([(0,N.SB)()],ec.prototype,"platforms",void 0),ec=el([(0,I.customElement)("w3m-connecting-wc-view")],ec);let eu=class extends R.oi{constructor(){super(...arguments),this.wallet=T.Pc.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return R.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?R.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?R.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?R.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?R.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&T.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&T.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&T.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&T.j1.openHref(this.wallet.homepage,"_blank")}};eu=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,I.customElement)("w3m-downloads-view")],eu);let eh=class extends R.oi{render(){return R.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{T.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:e,featured:t}=T.QT.state,{customWallets:r}=T.hD.state,n=[...t,...r??[],...e].slice(0,4);return n.map(e=>R.dy`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,U.o)(T.fz.getWalletImage(e))}
          @click=${()=>{T.j1.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};eh=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,I.customElement)("w3m-get-wallet-view")],eh);var ed=R.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,ep=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let ef=class extends R.oi{constructor(){super(),this.network=T.Pc.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=T.fB.state.caipNetwork,this.unsubscribe.push(T.fB.subscribeKey("caipNetwork",e=>{e?.id!==this.currentNetwork?.id&&T.Pc.goBack()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error("w3m-network-switch-view: No network provided");this.onShowRetry();let e=this.error?"Switch declined":"Approve in wallet",t=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return R.dy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,U.o)(T.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:R.dy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await T.fB.switchActiveNetwork(this.network),T.Pc.goBack())}catch{this.error=!0}}};ef.styles=ed,ep([(0,N.SB)()],ef.prototype,"showRetry",void 0),ep([(0,N.SB)()],ef.prototype,"error",void 0),ep([(0,N.SB)()],ef.prototype,"currentNetwork",void 0),ef=ep([(0,I.customElement)("w3m-network-switch-view")],ef);var em=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eb=class extends R.oi{constructor(){super(),this.unsubscribe=[],this.caipNetwork=T.fB.state.caipNetwork,this.unsubscribe.push(T.fB.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return R.dy`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){T.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),T.Pc.push("WhatIsANetwork")}networksTemplate(){let{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:r}=T.fB.state;return e?.length&&t?.sort((t,r)=>e.indexOf(r.id)-e.indexOf(t.id)),t?.map(t=>R.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===t.id}
          imageSrc=${(0,U.o)(T.fz.getNetworkImage(t))}
          type="network"
          name=${t.name??t.id}
          @click=${()=>this.onSwitchNetwork(t)}
          .disabled=${!r&&!e?.includes(t.id)}
        ></wui-card-select>
      `)}async onSwitchNetwork(e){let{isConnected:t}=T.Ni.state,{approvedCaipNetworkIds:r,supportsAllNetworks:n,caipNetwork:i}=T.fB.state;t&&i?.id!==e.id?r?.includes(e.id)?await T.fB.switchActiveNetwork(e):n&&T.Pc.push("SwitchNetwork",{network:e}):t||(T.fB.setCaipNetwork(e),T.Pc.push("Connect"))}};em([(0,N.SB)()],eb.prototype,"caipNetwork",void 0),eb=em([(0,I.customElement)("w3m-networks-view")],eb);let eg=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],ew=class extends R.oi{render(){return R.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${eg}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{T.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};ew=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,I.customElement)("w3m-what-is-a-network-view")],ew);let ey=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],ev=class extends R.oi{render(){return R.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${ey}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){T.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),T.Pc.push("GetWallet")}};ev=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,I.customElement)("w3m-what-is-a-wallet-view")],ev);var ex=R.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,eC=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eE="local-paginator",ek=class extends R.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!T.QT.state.wallets.length,this.wallets=T.QT.state.wallets,this.recommended=T.QT.state.recommended,this.featured=T.QT.state.featured,this.unsubscribe.push(...[T.QT.subscribeKey("wallets",e=>this.wallets=e),T.QT.subscribeKey("recommended",e=>this.recommended=e),T.QT.subscribeKey("featured",e=>this.featured=e)])}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return R.dy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){let e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await T.QT.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>R.dy`
        <wui-card-select-loader type="wallet" id=${(0,U.o)(t)}></wui-card-select-loader>
      `)}walletsTemplate(){let e=[...this.featured,...this.recommended,...this.wallets];return e.map(e=>R.dy`
        <wui-card-select
          imageSrc=${(0,U.o)(T.fz.getWalletImage(e))}
          type="wallet"
          name=${e.name}
          @click=${()=>this.onConnectWallet(e)}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:r,count:n}=T.QT.state,i=window.innerWidth<352?3:4,a=e.length+t.length,o=Math.ceil(a/i)*i-a+i;return(o-=e.length?r.length%i:0,0===n||[...r,...e,...t].length<n)?this.shimmerTemplate(o,eE):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${eE}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.initial){let{page:e,count:t,wallets:r}=T.QT.state;r.length<t&&T.QT.fetchWallets({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){let{connectors:t}=T.AA.state,r=t.find(({explorerId:t})=>t===e.id);r?T.Pc.push("ConnectingExternal",{connector:r}):T.Pc.push("ConnectingWalletConnect",{wallet:e})}};ek.styles=ex,eC([(0,N.SB)()],ek.prototype,"initial",void 0),eC([(0,N.SB)()],ek.prototype,"wallets",void 0),eC([(0,N.SB)()],ek.prototype,"recommended",void 0),eC([(0,N.SB)()],ek.prototype,"featured",void 0),ek=eC([(0,I.customElement)("w3m-all-wallets-list")],ek);var eS=R.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`,eA=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eP=class extends R.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?R.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await T.QT.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){let{search:e}=T.QT.state;return e.length?R.dy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${e.map(e=>R.dy`
            <wui-card-select
              imageSrc=${(0,U.o)(T.fz.getWalletImage(e))}
              type="wallet"
              name=${e.name}
              @click=${()=>this.onConnectWallet(e)}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:R.dy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconcolor="fg-200"
            backgroundcolor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){let{connectors:t}=T.AA.state,r=t.find(({explorerId:t})=>t===e.id);r?T.Pc.push("ConnectingExternal",{connector:r}):T.Pc.push("ConnectingWalletConnect",{wallet:e})}};eP.styles=eS,eA([(0,N.SB)()],eP.prototype,"loading",void 0),eA([(0,N.Cb)()],eP.prototype,"query",void 0),eP=eA([(0,I.customElement)("w3m-all-wallets-search")],eP);var e_=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eD=class extends R.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(T.lZ.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return R.dy`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};e_([(0,N.Cb)({type:Array})],eD.prototype,"platforms",void 0),e_([(0,N.Cb)()],eD.prototype,"onSelectPlatfrom",void 0),e_([(0,N.SB)()],eD.prototype,"buffering",void 0),eD=e_([(0,I.customElement)("w3m-connecting-header")],eD);let e$=class extends ei{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),T.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=T.AA.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns),r=e.find(e=>"INJECTED"===e.type);t?await T.lZ.connectExternal(t):r&&await T.lZ.connectExternal(r),T.IN.close(),T.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){T.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};e$=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,I.customElement)("w3m-connecting-wc-browser")],e$);let eO=class extends ei{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),T.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{this.onConnect?.()},200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:r,href:n}=T.j1.formatNativeUrl(e,this.uri);T.lZ.setWcLinking({name:t,href:n}),T.lZ.setRecentWallet(this.wallet),T.j1.openHref(r,"_self")}catch{this.error=!0}}};eO=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,I.customElement)("w3m-connecting-wc-desktop")],eO);let eT=class extends ei{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),T.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:e,name:t}=this.wallet,{redirect:r,href:n}=T.j1.formatNativeUrl(e,this.uri);T.lZ.setWcLinking({name:t,href:n}),T.lZ.setRecentWallet(this.wallet),T.j1.openHref(r,"_self")}catch{this.error=!0}}onBuffering(){let e=T.j1.isIos();document?.visibilityState==="visible"&&!this.error&&e&&(T.lZ.setBuffering(!0),setTimeout(()=>{T.lZ.setBuffering(!1)},5e3))}};eT=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,I.customElement)("w3m-connecting-wc-mobile")],eT);var eI=R.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let eR=class extends ei{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),T.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),R.dy`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-link>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return T.lZ.setWcLinking(void 0),T.lZ.setRecentWallet(this.wallet),R.dy`<wui-qr-code
      size=${e}
      theme=${T.u0.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,U.o)(T.fz.getWalletImage(this.wallet))}
      alt=${(0,U.o)(t)}
    ></wui-qr-code>`}};eR.styles=eI,eR=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,I.customElement)("w3m-connecting-wc-qrcode")],eR);var eN=R.iv`
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;let eU=class extends R.oi{constructor(){super(...arguments),this.dappImageUrl=T.hD.state.metadata?.icons,this.walletImageUrl=T.MO.getConnectedWalletImageUrl()}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-visual-thumbnail");e?.[0]&&this.createAnimation(e[0],"translate(18px)"),e?.[1]&&this.createAnimation(e[1],"translate(-18px)")}render(){return R.dy`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:"translateX(0px)"},{transform:t}],{duration:1600,easing:"cubic-bezier(0.56, 0, 0.48, 1)",direction:"alternate",iterations:1/0})}};eU.styles=eN,eU=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,I.customElement)("w3m-connecting-siwe")],eU);let eB=class extends R.oi{constructor(){if(super(),this.wallet=T.Pc.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");T.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return R.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,U.o)(T.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};eB=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,I.customElement)("w3m-connecting-wc-unsupported")],eB);let eM=class extends ei{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",T.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:r,href:n}=T.j1.formatUniversalUrl(e,this.uri);T.lZ.setWcLinking({name:t,href:n}),T.lZ.setRecentWallet(this.wallet),T.j1.openHref(r,"_blank")}catch{this.error=!0}}};eM=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,I.customElement)("w3m-connecting-wc-web")],eM);var ej=R.iv`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`,eL=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};function eF(){let e=T.Pc.state.data?.connector?.name,t=T.Pc.state.data?.wallet?.name,r=T.Pc.state.data?.network?.name,n=t??e;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:n??"Connect Wallet",ConnectingWalletConnect:n??"WalletConnect",ConnectingSiwe:"Sign In",Networks:"Choose Network",SwitchNetwork:r??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet",Downloads:n?`Get ${n}`:"Downloads"}}let ez=class extends R.oi{constructor(){super(),this.unsubscribe=[],this.heading=eF()[T.Pc.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(T.Pc.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),T.lZ.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return R.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${T.IN.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){T.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),T.Pc.push("WhatIsAWallet")}titleTemplate(){return R.dy`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){let{view:e}=T.Pc.state;return this.showBack?R.dy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${T.Pc.goBack}
      ></wui-icon-link>`:R.dy`<wui-icon-link
      data-hidden=${"Connect"!==e}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?R.dy`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){let t=this.shadowRoot?.querySelector("wui-text");if(t){let r=eF()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=r,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){let{history:e}=T.Pc.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};ez.styles=[ej],eL([(0,N.SB)()],ez.prototype,"heading",void 0),eL([(0,N.SB)()],ez.prototype,"buffering",void 0),eL([(0,N.SB)()],ez.prototype,"showBack",void 0),ez=eL([(0,I.customElement)("w3m-header")],ez);var eH=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eW=class extends R.oi{constructor(){super(...arguments),this.data=[]}render(){return R.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>R.dy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(e=>R.dy`<wui-visual name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};eH([(0,N.Cb)({type:Array})],eW.prototype,"data",void 0),eW=eH([(0,I.customElement)("w3m-help-widget")],eW);var eq=R.iv`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;let eG=class extends R.oi{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=T.hD.state;return e||t?R.dy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=T.hD.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=T.hD.state;return e?R.dy`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=T.hD.state;return e?R.dy`<a href=${e}>Privacy Policy</a>`:null}};eG.styles=[eq],eG=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o}([(0,I.customElement)("w3m-legal-footer")],eG);var eZ=R.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,eV=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eK=class extends R.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:e,app_store:t,play_store:r,chrome_store:n,homepage:i}=this.wallet,a=T.j1.isMobile(),o=T.j1.isIos(),s=T.j1.isAndroid(),l=[t,r,i,n].filter(Boolean).length>1,c=I.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return l&&!a?R.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${()=>T.Pc.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!l&&i?R.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&o?R.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&s?R.dy`
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&T.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&T.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&T.j1.openHref(this.wallet.homepage,"_blank")}};eK.styles=[eZ],eV([(0,N.Cb)({type:Object})],eK.prototype,"wallet",void 0),eK=eV([(0,I.customElement)("w3m-mobile-download-links")],eK);var eQ=R.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`,eY=function(e,t,r,n){var i,a=arguments.length,o=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(a<3?i(o):a>3?i(t,r,o):i(t,r))||o);return a>3&&o&&Object.defineProperty(t,r,o),o};let eX={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}},eJ=class extends R.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=T.KC.state.open,this.unsubscribe.push(T.KC.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=T.KC.state,r=eX[t];return R.dy`
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>T.KC.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};eJ.styles=eQ,eY([(0,N.SB)()],eJ.prototype,"open",void 0),eJ=eY([(0,I.customElement)("w3m-snackbar")],eJ);let e0=!1;class e1{constructor(e){this.initPromise=void 0,this.setIsConnected=e=>{T.Ni.setIsConnected(e)},this.setCaipAddress=e=>{T.Ni.setCaipAddress(e)},this.setBalance=(e,t)=>{T.Ni.setBalance(e,t)},this.setProfileName=e=>{T.Ni.setProfileName(e)},this.setProfileImage=e=>{T.Ni.setProfileImage(e)},this.resetAccount=()=>{T.Ni.resetAccount()},this.setCaipNetwork=e=>{T.fB.setCaipNetwork(e)},this.getCaipNetwork=()=>T.fB.state.caipNetwork,this.setRequestedCaipNetworks=e=>{T.fB.setRequestedCaipNetworks(e)},this.getApprovedCaipNetworksData=()=>T.fB.getApprovedCaipNetworksData(),this.resetNetwork=()=>{T.fB.resetNetwork()},this.setConnectors=e=>{T.AA.setConnectors(e)},this.addConnector=e=>{T.AA.addConnector(e)},this.getConnectors=()=>T.AA.getConnectors(),this.resetWcConnection=()=>{T.lZ.resetWcConnection()},this.fetchIdentity=e=>T.Lr.fetchIdentity(e),this.setAddressExplorerUrl=e=>{T.Ni.setAddressExplorerUrl(e)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),T.IN.open(e)}async close(){await this.initOrContinue(),T.IN.close()}getThemeMode(){return T.u0.state.themeMode}getThemeVariables(){return T.u0.state.themeVariables}setThemeMode(e){T.u0.setThemeMode(e),(0,I.setColorTheme)(T.u0.state.themeMode)}setThemeVariables(e){T.u0.setThemeVariables(e),(0,I.setThemeVariables)(T.u0.state.themeVariables)}subscribeTheme(e){return T.u0.subscribe(e)}getState(){return{...T.Ie.state}}subscribeState(e){return T.Ie.subscribe(e)}getEvent(){return{...T.Xs.state}}subscribeEvents(e){return T.Xs.subscribe(e)}initControllers(e){T.fB.setClient(e.networkControllerClient),T.fB.setDefaultCaipNetwork(e.defaultChain),T.hD.setProjectId(e.projectId),T.hD.setIncludeWalletIds(e.includeWalletIds),T.hD.setExcludeWalletIds(e.excludeWalletIds),T.hD.setFeaturedWalletIds(e.featuredWalletIds),T.hD.setTokens(e.tokens),T.hD.setTermsConditionsUrl(e.termsConditionsUrl),T.hD.setPrivacyPolicyUrl(e.privacyPolicyUrl),T.hD.setCustomWallets(e.customWallets),T.hD.setEnableAnalytics(e.enableAnalytics),T.hD.setSdkVersion(e._sdkVersion),T.lZ.setClient(e.connectionControllerClient),e.metadata&&T.hD.setMetadata(e.metadata),e.themeMode&&T.u0.setThemeMode(e.themeMode),e.themeVariables&&T.u0.setThemeVariables(e.themeVariables)}async initOrContinue(){return!this.initPromise&&!e0&&T.j1.isClient()&&(e0=!0,this.initPromise=new Promise(async e=>{await Promise.all([Promise.resolve().then(r.bind(r,34751)),Promise.resolve().then(r.bind(r,90078))]);let t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()})),this.initPromise}}let e2={WALLET_CONNECT_CONNECTOR_ID:"walletConnect",INJECTED_CONNECTOR_ID:"injected",COINBASE_CONNECTOR_ID:"coinbaseWallet",SAFE_CONNECTOR_ID:"safe",LEDGER_CONNECTOR_ID:"ledger",EIP6963_CONNECTOR_ID:"eip6963",EIP155:"eip155",ADD_CHAIN_METHOD:"wallet_addEthereumChain",EIP6963_ANNOUNCE_EVENT:"eip6963:announceProvider",EIP6963_REQUEST_EVENT:"eip6963:requestProvider",VERSION:"3.2.0-alpha.1"},e3={ConnectorExplorerIds:{[e2.COINBASE_CONNECTOR_ID]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[e2.SAFE_CONNECTOR_ID]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[e2.LEDGER_CONNECTOR_ID]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},EIP155NetworkImageIds:{1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},ConnectorImageIds:{[e2.COINBASE_CONNECTOR_ID]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[e2.SAFE_CONNECTOR_ID]:"461db637-8616-43ce-035a-d89b8a1d5800",[e2.LEDGER_CONNECTOR_ID]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[e2.WALLET_CONNECT_CONNECTOR_ID]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[e2.INJECTED_CONNECTOR_ID]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},ConnectorNamesMap:{[e2.INJECTED_CONNECTOR_ID]:"Browser Wallet",[e2.WALLET_CONNECT_CONNECTOR_ID]:"WalletConnect",[e2.COINBASE_CONNECTOR_ID]:"Coinbase",[e2.LEDGER_CONNECTOR_ID]:"Ledger",[e2.SAFE_CONNECTOR_ID]:"Safe"},ConnectorTypesMap:{[e2.INJECTED_CONNECTOR_ID]:"INJECTED",[e2.WALLET_CONNECT_CONNECTOR_ID]:"WALLET_CONNECT",[e2.EIP6963_CONNECTOR_ID]:"ANNOUNCED"}},e5={caipNetworkIdToNumber:e=>e?Number(e.split(":")[1]):void 0,getCaipTokens(e){if(!e)return;let t={};return Object.entries(e).forEach(([e,r])=>{t[`${e2.EIP155}:${e}`]=r}),t}};class e6 extends e1{constructor(e){let{wagmiConfig:t,chains:r,defaultChain:n,tokens:i,_sdkVersion:a,...o}=e;if(!t)throw Error("web3modal:constructor - wagmiConfig is undefined");if(!o.projectId)throw Error("web3modal:constructor - projectId is undefined");if(!t.connectors.find(e=>e.id===e2.WALLET_CONNECT_CONNECTOR_ID))throw Error("web3modal:constructor - WalletConnectConnector is required");let s={connectWalletConnect:async e=>{let r=t.connectors.find(e=>e.id===e2.WALLET_CONNECT_CONNECTOR_ID);if(!r)throw Error("connectionControllerClient:getWalletConnectUri - connector is undefined");r.on("message",t=>{"display_uri"===t.type&&(e(t.data),r.removeAllListeners())});let n=e5.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,$.$j)({connector:r,chainId:n})},connectExternal:async({id:e,provider:r,info:n})=>{let i=t.connectors.find(t=>t.id===e);if(!i)throw Error("connectionControllerClient:connectExternal - connector is undefined");r&&n&&i.id===e2.EIP6963_CONNECTOR_ID&&i.setEip6963Wallet?.({provider:r,info:n});let a=e5.caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,$.$j)({connector:i,chainId:a})},checkInstalled:e=>{let t=this.getConnectors().filter(e=>"ANNOUNCED"===e.type),r=this.getConnectors().find(e=>"INJECTED"===e.type);if(!e)return!!window.ethereum;if(t.length){let r=e.some(e=>t.some(t=>t.info?.rdns===e));if(r)return!0}return!!r&&!!window?.ethereum&&e.some(e=>!!window.ethereum?.[String(e)])},disconnect:$.zP};super({networkControllerClient:{switchCaipNetwork:async e=>{let t=e5.caipNetworkIdToNumber(e?.id);t&&await (0,$.If)({chainId:t})},async getApprovedCaipNetworksData(){let e=localStorage.getItem("wagmi.wallet");if(e?.includes(e2.WALLET_CONNECT_CONNECTOR_ID)){let e=t.connectors.find(e=>e.id===e2.WALLET_CONNECT_CONNECTOR_ID);if(!e)throw Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");let r=await e.getProvider(),n=r.signer?.session?.namespaces,i=n?.[e2.EIP155]?.methods,a=n?.[e2.EIP155]?.chains;return{supportsAllNetworks:i?.includes(e2.ADD_CHAIN_METHOD),approvedCaipNetworkIds:a}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},connectionControllerClient:s,defaultChain:function(e){if(e)return{id:`${e2.EIP155}:${e.id}`,name:e.name,imageId:e3.EIP155NetworkImageIds[e.id]}}(n),tokens:e5.getCaipTokens(i),_sdkVersion:a??`html-wagmi-${e2.VERSION}`,...o}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.syncRequestedNetworks(r),this.syncConnectors(t),this.listenConnectors(t),(0,$.uH)(()=>this.syncAccount()),(0,$.QC)(()=>this.syncNetwork())}getState(){let e=super.getState();return{...e,selectedNetworkId:e5.caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(t=>e({...t,selectedNetworkId:e5.caipNetworkIdToNumber(t.selectedNetworkId)}))}syncRequestedNetworks(e){let t=e?.map(e=>({id:`${e2.EIP155}:${e.id}`,name:e.name,imageId:e3.EIP155NetworkImageIds[e.id],imageUrl:this.options?.chainImages?.[e.id]}));this.setRequestedCaipNetworks(t??[])}async syncAccount(){let{address:e,isConnected:t}=(0,$.D0)(),{chain:r}=(0,$.Hy)();if(this.resetAccount(),t&&e&&r){let n=`${e2.EIP155}:${r.id}:${e}`;this.setIsConnected(t),this.setCaipAddress(n),await Promise.all([this.syncProfile(e),this.syncBalance(e,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!t&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){let{address:e,isConnected:t}=(0,$.D0)(),{chain:r}=(0,$.Hy)();if(r){let n=String(r.id),i=`${e2.EIP155}:${n}`;if(this.setCaipNetwork({id:i,name:r.name,imageId:e3.EIP155NetworkImageIds[r.id],imageUrl:this.options?.chainImages?.[r.id]}),t&&e){let t=`${e2.EIP155}:${r.id}:${e}`;if(this.setCaipAddress(t),r.blockExplorers?.default?.url){let t=`${r.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(t)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&await this.syncBalance(e,r)}}}async syncProfile(e){try{let{name:t,avatar:r}=await this.fetchIdentity({caipChainId:`${e2.EIP155}:${O.R.id}`,address:e});this.setProfileName(t),this.setProfileImage(r)}catch{let t=await (0,$.Lk)({address:e,chainId:O.R.id});if(t){this.setProfileName(t);let e=await (0,$.w6)({name:t,chainId:O.R.id});e&&this.setProfileImage(e)}}}async syncBalance(e,t){let r=await (0,$.EG)({address:e,chainId:t.id,token:this.options?.tokens?.[t.id]?.address});this.setBalance(r.formatted,r.symbol)}syncConnectors(e){let t=[];e.connectors.forEach(({id:e,name:r})=>{e!==e2.EIP6963_CONNECTOR_ID&&t.push({id:e,explorerId:e3.ConnectorExplorerIds[e],imageId:e3.ConnectorImageIds[e],imageUrl:this.options?.connectorImages?.[e],name:e3.ConnectorNamesMap[e]??r,type:e3.ConnectorTypesMap[e]??"EXTERNAL"})}),this.setConnectors(t)}eip6963EventHandler(e,t){if(t.detail){let{info:r,provider:n}=t.detail,i=this.getConnectors(),a=i.find(e=>e.name===r.name);a||(this.addConnector({id:e2.EIP6963_CONNECTOR_ID,type:"ANNOUNCED",imageUrl:r.icon??this.options?.connectorImages?.[e2.EIP6963_CONNECTOR_ID],name:r.name,provider:n,info:r}),e.isAuthorized({info:r,provider:n}))}}listenConnectors(e){let t=e.connectors.find(e=>e.id===e2.EIP6963_CONNECTOR_ID);if("undefined"!=typeof window&&t){let e=this.eip6963EventHandler.bind(this,t);window.addEventListener(e2.EIP6963_ANNOUNCE_EVENT,e),window.dispatchEvent(new Event(e2.EIP6963_REQUEST_EVENT))}}}var e4=r(92219),e8=function(e,t,r,n,i){if("m"===n)throw TypeError("Private method is not writable");if("a"===n&&!i)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!i:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?i.call(e,r):i?i.value=r:t.set(e,r),r},e7=function(e,t,r,n){if("a"===r&&!n)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===r?n:"a"===r?n.call(e):n?n.value:t.get(e)};let e9="connectedRdns";class te extends e4._{constructor(e){super({chains:e.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",o.set(this,void 0),s.set(this,void 0),e8(this,o,this.options.getProvider(),"f")}async connect(e){let t=await super.connect(e);return e7(this,s,"f")&&this.storage?.setItem(e9,e7(this,s,"f").info.rdns),t}async disconnect(){await super.disconnect(),this.storage?.removeItem(e9),e8(this,s,void 0,"f")}async isAuthorized(e){let t=this.storage?.getItem(e9);if(t){if(!e||t!==e.info.rdns)return!0;e8(this,s,e,"f")}return super.isAuthorized()}async getProvider(){return Promise.resolve(e7(this,s,"f")?.provider??e7(this,o,"f"))}setEip6963Wallet(e){e8(this,s,e,"f")}}o=new WeakMap,s=new WeakMap;var tt=r(48764);"undefined"==typeof window||(window.Buffer||(window.Buffer=tt.Buffer),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}));var tr=r(69077),tn=r(57858),ti=r(53516),ta=r(53324),to=r(45775),ts=r(39028),tl=r(79578),tc=r(3980),tu=r(92106),th=class extends ta.wR{constructor({chains:e,options:t}){super({chains:e,options:{reloadOnDisconnect:!1,...t}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,(0,ta.Ko)(this,l,void 0),(0,ta.Ko)(this,c,void 0),this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,to.K)(e[0])})},this.onChainChanged=e=>{let t=(0,ti.J)(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:e}={}){try{let t=await this.getProvider();t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});let r=await t.enable(),n=(0,to.K)(r[0]),i=await this.getChainId(),a=this.isChainUnsupported(i);if(e&&i!==e){let t=await this.switchChain(e);i=t.id,a=this.isChainUnsupported(i)}return{account:n,chain:{id:i,unsupported:a}}}catch(e){if(/(user closed modal|accounts received is empty)/i.test(e.message))throw new ts.ab(e);throw e}}async disconnect(){if(!(0,ta.ac)(this,c))return;let e=await this.getProvider();e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),e.disconnect(),e.close()}async getAccount(){let e=await this.getProvider(),t=await e.request({method:"eth_accounts"});return(0,to.K)(t[0])}async getChainId(){let e=await this.getProvider(),t=(0,ti.J)(e.chainId);return t}async getProvider(){if(!(0,ta.ac)(this,c)){let e=(await Promise.all([r.e(739),r.e(811),r.e(439)]).then(r.t.bind(r,45811,19))).default;"function"!=typeof e&&"function"==typeof e.default&&(e=e.default),(0,ta.qx)(this,l,new e(this.options));let t=ta.ac(this,l).walletExtension?.getChainId(),n=this.chains.find(e=>this.options.chainId?e.id===this.options.chainId:e.id===t)||this.chains[0],i=this.options.chainId||n?.id,a=this.options.jsonRpcUrl||n?.rpcUrls.default.http[0];(0,ta.qx)(this,c,(0,ta.ac)(this,l).makeWeb3Provider(a,i))}return(0,ta.ac)(this,c)}async getWalletClient({chainId:e}={}){let[t,r]=await Promise.all([this.getProvider(),this.getAccount()]),n=this.chains.find(t=>t.id===e);if(!t)throw Error("provider is required.");return(0,tl.K)({account:r,chain:n,transport:(0,tc.P)(t)})}async isAuthorized(){try{let e=await this.getAccount();return!!e}catch{return!1}}async switchChain(e){let t=await this.getProvider(),r=(0,tu.eC)(e);try{return await t.request({method:"wallet_switchEthereumChain",params:[{chainId:r}]}),this.chains.find(t=>t.id===e)??{id:e,name:`Chain ${r}`,network:`${r}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(i){let n=this.chains.find(t=>t.id===e);if(!n)throw new tn.B({chainId:e,connectorId:this.id});if(4902===i.code)try{return await t.request({method:"wallet_addEthereumChain",params:[{chainId:r,chainName:n.name,nativeCurrency:n.nativeCurrency,rpcUrls:[n.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(n)}]}),n}catch(e){throw new ts.ab(e)}throw new ts.x3(i)}}async watchAsset({address:e,decimals:t=18,image:r,symbol:n}){let i=await this.getProvider();return i.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:r,symbol:n}}})}};function td(e=[],t=[]){return[...new Set([...e,...t])]}l=new WeakMap,c=new WeakMap,r(15501),r(512),r(31416),r(73294),r(57664),r(37466),r(66736),r(62873),r(65755),r(69528),r(60075),r(83454),Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;var tp=Object.defineProperty,tf=Object.defineProperties,tm=Object.getOwnPropertyDescriptors,tb=Object.getOwnPropertySymbols,tg=Object.prototype.hasOwnProperty,tw=Object.prototype.propertyIsEnumerable,ty=(e,t,r)=>t in e?tp(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,tv=(e,t)=>{for(var r in t||(t={}))tg.call(t,r)&&ty(e,r,t[r]);if(tb)for(var r of tb(t))tw.call(t,r)&&ty(e,r,t[r]);return e},tx=(e,t)=>tf(e,tm(t));function tC(e){return e.includes(":")}function tE(e){var t,r,n,i;let a={};if(!(Object.getPrototypeOf(e)===Object.prototype&&Object.keys(e).length))return a;for(let[o,s]of Object.entries(e)){let e=tC(o)?[o]:s.chains,l=s.methods||[],c=s.events||[],u=tC(i=o)?i.split(":")[0]:i;a[u]=tx(tv({},a[u]),{chains:td(e,null==(t=a[u])?void 0:t.chains),methods:td(l,null==(r=a[u])?void 0:r.methods),events:td(c,null==(n=a[u])?void 0:n.events)})}return a}var tk="eip155",tS="requestedChains",tA="wallet_addEthereumChain",tP=class extends ta.wR{constructor(e){super({...e,options:{isNewChainsStale:!0,...e.options}}),(0,ta.Ko)(this,d),(0,ta.Ko)(this,f),(0,ta.Ko)(this,b),(0,ta.Ko)(this,w),(0,ta.Ko)(this,v),(0,ta.Ko)(this,C),(0,ta.Ko)(this,k),(0,ta.Ko)(this,A),(0,ta.Ko)(this,_),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,(0,ta.Ko)(this,u,void 0),(0,ta.Ko)(this,h,void 0),this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,to.K)(e[0])})},this.onChainChanged=e=>{let t=Number(e),r=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:r}})},this.onDisconnect=()=>{(0,ta.U9)(this,C,E).call(this,[]),this.emit("disconnect")},this.onDisplayUri=e=>{this.emit("message",{type:"display_uri",data:e})},this.onConnect=()=>{this.emit("connect",{})},(0,ta.U9)(this,d,p).call(this)}async connect({chainId:e,pairingTopic:t}={}){try{let r=e;if(!r){let e=this.storage?.getItem("store"),t=e?.state?.data?.chain?.id;r=t&&!this.isChainUnsupported(t)?t:this.chains[0]?.id}if(!r)throw Error("No chains found on connector.");let n=await this.getProvider();(0,ta.U9)(this,w,y).call(this);let i=(0,ta.U9)(this,b,g).call(this);if(n.session&&i&&await n.disconnect(),!n.session||i){let e=this.chains.filter(e=>e.id!==r).map(e=>e.id);this.emit("message",{type:"connecting"}),await n.connect({pairingTopic:t,optionalChains:[r,...e]}),(0,ta.U9)(this,C,E).call(this,this.chains.map(({id:e})=>e))}let a=await n.enable(),o=(0,to.K)(a[0]),s=await this.getChainId(),l=this.isChainUnsupported(s);return{account:o,chain:{id:s,unsupported:l}}}catch(e){if(/user rejected/i.test(e?.message))throw new ts.ab(e);throw e}}async disconnect(){let e=await this.getProvider();try{await e.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{(0,ta.U9)(this,v,x).call(this),(0,ta.U9)(this,C,E).call(this,[])}}async getAccount(){let{accounts:e}=await this.getProvider();return(0,to.K)(e[0])}async getChainId(){let{chainId:e}=await this.getProvider();return e}async getProvider({chainId:e}={}){return(0,ta.ac)(this,u)||await (0,ta.U9)(this,d,p).call(this),e&&await this.switchChain(e),(0,ta.ac)(this,u)}async getWalletClient({chainId:e}={}){let[t,r]=await Promise.all([this.getProvider({chainId:e}),this.getAccount()]),n=this.chains.find(t=>t.id===e);if(!t)throw Error("provider is required.");return(0,tl.K)({account:r,chain:n,transport:(0,tc.P)(t)})}async isAuthorized(){try{let[e,t]=await Promise.all([this.getAccount(),this.getProvider()]),r=(0,ta.U9)(this,b,g).call(this);if(!e)return!1;if(r&&t.session){try{await t.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(e){let t=this.chains.find(t=>t.id===e);if(!t)throw new ts.x3(Error("chain not found on connector."));try{let r=await this.getProvider(),n=(0,ta.U9)(this,A,P).call(this),i=(0,ta.U9)(this,_,D).call(this),a=n.includes(e);if(!a&&i.includes(tA)){await r.request({method:tA,params:[{chainId:(0,tu.eC)(t.id),blockExplorerUrls:[t.blockExplorers?.default?.url],chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[...t.rpcUrls.default.http]}]});let n=(0,ta.U9)(this,k,S).call(this);n.push(e),(0,ta.U9)(this,C,E).call(this,n)}return await r.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,tu.eC)(e)}]}),t}catch(t){let e="string"==typeof t?t:t?.message;if(/user rejected request/i.test(e))throw new ts.ab(t);throw new ts.x3(t)}}};u=new WeakMap,h=new WeakMap,d=new WeakSet,p=async function(){return(0,ta.ac)(this,h)||"undefined"==typeof window||(0,ta.qx)(this,h,(0,ta.U9)(this,f,m).call(this)),(0,ta.ac)(this,h)},f=new WeakSet,m=async function(){let{EthereumProvider:e}=await r.e(631).then(r.bind(r,75631)),t=this.chains.map(({id:e})=>e);if(t.length){let{projectId:r,showQrModal:n=!0,qrModalOptions:i,metadata:a,relayUrl:o}=this.options;(0,ta.qx)(this,u,await e.init({showQrModal:n,qrModalOptions:i,projectId:r,optionalChains:t,rpcMap:Object.fromEntries(this.chains.map(e=>[e.id,e.rpcUrls.default.http[0]])),metadata:a,relayUrl:o}))}},b=new WeakSet,g=function(){let e=(0,ta.U9)(this,_,D).call(this);if(e.includes(tA)||!this.options.isNewChainsStale)return!1;let t=(0,ta.U9)(this,k,S).call(this),r=this.chains.map(({id:e})=>e),n=(0,ta.U9)(this,A,P).call(this);return(!n.length||!!n.some(e=>r.includes(e)))&&!r.every(e=>t.includes(e))},w=new WeakSet,y=function(){(0,ta.ac)(this,u)&&((0,ta.U9)(this,v,x).call(this),(0,ta.ac)(this,u).on("accountsChanged",this.onAccountsChanged),(0,ta.ac)(this,u).on("chainChanged",this.onChainChanged),(0,ta.ac)(this,u).on("disconnect",this.onDisconnect),(0,ta.ac)(this,u).on("session_delete",this.onDisconnect),(0,ta.ac)(this,u).on("display_uri",this.onDisplayUri),(0,ta.ac)(this,u).on("connect",this.onConnect))},v=new WeakSet,x=function(){(0,ta.ac)(this,u)&&((0,ta.ac)(this,u).removeListener("accountsChanged",this.onAccountsChanged),(0,ta.ac)(this,u).removeListener("chainChanged",this.onChainChanged),(0,ta.ac)(this,u).removeListener("disconnect",this.onDisconnect),(0,ta.ac)(this,u).removeListener("session_delete",this.onDisconnect),(0,ta.ac)(this,u).removeListener("display_uri",this.onDisplayUri),(0,ta.ac)(this,u).removeListener("connect",this.onConnect))},C=new WeakSet,E=function(e){this.storage?.setItem(tS,e)},k=new WeakSet,S=function(){return this.storage?.getItem(tS)??[]},A=new WeakSet,P=function(){if(!(0,ta.ac)(this,u))return[];let e=ta.ac(this,u).session?.namespaces;if(!e)return[];let t=tE(e),r=t[tk]?.chains?.map(e=>parseInt(e.split(":")[1]||""));return r??[]},_=new WeakSet,D=function(){if(!(0,ta.ac)(this,u))return[];let e=ta.ac(this,u).session?.namespaces;if(!e)return[];let t=tE(e),r=t[tk]?.methods;return r??[]};let t_=T.j1.getBlockchainApiUrl();function tD({projectId:e,chains:t,metadata:r}){let{publicClient:n}=(0,$.QB)(t,[function({projectId:e}){return function(t){if(![1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280].includes(t.id))return null;let r=`${t_}/v1/?chainId=${e2.EIP155}:${t.id}&projectId=${e}`;return{chain:{...t,rpcUrls:{...t.rpcUrls,default:{http:[r]}}},rpcUrls:{http:[r]}}}}({projectId:e}),function(e){return e.rpcUrls.public.http[0]?{chain:e,rpcUrls:e.rpcUrls.public}:null}]);return(0,tr._g)({autoConnect:!0,connectors:[new tP({chains:t,options:{projectId:e,showQrModal:!1,metadata:r}}),new te({chains:t}),new e4._({chains:t,options:{shimDisconnect:!0}}),new th({chains:t,options:{appName:r?.name??"Unknown"}})],publicClient:n})}function t$(e){return!i&&(n=i=new e6({...e,_sdkVersion:`react-wagmi-${e2.VERSION}`})),i}},37380:function(e,t,r){"use strict";r.d(t,{Cb:function(){return o},SB:function(){return s}});var n=r(97286);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i={attribute:!0,type:String,converter:n.Ts,reflect:!1,hasChanged:n.Qu},a=(e=i,t,r)=>{let{kind:n,metadata:a}=r,o=globalThis.litPropertyMetadata.get(a);if(void 0===o&&globalThis.litPropertyMetadata.set(a,o=new Map),o.set(r.name,e),"accessor"===n){let{name:n}=r;return{set(r){let i=t.get.call(this);t.set.call(this,r),this.requestUpdate(n,i,e)},init(t){return void 0!==t&&this.C(n,void 0,e),t}}}if("setter"===n){let{name:n}=r;return function(r){let i=this[n];t.call(this,r),this.requestUpdate(n,i,e)}}throw Error("Unsupported decorator location: "+n)};function o(e){return(t,r)=>"object"==typeof r?a(e,t,r):((e,t,r)=>{let n=t.hasOwnProperty(r);return t.constructor.createProperty(r,n?{...e,wrapped:!0}:e),n?Object.getOwnPropertyDescriptor(t,r):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function s(e){return o({...e,state:!0,attribute:!1})}},35592:function(e,t,r){"use strict";r.d(t,{o:function(){return i}});var n=r(69699);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let i=e=>e??n.Ld},77996:function(e,t,r){"use strict";r.d(t,{oi:function(){return ep},iv:function(){return c},dy:function(){return V},YP:function(){return K},$m:function(){return l}}),r(97286),r(69699);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=globalThis,i=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap;class s{constructor(e,t,r){if(this._$cssResult$=!0,r!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(i&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&o.set(t,e))}return e}toString(){return this.cssText}}let l=e=>new s("string"==typeof e?e:e+"",void 0,a),c=(e,...t)=>{let r=1===e.length?e[0]:t.reduce((t,r,n)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[n+1],e[0]);return new s(r,e,a)},u=(e,t)=>{if(i)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),i=n.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}},h=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return l(t)})(e):e,{is:d,defineProperty:p,getOwnPropertyDescriptor:f,getOwnPropertyNames:m,getOwnPropertySymbols:b,getPrototypeOf:g}=Object,w=globalThis,y=w.trustedTypes,v=y?y.emptyScript:"",x=w.reactiveElementPolyfillSupport,C=(e,t)=>e,E={toAttribute(e,t){switch(t){case Boolean:e=e?v:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},k=(e,t)=>!d(e,t),S={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:k};Symbol.metadata??=Symbol("metadata"),w.litPropertyMetadata??=new WeakMap;class A extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=S){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),n=this.getPropertyDescriptor(e,r,t);void 0!==n&&p(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){let{get:n,set:i}=f(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){let a=n?.call(this);i.call(this,t),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??S}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;let e=g(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){let e=this.properties,t=[...m(e),...b(e)];for(let r of t)this.createProperty(r,e[r])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let e of r)t.unshift(h(e))}else void 0!==e&&t.push(h(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return u(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){let r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(void 0!==n&&!0===r.reflect){let i=(void 0!==r.converter?.toAttribute?r.converter:E).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){let r=this.constructor,n=r._$Eh.get(e);if(void 0!==n&&this._$Em!==n){let e=r.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:E;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r,n=!1,i){if(void 0!==e){if(!((r??=this.constructor.getPropertyOptions(e)).hasChanged??k)(n?i:this[e],t))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],r)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$ES?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(e){}firstUpdated(e){}}A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[C("elementProperties")]=new Map,A[C("finalized")]=new Map,x?.({ReactiveElement:A}),(w.reactiveElementVersions??=[]).push("2.0.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let P=globalThis,_=P.trustedTypes,D=_?_.createPolicy("lit-html",{createHTML:e=>e}):void 0,$="$lit$",O=`lit$${(Math.random()+"").slice(9)}$`,T="?"+O,I=`<${T}>`,R=document,N=()=>R.createComment(""),U=e=>null===e||"object"!=typeof e&&"function"!=typeof e,B=Array.isArray,M=e=>B(e)||"function"==typeof e?.[Symbol.iterator],j="[ 	\n\f\r]",L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,z=/>/g,H=RegExp(`>|${j}(?:([^\\s"'>=/]+)(${j}*=${j}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,q=/"/g,G=/^(?:script|style|textarea|title)$/i,Z=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),V=Z(1),K=Z(2),Q=Symbol.for("lit-noChange"),Y=Symbol.for("lit-nothing"),X=new WeakMap,J=R.createTreeWalker(R,129);function ee(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==D?D.createHTML(t):t}let et=(e,t)=>{let r=e.length-1,n=[],i,a=2===t?"<svg>":"",o=L;for(let t=0;t<r;t++){let r=e[t],s,l,c=-1,u=0;for(;u<r.length&&(o.lastIndex=u,null!==(l=o.exec(r)));)u=o.lastIndex,o===L?"!--"===l[1]?o=F:void 0!==l[1]?o=z:void 0!==l[2]?(G.test(l[2])&&(i=RegExp("</"+l[2],"g")),o=H):void 0!==l[3]&&(o=H):o===H?">"===l[0]?(o=i??L,c=-1):void 0===l[1]?c=-2:(c=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?H:'"'===l[3]?q:W):o===q||o===W?o=H:o===F||o===z?o=L:(o=H,i=void 0);let h=o===H&&e[t+1].startsWith("/>")?" ":"";a+=o===L?r+I:c>=0?(n.push(s),r.slice(0,c)+$+r.slice(c)+O+h):r+O+(-2===c?t:h)}return[ee(e,a+(e[r]||"<?>")+(2===t?"</svg>":"")),n]};class er{constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let i=0,a=0,o=e.length-1,s=this.parts,[l,c]=et(e,t);if(this.el=er.createElement(l,r),J.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=J.nextNode())&&s.length<o;){if(1===n.nodeType){if(n.hasAttributes())for(let e of n.getAttributeNames())if(e.endsWith($)){let t=c[a++],r=n.getAttribute(e).split(O),o=/([.?@])?(.*)/.exec(t);s.push({type:1,index:i,name:o[2],strings:r,ctor:"."===o[1]?es:"?"===o[1]?el:"@"===o[1]?ec:eo}),n.removeAttribute(e)}else e.startsWith(O)&&(s.push({type:6,index:i}),n.removeAttribute(e));if(G.test(n.tagName)){let e=n.textContent.split(O),t=e.length-1;if(t>0){n.textContent=_?_.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],N()),J.nextNode(),s.push({type:2,index:++i});n.append(e[t],N())}}}else if(8===n.nodeType){if(n.data===T)s.push({type:2,index:i});else{let e=-1;for(;-1!==(e=n.data.indexOf(O,e+1));)s.push({type:7,index:i}),e+=O.length-1}}i++}}static createElement(e,t){let r=R.createElement("template");return r.innerHTML=e,r}}function en(e,t,r=e,n){if(t===Q)return t;let i=void 0!==n?r._$Co?.[n]:r._$Cl,a=U(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),void 0===a?i=void 0:(i=new a(e))._$AT(e,r,n),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(t=en(e,i._$AS(e,t.values),i,n)),t}class ei{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,n=(e?.creationScope??R).importNode(t,!0);J.currentNode=n;let i=J.nextNode(),a=0,o=0,s=r[0];for(;void 0!==s;){if(a===s.index){let t;2===s.type?t=new ea(i,i.nextSibling,this,e):1===s.type?t=new s.ctor(i,s.name,s.strings,this,e):6===s.type&&(t=new eu(i,this,e)),this._$AV.push(t),s=r[++o]}a!==s?.index&&(i=J.nextNode(),a++)}return J.currentNode=R,n}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class ea{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=Y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){U(e=en(this,e,t))?e===Y||null==e||""===e?(this._$AH!==Y&&this._$AR(),this._$AH=Y):e!==this._$AH&&e!==Q&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):M(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==Y&&U(this._$AH)?this._$AA.nextSibling.data=e:this.$(R.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:r}=e,n="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=er.createElement(ee(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(t);else{let e=new ei(n,this),r=e.u(this.options);e.p(t),this.$(r),this._$AH=e}}_$AC(e){let t=X.get(e.strings);return void 0===t&&X.set(e.strings,t=new er(e)),t}T(e){B(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,n=0;for(let i of e)n===t.length?t.push(r=new ea(this.k(N()),this.k(N()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class eo{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,i){this.type=1,this._$AH=Y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Y}_$AI(e,t=this,r,n){let i=this.strings,a=!1;if(void 0===i)(a=!U(e=en(this,e,t,0))||e!==this._$AH&&e!==Q)&&(this._$AH=e);else{let n,o;let s=e;for(e=i[0],n=0;n<i.length-1;n++)(o=en(this,s[r+n],t,n))===Q&&(o=this._$AH[n]),a||=!U(o)||o!==this._$AH[n],o===Y?e=Y:e!==Y&&(e+=(o??"")+i[n+1]),this._$AH[n]=o}a&&!n&&this.j(e)}j(e){e===Y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class es extends eo{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Y?void 0:e}}class el extends eo{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Y)}}class ec extends eo{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){if((e=en(this,e,t,0)??Y)===Q)return;let r=this._$AH,n=e===Y&&r!==Y||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==Y&&(r===Y||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class eu{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){en(this,e)}}let eh=P.litHtmlPolyfillSupport;eh?.(er,ea),(P.litHtmlVersions??=[]).push("3.0.1");let ed=(e,t,r)=>{let n=r?.renderBefore??t,i=n._$litPart$;if(void 0===i){let e=r?.renderBefore??null;n._$litPart$=i=new ea(t.insertBefore(N(),e),e,void 0,r??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ep extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ed(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Q}}ep._$litElement$=!0,ep.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:ep});let ef=globalThis.litElementPolyfillSupport;ef?.({LitElement:ep}),(globalThis.litElementVersions??=[]).push("4.0.1")},97286:function(e,t,r){"use strict";r.d(t,{Ts:function(){return C},Qu:function(){return E}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=globalThis,i=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,a=Symbol(),o=new WeakMap;class s{constructor(e,t,r){if(this._$cssResult$=!0,r!==a)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(i&&void 0===e){let r=void 0!==t&&1===t.length;r&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&o.set(t,e))}return e}toString(){return this.cssText}}let l=e=>new s("string"==typeof e?e:e+"",void 0,a),c=(e,t)=>{if(i)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let r of t){let t=document.createElement("style"),i=n.litNonce;void 0!==i&&t.setAttribute("nonce",i),t.textContent=r.cssText,e.appendChild(t)}},u=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let r of e.cssRules)t+=r.cssText;return l(t)})(e):e,{is:h,defineProperty:d,getOwnPropertyDescriptor:p,getOwnPropertyNames:f,getOwnPropertySymbols:m,getPrototypeOf:b}=Object,g=globalThis,w=g.trustedTypes,y=w?w.emptyScript:"",v=g.reactiveElementPolyfillSupport,x=(e,t)=>e,C={toAttribute(e,t){switch(t){case Boolean:e=e?y:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=null!==e;break;case Number:r=null===e?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch(e){r=null}}return r}},E=(e,t)=>!h(e,t),k={attribute:!0,type:String,converter:C,reflect:!1,hasChanged:E};Symbol.metadata??=Symbol("metadata"),g.litPropertyMetadata??=new WeakMap;class S extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=k){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let r=Symbol(),n=this.getPropertyDescriptor(e,r,t);void 0!==n&&d(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){let{get:n,set:i}=p(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return n?.call(this)},set(t){let a=n?.call(this);i.call(this,t),this.requestUpdate(e,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??k}static _$Ei(){if(this.hasOwnProperty(x("elementProperties")))return;let e=b(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(x("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(x("properties"))){let e=this.properties,t=[...f(e),...m(e)];for(let r of t)this.createProperty(r,e[r])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,r]of t)this.elementProperties.set(e,r)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let r=this._$Eu(e,t);void 0!==r&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let r=new Set(e.flat(1/0).reverse());for(let e of r)t.unshift(u(e))}else void 0!==e&&t.push(u(e));return t}static _$Eu(e,t){let r=t.attribute;return!1===r?void 0:"string"==typeof r?r:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return c(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$EO(e,t){let r=this.constructor.elementProperties.get(e),n=this.constructor._$Eu(e,r);if(void 0!==n&&!0===r.reflect){let i=(void 0!==r.converter?.toAttribute?r.converter:C).toAttribute(t,r.type);this._$Em=e,null==i?this.removeAttribute(n):this.setAttribute(n,i),this._$Em=null}}_$AK(e,t){let r=this.constructor,n=r._$Eh.get(e);if(void 0!==n&&this._$Em!==n){let e=r.getPropertyOptions(n),i="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:C;this._$Em=n,this[n]=i.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,r,n=!1,i){if(void 0!==e){if(!((r??=this.constructor.getPropertyOptions(e)).hasChanged??E)(n?i:this[e],t))return;this.C(e,t,r)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,r){this._$AL.has(e)||this._$AL.set(e,t),!0===r.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,r]of e)!0!==r.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],r)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$ES?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(e){}firstUpdated(e){}}S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[x("elementProperties")]=new Map,S[x("finalized")]=new Map,v?.({ReactiveElement:S}),(g.reactiveElementVersions??=[]).push("2.0.1")},69699:function(e,t,r){"use strict";r.d(t,{Al:function(){return j},Jb:function(){return k},Ld:function(){return S}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let n=globalThis,i=n.trustedTypes,a=i?i.createPolicy("lit-html",{createHTML:e=>e}):void 0,o="$lit$",s=`lit$${(Math.random()+"").slice(9)}$`,l="?"+s,c=`<${l}>`,u=document,h=()=>u.createComment(""),d=e=>null===e||"object"!=typeof e&&"function"!=typeof e,p=Array.isArray,f=e=>p(e)||"function"==typeof e?.[Symbol.iterator],m="[ 	\n\f\r]",b=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,g=/-->/g,w=/>/g,y=RegExp(`>|${m}(?:([^\\s"'>=/]+)(${m}*=${m}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),v=/'/g,x=/"/g,C=/^(?:script|style|textarea|title)$/i,E=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),k=(E(1),E(2),Symbol.for("lit-noChange")),S=Symbol.for("lit-nothing"),A=new WeakMap,P=u.createTreeWalker(u,129);function _(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==a?a.createHTML(t):t}let D=(e,t)=>{let r=e.length-1,n=[],i,a=2===t?"<svg>":"",l=b;for(let t=0;t<r;t++){let r=e[t],u,h,d=-1,p=0;for(;p<r.length&&(l.lastIndex=p,null!==(h=l.exec(r)));)p=l.lastIndex,l===b?"!--"===h[1]?l=g:void 0!==h[1]?l=w:void 0!==h[2]?(C.test(h[2])&&(i=RegExp("</"+h[2],"g")),l=y):void 0!==h[3]&&(l=y):l===y?">"===h[0]?(l=i??b,d=-1):void 0===h[1]?d=-2:(d=l.lastIndex-h[2].length,u=h[1],l=void 0===h[3]?y:'"'===h[3]?x:v):l===x||l===v?l=y:l===g||l===w?l=b:(l=y,i=void 0);let f=l===y&&e[t+1].startsWith("/>")?" ":"";a+=l===b?r+c:d>=0?(n.push(u),r.slice(0,d)+o+r.slice(d)+s+f):r+s+(-2===d?t:f)}return[_(e,a+(e[r]||"<?>")+(2===t?"</svg>":"")),n]};class ${constructor({strings:e,_$litType$:t},r){let n;this.parts=[];let a=0,c=0,u=e.length-1,d=this.parts,[p,f]=D(e,t);if(this.el=$.createElement(p,r),P.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(n=P.nextNode())&&d.length<u;){if(1===n.nodeType){if(n.hasAttributes())for(let e of n.getAttributeNames())if(e.endsWith(o)){let t=f[c++],r=n.getAttribute(e).split(s),i=/([.?@])?(.*)/.exec(t);d.push({type:1,index:a,name:i[2],strings:r,ctor:"."===i[1]?N:"?"===i[1]?U:"@"===i[1]?B:R}),n.removeAttribute(e)}else e.startsWith(s)&&(d.push({type:6,index:a}),n.removeAttribute(e));if(C.test(n.tagName)){let e=n.textContent.split(s),t=e.length-1;if(t>0){n.textContent=i?i.emptyScript:"";for(let r=0;r<t;r++)n.append(e[r],h()),P.nextNode(),d.push({type:2,index:++a});n.append(e[t],h())}}}else if(8===n.nodeType){if(n.data===l)d.push({type:2,index:a});else{let e=-1;for(;-1!==(e=n.data.indexOf(s,e+1));)d.push({type:7,index:a}),e+=s.length-1}}a++}}static createElement(e,t){let r=u.createElement("template");return r.innerHTML=e,r}}function O(e,t,r=e,n){if(t===k)return t;let i=void 0!==n?r._$Co?.[n]:r._$Cl,a=d(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),void 0===a?i=void 0:(i=new a(e))._$AT(e,r,n),void 0!==n?(r._$Co??=[])[n]=i:r._$Cl=i),void 0!==i&&(t=O(e,i._$AS(e,t.values),i,n)),t}class T{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:r}=this._$AD,n=(e?.creationScope??u).importNode(t,!0);P.currentNode=n;let i=P.nextNode(),a=0,o=0,s=r[0];for(;void 0!==s;){if(a===s.index){let t;2===s.type?t=new I(i,i.nextSibling,this,e):1===s.type?t=new s.ctor(i,s.name,s.strings,this,e):6===s.type&&(t=new M(i,this,e)),this._$AV.push(t),s=r[++o]}a!==s?.index&&(i=P.nextNode(),a++)}return P.currentNode=u,n}p(e){let t=0;for(let r of this._$AV)void 0!==r&&(void 0!==r.strings?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}}class I{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,r,n){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=r,this.options=n,this._$Cv=n?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){d(e=O(this,e,t))?e===S||null==e||""===e?(this._$AH!==S&&this._$AR(),this._$AH=S):e!==this._$AH&&e!==k&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):f(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==S&&d(this._$AH)?this._$AA.nextSibling.data=e:this.$(u.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:r}=e,n="number"==typeof r?this._$AC(e):(void 0===r.el&&(r.el=$.createElement(_(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===n)this._$AH.p(t);else{let e=new T(n,this),r=e.u(this.options);e.p(t),this.$(r),this._$AH=e}}_$AC(e){let t=A.get(e.strings);return void 0===t&&A.set(e.strings,t=new $(e)),t}T(e){p(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,r,n=0;for(let i of e)n===t.length?t.push(r=new I(this.k(h()),this.k(h()),this,this.options)):r=t[n],r._$AI(i),n++;n<t.length&&(this._$AR(r&&r._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,n,i){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=i,r.length>2||""!==r[0]||""!==r[1]?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=S}_$AI(e,t=this,r,n){let i=this.strings,a=!1;if(void 0===i)(a=!d(e=O(this,e,t,0))||e!==this._$AH&&e!==k)&&(this._$AH=e);else{let n,o;let s=e;for(e=i[0],n=0;n<i.length-1;n++)(o=O(this,s[r+n],t,n))===k&&(o=this._$AH[n]),a||=!d(o)||o!==this._$AH[n],o===S?e=S:e!==S&&(e+=(o??"")+i[n+1]),this._$AH[n]=o}a&&!n&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class N extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}}class U extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==S)}}class B extends R{constructor(e,t,r,n,i){super(e,t,r,n,i),this.type=5}_$AI(e,t=this){if((e=O(this,e,t,0)??S)===k)return;let r=this._$AH,n=e===S&&r!==S||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,i=e!==S&&(r===S||n);n&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class M{constructor(e,t,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){O(this,e)}}let j={S:o,A:s,P:l,C:1,M:D,L:T,R:f,V:O,D:I,I:R,H:U,N:B,U:N,B:M},L=n.litHtmlPolyfillSupport;L?.($,I),(n.litHtmlVersions??=[]).push("3.0.1")},55678:function(e,t,r){"use strict";r.d(t,{Am:function(){return $},Ix:function(){return C}});var n=r(67294),i=r(86010);let a=e=>"number"==typeof e&&!isNaN(e),o=e=>"string"==typeof e,s=e=>"function"==typeof e,l=e=>o(e)||s(e)?e:null,c=e=>(0,n.isValidElement)(e)||o(e)||s(e)||a(e);function u(e){let{enter:t,exit:r,appendPosition:i=!1,collapse:a=!0,collapseDuration:o=300}=e;return function(e){let{children:s,position:l,preventExitTransition:c,done:u,nodeRef:h,isIn:d}=e,p=i?`${t}--${l}`:t,f=i?`${r}--${l}`:r,m=(0,n.useRef)(0);return(0,n.useLayoutEffect)(()=>{let e=h.current,t=p.split(" "),r=n=>{n.target===h.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",r),e.removeEventListener("animationcancel",r),0===m.current&&"animationcancel"!==n.type&&e.classList.remove(...t))};e.classList.add(...t),e.addEventListener("animationend",r),e.addEventListener("animationcancel",r)},[]),(0,n.useEffect)(()=>{let e=h.current,t=()=>{e.removeEventListener("animationend",t),a?function(e,t,r){void 0===r&&(r=300);let{scrollHeight:n,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=n+"px",i.transition=`all ${r}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,r)})})}(e,u,o):u()};d||(c?t():(m.current=1,e.className+=` ${f}`,e.addEventListener("animationend",t)))},[d]),n.createElement(n.Fragment,null,s)}}function h(e,t){return null!=e?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}let d={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){let r=this.list.get(e).filter(e=>e!==t);return this.list.set(e,r),this}return this.list.delete(e),this},cancelEmit(e){let t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{let r=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(r)})}},p=e=>{let{theme:t,type:r,...i}=e;return n.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":`var(--toastify-icon-color-${r})`,...i})},f={info:function(e){return n.createElement(p,{...e},n.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return n.createElement(p,{...e},n.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return n.createElement(p,{...e},n.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return n.createElement(p,{...e},n.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return n.createElement("div",{className:"Toastify__spinner"})}};function m(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function b(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function g(e){let{closeToast:t,theme:r,ariaLabel:i="close"}=e;return n.createElement("button",{className:`Toastify__close-button Toastify__close-button--${r}`,type:"button",onClick:e=>{e.stopPropagation(),t(e)},"aria-label":i},n.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},n.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function w(e){let{delay:t,isRunning:r,closeToast:a,type:o="default",hide:l,className:c,style:u,controlledProgress:h,progress:d,rtl:p,isIn:f,theme:m}=e,b=l||h&&0===d,g={...u,animationDuration:`${t}ms`,animationPlayState:r?"running":"paused",opacity:b?0:1};h&&(g.transform=`scaleX(${d})`);let w=(0,i.default)("Toastify__progress-bar",h?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${m}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":p}),y=s(c)?c({rtl:p,type:o,defaultClassName:w}):(0,i.default)(w,c);return n.createElement("div",{role:"progressbar","aria-hidden":b?"true":"false","aria-label":"notification timer",className:y,style:g,[h&&d>=1?"onTransitionEnd":"onAnimationEnd"]:h&&d<1?null:()=>{f&&a()}})}let y=e=>{let{isRunning:t,preventExitTransition:r,toastRef:a,eventHandlers:o}=function(e){let[t,r]=(0,n.useState)(!1),[i,a]=(0,n.useState)(!1),o=(0,n.useRef)(null),l=(0,n.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,c=(0,n.useRef)(e),{autoClose:u,pauseOnHover:h,closeToast:d,onClick:p,closeOnClick:f}=e;function g(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),l.didMove=!1,document.addEventListener("mousemove",x),document.addEventListener("mouseup",C),document.addEventListener("touchmove",x),document.addEventListener("touchend",C);let r=o.current;l.canCloseOnClick=!0,l.canDrag=!0,l.boundingRect=r.getBoundingClientRect(),r.style.transition="",l.x=m(t.nativeEvent),l.y=b(t.nativeEvent),"x"===e.draggableDirection?(l.start=l.x,l.removalDistance=r.offsetWidth*(e.draggablePercent/100)):(l.start=l.y,l.removalDistance=r.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function w(t){if(l.boundingRect){let{top:r,bottom:n,left:i,right:a}=l.boundingRect;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&l.x>=i&&l.x<=a&&l.y>=r&&l.y<=n?v():y()}}function y(){r(!0)}function v(){r(!1)}function x(r){let n=o.current;l.canDrag&&n&&(l.didMove=!0,t&&v(),l.x=m(r),l.y=b(r),l.delta="x"===e.draggableDirection?l.x-l.start:l.y-l.start,l.start!==l.x&&(l.canCloseOnClick=!1),n.style.transform=`translate${e.draggableDirection}(${l.delta}px)`,n.style.opacity=""+(1-Math.abs(l.delta/l.removalDistance)))}function C(){document.removeEventListener("mousemove",x),document.removeEventListener("mouseup",C),document.removeEventListener("touchmove",x),document.removeEventListener("touchend",C);let t=o.current;if(l.canDrag&&l.didMove&&t){if(l.canDrag=!1,Math.abs(l.delta)>l.removalDistance)return a(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform=`translate${e.draggableDirection}(0)`,t.style.opacity="1"}}(0,n.useEffect)(()=>{c.current=e}),(0,n.useEffect)(()=>(o.current&&o.current.addEventListener("d",y,{once:!0}),s(e.onOpen)&&e.onOpen((0,n.isValidElement)(e.children)&&e.children.props),()=>{let e=c.current;s(e.onClose)&&e.onClose((0,n.isValidElement)(e.children)&&e.children.props)}),[]),(0,n.useEffect)(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||v(),window.addEventListener("focus",y),window.addEventListener("blur",v)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",y),window.removeEventListener("blur",v))}),[e.pauseOnFocusLoss]);let E={onMouseDown:g,onTouchStart:g,onMouseUp:w,onTouchEnd:w};return u&&h&&(E.onMouseEnter=v,E.onMouseLeave=y),f&&(E.onClick=e=>{p&&p(e),l.canCloseOnClick&&d()}),{playToast:y,pauseToast:v,isRunning:t,preventExitTransition:i,toastRef:o,eventHandlers:E}}(e),{closeButton:l,children:c,autoClose:u,onClick:h,type:d,hideProgressBar:p,closeToast:f,transition:y,position:v,className:x,style:C,bodyClassName:E,bodyStyle:k,progressClassName:S,progressStyle:A,updateId:P,role:_,progress:D,rtl:$,toastId:O,deleteToast:T,isIn:I,isLoading:R,iconOut:N,closeOnClick:U,theme:B}=e,M=(0,i.default)("Toastify__toast",`Toastify__toast-theme--${B}`,`Toastify__toast--${d}`,{"Toastify__toast--rtl":$},{"Toastify__toast--close-on-click":U}),j=s(x)?x({rtl:$,position:v,type:d,defaultClassName:M}):(0,i.default)(M,x),L=!!D||!u,F={closeToast:f,type:d,theme:B},z=null;return!1===l||(z=s(l)?l(F):(0,n.isValidElement)(l)?(0,n.cloneElement)(l,F):g(F)),n.createElement(y,{isIn:I,done:T,position:v,preventExitTransition:r,nodeRef:a},n.createElement("div",{id:O,onClick:h,className:j,...o,style:C,ref:a},n.createElement("div",{...I&&{role:_},className:s(E)?E({type:d}):(0,i.default)("Toastify__toast-body",E),style:k},null!=N&&n.createElement("div",{className:(0,i.default)("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!R})},N),n.createElement("div",null,c)),z,n.createElement(w,{...P&&!L?{key:`pb-${P}`}:{},rtl:$,theme:B,delay:u,isRunning:t,isIn:I,closeToast:f,hide:p,type:d,style:A,className:S,controlledProgress:L,progress:D||0})))},v=function(e,t){return void 0===t&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},x=u(v("bounce",!0)),C=(u(v("slide",!0)),u(v("zoom")),u(v("flip")),(0,n.forwardRef)((e,t)=>{let{getToastToRender:r,containerRef:u,isToastActive:p}=function(e){let[,t]=(0,n.useReducer)(e=>e+1,0),[r,i]=(0,n.useState)([]),u=(0,n.useRef)(null),p=(0,n.useRef)(new Map).current,m=e=>-1!==r.indexOf(e),b=(0,n.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:m,getToast:e=>p.get(e)}).current;function g(e){let{containerId:t}=e,{limit:r}=b.props;!r||t&&b.containerId!==t||(b.count-=b.queue.length,b.queue=[])}function w(e){i(t=>null==e?[]:t.filter(t=>t!==e))}function y(){let{toastContent:e,toastProps:t,staleId:r}=b.queue.shift();x(e,t,r)}function v(e,r){var i,m;let{delay:g,staleId:v,...C}=r;if(!c(e)||!u.current||b.props.enableMultiContainer&&C.containerId!==b.props.containerId||p.has(C.toastId)&&null==C.updateId)return;let{toastId:E,updateId:k,data:S}=C,{props:A}=b,P=()=>w(E),_=null==k;_&&b.count++;let D={...A,style:A.toastStyle,key:b.toastKey++,...Object.fromEntries(Object.entries(C).filter(e=>{let[t,r]=e;return null!=r})),toastId:E,updateId:k,data:S,closeToast:P,isIn:!1,className:l(C.className||A.toastClassName),bodyClassName:l(C.bodyClassName||A.bodyClassName),progressClassName:l(C.progressClassName||A.progressClassName),autoClose:!C.isLoading&&(i=C.autoClose,m=A.autoClose,!1===i||a(i)&&i>0?i:m),deleteToast(){let e=h(p.get(E),"removed");p.delete(E),d.emit(4,e);let r=b.queue.length;if(b.count=null==E?b.count-b.displayedToast:b.count-1,b.count<0&&(b.count=0),r>0){let e=null==E?b.props.limit:1;if(1===r||1===e)b.displayedToast++,y();else{let t=e>r?r:e;b.displayedToast=t;for(let e=0;e<t;e++)y()}}else t()}};D.iconOut=function(e){let{theme:t,type:r,isLoading:i,icon:l}=e,c=null,u={theme:t,type:r};return!1===l||(s(l)?c=l(u):(0,n.isValidElement)(l)?c=(0,n.cloneElement)(l,u):o(l)||a(l)?c=l:i?c=f.spinner():r in f&&(c=f[r](u))),c}(D),s(C.onOpen)&&(D.onOpen=C.onOpen),s(C.onClose)&&(D.onClose=C.onClose),D.closeButton=A.closeButton,!1===C.closeButton||c(C.closeButton)?D.closeButton=C.closeButton:!0===C.closeButton&&(D.closeButton=!c(A.closeButton)||A.closeButton);let $=e;(0,n.isValidElement)(e)&&!o(e.type)?$=(0,n.cloneElement)(e,{closeToast:P,toastProps:D,data:S}):s(e)&&($=e({closeToast:P,toastProps:D,data:S})),A.limit&&A.limit>0&&b.count>A.limit&&_?b.queue.push({toastContent:$,toastProps:D,staleId:v}):a(g)?setTimeout(()=>{x($,D,v)},g):x($,D,v)}function x(e,t,r){let{toastId:n}=t;r&&p.delete(r);let a={content:e,props:t};p.set(n,a),i(e=>[...e,n].filter(e=>e!==r)),d.emit(4,h(a,null==a.props.updateId?"added":"updated"))}return(0,n.useEffect)(()=>(b.containerId=e.containerId,d.cancelEmit(3).on(0,v).on(1,e=>u.current&&w(e)).on(5,g).emit(2,b),()=>{p.clear(),d.emit(3,b)}),[]),(0,n.useEffect)(()=>{b.props=e,b.isToastActive=m,b.displayedToast=r.length}),{getToastToRender:function(t){let r=new Map,n=Array.from(p.values());return e.newestOnTop&&n.reverse(),n.forEach(e=>{let{position:t}=e.props;r.has(t)||r.set(t,[]),r.get(t).push(e)}),Array.from(r,e=>t(e[0],e[1]))},containerRef:u,isToastActive:m}}(e),{className:m,style:b,rtl:g,containerId:w}=e;return(0,n.useEffect)(()=>{t&&(t.current=u.current)},[]),n.createElement("div",{ref:u,className:"Toastify",id:w},r((e,t)=>{let r=t.length?{...b}:{...b,pointerEvents:"none"};return n.createElement("div",{className:function(e){let t=(0,i.default)("Toastify__toast-container",`Toastify__toast-container--${e}`,{"Toastify__toast-container--rtl":g});return s(m)?m({position:e,rtl:g,defaultClassName:t}):(0,i.default)(t,l(m))}(e),style:r,key:`container-${e}`},t.map((e,r)=>{let{content:i,props:a}=e;return n.createElement(y,{...a,isIn:p(a.toastId),style:{...a.style,"--nth":r+1,"--len":t.length},key:`toast-${a.key}`},i)}))}))}));C.displayName="ToastContainer",C.defaultProps={position:"top-right",transition:x,autoClose:5e3,closeButton:g,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let E,k=new Map,S=[],A=1;function P(e,t){return k.size>0?d.emit(0,e,t):S.push({content:e,options:t}),t.toastId}function _(e,t){return{...t,type:t&&t.type||e,toastId:t&&(o(t.toastId)||a(t.toastId))?t.toastId:""+A++}}function D(e){return(t,r)=>P(t,_(e,r))}function $(e,t){return P(e,_("default",t))}$.loading=(e,t)=>P(e,_("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),$.promise=function(e,t,r){let n,{pending:i,error:a,success:l}=t;i&&(n=o(i)?$.loading(i,r):$.loading(i.render,{...r,...i}));let c={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},u=(e,t,i)=>{if(null==t)return void $.dismiss(n);let a={type:e,...c,...r,data:i},s=o(t)?{render:t}:t;return n?$.update(n,{...a,...s}):$(s.render,{...a,...s}),i},h=s(e)?e():e;return h.then(e=>u("success",l,e)).catch(e=>u("error",a,e)),h},$.success=D("success"),$.info=D("info"),$.error=D("error"),$.warning=D("warning"),$.warn=$.warning,$.dark=(e,t)=>P(e,_("default",{theme:"dark",...t})),$.dismiss=e=>{k.size>0?d.emit(1,e):S=S.filter(t=>null!=e&&t.options.toastId!==e)},$.clearWaitingQueue=function(e){return void 0===e&&(e={}),d.emit(5,e)},$.isActive=e=>{let t=!1;return k.forEach(r=>{r.isToastActive&&r.isToastActive(e)&&(t=!0)}),t},$.update=function(e,t){void 0===t&&(t={}),setTimeout(()=>{let r=function(e,t){let{containerId:r}=t,n=k.get(r||E);return n&&n.getToast(e)}(e,t);if(r){let{props:n,content:i}=r,a={delay:100,...n,...t,toastId:t.toastId||e,updateId:""+A++};a.toastId!==e&&(a.staleId=e);let o=a.render||i;delete a.render,P(o,a)}},0)},$.done=e=>{$.update(e,{progress:1})},$.onChange=e=>(d.on(4,e),()=>{d.off(4,e)}),$.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},$.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},d.on(2,e=>{E=e.containerId||e,k.set(E,e),S.forEach(e=>{d.emit(0,e.content,e.options)}),S=[]}).on(3,e=>{k.delete(e.containerId||e),0===k.size&&d.off(0).off(1).off(5)})},53160:function(e,t,r){"use strict";r.d(t,{E:function(){return i}});var n=r(16867);function i(e=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?(0,n.P)(globalThis.Buffer.allocUnsafe(e)):new Uint8Array(e)}},20605:function(e,t,r){"use strict";r.d(t,{z:function(){return a}});var n=r(53160),i=r(16867);function a(e,t){t||(t=e.reduce((e,t)=>e+t.length,0));let r=(0,n.E)(t),a=0;for(let t of e)r.set(t,a),a+=t.length;return(0,i.P)(r)}},52217:function(e,t,r){"use strict";r.d(t,{m:function(){return a}});var n=r(73149),i=r(16867);function a(e,t="utf8"){let r=n.Z[t];if(!r)throw Error(`Unsupported encoding "${t}"`);return("utf8"===t||"utf-8"===t)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?(0,i.P)(globalThis.Buffer.from(e,"utf-8")):r.decoder.decode(`${r.prefix}${e}`)}},37466:function(e,t,r){"use strict";r.d(t,{BB:function(){return a.B},mL:function(){return i.m},zo:function(){return n.z}});var n=r(20605),i=r(52217),a=r(92263)},92263:function(e,t,r){"use strict";r.d(t,{B:function(){return i}});var n=r(73149);function i(e,t="utf8"){let r=n.Z[t];if(!r)throw Error(`Unsupported encoding "${t}"`);return("utf8"===t||"utf-8"===t)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?globalThis.Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("utf8"):r.encoder.encode(e).substring(1)}},16867:function(e,t,r){"use strict";function n(e){return null!=globalThis.Buffer?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e}r.d(t,{P:function(){return n}})},73149:function(e,t,r){"use strict";r.d(t,{Z:function(){return eG}});var n={};r.r(n),r.d(n,{identity:function(){return O}});var i={};r.r(i),r.d(i,{base2:function(){return T}});var a={};r.r(a),r.d(a,{base8:function(){return I}});var o={};r.r(o),r.d(o,{base10:function(){return R}});var s={};r.r(s),r.d(s,{base16:function(){return N},base16upper:function(){return U}});var l={};r.r(l),r.d(l,{base32:function(){return B},base32hex:function(){return F},base32hexpad:function(){return H},base32hexpadupper:function(){return W},base32hexupper:function(){return z},base32pad:function(){return j},base32padupper:function(){return L},base32upper:function(){return M},base32z:function(){return q}});var c={};r.r(c),r.d(c,{base36:function(){return G},base36upper:function(){return Z}});var u={};r.r(u),r.d(u,{base58btc:function(){return V},base58flickr:function(){return K}});var h={};r.r(h),r.d(h,{base64:function(){return Q},base64pad:function(){return Y},base64url:function(){return X},base64urlpad:function(){return J}});var d={};r.r(d),r.d(d,{base256emoji:function(){return en}});var p={};r.r(p),r.d(p,{sha256:function(){return ef},sha512:function(){return em}});var f={};r.r(f),r.d(f,{identity:function(){return eg}});var m={};r.r(m),r.d(m,{code:function(){return ey},decode:function(){return ex},encode:function(){return ev},name:function(){return ew}});var b={};r.r(b),r.d(b,{code:function(){return eS},decode:function(){return eP},encode:function(){return eA},name:function(){return ek}});var g=function(e,t){if(e.length>=255)throw TypeError("Alphabet too long");for(var r=new Uint8Array(256),n=0;n<r.length;n++)r[n]=255;for(var i=0;i<e.length;i++){var a=e.charAt(i),o=a.charCodeAt(0);if(255!==r[o])throw TypeError(a+" is ambiguous");r[o]=i}var s=e.length,l=e.charAt(0),c=Math.log(s)/Math.log(256),u=Math.log(256)/Math.log(s);function h(e){if("string"!=typeof e)throw TypeError("Expected String");if(0===e.length)return new Uint8Array;var t=0;if(" "!==e[0]){for(var n=0,i=0;e[t]===l;)n++,t++;for(var a=(e.length-t)*c+1>>>0,o=new Uint8Array(a);e[t];){var u=r[e.charCodeAt(t)];if(255===u)return;for(var h=0,d=a-1;(0!==u||h<i)&&-1!==d;d--,h++)u+=s*o[d]>>>0,o[d]=u%256>>>0,u=u/256>>>0;if(0!==u)throw Error("Non-zero carry");i=h,t++}if(" "!==e[t]){for(var p=a-i;p!==a&&0===o[p];)p++;for(var f=new Uint8Array(n+(a-p)),m=n;p!==a;)f[m++]=o[p++];return f}}}return{encode:function(t){if(t instanceof Uint8Array||(ArrayBuffer.isView(t)?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):Array.isArray(t)&&(t=Uint8Array.from(t))),!(t instanceof Uint8Array))throw TypeError("Expected Uint8Array");if(0===t.length)return"";for(var r=0,n=0,i=0,a=t.length;i!==a&&0===t[i];)i++,r++;for(var o=(a-i)*u+1>>>0,c=new Uint8Array(o);i!==a;){for(var h=t[i],d=0,p=o-1;(0!==h||d<n)&&-1!==p;p--,d++)h+=256*c[p]>>>0,c[p]=h%s>>>0,h=h/s>>>0;if(0!==h)throw Error("Non-zero carry");n=d,i++}for(var f=o-n;f!==o&&0===c[f];)f++;for(var m=l.repeat(r);f<o;++f)m+=e.charAt(c[f]);return m},decodeUnsafe:h,decode:function(e){var r=h(e);if(r)return r;throw Error(`Non-${t} character`)}}};new Uint8Array(0);let w=e=>{if(e instanceof Uint8Array&&"Uint8Array"===e.constructor.name)return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw Error("Unknown type, must be binary type")},y=e=>new TextEncoder().encode(e),v=e=>new TextDecoder().decode(e);class x{constructor(e,t,r){this.name=e,this.prefix=t,this.baseEncode=r}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}}class C{constructor(e,t,r){if(this.name=e,this.prefix=t,void 0===t.codePointAt(0))throw Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=r}decode(e){if("string"==typeof e){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(e){return k(this,e)}}class E{constructor(e){this.decoders=e}or(e){return k(this,e)}decode(e){let t=e[0],r=this.decoders[t];if(r)return r.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}let k=(e,t)=>new E({...e.decoders||{[e.prefix]:e},...t.decoders||{[t.prefix]:t}});class S{constructor(e,t,r,n){this.name=e,this.prefix=t,this.baseEncode=r,this.baseDecode=n,this.encoder=new x(e,t,r),this.decoder=new C(e,t,n)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}}let A=({name:e,prefix:t,encode:r,decode:n})=>new S(e,t,r,n),P=({prefix:e,name:t,alphabet:r})=>{let{encode:n,decode:i}=g(r,t);return A({prefix:e,name:t,encode:n,decode:e=>w(i(e))})},_=(e,t,r,n)=>{let i={};for(let e=0;e<t.length;++e)i[t[e]]=e;let a=e.length;for(;"="===e[a-1];)--a;let o=new Uint8Array(a*r/8|0),s=0,l=0,c=0;for(let t=0;t<a;++t){let a=i[e[t]];if(void 0===a)throw SyntaxError(`Non-${n} character`);l=l<<r|a,(s+=r)>=8&&(s-=8,o[c++]=255&l>>s)}if(s>=r||255&l<<8-s)throw SyntaxError("Unexpected end of data");return o},D=(e,t,r)=>{let n="="===t[t.length-1],i=(1<<r)-1,a="",o=0,s=0;for(let n=0;n<e.length;++n)for(s=s<<8|e[n],o+=8;o>r;)o-=r,a+=t[i&s>>o];if(o&&(a+=t[i&s<<r-o]),n)for(;a.length*r&7;)a+="=";return a},$=({name:e,prefix:t,bitsPerChar:r,alphabet:n})=>A({prefix:t,name:e,encode:e=>D(e,n,r),decode:t=>_(t,n,r,e)}),O=A({prefix:"\x00",name:"identity",encode:e=>v(e),decode:e=>y(e)}),T=$({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),I=$({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),R=P({prefix:"9",name:"base10",alphabet:"0123456789"}),N=$({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),U=$({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),B=$({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),M=$({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),j=$({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),L=$({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),F=$({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),z=$({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),H=$({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),W=$({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),q=$({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),G=P({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),Z=P({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),V=P({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),K=P({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),Q=$({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),Y=$({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),X=$({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),J=$({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),ee=Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),et=ee.reduce((e,t,r)=>(e[r]=t,e),[]),er=ee.reduce((e,t,r)=>(e[t.codePointAt(0)]=r,e),[]),en=A({prefix:"\uD83D\uDE80",name:"base256emoji",encode:function(e){return e.reduce((e,t)=>e+=et[t],"")},decode:function(e){let t=[];for(let r of e){let e=er[r.codePointAt(0)];if(void 0===e)throw Error(`Non-base256emoji character: ${r}`);t.push(e)}return new Uint8Array(t)}});function ei(e,t,r){t=t||[];for(var n=r=r||0;e>=2147483648;)t[r++]=255&e|128,e/=128;for(;-128&e;)t[r++]=255&e|128,e>>>=7;return t[r]=0|e,ei.bytes=r-n+1,t}function ea(e,t){var r,n=0,t=t||0,i=0,a=t,o=e.length;do{if(a>=o)throw ea.bytes=0,RangeError("Could not decode varint");r=e[a++],n+=i<28?(127&r)<<i:(127&r)*Math.pow(2,i),i+=7}while(r>=128);return ea.bytes=a-t,n}var eo={encode:ei,decode:ea,encodingLength:function(e){return e<128?1:e<16384?2:e<2097152?3:e<268435456?4:e<34359738368?5:e<4398046511104?6:e<562949953421312?7:e<72057594037927940?8:e<0x7fffffffffffffff?9:10}};let es=(e,t,r=0)=>(eo.encode(e,t,r),t),el=e=>eo.encodingLength(e),ec=(e,t)=>{let r=t.byteLength,n=el(e),i=n+el(r),a=new Uint8Array(i+r);return es(e,a,0),es(r,a,n),a.set(t,i),new eu(e,r,t,a)};class eu{constructor(e,t,r,n){this.code=e,this.size=t,this.digest=r,this.bytes=n}}let eh=({name:e,code:t,encode:r})=>new ed(e,t,r);class ed{constructor(e,t,r){this.name=e,this.code=t,this.encode=r}digest(e){if(e instanceof Uint8Array){let t=this.encode(e);return t instanceof Uint8Array?ec(this.code,t):t.then(e=>ec(this.code,e))}throw Error("Unknown type, must be binary type")}}let ep=e=>async t=>new Uint8Array(await crypto.subtle.digest(e,t)),ef=eh({name:"sha2-256",code:18,encode:ep("SHA-256")}),em=eh({name:"sha2-512",code:19,encode:ep("SHA-512")}),eb=e=>ec(0,w(e)),eg={code:0,name:"identity",encode:w,digest:eb},ew="raw",ey=85,ev=e=>w(e),ex=e=>w(e),eC=new TextEncoder,eE=new TextDecoder,ek="json",eS=512,eA=e=>eC.encode(JSON.stringify(e)),eP=e=>JSON.parse(eE.decode(e));class e_{constructor(e,t,r,n){this.code=t,this.version=e,this.multihash=r,this.bytes=n,this.byteOffset=n.byteOffset,this.byteLength=n.byteLength,this.asCID=this,this._baseCache=new Map,Object.defineProperties(this,{byteOffset:eB,byteLength:eB,code:eU,version:eU,multihash:eU,bytes:eU,_baseCache:eB,asCID:eB})}toV0(){if(0===this.version)return this;{let{code:e,multihash:t}=this;if(e!==eT)throw Error("Cannot convert a non dag-pb CID to CIDv0");if(t.code!==eI)throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");return e_.createV0(t)}}toV1(){switch(this.version){case 0:{let{code:e,digest:t}=this.multihash,r=Digest.create(e,t);return e_.createV1(this.code,r)}case 1:return this;default:throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)}}equals(e){return e&&this.code===e.code&&this.version===e.version&&Digest.equals(this.multihash,e.multihash)}toString(e){let{bytes:t,version:r,_baseCache:n}=this;return 0===r?e$(t,n,e||base58btc.encoder):eO(t,n,e||base32.encoder)}toJSON(){return{code:this.code,version:this.version,hash:this.multihash.bytes}}get[Symbol.toStringTag](){return"CID"}[Symbol.for("nodejs.util.inspect.custom")](){return"CID("+this.toString()+")"}static isCID(e){return eM(/^0\.0/,ej),!!(e&&(e[eN]||e.asCID===e))}get toBaseEncodedString(){throw Error("Deprecated, use .toString()")}get codec(){throw Error('"codec" property is deprecated, use integer "code" property instead')}get buffer(){throw Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")}get multibaseName(){throw Error('"multibaseName" property is deprecated')}get prefix(){throw Error('"prefix" property is deprecated')}static asCID(e){if(e instanceof e_)return e;if(null!=e&&e.asCID===e){let{version:t,code:r,multihash:n,bytes:i}=e;return new e_(t,r,n,i||eR(t,r,n.bytes))}if(null==e||!0!==e[eN])return null;{let{version:t,multihash:r,code:n}=e,i=Digest.decode(r);return e_.create(t,n,i)}}static create(e,t,r){if("number"!=typeof t)throw Error("String codecs are no longer supported");switch(e){case 0:if(t===eT)return new e_(e,t,r,r.bytes);throw Error(`Version 0 CID must use dag-pb (code: ${eT}) block encoding`);case 1:{let n=eR(e,t,r.bytes);return new e_(e,t,r,n)}default:throw Error("Invalid version")}}static createV0(e){return e_.create(0,eT,e)}static createV1(e,t){return e_.create(1,e,t)}static decode(e){let[t,r]=e_.decodeFirst(e);if(r.length)throw Error("Incorrect length");return t}static decodeFirst(e){let t=e_.inspectBytes(e),r=t.size-t.multihashSize,n=coerce(e.subarray(r,r+t.multihashSize));if(n.byteLength!==t.multihashSize)throw Error("Incorrect length");let i=n.subarray(t.multihashSize-t.digestSize),a=new Digest.Digest(t.multihashCode,t.digestSize,i,n),o=0===t.version?e_.createV0(a):e_.createV1(t.codec,a);return[o,e.subarray(t.size)]}static inspectBytes(e){let t=0,r=()=>{let[r,n]=varint.decode(e.subarray(t));return t+=n,r},n=r(),i=eT;if(18===n?(n=0,t=0):1===n&&(i=r()),0!==n&&1!==n)throw RangeError(`Invalid CID version ${n}`);let a=t,o=r(),s=r(),l=t+s;return{version:n,codec:i,multihashCode:o,digestSize:s,multihashSize:l-a,size:l}}static parse(e,t){let[r,n]=eD(e,t),i=e_.decode(n);return i._baseCache.set(r,e),i}}let eD=(e,t)=>{switch(e[0]){case"Q":{let r=t||base58btc;return[base58btc.prefix,r.decode(`${base58btc.prefix}${e}`)]}case base58btc.prefix:{let r=t||base58btc;return[base58btc.prefix,r.decode(e)]}case base32.prefix:{let r=t||base32;return[base32.prefix,r.decode(e)]}default:if(null==t)throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");return[e[0],t.decode(e)]}},e$=(e,t,r)=>{let{prefix:n}=r;if(n!==base58btc.prefix)throw Error(`Cannot string encode V0 in ${r.name} encoding`);let i=t.get(n);if(null!=i)return i;{let i=r.encode(e).slice(1);return t.set(n,i),i}},eO=(e,t,r)=>{let{prefix:n}=r,i=t.get(n);if(null!=i)return i;{let i=r.encode(e);return t.set(n,i),i}},eT=112,eI=18,eR=(e,t,r)=>{let n=varint.encodingLength(e),i=n+varint.encodingLength(t),a=new Uint8Array(i+r.byteLength);return varint.encodeTo(e,a,0),varint.encodeTo(t,a,n),a.set(r,i),a},eN=Symbol.for("@ipld/js-cid/CID"),eU={writable:!1,configurable:!1,enumerable:!0},eB={writable:!1,enumerable:!1,configurable:!1},eM=(e,t)=>{if(e.test("0.0.0-dev"))console.warn(t);else throw Error(t)},ej=null,eL={...n,...i,...a,...o,...s,...l,...c,...u,...h,...d};({...p,...f});var eF=r(53160);function ez(e,t,r,n){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:r},decoder:{decode:n}}}let eH=ez("utf8","u",e=>{let t=new TextDecoder("utf8");return"u"+t.decode(e)},e=>{let t=new TextEncoder;return t.encode(e.substring(1))}),eW=ez("ascii","a",e=>{let t="a";for(let r=0;r<e.length;r++)t+=String.fromCharCode(e[r]);return t},e=>{e=e.substring(1);let t=(0,eF.E)(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}),eq={utf8:eH,"utf-8":eH,hex:eL.base16,latin1:eW,ascii:eW,binary:eW,...eL};var eG=eq},17832:function(e,t,r){"use strict";r.d(t,{sj:function(){return x},iH:function(){return k},CO:function(){return E},Ld:function(){return C}});let n=Symbol(),i=Symbol(),a=(e,t)=>new Proxy(e,t),o=Object.getPrototypeOf,s=new WeakMap,l=e=>e&&(s.has(e)?s.get(e):o(e)===Object.prototype||o(e)===Array.prototype),c=e=>"object"==typeof e&&null!==e,u=e=>{if(Array.isArray(e))return Array.from(e);let t=Object.getOwnPropertyDescriptors(e);return Object.values(t).forEach(e=>{e.configurable=!0}),Object.create(o(e),t)},h=e=>e[i]||e,d=(e,t,r,o)=>{if(!l(e))return e;let s=o&&o.get(e);if(!s){let t=h(e);s=Object.values(Object.getOwnPropertyDescriptors(t)).some(e=>!e.configurable&&!e.writable)?[t,u(t)]:[t],null==o||o.set(e,s)}let[c,p]=s,f=r&&r.get(c);return f&&!!p===f[1].f||((f=((e,t)=>{let r={f:t},a=!1,o=(t,n)=>{if(!a){let i=r.a.get(e);if(i||(i={},r.a.set(e,i)),"w"===t)i.w=!0;else{let e=i[t];e||(e=new Set,i[t]=e),e.add(n)}}},s={get:(t,n)=>n===i?e:(o("k",n),d(Reflect.get(t,n),r.a,r.c,r.t)),has:(t,i)=>i===n?(a=!0,r.a.delete(e),!0):(o("h",i),Reflect.has(t,i)),getOwnPropertyDescriptor:(e,t)=>(o("o",t),Reflect.getOwnPropertyDescriptor(e,t)),ownKeys:e=>(o("w"),Reflect.ownKeys(e))};return t&&(s.set=s.deleteProperty=()=>!1),[s,r]})(c,!!p))[1].p=a(p||c,f[0]),r&&r.set(c,f)),f[1].a=t,f[1].c=r,f[1].t=o,f[1].p},p=(e,t,r,n)=>{if(Object.is(e,t))return!1;if(!c(e)||!c(t))return!0;let i=r.get(h(e));if(!i)return!0;if(n){let r=n.get(e);if(r&&r.n===t)return r.g;n.set(e,{n:t,g:!1})}let a=null;try{for(let r of i.h||[])if(a=Reflect.has(e,r)!==Reflect.has(t,r))return a;if(!0===i.w){if(a=((e,t)=>{let r=Reflect.ownKeys(e),n=Reflect.ownKeys(t);return r.length!==n.length||r.some((e,t)=>e!==n[t])})(e,t))return a}else for(let r of i.o||[])if(a=!!Reflect.getOwnPropertyDescriptor(e,r)!=!!Reflect.getOwnPropertyDescriptor(t,r))return a;for(let o of i.k||[])if(a=p(e[o],t[o],r,n))return a;return null===a&&(a=!0),a}finally{n&&n.set(e,{n:t,g:a})}},f=e=>l(e)&&e[i]||null,m=(e,t=!0)=>{s.set(e,t)},b=e=>"object"==typeof e&&null!==e,g=new WeakMap,w=new WeakSet,y=(e=Object.is,t=(e,t)=>new Proxy(e,t),r=e=>b(e)&&!w.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),n=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},i=new WeakMap,a=(e,t,r=n)=>{let o=i.get(e);if((null==o?void 0:o[0])===t)return o[1];let s=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return m(s,!0),i.set(e,[t,s]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(s,t))return;let n=Reflect.get(e,t),i={value:n,enumerable:!0,configurable:!0};if(w.has(n))m(n,!1);else if(n instanceof Promise)delete i.value,i.get=()=>r(n);else if(g.has(n)){let[e,t]=g.get(n);i.value=a(e,t(),r)}Object.defineProperty(s,t,i)}),Object.preventExtensions(s)},o=new WeakMap,s=[1,1],l=n=>{if(!b(n))throw Error("object required");let i=o.get(n);if(i)return i;let c=s[0],u=new Set,h=(e,t=++s[0])=>{c!==t&&(c=t,u.forEach(r=>r(e,t)))},d=s[1],p=(e=++s[1])=>(d===e||u.size||(d=e,y.forEach(([t])=>{let r=t[1](e);r>c&&(c=r)})),c),m=e=>(t,r)=>{let n=[...t];n[1]=[e,...n[1]],h(n,r)},y=new Map,v=(e,t)=>{if(y.has(e))throw Error("prop listener already exists");if(u.size){let r=t[3](m(e));y.set(e,[t,r])}else y.set(e,[t])},x=e=>{var t;let r=y.get(e);r&&(y.delete(e),null==(t=r[1])||t.call(r))},C=e=>{u.add(e),1===u.size&&y.forEach(([e,t],r)=>{if(t)throw Error("remove already exists");let n=e[3](m(r));y.set(r,[e,n])});let t=()=>{u.delete(e),0===u.size&&y.forEach(([e,t],r)=>{t&&(t(),y.set(r,[e]))})};return t},E=Array.isArray(n)?[]:Object.create(Object.getPrototypeOf(n)),k={deleteProperty(e,t){let r=Reflect.get(e,t);x(t);let n=Reflect.deleteProperty(e,t);return n&&h(["delete",[t],r]),n},set(t,n,i,a){let s=Reflect.has(t,n),c=Reflect.get(t,n,a);if(s&&(e(c,i)||o.has(i)&&e(c,o.get(i))))return!0;x(n),b(i)&&(i=f(i)||i);let u=i;if(i instanceof Promise)i.then(e=>{i.status="fulfilled",i.value=e,h(["resolve",[n],e])}).catch(e=>{i.status="rejected",i.reason=e,h(["reject",[n],e])});else{!g.has(i)&&r(i)&&(u=l(i));let e=!w.has(u)&&g.get(u);e&&v(n,e)}return Reflect.set(t,n,u,a),h(["set",[n],i,c]),!0}},S=t(E,k);o.set(n,S);let A=[E,p,a,C];return g.set(S,A),Reflect.ownKeys(n).forEach(e=>{let t=Object.getOwnPropertyDescriptor(n,e);"value"in t&&(S[e]=n[e],delete t.value,delete t.writable),Object.defineProperty(E,e,t)}),S})=>[l,g,w,e,t,r,n,i,a,o,s],[v]=y();function x(e={}){return v(e)}function C(e,t,r){let n;let i=g.get(e);i||console.warn("Please use proxy object");let a=[],o=i[3],s=!1,l=e=>{if(a.push(e),r){t(a.splice(0));return}n||(n=Promise.resolve().then(()=>{n=void 0,s&&t(a.splice(0))}))},c=o(l);return s=!0,()=>{s=!1,c()}}function E(e,t){let r=g.get(e);r||console.warn("Please use proxy object");let[n,i,a]=r;return a(n,i(),t)}function k(e){return w.add(e),e}},14503:function(e,t,r){"use strict";function n(e){return"string"==typeof e?{address:e,type:"json-rpc"}:e}r.d(t,{T:function(){return n}})},18011:function(e,t,r){"use strict";r.d(t,{O:function(){return f}});var n=r(16693),i=r(7210),a=r(77799),o=r(47864),s=r(61836),l=r(92106),c=r(74526),u=r(75719),h=r(72435),d=r(93714),p=r(88819);async function f(e,{blockNumber:t,blockTag:r,coinType:f,name:m,universalResolverAddress:b}){let g=b;if(!g){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");g=(0,o.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{let o=(0,a.R)({abi:n.X$,functionName:"addr",...null!=f?{args:[(0,u.V)(m),BigInt(f)]}:{args:[(0,u.V)(m)]}}),c=await (0,d.s)(e,p.L)({address:g,abi:n.k3,functionName:"resolve",args:[(0,l.NC)((0,h.T)(m)),o],blockNumber:t,blockTag:r});if("0x"===c[0])return null;let b=(0,i.k)({abi:n.X$,args:null!=f?[(0,u.V)(m),BigInt(f)]:void 0,functionName:"addr",data:c[0]});if("0x"===b||"0x00"===(0,s.f)(b))return null;return b}catch(e){if((0,c.c)(e,"resolve"))return null;throw e}}},95270:function(e,t,r){"use strict";r.d(t,{r:function(){return k}});var n=r(88819),i=r(62027);class a extends i.G{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class o extends i.G{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class s extends i.G{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class l extends i.G{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}let c=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,u=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,h=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,d=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function p(e){try{let t=await fetch(e,{method:"HEAD"});if(200===t.status){let e=t.headers.get("content-type");return e?.startsWith("image/")}return!1}catch(t){if("object"==typeof t&&void 0!==t.response||!globalThis.hasOwnProperty("Image"))return!1;return new Promise(t=>{let r=new Image;r.onload=()=>{t(!0)},r.onerror=()=>{t(!1)},r.src=e})}}function f(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function m({uri:e,gatewayUrls:t}){let r=h.test(e);if(r)return{uri:e,isOnChain:!0,isEncoded:r};let n=f(t?.ipfs,"https://ipfs.io"),i=f(t?.arweave,"https://arweave.net"),a=e.match(c),{protocol:o,subpath:l,target:p,subtarget:m=""}=a?.groups||{},b="ipns:/"===o||"ipns/"===l,g="ipfs:/"===o||"ipfs/"===l||u.test(e);if(e.startsWith("http")&&!b&&!g){let r=e;return t?.arweave&&(r=e.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:r,isOnChain:!1,isEncoded:!1}}if((b||g)&&p)return{uri:`${n}/${b?"ipns":"ipfs"}/${p}${m}`,isOnChain:!1,isEncoded:!1};if("ar:/"===o&&p)return{uri:`${i}/${p}${m||""}`,isOnChain:!1,isEncoded:!1};let w=e.replace(d,"");if(w.startsWith("<svg")&&(w=`data:image/svg+xml;base64,${btoa(w)}`),w.startsWith("data:")||w.startsWith("{"))return{uri:w,isOnChain:!0,isEncoded:!1};throw new s({uri:e})}function b(e){if("object"!=typeof e||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new a({data:e});return e.image||e.image_url||e.image_data}async function g({gatewayUrls:e,uri:t}){try{let r=await fetch(t).then(e=>e.json()),n=await w({gatewayUrls:e,uri:b(r)});return n}catch{throw new s({uri:t})}}async function w({gatewayUrls:e,uri:t}){let{uri:r,isOnChain:n}=m({uri:t,gatewayUrls:e});if(n)return r;let i=await p(r);if(i)return r;throw new s({uri:t})}async function y(e,{nft:t}){if("erc721"===t.namespace)return(0,n.L)(e,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if("erc1155"===t.namespace)return(0,n.L)(e,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new l({namespace:t.namespace})}async function v(e,{gatewayUrls:t,record:r}){return/eip155:/i.test(r)?x(e,{gatewayUrls:t,record:r}):w({uri:r,gatewayUrls:t})}async function x(e,{gatewayUrls:t,record:r}){let n=function(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));let[r,n,i]=t.split("/"),[a,s]=r.split(":"),[l,c]=n.split(":");if(!a||"eip155"!==a.toLowerCase())throw new o({reason:"Only EIP-155 supported"});if(!s)throw new o({reason:"Chain ID not found"});if(!c)throw new o({reason:"Contract address not found"});if(!i)throw new o({reason:"Token ID not found"});if(!l)throw new o({reason:"ERC namespace not found"});return{chainID:parseInt(s),namespace:l.toLowerCase(),contractAddress:c,tokenID:i}}(r),i=await y(e,{nft:n}),{uri:a,isOnChain:s,isEncoded:l}=m({uri:i,gatewayUrls:t});if(s&&(a.includes("data:application/json;base64,")||a.startsWith("{"))){let e=l?atob(a.replace("data:application/json;base64,","")):a,r=JSON.parse(e);return w({uri:b(r),gatewayUrls:t})}let c=n.tokenID;return"erc1155"===n.namespace&&(c=c.replace("0x","").padStart(64,"0")),g({gatewayUrls:t,uri:a.replace(/(?:0x)?{id}/,c)})}var C=r(93714),E=r(16171);async function k(e,{blockNumber:t,blockTag:r,gatewayUrls:n,name:i,universalResolverAddress:a}){let o=await (0,C.s)(e,E.g)({blockNumber:t,blockTag:r,key:"avatar",name:i,universalResolverAddress:a});if(!o)return null;try{return await v(e,{record:o,gatewayUrls:n})}catch{return null}}},95602:function(e,t,r){"use strict";r.d(t,{w:function(){return u}});var n=r(16693),i=r(47864),a=r(92106),o=r(74526),s=r(72435),l=r(93714),c=r(88819);async function u(e,{address:t,blockNumber:r,blockTag:u,universalResolverAddress:h}){let d=h;if(!d){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");d=(0,i.L)({blockNumber:r,chain:e.chain,contract:"ensUniversalResolver"})}let p=`${t.toLowerCase().substring(2)}.addr.reverse`;try{let t=await (0,l.s)(e,c.L)({address:d,abi:n.du,functionName:"reverse",args:[(0,a.NC)((0,s.T)(p))],blockNumber:r,blockTag:u});return t[0]}catch(e){if((0,o.c)(e,"reverse"))return null;throw e}}},15215:function(e,t,r){"use strict";r.d(t,{S:function(){return l}});var n=r(47864),i=r(92106),a=r(72435),o=r(93714),s=r(88819);async function l(e,{blockNumber:t,blockTag:r,name:l,universalResolverAddress:c}){let u=c;if(!u){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");u=(0,n.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}let[h]=await (0,o.s)(e,s.L)({address:u,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[(0,i.NC)((0,a.T)(l))],blockNumber:t,blockTag:r});return h}},16171:function(e,t,r){"use strict";r.d(t,{g:function(){return p}});var n=r(16693),i=r(7210),a=r(77799),o=r(47864),s=r(92106),l=r(74526),c=r(75719),u=r(72435),h=r(93714),d=r(88819);async function p(e,{blockNumber:t,blockTag:r,name:p,key:f,universalResolverAddress:m}){let b=m;if(!b){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");b=(0,o.L)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{let o=await (0,h.s)(e,d.L)({address:b,abi:n.k3,functionName:"resolve",args:[(0,s.NC)((0,u.T)(p)),(0,a.R)({abi:n.nZ,functionName:"text",args:[(0,c.V)(p),f]})],blockNumber:t,blockTag:r});if("0x"===o[0])return null;let l=(0,i.k)({abi:n.nZ,functionName:"text",data:o[0]});return""===l?null:l}catch(e){if((0,l.c)(e,"resolve"))return null;throw e}}},61376:function(e,t,r){"use strict";r.d(t,{R:function(){return w}});var n=r(14503),i=r(16693),a=r(62027),o=r(80377),s=r(97405),l=r(7210),c=r(77799),u=r(47864),h=r(92106),d=r(26445),p=r(87469),f=r(61163),m=r(74688),b=r(32357),g=r(47531);async function w(e,t){let{account:i=e.account,batch:l=!!e.batch?.multicall,blockNumber:c,blockTag:u="latest",accessList:b,data:w,gas:v,gasPrice:x,maxFeePerGas:C,maxPriorityFeePerGas:E,nonce:k,to:S,value:A,...P}=t,_=i?(0,n.T)(i):void 0;try{(0,g.F)(t);let r=c?(0,h.eC)(c):void 0,n=r||u,i=e.chain?.formatters?.transactionRequest?.format,a=i||m.tG,s=a({...(0,f.K)(P,{format:i}),from:_?.address,accessList:b,data:w,gas:v,gasPrice:x,maxFeePerGas:C,maxPriorityFeePerGas:E,nonce:k,to:S,value:A});if(l&&function({request:e}){let{data:t,to:r,...n}=e;return!(!t||t.startsWith("0x82ad56cb"))&&!!r&&!(Object.values(n).filter(e=>void 0!==e).length>0)}({request:s}))try{return await y(e,{...s,blockNumber:c,blockTag:u})}catch(e){if(!(e instanceof o.pZ)&&!(e instanceof o.mm))throw e}let d=await e.request({method:"eth_call",params:n?[s,n]:[s]});if("0x"===d)return{data:void 0};return{data:d}}catch(l){let n=function(e){if(!(e instanceof a.G))return;let t=e.walk();return"object"==typeof t.data?t.data.data:t.data}(l),{offchainLookup:i,offchainLookupSignature:o}=await r.e(422).then(r.bind(r,10422));if(n?.slice(0,10)===o&&S)return{data:await i(e,{data:n,to:S})};throw function(e,{docsPath:t,...r}){let n=(()=>{let t=(0,p.k)(e,r);return t instanceof d.cj?e:t})();return new s.cg(n,{docsPath:t,...r})}(l,{...t,account:_,chain:e.chain})}}async function y(e,t){let{batchSize:r=1024,wait:n=0}="object"==typeof e.batch?.multicall?e.batch.multicall:{},{blockNumber:a,blockTag:d="latest",data:p,multicallAddress:f,to:m}=t,g=f;if(!g){if(!e.chain)throw new o.pZ;g=(0,u.L)({blockNumber:a,chain:e.chain,contract:"multicall3"})}let w=a?(0,h.eC)(a):void 0,y=w||d,{schedule:v}=(0,b.S)({id:`${e.uid}.${y}`,wait:n,shouldSplitBatch(e){let t=e.reduce((e,{data:t})=>e+(t.length-2),0);return t>2*r},fn:async t=>{let r=t.map(e=>({allowFailure:!0,callData:e.data,target:e.to})),n=(0,c.R)({abi:i.F8,args:[r],functionName:"aggregate3"}),a=await e.request({method:"eth_call",params:[{data:n,to:g},y]});return(0,l.k)({abi:i.F8,args:[r],functionName:"aggregate3",data:a||"0x"})}}),[{returnData:x,success:C}]=await v({data:p,to:m});if(!C)throw new s.VQ({data:x});return"0x"===x?{data:void 0}:{data:x}}},43861:function(e,t,r){"use strict";r.d(t,{C:function(){return c},X:function(){return l}});var n=r(15371),i=r(93714),a=r(79379),o=r(36765),s=r(24453);async function l(e,t){return c(e,t)}async function c(e,t){let{block:r,chain:l=e.chain,request:c,type:u="eip1559"}=t||{},h=await (async()=>"function"==typeof l?.fees?.baseFeeMultiplier?l.fees.baseFeeMultiplier({block:r,client:e,request:c}):l?.fees?.baseFeeMultiplier??1.2)();if(h<1)throw new n.Fz;let d=h.toString().split(".")[1]?.length??0,p=10**d,f=e=>e*BigInt(Math.ceil(h*p))/BigInt(p),m=r||await (0,i.s)(e,o.Q)({});if("function"==typeof l?.fees?.estimateFeesPerGas)return l.fees.estimateFeesPerGas({block:r,client:e,multiply:f,request:c,type:u});if("eip1559"===u){if("bigint"!=typeof m.baseFeePerGas)throw new n.e5;let t=c?.maxPriorityFeePerGas?c.maxPriorityFeePerGas:await (0,a.h)(e,{block:m,chain:l,request:c}),r=f(m.baseFeePerGas),i=c?.maxFeePerGas??r+t;return{maxFeePerGas:i,maxPriorityFeePerGas:t}}let b=c?.gasPrice??f(await (0,i.s)(e,s.o)({}));return{gasPrice:b}}},81841:function(e,t,r){"use strict";r.d(t,{Q:function(){return g}});var n=r(14503),i=r(8998),a=r(92106),o=r(39625),s=r(67795),l=r(62027),c=r(33639);class u extends l.G{constructor(e,{account:t,docsPath:r,chain:n,data:i,gas:a,gasPrice:l,maxFeePerGas:u,maxPriorityFeePerGas:h,nonce:d,to:p,value:f}){let m=(0,c.xr)({from:t?.address,to:p,value:void 0!==f&&`${(0,o.d)(f)} ${n?.nativeCurrency.symbol||"ETH"}`,data:i,gas:a,gasPrice:void 0!==l&&`${(0,s.o)(l)} gwei`,maxFeePerGas:void 0!==u&&`${(0,s.o)(u)} gwei`,maxPriorityFeePerGas:void 0!==h&&`${(0,s.o)(h)} gwei`,nonce:d});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",m].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}}var h=r(26445),d=r(87469),p=r(61163),f=r(74688),m=r(47531),b=r(37397);async function g(e,t){let r=t.account??e.account;if(!r)throw new i.o({docsPath:"/docs/actions/public/estimateGas"});let o=(0,n.T)(r);try{let{accessList:r,blockNumber:n,blockTag:i,data:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:h,nonce:d,to:g,value:w,...y}="local"===o.type?await (0,b.Z)(e,t):t,v=n?(0,a.eC)(n):void 0,x=v||i;(0,m.F)(t);let C=e.chain?.formatters?.transactionRequest?.format,E=C||f.tG,k=E({...(0,p.K)(y,{format:C}),from:o.address,accessList:r,data:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:h,nonce:d,to:g,value:w}),S=await e.request({method:"eth_estimateGas",params:x?[k,x]:[k]});return BigInt(S)}catch(r){throw function(e,{docsPath:t,...r}){let n=(()=>{let t=(0,d.k)(e,r);return t instanceof h.cj?e:t})();return new u(n,{docsPath:t,...r})}(r,{...t,account:o,chain:e.chain})}}},79379:function(e,t,r){"use strict";r.d(t,{_:function(){return l},h:function(){return c}});var n=r(15371),i=r(95946),a=r(93714),o=r(36765),s=r(24453);async function l(e,t){return c(e,t)}async function c(e,t){let{block:r,chain:l=e.chain,request:c}=t||{};if("function"==typeof l?.fees?.defaultPriorityFee){let t=r||await (0,a.s)(e,o.Q)({});return l.fees.defaultPriorityFee({block:t,client:e,request:c})}if(void 0!==l?.fees?.defaultPriorityFee)return l?.fees?.defaultPriorityFee;try{let t=await e.request({method:"eth_maxPriorityFeePerGas"});return(0,i.y_)(t)}catch{let[t,i]=await Promise.all([r?Promise.resolve(r):(0,a.s)(e,o.Q)({}),(0,a.s)(e,s.o)({})]);if("bigint"!=typeof t.baseFeePerGas)throw new n.e5;let l=i-t.baseFeePerGas;if(l<0n)return 0n;return l}}},36765:function(e,t,r){"use strict";r.d(t,{Q:function(){return s}});var n=r(62027);class i extends n.G{constructor({blockHash:e,blockNumber:t}){let r="Block";e&&(r=`Block at hash "${e}"`),t&&(r=`Block at number "${t}"`),super(`${r} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}var a=r(92106),o=r(43310);async function s(e,{blockHash:t,blockNumber:r,blockTag:n,includeTransactions:s}={}){let l=s??!1,c=void 0!==r?(0,a.eC)(r):void 0,u=null;if(!(u=t?await e.request({method:"eth_getBlockByHash",params:[t,l]}):await e.request({method:"eth_getBlockByNumber",params:[c||(n??"latest"),l]})))throw new i({blockHash:t,blockNumber:r});let h=e.chain?.formatters?.block?.format||o.Z;return h(u)}},79524:function(e,t,r){"use strict";r.d(t,{L:function(){return i}});var n=r(95946);async function i(e){let t=await e.request({method:"eth_chainId"});return(0,n.ly)(t)}},24453:function(e,t,r){"use strict";async function n(e){let t=await e.request({method:"eth_gasPrice"});return BigInt(t)}r.d(t,{o:function(){return n}})},86162:function(e,t,r){"use strict";r.d(t,{K:function(){return a}});var n=r(95946),i=r(92106);async function a(e,{address:t,blockTag:r="latest",blockNumber:a}){let o=await e.request({method:"eth_getTransactionCount",params:[t,a?(0,i.eC)(a):r]});return(0,n.ly)(o)}},88819:function(e,t,r){"use strict";r.d(t,{L:function(){return l}});var n=r(7210),i=r(77799),a=r(72365),o=r(93714),s=r(61376);async function l(e,{abi:t,address:r,args:l,functionName:c,...u}){let h=(0,i.R)({abi:t,args:l,functionName:c});try{let{data:i}=await (0,o.s)(e,s.R)({data:h,to:r,...u});return(0,n.k)({abi:t,args:l,functionName:c,data:i||"0x"})}catch(e){throw(0,a.S)(e,{abi:t,address:r,args:l,docsPath:"/docs/contract/readContract",functionName:c})}}},37397:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(14503),i=r(43861),a=r(81841),o=r(36765),s=r(86162),l=r(8998),c=r(15371),u=r(93714),h=r(47531),d=r(82994);async function p(e,t){let{account:r=e.account,chain:p,gas:f,nonce:m,type:b}=t;if(!r)throw new l.o;let g=(0,n.T)(r),w=await (0,u.s)(e,o.Q)({blockTag:"latest"}),y={...t,from:g.address};if(void 0===m&&(y.nonce=await (0,u.s)(e,s.K)({address:g.address,blockTag:"pending"})),void 0===b)try{y.type=(0,d.l)(y)}catch{y.type="bigint"==typeof w.baseFeePerGas?"eip1559":"legacy"}if("eip1559"===y.type){let{maxFeePerGas:r,maxPriorityFeePerGas:n}=await (0,i.C)(e,{block:w,chain:p,request:y});if(void 0===t.maxPriorityFeePerGas&&t.maxFeePerGas&&t.maxFeePerGas<n)throw new c.ld({maxPriorityFeePerGas:n});y.maxPriorityFeePerGas=n,y.maxFeePerGas=r}else{if(void 0!==t.maxFeePerGas||void 0!==t.maxPriorityFeePerGas)throw new c.e5;let{gasPrice:r}=await (0,i.C)(e,{block:w,chain:p,request:y,type:"legacy"});y.gasPrice=r}return void 0===f&&(y.gas=await (0,u.s)(e,a.Q)({...y,account:{address:g.address,type:"json-rpc"}})),(0,h.F)(y),y}},99238:function(e,t,r){"use strict";async function n(e,{serializedTransaction:t}){return e.request({method:"eth_sendRawTransaction",params:[t]})}r.d(t,{p:function(){return n}})},6891:function(e,t,r){"use strict";r.d(t,{w:function(){return i}});var n=r(86164);let i=(0,n.a)({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0})},66403:function(e,t,r){"use strict";r.d(t,{R:function(){return i}});var n=r(86164);let i=(0,n.a)({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}})},16189:function(e,t,r){"use strict";let n;r.d(t,{e:function(){return o}});var i=r(14503);let a=256;function o(e){let{batch:t,cacheTime:r=e.pollingInterval??4e3,key:o="base",name:s="Base Client",pollingInterval:l=4e3,type:c="base"}=e,u=e.chain,h=e.account?(0,i.T)(e.account):void 0,{config:d,request:p,value:f}=e.transport({chain:u,pollingInterval:l}),m={...d,...f},b={account:h,batch:t,cacheTime:r,chain:u,key:o,name:s,pollingInterval:l,request:p,transport:m,type:c,uid:function(e=11){if(!n||a+e>512){n="",a=0;for(let e=0;e<256;e++)n+=(256+256*Math.random()|0).toString(16).substring(1)}return n.substring(a,a+++e)}()};return Object.assign(b,{extend:function e(t){return r=>{let n=r(t);for(let e in b)delete n[e];let i={...t,...n};return Object.assign(i,{extend:e(i)})}}(b)})}},79578:function(e,t,r){"use strict";r.d(t,{K:function(){return M}});var n=r(16189),i=r(79524),a=r(92106);async function o(e,{chain:t}){let{id:r,name:n,nativeCurrency:i,rpcUrls:o,blockExplorers:s}=t;await e.request({method:"wallet_addEthereumChain",params:[{chainId:(0,a.eC)(r),chainName:n,nativeCurrency:i,rpcUrls:o.default.http,blockExplorerUrls:s?Object.values(s).map(({url:e})=>e):void 0}]})}var s=r(30286),l=r(14503),c=r(8998),u=r(80377);function h({chain:e,currentChainId:t}){if(!e)throw new u.Bk;if(t!==e.id)throw new u.Yl({chain:e,currentChainId:t})}var d=r(26445),p=r(33639),f=r(87469),m=r(61163),b=r(74688),g=r(93714),w=r(47531),y=r(37397),v=r(99238);async function x(e,t){let{account:r=e.account,chain:n=e.chain,accessList:a,data:o,gas:s,gasPrice:u,maxFeePerGas:x,maxPriorityFeePerGas:C,nonce:E,to:k,value:S,...A}=t;if(!r)throw new c.o({docsPath:"/docs/actions/wallet/sendTransaction"});let P=(0,l.T)(r);try{let r;if((0,w.F)(t),null!==n&&(r=await (0,g.s)(e,i.L)({}),h({currentChainId:r,chain:n})),"local"===P.type){let t=await (0,g.s)(e,y.Z)({account:P,accessList:a,chain:n,data:o,gas:s,gasPrice:u,maxFeePerGas:x,maxPriorityFeePerGas:C,nonce:E,to:k,value:S,...A});r||(r=await (0,g.s)(e,i.L)({}));let l=n?.serializers?.transaction,c=await P.signTransaction({...t,chainId:r},{serializer:l});return await (0,g.s)(e,v.p)({serializedTransaction:c})}let l=e.chain?.formatters?.transactionRequest?.format,c=l||b.tG,d=c({...(0,m.K)(A,{format:l}),accessList:a,data:o,from:P.address,gas:s,gasPrice:u,maxFeePerGas:x,maxPriorityFeePerGas:C,nonce:E,to:k,value:S});return await e.request({method:"eth_sendTransaction",params:[d]})}catch(e){throw function(e,{docsPath:t,...r}){let n=(()=>{let t=(0,f.k)(e,r);return t instanceof d.cj?e:t})();return new p.mk(n,{docsPath:t,...r})}(e,{...t,account:P,chain:t.chain||void 0})}}var C=r(45775);async function E(e){if(e.account?.type==="local")return[e.account.address];let t=await e.request({method:"eth_accounts"});return t.map(e=>(0,C.x)(e))}async function k(e){let t=await e.request({method:"wallet_getPermissions"});return t}async function S(e){let t=await e.request({method:"eth_requestAccounts"});return t.map(e=>(0,C.K)(e))}async function A(e,t){return e.request({method:"wallet_requestPermissions",params:[t]})}async function P(e,{account:t=e.account,message:r}){if(!t)throw new c.o({docsPath:"/docs/actions/wallet/signMessage"});let n=(0,l.T)(t);if("local"===n.type)return n.signMessage({message:r});let i="string"==typeof r?(0,a.$G)(r):r.raw instanceof Uint8Array?(0,a.NC)(r.raw):r.raw;return e.request({method:"personal_sign",params:[i,n.address]})}async function _(e,t){let{account:r=e.account,chain:n=e.chain,...o}=t;if(!r)throw new c.o({docsPath:"/docs/actions/wallet/signTransaction"});let s=(0,l.T)(r);(0,w.F)({account:s,...t});let u=await (0,g.s)(e,i.L)({});null!==n&&h({currentChainId:u,chain:n});let d=n?.formatters||e.chain?.formatters,p=d?.transactionRequest?.format||b.tG;return"local"===s.type?s.signTransaction({...o,chainId:u},{serializer:e.chain?.serializers?.transaction}):await e.request({method:"eth_signTransaction",params:[{...p(o),chainId:(0,a.eC)(u),from:s.address}]})}var D=r(15102),$=r(96070),O=r(71352);async function T(e,{account:t=e.account,domain:r,message:n,primaryType:i,types:a}){if(!t)throw new c.o({docsPath:"/docs/actions/wallet/signTypedData"});let o=(0,l.T)(t),s={EIP712Domain:(0,O.cj)({domain:r}),...a};if((0,O.iC)({domain:r,message:n,primaryType:i,types:s}),"local"===o.type)return o.signTypedData({domain:r,primaryType:i,types:s,message:n});let u=(0,$.P)({domain:r??{},primaryType:i,types:s,message:n},(e,t)=>(0,D.v)(t)?t.toLowerCase():t);return e.request({method:"eth_signTypedData_v4",params:[o.address,u]})}async function I(e,{id:t}){await e.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,a.eC)(t)}]})}async function R(e,t){let r=await e.request({method:"wallet_watchAsset",params:t});return r}var N=r(77799);async function U(e,{abi:t,address:r,args:n,dataSuffix:i,functionName:a,...o}){let s=(0,N.R)({abi:t,args:n,functionName:a}),l=await (0,g.s)(e,x)({data:`${s}${i?i.replace("0x",""):""}`,to:r,...o});return l}function B(e){return{addChain:t=>o(e,t),deployContract:t=>(function(e,{abi:t,args:r,bytecode:n,...i}){let a=(0,s.w)({abi:t,args:r,bytecode:n});return x(e,{...i,data:a})})(e,t),getAddresses:()=>E(e),getChainId:()=>(0,i.L)(e),getPermissions:()=>k(e),prepareTransactionRequest:t=>(0,y.Z)(e,t),requestAddresses:()=>S(e),requestPermissions:t=>A(e,t),sendRawTransaction:t=>(0,v.p)(e,t),sendTransaction:t=>x(e,t),signMessage:t=>P(e,t),signTransaction:t=>_(e,t),signTypedData:t=>T(e,t),switchChain:t=>I(e,t),watchAsset:t=>R(e,t),writeContract:t=>U(e,t)}}function M(e){let{key:t="wallet",name:r="Wallet Client",transport:i}=e,a=(0,n.e)({...e,key:t,name:r,transport:e=>i({...e,retryCount:0}),type:"walletClient"});return a.extend(B)}},31031:function(e,t,r){"use strict";r.d(t,{q:function(){return i}});var n=r(37029);function i({key:e,name:t,request:r,retryCount:i=3,retryDelay:a=150,timeout:o,type:s},l){return{config:{key:e,name:t,request:r,retryCount:i,retryDelay:a,timeout:o,type:s},request:(0,n.n)(r,{retryCount:i,retryDelay:a}),value:l}}},3980:function(e,t,r){"use strict";r.d(t,{P:function(){return i}});var n=r(31031);function i(e,t={}){let{key:r="custom",name:i="Custom Provider",retryDelay:a}=t;return({retryCount:o})=>(0,n.q)({key:r,name:i,request:e.request.bind(e),retryCount:t.retryCount??o,retryDelay:a,type:"custom"})}},16693:function(e,t,r){"use strict";r.d(t,{$o:function(){return c},F8:function(){return n},X$:function(){return l},du:function(){return o},k3:function(){return a},nZ:function(){return s}});let n=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],i=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],a=[...i,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],o=[...i,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],s=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],l=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],c=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]},21746:function(e,t,r){"use strict";r.d(t,{$:function(){return n},Up:function(){return i},hZ:function(){return a}});let n={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},i={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},a={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}},84192:function(e,t,r){"use strict";r.d(t,{Bd:function(){return a},Zn:function(){return i},ez:function(){return n}});let n={gwei:9,wei:18},i={ether:-9,wei:9},a={ether:-18,gwei:-9}},57412:function(e,t,r){"use strict";r.d(t,{CI:function(){return E},FM:function(){return f},Gy:function(){return x},KY:function(){return y},M4:function(){return h},MX:function(){return w},SM:function(){return v},cO:function(){return s},dh:function(){return C},fM:function(){return o},fs:function(){return d},gr:function(){return u},hn:function(){return k},lC:function(){return m},mv:function(){return b},wM:function(){return S},wb:function(){return c},xB:function(){return l},xL:function(){return g},yP:function(){return p}});var n=r(80522),i=r(39135),a=r(62027);class o extends a.G{constructor({docsPath:e}){super("A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class s extends a.G{constructor({docsPath:e}){super("Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class l extends a.G{constructor({data:e,params:t,size:r}){super(`Data size of ${r} bytes is too small for given parameters.`,{metaMessages:[`Params: (${(0,n.h)(t,{includeName:!0})})`,`Data:   ${e} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=t,this.size=r}}class c extends a.G{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class u extends a.G{constructor({expectedLength:e,givenLength:t,type:r}){super(`ABI encoding array length mismatch for type ${r}.
Expected length: ${e}
Given length: ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class h extends a.G{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${(0,i.d)(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class d extends a.G{constructor({expectedLength:e,givenLength:t}){super(`ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class p extends a.G{constructor(e,{docsPath:t}){super(`Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}}class f extends a.G{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class m extends a.G{constructor(e,{docsPath:t}){super(`Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class b extends a.G{constructor(e,{docsPath:t}={}){super(`Event ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class g extends a.G{constructor(e,{docsPath:t}={}){super(`Function ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class w extends a.G{constructor(e,{docsPath:t}){super(`Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class y extends a.G{constructor({expectedSize:e,givenSize:t}){super(`Expected bytes${e}, got bytes${t}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class v extends a.G{constructor({abiItem:e,data:t,params:r,size:i}){super(`Data size of ${i} bytes is too small for non-indexed event parameters.`,{metaMessages:[`Params: (${(0,n.h)(r,{includeName:!0})})`,`Data:   ${t} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=t,this.params=r,this.size=i}}class x extends a.G{constructor({abiItem:e,param:t}){super(`Expected a topic for indexed event parameter${t.name?` "${t.name}"`:""} on event "${(0,n.t)(e,{includeName:!0})}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}}class C extends a.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class E extends a.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class k extends a.G{constructor(e){super(`Value "${e}" is not a valid array.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class S extends a.G{constructor(e){super(`"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}},8998:function(e,t,r){"use strict";r.d(t,{o:function(){return i}});var n=r(62027);class i extends n.G{constructor({docsPath:e}={}){super("Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.",{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}},26087:function(e,t,r){"use strict";r.d(t,{b:function(){return i}});var n=r(62027);class i extends n.G{constructor({address:e}){super(`Address "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}},62027:function(e,t,r){"use strict";r.d(t,{G:function(){return i}});var n=r(35280);class i extends Error{constructor(e,t={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:(0,n.bo)()});let r=t.cause instanceof i?t.cause.details:t.cause?.message?t.cause.message:t.details,a=t.cause instanceof i&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...a?[`Docs: https://viem.sh${a}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=r,this.docsPath=a,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return function e(t,r){return r?.(t)?t:t&&"object"==typeof t&&"cause"in t?e(t.cause,r):r?null:t}(this,e)}}},80377:function(e,t,r){"use strict";r.d(t,{Bk:function(){return o},Yl:function(){return a},hJ:function(){return l},mm:function(){return i},pZ:function(){return s}});var n=r(62027);class i extends n.G{constructor({blockNumber:e,chain:t,contract:r}){super(`Chain "${t.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...e&&r.blockCreated&&r.blockCreated>e?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class a extends n.G{constructor({chain:e,currentChainId:t}){super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class o extends n.G{constructor(){super("No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class s extends n.G{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}class l extends n.G{constructor({chainId:e}){super(`Chain ID "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidChainIdError"})}}},97405:function(e,t,r){"use strict";r.d(t,{cg:function(){return b},uq:function(){return g},Lu:function(){return w},Dk:function(){return y},VQ:function(){return v}});var n=r(14503),i=r(21746),a=r(86899),o=r(80522),s=r(96070);function l({abiItem:e,args:t,includeFunctionName:r=!0,includeName:n=!1}){if("name"in e&&"inputs"in e&&e.inputs)return`${r?e.name:""}(${e.inputs.map((e,r)=>`${n&&e.name?`${e.name}: `:""}${"object"==typeof t[r]?(0,s.P)(t[r]):t[r]}`).join(", ")})`}var c=r(40840),u=r(39625),h=r(67795),d=r(57412),p=r(62027),f=r(33639),m=r(35280);class b extends p.G{constructor(e,{account:t,docsPath:r,chain:i,data:a,gas:o,gasPrice:s,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:d,to:p,value:m}){let b=t?(0,n.T)(t):void 0,g=(0,f.xr)({from:b?.address,to:p,value:void 0!==m&&`${(0,u.d)(m)} ${i?.nativeCurrency.symbol||"ETH"}`,data:a,gas:o,gasPrice:void 0!==s&&`${(0,h.o)(s)} gwei`,maxFeePerGas:void 0!==l&&`${(0,h.o)(l)} gwei`,maxPriorityFeePerGas:void 0!==c&&`${(0,h.o)(c)} gwei`,nonce:d});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",g].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}}class g extends p.G{constructor(e,{abi:t,args:r,contractAddress:n,docsPath:i,functionName:a,sender:s}){let u=(0,c.m)({abi:t,args:r,name:a}),h=u?l({abiItem:u,args:r,includeFunctionName:!1,includeName:!1}):void 0,d=u?(0,o.t)(u,{includeName:!0}):void 0,p=(0,f.xr)({address:n&&(0,m.CR)(n),function:d,args:h&&"()"!==h&&`${[...Array(a?.length??0).keys()].map(()=>" ").join("")}${h}`,sender:s});super(e.shortMessage||`An unknown error occurred while executing the contract function "${a}".`,{cause:e,docsPath:i,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",p].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=t,this.args=r,this.cause=e,this.contractAddress=n,this.functionName=a,this.sender=s}}class w extends p.G{constructor({abi:e,data:t,functionName:r,message:n}){let s,c,u,h,p;if(t&&"0x"!==t)try{p=(0,a.p)({abi:e,data:t});let{abiItem:r,errorName:n,args:s}=p;if("Error"===n)u=s[0];else if("Panic"===n){let[e]=s;u=i.$[e]}else{let e=r?(0,o.t)(r,{includeName:!0}):void 0,t=r&&s?l({abiItem:r,args:s,includeFunctionName:!1,includeName:!1}):void 0;c=[e?`Error: ${e}`:"",t&&"()"!==t?`       ${[...Array(n?.length??0).keys()].map(()=>" ").join("")}${t}`:""]}}catch(e){s=e}else n&&(u=n);s instanceof d.yP&&(c=[`Unable to decode signature "${h=s.signature}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${h}.`]),super(u&&"execution reverted"!==u||h?[`The contract function "${r}" reverted with the following ${h?"signature":"reason"}:`,u||h].join("\n"):`The contract function "${r}" reverted.`,{cause:s,metaMessages:c}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=p,this.reason=u,this.signature=h}}class y extends p.G{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class v extends p.G{constructor({data:e,message:t}){super(t||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}},69760:function(e,t,r){"use strict";r.d(t,{$:function(){return a},m:function(){return i}});var n=r(62027);class i extends n.G{constructor({offset:e,position:t,size:r}){super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class a extends n.G{constructor({size:e,targetSize:t,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}},87788:function(e,t,r){"use strict";r.d(t,{Cd:function(){return a},J5:function(){return i},M6:function(){return o}});var n=r(62027);class i extends n.G{constructor({max:e,min:t,signed:r,size:n,value:i}){super(`Number "${i}" is not in safe ${n?`${8*n}-bit ${r?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class a extends n.G{constructor(e){super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}class o extends n.G{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}},15371:function(e,t,r){"use strict";r.d(t,{Fz:function(){return a},e5:function(){return o},ld:function(){return s}});var n=r(67795),i=r(62027);class a extends i.G{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class o extends i.G{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class s extends i.G{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,n.o)(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}},26445:function(e,t,r){"use strict";r.d(t,{C_:function(){return h},G$:function(){return s},Hh:function(){return o},M_:function(){return a},WF:function(){return d},ZI:function(){return l},cj:function(){return b},cs:function(){return m},dR:function(){return p},pZ:function(){return f},se:function(){return u},vU:function(){return c}});var n=r(67795),i=r(62027);class a extends i.G{constructor({cause:e,message:t}={}){let r=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(a,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(a,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class o extends i.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,n.o)(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(o,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class s extends i.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,n.o)(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(s,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class l extends i.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(l,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class c extends i.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(c,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class u extends i.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(u,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class h extends i.G{constructor({cause:e}={}){super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(h,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class d extends i.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(d,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class p extends i.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(p,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class f extends i.G{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(f,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class m extends i.G{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:r}={}){super(`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${(0,n.o)(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${(0,n.o)(r)} gwei`:""}).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(m,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class b extends i.G{constructor({cause:e}){super(`An error occurred while executing: ${e?.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}},78863:function(e,t,r){"use strict";r.d(t,{Gg:function(){return o},W5:function(){return c},bs:function(){return l},c9:function(){return s}});var n=r(96070),i=r(62027),a=r(35280);class o extends i.G{constructor({body:e,details:t,headers:r,status:i,url:o}){super("HTTP request failed.",{details:t,metaMessages:[i&&`Status: ${i}`,`URL: ${(0,a.Gr)(o)}`,e&&`Request body: ${(0,n.P)(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=r,this.status=i,this.url=o}}class s extends i.G{constructor({body:e,details:t,url:r}){super("WebSocket request failed.",{details:t,metaMessages:[`URL: ${(0,a.Gr)(r)}`,`Request body: ${(0,n.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class l extends i.G{constructor({body:e,error:t,url:r}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${(0,a.Gr)(r)}`,`Request body: ${(0,n.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}}class c extends i.G{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,a.Gr)(t)}`,`Request body: ${(0,n.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}},39028:function(e,t,r){"use strict";r.d(t,{B:function(){return l},GD:function(){return w},I0:function(){return E},KB:function(){return m},LX:function(){return c},Og:function(){return p},PE:function(){return v},Pv:function(){return g},Ts:function(){return x},XS:function(){return h},ab:function(){return y},gS:function(){return b},ir:function(){return S},nY:function(){return u},pT:function(){return f},s7:function(){return s},u5:function(){return C},x3:function(){return k},yR:function(){return d}});var n=r(62027),i=r(78863);class a extends n.G{constructor(e,{code:t,docsPath:r,metaMessages:n,shortMessage:a}){super(a,{cause:e,docsPath:r,metaMessages:n||e?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof i.bs?e.code:t??-1}}class o extends a{constructor(e,t){super(e,t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}}class s extends a{constructor(e){super(e,{code:s.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty(s,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class l extends a{constructor(e){super(e,{code:l.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(l,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class c extends a{constructor(e){super(e,{code:c.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(c,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class u extends a{constructor(e){super(e,{code:u.code,shortMessage:"Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(u,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class h extends a{constructor(e){super(e,{code:h.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(h,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class d extends a{constructor(e){super(e,{code:d.code,shortMessage:"Missing or invalid parameters.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(d,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class p extends a{constructor(e){super(e,{code:p.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(p,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class f extends a{constructor(e){super(e,{code:f.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty(f,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class m extends a{constructor(e){super(e,{code:m.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(m,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class b extends a{constructor(e){super(e,{code:b.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(b,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class g extends a{constructor(e){super(e,{code:g.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(g,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class w extends a{constructor(e){super(e,{code:w.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(w,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class y extends o{constructor(e){super(e,{code:y.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(y,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class v extends o{constructor(e){super(e,{code:v.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(v,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class x extends o{constructor(e){super(e,{code:x.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(x,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class C extends o{constructor(e){super(e,{code:C.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(C,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class E extends o{constructor(e){super(e,{code:E.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(E,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class k extends o{constructor(e){super(e,{code:k.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(k,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class S extends a{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}},33639:function(e,t,r){"use strict";r.d(t,{Bh:function(){return d},JC:function(){return u},Yb:function(){return p},j3:function(){return c},mc:function(){return f},mk:function(){return h},vl:function(){return l},xY:function(){return s},xr:function(){return o}});var n=r(39625),i=r(67795),a=r(62027);function o(e){let t=Object.entries(e).map(([e,t])=>void 0===t||!1===t?null:[e,t]).filter(Boolean),r=t.reduce((e,[t])=>Math.max(e,t.length),0);return t.map(([e,t])=>`  ${`${e}:`.padEnd(r+1)}  ${t}`).join("\n")}class s extends a.G{constructor(){super("Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class l extends a.G{constructor({v:e}){super(`Invalid \`v\` value "${e}". Expected 27 or 28.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidLegacyVError"})}}class c extends a.G{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",o(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class u extends a.G{constructor({storageKey:e}){super(`Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor((e.length-2)/2)} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidStorageKeySizeError"})}}class h extends a.G{constructor(e,{account:t,docsPath:r,chain:a,data:s,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:h,nonce:d,to:p,value:f}){let m=o({chain:a&&`${a?.name} (id: ${a?.id})`,from:t?.address,to:p,value:void 0!==f&&`${(0,n.d)(f)} ${a?.nativeCurrency.symbol||"ETH"}`,data:s,gas:l,gasPrice:void 0!==c&&`${(0,i.o)(c)} gwei`,maxFeePerGas:void 0!==u&&`${(0,i.o)(u)} gwei`,maxPriorityFeePerGas:void 0!==h&&`${(0,i.o)(h)} gwei`,nonce:d});super(e.shortMessage,{cause:e,docsPath:r,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",m].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}}class d extends a.G{constructor({blockHash:e,blockNumber:t,blockTag:r,hash:n,index:i}){let a="Transaction";r&&void 0!==i&&(a=`Transaction at block time "${r}" at index "${i}"`),e&&void 0!==i&&(a=`Transaction at block hash "${e}" at index "${i}"`),t&&void 0!==i&&(a=`Transaction at block number "${t}" at index "${i}"`),n&&(a=`Transaction with hash "${n}"`),super(`${a} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class p extends a.G{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class f extends a.G{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}},35280:function(e,t,r){"use strict";r.d(t,{CR:function(){return n},Gr:function(){return i},bo:function(){return a}});let n=e=>e,i=e=>e,a=()=>"viem@1.17.1"},34450:function(e,t,r){"use strict";r.d(t,{r:function(){return u}});var n=r(57412),i=r(45775),a=r(39135),o=r(3972),s=r(61836),l=r(95946),c=r(45444);function u(e,t){if("0x"===t&&e.length>0)throw new n.wb;if((0,a.d)(t)&&32>(0,a.d)(t))throw new n.xB({data:t,params:e,size:(0,a.d)(t)});return function({data:e,params:t}){let r=[],u=0;for(let d=0;d<t.length;d++){if(u>=(0,a.d)(e))throw new n.xB({data:e,params:t,size:(0,a.d)(e)});let p=t[d],{consumed:f,value:m}=function e({data:t,param:r,position:a}){let u=(0,c.S)(r.type);if(u){let[n,i]=u;return function(t,{param:r,length:n,position:i}){if(!n){let n=(0,l.ly)((0,o.tP)(t,i,i+32,{strict:!0})),a=(0,l.ly)((0,o.tP)(t,n,n+32,{strict:!0})),s=0,c=[];for(let i=0;i<a;++i){let i=e({data:(0,o.tP)(t,n+32),param:r,position:s});s+=i.consumed,c.push(i.value)}return{value:c,consumed:32}}if(h(r)){let a=(0,c.S)(r.type),s=!a?.[0],u=0,h=[];for(let a=0;a<n;++a){let n=(0,l.ly)((0,o.tP)(t,i,i+32,{strict:!0})),c=e({data:(0,o.tP)(t,n),param:r,position:s?u:32*a});u+=c.consumed,h.push(c.value)}return{value:h,consumed:32}}let a=0,s=[];for(let o=0;o<n;++o){let n=e({data:t,param:r,position:i+a});a+=n.consumed,s.push(n.value)}return{value:s,consumed:a}}(t,{length:n,param:{...r,type:i},position:a})}if("tuple"===r.type)return function(t,{param:r,position:n}){let i=0===r.components.length||r.components.some(({name:e})=>!e),a=i?[]:{},s=0;if(h(r)){let c=(0,l.ly)((0,o.tP)(t,n,n+32,{strict:!0}));for(let n=0;n<r.components.length;++n){let l=r.components[n],u=e({data:(0,o.tP)(t,c),param:l,position:s});s+=u.consumed,a[i?n:l?.name]=u.value}return{consumed:32,value:a}}for(let o=0;o<r.components.length;++o){let l=r.components[o],c=e({data:t,param:l,position:n+s});s+=c.consumed,a[i?o:l?.name]=c.value}return{consumed:s,value:a}}(t,{param:r,position:a});if("string"===r.type)return function(e,{position:t}){let r=(0,l.ly)((0,o.tP)(e,t,t+32,{strict:!0})),n=(0,l.ly)((0,o.tP)(e,r,r+32,{strict:!0}));if(0===n)return{consumed:32,value:""};let i=(0,l.rR)((0,s.f)((0,o.tP)(e,r+32,r+32+n,{strict:!0})));return{consumed:32,value:i}}(t,{position:a});if(r.type.startsWith("bytes"))return function(e,{param:t,position:r}){let[n,i]=t.type.split("bytes");if(!i){let t=(0,l.ly)((0,o.tP)(e,r,r+32,{strict:!0})),n=(0,l.ly)((0,o.tP)(e,t,t+32,{strict:!0}));if(0===n)return{consumed:32,value:"0x"};let i=(0,o.tP)(e,t+32,t+32+n,{strict:!0});return{consumed:32,value:i}}let a=(0,o.tP)(e,r,r+parseInt(i),{strict:!0});return{consumed:32,value:a}}(t,{param:r,position:a});let d=(0,o.tP)(t,a,a+32,{strict:!0});if(r.type.startsWith("uint")||r.type.startsWith("int"))return function(e,{param:t}){let r=t.type.startsWith("int"),n=parseInt(t.type.split("int")[1]||"256");return{consumed:32,value:n>48?(0,l.y_)(e,{signed:r}):(0,l.ly)(e,{signed:r})}}(d,{param:r});if("address"===r.type)return{consumed:32,value:(0,i.x)((0,o.tP)(d,-20))};if("bool"===r.type)return{consumed:32,value:(0,l.XA)(d)};throw new n.CI(r.type,{docsPath:"/docs/contract/decodeAbiParameters"})}({data:e,param:p,position:u});r.push(m),u+=f}return r}({data:t,params:e})}function h(e){let{type:t}=e;if("string"===t||"bytes"===t||t.endsWith("[]"))return!0;if("tuple"===t)return e.components?.some(h);let r=(0,c.S)(e.type);return!!(r&&h({...e,type:r[1]}))}},86899:function(e,t,r){"use strict";r.d(t,{p:function(){return c}});var n=r(21746),i=r(57412),a=r(3972),o=r(40552),s=r(34450),l=r(80522);function c({abi:e,data:t}){let r=(0,a.tP)(t,0,4);if("0x"===r)throw new i.wb;let c=[...e||[],n.Up,n.hZ],u=c.find(e=>"error"===e.type&&r===(0,o.o)((0,l.t)(e)));if(!u)throw new i.yP(r,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:u,args:"inputs"in u&&u.inputs&&u.inputs.length>0?(0,s.r)(u.inputs,(0,a.tP)(t,4)):void 0,errorName:u.name}}},7210:function(e,t,r){"use strict";r.d(t,{k:function(){return s}});var n=r(57412),i=r(34450),a=r(40840);let o="/docs/contract/decodeFunctionResult";function s({abi:e,args:t,functionName:r,data:s}){let l=e[0];if(r&&!(l=(0,a.m)({abi:e,args:t,name:r})))throw new n.xL(r,{docsPath:o});if("function"!==l.type)throw new n.xL(void 0,{docsPath:o});if(!l.outputs)throw new n.MX(l.name,{docsPath:o});let c=(0,i.r)(l.outputs,s);return c&&c.length>1?c:c&&1===c.length?c[0]:void 0}},45444:function(e,t,r){"use strict";r.d(t,{E:function(){return h},S:function(){return p}});var n=r(57412),i=r(26087),a=r(49321),o=r(57040),s=r(61769),l=r(39135),c=r(3972),u=r(92106);function h(e,t){if(e.length!==t.length)throw new n.fs({expectedLength:e.length,givenLength:t.length});let r=function({params:e,values:t}){let r=[];for(let h=0;h<e.length;h++)r.push(function e({param:t,value:r}){let h=p(t.type);if(h){let[i,a]=h;return function(t,{length:r,param:i}){let a=null===r;if(!Array.isArray(t))throw new n.hn(t);if(!a&&t.length!==r)throw new n.gr({expectedLength:r,givenLength:t.length,type:`${i.type}[${r}]`});let s=!1,l=[];for(let r=0;r<t.length;r++){let n=e({param:i,value:t[r]});n.dynamic&&(s=!0),l.push(n)}if(a||s){let e=d(l);if(a){let t=(0,u.eC)(l.length,{size:32});return{dynamic:!0,encoded:l.length>0?(0,o.zo)([t,e]):t}}if(s)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:(0,o.zo)(l.map(({encoded:e})=>e))}}(r,{length:i,param:{...t,type:a}})}if("tuple"===t.type)return function(t,{param:r}){let n=!1,i=[];for(let a=0;a<r.components.length;a++){let o=r.components[a],s=Array.isArray(t)?a:o.name,l=e({param:o,value:t[s]});i.push(l),l.dynamic&&(n=!0)}return{dynamic:n,encoded:n?d(i):(0,o.zo)(i.map(({encoded:e})=>e))}}(r,{param:t});if("address"===t.type)return function(e){if(!(0,a.U)(e))throw new i.b({address:e});return{dynamic:!1,encoded:(0,s.gc)(e.toLowerCase())}}(r);if("bool"===t.type)return{dynamic:!1,encoded:(0,s.gc)((0,u.C4)(r))};if(t.type.startsWith("uint")||t.type.startsWith("int")){let e=t.type.startsWith("int");return function(e,{signed:t}){return{dynamic:!1,encoded:(0,u.eC)(e,{size:32,signed:t})}}(r,{signed:e})}if(t.type.startsWith("bytes"))return function(e,{param:t}){let[,r]=t.type.split("bytes"),i=(0,l.d)(e);if(!r){let t=e;return i%32!=0&&(t=(0,s.gc)(t,{dir:"right",size:32*Math.ceil((e.length-2)/2/32)})),{dynamic:!0,encoded:(0,o.zo)([(0,s.gc)((0,u.eC)(i,{size:32})),t])}}if(i!==parseInt(r))throw new n.M4({expectedSize:parseInt(r),value:e});return{dynamic:!1,encoded:(0,s.gc)(e,{dir:"right"})}}(r,{param:t});if("string"===t.type)return function(e){let t=(0,u.$G)(e),r=Math.ceil((0,l.d)(t)/32),n=[];for(let e=0;e<r;e++)n.push((0,s.gc)((0,c.tP)(t,32*e,(e+1)*32),{dir:"right"}));return{dynamic:!0,encoded:(0,o.zo)([(0,s.gc)((0,u.eC)((0,l.d)(t),{size:32})),...n])}}(r);throw new n.dh(t.type,{docsPath:"/docs/contract/encodeAbiParameters"})}({param:e[h],value:t[h]}));return r}({params:e,values:t}),h=d(r);return 0===h.length?"0x":h}function d(e){let t=0;for(let r=0;r<e.length;r++){let{dynamic:n,encoded:i}=e[r];n?t+=32:t+=(0,l.d)(i)}let r=[],n=[],i=0;for(let a=0;a<e.length;a++){let{dynamic:o,encoded:s}=e[a];o?(r.push((0,u.eC)(t+i,{size:32})),n.push(s),i+=(0,l.d)(s)):r.push(s)}return(0,o.zo)([...r,...n])}function p(e){let t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}},30286:function(e,t,r){"use strict";r.d(t,{w:function(){return s}});var n=r(57412),i=r(57040),a=r(45444);let o="/docs/contract/encodeDeployData";function s({abi:e,args:t,bytecode:r}){if(!t||0===t.length)return r;let s=e.find(e=>"type"in e&&"constructor"===e.type);if(!s)throw new n.fM({docsPath:o});if(!("inputs"in s)||!s.inputs||0===s.inputs.length)throw new n.cO({docsPath:o});let l=(0,a.E)(s.inputs,t);return(0,i.SM)([r,l])}},77799:function(e,t,r){"use strict";r.d(t,{R:function(){return c}});var n=r(57412),i=r(57040),a=r(40552),o=r(45444),s=r(80522),l=r(40840);function c({abi:e,args:t,functionName:r}){let c=e[0];if(r&&!(c=(0,l.m)({abi:e,args:t,name:r})))throw new n.xL(r,{docsPath:"/docs/contract/encodeFunctionData"});if("function"!==c.type)throw new n.xL(void 0,{docsPath:"/docs/contract/encodeFunctionData"});let u=(0,s.t)(c),h=(0,a.o)(u),d="inputs"in c&&c.inputs?(0,o.E)(c.inputs,t??[]):void 0;return(0,i.SM)([h,d??"0x"])}},80522:function(e,t,r){"use strict";r.d(t,{h:function(){return a},t:function(){return i}});var n=r(57412);function i(e,{includeName:t=!1}={}){if("function"!==e.type&&"event"!==e.type&&"error"!==e.type)throw new n.wM(e.type);return`${e.name}(${a(e.inputs,{includeName:t})})`}function a(e,{includeName:t=!1}={}){return e?e.map(e=>(function(e,{includeName:t}){return e.type.startsWith("tuple")?`(${a(e.components,{includeName:t})})${e.type.slice(5)}`:e.type+(t&&e.name?` ${e.name}`:"")})(e,{includeName:t})).join(t?", ":","):""}},40840:function(e,t,r){"use strict";r.d(t,{m:function(){return s}});var n=r(15102),i=r(74059),a=r(40552),o=r(49321);function s({abi:e,args:t=[],name:r}){let s=(0,n.v)(r,{strict:!1}),l=e.filter(e=>s?"function"===e.type?(0,a.o)(e)===r:"event"===e.type&&(0,i.e)(e)===r:"name"in e&&e.name===r);if(0!==l.length){if(1===l.length)return l[0];for(let e of l){if(!("inputs"in e))continue;if(!t||0===t.length){if(!e.inputs||0===e.inputs.length)return e;continue}if(!e.inputs||0===e.inputs.length||e.inputs.length!==t.length)continue;let r=t.every((t,r)=>{let n="inputs"in e&&e.inputs[r];return!!n&&function e(t,r){let n=typeof t,i=r.type;switch(i){case"address":return(0,o.U)(t);case"bool":return"boolean"===n;case"function":case"string":return"string"===n;default:if("tuple"===i&&"components"in r)return Object.values(r.components).every((r,n)=>e(Object.values(t)[n],r));if(/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(i))return"number"===n||"bigint"===n;if(/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i))return"string"===n||t instanceof Uint8Array;if(/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i))return Array.isArray(t)&&t.every(t=>e(t,{...r,type:i.replace(/(\[[0-9]{0,}\])$/,"")}));return!1}}(t,n)});if(r)return e}return l[0]}}},45775:function(e,t,r){"use strict";r.d(t,{K:function(){return l},x:function(){return s}});var n=r(26087),i=r(11187),a=r(56254),o=r(49321);function s(e,t){let r=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),n=(0,a.w)((0,i.qX)(r),"bytes"),o=(t?r.substring(`${t}0x`.length):r).split("");for(let e=0;e<40;e+=2)n[e>>1]>>4>=8&&o[e]&&(o[e]=o[e].toUpperCase()),(15&n[e>>1])>=8&&o[e+1]&&(o[e+1]=o[e+1].toUpperCase());return`0x${o.join("")}`}function l(e,t){if(!(0,o.U)(e))throw new n.b({address:e});return s(e,t)}},49321:function(e,t,r){"use strict";r.d(t,{U:function(){return i}});let n=/^0x[a-fA-F0-9]{40}$/;function i(e){return n.test(e)}},37029:function(e,t,r){"use strict";r.d(t,{n:function(){return l},y:function(){return s}});var n=r(62027),i=r(78863),a=r(39028),o=r(7760);let s=e=>"code"in e?-1!==e.code&&-32004!==e.code&&-32005!==e.code&&-32042!==e.code&&-32603!==e.code:e instanceof i.Gg&&!!e.status&&403!==e.status&&408!==e.status&&413!==e.status&&429!==e.status&&500!==e.status&&502!==e.status&&503!==e.status&&504!==e.status;function l(e,{retryDelay:t=150,retryCount:r=3}={}){return async l=>(0,o.J)(async()=>{try{return await e(l)}catch(e){switch(e.code){case a.s7.code:throw new a.s7(e);case a.B.code:throw new a.B(e);case a.LX.code:throw new a.LX(e);case a.nY.code:throw new a.nY(e);case a.XS.code:throw new a.XS(e);case a.yR.code:throw new a.yR(e);case a.Og.code:throw new a.Og(e);case a.pT.code:throw new a.pT(e);case a.KB.code:throw new a.KB(e);case a.gS.code:throw new a.gS(e);case a.Pv.code:throw new a.Pv(e);case a.GD.code:throw new a.GD(e);case a.ab.code:throw new a.ab(e);case a.PE.code:throw new a.PE(e);case a.Ts.code:throw new a.Ts(e);case a.u5.code:throw new a.u5(e);case a.I0.code:throw new a.I0(e);case a.x3.code:throw new a.x3(e);case 5e3:throw new a.ab(e);default:if(e instanceof n.G)throw e;throw new a.ir(e)}}},{delay:({count:e,error:r})=>{if(r&&r instanceof i.Gg){let e=r?.headers?.get("Retry-After");if(e?.match(/\d/))return 1e3*parseInt(e)}return~~(1<<e)*t},retryCount:r,shouldRetry:({error:e})=>!s(e)})}},86164:function(e,t,r){"use strict";function n(e,t={}){let{fees:r=e.fees,formatters:n=e.formatters,serializers:i=e.serializers}=t;return{...e,fees:r,formatters:n,serializers:i}}r.d(t,{a:function(){return n}})},47864:function(e,t,r){"use strict";r.d(t,{L:function(){return i}});var n=r(80377);function i({blockNumber:e,chain:t,contract:r}){let i=t?.contracts?.[r];if(!i)throw new n.mm({chain:t,contract:{name:r}});if(e&&i.blockCreated&&i.blockCreated>e)throw new n.mm({blockNumber:e,chain:t,contract:{name:r,blockCreated:i.blockCreated}});return i.address}},57040:function(e,t,r){"use strict";function n(e){return"string"==typeof e[0]?i(e):function(e){let t=0;for(let r of e)t+=r.length;let r=new Uint8Array(t),n=0;for(let t of e)r.set(t,n),n+=t.length;return r}(e)}function i(e){return`0x${e.reduce((e,t)=>e+t.replace("0x",""),"")}`}r.d(t,{SM:function(){return i},zo:function(){return n}})},15102:function(e,t,r){"use strict";function n(e,{strict:t=!0}={}){return!!e&&"string"==typeof e&&(t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x"))}r.d(t,{v:function(){return n}})},61769:function(e,t,r){"use strict";r.d(t,{gc:function(){return a},vk:function(){return i}});var n=r(69760);function i(e,{dir:t,size:r=32}={}){return"string"==typeof e?a(e,{dir:t,size:r}):function(e,{dir:t,size:r=32}={}){if(null===r)return e;if(e.length>r)throw new n.$({size:e.length,targetSize:r,type:"bytes"});let i=new Uint8Array(r);for(let n=0;n<r;n++){let a="right"===t;i[a?n:r-n-1]=e[a?n:e.length-n-1]}return i}(e,{dir:t,size:r})}function a(e,{dir:t,size:r=32}={}){if(null===r)return e;let i=e.replace("0x","");if(i.length>2*r)throw new n.$({size:Math.ceil(i.length/2),targetSize:r,type:"hex"});return`0x${i["right"===t?"padEnd":"padStart"](2*r,"0")}`}},39135:function(e,t,r){"use strict";r.d(t,{d:function(){return i}});var n=r(15102);function i(e){return(0,n.v)(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}},3972:function(e,t,r){"use strict";r.d(t,{tP:function(){return o}});var n=r(69760),i=r(15102),a=r(39135);function o(e,t,r,{strict:n}={}){return(0,i.v)(e,{strict:!1})?function(e,t,r,{strict:n}={}){s(e,t);let i=`0x${e.replace("0x","").slice((t??0)*2,(r??e.length)*2)}`;return n&&l(i,t,r),i}(e,t,r,{strict:n}):function(e,t,r,{strict:n}={}){s(e,t);let i=e.slice(t,r);return n&&l(i,t,r),i}(e,t,r,{strict:n})}function s(e,t){if("number"==typeof t&&t>0&&t>(0,a.d)(e)-1)throw new n.m({offset:t,position:"start",size:(0,a.d)(e)})}function l(e,t,r){if("number"==typeof t&&"number"==typeof r&&(0,a.d)(e)!==r-t)throw new n.m({offset:r,position:"end",size:(0,a.d)(e)})}},61836:function(e,t,r){"use strict";function n(e,{dir:t="left"}={}){let r="string"==typeof e?e.replace("0x",""):e,n=0;for(let e=0;e<r.length-1&&"0"===r["left"===t?e:r.length-e-1].toString();e++)n++;return(r="left"===t?r.slice(n):r.slice(0,r.length-n),"string"==typeof e)?(1===r.length&&"right"===t&&(r=`${r}0`),`0x${r.length%2==1?`0${r}`:r}`):r}r.d(t,{f:function(){return n}})},95946:function(e,t,r){"use strict";r.d(t,{XA:function(){return c},Yf:function(){return s},ly:function(){return u},rR:function(){return h},y_:function(){return l}});var n=r(87788),i=r(39135),a=r(61836),o=r(11187);function s(e,{size:t}){if((0,i.d)(e)>t)throw new n.M6({givenSize:(0,i.d)(e),maxSize:t})}function l(e,t={}){let{signed:r}=t;t.size&&s(e,{size:t.size});let n=BigInt(e);if(!r)return n;let i=(e.length-2)/2,a=(1n<<8n*BigInt(i)-1n)-1n;return n<=a?n:n-BigInt(`0x${"f".padStart(2*i,"f")}`)-1n}function c(e,t={}){let r=e;if(t.size&&(s(r,{size:t.size}),r=(0,a.f)(r)),"0x00"===(0,a.f)(r))return!1;if("0x01"===(0,a.f)(r))return!0;throw new n.Cd(r)}function u(e,t={}){return Number(l(e,t))}function h(e,t={}){let r=(0,o.nr)(e);return t.size&&(s(r,{size:t.size}),r=(0,a.f)(r,{dir:"right"})),new TextDecoder().decode(r)}},11187:function(e,t,r){"use strict";r.d(t,{O0:function(){return c},nr:function(){return d},qX:function(){return p}});var n=r(62027),i=r(15102),a=r(61769),o=r(95946),s=r(92106);let l=new TextEncoder;function c(e,t={}){return"number"==typeof e||"bigint"==typeof e?function(e,t){let r=(0,s.eC)(e,t);return d(r)}(e,t):"boolean"==typeof e?function(e,t={}){let r=new Uint8Array(1);return(r[0]=Number(e),"number"==typeof t.size)?((0,o.Yf)(r,{size:t.size}),(0,a.vk)(r,{size:t.size})):r}(e,t):(0,i.v)(e)?d(e,t):p(e,t)}let u={zero:48,nine:57,A:65,F:70,a:97,f:102};function h(e){return e>=u.zero&&e<=u.nine?e-u.zero:e>=u.A&&e<=u.F?e-(u.A-10):e>=u.a&&e<=u.f?e-(u.a-10):void 0}function d(e,t={}){let r=e;t.size&&((0,o.Yf)(r,{size:t.size}),r=(0,a.vk)(r,{dir:"right",size:t.size}));let i=r.slice(2);i.length%2&&(i=`0${i}`);let s=i.length/2,l=new Uint8Array(s);for(let e=0,t=0;e<s;e++){let r=h(i.charCodeAt(t++)),a=h(i.charCodeAt(t++));if(void 0===r||void 0===a)throw new n.G(`Invalid byte sequence ("${i[t-2]}${i[t-1]}" in "${i}").`);l[e]=16*r+a}return l}function p(e,t={}){let r=l.encode(e);return"number"==typeof t.size?((0,o.Yf)(r,{size:t.size}),(0,a.vk)(r,{dir:"right",size:t.size})):r}},92106:function(e,t,r){"use strict";r.d(t,{$G:function(){return d},C4:function(){return l},NC:function(){return s},ci:function(){return c},eC:function(){return u}});var n=r(87788),i=r(61769),a=r(95946);let o=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function s(e,t={}){return"number"==typeof e||"bigint"==typeof e?u(e,t):"string"==typeof e?d(e,t):"boolean"==typeof e?l(e,t):c(e,t)}function l(e,t={}){let r=`0x${Number(e)}`;return"number"==typeof t.size?((0,a.Yf)(r,{size:t.size}),(0,i.vk)(r,{size:t.size})):r}function c(e,t={}){let r="";for(let t=0;t<e.length;t++)r+=o[e[t]];let n=`0x${r}`;return"number"==typeof t.size?((0,a.Yf)(n,{size:t.size}),(0,i.vk)(n,{dir:"right",size:t.size})):n}function u(e,t={}){let r;let{signed:a,size:o}=t,s=BigInt(e);o?r=a?(1n<<8n*BigInt(o)-1n)-1n:2n**(8n*BigInt(o))-1n:"number"==typeof e&&(r=BigInt(Number.MAX_SAFE_INTEGER));let l="bigint"==typeof r&&a?-r-1n:0;if(r&&s>r||s<l){let t="bigint"==typeof e?"n":"";throw new n.J5({max:r?`${r}${t}`:void 0,min:`${l}${t}`,signed:a,size:o,value:`${e}${t}`})}let c=`0x${(a&&s<0?(1n<<BigInt(8*o))+BigInt(s):s).toString(16)}`;return o?(0,i.vk)(c,{size:o}):c}let h=new TextEncoder;function d(e,t={}){let r=h.encode(e);return c(r,t)}},11511:function(e,t,r){"use strict";r.d(t,{i:function(){return i}});var n=r(15102);function i(e){if(66!==e.length||0!==e.indexOf("[")||65!==e.indexOf("]"))return null;let t=`0x${e.slice(1,65)}`;return(0,n.v)(t)?t:null}},74526:function(e,t,r){"use strict";r.d(t,{c:function(){return o}});var n=r(21746),i=r(62027),a=r(97405);function o(e,t){if(!(e instanceof i.G))return!1;let r=e.walk(e=>e instanceof a.Lu);return r instanceof a.Lu&&(!!(r.data?.errorName==="ResolverNotFound"||r.data?.errorName==="ResolverWildcardNotSupported"||r.reason?.includes("Wildcard on non-extended resolvers is not supported"))||"reverse"===t&&r.reason===n.$[50])}},42216:function(e,t,r){"use strict";r.d(t,{d:function(){return s}});var n=r(11187),i=r(92106),a=r(56254),o=r(11511);function s(e){let t=new Uint8Array(32).fill(0);return e?(0,o.i)(e)||(0,a.w)((0,n.qX)(e)):(0,i.ci)(t)}},75719:function(e,t,r){"use strict";r.d(t,{V:function(){return l}});var n=r(57040),i=r(11187),a=r(92106),o=r(56254),s=r(11511);function l(e){let t=new Uint8Array(32).fill(0);if(!e)return(0,a.ci)(t);let r=e.split(".");for(let e=r.length-1;e>=0;e-=1){let a=(0,s.i)(r[e]),l=a?(0,i.O0)(a):(0,o.w)((0,i.qX)(r[e]),"bytes");t=(0,o.w)((0,n.zo)([t,l]),"bytes")}return(0,a.ci)(t)}},72435:function(e,t,r){"use strict";r.d(t,{T:function(){return a}});var n=r(11187),i=r(42216);function a(e){let t=e.replace(/^\.|\.$/gm,"");if(0===t.length)return new Uint8Array(1);let r=new Uint8Array((0,n.qX)(t).byteLength+2),a=0,o=t.split(".");for(let e=0;e<o.length;e++){let t=(0,n.qX)(o[e]);t.byteLength>255&&(t=(0,n.qX)(`[${(0,i.d)(o[e]).slice(2)}]`)),r[a]=t.length,r.set(t,a+1),a+=t.length+1}return r.byteLength!==a+1?r.slice(0,a+1):r}},72365:function(e,t,r){"use strict";r.d(t,{S:function(){return s}});var n=r(57412),i=r(62027),a=r(97405),o=r(39028);function s(e,{abi:t,address:r,args:s,docsPath:l,functionName:c,sender:u}){let{code:h,data:d,message:p,shortMessage:f}=e instanceof a.VQ?e:e instanceof i.G?e.walk(e=>"data"in e)||e.walk():{},m=e instanceof n.wb?new a.Dk({functionName:c}):[3,o.XS.code].includes(h)&&(d||p||f)?new a.Lu({abi:t,data:"object"==typeof d?d.data:d,functionName:c,message:f??p}):e;return new a.uq(m,{abi:t,args:s,contractAddress:r,docsPath:l,functionName:c,sender:u})}},87469:function(e,t,r){"use strict";r.d(t,{k:function(){return a}});var n=r(62027),i=r(26445);function a(e,t){let r=(e.details||"").toLowerCase(),a=e.walk(e=>e.code===i.M_.code);if(a instanceof n.G)return new i.M_({cause:e,message:a.details});if(i.M_.nodeMessage.test(r))return new i.M_({cause:e,message:e.details});if(i.Hh.nodeMessage.test(r))return new i.Hh({cause:e,maxFeePerGas:t?.maxFeePerGas});if(i.G$.nodeMessage.test(r))return new i.G$({cause:e,maxFeePerGas:t?.maxFeePerGas});if(i.ZI.nodeMessage.test(r))return new i.ZI({cause:e,nonce:t?.nonce});if(i.vU.nodeMessage.test(r))return new i.vU({cause:e,nonce:t?.nonce});if(i.se.nodeMessage.test(r))return new i.se({cause:e,nonce:t?.nonce});else if(i.C_.nodeMessage.test(r))return new i.C_({cause:e});else if(i.WF.nodeMessage.test(r))return new i.WF({cause:e,gas:t?.gas});else if(i.dR.nodeMessage.test(r))return new i.dR({cause:e,gas:t?.gas});else if(i.pZ.nodeMessage.test(r))return new i.pZ({cause:e});else if(i.cs.nodeMessage.test(r))return new i.cs({cause:e,maxFeePerGas:t?.maxFeePerGas,maxPriorityFeePerGas:t?.maxPriorityFeePerGas});return new i.cj({cause:e})}},43310:function(e,t,r){"use strict";r.d(t,{G:function(){return o},Z:function(){return a}});var n=r(21366),i=r(6073);function a(e){let t=e.transactions?.map(e=>"string"==typeof e?e:(0,i.Tr)(e));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,difficulty:e.difficulty?BigInt(e.difficulty):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:t,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}let o=(0,n.$)("block",a)},61163:function(e,t,r){"use strict";function n(e,{format:t}){if(!t)return{};let r={},n=t(e||{});return!function t(n){let i=Object.keys(n);for(let a of i)a in e&&(r[a]=e[a]),n[a]&&"object"==typeof n[a]&&!Array.isArray(n[a])&&t(n[a])}(n),r}r.d(t,{K:function(){return n}})},21366:function(e,t,r){"use strict";function n(e,t){return({exclude:r,format:n})=>({exclude:r,format:e=>{let i=t(e);if(r)for(let e of r)delete i[e];return{...i,...n(e)}},type:e})}r.d(t,{$:function(){return n}})},53992:function(e,t,r){"use strict";function n(e,{args:t,eventName:r}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...r?{args:t,eventName:r}:{}}}r.d(t,{U:function(){return n}})},6073:function(e,t,r){"use strict";r.d(t,{Tr:function(){return o},c8:function(){return a},y_:function(){return s}});var n=r(95946),i=r(21366);let a={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function o(e){let t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?(0,n.ly)(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?(0,n.ly)(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?a[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return"legacy"===t.type&&(delete t.accessList,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),"eip2930"===t.type&&(delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t}let s=(0,i.$)("transaction",o)},30866:function(e,t,r){"use strict";r.d(t,{d:function(){return c},f:function(){return l}});var n=r(95946),i=r(21366),a=r(53992),o=r(6073);let s={"0x0":"reverted","0x1":"success"};function l(e){return{...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map(e=>(0,a.U)(e)):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?(0,n.ly)(e.transactionIndex):null,status:e.status?s[e.status]:null,type:e.type?o.c8[e.type]||e.type:null}}let c=(0,i.$)("transactionReceipt",l)},74688:function(e,t,r){"use strict";r.d(t,{iy:function(){return s},tG:function(){return o}});var n=r(92106),i=r(21366);let a={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function o(e){return{...e,gas:void 0!==e.gas?(0,n.eC)(e.gas):void 0,gasPrice:void 0!==e.gasPrice?(0,n.eC)(e.gasPrice):void 0,maxFeePerGas:void 0!==e.maxFeePerGas?(0,n.eC)(e.maxFeePerGas):void 0,maxPriorityFeePerGas:void 0!==e.maxPriorityFeePerGas?(0,n.eC)(e.maxPriorityFeePerGas):void 0,nonce:void 0!==e.nonce?(0,n.eC)(e.nonce):void 0,type:void 0!==e.type?a[e.type]:void 0,value:void 0!==e.value?(0,n.eC)(e.value):void 0}}let s=(0,i.$)("transactionRequest",o)},93714:function(e,t,r){"use strict";function n(e,t){return r=>e[t.name]?.(r)??t(e,r)}r.d(t,{s:function(){return n}})},74059:function(e,t,r){"use strict";r.d(t,{e:function(){return l}});var n=r(11187),i=r(9e3);let a=e=>(0,i.r)(e);var o=r(56254);let s=e=>(0,o.w)((0,n.O0)(e)),l=e=>s(a(e))},40552:function(e,t,r){"use strict";r.d(t,{o:function(){return l}});var n=r(3972),i=r(11187),a=r(9e3),o=r(56254);let s=e=>(0,o.w)((0,i.O0)(e)),l=e=>(0,n.tP)(s((0,a.r)(e)),0,4)},9e3:function(e,t,r){"use strict";r.d(t,{r:function(){return o}});var n=r(80522);let i=/((function|event)\s)?(.*)(\((.*)\))/;function a(e){let t=e.match(i),r=t?.[2]||void 0,n=t?.[3],a=t?.[5]||void 0;return{type:r,name:n,params:a}}let o=e=>{if("string"==typeof e){let t=a(e).name,r=function(e){let t=a(e).params,r=t?.split(",").map(e=>e.trim().split(" "));return r?.map(e=>({type:e[0],name:"indexed"===e[1]?e[2]:e[1],..."indexed"===e[1]?{indexed:!0}:{}}))}(e)||[];return`${t}(${r.map(({type:e})=>e).join(",")})`}return(0,n.t)(e)}},56254:function(e,t,r){"use strict";function n(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`Wrong positive integer: ${e}`)}function i(e,...t){if(!(e instanceof Uint8Array))throw Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function a(e,t=!0){if(e.destroyed)throw Error("Hash instance has been destroyed");if(t&&e.finished)throw Error("Hash#digest() has already been called")}r.d(t,{w:function(){return N}});let o=BigInt(4294967296-1),s=BigInt(32),l=(e,t,r)=>e<<r|t>>>32-r,c=(e,t,r)=>t<<r|e>>>32-r,u=(e,t,r)=>t<<r-32|e>>>64-r,h=(e,t,r)=>e<<r-32|t>>>64-r,d=e=>e instanceof Uint8Array,p=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),f=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0];if(!f)throw Error("Non little-endian hardware is not supported");function m(e){if("string"==typeof e&&(e=function(e){if("string"!=typeof e)throw Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}(e)),!d(e))throw Error(`expected Uint8Array, got ${typeof e}`);return e}Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));class b{clone(){return this._cloneInto()}}let[g,w,y]=[[],[],[]],v=BigInt(0),x=BigInt(1),C=BigInt(2),E=BigInt(7),k=BigInt(256),S=BigInt(113);for(let e=0,t=x,r=1,n=0;e<24;e++){[r,n]=[n,(2*r+3*n)%5],g.push(2*(5*n+r)),w.push((e+1)*(e+2)/2%64);let i=v;for(let e=0;e<7;e++)(t=(t<<x^(t>>E)*S)%k)&C&&(i^=x<<(x<<BigInt(e))-x);y.push(i)}let[A,P]=function(e,t=!1){let r=new Uint32Array(e.length),n=new Uint32Array(e.length);for(let i=0;i<e.length;i++){let{h:a,l}=function(e,t=!1){return t?{h:Number(e&o),l:Number(e>>s&o)}:{h:0|Number(e>>s&o),l:0|Number(e&o)}}(e[i],t);[r[i],n[i]]=[a,l]}return[r,n]}(y,!0),_=(e,t,r)=>r>32?u(e,t,r):l(e,t,r),D=(e,t,r)=>r>32?h(e,t,r):c(e,t,r);class $ extends b{constructor(e,t,r,i=!1,a=24){if(super(),this.blockLen=e,this.suffix=t,this.outputLen=r,this.enableXOF=i,this.rounds=a,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,n(r),0>=this.blockLen||this.blockLen>=200)throw Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=p(this.state)}keccak(){!function(e,t=24){let r=new Uint32Array(10);for(let n=24-t;n<24;n++){for(let t=0;t<10;t++)r[t]=e[t]^e[t+10]^e[t+20]^e[t+30]^e[t+40];for(let t=0;t<10;t+=2){let n=(t+8)%10,i=(t+2)%10,a=r[i],o=r[i+1],s=_(a,o,1)^r[n],l=D(a,o,1)^r[n+1];for(let r=0;r<50;r+=10)e[t+r]^=s,e[t+r+1]^=l}let t=e[2],i=e[3];for(let r=0;r<24;r++){let n=w[r],a=_(t,i,n),o=D(t,i,n),s=g[r];t=e[s],i=e[s+1],e[s]=a,e[s+1]=o}for(let t=0;t<50;t+=10){for(let n=0;n<10;n++)r[n]=e[t+n];for(let n=0;n<10;n++)e[t+n]^=~r[(n+2)%10]&r[(n+4)%10]}e[0]^=A[n],e[1]^=P[n]}r.fill(0)}(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){a(this);let{blockLen:t,state:r}=this;e=m(e);let n=e.length;for(let i=0;i<n;){let a=Math.min(t-this.pos,n-i);for(let t=0;t<a;t++)r[this.pos++]^=e[i++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:e,suffix:t,pos:r,blockLen:n}=this;e[r]^=t,(128&t)!=0&&r===n-1&&this.keccak(),e[n-1]^=128,this.keccak()}writeInto(e){a(this,!1),i(e),this.finish();let t=this.state,{blockLen:r}=this;for(let n=0,i=e.length;n<i;){this.posOut>=r&&this.keccak();let a=Math.min(r-this.posOut,i-n);e.set(t.subarray(this.posOut,this.posOut+a),n),this.posOut+=a,n+=a}return e}xofInto(e){if(!this.enableXOF)throw Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return n(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(!function(e,t){i(e);let r=t.outputLen;if(e.length<r)throw Error(`digestInto() expects output buffer of length at least ${r}`)}(e,this),this.finished)throw Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){let{blockLen:t,suffix:r,outputLen:n,rounds:i,enableXOF:a}=this;return e||(e=new $(t,r,n,a,i)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=i,e.suffix=r,e.outputLen=n,e.enableXOF=a,e.destroyed=this.destroyed,e}}let O=function(e){let t=t=>e().update(m(t)).digest(),r=e();return t.outputLen=r.outputLen,t.blockLen=r.blockLen,t.create=()=>e(),t}(()=>new $(136,1,32));var T=r(15102),I=r(11187),R=r(92106);function N(e,t){let r=O((0,T.v)(e,{strict:!1})?(0,I.O0)(e):e);return"bytes"===(t||"hex")?r:(0,R.NC)(r)}},32357:function(e,t,r){"use strict";r.d(t,{S:function(){return i}});let n=new Map;function i({fn:e,id:t,shouldSplitBatch:r,wait:i=0}){let a=async()=>{let t=l();o();let r=t.map(({args:e})=>e);0!==r.length&&e(r).then(e=>{t.forEach(({pendingPromise:t},r)=>t.resolve?.([e[r],e]))}).catch(e=>{t.forEach(({pendingPromise:t})=>t.reject?.(e))})},o=()=>n.delete(t),s=()=>l().map(({args:e})=>e),l=()=>n.get(t)||[],c=e=>n.set(t,[...l(),e]);return{flush:o,async schedule(e){let t={},n=new Promise((e,r)=>{t.resolve=e,t.reject=r}),o=r?.([...s(),e]);o&&a();let u=l().length>0;return u?(c({args:e,pendingPromise:t}),n):(c({args:e,pendingPromise:t}),setTimeout(a,i),n)}}}},7760:function(e,t,r){"use strict";r.d(t,{J:function(){return i}});var n=r(62914);function i(e,{delay:t=100,retryCount:r=2,shouldRetry:i=()=>!0}={}){return new Promise((a,o)=>{let s=async({count:l=0}={})=>{let c=async({error:e})=>{let r="function"==typeof t?t({count:l,error:e}):t;r&&await (0,n.D)(r),s({count:l+1})};try{let t=await e();a(t)}catch(e){if(l<r&&await i({count:l,error:e}))return c({error:e});o(e)}};s()})}},96070:function(e,t,r){"use strict";r.d(t,{P:function(){return n}});let n=(e,t,r)=>JSON.stringify(e,(e,r)=>{let n="bigint"==typeof r?r.toString():r;return"function"==typeof t?t(e,n):n},r)},47531:function(e,t,r){"use strict";r.d(t,{F:function(){return l}});var n=r(14503),i=r(26087),a=r(26445),o=r(33639),s=r(49321);function l(e){let{account:t,gasPrice:r,maxFeePerGas:l,maxPriorityFeePerGas:c,to:u}=e,h=t?(0,n.T)(t):void 0;if(h&&!(0,s.U)(h.address))throw new i.b({address:h.address});if(u&&!(0,s.U)(u))throw new i.b({address:u});if(void 0!==r&&(void 0!==l||void 0!==c))throw new o.xY;if(l&&l>2n**256n-1n)throw new a.Hh({maxFeePerGas:l});if(c&&l&&c>l)throw new a.cs({maxFeePerGas:l,maxPriorityFeePerGas:c})}},82994:function(e,t,r){"use strict";r.d(t,{l:function(){return i}});var n=r(33639);function i(e){if(e.type)return e.type;if(void 0!==e.maxFeePerGas||void 0!==e.maxPriorityFeePerGas)return"eip1559";if(void 0!==e.gasPrice)return void 0!==e.accessList?"eip2930":"legacy";throw new n.j3({transaction:e})}},71352:function(e,t,r){"use strict";r.d(t,{cj:function(){return h},iC:function(){return u}});var n=r(57412),i=r(26087),a=r(49321),o=r(39135),s=r(92106);let l=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,c=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function u({domain:e,message:t,primaryType:r,types:u}){let h=(e,t)=>{for(let r of e){let{name:e,type:d}=r,p=t[e],f=d.match(c);if(f&&("number"==typeof p||"bigint"==typeof p)){let[e,t,r]=f;(0,s.eC)(p,{signed:"int"===t,size:parseInt(r)/8})}if("address"===d&&"string"==typeof p&&!(0,a.U)(p))throw new i.b({address:p});let m=d.match(l);if(m){let[e,t]=m;if(t&&(0,o.d)(p)!==parseInt(t))throw new n.KY({expectedSize:parseInt(t),givenSize:(0,o.d)(p)})}let b=u[d];b&&h(b,p)}};if(u.EIP712Domain&&e&&h(u.EIP712Domain,e),"EIP712Domain"!==r){let e=u[r];h(e,t)}}function h({domain:e}){return["string"==typeof e?.name&&{name:"name",type:"string"},e?.version&&{name:"version",type:"string"},"number"==typeof e?.chainId&&{name:"chainId",type:"uint256"},e?.verifyingContract&&{name:"verifyingContract",type:"address"},e?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}},39625:function(e,t,r){"use strict";r.d(t,{d:function(){return a}});var n=r(84192),i=r(15229);function a(e,t="wei"){return(0,i.b)(e,n.ez[t])}},67795:function(e,t,r){"use strict";r.d(t,{o:function(){return a}});var n=r(84192),i=r(15229);function a(e,t="wei"){return(0,i.b)(e,n.Zn[t])}},15229:function(e,t,r){"use strict";function n(e,t){let r=e.toString(),n=r.startsWith("-");n&&(r=r.slice(1));let[i,a]=[(r=r.padStart(t,"0")).slice(0,r.length-t),r.slice(r.length-t)];return a=a.replace(/(0+)$/,""),`${n?"-":""}${i||"0"}${a?`.${a}`:""}`}r.d(t,{b:function(){return n}})},62914:function(e,t,r){"use strict";async function n(e){return new Promise(t=>setTimeout(t,e))}r.d(t,{D:function(){return n}})},69077:function(e,t,r){"use strict";let n;function i(){}r.d(t,{eM:function(){return ev},_g:function(){return eg},mA:function(){return eT},qL:function(){return eN},LN:function(){return eU},g0:function(){return ej},py:function(){return eD}});let a="undefined"==typeof window||"Deno"in window;function o(){}function s(e){return"number"==typeof e&&e>=0&&e!==1/0}function l(e,t){return Math.max(e+(t||0)-Date.now(),0)}function c(e,t,r){return x(e)?"function"==typeof t?{...r,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function u(e,t,r){return x(e)?"function"==typeof t?{...r,mutationKey:e,mutationFn:t}:{...t,mutationKey:e}:"function"==typeof e?{...t,mutationFn:e}:{...e}}function h(e,t,r){return x(e)?[{...t,queryKey:e},r]:[e||{},t]}function d(e,t){let{type:r="all",exact:n,fetchStatus:i,predicate:a,queryKey:o,stale:s}=e;if(x(o)){if(n){if(t.queryHash!==f(o,t.options))return!1}else{if(!b(t.queryKey,o))return!1}}if("all"!==r){let e=t.isActive();if("active"===r&&!e||"inactive"===r&&e)return!1}return("boolean"!=typeof s||t.isStale()===s)&&(void 0===i||i===t.state.fetchStatus)&&(!a||!!a(t))}function p(e,t){let{exact:r,fetching:n,predicate:i,mutationKey:a}=e;if(x(a)){if(!t.options.mutationKey)return!1;if(r){if(m(t.options.mutationKey)!==m(a))return!1}else{if(!b(t.options.mutationKey,a))return!1}}return("boolean"!=typeof n||"loading"===t.state.status===n)&&(!i||!!i(t))}function f(e,t){let r=(null==t?void 0:t.queryKeyHashFn)||m;return r(e)}function m(e){return JSON.stringify(e,(e,t)=>y(t)?Object.keys(t).sort().reduce((e,r)=>(e[r]=t[r],e),{}):t)}function b(e,t){return e===t||typeof e==typeof t&&!!e&&!!t&&"object"==typeof e&&"object"==typeof t&&!Object.keys(t).some(r=>!b(e[r],t[r]))}function g(e,t){if(e&&!t||t&&!e)return!1;for(let r in e)if(e[r]!==t[r])return!1;return!0}function w(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function y(e){if(!v(e))return!1;let t=e.constructor;if(void 0===t)return!0;let r=t.prototype;return!!(v(r)&&r.hasOwnProperty("isPrototypeOf"))}function v(e){return"[object Object]"===Object.prototype.toString.call(e)}function x(e){return Array.isArray(e)}function C(e){return new Promise(t=>{setTimeout(t,e)})}function E(e){C(0).then(e)}function k(e,t,r){return null!=r.isDataEqual&&r.isDataEqual(e,t)?e:"function"==typeof r.structuralSharing?r.structuralSharing(e,t):!1!==r.structuralSharing?function e(t,r){if(t===r)return t;let n=w(t)&&w(r);if(n||y(t)&&y(r)){let i=n?t.length:Object.keys(t).length,a=n?r:Object.keys(r),o=a.length,s=n?[]:{},l=0;for(let i=0;i<o;i++){let o=n?i:a[i];s[o]=e(t[o],r[o]),s[o]===t[o]&&l++}return i===o&&l===i?t:s}return r}(e,t):t}let S=console,A=function(){let e=[],t=0,r=e=>{e()},n=e=>{e()},i=e=>{let r;t++;try{r=e()}finally{--t||s()}return r},a=n=>{t?e.push(n):E(()=>{r(n)})},o=e=>(...t)=>{a(()=>{e(...t)})},s=()=>{let t=e;e=[],t.length&&E(()=>{n(()=>{t.forEach(e=>{r(e)})})})},l=e=>{r=e},c=e=>{n=e};return{batch:i,batchCalls:o,schedule:a,setNotifyFunction:l,setBatchNotifyFunction:c}}();class P{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){let t={listener:e};return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}let _=new class extends P{constructor(){super(),this.setup=e=>{if(!a&&window.addEventListener){let t=()=>e();return window.addEventListener("visibilitychange",t,!1),window.addEventListener("focus",t,!1),()=>{window.removeEventListener("visibilitychange",t),window.removeEventListener("focus",t)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()})}setFocused(e){let t=this.focused!==e;t&&(this.focused=e,this.onFocus())}onFocus(){this.listeners.forEach(({listener:e})=>{e()})}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}},D=["online","offline"],$=new class extends P{constructor(){super(),this.setup=e=>{if(!a&&window.addEventListener){let t=()=>e();return D.forEach(e=>{window.addEventListener(e,t,!1)}),()=>{D.forEach(e=>{window.removeEventListener(e,t)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setOnline(e):this.onOnline()})}setOnline(e){let t=this.online!==e;t&&(this.online=e,this.onOnline())}onOnline(){this.listeners.forEach(({listener:e})=>{e()})}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}};function O(e){return Math.min(1e3*2**e,3e4)}function T(e){return(null!=e?e:"online")!=="online"||$.isOnline()}class I{constructor(e){this.revert=null==e?void 0:e.revert,this.silent=null==e?void 0:e.silent}}function R(e){return e instanceof I}function N(e){let t,r,n,i=!1,a=0,o=!1,s=new Promise((e,t)=>{r=e,n=t}),l=t=>{o||(p(new I(t)),null==e.abort||e.abort())},c=()=>{i=!0},u=()=>{i=!1},h=()=>!_.isFocused()||"always"!==e.networkMode&&!$.isOnline(),d=n=>{o||(o=!0,null==e.onSuccess||e.onSuccess(n),null==t||t(),r(n))},p=r=>{o||(o=!0,null==e.onError||e.onError(r),null==t||t(),n(r))},f=()=>new Promise(r=>{t=e=>{let t=o||!h();return t&&r(e),t},null==e.onPause||e.onPause()}).then(()=>{t=void 0,o||null==e.onContinue||e.onContinue()}),m=()=>{let t;if(!o){try{t=e.fn()}catch(e){t=Promise.reject(e)}Promise.resolve(t).then(d).catch(t=>{var r,n;if(o)return;let s=null!=(r=e.retry)?r:3,l=null!=(n=e.retryDelay)?n:O,c="function"==typeof l?l(a,t):l,u=!0===s||"number"==typeof s&&a<s||"function"==typeof s&&s(a,t);if(i||!u){p(t);return}a++,null==e.onFail||e.onFail(a,t),C(c).then(()=>{if(h())return f()}).then(()=>{i?p(t):m()})})}};return T(e.networkMode)?m():f().then(m),{promise:s,cancel:l,continue:()=>{let e=null==t?void 0:t();return e?s:Promise.resolve()},cancelRetry:c,continueRetry:u}}class U{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),s(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,null!=e?e:a?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class B extends U{constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||S,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||function(e){let t="function"==typeof e.initialData?e.initialData():e.initialData,r=void 0!==t,n=r?"function"==typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:r?null!=n?n:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:r?"success":"loading",fetchStatus:"idle"}}(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.cache.remove(this)}setData(e,t){let r=k(this.state.data,e,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:null==t?void 0:t.updatedAt,manual:null==t?void 0:t.manual}),r}setState(e,t){this.dispatch({type:"setState",state:e,setStateOptions:t})}cancel(e){var t;let r=this.promise;return null==(t=this.retryer)||t.cancel(e),r?r.then(o).catch(o):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(e=>!1!==e.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!l(this.state.dataUpdatedAt,e)}onFocus(){var e;let t=this.observers.find(e=>e.shouldFetchOnWindowFocus());t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}onOnline(){var e;let t=this.observers.find(e=>e.shouldFetchOnReconnect());t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,t){var r,n,i,a;if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&null!=t&&t.cancelRefetch)this.cancel({silent:!0});else if(this.promise)return null==(i=this.retryer)||i.continueRetry(),this.promise}if(e&&this.setOptions(e),!this.options.queryFn){let e=this.observers.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}let o=function(){if("function"==typeof AbortController)return new AbortController}(),s={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},l=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>{if(o)return this.abortSignalConsumed=!0,o.signal}})};l(s);let c=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(s)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'"),u={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:c};l(u),null==(r=this.options.behavior)||r.onFetch(u),this.revertState=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==(null==(n=u.fetchOptions)?void 0:n.meta))&&this.dispatch({type:"fetch",meta:null==(a=u.fetchOptions)?void 0:a.meta});let h=e=>{if(R(e)&&e.silent||this.dispatch({type:"error",error:e}),!R(e)){var t,r,n,i;null==(t=(r=this.cache.config).onError)||t.call(r,e,this),null==(n=(i=this.cache.config).onSettled)||n.call(i,this.state.data,e,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=N({fn:u.fetchFn,abort:null==o?void 0:o.abort.bind(o),onSuccess:e=>{var t,r,n,i;if(void 0===e){h(Error(this.queryHash+" data is undefined"));return}this.setData(e),null==(t=(r=this.cache.config).onSuccess)||t.call(r,e,this),null==(n=(i=this.cache.config).onSettled)||n.call(i,e,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:h,onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:u.options.retry,retryDelay:u.options.retryDelay,networkMode:u.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){this.state=(t=>{var r,n;switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null!=(r=e.meta)?r:null,fetchStatus:T(this.options.networkMode)?"fetching":"paused",...!t.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...t,data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:null!=(n=e.dataUpdatedAt)?n:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let i=e.error;if(R(i)&&i.revert&&this.revertState)return{...this.revertState,fetchStatus:"idle"};return{...t,error:i,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error"};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}})(this.state),A.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate(e)}),this.cache.notify({query:this,type:"updated",action:e})})}}class M extends P{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,t,r){var n;let i=t.queryKey,a=null!=(n=t.queryHash)?n:f(i,t),o=this.get(a);return o||(o=new B({cache:this,logger:e.getLogger(),queryKey:i,queryHash:a,options:e.defaultQueryOptions(t),state:r,defaultOptions:e.getQueryDefaults(i)}),this.add(o)),o}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){let t=this.queriesMap[e.queryHash];t&&(e.destroy(),this.queries=this.queries.filter(t=>t!==e),t===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){A.batch(()=>{this.queries.forEach(e=>{this.remove(e)})})}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,t){let[r]=h(e,t);return void 0===r.exact&&(r.exact=!0),this.queries.find(e=>d(r,e))}findAll(e,t){let[r]=h(e,t);return Object.keys(r).length>0?this.queries.filter(e=>d(r,e)):this.queries}notify(e){A.batch(()=>{this.listeners.forEach(({listener:t})=>{t(e)})})}onFocus(){A.batch(()=>{this.queries.forEach(e=>{e.onFocus()})})}onOnline(){A.batch(()=>{this.queries.forEach(e=>{e.onOnline()})})}}class j extends U{constructor(e){super(),this.defaultOptions=e.defaultOptions,this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||S,this.observers=[],this.state=e.state||L(),this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter(t=>t!==e),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){var e,t;return null!=(e=null==(t=this.retryer)?void 0:t.continue())?e:this.execute()}async execute(){var e,t,r,n,i,a,o,s,l,c,u,h,d,p,f,m,b,g,w,y;let v="loading"===this.state.status;try{if(!v){this.dispatch({type:"loading",variables:this.options.variables}),await (null==(l=(c=this.mutationCache.config).onMutate)?void 0:l.call(c,this.state.variables,this));let e=await (null==(u=(h=this.options).onMutate)?void 0:u.call(h,this.state.variables));e!==this.state.context&&this.dispatch({type:"loading",context:e,variables:this.state.variables})}let d=await (()=>{var e;return this.retryer=N({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(e=this.options.retry)?e:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise})();return await (null==(e=(t=this.mutationCache.config).onSuccess)?void 0:e.call(t,d,this.state.variables,this.state.context,this)),await (null==(r=(n=this.options).onSuccess)?void 0:r.call(n,d,this.state.variables,this.state.context)),await (null==(i=(a=this.mutationCache.config).onSettled)?void 0:i.call(a,d,null,this.state.variables,this.state.context,this)),await (null==(o=(s=this.options).onSettled)?void 0:o.call(s,d,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:d}),d}catch(e){try{throw await (null==(d=(p=this.mutationCache.config).onError)?void 0:d.call(p,e,this.state.variables,this.state.context,this)),await (null==(f=(m=this.options).onError)?void 0:f.call(m,e,this.state.variables,this.state.context)),await (null==(b=(g=this.mutationCache.config).onSettled)?void 0:b.call(g,void 0,e,this.state.variables,this.state.context,this)),await (null==(w=(y=this.options).onSettled)?void 0:w.call(y,void 0,e,this.state.variables,this.state.context)),e}finally{this.dispatch({type:"error",error:e})}}}dispatch(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"loading":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!T(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...t,...e.state}}})(this.state),A.batch(()=>{this.observers.forEach(t=>{t.onMutationUpdate(e)}),this.mutationCache.notify({mutation:this,type:"updated",action:e})})}}function L(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class F extends P{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,t,r){let n=new j({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(t),state:r,defaultOptions:t.mutationKey?e.getMutationDefaults(t.mutationKey):void 0});return this.add(n),n}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter(t=>t!==e),this.notify({type:"removed",mutation:e})}clear(){A.batch(()=>{this.mutations.forEach(e=>{this.remove(e)})})}getAll(){return this.mutations}find(e){return void 0===e.exact&&(e.exact=!0),this.mutations.find(t=>p(e,t))}findAll(e){return this.mutations.filter(t=>p(e,t))}notify(e){A.batch(()=>{this.listeners.forEach(({listener:t})=>{t(e)})})}resumePausedMutations(){var e;return this.resuming=(null!=(e=this.resuming)?e:Promise.resolve()).then(()=>{let e=this.mutations.filter(e=>e.state.isPaused);return A.batch(()=>e.reduce((e,t)=>e.then(()=>t.continue().catch(o)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function z(e,t){return null==e.getNextPageParam?void 0:e.getNextPageParam(t[t.length-1],t)}class H{constructor(e={}){this.queryCache=e.queryCache||new M,this.mutationCache=e.mutationCache||new F,this.logger=e.logger||S,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,1===this.mountCount&&(this.unsubscribeFocus=_.subscribe(()=>{_.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=$.subscribe(()=>{$.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var e,t;this.mountCount--,0===this.mountCount&&(null==(e=this.unsubscribeFocus)||e.call(this),this.unsubscribeFocus=void 0,null==(t=this.unsubscribeOnline)||t.call(this),this.unsubscribeOnline=void 0)}isFetching(e,t){let[r]=h(e,t);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,t){var r;return null==(r=this.queryCache.find(e,t))?void 0:r.state.data}ensureQueryData(e,t,r){let n=c(e,t,r),i=this.getQueryData(n.queryKey);return i?Promise.resolve(i):this.fetchQuery(n)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:e,state:t})=>{let r=t.data;return[e,r]})}setQueryData(e,t,r){let n=this.queryCache.find(e),i=null==n?void 0:n.state.data,a="function"==typeof t?t(i):t;if(void 0===a)return;let o=c(e),s=this.defaultQueryOptions(o);return this.queryCache.build(this,s).setData(a,{...r,manual:!0})}setQueriesData(e,t,r){return A.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,r)]))}getQueryState(e,t){var r;return null==(r=this.queryCache.find(e,t))?void 0:r.state}removeQueries(e,t){let[r]=h(e,t),n=this.queryCache;A.batch(()=>{n.findAll(r).forEach(e=>{n.remove(e)})})}resetQueries(e,t,r){let[n,i]=h(e,t,r),a=this.queryCache,o={type:"active",...n};return A.batch(()=>(a.findAll(n).forEach(e=>{e.reset()}),this.refetchQueries(o,i)))}cancelQueries(e,t,r){let[n,i={}]=h(e,t,r);void 0===i.revert&&(i.revert=!0);let a=A.batch(()=>this.queryCache.findAll(n).map(e=>e.cancel(i)));return Promise.all(a).then(o).catch(o)}invalidateQueries(e,t,r){let[n,i]=h(e,t,r);return A.batch(()=>{var e,t;if(this.queryCache.findAll(n).forEach(e=>{e.invalidate()}),"none"===n.refetchType)return Promise.resolve();let r={...n,type:null!=(e=null!=(t=n.refetchType)?t:n.type)?e:"active"};return this.refetchQueries(r,i)})}refetchQueries(e,t,r){let[n,i]=h(e,t,r),a=A.batch(()=>this.queryCache.findAll(n).filter(e=>!e.isDisabled()).map(e=>{var t;return e.fetch(void 0,{...i,cancelRefetch:null==(t=null==i?void 0:i.cancelRefetch)||t,meta:{refetchPage:n.refetchPage}})})),s=Promise.all(a).then(o);return null!=i&&i.throwOnError||(s=s.catch(o)),s}fetchQuery(e,t,r){let n=c(e,t,r),i=this.defaultQueryOptions(n);void 0===i.retry&&(i.retry=!1);let a=this.queryCache.build(this,i);return a.isStaleByTime(i.staleTime)?a.fetch(i):Promise.resolve(a.state.data)}prefetchQuery(e,t,r){return this.fetchQuery(e,t,r).then(o).catch(o)}fetchInfiniteQuery(e,t,r){let n=c(e,t,r);return n.behavior={onFetch:e=>{e.fetchFn=()=>{var t,r,n,i,a,o,s;let l;let c=null==(t=e.fetchOptions)?void 0:null==(r=t.meta)?void 0:r.refetchPage,u=null==(n=e.fetchOptions)?void 0:null==(i=n.meta)?void 0:i.fetchMore,h=null==u?void 0:u.pageParam,d=(null==u?void 0:u.direction)==="forward",p=(null==u?void 0:u.direction)==="backward",f=(null==(a=e.state.data)?void 0:a.pages)||[],m=(null==(o=e.state.data)?void 0:o.pageParams)||[],b=m,g=!1,w=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>{var t,r;return null!=(t=e.signal)&&t.aborted?g=!0:null==(r=e.signal)||r.addEventListener("abort",()=>{g=!0}),e.signal}})},y=e.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+e.options.queryHash+"'")),v=(e,t,r,n)=>(b=n?[t,...b]:[...b,t],n?[r,...e]:[...e,r]),x=(t,r,n,i)=>{if(g)return Promise.reject("Cancelled");if(void 0===n&&!r&&t.length)return Promise.resolve(t);let a={queryKey:e.queryKey,pageParam:n,meta:e.options.meta};w(a);let o=y(a),s=Promise.resolve(o).then(e=>v(t,n,e,i));return s};if(f.length){if(d){let t=void 0!==h,r=t?h:z(e.options,f);l=x(f,t,r)}else if(p){let t=void 0!==h,r=t?h:null==(s=e.options).getPreviousPageParam?void 0:s.getPreviousPageParam(f[0],f);l=x(f,t,r,!0)}else{b=[];let t=void 0===e.options.getNextPageParam,r=!c||!f[0]||c(f[0],0,f);l=r?x([],t,m[0]):Promise.resolve(v([],m[0],f[0]));for(let r=1;r<f.length;r++)l=l.then(n=>{let i=!c||!f[r]||c(f[r],r,f);if(i){let i=t?m[r]:z(e.options,n);return x(n,t,i)}return Promise.resolve(v(n,m[r],f[r]))})}}else l=x([]);let C=l.then(e=>({pages:e,pageParams:b}));return C}}},this.fetchQuery(n)}prefetchInfiniteQuery(e,t,r){return this.fetchInfiniteQuery(e,t,r).then(o).catch(o)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,t){let r=this.queryDefaults.find(t=>m(e)===m(t.queryKey));r?r.defaultOptions=t:this.queryDefaults.push({queryKey:e,defaultOptions:t})}getQueryDefaults(e){if(!e)return;let t=this.queryDefaults.find(t=>b(e,t.queryKey));return null==t?void 0:t.defaultOptions}setMutationDefaults(e,t){let r=this.mutationDefaults.find(t=>m(e)===m(t.mutationKey));r?r.defaultOptions=t:this.mutationDefaults.push({mutationKey:e,defaultOptions:t})}getMutationDefaults(e){if(!e)return;let t=this.mutationDefaults.find(t=>b(e,t.mutationKey));return null==t?void 0:t.defaultOptions}defaultQueryOptions(e){if(null!=e&&e._defaulted)return e;let t={...this.defaultOptions.queries,...this.getQueryDefaults(null==e?void 0:e.queryKey),...e,_defaulted:!0};return!t.queryHash&&t.queryKey&&(t.queryHash=f(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.useErrorBoundary&&(t.useErrorBoundary=!!t.suspense),t}defaultMutationOptions(e){return null!=e&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(null==e?void 0:e.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}function W(e){return e.state.isPaused}function q(e){return"success"===e.state.status}let G=["added","removed","updated"];function Z(e){return G.includes(e)}async function V({queryClient:e,persister:t,maxAge:r=864e5,buster:n="",hydrateOptions:i}){try{let a=await t.restoreClient();if(a){if(a.timestamp){let o=Date.now()-a.timestamp>r,s=a.buster!==n;o||s?t.removeClient():function(e,t,r){if("object"!=typeof t||null===t)return;let n=e.getMutationCache(),i=e.getQueryCache(),a=t.mutations||[],o=t.queries||[];a.forEach(t=>{var i;n.build(e,{...null==r?void 0:null==(i=r.defaultOptions)?void 0:i.mutations,mutationKey:t.mutationKey},t.state)}),o.forEach(({queryKey:t,state:n,queryHash:a})=>{var o;let s=i.get(a);if(s){if(s.state.dataUpdatedAt<n.dataUpdatedAt){let{fetchStatus:e,...t}=n;s.setState(t)}return}i.build(e,{...null==r?void 0:null==(o=r.defaultOptions)?void 0:o.queries,queryKey:t,queryHash:a},{...n,fetchStatus:"idle"})})}(e,a.clientState,i)}else t.removeClient()}}catch(e){t.removeClient()}}async function K({queryClient:e,persister:t,buster:r="",dehydrateOptions:n}){let i={buster:r,timestamp:Date.now(),clientState:function(e,t={}){let r=[],n=[];if(!1!==t.dehydrateMutations){let n=t.shouldDehydrateMutation||W;e.getMutationCache().getAll().forEach(e=>{n(e)&&r.push({mutationKey:e.options.mutationKey,state:e.state})})}if(!1!==t.dehydrateQueries){let r=t.shouldDehydrateQuery||q;e.getQueryCache().getAll().forEach(e=>{r(e)&&n.push({state:e.state,queryKey:e.queryKey,queryHash:e.queryHash})})}return{mutations:r,queries:n}}(e,n)};await t.persistClient(i)}var Q=r(58438),Y=r(67294);let X=Y.createContext(void 0),J=Y.createContext(!1);function ee(e,t){return e||(t&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=X),window.ReactQueryClientContext):X)}let et=({context:e}={})=>{let t=Y.useContext(ee(e,Y.useContext(J)));if(!t)throw Error("No QueryClient set, use QueryClientProvider to set one");return t},er=({client:e,children:t,context:r,contextSharing:n=!1})=>{Y.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]);let i=ee(r,n);return Y.createElement(J.Provider,{value:!r&&n},Y.createElement(i.Provider,{value:e},t))},en=Y.createContext(!1),ei=()=>Y.useContext(en);en.Provider;let ea=Y.createContext((n=!1,{clearReset:()=>{n=!1},reset:()=>{n=!0},isReset:()=>n})),eo=()=>Y.useContext(ea);var es=r(61688);class el extends P{constructor(e,t){super(),this.client=e,this.setOptions(t),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var t;let r=this.options;this.options=this.client.defaultMutationOptions(e),g(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(t=this.currentMutation)||t.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.currentMutation)||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();let t={listeners:!0};"success"===e.type?t.onSuccess=!0:"error"===e.type&&(t.onError=!0),this.notify(t)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==e?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){let e=this.currentMutation?this.currentMutation.state:L(),t={...e,isLoading:"loading"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset};this.currentResult=t}notify(e){A.batch(()=>{if(this.mutateOptions&&this.hasListeners()){var t,r,n,i,a,o,s,l;e.onSuccess?(null==(t=(r=this.mutateOptions).onSuccess)||t.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(n=(i=this.mutateOptions).onSettled)||n.call(i,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)):e.onError&&(null==(a=(o=this.mutateOptions).onError)||a.call(o,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(s=(l=this.mutateOptions).onSettled)||s.call(l,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context))}e.listeners&&this.listeners.forEach(({listener:e})=>{e(this.currentResult)})})}}let ec=es.useSyncExternalStore;function eu(){}class eh extends P{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){1===this.listeners.size&&(this.currentQuery.addObserver(this),ed(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return ep(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return ep(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){let r=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),g(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),void 0!==this.options.enabled&&"boolean"!=typeof this.options.enabled)throw Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();let i=this.hasListeners();i&&ef(this.currentQuery,n,this.options,r)&&this.executeFetch(),this.updateResult(t),i&&(this.currentQuery!==n||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();let a=this.computeRefetchInterval();i&&(this.currentQuery!==n||this.options.enabled!==r.enabled||a!==this.currentRefetchInterval)&&this.updateRefetchInterval(a)}getOptimisticResult(e){let t=this.client.getQueryCache().build(this.client,e),r=this.createResult(t,e);return e.keepPreviousData||(void 0!==e.placeholderData?!r.isPlaceholderData:g(this.getCurrentResult(),r))||(this.currentResult=r,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),r}getCurrentResult(){return this.currentResult}trackResult(e){let t={};return Object.keys(e).forEach(r=>{Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),e[r])})}),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){let t=this.client.defaultQueryOptions(e),r=this.client.getQueryCache().build(this.client,t);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,t))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:null==(t=e.cancelRefetch)||t}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return null!=e&&e.throwOnError||(t=t.catch(o)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),a||this.currentResult.isStale||!s(this.options.staleTime))return;let e=l(this.currentResult.dataUpdatedAt,this.options.staleTime);this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},e+1)}computeRefetchInterval(){var e;return"function"==typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(e=this.options.refetchInterval)&&e}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!a&&!1!==this.options.enabled&&s(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||_.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){let r;let n=this.currentQuery,i=this.options,a=this.currentResult,o=this.currentResultState,s=this.currentResultOptions,l=e!==n,c=l?e.state:this.currentQueryInitialState,u=l?this.currentResult:this.previousQueryResult,{state:h}=e,{dataUpdatedAt:d,error:p,errorUpdatedAt:f,fetchStatus:m,status:b}=h,g=!1,w=!1;if(t._optimisticResults){let r=this.hasListeners(),a=!r&&ed(e,t),o=r&&ef(e,n,t,i);(a||o)&&(m=T(e.options.networkMode)?"fetching":"paused",d||(b="loading")),"isRestoring"===t._optimisticResults&&(m="idle")}if(t.keepPreviousData&&!h.dataUpdatedAt&&null!=u&&u.isSuccess&&"error"!==b)r=u.data,d=u.dataUpdatedAt,b=u.status,g=!0;else if(t.select&&void 0!==h.data){if(a&&h.data===(null==o?void 0:o.data)&&t.select===this.selectFn)r=this.selectResult;else try{this.selectFn=t.select,r=t.select(h.data),r=k(null==a?void 0:a.data,r,t),this.selectResult=r,this.selectError=null}catch(e){this.selectError=e}}else r=h.data;if(void 0!==t.placeholderData&&void 0===r&&"loading"===b){let e;if(null!=a&&a.isPlaceholderData&&t.placeholderData===(null==s?void 0:s.placeholderData))e=a.data;else if(e="function"==typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&void 0!==e)try{e=t.select(e),this.selectError=null}catch(e){this.selectError=e}void 0!==e&&(b="success",r=k(null==a?void 0:a.data,e,t),w=!0)}this.selectError&&(p=this.selectError,r=this.selectResult,f=Date.now(),b="error");let y="fetching"===m,v="loading"===b,x="error"===b,C={status:b,fetchStatus:m,isLoading:v,isSuccess:"success"===b,isError:x,isInitialLoading:v&&y,data:r,dataUpdatedAt:d,error:p,errorUpdatedAt:f,failureCount:h.fetchFailureCount,failureReason:h.fetchFailureReason,errorUpdateCount:h.errorUpdateCount,isFetched:h.dataUpdateCount>0||h.errorUpdateCount>0,isFetchedAfterMount:h.dataUpdateCount>c.dataUpdateCount||h.errorUpdateCount>c.errorUpdateCount,isFetching:y,isRefetching:y&&!v,isLoadingError:x&&0===h.dataUpdatedAt,isPaused:"paused"===m,isPlaceholderData:w,isPreviousData:g,isRefetchError:x&&0!==h.dataUpdatedAt,isStale:em(e,t),refetch:this.refetch,remove:this.remove};return C}updateResult(e){let t=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,g(r,t))return;this.currentResult=r;let n={cache:!0};(null==e?void 0:e.listeners)!==!1&&(()=>{if(!t)return!0;let{notifyOnChangeProps:e}=this.options,r="function"==typeof e?e():e;if("all"===r||!r&&!this.trackedProps.size)return!0;let n=new Set(null!=r?r:this.trackedProps);return this.options.useErrorBoundary&&n.add("error"),Object.keys(this.currentResult).some(e=>{let r=this.currentResult[e]!==t[e];return r&&n.has(e)})})()&&(n.listeners=!0),this.notify({...n,...e})}updateQuery(){let e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;let t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){let t={};"success"===e.type?t.onSuccess=!e.manual:"error"!==e.type||R(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){A.batch(()=>{var t,r,n,i,a,o,s,l;e.onSuccess?(null==(t=(r=this.options).onSuccess)||t.call(r,this.currentResult.data),null==(n=(i=this.options).onSettled)||n.call(i,this.currentResult.data,null)):e.onError&&(null==(a=(o=this.options).onError)||a.call(o,this.currentResult.error),null==(s=(l=this.options).onSettled)||s.call(l,void 0,this.currentResult.error)),e.listeners&&this.listeners.forEach(({listener:e})=>{e(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function ed(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)||e.state.dataUpdatedAt>0&&ep(e,t,t.refetchOnMount)}function ep(e,t,r){if(!1!==t.enabled){let n="function"==typeof r?r(e):r;return"always"===n||!1!==n&&em(e,t)}return!1}function ef(e,t,r,n){return!1!==r.enabled&&(e!==t||!1===n.enabled)&&(!r.suspense||"error"!==e.state.status)&&em(e,r)}function em(e,t){return e.isStaleByTime(t.staleTime)}var eb=r(52798);function eg({queryClient:e=new H({defaultOptions:{queries:{cacheTime:864e5,networkMode:"offlineFirst",refetchOnWindowFocus:!1,retry:0},mutations:{networkMode:"offlineFirst"}}}),storage:t=(0,Q.o6)({storage:"undefined"!=typeof window&&window.localStorage?window.localStorage:Q.wp}),persister:r="undefined"!=typeof window?function({storage:e,key:t="REACT_QUERY_OFFLINE_CACHE",throttleTime:r=1e3,serialize:n=JSON.stringify,deserialize:a=JSON.parse,retry:o}){if(e){let i=r=>{try{e.setItem(t,n(r));return}catch(e){return e}};return{persistClient:function(e,t=100){let r=null;return function(...n){null===r&&(r=setTimeout(()=>{e(...n),r=null},t))}}(e=>{let t=e,r=i(t),n=0;for(;r&&t;)n++,(t=null==o?void 0:o({persistedClient:t,error:r,errorCount:n}))&&(r=i(t))},r),restoreClient:()=>{let r=e.getItem(t);if(r)return a(r)},removeClient:()=>{e.removeItem(t)}}}return{persistClient:i,restoreClient:()=>void 0,removeClient:i}}({key:"cache",storage:t,serialize:e=>e,deserialize:e=>e}):void 0,...n}){let a=(0,Q._g)({...n,storage:t});return r&&function(e){let t;V(e).then(()=>{(function(e){let t=e.queryClient.getQueryCache().subscribe(t=>{Z(t.type)&&K(e)}),r=e.queryClient.getMutationCache().subscribe(t=>{Z(t.type)&&K(e)});()=>{t(),r()}})(e)})}({queryClient:e,persister:r,dehydrateOptions:{shouldDehydrateQuery:e=>0!==e.cacheTime&&!1!==e.queryKey[0].persist}}),Object.assign(a,{queryClient:e})}var ew=Y.createContext(void 0),ey=Y.createContext(void 0);function ev({children:e,config:t}){return Y.createElement(ew.Provider,{children:Y.createElement(er,{children:e,client:t.queryClient,context:ey}),value:t})}function ex(){let e=Y.useContext(ew);if(!e)throw Error("`useConfig` must be used within `WagmiConfig`.\n\nRead more: https://wagmi.sh/react/WagmiConfig");return e}var eC=es.useSyncExternalStore;function eE(e){return"[object Object]"===Object.prototype.toString.call(e)}function ek(e){return JSON.stringify(e,(e,t)=>!function(e){if(!eE(e))return!1;let t=e.constructor;if(void 0===t)return!0;let r=t.prototype;return!!(eE(r)&&r.hasOwnProperty("isPrototypeOf"))}(t)?"bigint"==typeof t?t.toString():t:Object.keys(t).sort().reduce((e,r)=>(e[r]=t[r],e),{}))}function eS(e,t,r){let n=u(e,t,r);return function(e,t,r){var n,i;let a=u(e,void 0,void 0),o=et({context:a.context}),[s]=Y.useState(()=>new el(o,a));Y.useEffect(()=>{s.setOptions(a)},[s,a]);let l=ec(Y.useCallback(e=>s.subscribe(A.batchCalls(e)),[s]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),c=Y.useCallback((e,t)=>{s.mutate(e,t).catch(eu)},[s]);if(l.error&&(n=s.options.useErrorBoundary,i=[l.error],"function"==typeof n?n(...i):!!n))throw l.error;return{...l,mutate:c,mutateAsync:l.mutate}}({context:ey,...n})}var eA=()=>et({context:ey});function eP({chainId:e}){return[{entity:"walletClient",chainId:e,persist:!1}]}function e_({queryKey:[{chainId:e}]}){return(0,Q.xz)({chainId:e})}function eD({chainId:e,suspense:t,onError:r,onSettled:n,onSuccess:i}={}){let{connector:a}=eT(),o=function({chainId:e}={}){let t=function({chainId:e}={}){return(0,eb.useSyncExternalStoreWithSelector)(t=>(0,Q.pC)({chainId:e},t),()=>(0,Q.uV)({chainId:e}),()=>(0,Q.uV)({chainId:e}),e=>e,(e,t)=>e.uid===t.uid)}({chainId:e});return t.chain.id}({chainId:e}),s=function(e,t,r){let n=Array.isArray(e)?"function"==typeof t?{...r,queryKey:e,queryFn:t}:{...t,queryKey:e}:e,i=function(e,t){var r,n;let i=et({context:e.context}),a=ei(),o=eo(),s=i.defaultQueryOptions({...e,queryKeyHashFn:ek});s._optimisticResults=a?"isRestoring":"optimistic",s.onError&&(s.onError=A.batchCalls(s.onError)),s.onSuccess&&(s.onSuccess=A.batchCalls(s.onSuccess)),s.onSettled&&(s.onSettled=A.batchCalls(s.onSettled)),s.suspense&&"number"!=typeof s.staleTime&&(s.staleTime=1e3),(s.suspense||s.useErrorBoundary)&&!o.isReset()&&(s.retryOnMount=!1);let[l]=Y.useState(()=>new t(i,s)),c=l.getOptimisticResult(s);if(eC(Y.useCallback(e=>a?()=>void 0:l.subscribe(A.batchCalls(e)),[l,a]),()=>l.getCurrentResult(),()=>l.getCurrentResult()),Y.useEffect(()=>{o.clearReset()},[o]),Y.useEffect(()=>{l.setOptions(s,{listeners:!1})},[s,l]),s.suspense&&c.isLoading&&c.isFetching&&!a)throw l.fetchOptimistic(s).then(({data:e})=>{s.onSuccess?.(e),s.onSettled?.(e,null)}).catch(e=>{o.clearReset(),s.onError?.(e),s.onSettled?.(void 0,e)});if(c.isError&&!o.isReset()&&!c.isFetching&&(r=s.useErrorBoundary,n=[c.error,l.getCurrentQuery()],"function"==typeof r?r(...n):!!r))throw c.error;let u="loading"===c.status&&"idle"===c.fetchStatus?"idle":c.status,h="loading"===u&&"fetching"===c.fetchStatus;return{...c,defaultedOptions:s,isIdle:"idle"===u,isLoading:h,observer:l,status:u}}({context:ey,...n},eh),a={data:i.data,error:i.error,fetchStatus:i.fetchStatus,isError:i.isError,isFetched:i.isFetched,isFetchedAfterMount:i.isFetchedAfterMount,isFetching:i.isFetching,isIdle:i.isIdle,isLoading:i.isLoading,isRefetching:i.isRefetching,isSuccess:i.isSuccess,refetch:i.refetch,status:i.status,internal:{dataUpdatedAt:i.dataUpdatedAt,errorUpdatedAt:i.errorUpdatedAt,failureCount:i.failureCount,isFetchedAfterMount:i.isFetchedAfterMount,isLoadingError:i.isLoadingError,isPaused:i.isPaused,isPlaceholderData:i.isPlaceholderData,isPreviousData:i.isPreviousData,isRefetchError:i.isRefetchError,isStale:i.isStale,remove:i.remove}};return i.defaultedOptions.notifyOnChangeProps?a:function(e,t){let r={};return Object.keys(e).forEach(n=>{Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:()=>(t.trackedProps.add(n),e[n])})}),r}(a,i.observer)}(eP({chainId:o}),e_,{cacheTime:0,enabled:!!a,staleTime:1/0,suspense:t,onError:r,onSettled:n,onSuccess:i}),l=eA();return Y.useEffect(()=>{let e=(0,Q.Tb)({chainId:o},e=>{e?l.invalidateQueries(eP({chainId:o})):l.removeQueries(eP({chainId:o}))});return e},[l,o]),s}var e$=e=>"object"==typeof e&&!Array.isArray(e);function eO(e,t,r=t,n=Q.vZ){let i=Y.useRef([]),a=(0,eb.useSyncExternalStoreWithSelector)(e,t,r,e=>e,(e,t)=>{if(e$(e)&&e$(t)&&i.current.length){for(let r of i.current){let i=n(e[r],t[r]);if(!i)return!1}return!0}return n(e,t)});if(e$(a)){let e={...a};return Object.defineProperties(e,Object.entries(e).reduce((e,[t,r])=>({...e,[t]:{configurable:!1,enumerable:!0,get:()=>(i.current.includes(t)||i.current.push(t),r)}}),{})),e}return a}function eT({onConnect:e,onDisconnect:t}={}){let r=ex(),n=Y.useCallback(e=>(0,Q.uH)(e),[r]),i=eO(n,Q.D0),a=Y.useRef(),o=a.current;return Y.useEffect(()=>{o?.status!=="connected"&&"connected"===i.status&&e?.({address:i.address,connector:i.connector,isReconnected:o?.status==="reconnecting"||o?.status===void 0}),o?.status==="connected"&&"disconnected"===i.status&&t?.(),a.current=i},[e,t,o,i]),i}var eI=[{entity:"disconnect"}],eR=()=>(0,Q.zP)();function eN({onError:e,onMutate:t,onSettled:r,onSuccess:n}={}){let{error:i,isError:a,isIdle:o,isLoading:s,isSuccess:l,mutate:c,mutateAsync:u,reset:h,status:d}=eS(eI,eR,{...e?{onError(t,r,n){e(t,n)}}:{},onMutate:t,...r?{onSettled(e,t,n,i){r(t,i)}}:{},...n?{onSuccess(e,t,r){n(r)}}:{}});return{disconnect:c,disconnectAsync:u,error:i,isError:a,isIdle:o,isLoading:s,isSuccess:l,reset:h,status:d}}function eU(){let e=ex(),t=(0,Y.useCallback)(e=>(0,Q.QC)(e),[e]);return eO(t,Q.Hy)}var eB=e=>[{entity:"switchNetwork",...e}],eM=e=>{let{chainId:t}=e;if(!t)throw Error("chainId is required");return(0,Q.If)({chainId:t})};function ej({chainId:e,throwForSwitchChainNotSupported:t,onError:r,onMutate:n,onSettled:i,onSuccess:a}={}){let o,s;let l=ex(),c=function(){let[,e]=Y.useReducer(e=>e+1,0);return e}(),{data:u,error:h,isError:d,isIdle:p,isLoading:f,isSuccess:m,mutate:b,mutateAsync:g,reset:w,status:y,variables:v}=eS(eB({chainId:e}),eM,{onError:r,onMutate:n,onSettled:i,onSuccess:a}),x=Y.useCallback(t=>b({chainId:t??e}),[e,b]),C=Y.useCallback(t=>g({chainId:t??e}),[e,g]);Y.useEffect(()=>{let e=l.subscribe(({chains:e,connector:t})=>({chains:e,connector:t}),c);return e},[l,c]);let E=!!l.connector?.switchChain;return(t||E)&&(o=x,s=C),{chains:l.chains??[],data:u,error:h,isError:d,isIdle:p,isLoading:f,isSuccess:m,pendingChainId:v?.chainId,reset:w,status:y,switchNetwork:o,switchNetworkAsync:s,variables:v}}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(96885)}),_N_E=e.O()}]);