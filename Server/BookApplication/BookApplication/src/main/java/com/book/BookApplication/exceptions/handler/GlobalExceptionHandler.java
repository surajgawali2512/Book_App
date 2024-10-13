package com.book.BookApplication.exceptions.handler;

import java.util.Date;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.book.BookApplication.exceptions.ItemNotFoundException;
import com.book.BookApplication.exceptions.PaymentFailedException;
import com.book.BookApplication.exceptions.models.ErrorDetails;

@ControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(ItemNotFoundException.class)
	public ResponseEntity<Object> handleItemNotFound(ItemNotFoundException ex)
	{
		ErrorDetails errorDetails=new ErrorDetails(new Date(), ex.getMessage(),"Item not found");
		return new ResponseEntity<Object>(errorDetails,HttpStatus.NOT_FOUND);
	}
	
	
	@ExceptionHandler(PaymentFailedException.class)
	public ResponseEntity<Object> handlePaymentFailed(PaymentFailedException ex) {

		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), "Payment failure");
		return new ResponseEntity<>(errorDetails, HttpStatus.PAYMENT_REQUIRED);
	}

	@ExceptionHandler(Exception.class)
	public ResponseEntity<Object> handleGlobalException(Exception ex) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), "General error occurred");
		return new ResponseEntity<>(errorDetails, HttpStatus.INTERNAL_SERVER_ERROR);
	}


}
