// Simple localStorage-based auth utilities
const STORAGE_KEY = 'streamushi_user';

export function setUser(user) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  } catch (_) {
    // ignore storage errors
  }
}

export function getUser() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (_) {
    return null;
  }
}

export function clearUser() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (_) {
    // ignore
  }
}

export function isLoggedIn() {
  const user = getUser();
  return !!(user && user.loggedIn);
}
