import React from 'react';

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    // state = {  }
    render() { 
        return ( 
            <div className='ccb'>
                <h1>This is Created using Class Component</h1>
                <p className='fp'>This is done using external css</p>
                <p style={{color:'blue'}}>this is done using inline css</p>
            </div>
         );
    }
}
 


export default ClassComponent;