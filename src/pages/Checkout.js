import React, { useState } from 'react';
import { Container, Typography, Button, Stepper, Step, StepLabel, Box, TextField, Grid, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { styled } from '@mui/system';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { useCart } from '../context/CartContext'; // Import useCart from your CartContext
import logo from '../Assets/Foodie.png'; // Updated path
import tickMark from '../Assets/tick.png'; // Updated path
import './Checkout.css'; // Ensure this path is correct

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: '8px',
    backgroundColor: '#f0f0f0',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: '#ddd',
  },
  '& .MuiInputLabel-outlined': {
    color: '#555',
  },
});

const formFields = {
  shippingAddress: ['name', 'address', 'landmark', 'city', 'state', 'postalCode'],
  paymentDetails: ['cardNumber', 'expiryDate', 'cvv'],
};

const FormSection = ({ title, fields, data, onChange, illustration }) => (
  <Box mt={2} className="section">
    <Typography variant="h6" gutterBottom>{title}</Typography>
    {illustration && (
      <Box className="illustration-container" display="flex" justifyContent="center" mb={2}>
        <img src={illustration} alt={title} className="illustration" />
      </Box>
    )}
    <Grid container spacing={2}>
      {fields.map((field) => (
        <Grid item xs={12} sm={6} key={field}>
          <StyledTextField
            label={field.charAt(0).toUpperCase() + field.slice(1)}
            name={field}
            value={data[field]}
            onChange={onChange}
          />
        </Grid>
      ))}
    </Grid>
  </Box>
);

const ReviewOrder = ({ shippingAddress, paymentDetails }) => (
  <Box mt={2} className="invoice">
    <Typography variant="h6" gutterBottom>Review Order</Typography>
    {Object.entries(shippingAddress).map(([key, value]) => (
      <Typography variant="body1" className="invoice-detail" key={key}>
        <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}
      </Typography>
    ))}
    <Typography variant="body1" className="invoice-detail">
      <strong>Card Number:</strong> **** **** **** {paymentDetails.cardNumber.slice(-4)}
    </Typography>
    <Typography variant="body1" className="invoice-detail">
      <strong>Expiry Date:</strong> {paymentDetails.expiryDate}
    </Typography>
  </Box>
);

const Checkout = () => {
  const steps = ['Shipping Address', 'Payment Details', 'Review Order'];
  const [activeStep, setActiveStep] = useState(0);
  const { cartItems, getTotalPrice } = useCart(); // Use the cart context
  const [formData, setFormData] = useState({
    shippingAddress: {
      name: '',
      address: '',
      landmark: '',
      city: '',
      state: '',
      postalCode: ''
    },
    paymentDetails: {
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    },
  });
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const section = activeStep === 0 ? 'shippingAddress' : 'paymentDetails';
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [name]: value
      },
    }));
  };

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);
  const handleSubmit = () => {
    setOpen(true); // Open the modal
    setActiveStep((prev) => prev + 1);
  };

  const handleClose = () => setOpen(false);

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.addImage(logo, 'PNG', 15, 10, 50, 20); // Add your logo image
    doc.setFontSize(20);
    doc.text("Foodie Order Invoice", 75, 30);

    const shippingAddress = formData.shippingAddress;
    const paymentDetails = formData.paymentDetails;

    doc.setFontSize(12);
    doc.text(`Name: ${shippingAddress.name}`, 20, 50);
    doc.text(`Address: ${shippingAddress.address}, ${shippingAddress.landmark}`, 20, 60);
    doc.text(`City: ${shippingAddress.city}, State: ${shippingAddress.state}, Postal Code: ${shippingAddress.postalCode}`, 20, 70);

    doc.text(`Card Number: **** **** **** ${paymentDetails.cardNumber.slice(-4)}`, 20, 80);
    doc.text(`Expiry Date: ${paymentDetails.expiryDate}`, 20, 90);

    const tableColumn = ["Item", "Price", "Quantity"];
    const tableRows = [];

    cartItems.forEach((item) => {
      const itemData = [
        item.title,
        `$${item.price.toFixed(2)}`,
        item.quantity
      ];
      tableRows.push(itemData);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 100,
      theme: 'plain',
      styles: {
        overflow: 'linebreak',
        cellPadding: 2,
        fontSize: 10,
      },
      margin: { top: 100 },
    });

    doc.text(`Total: $${getTotalPrice().toFixed(2)}`, 20, doc.lastAutoTable.finalY + 10);

    doc.save("invoice.pdf");
  };

  return (
    <Container className="container">
      <Typography variant="h4" className="checkout-heading" gutterBottom>Checkout</Typography>
      <Stepper activeStep={activeStep} alternativeLabel className="stepper">
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {activeStep === 0 && (
        <FormSection
          title="Shipping Address"
          fields={formFields.shippingAddress}
          data={formData.shippingAddress}
          onChange={handleChange}
          illustration="https://img.freepik.com/free-vector/flat-courier-with-backpack-scooter-delivers-food-parcels-mails_88138-1339.jpg"
        />
      )}
      {activeStep === 1 && (
        <FormSection
          title="Payment Details"
          fields={formFields.paymentDetails}
          data={formData.paymentDetails}
          onChange={handleChange}
          illustration="https://img.freepik.com/free-vector/realistic-credit-card-design_23-2149126093.jpg?semt=ais_hybrid"
        />
      )}
      {activeStep === 2 && (
        <ReviewOrder
          shippingAddress={formData.shippingAddress}
          paymentDetails={formData.paymentDetails}
        />
      )}
      <Box mt={2} className="action-buttons">
        {activeStep > 0 && (
          <Button variant="contained" onClick={handleBack}>Back</Button>
        )}
        {activeStep < steps.length - 1 ? (
          <Button variant="contained" color="primary" onClick={handleNext}>Next</Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleSubmit}>Place Order</Button>
        )}
      </Box>

      {/* Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Order Placed Successfully</DialogTitle>
        <DialogContent>
          <Box display="flex" alignItems="center" flexDirection="column">
            <img src={tickMark} alt="Success" style={{ width: '50px', height: '50px' }} /> {/* Add green tick mark */}
            <Typography>Your order has been placed successfully. You can download your invoice below.</Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Close</Button>
          <Button onClick={generatePDF} color="primary">Download Invoice</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Checkout;

