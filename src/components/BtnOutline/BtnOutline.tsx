import './BtnOutline.css';

interface Props {
    content: string;
}

const BtnOutline = ({ content }: Props) => (
    <button className="btn btn--outline" type="button">
        {content}
    </button>
);

export default BtnOutline;