///////////////////////////////
//TEMPLATE RENDERING MODULE
///////////////////////////////

define([
	'jquery',
	'hogan',
	'configs/test_config.js',
	'text!category_template.tpl',
	'jquery.reveal',
	'jquery-ui'], function($, hogan, config, template) {

	var module = {

		config: config,
		template: template,
		currentElement: {},
		currentElementIndex: 0,
		elementIndex: 0,
		saveIndex: 0,
		dataObj: config,
		undoStack: [],
		fsscList: [],
		featureObj: {},

		initialize: function() {

			$(document).ready(function() {

				//set element index from config
				module.elementIndex = module.config.categories.length;

				//set event listeners
				module.setTriggers();

				//populate FSSC list for rest of module
				module.populateFSSCList();

			});
		},

		//fill running FSSC array with current values from config
		populateFSSCList: function() {

			var name, i;
			for (i = 0; i < module.config.categories.length; i++) {
				name = module.config.categories[i].fssc;
				module.fsscList.push(name);
			}

			//load fssc codes into search bar
			module.loadSearchBar();

		},

		//fill category fssc search bar with values
		loadSearchBar: function() {

			//fill out auto-searchbar with values from config
			$("#fsscSearch").autocomplete({
				source: module.fsscList
			});

		},

		//fetch data and render category feature to design board
		renderCatFeature: function() {

			//render selected config item with template
			// var buffer = Hogan.compile(module.template).render({
			// categories: module.config.categories[i]
			// });

			var catFeature = module.config.categories[i];

			catFeature.markup = '<div id="categoryFeatureSpot" class="catFeature ' + catFeature.feature.gridDimensions + ' ' + catFeature.fssc + '" data-position="' + catFeature.feature.dataPosition +
				'" data-size="' + catFeature.feature.dataSize + '" data-index="' + i + '"><a data-href="' + catFeature.feature.link + '"><img src="' + catFeature.feature.img + '" usemap="' + catFeature.feature.useMap + '" /></a></div>';

			//append to design board
			$("#board").append(catFeature.markup);

			//apply draggable and moveable to new object
			module.animate(catFeature, '.catFeature', 180);

			//store reference
			//module.data.store(1, catFeature);

		},
		console.log('fag');

		//create an feature content piece and add it to design board
		createFeature: function() {

			//create default attributes for new feature
			var catFeature = module.new.feature();

			catFeature.markup = '<div id="categoryFeatureSpot" class="catFeature ' + catFeature.categories.feature.gridDimensions + ' ' + catFeature.categories.fssc + '" data-position="' + catFeature.categories.feature.dataPosition + '" data-size="' + catFeature.categories.feature.dataSize +
				'" data-index="' + module.elementIndex + '"><a data-href="' + catFeature.categories.feature.link + '"><img src="' + catFeature.categories.feature.img +
				'" usemap="' + catFeature.categories.feature.useMap + '" /></a></div>';

			//append to design board
			$("#board").append(catFeature.markup);
			$('.catFeature').show('fast');

			//apply draggable and moveable to new object
			module.animate(catFeature, '.catFeature', 180);

			//store reference
			module.data.store(1, catFeature);

			//save designboard after addition
			module.undo.saveDesignBoard();

			module.elementIndex++;

		},

		//create an integrated content piece and add it to design board
		createIntegratedContent: function() {

			//render selected config item with template
			// var buffer = Hogan.compile(module.template).render({
			// categories: module.config.categories[i]
			// });

			//create default attributes for new IC
			var integratedContent = {};
			integratedContent.type = 'integratedContent',
			integratedContent.index = 0,
			integratedContent.gridDimensions = 'grid1x1';
			integratedContent.dataPosition = '0_0';
			integratedContent.dataSize = '1_1';

			integratedContent.markup = '<div id="integratedContentSpot" class="ICtemp catFeature intContent ' + 
			integratedContent.gridDimensions + '" data-position="' + integratedContent.dataPosition + 
			'" data-size="' + integratedContent.dataSize + '" data-index="' + module.elementIndex + '"></div>';

			//append to design board
			$("#board").append(integratedContent.markup);
			$('.intContent').fadeIn('fast');

			//apply draggable and moveable to new object
			module.animate(integratedContent, '.intContent', 180);

			//store reference
			module.data.store(2, integratedContent);

			//save designboard after addition
			module.undo.saveDesignBoard();

			module.elementIndex++;

		},

		//find index of a given search term from a given object
		arrayObjectIndexOf: function(obj, searchTerm) {
			//find index of search term from a given array of objects

			try {
				for (i = 0; i < obj.categories.length; i++) {

					if (obj.categories[i]['fssc'].indexOf(searchTerm) === 0) {
						// console.info(obj.categories[i]['fssc'].indexOf(searchTerm));
						return i;
					}
				}
			} catch (e) {
				console.dir('could not find object index');
				console.info(e);
			}
		},

		//quick method to rewrite image paths to make them viewable from browser
		fixLocalPath: function(domain, img) {

			var imagePath = domain + img;

			//prepend fossil domain to path
			$('#board img').attr('src', imagePath);

		},

		//load new category feature
		switchFSSC: function() {

			var index, image, newFSSC;

			//fade out and clear design canvas
			// $('#board').fadeOut('fast');
			$('#board').html('');

			//get index of selected FSSC in config
			index = module.arrayObjectIndexOf(module.config, $('#fsscSearch').val());

			//render feature
			module.renderCatFeature(index);

			//fix image paths since we're not in the fossil asset scope
			// this will be done to the config reference since we don't want to corrupt config values
			//module.fixLocalPath('http://www.fossil.com', module.config.categories[index].feature.img);

			// $('#board').fadeIn('fast');
		},

		//popuates FSSC bucket list with running list of values
		populateModalFSSCList: function() {

			$('.fsscList').html('');

			for (i = 0; i < module.fsscList.length; i++) {

				list = '<li>' + module.fsscList[i] + '<i id="remove" class="icon-remove"></i></li>';
				$('.fsscList').append(list);

			}

			//remove FSSC code for which the delete button was clicked
			$('.icon-remove').click(function() {

				var i, searchTerm = $(this).parent().text();

				for (i = module.fsscList.length - 1; i >= 0; i--) {
					if (module.fsscList[i] === searchTerm) {
						module.fsscList.splice(i, 1);
						// break;       //<-- Uncomment  if only the first term has to be removed
					}
				}

				$(this).parent().remove();

			});

		},

		//apply animations a newly created feature
		animate: function(designObj, identifier, snapLimit) {

			try {

				$(identifier).draggable({

					grid: [snapLimit, snapLimit],
					containment: 'parent',
					opacity: 0.5,

					stop: function() {
						module.undo.saveDesignBoard();
					}

				}).resizable({

					grid: snapLimit,
					containment: "parent",

					stop: function() {
						module.undo.saveDesignBoard();
					}

				});

				//design element selection animation
				$('#board div').click(function() {

					module.designBoard.click($(this));

				}).dblclick(function() {
					module.designBoard.deselect($(this));
				});

				$('#board div').keyup(function(e) {

					$(this).remove();

				})


			} catch (e) {

				console.info('could not apply animations to feature');
				console.info(e);

			}
		},

		//all actions associated with interacting with the design board
		designBoard: {

			click: function(element) {

				// event.target.className

				var currentId = element.attr('id');
				module.currentElementIndex = element.attr('data-index');

				if (currentId === 'categoryFeatureSpot') {

					//show selection transform & and fill attributes panel 
					module.designBoard.selectElement(element);
					module.designBoard.loadAttributes();

				} else if (currentId === 'integratedContentSpot') {

					//show selection transform & and fill attributes panel
					module.designBoard.selectElement(element);
					module.designBoard.loadAttributes();

				}
			},
			deselect: function(element) {

				element.css('opacity', '.6');

				delete module.currentElement;
				module.currentElement = 0;

				//diable delete tool now that no element is selected
				$('#deleteElement').prop("disabled", true);

				$('#modalConfigButton').prop("disabled", true);

			},
			selectElement: function(element) {

				$('#board div').css('opacity', '.6');
				// .width('-=4').height('-=4')
				element.css('opacity', '1');

				module.currentElement = element;

				console.info(module.currentElement);

				//enable delete tool now that an element is selected
				$('#deleteElement, #modalConfigButton').prop("disabled", false);

			},
			deleteElement: function() {

				module.currentElement.remove();

				//diable delete tool now that no element is selected
				$('#deleteElement').prop("disabled", true);

			},
			loadAttributes: function() {

				//fill attribute values
				$('#cat_fssc').html(module.config.categories[module.currentElementIndex].fssc);
				$('#cat_link').val(module.config.categories[module.currentElementIndex].feature.link);
				$('#cat_img').val(module.config.categories[module.currentElementIndex].feature.img);
			}

		},

		// config reference data interactions handler
		data: {

			store: function(type, designObj) {

				//store feature
				switch (type) {
					case 1:

						//track reference to design board objects
						designObj.index = module.elementIndex;

						//merge new feature object with running data object
						module.dataObj.categories.push(designObj.categories);

						break;

					case 2:

						console.log('saving brand spot');

						break;

					default:
						console.log('Problem: could not find data save type.');
				}

			},
			recall: function(element) {

				//return data for given element
				var dataIndex = element.attr('data-index');
				return module.dataObj.categories[dataIndex];

			},
			delete: function() {

				//delete given data

			},
			export: function() {

				//save config file to external file
				$.ajax({
					type: 'POST', // added,
					url: localhost, //server
					data: '{"data": "TEST"}',
					//dataType: 'jsonp' - removed
					//jsonpCallback: 'callback' - removed
					success: function(data) {
						var ret = jQuery.parseJSON(data);
						$('#lblResponse').html(ret.msg);
					},
					error: function(xhr, status, error) {
						console.log('Error: ' + error.message);
						$('#lblResponse').html('Error connecting to the server.');
					}
				});

			}
		},

		new: {
			feature: function() {
				{
					var feature = {
						categories: {
							fssc: 'replaceMeWithARealFSSCCode',
							countries: ['US'],
							viewType: 1,
							feature: {
								gridDimensions: 'grid1x1',
								dataPosition: '0_0',
								dataSize: '1_1',
								link: '',
								img: '',
								useMap: false,
								useFeature: true,
								integratedContent: false,
								image_map: {
									map: {
										map_type: 'poly',
										data_sku: null,
										data_tag: null,
										coords: '0'
									},
									mapSmall: {
										map_type: 'poly',
										data_sku: null,
										data_tag: null,
										coords: '0'
									}
								}
							}
						}
					}
					return feature;
				}
			}
		},

		undo: {

			//save current designboard configuration			
			saveDesignBoard: function() {

			

				var properties = {};

				

					$('.catFeature').each(function(index) {

						//get designboard data
						properties.Fposition = $(this).position();
						properties.Fwidth = $(this).width();
						properties.Fheight = $(this).height();
						properties.Findex = $(this).data('index');

						module.updateElementPosition(properties.Fposition,properties.Fwidth,properties.Fheight, properties.Findex );

					});
				

				// if ($('#integratedContentSpot')[0]) {

				// 	$('#integratedContentSpot').each(function(index) {

				// 		//get designboard data
				// 		properties.Iposition = $(this).position();
				// 		properties.Iwidth = $(this).width();
				// 		properties.Iheight = $(this).height();

				// 		module.updateElementPosition(properties.Iposition,properties.Iwidth,properties.Iheight, properties.Iindex );

				// 	});
				// }

				// module.undoStack[module.saveIndex] = properties;

				// console.info('saved:', properties);

				// module.saveIndex++;


			}
		},

		updateConfig: function(index, type, value) {

			//
			var config = module.config;

			switch (type) {
				case 'fssc':

					config.categories[index].fssc = value;

					break;

				case 'countries':

					config.categories[index].countries = value;

					break;

				case 'viewType':

					config.categories[index].viewType = value;

					break;

				case 'gridDimensions':

					config.categories[index].feature.gridDimensions = value;
					
					break;

				case 'dataPosition':

					config.categories[index].feature.dataPosition = value;
					
					break;

				case 'link':

					config.categories[index].feature.link = value;
					
					break;

				case 'img':

					config.categories[index].feature.img = value;
					
					break;

				case 'useMap':

					config.categories[index].feature.useMap = value;
					
					break;

				case 'useFeature':

					config.categories[index].feature.useFeature = value;
					
					break;

				case 'integratedContent':

					config.categories[index].feature.integratedContent = value;
					
					break;
					//need to add image maps as well

				default:
					console.log('Problem: could not find data pair type. Did you send me a valid config type?');
			}

		},

		// config reference data interactions handler
		helpMessage: {

			push: function(message) {

				//push UI help messages to the DOM
				$('.helpBox').animate({'opacity': 0}, 200, function () {
				    $(this).html(message);
				}).animate({'opacity': .2}, 200);

			}

		},

		updateElementPosition: function(position, width, height, index) {

			// console.log(offsetLeft/180, offsetTop/180);

			console.log(position.left, index);


			// module.updateConfig( , 'fssc', $('#cat_fssc').val() );

			// var yposition = offsetTop/180,
			// xposition = offsetLeft/180;

			
			// $('#yposition').text(yposition);
			// $('#xposition').text(xposition);

		},

		//set jquery event listeners
		setTriggers: function() {

			//set height of canvas relative to height of user's screen
			$('#design').css('height', ($(window).height() - 100));

			//user can click button or hit enter on searchbar to load new category
			$('#render').click(function() {
				$('#fsscSearch').css('background', '#C7EDD1');
				module.switchFSSC();
			});
			$('#fsscSearch').keypress(function(e) {

				if (e.keyCode == 13) {
					$('#fsscSearch').css('background', '#C7EDD1');
					module.switchFSSC();
				}

			});

			//keep form submission from reloading page
			$("form").submit(function() {
				return false;
			});

			//add integrated content button
			$('#createIC').click(function() {
				module.createIntegratedContent();
			});

			$('#createIC').mouseover(function() {
				module.helpMessage.push('create a blank <b>brand spot<b> and place it on the design board.');
			});

			$('#createFeature').click(function() {
				module.createFeature();
			});

			$('#createFeature').mouseover(function() {
				var message = 'create a blank <b>feature<b> and place it on the design board.';
				module.helpMessage.push(message);
			});

			$('#deleteElement').click(function() {
				module.designBoard.deleteElement();
			});

			$('#deleteElement').mouseover(function() {
				module.helpMessage.push('delete selected element');
			});

			$('#modalFSSCButton').click(function(e) {

				var list, i;

				$('#modalFSSC').show();
				$('#modalFSSC').reveal({
					animation: 'fade',
					animationspeed: 300,
					closeonbackgroundclick: true,
					dismissmodalclass: 'close'
				});

				module.populateModalFSSCList();

				return false;

			});

			$('#modalFSSCButton').mouseover(function() {
				module.helpMessage.push('add to or edit the fssc value list');
			});

			$('#modalConfigButton').click(function(e) {

				var list, i;

				$('#modalConfig').show();
				$('#modalConfig').reveal({
					animation: 'fade',
					animationspeed: 300,
					closeonbackgroundclick: true,
					dismissmodalclass: 'close'
				});

				module.populateModalFSSCList();

				return false;

			});

			$('#modalConfigButton').mouseover(function() {
				module.helpMessage.push('bring up the config settings for selected element');
			});

			//toggle yes or no for creating new FSSC code
			$('#createFSSC').click(function() {

				$('#fsscConfirmation').toggle('fast');

			});

			//user creates a new fssc code
			$('#createFSSC_y').click(function() {

				var newFSSC = $('#fsscAdd').val();

				module.fsscList.push(newFSSC);

				module.populateModalFSSCList();

				$('#fsscAdd').val('');

				$('#fsscConfirmation').toggle('fast');

				module.loadSearchBar();

			});

			//user declines to create fssc code
			$('#createFSSC_n').click(function() {

				$('#fsscConfirmation').toggle('fast');
				$('#fsscAdd').val('');

			});

			//clear design board
			$('#clearBoard').click(function() {

				var r = confirm("Are you sure you want to clear the board?");

				if (r == true) {
					$('#board').html('');
				}

			});

			//undo last design board edit
			$('#undo').click(function() {

				//
				alert('cannot undo');

			});

			//enable/disable a feature
			$('#enabled').click(function() {

				if ($(this).hasClass('btn-success')) {
					$(this).removeClass('btn-success').addClass('btn-inverse').html('Disabled');
					enabled = false;
				} else {
					$(this).removeClass('btn-inverse').addClass('btn-success').html('Enabled');
					enabled = true;
				}

			});

			$('#export').click(function() {

				//export user's new config file to server for file writing
				module.data.export();

			});

			$('#saveCatConf').click(function() {

				//save new values from user modal
				module.updateConfig( module.currentElementIndex, 'fssc', $('#cat_fssc').val() );
				module.updateConfig( module.currentElementIndex, 'link', $('#cat_link').val() );
				module.updateConfig( module.currentElementIndex, 'img', $('#cat_img').val() );

				$('#configUpdate').toggle('slow');

				//fix this later
				var hideMessage =  $('#configUpdate').toggle('slow');

				window.setTimeout(hideMessage, 4000);

				//close modal
				// jQuery.event.trigger({ type : 'keypress', which : 27 });

			});

			$(document).ready(function() {

				//push welcome message when designboard loads
				function welcomeMessage() { 
					module.helpMessage.push('Hover over any tool for help. :)');
				}

				setTimeout(welcomeMessage,1000);

				// $('#categoryAttributes label').animate({'margin': '14px 0'});

			});

			//ADD MORE HERE

		}

	};
	return module;
});