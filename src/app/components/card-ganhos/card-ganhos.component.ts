import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-ganhos',
  templateUrl: './card-ganhos.component.html',
  styleUrls: ['./card-ganhos.component.scss'],
})
export class CardGanhosComponent implements OnInit {

  public cardGanhos: Array<{
    titulo: string;
    valorConsulta: number;
    textoConsulta: string;
    percentualIU: string;
    textopercIU: string;
    percentuaIQA: string;
    textopercIQA: string;
    percentuaIndicadoresIndividuais: string;
    textoPerIndicadoresIndividuais: string;
    valorTotal: number;
    textoValorTotal: string;
  }> = [
    {
      titulo: "Valor consulta + bônus total",
      valorConsulta: 90,
      textoConsulta: "valor consulta - renda ampla",
      percentualIU: "6% - IU",
      textopercIU: "bônus sinistralidade",
      percentuaIQA: "6% - IQA",
      textopercIQA: "bônus máximo dos indicadores gerais",
      percentuaIndicadoresIndividuais: "18% - I.I",
      textoPerIndicadoresIndividuais: "bônus indicadores individuais",
      valorTotal: 117,
      textoValorTotal: "bônus indicadores individuais",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
