import React from 'react';
import {
	View,
	PermissionsAndroid,
	ScrollView,
	SafeAreaView
} from 'react-native';
import { GAMapView } from 'react-native-maps-ly';
import { 
	ListItem,
	Text,
	Button,
	Input,
	ButtonGroup
} from 'react-native-elements'

export default ({ navigation, route }) => {

	const [data, setData] = React.useState('点击显示\n');

	return (
		<View style={{flex: 1}}>
			<GAMapView 
				style={{width: '100%', height: '70%'}}
				locationEnable={true}
				locationTypeAndroid={'follow'}
				locationTypeIos={'follow'}
				onPress={(d) => {
					const { nativeEvent: { latitude, longitude } } = d;
					setData(data+'onPress:'+latitude+'-'+longitude+'\n');
				}}
				onLongPress={(d) => {
					const { nativeEvent: { latitude, longitude } } = d;
					setData(data+'onLongPress:'+latitude+'-'+longitude+'\n');
				}}
				onLocation={(d) => {
					const { nativeEvent } = d;
					console.log(nativeEvent);
				}}
				/>
			<ScrollView style={{flex:1, backgroundColor: '#000'}}>
				<Text h4 style={{color: '#fff'}}>{data}</Text>
			</ScrollView>
		</View>
	)
}
