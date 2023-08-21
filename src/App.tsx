import { Routes, Route } from "react-router-dom"
import './App.css'
import Layout from "./components/Layout"
import ProductPage from "./components/ProductPage"
import Products from "./components/Products"
import Home from "./components/HomePage"
import './fierbase'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductPage />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
