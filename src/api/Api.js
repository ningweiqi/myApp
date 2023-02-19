import request from '@/utils/request'

export function getList() {
    return request({
        url: '/mock/listApi',
        // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
}