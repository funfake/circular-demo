import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

// Simple test component
function Button({ children }: { children: React.ReactNode }) {
  return <button>{children}</button>
}

describe('Button Component', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>)
    
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })

  it('renders with children', () => {
    render(<Button>Test Button</Button>)
    
    expect(screen.getByText('Test Button')).toBeInTheDocument()
  })
})