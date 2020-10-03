import React from 'react';
import './card.styles.css';
/**
 *     <img alt='monster' src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`}/>
        <img alt='monster' src={`https://images.unsplash.com/photo-1572453020814-972b244074d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80`}/>
 *       
 */
export const Card = props=>(
    <div className='card-container'>

        <h2>{props.monsters.name}</h2>
        <p>{props.monsters.email}</p>
    </div>
)