import React from 'react'

import Portrait from '../../assets/images/portrait_mode.png'

class Initialize extends React.Component{
  render() {
    return (
      <div className="row col-12 justify-content-center initialize">
        <div className="row col-lg-4 col-12 border-right mt-3 mt-lg-0
        border-bottom justify-content-center initialize-nav-bar">
          <div className="col-12 col-lg-10">
            <h3>导航栏信息初始化：</h3>
            <div className="input-group mt-3">
              <input type="text" className="form-control init-username" placeholder="Username"/>
            </div>
            <div className="input-group mt-3">
              <input type="text" className="form-control init-resume" placeholder="Resume"/>
            </div>
            <div className="input-group mt-3 initialize-portrait-submit">
              <label htmlFor="exampleFormControlFile1">上传头像</label>
              <input type="file" className="form-control-file" id="exampleFormControlFile1"/>
              <div className="portrait-preview mt-2">
                <p>头像预览：</p>
                <img src={Portrait} alt=""/>
              </div>
            </div>
            <div className="initialize-submit mt-5">
              <button type="button" className="btn btn-success">确认提交</button>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-12 mt-3 mt-lg-0">
          <h3>网站信息初始化：</h3>
          <div className="input-group mt-3">
            <input type="text" className="form-control init-username" placeholder="Username"/>
          </div>
          <div className="input-group mt-3">
            <input type="text" className="form-control record-info" placeholder="备案信息"/>
          </div>
          <div className="input-group mt-3">
            <input type="text" className="form-control init-username" placeholder="个人声明"/>
          </div>
          <div className="input-group mt-3">
            <textarea className="form-control init-username" placeholder="版权说明"/>
          </div>
          <div className="input-group mt-3">
            <textarea className="form-control init-username" placeholder="支持本站"/>
          </div>
          <div className="input-group mt-3">
            <textarea className="form-control init-username" placeholder="关于本站"/>
          </div>
          <div className="row justify-content-center mt-3 pb-3">
            <button type="button" className="btn btn-success col-4 col-lg-2">确认提交</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Initialize
