import PropTypes from '../../_util/vue-types';
import TableHeaderRow from './TableHeaderRow';

function getHeaderRows(columns, currentRow = 0, rows) {
  rows = rows || [];
  rows[currentRow] = rows[currentRow] || [];

  columns.forEach(column => {
    if (column.rowSpan && rows.length < column.rowSpan) {
      while (rows.length < column.rowSpan) {
        rows.push([]);
      }
    }
    const cell = {
      key: column.key,
      className: column.className || column.class || '',
      children: column.title,
      column,
    };
    if (column.children) {
      getHeaderRows(column.children, currentRow + 1, rows);
    }
    if ('colSpan' in column) {
      cell.colSpan = column.colSpan;
    }
    if ('rowSpan' in column) {
      cell.rowSpan = column.rowSpan;
    }
    if (cell.colSpan !== 0) {
      rows[currentRow].push(cell);
    }
  });
  return rows.filter(row => row.length > 0);
}

function getSummaryRows(columns, currentRow = 0, rows) {
  rows = rows || [];
  rows[currentRow] = rows[currentRow] || [];

  columns.forEach(column => {
    if (column.rowSpan && rows.length < column.rowSpan) {
      while (rows.length < column.rowSpan) {
        rows.push([]);
      }
    }
    const cell = {
      key: column.key,
      className: column.className || column.class || '',
      children: column.footer,
      column,
    };
    if (column.children) {
      getHeaderRows(column.children, currentRow + 1, rows);
    }
    if ('colSpan' in column) {
      cell.colSpan = column.colSpan;
    }
    if ('rowSpan' in column) {
      cell.rowSpan = column.rowSpan;
    }
    if (cell.colSpan !== 0) {
      rows[currentRow].push(cell);
    }
  });
  return rows.filter(row => row.length > 0);
}

export default {
  name: 'TableHeader',
  props: {
    fixed: PropTypes.string,
    columns: PropTypes.array.isRequired,
    expander: PropTypes.object.isRequired,
    isSummary: PropTypes.bool,
  },
  inject: {
    table: { default: () => ({}) },
  },

  render() {
    const { sComponents: components, prefixCls, showHeader, customHeaderRow } = this.table;
    const { expander, columns, fixed, isSummary } = this;

    if (!showHeader) {
      return null;
    }

    const rows = isSummary ? getSummaryRows(columns) : getHeaderRows(columns);

    expander.renderExpandIndentCell(rows, fixed);

    const HeaderWrapper = isSummary ? components.footer.wrapper : components.header.wrapper;

    let wrapperClassName = `${prefixCls}-t${isSummary ? 'foot' : 'head'}`
    return (
      <HeaderWrapper class={wrapperClassName}>
        {rows.map((row, index) => (
          <TableHeaderRow
            prefixCls={prefixCls}
            key={index}
            index={index}
            fixed={fixed}
            columns={columns}
            rows={rows}
            row={row}
            components={components}
            isSummary={isSummary}
            customHeaderRow={customHeaderRow}
          />
        ))}
      </HeaderWrapper>
    );
  },
};
