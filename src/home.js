import React from 'react';
import {
	View,
	ScrollView
} from 'react-native';
import { ListItem } from 'react-native-elements'

const Home = (props) => {

	const { navigation } = props;

	const list = [
		{
			name: '显示地图'
		},
		{
			name: '蓝点设置'
		},
		{
			name: '地图图层'
		},
		{
			name: '离线地图'
		},
		{
			name: '地图语言'
		},
		{
			name: '工具控件'
		},
		{
			name: '手势管理'
		},
		{
			name: '手势设置'
		},
		{
			name: '区域控制'
		},
		{
			name: '截图功能'
		},
		{
			name: '点标记'
		},
	];

	return (
		<ScrollView style={{ flex: 1 }}>
		{
			list.map((c, i) => (
				<ListItem 
					key={i}
					title={c.name}
					topDivider
					bottomDivider
					onPress={() => {
						navigation.navigate(c.name);
					}}/>
			))
		}
		</ScrollView>
	);
};

export default Home;
