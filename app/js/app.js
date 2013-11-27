define(['lodash'], function (_) {
	var mixedArray = [0, 1, '', 2, null, 3, undefined, 4, NaN, 5, false]
	return _.compact(mixedArray)
})
