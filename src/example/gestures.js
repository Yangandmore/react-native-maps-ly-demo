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
	const [zoom, setZoom] = React.useState(true);
	const [scroll, setScroll] = React.useState(true);
	const [rotate, setRotate] = React.useState(true);
	const [tilt, setTilt] = React.useState(true);

	const list = [
		'是否缩放',
		'是否滑动',
		'是否旋转',
		'是否倾斜'
	];

	const buttonsClick = (index) => {
		switch (index) {
			case 0:
				setZoom(!zoom);
				break;
			case 1:
				setScroll(!scroll);
				break;
			case 2:
				setRotate(!rotate);
				break;
			case 3:
				setTilt(!tilt);
				break;

			default:
				
		}
	};

	return (
		<View style={{flex: 1}}>
			<GAMapView 
				style={{width: '100%', height: '90%'}}
				zoomEnabled={zoom}
				scrollEnabled={scroll}
				rotateEnabled={rotate}
				tiltEnabled={tilt}/>
			<View style={{flex: 1}}>
				<ButtonGroup
					onPress={buttonsClick}
					buttons={list}
					selectIndex={selectIndex}/>
			</View>
		</View>
	)
}
