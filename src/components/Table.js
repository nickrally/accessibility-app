import "./Table.scss";
import { useContext } from "react";
import { AppContext } from "../shared/app-context";

const Table = (props) => {
  const { item } = props;
  const appCtx = useContext(AppContext);
  const renderTableData = () => {
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
  );
};
export default Table;
