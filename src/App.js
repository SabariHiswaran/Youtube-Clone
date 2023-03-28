
import { Provider } from 'react-redux';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import store from './Utils/store';
import Videos from './Components/Videos';
// import WatchPage from './Components/WatchPage';
// import SearchResults from './Components/SearchResults';
import { lazy, Suspense } from 'react';

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
               <Suspense fallback={<div className='w-[120px] h-[120px] border border-4 border-black border-x-0 rounded-[50%] animate-spin'></div>}>
               <WatchPage/>
               </Suspense>
               )
            },
            {
               path: '/results',
               element:
               (
                  <Suspense fallback={<h1> Loading... </h1>}>
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

        {/* <Header/> */}
        <RouterProvider router = {appRouter}/>
        
     </Provider>
  );
}



export default App;
