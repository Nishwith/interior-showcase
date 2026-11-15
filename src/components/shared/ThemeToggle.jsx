import { Moon, Sun } from 'lucide-react';

export function ThemeToggle({ theme, setTheme, className = '' }) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`theme-toggle-btn ${className}`}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Sun size={17} className="theme-icon sun-icon" />
      ) : (
        <Moon size={17} className="theme-icon moon-icon" />
      )}
    </button>
  );
}
