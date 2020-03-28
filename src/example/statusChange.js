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

	const [data, setData] = React.useState('设置显示:\n');

	return (
		<View style={{flex: 1, flexDirection: 'column'}}
		>
			<GAMapView style={{width: '100%', height: '90%'}} 
				onStatusChange={(d) => {
					const { nativeEvent: data } = d;
					console.log(data);
				}}
				onStatusChangeComplete={(d) => {
					const { nativeEvent: data } = d;
					console.log(data);
				}}/>
			<ScrollView
				style={{flex: 1}}>
				<Text h5>{data}</Text>
			</ScrollView>
		</View>
	)
}
