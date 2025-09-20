package ex5;

import java.math.BigDecimal;

public class Boleto extends FormaPagamento {
    private String codigo;

    public Boleto(String codigo) {
        this.codigo = codigo;
    }

    @Override
    public void validarPagamento() throws PagamentoInvalidoException {
        if (codigo == null || codigo.length() < 10)
            throw new PagamentoInvalidoException("Código de boleto inválido!");
    }

    @Override
    public void processarPagamento(BigDecimal valor) throws PagamentoInvalidoException {
        validarPagamento();
        System.out.println("Boleto de R$" + valor + " gerado com código " + codigo);
    }
}