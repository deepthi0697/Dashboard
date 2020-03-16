import React from 'react'

function Logout(){
    return (
        <div>
            {localStorage.clear() }
        </div>
    )
}
export default Logout