const {
  app,
  BrowserWindow,
  globalShortcut
} = require('electron');
const path = require('path');
const url = require('url');
const pkg = require('./package.json');
/**
 * electron.app 负责管理Electron应用程序的生命周期
 * electron.BrowserWindow 负责管理Electron应用程序的生命周期
 */
let win;

function createWindow() {

  // 创建浏览器窗口
  win = new BrowserWindow({
    width: 800,
    height: 600
  });

  // 然后加载应用的index.html
  if (pkg.DEV) {
    console.log('pkg.Dev', pkg.DEV)
    win.loadURL('http://localhost:3000/')
  } else {
    win.loadURL(url.format({
      pathname: path.join(__dirname, './build/index.html'),
      protocol: 'file:',
      slashes: true
    }))
  }

  // 打开开发者工具
  win.webContents.openDevTools();

  // 当窗口被关闭时 回调
  win.on('closed', () => {
    // 取消引用 window 对象，如果你的应用支持多窗口的话，
    // 通常会把多个 window 对象存放在一个数组里面，
    // 与此同时，你应该删除相应的元素。
    win = null
  });

  // 注册快捷键
  globalShortcut.register('Ctrl+U', () => {
    console.log('摁了 ctrl+u')
  })

}

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', createWindow);

// 当全部窗口关闭时退出
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (win === null) {
    createWindow()
  }
})

// 在这个文件中，你可以续写应用剩下主进程代码。
// 也可以拆分成几个文件，然后用 require 导入。