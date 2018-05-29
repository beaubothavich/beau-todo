import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import TodoDashboardPage from '../components/TodoDashboardPage';
import AddTodo from '../components/AddTodo';
import EditTodo from '../components/EditTodo';
import NotFound from '../components/NotFound';

const AppRouter = () => (
    <BrowserRouter>
     <div>
     <Header/>
     <Switch>
     <Route path="/" component={TodoDashboardPage} exact/>
     <Route path="/add" component={AddTodo}/>
     <Route path="/edit/:id" component={EditTodo}/>
     <Route component={NotFound}/>
     </Switch>
     </div> 
    </BrowserRouter>
);


export default AppRouter;