import React from 'react'
import HomePage from '../Content/HomePage'
import { shallow } from "enzyme";

describe("检查主页相关内容是否正常渲染", () => {
  let wrapper = shallow(<HomePage />)
  it("匹配快照", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
