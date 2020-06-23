import React from 'react'

export default function Details(props) {
    // console.log(props.userData, 'a');
    
    return (
        <div className="details">
            <h1 className="prof-title txt-center p-3 mt-0">User Details</h1>
            <div className="u-det-cont">
                {props.userData.map(user=>
                    user.id == props.match.params.id ?
                    <div key={user.id} className="u-det">
                        <div>
                            <img src={user.avatar} alt={user.first_name}/>
                        </div>
                        <div className="det-more">
                            <div>Id</div>
                            <div>: &nbsp;{`user-${user.id}`}</div>
                            <div>First Name</div>
                            <div>: &nbsp;{user.first_name}</div>
                            <div>Last Name</div>
                            <div>: &nbsp;{user.last_name}</div>
                            <div>Email</div>
                            <div>: &nbsp;{user.email}</div>
                        </div>
                    </div>
                    :null
                )}
            </div>
        </div>
    )
}
