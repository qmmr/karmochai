define(['lodash'], function (_) {
	var truthies = _.compact([0, undefined, 1, null, 2, '', 3, false, 4, NaN, 5])

	return {
		truthyValues: truthies
	}
})
