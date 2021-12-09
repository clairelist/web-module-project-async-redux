import React from 'react';
import Dog from './Dog';

const DogForm=(props)=>{
    const {doggos} = props;
    return(
        <div className='dog-form'>{
            doggos.map(dog=>{
                return(<Dog dog={dog}/>)
            })
            }</div>
    );
}

export default DogForm;