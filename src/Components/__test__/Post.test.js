import React from 'react'
import { shallow } from "enzyme";
import Post from '../Content/Post'
import marked from 'marked'
import highLight from "highlight.js";

const props = {
  postTitle: '如何为 ThinkJS 3 网站优化 TTFB 时间',
  postDate: '2019-04-12',
  postContent: '## JS框架学习\n' +
    '\n' +
    '### Vue.js\n' +
    '\n' +
    '#### 安装\n' +
    '\n' +
    '```shell\n' +
    'npm install -g vue-cli\n' +
    '\n' +
    'vue init webpack projectName\n' +
    'cd projectName\n' +
    'npm run dev\n' +
    '```\n' +
    '\n' +
    '\n' +
    '\n' +
    '#### 基础知识\n' +
    '\n' +
    '##### 生命周期\n' +
    '\n' +
    '由上图我们可以看出：在vue中有八个生命周期的钩子，它们分别是：\n' +
    '\n' +
    '1. beforeCreate\n' +
    '2. create\n' +
    '3. beforeMount\n' +
    '4. mounted\n' +
    '5. beforeUpdate\n' +
    '6. updated\n' +
    '7. beforeDestroy\n' +
    '8. destroyed\n' +
    '\n' +
    '那么它们之中最重要的就是第四个，mounted，它所代表的是对象挂载之后的这么一个生命周期，相当于原生js中loaded，就是在dom节点挂载之后，开始渲染页面之前的这么一个生命周期，比如我们的ajax请求大部分可能就要在这里来进行\n' +
    '\n' +
    '\n' +
    '\n' +
    '#### 选项数据\n' +
    '\n' +
    '* data\n' +
    '* computed\n' +
    '* methods\n' +
    '\n' +
    '首先data属性是管理全局变量的一个对象，在html标签中，要使用它其中的变量只需要`{{ 变量名即可 }}`,我们可以把它想做对象的解构赋值，而且在这个`{{}}`中我们可以输入js表达式，但是要注意的是这里使用的两层花括号；\n' +
    '\n' +
    'computed和methods是两个对象，我们在模板主要使用他们的方法，所以在书写的时候data是函数形式，而他们两个则是对象\n' +
    '\n' +
    '```vue\n' +
    '<template>\n' +
    '    <div>\n' +
    '      <h1>选项数据</h1>\n' +
    '      <h1>---------------------------</h1>\n' +
    '      <h1>data: {{ message }}</h1>\n' +
    '      <h1>---------------------------</h1>\n' +
    '      <h1>computed:  {{ count }}</h1>\n' +
    '      <h1>---------------------------</h1>\n' +
    '      <h1 @click="sayHi(\'hello\')">methods!</h1>\n' +
    '    </div>\n' +
    '</template>\n' +
    '\n' +
    '<script>\n' +
    '  export default {\n' +
    '    name: "test",\n' +
    '    data() {\n' +
    '      return {\n' +
    '        message: \'我是李松蔚\',\n' +
    '        num: 20\n' +
    '      }\n' +
    '    },\n' +
    '    computed: {\n' +
    '      count() {\n' +
    '        return this.num + 10;\n' +
    '      }\n' +
    '    },\n' +
    '    methods: {\n' +
    '      sayHi(params) {\n' +
    '        alert(params)\n' +
    '      }\n' +
    '    }\n' +
    '  }\n' +
    '</script>\n' +
    '```\n' +
    '\n'
}

const getMarkdownText = () => {
  marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code) {
      return highLight.highlightAuto(code).value;
    },
    pedantic: false,
    gfm: true,
    tables: true,
    breaks: false,
    sanitize: false,
    smartLists: true,
    smartypants: false,
    xhtml: false
  });
  const rawMarkup = marked(props.postContent)
  return { __html: rawMarkup }
}

describe("检测文章展示页是否正常渲染", () => {
  let wrapper = shallow(<Post />)
  it("匹配快照", () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('文章内容markdown格式是否正常渲染',  () => {
    expect(wrapper.find('.post-header p').at(0).text()).toEqual(props.postTitle)
    expect(wrapper.find('.post-header p').at(1).text()).toEqual(props.postDate)
  });
})
