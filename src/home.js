import React from 'react';
import {
	View,
	ScrollView
} from 'react-native';
import { ListItem, Text } from 'react-native-elements'

export default Home = (props) => {

	const { navigation } = props;

	const list = [
		{
			name: '显示地图',
			mark: '基础地图'
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
			name: '点击效果'
		},
		{
			name: '动画定位'
		},
		{
			name: '点标记',
			mark: '标记'
		},
	];

	return (
		<ScrollView style={{ flex: 1 }}>
		{
			list.map((c, i) => {
				console.log(c.mark);
				return c.mark ? (
					<View 
						style={{flexDirection: 'column'}}
						key={i}>
						<Text h4
							style={{margin: 10}}>{c.mark}</Text>
						<ListItem 
							title={c.name}
							topDivider
							bottomDivider
							onPress={() => {
								navigation.navigate(c.name);
							}}/>				
					</View>
				) : (
					<ListItem 
						key={i}
						title={c.name}
						topDivider
						bottomDivider
						onPress={() => {
							navigation.navigate(c.name);
						}}/>
				);
			})
		}
		</ScrollView>
	);
};
