import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";

export default function Profile(props) {
    let history = useHistory();

    const toDetailsPage = (user) => {
        history.push({
            pathname:`/details/${user.id}`,
            data: user //Not required
            // Using this 'data' we can display in next page, but on refresh it won't be available
        })
    }

    return (
        <div className="profile">
            <h1 className="prof-title txt-center p-3 mt-0">User Profiles</h1>
            <div className="holder">
                {props.userData.length > 0 ?
                    props.userData.map(user=>
                        <div key={user.id} className="single" onClick={()=>toDetailsPage(user)}>
                            <div>
                                <img src={user.avatar} alt={user.first_name} />
                            </div>
                            <div className="p-1 title-name">
                                {user.first_name}
                            </div>
                            <div className="more">
                                <div>First Name</div>
                                <div>{user.first_name}</div>
                                <div>Last Name</div>
                                <div>{user.last_name}</div>
                                <div>Email</div>
                                <div>{user.email}</div>
                            </div>
                        </div>    
                    )
                :
                null
                }
            </div>
        </div>
    )
}