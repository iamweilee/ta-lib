import chai from 'chai'
const { assert } = chai

import kama from './index'

export default () => {
  describe('Input', () => {
    it('should throw error with wrong timeperiod param', () => {
      assert.throws(kama.bind(null, [], null, 2, 30), Error, 'Timeperiod should be a number!')
      assert.throws(kama.bind(null, [], 10, null, 30), Error, 'Fastestperiod should be a number!')
      assert.throws(kama.bind(null, [], 10, 2, null), Error, 'Slowestperiod should be a number!')
      assert.throws(kama.bind(null, [], 10, 30, 2), Error, 'Slowestperiod should be greater than Fastestperiod!')
    })
    it('should throw error with wrong values', () => {
      assert.throws(kama.bind(null, [null], 10, 2, 30), Error, 'Input value should be a number!')
    })
  })
  describe('output', () => {
    let input = [110.46, 109.80, 110.17, 109.82, 110.15, 109.31, 109.05, 107.94, 107.76, 109.24, 109.40, 108.50, 107.96, 108.55, 108.85, 110.44, 109.89, 110.70, 110.79, 110.22, 110.00, 109.27, 106.69, 107.07, 107.92, 107.95, 107.70, 107.97, 106.09, 106.03, 107.65, 109.54, 110.26, 110.38, 111.94, 113.59, 113.98, 113.91, 112.62, 112.20, 111.10, 110.18, 111.13, 111.55, 112.08, 111.95, 111.60, 111.39, 112.25]
    let output = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 109.24, 109.2449401027, 109.2164920628, 109.1173497271, 109.0981013497, 109.0893699897, 109.1240397816, 109.1375620425, 109.2768641880, 109.4364821622, 109.4568561308, 109.4650957038, 109.4611661631, 109.3904454767, 109.3165289843, 109.2924085897, 109.1836118065, 109.0777809170, 108.9498182979, 108.4229527845, 108.0157421419, 107.9967116931, 108.0068594910, 108.2595910986, 108.4817701114, 108.9119356847, 109.6733975003, 110.4947396768, 111.1076504234, 111.4621585220, 111.6091591514, 111.5663160050, 111.5491473489, 111.5424542186, 111.5426125377, 111.5456682987, 111.5658262875, 111.5688287983, 111.5522353157, 111.5595436548]
    let result = kama(input, 10, 2, 30)

    it('should return an array', () => {
      assert.isTrue(Array.isArray(result))
    })
    it('should return correct values', () => {
      for (let i = 0; i < input.length; ++i) {
        let delta = Math.abs(result[i] - output[i])
        let equal = isNaN(delta) ? true : delta < 0.0001
        assert.isTrue(equal)
      }
    })
    it('should skip NaN', () => {
      let input = [NaN, 110.46, 109.80, 110.17, 109.82, 110.15, 109.31, 109.05, 107.94, 107.76, 109.24, 109.40, 108.50, 107.96, 108.55, 108.85, 110.44, 109.89, 110.70, 110.79, 110.22, 110.00, 109.27, 106.69, 107.07, 107.92, 107.95, 107.70, 107.97, 106.09, 106.03, 107.65, 109.54, 110.26, 110.38, 111.94, 113.59, 113.98, 113.91, 112.62, 112.20, 111.10, 110.18, 111.13, 111.55, 112.08, 111.95, 111.60, 111.39, 112.25]
      let output = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 109.24, 109.2449401027, 109.2164920628, 109.1173497271, 109.0981013497, 109.0893699897, 109.1240397816, 109.1375620425, 109.2768641880, 109.4364821622, 109.4568561308, 109.4650957038, 109.4611661631, 109.3904454767, 109.3165289843, 109.2924085897, 109.1836118065, 109.0777809170, 108.9498182979, 108.4229527845, 108.0157421419, 107.9967116931, 108.0068594910, 108.2595910986, 108.4817701114, 108.9119356847, 109.6733975003, 110.4947396768, 111.1076504234, 111.4621585220, 111.6091591514, 111.5663160050, 111.5491473489, 111.5424542186, 111.5426125377, 111.5456682987, 111.5658262875, 111.5688287983, 111.5522353157, 111.5595436548]
      let result = kama(input, 10, 2, 30)
      for (let i = 0; i < input.length; ++i) {
        let delta = Math.abs(result[i] - output[i])
        let equal = isNaN(delta) ? true : delta < 0.00001
        assert.isTrue(equal)
      }
    })

  })
}