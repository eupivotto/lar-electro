import {BrowserRouter, Route, Routes} from 'react-router-dom'

import { Home } from '../pages/home'
import { About } from '../pages/about'
import { Contact } from '../pages/contact'



export default function Router () {
    return (
        <BrowserRouter>
        
            
        <Routes>
   

        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
       
        
        
        

        </Routes>

        
        </BrowserRouter>
    )
}
