package ex8;

import java.math.BigDecimal;

public class Pac implements CalculadoraFrete {
    @Override
    public BigDecimal calcular(Pedido pedido) {
        return new BigDecimal("15.00");
    }
}