import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import BlogTitle from "./pages/BlogTitles/BlogTitle"
import Community from "./pages/Community/Community"
import Dashboard from "./pages/Dashboard/Dashboard"
import GenerateImages from "./pages/GenerateImages/GenerateImages"
import Layout from "./pages/Layout/Layout"
import RemoveBackground from "./pages/RemoveBackground/RemoveBackground"
import WriteArticle from "./pages/WriteArticle/WriteArticle"
import RemoveObject from "./pages/RemoveObject/RemoveObject"
import ReviewResume from "./pages/ReviewResume/ReviewResume"

const App:React.FC = () => {
  return (

    <Routes>
    <Route path="/" element={<Home/>}></Route>
     <Route path="/ai" element={<Layout/>}>
    <Route index element={<Dashboard/>}/>
    <Route path="blog-titles" element={<BlogTitle/>}/>
    <Route path="community" element={<Community/>}/>
    <Route path="generate-images" element={<GenerateImages/>}/>
    <Route path="remove-background" element={<RemoveBackground/>}/>
    <Route path="write-article" element={<WriteArticle/>}/>
    <Route path="remove-object" element={<RemoveObject/>}/>
    <Route path="review-resume" element={<ReviewResume/>}/>
    
    </Route>

    </Routes>
   
  )
}

export default App