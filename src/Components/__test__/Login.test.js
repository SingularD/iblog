import React from 'react'
import { shallow } from "enzyme";
import Login from '../Admin/Login'

describe("检测登录界面是否正常渲染", () => {
  let wrapper = shallow(<Login />)
  it("匹配快照", () => {
    expect(wrapper).toMatchSnapshot()
  })
  it("模拟输入事件", () => {
    wrapper.find('input').forEach((item, index) => {
      item.simulate('input')
    })
  })
  it("模拟点击事件", () => {
    wrapper.find('button').simulate('click')
  })
})
