// Generated by CodiumAI
import {
  it, describe, expect
} from 'vitest'

import {
  findNaughtyStep
} from './findNaughtyStep'
describe('findNaughtyStep', () => {
  // Returns an empty string when the original and modified sequences are the same.
  it('should return an empty string when the original and modified sequences are the same', () => {
    const original = 'abcd'
    const modified = 'abcd'
    const result = findNaughtyStep(original, modified)
    expect(result).toEqual('')
  })

  // Returns the first extra step that was added in the modified sequence.
  it('should return the first extra step that was added in the modified sequence', () => {
    const original = 'abcd'
    const modified = 'abcde'
    const result = findNaughtyStep(original, modified)
    expect(result).toEqual('e')
  })

  // Returns the first step that was removed in the modified sequence.
  it('should return the first step that was removed in the modified sequence', () => {
    const original = 'stepfor'
    const modified = 'stepor'
    const result = findNaughtyStep(original, modified)
    expect(result).toEqual('f')
  })

  // Returns an empty string when both original and modified sequences are empty.
  it('should return an empty string when both original and modified sequences are empty', () => {
    const original = ''
    const modified = ''
    const result = findNaughtyStep(original, modified)
    expect(result).toEqual('')
  })

  // Returns the first step in the modified sequence when the original sequence is empty.
  it('should return the first step in the modified sequence when the original sequence is empty', () => {
    const original = ''
    const modified = 'abcde'
    const result = findNaughtyStep(original, modified)
    expect(result).toEqual('a')
  })

  // Returns the last step in the modified sequence when the modified sequence is longer than the original sequence.
  it('should return the last step in the modified sequence when the modified sequence is longer than the original sequence', () => {
    const original = 'abcde'
    const modified = 'abcdef'
    const result = findNaughtyStep(original, modified)
    expect(result).toEqual('f')
  })
})
