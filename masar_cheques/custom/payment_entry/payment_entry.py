from __future__ import unicode_literals
import frappe, erpnext
from frappe.utils import flt, cstr, nowdate, comma_and
from frappe import throw, msgprint, _

def dfTest(self, method):
#	frappe.msgprint(" Hi My Name is Emad Khabour")
	doc = frappe.get_doc('Payment Entry','ACC-PAY-2020-00003')

@frappe.whitelist()
def dfModeOfPaymentCash():
	frappe.db.set_value('Payment Entry', 'ACC-PAY-2020-00003', 'mode_of_payment', 'Cash')


@frappe.whitelist()
def defSendSMS():
	frappe.msgprint("Hi ,Send SMS , I am Emad")

@frappe.whitelist()
def defAddTask():
	doc = frappe.new_doc('Task')
	doc.title = 'Khabour'
	doc.subject = 'My name is Emad'
	doc.insert()
	# doc = frappe.get_doc({
	#     'doctype': 'Task',
	#     'title': 'Yasser Task',
	#     'subject': 'Hello Dears',
	# })
	#doc.insert()

@frappe.whitelist()
def defTestButton():
	frappe.msgprint("Hi ,Test Button")
