import React, { Component } from 'react';
import './index.less';
import { Icon } from 'antd';

export default class BottomFooter extends Component {
  constructor() {
    super();
    this.state = {
      appName: '网易云音乐',
    };
  }
  render() {
    return (
      <div className="bottom-footer flex">
        <div className="flex flex-align-center bottom-controller">
          <Icon type="step-backward" theme="filled" className="control backward ward" style={{ fontSize: 20 }}/>
          <Icon type="pause-circle" theme="filled" className="control pause" style={{ fontSize: 36, marginLeft: 10, marginRight: 10 }}/>
          <Icon type="step-forward" theme="filled" className="control farward ward" style={{ fontSize: 20 }}/>
        </div>
        <div className="flex flex-align-center">
          <div></div>
        </div>
        <div></div>
      </div>
    )
  } 
}