import { useLanguageState } from "../../Context/language";
import { useContentState } from "./store";
import { useEffect } from "react";
import storage from "../../utilities/storage";
import http from "../../utilities/http";
import { addContent, setError, setContent } from "./actions";

export default ({ url, name, parser }) => {
  const [lang] = useLanguageState(),
    [state, dispatch] = useContentState(),
    content = state[name] && state[name][lang];
  useEffect(() => {
    if (!content) {
      const storedContent = storage.getItem("content:" + name);
      if (!storedContent || !storedContent[lang]) {
        http
          .get(url, { params: { lang } })
          .then(({ data }) => {
            const newContent = parser(data);
            dispatch(addContent({ content: newContent, lang, name }));
            storage.setItem("content:" + name, {
              ...(storedContent || {}),
              [lang]:newContent
            });
          })
          .catch(error => {
            dispatch(
              setError({
                name,
                error
              })
            );
          });
      } else {
          dispatch(setContent(name, storedContent));
      }
    }
  });
  return content;
};
