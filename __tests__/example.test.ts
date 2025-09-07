import { describe, it, expect } from 'vitest'

describe('Math utilities', () => {
  it('should add two numbers correctly', () => {
    expect(2 + 2).toBe(4)
  })

  it('should multiply numbers correctly', () => {
    expect(3 * 4).toBe(12)
  })
})

describe('String utilities', () => {
  it('should concatenate strings', () => {
    expect('Hello' + ' ' + 'World').toBe('Hello World')
  })

  it('should check string length', () => {
    expect('vitest'.length).toBe(6)
  })
})