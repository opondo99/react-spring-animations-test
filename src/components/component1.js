import React from 'react';
import { Spring } from 'react-spring/renderprops';

const Component1 = () => {
    return (
        <Spring
            from={{ opacity:0, marginTop: -500}}
            to={{ opacity:1, marginTop:0}}
        >
            {props => (
                <div style={props}>
<div style={c1style}>
                    <h1>Component1</h1>
                    <p>Aliquip tempor proident do cupidatat nostrud cillum ut enim fugiat excepteur 
                        anim. Et incididunt minim occaecat id nulla in fugiat minim est. Ex minim 
                        aute culpa excepteur quis ut non. Tempor ad ut ipsum sunt proident incididunt
                        incididunt incididunt duis officia.
                        Adipisicing proident consectetur quis eiusmod fugiat laborum consequat 
                        voluptate qui sunt et ipsum irure. Ex nulla fugiat sunt reprehenderit est non 
                        id ex aute exercitation. Fugiat ut amet laborum eu est nulla labore. Officia
                        Lorem occaecat eu eiusmod anim Lorem esse nostrud pariatur pariatur labore 
                        occaecat veniam excepteur.
                    </p>
                    <Spring
                        from={{ number:0 }}
                        to={{ number:10 }}
                        config={{ duration: 10000 }}
                    >
                        {props => (
                            <div style={props}>
                                <h1 style={counter}>
                                    { props.number.toFixed() }
                                </h1>
                            </div>
                        )}

                    </Spring>
                </div>
                </div>
                
            )}
            
        </Spring>
        
    )
};

const c1style = {
    background: 'steelblue',
    color: 'white',
    padding: '1.5rem'
}

const counter = {
    background: '#333',
    textAlign: 'center',
    width: '100px',
    borderRadius: '50%',
    margin: '1rem auto'
}

export default Component1;