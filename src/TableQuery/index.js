import React from 'react';
import {Table, Button, Modal} from 'antd';
import {uuid} from '../utils';
import {connect} from 'react-redux';
import DataSelectPanel from './DataSelectPanel';
class TablePanel extends React.Component {
  state = {
      dataSource: [],
      showPanel: false,
      selectedRowKeys: [],
  };
  componentDidMount() {
      // const content = [];
      // for (let i = 1; i <= 50; i++) {
      //   content.push({
      //     id: `id${i}`,
      //     code: `编号${i}`,
      //     name: `姓名${i}`,
      //     hobby: `爱好${i}`,
      //   });
      // }
      // setTimeout(() => {
      //   this.setState({ dataSource: content });
      // }, 2000);
  }
  toggleSelectPanel = () => {
      this.setState({showPanel: !this.state.showPanel});
  };
  onSelect = record => {
      this.setState({
          dataSource: [...record],
      });
      this.setState({showPanel: !this.state.showPanel});
  };
  render() {
      const {dataSource = []} = this.state;
      const columns = [
          {
              title: '编号',
              sorter: true,
              dataIndex: 'code',
          },
          {
              title: '名称',
              sorter: true,
              dataIndex: 'name',
          },
          {
              title: '爱好',
              sorter: true,
              dataIndex: 'hobby',
          },
      ];
      return (
          <div style={{margin: '15px'}}>
              {this.state.showPanel && (
                  <DataSelectPanel
                      onSelect={this.onSelect}
                      onCancel={this.toggleSelectPanel}/>
              )}
              <Button onClick={this.toggleSelectPanel}>添加数据</Button>
              <Table
                  className="white-space-nowrap"
                  columns={columns}
                  key="id"
                  dataSource={dataSource}
                  bordered="true"/>
          </div>
      );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TablePanel);
