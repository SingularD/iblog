import React from 'react'
import {DataHomepage} from "../../Data";

import NavBar from '../NavBar/NavBar'
import SiteInfo from '../Base/SiteInfo';
import PostItem from '../Content/PostItem'

class Search extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      hotWord: ['HTTP','JAVA','数据结构','前端框架'],
      showSearchList: false,
      searchList: DataHomepage
    }


    this.getSearchValue = this.getSearchValue.bind(this)
    this.search = this.search.bind(this)
  }

  getSearchValue(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  search() {
    alert(this.state.inputValue)
    this.setState({
      showSearchList: true
    })
  }
  render() {
    return(
      <React.Fragment>
        <NavBar />
        <div className="col-12 col-lg-9 row search">
          <div className="search-header col-12">
            <div className="search-header-title"><p>站内搜索</p></div>
            <div className="search-content">
              <div className="input-group mb-3 pl-3">
                <input type="text"
                       className="form-control"
                       placeholder="请输入关键字..."
                       onChange={this.getSearchValue}
                />
                  <div className="input-group-append">
                    <button
                      className="btn btn-primary"
                      onClick={this.search}
                    >
                      搜索
                    </button>
                  </div>
              </div>
              <div className="search-hot-words pl-3">
                <p>搜索热词：{this.state.hotWord.map(item => (`${item}  `))}</p>
              </div>
              {
                this.state.showSearchList ?
                  <ul className="list-group list-group-flush search-list">
                    {
                      this.state.searchList.map((item, index) => (
                        <li className="list-group-item">
                          <PostItem
                            id={item.id}
                            title={item.title}
                            date={item.date}
                            abstract={item.abstract}
                          />
                        </li>
                      ))
                    }
                  </ul> : ''
              }
            </div>
          </div>
          <SiteInfo />
        </div>
      </React.Fragment>
    )
  }
}

export default Search
