import React from 'react'

function ListItem({weapon, deleteWeapon}){
  
    return <div className= 'List-Item'>
        <img 
        alt={weapon.weaponName} 
        className = 'img' 
        src= {weapon.imgUrl} />
        <div className = 'weapon.info'>
            <p>{weapon.weaponName}</p>
            <p>{weapon.weaponType}</p>
        </div>
        <p className='delete-button' onClick={() => deleteWeapon(weapon.id)}>
            Delete
            </p>
            {/* <div className="side1"></div>
        <div className="side2"></div> */}
    </div>
}

export default ListItem;