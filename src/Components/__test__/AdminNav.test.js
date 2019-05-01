import React from 'react'
import { shallow } from "enzyme";
import AdminNav from '../Admin/AdminNav'

describe("检测后台管理页面", () => {
  let wrapper = shallow(<AdminNav />)
  it("匹配快照", () => {
    expect(wrapper).toMatchSnapshot()
  })
})
