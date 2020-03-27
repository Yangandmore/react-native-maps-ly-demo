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
	const [centerLat, setCenterLat] = React.useState({});
	const [regionLat, setRegionLat] = React.useState({});
	const [limitRegionLat, setLimitRegionLat] = React.useState({});

	const list = [
		{
			name: '中心点位',
			click: () => {

			},
			onChangeText1: (text) => {
				setCenterLat({
					latitude: text,
					longitude: centerLat.longitude
				});
			},
			onChangeText2: (text) => {
				setCenterLat({
					latitude: centerLat.latitude,
					longitude: text
				});
			}
		},
		{
			name: '区域',
			click: () => {
				mapRefs.current.setRegion({
						centerLatitude: Number.parseFloat(centerLat.latitude),
						centerLongitude: Number.parseFloat(centerLat.longitude),
						spanLatitude: Number.parseFloat(regionLat.latitude),
						spanLongitude: Number.parseFloat(regionLat.longitude)
				});
			},
			onChangeText1: (text) => {
				setRegionLat({
					latitude: text,
					longitude: regionLat.longitude
				});
			},
			onChangeText2: (text) => {
				setRegionLat({
					latitude: regionLat.latitude,
					longitude: text
				});
			}
		},
		{
			name: '限制区域',
			click: () => {
				mapRefs.current.setLimitRegion({
						centerLatitude: Number.parseFloat(centerLat.latitude),
						centerLongitude: Number.parseFloat(centerLat.longitude),
						spanLatitude: Number.parseFloat(regionLat.latitude),
						spanLongitude: Number.parseFloat(regionLat.longitude)
				});
			},
			onChangeText1: (text) => {
				setLimitRegionLat({
					latitude: text,
					longitude: limitRegionLat.longitude
				});
			},
			onChangeText2: (text) => {
				setLimitRegionLat({
					latitude: limitRegionLat.latitude,
					longitude: text
				});
			}
		}
	];

	return (
		<View style={{flex: 1}}>
			<GAMapView 
				ref={mapRefs}
				style={{width: '100%', height: '50%'}}
				/>
			<ScrollView style={{width: '100%', height: '50%'}}>
				{
					list.map((c, i) => {
						return <ListItem 
							key={i}
							title={c.name}
							onPress={c.click}
							rightElement={
								<View style={{flex: 1, flexDirection: 'column'}}>
									<Input 
										style={{flex: 1}}
										placeholder={'经度'}
										onChangeText={(text) => {
											c.onChangeText1(text);
										}}/>
									<Input
										style={{flex: 1}}
										placeholder={'纬度'}
										onChangeText={(text) => {
											c.onChangeText2(text);
										}}/>
								</View>
							}/>;
					})
				}	
			</ScrollView>
		</View>
	)
}
