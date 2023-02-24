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

	if (confirm("إذا قمت بحذف هذا قيادة جميع بيانات هذه الرصاص بما في ذلك جهات الاتصال، فسيتم حذف سجل المكالمة، وسيتم حذف الملاحظات بشكل دائم. \n هل ما زلت تريد حذف هذا الرصاص؟")==true){
		if (confirm("هل أنت متأكد من أنك تريد حذف هذا الرصاص؟") == true) {
    			window.location.href = url;
		}
	}
}

//Convert Lead to Customer --Lead-view
function convert(url)
{
	if (confirm("هل أنت متأكد من أنك تريد تحويل هذه الفرصة إلى العملاء؟") == true) {
    window.location.href = url;
	}
}

function convert_lead(url)
{
	if (confirm("هل أنت متأكد من أنك تريد تحويل هذا يؤدي إلى فرصة؟") == true) {
    window.location.href = url;
	}
}

//Remove Lead Photo for Edit page to Lead --Lead-edit
function remove_lead_edit_photo(url)
{
	if (confirm("هل أنت متأكد من أنك تريد إزالة هذه الصورة الرصاصة؟") == true) {
    window.location.href = url;
	}
}

//Delete Lead Contacts-- Lead/view/contacts
function delete_lead_contacts(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذا الاتصال؟") == true) {
    window.location.href = url;
	}
}

//Delete Lead Calls-- Lead/view/calls
function delete_lead_call(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذه المكالمة؟") == true) {
    window.location.href = url;
	}
}

//Delete Lead Calls-- Lead/view/calls
function delete_lead_docs(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذه المستندات؟") == true) {
    window.location.href = url;
	}
}

//Delete Lead Calls-- Lead/view/calls
function delete_lead_expense(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذه النفقات؟") == true) {
    window.location.href = url;
	}
}






//Delete Lead Appointments-- Lead/view/appointments
function delete_lead_appointment(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذا الموعد؟") == true) {
    window.location.href = url;
	}
}

//Delete Lead Notes-- Lead/view/notes
function delete_lead_notes(url)
{
	if (confirm("هل أنت متأكد أنك تريد حذف هذه الملاحظة؟") == true) {
    window.location.href = url;
	}
}

//Delete Lead Proposals-- Lead/view/proposals
function delete_lead_proposal(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذا الاقتراح؟") == true) {
    window.location.href = url;
	}
}


//Delete opportunnty Proposals-- Opportunnty/view
function delete_opportunity(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذه الفرصة؟") == true) {
    window.location.href = url;
	}
}


//Remove opportunnty Photo for Edit page to opportunnty --opportunity-edit
function remove_opportunity_edit_photo(url)
{
	if (confirm("هل أنت متأكد من أنك تريد إزالة هذه الفرصة؟") == true) {
    window.location.href = url;
	}
}
/////////////////////////////////////////Customers Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start////////////////////////////////////////////////////

//Delete Customers-- Customers/view
function delete_customer(url)
{

	if (confirm("إذا قمت بحذف هذا العميل جميع بيانات هذا العميل بما في ذلك المواعيد والاقتباسات والفواتير، سيتم حذف التذاكر بشكل دائم. \n هل ما زلت ترغب في حذف هذا العملاء؟")==true){
		if (confirm("هل أنت متأكد من أنك تريد حذف هذا العميل؟") == true) {
    			window.location.href = url;
		}
	}
}


function delete_ticket(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذه التذكرة؟") == true) {
    window.location.href = url;
	}
}

//Remove Customer Photo Edit page in Customers --customers-edit
function remove_cus_edit_photo(url)
{
	if (confirm("هل أنت متأكد من أنك تريد إزالة صورة العميل هذه؟") == true) {
    window.location.href = url;
	}
}

//Delete Customer Contacts-- Customers/view/contacts
function delete_cus_contacts(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذا الاتصال؟") == true) {
    window.location.href = url;
	}
}

//Delete Customer Calls-- Customers/view/calls
function delete_cus_call(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذه المكالمة؟") == true) {
    window.location.href = url;
	}
}

//Delete Customer Appointments-- Customers/view/appointment
function delete_cus_appointment(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذا الموعد؟") == true) {
    window.location.href = url;
	}
}

