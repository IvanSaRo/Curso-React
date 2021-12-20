import React from 'react'
import { HeroList } from '../heroes/HeroList'

export default function MarvelScreen() {
    return (
        <div>
            <h1>Marvel screen</h1>
        <hr/>
            <HeroList publisher="Marvel Comics" className="mt-4"/>
        </div>
    )
}
