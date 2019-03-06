import React, { Component } from "react";
import {
  ReactiveBase,
  DataSearch,
  SingleRange,
  ResultList
} from "@appbaseio/reactivesearch";
class App extends Component {
  render() {
    return (
      <ReactiveBase
        app="authorseek"
        credentials="kIpRW4uvy:6a9e6344-75d9-454d-8ac9-b748ae2cb0ee"
      >
        <DataSearch
          componentId="mainSearch"
          dataField={["abstract", "abstract.search"]}
          queryFormat="and"
          iconPosition="left"
        />
        cd ..
        <ResultList
          componentId="results"
          dataField="abstract"
          react={{
            and: ["mainSearch", "abstract"]
          }}
          pagination={true}
          size={10}
          onData={res => ({
            title: res.abstract || " ",
            description:
              "</span><br/><br/><div class='result-author' TITLE='" +
              res.abstract +
              "'>by " +
              res.url +
              "https://google.com/search?q=" +
              res.url +
              "</div>",
            url: res.url
          })}
          className="result-data"
          innerClass={{
            resultStats: "result-stats"
          }}
        />
      </ReactiveBase>
    );
  }
}
export default App;
