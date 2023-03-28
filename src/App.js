
import { Provider } from 'react-redux';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import store from './Utils/store';
import Videos from './Components/Videos';
import { lazy, Suspense } from 'react';
import Spinner from './Components/Spinner';

const WatchPage = lazy(() => import ('./Components/WatchPage'))
const SearchResults = lazy(() => import ("./Components/SearchResults"))

const appRouter = createBrowserRouter([
   {
      path:"/",
      element:<Header/>,
      children:[
         {
            path :"/",
            element:<Body/>,
            children : [
               {
               path:"/",
               element: <Videos />
            },
            {
               path : "/watch",
               element:(
               <Suspense fallback={<Spinner/>}>
               <WatchPage/>
               </Suspense>
               )
            },
            {
               path: '/results',
               element:
               (
                  <Suspense fallback={<Spinner/>}>
                  <SearchResults/>
                  </Suspense>
               )}
         ]
         }
      ]
   },
   
 ])


function App() {
   
  return (
     <Provider store={store}>

        <RouterProvider router = {appRouter}/>
        
     </Provider>
  );
}



export default App;
