import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import DcScreen from '../components/DC/DcScreen';
import HeroScreen from '../components/heroes/HeroScreen';
import MarvelScreen from '../components/Marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';

export default function DashBoardRoutes() {
    return (
        <>
           <Navbar />
           <div className="container mt-2">
               <Switch>
                   <Route exact path="/marvel" component={MarvelScreen} />
                   <Route exact path="/hero/:heroeId" component={HeroScreen} />
                   <Route exact path="/dc" component={DcScreen} />
                   <Route exact path="/search" component={SearchScreen} />

                   <Redirect to="/marvel" />
               </Switch>
           </div> 
        </>
    )
}
