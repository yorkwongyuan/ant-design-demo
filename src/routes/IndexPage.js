import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import { Layout } from 'antd';
import HeaderContent from './Header'
import SiderContent from './Sider';

const { Header, Footer, Sider, Content } = Layout;

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="logo"/>
        <Header>
          <HeaderContent />
        </Header>
        <Layout>
          <Sider>
            <SiderContent />
          </Sider>
          <Content>content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
}


export default connect()(IndexPage);
