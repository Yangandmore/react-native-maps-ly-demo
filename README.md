这是一个react-native的map库
---

简单全面的地图控件～！！！
使用高德最新的**AMapNavi**库，并且加入了**AMapLocation**和**AMapSearch**，并在这些新API基础上开发。

# 功能
* 地图模式切换（常规、卫星、导航、夜间）
* 多种图层（室内、3D、文本、路况）
* 蓝点操作
* 地图图层
* 离线地图
* 地图语言
* 工具控件
* 手势
* 区域控制
* 截图
* ......

# 安装
```
npm i react-native-maps-ly

// android无需其他配置
// 进入ios文件夹
cd ios
pod install
```

# 获取高德Key

### Android
* [获取高德Key](https://lbs.amap.com/api/android-sdk/guide/create-project/get-key)

* 修改`AndroidManifest.xml`文件，添加Key
	```xml
	<application>
     	<meta-data
       android:name="com.amap.api.v2.apikey"
       android:value="...Key" />
  </application>
	```

### ios
* [获取高德 Key](https://lbs.amap.com/api/ios-sdk/guide/create-project/get-key)。

* 在`AppDelegate.m`文件中设置Key
	```java
	[AMapServices sharedServices].apiKey = @"...Key";
	```

# 开始使用
### 导入地图基础模块
```js
import { GAMapView } from 'react-native-maps-ly';
```

### 添加地图
```js
<GAMapView style={{flex: 1}} />
```





