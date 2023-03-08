import Dialog from '@mui/material/Dialog';
import { FC, forwardRef } from 'react';
import { TransitionProps } from '@mui/material/transitions';
import Slide from '@mui/material/Slide';
// styles
import { ModalStyle } from '@/styles/widgets'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PopupWidget: FC<any> = ({ open, handleClose, title, children }) => (
  <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    // aria-describedby="alert-dialog-slide-description"
  >
    <ModalStyle.wrapper>
      <ModalStyle.close onClick={handleClose} />
      <ModalStyle.title>{title}</ModalStyle.title>
      {children}
    </ModalStyle.wrapper>
  </Dialog>
)

export default PopupWidget;