//Delete Customer Notes-- Customers/view/notes
function delete_cus_notes(url)
{
	if (confirm("هل أنت متأكد أنك تريد حذف هذه الملاحظة؟") == true) {
    window.location.href = url;
	}
}

//Delete Customer Messages-- Customers/view/messages
function delete_cus_messages(url)
{
	if (confirm("هل أنت متأكد أنك تريد حذف هذه الرسالة؟") == true) {
    window.location.href = url;
	}
}


//Delete Customer Proposals-- Customers/view/proposals
function delete_cus_proposal(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذا الاقتراح؟") == true) {
    window.location.href = url;
	}
}

//Delete Customer Estimates-- Customers/view/estimates
function delete_cus_estimates(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذا التقدير؟") == true) {
    window.location.href = url;
	}
}

//Delete Customer Invoices-- Customers/view/invoices
function delete_cus_invoice(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذه الفاتورة؟") == true) {
    window.location.href = url;
	}
}

function delete_cus_quotation(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذا الاقتباس؟") == true) {
    window.location.href = url;
	}
}

//Delete Customer Docs
function delete_cust_docs(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذه المستندات؟") == true) {
    window.location.href = url;
	}
}

//Delete Customer Expense
function delete_cust_expense(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذه النفقات؟") == true) {
    window.location.href = url;
	}
}




//Delete Customer Tickets-- Customers/view/ticket
function delete_cus_ticket(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذه التذكرة؟") == true) {
    window.location.href = url;
	}
}

/////////////////////////////////////////Catalog Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Products-- Catalog/Products
function delete_products(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذا المنتج؟") == true) {
    window.location.href = url;
	}
}

//Delete Category-- Catalog/Category
function delete_category(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذه الفئة؟") == true) {
    window.location.href = url;
	}
}

//Delete Category-- Catalog/Category
function delete_taxes(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذه الضريبة؟") == true) {
    window.location.href = url;
	}
}

function delete_tax_class(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذه الفئة الضريبية؟") == true) {
    window.location.href = url;
	}
}

function confirm_delete(txt, url)
{
	if (confirm("هل أنت متأكد أنك تريد حذف هذا "+txt+"?") == true) {
    window.location.href = url;
	}
}
/////////////////////////////////////////Marketing////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////
// Cancel Campaign--Marketing/Campaign
function cancel_campaign(url)
{
	if (confirm("هل أنت متأكد من أنك تريد إلغاء هذه العملية؟") == true) {
    window.location.href = url;
	}
}

// Cancel Template
function cancel_template(url)
{
	if (confirm("هل أنت متأكد من أنك تريد إلغاء هذه العملية؟") == true) {
    window.location.href = url;
	}
}

//Delete Campaign-- Marketing/Campaign
function delete_campaign(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذه الحملة؟") == true) {
    window.location.href = url;
	}
}


//Delete Template-- Marketing/Template
function delete_template(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذا القالب؟") == true) {
    window.location.href = url;
	}
}

function status()
{
	 alert("الحملة غير المقرر");
}


/////////////////////////////////////////Sales Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

function delete_proposals(url)

{

	if (confirm("هل أنت متأكد من أنك تريد حذف هذا الاقتراح؟") == true) {

    window.location.href = url;

	}

}

/////////////////////////////////////////////Start///////////////////////////////////////////////////

function delete_Estimates(url)

{

	if (confirm("هل أنت متأكد من أنك تريد حذف هذا التقدير؟") == true) {

    window.location.href = url;

	}

}

/////////////////////////////////////////////Start///////////////////////////////////////////////////

function delete_invoices(url)

{

	if (confirm("هل أنت متأكد من أنك تريد حذف هذه الفاتورة؟") == true) {

    window.location.href = url;

	}

}

/////////////////////////////////////////Broadcast Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Expense-- Expenses/view
function delete_news(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذه الأخبار؟") == true) {
    window.location.href = url;
	}
}




/////////////////////////////////////////Expenses Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Expense-- Expenses/view
function delete_expence(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذه النفقات؟") == true) {
    window.location.href = url;
	}
}

