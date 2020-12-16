/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/**
 * 带排序的头部单元格
 */
import React, {Component} from 'react';
import {Cell} from 'fixed-data-table-2';
import 'fixed-data-table-2/dist/fixed-data-table.min.css';
import {SortTypes} from './constants';

export default class SortHeaderCell extends Component {
 //点击排序时切换排序方法
 reverseSortDirection=sortDir => sortDir === SortTypes.DESC ? SortTypes.ASC : SortTypes.DESC

 //点及排序  显示调整
 onSortChange = e => {
     e.preventDefault();
     if(this.props.onSortChange)
         this.props.onSortChange(this.props.columnKey,
             this.props.sortDir ? this.reverseSortDirection(this.props.sortDir) : SortTypes.DESC);
 }
 render() {
     const {sortDir, children, ...prop} = this.props;
     return (
         <Cell {...prop}>
             <a onClick={this.onSortChange}>
                 {children}
                 {sortDir ? (sortDir === SortTypes.DESC ? '↓' : '↑') : ''}
             </a>
         </Cell>
     );
 }
}
