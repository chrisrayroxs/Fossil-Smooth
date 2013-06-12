{{#categories}}

	{{#feature}}
		<div class="catFeature {{gridDimensions}} {{catFSSC}} {{#integratedContent}}intContent{{/integratedContent}}" data-position="{{dataPosition}}" data-size="{{dataSize}}">
		    <a href="{{link}}"><img src="{{img}}" usemap="#{{useMap}}" /></a>
		</div>
		
		{{#image_map}}
			<map name="{{useMap}}" id="{{useMap}}">
				{{#maps}}
				<area shape="{{map_type}}" coords="{{coords}}" href="#" data-sku="{{data_sku}}" data-tag="{{data_tag}}" />
				{{/maps}}
			</map>

			<map name="{{useMap}}_small" id="{{use_map}}_small">
				{{#maps}}
				<area shape="{{map_type}}" coords="{{small_coords}}" href="#" data-sku="{{data_sku}}" data-tag="{{data_tag}}" />
				{{/maps}}
			</map>
		{{/image_map}}

	{{/feature}}

{{/categories}}