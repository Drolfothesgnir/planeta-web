const storage = {
  get length() {
    return localStorage.length;
  },
  getItem(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (e) {
      return localStorage.getItem(key);
    }
  },
  setItem(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      localStorage.setItem(key, value);
    }
  },
  removeItem(key) {
    localStorage.removeItem(key);
  },
  key(n) {
    return localStorage.key(n);
  },
  clear() {
    localStorage.clear();
  }
};

export default storage;
