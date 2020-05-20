import storage from "./storage";
import http from "./http";
import { useState, useEffect } from "react";
import { useLanguageState } from "../Context/language";

export default ({ url, parser, name, expires, onlyData = true }) => {
  const isMultiple = Array.isArray(url);
  const urlList = isMultiple ? url : [url];
  const [lang] = useLanguageState();
  const stored = storage.getItem(name) || {};
  const [{ fetchedContent, error }, setState] = useState({
    fetchedContent: stored,
    error: null,
  });
  const content = fetchedContent[lang];
  useEffect(() => {
    if (content === undefined && !error) {
      Promise.all(
        urlList.map((url) =>
          http
            .get(url, { params: { lang } })
            .then((res) => (onlyData ? res.data : res))
        )
      )
        .then((data) => {
          data = isMultiple ? data : data[0];
          const parsed = parser(data, lang) || null;
          const newContent = { ...fetchedContent, [lang]: parsed };
          setState({ fetchedContent: newContent, error: null });
          storage.setItem(name, newContent, expires);
        })
        .catch((err) => {
          setState((prev) => ({ ...prev, error: err }));
        });
    } else if (content && error) {
      setState((prev) => ({ ...prev, error: null }));
    }
  });
  return [content, error, content === undefined && !error];
};
