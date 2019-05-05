import React from 'react'
import NavBar from '../Content/NavBar'
import { shallow } from "enzyme";

import PortraitUrl from '../../assets/images/portrait_mode.png'
import GithubUrl from '../../assets/images/github.png'
import RssUrl from '../../assets/images/rss.png'
import SearchUrl from '../../assets/images/search.png'

describe("测试导航栏是否正常渲染", () => {
  let wrapper = shallow(<NavBar />)
  it("导航栏快照匹配", () => {
    expect(wrapper).toMatchSnapshot()
  })
  it("检测导航头像以及相关链接图片是否正常渲染", () => {
    expect(wrapper.find('.nav-bar-head-portrait img').props().src)
      .toEqual(PortraitUrl)
    expect(wrapper.find('.nav-bar-hrefs img').length).toEqual(3)
    expect(wrapper.find('.nav-bar-hrefs img').at(0).props().src)
      .toEqual(GithubUrl)
    expect(wrapper.find('.nav-bar-hrefs img').at(1).props().src)
      .toEqual(RssUrl)
    expect(wrapper.find('.nav-bar-hrefs img').at(2).props().src)
      .toEqual(SearchUrl)
  })
  it("检测导航栏文字部分是否正常渲染", () => {
    expect(wrapper.find('.nav-bar-resume h3').text()).toEqual('Singular')
    expect(wrapper.find('.nav-bar-resume p').text()).toEqual('这是一段个人简介')
    expect(wrapper.find('.list-group-item').length).toEqual(5)
  })
})
