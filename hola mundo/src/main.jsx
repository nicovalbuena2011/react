import React from 'react'
import  ReactDOM  from 'react-dom/client'
import { App } from './HelloWorldApp'
import './styles.css'
import { CounterApp } from './CounterApp'


ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <App title='hola, soy una prop' subTitle={123}/> */}
        <CounterApp value={2} />
    </React.StrictMode>
)