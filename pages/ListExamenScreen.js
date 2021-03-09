import * as React from 'react';
import ViewPager from '@react-native-community/viewpager';
import  {useState, useEffect} from 'react';

import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  LogBox

} from 'react-native';

import ListPracticeExamFragment from '../pages/fragments/fragmentsListExamen/ListPracticeExamFragment';
import ListTheoreticExamFragment from './fragments/fragmentsListExamen/ListTheoreticExamFragment';
LogBox.ignoreAllLogs(); 

const ListExamenScreen = () => {
  
  const [index, setIndex] = useState(1);

  const RenderElement = () => {
    if (index === 1) {
      return <ListPracticeExamFragment />;
    } else  {
      return <ListTheoreticExamFragment />;
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => setIndex(1)}>
          <Text style={{color: '#ffffff'}}>إمتحانات نظرية</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => setIndex(2)}>
          <Text style={{color: '#ffffff'}}>إمتحانات قيادة</Text>
        </TouchableOpacity>
     
      </View>
    

      <View style={{backgroundColor: '#ffffff'}}>
        <RenderElement />
      </View>
    </View>
  </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraphStyle: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonStyle: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#808080',
    padding: 10,
    margin: 2,
  },
});
export default ListExamenScreen;