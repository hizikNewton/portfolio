import React from 'react'
import {HeroComp,About,Resume,Contact, Portfolio} from '../components'

export const HomePage = () => {
    return (
        <>
        <HeroComp/>
        <About/>
        <Resume/>
        <Portfolio/>
        <Contact/>
    </>
    )
}
