import React, { useEffect, useState } from 'react'
import Router from './router/Router'
import publicRoutes from './router/routes/publicRoute'
import { getRoutes } from './router/routes'
import { useDispatch, useSelector } from 'react-redux'
import { get_user_info } from './store/Reducers/authReducer'
import { get_category } from './store/Reducers/homeReducer'

function App ()  {

  const dispatch = useDispatch()
  const {token} = useSelector(state => state.auth)
  const [allRoutes, setAllRoutes] = useState([...publicRoutes])
  useEffect(()=>{
    const routes = getRoutes()
    setAllRoutes([...allRoutes,routes])

  },[])
  useEffect(()=>{
    if(token){
      console.log(token)
      dispatch(get_user_info({accessToken: token}))
    }
  },[token])
  useEffect(() => {
    dispatch(get_category())
},[])
  return <Router allRoutes = {allRoutes}/>
}

export default App
