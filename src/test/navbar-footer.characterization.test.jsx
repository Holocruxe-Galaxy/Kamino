import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

describe('Pruebas de caracterización de Navbar y Footer (código actual)', () => {
  describe('Navbar', () => {
    it('1. Renderiza el logo con enlace a inicio', () => {
      render(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      );
      const logoLink = screen.getByRole('link', { name: /Holocruxe, inicio/i });
      expect(logoLink).toBeInTheDocument();
      expect(logoLink).toHaveAttribute('href', '/');
    });

    it('2. Renderiza enlaces de navegación principal desktop con sus rutas', () => {
      render(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      );
      const nav = screen.getByRole('navigation', { name: /Navegación principal/i });
      expect(nav).toBeInTheDocument();

      const homeLink = within(nav).getByRole('link', { name: /navbar\.home|inicio/i });
      expect(homeLink).toHaveAttribute('href', '/');

      const productsLink = within(nav).getByRole('link', { name: /navbar\.products|productos/i });
      expect(productsLink).toHaveAttribute('href', '/products');

      const projectsLink = within(nav).getByRole('link', { name: /navbar\.projects|proyectos/i });
      expect(projectsLink).toHaveAttribute('href', '/projects');

      const aboutLink = within(nav).getByRole('link', { name: /navbar\.about|nosotros/i });
      expect(aboutLink).toHaveAttribute('href', '/about');

      const factoryLink = within(nav).getByRole('link', { name: /navbar\.factory|factory/i });
      expect(factoryLink).toHaveAttribute('href', 'https://factory.holocruxe.com/');
      expect(factoryLink).toHaveAttribute('target', '_blank');
    });

    it('3. Botón de contacto dispara evento o scroll', () => {
      const dispatchSpy = vi.spyOn(window, 'dispatchEvent');
      render(
        <MemoryRouter initialEntries={['/']}>
          <Navbar />
        </MemoryRouter>
      );
      const talkBtn = screen.getByRole('button', { name: /navbar\.let's-talk/i });
      fireEvent.click(talkBtn);
      expect(dispatchSpy).toHaveBeenCalled();
      dispatchSpy.mockRestore();
    });

    it('4. Botón toggle de menú móvil abre y cierra drawer', () => {
      render(
        <MemoryRouter>
          <Navbar />
        </MemoryRouter>
      );
      const toggleBtn = screen.getByRole('button', { name: /Abrir menú/i });
      expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');

      fireEvent.click(toggleBtn);
      expect(toggleBtn).toHaveAttribute('aria-expanded', 'true');
      const closeButtons = screen.getAllByRole('button', { name: /Cerrar menú/i });
      expect(closeButtons.length).toBeGreaterThanOrEqual(2);

      // Cerrar mediante el botón de cierre en sidebar
      fireEvent.click(closeButtons[1]);
      expect(toggleBtn).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Footer', () => {
    it('5. Renderiza redes sociales con enlaces externos seguros', () => {
      render(
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      );
      const linkedin = screen.getByRole('link', { name: /LinkedIn de Holocruxe/i });
      expect(linkedin).toHaveAttribute('href', 'https://www.linkedin.com/company/holocruxe/');
      expect(linkedin).toHaveAttribute('target', '_blank');
      expect(linkedin).toHaveAttribute('rel', 'noopener noreferrer');

      const instagram = screen.getByRole('link', { name: /Instagram de Holocruxe/i });
      expect(instagram).toHaveAttribute('href', 'https://www.instagram.com/holocruxe/');
      expect(instagram).toHaveAttribute('target', '_blank');
      expect(instagram).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('6. Renderiza las columnas de navegación y año actual', () => {
      render(
        <MemoryRouter>
          <Footer />
        </MemoryRouter>
      );
      // Año dinámico
      const currentYear = new Date().getFullYear();
      expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();

      // Enlaces legales
      const privacy = screen.getByRole('link', { name: /Privacidad/i });
      expect(privacy).toHaveAttribute('href', '/privacy');

      const terms = screen.getByRole('link', { name: /Términos/i });
      expect(terms).toHaveAttribute('href', '/terms-of-use');
    });
  });
});
