
frappe.ui.form.on("Payment Entry Cheque", "cheque_amount", function(frm, cdt, cdn) {

   var cheques_details = frm.doc.payment_cheques;
   var total = 0
   for(var i in cheques_details) {
	total = total + cheques_details[i].cheque_amount
	}

	frm.set_value("total_cheques_value",total)

});


frappe.ui.form.on('Payment Entry', {
    validate: function(frm) {
        $.each(frm.doc.payment_cheques, function(i, d) {
            d.paid_from = frm.doc.paid_from;
            d.paid_to = frm.doc.paid_to;
        });
    }
})




frappe.ui.form.on('Payment Entry',  {
    validate: function(frm) {

        if(cur_frm.doc.paid_amount != cur_frm.doc.total_cheques_value){
            msgprint('Cheques Total Value is not equal to Paid Amount');
            validated = false;
        }
    }
});


frappe.ui.form.on("Payment Entry", "refresh", function(frm) {
    frm.add_custom_button(__("Test"), function() {
        frappe.call({
            method:"masar_cheques.custom.payment_entry.payment_entry.defTestButton",
            args:{
            },
            callback: function(r){
            }
        })

    });
});


frappe.ui.form.on("Payment Entry", "refresh", function(frm) {
    frm.add_custom_button(__("Send SMS"), function() {
        frappe.call({
            method:"masar_cheques.custom.payment_entry.payment_entry.defSendSMS",
            args:{
            },
            callback: function(r){
            }
        })

    });
});

frappe.ui.form.on("Payment Entry", "refresh", function(frm) {
    frm.add_custom_button(__("Set Payment Mode to Cash"), function() {
        frappe.call({
            method:"masar_cheques.custom.payment_entry.payment_entry.dfModeOfPaymentCash",
            args:{
            },
            callback: function(r){
            }
        })

    });
});

frappe.ui.form.on("Payment Entry", "refresh", function(frm) {
    frm.add_custom_button(__("Add new Task"), function() {
        frappe.call({
            method:"masar_cheques.custom.payment_entry.payment_entry.defAddTask",
            args:{
            },
            callback: function(r){
            }
        })

    });
});


frappe.ui.form.on("Payment Entry", "test_button", function(frm) {
  let d = new frappe.ui.Dialog({
	    title: 'Enter details',
	    fields: [
	        {
	            label: 'First Name',
	            fieldname: 'first_name',
	            fieldtype: 'Data'
	        },
	        {
	            label: 'Last Name',
	            fieldname: 'last_name',
	            fieldtype: 'Data'
	        },
	        {
	            label: 'Age',
	            fieldname: 'age',
	            fieldtype: 'Int'
	        }
	    ],
	    primary_action_label: 'Submit',
	    primary_action(values) {
	        console.log(values);
	        d.hide();
	    }
	});

	d.show();
});
