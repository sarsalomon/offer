import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { NOTFOUNDED_ROUTE } from '../utils/consts';
import { Context } from '..';

const AppRouter = () => {
    const {user} = useContext(Context)
    let accessRouter;
    console.log(user)
    if (user.isAuth) {
        accessRouter = authRoutes.map(({path,Component})=>
                <Route key={path} path={path} component={Component} exact/>  
        )
    }else{
        accessRouter = publicRoutes.map(({path,Component})=>
        <Route key={path} path={path} component={Component} exact/>
        )
    }
    return (
        <Switch>
            {accessRouter}
            <Redirect to={NOTFOUNDED_ROUTE}/>
        </Switch>
    );
};

export default AppRouter;