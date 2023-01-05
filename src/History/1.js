import React, { Component } from 'react';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
        itmes : [],
        isLoaded : false,
        }
    }

    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({//this.setState
                    isLoaded: true,
                    items : json,
                })
            }); 
    }

    render () {
        var {items, isLoaded} = this.state;
        if (!isLoaded){
            return(<div>Loading...</div>)
        }
        else{
            return(
                <div className='App'>
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                Name: {item.name} | Email: {item.email}
                            </li>
                        ))}
                    </ul>
                </div>
            )
        }
    }
}
export default App;