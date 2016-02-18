	$(document).ready(function() {
		var empArray = [];

		var totalAnnualSalaries = 0;
		var monthlySalaries = 0;

		$('#employeeForm').on('submit', function(event) {
			event.preventDefault();
		 	
		 	//function to loop over values in array and store into our object values 
		 	var values = {};
		 	$.each($('#employeeForm').serializeArray(), function(i, field) {
	 	 		values[field.name] = field.value;
		 	});
		 	
		 	var totalAnnualSalaries = 0;
			//for (var empSalary in values) {
    			if (values.hasOwnProperty('empSalary')) {
    			totalAnnualSalaries += parseInt(values['empSalary']);
				}
			//};
		 	
		 	//totalAnnualSalaries += parseInt(values['empSalary']);  
	      	monthlySalaries = totalAnnualSalaries / 12;

		 	$('#employeeForm').find('input[type=text]').val('');
		 	$('#employeeForm').find('input[type=number]').val('');
		 	appendDom(values);
		 	appendTotal(monthlySalaries);
	 	});

	 	$(document).on('click', '.delete', function() {
    		$(this).parent().remove();
			});


		// function that appends input to dom.
		 function appendDom(empInfo) {
		 	$('#container').append('<div></div>');
		 	var $el = $('#container').children().last();		 	
		 	$el.data('timeStamp', Date.now());		 	
		 	$el.append('<p>' + empInfo.empFirstName + ' ' + empInfo.empLastName + ' ('+ empInfo.empIDNumber + ') ' + empInfo.empJobTitle + ' $' + empInfo.empSalary + '/year' + '<input type="button" class="delete" value ="Delete"</p>');				 	
		 }

		 function appendTotal(newMonthly) {
		 	$('#monthly').prop('disabled', false);
		 	$('#monthly').val(newMonthly);
		 	$('#monthly').prop('disabled', true);
		 }

	//console.log((empArray());

	});