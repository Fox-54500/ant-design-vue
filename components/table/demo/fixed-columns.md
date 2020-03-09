<cn>
#### 固定列
对于列数很多的数据，可以固定前后的列，横向滚动查看其它数据，需要和 `scroll.x` 配合使用。
> 若列头与内容不对齐或出现列重复，请指定**固定列**的宽度 `width`。
> 建议指定 `scroll.x` 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 `scroll.x`。
</cn>

<us>
#### Fixed Columns
To fix some columns and scroll inside other columns, and you must set `scroll.x` meanwhile.
> Specify the width of columns if header and cell do not align properly.(Leave one column at least without width to fit fluid layout)
> A fixed value which is greater than table width for `scroll.x` is recommended. The sum of unfixed columns should not greater than `scroll.x`.
</us>

```tpl
<template>
  <a-table :columns="columns" :dataSource="data" :scroll="{ x: 1300 }" showSummary>
    <a slot="action" slot-scope="text" href="javascript:;">action</a>
  </a-table>
</template>
<script>
  const columns = [
    { title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left' , footer: 123},
    { title: 'Age', width: 100, dataIndex: 'age', key: 'age', fixed: 'left' , footer: 123},
    { title: 'Column 1', dataIndex: 'address', key: '1', footer: 123 },
    { title: 'Column 2', dataIndex: 'address', key: '2' , footer: 123},
    { title: 'Column 3', dataIndex: 'address', key: '3', footer: 123 },
    { title: 'Column 4', dataIndex: 'address', key: '4' , footer: 123},
    { title: 'Column 5', dataIndex: 'address', key: '5' , footer: 123},
    { title: 'Column 6', dataIndex: 'address', key: '6', footer: 123 },
    { title: 'Column 7', dataIndex: 'address', key: '7', footer: 123 },
    { title: 'Column 8', dataIndex: 'address', key: '8', footer: 123 },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      scopedSlots: { customRender: 'action' },
      footer: 456
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 40,
      address: 'London Park',
    },
  ];

  export default {
    data() {
      return {
        data,
        columns,
      };
    },
  };
</script>
```
