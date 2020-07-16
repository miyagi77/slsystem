/***
 * 封装localStorsge本地储存方法
 * autor:张雷
 * set:存入缓存
 * get：取出缓存
 * remove：移除缓存
 * key：匹配缓存中字段
 * value：需要储存的值
 */
var storage = {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get(key) {
      return JSON.parse(localStorage.getItem(key));
    },
    remove(key) {
        localStorage.removeItem(key)
    }
}
export default storage
