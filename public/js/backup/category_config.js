/*
**XX
***XXX-/Category Configuration Object/--
**XX
*/

define([], function () {
var module =  {
    categories: {

            /*
                --/womens watches/--
            */

            FSSCWomensWatches:
            {
                category: 'FSSCWomensWatches',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'ES3243',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatches.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                
                viewAll:
                    [{
                        countries:['US'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'ES3243', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatches.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                        
                    }] /* ,
                exceptions:
                    [{
                        countries:['DE'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'ES3243', 
                            img: '/wcsstore/CommonFossil/images/common/category/feature3.jpg', 
                            use_map: false
                        },
                        additionalContent: false
                    }],  */
            },
            FSSCHiddenInterchangeableWatchesWomen:
            {
                category: 'FSSCWomensWatchesCollections',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCHiddenInterchangeableWatchesMen:
            {
                category: 'FSSCMensWatchesCollections',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCWomensShopRileyWatches:
            {
                category: 'FSSCWomensShopRileyWatches',
                feature:
                    {
                        grid_demensions: 'grid2x3',
                        data_position: '0_0',
                        data_size: '2_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/Fossil/images/en_US/prototype/category/FSSCWomensWatches.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensShopRoseWatches:
            {
                category: 'FSSCWomensShopRoseWatches',
                feature:
                    {
                        grid_demensions: 'grid3x3',
                        data_position: '0_0',
                        data_size: '3_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/en_US/btq/FSSCWomensShopRoseWatches.jpg',
                        use_map: 'm_roseWatches',
                        additionalContent: true
                    }
            },
            FSSCWomensWatchesCollections:
            {
                category: 'FSSCWomensShopRoseWatches',
                feature:
                    {
                        grid_demensions: 'grid3x3',
                        data_position: '0_0',
                        data_size: '3_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsViewAll.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: false, 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsViewAll.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensWatchesCollectionsAdele:
            {
                category: 'FSSCWomensWatchesCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: '/product/ES2731P',
                        img: '/wcsstore/CommonFossil/images/en_US/category/FSSCWomensWatchesCollectionsAdele.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },

            FSSCWomensWatchesCollectionsArchival:
            {
                category: 'FSSCWomensWatchesCollectionsArchival',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'ES3162',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsArchival.jpg',
                        use_map: false,
                        additionalContent: true
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'ES3167', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsArchival.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensWatchesCollectionsBridgette:
            {
                category: 'FSSCWomensWatchesCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'AM4390',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsBridgetteUpdated.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'AM4390', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsBridgetteUpdated.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensWatchesCollectionsDylan:
            {
                category: 'FSSCMensWatchesCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'CH2826',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsDylan.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'CH2826', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsDylan.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensWatchesCollectionsEditor:
            {
                category: 'FSSCWomensWatchesCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'FSSCWomensWatchesCollectionsEditor',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsEditor.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'FSSCWomensWatchesCollectionsEditor', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsEditor.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensWatchesCollectionsEmma:
            {
                category: 'FSSCWomensWatchesCollections',
                feature:
                    {
                        grid_demensions: 'grid3x2',
                        data_position: '0_0',
                        data_size: '3_2',
                        class_value: false,
                        link: 'ES3112',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsEmma.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid3x2', 
                            data_position: '0_0', 
                            data_size: '3_2',
                            class_value: false,
                            link: 'ES3112', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsEmma.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensWatchesCollectionsField:
            {
                category: 'FSSCWomensWatchesCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'FSSCWomensWatchesCollectionsField',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsField.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'FSSCWomensWatchesCollectionsField', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsField.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensWatchesCollectionsGeorgia:
            {
                category: 'FSSCWomensWatchesCollectionsGeorgia',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'ES3224',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsGeorgia.jpg',
                        use_map: false,
                        additionalContent: true
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature:
                        {
                            grid_demensions: false,
                            data_position: false,
                            data_size: false,
                            class_value: false,
                            link: false,
                            img: false,
                            use_map: false,
                            additionalContent: true
                        }
                    }]
            },
            FSSCWomensWatchesCollectionsHeather:
            {
                category: 'FSSCWomensWatchesCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'ES3215',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsHeather.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'ES3215', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsHeather.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensWatchesCollectionsNatalie:
            {
                category: 'FSSCWomensWatchesCollectionsNatalie',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'JR1420',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsNatalie.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'JR1420', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsNatalie.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensWatchesCollectionsRetroTraveler:
            {
                category: 'FSSCWomensWatchesCollectionsRetroTraveler',
                feature: false,
                additionalContent: true,
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'AM4464', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsRetroTraveler.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensWatchesCollectionsRiley:
            {
                category: 'FSSCWomensWatchesCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'CE1065',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsRiley.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'CE1065', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsRiley.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensWatchesCollectionsStella:
            {
                category: 'FSSCWomensWatchesCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'ES3104',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsStella.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'ES3104', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsStella.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensWatchesCollectionsSydney:
            {
                category: 'FSSCWomensWatchesCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'ES3066',
                        img: '/wcsstore/CommonFossil/images/global/category/FSSCWomensWatchesCollectionsSydney.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'ES3066', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsSydney.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensWatchesCollectionsWallace:
            {
                category: 'FSSCWomensWatchesCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'ES3179',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsWallace.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'ES3179', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesCollectionsWallace.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensWatchesGoldTone:
            {
                category: 'FSSCWomensWatches',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'ES3084',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesGoldTone.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'ES3084', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesGoldTone.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensWatchesWhite:
            {
                category: 'FSSCWomensWatchesColor',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatches.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensWatchesCeramic:
            {
                category: 'FSSCWomensWatchesColor',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatches.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensWatchesInterchangeable:
            {
                category: 'FSSCWomensWatches',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCWomensWatchesRose:
            {
                category: 'FSSCWomensWatches',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'ES3211',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesRose.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'ES3211', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesRose.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensWatchesSteel:
            {
                category: 'FSSCWomensWatches',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'ES3083',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesSteel.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'ES3083', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesSteel.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCMensShopVintageBronze:
            {
                category: 'FSSCMensShopVintageBronze',
                feature:
                    {
                        grid_demensions: 'grid5x3',
                        data_position: '0_0',
                        data_size: '5_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/global/btq/FSSCMensShopVintageBronze.jpg',
                        use_map: 'mensShopMap',
                        additionalContent: true
                    }
            },
            FSSCWomensWatchesTrend:
            {
                category: 'FSSCWomensWatches',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'ES3224',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesTrend.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'ES3224', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWatchesTrend.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensShopEmoryCollection:
            {
                category: 'FSSCWomensShopEmoryCollection',
                feature:
                    {
                        grid_demensions: 'grid3x3',
                        data_position: '0_0',
                        data_size: '3_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/en_US/btq/FSSCWomensShopEmoryCollection.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },

            /*
                --/mens watches/--
            */
            FSSCMensWatches:
            {
                category: 'FSSCMensWatches',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'JR1424',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCMensWatches.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2',
                            data_position: '0_0',
                            data_size: '2_2',
                            class_value: false,
                            link: 'CH2846',
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCMensWatches.jpg',
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCMensShopBlackRoseWatches:
            {
                category: 'FSSCMensWatches',
                feature:
                    {
                        grid_demensions: 'grid3x3',
                        data_position: '0_0',
                        data_size: '3_3',
                        class_value: false,
                        link: 'CH2817',
                        img: '/wcsstore/CommonFossil/images/en_US/btq/FSSCMensShopBlackRoseWatches.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensShopDeanWatches:
            {
                category: 'FSSCMensShopDeanWatches',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCMensShopGrantCollection:
            {
                category: 'FSSCMensShopGrantCollection',
                feature:
                    {
                        grid_demensions: 'grid1x1',
                        data_position: '0_0',
                        data_size: '1_1',
                        class_value: 'paged',
                        link: false,
                        img: '/wcsstore/Fossil/images/en_US/prototype/category/FSSCMensWatches.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensShopHeirloom:
            {
                category: 'FSSCMensShopHeirloom',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'MBG9061222',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCMensShopHeirloom.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensShopUtilityWatches:
            {
                category: 'FSSCMensShopUtilityWatches',
                feature:
                    {
                        grid_demensions: 'grid3x3',
                        data_position: '0_0',
                        data_size: '3_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/en_US/btq/FSSCMensShopUtilityWatches.jpg',
                        use_map: 'utilityWatches',
                        additionalContent: true
                    }
            },
            FSSCMensWatchesCollections:
            {
                category: 'FSSCMensWatchesCollections',
                feature:
                    {
                        grid_demensions: 'grid3x3',
                        data_position: '0_0',
                        data_size: '3_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/global/category/FSSCMensWatchesCollectionsViewAll.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensWatchesCollectionsAnsel:
            {
                category: 'FSSCMensWatchesCollections',
                feature:
                    {
                        grid_demensions: 'grid3x2',
                        data_position: '0_0',
                        data_size: '3_2',
                        class_value: false,
                        link: 'FS4737',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCMensWatchesCollectionsAnsel.jpg',
                        use_map: false,
                        additionalContent: true
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: {
                            grid_demensions: 'grid3x2',
                            data_position: '0_0',
                            data_size: '3_2',
                            class_value: false,
                            link: 'FS4737',
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCMensWatchesCollectionsAnsel.jpg',
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCMensWatchesCollectionsDean:
            {
                category: 'FSSCMensWatchesCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'FS4721',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCMensWatchesCollectionsDean.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: {
                            grid_demensions: 'grid2x2',
                            data_position: '0_0',
                            data_size: '2_2',
                            class_value: false,
                            link: 'FS4721',
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCMensWatchesCollectionsDean.jpg',
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCMensWatchesCollectionsDecker:
            {
                category: 'FSSCMensWatchesCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'AM4384',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCMensWatchesCollectionsDecker.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: {
                            grid_demensions: 'grid2x2',
                            data_position: '0_0',
                            data_size: '2_2',
                            class_value: false,
                            link: 'AM4384',
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCMensWatchesCollectionsDecker.jpg',
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCMensWatchesCollectionsDylan:
            {
                category: 'FSSCMensWatchesCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'CH2821',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCMensWatchesCollectionsDylan.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: {
                            grid_demensions: 'grid2x2',
                            data_position: '0_0',
                            data_size: '2_2',
                            class_value: false,
                            link: 'CH2821',
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCMensWatchesCollectionsDylan.jpg',
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCMensWatchesCollectionsField:
            {
                category: 'FSSCMensWatchesCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'FSSCMensWatchesCollectionsField',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCMensWatchesCollectionsField.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: {
                            grid_demensions: 'grid2x2',
                            data_position: '0_0',
                            data_size: '2_2',
                            class_value: false,
                            link: 'FSSCMensWatchesCollectionsField',
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCMensWatchesCollectionsField.jpg',
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCMensWatchesCollectionsGageandNate:
            {
                category: 'FSSCMensWatchesCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'JR1425',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCMensWatchesCollectionsGageandNate.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: {
                            grid_demensions: 'grid2x2',
                            data_position: '0_0',
                            data_size: '2_2',
                            class_value: false,
                            link: 'JR1425',
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCMensWatchesCollectionsGageandNate.jpg',
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCMensWatchesCollectionsGrant:
            {
                category: 'FSSCMensWatchesCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'FS4735',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCMensWatchesCollectionsGrant.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: {
                            grid_demensions: 'grid2x2',
                            data_position: '0_0',
                            data_size: '2_2',
                            class_value: false,
                            link: 'FS4735',
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCMensWatchesCollectionsGrant.jpg',
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCMensWatchesCollectionsMachine:
            {
                category: 'FSSCMensWatchesCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'FS4791',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCMensWatchesCollectionsMachine.jpg',
                        use_map: 'Map',
                        additionalContent: true
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: {
                            grid_demensions: 'grid2x2',
                            data_position: '0_0',
                            data_size: '2_2',
                            class_value: false,
                            link: 'FS4791',
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCMensWatchesCollectionsMachine.jpg',
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCMensWatchesCollectionsRetroTraveler:
            {
                category: 'FSSCMensWatchesCollections',
                feature: false,
                additionalContent: true,
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: {
                            grid_demensions: 'grid3x2',
                            data_position: '0_0',
                            data_size: '3_2',
                            class_value: false,
                            link: 'FSSCMensWatchesCollectionsRetroTraveler',
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCMensWatchesCollectionsRetroTraveler.jpg',
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCMensWatchesCollectionsTownsend:
            {
                category: 'FSSCMensWatchesCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'FSSCMensWatchesCollectionsTownsend',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCMensWatchesCollectionsTownsend.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'FSSCMensWatchesCollectionsTownsend', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCMensWatchesCollectionsTownsend.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCMensWatchesInterchangeable:
            {
                category: 'FSSCMensWatches',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCMensWatchesMechanical:
            {
                category: 'FSSCMensWatchesMechanical',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCMensWatchesTitanium:
            {
                category: 'FSSCMensWatchesTitanium',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },

            /*
                --/Woman's Leathers/--
            */

            FSSCWomensWallets:
            {
                category: 'FSSCWomensWallets',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'SL3890233',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWallets.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid3x2', 
                            data_position: '0_0', 
                            data_size: '3_2',
                            class_value: false,
                            link: 'SL3290', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensWallets.jpgg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensShopNewArrivalsWallets:
            {
                category: 'FSSCWomensShopNewArrivalsWallets',
                feature:
                    {
                        grid_demensions: 'grid3x2',
                        data_position: '0_0',
                        data_size: '3_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/btq/newArrivals/FSSCWomensShopNewArrivalsWallets.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensAccessories:
            {
                category: 'FSSCWomensAccessories',
                feature:
                    {
                        grid_demensions: 'grid3x2',
                        data_position: '0_0',
                        data_size: '3_2',
                        class_value: false,
                        link: 'SL4122997',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensAccessories.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'SL3299', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensAccessories.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensShopNewArrivalsAccessories:
            {
                category: 'FSSCWomensShopNewArrivals',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'SL3296440',
                        img: '/wcsstore/CommonFossil/images/common/btq/newArrivals/FSSCWomensShopNewArrivalsGifts.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensShopNewArrivalsFootwear:
            {
                category: 'FSSCWomensShopNewArrivals',
                feature:
                    {
                        grid_demensions: 'grid3x2',
                        data_position: '0_0',
                        data_size: '3_2',
                        class_value: false,
                        link: 'FFW4378566',
                        img: '/wcsstore/CommonFossil/images/common/btq/newArrivals/FSSCWomensShopNewArrivalsFootwear.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensHandbags:
            {
                category: 'FSSCWomensHandbags',
                feature: false,
                additionalContent: true,
                viewAll:
                    [{
                        countries:['ALL'],
                        feature:
                        {
                            grid_demensions: false,
                            data_position: false,
                            data_size: false,
                            class_value: false,
                            link: false,
                            img: false,
                            use_map: false,
                            additionalContent: true
                        }
                    }]
            },
            FSSCWomensHandbagsCollections:
            {
                category: 'FSSCWomensHandbagsCollections',
                feature:
                    {
                        grid_demensions: 'grid3x3',
                        data_position: '0_0',
                        data_size: '3_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/global/category/FSSCWomensHandbagsCollectionsViewAll.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensHandbagsCollectionsAustin:
            {
                category: 'FSSCWomensHandbagsCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'ZB5585',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensHandbagsCollectionsAustin.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'ZB5585', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensHandbagsCollectionsAustin.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensHandbagsCollectionsExplorer:
            {
                category: 'FSSCWomensHandbagsCollectionsExplorer',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'ZB5541101',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensHandbagsCollectionsExplorer.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'ZB5541101', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensHandbagsCollectionsExplorer.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensHandbagsCollectionsHunter:
            {
                category: 'FSSCWomensHandbagsCollectionsHunter',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'ZB5364105',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensHandbagsCollectionsHunter.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'ZB5364105', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensHandbagsCollectionsHunter.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensHandbagsCollectionsKeyPer:
            {
                category: 'FSSCWomensHandbagsCollectionsKeyPer',
                feature: false,
                additionalContent: true,
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'ZB5605652', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensHandbagsCollectionsKeyPer.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensHandbagsCollectionsMaddox:
            {
                category: 'FSSCWomensHandbagsCollectionsMaddox',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'ES3216',
                        img: 'ZB5310599',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'ZB5310599', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensHandbagsCollectionsMaddox.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensHandbagsCollectionsMarlow:
            {
                category: 'FSSCWomensHandbagsCollectionsMarlow',
                feature:
                    {
                        grid_demensions: 'grid2x3',
                        data_position: '0_0',
                        data_size: '2_3',
                        class_value: false,
                        link: 'ZB5560105',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensHandbagsCollectionsMarlow.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x3', 
                            data_position: '0_0', 
                            data_size: '2_3',
                            class_value: false,
                            link: 'ZB5560105', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensHandbagsCollectionsMarlow.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensHandbagsCollectionsMason:
            {
                category: 'FSSCWomensHandbagsCollectionsMason',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/global/category/FSSCWomensHandbagsCollectionsMason.3512.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: false, 
                            img: '/wcsstore/CommonFossil/images/global/category/FSSCWomensHandbagsCollectionsMason.3512.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensHandbagsCollectionsTate:
            {
                category: 'FSSCMensBagsCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'ZB5256440',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensHandbagsCollectionsTate.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'ZB5256440', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensHandbagsCollectionsTate.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensHandbagsCollectionsVintageReIssue:
            {
                category: 'FSSCWomensHandbagsCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'ZB5191015',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensHandbagsCollectionsVintageReIssue.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'ZB5191015', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensHandbagsCollectionsVintageReIssue.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensShopVintageReIssue:
            {
                category: 'FSSCWomensHandbagsCollections',
                feature:
                    {
                        grid_demensions: 'grid3x3',
                        data_position: '0_0',
                        data_size: '3_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/en_US/btq/FSSCWomensShopVintageReIssue.jpg',
                        use_map: 'm_vri',
                        additionalContent: true
                    }
            },
            FSSCWomensHandbagsCollectionsVintageRevival:
            {
                category: 'FSSCWomensHandbagsCollectionsVintageRevival',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCWomensTechCases:
            {
                category: 'FSSCWomensTechCases',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'SL4126652',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensTechCases.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'ZB5410231', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensHandbagsCollectionsVintageRevival.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCMensTechCases:
            {
                category: 'FSSCMensAccessories',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'MLG0086',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCMensTechCases.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensAccessories:
            {
                category: 'FSSCMensAccessories',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'MLG0195235',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCMensTechCases.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2', 
                            link: 'MLG0083', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCMensAccessories.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensHandbagsUtility:
            {
                category: 'FSSCWomensHandbagsUtility',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/global/category/FSSCWomensHandbagsUtility.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },

            /*
                --/Men's Leathers/--
            */

            FSSCMensWallets:
            {
                category: 'FSSCMensWallets',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'ML2958201',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCMensWallets.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2', 
                            link: 'ML3278', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCMensWallets.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCMensBags:
            {
                category: 'FSSCMensBags',
                feature: false,
                additionalContent: true,
                viewAll:
                    [{
                        countries:['ALL'],
                        feature:
                        {
                            grid_demensions: false,
                            data_position: false,
                            data_size: false,
                            class_value: false,
                            link: false,
                            img: false,
                            use_map: false,
                            additionalContent: true
                        }
                    }]
            },
            FSSCMensBagsBeltBags:
            {
                category: 'FSSCMensBagsBeltBags',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/Fossil/images/en_US/prototype/category/FSSCMensBags.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensBagsCollections:
            {
                category: 'FSSCMensBagsCollections',
                feature:
                    {
                        grid_demensions: 'grid3x3',
                        data_position: '0_0',
                        data_size: '3_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/global/category/FSSCMensBagsCollectionsViewAll.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid3x3', 
                            data_position: '0_0', 
                            data_size: '3_3', 
                            link: false, 
                            img: '/wcsstore/CommonFossil/images/global/category/FSSCMensBagsCollectionsViewAll.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCMensBagsCollectionsAlpine:
            {
                category: 'FSSCMensBagsCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/global/category/FSSCMensBagsCollectionsDexter.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensBagsCollectionsDexter:
            {
                category: 'FSSCMensBagsCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'MBG8322235',
                        img: '/wcsstore/CommonFossil/images/global/category/FSSCMensBagsCollectionsDexter.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2', 
                            link: 'MBG8322235', 
                            img: '/wcsstore/CommonFossil/images/global/category/FSSCMensBagsCollectionsDexter.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCMensBagsCollectionsDillon:
            {
                category: 'FSSCMensBagsCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'MBG9130276',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCMensBagsCollectionsDillon.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2', 
                            link: 'MBG9011201', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCMensBagsCollectionsDillon.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCMensBagsCollectionsEdition:
            {
                category: 'FSSCMensBagsCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'MBG9040001',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCMensBagsCollectionsEdition.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2', 
                            link: 'MBG9040001', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCMensBagsCollectionsEdition.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCMensBagsCollectionsEstate:
            {
                category: 'FSSCMensBagsCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'MBG9117300',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCMensBagsCollectionsEstate.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2', 
                            link: 'MBG9117300', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCMensBagsCollectionsEstate.jpg', 
                            use_map: false,
                            additionalContent: false 
                        }
                    }]
            },
            FSSCMensBagsCollectionsTrail:
            {
                category: 'FSSCMensBagsCollections',
                feature:
                    {
                        grid_demensions: 'grid3x2',
                        data_position: '0_0',
                        data_size: '3_2',
                        class_value: false,
                        link: 'MBG8315600',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCMensBagsCollectionsTrail.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2', 
                            link: 'MBG8302201', 
                            img: '/wcsstore/CommonFossil/images/global/category/FSSCMensBagsCollectionsTrail.jpg', 
                            use_map: false,
                            additionalContent: false 
                        }
                    }]
            },
            FSSCMensBagsCollectionsTransit:
            {
                category: 'FSSCMensBagsCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'MBG8229',
                        img: '/wcsstore/CommonFossil/images/global/category/FSSCMensBagsCollectionsTransit.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2', 
                            link: 'MBG8229235', 
                            img: '/wcsstore/CommonFossil/images/global/category/FSSCMensBagsCollectionsTransit.jpg', 
                            use_map: false,
                            additionalContent: false 
                        }
                    }]
            },
            FSSCMensBagsCollectionsVarsity:
            {
                category: 'FSSCMensBagsCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'MBG9051400',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCMensBagsCollectionsVarsity.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2', 
                            link: 'MBG9051400', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCMensBagsCollectionsVarsity.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCMensBagsCollectionsVintageArchive:
            {
                category: 'FSSCMensBagsCollections',
                feature: false,
                additionalContent: true
            },
            FSSCMensBagsCollectionsWorkman:
            {
                category: 'FSSCMensBagsCollections',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/global/category/FSSCMensBagsCollectionsWorkman.3512.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2', 
                            link: false, 
                            img: '/wcsstore/CommonFossil/images/global/category/FSSCMensBagsCollectionsWorkman.3512.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            /*
                --/Clothing/--
            */

            FSSCMensApparel:
            {
                category: 'FSSCMensApparel',
                feature: false,
                additionalContent: true,
                viewAll:
                    [{
                        countries:['ALL'],
                        feature:
                        {
                            grid_demensions: false,
                            data_position: false,
                            data_size: false,
                            class_value: false,
                            link: false,
                            img: false,
                            use_map: false,
                            additionalContent: true
                        }
                    }]
            },
            FSSCMensApparelDenim:
            {
                category: 'FSSCMensApparelDenim',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCMensApparelKnitsandTees:
            {
                category: 'FSSCMensApparel',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCMensApparelShirtsTees:
            {
                category: 'FSSCMensApparelShirtsTees',
                feature:
                    {
                        grid_demensions: 'grid3x2',
                        data_position: '0_0',
                        data_size: '3_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCMensApparelShirtsTees.jpg',
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCWomensApparel:
            {
                category: 'FSSCWomensApparel',
                feature:
                    {
                        grid_demensions: 'grid2x3',
                        data_position: '0_0',
                        data_size: '2_3',
                        class_value: false,
                        link: 'WC8444774',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensApparel.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['US'],
                        feature:
                        {
                            grid_demensions: false,
                            data_position: false,
                            data_size: false,
                            class_value: false,
                            link: false,
                            img: false,
                            use_map: false,
                            additionalContent: true
                        }
                    }]
            },
            FSSCWomensApparelDenim:
            {
                category: 'FSSCWomensApparelDenim',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },

            /*
                --/Jewelry/--
            */

            FSSCWomensJewelry:
            {
                category: 'FSSCWomensJewelry',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: '/product/JA5611P?imagePath=JA5611040',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensJewelryCharms.jpg',
                        use_map: false,
                        additionalContent: true
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'JA5611', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensJewelry.jpg', 
                            use_map: false,
                            additionalContent: true
                        }
                    }]
            },
            FSSCWomensJewelryCharms:
            {
                category: 'FSSCWomensJewelry',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'JA5654',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensJewelryCharms.jpg',
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCWomensJewelryNecklaces:
            {
                category: 'FSSCWomensJewelryNecklaces',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCWomensShopWatchesJewelry:
            {
                category: 'FSSCWomensShopWatchesJewelry',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/global/category/FSSCWomensShopWatchesJewelry.3512.jpg',
                        use_map: false,
                        additionalContent: true
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: false, 
                            img: '/wcsstore/CommonFossil/images/global/category/FSSCWomensShopWatchesJewelry.3512.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensShopWatchesJewelryColor:
            {
                category: 'FSSCWomensShopWatchesJewelry',
                feature:
                    {
                        grid_demensions: 'grid3x3',
                        data_position: '0_0',
                        data_size: '3_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/en_US/category/FSSCWomensShopWatchesJewelryColor.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensShopWatchesJewelryRose:
            {
                category: 'FSSCWomensShopWatchesJewelryRose',
                feature:
                    {
                        grid_demensions: 'grid3x3',
                        data_position: '0_0',
                        data_size: '3_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/en_US/category/FSSCWomensShopWatchesJewelryRose.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensShopWatchesJewelrySmoke:
            {
                category: 'FSSCWomensShopWatchesJewelrySmoke',
                feature:
                    {
                        grid_demensions: 'grid3x3',
                        data_position: '0_0',
                        data_size: '3_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/en_US/category/FSSCWomensShopWatchesJewelrySmoke.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },

            /*
                --/Sale/--
            */

            FSSCMensSale:
            {
                category: 'FSSCMensSale',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCMensSale.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensSaleApparel:
            {
                category: 'FSSCMensSale',
                feature:
                    {
                        grid_demensions: 'grid2x3',
                        data_position: '0_0',
                        data_size: '2_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/en_US/category/FSSCMensSale.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensSaleFossilFinds:
            {
                category: 'FSSCMensSaleFossilFinds',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCMensSaleSunglasses:
            {
                category: 'FSSCMensSale',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/en_US/category/FSSCMensSale.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensShopCatalog:
            {
                category: 'FSSCMensShopCatalog',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCMensShopTransit:
            {
                category: 'FSSCMensShopTransit',
                feature:
                    {
                        grid_demensions: 'grid3x3',
                        data_position: '0_0',
                        data_size: '3_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/en_US/category/FSSCMensShopTransit.jpg',
                        use_map: 'TransitBTQ',
                        additionalContent: true
                    }
            },
            FSSCWomensShopKeyPer:
            {
                category: 'FSSCWomensShopKeyPer',
                feature:
                    {
                        grid_demensions: 'grid3x3',
                        data_position: '0_0',
                        data_size: '3_3',
                        class_value: false,
                        link: '/product/ZB5125P?imagePath=ZB5125919',
                        img: '/wcsstore/CommonFossil/images/en_US/btq/FSSCWomensShopKeyPer.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensShopMaddox:
            {
                category: 'FSSCWomensShopKeyPer',
                feature:
                    {
                        grid_demensions: 'grid6x2',
                        data_position: '0_0',
                        data_size: '6_2',
                        class_value: false,
                        link: '/product/ZB5125P?imagePath=ZB5125919',
                        img: '/wcsstore/CommonFossil/images/en_US/btq/FSSCWomensShopMaddox.jpg',
                        use_map: 'maddoxMap',
                        additionalContent: true
                    }
            },
            FSSCWomensSale:
            {
                category: 'FSSCWomensSale',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensSale.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensSaleApparel:
            {
                category: 'FSSCWomensSale',
                feature:
                    {
                        grid_demensions: 'grid2x3',
                        data_position: '0_0',
                        data_size: '2_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/en_US/category/FSSCWomensSale.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensSaleFossilFinds:
            {
                category: 'FSSCWomensSaleFossilFinds',
                feature: false,
                additionalContent: false
            },
            FSSCWomensSaleJewelry:
            {
                category: 'FSSCWomensSaleJewelry',
                feature:
                    {
                        grid_demensions: 'grid2x3',
                        data_position: '0_0',
                        data_size: '2_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/en_US/category/FSSCWomensSale.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensSaleSunglasses:
            {
                category: 'FSSCWomensSaleSunglasses',
                feature:
                    {
                        grid_demensions: 'grid2x3',
                        data_position: '0_0',
                        data_size: '2_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/en_US/category/FSSCWomensSale.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },

            /*
                --/Gifts & Boutiques/--
            */

            FSSCMensGiftsGentlemen:
            {
                category: 'FSSCMensGiftsGentlemen',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCMensGiftsGentlemen.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2', 
                            link: false, 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCMensGiftsGentlemen.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                        
                    }]
            },
            FSSCMensGiftsTop:
            {
                category: 'FSSCMensGiftsTop',
                feature:
                    {
                        grid_demensions: 'grid2x3',
                        data_position: '0_0',
                        data_size: '2_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/category/BC/FSSCMensGiftsTop.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensGiftsUnder50:
            {
                category: 'FSSCMensGiftsUnder50',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/btq/gifts/FSSCMensGiftsUnder50.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensGiftsUnder100:
            {
                category: 'FSSCMensGiftsUnder100',
                feature:
                    {
                        grid_demensions: 'grid3x2',
                        data_position: '0_0',
                        data_size: '3_2',
                        class_value: false,
                        link: 'ES3216',
                        img: '/wcsstore/CommonFossil/images/common/btq/gifts/FSSCMensGiftsUnder100.jpg',
                        use_map: 'Map',
                        additionalContent: false
                    }
            },
            FSSCMensGiftsUnder200:
            {
                category: 'FSSCMensGiftsUnder200',
                feature:
                    {
                        grid_demensions: 'grid3x2',
                        data_position: '0_0',
                        data_size: '3_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/btq/gifts/FSSCMensGiftsUnder200.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensShopTopGifts:
            {
                category: 'FSSCMensShopGifts',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/en_US/category/BC/FSSCMensShopTopGifts.jpg',
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCWomensGiftsColor:
            {
                category: 'FSSCWomensGiftsColor',
                feature:
                    {
                        grid_demensions: 'grid2x3',
                        data_position: '0_0',
                        data_size: '2_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/btq/color/colorbtq_green.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensGiftsColorGreen:
            {
                category: 'FSSCWomensGiftsColorGreen',
                feature:
                    {
                        grid_demensions: 'grid2x3',
                        data_position: '0_0',
                        data_size: '2_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/btq/color/colorbtq_green.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensGiftsColorRed:
            {
                category: 'FSSCWomensGiftsColorRed',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/btq/color/colorbtq_red.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensGiftsTop:
            {
                category: 'FSSCWomensGiftsTop',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'ZB5612440',
                        img: '/wcsstore/CommonFossil/images/common/category/BC/FSSCWomensGiftsTop.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensGiftsUnder50:
            {
                category: 'FSSCWomensGiftsUnder50',
                feature:
                    {
                        grid_demensions: 'grid3x2',
                        data_position: '0_0',
                        data_size: '3_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/btq/gifts/FSSCWomensGiftsUnder50.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensGiftsUnder100:
            {
                category: 'FSSCWomensGiftsUnder100',
                feature:
                    {
                        grid_demensions: 'grid3x2',
                        data_position: '0_0',
                        data_size: '3_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/btq/gifts/FSSCWomensGiftsUnder100.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensGiftsUnder200:
            {
                category: 'FSSCWomensGiftsUnder200',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: false,
                        img: 'wcsstore/CommonFossil/images/common/btq/gifts/FSSCWomensGiftsUnder200.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensShopNewArrivalsGifts:
            {
                category: 'FSSCMensShopNewArrivals',
                feature:
                    {
                        grid_demensions: 'grid3x2',
                        data_position: '0_0',
                        data_size: '3_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/btq/newArrivals/FSSCMensShopNewArrivalsGifts.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensShopNewArrivals:
            {
                category: 'FSSCMensShopNewArrivals',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'MC2647468',
                        img: '/wcsstore/CommonFossil/images/common/btq/newArrivals/FSSCMensShopNewArrivals.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2', 
                            link: 'MC2647468', 
                            img: '/wcsstore/CommonFossil/images/common/btq/newArrivals/FSSCMensShopNewArrivals.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCMensShopNewArrivalsApparel:
            {
                category: 'FSSCMensShopNewArrivals',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/btq/newArrivals/FSSCMensShopNewArrivalsApparel.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensShopNewArrivalsBags:
            {
                category: 'FSSCMensShopNewArrivals',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'MBG9116250',
                        img: '/wcsstore/CommonFossil/images/common/btq/newArrivals/FSSCMensShopNewArrivalsBags.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensShopNewArrivalsBelts:
            {
                category: 'FSSCMensShopNewArrivals',
                feature:
                    {
                        grid_demensions: 'grid3x3',
                        data_position: '0_0',
                        data_size: '3_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/Fossil/images/en_US/prototype/category/FSSCMensAccessories.jpg',
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCMensShopNewArrivalsFootwear:
            {
                category: 'FSSCMensShopNewArrivalsFootwear',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'FFM4187276',
                        img: '/wcsstore/CommonFossil/images/common/btq/newArrivals/FSSCMensShopNewArrivalsFootwear.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensShopNewArrivalsSunwear:
            {
                category: 'FSSCMensShopNewArrivals',
                feature:
                    {
                        grid_demensions: 'grid3x3',
                        data_position: '0_0',
                        data_size: '3_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/Fossil/images/en_US/prototype/category/FSSCMensAccessories.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensShopNewArrivalsTravelBags:
            {
                category: 'FSSCMensShopNewArrivals',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'MBG9099249',
                        img: '/wcsstore/CommonFossil/images/common/btq/newArrivals/FSSCMensShopNewArrivalsTravelBags.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensShopNewArrivalsWallets:
            {
                category: 'FSSCMensShopNewArrivals',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/btq/newArrivals/FSSCMensShopNewArrivalsWallets.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensShopNewArrivalsWatches:
            {
                category: 'FSSCMensShopNewArrivals',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'FS4786',
                        img: '/wcsstore/CommonFossil/images/common/btq/newArrivals/FSSCMensShopNewArrivalsWatches.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensShopNewArrivalsAccessories:
            {
                category: 'FSSCMensShopNewArrivals',
                feature:
                    {
                        grid_demensions: 'grid2x3',
                        data_position: '0_0',
                        data_size: '2_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/btq/newArrivals/FSSCMensShopNewArrivalsGifts.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensShopMensClassics:
            {
                category: 'FSSCMensShopMensClassics',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCWomensShopEssentials:
            {
                category: 'FSSCWomensShopEssentials',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCWomensShopCatalog:
            {
                category: 'FSSCWomensShopCatalog',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCMensShopShadesofSteel:
            {
                category: 'FSSCMensShopShadesofSteel',
                feature:
                    {
                        grid_demensions: 'grid3x2',
                        data_position: '0_0',
                        data_size: '3_2',
                        class_value: false,
                        link: '/product/FS4774P',
                        img: '/wcsstore/CommonFossil/images/common/btq/FSSCMensShopShadesofSteel.jpg',
                        use_map: 'steel',
                        additionalContent: false
                    }
            },
            FSSCMensShopColor:
            {
                category: 'FSSCMensShopColor',
                feature:
                    {
                        grid_demensions: 'grid3x2',
                        data_position: '0_0',
                        data_size: '3_2',
                        class_value: 'men',
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/btq/color_crush/mens.jpg',
                        use_map: 'watches',
                        additionalContent: true
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature:
                        {
                            grid_demensions: false,
                            data_position: false,
                            data_size: false,
                            class_value: false,
                            link: false,
                            img: false,
                            use_map: false,
                            additionalContent: true
                        }
                    }]
            },
            FSSCMensShopRomans:
            {
                category: 'FSSCMensWatchBoutique',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'FS4734',
                        img: '/wcsstore/CommonFossil/images/common/btq/FSSCMensWatchBoutique.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensShopPreview:
            {
                category: 'FSSCWomensShopPreview',
                feature: false,
                additionalContent: true,
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'ZB5596724', 
                            img: 'wcsstore/CommonFossil/images/common/btq/FSSCWomensShopPreview.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensShopRomans:
            {
                category: 'FSSCWomensShopRomans',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'ES3113',
                        img: 'wcsstore/CommonFossil/images/common/btq/FSSCWomensShopRomans.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensShopRoseTones:
            {
                category: 'FSSCWomensShopRoseTones',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: '/product/ES3151P',
                        img: '/wcsstore/CommonFossil/images/common/btq/FSSCWomensShopRoseWatches.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensShopSignature:
            {
                category: 'FSSCWomensSignature',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'ZB5346015',
                        img: '/wcsstore/CommonFossil/images/common/btq/FSSCWomensSignature.jpg',
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCWomensShopMason:
            {
                category: 'FSSCWomensShopMason',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCWomensGiftsColorBlue:
            {
                category: 'FSSCWomensGiftsColorBlue',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/btq/color/colorbtq_blue.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensShopColor:
            {
                category: 'FSSCWomensShopColor',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature:
                        {
                            grid_demensions: false,
                            data_position: false,
                            data_size: false,
                            class_value: false,
                            link: false,
                            img: false,
                            use_map: false,
                            additionalContent: true
                        }
                    }]
            },
            FSSCWomensShopColorBlue:
            {
                category: 'FSSCWomensShopColorBlue',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/btq/color/colorbtq_blue.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: false, 
                            img: '/wcsstore/CommonFossil/images/common/btq/color/colorbtq_blue.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensShopColorGreen:
            {
                category: 'FSSCWomensShopColorGreen',
                feature:
                    {
                        grid_demensions: 'grid2x3',
                        data_position: '0_0',
                        data_size: '2_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/btq/color/colorbtq_green.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x3', 
                            data_position: '0_0', 
                            data_size: '2_3',
                            class_value: false,
                            link: false, 
                            img: '/wcsstore/CommonFossil/images/common/btq/color/colorbtq_green.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensShopColorRed:
            {
                category: 'FSSCWomensShopColorRed',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/btq/color/colorbtq_red.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x3', 
                            data_position: '0_0', 
                            data_size: '2_3',
                            class_value: false,
                            link: false, 
                            img: '/wcsstore/CommonFossil/images/common/btq/color/colorbtq_green.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensShopGifts:
            {
                category: 'FSSCWomensShopNewArrivals',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'ZB5034407',
                        img: '/wcsstore/CommonFossil/images/global/btq/FSSCWomensShopGifts.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensShopDots:
            {
                category: 'FSSCWomensShopDots',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCWomensShopExotics:
            {
                category: 'FSSCWomensHandbagsCollections',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCWomensShopGeorgiaJewelry:
            {
                category: 'FSSCWomensShopGeorgiaJewelry',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCWomensShopHeirloom:
            {
                category: 'FSSCWomensShopHeirloom',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCWomensShopNewArrivals:
            {
                category: 'FSSCWomensShopNewArrivals',
                feature:
                    {
                        grid_demensions: 'grid2x3',
                        data_position: '0_0',
                        data_size: '2_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/btq/newArrivals/FSSCWomensShopNewArrivals.jpg',
                        use_map: 'wna',
                        additionalContent: true
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x3', 
                            data_position: '0_0', 
                            data_size: '2_3',
                            class_value: false,
                            link: false, 
                            img: '/wcsstore/CommonFossil/images/common/btq/newArrivals/FSSCWomensShopNewArrivals.jpg', 
                            use_map: 'wna',
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensShopNewArrivalsApparel:
            {
                category: 'FSSCWomensShopNewArrivals',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'WC1439428',
                        img: '/wcsstore/CommonFossil/images/common/btq/newArrivals/FSSCWomensShopNewArrivalsApparel.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensShopNewArrivalsGifts:
            {
                category: 'FSSCWomensShopNewArrivals',
                feature:
                    {
                        grid_demensions: 'grid3x2',
                        data_position: '0_0',
                        data_size: '3_2',
                        class_value: false,
                        link: 'ZB5405646',
                        img: '/wcsstore/CommonFossil/images/common/btq/newArrivals/FSSCWomensShopNewArrivalsGifts.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensShopNewArrivalsHandbags:
            {
                category: 'FSSCWomensShopNewArrivals',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'ZB5560616',
                        img: '/wcsstore/CommonFossil/images/common/btq/newArrivals/FSSCWomensShopNewArrivalsHandbags.jp',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensShopNewArrivalsJewelry:
            {
                category: 'FSSCWomensShopNewArrivals',
                feature:
                    {
                        grid_demensions: 'grid3x2',
                        data_position: '0_0',
                        data_size: '3_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/btq/newArrivals/FSSCWomensShopNewArrivalsJewelry.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensShopNewArrivalsSunwear:
            {
                category: 'FSSCWomensShopNewArrivalsSunwear',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/Fossil/images/en_US/prototype/category/FSSCWomensAccessories.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCWomensShopNewArrivalsWatches:
            {
                category: 'FSSCWomensShopNewArrivalsWatches',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/common/btq/newArrivals/FSSCWomensShopNewArrivalsWatches.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensShopEstate:
            {
                category: 'FSSCMensShopEstate',
                feature:
                    {
                        grid_demensions: 'grid3x3',
                        data_position: '0_0',
                        data_size: '3_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/en_US/btq/FSSCMensShopEstate.jpg',
                        use_map: 'm_estate',
                        additionalContent: true
                    }
            },
            FSSCMensShopAlpine:
            {
                category: 'FSSCMensShopAlpine',
                feature:
                    {
                        grid_demensions: 'grid3x3',
                        data_position: '0_0',
                        data_size: '3_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/CommonFossil/images/global/btq/FSSCMensShopAlpine.jpg',
                        use_map: 'FSSCMensShopAlpine',
                        additionalContent: true
                    }
            },

            /*
                --/Other/--
            */

            FSSCHiddenSneakPeak:
            {
                category: 'FSSCHiddenSneakPeak',
                feature: false,
                additionalContent: true,
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid3x3', 
                            data_position: '0_0', 
                            data_size: '3_3', 
                            link: false, 
                            img: '/wcsstore/CommonFossil/images/global/category/FSSCHiddenSneakPeak.4212.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCHiddenSneakPeakMen:
            {
                category: 'FSSCHiddenSneakPeakMen',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'TI1004',
                        img: '/wcsstore/CommonFossil/images/en_US/btq/FSSCHiddenSneakPeakMen.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensFootwear:
            {
                category: 'FSSCMensFootwear',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'FFM4187276',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCMensFootwear.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2', 
                            link: 'FFM4187276', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCMensFootwear.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensFootwear:
            {
                category: 'FSSCWomensFootwear',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'FFW4349260',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensFootwear.jpg',
                        use_map: false,
                        additionalContent: false
                    },
                viewAll:
                    [{
                        countries:['ALL'],
                        feature: { 
                            grid_demensions: 'grid2x2', 
                            data_position: '0_0', 
                            data_size: '2_2',
                            class_value: false,
                            link: 'FFW4377440', 
                            img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensFootwear.jpg', 
                            use_map: false,
                            additionalContent: false
                        }
                    }]
            },
            FSSCWomensSunglasses:
            {
                category: 'FSSCWomensSunglasses',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCWomensShopSunglasses:
            {
                category: 'FSSCWomensShopSunglasses',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'PS4116237',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCWomensShopSunglasses.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensShopSunglasses:
            {
                category: 'FSSCMensShopSunglasses',
                feature:
                    {
                        grid_demensions: 'grid2x2',
                        data_position: '0_0',
                        data_size: '2_2',
                        class_value: false,
                        link: 'PS4849018',
                        img: '/wcsstore/CommonFossil/images/common/category/FSSCMensShopSunglasses.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            },
            FSSCMensSunglasses:
            {
                category: 'FSSCMensSunglasses',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCMensFossilFinds:
            {
                category: 'FSSCMensFossilFinds',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCMensFossilFindsIDesireVintagePosters:
            {
                category: 'FSSCMensFossilFinds',
                feature:
                    {
                        grid_demensions: 'grid2x3',
                        data_position: '0_0',
                        data_size: '2_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/Fossil/images/en_US/category/FSSCFossilFinds.jpg',
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCWomensFossilFinds:
            {
                category: 'FSSCWomensFossilFinds',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCWomensFossilFindsIDesireVintagePosters:
            {
                category: 'FSSCWomensFossilFinds',
                feature:
                    {
                        grid_demensions: 'grid2x3',
                        data_position: '0_0',
                        data_size: '2_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/Fossil/images/en_US/category/FSSCFossilFinds.jpg',
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCWomensFossilFindsVintageCollaborationEdTondery:
            {
                category: 'FSSCWomensFossilFinds',
                feature:
                    {
                        grid_demensions: false,
                        data_position: false,
                        data_size: false,
                        class_value: false,
                        link: false,
                        img: false,
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCMensFossilFindsVintageCollaborationEdTondery:
            {
                category: 'FSSCWomensFossilFinds',
                feature:
                    {
                        grid_demensions: 'grid2x3',
                        data_position: '0_0',
                        data_size: '2_3',
                        class_value: false,
                        link: false,
                        img: '/wcsstore/Fossil/images/en_US/category/FSSCFossilFinds.jpg',
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCWomensVintageCollaborationNotIkea:
            {
                category: 'FSSCWomensFossilFinds',
                feature:
                    {
                        grid_demensions: 'grid2x1',
                        data_position: '0_0',
                        data_size: '2_1',
                        class_value: 'fls_thisisnotikea',
                        link: false,
                        img: '/wcsstore/Fossil/images/en_US/category/notikea.jpg',
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCMensVintageCollaborationNotIkea:
            {
                category: 'FSSCMensFossilFinds',
                feature:
                    {
                        grid_demensions: 'grid2x1',
                        data_position: '0_0',
                        data_size: '2_1',
                        class_value: 'fls_thisisnotikea',
                        link: false,
                        img: '/wcsstore/Fossil/images/en_US/category/notikea.jpg',
                        use_map: false,
                        additionalContent: true
                    }
            },
            FSSCMensShopLineageCollection:
            {
                category: 'FSSCMensShopLineageCollection',
                feature:
                    {
                        grid_demensions: 'grid3x3',
                        data_position: '0_0',
                        data_size: '3_3',
                        class_value: false,
                        link: '/product/MBG1277P?imagePath=MBG1277249',
                        img: '/wcsstore/CommonFossil/images/en_US/btq/FSSCMensShopLineageCollection.jpg',
                        use_map: false,
                        additionalContent: false
                    }
            }
    }
};
    return module;
});
