var TAGS = [
  ["*", "b"],
  ["_", "i"],
  ["~", "s"],
  ["```", "code"]
];
var selectionStart = -1,
  selectionEnd = -1;
document.getElementById("conteudoDinamico").style.display = "";
document.form.whatsappText.style.minHeight = document.form.whatsappText.offsetHeight + "px";
document.form.style.maxWidth = document.form.whatsappText.offsetWidth + "px";

function whatsappTextSelected() {
  selectionStart = document.form.whatsappText.selectionStart;
  selectionEnd = document.form.whatsappText.selectionEnd;
  update()
}

function format(t) {
  if (selectionStart === selectionEnd)
    return;
  var e = TAGS[t][0],
    n = document.form.whatsappText.value;
  n = n.substring(0, selectionStart) + e + n.substring(selectionStart, selectionEnd) + e + n.substring(selectionEnd);
  document.form.whatsappText.value = n;
  selectionStart = selectionEnd = -1;
  update()
}

function update() {
  selectionStart = document.form.whatsappText.selectionStart;
  selectionEnd = document.form.whatsappText.selectionEnd;
  var t = selectionStart === selectionEnd ? true : false;
  document.form.buttonCopy.disabled = document.form.whatsappText.value.length === 0 ? true : false;
  document.form.buttonBold.disabled = t;
  document.form.buttonItalic.disabled = t;
  document.form.buttonStrikethrough.disabled = t;
  document.form.buttonMonospace.disabled = t;
  var e = document.form.whatsappText.value.replace(/&/g, "&").replace(/>/g, ">").replace(/</g, "&lt;").replace(/\n/g, "<br />");
  for (var n = 0; n < TAGS.length; n++) {
    var o = e.indexOf(TAGS[n][0]),
      a = e.indexOf(TAGS[n][0], o + 1);
    while (o > -1 && a > -1) {
      e = e.substring(0, o) + "<" + TAGS[n][1] + ">" + e.substring(o + TAGS[n][0].length, a) + "</" + TAGS[n][1] + ">" + e.substring(a + TAGS[n][0].length);
      o = e.indexOf(TAGS[n][0], a + 1);
      a = e.indexOf(TAGS[n][0], o + 1)
    }
  }
  document.getElementById("textoeditado").innerHTML = e.length > 0 ? e : '<font color="gray">Aqui você verá como seu texto ficará.</font>'
}