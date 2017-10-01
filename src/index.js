import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './components/App';
import PostDetail from './components/PostDetail';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import mainReducer from './reducers/main_reducer'
import './index.css';
import { Grid } from 'react-bootstrap';

const logger = store => next => action => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    mainReducer,
    composeEnhancers(
        // applyMiddleware(logger, thunk)
        applyMiddleware(thunk)
    )
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
        <div>
        <Grid>
            <Switch>
                <Route path="/:category/:id" component={PostDetail}></Route>
                <Route path="/:category" component={App}></Route>
                <Route exact path="/" component={App}></Route>
            </Switch>
            </Grid>
      </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

registerServiceWorker();