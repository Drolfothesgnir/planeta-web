import storage from "./storage";
import http from "./http";
import { useState, useEffect } from "react";
import { useLanguageState } from "../Context/language";

export default ({ url, parser, name, expires }) => {
  const [lang] = useLanguageState();
  const stored = storage.getItem(name) || {};
  const [{ fetchedContent, error }, setState] = useState({
    fetchedContent: stored,
    error: null
  });
  const content = fetchedContent[lang];
  useEffect(() => {
    if (!content && !error) {
      http
        .get(url, { params: { lang } })
        .then(({ data }) => {
          const parsed = parser(data, lang);
          const newContent = { ...fetchedContent, [lang]: parsed };
          setState({ fetchedContent: newContent, error: null });
          storage.setItem(name, newContent, expires && expires);
        })
        .catch(err => {
          setState(prev => ({ ...prev, error: err }));
        });
    }
  });
  return [content, error];
};
