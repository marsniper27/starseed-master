
import React, { Component } from 'react'

import { ArkenWidget } from 'arken-widget'

class arkenWidget extends Component {
  render() {
    return (
      <ArkenWidget
        chain='polygon'
        mode="dark"
        themeColor=''
        themeTextColor=''
        baseTokenAddress='0x2791bca1f2de4661ed88a30c99a7a9449aa84174'
        quoteTokenAddress='0x8440178087c4fd348d43d0205f4574e0348a06f0'
        externalTopTokenAddress={["0xa3fa99a148fa48d14ed51d610c367c61876997f1"]}
        customImageToken={{"0x8440178087c4fd348d43d0205f4574e0348a06f0":"https://storageapi.fleek.co/aeb85deb-410a-4c50-8834-96486196b392-bucket/logo.png"}}
        graphRange={30}
        widgetType="graph"
        containerStyle={{
          width: '100%',
          minHeight: 700
          // put container style here
        }}
      />
    )
  }
}
