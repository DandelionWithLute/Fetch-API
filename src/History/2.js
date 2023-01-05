import React, { Component } from 'react';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoaded: false,
            items: [],
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true,
                })
            });
    }

    render () {
        var { items, isLoaded} = this.state;
        if(!isLoaded) {
            return(<div>Loading...</div>)
        }
        else{//Don't add{} after .map()'s left ( 
            return (
                <div className='App'>
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                Name: {item.name} | Email: {item.email}
                            </li>
                        ))};
                    </ul>
                </div>
            )
        }
    }
}
export default App;
//https://www.youtube.com/watch?v=hzLDsxPGctY