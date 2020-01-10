import React, {Component} from 'react';
import { Spring } from 'react-spring/renderprops';

class Component2 extends Component {
    render() {
        return (
            <Spring
                from={{ opacity: 0 }}
                to={{ opacity:1 }}
                config={{delay: 1000, duration: 1000}}
            >
                {props => (
                    <div style={props}>
                        <div style={c2style}>
                            <h1>Component2</h1>
                            <p>Excepteur nostrud reprehenderit commodo
                                aute ex enim excepteur culpa elit magna 
                                culpa sunt excepteur. Deserunt laboris 
                                proident elit consequat et ea velit dolor.
                                Ex ullamco magna veniam laboris sit eiusmod 
                                hy id eu reprehenderit nulla excepteur anim.
                                Duis nostrud reprehenderit est mollit non 
                                do mollit non amet deserunt ipsum ad. Veniam 
                                est reprehenderit proident ullamco quis nostrud 
                                non nostrud in laboris proident do in elit. 
                                Aliqua ut in aliqua ea non veniam eiusmod 
                                commodo voluptate occaecat.
                                Sunt minim voluptate duis nulla pariatur. 
                                Veniam duis sint anim sint et sint ipsum occaecat. 
                                Irure proident ad amet aliqua adipisicing enim consectetur 
                                consectetur id Lorem veniam minim. Ex ut officia minim irure 
                                culpa elit tempor. Irure aliqua non nostrud incididunt ipsum 
                                esse est. Mollit id fugiat sint aliqua nulla exercitation cillum 
                                pariatur sint velit id ullamco ex adipisicing.
                            </p>
                            <button style={btn} onClick={this.props.toggle}>Toggle Component 3</button>
                        </div>
                    </div>
                )}
            </Spring>
            
        )
    }
}

const c2style = {
    background: 'slateblue',
    color: 'white',
    padding: '1.5rem'
}

const btn = {
    background: '#333',
    color: '#fff',
    padding: '1rem 2rem',
    border: 'none',
    textTransform: 'uppercase',
    margin: '15px 0'
}

export default Component2;