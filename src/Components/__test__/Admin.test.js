import React from 'react'
import { shallow } from "enzyme";
import Admin from '../Admin/Admin'

describe("检测后台管理页面是否正常渲染", () => {
  let wrapper = shallow(<Admin />)
  it("快照匹配", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
