import "./Table.scss";
import { useContext } from "react";
import { AppContext } from "../shared/app-context";

const Table = (props) => {
  const { item } = props;
  //will eventually get topKey from props, passed from Toolbar
  const appCtx = useContext(AppContext);
  const renderTableData = () => {
    //const topKey = props.item;
    const data = appCtx[item];
    return data.map((item) => {
      const { id, name, email } = item;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{email}</td>
        </tr>
      );
    });
  };
  const renderTableHeader = () => {
    //when use props.topKey:
    //<caption>{topKey.toUpperCase()}</caption>
    //const topKey = "foobar";
    //const topKey = props.item;
    const data = appCtx[item];
    let header = Object.keys(data[0]);
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  };
  return (
    <table>
      <caption>{item}</caption>
      <thead>
        <tr>{renderTableHeader()}</tr>
      </thead>
      <tbody>{renderTableData()}</tbody>
    </table>
    /*  <table className="center" role="grid">
      <caption>Some caption</caption>
      <tbody>
        <tr>
          <th scope="col">Col1</th>
          <th scope="col">Col2</th>
          <th scope="col">Cal3</th>
        </tr>
        <tr>
          <th scope="row">Row1</th>
          <td>Foo</td>
          <td>ok</td>
        </tr>
        <tr>
          <th scope="row">Row2</th>
          <td>Bar</td>
          <td>notok</td>
        </tr>
      </tbody>
    </table> */
  );
};
export default Table;
