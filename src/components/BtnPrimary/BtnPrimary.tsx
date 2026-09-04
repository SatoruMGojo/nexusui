import './BtnPrimary.css';

interface Props {
    price: number;
}

const BtnPrimary = ({ price }: Props) => (
    <button className="btn btn--primary" type="button">
        PLAY NOW - {price}
    </button>
);

export default BtnPrimary;