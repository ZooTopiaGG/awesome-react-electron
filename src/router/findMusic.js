import LastestMusic from 'views/findmusic/lastestMusic';
import Rank from 'views/findmusic/rank';
import Recommend from 'views/findmusic/recommend';
import Singers from 'views/findmusic/singers';
import Songs from 'views/findmusic/songs';
import Station from 'views/findmusic/station';


const FindMuiscRoutes = [
  {
    key: 'recommend',
    link: '/recommend',
    text: '个性推荐',
    component: Recommend
  },
  {
    key: 'songs',
    link: '/songs',
    text: '歌单',
    component: Songs
  },
  {
    key: 'station',
    link: '/station',
    text: '主播电台',
    component: Station
  },
  {
    key: 'rank',
    link: '/rank',
    text: '排行榜',
    component: Rank
  },
  {
    key: 'singers',
    link: '/singers',
    text: '歌手',
    component: Singers
  },
  {
    key: 'lastestmusic',
    link: '/lastestmusic',
    text: '最新音乐',
    component: LastestMusic
  }
];

export {
  FindMuiscRoutes
};