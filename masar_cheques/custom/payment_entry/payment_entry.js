
frappe.ui.form.on("Payment Entry Cheque", "cheque_amount", function(frm, cdt, cdn) {

   var cheques_details = frm.doc.payment_cheques;
   var total = 0
   for(var i in cheques_details) {
	total = total + cheques_details[i].cheque_amount
	}

	frm.set_value("total_cheques_value",total)

});




frappe.ui.form.on('Payment Entry',  {
    validate: function(frm) {

        if(cur_frm.doc.paid_amount != cur_frm.doc.total_cheques_value){
            msgprint('Cheques Total Value is not equal to Paid Amount');
            validated = false;
        }
    }
});
