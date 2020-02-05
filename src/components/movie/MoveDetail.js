import React from 'react';
import {Alert, Button, Icon, Spin} from 'antd';
import axios from 'axios'


export default class MoveDetail extends React.Component {
  constructor(props){
    super(props)
    this.state={
      info: {},
      isLoading: true
    }
  }
  render() {
    return <div>
      <Button type="primary" onClick={this.goback}>
        <Icon type="left" />
        返回电影列表页面
      </Button>
      {this.renderInfo()}
      </div>
  }

  componentDidMount() {
    const url = `https://douban.uieee.com/v2/movie/subject/${this.props.match.params.id}`
    axios.get(url)
        .then((response) => {
          this.setState({
            info: response.data,
            isLoading: false
          })
        })
  }

  goback = () => {
    this.props.history.goBack()
  }

  renderInfo() {
    if (this.state.isLoading) {
      return <Spin tip="Loading...">
        <Alert
            message="正在请求电影详情"
            description="精彩内容，马上呈现"
            type="info"
        />
      </Spin>
    } else {
      return <div style={{ textAlign: 'center'}}>
        {/*{console.log(this.state.info)}*/}
        <div>
          <h4>{this.state.info.title}</h4>
          <img src={
            // this.state.info.images.large
            // this.state.info.images &&
          require('./imgs/'+ this.state.info.images.large.split("/")[this.state.info.images.large.split("/").length -1])
          }
               alt=""/>
          {console.log(this.state.info)}
        </div>
        <p style={{ textIndent: '2em',lineHeight: '30px'}}>{this.state.info.summary}</p>
      </div>
    }
  }
}


