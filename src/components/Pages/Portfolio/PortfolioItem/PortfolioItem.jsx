import React from 'react';
import useFetchedContent from "../../../../utilities/useFetchedContent";

function parser(data) {
    return data;
}

function PortfolioItem(props) {
    const [content, error] = useFetchedContent({url: props.match.url, parser, name: 'portfolio:'+props.match.params.path});
    return (
        <div>
            <h1>{props.path}</h1>
        </div>
    );
}

export default PortfolioItem;