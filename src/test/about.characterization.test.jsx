import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, act } from '@testing-library/react';
import About from '../views/About/About';

describe('Pruebas de caracterización de About (código actual)', () => {
  beforeEach(() => {
    window.innerWidth = 1200;
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('1. Renderiza los 13 miembros con su nombre, rol e imagen en el orden exacto', () => {
    render(<About />);

    const expectedMembers = [
      { name: 'Andy', role: 'CEO & Founder', image: '/images/Andy.webp' },
      { name: 'Fabro', role: 'CPO & Founder', image: '/images/Fabro.webp' },
      { name: 'Alex', role: 'Backend Developer', image: '/images/Alex.webp' },
      { name: 'Jalu', role: 'Software Architect', image: '/images/Jalu.webp' },
      { name: 'Facu', role: 'AI Developer', image: '/images/Facu.webp' },
      { name: 'Ro', role: 'Frontend Developer', image: '/images/Ro.webp' },
      { name: 'Chris', role: 'Backend Developer', image: '/images/Chris.webp' },
      { name: 'Ceci', role: 'Product & Graphic Designer', image: '/images/Ceci.webp' },
      { name: 'Bruno', role: 'AI Automation Developer', image: '/images/Bruno.webp' },
      { name: 'Daf', role: 'Growth Marketing Manager', image: '/images/Daff.webp' },
      { name: 'Gera', role: 'Sales Manager', image: '/images/Gera.webp' },
      { name: 'Gabi', role: 'Product & UX/UI Designer', image: '/images/Gabi.webp' },
      { name: 'Gianni', role: 'Frontend Developer', image: '/images/Gianni.webp' },
    ];

    const memberCards = screen.getAllByLabelText(/, equipo de Holocruxe/i);
    expect(memberCards).toHaveLength(13);

    memberCards.forEach((card, idx) => {
      const expected = expectedMembers[idx];
      expect(card).toHaveTextContent(expected.name);
      expect(card).toHaveTextContent(expected.role);
      const img = card.querySelector('img');
      expect(img).toHaveAttribute('src', expected.image);
      expect(img).toHaveAttribute('alt', expected.name);
    });
  });

  it('2. Calcula la cantidad de puntos según el ancho de ventana (breakpoints)', () => {
    const { container, rerender } = render(<About />);

    // Nota: en el código actual los dots están dentro de aria-hidden="true",
    // por lo que se consultan con hidden: true (o por selector de botón de dot)
    const getDots = () => container.querySelectorAll('div[class*="carouselDots"] button');

    // 1200px -> visibleCount = 4 -> maxIndex = 13 - 4 = 9 -> 10 puntos
    expect(getDots()).toHaveLength(10);

    // 1000px -> visibleCount = 3 -> maxIndex = 13 - 3 = 10 -> 11 puntos
    act(() => {
      window.innerWidth = 1000;
      window.dispatchEvent(new Event('resize'));
    });
    rerender(<About />);
    expect(getDots()).toHaveLength(11);

    // 700px -> visibleCount = 2 -> maxIndex = 13 - 2 = 11 -> 12 puntos
    act(() => {
      window.innerWidth = 700;
      window.dispatchEvent(new Event('resize'));
    });
    rerender(<About />);
    expect(getDots()).toHaveLength(12);

    // 400px -> visibleCount = 1 -> maxIndex = 13 - 1 = 12 -> 13 puntos
    act(() => {
      window.innerWidth = 400;
      window.dispatchEvent(new Event('resize'));
    });
    rerender(<About />);
    expect(getDots()).toHaveLength(13);
  });

  it('3. Flecha siguiente/anterior mueve el carrusel y da la vuelta en los extremos', () => {
    const { container } = render(<About />);

    const nextBtn = screen.getByRole('button', { name: /Ver siguientes miembros/i });
    const prevBtn = screen.getByRole('button', { name: /Ver miembros anteriores/i });
    const getTrack = () => container.querySelector('div[style*="transform"]');

    // Inicialmente index 0 (0 * 25% = 0%)
    expect(getTrack().style.transform).toBe('translateX(-0%)');

    // Siguiente -> index 1 (1 * 25% = 25%)
    fireEvent.click(nextBtn);
    expect(getTrack().style.transform).toBe('translateX(-25%)');

    // Anterior -> index 0 (0%)
    fireEvent.click(prevBtn);
    expect(getTrack().style.transform).toBe('translateX(-0%)');

    // Anterior en 0 -> da la vuelta al extremo (maxIndex = 9 a 1200px: 9 * 25% = 225%)
    fireEvent.click(prevBtn);
    expect(getTrack().style.transform).toBe('translateX(-225%)');

    // Siguiente en maxIndex -> vuelve a 0
    fireEvent.click(nextBtn);
    expect(getTrack().style.transform).toBe('translateX(-0%)');
  });

  it('4. Autoplay avanza cada 3200ms y se pausa con mouseenter', () => {
    vi.useFakeTimers();
    const { container } = render(<About />);

    const getTrack = () => container.querySelector('div[style*="transform"]');
    const carouselContainer = container.querySelector('div[class*="carouselContainer"]');

    expect(getTrack().style.transform).toBe('translateX(-0%)');

    // Avanza 3200ms -> index 1
    act(() => {
      vi.advanceTimersByTime(3200);
    });
    expect(getTrack().style.transform).toBe('translateX(-25%)');

    // mouseEnter -> pausado
    act(() => {
      fireEvent.mouseEnter(carouselContainer);
    });
    act(() => {
      vi.advanceTimersByTime(3200);
    });
    // Debe permanecer en index 1
    expect(getTrack().style.transform).toBe('translateX(-25%)');

    // mouseLeave -> se reanuda
    act(() => {
      fireEvent.mouseLeave(carouselContainer);
    });
    act(() => {
      vi.advanceTimersByTime(3200);
    });
    // Avanza a index 2
    expect(getTrack().style.transform).toBe('translateX(-50%)');
  });

  it('5. Swipe de más de 40px cambia de página; menos de 40px no hace nada', () => {
    const { container } = render(<About />);
    const getTrack = () => container.querySelector('div[style*="transform"]');
    const carouselContainer = container.querySelector('div[class*="carouselContainer"]');

    expect(getTrack().style.transform).toBe('translateX(-0%)');

    // Swipe < 40px (ej: 30px) -> no hace nada
    fireEvent.touchStart(carouselContainer, { touches: [{ clientX: 200 }] });
    fireEvent.touchEnd(carouselContainer, { changedTouches: [{ clientX: 170 }] });
    expect(getTrack().style.transform).toBe('translateX(-0%)');

    // Swipe > 40px hacia la izquierda (next) (diff = 200 - 150 = 50px)
    fireEvent.touchStart(carouselContainer, { touches: [{ clientX: 200 }] });
    fireEvent.touchEnd(carouselContainer, { changedTouches: [{ clientX: 150 }] });
    expect(getTrack().style.transform).toBe('translateX(-25%)');

    // Swipe > 40px hacia la derecha (prev) (diff = 150 - 210 = -60px)
    fireEvent.touchStart(carouselContainer, { touches: [{ clientX: 150 }] });
    fireEvent.touchEnd(carouselContainer, { changedTouches: [{ clientX: 210 }] });
    expect(getTrack().style.transform).toBe('translateX(-0%)');
  });

  it('6. Renderiza los 4 hitos del timeline y los 3 valores', () => {
    const { container } = render(<About />);

    // 4 hitos en timeline (ol con 4 li)
    const timelineItems = container.querySelectorAll('ol li');
    expect(timelineItems).toHaveLength(4);

    // 3 valores (ul con 3 li en valuesSection)
    const valuesSection = screen.getByLabelText(/Nuestros valores/i);
    const valueCards = valuesSection.querySelectorAll('ul li');
    expect(valueCards).toHaveLength(3);
  });
});
