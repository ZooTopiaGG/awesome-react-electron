import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import _ from "lodash";
import { routes } from 'router/index';
import './index.less';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class LeftAside extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 'findmusic',
    };
  }
  handleClick = (e) => {
    this.setState({activeKey: e.key});
    this.props.updateActive(e.key)
  }
  // 浏览器刷新，前进，后退 menu菜单获取最新状态
  getMenuState =() => {
    try {
      let pathname = this.context.router.route.location.pathname,
      _pathname = pathname === '/' ? '/findmusic' : pathname,
      index = _.findIndex(routes, route => _pathname.indexOf(route.link) > -1)
      this.setState({activeKey: routes[index]['key']});
      this.props.updateActive(routes[index]['key']);
    } catch(e) {
      this.setState({activeKey: routes[0]['key']});
      this.props.updateActive(routes[0]['key']);
    }
  }
  componentDidMount() {
    window.addEventListener('popstate',() => {
      this.getMenuState()
    });
    this.getMenuState()
  }
  shouldComponentUpdate() {
    return true
  }
  render() {
    var items = [], items1= [], items2 = [];
    for (var i=0,len=routes.length; i<len; i++) {
      let vnode = <Menu.Item key={ routes[i].key }>
      <Link to={ routes[i].link }><Icon type={ routes[i].iconType } />{ routes[i].text }</Link>
    </Menu.Item>;
      if (routes[i].group === '推荐') {
        items.push(vnode)
      } else if(routes[i].group === '我的音乐') {
        items1.push(vnode)
      } else {
        items2.push(vnode)
      }
    }
    return (
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.activeKey]}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <MenuItemGroup key="g1" title="推荐">
          { items }
          </MenuItemGroup>
          <MenuItemGroup key="g2" title="我的音乐">
          { items1 }
          </MenuItemGroup>
          <SubMenu key="sub1" title={<span>创建的歌单</span>}>
          { items2 }
          </SubMenu>
        </Menu>
    )
  } 
}

LeftAside.contextTypes = {
  router: PropTypes.object
}

export default withRouter(LeftAside)
