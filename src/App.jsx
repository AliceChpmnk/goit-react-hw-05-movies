import Header from "components/Header/Header";
import Loader from "components/Loader/Loader";
import React, { lazy, Suspense } from "react";
import { Route, Routes, } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const Movies = lazy(() => import("./pages/Movies"));
const MoviePage = lazy(() => import("./pages/MoviePage"));
const Cast = lazy(() => import("./components/Cast/Cast"));
const Reviews = lazy(() => import("./components/Reviews/Reviews"));

export const App = () => {
  return (
      <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Header />} >
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MoviePage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      </Suspense>
  );
};
