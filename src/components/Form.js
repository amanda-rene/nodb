
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
            <form onSubmit={e => this.handleAdd(e)} classname='Form'>
                <input value={this.state.weaponName} onChange={e => this.handleChange(e)} name='weaponName' placeholder='Weapon Name' />
                <input calue={this.state.weaponType} onChange={e => this.handleChange(e)} name='weaponType' placeholder='Weapon Type'/>
                <input value={this.state.imgUrl} onChange={e => this.handleChange(e)} name= "imgUrl" placeholder='Image Url'/>
                <button type='submit'>Add Weapon</button>
            </form>

        )
    }
}

export default Form;