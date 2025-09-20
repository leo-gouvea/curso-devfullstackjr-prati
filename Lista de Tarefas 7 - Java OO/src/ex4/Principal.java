/*Exercício 4 — Polimorfismo com Interface (IMeioTransporte)
Defina a interface IMeioTransporte com acelerar() e frear(). Implemente Carro,
Bicicleta e Trem, cada um com lógica própria de variação de velocidade e limites.
No método principal, crie uma lista de IMeioTransporte, percorra e invoque
acelerar()/frear() demonstrando polimorfismo. Trate operações inválidas com
exceções apropriadas.*/

package ex4;

import java.util.ArrayList;
import java.util.List;

public class Principal {
    public static void main(String[] args) {
        List<MeioTransporte> meiosDeTransporte = new ArrayList<>();

        meiosDeTransporte.add(new Carro());

        for (MeioTransporte meioTransporte : meiosDeTransporte) {
            try {
                meioTransporte.acelerar();
            } catch (IllegalStateException e) {
                System.out.println(e.getMessage());
            }
        }
    }
}