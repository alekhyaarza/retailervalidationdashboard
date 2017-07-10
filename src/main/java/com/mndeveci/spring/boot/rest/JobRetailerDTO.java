package com.mndeveci.spring.boot.rest;

import java.util.Date;

public class JobRetailerDTO {

	private String discoveryStatus;
	private String checkStatusStoreTrends;
	private String checkStatusItemChecker;
	private String checkStatusDeptTrends;
	private String checkStatusDeptChecker;
	private String checkStatusZipChecker;
	private String checkStatusBrandChecker;
	private int retailerId;
	private String preProcessorStatus;
	private String retailerName;
	private int discoveryTransferTime;
	private int discoverySplitTime;
	private int discoverySplitSegments;
	private String retailerType;
	
	private String userDefinedGrouup;
	private int fileSize;
	
	private Date discoveryStartTimestamp;
	
	
	
	
	
	public String getUserDefinedGrouup() {
		return userDefinedGrouup;
	}
	public void setUserDefinedGrouup(String userDefinedGrouup) {
		this.userDefinedGrouup = userDefinedGrouup;
	}
	
	public String getRetailerType() {
		return retailerType;
	}
	public void setRetailerType(String retailerType) {
		this.retailerType = retailerType;
	}
	public Date getDiscoveryStartTimestamp() {
		return discoveryStartTimestamp;
	}
	public void setDiscoveryStartTimestamp(Date discoveryStartTimestamp) {
		this.discoveryStartTimestamp = discoveryStartTimestamp;
	}
	public int getFileSize() {
		return fileSize;
	}
	public void setFileSize(int fileSize) {
		this.fileSize = fileSize;
	}
	public int getDiscoveryTransferTime() {
		return discoveryTransferTime;
	}
	public void setDiscoveryTransferTime(int discoveryTransferTime) {
		this.discoveryTransferTime = discoveryTransferTime;
	}
	public int getDiscoverySplitTime() {
		return discoverySplitTime;
	}
	public void setDiscoverySplitTime(int discoverySplitTime) {
		this.discoverySplitTime = discoverySplitTime;
	}
	public int getDiscoverySplitSegments() {
		return discoverySplitSegments;
	}
	public void setDiscoverySplitSegments(int discoverySplitSegments) {
		this.discoverySplitSegments = discoverySplitSegments;
	}
	public String getDiscoveryStatus() {
		return discoveryStatus;
	}
	public void setDiscoveryStatus(String discoveryStatus) {
		this.discoveryStatus = discoveryStatus;
	}
	public String getCheckStatusStoreTrends() {
		return checkStatusStoreTrends;
	}
	public void setCheckStatusStoreTrends(String checkStatusStoreTrends) {
		this.checkStatusStoreTrends = checkStatusStoreTrends;
	}
	public String getCheckStatusItemChecker() {
		return checkStatusItemChecker;
	}
	public void setCheckStatusItemChecker(String checkStatusItemChecker) {
		this.checkStatusItemChecker = checkStatusItemChecker;
	}
	public String getCheckStatusDeptTrends() {
		return checkStatusDeptTrends;
	}
	public void setCheckStatusDeptTrends(String checkStatusDeptTrends) {
		this.checkStatusDeptTrends = checkStatusDeptTrends;
	}
	public String getCheckStatusDeptChecker() {
		return checkStatusDeptChecker;
	}
	public void setCheckStatusDeptChecker(String checkStatusDeptChecker) {
		this.checkStatusDeptChecker = checkStatusDeptChecker;
	}
	public String getCheckStatusZipChecker() {
		return checkStatusZipChecker;
	}
	public void setCheckStatusZipChecker(String checkStatusZipChecker) {
		this.checkStatusZipChecker = checkStatusZipChecker;
	}
	public String getCheckStatusBrandChecker() {
		return checkStatusBrandChecker;
	}
	public void setCheckStatusBrandChecker(String checkStatusBrandChecker) {
		this.checkStatusBrandChecker = checkStatusBrandChecker;
	}
	public int getRetailerId() {
		return retailerId;
	}
	public void setRetailerId(int retailerId) {
		this.retailerId = retailerId;
	}
	public String getPreProcessorStatus() {
		return preProcessorStatus;
	}
	public void setPreProcessorStatus(String preProcessorStatus) {
		this.preProcessorStatus = preProcessorStatus;
	}
	public String getRetailerName() {
		return retailerName;
	}
	public void setRetailerName(String retailerName) {
		this.retailerName = retailerName;
	}
	
	
}
