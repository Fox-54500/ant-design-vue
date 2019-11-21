<cn>
#### 带边框
添加表格边框线，页头和页脚。
</cn>

<us>
#### border, title and footer
Add border, title and footer for table.
</us>

```tpl
<template>
  <a-table size="small" :columns="columns" :scroll="{x: 1200, y:500}" :dataSource="data" bordered showSummary>
    <template slot="name" slot-scope="text">
      <a href="javascript:;">{{text}}</a>
    </template>
    <template slot="title" slot-scope="currentPageData">
      Header
    </template>
    <template slot="footer" slot-scope="currentPageData">
      Footer
    </template>
  </a-table>
</template>
<script>
  const data = [
    {
      key: '1',
      name: 'John Brown',
      money: '￥300,000.00',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      money: '￥1,256,000.00',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  export default {
    data() {
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          scopedSlots: { customRender: 'name' },
          width: 400,
          footer: <a>123</a>,
          sorter: true
        },
        {
          title: 'Cash Assets',
          className: 'column-money',
          width: 400,
          dataIndex: 'money',
          footer: '123321'
        },
        {
          title: 'Address',
          dataIndex: 'address',
          width: 400,
          footer: '123321'
        },
      ];
      return {
        data,
        columns,
      };
    },
  };
</script>
<style>
  th.column-money,
  td.column-money {
    text-align: right !important;
  }
</style>
```
