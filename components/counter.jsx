import React, { Component } from 'react';

class Counter extends Component {
    state = { //any data the element needs
        count: 0,
        tags: ['tag1','tag2','tag3']
    }

    styles = {
        fontSize: 15,
        fontWeight: 'bold'
    }; //define property 

    render() { 

        return ( <div>
            <span className= {this.getBadgeClasses()}>{this.formatCount()}</span> 
            <button className='btn btn-secondary btn-sm'>Increment</button>
            <ul>
                {this.state.tags.map (tag => <li key = {tag}>{ tag }</li>)}
            </ul>
            </div> //jsx expression  //ctrl+d multicursor //m-3=> margin, // sm=> small
    )}; //instead of using another div, you can use React.Fragment //mention property here 

    getBadgeClasses() {
        let classes = 'badge m-2 badge-';
        classes += (this.state.count === 0) ? 'warning' : 'primary';
        return classes;
    }

    formatCount() { //create a function 
        const {count} = this.state;
        return count === 0 ? 'Zero' : count;
    }
};
 
export default Counter;