import React from 'react'
// import Layout from './src/components/Layout'

export function wrapPageElement({ element, props }) {
     return <div {...props }>{element}<span role="img" alt="vulcan salute emoji, smiling kitty emoji and pirate flag emoji">🖖😺🏴‍☠️</span></div>;
}