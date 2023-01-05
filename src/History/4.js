import React, { Component }  from "react";//not double quotes? Not this problem

class App extends Component{
    constructor(props) {//con not Con
        super(props);//don't forget + ;
        this.state = {
            isLoaded: false,
            items: [],
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())//remember()
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true,
                })
            });//add this.setState inside of {}
    }

    render() {
        var { items, isLoaded } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        }
        else{
            return(
                <div className="App">
                    <ul>
                        {items.map(item =>//to be continued
                            <li>
                                Name: {item.name} | Email: {item.email}
                            </li>
                        )}
                    </ul>
                </div>
            )
        }
    }
}

export default App;