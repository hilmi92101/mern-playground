import { 
    Landing, Dashboard, Register, Error, 
    TTest, TDynamicValues, TInlineStyle, TClickEvent
} from './pages'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Dashboard /> }></Route>
                <Route path='/register' element={ <Register /> }></Route>
                <Route path='/landing' element={ <Landing /> }></Route>

                <Route path='/tutorials/test' element={ <TTest /> }></Route>
                <Route path='/tutorials/dynamic-value' element={ <TDynamicValues /> }></Route>
                <Route path='/tutorials/inline-style' element={ <TInlineStyle /> }></Route>
                <Route path='/tutorials/click-event' element={ <TClickEvent /> }></Route>

                <Route path='*' element={ <Error /> }></Route>
            </Routes>
            
        </BrowserRouter>
    );
}

export default App;
