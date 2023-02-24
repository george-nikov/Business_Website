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

	if (confirm("このリードを削除すると、連絡先、通話履歴、ノートなど、このリードのすべてのデータが永続的に削除されます。 \n まだこのリードを削除したいですか？")==true){
		if (confirm("あなたは確かにあなたがこのリードを削除したいですか？") == true) {
    			window.location.href = url;
		}
	}
}

//Convert Lead to Customer --Lead-view
function convert(url)
{
	if (confirm("あなたは確かにあなたがこの機会を顧客に変換したいですか？") == true) {
    window.location.href = url;
	}
}

function convert_lead(url)
{
	if (confirm("あなたは確かにあなたがこのリードを機会に変換したいですか？") == true) {
    window.location.href = url;
	}
}

//Remove Lead Photo for Edit page to Lead --Lead-edit
function remove_lead_edit_photo(url)
{
	if (confirm("あなたは確かにあなたがこのリードイメージを削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete Lead Contacts-- Lead/view/contacts
function delete_lead_contacts(url)
{
	if (confirm("あなたは確かにこの連絡先を削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete Lead Calls-- Lead/view/calls
function delete_lead_call(url)
{
	if (confirm("あなたは確かにあなたがこの電話を削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete Lead Calls-- Lead/view/calls
function delete_lead_docs(url)
{
	if (confirm("確かに、このドキュメントを削除しますか？") == true) {
    window.location.href = url;
	}
}

//Delete Lead Calls-- Lead/view/calls
function delete_lead_expense(url)
{
	if (confirm("あなたは確かにあなたがこの費用を削除したいですか？") == true) {
    window.location.href = url;
	}
}






//Delete Lead Appointments-- Lead/view/appointments
function delete_lead_appointment(url)
{
	if (confirm("あなたは確かにあなたがこの予定を削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete Lead Notes-- Lead/view/notes
function delete_lead_notes(url)
{
	if (confirm("確かに、このノートを削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete Lead Proposals-- Lead/view/proposals
function delete_lead_proposal(url)
{
	if (confirm("確かに、この提案を削除したいですか？") == true) {
    window.location.href = url;
	}
}


//Delete opportunnty Proposals-- Opportunnty/view
function delete_opportunity(url)
{
	if (confirm("あなたは確かにあなたがこの機会を削除したいですか？") == true) {
    window.location.href = url;
	}
}


//Remove opportunnty Photo for Edit page to opportunnty --opportunity-edit
function remove_opportunity_edit_photo(url)
{
	if (confirm("あなたは確かにあなたがこの機会イメージを削除したいですか？") == true) {
    window.location.href = url;
	}
}
/////////////////////////////////////////Customers Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start////////////////////////////////////////////////////

//Delete Customers-- Customers/view
function delete_customer(url)
{

	if (confirm("予定、見積、請求書を含むこの顧客のすべてのデータを削除すると、チケットは恒久的に削除されます。 \n まだこの顧客を削除したいですか？")==true){
		if (confirm("あなたは確かにあなたがこの顧客を削除したいですか？") == true) {
    			window.location.href = url;
		}
	}
}


function delete_ticket(url)
{
	if (confirm("確かに、このチケットを削除しますか？") == true) {
    window.location.href = url;
	}
}

//Remove Customer Photo Edit page in Customers --customers-edit
function remove_cus_edit_photo(url)
{
	if (confirm("あなたは確かにこの顧客イメージを削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete Customer Contacts-- Customers/view/contacts
function delete_cus_contacts(url)
{
	if (confirm("あなたは確かにこの連絡先を削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete Customer Calls-- Customers/view/calls
function delete_cus_call(url)
{
	if (confirm("あなたは確かにあなたがこの電話を削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete Customer Appointments-- Customers/view/appointment
function delete_cus_appointment(url)
{
	if (confirm("あなたは確かにあなたがこの予定を削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete Customer Notes-- Customers/view/notes
function delete_cus_notes(url)
{
	if (confirm("確かに、このノートを削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete Customer Messages-- Customers/view/messages
function delete_cus_messages(url)
{
	if (confirm("確かにこのメッセージを削除しますか？") == true) {
    window.location.href = url;
	}
}


//Delete Customer Proposals-- Customers/view/proposals
function delete_cus_proposal(url)
{
	if (confirm("確かに、この提案を削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete Customer Estimates-- Customers/view/estimates
function delete_cus_estimates(url)
{
	if (confirm("あなたは確かにあなたがこの見積もりを削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete Customer Invoices-- Customers/view/invoices
function delete_cus_invoice(url)
{
	if (confirm("あなたは確かにあなたがこの請求書を削除したいですか？") == true) {
    window.location.href = url;
	}
}

function delete_cus_quotation(url)
{
	if (confirm("あなたは確かにこの引用を削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete Customer Docs
function delete_cust_docs(url)
{
	if (confirm("確かに、このドキュメントを削除しますか？") == true) {
    window.location.href = url;
	}
}

//Delete Customer Expense
function delete_cust_expense(url)
{
	if (confirm("あなたは確かにあなたがこの費用を削除したいですか？") == true) {
    window.location.href = url;
	}
}




//Delete Customer Tickets-- Customers/view/ticket
function delete_cus_ticket(url)
{
	if (confirm("確かに、このチケットを削除しますか？") == true) {
    window.location.href = url;
	}
}

/////////////////////////////////////////Catalog Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Products-- Catalog/Products
function delete_products(url)
{
	if (confirm("あなたは確かにあなたがこの製品を削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete Category-- Catalog/Category
function delete_category(url)
{
	if (confirm("確かに、このカテゴリを削除しますか？") == true) {
    window.location.href = url;
	}
}

//Delete Category-- Catalog/Category
function delete_taxes(url)
{
	if (confirm("あなたは確かにあなたがこの税を削除したいですか？") == true) {
    window.location.href = url;
	}
}

function delete_tax_class(url)
{
	if (confirm("確かに、この税務授業を削除したいですか？") == true) {
    window.location.href = url;
	}
}

function confirm_delete(txt, url)
{
	if (confirm("あなたはこれを削除したいです "+txt+"?") == true) {
    window.location.href = url;
	}
}
/////////////////////////////////////////Marketing////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////
// Cancel Campaign--Marketing/Campaign
function cancel_campaign(url)
{
	if (confirm("あなたは確かにあなたがこのプロセスをキャンセルしたいですか？") == true) {
    window.location.href = url;
	}
}

// Cancel Template
function cancel_template(url)
{
	if (confirm("あなたは確かにあなたがこのプロセスをキャンセルしたいですか？") == true) {
    window.location.href = url;
	}
}

//Delete Campaign-- Marketing/Campaign
function delete_campaign(url)
{
	if (confirm("あなたは確かにあなたがこのキャンペーンを削除したいですか？") == true) {
    window.location.href = url;
	}
}


//Delete Template-- Marketing/Template
function delete_template(url)
{
	if (confirm("確かに、このテンプレートを削除しますか？") == true) {
    window.location.href = url;
	}
}

function status()
{
	 alert("キャンペーンは予定されていません");
}


/////////////////////////////////////////Sales Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

function delete_proposals(url)

{

	if (confirm("確かに、この提案を削除したいですか？") == true) {

    window.location.href = url;

	}

}

/////////////////////////////////////////////Start///////////////////////////////////////////////////

function delete_Estimates(url)

{

	if (confirm("あなたは確かにあなたがこの見積もりを削除したいですか？") == true) {

    window.location.href = url;

	}

}

/////////////////////////////////////////////Start///////////////////////////////////////////////////

function delete_invoices(url)

{

	if (confirm("あなたは確かにあなたがこの請求書を削除したいですか？") == true) {

    window.location.href = url;

	}

}

/////////////////////////////////////////Broadcast Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Expense-- Expenses/view
function delete_news(url)
{
	if (confirm("あなたはこのニュースを削除したいですか？") == true) {
    window.location.href = url;
	}
}




/////////////////////////////////////////Expenses Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Expense-- Expenses/view
function delete_expence(url)
{
	if (confirm("あなたは確かにあなたがこの費用を削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete Expense receipt-- Expenses/view from edit section
function remove_receipt(url)
{
	if (confirm("あなたは確かにあなたがこの経費の領収書を削除したいですか？") == true) {
    window.location.href = url;
	}
}

/////////////////////////////////////////Support Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Ticket --Support/view
function delete_ticket(url)
{
	if (confirm("確かに、このチケットを削除しますか？") == true) {
    window.location.href = url;
	}
}

/////////////////////////////////////////Reports Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////


//Delete proposals --Reports/Proposals Report
function delete_proposals_report(url)
{
	if (confirm("確かに、この提案を削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete estimates --Reports/Estimates Report
function delete_estimate_report(url)
{
	if (confirm("あなたは確かにあなたがこの見積もりを削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete invoices --Reports/Invoices Report
function delete_invoice_report(url)
{
	if (confirm("あなたは確かにあなたがこの請求書を削除したいですか？") == true) {
    window.location.href = url;
	}
}


function delete_lead_report(url)
{
		if (confirm("あなたは確かにあなたがこのリード報告書を削除したいですか？") == true) {
    			window.location.href = url;
		}
}


function delete_opportunity_report(url)
{
		if (confirm("あなたは確かにこの機会報告書を削除したいですか？") == true) {
    			window.location.href = url;
		}
}

function delete_customer_report(url)
{
		if (confirm("あなたは確かにあなたがこの顧客レポートを削除したいですか？") == true) {
    			window.location.href = url;
		}
}


/////////////////////////////////////////Staff Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Staff --Staff/view
function delete_staff(url)
{
	if (confirm("確かに、このスタッフのメンバーを削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete Staff photo --Staff/Edit
function remove_staff_photo(url)
{
	if (confirm("あなたは確かにあなたがこのスタッフのメンバーイメージを削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete Department --Staff/departments
function delete_department(url)
{
	if (confirm("あなたは確かにあなたがこの部門を削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete Country --Setup/country
function delete_role(url)
{
	if (confirm("あなたは確かにあなたがこの役割を削除したいですか？") == true) {
    window.location.href = url;
	}
}

/////////////////////////////////////////Settings Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Security --Settings/security
function delete_security(url)
{
	if (confirm("あなたは確かにあなたがこのIPを削除したいですか？") == true) {
    window.location.href = url;
	}
}
/////////////////////////////////////////Daily Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////
//Delete Quote--Quote/view
function delete_quote(url)
{
	if (confirm("あなたは確かにあなたがこの引用を削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete Notice--Notice/view
function delete_notice(url)
{
	if (confirm("あなたは確かにあなたがこの通知を削除したいですか？") == true) {
    window.location.href = url;
	}
}

/////////////////////////////////////////Setup Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

//Delete Country --Setup/country
function delete_country(url)
{
	if (confirm("あなたは確かにあなたがこの国を削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete Source --Setup/lead source
function delete_source(url)
{
	if (confirm("あなたは確かにこのソースを削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete Source --Setup/Department
function delete_department(url)
{
	if (confirm("あなたは確かにあなたがこの部門を削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete Source --Setup/Group
function delete_group(url)
{
	if (confirm("あなたは確かにあなたがこのグループを削除したいですか？") == true) {
    window.location.href = url;
	}
}


//Delete Expenses category --Setup/expenses
function delete_expenses_cat(url)
{
	if (confirm("あなたは確かにあなたがこの費用を削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete Currency --Setup/currency
function delete_currency(url)
{
	if (confirm("確かに、この通貨を削除しますか？") == true) {
    window.location.href = url;
	}
}

//Delete Messages --Messages/view
function delete_msg(url)
{
	if (confirm("確かにこのメッセージを削除しますか？") == true) {
    window.location.href = url;
	}
}
/////////////////////////////////////////Profile Menu////////////////////////////////////////////////
/////////////////////////////////////////////Start///////////////////////////////////////////////////

function remove_photo(url)
{
	if (confirm("あなたは確かにこのプロフィール画像を削除したいですか？") == true) {
    window.location.href = url;
	}
}

//Delete Customer Profile image --Customer/profile
function remove_customer_profile(url)
{
	if (confirm("あなたは確かにこのプロフィール画像を削除したいですか？") == true) {
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
					alert("デプリックエントリ。別のメールアドレスを入力してください");
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