//Delete Expense receipt-- Expenses/view from edit section
function remove_receipt(url)
{
	if (confirm("هل أنت متأكد من أنك تريد إخراج استلام هذا المصاريف؟") == true) {
    window.location.href = url;
	}
}

/////////////////////////////////////////Support Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Ticket --Support/view
function delete_ticket(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذه التذكرة؟") == true) {
    window.location.href = url;
	}
}

/////////////////////////////////////////Reports Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////


//Delete proposals --Reports/Proposals Report
function delete_proposals_report(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذا الاقتراح؟") == true) {
    window.location.href = url;
	}
}

//Delete estimates --Reports/Estimates Report
function delete_estimate_report(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذا التقدير؟") == true) {
    window.location.href = url;
	}
}

//Delete invoices --Reports/Invoices Report
function delete_invoice_report(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذه الفاتورة؟") == true) {
    window.location.href = url;
	}
}


function delete_lead_report(url)
{
		if (confirm("هل أنت متأكد من أنك تريد حذف هذا التقرير الرصاص؟") == true) {
    			window.location.href = url;
		}
}


function delete_opportunity_report(url)
{
		if (confirm("هل أنت متأكد من أنك تريد حذف تقرير هذه الفرص؟") == true) {
    			window.location.href = url;
		}
}

function delete_customer_report(url)
{
		if (confirm("هل أنت متأكد من أنك تريد حذف تقرير العملاء هذا؟") == true) {
    			window.location.href = url;
		}
}


/////////////////////////////////////////Staff Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Staff --Staff/view
function delete_staff(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذا الموظف؟") == true) {
    window.location.href = url;
	}
}

//Delete Staff photo --Staff/Edit
function remove_staff_photo(url)
{
	if (confirm("هل أنت متأكد من أنك تريد إزالة صورة الموظف هذه؟") == true) {
    window.location.href = url;
	}
}

//Delete Department --Staff/departments
function delete_department(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذا القسم؟") == true) {
    window.location.href = url;
	}
}

//Delete Country --Setup/country
function delete_role(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذا الدور؟") == true) {
    window.location.href = url;
	}
}

/////////////////////////////////////////Settings Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Security --Settings/security
function delete_security(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذا IP؟") == true) {
    window.location.href = url;
	}
}
/////////////////////////////////////////Daily Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////
//Delete Quote--Quote/view
function delete_quote(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذا الاقتباس؟") == true) {
    window.location.href = url;
	}
}

//Delete Notice--Notice/view
function delete_notice(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذا الإشعار؟") == true) {
    window.location.href = url;
	}
}

/////////////////////////////////////////Setup Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Country --Setup/country
function delete_country(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذا البلد؟") == true) {
    window.location.href = url;
	}
}

//Delete Source --Setup/lead source
function delete_source(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذا المصدر؟") == true) {
    window.location.href = url;
	}
}

//Delete Source --Setup/Department
function delete_department(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذا القسم؟") == true) {
    window.location.href = url;
	}
}

//Delete Source --Setup/Group
function delete_group(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذه المجموعة؟") == true) {
    window.location.href = url;
	}
}


//Delete Expenses category --Setup/expenses
function delete_expenses_cat(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذه النفقات؟") == true) {
    window.location.href = url;
	}
}

//Delete Currency --Setup/currency
function delete_currency(url)
{
	if (confirm("هل أنت متأكد من أنك تريد حذف هذه العملة؟") == true) {
    window.location.href = url;
	}
}

//Delete Messages --Messages/view
function delete_msg(url)
{
	if (confirm("هل أنت متأكد أنك تريد حذف هذه الرسالة؟") == true) {
    window.location.href = url;
	}
}
/////////////////////////////////////////Profile Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

function remove_photo(url)
{
	if (confirm("هل أنت متأكد من أنك تريد إزالة صورة الملف الشخصي هذه؟") == true) {
    window.location.href = url;
	}
}

//Delete Customer Profile image --Customer/profile
function remove_customer_profile(url)
{
	if (confirm("هل أنت متأكد من أنك تريد إزالة صورة الملف الشخصي هذه؟") == true) {
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
					alert("إدخال مكرر. الرجاء إدخال عنوان بريد إلكتروني آخر");
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
