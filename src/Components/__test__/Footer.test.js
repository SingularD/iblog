import React from 'react'
import { shallow } from "enzyme";
import Footer from '../Content/Footer'

describe("检测翻页组件", () => {
  let wrapper = shallow(<Footer />)
  it("匹配快照", () => {
    expect(wrapper).toMatchSnapshot()
  })
  it("检测内容是否正常渲染", () => {
    expect(wrapper.find('.text-left a').text()).toEqual('上一页')
    expect(wrapper.find('.text-center a').text()).toEqual('归档')
    expect(wrapper.find('.text-right a').text()).toEqual('下一页')

  })
})
