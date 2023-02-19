// jest是执行测试用例的工具，运行npm run test,就会找到所有的.test.js文件并行执行。
// 想要测试某个组件，直接引入该组件，然后编写测试用例代码
// 想要测试某个js方法也可以。

import { createLocalVue, shallowMount } from '@vue/test-utils';
import ElementUI from 'element-ui';
import TableList from '@/components/tableList.vue';
const localVue = createLocalVue();
localVue.use(ElementUI);

describe('tableList', () => {
  it('有el-dialog', () => {
    const wrapper = shallowMount(TableList, {localVue});
    const elForm = wrapper.find('el-dialog');
    expect(elForm.exists())
  })
})
