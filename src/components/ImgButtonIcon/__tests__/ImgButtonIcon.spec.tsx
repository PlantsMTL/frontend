import { render, screen } from "@testing-library/react";
import ImgButtonIcon from "..";

test('ImgButtonIcon should render buttonFacebook with given text and img', () => {

    // Arrange
    const expectText = "Facebook";

    //Action
    render(
        <ImgButtonIcon iconName={expectText} />
    );
    // screen.debug();
    //Assertion
    expect(screen.getByText(expectText)).toBeInTheDocument();
    expect(screen.getByTestId("face-icon")).toBeInTheDocument();

});

test('ImgButtonIcon should render buttonGoogle with given text and img', () => {

    // Arrange
    const expectText = "Google";

    //Action
    render(
        <ImgButtonIcon iconName={expectText} />
    );
    // screen.debug();
    //Assertion
    expect(screen.getByText(expectText)).toBeInTheDocument();
    expect(screen.getByTestId("google-icon")).toBeInTheDocument();

});
test('ImgButtonIcon should render buttonGithub with given text and img', () => {

    // Arrange
    const expectText = "Github";

    //Action
    render(
        <ImgButtonIcon iconName={expectText} />
    );
    // screen.debug();
    //Assertion
    expect(screen.getByText(expectText)).toBeInTheDocument();
    expect(screen.getByTestId("git-icon")).toBeInTheDocument();

});