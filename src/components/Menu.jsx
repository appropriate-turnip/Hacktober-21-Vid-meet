import React,{useContext} from 'react'
import {SocketContext} from '../Context'
const Menu = () => {
    // Passing data from contextApi
    const {data1 ,data2} = useContext(SocketContext)
    return (
        <div className="menu__sidemenu">
            Menu Goes Here ....
            
        </div>
    )
}

export default Menu
