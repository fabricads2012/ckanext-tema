from setuptools import setup, find_packages
import sys, os

version = '0.1'

setup(
    name='ckanext-tema',
    version=version,
    description="Extensao criada para modificar algumas paginas do CKAN.",
    long_description='''
    ''',
    classifiers=[], # Get strings from http://pypi.python.org/pypi?%3Aaction=list_classifiers
    keywords='',
    author='Guilherme',
    author_email='gshiki@gmail.com',
    url='',
    license='',
    packages=find_packages(exclude=['ez_setup', 'examples', 'tests']),
    namespace_packages=['ckanext', 'ckanext.tema'],
    include_package_data=True,
    zip_safe=False,
    install_requires=[
        # -*- Extra requirements: -*-
    ],
    entry_points='''
        [ckan.plugins]
        tema=ckanext.tema.plugin:TemaPlugin
    ''',
)
