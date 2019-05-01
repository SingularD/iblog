import React from 'react'
import { shallow } from "enzyme";
import FriendLink from '../Content/FriendLink'

describe("测试友链是否渲染", () => {
  let wrapper = shallow(<FriendLink />)
  it("匹配快照", () => {
    expect(wrapper).toMatchSnapshot()
  })
  it("测试渲染", () => {
    expect(wrapper.find('.friend-link h1').text()).toEqual('尚未开放，请期待...')
  })
})
