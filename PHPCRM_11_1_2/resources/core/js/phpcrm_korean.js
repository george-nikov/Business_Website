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

	if (confirm("이 리드를 삭제하면 연락처를 포함한이 리드의 모든 데이터, 통화 기록, 참고는 영구적으로 삭제됩니다. \n 여전히이 리드를 삭제하고 싶습니까?")==true){
		if (confirm("확실히이 리드를 삭제하고 싶습니까?") == true) {
    			window.location.href = url;
		}
	}
}

//Convert Lead to Customer --Lead-view
function convert(url)
{
	if (confirm("확실히이 기회를 고객에게 변환하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

function convert_lead(url)
{
	if (confirm("이 리더를 기회로 변환하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Remove Lead Photo for Edit page to Lead --Lead-edit
function remove_lead_edit_photo(url)
{
	if (confirm("이 리드 이미지를 제거하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Lead Contacts-- Lead/view/contacts
function delete_lead_contacts(url)
{
	if (confirm("확실히이 연락처를 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Lead Calls-- Lead/view/calls
function delete_lead_call(url)
{
	if (confirm("확실히이 호출을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Lead Calls-- Lead/view/calls
function delete_lead_docs(url)
{
	if (confirm("이 문서를 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Lead Calls-- Lead/view/calls
function delete_lead_expense(url)
{
	if (confirm("확실히이 비용을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}






//Delete Lead Appointments-- Lead/view/appointments
function delete_lead_appointment(url)
{
	if (confirm("이 약속을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Lead Notes-- Lead/view/notes
function delete_lead_notes(url)
{
	if (confirm("이 메모를 삭제 하시겠습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Lead Proposals-- Lead/view/proposals
function delete_lead_proposal(url)
{
	if (confirm("이 제안을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}


//Delete opportunnty Proposals-- Opportunnty/view
function delete_opportunity(url)
{
	if (confirm("확실히이 기회를 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}


//Remove opportunnty Photo for Edit page to opportunnty --opportunity-edit
function remove_opportunity_edit_photo(url)
{
	if (confirm("확실히이 기회 이미지를 제거하고 싶습니까?") == true) {
    window.location.href = url;
	}
}
/////////////////////////////////////////Customers Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start////////////////////////////////////////////////////

//Delete Customers-- Customers/view
function delete_customer(url)
{

	if (confirm("이 고객을 삭제하면 약속, 인용문, 인보이스를 포함 하여이 고객의 모든 데이터가 영구적으로 삭제됩니다. \n 여전히이 고객을 삭제하고 싶습니까?")==true){
		if (confirm("이 고객을 삭제하고 싶습니까?") == true) {
    			window.location.href = url;
		}
	}
}


function delete_ticket(url)
{
	if (confirm("확실히이 티켓을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Remove Customer Photo Edit page in Customers --customers-edit
function remove_cus_edit_photo(url)
{
	if (confirm("이 고객 이미지를 제거하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Customer Contacts-- Customers/view/contacts
function delete_cus_contacts(url)
{
	if (confirm("확실히이 연락처를 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Customer Calls-- Customers/view/calls
function delete_cus_call(url)
{
	if (confirm("확실히이 호출을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Customer Appointments-- Customers/view/appointment
function delete_cus_appointment(url)
{
	if (confirm("이 약속을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Customer Notes-- Customers/view/notes
function delete_cus_notes(url)
{
	if (confirm("이 메모를 삭제 하시겠습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Customer Messages-- Customers/view/messages
function delete_cus_messages(url)
{
	if (confirm("확실히이 메시지를 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}


//Delete Customer Proposals-- Customers/view/proposals
function delete_cus_proposal(url)
{
	if (confirm("이 제안을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Customer Estimates-- Customers/view/estimates
function delete_cus_estimates(url)
{
	if (confirm("확실히이 견적을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Customer Invoices-- Customers/view/invoices
function delete_cus_invoice(url)
{
	if (confirm("이 송장을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

function delete_cus_quotation(url)
{
	if (confirm("확실히이 견적을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Customer Docs
function delete_cust_docs(url)
{
	if (confirm("이 문서를 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Customer Expense
function delete_cust_expense(url)
{
	if (confirm("확실히이 비용을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}




//Delete Customer Tickets-- Customers/view/ticket
function delete_cus_ticket(url)
{
	if (confirm("확실히이 티켓을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

/////////////////////////////////////////Catalog Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Products-- Catalog/Products
function delete_products(url)
{
	if (confirm("이 제품을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Category-- Catalog/Category
function delete_category(url)
{
	if (confirm("이 카테고리를 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Category-- Catalog/Category
function delete_taxes(url)
{
	if (confirm("확실히이 세금을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

function delete_tax_class(url)
{
	if (confirm("이 세금 수업을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

function confirm_delete(txt, url)
{
	if (confirm("확실히 삭제하고 싶습니다 "+txt+"?") == true) {
    window.location.href = url;
	}
}
/////////////////////////////////////////Marketing////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////
// Cancel Campaign--Marketing/Campaign
function cancel_campaign(url)
{
	if (confirm("확실히이 프로세스를 취소하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

// Cancel Template
function cancel_template(url)
{
	if (confirm("확실히이 프로세스를 취소하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Campaign-- Marketing/Campaign
function delete_campaign(url)
{
	if (confirm("확실히이 캠페인을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}


//Delete Template-- Marketing/Template
function delete_template(url)
{
	if (confirm("이 템플릿을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

function status()
{
	 alert("캠페인은 예정되지 않았습니다");
}


/////////////////////////////////////////Sales Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

function delete_proposals(url)

{

	if (confirm("이 제안을 삭제하고 싶습니까?") == true) {

    window.location.href = url;

	}

}

/////////////////////////////////////////////Start///////////////////////////////////////////////////

function delete_Estimates(url)

{

	if (confirm("확실히이 견적을 삭제하고 싶습니까?") == true) {

    window.location.href = url;

	}

}

/////////////////////////////////////////////Start///////////////////////////////////////////////////

function delete_invoices(url)

{

	if (confirm("이 송장을 삭제하고 싶습니까?") == true) {

    window.location.href = url;

	}

}

/////////////////////////////////////////Broadcast Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Expense-- Expenses/view
function delete_news(url)
{
	if (confirm("확실히이 뉴스를 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}




/////////////////////////////////////////Expenses Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Expense-- Expenses/view
function delete_expence(url)
{
	if (confirm("확실히이 비용을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Expense receipt-- Expenses/view from edit section
function remove_receipt(url)
{
	if (confirm("이 비용 영수증을 제거하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

/////////////////////////////////////////Support Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Ticket --Support/view
function delete_ticket(url)
{
	if (confirm("확실히이 티켓을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

/////////////////////////////////////////Reports Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////


//Delete proposals --Reports/Proposals Report
function delete_proposals_report(url)
{
	if (confirm("이 제안을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete estimates --Reports/Estimates Report
function delete_estimate_report(url)
{
	if (confirm("확실히이 견적을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete invoices --Reports/Invoices Report
function delete_invoice_report(url)
{
	if (confirm("이 송장을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}


function delete_lead_report(url)
{
		if (confirm("확실히이 리드 보고서를 삭제하고 싶습니까?") == true) {
    			window.location.href = url;
		}
}


function delete_opportunity_report(url)
{
		if (confirm("확실히이 기회 보고서를 삭제하고 싶습니까?") == true) {
    			window.location.href = url;
		}
}

function delete_customer_report(url)
{
		if (confirm("이 고객 보고서를 삭제하고 싶습니까?") == true) {
    			window.location.href = url;
		}
}


/////////////////////////////////////////Staff Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Staff --Staff/view
function delete_staff(url)
{
	if (confirm("확실히이 직원 멤버를 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Staff photo --Staff/Edit
function remove_staff_photo(url)
{
	if (confirm("확실히이 직원 멤버 이미지를 제거하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Department --Staff/departments
function delete_department(url)
{
	if (confirm("확실히이 부서를 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Country --Setup/country
function delete_role(url)
{
	if (confirm("이 역할을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

/////////////////////////////////////////Settings Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Security --Settings/security
function delete_security(url)
{
	if (confirm("확실히이 IP를 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}
/////////////////////////////////////////Daily Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////
//Delete Quote--Quote/view
function delete_quote(url)
{
	if (confirm("확실히이 인용문을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Notice--Notice/view
function delete_notice(url)
{
	if (confirm("이 알림을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

/////////////////////////////////////////Setup Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Country --Setup/country
function delete_country(url)
{
	if (confirm("확실히이 나라를 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Source --Setup/lead source
function delete_source(url)
{
	if (confirm("이 소스를 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Source --Setup/Department
function delete_department(url)
{
	if (confirm("확실히이 부서를 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Source --Setup/Group
function delete_group(url)
{
	if (confirm("이 그룹을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}


//Delete Expenses category --Setup/expenses
function delete_expenses_cat(url)
{
	if (confirm("확실히이 비용을 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Currency --Setup/currency
function delete_currency(url)
{
	if (confirm("이 통화를 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Messages --Messages/view
function delete_msg(url)
{
	if (confirm("확실히이 메시지를 삭제하고 싶습니까?") == true) {
    window.location.href = url;
	}
}
/////////////////////////////////////////Profile Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

function remove_photo(url)
{
	if (confirm("이 프로필 이미지를 제거하고 싶습니까?") == true) {
    window.location.href = url;
	}
}

//Delete Customer Profile image --Customer/profile
function remove_customer_profile(url)
{
	if (confirm("이 프로필 이미지를 제거하고 싶습니까?") == true) {
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
					alert("중복 항목. 다른 이메일 주소를 입력하십시오");
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
