import React, { Component } from 'react';
import { Menu, Icon } from 'antd';

const MenuItemGroup = Menu.ItemGroup;
const SubMenu = Menu.SubMenu;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [{ type: 'mail', content: '邮件', index: 0 },
            { type: 'phone', content: '电话', index: 1 },
            { type: 'mail', content: '邮件', index: 2 },
            { type: 'mail', content: '邮件', index: 3 }],
            sublists: [
                { title: 'item1', index: 1, children: [{ key: 'setting1', content: 'content1' }, { key: 'setting2', content: 'content2' }] },
                { title: 'item2', index: 2, children: [{ key: 'setting3', content: 'content1' }, { key: 'setting4', content: 'content2' }] }
            ],
            current: ''
        }

    }
    handleClick = (e) => {
        console.log('click', e);
    }
    componentDidMount() {
    }
    render() {
        const subListsParent = (children) => <SubMenu title={<span className="submenu-title-wrapper"><Icon type="setting" />Navigation Three - Submenu</span>}>{children}</SubMenu>;
        // 下拉部分
        const sublists = this.state.sublists.map(item => (
            <MenuItemGroup title={item.title} key={item.index}>
                {item.children.map(key => (
                    <Menu.Item key={key.key}>{key.content}</Menu.Item>
                ))}
            </MenuItemGroup>
        ));
        // 顶部菜单栏
        const lists = this.state.lists.map(item =>
            (<Menu.Item key={item.index}>
                <Icon type={item.type} />{item.content}
            </Menu.Item>)
        );
        return (
            <div>
                <Menu onClick={this.props.onClick} mode="horizontal" selectedKeys={[this.state.current]}>
                    {lists}
                    {subListsParent(sublists)}
                </Menu>
            </div>
        )
    }
}

