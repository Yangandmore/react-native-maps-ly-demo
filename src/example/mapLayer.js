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
	const [showIndoor, setShowIndoor] = React.useState(false);
	const [showBuilding, setShowBuilding] = React.useState(false);
	const [showLabels, setShowLabels] = React.useState(false);
	const [showTraffic, setShowTraffic] = React.useState(false);



	const list = [
			'室内地图',
			'3D建筑',
			'文本标签',
			'路况',
	];

	const buttonsClick = (index) => {
		switch (index) {
			case 0:
				setShowIndoor(!showIndoor);
				break;
			case 1:
				setShowBuilding(!showBuilding);
				break;
			case 2:
				setShowLabels(!showLabels);
				break;
			case 3:
				setShowTraffic(!showTraffic);
				break;

			default:
				
		}

		return ;
	};

	return (
		<View style={{flex: 1}}>
			<GAMapView
				style={{width: '100%', height: '80%'}}
				showsIndoorMap={showIndoor}
				showsBuildings={showBuilding}
				showsLabels={showLabels}
				showsTraffic={showTraffic}
				/>
			<View style={{flex: 1}}>
				<ButtonGroup 
					onPress={buttonsClick}
					selectIndex={selectIndex}
					buttons={list}/>
			</View>
		</View>
	)
}
