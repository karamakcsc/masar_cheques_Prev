# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in masar_cheques/__init__.py
from masar_cheques import __version__ as version

setup(
	name='masar_cheques',
	version=version,
	description='Cheques Management App',
	author='KARAMA',
	author_email='yasseralghoul@gmail.com',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
