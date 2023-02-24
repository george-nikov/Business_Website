// JavaScript Document
$('#copy_address').click(function(){
	$('#customer_name').val($('#company_name').val());
	$('#customer_phone').val($('#company_phone').val());
	$('#customer_email').val($('#company_email').val());
});
$('#copy_address2').click(function(){
	$('#billing_street').val($('#company_street').val());
	$('#billing_city').val($('#company_city').val());
	$('#billing_state').val($('#company_state').val());
	$('#billing_zip').val($('#company_zip').val());
	$('#billing_country').val($('#company_country').val());
});

$('#copy_billing').click(function(){
	$('#shipping_street').val($('#billing_street').val());
	$('#shipping_city').val($('#billing_city').val());
	$('#shipping_state').val($('#billing_state').val());
	$('#shipping_zip').val($('#billing_zip').val());
	$('#shipping_country').val($('#billing_country').val());
});



//Delete lead --Lead-view
function delete_lead(url)
{

	if (confirm("यदि आप इस लीड के सभी डेटा को हटाते हैं, तो संपर्क, कॉल इतिहास, नोट्स को स्थायी रूप से हटा दिया जाएगा। \n क्या आप अभी भी इस लीड को हटाना चाहते हैं?")==true){
		if (confirm("क्या आप निश्चित हैं, आप इस लीड को हटाना चाहते हैं?") == true) {
    			window.location.href = url;
		}
	}
}

