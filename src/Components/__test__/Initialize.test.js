import React from 'react'
import { shallow } from "enzyme";
import Initialize from '../Initialize/Initialize'

describe("测试网站初始化界面", () => {
  let wrapper = shallow(<Initialize />)
  it("匹配快照", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
