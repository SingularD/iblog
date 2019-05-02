import React from 'react'
import { shallow } from "enzyme";
import Statistics from '../Admin/Statistics'

describe("检测统计页面是否正常渲染", () => {
  let wrapper = shallow(<Statistics />)
  it("匹配快照", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
