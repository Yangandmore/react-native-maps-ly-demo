import ShowMap from './showMap';
import Location from './location';
import MapLayer from './mapLayer';
import OfflineMap from './offlineMap';
import Language from './language';
import Tools from './tools';
import Gestures from './gestures';
import Gestures2 from './gestures2';
import Region from './region';
import ScreenShot from './screenShot';
import Event from './event';
import Animate from './animate';
import Marker from './marker';
import StatusChange from './statusChange';

export default {
	显示地图: ShowMap,
	蓝点设置: Location,
	地图图层: MapLayer,
	离线地图: OfflineMap,
	地图语言: Language,
	工具控件: Tools,
	手势管理: Gestures,
	手势设置: Gestures2,
	区域控制: Region,
	截图功能: ScreenShot,
	点击效果: Event,
	动画定位: Animate,
	变动状态: StatusChange,
	点标记: Marker,

};
