import React, { PureComponent } from "react";
import { SafeAreaView } from "react-native";
import WebView, { WebViewMessageEvent } from "react-native-webview";
import { JS_Web3Bridge } from "../../util/dapi/bridgeScript";
import { BridgeMethod, BridgeRequest } from "../../util/dapi/BridgeMethod";

// const web3 = new Web3('https://ethereum.publicnode.com')

class AddRootScreen extends PureComponent {
  static options() {
    return ({
      bottomTabs: {
        visible: true
      },
      topBar: {
        visible: false
      },
      bottomTab: {
        icon: require("../../assets/tabbar/add_tab.png")
      }
    });
  }

  private _webRef: WebView | null | undefined

  onMessage = (event: WebViewMessageEvent) => {

    let bridgeBequest: BridgeRequest = JSON.parse(event.nativeEvent.data)

    let data: any

    switch (bridgeBequest.method) {
      case BridgeMethod.ETH_Accounts, BridgeMethod.ETH_RequestAccounts:
        console.log("调用");
        data = ["0x37452DAd7cB716419FD71fbA3650754Ae217f22B"]
        break
      case BridgeMethod.NET_Version:
        data = "0x01"
        break
      case BridgeMethod.ETH_ChainId:
        data = 1
        break
      case BridgeMethod.ETH_BlockNumber:

        // provider.getBlockNumber().then(gas => {
        //   const result = {ID: bridgeBequest.ID, data: gas }
        //   this._webRef?.injectJavaScript(`o3WindowCallback(${JSON.stringify(result)})`)
        // })
        break
      default:
        break
    }
    if (data === undefined) {
      return
    }
    console.log(bridgeBequest.method);
    const result = {ID: bridgeBequest.ID, data: data }
    console.log(JSON.stringify(result));
    this._webRef?.injectJavaScript(`o3WindowCallback(${JSON.stringify(result)})`)
  }

  componentDidMount() {
  }

  render() {

    return (
      <SafeAreaView style={{ width: "100%", height: "100%", backgroundColor: "#fff"}}>
        <WebView ref={(ref) => this._webRef = ref}
                 style={{ backgroundColor: '#998621' }}
                 source={{uri: 'https://app.uniswap.org'}}
                 javaScriptEnabled={true}
                 domStorageEnabled={true}
                 injectedJavaScriptBeforeContentLoaded={JS_Web3Bridge}
                 onMessage={this.onMessage.bind(this)}
        />
      </SafeAreaView>
    );
  }
}

export default AddRootScreen;
