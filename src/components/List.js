import React from 'react';
import propTypes from 'prop-types';
import {Popconfirm, Button, Table} from 'antd'
const List = ({onDelete, param}) => {
    console.log(param,'listsss?')
    const columns = [{
        title:'Name',
        dataIndex: 'name',
        key:'name'
    },{
        title:'Actions',
        key:'action',
        render: (Text,record) => {
            return(
                <Popconfirm title="你确定删除吗，大佬" onConfirm={() => onDelete(record.id)}>
                    <Button>删除</Button>
                </Popconfirm>
            )
        }
    }];
    return(
    <Table dataSource={param} columns={columns} />
    )
};

List.propTypes = {
    onDelete: propTypes.func.isRequired,
    param: propTypes.array.isRequired
};

export default List;