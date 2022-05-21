!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e||self).UAuthMoralis={})}(this,function(e){function t(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,n(e,t)}function n(e,t){return n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(e,t)}function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var o,i="object"==typeof Reflect?Reflect:null,s=i&&"function"==typeof i.apply?i.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};o=i&&"function"==typeof i.ownKeys?i.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var u=Number.isNaN||function(e){return e!=e};function c(){c.init.call(this)}var a=c;c.EventEmitter=c,c.prototype._events=void 0,c.prototype._eventsCount=0,c.prototype._maxListeners=void 0;var h=10;function l(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function f(e){return void 0===e._maxListeners?c.defaultMaxListeners:e._maxListeners}function d(e,t,n,r){var o,i,s;if(l(n),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),s=i[t]),void 0===s)s=i[t]=n,++e._eventsCount;else if("function"==typeof s?s=i[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(o=f(e))>0&&s.length>o&&!s.warned){s.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");u.name="MaxListenersExceededWarning",u.emitter=e,u.type=t,u.count=s.length,console&&console.warn&&console.warn(u)}return e}function p(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function v(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=p.bind(r);return o.listener=n,r.wrapFn=o,o}function m(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"==typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):C(o,o.length)}function y(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function C(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function w(e,t,n,r){if("function"==typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,function o(i){r.once&&e.removeEventListener(t,o),n(i)})}}Object.defineProperty(c,"defaultMaxListeners",{enumerable:!0,get:function(){return h},set:function(e){if("number"!=typeof e||e<0||u(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");h=e}}),c.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},c.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||u(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},c.prototype.getMaxListeners=function(){return f(this)},c.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){var i;if(t.length>0&&(i=t[0]),i instanceof Error)throw i;var u=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw u.context=i,u}var c=o[e];if(void 0===c)return!1;if("function"==typeof c)s(c,this,t);else{var a=c.length,h=C(c,a);for(n=0;n<a;++n)s(h[n],this,t)}return!0},c.prototype.on=c.prototype.addListener=function(e,t){return d(this,e,t,!1)},c.prototype.prependListener=function(e,t){return d(this,e,t,!0)},c.prototype.once=function(e,t){return l(t),this.on(e,v(this,e,t)),this},c.prototype.prependOnceListener=function(e,t){return l(t),this.prependListener(e,v(this,e,t)),this},c.prototype.off=c.prototype.removeListener=function(e,t){var n,r,o,i,s;if(l(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){s=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},c.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},c.prototype.listeners=function(e){return m(this,e,!0)},c.prototype.rawListeners=function(e){return m(this,e,!1)},c.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):y.call(e,t)},c.prototype.listenerCount=y,c.prototype.eventNames=function(){return this._eventsCount>0?o(this._events):[]},a.once=function(e,t){return new Promise(function(n,r){function o(n){e.removeListener(t,i),r(n)}function i(){"function"==typeof e.removeListener&&e.removeListener("error",o),n([].slice.call(arguments))}w(e,t,i,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&w(e,"error",t,{once:!0})}(e,o)})};var b=Object.freeze({CONNECT:"connect",DISCONNECT:"disconnect",CHAIN_CHANGED:"chainChanged",ACCOUNTS_CHANGED:"accountsChanged"}),g=Object.freeze({CONNECT:"connect",DISCONNECT:"disconnect",CHAIN_CHANGED:"chainChanged",ACCOUNT_CHANGED:"accountChanged"});function _(e){return"number"==typeof e&&(e=function(e){if("number"!=typeof e)throw"The input provided should be a number";return"0x"+e.toString(16)}(e)),e}var E=["uauth"];function L(e,t){try{var n=e()}catch(e){return t(e)}return n&&n.then?n.then(void 0,t):n}var N=/*#__PURE__*/function(e){function n(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).type="uauth",t._subConnector=null,t._uauth=void 0,t}t(n,e),n.importUAuth=function(){try{var e=function(){if(null==n.UAuth)return Promise.resolve(import("@uauth/js").then(function(e){var t;return null!=(t=null==e?void 0:e.default)?t:e})).then(function(e){n.UAuth=e})}();return Promise.resolve(e&&e.then?e.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},n.setUAuthOptions=function(e){n.options=e};var r,o,i=n.prototype;return i.verifyEthereumBrowser=function(){if(!window.ethereum)throw new Error("Non ethereum enabled browser")},i.activate=function(e){var t=void 0===e?{}:e,r=t.chainId,o=t.mobileLinks;try{var i=function(){return Promise.resolve(n.importUAuth()).then(function(){var e;function t(t){function n(e){return{provider:s.provider,account:s.account,chainId:s.chainId}}if(null==e.wallet_type_hint)throw new Error("no wallet type present");var i=["web3","injected"].includes(e.wallet_type_hint)?(s._subConnector="web3",s.verifyEthereumBrowser(),Promise.resolve(Promise.all([window.ethereum.request({method:"eth_requestAccounts"}),window.ethereum.request({method:"eth_chainId"})])).then(function(e){var t=e[0],n=e[1];console.log(t);var r=t[0]?t[0].toLowerCase():null,o=_(n),i=window.ethereum;s.chainId=o,s.account=r,s.provider=i})):function(){if("walletconnect"===e.wallet_type_hint){var t,n=function(){if(!t)throw new Error('Cannot enable WalletConnect: dependency "@walletconnect/web3-provider" is missing');if(s.provider="function"==typeof t?new t(i):new window.WalletConnectProvider(i),!s.provider)throw new Error("Could not connect with WalletConnect, error in connecting to provider");return Promise.resolve(s.provider.enable()).then(function(e){s.account=e[0].toLowerCase();var t=_(s.provider.chainId);s.chainId=t,s.subscribeToEvents(s.provider)})};s._subConnector="walletconnect";var i={rpc:{1:"https://speedy-nodes-nyc.moralis.io/WalletConnect/eth/mainnet",3:"https://speedy-nodes-nyc.moralis.io/WalletConnect/eth/ropsten",4:"https://speedy-nodes-nyc.moralis.io/WalletConnect/eth/rinkeby",5:"https://speedy-nodes-nyc.moralis.io/WalletConnect/eth/goerli",42:"https://speedy-nodes-nyc.moralis.io/WalletConnect/eth/kovan",137:"https://speedy-nodes-nyc.moralis.io/WalletConnect/polygon/mainnet",80001:"https://speedy-nodes-nyc.moralis.io/WalletConnect/polygon/mumbai",56:"https://speedy-nodes-nyc.moralis.io/WalletConnect/bsc/mainnet",97:"https://speedy-nodes-nyc.moralis.io/WalletConnect/bsc/testnet",43114:"https://speedy-nodes-nyc.moralis.io/WalletConnect/avalanche/mainnet",43113:"https://speedy-nodes-nyc.moralis.io/WalletConnect/avalanche/testnet",250:"https://speedy-nodes-nyc.moralis.io/WalletConnect/fantom/mainnet"},chainId:r,qrcodeModalOptions:{mobileLinks:o}},u=L(function(){function e(e){return window.Buffer=n||(null==e?void 0:e.Buffer),Promise.resolve(import("@walletconnect/web3-provider")).then(function(e){t=null==e?void 0:e.default})}var n=window.Buffer;return n?e(n):Promise.resolve(import("buffer")).then(e)},function(e){console.log(e)});return u&&u.then?u.then(n):n()}throw new Error("Connector not supported")}();return i&&i.then?i.then(n):n()}var i=L(function(){return Promise.resolve(s.uauth.user()).then(function(t){e=t})},function(){if(!s.uauth.fallbackLoginOptions.scope.includes("wallet"))throw new Error('Must request the "wallet" scope for connector to work.');return n.options.shouldLoginWithRedirect?Promise.resolve(s.uauth.login()).then(function(){return Promise.resolve(new Promise(function(){})).then(function(){throw new Error("Should never get here.")})}):Promise.resolve(s.uauth.loginWithPopup()).then(function(){return Promise.resolve(s.uauth.user()).then(function(t){e=t})})});return i&&i.then?i.then(t):t()})},s=this,u=L(function(){return Promise.resolve(s.deactivate()).then(function(){s.uauth.logout({rpInitiatedLogout:!1})})},function(){});return Promise.resolve(u&&u.then?u.then(i):i())}catch(e){return Promise.reject(e)}},i.deactivate=function(){try{var e=function(){t._subConnector&&(t.uauth.fallbackLogoutOptions.rpInitiatedLogout||t.uauth.logout({rpInitiatedLogout:!1}))},t=this;t.account=null,t.chainId=null;var n=function(){if("walletconnect"===t._subConnector){t.unsubscribeToEvents(t.provider);var e=function(){if(t.provider){var e=L(function(){return Promise.resolve(t.provider.disconnect()).then(function(){})},function(e){console.log(e)});if(e&&e.then)return e.then(function(){})}}();if(e&&e.then)return e.then(function(){})}}();return Promise.resolve(n&&n.then?n.then(e):e())}catch(e){return Promise.reject(e)}},r=n,(o=[{key:"uauth",get:function(){var e=n.options,t=e.uauth,r=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(o[n]=e[n]);return o}(e,E);if(t)return t;if(this._uauth)return this._uauth;if(null==n.UAuth)throw new Error("Must import UAuth before constructing a UAuth Object");if(!r.clientID||!r.redirectUri)throw new Error("Incomplete constructor options");return this._uauth=new n.UAuth(r),this._uauth}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}(/*#__PURE__*/function(e){function n(){var t;return(t=e.call(this)||this).type="abstract",t.network="evm",t.account=null,t.chainId=null,t.provider=null,t.handleAccountsChanged=t.handleAccountsChanged.bind(r(t)),t.handleChainChanged=t.handleChainChanged.bind(r(t)),t.handleConnect=t.handleConnect.bind(r(t)),t.handleDisconnect=t.handleDisconnect.bind(r(t)),t}t(n,e);var o=n.prototype;return o.subscribeToEvents=function(e){e&&(this.provider=e),e&&e.on&&(e.on(b.CHAIN_CHANGED,this.handleChainChanged),e.on(b.ACCOUNTS_CHANGED,this.handleAccountsChanged),e.on(b.CONNECT,this.handleConnect),e.on(b.DISCONNECT,this.handleDisconnect))},o.unsubscribeToEvents=function(e){e&&e.removeListener&&(e.removeListener(b.CHAIN_CHANGED,this.handleChainChanged),e.removeListener(b.ACCOUNTS_CHANGED,this.handleAccountsChanged),e.removeListener(b.CONNECT,this.handleConnect),e.removeListener(b.DISCONNECT,this.handleDisconnect))},o.activate=function(){try{throw new Error("Not implemented: activate()")}catch(e){return Promise.reject(e)}},o.handleAccountsChanged=function(e){var t=e&&e[0]?e[0].toLowerCase():null;this.account=t,this.emit(g.ACCOUNT_CHANGED,t)},o.handleChainChanged=function(e){this.chainId=e,this.emit(g.CHAIN_CHANGED,e)},o.handleConnect=function(e){this.emit(g.CONNECT,e)},o.handleDisconnect=function(e){this.emit(g.DISCONNECT,e)},n}(a.EventEmitter));N.UAuth=void 0,N.options=void 0,e.UAuthMoralisConnector=N});
//# sourceMappingURL=index.umd.js.map
