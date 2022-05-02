import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from '../utils/context'
import Home from './Home'

describe('The Home component',() => {
    it('Should render title',()=>{
        render(
            <MemoryRouter>
                <ThemeProvider>
                    <Home/>
                </ThemeProvider>
            </MemoryRouter>
        )
        expect(screen.getByText(
            'Repérez vos besoins, on s’occupe du reste,avec les meilleurs talents')
        ).toBeTruthy()
        expect(screen.getByRole('heading',{
                level:2,
                text:'Repérez vos besoins, on s’occupe du reste,avec les meilleurs talents',
            }
        )).toBeTruthy()
    })
})