package com.book.BookApplication.exceptions;

public class ItemNotFoundException extends RuntimeException{
	
	public ItemNotFoundException(String message)
	{
		super(message);
	}

}
