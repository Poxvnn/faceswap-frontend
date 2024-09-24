import './App.css'
import {  QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'

const queryClient = new QueryClient()

function App() {

  const location = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />}/>
      </Routes>
    </QueryClientProvider>
  )
}

export default App
