import React from 'react'
import { shallow } from "enzyme";
import Archive from '../Content/Archive'
import Category from '../Content/Category'
import About from '../Content/About'

describe("归档，专题，关于本站的测试", () => {
  let wrapper1 = shallow(<Archive/>)
  let wrapper2 = shallow(<Category/>)
  let wrapper3 = shallow(<About/>)
  it("匹配快照", () => {
    expect(wrapper1).toMatchSnapshot()
    expect(wrapper2).toMatchSnapshot()
    expect(wrapper3).toMatchSnapshot()
  })
})
