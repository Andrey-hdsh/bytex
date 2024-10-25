import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from 'page/Home/HomePage';
import AboutPage from 'page/About/AboutPage';
import PresentationPage from 'page/Presentation/PresentationPage';
import BlogPage from 'page/Blog/BlogPage';
import QuestionsPage from 'page/Question/QuestionsPage';
import ErrorPage from 'page/Page404/Errorpage';


export const App = () => {
  return (
 <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/presentation" element={<PresentationPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="/question" element={<QuestionsPage />} />
        <Route path='*' element={ <ErrorPage/>} />
      </Route>
    </Routes>
  );
};
