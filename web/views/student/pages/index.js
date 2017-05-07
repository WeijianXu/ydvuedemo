module.exports = function(templateParams) {
    var _cssList = ['common', 'student-index'];
    var webAssetsHelp = require('../../../webAssetsHelp.js')(templateParams, _cssList);
    var _html = "{% extends '../../studentsResume/pages/layout.html' %} " +
        "{% block title %}[[title]]{% endblock %}" +
        "{% block styles %} " +
        webAssetsHelp.styles +
        "{% endblock %}" +
        '{% block content %}  {% include "../../../widget/student/student.html" %} {% endblock %}' +
        '{% block script%}' +
        webAssetsHelp.scripts +
        '{% endblock%}';
    return _html;
};