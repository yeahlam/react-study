import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import  style from './index.css'

class index extends Component {
    constructor(){
        super()
        this.state={
            name:'',
            password:'',
            mail:''
        }
        this.sendFn=this.sendFn.bind(this)
    }
    render () {
        const state=this.state
        return (
            <div className={style.box}>
                <div className={style.inputbox}>
                    <input onChange={this.changehandler.bind(this,'name')} value={state.name} ref={i=>this.name=i}  type="text" placeholder={"姓名"}/>
                </div>
                <div className={style.inputbox}>
                    <input onChange={this.changehandler.bind(this,'password')}  value={state.password} ref={i=>this.password=i} type="password" placeholder={"密码"}/>
                </div>
                <div className={style.inputbox}>
                    <input onChange={this.changehandler.bind(this,'mail')}  value={state.mail} ref={i=>this.mail=i}  type="mail" placeholder={"邮箱"}/>
                </div>
                <button onClick={this.sendFn} className={style.btn}>提交</button>
            </div>
        )
    }
    changehandler(item) {
        var {value}=this[item]
        console.log(value);
        this.setState({
           [item]:value
        })
    }
    sendFn(){
        console.log(this.state)
    }
}

export default index