import { Card } from 'primereact/card';
import Header from './Header';

const ProductList = ({
  rating,
  image,
  title,
  category,
  description,
  price,
}) => {
  // Formatar moeda
  const formatarMoeda = (valor) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(valor);
  };

  return (
    <>
      <div className="w-19rem">
        <Card
          header={<Header rating={rating} image={image} />}
          title={
            <div className="text-overflow-ellipsis overflow-hidden">
              {title}
            </div>
          }
          subTitle={category}
          className="w-19rem white-space-nowrap overflow-hidden"
        >
          <p
            className="white-space-normal overflow-hidden"
            style={{
              display: '-webkit-box',
              WebkitLineClamp: '3',
              WebkitBoxOrient: 'vertical',
            }}
          >
            {description}
          </p>
          <h2 className="mt-4 text-red-500	font-medium">
            {formatarMoeda(price)}{' '}
          </h2>
        </Card>
      </div>
    </>
  );
};

export default ProductList;
