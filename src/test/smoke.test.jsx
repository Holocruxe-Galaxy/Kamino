import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import Landing from '../views/Landing/Landing';
import About from '../views/About/About';
import Products from '../views/Products/Products';
import Projects from '../views/Projects/Projects';
import Faqs from '../views/Faqs/Faqs';
import Blog from '../views/Blog/Blog';
import PrivacyView from '../views/Legal/PrivacyView';
import TermsOfUse from '../views/TermsOfUse/TermsOfUse';
import VinadoDeleteAccount from '../views/VinadoDeleteAccount/VinadoDeleteAccount';
import App from '../App';

describe('Smoke Tests - Verificación de render sin errores por página', () => {
  it('renderiza Landing sin lanzar errores', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <Landing />
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });

  it('renderiza About sin lanzar errores', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/about']}>
        <About />
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });

  it('renderiza Products sin lanzar errores', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/products']}>
        <Products />
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });

  it('renderiza Projects sin lanzar errores', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/projects']}>
        <Projects />
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });

  it('renderiza Faqs sin lanzar errores', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/faqs']}>
        <Faqs />
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });

  it('renderiza Blog sin lanzar errores', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/factory']}>
        <Blog />
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });

  it('renderiza PrivacyView sin lanzar errores', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/privacy']}>
        <PrivacyView />
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });

  it('renderiza TermsOfUse sin lanzar errores', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/terms-of-use']}>
        <TermsOfUse />
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });

  it('renderiza VinadoDeleteAccount sin lanzar errores', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/vinado/delete-account']}>
        <VinadoDeleteAccount />
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });

  it('renderiza App con navegación completa sin lanzar errores', () => {
    const { container } = render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(container).toBeTruthy();
  });
});
