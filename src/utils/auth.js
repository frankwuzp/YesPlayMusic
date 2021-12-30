import Cookies from 'js-cookie';
import { logout } from '@/api/auth';
import store from '@/store';

export function setCookies(string) {
  const cookies = string.split(';;');
  cookies.map(cookie => {
    document.cookie = cookie;
    const cookieKeyValue = cookie.split(';')[0].split('=');
    localStorage.setItem(`cookie-${cookieKeyValue[0]}`, cookieKeyValue[1]);
  });
}

export function getCookie(key) {
  return Cookies.get(key) ?? localStorage.getItem(`cookie-${key}`);
}

export function removeCookie(key) {
  Cookies.remove(key);
  localStorage.removeItem(`cookie-${key}`);
}

// MUSIC_U 只有在账户登录的情况下才有
export function isLoggedIn() {
<<<<<<< HEAD
  return getStorage('MUSIC_U') !== undefined ? true : false;
=======
  return getCookie('MUSIC_U') !== undefined;
>>>>>>> d15381020552cbd0faa1c6447367687ea0b99657
}

// 账号登录
export function isAccountLoggedIn() {
  return (
<<<<<<< HEAD
    getStorage('MUSIC_U') !== undefined &&
=======
    getCookie('MUSIC_U') !== undefined &&
>>>>>>> d15381020552cbd0faa1c6447367687ea0b99657
    store.state.data.loginMode === 'account'
  );
}

export function getStorage(cname) {
  return localStorage.getItem(cname);
}

export function setStorage(cname, cvalue) {
  localStorage.setItem(cname, cvalue);
}

// 用户名搜索（用户数据为只读）
export function isUsernameLoggedIn() {
  return store.state.data.loginMode === 'username';
}

// 账户登录或者用户名搜索都判断为登录，宽松检查
export function isLooseLoggedIn() {
  return isAccountLoggedIn() || isUsernameLoggedIn();
}

<<<<<<< HEAD
export function getMusicU(string) {
  const temp = string.split(';');
  if (!temp.length) {
    return undefined;
  }
  const MUSIC_U = temp.find(item => item.includes('MUSIC_U'));
  if (MUSIC_U) {
    return MUSIC_U.split('=')[1];
  }
  return '';
}

export function setMusicU(key, value) {
  return Cookies.set(key, value);
}

export function setCookies(string) {
  const cookies = string.split(';;');
  cookies.map(cookie => {
    const storeArr = cookie.split('; ');
    storeArr.map(storeItem => {
      const item = storeItem.split('=');
      setStorage(item[0], item[1]);
    });
    document.cookie += cookie;
  });
=======
export function doLogout() {
  logout();
  removeCookie('MUSIC_U');
  removeCookie('__csrf');
  // 更新状态仓库中的用户信息
  store.commit('updateData', { key: 'user', value: {} });
  // 更新状态仓库中的登录状态
  store.commit('updateData', { key: 'loginMode', value: null });
  // 更新状态仓库中的喜欢列表
  store.commit('updateData', { key: 'likedSongPlaylistID', value: undefined });
>>>>>>> d15381020552cbd0faa1c6447367687ea0b99657
}
