
import React from 'react'
import { render } from '@testing-library/react'
import BubblePage from './BubblePage'
import axios from 'axios'
import axiosWithAuth from '../components/utils/axiosWithAuth'

jest.mock('react')
jest.mock('axios')

describe('I HATE THIS AS WELL', () => {
	test('Gets and renders bubbles', async () => {
		render(<BubblePage />)
		const data = [ { id: 1 }, { id: 2 } ]
		axios.create.mockImplementationOnce(() => Promise.resolve(data))
		await expect(axiosWithAuth()).resolves.toEqual(data)
	})
})
