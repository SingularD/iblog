import React from 'react'
import { shallow } from 'enzyme/build'
import SiteInfo from '../Base/SiteInfo'

const info = [
  '© 2019 - 225 的小站 - 京 ICP 备2016100104号',
  'Powered by Bootstrap & React JS'
]

describe('测试网站页面最底部的网站信息与备案信息', () => {
  it('检测信息是否渲染', () => {
    const wrapper = shallow( <SiteInfo /> )
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('p').at(0).text()).toEqual(info[0]);
    expect(wrapper.find('p').at(1).text()).toEqual(info[1])
  });
})
