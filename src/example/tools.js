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

	const [selectIndex, setSelectIndex] = React.useState(0);

	const [zoomControls, setZoomControls] = React.useState(true);
	const [compass, setCompass] = React.useState(true);
	const [locationBtn, setLocationBtn] = React.useState(true);
	const [scale, setScale] = React.useState(true);

	const list = [
		'指南针',
		'缩放按钮',
		'定位按钮',
		'比例尺',
	];

	const buttonsClick = (index) => {
		switch (index) {
			case 0:
				setCompass(!compass);
				break;
			case 1:
				setZoomControls(!zoomControls);
				break;
			case 2:
				setLocationBtn(!locationBtn);
				break;
			case 3:
				setScale(!scale);
				break;
			default:
				
		}
	}

	return (
		<View style={{flex: 1}}>
			<GAMapView 
				style={{width: '90%', height: '80%'}}
				showsZoomControls={zoomControls}
				showsCompass={compass}
				showsLocationButton={locationBtn}
				showsScale={scale}
				/>
			<View style={{flex: 1}}>
				<ButtonGroup
					onPress={buttonsClick}
					buttons={list}
					selectIndex={selectIndex}/>
			</View>
		</View>
	)
}
