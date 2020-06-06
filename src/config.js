/**
 * Aurora 主题配置文件
 * 食用指南：https://github.com/chanshiyucx/blog/issues/41
 * 联系作者：Blog https://chanshiyu.com      QQ 1124590931
 */

export default {
  /**
   * =========================================================
   *                      站点功能【必需】
   * =========================================================
   */

  /**
   * 站点标题
   */
  title: 'Raptazure',
  subtitle: '心随自然',

  /**
   * Github Issues 配置
   */
  username: 'raptazure', // github 用户名
  repository: 'raptazure.github.io', // 文章仓库地址
  token: ['a0ea424d064f8d05a2d9', '8d64bc0adcfceba23565'], // token 从中间任意位置拆开成两部分，避免 github 代码检测失效

  /**
   * Gitalk 配置，文档详见：https://github.com/gitalk/gitalk
   */
  gitalk: {
    clientID: '686aa5b16c333bda1431',
    clientSecret: 'd4755bd61471bab4fc7426bf5a42cbff293e53fc',
    repo: 'comment', // 评论仓库地址
    owner: 'raptazure',
    admin: ['raptazure'],
    distractionFreeMode: false, // 是否开始无干扰模式【背景遮罩】
  },

  /**
   * leancloud 配置 【注意切换为国际版】
   */
  leancloud: {
    appId: 'V5C47U6TjwVUCV3wPywbPNnQ-MdYXbMMI',
    appKey: 'v133GgpvDL8kEa8nEzAD9XwX',
  },

  /**
   * =========================================================
   *                        页面设置
   * =========================================================
   */

  /**
   * 归档页面
   */
  archiveOpts: {
    display: true, // 是否显示该页面
    enableComment: false, // 是否开启评论功能
    qoute: '華枝春滿 天心月圓', // 页面顶部一言
  },

  /**
   * 分类页面
   */
  categoryOpts: {
    display: true,
    enableComment: false,
    qoute: '桜華月想 暮色蒼然',
  },

  /**
   * 标签配置
   */
  tagOpts: {
    display: true,
    enableComment: false,
    qoute: '灯笼流丽，百鬼夜行',
  },

  /**
   * 灵感页面
   */
  inspirationOpts: {
    display: true,
    enableComment: true,
    qoute: '詠奏妖華，明鏡止水',
  },

  /**
   * 书单页面
   */
  bookOpts: {
    display: false,
    enableComment: true,
    qoute: '追想風景 彼岸帰航',
  },

  /**
   * 友链页面
   */
  friendOpts: {
    display: true,
    enableComment: true,
    qoute: '青青子衿，悠悠我心',
  },

  /**
   * 关于页面
   */
  aboutOpts: {
    display: true,
    enableComment: true,
    qoute: '',
    avatar: '//cdn.jsdelivr.net/gh/raptazure/cdn/blog/avatar.jpg',
    graduated: 'Harbin Institute of Technology',
    college: 'Software Engineering',
    contact: [
      {
        icon: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/email.png',
        link: 'mailto:raptazure@qq.com',
      },
      {
        icon: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/github.png',
        link: 'https://github.com/raptazure',
      },
      {
        icon: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/rsshub.png',
        link: 'https://rsshub.app/github/issue/raptazure/raptazure.github.io/all',
      },
      {
        icon: '//cdn.jsdelivr.net/gh/raptazure/cdn/blog/twitter.png',
        link: 'https://twitter.com/raptazure',
      },
      {
        icon: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/music.png',
        link: 'https://music.163.com/#/user/home?id=451103394',
      },
    ],
  },

  /**
   * =========================================================
   *                         主题自定义
   * =========================================================
   */

  /**
   * 加载动画
   */
  loadingImg: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/blog/loading.gif',

  /**
   * 文章默认图
   */
  defaultCover: '//cdn.jsdelivr.net/gh/chanshiyucx/yoi/bg/defaultCover.jpg',

  /**
   * 赛钱箱
   */
  qrcode: [
    {
      name: '微信',
      img: '//cdn.jsdelivr.net/gh/raptazure/cdn/blog/wechat.jpg',
    },
  ],

  /**
   * 音乐播放器,
   */
  APlayer: [
    {
      name: ' Rosabel【The red Coronation Rearrange】',
      artist: 'Cre-sc3NT',
      url: 'https://files.catbox.moe/a42p8j.mp3',
      cover: '//cdn.jsdelivr.net/gh/raptazure/cdn/blog/rosabel.jpg',
    },
    {
      name: 'only my railgun',
      artist: 'まらしぃ',
      url: 'https://files.catbox.moe/76bb9t.mp3',
      cover: '//cdn.jsdelivr.net/gh/raptazure/cdn/blog/only-my-railgun.jpg',
    },
    {
      name: 'エミール',
      artist: '岡部啓一,石濱翔,帆足圭吾',
      url: 'https://files.catbox.moe/s96jn1.mp3',
      cover: '//cdn.jsdelivr.net/gh/raptazure/cdn/blog/nier.jpeg',
    },
    {
      name: 'カイネ',
      artist: '岡部啓一,石濱翔,帆足圭吾',
      url: 'https://files.catbox.moe/grsmkl.mp3',
      cover: '//cdn.jsdelivr.net/gh/raptazure/cdn/blog/nier.jpeg',
    },
    {
      name: '「海境(うなさか)より」',
      artist: '増田俊郎',
      url: 'https://files.catbox.moe/e1w2l0.mp3',
      cover: '//cdn.jsdelivr.net/gh/raptazure/cdn/blog/chongshi.jpg',
    },
    {
      name: 'Tempo',
      artist: 'Andrei Machado',
      url: 'https://files.catbox.moe/cz9kyf.mp3',
      cover: '//cdn.jsdelivr.net/gh/raptazure/cdn/blog/tempo.jpg',
    },
    {
      name: 'Promise',
      artist: '山岡晃',
      url: 'https://files.catbox.moe/z3owsh.mp3',
      cover: '//cdn.jsdelivr.net/gh/raptazure/cdn/blog/silenthill.jpg',
    },
  ],

  /**
   * 主题配色，主要用于文章、灵感、关于等卡片配色
   * 推荐一个超棒的取色站，日本の伝統色：http://nipponcolors.com/
   */
  themeColors: [
    '#B28FCE', // 薄
    '#86C166', // 苗
    '#F596AA', // 桃
    '#F19483', // 曙
    '#F9BF45', // 玉子
    '#FAD689', // 浅黄
    '#E79460', // 洗柿
    '#2EA9DF', // 露草
    '#FB966E', // 洗朱
    '#BC9F77', // 白茶
    '#867835', // 黄海松茶
    '#B9887D', // 水がき
  ],
}
