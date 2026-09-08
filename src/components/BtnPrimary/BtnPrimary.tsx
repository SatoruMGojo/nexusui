import './BtnPrimary.css';

interface Props {
    content: string;
}

const BtnPrimary = ({ content }: Props) => (
    <button className="btn btn--primary" type="button">
        {content}
    </button>
);

export default BtnPrimary;