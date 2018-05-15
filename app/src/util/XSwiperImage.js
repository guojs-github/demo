/**
 * Swiper of Image control
 * 2018.5.2 GuoJS
 */

import React from 'react';
import {
	StyleSheet,
	View,
	Image,
} from 'react-native';
import Swiper from 'react-native-swiper';
import XRoutines from './common/XRoutines.js'

export default class XSwiperImage extends React.Component {
	constructor(props){
		super(props);
				
		// pictures list
		let pics = [];
		if (Array.isArray(props.pics)) {
			pics = props.pics;
			for (let i = 0; i < pics.length; i ++ ) {
				if ("object" == typeof(pics[i])) {
					if ("undefined" == typeof(pics[i].key)) {
						pics[i].key = XRoutines.formatTimeString2(new Date) + i;
					}
				}
			} // for
		} // if props.pics is valid
				
		// Update
		this.state = {
			pics: pics,
			index: 0,
		};
		this.renderSwiperItem = this.renderSwiperItem.bind( this );
		this.onTouch = this.onTouch.bind( this );
		this.onIndexChanged = this.onIndexChanged.bind( this );
	}

	onTouch(e) {
		console.log("On XSwiper image touch.");
		console.log("index:" + this.state.index);
		
		if ("function" == typeof(this.props.onTouch)) {
			this.props.onTouch(this.state.index);
		}
	}
	
	onIndexChanged(index) {
		console.log("On XSwiper image index change.");
		console.log("index:" + index);
		
		this.setState({
			index: index,
		});
	}
	
	renderSwiperItem(item, index, width, height) {
		console.log("Render image swiper item.");
		console.log("item:" + JSON.stringify(item));
		console.log("index:" + index);
		console.log("width:" + width);
		console.log("height:" + height);
		return <Image 
					key = {item.key}
					source={item.source} 
					style={{width: width, height:height, resizeMode: 'cover'}}
				/>;
	}
	
	render(){			
		// Get window size
		var screen = XRoutines.screen(); 

		// width
		var width = 1;
		if ("number" == typeof(this.props.width)) {
			if (0 < this.props.width) {
				width = this.props.width;
			}
		} 
		if ((0 < width) && (1 >= width))
			width = screen.width * width;
					
		// height
		var height = 1;
		if ("number" == typeof(this.props.height)) {
			if (0 < this.props.height) {
				height = this.props.height;
			}
		} 
		if ((0 < height) && (1 >= height))
			height = screen.height * height;
						
		return (
			<Swiper
				width={ width }
				height={ height }
				horizontal={ true } // ͼƬ�Ƿ��������
				paginationStyle={ styles.pagination } // �ֲ�ͼСԲ�����ʽ����
				showsButtons={ true } // �Ƿ���ʾ���ҵ�����ť
				autoplay={ true } //�Ƿ��Զ�����
				autoplayTimeout={ 5 } // �Զ�����ʱ������
				loop={ true } // �Ƿ�ѭ������
				onIndexChanged= { this.onIndexChanged }
				onTouchEnd={ this.onTouch }
			> 
				{	
					this.state.pics.map((value, index) => this.renderSwiperItem(value, index, width, height)) // ����������ʾ���� 
				}
			</Swiper>
		);
	}
}

const styles = StyleSheet.create({
	pagination: {
		bottom: 10,
	}
});

