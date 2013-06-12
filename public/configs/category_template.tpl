{{#feature}}
	<div class="catFeature {{gridDimensions}} {{catFSSC}} {{#integratedContent}}intContent{{/integratedContent}}" data-position="{{dataPosition}}" data-size="{{dataSize}}">
	    <a href="{{link}}"><img src="{{img}}" usemap="#{{useMap}}" /></a>
	</div>
	
	{{#image_map}}
		{{#map}}
			<map name="{{useMap}}" id="{{useMap}}">
				<area shape="{{map_type}}" coords="{{coords}}" href="#" data-sku="{{data_sku}}" data-tag="{{data_tag}}" />
			</map>
		{{/map}}
		{{#mapSmall}}
			<map name="{{useMap}}_small" id="{{use_map}}_small">
				<area shape="{{map_type}}" coords="{{coords}}" href="#" data-sku="{{data_sku}}" data-tag="{{data_tag}}" />
			</map>
		{{/mapSmall}}
	{{/image_map}}

{{/feature}}