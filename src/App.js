import React from 'react';
import styles from './css/app.module.css'
import './App.css';
import {HashRouter, Route, Link} from 'react-router-dom'
import { Layout, Menu } from 'antd';
import HomeContainer from './components/home/HomeContainer'
import MovieContainer from './components/movie/MovieContainer'
import AboutContainer from './components/about/AboutContainer'
const { Header, Content, Footer } = Layout;


export default class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }
  render () {
    return <HashRouter>
          <Layout className="layout" style={{ height: '100%'}}>
            <Header>
              <div className={ styles.logo } />
              <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={[window.location.hash.split("/")[1]]}
                  style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="home"><Link to="/home">首页</Link></Menu.Item>
                <Menu.Item key="movie"><Link to="/movie/in_theaters/1">电影</Link></Menu.Item>
                <Menu.Item key="about"><Link to="/about">关于</Link></Menu.Item>
              </Menu>
            </Header>
            <Content style={{ background: '#fff', flex: 1 }}>
              <Route path="/home" component={HomeContainer}></Route>
              <Route path="/movie" component={MovieContainer}></Route>
              <Route path="/about" component={AboutContainer}></Route>
            </Content>
            <Footer style={{ textAlign: 'center' }}>test demo 2020/02/04</Footer>
          </Layout>
        </HashRouter>
  }

}
