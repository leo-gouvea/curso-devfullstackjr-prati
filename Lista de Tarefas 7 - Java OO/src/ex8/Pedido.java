package ex8;

import java.math.BigDecimal;

public class Pedido {
    private String cep;
    private BigDecimal valor;
    private CalculadoraFrete estrategia;

    public Pedido(String cep, BigDecimal valor, CalculadoraFrete estrategia) {
        this.cep = cep;
        this.valor = valor;
        this.estrategia = estrategia;
    }

    public void setEstrategia(CalculadoraFrete estrategia) {
        this.estrategia = estrategia;
    }

    public BigDecimal calcularFrete() {
        return estrategia.calcular(this);
    }

    public BigDecimal getValor() { return valor; }
    public String getCep() { return cep; }
}