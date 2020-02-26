import React, { Component } from 'react'

class Test extends Component {
  state = {
    title: '',
    id: '',
    userId: '',
    completed: ''
  }


  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => this.setState({
        title: data.title,
        body: data.body,
      })
      );
  }

  // UNSAFE_componentWillMount() {
  //   console.log('componentWillMount...');
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate...');
  // }

  // UNSAFE_componentWillUpdate() {
  //   console.log('componentWillUpdate...');
  // }

  // UNSAFE_componentWillReceiveProps(nextProps, nextState){
  //   console.log('componentWillReceiveProps...');
  // }

  // static getDerivedStateFromProps(nextProps, prevState){
  //   return {
  //     test: 'something'
  //   };
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState){
  //   console.log('getSnapshotBeforeUpdate...');
  // }

  render() {
    const { title, body,} = this.state;
    return (
      <div>
        <h1>Test Component</h1>
        <h1>Test title: {title}</h1>
        <p>Test body: {body}</p>
      </div>
    )
  }
}

export default Test;
