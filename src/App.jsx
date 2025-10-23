import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import Homepage from './pages/Homepage/Homepage'
import MoviePage from './pages/MovieDetail/MoviePage'
import MovieDetailPage from './pages/Movies/MovieDetailPage'
import NotFoundPage from './pages/NotFoundPage/NotFountPage'
import './App.css'
//홈페이지 /
//영화 전체페이지(서치) /movies
//영화 상세페이지 /movies/:id

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:id" element={<MovieDetailPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
