///////////////////////////////
//CONFIG OBJECT FOR CATEGORIES
///////////////////////////////

// catFeature.type = 'feature',
// catFeature.index = 0,
// catFeature.useFeature = false,
// catFeature.viewType = 0,
// catFeature.countries = ['US'],
// catFeature.feature.integratedContent = false,
// //feature markup attributes
// catFeature.fssc = 'local';
// catFeature.feature.gridDimensions = 'grid1x1';
// catFeature.feature.dataPosition = '0_0';
// catFeature.feature.dataSize = '1_1';
// catFeature.feature.link = '#linkForFeature';
// catFeature.feature.img = '/imgs/placeholder.gif';
// catFeature.feature.useMap = 'grid2x3';

define([], function() {
	var module = {
		categories: [{
			fssc: 'FSSCMensWatchesCasual',
			countries: ['US'],
			viewType: 3,
			feature: {
				gridDimensions: 'grid2x2',
				dataPosition: '0_0',
				dataSize: '2_2',
				link: '/product/SL4208P?imagePath=SL4208883',
				img: 'http://www.fossil.com/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsHeather.jpg',
				useMap: null,
				useFeature: true,
				integratedContent: false,
				image_map: {
					map: {
						map_type: 'poly',
						data_sku: null,
						data_tag: null,
						coords: '121 12 64 45'
					},
					mapSmall: {
						map_type: 'poly',
						data_sku: null,
						data_tag: null,
						coords: '94 8 50 32'
					}
				}
			}
		}, {
			fssc: 'FSSCWomensWatchesCollectionsRetroTraveler',
			countries: ['US'],
			viewType: 3,
			feature: {
				gridDimensions: 'grid2x2',
				dataPosition: '0_0',
				dataSize: '2_2',
				link: '/product/SL4208P?imagePath=SL4208883',
				img: 'http://www.fossil.com/wcsstore/CommonFossil/images/common/btq/newArrivals/FSSCWomensWatchesCollectionsRetroTraveler.jpg',
				useMap: null,
				useFeature: true,
				integratedContent: false,
				image_map: {
					map: {
						map_type: 'poly',
						data_sku: null,
						data_tag: null,
						coords: '121 12 64 45'
					},
					mapSmall: {
						map_type: 'poly',
						data_sku: null,
						data_tag: null,
						coords: '94 8 50 32'
					}
				}
			}
		}, {
			fssc: 'FSSCWomensWatchesCollectionsGeorgia',
			countries: ['UK', 'Global', 'FR'],
			viewType: 2,
			feature: {
				gridDimensions: 'grid2x3',
				dataPosition: '0_0',
				dataSize: '2_3',
				link: '/product/ES3258P',
				img: 'http://www.fossil.com/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsGeorgia.jpg',
				useMap: null,
				useFeature: false,
				integratedContent: false,
				image_map: {
					map: {
						map_type: 'poly',
						data_sku: null,
						data_tag: null,
						coords: '121 12 64 45'
					},
					mapSmall: {
						map_type: 'poly',
						data_sku: null,
						data_tag: null,
						coords: '94 8 50 32'
					}
				}
			}
		}, {
			fssc: 'FSSCWomensWatchesCollectionsStella',
			countries: ['US', 'FR'],
			viewType: 2,
			feature: {
				gridDimensions: 'grid2x3',
				dataPosition: '0_0',
				dataSize: '2_3',
				link: '/product/ES3258P',
				img: 'http://www.fossil.com/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsStella.jpg',
				useMap: null,
				useFeature: false,
				integratedContent: false,
				image_map: {
					map: {
						map_type: 'poly',
						data_sku: null,
						data_tag: null,
						coords: '121 12 64 45'
					},
					mapSmall: {
						map_type: 'poly',
						data_sku: null,
						data_tag: null,
						coords: '94 8 50 32'
					}
				}
			}
		}]
	};
	return module;
});