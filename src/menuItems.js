export const menus = [
    {
        title: 'Hooks相关',
        pinyin: 'hooks',
        key: 'm1',
        icon: 'AppleOutlined',
        items: [
            {
                title: 'Hooks和class对比',
                pinyin: 'Hooks和class对比',
                key: 'sm1-1',
                url: '/hooks', //浏览器中显示的路由
            },
            {
                title: 'Hooks基本使用',
                pinyin: 'Hooks基本使用',
                key: 'sm1-2',
                url: '/hooksUse', //浏览器中显示的路由
            },
            {
                title: '评分',
                pinyin: 'pingfen',
                key: 'sm1-3',
                url: '/rate',
            },
        ],
    },
    {
        title: 'Redux相关',
        pinyin: 'redux',
        key: 'm2',
        icon: 'WindowsOutlined',
        items: [
            {
                title: 'redux',
                pinyin: 'redux',
                key: 'sm2-1',
                url: '/reactRedux',
            },
        ],
    },
    {
        title: 'React相关',
        pinyin: 'react',
        key: 'm3',
        icon: 'WindowsOutlined',
        items: [
            {
                title: '表格测试',
                pinyin: 'biaogeceshi',
                key: 'sm3-1',
                url: '/tableQuery',
            },
            {
                title: '封装Input',
                pinyin: 'inputs',
                key: 'sm3-2',
                url: '/inputs',
            },
            {
                title: '使用ref', //页面显示标题
                pinyin: 'refs',
                key: 'sm3-3',
                url: '/refs', //浏览器显示路由，需和router里面匹配
            },
            {
                title: 'refs转发', //页面显示标题
                pinyin: 'refszhuanfa',
                key: 'sm3-4',
                url: '/refsForward', //浏览器显示路由，需和router里面匹配
            },
            {
                title: 'HOC高阶组件', //页面显示标题
                pinyin: 'hoc',
                key: 'sm3-5',
                url: '/hoc', //浏览器显示路由，需和router里面匹配
            },
            {
                title: 'Render Props', //页面显示标题
                pinyin: 'renderprops',
                key: 'sm3-6',
                url: '/renderProps', //浏览器显示路由，需和router里面匹配
            },
            {
                title: '五子棋',
                pinyin: 'wuziqi',
                key: 'sm3-7',
                url: '/wuziqi'
            }
        ],
    },
    {
        title: 'JQuery第三方库',
        pinyin: '第三方库',
        key: 'm4',
        icon: 'WindowsOutlined',
        items: [
            {
                title: '测试',
                pinyin: 'biaogeceshi',
                key: 'sm4-1',
                url: '/test',
            },
        ],
    },
];
