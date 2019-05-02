import React from 'react'
import { shallow } from "enzyme";
import Edit from '../Admin/Edit'

const props = {
  category: ['JAVA', 'HTTP', '前端框架', 'MySQL'],
  postList: [
    {
      id: '0',
      title: '这是一篇文章这是一篇文章',
      date: '2019-03-10'
    },
    {
      id: '1',
      title: '这是一篇文章这是一篇文章',
      date: '2019-03-10'
    },
    {
      id: '2',
      title: '这是一篇文章这是一篇文章',
      date: '2019-03-10'
    },
    {
      id: '3',
      title: '这是一篇文章这是一篇文章',
      date: '2019-03-10'
    },
  ]
}

describe("检测编辑页面是否正常渲染", () => {
  let wrapper = shallow(<Edit />)

  it("匹配快照", () => {
    expect(wrapper).toMatchSnapshot()
  })
  it("列表组是否正确渲染", () => {
    wrapper.find('.category-group li').forEach((item, index) => {
      expect(item.text()).toEqual(props.category[index])
    })
    wrapper.find('.post-group li').forEach((item, index) => {
      expect(item.find('.passage-title p').text())
        .toEqual(props.postList[index].title + `(${props.postList[index].date})`)
    })
  })
  it("模拟点击事件函数", () => {
    wrapper.find('.input-group-append button').simulate('click')
  })
})
