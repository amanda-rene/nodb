import React, {Component} from 'react'
import weapon from '../data/weapon.json'


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
        const index = this.state.movies.findIndex(weapon => weapon.id === id)
        const newArr = [...this.state.weapon]
        newArr.splice(index, 1)
        this.setState({
            weapon: newArr
        })
    }

    render(){
        return(
            <div>
                
                <h1>main weapon list</h1>
               
            </div>

        )
    }
}

export default List;