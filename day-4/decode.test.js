import { decode } from './decode'
import { describe, it, expect } from 'vitest'

describe('decode', () => {
  // Given a message without parentheses, it should return the same message.
  it('should return the same message when there are no parentheses', () => {
    const message = 'hello world'
    const result = decode(message)
    expect(result).toEqual(message)
  })

  // Given a message with one pair of parentheses, it should reverse the characters within the parentheses and remove them.
  it('should reverse the characters within one pair of parentheses', () => {
    const message = 'hola (odnum)'
    const result = decode(message)
    expect(result).toEqual('hola mundo')
  })

  // Given a message with two pairs of parentheses, it should reverse the characters within the innermost parentheses first, then the outermost ones, and remove them.
  it('should reverse the characters within two pairs of parentheses', () => {
    const message = '(olleh) (dlrow)!'
    const result = decode(message)
    expect(result).toEqual('hello world!')
  })

  // Given an empty message, it should return an empty string.
  it('should return an empty string when the message is empty', () => {
    const message = ''
    const result = decode(message)
    expect(result).toEqual('')
  })

  // Given a message with only one opening parenthesis, it should return the same message.
  it('should return the same message when there is only one opening parenthesis', () => {
    const message = 'hello (world'
    const result = decode(message)
    expect(result).toEqual(message)
  })

  // Given a message with only one closing parenthesis, it should return the same message.
  it('should return the same message when there is only one closing parenthesis', () => {
    const message = 'hello) world'
    const result = decode(message)
    expect(result).toEqual(message)
  })
})
