import React from 'react'
import { shallow } from "enzyme";
import PostItem from '../Content/PostItem'

const props = {
  id: '0',
  title: '如何使用JavaScript如何使用JavaScript',
  date: '2019-4-19',
  abstract: '今年早些时候，奇舞团开源的 Node.js 框架 ── ThinkJS ' +
    '迎来了她的 3.0 版本。 尽管今年我很少更新博客，但「每次 ThinkJS ' +
    '发布大版本，我都要更新博客程序」 的老传统还是不能丢。所以，' +
    '你现在看到的这个博客，已经是基于 ThinkJS 3 全面重构后的新版。'
}

describe("检测文章列表简略图是否正常渲染", () => {
  let wrapper = shallow(<PostItem {...props}/>)
  it("匹配快照", () => {
    expect(wrapper).toMatchSnapshot()
  })
  it("内容是否正常渲染", () => {
    expect(wrapper.find('.post-item-header-title h3').text())
      .toEqual( '如何使用JavaScript如何使用JavaScript')
    expect(wrapper.find('.post-item-header-date').text())
      .toEqual( '2019-4-19')
    expect(wrapper.find('.post-item-content p').text())
      .toEqual('今年早些时候，奇舞团开源的 Node.js 框架 ── ThinkJS ' +
        '迎来了她的 3.0 版本。 尽管今年我很少更新博客，但「每次 ThinkJS ' +
        '发布大版本，我都要更新博客程序」 的老传统还是不能丢。所以，' +
        '你现在看到的这个博客，已经是基于 ThinkJS 3 全面重构后的新版。')
    expect(wrapper.instance().props.id).toEqual('0')
  })
})
