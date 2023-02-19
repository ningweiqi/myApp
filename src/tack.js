import Vue from 'vue'

// 埋点指令
let track = Vue.directive('track', {
    bind: (el, binding, vnode) => {
        el.addEventListener('click', () => {
            const data = binding.value;

            // request API
            console.log(data);

            //接口处理
        }, false);
    }
})

export default track