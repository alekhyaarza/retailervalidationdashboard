package com.mndeveci.spring.boot.rest;

import java.util.List;

public class RetailerInfo {

	private List<JobRetailerDTO> jobretailerlist;
	private List<UserRetailersGroup> userretailerlist;
	
	public List<JobRetailerDTO> getJobretailerlist() {
		return jobretailerlist;
	}
	public  void setJobretailerlist(List<JobRetailerDTO> jobretailerlist) {
		this.jobretailerlist = jobretailerlist;
	}
	public  List<UserRetailersGroup> getUserretailerlist() {
		return userretailerlist;
	}
	public  void setUserretailerlist(List<UserRetailersGroup> userretailerlist) {
		this.userretailerlist = userretailerlist;
	}
	
	
	
}
