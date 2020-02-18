const storage = {
  get length() {
    return localStorage.length;
  },
  getItem(key) {
    const item = JSON.parse(localStorage.getItem(key));
    if (!item || item.expires <= Date.now()) {
      return null;
    }
    return JSON.parse(item.content);
  },
  setItem(key, value, expires = Date.now() + 1000 * 60 * 30) {
    let content;
    try {
      content = JSON.stringify(value);
    } catch (e) {
      content = value.toString();
    }
    localStorage.setItem(key, JSON.stringify({
      content,
      expires
    }));
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
