import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import React from 'react';
import SidebarRow from './SidebarRow';
import PeopleIcon from '@material-ui/icons/People';
import HomeIcon from '@material-ui/icons/Home';
import WifiTetheringIcon from '@material-ui/icons/WifiTethering';


function Sidebar() {
    return (
        <div className = 'sidebar'>
            <SidebarRow src = 'https://scontent-ort2-2.xx.fbcdn.net/v/t1.6435-9/151381910_1741607279321964_929627821801517808_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=Rmm_gH_wCCwAX9NfoGT&_nc_ht=scontent-ort2-2.xx&oh=17c724371a0cce5cc7ee147841edff22&oe=60D7A99F' title = 'Oscar'/>
            <SidebarRow Icon = {HomeIcon} title = 'Home' />
            <SidebarRow Icon = {PeopleIcon} title = 'Friends' />
            <SidebarRow Icon = {WifiTetheringIcon} title = 'Online' />
            <SidebarRow Icon = {ExpandMoreOutlined} title = 'More' />
            
        </div>
    )
}

export default Sidebar
