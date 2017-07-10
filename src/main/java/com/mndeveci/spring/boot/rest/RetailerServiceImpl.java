package com.mndeveci.spring.boot.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RetailerServiceImpl {
	
	@Autowired
	private RetailerDaoImpl retailerdaoimpl;
	
	@RequestMapping(value="/test",method=RequestMethod.GET)
	public String test(){
		return "loop is begin";
	}
	
	
	@RequestMapping(value="/getretailerinfo",method=RequestMethod.GET)
	public RetailerInfo getretailerinfo(){
		return retailerdaoimpl.getusergroupdetails();
	}
}
