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

	return (
		<View style={{flex: 1}}>
			<GAMapView 
				ref={mapRefs}
				style={{width: '100%', height: '70%'}}
				onAnimateOver={(d) => {
					const { nativeEvent: data } = d;
					console.log(data);
				}}
				/>
			<View style={{flex: 1}}>
				<Button 
					title={'跳转'}
					onPress={() => {
						mapRefs.current.setAnimateTo({
							tilt: 45,
							rotation:90,
							zoomLevel: 18,
							coordinate: {
								latitude: 39.97837,
								longitude: 116.31363
							}
						}, 1000)
					}}
					/>
			</View>
		</View>
	)
}
