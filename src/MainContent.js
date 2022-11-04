import React from 'react'
import { ThemeContextConsumer } from './ThemeContext'

export default function MainContent() {
  return (
    <ThemeContextConsumer>
        {
            (context)=>(
                <div className={`content ${context.theme}`}>
                    <h1> Welcome to my React Context API App .... </h1>
                    <p>Use context api to share dta between components.</p>
                </div>
            )
        }
    </ThemeContextConsumer>
  )
}
