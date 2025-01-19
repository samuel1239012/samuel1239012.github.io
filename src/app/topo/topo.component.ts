import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-topo',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './topo.component.html',
  styleUrl: './topo.component.scss'
})
export class TopoComponent {
  // Variável para controlar o link ativo
  activeLink: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Redireciona para o "home" e marca como ativo ao carregar
    if (this.router.url === '/' || this.router.url === '/home') {
      this.setActive('home');
    }
  }

  ngAfterViewInit(): void {
    // Adiciona verificação para garantir que document está acessível
    if (typeof document !== 'undefined') {
      console.log('document acessível');
    }
  }

  scrollToSkills(event: Event) {
    if (typeof document !== 'undefined') {
      event.preventDefault();
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        skillsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      console.warn('Tentativa de acessar document fora do navegador');
    }
  }

  
  

  // Método para definir o link ativo
  setActive(link: string) {
    this.activeLink = link;
  }

  // Método para verificar se o link é o ativo
  isActive(link: string): boolean {
    return this.activeLink === link;
  }
}
