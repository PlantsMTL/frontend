import './styles.css';

type Props = {
    text: string;
}

const SingleButton = ({ text }: Props) => {
    return (
        <button className="btn btn-primary btn-sgl">
            {text}
        </button>
    );
};
export default SingleButton;