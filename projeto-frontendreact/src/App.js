import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Carrinho from "./componentes/Carrinho/Carrinho";
import Catalogo from "./componentes/Catalogo/Catalogo";

function App() {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    const novoCarrinho = [...carrinho, produto];
    setCarrinho(novoCarrinho);
  };

  const removerDoCarrinho = (indexProduto) => {
    const carrinhoAtualizado = [...carrinho];
    carrinhoAtualizado.splice(indexProduto, 1);

    setCarrinho(carrinhoAtualizado);
  };

  return (
    <div className="App">
      <h1 className="nome-loja">NAVE STORE</h1>

      <h1 className="subtitulo">FANTASIAS ESPACIAIS</h1>
      <Banner />

      <Catalogo carrinho={carrinho} adicionarAoCarrinho={adicionarAoCarrinho} />

      <Carrinho itens={carrinho} removerItem={removerDoCarrinho} />
    </div>
  );
}

export default App;
