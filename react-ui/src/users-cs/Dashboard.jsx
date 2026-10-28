import UsersTable from "./UsersTable"

function UsersDashboard(){
    return (
        <div className="container-fluid">
            <div className="row">
                {/** col 1 - the tall side panel */}
                <div className="col-md-2">
                    <div className="card mt-2">
                        <div className="card-header">
                            Users Case Study
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item">GET</li>
                                <li className="list-group-item">ADD</li>
                                <li className="list-group-item">DELETE</li>
                                <li className="list-group-item">EDIT</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/** col 2 - the users table (Navbar now lives in App above the Routes) */}
                <div className="col-md-10">
                    <div className="row">
                        <div className="col-md-12">
                            <UsersTable />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UsersDashboard
