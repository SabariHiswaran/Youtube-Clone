
import { Provider } from 'react-redux';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './Components/Body';
import Header from './Components/Header';
import store from './Utils/store';
import Videos from './Components/Videos';
import WatchPage from './Components/WatchPage';

const appRouter = createBrowserRouter([{
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
   }
]
}])


function App() {
   
  return (
     <Provider store={store}>

        <Header/>
        <RouterProvider router = {appRouter}/>
        
     </Provider>
  );
}



export default App;
