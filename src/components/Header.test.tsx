import { render } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Header from './Header'

describe('Header', () => {
  it('WHEN user see the header IT should render correctly', () => {
    // GIVEN
    // A Header component

    // WHEN
    const { container } = render(<Header />)

    // THEN
    expect(container).toMatchSnapshot()
  })
})
