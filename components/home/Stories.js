import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import {USERS} from '../../data/users'


const Stories = () => {
    return (
  
            <View>
             <Text style={{color: 'white'}}>STORIES</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
            >
            
            {USERS.map((user) => <Text style={{color: 'white', margin: 2}}>{user.name}</Text>)}
          
            </ScrollView>
            
             
        </View>
  
  
    )
}

export default Stories
