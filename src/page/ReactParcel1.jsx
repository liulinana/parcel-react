import React from 'react';
import { Input, Button } from 'antd';
export default class ReactParcel1 extends React.Component {
    render(){
        return(
            <div>
                姓名：<Input/>
                <Button
                    type="primary"
                    onClick={()=>this.props.history.push("/ReactParcel2")}
                >
                    详细信息
                </Button>
            </div>
        )

    }
}