import { useEffect, useState } from 'react'
import Router from './router/Router'
import publicRoutes from './router/routes/publicRoute'
import { getRoutes } from './router/routes'
import { useDispatch, useSelector } from 'react-redux'
import { get_user_info } from './store/Reducers/authReducer'
import { get_category } from './store/Reducers/homeReducer'
import { get_from_wishlist } from './store/Reducers/wishlistReducer'
import toast from 'react-hot-toast'

function App ()  {

  // const url = `https://litlink-frontend.onrender.com/`; // Replace with your Render URL
  // const interval = 30000; // Interval in milliseconds (30 seconds)

  // function reloadWebsite() {
  //   axios.get(url)
  //     .then(response => {
  //       console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
  //     })
  //     .catch(error => {
  //       console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
  //     });
  // }


  // setInterval(reloadWebsite, interval);


  const dispatch = useDispatch()
  const {token,userInfo} = useSelector(state => state.auth)
  const [allRoutes, setAllRoutes] = useState([...publicRoutes])
  useEffect(()=>{
    const routes = getRoutes()
    setAllRoutes([...allRoutes,routes])
  },[])
  useEffect(()=>{
    if(token){
      dispatch(get_user_info({
        accessToken: token,
        action: "desperate"
      }))
    }
  },[token])
  useEffect(() => {
    dispatch(get_category())
    dispatch(get_from_wishlist(userInfo?._id))
    
  },[])
  
  return <Router allRoutes = {allRoutes}/>
}

export default App
