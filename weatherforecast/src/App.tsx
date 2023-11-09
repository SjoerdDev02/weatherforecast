import { Routes, Route, BrowserRouter, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./assets/pages/home/Home";
import Forecast from "./assets/pages/forecast/Forecast";
import Settings from "./assets/pages/preferences/Preferences";
import Login from "./assets/pages/login/Login";
import Register from "./assets/pages/register/Register";
import NotFound from "./assets/pages/notfound/NotFound";
import { UserType } from "./assets/types/UserType";
import { RootStateType } from "./assets/types/RootStateType";

const ProtectedRoute = ({ user }: { user: UserType }) => {
    if (Object.keys(user).length === 0) {
        return <Navigate to='/' replace />;
    }

    return <Outlet />;
};

function App() {
    const user = useSelector((state: RootStateType) => state.user);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route element={<ProtectedRoute user={user} />}>
                        <Route path='/forecast' element={<Forecast />} />
                        <Route path='/settings' element={<Settings />} />
                    </Route>
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;