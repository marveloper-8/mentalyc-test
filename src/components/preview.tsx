
import { FC } from 'react';
// styles
import { CardStyle } from '@/styles/components'

const PreviewComponent: FC<any> = ({count}) => (
  <CardStyle.wrapper>
    <CardStyle.count>{count}</CardStyle.count>
    Notes in progress
  </CardStyle.wrapper>
)

export default PreviewComponent;