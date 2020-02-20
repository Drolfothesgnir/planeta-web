import storage from "./storage";
import http from "./http";
import { useState, useEffect } from "react";
import { useLanguageState } from "../Context/language";

export default ({ url, parser, name, expires }) => {
  const [lang] = useLanguageState();
  const [fetchedContent, setContent] = useState(storage.getItem(name) || {});
  const [error, setError] = useState(null);
  const content = fetchedContent[lang];
  useEffect(() => {
    if (!content) {
      http
        .get(url, { params: { lang } })
        .then(({ data }) => {
          const newContent = { ...fetchedContent, [lang]: parser(data, lang) };
          setContent(newContent);
          storage.setItem(name, newContent, expires && expires);
        })
        .catch(error => setError(error));
    }
  });
  return [content, error];
};
