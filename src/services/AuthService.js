import VK_CONFIG from '../config.js'
import { remote } from 'electron'

const BrowserWindow = remote.BrowserWindow;

const hasAccessToken = (href) => {
  return href.indexOf('access_token=') >= 0;
}

const hasParameterByName = (param, url) => {
  return url.indexOf(`${param}=`) >= 0;
}

const getParameterByName = (param, url) => {
  let parts = url.split('&');
  for (let i = 0; i < parts.length; i++) {
    let part = parts[i];
    if (hasParameterByName(param, part)) {
      let str = part;
      let index = str.indexOf(param) + param.length + 1;
      return str.substring(index, str.length);
    }
  }
}

const hasSavedAccessKey = () => {
  return localStorage.getItem('access_token') && localStorage.getItem('user_id');
}

const loginFromStorage = (resolve) => {
  let access_token = localStorage.getItem('access_token');
  let user_id = localStorage.getItem('user_id');
  if (access_token && user_id) {
    resolve(user_id);
  }
}

const loginFromNewToken = (resolve, reject) => {
  let link = VK_CONFIG.getAccessLink();
  let win = new BrowserWindow({width: 1024, height: 768});
  win.on('closed', () => {
    win = null
    reject();
  });
  win.loadURL(link);
  win.webContents.on('did-get-redirect-request', (event, oldUrl, newUrl) => {
    if (hasAccessToken(newUrl)) {
      win.close();
      let access_token = getParameterByName('access_token', newUrl);
      localStorage.setItem('access_token', access_token);
      let user_id = getParameterByName('user_id', newUrl);
      localStorage.setItem('user_id', user_id);
      resolve(user_id);
    }
  });
}

const AuthService = () => {
  return new Promise((resolve, reject)=> {
    if (hasSavedAccessKey()) {
      loginFromStorage(resolve, reject);
    } else {
      loginFromNewToken(resolve, reject);
    }
  })
}

export default AuthService
