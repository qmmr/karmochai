define(['jquery', 'lodash'], function ($, _) {
	var testArray = [0, 1, '', 2, null, 3, undefined, 4, NaN, 5, false]

	describe('Falsy values Array test', function() {
		var truthyValuesArray = _.compact(testArray)

		it('should have 11 values', function() {
			expect(testArray).to.have.length(11)
		})

		it('should have only truthy values', function() {
			expect(truthyValuesArray).to.have.length(5)
			expect(truthyValuesArray).to.include(1)
			expect(truthyValuesArray).to.include(2)
			expect(truthyValuesArray).to.include(3)
			expect(truthyValuesArray).to.include(4)
			expect(truthyValuesArray).to.include(5)
		})

		it('should not have "falsy" values', function() {
			expect(truthyValuesArray).not.to.include(false)
			expect(truthyValuesArray).not.to.include(NaN)
			expect(truthyValuesArray).not.to.include(null)
			expect(truthyValuesArray).not.to.include('')
			expect(truthyValuesArray).not.to.include(0)
			expect(truthyValuesArray).not.to.include(undefined)
		})
	})
})
