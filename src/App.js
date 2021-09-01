import React from 'react' 

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            people: [],
            peopleNames: []
        };
    }

    componentDidMount() {
        let url = "http://api.open-notify.org/astros.json"

        fetch(url)
        .then(response => response.json())
        .then(data => {
            this.setState({
                people: data.people
            })
        })
    }

    getNames = () => {
        if(this.state.people !== []) {
            return this.state.people.map(person => {return person.name})
        } else {
            "ain't no one in space, esse"
        }
    }

    render() {
        return (
            <h1>{this.getNames() + " " + "\n"}</h1>
        )
    }
}

export default App;