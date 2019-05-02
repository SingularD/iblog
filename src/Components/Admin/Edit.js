import React from 'react'
import {Link} from "react-router-dom";
import './style.css'

class Edit extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      category: ['JAVA', 'HTTP', '前端框架', 'MySQL'],
      postList: [
        {
          id: '0',
          title: '这是一篇文章这是一篇文章',
          date: '2019-03-10'
        },
        {
          id: '1',
          title: '这是一篇文章这是一篇文章',
          date: '2019-03-10'
        },
        {
          id: '2',
          title: '这是一篇文章这是一篇文章',
          date: '2019-03-10'
        },
        {
          id: '3',
          title: '这是一篇文章这是一篇文章',
          date: '2019-03-10'
        },
      ]
    }
    this.getInputValue = this.getInputValue.bind(this)
    this.addCategoryItem = this.addCategoryItem.bind(this)
  }
  getInputValue(e) {
    this.setState({
      inputValue: e.target.value
    })
  }
  addCategoryItem() {
    const arr = [...this.state.category, this.state.inputValue]
    this.setState({
      category: arr
    })
  }
  render() {
    return (
      <div className="edit col-10 justify-content-center row">
        <div className="col-10">
          <div>
            <h2>专题标签编辑：</h2>
            <div className="row justify-content-between">
              <div className="col">
                <ul className="list-group category-group">
                  {
                    this.state.category.map((item, index) => (
                      <li key={index}>
                        <p>
                          {item}
                        </p>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="col">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="输入新专题名"
                    onChange={this.getInputValue}
                  />
                    <div className="input-group-append">
                      <button
                        onClick={this.addCategoryItem}
                        className="btn btn-primary"
                      >
                        添加
                      </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>文章编辑：</h2>
            <ul className="list-group list-group-flush post-group">
              {
                this.state.postList.map((item, index) => (
                  <li key={index}>
                    <div className="row justify-content-between">
                      <div className="passage-title col-8">
                        <p>{item.title}({item.date})</p>
                      </div>
                      <div className="passage-edit col-2 row justify-content-between">
                        <Link to="/admin/edit-item/123">
                          编辑
                        </Link>
                        <Link to="/admin/edit-item/">
                          删除
                        </Link>
                      </div>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }

}

export default Edit
