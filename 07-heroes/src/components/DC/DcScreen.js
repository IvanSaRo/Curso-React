import React from 'react'
import { HeroList } from '../heroes/HeroList'

export default function DcScreen() {
    return (
        <div>
            <h1>DC screen</h1>
        <hr/>
            <HeroList publisher="DC Comics" className="mt-4"/>

        </div>
    )
}
