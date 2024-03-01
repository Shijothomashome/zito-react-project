// class based component
import React from "react";


class About extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ceo: 'shijo',
            age: 25
        }
    }
    componentDidMount(){
        this.setState({ // updating state variables, as a result render will work again
            age: 26
        })
    }
    render() {
        const {ceo, age} = this.state

        return(
            <div>
                <h1>About section</h1>
                <h2>Our CEO: {ceo}</h2>
                <h2>Our CEO's age: {age}</h2>
            </div>
        )
    }
}
export default About;