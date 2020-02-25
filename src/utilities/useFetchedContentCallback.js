import useFetchedContent from "./useFetchedContent";

export default ({name, url, parser,  expires}, callback) => {
    const [content, error] = useFetchedContent({name, url, parser, expires});
    console.log(content, error, name)
    if (!content && !error) {
        return null;
    }
    return callback(content, error);
}