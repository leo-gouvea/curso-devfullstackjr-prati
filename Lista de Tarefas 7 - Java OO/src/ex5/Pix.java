package ex5;

import java.math.BigDecimal;

public class Pix extends FormaPagamento {
    private String chave;

    public Pix(String chave) {
        this.chave = chave;
    }

    @Override
    public void validarPagamento() throws PagamentoInvalidoException {
        if (chave == null || chave.isBlank())
            throw new PagamentoInvalidoException("Chave PIX inválida!");
    }

    @Override
    public void processarPagamento(BigDecimal valor) throws PagamentoInvalidoException {
        validarPagamento();
        System.out.println("Pix de R$" + valor + " enviado para " + chave);
    }
}