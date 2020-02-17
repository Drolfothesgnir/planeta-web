import storage from "./storage";
import http from "./http";
import { useState, useEffect } from "react";
import { useLanguageState } from "./language";

export default ({ url, parser, name, error }) => {
  const [lang] = useLanguageState();
  const [fetchedContent, setContent] = useState(storage.getItem(name) || {});
  const content = fetchedContent[lang];
  useEffect(() => {
    if (!content) {
      http
        .get(url, { params: { lang } })
        .then(({ data }) => {
          const newContent = { ...fetchedContent, [lang]: parser(data) };
          setContent(newContent);
          storage.setItem(name, newContent);
        })
        .catch(error || console.log);
    }
  });
  return content;
};
