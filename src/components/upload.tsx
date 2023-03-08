import { FC } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
// styles
import { AssetsStyle } from '@/styles/general'
import { ButtonStyle, ModalStyle } from '@/styles/widgets'
// components
import { noteTypes } from '@/assets/data';
import { makeStyles } from '@mui/styles';
import { FormControl } from '@mui/material';
import PopupWidget from '@/widgets/popup';


const useStyles: any = makeStyles((theme: any) => ({
  root: {
    '& .MuiOutlinedInput-root': {
      padding: '0px 15px',
      background: '#F2F2F2',
      marginBottom: '72px',
    },
  },
  root2: {
    '& .MuiInputBase-input': {
      padding: '8px 15px',
      background: '#F2F2F2',
      width: '100%',
    },
  },
}));


const UploadComponent: FC<any> = ({ open, handleClose, value, updateValue, uploadAction }) => {
  const classes = useStyles();

  const updateNoteType = (e: any, newValue: any) => {
    updateValue({ ...value, noteType: newValue })
  }

  const updateClient = (e: any) => {
    updateValue({ ...value, client: e.target.value })
  }

  const uploadFunction = (e: any) => {
    e.preventDefault();
    if(!value.noteType){
      alert('Please select a note type to proceed with upload!');
    } else if(!value.client){
      alert('Please enter a client\'s name to proceed with upload!');
    } else {
      uploadAction();
      handleClose();
    };
  }

  const invalid = !value.noteType || !value.client;

  return (
    <PopupWidget
      title='Complete Your Upload'
      open={open}
      handleClose={handleClose}
    >
      <form onSubmit={uploadFunction}>
        <ModalStyle.subtitle>Fill in the details below to complete your upload</ModalStyle.subtitle>
        <FormControl fullWidth sx={{ m: 1, marginBottom: '72px' }} variant="standard">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={noteTypes}
            defaultValue={value.noteType}
            onChange={updateNoteType}
            className={classes.root}
            renderInput={(params) => (
              <AssetsStyle.text 
                {...params} 
                placeholder="Select note type" 
              />
            )}
          />
          <AssetsStyle.text
            className={classes.root2}
            placeholder="Enter client name" 
            value={value.client}
            onChange={updateClient}
          />
        </FormControl>
        
        <ButtonStyle.wrapper type='submit' invalid={invalid} short>
          Finish Upload
        </ButtonStyle.wrapper>
      </form>
      
    </PopupWidget>
  )
}

export default UploadComponent;