package ex8;

import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        Pedido pedido = new Pedido("12345-000", new BigDecimal("200"), new Sedex());
        System.out.println("Frete Sedex: R$" + pedido.calcularFrete());

        pedido.setEstrategia(new Pac());
        System.out.println("Frete PAC: R$" + pedido.calcularFrete());

        pedido.setEstrategia(new RetiradaNaLoja());
        System.out.println("Retirada: R$" + pedido.calcularFrete());

        // Lambda: frete grátis acima de 100
        pedido.setEstrategia(p -> p.getValor().compareTo(new BigDecimal("100")) > 0
                ? BigDecimal.ZERO : new BigDecimal("20"));
        System.out.println("Frete Promocional: R$" + pedido.calcularFrete());
    }
}