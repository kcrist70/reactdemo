import React from 'react';
import { Spin, Alert,Pagination } from 'antd';
// import axios from 'axios'
import MovieItem from './MovieItem'

export default class MovieList extends React.Component {
  constructor(props){
    super(props)
    this.state={
      nowPage: parseInt(props.match.params.page) || 1,
      movieType: props.match.params.type,
      movies: [],
      total: 0,
      pageSize: 12,
      isloading: true
    }
  }
  render() {
    return <div>{this.rederList()}</div>
  }
  rederList = () => {
    if (this.state.isloading) {
      return <Spin tip="Loading...">
        <Alert
            message="正在请求电影列表"
            description="精彩内容，马上呈现"
            type="info"
        />
      </Spin>
    } else {
      return <div>
        <div style={{ display: "flex",flexWrap: 'wrap'}}>
          {this.state.movies.map(item => {
            return <MovieItem {...item} movieType = { this.state.movieType } history={this.props.history} key={item.id}></MovieItem>
          })}
        </div>
        <Pagination defaultCurrent={this.state.nowPage} total={this.state.total} pageSize={this.state.pageSize}
         onChange={this.pageChanged}/>
      </div>
    }
  }
  loadMovieListByTypeAndPage = () => {
    // const url = `https://douban.uieee.com/v2/movie/${this.state.movieType}`
    // const start = this.state.pageSize * (this.state.nowPage - 1)
    // axios.get(url,{
    //       params: {
    //         start,
    //         count: this.state.pageSize
    //       }
    //     }
    //     ).then(response => {
    //   this.setState({
    //     isloading: false,
    //     movies: response.data.subjects,
    //     total: response.data.total
    //   })
    // })
    const data = require('../test_data/'+ this.state.movieType + '.json')
    setTimeout(()=> {
        this.setState({
          isloading: false,
          movies: data.subjects,
          total: data.total
        })
    },1000)
  }
  UNSAFE_componentWillMount() {
    this.loadMovieListByTypeAndPage()
  }
  // shouldComponentUpdate(nextProps,nextState){
  //   console.log(nextProps,nextState)
  //   return true
  // }
  UNSAFE_componentWillReceiveProps(nextProps){
    this.setState({
      isloading: true,
      nowPage: parseInt(nextProps.match.params.page) || 1,
      movieType: nextProps.match.params.type
    },function () {
      this.loadMovieListByTypeAndPage()
    })
  }

  pageChanged = (page) => {
    // window.location.href = '/#/movie/' + this.state.movieType + '/' + page
    this.props.history.push('/movie/' + this.state.movieType + '/' + page)
  }
}


