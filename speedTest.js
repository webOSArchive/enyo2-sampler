(function() {
	enyo.log("Rendering main app...");
	var renderBenchmark = enyo.dev.bench({name: "Render Main App", autostart: false, logging: false, average: true});
	var samplerApp, i, j;
	for (i = 0; i < 100; i++) {
		renderBenchmark.start();
		samplerApp = new App({
			preloadedManifest: {
				"sourcePath":"",
				"name": "Enyo 2 Sampler",
				"samples": [
					{"name": "Enyo Core", "ns":"enyo.sample", "loadPackages":"$enyo/samples", "samples": [
						{"name": "Platform", "path":"$enyo/samples/PlatformSample"},
						{"name": "Ajax", "samples": [
							{"name": "Ajax", "path":"$enyo/samples/AjaxSample"},
							{"name": "JSON-P", "path":"$enyo/samples/JsonpSample"},
							{"name": "WebService Component", "path":"$enyo/samples/WebServiceSample"}
						]},
						{"name": "Scroller", "path":"$enyo/samples/ScrollerSample"},
						{"name": "Repeater", "path":"$enyo/samples/RepeaterSample"},
						{"name": "Gestures", "path":"$enyo/samples/GestureSample"},
						{"name": "Drawer", "path":"$enyo/samples/DrawerSample"}
					]},
					{"name": "Onyx", "ns":"onyx.sample", "loadPackages":"$lib/onyx $lib/onyx/samples", "samples": [
						{"name": "Toolbars", "path":"$lib/onyx/samples/ToolbarSample", "css":"sample"},
						{"name": "Basic Buttons", "path":"$lib/onyx/samples/ButtonSample", "css":"sample"},
						{"name": "Grouped Buttons", "path":"$lib/onyx/samples/ButtonGroupSample", "css":"sample"},
						{"name": "Icon Buttons", "path":"$lib/onyx/samples/IconButtonSample", "css":"sample"},
						{"name": "Toggle Buttons", "path":"$lib/onyx/samples/ToggleButtonSample", "css":"sample"},
						{"name": "Checkboxes", "path":"$lib/onyx/samples/CheckboxSample", "css":"sample"},
						{"name": "Inputs", "path":"$lib/onyx/samples/InputSample", "css":"sample"},
						{"name": "Group Boxes", "path":"$lib/onyx/samples/GroupboxSample", "css":"sample"},
						{"name": "Progress Bars", "path":"$lib/onyx/samples/ProgressSample", "css":"sample"},
						{"name": "Sliders", "path":"$lib/onyx/samples/SliderSample", "css":"sample"},
						{"name": "Menus", "path":"$lib/onyx/samples/MenuSample", "css":"sample"},
						{"name": "Pickers", "path":"$lib/onyx/samples/PickerSample", "css":"sample"},
						{"name": "DatePicker", "path":"$lib/onyx/samples/DatePickerSample", "css":"sample"},
						{"name": "TimePicker", "path":"$lib/onyx/samples/TimePickerSample", "css":"sample"},
						{"name": "Tooltips", "path":"$lib/onyx/samples/TooltipSample", "css":"sample"},
						{"name": "Spinners", "path":"$lib/onyx/samples/SpinnerSample", "css":"sample"},
						{"name": "Popups", "path":"$lib/onyx/samples/PopupSample", "css":"sample"},
						{"name": "ContextualPopups", "path":"$lib/onyx/samples/ContextualPopupSample", "css":"sample"}
					]},
					{"name": "Layout", "ns":"enyo.sample", "loadPackages":"$lib/layout", "samples": [
						{"name": "Fittable Layouts", "loadPackages":"$lib/layout/fittable/samples", "samples": [
							{"name": "Basic sample", "path":"$lib/layout/fittable/samples/FittableSample", "css":"sample"},
							{"name": "Details", "path":"$lib/layout/fittable/samples/FittableDescription", "css":"sample"},
							{"name": "Example app layout 1", "path":"$lib/layout/fittable/samples/FittableAppLayout1", "css":"sample"},
							{"name": "Example app layout 2", "path":"$lib/layout/fittable/samples/FittableAppLayout2", "css":"sample"},
							{"name": "Example app layout 3", "path":"$lib/layout/fittable/samples/FittableAppLayout3", "css":"sample"},
							{"name": "Example app layout 4", "path":"$lib/layout/fittable/samples/FittableAppLayout4", "css":"sample"}
						]},
						{"name": "List", "ns":"enyo.sample", "loadPackages":"$lib/layout/list/samples", "samples": [
							{"name": "Basic list", "path":"$lib/layout/list/samples/ListBasicSample"},
							{"name": "Pulldown list (Twitter)", "path":"$lib/layout/list/samples/ListPulldownSample"},
							{"name": "Lazy-loading list (Flickr)", "path":"$lib/layout/panels/samples/PanelsFlickrSample"},
							{"name": "Editable list (Contacts)", "path":"$lib/layout/list/samples/ListContactsSample"},
							{"name": "Around list", "path":"$lib/layout/list/samples/ListAroundSample"},
							{"name": "Swipeable-Reorderable list", "path":"$lib/layout/list/samples/ListLanguagesSample"}
						]},
						{"name": "Panels", "ns":"enyo.sample", "loadPackages":"$lib/layout/panels/samples", "samples": [
							{"name": "Arranger sampler", "path":"$lib/layout/panels/samples/PanelsSample"},
							{"name": "Sliding app example", "path":"$lib/layout/panels/samples/PanelsSlidingSample"},
							{"name": "Flickr app example", "path":"$lib/layout/panels/samples/PanelsFlickrSample"}
						]},
						{"name": "Tree", "ns":"enyo.sample", "loadPackages":"$lib/layout/tree/samples", "path":"$lib/layout/tree/samples/TreeSample"},
						{"name": "Image View", "loadPackages":"$lib/layout/imageview/samples", "path":"$lib/layout/imageview/samples/ImageViewSample"},
						{"name": "Image Carousel", "loadPackages":"$lib/layout/imageview/samples", "path":"$lib/layout/imageview/samples/ImageCarouselSample"},
						{"name": "Flex", "loadPackages":"$lib/layout/flex/samples", "path":"$lib/layout/flex/samples/FlexLayoutSample"}
					]},
					{"name": "Canvas", "ns":"enyo.sample", "loadPackages":"$lib/canvas $lib/canvas/samples", "samples": [
						{"name": "Canvas primitives", "path":"$lib/canvas/samples/CanvasPrimitivesSample"},
						{"name": "Bouncing balls", "path":"$lib/canvas/samples/CanvasBallsSample"}
					]},
					{"name": "Globalization", "ns":"g11n.sample", "loadPackages":"$lib/g11n $lib/g11n/samples $lib/onyx/samples", "samples": [
						{"name": "CSS", "path":"$lib/g11n/samples/LocalizedCssSample", "css":"sample"},
						{"name": "Date", "path":"$lib/g11n/samples/DateSample", "css":"sample"},
						{"name": "Duration", "path":"$lib/g11n/samples/DurationSample", "css":"sample"},
						{"name": "Name", "path":"$lib/g11n/samples/NameSample", "css":"sample"},
						{"name": "Number", "path":"$lib/g11n/samples/NumberSample", "css":"sample"},
						{"name": "Phone", "path":"$lib/g11n/samples/PhoneSample", "css":"sample"},
						{"name": "String", "path":"$lib/g11n/samples/StringSample", "css":"sample"}
					]}
				]
			}
		}).renderInto(document.body);
		renderBenchmark.stop();
	}

	var mockTestController = {
		populateSampleList: TestController.prototype.populateSampleList,
		sampleList: []
	};
	mockTestController.populateSampleList(samplerApp.samples.samples);
	var samples = mockTestController.sampleList;

	var renderAllSamples = enyo.dev.bench({name: "Render All Samples", autostart: true, logging: false, average: true});
	var renderTestNames = [];
	for (i = 0; i < samples.length; i++) {
		var sample = samples[i];
		var kindNamespace = sample.ns || "enyo.sample";
		var kindName = kindNamespace + '.' + sample.path.substring(sample.path.lastIndexOf("/") + 1);
		var testName = "Render Sample: " + kindName;
		renderTestNames.push(testName);
		enyo.log("Rendering sample: " + kindName);
		var renderSample = enyo.dev.bench({name: testName, autostart: false, logging: false, average: true});
		for (j = 0; j < 25; ++j) {
			renderSample.start();
			enyo.create({kind: kindName});
			renderSample.stop();
		}
	}
	renderAllSamples.stop();

	total.stop();

	for (i = 0; i < renderTestNames.length; i++) {
		enyo.dev.report(renderTestNames[i]);
	}
	enyo.dev.report("Framework Load & Initialize");
	enyo.dev.report("Render Main App");
	enyo.dev.report("Render All Samples");
	enyo.dev.report("Total");

	document.body.innerText = console.getBuffer();
})();