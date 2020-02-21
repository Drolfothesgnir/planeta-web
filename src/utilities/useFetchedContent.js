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

// export const useFetchedGlobalState = (
//   { url, name, parser, expires },
//   useGlobalState,
//   success,
//   fail
// ) => {
//   const [state, dispatch] = useGlobalState();
//   const lang = useLanguageState();
//   const content = state[name] && state[name][lang];
//   useEffect(() => {
//     if (!content) {
//       http
//         .get(url, { params: { lang } })
//         .then(({ data }) => {
//           const newContent = parser(data);
//           dispatch(success(newContent));
//           storage.setItem(name, newContent);
//         })
//         .catch(error => dispatch(fail(error)));
//     }
//   });
//   return content;
// };
