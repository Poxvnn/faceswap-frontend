import './App.css'
import {  QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'

const queryClient = new QueryClient()

function App() {

  const location = useLocation();

  return (
    <QueryClientProvider client={queryClient}>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />}/>
      </Routes>
      <ToastContainer />
    </QueryClientProvider>
  )
}

export default App

const ToastContainer: React.FC = () => {
	return (
		<Toaster
			position="top-center"
			toastOptions={{
				style: {
					maxWidth: "1000px",
				},
			}}
		/>
	);
};

