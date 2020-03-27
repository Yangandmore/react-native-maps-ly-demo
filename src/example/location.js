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
	Input
} from 'react-native-elements'


export default ({ navigation, route }) => {
	// 修改定位模式
	const [androidLocation, setAndroidLocation] = React.useState('show');
	const [iosLocation, setIosLocation] = React.useState('none');

	// 定位
	const [location, setLocation] = React.useState(false);

	// style
	const [strokeColor, setStrokeColor] = React.useState('#00ff00');
	const [radiusFillColor, setRadiusFillColor] = React.useState('#ffff00');
	const [strokeWidth, setStrokeWidth] = React.useState(2);
	const [showAccuracyRing, setShowAccuracyRing] = React.useState(true);

	const androidLocationList = [
		{
			name: '定位一次',
			title: 'show'
		},
		{
			name: '定位一次且移动视角中心',
			title: 'locate'
		},
		{
			name: '连续定位且移动视角中心',
			title: 'follow'
		},
		{
			name: '连续定位且移动视角中心，地图旋转',
			title: 'map_rotate'
		},
		{
			name: '连续定位且移动视角中心，蓝点旋转',
			title: 'location_rotate'
		},
		{
			name: '连续定位，移动至中心，根据设备方向旋转(默认模式)',
			title: 'location_rotate_no_center'
		},
		{
			name: '连续定位，不移动至中心，根据设备方向旋转',
			title: 'follow_no_center'
		},
		{
			name: '连续定位，不移动至中心，根据方向旋转',
			title: 'map_rotate_no_center'
		}
	];

	const iosLocationList = [
		{
			name: '不跟踪',
			title: 'none'
		},
		{
			name: '追踪用户定位',
			title: 'follow'
		},
		{
			name: '追踪用户定位且跟随手机移动地图',
			title: 'follow_with_heading'
		}

	]


	// 权限
	PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION);
	return (
		<SafeAreaView style={{flex: 1, flexDirection: 'column'}}>
			<View style={{flex: 1, flexDirection: 'row'}}>
				<GAMapView 
					style={{flex: 1}}
					locationTypeIos={iosLocation}
					locationTypeAndroid={androidLocation}
					locationEnable={location}
					locationStyle={{
						strokeColor: strokeColor,
						radiusFillColor: radiusFillColor,
						strokeWidth: strokeWidth,
						showsAccuracyRing: showAccuracyRing
					}}/>
				<View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
					<Button 
						title={'定位'+location}
						containerStyle={{marginBottom: 5}}
						titleStyle={{fontSize: 10}}
						onPress={() => {
							setLocation(!location);
						}}/>
					<Input 
						label={'精度圈边线颜色:'+strokeColor}
						labelStyle={{fontSize: 10}}
						inputStyle={{fontSize: 10}}
						inputContainerStyle={{height: 16}}
						placeholder={'精度圈边线颜色'}
						onChangeText={(text) => {
							if (text.length === 7 || text.length === 9)
								setStrokeColor(text);
						}}/>
					<Input 
						label={'精度圈填充颜色:'+radiusFillColor}
						labelStyle={{fontSize: 10}}
						inputStyle={{fontSize: 10}}
						inputContainerStyle={{height: 16}}
						placeholder={'精度圈填充颜色'}
						onChangeText={(text) => {
							if (text.length === 7 || text.length === 9)
								setRadiusFillColor(text);
						}}/>
					<Input 
						label={'精度圈边线宽度:'+strokeWidth}
						labelStyle={{fontSize: 10}}
						inputStyle={{fontSize: 10}}
						inputContainerStyle={{height: 16}}
						placeholder={'精度圈边线宽度'}
						onChangeText={(text) => {
							if (text.length >= 1)
								setStrokeWidth(Number.parseInt(text));
							else
								setStrokeWidth(2);
						}}/>
					<Button 
						title={'显示精度圈'+showAccuracyRing}
						containerStyle={{marginBottom: 5}}
						titleStyle={{fontSize: 10}}
						onPress={() => {
							setShowAccuracyRing(!showAccuracyRing);
						}}/>
		</View>
			</View>
			<View style={{flex: 1, flexDirection: 'row'}}>
				<View style={{flex: 1, flexDirection: 'column'}}>
					<Text h4>IOS定位配置:{iosLocation}</Text>
					<ScrollView style={{flex: 1}}>
						{
							iosLocationList.map((c, i) => {
								return <ListItem
									key={i}
									title={c.name}
									topDivider
									bottomDivider
									onPress={() => {
										setIosLocation(c.title);
									}}/>;
							})
						}
					</ScrollView>	
				</View>
				<View style={{flex: 1, flexDirection: 'column'}}>
					<Text h4>Android定位配置:{androidLocation}</Text>
						<ScrollView style={{flex: 1}}>
							{
								androidLocationList.map((c, i) => {
									return <ListItem
									key={i}
										title={c.name}
										topDivider
										bottomDivider
										onPress={() => {
											setAndroidLocation(c.title);
										}}/>;
								})
							}
					</ScrollView>
				</View>
			</View>
		</SafeAreaView>
	);
};
