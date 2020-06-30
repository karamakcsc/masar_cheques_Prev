from __future__ import unicode_literals
import frappe, erpnext
from frappe.utils import flt, cstr, nowdate, comma_and
from frappe import throw, msgprint, _

def click_test_button(self, method):
	frappe.msgprint(" Hi My Name is Emad Khabour")
