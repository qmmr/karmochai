define(['jquery', 'lodash', 'js/app'], function ($, _, mixedArray) {
	var originalArray = [0, 1, '', 2, null, 3, undefined, 4, NaN, 5, false]

	describe('Falsy values Array test', function() {

		it('should have only truthy values', function() {
			expect(mixedArray).to.have.length(5)
			expect(mixedArray).to.include(1)
			expect(mixedArray).to.include(2)
			expect(mixedArray).to.include(3)
			expect(mixedArray).to.include(4)
			expect(mixedArray).to.include(5)
		})

		it('should not have "falsy" values', function() {
			expect(mixedArray).not.to.include(false)
			expect(mixedArray).not.to.include(NaN)
			expect(mixedArray).not.to.include(null)
			expect(mixedArray).not.to.include('')
			expect(mixedArray).not.to.include(0)
			expect(mixedArray).not.to.include(undefined)
		})

		it('should have exact params', function() {
			expect(mixedArray).to.deep.equal([1,2,3,4,5])
		})
	})
})
