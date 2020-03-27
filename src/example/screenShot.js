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
	
	const mapRefs = React.useRef();

	PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);

	return (
		<View style={{flex: 1}}
			>
			<GAMapView
				ref={mapRefs}
				style={{width: '100%', height: '90%'}}
				onMapScreenShot={(data) => {
					console.log(data);
				}}/>
			<View style={{flex: 1}}>
				<Button 
					title={'截图'}
					onPress={() => {
						mapRefs.current.setScreenShot();
					}}/>
			</View>
		</View>
	)
}
