import React, {Component} from 'react';
import './index.css'
class Index extends Component {

    state={
        inputValue:''
    }

    changeMessageInput=(event)=>{
        this.setState({
            inputValue:event.target.value
        })
    }

    sendMessage=()=>{
        let from = 3
        let to = this.props.selectedUser.id
        let text = this.state.inputValue
        this.props.sendMessage(from,to,text)
        this.setState({
            inputValue:''
        })
    }

    render() {
        const {selectedUser,history} = this.props
        const {inputValue} = this.state
        return (
            <div>
                {
                    selectedUser ?
                        <div className={'content'}>
                            <div className={'row'}>
                                <div className={'col-md-10 content-header'}>
                                    <h3 className={'mt-2'}>{selectedUser.FirstName+' '+selectedUser.LastName}</h3>
                                </div>
                                <div className={'col-md-2 content-header'}><p className={'mt-3'}>{selectedUser.PhoneNumber}</p></div>
                            </div>





                            <div className={'row'} style={{height:'552px'}}>
                                <div className={'col-md-12'}>
                                {
                                    history.map((item,index)=><div className={'row'}>
                                        <div className={`message col-md-7 ${item.to === 3 ? 'offset-5':''}`}>
                                            <p className={'text'}>{item.text} <span className={'date'}>{item.date}</span></p>

                                        </div>
                                    </div>)
                                }
                                </div>
                            </div>






                            <div className={'row'}>
                                <div className={'col-md-12'}>
                                    <div className={'row'}>
                                        <div className={'col-md-11'}>
                                            <input style={{width:'100%',height:'50px',display:'flex',backgroundColor:'#242F3D',outline:'none',color:'white'}} placeholder={'Write a message...'}
                                                   value={inputValue} onChange={this.changeMessageInput}/>
                                        </div>
                                        <div className={'col-md-1'}>
                                            <button onClick={this.sendMessage} className={'btn btn-success'}>Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>:
                        <div></div>
                }
            </div>
        );
    }
}

export default Index;