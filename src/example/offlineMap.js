import React from 'react';
import {
	View,
	PermissionsAndroid,
	ScrollView,
	SafeAreaView
} from 'react-native';
import { GAMapView, GAOfflineMapModule } from 'react-native-maps-ly';
import { 
	ListItem,
	Text,
	Button,
	Input,
	ButtonGroup,
	Overlay
} from 'react-native-elements'

const overlayData = [];
export default ({ navigation, route }) => {

	const [data, setData] = React.useState('-----> 开始\n');
	const [showOverlay, setShowOverLay] = React.useState(false);
	const [provinceName, setProvinceName] = React.useState('');

	const list = [
		{
			name: '打开本地离线地图',
			click: () => {
				GAOfflineMapModule.openDownloadUI();
			}
		},
		{
			name: '下载省数据',
			click: () => {
				GAOfflineMapModule.getProvince()
					.then((d) => {
						overlayData.length = 0;
						let i = 0;
						while	(i < d.length) {
							overlayData.push(d[i]);
							i++;
						}
						setShowOverLay(true);
						setData(data+'下载省数据\n')
					});
			}
		},
		{
			name: '获取全市数据',
			click: () => {
				GAOfflineMapModule.getAllCity()
					.then((d) => {
						overlayData.length = 0;
						let i = 0;
						while	(i < d.length) {
							overlayData.push(d[i]);
							i++;
						}
						setShowOverLay(true);
						setData(data+'获取全市数据\n');
					});
			}
		},
		{
			name: '指定省数据',
			click: () => {
				GAOfflineMapModule.getCity(provinceName)
					.then((d) => {
						overlayData.length = 0;
						let i = 0;
						while	(i < d.length) {
							overlayData.push(d[i]);
							i++;
						}
						setShowOverLay(true);
						setData(data+'获取指定数据\n');
					});
			}
		},
		{
			name: ''
		}
	];

	var a1 = GAOfflineMapModule.addDownloadListener((datas) => {
		console.log(data);
	});
	var a2 = GAOfflineMapModule.addRemoveListener((datas) => {
		console.log(data);
	});
	var a3 = GAOfflineMapModule.addUpdateListener((datas) => {
		console.log(data);
	});
	/*
	GAOfflineMapModule.removeListener(a1, a2, a3);
	*/
	
	return (
		<View style={{flex: 1, flexDiraction: 'column'}}>
			<ScrollView style={{flex: 1}}>
				{
					list.map((c, i) => {
						return <ListItem
							key={i}
							title={c.name}
							rightElement={
								i === 3 ? 
									<View style={{flex: 1, flexDiraction: 'row'}}>
										<Input 
											placeholder={'省名称'}
											onChangeText={(text) => {
												setProvinceName(text);
											}}/>	
									</View>
								:
									<View>
									</View>
							}
							onPress={c.click}/>;
					})
				}
			</ScrollView>
			<ScrollView style={{flex: 1, backgroundColor: '#000'}}>
				<Text h3 style={{color: 'white'}}>
					{data}
				</Text>
			</ScrollView>
			<Overlay
				height={380}
				isVisible={showOverlay}
				onBackdropPress={() => {
					setShowOverLay(false);
				}}
				>
				<ScrollView style={{flex: 1}}>
					{
						overlayData.map((c, i) => {
							return <ListItem
								key={i}
								title={c.name}
								onPress={() => {
									setData(data+JSON.stringify(c)+'\n');
									setShowOverLay(false);
								}}/>;
						})
					}
				</ScrollView>
			</Overlay>
		</View>
	);
};
