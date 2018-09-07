import React from 'react';
import { connect } from 'dva';
import List from '../components/List';

const Lists = ({ dispatch, param }) => {
    function handleDelete(id) {
        dispatch({ type: 'param/shan', payload: id })
    };
    return (
        <div>
            <List onDelete={handleDelete} param={param} />
        </div>
    )
};

export default connect(({ param }) => ({ param }))(Lists);