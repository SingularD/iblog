import React from 'react'
import { shallow } from "enzyme";
import Writing from '../Admin/Writing'
import EditItem from '../Admin/EditItem'


describe("检测文章写作页面与文章编辑页面是否渲染正常", () => {
  let wrapper1 = shallow(<Writing />)
  let wrapper2 = shallow(<EditItem />)

  it("匹配快照", () => {
    expect(wrapper1).toMatchSnapshot()
    expect(wrapper2).toMatchSnapshot()
  })
  it("检测函数功能是否正常", () => {
    expect(wrapper1.find('button').length).toEqual(2)
    expect(wrapper2.find('button').length).toEqual(2)
    wrapper1.find('button').at(0).simulate('click')
    wrapper2.find('button').at(0).simulate('click')
  })
})
