import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, width } from 'react-native';
import {Bars3Icon, MagnifyingGlassIcon, StarIcon

} from 'react-native-heroicons/solid'


export default function App() {
  return (
    <View style={{flexDirection:'column', flex:1, backgroundColor:'white' }}>

      

<View style={{flexDirection:'row', justifyContent:'flex-start', paddingTop:40, marginLeft:20, width:190,}}>
        <Bars3Icon size={25} color='black'/>
        <Text style={{fontSize:20, alignSelf:'center',fontWeight:'800',marginRight:40, marginLeft:20, paddingBottom:10}}>Primary</Text>
        <View style={{flexDirection:'row', marginRight:100,marginLeft:100,}}>
        <MagnifyingGlassIcon size={20} color='black'/>
</View>

      </View>
      
      <ScrollView>

<View style={{marginTop:30, marginBottom:30,width:400, height:1, backgroundColor:'gray'}}></View>


<View style={{flexDirection:'row', justifyContent:'flex-start', paddingLeft:10}}>
<View style={{height:70, width:70, backgroundColor:'blue', borderRadius:100, justifyContent:'center'}}> 
</View>
<View style={{flexDirection:'column', paddingLeft:10, width:190}}>
  <Text style={{fontSize:20, fontWeight:'400'}}>LATOKEN</Text>
  <Text style={{color:'black', width:200,}}>Weekly News October27, 2022 Read in Browser...</Text>
  <StarIcon size={20} color='gray'/>
</View>
<View style={{width:100, flexDirection:'row', marginRight:40}}>
<Text style={{fontSize:14, marginEnd:6}}>Oct 28</Text>

</View>


</View>




<View style={{marginTop:20, marginBottom:20, width:400, height:1, backgroundColor:'gray', justifyContent:'flex-end'}}></View>






<View style={{flexDirection:'row', justifyContent:'flex-start', paddingLeft:10}}>

<View style={{height:70, width:70, backgroundColor:'blue', borderRadius:100, justifyContent:'center'}}> 
</View>
<View style={{flexDirection:'column', paddingLeft:10, width:190}}>
  <Text style={{fontSize:20, fontWeight:'400'}}>LATOKEN</Text>
  <Text style={{color:'black', width:200,}}>Weekly News October27, 2022 Read in Browser...</Text>
  <StarIcon size={20} color='gray'/>
</View>


<View style={{width:100, flexDirection:'row', marginRight:40}}>

<Text style={{fontSize:14, marginEnd:6}}>Oct 28</Text>

</View>


</View>


<View style={{marginTop:20, marginBottom:20, width:400, height:1, backgroundColor:'gray', justifyContent:'flex-end'}}></View>
    


<View style={{flexDirection:'row', justifyContent:'flex-start', paddingLeft:10}}>

<View style={{height:70, width:70, backgroundColor:'blue', borderRadius:100, justifyContent:'center'}}> 
</View>
<View style={{flexDirection:'column', paddingLeft:10, width:190}}>
  <Text style={{fontSize:20, fontWeight:'400'}}>LATOKEN</Text>
  <Text style={{color:'black', width:200,}}>Weekly News October27, 2022 Read in Browser...</Text>
  <StarIcon size={20} color='gray'/>
</View>


<View style={{width:100, flexDirection:'row', marginRight:40}}>

<Text style={{fontSize:14, marginEnd:6}}>Oct 28</Text>

</View>


</View>


<View style={{marginTop:20, marginBottom:20, width:400, height:1, backgroundColor:'gray', justifyContent:'flex-end'}}></View>



 <View style={{flexDirection:'row', justifyContent:'flex-start', paddingLeft:10}}>

<View style={{height:70, width:70, backgroundColor:'blue', borderRadius:100, justifyContent:'center'}}> 
</View>
<View style={{flexDirection:'column', paddingLeft:10, width:190}}>
  <Text style={{fontSize:20, fontWeight:'400'}}>LATOKEN</Text>
  <Text style={{color:'black', width:200,}}>Weekly News October27, 2022 Read in Browser...</Text>
  <StarIcon size={20} color='gray'/>
</View>

<View style={{width:100, flexDirection:'row', marginRight:40}}>

<Text style={{fontSize:14, marginEnd:6}}>Oct 28</Text>

</View>

</View>


<View style={{marginTop:20, marginBottom:20, width:400, height:1, backgroundColor:'gray', justifyContent:'flex-end'}}></View>
  

<View style={{flexDirection:'row', justifyContent:'flex-start', paddingLeft:10}}>
  <View style={{height:70, width:70, backgroundColor:'blue', borderRadius:100, justifyContent:'center'}}> 
  <Text  style={{color:'white', fontSize:40, textAlign:'center', fontWeight:'bold'}}>L</Text>
</View>

<View style={{flexDirection:'column', paddingLeft:10, width:190}}>
  <Text style={{fontSize:20, fontWeight:'400'}}>LATOKEN</Text>
  <View style={{flexDirection:'row'}}>
  <Text style={{color:'black', width:200,}}>Weekly News October27, 2022 Read in Browser...</Text>
  <StarIcon size={20} color='gray' style={{marginTop: 25}}/>
  </View>
</View>
 
<View style={{flexDirection:'row'}}>
   <Text style={{fontSize:14}}>Oct 28</Text>
</View>


</View>


<View style={{marginTop:20, marginBottom:20, width:400, height:1, backgroundColor:'gray', justifyContent:'flex-end'}}></View>
    
</ScrollView>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
