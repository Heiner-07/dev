class ServerController {
    constructor() {

    }

    register(req, res) {
        //obtener datos
        let { id, nombre, apellido } = req.body;
        console.log("Usuario registrado con éxito");
        console.table({ id, nombre, apellido });
        res.status(200).json({
            message: "Usuario registrado con éxito"
        });
    }

    update(req, res) {
        let { id, nombre, apellido } = req.body;
        console.table({ id, nombre, apellido });
        let users = [
            {id: 1, nombre: "Geremias", apellido: "Beltran"},
            {id: 2, nombre: "Isadora", apellido: "Montiel"},
            {id: 3, nombre: "Laureano", apellido: "Gomez"},
            {id: 4, nombre: "Carlos", apellido: "Castro"}               
        ]
    
        users.forEach(element => {
            if (id == element.id) {
                element.nombre = nombre;
                element.apellido = apellido;
            }
        });
    
        if (users != null) {
            res.status(200).json(users);
        } else {
            res.status(400).json({ message: "Usuario no encontrado" });
        }
    }

    getUsers(req, res) {
        let id = req.params.id;
        let users = [
            {id: 1, nombre: "Geremias", apellido: "Beltran"},
            {id: 2, nombre: "Isadora", apellido: "Montiel"},
            {id: 3, nombre: "Laureano", apellido: "Gomez"},
            {id: 4, nombre: "Carlos", apellido: "Castro"}       
        ]
        let userResp = null;
            users.forEach(element => {
                if (id == element.id) {
                    userResp = element;
                }
            });
    
            if (userResp != null) {
                res.status(200).json(userResp);
            } else {
                res.status(400).json({ message: "Usuario no encontrado" });
            }
        }

    getUsers(req, res) {
        let id = req.params.id;
        person.findById(id, (error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

    /*    getAllUsers(req, res) {
            res.status(200).json(users);
        }*/

    getAllUsers(req, res) {
        person.find((error, data) => {
            if (error) {
                res.status(500).send();
            } else {
                res.status(200).json(data);
            }
        })
    }

}

exports.default = ServerController;