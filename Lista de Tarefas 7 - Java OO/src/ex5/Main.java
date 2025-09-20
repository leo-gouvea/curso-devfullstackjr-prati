/*
Implemente a classe abstrata FormaPagamento com validarPagamento() e
processarPagamento(BigDecimal valor). Crie CartaoCredito, Boleto e Pix com
validações específicas (ex.: número do cartão, formato de boleto, chave Pix). Simule
o uso de cada forma por polimorfismo e trate erros de validação com exceções
específicas (ex.: PagamentoInvalidoException).
 */

package ex5;

import java.math.BigDecimal;

public class Main {
    public static void main(String[] args) {
        try {
            FormaPagamento cartao = new CartaoCredito("1234567812345678");
            cartao.processarPagamento(new BigDecimal("250.00"));

            FormaPagamento boleto = new Boleto("12345678901");
            boleto.processarPagamento(new BigDecimal("500.00"));

            FormaPagamento pix = new Pix("email@teste.com");
            pix.processarPagamento(new BigDecimal("75.00"));
        } catch (PagamentoInvalidoException e) {
            System.out.println("Erro: " + e.getMessage());
        }
    }
}

