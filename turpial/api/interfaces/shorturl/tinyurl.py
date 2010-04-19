# -*- coding: utf-8 -*-

"""Interfaz para tinyurl.com en Turpial"""
#
# Author: Wil Alvarez (aka Satanas)
# Abr 19, 2010

import traceback

from turpial.api.interfaces.generic import GenericService
from turpial.api.interfaces.generic import ServiceResponse

class TinyurlURLShorter(GenericService):
    def __init__(self):
        GenericService.__init__(self)
        self.base = "http://tinyurl.com/api-create.php?url=%s"
        
    def do_service(self, longurl):
        req = self.base % longurl
        try:
            resp = self._get_request(req)
            return ServiceResponse(resp)
        except Exception, error:
            self.log.debug("Error: %s\n%s" % (error, traceback.print_exc()))
            return ServiceResponse(err=True, err_msg=_('Problem shorting URL'))
        
