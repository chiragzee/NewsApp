import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter , Routes, Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  pageSize = 15;
  state = {
    progress:0,
  }

  setProgress = (progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        {/* <NavBar/>
        <News setProgress={this.setProgress}  setProgress={this.setProgress} pageSize={5} country="in" category="science"/> */}
        <BrowserRouter>
          <NavBar />
          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />

          <Routes>
            <Route exact path="/" element=
            {  <News setProgress={this.setProgress}  
                //setProgress={this.setProgress}
                category="general"
                key="general"
                pageSize={this.pageSize}
                country="in"
                
              />} />
        
            <Route exact path="/business" element=
              {<News setProgress={this.setProgress}  
                //setProgress={this.setProgress}
                category="business"
                key="business"
                pageSize={this.pageSize}
                country="in"
             
              />} />
        
            <Route exact path="/entertainment" element=
             { <News setProgress={this.setProgress}  
                //setProgress={this.setProgress}
                category="entertainment"
                key="entertainment"
                pageSize={this.pageSize}
                country="in"
              
              />} />
           
            <Route exact path="/general" element=
           {   <News setProgress={this.setProgress}  
                //setProgress={this.setProgress}
                category="general"
                key="general"
                pageSize={this.pageSize}
                country="in"
              
              />} />
          
            <Route exact path="/health" element =
           {   <News setProgress={this.setProgress}  
                //setProgress={this.setProgress}
                category="health"
                key="health"
                pageSize={this.pageSize}
                country="in"
              />}/>
         
            <Route exact path="/science" element=
           {   <News setProgress={this.setProgress}  
                //setProgress={this.setProgress}
                category="science"
                key="science"
                pageSize={this.pageSize}
                country="in"
               
              />} />
           
            <Route exact path="/sports" element=
           {   <News setProgress={this.setProgress}  
                //setProgress={this.setProgress}
                category="sports"
                key="sports"
                pageSize={this.pageSize}
                country="in"
             
              />} />
            
            <Route exact path="/technology" element=
            {  <News setProgress={this.setProgress}  
                //setProgress={this.setProgress}
                category="technology"
                key="technology"
                pageSize={this.pageSize}
                country="in"
             
              />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}