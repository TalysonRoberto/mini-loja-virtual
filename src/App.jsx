import { useEffect, useState } from 'react';
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css'; // Tema PrimeReact
import 'primereact/resources/primereact.min.css'; // Estilos PrimeReact
import 'primeicons/primeicons.css'; // Ícones PrimeReact
import 'primeflex/primeflex.css'; // PrimeFlex para utilitários CSS

// Se as cores não estiver funcionando direito importa esse , ou procura direto na pasta onde esta as variáveis css
import 'primeflex/themes/primeone-light.css';
import ProductList from './Componentes/ProductList';
import { API } from './services';

function App() {
  const [products, setProducts] = useState([]);

  async function buscarProdutos() {
    const request = await API.get('/products'); // o await ja faz o primeiro then
    setProducts(request.data);
  }

  useEffect(() => {
    buscarProdutos();
  }, []);

  return (
    <>
      <header className="bg-purple-500 py-4 px-5 text-white flex align-items-center justify-content-between">
        <i className="pi pi-shop" style={{ fontSize: '3rem' }}></i>
        <p className="text-3xl">Mini Loja Virtual</p>
      </header>
      <div className="w-full bg-purple-50 justify-content-center gap-5 p-5 flex flex-wrap">
        {products.map((product) => (
          <ProductList
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            rating={product.rating}
            image={product.image}
          />
        ))}
      </div>
    </>
  );
}

export default App;
