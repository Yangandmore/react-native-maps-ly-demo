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

	const gamapViewRefs = React.useRef();
	const [language, setLanguage] = React.useState('');

	return (
		<View style={{flex: 1}}>
			<GAMapView
				ref={gamapViewRefs}
				style={{width: '100%', height: '90%'}}/>
			<View style={{flex: 1, flexDirection: 'row'}}>
				<Input 
					containerStyle={{width: 150}}
					placeholder={'语言:zh_cn'}
					onChangeText={(text) => {
						setLanguage(text);
					}}/>
				<Button 
					title={'切换语言'}
					onPress={() => {
						gamapViewRefs.current.setMapLanguage(language);
					}}/>
			</View>
		</View>
	)
}
