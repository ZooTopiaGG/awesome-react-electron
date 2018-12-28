import React, { Component } from 'react';
import './index.less';
import ContentHeader from './contentHeader';
// import { Layout } from 'antd';

export default class RightAside extends Component {
  constructor() {
    super();
    this.state = {
      appName: '网易云音乐',
      current: 'recommend'
    };
  }
  handleClick = (e) => {
    console.log('click', e)
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <div className="right-aside">
        <ContentHeader></ContentHeader>   
      </div>
    )
  } 
}