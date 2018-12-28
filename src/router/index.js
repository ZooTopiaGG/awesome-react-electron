import DownLoad from 'views/download';
import FindMusic from 'views/findmusic';
import Fm from 'views/fm';
import Friends from 'views/friends';
import Local from 'views/local';
import Mv from 'views/mv';
import SongList from 'views/songlist';

const routes = [{
    key: 'findmusic',
    link: '/findmusic',
    iconType: 'customer-service',
    text: '发现音乐',
    group: '推荐',
    component: FindMusic
  },
  {
    key: 'fm',
    link: '/fm',
    iconType: 'bell',
    text: '私人FM',
    group: '推荐',
    component: Fm
  },
  {
    key: 'mv',
    link: '/mv',
    iconType: 'video-camera',
    text: '视频',
    group: '推荐',
    component: Mv
  },
  {
    key: 'friends',
    link: '/friends',
    iconType: 'team',
    text: '朋友',
    group: '推荐',
    component: Friends
  },
  {
    key: 'download',
    link: '/download',
    iconType: 'download',
    text: '下载管理',
    group: '我的音乐',
    component: DownLoad
  },
  {
    key: 'local',
    link: '/local',
    iconType: 'appstore',
    text: '本地管理',
    group: '我的音乐',
    component: Local
  },
  {
    key: 'songlist',
    link: '/songlist',
    iconType: 'user',
    text: '我喜欢的音乐',
    group: '创建的音乐',
    component: SongList
  }
];

export {
  routes
};