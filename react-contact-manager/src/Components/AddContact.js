import React from 'react'

class AddContact extends React.Component{
    state = {
        name: "",
        email:""
    }

    add = (e) => {
        e.preventDefault(); // prevents the page from getting refreshed
        if (this.state.name === "" || this.state.email === ""){   // if name or email is empty
            alert("All the fields are Mandatory")
            return;
        }
        this.props.addContactHandler(this.state)
        this.setState ({name: "", email:""})
    }
    render() {
        return(
            <div className="ui main">
                <h2>Add Contact</h2>
                <form action="" className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label> Name</label>
                        <input 
                        type="text" 
                        name="name"
                        placeholder="Name" 
                        value={this.state.name}
                        onChange= { (e) => this.setState({name: e.target.value})} 
                        />
                    </div>
                    <div className="field">
                        <label> Email</label>
                        <input 
                        type="text" 
                        name="email"
                        placeholder="Email" 
                        value={this.state.email}
                        onChange= { (e) => this.setState({email: e.target.value})}
                        />
                    </div>
                    <button className = "ui button blue" > Add Contact </button>
                </form>
            </div>
        );
}

}

export default AddContact;
