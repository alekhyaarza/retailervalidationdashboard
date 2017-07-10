var app = angular.module('myApp', []);

app.controller('myCtrl',function($scope, $http) {

					$scope.jobretailers = [];
					$http.get("http://localhost:5555/getretailerinfo").then(function(response) {
										
										
								$scope.jobretailers = response.data.jobretailerlist;
								$scope.selectionattr = response.data.userretailerlist;
								$scope.searchbyretailer("All my retailers");

									});
					$scope.showPopover = function() {
						  $scope.popoverIsVisible = true; 
						};

						$scope.hidePopover = function () {
						  $scope.popoverIsVisible = false;
						};
					$scope.src = "http://lslhdpcd1.npd.com:5601/app/kibana#/dashboard/test_db_store?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-1y,mode:quick,to:now))&_a=(filters:!(),options:(darkTheme:!f),panels:!((col:1,id:test_multistore_table,panelIndex:1,row:1,size_x:12,size_y:3,type:visualization)),query:(query_string:(analyze_wildcard:!t,query:'Retailer:1022+%26%26+Zip:10314+%26%26+YMW:2017022')),title:test_db_store,uiState:(P-1:(vis:(params:(sort:(columnIndex:!n,direction:!n))))))";
					$scope.getColor = function(value) {

						var color = '';
						if (value == null || value == ''  || value == 'NOT_STARTED') {
							color = '#D3D3D3';
						} else if (value == 'COMPLETE') {
							color = '#008000';
						} else if (value == 'COMPLETE_HISTORY') {
							color = '#008000';
						} else if (value == 'TRANSFER_COMPLETE') {
							color = '#ffff00';
						} else if (value == 'TRANSFERRING') {
							color = '#ffff00';
						}
						return color;
					}
					$scope.resetradios = function(){
						
						 $scope.zeroZIPS = "";
						 $scope.NegativeZIPS = "";
						 $scope.NewStore = "";
						 $scope.missingStore = "";
						 $scope.duplicatezips = "";

						 $scope.duplicatestores = "";
						 $scope.missdupstore = "";
						
					}
					$scope.generateAnalyticPieChart = function(container,
							jobretailer,retailername) {

						var colorlist = [];
						// "checkStatusStoreTrends":null,"checkStatusItemChecker":null,"checkStatusDeptTrends":null,"checkStatusDeptChecker":null,"checkStatusZipChecker":null,"checkStatusBrandChecker":null
						colorlist.push($scope.getColor(jobretailer.checkStatusStoreTrends));
						colorlist.push($scope.getColor(jobretailer.checkStatusItemChecker));
						colorlist.push($scope.getColor(jobretailer.checkStatusDeptTrends));
						colorlist.push($scope.getColor(jobretailer.checkStatusDeptChecker));
						colorlist.push($scope.getColor(jobretailer.checkStatusZipChecker));
						colorlist.push($scope.getColor(jobretailer.checkStatusBrandChecker));

						Highcharts.setOptions({
							colors : colorlist
						});

						chart = new Highcharts.Chart(
								{

									chart : {

										renderTo : container,

										plotBackgroundColor : null,

										plotBorderWidth : null,

										plotShadow : false

									},

									title : {

										text : ''

									},

									tooltip : {

										formatter : function() {

											return '<b>' + this.point.name
													+ '</b>: '
													+ this.percentage + ' %';

										}

									},
									exporting : {
										enabled : false
									},
									plotOptions : {

										pie : {

											allowPointSelect : true,

											cursor : 'pointer',
											events : {
												click : function() {
													$scope.showgraphs=!$scope.showgraphs;
													$scope.headername = retailername;
													/*$scope.srcpath = "http://lslhdpcd1.npd.com:5601/app/kibana#/dashboard/test_db_store?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-1y,mode:quick,to:now))&_a=(filters:!(),options:(darkTheme:!f),panels:!((col:1,id:test_multistore_table,panelIndex:1,row:1,size_x:12,size_y:3,type:visualization)),query:(query_string:(analyze_wildcard:!t,query:'Retailer:"+jobretailer.retailerId+"')),title:test_db_store,uiState:(P-1:(vis:(params:(sort:(columnIndex:!n,direction:!n))))))";
													
													alert($scope.srcpath);*/
													changeObjectUrl ("http://lslhdpcd1.npd.com:5601/app/kibana#/dashboard/test_db_store?_g=(refreshInterval:(display:Off,pause:!f,value:0),time:(from:now-1y,mode:quick,to:now))&_a=(filters:!(),options:(darkTheme:!f),panels:!((col:1,id:test_multistore_table,panelIndex:1,row:1,size_x:12,size_y:3,type:visualization)),query:(query_string:(analyze_wildcard:!t,query:'Retailer:"+jobretailer.retailerId+"')),title:test_db_store,uiState:(P-1:(vis:(params:(sort:(columnIndex:!n,direction:!n))))))");
													$scope.resetradios();
													$scope.$apply();
												}
											},
											dataLabels : {

												enabled : false,

												color : '#000000',

												connectorColor : '#000000',

												formatter : function() {

													return '<b>'
															+ this.point.name
															+ '</b>: ';

												}

											}

										},

									},

									series : [ {

										type : 'pie',

										name : '',

										data : [

										[ 'store', 16.66 ],
												[ 'checker', 16.66 ],
												[ 'depttrends', 16.66 ],
												[ 'deptchecker', 16.66 ],
												[ 'zipchecker', 16.66 ],
												[ 'brandchecker', 16.66 ]

										]

									} ]

								});

					}

					$scope.generatePieChart = function(container, text, value,
							hovermsg,retailername) {

						var colorlist = [];
						// "checkStatusStoreTrends":null,"checkStatusItemChecker":null,"checkStatusDeptTrends":null,"checkStatusDeptChecker":null,"checkStatusZipChecker":null,"checkStatusBrandChecker":null
						colorlist.push($scope.getColor(value));

						Highcharts.setOptions({
							colors : colorlist
						});

						chart = new Highcharts.Chart(
								{

									chart : {

										renderTo : container,

										plotBackgroundColor : null,

										plotBorderWidth : null,

										plotShadow : false

									},

									title : {

										text : ''

									},

									tooltip : {

										formatter : function() {

											return '<b>' + hovermsg + '</b>: ';// +
																				// this.percentage
																				// +'
																				// %'

										}

									},
									exporting : {
										enabled : false
									},
									plotOptions : {

										pie : {

											allowPointSelect : true,

											cursor : 'pointer',
											/*events : {
												click : function() {
													$scope.showgraphs=!$scope.showgraphs;
													$scope.headername = retailername;
													$scope.resetradios();
													$scope.$digest();
												}
											},*/
											dataLabels : {

												enabled : false,

												color : '#000000',

												connectorColor : '#000000',

											}

										}

									},

									series : [ {

										type : 'pie',

										name : '',

										data : [

										[ text, 100 ],

										]

									} ]

								});

					}
					setTimeout(function() {

								for (var i = 0; i < $scope.jobretailers.length; i++) {

									$scope.generatePieChart('gfile' + i,'gfile',
													$scope.jobretailers[i].discoveryStatus,
													'File Size:'+ $scope.jobretailers[i].fileSize+ '<br> Arrival Time:'+ $scope.jobretailers[i].discoveryStartTimestamp,$scope.jobretailers[i].retailerId+" "+$scope.jobretailers[i].retailerName);
									$scope.generatePieChart('transfer' + i,'transfer',$scope.jobretailers[i].discoveryStatus,
													'Transfer Time:'+ $scope.jobretailers[i].discoveryTransferTime + '<br> Split Time:'
													+ $scope.jobretailers[i].discoverySplitTime+ '<br> Split Segments:'+ $scope.jobretailers[i].discoverySplitSegments,$scope.jobretailers[i].retailerId+" "+$scope.jobretailers[i].retailerName);
									$scope.generatePieChart(
													'preprocessor' + i,'preprocessor',
													$scope.jobretailers[i].preProcessorStatus,'Process time:<br>Number of line items:  <br>Number of Dept/Classes: <br>Number of Stores: ',$scope.jobretailers[i].retailerId+" "+$scope.jobretailers[i].retailerName);
									$scope.generateAnalyticPieChart('analytics'+ i, $scope.jobretailers[i],$scope.jobretailers[i].retailerId+" "+$scope.jobretailers[i].retailerName);

									var overall = '';
									if ($scope.jobretailers[i].discoveryStatus == null
											|| $scope.jobretailers[i].preProcessorStatus == null
											|| $scope.jobretailers[i].checkStatusStoreTrends == null
											|| $scope.jobretailers[i].checkStatusItemChecker == null
											|| $scope.jobretailers[i].checkStatusDeptTrends == null
											|| $scope.jobretailers[i].checkStatusDeptChecker == null
											|| $scope.jobretailers[i].checkStatusZipChecker == null
											|| $scope.jobretailers[i].checkStatusBrandChecker == null) {
										overall = null;
									}
									$scope.generatePieChart('overall' + i,
											'overall', overall,$scope.jobretailers[i].retailerId+" "+$scope.jobretailers[i].retailerName);
								}
								$scope.$apply();

							}, 1000);
					$scope.myselection = 'retailtooltip';
					/*
					 * $scope.selectionattr = ["Platinum Retailers", "Critical
					 * Retailers", "Partner Retailers"];
					 */
					$scope.sortattr = [ "Retailer Number", "Retailer Name",
							"Most Errors", "Largest $" ];

					$scope.searchbyretailer = function(name) {

						$scope.retailers = [];
						if (name != 'All my retailers'
								&& name != 'Richard’s Favorites') {

							var count = 0;
							for (var i = 0; i < $scope.jobretailers.length; i++) {

								if ($scope.jobretailers[i].userDefinedGrouup == name) {
									$scope.retailers[count] = $scope.jobretailers[i];
									count++;
								}

							}
							$scope.jobretailerscopy = $scope.retailers;

						} else {
							$scope.jobretailerscopy = $scope.jobretailers;
						}
						
						

						setTimeout(
								function() {

									for (var i = 0; i < $scope.jobretailerscopy.length; i++) {

										$scope
												.generatePieChart(
														'gfile' + i,
														'gfile',
														$scope.jobretailerscopy[i].discoveryStatus,
														'File Size:'
																+ $scope.jobretailers[i].fileSize
																+ '<br> Arrival Time:'
																+ $scope.jobretailers[i].discoveryStartTimestamp,$scope.jobretailers[i].retailerId+" "+$scope.jobretailers[i].retailerName);
										$scope
												.generatePieChart(
														'transfer' + i,
														'transfer',
														$scope.jobretailerscopy[i].discoveryStatus,
														'Transfer Time:'
																+ $scope.jobretailers[i].discoveryTransferTime
																+ '<br> Split Time:'
																+ $scope.jobretailers[i].discoverySplitTime
																+ '<br> Split Segments:'
																+ $scope.jobretailers[i].discoverySplitSegments,$scope.jobretailers[i].retailerId+" "+$scope.jobretailers[i].retailerName);
										$scope
												.generatePieChart(
														'preprocessor' + i,
														'preprocessor',
														$scope.jobretailers[i].preProcessorStatus,
														'Process time:<br>Number of line items:  <br>Number of Dept/Classes: <br>Number of Stores: ',$scope.jobretailers[i].retailerId+" "+$scope.jobretailers[i].retailerName);
										$scope.generateAnalyticPieChart(
												'analytics' + i,
												$scope.jobretailers[i],$scope.jobretailers[i].retailerId+" "+$scope.jobretailers[i].retailerName);

										var overall = '';
										if ($scope.jobretailers[i].discoveryStatus == null
												|| $scope.jobretailers[i].preProcessorStatus == null
												|| $scope.jobretailers[i].checkStatusStoreTrends == null
												|| $scope.jobretailers[i].checkStatusItemChecker == null
												|| $scope.jobretailers[i].checkStatusDeptTrends == null
												|| $scope.jobretailers[i].checkStatusDeptChecker == null
												|| $scope.jobretailers[i].checkStatusZipChecker == null
												|| $scope.jobretailers[i].checkStatusBrandChecker == null) {
											overall = null;
										}
										$scope.generatePieChart('overall' + i,
												'overall', overall,$scope.jobretailers[i].retailerId+" "+$scope.jobretailers[i].retailerName);
									}
									$scope.$apply();

								}, 1000);

					}

				});

function changeObjectUrl(newUrl)
{
	
    var div = document.getElementById("kibana");
  
    div.innerHTML = "";
    var oContentArea = document.createElement("object");
    if (oContentArea != null)
    {
    	oContentArea.setAttribute('data', newUrl);
    	oContentArea.setAttribute('height', '600px');
    	oContentArea.setAttribute('width', '900px');
    	div.appendChild(oContentArea);
        
    }
   // var oClone = oContentArea.cloneNode(true); 
    


}
/*app.directive('kibana', function() {
    return {
        restrict: 'E',
        scope: {
          src: '@'
        },
        link: function(scope, element) {
            var object = '<object type="text/html" data="' + scope.src + '"  width="1000px" height="600px">' +
              
            '</object>';
            element.replaceWith(object);
        }
    };
});*/