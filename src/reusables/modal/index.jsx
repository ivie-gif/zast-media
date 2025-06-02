import * as React from 'react';
import {
  Modal,
  Box,
  Fade,
  Backdrop,
  Typography,
} from '@mui/material';

const defaultStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ReusableModal({
    open,
    onClose,
    title,
    description,
    children,
    width = 400,
    boxSx = {},
  }) {
    return (
      <Modal
        aria-labelledby="reusable-modal-title"
        aria-describedby="reusable-modal-description"
        open={open}
        onClose={onClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: { timeout: 500 },
        }}
      >
        <Fade in={open}>
          <Box sx={{ ...defaultStyle, width, ...boxSx }}>
            {title && (
              <Typography id="reusable-modal-title" variant="h6" component="h2" gutterBottom>
                {title}
              </Typography>
            )}
            {description && (
              <Typography id="reusable-modal-description" sx={{ mb: 2 }}>
                {description}
              </Typography>
            )}
            
            {/* Ensure children are rendered with space */}
            <Box mt={2}>
              {children}
            </Box>
          </Box>
        </Fade>
      </Modal>
    );
  }
  
