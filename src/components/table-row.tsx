
import { FC, useEffect, useState } from 'react';
// styles
import { TableStyle } from '@/styles/components'
import { AssetsStyle } from '@/styles/general';
// components
import ProgressDetailsComponent from './progress-details';

const TableRowComponent: FC<any> = ({data, removeItem}) => {
  // const handleClose = () => alert('hi');
  const [progress, setProgress] = useState(data.noteType.progress);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress: any) => prevProgress + 1);
    }, 30000 / 100);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
      if(progress === 100){
        removeItem(data.id);
      };
  }, [progress])

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <TableStyle.tr onClick={handleOpen} alt>
      <TableStyle.td>{data.client}</TableStyle.td>
      <TableStyle.td desktop>{data.noteType.value}</TableStyle.td>
      <TableStyle.td progressWrapper>
        <AssetsStyle.progressBar value={progress} max={100} />
        <AssetsStyle.deleteIcon desktop onClick={() => removeItem(data.id)} />
      </TableStyle.td>
      <ProgressDetailsComponent
        data={data}
        open={open}
        handleClose={handleClose}
        progress={progress}
        removeItem={removeItem}
      />
    </TableStyle.tr>
  )
}

export default TableRowComponent;