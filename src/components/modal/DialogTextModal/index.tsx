import { Button, TextField } from '@mui/material';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

import {
  ModalButtons,
  ModalContainer,
  ModalTitleContainer,
  TextContainer,
} from './styled';

interface IDialogTextModal {
  modalTitle: string;
  open: boolean;
  submitText?: string;
  modalSubtitle?: string;
  handleSubmit: () => void;
  handleClose: () => void;
}

export default function DialogTextModal({
  modalTitle,
  modalSubtitle,
  open,
  handleClose,
  handleSubmit,
  submitText = 'Enviar',
}: IDialogTextModal) {
  const [text, setText] = useState('');
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <ModalContainer>
          <ModalTitleContainer>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              {modalTitle}
            </Typography>
            <Typography id='modal-modal-description' sx={{ mt: 2 }}>
              {modalSubtitle}
            </Typography>
          </ModalTitleContainer>

          <TextContainer>
            <TextField
              multiline
              rows={4}
              variant='filled'
              fullWidth
              onChange={(event) => setText(event.target.value)}
            />
          </TextContainer>
          <ModalButtons>
            <Button variant='outlined' onClick={handleClose}>
              Cancelar
            </Button>
            <Button
              variant='contained'
              color='success'
              onClick={handleSubmit}
              disabled={text.length < 10}
            >
              {submitText}
            </Button>
          </ModalButtons>
        </ModalContainer>
      </Modal>
    </div>
  );
}
