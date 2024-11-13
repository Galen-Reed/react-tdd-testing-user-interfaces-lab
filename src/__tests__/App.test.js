import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import App from "../App";

describe("App component", () => {
    test("displays an image with alt text 'A picture of Galen'", () => {
        render(<App />);
        const img = screen.getByAltText('A picture of Galen');
        expect(img).toBeInTheDocument();
        expect(img).toHaveAttribute('src', 'path/to/your-image.jpg');
    });
    
    test("displays an H2 heading with the text 'About Me'", () => {
        render(<App />)
        const heading = screen.getByRole('heading', { level: 2, name: /about me/i });
        expect(heading).toBeInTheDocument();
    });
    
    test("displays a paragraph for my biography", () => {
        render(<App />);
        const paragraph = screen.getByText(/your biography text here/i);
        expect(paragraph).toBeInTheDocument();
    });
    test("has a link to GitHub with the correct href", () => {
        render(<App />);
        const link = screen.getByRole('link', {name: /github/i});
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', 'https://github.com/Galen-Reed');
    });
    test("has a link to GitHub with the correct href", () => {
        render(<App />);
        const linkedin = screen.getByRole("link", {name: /linkedin/i });
        expect(linkedin).toBeInTheDocument();
        expect(linkedin).toHaveAttribute('href', 'https://www.linkedin.com/in/galen-reed-5164661b9/');
    });
})


