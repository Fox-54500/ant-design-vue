import PropTypes from '../../_util/vue-types';
import { measureScrollbar } from './utils';
import BaseTable from './BaseTable';

export default {
  name: 'SummaryTable',
  props: {
    fixed: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    columns: PropTypes.array.isRequired,
    tableClassName: PropTypes.string.isRequired,
    handleBodyScrollLeft: PropTypes.func.isRequired,
    expander: PropTypes.object.isRequired,
  },
  inject: {
    table: { default: () => ({}) },
  },
  mounted() {
    this.updateTableRef();
  },
  updated() {
    this.updateTableRef();
  },
  methods: {
    updateTableRef() {
      this.$nextTick(() => {
        this.$refs.summaryTable && this.table.saveChildrenRef('summaryTable', this.$refs.summaryTable);
      });
    },
  },
  render() {
    const { columns, fixed, tableClassName, handleBodyScrollLeft, expander, table } = this;
    const { prefixCls, scroll, showSummary } = table;
    const summaryStyle = {};

    if (!scroll.y) {
      summaryStyle.overflow = 'auto';
      summaryStyle.overflowX = 'scroll';
    }
    if (!showSummary) {
      return null;
    }
    return (
      <div
        key="summaryTable"
        ref={fixed ? null : 'summaryTable'}
        class={`${prefixCls}-summary ${prefixCls}-summary-show-scroll-bar`}
        style={summaryStyle}
        onScroll={handleBodyScrollLeft}
      >
        <BaseTable
          tableClassName={tableClassName}
          hasSummary
          hasHead={false}
          hasBody={false}
          fixed={fixed}
          columns={columns}
          expander={expander}
        />
      </div>
    );
  },
};
