import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Homepage from './Pages/Homepage/Homepage';
import Catalog from './Pages/Catalog/Catalog';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route index path="/" element={<Homepage />} />
                    <Route path="/catalog" element={<Catalog />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
