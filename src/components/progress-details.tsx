import { FC } from 'react';
// styles
import { CardStyle } from '@/styles/components';
import { ButtonStyle } from '@/styles/widgets';
import { AssetsStyle } from '@/styles/general';
// components
import PopupWidget from '@/widgets/popup';

const ProgressDetailsComponent: FC<any> = ({ open, handleClose, data, progress, removeItem }) => {
  const dataArray = [
    {
      title: 'Client',
      value: data.client,
      type: 'text'
    },
    {
      title: 'Type',
      value: data.noteType.value,
      type: 'text'
    },
    {
      title: 'ETA',
      value: `${progress}%`,
      type: 'progress'
    },
  ]
  return (
    <PopupWidget
      title='Progress Details'
      open={open}
      handleClose={handleClose}
    >
      {dataArray.map((item: any) => (
        <CardStyle.details>
          <CardStyle.detailsTitle>{item.title}</CardStyle.detailsTitle>
          <p>
            {item.type === 'progress' && <AssetsStyle.progressBar value={progress} max={100} />}
            {item.value}
          </p>
        </CardStyle.details>
      ))}
        
      <ButtonStyle.wrapper onClick={() => removeItem(data.id)} alt>
        Delete
      </ButtonStyle.wrapper>
    </PopupWidget>
  )
}

export default ProgressDetailsComponent;