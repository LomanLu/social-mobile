export const JS_Web3Bridge = `
if (window.ethereum === undefined) {

    window.ethereum = {};
    window.web3 = {};

    window.ethereum.isMetaMask = true;
    window.ethereum.isO3Wallet = true;

    window.ethereum.chainId = '0x1';
    window.ethereum.networkVersion = '1';
    window.ethereum.selectedAddress = "";

    window.ethereum.removeAllListeners = function(){};
    window.ethereum.removeListener = function(){};
    window.ethereum.isConnected = function(){};
    window.web3.currentProvider = window.ethereum;

    window.ethereum.on = function(methodStr, callback) {};
    window.ethereum.request = function (message) {
      return o3SendOMessage(message);
    };

    window.ethereum.enable = function() {
      return window.ethereum.request({ method: 'eth_requestAccounts' });
    };

    window.ethereum.sendAsync = function (message, callbackFunction) {
      const ID = getMessageID();
      const request = message;
      request.ID = ID;
      o3PostMessage(JSON.stringify(request));
      const promise = new Promise((resolve, reject) => {
        const callbackFn = (event) => {
          const returnData = event.detail;
          if (returnData.ID === ID) {
            if (returnData.error !== undefined && returnData.error != null) {
              reject(returnData.error);
            } else {
              resolve(returnData.data);
            }
            window.removeEventListener('o3DapiMessage', callbackFn);
          }
        };
        window.addEventListener('o3DapiMessage', callbackFn);
      });
      promise.then((res) => {
        callbackFunction(null, {
          id: message.id,
          jsonrpc: message.jsonrpc,
          method: message.method,
          result: res,
          error: null
        });
      }).catch(error => {
        callbackFunction(error, {
          id: message.id,
          jsonrpc: message.jsonrpc,
          method: message.method,
          error: error
        });
      });
    };

    window.ethereum.send = function (message, paramsOrCallback = null) {
      if (paramsOrCallback === null && typeof message == 'object') {
        switch (message.method) {
          case 'eth_accounts': {
            return window.ethereum.getAccounts();
          }
          case 'eth_coinbase': {
            break;
          }
          case 'eth_uninstallFilter': {
            break;
          }
        }
        return;
      }
      if (Array.isArray(paramsOrCallback) || paramsOrCallback == null) {
        return o3SendOMessage({
          id: '3',
          jsonrpc: '2.0',
          method: message,
          params: paramsOrCallback,
        })
      }

      const ID = getMessageID();
      const request = message;
      request.ID = ID;
      if (typeof message === 'string') {
        o3PostMessage(JSON.stringify({
          id: '3',
          jsonrpc: '2.0',
          method: message,
          params: paramsOrCallback,
          ID: ID
        }));
      } else {
        o3PostMessage(JSON.stringify(request));
      }
      const promise = new Promise((resolve, reject) => {
        const callbackFn = (event) => {
          const returnData = event.detail;
          if (returnData.ID === ID) {
            if (returnData.error !== undefined && returnData.error != null) {
              reject(returnData.error);
            } else {
              resolve(returnData.data);
            }
            window.removeEventListener('o3DapiMessage', callbackFn);
          }
        };
        window.addEventListener('o3DapiMessage', callbackFn);
      });

      promise.then((res) => {
        paramsOrCallback(null, {
          id: message.id !== undefined ? message.id : '3',
          jsonrpc: message.jsonrpc !== undefined ? message.jsonrpc : '2.0',
          method: message.method,
          result: res,
          error: null
        });
      }).catch(error => {
        paramsOrCallback(error, {
          id: message.id !== undefined ? message.id : '3',
          jsonrpc: message.jsonrpc !== undefined ? message.jsonrpc : '2.0',
          method: message.method,
          error: error
        });
      });
    };

    const getMessageID = () => {
      const rand = Math.floor(Math.random() * 999999);
      const myDate = new Date();
      return myDate.getTime() + '' + rand;
    };
    const o3SendOMessage = function (parameter) {
      const ID = getMessageID();
      return new Promise((resolveMain, rejectMain) => {
        const request = parameter;
        request.ID = ID;
        o3PostMessage(JSON.stringify(request));
        const promise = new Promise((resolve, reject) => {
          const callbackFn = (event) => {
            const returnData = event.detail;
            if (returnData.ID === ID) {
              if (returnData.error !== undefined && returnData.error != null) {
                reject(returnData.error);
              } else {
                resolve(returnData.data);
              }
              window.removeEventListener('o3DapiMessage', callbackFn);
            }
          };
          window.addEventListener('o3DapiMessage', callbackFn);
        });
        promise.then((res) => {
          resolveMain(res);
        }).catch(error => {
          rejectMain(error);
        });
      });
    };

    function o3WindowCallback(data) {
      window.dispatchEvent(new CustomEvent(
        "o3DapiMessage", {
          detail: data
        }
      ));
    }
  }

  function o3PostMessage(message) {
    window.ReactNativeWebView.postMessage(message)
  }
`
export default { JS_Web3Bridge }
