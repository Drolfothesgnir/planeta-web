import storage from "./storage";
import http from "./http";
import { useState, useEffect } from "react";
import { useLanguageState } from "../Context/language";

export default ({ url, parser, name, expires, attempts = 1 }) => {
  const [lang] = useLanguageState();
  const [fetchedContent, setContent] = useState(storage.getItem(name) || {});
  const [error, setError] = useState(null);
  const [valid, setAttempts] = useState(attempts);
  const content = fetchedContent[lang];
  useEffect(() => {
    if (!content && valid > 0) {
      http
        .get(url, { params: { lang } })
        .then(({ data }) => {
            console.log(data, 'data')
            const parsed = parser(data, lang);
            if (parsed === null) {
                 setAttempts(prev => prev - 1);
            } else {
                const newContent = { ...fetchedContent, [lang]: parsed };
                setContent(newContent);
                storage.setItem(name, newContent, expires && expires);
            }
        })
        .catch(err => {
            console.log(err, valid, 'err')
            if (valid <= 0) {
                console.log('set')
                setError(err)
            } else {
                console.log('att - 1')
                setAttempts(prev => prev - 1);
            }
        });
    }
  });
  return [content, error];
};
