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
	const [zoomLevel, setZoomLevel] = React.useState(3);
	const [centerCoordinates, setCenterCoordinates] = React.useState({
		latitude: 0,
		longitude: 0
	});
	const [rotation, setRotation] = React.useState(0);
	const [tilt, setTilt] = React.useState(0);

	const list = [
		{
			name: '滑动等级',
			onChangeText: (text) => {
				setZoomLevel(Number.parseFloat(text));
			}
		},
		{
			name: '滑动中心',
			onChangeText: (text) => {
				if (text.split(',').length === 2 && text.split(',')[1] !== '') {
					var arr = text.split(',');
					setCenterCoordinates({
						latitude: Number.parseFloat(arr[0]),
						longitude: Number.parseFloat(arr[1])
					});
				}
			}
		},
		{
			name: '旋转方向',
			onChangeText: (text) => {
				setRotation(Number.parseFloat(text));
			}
		},
		{
			name: '倾斜角度',
			onChangeText: (text) => {
				setTilt(Number.parseFloat(text));
			}
		}
	]

	return (
		<View style={{flex: 1, flexDirection: 'column'}}>
			<GAMapView 
				style={{width: '100%', height: '50%'}}
				zoomLevel={zoomLevel}
				centerCoordinates={centerCoordinates}
				rotation={rotation}
				tilt={tilt}/>
			<ScrollView style={{flex: 1}}>
				{
					list.map((c, i) => {
						return (
							<ListItem 
								key={i}
								title={c.name}
								rightElement={
									i === 1 ?
										<View style={{flex: 1}}>
											<Input 
												placeholder={'纬度,经度'}
												onChangeText={(text) => {
													c.onChangeText(text);
												}}/>
										</View> :
										<View style={{flex: 1}}>
											<Input 
												placeholder={c.name}
												onChangeText={(text) => {
													c.onChangeText(text);
												}}/>
										</View>
								}
								onPress={c.click}/>
						);
					})
				}
			</ScrollView>
		</View>
	)
}
