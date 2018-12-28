import React, { Component } from 'react';
import { Icon, Input, Avatar } from 'antd';
import './index.less';
const Search = Input.Search;

export default class TopNav extends Component {
  constructor() {
    super();
    this.state = {
      appName: '网易云音乐',
    };
  }
  async handleClick() {
    try {
      const res = await fetch('http://localhost:4000/song/url?id=33894312');
      const url = await res.json();
      console.log(url)
    } catch(e){}
  }
  render() {
    return (
      <div className="top-nav flex">
        {/* 头部左边 */}
        <div className="header-logo flex flex-align-center">
          <Icon type="google" className="google-icon" />
          <span>{ this.state.appName }</span>
        </div>
        {/* 头部中间偏左 */}
        <div className="header-search flex-1">
          <Search
            placeholder="input search text"
            onSearch={value => console.log(value)}
            style={{ width: 200 }}
          />
        </div>
        {/* 头部右边 */}
        <div className="header-info flex flex-align-center">
          <div className="info-login info-hover" onClick={this.handleClick}>
            <Avatar size={28} icon="user"  style={{ marginRight: 5 }}/>
            <span>未登录</span>
          </div>
          <div className="info-link flex flex-pack-justify">
            <Icon type="skin" className="info-hover"/>
            <Icon type="heart" className="info-hover"/>
            <Icon type="desktop" className="info-hover"/>
            <Icon type="download" className="info-hover"/>
          </div>
          <span style={{ color: '#aaa', marginLeft: 20, marginRight: 20, fontSize: 14 }}>|</span>
          <div className="info-link flex flex-pack-justify">
            <Icon type="fork" className="info-hover"/>
            <Icon type="minus" className="info-hover"/>
            <Icon type="fullscreen" className="info-hover"/>
            <Icon type="close" className="info-hover"/>
          </div>
        </div>
      </div>
    )
  } 
}