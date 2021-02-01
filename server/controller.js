let id = 1

let weapon = [
    {
        "id": 0,
        "weaponName": "Eagle Bearer",
        "weaponType": "Assault Rifle",
        "imgUrl": ""
    },
    {
        "id": 1,
        "weaponName": "Bullet King",
        "weaponType": "LMG",
        "imgUrl": ""
    },
    {
        "id": 2,
        "weaponName": "Liberty",
        "weaponType": "Pistol",
        "imgUrl": ""
    },
    {
        "id": 3,
        "weaponName": "Bighorn",
        "weaponType": "Assault Rifle",
        "imgUrl": ""
    },
    {
        "id": 4,
        "weaponName": "Chatterbox",
        "weaponType": "SMG",
        "imgUrl": ""
    },
    {
        "id":5,
        "weaponName": "Lullabye",
        "weaponType": "Shotgun",
        "imgUrl": ""
    },
]


module.exports = {
    getWeapon: (req, res) => {
        res.status(200).send(weapon)
    },
    addWeapon: (req, res) => {
        const {weaponName,weaponType,imgUrl} = req.body;
        let newWeapon = {id, weaponName, weaponType, imgUrl};
        weapon.push(newWeapon);
        id++,
        res.status(200).send(weapon)
    },
    updateCart: (req, res) => {
        const {weaponName, weaponType, imgUrl} = req.body;
        const {id} = req.params;
        let index = weapon.findIndex(weapon => weapon.id === +req.params.id)
        weapon[index] = {
            id: weapon[index].id,
            weaponName: weaponName || weapon[index].weaponName,
            weaponType: weaponType || weapon[index].weaponType,
            imgUrl: imgUrl || weapon[index].imgUrl
        }
        res.status(200).send(weapon)
    },
    deleteWeapon: (req, res) => {
        const index = weapon.findIndex(weapon => weapon.id === +req.params.id)
        weapon.splice(index, 1)
        res.status(200).send(weapon)
    }
}