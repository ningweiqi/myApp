import axios from 'axios'
// create an axios instance

const service = axios.create({
    timeout: 35000 // request timeout
})

// 2.请求拦截器
service.interceptors.request.use(config => {
    console.log(config)
    // config.headers.Authorization = ''; //如果要求携带在请求头中
    return config;
}, error => {
    console.log(error)
    return Promise.reject(error);
})
// 3.响应拦截器
service.interceptors.response.use(response => {
        //  console.log(response)
        return response;
    }, error => {
        // console.log(error)
        return Promise.reject(error);
    }
)

export default service