import React from 'react';
import propTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';

const ProductList = ({ onDelete, products }) => {
  console.log(products,'products')
  const columns = [{
    title: 'Name',
    dataIndex: 'name'
  }, {
    title: 'Actions',
    render: (text, record) => {
      console.log(record,'文化')
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      )
    }
  }];
  return (
    <Table dataSource={products} columns={columns} />
  )
};

ProductList.propTypes = {
  onDelete: propTypes.func.isRequired,
  products: propTypes.array.isRequired
};

export default ProductList;
