import './styles.css';

type Props = {
    text: string;
}

const SingleButton = ({ text }: Props) => {
    return (
        <button className="btn btn-primary btn-sgl">
            <h4>
                {text}
            </h4>
        </button>
    );
};
export default SingleButton;