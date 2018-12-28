import React, { Component } from 'react';
import { Route, Redirect, Switch  } from 'react-router-dom';
import { routes } from 'router/index';
import _ from 'lodash';
import './index.less';
import { Layout } from 'antd';
import TopNav from 'components/topNav';
import BottomFooter from 'components/bottomFooter';
import LeftAside from 'components/leftAside';

const {
  Header, Footer, Sider, Content,
} = Layout;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: ''
    }
  }
  updateActive = (key) => {
    let index = _.findIndex(routes, route => route.key === key);
    console.log('当前路由文本：', routes[index]['text'])
    this.setState({current: routes[index]['text']})
  }
  componentDidMount() {
    
  }
  render() {
    return (
      <div className="home">
        <Layout>
          <Header>
            <TopNav />
          </Header>
          <Layout>
            <Sider className="left-aside" style={{
              overflow: 'auto',  position: 'fixed', left: 0,
            }}
            >
              <LeftAside className="left-aside" updateActive={ this.updateActive }/>
            </Sider>
            <Content style={{ marginLeft: 200 }}>
              <div className="content">
                <Switch>
                  <Route path="/" exact render={ () => (<Redirect to="/findmusic"/>) } />
                  {
                    routes.map(route => 
                      <Route exact key={route.key} path={route.link} component={route.component}></Route>
                    )
                  }
                  <Redirect to="/" />
                </Switch>
              </div>
            </Content>
          </Layout>
          <Footer>
            <BottomFooter />
          </Footer>
        </Layout>
      </div>
    )
  }
}

export default Home