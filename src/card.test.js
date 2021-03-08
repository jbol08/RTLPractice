import { render } from "@testing-library/react";
import Card from './Card';

//smoke test
it('renders the div without crashing', () => {
    render (<Card />)
})

//snapshot test
it('takes a snapshot of the initial setup', () => {
    const { asFragment } = render(<Card />);
    expect(asFragment()).toMatchSnapshot()
})
