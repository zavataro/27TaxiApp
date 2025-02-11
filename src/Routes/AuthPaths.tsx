import ErrorPage1 from "../Components/Pages/Others/ErrorPage/ErrorPage1";
import ErrorPage2 from "../Components/Pages/Others/ErrorPage/ErrorPage2";
import ErrorPage3 from "../Components/Pages/Others/ErrorPage/ErrorPage3";
import ErrorPage4 from "../Components/Pages/Others/ErrorPage/ErrorPage4";

export const authRoutes = [
    // Error Pages
    { path: `${import.meta.env.PUBLIC_URL}/others/error_page_400`, element: <ErrorPage1 /> },
    { path: `${import.meta.env.PUBLIC_URL}/others/error_page_401`, element: <ErrorPage2 /> },
    { path: `${import.meta.env.PUBLIC_URL}/others/error_page_403`, element: <ErrorPage3 /> },
    { path: `${import.meta.env.PUBLIC_URL}/others/error_page_404`, element: <ErrorPage4 /> },
   
]