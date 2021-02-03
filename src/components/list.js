import React, {Component} from 'react'
import weapon from '../data/weapon.json'
import ListItem from './ListItem'
import Form from './Form'

class List extends Component{
    constructor(){
        super()
        this.state={
            weapon: weapon
        }
        this.addWeapon = this.addWeapon.bind(this)
        this.deleteWeapon = this.deleteWeapon.bind(this)
    }

    addWeapon(weaponName, weaponType, imgUrl){
        const {weapon} = this.state
        const id = weapon[weapon.length -1].id + 1
        const newWeapon = {id, weaponName, weaponType, imgUrl}
        this.setState({
            weapon: [...this.state.weapon, newWeapon]
        })
    }

    deleteWeapon(id){
        const index = this.state.weapon.findIndex(weapon => weapon.id === id)
        const newArr = [...this.state.weapon]
        newArr.splice(index, 1)
        this.setState({
            weapon: newArr
        })
    }

    render(){
        const weaponMap = this.state.weapon.map(weapon => {
            return <ListItem key={weapon.id} weapon={weapon} deleteWeapon={this.deleteWeapon}/>
        })
        return(
            <div className='list'>
                
                {/* <h1>Build Your Loadout!!</h1> */}
                <Form addWeapon={this.addWeapon}/>
                
               {weaponMap}
               
            </div>

        )
    }
}

export default List;