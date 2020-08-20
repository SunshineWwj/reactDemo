import React from 'react';
import TestHooksAndClass from '../homeHooks';
import Rate from '../rate';
import HooksAll from '../homeHooks/HooksAllUse';
import ReactRedux from '../ReactRedux';
import {Routes} from './routerManager';
import TableQuery from '../TableQuery';
import OverrideInput from '../OverrideInput';
import Test from '../TestJQuery';
import RefsDemo from '../RefsDemo';
import RefsForward from '../ForwardRef';
import HOC from '../HOC';
const routes = new Routes({
    hooks: {
        url: '/hooks',
        title: 'Hooks和class比较',
        component: TestHooksAndClass,
    },
    hooksUse: {
        url: '/hooksUse',
        title: 'Hooks基本使用',
        component: HooksAll,
    },
    rate: {
        url: '/rate',
        title: '评分',
        component: Rate,
    },
    reactRedux: {
        url: '/reactRedux',
        title: 'redux learn',
        component: ReactRedux,
    },
    tableQuery: {
        url: '/tableQuery',
        title: '表格',
        component: TableQuery,
    },
    inputs: {
        url: '/inputs',
        title: '封装Input',
        component: OverrideInput,
    },
    refs: {
        url: '/refs',
        title: '使用ref',
        component: RefsDemo,
    },
    refsForward: {
        url: '/refsForward',
        title: 'refs转发',
        component: RefsForward,
    },
    hoc: {
        url: '/hoc',
        title: 'HOC高阶组件',
        component: HOC,
    },
    test: {
        url: '/test',
        title: '测试第三方库',
        component: Test,
    },
});
const routeKeys = Object.keys(routes);
const routeValue = Object.values(routes);
routeValue.forEach((c, i) => {
    c.goPath = `/${routeKeys[i]}`;
});
console.log(routeValue);
export default routeValue;
