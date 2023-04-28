import { render, screen } from "@testing-library/react";
import SingleButton from "..";

test('ButtonIcon should render button with given text', () => {

    // Arrange
    const expectText = "login";

    //Action
    render(
        <SingleButton text={expectText} />
    );
    // screen.debug();
    //Assertion
    expect(screen.getByText(expectText)).toBeInTheDocument();

});