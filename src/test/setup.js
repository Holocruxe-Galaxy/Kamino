import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Preamble para @vitejs/plugin-react en entorno de test
window.__vite_plugin_react_preamble_installed__ = true;
window.$RefreshReg$ = () => {};
window.$RefreshSig$ = () => (type) => type;

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock window.scrollTo
window.scrollTo = vi.fn();

// Mock requestAnimationFrame / cancelAnimationFrame if needed
if (!window.requestAnimationFrame) {
  window.requestAnimationFrame = (callback) => setTimeout(callback, 0);
  window.cancelAnimationFrame = (id) => clearTimeout(id);
}

// Mock WebGLRenderer para Three.js en entorno jsdom sin GPU
vi.mock('three', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    WebGLRenderer: vi.fn().mockImplementation(() => ({
      setPixelRatio: vi.fn(),
      setSize: vi.fn(),
      setClearColor: vi.fn(),
      render: vi.fn(),
      dispose: vi.fn(),
      autoClear: false,
      domElement: document.createElement('canvas'),
    })),
  };
});

// Mock react-i18next
vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key, fallback) => (typeof fallback === 'string' ? fallback : key),
    i18n: {
      language: 'es',
      changeLanguage: vi.fn(),
    },
  }),
  initReactI18next: {
    type: '3rdParty',
    init: vi.fn(),
  },
}));
