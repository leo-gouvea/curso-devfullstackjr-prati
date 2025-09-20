package ex6;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Carrinho {
    private final List<ItemCarrinho> itens;

    public Carrinho(List<ItemCarrinho> itens) {
        this.itens = new ArrayList<>(itens);
    }

    public List<ItemCarrinho> getItens() {
        return Collections.unmodifiableList(itens);
    }

    public Carrinho adicionar(ItemCarrinho item) {
        List<ItemCarrinho> novaLista = new ArrayList<>(itens);
        novaLista.add(item);
        return new Carrinho(novaLista);
    }
}
