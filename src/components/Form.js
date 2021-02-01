
import React, {Component} from 'react'

class Form extends Component{
    constructor(){
        super();
        this.state={
            weaponName: '',
            weaponType: '',
            imgUrl: ''
        }
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAdd(e){
        e.preventDefault()
        this.props.addWeapon(this.state.weaponName, this.state.weaponType, this.state.imgUrl)
        this.setState({
            weaponName: '',
            weaponType: '',
            imgUrl: ''
        })
    }

    render(){
        return(
            <div></div>
        )
    }
}

export default Form;