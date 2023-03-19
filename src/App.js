
import { Provider } from 'react-redux';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import store from './Utils/store';
import Videos from './Components/Videos';
import WatchPage from './Components/WatchPage';
import SearchResults from './Components/SearchResults';

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
               element:<WatchPage/>
            },
            {
               path: '/results',
               element:<SearchResults/>
            }
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
