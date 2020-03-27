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

	const list = [
		{
			name: '绘制默认点',
			onPress: () => {
				
			},
			onChangeText1: (text) => {
				
			},
			onChangeText2: (text) => {
				
			}
		}
	];

	return (
		<View style={{flex: 1}}>
			<GAMapView 
				style={{width: '100%', height: '50%'}}/>
			<ScrollView
				style={{flex: 1}}>
				{
					list.map((c, i) => {
						return (
							<ListItem 
								key={i}
								title={c.name}

								rightElement={
									i === 0?
										<View style={{flex: 1, flexDirection: 'column'}}>
											<Input 
												placeholder={'经度'}
												onChangeText={c.onChangeText1}/>
											<Input 
												placeholder={'纬度'}
												onChangeText={c.onChangeText2}/>
										</View>
										:
										<View>
										</View>
								}/>
						);
					})
				}
			</ScrollView>
		</View>
	)
}