//Convert Lead to Customer --Lead-view
function convert(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस संभावित ग्राहक को ग्राहक में परिवर्तित करना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

function convert_lead(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस लीड को संभावित ग्राहक में परिवर्तित करना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Remove Lead Photo for Edit page to Lead --Lead-edit
function remove_lead_edit_photo(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस लीड छवि को हटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Lead Contacts-- Lead/view/contacts
function delete_lead_contacts(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस संपर्क को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Lead Calls-- Lead/view/calls
function delete_lead_call(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस कॉल को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Lead Calls-- Lead/view/calls
function delete_lead_docs(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस दस्तावेज़ को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Lead Calls-- Lead/view/calls
function delete_lead_expense(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस खर्च को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}






//Delete Lead Appointments-- Lead/view/appointments
function delete_lead_appointment(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस नियुक्ति को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Lead Notes-- Lead/view/notes
function delete_lead_notes(url)
{
	if (confirm("क्या आप पक्का इस नोट को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Lead Proposals-- Lead/view/proposals
function delete_lead_proposal(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस प्रस्ताव को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}


//Delete opportunnty Proposals-- Opportunnty/view
function delete_opportunity(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस संभावित ग्राहक को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}


//Remove opportunnty Photo for Edit page to opportunnty --opportunity-edit
function remove_opportunity_edit_photo(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस संभावित ग्राहक छवि को हटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}
/////////////////////////////////////////Customers Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start////////////////////////////////////////////////////

//Delete Customers-- Customers/view
function delete_customer(url)
{

	if (confirm("यदि आप इस ग्राहक को हटाते हैं तो इस ग्राहक का अपॉइंटमेंट, कोटेशन, इनवॉइस, टिकट सहित सभी डेटा स्थायी रूप से हटा दिया जाएगा। \n क्या आप अभी भी इस ग्राहकों को हटाना चाहते हैं?")==true){
		if (confirm("क्या आप निश्चित हैं, आप इस ग्राहक को हटाना चाहते हैं?") == true) {
    			window.location.href = url;
		}
	}
}


function delete_ticket(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस टिकट को हटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Remove Customer Photo Edit page in Customers --customers-edit
function remove_cus_edit_photo(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस ग्राहक छवि को हटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Customer Contacts-- Customers/view/contacts
function delete_cus_contacts(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस संपर्क को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Customer Calls-- Customers/view/calls
function delete_cus_call(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस कॉल को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Customer Appointments-- Customers/view/appointment
function delete_cus_appointment(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस नियुक्ति को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Customer Notes-- Customers/view/notes
function delete_cus_notes(url)
{
	if (confirm("क्या आप पक्का इस नोट को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Customer Messages-- Customers/view/messages
function delete_cus_messages(url)
{
	if (confirm("क्या आप निश्चित रूप से यह संदेश हटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}


//Delete Customer Proposals-- Customers/view/proposals
function delete_cus_proposal(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस प्रस्ताव को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Customer Estimates-- Customers/view/estimates
function delete_cus_estimates(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस अनुमान को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Customer Invoices-- Customers/view/invoices
function delete_cus_invoice(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस चालान को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

function delete_cus_quotation(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस उद्धरण को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Customer Docs
function delete_cust_docs(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस दस्तावेज़ को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Customer Expense
function delete_cust_expense(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस खर्च को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}




//Delete Customer Tickets-- Customers/view/ticket
function delete_cus_ticket(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस टिकट को हटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

/////////////////////////////////////////Catalog Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Products-- Catalog/Products
function delete_products(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस उत्पाद को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Category-- Catalog/Category
function delete_category(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस श्रेणी को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Category-- Catalog/Category
function delete_taxes(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस कर को हटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

function delete_tax_class(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस कर वर्ग को हटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

function confirm_delete(txt, url)
{
	if (confirm("क्या आप वाकई इसे हटाना चाहते हैं "+txt+"?") == true) {
    window.location.href = url;
	}
}
/////////////////////////////////////////Marketing////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////
// Cancel Campaign--Marketing/Campaign
function cancel_campaign(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस प्रक्रिया को रद्द करना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

// Cancel Template
function cancel_template(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस प्रक्रिया को रद्द करना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Campaign-- Marketing/Campaign
function delete_campaign(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस अभियान को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}


//Delete Template-- Marketing/Template
function delete_template(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस टेम्पलेट को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

function status()
{
	 alert("अभियान निर्धारित नहीं है");
}


/////////////////////////////////////////Sales Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

function delete_proposals(url)

{

	if (confirm("क्या आप निश्चित हैं, आप इस प्रस्ताव को मिटाना चाहते हैं?") == true) {

    window.location.href = url;

	}

}

/////////////////////////////////////////////Start///////////////////////////////////////////////////

function delete_Estimates(url)

{

	if (confirm("क्या आप निश्चित हैं, आप इस अनुमान को मिटाना चाहते हैं?") == true) {

    window.location.href = url;

	}

}

/////////////////////////////////////////////Start///////////////////////////////////////////////////

function delete_invoices(url)

{

	if (confirm("क्या आप निश्चित हैं, आप इस चालान को मिटाना चाहते हैं?") == true) {

    window.location.href = url;

	}

}

/////////////////////////////////////////Broadcast Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Expense-- Expenses/view
function delete_news(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस समाचार को हटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}




/////////////////////////////////////////Expenses Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Expense-- Expenses/view
function delete_expence(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस खर्च को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Expense receipt-- Expenses/view from edit section
function remove_receipt(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस व्यय रसीद को हटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

/////////////////////////////////////////Support Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Ticket --Support/view
function delete_ticket(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस टिकट को हटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

/////////////////////////////////////////Reports Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////


//Delete proposals --Reports/Proposals Report
function delete_proposals_report(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस प्रस्ताव को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete estimates --Reports/Estimates Report
function delete_estimate_report(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस अनुमान को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete invoices --Reports/Invoices Report
function delete_invoice_report(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस चालान को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}


function delete_lead_report(url)
{
		if (confirm("क्या आप निश्चित हैं, आप इस लीड रिपोर्ट को मिटाना चाहते हैं?") == true) {
    			window.location.href = url;
		}
}


function delete_opportunity_report(url)
{
		if (confirm("क्या आप निश्चित हैं, आप इस संभावित ग्राहक रिपोर्ट को हटाना चाहते हैं?") == true) {
    			window.location.href = url;
		}
}

function delete_customer_report(url)
{
		if (confirm("क्या आप निश्चित हैं, आप इस ग्राहक रिपोर्ट को मिटाना चाहते हैं?") == true) {
    			window.location.href = url;
		}
}


/////////////////////////////////////////Staff Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Staff --Staff/view
function delete_staff(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस स्टाफ सदस्य को हटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Staff photo --Staff/Edit
function remove_staff_photo(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस स्टाफ सदस्य छवि को हटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Department --Staff/departments
function delete_department(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस विभाग को हटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Country --Setup/country
function delete_role(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस भूमिका को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

/////////////////////////////////////////Settings Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Security --Settings/security
function delete_security(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस आईपी को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}
/////////////////////////////////////////Daily Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////
//Delete Quote--Quote/view
function delete_quote(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस उद्धरण को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Notice--Notice/view
function delete_notice(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस नोटिस को हटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

/////////////////////////////////////////Setup Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Country --Setup/country
function delete_country(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस देश को हटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Source --Setup/lead source
function delete_source(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस स्रोत को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Source --Setup/Department
function delete_department(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस विभाग को हटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Source --Setup/Group
function delete_group(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस समूह को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}


//Delete Expenses category --Setup/expenses
function delete_expenses_cat(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस खर्च को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Currency --Setup/currency
function delete_currency(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस मुद्रा को मिटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Messages --Messages/view
function delete_msg(url)
{
	if (confirm("क्या आप निश्चित रूप से यह संदेश हटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}
/////////////////////////////////////////Profile Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

function remove_photo(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस प्रोफ़ाइल छवि को हटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

//Delete Customer Profile image --Customer/profile
function remove_customer_profile(url)
{
	if (confirm("क्या आप निश्चित हैं, आप इस प्रोफ़ाइल छवि को हटाना चाहते हैं?") == true) {
    window.location.href = url;
	}
}

function check_duplicate(siteurl,email)
{
 if(email != '')
	{
         $.ajax({
		url: siteurl + "/check_duplicate/" + email,
                success : function(response)
                {

					if(response==1)
					{
					alert("डुप्लीकेट प्रवेश। कृपया एक और ईमेल पता दर्ज करें");
					jQuery('#company_email').val('');

					}
					else {
						jQuery('#email').val(email);
					}

						    }
            });
	}
        else
            jQuery('#DuplicateCheck').html('');
}
