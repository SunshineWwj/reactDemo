/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React, {Component} from 'react';
import {Table, Column, Cell, ColumnGroup} from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.min.css';
import SortHeaderCell from './SortHeaderCell';
import {sortBy} from 'lodash';
import {SortTypes} from './constants';
/**
 * 普通单元格
 */
class MyTextCell extends React.Component {
    render() {
        const {rowIndex, field, data, ...props} = this.props;
        return (<Cell {...props}>
            {data[rowIndex][field]}
        </Cell>);
    }
}
/**
 * 带链接的单元格
 */
class MyLinkCell extends React.Component {
    render() {
        const {rowIndex, field, data, ...props} = this.props;
        const link = data[rowIndex][field];
        return (<Cell {...props}>
            <a href={link}>{link}</a>
        </Cell>);
    }
}

export default class index extends Component {
    state = {
        myTableData: [
            {name: 'AAA',
                age: 20,
                email: 'Angelita_Weimann42@gmail.com'},
            {name: 'BBB',
                age: 21,
                email: 'Dexter.Trantow57@hotmail.com'},
            {name: 'CCC',
                age: 22,
                email: 'Aimee7@hotmail.com'},
            {name: 'DDD',
                age: 23,
                email: 'Jarrod.Bernier13@yahoo.com'},
            {name: 'EEE',
                age: 24,
                email: 'Yadira1@hotmail.com'},
        ],
        columnsWidth: {
            name: 100,
            age: 60,
            email: 200
        },
        colSortDirs: {}//排序的列
    };

    onColumnResizeEndCallback=(newColumnWidth, columnKey) => {
        this.setState(({columnsWidth}) => ({
            columnsWidth: {
                ...columnsWidth,
                [columnKey]: newColumnWidth
            }
        })
        );
    }
    onSortChange = (columnKey, sortDir) => {
        console.log(columnKey, sortDir);
        // const newDataList = sortBy(this.state.myTableData, d => {
        //     if(sortDir === SortTypes.ASC)
        //         return d[columnKey];
            
        //     return -d[columnKey];
        // });
        this.setState({
            // myTableData: newDataList,
            colSortDirs: {
                [columnKey]: sortDir
            }
        });
    }
    render() {
        const {myTableData, colSortDirs, columnsWidth} = this.state;
        return (
            <Table
                rowsCount={myTableData.length}
                rowHeight={50}
                headerHeight={50}
                width={1000}
                height={500}
                isColumnResizing={false}
                //调整列宽之后的回调
                onColumnResizeEndCallback={this.onColumnResizeEndCallback}>
                <Column
                    fixed={true}
                    isResizable={true}//是否可调整列宽
                    width={columnsWidth.name}
                    columnKey="name"
                    header={<SortHeaderCell
                        onSortChange={this.onSortChange}
                        sortDir={colSortDirs.name}>姓名</SortHeaderCell>}
                    cell={<MyTextCell data={myTableData} field="name"/>}/>
                <Column
                    header={<Cell>年龄</Cell>}
                    cell={<MyTextCell data={myTableData} field="age"/>}
                    // isResizable={true}
                    width={columnsWidth.age}
                    columnKey="age"/>
                <Column
                    header={<Cell>邮箱</Cell>}
                    cell={<MyLinkCell data={myTableData} field="email"/>}
                    isResizable={true}
                    width={columnsWidth.email}
                    columnKey="email"/>
            </Table>
        );
    }
}
