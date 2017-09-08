import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import PCIndex from './components/pc_index';
import MediaQuery from 'react-responsive';

import MobileHeader from './components/mobile_index';


export default class Root extends React.Component{
  render(){
    return (
        <div>
            <MediaQuery query='(min-device-width : 1224px)'>
                <PCIndex/>


            </MediaQuery>
            <MediaQuery query='(max-device-width : 1224px)'>
                <MobileHeader/>


            </MediaQuery>


        </div>
    );
  };
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
