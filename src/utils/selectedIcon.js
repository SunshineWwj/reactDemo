/* eslint-disable react/display-name */
import React from 'react';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    AppleOutlined,
    WindowsOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
export default icon => {
    switch(icon) {
        case 'AppleOutlined':
            return <AppleOutlined />;
        case 'WindowsOutlined':
            return <WindowsOutlined />;
        case 'MenuUnfoldOutlined':
            return <MenuUnfoldOutlined />;
        case 'MenuFoldOutlined':
            return <MenuFoldOutlined />;
        case 'VideoCameraOutlined':
            return <VideoCameraOutlined />;
        case 'UploadOutlined':
            return <UploadOutlined />;
        default:
            return <UserOutlined />;
    }
};
