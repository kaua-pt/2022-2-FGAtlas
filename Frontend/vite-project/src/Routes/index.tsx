import { BrowserRouter, Routes, Route } from "react-router-dom"
import { FgAtlasProvider } from "../Contexts"

import HomePage from "../Pages/HomePage"
import Map from "../Pages/Map"
import MapBuilding from "../Pages/MapBuilding"
import Subjects from "../Pages/Subjects"

export default function Router() {
    return(
        <BrowserRouter>
            <FgAtlasProvider>
                <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/map" element={<Map />}/>
                    <Route path='/map-buildings' element={<MapBuilding />} />
                    <Route path="/subjects" element={<Subjects />}/>
                </Routes>
            </FgAtlasProvider>
        </BrowserRouter>
	)
}