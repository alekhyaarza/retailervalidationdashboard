package com.mndeveci.spring.boot.rest;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

@SuppressWarnings("rawtypes")
public class JobRetailerMappers implements RowMapper {

		@Override
		public JobRetailerDTO mapRow(ResultSet rs, int arg1) throws SQLException {
			// TODO Auto-generated method stub
			//t.CHECK_STATUS_STORE_TRENDS,t.DISCOVERY_STATUS,t.CHECK_STATUS_ITEM_CHECKER,t.CHECK_STATUS_DEPT_TRENDS,
			//t.CHECK_STATUS_DEPT_CHECKER,t.CHECK_STATUS_ZIP_CHECKER,t.CHECK_STATUS_BRAND_CHECKER,t.RETAILER_ID,t.PRE_PROCESSOR_STATUS,ri.RETAILER_NAME
			JobRetailerDTO objretailerDTO = new JobRetailerDTO();
			objretailerDTO.setCheckStatusBrandChecker(rs.getString("CHECK_STATUS_BRAND_CHECKER"));
			objretailerDTO.setCheckStatusDeptChecker(rs.getString("CHECK_STATUS_DEPT_CHECKER"));
			objretailerDTO.setCheckStatusDeptTrends(rs.getString("CHECK_STATUS_DEPT_TRENDS"));
			objretailerDTO.setCheckStatusItemChecker(rs.getString("CHECK_STATUS_ITEM_CHECKER"));
			objretailerDTO.setCheckStatusStoreTrends(rs.getString("CHECK_STATUS_STORE_TRENDS"));
			objretailerDTO.setCheckStatusZipChecker(rs.getString("CHECK_STATUS_ZIP_CHECKER"));
			objretailerDTO.setDiscoveryStatus(rs.getString("DISCOVERY_STATUS"));
			objretailerDTO.setPreProcessorStatus(rs.getString("PRE_PROCESSOR_STATUS"));
			objretailerDTO.setRetailerId(rs.getInt("RETAILER_ID"));
			objretailerDTO.setRetailerName(rs.getString("RETAILER_NAME"));
			objretailerDTO.setRetailerType(rs.getString("RETAILER_TYPE"));
			objretailerDTO.setDiscoveryTransferTime(rs.getInt("DISCOVERY_TRANSFER_TIME"));
			objretailerDTO.setDiscoverySplitTime(rs.getInt("DISCOVERY_SPLIT_TIME"));
			objretailerDTO.setDiscoverySplitSegments(rs.getInt("DISCOVERY_SPLIT_SEGMENTS"));
			objretailerDTO.setFileSize(rs.getInt("FILE_SIZE"));
			objretailerDTO.setDiscoveryStartTimestamp(rs.getTimestamp("DISCOVERY_START_TIMESTAMP"));
			objretailerDTO.setUserDefinedGrouup(rs.getString("USER_DEFINED_GROUP"));
			return objretailerDTO;
		}
}
