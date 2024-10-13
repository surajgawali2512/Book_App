package com.book.BookApplication.exceptions;

public class PaymentFailedException extends RuntimeException{
	
	public PaymentFailedException(String message)
	{
		super(message);
	}

}
