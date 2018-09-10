import React from 'react';
import {connect} from 'dva';
import Menu from '../components/Menus';


const Menu2 = ({dispatch, menu}) => {
    function handleClick(e) {
        console.log(e.key);
        dispatch({type:`menu/send`, payload: e.key})
    }
    return (
        <Menu menu = {menu} onClick={handleClick}/>
    )
};

export default connect(({menu}) => ({menu}))(Menu2);