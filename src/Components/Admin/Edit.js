import React from 'react'
import {Link} from "react-router-dom";
import './style.css'

class Edit extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="edit col-10 justify-content-center row">
        <div className="col-10">
          <div>
            <h2>专题标签编辑：</h2>
            <div className="row justify-content-between">
              <div className="col">
                <ul className="list-group">
                  <li><p>JAVA</p></li>
                  <li><p>JAVA</p></li>
                  <li><p>JAVA</p></li>
                  <li><p>JAVA</p></li>
                </ul>
              </div>
              <div className="col">
                <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="输入新专题名" />
                    <div className="input-group-append">
                      <button className="btn btn-primary">添加</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>文章编辑：</h2>
            <ul className="list-group list-group-flush">
              <li>
                <div className="row justify-content-between">
                  <div className="passage-title col-8">
                    <p>这是一篇文章这是一篇文章(2019-03-10)</p>
                  </div>
                  <div className="passage-edit col-2 row justify-content-between">
                    <Link to="/admin/edit-item/123">编辑</Link>
                    <Link to="/admin/edit-item/">删除</Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="row justify-content-between">
                  <div className="passage-title col-8">
                    <p>这是一篇文章这是一篇文章(2019-03-10)</p>
                  </div>
                  <div className="passage-edit col-2 row justify-content-between">
                    <Link to="/admin/edit-item/123">编辑</Link>
                    <Link to="/admin/edit-item/">删除</Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="row justify-content-between">
                  <div className="passage-title col-8">
                    <p>这是一篇文章这是一篇文章(2019-03-10)</p>
                  </div>
                  <div className="passage-edit col-2 row justify-content-between">
                    <Link to="/admin/edit-item/123">编辑</Link>
                    <Link to="/admin/edit-item/">删除</Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="row justify-content-between">
                  <div className="passage-title col-8">
                    <p>这是一篇文章这是一篇文章(2019-03-10)</p>
                  </div>
                  <div className="passage-edit col-2 row justify-content-between">
                    <Link to="/admin/edit-item/123">编辑</Link>
                    <Link to="/admin/edit-item/">删除</Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="row justify-content-between">
                  <div className="passage-title col-8">
                    <p>这是一篇文章这是一篇文章(2019-03-10)</p>
                  </div>
                  <div className="passage-edit col-2 row justify-content-between">
                    <Link to="/admin/edit-item/123">编辑</Link>
                    <Link to="/admin/edit-item/">删除</Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

}

export default Edit
