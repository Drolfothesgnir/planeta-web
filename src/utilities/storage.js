const storage = {
  get length() {
    return localStorage.length;
  },
  getItem(key) {
    const item = JSON.parse(localStorage.getItem(key));
    return !item || item.expires <= Date.now() ? null : item.content;
  },
  setItem(key, value, expires = Date.now() + 1000 * 60 * 30) {
    const item = {
      content: value,
      expires
    };
    try {
      localStorage.setItem(key, JSON.stringify(item));
    } catch (e) {
      item.content = value.toString();
      localStorage.setItem(key, JSON.stringify(item));
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
