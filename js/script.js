let ism = prompt('Ismingizni kiriting');
let jins = prompt('jinsingizni kiriting');
let yosh = prompt('yoshingizni kiriting');



let bodyText = document.querySelectorAll('.body__text')[0],
  bodyTextSpan = document.querySelectorAll('.body__text-span')[0],
  bodyUylanish = document.querySelectorAll('.uylanish')[0];
bodyFarzand = document.querySelectorAll('.farzand')[0];


if (jins == 'erkak' && yosh <= 18) {
  alert('qizlani oylamiy oqigin')
  bodyText.textContent = `Hurmatli ${ism} san ${yosh} yoshdasan `
  bodyUylanish.textContent = 'qizlani oylamiy oqigin chuntiroldimmi'
} else if (jins == 'erkak' && yosh <= 30) {
  let uylanish = prompt('uylanganmisiz')
  if (uylanish == 'ha' || uylanish == 'da') {
    alert('Ha erkak erkak')
    bodyText.textContent = `Hurmatli ${ism} siz ${yosh} yoshdasiz va uylangansiz`
    bodyUylanish.textContent = 'ja erta uylanibsiz lekin kelajeda omad'
  } else {
 alert('uylaning')
    bodyText.textContent = `Hurmatli ${ism} siz ${yosh} yoshdasiz va uylanmagansiz`
    bodyUylanish.textContent = 'uylanin hali voqt bor'
  }



} else if (jins == 'erkak' && yosh <= 45) {
  let uylanish = prompt('uylanganmisiz')
  if (uylanish == 'ha' || uylanish == 'da') {
    alert('Ha erkak erkak')

    if (uylanish == 'ha') {
      bodyText.textContent = `Hurmatli ${ism} siz ${yosh} yoshdasiz va uylangansiz`
      bodyUylanish.textContent = 'kelajeda omad '
    }
  } else {

    bodyText.textContent = `Hurmatli ${ism} siz ${yosh} yoshdasiz va uylanmagansiz`
    alert('uylaning')
    bodyUylanish.textContent = 'uylanin yoshiz otib qobdi'
  }
} else {
  
  let uylanish = prompt('uylanganmisiz')
  if (uylanish == 'ha' || uylanish == 'da') {
    alert('Ha chol chol')

    if (uylanish == 'ha') {
      bodyText.textContent = `Hurmatli ${ism} siz ${yosh} yoshdasiz va uylangansiz`
      bodyUylanish.textContent = 'kamprichez bilan qosha qarin'
    }
  } else {

    bodyText.textContent = `Hurmatli ${ism} siz ${yosh} yoshdasiz va uylanmagansiz`
    alert('uylanish kere manga etsez bitta korstuvga oboraman sizzi')
    bodyUylanish.textContent = 'uji shartams lekin oziz qarigan bosezam  kongil qarimidi'
  }
}