import React, {Component} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import '../Sider/index.css'

class Index extends Component {

    state={
        modalVisible:false
    }

    modalToggle=()=>{
        this.setState({
            modalVisible:!this.state.modalVisible
        })
    }

    submitForm=(event)=>{
        event.preventDefault()
        let FirstName = event.target[0].value;
        let LastName = event.target[1].value;
        let PhoneNumber = event.target[2].value;
        this.props.addUser(FirstName,LastName,PhoneNumber);
        this.modalToggle()
    }

    userClicked=(user)=>{
        this.props.selectUser(user)
    }
    render() {
        const {users,selectedUser} = this.props
        const {modalVisible} = this.state
        return (
            <div className={'mt-3 sider'}>
                <button style={{backgroundColor:'#242F3D'}} className={'btn btn-block w-100 text-white '} onClick={this.modalToggle}>Add user </button>

                <hr/>

                <ul  className={'list-group'}>
                    {
                        users.map((item,index)=>(<li onClick={()=>this.userClicked(item)} style={{backgroundColor:'#17212B'}} className={`user list-group-item text-white m-1 ${selectedUser.id === item.id ? 'active1':''}`}>{item.FirstName+' ' + item.LastName}</li>))
                    }

                </ul>

                <Modal isOpen={modalVisible} toggle={this.modalToggle}>
                    <ModalHeader toggle={this.modalToggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <form onSubmit={this.submitForm} id={'addUser'}>
                            FirstName<input className={'form-control'} type={'text'}/>
                            LastName<input className={'form-control'} type={'text'}/>
                            PhoneNumber<input className={'form-control'} type={'text'}/>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" form={'addUser'}>Save</Button>
                        <Button color="secondary" onClick={this.modalToggle}>Close</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Index;