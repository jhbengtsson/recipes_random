import React, { useContext, useEffect, useState } from 'react';
import './custom.css';
import RecipePage from './pages/RecipePage';
import Logo from './components/Logo';
import { IRecipe } from './models/Recipe';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RecipeDetailsPage from './pages/RecipeDetailsPage';
import LoginPage from './pages/LoginPage';
import AuthContext from './authContext';

function App() {
    const [authenticated, setAuthenticated] = useState<boolean>(false);

    return (
        <div className="page-container">
            <AuthContext.Provider value={{authenticated, setAuthenticated}}>
                <BrowserRouter>
                    <Routes>
                        {authenticated ? (
                            <Route path="/" element={<Logo />}>
                                <Route path="recipe/" element={<RecipePage />}/>
                                <Route path="recipe/:id" element={<RecipeDetailsPage/>}/>
                            </Route>
                        ) : (
                            <Route path="/*" element={<LoginPage/>} />
                        )}
                    </Routes>
                </BrowserRouter>
            </AuthContext.Provider>
        </div>
    );
}

export default App;
