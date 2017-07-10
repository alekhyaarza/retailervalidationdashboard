package com.mndeveci.spring.boot.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class RetailerDaoImpl {
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	
	@SuppressWarnings("unchecked")
	public RetailerInfo getusergroupdetails() {
		// TODO Auto-generated method stub
		List<JobRetailerDTO> lst1 = jdbcTemplate.query(RetailerQuerries.JOB_RETAILER_LIST_QUERY,
				new JobRetailerMappers());
		 List<UserRetailersGroup> lst2 = jdbcTemplate.query(RetailerQuerries.JOB_USER_GROUP,
				new UserRetailerGroupMappers());
		 RetailerInfo obj = new RetailerInfo();
		 obj.setUserretailerlist(lst2);
		 obj.setJobretailerlist(lst1);
		return obj;

	}

}
