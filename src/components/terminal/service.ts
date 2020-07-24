import { http } from './../../utils/http';

/** 根据输入获取对应的命令 */
export function getTerminalReponse(param: Object) {
  return http({
    type: 'post',
    url: '/home/terminal',
    param: param
  })
}