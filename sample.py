"""
This tool isn't affiliated to pass-education.fr in any way
-----
🔎Read their privacy policy before use🔎
-----
Usage: rp('http://www.pass-education.fr/auth_telechargement.php?attachment_id=178582&type_mime=application/pdf&parent_id=178579')
"""

import requests

rp = lambda x: x.replace('//www.pass-education.fr/','//cdn.pass-education.fr/').replace('/auth_telechargement.php?','/download.php?').split('/')[:-2]

