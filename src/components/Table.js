import React from "react";
import { StyledTable, TH, TR, TD } from "../Pages/Pages.Elements";

const Table = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
      <StyledTable>
        <TR>
          <TH colSpan={2}>Overview</TH>
        </TR>
        <TR>
          <TD>data 1</TD>
          <TD>data 2</TD>
        </TR>
        <TR>
          <TD>data 3</TD>
          <TD>data 4</TD>
        </TR>
        <TR>
          <TD>data 5</TD>
          <TD>data 6</TD>
        </TR>
        <TR>
          <TD>data 7</TD>
          <TD>data 8</TD>
        </TR>
      </StyledTable>
    </div>
  );
};

export default Table;
