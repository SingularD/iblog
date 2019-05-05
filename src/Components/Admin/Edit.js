import React from 'react'
import { Link } from "react-router-dom";
import { editData } from "../../Data";

class Edit extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      newCategory: '',
      newResume: '',
      category: editData.category,
      postList: editData.postList
    }
    this.getNewCategory = this.getNewCategory.bind(this)
    this.addCategoryItem = this.addCategoryItem.bind(this)
    this.getNewResume = this.getNewResume.bind(this)
  }
  getNewCategory(e) {
    this.setState({
      newCategory: e.target.value
    })
  }
  getNewResume(e) {
    this.setState({
      newResume: e.target.value
    })
  }
  addCategoryItem() {
    let temp = {
      categoryTitle: this.state.newCategory,
      resume: this.state.newResume
    }
    const arr = [...this.state.category, temp]
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
                          {item.categoryTitle}
                        </p>
                        <p>
                          {item.resume}
                        </p>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="col">
                <div className="input-group mb-3 row">
                  <div className="col-12">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="输入新专题名"
                      onChange={this.getNewCategory}
                    />
                  </div>
                    <div className="col-12 pt-5">
                      <textarea
                        className="form-control"
                        placeholder="请输入该标题相关简介"
                        onChange={this.getNewResume}
                      >
                      </textarea>
                    </div>
                  <div className="col-12 row justify-content-center pt-5">
                    <button
                      className="btn btn-primary col-4"
                      onClick={this.addCategoryItem}
                    >
                      提交
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
