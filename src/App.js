
import React, { Component } from 'react'
import { Form } from "./Components/Form";
import List from "./Components/List";

export default class App extends Component {
  state ={
    courses : [
      {name: "Html"},
      {name:"Css"},
      {name:"Javascrippt"},
      {name: "React"},

    ],
    current: ''
  }

  updateCourse = (e) => {
    this.setState({current:e.target.value})
  }


  addCourse = (e) => {
   e.preventDefault();
    let current = this.state.current
    let courses = this.state.courses
    courses.push({name:current})
    this.setState({courses,
    current:""})
    
  }

  deleteCourse = (index) => {
   let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({
      courses
    }) 
    
  }


  editCourse = (index, value) => {
    let courses = this.state.courses;
    let course = courses[index];
    course["name"] = value;
    this.setState({courses});
  }
  
  
  render() {
    const {courses} = this.state;
    const list = courses.map((course, index) => {
      return <List  details = {course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse}/>
    })

    return (
      <section className='App'>
        <h2>Add course</h2>
        <Form addCourse={this.addCourse} updateCourse={this.updateCourse} current={this.state.current}/>
        <ul>{list}</ul>
      </section>
    )
  }
}

