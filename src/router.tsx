import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PostsPage } from './pages/Posts'
import { PostPage } from './pages/Post'

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/posts" />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:postId" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  )
}
