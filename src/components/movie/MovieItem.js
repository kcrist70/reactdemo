import React from 'react';
import styles from '../../css/movie_item.module.css'
import {Rate} from 'antd'

export default class MovieItem extends React.Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  render() {
    const nameList = this.props.images.small.split('/')
    const name = nameList[nameList.length - 1]
    return <div onClick={this.goDetail} className={styles.box}>
      <img src={require( "./imgs/" + name)} alt="" className={styles.img}/>
      <h4>电影名称： {this.props.title}</h4>
      <h4>上映年份： {this.props.year}年</h4>
      <h4>电影类型： {this.props.genres.join(',')}</h4>
      <Rate disabled defaultValue={this.props.rating.average / 2}></Rate>
    </div>
  }

  goDetail = () => {
    this.props.history.push('/movie/detail/' + this.props.id)
  }
}
