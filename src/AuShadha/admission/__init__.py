################################################################################
# Project : AuShadha
# Description: Admission Module Vars
# Date : 08-10-2013
# License : GNU-GPL Version 3, see LICENSE.txt
################################################################################

from django.core.urlresolvers import reverse, reverse_lazy


MODULE_IDENTIFIER = 'aushadha-admission'
MODULE_LABEL = 'Admission'
MODULE_TYPE = 'main_module'
PACKAGE_NAME = 'aushadha-admission'
VERSION = 0.01
PARENT_MODULE = 'aushadha'
DEPENDS_ON = ['aushadha','patient',]

ui_sections = {'app_type': 'main_module',
               'load_after':'patient',
               'load_first': False,
               'layout' : ['trailing','top','center'],
               'widgets':{ 'tree'    : '/AuShadha/admission/admission/tree/',
                           'summary' : '',
                           'grid'    : '/AuShadha/admission/admission/json/',
                           'search'  : ''
                          }
              }

