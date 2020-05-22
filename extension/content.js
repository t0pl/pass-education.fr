/*
author:t0pl

Eg:
URL : http://www.pass-education.fr/suites-geometriques-et-arithmetiques-terminale-s-exercices-corriges
  contains <a class="auth-href" ...> element(s)
  replace href like : http://www.pass-education.fr/auth_telechargement.php?attachment_id=178582&type_mime=application/pdf&parent_id=178579
  to: http://cdn.pass-education.fr/download.php?attachment_id=178582&type_mime=application/pdf

Other file types you can potentially get: zip, rtf (word-compatible, among others)

*/


console.log('start');

function go(){
	console.log('running go'); 
	document.querySelectorAll('.auth-href').forEach(i => i.href = i.href.replace('//www.pass-education.fr/','//cdn.pass-education.fr/').replace('/auth_telechargement.php?','/download.php?').split('&').slice(0,-1).join('&'))
}


if (document.querySelectorAll('.auth-href').length !== 0) {
  go()
}

else {
  document.onreadystatechange = function () {
    if (document.querySelectorAll('.auth-href').length !== 0) {
      go()
    }
  }
}
