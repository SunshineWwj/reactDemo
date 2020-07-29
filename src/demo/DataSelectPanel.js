import React from "react";
import { Modal, Table, message } from "antd";
import { connect } from "react-redux";
import PropTypes from "prop-types";
class DataSelectPanel extends React.Component {
  state = {
    dataSource: [],
    selectedRowKeys: [],
    selectedRows: [],
  };
  componentDidMount() {
    const content = [];
    for (let i = 1; i <= 50; i++) {
      content.push({
        id: `id${i}`,
        code: `编号${i}`,
        name: `姓名${i}`,
        hobby: `爱好${i}`,
      });
    }
    setTimeout(() => {
      this.setState({ dataSource: content });
    }, 2000);
  }
  handleOk = () => {
    const { selectedRows } = this.state;
    if (!selectedRows.length) {
      message.warn("请先选择数据");
      return;
    }

    this.props.onSelect(selectedRows);
  };
  render() {
    const { dataSource = [], selectedRowKeys, selectedRows } = this.state;
    const columns = [
      {
        title: "编号",
        sorter: true,
        dataIndex: "code",
      },
      {
        title: "名称",
        sorter: true,
        dataIndex: "name",
      },
      {
        title: "爱好",
        sorter: true,
        dataIndex: "hobby",
      },
    ];
    const onSelectChange = (selectedRowKeys, selectedRows) => {
      this.setState({ selectedRowKeys, selectedRows });
    };
    const rowSelection = {
      type: "checkbox",
      fixed: true,
      selectedRowKeys: selectedRowKeys,
      onChange: onSelectChange,
      //   getCheckboxProps: (record) => console.log(record),
    };
    return (
      <div>
        <Modal
          title="选择数据"
          visible={true}
          destroyOnClose={true}
          onOk={this.handleOk}
          onCancel={this.props.onCancel}
        >
          <Table
            className="white-space-nowrap"
            columns={columns}
            rowKey="id"
            dataSource={dataSource}
            bordered="true"
            rowSelection={rowSelection}
          />
        </Modal>
      </div>
    );
  }
}
DataSelectPanel.propTypes = {
  onSelect: PropTypes.func.isRequired,
  intl: PropTypes.object,
  multi: PropTypes.bool,
  warehouseId: PropTypes.string,
  onCancel: PropTypes.func,
};
export default DataSelectPanel;
