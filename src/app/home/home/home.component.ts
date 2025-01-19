import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AboutComponent } from "../../about/about.component";
import { FooterComponent } from "../../footer/footer.component";
import { SkillsComponent } from "../../skills/skills.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent, FooterComponent, SkillsComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  isLoading = true; // Variável para controlar a exibição da tela de carregamento

  ngOnInit(): void {
    // Lógica inicial, se necessário
  }

  ngAfterViewInit(): void {
    // Garantir que o DOM esteja disponível
    if (typeof document !== 'undefined') {
      setTimeout(() => {
        // Esconde a tela de carregamento (logo piscando) após 2 segundos
        this.isLoading = false;

        // Exibe a mensagem de boas-vindas após a tela de carregamento
        const messageElement = document.getElementById("message");
        if (messageElement) {
          messageElement.style.display = "block"; // Torna a mensagem visível
        }

        // Adiciona uma animação para a mensagem desaparecer após 5 segundos
        setTimeout(() => {
          if (messageElement) {
            messageElement.classList.add("fade-out");
          }
        }, 5000); // 5 segundos após exibir a mensagem
      }, 2000); // 2 segundos para exibir a tela de carregamento (logo piscando)
    }
  }
}
