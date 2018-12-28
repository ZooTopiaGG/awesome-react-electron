import React, { Component } from 'react';
import { Link, Route, Redirect, BrowserRouter, Switch, withRouter } from 'react-router-dom';
import { FindMuiscRoutes } from 'router/findMusic';
import Recommend from 'views/findmusic/recommend';

import PropTypes from 'prop-types';
import _ from 'lodash';
import './index.less';
import { Menu } from 'antd';

class FindMusic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'recommend'
    };
  }
  // 浏览器刷新，前进，后退 menu菜单获取最新状态
  getMenuState =() => {
    console.log('adasda1234', this.context.router.route.location.pathname)
    console.log('adasda123444', this.props.history)
    // let pathname = this.context.router.route.location.pathname,
    //   _pathname = pathname === '/findmusic' ? '/findmusic/recommend' : pathname,
    //   index = _.findIndex(FindMuiscRoutes, route => _pathname.indexOf(route.link) > -1);
    //   console.log(_pathname, index)
    // this.setState({current: FindMuiscRoutes[index]['key']});
    // this.props.updateActive(FindMuiscRoutes[index]['key']);
  }
  componentDidMount() {
    console.log('fdfsfd:::::', 1234465454545)
    window.addEventListener('popstate',() => {
      this.getMenuState()
    });
    this.getMenuState()
  }
  handleClick = (e) => {
    console.log('click', e.key)
    this.setState({
      current: e.key,
    });
    // this.props.updateActive(e.key)
    console.log('adasda12344443433443wq123', this.props.history)
  }
  render () {
    return (
      <BrowserRouter basename="findmusic">
        <div className="find-music flex flex-v">
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            className="find-nav"
          > 
            {
              FindMuiscRoutes.map(route => 
                {
                  return <Menu.Item key={ route.key }>
                    <Link to={ route.link }>{ route.text }</Link>
                  </Menu.Item> 
                }
              )
            }
          </Menu>
          <div className="find-music-box flex-1">
            <Switch>
              <Route exact path="/" render={() => (<Redirect to="/recommend"/>)} />
              {
                FindMuiscRoutes.map(route => 
                  <Route exact key={route.key} path={route.link} component={route.component}></Route>
                )
              }
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

FindMusic.contextTypes = {
  router: PropTypes.object
}

export default withRouter(FindMusic)
