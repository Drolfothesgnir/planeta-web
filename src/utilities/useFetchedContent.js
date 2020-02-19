import storage from "./storage";
import http from "./http";
import { useState, useEffect } from "react";
import { useLanguageState } from "../Context/language";

export default ({ url, parser, name, error, expires }) => {
  const [lang] = useLanguageState();
  const [fetchedContent, setContent] = useState(storage.getItem(name) || {});
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
        .catch(error || console.log);
    }
  });
  return content;
};
