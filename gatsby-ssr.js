import React from 'react'
// import Layout from './src/components/Layout'

export function wrapPageElement({ element, props }) {
     return <div {...props }>{element}<span role="img">💩</span></div>;
}