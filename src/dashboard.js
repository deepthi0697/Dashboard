import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

class Dashboard extends React.Component {
    constructor(){
        super()
        this.state = {
            user: {},
            posts:[]
        }
    }
    componentDidMount(){
        const id = this.props.match.params.id
        
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => {
            const user = response.data
            this.setState({user})
        })
        .catch((err) => {
            alert(err)
        })

        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response) => {
            const posts = response.data
            this.setState({posts}) 
        })
        .catch((err) => {
            alert(err)
        })

    }
    render(){
        return (
            <div>
                <h1>Dashboard</h1>  <Link to='/'>Logout</Link>
                <h3>Name: {this.state.user.name}</h3>
                <h3>Email: {this.state.user.email}</h3>
                <h3>Phone: {this.state.user.phone}</h3>
                <h2>Company Details</h2>
                <h3>Company name:{Object.keys(this.state.user).length === 0 ? '' : this.state.user.company.name}</h3>
                <h3>Company catchphrase:{Object.keys(this.state.user).length === 0 ? '' : this.state.user.company.catchPhrase}</h3>

                <hr></hr>

                {this.state.posts.map(post => {
                    return (
                        <div>
                            <h4>Post title: {post.title}</h4>
                            <h5>{post.body}</h5>
                            <hr></hr>
                        </div>
                    )
                })}





               
            </div>
        )
    }
}

export default Dashboard