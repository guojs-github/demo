/**
 * Home page
 * 2018.4.23 GuoJS
 */

import React from 'react';
import {
	StyleSheet,
	ScrollView,
	View,
	Text,
	Image,
} from 'react-native';
import Swiper from 'react-native-swiper';
import XRoutines from './util/XRoutines.js';

export default class Home extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			pics: [
				{ source: require('../img/sample.jpg') },
				{ source: require('../img/sample.jpg') },
			],
			swiper: {
				width: 100,
				height: 100,
			},
		};
		this.renderSwiperItem = this.renderSwiperItem.bind( this );
	}

	onLayout() {
		console.log("On Home layout.");

		// Get window size
		var screen = XRoutines.screen(); 
		
		// Update
		this.setState({
			swiper: {
				width: screen.width,
				height: 250,
			},
		});
	}
	
	renderSwiperItem(item) {
		console.log("Render swiper item.");
		console.log("item:" + JSON.stringify(item));
		return <Image 
					source={ item.source } 
					style={{width: this.state.swiper.width, height:this.state.swiper.height, resizeMode: 'cover'}}
				/>;
	}
	
	render(){
		return (
			<ScrollView contentContainerStyle={ styles.container } >
				<View onLayout={ () => this.onLayout()}>
				<Swiper
					style={ styles.swiper }
					width={ this.state.swiper.width }
					height={ this.state.swiper.height }
					horizontal={ true } // 图片是否横向排列
					paginationStyle={ styles.pagination } // 轮播图小圆点的样式定义
					showsButtons={ true } // 是否显示左右导航按钮
					loop={ true } // 是否循环播放
					autoplayTimeout={ 5 } // 自动播放时长，秒
					autoplay={ true } //是否自动播放
				> 
					{	
						this.state.pics.map((value) => this.renderSwiperItem(value)) // 依据数组显示数据 
					}
				</Swiper>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'column',
//		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
    swiper: { 
	},
	pagination: {
		bottom: 10,
	}
});
