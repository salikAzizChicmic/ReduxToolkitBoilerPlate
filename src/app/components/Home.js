import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../features/counters/counterSlice'

const Home = () => {
    const count=useSelector((state)=>state.value)
    const dispatch = useDispatch()
    
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{marginVertical:10}}>{count}</Text>
        <Button onPress={()=>dispatch(increment())} title='Increment ++' />
        <Button onPress={()=>dispatch(decrement())} title='Decrement --' />
        <Button onPress={()=>dispatch(incrementByAmount(5))} title='Increment by 5' />
    </View>
  )
}

export default Home