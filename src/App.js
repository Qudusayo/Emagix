import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import Navbar from './components/navbar/Navbar'
import Form from './components/form/Form'
import Card from './components/card/Card'
import Footer from './components/footer/Footer'


// https://pixabay.com/api/?key=16097612-e7f02a0499406eaf623d54368&q=yellow+flowers&image_type=photo

class App extends Component {
  constructor(){
    super();
    this.state = {
      hits: [

      ]
    }

    this.apiKey = '16097612-e7f02a0499406eaf623d54368'
  }

  parseData = async(e) => {
    e.preventDefault();

    const q = e.target.elements.search.value
    console.log(q)
    
    const api_call = await fetch(`https://pixabay.com/api/?key=${this.apiKey}&q=${q}&image_type=photo`);
    const response = await api_call.json();
    console.log(response)
    console.log(response.hits)
    this.setState({hits: response.hits})
    console.log(this.state.hits)
  }


  render() {
    return (
      <div>
        <Navbar />
        <Form submitted={this.parseData}/>
        <div className="container pb-4 row m-auto">
        {this.state.hits.length > 0?
            this.state.hits.map(card => {;
              return <Card
                      image = {card.webformatURL}
                      downloads = {card.downloads}
                      favourites = {card.favorites}
                      preview = {card.webformatURL}
                      likes = {card.likes}
                      views = {card.views}
                    />
            
            })
          : 
          <div className="container">
            <div className="jumbotron mt-3 text-center">
              <h1>WELCOME TO EMAGIX</h1>
              <p className="lead">Kindly search for an Image in the search box above</p>
              <b>POWERED BY </b><img src="https://pixabay.com/static/img/logo.svg" alt="pixaby" width="15%" height="5%"/>
            </div>
          </div>
          }
        </div>
        <Footer />
      </div>
    )
  }
}

export default App