import React  from 'react'
import FetchDisplay from './FetchDisplay';


 class DogIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            img: ''
        }
    }

    componentDidMount() {
        console.log('Component mounted!');
        console.log(this.state.img)
        fetch('https://random.dog/woof.json')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    img: data.url
                })
                console.log(this.state.img)
            })
    }

     refreshPage(e) {
        window.location.reload(true)
        e.preventDefault()
    }


    render() {
        return (
            <div>
                <h1>Random Dog Photo</h1>
                <button onClick={this.refreshPage} onChange={(e) => this.refreshPage(e.target.value)}>Click Me to get new image</button>
                <FetchDisplay url={this.state.img} />
            </div>
        )
    }
}

export default DogIndex