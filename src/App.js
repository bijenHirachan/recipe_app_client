import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CreateRecipe from './components/CreateRecipe';
import Recipes from './components/Recipes';
import MyRecipes from './components/MyRecipes';
import Login from './components/Login';
import Register from './components/Register';
import { useDispatch, useSelector } from 'react-redux';
import { myProfile } from './redux/actions/userActions';
import { ProtectedRoute } from 'protected-route-react';
import Profile from './components/Profile';
import ChangePassword from './components/ChangePassword';
import UpdateProfile from './components/UpdateProfile';
import Recipe from './components/Recipe';
import { loadCategories } from './redux/actions/recipeActions';
import Categories from './components/Categories';
import RecipeDetails from './components/RecipeDetails';
import Loading from './components/Loading';
import toast, { Toaster } from 'react-hot-toast';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import NotFound from './components/NotFound';
import Dashboard from './components/Dashboard';

function App() {
  const { loading, error, message, isAuthenticated, user } = useSelector(
    state => state.user
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(myProfile());
    dispatch(loadCategories());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  return (
    <>
      <Toaster />
      {loading ? (
        <Loading />
      ) : (
        <Router textAlign="center" fontSize="xl">
          <Header isAuthenticated={isAuthenticated} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<Recipe />} />
            <Route path="/recipedetails/:id" element={<RecipeDetails />} />
            <Route
              path="/myrecipes"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <MyRecipes />
                </ProtectedRoute>
              }
            />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/resetpassword/:token" element={<ResetPassword />} />
            <Route
              path="/createrecipe"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <CreateRecipe />
                </ProtectedRoute>
              }
            />
            <Route
              path="/changepassword"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ChangePassword />
                </ProtectedRoute>
              }
            />
            <Route
              path="/updateprofile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <UpdateProfile user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/categories"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Categories />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/login"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect={'/profile'}
                >
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route
              path="/register"
              element={
                <ProtectedRoute isAuthenticated={!isAuthenticated}>
                  <Register />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
