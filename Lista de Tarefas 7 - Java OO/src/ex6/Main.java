/*
Crie o objeto de valor imutável Dinheiro (valor BigDecimal e enum Moeda) com
equals/hashCode coerentes. Modele Produto, ItemCarrinho e um Carrinho cuja
lista de itens seja imutável: operações de adicionar/remover/aplicar cupom retornam
um novo carrinho. Valide quantidades > 0, proíba valores negativos e limite cupons
a 30% com arredondamento bancário. Demonstre o fluxo completo em testes.
*/

package ex6;

import java.math.BigDecimal;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        Produto p1 = new Produto("Notebook", new Dinheiro(new BigDecimal("3500"), Moeda.BRL));
        Produto p2 = new Produto("Mouse", new Dinheiro(new BigDecimal("150"), Moeda.BRL));

        Carrinho carrinho = new Carrinho(List.of());
        carrinho = carrinho.adicionar(new ItemCarrinho(p1, 1));
        carrinho = carrinho.adicionar(new ItemCarrinho(p2, 2));

        carrinho.getItens().forEach(i ->
                System.out.println(i.getProduto().getNome() + " x" + i.getQuantidade()));
    }
}