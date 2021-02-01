import React from 'react'

function ListItem({weapon, deleteWeapon}){
    // destructured in the paramater, just need {} to make it js

    // const {movie} = props;
    // deconstructed props to save code
    return <div className= 'List-Item'>
        <img 
        alt={weapon.weaponName} 
        className = 'img' 
        src= {weapon.imgUrl} />
        <div className = 'weapon.info'>
            <p>{weapon.weaponName}</p>
            <p>{weapon.weaopnType}</p>
        </div>
        <p className='delete-button' onClick={() => deleteWeapon(weapon.id)}>
            X
            </p>
    </div>
}

export default ListItem;