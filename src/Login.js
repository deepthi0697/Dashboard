import React from 'react'
import axios from 'axios'

class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            users: [],
            email: '',
            isLogin: true
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            const users = response.data
            this.setState({users})
        })
        .catch((err) => {
            alert(err)
        })
    }

    handleChange = (e) => {
        const email = e.target.value
        this.setState({email})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email: this.state.email
        }
        console.log(formData)
        
        const userEmail = this.state.users.find(user => {
            return user.email === this.state.email
        })
       console.log(userEmail.id)
        
       if(userEmail){
           localStorage.setItem('isLogin', true)
           localStorage.setItem('user', userEmail)
           this.props.history.push(`/dashboard/${userEmail.id}`)
        } else {
            window.alert('invalid email or synctactical error  ')
        }
    }
    render() {
        return (
            <div>
                <h1>Login Page</h1>

                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='login'>Login</label>
                    <input type='text' id='login' value={this.state.email} onChange={this.handleChange} />

                    <input type='submit' value='Login' />
                </form>
            </div>
        )
    }
}

export default Login