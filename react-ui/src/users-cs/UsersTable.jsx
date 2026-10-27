import { useState } from "react"
import users from "../data/users"

function UsersTable() {
    const [usersList, setUsersList] = useState([...users])
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [city, setCity] = useState("")
    const [website, setWebsite] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [selectedId, setSelectedId] = useState("")
    const [onAdd, setOnAdd] = useState(false)

    // GET : reload the list from the data file
    const getUsers = () => {
        setUsersList([...users])
        setSelectedId("")
    }

    // DELETE : drop the selected row
    const onDelete = () => {
        if (selectedId === "") {
            console.log("No row selected")
            return
        }
        setUsersList([...usersList.filter(u => u.id !== selectedId)])
        setSelectedId("")
    }

    // ADD : build the object the way the data file is shaped
    const addUser = () => {
        let userObj = {
            'id': Math.ceil((Math.random() * 10000)),
            'name': name,
            'username': username,
            'address': { 'city': city },   // Tip : city lives in u.address.city
            'website': website,
            'company': { 'name': companyName }
        }
        console.log(userObj)
        setUsersList([userObj, ...usersList])
        setSelectedId("")
    }

    // EDIT : load the selected row into the form
    const onEdit = () => {
        let user = usersList.find(u => u.id === selectedId)
        if (user === undefined) {
            console.log("No row selected")
            return
        }
        setId(user.id)
        setName(user.name)
        setUsername(user.username)
        setCity(user.address.city)          // Tip : city lives in u.address.city
        setWebsite(user.website)
        setCompanyName(user.company.name)   // company name is nested too
        setOnAdd(false)
    }

    const editUser = () => {
        let temp = [...usersList]
        // remove the old value from the array
        temp = temp.filter(u => u.id !== id)
        // add the new value
        let newObj = {
            'id': id,
            'name': name,
            'username': username,
            'address': { 'city': city },
            'website': website,
            'company': { 'name': companyName }
        }
        setUsersList([newObj, ...temp])
    }

    const resetForm = () => {
        setId("")
        setName("")
        setUsername("")
        setCity("")
        setWebsite("")
        setCompanyName("")
    }

    return (
        <div>
            <div className="card mt-2">
                <div className="card-header">
                    <button className="btn btn-primary" onClick={() => {
                        resetForm()
                        setOnAdd(true)
                    }} data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                    >ADD</button>&nbsp; &nbsp;
                    <button className="btn btn-secondary" onClick={() => getUsers()}>GET</button>&nbsp; &nbsp;
                    <button className="btn btn-warning" onClick={() => onDelete()}>DELETE</button>&nbsp; &nbsp;
                    <button className="btn btn-info" onClick={() => onEdit()} data-bs-toggle="modal" data-bs-target="#staticBackdrop">EDIT</button>
                </div>
                <div className="card-body">
                    <div className="card-title">
                        <h4>Users List</h4>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Sr</th>
                                <th scope="col">Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">City</th>
                                <th scope="col">Website</th>
                                <th scope="col">Company Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                usersList.map((u, index) => (
                                    <tr key={u.id} onClick={() => setSelectedId(u.id)}
                                        className={selectedId === u.id ? "table-active" : ""}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{u.name}</td>
                                        <td>{u.username}</td>
                                        <td>{u.address.city}</td>
                                        <td>{u.website}</td>
                                        <td>{u.company.name}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    <div>
                        GET / ADD / DELETE / EDIT
                    </div>
                    <div className="mt-2">
                        Tip:-
                        <br />
                        city: u.address.city
                    </div>
                </div>
            </div>

            {/* Modal / Dialog */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">{onAdd ? "Add User" : "Edit User"}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <div>
                                <label>Name</label>
                                <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                                    className="form-control" required="required" />
                            </div>
                            <div>
                                <label>Username</label>
                                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}
                                    className="form-control" required="required" />
                            </div>
                            <div>
                                <label>City</label>
                                <input type="text" value={city} onChange={(e) => setCity(e.target.value)}
                                    className="form-control" required="required" />
                            </div>
                            <div>
                                <label>Website</label>
                                <input type="text" value={website} onChange={(e) => setWebsite(e.target.value)}
                                    className="form-control" required="required" />
                            </div>
                            <div>
                                <label>Company Name</label>
                                <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)}
                                    className="form-control" required="required" />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            {
                                onAdd ?
                                    <button type="button" className="btn btn-primary" onClick={() => addUser()} data-bs-dismiss="modal">Add</button>
                                    :
                                    <button type="button" className="btn btn-info" onClick={() => editUser()} data-bs-dismiss="modal">Edit</button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UsersTable
