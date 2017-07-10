package com.mndeveci.spring.boot.rest;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;


@SuppressWarnings("rawtypes")
public class UserRetailerGroupMappers implements RowMapper {
	
@Override
public UserRetailersGroup mapRow(ResultSet rs, int arg1) throws SQLException {
	// TODO Auto-generated method stub
	//t.CHECK_STATUS_STORE_TRENDS,t.DISCOVERY_STATUS,t.CHECK_STATUS_ITEM_CHECKER,t.CHECK_STATUS_DEPT_TRENDS,
	//t.CHECK_STATUS_DEPT_CHECKER,t.CHECK_STATUS_ZIP_CHECKER,t.CHECK_STATUS_BRAND_CHECKER,t.RETAILER_ID,t.PRE_PROCESSOR_STATUS,ri.RETAILER_NAME
	UserRetailersGroup objretailergroup = new UserRetailersGroup();
	
	if(null != rs.getString("USER_DEFINED_GROUP")){
		objretailergroup.setUserRetailersGroup(rs.getString("USER_DEFINED_GROUP"));
	}else{
		objretailergroup.setUserRetailersGroup("UnCategorized Group");
	}
	objretailergroup.setUserRetailersValue(rs.getString("USER_DEFINED_GROUP"));
	
	return objretailergroup;
}
}
