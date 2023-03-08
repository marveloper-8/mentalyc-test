
import { FC } from 'react';
// styles
import { TableStyle } from '@/styles/components'
import TableRowComponent from './table-row';

const TableComponent: FC<any> = ({data, removeItem}) => {
  return (
    <TableStyle.wrapper>
      <thead>
        <TableStyle.tr>
          <TableStyle.th>Client</TableStyle.th>
          <TableStyle.th desktop>Type</TableStyle.th>
          <TableStyle.th desktop>ETA</TableStyle.th>
        </TableStyle.tr>
      </thead>
      <tbody>
        {data.map((item: any) => <TableRowComponent removeItem={removeItem} data={item} />)}
      </tbody>
    </TableStyle.wrapper>
  )
}

export default TableComponent;